# This file was automatically generated by SWIG (http://www.swig.org).
# Version 3.0.12
#
# Do not make changes to this file unless you know what you are doing--modify
# the SWIG interface file instead.



import os,sys,platform,math

__this_dir__= os.path.dirname(os.path.abspath(__file__))

WIN32=platform.system()=="Windows" or platform.system()=="win32"
if WIN32:

# this is needed to find swig generated *.py file and DLLs
	def AddSysPath(value):
		os.environ['PATH'] = value + os.pathsep + os.environ['PATH']
		sys.path.insert(0,value)
		if hasattr(os,'add_dll_directory'): 
			os.add_dll_directory(value) # this is needed for python 38  

	AddSysPath(__this_dir__)
	AddSysPath(os.path.join(__this_dir__,"bin"))

else:

# this is needed to find swig generated *.py file
	sys.path.append(__this_dir__)




from sys import version_info as _swig_python_version_info
if _swig_python_version_info >= (2, 7, 0):
    def swig_import_helper():
        import importlib
        pkg = __name__.rpartition('.')[0]
        mname = '.'.join((pkg, '_VisusNodesPy')).lstrip('.')
        try:
            return importlib.import_module(mname)
        except ImportError:
            return importlib.import_module('_VisusNodesPy')
    _VisusNodesPy = swig_import_helper()
    del swig_import_helper
elif _swig_python_version_info >= (2, 6, 0):
    def swig_import_helper():
        from os.path import dirname
        import imp
        fp = None
        try:
            fp, pathname, description = imp.find_module('_VisusNodesPy', [dirname(__file__)])
        except ImportError:
            import _VisusNodesPy
            return _VisusNodesPy
        try:
            _mod = imp.load_module('_VisusNodesPy', fp, pathname, description)
        finally:
            if fp is not None:
                fp.close()
        return _mod
    _VisusNodesPy = swig_import_helper()
    del swig_import_helper
else:
    import _VisusNodesPy
del _swig_python_version_info

try:
    _swig_property = property
except NameError:
    pass  # Python < 2.2 doesn't have 'property'.

try:
    import builtins as __builtin__
except ImportError:
    import __builtin__

def _swig_setattr_nondynamic(self, class_type, name, value, static=1):
    if (name == "thisown"):
        return self.this.own(value)
    if (name == "this"):
        if type(value).__name__ == 'SwigPyObject':
            self.__dict__[name] = value
            return
    method = class_type.__swig_setmethods__.get(name, None)
    if method:
        return method(self, value)
    if (not static):
        if _newclass:
            object.__setattr__(self, name, value)
        else:
            self.__dict__[name] = value
    else:
        raise AttributeError("You cannot add attributes to %s" % self)


def _swig_setattr(self, class_type, name, value):
    return _swig_setattr_nondynamic(self, class_type, name, value, 0)


def _swig_getattr(self, class_type, name):
    if (name == "thisown"):
        return self.this.own()
    method = class_type.__swig_getmethods__.get(name, None)
    if method:
        return method(self)
    raise AttributeError("'%s' object has no attribute '%s'" % (class_type.__name__, name))


def _swig_repr(self):
    try:
        strthis = "proxy of " + self.this.__repr__()
    except __builtin__.Exception:
        strthis = ""
    return "<%s.%s; %s >" % (self.__class__.__module__, self.__class__.__name__, strthis,)

try:
    _object = object
    _newclass = 1
except __builtin__.Exception:
    class _object:
        pass
    _newclass = 0

try:
    import weakref
    weakref_proxy = weakref.proxy
except __builtin__.Exception:
    weakref_proxy = lambda x: x


