var Lt = Object.defineProperty;
var Ht = (r, e, t) => e in r ? Lt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var rt = (r, e, t) => Ht(r, typeof e != "symbol" ? e + "" : e, t);
var nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var it;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof nt == "object" ? nt : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, E) {
      return function($, _) {
        Object.defineProperty(p, $, { configurable: !0, writable: !0, value: _ }), E && E($, _);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, E = !m && !p, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return Ie(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Ie({ __proto__: null });
      } : function() {
        return Ie({});
      },
      has: E ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: E ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, _ = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Rt(), N = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Nt(), U = typeof WeakMap == "function" ? WeakMap : Ut(), H = s ? Symbol.for("@reflect-metadata:registry") : void 0, V = Pt(), ne = kt(V);
    function me(i, o, a, c) {
      if (g(a)) {
        if (!Ze(i))
          throw new TypeError();
        if (!Ye(o))
          throw new TypeError();
        return xe(i, o);
      } else {
        if (!Ze(i))
          throw new TypeError();
        if (!x(o))
          throw new TypeError();
        if (!x(c) && !g(c) && !z(c))
          throw new TypeError();
        return z(c) && (c = void 0), a = I(a), Se(i, o, a, c);
      }
    }
    e("decorate", me);
    function ge(i, o) {
      function a(c, y) {
        if (!x(c))
          throw new TypeError();
        if (!g(y) && !St(y))
          throw new TypeError();
        ae(i, o, c, y);
      }
      return a;
    }
    e("metadata", ge);
    function _e(i, o, a, c) {
      if (!x(a))
        throw new TypeError();
      return g(c) || (c = I(c)), ae(i, o, a, c);
    }
    e("defineMetadata", _e);
    function be(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return g(a) || (a = I(a)), ie(i, o, a);
    }
    e("hasMetadata", be);
    function $e(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return g(a) || (a = I(a)), J(i, o, a);
    }
    e("hasOwnMetadata", $e);
    function we(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return g(a) || (a = I(a)), se(i, o, a);
    }
    e("getMetadata", we);
    function Ee(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return g(a) || (a = I(a)), oe(i, o, a);
    }
    e("getOwnMetadata", Ee);
    function Ae(i, o) {
      if (!x(i))
        throw new TypeError();
      return g(o) || (o = I(o)), T(i, o);
    }
    e("getMetadataKeys", Ae);
    function Me(i, o) {
      if (!x(i))
        throw new TypeError();
      return g(o) || (o = I(o)), Q(i, o);
    }
    e("getOwnMetadataKeys", Me);
    function Ce(i, o, a) {
      if (!x(o))
        throw new TypeError();
      if (g(a) || (a = I(a)), !x(o))
        throw new TypeError();
      g(a) || (a = I(a));
      var c = le(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", Ce);
    function xe(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], y = c(o);
        if (!g(y) && !z(y)) {
          if (!Ye(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function Se(i, o, a, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var O = i[y], S = O(o, a, c);
        if (!g(S) && !z(S)) {
          if (!x(S))
            throw new TypeError();
          c = S;
        }
      }
      return c;
    }
    function ie(i, o, a) {
      var c = J(i, o, a);
      if (c)
        return !0;
      var y = je(o);
      return z(y) ? !1 : ie(i, y, a);
    }
    function J(i, o, a) {
      var c = le(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : qe(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function se(i, o, a) {
      var c = J(i, o, a);
      if (c)
        return oe(i, o, a);
      var y = je(o);
      if (!z(y))
        return se(i, y, a);
    }
    function oe(i, o, a) {
      var c = le(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function ae(i, o, a, c) {
      var y = le(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function T(i, o) {
      var a = Q(i, o), c = je(i);
      if (c === null)
        return a;
      var y = T(c, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var O = new N(), S = [], b = 0, h = a; b < h.length; b++) {
        var d = h[b], f = O.has(d);
        f || (O.add(d), S.push(d));
      }
      for (var v = 0, w = y; v < w.length; v++) {
        var d = w[v], f = O.has(d);
        f || (O.add(d), S.push(d));
      }
      return S;
    }
    function Q(i, o) {
      var a = le(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function K(i) {
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
    function z(i) {
      return i === null;
    }
    function At(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Mt(i, o) {
      switch (K(i)) {
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
      var a = "string", c = Xe(i, l);
      if (c !== void 0) {
        var y = c.call(i, a);
        if (x(y))
          throw new TypeError();
        return y;
      }
      return Ct(i);
    }
    function Ct(i, o) {
      var a, c;
      {
        var y = i.toString;
        if (Oe(y)) {
          var c = y.call(i);
          if (!x(c))
            return c;
        }
        var a = i.valueOf;
        if (Oe(a)) {
          var c = a.call(i);
          if (!x(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function qe(i) {
      return !!i;
    }
    function xt(i) {
      return "" + i;
    }
    function I(i) {
      var o = Mt(i);
      return At(o) ? o : xt(o);
    }
    function Ze(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function Oe(i) {
      return typeof i == "function";
    }
    function Ye(i) {
      return typeof i == "function";
    }
    function St(i) {
      switch (K(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ue(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Xe(i, o) {
      var a = i[o];
      if (a != null) {
        if (!Oe(a))
          throw new TypeError();
        return a;
      }
    }
    function Je(i) {
      var o = Xe(i, u);
      if (!Oe(o))
        throw new TypeError();
      var a = o.call(i);
      if (!x(a))
        throw new TypeError();
      return a;
    }
    function Qe(i) {
      return i.value;
    }
    function Ke(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function et(i) {
      var o = i.return;
      o && o.call(i);
    }
    function je(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || o !== _)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var y = c.constructor;
      return typeof y != "function" || y === i ? o : y;
    }
    function Ot() {
      var i;
      !g(H) && typeof t.Reflect < "u" && !(H in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Tt(t.Reflect));
      var o, a, c, y = new U(), O = {
        registerProvider: S,
        getProvider: h,
        setProvider: f
      };
      return O;
      function S(v) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case g(o):
            o = v;
            break;
          case o === v:
            break;
          case g(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            c === void 0 && (c = new N()), c.add(v);
            break;
        }
      }
      function b(v, w) {
        if (!g(o)) {
          if (o.isProviderFor(v, w))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(v, w))
              return o;
            if (!g(c))
              for (var A = Je(c); ; ) {
                var M = Ke(A);
                if (!M)
                  return;
                var j = Qe(M);
                if (j.isProviderFor(v, w))
                  return et(A), j;
              }
          }
        }
        if (!g(i) && i.isProviderFor(v, w))
          return i;
      }
      function h(v, w) {
        var A = y.get(v), M;
        return g(A) || (M = A.get(w)), g(M) && (M = b(v, w), g(M) || (g(A) && (A = new C(), y.set(v, A)), A.set(w, M))), M;
      }
      function d(v) {
        if (g(v))
          throw new TypeError();
        return o === v || a === v || !g(c) && c.has(v);
      }
      function f(v, w, A) {
        if (!d(A))
          throw new Error("Metadata provider not registered.");
        var M = h(v, w);
        if (M !== A) {
          if (!g(M))
            return !1;
          var j = y.get(v);
          g(j) && (j = new C(), y.set(v, j)), j.set(w, A);
        }
        return !0;
      }
    }
    function Pt() {
      var i;
      return !g(H) && x(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[H]), g(i) && (i = Ot()), !g(H) && x(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, H, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function kt(i) {
      var o = new U(), a = {
        isProviderFor: function(d, f) {
          var v = o.get(d);
          return g(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: S,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: h
      };
      return V.registerProvider(a), a;
      function c(d, f, v) {
        var w = o.get(d), A = !1;
        if (g(w)) {
          if (!v)
            return;
          w = new C(), o.set(d, w), A = !0;
        }
        var M = w.get(f);
        if (g(M)) {
          if (!v)
            return;
          if (M = new C(), w.set(f, M), !i.setProvider(d, f, a))
            throw w.delete(f), A && o.delete(d), new Error("Wrong provider for target.");
        }
        return M;
      }
      function y(d, f, v) {
        var w = c(
          f,
          v,
          /*Create*/
          !1
        );
        return g(w) ? !1 : qe(w.has(d));
      }
      function O(d, f, v) {
        var w = c(
          f,
          v,
          /*Create*/
          !1
        );
        if (!g(w))
          return w.get(d);
      }
      function S(d, f, v, w) {
        var A = c(
          v,
          w,
          /*Create*/
          !0
        );
        A.set(d, f);
      }
      function b(d, f) {
        var v = [], w = c(
          d,
          f,
          /*Create*/
          !1
        );
        if (g(w))
          return v;
        for (var A = w.keys(), M = Je(A), j = 0; ; ) {
          var tt = Ke(M);
          if (!tt)
            return v.length = j, v;
          var jt = Qe(tt);
          try {
            v[j] = jt;
          } catch (It) {
            try {
              et(M);
            } finally {
              throw It;
            }
          }
          j++;
        }
      }
      function h(d, f, v) {
        var w = c(
          f,
          v,
          /*Create*/
          !1
        );
        if (g(w) || !w.delete(d))
          return !1;
        if (w.size === 0) {
          var A = o.get(f);
          g(A) || (A.delete(v), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Tt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, O = i.deleteMetadata, S = new U(), b = {
        isProviderFor: function(h, d) {
          var f = S.get(h);
          return !g(f) && f.has(d) ? !0 : y(h, d).length ? (g(f) && (f = new N(), S.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: O
      };
      return b;
    }
    function le(i, o, a) {
      var c = V.getProvider(i, o);
      if (!g(c))
        return c;
      if (a) {
        if (V.setProvider(i, o, ne))
          return ne;
        throw new Error("Illegal state.");
      }
    }
    function Rt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function b(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, b.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
          }, b;
        }()
      ), c = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, b.prototype.set = function(h, d) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, b.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, v = d + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, Ue(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, S);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(h, d) {
            if (!Ue(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (Ue(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return c;
      function y(b, h) {
        return b;
      }
      function O(b, h) {
        return h;
      }
      function S(b, h) {
        return [b, h];
      }
    }
    function Nt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new C();
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
      return i;
    }
    function Ut() {
      var i = 16, o = $.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, h.prototype.set = function(d, f) {
            var v = y(
              d,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
          }, h.prototype.delete = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = c();
          }, h;
        }()
      );
      function c() {
        var h;
        do
          h = "@@WeakMap@@" + b();
        while ($.has(o, h));
        return o[h] = !0, h;
      }
      function y(h, d) {
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: $.create() });
        }
        return h[a];
      }
      function O(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function S(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : O(d, h), d;
        }
        return O(new Array(h), h);
      }
      function b() {
        var h = S(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var v = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), v < 16 && (d += "0"), d += v.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function Ie(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(it || (it = {}));
function Dt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function zt(r) {
  return function(e) {
    if (Dt(r)) {
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
function Bt(r) {
  return zt(r);
}
function Wt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        rt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const $ = new CSSStyleSheet(), _ = (E = l.sheet) == null ? void 0 : E.cssRules;
          _ && (Array.from(_).forEach((C) => $.insertRule(C.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          p.appendChild($);
        }
        u.forEach(($) => {
          const _ = $.cloneNode(!0);
          p.appendChild(_);
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
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function G(r) {
  return Vt(r);
}
var D;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(D || (D = {}));
var L;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(L || (L = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ke = globalThis, We = ke.ShadowRoot && (ke.ShadyCSS === void 0 || ke.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ge = Symbol(), st = /* @__PURE__ */ new WeakMap();
let _t = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ge) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (We && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = st.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && st.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (r) => new _t(typeof r == "string" ? r : r + "", void 0, Ge), qt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new _t(t, r, Ge);
}, Zt = (r, e) => {
  if (We) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ke.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, ot = We ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Ft(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Yt, defineProperty: Xt, getOwnPropertyDescriptor: Jt, getOwnPropertyNames: Qt, getOwnPropertySymbols: Kt, getPrototypeOf: er } = Object, W = globalThis, at = W.trustedTypes, tr = at ? at.emptyScript : "", Le = W.reactiveElementPolyfillSupport, ce = (r, e) => r, Te = { toAttribute(r, e) {
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
} }, Ve = (r, e) => !Yt(r, e), lt = { attribute: !0, type: String, converter: Te, reflect: !1, useDefault: !1, hasChanged: Ve };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), W.litPropertyMetadata ?? (W.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let ee = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = lt) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Xt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Jt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? lt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ce("elementProperties"))) return;
    const e = er(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ce("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ce("properties"))) {
      const t = this.properties, n = [...Qt(t), ...Kt(t)];
      for (const s of n) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, s] of t) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const s = this._$Eu(t, n);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const s of n) t.unshift(ot(s));
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
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : Te).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const m = n.getPropertyOptions(s), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : Te;
      this._$Em = s;
      const E = p.fromAttribute(t, m.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? Ve)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: m } = u, p = this[l];
        m !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((s) => {
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
    (t = this._$EO) == null || t.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
ee.elementStyles = [], ee.shadowRootOptions = { mode: "open" }, ee[ce("elementProperties")] = /* @__PURE__ */ new Map(), ee[ce("finalized")] = /* @__PURE__ */ new Map(), Le == null || Le({ ReactiveElement: ee }), (W.reactiveElementVersions ?? (W.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, ut = (r) => r, Re = he.trustedTypes, ct = Re ? Re.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, bt = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, $t = "?" + B, rr = `<${$t}>`, Y = document, fe = () => Y.createComment(""), pe = (r) => r === null || typeof r != "object" && typeof r != "function", Fe = Array.isArray, nr = (r) => Fe(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", He = `[ 	
\f\r]`, ue = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ht = /-->/g, dt = />/g, F = RegExp(`>|${He}(?:([^\\s"'>=/]+)(${He}*=${He}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ft = /'/g, pt = /"/g, wt = /^(?:script|style|textarea|title)$/i, ir = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), Pe = ir(1), te = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), vt = /* @__PURE__ */ new WeakMap(), q = Y.createTreeWalker(Y, 129);
function Et(r, e) {
  if (!Fe(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ct !== void 0 ? ct.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = ue;
  for (let m = 0; m < t; m++) {
    const p = r[m];
    let E, $, _ = -1, C = 0;
    for (; C < p.length && (u.lastIndex = C, $ = u.exec(p), $ !== null); ) C = u.lastIndex, u === ue ? $[1] === "!--" ? u = ht : $[1] !== void 0 ? u = dt : $[2] !== void 0 ? (wt.test($[2]) && (s = RegExp("</" + $[2], "g")), u = F) : $[3] !== void 0 && (u = F) : u === F ? $[0] === ">" ? (u = s ?? ue, _ = -1) : $[1] === void 0 ? _ = -2 : (_ = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? F : $[3] === '"' ? pt : ft) : u === pt || u === ft ? u = F : u === ht || u === dt ? u = ue : (u = F, s = void 0);
    const N = u === F && r[m + 1].startsWith("/>") ? " " : "";
    l += u === ue ? p + rr : _ >= 0 ? (n.push(E), p.slice(0, _) + bt + p.slice(_) + B + N) : p + B + (_ === -2 ? m : N);
  }
  return [Et(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ve {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, p = this.parts, [E, $] = sr(e, t);
    if (this.el = ve.createElement(E, n), q.currentNode = this.el.content, t === 2 || t === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (s = q.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const _ of s.getAttributeNames()) if (_.endsWith(bt)) {
          const C = $[u++], N = s.getAttribute(_).split(B), U = /([.?@])?(.*)/.exec(C);
          p.push({ type: 1, index: l, name: U[2], strings: N, ctor: U[1] === "." ? ar : U[1] === "?" ? lr : U[1] === "@" ? ur : Ne }), s.removeAttribute(_);
        } else _.startsWith(B) && (p.push({ type: 6, index: l }), s.removeAttribute(_));
        if (wt.test(s.tagName)) {
          const _ = s.textContent.split(B), C = _.length - 1;
          if (C > 0) {
            s.textContent = Re ? Re.emptyScript : "";
            for (let N = 0; N < C; N++) s.append(_[N], fe()), q.nextNode(), p.push({ type: 2, index: ++l });
            s.append(_[C], fe());
          }
        }
      } else if (s.nodeType === 8) if (s.data === $t) p.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = s.data.indexOf(B, _ + 1)) !== -1; ) p.push({ type: 7, index: l }), _ += B.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = Y.createElement("template");
    return n.innerHTML = e, n;
  }
}
function re(r, e, t = r, n) {
  var u, m;
  if (e === te) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = pe(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = re(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? Y).importNode(t, !0);
    q.currentNode = s;
    let l = q.nextNode(), u = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let E;
        p.type === 2 ? E = new ye(l, l.nextSibling, this, e) : p.type === 1 ? E = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (E = new cr(l, this, e)), this._$AV.push(E), p = n[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = q.nextNode(), u++);
    }
    return q.currentNode = Y, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ye {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = re(this, e, t), pe(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== te && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && pe(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Y.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ve.createElement(Et(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new or(s, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = vt.get(e.strings);
    return t === void 0 && vt.set(e.strings, t = new ve(e)), t;
  }
  k(e) {
    Fe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new ye(this.O(fe()), this.O(fe()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = ut(e).nextSibling;
      ut(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class Ne {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = re(this, e, t, 0), u = !pe(e) || e !== this._$AH && e !== te, u && (this._$AH = e);
    else {
      const m = e;
      let p, E;
      for (e = l[0], p = 0; p < l.length - 1; p++) E = re(this, m[n + p], t, p), E === te && (E = this._$AH[p]), u || (u = !pe(E) || E !== this._$AH[p]), E === P ? e = P : e !== P && (e += (E ?? "") + l[p + 1]), this._$AH[p] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends Ne {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class lr extends Ne {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class ur extends Ne {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = re(this, e, t, 0) ?? P) === te) return;
    const n = this._$AH, s = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== P && (n === P || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class cr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    re(this, e);
  }
}
const De = he.litHtmlPolyfillSupport;
De == null || De(ve, ye), (he.litHtmlVersions ?? (he.litHtmlVersions = [])).push("3.3.3");
const hr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new ye(e.insertBefore(fe(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z = globalThis;
class de extends ee {
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
    return te;
  }
}
var gt;
de._$litElement$ = !0, de.finalized = !0, (gt = Z.litElementHydrateSupport) == null || gt.call(Z, { LitElement: de });
const ze = Z.litElementPolyfillSupport;
ze == null || ze({ LitElement: de });
(Z.litElementVersions ?? (Z.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: Te, reflect: !1, hasChanged: Ve }, fr = (r = dr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(m) {
      const p = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(u, p, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(m) {
      const p = this[u];
      e.call(this, m), this.requestUpdate(u, p, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function X(r) {
  return (e, t) => typeof t == "object" ? fr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var pr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, R = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? vr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && pr(e, t, s), s;
};
const yt = {
  primary: "var(--uiv-primary-color, #6366f1)",
  success: "var(--uiv-color-success, #10b981)",
  warning: "var(--uiv-color-warning, #f59e0b)",
  error: "var(--uiv-color-danger, #ef4444)"
};
function mt(r, e) {
  const t = Number(e) || 100;
  return t <= 0 ? 0 : Math.min(100, Math.max(0, (Number(r) || 0) / t * 100));
}
const Be = {
  kind: "generic",
  templateHtml: [
    "<div style='width:220px;font-family:inherit;box-sizing:border-box;'>",
    "<div style='width:100%;height:10px;border-radius:999px;background:rgba(99,102,241,0.14);overflow:hidden;'>",
    "<div style='width:65%;height:100%;border-radius:999px;background:#6366f1;'></div>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "value",
  badges: ["Feedback", "Progress"]
};
let k = class extends de {
  constructor() {
    super(...arguments), this.value = 65, this.max = 100, this.variant = "linear", this.color = "primary", this.showLabel = !1, this.striped = !1, this.size = 12, this._completed = !1;
  }
  static getStudioTemplate(r) {
    var U, H, V, ne, me, ge, _e, be, $e, we, Ee, Ae, Me, Ce, xe, Se, ie, J, se, oe, ae;
    if (!r) return Be;
    const e = Number(((U = r.props) == null ? void 0 : U.value) ?? ((V = (H = r.studio) == null ? void 0 : H.props) == null ? void 0 : V.value) ?? 65), t = Number(((ne = r.props) == null ? void 0 : ne.max) ?? ((ge = (me = r.studio) == null ? void 0 : me.props) == null ? void 0 : ge.max) ?? 100), n = (((_e = r.props) == null ? void 0 : _e.variant) ?? (($e = (be = r.studio) == null ? void 0 : be.props) == null ? void 0 : $e.variant)) || "linear", s = (((we = r.props) == null ? void 0 : we.color) ?? ((Ae = (Ee = r.studio) == null ? void 0 : Ee.props) == null ? void 0 : Ae.color)) || "primary", l = ((Me = r.props) == null ? void 0 : Me.showLabel) ?? ((xe = (Ce = r.studio) == null ? void 0 : Ce.props) == null ? void 0 : xe.showLabel) ?? !1, u = ((Se = r.props) == null ? void 0 : Se.striped) ?? ((J = (ie = r.studio) == null ? void 0 : ie.props) == null ? void 0 : J.striped) ?? !1, m = Number(((se = r.props) == null ? void 0 : se.size) ?? ((ae = (oe = r.studio) == null ? void 0 : oe.props) == null ? void 0 : ae.size) ?? 12), p = yt[s] || yt.primary, E = "var(--uiv-bg-tertiary, rgba(99,102,241,0.14))", $ = mt(e, t), _ = `${Math.round($)}%`;
    if (n === "circular") {
      const T = Math.max(m, 40), Q = Math.max(4, Math.round(T * 0.11)), K = (T - Q) / 2, g = 2 * Math.PI * K, z = g * (1 - $ / 100);
      return {
        ...Be,
        templateHtml: [
          `<div style='display:inline-flex;position:relative;align-items:center;justify-content:center;width:${T}px;height:${T}px;font-family:inherit;box-sizing:border-box;'>`,
          `<svg width='${T}' height='${T}' viewBox='0 0 ${T} ${T}' style='transform:rotate(-90deg);'>`,
          `<circle cx='${T / 2}' cy='${T / 2}' r='${K}' fill='none' stroke='${E}' stroke-width='${Q}'/>`,
          `<circle cx='${T / 2}' cy='${T / 2}' r='${K}' fill='none' stroke='${p}' stroke-width='${Q}' stroke-linecap='round' stroke-dasharray='${g}' stroke-dashoffset='${z}'/>`,
          "</svg>",
          l ? `<span style='position:absolute;font-size:${Math.max(10, Math.round(T * 0.22))}px;font-weight:600;color:var(--uiv-text-color, #1f2937);'>${_}</span>` : "",
          "</div>"
        ].join("")
      };
    }
    const C = Math.max(4, m), N = u ? "background-image:linear-gradient(45deg,rgba(255,255,255,0.25) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.25) 50%,rgba(255,255,255,0.25) 75%,transparent 75%,transparent);background-size:1rem 1rem;" : "";
    return {
      ...Be,
      templateHtml: [
        "<div style='width:220px;font-family:inherit;box-sizing:border-box;'>",
        l ? `<div style='display:flex;justify-content:flex-end;margin-bottom:6px;font-size:12px;font-weight:600;color:var(--uiv-text-muted, #4b5563);'>${_}</div>` : "",
        `<div style='width:100%;height:${C}px;border-radius:999px;background:${E};overflow:hidden;'>`,
        `<div style='width:${$}%;height:100%;border-radius:999px;background:${p};${N}'></div>`,
        "</div>",
        "</div>"
      ].join("")
    };
  }
  get valueConfig() {
    return this.value;
  }
  set valueConfig(r) {
    this.value = Number(r) || 0;
  }
  get maxConfig() {
    return this.max;
  }
  set maxConfig(r) {
    this.max = Number(r) || 100;
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "linear";
  }
  get colorConfig() {
    return this.color;
  }
  set colorConfig(r) {
    this.color = r || "primary";
  }
  get showLabelConfig() {
    return this.showLabel;
  }
  set showLabelConfig(r) {
    this.showLabel = !!r;
  }
  get stripedConfig() {
    return this.striped;
  }
  set stripedConfig(r) {
    this.striped = !!r;
  }
  get sizeConfig() {
    return this.size;
  }
  set sizeConfig(r) {
    this.size = Math.max(4, Number(r) || 12);
  }
  handleComplete() {
    this.dispatchEvent(
      new CustomEvent("on-complete", {
        detail: { value: this.value, max: this.max },
        bubbles: !0,
        composed: !0
      })
    );
  }
  updated() {
    const r = (Number(this.value) || 0) >= (Number(this.max) || 100);
    r && !this._completed ? (this._completed = !0, this.handleComplete()) : !r && this._completed && (this._completed = !1);
  }
  renderCircular(r, e) {
    const t = Math.max(this.size, 40), n = Math.max(4, Math.round(t * 0.11)), s = (t - n) / 2, l = 2 * Math.PI * s, u = l * (1 - r / 100);
    return Pe`
      <div class="circular color-${this.color}" style="width:${t}px;height:${t}px;">
        <svg width=${t} height=${t} viewBox="0 0 ${t} ${t}">
          <circle class="track-ring" cx=${t / 2} cy=${t / 2} r=${s} fill="none" stroke-width=${n}></circle>
          <circle
            class="value-ring"
            cx=${t / 2}
            cy=${t / 2}
            r=${s}
            fill="none"
            stroke-width=${n}
            stroke-linecap="round"
            stroke-dasharray=${l}
            stroke-dashoffset=${u}
          ></circle>
        </svg>
        ${this.showLabel ? Pe`<span class="c-label" style="font-size:${Math.max(10, Math.round(t * 0.22))}px;">${e}</span>` : ""}
      </div>
    `;
  }
  render() {
    const r = mt(this.value, this.max), e = `${Math.round(r)}%`;
    if (this.variant === "circular")
      return this.renderCircular(r, e);
    const t = Math.max(4, this.size);
    return Pe`
      <div class="linear color-${this.color}">
        ${this.showLabel ? Pe`<div class="linear-label">${e}</div>` : ""}
        <div
          class="track"
          style="height:${t}px;"
          role="progressbar"
          aria-valuenow=${Math.round(r)}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="bar ${this.striped ? "striped" : ""}" style="width:${r}%;"></div>
        </div>
      </div>
    `;
  }
};
k.styles = qt`
    :host {
      display: block;
      width: 100%;
      --pr-primary: var(--uiv-primary-color, #6366f1);
      --pr-track: var(--uiv-bg-tertiary, rgba(99, 102, 241, 0.14));
      --pr-text: var(--uiv-text-color, #1f2937);
      --pr-muted: var(--uiv-text-muted, #4b5563);
    }

    .color-primary { --pr-accent: var(--uiv-primary-color, #6366f1); }
    .color-success { --pr-accent: var(--uiv-color-success, #10b981); }
    .color-warning { --pr-accent: var(--uiv-color-warning, #f59e0b); }
    .color-error { --pr-accent: var(--uiv-color-danger, #ef4444); }

    /* Linear */
    .linear-label {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 6px;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--pr-muted);
    }
    .track {
      width: 100%;
      border-radius: 999px;
      background: var(--pr-track);
      overflow: hidden;
    }
    .bar {
      height: 100%;
      border-radius: 999px;
      background: var(--pr-accent);
      transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .bar.striped {
      background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.25) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.25) 75%,
        transparent 75%,
        transparent
      );
      background-size: 1rem 1rem;
      animation: stripes 1s linear infinite;
    }
    @keyframes stripes {
      from { background-position: 1rem 0; }
      to { background-position: 0 0; }
    }

    /* Circular */
    .circular {
      display: inline-flex;
      position: relative;
      align-items: center;
      justify-content: center;
    }
    .circular svg { transform: rotate(-90deg); }
    .circular .track-ring { stroke: var(--pr-track); }
    .circular .value-ring {
      stroke: var(--pr-accent);
      transition: stroke-dashoffset 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .circular .c-label {
      position: absolute;
      font-weight: 600;
      color: var(--pr-text);
    }
  `;
R([
  X({ type: Number })
], k.prototype, "value", 2);
R([
  X({ type: Number })
], k.prototype, "max", 2);
R([
  X({ type: String })
], k.prototype, "variant", 2);
R([
  X({ type: String })
], k.prototype, "color", 2);
R([
  X({ type: Boolean, attribute: "show-label" })
], k.prototype, "showLabel", 2);
R([
  X({ type: Boolean })
], k.prototype, "striped", 2);
R([
  X({ type: Number })
], k.prototype, "size", 2);
R([
  G({
    attributeType: L.PROPERTY,
    uiComponentType: D.NUMBER_INPUT,
    displayLabel: "Value (0-100)",
    fieldMappings: "value"
  })
], k.prototype, "valueConfig", 1);
R([
  G({
    attributeType: L.PROPERTY,
    uiComponentType: D.NUMBER_INPUT,
    displayLabel: "Max",
    fieldMappings: "max"
  })
], k.prototype, "maxConfig", 1);
R([
  G({
    attributeType: L.PROPERTY,
    uiComponentType: D.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Linear", value: "linear" },
      { label: "Circular", value: "circular" }
    ]
  })
], k.prototype, "variantConfig", 1);
R([
  G({
    attributeType: L.PROPERTY,
    uiComponentType: D.DROPDOWN,
    displayLabel: "Color",
    fieldMappings: "color",
    optionItems: [
      { label: "Primary", value: "primary" },
      { label: "Success", value: "success" },
      { label: "Warning", value: "warning" },
      { label: "Error", value: "error" }
    ]
  })
], k.prototype, "colorConfig", 1);
R([
  G({
    attributeType: L.PROPERTY,
    uiComponentType: D.CHECKBOX,
    displayLabel: "Show % Label",
    fieldMappings: "showLabel"
  })
], k.prototype, "showLabelConfig", 1);
R([
  G({
    attributeType: L.PROPERTY,
    uiComponentType: D.CHECKBOX,
    displayLabel: "Striped",
    fieldMappings: "striped"
  })
], k.prototype, "stripedConfig", 1);
R([
  G({
    attributeType: L.PROPERTY,
    uiComponentType: D.NUMBER_INPUT,
    displayLabel: "Bar Height / Ring Size (px)",
    fieldMappings: "size"
  })
], k.prototype, "sizeConfig", 1);
R([
  G({
    attributeType: L.EVENT,
    displayLabel: "On Complete",
    eventTrigger: "on-complete"
  })
], k.prototype, "handleComplete", 1);
k = R([
  Bt({
    name: "zero-progress",
    version: "1.0.0",
    title: "Progress",
    elementSelector: "zero-progress",
    group: "Feedback",
    iconName: "progress-icon.png"
  }),
  Wt()
], k);
export {
  k as ZeroProgress,
  Be as studioTemplate
};
