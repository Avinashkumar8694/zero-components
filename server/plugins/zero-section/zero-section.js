var Re = Object.defineProperty;
var ke = (i, t, e) => t in i ? Re(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var Lt = (i, t, e) => ke(i, typeof t != "symbol" ? t + "" : t, e);
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Bt;
(function(i) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Wt == "object" ? Wt : typeof self == "object" ? self : typeof this == "object" ? this : w(), n = o(i);
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
        return ft(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ft({ __proto__: null });
      } : function() {
        return ft({});
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
    }, $ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Oe(), x = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pe(), U = typeof WeakMap == "function" ? WeakMap : Ce(), W = o ? Symbol.for("@reflect-metadata:registry") : void 0, it = Ee(), Et = Se(it);
    function oe(r, s, a, h) {
      if (_(a)) {
        if (!kt(r))
          throw new TypeError();
        if (!Nt(s))
          throw new TypeError();
        return ve(r, s);
      } else {
        if (!kt(r))
          throw new TypeError();
        if (!M(s))
          throw new TypeError();
        if (!M(h) && !_(h) && !B(h))
          throw new TypeError();
        return B(h) && (h = void 0), a = k(a), _e(r, s, a, h);
      }
    }
    t("decorate", oe);
    function ae(r, s) {
      function a(h, y) {
        if (!M(h))
          throw new TypeError();
        if (!_(y) && !be(y))
          throw new TypeError();
        Pt(r, s, h, y);
      }
      return a;
    }
    t("metadata", ae);
    function ue(r, s, a, h) {
      if (!M(a))
        throw new TypeError();
      return _(h) || (h = k(h)), Pt(r, s, a, h);
    }
    t("defineMetadata", ue);
    function le(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = k(a)), St(r, s, a);
    }
    t("hasMetadata", le);
    function he(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = k(a)), ht(r, s, a);
    }
    t("hasOwnMetadata", he);
    function ce(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = k(a)), Mt(r, s, a);
    }
    t("getMetadata", ce);
    function de(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = k(a)), Ot(r, s, a);
    }
    t("getOwnMetadata", de);
    function fe(r, s) {
      if (!M(r))
        throw new TypeError();
      return _(s) || (s = k(s)), Ct(r, s);
    }
    t("getMetadataKeys", fe);
    function pe(r, s) {
      if (!M(r))
        throw new TypeError();
      return _(s) || (s = k(s)), Tt(r, s);
    }
    t("getOwnMetadataKeys", pe);
    function ye(r, s, a) {
      if (!M(s))
        throw new TypeError();
      if (_(a) || (a = k(a)), !M(s))
        throw new TypeError();
      _(a) || (a = k(a));
      var h = q(
        s,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : h.OrdinaryDeleteMetadata(r, s, a);
    }
    t("deleteMetadata", ye);
    function ve(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var h = r[a], y = h(s);
        if (!_(y) && !B(y)) {
          if (!Nt(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function _e(r, s, a, h) {
      for (var y = r.length - 1; y >= 0; --y) {
        var P = r[y], O = P(s, a, h);
        if (!_(O) && !B(O)) {
          if (!M(O))
            throw new TypeError();
          h = O;
        }
      }
      return h;
    }
    function St(r, s, a) {
      var h = ht(r, s, a);
      if (h)
        return !0;
      var y = dt(s);
      return B(y) ? !1 : St(r, y, a);
    }
    function ht(r, s, a) {
      var h = q(
        s,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : Rt(h.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Mt(r, s, a) {
      var h = ht(r, s, a);
      if (h)
        return Ot(r, s, a);
      var y = dt(s);
      if (!B(y))
        return Mt(r, y, a);
    }
    function Ot(r, s, a) {
      var h = q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(h))
        return h.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Pt(r, s, a, h) {
      var y = q(
        a,
        h,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, h);
    }
    function Ct(r, s) {
      var a = Tt(r, s), h = dt(r);
      if (h === null)
        return a;
      var y = Ct(h, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new x(), O = [], g = 0, c = a; g < c.length; g++) {
        var d = c[g], f = P.has(d);
        f || (P.add(d), O.push(d));
      }
      for (var p = 0, m = y; p < m.length; p++) {
        var d = m[p], f = P.has(d);
        f || (P.add(d), O.push(d));
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
    function B(r) {
      return r === null;
    }
    function ge(r) {
      return typeof r == "symbol";
    }
    function M(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function me(r, s) {
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
      var a = "string", h = Ut(r, l);
      if (h !== void 0) {
        var y = h.call(r, a);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return we(r);
    }
    function we(r, s) {
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
    function Rt(r) {
      return !!r;
    }
    function $e(r) {
      return "" + r;
    }
    function k(r) {
      var s = me(r);
      return ge(s) ? s : $e(s);
    }
    function kt(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function st(r) {
      return typeof r == "function";
    }
    function Nt(r) {
      return typeof r == "function";
    }
    function be(r) {
      switch (xt(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ct(r, s) {
      return r === s || r !== r && s !== s;
    }
    function Ut(r, s) {
      var a = r[s];
      if (a != null) {
        if (!st(a))
          throw new TypeError();
        return a;
      }
    }
    function It(r) {
      var s = Ut(r, u);
      if (!st(s))
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
      var a = r.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return s;
      var y = h.constructor;
      return typeof y != "function" || y === r ? s : y;
    }
    function Ae() {
      var r;
      !_(W) && typeof e.Reflect < "u" && !(W in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (r = Me(e.Reflect));
      var s, a, h, y = new U(), P = {
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
            h === void 0 && (h = new x()), h.add(p);
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
              for (var E = It(h); ; ) {
                var S = Ht(E);
                if (!S)
                  return;
                var R = jt(S);
                if (R.isProviderFor(p, m))
                  return Dt(E), R;
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
          var R = y.get(p);
          _(R) && (R = new T(), y.set(p, R)), R.set(m, E);
        }
        return !0;
      }
    }
    function Ee() {
      var r;
      return !_(W) && M(e.Reflect) && Object.isExtensible(e.Reflect) && (r = e.Reflect[W]), _(r) && (r = Ae()), !_(W) && M(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, W, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function Se(r) {
      var s = new U(), a = {
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
        return _(m) ? !1 : Rt(m.has(d));
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
        for (var E = m.keys(), S = It(E), R = 0; ; ) {
          var zt = Ht(S);
          if (!zt)
            return p.length = R, p;
          var Te = jt(zt);
          try {
            p[R] = Te;
          } catch (xe) {
            try {
              Dt(S);
            } finally {
              throw xe;
            }
          }
          R++;
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
    function Me(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, h = r.getOwnMetadata, y = r.getOwnMetadataKeys, P = r.deleteMetadata, O = new U(), g = {
        isProviderFor: function(c, d) {
          var f = O.get(c);
          return !_(f) && f.has(d) ? !0 : y(c, d).length ? (_(f) && (f = new x(), O.set(c, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return g;
    }
    function q(r, s, a) {
      var h = it.getProvider(r, s);
      if (!_(h))
        return h;
      if (a) {
        if (it.setProvider(r, s, Et))
          return Et;
        throw new Error("Illegal state.");
      }
    }
    function Oe() {
      var r = {}, s = [], a = (
        /** @class */
        function() {
          function g(c, d, f) {
            this._index = 0, this._keys = c, this._values = d, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
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
              return this._keys.length--, this._values.length--, ct(c, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
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
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(c, d) {
            if (!ct(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ct(this._keys[f], c)) {
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
    function ft(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Bt || (Bt = {}));
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
const ot = globalThis, mt = ot.ShadowRoot && (ot.ShadyCSS === void 0 || ot.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, wt = Symbol(), Gt = /* @__PURE__ */ new WeakMap();
let ee = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== wt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (mt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Gt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Gt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ze = (i) => new ee(typeof i == "string" ? i : i + "", void 0, wt), Le = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[l + 1], i[0]);
  return new ee(e, i, wt);
}, We = (i, t) => {
  if (mt) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), o = ot.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = e.cssText, i.appendChild(n);
  }
}, Vt = mt ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return ze(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Be, defineProperty: Ge, getOwnPropertyDescriptor: Ve, getOwnPropertyNames: Fe, getOwnPropertySymbols: qe, getPrototypeOf: Ze } = Object, j = globalThis, Ft = j.trustedTypes, Ye = Ft ? Ft.emptyScript : "", pt = j.reactiveElementPolyfillSupport, Y = (i, t) => i, at = { toAttribute(i, t) {
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
} }, $t = (i, t) => !Be(i, t), qt = { attribute: !0, type: String, converter: at, reflect: !1, hasChanged: $t };
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
      const n = Symbol(), o = this.getPropertyDescriptor(t, n, e);
      o !== void 0 && Ge(this.prototype, t, o);
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
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const t = Ze(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
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
    return We(t, this.constructor.elementStyles), t;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : at).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l;
    const n = this.constructor, o = n._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const u = n.getPropertyOptions(o), w = typeof u.converter == "function" ? { fromAttribute: u.converter } : ((l = u.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? u.converter : at;
      this._$Em = o, this[o] = w.fromAttribute(e, u.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, n) {
    if (t !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(t)), !(n.hasChanged ?? $t)(this[t], e)) return;
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
G.elementStyles = [], G.shadowRootOptions = { mode: "open" }, G[Y("elementProperties")] = /* @__PURE__ */ new Map(), G[Y("finalized")] = /* @__PURE__ */ new Map(), pt == null || pt({ ReactiveElement: G }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, ut = X.trustedTypes, Zt = ut ? ut.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, re = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, ne = "?" + I, Xe = `<${ne}>`, z = document, tt = () => z.createComment(""), et = (i) => i === null || typeof i != "object" && typeof i != "function", bt = Array.isArray, Je = (i) => bt(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", yt = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Yt = /-->/g, Xt = />/g, H = RegExp(`>|${yt}(?:([^\\s"'>=/]+)(${yt}*=${yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Jt = /'/g, Qt = /"/g, ie = /^(?:script|style|textarea|title)$/i, Qe = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), Ke = Qe(1), V = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Kt = /* @__PURE__ */ new WeakMap(), D = z.createTreeWalker(z, 129);
function se(i, t) {
  if (!bt(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Zt !== void 0 ? Zt.createHTML(t) : t;
}
const tr = (i, t) => {
  const e = i.length - 1, n = [];
  let o, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = Z;
  for (let w = 0; w < e; w++) {
    const v = i[w];
    let b, A, $ = -1, T = 0;
    for (; T < v.length && (u.lastIndex = T, A = u.exec(v), A !== null); ) T = u.lastIndex, u === Z ? A[1] === "!--" ? u = Yt : A[1] !== void 0 ? u = Xt : A[2] !== void 0 ? (ie.test(A[2]) && (o = RegExp("</" + A[2], "g")), u = H) : A[3] !== void 0 && (u = H) : u === H ? A[0] === ">" ? (u = o ?? Z, $ = -1) : A[1] === void 0 ? $ = -2 : ($ = u.lastIndex - A[2].length, b = A[1], u = A[3] === void 0 ? H : A[3] === '"' ? Qt : Jt) : u === Qt || u === Jt ? u = H : u === Yt || u === Xt ? u = Z : (u = H, o = void 0);
    const x = u === H && i[w + 1].startsWith("/>") ? " " : "";
    l += u === Z ? v + Xe : $ >= 0 ? (n.push(b), v.slice(0, $) + re + v.slice($) + I + x) : v + I + ($ === -2 ? w : x);
  }
  return [se(i, l + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class rt {
  constructor({ strings: t, _$litType$: e }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const w = t.length - 1, v = this.parts, [b, A] = tr(t, e);
    if (this.el = rt.createElement(b, n), D.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = D.nextNode()) !== null && v.length < w; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(re)) {
          const T = A[u++], x = o.getAttribute($).split(I), U = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: l, name: U[2], strings: x, ctor: U[1] === "." ? rr : U[1] === "?" ? nr : U[1] === "@" ? ir : lt }), o.removeAttribute($);
        } else $.startsWith(I) && (v.push({ type: 6, index: l }), o.removeAttribute($));
        if (ie.test(o.tagName)) {
          const $ = o.textContent.split(I), T = $.length - 1;
          if (T > 0) {
            o.textContent = ut ? ut.emptyScript : "";
            for (let x = 0; x < T; x++) o.append($[x], tt()), D.nextNode(), v.push({ type: 2, index: ++l });
            o.append($[T], tt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ne) v.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(I, $ + 1)) !== -1; ) v.push({ type: 7, index: l }), $ += I.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = z.createElement("template");
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
    const { el: { content: e }, parts: n } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? z).importNode(e, !0);
    D.currentNode = o;
    let l = D.nextNode(), u = 0, w = 0, v = n[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let b;
        v.type === 2 ? b = new nt(l, l.nextSibling, this, t) : v.type === 1 ? b = new v.ctor(l, v.name, v.strings, this, t) : v.type === 6 && (b = new sr(l, this, t)), this._$AV.push(b), v = n[++w];
      }
      u !== (v == null ? void 0 : v.index) && (l = D.nextNode(), u++);
    }
    return D.currentNode = z, o;
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
    this._$AH !== C && et(this._$AH) ? this._$AA.nextSibling.data = t : this.T(z.createTextNode(t)), this._$AH = t;
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
    bt(this._$AH) || (this._$AH = [], this._$AR());
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
class lt {
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
class rr extends lt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === C ? void 0 : t;
  }
}
class nr extends lt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== C);
  }
}
class ir extends lt {
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
const vt = X.litHtmlPolyfillSupport;
vt == null || vt(rt, nt), (X.litHtmlVersions ?? (X.litHtmlVersions = [])).push("3.2.0");
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
class J extends G {
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
const _t = globalThis.litElementPolyfillSupport;
_t == null || _t({ LitElement: J });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: at, reflect: !1, hasChanged: $t }, ur = (i = ar, t, e) => {
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
function At(i) {
  return (t, e) => typeof e == "object" ? ur(i, t, e) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, u ? { ...n, wrapped: !0 } : n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(i, t, e);
}
var lr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, L = (i, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? hr(t, e) : t, l = i.length - 1, u; l >= 0; l--)
    (u = i[l]) && (o = (n ? u(t, e, o) : u(o)) || o);
  return n && o && lr(t, e, o), o;
};
let N = class extends J {
  constructor() {
    super(...arguments), this.maxWidth = 1200, this.padding = 32, this.backgroundColor = "transparent";
  }
  get maxWidthConfig() {
    return this.maxWidth;
  }
  set maxWidthConfig(i) {
    this.maxWidth = Number(i) || 1200;
  }
  get paddingConfig() {
    return this.padding;
  }
  set paddingConfig(i) {
    this.padding = Number(i) || 32;
  }
  get backgroundConfig() {
    return this.backgroundColor;
  }
  set backgroundConfig(i) {
    this.backgroundColor = i || "transparent";
  }
  render() {
    const i = [
      `--zero-section-max-width:var(--zero-section-max-width-override, ${Math.max(280, Number(this.maxWidth) || 1200)}px)`,
      `--zero-section-padding:var(--zero-section-padding-override, ${Math.max(0, Number(this.padding) || 0)}px 20px)`,
      `--zero-section-bg:${this.backgroundColor || "transparent"}`
    ].join(";");
    return Ke`
      <section style=${i}>
        <div class="inner">
          <slot></slot>
        </div>
      </section>
    `;
  }
};
N.styles = Le`
    :host {
      display: block;
      width: 100%;
    }

    section {
      width: 100%;
      box-sizing: border-box;
      padding: var(--zero-section-padding, 32px 20px);
      background: var(--zero-section-bg, transparent);
    }

    .inner {
      max-width: var(--zero-section-max-width, 1200px);
      margin: 0 auto;
    }
  `;
L([
  At({ type: Number, attribute: "max-width" })
], N.prototype, "maxWidth", 2);
L([
  At({ type: Number })
], N.prototype, "padding", 2);
L([
  At({ type: String, attribute: "background-color" })
], N.prototype, "backgroundColor", 2);
L([
  gt({
    attributeType: K.PROPERTY,
    uiComponentType: Q.NUMBER_INPUT,
    displayLabel: "Max Width",
    fieldMappings: "maxWidth"
  })
], N.prototype, "maxWidthConfig", 1);
L([
  gt({
    attributeType: K.PROPERTY,
    uiComponentType: Q.NUMBER_INPUT,
    displayLabel: "Padding",
    fieldMappings: "padding"
  })
], N.prototype, "paddingConfig", 1);
L([
  gt({
    attributeType: K.PROPERTY,
    uiComponentType: Q.COLOR_PICKER,
    displayLabel: "Background",
    fieldMappings: "backgroundColor"
  })
], N.prototype, "backgroundConfig", 1);
N = L([
  Ie({
    name: "zero-section",
    version: "1.0.0",
    title: "Section",
    elementSelector: "zero-section",
    group: "Layout",
    iconName: "section-icon.png"
  }),
  je()
], N);
export {
  N as ZeroSection
};
