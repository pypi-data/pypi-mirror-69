#!/usr/bin/env python 
# encoding: utf-8

"""
A set of utilities to use spike in NMR or FTMS within jupyter


First version MAD june 2017
definitive ? version MAD october 2019

"""

from __future__ import print_function, division
import unittest
import sys
import os
import os.path as op
import glob

import matplotlib.pylab as plt
import matplotlib.gridspec as gridspec
from matplotlib.widgets import MultiCursor
from ipywidgets import fixed, Layout, HBox, VBox, Label, Output, Button, Tab
import ipywidgets as widgets
from IPython.display import display, HTML, Javascript
import numpy as np

from ..File.BrukerNMR import Import_1D
from .. import NPKData
try:
    import spike.plugins.bcorr as bcorr
except:
    print('Baseline correction plugins not installed !')

# REACTIVE modify callback behaviour
# True is good for inline mode / False is better for notebook mode
REACTIVE = True
HEAVY = False

def hidecode(initial='show', message=True):
    """
    this func adds a button to hide/show the code on a jupyter page
    initial is either 'show' or 'hide'
    inspired from: https://stackoverflow.com/questions/27934885/how-to-hide-code-from-cells-in-ipython-notebook-visualized-with-nbviewer/28073228#28073228
    """
    from IPython.display import display, HTML, Markdown
    if initial == 'show':
        init = 'false'
    elif initial == 'hide':
        init = 'true'
    if message:
        msg = "<i>usefull to show/print a clean screen when processing is finished</i>"
    else:
        msg = ""
    display(HTML('''
<style>hr {height: 2px; border: 0;border-top: 1px solid #ccc;margin: 1em 0;padding: 0; }</style>
<script>
code_show=%s; 
function code_toggle() { if (code_show){ $('div.input').hide(); } else { $('div.input').show(); } code_show = !code_show } 
$( document ).ready(code_toggle);
</script>
<form action="javascript:code_toggle()">
<input type="submit" style="border:1px solid black; background-color:#DDD" value="hide/show the python code.">
%s
</form>'''%(init, msg)))

def jsalert(msg):
    "send a javascript alert"
    display(Javascript("alert('%s')"%msg))

class FileChooser:
    """a simple file chooser for Jupyter - obsolete - not used"""
    def __init__(self, base=None, filetype=['fid','ser'], mode='r', show=True):
        if base is None:
            self.curdir = "/"
        else:
            self.curdir = base
        self.filetype = filetype
        self.mode = mode
        self.wfile = widgets.Text(layout=Layout(width='70%'),description='File to load')
        self.ldir = widgets.Label(value="Chosen dir:  "+self.curdir)
        self.wdir = widgets.Select(
            options=self.dirlist(),
            description='Choose Dir',
            layout=Layout(width='70%'))
        if mode=='r':
            self.wchooser = widgets.Select(
                options=self.filelist(),
                description='Choose File',
                layout=Layout(width='70%'))
            self.wchooser.observe(self.wob)
            self.wfile.disabled=True   # not mofiable in read mode
        elif mode=="w":
            self.wfile.description = 'File to create'
            self.wfile.disabled=False
            self.wchooser = widgets.Select(
                options=self.filelist(),
                description='Files',
                layout=Layout(width='70%'))
        else:
            raise Exception('Only "r" and  "w" modes supported')
        self.wsetdir = Button(description='❯',layout=Layout(width='20%'),
                button_style='success', # 'success', 'info', 'warning', 'danger' or ''
                tooltip='descend in directory')
        self.wup = Button(description='❮',layout=Layout(width='20%'),
                button_style='success', # 'success', 'info', 'warning', 'danger' or ''
                tooltip='up to previous directory')
        self.wsetdir.on_click(self.setdir)
        self.wup.on_click(self.updir)
        if show: self.show()
    def filelist(self):
        fl = []
        if self.mode == 'r':
            if type(self.filetype) is str:
                fl = glob.glob(op.join(self.curdir,self.filetype))
            elif type(self.filetype) in (tuple, list):
                for f in self.filetype:
                    fl += glob.glob(op.join(self.curdir,f))
            else:
                raise Exception('TypeError, filetype should be either a string or a list')
        else:   # 'w'
            fl = [f for f in glob.glob(op.join(self.curdir,'*')) if op.isfile(f)]
            self.wfile.value = op.join(self.curdir,self.filetype)
        if fl == []:
            fl = [" "]
        return fl
    def dirlist(self):
        base = self.curdir
        return [d for d in glob.glob(op.join(base,'*')) if (op.isdir(d) and not d.endswith('__pycache__'))]
    def wob(self, e):
        self.wfile.value = self.wchooser.value
    def updir(self, e):
        self.curdir = op.dirname(self.curdir)
        self.ldir.value = "Chosen dir:  "+self.curdir
        self.wdir.options = self.dirlist()
        self.wchooser.options = self.filelist()
    def setdir(self, e):
        self.curdir = self.wdir.value
        self.ldir.value = "Chosen dir:  "+self.curdir
        self.wdir.options = self.dirlist()
        self.wchooser.options = self.filelist()
    def show(self):
        display(VBox(
            [   self.ldir,
            HBox( [self.wdir, VBox([self.wup,self.wsetdir])] ),    
                self.wchooser,
                self.wfile
            ])
        )
        return self
    @property
    def file(self):
        "the chosen complete filename"
        return self.wfile.value
    @property
    def dirname(self):
        "the final dirname containing the chosen file"
        if op.isdir(self.wfile.value):
            return op.basename(self.wfile.value)
        else:
            return op.basename(op.dirname(self.wfile.value))
    @property
    def nmrname(self):
        "the final dirname containing the chosen file for TopSpin files"
        if op.isdir(self.wfile.value):
            return op.join(
                op.basename(op.dirname(self.wfile.value)), self.dirname)
        else:
            return op.join(
                op.basename(op.dirname(op.dirname(self.wfile.value))), self.dirname)
    @property
    def basename(self):
        "the basename of the chosen file"
        return op.basename(self.wfile.value)

