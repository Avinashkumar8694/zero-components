var oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var fe;
(function(E) {
  (function(c) {
    var l = typeof globalThis == "object" ? globalThis : typeof oe == "object" ? oe : typeof self == "object" ? self : typeof this == "object" ? this : b(), w = M(E);
    typeof l.Reflect < "u" && (w = M(l.Reflect, w)), c(w, l), typeof l.Reflect > "u" && (l.Reflect = E);
    function M(P, S) {
      return function(O, j) {
        Object.defineProperty(P, O, { configurable: !0, writable: !0, value: j }), S && S(O, j);
      };
    }
    function R() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function p() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function b() {
      return R() || p();
    }
  })(function(c, l) {
    var w = Object.prototype.hasOwnProperty, M = typeof Symbol == "function", R = M && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", p = M && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", P = { __proto__: [] } instanceof Array, S = !b && !P, O = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return W(/* @__PURE__ */ Object.create(null));
      } : P ? function() {
        return W({ __proto__: null });
      } : function() {
        return W({});
      },
      has: S ? function(e, t) {
        return w.call(e, t);
      } : function(e, t) {
        return t in e;
      },
      get: S ? function(e, t) {
        return w.call(e, t) ? e[t] : void 0;
      } : function(e, t) {
        return e[t];
      }
    }, j = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ie(), $ = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ce(), z = typeof WeakMap == "function" ? WeakMap : je(), I = M ? Symbol.for("@reflect-metadata:registry") : void 0, D = Te(), H = Pe(D);
    function ue(e, t, r, n) {
      if (u(r)) {
        if (!Y(e))
          throw new TypeError();
        if (!K(t))
          throw new TypeError();
        return me(e, t);
      } else {
        if (!Y(e))
          throw new TypeError();
        if (!g(t))
          throw new TypeError();
        if (!g(n) && !u(n) && !C(n))
          throw new TypeError();
        return C(n) && (n = void 0), r = T(r), _e(e, t, r, n);
      }
    }
    c("decorate", ue);
    function ce(e, t) {
      function r(n, s) {
        if (!g(n))
          throw new TypeError();
        if (!u(s) && !Ee(s))
          throw new TypeError();
        B(e, t, n, s);
      }
      return r;
    }
    c("metadata", ce);
    function le(e, t, r, n) {
      if (!g(r))
        throw new TypeError();
      return u(n) || (n = T(n)), B(e, t, r, n);
    }
    c("defineMetadata", le);
    function de(e, t, r) {
      if (!g(t))
        throw new TypeError();
      return u(r) || (r = T(r)), L(e, t, r);
    }
    c("hasMetadata", de);
    function he(e, t, r) {
      if (!g(t))
        throw new TypeError();
      return u(r) || (r = T(r)), A(e, t, r);
    }
    c("hasOwnMetadata", he);
    function ye(e, t, r) {
      if (!g(t))
        throw new TypeError();
      return u(r) || (r = T(r)), V(e, t, r);
    }
    c("getMetadata", ye);
    function ve(e, t, r) {
      if (!g(t))
        throw new TypeError();
      return u(r) || (r = T(r)), N(e, t, r);
    }
    c("getOwnMetadata", ve);
    function we(e, t) {
      if (!g(e))
        throw new TypeError();
      return u(t) || (t = T(t)), q(e, t);
    }
    c("getMetadataKeys", we);
    function pe(e, t) {
      if (!g(e))
        throw new TypeError();
      return u(t) || (t = T(t)), J(e, t);
    }
    c("getOwnMetadataKeys", pe);
    function ge(e, t, r) {
      if (!g(t))
        throw new TypeError();
      if (u(r) || (r = T(r)), !g(t))
        throw new TypeError();
      u(r) || (r = T(r));
      var n = Z(
        t,
        r,
        /*Create*/
        !1
      );
      return u(n) ? !1 : n.OrdinaryDeleteMetadata(e, t, r);
    }
    c("deleteMetadata", ge);
    function me(e, t) {
      for (var r = e.length - 1; r >= 0; --r) {
        var n = e[r], s = n(t);
        if (!u(s) && !C(s)) {
          if (!K(s))
            throw new TypeError();
          t = s;
        }
      }
      return t;
    }
    function _e(e, t, r, n) {
      for (var s = e.length - 1; s >= 0; --s) {
        var _ = e[s], m = _(t, r, n);
        if (!u(m) && !C(m)) {
          if (!g(m))
            throw new TypeError();
          n = m;
        }
      }
      return n;
    }
    function L(e, t, r) {
      var n = A(e, t, r);
      if (n)
        return !0;
      var s = U(t);
      return C(s) ? !1 : L(e, s, r);
    }
    function A(e, t, r) {
      var n = Z(
        t,
        r,
        /*Create*/
        !1
      );
      return u(n) ? !1 : X(n.OrdinaryHasOwnMetadata(e, t, r));
    }
    function V(e, t, r) {
      var n = A(e, t, r);
      if (n)
        return N(e, t, r);
      var s = U(t);
      if (!C(s))
        return V(e, s, r);
    }
    function N(e, t, r) {
      var n = Z(
        t,
        r,
        /*Create*/
        !1
      );
      if (!u(n))
        return n.OrdinaryGetOwnMetadata(e, t, r);
    }
    function B(e, t, r, n) {
      var s = Z(
        r,
        n,
        /*Create*/
        !0
      );
      s.OrdinaryDefineOwnMetadata(e, t, r, n);
    }
    function q(e, t) {
      var r = J(e, t), n = U(e);
      if (n === null)
        return r;
      var s = q(n, t);
      if (s.length <= 0)
        return r;
      if (r.length <= 0)
        return s;
      for (var _ = new $(), m = [], d = 0, i = r; d < i.length; d++) {
        var a = i[d], o = _.has(a);
        o || (_.add(a), m.push(a));
      }
      for (var f = 0, h = s; f < h.length; f++) {
        var a = h[f], o = _.has(a);
        o || (_.add(a), m.push(a));
      }
      return m;
    }
    function J(e, t) {
      var r = Z(
        e,
        t,
        /*create*/
        !1
      );
      return r ? r.OrdinaryOwnMetadataKeys(e, t) : [];
    }
    function Q(e) {
      if (e === null)
        return 1;
      switch (typeof e) {
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
          return e === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function u(e) {
      return e === void 0;
    }
    function C(e) {
      return e === null;
    }
    function Me(e) {
      return typeof e == "symbol";
    }
    function g(e) {
      return typeof e == "object" ? e !== null : typeof e == "function";
    }
    function be(e, t) {
      switch (Q(e)) {
        case 0:
          return e;
        case 1:
          return e;
        case 2:
          return e;
        case 3:
          return e;
        case 4:
          return e;
        case 5:
          return e;
      }
      var r = "string", n = ee(e, R);
      if (n !== void 0) {
        var s = n.call(e, r);
        if (g(s))
          throw new TypeError();
        return s;
      }
      return Oe(e);
    }
    function Oe(e, t) {
      var r, n;
      {
        var s = e.toString;
        if (G(s)) {
          var n = s.call(e);
          if (!g(n))
            return n;
        }
        var r = e.valueOf;
        if (G(r)) {
          var n = r.call(e);
          if (!g(n))
            return n;
        }
      }
      throw new TypeError();
    }
    function X(e) {
      return !!e;
    }
    function ke(e) {
      return "" + e;
    }
    function T(e) {
      var t = be(e);
      return Me(t) ? t : ke(t);
    }
    function Y(e) {
      return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
    }
    function G(e) {
      return typeof e == "function";
    }
    function K(e) {
      return typeof e == "function";
    }
    function Ee(e) {
      switch (Q(e)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function F(e, t) {
      return e === t || e !== e && t !== t;
    }
    function ee(e, t) {
      var r = e[t];
      if (r != null) {
        if (!G(r))
          throw new TypeError();
        return r;
      }
    }
    function te(e) {
      var t = ee(e, p);
      if (!G(t))
        throw new TypeError();
      var r = t.call(e);
      if (!g(r))
        throw new TypeError();
      return r;
    }
    function re(e) {
      return e.value;
    }
    function ne(e) {
      var t = e.next();
      return t.done ? !1 : t;
    }
    function ie(e) {
      var t = e.return;
      t && t.call(e);
    }
    function U(e) {
      var t = Object.getPrototypeOf(e);
      if (typeof e != "function" || e === j || t !== j)
        return t;
      var r = e.prototype, n = r && Object.getPrototypeOf(r);
      if (n == null || n === Object.prototype)
        return t;
      var s = n.constructor;
      return typeof s != "function" || s === e ? t : s;
    }
    function Re() {
      var e;
      !u(I) && typeof l.Reflect < "u" && !(I in l.Reflect) && typeof l.Reflect.defineMetadata == "function" && (e = Se(l.Reflect));
      var t, r, n, s = new z(), _ = {
        registerProvider: m,
        getProvider: i,
        setProvider: o
      };
      return _;
      function m(f) {
        if (!Object.isExtensible(_))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case e === f:
            break;
          case u(t):
            t = f;
            break;
          case t === f:
            break;
          case u(r):
            r = f;
            break;
          case r === f:
            break;
          default:
            n === void 0 && (n = new $()), n.add(f);
            break;
        }
      }
      function d(f, h) {
        if (!u(t)) {
          if (t.isProviderFor(f, h))
            return t;
          if (!u(r)) {
            if (r.isProviderFor(f, h))
              return t;
            if (!u(n))
              for (var y = te(n); ; ) {
                var v = ne(y);
                if (!v)
                  return;
                var k = re(v);
                if (k.isProviderFor(f, h))
                  return ie(y), k;
              }
          }
        }
        if (!u(e) && e.isProviderFor(f, h))
          return e;
      }
      function i(f, h) {
        var y = s.get(f), v;
        return u(y) || (v = y.get(h)), u(v) && (v = d(f, h), u(v) || (u(y) && (y = new x(), s.set(f, y)), y.set(h, v))), v;
      }
      function a(f) {
        if (u(f))
          throw new TypeError();
        return t === f || r === f || !u(n) && n.has(f);
      }
      function o(f, h, y) {
        if (!a(y))
          throw new Error("Metadata provider not registered.");
        var v = i(f, h);
        if (v !== y) {
          if (!u(v))
            return !1;
          var k = s.get(f);
          u(k) && (k = new x(), s.set(f, k)), k.set(h, y);
        }
        return !0;
      }
    }
    function Te() {
      var e;
      return !u(I) && g(l.Reflect) && Object.isExtensible(l.Reflect) && (e = l.Reflect[I]), u(e) && (e = Re()), !u(I) && g(l.Reflect) && Object.isExtensible(l.Reflect) && Object.defineProperty(l.Reflect, I, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: e
      }), e;
    }
    function Pe(e) {
      var t = new z(), r = {
        isProviderFor: function(a, o) {
          var f = t.get(a);
          return u(f) ? !1 : f.has(o);
        },
        OrdinaryDefineOwnMetadata: m,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: _,
        OrdinaryOwnMetadataKeys: d,
        OrdinaryDeleteMetadata: i
      };
      return D.registerProvider(r), r;
      function n(a, o, f) {
        var h = t.get(a), y = !1;
        if (u(h)) {
          if (!f)
            return;
          h = new x(), t.set(a, h), y = !0;
        }
        var v = h.get(o);
        if (u(v)) {
          if (!f)
            return;
          if (v = new x(), h.set(o, v), !e.setProvider(a, o, r))
            throw h.delete(o), y && t.delete(a), new Error("Wrong provider for target.");
        }
        return v;
      }
      function s(a, o, f) {
        var h = n(
          o,
          f,
          /*Create*/
          !1
        );
        return u(h) ? !1 : X(h.has(a));
      }
      function _(a, o, f) {
        var h = n(
          o,
          f,
          /*Create*/
          !1
        );
        if (!u(h))
          return h.get(a);
      }
      function m(a, o, f, h) {
        var y = n(
          f,
          h,
          /*Create*/
          !0
        );
        y.set(a, o);
      }
      function d(a, o) {
        var f = [], h = n(
          a,
          o,
          /*Create*/
          !1
        );
        if (u(h))
          return f;
        for (var y = h.keys(), v = te(y), k = 0; ; ) {
          var ae = ne(v);
          if (!ae)
            return f.length = k, f;
          var xe = re(ae);
          try {
            f[k] = xe;
          } catch (Ze) {
            try {
              ie(v);
            } finally {
              throw Ze;
            }
          }
          k++;
        }
      }
      function i(a, o, f) {
        var h = n(
          o,
          f,
          /*Create*/
          !1
        );
        if (u(h) || !h.delete(a))
          return !1;
        if (h.size === 0) {
          var y = t.get(o);
          u(y) || (y.delete(f), y.size === 0 && t.delete(y));
        }
        return !0;
      }
    }
    function Se(e) {
      var t = e.defineMetadata, r = e.hasOwnMetadata, n = e.getOwnMetadata, s = e.getOwnMetadataKeys, _ = e.deleteMetadata, m = new z(), d = {
        isProviderFor: function(i, a) {
          var o = m.get(i);
          return !u(o) && o.has(a) ? !0 : s(i, a).length ? (u(o) && (o = new $(), m.set(i, o)), o.add(a), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: t,
        OrdinaryHasOwnMetadata: r,
        OrdinaryGetOwnMetadata: n,
        OrdinaryOwnMetadataKeys: s,
        OrdinaryDeleteMetadata: _
      };
      return d;
    }
    function Z(e, t, r) {
      var n = D.getProvider(e, t);
      if (!u(n))
        return n;
      if (r) {
        if (D.setProvider(e, t, H))
          return H;
        throw new Error("Illegal state.");
      }
    }
    function Ie() {
      var e = {}, t = [], r = (
        /** @class */
        function() {
          function d(i, a, o) {
            this._index = 0, this._keys = i, this._values = a, this._selector = o;
          }
          return d.prototype["@@iterator"] = function() {
            return this;
          }, d.prototype[p] = function() {
            return this;
          }, d.prototype.next = function() {
            var i = this._index;
            if (i >= 0 && i < this._keys.length) {
              var a = this._selector(this._keys[i], this._values[i]);
              return i + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: a, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, d.prototype.throw = function(i) {
            throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), i;
          }, d.prototype.return = function(i) {
            return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: i, done: !0 };
          }, d;
        }()
      ), n = (
        /** @class */
        function() {
          function d() {
            this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
          }
          return Object.defineProperty(d.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), d.prototype.has = function(i) {
            return this._find(
              i,
              /*insert*/
              !1
            ) >= 0;
          }, d.prototype.get = function(i) {
            var a = this._find(
              i,
              /*insert*/
              !1
            );
            return a >= 0 ? this._values[a] : void 0;
          }, d.prototype.set = function(i, a) {
            var o = this._find(
              i,
              /*insert*/
              !0
            );
            return this._values[o] = a, this;
          }, d.prototype.delete = function(i) {
            var a = this._find(
              i,
              /*insert*/
              !1
            );
            if (a >= 0) {
              for (var o = this._keys.length, f = a + 1; f < o; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, F(i, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
            }
            return !1;
          }, d.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
          }, d.prototype.keys = function() {
            return new r(this._keys, this._values, s);
          }, d.prototype.values = function() {
            return new r(this._keys, this._values, _);
          }, d.prototype.entries = function() {
            return new r(this._keys, this._values, m);
          }, d.prototype["@@iterator"] = function() {
            return this.entries();
          }, d.prototype[p] = function() {
            return this.entries();
          }, d.prototype._find = function(i, a) {
            if (!F(this._cacheKey, i)) {
              this._cacheIndex = -1;
              for (var o = 0; o < this._keys.length; o++)
                if (F(this._keys[o], i)) {
                  this._cacheIndex = o;
                  break;
                }
            }
            return this._cacheIndex < 0 && a && (this._cacheIndex = this._keys.length, this._keys.push(i), this._values.push(void 0)), this._cacheIndex;
          }, d;
        }()
      );
      return n;
      function s(d, i) {
        return d;
      }
      function _(d, i) {
        return i;
      }
      function m(d, i) {
        return [d, i];
      }
    }
    function Ce() {
      var e = (
        /** @class */
        function() {
          function t() {
            this._map = new x();
          }
          return Object.defineProperty(t.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.has = function(r) {
            return this._map.has(r);
          }, t.prototype.add = function(r) {
            return this._map.set(r, r), this;
          }, t.prototype.delete = function(r) {
            return this._map.delete(r);
          }, t.prototype.clear = function() {
            this._map.clear();
          }, t.prototype.keys = function() {
            return this._map.keys();
          }, t.prototype.values = function() {
            return this._map.keys();
          }, t.prototype.entries = function() {
            return this._map.entries();
          }, t.prototype["@@iterator"] = function() {
            return this.keys();
          }, t.prototype[p] = function() {
            return this.keys();
          }, t;
        }()
      );
      return e;
    }
    function je() {
      var e = 16, t = O.create(), r = n();
      return (
        /** @class */
        function() {
          function i() {
            this._key = n();
          }
          return i.prototype.has = function(a) {
            var o = s(
              a,
              /*create*/
              !1
            );
            return o !== void 0 ? O.has(o, this._key) : !1;
          }, i.prototype.get = function(a) {
            var o = s(
              a,
              /*create*/
              !1
            );
            return o !== void 0 ? O.get(o, this._key) : void 0;
          }, i.prototype.set = function(a, o) {
            var f = s(
              a,
              /*create*/
              !0
            );
            return f[this._key] = o, this;
          }, i.prototype.delete = function(a) {
            var o = s(
              a,
              /*create*/
              !1
            );
            return o !== void 0 ? delete o[this._key] : !1;
          }, i.prototype.clear = function() {
            this._key = n();
          }, i;
        }()
      );
      function n() {
        var i;
        do
          i = "@@WeakMap@@" + d();
        while (O.has(t, i));
        return t[i] = !0, i;
      }
      function s(i, a) {
        if (!w.call(i, r)) {
          if (!a)
            return;
          Object.defineProperty(i, r, { value: O.create() });
        }
        return i[r];
      }
      function _(i, a) {
        for (var o = 0; o < a; ++o)
          i[o] = Math.random() * 255 | 0;
        return i;
      }
      function m(i) {
        if (typeof Uint8Array == "function") {
          var a = new Uint8Array(i);
          return typeof crypto < "u" ? crypto.getRandomValues(a) : typeof msCrypto < "u" ? msCrypto.getRandomValues(a) : _(a, i), a;
        }
        return _(new Array(i), i);
      }
      function d() {
        var i = m(e);
        i[6] = i[6] & 79 | 64, i[8] = i[8] & 191 | 128;
        for (var a = "", o = 0; o < e; ++o) {
          var f = i[o];
          (o === 4 || o === 6 || o === 8) && (a += "-"), f < 16 && (a += "0"), a += f.toString(16).toLowerCase();
        }
        return a;
      }
    }
    function W(e) {
      return e.__ = void 0, delete e.__, e;
    }
  });
})(fe || (fe = {}));
if (typeof window < "u" && !window.Reflect)
  window.Reflect = Reflect;
else if (typeof window < "u" && window.Reflect !== Reflect) {
  const E = window.Reflect;
  Object.assign(Reflect, E), window.Reflect = Reflect;
}
class se {
  constructor() {
    var c, l;
    this.modules = ((c = window.zero) == null ? void 0 : c.modules) || {}, this.components = ((l = window.zero) == null ? void 0 : l.components) || {}, this.attachListeners();
  }
  registerPlugins(c, l) {
    !c || !l || (this.modules[c] = l, typeof l.onInit == "function" && l.onInit(), console.log(`[Zero] Plugin registered: modules['${c}']`));
  }
  registerElement(c, l, w = 0) {
    if (!c || !l) {
      console.warn(`[Zero] Cannot register element: name or constructor missing (${c})`);
      return;
    }
    const M = l.prototype, R = Reflect.getMetadata("ZeroAttribute", M) || [], p = Reflect.getMetadata("ZeroComponent", l) || Reflect.getMetadata("ZeroComponent", M);
    if (console.log(`[Zero] Registry: Attempting registration for '${c}' (Retry: ${w})`), console.log(`[Zero] Registry: Found ${R.length} attributes.`), !p)
      if (w < 5) {
        console.log(`[Zero] Registry: Metadata not yet available for '${c}', retrying in 50ms...`), setTimeout(() => this.registerElement(c, l, w + 1), 50);
        return;
      } else
        console.warn(`[Zero] Registry: Failed to find component metadata for '${c}' after 5 retries.`);
    this.components[c] = {
      class: l,
      inputs: R.filter((b) => !b.eventTrigger).reduce((b, { fieldMappings: P, ...S }) => {
        const O = P || S.name;
        return O && (b[O] = { ...S }), b;
      }, {}),
      outputs: {
        events: R.filter((b) => b.eventTrigger).map((b) => b.eventTrigger)
      },
      metadata: p || {}
    }, p != null && p.selector && p.selector !== c && (this.components[p.selector] = this.components[c]), console.log(`[Zero] Registry: SUCCESS. Registered '${c}' and '${(p == null ? void 0 : p.selector) || ""}' fallback.`);
  }
  attachListeners() {
    console.log("[Zero] Registry: Event listener initialized for (zero-element:component-load)"), window.addEventListener("zero-element:component-load", (c) => {
      var p;
      const l = (p = c == null ? void 0 : c.detail) == null ? void 0 : p.element;
      if (console.log("[Zero] Registry: RECEIVED zero-element:component-load event", l), !l || !l.selector) return;
      const w = `${l.selector}-${l.version}`;
      let M = 0;
      const R = () => {
        const b = customElements.get(w);
        b ? (console.log(`[Zero] Registry: Custom element '${w}' found. Starting registration.`), this.registerElement(w, b)) : M < 10 ? (M++, M === 1 && console.log(`[Zero] Registry: Custom element '${w}' not found yet, starting catchup poll...`), setTimeout(R, 100)) : console.error(`[Zero] Registry: TIMEOUT. Could not find custom element '${w}' in registry.`);
      };
      R();
    }), window.addEventListener("element-connected", (c) => {
      var w;
      const l = (w = c == null ? void 0 : c.detail) == null ? void 0 : w.element;
      if (l != null && l.localName) {
        const M = customElements.get(l.localName);
        M && this.registerElement(l.localName, M);
      }
    });
  }
}
if (!window.zero || !(window.zero instanceof se)) {
  const E = window.zero || {}, c = new se();
  E.modules && Object.assign(c.modules, E.modules), E.components && Object.assign(c.components, E.components), window.zero = c, window.ro = c;
}
