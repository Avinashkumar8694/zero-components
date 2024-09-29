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
var ue;
(function(A) {
  (function(h) {
    var v = typeof globalThis == "object" ? globalThis : typeof oe == "object" ? oe : typeof self == "object" ? self : typeof this == "object" ? this : g(), m = k(A);
    typeof v.Reflect < "u" && (m = k(v.Reflect, m)), h(m, v), typeof v.Reflect > "u" && (v.Reflect = A);
    function k(T, P) {
      return function(E, R) {
        Object.defineProperty(T, E, { configurable: !0, writable: !0, value: R }), P && P(E, R);
      };
    }
    function S() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function O() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function g() {
      return S() || O();
    }
  })(function(h, v) {
    var m = Object.prototype.hasOwnProperty, k = typeof Symbol == "function", S = k && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", O = k && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", T = { __proto__: [] } instanceof Array, P = !g && !T, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return L(/* @__PURE__ */ Object.create(null));
      } : T ? function() {
        return L({ __proto__: null });
      } : function() {
        return L({});
      },
      has: P ? function(e, t) {
        return m.call(e, t);
      } : function(e, t) {
        return t in e;
      },
      get: P ? function(e, t) {
        return m.call(e, t) ? e[t] : void 0;
      } : function(e, t) {
        return e[t];
      }
    }, R = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : je(), F = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Re(), z = typeof WeakMap == "function" ? WeakMap : Ce(), I = k ? Symbol.for("@reflect-metadata:registry") : void 0, G = Pe(), N = Se(G);
    function se(e, t, r, n) {
      if (s(r)) {
        if (!Y(e))
          throw new TypeError();
        if (!K(t))
          throw new TypeError();
        return ge(e, t);
      } else {
        if (!Y(e))
          throw new TypeError();
        if (!w(t))
          throw new TypeError();
        if (!w(n) && !s(n) && !j(n))
          throw new TypeError();
        return j(n) && (n = void 0), r = b(r), Me(e, t, r, n);
      }
    }
    h("decorate", se);
    function ce(e, t) {
      function r(n, f) {
        if (!w(n))
          throw new TypeError();
        if (!s(f) && !Te(f))
          throw new TypeError();
        q(e, t, n, f);
      }
      return r;
    }
    h("metadata", ce);
    function de(e, t, r, n) {
      if (!w(r))
        throw new TypeError();
      return s(n) || (n = b(n)), q(e, t, r, n);
    }
    h("defineMetadata", de);
    function le(e, t, r) {
      if (!w(t))
        throw new TypeError();
      return s(r) || (r = b(r)), V(e, t, r);
    }
    h("hasMetadata", le);
    function he(e, t, r) {
      if (!w(t))
        throw new TypeError();
      return s(r) || (r = b(r)), U(e, t, r);
    }
    h("hasOwnMetadata", he);
    function ve(e, t, r) {
      if (!w(t))
        throw new TypeError();
      return s(r) || (r = b(r)), Z(e, t, r);
    }
    h("getMetadata", ve);
    function ye(e, t, r) {
      if (!w(t))
        throw new TypeError();
      return s(r) || (r = b(r)), B(e, t, r);
    }
    h("getOwnMetadata", ye);
    function we(e, t) {
      if (!w(e))
        throw new TypeError();
      return s(t) || (t = b(t)), $(e, t);
    }
    h("getMetadataKeys", we);
    function pe(e, t) {
      if (!w(e))
        throw new TypeError();
      return s(t) || (t = b(t)), J(e, t);
    }
    h("getOwnMetadataKeys", pe);
    function _e(e, t, r) {
      if (!w(t))
        throw new TypeError();
      if (s(r) || (r = b(r)), !w(t))
        throw new TypeError();
      s(r) || (r = b(r));
      var n = x(
        t,
        r,
        /*Create*/
        !1
      );
      return s(n) ? !1 : n.OrdinaryDeleteMetadata(e, t, r);
    }
    h("deleteMetadata", _e);
    function ge(e, t) {
      for (var r = e.length - 1; r >= 0; --r) {
        var n = e[r], f = n(t);
        if (!s(f) && !j(f)) {
          if (!K(f))
            throw new TypeError();
          t = f;
        }
      }
      return t;
    }
    function Me(e, t, r, n) {
      for (var f = e.length - 1; f >= 0; --f) {
        var _ = e[f], p = _(t, r, n);
        if (!s(p) && !j(p)) {
          if (!w(p))
            throw new TypeError();
          n = p;
        }
      }
      return n;
    }
    function V(e, t, r) {
      var n = U(e, t, r);
      if (n)
        return !0;
      var f = H(t);
      return j(f) ? !1 : V(e, f, r);
    }
    function U(e, t, r) {
      var n = x(
        t,
        r,
        /*Create*/
        !1
      );
      return s(n) ? !1 : X(n.OrdinaryHasOwnMetadata(e, t, r));
    }
    function Z(e, t, r) {
      var n = U(e, t, r);
      if (n)
        return B(e, t, r);
      var f = H(t);
      if (!j(f))
        return Z(e, f, r);
    }
    function B(e, t, r) {
      var n = x(
        t,
        r,
        /*Create*/
        !1
      );
      if (!s(n))
        return n.OrdinaryGetOwnMetadata(e, t, r);
    }
    function q(e, t, r, n) {
      var f = x(
        r,
        n,
        /*Create*/
        !0
      );
      f.OrdinaryDefineOwnMetadata(e, t, r, n);
    }
    function $(e, t) {
      var r = J(e, t), n = H(e);
      if (n === null)
        return r;
      var f = $(n, t);
      if (f.length <= 0)
        return r;
      if (r.length <= 0)
        return f;
      for (var _ = new F(), p = [], c = 0, a = r; c < a.length; c++) {
        var i = a[c], o = _.has(i);
        o || (_.add(i), p.push(i));
      }
      for (var u = 0, d = f; u < d.length; u++) {
        var i = d[u], o = _.has(i);
        o || (_.add(i), p.push(i));
      }
      return p;
    }
    function J(e, t) {
      var r = x(
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
    function s(e) {
      return e === void 0;
    }
    function j(e) {
      return e === null;
    }
    function me(e) {
      return typeof e == "symbol";
    }
    function w(e) {
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
      var r = "string", n = ee(e, S);
      if (n !== void 0) {
        var f = n.call(e, r);
        if (w(f))
          throw new TypeError();
        return f;
      }
      return Oe(e);
    }
    function Oe(e, t) {
      var r, n;
      {
        var f = e.toString;
        if (D(f)) {
          var n = f.call(e);
          if (!w(n))
            return n;
        }
        var r = e.valueOf;
        if (D(r)) {
          var n = r.call(e);
          if (!w(n))
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
    function b(e) {
      var t = be(e);
      return me(t) ? t : ke(t);
    }
    function Y(e) {
      return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
    }
    function D(e) {
      return typeof e == "function";
    }
    function K(e) {
      return typeof e == "function";
    }
    function Te(e) {
      switch (Q(e)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function W(e, t) {
      return e === t || e !== e && t !== t;
    }
    function ee(e, t) {
      var r = e[t];
      if (r != null) {
        if (!D(r))
          throw new TypeError();
        return r;
      }
    }
    function te(e) {
      var t = ee(e, O);
      if (!D(t))
        throw new TypeError();
      var r = t.call(e);
      if (!w(r))
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
    function ae(e) {
      var t = e.return;
      t && t.call(e);
    }
    function H(e) {
      var t = Object.getPrototypeOf(e);
      if (typeof e != "function" || e === R || t !== R)
        return t;
      var r = e.prototype, n = r && Object.getPrototypeOf(r);
      if (n == null || n === Object.prototype)
        return t;
      var f = n.constructor;
      return typeof f != "function" || f === e ? t : f;
    }
    function Ee() {
      var e;
      !s(I) && typeof v.Reflect < "u" && !(I in v.Reflect) && typeof v.Reflect.defineMetadata == "function" && (e = Ie(v.Reflect));
      var t, r, n, f = new z(), _ = {
        registerProvider: p,
        getProvider: a,
        setProvider: o
      };
      return _;
      function p(u) {
        if (!Object.isExtensible(_))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case e === u:
            break;
          case s(t):
            t = u;
            break;
          case t === u:
            break;
          case s(r):
            r = u;
            break;
          case r === u:
            break;
          default:
            n === void 0 && (n = new F()), n.add(u);
            break;
        }
      }
      function c(u, d) {
        if (!s(t)) {
          if (t.isProviderFor(u, d))
            return t;
          if (!s(r)) {
            if (r.isProviderFor(u, d))
              return t;
            if (!s(n))
              for (var l = te(n); ; ) {
                var y = ne(l);
                if (!y)
                  return;
                var M = re(y);
                if (M.isProviderFor(u, d))
                  return ae(l), M;
              }
          }
        }
        if (!s(e) && e.isProviderFor(u, d))
          return e;
      }
      function a(u, d) {
        var l = f.get(u), y;
        return s(l) || (y = l.get(d)), s(y) && (y = c(u, d), s(y) || (s(l) && (l = new C(), f.set(u, l)), l.set(d, y))), y;
      }
      function i(u) {
        if (s(u))
          throw new TypeError();
        return t === u || r === u || !s(n) && n.has(u);
      }
      function o(u, d, l) {
        if (!i(l))
          throw new Error("Metadata provider not registered.");
        var y = a(u, d);
        if (y !== l) {
          if (!s(y))
            return !1;
          var M = f.get(u);
          s(M) && (M = new C(), f.set(u, M)), M.set(d, l);
        }
        return !0;
      }
    }
    function Pe() {
      var e;
      return !s(I) && w(v.Reflect) && Object.isExtensible(v.Reflect) && (e = v.Reflect[I]), s(e) && (e = Ee()), !s(I) && w(v.Reflect) && Object.isExtensible(v.Reflect) && Object.defineProperty(v.Reflect, I, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: e
      }), e;
    }
    function Se(e) {
      var t = new z(), r = {
        isProviderFor: function(i, o) {
          var u = t.get(i);
          return s(u) ? !1 : u.has(o);
        },
        OrdinaryDefineOwnMetadata: p,
        OrdinaryHasOwnMetadata: f,
        OrdinaryGetOwnMetadata: _,
        OrdinaryOwnMetadataKeys: c,
        OrdinaryDeleteMetadata: a
      };
      return G.registerProvider(r), r;
      function n(i, o, u) {
        var d = t.get(i), l = !1;
        if (s(d)) {
          if (!u)
            return;
          d = new C(), t.set(i, d), l = !0;
        }
        var y = d.get(o);
        if (s(y)) {
          if (!u)
            return;
          if (y = new C(), d.set(o, y), !e.setProvider(i, o, r))
            throw d.delete(o), l && t.delete(i), new Error("Wrong provider for target.");
        }
        return y;
      }
      function f(i, o, u) {
        var d = n(
          o,
          u,
          /*Create*/
          !1
        );
        return s(d) ? !1 : X(d.has(i));
      }
      function _(i, o, u) {
        var d = n(
          o,
          u,
          /*Create*/
          !1
        );
        if (!s(d))
          return d.get(i);
      }
      function p(i, o, u, d) {
        var l = n(
          u,
          d,
          /*Create*/
          !0
        );
        l.set(i, o);
      }
      function c(i, o) {
        var u = [], d = n(
          i,
          o,
          /*Create*/
          !1
        );
        if (s(d))
          return u;
        for (var l = d.keys(), y = te(l), M = 0; ; ) {
          var ie = ne(y);
          if (!ie)
            return u.length = M, u;
          var xe = re(ie);
          try {
            u[M] = xe;
          } catch (Ge) {
            try {
              ae(y);
            } finally {
              throw Ge;
            }
          }
          M++;
        }
      }
      function a(i, o, u) {
        var d = n(
          o,
          u,
          /*Create*/
          !1
        );
        if (s(d) || !d.delete(i))
          return !1;
        if (d.size === 0) {
          var l = t.get(o);
          s(l) || (l.delete(u), l.size === 0 && t.delete(l));
        }
        return !0;
      }
    }
    function Ie(e) {
      var t = e.defineMetadata, r = e.hasOwnMetadata, n = e.getOwnMetadata, f = e.getOwnMetadataKeys, _ = e.deleteMetadata, p = new z(), c = {
        isProviderFor: function(a, i) {
          var o = p.get(a);
          return !s(o) && o.has(i) ? !0 : f(a, i).length ? (s(o) && (o = new F(), p.set(a, o)), o.add(i), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: t,
        OrdinaryHasOwnMetadata: r,
        OrdinaryGetOwnMetadata: n,
        OrdinaryOwnMetadataKeys: f,
        OrdinaryDeleteMetadata: _
      };
      return c;
    }
    function x(e, t, r) {
      var n = G.getProvider(e, t);
      if (!s(n))
        return n;
      if (r) {
        if (G.setProvider(e, t, N))
          return N;
        throw new Error("Illegal state.");
      }
    }
    function je() {
      var e = {}, t = [], r = (
        /** @class */
        function() {
          function c(a, i, o) {
            this._index = 0, this._keys = a, this._values = i, this._selector = o;
          }
          return c.prototype["@@iterator"] = function() {
            return this;
          }, c.prototype[O] = function() {
            return this;
          }, c.prototype.next = function() {
            var a = this._index;
            if (a >= 0 && a < this._keys.length) {
              var i = this._selector(this._keys[a], this._values[a]);
              return a + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: i, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, c.prototype.throw = function(a) {
            throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), a;
          }, c.prototype.return = function(a) {
            return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: a, done: !0 };
          }, c;
        }()
      ), n = (
        /** @class */
        function() {
          function c() {
            this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
          }
          return Object.defineProperty(c.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), c.prototype.has = function(a) {
            return this._find(
              a,
              /*insert*/
              !1
            ) >= 0;
          }, c.prototype.get = function(a) {
            var i = this._find(
              a,
              /*insert*/
              !1
            );
            return i >= 0 ? this._values[i] : void 0;
          }, c.prototype.set = function(a, i) {
            var o = this._find(
              a,
              /*insert*/
              !0
            );
            return this._values[o] = i, this;
          }, c.prototype.delete = function(a) {
            var i = this._find(
              a,
              /*insert*/
              !1
            );
            if (i >= 0) {
              for (var o = this._keys.length, u = i + 1; u < o; u++)
                this._keys[u - 1] = this._keys[u], this._values[u - 1] = this._values[u];
              return this._keys.length--, this._values.length--, W(a, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
            }
            return !1;
          }, c.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
          }, c.prototype.keys = function() {
            return new r(this._keys, this._values, f);
          }, c.prototype.values = function() {
            return new r(this._keys, this._values, _);
          }, c.prototype.entries = function() {
            return new r(this._keys, this._values, p);
          }, c.prototype["@@iterator"] = function() {
            return this.entries();
          }, c.prototype[O] = function() {
            return this.entries();
          }, c.prototype._find = function(a, i) {
            if (!W(this._cacheKey, a)) {
              this._cacheIndex = -1;
              for (var o = 0; o < this._keys.length; o++)
                if (W(this._keys[o], a)) {
                  this._cacheIndex = o;
                  break;
                }
            }
            return this._cacheIndex < 0 && i && (this._cacheIndex = this._keys.length, this._keys.push(a), this._values.push(void 0)), this._cacheIndex;
          }, c;
        }()
      );
      return n;
      function f(c, a) {
        return c;
      }
      function _(c, a) {
        return a;
      }
      function p(c, a) {
        return [c, a];
      }
    }
    function Re() {
      var e = (
        /** @class */
        function() {
          function t() {
            this._map = new C();
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
          }, t.prototype[O] = function() {
            return this.keys();
          }, t;
        }()
      );
      return e;
    }
    function Ce() {
      var e = 16, t = E.create(), r = n();
      return (
        /** @class */
        function() {
          function a() {
            this._key = n();
          }
          return a.prototype.has = function(i) {
            var o = f(
              i,
              /*create*/
              !1
            );
            return o !== void 0 ? E.has(o, this._key) : !1;
          }, a.prototype.get = function(i) {
            var o = f(
              i,
              /*create*/
              !1
            );
            return o !== void 0 ? E.get(o, this._key) : void 0;
          }, a.prototype.set = function(i, o) {
            var u = f(
              i,
              /*create*/
              !0
            );
            return u[this._key] = o, this;
          }, a.prototype.delete = function(i) {
            var o = f(
              i,
              /*create*/
              !1
            );
            return o !== void 0 ? delete o[this._key] : !1;
          }, a.prototype.clear = function() {
            this._key = n();
          }, a;
        }()
      );
      function n() {
        var a;
        do
          a = "@@WeakMap@@" + c();
        while (E.has(t, a));
        return t[a] = !0, a;
      }
      function f(a, i) {
        if (!m.call(a, r)) {
          if (!i)
            return;
          Object.defineProperty(a, r, { value: E.create() });
        }
        return a[r];
      }
      function _(a, i) {
        for (var o = 0; o < i; ++o)
          a[o] = Math.random() * 255 | 0;
        return a;
      }
      function p(a) {
        if (typeof Uint8Array == "function") {
          var i = new Uint8Array(a);
          return typeof crypto < "u" ? crypto.getRandomValues(i) : typeof msCrypto < "u" ? msCrypto.getRandomValues(i) : _(i, a), i;
        }
        return _(new Array(a), a);
      }
      function c() {
        var a = p(e);
        a[6] = a[6] & 79 | 64, a[8] = a[8] & 191 | 128;
        for (var i = "", o = 0; o < e; ++o) {
          var u = a[o];
          (o === 4 || o === 6 || o === 8) && (i += "-"), u < 16 && (i += "0"), i += u.toString(16).toLowerCase();
        }
        return i;
      }
    }
    function L(e) {
      return e.__ = void 0, delete e.__, e;
    }
  });
})(ue || (ue = {}));
class fe {
  constructor() {
    this.modules = {}, this.components = {}, this.attachListeners();
  }
  // Method to register plugins dynamically
  registerPlugins(h, v) {
    if (!h || !v)
      throw new Error("Key and value are required to register a plugin.");
    this.modules[h] = v, console.log(`Plugin registered and available as zero.modules['${h}']`);
  }
  // Method to attach listeners
  attachListeners() {
    console.log("component listener activated"), window.addEventListener("element-connected", (h) => {
      var S, O;
      if (!((O = (S = h == null ? void 0 : h.detail) == null ? void 0 : S.element) != null && O.localName))
        return;
      const v = customElements.get(h.detail.element.localName), m = Reflect.getMetadata("ZeroAttribute", v.prototype) || [], k = Reflect.getMetadata("ZeroComponent", v.prototype);
      this.components[h.detail.element.localName] = {
        class: v,
        inputs: m.filter((g) => !g.eventTrigger).reduce((g, { fieldMappings: T, ...P }) => (g[T] = { ...P }, g), {}),
        outputs: { events: m.filter((g) => g.eventTrigger).map((g) => g.eventTrigger) },
        componentMetadata: k
      }, console.log("Component Loaded:", h.detail.element.localName);
    });
  }
}
window.zero ? window.zero = Object.assign(window.zero, new fe()) : window.zero = new fe();
