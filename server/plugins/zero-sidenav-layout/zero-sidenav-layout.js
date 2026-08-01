var $r = Object.defineProperty;
var Tr = (t, e, r) => e in t ? $r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Zt = (t, e, r) => Tr(t, typeof e != "symbol" ? e + "" : e, r);
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var er;
(function(t) {
  (function(e) {
    var r = typeof globalThis == "object" ? globalThis : typeof Qt == "object" ? Qt : typeof self == "object" ? self : typeof this == "object" ? this : c(), i = o(t);
    typeof r.Reflect < "u" && (i = o(r.Reflect, i)), e(i, r), typeof r.Reflect > "u" && (r.Reflect = t);
    function o(p, _) {
      return function(S, A) {
        Object.defineProperty(p, S, { configurable: !0, writable: !0, value: A }), _ && _(S, A);
      };
    }
    function s() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function l() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function c() {
      return s() || l();
    }
  })(function(e, r) {
    var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", s = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", c = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, _ = !c && !p, S = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: c ? function() {
        return Je(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Je({ __proto__: null });
      } : function() {
        return Je({});
      },
      has: _ ? function(a, n) {
        return i.call(a, n);
      } : function(a, n) {
        return n in a;
      },
      get: _ ? function(a, n) {
        return i.call(a, n) ? a[n] : void 0;
      } : function(a, n) {
        return a[n];
      }
    }, A = Object.getPrototypeOf(Function), N = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : mt(), B = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : xt(), Y = typeof WeakMap == "function" ? WeakMap : wt(), K = o ? Symbol.for("@reflect-metadata:registry") : void 0, ee = yt(), Z = gt(ee);
    function ie(a, n, d, h) {
      if (P(d)) {
        if (!Se(a))
          throw new TypeError();
        if (!Fe(n))
          throw new TypeError();
        return te(a, n);
      } else {
        if (!Se(a))
          throw new TypeError();
        if (!H(n))
          throw new TypeError();
        if (!H(h) && !P(h) && !re(h))
          throw new TypeError();
        return re(h) && (h = void 0), d = q(d), W(a, n, d, h);
      }
    }
    e("decorate", ie);
    function m(a, n) {
      function d(h, k) {
        if (!H(h))
          throw new TypeError();
        if (!P(k) && !ut(k))
          throw new TypeError();
        De(a, n, h, k);
      }
      return d;
    }
    e("metadata", m);
    function L(a, n, d, h) {
      if (!H(d))
        throw new TypeError();
      return P(h) || (h = q(h)), De(a, n, d, h);
    }
    e("defineMetadata", L);
    function Q(a, n, d) {
      if (!H(n))
        throw new TypeError();
      return P(d) || (d = q(d)), V(a, n, d);
    }
    e("hasMetadata", Q);
    function X(a, n, d) {
      if (!H(n))
        throw new TypeError();
      return P(d) || (d = q(d)), ke(a, n, d);
    }
    e("hasOwnMetadata", X);
    function G(a, n, d) {
      if (!H(n))
        throw new TypeError();
      return P(d) || (d = q(d)), ae(a, n, d);
    }
    e("getMetadata", G);
    function me(a, n, d) {
      if (!H(n))
        throw new TypeError();
      return P(d) || (d = q(d)), ne(a, n, d);
    }
    e("getOwnMetadata", me);
    function xe(a, n) {
      if (!H(a))
        throw new TypeError();
      return P(n) || (n = q(n)), pe(a, n);
    }
    e("getMetadataKeys", xe);
    function Ue(a, n) {
      if (!H(a))
        throw new TypeError();
      return P(n) || (n = q(n)), Ee(a, n);
    }
    e("getOwnMetadataKeys", Ue);
    function de(a, n, d) {
      if (!H(n))
        throw new TypeError();
      if (P(d) || (d = q(d)), !H(n))
        throw new TypeError();
      P(d) || (d = q(d));
      var h = ce(
        n,
        d,
        /*Create*/
        !1
      );
      return P(h) ? !1 : h.OrdinaryDeleteMetadata(a, n, d);
    }
    e("deleteMetadata", de);
    function te(a, n) {
      for (var d = a.length - 1; d >= 0; --d) {
        var h = a[d], k = h(n);
        if (!P(k) && !re(k)) {
          if (!Fe(k))
            throw new TypeError();
          n = k;
        }
      }
      return n;
    }
    function W(a, n, d, h) {
      for (var k = a.length - 1; k >= 0; --k) {
        var U = a[k], j = U(n, d, h);
        if (!P(j) && !re(j)) {
          if (!H(j))
            throw new TypeError();
          h = j;
        }
      }
      return h;
    }
    function V(a, n, d) {
      var h = ke(a, n, d);
      if (h)
        return !0;
      var k = Pe(n);
      return re(k) ? !1 : V(a, k, d);
    }
    function ke(a, n, d) {
      var h = ce(
        n,
        d,
        /*Create*/
        !1
      );
      return P(h) ? !1 : Ve(h.OrdinaryHasOwnMetadata(a, n, d));
    }
    function ae(a, n, d) {
      var h = ke(a, n, d);
      if (h)
        return ne(a, n, d);
      var k = Pe(n);
      if (!re(k))
        return ae(a, k, d);
    }
    function ne(a, n, d) {
      var h = ce(
        n,
        d,
        /*Create*/
        !1
      );
      if (!P(h))
        return h.OrdinaryGetOwnMetadata(a, n, d);
    }
    function De(a, n, d, h) {
      var k = ce(
        d,
        h,
        /*Create*/
        !0
      );
      k.OrdinaryDefineOwnMetadata(a, n, d, h);
    }
    function pe(a, n) {
      var d = Ee(a, n), h = Pe(a);
      if (h === null)
        return d;
      var k = pe(h, n);
      if (k.length <= 0)
        return d;
      if (d.length <= 0)
        return k;
      for (var U = new B(), j = [], O = 0, u = d; O < u.length; O++) {
        var b = u[O], v = U.has(b);
        v || (U.add(b), j.push(b));
      }
      for (var x = 0, R = k; x < R.length; x++) {
        var b = R[x], v = U.has(b);
        v || (U.add(b), j.push(b));
      }
      return j;
    }
    function Ee(a, n) {
      var d = ce(
        a,
        n,
        /*create*/
        !1
      );
      return d ? d.OrdinaryOwnMetadataKeys(a, n) : [];
    }
    function We(a) {
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
    function P(a) {
      return a === void 0;
    }
    function re(a) {
      return a === null;
    }
    function he(a) {
      return typeof a == "symbol";
    }
    function H(a) {
      return typeof a == "object" ? a !== null : typeof a == "function";
    }
    function pt(a, n) {
      switch (We(a)) {
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
      var d = "string", h = Ye(a, s);
      if (h !== void 0) {
        var k = h.call(a, d);
        if (H(k))
          throw new TypeError();
        return k;
      }
      return ht(a);
    }
    function ht(a, n) {
      var d, h;
      {
        var k = a.toString;
        if (we(k)) {
          var h = k.call(a);
          if (!H(h))
            return h;
        }
        var d = a.valueOf;
        if (we(d)) {
          var h = d.call(a);
          if (!H(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Ve(a) {
      return !!a;
    }
    function ct(a) {
      return "" + a;
    }
    function q(a) {
      var n = pt(a);
      return he(n) ? n : ct(n);
    }
    function Se(a) {
      return Array.isArray ? Array.isArray(a) : a instanceof Object ? a instanceof Array : Object.prototype.toString.call(a) === "[object Array]";
    }
    function we(a) {
      return typeof a == "function";
    }
    function Fe(a) {
      return typeof a == "function";
    }
    function ut(a) {
      switch (We(a)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function $e(a, n) {
      return a === n || a !== a && n !== n;
    }
    function Ye(a, n) {
      var d = a[n];
      if (d != null) {
        if (!we(d))
          throw new TypeError();
        return d;
      }
    }
    function ft(a) {
      var n = Ye(a, l);
      if (!we(n))
        throw new TypeError();
      var d = n.call(a);
      if (!H(d))
        throw new TypeError();
      return d;
    }
    function Xe(a) {
      return a.value;
    }
    function qe(a) {
      var n = a.next();
      return n.done ? !1 : n;
    }
    function Ge(a) {
      var n = a.return;
      n && n.call(a);
    }
    function Pe(a) {
      var n = Object.getPrototypeOf(a);
      if (typeof a != "function" || a === A || n !== A)
        return n;
      var d = a.prototype, h = d && Object.getPrototypeOf(d);
      if (h == null || h === Object.prototype)
        return n;
      var k = h.constructor;
      return typeof k != "function" || k === a ? n : k;
    }
    function bt() {
      var a;
      !P(K) && typeof r.Reflect < "u" && !(K in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (a = vt(r.Reflect));
      var n, d, h, k = new Y(), U = {
        registerProvider: j,
        getProvider: u,
        setProvider: v
      };
      return U;
      function j(x) {
        if (!Object.isExtensible(U))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case a === x:
            break;
          case P(n):
            n = x;
            break;
          case n === x:
            break;
          case P(d):
            d = x;
            break;
          case d === x:
            break;
          default:
            h === void 0 && (h = new B()), h.add(x);
            break;
        }
      }
      function O(x, R) {
        if (!P(n)) {
          if (n.isProviderFor(x, R))
            return n;
          if (!P(d)) {
            if (d.isProviderFor(x, R))
              return n;
            if (!P(h))
              for (var M = ft(h); ; ) {
                var I = qe(M);
                if (!I)
                  return;
                var J = Xe(I);
                if (J.isProviderFor(x, R))
                  return Ge(M), J;
              }
          }
        }
        if (!P(a) && a.isProviderFor(x, R))
          return a;
      }
      function u(x, R) {
        var M = k.get(x), I;
        return P(M) || (I = M.get(R)), P(I) && (I = O(x, R), P(I) || (P(M) && (M = new N(), k.set(x, M)), M.set(R, I))), I;
      }
      function b(x) {
        if (P(x))
          throw new TypeError();
        return n === x || d === x || !P(h) && h.has(x);
      }
      function v(x, R, M) {
        if (!b(M))
          throw new Error("Metadata provider not registered.");
        var I = u(x, R);
        if (I !== M) {
          if (!P(I))
            return !1;
          var J = k.get(x);
          P(J) && (J = new N(), k.set(x, J)), J.set(R, M);
        }
        return !0;
      }
    }
    function yt() {
      var a;
      return !P(K) && H(r.Reflect) && Object.isExtensible(r.Reflect) && (a = r.Reflect[K]), P(a) && (a = bt()), !P(K) && H(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, K, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: a
      }), a;
    }
    function gt(a) {
      var n = new Y(), d = {
        isProviderFor: function(b, v) {
          var x = n.get(b);
          return P(x) ? !1 : x.has(v);
        },
        OrdinaryDefineOwnMetadata: j,
        OrdinaryHasOwnMetadata: k,
        OrdinaryGetOwnMetadata: U,
        OrdinaryOwnMetadataKeys: O,
        OrdinaryDeleteMetadata: u
      };
      return ee.registerProvider(d), d;
      function h(b, v, x) {
        var R = n.get(b), M = !1;
        if (P(R)) {
          if (!x)
            return;
          R = new N(), n.set(b, R), M = !0;
        }
        var I = R.get(v);
        if (P(I)) {
          if (!x)
            return;
          if (I = new N(), R.set(v, I), !a.setProvider(b, v, d))
            throw R.delete(v), M && n.delete(b), new Error("Wrong provider for target.");
        }
        return I;
      }
      function k(b, v, x) {
        var R = h(
          v,
          x,
          /*Create*/
          !1
        );
        return P(R) ? !1 : Ve(R.has(b));
      }
      function U(b, v, x) {
        var R = h(
          v,
          x,
          /*Create*/
          !1
        );
        if (!P(R))
          return R.get(b);
      }
      function j(b, v, x, R) {
        var M = h(
          x,
          R,
          /*Create*/
          !0
        );
        M.set(b, v);
      }
      function O(b, v) {
        var x = [], R = h(
          b,
          v,
          /*Create*/
          !1
        );
        if (P(R))
          return x;
        for (var M = R.keys(), I = ft(M), J = 0; ; ) {
          var Ae = qe(I);
          if (!Ae)
            return x.length = J, x;
          var Ke = Xe(Ae);
          try {
            x[J] = Ke;
          } catch (Ze) {
            try {
              Ge(I);
            } finally {
              throw Ze;
            }
          }
          J++;
        }
      }
      function u(b, v, x) {
        var R = h(
          v,
          x,
          /*Create*/
          !1
        );
        if (P(R) || !R.delete(b))
          return !1;
        if (R.size === 0) {
          var M = n.get(v);
          P(M) || (M.delete(x), M.size === 0 && n.delete(M));
        }
        return !0;
      }
    }
    function vt(a) {
      var n = a.defineMetadata, d = a.hasOwnMetadata, h = a.getOwnMetadata, k = a.getOwnMetadataKeys, U = a.deleteMetadata, j = new Y(), O = {
        isProviderFor: function(u, b) {
          var v = j.get(u);
          return !P(v) && v.has(b) ? !0 : k(u, b).length ? (P(v) && (v = new B(), j.set(u, v)), v.add(b), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: n,
        OrdinaryHasOwnMetadata: d,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: k,
        OrdinaryDeleteMetadata: U
      };
      return O;
    }
    function ce(a, n, d) {
      var h = ee.getProvider(a, n);
      if (!P(h))
        return h;
      if (d) {
        if (ee.setProvider(a, n, Z))
          return Z;
        throw new Error("Illegal state.");
      }
    }
    function mt() {
      var a = {}, n = [], d = (
        /** @class */
        function() {
          function O(u, b, v) {
            this._index = 0, this._keys = u, this._values = b, this._selector = v;
          }
          return O.prototype["@@iterator"] = function() {
            return this;
          }, O.prototype[l] = function() {
            return this;
          }, O.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var b = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = n, this._values = n) : this._index++, { value: b, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, O.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = n, this._values = n), u;
          }, O.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = n, this._values = n), { value: u, done: !0 };
          }, O;
        }()
      ), h = (
        /** @class */
        function() {
          function O() {
            this._keys = [], this._values = [], this._cacheKey = a, this._cacheIndex = -2;
          }
          return Object.defineProperty(O.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), O.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, O.prototype.get = function(u) {
            var b = this._find(
              u,
              /*insert*/
              !1
            );
            return b >= 0 ? this._values[b] : void 0;
          }, O.prototype.set = function(u, b) {
            var v = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[v] = b, this;
          }, O.prototype.delete = function(u) {
            var b = this._find(
              u,
              /*insert*/
              !1
            );
            if (b >= 0) {
              for (var v = this._keys.length, x = b + 1; x < v; x++)
                this._keys[x - 1] = this._keys[x], this._values[x - 1] = this._values[x];
              return this._keys.length--, this._values.length--, $e(u, this._cacheKey) && (this._cacheKey = a, this._cacheIndex = -2), !0;
            }
            return !1;
          }, O.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = a, this._cacheIndex = -2;
          }, O.prototype.keys = function() {
            return new d(this._keys, this._values, k);
          }, O.prototype.values = function() {
            return new d(this._keys, this._values, U);
          }, O.prototype.entries = function() {
            return new d(this._keys, this._values, j);
          }, O.prototype["@@iterator"] = function() {
            return this.entries();
          }, O.prototype[l] = function() {
            return this.entries();
          }, O.prototype._find = function(u, b) {
            if (!$e(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var v = 0; v < this._keys.length; v++)
                if ($e(this._keys[v], u)) {
                  this._cacheIndex = v;
                  break;
                }
            }
            return this._cacheIndex < 0 && b && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, O;
        }()
      );
      return h;
      function k(O, u) {
        return O;
      }
      function U(O, u) {
        return u;
      }
      function j(O, u) {
        return [O, u];
      }
    }
    function xt() {
      var a = (
        /** @class */
        function() {
          function n() {
            this._map = new N();
          }
          return Object.defineProperty(n.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), n.prototype.has = function(d) {
            return this._map.has(d);
          }, n.prototype.add = function(d) {
            return this._map.set(d, d), this;
          }, n.prototype.delete = function(d) {
            return this._map.delete(d);
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
          }, n.prototype[l] = function() {
            return this.keys();
          }, n;
        }()
      );
      return a;
    }
    function wt() {
      var a = 16, n = S.create(), d = h();
      return (
        /** @class */
        function() {
          function u() {
            this._key = h();
          }
          return u.prototype.has = function(b) {
            var v = k(
              b,
              /*create*/
              !1
            );
            return v !== void 0 ? S.has(v, this._key) : !1;
          }, u.prototype.get = function(b) {
            var v = k(
              b,
              /*create*/
              !1
            );
            return v !== void 0 ? S.get(v, this._key) : void 0;
          }, u.prototype.set = function(b, v) {
            var x = k(
              b,
              /*create*/
              !0
            );
            return x[this._key] = v, this;
          }, u.prototype.delete = function(b) {
            var v = k(
              b,
              /*create*/
              !1
            );
            return v !== void 0 ? delete v[this._key] : !1;
          }, u.prototype.clear = function() {
            this._key = h();
          }, u;
        }()
      );
      function h() {
        var u;
        do
          u = "@@WeakMap@@" + O();
        while (S.has(n, u));
        return n[u] = !0, u;
      }
      function k(u, b) {
        if (!i.call(u, d)) {
          if (!b)
            return;
          Object.defineProperty(u, d, { value: S.create() });
        }
        return u[d];
      }
      function U(u, b) {
        for (var v = 0; v < b; ++v)
          u[v] = Math.random() * 255 | 0;
        return u;
      }
      function j(u) {
        if (typeof Uint8Array == "function") {
          var b = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(b) : typeof msCrypto < "u" ? msCrypto.getRandomValues(b) : U(b, u), b;
        }
        return U(new Array(u), u);
      }
      function O() {
        var u = j(a);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var b = "", v = 0; v < a; ++v) {
          var x = u[v];
          (v === 4 || v === 6 || v === 8) && (b += "-"), x < 16 && (b += "0"), b += x.toString(16).toLowerCase();
        }
        return b;
      }
    }
    function Je(a) {
      return a.__ = void 0, delete a.__, a;
    }
  });
})(er || (er = {}));
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
function kr(t) {
  return _r(t);
}
function Er(t) {
  return function(e) {
    class r extends e {
      constructor() {
        super(...arguments);
        Zt(this, "_stylesApplied", !1);
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
        var _;
        const s = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), c = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (s && c) {
          const S = new CSSStyleSheet(), A = (_ = s.sheet) == null ? void 0 : _.cssRules;
          A && (Array.from(A).forEach((N) => S.insertRule(N.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, S]);
        } else if (s) {
          const S = s.cloneNode(!0);
          p.appendChild(S);
        }
        l.forEach((S) => {
          const A = S.cloneNode(!0);
          p.appendChild(A);
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
function y(t) {
  return Pr(t);
}
var E;
(function(t) {
  t.TEXT_INPUT = "text-input", t.PASSWORD_INPUT = "password-input", t.DROPDOWN = "dropdown", t.CHECKBOX = "checkbox", t.RADIO_BUTTON = "radio-button", t.RANGE_SLIDER = "range-slider", t.FILE_INPUT = "file-input", t.DATE_PICKER = "date-picker", t.COLOR_PICKER = "color-picker", t.NUMBER_INPUT = "number-input", t.TEXTAREA = "textarea", t.MULTI_SELECT = "multi-select", t.POPUP_DROPDOWN = "popup-dropdown", t.LAYOUT_PICKER = "layout-picker", t.RESPONSIVE_OVERRIDE = "responsive-override", t.IMAGE_PICKER = "image-picker", t.CHIPS = "chips";
})(E || (E = {}));
var f;
(function(t) {
  t.PROPERTY = "property", t.EVENT = "event", t.ACTION = "action";
})(f || (f = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt = globalThis, Pt = rt.ShadowRoot && (rt.ShadyCSS === void 0 || rt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, At = Symbol(), tr = /* @__PURE__ */ new WeakMap();
let yr = class {
  constructor(e, r, i) {
    if (this._$cssResult$ = !0, i !== At) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (Pt && e === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (e = tr.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && tr.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ar = (t) => new yr(typeof t == "string" ? t : t + "", void 0, At), gr = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((i, o, s) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + t[s + 1], t[0]);
  return new yr(r, t, At);
}, Or = (t, e) => {
  if (Pt) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const i = document.createElement("style"), o = rt.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = r.cssText, t.appendChild(i);
  }
}, rr = Pt ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const i of e.cssRules) r += i.cssText;
  return Ar(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Rr, defineProperty: Lr, getOwnPropertyDescriptor: Mr, getOwnPropertyNames: zr, getOwnPropertySymbols: Nr, getPrototypeOf: Br } = Object, le = globalThis, ir = le.trustedTypes, Ir = ir ? ir.emptyScript : "", Ct = le.reactiveElementPolyfillSupport, Me = (t, e) => t, it = { toAttribute(t, e) {
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
} }, Ot = (t, e) => !Rr(t, e), or = { attribute: !0, type: String, converter: it, reflect: !1, useDefault: !1, hasChanged: Ot };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), le.litPropertyMetadata ?? (le.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Te = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = or) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, r);
      o !== void 0 && Lr(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, r, i) {
    const { get: o, set: s } = Mr(this.prototype, e) ?? { get() {
      return this[r];
    }, set(l) {
      this[r] = l;
    } };
    return { get: o, set(l) {
      const c = o == null ? void 0 : o.call(this);
      s == null || s.call(this, l), this.requestUpdate(e, c, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? or;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Me("elementProperties"))) return;
    const e = Br(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Me("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Me("properties"))) {
      const r = this.properties, i = [...zr(r), ...Nr(r)];
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
      for (const o of i) r.unshift(rr(o));
    } else e !== void 0 && r.push(rr(e));
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
    var s;
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const l = (((s = i.converter) == null ? void 0 : s.toAttribute) !== void 0 ? i.converter : it).toAttribute(r, i.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var s, l;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const c = i.getPropertyOptions(o), p = typeof c.converter == "function" ? { fromAttribute: c.converter } : ((s = c.converter) == null ? void 0 : s.fromAttribute) !== void 0 ? c.converter : it;
      this._$Em = o;
      const _ = p.fromAttribute(r, c.type);
      this[o] = _ ?? ((l = this._$Ej) == null ? void 0 : l.get(o)) ?? _, this._$Em = null;
    }
  }
  requestUpdate(e, r, i, o = !1, s) {
    var l;
    if (e !== void 0) {
      const c = this.constructor;
      if (o === !1 && (s = this[e]), i ?? (i = c.getPropertyOptions(e)), !((i.hasChanged ?? Ot)(s, r) || i.useDefault && i.reflect && s === ((l = this._$Ej) == null ? void 0 : l.get(e)) && !this.hasAttribute(c._$Eu(e, i)))) return;
      this.C(e, r, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: i, reflect: o, wrapped: s }, l) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, l ?? r ?? this[e]), s !== !0 || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (r = void 0), this._$AL.set(e, r)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [s, l] of this._$Ep) this[s] = l;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [s, l] of o) {
        const { wrapped: c } = l, p = this[s];
        c !== !0 || this._$AL.has(s) || p === void 0 || this.C(s, void 0, l, p);
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
Te.elementStyles = [], Te.shadowRootOptions = { mode: "open" }, Te[Me("elementProperties")] = /* @__PURE__ */ new Map(), Te[Me("finalized")] = /* @__PURE__ */ new Map(), Ct == null || Ct({ ReactiveElement: Te }), (le.reactiveElementVersions ?? (le.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ze = globalThis, ar = (t) => t, ot = ze.trustedTypes, nr = ot ? ot.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, vr = "$lit$", se = `lit$${Math.random().toFixed(9).slice(2)}$`, mr = "?" + se, Hr = `<${mr}>`, ge = document, Be = () => ge.createComment(""), Ie = (t) => t === null || typeof t != "object" && typeof t != "function", Rt = Array.isArray, jr = (t) => Rt(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, Re = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, sr = /-->/g, lr = />/g, ue = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), dr = /'/g, pr = /"/g, xr = /^(?:script|style|textarea|title)$/i, Ur = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), g = Ur(1), ve = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), hr = /* @__PURE__ */ new WeakMap(), fe = ge.createTreeWalker(ge, 129);
function wr(t, e) {
  if (!Rt(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return nr !== void 0 ? nr.createHTML(e) : e;
}
const Dr = (t, e) => {
  const r = t.length - 1, i = [];
  let o, s = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Re;
  for (let c = 0; c < r; c++) {
    const p = t[c];
    let _, S, A = -1, N = 0;
    for (; N < p.length && (l.lastIndex = N, S = l.exec(p), S !== null); ) N = l.lastIndex, l === Re ? S[1] === "!--" ? l = sr : S[1] !== void 0 ? l = lr : S[2] !== void 0 ? (xr.test(S[2]) && (o = RegExp("</" + S[2], "g")), l = ue) : S[3] !== void 0 && (l = ue) : l === ue ? S[0] === ">" ? (l = o ?? Re, A = -1) : S[1] === void 0 ? A = -2 : (A = l.lastIndex - S[2].length, _ = S[1], l = S[3] === void 0 ? ue : S[3] === '"' ? pr : dr) : l === pr || l === dr ? l = ue : l === sr || l === lr ? l = Re : (l = ue, o = void 0);
    const B = l === ue && t[c + 1].startsWith("/>") ? " " : "";
    s += l === Re ? p + Hr : A >= 0 ? (i.push(_), p.slice(0, A) + vr + p.slice(A) + se + B) : p + se + (A === -2 ? c : B);
  }
  return [wr(t, s + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class He {
  constructor({ strings: e, _$litType$: r }, i) {
    let o;
    this.parts = [];
    let s = 0, l = 0;
    const c = e.length - 1, p = this.parts, [_, S] = Dr(e, r);
    if (this.el = He.createElement(_, i), fe.currentNode = this.el.content, r === 2 || r === 3) {
      const A = this.el.content.firstChild;
      A.replaceWith(...A.childNodes);
    }
    for (; (o = fe.nextNode()) !== null && p.length < c; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const A of o.getAttributeNames()) if (A.endsWith(vr)) {
          const N = S[l++], B = o.getAttribute(A).split(se), Y = /([.?@])?(.*)/.exec(N);
          p.push({ type: 1, index: s, name: Y[2], strings: B, ctor: Y[1] === "." ? Vr : Y[1] === "?" ? Fr : Y[1] === "@" ? Yr : dt }), o.removeAttribute(A);
        } else A.startsWith(se) && (p.push({ type: 6, index: s }), o.removeAttribute(A));
        if (xr.test(o.tagName)) {
          const A = o.textContent.split(se), N = A.length - 1;
          if (N > 0) {
            o.textContent = ot ? ot.emptyScript : "";
            for (let B = 0; B < N; B++) o.append(A[B], Be()), fe.nextNode(), p.push({ type: 2, index: ++s });
            o.append(A[N], Be());
          }
        }
      } else if (o.nodeType === 8) if (o.data === mr) p.push({ type: 2, index: s });
      else {
        let A = -1;
        for (; (A = o.data.indexOf(se, A + 1)) !== -1; ) p.push({ type: 7, index: s }), A += se.length - 1;
      }
      s++;
    }
  }
  static createElement(e, r) {
    const i = ge.createElement("template");
    return i.innerHTML = e, i;
  }
}
function _e(t, e, r = t, i) {
  var l, c;
  if (e === ve) return e;
  let o = i !== void 0 ? (l = r._$Co) == null ? void 0 : l[i] : r._$Cl;
  const s = Ie(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== s && ((c = o == null ? void 0 : o._$AO) == null || c.call(o, !1), s === void 0 ? o = void 0 : (o = new s(t), o._$AT(t, r, i)), i !== void 0 ? (r._$Co ?? (r._$Co = []))[i] = o : r._$Cl = o), o !== void 0 && (e = _e(t, o._$AS(t, e.values), o, i)), e;
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
    const { el: { content: r }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? ge).importNode(r, !0);
    fe.currentNode = o;
    let s = fe.nextNode(), l = 0, c = 0, p = i[0];
    for (; p !== void 0; ) {
      if (l === p.index) {
        let _;
        p.type === 2 ? _ = new je(s, s.nextSibling, this, e) : p.type === 1 ? _ = new p.ctor(s, p.name, p.strings, this, e) : p.type === 6 && (_ = new Xr(s, this, e)), this._$AV.push(_), p = i[++c];
      }
      l !== (p == null ? void 0 : p.index) && (s = fe.nextNode(), l++);
    }
    return fe.currentNode = ge, o;
  }
  p(e) {
    let r = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, r), r += i.strings.length - 2) : i._$AI(e[r])), r++;
  }
}
class je {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, i, o) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = _e(this, e, r), Ie(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== ve && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : jr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && Ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ge.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var s;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = He.createElement(wr(i.h, i.h[0]), this.options)), i);
    if (((s = this._$AH) == null ? void 0 : s._$AD) === o) this._$AH.p(r);
    else {
      const l = new Wr(o, this), c = l.u(this.options);
      l.p(r), this.T(c), this._$AH = l;
    }
  }
  _$AC(e) {
    let r = hr.get(e.strings);
    return r === void 0 && hr.set(e.strings, r = new He(e)), r;
  }
  k(e) {
    Rt(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let i, o = 0;
    for (const s of e) o === r.length ? r.push(i = new je(this.O(Be()), this.O(Be()), this, this.options)) : i = r[o], i._$AI(s), o++;
    o < r.length && (this._$AR(i && i._$AB.nextSibling, o), r.length = o);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); e !== this._$AB; ) {
      const o = ar(e).nextSibling;
      ar(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cv = e, (r = this._$AP) == null || r.call(this, e));
  }
}
class dt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, i, o, s) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = r, this._$AM = o, this.options = s, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = C;
  }
  _$AI(e, r = this, i, o) {
    const s = this.strings;
    let l = !1;
    if (s === void 0) e = _e(this, e, r, 0), l = !Ie(e) || e !== this._$AH && e !== ve, l && (this._$AH = e);
    else {
      const c = e;
      let p, _;
      for (e = s[0], p = 0; p < s.length - 1; p++) _ = _e(this, c[i + p], r, p), _ === ve && (_ = this._$AH[p]), l || (l = !Ie(_) || _ !== this._$AH[p]), _ === C ? e = C : e !== C && (e += (_ ?? "") + s[p + 1]), this._$AH[p] = _;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Vr extends dt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class Fr extends dt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class Yr extends dt {
  constructor(e, r, i, o, s) {
    super(e, r, i, o, s), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = _e(this, e, r, 0) ?? C) === ve) return;
    const i = this._$AH, o = e === C && i !== C || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== C && (i === C || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
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
    _e(this, e);
  }
}
const kt = ze.litHtmlPolyfillSupport;
kt == null || kt(He, je), (ze.litHtmlVersions ?? (ze.litHtmlVersions = [])).push("3.3.3");
const qr = (t, e, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const s = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = o = new je(e.insertBefore(Be(), s), s, void 0, r ?? {});
  }
  return o._$AI(t), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ye = globalThis;
let Ne = class extends Te {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = qr(r, this.renderRoot, this.renderOptions);
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
    return ve;
  }
};
var br;
Ne._$litElement$ = !0, Ne.finalized = !0, (br = ye.litElementHydrateSupport) == null || br.call(ye, { LitElement: Ne });
const Et = ye.litElementPolyfillSupport;
Et == null || Et({ LitElement: Ne });
(ye.litElementVersions ?? (ye.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Gr = (t) => (e, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jr = { attribute: !0, type: String, converter: it, reflect: !1, hasChanged: Ot }, Kr = (t = Jr, e, r) => {
  const { kind: i, metadata: o } = r;
  let s = globalThis.litPropertyMetadata.get(o);
  if (s === void 0 && globalThis.litPropertyMetadata.set(o, s = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), i === "accessor") {
    const { name: l } = r;
    return { set(c) {
      const p = e.get.call(this);
      e.set.call(this, c), this.requestUpdate(l, p, t, !0, c);
    }, init(c) {
      return c !== void 0 && this.C(l, void 0, t, c), c;
    } };
  }
  if (i === "setter") {
    const { name: l } = r;
    return function(c) {
      const p = this[l];
      e.call(this, c), this.requestUpdate(l, p, t, !0, c);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function T(t) {
  return (e, r) => typeof r == "object" ? Kr(t, e, r) : ((i, o, s) => {
    const l = o.hasOwnProperty(s);
    return o.constructor.createProperty(s, i), l ? Object.getOwnPropertyDescriptor(o, s) : void 0;
  })(t, e, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Zr(t) {
  return T({ ...t, state: !0, attribute: !1 });
}
var Qr = Object.defineProperty, ei = Object.getOwnPropertyDescriptor, D = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? ei(e, r) : e, s = t.length - 1, l; s >= 0; s--)
    (l = t[s]) && (o = (i ? l(e, r, o) : l(o)) || o);
  return i && o && Qr(e, r, o), o;
};
const lt = class lt extends Ne {
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
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return g``;
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
    return Object.entries(r).forEach(([s, l]) => {
      const c = this.responsiveProps[s];
      if (!c) return;
      let p = "";
      Object.entries(c).forEach(([_, S]) => {
        const A = i[_];
        A && (p += `--${e}-${A}-override: ${S};
`);
      }), p && (o += `${l} {
  :host {
    ${p}  }
}
`);
    }), o ? g`<style>${o}</style>` : g``;
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
    return this.isStudio ? g`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    ` : g``;
  }
  renderHeader() {
    return g``;
  }
  willUpdate(e) {
    super.willUpdate(e), this.updateHostStyles();
  }
  updateHostStyles() {
    const r = this.computeBaseStyles().split(";").map((i) => i.trim()).filter(Boolean);
    for (const i of r) {
      const o = i.indexOf(":");
      if (o === -1) continue;
      const s = i.slice(0, o).trim(), l = i.slice(o + 1).trim();
      s.startsWith("--") ? this.style.setProperty(s, l) : this.style[s] = l;
    }
  }
};
lt.slots = [], lt.styles = gr`
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
let z = lt;
D([
  T({ type: Object, attribute: "responsive-props" })
], z.prototype, "responsiveProps", 2);
D([
  T({ type: String })
], z.prototype, "activeEdge", 2);
D([
  T({ type: Boolean, reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], z.prototype, "visible", 2);
D([
  T({ type: Number, reflect: !0, attribute: "z-index" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], z.prototype, "zIndex", 2);
D([
  T({ type: Number, reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], z.prototype, "opacity", 2);
D([
  T({ type: String, attribute: "custom-class" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], z.prototype, "customClass", 2);
D([
  T({ type: String, reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], z.prototype, "width", 2);
D([
  T({ type: String, reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], z.prototype, "height", 2);
D([
  T({ type: String, reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], z.prototype, "margin", 2);
D([
  T({ type: String, reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], z.prototype, "padding", 2);
D([
  y({
    attributeType: f.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], z.prototype, "onClick", 1);
D([
  T({ type: String, reflect: !0 })
], z.prototype, "direction", 2);
D([
  T({ type: String, reflect: !0 })
], z.prototype, "justify", 2);
D([
  T({ type: String, reflect: !0 })
], z.prototype, "align", 2);
D([
  T({ type: String, reflect: !0 })
], z.prototype, "gap", 2);
D([
  T({ type: Number, reflect: !0, attribute: "items-per-row" })
], z.prototype, "itemsPerRow", 2);
D([
  T({ type: String, attribute: "background-color", reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], z.prototype, "backgroundColor", 2);
D([
  T({ type: String, attribute: "border-radius", reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], z.prototype, "borderRadius", 2);
D([
  T({ type: String, reflect: !0, attribute: "elevation" }),
  y({
    attributeType: f.PROPERTY,
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
D([
  y({
    attributeType: f.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], z.prototype, "show", 1);
D([
  y({
    attributeType: f.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], z.prototype, "hide", 1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ti = { CHILD: 2 }, ri = (t) => (...e) => ({ _$litDirective$: t, values: e });
class ii {
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
class St extends ii {
  constructor(e) {
    if (super(e), this.it = C, e.type !== ti.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === C || e == null) return this._t = void 0, this.it = e;
    if (e === ve) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.it) return this._t;
    this.it = e;
    const r = [e];
    return r.raw = r, this._t = { _$litType$: this.constructor.resultType, strings: r, values: [] };
  }
}
St.directiveName = "unsafeHTML", St.resultType = 1;
const cr = ri(St);
var oi = Object.defineProperty, ai = Object.getOwnPropertyDescriptor, $ = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? ai(e, r) : e, s = t.length - 1, l; s >= 0; s--)
    (l = t[s]) && (o = (i ? l(e, r, o) : l(o)) || o);
  return i && o && oi(e, r, o), o;
};
const Lt = [
  { icon: "🏠", label: "Home", id: "home" },
  { icon: "📊", label: "Dashboard", id: "dashboard" },
  { icon: "📁", label: "Projects", id: "projects" },
  { icon: "👥", label: "Team", id: "team" },
  { separator: !0 },
  { section: "System" },
  { icon: "⚙️", label: "Settings", id: "settings" }
], oe = {
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
}, be = {
  show: !1,
  avatarUrl: "",
  userName: "User Name",
  userRole: "Member",
  showLogout: !1,
  showSettings: !1
}, at = JSON.stringify(Lt, null, 2), nt = JSON.stringify(oe, null, 2), st = JSON.stringify(be, null, 2), ni = Lt.filter((t) => !!t.label && !t.separator && !t.section).map((t) => ({ label: t.label ?? "", href: t.href ?? "", icon: t.icon ?? "" }));
function et(t) {
  try {
    const e = JSON.parse(t);
    if (Array.isArray(e)) return e;
  } catch {
  }
  return Lt;
}
function ur(t) {
  try {
    const e = JSON.parse(t);
    if (e && typeof e == "object") return { ...oe, ...e };
  } catch {
  }
  return oe;
}
function fr(t) {
  try {
    const e = JSON.parse(t);
    if (e && typeof e == "object") return { ...be, ...e };
  } catch {
  }
  return be;
}
function Ce(t = "") {
  return t.split(" ").map((e) => e[0] ?? "").join("").slice(0, 2).toUpperCase() || "U";
}
function tt(t, e, r = "60px", i = "#6366f1") {
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
function Le(t, e, r, i, o, s) {
  if (t === "hidden") return "";
  let l = "☰";
  const c = i === "over" ? !o : r;
  return e === "hamburger" ? l = `
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" style="display:block;">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
    ` : e === "dots" ? l = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display:block;">
        <circle cx="12" cy="5" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="12" cy="19" r="2"/>
      </svg>
    ` : e === "chevron" ? c ? l = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      ` : l = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      ` : e === "arrow" && (c ? l = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      ` : l = `
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
        color:${s}; transition:left 0.25s;
      ">
        ${l}
      </div>
    ` : t === "header-left" || t === "header-right" ? `
      <div style="
        display:flex; align-items:center; justify-content:center;
        width:36px; height:36px; border-radius:8px; cursor:pointer;
        background:transparent; border:none; color:${s}; flex-shrink:0;
        margin-right: 8px;
      ">
        ${l}
      </div>
    ` : `
    <div style="
      display:flex; align-items:center; justify-content:center;
      padding:10px; margin:4px 8px 8px; border-radius:6px; cursor:pointer;
      background:transparent; border:none; color:${s}; flex-shrink:0;
    ">
      ${l}
    </div>
  `;
}
function si(t, e, r, i, o, s, l, c) {
  var Y;
  if (t.separator)
    return '<div style="height:1px; background:var(--snl-separator-color, #e5e9ef); margin:8px 12px;"></div>';
  if (t.section)
    return c ? "" : `
      <div style="padding:14px 12px 6px; font-size:0.68rem; font-weight:700;
        letter-spacing:0.06em; text-transform:uppercase;
        color:#8996a4; white-space:nowrap;">
        ${t.section}
      </div>
    `;
  const p = r === e, _ = !!((Y = t.children) != null && Y.length), S = !c && t.badge ? `
    <span style="margin-left:auto; background:${t.badgeColor || l};
      color:#fff; font-size:0.65rem; font-weight:700; padding:1px 7px;
      border-radius:999px; flex-shrink:0;">
      ${t.badge}
    </span>
  ` : "", A = !c && _ ? `
    <span style="margin-left:${t.badge ? "8px" : "auto"}; color:${p ? s : "#8996a4"}; display:flex; flex-shrink:0;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="${p ? "6 9 12 15 18 9" : "9 18 15 12 9 6"}"></polyline>
      </svg>
    </span>
  ` : "", N = `
    <div data-tab-index="${e}" style="
      display:flex; align-items:center; gap:10px;
      padding:9px 12px; border-radius:8px; margin-bottom:2px;
      border-left:3px solid ${p ? l : "transparent"};
      cursor:${t.disabled ? "not-allowed" : "pointer"};
      opacity:${t.disabled ? "0.4" : "1"};
      font-size:0.875rem; font-weight:${p ? "600" : "500"};
      color:${p ? s : i};
      background:${p ? o : "transparent"};
      transition:all 0.15s; user-select:none; overflow:hidden;
    ">
      <span style="font-size:1.05rem; flex-shrink:0; width:20px; text-align:center;">
        ${t.icon ?? "•"}
      </span>
      ${c ? "" : `
        <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;">
          ${t.label ?? ""}
        </span>
        ${S}${A}
      `}
    </div>
  `;
  let B = "";
  return _ && p && !c && (B = '<div style="display:flex; flex-direction:column; margin:2px 0 6px;">' + t.children.map((K, ee) => {
    const Z = ee === 0, ie = Z ? l : i;
    return `
          <div style="display:flex; align-items:center; gap:12px; padding:6px 12px 6px 30px;
            border-radius:8px; font-size:0.83rem; font-weight:${Z ? "600" : "500"};
            color:${ie}; cursor:pointer;">
            <span style="width:6px; height:6px; border-radius:50%; background:${ie};
              opacity:${Z ? "1" : "0.45"}; flex-shrink:0;"></span>
            <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${K.label ?? ""}</span>
          </div>
        `;
  }).join("") + "</div>"), N + B;
}
function li(t, e, r) {
  var o;
  const i = [];
  if (t.showBreadcrumb && ((o = t.breadcrumbs) != null && o.length)) {
    const s = t.breadcrumbs.map(
      (l, c) => c < t.breadcrumbs.length - 1 ? `<span style="color:${r}80;">${l}</span><span style="color:${r}40; margin:0 4px;">›</span>` : `<span style="color:${r}; font-weight:600;">${l}</span>`
    ).join("");
    i.push(`<div style="display:flex; align-items:center; font-size:0.8rem;">${s}</div>`);
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
    const s = t.notificationCount ?? 0;
    i.push(`
      <div style="position:relative; cursor:pointer; padding:6px; border-radius:8px;">
        <span style="font-size:1.2rem; line-height:1;">🔔</span>
        ${s > 0 ? `
          <span style="position:absolute; top:2px; right:2px; background:${e};
            color:#fff; font-size:0.6rem; font-weight:700; min-width:16px; height:16px;
            border-radius:999px; display:flex; align-items:center; justify-content:center; padding:0 3px;">
            ${s}
          </span>` : ""}
      </div>
    `);
  }
  if (t.showUserAvatar) {
    const s = Ce(t.userName), l = t.userAvatarUrl ? `<img src="${t.userAvatarUrl}" style="width:32px; height:32px; border-radius:50%; object-fit:cover; flex-shrink:0;" />` : `<div style="width:32px; height:32px; border-radius:50%; background:${e}; color:#fff;
           display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:700; flex-shrink:0;">
           ${s}
         </div>`;
    i.push(`
      <div style="display:flex; align-items:center; gap:8px; cursor:pointer;">
        ${l}
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
function di(t, e, r, i = "#1d2630", o = "#8996a4", s = "#e5e9ef") {
  if (!t.show) return "";
  const l = Ce(t.userName), c = t.avatarUrl ? `<img src="${t.avatarUrl}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; flex-shrink:0;" />` : `<div style="width:40px; height:40px; border-radius:50%; background:${r};
         color:#fff; display:flex; align-items:center; justify-content:center;
         font-size:0.85rem; font-weight:700; flex-shrink:0;">${l}</div>`;
  return `
    <div style="margin:14px 12px 6px; padding:${e ? "8px" : "10px 12px"};
      background:#ffffff; border:1px solid ${s}; border-radius:10px;
      display:flex; align-items:center; gap:12px; flex-shrink:0; cursor:pointer;
      ${e ? "justify-content:center;" : ""}">
      ${c}
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
function pi(t, e, r, i = "buttons", o = "#94a3b8") {
  if (!t.show) return "";
  const s = Ce(t.userName);
  return `
    <div style="padding:12px 14px; border-top:1px solid var(--snl-separator-color, #e5e9ef);
      display:flex; align-items:center; gap:10px; flex-shrink:0;">
      ${t.avatarUrl ? `<img src="${t.avatarUrl}" style="width:34px; height:34px; border-radius:50%; object-fit:cover; flex-shrink:0;" />` : `<div style="width:34px; height:34px; border-radius:50%; background:${r};
         color:#fff; display:flex; align-items:center; justify-content:center;
         font-size:0.75rem; font-weight:700; flex-shrink:0;">${s}</div>`}
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
let w = class extends z {
  constructor() {
    super(...arguments), this.height = "100vh", this.activePath = "", this._isMobile = !1, this._mql = null, this._handleUrlChange = () => {
      this._matchActiveItemWithUrl();
    }, this._handleMediaChange = (t) => {
      this._isMobile = t.matches;
    }, this.headerMode = "config", this.sidenavMode = "config", this.footerMode = "config", this.fixedHeader = !0, this.fixedFooter = !0, this.sidenavType = "side", this.opened = !0, this.hasBackdrop = !0, this.collapseBtnPosition = "sidebar-bottom", this.collapseBtnIcon = "chevron", this.navItems = at, this.activeItem = 0, this.headerConfig = nt, this.sidebarFooterConfig = st, this.appName = "My App", this.appSubtitle = "", this.appLogo = "🚀", this.headerTitle = "", this.headerLogo = "", this.collapsed = !1, this.sidebarWidth = "260px", this.headerHeight = "60px", this.collapsedWidth = "64px", this.showCollapseBtn = !0, this.showThemeToggle = !1, this.themeMode = "light", this.sidebarBg = "#ffffff", this.sidebarText = "#5b6b79", this.sidebarActiveBg = "#e6f0ff", this.sidebarActiveText = "#4680ff", this.accentColor = "#4680ff", this.headerBg = "#ffffff", this.headerText = "#1d2630", this.headerBorder = "#e5e9ef", this.mainBg = "#f4f7fa", this.mainPadding = "24px", this.footerActionType = "buttons", this.profilePosition = "top", this._expandedItems = /* @__PURE__ */ new Set();
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
   * Returns only plain objects (no external imports). Each `name` maps to a flat
   * key on the studio-side settings object; `deriveShellProps` (studio) composes
   * these discrete fields back into the navItems / headerConfig / sidebarFooterConfig
   * props this element still consumes at runtime. Every field carries a default.
   *
   * control ∈ "text" | "number" | "boolean" | "select" | "color" | "list"
   * (`list` edits an array of objects via typed `itemShape` sub-fields — no JSON).
   *
   * NOTE: header and footer both expose a user name / role / avatar. Because the
   * settings object is flat, those keys are disambiguated (`headerUserName` vs
   * `profileName`, etc.); the human labels stay "User Name"/"User Role"/"Avatar URL".
   */
  static getSettingsSchema() {
    return [
      // ── Brand ──
      { name: "appName", label: "App / Brand Name", control: "text", group: "Brand", defaultValue: "My App" },
      { name: "appLogo", label: "Logo (emoji, image URL, or inline SVG)", control: "text", group: "Brand", defaultValue: "🚀" },
      // ── Navigation ──
      {
        name: "navItems",
        label: "Nav Items",
        control: "list",
        group: "Navigation",
        defaultValue: ni,
        itemShape: [
          { name: "label", label: "Label", control: "text", defaultValue: "" },
          { name: "href", label: "Link (href)", control: "text", defaultValue: "" },
          { name: "icon", label: "Icon (emoji)", control: "text", defaultValue: "" }
        ]
      },
      // ── Header ──
      { name: "showSearch", label: "Show Search", control: "boolean", group: "Header", defaultValue: oe.showSearch ?? !1 },
      { name: "showNotifications", label: "Show Notifications", control: "boolean", group: "Header", defaultValue: oe.showNotificationBell ?? !1 },
      { name: "notificationCount", label: "Notification Count", control: "number", group: "Header", defaultValue: oe.notificationCount ?? 0 },
      { name: "showThemeToggle", label: "Show Theme Toggle", control: "boolean", group: "Header", defaultValue: !0 },
      { name: "headerUserName", label: "User Name", control: "text", group: "Header", defaultValue: oe.userName ?? "" },
      { name: "headerUserRole", label: "User Role", control: "text", group: "Header", defaultValue: oe.userRole ?? "" },
      { name: "headerAvatarUrl", label: "Avatar URL", control: "text", group: "Header", defaultValue: oe.userAvatarUrl ?? "" },
      // ── Sidebar ──
      { name: "showProfile", label: "Show Profile Footer", control: "boolean", group: "Sidebar", defaultValue: be.show ?? !1 },
      { name: "profileName", label: "User Name", control: "text", group: "Sidebar", defaultValue: be.userName ?? "" },
      { name: "profileRole", label: "User Role", control: "text", group: "Sidebar", defaultValue: be.userRole ?? "" },
      { name: "profileAvatarUrl", label: "Avatar URL", control: "text", group: "Sidebar", defaultValue: be.avatarUrl ?? "" },
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
    super.connectedCallback(), window.addEventListener("popstate", this._handleUrlChange), window.addEventListener("hashchange", this._handleUrlChange), window.addEventListener("route-change", this._handleUrlChange), this._setupResponsive(), this._matchActiveItemWithUrl();
  }
  disconnectedCallback() {
    window.removeEventListener("popstate", this._handleUrlChange), window.removeEventListener("hashchange", this._handleUrlChange), window.removeEventListener("route-change", this._handleUrlChange), this._teardownResponsive(), super.disconnectedCallback();
  }
  _setupResponsive() {
    typeof window > "u" || typeof window.matchMedia != "function" || (this._mql = window.matchMedia("(max-width: 768px)"), this._isMobile = this._mql.matches, this._mql.addEventListener ? this._mql.addEventListener("change", this._handleMediaChange) : this._mql.addListener(this._handleMediaChange));
  }
  _teardownResponsive() {
    this._mql && (this._mql.removeEventListener ? this._mql.removeEventListener("change", this._handleMediaChange) : this._mql.removeListener(this._handleMediaChange), this._mql = null);
  }
  willUpdate(t) {
    super.willUpdate(t), this._matchActiveItemWithUrl();
  }
  updated(t) {
    super.updated(t), this.style.setProperty("--zero-height", this.height);
  }
  /**
   * Resolve the host runtime-app / renderer by walking UP through shadow
   * boundaries. `closest()` cannot cross shadow roots, and the sidenav is
   * rendered inside the runtime app's shadow root, so a plain closest() misses
   * it and we'd fall back to a stale path source.
   */
  _resolveCurrentPath() {
    let t = this;
    for (let e = 0; t && e < 20; e++) {
      const i = t.getRootNode().host;
      if (!i) break;
      const o = i.tagName ? i.tagName.toLowerCase() : "";
      if (o.startsWith("zero-runtime-app"))
        return i.pathName || i.currentPath || "";
      if (o.startsWith("zero-renderer"))
        return i.path || i.pathName || "";
      t = i;
    }
    return "";
  }
  _matchActiveItemWithUrl() {
    if (typeof window > "u") return;
    let t = this._resolveCurrentPath();
    t || (t = window.location.hash.replace(/^#/, "") || window.location.pathname || "/");
    let e = t;
    if (e.startsWith("/")) {
      const r = e.split("/").filter(Boolean);
      r.length > 1 && r[0].startsWith("project-") && (e = "/" + r.slice(1).join("/"));
    }
    if (this.activePath = e, this.sidenavMode !== "slot") {
      const r = et(this.navItems), i = (c) => {
        let p = c;
        try {
          p = new URL(c, window.location.origin).pathname;
        } catch {
        }
        if (p.startsWith("/")) {
          const _ = p.split("/").filter(Boolean);
          _.length > 1 && _[0].startsWith("project-") && (p = "/" + _.slice(1).join("/"));
        }
        return p = p.replace(/\/+$/, ""), p === "" ? "/" : p;
      }, o = i(e);
      let s = -1, l = -1;
      r.forEach((c, p) => {
        const _ = c.path ?? c.href;
        if (!_) return;
        const S = i(_);
        (S === o || S !== "/" && o.startsWith(S + "/")) && S.length > l && (l = S.length, s = p);
      }), s !== -1 && s !== this.activeItem && (this.activeItem = s);
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
    const e = et(this.navItems)[t];
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
  handleBellClick(t) {
    this.dispatchEvent(new CustomEvent("notification-click", {
      detail: { count: t },
      bubbles: !0,
      composed: !0
    }));
  }
  handleProfileClick(t = "header", e = {}) {
    this.dispatchEvent(new CustomEvent("profile-click", {
      detail: { origin: t, ...e },
      bubbles: !0,
      composed: !0
    }));
  }
  handleHeaderAction(t = "search") {
    this.dispatchEvent(new CustomEvent("header-action", {
      detail: { action: t },
      bubbles: !0,
      composed: !0
    }));
  }
  // ─── Toggle Button Helper ──────────────────────────────────────────────────
  renderToggleButton(t) {
    const e = t === "floating", r = t === "header-left" || t === "header-right";
    let i = g`☰`;
    const o = this.collapseBtnIcon === "chevron", s = this.collapseBtnIcon === "arrow", l = this.collapseBtnIcon === "hamburger", c = this.collapseBtnIcon === "dots";
    l ? i = g`
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      ` : c ? i = g`
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="2"/>
          <circle cx="12" cy="12" r="2"/>
          <circle cx="12" cy="19" r="2"/>
        </svg>
      ` : o ? (this.sidenavType === "over" ? !this.opened : this.collapsed) ? i = g`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        ` : i = g`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        ` : s && ((this.sidenavType === "over" ? !this.opened : this.collapsed) ? i = g`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        ` : i = g`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        `);
    const p = (_) => {
      _.stopPropagation(), this.sidenavType === "over" ? this.toggle() : this.toggleSidebar();
    };
    return e ? g`
        <button class="snl-floating-toggle" @click=${p} title="Toggle sidebar">
          ${i}
        </button>
      ` : r ? g`
        <button class="snl-header-btn" style="color: ${this.headerText};" @click=${p} title="Toggle sidebar">
          ${i}
        </button>
      ` : g`
      <button class="snl-collapse-btn" style="color: ${this.sidebarText};" @click=${p} title="Toggle sidebar">
        ${i}
      </button>
    `;
  }
  // ─── getStudioTemplate ─────────────────────────────────────────────────────
  static getStudioTemplate(t) {
    var n, d, h, k, U, j, O, u, b, v, x, R, M, I, J, Ae, Ke, Ze, Mt, zt, Nt, Bt, It, Ht, jt, Ut, Dt, Wt, Vt, Ft, Yt, Xt, qt, Gt, Jt, Kt;
    const e = ((n = t == null ? void 0 : t.props) == null ? void 0 : n.headerMode) || "config", r = ((d = t == null ? void 0 : t.props) == null ? void 0 : d.sidenavMode) || "config", i = ((h = t == null ? void 0 : t.props) == null ? void 0 : h.footerMode) || "config", o = ((k = t == null ? void 0 : t.props) == null ? void 0 : k.navItems) || at, s = ((U = t == null ? void 0 : t.props) == null ? void 0 : U.headerConfig) || nt, l = ((j = t == null ? void 0 : t.props) == null ? void 0 : j.sidebarFooterConfig) || st, c = ((O = t == null ? void 0 : t.props) == null ? void 0 : O.appName) ?? "My App", p = ((u = t == null ? void 0 : t.props) == null ? void 0 : u.appSubtitle) ?? "", _ = ((b = t == null ? void 0 : t.props) == null ? void 0 : b.appLogo) ?? "", S = ((v = t == null ? void 0 : t.props) == null ? void 0 : v.headerTitle) || "", A = ((x = t == null ? void 0 : t.props) == null ? void 0 : x.headerLogo) || "", N = Number(((R = t == null ? void 0 : t.props) == null ? void 0 : R.activeItem) ?? 0), B = !!((M = t == null ? void 0 : t.props) != null && M.collapsed), Y = ((I = t == null ? void 0 : t.props) == null ? void 0 : I.profilePosition) || "top", K = ((J = t == null ? void 0 : t.props) == null ? void 0 : J.sidebarWidth) || "260px", ee = ((Ae = t == null ? void 0 : t.props) == null ? void 0 : Ae.sidebarBg) || "#ffffff", Z = ((Ke = t == null ? void 0 : t.props) == null ? void 0 : Ke.sidebarText) || "#5b6b79", ie = ((Ze = t == null ? void 0 : t.props) == null ? void 0 : Ze.sidebarActiveBg) || "#e6f0ff", m = ((Mt = t == null ? void 0 : t.props) == null ? void 0 : Mt.sidebarActiveText) || "#4680ff", L = ((zt = t == null ? void 0 : t.props) == null ? void 0 : zt.accentColor) || "#4680ff", Q = ((Nt = t == null ? void 0 : t.props) == null ? void 0 : Nt.headerBg) || "#ffffff", X = ((Bt = t == null ? void 0 : t.props) == null ? void 0 : Bt.headerText) || "#1d2630", G = ((It = t == null ? void 0 : t.props) == null ? void 0 : It.headerBorder) || "#e5e9ef", me = ((Ht = t == null ? void 0 : t.props) == null ? void 0 : Ht.mainBg) || "#f4f7fa", xe = ((jt = t == null ? void 0 : t.props) == null ? void 0 : jt.mainPadding) || "24px", Ue = ((Ut = t == null ? void 0 : t.props) == null ? void 0 : Ut.headerHeight) || "60px", de = ((Dt = t == null ? void 0 : t.props) == null ? void 0 : Dt.collapsedWidth) || "64px", te = ((Wt = t == null ? void 0 : t.props) == null ? void 0 : Wt.showCollapseBtn) !== !1, W = ((Vt = t == null ? void 0 : t.props) == null ? void 0 : Vt.sidenavType) || "side", V = ((Ft = t == null ? void 0 : t.props) == null ? void 0 : Ft.opened) !== !1, ke = ((Yt = t == null ? void 0 : t.props) == null ? void 0 : Yt.hasBackdrop) !== !1, ae = ((Xt = t == null ? void 0 : t.props) == null ? void 0 : Xt.collapseBtnPosition) || "sidebar-bottom", ne = ((qt = t == null ? void 0 : t.props) == null ? void 0 : qt.collapseBtnIcon) || "chevron", De = ((Gt = t == null ? void 0 : t.props) == null ? void 0 : Gt.footerActionType) || "buttons", pe = ((Jt = t == null ? void 0 : t.props) == null ? void 0 : Jt.fixedHeader) !== !1, Ee = ((Kt = t == null ? void 0 : t.props) == null ? void 0 : Kt.fixedFooter) !== !1, We = et(o), P = ur(s), re = fr(l), he = W === "over" ? !V : B, H = he ? W === "over" ? "0px" : de : K, pt = S || c, ht = r !== "hidden", Ve = (F, $t) => {
      const Tt = (F || "").trim().split(/\s+/).filter(Boolean), Qe = Tt[0] || "", Oe = Tt.slice(1).join(" ");
      return `<span style="font-weight:800; font-size:1.35rem; line-height:1; color:${$t}; letter-spacing:-0.01em; white-space:nowrap;">${Qe}${Oe ? `<sup style="font-size:0.5em; font-weight:700; vertical-align:super; margin-left:1px;">${Oe}</sup>` : ""}</span>`;
    }, ct = (F) => !!F && (F.startsWith("<") || F.startsWith("http") || F.startsWith("/") || F.includes(".")), q = [
      { id: "outlet", label: "Page Content", dropzone: !0, accepts: ["page-root", "zero-section"] },
      { id: "main", label: "Main Content", dropzone: !0, accepts: ["zero-section"] }
    ];
    e === "slot" && q.push({ id: "header", label: "Header Drop Zone", dropzone: !0, accepts: ["zero-section"] }), r === "slot" ? q.push({ id: "sidebar", label: "Sidebar Nav Drop Zone", dropzone: !0, accepts: ["zero-section"] }) : r === "config" && q.push({ id: "sidebar-extra", label: "Sidebar Extra", dropzone: !0, accepts: ["zero-section"] }), i === "slot" && q.push({ id: "footer", label: "Sidebar Footer Drop Zone", dropzone: !0, accepts: ["zero-section"] });
    let Se = !1;
    const we = We.map((F, $t) => {
      const Qe = F.bottom === !0 && !Se;
      Qe && (Se = !0);
      const Oe = si(F, $t, N, Z, ie, m, L, he);
      return Qe ? `<div style="flex: 1; min-height: 20px;"></div>${Oe}` : Oe;
    }).join(""), Fe = ae === "header-left" && te ? Le("header-left", ne, B, W, V, X) : "", ut = ae === "header-right" && te ? Le("header-right", ne, B, W, V, X) : "", $e = e === "hidden" ? "" : `
      <div style="
        display:flex; align-items:center; gap:12px;
        height:${Ue}; padding:0 20px;
        background:${Q}; border-bottom:1px solid ${G};
        flex-shrink:0; box-sizing:border-box; z-index:10;
        width:100%;
      ">
        ${Fe}
        ${S || A ? `
          <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:0.95rem; color:${X}; white-space:nowrap; flex-shrink:0;">
            ${(() => {
      const F = A || _;
      return F.startsWith("<") ? F : F.startsWith("http") || F.startsWith("/") || F.includes(".") ? `<img src="${F}" style="width: 24px; height: 24px; object-fit: contain;" />` : `<span style="font-size:1.3rem;">${F}</span>`;
    })()}
            ${pt}
          </div>
        ` : ""}
        ${e === "config" ? li(P, L, X) : `<div style="flex:1; min-width:0;">${tt("header", "Drop Header Sections", "40px", L)}</div>`}
        ${ut}
      </div>
    `, Ye = r === "slot" ? tt("sidebar", "Drop Sidebar Sections", "200px", L) : `
        <nav style="display:flex; flex-direction:column; flex:1; padding:10px 8px; overflow-y:auto;">
          ${we}
        </nav>
        <div style="padding:8px; border-top:1px solid #e5e9ef; flex-shrink:0;">
          ${tt("sidebar-extra", "Sidebar Extra", "40px", L)}
        </div>
      `, Xe = i === "config" && re.show && Y === "top" ? di(re, he, L, X, "#8996a4", G) : "", qe = i === "hidden" ? "" : i === "slot" ? `<div style="padding:8px; border-top:1px solid #e5e9ef; flex-shrink:0;">
             ${tt("footer", "Drop Footer Sections", "50px", L)}
           </div>` : Y === "bottom" ? pi(re, he, L, De, Z) : "", Ge = ae === "sidebar-top" && te ? Le("sidebar-top", ne, B, W, V, "#fff") : "", Pe = ae === "sidebar-bottom" && te ? Le("sidebar-bottom", ne, B, W, V, Z) : "", bt = Ee ? "" : "overflow-y: auto; scrollbar-width: thin;", yt = Ee ? "" : "flex: none; overflow-y: visible;", gt = ht ? `
      <div style="
        width:${H}; background:${ee};
        display:flex; flex-direction:column; flex-shrink:0;
        overflow:hidden; transition:width 0.25s, transform 0.25s;
        border-right:${H === "0px" ? "none" : `1px solid ${G}`};
        ${W === "over" ? `position:absolute; left:0; top:0; bottom:0; z-index:30; height:100%; box-shadow:4px 0 12px rgba(0,0,0,0.15); transform:${V ? "none" : "translateX(-100%)"};` : ""}
        ${bt}
      ">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 18px 16px; border-bottom: 1px solid ${G}; flex-shrink: 0;">
          <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
            ${ct(_) ? _.startsWith("<") ? _ : `<img src="${_}" style="width: 28px; height: 28px; object-fit: contain; border-radius:8px;" />` : ""}
            ${he ? "" : `
              <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
                ${Ve(c, L)}
                ${p ? `<span style="font-size:0.6rem; font-weight:700; line-height:1; padding:3px 7px; border-radius:999px; background:#d5f5e3; color:#17a862; white-space:nowrap; flex-shrink:0;">${p}</span>` : ""}
              </div>
            `}
          </div>
          ${Ge}
        </div>
        ${Xe}
        <div style="display:flex; flex-direction:column; flex:1; overflow:hidden; ${yt}">
          ${Ye}
        </div>
        ${qe}
        ${Pe}
      </div>
    ` : "", vt = W === "over" && V && ke ? `
      <div style="position:absolute; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.4); backdrop-filter:blur(2px); z-index:25; pointer-events:none;"></div>
    ` : "", ce = ae === "floating" && te ? Le("floating", ne, B, W, V, Z) : "", mt = pe ? $e : "", xt = pe ? "" : $e, wt = pe ? `padding: ${xe};` : "", a = `
      <div style="
        display:flex; flex-direction:column; width:100%; height:600px;
        overflow:hidden; border:1px solid ${G}; border-radius:12px;
        font-family:system-ui,sans-serif;
        --snl-accent: ${L};
        --snl-sidebar-width: ${K};
        --snl-collapsed-w: ${de};
        --snl-border: ${G};
        --snl-section-color: #8996a4;
        --snl-brand-text-color: ${X};
        --snl-separator-color: ${G};
        --snl-footer-name-color: ${X};
        --snl-footer-role-color: #8996a4;
        --snl-footer-btn-color: #8996a4;
        --snl-profile-name-color: ${X};
        --snl-profile-role-color: #8996a4;
        --snl-hover-bg: rgba(0,0,0,0.04);
      ">
        ${mt}
        <div style="display:flex; flex:1; overflow:hidden; position:relative;">
          ${vt}
          ${gt}
          ${ce}
          <div style="flex:1; overflow-y: auto; background:${me}; display:flex; flex-direction:column; min-width:0;">
            ${xt}
            ${pe ? `
              <div style="flex:1; ${wt} box-sizing:border-box;">
                <zero-studio-slot name="outlet"></zero-studio-slot>
                <zero-studio-slot name="main"></zero-studio-slot>
              </div>
            ` : `
              <div style="flex:1; padding:${xe}; box-sizing:border-box;">
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
      slots: q,
      templateHtml: a,
      badges: ["Sidebar Layout"],
      emptyText: "Drop sections into main, or switch a region to 'slot' mode"
    };
  }
  // ─── Runtime Render ────────────────────────────────────────────────────────
  render() {
    var ie;
    const t = et(this.navItems), e = ur(this.headerConfig), r = fr(this.sidebarFooterConfig), i = this.sidenavMode !== "hidden", o = !!(this.headerTitle || this.headerLogo), s = (m) => !!m && (m.startsWith("<") || m.startsWith("http") || m.startsWith("/") || m.includes(".")), l = () => {
      const m = (this.appName || "").trim().split(/\s+/).filter(Boolean), L = m[0] || "", Q = m.slice(1).join(" ");
      return g`<span class="snl-brand-name">${L}${Q ? g`<sup class="snl-brand-name-sup">${Q}</sup>` : C}</span>`;
    }, c = this.showThemeToggle ? g`
      <button class="snl-header-btn snl-theme-toggle"
        style="color:${this.headerText}; margin-right:0;"
        @click=${(m) => {
      m.stopPropagation(), this.toggleTheme();
    }}
        title=${this.themeMode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        aria-label="Toggle theme">
        ${this.themeMode === "dark" ? g`
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
        ` : g`
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        `}
      </button>
    ` : C, p = this.footerMode === "config" && r.show, _ = g`
      <div class="snl-profile-card" role="button" tabindex="0"
        @click=${() => this.handleProfileClick("sidebar", { userName: r.userName, userRole: r.userRole })}
        @keydown=${(m) => {
      (m.key === "Enter" || m.key === " ") && (m.preventDefault(), this.handleProfileClick("sidebar", { userName: r.userName, userRole: r.userRole }));
    }}>
        ${r.avatarUrl ? g`<img class="snl-profile-avatar snl-profile-avatar-img" src=${r.avatarUrl} />` : g`<div class="snl-profile-avatar snl-profile-avatar-init">${Ce(r.userName)}</div>`}
        <div class="snl-profile-info">
          <div class="snl-profile-name">${r.userName ?? ""}</div>
          ${r.userRole ? g`<div class="snl-profile-role">${r.userRole}</div>` : C}
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
    `, S = this.headerMode === "hidden" ? C : g`
      <header class="snl-header"
        style="
          height:${this.headerHeight}; background:var(--uiv-surface-color, ${this.headerBg});
          color:var(--uiv-text-color, ${this.headerText});
          border-bottom:1px solid var(--uiv-border-color, ${this.headerBorder});
        ">

        <button class="snl-header-toggle-mobile" @click=${(m) => {
      m.stopPropagation(), this.toggle();
    }} title="Toggle sidebar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>

        ${this.collapseBtnPosition === "header-left" && this.showCollapseBtn ? this.renderToggleButton("header-left") : C}

        ${o ? g`
          <div class="snl-header-brand" style="color:${this.headerText};">
            ${(() => {
      const m = this.headerLogo || this.appLogo;
      return m && m.startsWith("<") ? g`${cr(m)}` : m && (m.startsWith("http") || m.startsWith("/") || m.includes(".")) ? g`<img src="${m}" style="width: 24px; height: 24px; object-fit: contain;" />` : m ? g`<span class="snl-brand-logo">${m}</span>` : C;
    })()}
            <span>${this.headerTitle || this.appName}</span>
          </div>
        ` : C}

        ${this.headerMode === "config" ? g`

          ${e.showBreadcrumb && ((ie = e.breadcrumbs) != null && ie.length) ? g`
            <nav class="snl-header-breadcrumb">
              ${e.breadcrumbs.map((m, L) => g`
                ${L > 0 ? g`<span style="opacity:0.3; margin:0 4px;">›</span>` : C}
                <span style="${L === e.breadcrumbs.length - 1 ? "font-weight:600;" : "opacity:0.6;"}">${m}</span>
              `)}
            </nav>
          ` : C}

          ${e.showSearch ? g`
            <div class="snl-header-search">
              <span class="snl-header-search-icon" role="button" tabindex="0" title="Search"
                aria-label="Search"
                style="display:flex; align-items:center; cursor:pointer; flex-shrink:0;"
                @click=${(m) => {
      m.stopPropagation(), this.handleHeaderAction("search");
    }}
                @keydown=${(m) => {
      (m.key === "Enter" || m.key === " ") && (m.preventDefault(), this.handleHeaderAction("search"));
    }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8996a4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
                  <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                class="snl-header-search-input"
                type="search"
                placeholder=${e.searchPlaceholder ?? "Search (Ctrl + K)"}
                @input=${(m) => this.dispatchEvent(new CustomEvent("search", {
      detail: { query: m.target.value },
      bubbles: !0,
      composed: !0
    }))}
                @keydown=${(m) => {
      m.key === "Enter" && this.dispatchEvent(new CustomEvent("search", {
        detail: { query: m.target.value, submit: !0 },
        bubbles: !0,
        composed: !0
      }));
    }}
              />
            </div>
          ` : C}

          <div class="snl-header-spacer"></div>

          ${c}

          ${e.showNotificationBell ? g`
            <div class="snl-header-bell" role="button" tabindex="0" title="Notifications"
              aria-label="Notifications"
              @click=${(m) => {
      m.stopPropagation(), this.handleBellClick(e.notificationCount ?? 0);
    }}
              @keydown=${(m) => {
      (m.key === "Enter" || m.key === " ") && (m.preventDefault(), this.handleBellClick(e.notificationCount ?? 0));
    }}>
              <span>🔔</span>
              ${(e.notificationCount ?? 0) > 0 ? g`
                <span class="snl-bell-count" style="background:${this.accentColor};">
                  ${e.notificationCount}
                </span>
              ` : C}
            </div>
          ` : C}

          ${e.showUserAvatar ? g`
            <div class="snl-header-user" role="button" tabindex="0"
              title=${e.userName ?? "Profile"}
              @click=${(m) => {
      m.stopPropagation(), this.handleProfileClick("header", { userName: e.userName, userRole: e.userRole });
    }}
              @keydown=${(m) => {
      (m.key === "Enter" || m.key === " ") && (m.preventDefault(), this.handleProfileClick("header", { userName: e.userName, userRole: e.userRole }));
    }}>
              ${e.userAvatarUrl ? g`
                <img class="snl-avatar snl-avatar-img" src=${e.userAvatarUrl} />
              ` : g`
                <div class="snl-avatar snl-avatar-init" style="background:${this.accentColor};">
                  ${Ce(e.userName)}
                </div>
              `}
              <div class="snl-user-info" style="display:flex; flex-direction:column; line-height:1.25;">
                <span style="font-size:0.8rem; font-weight:600; color:${this.headerText};">${e.userName ?? ""}</span>
                ${e.userRole ? g`<span style="font-size:0.7rem; opacity:0.5;">${e.userRole}</span>` : C}
              </div>
              <span style="opacity:0.3; font-size:0.75rem;">▾</span>
            </div>
          ` : C}

        ` : g`
          <div class="snl-header-slot-zone">
            <slot name="header"></slot>
          </div>
          ${c}
        `}

        ${this.collapseBtnPosition === "header-right" && this.showCollapseBtn ? this.renderToggleButton("header-right") : C}
      </header>
    `, A = this.fixedFooter ? "" : "overflow-y: auto; scrollbar-width: thin;", N = this.fixedFooter ? "" : "flex: none; overflow-y: visible;", B = i ? g`
      <aside class="snl-sidebar"
        style="width:${this.sidebarWidth}; background:var(--uiv-surface-color, ${this.sidebarBg});
          --snl-collapsed-w:${this.collapsedWidth};
          ${A}">

        <div class="snl-sidebar-brand" style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
          <slot name="brand">
            <div class="snl-brand-wordmark" style="flex: 1;">
              ${s(this.appLogo) ? this.appLogo.startsWith("<") ? g`${cr(this.appLogo)}` : g`<img src="${this.appLogo}" style="width: 28px; height: 28px; object-fit: contain; border-radius:8px;" />` : C}
              ${l()}
              ${this.appSubtitle ? g`<span class="snl-brand-pill">${this.appSubtitle}</span>` : C}
            </div>
          </slot>
          ${this.collapseBtnPosition === "sidebar-top" && this.showCollapseBtn ? this.renderToggleButton("sidebar-top") : C}
        </div>

        <!-- Profile card at TOP (default) -->
        ${p && this.profilePosition === "top" ? _ : C}

        <!-- Nav area: config mode or slot mode -->
        ${this.sidenavMode === "slot" ? g`
          <div class="snl-sidebar-slot" style="${N}">
            <slot name="sidebar"></slot>
          </div>
        ` : g`
          <nav class="snl-nav" style="${N}">
            ${(() => {
      let m = !1;
      return t.map((L, Q) => {
        var te;
        if (L.separator) return g`<div class="nav-separator"></div>`;
        if (L.section) return g`
                  <div class="snl-nav-section">${L.section}</div>
                `;
        const X = this.activeItem === Q, G = !!((te = L.children) != null && te.length), me = G && (this._expandedItems.has(Q) || X), xe = G ? (() => {
          const W = L.children.findIndex((V) => V.path && V.path === this.activePath || V.href && V.href === this.activePath);
          return W !== -1 ? W : X ? 0 : -1;
        })() : -1, de = L.bottom === !0 && !m;
        return de && (m = !0), g`
                  ${de ? g`<div style="flex: 1; min-height: 20px;"></div>` : C}
                  <button
                    class="nav-item ${X ? "is-active" : ""} ${L.disabled ? "is-disabled" : ""}"
                    style="
                      color:${X ? this.sidebarActiveText : this.sidebarText};
                      background:${X ? this.sidebarActiveBg : "transparent"};
                    "
                    @click=${() => G ? this.handleChildToggle(Q) : this.handleNavClick(Q, L)}
                  >
                    <span class="nav-icon">${L.icon ?? "•"}</span>
                    <span class="nav-label">${L.label ?? ""}</span>
                    ${L.badge ? g`
                      <span class="snl-nav-badge" style="background:${L.badgeColor || this.accentColor};">
                        ${L.badge}
                      </span>` : C}
                    ${G ? g`
                      <span class="nav-child-indicator" style="display:flex; margin-left:${L.badge ? "8px" : "auto"};">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="${me ? "6 9 12 15 18 9" : "9 18 15 12 9 6"}"></polyline>
                        </svg>
                      </span>` : C}
                  </button>
                  ${G && me ? g`
                    <div class="snl-sub-menu open">
                      ${L.children.map((W, V) => g`
                        <button
                          class="snl-sub-item ${V === xe ? "is-active" : ""} ${W.disabled ? "is-disabled" : ""}"
                          @click=${() => this.handleNavClick(Q, W)}
                        >
                          <span class="snl-sub-dot"></span>
                          <span class="nav-label">${W.label ?? ""}</span>
                        </button>
                      `)}
                    </div>
                  ` : C}
                `;
      });
    })()}
          </nav>

          <div class="snl-sidebar-extra">
            <slot name="sidebar-extra"></slot>
          </div>
        `}

        <!-- Footer area: config / slot / hidden -->
        ${this.footerMode === "hidden" ? C : this.footerMode === "slot" ? g`
            <div class="snl-footer-slot">
              <slot name="footer"></slot>
            </div>
          ` : r.show && this.profilePosition === "bottom" ? g`
            <div class="snl-sidebar-footer" style="cursor:pointer;"
              @click=${() => this.handleProfileClick("footer", { userName: r.userName, userRole: r.userRole })}>
              ${r.avatarUrl ? g`
                <img class="snl-footer-avatar" src=${r.avatarUrl} />
              ` : g`
                <div class="snl-footer-initials">${Ce(r.userName)}</div>
              `}
              <div class="snl-footer-info">
                <div class="snl-footer-name">${r.userName ?? ""}</div>
                ${r.userRole ? g`<div class="snl-footer-role">${r.userRole}</div>` : C}
              </div>
              <div class="snl-footer-actions">
                ${this.footerActionType === "buttons" && r.showSettings ? g`
                  <button class="snl-footer-btn"
                    @click=${(m) => {
      m.stopPropagation(), this.dispatchEvent(new CustomEvent("settingsClick", { bubbles: !0, composed: !0 }));
    }}
                    title="Settings">⚙️</button>
                ` : C}
                ${this.footerActionType === "buttons" && r.showLogout ? g`
                  <button class="snl-footer-btn"
                    @click=${(m) => {
      m.stopPropagation(), this.dispatchEvent(new CustomEvent("logout", { bubbles: !0, composed: !0 }));
    }}
                    title="Logout">↪</button>
                ` : C}
                ${this.footerActionType === "dropdown" ? g`
                  <button class="snl-footer-btn"
                    @click=${(m) => {
      m.stopPropagation(), this.handleProfileClick("footer", { userName: r.userName, userRole: r.userRole });
    }}
                    title="Profile Actions">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                ` : C}
              </div>
            </div>
          ` : C}

        ${this.collapseBtnPosition === "sidebar-bottom" && this.showCollapseBtn ? this.renderToggleButton("sidebar-bottom") : C}
      </aside>
    ` : C, Y = this.fixedHeader ? S : C, K = this.fixedHeader ? C : S, ee = this.fixedHeader ? `padding: ${this.mainPadding};` : "";
    return g`
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
            ${this.opened && (this.sidenavType === "over" || this._isMobile) && this.hasBackdrop ? g`
              <div class="snl-backdrop" @click=${this.close}></div>
            ` : C}
            ${B}
            ${this.collapseBtnPosition === "floating" && this.showCollapseBtn ? this.renderToggleButton("floating") : C}
            <main class="snl-main" style="background:var(--uiv-bg-color, ${this.mainBg}); ${"overflow-y: auto;"} ${ee} display: flex; flex-direction: column;">
              ${K}
              ${this.fixedHeader ? g`
                <slot name="outlet"></slot>
                <slot name="main"></slot>
                <slot></slot>
              ` : g`
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
w.slots = [];
w.styles = [
  z.styles,
  gr`
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
  T({ type: String, reflect: !0 })
], w.prototype, "height", 2);
$([
  T({ type: String, attribute: "active-path" })
], w.prototype, "activePath", 2);
$([
  Zr()
], w.prototype, "_isMobile", 2);
$([
  T({ type: String, attribute: "header-mode", reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
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
], w.prototype, "headerMode", 2);
$([
  T({ type: String, attribute: "sidenav-mode", reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
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
], w.prototype, "sidenavMode", 2);
$([
  T({ type: String, attribute: "footer-mode", reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
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
], w.prototype, "footerMode", 2);
$([
  T({ type: Boolean, attribute: "fixed-header" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Fixed Header",
    fieldMappings: "fixedHeader",
    categoryLabel: "Layout",
    initialValue: !0
  })
], w.prototype, "fixedHeader", 2);
$([
  T({ type: Boolean, attribute: "fixed-footer" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Fixed Sidebar Footer",
    fieldMappings: "fixedFooter",
    categoryLabel: "Layout",
    initialValue: !0
  })
], w.prototype, "fixedFooter", 2);
$([
  T({ type: String, attribute: "sidenav-type", reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Sidenav Layout Mode",
    fieldMappings: "sidenavType",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Side (Standard)", value: "side" },
      { label: "Over (Overlay/Drawer)", value: "over" }
    ]
  })
], w.prototype, "sidenavType", 2);
$([
  T({ type: Boolean, reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Sidenav Opened",
    fieldMappings: "opened",
    categoryLabel: "Layout",
    initialValue: !0
  })
], w.prototype, "opened", 2);
$([
  T({ type: Boolean, attribute: "has-backdrop", reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Has Backdrop (Over mode)",
    fieldMappings: "hasBackdrop",
    categoryLabel: "Layout",
    initialValue: !0
  })
], w.prototype, "hasBackdrop", 2);
$([
  T({ type: String, attribute: "collapse-btn-position", reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
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
], w.prototype, "collapseBtnPosition", 2);
$([
  T({ type: String, attribute: "collapse-btn-icon", reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
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
], w.prototype, "collapseBtnIcon", 2);
$([
  T({ type: String, attribute: "nav-items" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXTAREA,
    displayLabel: "Nav Items (JSON)",
    fieldMappings: "navItems",
    categoryLabel: "Navigation",
    placeholderText: at,
    initialValue: at
  })
], w.prototype, "navItems", 2);
$([
  T({ type: Number, reflect: !0, attribute: "active-item" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.NUMBER_INPUT,
    displayLabel: "Active Item Index",
    fieldMappings: "activeItem",
    categoryLabel: "Navigation",
    initialValue: 0
  })
], w.prototype, "activeItem", 2);
$([
  T({ type: String, attribute: "header-config" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXTAREA,
    displayLabel: "Header Config (JSON)",
    fieldMappings: "headerConfig",
    categoryLabel: "Header",
    placeholderText: nt,
    initialValue: nt
  })
], w.prototype, "headerConfig", 2);
$([
  T({ type: String, attribute: "sidebar-footer-config" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXTAREA,
    displayLabel: "Sidebar Footer Config (JSON)",
    fieldMappings: "sidebarFooterConfig",
    categoryLabel: "Sidebar Footer",
    placeholderText: st,
    initialValue: st
  })
], w.prototype, "sidebarFooterConfig", 2);
$([
  T({ type: String, attribute: "app-name" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "App / Brand Name",
    fieldMappings: "appName",
    categoryLabel: "Branding"
  })
], w.prototype, "appName", 2);
$([
  T({ type: String, attribute: "app-subtitle" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "App Subtitle",
    fieldMappings: "appSubtitle",
    categoryLabel: "Branding"
  })
], w.prototype, "appSubtitle", 2);
$([
  T({ type: String, attribute: "app-logo" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Logo Emoji / Character",
    fieldMappings: "appLogo",
    categoryLabel: "Branding"
  })
], w.prototype, "appLogo", 2);
$([
  T({ type: String, attribute: "header-title" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Header Title (overrides brand name in header bar)",
    fieldMappings: "headerTitle",
    categoryLabel: "Branding"
  })
], w.prototype, "headerTitle", 2);
$([
  T({ type: String, attribute: "header-logo" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Header Logo (overrides app logo in header bar)",
    fieldMappings: "headerLogo",
    categoryLabel: "Branding"
  })
], w.prototype, "headerLogo", 2);
$([
  T({ type: Boolean, reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Sidebar Collapsed",
    fieldMappings: "collapsed",
    categoryLabel: "Layout"
  })
], w.prototype, "collapsed", 2);
$([
  T({ type: String, attribute: "sidebar-width" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Sidebar Width (e.g. 260px)",
    fieldMappings: "sidebarWidth",
    categoryLabel: "Layout"
  })
], w.prototype, "sidebarWidth", 2);
$([
  T({ type: String, attribute: "header-height" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Header Height (e.g. 60px)",
    fieldMappings: "headerHeight",
    categoryLabel: "Layout"
  })
], w.prototype, "headerHeight", 2);
$([
  T({ type: String, attribute: "collapsed-width" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Collapsed Sidebar Width (e.g. 64px)",
    fieldMappings: "collapsedWidth",
    categoryLabel: "Layout"
  })
], w.prototype, "collapsedWidth", 2);
$([
  T({ type: Boolean, attribute: "show-collapse-btn", reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Show Collapse Button",
    fieldMappings: "showCollapseBtn",
    categoryLabel: "Layout"
  })
], w.prototype, "showCollapseBtn", 2);
$([
  T({ type: Boolean, attribute: "show-theme-toggle", reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Show Theme Toggle (Dark/Light)",
    fieldMappings: "showThemeToggle",
    categoryLabel: "Header"
  })
], w.prototype, "showThemeToggle", 2);
$([
  T({ type: String, attribute: "data-theme", reflect: !0 })
], w.prototype, "themeMode", 2);
$([
  T({ type: String, attribute: "sidebar-bg" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Sidebar Background",
    fieldMappings: "sidebarBg",
    categoryLabel: "Appearance"
  })
], w.prototype, "sidebarBg", 2);
$([
  T({ type: String, attribute: "sidebar-text" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Sidebar Text Color",
    fieldMappings: "sidebarText",
    categoryLabel: "Appearance"
  })
], w.prototype, "sidebarText", 2);
$([
  T({ type: String, attribute: "sidebar-active-bg" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Active Item Background",
    fieldMappings: "sidebarActiveBg",
    categoryLabel: "Appearance"
  })
], w.prototype, "sidebarActiveBg", 2);
$([
  T({ type: String, attribute: "sidebar-active-text" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Active Item Text Color",
    fieldMappings: "sidebarActiveText",
    categoryLabel: "Appearance"
  })
], w.prototype, "sidebarActiveText", 2);
$([
  T({ type: String, attribute: "accent-color" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Accent Color (badges, avatar bg, drop-zone ring)",
    fieldMappings: "accentColor",
    categoryLabel: "Appearance"
  })
], w.prototype, "accentColor", 2);
$([
  T({ type: String, attribute: "header-bg" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
], w.prototype, "headerBg", 2);
$([
  T({ type: String, attribute: "header-text" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Header Text Color",
    fieldMappings: "headerText",
    categoryLabel: "Appearance"
  })
], w.prototype, "headerText", 2);
$([
  T({ type: String, attribute: "header-border" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Header Border Color",
    fieldMappings: "headerBorder",
    categoryLabel: "Appearance"
  })
], w.prototype, "headerBorder", 2);
$([
  T({ type: String, attribute: "main-bg" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Main Area Background",
    fieldMappings: "mainBg",
    categoryLabel: "Appearance"
  })
], w.prototype, "mainBg", 2);
$([
  T({ type: String, attribute: "main-padding" }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Main Area Padding (e.g. 24px)",
    fieldMappings: "mainPadding",
    categoryLabel: "Appearance"
  })
], w.prototype, "mainPadding", 2);
$([
  T({ type: String, attribute: "footer-action-type" }),
  y({
    attributeType: f.PROPERTY,
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
], w.prototype, "footerActionType", 2);
$([
  T({ type: String, attribute: "profile-position", reflect: !0 }),
  y({
    attributeType: f.PROPERTY,
    uiComponentType: E.DROPDOWN,
    displayLabel: "Profile Card Position",
    fieldMappings: "profilePosition",
    categoryLabel: "Sidebar Footer",
    optionItems: [
      { label: "Top (below brand)", value: "top" },
      { label: "Bottom (footer)", value: "bottom" }
    ]
  })
], w.prototype, "profilePosition", 2);
$([
  y({ attributeType: f.EVENT, displayLabel: "On Opened Change", eventTrigger: "openedchange", categoryLabel: "Triggers" })
], w.prototype, "onOpenedChange", 1);
$([
  y({ attributeType: f.EVENT, displayLabel: "On Nav Item Click", eventTrigger: "navchange", categoryLabel: "Triggers" })
], w.prototype, "onNavChange", 1);
$([
  y({ attributeType: f.EVENT, displayLabel: "On Sidebar Toggle", eventTrigger: "sidebarToggle", categoryLabel: "Triggers" })
], w.prototype, "onSidebarToggle", 1);
$([
  y({ attributeType: f.EVENT, displayLabel: "On Logout Click", eventTrigger: "logout", categoryLabel: "Triggers" })
], w.prototype, "onLogout", 1);
$([
  y({ attributeType: f.EVENT, displayLabel: "On Settings Click", eventTrigger: "settingsClick", categoryLabel: "Triggers" })
], w.prototype, "onSettingsClick", 1);
$([
  y({ attributeType: f.EVENT, displayLabel: "On Search", eventTrigger: "search", categoryLabel: "Triggers" })
], w.prototype, "onSearch", 1);
$([
  y({ attributeType: f.EVENT, displayLabel: "On Theme Change", eventTrigger: "themechange", categoryLabel: "Triggers" })
], w.prototype, "onThemeChange", 1);
$([
  y({ attributeType: f.ACTION, displayLabel: "Open Sidenav", categoryLabel: "Actions" })
], w.prototype, "open", 1);
$([
  y({ attributeType: f.ACTION, displayLabel: "Close Sidenav", categoryLabel: "Actions" })
], w.prototype, "close", 1);
$([
  y({ attributeType: f.ACTION, displayLabel: "Toggle Sidenav Opened", categoryLabel: "Actions" })
], w.prototype, "toggle", 1);
$([
  y({ attributeType: f.ACTION, displayLabel: "Toggle Sidebar Collapse", categoryLabel: "Actions" })
], w.prototype, "toggleSidebar", 1);
$([
  y({ attributeType: f.ACTION, displayLabel: "Expand Sidebar", categoryLabel: "Actions" })
], w.prototype, "expandSidebar", 1);
$([
  y({ attributeType: f.ACTION, displayLabel: "Collapse Sidebar", categoryLabel: "Actions" })
], w.prototype, "collapseSidebar", 1);
$([
  y({ attributeType: f.ACTION, displayLabel: "Navigate To Item (by index)", categoryLabel: "Actions" })
], w.prototype, "navigateTo", 1);
$([
  y({ attributeType: f.ACTION, displayLabel: "Toggle Theme (Dark/Light)", categoryLabel: "Actions" })
], w.prototype, "toggleTheme", 1);
$([
  y({ attributeType: f.EVENT, displayLabel: "On Notification Click", eventTrigger: "notification-click", categoryLabel: "Triggers" })
], w.prototype, "handleBellClick", 1);
$([
  y({ attributeType: f.EVENT, displayLabel: "On Profile Click", eventTrigger: "profile-click", categoryLabel: "Triggers" })
], w.prototype, "handleProfileClick", 1);
$([
  y({ attributeType: f.EVENT, displayLabel: "On Header Action", eventTrigger: "header-action", categoryLabel: "Triggers" })
], w.prototype, "handleHeaderAction", 1);
w = $([
  kr({
    name: "zero-sidenav-layout",
    version: "1.2.0",
    title: "Sidebar Layout",
    elementSelector: "zero-sidenav-layout",
    group: "Layout",
    iconName: "sidenav-layout-icon.png",
    layoutKind: "panel",
    environment: ["page"]
  }),
  Gr("zero-sidenav-layout"),
  Er()
], w);
export {
  nt as DEFAULT_HEADER_CONFIG_JSON,
  at as DEFAULT_NAV_ITEMS_JSON,
  ni as DEFAULT_NAV_ITEMS_LIST,
  st as DEFAULT_SIDEBAR_FOOTER_CONFIG_JSON,
  w as ZeroSidenavLayout
};