class Show1D(HBox):
    """
    An interactive display, 1D NMR
        Show1D(spectrum)
    to be developped for peaks and integrals
    """
    def __init__(self, data, title=None, figsize=None, reverse_scroll=False, show=True):
        """
        data : to be displayed
        title : text for window
        figsize : size in inches (x,y)
        reverse_scroll : if True, reverses direction of mouse scroll
        """
        super().__init__()
        self.data = data
        self.title = title
        if figsize is None:
            figsize = (10,5)
        if reverse_scroll:
            self.reverse_scroll = -1
        else:
            self.reverse_scroll = 1
        self.blay = Layout(width='80px')  # default layout for buttons
        self.done = Button(description="Done", button_style='success',layout=self.blay)
        self.done.on_click(self.on_done)
        self.reset = Button(description="Reset", button_style='success',layout=self.blay)
        self.reset.on_click(self.on_reset)
        self.scale = widgets.FloatSlider(description='scale:', value=1.0, min=1.0, max=200, step=0.1,
                            layout=Layout(width='80px', height=str(0.8*2.54*figsize[1])+'cm'), continuous_update=REACTIVE,
                            orientation='vertical')
        for widg in (self.scale,):
            widg.observe(self.ob)
        plt.ioff()
        fi,ax = plt.subplots(figsize=figsize)
        self.ax = ax
        self.fig = fi
        self.xb = self.ax.get_xbound()
        self.blank = widgets.HTML("&nbsp;",layout=self.blay)
        self.children = [  VBox([self.blank, self.reset, self.scale, self.done]), self.fig.canvas ]
        self.set_on_redraw()
        plt.ion()
        if show:
            display( self )
            self.data.display(figure=self.ax, title=self.title)
    def on_done(self, b):
        self.close()
        display(self.fig)   # shows spectrum
    def on_reset(self, b):
        self.scale.value = 1.0
        self.ax.set_xbound( (self.data.axis1.itop(0),self.data.axis1.itop(self.data.size1)) )
    def ob(self, event):
        "observe events and display"
        if event['name']=='value':
            self.disp()
    def scale_up(self, step):
        self.scale.value *= 1.1892**(self.reverse_scroll*step) # 1.1892 is 4th root of 2.0
    def set_on_redraw(self):
        def on_scroll(event):
            self.scale_up(event.step)
        cids = self.fig.canvas.mpl_connect('scroll_event', on_scroll)
    def disp(self):
        self.xb = self.ax.get_xbound()
        self.ax.clear()
        self.data.display(scale=self.scale.value, new_fig=False, figure=self.ax, title=self.title)
        self.ax.set_xbound(self.xb)
        #self.set_on_redraw()
