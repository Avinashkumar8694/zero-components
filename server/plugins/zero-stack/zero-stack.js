var Re = Object.defineProperty;
var xe = (i, t, e) => t in i ? Re(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var Lt = (i, t, e) => xe(i, typeof t != "symbol" ? t + "" : t, e);
var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Wt;
(function(i) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Bt == "object" ? Bt : typeof self == "object" ? self : typeof this == "object" ? this : w(), n = o(i);
    typeof e.Reflect < "u" && (n = o(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = i);
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
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", w = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, b = !w && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: w ? function() {
        return yt(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return yt({ __proto__: null });
      } : function() {
        return yt({});
      },
      has: b ? function(r, s) {
        return n.call(r, s);
      } : function(r, s) {
        return s in r;
      },
      get: b ? function(r, s) {
        return n.call(r, s) ? r[s] : void 0;
      } : function(r, s) {
        return r[s];
      }
    }, $ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Me(), C = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pe(), N = typeof WeakMap == "function" ? WeakMap : ke(), W = o ? Symbol.for("@reflect-metadata:registry") : void 0, ot = Ee(), Et = Se(ot);
    function oe(r, s, a, c) {
      if (_(a)) {
        if (!xt(r))
          throw new TypeError();
        if (!Nt(s))
          throw new TypeError();
        return ve(r, s);
      } else {
        if (!xt(r))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(c) && !_(c) && !G(c))
          throw new TypeError();
        return G(c) && (c = void 0), a = x(a), _e(r, s, a, c);
      }
    }
    t("decorate", oe);
    function ae(r, s) {
      function a(c, y) {
        if (!O(c))
          throw new TypeError();
        if (!_(y) && !be(y))
          throw new TypeError();
        Pt(r, s, c, y);
      }
      return a;
    }
    t("metadata", ae);
    function le(r, s, a, c) {
      if (!O(a))
        throw new TypeError();
      return _(c) || (c = x(c)), Pt(r, s, a, c);
    }
    t("defineMetadata", le);
    function ue(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = x(a)), St(r, s, a);
    }
    t("hasMetadata", ue);
    function ce(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = x(a)), dt(r, s, a);
    }
    t("hasOwnMetadata", ce);
    function he(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = x(a)), Ot(r, s, a);
    }
    t("getMetadata", he);
    function de(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = x(a)), Mt(r, s, a);
    }
    t("getOwnMetadata", de);
    function fe(r, s) {
      if (!O(r))
        throw new TypeError();
      return _(s) || (s = x(s)), kt(r, s);
    }
    t("getMetadataKeys", fe);
    function pe(r, s) {
      if (!O(r))
        throw new TypeError();
      return _(s) || (s = x(s)), Tt(r, s);
    }
    t("getOwnMetadataKeys", pe);
    function ye(r, s, a) {
      if (!O(s))
        throw new TypeError();
      if (_(a) || (a = x(a)), !O(s))
        throw new TypeError();
      _(a) || (a = x(a));
      var c = Y(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(r, s, a);
    }
    t("deleteMetadata", ye);
    function ve(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var c = r[a], y = c(s);
        if (!_(y) && !G(y)) {
          if (!Nt(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function _e(r, s, a, c) {
      for (var y = r.length - 1; y >= 0; --y) {
        var P = r[y], M = P(s, a, c);
        if (!_(M) && !G(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function St(r, s, a) {
      var c = dt(r, s, a);
      if (c)
        return !0;
      var y = pt(s);
      return G(y) ? !1 : St(r, y, a);
    }
    function dt(r, s, a) {
      var c = Y(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : Rt(c.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Ot(r, s, a) {
      var c = dt(r, s, a);
      if (c)
        return Mt(r, s, a);
      var y = pt(s);
      if (!G(y))
        return Ot(r, y, a);
    }
    function Mt(r, s, a) {
      var c = Y(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Pt(r, s, a, c) {
      var y = Y(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, c);
    }
    function kt(r, s) {
      var a = Tt(r, s), c = pt(r);
      if (c === null)
        return a;
      var y = kt(c, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new C(), M = [], m = 0, h = a; m < h.length; m++) {
        var d = h[m], f = P.has(d);
        f || (P.add(d), M.push(d));
      }
      for (var p = 0, g = y; p < g.length; p++) {
        var d = g[p], f = P.has(d);
        f || (P.add(d), M.push(d));
      }
      return M;
    }
    function Tt(r, s) {
      var a = Y(
        r,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, s) : [];
    }
    function Ct(r) {
      if (r === null)
        return 1;
      switch (typeof r) {
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
          return r === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function _(r) {
      return r === void 0;
    }
    function G(r) {
      return r === null;
    }
    function me(r) {
      return typeof r == "symbol";
    }
    function O(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function ge(r, s) {
      switch (Ct(r)) {
        case 0:
          return r;
        case 1:
          return r;
        case 2:
          return r;
        case 3:
          return r;
        case 4:
          return r;
        case 5:
          return r;
      }
      var a = "string", c = Ut(r, u);
      if (c !== void 0) {
        var y = c.call(r, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return we(r);
    }
    function we(r, s) {
      var a, c;
      {
        var y = r.toString;
        if (at(y)) {
          var c = y.call(r);
          if (!O(c))
            return c;
        }
        var a = r.valueOf;
        if (at(a)) {
          var c = a.call(r);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Rt(r) {
      return !!r;
    }
    function $e(r) {
      return "" + r;
    }
    function x(r) {
      var s = ge(r);
      return me(s) ? s : $e(s);
    }
    function xt(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function at(r) {
      return typeof r == "function";
    }
    function Nt(r) {
      return typeof r == "function";
    }
    function be(r) {
      switch (Ct(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ft(r, s) {
      return r === s || r !== r && s !== s;
    }
    function Ut(r, s) {
      var a = r[s];
      if (a != null) {
        if (!at(a))
          throw new TypeError();
        return a;
      }
    }
    function jt(r) {
      var s = Ut(r, l);
      if (!at(s))
        throw new TypeError();
      var a = s.call(r);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function It(r) {
      return r.value;
    }
    function Dt(r) {
      var s = r.next();
      return s.done ? !1 : s;
    }
    function Ht(r) {
      var s = r.return;
      s && s.call(r);
    }
    function pt(r) {
      var s = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === $ || s !== $)
        return s;
      var a = r.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === r ? s : y;
    }
    function Ae() {
      var r;
      !_(W) && typeof e.Reflect < "u" && !(W in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (r = Oe(e.Reflect));
      var s, a, c, y = new N(), P = {
        registerProvider: M,
        getProvider: h,
        setProvider: f
      };
      return P;
      function M(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case r === p:
            break;
          case _(s):
            s = p;
            break;
          case s === p:
            break;
          case _(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new C()), c.add(p);
            break;
        }
      }
      function m(p, g) {
        if (!_(s)) {
          if (s.isProviderFor(p, g))
            return s;
          if (!_(a)) {
            if (a.isProviderFor(p, g))
              return s;
            if (!_(c))
              for (var E = jt(c); ; ) {
                var S = Dt(E);
                if (!S)
                  return;
                var R = It(S);
                if (R.isProviderFor(p, g))
                  return Ht(E), R;
              }
          }
        }
        if (!_(r) && r.isProviderFor(p, g))
          return r;
      }
      function h(p, g) {
        var E = y.get(p), S;
        return _(E) || (S = E.get(g)), _(S) && (S = m(p, g), _(S) || (_(E) && (E = new T(), y.set(p, E)), E.set(g, S))), S;
      }
      function d(p) {
        if (_(p))
          throw new TypeError();
        return s === p || a === p || !_(c) && c.has(p);
      }
      function f(p, g, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = h(p, g);
        if (S !== E) {
          if (!_(S))
            return !1;
          var R = y.get(p);
          _(R) && (R = new T(), y.set(p, R)), R.set(g, E);
        }
        return !0;
      }
    }
    function Ee() {
      var r;
      return !_(W) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (r = e.Reflect[W]), _(r) && (r = Ae()), !_(W) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, W, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function Se(r) {
      var s = new N(), a = {
        isProviderFor: function(d, f) {
          var p = s.get(d);
          return _(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: h
      };
      return ot.registerProvider(a), a;
      function c(d, f, p) {
        var g = s.get(d), E = !1;
        if (_(g)) {
          if (!p)
            return;
          g = new T(), s.set(d, g), E = !0;
        }
        var S = g.get(f);
        if (_(S)) {
          if (!p)
            return;
          if (S = new T(), g.set(f, S), !r.setProvider(d, f, a))
            throw g.delete(f), E && s.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(d, f, p) {
        var g = c(
          f,
          p,
          /*Create*/
          !1
        );
        return _(g) ? !1 : Rt(g.has(d));
      }
      function P(d, f, p) {
        var g = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!_(g))
          return g.get(d);
      }
      function M(d, f, p, g) {
        var E = c(
          p,
          g,
          /*Create*/
          !0
        );
        E.set(d, f);
      }
      function m(d, f) {
        var p = [], g = c(
          d,
          f,
          /*Create*/
          !1
        );
        if (_(g))
          return p;
        for (var E = g.keys(), S = jt(E), R = 0; ; ) {
          var zt = Dt(S);
          if (!zt)
            return p.length = R, p;
          var Te = It(zt);
          try {
            p[R] = Te;
          } catch (Ce) {
            try {
              Ht(S);
            } finally {
              throw Ce;
            }
          }
          R++;
        }
      }
      function h(d, f, p) {
        var g = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (_(g) || !g.delete(d))
          return !1;
        if (g.size === 0) {
          var E = s.get(f);
          _(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Oe(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, c = r.getOwnMetadata, y = r.getOwnMetadataKeys, P = r.deleteMetadata, M = new N(), m = {
        isProviderFor: function(h, d) {
          var f = M.get(h);
          return !_(f) && f.has(d) ? !0 : y(h, d).length ? (_(f) && (f = new C(), M.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function Y(r, s, a) {
      var c = ot.getProvider(r, s);
      if (!_(c))
        return c;
      if (a) {
        if (ot.setProvider(r, s, Et))
          return Et;
        throw new Error("Illegal state.");
      }
    }
    function Me() {
      var r = {}, s = [], a = (
        /** @class */
        function() {
          function m(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
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
            this._keys = [], this._values = [], this._cacheKey = r, this._cacheIndex = -2;
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
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, m.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ft(h, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
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
            if (!ft(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ft(this._keys[f], h)) {
                  this._cacheIndex = f;
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
    function Pe() {
      var r = (
        /** @class */
        function() {
          function s() {
            this._map = new T();
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
      return r;
    }
    function ke() {
      var r = 16, s = A.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? A.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? A.get(f, this._key) : void 0;
          }, h.prototype.set = function(d, f) {
            var p = y(
              d,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, h.prototype.delete = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
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
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: A.create() });
        }
        return h[a];
      }
      function P(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
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
        var h = M(r);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < r; ++f) {
          var p = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function yt(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Wt || (Wt = {}));
function Ne(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Ue(i) {
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
          element: e
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function je(i) {
  return Ue(i);
}
function Ie(i) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Lt(this, "_stylesApplied", !1);
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
function De(i) {
  var e;
  if (((e = i == null ? void 0 : i.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function He(i) {
  return function(t, e) {
    try {
      De(i);
      const n = Reflect.getMetadata("ZeroAttribute", t) || [];
      typeof e == "string" && typeof t[e] != "function" && (i.fieldMappings = i.fieldMappings ?? e), n.push(i), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function nt(i) {
  return He(i);
}
var z;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown";
})(z || (z = {}));
var L;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(L || (L = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt = globalThis, wt = lt.ShadowRoot && (lt.ShadyCSS === void 0 || lt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $t = Symbol(), Gt = /* @__PURE__ */ new WeakMap();
let ee = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== $t) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (wt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Gt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Gt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ze = (i) => new ee(typeof i == "string" ? i : i + "", void 0, $t), Le = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((n, o, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[u + 1], i[0]);
  return new ee(e, i, $t);
}, Be = (i, t) => {
  if (wt) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), o = lt.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = e.cssText, i.appendChild(n);
  }
}, Vt = wt ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return ze(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: We, defineProperty: Ge, getOwnPropertyDescriptor: Ve, getOwnPropertyNames: Fe, getOwnPropertySymbols: qe, getPrototypeOf: Ze } = Object, j = globalThis, Ft = j.trustedTypes, Ye = Ft ? Ft.emptyScript : "", vt = j.reactiveElementPolyfillSupport, J = (i, t) => i, ut = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Ye : null;
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
} }, bt = (i, t) => !We(i, t), qt = { attribute: !0, type: String, converter: ut, reflect: !1, hasChanged: bt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class V extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = qt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(t, n, e);
      o !== void 0 && Ge(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: o, set: u } = Ve(this.prototype, t) ?? { get() {
      return this[e];
    }, set(l) {
      this[e] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const w = o == null ? void 0 : o.call(this);
      u.call(this, l), this.requestUpdate(t, w, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? qt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(J("elementProperties"))) return;
    const t = Ze(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(J("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(J("properties"))) {
      const e = this.properties, n = [...Fe(e), ...qe(e)];
      for (const o of n) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, o] of e) this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const o = this._$Eu(e, n);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const o of n) e.unshift(Vt(o));
    } else t !== void 0 && e.push(Vt(t));
    return e;
  }
  static _$Eu(t, e) {
    const n = e.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const n of e.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Be(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostConnected) == null ? void 0 : n.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostDisconnected) == null ? void 0 : n.call(e);
    });
  }
  attributeChangedCallback(t, e, n) {
    this._$AK(t, n);
  }
  _$EC(t, e) {
    var u;
    const n = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, n);
    if (o !== void 0 && n.reflect === !0) {
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : ut).toAttribute(e, n.type);
      this._$Em = t, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var u;
    const n = this.constructor, o = n._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const l = n.getPropertyOptions(o), w = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : ut;
      this._$Em = o, this[o] = w.fromAttribute(e, l.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, n) {
    if (t !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(t)), !(n.hasChanged ?? bt)(this[t], e)) return;
      this.P(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, n) {
    this._$AL.has(t) || this._$AL.set(t, e), n.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
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
    var n;
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
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((o) => {
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
    (e = this._$EO) == null || e.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[J("elementProperties")] = /* @__PURE__ */ new Map(), V[J("finalized")] = /* @__PURE__ */ new Map(), vt == null || vt({ ReactiveElement: V }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q = globalThis, ct = Q.trustedTypes, Zt = ct ? ct.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, re = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, ne = "?" + U, Xe = `<${ne}>`, B = document, tt = () => B.createComment(""), et = (i) => i === null || typeof i != "object" && typeof i != "function", At = Array.isArray, Je = (i) => At(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Yt = /-->/g, Xt = />/g, D = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Jt = /'/g, Qt = /"/g, ie = /^(?:script|style|textarea|title)$/i, Qe = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), Ke = Qe(1), F = Symbol.for("lit-noChange"), k = Symbol.for("lit-nothing"), Kt = /* @__PURE__ */ new WeakMap(), H = B.createTreeWalker(B, 129);
function se(i, t) {
  if (!At(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Zt !== void 0 ? Zt.createHTML(t) : t;
}
const tr = (i, t) => {
  const e = i.length - 1, n = [];
  let o, u = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", l = X;
  for (let w = 0; w < e; w++) {
    const v = i[w];
    let b, A, $ = -1, T = 0;
    for (; T < v.length && (l.lastIndex = T, A = l.exec(v), A !== null); ) T = l.lastIndex, l === X ? A[1] === "!--" ? l = Yt : A[1] !== void 0 ? l = Xt : A[2] !== void 0 ? (ie.test(A[2]) && (o = RegExp("</" + A[2], "g")), l = D) : A[3] !== void 0 && (l = D) : l === D ? A[0] === ">" ? (l = o ?? X, $ = -1) : A[1] === void 0 ? $ = -2 : ($ = l.lastIndex - A[2].length, b = A[1], l = A[3] === void 0 ? D : A[3] === '"' ? Qt : Jt) : l === Qt || l === Jt ? l = D : l === Yt || l === Xt ? l = X : (l = D, o = void 0);
    const C = l === D && i[w + 1].startsWith("/>") ? " " : "";
    u += l === X ? v + Xe : $ >= 0 ? (n.push(b), v.slice(0, $) + re + v.slice($) + U + C) : v + U + ($ === -2 ? w : C);
  }
  return [se(i, u + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class rt {
  constructor({ strings: t, _$litType$: e }, n) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const w = t.length - 1, v = this.parts, [b, A] = tr(t, e);
    if (this.el = rt.createElement(b, n), H.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = H.nextNode()) !== null && v.length < w; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(re)) {
          const T = A[l++], C = o.getAttribute($).split(U), N = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: u, name: N[2], strings: C, ctor: N[1] === "." ? rr : N[1] === "?" ? nr : N[1] === "@" ? ir : ht }), o.removeAttribute($);
        } else $.startsWith(U) && (v.push({ type: 6, index: u }), o.removeAttribute($));
        if (ie.test(o.tagName)) {
          const $ = o.textContent.split(U), T = $.length - 1;
          if (T > 0) {
            o.textContent = ct ? ct.emptyScript : "";
            for (let C = 0; C < T; C++) o.append($[C], tt()), H.nextNode(), v.push({ type: 2, index: ++u });
            o.append($[T], tt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ne) v.push({ type: 2, index: u });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(U, $ + 1)) !== -1; ) v.push({ type: 7, index: u }), $ += U.length - 1;
      }
      u++;
    }
  }
  static createElement(t, e) {
    const n = B.createElement("template");
    return n.innerHTML = t, n;
  }
}
function q(i, t, e = i, n) {
  var l, w;
  if (t === F) return t;
  let o = n !== void 0 ? (l = e.o) == null ? void 0 : l[n] : e.l;
  const u = et(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((w = o == null ? void 0 : o._$AO) == null || w.call(o, !1), u === void 0 ? o = void 0 : (o = new u(i), o._$AT(i, e, n)), n !== void 0 ? (e.o ?? (e.o = []))[n] = o : e.l = o), o !== void 0 && (t = q(i, o._$AS(i, t.values), o, n)), t;
}
class er {
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
    const { el: { content: e }, parts: n } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? B).importNode(e, !0);
    H.currentNode = o;
    let u = H.nextNode(), l = 0, w = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let b;
        v.type === 2 ? b = new it(u, u.nextSibling, this, t) : v.type === 1 ? b = new v.ctor(u, v.name, v.strings, this, t) : v.type === 6 && (b = new sr(u, this, t)), this._$AV.push(b), v = n[++w];
      }
      l !== (v == null ? void 0 : v.index) && (u = H.nextNode(), l++);
    }
    return H.currentNode = B, o;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class it {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this.v;
  }
  constructor(t, e, n, o) {
    this.type = 2, this._$AH = k, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    t = q(this, t, e), et(t) ? t === k || t == null || t === "" ? (this._$AH !== k && this._$AR(), this._$AH = k) : t !== this._$AH && t !== F && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Je(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== k && et(this._$AH) ? this._$AA.nextSibling.data = t : this.T(B.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var u;
    const { values: e, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = rt.createElement(se(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(e);
    else {
      const l = new er(o, this), w = l.u(this.options);
      l.p(e), this.T(w), this._$AH = l;
    }
  }
  _$AC(t) {
    let e = Kt.get(t.strings);
    return e === void 0 && Kt.set(t.strings, e = new rt(t)), e;
  }
  k(t) {
    At(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, o = 0;
    for (const u of t) o === e.length ? e.push(n = new it(this.O(tt()), this.O(tt()), this, this.options)) : n = e[o], n._$AI(u), o++;
    o < e.length && (this._$AR(n && n._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const o = t.nextSibling;
      t.remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this.v = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class ht {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, o, u) {
    this.type = 1, this._$AH = k, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = k;
  }
  _$AI(t, e = this, n, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) t = q(this, t, e, 0), l = !et(t) || t !== this._$AH && t !== F, l && (this._$AH = t);
    else {
      const w = t;
      let v, b;
      for (t = u[0], v = 0; v < u.length - 1; v++) b = q(this, w[n + v], e, v), b === F && (b = this._$AH[v]), l || (l = !et(b) || b !== this._$AH[v]), b === k ? t = k : t !== k && (t += (b ?? "") + u[v + 1]), this._$AH[v] = b;
    }
    l && !o && this.j(t);
  }
  j(t) {
    t === k ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class rr extends ht {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === k ? void 0 : t;
  }
}
class nr extends ht {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== k);
  }
}
class ir extends ht {
  constructor(t, e, n, o, u) {
    super(t, e, n, o, u), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = q(this, t, e, 0) ?? k) === F) return;
    const n = this._$AH, o = t === k && n !== k || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, u = t !== k && (n === k || o);
    o && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class sr {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    q(this, t);
  }
}
const mt = Q.litHtmlPolyfillSupport;
mt == null || mt(rt, it), (Q.litHtmlVersions ?? (Q.litHtmlVersions = [])).push("3.2.0");
const or = (i, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = n._$litPart$;
  if (o === void 0) {
    const u = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = o = new it(t.insertBefore(tt(), u), u, void 0, e ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class K extends V {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this.o = or(e, this.renderRoot, this.renderOptions);
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
    return F;
  }
}
var te;
K._$litElement$ = !0, K.finalized = !0, (te = globalThis.litElementHydrateSupport) == null || te.call(globalThis, { LitElement: K });
const gt = globalThis.litElementPolyfillSupport;
gt == null || gt({ LitElement: K });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: ut, reflect: !1, hasChanged: bt }, lr = (i = ar, t, e) => {
  const { kind: n, metadata: o } = e;
  let u = globalThis.litPropertyMetadata.get(o);
  if (u === void 0 && globalThis.litPropertyMetadata.set(o, u = /* @__PURE__ */ new Map()), u.set(e.name, i), n === "accessor") {
    const { name: l } = e;
    return { set(w) {
      const v = t.get.call(this);
      t.set.call(this, w), this.requestUpdate(l, v, i);
    }, init(w) {
      return w !== void 0 && this.P(l, void 0, i), w;
    } };
  }
  if (n === "setter") {
    const { name: l } = e;
    return function(w) {
      const v = this[l];
      t.call(this, w), this.requestUpdate(l, v, i);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function st(i) {
  return (t, e) => typeof e == "object" ? lr(i, t, e) : ((n, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(i, t, e);
}
var ur = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, Z = (i, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? cr(t, e) : t, u = i.length - 1, l; u >= 0; u--)
    (l = i[u]) && (o = (n ? l(t, e, o) : l(o)) || o);
  return n && o && ur(t, e, o), o;
};
let I = class extends K {
  constructor() {
    super(...arguments), this.direction = "column", this.gap = 16, this.justify = "flex-start", this.align = "stretch", this.mobileStack = !0;
  }
  render() {
    const i = [
      `--zero-stack-gap:var(--zero-stack-gap-override, ${Math.max(0, Number(this.gap) || 0)}px)`,
      `--zero-stack-direction:var(--zero-stack-direction-override, ${this.direction || "column"})`,
      `--zero-stack-justify:var(--zero-stack-justify-override, ${this.justify || "flex-start"})`,
      `--zero-stack-align:var(--zero-stack-align-override, ${this.align || "stretch"})`
    ].join(";");
    return Ke`
      <div class="stack" style=${i} data-mobile-stack=${String(this.mobileStack)}>
        <slot></slot>
      </div>
    `;
  }
};
I.styles = Le`
    :host {
      display: block;
      width: 100%;
    }

    .stack {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      gap: var(--zero-stack-gap, 16px);
      flex-direction: var(--zero-stack-direction, column);
      justify-content: var(--zero-stack-justify, flex-start);
      align-items: var(--zero-stack-align, stretch);
      flex-wrap: var(--zero-stack-wrap, nowrap);
    }

    @media (max-width: 767px) {
      .stack[data-mobile-stack="true"] {
        flex-direction: column;
      }
    }
  `;
Z([
  st({ type: String }),
  nt({
    attributeType: L.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Direction",
    fieldMappings: "direction",
    optionItems: [
      { label: "Column", value: "column" },
      { label: "Row", value: "row" }
    ]
  })
], I.prototype, "direction", 2);
Z([
  st({ type: Number }),
  nt({
    attributeType: L.PROPERTY,
    uiComponentType: z.NUMBER_INPUT,
    displayLabel: "Gap (px)",
    fieldMappings: "gap"
  })
], I.prototype, "gap", 2);
Z([
  st({ type: String }),
  nt({
    attributeType: L.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Justify",
    fieldMappings: "justify",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Between", value: "space-between" }
    ]
  })
], I.prototype, "justify", 2);
Z([
  st({ type: String }),
  nt({
    attributeType: L.PROPERTY,
    uiComponentType: z.DROPDOWN,
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
Z([
  st({ type: Boolean, attribute: "mobile-stack" }),
  nt({
    attributeType: L.PROPERTY,
    uiComponentType: z.CHECKBOX,
    displayLabel: "Mobile Stack",
    fieldMappings: "mobileStack"
  })
], I.prototype, "mobileStack", 2);
I = Z([
  je({
    name: "zero-stack",
    version: "1.0.0",
    title: "Stack",
    elementSelector: "zero-stack",
    group: "Layout",
    iconName: "stack-icon.png"
  }),
  Ie()
], I);
export {
  I as ZeroStack
};
