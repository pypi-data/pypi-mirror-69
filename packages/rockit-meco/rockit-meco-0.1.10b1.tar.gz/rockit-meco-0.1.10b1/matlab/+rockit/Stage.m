classdef Stage < handle
  properties
    parent
  end
  methods
    function obj = Stage(varargin)
      if length(varargin)==1 && ischar(varargin{1}) && strcmp(varargin{1},'from_super'),return,end
      if length(varargin)==1 && isa(varargin{1},'py.rockit.stage.Stage')
        obj.parent = varargin{1};
        return
      end
      global pythoncasadiinterface
      if isempty(pythoncasadiinterface)
        pythoncasadiinterface = rockit.PythonCasadiInterface;
      end
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,0,{'parent','t0','T','clone'});
      if isempty(kwargs)
        obj.parent = py.rockit.Stage(args{:});
      else
        obj.parent = py.rockit.Stage(args{:},pyargs(kwargs{:}));
      end
    end
    function varargout = set_t0(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'t0'});
      if isempty(kwargs)
        res = obj.parent.set_t0(args{:});
      else
        res = obj.parent.set_t0(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = set_T(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'T'});
      if isempty(kwargs)
        res = obj.parent.set_T(args{:});
      else
        res = obj.parent.set_T(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = stage(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,0,{'template','kwargs'});
      if isempty(kwargs)
        res = obj.parent.stage(args{:});
      else
        res = obj.parent.stage(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = state(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,0,{'n_rows','n_cols','quad'});
      if isempty(kwargs)
        res = obj.parent.state(args{:});
      else
        res = obj.parent.state(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = algebraic(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,0,{'n_rows','n_cols'});
      if isempty(kwargs)
        res = obj.parent.algebraic(args{:});
      else
        res = obj.parent.algebraic(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = variable(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,0,{'n_rows','n_cols','grid'});
      if isempty(kwargs)
        res = obj.parent.variable(args{:});
      else
        res = obj.parent.variable(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = parameter(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,0,{'n_rows','n_cols','grid'});
      if isempty(kwargs)
        res = obj.parent.parameter(args{:});
      else
        res = obj.parent.parameter(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = control(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,0,{'n_rows','n_cols','order'});
      if isempty(kwargs)
        res = obj.parent.control(args{:});
      else
        res = obj.parent.control(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = set_value(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,2,{'parameter','value'});
      if isempty(kwargs)
        res = obj.parent.set_value(args{:});
      else
        res = obj.parent.set_value(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = set_initial(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,2,{'var','value'});
      if isempty(kwargs)
        res = obj.parent.set_initial(args{:});
      else
        res = obj.parent.set_initial(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = set_der(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,2,{'state','der'});
      if isempty(kwargs)
        res = obj.parent.set_der(args{:});
      else
        res = obj.parent.set_der(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = set_next(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,2,{'state','next'});
      if isempty(kwargs)
        res = obj.parent.set_next(args{:});
      else
        res = obj.parent.set_next(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = add_alg(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'constr'});
      if isempty(kwargs)
        res = obj.parent.add_alg(args{:});
      else
        res = obj.parent.add_alg(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = der(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'expr'});
      if isempty(kwargs)
        res = obj.parent.der(args{:});
      else
        res = obj.parent.der(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = integral(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'expr','grid'});
      if isempty(kwargs)
        res = obj.parent.integral(args{:});
      else
        res = obj.parent.integral(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = sum(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'expr','grid'});
      if isempty(kwargs)
        res = obj.parent.sum(args{:});
      else
        res = obj.parent.sum(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = offset(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,2,{'expr','offset'});
      if isempty(kwargs)
        res = obj.parent.offset(args{:});
      else
        res = obj.parent.offset(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = next(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'expr'});
      if isempty(kwargs)
        res = obj.parent.next(args{:});
      else
        res = obj.parent.next(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = inf_inert(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'expr'});
      if isempty(kwargs)
        res = obj.parent.inf_inert(args{:});
      else
        res = obj.parent.inf_inert(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = inf_der(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'expr'});
      if isempty(kwargs)
        res = obj.parent.inf_der(args{:});
      else
        res = obj.parent.inf_der(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = prev(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'expr'});
      if isempty(kwargs)
        res = obj.parent.prev(args{:});
      else
        res = obj.parent.prev(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = clear_constraints(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,0,{});
      if isempty(kwargs)
        res = obj.parent.clear_constraints(args{:});
      else
        res = obj.parent.clear_constraints(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = subject_to(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'constr','grid','include_first','include_last','meta'});
      meta = py.None;
      try
        st = dbstack('-completenames',1);
        if length(st)>0
          meta = struct('stacktrace', {{st(1)}});
          meta = pythoncasadiinterface.matlab2python(meta);
        end
      catch
      end
      kwargs = {kwargs{:} 'meta' meta};
      if isempty(kwargs)
        res = obj.parent.subject_to(args{:});
      else
        res = obj.parent.subject_to(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = at_t0(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'expr'});
      if isempty(kwargs)
        res = obj.parent.at_t0(args{:});
      else
        res = obj.parent.at_t0(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = at_tf(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'expr'});
      if isempty(kwargs)
        res = obj.parent.at_tf(args{:});
      else
        res = obj.parent.at_tf(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = add_objective(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'term'});
      if isempty(kwargs)
        res = obj.parent.add_objective(args{:});
      else
        res = obj.parent.add_objective(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = method(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'method'});
      if isempty(kwargs)
        res = obj.parent.method(args{:});
      else
        res = obj.parent.method(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = is_signal(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'expr'});
      if isempty(kwargs)
        res = obj.parent.is_signal(args{:});
      else
        res = obj.parent.is_signal(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = clone(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'parent','kwargs'});
      if isempty(kwargs)
        res = obj.parent.clone(args{:});
      else
        res = obj.parent.clone(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = iter_stages(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,0,{'include_self'});
      if isempty(kwargs)
        res = obj.parent.iter_stages(args{:});
      else
        res = obj.parent.iter_stages(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
    end
    function varargout = sample(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,1,{'expr','grid','kwargs'});
      if isempty(kwargs)
        res = obj.parent.sample(args{:});
      else
        res = obj.parent.sample(args{:},pyargs(kwargs{:}));
      end
      varargout = pythoncasadiinterface.python2matlab_ret(res);
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
    function varargout = discrete_system(obj,varargin)
      global pythoncasadiinterface
      [args,kwargs] = pythoncasadiinterface.matlab2python_arg(varargin,0,{});
      if isempty(kwargs)
        res = obj.parent.discrete_system(args{:});
      else
        res = obj.parent.discrete_system(args{:},pyargs(kwargs{:}));
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
    function out = master(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.master);
    end
    function out = t(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.t);
    end
    function out = T(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.T);
    end
    function out = t0(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.t0);
    end
    function out = tf(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.tf);
    end
    function out = objective(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.objective);
    end
    function out = x(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.x);
    end
    function out = xq(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.xq);
    end
    function out = u(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.u);
    end
    function out = z(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.z);
    end
    function out = p(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.p);
    end
    function out = v(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.v);
    end
    function out = nx(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.nx);
    end
    function out = nz(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.nz);
    end
    function out = nu(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.nu);
    end
    function out = np(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.np);
    end
    function out = gist(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.gist);
    end
    function out = is_transcribed(obj)
      global pythoncasadiinterface
      out = pythoncasadiinterface.python2matlab(obj.parent.is_transcribed);
    end
  end
end