class baseline1D(Show1D):
    def __init__(self, data, figsize=None, reverse_scroll=False, show=True):
        super().__init__( data, figsize=figsize, reverse_scroll=reverse_scroll, show=False)
        self.data.real()
        ppos = self.data.axis1.itop(self.data.axis1.size/2)
        #self.ax.plot([ppos,ppos], self.ax.get_ybound())
        self.select = widgets.FloatSlider(description='select:',
                        min=0.0, max=self.data.size1,
                        layout=Layout(width='100%'),
                        value=0.5*self.data.size1, readout=False, continuous_update=REACTIVE)
        self.smooth = widgets.IntSlider(description='smooth:', min=0, max=20,  layout=Layout(width='70%'),
                                        tooltip='apply a local smoothing for pivot points',
                                         value=1, readout=True, continuous_update=REACTIVE)
        self.bsl_points = []
        for w in [self.select, self.smooth]:
            w.observe(self.ob)
        bsize = '15%'
        self.cancel = widgets.Button(description="Cancel", button_style='warning', layout=Layout(width='10%'))
        self.cancel.on_click(self.on_cancel)
        self.auto = widgets.Button(description="Auto", button_style='success', layout=Layout(width=bsize),
            tooltip='Automatic set of points')
        self.auto.on_click(self.on_auto)
        self.set = widgets.Button(description="Add", button_style='success', layout=Layout(width=bsize),
            tooltip='Add a baseline point at the selector position')
        self.set.on_click(self.on_set)
        self.unset = widgets.Button(description="Rem", button_style='warning', layout=Layout(width=bsize),
            tooltip='Remove the baseline point closest to the selector')
        self.unset.on_click(self.on_unset)
        self.toshow = widgets.Dropdown( options=['baseline', 'corrected', 'points'],  description='Display:')
        self.toshow.observe(self.ob)
        self.Box = VBox([
            HBox([self.done, self.cancel, self.toshow,
                widgets.HTML('Choose baseline points')]),
            HBox([self.select,self.set, self.unset, self.auto, self.smooth]),
            self])
        def on_press(event):
            v = self.data.axis1.ptoi(event.xdata)
            self.select.value = abs(v)
        cids = self.fig.canvas.mpl_connect('button_press_event', on_press)

        if show: self.show()
    def show(self):
        "create the widget and display the spectrum"
        display(self.Box)
        self.data.display(figure=self.ax)
        self.xb = self.ax.get_xbound()  # initialize zoom
        ppos = self.data.axis1.itop(self.select.value)
        self.ax.plot([ppos,ppos], self.ax.get_ybound())
    def close(self):
        "close all widget"
        for w in [ self.select, self.auto, self.set, self.unset, self.cancel, self.toshow, self.smooth, self.Box]:
            w.close()
        super().close()
    def on_done(self, e):
        if self.bsl_points == []:
            jsalert('Please define control points before applying baseline correction')
            return
        self.close()
        print('Applied correction:\n', sorted(self.bsl_points))
        self.data.set_buffer( self.data.get_buffer() - self.correction() )
        super().disp()
        display(self.fig)   # shows spectrum
    def on_auto(self, e):
        "automatically set baseline points"
        self.bsl_points = [self.data.axis1.itop(x) for x in bcorr.autopoints(self.data)]
        self.disp()
    def on_cancel(self, e):
        self.close()
        super().disp()
        display(self.fig)   # shows spectrum
    def on_set(self, e):
        "add baseline points at selector"
        self.bsl_points.append( self.selpos() )
        self.disp()
    def on_unset(self, e):
        "remove baseline points closest from selector"
        here = self.selpos()
        distclose = np.inf
        pclose = np.NaN
        for i,p in enumerate(self.bsl_points):
            if abs(p-here)< distclose:
                pclose = p
                distclose = abs(p-here)
        self.bsl_points.remove(pclose)
        self.disp()
    def selpos(self):
        "returns selector pos in ppm"
        return self.data.axis1.itop(self.select.value)
    def smoothed(self):
        "returns a smoothed version of the data"
        from scipy.signal import fftconvolve
        buf = self.data.get_buffer()
        mask = np.array([1,1,1,1,1])
        return fftconvolve(buf, mask, mode='same')
    def correction(self):
        "returns the correction to apply as a numpy array"
        ibsl_points = self.data.axis1.ptoi( np.array(self.bsl_points) ).astype(int)
        x = np.arange(self.data.size1)
        yy = self.data.get_buffer()
        if len(self.bsl_points) == 0 :
            return 0.0
        elif len(self.bsl_points) == 1 :
            value = self.data[ibsl_points[0]] * np.ones( self.data.size1 )
        elif len(self.bsl_points) < 4 :
            corr = bcorr._linear_interpolate(yy, ibsl_points, nsmooth=self.smooth.value)
            value = corr(x)
        else:
            corr = bcorr._spline_interpolate(yy, ibsl_points, nsmooth=self.smooth.value)
            value = corr(x)
        return value
    def corrected(self):
        value = self.data.copy()
        value.set_buffer( value.get_buffer() - self.correction() )
        return value
    def disp(self):
        "compute and display the spectrum"
        self.xb = self.ax.get_xbound()
        # box
        super().disp()
        # data
        if len(self.bsl_points)>0:
            if self.toshow.value == 'baseline':
                ( self.data.copy()-self.corrected() ).display(new_fig=False, figure=self.ax, color='r')
            elif self.toshow.value == 'corrected':
                self.ax.clear()
                self.corrected().display(new_fig=False, figure=self.ax, color='r', scale=self.scale.value)
        # selector
        ppos = self.selpos()
        self.ax.plot([ppos,ppos], self.ax.get_ybound())
        # pivots
        y = bcorr.get_ypoints(  self.data.get_buffer(), 
                                self.data.axis1.ptoi( np.array(self.bsl_points)),
                                nsmooth=self.smooth.value )
        self.ax.scatter(self.bsl_points, y, c='r', marker='o')
        # set zoom
        self.ax.set_xbound(self.xb)

class Show1Dplus(Show1D):
    def __init__(self, data, figsize=None, title=None, reverse_scroll=False):
        super().__init__( data, figsize=figsize, title=title, reverse_scroll=reverse_scroll)
        self.scaleint = widgets.FloatSlider(value=0.5, min=0.1, max=10, step=0.05,
                            layout=Layout(width='20%'), continuous_update=REACTIVE)
        self.offset = widgets.FloatSlider(value=0.3, min=0.0, max=1.0, step=0.01,
                            layout=Layout(width='20%'), continuous_update=REACTIVE)
        self.peaks = widgets.Checkbox(value=False, layout=Layout(width='15%'))
        self.integ = widgets.Checkbox(value=False, layout=Layout(width='15%'))

        for widg in (self.scaleint, self.offset, self.peaks, self.integ):
            widg.observe(self.ob)
        self.fullBox = VBox([  HBox([Label('Integral scale:'),self.scaleint,Label('offset:'),self.offset]),
                        HBox([Label('Show Peaks'),self.peaks,Label('integrals'),self.integ])
                    ])
        display(self.fullBox)
    def on_done(self, e):
        self.fullBox.close()
        super().close()
        self.disp(zoom=True)
        display(self.fig)
    def disp(self, zoom=False):
        "refresh display - if zoom is True, display only in xbound"
        self.xb = self.ax.get_xbound()
        # self.yb = self.ax.get_ybound()
        if zoom:
            zoom = self.xb
        else:
            zoom = None
        self.ax.clear()
        self.data.display(scale=self.scale.value, new_fig=False, figure=self.ax, title=self.title, zoom=zoom)
        if self.integ.value:
            try:
                self.data.display_integral(label=True, integscale=self.scaleint.value,
                    integoff=self.offset.value, figure=self.ax, zoom=zoom)
            except:
                print('no or wrong integrals')
                pass
        if self.peaks.value:
            try:
                self.data.display_peaks(peak_label=True, figure=self.ax, scale=self.scale.value, zoom=zoom)
            except:
                print('no or wrong peaklist')
                pass
        self.ax.set_xbound(self.xb)


class baseline2D_F2(baseline1D):
    def __init__(self, data, figsize=None):
        self.data2D = data
        super().__init__( self.data2D.projF2, figsize=figsize)
    def on_done(self, e):
        super().on_done(e)
        ibsl_points = [int(self.data2D.axis2.ptoi(x)) for x in self.bsl_points]
        self.data2D.bcorr(method='spline', xpoints=ibsl_points)

