// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css/app.pcss":[function(require,module,exports) {

},{}],"../translation/chi.json":[function(require,module,exports) {
module.exports = {
  "default_title": "剪刀兔",
  "request": {
    "error": {
      "bad_url": "请求的URL格式不正确",
      "timeout": "请求超时",
      "network_error": "无法连接",
      "bad_status": "无法完成请求",
      "bad_body": "返回数据的格式不正确"
    },
    "status_code": {
      "400": "请求格式不正确",
      "401": "未认证",
      "403": "禁止访问",
      "404": "无法找到请求的资源",
      "413": "请求实体太大",
      "422": "请求语义不正确",
      "500": "服务器端错误",
      "502": "网关错误",
      "503": "服务暂时不可用",
      "504": "上游服务请求超时",
      "other_status_codes": "无法完成请求 - 错误码：{{status_code}}"
    }
  },
  "uploader": {
    "uploading_video": "视频上传中",
    "uploading_subtitle": "字幕上传中",
    "uploaded": "上传完成",
    "failed_to_upload_video": "视频上传失败",
    "failed_to_upload_subtitle": "字幕上传失败"
  },
  "native_client": {
    "attempting_to_launch": "尝试启动中……",
    "prompt_part1": "如果浏览器未提示任何信息，请",
    "prompt_part2": "点击此处",
    "prompt_part3": "尝试启动，或",
    "prompt_part4": "下载并运行EDITOOL",
    "prompt_part5": "。",
    "connected": "已连接",
    "incompatible": "本地客户端版本不兼容",
    "version_unknown": "未知的本地客户端版本",
    "disconnected": "无法连接本地客户端",
    "platform_error": "请求的URL地址不正确",
    "unknown": "未知状态"
  },
  "page": {
    "project_portal": {
      "page_title": "视频列表-剪刀兔",
      "add_files": "添加",
      "add_files_empty_state": "点击添加视频或字幕文件",
      "choose_presets": "选择视频处理预设",
      "start_processing": "开始",
      "batch_remove_picked_videos": "删除",
      "with_subtitle_badge": "sub",
      "without_subtitle_badge": "添加字幕",
      "prompt_already_uploaded_subtitle": "您已上传过该视频的字幕",
      "replace_subtitle": "更换",
      "remove_subtitle": "移除",
      "keep_current_subtitle": "返回",
      "search_box_placeholder": "搜索"
    },
    "project": {
      "page_title": "图文编辑-剪刀兔",
      "nav": {
        "save_project": "保存",
        "back_to_portal": "返回列表",
        "preview_project": "预览",
        "export_project": "发布"
      },
      "prompt": {
        "successfully_saved": "保存成功",
        "failed_to_save": "保存失败",
        "failed_to_export": "发布失败"
      },
      "left_panel": {
        "save_project_and_leave": "保存并离开",
        "discard_changes_and_leave": "舍弃更改",
        "prompt_unsaved_changes": "您的更改还未保存",
        "stay_on_page": "继续编辑",
        "exporting_in_progress": "发布中",
        "frontend_version": "前端版本",
        "native_client_version": "Native Client 版本",
        "project_size": "当前项目总大小"
      },
      "right_panel": {
        "hidden_content": "已删除",
        "restore_hidden_content": "恢复",
        "new_textual_content": "新增文本",
        "project_size_label": "总大小："
      }
    }
  },
  "processing": {
    "preset": {
      "custom": "自定义"
    },
    "error": {
      "file_not_found": "找不到待处理的文件",
      "bad_parameters": "参数错误",
      "cannot_decode_video": "视频无法解码"
    }
  },
  "processing_status": {
    "not_started": "未处理",
    "started": "已开始",
    "completed": "已处理",
    "failed": "处理失败"
  },
  "project": {
    "project_not_found": "找不到请求的视频图文编辑项目"
  },
  "project_export": {
    "source_file_not_found": "无法找到视频源文件",
    "media_files_missing": "无法找到图片源文件"
  },
  "project_saving": {
    "source_file_not_found": "无法找到视频源文件"
  }
};
},{}],"../src/Main.elm":[function(require,module,exports) {
(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// HELPERS


function _Debugger_unsafeCoerce(value)
{
	return value;
}



// PROGRAMS


var _Debugger_element = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			var currNode = _VirtualDom_virtualize(domNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			var cornerNode = _VirtualDom_doc.createElement('div');
			domNode.parentNode.insertBefore(cornerNode, domNode.nextSibling);
			var cornerCurr = _VirtualDom_virtualize(cornerNode);

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = A2(_VirtualDom_map, $elm$browser$Debugger$Main$UserMsg, view($elm$browser$Debugger$Main$getUserModel(model)));
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view corner

				var cornerNext = $elm$browser$Debugger$Main$cornerView(model);
				var cornerPatches = _VirtualDom_diff(cornerCurr, cornerNext);
				cornerNode = _VirtualDom_applyPatches(cornerNode, cornerCurr, cornerPatches, sendToApp);
				cornerCurr = cornerNext;

				if (!model.popout.b)
				{
					currPopout = undefined;
					return;
				}

				// view popout

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


var _Debugger_document = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var divertHrefToApp = impl.setup && impl.setup(function(x) { return sendToApp($elm$browser$Debugger$Main$UserMsg(x)); });
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view($elm$browser$Debugger$Main$getUserModel(model));
				var nextNode = _VirtualDom_node('body')(_List_Nil)(
					_Utils_ap(
						A2($elm$core$List$map, _VirtualDom_map($elm$browser$Debugger$Main$UserMsg), doc.body),
						_List_Cons($elm$browser$Debugger$Main$cornerView(model), _List_Nil)
					)
				);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view popout

				if (!model.popout.b) { currPopout = undefined; return; }

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


function _Debugger_popout()
{
	return {
		b: undefined,
		a: undefined
	};
}

function _Debugger_isOpen(popout)
{
	return !!popout.b;
}

function _Debugger_open(popout)
{
	return _Scheduler_binding(function(callback)
	{
		_Debugger_openWindow(popout);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}

function _Debugger_openWindow(popout)
{
	var w = $elm$browser$Debugger$Main$initialWindowWidth,
		h = $elm$browser$Debugger$Main$initialWindowHeight,
	 	x = screen.width - w,
		y = screen.height - h;

	var debuggerWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);
	var doc = debuggerWindow.document;
	doc.title = 'Elm Debugger';

	// handle arrow keys
	doc.addEventListener('keydown', function(event) {
		event.metaKey && event.which === 82 && window.location.reload();
		event.key === 'ArrowUp'   && (popout.a($elm$browser$Debugger$Main$Up  ), event.preventDefault());
		event.key === 'ArrowDown' && (popout.a($elm$browser$Debugger$Main$Down), event.preventDefault());
	});

	// handle window close
	window.addEventListener('unload', close);
	debuggerWindow.addEventListener('unload', function() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		window.removeEventListener('unload', close);
	});

	function close() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		debuggerWindow.close();
	}

	// register new window
	popout.b = doc;
}



// SCROLL


function _Debugger_scroll(popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msgs = popout.b.getElementById('elm-debugger-sidebar');
			if (msgs && msgs.scrollTop !== 0)
			{
				msgs.scrollTop = 0;
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


var _Debugger_scrollTo = F2(function(id, popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msg = popout.b.getElementById(id);
			if (msg)
			{
				msg.scrollIntoView(false);
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});



// UPLOAD


function _Debugger_upload(popout)
{
	return _Scheduler_binding(function(callback)
	{
		var doc = popout.b || document;
		var element = doc.createElement('input');
		element.setAttribute('type', 'file');
		element.setAttribute('accept', 'text/json');
		element.style.display = 'none';
		element.addEventListener('change', function(event)
		{
			var fileReader = new FileReader();
			fileReader.onload = function(e)
			{
				callback(_Scheduler_succeed(e.target.result));
			};
			fileReader.readAsText(event.target.files[0]);
			doc.body.removeChild(element);
		});
		doc.body.appendChild(element);
		element.click();
	});
}



// DOWNLOAD


var _Debugger_download = F2(function(historyLength, json)
{
	return _Scheduler_binding(function(callback)
	{
		var fileName = 'history-' + historyLength + '.txt';
		var jsonString = JSON.stringify(json);
		var mime = 'text/plain;charset=utf-8';
		var done = _Scheduler_succeed(_Utils_Tuple0);

		// for IE10+
		if (navigator.msSaveBlob)
		{
			navigator.msSaveBlob(new Blob([jsonString], {type: mime}), fileName);
			return callback(done);
		}

		// for HTML5
		var element = document.createElement('a');
		element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
		element.setAttribute('download', fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		callback(done);
	});
});



// POPOUT CONTENT


function _Debugger_messageToString(value)
{
	if (typeof value === 'boolean')
	{
		return value ? 'True' : 'False';
	}

	if (typeof value === 'number')
	{
		return value + '';
	}

	if (typeof value === 'string')
	{
		return '"' + _Debugger_addSlashes(value, false) + '"';
	}

	if (value instanceof String)
	{
		return "'" + _Debugger_addSlashes(value, true) + "'";
	}

	if (typeof value !== 'object' || value === null || !('$' in value))
	{
		return '…';
	}

	if (typeof value.$ === 'number')
	{
		return '…';
	}

	var code = value.$.charCodeAt(0);
	if (code === 0x23 /* # */ || /* a */ 0x61 <= code && code <= 0x7A /* z */)
	{
		return '…';
	}

	if (['Array_elm_builtin', 'Set_elm_builtin', 'RBNode_elm_builtin', 'RBEmpty_elm_builtin'].indexOf(value.$) >= 0)
	{
		return '…';
	}

	var keys = Object.keys(value);
	switch (keys.length)
	{
		case 1:
			return value.$;
		case 2:
			return value.$ + ' ' + _Debugger_messageToString(value.a);
		default:
			return value.$ + ' … ' + _Debugger_messageToString(value[keys[keys.length - 1]]);
	}
}


function _Debugger_init(value)
{
	if (typeof value === 'boolean')
	{
		return A3($elm$browser$Debugger$Expando$Constructor, $elm$core$Maybe$Just(value ? 'True' : 'False'), true, _List_Nil);
	}

	if (typeof value === 'number')
	{
		return $elm$browser$Debugger$Expando$Primitive(value + '');
	}

	if (typeof value === 'string')
	{
		return $elm$browser$Debugger$Expando$S('"' + _Debugger_addSlashes(value, false) + '"');
	}

	if (value instanceof String)
	{
		return $elm$browser$Debugger$Expando$S("'" + _Debugger_addSlashes(value, true) + "'");
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (tag === '::' || tag === '[]')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ListSeq, true,
				A2($elm$core$List$map, _Debugger_init, value)
			);
		}

		if (tag === 'Set_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$SetSeq, true,
				A3($elm$core$Set$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (tag === 'RBNode_elm_builtin' || tag == 'RBEmpty_elm_builtin')
		{
			return A2($elm$browser$Debugger$Expando$Dictionary, true,
				A3($elm$core$Dict$foldr, _Debugger_initKeyValueCons, _List_Nil, value)
			);
		}

		if (tag === 'Array_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ArraySeq, true,
				A3($elm$core$Array$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (typeof tag === 'number')
		{
			return $elm$browser$Debugger$Expando$Primitive('<internals>');
		}

		var char = tag.charCodeAt(0);
		if (char === 35 || 65 <= char && char <= 90)
		{
			var list = _List_Nil;
			for (var i in value)
			{
				if (i === '$') continue;
				list = _List_Cons(_Debugger_init(value[i]), list);
			}
			return A3($elm$browser$Debugger$Expando$Constructor, char === 35 ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(tag), true, $elm$core$List$reverse(list));
		}

		return $elm$browser$Debugger$Expando$Primitive('<internals>');
	}

	if (typeof value === 'object')
	{
		var dict = $elm$core$Dict$empty;
		for (var i in value)
		{
			dict = A3($elm$core$Dict$insert, i, _Debugger_init(value[i]), dict);
		}
		return A2($elm$browser$Debugger$Expando$Record, true, dict);
	}

	return $elm$browser$Debugger$Expando$Primitive('<internals>');
}

var _Debugger_initCons = F2(function initConsHelp(value, list)
{
	return _List_Cons(_Debugger_init(value), list);
});

var _Debugger_initKeyValueCons = F3(function(key, value, list)
{
	return _List_Cons(
		_Utils_Tuple2(_Debugger_init(key), _Debugger_init(value)),
		list
	);
});

function _Debugger_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}



// BLOCK EVENTS


function _Debugger_updateBlocker(oldBlocker, newBlocker)
{
	if (oldBlocker === newBlocker) return;

	var oldEvents = _Debugger_blockerToEvents(oldBlocker);
	var newEvents = _Debugger_blockerToEvents(newBlocker);

	// remove old blockers
	for (var i = 0; i < oldEvents.length; i++)
	{
		document.removeEventListener(oldEvents[i], _Debugger_blocker, true);
	}

	// add new blockers
	for (var i = 0; i < newEvents.length; i++)
	{
		document.addEventListener(newEvents[i], _Debugger_blocker, true);
	}
}


function _Debugger_blocker(event)
{
	if (event.type === 'keydown' && event.metaKey && event.which === 82)
	{
		return;
	}

	var isScroll = event.type === 'scroll' || event.type === 'wheel';
	for (var node = event.target; node; node = node.parentNode)
	{
		if (isScroll ? node.id === 'elm-debugger-details' : node.id === 'elm-debugger-overlay')
		{
			return;
		}
	}

	event.stopPropagation();
	event.preventDefault();
}

function _Debugger_blockerToEvents(blocker)
{
	return blocker === $elm$browser$Debugger$Overlay$BlockNone
		? []
		: blocker === $elm$browser$Debugger$Overlay$BlockMost
			? _Debugger_mostEvents
			: _Debugger_allEvents;
}

var _Debugger_mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var _Debugger_allEvents = _Debugger_mostEvents.concat('wheel', 'scroll');




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}


// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}

// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



// DECODER

var _File_decoder = _Json_decodePrim(function(value) {
	// NOTE: checks if `File` exists in case this is run on node
	return (typeof File !== 'undefined' && value instanceof File)
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FILE', value);
});


// METADATA

function _File_name(file) { return file.name; }
function _File_mime(file) { return file.type; }
function _File_size(file) { return file.size; }

function _File_lastModified(file)
{
	return $elm$time$Time$millisToPosix(file.lastModified);
}


// DOWNLOAD

var _File_downloadNode;

function _File_getDownloadNode()
{
	return _File_downloadNode || (_File_downloadNode = document.createElement('a'));
}

var _File_download = F3(function(name, mime, content)
{
	return _Scheduler_binding(function(callback)
	{
		var blob = new Blob([content], {type: mime});

		// for IE10+
		if (navigator.msSaveOrOpenBlob)
		{
			navigator.msSaveOrOpenBlob(blob, name);
			return;
		}

		// for HTML5
		var node = _File_getDownloadNode();
		var objectUrl = URL.createObjectURL(blob);
		node.href = objectUrl;
		node.download = name;
		_File_click(node);
		URL.revokeObjectURL(objectUrl);
	});
});

function _File_downloadUrl(href)
{
	return _Scheduler_binding(function(callback)
	{
		var node = _File_getDownloadNode();
		node.href = href;
		node.download = '';
		node.origin === location.origin || (node.target = '_blank');
		_File_click(node);
	});
}


// IE COMPATIBILITY

function _File_makeBytesSafeForInternetExplorer(bytes)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/10
	// all other browsers can just run `new Blob([bytes])` directly with no problem
	//
	return new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

function _File_click(node)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/11
	// all other browsers have MouseEvent and do not need this conditional stuff
	//
	if (typeof MouseEvent === 'function')
	{
		node.dispatchEvent(new MouseEvent('click'));
	}
	else
	{
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		document.body.appendChild(node);
		node.dispatchEvent(event);
		document.body.removeChild(node);
	}
}


// UPLOAD

var _File_node;

function _File_uploadOne(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			callback(_Scheduler_succeed(event.target.files[0]));
		});
		_File_click(_File_node);
	});
}

function _File_uploadOneOrMore(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.multiple = true;
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			var elmFiles = _List_fromArray(event.target.files);
			callback(_Scheduler_succeed(_Utils_Tuple2(elmFiles.a, elmFiles.b)));
		});
		_File_click(_File_node);
	});
}


// CONTENT

function _File_toString(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsText(blob);
		return function() { reader.abort(); };
	});
}

function _File_toBytes(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(new DataView(reader.result)));
		});
		reader.readAsArrayBuffer(blob);
		return function() { reader.abort(); };
	});
}

function _File_toUrl(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsDataURL(blob);
		return function() { reader.abort(); };
	});
}

var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$List$cons = _List_cons;
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Debugger$Expando$ArraySeq = {$: 'ArraySeq'};
var $elm$browser$Debugger$Overlay$BlockMost = {$: 'BlockMost'};
var $elm$browser$Debugger$Overlay$BlockNone = {$: 'BlockNone'};
var $elm$browser$Debugger$Expando$Constructor = F3(
	function (a, b, c) {
		return {$: 'Constructor', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Dictionary = F2(
	function (a, b) {
		return {$: 'Dictionary', a: a, b: b};
	});
var $elm$browser$Debugger$Main$Down = {$: 'Down'};
var $elm$browser$Debugger$Expando$ListSeq = {$: 'ListSeq'};
var $elm$browser$Debugger$Main$NoOp = {$: 'NoOp'};
var $elm$browser$Debugger$Expando$Primitive = function (a) {
	return {$: 'Primitive', a: a};
};
var $elm$browser$Debugger$Expando$Record = F2(
	function (a, b) {
		return {$: 'Record', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$S = function (a) {
	return {$: 'S', a: a};
};
var $elm$browser$Debugger$Expando$Sequence = F3(
	function (a, b, c) {
		return {$: 'Sequence', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$SetSeq = {$: 'SetSeq'};
var $elm$browser$Debugger$Main$Up = {$: 'Up'};
var $elm$browser$Debugger$Main$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var $elm$browser$Debugger$Main$Export = {$: 'Export'};
var $elm$browser$Debugger$Main$Import = {$: 'Import'};
var $elm$browser$Debugger$Main$Open = {$: 'Open'};
var $elm$browser$Debugger$Main$OverlayMsg = function (a) {
	return {$: 'OverlayMsg', a: a};
};
var $elm$browser$Debugger$Main$Resume = {$: 'Resume'};
var $elm$browser$Debugger$Main$isPaused = function (state) {
	if (state.$ === 'Running') {
		return false;
	} else {
		return true;
	}
};
var $elm$browser$Debugger$History$size = function (history) {
	return history.numMessages;
};
var $elm$browser$Debugger$Overlay$Accept = function (a) {
	return {$: 'Accept', a: a};
};
var $elm$browser$Debugger$Overlay$Choose = F2(
	function (a, b) {
		return {$: 'Choose', a: a, b: b};
	});
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$browser$Debugger$Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
var $elm$browser$Debugger$Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$browser$Debugger$Overlay$viewCode = function (name) {
	return A2(
		$elm$html$Html$code,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(name)
			]));
};
var $elm$browser$Debugger$Overlay$addCommas = function (items) {
	if (!items.b) {
		return '';
	} else {
		if (!items.b.b) {
			var item = items.a;
			return item;
		} else {
			if (!items.b.b.b) {
				var item1 = items.a;
				var _v1 = items.b;
				var item2 = _v1.a;
				return item1 + (' and ' + item2);
			} else {
				var lastItem = items.a;
				var otherItems = items.b;
				return A2(
					$elm$core$String$join,
					', ',
					_Utils_ap(
						otherItems,
						_List_fromArray(
							[' and ' + lastItem])));
			}
		}
	}
};
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$browser$Debugger$Overlay$problemToString = function (problem) {
	switch (problem.$) {
		case 'Function':
			return 'functions';
		case 'Decoder':
			return 'JSON decoders';
		case 'Task':
			return 'tasks';
		case 'Process':
			return 'processes';
		case 'Socket':
			return 'web sockets';
		case 'Request':
			return 'HTTP requests';
		case 'Program':
			return 'programs';
		default:
			return 'virtual DOM values';
	}
};
var $elm$browser$Debugger$Overlay$viewProblemType = function (_v0) {
	var name = _v0.name;
	var problems = _v0.problems;
	return A2(
		$elm$html$Html$li,
		_List_Nil,
		_List_fromArray(
			[
				$elm$browser$Debugger$Overlay$viewCode(name),
				$elm$html$Html$text(
				' can contain ' + ($elm$browser$Debugger$Overlay$addCommas(
					A2($elm$core$List$map, $elm$browser$Debugger$Overlay$problemToString, problems)) + '.'))
			]));
};
var $elm$browser$Debugger$Overlay$viewBadMetadata = function (_v0) {
	var message = _v0.message;
	var problems = _v0.problems;
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('The '),
					$elm$browser$Debugger$Overlay$viewCode(message),
					$elm$html$Html$text(' type of your program cannot be reliably serialized for history files.')
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:')
				])),
			A2(
			$elm$html$Html$ul,
			_List_Nil,
			A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewProblemType, problems)),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews1),
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('https://guide.elm-lang.org/types/custom_types.html')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('custom types')
						])),
					$elm$html$Html$text(', in your messages. From there, your '),
					$elm$browser$Debugger$Overlay$viewCode('update'),
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews2)
				]))
		]);
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$browser$Debugger$Overlay$Cancel = {$: 'Cancel'};
var $elm$browser$Debugger$Overlay$Proceed = {$: 'Proceed'};
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$browser$Debugger$Overlay$viewButtons = function (buttons) {
	var btn = F2(
		function (msg, string) {
			return A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-right', '20px'),
						$elm$html$Html$Events$onClick(msg)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(string)
					]));
		});
	var buttonNodes = function () {
		if (buttons.$ === 'Accept') {
			var proceed = buttons.a;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		} else {
			var cancel = buttons.a;
			var proceed = buttons.b;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Cancel, cancel),
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'height', '60px'),
				A2($elm$html$Html$Attributes$style, 'line-height', '60px'),
				A2($elm$html$Html$Attributes$style, 'text-align', 'right'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		buttonNodes);
};
var $elm$browser$Debugger$Overlay$viewMessage = F4(
	function (config, title, details, buttons) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-overlay'),
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2($elm$html$Html$Attributes$style, 'left', '0'),
					A2($elm$html$Html$Attributes$style, 'width', '100vw'),
					A2($elm$html$Html$Attributes$style, 'height', '100vh'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'),
					A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
							A2($elm$html$Html$Attributes$style, 'width', '600px'),
							A2($elm$html$Html$Attributes$style, 'height', '100vh'),
							A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'padding-right', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '36px'),
									A2($elm$html$Html$Attributes$style, 'height', '80px'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)'),
									A2($elm$html$Html$Attributes$style, 'padding-left', '22px'),
									A2($elm$html$Html$Attributes$style, 'vertical-align', 'middle'),
									A2($elm$html$Html$Attributes$style, 'line-height', '80px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(title)
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id('elm-debugger-details'),
									A2($elm$html$Html$Attributes$style, 'padding', ' 8px 20px'),
									A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
									A2($elm$html$Html$Attributes$style, 'max-height', 'calc(100vh - 156px)'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)')
								]),
							details),
							A2(
							$elm$html$Html$map,
							config.wrap,
							$elm$browser$Debugger$Overlay$viewButtons(buttons))
						]))
				]));
	});
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$browser$Debugger$Overlay$viewShape = F4(
	function (x, y, angle, coordinates) {
		return A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			'http://www.w3.org/2000/svg',
			'polygon',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'points', coordinates),
					A2(
					$elm$virtual_dom$VirtualDom$attribute,
					'transform',
					'translate(' + ($elm$core$String$fromFloat(x) + (' ' + ($elm$core$String$fromFloat(y) + (') rotate(' + ($elm$core$String$fromFloat(-angle) + ')'))))))
				]),
			_List_Nil);
	});
var $elm$browser$Debugger$Overlay$elmLogo = A4(
	$elm$virtual_dom$VirtualDom$nodeNS,
	'http://www.w3.org/2000/svg',
	'svg',
	_List_fromArray(
		[
			A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '-300 -300 600 600'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'width', '24px'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'height', '24px')
		]),
	_List_fromArray(
		[
			A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			'http://www.w3.org/2000/svg',
			'g',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'transform', 'scale(1 -1)')
				]),
			_List_fromArray(
				[
					A4($elm$browser$Debugger$Overlay$viewShape, 0, -210, 0, '-280,-90 0,190 280,-90'),
					A4($elm$browser$Debugger$Overlay$viewShape, -210, 0, 90, '-280,-90 0,190 280,-90'),
					A4($elm$browser$Debugger$Overlay$viewShape, 207, 207, 45, '-198,-66 0,132 198,-66'),
					A4($elm$browser$Debugger$Overlay$viewShape, 150, 0, 0, '-130,0 0,-130 130,0 0,130'),
					A4($elm$browser$Debugger$Overlay$viewShape, -89, 239, 0, '-191,61 69,61 191,-61 -69,-61'),
					A4($elm$browser$Debugger$Overlay$viewShape, 0, 106, 180, '-130,-44 0,86  130,-44'),
					A4($elm$browser$Debugger$Overlay$viewShape, 256, -150, 270, '-130,-44 0,86  130,-44')
				]))
		]));
var $elm$core$String$length = _String_length;
var $elm$browser$Debugger$Overlay$viewMiniControls = F2(
	function (config, numMsgs) {
		var string = $elm$core$String$fromInt(numMsgs);
		var width = $elm$core$String$fromInt(
			2 + $elm$core$String$length(string));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'bottom', '2em'),
					A2($elm$html$Html$Attributes$style, 'right', '2em'),
					A2($elm$html$Html$Attributes$style, 'width', 'calc(42px + ' + (width + 'ch)')),
					A2($elm$html$Html$Attributes$style, 'height', '36px'),
					A2($elm$html$Html$Attributes$style, 'background-color', '#1293D8'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647'),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					$elm$html$Html$Events$onClick(config.open)
				]),
			_List_fromArray(
				[
					$elm$browser$Debugger$Overlay$elmLogo,
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(1ch + 6px)'),
							A2($elm$html$Html$Attributes$style, 'padding-right', '1ch')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(string)
						]))
				]));
	});
var $elm$browser$Debugger$Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
var $elm$browser$Debugger$Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$browser$Debugger$Overlay$viewMention = F2(
	function (tags, verbed) {
		var _v0 = A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Overlay$viewCode,
			$elm$core$List$reverse(tags));
		if (!_v0.b) {
			return $elm$html$Html$text('');
		} else {
			if (!_v0.b.b) {
				var tag = _v0.a;
				return A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(verbed),
							tag,
							$elm$html$Html$text('.')
						]));
			} else {
				if (!_v0.b.b.b) {
					var tag2 = _v0.a;
					var _v1 = _v0.b;
					var tag1 = _v1.a;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(verbed),
								tag1,
								$elm$html$Html$text(' and '),
								tag2,
								$elm$html$Html$text('.')
							]));
				} else {
					var lastTag = _v0.a;
					var otherTags = _v0.b;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						A2(
							$elm$core$List$cons,
							$elm$html$Html$text(verbed),
							_Utils_ap(
								A2(
									$elm$core$List$intersperse,
									$elm$html$Html$text(', '),
									$elm$core$List$reverse(otherTags)),
								_List_fromArray(
									[
										$elm$html$Html$text(', and '),
										lastTag,
										$elm$html$Html$text('.')
									]))));
				}
			}
		}
	});
var $elm$browser$Debugger$Overlay$viewChange = function (change) {
	return A2(
		$elm$html$Html$li,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'margin', '8px 0')
			]),
		function () {
			if (change.$ === 'AliasChange') {
				var name = change.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							]))
					]);
			} else {
				var name = change.a;
				var removed = change.b.removed;
				var changed = change.b.changed;
				var added = change.b.added;
				var argsMatch = change.b.argsMatch;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'disc'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '2em')
							]),
						_List_fromArray(
							[
								A2($elm$browser$Debugger$Overlay$viewMention, removed, 'Removed '),
								A2($elm$browser$Debugger$Overlay$viewMention, changed, 'Changed '),
								A2($elm$browser$Debugger$Overlay$viewMention, added, 'Added ')
							])),
						argsMatch ? $elm$html$Html$text('') : $elm$html$Html$text('This may be due to the fact that the type variable names changed.')
					]);
			}
		}());
};
var $elm$browser$Debugger$Overlay$viewReport = F2(
	function (isBad, report) {
		switch (report.$) {
			case 'CorruptHistory':
				return _List_fromArray(
					[
						$elm$html$Html$text('Looks like this history file is corrupt. I cannot understand it.')
					]);
			case 'VersionChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('This history was created with Elm ' + (old + (', but you are using Elm ' + (_new + ' right now.'))))
					]);
			case 'MessageChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('To import some other history, the overall message type must' + ' be the same. The old history has '),
						$elm$browser$Debugger$Overlay$viewCode(old),
						$elm$html$Html$text(' messages, but the new program works with '),
						$elm$browser$Debugger$Overlay$viewCode(_new),
						$elm$html$Html$text(' messages.')
					]);
			default:
				var changes = report.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								isBad ? $elm$browser$Debugger$Overlay$explanationBad : $elm$browser$Debugger$Overlay$explanationRisky)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'none'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '20px')
							]),
						A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewChange, changes))
					]);
		}
	});
var $elm$browser$Debugger$Overlay$view = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		switch (state.$) {
			case 'None':
				return isOpen ? $elm$html$Html$text('') : (isPaused ? A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('elm-debugger-overlay'),
							A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
							A2($elm$html$Html$Attributes$style, 'top', '0'),
							A2($elm$html$Html$Attributes$style, 'left', '0'),
							A2($elm$html$Html$Attributes$style, 'width', '100vw'),
							A2($elm$html$Html$Attributes$style, 'height', '100vh'),
							A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
							A2($elm$html$Html$Attributes$style, 'display', 'flex'),
							A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
							A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'color', 'white'),
							A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
							A2($elm$html$Html$Attributes$style, 'z-index', '2147483646'),
							$elm$html$Html$Events$onClick(config.resume)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '80px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Click to Resume')
								])),
							A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs)
						])) : A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs));
			case 'BadMetadata':
				var badMetadata_ = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot use Import or Export',
					$elm$browser$Debugger$Overlay$viewBadMetadata(badMetadata_),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			case 'BadImport':
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot Import History',
					A2($elm$browser$Debugger$Overlay$viewReport, true, report),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			default:
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Warning',
					A2($elm$browser$Debugger$Overlay$viewReport, false, report),
					A2($elm$browser$Debugger$Overlay$Choose, 'Cancel', 'Import Anyway'));
		}
	});
var $elm$browser$Debugger$Main$cornerView = function (model) {
	return A5(
		$elm$browser$Debugger$Overlay$view,
		{exportHistory: $elm$browser$Debugger$Main$Export, importHistory: $elm$browser$Debugger$Main$Import, open: $elm$browser$Debugger$Main$Open, resume: $elm$browser$Debugger$Main$Resume, wrap: $elm$browser$Debugger$Main$OverlayMsg},
		$elm$browser$Debugger$Main$isPaused(model.state),
		_Debugger_isOpen(model.popout),
		$elm$browser$Debugger$History$size(model.history),
		model.overlay);
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$foldr = F3(
	function (func, initialState, _v0) {
		var dict = _v0.a;
		return A3(
			$elm$core$Dict$foldr,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $elm$browser$Debugger$Main$getCurrentModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.b;
		return model;
	}
};
var $elm$browser$Debugger$Main$getUserModel = function (model) {
	return $elm$browser$Debugger$Main$getCurrentModel(model.state);
};
var $elm$browser$Debugger$Main$initialWindowHeight = 420;
var $elm$browser$Debugger$Main$initialWindowWidth = 900;
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$browser$Debugger$Main$cachedHistory = function (model) {
	var _v0 = model.state;
	if (_v0.$ === 'Running') {
		return model.history;
	} else {
		var history = _v0.e;
		return history;
	}
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$browser$Debugger$Main$DragEnd = {$: 'DragEnd'};
var $elm$browser$Debugger$Main$getDragStatus = function (layout) {
	if (layout.$ === 'Horizontal') {
		var status = layout.a;
		return status;
	} else {
		var status = layout.a;
		return status;
	}
};
var $elm$browser$Debugger$Main$Drag = function (a) {
	return {$: 'Drag', a: a};
};
var $elm$browser$Debugger$Main$DragInfo = F5(
	function (x, y, down, width, height) {
		return {down: down, height: height, width: width, x: x, y: y};
	});
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$browser$Debugger$Main$decodeDimension = function (field) {
	return A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['currentTarget', 'ownerDocument', 'defaultView', field]),
		$elm$json$Json$Decode$float);
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$browser$Debugger$Main$onMouseMove = A2(
	$elm$html$Html$Events$on,
	'mousemove',
	A2(
		$elm$json$Json$Decode$map,
		$elm$browser$Debugger$Main$Drag,
		A6(
			$elm$json$Json$Decode$map5,
			$elm$browser$Debugger$Main$DragInfo,
			A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float),
			A2(
				$elm$json$Json$Decode$field,
				'buttons',
				A2(
					$elm$json$Json$Decode$map,
					function (v) {
						return v === 1;
					},
					$elm$json$Json$Decode$int)),
			$elm$browser$Debugger$Main$decodeDimension('innerWidth'),
			$elm$browser$Debugger$Main$decodeDimension('innerHeight'))));
var $elm$html$Html$Events$onMouseUp = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$browser$Debugger$Main$toDragListeners = function (layout) {
	var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
	if (_v0.$ === 'Static') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				$elm$browser$Debugger$Main$onMouseMove,
				$elm$html$Html$Events$onMouseUp($elm$browser$Debugger$Main$DragEnd)
			]);
	}
};
var $elm$browser$Debugger$Main$toFlexDirection = function (layout) {
	if (layout.$ === 'Horizontal') {
		return 'row';
	} else {
		return 'column-reverse';
	}
};
var $elm$browser$Debugger$Main$DragStart = {$: 'DragStart'};
var $elm$html$Html$Events$onMouseDown = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousedown',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$browser$Debugger$Main$toPercent = function (fraction) {
	return $elm$core$String$fromFloat(100 * fraction) + '%';
};
var $elm$browser$Debugger$Main$viewDragZone = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2(
					$elm$html$Html$Attributes$style,
					'left',
					$elm$browser$Debugger$Main$toPercent(x)),
					A2($elm$html$Html$Attributes$style, 'margin-left', '-5px'),
					A2($elm$html$Html$Attributes$style, 'width', '10px'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'col-resize'),
					$elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
				]),
			_List_Nil);
	} else {
		var y = layout.c;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2(
					$elm$html$Html$Attributes$style,
					'top',
					$elm$browser$Debugger$Main$toPercent(y)),
					A2($elm$html$Html$Attributes$style, 'left', '0'),
					A2($elm$html$Html$Attributes$style, 'margin-top', '-5px'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '10px'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'row-resize'),
					$elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
				]),
			_List_Nil);
	}
};
var $elm$browser$Debugger$Main$TweakExpandoModel = function (a) {
	return {$: 'TweakExpandoModel', a: a};
};
var $elm$browser$Debugger$Main$TweakExpandoMsg = function (a) {
	return {$: 'TweakExpandoMsg', a: a};
};
var $elm$browser$Debugger$Main$toExpandoPercents = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return _Utils_Tuple2(
			$elm$browser$Debugger$Main$toPercent(1 - x),
			'100%');
	} else {
		var y = layout.c;
		return _Utils_Tuple2(
			'100%',
			$elm$browser$Debugger$Main$toPercent(y));
	}
};
var $elm$browser$Debugger$Main$toMouseBlocker = function (layout) {
	var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
	if (_v0.$ === 'Static') {
		return 'auto';
	} else {
		return 'none';
	}
};
var $elm$browser$Debugger$Expando$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$Index = F3(
	function (a, b, c) {
		return {$: 'Index', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Key = {$: 'Key'};
var $elm$browser$Debugger$Expando$None = {$: 'None'};
var $elm$browser$Debugger$Expando$Toggle = {$: 'Toggle'};
var $elm$browser$Debugger$Expando$Value = {$: 'Value'};
var $elm$browser$Debugger$Expando$blue = A2($elm$html$Html$Attributes$style, 'color', 'rgb(28, 0, 207)');
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$browser$Debugger$Expando$leftPad = function (maybeKey) {
	if (maybeKey.$ === 'Nothing') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'padding-left', '4ch')
			]);
	}
};
var $elm$browser$Debugger$Expando$makeArrow = function (arrow) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'color', '#777'),
				A2($elm$html$Html$Attributes$style, 'padding-left', '2ch'),
				A2($elm$html$Html$Attributes$style, 'width', '2ch'),
				A2($elm$html$Html$Attributes$style, 'display', 'inline-block')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(arrow)
			]));
};
var $elm$browser$Debugger$Expando$purple = A2($elm$html$Html$Attributes$style, 'color', 'rgb(136, 19, 145)');
var $elm$browser$Debugger$Expando$lineStarter = F3(
	function (maybeKey, maybeIsClosed, description) {
		var arrow = function () {
			if (maybeIsClosed.$ === 'Nothing') {
				return $elm$browser$Debugger$Expando$makeArrow('');
			} else {
				if (maybeIsClosed.a) {
					return $elm$browser$Debugger$Expando$makeArrow('▸');
				} else {
					return $elm$browser$Debugger$Expando$makeArrow('▾');
				}
			}
		}();
		if (maybeKey.$ === 'Nothing') {
			return A2($elm$core$List$cons, arrow, description);
		} else {
			var key = maybeKey.a;
			return A2(
				$elm$core$List$cons,
				arrow,
				A2(
					$elm$core$List$cons,
					A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$purple]),
						_List_fromArray(
							[
								$elm$html$Html$text(key)
							])),
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(' = '),
						description)));
		}
	});
var $elm$browser$Debugger$Expando$red = A2($elm$html$Html$Attributes$style, 'color', 'rgb(196, 26, 22)');
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$browser$Debugger$Expando$seqTypeToString = F2(
	function (n, seqType) {
		switch (seqType.$) {
			case 'ListSeq':
				return 'List(' + ($elm$core$String$fromInt(n) + ')');
			case 'SetSeq':
				return 'Set(' + ($elm$core$String$fromInt(n) + ')');
			default:
				return 'Array(' + ($elm$core$String$fromInt(n) + ')');
		}
	});
var $elm$core$String$slice = _String_slice;
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $elm$browser$Debugger$Expando$elideMiddle = function (str) {
	return ($elm$core$String$length(str) <= 18) ? str : (A2($elm$core$String$left, 8, str) + ('...' + A2($elm$core$String$right, 8, str)));
};
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Expando$viewExtraTinyRecord = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 1,
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					]));
		} else {
			var field = entries.a;
			var rest = entries.b;
			var nextLength = (length + $elm$core$String$length(field)) + 1;
			if (nextLength > 18) {
				return _Utils_Tuple2(
					length + 2,
					_List_fromArray(
						[
							$elm$html$Html$text('…}')
						]));
			} else {
				var _v1 = A3($elm$browser$Debugger$Expando$viewExtraTinyRecord, nextLength, ',', rest);
				var finalLength = _v1.a;
				var otherHtmls = _v1.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							otherHtmls)));
			}
		}
	});
var $elm$browser$Debugger$Expando$viewTinyHelp = function (str) {
	return _Utils_Tuple2(
		$elm$core$String$length(str),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $elm$browser$Debugger$Expando$viewExtraTiny = function (value) {
	if (value.$ === 'Record') {
		var record = value.b;
		return A3(
			$elm$browser$Debugger$Expando$viewExtraTinyRecord,
			0,
			'{',
			$elm$core$Dict$keys(record));
	} else {
		return $elm$browser$Debugger$Expando$viewTiny(value);
	}
};
var $elm$browser$Debugger$Expando$viewTiny = function (value) {
	switch (value.$) {
		case 'S':
			var stringRep = value.a;
			var str = $elm$browser$Debugger$Expando$elideMiddle(stringRep);
			return _Utils_Tuple2(
				$elm$core$String$length(str),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$red]),
						_List_fromArray(
							[
								$elm$html$Html$text(str)
							]))
					]));
		case 'Primitive':
			var stringRep = value.a;
			return _Utils_Tuple2(
				$elm$core$String$length(stringRep),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$blue]),
						_List_fromArray(
							[
								$elm$html$Html$text(stringRep)
							]))
					]));
		case 'Sequence':
			var seqType = value.a;
			var valueList = value.c;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				A2(
					$elm$browser$Debugger$Expando$seqTypeToString,
					$elm$core$List$length(valueList),
					seqType));
		case 'Dictionary':
			var keyValuePairs = value.b;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				'Dict(' + ($elm$core$String$fromInt(
					$elm$core$List$length(keyValuePairs)) + ')'));
		case 'Record':
			var record = value.b;
			return $elm$browser$Debugger$Expando$viewTinyRecord(record);
		default:
			if (!value.c.b) {
				var maybeName = value.a;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					A2($elm$core$Maybe$withDefault, 'Unit', maybeName));
			} else {
				var maybeName = value.a;
				var valueList = value.c;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					function () {
						if (maybeName.$ === 'Nothing') {
							return 'Tuple(' + ($elm$core$String$fromInt(
								$elm$core$List$length(valueList)) + ')');
						} else {
							var name = maybeName.a;
							return name + ' …';
						}
					}());
			}
	}
};
var $elm$browser$Debugger$Expando$viewTinyRecord = function (record) {
	return $elm$core$Dict$isEmpty(record) ? _Utils_Tuple2(
		2,
		_List_fromArray(
			[
				$elm$html$Html$text('{}')
			])) : A3(
		$elm$browser$Debugger$Expando$viewTinyRecordHelp,
		0,
		'{ ',
		$elm$core$Dict$toList(record));
};
var $elm$browser$Debugger$Expando$viewTinyRecordHelp = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 2,
				_List_fromArray(
					[
						$elm$html$Html$text(' }')
					]));
		} else {
			var _v1 = entries.a;
			var field = _v1.a;
			var value = _v1.b;
			var rest = entries.b;
			var fieldLen = $elm$core$String$length(field);
			var _v2 = $elm$browser$Debugger$Expando$viewExtraTiny(value);
			var valueLen = _v2.a;
			var valueHtmls = _v2.b;
			var newLength = ((length + fieldLen) + valueLen) + 5;
			if (newLength > 60) {
				return _Utils_Tuple2(
					length + 4,
					_List_fromArray(
						[
							$elm$html$Html$text(', … }')
						]));
			} else {
				var _v3 = A3($elm$browser$Debugger$Expando$viewTinyRecordHelp, newLength, ', ', rest);
				var finalLength = _v3.a;
				var otherHtmls = _v3.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							A2(
								$elm$core$List$cons,
								$elm$html$Html$text(' = '),
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$span, _List_Nil, valueHtmls),
									otherHtmls)))));
			}
		}
	});
var $elm$browser$Debugger$Expando$view = F2(
	function (maybeKey, expando) {
		switch (expando.$) {
			case 'S':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$red]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Primitive':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$blue]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewSequence, maybeKey, seqType, isClosed, valueList);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return A3($elm$browser$Debugger$Expando$viewDictionary, maybeKey, isClosed, keyValuePairs);
			case 'Record':
				var isClosed = expando.a;
				var valueDict = expando.b;
				return A3($elm$browser$Debugger$Expando$viewRecord, maybeKey, isClosed, valueDict);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewConstructor, maybeKey, maybeName, isClosed, valueList);
		}
	});
var $elm$browser$Debugger$Expando$viewConstructor = F4(
	function (maybeKey, maybeName, isClosed, valueList) {
		var tinyArgs = A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $elm$core$Tuple$second, $elm$browser$Debugger$Expando$viewExtraTiny),
			valueList);
		var description = function () {
			var _v7 = _Utils_Tuple2(maybeName, tinyArgs);
			if (_v7.a.$ === 'Nothing') {
				if (!_v7.b.b) {
					var _v8 = _v7.a;
					return _List_fromArray(
						[
							$elm$html$Html$text('()')
						]);
				} else {
					var _v9 = _v7.a;
					var _v10 = _v7.b;
					var x = _v10.a;
					var xs = _v10.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text('( '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(', '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_fromArray(
									[
										$elm$html$Html$text(' )')
									]),
								xs)));
				}
			} else {
				if (!_v7.b.b) {
					var name = _v7.a.a;
					return _List_fromArray(
						[
							$elm$html$Html$text(name)
						]);
				} else {
					var name = _v7.a.a;
					var _v11 = _v7.b;
					var x = _v11.a;
					var xs = _v11.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text(name + ' '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(' '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_Nil,
								xs)));
				}
			}
		}();
		var _v4 = function () {
			if (!valueList.b) {
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					A2($elm$html$Html$div, _List_Nil, _List_Nil));
			} else {
				if (!valueList.b.b) {
					var entry = valueList.a;
					switch (entry.$) {
						case 'S':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Primitive':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Sequence':
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewSequenceOpen(subValueList)));
						case 'Dictionary':
							var keyValuePairs = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)));
						case 'Record':
							var record = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewRecordOpen(record)));
						default:
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewConstructorOpen(subValueList)));
					}
				} else {
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(isClosed),
						isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : $elm$browser$Debugger$Expando$viewConstructorOpen(valueList));
				}
			}
		}();
		var maybeIsClosed = _v4.a;
		var openHtml = _v4.b;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, maybeIsClosed, description)),
					openHtml
				]));
	});
var $elm$browser$Debugger$Expando$viewConstructorEntry = F2(
	function (index, value) {
		return A2(
			$elm$html$Html$map,
			A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, index),
			A2(
				$elm$browser$Debugger$Expando$view,
				$elm$core$Maybe$Just(
					$elm$core$String$fromInt(index)),
				value));
	});
var $elm$browser$Debugger$Expando$viewConstructorOpen = function (valueList) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, valueList));
};
var $elm$browser$Debugger$Expando$viewDictionary = F3(
	function (maybeKey, isClosed, keyValuePairs) {
		var starter = 'Dict(' + ($elm$core$String$fromInt(
			$elm$core$List$length(keyValuePairs)) + ')');
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)
				]));
	});
var $elm$browser$Debugger$Expando$viewDictionaryEntry = F2(
	function (index, _v2) {
		var key = _v2.a;
		var value = _v2.b;
		switch (key.$) {
			case 'S':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			case 'Primitive':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			default:
				return A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Key, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('key'),
								key)),
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('value'),
								value))
						]));
		}
	});
var $elm$browser$Debugger$Expando$viewDictionaryOpen = function (keyValuePairs) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewDictionaryEntry, keyValuePairs));
};
var $elm$browser$Debugger$Expando$viewRecord = F3(
	function (maybeKey, isClosed, record) {
		var _v1 = isClosed ? _Utils_Tuple3(
			$elm$browser$Debugger$Expando$viewTinyRecord(record).b,
			$elm$html$Html$text(''),
			$elm$html$Html$text('')) : _Utils_Tuple3(
			_List_fromArray(
				[
					$elm$html$Html$text('{')
				]),
			$elm$browser$Debugger$Expando$viewRecordOpen(record),
			A2(
				$elm$html$Html$div,
				$elm$browser$Debugger$Expando$leftPad(
					$elm$core$Maybe$Just(_Utils_Tuple0)),
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					])));
		var start = _v1.a;
		var middle = _v1.b;
		var end = _v1.c;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						start)),
					middle,
					end
				]));
	});
var $elm$browser$Debugger$Expando$viewRecordEntry = function (_v0) {
	var field = _v0.a;
	var value = _v0.b;
	return A2(
		$elm$html$Html$map,
		$elm$browser$Debugger$Expando$Field(field),
		A2(
			$elm$browser$Debugger$Expando$view,
			$elm$core$Maybe$Just(field),
			value));
};
var $elm$browser$Debugger$Expando$viewRecordOpen = function (record) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Expando$viewRecordEntry,
			$elm$core$Dict$toList(record)));
};
var $elm$browser$Debugger$Expando$viewSequence = F4(
	function (maybeKey, seqType, isClosed, valueList) {
		var starter = A2(
			$elm$browser$Debugger$Expando$seqTypeToString,
			$elm$core$List$length(valueList),
			seqType);
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewSequenceOpen(valueList)
				]));
	});
var $elm$browser$Debugger$Expando$viewSequenceOpen = function (values) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, values));
};
var $elm$browser$Debugger$Main$viewExpando = F3(
	function (expandoMsg, expandoModel, layout) {
		var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
		var _v0 = $elm$browser$Debugger$Main$toExpandoPercents(layout);
		var w = _v0.a;
		var h = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'block'),
					A2($elm$html$Html$Attributes$style, 'width', 'calc(' + (w + ' - 4em)')),
					A2($elm$html$Html$Attributes$style, 'height', 'calc(' + (h + ' - 4em)')),
					A2($elm$html$Html$Attributes$style, 'padding', '2em'),
					A2($elm$html$Html$Attributes$style, 'margin', '0'),
					A2($elm$html$Html$Attributes$style, 'overflow', 'auto'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', block),
					A2($elm$html$Html$Attributes$style, '-webkit-user-select', block),
					A2($elm$html$Html$Attributes$style, '-moz-user-select', block),
					A2($elm$html$Html$Attributes$style, '-ms-user-select', block),
					A2($elm$html$Html$Attributes$style, 'user-select', block)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
							A2($elm$html$Html$Attributes$style, 'padding', '0 0 1em 0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-- MESSAGE')
						])),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$TweakExpandoMsg,
					A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoMsg)),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
							A2($elm$html$Html$Attributes$style, 'padding', '1em 0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-- MODEL')
						])),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$TweakExpandoModel,
					A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoModel))
				]));
	});
var $elm$browser$Debugger$Main$Jump = function (a) {
	return {$: 'Jump', a: a};
};
var $elm$virtual_dom$VirtualDom$lazy = _VirtualDom_lazy;
var $elm$html$Html$Lazy$lazy = $elm$virtual_dom$VirtualDom$lazy;
var $elm$browser$Debugger$Main$toHistoryPercents = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return _Utils_Tuple2(
			$elm$browser$Debugger$Main$toPercent(x),
			'100%');
	} else {
		var y = layout.c;
		return _Utils_Tuple2(
			'100%',
			$elm$browser$Debugger$Main$toPercent(1 - y));
	}
};
var $elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var $elm$html$Html$Lazy$lazy3 = $elm$virtual_dom$VirtualDom$lazy3;
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$browser$Debugger$History$idForMessageIndex = function (index) {
	return 'msg-' + $elm$core$String$fromInt(index);
};
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$browser$Debugger$History$viewMessage = F3(
	function (currentIndex, index, msg) {
		var messageName = _Debugger_messageToString(msg);
		var className = _Utils_eq(currentIndex, index) ? 'elm-debugger-entry elm-debugger-entry-selected' : 'elm-debugger-entry';
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(
					$elm$browser$Debugger$History$idForMessageIndex(index)),
					$elm$html$Html$Attributes$class(className),
					$elm$html$Html$Events$onClick(index)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$title(messageName),
							$elm$html$Html$Attributes$class('elm-debugger-entry-content')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(messageName)
						])),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('elm-debugger-entry-index')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromInt(index))
						]))
				]));
	});
var $elm$browser$Debugger$History$consMsg = F3(
	function (currentIndex, msg, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		return _Utils_Tuple2(
			index + 1,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$elm$core$String$fromInt(index),
					A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewMessage, currentIndex, index, msg)),
				rest));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$browser$Debugger$History$maxSnapshotSize = 31;
var $elm$browser$Debugger$History$showMoreButton = function (numMessages) {
	var nextIndex = (numMessages - 1) - ($elm$browser$Debugger$History$maxSnapshotSize * 2);
	var labelText = 'View more messages';
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('elm-debugger-entry'),
				$elm$html$Html$Events$onClick(nextIndex)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$title(labelText),
						$elm$html$Html$Attributes$class('elm-debugger-entry-content')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(labelText)
					])),
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('elm-debugger-entry-index')
					]),
				_List_Nil)
			]));
};
var $elm$browser$Debugger$History$styles = A3(
	$elm$html$Html$node,
	'style',
	_List_Nil,
	_List_fromArray(
		[
			$elm$html$Html$text('\n\n.elm-debugger-entry {\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.elm-debugger-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.elm-debugger-entry-content {\n  width: calc(100% - 40px);\n  padding: 0 5px;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.elm-debugger-entry-index {\n  color: #666;\n  width: 40px;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n')
		]));
var $elm$core$Basics$ge = _Utils_ge;
var $elm$browser$Debugger$History$viewSnapshot = F3(
	function (selectedIndex, index, _v0) {
		var messages = _v0.messages;
		return A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_Nil,
			A3(
				$elm$core$Array$foldr,
				$elm$browser$Debugger$History$consMsg(selectedIndex),
				_Utils_Tuple2(index, _List_Nil),
				messages).b);
	});
var $elm$browser$Debugger$History$consSnapshot = F3(
	function (selectedIndex, snapshot, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		var nextIndex = index + $elm$core$Array$length(snapshot.messages);
		var selectedIndexHelp = ((_Utils_cmp(nextIndex, selectedIndex) > 0) && (_Utils_cmp(selectedIndex, index) > -1)) ? selectedIndex : (-1);
		return _Utils_Tuple2(
			nextIndex,
			A2(
				$elm$core$List$cons,
				A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewSnapshot, selectedIndexHelp, index, snapshot),
				rest));
	});
var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var $elm$core$Array$foldl = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldl,
			func,
			A3($elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var $elm$browser$Debugger$History$viewAllSnapshots = F3(
	function (selectedIndex, startIndex, snapshots) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A3(
				$elm$core$Array$foldl,
				$elm$browser$Debugger$History$consSnapshot(selectedIndex),
				_Utils_Tuple2(startIndex, _List_Nil),
				snapshots).b);
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					len - from,
					$elm$core$Array$shiftStep,
					$elm$core$Elm$JsArray$empty,
					A3(
						$elm$core$Elm$JsArray$slice,
						from - $elm$core$Array$tailIndex(len),
						$elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / $elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2($elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					$elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return $elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * $elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							$elm$core$Elm$JsArray$slice,
							firstSlice,
							$elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						$elm$core$Array$builderToArray,
						true,
						A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var sub = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _v0.a;
				return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
			}
		}
	});
var $elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!$elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_v0.$ === 'SubTree') {
					var sub = _v0.a;
					var $temp$oldShift = oldShift - $elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = $elm$core$Array$bitMask & (endIdx >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_v0.$ === 'SubTree') {
			var sub = _v0.a;
			var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
			return (!$elm$core$Elm$JsArray$length(newSub)) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				$elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				$elm$core$Array$SubTree(newSub),
				A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var $elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = $elm$core$Array$tailIndex(end);
				var depth = $elm$core$Basics$floor(
					A2(
						$elm$core$Basics$logBase,
						$elm$core$Array$branchFactor,
						A2($elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						$elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3($elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var $elm$core$Array$translateIndex = F2(
	function (index, _v0) {
		var len = _v0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var $elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2($elm$core$Array$translateIndex, to, array);
		var correctFrom = A2($elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? $elm$core$Array$empty : A2(
			$elm$core$Array$sliceLeft,
			correctFrom,
			A2($elm$core$Array$sliceRight, correctTo, array));
	});
var $elm$browser$Debugger$History$viewRecentSnapshots = F3(
	function (selectedIndex, recentMessagesNum, snapshots) {
		var messagesToFill = $elm$browser$Debugger$History$maxSnapshotSize - recentMessagesNum;
		var arrayLength = $elm$core$Array$length(snapshots);
		var snapshotsToRender = function () {
			var _v0 = _Utils_Tuple2(
				A2($elm$core$Array$get, arrayLength - 2, snapshots),
				A2($elm$core$Array$get, arrayLength - 1, snapshots));
			if ((_v0.a.$ === 'Just') && (_v0.b.$ === 'Just')) {
				var fillerSnapshot = _v0.a.a;
				var recentSnapshot = _v0.b.a;
				return $elm$core$Array$fromList(
					_List_fromArray(
						[
							{
							messages: A3($elm$core$Array$slice, 0, messagesToFill, fillerSnapshot.messages),
							model: fillerSnapshot.model
						},
							recentSnapshot
						]));
			} else {
				return snapshots;
			}
		}();
		var startingIndex = ((arrayLength * $elm$browser$Debugger$History$maxSnapshotSize) - $elm$browser$Debugger$History$maxSnapshotSize) - messagesToFill;
		return A3($elm$browser$Debugger$History$viewAllSnapshots, selectedIndex, startingIndex, snapshotsToRender);
	});
var $elm$browser$Debugger$History$view = F2(
	function (maybeIndex, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var recentMessageStartIndex = numMessages - recent.numMessages;
		var index = A2($elm$core$Maybe$withDefault, -1, maybeIndex);
		var newStuff = A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_Nil,
			A3(
				$elm$core$List$foldr,
				$elm$browser$Debugger$History$consMsg(index),
				_Utils_Tuple2(recentMessageStartIndex, _List_Nil),
				recent.messages).b);
		var onlyRenderRecentMessages = (!_Utils_eq(index, -1)) || ($elm$core$Array$length(snapshots) < 2);
		var oldStuff = onlyRenderRecentMessages ? A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewAllSnapshots, index, 0, snapshots) : A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewRecentSnapshots, index, recent.numMessages, snapshots);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-sidebar'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
					A2($elm$html$Html$Attributes$style, 'height', 'calc(100% - 72px)')
				]),
			A2(
				$elm$core$List$cons,
				$elm$browser$Debugger$History$styles,
				A2(
					$elm$core$List$cons,
					newStuff,
					A2(
						$elm$core$List$cons,
						oldStuff,
						onlyRenderRecentMessages ? _List_Nil : _List_fromArray(
							[
								$elm$browser$Debugger$History$showMoreButton(numMessages)
							])))));
	});
var $elm$browser$Debugger$Main$SwapLayout = {$: 'SwapLayout'};
var $elm$browser$Debugger$Main$toHistoryIcon = function (layout) {
	if (layout.$ === 'Horizontal') {
		return 'M13 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M13 3h-10a1 1 0 0 0-1 1v5h12v-5a1 1 0 0 0-1-1z M14 10h-12v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z';
	} else {
		return 'M0 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3z M2 4v8a1 1 0 0 0 1 1h2v-10h-2a1 1 0 0 0-1 1z M6 3v10h7a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z';
	}
};
var $elm$browser$Debugger$Main$icon = function (path) {
	return A4(
		$elm$virtual_dom$VirtualDom$nodeNS,
		'http://www.w3.org/2000/svg',
		'svg',
		_List_fromArray(
			[
				A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '0 0 16 16'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'width', '16px'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'height', '16px')
			]),
		_List_fromArray(
			[
				A4(
				$elm$virtual_dom$VirtualDom$nodeNS,
				'http://www.w3.org/2000/svg',
				'path',
				_List_fromArray(
					[
						A2($elm$virtual_dom$VirtualDom$attribute, 'd', path)
					]),
				_List_Nil)
			]));
};
var $elm$browser$Debugger$Main$viewHistoryButton = F3(
	function (label, msg, path) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'background', 'none'),
					A2($elm$html$Html$Attributes$style, 'border', 'none'),
					A2($elm$html$Html$Attributes$style, 'color', 'inherit'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					$elm$html$Html$Events$onClick(msg)
				]),
			_List_fromArray(
				[
					$elm$browser$Debugger$Main$icon(path),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding-left', '6px')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						]))
				]));
	});
var $elm$browser$Debugger$Main$viewHistoryOptions = function (layout) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'width', '100%'),
				A2($elm$html$Html$Attributes$style, 'height', '36px'),
				A2($elm$html$Html$Attributes$style, 'display', 'flex'),
				A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
				A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
				A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		_List_fromArray(
			[
				A3(
				$elm$browser$Debugger$Main$viewHistoryButton,
				'Swap Layout',
				$elm$browser$Debugger$Main$SwapLayout,
				$elm$browser$Debugger$Main$toHistoryIcon(layout)),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', 'flex'),
						A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
						A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
						A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between')
					]),
				_List_fromArray(
					[
						A3($elm$browser$Debugger$Main$viewHistoryButton, 'Import', $elm$browser$Debugger$Main$Import, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M10 2a1 1 0 0 0 -2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-3.586l4.293-4.293a1 1 0 0 0-1.414-1.414l-4.293 4.293z'),
						A3($elm$browser$Debugger$Main$viewHistoryButton, 'Export', $elm$browser$Debugger$Main$Export, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M9 3a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586l-5.293 5.293 a1 1 0 0 1-1.414-1.414l5.293 -5.293z')
					]))
			]));
};
var $elm$browser$Debugger$Main$SliderJump = function (a) {
	return {$: 'SliderJump', a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$browser$Debugger$Main$isPlaying = function (maybeIndex) {
	if (maybeIndex.$ === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$core$String$toInt = _String_toInt;
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $elm$browser$Debugger$Main$viewPlayButton = function (playing) {
	return A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'background', '#1293D8'),
				A2($elm$html$Html$Attributes$style, 'border', 'none'),
				A2($elm$html$Html$Attributes$style, 'color', 'white'),
				A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
				A2($elm$html$Html$Attributes$style, 'width', '36px'),
				A2($elm$html$Html$Attributes$style, 'height', '36px'),
				$elm$html$Html$Events$onClick($elm$browser$Debugger$Main$Resume)
			]),
		_List_fromArray(
			[
				playing ? $elm$browser$Debugger$Main$icon('M2 2h4v12h-4v-12z M10 2h4v12h-4v-12z') : $elm$browser$Debugger$Main$icon('M2 2l12 7l-12 7z')
			]));
};
var $elm$browser$Debugger$Main$viewHistorySlider = F2(
	function (history, maybeIndex) {
		var lastIndex = $elm$browser$Debugger$History$size(history) - 1;
		var selectedIndex = A2($elm$core$Maybe$withDefault, lastIndex, maybeIndex);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '36px'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$Lazy$lazy,
					$elm$browser$Debugger$Main$viewPlayButton,
					$elm$browser$Debugger$Main$isPlaying(maybeIndex)),
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('range'),
							A2($elm$html$Html$Attributes$style, 'width', 'calc(100% - 56px)'),
							A2($elm$html$Html$Attributes$style, 'height', '36px'),
							A2($elm$html$Html$Attributes$style, 'margin', '0 10px'),
							$elm$html$Html$Attributes$min('0'),
							$elm$html$Html$Attributes$max(
							$elm$core$String$fromInt(lastIndex)),
							$elm$html$Html$Attributes$value(
							$elm$core$String$fromInt(selectedIndex)),
							$elm$html$Html$Events$onInput(
							A2(
								$elm$core$Basics$composeR,
								$elm$core$String$toInt,
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Maybe$withDefault(lastIndex),
									$elm$browser$Debugger$Main$SliderJump)))
						]),
					_List_Nil)
				]));
	});
var $elm$browser$Debugger$Main$viewHistory = F3(
	function (maybeIndex, history, layout) {
		var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
		var _v0 = $elm$browser$Debugger$Main$toHistoryPercents(layout);
		var w = _v0.a;
		var h = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'width', w),
					A2($elm$html$Html$Attributes$style, 'height', h),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'column'),
					A2($elm$html$Html$Attributes$style, 'color', '#DDDDDD'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', block),
					A2($elm$html$Html$Attributes$style, 'user-select', block)
				]),
			_List_fromArray(
				[
					A2($elm$browser$Debugger$Main$viewHistorySlider, history, maybeIndex),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$Jump,
					A2($elm$browser$Debugger$History$view, maybeIndex, history)),
					A2($elm$html$Html$Lazy$lazy, $elm$browser$Debugger$Main$viewHistoryOptions, layout)
				]));
	});
var $elm$browser$Debugger$Main$popoutView = function (model) {
	var maybeIndex = function () {
		var _v0 = model.state;
		if (_v0.$ === 'Running') {
			return $elm$core$Maybe$Nothing;
		} else {
			var index = _v0.a;
			return $elm$core$Maybe$Just(index);
		}
	}();
	var historyToRender = $elm$browser$Debugger$Main$cachedHistory(model);
	return A3(
		$elm$html$Html$node,
		'body',
		_Utils_ap(
			$elm$browser$Debugger$Main$toDragListeners(model.layout),
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin', '0'),
					A2($elm$html$Html$Attributes$style, 'padding', '0'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2(
					$elm$html$Html$Attributes$style,
					'flex-direction',
					$elm$browser$Debugger$Main$toFlexDirection(model.layout))
				])),
		_List_fromArray(
			[
				A3($elm$browser$Debugger$Main$viewHistory, maybeIndex, historyToRender, model.layout),
				$elm$browser$Debugger$Main$viewDragZone(model.layout),
				A3($elm$browser$Debugger$Main$viewExpando, model.expandoMsg, model.expandoModel, model.layout)
			]));
};
var $elm$browser$Debugger$Overlay$BlockAll = {$: 'BlockAll'};
var $elm$browser$Debugger$Overlay$toBlockerType = F2(
	function (isPaused, state) {
		switch (state.$) {
			case 'None':
				return isPaused ? $elm$browser$Debugger$Overlay$BlockAll : $elm$browser$Debugger$Overlay$BlockNone;
			case 'BadMetadata':
				return $elm$browser$Debugger$Overlay$BlockMost;
			case 'BadImport':
				return $elm$browser$Debugger$Overlay$BlockMost;
			default:
				return $elm$browser$Debugger$Overlay$BlockMost;
		}
	});
var $elm$browser$Debugger$Main$toBlockerType = function (model) {
	return A2(
		$elm$browser$Debugger$Overlay$toBlockerType,
		$elm$browser$Debugger$Main$isPaused(model.state),
		model.overlay);
};
var $elm$browser$Debugger$Main$Horizontal = F3(
	function (a, b, c) {
		return {$: 'Horizontal', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Main$Running = function (a) {
	return {$: 'Running', a: a};
};
var $elm$browser$Debugger$Main$Static = {$: 'Static'};
var $elm$browser$Debugger$Metadata$Error = F2(
	function (message, problems) {
		return {message: message, problems: problems};
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$browser$Debugger$Metadata$Metadata = F2(
	function (versions, types) {
		return {types: types, versions: versions};
	});
var $elm$browser$Debugger$Metadata$Types = F3(
	function (message, aliases, unions) {
		return {aliases: aliases, message: message, unions: unions};
	});
var $elm$browser$Debugger$Metadata$Alias = F2(
	function (args, tipe) {
		return {args: args, tipe: tipe};
	});
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$browser$Debugger$Metadata$decodeAlias = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Alias,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$Union = F2(
	function (args, tags) {
		return {args: args, tags: tags};
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm$browser$Debugger$Metadata$decodeUnion = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Union,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'tags',
		$elm$json$Json$Decode$dict(
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))));
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$browser$Debugger$Metadata$decodeTypes = A4(
	$elm$json$Json$Decode$map3,
	$elm$browser$Debugger$Metadata$Types,
	A2($elm$json$Json$Decode$field, 'message', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'aliases',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeAlias)),
	A2(
		$elm$json$Json$Decode$field,
		'unions',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeUnion)));
var $elm$browser$Debugger$Metadata$Versions = function (elm) {
	return {elm: elm};
};
var $elm$browser$Debugger$Metadata$decodeVersions = A2(
	$elm$json$Json$Decode$map,
	$elm$browser$Debugger$Metadata$Versions,
	A2($elm$json$Json$Decode$field, 'elm', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$decoder = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Metadata,
	A2($elm$json$Json$Decode$field, 'versions', $elm$browser$Debugger$Metadata$decodeVersions),
	A2($elm$json$Json$Decode$field, 'types', $elm$browser$Debugger$Metadata$decodeTypes));
var $elm$browser$Debugger$Metadata$ProblemType = F2(
	function (name, problems) {
		return {name: name, problems: problems};
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$contains = _String_contains;
var $elm$browser$Debugger$Metadata$hasProblem = F2(
	function (tipe, _v0) {
		var problem = _v0.a;
		var token = _v0.b;
		return A2($elm$core$String$contains, token, tipe) ? $elm$core$Maybe$Just(problem) : $elm$core$Maybe$Nothing;
	});
var $elm$browser$Debugger$Metadata$Decoder = {$: 'Decoder'};
var $elm$browser$Debugger$Metadata$Function = {$: 'Function'};
var $elm$browser$Debugger$Metadata$Process = {$: 'Process'};
var $elm$browser$Debugger$Metadata$Program = {$: 'Program'};
var $elm$browser$Debugger$Metadata$Request = {$: 'Request'};
var $elm$browser$Debugger$Metadata$Socket = {$: 'Socket'};
var $elm$browser$Debugger$Metadata$Task = {$: 'Task'};
var $elm$browser$Debugger$Metadata$VirtualDom = {$: 'VirtualDom'};
var $elm$browser$Debugger$Metadata$problemTable = _List_fromArray(
	[
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Function, '->'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Decoder, 'Json.Decode.Decoder'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Task, 'Task.Task'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Process, 'Process.Id'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Socket, 'WebSocket.LowLevel.WebSocket'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Request, 'Http.Request'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Program, 'Platform.Program'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Node'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Attribute')
	]);
var $elm$browser$Debugger$Metadata$findProblems = function (tipe) {
	return A2(
		$elm$core$List$filterMap,
		$elm$browser$Debugger$Metadata$hasProblem(tipe),
		$elm$browser$Debugger$Metadata$problemTable);
};
var $elm$browser$Debugger$Metadata$collectBadAliases = F3(
	function (name, _v0, list) {
		var tipe = _v0.tipe;
		var _v1 = $elm$browser$Debugger$Metadata$findProblems(tipe);
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $elm$browser$Debugger$Metadata$collectBadUnions = F3(
	function (name, _v0, list) {
		var tags = _v0.tags;
		var _v1 = A2(
			$elm$core$List$concatMap,
			$elm$browser$Debugger$Metadata$findProblems,
			$elm$core$List$concat(
				$elm$core$Dict$values(tags)));
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$browser$Debugger$Metadata$isPortable = function (_v0) {
	var types = _v0.types;
	var badAliases = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadAliases, _List_Nil, types.aliases);
	var _v1 = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadUnions, badAliases, types.unions);
	if (!_v1.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var problems = _v1;
		return $elm$core$Maybe$Just(
			A2($elm$browser$Debugger$Metadata$Error, types.message, problems));
	}
};
var $elm$browser$Debugger$Metadata$decode = function (value) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $elm$browser$Debugger$Metadata$decoder, value);
	if (_v0.$ === 'Err') {
		return $elm$core$Result$Err(
			A2($elm$browser$Debugger$Metadata$Error, 'The compiler is generating bad metadata. This is a compiler bug!', _List_Nil));
	} else {
		var metadata = _v0.a;
		var _v1 = $elm$browser$Debugger$Metadata$isPortable(metadata);
		if (_v1.$ === 'Nothing') {
			return $elm$core$Result$Ok(metadata);
		} else {
			var error = _v1.a;
			return $elm$core$Result$Err(error);
		}
	}
};
var $elm$browser$Debugger$History$History = F3(
	function (snapshots, recent, numMessages) {
		return {numMessages: numMessages, recent: recent, snapshots: snapshots};
	});
var $elm$browser$Debugger$History$RecentHistory = F3(
	function (model, messages, numMessages) {
		return {messages: messages, model: model, numMessages: numMessages};
	});
var $elm$browser$Debugger$History$empty = function (model) {
	return A3(
		$elm$browser$Debugger$History$History,
		$elm$core$Array$empty,
		A3($elm$browser$Debugger$History$RecentHistory, model, _List_Nil, 0),
		0);
};
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $elm$browser$Debugger$Expando$initHelp = F2(
	function (isOuter, expando) {
		switch (expando.$) {
			case 'S':
				return expando;
			case 'Primitive':
				return expando;
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var items = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Sequence,
					seqType,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						items)) : (($elm$core$List$length(items) <= 8) ? A3($elm$browser$Debugger$Expando$Sequence, seqType, false, items) : expando);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Dictionary,
					false,
					A2(
						$elm$core$List$map,
						function (_v1) {
							var k = _v1.a;
							var v = _v1.b;
							return _Utils_Tuple2(
								k,
								A2($elm$browser$Debugger$Expando$initHelp, false, v));
						},
						keyValuePairs)) : (($elm$core$List$length(keyValuePairs) <= 8) ? A2($elm$browser$Debugger$Expando$Dictionary, false, keyValuePairs) : expando);
			case 'Record':
				var isClosed = expando.a;
				var entries = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Record,
					false,
					A2(
						$elm$core$Dict$map,
						F2(
							function (_v2, v) {
								return A2($elm$browser$Debugger$Expando$initHelp, false, v);
							}),
						entries)) : (($elm$core$Dict$size(entries) <= 4) ? A2($elm$browser$Debugger$Expando$Record, false, entries) : expando);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var args = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Constructor,
					maybeName,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						args)) : (($elm$core$List$length(args) <= 4) ? A3($elm$browser$Debugger$Expando$Constructor, maybeName, false, args) : expando);
		}
	});
var $elm$browser$Debugger$Expando$init = function (value) {
	return A2(
		$elm$browser$Debugger$Expando$initHelp,
		true,
		_Debugger_init(value));
};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$browser$Debugger$Overlay$None = {$: 'None'};
var $elm$browser$Debugger$Overlay$none = $elm$browser$Debugger$Overlay$None;
var $elm$browser$Debugger$Main$wrapInit = F4(
	function (metadata, popout, init, flags) {
		var _v0 = init(flags);
		var userModel = _v0.a;
		var userCommands = _v0.b;
		return _Utils_Tuple2(
			{
				expandoModel: $elm$browser$Debugger$Expando$init(userModel),
				expandoMsg: $elm$browser$Debugger$Expando$init(_Utils_Tuple0),
				history: $elm$browser$Debugger$History$empty(userModel),
				layout: A3($elm$browser$Debugger$Main$Horizontal, $elm$browser$Debugger$Main$Static, 0.3, 0.5),
				metadata: $elm$browser$Debugger$Metadata$decode(metadata),
				overlay: $elm$browser$Debugger$Overlay$none,
				popout: popout,
				state: $elm$browser$Debugger$Main$Running(userModel)
			},
			A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCommands));
	});
var $elm$browser$Debugger$Main$getLatestModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.c;
		return model;
	}
};
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$browser$Debugger$Main$wrapSubs = F2(
	function (subscriptions, model) {
		return A2(
			$elm$core$Platform$Sub$map,
			$elm$browser$Debugger$Main$UserMsg,
			subscriptions(
				$elm$browser$Debugger$Main$getLatestModel(model.state)));
	});
var $elm$browser$Debugger$Main$Moving = {$: 'Moving'};
var $elm$browser$Debugger$Main$Paused = F5(
	function (a, b, c, d, e) {
		return {$: 'Paused', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$browser$Debugger$History$Snapshot = F2(
	function (model, messages) {
		return {messages: messages, model: model};
	});
var $elm$browser$Debugger$History$addRecent = F3(
	function (msg, newModel, _v0) {
		var model = _v0.model;
		var messages = _v0.messages;
		var numMessages = _v0.numMessages;
		return _Utils_eq(numMessages, $elm$browser$Debugger$History$maxSnapshotSize) ? _Utils_Tuple2(
			$elm$core$Maybe$Just(
				A2(
					$elm$browser$Debugger$History$Snapshot,
					model,
					$elm$core$Array$fromList(messages))),
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				newModel,
				_List_fromArray(
					[msg]),
				1)) : _Utils_Tuple2(
			$elm$core$Maybe$Nothing,
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				model,
				A2($elm$core$List$cons, msg, messages),
				numMessages + 1));
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $elm$browser$Debugger$History$add = F3(
	function (msg, model, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var _v1 = A3($elm$browser$Debugger$History$addRecent, msg, model, recent);
		if (_v1.a.$ === 'Just') {
			var snapshot = _v1.a.a;
			var newRecent = _v1.b;
			return A3(
				$elm$browser$Debugger$History$History,
				A2($elm$core$Array$push, snapshot, snapshots),
				newRecent,
				numMessages + 1);
		} else {
			var _v2 = _v1.a;
			var newRecent = _v1.b;
			return A3($elm$browser$Debugger$History$History, snapshots, newRecent, numMessages + 1);
		}
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$browser$Debugger$Overlay$BadImport = function (a) {
	return {$: 'BadImport', a: a};
};
var $elm$browser$Debugger$Overlay$RiskyImport = F2(
	function (a, b) {
		return {$: 'RiskyImport', a: a, b: b};
	});
var $elm$browser$Debugger$Report$VersionChanged = F2(
	function (a, b) {
		return {$: 'VersionChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$MessageChanged = F2(
	function (a, b) {
		return {$: 'MessageChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$SomethingChanged = function (a) {
	return {$: 'SomethingChanged', a: a};
};
var $elm$browser$Debugger$Report$AliasChange = function (a) {
	return {$: 'AliasChange', a: a};
};
var $elm$browser$Debugger$Metadata$checkAlias = F4(
	function (name, old, _new, changes) {
		return (_Utils_eq(old.tipe, _new.tipe) && _Utils_eq(old.args, _new.args)) ? changes : A2(
			$elm$core$List$cons,
			$elm$browser$Debugger$Report$AliasChange(name),
			changes);
	});
var $elm$browser$Debugger$Report$UnionChange = F2(
	function (a, b) {
		return {$: 'UnionChange', a: a, b: b};
	});
var $elm$browser$Debugger$Metadata$addTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				added: A2($elm$core$List$cons, tag, changes.added)
			});
	});
var $elm$browser$Debugger$Metadata$checkTag = F4(
	function (tag, old, _new, changes) {
		return _Utils_eq(old, _new) ? changes : _Utils_update(
			changes,
			{
				changed: A2($elm$core$List$cons, tag, changes.changed)
			});
	});
var $elm$browser$Debugger$Report$TagChanges = F4(
	function (removed, changed, added, argsMatch) {
		return {added: added, argsMatch: argsMatch, changed: changed, removed: removed};
	});
var $elm$browser$Debugger$Report$emptyTagChanges = function (argsMatch) {
	return A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, argsMatch);
};
var $elm$browser$Debugger$Report$hasTagChanges = function (tagChanges) {
	return _Utils_eq(
		tagChanges,
		A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, true));
};
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Debugger$Metadata$removeTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				removed: A2($elm$core$List$cons, tag, changes.removed)
			});
	});
var $elm$browser$Debugger$Metadata$checkUnion = F4(
	function (name, old, _new, changes) {
		var tagChanges = A6(
			$elm$core$Dict$merge,
			$elm$browser$Debugger$Metadata$removeTag,
			$elm$browser$Debugger$Metadata$checkTag,
			$elm$browser$Debugger$Metadata$addTag,
			old.tags,
			_new.tags,
			$elm$browser$Debugger$Report$emptyTagChanges(
				_Utils_eq(old.args, _new.args)));
		return $elm$browser$Debugger$Report$hasTagChanges(tagChanges) ? changes : A2(
			$elm$core$List$cons,
			A2($elm$browser$Debugger$Report$UnionChange, name, tagChanges),
			changes);
	});
var $elm$browser$Debugger$Metadata$ignore = F3(
	function (key, value, report) {
		return report;
	});
var $elm$browser$Debugger$Metadata$checkTypes = F2(
	function (old, _new) {
		return (!_Utils_eq(old.message, _new.message)) ? A2($elm$browser$Debugger$Report$MessageChanged, old.message, _new.message) : $elm$browser$Debugger$Report$SomethingChanged(
			A6(
				$elm$core$Dict$merge,
				$elm$browser$Debugger$Metadata$ignore,
				$elm$browser$Debugger$Metadata$checkUnion,
				$elm$browser$Debugger$Metadata$ignore,
				old.unions,
				_new.unions,
				A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$ignore, $elm$browser$Debugger$Metadata$checkAlias, $elm$browser$Debugger$Metadata$ignore, old.aliases, _new.aliases, _List_Nil)));
	});
var $elm$browser$Debugger$Metadata$check = F2(
	function (old, _new) {
		return (!_Utils_eq(old.versions.elm, _new.versions.elm)) ? A2($elm$browser$Debugger$Report$VersionChanged, old.versions.elm, _new.versions.elm) : A2($elm$browser$Debugger$Metadata$checkTypes, old.types, _new.types);
	});
var $elm$browser$Debugger$Report$CorruptHistory = {$: 'CorruptHistory'};
var $elm$browser$Debugger$Overlay$corruptImport = $elm$browser$Debugger$Overlay$BadImport($elm$browser$Debugger$Report$CorruptHistory);
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$browser$Debugger$Report$Fine = {$: 'Fine'};
var $elm$browser$Debugger$Report$Impossible = {$: 'Impossible'};
var $elm$browser$Debugger$Report$Risky = {$: 'Risky'};
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Report$some = function (list) {
	return !$elm$core$List$isEmpty(list);
};
var $elm$browser$Debugger$Report$evaluateChange = function (change) {
	if (change.$ === 'AliasChange') {
		return $elm$browser$Debugger$Report$Impossible;
	} else {
		var removed = change.b.removed;
		var changed = change.b.changed;
		var added = change.b.added;
		var argsMatch = change.b.argsMatch;
		return ((!argsMatch) || ($elm$browser$Debugger$Report$some(changed) || $elm$browser$Debugger$Report$some(removed))) ? $elm$browser$Debugger$Report$Impossible : ($elm$browser$Debugger$Report$some(added) ? $elm$browser$Debugger$Report$Risky : $elm$browser$Debugger$Report$Fine);
	}
};
var $elm$browser$Debugger$Report$worstCase = F2(
	function (status, statusList) {
		worstCase:
		while (true) {
			if (!statusList.b) {
				return status;
			} else {
				switch (statusList.a.$) {
					case 'Impossible':
						var _v1 = statusList.a;
						return $elm$browser$Debugger$Report$Impossible;
					case 'Risky':
						var _v2 = statusList.a;
						var rest = statusList.b;
						var $temp$status = $elm$browser$Debugger$Report$Risky,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
					default:
						var _v3 = statusList.a;
						var rest = statusList.b;
						var $temp$status = status,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
				}
			}
		}
	});
var $elm$browser$Debugger$Report$evaluate = function (report) {
	switch (report.$) {
		case 'CorruptHistory':
			return $elm$browser$Debugger$Report$Impossible;
		case 'VersionChanged':
			return $elm$browser$Debugger$Report$Impossible;
		case 'MessageChanged':
			return $elm$browser$Debugger$Report$Impossible;
		default:
			var changes = report.a;
			return A2(
				$elm$browser$Debugger$Report$worstCase,
				$elm$browser$Debugger$Report$Fine,
				A2($elm$core$List$map, $elm$browser$Debugger$Report$evaluateChange, changes));
	}
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $elm$browser$Debugger$Overlay$uploadDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (x, y) {
			return _Utils_Tuple2(x, y);
		}),
	A2($elm$json$Json$Decode$field, 'metadata', $elm$browser$Debugger$Metadata$decoder),
	A2($elm$json$Json$Decode$field, 'history', $elm$json$Json$Decode$value));
var $elm$browser$Debugger$Overlay$assessImport = F2(
	function (metadata, jsonString) {
		var _v0 = A2($elm$json$Json$Decode$decodeString, $elm$browser$Debugger$Overlay$uploadDecoder, jsonString);
		if (_v0.$ === 'Err') {
			return $elm$core$Result$Err($elm$browser$Debugger$Overlay$corruptImport);
		} else {
			var _v1 = _v0.a;
			var foreignMetadata = _v1.a;
			var rawHistory = _v1.b;
			var report = A2($elm$browser$Debugger$Metadata$check, foreignMetadata, metadata);
			var _v2 = $elm$browser$Debugger$Report$evaluate(report);
			switch (_v2.$) {
				case 'Impossible':
					return $elm$core$Result$Err(
						$elm$browser$Debugger$Overlay$BadImport(report));
				case 'Risky':
					return $elm$core$Result$Err(
						A2($elm$browser$Debugger$Overlay$RiskyImport, report, rawHistory));
				default:
					return $elm$core$Result$Ok(rawHistory);
			}
		}
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$browser$Debugger$Overlay$close = F2(
	function (msg, state) {
		switch (state.$) {
			case 'None':
				return $elm$core$Maybe$Nothing;
			case 'BadMetadata':
				return $elm$core$Maybe$Nothing;
			case 'BadImport':
				return $elm$core$Maybe$Nothing;
			default:
				var rawHistory = state.b;
				if (msg.$ === 'Cancel') {
					return $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Just(rawHistory);
				}
		}
	});
var $elm$browser$Debugger$History$elmToJs = A2($elm$core$Basics$composeR, _Json_wrap, _Debugger_unsafeCoerce);
var $elm$browser$Debugger$History$encodeHelp = F2(
	function (snapshot, allMessages) {
		return A3($elm$core$Array$foldl, $elm$core$List$cons, allMessages, snapshot.messages);
	});
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$browser$Debugger$History$encode = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	return A2(
		$elm$json$Json$Encode$list,
		$elm$browser$Debugger$History$elmToJs,
		A3(
			$elm$core$Array$foldr,
			$elm$browser$Debugger$History$encodeHelp,
			$elm$core$List$reverse(recent.messages),
			snapshots));
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$browser$Debugger$Metadata$encodeAlias = function (_v0) {
	var args = _v0.args;
	var tipe = _v0.tipe;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(tipe))
			]));
};
var $elm$browser$Debugger$Metadata$encodeDict = F2(
	function (f, dict) {
		return $elm$json$Json$Encode$object(
			$elm$core$Dict$toList(
				A2(
					$elm$core$Dict$map,
					F2(
						function (key, value) {
							return f(value);
						}),
					dict)));
	});
var $elm$browser$Debugger$Metadata$encodeUnion = function (_v0) {
	var args = _v0.args;
	var tags = _v0.tags;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'tags',
				A2(
					$elm$browser$Debugger$Metadata$encodeDict,
					$elm$json$Json$Encode$list($elm$json$Json$Encode$string),
					tags))
			]));
};
var $elm$browser$Debugger$Metadata$encodeTypes = function (_v0) {
	var message = _v0.message;
	var unions = _v0.unions;
	var aliases = _v0.aliases;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'message',
				$elm$json$Json$Encode$string(message)),
				_Utils_Tuple2(
				'aliases',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeAlias, aliases)),
				_Utils_Tuple2(
				'unions',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeUnion, unions))
			]));
};
var $elm$browser$Debugger$Metadata$encodeVersions = function (_v0) {
	var elm = _v0.elm;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'elm',
				$elm$json$Json$Encode$string(elm))
			]));
};
var $elm$browser$Debugger$Metadata$encode = function (_v0) {
	var versions = _v0.versions;
	var types = _v0.types;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'versions',
				$elm$browser$Debugger$Metadata$encodeVersions(versions)),
				_Utils_Tuple2(
				'types',
				$elm$browser$Debugger$Metadata$encodeTypes(types))
			]));
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Debugger$Main$download = F2(
	function (metadata, history) {
		var historyLength = $elm$browser$Debugger$History$size(history);
		return A2(
			$elm$core$Task$perform,
			function (_v0) {
				return $elm$browser$Debugger$Main$NoOp;
			},
			A2(
				_Debugger_download,
				historyLength,
				_Json_unwrap(
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'metadata',
								$elm$browser$Debugger$Metadata$encode(metadata)),
								_Utils_Tuple2(
								'history',
								$elm$browser$Debugger$History$encode(history))
							])))));
	});
var $elm$browser$Debugger$Main$Vertical = F3(
	function (a, b, c) {
		return {$: 'Vertical', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Main$drag = F2(
	function (info, layout) {
		if (layout.$ === 'Horizontal') {
			var status = layout.a;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Horizontal, status, info.x / info.width, y);
		} else {
			var status = layout.a;
			var x = layout.b;
			return A3($elm$browser$Debugger$Main$Vertical, status, x, info.y / info.height);
		}
	});
var $elm$browser$Debugger$History$Stepping = F2(
	function (a, b) {
		return {$: 'Stepping', a: a, b: b};
	});
var $elm$browser$Debugger$History$Done = F2(
	function (a, b) {
		return {$: 'Done', a: a, b: b};
	});
var $elm$browser$Debugger$History$getHelp = F3(
	function (update, msg, getResult) {
		if (getResult.$ === 'Done') {
			return getResult;
		} else {
			var n = getResult.a;
			var model = getResult.b;
			return (!n) ? A2(
				$elm$browser$Debugger$History$Done,
				msg,
				A2(update, msg, model).a) : A2(
				$elm$browser$Debugger$History$Stepping,
				n - 1,
				A2(update, msg, model).a);
		}
	});
var $elm$browser$Debugger$History$undone = function (getResult) {
	undone:
	while (true) {
		if (getResult.$ === 'Done') {
			var msg = getResult.a;
			var model = getResult.b;
			return _Utils_Tuple2(model, msg);
		} else {
			var $temp$getResult = getResult;
			getResult = $temp$getResult;
			continue undone;
		}
	}
};
var $elm$browser$Debugger$History$get = F3(
	function (update, index, history) {
		get:
		while (true) {
			var recent = history.recent;
			var snapshotMax = history.numMessages - recent.numMessages;
			if (_Utils_cmp(index, snapshotMax) > -1) {
				return $elm$browser$Debugger$History$undone(
					A3(
						$elm$core$List$foldr,
						$elm$browser$Debugger$History$getHelp(update),
						A2($elm$browser$Debugger$History$Stepping, index - snapshotMax, recent.model),
						recent.messages));
			} else {
				var _v0 = A2($elm$core$Array$get, (index / $elm$browser$Debugger$History$maxSnapshotSize) | 0, history.snapshots);
				if (_v0.$ === 'Nothing') {
					var $temp$update = update,
						$temp$index = index,
						$temp$history = history;
					update = $temp$update;
					index = $temp$index;
					history = $temp$history;
					continue get;
				} else {
					var model = _v0.a.model;
					var messages = _v0.a.messages;
					return $elm$browser$Debugger$History$undone(
						A3(
							$elm$core$Array$foldr,
							$elm$browser$Debugger$History$getHelp(update),
							A2($elm$browser$Debugger$History$Stepping, index % $elm$browser$Debugger$History$maxSnapshotSize, model),
							messages));
				}
			}
		}
	});
var $elm$browser$Debugger$History$getRecentMsg = function (history) {
	getRecentMsg:
	while (true) {
		var _v0 = history.recent.messages;
		if (!_v0.b) {
			var $temp$history = history;
			history = $temp$history;
			continue getRecentMsg;
		} else {
			var first = _v0.a;
			return first;
		}
	}
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$browser$Debugger$Expando$mergeDictHelp = F3(
	function (oldDict, key, value) {
		var _v12 = A2($elm$core$Dict$get, key, oldDict);
		if (_v12.$ === 'Nothing') {
			return value;
		} else {
			var oldValue = _v12.a;
			return A2($elm$browser$Debugger$Expando$mergeHelp, oldValue, value);
		}
	});
var $elm$browser$Debugger$Expando$mergeHelp = F2(
	function (old, _new) {
		var _v3 = _Utils_Tuple2(old, _new);
		_v3$6:
		while (true) {
			switch (_v3.b.$) {
				case 'S':
					return _new;
				case 'Primitive':
					return _new;
				case 'Sequence':
					if (_v3.a.$ === 'Sequence') {
						var _v4 = _v3.a;
						var isClosed = _v4.b;
						var oldValues = _v4.c;
						var _v5 = _v3.b;
						var seqType = _v5.a;
						var newValues = _v5.c;
						return A3(
							$elm$browser$Debugger$Expando$Sequence,
							seqType,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
				case 'Dictionary':
					if (_v3.a.$ === 'Dictionary') {
						var _v6 = _v3.a;
						var isClosed = _v6.a;
						var _v7 = _v3.b;
						var keyValuePairs = _v7.b;
						return A2($elm$browser$Debugger$Expando$Dictionary, isClosed, keyValuePairs);
					} else {
						break _v3$6;
					}
				case 'Record':
					if (_v3.a.$ === 'Record') {
						var _v8 = _v3.a;
						var isClosed = _v8.a;
						var oldDict = _v8.b;
						var _v9 = _v3.b;
						var newDict = _v9.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A2(
								$elm$core$Dict$map,
								$elm$browser$Debugger$Expando$mergeDictHelp(oldDict),
								newDict));
					} else {
						break _v3$6;
					}
				default:
					if (_v3.a.$ === 'Constructor') {
						var _v10 = _v3.a;
						var isClosed = _v10.b;
						var oldValues = _v10.c;
						var _v11 = _v3.b;
						var maybeName = _v11.a;
						var newValues = _v11.c;
						return A3(
							$elm$browser$Debugger$Expando$Constructor,
							maybeName,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
			}
		}
		return _new;
	});
var $elm$browser$Debugger$Expando$mergeListHelp = F2(
	function (olds, news) {
		var _v0 = _Utils_Tuple2(olds, news);
		if (!_v0.a.b) {
			return news;
		} else {
			if (!_v0.b.b) {
				return news;
			} else {
				var _v1 = _v0.a;
				var x = _v1.a;
				var xs = _v1.b;
				var _v2 = _v0.b;
				var y = _v2.a;
				var ys = _v2.b;
				return A2(
					$elm$core$List$cons,
					A2($elm$browser$Debugger$Expando$mergeHelp, x, y),
					A2($elm$browser$Debugger$Expando$mergeListHelp, xs, ys));
			}
		}
	});
var $elm$browser$Debugger$Expando$merge = F2(
	function (value, expando) {
		return A2(
			$elm$browser$Debugger$Expando$mergeHelp,
			expando,
			_Debugger_init(value));
	});
var $elm$browser$Debugger$Main$jumpUpdate = F3(
	function (update, index, model) {
		var history = $elm$browser$Debugger$Main$cachedHistory(model);
		var currentMsg = $elm$browser$Debugger$History$getRecentMsg(history);
		var currentModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
		var _v0 = A3($elm$browser$Debugger$History$get, update, index, history);
		var indexModel = _v0.a;
		var indexMsg = _v0.b;
		return _Utils_update(
			model,
			{
				expandoModel: A2($elm$browser$Debugger$Expando$merge, indexModel, model.expandoModel),
				expandoMsg: A2($elm$browser$Debugger$Expando$merge, indexMsg, model.expandoMsg),
				state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, currentModel, currentMsg, history)
			});
	});
var $elm$browser$Debugger$History$jsToElm = A2($elm$core$Basics$composeR, _Json_unwrap, _Debugger_unsafeCoerce);
var $elm$browser$Debugger$History$decoder = F2(
	function (initialModel, update) {
		var addMessage = F2(
			function (rawMsg, _v0) {
				var model = _v0.a;
				var history = _v0.b;
				var msg = $elm$browser$Debugger$History$jsToElm(rawMsg);
				return _Utils_Tuple2(
					A2(update, msg, model),
					A3($elm$browser$Debugger$History$add, msg, model, history));
			});
		var updateModel = function (rawMsgs) {
			return A3(
				$elm$core$List$foldl,
				addMessage,
				_Utils_Tuple2(
					initialModel,
					$elm$browser$Debugger$History$empty(initialModel)),
				rawMsgs);
		};
		return A2(
			$elm$json$Json$Decode$map,
			updateModel,
			$elm$json$Json$Decode$list($elm$json$Json$Decode$value));
	});
var $elm$browser$Debugger$History$getInitialModel = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	var _v1 = A2($elm$core$Array$get, 0, snapshots);
	if (_v1.$ === 'Just') {
		var model = _v1.a.model;
		return model;
	} else {
		return recent.model;
	}
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$browser$Debugger$Main$loadNewHistory = F3(
	function (rawHistory, update, model) {
		var pureUserUpdate = F2(
			function (msg, userModel) {
				return A2(update, msg, userModel).a;
			});
		var initialUserModel = $elm$browser$Debugger$History$getInitialModel(model.history);
		var decoder = A2($elm$browser$Debugger$History$decoder, initialUserModel, pureUserUpdate);
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, rawHistory);
		if (_v0.$ === 'Err') {
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{overlay: $elm$browser$Debugger$Overlay$corruptImport}),
				$elm$core$Platform$Cmd$none);
		} else {
			var _v1 = _v0.a;
			var latestUserModel = _v1.a;
			var newHistory = _v1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						expandoModel: $elm$browser$Debugger$Expando$init(latestUserModel),
						expandoMsg: $elm$browser$Debugger$Expando$init(
							$elm$browser$Debugger$History$getRecentMsg(newHistory)),
						history: newHistory,
						overlay: $elm$browser$Debugger$Overlay$none,
						state: $elm$browser$Debugger$Main$Running(latestUserModel)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$browser$Debugger$Main$scroll = function (popout) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
		_Debugger_scroll(popout));
};
var $elm$browser$Debugger$Main$scrollTo = F2(
	function (id, popout) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
			A2(_Debugger_scrollTo, id, popout));
	});
var $elm$browser$Debugger$Main$setDragStatus = F2(
	function (status, layout) {
		if (layout.$ === 'Horizontal') {
			var x = layout.b;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Horizontal, status, x, y);
		} else {
			var x = layout.b;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Vertical, status, x, y);
		}
	});
var $elm$browser$Debugger$Main$swapLayout = function (layout) {
	if (layout.$ === 'Horizontal') {
		var s = layout.a;
		var x = layout.b;
		var y = layout.c;
		return A3($elm$browser$Debugger$Main$Vertical, s, x, y);
	} else {
		var s = layout.a;
		var x = layout.b;
		var y = layout.c;
		return A3($elm$browser$Debugger$Main$Horizontal, s, x, y);
	}
};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$browser$Debugger$Expando$updateIndex = F3(
	function (n, func, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			var x = list.a;
			var xs = list.b;
			return (n <= 0) ? A2(
				$elm$core$List$cons,
				func(x),
				xs) : A2(
				$elm$core$List$cons,
				x,
				A3($elm$browser$Debugger$Expando$updateIndex, n - 1, func, xs));
		}
	});
var $elm$browser$Debugger$Expando$update = F2(
	function (msg, value) {
		switch (value.$) {
			case 'S':
				return value;
			case 'Primitive':
				return value;
			case 'Sequence':
				var seqType = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Sequence, seqType, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v3 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Sequence,
								seqType,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
			case 'Dictionary':
				var isClosed = value.a;
				var keyValuePairs = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Dictionary, !isClosed, keyValuePairs);
					case 'Index':
						var redirect = msg.a;
						var index = msg.b;
						var subMsg = msg.c;
						switch (redirect.$) {
							case 'None':
								return value;
							case 'Key':
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v6) {
											var k = _v6.a;
											var v = _v6.b;
											return _Utils_Tuple2(
												A2($elm$browser$Debugger$Expando$update, subMsg, k),
												v);
										},
										keyValuePairs));
							default:
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v7) {
											var k = _v7.a;
											var v = _v7.b;
											return _Utils_Tuple2(
												k,
												A2($elm$browser$Debugger$Expando$update, subMsg, v));
										},
										keyValuePairs));
						}
					default:
						return value;
				}
			case 'Record':
				var isClosed = value.a;
				var valueDict = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Record, !isClosed, valueDict);
					case 'Index':
						return value;
					default:
						var field = msg.a;
						var subMsg = msg.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A3(
								$elm$core$Dict$update,
								field,
								$elm$browser$Debugger$Expando$updateField(subMsg),
								valueDict));
				}
			default:
				var maybeName = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Constructor, maybeName, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v10 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Constructor,
								maybeName,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
		}
	});
var $elm$browser$Debugger$Expando$updateField = F2(
	function (msg, maybeExpando) {
		if (maybeExpando.$ === 'Nothing') {
			return maybeExpando;
		} else {
			var expando = maybeExpando.a;
			return $elm$core$Maybe$Just(
				A2($elm$browser$Debugger$Expando$update, msg, expando));
		}
	});
var $elm$browser$Debugger$Main$Upload = function (a) {
	return {$: 'Upload', a: a};
};
var $elm$browser$Debugger$Main$upload = function (popout) {
	return A2(
		$elm$core$Task$perform,
		$elm$browser$Debugger$Main$Upload,
		_Debugger_upload(popout));
};
var $elm$browser$Debugger$Overlay$BadMetadata = function (a) {
	return {$: 'BadMetadata', a: a};
};
var $elm$browser$Debugger$Overlay$badMetadata = $elm$browser$Debugger$Overlay$BadMetadata;
var $elm$browser$Debugger$Main$withGoodMetadata = F2(
	function (model, func) {
		var _v0 = model.metadata;
		if (_v0.$ === 'Ok') {
			var metadata = _v0.a;
			return func(metadata);
		} else {
			var error = _v0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						overlay: $elm$browser$Debugger$Overlay$badMetadata(error)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$browser$Debugger$Main$wrapUpdate = F3(
	function (update, msg, model) {
		wrapUpdate:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				case 'UserMsg':
					var userMsg = msg.a;
					var userModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
					var newHistory = A3($elm$browser$Debugger$History$add, userMsg, userModel, model.history);
					var _v1 = A2(update, userMsg, userModel);
					var newUserModel = _v1.a;
					var userCmds = _v1.b;
					var commands = A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCmds);
					var _v2 = model.state;
					if (_v2.$ === 'Running') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expandoModel: A2($elm$browser$Debugger$Expando$merge, newUserModel, model.expandoModel),
									expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
									history: newHistory,
									state: $elm$browser$Debugger$Main$Running(newUserModel)
								}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										commands,
										$elm$browser$Debugger$Main$scroll(model.popout)
									])));
					} else {
						var index = _v2.a;
						var indexModel = _v2.b;
						var history = _v2.e;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									history: newHistory,
									state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, newUserModel, userMsg, history)
								}),
							commands);
					}
				case 'TweakExpandoMsg':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expandoMsg: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoMsg)
							}),
						$elm$core$Platform$Cmd$none);
				case 'TweakExpandoModel':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expandoModel: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoModel)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Resume':
					var _v3 = model.state;
					if (_v3.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var userModel = _v3.c;
						var userMsg = _v3.d;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expandoModel: A2($elm$browser$Debugger$Expando$merge, userModel, model.expandoModel),
									expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
									state: $elm$browser$Debugger$Main$Running(userModel)
								}),
							$elm$browser$Debugger$Main$scroll(model.popout));
					}
				case 'Jump':
					var index = msg.a;
					return _Utils_Tuple2(
						A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
						$elm$core$Platform$Cmd$none);
				case 'SliderJump':
					var index = msg.a;
					return _Utils_Tuple2(
						A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
						A2(
							$elm$browser$Debugger$Main$scrollTo,
							$elm$browser$Debugger$History$idForMessageIndex(index),
							model.popout));
				case 'Open':
					return _Utils_Tuple2(
						model,
						A2(
							$elm$core$Task$perform,
							$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
							_Debugger_open(model.popout)));
				case 'Up':
					var _v4 = model.state;
					if (_v4.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var i = _v4.a;
						var history = _v4.e;
						var targetIndex = i + 1;
						if (_Utils_cmp(
							targetIndex,
							$elm$browser$Debugger$History$size(history)) < 0) {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$SliderJump(targetIndex),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$Resume,
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						}
					}
				case 'Down':
					var _v5 = model.state;
					if (_v5.$ === 'Running') {
						var $temp$update = update,
							$temp$msg = $elm$browser$Debugger$Main$Jump(
							$elm$browser$Debugger$History$size(model.history) - 1),
							$temp$model = model;
						update = $temp$update;
						msg = $temp$msg;
						model = $temp$model;
						continue wrapUpdate;
					} else {
						var index = _v5.a;
						if (index > 0) {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$SliderJump(index - 1),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						}
					}
				case 'Import':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (_v6) {
							return _Utils_Tuple2(
								model,
								$elm$browser$Debugger$Main$upload(model.popout));
						});
				case 'Export':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							return _Utils_Tuple2(
								model,
								A2($elm$browser$Debugger$Main$download, metadata, model.history));
						});
				case 'Upload':
					var jsonString = msg.a;
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							var _v7 = A2($elm$browser$Debugger$Overlay$assessImport, metadata, jsonString);
							if (_v7.$ === 'Err') {
								var newOverlay = _v7.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{overlay: newOverlay}),
									$elm$core$Platform$Cmd$none);
							} else {
								var rawHistory = _v7.a;
								return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
							}
						});
				case 'OverlayMsg':
					var overlayMsg = msg.a;
					var _v8 = A2($elm$browser$Debugger$Overlay$close, overlayMsg, model.overlay);
					if (_v8.$ === 'Nothing') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{overlay: $elm$browser$Debugger$Overlay$none}),
							$elm$core$Platform$Cmd$none);
					} else {
						var rawHistory = _v8.a;
						return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
					}
				case 'SwapLayout':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: $elm$browser$Debugger$Main$swapLayout(model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				case 'DragStart':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Moving, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Drag':
					var info = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$drag, info, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				default:
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Static, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
			}
		}
	});
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$browser$Browser$application = _Browser_application;
var $author$project$Main$Blank = {$: 'Blank'};
var $author$project$Main$ProjectPortalMsg = function (a) {
	return {$: 'ProjectPortalMsg', a: a};
};
var $author$project$Data$NativeClient$Unknown = {$: 'Unknown'};
var $ChristophP$elm_i18next$I18Next$Translations = function (a) {
	return {$: 'Translations', a: a};
};
var $ChristophP$elm_i18next$I18Next$initialTranslations = $ChristophP$elm_i18next$I18Next$Translations($elm$core$Dict$empty);
var $author$project$Flags$empty = {translations: $ChristophP$elm_i18next$I18Next$initialTranslations};
var $author$project$Flags$Flags = function (translations) {
	return {translations: translations};
};
var $ChristophP$elm_i18next$I18Next$flattenTranslationsHelp = F3(
	function (initialValue, namespace, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (key, val, acc) {
					var newNamespace = function (currentKey) {
						return $elm$core$String$isEmpty(namespace) ? currentKey : (namespace + ('.' + currentKey));
					};
					if (val.$ === 'Leaf') {
						var str = val.a;
						return A3(
							$elm$core$Dict$insert,
							newNamespace(key),
							str,
							acc);
					} else {
						var children = val.a;
						return A3(
							$ChristophP$elm_i18next$I18Next$flattenTranslationsHelp,
							acc,
							newNamespace(key),
							children);
					}
				}),
			initialValue,
			dict);
	});
var $ChristophP$elm_i18next$I18Next$flattenTranslations = A2($ChristophP$elm_i18next$I18Next$flattenTranslationsHelp, $elm$core$Dict$empty, '');
var $ChristophP$elm_i18next$I18Next$Branch = function (a) {
	return {$: 'Branch', a: a};
};
var $ChristophP$elm_i18next$I18Next$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$lazy = function (thunk) {
	return A2(
		$elm$json$Json$Decode$andThen,
		thunk,
		$elm$json$Json$Decode$succeed(_Utils_Tuple0));
};
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
function $ChristophP$elm_i18next$I18Next$cyclic$treeDecoder() {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $ChristophP$elm_i18next$I18Next$Leaf, $elm$json$Json$Decode$string),
				$elm$json$Json$Decode$lazy(
				function (_v0) {
					return A2(
						$elm$json$Json$Decode$map,
						$ChristophP$elm_i18next$I18Next$Branch,
						$elm$json$Json$Decode$dict(
							$ChristophP$elm_i18next$I18Next$cyclic$treeDecoder()));
				})
			]));
}
try {
	var $ChristophP$elm_i18next$I18Next$treeDecoder = $ChristophP$elm_i18next$I18Next$cyclic$treeDecoder();
	$ChristophP$elm_i18next$I18Next$cyclic$treeDecoder = function () {
		return $ChristophP$elm_i18next$I18Next$treeDecoder;
	};
} catch ($) {
	throw 'Some top-level definitions from `I18Next` are causing infinite recursion:\n\n  ┌─────┐\n  │    treeDecoder\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $ChristophP$elm_i18next$I18Next$translationsDecoder = A2(
	$elm$json$Json$Decode$map,
	A2($elm$core$Basics$composeR, $ChristophP$elm_i18next$I18Next$flattenTranslations, $ChristophP$elm_i18next$I18Next$Translations),
	$elm$json$Json$Decode$dict($ChristophP$elm_i18next$I18Next$treeDecoder));
var $author$project$Flags$flagsDecoder = A2(
	$elm$json$Json$Decode$map,
	$author$project$Flags$Flags,
	A2($elm$json$Json$Decode$field, 'translations', $ChristophP$elm_i18next$I18Next$translationsDecoder));
var $elm$url$Url$Parser$State = F5(
	function (visited, unvisited, params, frag, value) {
		return {frag: frag, params: params, unvisited: unvisited, value: value, visited: visited};
	});
var $elm$url$Url$Parser$getFirstMatch = function (states) {
	getFirstMatch:
	while (true) {
		if (!states.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var state = states.a;
			var rest = states.b;
			var _v1 = state.unvisited;
			if (!_v1.b) {
				return $elm$core$Maybe$Just(state.value);
			} else {
				if ((_v1.a === '') && (!_v1.b.b)) {
					return $elm$core$Maybe$Just(state.value);
				} else {
					var $temp$states = rest;
					states = $temp$states;
					continue getFirstMatch;
				}
			}
		}
	}
};
var $elm$url$Url$Parser$removeFinalEmpty = function (segments) {
	if (!segments.b) {
		return _List_Nil;
	} else {
		if ((segments.a === '') && (!segments.b.b)) {
			return _List_Nil;
		} else {
			var segment = segments.a;
			var rest = segments.b;
			return A2(
				$elm$core$List$cons,
				segment,
				$elm$url$Url$Parser$removeFinalEmpty(rest));
		}
	}
};
var $elm$url$Url$Parser$preparePath = function (path) {
	var _v0 = A2($elm$core$String$split, '/', path);
	if (_v0.b && (_v0.a === '')) {
		var segments = _v0.b;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	} else {
		var segments = _v0;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	}
};
var $elm$url$Url$Parser$addToParametersHelp = F2(
	function (value, maybeList) {
		if (maybeList.$ === 'Nothing') {
			return $elm$core$Maybe$Just(
				_List_fromArray(
					[value]));
		} else {
			var list = maybeList.a;
			return $elm$core$Maybe$Just(
				A2($elm$core$List$cons, value, list));
		}
	});
var $elm$url$Url$percentDecode = _Url_percentDecode;
var $elm$url$Url$Parser$addParam = F2(
	function (segment, dict) {
		var _v0 = A2($elm$core$String$split, '=', segment);
		if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
			var rawKey = _v0.a;
			var _v1 = _v0.b;
			var rawValue = _v1.a;
			var _v2 = $elm$url$Url$percentDecode(rawKey);
			if (_v2.$ === 'Nothing') {
				return dict;
			} else {
				var key = _v2.a;
				var _v3 = $elm$url$Url$percentDecode(rawValue);
				if (_v3.$ === 'Nothing') {
					return dict;
				} else {
					var value = _v3.a;
					return A3(
						$elm$core$Dict$update,
						key,
						$elm$url$Url$Parser$addToParametersHelp(value),
						dict);
				}
			}
		} else {
			return dict;
		}
	});
var $elm$url$Url$Parser$prepareQuery = function (maybeQuery) {
	if (maybeQuery.$ === 'Nothing') {
		return $elm$core$Dict$empty;
	} else {
		var qry = maybeQuery.a;
		return A3(
			$elm$core$List$foldr,
			$elm$url$Url$Parser$addParam,
			$elm$core$Dict$empty,
			A2($elm$core$String$split, '&', qry));
	}
};
var $elm$url$Url$Parser$parse = F2(
	function (_v0, url) {
		var parser = _v0.a;
		return $elm$url$Url$Parser$getFirstMatch(
			parser(
				A5(
					$elm$url$Url$Parser$State,
					_List_Nil,
					$elm$url$Url$Parser$preparePath(url.path),
					$elm$url$Url$Parser$prepareQuery(url.query),
					url.fragment,
					$elm$core$Basics$identity)));
	});
var $author$project$Route$Home = {$: 'Home'};
var $author$project$Route$Project = function (a) {
	return {$: 'Project', a: a};
};
var $author$project$Route$ProjectPortal = {$: 'ProjectPortal'};
var $elm$url$Url$Parser$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$url$Url$Parser$mapState = F2(
	function (func, _v0) {
		var visited = _v0.visited;
		var unvisited = _v0.unvisited;
		var params = _v0.params;
		var frag = _v0.frag;
		var value = _v0.value;
		return A5(
			$elm$url$Url$Parser$State,
			visited,
			unvisited,
			params,
			frag,
			func(value));
	});
var $elm$url$Url$Parser$map = F2(
	function (subValue, _v0) {
		var parseArg = _v0.a;
		return $elm$url$Url$Parser$Parser(
			function (_v1) {
				var visited = _v1.visited;
				var unvisited = _v1.unvisited;
				var params = _v1.params;
				var frag = _v1.frag;
				var value = _v1.value;
				return A2(
					$elm$core$List$map,
					$elm$url$Url$Parser$mapState(value),
					parseArg(
						A5($elm$url$Url$Parser$State, visited, unvisited, params, frag, subValue)));
			});
	});
var $elm$url$Url$Parser$oneOf = function (parsers) {
	return $elm$url$Url$Parser$Parser(
		function (state) {
			return A2(
				$elm$core$List$concatMap,
				function (_v0) {
					var parser = _v0.a;
					return parser(state);
				},
				parsers);
		});
};
var $elm$url$Url$Parser$s = function (str) {
	return $elm$url$Url$Parser$Parser(
		function (_v0) {
			var visited = _v0.visited;
			var unvisited = _v0.unvisited;
			var params = _v0.params;
			var frag = _v0.frag;
			var value = _v0.value;
			if (!unvisited.b) {
				return _List_Nil;
			} else {
				var next = unvisited.a;
				var rest = unvisited.b;
				return _Utils_eq(next, str) ? _List_fromArray(
					[
						A5(
						$elm$url$Url$Parser$State,
						A2($elm$core$List$cons, next, visited),
						rest,
						params,
						frag,
						value)
					]) : _List_Nil;
			}
		});
};
var $elm$url$Url$Parser$slash = F2(
	function (_v0, _v1) {
		var parseBefore = _v0.a;
		var parseAfter = _v1.a;
		return $elm$url$Url$Parser$Parser(
			function (state) {
				return A2(
					$elm$core$List$concatMap,
					parseAfter,
					parseBefore(state));
			});
	});
var $elm$url$Url$Parser$custom = F2(
	function (tipe, stringToSomething) {
		return $elm$url$Url$Parser$Parser(
			function (_v0) {
				var visited = _v0.visited;
				var unvisited = _v0.unvisited;
				var params = _v0.params;
				var frag = _v0.frag;
				var value = _v0.value;
				if (!unvisited.b) {
					return _List_Nil;
				} else {
					var next = unvisited.a;
					var rest = unvisited.b;
					var _v2 = stringToSomething(next);
					if (_v2.$ === 'Just') {
						var nextValue = _v2.a;
						return _List_fromArray(
							[
								A5(
								$elm$url$Url$Parser$State,
								A2($elm$core$List$cons, next, visited),
								rest,
								params,
								frag,
								value(nextValue))
							]);
					} else {
						return _List_Nil;
					}
				}
			});
	});
var $elm$url$Url$Parser$string = A2($elm$url$Url$Parser$custom, 'STRING', $elm$core$Maybe$Just);
var $elm$url$Url$Parser$top = $elm$url$Url$Parser$Parser(
	function (state) {
		return _List_fromArray(
			[state]);
	});
var $author$project$Route$router = $elm$url$Url$Parser$oneOf(
	_List_fromArray(
		[
			A2($elm$url$Url$Parser$map, $author$project$Route$Home, $elm$url$Url$Parser$top),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Route$ProjectPortal,
			A2(
				$elm$url$Url$Parser$slash,
				$elm$url$Url$Parser$s('project'),
				$elm$url$Url$Parser$s('portal'))),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Route$Project,
			A2(
				$elm$url$Url$Parser$slash,
				$elm$url$Url$Parser$s('project'),
				$elm$url$Url$Parser$string))
		]));
var $author$project$Route$fromUrl = function (url) {
	return A2($elm$url$Url$Parser$parse, $author$project$Route$router, url);
};
var $krisajenkins$remotedata$RemoteData$NotAsked = {$: 'NotAsked'};
var $author$project$Page$Project$Portal$PresetsLoaded = function (a) {
	return {$: 'PresetsLoaded', a: a};
};
var $author$project$Page$Project$Portal$ProjectsLoaded = function (a) {
	return {$: 'ProjectsLoaded', a: a};
};
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$url$Url$Builder$toQueryPair = function (_v0) {
	var key = _v0.a;
	var value = _v0.b;
	return key + ('=' + value);
};
var $elm$url$Url$Builder$toQuery = function (parameters) {
	if (!parameters.b) {
		return '';
	} else {
		return '?' + A2(
			$elm$core$String$join,
			'&',
			A2($elm$core$List$map, $elm$url$Url$Builder$toQueryPair, parameters));
	}
};
var $elm$url$Url$Builder$crossOrigin = F3(
	function (prePath, pathSegments, parameters) {
		return prePath + ('/' + (A2($elm$core$String$join, '/', pathSegments) + $elm$url$Url$Builder$toQuery(parameters)));
	});
var $author$project$Request$Helper$apiNativeClient = F2(
	function (path, params) {
		return A3(
			$elm$url$Url$Builder$crossOrigin,
			'http://localhost:8888',
			A2($elm$core$List$cons, 'api', path),
			params);
	});
var $author$project$Data$Project$Concise$Concise = F5(
	function (uuid, name, hasSubtitle, params, status) {
		return {hasSubtitle: hasSubtitle, name: name, params: params, status: status, uuid: uuid};
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $author$project$Data$Video$Processing$Params$Params = F7(
	function (granularity, differentTypeMinDifference, sameTypeMaxDifference, similarTypeMaxDifference, smoothTypeMinValue, isSameCombined, shortNoneCombiningMaxDurationInMs) {
		return {differentTypeMinDifference: differentTypeMinDifference, granularity: granularity, isSameCombined: isSameCombined, sameTypeMaxDifference: sameTypeMaxDifference, shortNoneCombiningMaxDurationInMs: shortNoneCombiningMaxDurationInMs, similarTypeMaxDifference: similarTypeMaxDifference, smoothTypeMinValue: smoothTypeMinValue};
	});
var $author$project$Data$Video$Processing$Params$Detailed = {$: 'Detailed'};
var $author$project$Data$Video$Processing$Params$Medium = {$: 'Medium'};
var $author$project$Data$Video$Processing$Params$Rough = {$: 'Rough'};
var $elm$json$Json$Decode$fail = _Json_fail;
var $author$project$Data$Video$Processing$Params$granularityDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (id) {
		switch (id) {
			case 1:
				return $elm$json$Json$Decode$succeed($author$project$Data$Video$Processing$Params$Rough);
			case 2:
				return $elm$json$Json$Decode$succeed($author$project$Data$Video$Processing$Params$Medium);
			case 3:
				return $elm$json$Json$Decode$succeed($author$project$Data$Video$Processing$Params$Detailed);
			default:
				return $elm$json$Json$Decode$fail('unrecognised granularity ID');
		}
	},
	$elm$json$Json$Decode$int);
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2($elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var $author$project$Data$Video$Processing$Params$decoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'ShortNoneCombiningMaxDurationInMs',
	$elm$json$Json$Decode$int,
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'IsSameCombined',
		$elm$json$Json$Decode$bool,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'SmoothTypeMinValue',
			$elm$json$Json$Decode$int,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'SimilarTypeMaxDifference',
				$elm$json$Json$Decode$int,
				A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'SameTypeMaxDifference',
					$elm$json$Json$Decode$int,
					A3(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'DifferentTypeMinDifference',
						$elm$json$Json$Decode$int,
						A3(
							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'Granularity',
							$author$project$Data$Video$Processing$Params$granularityDecoder,
							$elm$json$Json$Decode$succeed($author$project$Data$Video$Processing$Params$Params))))))));
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder = F3(
	function (pathDecoder, valDecoder, fallback) {
		var nullOr = function (decoder) {
			return $elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						decoder,
						$elm$json$Json$Decode$null(fallback)
					]));
		};
		var handleResult = function (input) {
			var _v0 = A2($elm$json$Json$Decode$decodeValue, pathDecoder, input);
			if (_v0.$ === 'Ok') {
				var rawValue = _v0.a;
				var _v1 = A2(
					$elm$json$Json$Decode$decodeValue,
					nullOr(valDecoder),
					rawValue);
				if (_v1.$ === 'Ok') {
					var finalResult = _v1.a;
					return $elm$json$Json$Decode$succeed(finalResult);
				} else {
					var finalErr = _v1.a;
					return $elm$json$Json$Decode$fail(
						$elm$json$Json$Decode$errorToString(finalErr));
				}
			} else {
				return $elm$json$Json$Decode$succeed(fallback);
			}
		};
		return A2($elm$json$Json$Decode$andThen, handleResult, $elm$json$Json$Decode$value);
	});
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder,
				A2($elm$json$Json$Decode$field, key, $elm$json$Json$Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var $author$project$Data$Project$Concise$Processed = {$: 'Processed'};
var $author$project$Data$Project$Concise$Processing = function (a) {
	return {$: 'Processing', a: a};
};
var $author$project$Data$Project$Concise$Uploaded = {$: 'Uploaded'};
var $author$project$Data$Project$Concise$statusDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (statusCode) {
		switch (statusCode) {
			case 1:
				return $elm$json$Json$Decode$succeed($author$project$Data$Project$Concise$Uploaded);
			case 2:
				return A4(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
					'Progress',
					$elm$json$Json$Decode$float,
					0,
					$elm$json$Json$Decode$succeed(
						function (x) {
							return $author$project$Data$Project$Concise$Processing(100 * x);
						}));
			case 3:
				return $elm$json$Json$Decode$succeed($author$project$Data$Project$Concise$Processed);
			default:
				return $elm$json$Json$Decode$fail(
					'unrecognised status code: ' + $elm$core$String$fromInt(statusCode));
		}
	},
	A2($elm$json$Json$Decode$field, 'Status', $elm$json$Json$Decode$int));
var $author$project$Data$Project$Concise$decoder = A2(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
	$author$project$Data$Project$Concise$statusDecoder,
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'Parameters',
		$author$project$Data$Video$Processing$Params$decoder,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'HasSubtitle',
			$elm$json$Json$Decode$bool,
			A4(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
				'Name',
				$elm$json$Json$Decode$string,
				'Zero Moustafa',
				A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'Id',
					$elm$json$Json$Decode$string,
					$elm$json$Json$Decode$succeed($author$project$Data$Project$Concise$Concise))))));
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 'NetworkError_':
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.statusCode));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $krisajenkins$remotedata$RemoteData$Failure = function (a) {
	return {$: 'Failure', a: a};
};
var $krisajenkins$remotedata$RemoteData$Success = function (a) {
	return {$: 'Success', a: a};
};
var $krisajenkins$remotedata$RemoteData$fromResult = function (result) {
	if (result.$ === 'Err') {
		var e = result.a;
		return $krisajenkins$remotedata$RemoteData$Failure(e);
	} else {
		var x = result.a;
		return $krisajenkins$remotedata$RemoteData$Success(x);
	}
};
var $elm$http$Http$jsonBody = function (value) {
	return A2(
		_Http_pair,
		'application/json',
		A2($elm$json$Json$Encode$encode, 0, value));
};
var $elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.tracker;
							if (_v4.$ === 'Nothing') {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var $elm$http$Http$post = function (r) {
	return $elm$http$Http$request(
		{body: r.body, expect: r.expect, headers: _List_Nil, method: 'POST', timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $author$project$Request$Project$listAll = function (handler) {
	return $elm$http$Http$post(
		{
			body: $elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(_List_Nil)),
			expect: A2(
				$elm$http$Http$expectJson,
				A2($elm$core$Basics$composeR, $krisajenkins$remotedata$RemoteData$fromResult, handler),
				A2(
					$elm$json$Json$Decode$field,
					'Videos',
					$elm$json$Json$Decode$list($author$project$Data$Project$Concise$decoder))),
			url: A2(
				$author$project$Request$Helper$apiNativeClient,
				_List_fromArray(
					['listvideos']),
				_List_Nil)
		});
};
var $author$project$Data$Video$Processing$Preset$Preset = F3(
	function (name, description, params) {
		return {description: description, name: name, params: params};
	});
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $author$project$Data$Video$Processing$Preset$decoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'Parameters',
	$author$project$Data$Video$Processing$Params$decoder,
	A4(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
		'Description',
		$elm$json$Json$Decode$maybe($elm$json$Json$Decode$string),
		$elm$core$Maybe$Nothing,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'Name',
			$elm$json$Json$Decode$string,
			$elm$json$Json$Decode$succeed($author$project$Data$Video$Processing$Preset$Preset))));
var $author$project$Request$Video$Preset$listAll = function (handler) {
	return $elm$http$Http$post(
		{
			body: $elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'Language',
							$elm$json$Json$Encode$string('zh'))
						]))),
			expect: A2(
				$elm$http$Http$expectJson,
				A2($elm$core$Basics$composeR, $krisajenkins$remotedata$RemoteData$fromResult, handler),
				A2(
					$elm$json$Json$Decode$field,
					'Presets',
					$elm$json$Json$Decode$list($author$project$Data$Video$Processing$Preset$decoder))),
			url: A2(
				$author$project$Request$Helper$apiNativeClient,
				_List_fromArray(
					['listpresets']),
				_List_Nil)
		});
};
var $author$project$Page$Project$Portal$init = _Utils_Tuple2(
	{availablePresets: $krisajenkins$remotedata$RemoteData$NotAsked, expertMode: false, importingError: $elm$core$Maybe$Nothing, isDisplayingUploader: false, items: _List_Nil, paramsToExport: $elm$core$Maybe$Nothing, projects: $krisajenkins$remotedata$RemoteData$NotAsked, reviewingSubtitle: $elm$core$Maybe$Nothing, searchStr: '', selectedProjects: $elm$core$Set$empty},
	$elm$core$Platform$Cmd$batch(
		_List_fromArray(
			[
				$author$project$Request$Project$listAll($author$project$Page$Project$Portal$ProjectsLoaded),
				$author$project$Request$Video$Preset$listAll($author$project$Page$Project$Portal$PresetsLoaded)
			])));
var $author$project$Main$NativeClientVersionInfoRequested = function (a) {
	return {$: 'NativeClientVersionInfoRequested', a: a};
};
var $author$project$Data$Version$incrementMinor = function (version) {
	return _Utils_update(
		version,
		{buildNo: version.buildNo + 1, minor: version.minor + 1});
};
var $author$project$Data$Version$initial = {buildNo: 1, major: 0, minor: 1, patch: 0};
var $author$project$Data$Version$Platform$incrementedBy = function (history) {
	return A3($elm$core$List$foldl, $elm$core$Basics$apL, $author$project$Data$Version$initial, history);
};
var $author$project$Data$Version$Platform$currentVersions = {
	frontend: $author$project$Data$Version$Platform$incrementedBy(
		_List_fromArray(
			[$author$project$Data$Version$incrementMinor])),
	projectData: $author$project$Data$Version$Platform$incrementedBy(_List_Nil)
};
var $author$project$Data$NativeClient$Meta = F2(
	function (version, isCompatible) {
		return {isCompatible: isCompatible, version: version};
	});
var $author$project$Data$Version$decoder = A2(
	$elm$json$Json$Decode$andThen,
	function (str) {
		var _v0 = A2($elm$core$String$split, '.', str);
		if ((((_v0.b && _v0.b.b) && _v0.b.b.b) && _v0.b.b.b.b) && (!_v0.b.b.b.b.b)) {
			var a = _v0.a;
			var _v1 = _v0.b;
			var b = _v1.a;
			var _v2 = _v1.b;
			var c = _v2.a;
			var _v3 = _v2.b;
			var d = _v3.a;
			var _v4 = A2(
				$elm$core$List$map,
				$elm$core$String$toInt,
				_List_fromArray(
					[a, b, c, d]));
			if ((((((((_v4.b && (_v4.a.$ === 'Just')) && _v4.b.b) && (_v4.b.a.$ === 'Just')) && _v4.b.b.b) && (_v4.b.b.a.$ === 'Just')) && _v4.b.b.b.b) && (_v4.b.b.b.a.$ === 'Just')) && (!_v4.b.b.b.b.b)) {
				var major = _v4.a.a;
				var _v5 = _v4.b;
				var minor = _v5.a.a;
				var _v6 = _v5.b;
				var patch = _v6.a.a;
				var _v7 = _v6.b;
				var buildNo = _v7.a.a;
				return A3(
					$elm$core$List$foldr,
					$elm$core$Basics$and,
					true,
					A2(
						$elm$core$List$map,
						function (n) {
							return n >= 0;
						},
						_List_fromArray(
							[major, minor, patch, buildNo]))) ? $elm$json$Json$Decode$succeed(
					{buildNo: buildNo, major: major, minor: minor, patch: patch}) : $elm$json$Json$Decode$fail('cannot be negative');
			} else {
				return $elm$json$Json$Decode$fail('unexpected error');
			}
		} else {
			return $elm$json$Json$Decode$fail('not a valid version number');
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Data$NativeClient$metaDecoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'Compatible',
	$elm$json$Json$Decode$bool,
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'Version',
		$author$project$Data$Version$decoder,
		$elm$json$Json$Decode$succeed($author$project$Data$NativeClient$Meta)));
var $author$project$Data$NativeClient$MalformedVersionNumber = {$: 'MalformedVersionNumber'};
var $author$project$Util$errorCodeDecoder = F2(
	function (errorCode, error) {
		return A2(
			$elm$json$Json$Decode$andThen,
			function (code) {
				return _Utils_eq(code, errorCode) ? $elm$json$Json$Decode$succeed(error) : $elm$json$Json$Decode$fail('error not to be handled here');
			},
			$elm$json$Json$Decode$int);
	});
var $author$project$Data$NativeClient$metaErrorDecoder = function (statusCode) {
	return (statusCode === 400) ? A2(
		$elm$json$Json$Decode$field,
		'ErrorCode',
		A2($author$project$Util$errorCodeDecoder, 120, $author$project$Data$NativeClient$MalformedVersionNumber)) : $elm$json$Json$Decode$fail('error not to be handled here');
};
var $author$project$Data$Version$toString = function (_v0) {
	var major = _v0.major;
	var minor = _v0.minor;
	var patch = _v0.patch;
	var buildNo = _v0.buildNo;
	return A2(
		$elm$core$String$join,
		'.',
		A2(
			$elm$core$List$map,
			$elm$core$String$fromInt,
			_List_fromArray(
				[major, minor, patch, buildNo])));
};
var $author$project$Data$Version$encoder = function (version) {
	return $elm$json$Json$Encode$string(
		$author$project$Data$Version$toString(version));
};
var $author$project$Data$NativeClient$metaRequestEncoder = function (version) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'FrontendVersion',
				$author$project$Data$Version$encoder(version))
			]));
};
var $author$project$API$Request$BadBody = F2(
	function (a, b) {
		return {$: 'BadBody', a: a, b: b};
	});
var $author$project$API$Request$BadStatus = F2(
	function (a, b) {
		return {$: 'BadStatus', a: a, b: b};
	});
var $author$project$API$Request$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $author$project$API$Request$NetworkError = {$: 'NetworkError'};
var $author$project$API$Request$Timeout = {$: 'Timeout'};
var $author$project$API$Request$expectJson = F3(
	function (toMsg, errorDecoder, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			function (response) {
				switch (response.$) {
					case 'BadUrl_':
						var url = response.a;
						return $elm$core$Result$Err(
							$author$project$API$Request$BadUrl(url));
					case 'Timeout_':
						return $elm$core$Result$Err($author$project$API$Request$Timeout);
					case 'NetworkError_':
						return $elm$core$Result$Err($author$project$API$Request$NetworkError);
					case 'GoodStatus_':
						if (response.b === '') {
							var metadata = response.a;
							var _v1 = A2($elm$json$Json$Decode$decodeString, decoder, '{}');
							if (_v1.$ === 'Ok') {
								var value = _v1.a;
								return $elm$core$Result$Ok(value);
							} else {
								var err = _v1.a;
								return $elm$core$Result$Err(
									A2($author$project$API$Request$BadBody, metadata.statusCode, err));
							}
						} else {
							var metadata = response.a;
							var body = response.b;
							var _v2 = A2($elm$json$Json$Decode$decodeString, decoder, body);
							if (_v2.$ === 'Ok') {
								var value = _v2.a;
								return $elm$core$Result$Ok(value);
							} else {
								var err = _v2.a;
								return $elm$core$Result$Err(
									A2($author$project$API$Request$BadBody, metadata.statusCode, err));
							}
						}
					default:
						var metadata = response.a;
						var body = response.b;
						var _v3 = A2(
							$elm$json$Json$Decode$decodeString,
							errorDecoder(metadata.statusCode),
							body);
						if (_v3.$ === 'Ok') {
							var value = _v3.a;
							return $elm$core$Result$Err(
								A2($author$project$API$Request$BadStatus, metadata.statusCode, value));
						} else {
							var err = _v3.a;
							return $elm$core$Result$Err(
								A2($author$project$API$Request$BadBody, metadata.statusCode, err));
						}
				}
			});
	});
var $author$project$API$Request$post = function (r) {
	return $elm$http$Http$request(
		{
			body: $elm$http$Http$jsonBody(r.payload),
			expect: A3($author$project$API$Request$expectJson, r.handler, r.errorDecoder, r.decoder),
			headers: _List_Nil,
			method: 'POST',
			timeout: r.timeout,
			tracker: $elm$core$Maybe$Nothing,
			url: r.url
		});
};
var $author$project$Request$Meta$nativeClient = F2(
	function (handler, frontendVersion) {
		return $author$project$API$Request$post(
			{
				decoder: $author$project$Data$NativeClient$metaDecoder,
				errorDecoder: $author$project$Data$NativeClient$metaErrorDecoder,
				handler: handler,
				payload: $author$project$Data$NativeClient$metaRequestEncoder(frontendVersion),
				timeout: $elm$core$Maybe$Just(5000),
				url: A2(
					$author$project$Request$Helper$apiNativeClient,
					_List_fromArray(
						['version']),
					_List_Nil)
			});
	});
var $author$project$Main$requestMetaOfNativeClient = A2($author$project$Request$Meta$nativeClient, $author$project$Main$NativeClientVersionInfoRequested, $author$project$Data$Version$Platform$currentVersions.frontend);
var $author$project$Main$Home = {$: 'Home'};
var $author$project$Main$NotFound = {$: 'NotFound'};
var $author$project$Main$Project = function (a) {
	return {$: 'Project', a: a};
};
var $author$project$Main$ProjectMsg = function (a) {
	return {$: 'ProjectMsg', a: a};
};
var $author$project$Main$ProjectPortal = {$: 'ProjectPortal'};
var $author$project$Page$Project$Loading = function (a) {
	return {$: 'Loading', a: a};
};
var $author$project$Page$Project$ProjectLoaded = function (a) {
	return {$: 'ProjectLoaded', a: a};
};
var $author$project$Data$Project$Project = F3(
	function (uuid, name, workingData) {
		return {name: name, uuid: uuid, workingData: workingData};
	});
var $elm$json$Json$Decode$array = _Json_decodeArray;
var $author$project$Data$Project$Content$FromSegment = F2(
	function (a, b) {
		return {$: 'FromSegment', a: a, b: b};
	});
var $author$project$Data$Project$SegmentContent$FrameSequence = F2(
	function (a, b) {
		return {$: 'FrameSequence', a: a, b: b};
	});
var $author$project$Data$Project$SegmentContent$GifFromVideo = F2(
	function (a, b) {
		return {$: 'GifFromVideo', a: a, b: b};
	});
var $author$project$Data$Video$Gif$Gif = F2(
	function (localObjectKey, fileSize) {
		return {fileSize: fileSize, localObjectKey: localObjectKey};
	});
var $author$project$Data$FileSize$Byte = function (a) {
	return {$: 'Byte', a: a};
};
var $author$project$Data$FileSize$byteDecoder = A2($elm$json$Json$Decode$map, $author$project$Data$FileSize$Byte, $elm$json$Json$Decode$float);
var $author$project$Data$File$Object$Key = function (a) {
	return {$: 'Key', a: a};
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $author$project$Data$File$Object$stringToKey = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$split('/'),
	A2(
		$elm$core$Basics$composeR,
		$elm$core$List$filter(
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty)),
		$author$project$Data$File$Object$Key));
var $author$project$Data$File$Object$keyDecoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2($elm$json$Json$Decode$map, $author$project$Data$File$Object$stringToKey, $elm$json$Json$Decode$string),
			A2(
			$elm$json$Json$Decode$map,
			$author$project$Data$File$Object$Key,
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))
		]));
var $author$project$Data$Video$Gif$decoder = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Data$Video$Gif$Gif,
	A2($elm$json$Json$Decode$field, 'localObjectKey', $author$project$Data$File$Object$keyDecoder),
	A2($elm$json$Json$Decode$field, 'fileSize', $author$project$Data$FileSize$byteDecoder));
var $author$project$Data$Video$Segment$Segment = F2(
	function (a, b) {
		return {$: 'Segment', a: a, b: b};
	});
var $author$project$Data$Video$Frame$Frame = F3(
	function (index, localObjectKey, time) {
		return {index: index, localObjectKey: localObjectKey, time: time};
	});
var $author$project$Data$Video$Frame$decoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$Data$Video$Frame$Frame,
	A2($elm$json$Json$Decode$field, 'index', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'objectKey', $author$project$Data$File$Object$keyDecoder),
	A2($elm$json$Json$Decode$field, 'time', $elm$json$Json$Decode$int));
var $author$project$Data$Video$Segment$decoder = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Data$Video$Segment$Segment,
	A2($elm$json$Json$Decode$field, 'keyFrame', $author$project$Data$Video$Frame$decoder),
	A2(
		$elm$json$Json$Decode$field,
		'others',
		$elm$json$Json$Decode$list($author$project$Data$Video$Frame$decoder)));
var $author$project$Data$Project$SegmentContent$decoder = A2(
	$elm$json$Json$Decode$andThen,
	function (displayMode) {
		switch (displayMode) {
			case 'frame sequence':
				return A4(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
					'gif',
					$elm$json$Json$Decode$maybe($author$project$Data$Video$Gif$decoder),
					$elm$core$Maybe$Nothing,
					A3(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'segment',
						$author$project$Data$Video$Segment$decoder,
						$elm$json$Json$Decode$succeed($author$project$Data$Project$SegmentContent$FrameSequence)));
			case 'GIF':
				return A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'segment',
					$author$project$Data$Video$Segment$decoder,
					A3(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'gif',
						$author$project$Data$Video$Gif$decoder,
						$elm$json$Json$Decode$succeed($author$project$Data$Project$SegmentContent$GifFromVideo)));
			default:
				return $elm$json$Json$Decode$fail('unrecognised display mode');
		}
	},
	A2($elm$json$Json$Decode$field, 'displayMode', $elm$json$Json$Decode$string));
var $author$project$Data$Project$Content$fromSegmentDecoder = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Data$Project$Content$FromSegment,
	A2($elm$json$Json$Decode$field, 'isHidden', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'content', $author$project$Data$Project$SegmentContent$decoder));
var $author$project$Data$Project$Content$FromUser = F3(
	function (a, b, c) {
		return {$: 'FromUser', a: a, b: b, c: c};
	});
var $author$project$Data$Project$UserContent$Picture = function (a) {
	return {$: 'Picture', a: a};
};
var $author$project$Data$Project$UserContent$PlainText = function (a) {
	return {$: 'PlainText', a: a};
};
var $author$project$Data$Project$UserContent$decoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$map,
			$author$project$Data$Project$UserContent$PlainText,
			A2($elm$json$Json$Decode$field, 'plainText', $elm$json$Json$Decode$string)),
			A2(
			$elm$json$Json$Decode$map,
			$author$project$Data$Project$UserContent$Picture,
			A2($elm$json$Json$Decode$field, 'picture', $author$project$Data$File$Object$keyDecoder))
		]));
var $author$project$Data$Project$Content$fromUserDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$Data$Project$Content$FromUser,
	A2($elm$json$Json$Decode$field, 'index', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'isHidden', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'content', $author$project$Data$Project$UserContent$decoder));
var $author$project$Data$Project$Content$decoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2($elm$json$Json$Decode$field, 'fromSegment', $author$project$Data$Project$Content$fromSegmentDecoder),
			A2($elm$json$Json$Decode$field, 'fromUser', $author$project$Data$Project$Content$fromUserDecoder)
		]));
var $author$project$Data$Project$UserContent$fromPlainText = $author$project$Data$Project$UserContent$PlainText;
var $author$project$Data$Project$Content$fromPlainText = function (index) {
	return A2(
		$elm$core$Basics$composeR,
		$author$project$Data$Project$UserContent$fromPlainText,
		A2($author$project$Data$Project$Content$FromUser, index, false));
};
var $author$project$Data$Project$SegmentContent$fromSegment = function (segment) {
	return A2($author$project$Data$Project$SegmentContent$FrameSequence, segment, $elm$core$Maybe$Nothing);
};
var $author$project$Data$Project$Content$fromSegmentContent = $author$project$Data$Project$Content$FromSegment(false);
var $author$project$Data$Project$Content$fromSegment = function (segment) {
	return $author$project$Data$Project$Content$fromSegmentContent(
		$author$project$Data$Project$SegmentContent$fromSegment(segment));
};
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$contains = _Regex_contains;
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $author$project$Util$isInFactBlankString = function () {
	var pattern = A2(
		$elm$core$Maybe$withDefault,
		$elm$regex$Regex$never,
		$elm$regex$Regex$fromString('^\\s*$'));
	return $elm$regex$Regex$contains(pattern);
}();
var $author$project$Data$Project$Content$interweaveToContentList = F2(
	function (segmentList, captionList) {
		var go = F4(
			function (segments, captions, i, result) {
				go:
				while (true) {
					var _v0 = _Utils_Tuple2(segments, captions);
					if (_v0.a.b) {
						if (_v0.b.b) {
							if (_v0.b.a.$ === 'Just') {
								var _v1 = _v0.a;
								var x = _v1.a;
								var xs = _v1.b;
								var _v2 = _v0.b;
								var caption = _v2.a.a;
								var ys = _v2.b;
								if ($author$project$Util$isInFactBlankString(caption)) {
									var $temp$segments = xs,
										$temp$captions = ys,
										$temp$i = i,
										$temp$result = A2(
										$elm$core$List$cons,
										$author$project$Data$Project$Content$fromSegment(x),
										result);
									segments = $temp$segments;
									captions = $temp$captions;
									i = $temp$i;
									result = $temp$result;
									continue go;
								} else {
									var $temp$segments = xs,
										$temp$captions = ys,
										$temp$i = i + 1,
										$temp$result = A2(
										$elm$core$List$cons,
										$author$project$Data$Project$Content$fromSegment(x),
										A2(
											$elm$core$List$cons,
											A2($author$project$Data$Project$Content$fromPlainText, i, caption),
											result));
									segments = $temp$segments;
									captions = $temp$captions;
									i = $temp$i;
									result = $temp$result;
									continue go;
								}
							} else {
								var _v3 = _v0.a;
								var x = _v3.a;
								var xs = _v3.b;
								var _v4 = _v0.b;
								var _v5 = _v4.a;
								var ys = _v4.b;
								var $temp$segments = xs,
									$temp$captions = ys,
									$temp$i = i,
									$temp$result = A2(
									$elm$core$List$cons,
									$author$project$Data$Project$Content$fromSegment(x),
									result);
								segments = $temp$segments;
								captions = $temp$captions;
								i = $temp$i;
								result = $temp$result;
								continue go;
							}
						} else {
							return $elm$core$List$reverse(result);
						}
					} else {
						return $elm$core$List$reverse(result);
					}
				}
			});
		return A4(go, segmentList, captionList, 0, _List_Nil);
	});
var $author$project$Data$Video$Segment$length = function (_v0) {
	var others = _v0.b;
	return $elm$core$List$length(others) + 1;
};
var $author$project$Data$Video$Segment$map = F2(
	function (f, _v0) {
		var keyFrame = _v0.a;
		var others = _v0.b;
		return A2(
			$author$project$Data$Video$Segment$Segment,
			f(keyFrame),
			A2($elm$core$List$map, f, others));
	});
var $author$project$Data$Video$Frame$offsetIndex = F2(
	function (offset, frame) {
		return _Utils_update(
			frame,
			{index: frame.index + offset});
	});
var $elm_community$list_extra$List$Extra$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				if (accAcc.b) {
					var acc = accAcc.a;
					return A2(
						$elm$core$List$cons,
						A2(f, x, acc),
						accAcc);
				} else {
					return _List_Nil;
				}
			});
		return $elm$core$List$reverse(
			A3(
				$elm$core$List$foldl,
				scan1,
				_List_fromArray(
					[b]),
				xs));
	});
var $author$project$Data$Video$Segment$offsetIndicesOfFrames = function (segmentList) {
	return A3(
		$elm$core$List$map2,
		A2($elm$core$Basics$composeL, $author$project$Data$Video$Segment$map, $author$project$Data$Video$Frame$offsetIndex),
		A3(
			$elm_community$list_extra$List$Extra$scanl,
			$elm$core$Basics$add,
			0,
			A2($elm$core$List$map, $author$project$Data$Video$Segment$length, segmentList)),
		segmentList);
};
var $elm_community$json_extra$Json$Decode$Extra$optionalField = F2(
	function (fieldName, decoder) {
		var finishDecoding = function (json) {
			var _v0 = A2(
				$elm$json$Json$Decode$decodeValue,
				A2($elm$json$Json$Decode$field, fieldName, $elm$json$Json$Decode$value),
				json);
			if (_v0.$ === 'Ok') {
				var val = _v0.a;
				return A2(
					$elm$json$Json$Decode$map,
					$elm$core$Maybe$Just,
					A2($elm$json$Json$Decode$field, fieldName, decoder));
			} else {
				return $elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing);
			}
		};
		return A2($elm$json$Json$Decode$andThen, finishDecoding, $elm$json$Json$Decode$value);
	});
var $elm_community$json_extra$Json$Decode$Extra$combine = A2(
	$elm$core$List$foldr,
	$elm$json$Json$Decode$map2($elm$core$List$cons),
	$elm$json$Json$Decode$succeed(_List_Nil));
var $elm$json$Json$Decode$index = _Json_decodeIndex;
var $elm_community$json_extra$Json$Decode$Extra$sequence = function (decoders) {
	return $elm_community$json_extra$Json$Decode$Extra$combine(
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (idx, dec) {
					return A2($elm$json$Json$Decode$index, idx, dec);
				}),
			decoders));
};
var $elm_community$json_extra$Json$Decode$Extra$indexedList = function (indexedDecoder) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (values) {
			return $elm_community$json_extra$Json$Decode$Extra$sequence(
				A2(
					$elm$core$List$map,
					indexedDecoder,
					A2(
						$elm$core$List$range,
						0,
						$elm$core$List$length(values) - 1)));
		},
		$elm$json$Json$Decode$list($elm$json$Json$Decode$value));
};
var $author$project$Data$Video$Frame$originalDecoder = function (index) {
	return A3(
		$elm$json$Json$Decode$map2,
		$author$project$Data$Video$Frame$Frame(index),
		A2($elm$json$Json$Decode$field, 'objectKey', $author$project$Data$File$Object$keyDecoder),
		A2($elm$json$Json$Decode$field, 'time', $elm$json$Json$Decode$int));
};
var $elm_community$list_extra$List$Extra$unconsLast = function (list) {
	var _v0 = $elm$core$List$reverse(list);
	if (!_v0.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var last_ = _v0.a;
		var rest = _v0.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				last_,
				$elm$core$List$reverse(rest)));
	}
};
var $author$project$Data$Video$Segment$originalDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (frames) {
		var _v0 = $elm_community$list_extra$List$Extra$unconsLast(frames);
		if (_v0.$ === 'Just') {
			var _v1 = _v0.a;
			var keyFrame = _v1.a;
			var others = _v1.b;
			return $elm$json$Json$Decode$succeed(
				A2($author$project$Data$Video$Segment$Segment, keyFrame, others));
		} else {
			return $elm$json$Json$Decode$fail('Expect at least one frame in a segment.');
		}
	},
	$elm_community$json_extra$Json$Decode$Extra$indexedList($author$project$Data$Video$Frame$originalDecoder));
var $author$project$Data$Project$Content$listFromOriginalDecoder = function () {
	var segmentListDecoder = A2(
		$elm$json$Json$Decode$map,
		$author$project$Data$Video$Segment$offsetIndicesOfFrames,
		$elm$json$Json$Decode$list(
			A2($elm$json$Json$Decode$field, 'frames', $author$project$Data$Video$Segment$originalDecoder)));
	var captionListDecoder = $elm$json$Json$Decode$list(
		A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'caption', $elm$json$Json$Decode$string));
	return A3($elm$json$Json$Decode$map2, $author$project$Data$Project$Content$interweaveToContentList, segmentListDecoder, captionListDecoder);
}();
var $author$project$Data$Project$contentDecoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			$elm$json$Json$Decode$array($author$project$Data$Project$Content$decoder),
			A2(
			$elm$json$Json$Decode$field,
			'extracted',
			A2($elm$json$Json$Decode$map, $elm$core$Array$fromList, $author$project$Data$Project$Content$listFromOriginalDecoder))
		]));
var $author$project$Data$Project$decoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'WorkingData',
	$author$project$Data$Project$contentDecoder,
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'Name',
		$elm$json$Json$Decode$string,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'Id',
			$elm$json$Json$Decode$string,
			$elm$json$Json$Decode$succeed($author$project$Data$Project$Project))));
var $author$project$Data$Project$ProjectNotFound = {$: 'ProjectNotFound'};
var $author$project$Data$Project$errorDecoder = function (statusCode) {
	return (statusCode === 404) ? $elm$json$Json$Decode$succeed($author$project$Data$Project$ProjectNotFound) : $elm$json$Json$Decode$fail('Not to be handled here.');
};
var $author$project$Request$Project$get = F2(
	function (handler, uuid) {
		return $author$project$API$Request$post(
			{
				decoder: A2($elm$json$Json$Decode$field, 'data', $author$project$Data$Project$decoder),
				errorDecoder: $author$project$Data$Project$errorDecoder,
				handler: handler,
				payload: $elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'Id',
							$elm$json$Json$Encode$string(uuid))
						])),
				timeout: $elm$core$Maybe$Just(10000),
				url: A2(
					$author$project$Request$Helper$apiNativeClient,
					_List_fromArray(
						['loaddata']),
					_List_Nil)
			});
	});
var $author$project$Page$Project$init = function (uuid) {
	return _Utils_Tuple2(
		$author$project$Page$Project$Loading(uuid),
		A2($author$project$Request$Project$get, $author$project$Page$Project$ProjectLoaded, uuid));
};
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$Port$removeBeforeUnloadPrompt = _Platform_outgoingPort(
	'removeBeforeUnloadPrompt',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $elm$browser$Browser$Navigation$replaceUrl = _Browser_replaceUrl;
var $elm$url$Url$Builder$absolute = F2(
	function (pathSegments, parameters) {
		return '/' + (A2($elm$core$String$join, '/', pathSegments) + $elm$url$Url$Builder$toQuery(parameters));
	});
var $author$project$Route$routeToString = function (targetRoute) {
	switch (targetRoute.$) {
		case 'Home':
			return A2($elm$url$Url$Builder$absolute, _List_Nil, _List_Nil);
		case 'ProjectPortal':
			return A2(
				$elm$url$Url$Builder$absolute,
				_List_fromArray(
					['project', 'portal']),
				_List_Nil);
		default:
			var uuid = targetRoute.a;
			return A2(
				$elm$url$Url$Builder$absolute,
				_List_fromArray(
					['project', uuid]),
				_List_Nil);
	}
};
var $author$project$Route$replaceUrl = function (key) {
	return A2(
		$elm$core$Basics$composeL,
		$elm$browser$Browser$Navigation$replaceUrl(key),
		$author$project$Route$routeToString);
};
var $author$project$Main$setRoute = F2(
	function (maybeRoute, model) {
		if (maybeRoute.$ === 'Nothing') {
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{currentPage: $author$project$Main$NotFound}),
				$elm$core$Platform$Cmd$none);
		} else {
			switch (maybeRoute.a.$) {
				case 'Home':
					var _v1 = maybeRoute.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{currentPage: $author$project$Main$Home}),
						A2($author$project$Route$replaceUrl, model.key, $author$project$Route$ProjectPortal));
				case 'ProjectPortal':
					var _v2 = maybeRoute.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{currentPage: $author$project$Main$ProjectPortal}),
						$author$project$Port$removeBeforeUnloadPrompt(_Utils_Tuple0));
				default:
					var uuid = maybeRoute.a.a;
					var _v3 = $author$project$Page$Project$init(uuid);
					var pageModel = _v3.a;
					var pageCmd = _v3.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								currentPage: $author$project$Main$Project(pageModel)
							}),
						A2($elm$core$Platform$Cmd$map, $author$project$Main$ProjectMsg, pageCmd));
			}
		}
	});
var $elm$core$Result$toMaybe = function (result) {
	if (result.$ === 'Ok') {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Main$init = F3(
	function (flagsValue, url, key) {
		var flags = A2(
			$elm$core$Maybe$withDefault,
			$author$project$Flags$empty,
			$elm$core$Result$toMaybe(
				A2($elm$json$Json$Decode$decodeValue, $author$project$Flags$flagsDecoder, flagsValue)));
		var _v0 = $author$project$Page$Project$Portal$init;
		var projectPortalModel = _v0.a;
		var projectPortalCmd = _v0.b;
		var _v1 = A2(
			$author$project$Main$setRoute,
			$author$project$Route$fromUrl(url),
			{currentPage: $author$project$Main$Blank, key: key, nativeClientStatus: $author$project$Data$NativeClient$Unknown, projectPortal: projectPortalModel, translations: flags.translations});
		var routeModel = _v1.a;
		var routeCmd = _v1.b;
		return _Utils_Tuple2(
			routeModel,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						routeCmd,
						A2($elm$core$Platform$Cmd$map, $author$project$Main$ProjectPortalMsg, projectPortalCmd),
						$author$project$Main$requestMetaOfNativeClient
					])));
	});
var $author$project$Main$SetRoute = function (a) {
	return {$: 'SetRoute', a: a};
};
var $author$project$Main$onUrlChange = A2($elm$core$Basics$composeL, $author$project$Main$SetRoute, $author$project$Route$fromUrl);
var $author$project$Main$ClickedLink = function (a) {
	return {$: 'ClickedLink', a: a};
};
var $author$project$Main$onUrlRequest = function (urlRequest) {
	return $author$project$Main$ClickedLink(urlRequest);
};
var $author$project$Main$RequestMetaOfNativeClient = {$: 'RequestMetaOfNativeClient'};
var $author$project$Main$WebsocketClosed = function (a) {
	return {$: 'WebsocketClosed', a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 'Every', a: a, b: b};
	});
var $elm$time$Time$State = F2(
	function (taggers, processes) {
		return {processes: processes, taggers: taggers};
	});
var $elm$time$Time$init = $elm$core$Task$succeed(
	A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty));
var $elm$time$Time$addMySub = F2(
	function (_v0, state) {
		var interval = _v0.a;
		var tagger = _v0.b;
		var _v1 = A2($elm$core$Dict$get, interval, state);
		if (_v1.$ === 'Nothing') {
			return A3(
				$elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _v1.a;
			return A3(
				$elm$core$Dict$insert,
				interval,
				A2($elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$setInterval = _Time_setInterval;
var $elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return $elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = $elm$core$Process$spawn(
				A2(
					$elm$time$Time$setInterval,
					interval,
					A2($elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					$elm$time$Time$spawnHelp,
					router,
					rest,
					A3($elm$core$Dict$insert, interval, id, processes));
			};
			return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var $elm$time$Time$onEffects = F3(
	function (router, subs, _v0) {
		var processes = _v0.processes;
		var rightStep = F3(
			function (_v6, id, _v7) {
				var spawns = _v7.a;
				var existing = _v7.b;
				var kills = _v7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						$elm$core$Task$andThen,
						function (_v5) {
							return kills;
						},
						$elm$core$Process$kill(id)));
			});
		var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _v4) {
				var spawns = _v4.a;
				var existing = _v4.b;
				var kills = _v4.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _v3) {
				var spawns = _v3.a;
				var existing = _v3.b;
				var kills = _v3.c;
				return _Utils_Tuple3(
					spawns,
					A3($elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _v1 = A6(
			$elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				$elm$core$Dict$empty,
				$elm$core$Task$succeed(_Utils_Tuple0)));
		var spawnList = _v1.a;
		var existingDict = _v1.b;
		var killTask = _v1.c;
		return A2(
			$elm$core$Task$andThen,
			function (newProcesses) {
				return $elm$core$Task$succeed(
					A2($elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _v0 = A2($elm$core$Dict$get, interval, state.taggers);
		if (_v0.$ === 'Nothing') {
			return $elm$core$Task$succeed(state);
		} else {
			var taggers = _v0.a;
			var tellTaggers = function (time) {
				return $elm$core$Task$sequence(
					A2(
						$elm$core$List$map,
						function (tagger) {
							return A2(
								$elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$succeed(state);
				},
				A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now));
		}
	});
var $elm$time$Time$subMap = F2(
	function (f, _v0) {
		var interval = _v0.a;
		var tagger = _v0.b;
		return A2(
			$elm$time$Time$Every,
			interval,
			A2($elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
var $elm$time$Time$subscription = _Platform_leaf('Time');
var $elm$time$Time$every = F2(
	function (interval, tagger) {
		return $elm$time$Time$subscription(
			A2($elm$time$Time$Every, interval, tagger));
	});
var $author$project$Data$NativeClient$isStatusNormal = function (status) {
	switch (status.$) {
		case 'Connected':
			return true;
		case 'Unknown':
			return true;
		default:
			return false;
	}
};
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Page$Project$DismissSavingResultPrompt = {$: 'DismissSavingResultPrompt'};
var $author$project$Page$Project$RedoProject = {$: 'RedoProject'};
var $author$project$Page$Project$SaveProject = function (a) {
	return {$: 'SaveProject', a: a};
};
var $author$project$Page$Project$UndoProject = {$: 'UndoProject'};
var $author$project$Data$Shortcut$KeyPress = F5(
	function (a, b, c, d, e) {
		return {$: 'KeyPress', a: a, b: b, c: c, d: d, e: e};
	});
var $author$project$Data$Shortcut$keyPressDecoder = A6(
	$elm$json$Json$Decode$map5,
	$author$project$Data$Shortcut$KeyPress,
	A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'ctrlKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'metaKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'shiftKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'altKey', $elm$json$Json$Decode$bool));
var $author$project$Page$Project$keyMsgDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (keyPress) {
		_v0$3:
		while (true) {
			if (keyPress.b) {
				switch (keyPress.a) {
					case 's':
						return $elm$json$Json$Decode$succeed(
							$author$project$Page$Project$SaveProject($elm$core$Maybe$Nothing));
					case 'z':
						if (!keyPress.d) {
							return $elm$json$Json$Decode$succeed($author$project$Page$Project$UndoProject);
						} else {
							break _v0$3;
						}
					case 'Z':
						if (keyPress.d) {
							return $elm$json$Json$Decode$succeed($author$project$Page$Project$RedoProject);
						} else {
							break _v0$3;
						}
					default:
						break _v0$3;
				}
			} else {
				break _v0$3;
			}
		}
		return $elm$json$Json$Decode$fail('not to be handled here');
	},
	$author$project$Data$Shortcut$keyPressDecoder);
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keydown');
var $author$project$Page$Project$subscriptions = function (model) {
	if (model.$ === 'Loaded') {
		var project = model.a;
		var substate = model.b;
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					$elm$browser$Browser$Events$onKeyDown($author$project$Page$Project$keyMsgDecoder),
					function () {
					var _v1 = substate.savingResult;
					if ((_v1.$ === 'Just') && (_v1.a.$ === 'Ok')) {
						return A2(
							$elm$time$Time$every,
							5000,
							function (_v2) {
								return $author$project$Page$Project$DismissSavingResultPrompt;
							});
					} else {
						return $elm$core$Platform$Sub$none;
					}
				}()
				]));
	} else {
		return $elm$core$Platform$Sub$none;
	}
};
var $author$project$Page$Project$Portal$ProcessingStatusUpdate = function (a) {
	return {$: 'ProcessingStatusUpdate', a: a};
};
var $author$project$Page$Project$Portal$VideoUploading = F2(
	function (a, b) {
		return {$: 'VideoUploading', a: a, b: b};
	});
var $author$project$Page$Project$Portal$ToggleExpertMode = {$: 'ToggleExpertMode'};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Page$Project$Portal$keyMsgDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (_v0) {
		var ctrlKey = _v0.a;
		var key = _v0.b;
		var _v1 = _Utils_Tuple2(ctrlKey, key);
		if (_v1.a && (_v1.b === 'e')) {
			return $elm$json$Json$Decode$succeed($author$project$Page$Project$Portal$ToggleExpertMode);
		} else {
			return $elm$json$Json$Decode$fail(key);
		}
	},
	A3(
		$elm$json$Json$Decode$map2,
		$elm$core$Tuple$pair,
		A2($elm$json$Json$Decode$field, 'ctrlKey', $elm$json$Json$Decode$bool),
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string)));
var $elm$browser$Browser$Events$onKeyUp = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keyup');
var $author$project$View$Uploader$ongoingTrackerIDs = $elm$core$List$filterMap(
	function (item) {
		if (item.$ === 'Uploading') {
			var trackerID = item.a;
			var sendingProgress = item.d;
			return (sendingProgress < 1) ? $elm$core$Maybe$Just(trackerID) : $elm$core$Maybe$Nothing;
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Port$processingStatusUpdate = _Platform_incomingPort('processingStatusUpdate', $elm$json$Json$Decode$value);
var $author$project$Data$Project$Concise$StatusUpdate = F2(
	function (uuid, status) {
		return {status: status, uuid: uuid};
	});
var $author$project$Data$Project$Concise$statusUpdateDecoder = A2(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
	$author$project$Data$Project$Concise$statusDecoder,
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'Id',
		$elm$json$Json$Decode$string,
		$elm$json$Json$Decode$succeed($author$project$Data$Project$Concise$StatusUpdate)));
var $elm$http$Http$track = F2(
	function (tracker, toMsg) {
		return $elm$http$Http$subscription(
			A2($elm$http$Http$MySub, tracker, toMsg));
	});
var $author$project$Page$Project$Portal$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				$elm$browser$Browser$Events$onKeyUp($author$project$Page$Project$Portal$keyMsgDecoder),
				$author$project$Port$processingStatusUpdate(
				A2(
					$elm$core$Basics$composeL,
					$author$project$Page$Project$Portal$ProcessingStatusUpdate,
					$elm$json$Json$Decode$decodeValue($author$project$Data$Project$Concise$statusUpdateDecoder))),
				$elm$core$Platform$Sub$batch(
				A2(
					$elm$core$List$map,
					function (trackerID) {
						return A2(
							$elm$http$Http$track,
							trackerID,
							$author$project$Page$Project$Portal$VideoUploading(trackerID));
					},
					$author$project$View$Uploader$ongoingTrackerIDs(model.items)))
			]));
};
var $author$project$Port$websocketClosed = _Platform_incomingPort('websocketClosed', $elm$json$Json$Decode$int);
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2(
				$elm$core$Platform$Sub$map,
				$author$project$Main$ProjectPortalMsg,
				$author$project$Page$Project$Portal$subscriptions(model.projectPortal)),
				$author$project$Port$websocketClosed($author$project$Main$WebsocketClosed),
				$author$project$Data$NativeClient$isStatusNormal(model.nativeClientStatus) ? $elm$core$Platform$Sub$none : A2(
				$elm$time$Time$every,
				2000,
				function (_v0) {
					return $author$project$Main$RequestMetaOfNativeClient;
				}),
				function () {
				var _v1 = model.currentPage;
				if (_v1.$ === 'Project') {
					var subModel = _v1.a;
					return A2(
						$elm$core$Platform$Sub$map,
						$author$project$Main$ProjectMsg,
						$author$project$Page$Project$subscriptions(subModel));
				} else {
					return $elm$core$Platform$Sub$none;
				}
			}()
			]));
};
var $author$project$Port$connectSocket = _Platform_outgoingPort(
	'connectSocket',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $author$project$Data$NativeClient$Disconnected = {$: 'Disconnected'};
var $author$project$Data$NativeClient$Incompatible = {$: 'Incompatible'};
var $author$project$Data$NativeClient$PlatformError = function (a) {
	return {$: 'PlatformError', a: a};
};
var $author$project$Data$NativeClient$VersionUnknown = {$: 'VersionUnknown'};
var $author$project$Data$NativeClient$statusFromError = function (error) {
	switch (error.$) {
		case 'BadUrl':
			return $author$project$Data$NativeClient$PlatformError('bad URL requested');
		case 'Timeout':
			return $author$project$Data$NativeClient$VersionUnknown;
		case 'NetworkError':
			return $author$project$Data$NativeClient$Disconnected;
		case 'BadStatus':
			var statusCode = error.a;
			var statusError = error.b;
			return $author$project$Data$NativeClient$VersionUnknown;
		default:
			var statusCode = error.a;
			var decodeError = error.b;
			return $author$project$Data$NativeClient$Incompatible;
	}
};
var $author$project$Data$NativeClient$Connected = function (a) {
	return {$: 'Connected', a: a};
};
var $author$project$Data$NativeClient$statusFromMeta = function (meta) {
	return meta.isCompatible ? $author$project$Data$NativeClient$Connected(meta.version) : $author$project$Data$NativeClient$Incompatible;
};
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 'Nothing') {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 'Nothing') {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.protocol;
		if (_v0.$ === 'Http') {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.fragment,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.query,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.port_,
					_Utils_ap(http, url.host)),
				url.path)));
};
var $author$project$Page$Project$Loaded = F2(
	function (a, b) {
		return {$: 'Loaded', a: a, b: b};
	});
var $author$project$Page$Project$ProjectFailedToLoad = function (a) {
	return {$: 'ProjectFailedToLoad', a: a};
};
var $author$project$Page$Project$RequestProjectSize = {$: 'RequestProjectSize'};
var $author$project$Data$UndoList$UndoList = F3(
	function (past, present, future) {
		return {future: future, past: past, present: present};
	});
var $author$project$Data$UndoList$fresh = function (state) {
	return A3($author$project$Data$UndoList$UndoList, _List_Nil, state, _List_Nil);
};
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Data$Project$Content$maxAssignedIndex = function (sections) {
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$maximum(
			A2(
				$elm$core$List$filterMap,
				function (section) {
					if (section.$ === 'FromUser') {
						var index = section.a;
						return $elm$core$Maybe$Just(index);
					} else {
						return $elm$core$Maybe$Nothing;
					}
				},
				sections)));
};
var $author$project$Page$Project$initLoaded = function (project) {
	return A2(
		$author$project$Page$Project$Loaded,
		$author$project$Data$UndoList$fresh(project),
		{
			baseExportedTo: $elm$core$Maybe$Nothing,
			confirmNavigatingAway: $elm$core$Maybe$Nothing,
			exportingError: $elm$core$Maybe$Nothing,
			frameToPreview: $elm$core$Maybe$Nothing,
			isExportingInProgress: false,
			isPreviewing: false,
			lastSaved: project,
			movingOver: $elm$core$Maybe$Nothing,
			movingSection: $elm$core$Maybe$Nothing,
			pendingGifJobs: $elm$core$Set$empty,
			projectSize: $elm$core$Maybe$Nothing,
			savingResult: $elm$core$Maybe$Nothing,
			splittingSection: $elm$core$Maybe$Nothing,
			textBeingEdited: $elm$core$Maybe$Nothing,
			userContentIndexToAssign: 1 + $author$project$Data$Project$Content$maxAssignedIndex(
				$elm$core$Array$toList(project.workingData))
		});
};
var $author$project$Page$Project$GifProcessed = F2(
	function (a, b) {
		return {$: 'GifProcessed', a: a, b: b};
	});
var $author$project$Page$Project$ProjectExported = function (a) {
	return {$: 'ProjectExported', a: a};
};
var $author$project$Page$Project$ProjectSaved = F2(
	function (a, b) {
		return {$: 'ProjectSaved', a: a, b: b};
	});
var $author$project$Page$Project$ProjectSizeRequested = function (a) {
	return {$: 'ProjectSizeRequested', a: a};
};
var $author$project$Port$addBeforeUnloadPrompt = _Platform_outgoingPort(
	'addBeforeUnloadPrompt',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $author$project$Data$Project$SegmentContent$getSegment = function (content) {
	if (content.$ === 'FrameSequence') {
		var segment = content.a;
		return segment;
	} else {
		var segment = content.b;
		return segment;
	}
};
var $author$project$Data$Project$SegmentContent$addGif = F2(
	function (gif, content) {
		return A2(
			$author$project$Data$Project$SegmentContent$GifFromVideo,
			gif,
			$author$project$Data$Project$SegmentContent$getSegment(content));
	});
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Data$Video$Segment$getInterval = F2(
	function (toInt, _v0) {
		var keyFrame = _v0.a;
		var others = _v0.b;
		var timeSequence = A2(
			$elm$core$List$map,
			toInt,
			A2($elm$core$List$cons, keyFrame, others));
		var timeOfKeyFrame = toInt(keyFrame);
		var withFallback = $elm$core$Maybe$withDefault(timeOfKeyFrame);
		return _Utils_Tuple2(
			withFallback(
				$elm$core$List$minimum(timeSequence)),
			withFallback(
				$elm$core$List$maximum(timeSequence)));
	});
var $author$project$Data$Video$Frame$getTime = function (_v0) {
	var time = _v0.time;
	return time;
};
var $author$project$Data$Video$Segment$getTimeInterval = $author$project$Data$Video$Segment$getInterval($author$project$Data$Video$Frame$getTime);
var $author$project$Data$Project$SegmentContent$getTimeInterval = A2($elm$core$Basics$composeR, $author$project$Data$Project$SegmentContent$getSegment, $author$project$Data$Video$Segment$getTimeInterval);
var $elm$core$Elm$JsArray$map = _JsArray_map;
var $elm$core$Array$map = F2(
	function (func, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = function (node) {
			if (node.$ === 'SubTree') {
				var subTree = node.a;
				return $elm$core$Array$SubTree(
					A2($elm$core$Elm$JsArray$map, helper, subTree));
			} else {
				var values = node.a;
				return $elm$core$Array$Leaf(
					A2($elm$core$Elm$JsArray$map, func, values));
			}
		};
		return A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A2($elm$core$Elm$JsArray$map, helper, tree),
			A2($elm$core$Elm$JsArray$map, func, tail));
	});
var $author$project$Data$Project$Content$addGifByTimeInterval = F3(
	function (interval, gif, contents) {
		return A2(
			$elm$core$Array$map,
			function (content) {
				if (content.$ === 'FromSegment') {
					var isContentHidden = content.a;
					var segmentContent = content.b;
					return _Utils_eq(
						$author$project$Data$Project$SegmentContent$getTimeInterval(segmentContent),
						interval) ? A2(
						$author$project$Data$Project$Content$FromSegment,
						isContentHidden,
						A2($author$project$Data$Project$SegmentContent$addGif, gif, segmentContent)) : content;
				} else {
					return content;
				}
			},
			contents);
	});
var $elm$core$Array$appendHelpTree = F2(
	function (toAppend, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		var itemsToAppend = $elm$core$Elm$JsArray$length(toAppend);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(tail)) - itemsToAppend;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, tail, toAppend);
		var newArray = A2($elm$core$Array$unsafeReplaceTail, appended, array);
		if (notAppended < 0) {
			var nextTail = A3($elm$core$Elm$JsArray$slice, notAppended, itemsToAppend, toAppend);
			return A2($elm$core$Array$unsafeReplaceTail, nextTail, newArray);
		} else {
			return newArray;
		}
	});
var $elm$core$Array$builderFromArray = function (_v0) {
	var len = _v0.a;
	var tree = _v0.c;
	var tail = _v0.d;
	var helper = F2(
		function (node, acc) {
			if (node.$ === 'SubTree') {
				var subTree = node.a;
				return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
			} else {
				return A2($elm$core$List$cons, node, acc);
			}
		});
	return {
		nodeList: A3($elm$core$Elm$JsArray$foldl, helper, _List_Nil, tree),
		nodeListSize: (len / $elm$core$Array$branchFactor) | 0,
		tail: tail
	};
};
var $elm$core$Array$append = F2(
	function (a, _v0) {
		var aTail = a.d;
		var bLen = _v0.a;
		var bTree = _v0.c;
		var bTail = _v0.d;
		if (_Utils_cmp(bLen, $elm$core$Array$branchFactor * 4) < 1) {
			var foldHelper = F2(
				function (node, array) {
					if (node.$ === 'SubTree') {
						var tree = node.a;
						return A3($elm$core$Elm$JsArray$foldl, foldHelper, array, tree);
					} else {
						var leaf = node.a;
						return A2($elm$core$Array$appendHelpTree, leaf, array);
					}
				});
			return A2(
				$elm$core$Array$appendHelpTree,
				bTail,
				A3($elm$core$Elm$JsArray$foldl, foldHelper, a, bTree));
		} else {
			var foldHelper = F2(
				function (node, builder) {
					if (node.$ === 'SubTree') {
						var tree = node.a;
						return A3($elm$core$Elm$JsArray$foldl, foldHelper, builder, tree);
					} else {
						var leaf = node.a;
						return A2($elm$core$Array$appendHelpBuilder, leaf, builder);
					}
				});
			return A2(
				$elm$core$Array$builderToArray,
				true,
				A2(
					$elm$core$Array$appendHelpBuilder,
					bTail,
					A3(
						$elm$core$Elm$JsArray$foldl,
						foldHelper,
						$elm$core$Array$builderFromArray(a),
						bTree)));
		}
	});
var $author$project$Data$Project$UserContent$emptyPlainText = $author$project$Data$Project$UserContent$PlainText('');
var $author$project$Data$File$Object$Remote = function (a) {
	return {$: 'Remote', a: a};
};
var $elm$core$String$reverse = _String_reverse;
var $author$project$Util$trimTrailingSlash = function (str) {
	var _v0 = $elm$core$String$uncons(
		$elm$core$String$reverse(str));
	if ((_v0.$ === 'Just') && ('/' === _v0.a.a.valueOf())) {
		var _v1 = _v0.a;
		var trimmed = _v1.b;
		return $elm$core$String$reverse(trimmed);
	} else {
		return str;
	}
};
var $author$project$Data$File$Object$remoteBaseDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (str) {
		var _v0 = $elm$url$Url$fromString(str);
		if (_v0.$ === 'Just') {
			var url = _v0.a;
			return $elm$json$Json$Decode$succeed(
				$author$project$Data$File$Object$Remote(url));
		} else {
			return $elm$json$Json$Decode$fail('not a valid URL');
		}
	},
	A2($elm$json$Json$Decode$map, $author$project$Util$trimTrailingSlash, $elm$json$Json$Decode$string));
var $author$project$Data$Project$HtmlExport$decoder = A2($elm$json$Json$Decode$field, 'Uri', $author$project$Data$File$Object$remoteBaseDecoder);
var $author$project$Data$Video$Segment$getKeyFrame = function (_v0) {
	var keyFrame = _v0.a;
	return keyFrame;
};
var $author$project$Data$Project$SegmentContent$getMedia = function (content) {
	if (content.$ === 'FrameSequence') {
		var segment = content.a;
		return $author$project$Data$Video$Segment$getKeyFrame(segment).localObjectKey;
	} else {
		var gif = content.a;
		return gif.localObjectKey;
	}
};
var $author$project$Data$Project$UserContent$getMedia = function (content) {
	if (content.$ === 'PlainText') {
		return $elm$core$Maybe$Nothing;
	} else {
		var objectKey = content.a;
		return $elm$core$Maybe$Just(objectKey);
	}
};
var $author$project$Data$Project$Content$getMedia = function (content) {
	_v0$2:
	while (true) {
		if (content.$ === 'FromSegment') {
			if (!content.a) {
				var segmentContent = content.b;
				return $elm$core$Maybe$Just(
					$author$project$Data$Project$SegmentContent$getMedia(segmentContent));
			} else {
				break _v0$2;
			}
		} else {
			if (!content.b) {
				var userContent = content.c;
				return $author$project$Data$Project$UserContent$getMedia(userContent);
			} else {
				break _v0$2;
			}
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$Data$File$Object$keyStrEncoder = function (_v0) {
	var path = _v0.a;
	return $elm$json$Json$Encode$string(
		A2($elm$core$String$join, '/', path));
};
var $author$project$Data$Project$HtmlExport$encoder = function (_v0) {
	var uuid = _v0.uuid;
	var workingData = _v0.workingData;
	var mediaList = A2(
		$elm$core$List$filterMap,
		$author$project$Data$Project$Content$getMedia,
		$elm$core$Array$toList(workingData));
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'Id',
				$elm$json$Json$Encode$string(uuid)),
				_Utils_Tuple2(
				'Assets',
				A2($elm$json$Json$Encode$list, $author$project$Data$File$Object$keyStrEncoder, mediaList))
			]));
};
var $author$project$Data$Project$HtmlExport$SourceFileNotFound = {$: 'SourceFileNotFound'};
var $author$project$Data$Project$HtmlExport$errorDecoder = function (statusCode) {
	return (statusCode === 404) ? $elm$json$Json$Decode$succeed($author$project$Data$Project$HtmlExport$SourceFileNotFound) : $elm$json$Json$Decode$fail('not handled here');
};
var $author$project$Request$Project$export = F2(
	function (handler, project) {
		return $author$project$API$Request$post(
			{
				decoder: $author$project$Data$Project$HtmlExport$decoder,
				errorDecoder: $author$project$Data$Project$HtmlExport$errorDecoder,
				handler: handler,
				payload: $author$project$Data$Project$HtmlExport$encoder(project),
				timeout: $elm$core$Maybe$Just(30000),
				url: A2(
					$author$project$Request$Helper$apiNativeClient,
					_List_fromArray(
						['export']),
					_List_Nil)
			});
	});
var $author$project$Util$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var $author$project$Data$Project$HtmlExport$sizeDecoder = A2($elm$json$Json$Decode$field, 'FileSize', $author$project$Data$FileSize$byteDecoder);
var $author$project$Request$Project$getSize = F2(
	function (handler, project) {
		return $author$project$API$Request$post(
			{
				decoder: $author$project$Data$Project$HtmlExport$sizeDecoder,
				errorDecoder: $author$project$Data$Project$HtmlExport$errorDecoder,
				handler: handler,
				payload: $author$project$Data$Project$HtmlExport$encoder(project),
				timeout: $elm$core$Maybe$Just(30000),
				url: A2(
					$author$project$Request$Helper$apiNativeClient,
					_List_fromArray(
						['estimate']),
					_List_Nil)
			});
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $author$project$Data$Video$Frame$getIndex = function (_v0) {
	var index = _v0.index;
	return index;
};
var $elm$core$List$sortBy = _List_sortBy;
var $author$project$Data$Video$Segment$merge = F2(
	function (_v0, _v1) {
		var keyFrame1 = _v0.a;
		var others1 = _v0.b;
		var keyFrame2 = _v1.a;
		var others2 = _v1.b;
		return A2(
			$author$project$Data$Video$Segment$Segment,
			keyFrame2,
			A2(
				$elm$core$List$sortBy,
				$author$project$Data$Video$Frame$getIndex,
				A2(
					$elm$core$List$cons,
					keyFrame1,
					_Utils_ap(others1, others2))));
	});
var $author$project$Data$Project$SegmentContent$merge = F2(
	function (content1, content2) {
		return $author$project$Data$Project$SegmentContent$fromSegment(
			A2(
				$author$project$Data$Video$Segment$merge,
				$author$project$Data$Project$SegmentContent$getSegment(content1),
				$author$project$Data$Project$SegmentContent$getSegment(content2)));
	});
var $author$project$Data$Project$Content$isMergeAgreed = F3(
	function (contents, _v0, supposed) {
		var toIndex = _v0.a;
		var fromIndex = _v0.b;
		var _v1 = _Utils_Tuple2(
			A2($elm$core$Array$get, toIndex, contents),
			A2($elm$core$Array$get, fromIndex, contents));
		if ((((((_v1.a.$ === 'Just') && (_v1.a.a.$ === 'FromSegment')) && (!_v1.a.a.a)) && (_v1.b.$ === 'Just')) && (_v1.b.a.$ === 'FromSegment')) && (!_v1.b.a.a)) {
			var _v2 = _v1.a.a;
			var segmentContent1 = _v2.b;
			var _v3 = _v1.b.a;
			var segmentContent2 = _v3.b;
			return _Utils_eq(
				supposed,
				A2($author$project$Data$Project$SegmentContent$merge, segmentContent1, segmentContent2));
		} else {
			return false;
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm_community$array_extra$Array$Extra$splitAt = F2(
	function (index, xs) {
		var len = $elm$core$Array$length(xs);
		var _v0 = _Utils_Tuple2(
			index > 0,
			_Utils_cmp(index, len) < 0);
		if (_v0.a) {
			if (_v0.b) {
				return _Utils_Tuple2(
					A3($elm$core$Array$slice, 0, index, xs),
					A3($elm$core$Array$slice, index, len, xs));
			} else {
				return _Utils_Tuple2(xs, $elm$core$Array$empty);
			}
		} else {
			if (_v0.b) {
				return _Utils_Tuple2($elm$core$Array$empty, xs);
			} else {
				return _Utils_Tuple2($elm$core$Array$empty, $elm$core$Array$empty);
			}
		}
	});
var $elm_community$array_extra$Array$Extra$removeAt = F2(
	function (index, xs) {
		var _v0 = A2($elm_community$array_extra$Array$Extra$splitAt, index, xs);
		var xs0 = _v0.a;
		var xs1 = _v0.b;
		var len1 = $elm$core$Array$length(xs1);
		return (!len1) ? xs0 : A2(
			$elm$core$Array$append,
			xs0,
			A3($elm$core$Array$slice, 1, len1, xs1));
	});
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $author$project$Data$Project$Content$mergeElements = F5(
	function (mergeReversely, toIndex, fromIndex, mergedContent, contents) {
		mergeElements:
		while (true) {
			if (mergeReversely) {
				var $temp$mergeReversely = false,
					$temp$toIndex = fromIndex,
					$temp$fromIndex = toIndex,
					$temp$mergedContent = mergedContent,
					$temp$contents = contents;
				mergeReversely = $temp$mergeReversely;
				toIndex = $temp$toIndex;
				fromIndex = $temp$fromIndex;
				mergedContent = $temp$mergedContent;
				contents = $temp$contents;
				continue mergeElements;
			} else {
				return A2(
					$elm_community$array_extra$Array$Extra$removeAt,
					fromIndex,
					A3(
						$elm$core$Array$set,
						toIndex,
						$author$project$Data$Project$Content$fromSegmentContent(mergedContent),
						contents));
			}
		}
	});
var $author$project$Util$boolToInt = function (_boolean) {
	return _boolean ? 1 : 0;
};
var $author$project$Util$moveArrayElement = F3(
	function (indexFrom, indexTo, xs) {
		var newIndexToInsertBefore = indexTo - $author$project$Util$boolToInt(
			_Utils_cmp(indexFrom, indexTo) < 0);
		var _v0 = A2(
			$elm_community$array_extra$Array$Extra$splitAt,
			newIndexToInsertBefore,
			A2($elm_community$array_extra$Array$Extra$removeAt, indexFrom, xs));
		var before = _v0.a;
		var after = _v0.b;
		var _v1 = A2($elm$core$Array$get, indexFrom, xs);
		if (_v1.$ === 'Just') {
			var sectionToMove = _v1.a;
			return A2(
				$elm$core$Array$append,
				A2($elm$core$Array$push, sectionToMove, before),
				after);
		} else {
			return xs;
		}
	});
var $author$project$Data$UndoList$new = F2(
	function (event, _v0) {
		var past = _v0.past;
		var present = _v0.present;
		return A3(
			$author$project$Data$UndoList$UndoList,
			A2($elm$core$List$cons, present, past),
			event,
			_List_Nil);
	});
var $author$project$Data$Video$Gif$IntervalTooSmall = {$: 'IntervalTooSmall'};
var $author$project$Data$Video$Gif$SourceFileNotFound = {$: 'SourceFileNotFound'};
var $author$project$Data$Video$Gif$errorDecoder = function (statusCode) {
	return (statusCode === 404) ? $elm$json$Json$Decode$succeed($author$project$Data$Video$Gif$SourceFileNotFound) : A2(
		$elm$json$Json$Decode$andThen,
		function (str) {
			if (str === 'too small') {
				return $elm$json$Json$Decode$succeed($author$project$Data$Video$Gif$IntervalTooSmall);
			} else {
				return $elm$json$Json$Decode$fail('Error not to be handled here.');
			}
		},
		A2($elm$json$Json$Decode$field, 'interval', $elm$json$Json$Decode$string));
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$Data$Video$Gif$processConfigEncoder = F2(
	function (uuid, _v0) {
		var start = _v0.a;
		var end = _v0.b;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'Id',
					$elm$json$Json$Encode$string(uuid)),
					_Utils_Tuple2(
					'Start',
					$elm$json$Json$Encode$int(
						A2($elm$core$Basics$min, start, end))),
					_Utils_Tuple2(
					'End',
					$elm$json$Json$Encode$int(
						A2($elm$core$Basics$max, start, end))),
					_Utils_Tuple2(
					'Width',
					$elm$json$Json$Encode$int(640))
				]));
	});
var $author$project$Data$Video$Gif$processedDecoder = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Data$Video$Gif$Gif,
	A2($elm$json$Json$Decode$field, 'Uri', $author$project$Data$File$Object$keyDecoder),
	A2($elm$json$Json$Decode$field, 'FileSize', $author$project$Data$FileSize$byteDecoder));
var $author$project$Request$Gif$process = F3(
	function (handler, uuid, _v0) {
		var start = _v0.a;
		var end = _v0.b;
		return $author$project$API$Request$post(
			{
				decoder: $author$project$Data$Video$Gif$processedDecoder,
				errorDecoder: $author$project$Data$Video$Gif$errorDecoder,
				handler: handler(
					_Utils_Tuple2(start, end)),
				payload: A2(
					$author$project$Data$Video$Gif$processConfigEncoder,
					uuid,
					_Utils_Tuple2(start, end)),
				timeout: $elm$core$Maybe$Just(10000),
				url: A2(
					$author$project$Request$Helper$apiNativeClient,
					_List_fromArray(
						['gif']),
					_List_Nil)
			});
	});
var $author$project$Page$Project$ChangeBeforeUnloadPrompt = {$: 'ChangeBeforeUnloadPrompt'};
var $author$project$Page$Project$projectChanged = $elm$core$Platform$Cmd$batch(
	_List_fromArray(
		[
			A2(
			$elm$core$Task$perform,
			function (_v0) {
				return $author$project$Page$Project$RequestProjectSize;
			},
			$elm$core$Task$succeed(_Utils_Tuple0)),
			A2(
			$elm$core$Task$perform,
			function (_v1) {
				return $author$project$Page$Project$ChangeBeforeUnloadPrompt;
			},
			$elm$core$Task$succeed(_Utils_Tuple0))
		]));
var $author$project$Route$pushUrl = function (key) {
	return A2(
		$elm$core$Basics$composeL,
		$elm$browser$Browser$Navigation$pushUrl(key),
		$author$project$Route$routeToString);
};
var $author$project$Data$UndoList$redo = function (_v0) {
	redo:
	while (true) {
		var past = _v0.past;
		var present = _v0.present;
		var future = _v0.future;
		if (!future.b) {
			return A3($author$project$Data$UndoList$UndoList, past, present, future);
		} else {
			var x = future.a;
			var xs = future.b;
			if (_Utils_eq(x, present)) {
				var $temp$_v0 = A3($author$project$Data$UndoList$UndoList, past, x, xs);
				_v0 = $temp$_v0;
				continue redo;
			} else {
				return A3(
					$author$project$Data$UndoList$UndoList,
					A2($elm$core$List$cons, present, past),
					x,
					xs);
			}
		}
	}
};
var $author$project$Port$redoTrix = _Platform_outgoingPort(
	'redoTrix',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $elm$core$Set$remove = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$remove, key, dict));
	});
var $author$project$Data$UndoList$replace = F2(
	function (event, _v0) {
		var past = _v0.past;
		return A3($author$project$Data$UndoList$UndoList, past, event, _List_Nil);
	});
var $elm$json$Json$Encode$array = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$Array$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$json$Json$Encode$float = _Json_wrap;
var $author$project$Data$FileSize$factor = 1024;
var $author$project$Data$FileSize$toByte = function (fileSize) {
	switch (fileSize.$) {
		case 'Bit':
			var n = fileSize.a;
			return n / 8;
		case 'Byte':
			var x = fileSize.a;
			return x;
		case 'Kibibyte':
			var x = fileSize.a;
			return x * $author$project$Data$FileSize$factor;
		default:
			var x = fileSize.a;
			return (x * $author$project$Data$FileSize$factor) * $author$project$Data$FileSize$factor;
	}
};
var $author$project$Data$FileSize$byteEncoder = A2($elm$core$Basics$composeR, $author$project$Data$FileSize$toByte, $elm$json$Json$Encode$float);
var $author$project$Data$File$Object$keyEncoder = function (_v0) {
	var path = _v0.a;
	return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, path);
};
var $author$project$Data$Video$Gif$encoder = function (gif) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'localObjectKey',
				$author$project$Data$File$Object$keyEncoder(gif.localObjectKey)),
				_Utils_Tuple2(
				'fileSize',
				$author$project$Data$FileSize$byteEncoder(gif.fileSize))
			]));
};
var $author$project$Data$Video$Frame$encoder = function (frame) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'index',
				$elm$json$Json$Encode$int(frame.index)),
				_Utils_Tuple2(
				'objectKey',
				$author$project$Data$File$Object$keyEncoder(frame.localObjectKey)),
				_Utils_Tuple2(
				'time',
				$elm$json$Json$Encode$int(frame.time))
			]));
};
var $author$project$Data$Video$Segment$encoder = function (_v0) {
	var keyFrame = _v0.a;
	var others = _v0.b;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'keyFrame',
				$author$project$Data$Video$Frame$encoder(keyFrame)),
				_Utils_Tuple2(
				'others',
				A2($elm$json$Json$Encode$list, $author$project$Data$Video$Frame$encoder, others))
			]));
};
var $author$project$Data$Project$SegmentContent$getGif = function (content) {
	if (content.$ === 'FrameSequence') {
		var maybeGif = content.b;
		return maybeGif;
	} else {
		var gif = content.a;
		return $elm$core$Maybe$Just(gif);
	}
};
var $elm_community$json_extra$Json$Encode$Extra$maybe = function (encoder) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Maybe$map(encoder),
		$elm$core$Maybe$withDefault($elm$json$Json$Encode$null));
};
var $author$project$Data$Project$SegmentContent$typeEncoder = function (content) {
	if (content.$ === 'FrameSequence') {
		return $elm$json$Json$Encode$string('frame sequence');
	} else {
		return $elm$json$Json$Encode$string('GIF');
	}
};
var $author$project$Data$Project$SegmentContent$encoder = function (content) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'displayMode',
				$author$project$Data$Project$SegmentContent$typeEncoder(content)),
				_Utils_Tuple2(
				'segment',
				$author$project$Data$Video$Segment$encoder(
					$author$project$Data$Project$SegmentContent$getSegment(content))),
				_Utils_Tuple2(
				'gif',
				A2(
					$elm_community$json_extra$Json$Encode$Extra$maybe,
					$author$project$Data$Video$Gif$encoder,
					$author$project$Data$Project$SegmentContent$getGif(content)))
			]));
};
var $author$project$Data$Project$UserContent$encoder = function (userContent) {
	if (userContent.$ === 'PlainText') {
		var content = userContent.a;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'plainText',
					$elm$json$Json$Encode$string(content))
				]));
	} else {
		var objectKey = userContent.a;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'picture',
					$author$project$Data$File$Object$keyEncoder(objectKey))
				]));
	}
};
var $author$project$Data$Project$Content$encoder = function (content) {
	if (content.$ === 'FromSegment') {
		var isContentHidden = content.a;
		var segmentContent = content.b;
		var contentValue = $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'isHidden',
					$elm$json$Json$Encode$bool(isContentHidden)),
					_Utils_Tuple2(
					'content',
					$author$project$Data$Project$SegmentContent$encoder(segmentContent))
				]));
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2('fromSegment', contentValue)
				]));
	} else {
		var index = content.a;
		var isContentHidden = content.b;
		var userContent = content.c;
		var contentValue = $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'index',
					$elm$json$Json$Encode$int(index)),
					_Utils_Tuple2(
					'isHidden',
					$elm$json$Json$Encode$bool(isContentHidden)),
					_Utils_Tuple2(
					'content',
					$author$project$Data$Project$UserContent$encoder(userContent))
				]));
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2('fromUser', contentValue)
				]));
	}
};
var $author$project$Data$Project$workingDataEncoder = function (_v0) {
	var workingData = _v0.workingData;
	return A2($elm$json$Json$Encode$array, $author$project$Data$Project$Content$encoder, workingData);
};
var $author$project$Data$Project$Saving$encoder = function (project) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'Id',
				$elm$json$Json$Encode$string(project.uuid)),
				_Utils_Tuple2(
				'Data',
				$author$project$Data$Project$workingDataEncoder(project))
			]));
};
var $author$project$Data$Project$Saving$SourceFileNotFound = {$: 'SourceFileNotFound'};
var $author$project$Data$Project$Saving$errorDecoder = function (statusCode) {
	return (statusCode === 404) ? $elm$json$Json$Decode$succeed($author$project$Data$Project$Saving$SourceFileNotFound) : $elm$json$Json$Decode$fail('not to be handled here');
};
var $author$project$Request$Helper$whateverDecoder = $elm$json$Json$Decode$succeed(_Utils_Tuple0);
var $author$project$Request$Project$save = F2(
	function (handler, project) {
		return $author$project$API$Request$post(
			{
				decoder: $author$project$Request$Helper$whateverDecoder,
				errorDecoder: $author$project$Data$Project$Saving$errorDecoder,
				handler: handler,
				payload: $author$project$Data$Project$Saving$encoder(project),
				timeout: $elm$core$Maybe$Just(10000),
				url: A2(
					$author$project$Request$Helper$apiNativeClient,
					_List_fromArray(
						['save']),
					_List_Nil)
			});
	});
var $author$project$Port$scrollIntoView = _Platform_outgoingPort('scrollIntoView', $elm$json$Json$Encode$string);
var $author$project$Port$seekTime = _Platform_outgoingPort('seekTime', $elm$json$Json$Encode$int);
var $author$project$Data$Video$Segment$getAllFrames = function (_v0) {
	var keyFrame = _v0.a;
	var others = _v0.b;
	return A2(
		$elm$core$List$sortBy,
		$author$project$Data$Video$Frame$getIndex,
		A2($elm$core$List$cons, keyFrame, others));
};
var $elm_community$list_extra$List$Extra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$findIndex = $elm_community$list_extra$List$Extra$findIndexHelp(0);
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $elm_community$list_extra$List$Extra$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $elm_community$list_extra$List$Extra$splitWhen = F2(
	function (predicate, list) {
		return A2(
			$elm$core$Maybe$map,
			function (i) {
				return A2($elm_community$list_extra$List$Extra$splitAt, i, list);
			},
			A2($elm_community$list_extra$List$Extra$findIndex, predicate, list));
	});
var $author$project$Data$Video$Segment$setKeyFrame = F2(
	function (frameIndex, segment) {
		var _v0 = A2(
			$elm_community$list_extra$List$Extra$splitWhen,
			function (frame) {
				return _Utils_eq(
					$author$project$Data$Video$Frame$getIndex(frame),
					frameIndex);
			},
			$author$project$Data$Video$Segment$getAllFrames(segment));
		if (_v0.$ === 'Just') {
			if (_v0.a.b.b) {
				var _v1 = _v0.a;
				var before = _v1.a;
				var _v2 = _v1.b;
				var newKeyFrame = _v2.a;
				var after = _v2.b;
				return A2(
					$author$project$Data$Video$Segment$Segment,
					newKeyFrame,
					_Utils_ap(before, after));
			} else {
				var _v3 = _v0.a;
				return segment;
			}
		} else {
			return segment;
		}
	});
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $author$project$Util$uncurry = F2(
	function (f, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		return A2(f, a, b);
	});
var $author$project$Data$Video$Segment$splitAt = F2(
	function (frameIndex, _v0) {
		var keyFrame = _v0.a;
		var others = _v0.b;
		var _v1 = A2(
			$elm$core$List$partition,
			function (frame) {
				return _Utils_cmp(
					$author$project$Data$Video$Frame$getIndex(frame),
					frameIndex) < 0;
			},
			others);
		var before = _v1.a;
		var after = _v1.b;
		return (_Utils_cmp(
			$author$project$Data$Video$Frame$getIndex(keyFrame),
			frameIndex) > -1) ? A2(
			$elm$core$Maybe$map,
			A2(
				$author$project$Util$flip,
				$elm$core$Tuple$pair,
				A2($author$project$Data$Video$Segment$Segment, keyFrame, after)),
			A2(
				$elm$core$Maybe$map,
				$author$project$Util$uncurry($author$project$Data$Video$Segment$Segment),
				$elm_community$list_extra$List$Extra$unconsLast(before))) : A2(
			$elm$core$Maybe$map,
			$elm$core$Tuple$pair(
				A2($author$project$Data$Video$Segment$Segment, keyFrame, before)),
			A2(
				$elm$core$Maybe$map,
				$author$project$Util$uncurry($author$project$Data$Video$Segment$Segment),
				$elm_community$list_extra$List$Extra$unconsLast(after)));
	});
var $author$project$Data$Project$SegmentContent$toFrameSequence = function (content) {
	if (content.$ === 'GifFromVideo') {
		var gif = content.a;
		var segment = content.b;
		return A2(
			$author$project$Data$Project$SegmentContent$FrameSequence,
			segment,
			$elm$core$Maybe$Just(gif));
	} else {
		return content;
	}
};
var $author$project$Data$Project$SegmentContent$toGif = function (content) {
	if (content.$ === 'FrameSequence') {
		var segment = content.a;
		var maybeGif = content.b;
		return A2(
			$elm$core$Maybe$map,
			A2($author$project$Util$flip, $author$project$Data$Project$SegmentContent$GifFromVideo, segment),
			maybeGif);
	} else {
		return $elm$core$Maybe$Just(content);
	}
};
var $author$project$Data$Project$Content$toggleVisibility = function (content) {
	if (content.$ === 'FromSegment') {
		var isContentHidden = content.a;
		var segmentContent = content.b;
		return A2($author$project$Data$Project$Content$FromSegment, !isContentHidden, segmentContent);
	} else {
		var index = content.a;
		var isContentHidden = content.b;
		var userContent = content.c;
		return A3($author$project$Data$Project$Content$FromUser, index, !isContentHidden, userContent);
	}
};
var $author$project$Data$UndoList$undo = function (_v0) {
	undo:
	while (true) {
		var past = _v0.past;
		var present = _v0.present;
		var future = _v0.future;
		if (!past.b) {
			return A3($author$project$Data$UndoList$UndoList, past, present, future);
		} else {
			var x = past.a;
			var xs = past.b;
			if (_Utils_eq(x, present)) {
				var $temp$_v0 = A3($author$project$Data$UndoList$UndoList, xs, x, future);
				_v0 = $temp$_v0;
				continue undo;
			} else {
				return A3(
					$author$project$Data$UndoList$UndoList,
					xs,
					x,
					A2($elm$core$List$cons, present, future));
			}
		}
	}
};
var $author$project$Port$undoTrix = _Platform_outgoingPort(
	'undoTrix',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $elm_community$array_extra$Array$Extra$update = F3(
	function (n, f, a) {
		var element = A2($elm$core$Array$get, n, a);
		if (element.$ === 'Nothing') {
			return a;
		} else {
			var element_ = element.a;
			return A3(
				$elm$core$Array$set,
				n,
				f(element_),
				a);
		}
	});
var $author$project$Data$Project$SegmentContent$mapSegment = F2(
	function (f, content) {
		return A2(
			$author$project$Data$Project$SegmentContent$FrameSequence,
			f(
				$author$project$Data$Project$SegmentContent$getSegment(content)),
			$elm$core$Maybe$Nothing);
	});
var $author$project$Data$Project$Content$mapSegment = F2(
	function (f, content) {
		if (content.$ === 'FromSegment') {
			var isContentHidden = content.a;
			var segmentContent = content.b;
			return A2(
				$author$project$Data$Project$Content$FromSegment,
				isContentHidden,
				A2($author$project$Data$Project$SegmentContent$mapSegment, f, segmentContent));
		} else {
			return content;
		}
	});
var $author$project$Data$Project$Content$updateSegmentBy = F2(
	function (index, f) {
		return A2(
			$elm_community$array_extra$Array$Extra$update,
			index,
			$author$project$Data$Project$Content$mapSegment(f));
	});
var $author$project$Page$Project$updateLoaded = F4(
	function (key, msg, project, substate) {
		var present = project.present;
		var updateState = F2(
			function (updater, _v16) {
				var newState = _v16.a;
				var substate_ = _v16.b;
				var commands = _v16.c;
				return _Utils_Tuple3(
					A3($author$project$Util$flip, updater, project, newState),
					substate_,
					$elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[commands, $author$project$Page$Project$projectChanged])));
			});
		var replaceState = function (newState) {
			return _Utils_Tuple3(
				A3($author$project$Util$flip, $author$project$Data$UndoList$replace, project, newState),
				substate,
				$author$project$Page$Project$projectChanged);
		};
		var pushState = function (newState) {
			return _Utils_Tuple3(
				A3($author$project$Util$flip, $author$project$Data$UndoList$new, project, newState),
				substate,
				$author$project$Page$Project$projectChanged);
		};
		switch (msg.$) {
			case 'ConvertToGif':
				var index = msg.a;
				var _v1 = A2($elm$core$Array$get, index, present.workingData);
				if ((_v1.$ === 'Just') && (_v1.a.$ === 'FromSegment')) {
					var _v2 = _v1.a;
					var isHidden = _v2.a;
					var segmentContent = _v2.b;
					var timeInterval = $author$project$Data$Project$SegmentContent$getTimeInterval(segmentContent);
					var _v3 = $author$project$Data$Project$SegmentContent$toGif(segmentContent);
					if (_v3.$ === 'Just') {
						var converted = _v3.a;
						return pushState(
							_Utils_update(
								present,
								{
									workingData: A3(
										$elm$core$Array$set,
										index,
										A2($author$project$Data$Project$Content$FromSegment, isHidden, converted),
										present.workingData)
								}));
					} else {
						return _Utils_Tuple3(
							project,
							_Utils_update(
								substate,
								{
									pendingGifJobs: A2($elm$core$Set$insert, timeInterval, substate.pendingGifJobs)
								}),
							A3($author$project$Request$Gif$process, $author$project$Page$Project$GifProcessed, present.uuid, timeInterval));
					}
				} else {
					return _Utils_Tuple3(project, substate, $elm$core$Platform$Cmd$none);
				}
			case 'GifProcessed':
				if (msg.b.$ === 'Ok') {
					var timeInterval = msg.a;
					var gif = msg.b.a;
					return A2(
						updateState,
						$author$project$Data$UndoList$new,
						_Utils_Tuple3(
							_Utils_update(
								present,
								{
									workingData: A3($author$project$Data$Project$Content$addGifByTimeInterval, timeInterval, gif, present.workingData)
								}),
							_Utils_update(
								substate,
								{
									pendingGifJobs: A2($elm$core$Set$remove, timeInterval, substate.pendingGifJobs)
								}),
							$elm$core$Platform$Cmd$none));
				} else {
					var timeInterval = msg.a;
					var error = msg.b.a;
					return _Utils_Tuple3(
						project,
						_Utils_update(
							substate,
							{
								pendingGifJobs: A2($elm$core$Set$remove, timeInterval, substate.pendingGifJobs)
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'RevertGif':
				var index = msg.a;
				var _v4 = A2($elm$core$Array$get, index, present.workingData);
				if ((_v4.$ === 'Just') && (_v4.a.$ === 'FromSegment')) {
					var _v5 = _v4.a;
					var isHidden = _v5.a;
					var segmentContent = _v5.b;
					var updatedContent = A2(
						$author$project$Data$Project$Content$FromSegment,
						isHidden,
						$author$project$Data$Project$SegmentContent$toFrameSequence(segmentContent));
					return pushState(
						_Utils_update(
							present,
							{
								workingData: A3($elm$core$Array$set, index, updatedContent, present.workingData)
							}));
				} else {
					return _Utils_Tuple3(project, substate, $elm$core$Platform$Cmd$none);
				}
			case 'AddPlainTextAfter':
				var index = msg.a;
				var _v6 = A2($elm_community$array_extra$Array$Extra$splitAt, index + 1, present.workingData);
				var before = _v6.a;
				var after = _v6.b;
				var updatedWorkingData = A3(
					$author$project$Util$flip,
					$elm$core$Array$append,
					after,
					A3(
						$author$project$Util$flip,
						$elm$core$Array$push,
						before,
						A3($author$project$Data$Project$Content$FromUser, substate.userContentIndexToAssign, false, $author$project$Data$Project$UserContent$emptyPlainText)));
				return A2(
					updateState,
					$author$project$Data$UndoList$new,
					_Utils_Tuple3(
						_Utils_update(
							present,
							{workingData: updatedWorkingData}),
						_Utils_update(
							substate,
							{userContentIndexToAssign: substate.userContentIndexToAssign + 1}),
						$elm$core$Platform$Cmd$none));
			case 'ToggleContentVisibility':
				var index = msg.a;
				return pushState(
					_Utils_update(
						present,
						{
							workingData: A3($elm_community$array_extra$Array$Extra$update, index, $author$project$Data$Project$Content$toggleVisibility, present.workingData)
						}));
			case 'RemoveContent':
				var index = msg.a;
				return pushState(
					_Utils_update(
						present,
						{
							workingData: A2($elm_community$array_extra$Array$Extra$removeAt, index, present.workingData)
						}));
			case 'PreEdit':
				var index = msg.a;
				return A2(
					updateState,
					$author$project$Data$UndoList$new,
					_Utils_Tuple3(
						present,
						_Utils_update(
							substate,
							{
								textBeingEdited: $elm$core$Maybe$Just(index)
							}),
						$elm$core$Platform$Cmd$none));
			case 'EditPlainText':
				var index = msg.a;
				var plainText = msg.b;
				var _v7 = A2($elm$core$Array$get, index, present.workingData);
				if (((_v7.$ === 'Just') && (_v7.a.$ === 'FromUser')) && (!_v7.a.b)) {
					var _v8 = _v7.a;
					var userContentID = _v8.a;
					return replaceState(
						_Utils_update(
							present,
							{
								workingData: A3(
									$elm$core$Array$set,
									index,
									A2($author$project$Data$Project$Content$fromPlainText, userContentID, plainText),
									present.workingData)
							}));
				} else {
					return _Utils_Tuple3(project, substate, $elm$core$Platform$Cmd$none);
				}
			case 'FinishEditing':
				var index = msg.a;
				return _Utils_eq(
					$elm$core$Maybe$Just(index),
					substate.textBeingEdited) ? _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{textBeingEdited: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none) : _Utils_Tuple3(project, substate, $elm$core$Platform$Cmd$none);
			case 'PreviewAsCover':
				var frame = msg.a;
				return _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{
							frameToPreview: $elm$core$Maybe$Just(frame)
						}),
					$elm$core$Platform$Cmd$none);
			case 'StopPreviewingAsCover':
				var frame = msg.a;
				return _Utils_eq(
					$elm$core$Maybe$Just(frame),
					substate.frameToPreview) ? _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{frameToPreview: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none) : _Utils_Tuple3(project, substate, $elm$core$Platform$Cmd$none);
			case 'MergeSections':
				var toIndex = msg.a;
				var fromIndex = msg.b;
				var segmentContent = msg.c;
				return A3(
					$author$project$Data$Project$Content$isMergeAgreed,
					present.workingData,
					_Utils_Tuple2(toIndex, fromIndex),
					segmentContent) ? pushState(
					_Utils_update(
						present,
						{
							workingData: A5($author$project$Data$Project$Content$mergeElements, true, toIndex, fromIndex, segmentContent, present.workingData)
						})) : _Utils_Tuple3(project, substate, $elm$core$Platform$Cmd$none);
			case 'StartSplittingSection':
				var index = msg.a;
				return _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{
							splittingSection: $elm$core$Maybe$Just(index)
						}),
					$elm$core$Platform$Cmd$none);
			case 'StopSplittingSection':
				return _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{splittingSection: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			case 'SplitSection':
				var index = msg.a;
				var frameIndex = msg.b;
				var _v9 = A2($elm$core$Array$get, index, present.workingData);
				if (((_v9.$ === 'Just') && (_v9.a.$ === 'FromSegment')) && (!_v9.a.a)) {
					var _v10 = _v9.a;
					var segmentContent = _v10.b;
					var _v11 = A2(
						$author$project$Data$Video$Segment$splitAt,
						frameIndex,
						$author$project$Data$Project$SegmentContent$getSegment(segmentContent));
					if (_v11.$ === 'Just') {
						var _v12 = _v11.a;
						var first = _v12.a;
						var second = _v12.b;
						var _v13 = A2(
							$elm_community$array_extra$Array$Extra$splitAt,
							index + 1,
							A3(
								$author$project$Data$Project$Content$updateSegmentBy,
								index,
								function (_v14) {
									return first;
								},
								present.workingData));
						var before = _v13.a;
						var after = _v13.b;
						var updatedWorkingData = A3(
							$author$project$Util$flip,
							$elm$core$Array$append,
							after,
							A3(
								$author$project$Util$flip,
								$elm$core$Array$push,
								before,
								$author$project$Data$Project$Content$fromSegment(second)));
						return A2(
							updateState,
							$author$project$Data$UndoList$new,
							_Utils_Tuple3(
								_Utils_update(
									present,
									{workingData: updatedWorkingData}),
								_Utils_update(
									substate,
									{splittingSection: $elm$core$Maybe$Nothing}),
								$elm$core$Platform$Cmd$none));
					} else {
						return _Utils_Tuple3(project, substate, $elm$core$Platform$Cmd$none);
					}
				} else {
					return _Utils_Tuple3(project, substate, $elm$core$Platform$Cmd$none);
				}
			case 'StartMovingSection':
				var index = msg.a;
				return _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{
							movingSection: $elm$core$Maybe$Just(index)
						}),
					$elm$core$Platform$Cmd$none);
			case 'StopMovingSection':
				return _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{movingOver: $elm$core$Maybe$Nothing, movingSection: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			case 'MoveSection':
				var indexFrom = msg.a;
				var indexToInsertBefore = msg.b;
				return A2(
					updateState,
					$author$project$Data$UndoList$new,
					_Utils_Tuple3(
						_Utils_update(
							present,
							{
								workingData: A3($author$project$Util$moveArrayElement, indexFrom, indexToInsertBefore, present.workingData)
							}),
						_Utils_update(
							substate,
							{movingOver: $elm$core$Maybe$Nothing, movingSection: $elm$core$Maybe$Nothing}),
						$elm$core$Platform$Cmd$none));
			case 'MovingOver':
				var index = msg.a;
				return _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{
							movingOver: $elm$core$Maybe$Just(index)
						}),
					$elm$core$Platform$Cmd$none);
			case 'SetKeyFrame':
				var index = msg.a;
				var frameIndex = msg.b;
				return pushState(
					_Utils_update(
						present,
						{
							workingData: A3(
								$author$project$Data$Project$Content$updateSegmentBy,
								index,
								$author$project$Data$Video$Segment$setKeyFrame(frameIndex),
								present.workingData)
						}));
			case 'StartPreviewing':
				return _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{isPreviewing: true}),
					$elm$core$Platform$Cmd$none);
			case 'StopPreviewing':
				return _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{baseExportedTo: $elm$core$Maybe$Nothing, isPreviewing: false}),
					$elm$core$Platform$Cmd$none);
			case 'SaveProject':
				var redirection = msg.a;
				return _Utils_eq(present, substate.lastSaved) ? _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{
							savingResult: $elm$core$Maybe$Just(
								$elm$core$Result$Ok(_Utils_Tuple0))
						}),
					A2(
						$elm$core$Maybe$withDefault,
						$elm$core$Platform$Cmd$none,
						A2(
							$elm$core$Maybe$map,
							$author$project$Route$pushUrl(key),
							redirection))) : _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{savingResult: $elm$core$Maybe$Nothing}),
					A2(
						$author$project$Request$Project$save,
						$author$project$Page$Project$ProjectSaved(redirection),
						present));
			case 'ProjectSaved':
				var redirection = msg.a;
				var result = msg.b;
				return _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{
							lastSaved: present,
							savingResult: $elm$core$Maybe$Just(result)
						}),
					function () {
						var _v15 = _Utils_Tuple2(redirection, result);
						if (_v15.b.$ === 'Ok') {
							if (_v15.a.$ === 'Just') {
								var targetRoute = _v15.a.a;
								return $elm$core$Platform$Cmd$batch(
									_List_fromArray(
										[
											A2($author$project$Route$pushUrl, key, targetRoute),
											$author$project$Port$removeBeforeUnloadPrompt(_Utils_Tuple0)
										]));
							} else {
								return $author$project$Port$removeBeforeUnloadPrompt(_Utils_Tuple0);
							}
						} else {
							return $elm$core$Platform$Cmd$none;
						}
					}());
			case 'DismissSavingResultPrompt':
				return _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{savingResult: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			case 'ExportProject':
				return _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{exportingError: $elm$core$Maybe$Nothing, isExportingInProgress: true}),
					A2($author$project$Request$Project$export, $author$project$Page$Project$ProjectExported, present));
			case 'ProjectExported':
				if (msg.a.$ === 'Ok') {
					var base = msg.a.a;
					return _Utils_Tuple3(
						project,
						_Utils_update(
							substate,
							{
								baseExportedTo: $elm$core$Maybe$Just(base),
								isExportingInProgress: false
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					var error = msg.a.a;
					return _Utils_Tuple3(
						project,
						_Utils_update(
							substate,
							{
								exportingError: $elm$core$Maybe$Just(error),
								isExportingInProgress: false
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'DismissExportingErrorPrompt':
				return _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{exportingError: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			case 'SeekTime':
				var milliseconds = msg.a;
				return _Utils_Tuple3(
					project,
					substate,
					$author$project$Port$seekTime(milliseconds));
			case 'RequestProjectSize':
				return _Utils_Tuple3(
					project,
					substate,
					A2($author$project$Request$Project$getSize, $author$project$Page$Project$ProjectSizeRequested, present));
			case 'ProjectSizeRequested':
				if (msg.a.$ === 'Ok') {
					var fileSize = msg.a.a;
					return _Utils_Tuple3(
						project,
						_Utils_update(
							substate,
							{
								projectSize: $elm$core$Maybe$Just(fileSize)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple3(project, substate, $elm$core$Platform$Cmd$none);
				}
			case 'UndoProject':
				return _Utils_eq(substate.textBeingEdited, $elm$core$Maybe$Nothing) ? _Utils_Tuple3(
					$author$project$Data$UndoList$undo(project),
					substate,
					$author$project$Page$Project$projectChanged) : _Utils_Tuple3(
					project,
					substate,
					$author$project$Port$undoTrix(_Utils_Tuple0));
			case 'RedoProject':
				return _Utils_eq(substate.textBeingEdited, $elm$core$Maybe$Nothing) ? _Utils_Tuple3(
					$author$project$Data$UndoList$redo(project),
					substate,
					$author$project$Page$Project$projectChanged) : _Utils_Tuple3(
					project,
					substate,
					$author$project$Port$redoTrix(_Utils_Tuple0));
			case 'JumpTo':
				var index = msg.a;
				return _Utils_Tuple3(
					project,
					substate,
					$author$project$Port$scrollIntoView(
						'block-' + $elm$core$String$fromInt(index)));
			case 'NavigateToPortal':
				return _Utils_eq(substate.lastSaved, project.present) ? _Utils_Tuple3(
					project,
					substate,
					A2($author$project$Route$pushUrl, key, $author$project$Route$ProjectPortal)) : _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{
							confirmNavigatingAway: $elm$core$Maybe$Just($author$project$Route$ProjectPortal)
						}),
					$elm$core$Platform$Cmd$none);
			case 'StayOnPage':
				return _Utils_Tuple3(
					project,
					_Utils_update(
						substate,
						{confirmNavigatingAway: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			case 'ChangeBeforeUnloadPrompt':
				return _Utils_Tuple3(
					project,
					substate,
					_Utils_eq(project.present, substate.lastSaved) ? $author$project$Port$removeBeforeUnloadPrompt(_Utils_Tuple0) : $author$project$Port$addBeforeUnloadPrompt(_Utils_Tuple0));
			case 'NoOp':
				return _Utils_Tuple3(project, substate, $elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple3(project, substate, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Page$Project$update = F3(
	function (key, msg, model) {
		if (model.$ === 'Loaded') {
			var project = model.a;
			var substate = model.b;
			var _v1 = A4($author$project$Page$Project$updateLoaded, key, msg, project, substate);
			var updatedProject = _v1.a;
			var updatedSubstate = _v1.b;
			var command = _v1.c;
			return _Utils_Tuple2(
				A2($author$project$Page$Project$Loaded, updatedProject, updatedSubstate),
				command);
		} else {
			switch (msg.$) {
				case 'LoadProject':
					var uuid = msg.a;
					return _Utils_Tuple2(
						$author$project$Page$Project$Loading(uuid),
						A2($author$project$Request$Project$get, $author$project$Page$Project$ProjectLoaded, uuid));
				case 'ProjectLoaded':
					if (msg.a.$ === 'Ok') {
						var project = msg.a.a;
						return _Utils_Tuple2(
							$author$project$Page$Project$initLoaded(project),
							A2(
								$elm$core$Task$perform,
								function (_v3) {
									return $author$project$Page$Project$RequestProjectSize;
								},
								$elm$core$Task$succeed(_Utils_Tuple0)));
					} else {
						var error = msg.a.a;
						return _Utils_Tuple2(
							$author$project$Page$Project$ProjectFailedToLoad(error),
							$elm$core$Platform$Cmd$none);
					}
				default:
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			}
		}
	});
var $author$project$View$Uploader$FailedToUpload = F2(
	function (a, b) {
		return {$: 'FailedToUpload', a: a, b: b};
	});
var $author$project$Page$Project$Portal$FilesSelected = F2(
	function (a, b) {
		return {$: 'FilesSelected', a: a, b: b};
	});
var $author$project$Page$Project$Portal$ParamsLoaded = function (a) {
	return {$: 'ParamsLoaded', a: a};
};
var $author$project$Page$Project$Portal$ParamsSelected = function (a) {
	return {$: 'ParamsSelected', a: a};
};
var $author$project$Page$Project$Portal$ProjectUpdated = function (a) {
	return {$: 'ProjectUpdated', a: a};
};
var $author$project$Page$Project$Portal$ProjectsDeleted = F2(
	function (a, b) {
		return {$: 'ProjectsDeleted', a: a, b: b};
	});
var $author$project$Page$Project$Portal$SubtitleLoaded = F3(
	function (a, b, c) {
		return {$: 'SubtitleLoaded', a: a, b: b, c: c};
	});
var $author$project$Page$Project$Portal$SubtitleSelected = F2(
	function (a, b) {
		return {$: 'SubtitleSelected', a: a, b: b};
	});
var $author$project$Page$Project$Portal$SubtitleUploaded = F2(
	function (a, b) {
		return {$: 'SubtitleUploaded', a: a, b: b};
	});
var $author$project$Page$Project$Portal$UploadVideo = F3(
	function (a, b, c) {
		return {$: 'UploadVideo', a: a, b: b, c: c};
	});
var $author$project$View$Uploader$Uploading = F4(
	function (a, b, c, d) {
		return {$: 'Uploading', a: a, b: b, c: c, d: d};
	});
var $author$project$View$Uploader$UploadingSubtitle = function (a) {
	return {$: 'UploadingSubtitle', a: a};
};
var $author$project$Page$Project$Portal$VideoProcessingStarted = F2(
	function (a, b) {
		return {$: 'VideoProcessingStarted', a: a, b: b};
	});
var $author$project$Page$Project$Portal$VideoUploaded = F3(
	function (a, b, c) {
		return {$: 'VideoUploaded', a: a, b: b, c: c};
	});
var $author$project$Data$Project$Concise$subtitleEncoder = F3(
	function (uuid, ext, content) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'Id',
					$elm$json$Json$Encode$string(uuid)),
					_Utils_Tuple2(
					'Type',
					$elm$json$Json$Encode$string(ext)),
					_Utils_Tuple2(
					'Text',
					$elm$json$Json$Encode$string(content))
				]));
	});
var $author$project$Data$Project$Concise$InvalidSubtitle = {$: 'InvalidSubtitle'};
var $author$project$Data$Project$Concise$subtitleErrorDecoder = function (statusCode) {
	return $elm$json$Json$Decode$succeed($author$project$Data$Project$Concise$InvalidSubtitle);
};
var $author$project$Request$Project$addSubtitle = F4(
	function (handler, uuid, ext, content) {
		return $author$project$API$Request$post(
			{
				decoder: A2($elm$json$Json$Decode$field, 'Video', $author$project$Data$Project$Concise$decoder),
				errorDecoder: $author$project$Data$Project$Concise$subtitleErrorDecoder,
				handler: handler(uuid),
				payload: A3($author$project$Data$Project$Concise$subtitleEncoder, uuid, ext, content),
				timeout: $elm$core$Maybe$Just(10000),
				url: A2(
					$author$project$Request$Helper$apiNativeClient,
					_List_fromArray(
						['uploadsubtitle']),
					_List_Nil)
			});
	});
var $elm$http$Http$expectBytesResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'arraybuffer',
			_Http_toDataView,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$http$Http$expectWhatever = function (toMsg) {
	return A2(
		$elm$http$Http$expectBytesResponse,
		toMsg,
		$elm$http$Http$resolve(
			function (_v0) {
				return $elm$core$Result$Ok(_Utils_Tuple0);
			}));
};
var $author$project$Data$Project$Concise$wrapRequestBody = function (body) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2('Videos', body)
			]));
};
var $author$project$Data$Project$Concise$uuidsEncoder = function (uuids) {
	var body = A2(
		$elm$json$Json$Encode$list,
		$elm$core$Basics$identity,
		A2(
			$elm$core$List$map,
			function (uuid) {
				return $elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'Id',
							$elm$json$Json$Encode$string(uuid))
						]));
			},
			uuids));
	return $author$project$Data$Project$Concise$wrapRequestBody(body);
};
var $author$project$Request$Project$delete = F2(
	function (handler, uuids) {
		return $elm$http$Http$post(
			{
				body: $elm$http$Http$jsonBody(
					$author$project$Data$Project$Concise$uuidsEncoder(
						$elm$core$Set$toList(uuids))),
				expect: $elm$http$Http$expectWhatever(
					handler(uuids)),
				url: A2(
					$author$project$Request$Helper$apiNativeClient,
					_List_fromArray(
						['deletevideo']),
					_List_Nil)
			});
	});
var $elm$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2($elm$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});
var $elm$core$Set$diff = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$diff, dict1, dict2));
	});
var $author$project$Data$Video$Processing$Params$granularityToInt = function (granularity) {
	switch (granularity.$) {
		case 'Rough':
			return 1;
		case 'Medium':
			return 2;
		default:
			return 3;
	}
};
var $author$project$Data$Video$Processing$Params$granularityEncoder = A2($elm$core$Basics$composeR, $author$project$Data$Video$Processing$Params$granularityToInt, $elm$json$Json$Encode$int);
var $author$project$Data$Video$Processing$Params$encoder = function (params) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'Granularity',
				$author$project$Data$Video$Processing$Params$granularityEncoder(params.granularity)),
				_Utils_Tuple2(
				'DifferentTypeMinDifference',
				$elm$json$Json$Encode$int(params.differentTypeMinDifference)),
				_Utils_Tuple2(
				'SameTypeMaxDifference',
				$elm$json$Json$Encode$int(params.sameTypeMaxDifference)),
				_Utils_Tuple2(
				'SimilarTypeMaxDifference',
				$elm$json$Json$Encode$int(params.similarTypeMaxDifference)),
				_Utils_Tuple2(
				'SmoothTypeMinValue',
				$elm$json$Json$Encode$int(params.smoothTypeMinValue)),
				_Utils_Tuple2(
				'IsSameCombined',
				$elm$json$Json$Encode$bool(params.isSameCombined)),
				_Utils_Tuple2(
				'ShortNoneCombiningMaxDurationInMs',
				$elm$json$Json$Encode$int(params.shortNoneCombiningMaxDurationInMs))
			]));
};
var $author$project$Data$Project$Concise$FailedToProcess = function (a) {
	return {$: 'FailedToProcess', a: a};
};
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $author$project$Data$Project$Concise$batchUpdateBy = F2(
	function (uuids, updater) {
		return $elm$core$List$map(
			function (item) {
				return A2($elm$core$Set$member, item.uuid, uuids) ? updater(item) : item;
			});
	});
var $author$project$Data$Project$Concise$updateStatus = F2(
	function (status, newStatus) {
		var _v0 = _Utils_Tuple2(status, newStatus);
		_v0$1:
		while (true) {
			_v0$2:
			while (true) {
				_v0$3:
				while (true) {
					switch (_v0.a.$) {
						case 'Uploaded':
							var _v1 = _v0.a;
							return newStatus;
						case 'Processing':
							switch (_v0.b.$) {
								case 'Uploaded':
									break _v0$1;
								case 'Processing':
									break _v0$2;
								default:
									break _v0$2;
							}
						case 'Processed':
							switch (_v0.b.$) {
								case 'Uploaded':
									break _v0$1;
								case 'Processing':
									break _v0$3;
								default:
									var _v3 = _v0.a;
									return status;
							}
						default:
							switch (_v0.b.$) {
								case 'Uploaded':
									break _v0$1;
								case 'Processing':
									break _v0$3;
								default:
									return status;
							}
					}
				}
				return status;
			}
			return newStatus;
		}
		var _v2 = _v0.b;
		return status;
	});
var $author$project$Data$Project$Concise$setStatus = F2(
	function (status, item) {
		return _Utils_update(
			item,
			{
				status: A2($author$project$Data$Project$Concise$updateStatus, item.status, status)
			});
	});
var $author$project$Data$Project$Concise$failedToStartProcessing = F2(
	function (uuids, error) {
		return A2(
			$author$project$Data$Project$Concise$batchUpdateBy,
			uuids,
			$author$project$Data$Project$Concise$setStatus(
				$author$project$Data$Project$Concise$FailedToProcess(error)));
	});
var $elm$file$File$Select$file = F2(
	function (mimes, toMsg) {
		return A2(
			$elm$core$Task$perform,
			toMsg,
			_File_uploadOne(mimes));
	});
var $elm_community$list_extra$List$Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, pred),
			list);
	});
var $author$project$Page$Project$Portal$isProjectSelected = F2(
	function (selection, _v0) {
		var uuid = _v0.uuid;
		return A2($elm$core$Set$member, uuid, selection);
	});
var $author$project$Page$Project$Portal$filterSelectedProjects = A2($elm$core$Basics$composeL, $elm$core$List$filter, $author$project$Page$Project$Portal$isProjectSelected);
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $elm$http$Http$fractionSent = function (p) {
	return (!p.size) ? 1 : A3($elm$core$Basics$clamp, 0, 1, p.sent / p.size);
};
var $elm$random$Random$Generate = function (a) {
	return {$: 'Generate', a: a};
};
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $elm$random$Random$init = A2(
	$elm$core$Task$andThen,
	function (time) {
		return $elm$core$Task$succeed(
			$elm$random$Random$initialSeed(
				$elm$time$Time$posixToMillis(time)));
	},
	$elm$time$Time$now);
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0.a;
		return generator(seed);
	});
var $elm$random$Random$onEffects = F3(
	function (router, commands, seed) {
		if (!commands.b) {
			return $elm$core$Task$succeed(seed);
		} else {
			var generator = commands.a.a;
			var rest = commands.b;
			var _v1 = A2($elm$random$Random$step, generator, seed);
			var value = _v1.a;
			var newSeed = _v1.b;
			return A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$random$Random$onEffects, router, rest, newSeed);
				},
				A2($elm$core$Platform$sendToApp, router, value));
		}
	});
var $elm$random$Random$onSelfMsg = F3(
	function (_v0, _v1, seed) {
		return $elm$core$Task$succeed(seed);
	});
var $elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var $elm$random$Random$map = F2(
	function (func, _v0) {
		var genA = _v0.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v1 = genA(seed0);
				var a = _v1.a;
				var seed1 = _v1.b;
				return _Utils_Tuple2(
					func(a),
					seed1);
			});
	});
var $elm$random$Random$cmdMap = F2(
	function (func, _v0) {
		var generator = _v0.a;
		return $elm$random$Random$Generate(
			A2($elm$random$Random$map, func, generator));
	});
_Platform_effectManagers['Random'] = _Platform_createManager($elm$random$Random$init, $elm$random$Random$onEffects, $elm$random$Random$onSelfMsg, $elm$random$Random$cmdMap);
var $elm$random$Random$command = _Platform_leaf('Random');
var $elm$random$Random$generate = F2(
	function (tagger, generator) {
		return $elm$random$Random$command(
			$elm$random$Random$Generate(
				A2($elm$random$Random$map, tagger, generator)));
	});
var $TSFoster$elm_uuid$UUID$UUID = F4(
	function (a, b, c, d) {
		return {$: 'UUID', a: a, b: b, c: c, d: d};
	});
var $elm$random$Random$map4 = F5(
	function (func, _v0, _v1, _v2, _v3) {
		var genA = _v0.a;
		var genB = _v1.a;
		var genC = _v2.a;
		var genD = _v3.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v4 = genA(seed0);
				var a = _v4.a;
				var seed1 = _v4.b;
				var _v5 = genB(seed1);
				var b = _v5.a;
				var seed2 = _v5.b;
				var _v6 = genC(seed2);
				var c = _v6.a;
				var seed3 = _v6.b;
				var _v7 = genD(seed3);
				var d = _v7.a;
				var seed4 = _v7.b;
				return _Utils_Tuple2(
					A4(func, a, b, c, d),
					seed4);
			});
	});
var $TSFoster$elm_uuid$UUID$forceUnsigned = $elm$core$Bitwise$shiftRightZfBy(0);
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$int = F2(
	function (a, b) {
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _v0.a;
				var hi = _v0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
						$elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = $elm$random$Random$peel(seed);
							var seedN = $elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var $elm$random$Random$maxInt = 2147483647;
var $elm$random$Random$minInt = -2147483648;
var $TSFoster$elm_uuid$UUID$randomU32 = A2(
	$elm$random$Random$map,
	$TSFoster$elm_uuid$UUID$forceUnsigned,
	A2($elm$random$Random$int, $elm$random$Random$minInt, $elm$random$Random$maxInt));
var $elm$core$Bitwise$or = _Bitwise_or;
var $TSFoster$elm_uuid$UUID$toVariant1 = function (_v0) {
	var a = _v0.a;
	var b = _v0.b;
	var c = _v0.c;
	var d = _v0.d;
	return A4(
		$TSFoster$elm_uuid$UUID$UUID,
		a,
		b,
		$TSFoster$elm_uuid$UUID$forceUnsigned(2147483648 | (1073741823 & c)),
		d);
};
var $TSFoster$elm_uuid$UUID$toVersion = F2(
	function (v, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		var c = _v0.c;
		var d = _v0.d;
		return A4(
			$TSFoster$elm_uuid$UUID$UUID,
			a,
			$TSFoster$elm_uuid$UUID$forceUnsigned((v << 12) | (4294905855 & b)),
			c,
			d);
	});
var $TSFoster$elm_uuid$UUID$generator = A2(
	$elm$random$Random$map,
	A2(
		$elm$core$Basics$composeR,
		$TSFoster$elm_uuid$UUID$toVersion(4),
		$TSFoster$elm_uuid$UUID$toVariant1),
	A5($elm$random$Random$map4, $TSFoster$elm_uuid$UUID$UUID, $TSFoster$elm_uuid$UUID$randomU32, $TSFoster$elm_uuid$UUID$randomU32, $TSFoster$elm_uuid$UUID$randomU32, $TSFoster$elm_uuid$UUID$randomU32));
var $krisajenkins$remotedata$RemoteData$Loading = {$: 'Loading'};
var $krisajenkins$remotedata$RemoteData$map = F2(
	function (f, data) {
		switch (data.$) {
			case 'Success':
				var value = data.a;
				return $krisajenkins$remotedata$RemoteData$Success(
					f(value));
			case 'Loading':
				return $krisajenkins$remotedata$RemoteData$Loading;
			case 'NotAsked':
				return $krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				var error = data.a;
				return $krisajenkins$remotedata$RemoteData$Failure(error);
		}
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $author$project$Util$cropFileExtension = function (fileName) {
	var _v0 = A2(
		$elm$core$String$split,
		'.',
		$elm$core$String$reverse(fileName));
	if (!_v0.b) {
		return '';
	} else {
		if (!_v0.b.b) {
			return '';
		} else {
			var xs = _v0.b;
			return $elm$core$String$reverse(
				A2($elm$core$String$join, '.', xs));
		}
	}
};
var $elm$file$File$name = _File_name;
var $author$project$Data$Uploader$Media$subtitleToName = function (_v0) {
	var file = _v0.b;
	return $author$project$Util$cropFileExtension(
		$elm$file$File$name(file));
};
var $author$project$Data$Uploader$Media$videoToName = function (_v0) {
	var file = _v0.a;
	return $author$project$Util$cropFileExtension(
		$elm$file$File$name(file));
};
var $author$project$Data$Uploader$Media$doMatch = F3(
	function (videos, subtitles, groupings) {
		doMatch:
		while (true) {
			if (!videos.b) {
				return groupings;
			} else {
				var x = videos.a;
				var xs = videos.b;
				var grouping = A2(
					$elm$core$Tuple$pair,
					x,
					A2(
						$elm$core$List$filter,
						function (sub) {
							return _Utils_eq(
								$author$project$Data$Uploader$Media$subtitleToName(sub),
								$author$project$Data$Uploader$Media$videoToName(x));
						},
						subtitles));
				var $temp$videos = xs,
					$temp$subtitles = subtitles,
					$temp$groupings = A2($elm$core$List$cons, grouping, groupings);
				videos = $temp$videos;
				subtitles = $temp$subtitles;
				groupings = $temp$groupings;
				continue doMatch;
			}
		}
	});
var $author$project$Data$Uploader$Media$match = F2(
	function (videos, subtitles) {
		return A3($author$project$Data$Uploader$Media$doMatch, videos, subtitles, _List_Nil);
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $author$project$Data$Uploader$Media$Subtitle = F2(
	function (a, b) {
		return {$: 'Subtitle', a: a, b: b};
	});
var $author$project$Data$Uploader$Media$Video = function (a) {
	return {$: 'Video', a: a};
};
var $elm_community$list_extra$List$Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _v0) {
				var i = _v0.a;
				var thisAcc = _v0.b;
				return _Utils_Tuple2(
					i - 1,
					A3(func, i, x, thisAcc));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(
				$elm$core$List$length(list) - 1,
				acc),
			list).b;
	});
var $elm$core$String$toLower = _String_toLower;
var $author$project$Util$getFileExtension = function (fileName) {
	var _v0 = A2(
		$elm$core$String$split,
		'.',
		$elm$core$String$reverse(fileName));
	if (!_v0.b) {
		return '';
	} else {
		if (!_v0.b.b) {
			return '';
		} else {
			var x = _v0.a;
			return $elm$core$String$toLower(
				$elm$core$String$reverse(x));
		}
	}
};
var $elm$file$File$mime = _File_mime;
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $author$project$Data$File$Type$toExtensions = A2(
	$elm$core$Basics$composeL,
	$elm$core$Set$fromList,
	A2(
		$elm$core$List$foldr,
		F2(
			function (identifier, extensions) {
				if (identifier.$ === 'Ext') {
					var extension = identifier.a;
					return A2($elm$core$List$cons, extension, extensions);
				} else {
					return extensions;
				}
			}),
		_List_Nil));
var $author$project$Data$File$Type$toMimes = A2(
	$elm$core$Basics$composeL,
	$elm$core$Set$fromList,
	A2(
		$elm$core$List$foldr,
		F2(
			function (identifier, mimes) {
				if (identifier.$ === 'Mime') {
					var mime = identifier.a;
					return A2($elm$core$List$cons, mime, mimes);
				} else {
					return mimes;
				}
			}),
		_List_Nil));
var $author$project$Data$File$Type$isOneOf = F2(
	function (file, identifiers) {
		var mime = $elm$file$File$mime(file);
		var ext = $author$project$Util$getFileExtension(
			$elm$file$File$name(file));
		return A2(
			$elm$core$Set$member,
			mime,
			$author$project$Data$File$Type$toMimes(identifiers)) || ($elm$core$String$isEmpty(mime) && A2(
			$elm$core$Set$member,
			ext,
			$author$project$Data$File$Type$toExtensions(identifiers)));
	});
var $author$project$Data$File$Type$Ext = function (a) {
	return {$: 'Ext', a: a};
};
var $author$project$Data$File$Type$supportedSubtitles = _List_fromArray(
	[
		$author$project$Data$File$Type$Ext('srt'),
		$author$project$Data$File$Type$Ext('vtt')
	]);
var $author$project$Data$File$Type$isSupportedSubtitle = function (file) {
	return A2($author$project$Data$File$Type$isOneOf, file, $author$project$Data$File$Type$supportedSubtitles);
};
var $author$project$Data$File$Type$Mime = function (a) {
	return {$: 'Mime', a: a};
};
var $author$project$Data$File$Type$supportedVideos = _List_fromArray(
	[
		$author$project$Data$File$Type$Mime('video/mp4'),
		$author$project$Data$File$Type$Mime('video/webm'),
		$author$project$Data$File$Type$Mime('video/mpeg'),
		$author$project$Data$File$Type$Mime('video/quicktime'),
		$author$project$Data$File$Type$Mime('video/MP2T'),
		$author$project$Data$File$Type$Ext('flv'),
		$author$project$Data$File$Type$Mime('video/avi'),
		$author$project$Data$File$Type$Mime('video/x-ms-wmv')
	]);
var $author$project$Data$File$Type$isSupportedVideo = function (file) {
	return A2($author$project$Data$File$Type$isOneOf, file, $author$project$Data$File$Type$supportedVideos);
};
var $author$project$Data$File$Type$unsupportedSubtitles = _List_fromArray(
	[
		$author$project$Data$File$Type$Ext('ass'),
		$author$project$Data$File$Type$Ext('ssa')
	]);
var $author$project$Data$File$Type$isUnsupportedSubtitle = function (file) {
	return A2($author$project$Data$File$Type$isOneOf, file, $author$project$Data$File$Type$unsupportedSubtitles);
};
var $author$project$Data$File$Type$unsupportedVideos = _List_fromArray(
	[
		$author$project$Data$File$Type$Mime('video/x-matroska')
	]);
var $author$project$Data$File$Type$isUnsupportedVideo = function (file) {
	return A2($author$project$Data$File$Type$isOneOf, file, $author$project$Data$File$Type$unsupportedVideos);
};
var $author$project$Data$Uploader$Media$partitionFiles = function () {
	var reducer = F3(
		function (index, file, partitioned) {
			return $author$project$Data$File$Type$isSupportedVideo(file) ? _Utils_update(
				partitioned,
				{
					videos: A2(
						$elm$core$List$cons,
						$author$project$Data$Uploader$Media$Video(file),
						partitioned.videos)
				}) : ($author$project$Data$File$Type$isSupportedSubtitle(file) ? _Utils_update(
				partitioned,
				{
					subtitles: A2(
						$elm$core$List$cons,
						A2($author$project$Data$Uploader$Media$Subtitle, index, file),
						partitioned.subtitles)
				}) : ($author$project$Data$File$Type$isUnsupportedVideo(file) ? _Utils_update(
				partitioned,
				{
					unsupportedVideos: A2($elm$core$List$cons, file, partitioned.unsupportedVideos)
				}) : ($author$project$Data$File$Type$isUnsupportedSubtitle(file) ? _Utils_update(
				partitioned,
				{
					unsupportedSubtitles: A2($elm$core$List$cons, file, partitioned.unsupportedSubtitles)
				}) : _Utils_update(
				partitioned,
				{
					unsupportedFiles: A2($elm$core$List$cons, file, partitioned.unsupportedFiles)
				}))));
		});
	return A2(
		$elm_community$list_extra$List$Extra$indexedFoldr,
		reducer,
		{subtitles: _List_Nil, unsupportedFiles: _List_Nil, unsupportedSubtitles: _List_Nil, unsupportedVideos: _List_Nil, videos: _List_Nil});
}();
var $author$project$Data$Uploader$Media$AmbiguousSubs = F3(
	function (a, b, c) {
		return {$: 'AmbiguousSubs', a: a, b: b, c: c};
	});
var $author$project$Data$Uploader$Media$HasSub = function (a) {
	return {$: 'HasSub', a: a};
};
var $author$project$Data$Uploader$Media$NoSub = {$: 'NoSub'};
var $author$project$Data$Uploader$Media$subtitleCandidatesFromList = function (subs) {
	if (!subs.b) {
		return $author$project$Data$Uploader$Media$NoSub;
	} else {
		if (!subs.b.b) {
			var head = subs.a;
			return $author$project$Data$Uploader$Media$HasSub(head);
		} else {
			var head = subs.a;
			var _v1 = subs.b;
			var neck = _v1.a;
			var tails = _v1.b;
			return A3($author$project$Data$Uploader$Media$AmbiguousSubs, head, neck, tails);
		}
	}
};
var $author$project$Data$Uploader$Media$morph = function (files) {
	var _v0 = $author$project$Data$Uploader$Media$partitionFiles(files);
	var videos = _v0.videos;
	var subtitles = _v0.subtitles;
	var unsupportedVideos = _v0.unsupportedVideos;
	var unsupportedSubtitles = _v0.unsupportedSubtitles;
	var unsupportedFiles = _v0.unsupportedFiles;
	var matchedFileNames = A2($elm$core$List$map, $author$project$Data$Uploader$Media$videoToName, videos);
	return {
		matches: A2(
			$elm$core$List$map,
			$elm$core$Tuple$mapSecond($author$project$Data$Uploader$Media$subtitleCandidatesFromList),
			A2($author$project$Data$Uploader$Media$match, videos, subtitles)),
		unsupportedFiles: unsupportedFiles,
		unsupportedSubtitles: unsupportedSubtitles,
		unsupportedVideos: unsupportedVideos,
		widows: A2(
			$elm$core$List$filter,
			A2(
				$elm$core$Basics$composeL,
				A2(
					$elm$core$Basics$composeL,
					$elm$core$Basics$not,
					A2($author$project$Util$flip, $elm$core$List$member, matchedFileNames)),
				$author$project$Data$Uploader$Media$subtitleToName),
			subtitles)
	};
};
var $elm$http$Http$filePart = _Http_pair;
var $elm$http$Http$multipartBody = function (parts) {
	return A2(
		_Http_pair,
		'',
		_Http_toFormData(parts));
};
var $author$project$Request$Project$new = F3(
	function (handler, videoFile, trackerID) {
		return $elm$http$Http$request(
			{
				body: $elm$http$Http$multipartBody(
					_List_fromArray(
						[
							A2($elm$http$Http$filePart, 'File', videoFile)
						])),
				expect: A2(
					$elm$http$Http$expectJson,
					handler,
					A2($elm$json$Json$Decode$field, 'Video', $author$project$Data$Project$Concise$decoder)),
				headers: _List_Nil,
				method: 'POST',
				timeout: $elm$core$Maybe$Just(60000),
				tracker: $elm$core$Maybe$Just(trackerID),
				url: A2(
					$author$project$Request$Helper$apiNativeClient,
					_List_fromArray(
						['uploadvideo']),
					_List_Nil)
			});
	});
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $author$project$Data$Project$Concise$paramsUpdateEncoder = F2(
	function (uuid, params) {
		return $author$project$Data$Project$Concise$wrapRequestBody(
			A2(
				$elm$json$Json$Encode$list,
				$elm$core$Basics$identity,
				$elm$core$List$singleton(
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'Id',
								$elm$json$Json$Encode$string(uuid)),
								_Utils_Tuple2(
								'Parameters',
								$author$project$Data$Video$Processing$Params$encoder(params))
							])))));
	});
var $elm_community$list_extra$List$Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			$elm$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var $elm_community$list_extra$List$Extra$setIf = F3(
	function (predicate, replacement, list) {
		return A3(
			$elm_community$list_extra$List$Extra$updateIf,
			predicate,
			$elm$core$Basics$always(replacement),
			list);
	});
var $author$project$Data$Project$Concise$updateCollection = function (item) {
	return A2(
		$elm_community$list_extra$List$Extra$setIf,
		function (_v0) {
			var uuid = _v0.uuid;
			return _Utils_eq(uuid, item.uuid);
		},
		item);
};
var $author$project$Data$Project$Concise$putInCollection = F2(
	function (item, collection) {
		var _v0 = A2(
			$elm_community$list_extra$List$Extra$find,
			function (_v1) {
				var uuid = _v1.uuid;
				return _Utils_eq(uuid, item.uuid);
			},
			collection);
		if (_v0.$ === 'Just') {
			return A2($author$project$Data$Project$Concise$updateCollection, item, collection);
		} else {
			return A2($elm$core$List$cons, item, collection);
		}
	});
var $author$project$Data$Project$Concise$updateErrorDecoder = function (statusCode) {
	return $elm$json$Json$Decode$fail('');
};
var $author$project$Request$Project$removeSubtitle = F2(
	function (handler, uuid) {
		return $author$project$API$Request$post(
			{
				decoder: A2(
					$elm$json$Json$Decode$field,
					'Videos',
					A2($elm$json$Json$Decode$index, 0, $author$project$Data$Project$Concise$decoder)),
				errorDecoder: $author$project$Data$Project$Concise$updateErrorDecoder,
				handler: handler,
				payload: $author$project$Data$Project$Concise$uuidsEncoder(
					_List_fromArray(
						[uuid])),
				timeout: $elm$core$Maybe$Just(10000),
				url: A2(
					$author$project$Request$Helper$apiNativeClient,
					_List_fromArray(
						['deletesubtitle']),
					_List_Nil)
			});
	});
var $author$project$Data$Project$Concise$updateBy = function (uuid) {
	return $elm_community$list_extra$List$Extra$updateIf(
		function (item) {
			return _Utils_eq(item.uuid, uuid);
		});
};
var $author$project$Data$Project$Concise$resetProcessingStatusBy = function (uuid) {
	return A2(
		$author$project$Data$Project$Concise$updateBy,
		uuid,
		function (item) {
			return _Utils_update(
				item,
				{status: $author$project$Data$Project$Concise$Uploaded});
		});
};
var $elm$core$String$cons = _String_cons;
var $author$project$Data$File$Type$identifierToString = function (identifier) {
	if (identifier.$ === 'Ext') {
		var extension = identifier.a;
		return A2(
			$elm$core$String$cons,
			_Utils_chr('.'),
			extension);
	} else {
		var mime = identifier.a;
		return mime;
	}
};
var $author$project$Data$File$Type$acceptableSubtitleFormats = A2($elm$core$List$map, $author$project$Data$File$Type$identifierToString, $author$project$Data$File$Type$supportedSubtitles);
var $author$project$Data$File$Type$acceptableVideoFormats = A2($elm$core$List$map, $author$project$Data$File$Type$identifierToString, $author$project$Data$File$Type$supportedVideos);
var $author$project$Data$Uploader$Media$acceptableSpecifiers = _Utils_ap($author$project$Data$File$Type$acceptableVideoFormats, $author$project$Data$File$Type$acceptableSubtitleFormats);
var $elm$file$File$Select$files = F2(
	function (mimes, toMsg) {
		return A2(
			$elm$core$Task$perform,
			function (_v0) {
				var f = _v0.a;
				var fs = _v0.b;
				return A2(toMsg, f, fs);
			},
			_File_uploadOneOrMore(mimes));
	});
var $author$project$Data$Uploader$Media$selectFiles = $elm$file$File$Select$files($author$project$Data$Uploader$Media$acceptableSpecifiers);
var $author$project$Data$Uploader$Media$selectSubtitle = $elm$file$File$Select$file($author$project$Data$File$Type$acceptableSubtitleFormats);
var $author$project$Data$Project$Concise$setProcessingStatusBy = F2(
	function (uuid, status) {
		return A2(
			$author$project$Data$Project$Concise$updateBy,
			uuid,
			$author$project$Data$Project$Concise$setStatus(status));
	});
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $elm$core$Set$singleton = function (key) {
	return $elm$core$Set$Set_elm_builtin(
		A2($elm$core$Dict$singleton, key, _Utils_Tuple0));
};
var $author$project$Data$Project$Concise$BadParameters = {$: 'BadParameters'};
var $author$project$Data$Project$Concise$CannotDecodeVideo = {$: 'CannotDecodeVideo'};
var $author$project$Data$Project$Concise$FileNotFound = {$: 'FileNotFound'};
var $author$project$Data$Project$Concise$processingErrorDecoder = function (statusCode) {
	return (statusCode === 400) ? $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$field,
				'ErrorCode',
				A2($author$project$Util$errorCodeDecoder, 130, $author$project$Data$Project$Concise$FileNotFound)),
				A2(
				$elm$json$Json$Decode$field,
				'ErrorCode',
				A2($author$project$Util$errorCodeDecoder, 110, $author$project$Data$Project$Concise$BadParameters))
			])) : ((statusCode === 422) ? $elm$json$Json$Decode$succeed($author$project$Data$Project$Concise$CannotDecodeVideo) : $elm$json$Json$Decode$fail('not to be handled here'));
};
var $author$project$Request$Video$Processing$start = F2(
	function (handler, uuids) {
		return $author$project$API$Request$post(
			{
				decoder: $author$project$Request$Helper$whateverDecoder,
				errorDecoder: $author$project$Data$Project$Concise$processingErrorDecoder,
				handler: handler(uuids),
				payload: $author$project$Data$Project$Concise$uuidsEncoder(
					$elm$core$Set$toList(uuids)),
				timeout: $elm$core$Maybe$Just(20000),
				url: A2(
					$author$project$Request$Helper$apiNativeClient,
					_List_fromArray(
						['process']),
					_List_Nil)
			});
	});
var $author$project$Data$Project$Concise$startProcessing = function (uuids) {
	return A2(
		$author$project$Data$Project$Concise$batchUpdateBy,
		uuids,
		$author$project$Data$Project$Concise$setStatus(
			$author$project$Data$Project$Concise$Processing(0)));
};
var $elm$file$File$Download$string = F3(
	function (name, mime, content) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$never,
			A3(_File_download, name, mime, content));
	});
var $author$project$Data$Uploader$Media$subtitleToExt = function (_v0) {
	var file = _v0.b;
	return $author$project$Util$getFileExtension(
		$elm$file$File$name(file));
};
var $author$project$Data$Uploader$Media$subtitleToFile = function (_v0) {
	var file = _v0.b;
	return file;
};
var $elm$file$File$toString = _File_toString;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $elm$core$String$fromList = _String_fromList;
var $TSFoster$elm_uuid$UUID$toHex = F2(
	function (acc, _int) {
		toHex:
		while (true) {
			if (!_int) {
				return $elm$core$String$fromList(acc);
			} else {
				var _char = function () {
					var _v0 = 15 & _int;
					switch (_v0) {
						case 0:
							return _Utils_chr('0');
						case 1:
							return _Utils_chr('1');
						case 2:
							return _Utils_chr('2');
						case 3:
							return _Utils_chr('3');
						case 4:
							return _Utils_chr('4');
						case 5:
							return _Utils_chr('5');
						case 6:
							return _Utils_chr('6');
						case 7:
							return _Utils_chr('7');
						case 8:
							return _Utils_chr('8');
						case 9:
							return _Utils_chr('9');
						case 10:
							return _Utils_chr('a');
						case 11:
							return _Utils_chr('b');
						case 12:
							return _Utils_chr('c');
						case 13:
							return _Utils_chr('d');
						case 14:
							return _Utils_chr('e');
						default:
							return _Utils_chr('f');
					}
				}();
				var $temp$acc = A2($elm$core$List$cons, _char, acc),
					$temp$int = _int >>> 4;
				acc = $temp$acc;
				_int = $temp$int;
				continue toHex;
			}
		}
	});
var $TSFoster$elm_uuid$UUID$toStringWith = F2(
	function (sep, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		var c = _v0.c;
		var d = _v0.d;
		return _Utils_ap(
			A3(
				$elm$core$String$padLeft,
				8,
				_Utils_chr('0'),
				A2($TSFoster$elm_uuid$UUID$toHex, _List_Nil, a)),
			_Utils_ap(
				sep,
				_Utils_ap(
					A3(
						$elm$core$String$padLeft,
						4,
						_Utils_chr('0'),
						A2($TSFoster$elm_uuid$UUID$toHex, _List_Nil, b >>> 16)),
					_Utils_ap(
						sep,
						_Utils_ap(
							A3(
								$elm$core$String$padLeft,
								4,
								_Utils_chr('0'),
								A2($TSFoster$elm_uuid$UUID$toHex, _List_Nil, 65535 & b)),
							_Utils_ap(
								sep,
								_Utils_ap(
									A3(
										$elm$core$String$padLeft,
										4,
										_Utils_chr('0'),
										A2($TSFoster$elm_uuid$UUID$toHex, _List_Nil, c >>> 16)),
									_Utils_ap(
										sep,
										_Utils_ap(
											A3(
												$elm$core$String$padLeft,
												4,
												_Utils_chr('0'),
												A2($TSFoster$elm_uuid$UUID$toHex, _List_Nil, 65535 & c)),
											A3(
												$elm$core$String$padLeft,
												8,
												_Utils_chr('0'),
												A2($TSFoster$elm_uuid$UUID$toHex, _List_Nil, d)))))))))));
	});
var $TSFoster$elm_uuid$UUID$toString = $TSFoster$elm_uuid$UUID$toStringWith('-');
var $author$project$Data$File$Type$toSubtitleExtension = function (file) {
	return $author$project$Data$File$Type$isSupportedSubtitle(file) ? $elm$core$Maybe$Just(
		$author$project$Util$getFileExtension(
			$elm$file$File$name(file))) : $elm$core$Maybe$Nothing;
};
var $author$project$Data$Uploader$Media$toUploadableSubtitle = function (candidates) {
	switch (candidates.$) {
		case 'NoSub':
			return $elm$core$Maybe$Nothing;
		case 'HasSub':
			var subtitle = candidates.a;
			return $elm$core$Maybe$Just(subtitle);
		default:
			var subtitle = candidates.a;
			return $elm$core$Maybe$Just(subtitle);
	}
};
var $author$project$Request$Project$update = F2(
	function (handler, changes) {
		return $author$project$API$Request$post(
			{
				decoder: A2(
					$elm$json$Json$Decode$field,
					'Videos',
					A2($elm$json$Json$Decode$index, 0, $author$project$Data$Project$Concise$decoder)),
				errorDecoder: $author$project$Data$Project$Concise$updateErrorDecoder,
				handler: handler,
				payload: changes,
				timeout: $elm$core$Maybe$Just(10000),
				url: A2(
					$author$project$Request$Helper$apiNativeClient,
					_List_fromArray(
						['updatevideo']),
					_List_Nil)
			});
	});
var $author$project$View$Video$Processing$Params$update = F2(
	function (msg, params) {
		switch (msg.$) {
			case 'SetGranularity':
				var granularity = msg.a;
				return _Utils_update(
					params,
					{granularity: granularity});
			case 'SetDifferentTypeMinDifference':
				var n = msg.a;
				return _Utils_update(
					params,
					{differentTypeMinDifference: n});
			case 'SetSameTypeMaxDifference':
				var n = msg.a;
				return _Utils_update(
					params,
					{sameTypeMaxDifference: n});
			case 'SetSimilarTypeMaxDifference':
				var n = msg.a;
				return _Utils_update(
					params,
					{similarTypeMaxDifference: n});
			case 'SetSmoothTypeMinValue':
				var n = msg.a;
				return _Utils_update(
					params,
					{smoothTypeMinValue: n});
			case 'SetIsSameCombined':
				var isSameCombined = msg.a;
				return _Utils_update(
					params,
					{isSameCombined: isSameCombined});
			case 'SetShortNoneCombiningMaxDurationInMs':
				var n = msg.a;
				return _Utils_update(
					params,
					{shortNoneCombiningMaxDurationInMs: n});
			default:
				return params;
		}
	});
var $author$project$View$Uploader$updateProgress = F2(
	function (targetTrackerID, progress) {
		return $elm$core$List$map(
			function (item) {
				if (item.$ === 'Uploading') {
					var trackerID = item.a;
					var video = item.b;
					var availableSubtitle = item.c;
					var sendingProgress = item.d;
					return _Utils_eq(trackerID, targetTrackerID) ? A4($author$project$View$Uploader$Uploading, trackerID, video, availableSubtitle, progress) : item;
				} else {
					return item;
				}
			});
	});
var $elm$core$Set$size = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$size(dict);
};
var $author$project$Util$updateSelection = F3(
	function (entryID, isSelectingMultiple, currentlySelectedEntries) {
		var isEntryAlreadySelected = A2($elm$core$Set$member, entryID, currentlySelectedEntries);
		var _v0 = _Utils_Tuple2(isSelectingMultiple, isEntryAlreadySelected);
		if (!_v0.a) {
			if (!_v0.b) {
				return $elm$core$Set$singleton(entryID);
			} else {
				return ($elm$core$Set$size(currentlySelectedEntries) > 1) ? $elm$core$Set$singleton(entryID) : $elm$core$Set$empty;
			}
		} else {
			if (!_v0.b) {
				return A2($elm$core$Set$insert, entryID, currentlySelectedEntries);
			} else {
				return A2($elm$core$Set$remove, entryID, currentlySelectedEntries);
			}
		}
	});
var $author$project$Data$Uploader$Media$videoToFile = function (_v0) {
	var file = _v0.a;
	return file;
};
var $author$project$Page$Project$Portal$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'ToggleExpertMode':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{expertMode: !model.expertMode, importingError: $elm$core$Maybe$Nothing, paramsToExport: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			case 'PresetsLoaded':
				var result = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{availablePresets: result}),
					$elm$core$Platform$Cmd$none);
			case 'ProjectsLoaded':
				var result = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							projects: A2($krisajenkins$remotedata$RemoteData$map, $elm$core$List$reverse, result)
						}),
					$elm$core$Platform$Cmd$none);
			case 'PickFiles':
				return _Utils_Tuple2(
					model,
					$author$project$Data$Uploader$Media$selectFiles($author$project$Page$Project$Portal$FilesSelected));
			case 'FilesSelected':
				var h = msg.a;
				var t = msg.b;
				var _v1 = $author$project$Data$Uploader$Media$morph(
					A2($elm$core$List$cons, h, t));
				var matches = _v1.matches;
				var widows = _v1.widows;
				var unsupportedVideos = _v1.unsupportedVideos;
				var unsupportedSubtitles = _v1.unsupportedSubtitles;
				var unsupportedFiles = _v1.unsupportedFiles;
				var uploadablePairs = A2(
					$elm$core$List$map,
					$elm$core$Tuple$mapSecond($author$project$Data$Uploader$Media$toUploadableSubtitle),
					matches);
				return _Utils_Tuple2(
					model,
					$elm$core$Platform$Cmd$batch(
						A2(
							$elm$core$List$map,
							function (_v2) {
								var video = _v2.a;
								var availableSubtitle = _v2.b;
								return A2(
									$elm$random$Random$generate,
									A2(
										$elm$core$Basics$composeL,
										A2($author$project$Page$Project$Portal$UploadVideo, video, availableSubtitle),
										$TSFoster$elm_uuid$UUID$toString),
									$TSFoster$elm_uuid$UUID$generator);
							},
							uploadablePairs)));
			case 'UploadVideo':
				var targetVideo = msg.a;
				var availableSubtitle = msg.b;
				var trackerID = msg.c;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							isDisplayingUploader: true,
							items: A2(
								$elm$core$List$cons,
								A4($author$project$View$Uploader$Uploading, trackerID, targetVideo, availableSubtitle, 0),
								model.items)
						}),
					A3(
						$author$project$Request$Project$new,
						A2($author$project$Page$Project$Portal$VideoUploaded, targetVideo, availableSubtitle),
						$author$project$Data$Uploader$Media$videoToFile(targetVideo),
						trackerID));
			case 'VideoUploading':
				var trackerID = msg.a;
				var progress = msg.b;
				if (progress.$ === 'Sending') {
					var sendingProgress = progress.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								items: A3(
									$author$project$View$Uploader$updateProgress,
									trackerID,
									$elm$http$Http$fractionSent(sendingProgress),
									model.items)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'VideoUploaded':
				var targetVideo = msg.a;
				var availableSubtitle = msg.b;
				var result = msg.c;
				var isTargetVideo = function (item) {
					if (item.$ === 'Uploading') {
						var video = item.b;
						return _Utils_eq(video, targetVideo);
					} else {
						return false;
					}
				};
				var _v4 = _Utils_Tuple2(result, availableSubtitle);
				if (_v4.a.$ === 'Ok') {
					if (_v4.b.$ === 'Nothing') {
						var concise = _v4.a.a;
						var _v5 = _v4.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									items: A2($elm_community$list_extra$List$Extra$filterNot, isTargetVideo, model.items),
									projects: A2(
										$krisajenkins$remotedata$RemoteData$map,
										$elm$core$List$cons(concise),
										model.projects)
								}),
							$elm$core$Platform$Cmd$none);
					} else {
						var concise = _v4.a.a;
						var subtitle = _v4.b.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									items: A3(
										$elm_community$list_extra$List$Extra$setIf,
										isTargetVideo,
										$author$project$View$Uploader$UploadingSubtitle(concise),
										model.items)
								}),
							A2(
								$elm$core$Task$perform,
								A2(
									$author$project$Page$Project$Portal$SubtitleLoaded,
									concise.uuid,
									$author$project$Data$Uploader$Media$subtitleToExt(subtitle)),
								$elm$file$File$toString(
									$author$project$Data$Uploader$Media$subtitleToFile(subtitle))));
					}
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								items: A3(
									$elm_community$list_extra$List$Extra$setIf,
									isTargetVideo,
									A2($author$project$View$Uploader$FailedToUpload, targetVideo, availableSubtitle),
									model.items)
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'PickSubtitleFor':
				var uuid = msg.a;
				return _Utils_Tuple2(
					model,
					$author$project$Data$Uploader$Media$selectSubtitle(
						$author$project$Page$Project$Portal$SubtitleSelected(uuid)));
			case 'SubtitleSelected':
				var uuid = msg.a;
				var file = msg.b;
				var _v7 = $author$project$Data$File$Type$toSubtitleExtension(file);
				if (_v7.$ === 'Just') {
					var ext = _v7.a;
					return _Utils_Tuple2(
						model,
						A2(
							$elm$core$Task$perform,
							A2($author$project$Page$Project$Portal$SubtitleLoaded, uuid, ext),
							$elm$file$File$toString(file)));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'SubtitleLoaded':
				var uuid = msg.a;
				var ext = msg.b;
				var subtitleContent = msg.c;
				return _Utils_Tuple2(
					model,
					A4($author$project$Request$Project$addSubtitle, $author$project$Page$Project$Portal$SubtitleUploaded, uuid, ext, subtitleContent));
			case 'SubtitleUploaded':
				if (msg.b.$ === 'Ok') {
					var concise = msg.b.a;
					var isTargetVideo = function (item) {
						if (item.$ === 'UploadingSubtitle') {
							var uuid = item.a.uuid;
							return _Utils_eq(uuid, concise.uuid);
						} else {
							return false;
						}
					};
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								items: A2($elm_community$list_extra$List$Extra$filterNot, isTargetVideo, model.items),
								projects: A2(
									$krisajenkins$remotedata$RemoteData$map,
									$author$project$Data$Project$Concise$putInCollection(concise),
									model.projects),
								reviewingSubtitle: $elm$core$Maybe$Nothing
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					var targetUUID = msg.a;
					var isTarget = function (item) {
						if (item.$ === 'UploadingSubtitle') {
							var uuid = item.a.uuid;
							return _Utils_eq(uuid, targetUUID);
						} else {
							return false;
						}
					};
					var _v9 = A2($elm$core$List$partition, isTarget, model.items);
					if (_v9.a.b && (_v9.a.a.$ === 'UploadingSubtitle')) {
						var _v10 = _v9.a;
						var concise = _v10.a.a;
						var remaining = _v9.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									items: remaining,
									projects: A2(
										$krisajenkins$remotedata$RemoteData$map,
										$elm$core$List$cons(concise),
										model.projects)
								}),
							$elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				}
			case 'OpenUploader':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{isDisplayingUploader: true}),
					$elm$core$Platform$Cmd$none);
			case 'CloseUploader':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{isDisplayingUploader: false}),
					$elm$core$Platform$Cmd$none);
			case 'ReviewSubtitle':
				var uuid = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							reviewingSubtitle: $elm$core$Maybe$Just(uuid)
						}),
					$elm$core$Platform$Cmd$none);
			case 'StopReviewingSubtitle':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{reviewingSubtitle: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			case 'RemoveSubtitleFor':
				var uuid = msg.a;
				return _Utils_Tuple2(
					model,
					A2($author$project$Request$Project$removeSubtitle, $author$project$Page$Project$Portal$ProjectUpdated, uuid));
			case 'SelectProject':
				var uuid = msg.a;
				var isSelectingMultiple = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							selectedProjects: A3($author$project$Util$updateSelection, uuid, isSelectingMultiple, model.selectedProjects)
						}),
					$elm$core$Platform$Cmd$none);
			case 'DeleteProject':
				var uuid = msg.a;
				return _Utils_Tuple2(
					model,
					A2(
						$author$project$Request$Project$delete,
						$author$project$Page$Project$Portal$ProjectsDeleted,
						$elm$core$Set$singleton(uuid)));
			case 'BatchDeleteProjects':
				return _Utils_Tuple2(
					model,
					A2($author$project$Request$Project$delete, $author$project$Page$Project$Portal$ProjectsDeleted, model.selectedProjects));
			case 'ProjectsDeleted':
				if (msg.b.$ === 'Ok') {
					var uuids = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								projects: A2(
									$krisajenkins$remotedata$RemoteData$map,
									$elm_community$list_extra$List$Extra$filterNot(
										function (_v12) {
											var uuid = _v12.uuid;
											return A2($elm$core$Set$member, uuid, uuids);
										}),
									model.projects)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'StartProcessingVideos':
				return _Utils_Tuple2(
					model,
					A2($author$project$Request$Video$Processing$start, $author$project$Page$Project$Portal$VideoProcessingStarted, model.selectedProjects));
			case 'VideoProcessingStarted':
				if (msg.b.$ === 'Ok') {
					var uuidsStarted = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								projects: A2(
									$krisajenkins$remotedata$RemoteData$map,
									$author$project$Data$Project$Concise$startProcessing(uuidsStarted),
									model.projects),
								selectedProjects: A2($elm$core$Set$diff, model.selectedProjects, uuidsStarted)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					var uuidsNotStarted = msg.a;
					var error = msg.b.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								projects: A2(
									$krisajenkins$remotedata$RemoteData$map,
									A2($author$project$Data$Project$Concise$failedToStartProcessing, uuidsNotStarted, error),
									model.projects)
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'ProcessingStatusUpdate':
				if (msg.a.$ === 'Ok') {
					var uuid = msg.a.a.uuid;
					var status = msg.a.a.status;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								projects: A2(
									$krisajenkins$remotedata$RemoteData$map,
									A2($author$project$Data$Project$Concise$setProcessingStatusBy, uuid, status),
									model.projects)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'StartOver':
				var uuid = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							projects: A2(
								$krisajenkins$remotedata$RemoteData$map,
								$author$project$Data$Project$Concise$resetProcessingStatusBy(uuid),
								model.projects)
						}),
					$elm$core$Platform$Cmd$none);
			case 'SetProcessingPreset':
				var uuid = msg.a;
				var params = msg.b.params;
				return _Utils_Tuple2(
					model,
					A2(
						$author$project$Request$Project$update,
						$author$project$Page$Project$Portal$ProjectUpdated,
						A2($author$project$Data$Project$Concise$paramsUpdateEncoder, uuid, params)));
			case 'ProjectUpdated':
				if (msg.a.$ === 'Ok') {
					var project = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								projects: A2(
									$krisajenkins$remotedata$RemoteData$map,
									$author$project$Data$Project$Concise$putInCollection(project),
									model.projects),
								reviewingSubtitle: $elm$core$Maybe$Nothing
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					var error = msg.a.a;
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'ParamsMsg':
				var uuid = msg.a;
				var params = msg.b;
				var subMsg = msg.c;
				var updatedParams = A2($author$project$View$Video$Processing$Params$update, subMsg, params);
				return _Utils_Tuple2(
					model,
					A2(
						$author$project$Request$Project$update,
						$author$project$Page$Project$Portal$ProjectUpdated,
						A2($author$project$Data$Project$Concise$paramsUpdateEncoder, uuid, updatedParams)));
			case 'StartExportingParams':
				var params = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							paramsToExport: $elm$core$Maybe$Just(params)
						}),
					$elm$core$Platform$Cmd$none);
			case 'CancelExportingParams':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{paramsToExport: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			case 'ExportParams':
				var filename = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{paramsToExport: $elm$core$Maybe$Nothing}),
					function () {
						var _v13 = model.paramsToExport;
						if (_v13.$ === 'Just') {
							var params = _v13.a;
							return A3(
								$elm$file$File$Download$string,
								filename,
								'application/json',
								A2(
									$elm$json$Json$Encode$encode,
									2,
									$author$project$Data$Video$Processing$Params$encoder(params)));
						} else {
							return $elm$core$Platform$Cmd$none;
						}
					}());
			case 'ParamsRequested':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{importingError: $elm$core$Maybe$Nothing}),
					A2(
						$elm$file$File$Select$file,
						_List_fromArray(
							['application/json']),
						$author$project$Page$Project$Portal$ParamsSelected));
			case 'ParamsSelected':
				var file = msg.a;
				return _Utils_Tuple2(
					model,
					A2(
						$elm$core$Task$perform,
						$author$project$Page$Project$Portal$ParamsLoaded,
						$elm$file$File$toString(file)));
			case 'ParamsLoaded':
				var content = msg.a;
				var _v14 = _Utils_Tuple2(
					A2($elm$json$Json$Decode$decodeString, $author$project$Data$Video$Processing$Params$decoder, content),
					A2(
						$krisajenkins$remotedata$RemoteData$map,
						$author$project$Page$Project$Portal$filterSelectedProjects(model.selectedProjects),
						model.projects));
				_v14$2:
				while (true) {
					if (_v14.a.$ === 'Ok') {
						if (((_v14.b.$ === 'Success') && _v14.b.a.b) && (!_v14.b.a.b.b)) {
							var params = _v14.a.a;
							var _v15 = _v14.b.a;
							var uuid = _v15.a.uuid;
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						} else {
							break _v14$2;
						}
					} else {
						if (((_v14.b.$ === 'Success') && _v14.b.a.b) && (!_v14.b.a.b.b)) {
							var error = _v14.a.a;
							var _v16 = _v14.b.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										importingError: $elm$core$Maybe$Just(error)
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v14$2;
						}
					}
				}
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'DismissImportingError':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{importingError: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			case 'SetSearchStr':
				var str = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{searchStr: str}),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		var currentPage = model.currentPage;
		switch (msg.$) {
			case 'SetRoute':
				var targetUrl = msg.a;
				return A2($author$project$Main$setRoute, targetUrl, model);
			case 'ClickedLink':
				var urlRequest = msg.a;
				if (urlRequest.$ === 'Internal') {
					var url = urlRequest.a;
					return _Utils_Tuple2(
						model,
						A2(
							$elm$browser$Browser$Navigation$pushUrl,
							model.key,
							$elm$url$Url$toString(url)));
				} else {
					var url = urlRequest.a;
					return _Utils_Tuple2(
						model,
						$elm$browser$Browser$Navigation$load(url));
				}
			case 'RequestMetaOfNativeClient':
				return _Utils_Tuple2(model, $author$project$Main$requestMetaOfNativeClient);
			case 'NativeClientVersionInfoRequested':
				if (msg.a.$ === 'Ok') {
					var meta = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								nativeClientStatus: $author$project$Data$NativeClient$statusFromMeta(meta)
							}),
						$author$project$Port$connectSocket(_Utils_Tuple0));
				} else {
					var error = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								nativeClientStatus: $author$project$Data$NativeClient$statusFromError(error)
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 'ProjectPortalMsg':
				var subMsg = msg.a;
				var _v2 = A2($author$project$Page$Project$Portal$update, subMsg, model.projectPortal);
				var pageModel = _v2.a;
				var pageCmd = _v2.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{projectPortal: pageModel}),
					A2($elm$core$Platform$Cmd$map, $author$project$Main$ProjectPortalMsg, pageCmd));
			case 'ProjectMsg':
				var subMsg = msg.a;
				if (currentPage.$ === 'Project') {
					var subModel = currentPage.a;
					var _v4 = A3($author$project$Page$Project$update, model.key, subMsg, subModel);
					var pageModel = _v4.a;
					var pageCmd = _v4.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								currentPage: $author$project$Main$Project(pageModel)
							}),
						A2($elm$core$Platform$Cmd$map, $author$project$Main$ProjectMsg, pageCmd));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			default:
				var statusCode = msg.a;
				return _Utils_Tuple2(model, $author$project$Main$requestMetaOfNativeClient);
		}
	});
var $ChristophP$elm_i18next$I18Next$t = F2(
	function (_v0, key) {
		var translations = _v0.a;
		return A2(
			$elm$core$Maybe$withDefault,
			key,
			A2($elm$core$Dict$get, key, translations));
	});
var $author$project$Translations$defaultTitle = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'default_title');
};
var $author$project$Data$NativeClient$getVersion = function (status) {
	if (status.$ === 'Connected') {
		var version = status.a;
		return $elm$core$Maybe$Just(version);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $author$project$View$Spinner$pageLoader = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('lds-ring')
		]),
	A2(
		$elm$core$List$repeat,
		4,
		A2($elm$html$Html$div, _List_Nil, _List_Nil)));
var $author$project$View$Layout$appbarHeight = '4.5rem';
var $elm$html$Html$img = _VirtualDom_node('img');
var $author$project$Route$linkTo = A2($elm$core$Basics$composeL, $elm$html$Html$Attributes$href, $author$project$Route$routeToString);
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $author$project$View$Layout$viewAppbar = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('w-screen flex flex-row justify-between items-stretch bg-theme-600'),
			A2($elm$html$Html$Attributes$style, 'height', $author$project$View$Layout$appbarHeight)
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('logo'),
					$elm$html$Html$Attributes$class('px-2'),
					$author$project$Route$linkTo($author$project$Route$Home)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src('/assets/logo.png'),
							$elm$html$Html$Attributes$class('h-full w-auto')
						]),
					_List_Nil)
				]))
		]));
var $author$project$View$Layout$viewBody = function (attrs) {
	return $elm$html$Html$div(
		_Utils_ap(
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'height', 'calc(100vh - ' + ($author$project$View$Layout$appbarHeight + ')')),
					A2($elm$html$Html$Attributes$style, 'top', $author$project$View$Layout$appbarHeight),
					$elm$html$Html$Attributes$class('absolute pin-b inset-x-0 overflow-x-hidden')
				]),
			attrs));
};
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $author$project$View$Icon$fillCurrent = $elm$svg$Svg$Attributes$fill('currentColor');
var $author$project$View$Icon$noFill = $elm$svg$Svg$Attributes$fill('none');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $author$project$View$Icon$wrapper = F2(
	function (viewBox_, size) {
		var viewBoxStr = A2(
			$elm$core$String$join,
			' ',
			A2($elm$core$List$map, $elm$core$String$fromInt, viewBox_));
		var sizeStr = $elm$core$String$fromInt(size);
		return $elm$svg$Svg$svg(
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width(sizeStr),
					$elm$svg$Svg$Attributes$height(sizeStr),
					$elm$svg$Svg$Attributes$viewBox(viewBoxStr)
				]));
	});
var $author$project$View$Icon$materialIcon = F2(
	function (size, content) {
		var framing = A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
					$author$project$View$Icon$noFill
				]),
			_List_Nil);
		return A3(
			$author$project$View$Icon$wrapper,
			_List_fromArray(
				[0, 0, 24, 24]),
			size,
			A2($elm$core$List$cons, framing, content));
	});
var $author$project$View$Icon$materialIconSimple = F2(
	function (size, drawing) {
		return A2(
			$author$project$View$Icon$materialIcon,
			size,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$d(drawing),
							$author$project$View$Icon$fillCurrent
						]),
					_List_Nil)
				]));
	});
var $author$project$View$Icon$error = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z');
var $author$project$Translations$Request$Error$badBody = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.error.bad_body');
};
var $author$project$Translations$Request$Error$badUrl = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.error.bad_url');
};
var $author$project$Translations$Request$Error$networkError = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.error.network_error');
};
var $ChristophP$elm_i18next$I18Next$Curly = {$: 'Curly'};
var $ChristophP$elm_i18next$I18Next$delimsToTuple = function (delims) {
	switch (delims.$) {
		case 'Curly':
			return _Utils_Tuple2('{{', '}}');
		case 'Underscore':
			return _Utils_Tuple2('__', '__');
		default:
			var tuple = delims.a;
			return tuple;
	}
};
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $ChristophP$elm_i18next$I18Next$replacePlaceholders = F3(
	function (replacements, delims, str) {
		var _v0 = $ChristophP$elm_i18next$I18Next$delimsToTuple(delims);
		var start = _v0.a;
		var end = _v0.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v1, acc) {
					var key = _v1.a;
					var value = _v1.b;
					return A3(
						$elm$core$String$replace,
						_Utils_ap(
							start,
							_Utils_ap(key, end)),
						value,
						acc);
				}),
			str,
			replacements);
	});
var $ChristophP$elm_i18next$I18Next$tr = F4(
	function (_v0, delims, key, replacements) {
		var translations = _v0.a;
		var _v1 = A2($elm$core$Dict$get, key, translations);
		if (_v1.$ === 'Just') {
			var str = _v1.a;
			return A3($ChristophP$elm_i18next$I18Next$replacePlaceholders, replacements, delims, str);
		} else {
			return key;
		}
	});
var $author$project$Translations$Request$StatusCode$otherStatusCodes = F2(
	function (translations, statusCode) {
		return A4(
			$ChristophP$elm_i18next$I18Next$tr,
			translations,
			$ChristophP$elm_i18next$I18Next$Curly,
			'request.status_code.other_status_codes',
			_List_fromArray(
				[
					_Utils_Tuple2('status_code', statusCode)
				]));
	});
var $author$project$Translations$Request$StatusCode$t400 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.status_code.400');
};
var $author$project$Translations$Request$StatusCode$t401 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.status_code.401');
};
var $author$project$Translations$Request$StatusCode$t403 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.status_code.403');
};
var $author$project$Translations$Request$StatusCode$t404 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.status_code.404');
};
var $author$project$Translations$Request$StatusCode$t413 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.status_code.413');
};
var $author$project$Translations$Request$StatusCode$t422 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.status_code.422');
};
var $author$project$Translations$Request$StatusCode$t500 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.status_code.500');
};
var $author$project$Translations$Request$StatusCode$t502 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.status_code.502');
};
var $author$project$Translations$Request$StatusCode$t503 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.status_code.503');
};
var $author$project$Translations$Request$StatusCode$t504 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.status_code.504');
};
var $author$project$API$Request$statusCodeToString = F2(
	function (trn, statusCode) {
		switch (statusCode) {
			case 400:
				return $author$project$Translations$Request$StatusCode$t400(trn);
			case 401:
				return $author$project$Translations$Request$StatusCode$t401(trn);
			case 403:
				return $author$project$Translations$Request$StatusCode$t403(trn);
			case 404:
				return $author$project$Translations$Request$StatusCode$t404(trn);
			case 413:
				return $author$project$Translations$Request$StatusCode$t413(trn);
			case 422:
				return $author$project$Translations$Request$StatusCode$t422(trn);
			case 500:
				return $author$project$Translations$Request$StatusCode$t500(trn);
			case 502:
				return $author$project$Translations$Request$StatusCode$t502(trn);
			case 503:
				return $author$project$Translations$Request$StatusCode$t503(trn);
			case 504:
				return $author$project$Translations$Request$StatusCode$t504(trn);
			default:
				return A2(
					$author$project$Translations$Request$StatusCode$otherStatusCodes,
					trn,
					$elm$core$String$fromInt(statusCode));
		}
	});
var $author$project$Translations$Request$Error$timeout = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'request.error.timeout');
};
var $author$project$API$Request$errorToString = F3(
	function (trn, subErrorToString, error) {
		switch (error.$) {
			case 'BadUrl':
				var url = error.a;
				return $author$project$Translations$Request$Error$badUrl(trn) + ('：' + url);
			case 'Timeout':
				return $author$project$Translations$Request$Error$timeout(trn);
			case 'NetworkError':
				return $author$project$Translations$Request$Error$networkError(trn);
			case 'BadStatus':
				var statusCode = error.a;
				var subError = error.b;
				return A2(subErrorToString, trn, subError);
			default:
				var statusCode = error.a;
				var decodeError = error.b;
				return (((statusCode / 100) | 0) === 2) ? $author$project$Translations$Request$Error$badBody(trn) : A2($author$project$API$Request$statusCodeToString, trn, statusCode);
		}
	});
var $author$project$Translations$Project$projectNotFound = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'project.project_not_found');
};
var $author$project$Data$Project$errorToString = F2(
	function (trn, error) {
		return $author$project$Translations$Project$projectNotFound(trn);
	});
var $author$project$Page$Project$viewError = F2(
	function (trn, error) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('w-full h-full flex flex-col justify-center items-center')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('text-red-700 mb-8')
						]),
					_List_fromArray(
						[
							$author$project$View$Icon$error(64)
						])),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('max-w-lg w-full p-2')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							A3($author$project$API$Request$errorToString, trn, $author$project$Data$Project$errorToString, error))
						]))
				]));
	});
var $author$project$Page$Project$DismissExportingErrorPrompt = {$: 'DismissExportingErrorPrompt'};
var $author$project$Page$Project$JumpTo = function (a) {
	return {$: 'JumpTo', a: a};
};
var $author$project$Page$Project$NoOp = {$: 'NoOp'};
var $author$project$Page$Project$StayOnPage = {$: 'StayOnPage'};
var $author$project$Page$Project$StopPreviewing = {$: 'StopPreviewing'};
var $author$project$Data$Project$Content$allKeyFramesHelp = F2(
	function (contents, keyFrames) {
		allKeyFramesHelp:
		while (true) {
			if (!contents.b) {
				return $elm$core$List$reverse(keyFrames);
			} else {
				if ((contents.a.b.$ === 'FromSegment') && (!contents.a.b.a)) {
					var _v1 = contents.a;
					var index = _v1.a;
					var _v2 = _v1.b;
					var segmentContent = _v2.b;
					var xs = contents.b;
					return A2(
						$author$project$Data$Project$Content$allKeyFramesHelp,
						xs,
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								index,
								$author$project$Data$Video$Segment$getKeyFrame(
									$author$project$Data$Project$SegmentContent$getSegment(segmentContent))),
							keyFrames));
				} else {
					var xs = contents.b;
					var $temp$contents = xs,
						$temp$keyFrames = keyFrames;
					contents = $temp$contents;
					keyFrames = $temp$keyFrames;
					continue allKeyFramesHelp;
				}
			}
		}
	});
var $elm$core$Array$toIndexedList = function (array) {
	var len = array.a;
	var helper = F2(
		function (entry, _v0) {
			var index = _v0.a;
			var list = _v0.b;
			return _Utils_Tuple2(
				index - 1,
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(index, entry),
					list));
		});
	return A3(
		$elm$core$Array$foldr,
		helper,
		_Utils_Tuple2(len - 1, _List_Nil),
		array).b;
};
var $author$project$Data$Project$Content$allKeyFrames = function (contents) {
	return A3(
		$author$project$Util$flip,
		$author$project$Data$Project$Content$allKeyFramesHelp,
		_List_Nil,
		$elm$core$Array$toIndexedList(contents));
};
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $author$project$Translations$ProjectExport$mediaFilesMissing = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'project_export.media_files_missing');
};
var $author$project$Translations$ProjectExport$sourceFileNotFound = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'project_export.source_file_not_found');
};
var $author$project$Data$Project$HtmlExport$errorToString = F2(
	function (trn, error) {
		if (error.$ === 'MediaFilesMissing') {
			return $author$project$Translations$ProjectExport$mediaFilesMissing(trn);
		} else {
			return $author$project$Translations$ProjectExport$sourceFileNotFound(trn);
		}
	});
var $author$project$View$Alert$viewError = F2(
	function (attrs, textContent) {
		return A2(
			$elm$html$Html$div,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('bg-warning-100 text-warning-700 px-4 py-2 cursor-pointer shadow')
					]),
				attrs),
			_List_fromArray(
				[
					$elm$html$Html$text(textContent)
				]));
	});
var $author$project$View$Project$Alert$viewExportingError = F3(
	function (trn, dismissExportingErrorPrompt, error) {
		return A2(
			$author$project$View$Alert$viewError,
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick(dismissExportingErrorPrompt)
				]),
			A3($author$project$API$Request$errorToString, trn, $author$project$Data$Project$HtmlExport$errorToString, error));
	});
var $author$project$Util$viewIfPresent = F2(
	function (maybeValue, viewer) {
		if (maybeValue.$ === 'Just') {
			var a = maybeValue.a;
			return viewer(a);
		} else {
			return $elm$html$Html$text('');
		}
	});
var $author$project$Translations$Page$Project$Prompt$failedToSave = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.prompt.failed_to_save');
};
var $author$project$Translations$Page$Project$Prompt$successfullySaved = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.prompt.successfully_saved');
};
var $author$project$View$Alert$viewSuccess = F2(
	function (attrs, textContent) {
		return A2(
			$elm$html$Html$div,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('bg-grey-700 text-grey-50 px-4 py-2 cursor-pointer shadow')
					]),
				attrs),
			_List_fromArray(
				[
					$elm$html$Html$text(textContent)
				]));
	});
var $author$project$View$Project$Alert$viewSavingResult = F3(
	function (trn, dismissSavingResultPrompt, result) {
		if (result.$ === 'Ok') {
			return A2(
				$author$project$View$Alert$viewSuccess,
				_List_fromArray(
					[
						$elm$html$Html$Events$onClick(dismissSavingResultPrompt)
					]),
				$author$project$Translations$Page$Project$Prompt$successfullySaved(trn));
		} else {
			var error = result.a;
			return A2(
				$author$project$View$Alert$viewError,
				_List_fromArray(
					[
						$elm$html$Html$Events$onClick(dismissSavingResultPrompt)
					]),
				$author$project$Translations$Page$Project$Prompt$failedToSave(trn));
		}
	});
var $author$project$View$Project$Alert$view = F5(
	function (trn, dismissSavingResultPrompt, dismissExportingErrorPrompt, exportingError, savingResult) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('absolute inset-0 invisible flex flex-col justify-start items-center')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2('w-64 flex flex-col justify-start items-stretch py-8 ', true),
									_Utils_Tuple2(
									'visible',
									!(_Utils_eq(exportingError, $elm$core$Maybe$Nothing) && _Utils_eq(savingResult, $elm$core$Maybe$Nothing)))
								]))
						]),
					_List_fromArray(
						[
							A2(
							$author$project$Util$viewIfPresent,
							savingResult,
							A2($author$project$View$Project$Alert$viewSavingResult, trn, dismissSavingResultPrompt)),
							A2(
							$author$project$Util$viewIfPresent,
							exportingError,
							A2($author$project$View$Project$Alert$viewExportingError, trn, dismissExportingErrorPrompt))
						]))
				]));
	});
var $author$project$Translations$Page$Project$LeftPanel$projectSize = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.left_panel.project_size');
};
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $author$project$Data$FileSize$cropDecimal = function (x) {
	if (x < 0.1) {
		return '0.0' + A2($elm$core$Basics$composeL, $elm$core$String$fromInt, $elm$core$Basics$floor)(x * 100);
	} else {
		var _v0 = function (str) {
			return _Utils_Tuple2(
				A2($elm$core$String$dropRight, 2, str),
				A2($elm$core$String$right, 2, str));
		}(
			$elm$core$String$fromInt(
				$elm$core$Basics$floor(x * 100)));
		if (_v0.a === '') {
			var decimalPartStr = _v0.b;
			return '0.' + decimalPartStr;
		} else {
			var integerPartStr = _v0.a;
			var decimalPartStr = _v0.b;
			return (decimalPartStr === '00') ? integerPartStr : (integerPartStr + ('.' + decimalPartStr));
		}
	}
};
var $author$project$Data$FileSize$toString = function (fileSize) {
	var bytes = $author$project$Data$FileSize$toByte(fileSize);
	if (bytes < 1) {
		var _v0 = $elm$core$Basics$floor(bytes * 8);
		if (_v0 === 1) {
			return '1 bit';
		} else {
			var n = _v0;
			return $elm$core$String$fromInt(n) + ' bits';
		}
	} else {
		if (_Utils_cmp(bytes, $author$project$Data$FileSize$factor) < 0) {
			return $author$project$Data$FileSize$cropDecimal(bytes) + ' Bytes';
		} else {
			if (_Utils_cmp(bytes, $author$project$Data$FileSize$factor * $author$project$Data$FileSize$factor) < 0) {
				return $author$project$Data$FileSize$cropDecimal(bytes / $author$project$Data$FileSize$factor) + ' KB';
			} else {
				return $author$project$Data$FileSize$cropDecimal((bytes / $author$project$Data$FileSize$factor) / $author$project$Data$FileSize$factor) + ' MB';
			}
		}
	}
};
var $author$project$Util$viewIf = F2(
	function (condition, content) {
		return condition ? content : $elm$html$Html$text('');
	});
var $author$project$View$Project$viewFileName = F2(
	function (isProjectModified, projectName) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('px-4 py-2 truncate'),
					$elm$html$Html$Attributes$title(projectName)
				]),
			_List_fromArray(
				[
					A2(
					$author$project$Util$viewIf,
					isProjectModified,
					$elm$html$Html$text(' * ')),
					$elm$html$Html$text(projectName)
				]));
	});
var $author$project$Translations$Page$Project$LeftPanel$frontendVersion = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.left_panel.frontend_version');
};
var $elm$html$Html$h4 = _VirtualDom_node('h4');
var $author$project$Translations$Page$Project$LeftPanel$nativeClientVersion = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.left_panel.native_client_version');
};
var $author$project$View$Project$viewVersions = F2(
	function (trn, _v0) {
		var nativeClient = _v0.a;
		var frontend = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('w-full bg-white shadow text-grey-700 text-center my-4 p-2')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('my-2')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h4,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$Page$Project$LeftPanel$frontendVersion(trn))
								])),
							A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Data$Version$toString(frontend))
								]))
						])),
					function () {
					if (nativeClient.$ === 'Just') {
						var version = nativeClient.a;
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('my-2')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h4,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text(
											$author$project$Translations$Page$Project$LeftPanel$nativeClientVersion(trn))
										])),
									A2(
									$elm$html$Html$p,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text(
											$author$project$Data$Version$toString(version))
										]))
								]));
					} else {
						return $elm$html$Html$text('');
					}
				}()
				]));
	});
var $author$project$Data$File$Object$Local = {$: 'Local'};
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$autoplay = $elm$html$Html$Attributes$boolProperty('autoplay');
var $elm$html$Html$Attributes$controls = $elm$html$Html$Attributes$boolProperty('controls');
var $author$project$Data$File$Object$baseToString = function (base) {
	if (base.$ === 'Local') {
		return 'http://localhost:8888';
	} else {
		var url = base.a;
		return $elm$url$Url$toString(url);
	}
};
var $author$project$Data$File$Object$pathToUrl = F2(
	function (base, path) {
		return A3(
			$elm$url$Url$Builder$crossOrigin,
			$author$project$Data$File$Object$baseToString(base),
			path,
			_List_Nil);
	});
var $elm$html$Html$Attributes$preload = $elm$html$Html$Attributes$stringProperty('preload');
var $elm$html$Html$source = _VirtualDom_node('source');
var $elm$html$Html$video = _VirtualDom_node('video');
var $author$project$View$Project$viewVideo = function (uuid) {
	var sourceUrl = A2(
		$author$project$Data$File$Object$pathToUrl,
		$author$project$Data$File$Object$Local,
		_List_fromArray(
			['file', uuid, 'video.mp4']));
	return A2(
		$elm$html$Html$video,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$id('source-file'),
				$elm$html$Html$Attributes$controls(true),
				$elm$html$Html$Attributes$preload('metadata'),
				$elm$html$Html$Attributes$autoplay(false)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$source,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$src(sourceUrl)
					]),
				_List_Nil)
			]));
};
var $author$project$View$Project$viewAuxiliary = F6(
	function (trn, uuid, projectName, isModified, versions, projectSize) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('px-4 py-6 w-80 flex-shrink-0 overflow-y-auto')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('w-full bg-white shadow')
						]),
					_List_fromArray(
						[
							A2($author$project$View$Project$viewFileName, isModified, projectName),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('px-4 py-2')
								]),
							_List_fromArray(
								[
									$author$project$View$Project$viewVideo(uuid)
								]))
						])),
					A2($author$project$View$Project$viewVersions, trn, versions),
					A2(
					$author$project$Util$viewIfPresent,
					projectSize,
					function (size) {
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('flex flex-col justify-around items-center bg-white shadow my-4 p-2')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text(
											$author$project$Translations$Page$Project$LeftPanel$projectSize(trn))
										])),
									A2(
									$elm$html$Html$div,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text(
											$author$project$Data$FileSize$toString(size))
										]))
								]));
					})
				]));
	});
var $author$project$Data$Project$SegmentContent$toUniqueIdentifier = function (content) {
	var _v0 = $author$project$Data$Video$Segment$getTimeInterval(
		$author$project$Data$Project$SegmentContent$getSegment(content));
	var start = _v0.a;
	var end = _v0.b;
	return $elm$core$String$fromInt(start) + ('-' + $elm$core$String$fromInt(end));
};
var $author$project$Data$Project$Content$toUniqueIdentifier = function (content) {
	if (content.$ === 'FromSegment') {
		var segmentContent = content.b;
		return 'segment-' + $author$project$Data$Project$SegmentContent$toUniqueIdentifier(segmentContent);
	} else {
		var index = content.a;
		return 'user-' + $elm$core$String$fromInt(index);
	}
};
var $author$project$Data$Project$DisplaySection$Control = function (a) {
	return {$: 'Control', a: a};
};
var $author$project$Data$Project$DisplaySection$ControlSection = F2(
	function (index, merge) {
		return {index: index, merge: merge};
	});
var $author$project$Data$Project$DisplaySection$Empty = function (a) {
	return {$: 'Empty', a: a};
};
var $author$project$Data$Video$Segment$getIndexInterval = $author$project$Data$Video$Segment$getInterval($author$project$Data$Video$Frame$getIndex);
var $author$project$Data$Video$Segment$isNeighbouring = F2(
	function (segment1, segment2) {
		var _v0 = $author$project$Data$Video$Segment$getIndexInterval(segment2);
		var min2 = _v0.a;
		var max2 = _v0.b;
		var _v1 = $author$project$Data$Video$Segment$getIndexInterval(segment1);
		var min1 = _v1.a;
		var max1 = _v1.b;
		return _Utils_eq(max1 + 1, min2) || _Utils_eq(max2 + 1, min1);
	});
var $author$project$Data$Project$SegmentContent$isNeighbouring = F2(
	function (content1, content2) {
		return A2(
			$author$project$Data$Video$Segment$isNeighbouring,
			$author$project$Data$Project$SegmentContent$getSegment(content1),
			$author$project$Data$Project$SegmentContent$getSegment(content2));
	});
var $author$project$Data$Project$Content$findMergeableContent = F2(
	function (content, candidates) {
		findMergeableContent:
		while (true) {
			if ((content.$ === 'FromSegment') && (!content.a)) {
				var x = content.b;
				if (!candidates.b) {
					return $elm$core$Maybe$Nothing;
				} else {
					if ((candidates.a.b.$ === 'FromSegment') && (!candidates.a.b.a)) {
						var _v2 = candidates.a;
						var i = _v2.a;
						var _v3 = _v2.b;
						var y = _v3.b;
						return A2($author$project$Data$Project$SegmentContent$isNeighbouring, x, y) ? $elm$core$Maybe$Just(
							_Utils_Tuple2(
								i,
								A2($author$project$Data$Project$SegmentContent$merge, x, y))) : $elm$core$Maybe$Nothing;
					} else {
						var ys = candidates.b;
						var $temp$content = content,
							$temp$candidates = ys;
						content = $temp$content;
						candidates = $temp$candidates;
						continue findMergeableContent;
					}
				}
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}
	});
var $author$project$Data$Project$Content$isHidden = function (content) {
	if (content.$ === 'FromSegment') {
		var isContentHidden = content.a;
		return isContentHidden;
	} else {
		var isContentHidden = content.b;
		return isContentHidden;
	}
};
var $author$project$Data$Project$DisplaySection$toFillerSections = function (indexedContents) {
	var go = F2(
		function (indexedContents_, displaySections) {
			go:
			while (true) {
				if (indexedContents_.b) {
					var _v1 = indexedContents_.a;
					var index = _v1.a;
					var content = _v1.b;
					var remaining = indexedContents_.b;
					var control = A2(
						$author$project$Data$Project$DisplaySection$ControlSection,
						index,
						A2($author$project$Data$Project$Content$findMergeableContent, content, remaining));
					if ($author$project$Data$Project$Content$isHidden(content)) {
						var $temp$indexedContents_ = remaining,
							$temp$displaySections = A2(
							$elm$core$List$cons,
							$author$project$Data$Project$DisplaySection$Empty(index),
							displaySections);
						indexedContents_ = $temp$indexedContents_;
						displaySections = $temp$displaySections;
						continue go;
					} else {
						var $temp$indexedContents_ = remaining,
							$temp$displaySections = A2(
							$elm$core$List$cons,
							$author$project$Data$Project$DisplaySection$Control(control),
							displaySections);
						indexedContents_ = $temp$indexedContents_;
						displaySections = $temp$displaySections;
						continue go;
					}
				} else {
					return $elm$core$List$reverse(displaySections);
				}
			}
		});
	return A2(go, indexedContents, _List_Nil);
};
var $author$project$Data$Project$DisplaySection$tupledListFromContents = function (contents) {
	return A3(
		$elm$core$List$map2,
		$elm$core$Tuple$pair,
		$elm$core$Array$toList(contents),
		$elm$core$List$reverse(
			$author$project$Data$Project$DisplaySection$toFillerSections(
				$elm$core$List$reverse(
					$elm$core$Array$toIndexedList(contents)))));
};
var $author$project$Page$Project$MoveSection = F2(
	function (a, b) {
		return {$: 'MoveSection', a: a, b: b};
	});
var $author$project$Page$Project$MovingOver = function (a) {
	return {$: 'MovingOver', a: a};
};
var $author$project$Page$Project$StopMovingSection = {$: 'StopMovingSection'};
var $elm$html$Html$Attributes$draggable = _VirtualDom_attribute('draggable');
var $author$project$Util$onDragEnd = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'dragend',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Util$onDragEnter = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'dragenter',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Util$onDrop = function (msg) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'drop',
		$elm$json$Json$Decode$succeed(
			_Utils_Tuple2(msg, true)));
};
var $author$project$Page$Project$ToggleContentVisibility = function (a) {
	return {$: 'ToggleContentVisibility', a: a};
};
var $author$project$Translations$Page$Project$RightPanel$hiddenContent = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.right_panel.hidden_content');
};
var $author$project$Translations$Page$Project$RightPanel$restoreHiddenContent = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.right_panel.restore_hidden_content');
};
var $author$project$Page$Project$viewHiddenContent = F2(
	function (trn, index) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('h-8 my-4 flex flex-row justify-center items-center')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('w-16 text-grey-600')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$Translations$Page$Project$RightPanel$hiddenContent(trn))
						])),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick(
							$author$project$Page$Project$ToggleContentVisibility(index)),
							$elm$html$Html$Attributes$class('w-16 h-8 btn btn--light-grey')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$Translations$Page$Project$RightPanel$restoreHiddenContent(trn))
						]))
				]));
	});
var $author$project$Page$Project$EditPlainText = F2(
	function (a, b) {
		return {$: 'EditPlainText', a: a, b: b};
	});
var $author$project$Page$Project$FinishEditing = function (a) {
	return {$: 'FinishEditing', a: a};
};
var $author$project$Page$Project$PreEdit = function (a) {
	return {$: 'PreEdit', a: a};
};
var $author$project$Page$Project$RemoveContent = function (a) {
	return {$: 'RemoveContent', a: a};
};
var $author$project$View$Icon$deleteForever = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z');
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $author$project$View$Trix$onBlur = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'trix-blur',
		A2(
			$elm$json$Json$Decode$map,
			function (x) {
				return _Utils_Tuple2(x, true);
			},
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $author$project$View$Trix$onChange = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'trix-change',
		A2(
			$elm$json$Json$Decode$map,
			function (x) {
				return _Utils_Tuple2(x, true);
			},
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $author$project$View$Trix$onFocus = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'trix-focus',
		A2(
			$elm$json$Json$Decode$map,
			function (x) {
				return _Utils_Tuple2(x, true);
			},
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $author$project$View$Trix$editor = function (_v0) {
	var phantomID = _v0.phantomID;
	var toolbarID = _v0.toolbarID;
	var startEditing = _v0.startEditing;
	var editingContent = _v0.editingContent;
	var finishEditing = _v0.finishEditing;
	return A3(
		$elm$html$Html$node,
		'trix-editor',
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$attribute, 'input', phantomID),
				A2($elm$html$Html$Attributes$attribute, 'toolbar', toolbarID),
				$author$project$View$Trix$onFocus(
				function (_v1) {
					return startEditing;
				}),
				$author$project$View$Trix$onChange(editingContent),
				$author$project$View$Trix$onBlur(
				function (_v2) {
					return finishEditing;
				})
			]),
		_List_Nil);
};
var $author$project$View$Trix$hiddenToolbar = function (toolbarID) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$id(toolbarID)
			]),
		_List_Nil);
};
var $author$project$View$Trix$phantom = F2(
	function (phantomID, content) {
		return A2(
			$elm$html$Html$input,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(phantomID),
					$elm$html$Html$Attributes$value(content),
					$elm$html$Html$Attributes$type_('hidden')
				]),
			_List_Nil);
	});
var $author$project$Page$Project$AddPlainTextAfter = function (a) {
	return {$: 'AddPlainTextAfter', a: a};
};
var $author$project$View$Icon$postAdd = function (size) {
	return A2(
		$author$project$View$Icon$materialIcon,
		size,
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z'),
						$author$project$View$Icon$fillCurrent
					]),
				_List_Nil),
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zM7 12v2h8v-2h-3zM7 15h8v2H7z'),
						$author$project$View$Icon$fillCurrent
					]),
				_List_Nil)
			]));
};
var $author$project$Page$Project$viewAddPlainText = function (index) {
	return A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Events$onClick(
				$author$project$Page$Project$AddPlainTextAfter(index)),
				$elm$html$Html$Attributes$class('btn btn--theme btn--textual-plain p-2')
			]),
		_List_fromArray(
			[
				$author$project$View$Icon$postAdd(24)
			]));
};
var $author$project$Page$Project$StartMovingSection = function (a) {
	return {$: 'StartMovingSection', a: a};
};
var $author$project$View$Icon$dragHandle = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M20 9H4v2h16V9zM4 15h16v-2H4v2z');
var $author$project$Page$Project$viewDragHandle = function (index) {
	return A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('btn btn--theme btn--textual-plain w-full cursor-move'),
				$elm$html$Html$Events$onMouseDown(
				$author$project$Page$Project$StartMovingSection(index)),
				$elm$html$Html$Events$onMouseUp($author$project$Page$Project$StopMovingSection)
			]),
		_List_fromArray(
			[
				$author$project$View$Icon$dragHandle(32)
			]));
};
var $author$project$View$Icon$delete = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z');
var $author$project$Page$Project$viewToggleContentVisibility = function (index) {
	return A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Events$onClick(
				$author$project$Page$Project$ToggleContentVisibility(index)),
				$elm$html$Html$Attributes$class('btn btn--white text-warning-500 p-2')
			]),
		_List_fromArray(
			[
				$author$project$View$Icon$delete(24)
			]));
};
var $author$project$Page$Project$viewPlainText = F2(
	function (index, content) {
		var _v0 = _Utils_Tuple2(
			'phantom-' + $elm$core$String$fromInt(index),
			'toolbar-' + $elm$core$String$fromInt(index));
		var phantomID = _v0.a;
		var toolbarID = _v0.b;
		return _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('w-12')
					]),
				_List_fromArray(
					[
						$author$project$Page$Project$viewDragHandle(index)
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('plain-text')
					]),
				_List_fromArray(
					[
						A2($author$project$View$Trix$phantom, phantomID, content),
						$author$project$View$Trix$editor(
						{
							editingContent: $author$project$Page$Project$EditPlainText(index),
							finishEditing: $author$project$Page$Project$FinishEditing(index),
							phantomID: phantomID,
							startEditing: $author$project$Page$Project$PreEdit(index),
							toolbarID: toolbarID
						})
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('w-10 flex flex-col h-full justify-between items-center')
					]),
				_List_fromArray(
					[
						$author$project$Page$Project$viewAddPlainText(index),
						$author$project$Util$isInFactBlankString(content) ? A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick(
								$author$project$Page$Project$RemoveContent(index)),
								$elm$html$Html$Attributes$class('btn btn--white p-2 text-warning-500')
							]),
						_List_fromArray(
							[
								$author$project$View$Icon$deleteForever(24)
							])) : $author$project$Page$Project$viewToggleContentVisibility(index)
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('hidden')
					]),
				_List_fromArray(
					[
						$author$project$View$Trix$hiddenToolbar(toolbarID)
					]))
			]);
	});
var $author$project$Page$Project$ConvertToGif = function (a) {
	return {$: 'ConvertToGif', a: a};
};
var $author$project$Page$Project$PreviewAsCover = function (a) {
	return {$: 'PreviewAsCover', a: a};
};
var $author$project$Page$Project$RevertGif = function (a) {
	return {$: 'RevertGif', a: a};
};
var $author$project$Page$Project$SeekTime = function (a) {
	return {$: 'SeekTime', a: a};
};
var $author$project$Page$Project$SetKeyFrame = F2(
	function (a, b) {
		return {$: 'SetKeyFrame', a: a, b: b};
	});
var $author$project$Page$Project$SplitSection = F2(
	function (a, b) {
		return {$: 'SplitSection', a: a, b: b};
	});
var $author$project$Page$Project$StopPreviewingAsCover = function (a) {
	return {$: 'StopPreviewingAsCover', a: a};
};
var $author$project$Util$formatTimeInSeconds = function (time) {
	var toPaddedString = A2(
		$elm$core$Basics$composeR,
		$elm$core$String$fromInt,
		A2(
			$elm$core$String$padLeft,
			2,
			_Utils_chr('0')));
	var go = F2(
		function (n, ns) {
			go:
			while (true) {
				var _v0 = _Utils_Tuple2(
					$elm$core$List$length(ns) >= 2,
					n);
				if (_v0.a) {
					if (!_v0.b) {
						return ns;
					} else {
						var hour = _v0.b;
						return A2($elm$core$List$cons, hour, ns);
					}
				} else {
					var $temp$n = (n / 60) | 0,
						$temp$ns = A2($elm$core$List$cons, n % 60, ns);
					n = $temp$n;
					ns = $temp$ns;
					continue go;
				}
			}
		});
	return A2(
		$elm$core$String$join,
		':',
		A2(
			$elm$core$List$map,
			toPaddedString,
			A2(go, (time / 1000) | 0, _List_Nil)));
};
var $elm_community$list_extra$List$Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _v1) {
				var y = _v1.a;
				var fy = _v1.b;
				var fx = f(x);
				return (_Utils_cmp(fx, fy) < 0) ? _Utils_Tuple2(x, fx) : _Utils_Tuple2(y, fy);
			});
		if (ls.b) {
			if (!ls.b.b) {
				var l_ = ls.a;
				return $elm$core$Maybe$Just(l_);
			} else {
				var l_ = ls.a;
				var ls_ = ls.b;
				return $elm$core$Maybe$Just(
					A3(
						$elm$core$List$foldl,
						minBy,
						_Utils_Tuple2(
							l_,
							f(l_)),
						ls_).a);
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Data$Video$Segment$getStartingTime = function (_v0) {
	var keyFrame = _v0.a;
	var others = _v0.b;
	var _v1 = A2($elm_community$list_extra$List$Extra$minimumBy, $author$project$Data$Video$Frame$getTime, others);
	if (_v1.$ === 'Nothing') {
		return $author$project$Data$Video$Frame$getTime(keyFrame);
	} else {
		var frame = _v1.a;
		return A2(
			$elm$core$Basics$min,
			$author$project$Data$Video$Frame$getTime(keyFrame),
			$author$project$Data$Video$Frame$getTime(frame));
	}
};
var $author$project$Data$File$Object$relativeTo = F2(
	function (padPath, _v0) {
		var path = _v0.a;
		return $author$project$Data$File$Object$Key(
			_Utils_ap(padPath, path));
	});
var $author$project$Data$File$Object$fromPartialKey = F2(
	function (friendlyUnionID, _v0) {
		var localObjectKey = _v0.localObjectKey;
		return A2(
			$author$project$Data$File$Object$relativeTo,
			_List_fromArray(
				['file', friendlyUnionID]),
			localObjectKey);
	});
var $author$project$Data$File$Object$toUrl = F2(
	function (base, _v0) {
		var path = _v0.a;
		return A2($author$project$Data$File$Object$pathToUrl, base, path);
	});
var $author$project$Data$Video$Frame$getUrl = F3(
	function (base, friendlyUnionID, frame) {
		return A2(
			$author$project$Data$File$Object$toUrl,
			base,
			A2($author$project$Data$File$Object$fromPartialKey, friendlyUnionID, frame));
	});
var $author$project$View$Spinner$skChase = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('sk-chase w-6 h-6')
		]),
	A2(
		$elm$core$List$repeat,
		6,
		A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('sk-chase-dot')
				]),
			_List_Nil)));
var $author$project$Data$Video$Gif$toFileSizeStr = function (_v0) {
	var fileSize = _v0.fileSize;
	return $author$project$Data$FileSize$toString(fileSize);
};
var $author$project$Data$Video$Gif$toUrl = F3(
	function (base, friendlyUnionID, gif) {
		return A2(
			$author$project$Data$File$Object$toUrl,
			base,
			A2($author$project$Data$File$Object$fromPartialKey, friendlyUnionID, gif));
	});
var $author$project$View$Icon$videocam = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z');
var $author$project$View$Icon$link = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z');
var $author$project$View$Icon$linkOff = function (size) {
	return A2(
		$author$project$View$Icon$materialIcon,
		size,
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27'),
						$author$project$View$Icon$fillCurrent
					]),
				_List_Nil),
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M0 24V0'),
						$author$project$View$Icon$fillCurrent
					]),
				_List_Nil)
			]));
};
var $author$project$Util$onMouseEnter = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseenter',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Util$onMouseLeave = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$View$Project$viewFrame = F3(
	function (_v0, keyFrameID, frame) {
		var uuid = _v0.uuid;
		var splitSection = _v0.splitSection;
		var setKeyFrame = _v0.setKeyFrame;
		var hoverOn = _v0.hoverOn;
		var hoverOff = _v0.hoverOff;
		var size = 16;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('flex flex-row-reverse items-stretch justify-start element')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('relative btn group ml-1 last-element:hidden')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('group-hover:opacity-0')
								]),
							_List_fromArray(
								[
									$author$project$View$Icon$link(size)
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick(
									splitSection(frame.index + 1)),
									$elm$html$Html$Attributes$class('absolute inset-0 btn text-secondary-600 hidden group-hover:flex')
								]),
							_List_fromArray(
								[
									$author$project$View$Icon$linkOff(size)
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2('frame-collection__item w-12 md:w-14', true),
									_Utils_Tuple2(
									'frame-collection__item--active',
									_Utils_eq(
										keyFrameID,
										$author$project$Data$Video$Frame$getIndex(frame)))
								])),
							$elm$html$Html$Events$onClick(
							setKeyFrame(frame.index))
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$src(
									A3($author$project$Data$Video$Frame$getUrl, $author$project$Data$File$Object$Local, uuid, frame)),
									$author$project$Util$onMouseEnter(
									hoverOn(frame)),
									$author$project$Util$onMouseLeave(
									hoverOff(frame))
								]),
							_List_Nil)
						]))
				]));
	});
var $author$project$View$Project$viewAllFrames = F2(
	function (segment, config) {
		var keyFrameID = $author$project$Data$Video$Frame$getIndex(
			$author$project$Data$Video$Segment$getKeyFrame(segment));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('frame-collection')
				]),
			A2(
				$elm$core$List$map,
				A2($author$project$View$Project$viewFrame, config, keyFrameID),
				$author$project$Data$Video$Segment$getAllFrames(segment)));
	});
var $author$project$Page$Project$MergeSections = F3(
	function (a, b, c) {
		return {$: 'MergeSections', a: a, b: b, c: c};
	});
var $author$project$View$Icon$arrowUpward = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z');
var $author$project$Page$Project$viewMergeButton = function (between) {
	if (between.$ === 'Control') {
		var index = between.a.index;
		var merge = between.a.merge;
		return A2(
			$author$project$Util$viewIfPresent,
			merge,
			function (_v1) {
				var indexFrom = _v1.a;
				var segmentContent = _v1.b;
				return A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick(
							A3($author$project$Page$Project$MergeSections, index, indexFrom, segmentContent)),
							$elm$html$Html$Attributes$class('btn btn--theme btn--textual-plain p-2')
						]),
					_List_fromArray(
						[
							$author$project$View$Icon$arrowUpward(24)
						]));
			});
	} else {
		return $elm$html$Html$text('');
	}
};
var $author$project$Page$Project$StartSplittingSection = function (a) {
	return {$: 'StartSplittingSection', a: a};
};
var $author$project$Page$Project$StopSplittingSection = {$: 'StopSplittingSection'};
var $author$project$View$Icon$cut = function (size) {
	return A3(
		$author$project$View$Icon$wrapper,
		_List_fromArray(
			[0, 0, 448, 512]),
		size,
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M263.39 256L445.66 73.37c3.12-3.12 3.12-8.19 0-11.31-18.74-18.74-49.14-18.74-67.88 0L223.82 216.35l-43.1-43.18C187.92 159.71 192 144.33 192 128c0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c16.31 0 31.66-4.07 45.11-11.24L184.26 256l-43.15 43.24C127.66 292.07 112.31 288 96 288c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-16.33-4.08-31.71-11.28-45.17l43.1-43.18 153.95 154.29c18.74 18.74 49.14 18.74 67.88 0 3.12-3.12 3.12-8.19 0-11.31L263.39 256zM96 176c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm0 256c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z')
					]),
				_List_Nil)
			]));
};
var $author$project$Page$Project$viewSplitButton = F2(
	function (isSplittingSection, index) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('btn btn--theme btn--textual-plain p-2', true),
							_Utils_Tuple2('bg-grey-100 shadow-inner', isSplittingSection)
						])),
					isSplittingSection ? $elm$html$Html$Events$onClick($author$project$Page$Project$StopSplittingSection) : $elm$html$Html$Events$onClick(
					$author$project$Page$Project$StartSplittingSection(index))
				]),
			_List_fromArray(
				[
					$author$project$View$Icon$cut(21)
				]));
	});
var $author$project$Page$Project$viewSegmentContent = F5(
	function (uuid, _v0, index, content, between) {
		var pendingGifJobs = _v0.pendingGifJobs;
		var splittingSection = _v0.splittingSection;
		var frameToPreview = _v0.frameToPreview;
		var segment = $author$project$Data$Project$SegmentContent$getSegment(content);
		var viewGifBtn = function () {
			var _v7 = _Utils_Tuple2(
				content,
				A2(
					$elm$core$Set$member,
					$author$project$Data$Video$Segment$getTimeInterval(segment),
					pendingGifJobs));
			if (_v7.a.$ === 'FrameSequence') {
				if (_v7.b) {
					var _v8 = _v7.a;
					return A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('btn p-2')
							]),
						_List_fromArray(
							[$author$project$View$Spinner$skChase]));
				} else {
					var _v9 = _v7.a;
					return A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick(
								$author$project$Page$Project$ConvertToGif(index)),
								$elm$html$Html$Attributes$class('btn btn--theme btn--textual-plain p-2')
							]),
						_List_fromArray(
							[
								$author$project$View$Icon$videocam(24)
							]));
				}
			} else {
				var _v10 = _v7.a;
				return A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick(
							$author$project$Page$Project$RevertGif(index)),
							$elm$html$Html$Attributes$class('btn btn--theme btn--textual-plain p-2')
						]),
					_List_fromArray(
						[
							$author$project$View$Icon$videocam(24)
						]));
			}
		}();
		var keyFrameUrl = A2(
			$elm$core$Basics$composeR,
			$author$project$Data$Video$Segment$getKeyFrame,
			A2($author$project$Data$Video$Frame$getUrl, $author$project$Data$File$Object$Local, uuid));
		var isSplittingSection = _Utils_eq(
			splittingSection,
			$elm$core$Maybe$Just(index));
		var coverUrl = function () {
			var _v2 = _Utils_Tuple2(content, frameToPreview);
			if (_v2.a.$ === 'FrameSequence') {
				if (_v2.b.$ === 'Nothing') {
					var _v3 = _v2.a;
					var _v4 = _v2.b;
					return keyFrameUrl(segment);
				} else {
					var _v5 = _v2.a;
					var frame = _v2.b.a;
					return A2(
						$elm$core$List$member,
						frame,
						$author$project$Data$Video$Segment$getAllFrames(segment)) ? A3($author$project$Data$Video$Frame$getUrl, $author$project$Data$File$Object$Local, uuid, frame) : A3(
						$author$project$Data$Video$Frame$getUrl,
						$author$project$Data$File$Object$Local,
						uuid,
						$author$project$Data$Video$Segment$getKeyFrame(segment));
				}
			} else {
				var _v6 = _v2.a;
				var gif = _v6.a;
				return A3($author$project$Data$Video$Gif$toUrl, $author$project$Data$File$Object$Local, uuid, gif);
			}
		}();
		return _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('flex flex-col justify-start items-center w-12')
					]),
				_List_fromArray(
					[
						$author$project$Page$Project$viewDragHandle(index),
						function () {
						if (content.$ === 'FrameSequence') {
							return A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick(
										$author$project$Page$Project$SeekTime(
											$author$project$Data$Video$Segment$getStartingTime(segment))),
										$elm$html$Html$Attributes$class('cursor-pointer text-xs')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$author$project$Util$formatTimeInSeconds(
											$author$project$Data$Video$Segment$getStartingTime(segment)))
									]));
						} else {
							var gif = content.a;
							return $elm$html$Html$text(
								$author$project$Data$Video$Gif$toFileSizeStr(gif));
						}
					}()
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('flex-1 p-1')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$img,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$src(coverUrl),
								$elm$html$Html$Attributes$class('w-full object-contain select-none my-2')
							]),
						_List_Nil)
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('w-10 flex flex-col h-full justify-between items-center')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$author$project$Page$Project$viewMergeButton(between),
								viewGifBtn,
								$author$project$Page$Project$viewAddPlainText(index),
								A2($author$project$Page$Project$viewSplitButton, isSplittingSection, index)
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$author$project$Page$Project$viewToggleContentVisibility(index)
							]))
					])),
				A2(
				$author$project$View$Project$viewAllFrames,
				segment,
				{
					hoverOff: $author$project$Page$Project$StopPreviewingAsCover,
					hoverOn: $author$project$Page$Project$PreviewAsCover,
					isSplitting: isSplittingSection,
					setKeyFrame: $author$project$Page$Project$SetKeyFrame(index),
					splitSection: $author$project$Page$Project$SplitSection(index),
					uuid: uuid
				})
			]);
	});
var $author$project$Page$Project$viewBlock = F5(
	function (trn, uuid, substate, index, _v0) {
		var content = _v0.a;
		var between = _v0.b;
		var attrs = function () {
			var _v2 = substate.movingSection;
			if (_v2.$ === 'Just') {
				var indexFrom = _v2.a;
				return _List_fromArray(
					[
						$author$project$Util$onDrop(
						A2($author$project$Page$Project$MoveSection, indexFrom, index)),
						$author$project$Util$onDragEnter(
						$author$project$Page$Project$MovingOver(index)),
						_Utils_eq(indexFrom, index) ? $elm$html$Html$Attributes$draggable('true') : $elm$html$Html$Attributes$class(''),
						$author$project$Util$onDragEnd($author$project$Page$Project$StopMovingSection),
						$elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'is-dragging-over',
								_Utils_eq(
									substate.movingOver,
									$elm$core$Maybe$Just(index)))
							]))
					]);
			} else {
				return _List_Nil;
			}
		}();
		return $author$project$Data$Project$Content$isHidden(content) ? A2($author$project$Page$Project$viewHiddenContent, trn, index) : A2(
			$elm$html$Html$div,
			A2(
				$elm$core$List$cons,
				$elm$html$Html$Attributes$class('content-block'),
				A2(
					$elm$core$List$cons,
					$elm$html$Html$Attributes$id(
						'block-' + $elm$core$String$fromInt(index)),
					attrs)),
			_List_fromArray(
				[
					function () {
					if (content.$ === 'FromSegment') {
						var segmentContent = content.b;
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('w-full flex flex-row justify-between items-start')
								]),
							A5($author$project$Page$Project$viewSegmentContent, uuid, substate, index, segmentContent, between));
					} else {
						if (content.c.$ === 'PlainText') {
							var plainText = content.c.a;
							return A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('w-full flex flex-row justify-start items-start')
									]),
								A2($author$project$Page$Project$viewPlainText, index, plainText));
						} else {
							return $elm$html$Html$text('');
						}
					}
				}()
				]));
	});
var $author$project$Page$Project$viewBlocks = F4(
	function (trn, uuid, substate, contents) {
		var identifiers = A2(
			$elm$core$List$map,
			$author$project$Data$Project$Content$toUniqueIdentifier,
			$elm$core$Array$toList(contents));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('px-4 py-6 max-w-2xl lg:max-w-4xl overflow-y-scroll')
				]),
			$elm$core$List$singleton(
				A3(
					$elm$html$Html$Keyed$node,
					'div',
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('bg-white shadow flex flex-col items-stretch justify-start')
						]),
					A3(
						$elm$core$List$map2,
						$elm$core$Tuple$pair,
						identifiers,
						A2(
							$elm$core$List$indexedMap,
							A3($author$project$Page$Project$viewBlock, trn, uuid, substate),
							$author$project$Data$Project$DisplaySection$tupledListFromContents(contents))))));
	});
var $author$project$Translations$Page$Project$LeftPanel$discardChangesAndLeave = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.left_panel.discard_changes_and_leave');
};
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $author$project$Translations$Page$Project$LeftPanel$promptUnsavedChanges = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.left_panel.prompt_unsaved_changes');
};
var $author$project$Translations$Page$Project$LeftPanel$saveProjectAndLeave = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.left_panel.save_project_and_leave');
};
var $author$project$Translations$Page$Project$LeftPanel$stayOnPage = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.left_panel.stay_on_page');
};
var $author$project$Util$onClickStopPropagation = function (msg) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'click',
		$elm$json$Json$Decode$succeed(
			_Utils_Tuple2(msg, true)));
};
var $author$project$View$Layout$viewOverlay = F4(
	function (noOp, closeOverlay, attrs, content) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('absolute inset-0 bg-overlay flex flex-col justify-center items-center'),
					$elm$html$Html$Events$onClick(closeOverlay)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					A2(
						$elm$core$List$cons,
						$author$project$Util$onClickStopPropagation(noOp),
						attrs),
					content)
				]));
	});
var $author$project$Translations$ProjectSaving$sourceFileNotFound = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'project_saving.source_file_not_found');
};
var $author$project$Data$Project$Saving$errorToString = F2(
	function (trn, error) {
		return $author$project$Translations$ProjectSaving$sourceFileNotFound(trn);
	});
var $author$project$View$Project$viewAlert = F3(
	function (viewer, dismissMsg, textContent) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('px-4 py-2')
				]),
			_List_fromArray(
				[
					A2(
					viewer,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('text-sm'),
							$elm$html$Html$Events$onClick(dismissMsg)
						]),
					textContent)
				]));
	});
var $author$project$View$Project$viewSavingError = F3(
	function (trn, dismissMsg, error) {
		return A3(
			$author$project$View$Project$viewAlert,
			$author$project$View$Alert$viewError,
			dismissMsg,
			$author$project$Translations$Page$Project$Prompt$failedToSave(trn) + ('：' + A3($author$project$API$Request$errorToString, trn, $author$project$Data$Project$Saving$errorToString, error)));
	});
var $author$project$View$Project$viewConfirmNavigatingAway = F6(
	function (trn, noOp, stayOnPage, saveAndLeave, savingResult, confirmNavigatingAway) {
		return A2(
			$author$project$Util$viewIfPresent,
			confirmNavigatingAway,
			function (targetRoute) {
				return A4(
					$author$project$View$Layout$viewOverlay,
					noOp,
					stayOnPage,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('h-48 w-full max-w-xl flex flex-col justify-around items-center bg-white shadow')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h3,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$Page$Project$LeftPanel$promptUnsavedChanges(trn))
								])),
							function () {
							if ((savingResult.$ === 'Just') && (savingResult.a.$ === 'Err')) {
								var error = savingResult.a.a;
								return A3($author$project$View$Project$viewSavingError, trn, noOp, error);
							} else {
								return $elm$html$Html$text('');
							}
						}(),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('w-full flex flex-row justify-around text-sm')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$button,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('btn btn--theme w-24 h-10'),
											$elm$html$Html$Events$onClick(
											saveAndLeave(targetRoute))
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(
											$author$project$Translations$Page$Project$LeftPanel$saveProjectAndLeave(trn))
										])),
									A2(
									$elm$html$Html$a,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('btn btn--warning btn--outlined w-24 h-10'),
											$author$project$Route$linkTo($author$project$Route$ProjectPortal)
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(
											$author$project$Translations$Page$Project$LeftPanel$discardChangesAndLeave(trn))
										])),
									A2(
									$elm$html$Html$button,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('btn btn--outlined w-24 h-10'),
											$elm$html$Html$Events$onClick(stayOnPage)
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(
											$author$project$Translations$Page$Project$LeftPanel$stayOnPage(trn))
										]))
								]))
						]));
			});
	});
var $author$project$Translations$Page$Project$RightPanel$projectSizeLabel = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.right_panel.project_size_label');
};
var $author$project$Data$File$Object$unpadGif = function (key) {
	if (key.a.b && (key.a.a === 'gif')) {
		var _v1 = key.a;
		var fixedKey = _v1.b;
		return $author$project$Data$File$Object$Key(fixedKey);
	} else {
		return key;
	}
};
var $author$project$Data$Project$SegmentContent$getMediaForRemote = function (content) {
	if (content.$ === 'FrameSequence') {
		var segment = content.a;
		return $author$project$Data$Video$Segment$getKeyFrame(segment).localObjectKey;
	} else {
		var gif = content.a;
		return $author$project$Data$File$Object$unpadGif(gif.localObjectKey);
	}
};
var $author$project$View$Project$Preview$viewSegmentContent = F3(
	function (uuid, base, content) {
		return A2(
			$elm$html$Html$img,
			_List_fromArray(
				[
					function () {
					if (base.$ === 'Local') {
						return $elm$html$Html$Attributes$src(
							A2(
								$author$project$Data$File$Object$toUrl,
								base,
								A2(
									$author$project$Data$File$Object$relativeTo,
									_List_fromArray(
										['file', uuid]),
									$author$project$Data$Project$SegmentContent$getMedia(content))));
					} else {
						return $elm$html$Html$Attributes$src(
							A2(
								$author$project$Data$File$Object$toUrl,
								base,
								$author$project$Data$Project$SegmentContent$getMediaForRemote(content)));
					}
				}(),
					$elm$html$Html$Attributes$class('my-1 w-full h-auto')
				]),
			_List_Nil);
	});
var $author$project$Data$Project$UserContent$pictureBase = $author$project$Data$File$Object$Remote(
	{fragment: $elm$core$Maybe$Nothing, host: 'whatever.com', path: '/path/to/', port_: $elm$core$Maybe$Nothing, protocol: $elm$url$Url$Https, query: $elm$core$Maybe$Nothing});
var $author$project$Data$Project$UserContent$pictureUrl = $author$project$Data$File$Object$toUrl($author$project$Data$Project$UserContent$pictureBase);
var $author$project$View$Trix$preview = F2(
	function (attrs, content) {
		return A3(
			$elm$html$Html$node,
			'rich-text-preview',
			_Utils_ap(
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$attribute, 'content-value', content)
					]),
				attrs),
			_List_Nil);
	});
var $author$project$View$Project$Preview$viewUserContent = function (content) {
	if (content.$ === 'PlainText') {
		var plainText = content.a;
		return A2(
			$author$project$View$Trix$preview,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('p-2')
				]),
			plainText);
	} else {
		var objectKey = content.a;
		return A2(
			$elm$html$Html$img,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$src(
					$author$project$Data$Project$UserContent$pictureUrl(objectKey)),
					$elm$html$Html$Attributes$class('w-full h-auto')
				]),
			_List_Nil);
	}
};
var $author$project$View$Project$Preview$viewContent = F3(
	function (uuid, base, content) {
		_v0$2:
		while (true) {
			if (content.$ === 'FromSegment') {
				if (!content.a) {
					var segmentContent = content.b;
					return A3($author$project$View$Project$Preview$viewSegmentContent, uuid, base, segmentContent);
				} else {
					break _v0$2;
				}
			} else {
				if (!content.b) {
					var userContent = content.c;
					return $author$project$View$Project$Preview$viewUserContent(userContent);
				} else {
					break _v0$2;
				}
			}
		}
		return $elm$html$Html$text('');
	});
var $author$project$View$Project$Preview$view = F2(
	function (_v0, base) {
		var uuid = _v0.uuid;
		var workingData = _v0.workingData;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('flex flex-col items-stretch justify-start')
				]),
			A2(
				$elm$core$List$map,
				A2($author$project$View$Project$Preview$viewContent, uuid, base),
				$elm$core$Array$toList(workingData)));
	});
var $author$project$View$Project$viewPreviewer = F7(
	function (trn, noOp, stopPreviewing, projectSize, baseExportedTo, isPreviewing, project) {
		var viewFrom = function (base) {
			return A4(
				$author$project$View$Layout$viewOverlay,
				noOp,
				stopPreviewing,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('h-full px-12 py-4 flex flex-col items-center')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('h-10 flex-shrink-0 flex px-4 justify-between items-center shadow bg-grey-700 text-white text-sm')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text(
										$author$project$Translations$Page$Project$RightPanel$projectSizeLabel(trn))
									])),
								A2(
								$author$project$Util$viewIfPresent,
								projectSize,
								function (size) {
									return A2(
										$elm$html$Html$span,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(
												$author$project$Data$FileSize$toString(size))
											]));
								})
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('flex-1 mt-4 overflow-y-hidden')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('h-full w-mobile bg-white shadow overflow-y-scroll p-3')
									]),
								_List_fromArray(
									[
										A2($author$project$View$Project$Preview$view, project, base)
									]))
							]))
					]));
		};
		var _v0 = _Utils_Tuple2(baseExportedTo, isPreviewing);
		if (_v0.a.$ === 'Just') {
			var base = _v0.a.a;
			return viewFrom(base);
		} else {
			if (_v0.b) {
				var _v1 = _v0.a;
				return viewFrom($author$project$Data$File$Object$Local);
			} else {
				return $elm$html$Html$text('');
			}
		}
	});
var $author$project$View$Project$viewSectionNavItem = F3(
	function (jumpTo, uuid, _v0) {
		var sectionID = _v0.a;
		var frame = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('cursor-pointer')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src(
							A3($author$project$Data$Video$Frame$getUrl, $author$project$Data$File$Object$Local, uuid, frame)),
							$elm$html$Html$Attributes$class('w-full object-contain select-none'),
							$elm$html$Html$Events$onClick(
							jumpTo(sectionID))
						]),
					_List_Nil)
				]));
	});
var $author$project$View$Project$viewSectionNav = F3(
	function (jumpTo, uuid, frames) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('w-12 overflow-y-auto opacity-25 hover:opacity-75 transition-opacity ease-in duration-150')
				]),
			A2(
				$elm$core$List$map,
				A2($author$project$View$Project$viewSectionNavItem, jumpTo, uuid),
				frames));
	});
var $author$project$Page$Project$ExportProject = {$: 'ExportProject'};
var $author$project$Page$Project$NavigateToPortal = {$: 'NavigateToPortal'};
var $author$project$Page$Project$StartPreviewing = {$: 'StartPreviewing'};
var $author$project$View$Icon$accountBox = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z');
var $author$project$Translations$Page$Project$Nav$backToPortal = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.nav.back_to_portal');
};
var $author$project$View$Icon$cloudUpload = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z');
var $author$project$Translations$Page$Project$Nav$exportProject = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.nav.export_project');
};
var $author$project$View$Icon$lowPriority = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z');
var $author$project$Translations$Page$Project$Nav$previewProject = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.nav.preview_project');
};
var $author$project$View$Icon$save = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z');
var $author$project$Translations$Page$Project$Nav$saveProject = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.nav.save_project');
};
var $author$project$View$Icon$visibility = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z');
var $author$project$Page$Project$viewSidenav = function (trn) {
	var viewNavItem = function (_v0) {
		var label = _v0.a;
		var icon = _v0.b;
		var action = _v0.c;
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick(action),
					$elm$html$Html$Attributes$class('btn btn--theme btn--textual-plain flex flex-col items-center my-2')
				]),
			_List_fromArray(
				[
					icon(32),
					$elm$html$Html$text(label)
				]));
	};
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('w-18 py-8 flex flex-col justify-between items-stretch bg-grey-200')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('flex flex-col items-center')
					]),
				A2(
					$elm$core$List$map,
					viewNavItem,
					_List_fromArray(
						[
							_Utils_Tuple3(
							$author$project$Translations$Page$Project$Nav$saveProject(trn),
							$author$project$View$Icon$save,
							$author$project$Page$Project$SaveProject($elm$core$Maybe$Nothing)),
							_Utils_Tuple3(
							$author$project$Translations$Page$Project$Nav$previewProject(trn),
							$author$project$View$Icon$visibility,
							$author$project$Page$Project$StartPreviewing),
							_Utils_Tuple3(
							$author$project$Translations$Page$Project$Nav$exportProject(trn),
							$author$project$View$Icon$cloudUpload,
							$author$project$Page$Project$ExportProject),
							_Utils_Tuple3(
							$author$project$Translations$Page$Project$Nav$backToPortal(trn),
							$author$project$View$Icon$lowPriority,
							$author$project$Page$Project$NavigateToPortal)
						]))),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('flex flex-col items-center')
					]),
				A2(
					$elm$core$List$map,
					viewNavItem,
					_List_fromArray(
						[
							_Utils_Tuple3('', $author$project$View$Icon$accountBox, $author$project$Page$Project$NoOp)
						])))
			]));
};
var $author$project$Page$Project$viewLoaded = F4(
	function (trn, versions, project, substate) {
		var isModified = !_Utils_eq(substate.lastSaved, project);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('h-full flex flex-row justify-between items-stretch bg-grey-100')
				]),
			_List_fromArray(
				[
					$author$project$Page$Project$viewSidenav(trn),
					A6($author$project$View$Project$viewAuxiliary, trn, project.uuid, project.name, isModified, versions, substate.projectSize),
					A4($author$project$Page$Project$viewBlocks, trn, project.uuid, substate, project.workingData),
					A3(
					$author$project$View$Project$viewSectionNav,
					$author$project$Page$Project$JumpTo,
					project.uuid,
					$author$project$Data$Project$Content$allKeyFrames(project.workingData)),
					A7($author$project$View$Project$viewPreviewer, trn, $author$project$Page$Project$NoOp, $author$project$Page$Project$StopPreviewing, substate.projectSize, substate.baseExportedTo, substate.isPreviewing, project),
					A6(
					$author$project$View$Project$viewConfirmNavigatingAway,
					trn,
					$author$project$Page$Project$NoOp,
					$author$project$Page$Project$StayOnPage,
					A2($elm$core$Basics$composeL, $author$project$Page$Project$SaveProject, $elm$core$Maybe$Just),
					substate.savingResult,
					substate.confirmNavigatingAway),
					A5($author$project$View$Project$Alert$view, trn, $author$project$Page$Project$DismissSavingResultPrompt, $author$project$Page$Project$DismissExportingErrorPrompt, substate.exportingError, substate.savingResult)
				]));
	});
var $author$project$Page$Project$view = F3(
	function (trn, versions, model) {
		return _List_fromArray(
			[
				$author$project$View$Layout$viewAppbar,
				A2(
				$author$project$View$Layout$viewBody,
				_List_Nil,
				_List_fromArray(
					[
						function () {
						switch (model.$) {
							case 'Loading':
								return A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('absolute inset-0 flex justify-center items-center')
										]),
									_List_fromArray(
										[$author$project$View$Spinner$pageLoader]));
							case 'Loaded':
								var project = model.a;
								var substate = model.b;
								return A4($author$project$Page$Project$viewLoaded, trn, versions, project.present, substate);
							default:
								var error = model.a;
								return A2($author$project$Page$Project$viewError, trn, error);
						}
					}()
					]))
			]);
	});
var $author$project$Page$Project$Portal$CloseUploader = {$: 'CloseUploader'};
var $author$project$Page$Project$Portal$NoOp = {$: 'NoOp'};
var $elm$file$File$decoder = _File_decoder;
var $elm$json$Json$Decode$oneOrMoreHelp = F2(
	function (toValue, xs) {
		if (!xs.b) {
			return $elm$json$Json$Decode$fail('a ARRAY with at least ONE element');
		} else {
			var y = xs.a;
			var ys = xs.b;
			return $elm$json$Json$Decode$succeed(
				A2(toValue, y, ys));
		}
	});
var $elm$json$Json$Decode$oneOrMore = F2(
	function (toValue, decoder) {
		return A2(
			$elm$json$Json$Decode$andThen,
			$elm$json$Json$Decode$oneOrMoreHelp(toValue),
			$elm$json$Json$Decode$list(decoder));
	});
var $author$project$Data$Uploader$Media$onDrop = function (tagger) {
	return A2(
		$elm$html$Html$Events$on,
		'drop',
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['dataTransfer', 'files']),
			A2($elm$json$Json$Decode$oneOrMore, tagger, $elm$file$File$decoder)));
};
var $elm$html$Html$section = _VirtualDom_node('section');
var $author$project$Translations$Uploader$failedToUploadSubtitle = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'uploader.failed_to_upload_subtitle');
};
var $author$project$Translations$Uploader$failedToUploadVideo = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'uploader.failed_to_upload_video');
};
var $author$project$Translations$Uploader$uploaded = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'uploader.uploaded');
};
var $author$project$Translations$Uploader$uploadingSubtitle = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'uploader.uploading_subtitle');
};
var $author$project$Translations$Uploader$uploadingVideo = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'uploader.uploading_video');
};
var $author$project$View$Uploader$viewItem = F2(
	function (trn, item) {
		switch (item.$) {
			case 'Uploading':
				var video = item.b;
				var sendingProgress = item.d;
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('p-3')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('truncate')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Data$Uploader$Media$videoToName(video))
								])),
							A2(
							$elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$Uploader$uploadingVideo(trn))
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$Attributes$style,
									'width',
									$elm$core$String$fromFloat(sendingProgress * 100) + '%'),
									$elm$html$Html$Attributes$class('progress-bar')
								]),
							_List_Nil)
						]));
			case 'UploadingSubtitle':
				var name = item.a.name;
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('p-3')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('truncate')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(name)
								])),
							A2(
							$elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$Uploader$uploadingSubtitle(trn))
								]))
						]));
			case 'Uploaded':
				var name = item.a.name;
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('p-3')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('truncate')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(name)
								])),
							A2(
							$elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$Uploader$uploaded(trn))
								]))
						]));
			case 'FailedToUpload':
				var video = item.a;
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('p-3')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('truncate')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Data$Uploader$Media$videoToName(video))
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('text-red-600')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$Uploader$failedToUploadVideo(trn))
								]))
						]));
			default:
				var name = item.a.name;
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('p-3')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('truncate')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(name)
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('text-red-600')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$Uploader$failedToUploadSubtitle(trn))
								]))
						]));
		}
	});
var $author$project$View$Uploader$viewCollection = F2(
	function (trn, items) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('w-full')
				]),
			A2(
				$elm$core$List$map,
				$author$project$View$Uploader$viewItem(trn),
				items));
	});
var $author$project$View$Uploader$view = F4(
	function (trn, noOp, closeOverlay, items) {
		return A4(
			$author$project$View$Layout$viewOverlay,
			noOp,
			closeOverlay,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('max-w-2xl w-full h-full mx-4 my-16 overflow-scroll bg-white shadow')
				]),
			_List_fromArray(
				[
					A2($author$project$View$Uploader$viewCollection, trn, items)
				]));
	});
var $author$project$Page$Project$Portal$PickFiles = {$: 'PickFiles'};
var $author$project$Page$Project$Portal$SetSearchStr = function (a) {
	return {$: 'SetSearchStr', a: a};
};
var $author$project$Translations$Page$ProjectPortal$addFiles = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project_portal.add_files');
};
var $elm$core$String$trim = _String_trim;
var $author$project$Data$FilterSearch$filter = F2(
	function (getter, str) {
		var sanitisedSearchStr = $elm$core$String$toLower(
			$elm$core$String$trim(str));
		var contains = A2(
			$elm$core$Basics$composeR,
			getter,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$String$toLower,
				$elm$core$String$contains(sanitisedSearchStr)));
		return A2(
			$elm$core$List$foldr,
			F2(
				function (item, collection) {
					return contains(item) ? A2($elm$core$List$cons, item, collection) : collection;
				}),
			_List_Nil);
	});
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $author$project$Translations$Page$ProjectPortal$searchBoxPlaceholder = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project_portal.search_box_placeholder');
};
var $author$project$Page$Project$Portal$projectCollectionID = 'picked-videos';
var $author$project$Page$Project$Portal$DeleteProject = function (a) {
	return {$: 'DeleteProject', a: a};
};
var $author$project$Page$Project$Portal$SelectProject = F2(
	function (a, b) {
		return {$: 'SelectProject', a: a, b: b};
	});
var $author$project$View$Icon$checkBox = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z');
var $author$project$View$Icon$checkBoxOutlineBlank = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z');
var $author$project$Translations$Processing$Preset$custom = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'processing.preset.custom');
};
var $author$project$View$Icon$deleteOutline = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4');
var $author$project$View$Icon$editOutline = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z');
var $author$project$Data$Video$Processing$Preset$match = F2(
	function (availablePresets, params) {
		match:
		while (true) {
			if (!availablePresets.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = availablePresets.a;
				var xs = availablePresets.b;
				if (_Utils_eq(x.params, params)) {
					return $elm$core$Maybe$Just(x);
				} else {
					var $temp$availablePresets = xs,
						$temp$params = params;
					availablePresets = $temp$availablePresets;
					params = $temp$params;
					continue match;
				}
			}
		}
	});
var $author$project$Data$Video$Processing$Preset$toName = function (fallback) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Maybe$map(
			function ($) {
				return $.name;
			}),
		$elm$core$Maybe$withDefault(fallback));
};
var $author$project$Data$Project$Concise$getPresetName = F3(
	function (availablePresets, fallback, _v0) {
		var params = _v0.params;
		return A2(
			$author$project$Data$Video$Processing$Preset$toName,
			fallback,
			A2($author$project$Data$Video$Processing$Preset$match, availablePresets, params));
	});
var $author$project$Util$onClickWithCtrlKey = function (tagger) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		A2(
			$elm$json$Json$Decode$map,
			tagger,
			A2($elm$json$Json$Decode$field, 'ctrlKey', $elm$json$Json$Decode$bool)));
};
var $elm$core$Basics$pow = _Basics_pow;
var $elm$core$Basics$round = _Basics_round;
var $author$project$Util$truncateDecimal = F2(
	function (n, k) {
		return $elm$core$Basics$round(
			k * A2($elm$core$Basics$pow, 10, n)) / A2($elm$core$Basics$pow, 10, n);
	});
var $author$project$Util$percentageToString = function (percentage) {
	return $elm$core$String$fromFloat(
		A2($author$project$Util$truncateDecimal, 2, percentage)) + '%';
};
var $author$project$Translations$ProcessingStatus$completed = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'processing_status.completed');
};
var $author$project$Translations$ProcessingStatus$failed = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'processing_status.failed');
};
var $author$project$Translations$ProcessingStatus$notStarted = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'processing_status.not_started');
};
var $author$project$Translations$Processing$Error$badParameters = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'processing.error.bad_parameters');
};
var $author$project$Translations$Processing$Error$cannotDecodeVideo = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'processing.error.cannot_decode_video');
};
var $author$project$Translations$Processing$Error$fileNotFound = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'processing.error.file_not_found');
};
var $author$project$Data$Project$Concise$processingErrorToDisplayString = F2(
	function (trn, processingError) {
		switch (processingError.$) {
			case 'FileNotFound':
				return $author$project$Translations$Processing$Error$fileNotFound(trn);
			case 'BadParameters':
				return $author$project$Translations$Processing$Error$badParameters(trn);
			case 'CannotDecodeVideo':
				return $author$project$Translations$Processing$Error$cannotDecodeVideo(trn);
			default:
				var reason = processingError.a;
				return reason;
		}
	});
var $author$project$Translations$ProcessingStatus$started = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'processing_status.started');
};
var $author$project$Data$Project$Concise$statusToDisplayString = F2(
	function (trn, status) {
		switch (status.$) {
			case 'Uploaded':
				return $author$project$Translations$ProcessingStatus$notStarted(trn);
			case 'Processing':
				var progress = status.a;
				return (progress >= 0) ? $author$project$Util$percentageToString(progress) : $author$project$Translations$ProcessingStatus$started(trn);
			case 'Processed':
				return $author$project$Translations$ProcessingStatus$completed(trn);
			default:
				var error = status.a;
				return A2(
					$elm$core$String$join,
					': ',
					A2(
						$elm$core$List$filter,
						A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
						_List_fromArray(
							[
								$author$project$Translations$ProcessingStatus$failed(trn),
								A3($author$project$API$Request$errorToString, trn, $author$project$Data$Project$Concise$processingErrorToDisplayString, error)
							])));
		}
	});
var $author$project$Page$Project$Portal$PickSubtitleFor = function (a) {
	return {$: 'PickSubtitleFor', a: a};
};
var $author$project$Page$Project$Portal$ReviewSubtitle = function (a) {
	return {$: 'ReviewSubtitle', a: a};
};
var $author$project$View$Icon$subtitles = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z');
var $author$project$Page$Project$Portal$viewSubtitleBadge = F2(
	function (uuid, hasSubtitle) {
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('project-concise__subtitle-badge', true),
							_Utils_Tuple2('is-active', hasSubtitle)
						])),
					hasSubtitle ? $author$project$Util$onClickStopPropagation(
					$author$project$Page$Project$Portal$ReviewSubtitle(uuid)) : $author$project$Util$onClickStopPropagation(
					$author$project$Page$Project$Portal$PickSubtitleFor(uuid))
				]),
			_List_fromArray(
				[
					$author$project$View$Icon$subtitles(24)
				]));
	});
var $author$project$Page$Project$Portal$viewProject = F4(
	function (trn, availablePresets, isSelected, project) {
		var makeSelection = $author$project$Util$onClickWithCtrlKey(
			$author$project$Page$Project$Portal$SelectProject(project.uuid));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('project-concise', true),
							_Utils_Tuple2('is-active', isSelected)
						]))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							makeSelection,
							$elm$html$Html$Attributes$class('checkbox')
						]),
					_List_fromArray(
						[
							isSelected ? $author$project$View$Icon$checkBox(24) : $author$project$View$Icon$checkBoxOutlineBlank(24)
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('project-concise__body'),
							makeSelection
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('project-concise__name--wrapper')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('project-concise__name')
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$div,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('truncate')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text(project.name)
												]))
										])),
									A2($author$project$Page$Project$Portal$viewSubtitleBadge, project.uuid, project.hasSubtitle)
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('project-concise__status')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('mr-4 inline')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(
											A2($author$project$Data$Project$Concise$statusToDisplayString, trn, project.status))
										]))
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('flex-shrink-0 flex flex-col justify-between items-end px-4')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('project-concise__actions')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$button,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('project-concise__delete'),
											$elm$html$Html$Events$onClick(
											$author$project$Page$Project$Portal$DeleteProject(project.uuid))
										]),
									_List_fromArray(
										[
											$author$project$View$Icon$deleteOutline(24)
										])),
									A2(
									$author$project$Util$viewIf,
									_Utils_eq(project.status, $author$project$Data$Project$Concise$Processed),
									A2(
										$elm$html$Html$a,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('project-concise__edit'),
												$author$project$Route$linkTo(
												$author$project$Route$Project(project.uuid))
											]),
										_List_fromArray(
											[
												$author$project$View$Icon$editOutline(24)
											])))
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									makeSelection,
									$elm$html$Html$Attributes$class('project-concise__preset-name')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									A3(
										$author$project$Data$Project$Concise$getPresetName,
										availablePresets,
										$author$project$Translations$Processing$Preset$custom(trn),
										project))
								]))
						])),
					function () {
					var _v0 = project.status;
					if (_v0.$ === 'Processing') {
						var progress = _v0.a;
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('absolute inset-0 bg-overlay px-12 flex flex-row items-center'),
									makeSelection
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('h-4 w-full bg-white')
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$div,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('h-full'),
													isSelected ? $elm$html$Html$Attributes$class('bg-theme-200') : $elm$html$Html$Attributes$class('bg-theme-400'),
													A2(
													$elm$html$Html$Attributes$style,
													'width',
													$author$project$Util$percentageToString(progress))
												]),
											_List_Nil)
										]))
								]));
					} else {
						return $elm$html$Html$text('');
					}
				}()
				]));
	});
var $author$project$Page$Project$Portal$viewProjectCollection = F4(
	function (trn, availablePresets, selectedPickedVideos, projects) {
		var isSelected = A2(
			$elm$core$List$map,
			$author$project$Page$Project$Portal$isProjectSelected(selectedPickedVideos),
			projects);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('flex flex-col items-stretch justify-start max-h-full bg-white shadow'),
					$elm$html$Html$Attributes$id($author$project$Page$Project$Portal$projectCollectionID)
				]),
			A3(
				$elm$core$List$map2,
				A2($author$project$Page$Project$Portal$viewProject, trn, availablePresets),
				isSelected,
				projects));
	});
var $author$project$View$Icon$add = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z');
var $author$project$Translations$Page$ProjectPortal$addFilesEmptyState = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project_portal.add_files_empty_state');
};
var $author$project$Page$Project$Portal$viewProjectCollectionEmptyState = function (trn) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('w-full h-64 max-h-full flex flex-col items-center justify-center text-grey-600 cursor-pointer'),
				$elm$html$Html$Events$onClick($author$project$Page$Project$Portal$PickFiles)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-grey-600')
					]),
				_List_fromArray(
					[
						$author$project$View$Icon$add(96)
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('mt-8')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						$author$project$Translations$Page$ProjectPortal$addFilesEmptyState(trn))
					]))
			]));
};
var $author$project$Page$Project$Portal$viewCollectionPanel = F5(
	function (trn, availablePresets, selectedProjects, searchStr, projects) {
		var wrapper = $elm$html$Html$section(
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('flex-1 px-4 pb-12 max-h-full overflow-y-auto overflow-x-hidden')
				]));
		var itemsToDisplay = $author$project$Util$isInFactBlankString(searchStr) ? projects : A3(
			$author$project$Data$FilterSearch$filter,
			function ($) {
				return $.name;
			},
			searchStr,
			projects);
		return $elm$core$List$isEmpty(projects) ? wrapper(
			_List_fromArray(
				[
					$author$project$Page$Project$Portal$viewProjectCollectionEmptyState(trn)
				])) : wrapper(
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('w-full h-12 flex flex-row justify-between items-center')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$input,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('text'),
									$elm$html$Html$Events$onInput($author$project$Page$Project$Portal$SetSearchStr),
									$elm$html$Html$Attributes$value(searchStr),
									$elm$html$Html$Attributes$placeholder(
									$author$project$Translations$Page$ProjectPortal$searchBoxPlaceholder(trn)),
									$elm$html$Html$Attributes$class('px-2 h-8 mr-2 w-full text-grey-800')
								]),
							_List_Nil),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick($author$project$Page$Project$Portal$PickFiles),
									$elm$html$Html$Attributes$class('btn btn--light-grey w-20 h-8')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$Page$ProjectPortal$addFiles(trn))
								]))
						])),
					A4($author$project$Page$Project$Portal$viewProjectCollection, trn, availablePresets, selectedProjects, itemsToDisplay)
				]));
	});
var $author$project$Page$Project$Portal$CancelExportingParams = {$: 'CancelExportingParams'};
var $author$project$Page$Project$Portal$ExportParams = function (a) {
	return {$: 'ExportParams', a: a};
};
var $author$project$Util$onEnterWith = function (tagger) {
	return A2(
		$elm$html$Html$Events$on,
		'keyup',
		A3(
			$elm$json$Json$Decode$map2,
			$elm$core$Basics$apR,
			$elm$html$Html$Events$targetValue,
			A2(
				$elm$json$Json$Decode$andThen,
				function (key) {
					if (key === 'Enter') {
						return $elm$json$Json$Decode$succeed(tagger);
					} else {
						return $elm$json$Json$Decode$fail(key);
					}
				},
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['key']),
					$elm$json$Json$Decode$string))));
};
var $author$project$Page$Project$Portal$viewExportParams = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('absolute inset-0 z-10 bg-overlay flex items-center justify-center'),
			$elm$html$Html$Events$onClick($author$project$Page$Project$Portal$CancelExportingParams)
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('w-64 h-32 py-6 px-4 bg-white shadow flex flex-col items-center justify-around'),
					$author$project$Util$onClickStopPropagation($author$project$Page$Project$Portal$NoOp)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h3,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('输入文件名')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('w-36 flex flex-row')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$input,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('text'),
									$elm$html$Html$Attributes$class('text-right underlined--teal w-full text-grey-800'),
									$author$project$Util$onEnterWith($author$project$Page$Project$Portal$ExportParams)
								]),
							_List_Nil),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('text-grey-600 ml-1')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('.json')
								]))
						]))
				]))
		]));
var $author$project$Page$Project$Portal$BatchDeleteProjects = {$: 'BatchDeleteProjects'};
var $author$project$Page$Project$Portal$DismissImportingError = {$: 'DismissImportingError'};
var $author$project$Page$Project$Portal$ParamsMsg = F3(
	function (a, b, c) {
		return {$: 'ParamsMsg', a: a, b: b, c: c};
	});
var $author$project$Page$Project$Portal$ParamsRequested = {$: 'ParamsRequested'};
var $author$project$Page$Project$Portal$StartExportingParams = function (a) {
	return {$: 'StartExportingParams', a: a};
};
var $author$project$Page$Project$Portal$StartOver = function (a) {
	return {$: 'StartOver', a: a};
};
var $author$project$Page$Project$Portal$StartProcessingVideos = {$: 'StartProcessingVideos'};
var $author$project$Translations$Page$ProjectPortal$batchRemovePickedVideos = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project_portal.batch_remove_picked_videos');
};
var $author$project$Translations$Page$ProjectPortal$choosePresets = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project_portal.choose_presets');
};
var $elm$html$Html$header = _VirtualDom_node('header');
var $author$project$View$Icon$loop = A2($author$project$Util$flip, $author$project$View$Icon$materialIconSimple, 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z');
var $author$project$Translations$Page$ProjectPortal$startProcessing = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project_portal.start_processing');
};
var $author$project$View$Video$Processing$Params$SetDifferentTypeMinDifference = function (a) {
	return {$: 'SetDifferentTypeMinDifference', a: a};
};
var $author$project$View$Video$Processing$Params$SetIsSameCombined = function (a) {
	return {$: 'SetIsSameCombined', a: a};
};
var $author$project$View$Video$Processing$Params$SetSameTypeMaxDifference = function (a) {
	return {$: 'SetSameTypeMaxDifference', a: a};
};
var $author$project$View$Video$Processing$Params$SetShortNoneCombiningMaxDurationInMs = function (a) {
	return {$: 'SetShortNoneCombiningMaxDurationInMs', a: a};
};
var $author$project$View$Video$Processing$Params$SetSimilarTypeMaxDifference = function (a) {
	return {$: 'SetSimilarTypeMaxDifference', a: a};
};
var $author$project$View$Video$Processing$Params$SetSmoothTypeMinValue = function (a) {
	return {$: 'SetSmoothTypeMinValue', a: a};
};
var $author$project$Data$Video$Processing$Params$allGranularities = _List_fromArray(
	[$author$project$Data$Video$Processing$Params$Rough, $author$project$Data$Video$Processing$Params$Medium, $author$project$Data$Video$Processing$Params$Detailed]);
var $elm$html$Html$label = _VirtualDom_node('label');
var $elm$html$Html$Attributes$for = $elm$html$Html$Attributes$stringProperty('htmlFor');
var $elm$html$Html$Attributes$name = $elm$html$Html$Attributes$stringProperty('name');
var $author$project$Util$onInputNumber = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			function (x) {
				return _Utils_Tuple2(x, true);
			},
			A2(
				$elm$json$Json$Decode$map,
				tagger,
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['target', 'valueAsNumber']),
					$elm$json$Json$Decode$float))));
};
var $author$project$View$Video$Processing$Params$viewField = F4(
	function (fieldName, labelStr, handler, numberValue) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('my-2')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$for(fieldName),
							$elm$html$Html$Attributes$class('font-bold')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(labelStr)
						])),
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('number'),
							$elm$html$Html$Attributes$class('w-full h-8 px-2 my-2 border-px-grey-400'),
							$elm$html$Html$Attributes$name(fieldName),
							$elm$html$Html$Attributes$value(
							$elm$core$String$fromInt(numberValue)),
							$author$project$Util$onInputNumber(
							A2($elm$core$Basics$composeR, $elm$core$Basics$round, handler))
						]),
					_List_Nil)
				]));
	});
var $author$project$View$Video$Processing$Params$SetGranularity = function (a) {
	return {$: 'SetGranularity', a: a};
};
var $author$project$Data$Video$Processing$Params$granularityToString = function (granularity) {
	switch (granularity.$) {
		case 'Rough':
			return 'rough';
		case 'Medium':
			return 'medium';
		default:
			return 'detailed';
	}
};
var $author$project$View$Video$Processing$Params$viewMultipleChoice = F4(
	function (setState, printState, currentState, targetState) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('btn px-2 h-8 text-sm'),
					_Utils_eq(currentState, targetState) ? $elm$html$Html$Attributes$class('btn--teal') : $elm$html$Html$Attributes$class('btn--white'),
					$elm$html$Html$Events$onClick(
					setState(targetState))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					printState(targetState))
				]));
	});
var $author$project$View$Video$Processing$Params$viewGranularity = A2($author$project$View$Video$Processing$Params$viewMultipleChoice, $author$project$View$Video$Processing$Params$SetGranularity, $author$project$Data$Video$Processing$Params$granularityToString);
var $author$project$View$Video$Processing$Params$boolToDisplayString = function (_boolean) {
	return _boolean ? '是' : '否';
};
var $author$project$View$Video$Processing$Params$viewTrueOrFalse = function (setState) {
	return A2($author$project$View$Video$Processing$Params$viewMultipleChoice, setState, $author$project$View$Video$Processing$Params$boolToDisplayString);
};
var $author$project$View$Video$Processing$Params$viewPanel = function (params) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('flex flex-col md:flex-row justify-between items-start md:items-center my-2')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$label,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('font-bold')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('granularity')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('flex flex-row justify-start items-center my-2')
							]),
						A2(
							$elm$core$List$map,
							$author$project$View$Video$Processing$Params$viewGranularity(params.granularity),
							$author$project$Data$Video$Processing$Params$allGranularities))
					])),
				A4($author$project$View$Video$Processing$Params$viewField, 'differentTypeMinDifference', 'differentTypeMinDifference', $author$project$View$Video$Processing$Params$SetDifferentTypeMinDifference, params.differentTypeMinDifference),
				A4($author$project$View$Video$Processing$Params$viewField, 'sameTypeMaxDifference', 'sameTypeMaxDifference', $author$project$View$Video$Processing$Params$SetSameTypeMaxDifference, params.sameTypeMaxDifference),
				A4($author$project$View$Video$Processing$Params$viewField, 'similarTypeMaxDifference', 'similarTypeMaxDifference', $author$project$View$Video$Processing$Params$SetSimilarTypeMaxDifference, params.similarTypeMaxDifference),
				A4($author$project$View$Video$Processing$Params$viewField, 'smoothTypeMinValue', 'smoothTypeMinValue', $author$project$View$Video$Processing$Params$SetSmoothTypeMinValue, params.smoothTypeMinValue),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('flex flex-col md:flex-row justify-between items-start md:items-center my-2')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$label,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('font-bold')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('isSameCombined')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('flex flex-row justify-start items-center my-2')
							]),
						A2(
							$elm$core$List$map,
							A2($author$project$View$Video$Processing$Params$viewTrueOrFalse, $author$project$View$Video$Processing$Params$SetIsSameCombined, params.isSameCombined),
							_List_fromArray(
								[true, false])))
					])),
				A4($author$project$View$Video$Processing$Params$viewField, 'shortNoneCombiningMaxDurationInMs', 'shortNoneCombiningMaxDurationInMs', $author$project$View$Video$Processing$Params$SetShortNoneCombiningMaxDurationInMs, params.shortNoneCombiningMaxDurationInMs)
			]));
};
var $author$project$Page$Project$Portal$SetProcessingPreset = F2(
	function (a, b) {
		return {$: 'SetProcessingPreset', a: a, b: b};
	});
var $author$project$Page$Project$Portal$viewPreset = F4(
	function (trn, uuid, currentPreset, targetPreset) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('py-1 px-2')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('btn w-16 h-8 text-sm'),
							_Utils_eq(
							currentPreset,
							$elm$core$Maybe$Just(targetPreset)) ? $elm$html$Html$Attributes$class('btn--secondary') : $elm$html$Html$Attributes$class('btn--white'),
							$elm$html$Html$Events$onClick(
							A2($author$project$Page$Project$Portal$SetProcessingPreset, uuid, targetPreset))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							A2(
								$author$project$Data$Video$Processing$Preset$toName,
								$author$project$Translations$Processing$Preset$custom(trn),
								$elm$core$Maybe$Just(targetPreset)))
						]))
				]));
	});
var $author$project$Util$viewUnless = function (condition) {
	return $author$project$Util$viewIf(!condition);
};
var $author$project$Page$Project$Portal$viewProjectConfig = F5(
	function (trn, availablePresets, expertMode, importingError, selected) {
		var wrapDisabled = $elm$html$Html$div(
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('w-full p-4 flex flex-col h-64 justify-around items-center text-grey-600 text-lg tracking')
				]));
		if (selected.b) {
			if (!selected.b.b) {
				var project = selected.a;
				var currentPreset = A2($author$project$Data$Video$Processing$Preset$match, availablePresets, project.params);
				var _v1 = project.status;
				if (_v1.$ === 'Uploaded') {
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('w-full p-4 flex flex-col items-stretch bg-white shadow')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$header,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('flex flex-row justify-between items-center')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$h3,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('font-bold flex-shrink-0')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(
												$author$project$Translations$Page$ProjectPortal$choosePresets(trn))
											])),
										A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('truncate ml-6')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(project.name)
											]))
									])),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('my-8 flex flex-row flex-wrap justify-start items-center')
									]),
								A2(
									$elm$core$List$map,
									A3($author$project$Page$Project$Portal$viewPreset, trn, project.uuid, currentPreset),
									availablePresets)),
								A2(
								$author$project$Util$viewIf,
								expertMode,
								A2(
									$elm$html$Html$map,
									A2($author$project$Page$Project$Portal$ParamsMsg, project.uuid, project.params),
									$author$project$View$Video$Processing$Params$viewPanel(project.params))),
								A2(
								$author$project$Util$viewIfPresent,
								importingError,
								function (error) {
									return A2(
										$author$project$View$Alert$viewError,
										_List_fromArray(
											[
												$elm$html$Html$Events$onClick($author$project$Page$Project$Portal$DismissImportingError)
											]),
										'读取文件数据失败');
								}),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('mt-4 flex flex-row-reverse justify-between items-center')
									]),
								A2(
									$elm$core$List$cons,
									A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('btn btn--theme w-16 h-8 shadow'),
												$elm$html$Html$Events$onClick($author$project$Page$Project$Portal$StartProcessingVideos)
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(
												$author$project$Translations$Page$ProjectPortal$startProcessing(trn))
											])),
									expertMode ? _List_fromArray(
										[
											A2(
											$elm$html$Html$button,
											_List_fromArray(
												[
													$elm$html$Html$Events$onClick($author$project$Page$Project$Portal$ParamsRequested),
													$elm$html$Html$Attributes$class('btn btn--secondary w-16 h-8 shadow')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('导入')
												])),
											A2(
											$elm$html$Html$button,
											_List_fromArray(
												[
													$elm$html$Html$Events$onClick(
													$author$project$Page$Project$Portal$StartExportingParams(project.params)),
													$elm$html$Html$Attributes$class('btn btn--teal w-16 h-8 shadow')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('导出')
												]))
										]) : _List_fromArray(
										[
											A2($elm$html$Html$div, _List_Nil, _List_Nil)
										])))
							]));
				} else {
					var otherStatus = _v1;
					return wrapDisabled(
						_List_fromArray(
							[
								A2(
								$elm$html$Html$p,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text(
										A2($author$project$Data$Project$Concise$statusToDisplayString, trn, project.status))
									])),
								A2(
								$author$project$Util$viewUnless,
								_Utils_eq(otherStatus, $author$project$Data$Project$Concise$Processed) || (!expertMode),
								A2(
									$elm$html$Html$button,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('btn btn--light-grey px-2 h-10 text-grey-700'),
											$elm$html$Html$Events$onClick(
											$author$project$Page$Project$Portal$StartOver(project.uuid))
										]),
									_List_fromArray(
										[
											$author$project$View$Icon$loop(24),
											A2(
											$elm$html$Html$span,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('ml-2')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('重新处理')
												]))
										])))
							]));
				}
			} else {
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('flex flex-row justify-around items-center')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick($author$project$Page$Project$Portal$BatchDeleteProjects),
									$elm$html$Html$Attributes$class('btn btn--warning w-20 h-8')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$Page$ProjectPortal$batchRemovePickedVideos(trn))
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick($author$project$Page$Project$Portal$StartProcessingVideos),
									$elm$html$Html$Attributes$class('btn btn--theme w-20 h-8')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$Page$ProjectPortal$startProcessing(trn))
								]))
						]));
			}
		} else {
			return wrapDisabled(_List_Nil);
		}
	});
var $author$project$Page$Project$Portal$RemoveSubtitleFor = function (a) {
	return {$: 'RemoveSubtitleFor', a: a};
};
var $author$project$Page$Project$Portal$StopReviewingSubtitle = {$: 'StopReviewingSubtitle'};
var $author$project$Translations$Page$ProjectPortal$keepCurrentSubtitle = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project_portal.keep_current_subtitle');
};
var $author$project$Translations$Page$ProjectPortal$promptAlreadyUploadedSubtitle = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project_portal.prompt_already_uploaded_subtitle');
};
var $author$project$Translations$Page$ProjectPortal$removeSubtitle = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project_portal.remove_subtitle');
};
var $author$project$Translations$Page$ProjectPortal$replaceSubtitle = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project_portal.replace_subtitle');
};
var $author$project$Page$Project$Portal$viewReviewSubtitle = F2(
	function (trn, uuid) {
		return A4(
			$author$project$View$Layout$viewOverlay,
			$author$project$Page$Project$Portal$NoOp,
			$author$project$Page$Project$Portal$StopReviewingSubtitle,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('max-w-lg w-full h-48 flex flex-col justify-around px-4 bg-white shadow')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h3,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('text-center')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$Translations$Page$ProjectPortal$promptAlreadyUploadedSubtitle(trn))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('w-full flex flex-row justify-around items-center')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick(
									$author$project$Page$Project$Portal$PickSubtitleFor(uuid)),
									$elm$html$Html$Attributes$class('btn btn--theme w-20 h-8 mx-4')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$Page$ProjectPortal$replaceSubtitle(trn))
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick(
									$author$project$Page$Project$Portal$RemoveSubtitleFor(uuid)),
									$elm$html$Html$Attributes$class('btn btn--warning btn--outlined w-20 h-8 mx-4')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$Page$ProjectPortal$removeSubtitle(trn))
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick($author$project$Page$Project$Portal$StopReviewingSubtitle),
									$elm$html$Html$Attributes$class('btn btn--light-grey w-20 h-8 mx-4')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$Page$ProjectPortal$keepCurrentSubtitle(trn))
								]))
						]))
				]));
	});
var $author$project$Page$Project$Portal$view = F2(
	function (trn, model) {
		var _v0 = _Utils_Tuple2(model.projects, model.availablePresets);
		if ((_v0.a.$ === 'Success') && (_v0.b.$ === 'Success')) {
			var projects = _v0.a.a;
			var availablePresets = _v0.b.a;
			return _List_fromArray(
				[
					$author$project$View$Layout$viewAppbar,
					A2(
					$author$project$View$Layout$viewBody,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('flex flex-row justify-around items-start px-16 bg-grey-50'),
							$author$project$Data$Uploader$Media$onDrop($author$project$Page$Project$Portal$FilesSelected)
						]),
					_List_fromArray(
						[
							A5($author$project$Page$Project$Portal$viewCollectionPanel, trn, availablePresets, model.selectedProjects, model.searchStr, projects),
							A2(
							$elm$html$Html$section,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('flex-1 px-4 py-12 max-h-full overflow-y-auto')
								]),
							_List_fromArray(
								[
									A5(
									$author$project$Page$Project$Portal$viewProjectConfig,
									trn,
									availablePresets,
									model.expertMode,
									model.importingError,
									A2($author$project$Page$Project$Portal$filterSelectedProjects, model.selectedProjects, projects))
								]))
						])),
					A2(
					$author$project$Util$viewUnless,
					_Utils_eq(model.paramsToExport, $elm$core$Maybe$Nothing),
					$author$project$Page$Project$Portal$viewExportParams),
					A2(
					$author$project$Util$viewIf,
					model.isDisplayingUploader,
					A4($author$project$View$Uploader$view, trn, $author$project$Page$Project$Portal$NoOp, $author$project$Page$Project$Portal$CloseUploader, model.items)),
					A2(
					$author$project$Util$viewIfPresent,
					model.reviewingSubtitle,
					$author$project$Page$Project$Portal$viewReviewSubtitle(trn))
				]);
		} else {
			return _List_Nil;
		}
	});
var $author$project$Translations$NativeClient$attemptingToLaunch = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'native_client.attempting_to_launch');
};
var $author$project$Translations$NativeClient$connected = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'native_client.connected');
};
var $author$project$Translations$NativeClient$disconnected = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'native_client.disconnected');
};
var $author$project$Translations$NativeClient$incompatible = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'native_client.incompatible');
};
var $author$project$Translations$NativeClient$platformError = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'native_client.platform_error');
};
var $author$project$Translations$NativeClient$unknown = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'native_client.unknown');
};
var $author$project$Translations$NativeClient$versionUnknown = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'native_client.version_unknown');
};
var $author$project$Data$NativeClient$statusToString = F2(
	function (trn, status) {
		switch (status.$) {
			case 'Connected':
				return $author$project$Translations$NativeClient$connected(trn);
			case 'Incompatible':
				return $author$project$Translations$NativeClient$incompatible(trn);
			case 'VersionUnknown':
				return $author$project$Translations$NativeClient$versionUnknown(trn);
			case 'Disconnected':
				return $author$project$Translations$NativeClient$disconnected(trn);
			case 'PlatformError':
				return $author$project$Translations$NativeClient$platformError(trn);
			default:
				return $author$project$Translations$NativeClient$unknown(trn);
		}
	});
var $author$project$View$NativeClient$downloadLink = 'https://editool.blob.core.chinacloudapi.cn/client/editool.exe';
var $author$project$Translations$NativeClient$promptPart1 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'native_client.prompt_part1');
};
var $author$project$Translations$NativeClient$promptPart2 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'native_client.prompt_part2');
};
var $author$project$Translations$NativeClient$promptPart3 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'native_client.prompt_part3');
};
var $author$project$Translations$NativeClient$promptPart4 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'native_client.prompt_part4');
};
var $author$project$Translations$NativeClient$promptPart5 = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'native_client.prompt_part5');
};
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $author$project$View$NativeClient$uriScheme = 'Editool://';
var $author$project$View$NativeClient$viewGeneralErrorMessages = function (trn) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('text-grey-800')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$span,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(
						$author$project$Translations$NativeClient$promptPart1(trn))
					])),
				A2(
				$elm$html$Html$a,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$target('_blank'),
						$elm$html$Html$Attributes$href($author$project$View$NativeClient$uriScheme),
						$elm$html$Html$Attributes$class('px-1 text-theme-400 font-bold')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						$author$project$Translations$NativeClient$promptPart2(trn))
					])),
				A2(
				$elm$html$Html$span,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(
						$author$project$Translations$NativeClient$promptPart3(trn))
					])),
				A2(
				$elm$html$Html$a,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$target('_blank'),
						$elm$html$Html$Attributes$href($author$project$View$NativeClient$downloadLink),
						$elm$html$Html$Attributes$class('px-1 text-theme-400 font-bold')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						$author$project$Translations$NativeClient$promptPart4(trn))
					])),
				A2(
				$elm$html$Html$span,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(
						$author$project$Translations$NativeClient$promptPart5(trn))
					]))
			]));
};
var $author$project$View$NativeClient$viewError = F2(
	function (trn, status) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('w-full h-full flex flex-col justify-between p-8')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('self-center h-64 flex flex-col items-center justify-center')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('text-grey-600 text-lg')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									A2($author$project$Data$NativeClient$statusToString, trn, status))
								])),
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('text-grey-600 text-lg mt-8')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Translations$NativeClient$attemptingToLaunch(trn))
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('flex flex-row justify-center')
						]),
					_List_fromArray(
						[
							$author$project$View$NativeClient$viewGeneralErrorMessages(trn)
						]))
				]));
	});
var $author$project$View$NativeClient$wrapPopup = function (content) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('absolute inset-0 bg-overlay flex justify-center items-center')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('bg-white shadow max-w-xl w-full')
					]),
				content)
			]));
};
var $author$project$View$NativeClient$viewPopup = F2(
	function (trn, status) {
		return $author$project$Data$NativeClient$isStatusNormal(status) ? $elm$html$Html$text('') : $author$project$View$NativeClient$wrapPopup(
			_List_fromArray(
				[
					A2($author$project$View$NativeClient$viewError, trn, status)
				]));
	});
var $author$project$Translations$Page$Project$pageTitle = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project.page_title');
};
var $author$project$Page$Project$viewTitle = F2(
	function (trn, model) {
		return $author$project$Translations$Page$Project$pageTitle(trn);
	});
var $author$project$Translations$Page$ProjectPortal$pageTitle = function (translations) {
	return A2($ChristophP$elm_i18next$I18Next$t, translations, 'page.project_portal.page_title');
};
var $author$project$Page$Project$Portal$viewTitle = F2(
	function (trn, model) {
		return $author$project$Translations$Page$ProjectPortal$pageTitle(trn);
	});
var $author$project$Main$view = function (model) {
	var translations = model.translations;
	var defaultTitle = $author$project$Translations$defaultTitle(translations);
	var _v0 = function () {
		var _v1 = model.currentPage;
		switch (_v1.$) {
			case 'Blank':
				return {content: _List_Nil, title: defaultTitle};
			case 'Home':
				return {
					content: _List_fromArray(
						[
							$elm$html$Html$text('Welcome Home!')
						]),
					title: defaultTitle
				};
			case 'ProjectPortal':
				return {
					content: A2(
						$elm$core$List$map,
						$elm$html$Html$map($author$project$Main$ProjectPortalMsg),
						A2($author$project$Page$Project$Portal$view, translations, model.projectPortal)),
					title: A2($author$project$Page$Project$Portal$viewTitle, translations, model.projectPortal)
				};
			case 'Project':
				var subModel = _v1.a;
				return {
					content: A2(
						$elm$core$List$map,
						$elm$html$Html$map($author$project$Main$ProjectMsg),
						A3(
							$author$project$Page$Project$view,
							translations,
							_Utils_Tuple2(
								$author$project$Data$NativeClient$getVersion(model.nativeClientStatus),
								$author$project$Data$Version$Platform$currentVersions.frontend),
							subModel)),
					title: A2($author$project$Page$Project$viewTitle, translations, subModel)
				};
			default:
				return {
					content: _List_fromArray(
						[
							$elm$html$Html$text('Page not found')
						]),
					title: '404 页面未找到'
				};
		}
	}();
	var title = _v0.title;
	var content = _v0.content;
	return {
		body: _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('absolute inset-0 z-0')
					]),
				content),
				A2($author$project$View$NativeClient$viewPopup, translations, model.nativeClientStatus)
			]),
		title: title
	};
};
var $author$project$Main$main = $elm$browser$Browser$application(
	{init: $author$project$Main$init, onUrlChange: $author$project$Main$onUrlChange, onUrlRequest: $author$project$Main$onUrlRequest, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update, view: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main($elm$json$Json$Decode$value)({"versions":{"elm":"0.19.1"},"types":{"message":"Main.Msg","aliases":{"Data.NativeClient.Meta":{"args":[],"type":"{ version : Data.Version.Version, isCompatible : Basics.Bool }"},"Data.Version.Version":{"args":[],"type":"{ major : Basics.Int, minor : Basics.Int, patch : Basics.Int, buildNo : Basics.Int }"},"Data.Project.Concise.Concise":{"args":[],"type":"{ uuid : String.String, name : String.String, hasSubtitle : Basics.Bool, params : Data.Video.Processing.Params.Params, status : Data.Project.Concise.Status }"},"Data.Video.Frame.Frame":{"args":[],"type":"{ index : Basics.Int, localObjectKey : Data.File.Object.Key, time : Basics.Int }"},"Data.Video.Gif.Gif":{"args":[],"type":"{ localObjectKey : Data.File.Object.Key, fileSize : Data.FileSize.FileSize }"},"Data.Video.Processing.Params.Params":{"args":[],"type":"{ granularity : Data.Video.Processing.Params.Granularity, differentTypeMinDifference : Basics.Int, sameTypeMaxDifference : Basics.Int, similarTypeMaxDifference : Basics.Int, smoothTypeMinValue : Basics.Int, isSameCombined : Basics.Bool, shortNoneCombiningMaxDurationInMs : Basics.Int }"},"Data.Video.Processing.Preset.Preset":{"args":[],"type":"{ name : String.String, description : Maybe.Maybe String.String, params : Data.Video.Processing.Params.Params }"},"Data.Project.Project":{"args":[],"type":"{ uuid : String.String, name : String.String, workingData : Array.Array Data.Project.Content.Content }"},"Data.Project.Concise.StatusUpdate":{"args":[],"type":"{ uuid : String.String, status : Data.Project.Concise.Status }"},"Url.Url":{"args":[],"type":"{ protocol : Url.Protocol, host : String.String, port_ : Maybe.Maybe Basics.Int, path : String.String, query : Maybe.Maybe String.String, fragment : Maybe.Maybe String.String }"},"RemoteData.WebData":{"args":["a"],"type":"RemoteData.RemoteData Http.Error a"},"Array.Tree":{"args":["a"],"type":"Elm.JsArray.JsArray (Array.Node a)"},"Json.Decode.Value":{"args":[],"type":"Json.Encode.Value"}},"unions":{"Main.Msg":{"args":[],"tags":{"SetRoute":["Maybe.Maybe Route.Route"],"ClickedLink":["Browser.UrlRequest"],"RequestMetaOfNativeClient":[],"NativeClientVersionInfoRequested":["Result.Result (API.Request.Error Data.NativeClient.MetaError) Data.NativeClient.Meta"],"ProjectPortalMsg":["Page.Project.Portal.Msg"],"ProjectMsg":["Page.Project.Msg"],"WebsocketClosed":["Basics.Int"]}},"Basics.Bool":{"args":[],"tags":{"True":[],"False":[]}},"API.Request.Error":{"args":["e"],"tags":{"BadUrl":["String.String"],"Timeout":[],"NetworkError":[],"BadStatus":["Basics.Int","e"],"BadBody":["Basics.Int","Json.Decode.Error"]}},"Basics.Int":{"args":[],"tags":{"Int":[]}},"Maybe.Maybe":{"args":["a"],"tags":{"Just":["a"],"Nothing":[]}},"Data.NativeClient.MetaError":{"args":[],"tags":{"MalformedVersionNumber":[]}},"Page.Project.Msg":{"args":[],"tags":{"LoadProject":["String.String"],"ProjectLoaded":["Result.Result (API.Request.Error Data.Project.Error) Data.Project.Project"],"ConvertToGif":["Basics.Int"],"GifProcessed":["( Basics.Int, Basics.Int )","Result.Result (API.Request.Error Data.Video.Gif.Error) Data.Video.Gif.Gif"],"RevertGif":["Basics.Int"],"AddPlainTextAfter":["Basics.Int"],"ToggleContentVisibility":["Basics.Int"],"RemoveContent":["Basics.Int"],"PreEdit":["Basics.Int"],"EditPlainText":["Basics.Int","String.String"],"FinishEditing":["Basics.Int"],"PreviewAsCover":["Data.Video.Frame.Frame"],"StopPreviewingAsCover":["Data.Video.Frame.Frame"],"MergeSections":["Basics.Int","Basics.Int","Data.Project.SegmentContent.SegmentContent"],"StartSplittingSection":["Basics.Int"],"StopSplittingSection":[],"SplitSection":["Basics.Int","Basics.Int"],"StartMovingSection":["Basics.Int"],"StopMovingSection":[],"MoveSection":["Basics.Int","Basics.Int"],"MovingOver":["Basics.Int"],"SetKeyFrame":["Basics.Int","Basics.Int"],"StartPreviewing":[],"StopPreviewing":[],"SaveProject":["Maybe.Maybe Route.Route"],"ProjectSaved":["Maybe.Maybe Route.Route","Result.Result (API.Request.Error Data.Project.Saving.Error) ()"],"DismissSavingResultPrompt":[],"ExportProject":[],"ProjectExported":["Result.Result (API.Request.Error Data.Project.HtmlExport.Error) Data.File.Object.Base"],"DismissExportingErrorPrompt":[],"SeekTime":["Basics.Int"],"RequestProjectSize":[],"ProjectSizeRequested":["Result.Result (API.Request.Error Data.Project.HtmlExport.Error) Data.FileSize.FileSize"],"UndoProject":[],"RedoProject":[],"JumpTo":["Basics.Int"],"NavigateToPortal":[],"StayOnPage":[],"ChangeBeforeUnloadPrompt":[],"NoOp":[]}},"Page.Project.Portal.Msg":{"args":[],"tags":{"ToggleExpertMode":[],"PresetsLoaded":["RemoteData.WebData (List.List Data.Video.Processing.Preset.Preset)"],"ProjectsLoaded":["RemoteData.WebData (List.List Data.Project.Concise.Concise)"],"PickFiles":[],"FilesSelected":["File.File","List.List File.File"],"UploadVideo":["Data.Uploader.Media.Video","Maybe.Maybe Data.Uploader.Media.Subtitle","String.String"],"VideoUploading":["String.String","Http.Progress"],"VideoUploaded":["Data.Uploader.Media.Video","Maybe.Maybe Data.Uploader.Media.Subtitle","Result.Result Http.Error Data.Project.Concise.Concise"],"PickSubtitleFor":["String.String"],"SubtitleSelected":["String.String","File.File"],"SubtitleLoaded":["String.String","String.String","String.String"],"SubtitleUploaded":["String.String","Result.Result (API.Request.Error Data.Project.Concise.SubtitleError) Data.Project.Concise.Concise"],"OpenUploader":[],"CloseUploader":[],"ReviewSubtitle":["String.String"],"StopReviewingSubtitle":[],"RemoveSubtitleFor":["String.String"],"SelectProject":["String.String","Basics.Bool"],"DeleteProject":["String.String"],"BatchDeleteProjects":[],"ProjectsDeleted":["Set.Set String.String","Result.Result Http.Error ()"],"StartProcessingVideos":[],"VideoProcessingStarted":["Set.Set String.String","Result.Result (API.Request.Error Data.Project.Concise.ProcessingError) ()"],"ProcessingStatusUpdate":["Result.Result Json.Decode.Error Data.Project.Concise.StatusUpdate"],"StartOver":["String.String"],"SetProcessingPreset":["String.String","Data.Video.Processing.Preset.Preset"],"ProjectUpdated":["Result.Result (API.Request.Error Data.Project.Concise.UpdateError) Data.Project.Concise.Concise"],"ParamsMsg":["String.String","Data.Video.Processing.Params.Params","View.Video.Processing.Params.Msg"],"StartExportingParams":["Data.Video.Processing.Params.Params"],"CancelExportingParams":[],"ExportParams":["String.String"],"ParamsRequested":[],"ParamsSelected":["File.File"],"ParamsLoaded":["String.String"],"DismissImportingError":[],"SetSearchStr":["String.String"],"NoOp":[]}},"Result.Result":{"args":["error","value"],"tags":{"Ok":["value"],"Err":["error"]}},"Route.Route":{"args":[],"tags":{"Home":[],"ProjectPortal":[],"Project":["String.String"]}},"Browser.UrlRequest":{"args":[],"tags":{"Internal":["Url.Url"],"External":["String.String"]}},"Array.Array":{"args":["a"],"tags":{"Array_elm_builtin":["Basics.Int","Basics.Int","Array.Tree a","Elm.JsArray.JsArray a"]}},"Data.File.Object.Base":{"args":[],"tags":{"Local":[],"Remote":["Url.Url"]}},"Data.Project.Content.Content":{"args":[],"tags":{"FromSegment":["Basics.Bool","Data.Project.SegmentContent.SegmentContent"],"FromUser":["Basics.Int","Basics.Bool","Data.Project.UserContent.UserContent"]}},"Data.Project.Error":{"args":[],"tags":{"ProjectNotFound":[]}},"Data.Project.HtmlExport.Error":{"args":[],"tags":{"MediaFilesMissing":["List.List Data.File.Object.Key"],"SourceFileNotFound":[]}},"Data.Project.Saving.Error":{"args":[],"tags":{"SourceFileNotFound":[]}},"Data.Video.Gif.Error":{"args":[],"tags":{"IntervalTooSmall":[],"SourceFileNotFound":[]}},"Http.Error":{"args":[],"tags":{"BadUrl":["String.String"],"Timeout":[],"NetworkError":[],"BadStatus":["Basics.Int"],"BadBody":["String.String"]}},"Json.Decode.Error":{"args":[],"tags":{"Field":["String.String","Json.Decode.Error"],"Index":["Basics.Int","Json.Decode.Error"],"OneOf":["List.List Json.Decode.Error"],"Failure":["String.String","Json.Decode.Value"]}},"File.File":{"args":[],"tags":{"File":[]}},"Data.FileSize.FileSize":{"args":[],"tags":{"Bit":["Basics.Int"],"Byte":["Basics.Float"],"Kibibyte":["Basics.Float"],"Mebibyte":["Basics.Float"]}},"Data.Video.Processing.Params.Granularity":{"args":[],"tags":{"Rough":[],"Medium":[],"Detailed":[]}},"Data.File.Object.Key":{"args":[],"tags":{"Key":["List.List String.String"]}},"List.List":{"args":["a"],"tags":{}},"View.Video.Processing.Params.Msg":{"args":[],"tags":{"SetGranularity":["Data.Video.Processing.Params.Granularity"],"SetDifferentTypeMinDifference":["Basics.Int"],"SetSameTypeMaxDifference":["Basics.Int"],"SetSimilarTypeMaxDifference":["Basics.Int"],"SetSmoothTypeMinValue":["Basics.Int"],"SetIsSameCombined":["Basics.Bool"],"SetShortNoneCombiningMaxDurationInMs":["Basics.Int"],"NoOp":[]}},"Data.Project.Concise.ProcessingError":{"args":[],"tags":{"FileNotFound":[],"CannotDecodeVideo":[],"BadParameters":[],"OtherProcessingError":["String.String"]}},"Http.Progress":{"args":[],"tags":{"Sending":["{ sent : Basics.Int, size : Basics.Int }"],"Receiving":["{ received : Basics.Int, size : Maybe.Maybe Basics.Int }"]}},"Url.Protocol":{"args":[],"tags":{"Http":[],"Https":[]}},"RemoteData.RemoteData":{"args":["e","a"],"tags":{"NotAsked":[],"Loading":[],"Failure":["e"],"Success":["a"]}},"Data.Project.SegmentContent.SegmentContent":{"args":[],"tags":{"FrameSequence":["Data.Video.Segment.Segment","Maybe.Maybe Data.Video.Gif.Gif"],"GifFromVideo":["Data.Video.Gif.Gif","Data.Video.Segment.Segment"]}},"Set.Set":{"args":["t"],"tags":{"Set_elm_builtin":["Dict.Dict t ()"]}},"Data.Project.Concise.Status":{"args":[],"tags":{"Uploaded":[],"Processing":["Basics.Float"],"Processed":[],"FailedToProcess":["API.Request.Error Data.Project.Concise.ProcessingError"]}},"String.String":{"args":[],"tags":{"String":[]}},"Data.Uploader.Media.Subtitle":{"args":[],"tags":{"Subtitle":["Basics.Int","File.File"]}},"Data.Project.Concise.SubtitleError":{"args":[],"tags":{"InvalidSubtitle":[]}},"Data.Project.Concise.UpdateError":{"args":[],"tags":{"InvalidParams":[]}},"Data.Uploader.Media.Video":{"args":[],"tags":{"Video":["File.File"]}},"Dict.Dict":{"args":["k","v"],"tags":{"RBNode_elm_builtin":["Dict.NColor","k","v","Dict.Dict k v","Dict.Dict k v"],"RBEmpty_elm_builtin":[]}},"Basics.Float":{"args":[],"tags":{"Float":[]}},"Elm.JsArray.JsArray":{"args":["a"],"tags":{"JsArray":["a"]}},"Array.Node":{"args":["a"],"tags":{"SubTree":["Array.Tree a"],"Leaf":["Elm.JsArray.JsArray a"]}},"Data.Video.Segment.Segment":{"args":[],"tags":{"Segment":["Data.Video.Frame.Frame","List.List Data.Video.Frame.Frame"]}},"Data.Project.UserContent.UserContent":{"args":[],"tags":{"PlainText":["String.String"],"Picture":["Data.File.Object.Key"]}},"Json.Encode.Value":{"args":[],"tags":{"Value":[]}},"Dict.NColor":{"args":[],"tags":{"Red":[],"Black":[]}}}}})}});}(this));
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("../css/app.pcss");

require("../vendors/trix.css");

var _chi = _interopRequireDefault(require("../../translation/chi.json"));

var _Main = require("../../src/Main.elm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Helpers 
var readStringifiedJson = function readStringifiedJson(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return;
  }
}; // Translations


var app = _Main.Elm.Main.init({
  flags: {
    token: localStorage.token || null,
    translations: _chi.default,
    lastUsedDirectory: localStorage.lastUsedDirectory || null,
    lastPickedVideos: readStringifiedJson(localStorage.lastPickedVideos) || null
  }
});

document.addEventListener('dragover', function (event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);
document.addEventListener('drop', function (event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
}, false);
document.addEventListener('keydown', function (event) {
  if (event.key == 's' && event.ctrlKey) {
    event.preventDefault();
  } else if (event.key == 'e' && event.ctrlKey) {
    event.preventDefault();
  } else if (event.key == 'z' && event.ctrlKey) {
    event.preventDefault();
  }
}, false);
app.ports.seekTime.subscribe(function (milliseconds) {
  var video = document.querySelector('video#source-file');
  video.currentTime = milliseconds / 1000;
  video.play();
});

var connectSocket = function connectSocket() {
  var socket = new WebSocket('ws://localhost:8282');
  socket.addEventListener('close', function (event) {
    app.ports.websocketClosed.send(event.code);
  });
  socket.addEventListener('message', function (event) {
    var message = JSON.parse(event.data);
    handleSocketEvent(message['Command'], message);
  });
};

connectSocket();
app.ports.connectSocket.subscribe(function () {
  connectSocket();
});

var handleSocketEvent = function handleSocketEvent(event, data) {
  switch (event) {
    case 'ProcessProgressEvent':
      handleProcessProgressEvent(data);
      break;

    case 'ProcessFailureEvent':
      handleProcessFailureEvent(data);
      break;

    default:
      break;
  }
};

var handleProcessProgressEvent = function handleProcessProgressEvent(data) {
  var uuid = data.Parameter.Id;

  switch (data.Parameter.Status) {
    case 1:
      // When the video processing job is ready to start:
      // Note: Currently, this state is not used and not to be handled.
      console.log('ready');
      break;

    case 2:
      {
        // When the video processing job is ongoing:
        var progress = data.Parameter.Progress;
        app.ports.processingStatusUpdate.send({
          Id: uuid,
          Status: 2,
          // 'ongoing'
          Progress: progress
        });
        break;
      }

    case 3:
      {
        // When the video processing job is completed:
        app.ports.processingStatusUpdate.send({
          Id: uuid,
          Status: 3 // 'completed'

        });
        break;
      }

    default:
      // When God knows why an unknown status code is received:
      break;
  }
};

var handleProcessFailureEvent = function handleProcessFailureEvent(data) {
  app.ports.processingStatusUpdate.send({
    uuid: data.Id,
    status: 'failed',
    reason: data.ErrorMsg
  });
};

app.ports.undoTrix.subscribe(function () {
  document.activeElement.editor.undo();
});
app.ports.redoTrix.subscribe(function () {
  document.activeElement.editor.redo();
});
app.ports.scrollIntoView.subscribe(function (nodeID) {
  document.getElementById(nodeID).scrollIntoView(true);
});

var promptUserBeforeUnload = function promptUserBeforeUnload(event) {
  event.preventDefault();
  event.returnValue = '';
};

app.ports.addBeforeUnloadPrompt.subscribe(function () {
  window.addEventListener('beforeunload', promptUserBeforeUnload);
});
app.ports.removeBeforeUnloadPrompt.subscribe(function () {
  window.removeEventListener('beforeunload', promptUserBeforeUnload);
}); // Web components

var RichTextPreview = /*#__PURE__*/function (_HTMLElement) {
  _inherits(RichTextPreview, _HTMLElement);

  var _super = _createSuper(RichTextPreview);

  function RichTextPreview() {
    _classCallCheck(this, RichTextPreview);

    return _super.call(this);
  }

  _createClass(RichTextPreview, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.setContent();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback() {
      this.setContent();
    }
  }, {
    key: "setContent",
    value: function setContent() {
      var content = this.getAttribute('content-value');
      this.innerHTML = content;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['content-value'];
    }
  }]);

  return RichTextPreview;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('rich-text-preview', RichTextPreview);
var _default = {
  app: app
};
exports.default = _default;
},{"../css/app.pcss":"css/app.pcss","../vendors/trix.css":"css/app.pcss","../../translation/chi.json":"../translation/chi.json","../../src/Main.elm":"../src/Main.elm"}]},{},["js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map