class SwigPyIterator(_object):
    __swig_setmethods__ = {}
    __setattr__ = lambda self, name, value: _swig_setattr(self, SwigPyIterator, name, value)
    __swig_getmethods__ = {}
    __getattr__ = lambda self, name: _swig_getattr(self, SwigPyIterator, name)

    def __init__(self, *args, **kwargs):
        raise AttributeError("No constructor defined - class is abstract")
    __repr__ = _swig_repr
    __swig_destroy__ = _VisusNodesPy.delete_SwigPyIterator
    __del__ = lambda self: None

    def value(self):
        return _VisusNodesPy.SwigPyIterator_value(self)

    def incr(self, n=1):
        return _VisusNodesPy.SwigPyIterator_incr(self, n)

    def decr(self, n=1):
        return _VisusNodesPy.SwigPyIterator_decr(self, n)

    def distance(self, x):
        return _VisusNodesPy.SwigPyIterator_distance(self, x)

    def equal(self, x):
        return _VisusNodesPy.SwigPyIterator_equal(self, x)

    def copy(self):
        return _VisusNodesPy.SwigPyIterator_copy(self)

    def next(self):
        return _VisusNodesPy.SwigPyIterator_next(self)

    def __next__(self):
        return _VisusNodesPy.SwigPyIterator___next__(self)

    def previous(self):
        return _VisusNodesPy.SwigPyIterator_previous(self)

    def advance(self, n):
        return _VisusNodesPy.SwigPyIterator_advance(self, n)

    def __eq__(self, x):
        return _VisusNodesPy.SwigPyIterator___eq__(self, x)

    def __ne__(self, x):
        return _VisusNodesPy.SwigPyIterator___ne__(self, x)

    def __iadd__(self, n):
        return _VisusNodesPy.SwigPyIterator___iadd__(self, n)

    def __isub__(self, n):
        return _VisusNodesPy.SwigPyIterator___isub__(self, n)

    def __add__(self, n):
        return _VisusNodesPy.SwigPyIterator___add__(self, n)

    def __sub__(self, *args):
        return _VisusNodesPy.SwigPyIterator___sub__(self, *args)
    def __iter__(self):
        return self
SwigPyIterator_swigregister = _VisusNodesPy.SwigPyIterator_swigregister
SwigPyIterator_swigregister(SwigPyIterator)

SHARED_PTR_DISOWN = _VisusNodesPy.SHARED_PTR_DISOWN
import VisusKernelPy
import VisusDataflowPy
import VisusDbPy
class NodesModule(VisusKernelPy.VisusModule):
    __swig_setmethods__ = {}
    for _s in [VisusKernelPy.VisusModule]:
        __swig_setmethods__.update(getattr(_s, '__swig_setmethods__', {}))
    __setattr__ = lambda self, name, value: _swig_setattr(self, NodesModule, name, value)
    __swig_getmethods__ = {}
    for _s in [VisusKernelPy.VisusModule]:
        __swig_getmethods__.update(getattr(_s, '__swig_getmethods__', {}))
    __getattr__ = lambda self, name: _swig_getattr(self, NodesModule, name)
    __repr__ = _swig_repr
    __swig_setmethods__["bAttached"] = _VisusNodesPy.NodesModule_bAttached_set
    __swig_getmethods__["bAttached"] = _VisusNodesPy.NodesModule_bAttached_get
    if _newclass:
        bAttached = _swig_property(_VisusNodesPy.NodesModule_bAttached_get, _VisusNodesPy.NodesModule_bAttached_set)
    if _newclass:
        attach = staticmethod(_VisusNodesPy.NodesModule_attach)
    else:
        attach = _VisusNodesPy.NodesModule_attach
    if _newclass:
        detach = staticmethod(_VisusNodesPy.NodesModule_detach)
    else:
        detach = _VisusNodesPy.NodesModule_detach

    def __init__(self):
        this = _VisusNodesPy.new_NodesModule()
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this
    __swig_destroy__ = _VisusNodesPy.delete_NodesModule
    __del__ = lambda self: None
NodesModule_swigregister = _VisusNodesPy.NodesModule_swigregister
NodesModule_swigregister(NodesModule)
cvar = _VisusNodesPy.cvar

def NodesModule_attach():
    return _VisusNodesPy.NodesModule_attach()
NodesModule_attach = _VisusNodesPy.NodesModule_attach

def NodesModule_detach():
    return _VisusNodesPy.NodesModule_detach()
NodesModule_detach = _VisusNodesPy.NodesModule_detach