class Show2D(object):
    """
    A display for 2D NMR with a scale cursor
    Show2D(spectrum) where spectrum is a NPKData object
    - special display for DOSY.
    """
    def __init__(self, data, title=None, figsize=None):
        self.data = data
        self.isDOSY =  isinstance(data.axis1, NPKData.LaplaceAxis)
        try:
            self.proj2 = data.projF2
        except:
            self.proj2 = data.proj(axis=2).real()
        try:
            self.proj1 = data.projF1
        except:
            self.proj1 = data.proj(axis=1).real()
        self.title = title
        self.scale = widgets.FloatLogSlider(description='scale:', value=1.0, min=-1, max=3,  base=10, step=0.01,
                            layout=Layout(width='80%'), continuous_update=HEAVY)
        self.posview = widgets.Checkbox(value=True,description='Positive', tooltip='Display Positive levels')
        self.negview = widgets.Checkbox(value=False,description='Negative', tooltip='Display Negative levels')
        self.cursors = widgets.Checkbox(value=False,description='Cursors', tooltip='show cursors (cpu intensive !)')
        for w in (self.scale, self.posview, self.negview, self.cursors):
            w.observe(self.ob)
        grid = {'height_ratios':[1,4],'hspace':0,'wspace':0}
        if self.isDOSY:
            fsize = (10,5)
            grid['width_ratios']=[7,1]
        else:
            fsize = (8,8)
            grid['width_ratios']=[4,1]
#        fig, self.axarr = plt.subplots(2, 1, sharex=True, figsize=fsize, gridspec_kw=grid)
        self.fig = plt.figure(figsize=fsize, constrained_layout=False)
        spec2 = gridspec.GridSpec(ncols=2, nrows=2, figure=self.fig, **grid)
        axarr = np.empty((2,2), dtype=object)
        axarr[0,0] = self.fig.add_subplot(spec2[0, 0])
        axarr[1,0] = self.fig.add_subplot(spec2[1, 0],sharex=axarr[0, 0])
        axarr[1,1] = self.fig.add_subplot(spec2[1, 1],sharey=axarr[1, 0])
        self.top_ax = axarr[0,0]
        self.spec_ax = axarr[1,0]
        self.side_ax = axarr[1,1]
        self.multitop = None
        self.multiside = None
        self.Box = HBox( [self.scale, self.posview, self.negview, self.cursors])
        display( self.Box )
        self.disp(new=True)
    def on_done(self, b):
        self.scale.close()
    def ob(self, event):
        "observe events and display"
        if event['name'] != 'value':
            return
        self.disp()
    def disp(self,new=False):
        if new:
            self.proj2.display(figure=self.top_ax, title=self.title)
            xb = self.top_ax.get_xbound()
            dataxis = self.proj1.axis1.itoc( self.proj1.axis1.points_axis() )
            self.side_ax.plot(self.proj1.get_buffer(),dataxis)
            yb = self.side_ax.get_ybound()
        else:
            yb = self.side_ax.get_ybound()
            xb = self.top_ax.get_xbound()
            self.spec_ax.clear()
        if self.cursors.value:
            self.multitop = MultiCursor(self.fig.canvas, (self.spec_ax, self.top_ax), color='r', lw=1, horizOn=False, vertOn=True)
            self.multiside = MultiCursor(self.fig.canvas, (self.spec_ax, self.side_ax), color='r', lw=1, horizOn=True, vertOn=False)
        else:
            self.multitop = None
            self.multiside = None
        if self.posview.value:
            self.data.display(scale=self.scale.value, new_fig=False, figure=self.spec_ax)
        if self.negview.value:
            self.data.display(scale=-self.scale.value, new_fig=False,
                figure=self.spec_ax, mpldic={'cmap':'Wistia'})
        self.spec_ax.set_xbound(xb)
        self.spec_ax.set_ybound(yb)

class Phaser1D(Show1D):
    """
    An interactive phaser in 1D NMR

        Phaser1D(spectrum)

    requires %matplotlib widget

    """
    def __init__(self, data, figsize=None, title=None, reverse_scroll=False, show=True):
        data.check1D()
        if data.itype == 0:
            jsalert('Data is Real - Please redo Fourier Transform')
            return
        super().__init__( data, figsize=figsize, title=title, reverse_scroll=reverse_scroll, show=False)
        self.p0 = widgets.FloatSlider(description='P0:',min=-180, max=180, step=0.1,
                            layout=Layout(width='100%'), continuous_update=REACTIVE)
        self.p1 = widgets.FloatSlider(description='P1:',min=-360, max=360, step=1.0,
                            layout=Layout(width='100%'), continuous_update=REACTIVE)
        self.pivot = widgets.FloatSlider(description='pivot:',
                        min=0.0, max=self.data.size1,
                        step=1, layout=Layout(width='80%'),
                        value=0.5*self.data.size1, readout=False, continuous_update=REACTIVE)
        self.cancel = widgets.Button(description="Cancel", button_style='warning')
        self.cancel.on_click(self.on_cancel)
        # remove done button and create an Apply one
        self.done.close()
        self.apply = widgets.Button(description="Done", button_style='success')
        self.apply.on_click(self.on_Apply)
        # draw HBox
        self.children = [VBox([
                            HBox([self.apply, self.cancel, self.pivot, widgets.HTML('<i>set by clicking on spectrum</i>')]),
                            self.p0,
                            self.p1,
                            HBox([VBox([self.blank, self.reset, self.scale]), self.fig.canvas]) ])]
        # add interaction
        for w in [self.p0, self.p1, self.scale]:
            w.observe(self.ob)
        self.pivot.observe(self.on_movepivot)
        # add click event on spectral window
        def on_press(event):
            self.pivot.value = self.data.axis1.ptoi(event.xdata)
        cids = self.fig.canvas.mpl_connect('button_press_event', on_press)
        self.lp0, self.lp1 = self.ppivot()
        if show: self.show()
    def show(self):
        self.data.display(figure=self.ax)
        self.xb = self.ax.get_xbound()  # initialize zoom
        ppos = self.data.axis1.itop(self.pivot.value)
        self.ax.plot([ppos,ppos], self.ax.get_ybound())
        display(self)
    def on_cancel(self, b):
        # self.p0.value = 0  # because widget remains active...
        # self.p1.value = 0
        self.close()
        print("no applied phase")
    def on_Apply(self, b):
        self.close()
        lp0, lp1 = self.ppivot() # get centered values
        self.data.phase(lp0, lp1)
        self.disp()
        self.on_done(b)
        print("Applied: phase(%.1f,  %.1f)"%(lp0, lp1))
    def ppivot(self):
        "converts from pivot values to centered ones"
        pp = 1.0-(self.pivot.value/self.data.size1)
        return (self.p0.value + (pp-0.5)*self.p1.value, self.p1.value)
    def ctopivot(self, p0, p1):
        "convert from centered to pivot values"
        pp = 1.0-(self.pivot.value/self.data.size1)
        return p0- (pp-0.5)*p1, p1
    def on_movepivot(self, event):
        if event['name']=='value':
            self.p0.value, self.p1.value = self.ctopivot(self.lp0, self.lp1)
            self.phase()
    def ob(self, event):
        "observe changes and start phasing"
        if event['name']=='value':
            self.phase()
    def phase(self):
        "apply phase and display"
        self.xb = self.ax.get_xbound()   # get current zoom
        self.ax.clear()
        self.lp0, self.lp1 = self.ppivot()         # get centered values
        self.data.copy().phase(self.lp0, self.lp1).display(scale=self.scale.value, new_fig=False, figure=self.ax)
        ppos = self.data.axis1.itop(self.pivot.value)
        self.ax.plot([ppos,ppos], self.ax.get_ybound())
        self.ax.set_xbound( self.xb )

