var Re = Object.defineProperty;
var Te = (i, t, e) => t in i ? Re(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var zt = (i, t, e) => Te(i, typeof t != "symbol" ? t + "" : t, e);
var Lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var e = typeof globalThis == "object" ? globalThis : typeof Lt == "object" ? Lt : typeof self == "object" ? self : typeof this == "object" ? this : w(), n = s(i);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = i);
    function s(v, b) {
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", w = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, b = !w && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: w ? function() {
        return dt(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return dt({ __proto__: null });
      } : function() {
        return dt({});
      },
      has: b ? function(r, o) {
        return n.call(r, o);
      } : function(r, o) {
        return o in r;
      },
      get: b ? function(r, o) {
        return n.call(r, o) ? r[o] : void 0;
      } : function(r, o) {
        return r[o];
      }
    }, $ = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Oe(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Me(), N = typeof WeakMap == "function" ? WeakMap : Pe(), L = s ? Symbol.for("@reflect-metadata:registry") : void 0, nt = Ae(), At = Ee(nt);
    function se(r, o, a, c) {
      if (_(a)) {
        if (!Tt(r))
          throw new TypeError();
        if (!xt(o))
          throw new TypeError();
        return ye(r, o);
      } else {
        if (!Tt(r))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !_(c) && !B(c))
          throw new TypeError();
        return B(c) && (c = void 0), a = x(a), ve(r, o, a, c);
      }
    }
    t("decorate", se);
    function oe(r, o) {
      function a(c, y) {
        if (!O(c))
          throw new TypeError();
        if (!_(y) && !$e(y))
          throw new TypeError();
        Mt(r, o, c, y);
      }
      return a;
    }
    t("metadata", oe);
    function ae(r, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return _(c) || (c = x(c)), Mt(r, o, a, c);
    }
    t("defineMetadata", ae);
    function ue(r, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = x(a)), Et(r, o, a);
    }
    t("hasMetadata", ue);
    function le(r, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = x(a)), lt(r, o, a);
    }
    t("hasOwnMetadata", le);
    function ce(r, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = x(a)), St(r, o, a);
    }
    t("getMetadata", ce);
    function he(r, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = x(a)), Ot(r, o, a);
    }
    t("getOwnMetadata", he);
    function de(r, o) {
      if (!O(r))
        throw new TypeError();
      return _(o) || (o = x(o)), Pt(r, o);
    }
    t("getMetadataKeys", de);
    function fe(r, o) {
      if (!O(r))
        throw new TypeError();
      return _(o) || (o = x(o)), kt(r, o);
    }
    t("getOwnMetadataKeys", fe);
    function pe(r, o, a) {
      if (!O(o))
        throw new TypeError();
      if (_(a) || (a = x(a)), !O(o))
        throw new TypeError();
      _(a) || (a = x(a));
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(r, o, a);
    }
    t("deleteMetadata", pe);
    function ye(r, o) {
      for (var a = r.length - 1; a >= 0; --a) {
        var c = r[a], y = c(o);
        if (!_(y) && !B(y)) {
          if (!xt(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function ve(r, o, a, c) {
      for (var y = r.length - 1; y >= 0; --y) {
        var P = r[y], M = P(o, a, c);
        if (!_(M) && !B(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function Et(r, o, a) {
      var c = lt(r, o, a);
      if (c)
        return !0;
      var y = ht(o);
      return B(y) ? !1 : Et(r, y, a);
    }
    function lt(r, o, a) {
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : Rt(c.OrdinaryHasOwnMetadata(r, o, a));
    }
    function St(r, o, a) {
      var c = lt(r, o, a);
      if (c)
        return Ot(r, o, a);
      var y = ht(o);
      if (!B(y))
        return St(r, y, a);
    }
    function Ot(r, o, a) {
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(r, o, a);
    }
    function Mt(r, o, a, c) {
      var y = q(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, o, a, c);
    }
    function Pt(r, o) {
      var a = kt(r, o), c = ht(r);
      if (c === null)
        return a;
      var y = Pt(c, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new R(), M = [], m = 0, h = a; m < h.length; m++) {
        var d = h[m], f = P.has(d);
        f || (P.add(d), M.push(d));
      }
      for (var p = 0, g = y; p < g.length; p++) {
        var d = g[p], f = P.has(d);
        f || (P.add(d), M.push(d));
      }
      return M;
    }
    function kt(r, o) {
      var a = q(
        r,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, o) : [];
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
    function B(r) {
      return r === null;
    }
    function _e(r) {
      return typeof r == "symbol";
    }
    function O(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function me(r, o) {
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
      var a = "string", c = Nt(r, l);
      if (c !== void 0) {
        var y = c.call(r, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return ge(r);
    }
    function ge(r, o) {
      var a, c;
      {
        var y = r.toString;
        if (it(y)) {
          var c = y.call(r);
          if (!O(c))
            return c;
        }
        var a = r.valueOf;
        if (it(a)) {
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
    function we(r) {
      return "" + r;
    }
    function x(r) {
      var o = me(r);
      return _e(o) ? o : we(o);
    }
    function Tt(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function it(r) {
      return typeof r == "function";
    }
    function xt(r) {
      return typeof r == "function";
    }
    function $e(r) {
      switch (Ct(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ct(r, o) {
      return r === o || r !== r && o !== o;
    }
    function Nt(r, o) {
      var a = r[o];
      if (a != null) {
        if (!it(a))
          throw new TypeError();
        return a;
      }
    }
    function Ut(r) {
      var o = Nt(r, u);
      if (!it(o))
        throw new TypeError();
      var a = o.call(r);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function jt(r) {
      return r.value;
    }
    function Ht(r) {
      var o = r.next();
      return o.done ? !1 : o;
    }
    function It(r) {
      var o = r.return;
      o && o.call(r);
    }
    function ht(r) {
      var o = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === $ || o !== $)
        return o;
      var a = r.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var y = c.constructor;
      return typeof y != "function" || y === r ? o : y;
    }
    function be() {
      var r;
      !_(L) && typeof e.Reflect < "u" && !(L in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (r = Se(e.Reflect));
      var o, a, c, y = new N(), P = {
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
          case _(o):
            o = p;
            break;
          case o === p:
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
        if (!_(o)) {
          if (o.isProviderFor(p, g))
            return o;
          if (!_(a)) {
            if (a.isProviderFor(p, g))
              return o;
            if (!_(c))
              for (var E = Ut(c); ; ) {
                var S = Ht(E);
                if (!S)
                  return;
                var T = jt(S);
                if (T.isProviderFor(p, g))
                  return It(E), T;
              }
          }
        }
        if (!_(r) && r.isProviderFor(p, g))
          return r;
      }
      function h(p, g) {
        var E = y.get(p), S;
        return _(E) || (S = E.get(g)), _(S) && (S = m(p, g), _(S) || (_(E) && (E = new C(), y.set(p, E)), E.set(g, S))), S;
      }
      function d(p) {
        if (_(p))
          throw new TypeError();
        return o === p || a === p || !_(c) && c.has(p);
      }
      function f(p, g, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = h(p, g);
        if (S !== E) {
          if (!_(S))
            return !1;
          var T = y.get(p);
          _(T) && (T = new C(), y.set(p, T)), T.set(g, E);
        }
        return !0;
      }
    }
    function Ae() {
      var r;
      return !_(L) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (r = e.Reflect[L]), _(r) && (r = be()), !_(L) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function Ee(r) {
      var o = new N(), a = {
        isProviderFor: function(d, f) {
          var p = o.get(d);
          return _(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: h
      };
      return nt.registerProvider(a), a;
      function c(d, f, p) {
        var g = o.get(d), E = !1;
        if (_(g)) {
          if (!p)
            return;
          g = new C(), o.set(d, g), E = !0;
        }
        var S = g.get(f);
        if (_(S)) {
          if (!p)
            return;
          if (S = new C(), g.set(f, S), !r.setProvider(d, f, a))
            throw g.delete(f), E && o.delete(d), new Error("Wrong provider for target.");
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
        for (var E = g.keys(), S = Ut(E), T = 0; ; ) {
          var Dt = Ht(S);
          if (!Dt)
            return p.length = T, p;
          var ke = jt(Dt);
          try {
            p[T] = ke;
          } catch (Ce) {
            try {
              It(S);
            } finally {
              throw Ce;
            }
          }
          T++;
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
          var E = o.get(f);
          _(E) || (E.delete(p), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Se(r) {
      var o = r.defineMetadata, a = r.hasOwnMetadata, c = r.getOwnMetadata, y = r.getOwnMetadataKeys, P = r.deleteMetadata, M = new N(), m = {
        isProviderFor: function(h, d) {
          var f = M.get(h);
          return !_(f) && f.has(d) ? !0 : y(h, d).length ? (_(f) && (f = new R(), M.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function q(r, o, a) {
      var c = nt.getProvider(r, o);
      if (!_(c))
        return c;
      if (a) {
        if (nt.setProvider(r, o, At))
          return At;
        throw new Error("Illegal state.");
      }
    }
    function Oe() {
      var r = {}, o = [], a = (
        /** @class */
        function() {
          function m(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, m.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
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
              return this._keys.length--, this._values.length--, ct(h, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
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
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(h, d) {
            if (!ct(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ct(this._keys[f], h)) {
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
    function Me() {
      var r = (
        /** @class */
        function() {
          function o() {
            this._map = new C();
          }
          return Object.defineProperty(o.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), o.prototype.has = function(a) {
            return this._map.has(a);
          }, o.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, o.prototype.delete = function(a) {
            return this._map.delete(a);
          }, o.prototype.clear = function() {
            this._map.clear();
          }, o.prototype.keys = function() {
            return this._map.keys();
          }, o.prototype.values = function() {
            return this._map.keys();
          }, o.prototype.entries = function() {
            return this._map.entries();
          }, o.prototype["@@iterator"] = function() {
            return this.keys();
          }, o.prototype[u] = function() {
            return this.keys();
          }, o;
        }()
      );
      return r;
    }
    function Pe() {
      var r = 16, o = A.create(), a = c();
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
        while (A.has(o, h));
        return o[h] = !0, h;
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
    function dt(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Bt || (Bt = {}));
function xe(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Ne(i) {
  return function(t) {
    if (xe(i)) {
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
function Ue(i) {
  return Ne(i);
}
function je(i) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        zt(this, "_stylesApplied", !1);
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
function Ie(i) {
  return function(t, e) {
    try {
      He(i);
      const n = Reflect.getMetadata("ZeroAttribute", t) || [];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (i.fieldMappings = i.fieldMappings ?? e);
      }
      n.push(i), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function De(i) {
  return Ie(i);
}
var _t;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown", i.LAYOUT_PICKER = "layout-picker", i.RESPONSIVE_OVERRIDE = "responsive-override";
})(_t || (_t = {}));
var mt;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(mt || (mt = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = globalThis, gt = st.ShadowRoot && (st.ShadyCSS === void 0 || st.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, wt = Symbol(), Gt = /* @__PURE__ */ new WeakMap();
let te = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== wt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (gt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Gt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Gt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ze = (i) => new te(typeof i == "string" ? i : i + "", void 0, wt), Le = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + i[l + 1], i[0]);
  return new te(e, i, wt);
}, Be = (i, t) => {
  if (gt) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = st.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, i.appendChild(n);
  }
}, Wt = gt ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return ze(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ge, defineProperty: We, getOwnPropertyDescriptor: Ve, getOwnPropertyNames: Fe, getOwnPropertySymbols: qe, getPrototypeOf: Ze } = Object, j = globalThis, Vt = j.trustedTypes, Xe = Vt ? Vt.emptyScript : "", ft = j.reactiveElementPolyfillSupport, X = (i, t) => i, ot = { toAttribute(i, t) {
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
} }, $t = (i, t) => !Ge(i, t), Ft = { attribute: !0, type: String, converter: ot, reflect: !1, hasChanged: $t };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class G extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Ft) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && We(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: l } = Ve(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(u) {
      const w = s == null ? void 0 : s.call(this);
      l.call(this, u), this.requestUpdate(t, w, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Ft;
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
      for (const s of n) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, s] of e) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const s = this._$Eu(e, n);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const s of n) e.unshift(Wt(s));
    } else t !== void 0 && e.push(Wt(t));
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
    var l;
    const n = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ot).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const u = n.getPropertyOptions(s), w = typeof u.converter == "function" ? { fromAttribute: u.converter } : ((l = u.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? u.converter : ot;
      this._$Em = s, this[s] = w.fromAttribute(e, u.type), this._$Em = null;
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) u.wrapped !== !0 || this._$AL.has(l) || this[l] === void 0 || this.P(l, this[l], u);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(e)) : this._$EU();
    } catch (s) {
      throw t = !1, this._$EU(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
G.elementStyles = [], G.shadowRootOptions = { mode: "open" }, G[X("elementProperties")] = /* @__PURE__ */ new Map(), G[X("finalized")] = /* @__PURE__ */ new Map(), ft == null || ft({ ReactiveElement: G }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, at = Y.trustedTypes, qt = at ? at.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ee = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, re = "?" + U, Ye = `<${re}>`, z = document, Q = () => z.createComment(""), K = (i) => i === null || typeof i != "object" && typeof i != "function", bt = Array.isArray, Je = (i) => bt(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", pt = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Zt = /-->/g, Xt = />/g, I = RegExp(`>|${pt}(?:([^\\s"'>=/]+)(${pt}*=${pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Yt = /'/g, Jt = /"/g, ne = /^(?:script|style|textarea|title)$/i, Qe = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), Ke = Qe(1), W = Symbol.for("lit-noChange"), k = Symbol.for("lit-nothing"), Qt = /* @__PURE__ */ new WeakMap(), D = z.createTreeWalker(z, 129);
function ie(i, t) {
  if (!bt(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return qt !== void 0 ? qt.createHTML(t) : t;
}
const tr = (i, t) => {
  const e = i.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = Z;
  for (let w = 0; w < e; w++) {
    const v = i[w];
    let b, A, $ = -1, C = 0;
    for (; C < v.length && (u.lastIndex = C, A = u.exec(v), A !== null); ) C = u.lastIndex, u === Z ? A[1] === "!--" ? u = Zt : A[1] !== void 0 ? u = Xt : A[2] !== void 0 ? (ne.test(A[2]) && (s = RegExp("</" + A[2], "g")), u = I) : A[3] !== void 0 && (u = I) : u === I ? A[0] === ">" ? (u = s ?? Z, $ = -1) : A[1] === void 0 ? $ = -2 : ($ = u.lastIndex - A[2].length, b = A[1], u = A[3] === void 0 ? I : A[3] === '"' ? Jt : Yt) : u === Jt || u === Yt ? u = I : u === Zt || u === Xt ? u = Z : (u = I, s = void 0);
    const R = u === I && i[w + 1].startsWith("/>") ? " " : "";
    l += u === Z ? v + Ye : $ >= 0 ? (n.push(b), v.slice(0, $) + ee + v.slice($) + U + R) : v + U + ($ === -2 ? w : R);
  }
  return [ie(i, l + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class tt {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const w = t.length - 1, v = this.parts, [b, A] = tr(t, e);
    if (this.el = tt.createElement(b, n), D.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = D.nextNode()) !== null && v.length < w; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(ee)) {
          const C = A[u++], R = s.getAttribute($).split(U), N = /([.?@])?(.*)/.exec(C);
          v.push({ type: 1, index: l, name: N[2], strings: R, ctor: N[1] === "." ? rr : N[1] === "?" ? nr : N[1] === "@" ? ir : ut }), s.removeAttribute($);
        } else $.startsWith(U) && (v.push({ type: 6, index: l }), s.removeAttribute($));
        if (ne.test(s.tagName)) {
          const $ = s.textContent.split(U), C = $.length - 1;
          if (C > 0) {
            s.textContent = at ? at.emptyScript : "";
            for (let R = 0; R < C; R++) s.append($[R], Q()), D.nextNode(), v.push({ type: 2, index: ++l });
            s.append($[C], Q());
          }
        }
      } else if (s.nodeType === 8) if (s.data === re) v.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(U, $ + 1)) !== -1; ) v.push({ type: 7, index: l }), $ += U.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = z.createElement("template");
    return n.innerHTML = t, n;
  }
}
function V(i, t, e = i, n) {
  var u, w;
  if (t === W) return t;
  let s = n !== void 0 ? (u = e.o) == null ? void 0 : u[n] : e.l;
  const l = K(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((w = s == null ? void 0 : s._$AO) == null || w.call(s, !1), l === void 0 ? s = void 0 : (s = new l(i), s._$AT(i, e, n)), n !== void 0 ? (e.o ?? (e.o = []))[n] = s : e.l = s), s !== void 0 && (t = V(i, s._$AS(i, t.values), s, n)), t;
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? z).importNode(e, !0);
    D.currentNode = s;
    let l = D.nextNode(), u = 0, w = 0, v = n[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let b;
        v.type === 2 ? b = new et(l, l.nextSibling, this, t) : v.type === 1 ? b = new v.ctor(l, v.name, v.strings, this, t) : v.type === 6 && (b = new sr(l, this, t)), this._$AV.push(b), v = n[++w];
      }
      u !== (v == null ? void 0 : v.index) && (l = D.nextNode(), u++);
    }
    return D.currentNode = z, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class et {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this.v;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = k, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this.v = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = V(this, t, e), K(t) ? t === k || t == null || t === "" ? (this._$AH !== k && this._$AR(), this._$AH = k) : t !== this._$AH && t !== W && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Je(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== k && K(this._$AH) ? this._$AA.nextSibling.data = t : this.T(z.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = tt.createElement(ie(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new er(s, this), w = u.u(this.options);
      u.p(e), this.T(w), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = Qt.get(t.strings);
    return e === void 0 && Qt.set(t.strings, e = new tt(t)), e;
  }
  k(t) {
    bt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new et(this.O(Q()), this.O(Q()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this.v = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class ut {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, l) {
    this.type = 1, this._$AH = k, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = k;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = V(this, t, e, 0), u = !K(t) || t !== this._$AH && t !== W, u && (this._$AH = t);
    else {
      const w = t;
      let v, b;
      for (t = l[0], v = 0; v < l.length - 1; v++) b = V(this, w[n + v], e, v), b === W && (b = this._$AH[v]), u || (u = !K(b) || b !== this._$AH[v]), b === k ? t = k : t !== k && (t += (b ?? "") + l[v + 1]), this._$AH[v] = b;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === k ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class rr extends ut {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === k ? void 0 : t;
  }
}
class nr extends ut {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== k);
  }
}
class ir extends ut {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = V(this, t, e, 0) ?? k) === W) return;
    const n = this._$AH, s = t === k && n !== k || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== k && (n === k || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
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
    V(this, t);
  }
}
const yt = Y.litHtmlPolyfillSupport;
yt == null || yt(tt, et), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.2.0");
const or = (i, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new et(t.insertBefore(Q(), l), l, void 0, e ?? {});
  }
  return s._$AI(i), s;
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
    return W;
  }
}
var Kt;
J._$litElement$ = !0, J.finalized = !0, (Kt = globalThis.litElementHydrateSupport) == null || Kt.call(globalThis, { LitElement: J });
const vt = globalThis.litElementPolyfillSupport;
vt == null || vt({ LitElement: J });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: ot, reflect: !1, hasChanged: $t }, ur = (i = ar, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), l.set(e.name, i), n === "accessor") {
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
function rt(i) {
  return (t, e) => typeof e == "object" ? ur(i, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, u ? { ...n, wrapped: !0 } : n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(i, t, e);
}
var lr = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, F = (i, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? cr(t, e) : t, l = i.length - 1, u; l >= 0; l--)
    (u = i[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && lr(t, e, s), s;
};
let H = class extends J {
  constructor() {
    super(...arguments), this.direction = "column", this.gap = 16, this.justify = "flex-start", this.align = "stretch", this.mobileStack = !0;
  }
  render() {
    return Ke`
      <div class="stack" data-mobile-stack=${String(this.mobileStack)}>
        <slot></slot>
      </div>
    `;
  }
};
H.styles = Le`
    :host {
      display: block;
      width: var(--zero-width, 100%);
      padding: var(--zero-padding, 0);
      box-sizing: border-box;
    }

    .stack {
      display: var(--zero-display, flex);
      width: 100%;
      box-sizing: border-box;
      gap: var(--zero-gap, 16px);
      flex-direction: var(--zero-direction, column);
      justify-content: var(--zero-justify, flex-start);
      align-items: var(--zero-align, stretch);
      flex-wrap: var(--zero-wrap, nowrap);
    }

    @media (max-width: 767px) {
      .stack[data-mobile-stack="true"] {
        flex-direction: column;
      }
    }
  `;
F([
  rt({ type: String })
], H.prototype, "direction", 2);
F([
  rt({ type: Number })
], H.prototype, "gap", 2);
F([
  rt({ type: String })
], H.prototype, "justify", 2);
F([
  rt({ type: String })
], H.prototype, "align", 2);
F([
  rt({ type: Boolean, attribute: "mobile-stack" }),
  De({
    attributeType: mt.PROPERTY,
    uiComponentType: _t.CHECKBOX,
    displayLabel: "Mobile Stack",
    fieldMappings: "mobileStack"
  })
], H.prototype, "mobileStack", 2);
H = F([
  Ue({
    name: "zero-stack",
    version: "1.0.0",
    title: "Stack",
    elementSelector: "zero-stack",
    group: "Layout",
    iconName: "stack-icon.png"
  }),
  je()
], H);
export {
  H as ZeroStack
};