class CpuPaletteNode(VisusDataflowPy.Node):
    __swig_setmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_setmethods__.update(getattr(_s, '__swig_setmethods__', {}))
    __setattr__ = lambda self, name, value: _swig_setattr(self, CpuPaletteNode, name, value)
    __swig_getmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_getmethods__.update(getattr(_s, '__swig_getmethods__', {}))
    __getattr__ = lambda self, name: _swig_getattr(self, CpuPaletteNode, name)
    __repr__ = _swig_repr

    def __init__(self, *args):
        if self.__class__ == CpuPaletteNode:
            _self = None
        else:
            _self = self
        this = _VisusNodesPy.new_CpuPaletteNode(_self, *args)
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this
    __swig_destroy__ = _VisusNodesPy.delete_CpuPaletteNode
    __del__ = lambda self: None

    def processInput(self):
        return _VisusNodesPy.CpuPaletteNode_processInput(self)

    def getTransferFunction(self):
        return _VisusNodesPy.CpuPaletteNode_getTransferFunction(self)

    def setTransferFunction(self, value):
        return _VisusNodesPy.CpuPaletteNode_setTransferFunction(self, value)

    def getBounds(self):
        return _VisusNodesPy.CpuPaletteNode_getBounds(self)

    def execute(self, ar):
        return _VisusNodesPy.CpuPaletteNode_execute(self, ar)

    def write(self, ar):
        return _VisusNodesPy.CpuPaletteNode_write(self, ar)

    def read(self, ar):
        return _VisusNodesPy.CpuPaletteNode_read(self, ar)
    def __disown__(self):
        self.this.disown()
        _VisusNodesPy.disown_CpuPaletteNode(self)
        return weakref_proxy(self)
CpuPaletteNode_swigregister = _VisusNodesPy.CpuPaletteNode_swigregister
CpuPaletteNode_swigregister(CpuPaletteNode)

class FieldNode(VisusDataflowPy.Node):
    __swig_setmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_setmethods__.update(getattr(_s, '__swig_setmethods__', {}))
    __setattr__ = lambda self, name, value: _swig_setattr(self, FieldNode, name, value)
    __swig_getmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_getmethods__.update(getattr(_s, '__swig_getmethods__', {}))
    __getattr__ = lambda self, name: _swig_getattr(self, FieldNode, name)
    __repr__ = _swig_repr

    def __init__(self):
        if self.__class__ == FieldNode:
            _self = None
        else:
            _self = self
        this = _VisusNodesPy.new_FieldNode(_self, )
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this
    __swig_destroy__ = _VisusNodesPy.delete_FieldNode
    __del__ = lambda self: None

    def getFieldName(self):
        return _VisusNodesPy.FieldNode_getFieldName(self)

    def setFieldName(self, value):
        return _VisusNodesPy.FieldNode_setFieldName(self, value)

    def execute(self, ar):
        return _VisusNodesPy.FieldNode_execute(self, ar)

    def write(self, ar):
        return _VisusNodesPy.FieldNode_write(self, ar)

    def read(self, ar):
        return _VisusNodesPy.FieldNode_read(self, ar)
    def __disown__(self):
        self.this.disown()
        _VisusNodesPy.disown_FieldNode(self)
        return weakref_proxy(self)

    def processInput(self):
        return _VisusNodesPy.FieldNode_processInput(self)
FieldNode_swigregister = _VisusNodesPy.FieldNode_swigregister
FieldNode_swigregister(FieldNode)

class ModelViewNode(VisusDataflowPy.Node):
    __swig_setmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_setmethods__.update(getattr(_s, '__swig_setmethods__', {}))
    __setattr__ = lambda self, name, value: _swig_setattr(self, ModelViewNode, name, value)
    __swig_getmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_getmethods__.update(getattr(_s, '__swig_getmethods__', {}))
    __getattr__ = lambda self, name: _swig_getattr(self, ModelViewNode, name)
    __repr__ = _swig_repr

    def __init__(self):
        if self.__class__ == ModelViewNode:
            _self = None
        else:
            _self = self
        this = _VisusNodesPy.new_ModelViewNode(_self, )
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this
    __swig_destroy__ = _VisusNodesPy.delete_ModelViewNode
    __del__ = lambda self: None

    def getModelView(self):
        return _VisusNodesPy.ModelViewNode_getModelView(self)

    def setModelView(self, value):
        return _VisusNodesPy.ModelViewNode_setModelView(self, value)

    def execute(self, ar):
        return _VisusNodesPy.ModelViewNode_execute(self, ar)

    def write(self, ar):
        return _VisusNodesPy.ModelViewNode_write(self, ar)

    def read(self, ar):
        return _VisusNodesPy.ModelViewNode_read(self, ar)
    if _newclass:
        castFrom = staticmethod(_VisusNodesPy.ModelViewNode_castFrom)
    else:
        castFrom = _VisusNodesPy.ModelViewNode_castFrom
    def __disown__(self):
        self.this.disown()
        _VisusNodesPy.disown_ModelViewNode(self)
        return weakref_proxy(self)

    def processInput(self):
        return _VisusNodesPy.ModelViewNode_processInput(self)