class Phaser2D(object):
    """
    An interactive phaser in 2D NMR

        Phaser2D(spec)

    best when in %matplotlib inline

    """
    def __init__(self, data):
        self.data = data
        self.scale = widgets.FloatLogSlider(description='scale:', value=1.0, min=-1, max=2,  base=10, step=0.01,
                            layout=Layout(width='80%'), continuous_update=HEAVY)
        self.F1p0 = widgets.FloatSlider(min=-180, max=180, step=0.1, description='F1 p0',continuous_update=HEAVY)
        self.F1p1 = widgets.FloatSlider(min=-250, max=250, step=1.0, description='F1 p1',continuous_update=HEAVY)
        self.F2p0 = widgets.FloatSlider(min=-180, max=180, step=0.1, description='F2 p0',continuous_update=HEAVY)
        self.F2p1 = widgets.FloatSlider(min=-250, max=250, step=1.0, description='F2 p1',continuous_update=HEAVY)
        for w in [self.F1p0, self.F1p1, self.F2p0, self.F2p1, self.scale]:
            w.observe(self.ob)
        self.button = widgets.Button(description="Apply correction",button_style='success')
        self.button.on_click(self.on_Apply)
        self.cancel = widgets.Button(description="Cancel",button_style='warning')
        self.cancel.on_click(self.on_cancel)
#       interact(self.phase, scale=self.scale, F1p0=self.F1p0, F1p1=self.F1p1, F2p0=self.F2p0, F2p1=self.F2p1)
        display(VBox([self.scale,
            HBox([VBox([self.F1p0, self.F1p1], layout=Layout(width='40%')), VBox([self.F2p0, self.F2p1],  layout=Layout(width='40%'))], layout=Layout(width='80%'))
            ], layout=Layout(width='100%')))
        display(HBox([self.button, self.cancel]))
        fi,ax = plt.subplots()
        self.ax = ax
        self.display()
        #self.data.display(figure=self.ax)
    def ob(self, event):
        "observe changes and start phasing"
        if event['name']=='value':
            self.phase()
    def close(self):
        for w in [self.F1p0, self.F1p1, self.F2p0, self.F2p1, self.scale, self.button, self.cancel]:
            w.close()
    def on_cancel(self, b):
        print("No action")
        self.ax.clear()
        self.data.display(figure=self.ax,scale=self.scale.value)
        self.ax.set_xlim(xmin=self.data.axis2.itop(0), xmax=self.data.axis2.itop(self.data.size2))
        self.ax.set_ylim(ymin=self.data.axis1.itop(0), ymax=self.data.axis1.itop(self.data.size1))
        self.close()
    def on_Apply(self, b):
        print("Applied: phase(%.1f,%.1f,axis='F1').phase(%.1f,%.1f,axis='F')"%(self.F1p0.value, self.F1p1.value, self.F2p0.value, self.F2p1.value))
        self.data.phase(self.F2p0.value, self.F2p1.value, axis='F2').phase(self.F1p0.value, self.F1p1.value, axis='F1')
        self.data.display(figure=self.ax,scale=self.scale.value)
        self.ax.set_xlim(xmin=self.data.axis2.itop(0), xmax=self.data.axis2.itop(self.data.size2))
        self.ax.set_ylim(ymin=self.data.axis1.itop(0), ymax=self.data.axis1.itop(self.data.size1))
        self.close()
    def display(self,todisplay=None):
        "display either the current data or the one provided - red and blue"
        self.ax.clear()
        if not todisplay:
            todisplay = self.data
        todisplay.display(scale=self.scale.value, new_fig=False, figure=self.ax,color='blue')
        todisplay.display(scale=-self.scale.value, new_fig=False, figure=self.ax, color='red')
        self.ax.set_xlim(xmin=self.data.axis2.itop(0), xmax=self.data.axis2.itop(self.data.size2))
        self.ax.set_ylim(ymin=self.data.axis1.itop(0), ymax=self.data.axis1.itop(self.data.size1))
    def phase(self):
        "compute phase and display"
        dp = self.data.copy().phase(self.F2p0.value, self.F2p1.value, axis='F2').phase(self.F1p0.value, self.F1p1.value, axis='F1')
        self.display(dp)
    # def phase(self, scale, F1p0, F1p1, F2p0, F2p1):
    #     self.data.copy().phase(F1p0,F1p1,axis='F1').phase(F2p0,F2p1,axis='F2').display(scale=scale);

