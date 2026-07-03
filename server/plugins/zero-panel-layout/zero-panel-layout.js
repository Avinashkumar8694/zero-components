var Xt = Object.defineProperty;
var Ft = (t, e, r) => e in t ? Xt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var nt = (t, e, r) => Ft(t, typeof e != "symbol" ? e + "" : e, r);
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
var lt;
(function(t) {
  (function(e) {
    var r = typeof globalThis == "object" ? globalThis : typeof st == "object" ? st : typeof self == "object" ? self : typeof this == "object" ? this : b(), i = o(t);
    typeof r.Reflect < "u" && (i = o(r.Reflect, i)), e(i, r), typeof r.Reflect > "u" && (r.Reflect = t);
    function o(c, T) {
      return function(E, $) {
        Object.defineProperty(c, E, { configurable: !0, writable: !0, value: $ }), T && T(E, $);
      };
    }
    function s() {
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
      return s() || p();
    }
  })(function(e, r) {
    var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", s = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", p = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", c = { __proto__: [] } instanceof Array, T = !b && !c, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return Le(/* @__PURE__ */ Object.create(null));
      } : c ? function() {
        return Le({ __proto__: null });
      } : function() {
        return Le({});
      },
      has: T ? function(a, n) {
        return i.call(a, n);
      } : function(a, n) {
        return n in a;
      },
      get: T ? function(a, n) {
        return i.call(a, n) ? a[n] : void 0;
      } : function(a, n) {
        return a[n];
      }
    }, $ = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ut(), M = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Vt(), H = typeof WeakMap == "function" ? WeakMap : Yt(), W = o ? Symbol.for("@reflect-metadata:registry") : void 0, N = Dt(), L = Ht(N);
    function F(a, n, l, d) {
      if (C(l)) {
        if (!Je(a))
          throw new TypeError();
        if (!Qe(n))
          throw new TypeError();
        return zt(a, n);
      } else {
        if (!Je(a))
          throw new TypeError();
        if (!B(n))
          throw new TypeError();
        if (!B(d) && !C(d) && !se(d))
          throw new TypeError();
        return se(d) && (d = void 0), l = J(l), At(a, n, l, d);
      }
    }
    e("decorate", F);
    function K(a, n) {
      function l(d, x) {
        if (!B(d))
          throw new TypeError();
        if (!C(x) && !Nt(x))
          throw new TypeError();
        Xe(a, n, d, x);
      }
      return l;
    }
    e("metadata", K);
    function ee(a, n, l, d) {
      if (!B(l))
        throw new TypeError();
      return C(d) || (d = J(d)), Xe(a, n, l, d);
    }
    e("defineMetadata", ee);
    function ue(a, n, l) {
      if (!B(n))
        throw new TypeError();
      return C(l) || (l = J(l)), Ye(a, n, l);
    }
    e("hasMetadata", ue);
    function he(a, n, l) {
      if (!B(n))
        throw new TypeError();
      return C(l) || (l = J(l)), ze(a, n, l);
    }
    e("hasOwnMetadata", he);
    function $e(a, n, l) {
      if (!B(n))
        throw new TypeError();
      return C(l) || (l = J(l)), We(a, n, l);
    }
    e("getMetadata", $e);
    function Pt(a, n, l) {
      if (!B(n))
        throw new TypeError();
      return C(l) || (l = J(l)), Ge(a, n, l);
    }
    e("getOwnMetadata", Pt);
    function Rt(a, n) {
      if (!B(a))
        throw new TypeError();
      return C(n) || (n = J(n)), Fe(a, n);
    }
    e("getMetadataKeys", Rt);
    function St(a, n) {
      if (!B(a))
        throw new TypeError();
      return C(n) || (n = J(n)), qe(a, n);
    }
    e("getOwnMetadataKeys", St);
    function Ot(a, n, l) {
      if (!B(n))
        throw new TypeError();
      if (C(l) || (l = J(l)), !B(n))
        throw new TypeError();
      C(l) || (l = J(l));
      var d = fe(
        n,
        l,
        /*Create*/
        !1
      );
      return C(d) ? !1 : d.OrdinaryDeleteMetadata(a, n, l);
    }
    e("deleteMetadata", Ot);
    function zt(a, n) {
      for (var l = a.length - 1; l >= 0; --l) {
        var d = a[l], x = d(n);
        if (!C(x) && !se(x)) {
          if (!Qe(x))
            throw new TypeError();
          n = x;
        }
      }
      return n;
    }
    function At(a, n, l, d) {
      for (var x = a.length - 1; x >= 0; --x) {
        var V = a[x], U = V(n, l, d);
        if (!C(U) && !se(U)) {
          if (!B(U))
            throw new TypeError();
          d = U;
        }
      }
      return d;
    }
    function Ye(a, n, l) {
      var d = ze(a, n, l);
      if (d)
        return !0;
      var x = Me(n);
      return se(x) ? !1 : Ye(a, x, l);
    }
    function ze(a, n, l) {
      var d = fe(
        n,
        l,
        /*Create*/
        !1
      );
      return C(d) ? !1 : Ze(d.OrdinaryHasOwnMetadata(a, n, l));
    }
    function We(a, n, l) {
      var d = ze(a, n, l);
      if (d)
        return Ge(a, n, l);
      var x = Me(n);
      if (!se(x))
        return We(a, x, l);
    }
    function Ge(a, n, l) {
      var d = fe(
        n,
        l,
        /*Create*/
        !1
      );
      if (!C(d))
        return d.OrdinaryGetOwnMetadata(a, n, l);
    }
    function Xe(a, n, l, d) {
      var x = fe(
        l,
        d,
        /*Create*/
        !0
      );
      x.OrdinaryDefineOwnMetadata(a, n, l, d);
    }
    function Fe(a, n) {
      var l = qe(a, n), d = Me(a);
      if (d === null)
        return l;
      var x = Fe(d, n);
      if (x.length <= 0)
        return l;
      if (l.length <= 0)
        return x;
      for (var V = new M(), U = [], _ = 0, u = l; _ < u.length; _++) {
        var f = u[_], v = V.has(f);
        v || (V.add(f), U.push(f));
      }
      for (var g = 0, P = x; g < P.length; g++) {
        var f = P[g], v = V.has(f);
        v || (V.add(f), U.push(f));
      }
      return U;
    }
    function qe(a, n) {
      var l = fe(
        a,
        n,
        /*create*/
        !1
      );
      return l ? l.OrdinaryOwnMetadataKeys(a, n) : [];
    }
    function Ke(a) {
      if (a === null)
        return 1;
      switch (typeof a) {
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
          return a === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function C(a) {
      return a === void 0;
    }
    function se(a) {
      return a === null;
    }
    function Mt(a) {
      return typeof a == "symbol";
    }
    function B(a) {
      return typeof a == "object" ? a !== null : typeof a == "function";
    }
    function Lt(a, n) {
      switch (Ke(a)) {
        case 0:
          return a;
        case 1:
          return a;
        case 2:
          return a;
        case 3:
          return a;
        case 4:
          return a;
        case 5:
          return a;
      }
      var l = "string", d = et(a, s);
      if (d !== void 0) {
        var x = d.call(a, l);
        if (B(x))
          throw new TypeError();
        return x;
      }
      return It(a);
    }
    function It(a, n) {
      var l, d;
      {
        var x = a.toString;
        if (Ee(x)) {
          var d = x.call(a);
          if (!B(d))
            return d;
        }
        var l = a.valueOf;
        if (Ee(l)) {
          var d = l.call(a);
          if (!B(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ze(a) {
      return !!a;
    }
    function kt(a) {
      return "" + a;
    }
    function J(a) {
      var n = Lt(a);
      return Mt(n) ? n : kt(n);
    }
    function Je(a) {
      return Array.isArray ? Array.isArray(a) : a instanceof Object ? a instanceof Array : Object.prototype.toString.call(a) === "[object Array]";
    }
    function Ee(a) {
      return typeof a == "function";
    }
    function Qe(a) {
      return typeof a == "function";
    }
    function Nt(a) {
      switch (Ke(a)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ae(a, n) {
      return a === n || a !== a && n !== n;
    }
    function et(a, n) {
      var l = a[n];
      if (l != null) {
        if (!Ee(l))
          throw new TypeError();
        return l;
      }
    }
    function tt(a) {
      var n = et(a, p);
      if (!Ee(n))
        throw new TypeError();
      var l = n.call(a);
      if (!B(l))
        throw new TypeError();
      return l;
    }
    function rt(a) {
      return a.value;
    }
    function it(a) {
      var n = a.next();
      return n.done ? !1 : n;
    }
    function ot(a) {
      var n = a.return;
      n && n.call(a);
    }
    function Me(a) {
      var n = Object.getPrototypeOf(a);
      if (typeof a != "function" || a === $ || n !== $)
        return n;
      var l = a.prototype, d = l && Object.getPrototypeOf(l);
      if (d == null || d === Object.prototype)
        return n;
      var x = d.constructor;
      return typeof x != "function" || x === a ? n : x;
    }
    function jt() {
      var a;
      !C(W) && typeof r.Reflect < "u" && !(W in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (a = Bt(r.Reflect));
      var n, l, d, x = new H(), V = {
        registerProvider: U,
        getProvider: u,
        setProvider: v
      };
      return V;
      function U(g) {
        if (!Object.isExtensible(V))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case a === g:
            break;
          case C(n):
            n = g;
            break;
          case n === g:
            break;
          case C(l):
            l = g;
            break;
          case l === g:
            break;
          default:
            d === void 0 && (d = new M()), d.add(g);
            break;
        }
      }
      function _(g, P) {
        if (!C(n)) {
          if (n.isProviderFor(g, P))
            return n;
          if (!C(l)) {
            if (l.isProviderFor(g, P))
              return n;
            if (!C(d))
              for (var A = tt(d); ; ) {
                var j = it(A);
                if (!j)
                  return;
                var Z = rt(j);
                if (Z.isProviderFor(g, P))
                  return ot(A), Z;
              }
          }
        }
        if (!C(a) && a.isProviderFor(g, P))
          return a;
      }
      function u(g, P) {
        var A = x.get(g), j;
        return C(A) || (j = A.get(P)), C(j) && (j = _(g, P), C(j) || (C(A) && (A = new S(), x.set(g, A)), A.set(P, j))), j;
      }
      function f(g) {
        if (C(g))
          throw new TypeError();
        return n === g || l === g || !C(d) && d.has(g);
      }
      function v(g, P, A) {
        if (!f(A))
          throw new Error("Metadata provider not registered.");
        var j = u(g, P);
        if (j !== A) {
          if (!C(j))
            return !1;
          var Z = x.get(g);
          C(Z) && (Z = new S(), x.set(g, Z)), Z.set(P, A);
        }
        return !0;
      }
    }
    function Dt() {
      var a;
      return !C(W) && B(r.Reflect) && Object.isExtensible(r.Reflect) && (a = r.Reflect[W]), C(a) && (a = jt()), !C(W) && B(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, W, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: a
      }), a;
    }
    function Ht(a) {
      var n = new H(), l = {
        isProviderFor: function(f, v) {
          var g = n.get(f);
          return C(g) ? !1 : g.has(v);
        },
        OrdinaryDefineOwnMetadata: U,
        OrdinaryHasOwnMetadata: x,
        OrdinaryGetOwnMetadata: V,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: u
      };
      return N.registerProvider(l), l;
      function d(f, v, g) {
        var P = n.get(f), A = !1;
        if (C(P)) {
          if (!g)
            return;
          P = new S(), n.set(f, P), A = !0;
        }
        var j = P.get(v);
        if (C(j)) {
          if (!g)
            return;
          if (j = new S(), P.set(v, j), !a.setProvider(f, v, l))
            throw P.delete(v), A && n.delete(f), new Error("Wrong provider for target.");
        }
        return j;
      }
      function x(f, v, g) {
        var P = d(
          v,
          g,
          /*Create*/
          !1
        );
        return C(P) ? !1 : Ze(P.has(f));
      }
      function V(f, v, g) {
        var P = d(
          v,
          g,
          /*Create*/
          !1
        );
        if (!C(P))
          return P.get(f);
      }
      function U(f, v, g, P) {
        var A = d(
          g,
          P,
          /*Create*/
          !0
        );
        A.set(f, v);
      }
      function _(f, v) {
        var g = [], P = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (C(P))
          return g;
        for (var A = P.keys(), j = tt(A), Z = 0; ; ) {
          var at = it(j);
          if (!at)
            return g.length = Z, g;
          var Wt = rt(at);
          try {
            g[Z] = Wt;
          } catch (Gt) {
            try {
              ot(j);
            } finally {
              throw Gt;
            }
          }
          Z++;
        }
      }
      function u(f, v, g) {
        var P = d(
          v,
          g,
          /*Create*/
          !1
        );
        if (C(P) || !P.delete(f))
          return !1;
        if (P.size === 0) {
          var A = n.get(v);
          C(A) || (A.delete(g), A.size === 0 && n.delete(A));
        }
        return !0;
      }
    }
    function Bt(a) {
      var n = a.defineMetadata, l = a.hasOwnMetadata, d = a.getOwnMetadata, x = a.getOwnMetadataKeys, V = a.deleteMetadata, U = new H(), _ = {
        isProviderFor: function(u, f) {
          var v = U.get(u);
          return !C(v) && v.has(f) ? !0 : x(u, f).length ? (C(v) && (v = new M(), U.set(u, v)), v.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: n,
        OrdinaryHasOwnMetadata: l,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: x,
        OrdinaryDeleteMetadata: V
      };
      return _;
    }
    function fe(a, n, l) {
      var d = N.getProvider(a, n);
      if (!C(d))
        return d;
      if (l) {
        if (N.setProvider(a, n, L))
          return L;
        throw new Error("Illegal state.");
      }
    }
    function Ut() {
      var a = {}, n = [], l = (
        /** @class */
        function() {
          function _(u, f, v) {
            this._index = 0, this._keys = u, this._values = f, this._selector = v;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[p] = function() {
            return this;
          }, _.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var f = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = n, this._values = n) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = n, this._values = n), u;
          }, _.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = n, this._values = n), { value: u, done: !0 };
          }, _;
        }()
      ), d = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = a, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(u) {
            var f = this._find(
              u,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, _.prototype.set = function(u, f) {
            var v = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[v] = f, this;
          }, _.prototype.delete = function(u) {
            var f = this._find(
              u,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var v = this._keys.length, g = f + 1; g < v; g++)
                this._keys[g - 1] = this._keys[g], this._values[g - 1] = this._values[g];
              return this._keys.length--, this._values.length--, Ae(u, this._cacheKey) && (this._cacheKey = a, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = a, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new l(this._keys, this._values, x);
          }, _.prototype.values = function() {
            return new l(this._keys, this._values, V);
          }, _.prototype.entries = function() {
            return new l(this._keys, this._values, U);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[p] = function() {
            return this.entries();
          }, _.prototype._find = function(u, f) {
            if (!Ae(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var v = 0; v < this._keys.length; v++)
                if (Ae(this._keys[v], u)) {
                  this._cacheIndex = v;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return d;
      function x(_, u) {
        return _;
      }
      function V(_, u) {
        return u;
      }
      function U(_, u) {
        return [_, u];
      }
    }
    function Vt() {
      var a = (
        /** @class */
        function() {
          function n() {
            this._map = new S();
          }
          return Object.defineProperty(n.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), n.prototype.has = function(l) {
            return this._map.has(l);
          }, n.prototype.add = function(l) {
            return this._map.set(l, l), this;
          }, n.prototype.delete = function(l) {
            return this._map.delete(l);
          }, n.prototype.clear = function() {
            this._map.clear();
          }, n.prototype.keys = function() {
            return this._map.keys();
          }, n.prototype.values = function() {
            return this._map.keys();
          }, n.prototype.entries = function() {
            return this._map.entries();
          }, n.prototype["@@iterator"] = function() {
            return this.keys();
          }, n.prototype[p] = function() {
            return this.keys();
          }, n;
        }()
      );
      return a;
    }
    function Yt() {
      var a = 16, n = E.create(), l = d();
      return (
        /** @class */
        function() {
          function u() {
            this._key = d();
          }
          return u.prototype.has = function(f) {
            var v = x(
              f,
              /*create*/
              !1
            );
            return v !== void 0 ? E.has(v, this._key) : !1;
          }, u.prototype.get = function(f) {
            var v = x(
              f,
              /*create*/
              !1
            );
            return v !== void 0 ? E.get(v, this._key) : void 0;
          }, u.prototype.set = function(f, v) {
            var g = x(
              f,
              /*create*/
              !0
            );
            return g[this._key] = v, this;
          }, u.prototype.delete = function(f) {
            var v = x(
              f,
              /*create*/
              !1
            );
            return v !== void 0 ? delete v[this._key] : !1;
          }, u.prototype.clear = function() {
            this._key = d();
          }, u;
        }()
      );
      function d() {
        var u;
        do
          u = "@@WeakMap@@" + _();
        while (E.has(n, u));
        return n[u] = !0, u;
      }
      function x(u, f) {
        if (!i.call(u, l)) {
          if (!f)
            return;
          Object.defineProperty(u, l, { value: E.create() });
        }
        return u[l];
      }
      function V(u, f) {
        for (var v = 0; v < f; ++v)
          u[v] = Math.random() * 255 | 0;
        return u;
      }
      function U(u) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : V(f, u), f;
        }
        return V(new Array(u), u);
      }
      function _() {
        var u = U(a);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var f = "", v = 0; v < a; ++v) {
          var g = u[v];
          (v === 4 || v === 6 || v === 8) && (f += "-"), g < 16 && (f += "0"), f += g.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function Le(a) {
      return a.__ = void 0, delete a.__, a;
    }
  });
})(lt || (lt = {}));
function qt(t) {
  return typeof t.name == "string" && typeof t.version == "string" && typeof t.title == "string" && typeof t.elementSelector == "string" && typeof t.group == "string" && typeof t.iconName == "string";
}
function Kt(t) {
  return function(e) {
    if (qt(t)) {
      const r = {
        version: t.version,
        name: t.name,
        title: t.title,
        selector: t.elementSelector,
        category: t.group,
        icon: t.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", r, e.prototype), globalThis.customElements) {
        const i = `${t.elementSelector}-${t.version}`;
        if (!customElements.get(i))
          try {
            customElements.define(i, e);
          } catch {
            try {
              customElements.define(i, class extends e {
              });
            } catch (s) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, s);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: r
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Re(t) {
  return Kt(t);
}
function Zt(t) {
  return function(e) {
    class r extends e {
      constructor() {
        super(...arguments);
        nt(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(s) {
        try {
          super.update(s);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var T;
        const s = document.querySelector('style.global-style[type="text/css"]'), p = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype, c = this.shadowRoot;
        if (!c) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (s && b) {
          const E = new CSSStyleSheet(), $ = (T = s.sheet) == null ? void 0 : T.cssRules;
          $ && (Array.from($).forEach((S) => E.insertRule(S.cssText)), c.adoptedStyleSheets = [...c.adoptedStyleSheets, E]);
        } else if (s) {
          const E = s.cloneNode(!0);
          c.appendChild(E);
        }
        p.forEach((E) => {
          const $ = E.cloneNode(!0);
          c.appendChild($);
        });
      }
    }
    return r;
  };
}
function Jt(t) {
  var r;
  if (((r = t == null ? void 0 : t.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Qt(t) {
  return function(e, r) {
    try {
      Jt(t);
      const i = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let o = !0;
      if (typeof r == "string") {
        try {
          o = typeof e[r] != "function";
        } catch {
          o = !0;
        }
        o && (t.fieldMappings = t.fieldMappings ?? r);
      }
      i.push(t), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function y(t) {
  return Qt(t);
}
var w;
(function(t) {
  t.TEXT_INPUT = "text-input", t.PASSWORD_INPUT = "password-input", t.DROPDOWN = "dropdown", t.CHECKBOX = "checkbox", t.RADIO_BUTTON = "radio-button", t.RANGE_SLIDER = "range-slider", t.FILE_INPUT = "file-input", t.DATE_PICKER = "date-picker", t.COLOR_PICKER = "color-picker", t.NUMBER_INPUT = "number-input", t.TEXTAREA = "textarea", t.MULTI_SELECT = "multi-select", t.POPUP_DROPDOWN = "popup-dropdown", t.LAYOUT_PICKER = "layout-picker", t.RESPONSIVE_OVERRIDE = "responsive-override", t.IMAGE_PICKER = "image-picker", t.CHIPS = "chips";
})(w || (w = {}));
var h;
(function(t) {
  t.PROPERTY = "property", t.EVENT = "event", t.ACTION = "action";
})(h || (h = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ce = globalThis, De = Ce.ShadowRoot && (Ce.ShadyCSS === void 0 || Ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, He = Symbol(), pt = /* @__PURE__ */ new WeakMap();
let $t = class {
  constructor(e, r, i) {
    if (this._$cssResult$ = !0, i !== He) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (De && e === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (e = pt.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && pt.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const er = (t) => new $t(typeof t == "string" ? t : t + "", void 0, He), Be = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((i, o, s) => i + ((p) => {
    if (p._$cssResult$ === !0) return p.cssText;
    if (typeof p == "number") return p;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + p + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + t[s + 1], t[0]);
  return new $t(r, t, He);
}, tr = (t, e) => {
  if (De) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const i = document.createElement("style"), o = Ce.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = r.cssText, t.appendChild(i);
  }
}, dt = De ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const i of e.cssRules) r += i.cssText;
  return er(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: rr, defineProperty: ir, getOwnPropertyDescriptor: or, getOwnPropertyNames: ar, getOwnPropertySymbols: nr, getPrototypeOf: sr } = Object, re = globalThis, ct = re.trustedTypes, lr = ct ? ct.emptyScript : "", Ie = re.reactiveElementPolyfillSupport, be = (t, e) => t, Te = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? lr : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let r = t;
  switch (e) {
    case Boolean:
      r = t !== null;
      break;
    case Number:
      r = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(t);
      } catch {
        r = null;
      }
  }
  return r;
} }, Ue = (t, e) => !rr(t, e), ut = { attribute: !0, type: String, converter: Te, reflect: !1, useDefault: !1, hasChanged: Ue };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), re.litPropertyMetadata ?? (re.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let le = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = ut) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, r);
      o !== void 0 && ir(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, r, i) {
    const { get: o, set: s } = or(this.prototype, e) ?? { get() {
      return this[r];
    }, set(p) {
      this[r] = p;
    } };
    return { get: o, set(p) {
      const b = o == null ? void 0 : o.call(this);
      s == null || s.call(this, p), this.requestUpdate(e, b, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ut;
  }
  static _$Ei() {
    if (this.hasOwnProperty(be("elementProperties"))) return;
    const e = sr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(be("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(be("properties"))) {
      const r = this.properties, i = [...ar(r), ...nr(r)];
      for (const o of i) this.createProperty(o, r[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [i, o] of r) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, i] of this.elementProperties) {
      const o = this._$Eu(r, i);
      o !== void 0 && this._$Eh.set(o, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const o of i) r.unshift(dt(o));
    } else e !== void 0 && r.push(dt(e));
    return r;
  }
  static _$Eu(e, r) {
    const i = r.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((r) => r(this));
  }
  addController(e) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((r = e.hostConnected) == null || r.call(e));
  }
  removeController(e) {
    var r;
    (r = this._$EO) == null || r.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const i of r.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return tr(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((r) => {
      var i;
      return (i = r.hostConnected) == null ? void 0 : i.call(r);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var i;
      return (i = r.hostDisconnected) == null ? void 0 : i.call(r);
    });
  }
  attributeChangedCallback(e, r, i) {
    this._$AK(e, i);
  }
  _$ET(e, r) {
    var s;
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const p = (((s = i.converter) == null ? void 0 : s.toAttribute) !== void 0 ? i.converter : Te).toAttribute(r, i.type);
      this._$Em = e, p == null ? this.removeAttribute(o) : this.setAttribute(o, p), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var s, p;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const b = i.getPropertyOptions(o), c = typeof b.converter == "function" ? { fromAttribute: b.converter } : ((s = b.converter) == null ? void 0 : s.fromAttribute) !== void 0 ? b.converter : Te;
      this._$Em = o;
      const T = c.fromAttribute(r, b.type);
      this[o] = T ?? ((p = this._$Ej) == null ? void 0 : p.get(o)) ?? T, this._$Em = null;
    }
  }
  requestUpdate(e, r, i, o = !1, s) {
    var p;
    if (e !== void 0) {
      const b = this.constructor;
      if (o === !1 && (s = this[e]), i ?? (i = b.getPropertyOptions(e)), !((i.hasChanged ?? Ue)(s, r) || i.useDefault && i.reflect && s === ((p = this._$Ej) == null ? void 0 : p.get(e)) && !this.hasAttribute(b._$Eu(e, i)))) return;
      this.C(e, r, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: i, reflect: o, wrapped: s }, p) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, p ?? r ?? this[e]), s !== !0 || p !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (r = void 0), this._$AL.set(e, r)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
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
        for (const [s, p] of this._$Ep) this[s] = p;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [s, p] of o) {
        const { wrapped: b } = p, c = this[s];
        b !== !0 || this._$AL.has(s) || c === void 0 || this.C(s, void 0, p, c);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (i = this._$EO) == null || i.forEach((o) => {
        var s;
        return (s = o.hostUpdate) == null ? void 0 : s.call(o);
      }), this.update(r)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$EO) == null || r.forEach((i) => {
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))), this._$EM();
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
const ve = globalThis, ht = (t) => t, _e = ve.trustedTypes, ft = _e ? _e.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Et = "$lit$", te = `lit$${Math.random().toFixed(9).slice(2)}$`, Ct = "?" + te, pr = `<${Ct}>`, ne = document, ge = () => ne.createComment(""), me = (t) => t === null || typeof t != "object" && typeof t != "function", Ve = Array.isArray, dr = (t) => Ve(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", ke = `[ 	
\f\r]`, ye = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, yt = /-->/g, bt = />/g, ie = RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), vt = /'/g, gt = /"/g, Tt = /^(?:script|style|textarea|title)$/i, cr = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), z = cr(1), de = Symbol.for("lit-noChange"), Y = Symbol.for("lit-nothing"), mt = /* @__PURE__ */ new WeakMap(), oe = ne.createTreeWalker(ne, 129);
function _t(t, e) {
  if (!Ve(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ft !== void 0 ? ft.createHTML(e) : e;
}
const ur = (t, e) => {
  const r = t.length - 1, i = [];
  let o, s = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", p = ye;
  for (let b = 0; b < r; b++) {
    const c = t[b];
    let T, E, $ = -1, S = 0;
    for (; S < c.length && (p.lastIndex = S, E = p.exec(c), E !== null); ) S = p.lastIndex, p === ye ? E[1] === "!--" ? p = yt : E[1] !== void 0 ? p = bt : E[2] !== void 0 ? (Tt.test(E[2]) && (o = RegExp("</" + E[2], "g")), p = ie) : E[3] !== void 0 && (p = ie) : p === ie ? E[0] === ">" ? (p = o ?? ye, $ = -1) : E[1] === void 0 ? $ = -2 : ($ = p.lastIndex - E[2].length, T = E[1], p = E[3] === void 0 ? ie : E[3] === '"' ? gt : vt) : p === gt || p === vt ? p = ie : p === yt || p === bt ? p = ye : (p = ie, o = void 0);
    const M = p === ie && t[b + 1].startsWith("/>") ? " " : "";
    s += p === ye ? c + pr : $ >= 0 ? (i.push(T), c.slice(0, $) + Et + c.slice($) + te + M) : c + te + ($ === -2 ? b : M);
  }
  return [_t(t, s + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class xe {
  constructor({ strings: e, _$litType$: r }, i) {
    let o;
    this.parts = [];
    let s = 0, p = 0;
    const b = e.length - 1, c = this.parts, [T, E] = ur(e, r);
    if (this.el = xe.createElement(T, i), oe.currentNode = this.el.content, r === 2 || r === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = oe.nextNode()) !== null && c.length < b; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(Et)) {
          const S = E[p++], M = o.getAttribute($).split(te), H = /([.?@])?(.*)/.exec(S);
          c.push({ type: 1, index: s, name: H[2], strings: M, ctor: H[1] === "." ? fr : H[1] === "?" ? yr : H[1] === "@" ? br : Se }), o.removeAttribute($);
        } else $.startsWith(te) && (c.push({ type: 6, index: s }), o.removeAttribute($));
        if (Tt.test(o.tagName)) {
          const $ = o.textContent.split(te), S = $.length - 1;
          if (S > 0) {
            o.textContent = _e ? _e.emptyScript : "";
            for (let M = 0; M < S; M++) o.append($[M], ge()), oe.nextNode(), c.push({ type: 2, index: ++s });
            o.append($[S], ge());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Ct) c.push({ type: 2, index: s });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(te, $ + 1)) !== -1; ) c.push({ type: 7, index: s }), $ += te.length - 1;
      }
      s++;
    }
  }
  static createElement(e, r) {
    const i = ne.createElement("template");
    return i.innerHTML = e, i;
  }
}
function ce(t, e, r = t, i) {
  var p, b;
  if (e === de) return e;
  let o = i !== void 0 ? (p = r._$Co) == null ? void 0 : p[i] : r._$Cl;
  const s = me(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== s && ((b = o == null ? void 0 : o._$AO) == null || b.call(o, !1), s === void 0 ? o = void 0 : (o = new s(t), o._$AT(t, r, i)), i !== void 0 ? (r._$Co ?? (r._$Co = []))[i] = o : r._$Cl = o), o !== void 0 && (e = ce(t, o._$AS(t, e.values), o, i)), e;
}
class hr {
  constructor(e, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: r }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? ne).importNode(r, !0);
    oe.currentNode = o;
    let s = oe.nextNode(), p = 0, b = 0, c = i[0];
    for (; c !== void 0; ) {
      if (p === c.index) {
        let T;
        c.type === 2 ? T = new we(s, s.nextSibling, this, e) : c.type === 1 ? T = new c.ctor(s, c.name, c.strings, this, e) : c.type === 6 && (T = new vr(s, this, e)), this._$AV.push(T), c = i[++b];
      }
      p !== (c == null ? void 0 : c.index) && (s = oe.nextNode(), p++);
    }
    return oe.currentNode = ne, o;
  }
  p(e) {
    let r = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, r), r += i.strings.length - 2) : i._$AI(e[r])), r++;
  }
}
class we {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, i, o) {
    this.type = 2, this._$AH = Y, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = r.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, r = this) {
    e = ce(this, e, r), me(e) ? e === Y || e == null || e === "" ? (this._$AH !== Y && this._$AR(), this._$AH = Y) : e !== this._$AH && e !== de && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : dr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== Y && me(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ne.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var s;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = xe.createElement(_t(i.h, i.h[0]), this.options)), i);
    if (((s = this._$AH) == null ? void 0 : s._$AD) === o) this._$AH.p(r);
    else {
      const p = new hr(o, this), b = p.u(this.options);
      p.p(r), this.T(b), this._$AH = p;
    }
  }
  _$AC(e) {
    let r = mt.get(e.strings);
    return r === void 0 && mt.set(e.strings, r = new xe(e)), r;
  }
  k(e) {
    Ve(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let i, o = 0;
    for (const s of e) o === r.length ? r.push(i = new we(this.O(ge()), this.O(ge()), this, this.options)) : i = r[o], i._$AI(s), o++;
    o < r.length && (this._$AR(i && i._$AB.nextSibling, o), r.length = o);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); e !== this._$AB; ) {
      const o = ht(e).nextSibling;
      ht(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cv = e, (r = this._$AP) == null || r.call(this, e));
  }
}
class Se {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, i, o, s) {
    this.type = 1, this._$AH = Y, this._$AN = void 0, this.element = e, this.name = r, this._$AM = o, this.options = s, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = Y;
  }
  _$AI(e, r = this, i, o) {
    const s = this.strings;
    let p = !1;
    if (s === void 0) e = ce(this, e, r, 0), p = !me(e) || e !== this._$AH && e !== de, p && (this._$AH = e);
    else {
      const b = e;
      let c, T;
      for (e = s[0], c = 0; c < s.length - 1; c++) T = ce(this, b[i + c], r, c), T === de && (T = this._$AH[c]), p || (p = !me(T) || T !== this._$AH[c]), T === Y ? e = Y : e !== Y && (e += (T ?? "") + s[c + 1]), this._$AH[c] = T;
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
  constructor(e, r, i, o, s) {
    super(e, r, i, o, s), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = ce(this, e, r, 0) ?? Y) === de) return;
    const i = this._$AH, o = e === Y && i !== Y || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== Y && (i === Y || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class vr {
  constructor(e, r, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ce(this, e);
  }
}
const Ne = ve.litHtmlPolyfillSupport;
Ne == null || Ne(xe, we), (ve.litHtmlVersions ?? (ve.litHtmlVersions = [])).push("3.3.3");
const gr = (t, e, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const s = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = o = new we(e.insertBefore(ge(), s), s, void 0, r ?? {});
  }
  return o._$AI(t), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis;
class pe extends le {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const e = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = e.firstChild), e;
  }
  update(e) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = gr(r, this.renderRoot, this.renderOptions);
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
var wt;
pe._$litElement$ = !0, pe.finalized = !0, (wt = ae.litElementHydrateSupport) == null || wt.call(ae, { LitElement: pe });
const je = ae.litElementPolyfillSupport;
je == null || je({ LitElement: pe });
(ae.litElementVersions ?? (ae.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Oe = (t) => (e, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mr = { attribute: !0, type: String, converter: Te, reflect: !1, hasChanged: Ue }, xr = (t = mr, e, r) => {
  const { kind: i, metadata: o } = r;
  let s = globalThis.litPropertyMetadata.get(o);
  if (s === void 0 && globalThis.litPropertyMetadata.set(o, s = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), i === "accessor") {
    const { name: p } = r;
    return { set(b) {
      const c = e.get.call(this);
      e.set.call(this, b), this.requestUpdate(p, c, t, !0, b);
    }, init(b) {
      return b !== void 0 && this.C(p, void 0, t, b), b;
    } };
  }
  if (i === "setter") {
    const { name: p } = r;
    return function(b) {
      const c = this[p];
      e.call(this, b), this.requestUpdate(p, c, t, !0, b);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function m(t) {
  return (e, r) => typeof r == "object" ? xr(t, e, r) : ((i, o, s) => {
    const p = o.hasOwnProperty(s);
    return o.constructor.createProperty(s, i), p ? Object.getOwnPropertyDescriptor(o, s) : void 0;
  })(t, e, r);
}
var wr = Object.defineProperty, $r = Object.getOwnPropertyDescriptor, k = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? $r(e, r) : e, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (o = (i ? p(e, r, o) : p(o)) || o);
  return i && o && wr(e, r, o), o;
};
const Pe = class Pe extends pe {
  constructor() {
    super(...arguments), this.responsiveProps = {}, this.activeEdge = "none", this.visible = !0, this.zIndex = 1, this.opacity = 1, this.customClass = "", this.width = "100%", this.height = "auto", this.margin = "0px", this.padding = "0px", this.direction = "row", this.justify = "flex-start", this.align = "stretch", this.gap = "16px", this.itemsPerRow = 1, this.wrap = "wrap", this.backgroundColor = "transparent", this.borderRadius = "0px", this.elevation = "none";
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
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return z``;
    const e = this.overridePrefix, r = {
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
    return Object.entries(r).forEach(([s, p]) => {
      const b = this.responsiveProps[s];
      if (!b) return;
      let c = "";
      Object.entries(b).forEach(([T, E]) => {
        const $ = i[T];
        $ && (c += `--${e}-${$}-override: ${E};
`);
      }), c && (o += `${p} {
  :host {
    ${c}  }
}
`);
    }), o ? z`<style>${o}</style>` : z``;
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
      `--zero-p-direction: var(--${e}-direction-override, ${this.direction})`,
      `--zero-p-wrap: var(--${e}-wrap-override, ${this.wrap || "wrap"})`
    ].join(";");
  }
  computeColumnBasis() {
    const e = this.overridePrefix, r = `var(--${e}-gap-override, ${this.gap || "0px"})`, i = `var(--${e}-items-per-row-override, ${Math.max(1, Number(this.itemsPerRow) || 1)})`;
    return `calc((100% / ${i}) - ((${r} * (${i} - 1)) / ${i}))`;
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
    const r = e.currentTarget.getBoundingClientRect(), i = (e.clientX - r.left) / r.width, o = (e.clientY - r.top) / r.height;
    this.direction === "row" ? i < 0.3 ? this.activeEdge = "left" : i > 0.7 ? this.activeEdge = "right" : this.activeEdge = "none" : o < 0.3 ? this.activeEdge = "top" : o > 0.7 ? this.activeEdge = "bottom" : this.activeEdge = "none";
  }
  handleMouseLeave() {
    this.isStudio && (this.activeEdge = "none");
  }
  renderDropIndicators() {
    return this.isStudio ? z`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    ` : z``;
  }
  renderHeader() {
    return z``;
  }
};
Pe.slots = [], Pe.styles = Be`
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

    slot {
      display: contents;
    }

    .zero-internal-container {
      position: relative;
      display: flex;
      flex-wrap: var(--zero-p-wrap, wrap);
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
      flex-wrap: var(--zero-p-wrap, wrap);
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
let O = Pe;
k([
  m({ type: Object, attribute: "responsive-props" })
], O.prototype, "responsiveProps", 2);
k([
  m({ type: String })
], O.prototype, "activeEdge", 2);
k([
  m({ type: Boolean, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], O.prototype, "visible", 2);
k([
  m({ type: Number, reflect: !0, attribute: "z-index" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], O.prototype, "zIndex", 2);
k([
  m({ type: Number, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], O.prototype, "opacity", 2);
k([
  m({ type: String, attribute: "custom-class" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], O.prototype, "customClass", 2);
k([
  m({ type: String, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], O.prototype, "width", 2);
k([
  m({ type: String, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], O.prototype, "height", 2);
k([
  m({ type: String, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], O.prototype, "margin", 2);
k([
  m({ type: String, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], O.prototype, "padding", 2);
k([
  y({
    attributeType: h.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], O.prototype, "onClick", 1);
k([
  m({ type: String, reflect: !0 })
], O.prototype, "direction", 2);
k([
  m({ type: String, reflect: !0 })
], O.prototype, "justify", 2);
k([
  m({ type: String, reflect: !0 })
], O.prototype, "align", 2);
k([
  m({ type: String, reflect: !0 })
], O.prototype, "gap", 2);
k([
  m({ type: Number, reflect: !0, attribute: "items-per-row" })
], O.prototype, "itemsPerRow", 2);
k([
  m({ type: String, reflect: !0 })
], O.prototype, "wrap", 2);
k([
  m({ type: String, attribute: "background-color", reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], O.prototype, "backgroundColor", 2);
k([
  m({ type: String, attribute: "border-radius", reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], O.prototype, "borderRadius", 2);
k([
  m({ type: String, reflect: !0, attribute: "elevation" }),
  y({
    attributeType: h.PROPERTY,
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
], O.prototype, "elevation", 2);
k([
  y({
    attributeType: h.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], O.prototype, "show", 1);
k([
  y({
    attributeType: h.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], O.prototype, "hide", 1);
var Er = Object.defineProperty, Cr = Object.getOwnPropertyDescriptor, R = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? Cr(e, r) : e, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (o = (i ? p(e, r, o) : p(o)) || o);
  return i && o && Er(e, r, o), o;
};
let G = class extends O {
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
  static getStudioTemplate(t) {
    var T, E, $, S, M, H, W;
    const e = ((T = t == null ? void 0 : t.props) == null ? void 0 : T.label) || "Expansion Panel", r = ((E = t == null ? void 0 : t.props) == null ? void 0 : E.icon) || "⚡", i = (($ = t == null ? void 0 : t.props) == null ? void 0 : $.headerBg) || "#f8fafc", o = ((S = t == null ? void 0 : t.props) == null ? void 0 : S.headerColor) || "#1e293b", s = ((M = t == null ? void 0 : t.props) == null ? void 0 : M.borderColor) || "#e2e8f0", p = ((H = t == null ? void 0 : t.props) == null ? void 0 : H.borderRadius) || "12px", b = ((W = t == null ? void 0 : t.props) == null ? void 0 : W.padding) || "16px", c = `
      <div style="border: 1px solid ${s}; border-radius: ${p}; background: #fff; overflow: hidden; width: 100%;">
        <div style="background: ${i}; color: ${o}; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; font-weight: 700; border-bottom: 1px solid ${s};">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>${r}</span>
            <span>${e}</span>
          </div>
          <span>▼</span>
        </div>
        <div style="padding: ${b}; min-height: 80px;">
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
    return z`
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
            ${this.icon ? z`<span class="icon">${this.icon}</span>` : ""}
            <span class="label">${this.label}</span>
            ${this.expandable ? z`<span class="chevron">▼</span>` : ""}
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
G.slots = [
  { id: "default", label: "Panel Content", dropzone: !0, anchor: "content", accepts: ["zero-section"] }
];
R([
  m({ type: String, attribute: "header-bg" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
], G.prototype, "headerBg", 2);
R([
  m({ type: String, attribute: "header-color" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Header Text Color",
    fieldMappings: "headerColor",
    categoryLabel: "Appearance"
  })
], G.prototype, "headerColor", 2);
R([
  m({ type: String, attribute: "border-color" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
    categoryLabel: "Appearance"
  })
], G.prototype, "borderColor", 2);
R([
  m({ type: Boolean, reflect: !0, attribute: "enable-header" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader",
    categoryLabel: "Interaction"
  })
], G.prototype, "enableHeader", 2);
R([
  m({ type: String }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label",
    categoryLabel: "Interaction"
  })
], G.prototype, "label", 2);
R([
  m({ type: String }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Icon (Emoji)",
    fieldMappings: "icon",
    categoryLabel: "Interaction"
  })
], G.prototype, "icon", 2);
R([
  m({ type: Boolean, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable",
    categoryLabel: "Interaction"
  })
], G.prototype, "expandable", 2);
R([
  m({ type: Boolean, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded",
    categoryLabel: "Interaction"
  })
], G.prototype, "expanded", 2);
R([
  y({
    attributeType: h.EVENT,
    displayLabel: "On Expand",
    eventTrigger: "expand",
    categoryLabel: "Triggers"
  })
], G.prototype, "onExpand", 1);
R([
  y({
    attributeType: h.EVENT,
    displayLabel: "On Collapse",
    eventTrigger: "collapse",
    categoryLabel: "Triggers"
  })
], G.prototype, "onCollapse", 1);
R([
  y({
    attributeType: h.ACTION,
    displayLabel: "Expand Panel",
    categoryLabel: "Actions"
  })
], G.prototype, "expand", 1);
R([
  y({
    attributeType: h.ACTION,
    displayLabel: "Collapse Panel",
    categoryLabel: "Actions"
  })
], G.prototype, "collapse", 1);
R([
  y({
    attributeType: h.ACTION,
    displayLabel: "Toggle Expand/Collapse",
    categoryLabel: "Actions"
  })
], G.prototype, "toggleExpanded", 1);
G = R([
  Re({
    name: "zero-expansion-panel",
    version: "1.0.0",
    title: "Expansion Panel",
    elementSelector: "zero-expansion-panel",
    group: "Layout",
    iconName: "expansion-panel-icon.png"
  }),
  Oe("zero-expansion-panel")
], G);
let Q = class extends O {
  constructor() {
    super(), this.tabs = "Tab 1, Tab 2", this.activeIndex = 0, this.headerBg = "#f8fafc", this.activeTabColor = "#0e5aed", this.borderColor = "#e2e8f0", this.backgroundColor = "#ffffff", this.borderRadius = "12px", this.padding = "16px", this.direction = "column";
  }
  get overridePrefix() {
    return "zero-tab-panel";
  }
  getTabList() {
    return this.tabs.split(",").map((t) => t.trim()).filter(Boolean);
  }
  get onTabChange() {
    return "tabchange";
  }
  selectTab(t) {
    this.activeIndex = t, this.dispatchEvent(new CustomEvent("tabchange", { detail: { activeIndex: t } }));
  }
  static getStudioTemplate(t) {
    var E, $, S, M, H, W;
    const e = ((E = t == null ? void 0 : t.props) == null ? void 0 : E.tabs) || "Tab 1, Tab 2", r = Number((($ = t == null ? void 0 : t.props) == null ? void 0 : $.activeIndex) ?? 0), i = e.split(",").map((N) => N.trim()).filter(Boolean), o = i.map((N, L) => ({
      id: `tab-${L + 1}`,
      label: N,
      dropzone: !0,
      accepts: ["zero-section"]
    })), s = ((S = t == null ? void 0 : t.props) == null ? void 0 : S.headerBg) || "#f8fafc", p = ((M = t == null ? void 0 : t.props) == null ? void 0 : M.borderColor) || "#e2e8f0", b = ((H = t == null ? void 0 : t.props) == null ? void 0 : H.activeTabColor) || "#0e5aed", c = ((W = t == null ? void 0 : t.props) == null ? void 0 : W.padding) || "16px", T = `
      <div style="border:1px solid ${p}; border-radius:12px; background:#fff; overflow:hidden; width:100%;">
        <div style="background:${s}; display:flex; border-bottom:1px solid ${p}; width:100%; overflow-x:auto;">
          ${i.map((N, L) => {
      const F = r === L;
      return `
              <div data-tab-index="${L}" style="padding:12px 20px; font-weight:600; font-size:0.85rem; border-bottom:3px solid ${F ? b : "transparent"}; color:${F ? b : "#64748b"}; cursor:pointer;">
                ${N}
              </div>
            `;
    }).join("")}
        </div>
        <div style="padding:${c}; min-height:100px;">
          ${i.map((N, L) => `
              <div style="display:${r === L ? "block" : "none"};">
                <zero-studio-slot name="tab-${L + 1}"></zero-studio-slot>
              </div>
            `).join("")}
        </div>
      </div>
    `;
    return {
      kind: "panel",
      slots: o,
      templateHtml: T,
      badges: ["Tab Panel"],
      emptyText: "Drag and Drop Elements here"
    };
  }
  render() {
    const t = this.getTabList();
    return z`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" style="border: 1px solid rgba(0,0,0,0.08); overflow: hidden; ${this.computeInternalStyles()}">
          <div class="tabs-header-bar" style="background: ${this.headerBg}; display: flex; border-bottom: 1px solid ${this.borderColor || "rgba(0,0,0,0.08)"}; width: 100%; box-sizing: border-box; overflow-x: auto;">
            ${t.map((e, r) => {
      const i = this.activeIndex === r;
      return z`
                <button 
                  class="tab-btn" 
                  style="padding: 12px 20px; font-weight: 600; font-size: 0.85rem; border: none; background: transparent; cursor: pointer; transition: all 0.2s ease; border-bottom: 3px solid ${i ? this.activeTabColor : "transparent"}; color: ${i ? this.activeTabColor : "#64748b"};"
                  @click=${() => this.selectTab(r)}>
                  ${e}
                </button>
              `;
    })}
          </div>
          <div class="tabs-content-area" style="padding: ${this.padding}; width: 100%; box-sizing: border-box; min-height: 100px;">
            ${t.map((e, r) => {
      const i = this.activeIndex === r;
      return z`
                <div class="tab-pane" style="display: ${i ? "flex" : "none"}; width: 100%;">
                  <slot name="tab-${r + 1}"></slot>
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
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.CHIPS,
    displayLabel: "Tabs",
    fieldMappings: "tabs",
    categoryLabel: "Tabs Config"
  })
], Q.prototype, "tabs", 2);
R([
  m({ type: Number, reflect: !0, attribute: "active-index" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.NUMBER_INPUT,
    displayLabel: "Active Tab Index",
    fieldMappings: "activeIndex",
    categoryLabel: "Tabs Config"
  })
], Q.prototype, "activeIndex", 2);
R([
  m({ type: String, attribute: "header-bg" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
], Q.prototype, "headerBg", 2);
R([
  m({ type: String, attribute: "active-tab-color" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Active Tab Underline Color",
    fieldMappings: "activeTabColor",
    categoryLabel: "Appearance"
  })
], Q.prototype, "activeTabColor", 2);
R([
  m({ type: String, attribute: "border-color" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
    categoryLabel: "Appearance"
  })
], Q.prototype, "borderColor", 2);
R([
  y({
    attributeType: h.EVENT,
    displayLabel: "On Tab Change",
    eventTrigger: "tabchange",
    categoryLabel: "Triggers"
  })
], Q.prototype, "onTabChange", 1);
R([
  y({
    attributeType: h.ACTION,
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
let X = class extends O {
  constructor() {
    super(), this.steps = "Step 1, Step 2, Step 3", this.linear = !1, this.activeIndex = 0, this.mobileLayout = "compact", this.desktopLayout = "horizontal", this.headerBg = "#f8fafc", this.activeStepColor = "#0e5aed", this.borderColor = "#e2e8f0", this.backgroundColor = "#ffffff", this.borderRadius = "12px", this.padding = "16px", this.direction = "column";
  }
  get overridePrefix() {
    return "zero-stepper-panel";
  }
  getStepList() {
    return this.steps.split(",").map((t) => t.trim()).filter(Boolean);
  }
  get onStepChange() {
    return "stepchange";
  }
  // --- Actions ---
  selectStep(t) {
    this.linear && t > this.activeIndex + 1 || (this.activeIndex = t, this.dispatchEvent(new CustomEvent("stepchange", { detail: { activeIndex: t } })));
  }
  next() {
    const t = this.getStepList();
    this.activeIndex < t.length - 1 && this.selectStep(this.activeIndex + 1);
  }
  previous() {
    this.activeIndex > 0 && this.selectStep(this.activeIndex - 1);
  }
  reset() {
    this.selectStep(0);
  }
  static getStudioTemplate(t) {
    var E, $, S, M, H, W;
    const e = ((E = t == null ? void 0 : t.props) == null ? void 0 : E.steps) || "Step 1, Step 2, Step 3", r = Number((($ = t == null ? void 0 : t.props) == null ? void 0 : $.activeIndex) ?? 0), i = e.split(",").map((N) => N.trim()).filter(Boolean), o = i.map((N, L) => ({
      id: `step-${L + 1}`,
      label: N,
      dropzone: !0,
      accepts: ["zero-section"]
    })), s = ((S = t == null ? void 0 : t.props) == null ? void 0 : S.headerBg) || "#f8fafc", p = ((M = t == null ? void 0 : t.props) == null ? void 0 : M.borderColor) || "#e2e8f0", b = ((H = t == null ? void 0 : t.props) == null ? void 0 : H.activeStepColor) || "#0e5aed", c = ((W = t == null ? void 0 : t.props) == null ? void 0 : W.padding) || "16px", T = `
      <div style="border:1px solid ${p}; border-radius:12px; background:#fff; overflow:hidden; width:100%;">
        <div style="background:${s}; display:flex; align-items:center; justify-content:center; padding:16px; border-bottom:1px solid ${p}; width:100%; box-sizing:border-box; overflow-x:auto; gap:16px;">
          ${i.map((N, L) => {
      const F = r === L, K = L < r, ee = F ? b : K ? "#10b981" : "#e2e8f0", ue = F || K ? "#fff" : "#64748b", he = F ? "#0f172a" : "#64748b";
      return `
              <div data-tab-index="${L}" style="display:flex; align-items:center; gap:8px; cursor:pointer; flex-shrink:0;">
                <div style="width:28px; height:28px; border-radius:50%; background:${ee}; color:${ue}; display:flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:700;">
                  ${K ? "✓" : L + 1}
                </div>
                <span style="font-size:0.85rem; font-weight:600; color:${he};">${N}</span>
              </div>
              ${L < i.length - 1 ? `
                <div style="flex-grow:1; min-width:32px; height:2px; background:${K ? "#10b981" : "#e2e8f0"}; max-width:80px;"></div>
              ` : ""}
            `;
    }).join("")}
        </div>
        <div style="padding:${c}; min-height:100px;">
          ${i.map((N, L) => `
              <div style="display:${r === L ? "block" : "none"};">
                <zero-studio-slot name="step-${L + 1}"></zero-studio-slot>
              </div>
            `).join("")}
        </div>
      </div>
    `;
    return {
      kind: "panel",
      slots: o,
      templateHtml: T,
      badges: ["Stepper"],
      emptyText: "Drag and Drop Elements here"
    };
  }
  computeInternalStyles() {
    this.overridePrefix;
    let t = super.computeInternalStyles();
    return t += `; --stepper-mobile-layout: ${this.mobileLayout}`, t;
  }
  render() {
    const t = this.getStepList(), e = t[this.activeIndex] || "";
    return z`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container layout-${this.desktopLayout} layout-responsive-${this.mobileLayout}" style="border: 1px solid rgba(0,0,0,0.08); overflow: hidden; ${this.computeInternalStyles()}">
          <div class="stepper-header-bar" style="background: ${this.headerBg}; display: flex; align-items: center; justify-content: center; padding: 16px; border-bottom: 1px solid ${this.borderColor || "rgba(0,0,0,0.08)"}; width: 100%; box-sizing: border-box; gap: 16px;">
            
            ${this.mobileLayout === "text-only" ? z`
              <div class="stepper-text-status" style="font-size: 0.95rem; font-weight: 700; color: #0f172a;">
                Step ${this.activeIndex + 1} of ${t.length}: ${e}
              </div>
            ` : ""}

            ${t.map((r, i) => {
      const o = this.activeIndex === i, s = i < this.activeIndex, p = o ? this.activeStepColor : s ? "#10b981" : "#e2e8f0", b = o || s ? "#fff" : "#64748b", c = o ? "#0f172a" : "#64748b";
      return z`
                <div class="step-indicator-wrapper" style="display: flex; align-items: center; gap: 8px; cursor: pointer; flex-shrink: 0;" @click=${() => this.selectStep(i)}>
                  <div class="step-circle" style="width: 28px; height: 28px; border-radius: 50%; background: ${p}; color: ${b}; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; transition: all 0.2s ease;">
                    ${s ? "✓" : i + 1}
                  </div>
                  <span class="step-label" style="font-size: 0.85rem; font-weight: 600; color: ${c};">${r}</span>
                </div>
                ${i < t.length - 1 ? z`
                  <div class="step-line" style="flex-grow: 1; min-width: 32px; height: 2px; background: ${s ? "#10b981" : "#e2e8f0"}; max-width: 80px; transition: background 0.2s ease;"></div>
                ` : ""}
              `;
    })}
          </div>
          <div class="stepper-content-area" style="padding: ${this.padding}; width: 100%; box-sizing: border-box; min-height: 100px;">
            ${t.map((r, i) => {
      const o = this.activeIndex === i;
      return z`
                <div class="step-pane" style="display: ${o ? "flex" : "none"}; width: 100%;">
                  <slot name="step-${i + 1}"></slot>
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
X.styles = [
  O.styles,
  Be`
      /* Responsive base styles */
      .stepper-header-bar {
        transition: all 0.3s ease;
      }

      /* Desktop / Default vertical layout support */
      .layout-vertical .stepper-header-bar {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }

      .layout-vertical .step-line {
        width: 2px;
        height: 24px;
        margin-left: 13px;
        margin-top: 4px;
        margin-bottom: 4px;
      }

      /* Compact mode - hide label text */
      .layout-compact .step-label {
        display: none;
      }

      /* Text mode - hide step lists, show simple status text */
      .layout-text-only .stepper-header-bar {
        justify-content: flex-start;
        font-weight: 700;
        font-size: 0.95rem;
      }

      /* Media Queries for Viewports using CSS custom properties for resolution layout overrides */
      @media screen and (max-width: 767px) {
        .zero-internal-container {
          --stepper-current-layout: var(--stepper-mobile-layout, compact);
        }
        
        .stepper-header-bar {
          flex-direction: var(--stepper-flex-direction, row);
          align-items: center;
          justify-content: center;
        }

        /* Responsive vertical overrides */
        .layout-responsive-vertical .stepper-header-bar {
          flex-direction: column;
          align-items: flex-start !important;
          gap: 12px;
        }
        .layout-responsive-vertical .step-line {
          width: 2px;
          height: 20px;
          margin-left: 13px;
        }

        /* Responsive compact overrides */
        .layout-responsive-compact .step-label {
          display: none;
        }

        /* Responsive text overrides */
        .layout-responsive-text-only .step-indicator-wrapper {
          display: none !important;
        }
        .layout-responsive-text-only .step-line {
          display: none !important;
        }
      }
    `
];
R([
  m({ type: String }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.CHIPS,
    displayLabel: "Steps",
    fieldMappings: "steps",
    categoryLabel: "Steps Config"
  })
], X.prototype, "steps", 2);
R([
  m({ type: Boolean, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Linear Mode",
    fieldMappings: "linear",
    categoryLabel: "Steps Config"
  })
], X.prototype, "linear", 2);
R([
  m({ type: Number, reflect: !0, attribute: "active-index" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.NUMBER_INPUT,
    displayLabel: "Active Step Index",
    fieldMappings: "activeIndex",
    categoryLabel: "Steps Config"
  })
], X.prototype, "activeIndex", 2);
R([
  m({ type: String, attribute: "mobile-layout" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.DROPDOWN,
    displayLabel: "Mobile Layout",
    fieldMappings: "mobileLayout",
    categoryLabel: "Responsive Layouts",
    optionItems: [
      { label: "Compact Circles (No Labels)", value: "compact" },
      { label: "Vertical Steps", value: "vertical" },
      { label: "Text Status Only", value: "text-only" },
      { label: "Standard Row (Overflow)", value: "horizontal" }
    ]
  })
], X.prototype, "mobileLayout", 2);
R([
  m({ type: String, attribute: "desktop-layout" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.DROPDOWN,
    displayLabel: "Desktop/Tablet Layout",
    fieldMappings: "desktopLayout",
    categoryLabel: "Responsive Layouts",
    optionItems: [
      { label: "Standard Row", value: "horizontal" },
      { label: "Vertical Steps", value: "vertical" },
      { label: "Compact Circles (No Labels)", value: "compact" }
    ]
  })
], X.prototype, "desktopLayout", 2);
R([
  m({ type: String, attribute: "header-bg" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
], X.prototype, "headerBg", 2);
R([
  m({ type: String, attribute: "active-step-color" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Active Step Color",
    fieldMappings: "activeStepColor",
    categoryLabel: "Appearance"
  })
], X.prototype, "activeStepColor", 2);
R([
  m({ type: String, attribute: "border-color" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
    categoryLabel: "Appearance"
  })
], X.prototype, "borderColor", 2);
R([
  y({
    attributeType: h.EVENT,
    displayLabel: "On Step Change",
    eventTrigger: "stepchange",
    categoryLabel: "Triggers"
  })
], X.prototype, "onStepChange", 1);
R([
  y({
    attributeType: h.ACTION,
    displayLabel: "Next Step",
    categoryLabel: "Actions"
  })
], X.prototype, "next", 1);
R([
  y({
    attributeType: h.ACTION,
    displayLabel: "Previous Step",
    categoryLabel: "Actions"
  })
], X.prototype, "previous", 1);
R([
  y({
    attributeType: h.ACTION,
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
var Tr = Object.defineProperty, _r = Object.getOwnPropertyDescriptor, D = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? _r(e, r) : e, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (o = (i ? p(e, r, o) : p(o)) || o);
  return i && o && Tr(e, r, o), o;
};
const xt = {
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
  static getStudioTemplate(t) {
    var N;
    if (!t)
      return xt;
    const e = q(t.studio.display.label || "Panel");
    q(t.studio.mode.label || "static");
    const r = q(t.studio.display.direction || "row");
    q(t.studio.display.justify || "start");
    const i = q(t.studio.display.itemsPerRow || "2"), o = t.props.responsiveProps || ((N = t.studio.props) == null ? void 0 : N.responsiveProps) || {}, s = q(t.props.gap || "16px"), p = q(t.props.padding || "16px"), b = q(t.props.justify || "flex-start"), c = q(t.props.align || "stretch"), T = q(t.props.backgroundColor || "var(--uiv-surface-color, #ffffff)"), E = q(t.props.borderColor || "var(--uiv-border-color, #e2e8f0)"), $ = q(t.props.borderRadius || "8px"), S = String(t.props.enableHeader) === "true";
    let M = "";
    const H = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, W = {
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      columns: "items-per-row"
    };
    return Object.entries(H).forEach(([L, F]) => {
      const K = o[L];
      if (!K) return;
      let ee = "";
      Object.entries(K).forEach(([ue, he]) => {
        const $e = W[ue];
        $e && (ee += `--zero-panel-${$e}-override: ${he};
`);
      }), K.columns && (ee += `zero-studio-slot-group[name='columns'] { grid-template-columns: repeat(${K.columns}, 1fr) !important; flex-direction: unset !important; }
`), ee && (M += `${F} { .studio-panel-container { ${ee} } }
`);
    }), {
      ...xt,
      generatedSlots: [
        {
          pattern: "col-{index}",
          anchor: "columns",
          countProp: "totalColumns",
          labelPrefix: r === "column" ? "Row" : "Column",
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
          --zero-gap: var(--zero-panel-gap-override, ${s});
          --zero-panel-padding: var(--zero-panel-padding-override, ${p});
          --zero-justify: var(--zero-panel-justify-override, ${b});
          --zero-align: var(--zero-panel-align-override, ${c});
          --zero-panel-bg: ${T};
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
    return this.icon ? z`<span class="icon">${this.icon}</span>` : z``;
  }
  renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return z``;
    const t = "zero-panel", e = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, r = {
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
    return Object.entries(e).forEach(([o, s]) => {
      const p = this.responsiveProps[o];
      if (!p) return;
      let b = "";
      Object.entries(p).forEach(([c, T]) => {
        const E = r[c];
        E && (b += `--${t}-${E}-override: ${T};
`);
      }), b && (i += `${s} {
  :host {
    ${b}  }
}
`);
    }), i ? z`<style>${i}</style>` : z``;
  }
  render() {
    if (!this.visible) return z``;
    const t = Math.max(1, Math.min(12, Number(this.totalColumns) || 1)), e = [
      `--zero-items-per-row:var(--zero-panel-items-per-row-override, ${this.itemsPerRow || 1})`,
      `--zero-gap:var(--zero-panel-gap-override, ${this.gap || "16px"})`,
      `--zero-panel-padding:var(--zero-panel-padding-override, ${this.padding || "16px"})`,
      `--zero-justify:var(--zero-panel-justify-override, ${this.justify || "flex-start"})`,
      `--zero-align:var(--zero-panel-align-override, ${this.align || "stretch"})`,
      `--zero-panel-bg:${this.backgroundColor || "#ffffff"}`,
      `--zero-panel-border-color:${this.borderColor || "#e2e8f0"}`,
      `--zero-panel-radius:${this.borderRadius || "16px"}`
    ].join(";");
    return z`
      ${this.renderResponsiveStyles()}
      <div class="panel-container">
        ${this.enableHeader ? z`
          <div class="header" @click=${this.toggleExpanded}>
            ${this.iconPosition === "start" ? this.renderIcon() : ""}
            <span class="label">${this.label}</span>
            ${this.iconPosition === "end" ? this.renderIcon() : ""}
            ${this.expandable ? z`<span class="toggle-chevron">▼</span>` : ""}
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
              ${Array.from({ length: t }).map(
      (r, i) => z`
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
I.styles = Be`
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
D([
  m({ type: Object, attribute: "responsive-props" }),
  y({
    attributeType: h.PROPERTY,
    displayLabel: "Responsive Overrides",
    fieldMappings: "responsiveProps"
  })
], I.prototype, "responsiveProps", 2);
D([
  m({ type: Number, reflect: !0, attribute: "total-columns" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.NUMBER_INPUT,
    displayLabel: "Total Slots (Areas)",
    fieldMappings: "totalColumns"
  })
], I.prototype, "totalColumns", 2);
D([
  m({ type: Number, reflect: !0, attribute: "items-per-row" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Items per Row",
    fieldMappings: "itemsPerRow"
  })
], I.prototype, "itemsPerRow", 2);
D([
  m({ type: String, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
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
D([
  m({ type: String, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
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
D([
  m({ type: String, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
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
D([
  m({ type: String, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap"
  })
], I.prototype, "gap", 2);
D([
  m({ type: String, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding"
  })
], I.prototype, "padding", 2);
D([
  m({ type: String, attribute: "background-color", reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Background",
    fieldMappings: "backgroundColor"
  })
], I.prototype, "backgroundColor", 2);
D([
  m({ type: String, attribute: "border-color", reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor"
  })
], I.prototype, "borderColor", 2);
D([
  m({ type: String, attribute: "border-radius", reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Radius",
    fieldMappings: "borderRadius"
  })
], I.prototype, "borderRadius", 2);
D([
  m({ type: Boolean }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible"
  })
], I.prototype, "visible", 2);
D([
  m({ type: Boolean, attribute: "enable-header" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader"
  })
], I.prototype, "enableHeader", 2);
D([
  m({ type: Boolean, reflect: !0 }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded"
  })
], I.prototype, "expanded", 2);
D([
  m({ type: Boolean }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable"
  })
], I.prototype, "expandable", 2);
D([
  m({ type: String }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label"
  })
], I.prototype, "label", 2);
D([
  m({ type: String }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.TEXT_INPUT,
    displayLabel: "Icon (Emoji/HTML)",
    fieldMappings: "icon"
  })
], I.prototype, "icon", 2);
D([
  m({ type: String, attribute: "icon-position" }),
  y({
    attributeType: h.PROPERTY,
    uiComponentType: w.DROPDOWN,
    displayLabel: "Icon Position",
    fieldMappings: "iconPosition",
    optionItems: [
      { label: "Start", value: "start" },
      { label: "End", value: "end" }
    ]
  })
], I.prototype, "iconPosition", 2);
D([
  y({
    attributeType: h.EVENT,
    displayLabel: "On Slot Change",
    eventTrigger: "slotchange"
  })
], I.prototype, "handleSlotChange", 1);
I = D([
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
function q(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  I as ZeroPanelLayout,
  xt as studioTemplate
};