ModelViewNode_swigregister = _VisusNodesPy.ModelViewNode_swigregister
ModelViewNode_swigregister(ModelViewNode)

def ModelViewNode_castFrom(obj):
    return _VisusNodesPy.ModelViewNode_castFrom(obj)
ModelViewNode_castFrom = _VisusNodesPy.ModelViewNode_castFrom

class PaletteNode(VisusDataflowPy.Node):
    __swig_setmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_setmethods__.update(getattr(_s, '__swig_setmethods__', {}))
    __setattr__ = lambda self, name, value: _swig_setattr(self, PaletteNode, name, value)
    __swig_getmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_getmethods__.update(getattr(_s, '__swig_getmethods__', {}))
    __getattr__ = lambda self, name: _swig_getattr(self, PaletteNode, name)
    __repr__ = _swig_repr

    def __init__(self, *args):
        if self.__class__ == PaletteNode:
            _self = None
        else:
            _self = self
        this = _VisusNodesPy.new_PaletteNode(_self, *args)
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this
    __swig_destroy__ = _VisusNodesPy.delete_PaletteNode
    __del__ = lambda self: None

    def getPalette(self):
        return _VisusNodesPy.PaletteNode_getPalette(self)

    def setPalette(self, value):
        return _VisusNodesPy.PaletteNode_setPalette(self, value)

    def areStatisticsEnabled(self):
        return _VisusNodesPy.PaletteNode_areStatisticsEnabled(self)

    def processInput(self):
        return _VisusNodesPy.PaletteNode_processInput(self)

    def enterInDataflow(self):
        return _VisusNodesPy.PaletteNode_enterInDataflow(self)

    def exitFromDataflow(self):
        return _VisusNodesPy.PaletteNode_exitFromDataflow(self)

    def execute(self, ar):
        return _VisusNodesPy.PaletteNode_execute(self, ar)

    def write(self, ar):
        return _VisusNodesPy.PaletteNode_write(self, ar)

    def read(self, ar):
        return _VisusNodesPy.PaletteNode_read(self, ar)
    if _newclass:
        castFrom = staticmethod(_VisusNodesPy.PaletteNode_castFrom)
    else:
        castFrom = _VisusNodesPy.PaletteNode_castFrom
    def __disown__(self):
        self.this.disown()
        _VisusNodesPy.disown_PaletteNode(self)
        return weakref_proxy(self)
PaletteNode_swigregister = _VisusNodesPy.PaletteNode_swigregister
PaletteNode_swigregister(PaletteNode)

def PaletteNode_castFrom(obj):
    return _VisusNodesPy.PaletteNode_castFrom(obj)
PaletteNode_castFrom = _VisusNodesPy.PaletteNode_castFrom

class BasePaletteNodeView(_object):
    __swig_setmethods__ = {}
    __setattr__ = lambda self, name, value: _swig_setattr(self, BasePaletteNodeView, name, value)
    __swig_getmethods__ = {}
    __getattr__ = lambda self, name: _swig_getattr(self, BasePaletteNodeView, name)

    def __init__(self, *args, **kwargs):
        raise AttributeError("No constructor defined - class is abstract")
    __repr__ = _swig_repr

    def newStatsAvailable(self, stats):
        return _VisusNodesPy.BasePaletteNodeView_newStatsAvailable(self, stats)
    __swig_destroy__ = _VisusNodesPy.delete_BasePaletteNodeView
    __del__ = lambda self: None
BasePaletteNodeView_swigregister = _VisusNodesPy.BasePaletteNodeView_swigregister
BasePaletteNodeView_swigregister(BasePaletteNodeView)