class AvProc1D:
    "Detailed 1D NMR Processing"
    def __init__(self, filename=""):
        self.wfile = widgets.Text(description='File to process',layout=Layout(width='80%'), value=filename)
        self.wapod = widgets.Dropdown(
            options=['None', 'apod_sin (sine bell)', 'apod_em (Exponential)', 'apod_gm (Gaussian)', 'gaussenh (Gaussian Enhacement)', 'kaiser'],
            value='apod_sin (sine bell)',
            description='Apodisation')
        self.wpapod_Hz = widgets.FloatText(
            value=1.0,
            min=0, # max exponent of base
            max=30, # min exponent of base
            description='Width in Hz',
            layout=Layout(width='15%'),
            disabled = True)
        self.wpapod_enh = widgets.FloatText(
            value=2.0,
            min=0.0, # max exponent of base
            max=5.0, # min exponent of base
            description='strength',
            layout=Layout(width='15%'),
            step=1,
            disabled = True)
        self.wpapod_sin = widgets.FloatText(
            value=0.0,
            min=0, # max exponent of base
            max=0.5, # min exponent of base
            description='bell shape',
            layout=Layout(width='15%'),
            step=0.01,
            tooltip='value is the maximum of the bell, 0 is pure cosine, 0.5 is pure sine',
            disabled = False)
        self.wzf = widgets.Dropdown(
            options=[0, 1, 2, 4, 8],
            value=1,
            description='Zero-Filling')
        self.wphase0 = widgets.FloatText(
            value=0, description='Phase : P0', layout=Layout(width='20%'), disabled = True)
        self.wphase1 = widgets.FloatText(
            value=0, description='P1', layout=Layout(width='20%'), disabled = True)
        self.wapmin = widgets.Checkbox(
            value=True, description='AutoPhasing', tooltip='Perform AutoPhasing')
        self.wapmin.observe(self.apmin_select)
        self.wbcorr = widgets.Checkbox(
            value=False, description='Baseline Correction', tooltip='Perform AutoPhasing')
        self.wapod.observe(self.apod_select)
        self.bapod = widgets.Button(description='Show effect on FID')
        self.bapod.on_click(self.show_apod)
        self.bdoit = widgets.Button(description='Process')
        self.bdoit.on_click(self.process)
        self.show()
        fi,ax = plt.subplots()
        self.ax = ax
        if os.path.exists(filename):
            self.load()
            #self.data.set_unit('sec')
            self.display()
    def apod_select(self, e):
        test = self.wapod.value.split()[0]
        self.wpapod_sin.disabled = True
        self.wpapod_Hz.disabled = True
        self.wpapod_enh.disabled = True
        if test == "apod_sin":
            self.wpapod_sin.disabled = False
        if test in ('apod_em', 'apod_gm','gaussenh'):
            self.wpapod_Hz.disabled = False
        if test == 'gaussenh':
            self.wpapod_enh.disabled = False
    def apmin_select(self, e):
        for w in self.wphase0, self.wphase1:
            w.disabled = self.wapmin.value
    def load(self):
        self.data = Import_1D(self.wfile.value)
    def apod(self):
        func = self.wapod.value.split()[0]
        todo = None
        if func == 'apod_sin':
            todo = 'self.data.apod_sin(%f)'%(self.wpapod_sin.value,)
        elif func in ('apod_em', 'apod_gm'):
            todo = 'self.data.%s(%f)'%(func, self.wpapod_Hz.value)
        elif func == 'gaussenh':
            todo = 'self.data.gaussenh(%f,enhancement=%f)'%(self.wpapod_Hz.value, self.wpapod_enh.value)
        if todo is not None:
            eval(todo)
        return self.data
    def show_apod(self, e):
        self.load()
        self.apod()
        self.display()
    def process(self, e):
        self.load()
        self.apod().zf(self.wzf.value).ft_sim().bk_corr().set_unit('ppm')
        if self.wapmin.value:
            self.data.apmin()
            self.wphase0.value = round(self.data.axis1.P0,1)
            self.wphase1.value = self.data.axis1.P1
        else:
            self.data.phase(self.wphase0.value, self.wphase1.value)
        self.display()
    def display(self):
        self.ax.clear()
        self.data.display(figure=self.ax)
    def show(self):
        display(
            VBox([self.wfile,
                HBox([self.wapod, self.wpapod_sin, self.wpapod_Hz, self.wpapod_enh, self.bapod]),
                self.wzf,
                HBox([self.wapmin, self.wphase0, self.wphase1]),
#                self.wbcorr,
                self.bdoit]) )

from spike.plugins import Peaks
class NMRPeaker1D(Show1D):
    """
    a peak-picker for NMR experiments
    """
    # self.peaks : the defined peaklis, copyied in and out of data
    # self.temppk : the last computed pklist
    def __init__(self, data, figsize=None, reverse_scroll=False, show=True):
        super().__init__( data, figsize=figsize, reverse_scroll=reverse_scroll, show=False)
        self.data = data.real()
        try:
            self.peaks = self.data.peaks
        except AttributeError:
            self.peaks = Peaks.Peak1DList()
        self.temppk = Peaks.Peak1DList()
        self.thresh = widgets.FloatLogSlider(value=20.0,
            min=-1, max=2.0, base=10, step=0.01, layout=Layout(width='30%'),
            continuous_update=False, readout=True, readout_format='.2f')
        try: 
            self.thresh.value = 100*self.data.peaks.threshold/self.data.absmax  # if already peak pickeds
        except:
            self.thresh.value = 20.0
            pass
        self.thresh.observe(self.pickpeak)
        self.peak_mode = widgets.Dropdown(options=['marker', 'bar'],value='marker',description='show as')
        self.peak_mode.observe(self.ob)
        self.out = Output(layout={'border': '1px solid red'})
