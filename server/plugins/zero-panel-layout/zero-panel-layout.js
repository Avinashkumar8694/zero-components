var xt = Object.defineProperty;
var kt = (i, e, t) => e in i ? xt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Le = (i, e, t) => kt(i, typeof e != "symbol" ? e + "" : e, t);
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
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : w(), n = o(i);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = i);
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
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", w = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, b = !w && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: w ? function() {
        return pe(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return pe({ __proto__: null });
      } : function() {
        return pe({});
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
    }, $ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ot(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pt(), N = typeof WeakMap == "function" ? WeakMap : Ct(), L = o ? Symbol.for("@reflect-metadata:registry") : void 0, ie = Et(), Ee = St(ie);
    function ot(r, s, a, h) {
      if (m(a)) {
        if (!ke(r))
          throw new TypeError();
        if (!Ne(s))
          throw new TypeError();
        return vt(r, s);
      } else {
        if (!ke(r))
          throw new TypeError();
        if (!M(s))
          throw new TypeError();
        if (!M(h) && !m(h) && !W(h))
          throw new TypeError();
        return W(h) && (h = void 0), a = k(a), mt(r, s, a, h);
      }
    }
    e("decorate", ot);
    function at(r, s) {
      function a(h, y) {
        if (!M(h))
          throw new TypeError();
        if (!m(y) && !bt(y))
          throw new TypeError();
        Pe(r, s, h, y);
      }
      return a;
    }
    e("metadata", at);
    function lt(r, s, a, h) {
      if (!M(a))
        throw new TypeError();
      return m(h) || (h = k(h)), Pe(r, s, a, h);
    }
    e("defineMetadata", lt);
    function ut(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = k(a)), Se(r, s, a);
    }
    e("hasMetadata", ut);
    function ht(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = k(a)), ce(r, s, a);
    }
    e("hasOwnMetadata", ht);
    function ct(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = k(a)), Me(r, s, a);
    }
    e("getMetadata", ct);
    function dt(r, s, a) {
      if (!M(s))
        throw new TypeError();
      return m(a) || (a = k(a)), Oe(r, s, a);
    }
    e("getOwnMetadata", dt);
    function ft(r, s) {
      if (!M(r))
        throw new TypeError();
      return m(s) || (s = k(s)), Ce(r, s);
    }
    e("getMetadataKeys", ft);
    function pt(r, s) {
      if (!M(r))
        throw new TypeError();
      return m(s) || (s = k(s)), Te(r, s);
    }
    e("getOwnMetadataKeys", pt);
    function yt(r, s, a) {
      if (!M(s))
        throw new TypeError();
      if (m(a) || (a = k(a)), !M(s))
        throw new TypeError();
      m(a) || (a = k(a));
      var h = q(
        s,
        a,
        /*Create*/
        !1
      );
      return m(h) ? !1 : h.OrdinaryDeleteMetadata(r, s, a);
    }
    e("deleteMetadata", yt);
    function vt(r, s) {
      for (var a = r.length - 1; a >= 0; --a) {
        var h = r[a], y = h(s);
        if (!m(y) && !W(y)) {
          if (!Ne(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function mt(r, s, a, h) {
      for (var y = r.length - 1; y >= 0; --y) {
        var P = r[y], O = P(s, a, h);
        if (!m(O) && !W(O)) {
          if (!M(O))
            throw new TypeError();
          h = O;
        }
      }
      return h;
    }
    function Se(r, s, a) {
      var h = ce(r, s, a);
      if (h)
        return !0;
      var y = fe(s);
      return W(y) ? !1 : Se(r, y, a);
    }
    function ce(r, s, a) {
      var h = q(
        s,
        a,
        /*Create*/
        !1
      );
      return m(h) ? !1 : xe(h.OrdinaryHasOwnMetadata(r, s, a));
    }
    function Me(r, s, a) {
      var h = ce(r, s, a);
      if (h)
        return Oe(r, s, a);
      var y = fe(s);
      if (!W(y))
        return Me(r, y, a);
    }
    function Oe(r, s, a) {
      var h = q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!m(h))
        return h.OrdinaryGetOwnMetadata(r, s, a);
    }
    function Pe(r, s, a, h) {
      var y = q(
        a,
        h,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, s, a, h);
    }
    function Ce(r, s) {
      var a = Te(r, s), h = fe(r);
      if (h === null)
        return a;
      var y = Ce(h, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new R(), O = [], _ = 0, c = a; _ < c.length; _++) {
        var d = c[_], f = P.has(d);
        f || (P.add(d), O.push(d));
      }
      for (var p = 0, g = y; p < g.length; p++) {
        var d = g[p], f = P.has(d);
        f || (P.add(d), O.push(d));
      }
      return O;
    }
    function Te(r, s) {
      var a = q(
        r,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, s) : [];
    }
    function Re(r) {
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
    function m(r) {
      return r === void 0;
    }
    function W(r) {
      return r === null;
    }
    function _t(r) {
      return typeof r == "symbol";
    }
    function M(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function gt(r, s) {
      switch (Re(r)) {
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
      var a = "string", h = Ue(r, u);
      if (h !== void 0) {
        var y = h.call(r, a);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return wt(r);
    }
    function wt(r, s) {
      var a, h;
      {
        var y = r.toString;
        if (se(y)) {
          var h = y.call(r);
          if (!M(h))
            return h;
        }
        var a = r.valueOf;
        if (se(a)) {
          var h = a.call(r);
          if (!M(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function xe(r) {
      return !!r;
    }
    function $t(r) {
      return "" + r;
    }
    function k(r) {
      var s = gt(r);
      return _t(s) ? s : $t(s);
    }
    function ke(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function se(r) {
      return typeof r == "function";
    }
    function Ne(r) {
      return typeof r == "function";
    }
    function bt(r) {
      switch (Re(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function de(r, s) {
      return r === s || r !== r && s !== s;
    }
    function Ue(r, s) {
      var a = r[s];
      if (a != null) {
        if (!se(a))
          throw new TypeError();
        return a;
      }
    }
    function Ie(r) {
      var s = Ue(r, l);
      if (!se(s))
        throw new TypeError();
      var a = s.call(r);
      if (!M(a))
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
    function ze(r) {
      var s = r.return;
      s && s.call(r);
    }
    function fe(r) {
      var s = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === $ || s !== $)
        return s;
      var a = r.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return s;
      var y = h.constructor;
      return typeof y != "function" || y === r ? s : y;
    }
    function At() {
      var r;
      !m(L) && typeof t.Reflect < "u" && !(L in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Mt(t.Reflect));
      var s, a, h, y = new N(), P = {
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
            h === void 0 && (h = new R()), h.add(p);
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
            if (!m(h))
              for (var E = Ie(h); ; ) {
                var S = He(E);
                if (!S)
                  return;
                var x = je(S);
                if (x.isProviderFor(p, g))
                  return ze(E), x;
              }
          }
        }
        if (!m(r) && r.isProviderFor(p, g))
          return r;
      }
      function c(p, g) {
        var E = y.get(p), S;
        return m(E) || (S = E.get(g)), m(S) && (S = _(p, g), m(S) || (m(E) && (E = new T(), y.set(p, E)), E.set(g, S))), S;
      }
      function d(p) {
        if (m(p))
          throw new TypeError();
        return s === p || a === p || !m(h) && h.has(p);
      }
      function f(p, g, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = c(p, g);
        if (S !== E) {
          if (!m(S))
            return !1;
          var x = y.get(p);
          m(x) && (x = new T(), y.set(p, x)), x.set(g, E);
        }
        return !0;
      }
    }
    function Et() {
      var r;
      return !m(L) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[L]), m(r) && (r = At()), !m(L) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function St(r) {
      var s = new N(), a = {
        isProviderFor: function(d, f) {
          var p = s.get(d);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: c
      };
      return ie.registerProvider(a), a;
      function h(d, f, p) {
        var g = s.get(d), E = !1;
        if (m(g)) {
          if (!p)
            return;
          g = new T(), s.set(d, g), E = !0;
        }
        var S = g.get(f);
        if (m(S)) {
          if (!p)
            return;
          if (S = new T(), g.set(f, S), !r.setProvider(d, f, a))
            throw g.delete(f), E && s.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(d, f, p) {
        var g = h(
          f,
          p,
          /*Create*/
          !1
        );
        return m(g) ? !1 : xe(g.has(d));
      }
      function P(d, f, p) {
        var g = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m(g))
          return g.get(d);
      }
      function O(d, f, p, g) {
        var E = h(
          p,
          g,
          /*Create*/
          !0
        );
        E.set(d, f);
      }
      function _(d, f) {
        var p = [], g = h(
          d,
          f,
          /*Create*/
          !1
        );
        if (m(g))
          return p;
        for (var E = g.keys(), S = Ie(E), x = 0; ; ) {
          var De = He(S);
          if (!De)
            return p.length = x, p;
          var Tt = je(De);
          try {
            p[x] = Tt;
          } catch (Rt) {
            try {
              ze(S);
            } finally {
              throw Rt;
            }
          }
          x++;
        }
      }
      function c(d, f, p) {
        var g = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (m(g) || !g.delete(d))
          return !1;
        if (g.size === 0) {
          var E = s.get(f);
          m(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Mt(r) {
      var s = r.defineMetadata, a = r.hasOwnMetadata, h = r.getOwnMetadata, y = r.getOwnMetadataKeys, P = r.deleteMetadata, O = new N(), _ = {
        isProviderFor: function(c, d) {
          var f = O.get(c);
          return !m(f) && f.has(d) ? !0 : y(c, d).length ? (m(f) && (f = new R(), O.set(c, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return _;
    }
    function q(r, s, a) {
      var h = ie.getProvider(r, s);
      if (!m(h))
        return h;
      if (a) {
        if (ie.setProvider(r, s, Ee))
          return Ee;
        throw new Error("Illegal state.");
      }
    }
    function Ot() {
      var r = {}, s = [], a = (
        /** @class */
        function() {
          function _(c, d, f) {
            this._index = 0, this._keys = c, this._values = d, this._selector = f;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[l] = function() {
            return this;
          }, _.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var d = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, _.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
          }, _;
        }()
      ), h = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = r, this._cacheIndex = -2;
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
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, _.prototype.set = function(c, d) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, _.prototype.delete = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, de(c, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[l] = function() {
            return this.entries();
          }, _.prototype._find = function(c, d) {
            if (!de(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (de(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return h;
      function y(_, c) {
        return _;
      }
      function P(_, c) {
        return c;
      }
      function O(_, c) {
        return [_, c];
      }
    }
    function Pt() {
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
    function Ct() {
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
          c = "@@WeakMap@@" + _();
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
      function _() {
        var c = O(r);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var d = "", f = 0; f < r; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function pe(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Ge || (Ge = {}));
function Nt(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Ut(i) {
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
function It(i) {
  return Ut(i);
}
function jt(i) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Le(this, "_stylesApplied", !1);
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
    return t;
  };
}
function Ht(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function zt(i) {
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
function ue(i) {
  return zt(i);
}
var Q;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown";
})(Q || (Q = {}));
var B;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(B || (B = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, ge = oe.ShadowRoot && (oe.ShadyCSS === void 0 || oe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, we = Symbol(), Be = /* @__PURE__ */ new WeakMap();
let tt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== we) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ge && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Be.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Be.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Dt = (i) => new tt(typeof i == "string" ? i : i + "", void 0, we), Lt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((n, o, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[u + 1], i[0]);
  return new tt(t, i, we);
}, Wt = (i, e) => {
  if (ge) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = oe.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, i.appendChild(n);
  }
}, Ve = ge ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Dt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gt, defineProperty: Bt, getOwnPropertyDescriptor: Vt, getOwnPropertyNames: Ft, getOwnPropertySymbols: qt, getPrototypeOf: Zt } = Object, I = globalThis, Fe = I.trustedTypes, Yt = Fe ? Fe.emptyScript : "", ye = I.reactiveElementPolyfillSupport, Y = (i, e) => i, ae = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? Yt : null;
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
} }, $e = (i, e) => !Gt(i, e), qe = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: $e };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), I.litPropertyMetadata ?? (I.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class G extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Bt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: u } = Vt(this.prototype, e) ?? { get() {
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
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const e = Zt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const t = this.properties, n = [...Ft(t), ...qt(t)];
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
      for (const o of n) t.unshift(Ve(o));
    } else e !== void 0 && t.push(Ve(e));
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
    return Wt(e, this.constructor.elementStyles), e;
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
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : ae).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = n.getPropertyOptions(o), w = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : ae;
      this._$Em = o, this[o] = w.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? $e)(this[e], t)) return;
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
G.elementStyles = [], G.shadowRootOptions = { mode: "open" }, G[Y("elementProperties")] = /* @__PURE__ */ new Map(), G[Y("finalized")] = /* @__PURE__ */ new Map(), ye == null || ye({ ReactiveElement: G }), (I.reactiveElementVersions ?? (I.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, le = X.trustedTypes, Ze = le ? le.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, rt = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, nt = "?" + U, Xt = `<${nt}>`, z = document, K = () => z.createComment(""), ee = (i) => i === null || typeof i != "object" && typeof i != "function", be = Array.isArray, Jt = (i) => be(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", ve = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ye = /-->/g, Xe = />/g, j = RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Je = /'/g, Qe = /"/g, it = /^(?:script|style|textarea|title)$/i, Qt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), Kt = Qt(1), V = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Ke = /* @__PURE__ */ new WeakMap(), H = z.createTreeWalker(z, 129);
function st(i, e) {
  if (!be(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const er = (i, e) => {
  const t = i.length - 1, n = [];
  let o, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Z;
  for (let w = 0; w < t; w++) {
    const v = i[w];
    let b, A, $ = -1, T = 0;
    for (; T < v.length && (l.lastIndex = T, A = l.exec(v), A !== null); ) T = l.lastIndex, l === Z ? A[1] === "!--" ? l = Ye : A[1] !== void 0 ? l = Xe : A[2] !== void 0 ? (it.test(A[2]) && (o = RegExp("</" + A[2], "g")), l = j) : A[3] !== void 0 && (l = j) : l === j ? A[0] === ">" ? (l = o ?? Z, $ = -1) : A[1] === void 0 ? $ = -2 : ($ = l.lastIndex - A[2].length, b = A[1], l = A[3] === void 0 ? j : A[3] === '"' ? Qe : Je) : l === Qe || l === Je ? l = j : l === Ye || l === Xe ? l = Z : (l = j, o = void 0);
    const R = l === j && i[w + 1].startsWith("/>") ? " " : "";
    u += l === Z ? v + Xt : $ >= 0 ? (n.push(b), v.slice(0, $) + rt + v.slice($) + U + R) : v + U + ($ === -2 ? w : R);
  }
  return [st(i, u + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class te {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const w = e.length - 1, v = this.parts, [b, A] = er(e, t);
    if (this.el = te.createElement(b, n), H.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = H.nextNode()) !== null && v.length < w; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(rt)) {
          const T = A[l++], R = o.getAttribute($).split(U), N = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: u, name: N[2], strings: R, ctor: N[1] === "." ? rr : N[1] === "?" ? nr : N[1] === "@" ? ir : he }), o.removeAttribute($);
        } else $.startsWith(U) && (v.push({ type: 6, index: u }), o.removeAttribute($));
        if (it.test(o.tagName)) {
          const $ = o.textContent.split(U), T = $.length - 1;
          if (T > 0) {
            o.textContent = le ? le.emptyScript : "";
            for (let R = 0; R < T; R++) o.append($[R], K()), H.nextNode(), v.push({ type: 2, index: ++u });
            o.append($[T], K());
          }
        }
      } else if (o.nodeType === 8) if (o.data === nt) v.push({ type: 2, index: u });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(U, $ + 1)) !== -1; ) v.push({ type: 7, index: u }), $ += U.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const n = z.createElement("template");
    return n.innerHTML = e, n;
  }
}
function F(i, e, t = i, n) {
  var l, w;
  if (e === V) return e;
  let o = n !== void 0 ? (l = t.o) == null ? void 0 : l[n] : t.l;
  const u = ee(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((w = o == null ? void 0 : o._$AO) == null || w.call(o, !1), u === void 0 ? o = void 0 : (o = new u(i), o._$AT(i, t, n)), n !== void 0 ? (t.o ?? (t.o = []))[n] = o : t.l = o), o !== void 0 && (e = F(i, o._$AS(i, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? z).importNode(t, !0);
    H.currentNode = o;
    let u = H.nextNode(), l = 0, w = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let b;
        v.type === 2 ? b = new re(u, u.nextSibling, this, e) : v.type === 1 ? b = new v.ctor(u, v.name, v.strings, this, e) : v.type === 6 && (b = new sr(u, this, e)), this._$AV.push(b), v = n[++w];
      }
      l !== (v == null ? void 0 : v.index) && (u = H.nextNode(), l++);
    }
    return H.currentNode = z, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class re {
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
    e = F(this, e, t), ee(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== V && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Jt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && ee(this._$AH) ? this._$AA.nextSibling.data = e : this.T(z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = te.createElement(st(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(t);
    else {
      const l = new tr(o, this), w = l.u(this.options);
      l.p(t), this.T(w), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = Ke.get(e.strings);
    return t === void 0 && Ke.set(e.strings, t = new te(e)), t;
  }
  k(e) {
    be(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const u of e) o === t.length ? t.push(n = new re(this.O(K()), this.O(K()), this, this.options)) : n = t[o], n._$AI(u), o++;
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
class he {
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
    if (u === void 0) e = F(this, e, t, 0), l = !ee(e) || e !== this._$AH && e !== V, l && (this._$AH = e);
    else {
      const w = e;
      let v, b;
      for (e = u[0], v = 0; v < u.length - 1; v++) b = F(this, w[n + v], t, v), b === V && (b = this._$AH[v]), l || (l = !ee(b) || b !== this._$AH[v]), b === C ? e = C : e !== C && (e += (b ?? "") + u[v + 1]), this._$AH[v] = b;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class nr extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class ir extends he {
  constructor(e, t, n, o, u) {
    super(e, t, n, o, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = F(this, e, t, 0) ?? C) === V) return;
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
    F(this, e);
  }
}
const me = X.litHtmlPolyfillSupport;
me == null || me(te, re), (X.litHtmlVersions ?? (X.litHtmlVersions = [])).push("3.2.0");
const or = (i, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new re(e.insertBefore(K(), u), u, void 0, t ?? {});
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
    return V;
  }
}
var et;
J._$litElement$ = !0, J.finalized = !0, (et = globalThis.litElementHydrateSupport) == null || et.call(globalThis, { LitElement: J });
const _e = globalThis.litElementPolyfillSupport;
_e == null || _e({ LitElement: J });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: $e }, lr = (i = ar, e, t) => {
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
function Ae(i) {
  return (e, t) => typeof t == "object" ? lr(i, e, t) : ((n, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(i, e, t);
}
var ur = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, ne = (i, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? hr(e, t) : e, u = i.length - 1, l; u >= 0; u--)
    (l = i[u]) && (o = (n ? l(e, t, o) : l(o)) || o);
  return n && o && ur(e, t, o), o;
};
let D = class extends J {
  constructor() {
    super(...arguments), this.columns = 1, this.gap = 16, this.minColumnWidth = 220;
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
  render() {
    const i = [
      `--zero-panel-columns:var(--zero-panel-columns-override, ${this.normalizedColumns})`,
      `--zero-panel-gap:var(--zero-panel-gap-override, ${Math.max(0, Number(this.gap) || 0)}px)`,
      `--zero-panel-min-col:var(--zero-panel-min-col-override, ${Math.max(120, Number(this.minColumnWidth) || 220)}px)`
    ].join(";");
    return Kt`
      <div class="layout" style=${i}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
};
D.styles = Lt`
    :host {
      display: block;
      width: 100%;
    }

    .layout {
      --zero-panel-columns: 1;
      --zero-panel-gap: 16px;
      --zero-panel-min-col: 220px;
      display: grid;
      width: 100%;
      box-sizing: border-box;
      gap: var(--zero-panel-gap);
      grid-template-columns: repeat(var(--zero-panel-columns), minmax(var(--zero-panel-min-col), 1fr));
      align-items: start;
    }

    @media (max-width: 767px) {
      .layout {
        --zero-panel-columns: 1;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      .layout {
        --zero-panel-columns: min(2, var(--zero-panel-columns));
      }
    }
  `;
ne([
  Ae({ type: Number }),
  ue({
    attributeType: B.PROPERTY,
    uiComponentType: Q.DROPDOWN,
    displayLabel: "Columns",
    fieldMappings: "columns",
    optionItems: [
      { label: "1 Column", value: 1 },
      { label: "2 Columns", value: 2 },
      { label: "3 Columns", value: 3 },
      { label: "4 Columns", value: 4 }
    ]
  })
], D.prototype, "columns", 2);
ne([
  Ae({ type: Number }),
  ue({
    attributeType: B.PROPERTY,
    uiComponentType: Q.NUMBER_INPUT,
    displayLabel: "Gap (px)",
    fieldMappings: "gap"
  })
], D.prototype, "gap", 2);
ne([
  Ae({ type: Number, attribute: "min-column-width" }),
  ue({
    attributeType: B.PROPERTY,
    uiComponentType: Q.NUMBER_INPUT,
    displayLabel: "Min Column Width (px)",
    fieldMappings: "minColumnWidth"
  })
], D.prototype, "minColumnWidth", 2);
ne([
  ue({
    attributeType: B.EVENT,
    displayLabel: "On Slot Change",
    eventTrigger: "slotchange"
  })
], D.prototype, "handleSlotChange", 1);
D = ne([
  It({
    name: "zero-panel-layout",
    version: "1.0.0",
    title: "Panel Layout",
    elementSelector: "zero-panel-layout",
    group: "Layout",
    iconName: "panel-layout-icon.png"
  }),
  jt()
], D);
export {
  D as ZeroPanelLayout
};
