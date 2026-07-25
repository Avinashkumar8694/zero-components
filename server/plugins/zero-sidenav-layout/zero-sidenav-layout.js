var $r = Object.defineProperty;
var Tr = (t, e, r) => e in t ? $r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var qt = (t, e, r) => Tr(t, typeof e != "symbol" ? e + "" : e, r);
var Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Qt;
(function(t) {
  (function(e) {
    var r = typeof globalThis == "object" ? globalThis : typeof Zt == "object" ? Zt : typeof self == "object" ? self : typeof this == "object" ? this : h(), i = o(t);
    typeof r.Reflect < "u" && (i = o(r.Reflect, i)), e(i, r), typeof r.Reflect > "u" && (r.Reflect = t);
    function o(p, _) {
      return function(P, S) {
        Object.defineProperty(p, P, { configurable: !0, writable: !0, value: S }), _ && _(P, S);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function s() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function h() {
      return l() || s();
    }
  })(function(e, r) {
    var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", s = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", h = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, _ = !h && !p, P = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: h ? function() {
        return Je(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Je({ __proto__: null });
      } : function() {
        return Je({});
      },
      has: _ ? function(n, a) {
        return i.call(n, a);
      } : function(n, a) {
        return a in n;
      },
      get: _ ? function(n, a) {
        return i.call(n, a) ? n[a] : void 0;
      } : function(n, a) {
        return n[a];
      }
    }, S = Object.getPrototypeOf(Function), B = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : vt(), N = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : gt(), Y = typeof WeakMap == "function" ? WeakMap : mt(), q = o ? Symbol.for("@reflect-metadata:registry") : void 0, ee = ft(), Z = bt(ee);
    function ie(n, a, d, c) {
      if (k(d)) {
        if (!Ee(n))
          throw new TypeError();
        if (!Fe(a))
          throw new TypeError();
        return te(n, a);
      } else {
        if (!Ee(n))
          throw new TypeError();
        if (!H(a))
          throw new TypeError();
        if (!H(c) && !k(c) && !re(c))
          throw new TypeError();
        return re(c) && (c = void 0), d = G(d), W(n, a, d, c);
      }
    }
    e("decorate", ie);
    function R(n, a) {
      function d(c, C) {
        if (!H(c))
          throw new TypeError();
        if (!k(C) && !ct(C))
          throw new TypeError();
        De(n, a, c, C);
      }
      return d;
    }
    e("metadata", R);
    function M(n, a, d, c) {
      if (!H(d))
        throw new TypeError();
      return k(c) || (c = G(c)), De(n, a, d, c);
    }
    e("defineMetadata", M);
    function Q(n, a, d) {
      if (!H(a))
        throw new TypeError();
      return k(d) || (d = G(d)), F(n, a, d);
    }
    e("hasMetadata", Q);
    function X(n, a, d) {
      if (!H(a))
        throw new TypeError();
      return k(d) || (d = G(d)), Ce(n, a, d);
    }
    e("hasOwnMetadata", X);
    function J(n, a, d) {
      if (!H(a))
        throw new TypeError();
      return k(d) || (d = G(d)), oe(n, a, d);
    }
    e("getMetadata", J);
    function ve(n, a, d) {
      if (!H(a))
        throw new TypeError();
      return k(d) || (d = G(d)), ne(n, a, d);
    }
    e("getOwnMetadata", ve);
    function ge(n, a) {
      if (!H(n))
        throw new TypeError();
      return k(a) || (a = G(a)), de(n, a);
    }
    e("getMetadataKeys", ge);
    function je(n, a) {
      if (!H(n))
        throw new TypeError();
      return k(a) || (a = G(a)), _e(n, a);
    }
    e("getOwnMetadataKeys", je);
    function le(n, a, d) {
      if (!H(a))
        throw new TypeError();
      if (k(d) || (d = G(d)), !H(a))
        throw new TypeError();
      k(d) || (d = G(d));
      var c = ce(
        a,
        d,
        /*Create*/
        !1
      );
      return k(c) ? !1 : c.OrdinaryDeleteMetadata(n, a, d);
    }
    e("deleteMetadata", le);
    function te(n, a) {
      for (var d = n.length - 1; d >= 0; --d) {
        var c = n[d], C = c(a);
        if (!k(C) && !re(C)) {
          if (!Fe(C))
            throw new TypeError();
          a = C;
        }
      }
      return a;
    }
    function W(n, a, d, c) {
      for (var C = n.length - 1; C >= 0; --C) {
        var D = n[C], j = D(a, d, c);
        if (!k(j) && !re(j)) {
          if (!H(j))
            throw new TypeError();
          c = j;
        }
      }
      return c;
    }
    function F(n, a, d) {
      var c = Ce(n, a, d);
      if (c)
        return !0;
      var C = ke(a);
      return re(C) ? !1 : F(n, C, d);
    }
    function Ce(n, a, d) {
      var c = ce(
        a,
        d,
        /*Create*/
        !1
      );
      return k(c) ? !1 : We(c.OrdinaryHasOwnMetadata(n, a, d));
    }
    function oe(n, a, d) {
      var c = Ce(n, a, d);
      if (c)
        return ne(n, a, d);
      var C = ke(a);
      if (!re(C))
        return oe(n, C, d);
    }
    function ne(n, a, d) {
      var c = ce(
        a,
        d,
        /*Create*/
        !1
      );
      if (!k(c))
        return c.OrdinaryGetOwnMetadata(n, a, d);
    }
    function De(n, a, d, c) {
      var C = ce(
        d,
        c,
        /*Create*/
        !0
      );
      C.OrdinaryDefineOwnMetadata(n, a, d, c);
    }
    function de(n, a) {
      var d = _e(n, a), c = ke(n);
      if (c === null)
        return d;
      var C = de(c, a);
      if (C.length <= 0)
        return d;
      if (d.length <= 0)
        return C;
      for (var D = new N(), j = [], A = 0, u = d; A < u.length; A++) {
        var f = u[A], g = D.has(f);
        g || (D.add(f), j.push(f));
      }
      for (var m = 0, O = C; m < O.length; m++) {
        var f = O[m], g = D.has(f);
        g || (D.add(f), j.push(f));
      }
      return j;
    }
    function _e(n, a) {
      var d = ce(
        n,
        a,
        /*create*/
        !1
      );
      return d ? d.OrdinaryOwnMetadataKeys(n, a) : [];
    }
    function Ue(n) {
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
    function k(n) {
      return n === void 0;
    }
    function re(n) {
      return n === null;
    }
    function pe(n) {
      return typeof n == "symbol";
    }
    function H(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function lt(n, a) {
      switch (Ue(n)) {
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
      var d = "string", c = Ve(n, l);
      if (c !== void 0) {
        var C = c.call(n, d);
        if (H(C))
          throw new TypeError();
        return C;
      }
      return dt(n);
    }
    function dt(n, a) {
      var d, c;
      {
        var C = n.toString;
        if (me(C)) {
          var c = C.call(n);
          if (!H(c))
            return c;
        }
        var d = n.valueOf;
        if (me(d)) {
          var c = d.call(n);
          if (!H(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function We(n) {
      return !!n;
    }
    function pt(n) {
      return "" + n;
    }
    function G(n) {
      var a = lt(n);
      return pe(a) ? a : pt(a);
    }
    function Ee(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function me(n) {
      return typeof n == "function";
    }
    function Fe(n) {
      return typeof n == "function";
    }
    function ct(n) {
      switch (Ue(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function xe(n, a) {
      return n === a || n !== n && a !== a;
    }
    function Ve(n, a) {
      var d = n[a];
      if (d != null) {
        if (!me(d))
          throw new TypeError();
        return d;
      }
    }
    function ht(n) {
      var a = Ve(n, s);
      if (!me(a))
        throw new TypeError();
      var d = a.call(n);
      if (!H(d))
        throw new TypeError();
      return d;
    }
    function Ye(n) {
      return n.value;
    }
    function Xe(n) {
      var a = n.next();
      return a.done ? !1 : a;
    }
    function Ge(n) {
      var a = n.return;
      a && a.call(n);
    }
    function ke(n) {
      var a = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === S || a !== S)
        return a;
      var d = n.prototype, c = d && Object.getPrototypeOf(d);
      if (c == null || c === Object.prototype)
        return a;
      var C = c.constructor;
      return typeof C != "function" || C === n ? a : C;
    }
    function ut() {
      var n;
      !k(q) && typeof r.Reflect < "u" && !(q in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (n = yt(r.Reflect));
      var a, d, c, C = new Y(), D = {
        registerProvider: j,
        getProvider: u,
        setProvider: g
      };
      return D;
      function j(m) {
        if (!Object.isExtensible(D))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === m:
            break;
          case k(a):
            a = m;
            break;
          case a === m:
            break;
          case k(d):
            d = m;
            break;
          case d === m:
            break;
          default:
            c === void 0 && (c = new N()), c.add(m);
            break;
        }
      }
      function A(m, O) {
        if (!k(a)) {
          if (a.isProviderFor(m, O))
            return a;
          if (!k(d)) {
            if (d.isProviderFor(m, O))
              return a;
            if (!k(c))
              for (var L = ht(c); ; ) {
                var I = Xe(L);
                if (!I)
                  return;
                var K = Ye(I);
                if (K.isProviderFor(m, O))
                  return Ge(L), K;
              }
          }
        }
        if (!k(n) && n.isProviderFor(m, O))
          return n;
      }
      function u(m, O) {
        var L = C.get(m), I;
        return k(L) || (I = L.get(O)), k(I) && (I = A(m, O), k(I) || (k(L) && (L = new B(), C.set(m, L)), L.set(O, I))), I;
      }
      function f(m) {
        if (k(m))
          throw new TypeError();
        return a === m || d === m || !k(c) && c.has(m);
      }
      function g(m, O, L) {
        if (!f(L))
          throw new Error("Metadata provider not registered.");
        var I = u(m, O);
        if (I !== L) {
          if (!k(I))
            return !1;
          var K = C.get(m);
          k(K) && (K = new B(), C.set(m, K)), K.set(O, L);
        }
        return !0;
      }
    }
    function ft() {
      var n;
      return !k(q) && H(r.Reflect) && Object.isExtensible(r.Reflect) && (n = r.Reflect[q]), k(n) && (n = ut()), !k(q) && H(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, q, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function bt(n) {
      var a = new Y(), d = {
        isProviderFor: function(f, g) {
          var m = a.get(f);
          return k(m) ? !1 : m.has(g);
        },
        OrdinaryDefineOwnMetadata: j,
        OrdinaryHasOwnMetadata: C,
        OrdinaryGetOwnMetadata: D,
        OrdinaryOwnMetadataKeys: A,
        OrdinaryDeleteMetadata: u
      };
      return ee.registerProvider(d), d;
      function c(f, g, m) {
        var O = a.get(f), L = !1;
        if (k(O)) {
          if (!m)
            return;
          O = new B(), a.set(f, O), L = !0;
        }
        var I = O.get(g);
        if (k(I)) {
          if (!m)
            return;
          if (I = new B(), O.set(g, I), !n.setProvider(f, g, d))
            throw O.delete(g), L && a.delete(f), new Error("Wrong provider for target.");
        }
        return I;
      }
      function C(f, g, m) {
        var O = c(
          g,
          m,
          /*Create*/
          !1
        );
        return k(O) ? !1 : We(O.has(f));
      }
      function D(f, g, m) {
        var O = c(
          g,
          m,
          /*Create*/
          !1
        );
        if (!k(O))
          return O.get(f);
      }
      function j(f, g, m, O) {
        var L = c(
          m,
          O,
          /*Create*/
          !0
        );
        L.set(f, g);
      }
      function A(f, g) {
        var m = [], O = c(
          f,
          g,
          /*Create*/
          !1
        );
        if (k(O))
          return m;
        for (var L = O.keys(), I = ht(L), K = 0; ; ) {
          var Se = Xe(I);
          if (!Se)
            return m.length = K, m;
          var Ke = Ye(Se);
          try {
            m[K] = Ke;
          } catch (qe) {
            try {
              Ge(I);
            } finally {
              throw qe;
            }
          }
          K++;
        }
      }
      function u(f, g, m) {
        var O = c(
          g,
          m,
          /*Create*/
          !1
        );
        if (k(O) || !O.delete(f))
          return !1;
        if (O.size === 0) {
          var L = a.get(g);
          k(L) || (L.delete(m), L.size === 0 && a.delete(L));
        }
        return !0;
      }
    }
    function yt(n) {
      var a = n.defineMetadata, d = n.hasOwnMetadata, c = n.getOwnMetadata, C = n.getOwnMetadataKeys, D = n.deleteMetadata, j = new Y(), A = {
        isProviderFor: function(u, f) {
          var g = j.get(u);
          return !k(g) && g.has(f) ? !0 : C(u, f).length ? (k(g) && (g = new N(), j.set(u, g)), g.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: d,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: C,
        OrdinaryDeleteMetadata: D
      };
      return A;
    }
    function ce(n, a, d) {
      var c = ee.getProvider(n, a);
      if (!k(c))
        return c;
      if (d) {
        if (ee.setProvider(n, a, Z))
          return Z;
        throw new Error("Illegal state.");
      }
    }
    function vt() {
      var n = {}, a = [], d = (
        /** @class */
        function() {
          function A(u, f, g) {
            this._index = 0, this._keys = u, this._values = f, this._selector = g;
          }
          return A.prototype["@@iterator"] = function() {
            return this;
          }, A.prototype[s] = function() {
            return this;
          }, A.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var f = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, A.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), u;
          }, A.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: u, done: !0 };
          }, A;
        }()
      ), c = (
        /** @class */
        function() {
          function A() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(A.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), A.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, A.prototype.get = function(u) {
            var f = this._find(
              u,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, A.prototype.set = function(u, f) {
            var g = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[g] = f, this;
          }, A.prototype.delete = function(u) {
            var f = this._find(
              u,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var g = this._keys.length, m = f + 1; m < g; m++)
                this._keys[m - 1] = this._keys[m], this._values[m - 1] = this._values[m];
              return this._keys.length--, this._values.length--, xe(u, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, A.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, A.prototype.keys = function() {
            return new d(this._keys, this._values, C);
          }, A.prototype.values = function() {
            return new d(this._keys, this._values, D);
          }, A.prototype.entries = function() {
            return new d(this._keys, this._values, j);
          }, A.prototype["@@iterator"] = function() {
            return this.entries();
          }, A.prototype[s] = function() {
            return this.entries();
          }, A.prototype._find = function(u, f) {
            if (!xe(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var g = 0; g < this._keys.length; g++)
                if (xe(this._keys[g], u)) {
                  this._cacheIndex = g;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, A;
        }()
      );
      return c;
      function C(A, u) {
        return A;
      }
      function D(A, u) {
        return u;
      }
      function j(A, u) {
        return [A, u];
      }
    }
    function gt() {
      var n = (
        /** @class */
        function() {
          function a() {
            this._map = new B();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(d) {
            return this._map.has(d);
          }, a.prototype.add = function(d) {
            return this._map.set(d, d), this;
          }, a.prototype.delete = function(d) {
            return this._map.delete(d);
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
          }, a.prototype[s] = function() {
            return this.keys();
          }, a;
        }()
      );
      return n;
    }
    function mt() {
      var n = 16, a = P.create(), d = c();
      return (
        /** @class */
        function() {
          function u() {
            this._key = c();
          }
          return u.prototype.has = function(f) {
            var g = C(
              f,
              /*create*/
              !1
            );
            return g !== void 0 ? P.has(g, this._key) : !1;
          }, u.prototype.get = function(f) {
            var g = C(
              f,
              /*create*/
              !1
            );
            return g !== void 0 ? P.get(g, this._key) : void 0;
          }, u.prototype.set = function(f, g) {
            var m = C(
              f,
              /*create*/
              !0
            );
            return m[this._key] = g, this;
          }, u.prototype.delete = function(f) {
            var g = C(
              f,
              /*create*/
              !1
            );
            return g !== void 0 ? delete g[this._key] : !1;
          }, u.prototype.clear = function() {
            this._key = c();
          }, u;
        }()
      );
      function c() {
        var u;
        do
          u = "@@WeakMap@@" + A();
        while (P.has(a, u));
        return a[u] = !0, u;
      }
      function C(u, f) {
        if (!i.call(u, d)) {
          if (!f)
            return;
          Object.defineProperty(u, d, { value: P.create() });
        }
        return u[d];
      }
      function D(u, f) {
        for (var g = 0; g < f; ++g)
          u[g] = Math.random() * 255 | 0;
        return u;
      }
      function j(u) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : D(f, u), f;
        }
        return D(new Array(u), u);
      }
      function A() {
        var u = j(n);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var f = "", g = 0; g < n; ++g) {
          var m = u[g];
          (g === 4 || g === 6 || g === 8) && (f += "-"), m < 16 && (f += "0"), f += m.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function Je(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Qt || (Qt = {}));
function Cr(t) {
  return typeof t.name == "string" && typeof t.version == "string" && typeof t.title == "string" && typeof t.elementSelector == "string" && typeof t.group == "string" && typeof t.iconName == "string";
}
function _r(t) {
  return function(e) {
    if (Cr(t)) {
      const r = {
        version: t.version,
        name: t.name,
        title: t.title,
        selector: t.elementSelector,
        category: t.group,
        icon: t.iconName,
        layoutKind: t.layoutKind,
        environment: t.environment
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
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, l);
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
function Er(t) {
  return _r(t);
}
function kr(t) {
  return function(e) {
    class r extends e {
      constructor() {
        super(...arguments);
        qt(this, "_stylesApplied", !1);
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
        var _;
        const l = document.querySelector('style.global-style[type="text/css"]'), s = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), h = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && h) {
          const P = new CSSStyleSheet(), S = (_ = l.sheet) == null ? void 0 : _.cssRules;
          S && (Array.from(S).forEach((B) => P.insertRule(B.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, P]);
        } else if (l) {
          const P = l.cloneNode(!0);
          p.appendChild(P);
        }
        s.forEach((P) => {
          const S = P.cloneNode(!0);
          p.appendChild(S);
        });
      }
    }
    return r;
  };
}
function Sr(t) {
  var r;
  if (((r = t == null ? void 0 : t.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Pr(t) {
  return function(e, r) {
    try {
      Sr(t);
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
function v(t) {
  return Pr(t);
}
var E;
(function(t) {
  t.TEXT_INPUT = "text-input", t.PASSWORD_INPUT = "password-input", t.DROPDOWN = "dropdown", t.CHECKBOX = "checkbox", t.RADIO_BUTTON = "radio-button", t.RANGE_SLIDER = "range-slider", t.FILE_INPUT = "file-input", t.DATE_PICKER = "date-picker", t.COLOR_PICKER = "color-picker", t.NUMBER_INPUT = "number-input", t.TEXTAREA = "textarea", t.MULTI_SELECT = "multi-select", t.POPUP_DROPDOWN = "popup-dropdown", t.LAYOUT_PICKER = "layout-picker", t.RESPONSIVE_OVERRIDE = "responsive-override", t.IMAGE_PICKER = "image-picker", t.CHIPS = "chips";
})(E || (E = {}));
var b;
(function(t) {
  t.PROPERTY = "property", t.EVENT = "event", t.ACTION = "action";
})(b || (b = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt = globalThis, Pt = tt.ShadowRoot && (tt.ShadyCSS === void 0 || tt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, At = Symbol(), er = /* @__PURE__ */ new WeakMap();
let br = class {
  constructor(e, r, i) {
    if (this._$cssResult$ = !0, i !== At) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (Pt && e === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (e = er.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && er.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ar = (t) => new br(typeof t == "string" ? t : t + "", void 0, At), yr = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((i, o, l) => i + ((s) => {
    if (s._$cssResult$ === !0) return s.cssText;
    if (typeof s == "number") return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + t[l + 1], t[0]);
  return new br(r, t, At);
}, Or = (t, e) => {
  if (Pt) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const i = document.createElement("style"), o = tt.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = r.cssText, t.appendChild(i);
  }
}, tr = Pt ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const i of e.cssRules) r += i.cssText;
  return Ar(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Rr, defineProperty: Mr, getOwnPropertyDescriptor: Lr, getOwnPropertyNames: zr, getOwnPropertySymbols: Br, getPrototypeOf: Nr } = Object, se = globalThis, rr = se.trustedTypes, Ir = rr ? rr.emptyScript : "", $t = se.reactiveElementPolyfillSupport, Re = (t, e) => t, rt = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Ir : null;
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
} }, Ot = (t, e) => !Rr(t, e), ir = { attribute: !0, type: String, converter: rt, reflect: !1, useDefault: !1, hasChanged: Ot };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), se.litPropertyMetadata ?? (se.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let we = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = ir) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, r);
      o !== void 0 && Mr(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, r, i) {
    const { get: o, set: l } = Lr(this.prototype, e) ?? { get() {
      return this[r];
    }, set(s) {
      this[r] = s;
    } };
    return { get: o, set(s) {
      const h = o == null ? void 0 : o.call(this);
      l == null || l.call(this, s), this.requestUpdate(e, h, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ir;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Re("elementProperties"))) return;
    const e = Nr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Re("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Re("properties"))) {
      const r = this.properties, i = [...zr(r), ...Br(r)];
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
      for (const o of i) r.unshift(tr(o));
    } else e !== void 0 && r.push(tr(e));
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
    return Or(e, this.constructor.elementStyles), e;
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
    var l;
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const s = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : rt).toAttribute(r, i.type);
      this._$Em = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var l, s;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const h = i.getPropertyOptions(o), p = typeof h.converter == "function" ? { fromAttribute: h.converter } : ((l = h.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? h.converter : rt;
      this._$Em = o;
      const _ = p.fromAttribute(r, h.type);
      this[o] = _ ?? ((s = this._$Ej) == null ? void 0 : s.get(o)) ?? _, this._$Em = null;
    }
  }
  requestUpdate(e, r, i, o = !1, l) {
    var s;
    if (e !== void 0) {
      const h = this.constructor;
      if (o === !1 && (l = this[e]), i ?? (i = h.getPropertyOptions(e)), !((i.hasChanged ?? Ot)(l, r) || i.useDefault && i.reflect && l === ((s = this._$Ej) == null ? void 0 : s.get(e)) && !this.hasAttribute(h._$Eu(e, i)))) return;
      this.C(e, r, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: i, reflect: o, wrapped: l }, s) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, s ?? r ?? this[e]), l !== !0 || s !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (r = void 0), this._$AL.set(e, r)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, s] of this._$Ep) this[l] = s;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, s] of o) {
        const { wrapped: h } = s, p = this[l];
        h !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, s, p);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (i = this._$EO) == null || i.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
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
we.elementStyles = [], we.shadowRootOptions = { mode: "open" }, we[Re("elementProperties")] = /* @__PURE__ */ new Map(), we[Re("finalized")] = /* @__PURE__ */ new Map(), $t == null || $t({ ReactiveElement: we }), (se.reactiveElementVersions ?? (se.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Me = globalThis, or = (t) => t, it = Me.trustedTypes, nr = it ? it.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, vr = "$lit$", ae = `lit$${Math.random().toFixed(9).slice(2)}$`, gr = "?" + ae, Hr = `<${gr}>`, be = document, Be = () => be.createComment(""), Ne = (t) => t === null || typeof t != "object" && typeof t != "function", Rt = Array.isArray, jr = (t) => Rt(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", Tt = `[ 	
\f\r]`, Ae = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ar = /-->/g, sr = />/g, he = RegExp(`>|${Tt}(?:([^\\s"'>=/]+)(${Tt}*=${Tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), lr = /'/g, dr = /"/g, mr = /^(?:script|style|textarea|title)$/i, Dr = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), y = Dr(1), ye = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), pr = /* @__PURE__ */ new WeakMap(), ue = be.createTreeWalker(be, 129);
function xr(t, e) {
  if (!Rt(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return nr !== void 0 ? nr.createHTML(e) : e;
}
const Ur = (t, e) => {
  const r = t.length - 1, i = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", s = Ae;
  for (let h = 0; h < r; h++) {
    const p = t[h];
    let _, P, S = -1, B = 0;
    for (; B < p.length && (s.lastIndex = B, P = s.exec(p), P !== null); ) B = s.lastIndex, s === Ae ? P[1] === "!--" ? s = ar : P[1] !== void 0 ? s = sr : P[2] !== void 0 ? (mr.test(P[2]) && (o = RegExp("</" + P[2], "g")), s = he) : P[3] !== void 0 && (s = he) : s === he ? P[0] === ">" ? (s = o ?? Ae, S = -1) : P[1] === void 0 ? S = -2 : (S = s.lastIndex - P[2].length, _ = P[1], s = P[3] === void 0 ? he : P[3] === '"' ? dr : lr) : s === dr || s === lr ? s = he : s === ar || s === sr ? s = Ae : (s = he, o = void 0);
    const N = s === he && t[h + 1].startsWith("/>") ? " " : "";
    l += s === Ae ? p + Hr : S >= 0 ? (i.push(_), p.slice(0, S) + vr + p.slice(S) + ae + N) : p + ae + (S === -2 ? h : N);
  }
  return [xr(t, l + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class Ie {
  constructor({ strings: e, _$litType$: r }, i) {
    let o;
    this.parts = [];
    let l = 0, s = 0;
    const h = e.length - 1, p = this.parts, [_, P] = Ur(e, r);
    if (this.el = Ie.createElement(_, i), ue.currentNode = this.el.content, r === 2 || r === 3) {
      const S = this.el.content.firstChild;
      S.replaceWith(...S.childNodes);
    }
    for (; (o = ue.nextNode()) !== null && p.length < h; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const S of o.getAttributeNames()) if (S.endsWith(vr)) {
          const B = P[s++], N = o.getAttribute(S).split(ae), Y = /([.?@])?(.*)/.exec(B);
          p.push({ type: 1, index: l, name: Y[2], strings: N, ctor: Y[1] === "." ? Fr : Y[1] === "?" ? Vr : Y[1] === "@" ? Yr : st }), o.removeAttribute(S);
        } else S.startsWith(ae) && (p.push({ type: 6, index: l }), o.removeAttribute(S));
        if (mr.test(o.tagName)) {
          const S = o.textContent.split(ae), B = S.length - 1;
          if (B > 0) {
            o.textContent = it ? it.emptyScript : "";
            for (let N = 0; N < B; N++) o.append(S[N], Be()), ue.nextNode(), p.push({ type: 2, index: ++l });
            o.append(S[B], Be());
          }
        }
      } else if (o.nodeType === 8) if (o.data === gr) p.push({ type: 2, index: l });
      else {
        let S = -1;
        for (; (S = o.data.indexOf(ae, S + 1)) !== -1; ) p.push({ type: 7, index: l }), S += ae.length - 1;
      }
      l++;
    }
  }
  static createElement(e, r) {
    const i = be.createElement("template");
    return i.innerHTML = e, i;
  }
}
function Te(t, e, r = t, i) {
  var s, h;
  if (e === ye) return e;
  let o = i !== void 0 ? (s = r._$Co) == null ? void 0 : s[i] : r._$Cl;
  const l = Ne(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((h = o == null ? void 0 : o._$AO) == null || h.call(o, !1), l === void 0 ? o = void 0 : (o = new l(t), o._$AT(t, r, i)), i !== void 0 ? (r._$Co ?? (r._$Co = []))[i] = o : r._$Cl = o), o !== void 0 && (e = Te(t, o._$AS(t, e.values), o, i)), e;
}
class Wr {
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
    const { el: { content: r }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? be).importNode(r, !0);
    ue.currentNode = o;
    let l = ue.nextNode(), s = 0, h = 0, p = i[0];
    for (; p !== void 0; ) {
      if (s === p.index) {
        let _;
        p.type === 2 ? _ = new He(l, l.nextSibling, this, e) : p.type === 1 ? _ = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (_ = new Xr(l, this, e)), this._$AV.push(_), p = i[++h];
      }
      s !== (p == null ? void 0 : p.index) && (l = ue.nextNode(), s++);
    }
    return ue.currentNode = be, o;
  }
  p(e) {
    let r = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, r), r += i.strings.length - 2) : i._$AI(e[r])), r++;
  }
}
class He {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, i, o) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = Te(this, e, r), Ne(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== ye && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : jr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && Ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(be.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Ie.createElement(xr(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(r);
    else {
      const s = new Wr(o, this), h = s.u(this.options);
      s.p(r), this.T(h), this._$AH = s;
    }
  }
  _$AC(e) {
    let r = pr.get(e.strings);
    return r === void 0 && pr.set(e.strings, r = new Ie(e)), r;
  }
  k(e) {
    Rt(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let i, o = 0;
    for (const l of e) o === r.length ? r.push(i = new He(this.O(Be()), this.O(Be()), this, this.options)) : i = r[o], i._$AI(l), o++;
    o < r.length && (this._$AR(i && i._$AB.nextSibling, o), r.length = o);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); e !== this._$AB; ) {
      const o = or(e).nextSibling;
      or(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cv = e, (r = this._$AP) == null || r.call(this, e));
  }
}
class st {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, i, o, l) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = r, this._$AM = o, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = T;
  }
  _$AI(e, r = this, i, o) {
    const l = this.strings;
    let s = !1;
    if (l === void 0) e = Te(this, e, r, 0), s = !Ne(e) || e !== this._$AH && e !== ye, s && (this._$AH = e);
    else {
      const h = e;
      let p, _;
      for (e = l[0], p = 0; p < l.length - 1; p++) _ = Te(this, h[i + p], r, p), _ === ye && (_ = this._$AH[p]), s || (s = !Ne(_) || _ !== this._$AH[p]), _ === T ? e = T : e !== T && (e += (_ ?? "") + l[p + 1]), this._$AH[p] = _;
    }
    s && !o && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Fr extends st {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
class Vr extends st {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}
class Yr extends st {
  constructor(e, r, i, o, l) {
    super(e, r, i, o, l), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = Te(this, e, r, 0) ?? T) === ye) return;
    const i = this._$AH, o = e === T && i !== T || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== T && (i === T || o);
    o && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Xr {
  constructor(e, r, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Te(this, e);
  }
}
const Ct = Me.litHtmlPolyfillSupport;
Ct == null || Ct(Ie, He), (Me.litHtmlVersions ?? (Me.litHtmlVersions = [])).push("3.3.3");
const Gr = (t, e, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const l = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = o = new He(e.insertBefore(Be(), l), l, void 0, r ?? {});
  }
  return o._$AI(t), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fe = globalThis;
let Le = class extends we {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Gr(r, this.renderRoot, this.renderOptions);
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
    return ye;
  }
};
var fr;
Le._$litElement$ = !0, Le.finalized = !0, (fr = fe.litElementHydrateSupport) == null || fr.call(fe, { LitElement: Le });
const _t = fe.litElementPolyfillSupport;
_t == null || _t({ LitElement: Le });
(fe.litElementVersions ?? (fe.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jr = (t) => (e, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kr = { attribute: !0, type: String, converter: rt, reflect: !1, hasChanged: Ot }, qr = (t = Kr, e, r) => {
  const { kind: i, metadata: o } = r;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), l.set(r.name, t), i === "accessor") {
    const { name: s } = r;
    return { set(h) {
      const p = e.get.call(this);
      e.set.call(this, h), this.requestUpdate(s, p, t, !0, h);
    }, init(h) {
      return h !== void 0 && this.C(s, void 0, t, h), h;
    } };
  }
  if (i === "setter") {
    const { name: s } = r;
    return function(h) {
      const p = this[s];
      e.call(this, h), this.requestUpdate(s, p, t, !0, h);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function w(t) {
  return (e, r) => typeof r == "object" ? qr(t, e, r) : ((i, o, l) => {
    const s = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, i), s ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(t, e, r);
}
var Zr = Object.defineProperty, Qr = Object.getOwnPropertyDescriptor, U = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? Qr(e, r) : e, l = t.length - 1, s; l >= 0; l--)
    (s = t[l]) && (o = (i ? s(e, r, o) : s(o)) || o);
  return i && o && Zr(e, r, o), o;
};
const at = class at extends Le {
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
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return y``;
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
    return Object.entries(r).forEach(([l, s]) => {
      const h = this.responsiveProps[l];
      if (!h) return;
      let p = "";
      Object.entries(h).forEach(([_, P]) => {
        const S = i[_];
        S && (p += `--${e}-${S}-override: ${P};
`);
      }), p && (o += `${s} {
  :host {
    ${p}  }
}
`);
    }), o ? y`<style>${o}</style>` : y``;
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
    return this.isStudio ? y`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    ` : y``;
  }
  renderHeader() {
    return y``;
  }
  willUpdate(e) {
    super.willUpdate(e), this.updateHostStyles();
  }
  updateHostStyles() {
    const r = this.computeBaseStyles().split(";").map((i) => i.trim()).filter(Boolean);
    for (const i of r) {
      const o = i.indexOf(":");
      if (o === -1) continue;
      const l = i.slice(0, o).trim(), s = i.slice(o + 1).trim();
      l.startsWith("--") ? this.style.setProperty(l, s) : this.style[l] = s;
    }
  }
};
at.slots = [], at.styles = yr`
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

    :host > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }

    .zero-internal-container {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 100%;
      flex: 1;
      min-height: 0;
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
let z = at;
U([
  w({ type: Object, attribute: "responsive-props" })
], z.prototype, "responsiveProps", 2);
U([
  w({ type: String })
], z.prototype, "activeEdge", 2);
U([
  w({ type: Boolean, reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], z.prototype, "visible", 2);
U([
  w({ type: Number, reflect: !0, attribute: "z-index" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], z.prototype, "zIndex", 2);
U([
  w({ type: Number, reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], z.prototype, "opacity", 2);
U([
  w({ type: String, attribute: "custom-class" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], z.prototype, "customClass", 2);
U([
  w({ type: String, reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], z.prototype, "width", 2);
U([
  w({ type: String, reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], z.prototype, "height", 2);
U([
  w({ type: String, reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], z.prototype, "margin", 2);
U([
  w({ type: String, reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], z.prototype, "padding", 2);
U([
  v({
    attributeType: b.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], z.prototype, "onClick", 1);
U([
  w({ type: String, reflect: !0 })
], z.prototype, "direction", 2);
U([
  w({ type: String, reflect: !0 })
], z.prototype, "justify", 2);
U([
  w({ type: String, reflect: !0 })
], z.prototype, "align", 2);
U([
  w({ type: String, reflect: !0 })
], z.prototype, "gap", 2);
U([
  w({ type: Number, reflect: !0, attribute: "items-per-row" })
], z.prototype, "itemsPerRow", 2);
U([
  w({ type: String, attribute: "background-color", reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], z.prototype, "backgroundColor", 2);
U([
  w({ type: String, attribute: "border-radius", reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], z.prototype, "borderRadius", 2);
U([
  w({ type: String, reflect: !0, attribute: "elevation" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.DROPDOWN,
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
U([
  v({
    attributeType: b.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], z.prototype, "show", 1);
U([
  v({
    attributeType: b.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], z.prototype, "hide", 1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ei = { CHILD: 2 }, ti = (t) => (...e) => ({ _$litDirective$: t, values: e });
class ri {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, r, i) {
    this._$Ct = e, this._$AM = r, this._$Ci = i;
  }
  _$AS(e, r) {
    return this.update(e, r);
  }
  update(e, r) {
    return this.render(...r);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Et extends ri {
  constructor(e) {
    if (super(e), this.it = T, e.type !== ei.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === T || e == null) return this._t = void 0, this.it = e;
    if (e === ye) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.it) return this._t;
    this.it = e;
    const r = [e];
    return r.raw = r, this._t = { _$litType$: this.constructor.resultType, strings: r, values: [] };
  }
}
Et.directiveName = "unsafeHTML", Et.resultType = 1;
const cr = ti(Et);
var ii = Object.defineProperty, oi = Object.getOwnPropertyDescriptor, $ = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? oi(e, r) : e, l = t.length - 1, s; l >= 0; l--)
    (s = t[l]) && (o = (i ? s(e, r, o) : s(o)) || o);
  return i && o && ii(e, r, o), o;
};
const wr = [
  { icon: "🏠", label: "Home", id: "home" },
  { icon: "📊", label: "Dashboard", id: "dashboard" },
  { icon: "📁", label: "Projects", id: "projects" },
  { icon: "👥", label: "Team", id: "team" },
  { separator: !0 },
  { section: "System" },
  { icon: "⚙️", label: "Settings", id: "settings" }
], kt = {
  showSearch: !1,
  searchPlaceholder: "Search (Ctrl + K)",
  showNotificationBell: !1,
  notificationCount: 0,
  showUserAvatar: !1,
  userAvatarUrl: "",
  userName: "User Name",
  userRole: "Member",
  showBreadcrumb: !1,
  breadcrumbs: []
}, St = {
  show: !1,
  avatarUrl: "",
  userName: "User Name",
  userRole: "Member",
  showLogout: !1,
  showSettings: !1
}, ze = JSON.stringify(wr, null, 2), ot = JSON.stringify(kt, null, 2), nt = JSON.stringify(St, null, 2);
function Qe(t) {
  try {
    const e = JSON.parse(t);
    if (Array.isArray(e)) return e;
  } catch {
  }
  return wr;
}
function hr(t) {
  try {
    const e = JSON.parse(t);
    if (e && typeof e == "object") return { ...kt, ...e };
  } catch {
  }
  return kt;
}
function ur(t) {
  try {
    const e = JSON.parse(t);
    if (e && typeof e == "object") return { ...St, ...e };
  } catch {
  }
  return St;
}
function $e(t = "") {
  return t.split(" ").map((e) => e[0] ?? "").join("").slice(0, 2).toUpperCase() || "U";
}
function et(t, e, r = "60px", i = "#6366f1") {
  return `
    <div style="
      min-height:${r};
      border:2px dashed ${i}40;
      border-radius:8px;
      display:flex; align-items:center; justify-content:center;
      color:${i}; font-size:0.75rem; font-weight:600;
      background:${i}08; padding:8px;
    ">
      <zero-studio-slot name="${t}"></zero-studio-slot>
    </div>
  `;
}
function Oe(t, e, r, i, o, l) {
  if (t === "hidden") return "";
  let s = "☰";
  const h = i === "over" ? !o : r;
  return e === "hamburger" ? s = `
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" style="display:block;">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
    ` : e === "dots" ? s = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display:block;">
        <circle cx="12" cy="5" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="12" cy="19" r="2"/>
      </svg>
    ` : e === "chevron" ? h ? s = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      ` : s = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      ` : e === "arrow" && (h ? s = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      ` : s = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      `), t === "floating" ? `
      <div style="
        position:absolute; top:20px;
        left:calc(${i === "over" ? o ? "260px" : "0px" : r ? "64px" : "260px"} - 14px);
        z-index:35; width:28px; height:28px; border-radius:50%;
        background:#ffffff; border:1px solid rgba(0,0,0,0.1);
        display:flex; align-items:center; justify-content:center;
        cursor:pointer; box-shadow:0 2px 4px rgba(0,0,0,0.08);
        color:${l}; transition:left 0.25s;
      ">
        ${s}
      </div>
    ` : t === "header-left" || t === "header-right" ? `
      <div style="
        display:flex; align-items:center; justify-content:center;
        width:36px; height:36px; border-radius:8px; cursor:pointer;
        background:transparent; border:none; color:${l}; flex-shrink:0;
        margin-right: 8px;
      ">
        ${s}
      </div>
    ` : `
    <div style="
      display:flex; align-items:center; justify-content:center;
      padding:10px; margin:4px 8px 8px; border-radius:6px; cursor:pointer;
      background:transparent; border:none; color:${l}; flex-shrink:0;
    ">
      ${s}
    </div>
  `;
}
function ni(t, e, r, i, o, l, s, h) {
  var Y;
  if (t.separator)
    return '<div style="height:1px; background:var(--snl-separator-color, #e5e9ef); margin:8px 12px;"></div>';
  if (t.section)
    return h ? "" : `
      <div style="padding:14px 12px 6px; font-size:0.68rem; font-weight:700;
        letter-spacing:0.06em; text-transform:uppercase;
        color:#8996a4; white-space:nowrap;">
        ${t.section}
      </div>
    `;
  const p = r === e, _ = !!((Y = t.children) != null && Y.length), P = !h && t.badge ? `
    <span style="margin-left:auto; background:${t.badgeColor || s};
      color:#fff; font-size:0.65rem; font-weight:700; padding:1px 7px;
      border-radius:999px; flex-shrink:0;">
      ${t.badge}
    </span>
  ` : "", S = !h && _ ? `
    <span style="margin-left:${t.badge ? "8px" : "auto"}; color:${p ? l : "#8996a4"}; display:flex; flex-shrink:0;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="${p ? "6 9 12 15 18 9" : "9 18 15 12 9 6"}"></polyline>
      </svg>
    </span>
  ` : "", B = `
    <div data-tab-index="${e}" style="
      display:flex; align-items:center; gap:10px;
      padding:9px 12px; border-radius:8px; margin-bottom:2px;
      border-left:3px solid ${p ? s : "transparent"};
      cursor:${t.disabled ? "not-allowed" : "pointer"};
      opacity:${t.disabled ? "0.4" : "1"};
      font-size:0.875rem; font-weight:${p ? "600" : "500"};
      color:${p ? l : i};
      background:${p ? o : "transparent"};
      transition:all 0.15s; user-select:none; overflow:hidden;
    ">
      <span style="font-size:1.05rem; flex-shrink:0; width:20px; text-align:center;">
        ${t.icon ?? "•"}
      </span>
      ${h ? "" : `
        <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;">
          ${t.label ?? ""}
        </span>
        ${P}${S}
      `}
    </div>
  `;
  let N = "";
  return _ && p && !h && (N = '<div style="display:flex; flex-direction:column; margin:2px 0 6px;">' + t.children.map((q, ee) => {
    const Z = ee === 0, ie = Z ? s : i;
    return `
          <div style="display:flex; align-items:center; gap:12px; padding:6px 12px 6px 30px;
            border-radius:8px; font-size:0.83rem; font-weight:${Z ? "600" : "500"};
            color:${ie}; cursor:pointer;">
            <span style="width:6px; height:6px; border-radius:50%; background:${ie};
              opacity:${Z ? "1" : "0.45"}; flex-shrink:0;"></span>
            <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${q.label ?? ""}</span>
          </div>
        `;
  }).join("") + "</div>"), B + N;
}
function ai(t, e, r) {
  var o;
  const i = [];
  if (t.showBreadcrumb && ((o = t.breadcrumbs) != null && o.length)) {
    const l = t.breadcrumbs.map(
      (s, h) => h < t.breadcrumbs.length - 1 ? `<span style="color:${r}80;">${s}</span><span style="color:${r}40; margin:0 4px;">›</span>` : `<span style="color:${r}; font-weight:600;">${s}</span>`
    ).join("");
    i.push(`<div style="display:flex; align-items:center; font-size:0.8rem;">${l}</div>`);
  }
  if (t.showSearch && i.push(`
      <div style="flex:1; max-width:280px; display:flex; align-items:center; gap:8px;
        background:#f0f2f5; border-radius:10px; padding:8px 14px;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8996a4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
          <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span style="color:#8996a4; font-size:0.83rem;">${t.searchPlaceholder ?? "Search (Ctrl + K)"}</span>
      </div>
    `), i.push('<div style="flex:1;"></div>'), i.push(`
    <div style="cursor:pointer; padding:8px; border-radius:8px; color:${r}; display:flex; align-items:center;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </div>
  `), t.showNotificationBell) {
    const l = t.notificationCount ?? 0;
    i.push(`
      <div style="position:relative; cursor:pointer; padding:6px; border-radius:8px;">
        <span style="font-size:1.2rem; line-height:1;">🔔</span>
        ${l > 0 ? `
          <span style="position:absolute; top:2px; right:2px; background:${e};
            color:#fff; font-size:0.6rem; font-weight:700; min-width:16px; height:16px;
            border-radius:999px; display:flex; align-items:center; justify-content:center; padding:0 3px;">
            ${l}
          </span>` : ""}
      </div>
    `);
  }
  if (t.showUserAvatar) {
    const l = $e(t.userName), s = t.userAvatarUrl ? `<img src="${t.userAvatarUrl}" style="width:32px; height:32px; border-radius:50%; object-fit:cover; flex-shrink:0;" />` : `<div style="width:32px; height:32px; border-radius:50%; background:${e}; color:#fff;
           display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:700; flex-shrink:0;">
           ${l}
         </div>`;
    i.push(`
      <div style="display:flex; align-items:center; gap:8px; cursor:pointer;">
        ${s}
        <div style="display:flex; flex-direction:column; line-height:1.25;">
          <span style="font-size:0.8rem; font-weight:600; color:${r};">${t.userName ?? ""}</span>
          ${t.userRole ? `<span style="font-size:0.7rem; color:${r}60;">${t.userRole}</span>` : ""}
        </div>
        <span style="color:${r}40; font-size:0.75rem;">▾</span>
      </div>
    `);
  }
  return i.join("");
}
function si(t, e, r, i = "#1d2630", o = "#8996a4", l = "#e5e9ef") {
  if (!t.show) return "";
  const s = $e(t.userName), h = t.avatarUrl ? `<img src="${t.avatarUrl}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; flex-shrink:0;" />` : `<div style="width:40px; height:40px; border-radius:50%; background:${r};
         color:#fff; display:flex; align-items:center; justify-content:center;
         font-size:0.85rem; font-weight:700; flex-shrink:0;">${s}</div>`;
  return `
    <div style="margin:14px 12px 6px; padding:${e ? "8px" : "10px 12px"};
      background:#ffffff; border:1px solid ${l}; border-radius:10px;
      display:flex; align-items:center; gap:12px; flex-shrink:0; cursor:pointer;
      ${e ? "justify-content:center;" : ""}">
      ${h}
      ${e ? "" : `
        <div style="flex:1; min-width:0;">
          <div style="font-size:0.85rem; font-weight:700; color:${i};
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.userName ?? ""}</div>
          ${t.userRole ? `<div style="font-size:0.72rem; color:${o};
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.userRole}</div>` : ""}
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${o}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
          <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
      `}
    </div>
  `;
}
function li(t, e, r, i = "buttons", o = "#94a3b8") {
  if (!t.show) return "";
  const l = $e(t.userName);
  return `
    <div style="padding:12px 14px; border-top:1px solid var(--snl-separator-color, #e5e9ef);
      display:flex; align-items:center; gap:10px; flex-shrink:0;">
      ${t.avatarUrl ? `<img src="${t.avatarUrl}" style="width:34px; height:34px; border-radius:50%; object-fit:cover; flex-shrink:0;" />` : `<div style="width:34px; height:34px; border-radius:50%; background:${r};
         color:#fff; display:flex; align-items:center; justify-content:center;
         font-size:0.75rem; font-weight:700; flex-shrink:0;">${l}</div>`}
      ${e ? "" : `
        <div style="flex:1; overflow:hidden;">
          <div style="font-size:0.82rem; font-weight:600; color:var(--snl-footer-name-color, #fff);
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.userName ?? ""}</div>
          ${t.userRole ? `<div style="font-size:0.7rem; color:var(--snl-footer-role-color, #94a3b8);
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.userRole}</div>` : ""}
        </div>
        <div style="display:flex; gap:4px; align-items:center;">
          ${i === "buttons" && t.showSettings ? '<span style="cursor:pointer; color:var(--snl-footer-btn-color, #94a3b8); font-size:0.9rem;" title="Settings">⚙️</span>' : ""}
          ${i === "buttons" && t.showLogout ? '<span style="cursor:pointer; color:var(--snl-footer-btn-color, #94a3b8); font-size:0.9rem;" title="Logout">↪</span>' : ""}
          ${i === "dropdown" ? `
            <span style="cursor:pointer; color:var(--snl-footer-btn-color, #94a3b8); display:flex; align-items:center;" title="Profile Actions">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          ` : ""}
        </div>
      `}
    </div>
  `;
}
let x = class extends z {
  constructor() {
    super(...arguments), this.height = "100vh", this.activePath = "", this._handleUrlChange = () => {
      this._matchActiveItemWithUrl();
    }, this.headerMode = "config", this.sidenavMode = "config", this.footerMode = "config", this.fixedHeader = !0, this.fixedFooter = !0, this.sidenavType = "side", this.opened = !0, this.hasBackdrop = !0, this.collapseBtnPosition = "sidebar-bottom", this.collapseBtnIcon = "chevron", this.navItems = ze, this.activeItem = 0, this.headerConfig = ot, this.sidebarFooterConfig = nt, this.appName = "My App", this.appSubtitle = "", this.appLogo = "🚀", this.headerTitle = "", this.headerLogo = "", this.collapsed = !1, this.sidebarWidth = "260px", this.headerHeight = "60px", this.collapsedWidth = "64px", this.showCollapseBtn = !0, this.showThemeToggle = !1, this.themeMode = "light", this.sidebarBg = "#ffffff", this.sidebarText = "#5b6b79", this.sidebarActiveBg = "#e6f0ff", this.sidebarActiveText = "#4680ff", this.accentColor = "#4680ff", this.headerBg = "#ffffff", this.headerText = "#1d2630", this.headerBorder = "#e5e9ef", this.mainBg = "#f4f7fa", this.mainPadding = "24px", this.footerActionType = "buttons", this.profilePosition = "top", this._expandedItems = /* @__PURE__ */ new Set();
  }
  get overridePrefix() {
    return "zero-sidenav-layout";
  }
  /**
   * Neutral, studio-ready default applied when the shell is first dropped onto a
   * page. Produces a professional, brand-agnostic app-shell (generic dashboard
   * chrome) with an EMPTY content area so studio pages can be nested inside the
   * `outlet` / `main` region. No domain-specific demo content is injected.
   */
  static getTransformOnDrop() {
    return {
      componentName: "zero-sidenav-layout",
      props: {
        appName: "Able Pro",
        appSubtitle: "v9.6.1",
        appLogo: "",
        accentColor: "#4680ff",
        sidebarBg: "#ffffff",
        sidebarText: "#5b6b79",
        sidebarActiveBg: "#e6f0ff",
        sidebarActiveText: "#4680ff",
        headerBg: "#ffffff",
        headerText: "#1d2630",
        headerBorder: "#e5e9ef",
        mainBg: "#f4f7fa",
        footerActionType: "buttons",
        profilePosition: "top",
        collapseBtnPosition: "header-left",
        collapseBtnIcon: "hamburger",
        showThemeToggle: !0,
        navItems: JSON.stringify([
          { section: "Navigation" },
          { icon: "🏠", label: "Dashboard", id: "dashboard", badge: "3", children: [
            { label: "Default", id: "default", href: "/dashboard/default" },
            { label: "Analytics", id: "analytics", href: "/dashboard/analytics" },
            { label: "Finance", id: "finance", href: "/dashboard/finance" }
          ] },
          { icon: "🧩", label: "Widgets", id: "widgets" },
          { section: "Widget" },
          { icon: "📈", label: "Statistics", id: "statistics" },
          { icon: "📊", label: "Data", id: "data" },
          { icon: "📉", label: "Chart", id: "chart" },
          { section: "Admin Panel" },
          { icon: "👥", label: "Users", id: "users" },
          { icon: "⚙️", label: "Settings", id: "settings" }
        ], null, 2),
        headerConfig: JSON.stringify({
          showSearch: !0,
          searchPlaceholder: "Search (Ctrl + K)",
          showNotificationBell: !0,
          notificationCount: 3,
          showUserAvatar: !0,
          userName: "Able Pro",
          userRole: "Administrator",
          showBreadcrumb: !1
        }),
        sidebarFooterConfig: JSON.stringify({
          show: !0,
          userName: "JWT User",
          userRole: "Administrator",
          showSettings: !0,
          showLogout: !0
        }),
        activeItem: 1,
        fixedHeader: !0,
        fixedFooter: !0
      },
      // Empty by design — the shell is a container. Studio pages drop into the
      // "outlet" / "main" region rather than a pre-baked domain demo.
      children: []
    };
  }
  /**
   * Plain settings schema the studio can render as a template-config form.
   * Returns only plain objects (no external imports). Each `name` maps to the
   * matching @RendererAttribute prop on this component.
   *
   * control ∈ "text" | "number" | "boolean" | "select" | "color" | "json"
   */
  static getSettingsSchema() {
    return [
      // ── Brand ──
      { name: "appName", label: "App / Brand Name", control: "text", group: "Brand", defaultValue: "My App" },
      { name: "appLogo", label: "Logo (emoji, image URL, or inline SVG)", control: "text", group: "Brand", defaultValue: "🚀" },
      // ── Navigation ──
      { name: "navItems", label: "Nav Items (JSON)", control: "json", group: "Navigation", defaultValue: ze },
      // ── Layout ──
      { name: "collapsed", label: "Sidebar Collapsed", control: "boolean", group: "Layout", defaultValue: !1 },
      { name: "fixedHeader", label: "Fixed Header", control: "boolean", group: "Layout", defaultValue: !0 },
      {
        name: "sidenavType",
        label: "Sidenav Layout Mode",
        control: "select",
        group: "Layout",
        options: [
          { label: "Side (Standard)", value: "side" },
          { label: "Over (Overlay/Drawer)", value: "over" }
        ],
        defaultValue: "side"
      },
      { name: "sidebarWidth", label: "Sidebar Width (px)", control: "number", group: "Layout", defaultValue: 260 },
      // ── Theme ──
      { name: "accentColor", label: "Accent Color", control: "color", group: "Theme", defaultValue: "#4680ff" }
    ];
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("popstate", this._handleUrlChange), this._matchActiveItemWithUrl();
  }
  disconnectedCallback() {
    window.removeEventListener("popstate", this._handleUrlChange), super.disconnectedCallback();
  }
  willUpdate(t) {
    super.willUpdate(t), this._matchActiveItemWithUrl();
  }
  updated(t) {
    super.updated(t), this.style.setProperty("--zero-height", this.height);
  }
  _matchActiveItemWithUrl() {
    if (typeof window > "u") return;
    let t = "";
    const e = this.closest("zero-runtime-app");
    if (e)
      t = e.pathName || e.currentPath || "";
    else {
      const i = this.closest("zero-renderer");
      i && (t = i.path || "");
    }
    t || (t = window.location.pathname);
    let r = t;
    if (r.startsWith("/")) {
      const i = r.split("/").filter(Boolean);
      i.length > 1 && i[0].startsWith("project-") && (r = "/" + i.slice(1).join("/"));
    }
    if (this.activePath = r, this.sidenavMode === "config") {
      const o = Qe(this.navItems).findIndex((l) => {
        if (!l.href) return !1;
        let s = l.href;
        try {
          s = new URL(l.href, window.location.origin).pathname;
        } catch {
        }
        if (s.startsWith("/")) {
          const _ = s.split("/").filter(Boolean);
          _.length > 1 && _[0].startsWith("project-") && (s = "/" + _.slice(1).join("/"));
        }
        const h = s.replace(/\/$/, ""), p = r.replace(/\/$/, "");
        return h === p || h === "/" + p || "/" + h === p;
      });
      o !== -1 && o !== this.activeItem && (this.activeItem = o);
    }
  }
  get onOpenedChange() {
    return "openedchange";
  }
  get onNavChange() {
    return "navchange";
  }
  get onSidebarToggle() {
    return "sidebarToggle";
  }
  get onLogout() {
    return "logout";
  }
  get onProfileClick() {
    return "profileClick";
  }
  get onSettingsClick() {
    return "settingsClick";
  }
  get onSearch() {
    return "search";
  }
  get onThemeChange() {
    return "themechange";
  }
  open() {
    this.opened = !0, this.dispatchEvent(new CustomEvent("openedchange", { detail: { opened: !0 }, bubbles: !0, composed: !0 }));
  }
  close() {
    this.opened = !1, this.dispatchEvent(new CustomEvent("openedchange", { detail: { opened: !1 }, bubbles: !0, composed: !0 }));
  }
  toggle() {
    this.opened = !this.opened, this.dispatchEvent(new CustomEvent("openedchange", { detail: { opened: this.opened }, bubbles: !0, composed: !0 }));
  }
  toggleSidebar() {
    this.collapsed = !this.collapsed, this.dispatchEvent(new CustomEvent("sidebarToggle", { detail: { collapsed: this.collapsed }, bubbles: !0, composed: !0 }));
  }
  expandSidebar() {
    this.collapsed = !1;
  }
  collapseSidebar() {
    this.collapsed = !0;
  }
  navigateTo(t) {
    const e = Qe(this.navItems)[t];
    this.activeItem = t, this.dispatchEvent(new CustomEvent("navchange", { detail: { activeItem: t, item: e }, bubbles: !0, composed: !0 }));
  }
  toggleTheme() {
    this.themeMode = this.themeMode === "dark" ? "light" : "dark", this.dispatchEvent(new CustomEvent("themechange", { detail: { theme: this.themeMode }, bubbles: !0, composed: !0 }));
  }
  // ─── Internal handlers ──────────────────────────────────────────────────────
  handleNavClick(t, e) {
    e.disabled || e.separator || e.section || (this.navigateTo(t), e.path ? this.dispatchEvent(new CustomEvent("route-change", { detail: { path: e.path }, bubbles: !0, composed: !0 })) : e.href && window.open(e.href, e.target ?? "_self"));
  }
  handleChildToggle(t) {
    this._expandedItems.has(t) ? this._expandedItems.delete(t) : this._expandedItems.add(t), this.requestUpdate();
  }
  // ─── Toggle Button Helper ──────────────────────────────────────────────────
  renderToggleButton(t) {
    const e = t === "floating", r = t === "header-left" || t === "header-right";
    let i = y`☰`;
    const o = this.collapseBtnIcon === "chevron", l = this.collapseBtnIcon === "arrow", s = this.collapseBtnIcon === "hamburger", h = this.collapseBtnIcon === "dots";
    s ? i = y`
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      ` : h ? i = y`
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="2"/>
          <circle cx="12" cy="12" r="2"/>
          <circle cx="12" cy="19" r="2"/>
        </svg>
      ` : o ? (this.sidenavType === "over" ? !this.opened : this.collapsed) ? i = y`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        ` : i = y`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        ` : l && ((this.sidenavType === "over" ? !this.opened : this.collapsed) ? i = y`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        ` : i = y`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        `);
    const p = (_) => {
      _.stopPropagation(), this.sidenavType === "over" ? this.toggle() : this.toggleSidebar();
    };
    return e ? y`
        <button class="snl-floating-toggle" @click=${p} title="Toggle sidebar">
          ${i}
        </button>
      ` : r ? y`
        <button class="snl-header-btn" style="color: ${this.headerText};" @click=${p} title="Toggle sidebar">
          ${i}
        </button>
      ` : y`
      <button class="snl-collapse-btn" style="color: ${this.sidebarText};" @click=${p} title="Toggle sidebar">
        ${i}
      </button>
    `;
  }
  // ─── getStudioTemplate ─────────────────────────────────────────────────────
  static getStudioTemplate(t) {
    var a, d, c, C, D, j, A, u, f, g, m, O, L, I, K, Se, Ke, qe, Mt, Lt, zt, Bt, Nt, It, Ht, jt, Dt, Ut, Wt, Ft, Vt, Yt, Xt, Gt, Jt, Kt;
    const e = ((a = t == null ? void 0 : t.props) == null ? void 0 : a.headerMode) || "config", r = ((d = t == null ? void 0 : t.props) == null ? void 0 : d.sidenavMode) || "config", i = ((c = t == null ? void 0 : t.props) == null ? void 0 : c.footerMode) || "config", o = ((C = t == null ? void 0 : t.props) == null ? void 0 : C.navItems) || ze, l = ((D = t == null ? void 0 : t.props) == null ? void 0 : D.headerConfig) || ot, s = ((j = t == null ? void 0 : t.props) == null ? void 0 : j.sidebarFooterConfig) || nt, h = ((A = t == null ? void 0 : t.props) == null ? void 0 : A.appName) ?? "My App", p = ((u = t == null ? void 0 : t.props) == null ? void 0 : u.appSubtitle) ?? "", _ = ((f = t == null ? void 0 : t.props) == null ? void 0 : f.appLogo) ?? "", P = ((g = t == null ? void 0 : t.props) == null ? void 0 : g.headerTitle) || "", S = ((m = t == null ? void 0 : t.props) == null ? void 0 : m.headerLogo) || "", B = Number(((O = t == null ? void 0 : t.props) == null ? void 0 : O.activeItem) ?? 0), N = !!((L = t == null ? void 0 : t.props) != null && L.collapsed), Y = ((I = t == null ? void 0 : t.props) == null ? void 0 : I.profilePosition) || "top", q = ((K = t == null ? void 0 : t.props) == null ? void 0 : K.sidebarWidth) || "260px", ee = ((Se = t == null ? void 0 : t.props) == null ? void 0 : Se.sidebarBg) || "#ffffff", Z = ((Ke = t == null ? void 0 : t.props) == null ? void 0 : Ke.sidebarText) || "#5b6b79", ie = ((qe = t == null ? void 0 : t.props) == null ? void 0 : qe.sidebarActiveBg) || "#e6f0ff", R = ((Mt = t == null ? void 0 : t.props) == null ? void 0 : Mt.sidebarActiveText) || "#4680ff", M = ((Lt = t == null ? void 0 : t.props) == null ? void 0 : Lt.accentColor) || "#4680ff", Q = ((zt = t == null ? void 0 : t.props) == null ? void 0 : zt.headerBg) || "#ffffff", X = ((Bt = t == null ? void 0 : t.props) == null ? void 0 : Bt.headerText) || "#1d2630", J = ((Nt = t == null ? void 0 : t.props) == null ? void 0 : Nt.headerBorder) || "#e5e9ef", ve = ((It = t == null ? void 0 : t.props) == null ? void 0 : It.mainBg) || "#f4f7fa", ge = ((Ht = t == null ? void 0 : t.props) == null ? void 0 : Ht.mainPadding) || "24px", je = ((jt = t == null ? void 0 : t.props) == null ? void 0 : jt.headerHeight) || "60px", le = ((Dt = t == null ? void 0 : t.props) == null ? void 0 : Dt.collapsedWidth) || "64px", te = ((Ut = t == null ? void 0 : t.props) == null ? void 0 : Ut.showCollapseBtn) !== !1, W = ((Wt = t == null ? void 0 : t.props) == null ? void 0 : Wt.sidenavType) || "side", F = ((Ft = t == null ? void 0 : t.props) == null ? void 0 : Ft.opened) !== !1, Ce = ((Vt = t == null ? void 0 : t.props) == null ? void 0 : Vt.hasBackdrop) !== !1, oe = ((Yt = t == null ? void 0 : t.props) == null ? void 0 : Yt.collapseBtnPosition) || "sidebar-bottom", ne = ((Xt = t == null ? void 0 : t.props) == null ? void 0 : Xt.collapseBtnIcon) || "chevron", De = ((Gt = t == null ? void 0 : t.props) == null ? void 0 : Gt.footerActionType) || "buttons", de = ((Jt = t == null ? void 0 : t.props) == null ? void 0 : Jt.fixedHeader) !== !1, _e = ((Kt = t == null ? void 0 : t.props) == null ? void 0 : Kt.fixedFooter) !== !1, Ue = Qe(o), k = hr(l), re = ur(s), pe = W === "over" ? !F : N, H = pe ? W === "over" ? "0px" : le : q, lt = P || h, dt = r !== "hidden", We = (V, xt) => {
      const wt = (V || "").trim().split(/\s+/).filter(Boolean), Ze = wt[0] || "", Pe = wt.slice(1).join(" ");
      return `<span style="font-weight:800; font-size:1.35rem; line-height:1; color:${xt}; letter-spacing:-0.01em; white-space:nowrap;">${Ze}${Pe ? `<sup style="font-size:0.5em; font-weight:700; vertical-align:super; margin-left:1px;">${Pe}</sup>` : ""}</span>`;
    }, pt = (V) => !!V && (V.startsWith("<") || V.startsWith("http") || V.startsWith("/") || V.includes(".")), G = [
      { id: "outlet", label: "Page Content", dropzone: !0, accepts: ["page-root", "zero-section"] },
      { id: "main", label: "Main Content", dropzone: !0, accepts: ["zero-section"] }
    ];
    e === "slot" && G.push({ id: "header", label: "Header Drop Zone", dropzone: !0, accepts: ["zero-section"] }), r === "slot" ? G.push({ id: "sidebar", label: "Sidebar Nav Drop Zone", dropzone: !0, accepts: ["zero-section"] }) : r === "config" && G.push({ id: "sidebar-extra", label: "Sidebar Extra", dropzone: !0, accepts: ["zero-section"] }), i === "slot" && G.push({ id: "footer", label: "Sidebar Footer Drop Zone", dropzone: !0, accepts: ["zero-section"] });
    let Ee = !1;
    const me = Ue.map((V, xt) => {
      const Ze = V.bottom === !0 && !Ee;
      Ze && (Ee = !0);
      const Pe = ni(V, xt, B, Z, ie, R, M, pe);
      return Ze ? `<div style="flex: 1; min-height: 20px;"></div>${Pe}` : Pe;
    }).join(""), Fe = oe === "header-left" && te ? Oe("header-left", ne, N, W, F, X) : "", ct = oe === "header-right" && te ? Oe("header-right", ne, N, W, F, X) : "", xe = e === "hidden" ? "" : `
      <div style="
        display:flex; align-items:center; gap:12px;
        height:${je}; padding:0 20px;
        background:${Q}; border-bottom:1px solid ${J};
        flex-shrink:0; box-sizing:border-box; z-index:10;
        width:100%;
      ">
        ${Fe}
        ${P || S ? `
          <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:0.95rem; color:${X}; white-space:nowrap; flex-shrink:0;">
            ${(() => {
      const V = S || _;
      return V.startsWith("<") ? V : V.startsWith("http") || V.startsWith("/") || V.includes(".") ? `<img src="${V}" style="width: 24px; height: 24px; object-fit: contain;" />` : `<span style="font-size:1.3rem;">${V}</span>`;
    })()}
            ${lt}
          </div>
        ` : ""}
        ${e === "config" ? ai(k, M, X) : `<div style="flex:1; min-width:0;">${et("header", "Drop Header Sections", "40px", M)}</div>`}
        ${ct}
      </div>
    `, Ve = r === "slot" ? et("sidebar", "Drop Sidebar Sections", "200px", M) : `
        <nav style="display:flex; flex-direction:column; flex:1; padding:10px 8px; overflow-y:auto;">
          ${me}
        </nav>
        <div style="padding:8px; border-top:1px solid #e5e9ef; flex-shrink:0;">
          ${et("sidebar-extra", "Sidebar Extra", "40px", M)}
        </div>
      `, Ye = i === "config" && re.show && Y === "top" ? si(re, pe, M, X, "#8996a4", J) : "", Xe = i === "hidden" ? "" : i === "slot" ? `<div style="padding:8px; border-top:1px solid #e5e9ef; flex-shrink:0;">
             ${et("footer", "Drop Footer Sections", "50px", M)}
           </div>` : Y === "bottom" ? li(re, pe, M, De, Z) : "", Ge = oe === "sidebar-top" && te ? Oe("sidebar-top", ne, N, W, F, "#fff") : "", ke = oe === "sidebar-bottom" && te ? Oe("sidebar-bottom", ne, N, W, F, Z) : "", ut = _e ? "" : "overflow-y: auto; scrollbar-width: thin;", ft = _e ? "" : "flex: none; overflow-y: visible;", bt = dt ? `
      <div style="
        width:${H}; background:${ee};
        display:flex; flex-direction:column; flex-shrink:0;
        overflow:hidden; transition:width 0.25s, transform 0.25s;
        border-right:${H === "0px" ? "none" : `1px solid ${J}`};
        ${W === "over" ? `position:absolute; left:0; top:0; bottom:0; z-index:30; height:100%; box-shadow:4px 0 12px rgba(0,0,0,0.15); transform:${F ? "none" : "translateX(-100%)"};` : ""}
        ${ut}
      ">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 18px 16px; border-bottom: 1px solid ${J}; flex-shrink: 0;">
          <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
            ${pt(_) ? _.startsWith("<") ? _ : `<img src="${_}" style="width: 28px; height: 28px; object-fit: contain; border-radius:8px;" />` : ""}
            ${pe ? "" : `
              <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
                ${We(h, M)}
                ${p ? `<span style="font-size:0.6rem; font-weight:700; line-height:1; padding:3px 7px; border-radius:999px; background:#d5f5e3; color:#17a862; white-space:nowrap; flex-shrink:0;">${p}</span>` : ""}
              </div>
            `}
          </div>
          ${Ge}
        </div>
        ${Ye}
        <div style="display:flex; flex-direction:column; flex:1; overflow:hidden; ${ft}">
          ${Ve}
        </div>
        ${Xe}
        ${ke}
      </div>
    ` : "", yt = W === "over" && F && Ce ? `
      <div style="position:absolute; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.4); backdrop-filter:blur(2px); z-index:25; pointer-events:none;"></div>
    ` : "", ce = oe === "floating" && te ? Oe("floating", ne, N, W, F, Z) : "", vt = de ? xe : "", gt = de ? "" : xe, mt = de ? `padding: ${ge};` : "", n = `
      <div style="
        display:flex; flex-direction:column; width:100%; height:600px;
        overflow:hidden; border:1px solid ${J}; border-radius:12px;
        font-family:system-ui,sans-serif;
        --snl-accent: ${M};
        --snl-sidebar-width: ${q};
        --snl-collapsed-w: ${le};
        --snl-border: ${J};
        --snl-section-color: #8996a4;
        --snl-brand-text-color: ${X};
        --snl-separator-color: ${J};
        --snl-footer-name-color: ${X};
        --snl-footer-role-color: #8996a4;
        --snl-footer-btn-color: #8996a4;
        --snl-profile-name-color: ${X};
        --snl-profile-role-color: #8996a4;
        --snl-hover-bg: rgba(0,0,0,0.04);
      ">
        ${vt}
        <div style="display:flex; flex:1; overflow:hidden; position:relative;">
          ${yt}
          ${bt}
          ${ce}
          <div style="flex:1; overflow-y: auto; background:${ve}; display:flex; flex-direction:column; min-width:0;">
            ${gt}
            ${de ? `
              <div style="flex:1; ${mt} box-sizing:border-box;">
                <zero-studio-slot name="outlet"></zero-studio-slot>
                <zero-studio-slot name="main"></zero-studio-slot>
              </div>
            ` : `
              <div style="flex:1; padding:${ge}; box-sizing:border-box;">
                <zero-studio-slot name="outlet"></zero-studio-slot>
                <zero-studio-slot name="main"></zero-studio-slot>
              </div>
            `}
          </div>
        </div>
      </div>
    `;
    return {
      kind: "panel",
      slots: G,
      templateHtml: n,
      badges: ["Sidebar Layout"],
      emptyText: "Drop sections into main, or switch a region to 'slot' mode"
    };
  }
  // ─── Runtime Render ────────────────────────────────────────────────────────
  render() {
    var ie;
    const t = Qe(this.navItems), e = hr(this.headerConfig), r = ur(this.sidebarFooterConfig), i = this.sidenavMode !== "hidden", o = !!(this.headerTitle || this.headerLogo), l = (R) => !!R && (R.startsWith("<") || R.startsWith("http") || R.startsWith("/") || R.includes(".")), s = () => {
      const R = (this.appName || "").trim().split(/\s+/).filter(Boolean), M = R[0] || "", Q = R.slice(1).join(" ");
      return y`<span class="snl-brand-name">${M}${Q ? y`<sup class="snl-brand-name-sup">${Q}</sup>` : T}</span>`;
    }, h = this.showThemeToggle ? y`
      <button class="snl-header-btn snl-theme-toggle"
        style="color:${this.headerText}; margin-right:0;"
        @click=${(R) => {
      R.stopPropagation(), this.toggleTheme();
    }}
        title=${this.themeMode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        aria-label="Toggle theme">
        ${this.themeMode === "dark" ? y`
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ` : y`
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        `}
      </button>
    ` : T, p = this.footerMode === "config" && r.show, _ = y`
      <div class="snl-profile-card"
        @click=${() => this.dispatchEvent(new CustomEvent("profileClick", { bubbles: !0, composed: !0 }))}>
        ${r.avatarUrl ? y`<img class="snl-profile-avatar snl-profile-avatar-img" src=${r.avatarUrl} />` : y`<div class="snl-profile-avatar snl-profile-avatar-init">${$e(r.userName)}</div>`}
        <div class="snl-profile-info">
          <div class="snl-profile-name">${r.userName ?? ""}</div>
          ${r.userRole ? y`<div class="snl-profile-role">${r.userRole}</div>` : T}
        </div>
        <span class="snl-profile-caret">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
        </span>
      </div>
    `, P = this.headerMode === "hidden" ? T : y`
      <header class="snl-header"
        style="
          height:${this.headerHeight}; background:var(--uiv-surface-color, ${this.headerBg});
          color:var(--uiv-text-color, ${this.headerText});
          border-bottom:1px solid var(--uiv-border-color, ${this.headerBorder});
        ">

        <button class="snl-header-toggle-mobile" @click=${(R) => {
      R.stopPropagation(), this.toggle();
    }} title="Toggle sidebar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>

        ${this.collapseBtnPosition === "header-left" && this.showCollapseBtn ? this.renderToggleButton("header-left") : T}

        ${o ? y`
          <div class="snl-header-brand" style="color:${this.headerText};">
            ${(() => {
      const R = this.headerLogo || this.appLogo;
      return R && R.startsWith("<") ? y`${cr(R)}` : R && (R.startsWith("http") || R.startsWith("/") || R.includes(".")) ? y`<img src="${R}" style="width: 24px; height: 24px; object-fit: contain;" />` : R ? y`<span class="snl-brand-logo">${R}</span>` : T;
    })()}
            <span>${this.headerTitle || this.appName}</span>
          </div>
        ` : T}

        ${this.headerMode === "config" ? y`

          ${e.showBreadcrumb && ((ie = e.breadcrumbs) != null && ie.length) ? y`
            <nav class="snl-header-breadcrumb">
              ${e.breadcrumbs.map((R, M) => y`
                ${M > 0 ? y`<span style="opacity:0.3; margin:0 4px;">›</span>` : T}
                <span style="${M === e.breadcrumbs.length - 1 ? "font-weight:600;" : "opacity:0.6;"}">${R}</span>
              `)}
            </nav>
          ` : T}

          ${e.showSearch ? y`
            <div class="snl-header-search">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8996a4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                class="snl-header-search-input"
                type="search"
                placeholder=${e.searchPlaceholder ?? "Search (Ctrl + K)"}
                @input=${(R) => this.dispatchEvent(new CustomEvent("search", {
      detail: { query: R.target.value },
      bubbles: !0,
      composed: !0
    }))}
                @keydown=${(R) => {
      R.key === "Enter" && this.dispatchEvent(new CustomEvent("search", {
        detail: { query: R.target.value, submit: !0 },
        bubbles: !0,
        composed: !0
      }));
    }}
              />
            </div>
          ` : T}

          <div class="snl-header-spacer"></div>

          ${h}

          ${e.showNotificationBell ? y`
            <div class="snl-header-bell">
              <span>🔔</span>
              ${(e.notificationCount ?? 0) > 0 ? y`
                <span class="snl-bell-count" style="background:${this.accentColor};">
                  ${e.notificationCount}
                </span>
              ` : T}
            </div>
          ` : T}

          ${e.showUserAvatar ? y`
            <div class="snl-header-user">
              ${e.userAvatarUrl ? y`
                <img class="snl-avatar snl-avatar-img" src=${e.userAvatarUrl} />
              ` : y`
                <div class="snl-avatar snl-avatar-init" style="background:${this.accentColor};">
                  ${$e(e.userName)}
                </div>
              `}
              <div class="snl-user-info" style="display:flex; flex-direction:column; line-height:1.25;">
                <span style="font-size:0.8rem; font-weight:600; color:${this.headerText};">${e.userName ?? ""}</span>
                ${e.userRole ? y`<span style="font-size:0.7rem; opacity:0.5;">${e.userRole}</span>` : T}
              </div>
              <span style="opacity:0.3; font-size:0.75rem;">▾</span>
            </div>
          ` : T}

        ` : y`
          <div class="snl-header-slot-zone">
            <slot name="header"></slot>
          </div>
          ${h}
        `}

        ${this.collapseBtnPosition === "header-right" && this.showCollapseBtn ? this.renderToggleButton("header-right") : T}
      </header>
    `, S = this.fixedFooter ? "" : "overflow-y: auto; scrollbar-width: thin;", B = this.fixedFooter ? "" : "flex: none; overflow-y: visible;", N = i ? y`
      <aside class="snl-sidebar"
        style="width:${this.sidebarWidth}; background:var(--uiv-surface-color, ${this.sidebarBg});
          --snl-collapsed-w:${this.collapsedWidth};
          ${S}">

        <div class="snl-sidebar-brand" style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
          <slot name="brand">
            <div class="snl-brand-wordmark" style="flex: 1;">
              ${l(this.appLogo) ? this.appLogo.startsWith("<") ? y`${cr(this.appLogo)}` : y`<img src="${this.appLogo}" style="width: 28px; height: 28px; object-fit: contain; border-radius:8px;" />` : T}
              ${s()}
              ${this.appSubtitle ? y`<span class="snl-brand-pill">${this.appSubtitle}</span>` : T}
            </div>
          </slot>
          ${this.collapseBtnPosition === "sidebar-top" && this.showCollapseBtn ? this.renderToggleButton("sidebar-top") : T}
        </div>

        <!-- Profile card at TOP (default) -->
        ${p && this.profilePosition === "top" ? _ : T}

        <!-- Nav area: config mode or slot mode -->
        ${this.sidenavMode === "slot" ? y`
          <div class="snl-sidebar-slot" style="${B}">
            <slot name="sidebar"></slot>
          </div>
        ` : y`
          <nav class="snl-nav" style="${B}">
            ${(() => {
      let R = !1;
      return t.map((M, Q) => {
        var te;
        if (M.separator) return y`<div class="nav-separator"></div>`;
        if (M.section) return y`
                  <div class="snl-nav-section">${M.section}</div>
                `;
        const X = this.activeItem === Q, J = !!((te = M.children) != null && te.length), ve = J && (this._expandedItems.has(Q) || X), ge = J ? (() => {
          const W = M.children.findIndex((F) => F.path && F.path === this.activePath || F.href && F.href === this.activePath);
          return W !== -1 ? W : X ? 0 : -1;
        })() : -1, le = M.bottom === !0 && !R;
        return le && (R = !0), y`
                  ${le ? y`<div style="flex: 1; min-height: 20px;"></div>` : T}
                  <button
                    class="nav-item ${X ? "is-active" : ""} ${M.disabled ? "is-disabled" : ""}"
                    style="
                      color:${X ? this.sidebarActiveText : this.sidebarText};
                      background:${X ? this.sidebarActiveBg : "transparent"};
                    "
                    @click=${() => J ? this.handleChildToggle(Q) : this.handleNavClick(Q, M)}
                  >
                    <span class="nav-icon">${M.icon ?? "•"}</span>
                    <span class="nav-label">${M.label ?? ""}</span>
                    ${M.badge ? y`
                      <span class="snl-nav-badge" style="background:${M.badgeColor || this.accentColor};">
                        ${M.badge}
                      </span>` : T}
                    ${J ? y`
                      <span class="nav-child-indicator" style="display:flex; margin-left:${M.badge ? "8px" : "auto"};">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="${ve ? "6 9 12 15 18 9" : "9 18 15 12 9 6"}"></polyline>
                        </svg>
                      </span>` : T}
                  </button>
                  ${J && ve ? y`
                    <div class="snl-sub-menu open">
                      ${M.children.map((W, F) => y`
                        <button
                          class="snl-sub-item ${F === ge ? "is-active" : ""} ${W.disabled ? "is-disabled" : ""}"
                          @click=${() => this.handleNavClick(Q, W)}
                        >
                          <span class="snl-sub-dot"></span>
                          <span class="nav-label">${W.label ?? ""}</span>
                        </button>
                      `)}
                    </div>
                  ` : T}
                `;
      });
    })()}
          </nav>

          <div class="snl-sidebar-extra">
            <slot name="sidebar-extra"></slot>
          </div>
        `}

        <!-- Footer area: config / slot / hidden -->
        ${this.footerMode === "hidden" ? T : this.footerMode === "slot" ? y`
            <div class="snl-footer-slot">
              <slot name="footer"></slot>
            </div>
          ` : r.show && this.profilePosition === "bottom" ? y`
            <div class="snl-sidebar-footer">
              ${r.avatarUrl ? y`
                <img class="snl-footer-avatar" src=${r.avatarUrl} />
              ` : y`
                <div class="snl-footer-initials">${$e(r.userName)}</div>
              `}
              <div class="snl-footer-info">
                <div class="snl-footer-name">${r.userName ?? ""}</div>
                ${r.userRole ? y`<div class="snl-footer-role">${r.userRole}</div>` : T}
              </div>
              <div class="snl-footer-actions">
                ${this.footerActionType === "buttons" && r.showSettings ? y`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("settingsClick", { bubbles: !0, composed: !0 }))}
                    title="Settings">⚙️</button>
                ` : T}
                ${this.footerActionType === "buttons" && r.showLogout ? y`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("logout", { bubbles: !0, composed: !0 }))}
                    title="Logout">↪</button>
                ` : T}
                ${this.footerActionType === "dropdown" ? y`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("profileClick", { bubbles: !0, composed: !0 }))}
                    title="Profile Actions">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                ` : T}
              </div>
            </div>
          ` : T}

        ${this.collapseBtnPosition === "sidebar-bottom" && this.showCollapseBtn ? this.renderToggleButton("sidebar-bottom") : T}
      </aside>
    ` : T, Y = this.fixedHeader ? P : T, q = this.fixedHeader ? T : P, ee = this.fixedHeader ? `padding: ${this.mainPadding};` : "";
    return y`
      ${this.renderResponsiveStyles()}
      <div>
        <div class="snl-shell" style="
          --snl-accent: var(--uiv-primary-color, ${this.accentColor});
          --snl-sidebar-width: ${this.sidebarWidth};
          --snl-collapsed-w: ${this.collapsedWidth};
          --snl-sidebar-text: ${this.sidebarText};
          --snl-border: var(--uiv-border-color, ${this.headerBorder});
          --snl-section-color: var(--uiv-text-muted, #8996a4);
          --snl-brand-text-color: var(--uiv-text-color, ${this.headerText});
          --snl-separator-color: var(--uiv-border-color, ${this.headerBorder});
          --snl-profile-name-color: var(--uiv-text-color, ${this.headerText});
          --snl-profile-role-color: var(--uiv-text-muted, #8996a4);
          --snl-footer-name-color: var(--uiv-text-color, ${this.headerText});
          --snl-footer-role-color: var(--uiv-text-muted, #8996a4);
          --snl-footer-btn-color: var(--uiv-text-muted, #8996a4);
          --snl-hover-bg: var(--uiv-hover-bg, ${this.sidebarText === "#94a3b8" ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.04)"});
          ${this.computeInternalStyles()}
        ">
          ${Y}
          <div class="snl-body">
            ${this.opened && (this.sidenavType === "over" || typeof window < "u" && window.innerWidth <= 768) && this.hasBackdrop ? y`
              <div class="snl-backdrop" @click=${this.close}></div>
            ` : T}
            ${N}
            ${this.collapseBtnPosition === "floating" && this.showCollapseBtn ? this.renderToggleButton("floating") : T}
            <main class="snl-main" style="background:var(--uiv-bg-color, ${this.mainBg}); ${"overflow-y: auto;"} ${ee} display: flex; flex-direction: column;">
              ${q}
              ${this.fixedHeader ? y`
                <slot name="outlet"></slot>
                <slot name="main"></slot>
                <slot></slot>
              ` : y`
                <div style="flex: 1; padding:${this.mainPadding}; box-sizing: border-box;">
                  <slot name="outlet"></slot>
                  <slot name="main"></slot>
                  <slot></slot>
                </div>
              `}
              ${this.renderDropIndicators()}
            </main>
          </div>
        </div>
      </div>
    `;
  }
};
x.slots = [];
x.styles = [
  z.styles,
  yr`
      :host {
        display: block;
        width: 100%;
        height: var(--zero-height, 100%);
        min-height: var(--zero-height, 100vh);
        --snl-accent: var(--uiv-primary-color, #4680ff);
        --snl-border: var(--uiv-border-color, #e5e9ef);
        --snl-section-color: var(--uiv-text-muted, #8996a4);
        --snl-ease: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: var(--zero-theme-typography-fontFamily, var(--uiv-font-family, system-ui, -apple-system, sans-serif));
        font-size: var(--zero-theme-typography-bodySize, var(--uiv-font-size-base, 14px));
      }

      :host > div {
        height: var(--zero-height, 100%);
        width: 100%;
        display: block; /* override base class flex — snl-shell handles its own layout */
      }

      /* Dark mode — flips the shared --uiv-* tokens the shell reads from.
         Toggled via the header theme button (see showThemeToggle). */
      :host([data-theme="dark"]) {
        --uiv-surface-color: #1e293b;
        --uiv-bg-color: #0f172a;
        --uiv-text-color: #f1f5f9;
        --uiv-text-muted: #94a3b8;
        --uiv-border-color: #334155;
        --uiv-hover-bg: rgba(255, 255, 255, 0.07);
      }

      .snl-theme-toggle svg { display: block; }

      /* ── Shell ── */
      .snl-shell {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      /* ── Header ── */
      .snl-header {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
        padding: 0 20px;
        box-sizing: border-box;
        z-index: 10;
        width: 100%;
      }

      .snl-header-brand {
        display: flex; align-items: center; gap: 10px;
        font-weight: 700; font-size: 0.95rem;
        white-space: nowrap; flex-shrink: 0;
      }

      .snl-header-breadcrumb {
        display: flex; align-items: center; gap: 4px; font-size: 0.8rem;
      }

      .snl-header-search {
        flex: 1; max-width: 280px;
        display: flex; align-items: center; gap: 8px;
        border-radius: 10px; padding: 8px 14px;
        background: var(--snl-search-bg, #f0f2f5);
      }

      .snl-header-search-input {
        flex: 1; min-width: 0;
        border: none; outline: none; background: transparent;
        color: inherit; font: inherit; font-size: 0.83rem;
        padding: 0; margin: 0;
      }
      .snl-header-search-input::placeholder { opacity: 0.5; }
      .snl-header-search-input::-webkit-search-cancel-button { cursor: pointer; }

      .snl-header-spacer { flex: 1; }

      .snl-header-bell {
        position: relative; cursor: pointer;
        padding: 6px; border-radius: 8px; font-size: 1.2rem;
        transition: background var(--snl-ease);
      }
      .snl-header-bell:hover { background: rgba(0,0,0,0.04); }

      .snl-bell-count {
        position: absolute; top: 2px; right: 2px;
        background: var(--snl-accent); color: #fff;
        font-size: 0.6rem; font-weight: 700;
        min-width: 16px; height: 16px;
        border-radius: 999px;
        display: flex; align-items: center; justify-content: center; padding: 0 3px;
      }

      .snl-header-user {
        display: flex; align-items: center; gap: 8px;
        cursor: pointer; border-radius: 8px; padding: 4px 8px;
        transition: background var(--snl-ease);
      }
      .snl-header-user:hover { background: rgba(0,0,0,0.04); }

      .snl-header-slot {
        display: flex; align-items: center;
        flex: 1; min-width: 0;
      }

      /* ── Body ── */
      .snl-body { display: flex; flex: 1; overflow: hidden; min-height: 0; position: relative; }

      /* ── Sidebar ── */
      .snl-sidebar {
        display: flex; flex-direction: column;
        flex-shrink: 0; overflow: hidden;
        transition: width var(--snl-ease), transform var(--snl-ease), left var(--snl-ease);
        border-right: 1px solid var(--snl-border, #e5e9ef);
      }

      :host([collapsed]) .snl-sidebar { width: var(--snl-collapsed-w, 64px) !important; }
      :host([collapsed]) .snl-brand-text,
      :host([collapsed]) .snl-brand-name,
      :host([collapsed]) .snl-brand-pill,
      :host([collapsed]) .nav-label,
      :host([collapsed]) .snl-nav-badge,
      :host([collapsed]) .snl-nav-section,
      :host([collapsed]) .snl-profile-info,
      :host([collapsed]) .snl-profile-caret,
      :host([collapsed]) .snl-footer-info,
      :host([collapsed]) .snl-footer-actions,
      :host([collapsed]) .snl-sidebar-extra { display: none; }

      .snl-sidebar-brand {
        display: flex; align-items: center; gap: 10px;
        padding: 18px 16px; flex-shrink: 0;
        border-bottom: 1px solid var(--snl-border, #e5e9ef);
      }

      .snl-brand-logo {
        font-size: 1.1rem; line-height: 1; flex-shrink: 0;
        width: 32px; height: 32px; border-radius: 8px;
        display: inline-flex; align-items: center; justify-content: center;
        background: var(--snl-logo-bg, var(--snl-accent));
      }
      .snl-brand-text {
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--snl-brand-text-color, #1d2630);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Text wordmark brand (e.g. "Able" + superscript + version pill) */
      .snl-brand-wordmark {
        display: flex; align-items: center; gap: 8px; min-width: 0;
      }
      .snl-brand-name {
        font-weight: 800; font-size: 1.35rem; line-height: 1;
        color: var(--snl-accent); letter-spacing: -0.01em;
        white-space: nowrap;
      }
      .snl-brand-name-sup {
        font-size: 0.5em; font-weight: 700;
        vertical-align: super; margin-left: 1px;
      }
      .snl-brand-pill {
        font-size: 0.6rem; font-weight: 700; line-height: 1;
        padding: 3px 7px; border-radius: 999px;
        background: var(--snl-version-bg, #d5f5e3);
        color: var(--snl-version-color, #17a862);
        white-space: nowrap; flex-shrink: 0;
      }

      /* Top profile card (bordered, sits under brand / above nav) */
      .snl-profile-card {
        display: flex; align-items: center; gap: 12px;
        margin: 14px 12px 6px; padding: 10px 12px;
        background: var(--snl-profile-bg, #ffffff);
        border: 1px solid var(--snl-border, #e5e9ef);
        border-radius: 10px; flex-shrink: 0; cursor: pointer;
        transition: border-color var(--snl-ease), box-shadow var(--snl-ease);
      }
      .snl-profile-card:hover { box-shadow: 0 2px 8px rgba(70,128,255,0.12); }
      :host([collapsed]) .snl-profile-card { justify-content: center; padding: 8px; }
      .snl-profile-avatar {
        width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
      }
      .snl-profile-avatar-img { object-fit: cover; }
      .snl-profile-avatar-init {
        background: var(--snl-accent); color: #fff;
        display: flex; align-items: center; justify-content: center;
        font-size: 0.85rem; font-weight: 700;
      }
      .snl-profile-info { flex: 1; min-width: 0; }
      .snl-profile-name {
        font-size: 0.85rem; font-weight: 700;
        color: var(--snl-profile-name-color, #1d2630);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-profile-role {
        font-size: 0.72rem;
        color: var(--snl-profile-role-color, #8996a4);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-profile-caret {
        color: var(--snl-profile-role-color, #8996a4);
        flex-shrink: 0; display: flex;
      }

      /* ── Nav ── */
      .snl-nav {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 10px 8px;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .nav-separator {
        height: 1px;
        background: var(--snl-separator-color, rgba(255,255,255,0.08));
        margin: 6px 12px;
      }

      .snl-nav-section {
        padding: 14px 12px 6px; font-size: 0.68rem;
        font-weight: 700; letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--snl-section-color, #8996a4);
        white-space: nowrap; overflow: hidden;
      }

      .nav-item {
        display: flex; align-items: center; gap: 10px;
        padding: 9px 12px; border-radius: 8px; margin-bottom: 2px;
        font-size: 0.875rem; font-weight: 500;
        transition: background var(--snl-ease), color var(--snl-ease), border-color var(--snl-ease);
        user-select: none; border: none; width: 100%;
        text-align: left; box-sizing: border-box; cursor: pointer;
        background: transparent; overflow: hidden;
        border-left: 4px solid transparent;
      }

      .nav-item:hover:not(.is-disabled) {
        background: var(--snl-hover-bg, rgba(255,255,255,0.07));
      }
      .nav-item.is-active {
        font-weight: 600;
        border-left-color: var(--snl-accent);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      .nav-item.is-disabled { cursor: not-allowed; opacity: 0.4; }

      .nav-icon { font-size: 1.05rem; line-height: 1; flex-shrink: 0; width: 20px; text-align: center; }
      .nav-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }

      .snl-nav-badge {
        margin-left: auto; font-size: 0.65rem; font-weight: 700;
        padding: 1px 7px; border-radius: 999px; color: #fff; flex-shrink: 0;
      }

      .nav-child-indicator { margin-left: auto; font-size: 0.8rem; opacity: 0.5; }

      /* ── Sub-menu (dotted sub-items) ── */
      .snl-sub-menu { display: flex; flex-direction: column; margin: 2px 0 6px; overflow: hidden; }
      .snl-sub-menu.open { display: flex; }
      .snl-sub-menu:not(.open) { display: none; }

      .snl-sub-item {
        display: flex; align-items: center; gap: 12px;
        padding: 6px 12px 6px 30px; margin-bottom: 1px;
        border: none; background: transparent; width: 100%;
        text-align: left; box-sizing: border-box; cursor: pointer;
        border-radius: 8px; font-size: 0.83rem; font-weight: 500;
        color: var(--snl-sidebar-text, #5b6b79);
        transition: background var(--snl-ease), color var(--snl-ease);
      }
      .snl-sub-item:hover { background: var(--snl-hover-bg, rgba(0,0,0,0.04)); }
      .snl-sub-item.is-active { color: var(--snl-accent); font-weight: 600; }
      .snl-sub-dot {
        width: 6px; height: 6px; border-radius: 50%;
        background: currentColor; opacity: 0.45; flex-shrink: 0;
      }
      .snl-sub-item.is-active .snl-sub-dot { opacity: 1; background: var(--snl-accent); }

      /* ── Sidebar Extra (slot drop zone) ── */
      .snl-sidebar-extra { padding: 8px; border-top: 1px solid var(--snl-border, #e5e9ef); flex-shrink: 0; }

      /* ── Sidebar Slot (full nav area as drop zone) ── */
      .snl-sidebar-slot {
        flex: 1; padding: 8px;
        display: flex; flex-direction: column;
      }

      /* ── Sidebar Footer (config) ── */
      .snl-sidebar-footer {
        display: flex; align-items: center; gap: 10px;
        padding: 12px 14px; flex-shrink: 0;
        border-top: 1px solid var(--snl-border, #e5e9ef);
      }

      .snl-footer-avatar {
        width: 34px; height: 34px; border-radius: 50%;
        object-fit: cover; flex-shrink: 0;
      }

      .snl-footer-initials {
        width: 34px; height: 34px; border-radius: 50%;
        background: var(--snl-accent); color: #fff;
        display: flex; align-items: center; justify-content: center;
        font-size: 0.75rem; font-weight: 700; flex-shrink: 0;
      }

      .snl-footer-info { flex: 1; overflow: hidden; }
      .snl-footer-name {
        font-size: 0.82rem; font-weight: 600;
        color: var(--snl-footer-name-color, #1d2630);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-footer-role {
        font-size: 0.7rem;
        color: var(--snl-footer-role-color, #8996a4);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-footer-actions { display: flex; gap: 4px; }
      .snl-footer-btn {
        cursor: pointer;
        color: var(--snl-footer-btn-color, #8996a4);
        font-size: 0.9rem; padding: 4px; border-radius: 4px; border: none; background: transparent;
      }
      .snl-footer-btn:hover { background: var(--snl-hover-bg, rgba(0,0,0,0.04)); }

      /* ── Sidebar Footer (slot) ── */
      .snl-footer-slot { padding: 8px; border-top: 1px solid var(--snl-border, #e5e9ef); flex-shrink: 0; }

      /* ── Header Slot drop zone ── */
      .snl-header-slot-zone { flex: 1; padding: 4px 0; display: flex; align-items: center; }

      /* ── Collapse button ── */
      .snl-collapse-btn {
        display: flex; align-items: center; justify-content: center;
        padding: 10px; margin: 4px 8px 8px;
        border-radius: 6px; cursor: pointer;
        background: transparent; border: none;
        font-size: 0.9rem;
        transition: background var(--snl-ease); flex-shrink: 0;
      }
      .snl-collapse-btn:hover { background: var(--snl-hover-bg, rgba(0,0,0,0.04)); }

      /* ── Main ── */
      .snl-main {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
        min-width: 0;
        display: flex;
        flex-direction: column;
      }

      /* Avatar shared styles */
      .snl-avatar {
        width: 32px; height: 32px; border-radius: 50%;
        flex-shrink: 0;
      }
      .snl-avatar-img { object-fit: cover; }
      .snl-avatar-init {
        display: flex; align-items: center; justify-content: center;
        font-size: 0.75rem; font-weight: 700; color: #fff;
        background: var(--snl-accent);
      }

      /* Drop-zone hint ring (shown in slot mode) */
      .snl-drop-hint {
        flex: 1; min-height: 60px;
        border: 2px dashed var(--snl-accent, #4680ff);
        border-radius: 8px; opacity: 0.5;
        display: flex; align-items: center; justify-content: center;
        font-size: 0.75rem; font-weight: 600; color: var(--snl-accent);
        margin: 4px;
      }

      /* Sidenav Modes (Side vs Over) */
      :host([sidenav-type="over"]) .snl-sidebar {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 30;
        height: 100%;
        box-shadow: 4px 0 12px rgba(0, 0, 0, 0.15);
      }

      /* Closed states */
      :host([sidenav-type="side"]:not([opened])) .snl-sidebar {
        width: 0 !important;
        border-right: none !important;
      }

      :host([sidenav-type="over"]:not([opened])) .snl-sidebar {
        transform: translateX(-100%);
        border-right: none !important;
      }

      .snl-header-toggle-mobile {
        display: none;
      }

      @media (max-width: 768px) {
        .snl-header-toggle-mobile {
          display: flex !important;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 1.25rem;
          padding: 8px;
          color: inherit;
        }

        /* Force overlay mode on mobile */
        .snl-sidebar {
          position: absolute !important;
          left: 0 !important;
          top: 0 !important;
          bottom: 0 !important;
          z-index: 30 !important;
          height: 100% !important;
          box-shadow: 4px 0 12px rgba(0, 0, 0, 0.15) !important;
          transform: translateX(-100%) !important;
          transition: transform var(--snl-ease) !important;
          width: 260px !important;
        }

        :host([opened]) .snl-sidebar {
          transform: translateX(0) !important;
        }

        /* Ensure main content is not indented/pushed on mobile */
        .snl-main {
          margin-left: 0 !important;
        }

        /* Make header components fit on narrow screen */
        .snl-header-brand {
          font-size: 0.85rem !important;
          gap: 6px !important;
        }
        .snl-header-search {
          max-width: 140px !important;
          padding: 5px 8px !important;
        }
        .snl-header-user {
          padding: 2px 4px !important;
        }
        .snl-user-info {
          display: none !important;
        }
      }

      .snl-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(2px);
        z-index: 25;
        transition: opacity var(--snl-ease);
      }

      .snl-floating-toggle {
        position: absolute;
        top: 20px;
        left: calc(var(--snl-sidebar-width, 260px) - 14px);
        transition: left var(--snl-ease);
        z-index: 35;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #ffffff;
        border: 1px solid rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0,0,0,0.08);
        color: var(--snl-sidebar-text, #94a3b8);
      }
      :host([collapsed]) .snl-floating-toggle {
        left: calc(var(--snl-collapsed-w, 64px) - 14px);
      }
      :host(:not([opened])) .snl-floating-toggle {
        left: -14px;
      }
      :host([sidenav-type="over"]:not([opened])) .snl-floating-toggle {
        left: 10px;
      }

      .snl-header-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        cursor: pointer;
        background: transparent;
        border: none;
        transition: background var(--snl-ease);
        flex-shrink: 0;
        margin-right: 8px;
      }
      .snl-header-btn:hover {
        background: rgba(0, 0, 0, 0.05);
      }
      .snl-header-btn svg {
        display: block;
      }

      slot { display: contents; }
    `
];
$([
  w({ type: String, reflect: !0 })
], x.prototype, "height", 2);
$([
  w({ type: String, attribute: "active-path" })
], x.prototype, "activePath", 2);
$([
  w({ type: String, attribute: "header-mode", reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Header Mode",
    fieldMappings: "headerMode",
    categoryLabel: "Regions",
    optionItems: [
      { label: "Built-in (Config)", value: "config" },
      { label: "Drag & Drop (Slot)", value: "slot" },
      { label: "Hidden", value: "hidden" }
    ]
  })
], x.prototype, "headerMode", 2);
$([
  w({ type: String, attribute: "sidenav-mode", reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Sidebar Nav Mode",
    fieldMappings: "sidenavMode",
    categoryLabel: "Regions",
    optionItems: [
      { label: "Built-in (Config)", value: "config" },
      { label: "Drag & Drop (Slot)", value: "slot" },
      { label: "Hidden", value: "hidden" }
    ]
  })
], x.prototype, "sidenavMode", 2);
$([
  w({ type: String, attribute: "footer-mode", reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Sidebar Footer Mode",
    fieldMappings: "footerMode",
    categoryLabel: "Regions",
    optionItems: [
      { label: "Built-in (Config)", value: "config" },
      { label: "Drag & Drop (Slot)", value: "slot" },
      { label: "Hidden", value: "hidden" }
    ]
  })
], x.prototype, "footerMode", 2);
$([
  w({ type: Boolean, attribute: "fixed-header" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Fixed Header",
    fieldMappings: "fixedHeader",
    categoryLabel: "Layout",
    initialValue: !0
  })
], x.prototype, "fixedHeader", 2);
$([
  w({ type: Boolean, attribute: "fixed-footer" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Fixed Sidebar Footer",
    fieldMappings: "fixedFooter",
    categoryLabel: "Layout",
    initialValue: !0
  })
], x.prototype, "fixedFooter", 2);
$([
  w({ type: String, attribute: "sidenav-type", reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Sidenav Layout Mode",
    fieldMappings: "sidenavType",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Side (Standard)", value: "side" },
      { label: "Over (Overlay/Drawer)", value: "over" }
    ]
  })
], x.prototype, "sidenavType", 2);
$([
  w({ type: Boolean, reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Sidenav Opened",
    fieldMappings: "opened",
    categoryLabel: "Layout",
    initialValue: !0
  })
], x.prototype, "opened", 2);
$([
  w({ type: Boolean, attribute: "has-backdrop", reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Has Backdrop (Over mode)",
    fieldMappings: "hasBackdrop",
    categoryLabel: "Layout",
    initialValue: !0
  })
], x.prototype, "hasBackdrop", 2);
$([
  w({ type: String, attribute: "collapse-btn-position", reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Collapse Button Position",
    fieldMappings: "collapseBtnPosition",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Sidebar Bottom", value: "sidebar-bottom" },
      { label: "Sidebar Top", value: "sidebar-top" },
      { label: "Header Left (Hamburger)", value: "header-left" },
      { label: "Header Right (Hamburger)", value: "header-right" },
      { label: "Floating (Edge)", value: "floating" },
      { label: "Hidden", value: "hidden" }
    ]
  })
], x.prototype, "collapseBtnPosition", 2);
$([
  w({ type: String, attribute: "collapse-btn-icon", reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Collapse Button Icon",
    fieldMappings: "collapseBtnIcon",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Hamburger (☰)", value: "hamburger" },
      { label: "Chevron (◀ / ▶)", value: "chevron" },
      { label: "Arrow (← / →)", value: "arrow" },
      { label: "Menu Dots (⋮)", value: "dots" }
    ]
  })
], x.prototype, "collapseBtnIcon", 2);
$([
  w({ type: String, attribute: "nav-items" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXTAREA,
    displayLabel: "Nav Items (JSON)",
    fieldMappings: "navItems",
    categoryLabel: "Navigation",
    placeholderText: ze,
    initialValue: ze
  })
], x.prototype, "navItems", 2);
$([
  w({ type: Number, reflect: !0, attribute: "active-item" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.NUMBER_INPUT,
    displayLabel: "Active Item Index",
    fieldMappings: "activeItem",
    categoryLabel: "Navigation",
    initialValue: 0
  })
], x.prototype, "activeItem", 2);
$([
  w({ type: String, attribute: "header-config" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXTAREA,
    displayLabel: "Header Config (JSON)",
    fieldMappings: "headerConfig",
    categoryLabel: "Header",
    placeholderText: ot,
    initialValue: ot
  })
], x.prototype, "headerConfig", 2);
$([
  w({ type: String, attribute: "sidebar-footer-config" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXTAREA,
    displayLabel: "Sidebar Footer Config (JSON)",
    fieldMappings: "sidebarFooterConfig",
    categoryLabel: "Sidebar Footer",
    placeholderText: nt,
    initialValue: nt
  })
], x.prototype, "sidebarFooterConfig", 2);
$([
  w({ type: String, attribute: "app-name" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "App / Brand Name",
    fieldMappings: "appName",
    categoryLabel: "Branding"
  })
], x.prototype, "appName", 2);
$([
  w({ type: String, attribute: "app-subtitle" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "App Subtitle",
    fieldMappings: "appSubtitle",
    categoryLabel: "Branding"
  })
], x.prototype, "appSubtitle", 2);
$([
  w({ type: String, attribute: "app-logo" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Logo Emoji / Character",
    fieldMappings: "appLogo",
    categoryLabel: "Branding"
  })
], x.prototype, "appLogo", 2);
$([
  w({ type: String, attribute: "header-title" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Header Title (overrides brand name in header bar)",
    fieldMappings: "headerTitle",
    categoryLabel: "Branding"
  })
], x.prototype, "headerTitle", 2);
$([
  w({ type: String, attribute: "header-logo" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Header Logo (overrides app logo in header bar)",
    fieldMappings: "headerLogo",
    categoryLabel: "Branding"
  })
], x.prototype, "headerLogo", 2);
$([
  w({ type: Boolean, reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Sidebar Collapsed",
    fieldMappings: "collapsed",
    categoryLabel: "Layout"
  })
], x.prototype, "collapsed", 2);
$([
  w({ type: String, attribute: "sidebar-width" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Sidebar Width (e.g. 260px)",
    fieldMappings: "sidebarWidth",
    categoryLabel: "Layout"
  })
], x.prototype, "sidebarWidth", 2);
$([
  w({ type: String, attribute: "header-height" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Header Height (e.g. 60px)",
    fieldMappings: "headerHeight",
    categoryLabel: "Layout"
  })
], x.prototype, "headerHeight", 2);
$([
  w({ type: String, attribute: "collapsed-width" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Collapsed Sidebar Width (e.g. 64px)",
    fieldMappings: "collapsedWidth",
    categoryLabel: "Layout"
  })
], x.prototype, "collapsedWidth", 2);
$([
  w({ type: Boolean, attribute: "show-collapse-btn", reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Show Collapse Button",
    fieldMappings: "showCollapseBtn",
    categoryLabel: "Layout"
  })
], x.prototype, "showCollapseBtn", 2);
$([
  w({ type: Boolean, attribute: "show-theme-toggle", reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Show Theme Toggle (Dark/Light)",
    fieldMappings: "showThemeToggle",
    categoryLabel: "Header"
  })
], x.prototype, "showThemeToggle", 2);
$([
  w({ type: String, attribute: "data-theme", reflect: !0 })
], x.prototype, "themeMode", 2);
$([
  w({ type: String, attribute: "sidebar-bg" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Sidebar Background",
    fieldMappings: "sidebarBg",
    categoryLabel: "Appearance"
  })
], x.prototype, "sidebarBg", 2);
$([
  w({ type: String, attribute: "sidebar-text" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Sidebar Text Color",
    fieldMappings: "sidebarText",
    categoryLabel: "Appearance"
  })
], x.prototype, "sidebarText", 2);
$([
  w({ type: String, attribute: "sidebar-active-bg" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Active Item Background",
    fieldMappings: "sidebarActiveBg",
    categoryLabel: "Appearance"
  })
], x.prototype, "sidebarActiveBg", 2);
$([
  w({ type: String, attribute: "sidebar-active-text" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Active Item Text Color",
    fieldMappings: "sidebarActiveText",
    categoryLabel: "Appearance"
  })
], x.prototype, "sidebarActiveText", 2);
$([
  w({ type: String, attribute: "accent-color" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Accent Color (badges, avatar bg, drop-zone ring)",
    fieldMappings: "accentColor",
    categoryLabel: "Appearance"
  })
], x.prototype, "accentColor", 2);
$([
  w({ type: String, attribute: "header-bg" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
], x.prototype, "headerBg", 2);
$([
  w({ type: String, attribute: "header-text" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Header Text Color",
    fieldMappings: "headerText",
    categoryLabel: "Appearance"
  })
], x.prototype, "headerText", 2);
$([
  w({ type: String, attribute: "header-border" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Header Border Color",
    fieldMappings: "headerBorder",
    categoryLabel: "Appearance"
  })
], x.prototype, "headerBorder", 2);
$([
  w({ type: String, attribute: "main-bg" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Main Area Background",
    fieldMappings: "mainBg",
    categoryLabel: "Appearance"
  })
], x.prototype, "mainBg", 2);
$([
  w({ type: String, attribute: "main-padding" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Main Area Padding (e.g. 24px)",
    fieldMappings: "mainPadding",
    categoryLabel: "Appearance"
  })
], x.prototype, "mainPadding", 2);
$([
  w({ type: String, attribute: "footer-action-type" }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Footer Action Type",
    fieldMappings: "footerActionType",
    categoryLabel: "Appearance",
    optionItems: [
      { label: "Settings/Logout Buttons", value: "buttons" },
      { label: "Chevron Dropdown", value: "dropdown" },
      { label: "None", value: "none" }
    ]
  })
], x.prototype, "footerActionType", 2);
$([
  w({ type: String, attribute: "profile-position", reflect: !0 }),
  v({
    attributeType: b.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Profile Card Position",
    fieldMappings: "profilePosition",
    categoryLabel: "Sidebar Footer",
    optionItems: [
      { label: "Top (below brand)", value: "top" },
      { label: "Bottom (footer)", value: "bottom" }
    ]
  })
], x.prototype, "profilePosition", 2);
$([
  v({ attributeType: b.EVENT, displayLabel: "On Opened Change", eventTrigger: "openedchange", categoryLabel: "Triggers" })
], x.prototype, "onOpenedChange", 1);
$([
  v({ attributeType: b.EVENT, displayLabel: "On Nav Item Click", eventTrigger: "navchange", categoryLabel: "Triggers" })
], x.prototype, "onNavChange", 1);
$([
  v({ attributeType: b.EVENT, displayLabel: "On Sidebar Toggle", eventTrigger: "sidebarToggle", categoryLabel: "Triggers" })
], x.prototype, "onSidebarToggle", 1);
$([
  v({ attributeType: b.EVENT, displayLabel: "On Logout Click", eventTrigger: "logout", categoryLabel: "Triggers" })
], x.prototype, "onLogout", 1);
$([
  v({ attributeType: b.EVENT, displayLabel: "On Profile Click", eventTrigger: "profileClick", categoryLabel: "Triggers" })
], x.prototype, "onProfileClick", 1);
$([
  v({ attributeType: b.EVENT, displayLabel: "On Settings Click", eventTrigger: "settingsClick", categoryLabel: "Triggers" })
], x.prototype, "onSettingsClick", 1);
$([
  v({ attributeType: b.EVENT, displayLabel: "On Search", eventTrigger: "search", categoryLabel: "Triggers" })
], x.prototype, "onSearch", 1);
$([
  v({ attributeType: b.EVENT, displayLabel: "On Theme Change", eventTrigger: "themechange", categoryLabel: "Triggers" })
], x.prototype, "onThemeChange", 1);
$([
  v({ attributeType: b.ACTION, displayLabel: "Open Sidenav", categoryLabel: "Actions" })
], x.prototype, "open", 1);
$([
  v({ attributeType: b.ACTION, displayLabel: "Close Sidenav", categoryLabel: "Actions" })
], x.prototype, "close", 1);
$([
  v({ attributeType: b.ACTION, displayLabel: "Toggle Sidenav Opened", categoryLabel: "Actions" })
], x.prototype, "toggle", 1);
$([
  v({ attributeType: b.ACTION, displayLabel: "Toggle Sidebar Collapse", categoryLabel: "Actions" })
], x.prototype, "toggleSidebar", 1);
$([
  v({ attributeType: b.ACTION, displayLabel: "Expand Sidebar", categoryLabel: "Actions" })
], x.prototype, "expandSidebar", 1);
$([
  v({ attributeType: b.ACTION, displayLabel: "Collapse Sidebar", categoryLabel: "Actions" })
], x.prototype, "collapseSidebar", 1);
$([
  v({ attributeType: b.ACTION, displayLabel: "Navigate To Item (by index)", categoryLabel: "Actions" })
], x.prototype, "navigateTo", 1);
$([
  v({ attributeType: b.ACTION, displayLabel: "Toggle Theme (Dark/Light)", categoryLabel: "Actions" })
], x.prototype, "toggleTheme", 1);
x = $([
  Er({
    name: "zero-sidenav-layout",
    version: "1.1.0",
    title: "Sidebar Layout",
    elementSelector: "zero-sidenav-layout",
    group: "Layout",
    iconName: "sidenav-layout-icon.png",
    layoutKind: "panel",
    environment: ["page"]
  }),
  Jr("zero-sidenav-layout"),
  kr()
], x);
export {
  ot as DEFAULT_HEADER_CONFIG_JSON,
  ze as DEFAULT_NAV_ITEMS_JSON,
  nt as DEFAULT_SIDEBAR_FOOTER_CONFIG_JSON,
  x as ZeroSidenavLayout
};