#        self.done = widgets.Button(description="Done", button_style='success')
#        self.done.on_click(self.on_done)
        self.badd = widgets.Button(description="Add", button_style='success', layout=self.blay)
        self.badd.on_click(self.on_add)
        self.brem = widgets.Button(description="Rem", button_style='warning', layout=self.blay)
        self.brem.on_click(self.on_rem)
        self.cancel = widgets.Button(description="Cancel", button_style='warning', layout=self.blay)
        self.cancel.on_click(self.on_cancel)
        self.selval = widgets.FloatText(
            value=0.0, description='selection', layout=Layout(width='20%'), step=0.001, disabled = True)
        self.newval = widgets.FloatText(
            value=0.0, description='calibration', layout=Layout(width='20%'), step=0.001, disabled = True)
        self.setcalib = widgets.Button(description="Set", layout=Layout(width='10%'),
                button_style='success', tooltip='Set spectrum calibration')
        self.setcalib.on_click(self.on_setcalib)
        def on_press(event):
            v = event.xdata
            iv = self.data.axis1.ptoi(v)  # store position in index (peaks are internally in index)
            distclose = np.inf     # search closest peak

            pclose = 0.0
            for p in self.data.peaks:
                if abs(p.pos-iv) < distclose:
                    pclose = p.pos
                    distclose = abs(p.pos-iv)
            self.selval.value = self.data.axis1.itop(pclose)  # back to ppm
            for w in (self.selval, self.newval):
                w.disabled = False
        cids = self.fig.canvas.mpl_connect('button_press_event', on_press)
        # redefine Box
        self.tabs = Tab()
        self.tabs.children = [
            VBox([
                HBox([self.badd, self.brem, Label('threshold - % largest signal'), self.thresh, self.peak_mode]),
                HBox([VBox([self.blank, self.reset, self.scale]), self.fig.canvas])
                ]),
            VBox([
                HBox([ Label('Select a peak with mouse and set calibrated values'), self.selval, self.newval, self.setcalib]),
                HBox([VBox([self.blank, self.reset, self.scale]), self.fig.canvas])
                ]),
            self.out]
        self.tabs.set_title(0, 'Peak Picker')
        self.tabs.set_title(1, 'calibration')
        self.tabs.set_title(2, 'Peak Table')

        self.children = [VBox([HBox([self.done, self.cancel]),self.tabs])]

        if show: self.show()
    def show(self):
        self.data.display(figure=self.ax)
        self.xb = self.ax.get_xbound()  # initialize zoom
        self.pp()
        self.data.display(figure=self.ax)
        self.ax.set_xbound( (self.data.axis1.itop(0),self.data.axis1.itop(self.data.size1)) )
        self.disp()
        display(self)
    def on_add(self, b):
        self.peaks = Peaks.peak_aggreg(self.peaks + self.temppk, distance=1.0)
        self.temppk = Peaks.Peak1DList()
        self.disp()
    def on_rem(self, b):
        (up,down) = self.ax.get_xbound()
        iup = self.data.axis1.ptoi(up)
        idown = self.data.axis1.ptoi(down)
        iup,idown = (max(iup,idown), min(iup,idown))
        to_rem = []
        for pk in self.peaks:
            if pk.pos < iup and pk.pos>idown:
                to_rem.append(pk)
        for pk in to_rem:
            self.peaks.remove(pk)
        self.disp()
    def on_cancel(self, b):
        self.close()
        del self.data.peaks
        print("no Peak-Picking done")
    def on_done(self, b):
        self.temppk = Peaks.Peak1DList()  # clear temp peaks        
        self.close()
        # new figure
        self.disp()
        # and display        
        tabs = Tab()
        tabs.children = [self.fig.canvas, self.out]
        tabs.set_title(0, '1D Display')
        tabs.set_title(1, 'Peak Table')
        display(tabs)
        self.data.peaks = self.peaks  # and copy

    def on_setcalib(self, e):
        off = self.selval.value-self.newval.value
        self.data.axis1.offset -= off*self.data.axis1.frequency   # off is in ppm, axis1.offset is in Hz
        self.selval.value = self.newval.value
        self.pp()
    def pkprint(self,event):
        self.out.clear_output(wait=True)
        with self.out:
            if len(self.temppk)>0:
                self.data.peaks = self.temppk
                display(HTML("<p style=color:red> Transient peak list </p>"))
                display(HTML(self.data.pk2pandas().to_html()))
                display(HTML("<p style=color:blue> Defined peak list </p>"))
            self.data.peaks = self.peaks
            display(HTML(self.data.pk2pandas().to_html()))
    def _pkprint(self,event):
        self.out.clear_output(wait=True)
        with self.out:
            print(self.pklist())
    def pklist(self):
        "creates peaklist for printing or exporting"
        text = ["ppm\tInt.(%)\twidth (Hz)"]
        data = self.data
        intmax = max(data.peaks.intens)/100
        for pk in data.peaks:
            ppm = data.axis1.itop(pk.pos)
            width = 2*pk.width*data.axis1.specwidth/data.size1
            l = "%.3f\t%.1f\t%.2f"%(ppm, pk.intens/intmax, width)
            text.append(l)
        return "\n".join(text)
    def ob(self, event):
        if event['name']=='value':
            self.disp()        
    def disp(self):
        "interactive wrapper to peakpick"
        self.xb = self.ax.get_xbound()
        #self.yb = self.ax.get_ybound()
        self.ax.clear()
        #super().disp()
        self.data.display(scale=self.scale.value, new_fig=False, figure=self.ax, title=self.title)
        x = [self.data.axis1.itoc(z) for z in (0, self.data.size1) ]
        y = [self.data.absmax*self.thresh.value/100]*2
        self.ax.plot(x,y,':r')
        try:
            self.temppk.display(peak_label=False, peak_mode=self.peak_mode.value, f=self.data.axis1.itoc, figure=self.ax,color='red')
            self.peaks.display(peak_label=False, peak_mode=self.peak_mode.value, f=self.data.axis1.itoc, color='blue', figure=self.ax)
        except:
            rrr("problem")
        self.temppk.display(peak_label=True, peak_mode=self.peak_mode.value, color='red', figure=self.ax)
        self.ax.set_xbound(self.xb)
        self.ax.set_ylim(ymax=self.data.absmax/self.scale.value)
        self.pkprint({'name':'value'})  # send pseudo event to display peak table
    def pickpeak(self, event):
        "interactive wrapper to peakpick"
        if event['name']=='value':
            self.pp()
    def pp(self):
        "do the peak-picking calling pp().centroid()"
        #self.spec.clear_output(wait=True)
        th = self.data.absmax*self.thresh.value/100
        zm = self.ax.get_xbound()
        self.data.set_unit('ppm').peakpick(threshold=th, verbose=False, zoom=zm).centroid()
        self.temppk = self.data.peaks
        self.disp()
        self.ax.annotate('%d peaks detected'%len(self.data.peaks) ,(0.05,0.95), xycoords='figure fraction')