class StatisticsNode(VisusDataflowPy.Node):
    __swig_setmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_setmethods__.update(getattr(_s, '__swig_setmethods__', {}))
    __setattr__ = lambda self, name, value: _swig_setattr(self, StatisticsNode, name, value)
    __swig_getmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_getmethods__.update(getattr(_s, '__swig_getmethods__', {}))
    __getattr__ = lambda self, name: _swig_getattr(self, StatisticsNode, name)
    __repr__ = _swig_repr

    def __init__(self):
        if self.__class__ == StatisticsNode:
            _self = None
        else:
            _self = self
        this = _VisusNodesPy.new_StatisticsNode(_self, )
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this
    __swig_destroy__ = _VisusNodesPy.delete_StatisticsNode
    __del__ = lambda self: None

    def processInput(self):
        return _VisusNodesPy.StatisticsNode_processInput(self)
    if _newclass:
        castFrom = staticmethod(_VisusNodesPy.StatisticsNode_castFrom)
    else:
        castFrom = _VisusNodesPy.StatisticsNode_castFrom
    def __disown__(self):
        self.this.disown()
        _VisusNodesPy.disown_StatisticsNode(self)
        return weakref_proxy(self)
StatisticsNode_swigregister = _VisusNodesPy.StatisticsNode_swigregister
StatisticsNode_swigregister(StatisticsNode)

def StatisticsNode_castFrom(obj):
    return _VisusNodesPy.StatisticsNode_castFrom(obj)
StatisticsNode_castFrom = _VisusNodesPy.StatisticsNode_castFrom

class BaseStatisticsNodeView(_object):
    __swig_setmethods__ = {}
    __setattr__ = lambda self, name, value: _swig_setattr(self, BaseStatisticsNodeView, name, value)
    __swig_getmethods__ = {}
    __getattr__ = lambda self, name: _swig_getattr(self, BaseStatisticsNodeView, name)

    def __init__(self, *args, **kwargs):
        raise AttributeError("No constructor defined - class is abstract")
    __repr__ = _swig_repr

    def newStatsAvailable(self, stats):
        return _VisusNodesPy.BaseStatisticsNodeView_newStatsAvailable(self, stats)
    __swig_destroy__ = _VisusNodesPy.delete_BaseStatisticsNodeView
    __del__ = lambda self: None
BaseStatisticsNodeView_swigregister = _VisusNodesPy.BaseStatisticsNodeView_swigregister
BaseStatisticsNodeView_swigregister(BaseStatisticsNodeView)

class TimeNode(VisusDataflowPy.Node):
    __swig_setmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_setmethods__.update(getattr(_s, '__swig_setmethods__', {}))
    __setattr__ = lambda self, name, value: _swig_setattr(self, TimeNode, name, value)
    __swig_getmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_getmethods__.update(getattr(_s, '__swig_getmethods__', {}))
    __getattr__ = lambda self, name: _swig_getattr(self, TimeNode, name)
    __repr__ = _swig_repr

    def __init__(self, *args):
        if self.__class__ == TimeNode:
            _self = None
        else:
            _self = self
        this = _VisusNodesPy.new_TimeNode(_self, *args)
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this
    __swig_destroy__ = _VisusNodesPy.delete_TimeNode
    __del__ = lambda self: None

    def getCurrentTime(self):
        return _VisusNodesPy.TimeNode_getCurrentTime(self)

    def setCurrentTime(self, value, bPublish=True):
        return _VisusNodesPy.TimeNode_setCurrentTime(self, value, bPublish)

    def getTimesteps(self):
        return _VisusNodesPy.TimeNode_getTimesteps(self)

    def getUserRange(self):
        return _VisusNodesPy.TimeNode_getUserRange(self)

    def setUserRange(self, value):
        return _VisusNodesPy.TimeNode_setUserRange(self, value)

    def getPlayMsec(self):
        return _VisusNodesPy.TimeNode_getPlayMsec(self)

    def setPlayMsec(self, value):
        return _VisusNodesPy.TimeNode_setPlayMsec(self, value)

    def enterInDataflow(self):
        return _VisusNodesPy.TimeNode_enterInDataflow(self)

    def exitFromDataflow(self):
        return _VisusNodesPy.TimeNode_exitFromDataflow(self)

    def doPublish(self, *args):
        return _VisusNodesPy.TimeNode_doPublish(self, *args)
    if _newclass:
        castFrom = staticmethod(_VisusNodesPy.TimeNode_castFrom)
    else:
        castFrom = _VisusNodesPy.TimeNode_castFrom

    def execute(self, ar):
        return _VisusNodesPy.TimeNode_execute(self, ar)

    def write(self, ar):
        return _VisusNodesPy.TimeNode_write(self, ar)

    def read(self, ar):
        return _VisusNodesPy.TimeNode_read(self, ar)
    def __disown__(self):
        self.this.disown()
        _VisusNodesPy.disown_TimeNode(self)
        return weakref_proxy(self)

    def processInput(self):
        return _VisusNodesPy.TimeNode_processInput(self)
