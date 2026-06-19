var se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
(function(x) {
  (function(l) {
    var f = typeof globalThis == "object" ? globalThis : typeof se == "object" ? se : typeof self == "object" ? self : typeof this == "object" ? this : O(), v = m(x);
    typeof f.Reflect < "u" && (v = m(f.Reflect, v)), l(v, f), typeof f.Reflect > "u" && (f.Reflect = x);
    function m(_, I) {
      return function(E, T) {
        Object.defineProperty(_, E, { configurable: !0, writable: !0, value: T }), I && I(E, T);
      };
    }
    function k() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function b() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function O() {
      return k() || b();
    }
  })(function(l, f) {
    var v = Object.prototype.hasOwnProperty, m = typeof Symbol == "function", k = m && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", b = m && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", O = typeof Object.create == "function", _ = { __proto__: [] } instanceof Array, I = !O && !_, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: O ? function() {
        return W(/* @__PURE__ */ Object.create(null));
      } : _ ? function() {
        return W({ __proto__: null });
      } : function() {
        return W({});
      },
      has: I ? function(e, t) {
        return v.call(e, t);
      } : function(e, t) {
        return t in e;
      },
      get: I ? function(e, t) {
        return v.call(e, t) ? e[t] : void 0;
      } : function(e, t) {
        return e[t];
      }
    }, T = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ie(), z = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Se(), A = typeof WeakMap == "function" ? WeakMap : je(), S = m ? Symbol.for("@reflect-metadata:registry") : void 0, $ = Te(), H = Ce($);
    function ue(e, t, r, n) {
      if (c(r)) {
        if (!K(e))
          throw new TypeError();
        if (!ee(t))
          throw new TypeError();
        return me(e, t);
      } else {
        if (!K(e))
          throw new TypeError();
        if (!p(t))
          throw new TypeError();
        if (!p(n) && !c(n) && !j(n))
          throw new TypeError();
        return j(n) && (n = void 0), r = C(r), Me(e, t, r, n);
      }
    }
    l("decorate", ue);
    function le(e, t) {
      function r(n, u) {
        if (!p(n))
          throw new TypeError();
        if (!c(u) && !Re(u))
          throw new TypeError();
        q(e, t, n, u);
      }
      return r;
    }
    l("metadata", le);
    function ce(e, t, r, n) {
      if (!p(r))
        throw new TypeError();
      return c(n) || (n = C(n)), q(e, t, r, n);
    }
    l("defineMetadata", ce);
    function de(e, t, r) {
      if (!p(t))
        throw new TypeError();
      return c(r) || (r = C(r)), L(e, t, r);
    }
    l("hasMetadata", de);
    function he(e, t, r) {
      if (!p(t))
        throw new TypeError();
      return c(r) || (r = C(r)), F(e, t, r);
    }
    l("hasOwnMetadata", he);
    function ye(e, t, r) {
      if (!p(t))
        throw new TypeError();
      return c(r) || (r = C(r)), N(e, t, r);
    }
    l("getMetadata", ye);
    function ve(e, t, r) {
      if (!p(t))
        throw new TypeError();
      return c(r) || (r = C(r)), B(e, t, r);
    }
    l("getOwnMetadata", ve);
    function we(e, t) {
      if (!p(e))
        throw new TypeError();
      return c(t) || (t = C(t)), J(e, t);
    }
    l("getMetadataKeys", we);
    function pe(e, t) {
      if (!p(e))
        throw new TypeError();
      return c(t) || (t = C(t)), Q(e, t);
    }
    l("getOwnMetadataKeys", pe);
    function ge(e, t, r) {
      if (!p(t))
        throw new TypeError();
      if (c(r) || (r = C(r)), !p(t))
        throw new TypeError();
      c(r) || (r = C(r));
      var n = Z(
        t,
        r,
        /*Create*/
        !1
      );
      return c(n) ? !1 : n.OrdinaryDeleteMetadata(e, t, r);
    }
    l("deleteMetadata", ge);
    function me(e, t) {
      for (var r = e.length - 1; r >= 0; --r) {
        var n = e[r], u = n(t);
        if (!c(u) && !j(u)) {
          if (!ee(u))
            throw new TypeError();
          t = u;
        }
      }
      return t;
    }
    function Me(e, t, r, n) {
      for (var u = e.length - 1; u >= 0; --u) {
        var M = e[u], g = M(t, r, n);
        if (!c(g) && !j(g)) {
          if (!p(g))
            throw new TypeError();
          n = g;
        }
      }
      return n;
    }
    function L(e, t, r) {
      var n = F(e, t, r);
      if (n)
        return !0;
      var u = V(t);
      return j(u) ? !1 : L(e, u, r);
    }
    function F(e, t, r) {
      var n = Z(
        t,
        r,
        /*Create*/
        !1
      );
      return c(n) ? !1 : Y(n.OrdinaryHasOwnMetadata(e, t, r));
    }
    function N(e, t, r) {
      var n = F(e, t, r);
      if (n)
        return B(e, t, r);
      var u = V(t);
      if (!j(u))
        return N(e, u, r);
    }
    function B(e, t, r) {
      var n = Z(
        t,
        r,
        /*Create*/
        !1
      );
      if (!c(n))
        return n.OrdinaryGetOwnMetadata(e, t, r);
    }
    function q(e, t, r, n) {
      var u = Z(
        r,
        n,
        /*Create*/
        !0
      );
      u.OrdinaryDefineOwnMetadata(e, t, r, n);
    }
    function J(e, t) {
      var r = Q(e, t), n = V(e);
      if (n === null)
        return r;
      var u = J(n, t);
      if (u.length <= 0)
        return r;
      if (r.length <= 0)
        return u;
      for (var M = new z(), g = [], d = 0, i = r; d < i.length; d++) {
        var a = i[d], o = M.has(a);
        o || (M.add(a), g.push(a));
      }
      for (var s = 0, h = u; s < h.length; s++) {
        var a = h[s], o = M.has(a);
        o || (M.add(a), g.push(a));
      }
      return g;
    }
    function Q(e, t) {
      var r = Z(
        e,
        t,
        /*create*/
        !1
      );
      return r ? r.OrdinaryOwnMetadataKeys(e, t) : [];
    }
    function X(e) {
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
    function c(e) {
      return e === void 0;
    }
    function j(e) {
      return e === null;
    }
    function _e(e) {
      return typeof e == "symbol";
    }
    function p(e) {
      return typeof e == "object" ? e !== null : typeof e == "function";
    }
    function be(e, t) {
      switch (X(e)) {
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
      var r = "string", n = te(e, k);
      if (n !== void 0) {
        var u = n.call(e, r);
        if (p(u))
          throw new TypeError();
        return u;
      }
      return Oe(e);
    }
    function Oe(e, t) {
      var r, n;
      {
        var u = e.toString;
        if (D(u)) {
          var n = u.call(e);
          if (!p(n))
            return n;
        }
        var r = e.valueOf;
        if (D(r)) {
          var n = r.call(e);
          if (!p(n))
            return n;
        }
      }
      throw new TypeError();
    }
    function Y(e) {
      return !!e;
    }
    function Ee(e) {
      return "" + e;
    }
    function C(e) {
      var t = be(e);
      return _e(t) ? t : Ee(t);
    }
    function K(e) {
      return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
    }
    function D(e) {
      return typeof e == "function";
    }
    function ee(e) {
      return typeof e == "function";
    }
    function Re(e) {
      switch (X(e)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function U(e, t) {
      return e === t || e !== e && t !== t;
    }
    function te(e, t) {
      var r = e[t];
      if (r != null) {
        if (!D(r))
          throw new TypeError();
        return r;
      }
    }
    function re(e) {
      var t = te(e, b);
      if (!D(t))
        throw new TypeError();
      var r = t.call(e);
      if (!p(r))
        throw new TypeError();
      return r;
    }
    function ne(e) {
      return e.value;
    }
    function ie(e) {
      var t = e.next();
      return t.done ? !1 : t;
    }
    function ae(e) {
      var t = e.return;
      t && t.call(e);
    }
    function V(e) {
      var t = Object.getPrototypeOf(e);
      if (typeof e != "function" || e === T || t !== T)
        return t;
      var r = e.prototype, n = r && Object.getPrototypeOf(r);
      if (n == null || n === Object.prototype)
        return t;
      var u = n.constructor;
      return typeof u != "function" || u === e ? t : u;
    }
    function ke() {
      var e;
      !c(S) && typeof f.Reflect < "u" && !(S in f.Reflect) && typeof f.Reflect.defineMetadata == "function" && (e = Pe(f.Reflect));
      var t, r, n, u = new A(), M = {
        registerProvider: g,
        getProvider: i,
        setProvider: o
      };
      return M;
      function g(s) {
        if (!Object.isExtensible(M))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case e === s:
            break;
          case c(t):
            t = s;
            break;
          case t === s:
            break;
          case c(r):
            r = s;
            break;
          case r === s:
            break;
          default:
            n === void 0 && (n = new z()), n.add(s);
            break;
        }
      }
      function d(s, h) {
        if (!c(t)) {
          if (t.isProviderFor(s, h))
            return t;
          if (!c(r)) {
            if (r.isProviderFor(s, h))
              return t;
            if (!c(n))
              for (var y = re(n); ; ) {
                var w = ie(y);
                if (!w)
                  return;
                var R = ne(w);
                if (R.isProviderFor(s, h))
                  return ae(y), R;
              }
          }
        }
        if (!c(e) && e.isProviderFor(s, h))
          return e;
      }
      function i(s, h) {
        var y = u.get(s), w;
        return c(y) || (w = y.get(h)), c(w) && (w = d(s, h), c(w) || (c(y) && (y = new P(), u.set(s, y)), y.set(h, w))), w;
      }
      function a(s) {
        if (c(s))
          throw new TypeError();
        return t === s || r === s || !c(n) && n.has(s);
      }
      function o(s, h, y) {
        if (!a(y))
          throw new Error("Metadata provider not registered.");
        var w = i(s, h);
        if (w !== y) {
          if (!c(w))
            return !1;
          var R = u.get(s);
          c(R) && (R = new P(), u.set(s, R)), R.set(h, y);
        }
        return !0;
      }
    }
    function Te() {
      var e;
      return !c(S) && p(f.Reflect) && Object.isExtensible(f.Reflect) && (e = f.Reflect[S]), c(e) && (e = ke()), !c(S) && p(f.Reflect) && Object.isExtensible(f.Reflect) && Object.defineProperty(f.Reflect, S, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: e
      }), e;
    }
    function Ce(e) {
      var t = new A(), r = {
        isProviderFor: function(a, o) {
          var s = t.get(a);
          return c(s) ? !1 : s.has(o);
        },
        OrdinaryDefineOwnMetadata: g,
        OrdinaryHasOwnMetadata: u,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: d,
        OrdinaryDeleteMetadata: i
      };
      return $.registerProvider(r), r;
      function n(a, o, s) {
        var h = t.get(a), y = !1;
        if (c(h)) {
          if (!s)
            return;
          h = new P(), t.set(a, h), y = !0;
        }
        var w = h.get(o);
        if (c(w)) {
          if (!s)
            return;
          if (w = new P(), h.set(o, w), !e.setProvider(a, o, r))
            throw h.delete(o), y && t.delete(a), new Error("Wrong provider for target.");
        }
        return w;
      }
      function u(a, o, s) {
        var h = n(
          o,
          s,
          /*Create*/
          !1
        );
        return c(h) ? !1 : Y(h.has(a));
      }
      function M(a, o, s) {
        var h = n(
          o,
          s,
          /*Create*/
          !1
        );
        if (!c(h))
          return h.get(a);
      }
      function g(a, o, s, h) {
        var y = n(
          s,
          h,
          /*Create*/
          !0
        );
        y.set(a, o);
      }
      function d(a, o) {
        var s = [], h = n(
          a,
          o,
          /*Create*/
          !1
        );
        if (c(h))
          return s;
        for (var y = h.keys(), w = re(y), R = 0; ; ) {
          var oe = ie(w);
          if (!oe)
            return s.length = R, s;
          var xe = ne(oe);
          try {
            s[R] = xe;
          } catch (Ze) {
            try {
              ae(w);
            } finally {
              throw Ze;
            }
          }
          R++;
        }
      }
      function i(a, o, s) {
        var h = n(
          o,
          s,
          /*Create*/
          !1
        );
        if (c(h) || !h.delete(a))
          return !1;
        if (h.size === 0) {
          var y = t.get(o);
          c(y) || (y.delete(s), y.size === 0 && t.delete(y));
        }
        return !0;
      }
    }
    function Pe(e) {
      var t = e.defineMetadata, r = e.hasOwnMetadata, n = e.getOwnMetadata, u = e.getOwnMetadataKeys, M = e.deleteMetadata, g = new A(), d = {
        isProviderFor: function(i, a) {
          var o = g.get(i);
          return !c(o) && o.has(a) ? !0 : u(i, a).length ? (c(o) && (o = new z(), g.set(i, o)), o.add(a), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: t,
        OrdinaryHasOwnMetadata: r,
        OrdinaryGetOwnMetadata: n,
        OrdinaryOwnMetadataKeys: u,
        OrdinaryDeleteMetadata: M
      };
      return d;
    }
    function Z(e, t, r) {
      var n = $.getProvider(e, t);
      if (!c(n))
        return n;
      if (r) {
        if ($.setProvider(e, t, H))
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
          }, d.prototype[b] = function() {
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
              for (var o = this._keys.length, s = a + 1; s < o; s++)
                this._keys[s - 1] = this._keys[s], this._values[s - 1] = this._values[s];
              return this._keys.length--, this._values.length--, U(i, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
            }
            return !1;
          }, d.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
          }, d.prototype.keys = function() {
            return new r(this._keys, this._values, u);
          }, d.prototype.values = function() {
            return new r(this._keys, this._values, M);
          }, d.prototype.entries = function() {
            return new r(this._keys, this._values, g);
          }, d.prototype["@@iterator"] = function() {
            return this.entries();
          }, d.prototype[b] = function() {
            return this.entries();
          }, d.prototype._find = function(i, a) {
            if (!U(this._cacheKey, i)) {
              this._cacheIndex = -1;
              for (var o = 0; o < this._keys.length; o++)
                if (U(this._keys[o], i)) {
                  this._cacheIndex = o;
                  break;
                }
            }
            return this._cacheIndex < 0 && a && (this._cacheIndex = this._keys.length, this._keys.push(i), this._values.push(void 0)), this._cacheIndex;
          }, d;
        }()
      );
      return n;
      function u(d, i) {
        return d;
      }
      function M(d, i) {
        return i;
      }
      function g(d, i) {
        return [d, i];
      }
    }
    function Se() {
      var e = (
        /** @class */
        function() {
          function t() {
            this._map = new P();
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
          }, t.prototype[b] = function() {
            return this.keys();
          }, t;
        }()
      );
      return e;
    }
    function je() {
      var e = 16, t = E.create(), r = n();
      return (
        /** @class */
        function() {
          function i() {
            this._key = n();
          }
          return i.prototype.has = function(a) {
            var o = u(
              a,
              /*create*/
              !1
            );
            return o !== void 0 ? E.has(o, this._key) : !1;
          }, i.prototype.get = function(a) {
            var o = u(
              a,
              /*create*/
              !1
            );
            return o !== void 0 ? E.get(o, this._key) : void 0;
          }, i.prototype.set = function(a, o) {
            var s = u(
              a,
              /*create*/
              !0
            );
            return s[this._key] = o, this;
          }, i.prototype.delete = function(a) {
            var o = u(
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
        while (E.has(t, i));
        return t[i] = !0, i;
      }
      function u(i, a) {
        if (!v.call(i, r)) {
          if (!a)
            return;
          Object.defineProperty(i, r, { value: E.create() });
        }
        return i[r];
      }
      function M(i, a) {
        for (var o = 0; o < a; ++o)
          i[o] = Math.random() * 255 | 0;
        return i;
      }
      function g(i) {
        if (typeof Uint8Array == "function") {
          var a = new Uint8Array(i);
          return typeof crypto < "u" ? crypto.getRandomValues(a) : typeof msCrypto < "u" ? msCrypto.getRandomValues(a) : M(a, i), a;
        }
        return M(new Array(i), i);
      }
      function d() {
        var i = g(e);
        i[6] = i[6] & 79 | 64, i[8] = i[8] & 191 | 128;
        for (var a = "", o = 0; o < e; ++o) {
          var s = i[o];
          (o === 4 || o === 6 || o === 8) && (a += "-"), s < 16 && (a += "0"), a += s.toString(16).toLowerCase();
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
  const x = window.Reflect;
  Object.assign(Reflect, x), window.Reflect = Reflect;
}
class $e {
  constructor() {
    const l = window.zero || window.ZeroRegistry || {};
    this.modules = l.modules || {}, this.components = l.components || {}, this.isReady = !0, this.attachListeners();
  }
  // satisfy @ZeroModule decorator from zero-annotation
  registerModule(l, f) {
    var v;
    if (!(!l || !f)) {
      console.log(`[Registry] Module registered: ${l}`), this.modules[l] = f;
      try {
        f.onInit ? f.onInit() : (v = f.prototype) != null && v.onInit && new f().onInit();
      } catch (m) {
        console.error(`[Registry] Error initializing module ${l}`, m);
      }
      window.dispatchEvent(new CustomEvent("zero-module:registered", { detail: { id: l } }));
    }
  }
  // Method to register components (satisfy @RendererComponent and manual calls)
  registerComponent(l, f) {
    if (!l || !f) return;
    console.log(`[Registry] Component registered: ${l}`);
    const v = f.class || (f.selector ? customElements.get(`${f.selector}-${f.version || "1.0.0"}`) : null);
    this.components[l] = {
      class: v,
      inputs: f.inputs || {},
      outputs: f.outputs || { events: [] },
      metadata: f
    }, window.dispatchEvent(new CustomEvent("zero-element:metadata-ready", {
      detail: { element: l }
    }));
  }
  // Legacy method to register plugins dynamically
  registerPlugins(l, f) {
    this.registerModule(l, f);
  }
  registerElement(l, f, v = 0) {
    if (!l || !f) {
      console.warn(`[Zero] Cannot register element: name or constructor missing (${l})`);
      return;
    }
    const m = f.prototype, k = Reflect.getMetadata("ZeroAttribute", m) || [], b = Reflect.getMetadata("ZeroComponent", f) || Reflect.getMetadata("ZeroComponent", m);
    if (console.log(`[Zero] Registry: Attempting registration for '${l}' (Retry: ${v})`), console.log(`[Zero] Registry: Found ${k.length} attributes.`), !b)
      if (v < 5) {
        console.log(`[Zero] Registry: Metadata not yet available for '${l}', retrying in 50ms...`), setTimeout(() => this.registerElement(l, f, v + 1), 50);
        return;
      } else
        console.warn(`[Zero] Registry: Failed to find component metadata for '${l}' after 5 retries.`);
    let O = null;
    try {
      O = new f();
    } catch (_) {
      console.info(`[Zero] Registry: Could not instantiate '${l}' to detect defaults:`, _);
    }
    this.components[l] = {
      class: f,
      inputs: k.filter((_) => !_.eventTrigger).reduce((_, { fieldMappings: I, ...E }) => {
        const T = I || E.name;
        if (T) {
          let P = E.initialValue;
          P === void 0 && O && O[T] !== void 0 && (P = O[T]), _[T] = {
            defaultValue: P,
            ...E
          };
        }
        return _;
      }, {}),
      outputs: {
        events: k.filter((_) => _.eventTrigger).map((_) => _.eventTrigger)
      },
      metadata: b || { selector: l.split("-").slice(0, -1).join("-"), version: l.split("-").pop() }
    }, console.log(`[Zero] Registry: SUCCESS. Registered '${l}'.`), window.dispatchEvent(new CustomEvent("zero-element:metadata-ready", {
      detail: { element: l }
    }));
  }
  // Method to attach listeners
  attachListeners() {
    console.log("[Zero] Registry: Event listeners activated"), window.addEventListener("zero-element:component-load", (l) => {
      var b;
      const f = (b = l == null ? void 0 : l.detail) == null ? void 0 : b.element;
      if (console.log("[Zero] Registry: RECEIVED zero-element:component-load event", f), !f || !f.selector) return;
      const v = `${f.selector}-${f.version || "1.0.0"}`;
      let m = 0;
      const k = () => {
        const O = customElements.get(v);
        O ? (console.log(`[Zero] Registry: Custom element '${v}' found. Starting registration.`), this.registerElement(v, O)) : m < 10 ? (m++, setTimeout(k, 100)) : console.error(`[Zero] Registry: TIMEOUT. Could not find custom element '${v}' in registry.`);
      };
      k();
    }), window.addEventListener("element-connected", (l) => {
      var v;
      const f = (v = l == null ? void 0 : l.detail) == null ? void 0 : v.element;
      if (f != null && f.localName) {
        const m = customElements.get(f.localName);
        m && this.registerElement(f.localName, m);
      }
    });
  }
}
const G = new $e();
window.zero = G;
window.ZeroRegistry = G;
globalThis.zero = G;
window.ro = G;
window.dispatchEvent(new CustomEvent("zero-registry-ready"));
