# Copyright 2019 Jetperch LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from PySide2 import QtWidgets, QtGui, QtCore
import pyqtgraph as pg
import weakref
from .signal import Signal
from .signal_statistics import si_format, html_format
from joulescope.units import three_sig_figs
import logging


TIME_STYLE_DEFAULT = 'color: #FFF; background-color: #000; font-size: 8pt'


class Marker(pg.GraphicsObject):
    """A vertical x-axis marker for display on the oscilloscope.

    :param cmdp: The command processor instance.
    :param name: The name for the marker.  By convention, single markers are
        number strings, like '1', and marker pairs are like 'A1' and 'A2'.
    :param x_axis: The x-axis :class:`pg.AxisItem` instance.
    :param color: The [R,G,B] or [R,G,B,A] color for the marker.
    :param shape: The marker flag shape which is one of:
        ['full', 'left', 'right', 'none'].
    """

    def __init__(self, cmdp, name, x_axis: pg.AxisItem, state=None):
        pg.GraphicsObject.__init__(self)
        state.setdefault('pos', None)
        state.setdefault('color', (64, 255, 64, 255))
        state.setdefault('shape', 'full')
        self._cmdp = cmdp
        self.log = logging.getLogger('%s.%s' % (__name__, name))
        self._name = name
        self._axis = weakref.ref(x_axis)
        self._boundingRect = None
        self.picture = None
        self._x = None  # in self._axis coordinates
        self._pair = None
        self.moving = False
        self.moving_offset = 0.0
        self._marker_time_text = pg.TextItem("t=0.00")
        self._delta_time_text = pg.TextItem("")
        self._delta_time_text.setAnchor([0.5, 0])
        self._delta_time_text.setVisible(False)
        self.graphic_items = [self._marker_time_text, self._delta_time_text]
        self.text = {}  #: Dict[str, List[weakref.ReferenceType[Signal], TextItem]]

        self._instance_prefix = f'Widgets/Waveform/Markers/_state/instances/{name}/'
        for key, value in state.items():
            self._cmdp.preferences.set(self._instance_prefix + key, value)
        self.set_pos(state.get('pos'))

    def __str__(self):
        return f'Marker({self.name})'

    def remove(self):
        state = {'name': self._name}
        preferences = self._cmdp.preferences.match(self._instance_prefix)
        for p in preferences:
            state[p.split('/')[-1]] = self._cmdp.preferences.clear(p)
        return state

    @property
    def name(self):
        return self._name

    @property
    def is_single(self):
        return self._pair is None

    @property
    def is_right(self):
        return self._pair is not None and self.name[-1] == '2'

    @property
    def is_left(self):
        return self._pair is not None and self.name[-1] == '1'

    @property
    def pair(self):
        return self._pair

    @pair.setter
    def pair(self, value):
        self._pair = value
        if self.is_left:
            self._marker_time_text.setAnchor([1, 0])
            self._delta_time_text.setVisible(True)
        else:
            self._marker_time_text.setAnchor([0, 0])
        self._redraw()

    def _endpoints(self):
        """Get the endpoints in the scene's (parent) coordinates.

        :return: (top, bottom) pg.Point instances
        """
        axis = self._axis()
        if axis is None:
            return None, None
        vb = axis.linkedView()
        if vb is None or self._x is None:
            return None, None
        bounds = axis.geometry()
        tickBounds = vb.geometry()
        point = pg.Point(self._x, 0.0)
        x = vb.mapViewToScene(point).x()
        p1 = pg.Point(x, bounds.bottom())
        p2 = pg.Point(x, tickBounds.bottom())
        return p1, p2

    def boundingRect(self):
        r = self._boundingRect
        if r is not None:  # use cache
            return r
        axis = self._axis()
        if axis is None:
            return QtCore.QRectF()
        top = axis.geometry().top()
        h = axis.geometry().height()
        w = h // 2 + 1
        p1, p2 = self._endpoints()
        if p2 is None:
            return QtCore.QRectF()
        x = p2.x()
        bottom = p2.y()
        self._boundingRect = QtCore.QRectF(x - w, top, 2 * w, bottom - top)
        # self.log.debug('boundingRect: %s => %s', self._x, str(self._boundingRect))
        return self._boundingRect

    def paint_flag(self, painter, p1):
        axis = self._axis()
        if axis is None:
            return
        h = axis.geometry().height()
        he = h // 3
        w2 = h // 2
        shape = self._cmdp[self._instance_prefix + 'shape']
        color = self._cmdp[self._instance_prefix + 'color']
        if shape in [None, 'none']:
            return
        if shape in ['right']:
            wl, wr = -w2, 0
        elif shape in ['left']:
            wl, wr = 0, w2
        else:
            wl, wr = -w2, w2

        brush = pg.mkBrush(color)
        painter.setBrush(brush)
        painter.setPen(None)
        painter.resetTransform()

        painter.translate(p1)
        painter.drawConvexPolygon([
            pg.Point(0, 0),
            pg.Point(wl, -he),
            pg.Point(wl, -h),
            pg.Point(wr, -h),
            pg.Point(wr, -he)
        ])

    def paint(self, p, opt, widget):
        profiler = pg.debug.Profiler()
        axis = self._axis()
        if axis is None or axis.linkedView() is None:
            return
        color = self._cmdp[self._instance_prefix + 'color']
        if self.picture is None:
            try:
                p.resetTransform()
                picture = QtGui.QPicture()
                painter = QtGui.QPainter(picture)
                pen = pg.mkPen(color)
                pen.setWidth(1)
                painter.setPen(pen)
                p1, p2 = self._endpoints()
                if p1 is not None and p2 is not None:
                    painter.drawLine(p1, p2)
                    self.paint_flag(painter, p1)
                profiler('draw picture')
            finally:
                painter.end()
            self.picture = picture
        self.picture.play(p)

    def _redraw(self):
        self.picture = None
        self._boundingRect = None
        self._update_marker_text()
        self.prepareGeometryChange()
        self.update()

    def resizeEvent(self, ev=None):
        self._redraw()

    def viewRangeChanged(self):
        self._redraw()

    def viewTransformChanged(self):
        self._redraw()

    def linkedViewChanged(self, view, newRange=None):
        self._redraw()

    def set_pos(self, x):
        """Set the x-axis position for the marker.

        :param x: The new x-axis position in Axis coordinates.
        """
        if x == self._x:
            return
        self._x = x
        self._axis().marker_moving_emit(self.name, x)
        self._cmdp.publish(self._instance_prefix + 'pos', x)
        self._redraw()

    def _update_marker_text(self):
        x = self._x
        style = TIME_STYLE_DEFAULT
        if self._x is None:
            html = ''
        else:
            html = f'<div><span style="{style}">t={x:.6f}</span></div>'
        self._marker_time_text.setHtml(html)
        axis = self._axis()
        if axis is None:
            return
        vb = axis.linkedView()
        if vb is None or self._x is None:
            return
        g = axis.geometry()
        axis_top = g.top()
        axis_height = axis.geometry().height()
        text_offset = axis_height // 2
        x_scene = vb.mapViewToScene(pg.Point(x, 0.0)).x()
        if self._pair is None:
            self._marker_time_text.setPos(x_scene + text_offset, axis_top)
        elif self.is_left:
            self._marker_time_text.setPos(x_scene, axis_top)
            self._update_delta_time()
        else:
            self._marker_time_text.setPos(x_scene, axis_top)
            self._pair._update_delta_time()

    def _update_delta_time(self):
        if self.is_left:
            style = TIME_STYLE_DEFAULT
            axis = self._axis()
            if axis is None:
                return
            axis_top = axis.geometry().top()
            vb = axis.linkedView()
            if vb is None:
                return
            x_left = self._x
            x_right = self._pair._x
            if x_left is None or x_right is None:
                self._delta_time_text.setHtml('')
                return
            dx = abs(x_right - x_left)
            x_center = (x_left + x_right) / 2
            x_scene = vb.mapViewToScene(pg.Point(x_center, 0.0)).x()
            dx_str = three_sig_figs(dx, 's')
            self._delta_time_text.setHtml(f'<div><span style="{style}">Δt={dx_str}</span></div>')
            self._delta_time_text.setPos(x_scene, axis_top)
        elif self.is_right:
            self._pair._update_delta_time()

    def get_pos(self):
        """Get the current x-axis position for the marker.

        :return: The current x-axis position in the Axis coordinates.
        """
        return self._x

    def on_xChangeSignal(self, x_min, x_max, x_count):
        self._redraw()

    def mouseClickEvent(self, ev):
        self.log.info('mouseClickEvent(%s)', ev)
        ev.accept()
        if not self.moving:
            self.moving_offset = 0.0
            if ev.button() == QtCore.Qt.LeftButton:
                self.moving = True
                # https://doc.qt.io/qt-5/qt.html#KeyboardModifier-enum
                if int(QtGui.Qt.ControlModifier & ev.modifiers()) and self.pair is not None:
                    self.pair.moving = True
                    self.pair.moving_offset = self.pair.get_pos() - self.get_pos()
            elif ev.button() == QtCore.Qt.RightButton:
                pos = ev.screenPos().toPoint()
                self.menu_exec(pos)
        else:
            if ev.button() == QtCore.Qt.LeftButton:
                self.moving = False
                if self.pair is not None:
                    self.pair.moving = False
                    self.pair.moving_offset = 0.0
            elif ev.button() == QtCore.Qt.RightButton:
                pass  # todo restore original position

    def _range_tool_factory(self, range_tool_name):
        def fn(*args, **kwargs):
            if self._pair is None:
                raise RuntimeError('analysis only available on dual markers')
            p1 = self.get_pos()
            p2 = self._pair.get_pos()
            value = {
                'name': range_tool_name,
                'x_start': min(p1, p2),
                'x_stop': max(p1, p2)
            }
            self._cmdp.invoke('!RangeTool/run', value)
        return fn

    def _remove(self, *args, **kwargs):
        if self.pair is not None:
            removes = [self.name, self.pair.name]
        else:
            removes = [self.name]
        self._cmdp.invoke('!Widgets/Waveform/Markers/remove', [removes])

    def menu_exec(self, pos):
        instances = []  # hold on to QT objects
        menu = QtWidgets.QMenu()
        menu.setToolTipsVisible(True)
        submenus = {}
        if self._pair is not None:
            plugins = self._cmdp['Plugins/#registered']
            for name in plugins.range_tools.keys():
                m, subm = menu, submenus
                name_parts = name.split('/')
                while len(name_parts) > 1:
                    name_part = name_parts.pop(0)
                    if name_part not in subm:
                        subm[name_part] = [m.addMenu(name_part), {}]
                        m, subm = subm[name_part]
                    else:
                        m, subm = subm[name_part]
                t = QtWidgets.QAction(name_parts[0], self)
                t.triggered.connect(self._range_tool_factory(name))
                m.addAction(t)
                instances.append(t)
        marker_remove = QtWidgets.QAction('&Remove', self)
        marker_remove.triggered.connect(self._remove)
        menu.addAction(marker_remove)
        menu.exec_(pos)

    def setVisible(self, visible):
        super().setVisible(visible)
        for item in self.graphic_items:
            item.setVisible(visible)