class NMRIntegrate(Show1D):
    "an integrator for NMR experiments"
    def __init__(self, data, figsize=None, reverse_scroll=False, show=True):
        super().__init__( data, figsize=figsize, reverse_scroll=reverse_scroll, show=False)
        self.bias = widgets.FloatSlider(
            description='bias', layout=Layout(width='30%'),
            value=0.0,min=-10.0, max=10.0, step=0.1,
            continuous_update=True, readout=False, readout_format='.1f')
        self.sep = widgets.FloatSlider(
            description='peak separation', layout=Layout(width='30%'),
            value=3.0,min=0.0, max=20.0, step=0.1,
            continuous_update=True, readout=False, readout_format='.1f')
        self.wings = widgets.FloatSlider(
            description='width', layout=Layout(width='30%'),
            value=5.0,min=0.5, max=20.0, step=0.1,
            continuous_update=True, readout=False, readout_format='.1f')
        for w in (self.bias, self.sep, self.wings):
            w.observe(self.integrate)

        self.Ok = widgets.Button(description="Ok", button_style='success', layout=Layout(width='10%'))
        self.Ok.on_click(self.on_Apply)
        self.cancel = widgets.Button(description="Cancel", button_style='warning', layout=Layout(width='10%'))
        self.cancel.on_click(self.on_cancel)
        self.bprint = widgets.Button(description="Print", layout=Layout(width='10%'),
                button_style='success', # 'success', 'info', 'warning', 'danger' or ''
                tooltip='Print to screen')
        self.bprint.on_click(self.print)
        self.entry = widgets.IntText(value=0,description='Entry',min=0,layout=Layout(width='15%'))
        self.value = widgets.FloatText(value=100,description='Value',layout=Layout(width='15%'))
        self.set = widgets.Button(description="Set", button_style='success', layout=Layout(width='10%'))
        self.set.on_click(self.set_value)
        self.out = Output(layout={'border': '1px solid red'})
        # redifine children
        self.children = [VBox([HBox([self.Ok, self.cancel, self.bias, self.sep, self.wings]),
                            HBox([Label('Choose an integral for calibration'),
                                self.entry, self.value, self.set, self.blank, self.bprint] ),
                            HBox([VBox([self.blank, self.reset, self.scale]), self.fig.canvas]),
                            self.out ])]
        if show: self.show()
    def show(self):
        self.data.display(figure=self.ax)
        self.xb = self.ax.get_xbound()  # initialize zoom
        self.int()
        self.data.display(figure=self.ax)
        self.ax.set_xbound( (self.data.axis1.itop(0),self.data.axis1.itop(self.data.size1)) )
        self.disp()
        display(self)
    def on_cancel(self, b):
        self.close()
        print("No integration")
    def on_Apply(self, b):
        self.close()
        self.disp(zoom=True)
        display(self.fig)
        display(self.out)
    def set_value(self,b):
        self.data.integral_calibrate(self.entry.value, self.value.value)
        self.disp()
    def print(self,event):
        self.out.clear_output(wait=True)
        with self.out:
            display(HTML( self.data.integrals.to_pandas().to_html() ))
    def integrate(self, event):
        "integrate from event"
        if event['name']=='value':
            self.int()
    def int(self):
        "do the integration"
        try:
            calib = self.data.integrals.calibration
        except:
            calib = None
        self.data.set_unit('ppm').integrate(separation=self.sep.value, wings=self.wings.value,
            bias=self.data.absmax*self.bias.value/100)
        self.data.integrals.calibrate(calibration=calib)
        self.disp()
    def ob(self, event):
        if event['name']=='value':
            self.disp()
    def disp(self, zoom=False):
        "refresh display from event - if zoom is True, display only in xbound"
        self.xb = self.ax.get_xbound()
        # self.yb = self.ax.get_ybound()
        if zoom:
            zoom = self.xb
        else:
            zoom = None
        self.ax.clear()
        self.data.display(new_fig=False, figure=self.ax, scale=self.scale.value, zoom=zoom)
        try:
            self.data.display_integral(label=True, figure=self.ax, labelyposition=0.01, regions=False, zoom=zoom)
        except:
            pass
        self.ax.set_xbound(self.xb)
        # self.ax.set_ybound(self.yb)


#if __name__ == '__main__':
#    unittest.main()    