TimeNode_swigregister = _VisusNodesPy.TimeNode_swigregister
TimeNode_swigregister(TimeNode)

def TimeNode_castFrom(obj):
    return _VisusNodesPy.TimeNode_castFrom(obj)
TimeNode_castFrom = _VisusNodesPy.TimeNode_castFrom

class DatasetNode(VisusDataflowPy.Node):
    __swig_setmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_setmethods__.update(getattr(_s, '__swig_setmethods__', {}))
    __setattr__ = lambda self, name, value: _swig_setattr(self, DatasetNode, name, value)
    __swig_getmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_getmethods__.update(getattr(_s, '__swig_getmethods__', {}))
    __getattr__ = lambda self, name: _swig_getattr(self, DatasetNode, name)
    __repr__ = _swig_repr

    def __init__(self):
        if self.__class__ == DatasetNode:
            _self = None
        else:
            _self = self
        this = _VisusNodesPy.new_DatasetNode(_self, )
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this
    __swig_destroy__ = _VisusNodesPy.delete_DatasetNode
    __del__ = lambda self: None

    def getDataset(self):
        return _VisusNodesPy.DatasetNode_getDataset(self)

    def setDataset(self, dataset, bPublish=True):
        return _VisusNodesPy.DatasetNode_setDataset(self, dataset, bPublish)

    def processInput(self):
        return _VisusNodesPy.DatasetNode_processInput(self)

    def enterInDataflow(self):
        return _VisusNodesPy.DatasetNode_enterInDataflow(self)

    def exitFromDataflow(self):
        return _VisusNodesPy.DatasetNode_exitFromDataflow(self)

    def getLogicBox(self):
        return _VisusNodesPy.DatasetNode_getLogicBox(self)

    def getBounds(self):
        return _VisusNodesPy.DatasetNode_getBounds(self)

    def showBounds(self):
        return _VisusNodesPy.DatasetNode_showBounds(self)

    def setShowBounds(self, value):
        return _VisusNodesPy.DatasetNode_setShowBounds(self, value)
    if _newclass:
        castFrom = staticmethod(_VisusNodesPy.DatasetNode_castFrom)
    else:
        castFrom = _VisusNodesPy.DatasetNode_castFrom

    def execute(self, ar):
        return _VisusNodesPy.DatasetNode_execute(self, ar)

    def write(self, ar):
        return _VisusNodesPy.DatasetNode_write(self, ar)

    def read(self, ar):
        return _VisusNodesPy.DatasetNode_read(self, ar)
    def __disown__(self):
        self.this.disown()
        _VisusNodesPy.disown_DatasetNode(self)
        return weakref_proxy(self)
DatasetNode_swigregister = _VisusNodesPy.DatasetNode_swigregister
DatasetNode_swigregister(DatasetNode)

def DatasetNode_castFrom(obj):
    return _VisusNodesPy.DatasetNode_castFrom(obj)
DatasetNode_castFrom = _VisusNodesPy.DatasetNode_castFrom

