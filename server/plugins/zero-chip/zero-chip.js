var zt = Object.defineProperty;
var Ut = (r, e, t) => e in r ? zt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var tt = (r, e, t) => Ut(r, typeof e != "symbol" ? e + "" : e, t);
var rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var nt;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof rt == "object" ? rt : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(f, E) {
      return function($, b) {
        Object.defineProperty(f, $, { configurable: !0, writable: !0, value: b }), E && E($, b);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function u() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function m() {
      return l() || u();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, E = !m && !f, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return He(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return He({ __proto__: null });
      } : function() {
        return He({});
      },
      has: E ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: E ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, b = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Nt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Dt(), N = typeof WeakMap == "function" ? WeakMap : Ht(), j = o ? Symbol.for("@reflect-metadata:registry") : void 0, Y = Tt(), ke = Rt(Y);
    function ye(i, s, a, c) {
      if (g(a)) {
        if (!qe(i))
          throw new TypeError();
        if (!Ye(s))
          throw new TypeError();
        return Se(i, s);
      } else {
        if (!qe(i))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(c) && !g(c) && !X(c))
          throw new TypeError();
        return X(c) && (c = void 0), a = I(a), Oe(i, s, a, c);
      }
    }
    e("decorate", ye);
    function ge(i, s) {
      function a(c, y) {
        if (!O(c))
          throw new TypeError();
        if (!g(y) && !Pt(y))
          throw new TypeError();
        ne(i, s, c, y);
      }
      return a;
    }
    e("metadata", ge);
    function me(i, s, a, c) {
      if (!O(a))
        throw new TypeError();
      return g(c) || (c = I(c)), ne(i, s, a, c);
    }
    e("defineMetadata", me);
    function be(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return g(a) || (a = I(a)), ee(i, s, a);
    }
    e("hasMetadata", be);
    function _e(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return g(a) || (a = I(a)), Z(i, s, a);
    }
    e("hasOwnMetadata", _e);
    function $e(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return g(a) || (a = I(a)), te(i, s, a);
    }
    e("getMetadata", $e);
    function we(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return g(a) || (a = I(a)), re(i, s, a);
    }
    e("getOwnMetadata", we);
    function Ee(i, s) {
      if (!O(i))
        throw new TypeError();
      return g(s) || (s = I(s)), ie(i, s);
    }
    e("getMetadataKeys", Ee);
    function Ae(i, s) {
      if (!O(i))
        throw new TypeError();
      return g(s) || (s = I(s)), oe(i, s);
    }
    e("getOwnMetadataKeys", Ae);
    function Ce(i, s, a) {
      if (!O(s))
        throw new TypeError();
      if (g(a) || (a = I(a)), !O(s))
        throw new TypeError();
      g(a) || (a = I(a));
      var c = ae(
        s,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, a);
    }
    e("deleteMetadata", Ce);
    function Se(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], y = c(s);
        if (!g(y) && !X(y)) {
          if (!Ye(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function Oe(i, s, a, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var x = i[y], M = x(s, a, c);
        if (!g(M) && !X(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function ee(i, s, a) {
      var c = Z(i, s, a);
      if (c)
        return !0;
      var y = De(s);
      return X(y) ? !1 : ee(i, y, a);
    }
    function Z(i, s, a) {
      var c = ae(
        s,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Fe(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function te(i, s, a) {
      var c = Z(i, s, a);
      if (c)
        return re(i, s, a);
      var y = De(s);
      if (!X(y))
        return te(i, y, a);
    }
    function re(i, s, a) {
      var c = ae(
        s,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function ne(i, s, a, c) {
      var y = ae(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function ie(i, s) {
      var a = oe(i, s), c = De(i);
      if (c === null)
        return a;
      var y = ie(c, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var x = new k(), M = [], _ = 0, d = a; _ < d.length; _++) {
        var h = d[_], p = x.has(h);
        p || (x.add(h), M.push(h));
      }
      for (var v = 0, w = y; v < w.length; v++) {
        var h = w[v], p = x.has(h);
        p || (x.add(h), M.push(h));
      }
      return M;
    }
    function oe(i, s) {
      var a = ae(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function se(i) {
      if (i === null)
        return 1;
      switch (typeof i) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return i === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function g(i) {
      return i === void 0;
    }
    function X(i) {
      return i === null;
    }
    function Ct(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function St(i, s) {
      switch (se(i)) {
        case 0:
          return i;
        case 1:
          return i;
        case 2:
          return i;
        case 3:
          return i;
        case 4:
          return i;
        case 5:
          return i;
      }
      var a = "string", c = Ze(i, l);
      if (c !== void 0) {
        var y = c.call(i, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return Ot(i);
    }
    function Ot(i, s) {
      var a, c;
      {
        var y = i.toString;
        if (Me(y)) {
          var c = y.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (Me(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Fe(i) {
      return !!i;
    }
    function Mt(i) {
      return "" + i;
    }
    function I(i) {
      var s = St(i);
      return Ct(s) ? s : Mt(s);
    }
    function qe(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function Me(i) {
      return typeof i == "function";
    }
    function Ye(i) {
      return typeof i == "function";
    }
    function Pt(i) {
      switch (se(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ne(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Ze(i, s) {
      var a = i[s];
      if (a != null) {
        if (!Me(a))
          throw new TypeError();
        return a;
      }
    }
    function Xe(i) {
      var s = Ze(i, u);
      if (!Me(s))
        throw new TypeError();
      var a = s.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Je(i) {
      return i.value;
    }
    function Qe(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Ke(i) {
      var s = i.return;
      s && s.call(i);
    }
    function De(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || s !== b)
        return s;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function xt() {
      var i;
      !g(j) && typeof t.Reflect < "u" && !(j in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = kt(t.Reflect));
      var s, a, c, y = new N(), x = {
        registerProvider: M,
        getProvider: d,
        setProvider: p
      };
      return x;
      function M(v) {
        if (!Object.isExtensible(x))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case g(s):
            s = v;
            break;
          case s === v:
            break;
          case g(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            c === void 0 && (c = new k()), c.add(v);
            break;
        }
      }
      function _(v, w) {
        if (!g(s)) {
          if (s.isProviderFor(v, w))
            return s;
          if (!g(a)) {
            if (a.isProviderFor(v, w))
              return s;
            if (!g(c))
              for (var A = Xe(c); ; ) {
                var C = Qe(A);
                if (!C)
                  return;
                var D = Je(C);
                if (D.isProviderFor(v, w))
                  return Ke(A), D;
              }
          }
        }
        if (!g(i) && i.isProviderFor(v, w))
          return i;
      }
      function d(v, w) {
        var A = y.get(v), C;
        return g(A) || (C = A.get(w)), g(C) && (C = _(v, w), g(C) || (g(A) && (A = new S(), y.set(v, A)), A.set(w, C))), C;
      }
      function h(v) {
        if (g(v))
          throw new TypeError();
        return s === v || a === v || !g(c) && c.has(v);
      }
      function p(v, w, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var C = d(v, w);
        if (C !== A) {
          if (!g(C))
            return !1;
          var D = y.get(v);
          g(D) && (D = new S(), y.set(v, D)), D.set(w, A);
        }
        return !0;
      }
    }
    function Tt() {
      var i;
      return !g(j) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[j]), g(i) && (i = xt()), !g(j) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, j, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Rt(i) {
      var s = new N(), a = {
        isProviderFor: function(h, p) {
          var v = s.get(h);
          return g(v) ? !1 : v.has(p);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: x,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: d
      };
      return Y.registerProvider(a), a;
      function c(h, p, v) {
        var w = s.get(h), A = !1;
        if (g(w)) {
          if (!v)
            return;
          w = new S(), s.set(h, w), A = !0;
        }
        var C = w.get(p);
        if (g(C)) {
          if (!v)
            return;
          if (C = new S(), w.set(p, C), !i.setProvider(h, p, a))
            throw w.delete(p), A && s.delete(h), new Error("Wrong provider for target.");
        }
        return C;
      }
      function y(h, p, v) {
        var w = c(
          p,
          v,
          /*Create*/
          !1
        );
        return g(w) ? !1 : Fe(w.has(h));
      }
      function x(h, p, v) {
        var w = c(
          p,
          v,
          /*Create*/
          !1
        );
        if (!g(w))
          return w.get(h);
      }
      function M(h, p, v, w) {
        var A = c(
          v,
          w,
          /*Create*/
          !0
        );
        A.set(h, p);
      }
      function _(h, p) {
        var v = [], w = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (g(w))
          return v;
        for (var A = w.keys(), C = Xe(A), D = 0; ; ) {
          var et = Qe(C);
          if (!et)
            return v.length = D, v;
          var It = Je(et);
          try {
            v[D] = It;
          } catch (jt) {
            try {
              Ke(C);
            } finally {
              throw jt;
            }
          }
          D++;
        }
      }
      function d(h, p, v) {
        var w = c(
          p,
          v,
          /*Create*/
          !1
        );
        if (g(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var A = s.get(p);
          g(A) || (A.delete(v), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function kt(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, x = i.deleteMetadata, M = new N(), _ = {
        isProviderFor: function(d, h) {
          var p = M.get(d);
          return !g(p) && p.has(h) ? !0 : y(d, h).length ? (g(p) && (p = new k(), M.set(d, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: x
      };
      return _;
    }
    function ae(i, s, a) {
      var c = Y.getProvider(i, s);
      if (!g(c))
        return c;
      if (a) {
        if (Y.setProvider(i, s, ke))
          return ke;
        throw new Error("Illegal state.");
      }
    }
    function Nt() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function _(d, h, p) {
            this._index = 0, this._keys = d, this._values = h, this._selector = p;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[u] = function() {
            return this;
          }, _.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, _.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, _;
        }()
      ), c = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, _.prototype.set = function(d, h) {
            var p = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, _.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, v = h + 1; v < p; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, Ne(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, x);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(d, h) {
            if (!Ne(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (Ne(this._keys[p], d)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return c;
      function y(_, d) {
        return _;
      }
      function x(_, d) {
        return d;
      }
      function M(_, d) {
        return [_, d];
      }
    }
    function Dt() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new S();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(a) {
            return this._map.has(a);
          }, s.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, s.prototype.delete = function(a) {
            return this._map.delete(a);
          }, s.prototype.clear = function() {
            this._map.clear();
          }, s.prototype.keys = function() {
            return this._map.keys();
          }, s.prototype.values = function() {
            return this._map.keys();
          }, s.prototype.entries = function() {
            return this._map.entries();
          }, s.prototype["@@iterator"] = function() {
            return this.keys();
          }, s.prototype[u] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function Ht() {
      var i = 16, s = $.create(), a = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? $.has(p, this._key) : !1;
          }, d.prototype.get = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? $.get(p, this._key) : void 0;
          }, d.prototype.set = function(h, p) {
            var v = y(
              h,
              /*create*/
              !0
            );
            return v[this._key] = p, this;
          }, d.prototype.delete = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + _();
        while ($.has(s, d));
        return s[d] = !0, d;
      }
      function y(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: $.create() });
        }
        return d[a];
      }
      function x(d, h) {
        for (var p = 0; p < h; ++p)
          d[p] = Math.random() * 255 | 0;
        return d;
      }
      function M(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : x(h, d), h;
        }
        return x(new Array(d), d);
      }
      function _() {
        var d = M(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var v = d[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function He(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(nt || (nt = {}));
function Lt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Bt(r) {
  return function(e) {
    if (Lt(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName,
        layoutKind: r.layoutKind,
        environment: r.environment
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const n = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, e);
          } catch {
            try {
              customElements.define(n, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, l);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Wt(r) {
  return Bt(r);
}
function Gt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        tt(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(l) {
        try {
          super.update(l);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var E;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const $ = new CSSStyleSheet(), b = (E = l.sheet) == null ? void 0 : E.cssRules;
          b && (Array.from(b).forEach((S) => $.insertRule(S.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          f.appendChild($);
        }
        u.forEach(($) => {
          const b = $.cloneNode(!0);
          f.appendChild(b);
        });
      }
    }
    return t;
  };
}
function Vt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ft(r) {
  return function(e, t) {
    try {
      Vt(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let o = !0;
      if (typeof t == "string") {
        try {
          o = typeof e[t] != "function";
        } catch {
          o = !0;
        }
        o && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function U(r) {
  return Ft(r);
}
var z;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(z || (z = {}));
var H;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(H || (H = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pe = globalThis, Be = Pe.ShadowRoot && (Pe.ShadyCSS === void 0 || Pe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, We = Symbol(), it = /* @__PURE__ */ new WeakMap();
let _t = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== We) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Be && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = it.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && it.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const qt = (r) => new _t(typeof r == "string" ? r : r + "", void 0, We), Yt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new _t(t, r, We);
}, Zt = (r, e) => {
  if (Be) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = Pe.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, ot = Be ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return qt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Jt, getOwnPropertyDescriptor: Qt, getOwnPropertyNames: Kt, getOwnPropertySymbols: er, getPrototypeOf: tr } = Object, B = globalThis, st = B.trustedTypes, rr = st ? st.emptyScript : "", Ie = B.reactiveElementPolyfillSupport, ue = (r, e) => r, xe = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? rr : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ge = (r, e) => !Xt(r, e), at = { attribute: !0, type: String, converter: xe, reflect: !1, useDefault: !1, hasChanged: Ge };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = at) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Jt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = Qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: o, set(u) {
      const m = o == null ? void 0 : o.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? at;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ue("elementProperties"))) return;
    const e = tr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ue("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ue("properties"))) {
      const t = this.properties, n = [...Kt(t), ...er(t)];
      for (const o of n) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, o] of t) this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const o = this._$Eu(t, n);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const o of n) t.unshift(ot(o));
    } else e !== void 0 && t.push(ot(e));
    return t;
  }
  static _$Eu(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Zt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var n;
      return (n = t.hostConnected) == null ? void 0 : n.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var n;
      return (n = t.hostDisconnected) == null ? void 0 : n.call(t);
    });
  }
  attributeChangedCallback(e, t, n) {
    this._$AK(e, n);
  }
  _$ET(e, t) {
    var l;
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : xe).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const m = n.getPropertyOptions(o), f = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : xe;
      this._$Em = o;
      const E = f.fromAttribute(t, m.type);
      this[o] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? Ge)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: o, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var n;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) {
        const { wrapped: m } = u, f = this[l];
        m !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, u, f);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
      }), this.update(t)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[ue("elementProperties")] = /* @__PURE__ */ new Map(), J[ue("finalized")] = /* @__PURE__ */ new Map(), Ie == null || Ie({ ReactiveElement: J }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = globalThis, lt = (r) => r, Te = ce.trustedTypes, ut = Te ? Te.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, $t = "$lit$", L = `lit$${Math.random().toFixed(9).slice(2)}$`, wt = "?" + L, nr = `<${wt}>`, F = document, he = () => F.createComment(""), fe = (r) => r === null || typeof r != "object" && typeof r != "function", Ve = Array.isArray, ir = (r) => Ve(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", je = `[ 	
\f\r]`, le = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ct = /-->/g, dt = />/g, W = RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ht = /'/g, ft = /"/g, Et = /^(?:script|style|textarea|title)$/i, or = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ze = or(1), Q = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), pt = /* @__PURE__ */ new WeakMap(), G = F.createTreeWalker(F, 129);
function At(r, e) {
  if (!Ve(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ut !== void 0 ? ut.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = le;
  for (let m = 0; m < t; m++) {
    const f = r[m];
    let E, $, b = -1, S = 0;
    for (; S < f.length && (u.lastIndex = S, $ = u.exec(f), $ !== null); ) S = u.lastIndex, u === le ? $[1] === "!--" ? u = ct : $[1] !== void 0 ? u = dt : $[2] !== void 0 ? (Et.test($[2]) && (o = RegExp("</" + $[2], "g")), u = W) : $[3] !== void 0 && (u = W) : u === W ? $[0] === ">" ? (u = o ?? le, b = -1) : $[1] === void 0 ? b = -2 : (b = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? W : $[3] === '"' ? ft : ht) : u === ft || u === ht ? u = W : u === ct || u === dt ? u = le : (u = W, o = void 0);
    const k = u === W && r[m + 1].startsWith("/>") ? " " : "";
    l += u === le ? f + nr : b >= 0 ? (n.push(E), f.slice(0, b) + $t + f.slice(b) + L + k) : f + L + (b === -2 ? m : k);
  }
  return [At(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class pe {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, f = this.parts, [E, $] = sr(e, t);
    if (this.el = pe.createElement(E, n), G.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = G.nextNode()) !== null && f.length < m; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith($t)) {
          const S = $[u++], k = o.getAttribute(b).split(L), N = /([.?@])?(.*)/.exec(S);
          f.push({ type: 1, index: l, name: N[2], strings: k, ctor: N[1] === "." ? lr : N[1] === "?" ? ur : N[1] === "@" ? cr : Re }), o.removeAttribute(b);
        } else b.startsWith(L) && (f.push({ type: 6, index: l }), o.removeAttribute(b));
        if (Et.test(o.tagName)) {
          const b = o.textContent.split(L), S = b.length - 1;
          if (S > 0) {
            o.textContent = Te ? Te.emptyScript : "";
            for (let k = 0; k < S; k++) o.append(b[k], he()), G.nextNode(), f.push({ type: 2, index: ++l });
            o.append(b[S], he());
          }
        }
      } else if (o.nodeType === 8) if (o.data === wt) f.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(L, b + 1)) !== -1; ) f.push({ type: 7, index: l }), b += L.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = F.createElement("template");
    return n.innerHTML = e, n;
  }
}
function K(r, e, t = r, n) {
  var u, m;
  if (e === Q) return e;
  let o = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = fe(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((m = o == null ? void 0 : o._$AO) == null || m.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = K(r, o._$AS(r, e.values), o, n)), e;
}
class ar {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? F).importNode(t, !0);
    G.currentNode = o;
    let l = G.nextNode(), u = 0, m = 0, f = n[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let E;
        f.type === 2 ? E = new ve(l, l.nextSibling, this, e) : f.type === 1 ? E = new f.ctor(l, f.name, f.strings, this, e) : f.type === 6 && (E = new dr(l, this, e)), this._$AV.push(E), f = n[++m];
      }
      u !== (f == null ? void 0 : f.index) && (l = G.nextNode(), u++);
    }
    return G.currentNode = F, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ve {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = K(this, e, t), fe(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== Q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : ir(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && fe(this._$AH) ? this._$AA.nextSibling.data = e : this.T(F.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = pe.createElement(At(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const u = new ar(o, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = pt.get(e.strings);
    return t === void 0 && pt.set(e.strings, t = new pe(e)), t;
  }
  k(e) {
    Ve(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new ve(this.O(he()), this.O(he()), this, this.options)) : n = t[o], n._$AI(l), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = lt(e).nextSibling;
      lt(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class Re {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, o, l) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = T;
  }
  _$AI(e, t = this, n, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = K(this, e, t, 0), u = !fe(e) || e !== this._$AH && e !== Q, u && (this._$AH = e);
    else {
      const m = e;
      let f, E;
      for (e = l[0], f = 0; f < l.length - 1; f++) E = K(this, m[n + f], t, f), E === Q && (E = this._$AH[f]), u || (u = !fe(E) || E !== this._$AH[f]), E === T ? e = T : e !== T && (e += (E ?? "") + l[f + 1]), this._$AH[f] = E;
    }
    u && !o && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class lr extends Re {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
class ur extends Re {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}
class cr extends Re {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = K(this, e, t, 0) ?? T) === Q) return;
    const n = this._$AH, o = e === T && n !== T || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== T && (n === T || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class dr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    K(this, e);
  }
}
const Ue = ce.litHtmlPolyfillSupport;
Ue == null || Ue(pe, ve), (ce.litHtmlVersions ?? (ce.litHtmlVersions = [])).push("3.3.3");
const hr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new ve(e.insertBefore(he(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = globalThis;
class de extends J {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = hr(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return Q;
  }
}
var bt;
de._$litElement$ = !0, de.finalized = !0, (bt = V.litElementHydrateSupport) == null || bt.call(V, { LitElement: de });
const Le = V.litElementPolyfillSupport;
Le == null || Le({ LitElement: de });
(V.litElementVersions ?? (V.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr = { attribute: !0, type: String, converter: xe, reflect: !1, hasChanged: Ge }, pr = (r = fr, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(m) {
      const f = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(u, f, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(m) {
      const f = this[u];
      e.call(this, m), this.requestUpdate(u, f, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function q(r) {
  return (e, t) => typeof t == "object" ? pr(r, e, t) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
var vr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, R = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? yr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(e, t, o) : u(o)) || o);
  return n && o && vr(e, t, o), o;
};
const vt = {
  neutral: "var(--uiv-secondary-color, #64748b)",
  primary: "var(--uiv-primary-color, #6366f1)",
  success: "var(--uiv-color-success, #10b981)",
  warning: "var(--uiv-color-warning, #f59e0b)",
  error: "var(--uiv-color-danger, #ef4444)"
}, yt = {
  neutral: "rgba(100, 116, 139, 0.14)",
  primary: "rgba(99, 102, 241, 0.14)",
  success: "rgba(16, 185, 129, 0.14)",
  warning: "rgba(245, 158, 11, 0.16)",
  error: "rgba(239, 68, 68, 0.14)"
}, gt = {
  kind: "generic",
  templateHtml: [
    "<div style='display:inline-block;'>",
    "<span style='display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:999px;background:rgba(99,102,241,0.14);color:#4f46e5;font-family:inherit;font-size:13px;font-weight:500;line-height:1;box-sizing:border-box;'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Data Display", "Tag"]
};
function mt(r) {
  return String(r).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let P = class extends de {
  constructor() {
    super(...arguments), this.label = "Chip", this.variant = "soft", this.color = "primary", this.size = "medium", this.removable = !1, this.icon = "", this.rounded = !0;
  }
  static getStudioTemplate(r) {
    var ye, ge, me, be, _e, $e, we, Ee, Ae, Ce, Se, Oe, ee, Z, te, re, ne, ie, oe, se, g;
    if (!r) return gt;
    const e = mt(((ye = r.props) == null ? void 0 : ye.label) ?? ((me = (ge = r.studio) == null ? void 0 : ge.props) == null ? void 0 : me.label) ?? "Chip"), t = (((be = r.props) == null ? void 0 : be.variant) ?? (($e = (_e = r.studio) == null ? void 0 : _e.props) == null ? void 0 : $e.variant)) || "soft", n = (((we = r.props) == null ? void 0 : we.color) ?? ((Ae = (Ee = r.studio) == null ? void 0 : Ee.props) == null ? void 0 : Ae.color)) || "primary", o = (((Ce = r.props) == null ? void 0 : Ce.size) ?? ((Oe = (Se = r.studio) == null ? void 0 : Se.props) == null ? void 0 : Oe.size)) || "medium", l = ((ee = r.props) == null ? void 0 : ee.removable) ?? ((te = (Z = r.studio) == null ? void 0 : Z.props) == null ? void 0 : te.removable) ?? !1, u = mt(((re = r.props) == null ? void 0 : re.icon) ?? ((ie = (ne = r.studio) == null ? void 0 : ne.props) == null ? void 0 : ie.icon) ?? ""), m = ((oe = r.props) == null ? void 0 : oe.rounded) ?? ((g = (se = r.studio) == null ? void 0 : se.props) == null ? void 0 : g.rounded) ?? !0, f = vt[n] || vt.primary, E = yt[n] || yt.primary;
    let $ = "5px 12px", b = "13px";
    o === "small" ? ($ = "3px 9px", b = "12px") : o === "large" && ($ = "7px 16px", b = "14px");
    const S = m ? "999px" : "var(--uiv-border-radius, 8px)";
    let k = E, N = f, j = "1px solid transparent";
    t === "solid" ? (k = f, N = "#ffffff") : t === "outline" && (k = "transparent", N = f, j = `1px solid ${f}`);
    const Y = u ? `<span style='font-size:${b};line-height:1;'>${u}</span>` : "";
    return {
      ...gt,
      templateHtml: [
        "<div style='display:inline-block;'>",
        `<span style='display:inline-flex;align-items:center;gap:6px;padding:${$};border-radius:${S};background:${k};color:${N};border:${j};font-family:inherit;font-size:${b};font-weight:500;line-height:1;box-sizing:border-box;'>${Y}${e}${l ? `<span style='display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-radius:50%;background:${t === "solid" ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.08)"};font-size:11px;line-height:1;'>×</span>` : ""}</span>`,
        "</div>"
      ].join("")
    };
  }
  get labelConfig() {
    return this.label;
  }
  set labelConfig(r) {
    this.label = r;
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "soft";
  }
  get colorConfig() {
    return this.color;
  }
  set colorConfig(r) {
    this.color = r || "primary";
  }
  get sizeConfig() {
    return this.size;
  }
  set sizeConfig(r) {
    this.size = r || "medium";
  }
  get removableConfig() {
    return this.removable;
  }
  set removableConfig(r) {
    this.removable = !!r;
  }
  get iconConfig() {
    return this.icon;
  }
  set iconConfig(r) {
    this.icon = r;
  }
  get roundedConfig() {
    return this.rounded;
  }
  set roundedConfig(r) {
    this.rounded = !!r;
  }
  handleClick() {
    this.dispatchEvent(
      new CustomEvent("on-click", {
        detail: { label: this.label, color: this.color },
        bubbles: !0,
        composed: !0
      })
    );
  }
  handleRemove(r) {
    r.stopPropagation(), this.dispatchEvent(
      new CustomEvent("on-remove", {
        detail: { label: this.label, color: this.color },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return ze`
      <span
        class="chip color-${this.color} variant-${this.variant} size-${this.size} clickable"
        @click=${this.handleClick}
      >
        ${this.icon ? ze`<span class="icon">${this.icon}</span>` : ""}
        <span class="label">${this.label}</span>
        ${this.removable ? ze`<button
              class="remove"
              aria-label="Remove"
              @click=${(r) => this.handleRemove(r)}
            >×</button>` : ""}
      </span>
    `;
  }
};
P.styles = Yt`
    :host {
      display: inline-block;
      --chip-text: var(--uiv-text-color, #1f2937);
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: inherit;
      font-weight: 500;
      line-height: 1;
      white-space: nowrap;
      box-sizing: border-box;
      border: 1px solid transparent;
      cursor: default;
      transition: all 0.18s ease;
    }
    .chip.clickable { cursor: pointer; }
    .chip.clickable:hover { filter: brightness(1.04); transform: translateY(-1px); }

    /* color accents */
    .color-neutral { --chip-accent: var(--uiv-secondary-color, #64748b); --chip-tint: rgba(100, 116, 139, 0.14); }
    .color-primary { --chip-accent: var(--uiv-primary-color, #6366f1); --chip-tint: rgba(99, 102, 241, 0.14); }
    .color-success { --chip-accent: var(--uiv-color-success, #10b981); --chip-tint: rgba(16, 185, 129, 0.14); }
    .color-warning { --chip-accent: var(--uiv-color-warning, #f59e0b); --chip-tint: rgba(245, 158, 11, 0.16); }
    .color-error { --chip-accent: var(--uiv-color-danger, #ef4444); --chip-tint: rgba(239, 68, 68, 0.14); }

    /* sizes */
    .size-small { padding: 3px 9px; font-size: 0.75rem; border-radius: 8px; }
    .size-medium { padding: 5px 12px; font-size: 0.8125rem; border-radius: 8px; }
    .size-large { padding: 7px 16px; font-size: 0.875rem; border-radius: 10px; }

    :host([rounded]) .chip { border-radius: 999px; }

    /* variants */
    .variant-soft { background: var(--chip-tint); color: var(--chip-accent); }
    .variant-solid { background: var(--chip-accent); color: #ffffff; }
    .variant-outline { background: transparent; color: var(--chip-accent); border-color: var(--chip-accent); }

    .icon { line-height: 1; display: inline-flex; }

    .remove {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 15px;
      height: 15px;
      border: none;
      border-radius: 50%;
      padding: 0;
      margin: 0 -2px 0 0;
      background: rgba(0, 0, 0, 0.08);
      color: inherit;
      font-family: inherit;
      font-size: 11px;
      line-height: 1;
      cursor: pointer;
      transition: background 0.15s ease, transform 0.15s ease;
    }
    .variant-solid .remove { background: rgba(255, 255, 255, 0.25); }
    .remove:hover { background: rgba(0, 0, 0, 0.18); transform: scale(1.12); }
    .variant-solid .remove:hover { background: rgba(255, 255, 255, 0.4); }
  `;
R([
  q({ type: String })
], P.prototype, "label", 2);
R([
  q({ type: String })
], P.prototype, "variant", 2);
R([
  q({ type: String })
], P.prototype, "color", 2);
R([
  q({ type: String })
], P.prototype, "size", 2);
R([
  q({ type: Boolean })
], P.prototype, "removable", 2);
R([
  q({ type: String })
], P.prototype, "icon", 2);
R([
  q({ type: Boolean, reflect: !0 })
], P.prototype, "rounded", 2);
R([
  U({
    attributeType: H.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Label / Text",
    fieldMappings: "label"
  })
], P.prototype, "labelConfig", 1);
R([
  U({
    attributeType: H.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Solid", value: "solid" },
      { label: "Soft", value: "soft" },
      { label: "Outline", value: "outline" }
    ]
  })
], P.prototype, "variantConfig", 1);
R([
  U({
    attributeType: H.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Color",
    fieldMappings: "color",
    optionItems: [
      { label: "Neutral", value: "neutral" },
      { label: "Primary", value: "primary" },
      { label: "Success", value: "success" },
      { label: "Warning", value: "warning" },
      { label: "Error", value: "error" }
    ]
  })
], P.prototype, "colorConfig", 1);
R([
  U({
    attributeType: H.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Size",
    fieldMappings: "size",
    optionItems: [
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" }
    ]
  })
], P.prototype, "sizeConfig", 1);
R([
  U({
    attributeType: H.PROPERTY,
    uiComponentType: z.CHECKBOX,
    displayLabel: "Removable (show x)",
    fieldMappings: "removable"
  })
], P.prototype, "removableConfig", 1);
R([
  U({
    attributeType: H.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Leading Icon / Emoji",
    fieldMappings: "icon"
  })
], P.prototype, "iconConfig", 1);
R([
  U({
    attributeType: H.PROPERTY,
    uiComponentType: z.CHECKBOX,
    displayLabel: "Rounded (pill shape)",
    fieldMappings: "rounded"
  })
], P.prototype, "roundedConfig", 1);
R([
  U({
    attributeType: H.EVENT,
    displayLabel: "On Click",
    eventTrigger: "on-click"
  })
], P.prototype, "handleClick", 1);
R([
  U({
    attributeType: H.EVENT,
    displayLabel: "On Remove",
    eventTrigger: "on-remove"
  })
], P.prototype, "handleRemove", 1);
P = R([
  Wt({
    name: "zero-chip",
    version: "1.0.0",
    title: "Chip",
    elementSelector: "zero-chip",
    group: "Data Display",
    iconName: "chip-icon.png"
  }),
  Gt()
], P);
export {
  P as ZeroChip,
  gt as studioTemplate
};
