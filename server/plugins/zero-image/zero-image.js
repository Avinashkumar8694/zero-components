var ke = Object.defineProperty;
var xe = (i, t, e) => t in i ? ke(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var Lt = (i, t, e) => xe(i, typeof t != "symbol" ? t + "" : t, e);
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
    function w() {
      return l() || u();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", w = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, b = !w && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: w ? function() {
        return pt(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return pt({ __proto__: null });
      } : function() {
        return pt({});
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
    }, $ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Oe(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pe(), I = typeof WeakMap == "function" ? WeakMap : Ce(), G = o ? Symbol.for("@reflect-metadata:registry") : void 0, st = Ee(), Et = Se(st);
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
        if (!M(s))
          throw new TypeError();
        if (!M(c) && !_(c) && !W(c))
          throw new TypeError();
        return W(c) && (c = void 0), a = N(a), _e(r, s, a, c);
      }
    }
    t("decorate", oe);
    function ae(r, s) {
      function a(c, y) {
        if (!M(c))
          throw new TypeError();
        if (!_(y) && !be(y))
          throw new TypeError();
        Pt(r, s, c, y);
      }
      return a;
    }
    t("metadata", ae);
    function ue(r, s, a, c) {
      if (!M(a))
        throw new TypeError();
      return _(c) || (c = N(c)), Pt(r, s, a, c);
    }
    t("defineMetadata", ue);
    function le(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = N(a)), St(r, s, a);
    }
    t("hasMetadata", le);
    function ce(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = N(a)), ht(r, s, a);
    }
    t("hasOwnMetadata", ce);
    function he(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = N(a)), Mt(r, s, a);
    }
    t("getMetadata", he);
    function fe(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = N(a)), Ot(r, s, a);
    }
    t("getOwnMetadata", fe);
    function de(r, s) {
      if (!M(r))
        throw new TypeError();
      return _(s) || (s = N(s)), Ct(r, s);
    }
    t("getMetadataKeys", de);
    function pe(r, s) {
      if (!M(r))
        throw new TypeError();
      return _(s) || (s = N(s)), Tt(r, s);
    }
    t("getOwnMetadataKeys", pe);
    function ye(r, s, a) {
      if (!M(s))
        throw new TypeError();
      if (_(a) || (a = N(a)), !M(s))
        throw new TypeError();
      _(a) || (a = N(a));
      var c = q(
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
        if (!_(y) && !W(y)) {
          if (!Nt(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function _e(r, s, a, c) {
      for (var y = r.length - 1; y >= 0; --y) {
        var P = r[y], O = P(s, a, c);
        if (!_(O) && !W(O)) {
          if (!M(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function St(r, s, a) {
      var c = ht(r, s, a);
      if (c)
        return !0;
      var y = dt(s);
      return W(y) ? !1 : St(r, y, a);
    }
    function ht(r, s, a) {
      var c = q(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : kt(c.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Mt(r, s, a) {
      var c = ht(r, s, a);
      if (c)
        return Ot(r, s, a);
      var y = dt(s);
      if (!W(y))
        return Mt(r, y, a);
    }
    function Ot(r, s, a) {
      var c = q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Pt(r, s, a, c) {
      var y = q(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, c);
    }
    function Ct(r, s) {
      var a = Tt(r, s), c = dt(r);
      if (c === null)
        return a;
      var y = Ct(c, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new R(), O = [], m = 0, h = a; m < h.length; m++) {
        var f = h[m], d = P.has(f);
        d || (P.add(f), O.push(f));
      }
      for (var p = 0, g = y; p < g.length; p++) {
        var f = g[p], d = P.has(f);
        d || (P.add(f), O.push(f));
      }
      return O;
    }
    function Tt(r, s) {
      var a = q(
        r,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, s) : [];
    }
    function Rt(r) {
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
    function W(r) {
      return r === null;
    }
    function me(r) {
      return typeof r == "symbol";
    }
    function M(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function ge(r, s) {
      switch (Rt(r)) {
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
      var a = "string", c = Ut(r, l);
      if (c !== void 0) {
        var y = c.call(r, a);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return we(r);
    }
    function we(r, s) {
      var a, c;
      {
        var y = r.toString;
        if (ot(y)) {
          var c = y.call(r);
          if (!M(c))
            return c;
        }
        var a = r.valueOf;
        if (ot(a)) {
          var c = a.call(r);
          if (!M(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function kt(r) {
      return !!r;
    }
    function $e(r) {
      return "" + r;
    }
    function N(r) {
      var s = ge(r);
      return me(s) ? s : $e(s);
    }
    function xt(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function ot(r) {
      return typeof r == "function";
    }
    function Nt(r) {
      return typeof r == "function";
    }
    function be(r) {
      switch (Rt(r)) {
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
        if (!ot(a))
          throw new TypeError();
        return a;
      }
    }
    function It(r) {
      var s = Ut(r, u);
      if (!ot(s))
        throw new TypeError();
      var a = s.call(r);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function jt(r) {
      return r.value;
    }
    function Ht(r) {
      var s = r.next();
      return s.done ? !1 : s;
    }
    function Dt(r) {
      var s = r.return;
      s && s.call(r);
    }
    function dt(r) {
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
      !_(G) && typeof e.Reflect < "u" && !(G in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (r = Me(e.Reflect));
      var s, a, c, y = new I(), P = {
        registerProvider: O,
        getProvider: h,
        setProvider: d
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
            c === void 0 && (c = new R()), c.add(p);
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
              for (var E = It(c); ; ) {
                var S = Ht(E);
                if (!S)
                  return;
                var k = jt(S);
                if (k.isProviderFor(p, g))
                  return Dt(E), k;
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
      function f(p) {
        if (_(p))
          throw new TypeError();
        return s === p || a === p || !_(c) && c.has(p);
      }
      function d(p, g, E) {
        if (!f(E))
          throw new Error("Metadata provider not registered.");
        var S = h(p, g);
        if (S !== E) {
          if (!_(S))
            return !1;
          var k = y.get(p);
          _(k) && (k = new T(), y.set(p, k)), k.set(g, E);
        }
        return !0;
      }
    }
    function Ee() {
      var r;
      return !_(G) && M(e.Reflect) && Object.isExtensible(e.Reflect) && (r = e.Reflect[G]), _(r) && (r = Ae()), !_(G) && M(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function Se(r) {
      var s = new I(), a = {
        isProviderFor: function(f, d) {
          var p = s.get(f);
          return _(p) ? !1 : p.has(d);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: h
      };
      return st.registerProvider(a), a;
      function c(f, d, p) {
        var g = s.get(f), E = !1;
        if (_(g)) {
          if (!p)
            return;
          g = new T(), s.set(f, g), E = !0;
        }
        var S = g.get(d);
        if (_(S)) {
          if (!p)
            return;
          if (S = new T(), g.set(d, S), !r.setProvider(f, d, a))
            throw g.delete(d), E && s.delete(f), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(f, d, p) {
        var g = c(
          d,
          p,
          /*Create*/
          !1
        );
        return _(g) ? !1 : kt(g.has(f));
      }
      function P(f, d, p) {
        var g = c(
          d,
          p,
          /*Create*/
          !1
        );
        if (!_(g))
          return g.get(f);
      }
      function O(f, d, p, g) {
        var E = c(
          p,
          g,
          /*Create*/
          !0
        );
        E.set(f, d);
      }
      function m(f, d) {
        var p = [], g = c(
          f,
          d,
          /*Create*/
          !1
        );
        if (_(g))
          return p;
        for (var E = g.keys(), S = It(E), k = 0; ; ) {
          var zt = Ht(S);
          if (!zt)
            return p.length = k, p;
          var Te = jt(zt);
          try {
            p[k] = Te;
          } catch (Re) {
            try {
              Dt(S);
            } finally {
              throw Re;
            }
          }
          k++;
        }
      }
      function h(f, d, p) {
        var g = c(
          d,
          p,
          /*Create*/
          !1
        );
        if (_(g) || !g.delete(f))
          return !1;
        if (g.size === 0) {
          var E = s.get(d);
          _(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Me(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, c = r.getOwnMetadata, y = r.getOwnMetadataKeys, P = r.deleteMetadata, O = new I(), m = {
        isProviderFor: function(h, f) {
          var d = O.get(h);
          return !_(d) && d.has(f) ? !0 : y(h, f).length ? (_(d) && (d = new R(), O.set(h, d)), d.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function q(r, s, a) {
      var c = st.getProvider(r, s);
      if (!_(c))
        return c;
      if (a) {
        if (st.setProvider(r, s, Et))
          return Et;
        throw new Error("Illegal state.");
      }
    }
    function Oe() {
      var r = {}, s = [], a = (
        /** @class */
        function() {
          function m(h, f, d) {
            this._index = 0, this._keys = h, this._values = f, this._selector = d;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var f = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: f, done: !1 };
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
            var f = this._find(
              h,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, m.prototype.set = function(h, f) {
            var d = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[d] = f, this;
          }, m.prototype.delete = function(h) {
            var f = this._find(
              h,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var d = this._keys.length, p = f + 1; p < d; p++)
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
            return new a(this._keys, this._values, O);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(h, f) {
            if (!ft(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var d = 0; d < this._keys.length; d++)
                if (ft(this._keys[d], h)) {
                  this._cacheIndex = d;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
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
      function O(m, h) {
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
          }, s.prototype[u] = function() {
            return this.keys();
          }, s;
        }()
      );
      return r;
    }
    function Ce() {
      var r = 16, s = A.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? A.has(d, this._key) : !1;
          }, h.prototype.get = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? A.get(d, this._key) : void 0;
          }, h.prototype.set = function(f, d) {
            var p = y(
              f,
              /*create*/
              !0
            );
            return p[this._key] = d, this;
          }, h.prototype.delete = function(f) {
            var d = y(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? delete d[this._key] : !1;
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
      function y(h, f) {
        if (!n.call(h, a)) {
          if (!f)
            return;
          Object.defineProperty(h, a, { value: A.create() });
        }
        return h[a];
      }
      function P(h, f) {
        for (var d = 0; d < f; ++d)
          h[d] = Math.random() * 255 | 0;
        return h;
      }
      function O(h) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : P(f, h), f;
        }
        return P(new Array(h), h);
      }
      function m() {
        var h = O(r);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var f = "", d = 0; d < r; ++d) {
          var p = h[d];
          (d === 4 || d === 6 || d === 8) && (f += "-"), p < 16 && (f += "0"), f += p.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function pt(r) {
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
function Ie(i) {
  return Ue(i);
}
function je(i) {
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
      update(l) {
        try {
          super.update(l);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var v;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), w = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && w) {
          const b = new CSSStyleSheet(), A = (v = l.sheet) == null ? void 0 : v.cssRules;
          A && (Array.from(A).forEach(($) => b.insertRule($.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          this.shadowRoot.appendChild(b);
        }
        u.forEach((b) => {
          const A = b.cloneNode(!0);
          this.shadowRoot.appendChild(A);
        });
      }
    }
    return e;
  };
}
function He(i) {
  var e;
  if (((e = i == null ? void 0 : i.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function De(i) {
  return function(t, e) {
    try {
      He(i);
      const n = Reflect.getMetadata("ZeroAttribute", t) || [];
      typeof e == "string" && typeof t[e] != "function" && (i.fieldMappings = i.fieldMappings ?? e), n.push(i), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function gt(i) {
  return De(i);
}
var Q;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown";
})(Q || (Q = {}));
var K;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(K || (K = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = globalThis, wt = at.ShadowRoot && (at.ShadyCSS === void 0 || at.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $t = Symbol(), Bt = /* @__PURE__ */ new WeakMap();
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
      n && (t = Bt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Bt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ze = (i) => new ee(typeof i == "string" ? i : i + "", void 0, $t), Le = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[l + 1], i[0]);
  return new ee(e, i, $t);
}, Ge = (i, t) => {
  if (wt) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), o = at.litNonce;
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
const { is: We, defineProperty: Be, getOwnPropertyDescriptor: Ve, getOwnPropertyNames: Fe, getOwnPropertySymbols: qe, getPrototypeOf: Ze } = Object, H = globalThis, Ft = H.trustedTypes, Xe = Ft ? Ft.emptyScript : "", yt = H.reactiveElementPolyfillSupport, X = (i, t) => i, ut = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Xe : null;
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
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class B extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = qt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(t, n, e);
      o !== void 0 && Be(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: o, set: l } = Ve(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(u) {
      const w = o == null ? void 0 : o.call(this);
      l.call(this, u), this.requestUpdate(t, w, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? qt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const t = Ze(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
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
    var l;
    const n = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, n);
    if (o !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ut).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l;
    const n = this.constructor, o = n._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const u = n.getPropertyOptions(o), w = typeof u.converter == "function" ? { fromAttribute: u.converter } : ((l = u.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? u.converter : ut;
      this._$Em = o, this[o] = w.fromAttribute(e, u.type), this._$Em = null;
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) u.wrapped !== !0 || this._$AL.has(l) || this[l] === void 0 || this.P(l, this[l], u);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
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
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[X("elementProperties")] = /* @__PURE__ */ new Map(), B[X("finalized")] = /* @__PURE__ */ new Map(), yt == null || yt({ ReactiveElement: B }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, lt = Y.trustedTypes, Zt = lt ? lt.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, re = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, ne = "?" + j, Ye = `<${ne}>`, L = document, tt = () => L.createComment(""), et = (i) => i === null || typeof i != "object" && typeof i != "function", At = Array.isArray, Je = (i) => At(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", vt = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Xt = /-->/g, Yt = />/g, D = RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Jt = /'/g, Qt = /"/g, ie = /^(?:script|style|textarea|title)$/i, Qe = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), Ke = Qe(1), V = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Kt = /* @__PURE__ */ new WeakMap(), z = L.createTreeWalker(L, 129);
function se(i, t) {
  if (!At(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Zt !== void 0 ? Zt.createHTML(t) : t;
}
const tr = (i, t) => {
  const e = i.length - 1, n = [];
  let o, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = Z;
  for (let w = 0; w < e; w++) {
    const v = i[w];
    let b, A, $ = -1, T = 0;
    for (; T < v.length && (u.lastIndex = T, A = u.exec(v), A !== null); ) T = u.lastIndex, u === Z ? A[1] === "!--" ? u = Xt : A[1] !== void 0 ? u = Yt : A[2] !== void 0 ? (ie.test(A[2]) && (o = RegExp("</" + A[2], "g")), u = D) : A[3] !== void 0 && (u = D) : u === D ? A[0] === ">" ? (u = o ?? Z, $ = -1) : A[1] === void 0 ? $ = -2 : ($ = u.lastIndex - A[2].length, b = A[1], u = A[3] === void 0 ? D : A[3] === '"' ? Qt : Jt) : u === Qt || u === Jt ? u = D : u === Xt || u === Yt ? u = Z : (u = D, o = void 0);
    const R = u === D && i[w + 1].startsWith("/>") ? " " : "";
    l += u === Z ? v + Ye : $ >= 0 ? (n.push(b), v.slice(0, $) + re + v.slice($) + j + R) : v + j + ($ === -2 ? w : R);
  }
  return [se(i, l + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class rt {
  constructor({ strings: t, _$litType$: e }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const w = t.length - 1, v = this.parts, [b, A] = tr(t, e);
    if (this.el = rt.createElement(b, n), z.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = z.nextNode()) !== null && v.length < w; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(re)) {
          const T = A[u++], R = o.getAttribute($).split(j), I = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: l, name: I[2], strings: R, ctor: I[1] === "." ? rr : I[1] === "?" ? nr : I[1] === "@" ? ir : ct }), o.removeAttribute($);
        } else $.startsWith(j) && (v.push({ type: 6, index: l }), o.removeAttribute($));
        if (ie.test(o.tagName)) {
          const $ = o.textContent.split(j), T = $.length - 1;
          if (T > 0) {
            o.textContent = lt ? lt.emptyScript : "";
            for (let R = 0; R < T; R++) o.append($[R], tt()), z.nextNode(), v.push({ type: 2, index: ++l });
            o.append($[T], tt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ne) v.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(j, $ + 1)) !== -1; ) v.push({ type: 7, index: l }), $ += j.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = L.createElement("template");
    return n.innerHTML = t, n;
  }
}
function F(i, t, e = i, n) {
  var u, w;
  if (t === V) return t;
  let o = n !== void 0 ? (u = e.o) == null ? void 0 : u[n] : e.l;
  const l = et(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((w = o == null ? void 0 : o._$AO) == null || w.call(o, !1), l === void 0 ? o = void 0 : (o = new l(i), o._$AT(i, e, n)), n !== void 0 ? (e.o ?? (e.o = []))[n] = o : e.l = o), o !== void 0 && (t = F(i, o._$AS(i, t.values), o, n)), t;
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
    let l = z.nextNode(), u = 0, w = 0, v = n[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let b;
        v.type === 2 ? b = new nt(l, l.nextSibling, this, t) : v.type === 1 ? b = new v.ctor(l, v.name, v.strings, this, t) : v.type === 6 && (b = new sr(l, this, t)), this._$AV.push(b), v = n[++w];
      }
      u !== (v == null ? void 0 : v.index) && (l = z.nextNode(), u++);
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
    t = F(this, t, e), et(t) ? t === C || t == null || t === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : t !== this._$AH && t !== V && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Je(t) ? this.k(t) : this._(t);
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
    var l;
    const { values: e, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = rt.createElement(se(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(e);
    else {
      const u = new er(o, this), w = u.u(this.options);
      u.p(e), this.T(w), this._$AH = u;
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
    for (const l of t) o === e.length ? e.push(n = new nt(this.O(tt()), this.O(tt()), this, this.options)) : n = e[o], n._$AI(l), o++;
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
class ct {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, o, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(t, e = this, n, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = F(this, t, e, 0), u = !et(t) || t !== this._$AH && t !== V, u && (this._$AH = t);
    else {
      const w = t;
      let v, b;
      for (t = l[0], v = 0; v < l.length - 1; v++) b = F(this, w[n + v], e, v), b === V && (b = this._$AH[v]), u || (u = !et(b) || b !== this._$AH[v]), b === C ? t = C : t !== C && (t += (b ?? "") + l[v + 1]), this._$AH[v] = b;
    }
    u && !o && this.j(t);
  }
  j(t) {
    t === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class rr extends ct {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === C ? void 0 : t;
  }
}
class nr extends ct {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== C);
  }
}
class ir extends ct {
  constructor(t, e, n, o, l) {
    super(t, e, n, o, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = F(this, t, e, 0) ?? C) === V) return;
    const n = this._$AH, o = t === C && n !== C || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== C && (n === C || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
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
    F(this, t);
  }
}
const _t = Y.litHtmlPolyfillSupport;
_t == null || _t(rt, nt), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.2.0");
const or = (i, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = o = new nt(t.insertBefore(tt(), l), l, void 0, e ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class J extends B {
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
    return V;
  }
}
var te;
J._$litElement$ = !0, J.finalized = !0, (te = globalThis.litElementHydrateSupport) == null || te.call(globalThis, { LitElement: J });
const mt = globalThis.litElementPolyfillSupport;
mt == null || mt({ LitElement: J });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: ut, reflect: !1, hasChanged: bt }, ur = (i = ar, t, e) => {
  const { kind: n, metadata: o } = e;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), l.set(e.name, i), n === "accessor") {
    const { name: u } = e;
    return { set(w) {
      const v = t.get.call(this);
      t.set.call(this, w), this.requestUpdate(u, v, i);
    }, init(w) {
      return w !== void 0 && this.P(u, void 0, i), w;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(w) {
      const v = this[u];
      t.call(this, w), this.requestUpdate(u, v, i);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function it(i) {
  return (t, e) => typeof e == "object" ? ur(i, t, e) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, u ? { ...n, wrapped: !0 } : n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(i, t, e);
}
var lr = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, U = (i, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? cr(t, e) : t, l = i.length - 1, u; l >= 0; l--)
    (u = i[l]) && (o = (n ? u(t, e, o) : u(o)) || o);
  return n && o && lr(t, e, o), o;
};
let x = class extends J {
  constructor() {
    super(...arguments), this.src = "https://picsum.photos/1200/800", this.alt = "Image", this.fit = "cover", this.aspectRatio = "16 / 9", this.radius = 18;
  }
  get srcConfig() {
    return this.src;
  }
  set srcConfig(i) {
    this.src = i;
  }
  get altConfig() {
    return this.alt;
  }
  set altConfig(i) {
    this.alt = i;
  }
  get fitConfig() {
    return this.fit;
  }
  set fitConfig(i) {
    this.fit = i || "cover";
  }
  render() {
    const i = [
      `--zero-image-fit:${this.fit || "cover"}`,
      `--zero-image-ratio:${this.aspectRatio || "auto"}`,
      `--zero-image-radius:${Math.max(0, Number(this.radius) || 0)}px`
    ].join(";");
    return Ke`
      <div class="frame" style=${i}>
        <img src=${this.src} alt=${this.alt} loading="lazy" />
      </div>
    `;
  }
};
x.styles = Le`
    :host {
      display: block;
      width: 100%;
    }

    .frame {
      width: 100%;
      overflow: hidden;
      border-radius: var(--zero-image-radius, 18px);
      aspect-ratio: var(--zero-image-ratio, auto);
      background: rgba(19, 34, 56, 0.05);
    }

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: var(--zero-image-fit, cover);
    }
  `;
U([
  it({ type: String })
], x.prototype, "src", 2);
U([
  it({ type: String })
], x.prototype, "alt", 2);
U([
  it({ type: String })
], x.prototype, "fit", 2);
U([
  it({ type: String, attribute: "aspect-ratio" })
], x.prototype, "aspectRatio", 2);
U([
  it({ type: Number })
], x.prototype, "radius", 2);
U([
  gt({
    attributeType: K.PROPERTY,
    uiComponentType: Q.TEXT_INPUT,
    displayLabel: "Source",
    fieldMappings: "src"
  })
], x.prototype, "srcConfig", 1);
U([
  gt({
    attributeType: K.PROPERTY,
    uiComponentType: Q.TEXT_INPUT,
    displayLabel: "Alt",
    fieldMappings: "alt"
  })
], x.prototype, "altConfig", 1);
U([
  gt({
    attributeType: K.PROPERTY,
    uiComponentType: Q.DROPDOWN,
    displayLabel: "Fit",
    fieldMappings: "fit",
    optionItems: [
      { label: "Cover", value: "cover" },
      { label: "Contain", value: "contain" },
      { label: "Fill", value: "fill" }
    ]
  })
], x.prototype, "fitConfig", 1);
x = U([
  Ie({
    name: "zero-image",
    version: "1.0.0",
    title: "Image",
    elementSelector: "zero-image",
    group: "Media",
    iconName: "image-icon.png"
  }),
  je()
], x);
export {
  x as ZeroImage
};