class QueryNode(VisusDataflowPy.Node):
    __swig_setmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_setmethods__.update(getattr(_s, '__swig_setmethods__', {}))
    __setattr__ = lambda self, name, value: _swig_setattr(self, QueryNode, name, value)
    __swig_getmethods__ = {}
    for _s in [VisusDataflowPy.Node]:
        __swig_getmethods__.update(getattr(_s, '__swig_getmethods__', {}))
    __getattr__ = lambda self, name: _swig_getattr(self, QueryNode, name)
    __repr__ = _swig_repr

    def __init__(self):
        if self.__class__ == QueryNode:
            _self = None
        else:
            _self = self
        this = _VisusNodesPy.new_QueryNode(_self, )
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this
    __swig_destroy__ = _VisusNodesPy.delete_QueryNode
    __del__ = lambda self: None

    def getDataset(self):
        return _VisusNodesPy.QueryNode_getDataset(self)

    def getDatasetNode(self):
        return _VisusNodesPy.QueryNode_getDatasetNode(self)

    def getField(self):
        return _VisusNodesPy.QueryNode_getField(self)

    def getTime(self):
        return _VisusNodesPy.QueryNode_getTime(self)

    def processInput(self):
        return _VisusNodesPy.QueryNode_processInput(self)

    def isVerbose(self):
        return _VisusNodesPy.QueryNode_isVerbose(self)

    def setVerbose(self, value):
        return _VisusNodesPy.QueryNode_setVerbose(self, value)

    def getAccessIndex(self):
        return _VisusNodesPy.QueryNode_getAccessIndex(self)

    def setAccessIndex(self, value):
        return _VisusNodesPy.QueryNode_setAccessIndex(self, value)

    def setAccess(self, value):
        return _VisusNodesPy.QueryNode_setAccess(self, value)

    def getProgression(self):
        return _VisusNodesPy.QueryNode_getProgression(self)

    def setProgression(self, value):
        return _VisusNodesPy.QueryNode_setProgression(self, value)

    def getQuality(self):
        return _VisusNodesPy.QueryNode_getQuality(self)

    def setQuality(self, value):
        return _VisusNodesPy.QueryNode_setQuality(self, value)

    def getBounds(self):
        return _VisusNodesPy.QueryNode_getBounds(self)

    def setBounds(self, value):
        return _VisusNodesPy.QueryNode_setBounds(self, value)

    def getQueryBounds(self):
        return _VisusNodesPy.QueryNode_getQueryBounds(self)

    def setQueryBounds(self, value):
        return _VisusNodesPy.QueryNode_setQueryBounds(self, value)

    def getQueryLogicPosition(self):
        return _VisusNodesPy.QueryNode_getQueryLogicPosition(self)

    def nodeToScreen(self):
        return _VisusNodesPy.QueryNode_nodeToScreen(self)

    def logicToScreen(self):
        return _VisusNodesPy.QueryNode_logicToScreen(self)

    def setNodeToScreen(self, value):
        return _VisusNodesPy.QueryNode_setNodeToScreen(self, value)

    def isViewDependentEnabled(self):
        return _VisusNodesPy.QueryNode_isViewDependentEnabled(self)

    def setViewDependentEnabled(self, value):
        return _VisusNodesPy.QueryNode_setViewDependentEnabled(self, value)

    def exitFromDataflow(self):
        return _VisusNodesPy.QueryNode_exitFromDataflow(self)
    if _newclass:
        castFrom = staticmethod(_VisusNodesPy.QueryNode_castFrom)
    else:
        castFrom = _VisusNodesPy.QueryNode_castFrom

    def execute(self, ar):
        return _VisusNodesPy.QueryNode_execute(self, ar)

    def write(self, ar):
        return _VisusNodesPy.QueryNode_write(self, ar)

    def read(self, ar):
        return _VisusNodesPy.QueryNode_read(self, ar)
    def __disown__(self):
        self.this.disown()
        _VisusNodesPy.disown_QueryNode(self)
        return weakref_proxy(self)
QueryNode_swigregister = _VisusNodesPy.QueryNode_swigregister
QueryNode_swigregister(QueryNode)

def QueryNode_castFrom(obj):
    return _VisusNodesPy.QueryNode_castFrom(obj)
QueryNode_castFrom = _VisusNodesPy.QueryNode_castFrom

class KdQueryNode(QueryNode):
    __swig_setmethods__ = {}
    for _s in [QueryNode]:
        __swig_setmethods__.update(getattr(_s, '__swig_setmethods__', {}))
    __setattr__ = lambda self, name, value: _swig_setattr(self, KdQueryNode, name, value)
    __swig_getmethods__ = {}
    for _s in [QueryNode]:
        __swig_getmethods__.update(getattr(_s, '__swig_getmethods__', {}))
    __getattr__ = lambda self, name: _swig_getattr(self, KdQueryNode, name)
    __repr__ = _swig_repr

    def __init__(self):
        if self.__class__ == KdQueryNode:
            _self = None
        else:
            _self = self
        this = _VisusNodesPy.new_KdQueryNode(_self, )
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this
    __swig_destroy__ = _VisusNodesPy.delete_KdQueryNode
    __del__ = lambda self: None

    def processInput(self):
        return _VisusNodesPy.KdQueryNode_processInput(self)
    def __disown__(self):
        self.this.disown()
        _VisusNodesPy.disown_KdQueryNode(self)
        return weakref_proxy(self)
KdQueryNode_swigregister = _VisusNodesPy.KdQueryNode_swigregister
KdQueryNode_swigregister(KdQueryNode)

# This file is compatible with both classic and new-style classes.


