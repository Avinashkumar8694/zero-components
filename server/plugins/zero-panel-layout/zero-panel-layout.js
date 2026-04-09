var kt = Object.defineProperty;
var Nt = (i, e, t) => e in i ? kt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Be = (i, e, t) => Nt(i, typeof e != "symbol" ? e + "" : e, t);
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ge;
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : b(), r = o(i);
    typeof t.Reflect < "u" && (r = o(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function o(v, $) {
      return function(E, w) {
        Object.defineProperty(v, E, { configurable: !0, writable: !0, value: w }), $ && $(E, w);
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
    function b() {
      return u() || l();
    }
  })(function(e, t) {
    var r = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, $ = !b && !v, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return ve(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ve({ __proto__: null });
      } : function() {
        return ve({});
      },
      has: $ ? function(n, s) {
        return r.call(n, s);
      } : function(n, s) {
        return s in n;
      },
      get: $ ? function(n, s) {
        return r.call(n, s) ? n[s] : void 0;
      } : function(n, s) {
        return n[s];
      }
    }, w = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ot(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ct(), D = typeof WeakMap == "function" ? WeakMap : Tt(), F = o ? Symbol.for("@reflect-metadata:registry") : void 0, ae = St(), Se = Mt(ae);
    function at(n, s, a, d) {
      if (m(a)) {
        if (!Ne(n))
          throw new TypeError();
        if (!Ue(s))
          throw new TypeError();
        return mt(n, s);
      } else {
        if (!Ne(n))
          throw new TypeError();
        if (!M(s))
          throw new TypeError();
        if (!M(d) && !m(d) && !Y(d))
          throw new TypeError();
        return Y(d) && (d = void 0), a = I(a), _t(n, s, a, d);
      }
    }
    e("decorate", at);
    function lt(n, s) {
      function a(d, y) {
        if (!M(d))
          throw new TypeError();
        if (!m(y) && !Et(y))
          throw new TypeError();
        Ce(n, s, d, y);
      }
      return a;
    }
    e("metadata", lt);
    function ut(n, s, a, d) {
      if (!M(a))
        throw new TypeError();
      return m(d) || (d = I(d)), Ce(n, s, a, d);
    }
    e("defineMetadata", ut);
    function dt(n, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = I(a)), Me(n, s, a);
    }
    e("hasMetadata", dt);
    function ct(n, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = I(a)), fe(n, s, a);
    }
    e("hasOwnMetadata", ct);
    function ht(n, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = I(a)), Pe(n, s, a);
    }
    e("getMetadata", ht);
    function ft(n, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = I(a)), Oe(n, s, a);
    }
    e("getOwnMetadata", ft);
    function pt(n, s) {
      if (!M(n))
        throw new TypeError();
      return m(s) || (s = I(s)), Te(n, s);
    }
    e("getMetadataKeys", pt);
    function yt(n, s) {
      if (!M(n))
        throw new TypeError();
      return m(s) || (s = I(s)), xe(n, s);
    }
    e("getOwnMetadataKeys", yt);
    function vt(n, s, a) {
      if (!M(s))
        throw new TypeError();
      if (m(a) || (a = I(a)), !M(s))
        throw new TypeError();
      m(a) || (a = I(a));
      var d = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : d.OrdinaryDeleteMetadata(n, s, a);
    }
    e("deleteMetadata", vt);
    function mt(n, s) {
      for (var a = n.length - 1; a >= 0; --a) {
        var d = n[a], y = d(s);
        if (!m(y) && !Y(y)) {
          if (!Ue(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function _t(n, s, a, d) {
      for (var y = n.length - 1; y >= 0; --y) {
        var O = n[y], P = O(s, a, d);
        if (!m(P) && !Y(P)) {
          if (!M(P))
            throw new TypeError();
          d = P;
        }
      }
      return d;
    }
    function Me(n, s, a) {
      var d = fe(n, s, a);
      if (d)
        return !0;
      var y = ye(s);
      return Y(y) ? !1 : Me(n, y, a);
    }
    function fe(n, s, a) {
      var d = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : ke(d.OrdinaryHasOwnMetadata(n, s, a));
    }
    function Pe(n, s, a) {
      var d = fe(n, s, a);
      if (d)
        return Oe(n, s, a);
      var y = ye(s);
      if (!Y(y))
        return Pe(n, y, a);
    }
    function Oe(n, s, a) {
      var d = Q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!m(d))
        return d.OrdinaryGetOwnMetadata(n, s, a);
    }
    function Ce(n, s, a, d) {
      var y = Q(
        a,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(n, s, a, d);
    }
    function Te(n, s) {
      var a = xe(n, s), d = ye(n);
      if (d === null)
        return a;
      var y = Te(d, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var O = new R(), P = [], _ = 0, c = a; _ < c.length; _++) {
        var h = c[_], f = O.has(h);
        f || (O.add(h), P.push(h));
      }
      for (var p = 0, g = y; p < g.length; p++) {
        var h = g[p], f = O.has(h);
        f || (O.add(h), P.push(h));
      }
      return P;
    }
    function xe(n, s) {
      var a = Q(
        n,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, s) : [];
    }
    function Re(n) {
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
    function m(n) {
      return n === void 0;
    }
    function Y(n) {
      return n === null;
    }
    function gt(n) {
      return typeof n == "symbol";
    }
    function M(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function bt(n, s) {
      switch (Re(n)) {
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
      var a = "string", d = ze(n, u);
      if (d !== void 0) {
        var y = d.call(n, a);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return wt(n);
    }
    function wt(n, s) {
      var a, d;
      {
        var y = n.toString;
        if (le(y)) {
          var d = y.call(n);
          if (!M(d))
            return d;
        }
        var a = n.valueOf;
        if (le(a)) {
          var d = a.call(n);
          if (!M(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function ke(n) {
      return !!n;
    }
    function $t(n) {
      return "" + n;
    }
    function I(n) {
      var s = bt(n);
      return gt(s) ? s : $t(s);
    }
    function Ne(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function le(n) {
      return typeof n == "function";
    }
    function Ue(n) {
      return typeof n == "function";
    }
    function Et(n) {
      switch (Re(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function pe(n, s) {
      return n === s || n !== n && s !== s;
    }
    function ze(n, s) {
      var a = n[s];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function Ie(n) {
      var s = ze(n, l);
      if (!le(s))
        throw new TypeError();
      var a = s.call(n);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function He(n) {
      return n.value;
    }
    function je(n) {
      var s = n.next();
      return s.done ? !1 : s;
    }
    function De(n) {
      var s = n.return;
      s && s.call(n);
    }
    function ye(n) {
      var s = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === w || s !== w)
        return s;
      var a = n.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return s;
      var y = d.constructor;
      return typeof y != "function" || y === n ? s : y;
    }
    function At() {
      var n;
      !m(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = Pt(t.Reflect));
      var s, a, d, y = new D(), O = {
        registerProvider: P,
        getProvider: c,
        setProvider: f
      };
      return O;
      function P(p) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === p:
            break;
          case m(s):
            s = p;
            break;
          case s === p:
            break;
          case m(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            d === void 0 && (d = new R()), d.add(p);
            break;
        }
      }
      function _(p, g) {
        if (!m(s)) {
          if (s.isProviderFor(p, g))
            return s;
          if (!m(a)) {
            if (a.isProviderFor(p, g))
              return s;
            if (!m(d))
              for (var A = Ie(d); ; ) {
                var S = je(A);
                if (!S)
                  return;
                var N = He(S);
                if (N.isProviderFor(p, g))
                  return De(A), N;
              }
          }
        }
        if (!m(n) && n.isProviderFor(p, g))
          return n;
      }
      function c(p, g) {
        var A = y.get(p), S;
        return m(A) || (S = A.get(g)), m(S) && (S = _(p, g), m(S) || (m(A) && (A = new T(), y.set(p, A)), A.set(g, S))), S;
      }
      function h(p) {
        if (m(p))
          throw new TypeError();
        return s === p || a === p || !m(d) && d.has(p);
      }
      function f(p, g, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = c(p, g);
        if (S !== A) {
          if (!m(S))
            return !1;
          var N = y.get(p);
          m(N) && (N = new T(), y.set(p, N)), N.set(g, A);
        }
        return !0;
      }
    }
    function St() {
      var n;
      return !m(F) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[F]), m(n) && (n = At()), !m(F) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Mt(n) {
      var s = new D(), a = {
        isProviderFor: function(h, f) {
          var p = s.get(h);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: P,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: c
      };
      return ae.registerProvider(a), a;
      function d(h, f, p) {
        var g = s.get(h), A = !1;
        if (m(g)) {
          if (!p)
            return;
          g = new T(), s.set(h, g), A = !0;
        }
        var S = g.get(f);
        if (m(S)) {
          if (!p)
            return;
          if (S = new T(), g.set(f, S), !n.setProvider(h, f, a))
            throw g.delete(f), A && s.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, f, p) {
        var g = d(
          f,
          p,
          /*Create*/
          !1
        );
        return m(g) ? !1 : ke(g.has(h));
      }
      function O(h, f, p) {
        var g = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m(g))
          return g.get(h);
      }
      function P(h, f, p, g) {
        var A = d(
          p,
          g,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function _(h, f) {
        var p = [], g = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(g))
          return p;
        for (var A = g.keys(), S = Ie(A), N = 0; ; ) {
          var Le = je(S);
          if (!Le)
            return p.length = N, p;
          var xt = He(Le);
          try {
            p[N] = xt;
          } catch (Rt) {
            try {
              De(S);
            } finally {
              throw Rt;
            }
          }
          N++;
        }
      }
      function c(h, f, p) {
        var g = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (m(g) || !g.delete(h))
          return !1;
        if (g.size === 0) {
          var A = s.get(f);
          m(A) || (A.delete(p), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function Pt(n) {
      var s = n.defineMetadata, a = n.hasOwnMetadata, d = n.getOwnMetadata, y = n.getOwnMetadataKeys, O = n.deleteMetadata, P = new D(), _ = {
        isProviderFor: function(c, h) {
          var f = P.get(c);
          return !m(f) && f.has(h) ? !0 : y(c, h).length ? (m(f) && (f = new R(), P.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: O
      };
      return _;
    }
    function Q(n, s, a) {
      var d = ae.getProvider(n, s);
      if (!m(d))
        return d;
      if (a) {
        if (ae.setProvider(n, s, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function Ot() {
      var n = {}, s = [], a = (
        /** @class */
        function() {
          function _(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[l] = function() {
            return this;
          }, _.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, _.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
          }, _;
        }()
      ), d = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, _.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, _.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, pe(c, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, P);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[l] = function() {
            return this.entries();
          }, _.prototype._find = function(c, h) {
            if (!pe(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pe(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return d;
      function y(_, c) {
        return _;
      }
      function O(_, c) {
        return c;
      }
      function P(_, c) {
        return [_, c];
      }
    }
    function Ct() {
      var n = (
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
      return n;
    }
    function Tt() {
      var n = 16, s = E.create(), a = d();
      return (
        /** @class */
        function() {
          function c() {
            this._key = d();
          }
          return c.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? E.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? E.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var p = y(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, c.prototype.delete = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = d();
          }, c;
        }()
      );
      function d() {
        var c;
        do
          c = "@@WeakMap@@" + _();
        while (E.has(s, c));
        return s[c] = !0, c;
      }
      function y(c, h) {
        if (!r.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: E.create() });
        }
        return c[a];
      }
      function O(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function P(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : O(h, c), h;
        }
        return O(new Array(c), c);
      }
      function _() {
        var c = P(n);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < n; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ve(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Ge || (Ge = {}));
function Ut(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function zt(i) {
  return function(e) {
    if (Ut(i)) {
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
function It(i) {
  return zt(i);
}
function Ht(i) {
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
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && b) {
          const $ = new CSSStyleSheet(), E = (v = u.sheet) == null ? void 0 : v.cssRules;
          E && (Array.from(E).forEach((w) => $.insertRule(w.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
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
function jt(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Dt(i) {
  return function(e, t) {
    try {
      jt(i);
      const r = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (i.fieldMappings = i.fieldMappings ?? t), r.push(i), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function H(i) {
  return Dt(i);
}
var U;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown";
})(U || (U = {}));
var k;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(k || (k = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, we = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let nt = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Lt = (i) => new nt(typeof i == "string" ? i : i + "", void 0, $e), Bt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((r, o, u) => r + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[u + 1], i[0]);
  return new nt(t, i, $e);
}, Wt = (i, e) => {
  if (we) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), o = ue.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = t.cssText, i.appendChild(r);
  }
}, Fe = we ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Lt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gt, defineProperty: Vt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: Yt, getOwnPropertySymbols: qt, getPrototypeOf: Zt } = Object, B = globalThis, Ye = B.trustedTypes, Xt = Ye ? Ye.emptyScript : "", me = B.reactiveElementPolyfillSupport, ee = (i, e) => i, de = { toAttribute(i, e) {
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
} }, Ee = (i, e) => !Gt(i, e), qe = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class Z extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(e, r, t);
      o !== void 0 && Vt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: o, set: u } = Ft(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const b = o == null ? void 0 : o.call(this);
      u.call(this, l), this.requestUpdate(e, b, r);
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
      const t = this.properties, r = [...Yt(t), ...qt(t)];
      for (const o of r) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, o] of t) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const o = this._$Eu(t, r);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const o of r) t.unshift(Fe(o));
    } else e !== void 0 && t.push(Fe(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Wt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostConnected) == null ? void 0 : r.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostDisconnected) == null ? void 0 : r.call(t);
    });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$EC(e, t) {
    var u;
    const r = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const l = (((u = r.converter) == null ? void 0 : u.toAttribute) !== void 0 ? r.converter : de).toAttribute(t, r.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const r = this.constructor, o = r._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = r.getPropertyOptions(o), b = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : de;
      this._$Em = o, this[o] = b.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, r) {
    if (e !== void 0) {
      if (r ?? (r = this.constructor.getPropertyOptions(e)), !(r.hasChanged ?? Ee)(this[e], t)) return;
      this.P(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, r) {
    this._$AL.has(e) || this._$AL.set(e, t), r.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
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
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((o) => {
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
    (t = this._$EO) == null || t.forEach((r) => {
      var o;
      return (o = r.hostUpdated) == null ? void 0 : o.call(r);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[ee("elementProperties")] = /* @__PURE__ */ new Map(), Z[ee("finalized")] = /* @__PURE__ */ new Map(), me == null || me({ ReactiveElement: Z }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, ce = te.trustedTypes, Ze = ce ? ce.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, rt = "$lit$", L = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + L, Jt = `<${it}>`, V = document, re = () => V.createComment(""), ie = (i) => i === null || typeof i != "object" && typeof i != "function", Ae = Array.isArray, Qt = (i) => Ae(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Xe = /-->/g, Je = />/g, W = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, Ke = /"/g, st = /^(?:script|style|textarea|title)$/i, Kt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), q = Kt(1), X = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), G = V.createTreeWalker(V, 129);
function ot(i, e) {
  if (!Ae(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const en = (i, e) => {
  const t = i.length - 1, r = [];
  let o, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = K;
  for (let b = 0; b < t; b++) {
    const v = i[b];
    let $, E, w = -1, T = 0;
    for (; T < v.length && (l.lastIndex = T, E = l.exec(v), E !== null); ) T = l.lastIndex, l === K ? E[1] === "!--" ? l = Xe : E[1] !== void 0 ? l = Je : E[2] !== void 0 ? (st.test(E[2]) && (o = RegExp("</" + E[2], "g")), l = W) : E[3] !== void 0 && (l = W) : l === W ? E[0] === ">" ? (l = o ?? K, w = -1) : E[1] === void 0 ? w = -2 : (w = l.lastIndex - E[2].length, $ = E[1], l = E[3] === void 0 ? W : E[3] === '"' ? Ke : Qe) : l === Ke || l === Qe ? l = W : l === Xe || l === Je ? l = K : (l = W, o = void 0);
    const R = l === W && i[b + 1].startsWith("/>") ? " " : "";
    u += l === K ? v + Jt : w >= 0 ? (r.push($), v.slice(0, w) + rt + v.slice(w) + L + R) : v + L + (w === -2 ? b : R);
  }
  return [ot(i, u + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class se {
  constructor({ strings: e, _$litType$: t }, r) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const b = e.length - 1, v = this.parts, [$, E] = en(e, t);
    if (this.el = se.createElement($, r), G.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = G.nextNode()) !== null && v.length < b; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(rt)) {
          const T = E[l++], R = o.getAttribute(w).split(L), D = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: u, name: D[2], strings: R, ctor: D[1] === "." ? nn : D[1] === "?" ? rn : D[1] === "@" ? sn : he }), o.removeAttribute(w);
        } else w.startsWith(L) && (v.push({ type: 6, index: u }), o.removeAttribute(w));
        if (st.test(o.tagName)) {
          const w = o.textContent.split(L), T = w.length - 1;
          if (T > 0) {
            o.textContent = ce ? ce.emptyScript : "";
            for (let R = 0; R < T; R++) o.append(w[R], re()), G.nextNode(), v.push({ type: 2, index: ++u });
            o.append(w[T], re());
          }
        }
      } else if (o.nodeType === 8) if (o.data === it) v.push({ type: 2, index: u });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(L, w + 1)) !== -1; ) v.push({ type: 7, index: u }), w += L.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const r = V.createElement("template");
    return r.innerHTML = e, r;
  }
}
function J(i, e, t = i, r) {
  var l, b;
  if (e === X) return e;
  let o = r !== void 0 ? (l = t.o) == null ? void 0 : l[r] : t.l;
  const u = ie(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((b = o == null ? void 0 : o._$AO) == null || b.call(o, !1), u === void 0 ? o = void 0 : (o = new u(i), o._$AT(i, t, r)), r !== void 0 ? (t.o ?? (t.o = []))[r] = o : t.l = o), o !== void 0 && (e = J(i, o._$AS(i, e.values), o, r)), e;
}
class tn {
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
    const { el: { content: t }, parts: r } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? V).importNode(t, !0);
    G.currentNode = o;
    let u = G.nextNode(), l = 0, b = 0, v = r[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let $;
        v.type === 2 ? $ = new oe(u, u.nextSibling, this, e) : v.type === 1 ? $ = new v.ctor(u, v.name, v.strings, this, e) : v.type === 6 && ($ = new on(u, this, e)), this._$AV.push($), v = r[++b];
      }
      l !== (v == null ? void 0 : v.index) && (u = G.nextNode(), l++);
    }
    return G.currentNode = V, o;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class oe {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, r, o) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    const { values: t, _$litType$: r } = e, o = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = se.createElement(ot(r.h, r.h[0]), this.options)), r);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(t);
    else {
      const l = new tn(o, this), b = l.u(this.options);
      l.p(t), this.T(b), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, o = 0;
    for (const u of e) o === t.length ? t.push(r = new oe(this.O(re()), this.O(re()), this, this.options)) : r = t[o], r._$AI(u), o++;
    o < t.length && (this._$AR(r && r._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class he {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, o, u) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = u, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = C;
  }
  _$AI(e, t = this, r, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = J(this, e, t, 0), l = !ie(e) || e !== this._$AH && e !== X, l && (this._$AH = e);
    else {
      const b = e;
      let v, $;
      for (e = u[0], v = 0; v < u.length - 1; v++) $ = J(this, b[r + v], t, v), $ === X && ($ = this._$AH[v]), l || (l = !ie($) || $ !== this._$AH[v]), $ === C ? e = C : e !== C && (e += ($ ?? "") + u[v + 1]), this._$AH[v] = $;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class nn extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class rn extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class sn extends he {
  constructor(e, t, r, o, u) {
    super(e, t, r, o, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? C) === X) return;
    const r = this._$AH, o = e === C && r !== C || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, u = e !== C && (r === C || o);
    o && this.element.removeEventListener(this.name, this, r), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class on {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
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
const an = (i, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = r._$litPart$;
  if (o === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = o = new oe(e.insertBefore(re(), u), u, void 0, t ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ne extends Z {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = an(t, this.renderRoot, this.renderOptions);
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
ne._$litElement$ = !0, ne.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: ne });
const be = globalThis.litElementPolyfillSupport;
be == null || be({ LitElement: ne });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ln = (i) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(i, e);
  }) : customElements.define(i, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const un = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ee }, dn = (i = un, e, t) => {
  const { kind: r, metadata: o } = t;
  let u = globalThis.litPropertyMetadata.get(o);
  if (u === void 0 && globalThis.litPropertyMetadata.set(o, u = /* @__PURE__ */ new Map()), u.set(t.name, i), r === "accessor") {
    const { name: l } = t;
    return { set(b) {
      const v = e.get.call(this);
      e.set.call(this, b), this.requestUpdate(l, v, i);
    }, init(b) {
      return b !== void 0 && this.P(l, void 0, i), b;
    } };
  }
  if (r === "setter") {
    const { name: l } = t;
    return function(b) {
      const v = this[l];
      e.call(this, b), this.requestUpdate(l, v, i);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function j(i) {
  return (e, t) => typeof t == "object" ? dn(i, e, t) : ((r, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...r, wrapped: !0 } : r), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(i, e, t);
}
var cn = Object.defineProperty, hn = Object.getOwnPropertyDescriptor, z = (i, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? hn(e, t) : e, u = i.length - 1, l; u >= 0; u--)
    (l = i[u]) && (o = (r ? l(e, t, o) : l(o)) || o);
  return r && o && cn(e, t, o), o;
};
let x = class extends ne {
  constructor() {
    super(...arguments), this.columns = 2, this.gap = 16, this.minColumnWidth = 220, this.enableHeader = !1, this.expanded = !0, this.expandable = !0, this.label = "Panel Header", this.icon = "📄", this.iconPosition = "start";
  }
  handleSlotChange() {
    this.dispatchEvent(
      new CustomEvent("slotchange", {
        detail: { columns: this.normalizedColumns },
        bubbles: !0,
        composed: !0
      })
    );
  }
  get normalizedColumns() {
    const i = Number(this.columns);
    return Number.isFinite(i) ? Math.min(4, Math.max(1, Math.trunc(i))) : 1;
  }
  toggleExpanded() {
    this.expandable && (this.expanded = !this.expanded, this.dispatchEvent(new CustomEvent("expansionchange", { detail: { expanded: this.expanded } })));
  }
  renderIcon() {
    return this.icon ? q`<span class="icon">${this.icon}</span>` : q``;
  }
  render() {
    const i = [
      `--zero-panel-columns:var(--zero-panel-columns-override, ${this.normalizedColumns})`,
      `--zero-panel-gap:var(--zero-panel-gap-override, ${Math.max(0, Number(this.gap) || 0)}px)`,
      `--zero-panel-min-col:var(--zero-panel-min-col-override, ${Math.max(120, Number(this.minColumnWidth) || 220)}px)`
    ].join(";");
    return q`
      <div class="panel-container">
        ${this.enableHeader ? q`
          <div class="header" @click=${this.toggleExpanded}>
            ${this.iconPosition === "start" ? this.renderIcon() : ""}
            <span class="label">${this.label}</span>
            ${this.iconPosition === "end" ? this.renderIcon() : ""}
            ${this.expandable ? q`<span class="toggle-chevron">▼</span>` : ""}
          </div>
        ` : ""}
        <div class="content-wrapper">
          <div class="content-inner">
            <div class="layout" style=${i}>
              ${Array.from({ length: this.normalizedColumns }).map(
      (e, t) => q`<slot name="col-${t + 1}" @slotchange=${t === 0 ? this.handleSlotChange : null}></slot>`
    )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
x.styles = Bt`
    :host {
      display: block;
      width: 100%;
      --zero-panel-header-bg: transparent;
      --zero-panel-header-padding: 12px 16px;
      --zero-panel-transition: 240ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .panel-container {
      border: 1px solid var(--zero-border-soft, #e2e8f0);
      border-radius: 8px;
      overflow: hidden;
      background: var(--zero-surface, #ffffff);
    }

    .header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: var(--zero-panel-header-padding);
      background: var(--zero-panel-header-bg);
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid var(--zero-border-soft, #e2e8f0);
    }

    .header:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .label {
      flex: 1;
      font-weight: 600;
      font-size: 0.94rem;
      color: var(--zero-text, #1e293b);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }

    .toggle-chevron {
      transition: transform var(--zero-panel-transition);
      font-size: 0.8rem;
      opacity: 0.6;
    }

    :host([expanded]) .toggle-chevron {
      transform: rotate(180deg);
    }

    .content-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--zero-panel-transition);
    }

    :host([expanded]) .content-wrapper {
      grid-template-rows: 1fr;
    }

    .content-inner {
      overflow: hidden;
    }

    .layout {
      --zero-panel-columns: 1;
      --zero-panel-gap: 16px;
      --zero-panel-min-col: 220px;
      display: grid;
      width: 100%;
      box-sizing: border-box;
      padding: 16px;
      gap: var(--zero-panel-gap);
      grid-template-columns: repeat(var(--zero-panel-columns), minmax(var(--zero-panel-min-col), 1fr));
      align-items: start;
      min-height: 120px;
    }

    slot {
      display: block;
      min-height: 100%;
      pointer-events: auto;
    }
  `;
z([
  j({ type: Number }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Columns",
    fieldMappings: "columns",
    optionItems: [
      { label: "1 Column", value: 1 },
      { label: "2 Columns", value: 2 },
      { label: "3 Columns", value: 3 },
      { label: "4 Columns", value: 4 }
    ]
  })
], x.prototype, "columns", 2);
z([
  j({ type: Number }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: U.NUMBER_INPUT,
    displayLabel: "Gap (px)",
    fieldMappings: "gap"
  })
], x.prototype, "gap", 2);
z([
  j({ type: Number, attribute: "min-column-width" }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: U.NUMBER_INPUT,
    displayLabel: "Min Column Width (px)",
    fieldMappings: "minColumnWidth"
  })
], x.prototype, "minColumnWidth", 2);
z([
  j({ type: Boolean, attribute: "enable-header" }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader"
  })
], x.prototype, "enableHeader", 2);
z([
  j({ type: Boolean, reflect: !0 }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded"
  })
], x.prototype, "expanded", 2);
z([
  j({ type: Boolean }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable"
  })
], x.prototype, "expandable", 2);
z([
  j({ type: String }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label"
  })
], x.prototype, "label", 2);
z([
  j({ type: String }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Icon (Emoji/HTML)",
    fieldMappings: "icon"
  })
], x.prototype, "icon", 2);
z([
  j({ type: String, attribute: "icon-position" }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Icon Position",
    fieldMappings: "iconPosition",
    optionItems: [
      { label: "Start", value: "start" },
      { label: "End", value: "end" }
    ]
  })
], x.prototype, "iconPosition", 2);
z([
  H({
    attributeType: k.EVENT,
    displayLabel: "On Slot Change",
    eventTrigger: "slotchange"
  })
], x.prototype, "handleSlotChange", 1);
x = z([
  It({
    name: "zero-panel-layout",
    version: "1.0.0",
    title: "Panel Layout",
    elementSelector: "zero-panel-layout",
    group: "Layout",
    iconName: "panel-layout-icon.png"
  }),
  Ht(),
  ln("zero-panel-layout")
], x);
export {
  x as ZeroPanelLayout
};
