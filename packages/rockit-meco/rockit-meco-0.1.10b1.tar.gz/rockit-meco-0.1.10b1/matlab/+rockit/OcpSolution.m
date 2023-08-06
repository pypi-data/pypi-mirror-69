classdef OcpSolution < handle
  properties
    parent
  end
  methods
    function obj = OcpSolution(varargin)
      if length(varargin)==1 && ischar(varargin{1}) && strcmp(varargin{1},'from_super'),return,end
      if length(varargin)==1 && isa(varargin{1},'py.rockit.solution.OcpSolution')
        obj.parent = varargin{1};
        return
      end
      global pythoncasadiinterface
      if isempty(pythoncasadiinterface)
        pythoncasadiinterface = rockit.PythonCasadiInterface;
      end
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,2,{'nlpsol','stage'});
      if isempty(kwargs)
        obj.parent = py.rockit.OcpSolution(args{:});
      else
        obj.parent = py.rockit.OcpSolution(args{:},pyargs(kwargs{:}));
      end
    end
    function varargout = subsref(obj,S)
      if ~strcmp(S(1).type,'()')
        [varargout{1:nargout}] = builtin('subsref',obj,S);
        return
      end
      varargin = S(1).subs;
      callee = py.getattr(obj.parent,'__call__');
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'stage'});
      if isempty(kwargs)
        res = callee(args{:});
      else
        res = callee(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
       if (length(S)>1) && strcmp(S(2).type,'.')
         res = varargout{1};
         [varargout{1:nargout}] = builtin('subsref',res,S(2:end));
       end
    end
    function varargout = value(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,inf,{'expr','args','kwargs'});
      if isempty(kwargs)
        res = obj.parent.value(args{:});
      else
        res = obj.parent.value(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = sample(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,2,{'expr','grid','kwargs'});
      if isempty(kwargs)
        res = obj.parent.sample(args{:});
      else
        res = obj.parent.sample(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = sampler(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,inf,{'args'});
      if isempty(kwargs)
        res = obj.parent.sampler(args{:});
      else
        res = obj.parent.sampler(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function out = gist(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.gist);
    end
  end
end
