var kt = Object.defineProperty;
var Nt = (t, e, r) => e in t ? kt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var pt = (t, e, r) => Nt(t, typeof e != "symbol" ? e + "" : e, r);
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ft;
(function(t) {
  (function(e) {
    var r = typeof globalThis == "object" ? globalThis : typeof ct == "object" ? ct : typeof self == "object" ? self : typeof this == "object" ? this : v(), i = n(t);
    typeof r.Reflect < "u" && (i = n(r.Reflect, i)), e(i, r), typeof r.Reflect > "u" && (r.Reflect = t);
    function n(f, T) {
      return function(E, _) {
        Object.defineProperty(f, E, { configurable: !0, writable: !0, value: _ }), T && T(E, _);
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
    function v() {
      return l() || u();
    }
  })(function(e, r) {
    var i = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", l = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, T = !v && !f, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return rt(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return rt({ __proto__: null });
      } : function() {
        return rt({});
      },
      has: T ? function(a, s) {
        return i.call(a, s);
      } : function(a, s) {
        return s in a;
      },
      get: T ? function(a, s) {
        return i.call(a, s) ? a[s] : void 0;
      } : function(a, s) {
        return a[s];
      }
    }, _ = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : qe(), U = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Je(), j = typeof WeakMap == "function" ? WeakMap : Rt(), F = n ? Symbol.for("@reflect-metadata:registry") : void 0, Q = Xe(), ne = Ye(Q);
    function Se(a, s, o, d) {
      if (b(o)) {
        if (!fe(a))
          throw new TypeError();
        if (!me(s))
          throw new TypeError();
        return De(a, s);
      } else {
        if (!fe(a))
          throw new TypeError();
        if (!P(s))
          throw new TypeError();
        if (!P(d) && !b(d) && !z(d))
          throw new TypeError();
        return z(d) && (d = void 0), o = D(o), He(a, s, o, d);
      }
    }
    e("decorate", Se);
    function Me(a, s) {
      function o(d, y) {
        if (!P(d))
          throw new TypeError();
        if (!b(y) && !Be(y))
          throw new TypeError();
        ue(a, s, d, y);
      }
      return o;
    }
    e("metadata", Me);
    function Oe(a, s, o, d) {
      if (!P(o))
        throw new TypeError();
      return b(d) || (d = D(d)), ue(a, s, o, d);
    }
    e("defineMetadata", Oe);
    function Ve(a, s, o) {
      if (!P(s))
        throw new TypeError();
      return b(o) || (o = D(o)), se(a, s, o);
    }
    e("hasMetadata", Ve);
    function Re(a, s, o) {
      if (!P(s))
        throw new TypeError();
      return b(o) || (o = D(o)), K(a, s, o);
    }
    e("hasOwnMetadata", Re);
    function xe(a, s, o) {
      if (!P(s))
        throw new TypeError();
      return b(o) || (o = D(o)), oe(a, s, o);
    }
    e("getMetadata", xe);
    function Ie(a, s, o) {
      if (!P(s))
        throw new TypeError();
      return b(o) || (o = D(o)), le(a, s, o);
    }
    e("getOwnMetadata", Ie);
    function ke(a, s) {
      if (!P(a))
        throw new TypeError();
      return b(s) || (s = D(s)), de(a, s);
    }
    e("getMetadataKeys", ke);
    function Ne(a, s) {
      if (!P(a))
        throw new TypeError();
      return b(s) || (s = D(s)), he(a, s);
    }
    e("getOwnMetadataKeys", Ne);
    function Ue(a, s, o) {
      if (!P(s))
        throw new TypeError();
      if (b(o) || (o = D(o)), !P(s))
        throw new TypeError();
      b(o) || (o = D(o));
      var d = G(
        s,
        o,
        /*Create*/
        !1
      );
      return b(d) ? !1 : d.OrdinaryDeleteMetadata(a, s, o);
    }
    e("deleteMetadata", Ue);
    function De(a, s) {
      for (var o = a.length - 1; o >= 0; --o) {
        var d = a[o], y = d(s);
        if (!b(y) && !z(y)) {
          if (!me(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function He(a, s, o, d) {
      for (var y = a.length - 1; y >= 0; --y) {
        var O = a[y], M = O(s, o, d);
        if (!b(M) && !z(M)) {
          if (!P(M))
            throw new TypeError();
          d = M;
        }
      }
      return d;
    }
    function se(a, s, o) {
      var d = K(a, s, o);
      if (d)
        return !0;
      var y = te(s);
      return z(y) ? !1 : se(a, y, o);
    }
    function K(a, s, o) {
      var d = G(
        s,
        o,
        /*Create*/
        !1
      );
      return b(d) ? !1 : ce(d.OrdinaryHasOwnMetadata(a, s, o));
    }
    function oe(a, s, o) {
      var d = K(a, s, o);
      if (d)
        return le(a, s, o);
      var y = te(s);
      if (!z(y))
        return oe(a, y, o);
    }
    function le(a, s, o) {
      var d = G(
        s,
        o,
        /*Create*/
        !1
      );
      if (!b(d))
        return d.OrdinaryGetOwnMetadata(a, s, o);
    }
    function ue(a, s, o, d) {
      var y = G(
        o,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(a, s, o, d);
    }
    function de(a, s) {
      var o = he(a, s), d = te(a);
      if (d === null)
        return o;
      var y = de(d, s);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var O = new U(), M = [], $ = 0, h = o; $ < h.length; $++) {
        var p = h[$], c = O.has(p);
        c || (O.add(p), M.push(p));
      }
      for (var m = 0, w = y; m < w.length; m++) {
        var p = w[m], c = O.has(p);
        c || (O.add(p), M.push(p));
      }
      return M;
    }
    function he(a, s) {
      var o = G(
        a,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(a, s) : [];
    }
    function pe(a) {
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
    function b(a) {
      return a === void 0;
    }
    function z(a) {
      return a === null;
    }
    function je(a) {
      return typeof a == "symbol";
    }
    function P(a) {
      return typeof a == "object" ? a !== null : typeof a == "function";
    }
    function ze(a, s) {
      switch (pe(a)) {
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
      var o = "string", d = ye(a, l);
      if (d !== void 0) {
        var y = d.call(a, o);
        if (P(y))
          throw new TypeError();
        return y;
      }
      return Fe(a);
    }
    function Fe(a, s) {
      var o, d;
      {
        var y = a.toString;
        if (X(y)) {
          var d = y.call(a);
          if (!P(d))
            return d;
        }
        var o = a.valueOf;
        if (X(o)) {
          var d = o.call(a);
          if (!P(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function ce(a) {
      return !!a;
    }
    function Ge(a) {
      return "" + a;
    }
    function D(a) {
      var s = ze(a);
      return je(s) ? s : Ge(s);
    }
    function fe(a) {
      return Array.isArray ? Array.isArray(a) : a instanceof Object ? a instanceof Array : Object.prototype.toString.call(a) === "[object Array]";
    }
    function X(a) {
      return typeof a == "function";
    }
    function me(a) {
      return typeof a == "function";
    }
    function Be(a) {
      switch (pe(a)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ee(a, s) {
      return a === s || a !== a && s !== s;
    }
    function ye(a, s) {
      var o = a[s];
      if (o != null) {
        if (!X(o))
          throw new TypeError();
        return o;
      }
    }
    function be(a) {
      var s = ye(a, u);
      if (!X(s))
        throw new TypeError();
      var o = s.call(a);
      if (!P(o))
        throw new TypeError();
      return o;
    }
    function ve(a) {
      return a.value;
    }
    function _e(a) {
      var s = a.next();
      return s.done ? !1 : s;
    }
    function $e(a) {
      var s = a.return;
      s && s.call(a);
    }
    function te(a) {
      var s = Object.getPrototypeOf(a);
      if (typeof a != "function" || a === _ || s !== _)
        return s;
      var o = a.prototype, d = o && Object.getPrototypeOf(o);
      if (d == null || d === Object.prototype)
        return s;
      var y = d.constructor;
      return typeof y != "function" || y === a ? s : y;
    }
    function We() {
      var a;
      !b(F) && typeof r.Reflect < "u" && !(F in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (a = Ze(r.Reflect));
      var s, o, d, y = new j(), O = {
        registerProvider: M,
        getProvider: h,
        setProvider: c
      };
      return O;
      function M(m) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case a === m:
            break;
          case b(s):
            s = m;
            break;
          case s === m:
            break;
          case b(o):
            o = m;
            break;
          case o === m:
            break;
          default:
            d === void 0 && (d = new U()), d.add(m);
            break;
        }
      }
      function $(m, w) {
        if (!b(s)) {
          if (s.isProviderFor(m, w))
            return s;
          if (!b(o)) {
            if (o.isProviderFor(m, w))
              return s;
            if (!b(d))
              for (var A = be(d); ; ) {
                var L = _e(A);
                if (!L)
                  return;
                var H = ve(L);
                if (H.isProviderFor(m, w))
                  return $e(A), H;
              }
          }
        }
        if (!b(a) && a.isProviderFor(m, w))
          return a;
      }
      function h(m, w) {
        var A = y.get(m), L;
        return b(A) || (L = A.get(w)), b(L) && (L = $(m, w), b(L) || (b(A) && (A = new S(), y.set(m, A)), A.set(w, L))), L;
      }
      function p(m) {
        if (b(m))
          throw new TypeError();
        return s === m || o === m || !b(d) && d.has(m);
      }
      function c(m, w, A) {
        if (!p(A))
          throw new Error("Metadata provider not registered.");
        var L = h(m, w);
        if (L !== A) {
          if (!b(L))
            return !1;
          var H = y.get(m);
          b(H) && (H = new S(), y.set(m, H)), H.set(w, A);
        }
        return !0;
      }
    }
    function Xe() {
      var a;
      return !b(F) && P(r.Reflect) && Object.isExtensible(r.Reflect) && (a = r.Reflect[F]), b(a) && (a = We()), !b(F) && P(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: a
      }), a;
    }
    function Ye(a) {
      var s = new j(), o = {
        isProviderFor: function(p, c) {
          var m = s.get(p);
          return b(m) ? !1 : m.has(c);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: h
      };
      return Q.registerProvider(o), o;
      function d(p, c, m) {
        var w = s.get(p), A = !1;
        if (b(w)) {
          if (!m)
            return;
          w = new S(), s.set(p, w), A = !0;
        }
        var L = w.get(c);
        if (b(L)) {
          if (!m)
            return;
          if (L = new S(), w.set(c, L), !a.setProvider(p, c, o))
            throw w.delete(c), A && s.delete(p), new Error("Wrong provider for target.");
        }
        return L;
      }
      function y(p, c, m) {
        var w = d(
          c,
          m,
          /*Create*/
          !1
        );
        return b(w) ? !1 : ce(w.has(p));
      }
      function O(p, c, m) {
        var w = d(
          c,
          m,
          /*Create*/
          !1
        );
        if (!b(w))
          return w.get(p);
      }
      function M(p, c, m, w) {
        var A = d(
          m,
          w,
          /*Create*/
          !0
        );
        A.set(p, c);
      }
      function $(p, c) {
        var m = [], w = d(
          p,
          c,
          /*Create*/
          !1
        );
        if (b(w))
          return m;
        for (var A = w.keys(), L = be(A), H = 0; ; ) {
          var ht = _e(L);
          if (!ht)
            return m.length = H, m;
          var xt = ve(ht);
          try {
            m[H] = xt;
          } catch (It) {
            try {
              $e(L);
            } finally {
              throw It;
            }
          }
          H++;
        }
      }
      function h(p, c, m) {
        var w = d(
          c,
          m,
          /*Create*/
          !1
        );
        if (b(w) || !w.delete(p))
          return !1;
        if (w.size === 0) {
          var A = s.get(c);
          b(A) || (A.delete(m), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function Ze(a) {
      var s = a.defineMetadata, o = a.hasOwnMetadata, d = a.getOwnMetadata, y = a.getOwnMetadataKeys, O = a.deleteMetadata, M = new j(), $ = {
        isProviderFor: function(h, p) {
          var c = M.get(h);
          return !b(c) && c.has(p) ? !0 : y(h, p).length ? (b(c) && (c = new U(), M.set(h, c)), c.add(p), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: O
      };
      return $;
    }
    function G(a, s, o) {
      var d = Q.getProvider(a, s);
      if (!b(d))
        return d;
      if (o) {
        if (Q.setProvider(a, s, ne))
          return ne;
        throw new Error("Illegal state.");
      }
    }
    function qe() {
      var a = {}, s = [], o = (
        /** @class */
        function() {
          function $(h, p, c) {
            this._index = 0, this._keys = h, this._values = p, this._selector = c;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[u] = function() {
            return this;
          }, $.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var p = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: p, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), h;
          }, $.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: h, done: !0 };
          }, $;
        }()
      ), d = (
        /** @class */
        function() {
          function $() {
            this._keys = [], this._values = [], this._cacheKey = a, this._cacheIndex = -2;
          }
          return Object.defineProperty($.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), $.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, $.prototype.get = function(h) {
            var p = this._find(
              h,
              /*insert*/
              !1
            );
            return p >= 0 ? this._values[p] : void 0;
          }, $.prototype.set = function(h, p) {
            var c = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[c] = p, this;
          }, $.prototype.delete = function(h) {
            var p = this._find(
              h,
              /*insert*/
              !1
            );
            if (p >= 0) {
              for (var c = this._keys.length, m = p + 1; m < c; m++)
                this._keys[m - 1] = this._keys[m], this._values[m - 1] = this._values[m];
              return this._keys.length--, this._values.length--, ee(h, this._cacheKey) && (this._cacheKey = a, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = a, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new o(this._keys, this._values, y);
          }, $.prototype.values = function() {
            return new o(this._keys, this._values, O);
          }, $.prototype.entries = function() {
            return new o(this._keys, this._values, M);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[u] = function() {
            return this.entries();
          }, $.prototype._find = function(h, p) {
            if (!ee(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var c = 0; c < this._keys.length; c++)
                if (ee(this._keys[c], h)) {
                  this._cacheIndex = c;
                  break;
                }
            }
            return this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return d;
      function y($, h) {
        return $;
      }
      function O($, h) {
        return h;
      }
      function M($, h) {
        return [$, h];
      }
    }
    function Je() {
      var a = (
        /** @class */
        function() {
          function s() {
            this._map = new S();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(o) {
            return this._map.has(o);
          }, s.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, s.prototype.delete = function(o) {
            return this._map.delete(o);
          }, s.prototype.clear = function() {
            this._map.clear();
          }, s.prototype.keys = function() {
            return this._map.keys();
          }, s.prototype.values = function() {
            return this._map.keys();
          }, s.prototype.entries = function() {
            return this._map.entries();
          }, s.prototype["@@iterator"] = function() {
            return this.keys();
          }, s.prototype[u] = function() {
            return this.keys();
          }, s;
        }()
      );
      return a;
    }
    function Rt() {
      var a = 16, s = E.create(), o = d();
      return (
        /** @class */
        function() {
          function h() {
            this._key = d();
          }
          return h.prototype.has = function(p) {
            var c = y(
              p,
              /*create*/
              !1
            );
            return c !== void 0 ? E.has(c, this._key) : !1;
          }, h.prototype.get = function(p) {
            var c = y(
              p,
              /*create*/
              !1
            );
            return c !== void 0 ? E.get(c, this._key) : void 0;
          }, h.prototype.set = function(p, c) {
            var m = y(
              p,
              /*create*/
              !0
            );
            return m[this._key] = c, this;
          }, h.prototype.delete = function(p) {
            var c = y(
              p,
              /*create*/
              !1
            );
            return c !== void 0 ? delete c[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = d();
          }, h;
        }()
      );
      function d() {
        var h;
        do
          h = "@@WeakMap@@" + $();
        while (E.has(s, h));
        return s[h] = !0, h;
      }
      function y(h, p) {
        if (!i.call(h, o)) {
          if (!p)
            return;
          Object.defineProperty(h, o, { value: E.create() });
        }
        return h[o];
      }
      function O(h, p) {
        for (var c = 0; c < p; ++c)
          h[c] = Math.random() * 255 | 0;
        return h;
      }
      function M(h) {
        if (typeof Uint8Array == "function") {
          var p = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(p) : typeof msCrypto < "u" ? msCrypto.getRandomValues(p) : O(p, h), p;
        }
        return O(new Array(h), h);
      }
      function $() {
        var h = M(a);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var p = "", c = 0; c < a; ++c) {
          var m = h[c];
          (c === 4 || c === 6 || c === 8) && (p += "-"), m < 16 && (p += "0"), p += m.toString(16).toLowerCase();
        }
        return p;
      }
    }
    function rt(a) {
      return a.__ = void 0, delete a.__, a;
    }
  });
})(ft || (ft = {}));
function Ut(t) {
  return typeof t.name == "string" && typeof t.version == "string" && typeof t.title == "string" && typeof t.elementSelector == "string" && typeof t.group == "string" && typeof t.iconName == "string";
}
function Dt(t) {
  return function(e) {
    if (Ut(t)) {
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
function Ht(t) {
  return Dt(t);
}
function jt(t) {
  return function(e) {
    class r extends e {
      constructor() {
        super(...arguments);
        pt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), v = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && v) {
          const E = new CSSStyleSheet(), _ = (T = l.sheet) == null ? void 0 : T.cssRules;
          _ && (Array.from(_).forEach((S) => E.insertRule(S.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, E]);
        } else if (l) {
          const E = l.cloneNode(!0);
          f.appendChild(E);
        }
        u.forEach((E) => {
          const _ = E.cloneNode(!0);
          f.appendChild(_);
        });
      }
    }
    return r;
  };
}
function zt(t) {
  var r;
  if (((r = t == null ? void 0 : t.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ft(t) {
  return function(e, r) {
    try {
      zt(t);
      const i = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let n = !0;
      if (typeof r == "string") {
        try {
          n = typeof e[r] != "function";
        } catch {
          n = !0;
        }
        n && (t.fieldMappings = t.fieldMappings ?? r);
      }
      i.push(t), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function k(t) {
  return Ft(t);
}
var R;
(function(t) {
  t.TEXT_INPUT = "text-input", t.PASSWORD_INPUT = "password-input", t.DROPDOWN = "dropdown", t.CHECKBOX = "checkbox", t.RADIO_BUTTON = "radio-button", t.RANGE_SLIDER = "range-slider", t.FILE_INPUT = "file-input", t.DATE_PICKER = "date-picker", t.COLOR_PICKER = "color-picker", t.NUMBER_INPUT = "number-input", t.TEXTAREA = "textarea", t.MULTI_SELECT = "multi-select", t.POPUP_DROPDOWN = "popup-dropdown", t.LAYOUT_PICKER = "layout-picker", t.RESPONSIVE_OVERRIDE = "responsive-override", t.IMAGE_PICKER = "image-picker", t.CHIPS = "chips";
})(R || (R = {}));
var x;
(function(t) {
  t.PROPERTY = "property", t.EVENT = "event", t.ACTION = "action";
})(x || (x = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qe = globalThis, ot = Qe.ShadowRoot && (Qe.ShadyCSS === void 0 || Qe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, lt = Symbol(), mt = /* @__PURE__ */ new WeakMap();
let Lt = class {
  constructor(e, r, i) {
    if (this._$cssResult$ = !0, i !== lt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (ot && e === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (e = mt.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && mt.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Gt = (t) => new Lt(typeof t == "string" ? t : t + "", void 0, lt), Bt = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((i, n, l) => i + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[l + 1], t[0]);
  return new Lt(r, t, lt);
}, Wt = (t, e) => {
  if (ot) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const i = document.createElement("style"), n = Qe.litNonce;
    n !== void 0 && i.setAttribute("nonce", n), i.textContent = r.cssText, t.appendChild(i);
  }
}, yt = ot ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const i of e.cssRules) r += i.cssText;
  return Gt(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Yt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: qt, getOwnPropertySymbols: Jt, getPrototypeOf: Qt } = Object, W = globalThis, bt = W.trustedTypes, Kt = bt ? bt.emptyScript : "", it = W.reactiveElementPolyfillSupport, ge = (t, e) => t, Ke = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Kt : null;
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
} }, ut = (t, e) => !Xt(t, e), vt = { attribute: !0, type: String, converter: Ke, reflect: !1, useDefault: !1, hasChanged: ut };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), W.litPropertyMetadata ?? (W.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let re = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = vt) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const i = Symbol(), n = this.getPropertyDescriptor(e, i, r);
      n !== void 0 && Yt(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, r, i) {
    const { get: n, set: l } = Zt(this.prototype, e) ?? { get() {
      return this[r];
    }, set(u) {
      this[r] = u;
    } };
    return { get: n, set(u) {
      const v = n == null ? void 0 : n.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, v, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? vt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ge("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ge("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ge("properties"))) {
      const r = this.properties, i = [...qt(r), ...Jt(r)];
      for (const n of i) this.createProperty(n, r[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [i, n] of r) this.elementProperties.set(i, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, i] of this.elementProperties) {
      const n = this._$Eu(r, i);
      n !== void 0 && this._$Eh.set(n, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const n of i) r.unshift(yt(n));
    } else e !== void 0 && r.push(yt(e));
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
    return Wt(e, this.constructor.elementStyles), e;
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
    const i = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, i);
    if (n !== void 0 && i.reflect === !0) {
      const u = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : Ke).toAttribute(r, i.type);
      this._$Em = e, u == null ? this.removeAttribute(n) : this.setAttribute(n, u), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var l, u;
    const i = this.constructor, n = i._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const v = i.getPropertyOptions(n), f = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : Ke;
      this._$Em = n;
      const T = f.fromAttribute(r, v.type);
      this[n] = T ?? ((u = this._$Ej) == null ? void 0 : u.get(n)) ?? T, this._$Em = null;
    }
  }
  requestUpdate(e, r, i, n = !1, l) {
    var u;
    if (e !== void 0) {
      const v = this.constructor;
      if (n === !1 && (l = this[e]), i ?? (i = v.getPropertyOptions(e)), !((i.hasChanged ?? ut)(l, r) || i.useDefault && i.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(v._$Eu(e, i)))) return;
      this.C(e, r, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: i, reflect: n, wrapped: l }, u) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? r ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (r = void 0), this._$AL.set(e, r)), n === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [l, u] of n) {
        const { wrapped: v } = u, f = this[l];
        v !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, u, f);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (i = this._$EO) == null || i.forEach((n) => {
        var l;
        return (l = n.hostUpdate) == null ? void 0 : l.call(n);
      }), this.update(r)) : this._$EM();
    } catch (n) {
      throw e = !1, this._$EM(), n;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$EO) == null || r.forEach((i) => {
      var n;
      return (n = i.hostUpdated) == null ? void 0 : n.call(i);
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
re.elementStyles = [], re.shadowRootOptions = { mode: "open" }, re[ge("elementProperties")] = /* @__PURE__ */ new Map(), re[ge("finalized")] = /* @__PURE__ */ new Map(), it == null || it({ ReactiveElement: re }), (W.reactiveElementVersions ?? (W.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ee = globalThis, _t = (t) => t, et = Ee.trustedTypes, $t = et ? et.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, St = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, Mt = "?" + B, er = `<${Mt}>`, J = document, Te = () => J.createComment(""), Ae = (t) => t === null || typeof t != "object" && typeof t != "function", dt = Array.isArray, tr = (t) => dt(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", at = `[ 	
\f\r]`, we = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, wt = /-->/g, gt = />/g, Y = RegExp(`>|${at}(?:([^\\s"'>=/]+)(${at}*=${at}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Et = /'/g, Ct = /"/g, Ot = /^(?:script|style|textarea|title)$/i, rr = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), Tt = rr(1), ie = Symbol.for("lit-noChange"), V = Symbol.for("lit-nothing"), At = /* @__PURE__ */ new WeakMap(), Z = J.createTreeWalker(J, 129);
function Vt(t, e) {
  if (!dt(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return $t !== void 0 ? $t.createHTML(e) : e;
}
const ir = (t, e) => {
  const r = t.length - 1, i = [];
  let n, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = we;
  for (let v = 0; v < r; v++) {
    const f = t[v];
    let T, E, _ = -1, S = 0;
    for (; S < f.length && (u.lastIndex = S, E = u.exec(f), E !== null); ) S = u.lastIndex, u === we ? E[1] === "!--" ? u = wt : E[1] !== void 0 ? u = gt : E[2] !== void 0 ? (Ot.test(E[2]) && (n = RegExp("</" + E[2], "g")), u = Y) : E[3] !== void 0 && (u = Y) : u === Y ? E[0] === ">" ? (u = n ?? we, _ = -1) : E[1] === void 0 ? _ = -2 : (_ = u.lastIndex - E[2].length, T = E[1], u = E[3] === void 0 ? Y : E[3] === '"' ? Ct : Et) : u === Ct || u === Et ? u = Y : u === wt || u === gt ? u = we : (u = Y, n = void 0);
    const U = u === Y && t[v + 1].startsWith("/>") ? " " : "";
    l += u === we ? f + er : _ >= 0 ? (i.push(T), f.slice(0, _) + St + f.slice(_) + B + U) : f + B + (_ === -2 ? v : U);
  }
  return [Vt(t, l + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class Pe {
  constructor({ strings: e, _$litType$: r }, i) {
    let n;
    this.parts = [];
    let l = 0, u = 0;
    const v = e.length - 1, f = this.parts, [T, E] = ir(e, r);
    if (this.el = Pe.createElement(T, i), Z.currentNode = this.el.content, r === 2 || r === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (n = Z.nextNode()) !== null && f.length < v; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const _ of n.getAttributeNames()) if (_.endsWith(St)) {
          const S = E[u++], U = n.getAttribute(_).split(B), j = /([.?@])?(.*)/.exec(S);
          f.push({ type: 1, index: l, name: j[2], strings: U, ctor: j[1] === "." ? nr : j[1] === "?" ? sr : j[1] === "@" ? or : tt }), n.removeAttribute(_);
        } else _.startsWith(B) && (f.push({ type: 6, index: l }), n.removeAttribute(_));
        if (Ot.test(n.tagName)) {
          const _ = n.textContent.split(B), S = _.length - 1;
          if (S > 0) {
            n.textContent = et ? et.emptyScript : "";
            for (let U = 0; U < S; U++) n.append(_[U], Te()), Z.nextNode(), f.push({ type: 2, index: ++l });
            n.append(_[S], Te());
          }
        }
      } else if (n.nodeType === 8) if (n.data === Mt) f.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = n.data.indexOf(B, _ + 1)) !== -1; ) f.push({ type: 7, index: l }), _ += B.length - 1;
      }
      l++;
    }
  }
  static createElement(e, r) {
    const i = J.createElement("template");
    return i.innerHTML = e, i;
  }
}
function ae(t, e, r = t, i) {
  var u, v;
  if (e === ie) return e;
  let n = i !== void 0 ? (u = r._$Co) == null ? void 0 : u[i] : r._$Cl;
  const l = Ae(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== l && ((v = n == null ? void 0 : n._$AO) == null || v.call(n, !1), l === void 0 ? n = void 0 : (n = new l(t), n._$AT(t, r, i)), i !== void 0 ? (r._$Co ?? (r._$Co = []))[i] = n : r._$Cl = n), n !== void 0 && (e = ae(t, n._$AS(t, e.values), n, i)), e;
}
class ar {
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
    const { el: { content: r }, parts: i } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? J).importNode(r, !0);
    Z.currentNode = n;
    let l = Z.nextNode(), u = 0, v = 0, f = i[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let T;
        f.type === 2 ? T = new Le(l, l.nextSibling, this, e) : f.type === 1 ? T = new f.ctor(l, f.name, f.strings, this, e) : f.type === 6 && (T = new lr(l, this, e)), this._$AV.push(T), f = i[++v];
      }
      u !== (f == null ? void 0 : f.index) && (l = Z.nextNode(), u++);
    }
    return Z.currentNode = J, n;
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
  constructor(e, r, i, n) {
    this.type = 2, this._$AH = V, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = i, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
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
    e = ae(this, e, r), Ae(e) ? e === V || e == null || e === "" ? (this._$AH !== V && this._$AR(), this._$AH = V) : e !== this._$AH && e !== ie && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== V && Ae(this._$AH) ? this._$AA.nextSibling.data = e : this.T(J.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: r, _$litType$: i } = e, n = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Pe.createElement(Vt(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === n) this._$AH.p(r);
    else {
      const u = new ar(n, this), v = u.u(this.options);
      u.p(r), this.T(v), this._$AH = u;
    }
  }
  _$AC(e) {
    let r = At.get(e.strings);
    return r === void 0 && At.set(e.strings, r = new Pe(e)), r;
  }
  k(e) {
    dt(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let i, n = 0;
    for (const l of e) n === r.length ? r.push(i = new Le(this.O(Te()), this.O(Te()), this, this.options)) : i = r[n], i._$AI(l), n++;
    n < r.length && (this._$AR(i && i._$AB.nextSibling, n), r.length = n);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); e !== this._$AB; ) {
      const n = _t(e).nextSibling;
      _t(e).remove(), e = n;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cv = e, (r = this._$AP) == null || r.call(this, e));
  }
}
class tt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, i, n, l) {
    this.type = 1, this._$AH = V, this._$AN = void 0, this.element = e, this.name = r, this._$AM = n, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = V;
  }
  _$AI(e, r = this, i, n) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = ae(this, e, r, 0), u = !Ae(e) || e !== this._$AH && e !== ie, u && (this._$AH = e);
    else {
      const v = e;
      let f, T;
      for (e = l[0], f = 0; f < l.length - 1; f++) T = ae(this, v[i + f], r, f), T === ie && (T = this._$AH[f]), u || (u = !Ae(T) || T !== this._$AH[f]), T === V ? e = V : e !== V && (e += (T ?? "") + l[f + 1]), this._$AH[f] = T;
    }
    u && !n && this.j(e);
  }
  j(e) {
    e === V ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class nr extends tt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === V ? void 0 : e;
  }
}
class sr extends tt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== V);
  }
}
class or extends tt {
  constructor(e, r, i, n, l) {
    super(e, r, i, n, l), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = ae(this, e, r, 0) ?? V) === ie) return;
    const i = this._$AH, n = e === V && i !== V || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== V && (i === V || n);
    n && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class lr {
  constructor(e, r, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ae(this, e);
  }
}
const nt = Ee.litHtmlPolyfillSupport;
nt == null || nt(Pe, Le), (Ee.litHtmlVersions ?? (Ee.litHtmlVersions = [])).push("3.3.3");
const ur = (t, e, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? e;
  let n = i._$litPart$;
  if (n === void 0) {
    const l = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = n = new Le(e.insertBefore(Te(), l), l, void 0, r ?? {});
  }
  return n._$AI(t), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis;
class Ce extends re {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ur(r, this.renderRoot, this.renderOptions);
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
    return ie;
  }
}
var Pt;
Ce._$litElement$ = !0, Ce.finalized = !0, (Pt = q.litElementHydrateSupport) == null || Pt.call(q, { LitElement: Ce });
const st = q.litElementPolyfillSupport;
st == null || st({ LitElement: Ce });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: Ke, reflect: !1, hasChanged: ut }, hr = (t = dr, e, r) => {
  const { kind: i, metadata: n } = r;
  let l = globalThis.litPropertyMetadata.get(n);
  if (l === void 0 && globalThis.litPropertyMetadata.set(n, l = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), l.set(r.name, t), i === "accessor") {
    const { name: u } = r;
    return { set(v) {
      const f = e.get.call(this);
      e.set.call(this, v), this.requestUpdate(u, f, t, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(u, void 0, t, v), v;
    } };
  }
  if (i === "setter") {
    const { name: u } = r;
    return function(v) {
      const f = this[u];
      e.call(this, v), this.requestUpdate(u, f, t, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function N(t) {
  return (e, r) => typeof r == "object" ? hr(t, e, r) : ((i, n, l) => {
    const u = n.hasOwnProperty(l);
    return n.constructor.createProperty(l, i), u ? Object.getOwnPropertyDescriptor(n, l) : void 0;
  })(t, e, r);
}
var pr = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, C = (t, e, r, i) => {
  for (var n = i > 1 ? void 0 : i ? cr(e, r) : e, l = t.length - 1, u; l >= 0; l--)
    (u = t[l]) && (n = (i ? u(e, r, n) : u(n)) || n);
  return i && n && pr(e, r, n), n;
};
function I(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let g = class extends Ce {
  constructor() {
    super(...arguments), this.item1Label = "Gender", this.item1Value = "Female", this.item2Label = "Birthday", this.item2Value = "Feb 24th, 1997", this.item3Label = "Phone Number", this.item3Value = "(239) 555-0108", this.item4Label = "Street Address", this.item4Value = "Jl. Diponegoro No. 21", this.item5Label = "City", this.item5Value = "Cilacap", this.item6Label = "ZIP Code", this.item6Value = "655849", this.item7Label = "Member Status", this.item7Value = "Active Member", this.item8Label = "Registered Date", this.item8Value = "Feb 24th, 1997";
  }
  static getStudioTemplate(t) {
    var ne, Se, Me, Oe, Ve, Re, xe, Ie, ke, Ne, Ue, De, He, se, K, oe, le, ue, de, he, pe, b, z, je, P, ze, Fe, ce, Ge, D, fe, X, me, Be, ee, ye, be, ve, _e, $e, te, We, Xe, Ye, Ze, G, qe, Je;
    if (!t)
      return {
        kind: "generic",
        templateHtml: "<zero-metadata-card-1.0.0></zero-metadata-card-1.0.0>"
      };
    const e = I(((ne = t == null ? void 0 : t.props) == null ? void 0 : ne.item1Label) ?? ((Me = (Se = t == null ? void 0 : t.studio) == null ? void 0 : Se.props) == null ? void 0 : Me.item1Label) ?? "Gender"), r = I(((Oe = t == null ? void 0 : t.props) == null ? void 0 : Oe.item1Value) ?? ((Re = (Ve = t == null ? void 0 : t.studio) == null ? void 0 : Ve.props) == null ? void 0 : Re.item1Value) ?? "Female"), i = I(((xe = t == null ? void 0 : t.props) == null ? void 0 : xe.item2Label) ?? ((ke = (Ie = t == null ? void 0 : t.studio) == null ? void 0 : Ie.props) == null ? void 0 : ke.item2Label) ?? "Birthday"), n = I(((Ne = t == null ? void 0 : t.props) == null ? void 0 : Ne.item2Value) ?? ((De = (Ue = t == null ? void 0 : t.studio) == null ? void 0 : Ue.props) == null ? void 0 : De.item2Value) ?? "Feb 24th, 1997"), l = I(((He = t == null ? void 0 : t.props) == null ? void 0 : He.item3Label) ?? ((K = (se = t == null ? void 0 : t.studio) == null ? void 0 : se.props) == null ? void 0 : K.item3Label) ?? "Phone Number"), u = I(((oe = t == null ? void 0 : t.props) == null ? void 0 : oe.item3Value) ?? ((ue = (le = t == null ? void 0 : t.studio) == null ? void 0 : le.props) == null ? void 0 : ue.item3Value) ?? "(239) 555-0108"), v = I(((de = t == null ? void 0 : t.props) == null ? void 0 : de.item4Label) ?? ((pe = (he = t == null ? void 0 : t.studio) == null ? void 0 : he.props) == null ? void 0 : pe.item4Label) ?? "Street Address"), f = I(((b = t == null ? void 0 : t.props) == null ? void 0 : b.item4Value) ?? ((je = (z = t == null ? void 0 : t.studio) == null ? void 0 : z.props) == null ? void 0 : je.item4Value) ?? "Jl. Diponegoro No. 21"), T = I(((P = t == null ? void 0 : t.props) == null ? void 0 : P.item5Label) ?? ((Fe = (ze = t == null ? void 0 : t.studio) == null ? void 0 : ze.props) == null ? void 0 : Fe.item5Label) ?? "City"), E = I(((ce = t == null ? void 0 : t.props) == null ? void 0 : ce.item5Value) ?? ((D = (Ge = t == null ? void 0 : t.studio) == null ? void 0 : Ge.props) == null ? void 0 : D.item5Value) ?? "Cilacap"), _ = I(((fe = t == null ? void 0 : t.props) == null ? void 0 : fe.item6Label) ?? ((me = (X = t == null ? void 0 : t.studio) == null ? void 0 : X.props) == null ? void 0 : me.item6Label) ?? "ZIP Code"), S = I(((Be = t == null ? void 0 : t.props) == null ? void 0 : Be.item6Value) ?? ((ye = (ee = t == null ? void 0 : t.studio) == null ? void 0 : ee.props) == null ? void 0 : ye.item6Value) ?? "655849"), U = I(((be = t == null ? void 0 : t.props) == null ? void 0 : be.item7Label) ?? ((_e = (ve = t == null ? void 0 : t.studio) == null ? void 0 : ve.props) == null ? void 0 : _e.item7Label) ?? "Member Status"), j = I((($e = t == null ? void 0 : t.props) == null ? void 0 : $e.item7Value) ?? ((We = (te = t == null ? void 0 : t.studio) == null ? void 0 : te.props) == null ? void 0 : We.item7Value) ?? "Active Member"), F = I(((Xe = t == null ? void 0 : t.props) == null ? void 0 : Xe.item8Label) ?? ((Ze = (Ye = t == null ? void 0 : t.studio) == null ? void 0 : Ye.props) == null ? void 0 : Ze.item8Label) ?? "Registered Date"), Q = I(((G = t == null ? void 0 : t.props) == null ? void 0 : G.item8Value) ?? ((Je = (qe = t == null ? void 0 : t.studio) == null ? void 0 : qe.props) == null ? void 0 : Je.item8Value) ?? "Feb 24th, 1997");
    return {
      kind: "generic",
      templateHtml: `
        <zero-metadata-card-1.0.0
          item1-label="${e}"
          item1-value="${r}"
          item2-label="${i}"
          item2-value="${n}"
          item3-label="${l}"
          item3-value="${u}"
          item4-label="${v}"
          item4-value="${f}"
          item5-label="${T}"
          item5-value="${E}"
          item6-label="${_}"
          item6-value="${S}"
          item7-label="${U}"
          item7-value="${j}"
          item8-label="${F}"
          item8-value="${Q}"
        ></zero-metadata-card-1.0.0>
      `
    };
  }
  get item1LabelConfig() {
    return this.item1Label;
  }
  set item1LabelConfig(t) {
    this.item1Label = t;
  }
  get item1ValueConfig() {
    return this.item1Value;
  }
  set item1ValueConfig(t) {
    this.item1Value = t;
  }
  get item2LabelConfig() {
    return this.item2Label;
  }
  set item2LabelConfig(t) {
    this.item2Label = t;
  }
  get item2ValueConfig() {
    return this.item2Value;
  }
  set item2ValueConfig(t) {
    this.item2Value = t;
  }
  get item3LabelConfig() {
    return this.item3Label;
  }
  set item3LabelConfig(t) {
    this.item3Label = t;
  }
  get item3ValueConfig() {
    return this.item3Value;
  }
  set item3ValueConfig(t) {
    this.item3Value = t;
  }
  get item4LabelConfig() {
    return this.item4Label;
  }
  set item4LabelConfig(t) {
    this.item4Label = t;
  }
  get item4ValueConfig() {
    return this.item4Value;
  }
  set item4ValueConfig(t) {
    this.item4Value = t;
  }
  get item5LabelConfig() {
    return this.item5Label;
  }
  set item5LabelConfig(t) {
    this.item5Label = t;
  }
  get item5ValueConfig() {
    return this.item5Value;
  }
  set item5ValueConfig(t) {
    this.item5Value = t;
  }
  get item6LabelConfig() {
    return this.item6Label;
  }
  set item6LabelConfig(t) {
    this.item6Label = t;
  }
  get item6ValueConfig() {
    return this.item6Value;
  }
  set item6ValueConfig(t) {
    this.item6Value = t;
  }
  get item7LabelConfig() {
    return this.item7Label;
  }
  set item7LabelConfig(t) {
    this.item7Label = t;
  }
  get item7ValueConfig() {
    return this.item7Value;
  }
  set item7ValueConfig(t) {
    this.item7Value = t;
  }
  get item8LabelConfig() {
    return this.item8Label;
  }
  set item8LabelConfig(t) {
    this.item8Label = t;
  }
  get item8ValueConfig() {
    return this.item8Value;
  }
  set item8ValueConfig(t) {
    this.item8Value = t;
  }
  render() {
    const t = [
      { label: this.item1Label, value: this.item1Value },
      { label: this.item2Label, value: this.item2Value },
      { label: this.item3Label, value: this.item3Value },
      { label: this.item4Label, value: this.item4Value },
      { label: this.item5Label, value: this.item5Value },
      { label: this.item6Label, value: this.item6Value },
      { label: this.item7Label, value: this.item7Value },
      { label: this.item8Label, value: this.item8Value }
    ];
    return Tt`
      <div class="card">
        <div class="grid">
          ${t.map((e) => Tt`
            <div class="item">
              <div class="label">${e.label}</div>
              <div class="val">${e.value}</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
};
g.styles = Bt`
    :host {
      display: block;
      width: 100%;
    }
    .card {
      padding: 24px;
      border-radius: 16px;
      background: var(--uiv-surface-color, #ffffff);
      border: 1px solid var(--uiv-border-color, rgba(0, 0, 0, 0.05));
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      font-family: inherit;
      box-sizing: border-box;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px 20px;
    }
    @media (max-width: 600px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 400px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
    .item {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .label {
      font-size: 0.75rem;
      color: var(--uiv-text-muted, #94a3b8);
      font-weight: 500;
      text-transform: capitalize;
    }
    .val {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--uiv-text-color, #1e293b);
      word-break: break-word;
    }

    @media (max-width: 768px) {
      .card {
        padding: 16px;
      }
      .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px 12px;
      }
      .label {
        font-size: 0.7rem;
      }
      .val {
        font-size: 0.8rem;
      }
    }
  `;
C([
  N({ type: String, attribute: "item1-label" })
], g.prototype, "item1Label", 2);
C([
  N({ type: String, attribute: "item1-value" })
], g.prototype, "item1Value", 2);
C([
  N({ type: String, attribute: "item2-label" })
], g.prototype, "item2Label", 2);
C([
  N({ type: String, attribute: "item2-value" })
], g.prototype, "item2Value", 2);
C([
  N({ type: String, attribute: "item3-label" })
], g.prototype, "item3Label", 2);
C([
  N({ type: String, attribute: "item3-value" })
], g.prototype, "item3Value", 2);
C([
  N({ type: String, attribute: "item4-label" })
], g.prototype, "item4Label", 2);
C([
  N({ type: String, attribute: "item4-value" })
], g.prototype, "item4Value", 2);
C([
  N({ type: String, attribute: "item5-label" })
], g.prototype, "item5Label", 2);
C([
  N({ type: String, attribute: "item5-value" })
], g.prototype, "item5Value", 2);
C([
  N({ type: String, attribute: "item6-label" })
], g.prototype, "item6Label", 2);
C([
  N({ type: String, attribute: "item6-value" })
], g.prototype, "item6Value", 2);
C([
  N({ type: String, attribute: "item7-label" })
], g.prototype, "item7Label", 2);
C([
  N({ type: String, attribute: "item7-value" })
], g.prototype, "item7Value", 2);
C([
  N({ type: String, attribute: "item8-label" })
], g.prototype, "item8Label", 2);
C([
  N({ type: String, attribute: "item8-value" })
], g.prototype, "item8Value", 2);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 1 Label",
    fieldMappings: "item1Label",
    categoryLabel: "Item 1",
    initialValue: "Gender"
  })
], g.prototype, "item1LabelConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 1 Value",
    fieldMappings: "item1Value",
    categoryLabel: "Item 1",
    initialValue: "Female"
  })
], g.prototype, "item1ValueConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 2 Label",
    fieldMappings: "item2Label",
    categoryLabel: "Item 2",
    initialValue: "Birthday"
  })
], g.prototype, "item2LabelConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 2 Value",
    fieldMappings: "item2Value",
    categoryLabel: "Item 2",
    initialValue: "Feb 24th, 1997"
  })
], g.prototype, "item2ValueConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 3 Label",
    fieldMappings: "item3Label",
    categoryLabel: "Item 3",
    initialValue: "Phone Number"
  })
], g.prototype, "item3LabelConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 3 Value",
    fieldMappings: "item3Value",
    categoryLabel: "Item 3",
    initialValue: "(239) 555-0108"
  })
], g.prototype, "item3ValueConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 4 Label",
    fieldMappings: "item4Label",
    categoryLabel: "Item 4",
    initialValue: "Street Address"
  })
], g.prototype, "item4LabelConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 4 Value",
    fieldMappings: "item4Value",
    categoryLabel: "Item 4",
    initialValue: "Jl. Diponegoro No. 21"
  })
], g.prototype, "item4ValueConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 5 Label",
    fieldMappings: "item5Label",
    categoryLabel: "Item 5",
    initialValue: "City"
  })
], g.prototype, "item5LabelConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 5 Value",
    fieldMappings: "item5Value",
    categoryLabel: "Item 5",
    initialValue: "Cilacap"
  })
], g.prototype, "item5ValueConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 6 Label",
    fieldMappings: "item6Label",
    categoryLabel: "Item 6",
    initialValue: "ZIP Code"
  })
], g.prototype, "item6LabelConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 6 Value",
    fieldMappings: "item6Value",
    categoryLabel: "Item 6",
    initialValue: "655849"
  })
], g.prototype, "item6ValueConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 7 Label",
    fieldMappings: "item7Label",
    categoryLabel: "Item 7",
    initialValue: "Member Status"
  })
], g.prototype, "item7LabelConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 7 Value",
    fieldMappings: "item7Value",
    categoryLabel: "Item 7",
    initialValue: "Active Member"
  })
], g.prototype, "item7ValueConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 8 Label",
    fieldMappings: "item8Label",
    categoryLabel: "Item 8",
    initialValue: "Registered Date"
  })
], g.prototype, "item8LabelConfig", 1);
C([
  k({
    attributeType: x.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Item 8 Value",
    fieldMappings: "item8Value",
    categoryLabel: "Item 8",
    initialValue: "Feb 24th, 1997"
  })
], g.prototype, "item8ValueConfig", 1);
g = C([
  Ht({
    name: "zero-metadata-card",
    version: "1.0.0",
    title: "Metadata Card",
    elementSelector: "zero-metadata-card",
    group: "Dashboard",
    iconName: "card-icon.png"
  }),
  jt()
], g);
export {
  g as ZeroMetadataCard
};
