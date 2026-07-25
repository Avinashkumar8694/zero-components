var br = Object.defineProperty;
var yr = (t, e, r) => e in t ? br(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Wt = (t, e, r) => yr(t, typeof e != "symbol" ? e + "" : e, r);
var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Vt;
(function(t) {
  (function(e) {
    var r = typeof globalThis == "object" ? globalThis : typeof Ft == "object" ? Ft : typeof self == "object" ? self : typeof this == "object" ? this : u(), i = o(t);
    typeof r.Reflect < "u" && (i = o(r.Reflect, i)), e(i, r), typeof r.Reflect > "u" && (r.Reflect = t);
    function o(h, T) {
      return function(A, P) {
        Object.defineProperty(h, A, { configurable: !0, writable: !0, value: P }), T && T(A, P);
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
    function u() {
      return l() || s();
    }
  })(function(e, r) {
    var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", s = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", u = typeof Object.create == "function", h = { __proto__: [] } instanceof Array, T = !u && !h, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: u ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : h ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
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
    }, P = Object.getPrototypeOf(Function), I = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Je(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : qe(), M = typeof WeakMap == "function" ? WeakMap : Ke(), F = o ? Symbol.for("@reflect-metadata:registry") : void 0, U = bt(), Q = yt(U);
    function ee(a, n, d, p) {
      if (S(d)) {
        if (!Ue(a))
          throw new TypeError();
        if (!We(n))
          throw new TypeError();
        return X(a, n);
      } else {
        if (!Ue(a))
          throw new TypeError();
        if (!H(n))
          throw new TypeError();
        if (!H(p) && !S(p) && !G(p))
          throw new TypeError();
        return G(p) && (p = void 0), d = V(d), J(a, n, d, p);
      }
    }
    e("decorate", ee);
    function Y(a, n) {
      function d(p, C) {
        if (!H(p))
          throw new TypeError();
        if (!S(C) && !ut(C))
          throw new TypeError();
        ne(a, n, p, C);
      }
      return d;
    }
    e("metadata", Y);
    function be(a, n, d, p) {
      if (!H(d))
        throw new TypeError();
      return S(p) || (p = V(p)), ne(a, n, d, p);
    }
    e("defineMetadata", be);
    function K(a, n, d) {
      if (!H(n))
        throw new TypeError();
      return S(d) || (d = V(d)), Ie(a, n, d);
    }
    e("hasMetadata", K);
    function te(a, n, d) {
      if (!H(n))
        throw new TypeError();
      return S(d) || (d = V(d)), Z(a, n, d);
    }
    e("hasOwnMetadata", te);
    function xe(a, n, d) {
      if (!H(n))
        throw new TypeError();
      return S(d) || (d = V(d)), re(a, n, d);
    }
    e("getMetadata", xe);
    function ze(a, n, d) {
      if (!H(n))
        throw new TypeError();
      return S(d) || (d = V(d)), Be(a, n, d);
    }
    e("getOwnMetadata", ze);
    function pt(a, n) {
      if (!H(a))
        throw new TypeError();
      return S(n) || (n = V(n)), we(a, n);
    }
    e("getMetadataKeys", pt);
    function Ne(a, n) {
      if (!H(a))
        throw new TypeError();
      return S(n) || (n = V(n)), He(a, n);
    }
    e("getOwnMetadataKeys", Ne);
    function ae(a, n, d) {
      if (!H(n))
        throw new TypeError();
      if (S(d) || (d = V(d)), !H(n))
        throw new TypeError();
      S(d) || (d = V(d));
      var p = de(
        n,
        d,
        /*Create*/
        !1
      );
      return S(p) ? !1 : p.OrdinaryDeleteMetadata(a, n, d);
    }
    e("deleteMetadata", ae);
    function X(a, n) {
      for (var d = a.length - 1; d >= 0; --d) {
        var p = a[d], C = p(n);
        if (!S(C) && !G(C)) {
          if (!We(C))
            throw new TypeError();
          n = C;
        }
      }
      return n;
    }
    function J(a, n, d, p) {
      for (var C = a.length - 1; C >= 0; --C) {
        var j = a[C], B = j(n, d, p);
        if (!S(B) && !G(B)) {
          if (!H(B))
            throw new TypeError();
          p = B;
        }
      }
      return p;
    }
    function Ie(a, n, d) {
      var p = Z(a, n, d);
      if (p)
        return !0;
      var C = Ce(n);
      return G(C) ? !1 : Ie(a, C, d);
    }
    function Z(a, n, d) {
      var p = de(
        n,
        d,
        /*Create*/
        !1
      );
      return S(p) ? !1 : $e(p.OrdinaryHasOwnMetadata(a, n, d));
    }
    function re(a, n, d) {
      var p = Z(a, n, d);
      if (p)
        return Be(a, n, d);
      var C = Ce(n);
      if (!G(C))
        return re(a, C, d);
    }
    function Be(a, n, d) {
      var p = de(
        n,
        d,
        /*Create*/
        !1
      );
      if (!S(p))
        return p.OrdinaryGetOwnMetadata(a, n, d);
    }
    function ne(a, n, d, p) {
      var C = de(
        d,
        p,
        /*Create*/
        !0
      );
      C.OrdinaryDefineOwnMetadata(a, n, d, p);
    }
    function we(a, n) {
      var d = He(a, n), p = Ce(a);
      if (p === null)
        return d;
      var C = we(p, n);
      if (C.length <= 0)
        return d;
      if (d.length <= 0)
        return C;
      for (var j = new k(), B = [], O = 0, c = d; O < c.length; O++) {
        var f = c[O], y = j.has(f);
        y || (j.add(f), B.push(f));
      }
      for (var v = 0, R = C; v < R.length; v++) {
        var f = R[v], y = j.has(f);
        y || (j.add(f), B.push(f));
      }
      return B;
    }
    function He(a, n) {
      var d = de(
        a,
        n,
        /*create*/
        !1
      );
      return d ? d.OrdinaryOwnMetadataKeys(a, n) : [];
    }
    function je(a) {
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
    function S(a) {
      return a === void 0;
    }
    function G(a) {
      return a === null;
    }
    function De(a) {
      return typeof a == "symbol";
    }
    function H(a) {
      return typeof a == "object" ? a !== null : typeof a == "function";
    }
    function ht(a, n) {
      switch (je(a)) {
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
      var d = "string", p = Fe(a, l);
      if (p !== void 0) {
        var C = p.call(a, d);
        if (H(C))
          throw new TypeError();
        return C;
      }
      return se(a);
    }
    function se(a, n) {
      var d, p;
      {
        var C = a.toString;
        if (le(C)) {
          var p = C.call(a);
          if (!H(p))
            return p;
        }
        var d = a.valueOf;
        if (le(d)) {
          var p = d.call(a);
          if (!H(p))
            return p;
        }
      }
      throw new TypeError();
    }
    function $e(a) {
      return !!a;
    }
    function ct(a) {
      return "" + a;
    }
    function V(a) {
      var n = ht(a);
      return De(n) ? n : ct(n);
    }
    function Ue(a) {
      return Array.isArray ? Array.isArray(a) : a instanceof Object ? a instanceof Array : Object.prototype.toString.call(a) === "[object Array]";
    }
    function le(a) {
      return typeof a == "function";
    }
    function We(a) {
      return typeof a == "function";
    }
    function ut(a) {
      switch (je(a)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Te(a, n) {
      return a === n || a !== a && n !== n;
    }
    function Fe(a, n) {
      var d = a[n];
      if (d != null) {
        if (!le(d))
          throw new TypeError();
        return d;
      }
    }
    function Ve(a) {
      var n = Fe(a, s);
      if (!le(n))
        throw new TypeError();
      var d = n.call(a);
      if (!H(d))
        throw new TypeError();
      return d;
    }
    function Ye(a) {
      return a.value;
    }
    function Xe(a) {
      var n = a.next();
      return n.done ? !1 : n;
    }
    function Ge(a) {
      var n = a.return;
      n && n.call(a);
    }
    function Ce(a) {
      var n = Object.getPrototypeOf(a);
      if (typeof a != "function" || a === P || n !== P)
        return n;
      var d = a.prototype, p = d && Object.getPrototypeOf(d);
      if (p == null || p === Object.prototype)
        return n;
      var C = p.constructor;
      return typeof C != "function" || C === a ? n : C;
    }
    function ft() {
      var a;
      !S(F) && typeof r.Reflect < "u" && !(F in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (a = Pt(r.Reflect));
      var n, d, p, C = new M(), j = {
        registerProvider: B,
        getProvider: c,
        setProvider: y
      };
      return j;
      function B(v) {
        if (!Object.isExtensible(j))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case a === v:
            break;
          case S(n):
            n = v;
            break;
          case n === v:
            break;
          case S(d):
            d = v;
            break;
          case d === v:
            break;
          default:
            p === void 0 && (p = new k()), p.add(v);
            break;
        }
      }
      function O(v, R) {
        if (!S(n)) {
          if (n.isProviderFor(v, R))
            return n;
          if (!S(d)) {
            if (d.isProviderFor(v, R))
              return n;
            if (!S(p))
              for (var L = Ve(p); ; ) {
                var N = Xe(L);
                if (!N)
                  return;
                var W = Ye(N);
                if (W.isProviderFor(v, R))
                  return Ge(L), W;
              }
          }
        }
        if (!S(a) && a.isProviderFor(v, R))
          return a;
      }
      function c(v, R) {
        var L = C.get(v), N;
        return S(L) || (N = L.get(R)), S(N) && (N = O(v, R), S(N) || (S(L) && (L = new I(), C.set(v, L)), L.set(R, N))), N;
      }
      function f(v) {
        if (S(v))
          throw new TypeError();
        return n === v || d === v || !S(p) && p.has(v);
      }
      function y(v, R, L) {
        if (!f(L))
          throw new Error("Metadata provider not registered.");
        var N = c(v, R);
        if (N !== L) {
          if (!S(N))
            return !1;
          var W = C.get(v);
          S(W) && (W = new I(), C.set(v, W)), W.set(R, L);
        }
        return !0;
      }
    }
    function bt() {
      var a;
      return !S(F) && H(r.Reflect) && Object.isExtensible(r.Reflect) && (a = r.Reflect[F]), S(a) && (a = ft()), !S(F) && H(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: a
      }), a;
    }
    function yt(a) {
      var n = new M(), d = {
        isProviderFor: function(f, y) {
          var v = n.get(f);
          return S(v) ? !1 : v.has(y);
        },
        OrdinaryDefineOwnMetadata: B,
        OrdinaryHasOwnMetadata: C,
        OrdinaryGetOwnMetadata: j,
        OrdinaryOwnMetadataKeys: O,
        OrdinaryDeleteMetadata: c
      };
      return U.registerProvider(d), d;
      function p(f, y, v) {
        var R = n.get(f), L = !1;
        if (S(R)) {
          if (!v)
            return;
          R = new I(), n.set(f, R), L = !0;
        }
        var N = R.get(y);
        if (S(N)) {
          if (!v)
            return;
          if (N = new I(), R.set(y, N), !a.setProvider(f, y, d))
            throw R.delete(y), L && n.delete(f), new Error("Wrong provider for target.");
        }
        return N;
      }
      function C(f, y, v) {
        var R = p(
          y,
          v,
          /*Create*/
          !1
        );
        return S(R) ? !1 : $e(R.has(f));
      }
      function j(f, y, v) {
        var R = p(
          y,
          v,
          /*Create*/
          !1
        );
        if (!S(R))
          return R.get(f);
      }
      function B(f, y, v, R) {
        var L = p(
          v,
          R,
          /*Create*/
          !0
        );
        L.set(f, y);
      }
      function O(f, y) {
        var v = [], R = p(
          f,
          y,
          /*Create*/
          !1
        );
        if (S(R))
          return v;
        for (var L = R.keys(), N = Ve(L), W = 0; ; ) {
          var _e = Xe(N);
          if (!_e)
            return v.length = W, v;
          var Ze = Ye(_e);
          try {
            v[W] = Ze;
          } catch (Qe) {
            try {
              Ge(N);
            } finally {
              throw Qe;
            }
          }
          W++;
        }
      }
      function c(f, y, v) {
        var R = p(
          y,
          v,
          /*Create*/
          !1
        );
        if (S(R) || !R.delete(f))
          return !1;
        if (R.size === 0) {
          var L = n.get(y);
          S(L) || (L.delete(v), L.size === 0 && n.delete(L));
        }
        return !0;
      }
    }
    function Pt(a) {
      var n = a.defineMetadata, d = a.hasOwnMetadata, p = a.getOwnMetadata, C = a.getOwnMetadataKeys, j = a.deleteMetadata, B = new M(), O = {
        isProviderFor: function(c, f) {
          var y = B.get(c);
          return !S(y) && y.has(f) ? !0 : C(c, f).length ? (S(y) && (y = new k(), B.set(c, y)), y.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: n,
        OrdinaryHasOwnMetadata: d,
        OrdinaryGetOwnMetadata: p,
        OrdinaryOwnMetadataKeys: C,
        OrdinaryDeleteMetadata: j
      };
      return O;
    }
    function de(a, n, d) {
      var p = U.getProvider(a, n);
      if (!S(p))
        return p;
      if (d) {
        if (U.setProvider(a, n, Q))
          return Q;
        throw new Error("Illegal state.");
      }
    }
    function Je() {
      var a = {}, n = [], d = (
        /** @class */
        function() {
          function O(c, f, y) {
            this._index = 0, this._keys = c, this._values = f, this._selector = y;
          }
          return O.prototype["@@iterator"] = function() {
            return this;
          }, O.prototype[s] = function() {
            return this;
          }, O.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var f = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = n, this._values = n) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, O.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = n, this._values = n), c;
          }, O.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = n, this._values = n), { value: c, done: !0 };
          }, O;
        }()
      ), p = (
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
          }), O.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, O.prototype.get = function(c) {
            var f = this._find(
              c,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, O.prototype.set = function(c, f) {
            var y = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[y] = f, this;
          }, O.prototype.delete = function(c) {
            var f = this._find(
              c,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var y = this._keys.length, v = f + 1; v < y; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, Te(c, this._cacheKey) && (this._cacheKey = a, this._cacheIndex = -2), !0;
            }
            return !1;
          }, O.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = a, this._cacheIndex = -2;
          }, O.prototype.keys = function() {
            return new d(this._keys, this._values, C);
          }, O.prototype.values = function() {
            return new d(this._keys, this._values, j);
          }, O.prototype.entries = function() {
            return new d(this._keys, this._values, B);
          }, O.prototype["@@iterator"] = function() {
            return this.entries();
          }, O.prototype[s] = function() {
            return this.entries();
          }, O.prototype._find = function(c, f) {
            if (!Te(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var y = 0; y < this._keys.length; y++)
                if (Te(this._keys[y], c)) {
                  this._cacheIndex = y;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, O;
        }()
      );
      return p;
      function C(O, c) {
        return O;
      }
      function j(O, c) {
        return c;
      }
      function B(O, c) {
        return [O, c];
      }
    }
    function qe() {
      var a = (
        /** @class */
        function() {
          function n() {
            this._map = new I();
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
          }, n.prototype[s] = function() {
            return this.keys();
          }, n;
        }()
      );
      return a;
    }
    function Ke() {
      var a = 16, n = A.create(), d = p();
      return (
        /** @class */
        function() {
          function c() {
            this._key = p();
          }
          return c.prototype.has = function(f) {
            var y = C(
              f,
              /*create*/
              !1
            );
            return y !== void 0 ? A.has(y, this._key) : !1;
          }, c.prototype.get = function(f) {
            var y = C(
              f,
              /*create*/
              !1
            );
            return y !== void 0 ? A.get(y, this._key) : void 0;
          }, c.prototype.set = function(f, y) {
            var v = C(
              f,
              /*create*/
              !0
            );
            return v[this._key] = y, this;
          }, c.prototype.delete = function(f) {
            var y = C(
              f,
              /*create*/
              !1
            );
            return y !== void 0 ? delete y[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = p();
          }, c;
        }()
      );
      function p() {
        var c;
        do
          c = "@@WeakMap@@" + O();
        while (A.has(n, c));
        return n[c] = !0, c;
      }
      function C(c, f) {
        if (!i.call(c, d)) {
          if (!f)
            return;
          Object.defineProperty(c, d, { value: A.create() });
        }
        return c[d];
      }
      function j(c, f) {
        for (var y = 0; y < f; ++y)
          c[y] = Math.random() * 255 | 0;
        return c;
      }
      function B(c) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : j(f, c), f;
        }
        return j(new Array(c), c);
      }
      function O() {
        var c = B(a);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var f = "", y = 0; y < a; ++y) {
          var v = c[y];
          (y === 4 || y === 6 || y === 8) && (f += "-"), v < 16 && (f += "0"), f += v.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function ye(a) {
      return a.__ = void 0, delete a.__, a;
    }
  });
})(Vt || (Vt = {}));
function gr(t) {
  return typeof t.name == "string" && typeof t.version == "string" && typeof t.title == "string" && typeof t.elementSelector == "string" && typeof t.group == "string" && typeof t.iconName == "string";
}
function vr(t) {
  return function(e) {
    if (gr(t)) {
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
function mr(t) {
  return vr(t);
}
function xr(t) {
  return function(e) {
    class r extends e {
      constructor() {
        super(...arguments);
        Wt(this, "_stylesApplied", !1);
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
        var T;
        const l = document.querySelector('style.global-style[type="text/css"]'), s = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), u = "adoptedStyleSheets" in Document.prototype, h = this.shadowRoot;
        if (!h) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && u) {
          const A = new CSSStyleSheet(), P = (T = l.sheet) == null ? void 0 : T.cssRules;
          P && (Array.from(P).forEach((I) => A.insertRule(I.cssText)), h.adoptedStyleSheets = [...h.adoptedStyleSheets, A]);
        } else if (l) {
          const A = l.cloneNode(!0);
          h.appendChild(A);
        }
        s.forEach((A) => {
          const P = A.cloneNode(!0);
          h.appendChild(P);
        });
      }
    }
    return r;
  };
}
function wr(t) {
  var r;
  if (((r = t == null ? void 0 : t.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function $r(t) {
  return function(e, r) {
    try {
      wr(t);
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
function g(t) {
  return $r(t);
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
const rt = globalThis, Ct = rt.ShadowRoot && (rt.ShadyCSS === void 0 || rt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, _t = Symbol(), Yt = /* @__PURE__ */ new WeakMap();
let sr = class {
  constructor(e, r, i) {
    if (this._$cssResult$ = !0, i !== _t) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (Ct && e === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (e = Yt.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Yt.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Tr = (t) => new sr(typeof t == "string" ? t : t + "", void 0, _t), lr = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((i, o, l) => i + ((s) => {
    if (s._$cssResult$ === !0) return s.cssText;
    if (typeof s == "number") return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + t[l + 1], t[0]);
  return new sr(r, t, _t);
}, Cr = (t, e) => {
  if (Ct) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const i = document.createElement("style"), o = rt.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = r.cssText, t.appendChild(i);
  }
}, Xt = Ct ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const i of e.cssRules) r += i.cssText;
  return Tr(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: _r, defineProperty: Er, getOwnPropertyDescriptor: Sr, getOwnPropertyNames: Pr, getOwnPropertySymbols: kr, getPrototypeOf: Ar } = Object, oe = globalThis, Gt = oe.trustedTypes, Or = Gt ? Gt.emptyScript : "", gt = oe.reactiveElementPolyfillSupport, Pe = (t, e) => t, it = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Or : null;
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
} }, Et = (t, e) => !_r(t, e), Jt = { attribute: !0, type: String, converter: it, reflect: !1, useDefault: !1, hasChanged: Et };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), oe.litPropertyMetadata ?? (oe.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let ge = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = Jt) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, r);
      o !== void 0 && Er(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, r, i) {
    const { get: o, set: l } = Sr(this.prototype, e) ?? { get() {
      return this[r];
    }, set(s) {
      this[r] = s;
    } };
    return { get: o, set(s) {
      const u = o == null ? void 0 : o.call(this);
      l == null || l.call(this, s), this.requestUpdate(e, u, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Jt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Pe("elementProperties"))) return;
    const e = Ar(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Pe("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Pe("properties"))) {
      const r = this.properties, i = [...Pr(r), ...kr(r)];
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
      for (const o of i) r.unshift(Xt(o));
    } else e !== void 0 && r.push(Xt(e));
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
    return Cr(e, this.constructor.elementStyles), e;
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
      const s = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : it).toAttribute(r, i.type);
      this._$Em = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var l, s;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const u = i.getPropertyOptions(o), h = typeof u.converter == "function" ? { fromAttribute: u.converter } : ((l = u.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? u.converter : it;
      this._$Em = o;
      const T = h.fromAttribute(r, u.type);
      this[o] = T ?? ((s = this._$Ej) == null ? void 0 : s.get(o)) ?? T, this._$Em = null;
    }
  }
  requestUpdate(e, r, i, o = !1, l) {
    var s;
    if (e !== void 0) {
      const u = this.constructor;
      if (o === !1 && (l = this[e]), i ?? (i = u.getPropertyOptions(e)), !((i.hasChanged ?? Et)(l, r) || i.useDefault && i.reflect && l === ((s = this._$Ej) == null ? void 0 : s.get(e)) && !this.hasAttribute(u._$Eu(e, i)))) return;
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
        const { wrapped: u } = s, h = this[l];
        u !== !0 || this._$AL.has(l) || h === void 0 || this.C(l, void 0, s, h);
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
ge.elementStyles = [], ge.shadowRootOptions = { mode: "open" }, ge[Pe("elementProperties")] = /* @__PURE__ */ new Map(), ge[Pe("finalized")] = /* @__PURE__ */ new Map(), gt == null || gt({ ReactiveElement: ge }), (oe.reactiveElementVersions ?? (oe.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ke = globalThis, qt = (t) => t, ot = ke.trustedTypes, Kt = ot ? ot.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, dr = "$lit$", ie = `lit$${Math.random().toFixed(9).slice(2)}$`, pr = "?" + ie, Rr = `<${pr}>`, ue = document, Oe = () => ue.createComment(""), Re = (t) => t === null || typeof t != "object" && typeof t != "function", St = Array.isArray, Mr = (t) => St(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", vt = `[ 	
\f\r]`, Ee = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Zt = /-->/g, Qt = />/g, pe = RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), er = /'/g, tr = /"/g, hr = /^(?:script|style|textarea|title)$/i, Lr = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), m = Lr(1), fe = Symbol.for("lit-noChange"), _ = Symbol.for("lit-nothing"), rr = /* @__PURE__ */ new WeakMap(), he = ue.createTreeWalker(ue, 129);
function cr(t, e) {
  if (!St(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Kt !== void 0 ? Kt.createHTML(e) : e;
}
const zr = (t, e) => {
  const r = t.length - 1, i = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", s = Ee;
  for (let u = 0; u < r; u++) {
    const h = t[u];
    let T, A, P = -1, I = 0;
    for (; I < h.length && (s.lastIndex = I, A = s.exec(h), A !== null); ) I = s.lastIndex, s === Ee ? A[1] === "!--" ? s = Zt : A[1] !== void 0 ? s = Qt : A[2] !== void 0 ? (hr.test(A[2]) && (o = RegExp("</" + A[2], "g")), s = pe) : A[3] !== void 0 && (s = pe) : s === pe ? A[0] === ">" ? (s = o ?? Ee, P = -1) : A[1] === void 0 ? P = -2 : (P = s.lastIndex - A[2].length, T = A[1], s = A[3] === void 0 ? pe : A[3] === '"' ? tr : er) : s === tr || s === er ? s = pe : s === Zt || s === Qt ? s = Ee : (s = pe, o = void 0);
    const k = s === pe && t[u + 1].startsWith("/>") ? " " : "";
    l += s === Ee ? h + Rr : P >= 0 ? (i.push(T), h.slice(0, P) + dr + h.slice(P) + ie + k) : h + ie + (P === -2 ? u : k);
  }
  return [cr(t, l + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class Me {
  constructor({ strings: e, _$litType$: r }, i) {
    let o;
    this.parts = [];
    let l = 0, s = 0;
    const u = e.length - 1, h = this.parts, [T, A] = zr(e, r);
    if (this.el = Me.createElement(T, i), he.currentNode = this.el.content, r === 2 || r === 3) {
      const P = this.el.content.firstChild;
      P.replaceWith(...P.childNodes);
    }
    for (; (o = he.nextNode()) !== null && h.length < u; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const P of o.getAttributeNames()) if (P.endsWith(dr)) {
          const I = A[s++], k = o.getAttribute(P).split(ie), M = /([.?@])?(.*)/.exec(I);
          h.push({ type: 1, index: l, name: M[2], strings: k, ctor: M[1] === "." ? Ir : M[1] === "?" ? Br : M[1] === "@" ? Hr : dt }), o.removeAttribute(P);
        } else P.startsWith(ie) && (h.push({ type: 6, index: l }), o.removeAttribute(P));
        if (hr.test(o.tagName)) {
          const P = o.textContent.split(ie), I = P.length - 1;
          if (I > 0) {
            o.textContent = ot ? ot.emptyScript : "";
            for (let k = 0; k < I; k++) o.append(P[k], Oe()), he.nextNode(), h.push({ type: 2, index: ++l });
            o.append(P[I], Oe());
          }
        }
      } else if (o.nodeType === 8) if (o.data === pr) h.push({ type: 2, index: l });
      else {
        let P = -1;
        for (; (P = o.data.indexOf(ie, P + 1)) !== -1; ) h.push({ type: 7, index: l }), P += ie.length - 1;
      }
      l++;
    }
  }
  static createElement(e, r) {
    const i = ue.createElement("template");
    return i.innerHTML = e, i;
  }
}
function me(t, e, r = t, i) {
  var s, u;
  if (e === fe) return e;
  let o = i !== void 0 ? (s = r._$Co) == null ? void 0 : s[i] : r._$Cl;
  const l = Re(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((u = o == null ? void 0 : o._$AO) == null || u.call(o, !1), l === void 0 ? o = void 0 : (o = new l(t), o._$AT(t, r, i)), i !== void 0 ? (r._$Co ?? (r._$Co = []))[i] = o : r._$Cl = o), o !== void 0 && (e = me(t, o._$AS(t, e.values), o, i)), e;
}
class Nr {
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
    const { el: { content: r }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? ue).importNode(r, !0);
    he.currentNode = o;
    let l = he.nextNode(), s = 0, u = 0, h = i[0];
    for (; h !== void 0; ) {
      if (s === h.index) {
        let T;
        h.type === 2 ? T = new Le(l, l.nextSibling, this, e) : h.type === 1 ? T = new h.ctor(l, h.name, h.strings, this, e) : h.type === 6 && (T = new jr(l, this, e)), this._$AV.push(T), h = i[++u];
      }
      s !== (h == null ? void 0 : h.index) && (l = he.nextNode(), s++);
    }
    return he.currentNode = ue, o;
  }
  p(e) {
    let r = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, r), r += i.strings.length - 2) : i._$AI(e[r])), r++;
  }
}
class Le {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, i, o) {
    this.type = 2, this._$AH = _, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = me(this, e, r), Re(e) ? e === _ || e == null || e === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : e !== this._$AH && e !== fe && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Mr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== _ && Re(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ue.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Me.createElement(cr(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(r);
    else {
      const s = new Nr(o, this), u = s.u(this.options);
      s.p(r), this.T(u), this._$AH = s;
    }
  }
  _$AC(e) {
    let r = rr.get(e.strings);
    return r === void 0 && rr.set(e.strings, r = new Me(e)), r;
  }
  k(e) {
    St(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let i, o = 0;
    for (const l of e) o === r.length ? r.push(i = new Le(this.O(Oe()), this.O(Oe()), this, this.options)) : i = r[o], i._$AI(l), o++;
    o < r.length && (this._$AR(i && i._$AB.nextSibling, o), r.length = o);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); e !== this._$AB; ) {
      const o = qt(e).nextSibling;
      qt(e).remove(), e = o;
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
  constructor(e, r, i, o, l) {
    this.type = 1, this._$AH = _, this._$AN = void 0, this.element = e, this.name = r, this._$AM = o, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = _;
  }
  _$AI(e, r = this, i, o) {
    const l = this.strings;
    let s = !1;
    if (l === void 0) e = me(this, e, r, 0), s = !Re(e) || e !== this._$AH && e !== fe, s && (this._$AH = e);
    else {
      const u = e;
      let h, T;
      for (e = l[0], h = 0; h < l.length - 1; h++) T = me(this, u[i + h], r, h), T === fe && (T = this._$AH[h]), s || (s = !Re(T) || T !== this._$AH[h]), T === _ ? e = _ : e !== _ && (e += (T ?? "") + l[h + 1]), this._$AH[h] = T;
    }
    s && !o && this.j(e);
  }
  j(e) {
    e === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Ir extends dt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === _ ? void 0 : e;
  }
}
class Br extends dt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== _);
  }
}
class Hr extends dt {
  constructor(e, r, i, o, l) {
    super(e, r, i, o, l), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = me(this, e, r, 0) ?? _) === fe) return;
    const i = this._$AH, o = e === _ && i !== _ || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== _ && (i === _ || o);
    o && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class jr {
  constructor(e, r, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    me(this, e);
  }
}
const mt = ke.litHtmlPolyfillSupport;
mt == null || mt(Me, Le), (ke.litHtmlVersions ?? (ke.litHtmlVersions = [])).push("3.3.3");
const Dr = (t, e, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const l = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = o = new Le(e.insertBefore(Oe(), l), l, void 0, r ?? {});
  }
  return o._$AI(t), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = globalThis;
let Ae = class extends ge {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Dr(r, this.renderRoot, this.renderOptions);
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
    return fe;
  }
};
var nr;
Ae._$litElement$ = !0, Ae.finalized = !0, (nr = ce.litElementHydrateSupport) == null || nr.call(ce, { LitElement: Ae });
const xt = ce.litElementPolyfillSupport;
xt == null || xt({ LitElement: Ae });
(ce.litElementVersions ?? (ce.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ur = (t) => (e, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wr = { attribute: !0, type: String, converter: it, reflect: !1, hasChanged: Et }, Fr = (t = Wr, e, r) => {
  const { kind: i, metadata: o } = r;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), l.set(r.name, t), i === "accessor") {
    const { name: s } = r;
    return { set(u) {
      const h = e.get.call(this);
      e.set.call(this, u), this.requestUpdate(s, h, t, !0, u);
    }, init(u) {
      return u !== void 0 && this.C(s, void 0, t, u), u;
    } };
  }
  if (i === "setter") {
    const { name: s } = r;
    return function(u) {
      const h = this[s];
      e.call(this, u), this.requestUpdate(s, h, t, !0, u);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function w(t) {
  return (e, r) => typeof r == "object" ? Fr(t, e, r) : ((i, o, l) => {
    const s = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, i), s ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(t, e, r);
}
var Vr = Object.defineProperty, Yr = Object.getOwnPropertyDescriptor, D = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? Yr(e, r) : e, l = t.length - 1, s; l >= 0; l--)
    (s = t[l]) && (o = (i ? s(e, r, o) : s(o)) || o);
  return i && o && Vr(e, r, o), o;
};
const lt = class lt extends Ae {
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
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return m``;
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
      const u = this.responsiveProps[l];
      if (!u) return;
      let h = "";
      Object.entries(u).forEach(([T, A]) => {
        const P = i[T];
        P && (h += `--${e}-${P}-override: ${A};
`);
      }), h && (o += `${s} {
  :host {
    ${h}  }
}
`);
    }), o ? m`<style>${o}</style>` : m``;
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
    return this.isStudio ? m`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    ` : m``;
  }
  renderHeader() {
    return m``;
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
lt.slots = [], lt.styles = lr`
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
  w({ type: Object, attribute: "responsive-props" })
], z.prototype, "responsiveProps", 2);
D([
  w({ type: String })
], z.prototype, "activeEdge", 2);
D([
  w({ type: Boolean, reflect: !0 }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], z.prototype, "visible", 2);
D([
  w({ type: Number, reflect: !0, attribute: "z-index" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], z.prototype, "zIndex", 2);
D([
  w({ type: Number, reflect: !0 }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], z.prototype, "opacity", 2);
D([
  w({ type: String, attribute: "custom-class" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], z.prototype, "customClass", 2);
D([
  w({ type: String, reflect: !0 }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], z.prototype, "width", 2);
D([
  w({ type: String, reflect: !0 }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], z.prototype, "height", 2);
D([
  w({ type: String, reflect: !0 }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], z.prototype, "margin", 2);
D([
  w({ type: String, reflect: !0 }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], z.prototype, "padding", 2);
D([
  g({
    attributeType: b.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], z.prototype, "onClick", 1);
D([
  w({ type: String, reflect: !0 })
], z.prototype, "direction", 2);
D([
  w({ type: String, reflect: !0 })
], z.prototype, "justify", 2);
D([
  w({ type: String, reflect: !0 })
], z.prototype, "align", 2);
D([
  w({ type: String, reflect: !0 })
], z.prototype, "gap", 2);
D([
  w({ type: Number, reflect: !0, attribute: "items-per-row" })
], z.prototype, "itemsPerRow", 2);
D([
  w({ type: String, attribute: "background-color", reflect: !0 }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], z.prototype, "backgroundColor", 2);
D([
  w({ type: String, attribute: "border-radius", reflect: !0 }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], z.prototype, "borderRadius", 2);
D([
  w({ type: String, reflect: !0, attribute: "elevation" }),
  g({
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
D([
  g({
    attributeType: b.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], z.prototype, "show", 1);
D([
  g({
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
const Xr = { CHILD: 2 }, Gr = (t) => (...e) => ({ _$litDirective$: t, values: e });
class Jr {
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
class wt extends Jr {
  constructor(e) {
    if (super(e), this.it = _, e.type !== Xr.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === _ || e == null) return this._t = void 0, this.it = e;
    if (e === fe) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.it) return this._t;
    this.it = e;
    const r = [e];
    return r.raw = r, this._t = { _$litType$: this.constructor.resultType, strings: r, values: [] };
  }
}
wt.directiveName = "unsafeHTML", wt.resultType = 1;
const ir = Gr(wt);
var qr = Object.defineProperty, Kr = Object.getOwnPropertyDescriptor, $ = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? Kr(e, r) : e, l = t.length - 1, s; l >= 0; l--)
    (s = t[l]) && (o = (i ? s(e, r, o) : s(o)) || o);
  return i && o && qr(e, r, o), o;
};
const ur = [
  { icon: "🏠", label: "Home", id: "home" },
  { icon: "📊", label: "Dashboard", id: "dashboard" },
  { icon: "📁", label: "Projects", id: "projects" },
  { icon: "👥", label: "Team", id: "team" },
  { separator: !0 },
  { section: "System" },
  { icon: "⚙️", label: "Settings", id: "settings" }
], $t = {
  showSearch: !1,
  searchPlaceholder: "Search…",
  showNotificationBell: !1,
  notificationCount: 0,
  showUserAvatar: !1,
  userAvatarUrl: "",
  userName: "User Name",
  userRole: "Member",
  showBreadcrumb: !1,
  breadcrumbs: []
}, Tt = {
  show: !1,
  avatarUrl: "",
  userName: "User Name",
  userRole: "Member",
  showLogout: !1,
  showSettings: !1
}, ve = JSON.stringify(ur, null, 2), at = JSON.stringify($t, null, 2), nt = JSON.stringify(Tt, null, 2);
function et(t) {
  try {
    const e = JSON.parse(t);
    if (Array.isArray(e)) return e;
  } catch {
  }
  return ur;
}
function or(t) {
  try {
    const e = JSON.parse(t);
    if (e && typeof e == "object") return { ...$t, ...e };
  } catch {
  }
  return $t;
}
function ar(t) {
  try {
    const e = JSON.parse(t);
    if (e && typeof e == "object") return { ...Tt, ...e };
  } catch {
  }
  return Tt;
}
function st(t = "") {
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
function Se(t, e, r, i, o, l) {
  if (t === "hidden") return "";
  let s = "☰";
  const u = i === "over" ? !o : r;
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
    ` : e === "chevron" ? u ? s = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      ` : s = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      ` : e === "arrow" && (u ? s = `
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
function Zr(t, e, r, i, o, l, s, u) {
  var P;
  if (t.separator)
    return '<div style="height:1px; background:rgba(255,255,255,0.1); margin:6px 12px;"></div>';
  if (t.section)
    return u ? "" : `
      <div style="padding:10px 12px 4px; font-size:0.68rem; font-weight:700;
        letter-spacing:0.08em; text-transform:uppercase;
        color:${i}; opacity:0.45; white-space:nowrap;">
        ${t.section}
      </div>
    `;
  const h = r === e, T = !u && t.badge ? `
    <span style="margin-left:auto; background:${t.badgeColor || s};
      color:#fff; font-size:0.65rem; font-weight:700; padding:1px 7px;
      border-radius:999px; flex-shrink:0;">
      ${t.badge}
    </span>
  ` : "", A = !u && ((P = t.children) != null && P.length) ? `
    <span style="margin-left:auto; color:${i}; font-size:0.7rem;">›</span>
  ` : "";
  return `
    <div data-tab-index="${e}" style="
      display:flex; align-items:center; gap:10px;
      padding:9px 12px; border-radius:8px; margin-bottom:2px;
      cursor:${t.disabled ? "not-allowed" : "pointer"};
      opacity:${t.disabled ? "0.4" : "1"};
      font-size:0.875rem; font-weight:${h ? "600" : "500"};
      color:${h ? l : i};
      background:${h ? o : "transparent"};
      transition:all 0.15s; user-select:none; overflow:hidden;
    ">
      <span style="font-size:1.05rem; flex-shrink:0; width:20px; text-align:center;">
        ${t.icon ?? "•"}
      </span>
      ${u ? "" : `
        <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;">
          ${t.label ?? ""}
        </span>
        ${T}${A}
      `}
    </div>
  `;
}
function Qr(t, e, r) {
  var o;
  const i = [];
  if (t.showBreadcrumb && ((o = t.breadcrumbs) != null && o.length)) {
    const l = t.breadcrumbs.map(
      (s, u) => u < t.breadcrumbs.length - 1 ? `<span style="color:${r}80;">${s}</span><span style="color:${r}40; margin:0 4px;">›</span>` : `<span style="color:${r}; font-weight:600;">${s}</span>`
    ).join("");
    i.push(`<div style="display:flex; align-items:center; font-size:0.8rem;">${l}</div>`);
  }
  if (t.showSearch && i.push(`
      <div style="flex:1; max-width:280px; display:flex; align-items:center; gap:8px;
        background:rgba(0,0,0,0.04); border-radius:8px; padding:7px 12px;">
        <span style="color:${r}50; font-size:0.85rem;">🔍</span>
        <span style="color:${r}40; font-size:0.83rem;">${t.searchPlaceholder ?? "Search…"}</span>
      </div>
    `), i.push('<div style="flex:1;"></div>'), t.showNotificationBell) {
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
    const l = st(t.userName), s = t.userAvatarUrl ? `<img src="${t.userAvatarUrl}" style="width:32px; height:32px; border-radius:50%; object-fit:cover; flex-shrink:0;" />` : `<div style="width:32px; height:32px; border-radius:50%; background:${e}; color:#fff;
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
function ei(t, e, r, i = "buttons", o = "#94a3b8") {
  if (!t.show) return "";
  const l = st(t.userName);
  return `
    <div style="padding:12px 14px; border-top:1px solid rgba(255,255,255,0.07);
      display:flex; align-items:center; gap:10px; flex-shrink:0;">
      ${t.avatarUrl ? `<img src="${t.avatarUrl}" style="width:34px; height:34px; border-radius:50%; object-fit:cover; flex-shrink:0;" />` : `<div style="width:34px; height:34px; border-radius:50%; background:rgba(255,255,255,0.15);
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
    }, this.headerMode = "config", this.sidenavMode = "config", this.footerMode = "config", this.fixedHeader = !0, this.fixedFooter = !0, this.sidenavType = "side", this.opened = !0, this.hasBackdrop = !0, this.collapseBtnPosition = "sidebar-bottom", this.collapseBtnIcon = "chevron", this.navItems = ve, this.activeItem = 0, this.headerConfig = at, this.sidebarFooterConfig = nt, this.appName = "My App", this.appSubtitle = "", this.appLogo = "🚀", this.headerTitle = "", this.headerLogo = "", this.collapsed = !1, this.sidebarWidth = "260px", this.headerHeight = "60px", this.collapsedWidth = "64px", this.showCollapseBtn = !0, this.showThemeToggle = !1, this.themeMode = "light", this.sidebarBg = "#1e293b", this.sidebarText = "#94a3b8", this.sidebarActiveBg = "#334155", this.sidebarActiveText = "#ffffff", this.accentColor = "#6366f1", this.headerBg = "#ffffff", this.headerText = "#1e293b", this.headerBorder = "#e2e8f0", this.mainBg = "#f8fafc", this.mainPadding = "24px", this.footerActionType = "buttons", this._expandedItems = /* @__PURE__ */ new Set();
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
        appName: "My App",
        appSubtitle: "",
        appLogo: "🚀",
        accentColor: "#6366f1",
        sidebarBg: "#1e293b",
        sidebarText: "#94a3b8",
        sidebarActiveBg: "#334155",
        sidebarActiveText: "#ffffff",
        headerBg: "#ffffff",
        headerText: "#1e293b",
        headerBorder: "#e2e8f0",
        mainBg: "#f8fafc",
        footerActionType: "buttons",
        navItems: ve,
        headerConfig: JSON.stringify({
          showSearch: !0,
          searchPlaceholder: "Search…",
          showNotificationBell: !0,
          notificationCount: 0,
          showUserAvatar: !0,
          userName: "User Name",
          userRole: "Member",
          showBreadcrumb: !1
        }),
        sidebarFooterConfig: JSON.stringify({
          show: !0,
          userName: "User Name",
          userRole: "Member",
          showSettings: !0,
          showLogout: !0
        }),
        activeItem: 0,
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
      { name: "navItems", label: "Nav Items (JSON)", control: "json", group: "Navigation", defaultValue: ve },
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
      { name: "accentColor", label: "Accent Color", control: "color", group: "Theme", defaultValue: "#6366f1" }
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
      const o = et(this.navItems).findIndex((l) => {
        if (!l.href) return !1;
        let s = l.href;
        try {
          s = new URL(l.href, window.location.origin).pathname;
        } catch {
        }
        if (s.startsWith("/")) {
          const T = s.split("/").filter(Boolean);
          T.length > 1 && T[0].startsWith("project-") && (s = "/" + T.slice(1).join("/"));
        }
        const u = s.replace(/\/$/, ""), h = r.replace(/\/$/, "");
        return u === h || u === "/" + h || "/" + u === h;
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
  // ─── Toggle Button Helper ──────────────────────────────────────────────────
  renderToggleButton(t) {
    const e = t === "floating", r = t === "header-left" || t === "header-right";
    let i = m`☰`;
    const o = this.collapseBtnIcon === "chevron", l = this.collapseBtnIcon === "arrow", s = this.collapseBtnIcon === "hamburger", u = this.collapseBtnIcon === "dots";
    s ? i = m`
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      ` : u ? i = m`
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="2"/>
          <circle cx="12" cy="12" r="2"/>
          <circle cx="12" cy="19" r="2"/>
        </svg>
      ` : o ? (this.sidenavType === "over" ? !this.opened : this.collapsed) ? i = m`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        ` : i = m`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        ` : l && ((this.sidenavType === "over" ? !this.opened : this.collapsed) ? i = m`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        ` : i = m`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        `);
    const h = (T) => {
      T.stopPropagation(), this.sidenavType === "over" ? this.toggle() : this.toggleSidebar();
    };
    return e ? m`
        <button class="snl-floating-toggle" @click=${h} title="Toggle sidebar">
          ${i}
        </button>
      ` : r ? m`
        <button class="snl-header-btn" style="color: ${this.headerText};" @click=${h} title="Toggle sidebar">
          ${i}
        </button>
      ` : m`
      <button class="snl-collapse-btn" style="color: ${this.sidebarText};" @click=${h} title="Toggle sidebar">
        ${i}
      </button>
    `;
  }
  // ─── getStudioTemplate ─────────────────────────────────────────────────────
  static getStudioTemplate(t) {
    var Je, qe, Ke, ye, a, n, d, p, C, j, B, O, c, f, y, v, R, L, N, W, _e, Ze, Qe, kt, At, Ot, Rt, Mt, Lt, zt, Nt, It, Bt, Ht, jt;
    const e = ((Je = t == null ? void 0 : t.props) == null ? void 0 : Je.headerMode) || "config", r = ((qe = t == null ? void 0 : t.props) == null ? void 0 : qe.sidenavMode) || "config", i = ((Ke = t == null ? void 0 : t.props) == null ? void 0 : Ke.footerMode) || "config", o = ((ye = t == null ? void 0 : t.props) == null ? void 0 : ye.navItems) || ve, l = ((a = t == null ? void 0 : t.props) == null ? void 0 : a.headerConfig) || at, s = ((n = t == null ? void 0 : t.props) == null ? void 0 : n.sidebarFooterConfig) || nt, u = ((d = t == null ? void 0 : t.props) == null ? void 0 : d.appName) || "My App", h = ((p = t == null ? void 0 : t.props) == null ? void 0 : p.appSubtitle) || "", T = ((C = t == null ? void 0 : t.props) == null ? void 0 : C.appLogo) || "🚀", A = ((j = t == null ? void 0 : t.props) == null ? void 0 : j.headerTitle) || "", P = ((B = t == null ? void 0 : t.props) == null ? void 0 : B.headerLogo) || "", I = Number(((O = t == null ? void 0 : t.props) == null ? void 0 : O.activeItem) ?? 0), k = !!((c = t == null ? void 0 : t.props) != null && c.collapsed), M = ((f = t == null ? void 0 : t.props) == null ? void 0 : f.sidebarWidth) || "260px", F = ((y = t == null ? void 0 : t.props) == null ? void 0 : y.sidebarBg) || "#1e293b", U = ((v = t == null ? void 0 : t.props) == null ? void 0 : v.sidebarText) || "#94a3b8", Q = ((R = t == null ? void 0 : t.props) == null ? void 0 : R.sidebarActiveBg) || "#334155", ee = ((L = t == null ? void 0 : t.props) == null ? void 0 : L.sidebarActiveText) || "#ffffff", Y = ((N = t == null ? void 0 : t.props) == null ? void 0 : N.accentColor) || "#6366f1", be = ((W = t == null ? void 0 : t.props) == null ? void 0 : W.headerBg) || "#ffffff", K = ((_e = t == null ? void 0 : t.props) == null ? void 0 : _e.headerText) || "#1e293b", te = ((Ze = t == null ? void 0 : t.props) == null ? void 0 : Ze.headerBorder) || "#e2e8f0", xe = ((Qe = t == null ? void 0 : t.props) == null ? void 0 : Qe.mainBg) || "#f8fafc", ze = ((kt = t == null ? void 0 : t.props) == null ? void 0 : kt.mainPadding) || "24px", pt = ((At = t == null ? void 0 : t.props) == null ? void 0 : At.headerHeight) || "60px", Ne = ((Ot = t == null ? void 0 : t.props) == null ? void 0 : Ot.collapsedWidth) || "64px", ae = ((Rt = t == null ? void 0 : t.props) == null ? void 0 : Rt.showCollapseBtn) !== !1, X = ((Mt = t == null ? void 0 : t.props) == null ? void 0 : Mt.sidenavType) || "side", J = ((Lt = t == null ? void 0 : t.props) == null ? void 0 : Lt.opened) !== !1, Ie = ((zt = t == null ? void 0 : t.props) == null ? void 0 : zt.hasBackdrop) !== !1, Z = ((Nt = t == null ? void 0 : t.props) == null ? void 0 : Nt.collapseBtnPosition) || "sidebar-bottom", re = ((It = t == null ? void 0 : t.props) == null ? void 0 : It.collapseBtnIcon) || "chevron", Be = ((Bt = t == null ? void 0 : t.props) == null ? void 0 : Bt.footerActionType) || "buttons", ne = ((Ht = t == null ? void 0 : t.props) == null ? void 0 : Ht.fixedHeader) !== !1, we = ((jt = t == null ? void 0 : t.props) == null ? void 0 : jt.fixedFooter) !== !1, He = et(o), je = or(l), S = ar(s), G = X === "over" ? !J : k, De = G ? X === "over" ? "0px" : Ne : M, H = A || u, ht = r !== "hidden", se = [
      { id: "outlet", label: "Page Content", dropzone: !0, accepts: ["page-root", "zero-section"] },
      { id: "main", label: "Main Content", dropzone: !0, accepts: ["zero-section"] }
    ];
    e === "slot" && se.push({ id: "header", label: "Header Drop Zone", dropzone: !0, accepts: ["zero-section"] }), r === "slot" ? se.push({ id: "sidebar", label: "Sidebar Nav Drop Zone", dropzone: !0, accepts: ["zero-section"] }) : r === "config" && se.push({ id: "sidebar-extra", label: "Sidebar Extra", dropzone: !0, accepts: ["zero-section"] }), i === "slot" && se.push({ id: "footer", label: "Sidebar Footer Drop Zone", dropzone: !0, accepts: ["zero-section"] });
    let $e = !1;
    const ct = He.map((q, fr) => {
      const Dt = q.bottom === !0 && !$e;
      Dt && ($e = !0);
      const Ut = Zr(q, fr, I, U, Q, ee, Y, G);
      return Dt ? `<div style="flex: 1; min-height: 20px;"></div>${Ut}` : Ut;
    }).join(""), V = Z === "header-left" && ae ? Se("header-left", re, k, X, J, K) : "", Ue = Z === "header-right" && ae ? Se("header-right", re, k, X, J, K) : "", le = e === "hidden" ? "" : `
      <div style="
        display:flex; align-items:center; gap:12px;
        height:${pt}; padding:0 20px;
        background:${be}; border-bottom:1px solid ${te};
        flex-shrink:0; box-sizing:border-box; z-index:10;
        width:100%;
      ">
        ${V}
        <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:0.95rem; color:${K}; white-space:nowrap; flex-shrink:0;">
          ${(() => {
      const q = P || T;
      return q.startsWith("<") ? q : q.startsWith("http") || q.startsWith("/") || q.includes(".") ? `<img src="${q}" style="width: 24px; height: 24px; object-fit: contain;" />` : `<span style="font-size:1.3rem;">${q}</span>`;
    })()}
          ${H}
        </div>
        ${e === "config" ? Qr(je, Y, K) : `<div style="flex:1; min-width:0;">${tt("header", "Drop Header Sections", "40px", Y)}</div>`}
        ${Ue}
      </div>
    `, We = r === "slot" ? tt("sidebar", "Drop Sidebar Sections", "200px", Y) : `
        <nav style="display:flex; flex-direction:column; flex:1; padding:10px 8px; overflow-y:auto;">
          ${ct}
        </nav>
        <div style="padding:8px; border-top:1px solid rgba(255,255,255,0.07); flex-shrink:0;">
          ${tt("sidebar-extra", "Sidebar Extra", "40px", Y)}
        </div>
      `, ut = i === "hidden" ? "" : i === "slot" ? `<div style="padding:8px; border-top:1px solid rgba(255,255,255,0.07); flex-shrink:0;">
             ${tt("footer", "Drop Footer Sections", "50px", Y)}
           </div>` : ei(S, G, Y, Be, U), Te = Z === "sidebar-top" && ae ? Se("sidebar-top", re, k, X, J, "#fff") : "", Fe = Z === "sidebar-bottom" && ae ? Se("sidebar-bottom", re, k, X, J, U) : "", Ve = we ? "" : "overflow-y: auto; scrollbar-width: thin;", Ye = we ? "" : "flex: none; overflow-y: visible;", Xe = ht ? `
      <div style="
        width:${De}; background:${F};
        display:flex; flex-direction:column; flex-shrink:0;
        overflow:hidden; transition:width 0.25s, transform 0.25s;
        border-right:${De === "0px" ? "none" : "1px solid rgba(0,0,0,0.08)"};
        ${X === "over" ? `position:absolute; left:0; top:0; bottom:0; z-index:30; height:100%; box-shadow:4px 0 12px rgba(0,0,0,0.15); transform:${J ? "none" : "translateX(-100%)"};` : ""}
        ${Ve}
      ">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 18px 16px; border-bottom: 1px solid rgba(255,255,255,0.07); flex-shrink: 0;">
          <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
            ${T.startsWith("<") ? T : T.startsWith("http") || T.startsWith("/") || T.includes(".") ? `<img src="${T}" style="width: 24px; height: 24px; object-fit: contain;" />` : `<span style="font-size:1.4rem; flex-shrink:0; color:var(--snl-brand-text-color, #fff);">${T}</span>`}
            ${G ? "" : `
              <div style="display: flex; flex-direction: column; min-width: 0;">
                <span style="font-weight:700; font-size:0.9rem; color:var(--snl-brand-text-color, #fff); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${u}</span>
                ${h ? `<span style="font-size: 0.7rem; color:var(--snl-footer-role-color, #94a3b8); opacity: 0.8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${h}</span>` : ""}
              </div>
            `}
          </div>
          ${Te}
        </div>
        <div style="display:flex; flex-direction:column; flex:1; overflow:hidden; ${Ye}">
          ${We}
        </div>
        ${ut}
        ${Fe}
      </div>
    ` : "", Ge = X === "over" && J && Ie ? `
      <div style="position:absolute; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.4); backdrop-filter:blur(2px); z-index:25; pointer-events:none;"></div>
    ` : "", Ce = Z === "floating" && ae ? Se("floating", re, k, X, J, U) : "", ft = ne ? le : "", bt = ne ? "" : le, yt = ne ? `padding: ${ze};` : "", de = `
      <div style="
        display:flex; flex-direction:column; width:100%; height:600px;
        overflow:hidden; border:1px solid ${te}; border-radius:12px;
        font-family:system-ui,sans-serif;
        --snl-accent: ${Y};
        --snl-sidebar-width: ${M};
        --snl-collapsed-w: ${Ne};
        --snl-brand-text-color: ${ee};
        --snl-separator-color: ${`${U}15`};
        --snl-footer-name-color: ${ee};
        --snl-footer-role-color: ${U};
        --snl-footer-btn-color: ${U};
        --snl-hover-bg: ${U === "#94a3b8" ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.04)"};
      ">
        ${ft}
        <div style="display:flex; flex:1; overflow:hidden; position:relative;">
          ${Ge}
          ${Xe}
          ${Ce}
          <div style="flex:1; overflow-y: auto; background:${xe}; display:flex; flex-direction:column; min-width:0;">
            ${bt}
            ${ne ? `
              <div style="flex:1; ${yt} box-sizing:border-box;">
                <zero-studio-slot name="outlet"></zero-studio-slot>
                <zero-studio-slot name="main"></zero-studio-slot>
              </div>
            ` : `
              <div style="flex:1; padding:${ze}; box-sizing:border-box;">
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
      slots: se,
      templateHtml: de,
      badges: ["Sidebar Layout"],
      emptyText: "Drop sections into main, or switch a region to 'slot' mode"
    };
  }
  // ─── Runtime Render ────────────────────────────────────────────────────────
  render() {
    var I;
    const t = et(this.navItems), e = or(this.headerConfig), r = ar(this.sidebarFooterConfig), i = this.sidenavMode !== "hidden", o = this.headerMode === "hidden" ? _ : m`
      <header class="snl-header"
        style="
          height:${this.headerHeight}; background:var(--uiv-surface-color, ${this.headerBg});
          color:var(--uiv-text-color, ${this.headerText});
          border-bottom:1px solid var(--uiv-border-color, ${this.headerBorder});
        ">

        <button class="snl-header-toggle-mobile" @click=${(k) => {
      k.stopPropagation(), this.toggle();
    }} title="Toggle sidebar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>

        ${this.collapseBtnPosition === "header-left" && this.showCollapseBtn ? this.renderToggleButton("header-left") : _}

        <div class="snl-header-brand" style="color:${this.headerText};">
          ${(() => {
      const k = this.headerLogo || this.appLogo;
      return k && k.startsWith("<") ? m`${ir(k)}` : k && (k.startsWith("http") || k.startsWith("/") || k.includes(".")) ? m`<img src="${k}" style="width: 24px; height: 24px; object-fit: contain;" />` : m`<span class="snl-brand-logo">${k}</span>`;
    })()}
          <span>${this.headerTitle || this.appName}</span>
        </div>

        ${this.headerMode === "config" ? m`

          ${e.showBreadcrumb && ((I = e.breadcrumbs) != null && I.length) ? m`
            <nav class="snl-header-breadcrumb">
              ${e.breadcrumbs.map((k, M) => m`
                ${M > 0 ? m`<span style="opacity:0.3; margin:0 4px;">›</span>` : _}
                <span style="${M === e.breadcrumbs.length - 1 ? "font-weight:600;" : "opacity:0.6;"}">${k}</span>
              `)}
            </nav>
          ` : _}

          ${e.showSearch ? m`
            <div class="snl-header-search" style="background:rgba(0,0,0,0.04);">
              <span style="opacity:0.4; font-size:0.85rem;">🔍</span>
              <input
                class="snl-header-search-input"
                type="search"
                placeholder=${e.searchPlaceholder ?? "Search…"}
                @input=${(k) => this.dispatchEvent(new CustomEvent("search", {
      detail: { query: k.target.value },
      bubbles: !0,
      composed: !0
    }))}
                @keydown=${(k) => {
      k.key === "Enter" && this.dispatchEvent(new CustomEvent("search", {
        detail: { query: k.target.value, submit: !0 },
        bubbles: !0,
        composed: !0
      }));
    }}
              />
            </div>
          ` : _}

          <div class="snl-header-spacer"></div>

          ${e.showNotificationBell ? m`
            <div class="snl-header-bell">
              <span>🔔</span>
              ${(e.notificationCount ?? 0) > 0 ? m`
                <span class="snl-bell-count" style="background:${this.accentColor};">
                  ${e.notificationCount}
                </span>
              ` : _}
            </div>
          ` : _}

          ${e.showUserAvatar ? m`
            <div class="snl-header-user">
              ${e.userAvatarUrl ? m`
                <img class="snl-avatar snl-avatar-img" src=${e.userAvatarUrl} />
              ` : m`
                <div class="snl-avatar snl-avatar-init" style="background:${this.accentColor};">
                  ${st(e.userName)}
                </div>
              `}
              <div class="snl-user-info" style="display:flex; flex-direction:column; line-height:1.25;">
                <span style="font-size:0.8rem; font-weight:600; color:${this.headerText};">${e.userName ?? ""}</span>
                ${e.userRole ? m`<span style="font-size:0.7rem; opacity:0.5;">${e.userRole}</span>` : _}
              </div>
              <span style="opacity:0.3; font-size:0.75rem;">▾</span>
            </div>
          ` : _}

        ` : m`
          <div class="snl-header-slot-zone">
            <slot name="header"></slot>
          </div>
        `}

        ${this.showThemeToggle ? m`
          <button class="snl-header-btn snl-theme-toggle"
            style="color:${this.headerText}; margin-right:0;"
            @click=${(k) => {
      k.stopPropagation(), this.toggleTheme();
    }}
            title=${this.themeMode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            aria-label="Toggle theme">
            ${this.themeMode === "dark" ? m`
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
            ` : m`
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            `}
          </button>
        ` : _}

        ${this.collapseBtnPosition === "header-right" && this.showCollapseBtn ? this.renderToggleButton("header-right") : _}
      </header>
    `, l = this.fixedFooter ? "" : "overflow-y: auto; scrollbar-width: thin;", s = this.fixedFooter ? "" : "flex: none; overflow-y: visible;", u = i ? m`
      <aside class="snl-sidebar"
        style="width:${this.sidebarWidth}; background:var(--uiv-surface-color, ${this.sidebarBg});
          --snl-collapsed-w:${this.collapsedWidth};
          ${l}">

        <div class="snl-sidebar-brand" style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
          <slot name="brand">
            <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
              ${this.appLogo && this.appLogo.startsWith("<") ? m`${ir(this.appLogo)}` : this.appLogo && (this.appLogo.startsWith("http") || this.appLogo.startsWith("/") || this.appLogo.includes(".")) ? m`<img src="${this.appLogo}" style="width: 24px; height: 24px; object-fit: contain;" />` : m`<span class="snl-brand-logo">${this.appLogo}</span>`}
              <div style="display: flex; flex-direction: column; min-width: 0;">
                <span class="snl-brand-text">${this.appName}</span>
                ${this.appSubtitle ? m`
                  <span class="snl-brand-subtitle" style="font-size: 0.7rem; color: var(--snl-footer-role-color, #94a3b8); opacity: 0.8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    ${this.appSubtitle}
                  </span>
                ` : _}
              </div>
            </div>
          </slot>
          ${this.collapseBtnPosition === "sidebar-top" && this.showCollapseBtn ? this.renderToggleButton("sidebar-top") : _}
        </div>

        <!-- Nav area: config mode or slot mode -->
        ${this.sidenavMode === "slot" ? m`
          <div class="snl-sidebar-slot" style="${s}">
            <slot name="sidebar"></slot>
          </div>
        ` : m`
          <nav class="snl-nav" style="${s}">
            ${(() => {
      let k = !1;
      return t.map((M, F) => {
        var K;
        if (M.separator) return m`<div class="nav-separator"></div>`;
        if (M.section) return m`
                  <div class="snl-nav-section" style="color:${this.sidebarText};">${M.section}</div>
                `;
        const U = this.activeItem === F, Q = !!((K = M.children) != null && K.length), ee = this._expandedItems.has(F), be = M.bottom === !0 && !k;
        return be && (k = !0), m`
                  ${be ? m`<div style="flex: 1; min-height: 20px;"></div>` : _}
                  <button
                    class="nav-item ${U ? "is-active" : ""} ${M.disabled ? "is-disabled" : ""}"
                    style="
                      color:${U ? this.sidebarActiveText : this.sidebarText};
                      background:${U ? this.sidebarActiveBg : "transparent"};
                    "
                    @click=${() => Q ? this.handleChildToggle(F) : this.handleNavClick(F, M)}
                  >
                    <span class="nav-icon">${M.icon ?? "•"}</span>
                    <span class="nav-label">${M.label ?? ""}</span>
                    ${M.badge ? m`
                      <span class="snl-nav-badge" style="background:${M.badgeColor || this.accentColor};">
                        ${M.badge}
                      </span>` : _}
                    ${Q ? m`
                      <span class="nav-child-indicator">${ee ? "∨" : "›"}</span>` : _}
                  </button>
                  ${Q && ee ? m`
                    <div class="snl-sub-menu open">
                      ${M.children.map((te, xe) => m`
                        <button
                          class="nav-item ${M.disabled ? "is-disabled" : ""}"
                          style="color:${this.sidebarText}; background:transparent;"
                          @click=${() => this.handleNavClick(xe, te)}
                        >
                          <span class="nav-icon">${te.icon ?? "•"}</span>
                          <span class="nav-label">${te.label ?? ""}</span>
                        </button>
                      `)}
                    </div>
                  ` : _}
                `;
      });
    })()}
          </nav>

          <div class="snl-sidebar-extra">
            <slot name="sidebar-extra"></slot>
          </div>
        `}

        <!-- Footer area: config / slot / hidden -->
        ${this.footerMode === "hidden" ? _ : this.footerMode === "slot" ? m`
            <div class="snl-footer-slot">
              <slot name="footer"></slot>
            </div>
          ` : r.show ? m`
            <div class="snl-sidebar-footer">
              ${r.avatarUrl ? m`
                <img class="snl-footer-avatar" src=${r.avatarUrl} />
              ` : m`
                <div class="snl-footer-initials">${st(r.userName)}</div>
              `}
              <div class="snl-footer-info">
                <div class="snl-footer-name">${r.userName ?? ""}</div>
                ${r.userRole ? m`<div class="snl-footer-role">${r.userRole}</div>` : _}
              </div>
              <div class="snl-footer-actions">
                ${this.footerActionType === "buttons" && r.showSettings ? m`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("settingsClick", { bubbles: !0, composed: !0 }))}
                    title="Settings">⚙️</button>
                ` : _}
                ${this.footerActionType === "buttons" && r.showLogout ? m`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("logout", { bubbles: !0, composed: !0 }))}
                    title="Logout">↪</button>
                ` : _}
                ${this.footerActionType === "dropdown" ? m`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("profileClick", { bubbles: !0, composed: !0 }))}
                    title="Profile Actions">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                ` : _}
              </div>
            </div>
          ` : _}

        ${this.collapseBtnPosition === "sidebar-bottom" && this.showCollapseBtn ? this.renderToggleButton("sidebar-bottom") : _}
      </aside>
    ` : _, h = this.fixedHeader ? o : _, T = this.fixedHeader ? _ : o, A = this.fixedHeader ? `padding: ${this.mainPadding};` : "";
    return m`
      ${this.renderResponsiveStyles()}
      <div>
        <div class="snl-shell" style="
          --snl-accent: var(--uiv-primary-color, ${this.accentColor});
          --snl-sidebar-width: ${this.sidebarWidth};
          --snl-collapsed-w: ${this.collapsedWidth};
          --snl-brand-text-color: var(--uiv-text-color, ${this.sidebarActiveText || "currentColor"});
          --snl-separator-color: ${this.sidebarText ? `${this.sidebarText}15` : "rgba(255,255,255,0.08)"};
          --snl-footer-name-color: var(--uiv-text-color, ${this.sidebarActiveText || "currentColor"});
          --snl-footer-role-color: var(--uiv-text-muted, ${this.sidebarText || "#94a3b8"});
          --snl-footer-btn-color: var(--uiv-text-muted, ${this.sidebarText || "#94a3b8"});
          --snl-hover-bg: var(--uiv-hover-bg, ${this.sidebarText === "#94a3b8" ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.04)"});
          ${this.computeInternalStyles()}
        ">
          ${h}
          <div class="snl-body">
            ${this.opened && (this.sidenavType === "over" || typeof window < "u" && window.innerWidth <= 768) && this.hasBackdrop ? m`
              <div class="snl-backdrop" @click=${this.close}></div>
            ` : _}
            ${u}
            ${this.collapseBtnPosition === "floating" && this.showCollapseBtn ? this.renderToggleButton("floating") : _}
            <main class="snl-main" style="background:var(--uiv-bg-color, ${this.mainBg}); ${"overflow-y: auto;"} ${A} display: flex; flex-direction: column;">
              ${T}
              ${this.fixedHeader ? m`
                <slot name="outlet"></slot>
                <slot name="main"></slot>
                <slot></slot>
              ` : m`
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
  lr`
      :host {
        display: block;
        width: 100%;
        height: var(--zero-height, 100%);
        min-height: var(--zero-height, 100vh);
        --snl-accent: var(--uiv-primary-color, #6366f1);
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
        border-radius: 8px; padding: 7px 12px;
        background: rgba(0,0,0,0.04);
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
        border-right: 1px solid rgba(0,0,0,0.08);
      }

      :host([collapsed]) .snl-sidebar { width: var(--snl-collapsed-w, 64px) !important; }
      :host([collapsed]) .snl-brand-text,
      :host([collapsed]) .nav-label,
      :host([collapsed]) .snl-nav-badge,
      :host([collapsed]) .snl-nav-section,
      :host([collapsed]) .snl-footer-info,
      :host([collapsed]) .snl-footer-actions,
      :host([collapsed]) .snl-sidebar-extra { display: none; }

      .snl-sidebar-brand {
        display: flex; align-items: center; gap: 10px;
        padding: 18px 16px; flex-shrink: 0;
        border-bottom: 1px solid rgba(255,255,255,0.07);
      }

      .snl-brand-logo { font-size: 1.4rem; line-height: 1; flex-shrink: 0; }
      .snl-brand-text {
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--snl-brand-text-color, #fff);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
        padding: 10px 12px 4px; font-size: 0.68rem;
        font-weight: 700; letter-spacing: 0.08em;
        text-transform: uppercase; opacity: 0.4;
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

      /* ── Sub-menu ── */
      .snl-sub-menu { padding-left: 28px; overflow: hidden; }
      .snl-sub-menu.open { display: block; }
      .snl-sub-menu:not(.open) { display: none; }

      /* ── Sidebar Extra (slot drop zone) ── */
      .snl-sidebar-extra { padding: 8px; border-top: 1px solid rgba(255,255,255,0.07); flex-shrink: 0; }

      /* ── Sidebar Slot (full nav area as drop zone) ── */
      .snl-sidebar-slot {
        flex: 1; padding: 8px;
        display: flex; flex-direction: column;
      }

      /* ── Sidebar Footer (config) ── */
      .snl-sidebar-footer {
        display: flex; align-items: center; gap: 10px;
        padding: 12px 14px; flex-shrink: 0;
        border-top: 1px solid rgba(255,255,255,0.07);
      }

      .snl-footer-avatar {
        width: 34px; height: 34px; border-radius: 50%;
        object-fit: cover; flex-shrink: 0;
      }

      .snl-footer-initials {
        width: 34px; height: 34px; border-radius: 50%;
        background: rgba(255,255,255,0.15); color: #fff;
        display: flex; align-items: center; justify-content: center;
        font-size: 0.75rem; font-weight: 700; flex-shrink: 0;
      }

      .snl-footer-info { flex: 1; overflow: hidden; }
      .snl-footer-name {
        font-size: 0.82rem; font-weight: 600;
        color: var(--snl-footer-name-color, #fff);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-footer-role {
        font-size: 0.7rem;
        color: var(--snl-footer-role-color, #94a3b8);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-footer-actions { display: flex; gap: 4px; }
      .snl-footer-btn {
        cursor: pointer;
        color: var(--snl-footer-btn-color, #94a3b8);
        font-size: 0.9rem; padding: 4px; border-radius: 4px; border: none; background: transparent;
      }
      .snl-footer-btn:hover { background: rgba(255,255,255,0.07); }

      /* ── Sidebar Footer (slot) ── */
      .snl-footer-slot { padding: 8px; border-top: 1px solid rgba(255,255,255,0.07); flex-shrink: 0; }

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
      .snl-collapse-btn:hover { background: rgba(255,255,255,0.07); }

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
        border: 2px dashed var(--snl-accent, #6366f1);
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
  g({
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
  g({
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
  g({
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
  g({
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
  g({
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
  g({
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
  g({
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
  g({
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
  g({
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
  g({
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
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXTAREA,
    displayLabel: "Nav Items (JSON)",
    fieldMappings: "navItems",
    categoryLabel: "Navigation",
    placeholderText: ve,
    initialValue: ve
  })
], x.prototype, "navItems", 2);
$([
  w({ type: Number, reflect: !0, attribute: "active-item" }),
  g({
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
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXTAREA,
    displayLabel: "Header Config (JSON)",
    fieldMappings: "headerConfig",
    categoryLabel: "Header",
    placeholderText: at,
    initialValue: at
  })
], x.prototype, "headerConfig", 2);
$([
  w({ type: String, attribute: "sidebar-footer-config" }),
  g({
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
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "App / Brand Name",
    fieldMappings: "appName",
    categoryLabel: "Branding"
  })
], x.prototype, "appName", 2);
$([
  w({ type: String, attribute: "app-subtitle" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "App Subtitle",
    fieldMappings: "appSubtitle",
    categoryLabel: "Branding"
  })
], x.prototype, "appSubtitle", 2);
$([
  w({ type: String, attribute: "app-logo" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Logo Emoji / Character",
    fieldMappings: "appLogo",
    categoryLabel: "Branding"
  })
], x.prototype, "appLogo", 2);
$([
  w({ type: String, attribute: "header-title" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Header Title (overrides brand name in header bar)",
    fieldMappings: "headerTitle",
    categoryLabel: "Branding"
  })
], x.prototype, "headerTitle", 2);
$([
  w({ type: String, attribute: "header-logo" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Header Logo (overrides app logo in header bar)",
    fieldMappings: "headerLogo",
    categoryLabel: "Branding"
  })
], x.prototype, "headerLogo", 2);
$([
  w({ type: Boolean, reflect: !0 }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Sidebar Collapsed",
    fieldMappings: "collapsed",
    categoryLabel: "Layout"
  })
], x.prototype, "collapsed", 2);
$([
  w({ type: String, attribute: "sidebar-width" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Sidebar Width (e.g. 260px)",
    fieldMappings: "sidebarWidth",
    categoryLabel: "Layout"
  })
], x.prototype, "sidebarWidth", 2);
$([
  w({ type: String, attribute: "header-height" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Header Height (e.g. 60px)",
    fieldMappings: "headerHeight",
    categoryLabel: "Layout"
  })
], x.prototype, "headerHeight", 2);
$([
  w({ type: String, attribute: "collapsed-width" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Collapsed Sidebar Width (e.g. 64px)",
    fieldMappings: "collapsedWidth",
    categoryLabel: "Layout"
  })
], x.prototype, "collapsedWidth", 2);
$([
  w({ type: Boolean, attribute: "show-collapse-btn", reflect: !0 }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.CHECKBOX,
    displayLabel: "Show Collapse Button",
    fieldMappings: "showCollapseBtn",
    categoryLabel: "Layout"
  })
], x.prototype, "showCollapseBtn", 2);
$([
  w({ type: Boolean, attribute: "show-theme-toggle", reflect: !0 }),
  g({
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
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Sidebar Background",
    fieldMappings: "sidebarBg",
    categoryLabel: "Appearance"
  })
], x.prototype, "sidebarBg", 2);
$([
  w({ type: String, attribute: "sidebar-text" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Sidebar Text Color",
    fieldMappings: "sidebarText",
    categoryLabel: "Appearance"
  })
], x.prototype, "sidebarText", 2);
$([
  w({ type: String, attribute: "sidebar-active-bg" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Active Item Background",
    fieldMappings: "sidebarActiveBg",
    categoryLabel: "Appearance"
  })
], x.prototype, "sidebarActiveBg", 2);
$([
  w({ type: String, attribute: "sidebar-active-text" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Active Item Text Color",
    fieldMappings: "sidebarActiveText",
    categoryLabel: "Appearance"
  })
], x.prototype, "sidebarActiveText", 2);
$([
  w({ type: String, attribute: "accent-color" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Accent Color (badges, avatar bg, drop-zone ring)",
    fieldMappings: "accentColor",
    categoryLabel: "Appearance"
  })
], x.prototype, "accentColor", 2);
$([
  w({ type: String, attribute: "header-bg" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
], x.prototype, "headerBg", 2);
$([
  w({ type: String, attribute: "header-text" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Header Text Color",
    fieldMappings: "headerText",
    categoryLabel: "Appearance"
  })
], x.prototype, "headerText", 2);
$([
  w({ type: String, attribute: "header-border" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Header Border Color",
    fieldMappings: "headerBorder",
    categoryLabel: "Appearance"
  })
], x.prototype, "headerBorder", 2);
$([
  w({ type: String, attribute: "main-bg" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.COLOR_PICKER,
    displayLabel: "Main Area Background",
    fieldMappings: "mainBg",
    categoryLabel: "Appearance"
  })
], x.prototype, "mainBg", 2);
$([
  w({ type: String, attribute: "main-padding" }),
  g({
    attributeType: b.PROPERTY,
    uiComponentType: E.TEXT_INPUT,
    displayLabel: "Main Area Padding (e.g. 24px)",
    fieldMappings: "mainPadding",
    categoryLabel: "Appearance"
  })
], x.prototype, "mainPadding", 2);
$([
  w({ type: String, attribute: "footer-action-type" }),
  g({
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
  g({ attributeType: b.EVENT, displayLabel: "On Opened Change", eventTrigger: "openedchange", categoryLabel: "Triggers" })
], x.prototype, "onOpenedChange", 1);
$([
  g({ attributeType: b.EVENT, displayLabel: "On Nav Item Click", eventTrigger: "navchange", categoryLabel: "Triggers" })
], x.prototype, "onNavChange", 1);
$([
  g({ attributeType: b.EVENT, displayLabel: "On Sidebar Toggle", eventTrigger: "sidebarToggle", categoryLabel: "Triggers" })
], x.prototype, "onSidebarToggle", 1);
$([
  g({ attributeType: b.EVENT, displayLabel: "On Logout Click", eventTrigger: "logout", categoryLabel: "Triggers" })
], x.prototype, "onLogout", 1);
$([
  g({ attributeType: b.EVENT, displayLabel: "On Profile Click", eventTrigger: "profileClick", categoryLabel: "Triggers" })
], x.prototype, "onProfileClick", 1);
$([
  g({ attributeType: b.EVENT, displayLabel: "On Settings Click", eventTrigger: "settingsClick", categoryLabel: "Triggers" })
], x.prototype, "onSettingsClick", 1);
$([
  g({ attributeType: b.EVENT, displayLabel: "On Search", eventTrigger: "search", categoryLabel: "Triggers" })
], x.prototype, "onSearch", 1);
$([
  g({ attributeType: b.EVENT, displayLabel: "On Theme Change", eventTrigger: "themechange", categoryLabel: "Triggers" })
], x.prototype, "onThemeChange", 1);
$([
  g({ attributeType: b.ACTION, displayLabel: "Open Sidenav", categoryLabel: "Actions" })
], x.prototype, "open", 1);
$([
  g({ attributeType: b.ACTION, displayLabel: "Close Sidenav", categoryLabel: "Actions" })
], x.prototype, "close", 1);
$([
  g({ attributeType: b.ACTION, displayLabel: "Toggle Sidenav Opened", categoryLabel: "Actions" })
], x.prototype, "toggle", 1);
$([
  g({ attributeType: b.ACTION, displayLabel: "Toggle Sidebar Collapse", categoryLabel: "Actions" })
], x.prototype, "toggleSidebar", 1);
$([
  g({ attributeType: b.ACTION, displayLabel: "Expand Sidebar", categoryLabel: "Actions" })
], x.prototype, "expandSidebar", 1);
$([
  g({ attributeType: b.ACTION, displayLabel: "Collapse Sidebar", categoryLabel: "Actions" })
], x.prototype, "collapseSidebar", 1);
$([
  g({ attributeType: b.ACTION, displayLabel: "Navigate To Item (by index)", categoryLabel: "Actions" })
], x.prototype, "navigateTo", 1);
$([
  g({ attributeType: b.ACTION, displayLabel: "Toggle Theme (Dark/Light)", categoryLabel: "Actions" })
], x.prototype, "toggleTheme", 1);
x = $([
  mr({
    name: "zero-sidenav-layout",
    version: "1.1.0",
    title: "Sidebar Layout",
    elementSelector: "zero-sidenav-layout",
    group: "Layout",
    iconName: "sidenav-layout-icon.png",
    layoutKind: "panel",
    environment: ["page"]
  }),
  Ur("zero-sidenav-layout"),
  xr()
], x);
export {
  at as DEFAULT_HEADER_CONFIG_JSON,
  ve as DEFAULT_NAV_ITEMS_JSON,
  nt as DEFAULT_SIDEBAR_FOOTER_CONFIG_JSON,
  x as ZeroSidenavLayout
};
