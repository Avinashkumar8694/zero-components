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
    function o(c, w) {
      return function(A, P) {
        Object.defineProperty(c, A, { configurable: !0, writable: !0, value: P }), w && w(A, P);
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
    var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", s = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", u = typeof Object.create == "function", c = { __proto__: [] } instanceof Array, w = !u && !c, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: u ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : c ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
      },
      has: w ? function(a, n) {
        return i.call(a, n);
      } : function(a, n) {
        return n in a;
      },
      get: w ? function(a, n) {
        return i.call(a, n) ? a[n] : void 0;
      } : function(a, n) {
        return a[n];
      }
    }, P = Object.getPrototypeOf(Function), I = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ge(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Je(), M = typeof WeakMap == "function" ? WeakMap : Ze(), F = o ? Symbol.for("@reflect-metadata:registry") : void 0, U = bt(), Q = yt(U);
    function ee(a, n, d, p) {
      if (_(d)) {
        if (!je(a))
          throw new TypeError();
        if (!Ue(n))
          throw new TypeError();
        return X(a, n);
      } else {
        if (!je(a))
          throw new TypeError();
        if (!H(n))
          throw new TypeError();
        if (!H(p) && !_(p) && !G(p))
          throw new TypeError();
        return G(p) && (p = void 0), d = V(d), J(a, n, d, p);
      }
    }
    e("decorate", ee);
    function Y(a, n) {
      function d(p, $) {
        if (!H(p))
          throw new TypeError();
        if (!_($) && !ut($))
          throw new TypeError();
        ne(a, n, p, $);
      }
      return d;
    }
    e("metadata", Y);
    function be(a, n, d, p) {
      if (!H(d))
        throw new TypeError();
      return _(p) || (p = V(p)), ne(a, n, d, p);
    }
    e("defineMetadata", be);
    function q(a, n, d) {
      if (!H(n))
        throw new TypeError();
      return _(d) || (d = V(d)), Ne(a, n, d);
    }
    e("hasMetadata", q);
    function te(a, n, d) {
      if (!H(n))
        throw new TypeError();
      return _(d) || (d = V(d)), K(a, n, d);
    }
    e("hasOwnMetadata", te);
    function me(a, n, d) {
      if (!H(n))
        throw new TypeError();
      return _(d) || (d = V(d)), re(a, n, d);
    }
    e("getMetadata", me);
    function Le(a, n, d) {
      if (!H(n))
        throw new TypeError();
      return _(d) || (d = V(d)), Ie(a, n, d);
    }
    e("getOwnMetadata", Le);
    function pt(a, n) {
      if (!H(a))
        throw new TypeError();
      return _(n) || (n = V(n)), xe(a, n);
    }
    e("getMetadataKeys", pt);
    function ze(a, n) {
      if (!H(a))
        throw new TypeError();
      return _(n) || (n = V(n)), Be(a, n);
    }
    e("getOwnMetadataKeys", ze);
    function ae(a, n, d) {
      if (!H(n))
        throw new TypeError();
      if (_(d) || (d = V(d)), !H(n))
        throw new TypeError();
      _(d) || (d = V(d));
      var p = de(
        n,
        d,
        /*Create*/
        !1
      );
      return _(p) ? !1 : p.OrdinaryDeleteMetadata(a, n, d);
    }
    e("deleteMetadata", ae);
    function X(a, n) {
      for (var d = a.length - 1; d >= 0; --d) {
        var p = a[d], $ = p(n);
        if (!_($) && !G($)) {
          if (!Ue($))
            throw new TypeError();
          n = $;
        }
      }
      return n;
    }
    function J(a, n, d, p) {
      for (var $ = a.length - 1; $ >= 0; --$) {
        var D = a[$], B = D(n, d, p);
        if (!_(B) && !G(B)) {
          if (!H(B))
            throw new TypeError();
          p = B;
        }
      }
      return p;
    }
    function Ne(a, n, d) {
      var p = K(a, n, d);
      if (p)
        return !0;
      var $ = Te(n);
      return G($) ? !1 : Ne(a, $, d);
    }
    function K(a, n, d) {
      var p = de(
        n,
        d,
        /*Create*/
        !1
      );
      return _(p) ? !1 : we(p.OrdinaryHasOwnMetadata(a, n, d));
    }
    function re(a, n, d) {
      var p = K(a, n, d);
      if (p)
        return Ie(a, n, d);
      var $ = Te(n);
      if (!G($))
        return re(a, $, d);
    }
    function Ie(a, n, d) {
      var p = de(
        n,
        d,
        /*Create*/
        !1
      );
      if (!_(p))
        return p.OrdinaryGetOwnMetadata(a, n, d);
    }
    function ne(a, n, d, p) {
      var $ = de(
        d,
        p,
        /*Create*/
        !0
      );
      $.OrdinaryDefineOwnMetadata(a, n, d, p);
    }
    function xe(a, n) {
      var d = Be(a, n), p = Te(a);
      if (p === null)
        return d;
      var $ = xe(p, n);
      if ($.length <= 0)
        return d;
      if (d.length <= 0)
        return $;
      for (var D = new R(), B = [], O = 0, h = d; O < h.length; O++) {
        var f = h[O], b = D.has(f);
        b || (D.add(f), B.push(f));
      }
      for (var v = 0, k = $; v < k.length; v++) {
        var f = k[v], b = D.has(f);
        b || (D.add(f), B.push(f));
      }
      return B;
    }
    function Be(a, n) {
      var d = de(
        a,
        n,
        /*create*/
        !1
      );
      return d ? d.OrdinaryOwnMetadataKeys(a, n) : [];
    }
    function He(a) {
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
    function _(a) {
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
    function ct(a, n) {
      switch (He(a)) {
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
      var d = "string", p = We(a, l);
      if (p !== void 0) {
        var $ = p.call(a, d);
        if (H($))
          throw new TypeError();
        return $;
      }
      return se(a);
    }
    function se(a, n) {
      var d, p;
      {
        var $ = a.toString;
        if (le($)) {
          var p = $.call(a);
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
    function we(a) {
      return !!a;
    }
    function ht(a) {
      return "" + a;
    }
    function V(a) {
      var n = ct(a);
      return De(n) ? n : ht(n);
    }
    function je(a) {
      return Array.isArray ? Array.isArray(a) : a instanceof Object ? a instanceof Array : Object.prototype.toString.call(a) === "[object Array]";
    }
    function le(a) {
      return typeof a == "function";
    }
    function Ue(a) {
      return typeof a == "function";
    }
    function ut(a) {
      switch (He(a)) {
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
    function We(a, n) {
      var d = a[n];
      if (d != null) {
        if (!le(d))
          throw new TypeError();
        return d;
      }
    }
    function Fe(a) {
      var n = We(a, s);
      if (!le(n))
        throw new TypeError();
      var d = n.call(a);
      if (!H(d))
        throw new TypeError();
      return d;
    }
    function Ve(a) {
      return a.value;
    }
    function Ye(a) {
      var n = a.next();
      return n.done ? !1 : n;
    }
    function Xe(a) {
      var n = a.return;
      n && n.call(a);
    }
    function Te(a) {
      var n = Object.getPrototypeOf(a);
      if (typeof a != "function" || a === P || n !== P)
        return n;
      var d = a.prototype, p = d && Object.getPrototypeOf(d);
      if (p == null || p === Object.prototype)
        return n;
      var $ = p.constructor;
      return typeof $ != "function" || $ === a ? n : $;
    }
    function ft() {
      var a;
      !_(F) && typeof r.Reflect < "u" && !(F in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (a = Pt(r.Reflect));
      var n, d, p, $ = new M(), D = {
        registerProvider: B,
        getProvider: h,
        setProvider: b
      };
      return D;
      function B(v) {
        if (!Object.isExtensible(D))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case a === v:
            break;
          case _(n):
            n = v;
            break;
          case n === v:
            break;
          case _(d):
            d = v;
            break;
          case d === v:
            break;
          default:
            p === void 0 && (p = new R()), p.add(v);
            break;
        }
      }
      function O(v, k) {
        if (!_(n)) {
          if (n.isProviderFor(v, k))
            return n;
          if (!_(d)) {
            if (d.isProviderFor(v, k))
              return n;
            if (!_(p))
              for (var L = Fe(p); ; ) {
                var N = Ye(L);
                if (!N)
                  return;
                var W = Ve(N);
                if (W.isProviderFor(v, k))
                  return Xe(L), W;
              }
          }
        }
        if (!_(a) && a.isProviderFor(v, k))
          return a;
      }
      function h(v, k) {
        var L = $.get(v), N;
        return _(L) || (N = L.get(k)), _(N) && (N = O(v, k), _(N) || (_(L) && (L = new I(), $.set(v, L)), L.set(k, N))), N;
      }
      function f(v) {
        if (_(v))
          throw new TypeError();
        return n === v || d === v || !_(p) && p.has(v);
      }
      function b(v, k, L) {
        if (!f(L))
          throw new Error("Metadata provider not registered.");
        var N = h(v, k);
        if (N !== L) {
          if (!_(N))
            return !1;
          var W = $.get(v);
          _(W) && (W = new I(), $.set(v, W)), W.set(k, L);
        }
        return !0;
      }
    }
    function bt() {
      var a;
      return !_(F) && H(r.Reflect) && Object.isExtensible(r.Reflect) && (a = r.Reflect[F]), _(a) && (a = ft()), !_(F) && H(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: a
      }), a;
    }
    function yt(a) {
      var n = new M(), d = {
        isProviderFor: function(f, b) {
          var v = n.get(f);
          return _(v) ? !1 : v.has(b);
        },
        OrdinaryDefineOwnMetadata: B,
        OrdinaryHasOwnMetadata: $,
        OrdinaryGetOwnMetadata: D,
        OrdinaryOwnMetadataKeys: O,
        OrdinaryDeleteMetadata: h
      };
      return U.registerProvider(d), d;
      function p(f, b, v) {
        var k = n.get(f), L = !1;
        if (_(k)) {
          if (!v)
            return;
          k = new I(), n.set(f, k), L = !0;
        }
        var N = k.get(b);
        if (_(N)) {
          if (!v)
            return;
          if (N = new I(), k.set(b, N), !a.setProvider(f, b, d))
            throw k.delete(b), L && n.delete(f), new Error("Wrong provider for target.");
        }
        return N;
      }
      function $(f, b, v) {
        var k = p(
          b,
          v,
          /*Create*/
          !1
        );
        return _(k) ? !1 : we(k.has(f));
      }
      function D(f, b, v) {
        var k = p(
          b,
          v,
          /*Create*/
          !1
        );
        if (!_(k))
          return k.get(f);
      }
      function B(f, b, v, k) {
        var L = p(
          v,
          k,
          /*Create*/
          !0
        );
        L.set(f, b);
      }
      function O(f, b) {
        var v = [], k = p(
          f,
          b,
          /*Create*/
          !1
        );
        if (_(k))
          return v;
        for (var L = k.keys(), N = Fe(L), W = 0; ; ) {
          var Ce = Ye(N);
          if (!Ce)
            return v.length = W, v;
          var qe = Ve(Ce);
          try {
            v[W] = qe;
          } catch (Ke) {
            try {
              Xe(N);
            } finally {
              throw Ke;
            }
          }
          W++;
        }
      }
      function h(f, b, v) {
        var k = p(
          b,
          v,
          /*Create*/
          !1
        );
        if (_(k) || !k.delete(f))
          return !1;
        if (k.size === 0) {
          var L = n.get(b);
          _(L) || (L.delete(v), L.size === 0 && n.delete(L));
        }
        return !0;
      }
    }
    function Pt(a) {
      var n = a.defineMetadata, d = a.hasOwnMetadata, p = a.getOwnMetadata, $ = a.getOwnMetadataKeys, D = a.deleteMetadata, B = new M(), O = {
        isProviderFor: function(h, f) {
          var b = B.get(h);
          return !_(b) && b.has(f) ? !0 : $(h, f).length ? (_(b) && (b = new R(), B.set(h, b)), b.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: n,
        OrdinaryHasOwnMetadata: d,
        OrdinaryGetOwnMetadata: p,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: D
      };
      return O;
    }
    function de(a, n, d) {
      var p = U.getProvider(a, n);
      if (!_(p))
        return p;
      if (d) {
        if (U.setProvider(a, n, Q))
          return Q;
        throw new Error("Illegal state.");
      }
    }
    function Ge() {
      var a = {}, n = [], d = (
        /** @class */
        function() {
          function O(h, f, b) {
            this._index = 0, this._keys = h, this._values = f, this._selector = b;
          }
          return O.prototype["@@iterator"] = function() {
            return this;
          }, O.prototype[s] = function() {
            return this;
          }, O.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var f = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = n, this._values = n) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, O.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = n, this._values = n), h;
          }, O.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = n, this._values = n), { value: h, done: !0 };
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
          }), O.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, O.prototype.get = function(h) {
            var f = this._find(
              h,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, O.prototype.set = function(h, f) {
            var b = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[b] = f, this;
          }, O.prototype.delete = function(h) {
            var f = this._find(
              h,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var b = this._keys.length, v = f + 1; v < b; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, $e(h, this._cacheKey) && (this._cacheKey = a, this._cacheIndex = -2), !0;
            }
            return !1;
          }, O.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = a, this._cacheIndex = -2;
          }, O.prototype.keys = function() {
            return new d(this._keys, this._values, $);
          }, O.prototype.values = function() {
            return new d(this._keys, this._values, D);
          }, O.prototype.entries = function() {
            return new d(this._keys, this._values, B);
          }, O.prototype["@@iterator"] = function() {
            return this.entries();
          }, O.prototype[s] = function() {
            return this.entries();
          }, O.prototype._find = function(h, f) {
            if (!$e(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var b = 0; b < this._keys.length; b++)
                if ($e(this._keys[b], h)) {
                  this._cacheIndex = b;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, O;
        }()
      );
      return p;
      function $(O, h) {
        return O;
      }
      function D(O, h) {
        return h;
      }
      function B(O, h) {
        return [O, h];
      }
    }
    function Je() {
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
    function Ze() {
      var a = 16, n = A.create(), d = p();
      return (
        /** @class */
        function() {
          function h() {
            this._key = p();
          }
          return h.prototype.has = function(f) {
            var b = $(
              f,
              /*create*/
              !1
            );
            return b !== void 0 ? A.has(b, this._key) : !1;
          }, h.prototype.get = function(f) {
            var b = $(
              f,
              /*create*/
              !1
            );
            return b !== void 0 ? A.get(b, this._key) : void 0;
          }, h.prototype.set = function(f, b) {
            var v = $(
              f,
              /*create*/
              !0
            );
            return v[this._key] = b, this;
          }, h.prototype.delete = function(f) {
            var b = $(
              f,
              /*create*/
              !1
            );
            return b !== void 0 ? delete b[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = p();
          }, h;
        }()
      );
      function p() {
        var h;
        do
          h = "@@WeakMap@@" + O();
        while (A.has(n, h));
        return n[h] = !0, h;
      }
      function $(h, f) {
        if (!i.call(h, d)) {
          if (!f)
            return;
          Object.defineProperty(h, d, { value: A.create() });
        }
        return h[d];
      }
      function D(h, f) {
        for (var b = 0; b < f; ++b)
          h[b] = Math.random() * 255 | 0;
        return h;
      }
      function B(h) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : D(f, h), f;
        }
        return D(new Array(h), h);
      }
      function O() {
        var h = B(a);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var f = "", b = 0; b < a; ++b) {
          var v = h[b];
          (b === 4 || b === 6 || b === 8) && (f += "-"), v < 16 && (f += "0"), f += v.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function ye(a) {
      return a.__ = void 0, delete a.__, a;
    }
  });
})(Vt || (Vt = {}));
function vr(t) {
  return typeof t.name == "string" && typeof t.version == "string" && typeof t.title == "string" && typeof t.elementSelector == "string" && typeof t.group == "string" && typeof t.iconName == "string";
}
function gr(t) {
  return function(e) {
    if (vr(t)) {
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
  return gr(t);
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
        var w;
        const l = document.querySelector('style.global-style[type="text/css"]'), s = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), u = "adoptedStyleSheets" in Document.prototype, c = this.shadowRoot;
        if (!c) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && u) {
          const A = new CSSStyleSheet(), P = (w = l.sheet) == null ? void 0 : w.cssRules;
          P && (Array.from(P).forEach((I) => A.insertRule(I.cssText)), c.adoptedStyleSheets = [...c.adoptedStyleSheets, A]);
        } else if (l) {
          const A = l.cloneNode(!0);
          c.appendChild(A);
        }
        s.forEach((A) => {
          const P = A.cloneNode(!0);
          c.appendChild(P);
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
var S;
(function(t) {
  t.TEXT_INPUT = "text-input", t.PASSWORD_INPUT = "password-input", t.DROPDOWN = "dropdown", t.CHECKBOX = "checkbox", t.RADIO_BUTTON = "radio-button", t.RANGE_SLIDER = "range-slider", t.FILE_INPUT = "file-input", t.DATE_PICKER = "date-picker", t.COLOR_PICKER = "color-picker", t.NUMBER_INPUT = "number-input", t.TEXTAREA = "textarea", t.MULTI_SELECT = "multi-select", t.POPUP_DROPDOWN = "popup-dropdown", t.LAYOUT_PICKER = "layout-picker", t.RESPONSIVE_OVERRIDE = "responsive-override", t.IMAGE_PICKER = "image-picker", t.CHIPS = "chips";
})(S || (S = {}));
var y;
(function(t) {
  t.PROPERTY = "property", t.EVENT = "event", t.ACTION = "action";
})(y || (y = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt = globalThis, Ct = tt.ShadowRoot && (tt.ShadyCSS === void 0 || tt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, _t = Symbol(), Yt = /* @__PURE__ */ new WeakMap();
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
    const i = document.createElement("style"), o = tt.litNonce;
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
const { is: _r, defineProperty: Er, getOwnPropertyDescriptor: Sr, getOwnPropertyNames: Pr, getOwnPropertySymbols: Ar, getPrototypeOf: Or } = Object, oe = globalThis, Gt = oe.trustedTypes, kr = Gt ? Gt.emptyScript : "", vt = oe.reactiveElementPolyfillSupport, Se = (t, e) => t, rt = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? kr : null;
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
} }, Et = (t, e) => !_r(t, e), Jt = { attribute: !0, type: String, converter: rt, reflect: !1, useDefault: !1, hasChanged: Et };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), oe.litPropertyMetadata ?? (oe.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let ve = class extends HTMLElement {
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
    if (this.hasOwnProperty(Se("elementProperties"))) return;
    const e = Or(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Se("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Se("properties"))) {
      const r = this.properties, i = [...Pr(r), ...Ar(r)];
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
      const s = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : rt).toAttribute(r, i.type);
      this._$Em = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var l, s;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const u = i.getPropertyOptions(o), c = typeof u.converter == "function" ? { fromAttribute: u.converter } : ((l = u.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? u.converter : rt;
      this._$Em = o;
      const w = c.fromAttribute(r, u.type);
      this[o] = w ?? ((s = this._$Ej) == null ? void 0 : s.get(o)) ?? w, this._$Em = null;
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
        const { wrapped: u } = s, c = this[l];
        u !== !0 || this._$AL.has(l) || c === void 0 || this.C(l, void 0, s, c);
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
ve.elementStyles = [], ve.shadowRootOptions = { mode: "open" }, ve[Se("elementProperties")] = /* @__PURE__ */ new Map(), ve[Se("finalized")] = /* @__PURE__ */ new Map(), vt == null || vt({ ReactiveElement: ve }), (oe.reactiveElementVersions ?? (oe.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pe = globalThis, Zt = (t) => t, it = Pe.trustedTypes, qt = it ? it.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, dr = "$lit$", ie = `lit$${Math.random().toFixed(9).slice(2)}$`, pr = "?" + ie, Rr = `<${pr}>`, ue = document, Oe = () => ue.createComment(""), ke = (t) => t === null || typeof t != "object" && typeof t != "function", St = Array.isArray, Mr = (t) => St(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", gt = `[ 	
\f\r]`, _e = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Kt = /-->/g, Qt = />/g, pe = RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), er = /'/g, tr = /"/g, cr = /^(?:script|style|textarea|title)$/i, Lr = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), m = Lr(1), fe = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), rr = /* @__PURE__ */ new WeakMap(), ce = ue.createTreeWalker(ue, 129);
function hr(t, e) {
  if (!St(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return qt !== void 0 ? qt.createHTML(e) : e;
}
const zr = (t, e) => {
  const r = t.length - 1, i = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", s = _e;
  for (let u = 0; u < r; u++) {
    const c = t[u];
    let w, A, P = -1, I = 0;
    for (; I < c.length && (s.lastIndex = I, A = s.exec(c), A !== null); ) I = s.lastIndex, s === _e ? A[1] === "!--" ? s = Kt : A[1] !== void 0 ? s = Qt : A[2] !== void 0 ? (cr.test(A[2]) && (o = RegExp("</" + A[2], "g")), s = pe) : A[3] !== void 0 && (s = pe) : s === pe ? A[0] === ">" ? (s = o ?? _e, P = -1) : A[1] === void 0 ? P = -2 : (P = s.lastIndex - A[2].length, w = A[1], s = A[3] === void 0 ? pe : A[3] === '"' ? tr : er) : s === tr || s === er ? s = pe : s === Kt || s === Qt ? s = _e : (s = pe, o = void 0);
    const R = s === pe && t[u + 1].startsWith("/>") ? " " : "";
    l += s === _e ? c + Rr : P >= 0 ? (i.push(w), c.slice(0, P) + dr + c.slice(P) + ie + R) : c + ie + (P === -2 ? u : R);
  }
  return [hr(t, l + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class Re {
  constructor({ strings: e, _$litType$: r }, i) {
    let o;
    this.parts = [];
    let l = 0, s = 0;
    const u = e.length - 1, c = this.parts, [w, A] = zr(e, r);
    if (this.el = Re.createElement(w, i), ce.currentNode = this.el.content, r === 2 || r === 3) {
      const P = this.el.content.firstChild;
      P.replaceWith(...P.childNodes);
    }
    for (; (o = ce.nextNode()) !== null && c.length < u; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const P of o.getAttributeNames()) if (P.endsWith(dr)) {
          const I = A[s++], R = o.getAttribute(P).split(ie), M = /([.?@])?(.*)/.exec(I);
          c.push({ type: 1, index: l, name: M[2], strings: R, ctor: M[1] === "." ? Ir : M[1] === "?" ? Br : M[1] === "@" ? Hr : dt }), o.removeAttribute(P);
        } else P.startsWith(ie) && (c.push({ type: 6, index: l }), o.removeAttribute(P));
        if (cr.test(o.tagName)) {
          const P = o.textContent.split(ie), I = P.length - 1;
          if (I > 0) {
            o.textContent = it ? it.emptyScript : "";
            for (let R = 0; R < I; R++) o.append(P[R], Oe()), ce.nextNode(), c.push({ type: 2, index: ++l });
            o.append(P[I], Oe());
          }
        }
      } else if (o.nodeType === 8) if (o.data === pr) c.push({ type: 2, index: l });
      else {
        let P = -1;
        for (; (P = o.data.indexOf(ie, P + 1)) !== -1; ) c.push({ type: 7, index: l }), P += ie.length - 1;
      }
      l++;
    }
  }
  static createElement(e, r) {
    const i = ue.createElement("template");
    return i.innerHTML = e, i;
  }
}
function ge(t, e, r = t, i) {
  var s, u;
  if (e === fe) return e;
  let o = i !== void 0 ? (s = r._$Co) == null ? void 0 : s[i] : r._$Cl;
  const l = ke(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((u = o == null ? void 0 : o._$AO) == null || u.call(o, !1), l === void 0 ? o = void 0 : (o = new l(t), o._$AT(t, r, i)), i !== void 0 ? (r._$Co ?? (r._$Co = []))[i] = o : r._$Cl = o), o !== void 0 && (e = ge(t, o._$AS(t, e.values), o, i)), e;
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
    ce.currentNode = o;
    let l = ce.nextNode(), s = 0, u = 0, c = i[0];
    for (; c !== void 0; ) {
      if (s === c.index) {
        let w;
        c.type === 2 ? w = new Me(l, l.nextSibling, this, e) : c.type === 1 ? w = new c.ctor(l, c.name, c.strings, this, e) : c.type === 6 && (w = new Dr(l, this, e)), this._$AV.push(w), c = i[++u];
      }
      s !== (c == null ? void 0 : c.index) && (l = ce.nextNode(), s++);
    }
    return ce.currentNode = ue, o;
  }
  p(e) {
    let r = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, r), r += i.strings.length - 2) : i._$AI(e[r])), r++;
  }
}
class Me {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, i, o) {
    this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = ge(this, e, r), ke(e) ? e === E || e == null || e === "" ? (this._$AH !== E && this._$AR(), this._$AH = E) : e !== this._$AH && e !== fe && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Mr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== E && ke(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ue.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Re.createElement(hr(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(r);
    else {
      const s = new Nr(o, this), u = s.u(this.options);
      s.p(r), this.T(u), this._$AH = s;
    }
  }
  _$AC(e) {
    let r = rr.get(e.strings);
    return r === void 0 && rr.set(e.strings, r = new Re(e)), r;
  }
  k(e) {
    St(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let i, o = 0;
    for (const l of e) o === r.length ? r.push(i = new Me(this.O(Oe()), this.O(Oe()), this, this.options)) : i = r[o], i._$AI(l), o++;
    o < r.length && (this._$AR(i && i._$AB.nextSibling, o), r.length = o);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); e !== this._$AB; ) {
      const o = Zt(e).nextSibling;
      Zt(e).remove(), e = o;
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
    this.type = 1, this._$AH = E, this._$AN = void 0, this.element = e, this.name = r, this._$AM = o, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = E;
  }
  _$AI(e, r = this, i, o) {
    const l = this.strings;
    let s = !1;
    if (l === void 0) e = ge(this, e, r, 0), s = !ke(e) || e !== this._$AH && e !== fe, s && (this._$AH = e);
    else {
      const u = e;
      let c, w;
      for (e = l[0], c = 0; c < l.length - 1; c++) w = ge(this, u[i + c], r, c), w === fe && (w = this._$AH[c]), s || (s = !ke(w) || w !== this._$AH[c]), w === E ? e = E : e !== E && (e += (w ?? "") + l[c + 1]), this._$AH[c] = w;
    }
    s && !o && this.j(e);
  }
  j(e) {
    e === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Ir extends dt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === E ? void 0 : e;
  }
}
class Br extends dt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== E);
  }
}
class Hr extends dt {
  constructor(e, r, i, o, l) {
    super(e, r, i, o, l), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = ge(this, e, r, 0) ?? E) === fe) return;
    const i = this._$AH, o = e === E && i !== E || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== E && (i === E || o);
    o && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Dr {
  constructor(e, r, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ge(this, e);
  }
}
const mt = Pe.litHtmlPolyfillSupport;
mt == null || mt(Re, Me), (Pe.litHtmlVersions ?? (Pe.litHtmlVersions = [])).push("3.3.3");
const jr = (t, e, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const l = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = o = new Me(e.insertBefore(Oe(), l), l, void 0, r ?? {});
  }
  return o._$AI(t), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis;
let Ae = class extends ve {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = jr(r, this.renderRoot, this.renderOptions);
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
Ae._$litElement$ = !0, Ae.finalized = !0, (nr = he.litElementHydrateSupport) == null || nr.call(he, { LitElement: Ae });
const xt = he.litElementPolyfillSupport;
xt == null || xt({ LitElement: Ae });
(he.litElementVersions ?? (he.litElementVersions = [])).push("4.2.2");
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
const Wr = { attribute: !0, type: String, converter: rt, reflect: !1, hasChanged: Et }, Fr = (t = Wr, e, r) => {
  const { kind: i, metadata: o } = r;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), l.set(r.name, t), i === "accessor") {
    const { name: s } = r;
    return { set(u) {
      const c = e.get.call(this);
      e.set.call(this, u), this.requestUpdate(s, c, t, !0, u);
    }, init(u) {
      return u !== void 0 && this.C(s, void 0, t, u), u;
    } };
  }
  if (i === "setter") {
    const { name: s } = r;
    return function(u) {
      const c = this[s];
      e.call(this, u), this.requestUpdate(s, c, t, !0, u);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function x(t) {
  return (e, r) => typeof r == "object" ? Fr(t, e, r) : ((i, o, l) => {
    const s = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, i), s ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(t, e, r);
}
var Vr = Object.defineProperty, Yr = Object.getOwnPropertyDescriptor, j = (t, e, r, i) => {
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
      let c = "";
      Object.entries(u).forEach(([w, A]) => {
        const P = i[w];
        P && (c += `--${e}-${P}-override: ${A};
`);
      }), c && (o += `${s} {
  :host {
    ${c}  }
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
j([
  x({ type: Object, attribute: "responsive-props" })
], z.prototype, "responsiveProps", 2);
j([
  x({ type: String })
], z.prototype, "activeEdge", 2);
j([
  x({ type: Boolean, reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], z.prototype, "visible", 2);
j([
  x({ type: Number, reflect: !0, attribute: "z-index" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], z.prototype, "zIndex", 2);
j([
  x({ type: Number, reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], z.prototype, "opacity", 2);
j([
  x({ type: String, attribute: "custom-class" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], z.prototype, "customClass", 2);
j([
  x({ type: String, reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], z.prototype, "width", 2);
j([
  x({ type: String, reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], z.prototype, "height", 2);
j([
  x({ type: String, reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], z.prototype, "margin", 2);
j([
  x({ type: String, reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], z.prototype, "padding", 2);
j([
  g({
    attributeType: y.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], z.prototype, "onClick", 1);
j([
  x({ type: String, reflect: !0 })
], z.prototype, "direction", 2);
j([
  x({ type: String, reflect: !0 })
], z.prototype, "justify", 2);
j([
  x({ type: String, reflect: !0 })
], z.prototype, "align", 2);
j([
  x({ type: String, reflect: !0 })
], z.prototype, "gap", 2);
j([
  x({ type: Number, reflect: !0, attribute: "items-per-row" })
], z.prototype, "itemsPerRow", 2);
j([
  x({ type: String, attribute: "background-color", reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], z.prototype, "backgroundColor", 2);
j([
  x({ type: String, attribute: "border-radius", reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], z.prototype, "borderRadius", 2);
j([
  x({ type: String, reflect: !0, attribute: "elevation" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.DROPDOWN,
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
  g({
    attributeType: y.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], z.prototype, "show", 1);
j([
  g({
    attributeType: y.ACTION,
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
    if (super(e), this.it = E, e.type !== Xr.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === E || e == null) return this._t = void 0, this.it = e;
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
var Zr = Object.defineProperty, qr = Object.getOwnPropertyDescriptor, C = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? qr(e, r) : e, l = t.length - 1, s; l >= 0; l--)
    (s = t[l]) && (o = (i ? s(e, r, o) : s(o)) || o);
  return i && o && Zr(e, r, o), o;
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
}, ot = JSON.stringify(ur, null, 2), at = JSON.stringify($t, null, 2), nt = JSON.stringify(Tt, null, 2);
function Qe(t) {
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
function Ee(t, e, r, i, o, l) {
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
function Kr(t, e, r, i, o, l, s, u) {
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
  const c = r === e, w = !u && t.badge ? `
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
      font-size:0.875rem; font-weight:${c ? "600" : "500"};
      color:${c ? l : i};
      background:${c ? o : "transparent"};
      transition:all 0.15s; user-select:none; overflow:hidden;
    ">
      <span style="font-size:1.05rem; flex-shrink:0; width:20px; text-align:center;">
        ${t.icon ?? "•"}
      </span>
      ${u ? "" : `
        <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;">
          ${t.label ?? ""}
        </span>
        ${w}${A}
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
let T = class extends z {
  constructor() {
    super(...arguments), this.height = "100vh", this.activePath = "", this._handleUrlChange = () => {
      this._matchActiveItemWithUrl();
    }, this.headerMode = "config", this.sidenavMode = "config", this.footerMode = "config", this.fixedHeader = !0, this.fixedFooter = !0, this.sidenavType = "side", this.opened = !0, this.hasBackdrop = !0, this.collapseBtnPosition = "sidebar-bottom", this.collapseBtnIcon = "chevron", this.navItems = ot, this.activeItem = 0, this.headerConfig = at, this.sidebarFooterConfig = nt, this.appName = "My App", this.appSubtitle = "", this.appLogo = "🚀", this.headerTitle = "", this.headerLogo = "", this.collapsed = !1, this.sidebarWidth = "260px", this.headerHeight = "60px", this.collapsedWidth = "64px", this.showCollapseBtn = !0, this.sidebarBg = "#1e293b", this.sidebarText = "#94a3b8", this.sidebarActiveBg = "#334155", this.sidebarActiveText = "#ffffff", this.accentColor = "#6366f1", this.headerBg = "#ffffff", this.headerText = "#1e293b", this.headerBorder = "#e2e8f0", this.mainBg = "#f8fafc", this.mainPadding = "24px", this.footerActionType = "buttons", this._expandedItems = /* @__PURE__ */ new Set();
  }
  get overridePrefix() {
    return "zero-sidenav-layout";
  }
  static getTransformOnDrop() {
    return {
      componentName: "zero-sidenav-layout",
      props: {
        appName: "Zendenta",
        appSubtitle: "Cabut gigi tanpa sakit",
        appLogo: "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 16H11V14H13V16ZM13 12H11V7H13V12Z' fill='#0EA5E9'/></svg>",
        headerLogo: "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#0ea5e9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path><circle cx='12' cy='7' r='4'></circle></svg>",
        headerTitle: "Diane Cooper",
        sidebarBg: "#ffffff",
        sidebarText: "#64748b",
        sidebarActiveBg: "#f1f5f9",
        sidebarActiveText: "#0ea5e9",
        accentColor: "#0ea5e9",
        headerBg: "#ffffff",
        headerText: "#0f172a",
        headerBorder: "#e2e8f0",
        mainBg: "#f8fafc",
        footerActionType: "dropdown",
        sidebarFooterConfig: JSON.stringify({
          show: !0,
          userName: "Drg. Adam H.",
          userRole: "Dentist",
          avatarUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=120"
        }),
        headerConfig: JSON.stringify({
          showSearch: !0,
          searchPlaceholder: "Search",
          showNotificationBell: !0,
          notificationCount: 4,
          showUserAvatar: !1,
          showBreadcrumb: !1
        }),
        navItems: JSON.stringify([
          { label: "Overview", icon: "⏱️" },
          { label: "Calendar", icon: "📅" },
          { label: "Patient List", icon: "👤" },
          { label: "Messages", icon: "💬" },
          { label: "Payment Information", icon: "💳" },
          { label: "Settings", icon: "⚙️" },
          { label: "Help ?", icon: "❓", bottom: !0 }
        ]),
        activeItem: 2,
        fixedHeader: !1,
        fixedFooter: !0
      },
      children: [
        // 1. Breadcrumbs Header Section (2 Columns for breadcrumbs and actions)
        {
          componentName: "zero-section",
          slot: "main",
          props: {
            gap: "16px",
            padding: "0px 0px 16px 0px",
            justify: "space-between",
            align: "center"
          },
          children: [
            {
              componentName: "zero-column",
              props: { width: "60%", padding: "0px", direction: "row", align: "center", gap: "8px" },
              children: [
                {
                  componentName: "zero-text",
                  props: { text: "Patient List  >  Diane Cooper", size: 14, weight: 600, color: "#64748b" }
                }
              ]
            },
            {
              componentName: "zero-column",
              props: { width: "40%", padding: "0px", direction: "row", justify: "flex-end", align: "center", gap: "10px" },
              children: [
                {
                  componentName: "zero-button",
                  props: { label: "🖨️", variant: "secondary", size: "small" }
                },
                {
                  componentName: "zero-button",
                  props: { label: "✏️ Edit Patient", variant: "secondary", size: "small" }
                }
              ]
            }
          ]
        },
        // 2. Main content 3-column layout grid
        {
          componentName: "zero-section",
          slot: "main",
          props: {
            gap: "24px"
          },
          children: [
            // Column 1: Patient Profile Card (25%)
            {
              componentName: "zero-column",
              props: { width: "25%", padding: "0px" },
              children: [
                {
                  componentName: "zero-profile-card",
                  props: {
                    name: "Diane Cooper",
                    subtitle: "diane.cooper@example.com",
                    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
                    stat1Value: 15,
                    stat1Label: "Past",
                    stat2Value: 2,
                    stat2Label: "Upcoming",
                    buttonText: "Send Message"
                  }
                }
              ]
            },
            // Column 2: Information & Timeline Cards (50%)
            {
              componentName: "zero-column",
              props: { width: "50%", padding: "0px", gap: "24px" },
              children: [
                {
                  componentName: "zero-metadata-card",
                  props: {
                    item1Label: "Gender",
                    item1Value: "Female",
                    item2Label: "Birthday",
                    item2Value: "Feb 24th, 1997",
                    item3Label: "Phone Number",
                    item3Value: "(239) 555-0108",
                    item4Label: "Street Address",
                    item4Value: "Jl. Diponegoro No. 21",
                    item5Label: "City",
                    item5Value: "Cilacap",
                    item6Label: "ZIP Code",
                    item6Value: "655849",
                    item7Label: "Member Status",
                    item7Value: "Active Member",
                    item8Label: "Registered Date",
                    item8Value: "Feb 24th, 1997"
                  }
                },
                {
                  componentName: "zero-timeline-card",
                  props: { activeTab: 0 }
                }
              ]
            },
            // Column 3: Notes & Files Cards (25%)
            {
              componentName: "zero-column",
              props: { width: "25%", padding: "0px", gap: "24px" },
              children: [
                {
                  componentName: "zero-notes-card",
                  props: {
                    title: "Notes",
                    notesJson: JSON.stringify([
                      {
                        text: `- This patient is lorem ipsum dolor sit amet
- Lorem ipsum dolor sit amet
- has allergic history with Cataflam`,
                        author: "Drg. Mega Nanade",
                        date: "20 Nov '19",
                        active: !0
                      },
                      {
                        text: "Lorem ipsum dolor sit amet",
                        author: "Drg. Mega Nanade",
                        date: "20 Nov '19",
                        active: !1
                      }
                    ])
                  }
                },
                {
                  componentName: "zero-files-card",
                  props: { title: "Files / Documents" }
                }
              ]
            }
          ]
        }
      ]
    };
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
          const w = s.split("/").filter(Boolean);
          w.length > 1 && w[0].startsWith("project-") && (s = "/" + w.slice(1).join("/"));
        }
        const u = s.replace(/\/$/, ""), c = r.replace(/\/$/, "");
        return u === c || u === "/" + c || "/" + u === c;
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
    const c = (w) => {
      w.stopPropagation(), this.sidenavType === "over" ? this.toggle() : this.toggleSidebar();
    };
    return e ? m`
        <button class="snl-floating-toggle" @click=${c} title="Toggle sidebar">
          ${i}
        </button>
      ` : r ? m`
        <button class="snl-header-btn" style="color: ${this.headerText};" @click=${c} title="Toggle sidebar">
          ${i}
        </button>
      ` : m`
      <button class="snl-collapse-btn" style="color: ${this.sidebarText};" @click=${c} title="Toggle sidebar">
        ${i}
      </button>
    `;
  }
  // ─── getStudioTemplate ─────────────────────────────────────────────────────
  static getStudioTemplate(t) {
    var Ge, Je, Ze, ye, a, n, d, p, $, D, B, O, h, f, b, v, k, L, N, W, Ce, qe, Ke, At, Ot, kt, Rt, Mt, Lt, zt, Nt, It, Bt, Ht, Dt;
    const e = ((Ge = t == null ? void 0 : t.props) == null ? void 0 : Ge.headerMode) || "config", r = ((Je = t == null ? void 0 : t.props) == null ? void 0 : Je.sidenavMode) || "config", i = ((Ze = t == null ? void 0 : t.props) == null ? void 0 : Ze.footerMode) || "config", o = ((ye = t == null ? void 0 : t.props) == null ? void 0 : ye.navItems) || ot, l = ((a = t == null ? void 0 : t.props) == null ? void 0 : a.headerConfig) || at, s = ((n = t == null ? void 0 : t.props) == null ? void 0 : n.sidebarFooterConfig) || nt, u = ((d = t == null ? void 0 : t.props) == null ? void 0 : d.appName) || "My App", c = ((p = t == null ? void 0 : t.props) == null ? void 0 : p.appSubtitle) || "", w = (($ = t == null ? void 0 : t.props) == null ? void 0 : $.appLogo) || "🚀", A = ((D = t == null ? void 0 : t.props) == null ? void 0 : D.headerTitle) || "", P = ((B = t == null ? void 0 : t.props) == null ? void 0 : B.headerLogo) || "", I = Number(((O = t == null ? void 0 : t.props) == null ? void 0 : O.activeItem) ?? 0), R = !!((h = t == null ? void 0 : t.props) != null && h.collapsed), M = ((f = t == null ? void 0 : t.props) == null ? void 0 : f.sidebarWidth) || "260px", F = ((b = t == null ? void 0 : t.props) == null ? void 0 : b.sidebarBg) || "#1e293b", U = ((v = t == null ? void 0 : t.props) == null ? void 0 : v.sidebarText) || "#94a3b8", Q = ((k = t == null ? void 0 : t.props) == null ? void 0 : k.sidebarActiveBg) || "#334155", ee = ((L = t == null ? void 0 : t.props) == null ? void 0 : L.sidebarActiveText) || "#ffffff", Y = ((N = t == null ? void 0 : t.props) == null ? void 0 : N.accentColor) || "#6366f1", be = ((W = t == null ? void 0 : t.props) == null ? void 0 : W.headerBg) || "#ffffff", q = ((Ce = t == null ? void 0 : t.props) == null ? void 0 : Ce.headerText) || "#1e293b", te = ((qe = t == null ? void 0 : t.props) == null ? void 0 : qe.headerBorder) || "#e2e8f0", me = ((Ke = t == null ? void 0 : t.props) == null ? void 0 : Ke.mainBg) || "#f8fafc", Le = ((At = t == null ? void 0 : t.props) == null ? void 0 : At.mainPadding) || "24px", pt = ((Ot = t == null ? void 0 : t.props) == null ? void 0 : Ot.headerHeight) || "60px", ze = ((kt = t == null ? void 0 : t.props) == null ? void 0 : kt.collapsedWidth) || "64px", ae = ((Rt = t == null ? void 0 : t.props) == null ? void 0 : Rt.showCollapseBtn) !== !1, X = ((Mt = t == null ? void 0 : t.props) == null ? void 0 : Mt.sidenavType) || "side", J = ((Lt = t == null ? void 0 : t.props) == null ? void 0 : Lt.opened) !== !1, Ne = ((zt = t == null ? void 0 : t.props) == null ? void 0 : zt.hasBackdrop) !== !1, K = ((Nt = t == null ? void 0 : t.props) == null ? void 0 : Nt.collapseBtnPosition) || "sidebar-bottom", re = ((It = t == null ? void 0 : t.props) == null ? void 0 : It.collapseBtnIcon) || "chevron", Ie = ((Bt = t == null ? void 0 : t.props) == null ? void 0 : Bt.footerActionType) || "buttons", ne = ((Ht = t == null ? void 0 : t.props) == null ? void 0 : Ht.fixedHeader) !== !1, xe = ((Dt = t == null ? void 0 : t.props) == null ? void 0 : Dt.fixedFooter) !== !1, Be = Qe(o), He = or(l), _ = ar(s), G = X === "over" ? !J : R, De = G ? X === "over" ? "0px" : ze : M, H = A || u, ct = r !== "hidden", se = [
      { id: "main", label: "Main Content", dropzone: !0, accepts: ["zero-section"] }
    ];
    e === "slot" && se.push({ id: "header", label: "Header Drop Zone", dropzone: !0, accepts: ["zero-section"] }), r === "slot" ? se.push({ id: "sidebar", label: "Sidebar Nav Drop Zone", dropzone: !0, accepts: ["zero-section"] }) : r === "config" && se.push({ id: "sidebar-extra", label: "Sidebar Extra", dropzone: !0, accepts: ["zero-section"] }), i === "slot" && se.push({ id: "footer", label: "Sidebar Footer Drop Zone", dropzone: !0, accepts: ["zero-section"] });
    let we = !1;
    const ht = Be.map((Z, fr) => {
      const jt = Z.bottom === !0 && !we;
      jt && (we = !0);
      const Ut = Kr(Z, fr, I, U, Q, ee, Y, G);
      return jt ? `<div style="flex: 1; min-height: 20px;"></div>${Ut}` : Ut;
    }).join(""), V = K === "header-left" && ae ? Ee("header-left", re, R, X, J, q) : "", je = K === "header-right" && ae ? Ee("header-right", re, R, X, J, q) : "", le = e === "hidden" ? "" : `
      <div style="
        display:flex; align-items:center; gap:12px;
        height:${pt}; padding:0 20px;
        background:${be}; border-bottom:1px solid ${te};
        flex-shrink:0; box-sizing:border-box; z-index:10;
        width:100%;
      ">
        ${V}
        <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:0.95rem; color:${q}; white-space:nowrap; flex-shrink:0;">
          ${(() => {
      const Z = P || w;
      return Z.startsWith("<") ? Z : Z.startsWith("http") || Z.startsWith("/") || Z.includes(".") ? `<img src="${Z}" style="width: 24px; height: 24px; object-fit: contain;" />` : `<span style="font-size:1.3rem;">${Z}</span>`;
    })()}
          ${H}
        </div>
        ${e === "config" ? Qr(He, Y, q) : `<div style="flex:1; min-width:0;">${et("header", "Drop Header Sections", "40px", Y)}</div>`}
        ${je}
      </div>
    `, Ue = r === "slot" ? et("sidebar", "Drop Sidebar Sections", "200px", Y) : `
        <nav style="display:flex; flex-direction:column; flex:1; padding:10px 8px; overflow-y:auto;">
          ${ht}
        </nav>
        <div style="padding:8px; border-top:1px solid rgba(255,255,255,0.07); flex-shrink:0;">
          ${et("sidebar-extra", "Sidebar Extra", "40px", Y)}
        </div>
      `, ut = i === "hidden" ? "" : i === "slot" ? `<div style="padding:8px; border-top:1px solid rgba(255,255,255,0.07); flex-shrink:0;">
             ${et("footer", "Drop Footer Sections", "50px", Y)}
           </div>` : ei(_, G, Y, Ie, U), $e = K === "sidebar-top" && ae ? Ee("sidebar-top", re, R, X, J, "#fff") : "", We = K === "sidebar-bottom" && ae ? Ee("sidebar-bottom", re, R, X, J, U) : "", Fe = xe ? "" : "overflow-y: auto; scrollbar-width: thin;", Ve = xe ? "" : "flex: none; overflow-y: visible;", Ye = ct ? `
      <div style="
        width:${De}; background:${F};
        display:flex; flex-direction:column; flex-shrink:0;
        overflow:hidden; transition:width 0.25s, transform 0.25s;
        border-right:${De === "0px" ? "none" : "1px solid rgba(0,0,0,0.08)"};
        ${X === "over" ? `position:absolute; left:0; top:0; bottom:0; z-index:30; height:100%; box-shadow:4px 0 12px rgba(0,0,0,0.15); transform:${J ? "none" : "translateX(-100%)"};` : ""}
        ${Fe}
      ">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 18px 16px; border-bottom: 1px solid rgba(255,255,255,0.07); flex-shrink: 0;">
          <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
            ${w.startsWith("<") ? w : w.startsWith("http") || w.startsWith("/") || w.includes(".") ? `<img src="${w}" style="width: 24px; height: 24px; object-fit: contain;" />` : `<span style="font-size:1.4rem; flex-shrink:0; color:var(--snl-brand-text-color, #fff);">${w}</span>`}
            ${G ? "" : `
              <div style="display: flex; flex-direction: column; min-width: 0;">
                <span style="font-weight:700; font-size:0.9rem; color:var(--snl-brand-text-color, #fff); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${u}</span>
                ${c ? `<span style="font-size: 0.7rem; color:var(--snl-footer-role-color, #94a3b8); opacity: 0.8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${c}</span>` : ""}
              </div>
            `}
          </div>
          ${$e}
        </div>
        <div style="display:flex; flex-direction:column; flex:1; overflow:hidden; ${Ve}">
          ${Ue}
        </div>
        ${ut}
        ${We}
      </div>
    ` : "", Xe = X === "over" && J && Ne ? `
      <div style="position:absolute; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.4); backdrop-filter:blur(2px); z-index:25; pointer-events:none;"></div>
    ` : "", Te = K === "floating" && ae ? Ee("floating", re, R, X, J, U) : "", ft = ne ? le : "", bt = ne ? "" : le, yt = ne ? `padding: ${Le};` : "", de = `
      <div style="
        display:flex; flex-direction:column; width:100%; height:600px;
        overflow:hidden; border:1px solid ${te}; border-radius:12px;
        font-family:system-ui,sans-serif;
        --snl-accent: ${Y};
        --snl-sidebar-width: ${M};
        --snl-collapsed-w: ${ze};
        --snl-brand-text-color: ${ee};
        --snl-separator-color: ${`${U}15`};
        --snl-footer-name-color: ${ee};
        --snl-footer-role-color: ${U};
        --snl-footer-btn-color: ${U};
        --snl-hover-bg: ${U === "#94a3b8" ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.04)"};
      ">
        ${ft}
        <div style="display:flex; flex:1; overflow:hidden; position:relative;">
          ${Xe}
          ${Ye}
          ${Te}
          <div style="flex:1; overflow-y: auto; background:${me}; display:flex; flex-direction:column; min-width:0;">
            ${bt}
            ${ne ? `
              <div style="flex:1; ${yt} box-sizing:border-box;">
                <zero-studio-slot name="main"></zero-studio-slot>
              </div>
            ` : `
              <div style="flex:1; padding:${Le}; box-sizing:border-box;">
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
    const t = Qe(this.navItems), e = or(this.headerConfig), r = ar(this.sidebarFooterConfig), i = this.sidenavMode !== "hidden", o = this.headerMode === "hidden" ? E : m`
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

        ${this.collapseBtnPosition === "header-left" && this.showCollapseBtn ? this.renderToggleButton("header-left") : E}

        <div class="snl-header-brand" style="color:${this.headerText};">
          ${(() => {
      const R = this.headerLogo || this.appLogo;
      return R && R.startsWith("<") ? m`${ir(R)}` : R && (R.startsWith("http") || R.startsWith("/") || R.includes(".")) ? m`<img src="${R}" style="width: 24px; height: 24px; object-fit: contain;" />` : m`<span class="snl-brand-logo">${R}</span>`;
    })()}
          <span>${this.headerTitle || this.appName}</span>
        </div>

        ${this.headerMode === "config" ? m`

          ${e.showBreadcrumb && ((I = e.breadcrumbs) != null && I.length) ? m`
            <nav class="snl-header-breadcrumb">
              ${e.breadcrumbs.map((R, M) => m`
                ${M > 0 ? m`<span style="opacity:0.3; margin:0 4px;">›</span>` : E}
                <span style="${M === e.breadcrumbs.length - 1 ? "font-weight:600;" : "opacity:0.6;"}">${R}</span>
              `)}
            </nav>
          ` : E}

          ${e.showSearch ? m`
            <div class="snl-header-search" style="background:rgba(0,0,0,0.04);">
              <span style="opacity:0.4; font-size:0.85rem;">🔍</span>
              <span style="opacity:0.4; font-size:0.83rem;">${e.searchPlaceholder ?? "Search…"}</span>
            </div>
          ` : E}

          <div class="snl-header-spacer"></div>

          ${e.showNotificationBell ? m`
            <div class="snl-header-bell">
              <span>🔔</span>
              ${(e.notificationCount ?? 0) > 0 ? m`
                <span class="snl-bell-count" style="background:${this.accentColor};">
                  ${e.notificationCount}
                </span>
              ` : E}
            </div>
          ` : E}

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
                ${e.userRole ? m`<span style="font-size:0.7rem; opacity:0.5;">${e.userRole}</span>` : E}
              </div>
              <span style="opacity:0.3; font-size:0.75rem;">▾</span>
            </div>
          ` : E}

        ` : m`
          <div class="snl-header-slot-zone">
            <slot name="header"></slot>
          </div>
        `}

        ${this.collapseBtnPosition === "header-right" && this.showCollapseBtn ? this.renderToggleButton("header-right") : E}
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
                ` : E}
              </div>
            </div>
          </slot>
          ${this.collapseBtnPosition === "sidebar-top" && this.showCollapseBtn ? this.renderToggleButton("sidebar-top") : E}
        </div>

        <!-- Nav area: config mode or slot mode -->
        ${this.sidenavMode === "slot" ? m`
          <div class="snl-sidebar-slot" style="${s}">
            <slot name="sidebar"></slot>
          </div>
        ` : m`
          <nav class="snl-nav" style="${s}">
            ${(() => {
      let R = !1;
      return t.map((M, F) => {
        var q;
        if (M.separator) return m`<div class="nav-separator"></div>`;
        if (M.section) return m`
                  <div class="snl-nav-section" style="color:${this.sidebarText};">${M.section}</div>
                `;
        const U = this.activeItem === F, Q = !!((q = M.children) != null && q.length), ee = this._expandedItems.has(F), be = M.bottom === !0 && !R;
        return be && (R = !0), m`
                  ${be ? m`<div style="flex: 1; min-height: 20px;"></div>` : E}
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
                      </span>` : E}
                    ${Q ? m`
                      <span class="nav-child-indicator">${ee ? "∨" : "›"}</span>` : E}
                  </button>
                  ${Q && ee ? m`
                    <div class="snl-sub-menu open">
                      ${M.children.map((te, me) => m`
                        <button
                          class="nav-item ${M.disabled ? "is-disabled" : ""}"
                          style="color:${this.sidebarText}; background:transparent;"
                          @click=${() => this.handleNavClick(me, te)}
                        >
                          <span class="nav-icon">${te.icon ?? "•"}</span>
                          <span class="nav-label">${te.label ?? ""}</span>
                        </button>
                      `)}
                    </div>
                  ` : E}
                `;
      });
    })()}
          </nav>

          <div class="snl-sidebar-extra">
            <slot name="sidebar-extra"></slot>
          </div>
        `}

        <!-- Footer area: config / slot / hidden -->
        ${this.footerMode === "hidden" ? E : this.footerMode === "slot" ? m`
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
                ${r.userRole ? m`<div class="snl-footer-role">${r.userRole}</div>` : E}
              </div>
              <div class="snl-footer-actions">
                ${this.footerActionType === "buttons" && r.showSettings ? m`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("settingsClick", { bubbles: !0, composed: !0 }))}
                    title="Settings">⚙️</button>
                ` : E}
                ${this.footerActionType === "buttons" && r.showLogout ? m`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("logout", { bubbles: !0, composed: !0 }))}
                    title="Logout">↪</button>
                ` : E}
                ${this.footerActionType === "dropdown" ? m`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("profileClick", { bubbles: !0, composed: !0 }))}
                    title="Profile Actions">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                ` : E}
              </div>
            </div>
          ` : E}

        ${this.collapseBtnPosition === "sidebar-bottom" && this.showCollapseBtn ? this.renderToggleButton("sidebar-bottom") : E}
      </aside>
    ` : E, c = this.fixedHeader ? o : E, w = this.fixedHeader ? E : o, A = this.fixedHeader ? `padding: ${this.mainPadding};` : "";
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
          ${c}
          <div class="snl-body">
            ${this.opened && (this.sidenavType === "over" || typeof window < "u" && window.innerWidth <= 768) && this.hasBackdrop ? m`
              <div class="snl-backdrop" @click=${this.close}></div>
            ` : E}
            ${u}
            ${this.collapseBtnPosition === "floating" && this.showCollapseBtn ? this.renderToggleButton("floating") : E}
            <main class="snl-main" style="background:var(--uiv-bg-color, ${this.mainBg}); ${"overflow-y: auto;"} ${A} display: flex; flex-direction: column;">
              ${w}
              ${this.fixedHeader ? m`
                <slot name="main"></slot>
                <slot></slot>
              ` : m`
                <div style="flex: 1; padding:${this.mainPadding}; box-sizing: border-box;">
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
T.slots = [];
T.styles = [
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
C([
  x({ type: String, reflect: !0 })
], T.prototype, "height", 2);
C([
  x({ type: String, attribute: "active-path" })
], T.prototype, "activePath", 2);
C([
  x({ type: String, attribute: "header-mode", reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.DROPDOWN,
    displayLabel: "Header Mode",
    fieldMappings: "headerMode",
    categoryLabel: "Regions",
    optionItems: [
      { label: "Built-in (Config)", value: "config" },
      { label: "Drag & Drop (Slot)", value: "slot" },
      { label: "Hidden", value: "hidden" }
    ]
  })
], T.prototype, "headerMode", 2);
C([
  x({ type: String, attribute: "sidenav-mode", reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.DROPDOWN,
    displayLabel: "Sidebar Nav Mode",
    fieldMappings: "sidenavMode",
    categoryLabel: "Regions",
    optionItems: [
      { label: "Built-in (Config)", value: "config" },
      { label: "Drag & Drop (Slot)", value: "slot" },
      { label: "Hidden", value: "hidden" }
    ]
  })
], T.prototype, "sidenavMode", 2);
C([
  x({ type: String, attribute: "footer-mode", reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.DROPDOWN,
    displayLabel: "Sidebar Footer Mode",
    fieldMappings: "footerMode",
    categoryLabel: "Regions",
    optionItems: [
      { label: "Built-in (Config)", value: "config" },
      { label: "Drag & Drop (Slot)", value: "slot" },
      { label: "Hidden", value: "hidden" }
    ]
  })
], T.prototype, "footerMode", 2);
C([
  x({ type: Boolean, attribute: "fixed-header" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.CHECKBOX,
    displayLabel: "Fixed Header",
    fieldMappings: "fixedHeader",
    categoryLabel: "Layout",
    initialValue: !0
  })
], T.prototype, "fixedHeader", 2);
C([
  x({ type: Boolean, attribute: "fixed-footer" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.CHECKBOX,
    displayLabel: "Fixed Sidebar Footer",
    fieldMappings: "fixedFooter",
    categoryLabel: "Layout",
    initialValue: !0
  })
], T.prototype, "fixedFooter", 2);
C([
  x({ type: String, attribute: "sidenav-type", reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.DROPDOWN,
    displayLabel: "Sidenav Layout Mode",
    fieldMappings: "sidenavType",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Side (Standard)", value: "side" },
      { label: "Over (Overlay/Drawer)", value: "over" }
    ]
  })
], T.prototype, "sidenavType", 2);
C([
  x({ type: Boolean, reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.CHECKBOX,
    displayLabel: "Sidenav Opened",
    fieldMappings: "opened",
    categoryLabel: "Layout",
    initialValue: !0
  })
], T.prototype, "opened", 2);
C([
  x({ type: Boolean, attribute: "has-backdrop", reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.CHECKBOX,
    displayLabel: "Has Backdrop (Over mode)",
    fieldMappings: "hasBackdrop",
    categoryLabel: "Layout",
    initialValue: !0
  })
], T.prototype, "hasBackdrop", 2);
C([
  x({ type: String, attribute: "collapse-btn-position", reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.DROPDOWN,
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
], T.prototype, "collapseBtnPosition", 2);
C([
  x({ type: String, attribute: "collapse-btn-icon", reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.DROPDOWN,
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
], T.prototype, "collapseBtnIcon", 2);
C([
  x({ type: String, attribute: "nav-items" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXTAREA,
    displayLabel: "Nav Items (JSON)",
    fieldMappings: "navItems",
    categoryLabel: "Navigation",
    placeholderText: ot,
    initialValue: ot
  })
], T.prototype, "navItems", 2);
C([
  x({ type: Number, reflect: !0, attribute: "active-item" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.NUMBER_INPUT,
    displayLabel: "Active Item Index",
    fieldMappings: "activeItem",
    categoryLabel: "Navigation",
    initialValue: 0
  })
], T.prototype, "activeItem", 2);
C([
  x({ type: String, attribute: "header-config" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXTAREA,
    displayLabel: "Header Config (JSON)",
    fieldMappings: "headerConfig",
    categoryLabel: "Header",
    placeholderText: at,
    initialValue: at
  })
], T.prototype, "headerConfig", 2);
C([
  x({ type: String, attribute: "sidebar-footer-config" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXTAREA,
    displayLabel: "Sidebar Footer Config (JSON)",
    fieldMappings: "sidebarFooterConfig",
    categoryLabel: "Sidebar Footer",
    placeholderText: nt,
    initialValue: nt
  })
], T.prototype, "sidebarFooterConfig", 2);
C([
  x({ type: String, attribute: "app-name" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXT_INPUT,
    displayLabel: "App / Brand Name",
    fieldMappings: "appName",
    categoryLabel: "Branding"
  })
], T.prototype, "appName", 2);
C([
  x({ type: String, attribute: "app-subtitle" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXT_INPUT,
    displayLabel: "App Subtitle",
    fieldMappings: "appSubtitle",
    categoryLabel: "Branding"
  })
], T.prototype, "appSubtitle", 2);
C([
  x({ type: String, attribute: "app-logo" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXT_INPUT,
    displayLabel: "Logo Emoji / Character",
    fieldMappings: "appLogo",
    categoryLabel: "Branding"
  })
], T.prototype, "appLogo", 2);
C([
  x({ type: String, attribute: "header-title" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXT_INPUT,
    displayLabel: "Header Title (overrides brand name in header bar)",
    fieldMappings: "headerTitle",
    categoryLabel: "Branding"
  })
], T.prototype, "headerTitle", 2);
C([
  x({ type: String, attribute: "header-logo" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXT_INPUT,
    displayLabel: "Header Logo (overrides app logo in header bar)",
    fieldMappings: "headerLogo",
    categoryLabel: "Branding"
  })
], T.prototype, "headerLogo", 2);
C([
  x({ type: Boolean, reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.CHECKBOX,
    displayLabel: "Sidebar Collapsed",
    fieldMappings: "collapsed",
    categoryLabel: "Layout"
  })
], T.prototype, "collapsed", 2);
C([
  x({ type: String, attribute: "sidebar-width" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXT_INPUT,
    displayLabel: "Sidebar Width (e.g. 260px)",
    fieldMappings: "sidebarWidth",
    categoryLabel: "Layout"
  })
], T.prototype, "sidebarWidth", 2);
C([
  x({ type: String, attribute: "header-height" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXT_INPUT,
    displayLabel: "Header Height (e.g. 60px)",
    fieldMappings: "headerHeight",
    categoryLabel: "Layout"
  })
], T.prototype, "headerHeight", 2);
C([
  x({ type: String, attribute: "collapsed-width" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXT_INPUT,
    displayLabel: "Collapsed Sidebar Width (e.g. 64px)",
    fieldMappings: "collapsedWidth",
    categoryLabel: "Layout"
  })
], T.prototype, "collapsedWidth", 2);
C([
  x({ type: Boolean, attribute: "show-collapse-btn", reflect: !0 }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.CHECKBOX,
    displayLabel: "Show Collapse Button",
    fieldMappings: "showCollapseBtn",
    categoryLabel: "Layout"
  })
], T.prototype, "showCollapseBtn", 2);
C([
  x({ type: String, attribute: "sidebar-bg" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.COLOR_PICKER,
    displayLabel: "Sidebar Background",
    fieldMappings: "sidebarBg",
    categoryLabel: "Appearance"
  })
], T.prototype, "sidebarBg", 2);
C([
  x({ type: String, attribute: "sidebar-text" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.COLOR_PICKER,
    displayLabel: "Sidebar Text Color",
    fieldMappings: "sidebarText",
    categoryLabel: "Appearance"
  })
], T.prototype, "sidebarText", 2);
C([
  x({ type: String, attribute: "sidebar-active-bg" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.COLOR_PICKER,
    displayLabel: "Active Item Background",
    fieldMappings: "sidebarActiveBg",
    categoryLabel: "Appearance"
  })
], T.prototype, "sidebarActiveBg", 2);
C([
  x({ type: String, attribute: "sidebar-active-text" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.COLOR_PICKER,
    displayLabel: "Active Item Text Color",
    fieldMappings: "sidebarActiveText",
    categoryLabel: "Appearance"
  })
], T.prototype, "sidebarActiveText", 2);
C([
  x({ type: String, attribute: "accent-color" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.COLOR_PICKER,
    displayLabel: "Accent Color (badges, avatar bg, drop-zone ring)",
    fieldMappings: "accentColor",
    categoryLabel: "Appearance"
  })
], T.prototype, "accentColor", 2);
C([
  x({ type: String, attribute: "header-bg" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
], T.prototype, "headerBg", 2);
C([
  x({ type: String, attribute: "header-text" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.COLOR_PICKER,
    displayLabel: "Header Text Color",
    fieldMappings: "headerText",
    categoryLabel: "Appearance"
  })
], T.prototype, "headerText", 2);
C([
  x({ type: String, attribute: "header-border" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.COLOR_PICKER,
    displayLabel: "Header Border Color",
    fieldMappings: "headerBorder",
    categoryLabel: "Appearance"
  })
], T.prototype, "headerBorder", 2);
C([
  x({ type: String, attribute: "main-bg" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.COLOR_PICKER,
    displayLabel: "Main Area Background",
    fieldMappings: "mainBg",
    categoryLabel: "Appearance"
  })
], T.prototype, "mainBg", 2);
C([
  x({ type: String, attribute: "main-padding" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.TEXT_INPUT,
    displayLabel: "Main Area Padding (e.g. 24px)",
    fieldMappings: "mainPadding",
    categoryLabel: "Appearance"
  })
], T.prototype, "mainPadding", 2);
C([
  x({ type: String, attribute: "footer-action-type" }),
  g({
    attributeType: y.PROPERTY,
    uiComponentType: S.DROPDOWN,
    displayLabel: "Footer Action Type",
    fieldMappings: "footerActionType",
    categoryLabel: "Appearance",
    optionItems: [
      { label: "Settings/Logout Buttons", value: "buttons" },
      { label: "Chevron Dropdown", value: "dropdown" },
      { label: "None", value: "none" }
    ]
  })
], T.prototype, "footerActionType", 2);
C([
  g({ attributeType: y.EVENT, displayLabel: "On Opened Change", eventTrigger: "openedchange", categoryLabel: "Triggers" })
], T.prototype, "onOpenedChange", 1);
C([
  g({ attributeType: y.EVENT, displayLabel: "On Nav Item Click", eventTrigger: "navchange", categoryLabel: "Triggers" })
], T.prototype, "onNavChange", 1);
C([
  g({ attributeType: y.EVENT, displayLabel: "On Sidebar Toggle", eventTrigger: "sidebarToggle", categoryLabel: "Triggers" })
], T.prototype, "onSidebarToggle", 1);
C([
  g({ attributeType: y.EVENT, displayLabel: "On Logout Click", eventTrigger: "logout", categoryLabel: "Triggers" })
], T.prototype, "onLogout", 1);
C([
  g({ attributeType: y.EVENT, displayLabel: "On Profile Click", eventTrigger: "profileClick", categoryLabel: "Triggers" })
], T.prototype, "onProfileClick", 1);
C([
  g({ attributeType: y.EVENT, displayLabel: "On Settings Click", eventTrigger: "settingsClick", categoryLabel: "Triggers" })
], T.prototype, "onSettingsClick", 1);
C([
  g({ attributeType: y.ACTION, displayLabel: "Open Sidenav", categoryLabel: "Actions" })
], T.prototype, "open", 1);
C([
  g({ attributeType: y.ACTION, displayLabel: "Close Sidenav", categoryLabel: "Actions" })
], T.prototype, "close", 1);
C([
  g({ attributeType: y.ACTION, displayLabel: "Toggle Sidenav Opened", categoryLabel: "Actions" })
], T.prototype, "toggle", 1);
C([
  g({ attributeType: y.ACTION, displayLabel: "Toggle Sidebar Collapse", categoryLabel: "Actions" })
], T.prototype, "toggleSidebar", 1);
C([
  g({ attributeType: y.ACTION, displayLabel: "Expand Sidebar", categoryLabel: "Actions" })
], T.prototype, "expandSidebar", 1);
C([
  g({ attributeType: y.ACTION, displayLabel: "Collapse Sidebar", categoryLabel: "Actions" })
], T.prototype, "collapseSidebar", 1);
C([
  g({ attributeType: y.ACTION, displayLabel: "Navigate To Item (by index)", categoryLabel: "Actions" })
], T.prototype, "navigateTo", 1);
T = C([
  mr({
    name: "zero-sidenav-layout",
    version: "1.0.0",
    title: "Sidebar Layout",
    elementSelector: "zero-sidenav-layout",
    group: "Layout",
    iconName: "sidenav-layout-icon.png",
    layoutKind: "panel",
    environment: ["page"]
  }),
  Ur("zero-sidenav-layout"),
  xr()
], T);
export {
  at as DEFAULT_HEADER_CONFIG_JSON,
  ot as DEFAULT_NAV_ITEMS_JSON,
  nt as DEFAULT_SIDEBAR_FOOTER_CONFIG_JSON,
  T as ZeroSidenavLayout
};
