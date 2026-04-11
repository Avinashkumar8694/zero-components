var kt = Object.defineProperty;
var Ut = (i, e, t) => e in i ? kt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Be = (i, e, t) => Ut(i, typeof e != "symbol" ? e + "" : e, t);
var Ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var We;
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : w(), n = o(i);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function o(v, $) {
      return function(E, b) {
        Object.defineProperty(v, E, { configurable: !0, writable: !0, value: b }), $ && $(E, b);
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
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", w = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, $ = !w && !v, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: w ? function() {
        return ve(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ve({ __proto__: null });
      } : function() {
        return ve({});
      },
      has: $ ? function(r, s) {
        return n.call(r, s);
      } : function(r, s) {
        return s in r;
      },
      get: $ ? function(r, s) {
        return n.call(r, s) ? r[s] : void 0;
      } : function(r, s) {
        return r[s];
      }
    }, b = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ct(), j = typeof WeakMap == "function" ? WeakMap : Tt(), F = o ? Symbol.for("@reflect-metadata:registry") : void 0, ae = St(), Se = Ot(ae);
    function at(r, s, a, c) {
      if (_(a)) {
        if (!Ue(r))
          throw new TypeError();
        if (!Ne(s))
          throw new TypeError();
        return _t(r, s);
      } else {
        if (!Ue(r))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(c) && !_(c) && !Y(c))
          throw new TypeError();
        return Y(c) && (c = void 0), a = U(a), mt(r, s, a, c);
      }
    }
    e("decorate", at);
    function lt(r, s) {
      function a(c, y) {
        if (!O(c))
          throw new TypeError();
        if (!_(y) && !Et(y))
          throw new TypeError();
        Ce(r, s, c, y);
      }
      return a;
    }
    e("metadata", lt);
    function ut(r, s, a, c) {
      if (!O(a))
        throw new TypeError();
      return _(c) || (c = U(c)), Ce(r, s, a, c);
    }
    e("defineMetadata", ut);
    function ct(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = U(a)), Oe(r, s, a);
    }
    e("hasMetadata", ct);
    function ht(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = U(a)), fe(r, s, a);
    }
    e("hasOwnMetadata", ht);
    function dt(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = U(a)), Me(r, s, a);
    }
    e("getMetadata", dt);
    function ft(r, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = U(a)), Pe(r, s, a);
    }
    e("getOwnMetadata", ft);
    function pt(r, s) {
      if (!O(r))
        throw new TypeError();
      return _(s) || (s = U(s)), Te(r, s);
    }
    e("getMetadataKeys", pt);
    function yt(r, s) {
      if (!O(r))
        throw new TypeError();
      return _(s) || (s = U(s)), Re(r, s);
    }
    e("getOwnMetadataKeys", yt);
    function vt(r, s, a) {
      if (!O(s))
        throw new TypeError();
      if (_(a) || (a = U(a)), !O(s))
        throw new TypeError();
      _(a) || (a = U(a));
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(r, s, a);
    }
    e("deleteMetadata", vt);
    function _t(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var c = r[a], y = c(s);
        if (!_(y) && !Y(y)) {
          if (!Ne(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function mt(r, s, a, c) {
      for (var y = r.length - 1; y >= 0; --y) {
        var P = r[y], M = P(s, a, c);
        if (!_(M) && !Y(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function Oe(r, s, a) {
      var c = fe(r, s, a);
      if (c)
        return !0;
      var y = ye(s);
      return Y(y) ? !1 : Oe(r, y, a);
    }
    function fe(r, s, a) {
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : ke(c.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Me(r, s, a) {
      var c = fe(r, s, a);
      if (c)
        return Pe(r, s, a);
      var y = ye(s);
      if (!Y(y))
        return Me(r, y, a);
    }
    function Pe(r, s, a) {
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Ce(r, s, a, c) {
      var y = Q(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, c);
    }
    function Te(r, s) {
      var a = Re(r, s), c = ye(r);
      if (c === null)
        return a;
      var y = Te(c, s);
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
    function Re(r, s) {
      var a = Q(
        r,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, s) : [];
    }
    function xe(r) {
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
    function Y(r) {
      return r === null;
    }
    function gt(r) {
      return typeof r == "symbol";
    }
    function O(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function wt(r, s) {
      switch (xe(r)) {
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
      var a = "string", c = Ie(r, u);
      if (c !== void 0) {
        var y = c.call(r, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return bt(r);
    }
    function bt(r, s) {
      var a, c;
      {
        var y = r.toString;
        if (le(y)) {
          var c = y.call(r);
          if (!O(c))
            return c;
        }
        var a = r.valueOf;
        if (le(a)) {
          var c = a.call(r);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function ke(r) {
      return !!r;
    }
    function $t(r) {
      return "" + r;
    }
    function U(r) {
      var s = wt(r);
      return gt(s) ? s : $t(s);
    }
    function Ue(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function le(r) {
      return typeof r == "function";
    }
    function Ne(r) {
      return typeof r == "function";
    }
    function Et(r) {
      switch (xe(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function pe(r, s) {
      return r === s || r !== r && s !== s;
    }
    function Ie(r, s) {
      var a = r[s];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function ze(r) {
      var s = Ie(r, l);
      if (!le(s))
        throw new TypeError();
      var a = s.call(r);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function je(r) {
      return r.value;
    }
    function He(r) {
      var s = r.next();
      return s.done ? !1 : s;
    }
    function Le(r) {
      var s = r.return;
      s && s.call(r);
    }
    function ye(r) {
      var s = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === b || s !== b)
        return s;
      var a = r.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === r ? s : y;
    }
    function At() {
      var r;
      !_(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Mt(t.Reflect));
      var s, a, c, y = new j(), P = {
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
              for (var A = ze(c); ; ) {
                var S = He(A);
                if (!S)
                  return;
                var x = je(S);
                if (x.isProviderFor(p, g))
                  return Le(A), x;
              }
          }
        }
        if (!_(r) && r.isProviderFor(p, g))
          return r;
      }
      function h(p, g) {
        var A = y.get(p), S;
        return _(A) || (S = A.get(g)), _(S) && (S = m(p, g), _(S) || (_(A) && (A = new T(), y.set(p, A)), A.set(g, S))), S;
      }
      function d(p) {
        if (_(p))
          throw new TypeError();
        return s === p || a === p || !_(c) && c.has(p);
      }
      function f(p, g, A) {
        if (!d(A))
          throw new Error("Metadata provider not registered.");
        var S = h(p, g);
        if (S !== A) {
          if (!_(S))
            return !1;
          var x = y.get(p);
          _(x) && (x = new T(), y.set(p, x)), x.set(g, A);
        }
        return !0;
      }
    }
    function St() {
      var r;
      return !_(F) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[F]), _(r) && (r = At()), !_(F) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function Ot(r) {
      var s = new j(), a = {
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
      return ae.registerProvider(a), a;
      function c(d, f, p) {
        var g = s.get(d), A = !1;
        if (_(g)) {
          if (!p)
            return;
          g = new T(), s.set(d, g), A = !0;
        }
        var S = g.get(f);
        if (_(S)) {
          if (!p)
            return;
          if (S = new T(), g.set(f, S), !r.setProvider(d, f, a))
            throw g.delete(f), A && s.delete(d), new Error("Wrong provider for target.");
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
        return _(g) ? !1 : ke(g.has(d));
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
        var A = c(
          p,
          g,
          /*Create*/
          !0
        );
        A.set(d, f);
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
        for (var A = g.keys(), S = ze(A), x = 0; ; ) {
          var De = He(S);
          if (!De)
            return p.length = x, p;
          var Rt = je(De);
          try {
            p[x] = Rt;
          } catch (xt) {
            try {
              Le(S);
            } finally {
              throw xt;
            }
          }
          x++;
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
          var A = s.get(f);
          _(A) || (A.delete(p), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function Mt(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, c = r.getOwnMetadata, y = r.getOwnMetadataKeys, P = r.deleteMetadata, M = new j(), m = {
        isProviderFor: function(h, d) {
          var f = M.get(h);
          return !_(f) && f.has(d) ? !0 : y(h, d).length ? (_(f) && (f = new R(), M.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function Q(r, s, a) {
      var c = ae.getProvider(r, s);
      if (!_(c))
        return c;
      if (a) {
        if (ae.setProvider(r, s, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function Pt() {
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
              return this._keys.length--, this._values.length--, pe(h, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
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
            if (!pe(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pe(this._keys[f], h)) {
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
    function Ct() {
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
    function Tt() {
      var r = 16, s = E.create(), a = c();
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
            return f !== void 0 ? E.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? E.get(f, this._key) : void 0;
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
        while (E.has(s, h));
        return s[h] = !0, h;
      }
      function y(h, d) {
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: E.create() });
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
    function ve(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(We || (We = {}));
function Nt(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function It(i) {
  return function(e) {
    if (Nt(i)) {
      const t = {
        version: i.version,
        name: i.name,
        title: i.title,
        selector: i.elementSelector,
        category: i.group,
        icon: i.iconName
      };
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${i.elementSelector}-${i.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function zt(i) {
  return It(i);
}
function jt(i) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Be(this, "_stylesApplied", !1);
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
          const $ = new CSSStyleSheet(), E = (v = u.sheet) == null ? void 0 : v.cssRules;
          E && (Array.from(E).forEach((b) => $.insertRule(b.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
        } else if (u) {
          const $ = u.cloneNode(!0);
          this.shadowRoot.appendChild($);
        }
        l.forEach(($) => {
          const E = $.cloneNode(!0);
          this.shadowRoot.appendChild(E);
        });
      }
    }
    return t;
  };
}
function Ht(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Lt(i) {
  return function(e, t) {
    try {
      Ht(i);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (i.fieldMappings = i.fieldMappings ?? t), n.push(i), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function D(i) {
  return Lt(i);
}
var N;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown";
})(N || (N = {}));
var I;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(I || (I = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, be = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (be && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Dt = (i) => new rt(typeof i == "string" ? i : i + "", void 0, $e), Bt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((n, o, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[u + 1], i[0]);
  return new rt(t, i, $e);
}, Gt = (i, e) => {
  if (be) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ue.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, i.appendChild(n);
  }
}, Fe = be ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Dt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Wt, defineProperty: Vt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: Yt, getOwnPropertySymbols: qt, getPrototypeOf: Zt } = Object, L = globalThis, Ye = L.trustedTypes, Xt = Ye ? Ye.emptyScript : "", _e = L.reactiveElementPolyfillSupport, ee = (i, e) => i, ce = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? Xt : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, e) {
  let t = i;
  switch (e) {
    case Boolean:
      t = i !== null;
      break;
    case Number:
      t = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(i);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ee = (i, e) => !Wt(i, e), qe = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class Z extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Vt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: u } = Ft(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const w = o == null ? void 0 : o.call(this);
      u.call(this, l), this.requestUpdate(e, w, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? qe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Zt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, n = [...Yt(t), ...qt(t)];
      for (const o of n) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, o] of t) this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const o = this._$Eu(t, n);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const o of n) t.unshift(Fe(o));
    } else e !== void 0 && t.push(Fe(e));
    return t;
  }
  static _$Eu(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Gt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var n;
      return (n = t.hostConnected) == null ? void 0 : n.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var n;
      return (n = t.hostDisconnected) == null ? void 0 : n.call(t);
    });
  }
  attributeChangedCallback(e, t, n) {
    this._$AK(e, n);
  }
  _$EC(e, t) {
    var u;
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : ce).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = n.getPropertyOptions(o), w = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : ce;
      this._$Em = o, this[o] = w.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? Ee)(this[e], t)) return;
      this.P(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, n) {
    this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
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
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((o) => {
        var u;
        return (u = o.hostUpdate) == null ? void 0 : u.call(o);
      }), this.update(t)) : this._$EU();
    } catch (o) {
      throw e = !1, this._$EU(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[ee("elementProperties")] = /* @__PURE__ */ new Map(), Z[ee("finalized")] = /* @__PURE__ */ new Map(), _e == null || _e({ ReactiveElement: Z }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, he = te.trustedTypes, Ze = he ? he.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, nt = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + H, Jt = `<${it}>`, V = document, ne = () => V.createComment(""), ie = (i) => i === null || typeof i != "object" && typeof i != "function", Ae = Array.isArray, Qt = (i) => Ae(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Xe = /-->/g, Je = />/g, G = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, Ke = /"/g, st = /^(?:script|style|textarea|title)$/i, Kt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), q = Kt(1), X = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), W = V.createTreeWalker(V, 129);
function ot(i, e) {
  if (!Ae(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const er = (i, e) => {
  const t = i.length - 1, n = [];
  let o, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = K;
  for (let w = 0; w < t; w++) {
    const v = i[w];
    let $, E, b = -1, T = 0;
    for (; T < v.length && (l.lastIndex = T, E = l.exec(v), E !== null); ) T = l.lastIndex, l === K ? E[1] === "!--" ? l = Xe : E[1] !== void 0 ? l = Je : E[2] !== void 0 ? (st.test(E[2]) && (o = RegExp("</" + E[2], "g")), l = G) : E[3] !== void 0 && (l = G) : l === G ? E[0] === ">" ? (l = o ?? K, b = -1) : E[1] === void 0 ? b = -2 : (b = l.lastIndex - E[2].length, $ = E[1], l = E[3] === void 0 ? G : E[3] === '"' ? Ke : Qe) : l === Ke || l === Qe ? l = G : l === Xe || l === Je ? l = K : (l = G, o = void 0);
    const R = l === G && i[w + 1].startsWith("/>") ? " " : "";
    u += l === K ? v + Jt : b >= 0 ? (n.push($), v.slice(0, b) + nt + v.slice(b) + H + R) : v + H + (b === -2 ? w : R);
  }
  return [ot(i, u + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class se {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const w = e.length - 1, v = this.parts, [$, E] = er(e, t);
    if (this.el = se.createElement($, n), W.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = W.nextNode()) !== null && v.length < w; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith(nt)) {
          const T = E[l++], R = o.getAttribute(b).split(H), j = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: u, name: j[2], strings: R, ctor: j[1] === "." ? rr : j[1] === "?" ? nr : j[1] === "@" ? ir : de }), o.removeAttribute(b);
        } else b.startsWith(H) && (v.push({ type: 6, index: u }), o.removeAttribute(b));
        if (st.test(o.tagName)) {
          const b = o.textContent.split(H), T = b.length - 1;
          if (T > 0) {
            o.textContent = he ? he.emptyScript : "";
            for (let R = 0; R < T; R++) o.append(b[R], ne()), W.nextNode(), v.push({ type: 2, index: ++u });
            o.append(b[T], ne());
          }
        }
      } else if (o.nodeType === 8) if (o.data === it) v.push({ type: 2, index: u });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(H, b + 1)) !== -1; ) v.push({ type: 7, index: u }), b += H.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const n = V.createElement("template");
    return n.innerHTML = e, n;
  }
}
function J(i, e, t = i, n) {
  var l, w;
  if (e === X) return e;
  let o = n !== void 0 ? (l = t.o) == null ? void 0 : l[n] : t.l;
  const u = ie(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((w = o == null ? void 0 : o._$AO) == null || w.call(o, !1), u === void 0 ? o = void 0 : (o = new u(i), o._$AT(i, t, n)), n !== void 0 ? (t.o ?? (t.o = []))[n] = o : t.l = o), o !== void 0 && (e = J(i, o._$AS(i, e.values), o, n)), e;
}
class tr {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? V).importNode(t, !0);
    W.currentNode = o;
    let u = W.nextNode(), l = 0, w = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let $;
        v.type === 2 ? $ = new oe(u, u.nextSibling, this, e) : v.type === 1 ? $ = new v.ctor(u, v.name, v.strings, this, e) : v.type === 6 && ($ = new sr(u, this, e)), this._$AV.push($), v = n[++w];
      }
      l !== (v == null ? void 0 : v.index) && (u = W.nextNode(), l++);
    }
    return W.currentNode = V, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class oe {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = J(this, e, t), ie(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== X && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(V.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = se.createElement(ot(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(t);
    else {
      const l = new tr(o, this), w = l.u(this.options);
      l.p(t), this.T(w), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const u of e) o === t.length ? t.push(n = new oe(this.O(ne()), this.O(ne()), this, this.options)) : n = t[o], n._$AI(u), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class de {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, o, u) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(e, t = this, n, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = J(this, e, t, 0), l = !ie(e) || e !== this._$AH && e !== X, l && (this._$AH = e);
    else {
      const w = e;
      let v, $;
      for (e = u[0], v = 0; v < u.length - 1; v++) $ = J(this, w[n + v], t, v), $ === X && ($ = this._$AH[v]), l || (l = !ie($) || $ !== this._$AH[v]), $ === C ? e = C : e !== C && (e += ($ ?? "") + u[v + 1]), this._$AH[v] = $;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends de {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class nr extends de {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class ir extends de {
  constructor(e, t, n, o, u) {
    super(e, t, n, o, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? C) === X) return;
    const n = this._$AH, o = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, u = e !== C && (n === C || o);
    o && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class sr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    J(this, e);
  }
}
const ge = te.litHtmlPolyfillSupport;
ge == null || ge(se, oe), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.2.0");
const or = (i, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new oe(e.insertBefore(ne(), u), u, void 0, t ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class re extends Z {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = or(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.o) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.o) == null || e.setConnected(!1);
  }
  render() {
    return X;
  }
}
var tt;
re._$litElement$ = !0, re.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: re });
const we = globalThis.litElementPolyfillSupport;
we == null || we({ LitElement: re });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = (i) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(i, e);
  }) : customElements.define(i, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lr = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ee }, ur = (i = lr, e, t) => {
  const { kind: n, metadata: o } = t;
  let u = globalThis.litPropertyMetadata.get(o);
  if (u === void 0 && globalThis.litPropertyMetadata.set(o, u = /* @__PURE__ */ new Map()), u.set(t.name, i), n === "accessor") {
    const { name: l } = t;
    return { set(w) {
      const v = e.get.call(this);
      e.set.call(this, w), this.requestUpdate(l, v, i);
    }, init(w) {
      return w !== void 0 && this.P(l, void 0, i), w;
    } };
  }
  if (n === "setter") {
    const { name: l } = t;
    return function(w) {
      const v = this[l];
      e.call(this, w), this.requestUpdate(l, v, i);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function B(i) {
  return (e, t) => typeof t == "object" ? ur(i, e, t) : ((n, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(i, e, t);
}
var cr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, z = (i, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? hr(e, t) : e, u = i.length - 1, l; u >= 0; u--)
    (l = i[u]) && (o = (n ? l(e, t, o) : l(o)) || o);
  return n && o && cr(e, t, o), o;
};
let k = class extends re {
  constructor() {
    super(...arguments), this.text = "Loading...", this.icon = "", this.fullScreen = !1, this.image = "", this.backgroundColor = "transparent", this.spinnerColor = "#3b82f6", this.textColor = "#475569", this.size = 48;
  }
  render() {
    const i = [
      `--zero-spinner-color: ${this.spinnerColor}`,
      `--zero-text-color: ${this.textColor}`,
      `--zero-spinner-size: ${this.size}px`
    ].join(";"), e = this.fullScreen ? `background-color: ${this.backgroundColor || "var(--zs-panel, #ffffff)"}` : `background-color: ${this.backgroundColor}`;
    return q`
      <div style=${i}>
        <div class="loader-container" style=${e}>
          <div class="spinner">
            ${this.image ? q`<img src="${this.image}" style="width: 100%; height: 100%; object-fit: contain;" />` : this.icon ? q`<span class="spinner-icon">${this.icon}</span>` : q`<div class="spinner-circle"></div>`}
          </div>
          ${this.text ? q`<p class="loader-text">${this.text}</p>` : q``}
          <div class="custom-content" style="width: 100%;">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    `;
  }
};
k.styles = Bt`
    :host {
      display: inline-block;
      width: 100%;
    }

    :host([full-screen]) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .loader-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 32px;
      border-radius: var(--zero-radius-md, 12px);
      transition: background-color 0.3s ease;
    }

    :host([full-screen]) .loader-container {
      padding: 64px;
    }

    .spinner {
      display: inline-block;
      width: var(--zero-spinner-size, 48px);
      height: var(--zero-spinner-size, 48px);
    }
    
    .spinner-icon {
      font-size: var(--zero-spinner-size, 48px);
      line-height: 1;
      display: block;
      animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .spinner-circle {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 4px solid var(--zero-spinner-track, rgba(0, 0, 0, 0.1));
      border-top-color: var(--zero-spinner-color, var(--zs-brand, #3b82f6));
      animation: spin 1s linear infinite;
    }

    .loader-text {
      font-family: var(--zero-font-family, system-ui, sans-serif);
      font-size: var(--zero-font-size, 16px);
      font-weight: 500;
      color: var(--zero-text-color, #475569);
      text-align: center;
      margin: 0;
    }

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: .7;
        transform: scale(0.9);
      }
    }
  `;
z([
  B({ type: String }),
  D({
    attributeType: I.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Loading Text",
    fieldMappings: "text"
  })
], k.prototype, "text", 2);
z([
  B({ type: String }),
  D({
    attributeType: I.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Icon (Emoji)",
    fieldMappings: "icon"
  })
], k.prototype, "icon", 2);
z([
  B({ type: Boolean, attribute: "full-screen", reflect: !0 }),
  D({
    attributeType: I.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Full Screen Overlay",
    fieldMappings: "fullScreen"
  })
], k.prototype, "fullScreen", 2);
z([
  B({ type: String, attribute: "image" }),
  D({
    attributeType: I.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Image URL",
    fieldMappings: "image"
  })
], k.prototype, "image", 2);
z([
  B({ type: String, attribute: "background-color" }),
  D({
    attributeType: I.PROPERTY,
    uiComponentType: N.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor"
  })
], k.prototype, "backgroundColor", 2);
z([
  B({ type: String, attribute: "spinner-color" }),
  D({
    attributeType: I.PROPERTY,
    uiComponentType: N.COLOR_PICKER,
    displayLabel: "Spinner Color",
    fieldMappings: "spinnerColor"
  })
], k.prototype, "spinnerColor", 2);
z([
  B({ type: String, attribute: "text-color" }),
  D({
    attributeType: I.PROPERTY,
    uiComponentType: N.COLOR_PICKER,
    displayLabel: "Text Color",
    fieldMappings: "textColor"
  })
], k.prototype, "textColor", 2);
z([
  B({ type: Number }),
  D({
    attributeType: I.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Spinner Size (px)",
    fieldMappings: "size"
  })
], k.prototype, "size", 2);
k = z([
  zt({
    name: "zero-loader",
    version: "1.0.0",
    title: "Loader",
    elementSelector: "zero-loader",
    group: "Feedback",
    iconName: "loader-icon.png"
  }),
  jt(),
  ar("zero-loader")
], k);
export {
  k as ZeroLoader
};
