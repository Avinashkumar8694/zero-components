var Xt = Object.defineProperty;
var Ft = (r, e, t) => e in r ? Xt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var nt = (r, e, t) => Ft(r, typeof e != "symbol" ? e + "" : e, t);
var at = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var st;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof at == "object" ? at : typeof self == "object" ? self : typeof this == "object" ? this : y(), i = o(r);
    typeof t.Reflect < "u" && (i = o(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(c, C) {
      return function(E, $) {
        Object.defineProperty(c, E, { configurable: !0, writable: !0, value: $ }), C && C(E, $);
      };
    }
    function l() {
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
    function y() {
      return l() || p();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", p = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", y = typeof Object.create == "function", c = { __proto__: [] } instanceof Array, C = !y && !c, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: y ? function() {
        return Le(/* @__PURE__ */ Object.create(null));
      } : c ? function() {
        return Le({ __proto__: null });
      } : function() {
        return Le({});
      },
      has: C ? function(n, a) {
        return i.call(n, a);
      } : function(n, a) {
        return a in n;
      },
      get: C ? function(n, a) {
        return i.call(n, a) ? n[a] : void 0;
      } : function(n, a) {
        return n[a];
      }
    }, $ = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ut(), M = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Vt(), D = typeof WeakMap == "function" ? WeakMap : Yt(), G = o ? Symbol.for("@reflect-metadata:registry") : void 0, k = Ht(), L = Dt(k);
    function F(n, a, s, d) {
      if (_(s)) {
        if (!Ze(n))
          throw new TypeError();
        if (!Je(a))
          throw new TypeError();
        return zt(n, a);
      } else {
        if (!Ze(n))
          throw new TypeError();
        if (!B(a))
          throw new TypeError();
        if (!B(d) && !_(d) && !se(d))
          throw new TypeError();
        return se(d) && (d = void 0), s = J(s), At(n, a, s, d);
      }
    }
    e("decorate", F);
    function K(n, a) {
      function s(d, x) {
        if (!B(d))
          throw new TypeError();
        if (!_(x) && !Nt(x))
          throw new TypeError();
        We(n, a, d, x);
      }
      return s;
    }
    e("metadata", K);
    function ee(n, a, s, d) {
      if (!B(s))
        throw new TypeError();
      return _(d) || (d = J(d)), We(n, a, s, d);
    }
    e("defineMetadata", ee);
    function ue(n, a, s) {
      if (!B(a))
        throw new TypeError();
      return _(s) || (s = J(s)), Ve(n, a, s);
    }
    e("hasMetadata", ue);
    function he(n, a, s) {
      if (!B(a))
        throw new TypeError();
      return _(s) || (s = J(s)), ze(n, a, s);
    }
    e("hasOwnMetadata", he);
    function we(n, a, s) {
      if (!B(a))
        throw new TypeError();
      return _(s) || (s = J(s)), Ye(n, a, s);
    }
    e("getMetadata", we);
    function Pt(n, a, s) {
      if (!B(a))
        throw new TypeError();
      return _(s) || (s = J(s)), Ge(n, a, s);
    }
    e("getOwnMetadata", Pt);
    function Rt(n, a) {
      if (!B(n))
        throw new TypeError();
      return _(a) || (a = J(a)), Xe(n, a);
    }
    e("getMetadataKeys", Rt);
    function St(n, a) {
      if (!B(n))
        throw new TypeError();
      return _(a) || (a = J(a)), Fe(n, a);
    }
    e("getOwnMetadataKeys", St);
    function Ot(n, a, s) {
      if (!B(a))
        throw new TypeError();
      if (_(s) || (s = J(s)), !B(a))
        throw new TypeError();
      _(s) || (s = J(s));
      var d = fe(
        a,
        s,
        /*Create*/
        !1
      );
      return _(d) ? !1 : d.OrdinaryDeleteMetadata(n, a, s);
    }
    e("deleteMetadata", Ot);
    function zt(n, a) {
      for (var s = n.length - 1; s >= 0; --s) {
        var d = n[s], x = d(a);
        if (!_(x) && !se(x)) {
          if (!Je(x))
            throw new TypeError();
          a = x;
        }
      }
      return a;
    }
    function At(n, a, s, d) {
      for (var x = n.length - 1; x >= 0; --x) {
        var V = n[x], U = V(a, s, d);
        if (!_(U) && !se(U)) {
          if (!B(U))
            throw new TypeError();
          d = U;
        }
      }
      return d;
    }
    function Ve(n, a, s) {
      var d = ze(n, a, s);
      if (d)
        return !0;
      var x = Me(a);
      return se(x) ? !1 : Ve(n, x, s);
    }
    function ze(n, a, s) {
      var d = fe(
        a,
        s,
        /*Create*/
        !1
      );
      return _(d) ? !1 : Ke(d.OrdinaryHasOwnMetadata(n, a, s));
    }
    function Ye(n, a, s) {
      var d = ze(n, a, s);
      if (d)
        return Ge(n, a, s);
      var x = Me(a);
      if (!se(x))
        return Ye(n, x, s);
    }
    function Ge(n, a, s) {
      var d = fe(
        a,
        s,
        /*Create*/
        !1
      );
      if (!_(d))
        return d.OrdinaryGetOwnMetadata(n, a, s);
    }
    function We(n, a, s, d) {
      var x = fe(
        s,
        d,
        /*Create*/
        !0
      );
      x.OrdinaryDefineOwnMetadata(n, a, s, d);
    }
    function Xe(n, a) {
      var s = Fe(n, a), d = Me(n);
      if (d === null)
        return s;
      var x = Xe(d, a);
      if (x.length <= 0)
        return s;
      if (s.length <= 0)
        return x;
      for (var V = new M(), U = [], T = 0, u = s; T < u.length; T++) {
        var h = u[T], b = V.has(h);
        b || (V.add(h), U.push(h));
      }
      for (var g = 0, P = x; g < P.length; g++) {
        var h = P[g], b = V.has(h);
        b || (V.add(h), U.push(h));
      }
      return U;
    }
    function Fe(n, a) {
      var s = fe(
        n,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(n, a) : [];
    }
    function qe(n) {
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
    function _(n) {
      return n === void 0;
    }
    function se(n) {
      return n === null;
    }
    function Mt(n) {
      return typeof n == "symbol";
    }
    function B(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function Lt(n, a) {
      switch (qe(n)) {
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
      var s = "string", d = Qe(n, l);
      if (d !== void 0) {
        var x = d.call(n, s);
        if (B(x))
          throw new TypeError();
        return x;
      }
      return It(n);
    }
    function It(n, a) {
      var s, d;
      {
        var x = n.toString;
        if (Ee(x)) {
          var d = x.call(n);
          if (!B(d))
            return d;
        }
        var s = n.valueOf;
        if (Ee(s)) {
          var d = s.call(n);
          if (!B(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ke(n) {
      return !!n;
    }
    function kt(n) {
      return "" + n;
    }
    function J(n) {
      var a = Lt(n);
      return Mt(a) ? a : kt(a);
    }
    function Ze(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function Ee(n) {
      return typeof n == "function";
    }
    function Je(n) {
      return typeof n == "function";
    }
    function Nt(n) {
      switch (qe(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ae(n, a) {
      return n === a || n !== n && a !== a;
    }
    function Qe(n, a) {
      var s = n[a];
      if (s != null) {
        if (!Ee(s))
          throw new TypeError();
        return s;
      }
    }
    function et(n) {
      var a = Qe(n, p);
      if (!Ee(a))
        throw new TypeError();
      var s = a.call(n);
      if (!B(s))
        throw new TypeError();
      return s;
    }
    function tt(n) {
      return n.value;
    }
    function rt(n) {
      var a = n.next();
      return a.done ? !1 : a;
    }
    function it(n) {
      var a = n.return;
      a && a.call(n);
    }
    function Me(n) {
      var a = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === $ || a !== $)
        return a;
      var s = n.prototype, d = s && Object.getPrototypeOf(s);
      if (d == null || d === Object.prototype)
        return a;
      var x = d.constructor;
      return typeof x != "function" || x === n ? a : x;
    }
    function jt() {
      var n;
      !_(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = Bt(t.Reflect));
      var a, s, d, x = new D(), V = {
        registerProvider: U,
        getProvider: u,
        setProvider: b
      };
      return V;
      function U(g) {
        if (!Object.isExtensible(V))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === g:
            break;
          case _(a):
            a = g;
            break;
          case a === g:
            break;
          case _(s):
            s = g;
            break;
          case s === g:
            break;
          default:
            d === void 0 && (d = new M()), d.add(g);
            break;
        }
      }
      function T(g, P) {
        if (!_(a)) {
          if (a.isProviderFor(g, P))
            return a;
          if (!_(s)) {
            if (s.isProviderFor(g, P))
              return a;
            if (!_(d))
              for (var A = et(d); ; ) {
                var N = rt(A);
                if (!N)
                  return;
                var Z = tt(N);
                if (Z.isProviderFor(g, P))
                  return it(A), Z;
              }
          }
        }
        if (!_(n) && n.isProviderFor(g, P))
          return n;
      }
      function u(g, P) {
        var A = x.get(g), N;
        return _(A) || (N = A.get(P)), _(N) && (N = T(g, P), _(N) || (_(A) && (A = new S(), x.set(g, A)), A.set(P, N))), N;
      }
      function h(g) {
        if (_(g))
          throw new TypeError();
        return a === g || s === g || !_(d) && d.has(g);
      }
      function b(g, P, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var N = u(g, P);
        if (N !== A) {
          if (!_(N))
            return !1;
          var Z = x.get(g);
          _(Z) && (Z = new S(), x.set(g, Z)), Z.set(P, A);
        }
        return !0;
      }
    }
    function Ht() {
      var n;
      return !_(G) && B(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[G]), _(n) && (n = jt()), !_(G) && B(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Dt(n) {
      var a = new D(), s = {
        isProviderFor: function(h, b) {
          var g = a.get(h);
          return _(g) ? !1 : g.has(b);
        },
        OrdinaryDefineOwnMetadata: U,
        OrdinaryHasOwnMetadata: x,
        OrdinaryGetOwnMetadata: V,
        OrdinaryOwnMetadataKeys: T,
        OrdinaryDeleteMetadata: u
      };
      return k.registerProvider(s), s;
      function d(h, b, g) {
        var P = a.get(h), A = !1;
        if (_(P)) {
          if (!g)
            return;
          P = new S(), a.set(h, P), A = !0;
        }
        var N = P.get(b);
        if (_(N)) {
          if (!g)
            return;
          if (N = new S(), P.set(b, N), !n.setProvider(h, b, s))
            throw P.delete(b), A && a.delete(h), new Error("Wrong provider for target.");
        }
        return N;
      }
      function x(h, b, g) {
        var P = d(
          b,
          g,
          /*Create*/
          !1
        );
        return _(P) ? !1 : Ke(P.has(h));
      }
      function V(h, b, g) {
        var P = d(
          b,
          g,
          /*Create*/
          !1
        );
        if (!_(P))
          return P.get(h);
      }
      function U(h, b, g, P) {
        var A = d(
          g,
          P,
          /*Create*/
          !0
        );
        A.set(h, b);
      }
      function T(h, b) {
        var g = [], P = d(
          h,
          b,
          /*Create*/
          !1
        );
        if (_(P))
          return g;
        for (var A = P.keys(), N = et(A), Z = 0; ; ) {
          var ot = rt(N);
          if (!ot)
            return g.length = Z, g;
          var Gt = tt(ot);
          try {
            g[Z] = Gt;
          } catch (Wt) {
            try {
              it(N);
            } finally {
              throw Wt;
            }
          }
          Z++;
        }
      }
      function u(h, b, g) {
        var P = d(
          b,
          g,
          /*Create*/
          !1
        );
        if (_(P) || !P.delete(h))
          return !1;
        if (P.size === 0) {
          var A = a.get(b);
          _(A) || (A.delete(g), A.size === 0 && a.delete(A));
        }
        return !0;
      }
    }
    function Bt(n) {
      var a = n.defineMetadata, s = n.hasOwnMetadata, d = n.getOwnMetadata, x = n.getOwnMetadataKeys, V = n.deleteMetadata, U = new D(), T = {
        isProviderFor: function(u, h) {
          var b = U.get(u);
          return !_(b) && b.has(h) ? !0 : x(u, h).length ? (_(b) && (b = new M(), U.set(u, b)), b.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: x,
        OrdinaryDeleteMetadata: V
      };
      return T;
    }
    function fe(n, a, s) {
      var d = k.getProvider(n, a);
      if (!_(d))
        return d;
      if (s) {
        if (k.setProvider(n, a, L))
          return L;
        throw new Error("Illegal state.");
      }
    }
    function Ut() {
      var n = {}, a = [], s = (
        /** @class */
        function() {
          function T(u, h, b) {
            this._index = 0, this._keys = u, this._values = h, this._selector = b;
          }
          return T.prototype["@@iterator"] = function() {
            return this;
          }, T.prototype[p] = function() {
            return this;
          }, T.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var h = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, T.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), u;
          }, T.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: u, done: !0 };
          }, T;
        }()
      ), d = (
        /** @class */
        function() {
          function T() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(T.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), T.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, T.prototype.get = function(u) {
            var h = this._find(
              u,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, T.prototype.set = function(u, h) {
            var b = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[b] = h, this;
          }, T.prototype.delete = function(u) {
            var h = this._find(
              u,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var b = this._keys.length, g = h + 1; g < b; g++)
                this._keys[g - 1] = this._keys[g], this._values[g - 1] = this._values[g];
              return this._keys.length--, this._values.length--, Ae(u, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, T.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, T.prototype.keys = function() {
            return new s(this._keys, this._values, x);
          }, T.prototype.values = function() {
            return new s(this._keys, this._values, V);
          }, T.prototype.entries = function() {
            return new s(this._keys, this._values, U);
          }, T.prototype["@@iterator"] = function() {
            return this.entries();
          }, T.prototype[p] = function() {
            return this.entries();
          }, T.prototype._find = function(u, h) {
            if (!Ae(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var b = 0; b < this._keys.length; b++)
                if (Ae(this._keys[b], u)) {
                  this._cacheIndex = b;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, T;
        }()
      );
      return d;
      function x(T, u) {
        return T;
      }
      function V(T, u) {
        return u;
      }
      function U(T, u) {
        return [T, u];
      }
    }
    function Vt() {
      var n = (
        /** @class */
        function() {
          function a() {
            this._map = new S();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(s) {
            return this._map.has(s);
          }, a.prototype.add = function(s) {
            return this._map.set(s, s), this;
          }, a.prototype.delete = function(s) {
            return this._map.delete(s);
          }, a.prototype.clear = function() {
            this._map.clear();
          }, a.prototype.keys = function() {
            return this._map.keys();
          }, a.prototype.values = function() {
            return this._map.keys();
          }, a.prototype.entries = function() {
            return this._map.entries();
          }, a.prototype["@@iterator"] = function() {
            return this.keys();
          }, a.prototype[p] = function() {
            return this.keys();
          }, a;
        }()
      );
      return n;
    }
    function Yt() {
      var n = 16, a = E.create(), s = d();
      return (
        /** @class */
        function() {
          function u() {
            this._key = d();
          }
          return u.prototype.has = function(h) {
            var b = x(
              h,
              /*create*/
              !1
            );
            return b !== void 0 ? E.has(b, this._key) : !1;
          }, u.prototype.get = function(h) {
            var b = x(
              h,
              /*create*/
              !1
            );
            return b !== void 0 ? E.get(b, this._key) : void 0;
          }, u.prototype.set = function(h, b) {
            var g = x(
              h,
              /*create*/
              !0
            );
            return g[this._key] = b, this;
          }, u.prototype.delete = function(h) {
            var b = x(
              h,
              /*create*/
              !1
            );
            return b !== void 0 ? delete b[this._key] : !1;
          }, u.prototype.clear = function() {
            this._key = d();
          }, u;
        }()
      );
      function d() {
        var u;
        do
          u = "@@WeakMap@@" + T();
        while (E.has(a, u));
        return a[u] = !0, u;
      }
      function x(u, h) {
        if (!i.call(u, s)) {
          if (!h)
            return;
          Object.defineProperty(u, s, { value: E.create() });
        }
        return u[s];
      }
      function V(u, h) {
        for (var b = 0; b < h; ++b)
          u[b] = Math.random() * 255 | 0;
        return u;
      }
      function U(u) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : V(h, u), h;
        }
        return V(new Array(u), u);
      }
      function T() {
        var u = U(n);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var h = "", b = 0; b < n; ++b) {
          var g = u[b];
          (b === 4 || b === 6 || b === 8) && (h += "-"), g < 16 && (h += "0"), h += g.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function Le(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(st || (st = {}));
function qt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Kt(r) {
  return function(e) {
    if (qt(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
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
function Re(r) {
  return Kt(r);
}
function Zt(r) {
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
        var C;
        const l = document.querySelector('style.global-style[type="text/css"]'), p = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), y = "adoptedStyleSheets" in Document.prototype, c = this.shadowRoot;
        if (!c) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && y) {
          const E = new CSSStyleSheet(), $ = (C = l.sheet) == null ? void 0 : C.cssRules;
          $ && (Array.from($).forEach((S) => E.insertRule(S.cssText)), c.adoptedStyleSheets = [...c.adoptedStyleSheets, E]);
        } else if (l) {
          const E = l.cloneNode(!0);
          c.appendChild(E);
        }
        p.forEach((E) => {
          const $ = E.cloneNode(!0);
          c.appendChild($);
        });
      }
    }
    return t;
  };
}
function Jt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Qt(r) {
  return function(e, t) {
    try {
      Jt(r);
      const i = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let o = !0;
      if (typeof t == "string") {
        try {
          o = typeof e[t] != "function";
        } catch {
          o = !0;
        }
        o && (r.fieldMappings = r.fieldMappings ?? t);
      }
      i.push(r), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function v(r) {
  return Qt(r);
}
var w;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(w || (w = {}));
var f;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(f || (f = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _e = globalThis, He = _e.ShadowRoot && (_e.ShadyCSS === void 0 || _e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, De = Symbol(), lt = /* @__PURE__ */ new WeakMap();
let $t = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== De) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (He && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = lt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && lt.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const er = (r) => new $t(typeof r == "string" ? r : r + "", void 0, De), wt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, o, l) => i + ((p) => {
    if (p._$cssResult$ === !0) return p.cssText;
    if (typeof p == "number") return p;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + p + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new $t(t, r, De);
}, tr = (r, e) => {
  if (He) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = _e.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, r.appendChild(i);
  }
}, pt = He ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return er(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: rr, defineProperty: ir, getOwnPropertyDescriptor: or, getOwnPropertyNames: nr, getOwnPropertySymbols: ar, getPrototypeOf: sr } = Object, re = globalThis, dt = re.trustedTypes, lr = dt ? dt.emptyScript : "", Ie = re.reactiveElementPolyfillSupport, be = (r, e) => r, Ce = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? lr : null;
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
} }, Be = (r, e) => !rr(r, e), ct = { attribute: !0, type: String, converter: Ce, reflect: !1, useDefault: !1, hasChanged: Be };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), re.litPropertyMetadata ?? (re.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let le = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = ct) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && ir(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: o, set: l } = or(this.prototype, e) ?? { get() {
      return this[t];
    }, set(p) {
      this[t] = p;
    } };
    return { get: o, set(p) {
      const y = o == null ? void 0 : o.call(this);
      l == null || l.call(this, p), this.requestUpdate(e, y, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ct;
  }
  static _$Ei() {
    if (this.hasOwnProperty(be("elementProperties"))) return;
    const e = sr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(be("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(be("properties"))) {
      const t = this.properties, i = [...nr(t), ...ar(t)];
      for (const o of i) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, o] of t) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const o = this._$Eu(t, i);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const o of i) t.unshift(pt(o));
    } else e !== void 0 && t.push(pt(e));
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
    return tr(e, this.constructor.elementStyles), e;
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
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const p = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : Ce).toAttribute(t, i.type);
      this._$Em = e, p == null ? this.removeAttribute(o) : this.setAttribute(o, p), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, p;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const y = i.getPropertyOptions(o), c = typeof y.converter == "function" ? { fromAttribute: y.converter } : ((l = y.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? y.converter : Ce;
      this._$Em = o;
      const C = c.fromAttribute(t, y.type);
      this[o] = C ?? ((p = this._$Ej) == null ? void 0 : p.get(o)) ?? C, this._$Em = null;
    }
  }
  requestUpdate(e, t, i, o = !1, l) {
    var p;
    if (e !== void 0) {
      const y = this.constructor;
      if (o === !1 && (l = this[e]), i ?? (i = y.getPropertyOptions(e)), !((i.hasChanged ?? Be)(l, t) || i.useDefault && i.reflect && l === ((p = this._$Ej) == null ? void 0 : p.get(e)) && !this.hasAttribute(y._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: o, wrapped: l }, p) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, p ?? t ?? this[e]), l !== !0 || p !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, p] of this._$Ep) this[l] = p;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, p] of o) {
        const { wrapped: y } = p, c = this[l];
        y !== !0 || this._$AL.has(l) || c === void 0 || this.C(l, void 0, p, c);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((o) => {
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
    (t = this._$EO) == null || t.forEach((i) => {
      var o;
      return (o = i.hostUpdated) == null ? void 0 : o.call(i);
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
le.elementStyles = [], le.shadowRootOptions = { mode: "open" }, le[be("elementProperties")] = /* @__PURE__ */ new Map(), le[be("finalized")] = /* @__PURE__ */ new Map(), Ie == null || Ie({ ReactiveElement: le }), (re.reactiveElementVersions ?? (re.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ve = globalThis, ut = (r) => r, Te = ve.trustedTypes, ht = Te ? Te.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, Et = "$lit$", te = `lit$${Math.random().toFixed(9).slice(2)}$`, _t = "?" + te, pr = `<${_t}>`, ae = document, ge = () => ae.createComment(""), me = (r) => r === null || typeof r != "object" && typeof r != "function", Ue = Array.isArray, dr = (r) => Ue(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ke = `[ 	
\f\r]`, ye = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ft = /-->/g, yt = />/g, ie = RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), bt = /'/g, vt = /"/g, Ct = /^(?:script|style|textarea|title)$/i, cr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), O = cr(1), de = Symbol.for("lit-noChange"), Y = Symbol.for("lit-nothing"), gt = /* @__PURE__ */ new WeakMap(), oe = ae.createTreeWalker(ae, 129);
function Tt(r, e) {
  if (!Ue(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ht !== void 0 ? ht.createHTML(e) : e;
}
const ur = (r, e) => {
  const t = r.length - 1, i = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", p = ye;
  for (let y = 0; y < t; y++) {
    const c = r[y];
    let C, E, $ = -1, S = 0;
    for (; S < c.length && (p.lastIndex = S, E = p.exec(c), E !== null); ) S = p.lastIndex, p === ye ? E[1] === "!--" ? p = ft : E[1] !== void 0 ? p = yt : E[2] !== void 0 ? (Ct.test(E[2]) && (o = RegExp("</" + E[2], "g")), p = ie) : E[3] !== void 0 && (p = ie) : p === ie ? E[0] === ">" ? (p = o ?? ye, $ = -1) : E[1] === void 0 ? $ = -2 : ($ = p.lastIndex - E[2].length, C = E[1], p = E[3] === void 0 ? ie : E[3] === '"' ? vt : bt) : p === vt || p === bt ? p = ie : p === ft || p === yt ? p = ye : (p = ie, o = void 0);
    const M = p === ie && r[y + 1].startsWith("/>") ? " " : "";
    l += p === ye ? c + pr : $ >= 0 ? (i.push(C), c.slice(0, $) + Et + c.slice($) + te + M) : c + te + ($ === -2 ? y : M);
  }
  return [Tt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class xe {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let l = 0, p = 0;
    const y = e.length - 1, c = this.parts, [C, E] = ur(e, t);
    if (this.el = xe.createElement(C, i), oe.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = oe.nextNode()) !== null && c.length < y; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(Et)) {
          const S = E[p++], M = o.getAttribute($).split(te), D = /([.?@])?(.*)/.exec(S);
          c.push({ type: 1, index: l, name: D[2], strings: M, ctor: D[1] === "." ? fr : D[1] === "?" ? yr : D[1] === "@" ? br : Se }), o.removeAttribute($);
        } else $.startsWith(te) && (c.push({ type: 6, index: l }), o.removeAttribute($));
        if (Ct.test(o.tagName)) {
          const $ = o.textContent.split(te), S = $.length - 1;
          if (S > 0) {
            o.textContent = Te ? Te.emptyScript : "";
            for (let M = 0; M < S; M++) o.append($[M], ge()), oe.nextNode(), c.push({ type: 2, index: ++l });
            o.append($[S], ge());
          }
        }
      } else if (o.nodeType === 8) if (o.data === _t) c.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(te, $ + 1)) !== -1; ) c.push({ type: 7, index: l }), $ += te.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const i = ae.createElement("template");
    return i.innerHTML = e, i;
  }
}
function ce(r, e, t = r, i) {
  var p, y;
  if (e === de) return e;
  let o = i !== void 0 ? (p = t._$Co) == null ? void 0 : p[i] : t._$Cl;
  const l = me(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((y = o == null ? void 0 : o._$AO) == null || y.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = o : t._$Cl = o), o !== void 0 && (e = ce(r, o._$AS(r, e.values), o, i)), e;
}
class hr {
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
    const { el: { content: t }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? ae).importNode(t, !0);
    oe.currentNode = o;
    let l = oe.nextNode(), p = 0, y = 0, c = i[0];
    for (; c !== void 0; ) {
      if (p === c.index) {
        let C;
        c.type === 2 ? C = new $e(l, l.nextSibling, this, e) : c.type === 1 ? C = new c.ctor(l, c.name, c.strings, this, e) : c.type === 6 && (C = new vr(l, this, e)), this._$AV.push(C), c = i[++y];
      }
      p !== (c == null ? void 0 : c.index) && (l = oe.nextNode(), p++);
    }
    return oe.currentNode = ae, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class $e {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, o) {
    this.type = 2, this._$AH = Y, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = ce(this, e, t), me(e) ? e === Y || e == null || e === "" ? (this._$AH !== Y && this._$AR(), this._$AH = Y) : e !== this._$AH && e !== de && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : dr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== Y && me(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ae.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = xe.createElement(Tt(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const p = new hr(o, this), y = p.u(this.options);
      p.p(t), this.T(y), this._$AH = p;
    }
  }
  _$AC(e) {
    let t = gt.get(e.strings);
    return t === void 0 && gt.set(e.strings, t = new xe(e)), t;
  }
  k(e) {
    Ue(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const l of e) o === t.length ? t.push(i = new $e(this.O(ge()), this.O(ge()), this, this.options)) : i = t[o], i._$AI(l), o++;
    o < t.length && (this._$AR(i && i._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = ut(e).nextSibling;
      ut(e).remove(), e = o;
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
  constructor(e, t, i, o, l) {
    this.type = 1, this._$AH = Y, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = Y;
  }
  _$AI(e, t = this, i, o) {
    const l = this.strings;
    let p = !1;
    if (l === void 0) e = ce(this, e, t, 0), p = !me(e) || e !== this._$AH && e !== de, p && (this._$AH = e);
    else {
      const y = e;
      let c, C;
      for (e = l[0], c = 0; c < l.length - 1; c++) C = ce(this, y[i + c], t, c), C === de && (C = this._$AH[c]), p || (p = !me(C) || C !== this._$AH[c]), C === Y ? e = Y : e !== Y && (e += (C ?? "") + l[c + 1]), this._$AH[c] = C;
    }
    p && !o && this.j(e);
  }
  j(e) {
    e === Y ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class fr extends Se {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === Y ? void 0 : e;
  }
}
class yr extends Se {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== Y);
  }
}
class br extends Se {
  constructor(e, t, i, o, l) {
    super(e, t, i, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ce(this, e, t, 0) ?? Y) === de) return;
    const i = this._$AH, o = e === Y && i !== Y || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== Y && (i === Y || o);
    o && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class vr {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ce(this, e);
  }
}
const Ne = ve.litHtmlPolyfillSupport;
Ne == null || Ne(xe, $e), (ve.litHtmlVersions ?? (ve.litHtmlVersions = [])).push("3.3.3");
const gr = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = o = new $e(e.insertBefore(ge(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = globalThis;
class pe extends le {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = gr(t, this.renderRoot, this.renderOptions);
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
    return de;
  }
}
var xt;
pe._$litElement$ = !0, pe.finalized = !0, (xt = ne.litElementHydrateSupport) == null || xt.call(ne, { LitElement: pe });
const je = ne.litElementPolyfillSupport;
je == null || je({ LitElement: pe });
(ne.litElementVersions ?? (ne.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Oe = (r) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(r, e);
  }) : customElements.define(r, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mr = { attribute: !0, type: String, converter: Ce, reflect: !1, hasChanged: Be }, xr = (r = mr, e, t) => {
  const { kind: i, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), i === "accessor") {
    const { name: p } = t;
    return { set(y) {
      const c = e.get.call(this);
      e.set.call(this, y), this.requestUpdate(p, c, r, !0, y);
    }, init(y) {
      return y !== void 0 && this.C(p, void 0, r, y), y;
    } };
  }
  if (i === "setter") {
    const { name: p } = t;
    return function(y) {
      const c = this[p];
      e.call(this, y), this.requestUpdate(p, c, r, !0, y);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function m(r) {
  return (e, t) => typeof t == "object" ? xr(r, e, t) : ((i, o, l) => {
    const p = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, i), p ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
var $r = Object.defineProperty, wr = Object.getOwnPropertyDescriptor, j = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? wr(e, t) : e, l = r.length - 1, p; l >= 0; l--)
    (p = r[l]) && (o = (i ? p(e, t, o) : p(o)) || o);
  return i && o && $r(e, t, o), o;
};
const Pe = class Pe extends pe {
  constructor() {
    super(...arguments), this.responsiveProps = {}, this.activeEdge = "none", this.visible = !0, this.zIndex = 1, this.opacity = 1, this.customClass = "", this.width = "100%", this.height = "auto", this.margin = "0px", this.padding = "0px", this.direction = "row", this.justify = "flex-start", this.align = "stretch", this.gap = "16px", this.itemsPerRow = 1, this.backgroundColor = "transparent", this.borderRadius = "0px", this.elevation = "none";
  }
  get onClick() {
    return "click";
  }
  show() {
    this.visible = !0, this.requestUpdate();
  }
  hide() {
    this.visible = !1, this.requestUpdate();
  }
  // --- Responsive Engine ---
  /**
   * Generates a <style> tag with media queries based on responsiveProps.
   * Ensures parity between Studio and Renderer for mobile/tablet/desktop overrides.
   */
  renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return O``;
    const e = this.overridePrefix, t = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, i = {
      width: "width",
      height: "height",
      margin: "margin",
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      itemsPerRow: "items-per-row",
      columns: "items-per-row",
      // Alias support
      totalColumns: "total-columns",
      opacity: "opacity",
      zIndex: "z-index",
      backgroundColor: "background-color",
      borderRadius: "border-radius",
      elevation: "elevation",
      wrap: "wrap"
    };
    let o = "";
    return Object.entries(t).forEach(([l, p]) => {
      const y = this.responsiveProps[l];
      if (!y) return;
      let c = "";
      Object.entries(y).forEach(([C, E]) => {
        const $ = i[C];
        $ && (c += `--${e}-${$}-override: ${E};
`);
      }), c && (o += `${p} {
  :host {
    ${c}  }
}
`);
    }), o ? O`<style>${o}</style>` : O``;
  }
  // --- Visual Logic ---
  get overridePrefix() {
    return "zero-panel";
  }
  computeBaseStyles() {
    const e = this.overridePrefix;
    return [
      `--zero-width: var(--${e}-width-override, ${this.width})`,
      `--zero-height: var(--${e}-height-override, ${this.height})`,
      `--zero-margin: var(--${e}-margin-override, ${this.margin})`,
      `--zero-opacity: var(--${e}-opacity-override, ${this.opacity})`,
      `--zero-z-index: var(--${e}-z-index-override, ${this.zIndex})`,
      `--zero-pointer-events: ${this.visible ? "auto" : "none"}`,
      `display: ${this.visible ? "block" : "none"}`
    ].join(";");
  }
  computeInternalStyles() {
    const e = this.overridePrefix;
    return [
      `--zero-p-gap: var(--${e}-gap-override, ${this.gap})`,
      `--zero-p-padding: var(--${e}-padding-override, ${this.padding})`,
      `--zero-p-bg: var(--${e}-background-color-override, ${this.backgroundColor})`,
      `--zero-p-justify: var(--${e}-justify-override, ${this.justify})`,
      `--zero-p-align: var(--${e}-align-override, ${this.align})`,
      `--zero-p-border-radius: var(--${e}-border-radius-override, ${this.borderRadius})`,
      `--zero-p-shadow: var(--${e}-elevation-override, ${this.elevation})`,
      `--zero-p-direction: var(--${e}-direction-override, ${this.direction})`
    ].join(";");
  }
  computeColumnBasis() {
    const e = this.overridePrefix, t = `var(--${e}-gap-override, ${this.gap || "0px"})`, i = `var(--${e}-items-per-row-override, ${Math.max(1, Number(this.itemsPerRow) || 1)})`;
    return `calc((100% / ${i}) - ((${t} * (${i} - 1)) / ${i}))`;
  }
  get isStudio() {
    if (typeof window > "u") return !1;
    const e = window.location.search || "";
    if (e.includes("mode=preview") || e.includes("mode=live"))
      return !1;
    try {
      if (window.parent && window.parent.zeroThemeManager && !e.includes("mode=preview"))
        return !0;
    } catch {
    }
    return !!(window.zeroThemeManager && !e.includes("mode=preview"));
  }
  // --- Interaction (Studio) ---
  handleMouseMove(e) {
    if (!this.isStudio) return;
    const t = e.currentTarget.getBoundingClientRect(), i = (e.clientX - t.left) / t.width, o = (e.clientY - t.top) / t.height;
    this.direction === "row" ? i < 0.3 ? this.activeEdge = "left" : i > 0.7 ? this.activeEdge = "right" : this.activeEdge = "none" : o < 0.3 ? this.activeEdge = "top" : o > 0.7 ? this.activeEdge = "bottom" : this.activeEdge = "none";
  }
  handleMouseLeave() {
    this.isStudio && (this.activeEdge = "none");
  }
  renderDropIndicators() {
    return this.isStudio ? O`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    ` : O``;
  }
  renderHeader() {
    return O``;
  }
};
Pe.slots = [], Pe.styles = wt`
    :host {
      display: block;
      box-sizing: border-box;
      width: var(--zero-width, 100%);
      height: var(--zero-height, auto);
      margin: var(--zero-margin, 0);
      opacity: var(--zero-opacity, 1);
      z-index: var(--zero-z-index, auto);
      pointer-events: var(--zero-pointer-events, auto);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .zero-internal-container {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      gap: var(--zero-p-gap, 0px);
      row-gap: var(--zero-p-row-gap, var(--zero-p-gap, 0px));
      padding: var(--zero-p-padding, 0px);
      background: var(--zero-p-bg, transparent);
      border: var(--zero-p-border-width, 0px) solid var(--zero-p-border-color, transparent);
      border-radius: var(--zero-p-border-radius, 0px);
      box-shadow: var(--zero-p-shadow, none);
      justify-content: var(--zero-p-justify, flex-start);
      align-items: var(--zero-p-align, stretch);
      overflow: var(--zero-p-overflow, visible);
      flex-direction: var(--zero-p-direction, row);
    }

    .zero-internal-container[data-direction="column"] {
      flex-direction: column;
    }

    /* Header & Expansion */
    .zero-layout-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      background: rgba(0,0,0,0.02);
    }

    .zero-layout-header .label { flex: 1; font-weight: 600; font-size: 0.95rem; }
    .zero-layout-header .icon { font-size: 1.1rem; }
    .zero-layout-header .chevron { transition: transform 0.3s ease; font-size: 0.8rem; opacity: 0.5; }
    
    :host([expanded]) .zero-layout-header .chevron { transform: rotate(180deg); }

    .zero-layout-body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    }

    :host([expanded]) .zero-layout-body {
      grid-template-rows: 1fr;
    }

    .zero-layout-content,
    .tab-pane {
      min-height: 0;
      display: flex;
      flex-direction: var(--zero-p-direction, row);
      flex-wrap: wrap;
      gap: var(--zero-p-gap, 0px);
      row-gap: var(--zero-p-row-gap, var(--zero-p-gap, 0px));
      justify-content: var(--zero-p-justify, flex-start);
      align-items: var(--zero-p-align, stretch);
      width: 100%;
      box-sizing: border-box;
    }

    /* Spatial Drop Indicators (30/70 Rule) */
    .drop-indicator {
      position: absolute;
      pointer-events: none;
      background: var(--zs-primary, #0ea5e9);
      opacity: 0;
      transition: opacity 0.2s ease;
      z-index: 1000;
      display: block;
    }

    .drop-indicator.active { opacity: 0.3; }

    .drop-indicator.left { left: 0; top: 0; width: 30%; height: 100%; border-right: 3px solid var(--zs-primary); }
    .drop-indicator.right { right: 0; top: 0; width: 30%; height: 100%; border-left: 3px solid var(--zs-primary); }
    .drop-indicator.top { top: 0; left: 0; width: 100%; height: 30%; border-bottom: 3px solid var(--zs-primary); }
    .drop-indicator.bottom { bottom: 0; left: 0; width: 100%; height: 30%; border-top: 3px solid var(--zs-primary); }
  `;
let z = Pe;
j([
  m({ type: Object, attribute: "responsive-props" })
], z.prototype, "responsiveProps", 2);
j([
  m({ type: String })
], z.prototype, "activeEdge", 2);
j([
  m({ type: Boolean, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], z.prototype, "visible", 2);
j([
  m({ type: Number, reflect: !0, attribute: "z-index" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], z.prototype, "zIndex", 2);
j([
  m({ type: Number, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], z.prototype, "opacity", 2);
j([
  m({ type: String, attribute: "custom-class" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], z.prototype, "customClass", 2);
j([
  m({ type: String, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], z.prototype, "width", 2);
j([
  m({ type: String, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], z.prototype, "height", 2);
j([
  m({ type: String, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], z.prototype, "margin", 2);
j([
  m({ type: String, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], z.prototype, "padding", 2);
j([
  v({
    attributeType: f.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], z.prototype, "onClick", 1);
j([
  m({ type: String, reflect: !0 })
], z.prototype, "direction", 2);
j([
  m({ type: String, reflect: !0 })
], z.prototype, "justify", 2);
j([
  m({ type: String, reflect: !0 })
], z.prototype, "align", 2);
j([
  m({ type: String, reflect: !0 })
], z.prototype, "gap", 2);
j([
  m({ type: Number, reflect: !0, attribute: "items-per-row" })
], z.prototype, "itemsPerRow", 2);
j([
  m({ type: String, attribute: "background-color", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], z.prototype, "backgroundColor", 2);
j([
  m({ type: String, attribute: "border-radius", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], z.prototype, "borderRadius", 2);
j([
  m({ type: String, reflect: !0, attribute: "elevation" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.DROPDOWN,
    displayLabel: "Elevation (Shadow)",
    fieldMappings: "elevation",
    categoryLabel: "Appearance",
    optionItems: [
      { label: "None", value: "none" },
      { label: "Low", value: "0 2px 4px rgba(0,0,0,0.1)" },
      { label: "Medium", value: "0 4px 12px rgba(0,0,0,0.12)" },
      { label: "High", value: "0 12px 24px rgba(0,0,0,0.16)" }
    ]
  })
], z.prototype, "elevation", 2);
j([
  v({
    attributeType: f.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], z.prototype, "show", 1);
j([
  v({
    attributeType: f.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], z.prototype, "hide", 1);
var Er = Object.defineProperty, _r = Object.getOwnPropertyDescriptor, R = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? _r(e, t) : e, l = r.length - 1, p; l >= 0; l--)
    (p = r[l]) && (o = (i ? p(e, t, o) : p(o)) || o);
  return i && o && Er(e, t, o), o;
};
let W = class extends z {
  constructor() {
    super(), this.headerBg = "#f8fafc", this.headerColor = "#1e293b", this.borderColor = "#e2e8f0", this.enableHeader = !0, this.label = "Panel Header", this.icon = "📄", this.expandable = !0, this.expanded = !0, this.label = "Expansion Panel", this.icon = "⚡", this.expanded = !0, this.expandable = !0, this.backgroundColor = "#ffffff", this.borderRadius = "12px", this.padding = "16px", this.direction = "column";
  }
  get overridePrefix() {
    return "zero-expansion-panel";
  }
  get onExpand() {
    return "expand";
  }
  get onCollapse() {
    return "collapse";
  }
  expand() {
    this.expandable && (this.expanded = !0, this.dispatchEvent(new CustomEvent("expand")));
  }
  collapse() {
    this.expandable && (this.expanded = !1, this.dispatchEvent(new CustomEvent("collapse")));
  }
  toggleExpanded() {
    this.expanded ? this.collapse() : this.expand();
  }
  static getStudioTemplate(r) {
    var C, E, $, S, M, D, G;
    const e = ((C = r == null ? void 0 : r.props) == null ? void 0 : C.label) || "Expansion Panel", t = ((E = r == null ? void 0 : r.props) == null ? void 0 : E.icon) || "⚡", i = (($ = r == null ? void 0 : r.props) == null ? void 0 : $.headerBg) || "#f8fafc", o = ((S = r == null ? void 0 : r.props) == null ? void 0 : S.headerColor) || "#1e293b", l = ((M = r == null ? void 0 : r.props) == null ? void 0 : M.borderColor) || "#e2e8f0", p = ((D = r == null ? void 0 : r.props) == null ? void 0 : D.borderRadius) || "12px", y = ((G = r == null ? void 0 : r.props) == null ? void 0 : G.padding) || "16px", c = `
      <div style="border: 1px solid ${l}; border-radius: ${p}; background: #fff; overflow: hidden; width: 100%;">
        <div style="background: ${i}; color: ${o}; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; font-weight: 700; border-bottom: 1px solid ${l};">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>${t}</span>
            <span>${e}</span>
          </div>
          <span>▼</span>
        </div>
        <div style="padding: ${y}; min-height: 80px;">
          <zero-studio-slot name="default"></zero-studio-slot>
        </div>
      </div>
    `;
    return {
      kind: "panel",
      slots: [
        { id: "default", label: "Panel Content", dropzone: !0, anchor: "content", accepts: ["zero-section"] }
      ],
      templateHtml: c,
      badges: ["Expansion"],
      emptyText: "Drag and Drop Elements here"
    };
  }
  render() {
    return O`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div
          class="zero-internal-container"
          style="
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 0;
            gap: 0;
            border: 1px solid ${this.borderColor};
            border-radius: ${this.borderRadius};
            overflow: hidden;
            background: ${this.backgroundColor};
            box-shadow: var(--zero-expansion-panel-elevation-override, ${this.elevation});
            ${this.computeInternalStyles()}
          "
        >
          <div
            class="zero-layout-header"
            style="
              width: 100%;
              box-sizing: border-box;
              background: ${this.headerBg};
              color: ${this.headerColor};
              border-bottom: 1px solid ${this.borderColor};
            "
            @click=${this.toggleExpanded}
          >
            ${this.icon ? O`<span class="icon">${this.icon}</span>` : ""}
            <span class="label">${this.label}</span>
            ${this.expandable ? O`<span class="chevron">▼</span>` : ""}
          </div>
          <div class="zero-layout-body" style="width: 100%;">
            <div class="zero-layout-content" style="padding: ${this.padding}; min-height: ${this.expanded ? "80px" : "0px"};">
              <slot name="default"></slot>
              <slot></slot>
            </div>
          </div>
          ${this.renderDropIndicators()}
        </div>
      </div>
    `;
  }
};
W.slots = [
  { id: "default", label: "Panel Content", dropzone: !0, anchor: "content", accepts: ["zero-section"] }
];
R([
  m({ type: String, attribute: "header-bg" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
], W.prototype, "headerBg", 2);
R([
  m({ type: String, attribute: "header-color" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Header Text Color",
    fieldMappings: "headerColor",
    categoryLabel: "Appearance"
  })
], W.prototype, "headerColor", 2);
R([
  m({ type: String, attribute: "border-color" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
    categoryLabel: "Appearance"
  })
], W.prototype, "borderColor", 2);
R([
  m({ type: Boolean, reflect: !0, attribute: "enable-header" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader",
    categoryLabel: "Interaction"
  })
], W.prototype, "enableHeader", 2);
R([
  m({ type: String }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label",
    categoryLabel: "Interaction"
  })
], W.prototype, "label", 2);
R([
  m({ type: String }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Icon (Emoji)",
    fieldMappings: "icon",
    categoryLabel: "Interaction"
  })
], W.prototype, "icon", 2);
R([
  m({ type: Boolean, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable",
    categoryLabel: "Interaction"
  })
], W.prototype, "expandable", 2);
R([
  m({ type: Boolean, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded",
    categoryLabel: "Interaction"
  })
], W.prototype, "expanded", 2);
R([
  v({
    attributeType: f.EVENT,
    displayLabel: "On Expand",
    eventTrigger: "expand",
    categoryLabel: "Triggers"
  })
], W.prototype, "onExpand", 1);
R([
  v({
    attributeType: f.EVENT,
    displayLabel: "On Collapse",
    eventTrigger: "collapse",
    categoryLabel: "Triggers"
  })
], W.prototype, "onCollapse", 1);
R([
  v({
    attributeType: f.ACTION,
    displayLabel: "Expand Panel",
    categoryLabel: "Actions"
  })
], W.prototype, "expand", 1);
R([
  v({
    attributeType: f.ACTION,
    displayLabel: "Collapse Panel",
    categoryLabel: "Actions"
  })
], W.prototype, "collapse", 1);
R([
  v({
    attributeType: f.ACTION,
    displayLabel: "Toggle Expand/Collapse",
    categoryLabel: "Actions"
  })
], W.prototype, "toggleExpanded", 1);
W = R([
  Re({
    name: "zero-expansion-panel",
    version: "1.0.0",
    title: "Expansion Panel",
    elementSelector: "zero-expansion-panel",
    group: "Layout",
    iconName: "expansion-panel-icon.png"
  }),
  Oe("zero-expansion-panel")
], W);
let Q = class extends z {
  constructor() {
    super(), this.tabs = "Tab 1, Tab 2", this.activeIndex = 0, this.headerBg = "#f8fafc", this.activeTabColor = "#0e5aed", this.borderColor = "#e2e8f0", this.backgroundColor = "#ffffff", this.borderRadius = "12px", this.padding = "16px", this.direction = "column";
  }
  get overridePrefix() {
    return "zero-tab-panel";
  }
  getTabList() {
    return this.tabs.split(",").map((r) => r.trim()).filter(Boolean);
  }
  get onTabChange() {
    return "tabchange";
  }
  selectTab(r) {
    this.activeIndex = r, this.dispatchEvent(new CustomEvent("tabchange", { detail: { activeIndex: r } }));
  }
  static getStudioTemplate(r) {
    var E, $, S, M, D, G;
    const e = ((E = r == null ? void 0 : r.props) == null ? void 0 : E.tabs) || "Tab 1, Tab 2", t = Number((($ = r == null ? void 0 : r.props) == null ? void 0 : $.activeIndex) ?? 0), i = e.split(",").map((k) => k.trim()).filter(Boolean), o = i.map((k, L) => ({
      id: `tab-${L + 1}`,
      label: k,
      dropzone: !0,
      accepts: ["zero-section"]
    })), l = ((S = r == null ? void 0 : r.props) == null ? void 0 : S.headerBg) || "#f8fafc", p = ((M = r == null ? void 0 : r.props) == null ? void 0 : M.borderColor) || "#e2e8f0", y = ((D = r == null ? void 0 : r.props) == null ? void 0 : D.activeTabColor) || "#0e5aed", c = ((G = r == null ? void 0 : r.props) == null ? void 0 : G.padding) || "16px", C = `
      <div style="border:1px solid ${p}; border-radius:12px; background:#fff; overflow:hidden; width:100%;">
        <div style="background:${l}; display:flex; border-bottom:1px solid ${p}; width:100%; overflow-x:auto;">
          ${i.map((k, L) => {
      const F = t === L;
      return `
              <div data-tab-index="${L}" style="padding:12px 20px; font-weight:600; font-size:0.85rem; border-bottom:3px solid ${F ? y : "transparent"}; color:${F ? y : "#64748b"}; cursor:pointer;">
                ${k}
              </div>
            `;
    }).join("")}
        </div>
        <div style="padding:${c}; min-height:100px;">
          ${i.map((k, L) => `
              <div style="display:${t === L ? "block" : "none"};">
                <zero-studio-slot name="tab-${L + 1}"></zero-studio-slot>
              </div>
            `).join("")}
        </div>
      </div>
    `;
    return {
      kind: "panel",
      slots: o,
      templateHtml: C,
      badges: ["Tab Panel"],
      emptyText: "Drag and Drop Elements here"
    };
  }
  render() {
    const r = this.getTabList();
    return O`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" style="border: 1px solid rgba(0,0,0,0.08); overflow: hidden; ${this.computeInternalStyles()}">
          <div class="tabs-header-bar" style="background: ${this.headerBg}; display: flex; border-bottom: 1px solid ${this.borderColor || "rgba(0,0,0,0.08)"}; width: 100%; box-sizing: border-box; overflow-x: auto;">
            ${r.map((e, t) => {
      const i = this.activeIndex === t;
      return O`
                <button 
                  class="tab-btn" 
                  style="padding: 12px 20px; font-weight: 600; font-size: 0.85rem; border: none; background: transparent; cursor: pointer; transition: all 0.2s ease; border-bottom: 3px solid ${i ? this.activeTabColor : "transparent"}; color: ${i ? this.activeTabColor : "#64748b"};"
                  @click=${() => this.selectTab(t)}>
                  ${e}
                </button>
              `;
    })}
          </div>
          <div class="tabs-content-area" style="padding: ${this.padding}; width: 100%; box-sizing: border-box; min-height: 100px;">
            ${r.map((e, t) => {
      const i = this.activeIndex === t;
      return O`
                <div class="tab-pane" style="display: ${i ? "flex" : "none"}; width: 100%;">
                  <slot name="tab-${t + 1}"></slot>
                </div>
              `;
    })}
          </div>
          ${this.renderDropIndicators()}
        </div>
      </div>
    `;
  }
};
Q.slots = [];
R([
  m({ type: String }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.CHIPS,
    displayLabel: "Tabs",
    fieldMappings: "tabs",
    categoryLabel: "Tabs Config"
  })
], Q.prototype, "tabs", 2);
R([
  m({ type: Number, reflect: !0, attribute: "active-index" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.NUMBER_INPUT,
    displayLabel: "Active Tab Index",
    fieldMappings: "activeIndex",
    categoryLabel: "Tabs Config"
  })
], Q.prototype, "activeIndex", 2);
R([
  m({ type: String, attribute: "header-bg" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
], Q.prototype, "headerBg", 2);
R([
  m({ type: String, attribute: "active-tab-color" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Active Tab Underline Color",
    fieldMappings: "activeTabColor",
    categoryLabel: "Appearance"
  })
], Q.prototype, "activeTabColor", 2);
R([
  m({ type: String, attribute: "border-color" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
    categoryLabel: "Appearance"
  })
], Q.prototype, "borderColor", 2);
R([
  v({
    attributeType: f.EVENT,
    displayLabel: "On Tab Change",
    eventTrigger: "tabchange",
    categoryLabel: "Triggers"
  })
], Q.prototype, "onTabChange", 1);
R([
  v({
    attributeType: f.ACTION,
    displayLabel: "Select Tab",
    categoryLabel: "Actions"
  })
], Q.prototype, "selectTab", 1);
Q = R([
  Re({
    name: "zero-tab-panel",
    version: "1.0.0",
    title: "Tab Panel",
    elementSelector: "zero-tab-panel",
    group: "Layout",
    iconName: "tab-panel-icon.png"
  }),
  Oe("zero-tab-panel")
], Q);
let X = class extends z {
  constructor() {
    super(), this.steps = "Step 1, Step 2, Step 3", this.linear = !1, this.activeIndex = 0, this.headerBg = "#f8fafc", this.activeStepColor = "#0e5aed", this.borderColor = "#e2e8f0", this.backgroundColor = "#ffffff", this.borderRadius = "12px", this.padding = "16px", this.direction = "column";
  }
  get overridePrefix() {
    return "zero-stepper-panel";
  }
  getStepList() {
    return this.steps.split(",").map((r) => r.trim()).filter(Boolean);
  }
  get onStepChange() {
    return "stepchange";
  }
  // --- Actions ---
  selectStep(r) {
    this.linear && r > this.activeIndex + 1 || (this.activeIndex = r, this.dispatchEvent(new CustomEvent("stepchange", { detail: { activeIndex: r } })));
  }
  next() {
    const r = this.getStepList();
    this.activeIndex < r.length - 1 && this.selectStep(this.activeIndex + 1);
  }
  previous() {
    this.activeIndex > 0 && this.selectStep(this.activeIndex - 1);
  }
  reset() {
    this.selectStep(0);
  }
  static getStudioTemplate(r) {
    var E, $, S, M, D, G;
    const e = ((E = r == null ? void 0 : r.props) == null ? void 0 : E.steps) || "Step 1, Step 2, Step 3", t = Number((($ = r == null ? void 0 : r.props) == null ? void 0 : $.activeIndex) ?? 0), i = e.split(",").map((k) => k.trim()).filter(Boolean), o = i.map((k, L) => ({
      id: `step-${L + 1}`,
      label: k,
      dropzone: !0,
      accepts: ["zero-section"]
    })), l = ((S = r == null ? void 0 : r.props) == null ? void 0 : S.headerBg) || "#f8fafc", p = ((M = r == null ? void 0 : r.props) == null ? void 0 : M.borderColor) || "#e2e8f0", y = ((D = r == null ? void 0 : r.props) == null ? void 0 : D.activeStepColor) || "#0e5aed", c = ((G = r == null ? void 0 : r.props) == null ? void 0 : G.padding) || "16px", C = `
      <div style="border:1px solid ${p}; border-radius:12px; background:#fff; overflow:hidden; width:100%;">
        <div style="background:${l}; display:flex; align-items:center; justify-content:center; padding:16px; border-bottom:1px solid ${p}; width:100%; box-sizing:border-box; overflow-x:auto; gap:16px;">
          ${i.map((k, L) => {
      const F = t === L, K = L < t, ee = F ? y : K ? "#10b981" : "#e2e8f0", ue = F || K ? "#fff" : "#64748b", he = F ? "#0f172a" : "#64748b";
      return `
              <div data-tab-index="${L}" style="display:flex; align-items:center; gap:8px; cursor:pointer; flex-shrink:0;">
                <div style="width:28px; height:28px; border-radius:50%; background:${ee}; color:${ue}; display:flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:700;">
                  ${K ? "✓" : L + 1}
                </div>
                <span style="font-size:0.85rem; font-weight:600; color:${he};">${k}</span>
              </div>
              ${L < i.length - 1 ? `
                <div style="flex-grow:1; min-width:32px; height:2px; background:${K ? "#10b981" : "#e2e8f0"}; max-width:80px;"></div>
              ` : ""}
            `;
    }).join("")}
        </div>
        <div style="padding:${c}; min-height:100px;">
          ${i.map((k, L) => `
              <div style="display:${t === L ? "block" : "none"};">
                <zero-studio-slot name="step-${L + 1}"></zero-studio-slot>
              </div>
            `).join("")}
        </div>
      </div>
    `;
    return {
      kind: "panel",
      slots: o,
      templateHtml: C,
      badges: ["Stepper"],
      emptyText: "Drag and Drop Elements here"
    };
  }
  render() {
    const r = this.getStepList();
    return O`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" style="border: 1px solid rgba(0,0,0,0.08); overflow: hidden; ${this.computeInternalStyles()}">
          <div class="stepper-header-bar" style="background: ${this.headerBg}; display: flex; align-items: center; justify-content: center; padding: 16px; border-bottom: 1px solid ${this.borderColor || "rgba(0,0,0,0.08)"}; width: 100%; box-sizing: border-box; overflow-x: auto; gap: 16px;">
            ${r.map((e, t) => {
      const i = this.activeIndex === t, o = t < this.activeIndex, l = i ? this.activeStepColor : o ? "#10b981" : "#e2e8f0", p = i || o ? "#fff" : "#64748b", y = i ? "#0f172a" : "#64748b";
      return O`
                <div class="step-indicator-wrapper" style="display: flex; align-items: center; gap: 8px; cursor: pointer; flex-shrink: 0;" @click=${() => this.selectStep(t)}>
                  <div class="step-circle" style="width: 28px; height: 28px; border-radius: 50%; background: ${l}; color: ${p}; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; transition: all 0.2s ease;">
                    ${o ? "✓" : t + 1}
                  </div>
                  <span class="step-label" style="font-size: 0.85rem; font-weight: 600; color: ${y};">${e}</span>
                </div>
                ${t < r.length - 1 ? O`
                  <div class="step-line" style="flex-grow: 1; min-width: 32px; height: 2px; background: ${o ? "#10b981" : "#e2e8f0"}; max-width: 80px; transition: background 0.2s ease;"></div>
                ` : ""}
              `;
    })}
          </div>
          <div class="stepper-content-area" style="padding: ${this.padding}; width: 100%; box-sizing: border-box; min-height: 100px;">
            ${r.map((e, t) => {
      const i = this.activeIndex === t;
      return O`
                <div class="step-pane" style="display: ${i ? "flex" : "none"}; width: 100%;">
                  <slot name="step-${t + 1}"></slot>
                </div>
              `;
    })}
          </div>
          ${this.renderDropIndicators()}
        </div>
      </div>
    `;
  }
};
X.slots = [];
R([
  m({ type: String }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.CHIPS,
    displayLabel: "Steps",
    fieldMappings: "steps",
    categoryLabel: "Steps Config"
  })
], X.prototype, "steps", 2);
R([
  m({ type: Boolean, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Linear Mode",
    fieldMappings: "linear",
    categoryLabel: "Steps Config"
  })
], X.prototype, "linear", 2);
R([
  m({ type: Number, reflect: !0, attribute: "active-index" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.NUMBER_INPUT,
    displayLabel: "Active Step Index",
    fieldMappings: "activeIndex",
    categoryLabel: "Steps Config"
  })
], X.prototype, "activeIndex", 2);
R([
  m({ type: String, attribute: "header-bg" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
], X.prototype, "headerBg", 2);
R([
  m({ type: String, attribute: "active-step-color" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Active Step Color",
    fieldMappings: "activeStepColor",
    categoryLabel: "Appearance"
  })
], X.prototype, "activeStepColor", 2);
R([
  m({ type: String, attribute: "border-color" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
    categoryLabel: "Appearance"
  })
], X.prototype, "borderColor", 2);
R([
  v({
    attributeType: f.EVENT,
    displayLabel: "On Step Change",
    eventTrigger: "stepchange",
    categoryLabel: "Triggers"
  })
], X.prototype, "onStepChange", 1);
R([
  v({
    attributeType: f.ACTION,
    displayLabel: "Next Step",
    categoryLabel: "Actions"
  })
], X.prototype, "next", 1);
R([
  v({
    attributeType: f.ACTION,
    displayLabel: "Previous Step",
    categoryLabel: "Actions"
  })
], X.prototype, "previous", 1);
R([
  v({
    attributeType: f.ACTION,
    displayLabel: "Reset Stepper",
    categoryLabel: "Actions"
  })
], X.prototype, "reset", 1);
X = R([
  Re({
    name: "zero-stepper-panel",
    version: "1.0.0",
    title: "Stepper Panel",
    elementSelector: "zero-stepper-panel",
    group: "Layout",
    iconName: "stepper-panel-icon.png"
  }),
  Oe("zero-stepper-panel")
], X);
var Cr = Object.defineProperty, Tr = Object.getOwnPropertyDescriptor, H = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? Tr(e, t) : e, l = r.length - 1, p; l >= 0; l--)
    (p = r[l]) && (o = (i ? p(e, t, o) : p(o)) || o);
  return i && o && Cr(e, t, o), o;
};
const mt = {
  kind: "panel",
  generatedSlots: [
    {
      pattern: "col-{index}",
      anchor: "columns",
      countProp: "columns",
      labelPrefix: "Column",
      min: 1,
      dropzone: !0,
      accepts: ["zero-section"],
      direction: "row"
    }
  ],
  templateHtml: [
    "<div style='display:grid;gap:10px;padding:12px;border-radius:18px;border:1px solid rgba(14,165,233,0.22);background:linear-gradient(180deg,rgba(240,249,255,0.96),rgba(255,255,255,0.96));'>",
    "<div style='display:flex;justify-content:space-between;align-items:center;gap:8px;'>",
    "<strong style='font-size:0.92rem;color:var(--zs-text);'>{{display:label}}</strong>",
    "<span style='font-size:0.78rem;color:var(--zs-text-muted);'>{{totalColumns}} areas · {{itemsPerRow}} cols</span>",
    "</div>",
    "<div style='display:flex;gap:8px;flex-wrap:wrap;'>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(219,234,254,0.85);color:#1d4ed8;font-size:0.72rem;font-weight:700;'>label: {{mode:label}}</span>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(240,253,250,0.9);color:#0f766e;font-size:0.72rem;font-weight:700;'>justify: {{display:justify}}</span>",
    "</div>",
    "<zero-studio-slot-group name='columns'></zero-studio-slot-group>",
    "</div>"
  ].join(""),
  labelProp: "label",
  columnsProp: "totalColumns",
  emptyText: "Drag and Drop Elements here",
  dynamicHints: ["$.label", "$.section_title"],
  badges: ["Layout", "Columns"],
  metrics: [
    { label: "Flow", value: "$.panel.layout" },
    { label: "Items", value: "{{section.count}}" }
  ]
};
let I = class extends pe {
  constructor() {
    super(...arguments), this.responsiveProps = {}, this.totalColumns = 2, this.itemsPerRow = 2, this.direction = "column", this.justify = "flex-start", this.align = "stretch", this.gap = "16px", this.padding = "16px", this.backgroundColor = "#ffffff", this.borderColor = "#e2e8f0", this.borderRadius = "16px", this.visible = !0, this.enableHeader = !1, this.expanded = !0, this.expandable = !0, this.label = "Panel Header", this.icon = "📄", this.iconPosition = "start";
  }
  static getStudioTemplate(r) {
    var k;
    if (!r)
      return mt;
    const e = q(r.studio.display.label || "Panel");
    q(r.studio.mode.label || "static");
    const t = q(r.studio.display.direction || "row");
    q(r.studio.display.justify || "start");
    const i = q(r.studio.display.itemsPerRow || "2"), o = r.props.responsiveProps || ((k = r.studio.props) == null ? void 0 : k.responsiveProps) || {}, l = q(r.props.gap || "16px"), p = q(r.props.padding || "16px"), y = q(r.props.justify || "flex-start"), c = q(r.props.align || "stretch"), C = q(r.props.backgroundColor || "var(--uiv-surface-color, #ffffff)"), E = q(r.props.borderColor || "var(--uiv-border-color, #e2e8f0)"), $ = q(r.props.borderRadius || "8px"), S = String(r.props.enableHeader) === "true";
    let M = "";
    const D = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, G = {
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      columns: "items-per-row"
    };
    return Object.entries(D).forEach(([L, F]) => {
      const K = o[L];
      if (!K) return;
      let ee = "";
      Object.entries(K).forEach(([ue, he]) => {
        const we = G[ue];
        we && (ee += `--zero-panel-${we}-override: ${he};
`);
      }), K.columns && (ee += `zero-studio-slot-group[name='columns'] { grid-template-columns: repeat(${K.columns}, 1fr) !important; flex-direction: unset !important; }
`), ee && (M += `${F} { .studio-panel-container { ${ee} } }
`);
    }), {
      ...mt,
      generatedSlots: [
        {
          pattern: "col-{index}",
          anchor: "columns",
          countProp: "totalColumns",
          labelPrefix: t === "column" ? "Row" : "Column",
          min: 1,
          dropzone: !0,
          accepts: ["zero-section", "zero-stack", "zero-text", "zero-heading", "zero-image", "zero-button"],
          direction: "row"
          // Force default direction
        }
      ],
      templateHtml: [
        `<div class="studio-panel-container" style="
          --zero-items-per-row: var(--zero-panel-items-per-row-override, ${i});
          --zero-gap: var(--zero-panel-gap-override, ${l});
          --zero-panel-padding: var(--zero-panel-padding-override, ${p});
          --zero-justify: var(--zero-panel-justify-override, ${y});
          --zero-align: var(--zero-panel-align-override, ${c});
          --zero-panel-bg: ${C};
          --zero-panel-border-color: ${E};
          --zero-panel-radius: ${$};
          
          border: 1px solid var(--zero-panel-border-color);
          border-radius: var(--zero-panel-radius);
          background: var(--zero-panel-bg);
          overflow: hidden;
          width: 100%;
        ">`,
        S ? `<div style="display:flex;align-items:center;padding:12px 16px;border-bottom:1px solid var(--zero-panel-border-color);"><span style="flex:1;font-weight:600;font-size:0.94rem;color:var(--zero-text,#1e293b);">${e}</span></div>` : "",
        `<div style="padding: var(--zero-panel-padding); min-height: 120px;">
          <style>
            .studio-panel-container zero-studio-slot-group[name='columns'] {
              display: grid !important;
              grid-template-columns: repeat(var(--zero-items-per-row), 1fr) !important;
              gap: var(--zero-gap) !important;
              justify-content: var(--zero-justify) !important;
              align-items: var(--zero-align) !important;
            }
            ${M}
          </style>
          <zero-studio-slot-group name='columns'></zero-studio-slot-group>
        </div>`,
        "</div>"
      ].join("")
    };
  }
  handleSlotChange() {
    this.dispatchEvent(
      new CustomEvent("slotchange", {
        detail: { columns: this.totalColumns },
        bubbles: !0,
        composed: !0
      })
    );
  }
  toggleExpanded() {
    this.expandable && (this.expanded = !this.expanded, this.dispatchEvent(new CustomEvent("expansionchange", { detail: { expanded: this.expanded } })));
  }
  renderIcon() {
    return this.icon ? O`<span class="icon">${this.icon}</span>` : O``;
  }
  renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return O``;
    const r = "zero-panel", e = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, t = {
      width: "width",
      height: "height",
      margin: "margin",
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      itemsPerRow: "items-per-row",
      columns: "items-per-row",
      // Alias support
      totalColumns: "total-columns",
      opacity: "opacity",
      zIndex: "z-index",
      backgroundColor: "background-color",
      borderRadius: "border-radius",
      elevation: "elevation",
      wrap: "wrap"
    };
    let i = "";
    return Object.entries(e).forEach(([o, l]) => {
      const p = this.responsiveProps[o];
      if (!p) return;
      let y = "";
      Object.entries(p).forEach(([c, C]) => {
        const E = t[c];
        E && (y += `--${r}-${E}-override: ${C};
`);
      }), y && (i += `${l} {
  :host {
    ${y}  }
}
`);
    }), i ? O`<style>${i}</style>` : O``;
  }
  render() {
    if (!this.visible) return O``;
    const r = Math.max(1, Math.min(12, Number(this.totalColumns) || 1)), e = [
      `--zero-items-per-row:var(--zero-panel-items-per-row-override, ${this.itemsPerRow || 1})`,
      `--zero-gap:var(--zero-panel-gap-override, ${this.gap || "16px"})`,
      `--zero-panel-padding:var(--zero-panel-padding-override, ${this.padding || "16px"})`,
      `--zero-justify:var(--zero-panel-justify-override, ${this.justify || "flex-start"})`,
      `--zero-align:var(--zero-panel-align-override, ${this.align || "stretch"})`,
      `--zero-panel-bg:${this.backgroundColor || "#ffffff"}`,
      `--zero-panel-border-color:${this.borderColor || "#e2e8f0"}`,
      `--zero-panel-radius:${this.borderRadius || "16px"}`
    ].join(";");
    return O`
      ${this.renderResponsiveStyles()}
      <div class="panel-container">
        ${this.enableHeader ? O`
          <div class="header" @click=${this.toggleExpanded}>
            ${this.iconPosition === "start" ? this.renderIcon() : ""}
            <span class="label">${this.label}</span>
            ${this.iconPosition === "end" ? this.renderIcon() : ""}
            ${this.expandable ? O`<span class="toggle-chevron">▼</span>` : ""}
          </div>
        ` : ""}
        <div class="content-wrapper">
          <div class="content-inner">
            <div class="layout" data-direction=${this.direction || "row"} style=${e}>
              <style>
                .layout {
                  flex-direction: var(--zero-panel-direction-override, ${this.direction || "row"});
                }
              </style>
              ${Array.from({ length: r }).map(
      (t, i) => O`
                  <div class="column">
                    <slot name="col-${i + 1}" @slotchange=${i === 0 ? this.handleSlotChange : null}></slot>
                  </div>
                `
    )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
I.styles = wt`
    :host {
      display: block;
      width: var(--zero-width, 100%);
      padding: var(--zero-padding, 0);
      box-sizing: border-box;
      --zero-panel-header-bg: transparent;
      --zero-panel-header-padding: 12px 16px;
      --zero-panel-transition: 240ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .panel-container {
      border: 1px solid var(--zero-panel-border-color, var(--zero-border-soft, #e2e8f0));
      border-radius: var(--zero-panel-radius, 8px);
      overflow: hidden;
      background: var(--zero-panel-bg, var(--zero-surface, #ffffff));
    }

    .header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: var(--zero-panel-header-padding);
      background: var(--zero-panel-header-bg);
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid var(--zero-border-soft, #e2e8f0);
    }

    .header:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .label {
      flex: 1;
      font-weight: 600;
      font-size: 0.94rem;
      color: var(--zero-text, #1e293b);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }

    .toggle-chevron {
      transition: transform var(--zero-panel-transition);
      font-size: 0.8rem;
      opacity: 0.6;
    }

    :host([expanded]) .toggle-chevron {
      transform: rotate(180deg);
    }

    .content-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--zero-panel-transition);
    }

    :host([expanded]) .content-wrapper {
      grid-template-rows: 1fr;
    }

    .content-inner {
      overflow: hidden;
    }

    .layout {
      display: flex;
      flex-wrap: wrap;
      gap: var(--zero-gap, 16px);
      width: 100%;
      box-sizing: border-box;
      padding: var(--zero-panel-padding, 16px);
      min-height: 120px;
      justify-content: var(--zero-justify, flex-start);
      align-items: var(--zero-align, stretch);
    }

    .layout[data-direction="column"] {
      flex-direction: column;
    }

    .column {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      /* Calculate width based on items per row, minus the gap share */
      flex: 0 0 calc((100% / var(--zero-items-per-row, 1)) - ((var(--zero-gap, 16px) * (var(--zero-items-per-row, 1) - 1)) / var(--zero-items-per-row, 1)));
      min-height: 120px;
      min-width: 0;
      border: 1px solid transparent;
      border-radius: calc(var(--zero-panel-radius, 8px) - 2px);
      background: linear-gradient(180deg, rgba(248, 250, 252, 0.75), rgba(255, 255, 255, 0.92));
      box-sizing: border-box;
      transition: flex var(--zero-panel-transition), border-color var(--zero-panel-transition), background var(--zero-panel-transition);
    }

    .layout[data-direction="column"] .column {
      flex: 0 0 100%;
    }

    .column > slot {
      display: block;
      min-height: 120px;
  `;
H([
  m({ type: Object, attribute: "responsive-props" }),
  v({
    attributeType: f.PROPERTY,
    displayLabel: "Responsive Overrides",
    fieldMappings: "responsiveProps"
  })
], I.prototype, "responsiveProps", 2);
H([
  m({ type: Number, reflect: !0, attribute: "total-columns" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.NUMBER_INPUT,
    displayLabel: "Total Slots (Areas)",
    fieldMappings: "totalColumns"
  })
], I.prototype, "totalColumns", 2);
H([
  m({ type: Number, reflect: !0, attribute: "items-per-row" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Items per Row",
    fieldMappings: "itemsPerRow"
  })
], I.prototype, "itemsPerRow", 2);
H([
  m({ type: String, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Direction",
    fieldMappings: "direction",
    initialValue: "column",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], I.prototype, "direction", 2);
H([
  m({ type: String, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Justify",
    fieldMappings: "justify",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" },
      { label: "Space Evenly", value: "space-evenly" }
    ]
  })
], I.prototype, "justify", 2);
H([
  m({ type: String, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Align",
    fieldMappings: "align",
    optionItems: [
      { label: "Stretch", value: "stretch" },
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" }
    ]
  })
], I.prototype, "align", 2);
H([
  m({ type: String, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap"
  })
], I.prototype, "gap", 2);
H([
  m({ type: String, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding"
  })
], I.prototype, "padding", 2);
H([
  m({ type: String, attribute: "background-color", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Background",
    fieldMappings: "backgroundColor"
  })
], I.prototype, "backgroundColor", 2);
H([
  m({ type: String, attribute: "border-color", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor"
  })
], I.prototype, "borderColor", 2);
H([
  m({ type: String, attribute: "border-radius", reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Radius",
    fieldMappings: "borderRadius"
  })
], I.prototype, "borderRadius", 2);
H([
  m({ type: Boolean }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible"
  })
], I.prototype, "visible", 2);
H([
  m({ type: Boolean, attribute: "enable-header" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader"
  })
], I.prototype, "enableHeader", 2);
H([
  m({ type: Boolean, reflect: !0 }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded"
  })
], I.prototype, "expanded", 2);
H([
  m({ type: Boolean }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable"
  })
], I.prototype, "expandable", 2);
H([
  m({ type: String }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label"
  })
], I.prototype, "label", 2);
H([
  m({ type: String }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Icon (Emoji/HTML)",
    fieldMappings: "icon"
  })
], I.prototype, "icon", 2);
H([
  m({ type: String, attribute: "icon-position" }),
  v({
    attributeType: f.PROPERTY,
    uiComponentType: w.DROPDOWN,
    displayLabel: "Icon Position",
    fieldMappings: "iconPosition",
    optionItems: [
      { label: "Start", value: "start" },
      { label: "End", value: "end" }
    ]
  })
], I.prototype, "iconPosition", 2);
H([
  v({
    attributeType: f.EVENT,
    displayLabel: "On Slot Change",
    eventTrigger: "slotchange"
  })
], I.prototype, "handleSlotChange", 1);
I = H([
  Re({
    name: "zero-panel-layout",
    version: "1.0.0",
    title: "Panel Layout",
    elementSelector: "zero-panel-layout",
    group: "Layout",
    iconName: "panel-layout-icon.png"
  }),
  Zt(),
  Oe("zero-panel-layout")
], I);
function q(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  I as ZeroPanelLayout,
  mt as studioTemplate
};
