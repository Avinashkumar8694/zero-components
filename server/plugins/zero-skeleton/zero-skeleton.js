var jt = Object.defineProperty;
var Dt = (r, e, t) => e in r ? jt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var nt = (r, e, t) => Dt(r, typeof e != "symbol" ? e + "" : e, t);
var st = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ot;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof st == "object" ? st : typeof self == "object" ? self : typeof this == "object" ? this : y(), i = s(r);
    typeof t.Reflect < "u" && (i = s(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, E) {
      return function(w, b) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: b }), E && E(w, b);
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
    function y() {
      return l() || u();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", y = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, E = !y && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: y ? function() {
        return Te(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Te({ __proto__: null });
      } : function() {
        return Te({});
      },
      has: E ? function(n, o) {
        return i.call(n, o);
      } : function(n, o) {
        return o in n;
      },
      get: E ? function(n, o) {
        return i.call(n, o) ? n[o] : void 0;
      } : function(n, o) {
        return n[o];
      }
    }, b = Object.getPrototypeOf(Function), k = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Rt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Nt(), N = typeof WeakMap == "function" ? WeakMap : Ht(), U = s ? Symbol.for("@reflect-metadata:registry") : void 0, W = Ot(), te = Pt(W);
    function fe(n, o, a, d) {
      if (m(a)) {
        if (!Xe(n))
          throw new TypeError();
        if (!Je(o))
          throw new TypeError();
        return we(n, o);
      } else {
        if (!Xe(n))
          throw new TypeError();
        if (!S(o))
          throw new TypeError();
        if (!S(d) && !m(d) && !X(d))
          throw new TypeError();
        return X(d) && (d = void 0), a = I(a), Ce(n, o, a, d);
      }
    }
    e("decorate", fe);
    function pe(n, o) {
      function a(d, g) {
        if (!S(d))
          throw new TypeError();
        if (!m(g) && !Ct(g))
          throw new TypeError();
        Ve(n, o, d, g);
      }
      return a;
    }
    e("metadata", pe);
    function ve(n, o, a, d) {
      if (!S(a))
        throw new TypeError();
      return m(d) || (d = I(d)), Ve(n, o, a, d);
    }
    e("defineMetadata", ve);
    function ye(n, o, a) {
      if (!S(o))
        throw new TypeError();
      return m(a) || (a = I(a)), Be(n, o, a);
    }
    e("hasMetadata", ye);
    function ge(n, o, a) {
      if (!S(o))
        throw new TypeError();
      return m(a) || (a = I(a)), Me(n, o, a);
    }
    e("hasOwnMetadata", ge);
    function me(n, o, a) {
      if (!S(o))
        throw new TypeError();
      return m(a) || (a = I(a)), We(n, o, a);
    }
    e("getMetadata", me);
    function be(n, o, a) {
      if (!S(o))
        throw new TypeError();
      return m(a) || (a = I(a)), Ge(n, o, a);
    }
    e("getOwnMetadata", be);
    function _e(n, o) {
      if (!S(n))
        throw new TypeError();
      return m(o) || (o = I(o)), Fe(n, o);
    }
    e("getMetadataKeys", _e);
    function $e(n, o) {
      if (!S(n))
        throw new TypeError();
      return m(o) || (o = I(o)), qe(n, o);
    }
    e("getOwnMetadataKeys", $e);
    function D(n, o, a) {
      if (!S(o))
        throw new TypeError();
      if (m(a) || (a = I(a)), !S(o))
        throw new TypeError();
      m(a) || (a = I(a));
      var d = re(
        o,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : d.OrdinaryDeleteMetadata(n, o, a);
    }
    e("deleteMetadata", D);
    function we(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var d = n[a], g = d(o);
        if (!m(g) && !X(g)) {
          if (!Je(g))
            throw new TypeError();
          o = g;
        }
      }
      return o;
    }
    function Ce(n, o, a, d) {
      for (var g = n.length - 1; g >= 0; --g) {
        var M = n[g], C = M(o, a, d);
        if (!m(C) && !X(C)) {
          if (!S(C))
            throw new TypeError();
          d = C;
        }
      }
      return d;
    }
    function Be(n, o, a) {
      var d = Me(n, o, a);
      if (d)
        return !0;
      var g = Pe(o);
      return X(g) ? !1 : Be(n, g, a);
    }
    function Me(n, o, a) {
      var d = re(
        o,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : Ye(d.OrdinaryHasOwnMetadata(n, o, a));
    }
    function We(n, o, a) {
      var d = Me(n, o, a);
      if (d)
        return Ge(n, o, a);
      var g = Pe(o);
      if (!X(g))
        return We(n, g, a);
    }
    function Ge(n, o, a) {
      var d = re(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(d))
        return d.OrdinaryGetOwnMetadata(n, o, a);
    }
    function Ve(n, o, a, d) {
      var g = re(
        a,
        d,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(n, o, a, d);
    }
    function Fe(n, o) {
      var a = qe(n, o), d = Pe(n);
      if (d === null)
        return a;
      var g = Fe(d, o);
      if (g.length <= 0)
        return a;
      if (a.length <= 0)
        return g;
      for (var M = new T(), C = [], _ = 0, h = a; _ < h.length; _++) {
        var c = h[_], f = M.has(c);
        f || (M.add(c), C.push(c));
      }
      for (var v = 0, $ = g; v < $.length; v++) {
        var c = $[v], f = M.has(c);
        f || (M.add(c), C.push(c));
      }
      return C;
    }
    function qe(n, o) {
      var a = re(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function Ze(n) {
      if (n === null)
        return 1;
      switch (typeof n) {
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
          return n === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function m(n) {
      return n === void 0;
    }
    function X(n) {
      return n === null;
    }
    function At(n) {
      return typeof n == "symbol";
    }
    function S(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function xt(n, o) {
      switch (Ze(n)) {
        case 0:
          return n;
        case 1:
          return n;
        case 2:
          return n;
        case 3:
          return n;
        case 4:
          return n;
        case 5:
          return n;
      }
      var a = "string", d = Qe(n, l);
      if (d !== void 0) {
        var g = d.call(n, a);
        if (S(g))
          throw new TypeError();
        return g;
      }
      return kt(n);
    }
    function kt(n, o) {
      var a, d;
      {
        var g = n.toString;
        if (Ee(g)) {
          var d = g.call(n);
          if (!S(d))
            return d;
        }
        var a = n.valueOf;
        if (Ee(a)) {
          var d = a.call(n);
          if (!S(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ye(n) {
      return !!n;
    }
    function St(n) {
      return "" + n;
    }
    function I(n) {
      var o = xt(n);
      return At(o) ? o : St(o);
    }
    function Xe(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function Ee(n) {
      return typeof n == "function";
    }
    function Je(n) {
      return typeof n == "function";
    }
    function Ct(n) {
      switch (Ze(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Oe(n, o) {
      return n === o || n !== n && o !== o;
    }
    function Qe(n, o) {
      var a = n[o];
      if (a != null) {
        if (!Ee(a))
          throw new TypeError();
        return a;
      }
    }
    function Ke(n) {
      var o = Qe(n, u);
      if (!Ee(o))
        throw new TypeError();
      var a = o.call(n);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function et(n) {
      return n.value;
    }
    function tt(n) {
      var o = n.next();
      return o.done ? !1 : o;
    }
    function rt(n) {
      var o = n.return;
      o && o.call(n);
    }
    function Pe(n) {
      var o = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === b || o !== b)
        return o;
      var a = n.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return o;
      var g = d.constructor;
      return typeof g != "function" || g === n ? o : g;
    }
    function Mt() {
      var n;
      !m(U) && typeof t.Reflect < "u" && !(U in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = Tt(t.Reflect));
      var o, a, d, g = new N(), M = {
        registerProvider: C,
        getProvider: h,
        setProvider: f
      };
      return M;
      function C(v) {
        if (!Object.isExtensible(M))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === v:
            break;
          case m(o):
            o = v;
            break;
          case o === v:
            break;
          case m(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            d === void 0 && (d = new T()), d.add(v);
            break;
        }
      }
      function _(v, $) {
        if (!m(o)) {
          if (o.isProviderFor(v, $))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(v, $))
              return o;
            if (!m(d))
              for (var A = Ke(d); ; ) {
                var x = tt(A);
                if (!x)
                  return;
                var H = et(x);
                if (H.isProviderFor(v, $))
                  return rt(A), H;
              }
          }
        }
        if (!m(n) && n.isProviderFor(v, $))
          return n;
      }
      function h(v, $) {
        var A = g.get(v), x;
        return m(A) || (x = A.get($)), m(x) && (x = _(v, $), m(x) || (m(A) && (A = new k(), g.set(v, A)), A.set($, x))), x;
      }
      function c(v) {
        if (m(v))
          throw new TypeError();
        return o === v || a === v || !m(d) && d.has(v);
      }
      function f(v, $, A) {
        if (!c(A))
          throw new Error("Metadata provider not registered.");
        var x = h(v, $);
        if (x !== A) {
          if (!m(x))
            return !1;
          var H = g.get(v);
          m(H) && (H = new k(), g.set(v, H)), H.set($, A);
        }
        return !0;
      }
    }
    function Ot() {
      var n;
      return !m(U) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[U]), m(n) && (n = Mt()), !m(U) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, U, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Pt(n) {
      var o = new N(), a = {
        isProviderFor: function(c, f) {
          var v = o.get(c);
          return m(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: h
      };
      return W.registerProvider(a), a;
      function d(c, f, v) {
        var $ = o.get(c), A = !1;
        if (m($)) {
          if (!v)
            return;
          $ = new k(), o.set(c, $), A = !0;
        }
        var x = $.get(f);
        if (m(x)) {
          if (!v)
            return;
          if (x = new k(), $.set(f, x), !n.setProvider(c, f, a))
            throw $.delete(f), A && o.delete(c), new Error("Wrong provider for target.");
        }
        return x;
      }
      function g(c, f, v) {
        var $ = d(
          f,
          v,
          /*Create*/
          !1
        );
        return m($) ? !1 : Ye($.has(c));
      }
      function M(c, f, v) {
        var $ = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(c);
      }
      function C(c, f, v, $) {
        var A = d(
          v,
          $,
          /*Create*/
          !0
        );
        A.set(c, f);
      }
      function _(c, f) {
        var v = [], $ = d(
          c,
          f,
          /*Create*/
          !1
        );
        if (m($))
          return v;
        for (var A = $.keys(), x = Ke(A), H = 0; ; ) {
          var it = tt(x);
          if (!it)
            return v.length = H, v;
          var It = et(it);
          try {
            v[H] = It;
          } catch (Ut) {
            try {
              rt(x);
            } finally {
              throw Ut;
            }
          }
          H++;
        }
      }
      function h(c, f, v) {
        var $ = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(c))
          return !1;
        if ($.size === 0) {
          var A = o.get(f);
          m(A) || (A.delete(v), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Tt(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, d = n.getOwnMetadata, g = n.getOwnMetadataKeys, M = n.deleteMetadata, C = new N(), _ = {
        isProviderFor: function(h, c) {
          var f = C.get(h);
          return !m(f) && f.has(c) ? !0 : g(h, c).length ? (m(f) && (f = new T(), C.set(h, f)), f.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: M
      };
      return _;
    }
    function re(n, o, a) {
      var d = W.getProvider(n, o);
      if (!m(d))
        return d;
      if (a) {
        if (W.setProvider(n, o, te))
          return te;
        throw new Error("Illegal state.");
      }
    }
    function Rt() {
      var n = {}, o = [], a = (
        /** @class */
        function() {
          function _(h, c, f) {
            this._index = 0, this._keys = h, this._values = c, this._selector = f;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[u] = function() {
            return this;
          }, _.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var c = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, _.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
          }, _;
        }()
      ), d = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, _.prototype.set = function(h, c) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = c, this;
          }, _.prototype.delete = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var f = this._keys.length, v = c + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, Oe(h, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, g);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, M);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, C);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(h, c) {
            if (!Oe(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (Oe(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return d;
      function g(_, h) {
        return _;
      }
      function M(_, h) {
        return h;
      }
      function C(_, h) {
        return [_, h];
      }
    }
    function Nt() {
      var n = (
        /** @class */
        function() {
          function o() {
            this._map = new k();
          }
          return Object.defineProperty(o.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), o.prototype.has = function(a) {
            return this._map.has(a);
          }, o.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, o.prototype.delete = function(a) {
            return this._map.delete(a);
          }, o.prototype.clear = function() {
            this._map.clear();
          }, o.prototype.keys = function() {
            return this._map.keys();
          }, o.prototype.values = function() {
            return this._map.keys();
          }, o.prototype.entries = function() {
            return this._map.entries();
          }, o.prototype["@@iterator"] = function() {
            return this.keys();
          }, o.prototype[u] = function() {
            return this.keys();
          }, o;
        }()
      );
      return n;
    }
    function Ht() {
      var n = 16, o = w.create(), a = d();
      return (
        /** @class */
        function() {
          function h() {
            this._key = d();
          }
          return h.prototype.has = function(c) {
            var f = g(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, h.prototype.get = function(c) {
            var f = g(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, h.prototype.set = function(c, f) {
            var v = g(
              c,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
          }, h.prototype.delete = function(c) {
            var f = g(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = d();
          }, h;
        }()
      );
      function d() {
        var h;
        do
          h = "@@WeakMap@@" + _();
        while (w.has(o, h));
        return o[h] = !0, h;
      }
      function g(h, c) {
        if (!i.call(h, a)) {
          if (!c)
            return;
          Object.defineProperty(h, a, { value: w.create() });
        }
        return h[a];
      }
      function M(h, c) {
        for (var f = 0; f < c; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function C(h) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : M(c, h), c;
        }
        return M(new Array(h), h);
      }
      function _() {
        var h = C(n);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var c = "", f = 0; f < n; ++f) {
          var v = h[f];
          (f === 4 || f === 6 || f === 8) && (c += "-"), v < 16 && (c += "0"), c += v.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function Te(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(ot || (ot = {}));
function Lt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function zt(r) {
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
        const i = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(i))
          try {
            customElements.define(i, e);
          } catch {
            try {
              customElements.define(i, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, l);
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
function Bt(r) {
  return zt(r);
}
function Wt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        nt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), y = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && y) {
          const w = new CSSStyleSheet(), b = (E = l.sheet) == null ? void 0 : E.cssRules;
          b && (Array.from(b).forEach((k) => w.insertRule(k.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          p.appendChild(w);
        }
        u.forEach((w) => {
          const b = w.cloneNode(!0);
          p.appendChild(b);
        });
      }
    }
    return t;
  };
}
function Gt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Vt(r) {
  return function(e, t) {
    try {
      Gt(r);
      const i = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? t);
      }
      i.push(r), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function Y(r) {
  return Vt(r);
}
var B;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(B || (B = {}));
var j;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(j || (j = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ae = globalThis, je = Ae.ShadowRoot && (Ae.ShadyCSS === void 0 || Ae.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, De = Symbol(), at = /* @__PURE__ */ new WeakMap();
let bt = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== De) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (je && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = at.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && at.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (r) => new bt(typeof r == "string" ? r : r + "", void 0, De), qt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, s, l) => i + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new bt(t, r, De);
}, Zt = (r, e) => {
  if (je) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), s = Ae.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = t.cssText, r.appendChild(i);
  }
}, lt = je ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Ft(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Yt, defineProperty: Xt, getOwnPropertyDescriptor: Jt, getOwnPropertyNames: Qt, getOwnPropertySymbols: Kt, getPrototypeOf: er } = Object, z = globalThis, ut = z.trustedTypes, tr = ut ? ut.emptyScript : "", Re = z.reactiveElementPolyfillSupport, oe = (r, e) => r, xe = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? tr : null;
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
} }, Le = (r, e) => !Yt(r, e), dt = { attribute: !0, type: String, converter: xe, reflect: !1, useDefault: !1, hasChanged: Le };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = dt) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, t);
      s !== void 0 && Xt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: s, set: l } = Jt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const y = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, y, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? dt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(oe("elementProperties"))) return;
    const e = er(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(oe("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(oe("properties"))) {
      const t = this.properties, i = [...Qt(t), ...Kt(t)];
      for (const s of i) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, s] of t) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const s = this._$Eu(t, i);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const s of i) t.unshift(lt(s));
    } else e !== void 0 && t.push(lt(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Zt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$ET(e, t) {
    var l;
    const i = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, i);
    if (s !== void 0 && i.reflect === !0) {
      const u = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : xe).toAttribute(t, i.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const y = i.getPropertyOptions(s), p = typeof y.converter == "function" ? { fromAttribute: y.converter } : ((l = y.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? y.converter : xe;
      this._$Em = s;
      const E = p.fromAttribute(t, y.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, i, s = !1, l) {
    var u;
    if (e !== void 0) {
      const y = this.constructor;
      if (s === !1 && (l = this[e]), i ?? (i = y.getPropertyOptions(e)), !((i.hasChanged ?? Le)(l, t) || i.useDefault && i.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(y._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: s, wrapped: l }, u) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: y } = u, p = this[l];
        y !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(t)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
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
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[oe("elementProperties")] = /* @__PURE__ */ new Map(), J[oe("finalized")] = /* @__PURE__ */ new Map(), Re == null || Re({ ReactiveElement: J }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis, ht = (r) => r, ke = ae.trustedTypes, ct = ke ? ke.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, _t = "$lit$", L = `lit$${Math.random().toFixed(9).slice(2)}$`, $t = "?" + L, rr = `<${$t}>`, Z = document, ue = () => Z.createComment(""), de = (r) => r === null || typeof r != "object" && typeof r != "function", ze = Array.isArray, ir = (r) => ze(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Ne = `[ 	
\f\r]`, ie = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ft = /-->/g, pt = />/g, G = RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), vt = /'/g, yt = /"/g, wt = /^(?:script|style|textarea|title)$/i, nr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ne = nr(1), Q = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), gt = /* @__PURE__ */ new WeakMap(), F = Z.createTreeWalker(Z, 129);
function Et(r, e) {
  if (!ze(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ct !== void 0 ? ct.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, i = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = ie;
  for (let y = 0; y < t; y++) {
    const p = r[y];
    let E, w, b = -1, k = 0;
    for (; k < p.length && (u.lastIndex = k, w = u.exec(p), w !== null); ) k = u.lastIndex, u === ie ? w[1] === "!--" ? u = ft : w[1] !== void 0 ? u = pt : w[2] !== void 0 ? (wt.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = G) : w[3] !== void 0 && (u = G) : u === G ? w[0] === ">" ? (u = s ?? ie, b = -1) : w[1] === void 0 ? b = -2 : (b = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? G : w[3] === '"' ? yt : vt) : u === yt || u === vt ? u = G : u === ft || u === pt ? u = ie : (u = G, s = void 0);
    const T = u === G && r[y + 1].startsWith("/>") ? " " : "";
    l += u === ie ? p + rr : b >= 0 ? (i.push(E), p.slice(0, b) + _t + p.slice(b) + L + T) : p + L + (b === -2 ? y : T);
  }
  return [Et(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class he {
  constructor({ strings: e, _$litType$: t }, i) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const y = e.length - 1, p = this.parts, [E, w] = sr(e, t);
    if (this.el = he.createElement(E, i), F.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (s = F.nextNode()) !== null && p.length < y; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const b of s.getAttributeNames()) if (b.endsWith(_t)) {
          const k = w[u++], T = s.getAttribute(b).split(L), N = /([.?@])?(.*)/.exec(k);
          p.push({ type: 1, index: l, name: N[2], strings: T, ctor: N[1] === "." ? ar : N[1] === "?" ? lr : N[1] === "@" ? ur : Se }), s.removeAttribute(b);
        } else b.startsWith(L) && (p.push({ type: 6, index: l }), s.removeAttribute(b));
        if (wt.test(s.tagName)) {
          const b = s.textContent.split(L), k = b.length - 1;
          if (k > 0) {
            s.textContent = ke ? ke.emptyScript : "";
            for (let T = 0; T < k; T++) s.append(b[T], ue()), F.nextNode(), p.push({ type: 2, index: ++l });
            s.append(b[k], ue());
          }
        }
      } else if (s.nodeType === 8) if (s.data === $t) p.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = s.data.indexOf(L, b + 1)) !== -1; ) p.push({ type: 7, index: l }), b += L.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const i = Z.createElement("template");
    return i.innerHTML = e, i;
  }
}
function K(r, e, t = r, i) {
  var u, y;
  if (e === Q) return e;
  let s = i !== void 0 ? (u = t._$Co) == null ? void 0 : u[i] : t._$Cl;
  const l = de(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((y = s == null ? void 0 : s._$AO) == null || y.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = s : t._$Cl = s), s !== void 0 && (e = K(r, s._$AS(r, e.values), s, i)), e;
}
class or {
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
    const { el: { content: t }, parts: i } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? Z).importNode(t, !0);
    F.currentNode = s;
    let l = F.nextNode(), u = 0, y = 0, p = i[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let E;
        p.type === 2 ? E = new ce(l, l.nextSibling, this, e) : p.type === 1 ? E = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (E = new dr(l, this, e)), this._$AV.push(E), p = i[++y];
      }
      u !== (p == null ? void 0 : p.index) && (l = F.nextNode(), u++);
    }
    return F.currentNode = Z, s;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class ce {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, s) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = K(this, e, t), de(e) ? e === O || e == null || e === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : e !== this._$AH && e !== Q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : ir(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== O && de(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = he.createElement(Et(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new or(s, this), y = u.u(this.options);
      u.p(t), this.T(y), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = gt.get(e.strings);
    return t === void 0 && gt.set(e.strings, t = new he(e)), t;
  }
  k(e) {
    ze(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, s = 0;
    for (const l of e) s === t.length ? t.push(i = new ce(this.O(ue()), this.O(ue()), this, this.options)) : i = t[s], i._$AI(l), s++;
    s < t.length && (this._$AR(i && i._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = ht(e).nextSibling;
      ht(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class Se {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, s, l) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = O;
  }
  _$AI(e, t = this, i, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = K(this, e, t, 0), u = !de(e) || e !== this._$AH && e !== Q, u && (this._$AH = e);
    else {
      const y = e;
      let p, E;
      for (e = l[0], p = 0; p < l.length - 1; p++) E = K(this, y[i + p], t, p), E === Q && (E = this._$AH[p]), u || (u = !de(E) || E !== this._$AH[p]), E === O ? e = O : e !== O && (e += (E ?? "") + l[p + 1]), this._$AH[p] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends Se {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === O ? void 0 : e;
  }
}
class lr extends Se {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== O);
  }
}
class ur extends Se {
  constructor(e, t, i, s, l) {
    super(e, t, i, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = K(this, e, t, 0) ?? O) === Q) return;
    const i = this._$AH, s = e === O && i !== O || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== O && (i === O || s);
    s && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class dr {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    K(this, e);
  }
}
const He = ae.litHtmlPolyfillSupport;
He == null || He(he, ce), (ae.litHtmlVersions ?? (ae.litHtmlVersions = [])).push("3.3.3");
const hr = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = s = new ce(e.insertBefore(ue(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis;
class le extends J {
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
var mt;
le._$litElement$ = !0, le.finalized = !0, (mt = q.litElementHydrateSupport) == null || mt.call(q, { LitElement: le });
const Ie = q.litElementPolyfillSupport;
Ie == null || Ie({ LitElement: le });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: xe, reflect: !1, hasChanged: Le }, fr = (r = cr, e, t) => {
  const { kind: i, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), i === "accessor") {
    const { name: u } = t;
    return { set(y) {
      const p = e.get.call(this);
      e.set.call(this, y), this.requestUpdate(u, p, r, !0, y);
    }, init(y) {
      return y !== void 0 && this.C(u, void 0, r, y), y;
    } };
  }
  if (i === "setter") {
    const { name: u } = t;
    return function(y) {
      const p = this[u];
      e.call(this, y), this.requestUpdate(u, p, r, !0, y);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function ee(r) {
  return (e, t) => typeof t == "object" ? fr(r, e, t) : ((i, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, i), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var pr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, R = (r, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? vr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (i ? u(e, t, s) : u(s)) || s);
  return i && s && pr(e, t, s), s;
};
const Ue = "var(--uiv-bg-secondary, #e9edf3)", yr = "rgba(255, 255, 255, 0.55)", se = {
  kind: "generic",
  templateHtml: [
    "<div style='width:280px;font-family:inherit;box-sizing:border-box;'>",
    "<div style='display:flex;gap:12px;align-items:center;margin-bottom:14px;'>",
    "<div style='width:44px;height:44px;border-radius:50%;background:#e9edf3;flex:none;'></div>",
    "<div style='flex:1;'>",
    "<div style='height:12px;border-radius:6px;background:#e9edf3;margin-bottom:8px;width:70%;'></div>",
    "<div style='height:12px;border-radius:6px;background:#e9edf3;width:45%;'></div>",
    "</div>",
    "</div>",
    "<div style='height:12px;border-radius:6px;background:#e9edf3;margin-bottom:8px;'></div>",
    "<div style='height:12px;border-radius:6px;background:#e9edf3;margin-bottom:8px;'></div>",
    "<div style='height:12px;border-radius:6px;background:#e9edf3;width:80%;'></div>",
    "</div>"
  ].join(""),
  labelProp: "variant",
  badges: ["Feedback", "Skeleton"]
};
function V(r, e) {
  const t = e === "wave" ? `background-image:linear-gradient(90deg,${Ue} 0%,${yr} 50%,${Ue} 100%);background-size:200% 100%;` : "";
  return `<div style='background:${Ue};${t}${e === "pulse" ? "opacity:0.85;" : ""}${r}'></div>`;
}
let P = class extends le {
  constructor() {
    super(...arguments), this.variant = "text", this.width = "", this.height = "", this.lines = 3, this.animation = "pulse", this.rounded = !0;
  }
  static getStudioTemplate(r) {
    var E, w, b, k, T, N, U, W, te, fe, pe, ve, ye, ge, me, be, _e, $e;
    if (!r) return se;
    const e = (((E = r.props) == null ? void 0 : E.variant) ?? ((b = (w = r.studio) == null ? void 0 : w.props) == null ? void 0 : b.variant)) || "text", t = (((k = r.props) == null ? void 0 : k.width) ?? ((N = (T = r.studio) == null ? void 0 : T.props) == null ? void 0 : N.width)) || "", i = (((U = r.props) == null ? void 0 : U.height) ?? ((te = (W = r.studio) == null ? void 0 : W.props) == null ? void 0 : te.height)) || "", s = Math.max(1, Number(((fe = r.props) == null ? void 0 : fe.lines) ?? ((ve = (pe = r.studio) == null ? void 0 : pe.props) == null ? void 0 : ve.lines) ?? 3)), l = (((ye = r.props) == null ? void 0 : ye.animation) ?? ((me = (ge = r.studio) == null ? void 0 : ge.props) == null ? void 0 : me.animation)) || "pulse", y = ((be = r.props) == null ? void 0 : be.rounded) ?? (($e = (_e = r.studio) == null ? void 0 : _e.props) == null ? void 0 : $e.rounded) ?? !0 ? "var(--uiv-border-radius, 8px)" : "0";
    if (e === "circle") {
      const D = t || i || "48px";
      return {
        ...se,
        templateHtml: V(
          `width:${D};height:${i || D};border-radius:50%;box-sizing:border-box;`,
          l
        )
      };
    }
    if (e === "rect")
      return {
        ...se,
        templateHtml: V(
          `width:${t || "100%"};height:${i || "120px"};border-radius:${y};box-sizing:border-box;`,
          l
        )
      };
    if (e === "card")
      return {
        ...se,
        templateHtml: [
          `<div style='width:${t || "280px"};font-family:inherit;box-sizing:border-box;border:1px solid var(--uiv-border-color, #e5e7eb);border-radius:${y === "0" ? "12px" : y};padding:14px;background:var(--uiv-surface-color, #ffffff);'>`,
          V(`width:100%;height:${i || "130px"};border-radius:10px;margin-bottom:12px;`, l),
          V("width:60%;height:14px;border-radius:6px;margin-bottom:8px;", l),
          V("width:90%;height:12px;border-radius:6px;margin-bottom:6px;", l),
          V("width:80%;height:12px;border-radius:6px;", l),
          "</div>"
        ].join("")
      };
    const p = [];
    for (let D = 0; D < s; D++) {
      const we = D === s - 1, Ce = t || (we && s > 1 ? "70%" : "100%");
      p.push(V(`width:${Ce};height:${i || "12px"};border-radius:${y};margin-bottom:${we ? "0" : "8px"};`, l));
    }
    return {
      ...se,
      templateHtml: [
        "<div style='width:280px;font-family:inherit;box-sizing:border-box;'>",
        p.join(""),
        "</div>"
      ].join("")
    };
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "text";
  }
  get widthConfig() {
    return this.width;
  }
  set widthConfig(r) {
    this.width = r;
  }
  get heightConfig() {
    return this.height;
  }
  set heightConfig(r) {
    this.height = r;
  }
  get linesConfig() {
    return this.lines;
  }
  set linesConfig(r) {
    this.lines = Math.max(1, Number(r) || 1);
  }
  get animationConfig() {
    return this.animation;
  }
  set animationConfig(r) {
    this.animation = r || "pulse";
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
        detail: { variant: this.variant },
        bubbles: !0,
        composed: !0
      })
    );
  }
  animClass() {
    return this.animation === "wave" ? "anim-wave" : this.animation === "pulse" ? "anim-pulse" : "";
  }
  render() {
    const r = this.animClass(), e = this.rounded ? "rounded" : "square";
    if (this.variant === "circle") {
      const i = this.width || this.height || "48px";
      return ne`
        <div
          class="block circle ${r} clickable"
          style="width:${i};height:${this.height || i};"
          @click=${this.handleClick}
        ></div>
      `;
    }
    if (this.variant === "rect")
      return ne`
        <div
          class="block ${e} ${r} clickable"
          style="width:${this.width || "100%"};height:${this.height || "120px"};"
          @click=${this.handleClick}
        ></div>
      `;
    if (this.variant === "card")
      return ne`
        <div
          class="card clickable"
          style=${this.width ? `width:${this.width};` : ""}
          @click=${this.handleClick}
        >
          <div class="block thumb ${r}"></div>
          <div class="block heading ${r}"></div>
          <div class="block para ${r}" style="width:90%;"></div>
          <div class="block para ${r}" style="width:80%;margin-bottom:0;"></div>
        </div>
      `;
    const t = Math.max(1, Number(this.lines) || 1);
    return ne`
      <div class="text-wrap clickable" @click=${this.handleClick}>
        ${Array.from({ length: t }).map((i, s) => {
      const l = s === t - 1, u = this.width || (l && t > 1 ? "70%" : "100%");
      return ne`<div
            class="block line ${e} ${r}"
            style="width:${u};height:${this.height || "12px"};"
          ></div>`;
    })}
      </div>
    `;
  }
};
P.styles = qt`
    :host {
      display: block;
      --sk-base: var(--uiv-bg-secondary, #e9edf3);
      --sk-border: var(--uiv-border-color, #e5e7eb);
      --sk-surface: var(--uiv-surface-color, #ffffff);
      --sk-radius: var(--uiv-border-radius, 8px);
    }

    .block {
      background: var(--sk-base);
      box-sizing: border-box;
    }
    .rounded { border-radius: var(--sk-radius); }
    .square { border-radius: 0; }
    .circle { border-radius: 50%; }

    /* animations */
    .anim-pulse { animation: sk-pulse 1.5s ease-in-out infinite; }
    @keyframes sk-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.55; }
    }

    .anim-wave {
      position: relative;
      overflow: hidden;
      background-image: linear-gradient(
        90deg,
        var(--sk-base) 0%,
        rgba(255, 255, 255, 0.55) 50%,
        var(--sk-base) 100%
      );
      background-size: 200% 100%;
      animation: sk-wave 1.6s linear infinite;
    }
    @keyframes sk-wave {
      from { background-position: 200% 0; }
      to { background-position: -200% 0; }
    }

    .text-wrap { width: 100%; }
    .line + .line { margin-top: 8px; }

    .card {
      border: 1px solid var(--sk-border);
      border-radius: 12px;
      padding: 14px;
      background: var(--sk-surface);
      box-sizing: border-box;
    }
    .card .thumb { width: 100%; height: 130px; border-radius: 10px; margin-bottom: 12px; }
    .card .heading { width: 60%; height: 14px; border-radius: 6px; margin-bottom: 8px; }
    .card .para { height: 12px; border-radius: 6px; margin-bottom: 6px; }

    .clickable { cursor: pointer; }
  `;
R([
  ee({ type: String })
], P.prototype, "variant", 2);
R([
  ee({ type: String })
], P.prototype, "width", 2);
R([
  ee({ type: String })
], P.prototype, "height", 2);
R([
  ee({ type: Number })
], P.prototype, "lines", 2);
R([
  ee({ type: String })
], P.prototype, "animation", 2);
R([
  ee({ type: Boolean })
], P.prototype, "rounded", 2);
R([
  Y({
    attributeType: j.PROPERTY,
    uiComponentType: B.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Text", value: "text" },
      { label: "Circle", value: "circle" },
      { label: "Rectangle", value: "rect" },
      { label: "Card", value: "card" }
    ]
  })
], P.prototype, "variantConfig", 1);
R([
  Y({
    attributeType: j.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Width (e.g. 100%, 200px)",
    fieldMappings: "width"
  })
], P.prototype, "widthConfig", 1);
R([
  Y({
    attributeType: j.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Height (e.g. 12px, 120px)",
    fieldMappings: "height"
  })
], P.prototype, "heightConfig", 1);
R([
  Y({
    attributeType: j.PROPERTY,
    uiComponentType: B.NUMBER_INPUT,
    displayLabel: "Lines (text variant)",
    fieldMappings: "lines"
  })
], P.prototype, "linesConfig", 1);
R([
  Y({
    attributeType: j.PROPERTY,
    uiComponentType: B.DROPDOWN,
    displayLabel: "Animation",
    fieldMappings: "animation",
    optionItems: [
      { label: "Pulse", value: "pulse" },
      { label: "Wave", value: "wave" },
      { label: "None", value: "none" }
    ]
  })
], P.prototype, "animationConfig", 1);
R([
  Y({
    attributeType: j.PROPERTY,
    uiComponentType: B.CHECKBOX,
    displayLabel: "Rounded",
    fieldMappings: "rounded"
  })
], P.prototype, "roundedConfig", 1);
R([
  Y({
    attributeType: j.EVENT,
    displayLabel: "On Click",
    eventTrigger: "on-click"
  })
], P.prototype, "handleClick", 1);
P = R([
  Bt({
    name: "zero-skeleton",
    version: "1.0.0",
    title: "Skeleton",
    elementSelector: "zero-skeleton",
    group: "Feedback",
    iconName: "skeleton-icon.png"
  }),
  Wt()
], P);
export {
  P as ZeroSkeleton,
  se as studioTemplate
};
