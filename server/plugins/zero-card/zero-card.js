var ke = Object.defineProperty;
var Ne = (i, t, e) => t in i ? ke(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var Bt = (i, t, e) => Ne(i, typeof t != "symbol" ? t + "" : t, e);
var Gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var e = typeof globalThis == "object" ? globalThis : typeof Gt == "object" ? Gt : typeof self == "object" ? self : typeof this == "object" ? this : w(), n = o(i);
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
    }, $ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pe(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ce(), I = typeof WeakMap == "function" ? WeakMap : Te(), B = o ? Symbol.for("@reflect-metadata:registry") : void 0, it = Se(), St = Me(it);
    function ae(r, s, a, h) {
      if (_(a)) {
        if (!Nt(r))
          throw new TypeError();
        if (!Ut(s))
          throw new TypeError();
        return _e(r, s);
      } else {
        if (!Nt(r))
          throw new TypeError();
        if (!M(s))
          throw new TypeError();
        if (!M(h) && !_(h) && !G(h))
          throw new TypeError();
        return G(h) && (h = void 0), a = N(a), ge(r, s, a, h);
      }
    }
    t("decorate", ae);
    function le(r, s) {
      function a(h, y) {
        if (!M(h))
          throw new TypeError();
        if (!_(y) && !Ae(y))
          throw new TypeError();
        Ct(r, s, h, y);
      }
      return a;
    }
    t("metadata", le);
    function ue(r, s, a, h) {
      if (!M(a))
        throw new TypeError();
      return _(h) || (h = N(h)), Ct(r, s, a, h);
    }
    t("defineMetadata", ue);
    function he(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = N(a)), Mt(r, s, a);
    }
    t("hasMetadata", he);
    function ce(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = N(a)), dt(r, s, a);
    }
    t("hasOwnMetadata", ce);
    function de(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = N(a)), Ot(r, s, a);
    }
    t("getMetadata", de);
    function fe(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = N(a)), Pt(r, s, a);
    }
    t("getOwnMetadata", fe);
    function pe(r, s) {
      if (!M(r))
        throw new TypeError();
      return _(s) || (s = N(s)), Tt(r, s);
    }
    t("getMetadataKeys", pe);
    function ye(r, s) {
      if (!M(r))
        throw new TypeError();
      return _(s) || (s = N(s)), Rt(r, s);
    }
    t("getOwnMetadataKeys", ye);
    function ve(r, s, a) {
      if (!M(s))
        throw new TypeError();
      if (_(a) || (a = N(a)), !M(s))
        throw new TypeError();
      _(a) || (a = N(a));
      var h = X(
        s,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : h.OrdinaryDeleteMetadata(r, s, a);
    }
    t("deleteMetadata", ve);
    function _e(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var h = r[a], y = h(s);
        if (!_(y) && !G(y)) {
          if (!Ut(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function ge(r, s, a, h) {
      for (var y = r.length - 1; y >= 0; --y) {
        var P = r[y], O = P(s, a, h);
        if (!_(O) && !G(O)) {
          if (!M(O))
            throw new TypeError();
          h = O;
        }
      }
      return h;
    }
    function Mt(r, s, a) {
      var h = dt(r, s, a);
      if (h)
        return !0;
      var y = pt(s);
      return G(y) ? !1 : Mt(r, y, a);
    }
    function dt(r, s, a) {
      var h = X(
        s,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : kt(h.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Ot(r, s, a) {
      var h = dt(r, s, a);
      if (h)
        return Pt(r, s, a);
      var y = pt(s);
      if (!G(y))
        return Ot(r, y, a);
    }
    function Pt(r, s, a) {
      var h = X(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(h))
        return h.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Ct(r, s, a, h) {
      var y = X(
        a,
        h,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, h);
    }
    function Tt(r, s) {
      var a = Rt(r, s), h = pt(r);
      if (h === null)
        return a;
      var y = Tt(h, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new R(), O = [], g = 0, c = a; g < c.length; g++) {
        var d = c[g], f = P.has(d);
        f || (P.add(d), O.push(d));
      }
      for (var p = 0, m = y; p < m.length; p++) {
        var d = m[p], f = P.has(d);
        f || (P.add(d), O.push(d));
      }
      return O;
    }
    function Rt(r, s) {
      var a = X(
        r,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, s) : [];
    }
    function xt(r) {
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
    function M(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function we(r, s) {
      switch (xt(r)) {
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
      var a = "string", h = It(r, u);
      if (h !== void 0) {
        var y = h.call(r, a);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return $e(r);
    }
    function $e(r, s) {
      var a, h;
      {
        var y = r.toString;
        if (st(y)) {
          var h = y.call(r);
          if (!M(h))
            return h;
        }
        var a = r.valueOf;
        if (st(a)) {
          var h = a.call(r);
          if (!M(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function kt(r) {
      return !!r;
    }
    function be(r) {
      return "" + r;
    }
    function N(r) {
      var s = we(r);
      return me(s) ? s : be(s);
    }
    function Nt(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function st(r) {
      return typeof r == "function";
    }
    function Ut(r) {
      return typeof r == "function";
    }
    function Ae(r) {
      switch (xt(r)) {
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
    function It(r, s) {
      var a = r[s];
      if (a != null) {
        if (!st(a))
          throw new TypeError();
        return a;
      }
    }
    function jt(r) {
      var s = It(r, l);
      if (!st(s))
        throw new TypeError();
      var a = s.call(r);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function Ht(r) {
      return r.value;
    }
    function Dt(r) {
      var s = r.next();
      return s.done ? !1 : s;
    }
    function zt(r) {
      var s = r.return;
      s && s.call(r);
    }
    function pt(r) {
      var s = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === $ || s !== $)
        return s;
      var a = r.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return s;
      var y = h.constructor;
      return typeof y != "function" || y === r ? s : y;
    }
    function Ee() {
      var r;
      !_(B) && typeof e.Reflect < "u" && !(B in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (r = Oe(e.Reflect));
      var s, a, h, y = new I(), P = {
        registerProvider: O,
        getProvider: c,
        setProvider: f
      };
      return P;
      function O(p) {
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
            h === void 0 && (h = new R()), h.add(p);
            break;
        }
      }
      function g(p, m) {
        if (!_(s)) {
          if (s.isProviderFor(p, m))
            return s;
          if (!_(a)) {
            if (a.isProviderFor(p, m))
              return s;
            if (!_(h))
              for (var E = jt(h); ; ) {
                var S = Dt(E);
                if (!S)
                  return;
                var x = Ht(S);
                if (x.isProviderFor(p, m))
                  return zt(E), x;
              }
          }
        }
        if (!_(r) && r.isProviderFor(p, m))
          return r;
      }
      function c(p, m) {
        var E = y.get(p), S;
        return _(E) || (S = E.get(m)), _(S) && (S = g(p, m), _(S) || (_(E) && (E = new T(), y.set(p, E)), E.set(m, S))), S;
      }
      function d(p) {
        if (_(p))
          throw new TypeError();
        return s === p || a === p || !_(h) && h.has(p);
      }
      function f(p, m, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = c(p, m);
        if (S !== E) {
          if (!_(S))
            return !1;
          var x = y.get(p);
          _(x) && (x = new T(), y.set(p, x)), x.set(m, E);
        }
        return !0;
      }
    }
    function Se() {
      var r;
      return !_(B) && M(e.Reflect) && Object.isExtensible(e.Reflect) && (r = e.Reflect[B]), _(r) && (r = Ee()), !_(B) && M(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, B, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function Me(r) {
      var s = new I(), a = {
        isProviderFor: function(d, f) {
          var p = s.get(d);
          return _(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: c
      };
      return it.registerProvider(a), a;
      function h(d, f, p) {
        var m = s.get(d), E = !1;
        if (_(m)) {
          if (!p)
            return;
          m = new T(), s.set(d, m), E = !0;
        }
        var S = m.get(f);
        if (_(S)) {
          if (!p)
            return;
          if (S = new T(), m.set(f, S), !r.setProvider(d, f, a))
            throw m.delete(f), E && s.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(d, f, p) {
        var m = h(
          f,
          p,
          /*Create*/
          !1
        );
        return _(m) ? !1 : kt(m.has(d));
      }
      function P(d, f, p) {
        var m = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (!_(m))
          return m.get(d);
      }
      function O(d, f, p, m) {
        var E = h(
          p,
          m,
          /*Create*/
          !0
        );
        E.set(d, f);
      }
      function g(d, f) {
        var p = [], m = h(
          d,
          f,
          /*Create*/
          !1
        );
        if (_(m))
          return p;
        for (var E = m.keys(), S = jt(E), x = 0; ; ) {
          var Lt = Dt(S);
          if (!Lt)
            return p.length = x, p;
          var Re = Ht(Lt);
          try {
            p[x] = Re;
          } catch (xe) {
            try {
              zt(S);
            } finally {
              throw xe;
            }
          }
          x++;
        }
      }
      function c(d, f, p) {
        var m = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (_(m) || !m.delete(d))
          return !1;
        if (m.size === 0) {
          var E = s.get(f);
          _(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Oe(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, h = r.getOwnMetadata, y = r.getOwnMetadataKeys, P = r.deleteMetadata, O = new I(), g = {
        isProviderFor: function(c, d) {
          var f = O.get(c);
          return !_(f) && f.has(d) ? !0 : y(c, d).length ? (_(f) && (f = new R(), O.set(c, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return g;
    }
    function X(r, s, a) {
      var h = it.getProvider(r, s);
      if (!_(h))
        return h;
      if (a) {
        if (it.setProvider(r, s, St))
          return St;
        throw new Error("Illegal state.");
      }
    }
    function Pe() {
      var r = {}, s = [], a = (
        /** @class */
        function() {
          function g(c, d, f) {
            this._index = 0, this._keys = c, this._values = d, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[l] = function() {
            return this;
          }, g.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var d = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, g.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
          }, g;
        }()
      ), h = (
        /** @class */
        function() {
          function g() {
            this._keys = [], this._values = [], this._cacheKey = r, this._cacheIndex = -2;
          }
          return Object.defineProperty(g.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), g.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, g.prototype.set = function(c, d) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, g.prototype.delete = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ft(c, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[l] = function() {
            return this.entries();
          }, g.prototype._find = function(c, d) {
            if (!ft(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ft(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return h;
      function y(g, c) {
        return g;
      }
      function P(g, c) {
        return c;
      }
      function O(g, c) {
        return [g, c];
      }
    }
    function Ce() {
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
    function Te() {
      var r = 16, s = A.create(), a = h();
      return (
        /** @class */
        function() {
          function c() {
            this._key = h();
          }
          return c.prototype.has = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? A.has(f, this._key) : !1;
          }, c.prototype.get = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? A.get(f, this._key) : void 0;
          }, c.prototype.set = function(d, f) {
            var p = y(
              d,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, c.prototype.delete = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = h();
          }, c;
        }()
      );
      function h() {
        var c;
        do
          c = "@@WeakMap@@" + g();
        while (A.has(s, c));
        return s[c] = !0, c;
      }
      function y(c, d) {
        if (!n.call(c, a)) {
          if (!d)
            return;
          Object.defineProperty(c, a, { value: A.create() });
        }
        return c[a];
      }
      function P(c, d) {
        for (var f = 0; f < d; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function O(c) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : P(d, c), d;
        }
        return P(new Array(c), c);
      }
      function g() {
        var c = O(r);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var d = "", f = 0; f < r; ++f) {
          var p = c[f];
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
function Ue(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Ie(i) {
  return function(t) {
    if (Ue(i)) {
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
  return Ie(i);
}
function He(i) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Bt(this, "_stylesApplied", !1);
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
function ze(i) {
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
function ut(i) {
  return ze(i);
}
var V;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown";
})(V || (V = {}));
var F;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(F || (F = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot = globalThis, $t = ot.ShadowRoot && (ot.ShadyCSS === void 0 || ot.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, bt = Symbol(), Vt = /* @__PURE__ */ new WeakMap();
let re = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== bt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if ($t && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Vt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Vt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Le = (i) => new re(typeof i == "string" ? i : i + "", void 0, bt), Be = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((n, o, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[u + 1], i[0]);
  return new re(e, i, bt);
}, Ge = (i, t) => {
  if ($t) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), o = ot.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = e.cssText, i.appendChild(n);
  }
}, Ft = $t ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Le(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: We, defineProperty: Ve, getOwnPropertyDescriptor: Fe, getOwnPropertyNames: qe, getOwnPropertySymbols: Ze, getPrototypeOf: Xe } = Object, H = globalThis, qt = H.trustedTypes, Ye = qt ? qt.emptyScript : "", vt = H.reactiveElementPolyfillSupport, J = (i, t) => i, at = { toAttribute(i, t) {
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
} }, At = (i, t) => !We(i, t), Zt = { attribute: !0, type: String, converter: at, reflect: !1, hasChanged: At };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class W extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Zt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(t, n, e);
      o !== void 0 && Ve(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: o, set: u } = Fe(this.prototype, t) ?? { get() {
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
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(J("elementProperties"))) return;
    const t = Xe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(J("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(J("properties"))) {
      const e = this.properties, n = [...qe(e), ...Ze(e)];
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
      for (const o of n) e.unshift(Ft(o));
    } else t !== void 0 && e.push(Ft(t));
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
    return Ge(t, this.constructor.elementStyles), t;
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
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : at).toAttribute(e, n.type);
      this._$Em = t, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var u;
    const n = this.constructor, o = n._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const l = n.getPropertyOptions(o), w = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : at;
      this._$Em = o, this[o] = w.fromAttribute(e, l.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, n) {
    if (t !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(t)), !(n.hasChanged ?? At)(this[t], e)) return;
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
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[J("elementProperties")] = /* @__PURE__ */ new Map(), W[J("finalized")] = /* @__PURE__ */ new Map(), vt == null || vt({ ReactiveElement: W }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q = globalThis, lt = Q.trustedTypes, Xt = lt ? lt.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ne = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, ie = "?" + j, Je = `<${ie}>`, L = document, tt = () => L.createComment(""), et = (i) => i === null || typeof i != "object" && typeof i != "function", Et = Array.isArray, Qe = (i) => Et(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, Y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Yt = /-->/g, Jt = />/g, D = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qt = /'/g, Kt = /"/g, se = /^(?:script|style|textarea|title)$/i, Ke = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), gt = Ke(1), q = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), te = /* @__PURE__ */ new WeakMap(), z = L.createTreeWalker(L, 129);
function oe(i, t) {
  if (!Et(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xt !== void 0 ? Xt.createHTML(t) : t;
}
const tr = (i, t) => {
  const e = i.length - 1, n = [];
  let o, u = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", l = Y;
  for (let w = 0; w < e; w++) {
    const v = i[w];
    let b, A, $ = -1, T = 0;
    for (; T < v.length && (l.lastIndex = T, A = l.exec(v), A !== null); ) T = l.lastIndex, l === Y ? A[1] === "!--" ? l = Yt : A[1] !== void 0 ? l = Jt : A[2] !== void 0 ? (se.test(A[2]) && (o = RegExp("</" + A[2], "g")), l = D) : A[3] !== void 0 && (l = D) : l === D ? A[0] === ">" ? (l = o ?? Y, $ = -1) : A[1] === void 0 ? $ = -2 : ($ = l.lastIndex - A[2].length, b = A[1], l = A[3] === void 0 ? D : A[3] === '"' ? Kt : Qt) : l === Kt || l === Qt ? l = D : l === Yt || l === Jt ? l = Y : (l = D, o = void 0);
    const R = l === D && i[w + 1].startsWith("/>") ? " " : "";
    u += l === Y ? v + Je : $ >= 0 ? (n.push(b), v.slice(0, $) + ne + v.slice($) + j + R) : v + j + ($ === -2 ? w : R);
  }
  return [oe(i, u + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class rt {
  constructor({ strings: t, _$litType$: e }, n) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const w = t.length - 1, v = this.parts, [b, A] = tr(t, e);
    if (this.el = rt.createElement(b, n), z.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = z.nextNode()) !== null && v.length < w; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(ne)) {
          const T = A[l++], R = o.getAttribute($).split(j), I = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: u, name: I[2], strings: R, ctor: I[1] === "." ? rr : I[1] === "?" ? nr : I[1] === "@" ? ir : ht }), o.removeAttribute($);
        } else $.startsWith(j) && (v.push({ type: 6, index: u }), o.removeAttribute($));
        if (se.test(o.tagName)) {
          const $ = o.textContent.split(j), T = $.length - 1;
          if (T > 0) {
            o.textContent = lt ? lt.emptyScript : "";
            for (let R = 0; R < T; R++) o.append($[R], tt()), z.nextNode(), v.push({ type: 2, index: ++u });
            o.append($[T], tt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ie) v.push({ type: 2, index: u });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(j, $ + 1)) !== -1; ) v.push({ type: 7, index: u }), $ += j.length - 1;
      }
      u++;
    }
  }
  static createElement(t, e) {
    const n = L.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Z(i, t, e = i, n) {
  var l, w;
  if (t === q) return t;
  let o = n !== void 0 ? (l = e.o) == null ? void 0 : l[n] : e.l;
  const u = et(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((w = o == null ? void 0 : o._$AO) == null || w.call(o, !1), u === void 0 ? o = void 0 : (o = new u(i), o._$AT(i, e, n)), n !== void 0 ? (e.o ?? (e.o = []))[n] = o : e.l = o), o !== void 0 && (t = Z(i, o._$AS(i, t.values), o, n)), t;
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
    const { el: { content: e }, parts: n } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? L).importNode(e, !0);
    z.currentNode = o;
    let u = z.nextNode(), l = 0, w = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let b;
        v.type === 2 ? b = new nt(u, u.nextSibling, this, t) : v.type === 1 ? b = new v.ctor(u, v.name, v.strings, this, t) : v.type === 6 && (b = new sr(u, this, t)), this._$AV.push(b), v = n[++w];
      }
      l !== (v == null ? void 0 : v.index) && (u = z.nextNode(), l++);
    }
    return z.currentNode = L, o;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class nt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this.v;
  }
  constructor(t, e, n, o) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    t = Z(this, t, e), et(t) ? t === C || t == null || t === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : t !== this._$AH && t !== q && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Qe(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== C && et(this._$AH) ? this._$AA.nextSibling.data = t : this.T(L.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var u;
    const { values: e, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = rt.createElement(oe(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(e);
    else {
      const l = new er(o, this), w = l.u(this.options);
      l.p(e), this.T(w), this._$AH = l;
    }
  }
  _$AC(t) {
    let e = te.get(t.strings);
    return e === void 0 && te.set(t.strings, e = new rt(t)), e;
  }
  k(t) {
    Et(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, o = 0;
    for (const u of t) o === e.length ? e.push(n = new nt(this.O(tt()), this.O(tt()), this, this.options)) : n = e[o], n._$AI(u), o++;
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
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(t, e = this, n, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) t = Z(this, t, e, 0), l = !et(t) || t !== this._$AH && t !== q, l && (this._$AH = t);
    else {
      const w = t;
      let v, b;
      for (t = u[0], v = 0; v < u.length - 1; v++) b = Z(this, w[n + v], e, v), b === q && (b = this._$AH[v]), l || (l = !et(b) || b !== this._$AH[v]), b === C ? t = C : t !== C && (t += (b ?? "") + u[v + 1]), this._$AH[v] = b;
    }
    l && !o && this.j(t);
  }
  j(t) {
    t === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class rr extends ht {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === C ? void 0 : t;
  }
}
class nr extends ht {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== C);
  }
}
class ir extends ht {
  constructor(t, e, n, o, u) {
    super(t, e, n, o, u), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Z(this, t, e, 0) ?? C) === q) return;
    const n = this._$AH, o = t === C && n !== C || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, u = t !== C && (n === C || o);
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
    Z(this, t);
  }
}
const mt = Q.litHtmlPolyfillSupport;
mt == null || mt(rt, nt), (Q.litHtmlVersions ?? (Q.litHtmlVersions = [])).push("3.2.0");
const or = (i, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = n._$litPart$;
  if (o === void 0) {
    const u = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = o = new nt(t.insertBefore(tt(), u), u, void 0, e ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class K extends W {
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
    return q;
  }
}
var ee;
K._$litElement$ = !0, K.finalized = !0, (ee = globalThis.litElementHydrateSupport) == null || ee.call(globalThis, { LitElement: K });
const wt = globalThis.litElementPolyfillSupport;
wt == null || wt({ LitElement: K });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: at, reflect: !1, hasChanged: At }, lr = (i = ar, t, e) => {
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
function ct(i) {
  return (t, e) => typeof e == "object" ? lr(i, t, e) : ((n, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(i, t, e);
}
var ur = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, U = (i, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? hr(t, e) : t, u = i.length - 1, l; u >= 0; u--)
    (l = i[u]) && (o = (n ? l(t, e, o) : l(o)) || o);
  return n && o && ur(t, e, o), o;
};
let k = class extends K {
  constructor() {
    super(...arguments), this.title = "Card", this.subtitle = "", this.padding = 20, this.elevated = !0;
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(i) {
    this.title = i;
  }
  get subtitleConfig() {
    return this.subtitle;
  }
  set subtitleConfig(i) {
    this.subtitle = i;
  }
  get paddingConfig() {
    return this.padding;
  }
  set paddingConfig(i) {
    this.padding = Number(i) || 20;
  }
  get elevatedConfig() {
    return this.elevated;
  }
  set elevatedConfig(i) {
    this.elevated = !!i;
  }
  render() {
    const i = [
      `--zero-card-padding:${Math.max(0, Number(this.padding) || 0)}px`,
      `--zero-card-shadow:${this.elevated ? "0 12px 28px rgba(19, 34, 56, 0.08)" : "none"}`
    ].join(";");
    return gt`
      <article class="card" style=${i}>
        ${this.title ? gt`<h3 class="title">${this.title}</h3>` : null}
        ${this.subtitle ? gt`<p class="subtitle">${this.subtitle}</p>` : null}
        <div class="body">
          <slot></slot>
        </div>
      </article>
    `;
  }
};
k.styles = Be`
    :host {
      display: block;
    }

    .card {
      border-radius: var(--zero-card-radius, 18px);
      padding: var(--zero-card-padding, 20px);
      background: var(--zero-card-bg, #fffdf9);
      border: 1px solid rgba(19, 34, 56, 0.08);
      box-shadow: var(--zero-card-shadow, 0 12px 28px rgba(19, 34, 56, 0.08));
    }

    .title {
      margin: 0;
      font-size: 1.1rem;
      color: #132238;
    }

    .subtitle {
      margin: 6px 0 0;
      color: #5b6470;
      font-size: 0.92rem;
    }

    .body {
      margin-top: 14px;
    }
  `;
U([
  ct({ type: String })
], k.prototype, "title", 2);
U([
  ct({ type: String })
], k.prototype, "subtitle", 2);
U([
  ct({ type: Number })
], k.prototype, "padding", 2);
U([
  ct({ type: Boolean })
], k.prototype, "elevated", 2);
U([
  ut({
    attributeType: F.PROPERTY,
    uiComponentType: V.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title"
  })
], k.prototype, "titleConfig", 1);
U([
  ut({
    attributeType: F.PROPERTY,
    uiComponentType: V.TEXT_INPUT,
    displayLabel: "Subtitle",
    fieldMappings: "subtitle"
  })
], k.prototype, "subtitleConfig", 1);
U([
  ut({
    attributeType: F.PROPERTY,
    uiComponentType: V.NUMBER_INPUT,
    displayLabel: "Padding (px)",
    fieldMappings: "padding"
  })
], k.prototype, "paddingConfig", 1);
U([
  ut({
    attributeType: F.PROPERTY,
    uiComponentType: V.CHECKBOX,
    displayLabel: "Elevated",
    fieldMappings: "elevated"
  })
], k.prototype, "elevatedConfig", 1);
k = U([
  je({
    name: "zero-card",
    version: "1.0.0",
    title: "Card",
    elementSelector: "zero-card",
    group: "Surfaces",
    iconName: "card-icon.png"
  }),
  He()
], k);
export {
  k as ZeroCard
};
