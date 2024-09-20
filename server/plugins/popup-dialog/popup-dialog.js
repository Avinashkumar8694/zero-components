var Re = Object.defineProperty;
var Ue = (i, t, e) => t in i ? Re(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var Dt = (i, t, e) => Ue(i, typeof t != "symbol" ? t + "" : t, e);
var zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Lt;
(function(i) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof zt == "object" ? zt : typeof self == "object" ? self : typeof this == "object" ? this : w(), r = o(i);
    typeof e.Reflect < "u" && (r = o(e.Reflect, r)), t(r, e), typeof e.Reflect > "u" && (e.Reflect = i);
    function o(v, b) {
      return function(A, $) {
        Object.defineProperty(v, A, { configurable: !0, writable: !0, value: $ }), b && b(A, $);
      };
    }
    function u() {
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
    function w() {
      return u() || l();
    }
  })(function(t, e) {
    var r = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", w = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, b = !w && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: w ? function() {
        return ht(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ht({ __proto__: null });
      } : function() {
        return ht({});
      },
      has: b ? function(n, s) {
        return r.call(n, s);
      } : function(n, s) {
        return s in n;
      },
      get: b ? function(n, s) {
        return r.call(n, s) ? n[s] : void 0;
      } : function(n, s) {
        return n[s];
      }
    }, $ = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pe(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Te(), U = typeof WeakMap == "function" ? WeakMap : xe(), L = o ? Symbol.for("@reflect-metadata:registry") : void 0, et = Se(), bt = Oe(et);
    function ae(n, s, a, c) {
      if (_(a)) {
        if (!kt(n))
          throw new TypeError();
        if (!Ct(s))
          throw new TypeError();
        return _e(n, s);
      } else {
        if (!kt(n))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(c) && !_(c) && !B(c))
          throw new TypeError();
        return B(c) && (c = void 0), a = R(a), me(n, s, a, c);
      }
    }
    t("decorate", ae);
    function le(n, s) {
      function a(c, y) {
        if (!O(c))
          throw new TypeError();
        if (!_(y) && !Ae(y))
          throw new TypeError();
        Ot(n, s, c, y);
      }
      return a;
    }
    t("metadata", le);
    function ue(n, s, a, c) {
      if (!O(a))
        throw new TypeError();
      return _(c) || (c = R(c)), Ot(n, s, a, c);
    }
    t("defineMetadata", ue);
    function ce(n, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = R(a)), At(n, s, a);
    }
    t("hasMetadata", ce);
    function he(n, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = R(a)), lt(n, s, a);
    }
    t("hasOwnMetadata", he);
    function de(n, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = R(a)), Et(n, s, a);
    }
    t("getMetadata", de);
    function pe(n, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = R(a)), St(n, s, a);
    }
    t("getOwnMetadata", pe);
    function fe(n, s) {
      if (!O(n))
        throw new TypeError();
      return _(s) || (s = R(s)), Mt(n, s);
    }
    t("getMetadataKeys", fe);
    function ye(n, s) {
      if (!O(n))
        throw new TypeError();
      return _(s) || (s = R(s)), Pt(n, s);
    }
    t("getOwnMetadataKeys", ye);
    function ve(n, s, a) {
      if (!O(s))
        throw new TypeError();
      if (_(a) || (a = R(a)), !O(s))
        throw new TypeError();
      _(a) || (a = R(a));
      var c = F(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(n, s, a);
    }
    t("deleteMetadata", ve);
    function _e(n, s) {
      for (var a = n.length - 1; a >= 0; --a) {
        var c = n[a], y = c(s);
        if (!_(y) && !B(y)) {
          if (!Ct(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function me(n, s, a, c) {
      for (var y = n.length - 1; y >= 0; --y) {
        var P = n[y], M = P(s, a, c);
        if (!_(M) && !B(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function At(n, s, a) {
      var c = lt(n, s, a);
      if (c)
        return !0;
      var y = ct(s);
      return B(y) ? !1 : At(n, y, a);
    }
    function lt(n, s, a) {
      var c = F(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : xt(c.OrdinaryHasOwnMetadata(n, s, a));
    }
    function Et(n, s, a) {
      var c = lt(n, s, a);
      if (c)
        return St(n, s, a);
      var y = ct(s);
      if (!B(y))
        return Et(n, y, a);
    }
    function St(n, s, a) {
      var c = F(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(n, s, a);
    }
    function Ot(n, s, a, c) {
      var y = F(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(n, s, a, c);
    }
    function Mt(n, s) {
      var a = Pt(n, s), c = ct(n);
      if (c === null)
        return a;
      var y = Mt(c, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new k(), M = [], m = 0, h = a; m < h.length; m++) {
        var d = h[m], p = P.has(d);
        p || (P.add(d), M.push(d));
      }
      for (var f = 0, g = y; f < g.length; f++) {
        var d = g[f], p = P.has(d);
        p || (P.add(d), M.push(d));
      }
      return M;
    }
    function Pt(n, s) {
      var a = F(
        n,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, s) : [];
    }
    function Tt(n) {
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
    function B(n) {
      return n === null;
    }
    function ge(n) {
      return typeof n == "symbol";
    }
    function O(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function we(n, s) {
      switch (Tt(n)) {
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
      var a = "string", c = Rt(n, u);
      if (c !== void 0) {
        var y = c.call(n, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return $e(n);
    }
    function $e(n, s) {
      var a, c;
      {
        var y = n.toString;
        if (rt(y)) {
          var c = y.call(n);
          if (!O(c))
            return c;
        }
        var a = n.valueOf;
        if (rt(a)) {
          var c = a.call(n);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function xt(n) {
      return !!n;
    }
    function be(n) {
      return "" + n;
    }
    function R(n) {
      var s = we(n);
      return ge(s) ? s : be(s);
    }
    function kt(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function rt(n) {
      return typeof n == "function";
    }
    function Ct(n) {
      return typeof n == "function";
    }
    function Ae(n) {
      switch (Tt(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ut(n, s) {
      return n === s || n !== n && s !== s;
    }
    function Rt(n, s) {
      var a = n[s];
      if (a != null) {
        if (!rt(a))
          throw new TypeError();
        return a;
      }
    }
    function Ut(n) {
      var s = Rt(n, l);
      if (!rt(s))
        throw new TypeError();
      var a = s.call(n);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Nt(n) {
      return n.value;
    }
    function jt(n) {
      var s = n.next();
      return s.done ? !1 : s;
    }
    function It(n) {
      var s = n.return;
      s && s.call(n);
    }
    function ct(n) {
      var s = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === $ || s !== $)
        return s;
      var a = n.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === n ? s : y;
    }
    function Ee() {
      var n;
      !_(L) && typeof e.Reflect < "u" && !(L in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (n = Me(e.Reflect));
      var s, a, c, y = new U(), P = {
        registerProvider: M,
        getProvider: h,
        setProvider: p
      };
      return P;
      function M(f) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === f:
            break;
          case _(s):
            s = f;
            break;
          case s === f:
            break;
          case _(a):
            a = f;
            break;
          case a === f:
            break;
          default:
            c === void 0 && (c = new k()), c.add(f);
            break;
        }
      }
      function m(f, g) {
        if (!_(s)) {
          if (s.isProviderFor(f, g))
            return s;
          if (!_(a)) {
            if (a.isProviderFor(f, g))
              return s;
            if (!_(c))
              for (var E = Ut(c); ; ) {
                var S = jt(E);
                if (!S)
                  return;
                var C = Nt(S);
                if (C.isProviderFor(f, g))
                  return It(E), C;
              }
          }
        }
        if (!_(n) && n.isProviderFor(f, g))
          return n;
      }
      function h(f, g) {
        var E = y.get(f), S;
        return _(E) || (S = E.get(g)), _(S) && (S = m(f, g), _(S) || (_(E) && (E = new x(), y.set(f, E)), E.set(g, S))), S;
      }
      function d(f) {
        if (_(f))
          throw new TypeError();
        return s === f || a === f || !_(c) && c.has(f);
      }
      function p(f, g, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = h(f, g);
        if (S !== E) {
          if (!_(S))
            return !1;
          var C = y.get(f);
          _(C) && (C = new x(), y.set(f, C)), C.set(g, E);
        }
        return !0;
      }
    }
    function Se() {
      var n;
      return !_(L) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (n = e.Reflect[L]), _(n) && (n = Ee()), !_(L) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Oe(n) {
      var s = new U(), a = {
        isProviderFor: function(d, p) {
          var f = s.get(d);
          return _(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: h
      };
      return et.registerProvider(a), a;
      function c(d, p, f) {
        var g = s.get(d), E = !1;
        if (_(g)) {
          if (!f)
            return;
          g = new x(), s.set(d, g), E = !0;
        }
        var S = g.get(p);
        if (_(S)) {
          if (!f)
            return;
          if (S = new x(), g.set(p, S), !n.setProvider(d, p, a))
            throw g.delete(p), E && s.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(d, p, f) {
        var g = c(
          p,
          f,
          /*Create*/
          !1
        );
        return _(g) ? !1 : xt(g.has(d));
      }
      function P(d, p, f) {
        var g = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (!_(g))
          return g.get(d);
      }
      function M(d, p, f, g) {
        var E = c(
          f,
          g,
          /*Create*/
          !0
        );
        E.set(d, p);
      }
      function m(d, p) {
        var f = [], g = c(
          d,
          p,
          /*Create*/
          !1
        );
        if (_(g))
          return f;
        for (var E = g.keys(), S = Ut(E), C = 0; ; ) {
          var Ht = jt(S);
          if (!Ht)
            return f.length = C, f;
          var ke = Nt(Ht);
          try {
            f[C] = ke;
          } catch (Ce) {
            try {
              It(S);
            } finally {
              throw Ce;
            }
          }
          C++;
        }
      }
      function h(d, p, f) {
        var g = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (_(g) || !g.delete(d))
          return !1;
        if (g.size === 0) {
          var E = s.get(p);
          _(E) || (E.delete(f), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Me(n) {
      var s = n.defineMetadata, a = n.hasOwnMetadata, c = n.getOwnMetadata, y = n.getOwnMetadataKeys, P = n.deleteMetadata, M = new U(), m = {
        isProviderFor: function(h, d) {
          var p = M.get(h);
          return !_(p) && p.has(d) ? !0 : y(h, d).length ? (_(p) && (p = new k(), M.set(h, p)), p.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function F(n, s, a) {
      var c = et.getProvider(n, s);
      if (!_(c))
        return c;
      if (a) {
        if (et.setProvider(n, s, bt))
          return bt;
        throw new Error("Illegal state.");
      }
    }
    function Pe() {
      var n = {}, s = [], a = (
        /** @class */
        function() {
          function m(h, d, p) {
            this._index = 0, this._keys = h, this._values = d, this._selector = p;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[l] = function() {
            return this;
          }, m.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), h;
          }, m.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: h, done: !0 };
          }, m;
        }()
      ), c = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, m.prototype.set = function(h, d) {
            var p = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[p] = d, this;
          }, m.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var p = this._keys.length, f = d + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, ut(h, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[l] = function() {
            return this.entries();
          }, m.prototype._find = function(h, d) {
            if (!ut(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (ut(this._keys[p], h)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return c;
      function y(m, h) {
        return m;
      }
      function P(m, h) {
        return h;
      }
      function M(m, h) {
        return [m, h];
      }
    }
    function Te() {
      var n = (
        /** @class */
        function() {
          function s() {
            this._map = new x();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(a) {
            return this._map.has(a);
          }, s.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, s.prototype.delete = function(a) {
            return this._map.delete(a);
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
          }, s.prototype[l] = function() {
            return this.keys();
          }, s;
        }()
      );
      return n;
    }
    function xe() {
      var n = 16, s = A.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(d) {
            var p = y(
              d,
              /*create*/
              !1
            );
            return p !== void 0 ? A.has(p, this._key) : !1;
          }, h.prototype.get = function(d) {
            var p = y(
              d,
              /*create*/
              !1
            );
            return p !== void 0 ? A.get(p, this._key) : void 0;
          }, h.prototype.set = function(d, p) {
            var f = y(
              d,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
          }, h.prototype.delete = function(d) {
            var p = y(
              d,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = c();
          }, h;
        }()
      );
      function c() {
        var h;
        do
          h = "@@WeakMap@@" + m();
        while (A.has(s, h));
        return s[h] = !0, h;
      }
      function y(h, d) {
        if (!r.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: A.create() });
        }
        return h[a];
      }
      function P(h, d) {
        for (var p = 0; p < d; ++p)
          h[p] = Math.random() * 255 | 0;
        return h;
      }
      function M(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : P(d, h), d;
        }
        return P(new Array(h), h);
      }
      function m() {
        var h = M(n);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", p = 0; p < n; ++p) {
          var f = h[p];
          (p === 4 || p === 6 || p === 8) && (d += "-"), f < 16 && (d += "0"), d += f.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function ht(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Lt || (Lt = {}));
function Ne(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function je(i) {
  return function(t) {
    if (Ne(i)) {
      const e = {
        version: i.version,
        name: i.name,
        title: i.title,
        selector: i.elementSelector,
        category: i.group,
        icon: i.iconName
      };
      Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements ? customElements.define(`${i.elementSelector}-${i.version}`, t) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: this
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Ie(i) {
  return je(i);
}
function He(i) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Dt(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(u) {
        try {
          super.update(u);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var v;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), w = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && w) {
          const b = new CSSStyleSheet(), A = (v = u.sheet) == null ? void 0 : v.cssRules;
          A && (Array.from(A).forEach(($) => b.insertRule($.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, b]);
        } else if (u) {
          const b = u.cloneNode(!0);
          this.shadowRoot.appendChild(b);
        }
        l.forEach((b) => {
          const A = b.cloneNode(!0);
          this.shadowRoot.appendChild(A);
        });
      }
    }
    return e;
  };
}
var Bt;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select";
})(Bt || (Bt = {}));
var Gt;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(Gt || (Gt = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt = globalThis, _t = nt.ShadowRoot && (nt.ShadyCSS === void 0 || nt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, mt = Symbol(), Wt = /* @__PURE__ */ new WeakMap();
let ee = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== mt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (_t && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = Wt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Wt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const De = (i) => new ee(typeof i == "string" ? i : i + "", void 0, mt), ze = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((r, o, u) => r + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[u + 1], i[0]);
  return new ee(e, i, mt);
}, Le = (i, t) => {
  if (_t) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), o = nt.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = e.cssText, i.appendChild(r);
  }
}, Vt = _t ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return De(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Be, defineProperty: Ge, getOwnPropertyDescriptor: We, getOwnPropertyNames: Ve, getOwnPropertySymbols: Fe, getPrototypeOf: qe } = Object, j = globalThis, Ft = j.trustedTypes, Ze = Ft ? Ft.emptyScript : "", dt = j.reactiveElementPolyfillSupport, Z = (i, t) => i, it = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Ze : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, gt = (i, t) => !Be(i, t), qt = { attribute: !0, type: String, converter: it, reflect: !1, hasChanged: gt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class G extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = qt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(t, r, e);
      o !== void 0 && Ge(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: o, set: u } = We(this.prototype, t) ?? { get() {
      return this[e];
    }, set(l) {
      this[e] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const w = o == null ? void 0 : o.call(this);
      u.call(this, l), this.requestUpdate(t, w, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? qt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Z("elementProperties"))) return;
    const t = qe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Z("properties"))) {
      const e = this.properties, r = [...Ve(e), ...Fe(e)];
      for (const o of r) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, o] of e) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const o = this._$Eu(e, r);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const o of r) e.unshift(Vt(o));
    } else t !== void 0 && e.push(Vt(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Le(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$EC(t, e) {
    var u;
    const r = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, r);
    if (o !== void 0 && r.reflect === !0) {
      const l = (((u = r.converter) == null ? void 0 : u.toAttribute) !== void 0 ? r.converter : it).toAttribute(e, r.type);
      this._$Em = t, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var u;
    const r = this.constructor, o = r._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const l = r.getPropertyOptions(o), w = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : it;
      this._$Em = o, this[o] = w.fromAttribute(e, l.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, r) {
    if (t !== void 0) {
      if (r ?? (r = this.constructor.getPropertyOptions(t)), !(r.hasChanged ?? gt)(this[t], e)) return;
      this.P(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, r) {
    this._$AL.has(t) || this._$AL.set(t, e), r.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [u, l] of this._$Ep) this[u] = l;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [u, l] of o) l.wrapped !== !0 || this._$AL.has(u) || this[u] === void 0 || this.P(u, this[u], l);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((o) => {
        var u;
        return (u = o.hostUpdate) == null ? void 0 : u.call(o);
      }), this.update(e)) : this._$EU();
    } catch (o) {
      throw t = !1, this._$EU(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var o;
      return (o = r.hostUpdated) == null ? void 0 : o.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
G.elementStyles = [], G.shadowRootOptions = { mode: "open" }, G[Z("elementProperties")] = /* @__PURE__ */ new Map(), G[Z("finalized")] = /* @__PURE__ */ new Map(), dt == null || dt({ ReactiveElement: G }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, ot = Y.trustedTypes, Zt = ot ? ot.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, re = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, ne = "?" + N, Ye = `<${ne}>`, D = document, J = () => D.createComment(""), Q = (i) => i === null || typeof i != "object" && typeof i != "function", wt = Array.isArray, Xe = (i) => wt(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", pt = `[ 	
\f\r]`, q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Yt = /-->/g, Xt = />/g, I = RegExp(`>|${pt}(?:([^\\s"'>=/]+)(${pt}*=${pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Jt = /'/g, Qt = /"/g, ie = /^(?:script|style|textarea|title)$/i, Je = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), ft = Je(1), z = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), Kt = /* @__PURE__ */ new WeakMap(), H = D.createTreeWalker(D, 129);
function oe(i, t) {
  if (!wt(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Zt !== void 0 ? Zt.createHTML(t) : t;
}
const Qe = (i, t) => {
  const e = i.length - 1, r = [];
  let o, u = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", l = q;
  for (let w = 0; w < e; w++) {
    const v = i[w];
    let b, A, $ = -1, x = 0;
    for (; x < v.length && (l.lastIndex = x, A = l.exec(v), A !== null); ) x = l.lastIndex, l === q ? A[1] === "!--" ? l = Yt : A[1] !== void 0 ? l = Xt : A[2] !== void 0 ? (ie.test(A[2]) && (o = RegExp("</" + A[2], "g")), l = I) : A[3] !== void 0 && (l = I) : l === I ? A[0] === ">" ? (l = o ?? q, $ = -1) : A[1] === void 0 ? $ = -2 : ($ = l.lastIndex - A[2].length, b = A[1], l = A[3] === void 0 ? I : A[3] === '"' ? Qt : Jt) : l === Qt || l === Jt ? l = I : l === Yt || l === Xt ? l = q : (l = I, o = void 0);
    const k = l === I && i[w + 1].startsWith("/>") ? " " : "";
    u += l === q ? v + Ye : $ >= 0 ? (r.push(b), v.slice(0, $) + re + v.slice($) + N + k) : v + N + ($ === -2 ? w : k);
  }
  return [oe(i, u + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class K {
  constructor({ strings: t, _$litType$: e }, r) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const w = t.length - 1, v = this.parts, [b, A] = Qe(t, e);
    if (this.el = K.createElement(b, r), H.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = H.nextNode()) !== null && v.length < w; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(re)) {
          const x = A[l++], k = o.getAttribute($).split(N), U = /([.?@])?(.*)/.exec(x);
          v.push({ type: 1, index: u, name: U[2], strings: k, ctor: U[1] === "." ? tr : U[1] === "?" ? er : U[1] === "@" ? rr : st }), o.removeAttribute($);
        } else $.startsWith(N) && (v.push({ type: 6, index: u }), o.removeAttribute($));
        if (ie.test(o.tagName)) {
          const $ = o.textContent.split(N), x = $.length - 1;
          if (x > 0) {
            o.textContent = ot ? ot.emptyScript : "";
            for (let k = 0; k < x; k++) o.append($[k], J()), H.nextNode(), v.push({ type: 2, index: ++u });
            o.append($[x], J());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ne) v.push({ type: 2, index: u });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(N, $ + 1)) !== -1; ) v.push({ type: 7, index: u }), $ += N.length - 1;
      }
      u++;
    }
  }
  static createElement(t, e) {
    const r = D.createElement("template");
    return r.innerHTML = t, r;
  }
}
function W(i, t, e = i, r) {
  var l, w;
  if (t === z) return t;
  let o = r !== void 0 ? (l = e.o) == null ? void 0 : l[r] : e.l;
  const u = Q(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((w = o == null ? void 0 : o._$AO) == null || w.call(o, !1), u === void 0 ? o = void 0 : (o = new u(i), o._$AT(i, e, r)), r !== void 0 ? (e.o ?? (e.o = []))[r] = o : e.l = o), o !== void 0 && (t = W(i, o._$AS(i, t.values), o, r)), t;
}
class Ke {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: r } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? D).importNode(e, !0);
    H.currentNode = o;
    let u = H.nextNode(), l = 0, w = 0, v = r[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let b;
        v.type === 2 ? b = new tt(u, u.nextSibling, this, t) : v.type === 1 ? b = new v.ctor(u, v.name, v.strings, this, t) : v.type === 6 && (b = new nr(u, this, t)), this._$AV.push(b), v = r[++w];
      }
      l !== (v == null ? void 0 : v.index) && (u = H.nextNode(), l++);
    }
    return H.currentNode = D, o;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class tt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this.v;
  }
  constructor(t, e, r, o) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = W(this, t, e), Q(t) ? t === T || t == null || t === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Xe(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== T && Q(this._$AH) ? this._$AA.nextSibling.data = t : this.T(D.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var u;
    const { values: e, _$litType$: r } = t, o = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = K.createElement(oe(r.h, r.h[0]), this.options)), r);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(e);
    else {
      const l = new Ke(o, this), w = l.u(this.options);
      l.p(e), this.T(w), this._$AH = l;
    }
  }
  _$AC(t) {
    let e = Kt.get(t.strings);
    return e === void 0 && Kt.set(t.strings, e = new K(t)), e;
  }
  k(t) {
    wt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, o = 0;
    for (const u of t) o === e.length ? e.push(r = new tt(this.O(J()), this.O(J()), this, this.options)) : r = e[o], r._$AI(u), o++;
    o < e.length && (this._$AR(r && r._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const o = t.nextSibling;
      t.remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this.v = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class st {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, o, u) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = u, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = T;
  }
  _$AI(t, e = this, r, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) t = W(this, t, e, 0), l = !Q(t) || t !== this._$AH && t !== z, l && (this._$AH = t);
    else {
      const w = t;
      let v, b;
      for (t = u[0], v = 0; v < u.length - 1; v++) b = W(this, w[r + v], e, v), b === z && (b = this._$AH[v]), l || (l = !Q(b) || b !== this._$AH[v]), b === T ? t = T : t !== T && (t += (b ?? "") + u[v + 1]), this._$AH[v] = b;
    }
    l && !o && this.j(t);
  }
  j(t) {
    t === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class tr extends st {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === T ? void 0 : t;
  }
}
class er extends st {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== T);
  }
}
class rr extends st {
  constructor(t, e, r, o, u) {
    super(t, e, r, o, u), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = W(this, t, e, 0) ?? T) === z) return;
    const r = this._$AH, o = t === T && r !== T || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, u = t !== T && (r === T || o);
    o && this.element.removeEventListener(this.name, this, r), u && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class nr {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    W(this, t);
  }
}
const yt = Y.litHtmlPolyfillSupport;
yt == null || yt(K, tt), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.2.0");
const ir = (i, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = r._$litPart$;
  if (o === void 0) {
    const u = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = o = new tt(t.insertBefore(J(), u), u, void 0, e ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class X extends G {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this.o = ir(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this.o) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.o) == null || t.setConnected(!1);
  }
  render() {
    return z;
  }
}
var te;
X._$litElement$ = !0, X.finalized = !0, (te = globalThis.litElementHydrateSupport) == null || te.call(globalThis, { LitElement: X });
const vt = globalThis.litElementPolyfillSupport;
vt == null || vt({ LitElement: X });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const or = { attribute: !0, type: String, converter: it, reflect: !1, hasChanged: gt }, sr = (i = or, t, e) => {
  const { kind: r, metadata: o } = e;
  let u = globalThis.litPropertyMetadata.get(o);
  if (u === void 0 && globalThis.litPropertyMetadata.set(o, u = /* @__PURE__ */ new Map()), u.set(e.name, i), r === "accessor") {
    const { name: l } = e;
    return { set(w) {
      const v = t.get.call(this);
      t.set.call(this, w), this.requestUpdate(l, v, i);
    }, init(w) {
      return w !== void 0 && this.P(l, void 0, i), w;
    } };
  }
  if (r === "setter") {
    const { name: l } = e;
    return function(w) {
      const v = this[l];
      t.call(this, w), this.requestUpdate(l, v, i);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function $t(i) {
  return (t, e) => typeof e == "object" ? sr(i, t, e) : ((r, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...r, wrapped: !0 } : r), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(i, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, lr = (i) => (...t) => ({ _$litDirective$: i, values: t });
class ur {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, r) {
    this.t = t, this._$AM = e, this.i = r;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const se = "important", cr = " !" + se, hr = lr(class extends ur {
  constructor(i) {
    var t;
    if (super(i), i.type !== ar.ATTRIBUTE || i.name !== "style" || ((t = i.strings) == null ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(i) {
    return Object.keys(i).reduce((t, e) => {
      const r = i[e];
      return r == null ? t : t + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
    }, "");
  }
  update(i, [t]) {
    const { style: e } = i.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const r of this.ft) t[r] == null && (this.ft.delete(r), r.includes("-") ? e.removeProperty(r) : e[r] = null);
    for (const r in t) {
      const o = t[r];
      if (o != null) {
        this.ft.add(r);
        const u = typeof o == "string" && o.endsWith(cr);
        r.includes("-") || u ? e.setProperty(r, u ? o.slice(0, -11) : o, u ? se : "") : e[r] = o;
      }
    }
    return z;
  }
});
var dr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, at = (i, t, e, r) => {
  for (var o = r > 1 ? void 0 : r ? pr(t, e) : t, u = i.length - 1, l; u >= 0; u--)
    (l = i[u]) && (o = (r ? l(t, e, o) : l(o)) || o);
  return r && o && dr(t, e, o), o;
};
let V = class extends X {
  constructor() {
    super(...arguments), this.open = !1, this.hasBackdrop = !0, this.config = {
      webComponentSelector: "",
      inputs: {},
      outputs: {},
      position: "center"
    };
  }
  render() {
    const { webComponentSelector: i, inputs: t, outputs: e, position: r } = this.config, o = this._getPositionStyle(r);
    return ft`
        <div class="popup-backdrop ${this.hasBackdrop && this.open ? "open" : ""}" @click=${this._close}></div>
        <div class="popup-container ${this.open ? "open" : ""}" style=${hr(o)}>
          <div class="popup-header">
            <span>Popup Title</span>
            <span class="close-button" @click=${this._close}>✖</span>
          </div>
          <div class="popup-content">
            ${this.open && i ? ft`<${i} .inputs=${t} .outputs=${e}></${i}>` : ft`<p>No component provided.</p>`}
          </div>
          <div class="popup-arrow"></div>
          <div class="popup-arrow-outline"></div>
        </div>
      `;
  }
  _getPositionStyle(i) {
    switch (i) {
      case "center":
        return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
      case "top-left":
        return { top: "10px", left: "10px" };
      case "top-right":
        return { top: "10px", right: "10px" };
      case "bottom-left":
        return { bottom: "10px", left: "10px" };
      case "bottom-right":
        return { bottom: "10px", right: "10px" };
      default:
        return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    }
  }
  _close() {
    this.open = !1, this.dispatchEvent(new CustomEvent("popup-closed", { detail: { open: this.open } }));
  }
};
V.styles = ze`
      :host {
        display: block;
        font-family: Arial, sans-serif;
        --popup-bg-color: #fff;
        --popup-border-color: #ddd;
        --popup-hover-border-color: #ccc;
        --popup-font-color: #333;
        --popup-shadow-color: rgba(0, 0, 0, 0.1);
        --popup-border-radius: 6px;
        --popup-font-size: 12px;
        --popup-header-color: #666;
        --popup-icon-color: #666;
        --popup-option-hover-bg-color: #f0f0f0;
        --popup-width: 180px;
        --popup-padding: 8px;
      }
  
      .popup-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 99;
      }
  
      .popup-backdrop.open {
        display: block;
      }
  
      .popup-container {
        position: absolute;
        background-color: var(--popup-bg-color);
        border: 1px solid var(--popup-border-color);
        border-radius: var(--popup-border-radius);
        box-shadow: 0 4px 12px var(--popup-shadow-color);
        padding: var(--popup-padding);
        font-size: var(--popup-font-size);
        z-index: 100;
        width: var(--popup-width);
        transition: opacity 0.2s ease, transform 0.2s ease;
        opacity: 0;
        transform: translateY(-10px);
      }
  
      .popup-container.open {
        opacity: 1;
        transform: translateY(0);
      }
  
      .popup-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: var(--popup-header-color);
        margin-bottom: 8px;
      }
  
      .popup-content {
        font-size: var(--popup-font-size);
        color: var(--popup-font-color);
      }
  
      .close-button {
        cursor: pointer;
        color: var(--popup-icon-color);
      }
  
      .popup-arrow {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -100%);
        width: 0;
        height: 0;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent var(--popup-border-color) transparent;
      }
  
      .popup-arrow-outline {
        position: absolute;
        top: -9px;
        left: 50%;
        transform: translate(-50%, -30%);
        width: 0;
        height: 0;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent var(--popup-bg-color) transparent;
        z-index: 101;
      }
    `;
at([
  $t({ type: Boolean })
], V.prototype, "open", 2);
at([
  $t({ type: Boolean })
], V.prototype, "hasBackdrop", 2);
at([
  $t({ type: Object })
], V.prototype, "config", 2);
V = at([
  Ie({
    name: "popup-dialog",
    version: "1.0.0",
    title: "Popup dialog",
    elementSelector: "zero-popup-dialog",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  He()
], V);
export {
  V as PopupDialog
};
