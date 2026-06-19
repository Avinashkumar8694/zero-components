var Ut = Object.defineProperty;
var zt = (r, e, t) => e in r ? Ut(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ve = (r, e, t) => zt(r, typeof e != "symbol" ? e + "" : e, t);
var qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof qe == "object" ? qe : typeof self == "object" ? self : typeof this == "object" ? this : v(), n = i(r);
    typeof t.Reflect < "u" && (n = i(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function i(p, x) {
      return function(b, $) {
        Object.defineProperty(p, b, { configurable: !0, writable: !0, value: $ }), x && x(b, $);
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
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, i = typeof Symbol == "function", l = i && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = i && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, x = !v && !p, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
      },
      has: x ? function(a, s) {
        return n.call(a, s);
      } : function(a, s) {
        return s in a;
      },
      get: x ? function(a, s) {
        return n.call(a, s) ? a[s] : void 0;
      } : function(a, s) {
        return a[s];
      }
    }, $ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Rt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Lt(), z = typeof WeakMap == "function" ? WeakMap : Nt(), J = i ? Symbol.for("@reflect-metadata:registry") : void 0, oe = Tt(), Ce = kt(oe);
    function ht(a, s, o, c) {
      if (m(o)) {
        if (!je(a))
          throw new TypeError();
        if (!De(s))
          throw new TypeError();
        return $t(a, s);
      } else {
        if (!je(a))
          throw new TypeError();
        if (!A(s))
          throw new TypeError();
        if (!A(c) && !m(c) && !F(c))
          throw new TypeError();
        return F(c) && (c = void 0), o = j(o), xt(a, s, o, c);
      }
    }
    e("decorate", ht);
    function pt(a, s) {
      function o(c, y) {
        if (!A(c))
          throw new TypeError();
        if (!m(y) && !Ot(y))
          throw new TypeError();
        ke(a, s, c, y);
      }
      return o;
    }
    e("metadata", pt);
    function ft(a, s, o, c) {
      if (!A(o))
        throw new TypeError();
      return m(c) || (c = j(c)), ke(a, s, o, c);
    }
    e("defineMetadata", ft);
    function gt(a, s, o) {
      if (!A(s))
        throw new TypeError();
      return m(o) || (o = j(o)), Oe(a, s, o);
    }
    e("hasMetadata", gt);
    function vt(a, s, o) {
      if (!A(s))
        throw new TypeError();
      return m(o) || (o = j(o)), fe(a, s, o);
    }
    e("hasOwnMetadata", vt);
    function yt(a, s, o) {
      if (!A(s))
        throw new TypeError();
      return m(o) || (o = j(o)), Me(a, s, o);
    }
    e("getMetadata", yt);
    function mt(a, s, o) {
      if (!A(s))
        throw new TypeError();
      return m(o) || (o = j(o)), Te(a, s, o);
    }
    e("getOwnMetadata", mt);
    function bt(a, s) {
      if (!A(a))
        throw new TypeError();
      return m(s) || (s = j(s)), Pe(a, s);
    }
    e("getMetadataKeys", bt);
    function _t(a, s) {
      if (!A(a))
        throw new TypeError();
      return m(s) || (s = j(s)), Re(a, s);
    }
    e("getOwnMetadataKeys", _t);
    function wt(a, s, o) {
      if (!A(s))
        throw new TypeError();
      if (m(o) || (o = j(o)), !A(s))
        throw new TypeError();
      m(o) || (o = j(o));
      var c = Q(
        s,
        o,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(a, s, o);
    }
    e("deleteMetadata", wt);
    function $t(a, s) {
      for (var o = a.length - 1; o >= 0; --o) {
        var c = a[o], y = c(s);
        if (!m(y) && !F(y)) {
          if (!De(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function xt(a, s, o, c) {
      for (var y = a.length - 1; y >= 0; --y) {
        var O = a[y], C = O(s, o, c);
        if (!m(C) && !F(C)) {
          if (!A(C))
            throw new TypeError();
          c = C;
        }
      }
      return c;
    }
    function Oe(a, s, o) {
      var c = fe(a, s, o);
      if (c)
        return !0;
      var y = ve(s);
      return F(y) ? !1 : Oe(a, y, o);
    }
    function fe(a, s, o) {
      var c = Q(
        s,
        o,
        /*Create*/
        !1
      );
      return m(c) ? !1 : Ne(c.OrdinaryHasOwnMetadata(a, s, o));
    }
    function Me(a, s, o) {
      var c = fe(a, s, o);
      if (c)
        return Te(a, s, o);
      var y = ve(s);
      if (!F(y))
        return Me(a, y, o);
    }
    function Te(a, s, o) {
      var c = Q(
        s,
        o,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(a, s, o);
    }
    function ke(a, s, o, c) {
      var y = Q(
        o,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(a, s, o, c);
    }
    function Pe(a, s) {
      var o = Re(a, s), c = ve(a);
      if (c === null)
        return o;
      var y = Pe(c, s);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var O = new R(), C = [], _ = 0, d = o; _ < d.length; _++) {
        var h = d[_], f = O.has(h);
        f || (O.add(h), C.push(h));
      }
      for (var g = 0, w = y; g < w.length; g++) {
        var h = w[g], f = O.has(h);
        f || (O.add(h), C.push(h));
      }
      return C;
    }
    function Re(a, s) {
      var o = Q(
        a,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(a, s) : [];
    }
    function Le(a) {
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
    function m(a) {
      return a === void 0;
    }
    function F(a) {
      return a === null;
    }
    function St(a) {
      return typeof a == "symbol";
    }
    function A(a) {
      return typeof a == "object" ? a !== null : typeof a == "function";
    }
    function Et(a, s) {
      switch (Le(a)) {
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
      var o = "string", c = Ue(a, l);
      if (c !== void 0) {
        var y = c.call(a, o);
        if (A(y))
          throw new TypeError();
        return y;
      }
      return At(a);
    }
    function At(a, s) {
      var o, c;
      {
        var y = a.toString;
        if (le(y)) {
          var c = y.call(a);
          if (!A(c))
            return c;
        }
        var o = a.valueOf;
        if (le(o)) {
          var c = o.call(a);
          if (!A(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ne(a) {
      return !!a;
    }
    function Ct(a) {
      return "" + a;
    }
    function j(a) {
      var s = Et(a);
      return St(s) ? s : Ct(s);
    }
    function je(a) {
      return Array.isArray ? Array.isArray(a) : a instanceof Object ? a instanceof Array : Object.prototype.toString.call(a) === "[object Array]";
    }
    function le(a) {
      return typeof a == "function";
    }
    function De(a) {
      return typeof a == "function";
    }
    function Ot(a) {
      switch (Le(a)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ge(a, s) {
      return a === s || a !== a && s !== s;
    }
    function Ue(a, s) {
      var o = a[s];
      if (o != null) {
        if (!le(o))
          throw new TypeError();
        return o;
      }
    }
    function ze(a) {
      var s = Ue(a, u);
      if (!le(s))
        throw new TypeError();
      var o = s.call(a);
      if (!A(o))
        throw new TypeError();
      return o;
    }
    function He(a) {
      return a.value;
    }
    function Ie(a) {
      var s = a.next();
      return s.done ? !1 : s;
    }
    function We(a) {
      var s = a.return;
      s && s.call(a);
    }
    function ve(a) {
      var s = Object.getPrototypeOf(a);
      if (typeof a != "function" || a === $ || s !== $)
        return s;
      var o = a.prototype, c = o && Object.getPrototypeOf(o);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === a ? s : y;
    }
    function Mt() {
      var a;
      !m(J) && typeof t.Reflect < "u" && !(J in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (a = Pt(t.Reflect));
      var s, o, c, y = new z(), O = {
        registerProvider: C,
        getProvider: d,
        setProvider: f
      };
      return O;
      function C(g) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case a === g:
            break;
          case m(s):
            s = g;
            break;
          case s === g:
            break;
          case m(o):
            o = g;
            break;
          case o === g:
            break;
          default:
            c === void 0 && (c = new R()), c.add(g);
            break;
        }
      }
      function _(g, w) {
        if (!m(s)) {
          if (s.isProviderFor(g, w))
            return s;
          if (!m(o)) {
            if (o.isProviderFor(g, w))
              return s;
            if (!m(c))
              for (var S = ze(c); ; ) {
                var E = Ie(S);
                if (!E)
                  return;
                var L = He(E);
                if (L.isProviderFor(g, w))
                  return We(S), L;
              }
          }
        }
        if (!m(a) && a.isProviderFor(g, w))
          return a;
      }
      function d(g, w) {
        var S = y.get(g), E;
        return m(S) || (E = S.get(w)), m(E) && (E = _(g, w), m(E) || (m(S) && (S = new T(), y.set(g, S)), S.set(w, E))), E;
      }
      function h(g) {
        if (m(g))
          throw new TypeError();
        return s === g || o === g || !m(c) && c.has(g);
      }
      function f(g, w, S) {
        if (!h(S))
          throw new Error("Metadata provider not registered.");
        var E = d(g, w);
        if (E !== S) {
          if (!m(E))
            return !1;
          var L = y.get(g);
          m(L) && (L = new T(), y.set(g, L)), L.set(w, S);
        }
        return !0;
      }
    }
    function Tt() {
      var a;
      return !m(J) && A(t.Reflect) && Object.isExtensible(t.Reflect) && (a = t.Reflect[J]), m(a) && (a = Mt()), !m(J) && A(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, J, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: a
      }), a;
    }
    function kt(a) {
      var s = new z(), o = {
        isProviderFor: function(h, f) {
          var g = s.get(h);
          return m(g) ? !1 : g.has(f);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: d
      };
      return oe.registerProvider(o), o;
      function c(h, f, g) {
        var w = s.get(h), S = !1;
        if (m(w)) {
          if (!g)
            return;
          w = new T(), s.set(h, w), S = !0;
        }
        var E = w.get(f);
        if (m(E)) {
          if (!g)
            return;
          if (E = new T(), w.set(f, E), !a.setProvider(h, f, o))
            throw w.delete(f), S && s.delete(h), new Error("Wrong provider for target.");
        }
        return E;
      }
      function y(h, f, g) {
        var w = c(
          f,
          g,
          /*Create*/
          !1
        );
        return m(w) ? !1 : Ne(w.has(h));
      }
      function O(h, f, g) {
        var w = c(
          f,
          g,
          /*Create*/
          !1
        );
        if (!m(w))
          return w.get(h);
      }
      function C(h, f, g, w) {
        var S = c(
          g,
          w,
          /*Create*/
          !0
        );
        S.set(h, f);
      }
      function _(h, f) {
        var g = [], w = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(w))
          return g;
        for (var S = w.keys(), E = ze(S), L = 0; ; ) {
          var Be = Ie(E);
          if (!Be)
            return g.length = L, g;
          var jt = He(Be);
          try {
            g[L] = jt;
          } catch (Dt) {
            try {
              We(E);
            } finally {
              throw Dt;
            }
          }
          L++;
        }
      }
      function d(h, f, g) {
        var w = c(
          f,
          g,
          /*Create*/
          !1
        );
        if (m(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var S = s.get(f);
          m(S) || (S.delete(g), S.size === 0 && s.delete(S));
        }
        return !0;
      }
    }
    function Pt(a) {
      var s = a.defineMetadata, o = a.hasOwnMetadata, c = a.getOwnMetadata, y = a.getOwnMetadataKeys, O = a.deleteMetadata, C = new z(), _ = {
        isProviderFor: function(d, h) {
          var f = C.get(d);
          return !m(f) && f.has(h) ? !0 : y(d, h).length ? (m(f) && (f = new R(), C.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: O
      };
      return _;
    }
    function Q(a, s, o) {
      var c = oe.getProvider(a, s);
      if (!m(c))
        return c;
      if (o) {
        if (oe.setProvider(a, s, Ce))
          return Ce;
        throw new Error("Illegal state.");
      }
    }
    function Rt() {
      var a = {}, s = [], o = (
        /** @class */
        function() {
          function _(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[u] = function() {
            return this;
          }, _.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, _.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, _;
        }()
      ), c = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = a, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, _.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, _.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, g = h + 1; g < f; g++)
                this._keys[g - 1] = this._keys[g], this._values[g - 1] = this._values[g];
              return this._keys.length--, this._values.length--, ge(d, this._cacheKey) && (this._cacheKey = a, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = a, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new o(this._keys, this._values, y);
          }, _.prototype.values = function() {
            return new o(this._keys, this._values, O);
          }, _.prototype.entries = function() {
            return new o(this._keys, this._values, C);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(d, h) {
            if (!ge(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ge(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return c;
      function y(_, d) {
        return _;
      }
      function O(_, d) {
        return d;
      }
      function C(_, d) {
        return [_, d];
      }
    }
    function Lt() {
      var a = (
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
    function Nt() {
      var a = 16, s = b.create(), o = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var g = y(
              h,
              /*create*/
              !0
            );
            return g[this._key] = f, this;
          }, d.prototype.delete = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + _();
        while (b.has(s, d));
        return s[d] = !0, d;
      }
      function y(d, h) {
        if (!n.call(d, o)) {
          if (!h)
            return;
          Object.defineProperty(d, o, { value: b.create() });
        }
        return d[o];
      }
      function O(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function C(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : O(h, d), h;
        }
        return O(new Array(d), d);
      }
      function _() {
        var d = C(a);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < a; ++f) {
          var g = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), g < 16 && (h += "0"), h += g.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ye(a) {
      return a.__ = void 0, delete a.__, a;
    }
  });
})(Ge || (Ge = {}));
function Ht(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function It(r) {
  return function(e) {
    if (Ht(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const n = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, e);
          } catch {
            try {
              customElements.define(n, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, l);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Wt(r) {
  return It(r);
}
function Bt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ve(this, "_stylesApplied", !1);
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
        var x;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), v = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && v) {
          const b = new CSSStyleSheet(), $ = (x = l.sheet) == null ? void 0 : x.cssRules;
          $ && (Array.from($).forEach((T) => b.insertRule(T.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          p.appendChild(b);
        }
        u.forEach((b) => {
          const $ = b.cloneNode(!0);
          p.appendChild($);
        });
      }
    }
    return t;
  };
}
function Vt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function qt(r) {
  return function(e, t) {
    try {
      Vt(r);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      let i = !0;
      if (typeof t == "string") {
        try {
          i = typeof e[t] != "function";
        } catch {
          i = !0;
        }
        i && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function W(r) {
  return qt(r);
}
var U;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(U || (U = {}));
var D;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(D || (D = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = globalThis, xe = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Se = Symbol(), Je = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Se) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (xe && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Je.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Je.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Gt = (r) => new ot(typeof r == "string" ? r : r + "", void 0, Se), Jt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, i, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[l + 1], r[0]);
  return new ot(t, r, Se);
}, Ft = (r, e) => {
  if (xe) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), i = ce.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = xe ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Gt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zt, defineProperty: Yt, getOwnPropertyDescriptor: Xt, getOwnPropertyNames: Qt, getOwnPropertySymbols: Kt, getPrototypeOf: er } = Object, I = globalThis, Ze = I.trustedTypes, tr = Ze ? Ze.emptyScript : "", me = I.reactiveElementPolyfillSupport, ee = (r, e) => r, de = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? tr : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ee = (r, e) => !Zt(r, e), Ye = { attribute: !0, type: String, converter: de, reflect: !1, useDefault: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), I.litPropertyMetadata ?? (I.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ye) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), i = this.getPropertyDescriptor(e, n, t);
      i !== void 0 && Yt(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: i, set: l } = Xt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: i, set(u) {
      const v = i == null ? void 0 : i.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, v, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ye;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = er(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, n = [...Qt(t), ...Kt(t)];
      for (const i of n) this.createProperty(i, t[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, i] of t) this.elementProperties.set(n, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const i = this._$Eu(t, n);
      i !== void 0 && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const i of n) t.unshift(Fe(i));
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
    return Ft(e, this.constructor.elementStyles), e;
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
  _$ET(e, t) {
    var l;
    const n = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, n);
    if (i !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : de).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(i) : this.setAttribute(i, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, i = n._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const v = n.getPropertyOptions(i), p = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : de;
      this._$Em = i;
      const x = p.fromAttribute(t, v.type);
      this[i] = x ?? ((u = this._$Ej) == null ? void 0 : u.get(i)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, i = !1, l) {
    var u;
    if (e !== void 0) {
      const v = this.constructor;
      if (i === !1 && (l = this[e]), n ?? (n = v.getPropertyOptions(e)), !((n.hasChanged ?? Ee)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(v._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: i, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), i === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [l, u] of i) {
        const { wrapped: v } = u, p = this[l];
        v !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((i) => {
        var l;
        return (l = i.hostUpdate) == null ? void 0 : l.call(i);
      }), this.update(t)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var i;
      return (i = n.hostUpdated) == null ? void 0 : i.call(n);
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[ee("elementProperties")] = /* @__PURE__ */ new Map(), Z[ee("finalized")] = /* @__PURE__ */ new Map(), me == null || me({ ReactiveElement: Z }), (I.reactiveElementVersions ?? (I.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Xe = (r) => r, he = te.trustedTypes, Qe = he ? he.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, lt = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + H, rr = `<${ut}>`, G = document, ne = () => G.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Ae = Array.isArray, nr = (r) => Ae(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", be = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ke = /-->/g, et = />/g, B = RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), tt = /'/g, rt = /"/g, ct = /^(?:script|style|textarea|title)$/i, ir = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ue = ir(1), Y = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), nt = /* @__PURE__ */ new WeakMap(), V = G.createTreeWalker(G, 129);
function dt(r, e) {
  if (!Ae(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Qe !== void 0 ? Qe.createHTML(e) : e;
}
const ar = (r, e) => {
  const t = r.length - 1, n = [];
  let i, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let v = 0; v < t; v++) {
    const p = r[v];
    let x, b, $ = -1, T = 0;
    for (; T < p.length && (u.lastIndex = T, b = u.exec(p), b !== null); ) T = u.lastIndex, u === K ? b[1] === "!--" ? u = Ke : b[1] !== void 0 ? u = et : b[2] !== void 0 ? (ct.test(b[2]) && (i = RegExp("</" + b[2], "g")), u = B) : b[3] !== void 0 && (u = B) : u === B ? b[0] === ">" ? (u = i ?? K, $ = -1) : b[1] === void 0 ? $ = -2 : ($ = u.lastIndex - b[2].length, x = b[1], u = b[3] === void 0 ? B : b[3] === '"' ? rt : tt) : u === rt || u === tt ? u = B : u === Ke || u === et ? u = K : (u = B, i = void 0);
    const R = u === B && r[v + 1].startsWith("/>") ? " " : "";
    l += u === K ? p + rr : $ >= 0 ? (n.push(x), p.slice(0, $) + lt + p.slice($) + H + R) : p + H + ($ === -2 ? v : R);
  }
  return [dt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ae {
  constructor({ strings: e, _$litType$: t }, n) {
    let i;
    this.parts = [];
    let l = 0, u = 0;
    const v = e.length - 1, p = this.parts, [x, b] = ar(e, t);
    if (this.el = ae.createElement(x, n), V.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (i = V.nextNode()) !== null && p.length < v; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const $ of i.getAttributeNames()) if ($.endsWith(lt)) {
          const T = b[u++], R = i.getAttribute($).split(H), z = /([.?@])?(.*)/.exec(T);
          p.push({ type: 1, index: l, name: z[2], strings: R, ctor: z[1] === "." ? or : z[1] === "?" ? lr : z[1] === "@" ? ur : pe }), i.removeAttribute($);
        } else $.startsWith(H) && (p.push({ type: 6, index: l }), i.removeAttribute($));
        if (ct.test(i.tagName)) {
          const $ = i.textContent.split(H), T = $.length - 1;
          if (T > 0) {
            i.textContent = he ? he.emptyScript : "";
            for (let R = 0; R < T; R++) i.append($[R], ne()), V.nextNode(), p.push({ type: 2, index: ++l });
            i.append($[T], ne());
          }
        }
      } else if (i.nodeType === 8) if (i.data === ut) p.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = i.data.indexOf(H, $ + 1)) !== -1; ) p.push({ type: 7, index: l }), $ += H.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = G.createElement("template");
    return n.innerHTML = e, n;
  }
}
function X(r, e, t = r, n) {
  var u, v;
  if (e === Y) return e;
  let i = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ie(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== l && ((v = i == null ? void 0 : i._$AO) == null || v.call(i, !1), l === void 0 ? i = void 0 : (i = new l(r), i._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = i : t._$Cl = i), i !== void 0 && (e = X(r, i._$AS(r, e.values), i, n)), e;
}
class sr {
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
    const { el: { content: t }, parts: n } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? G).importNode(t, !0);
    V.currentNode = i;
    let l = V.nextNode(), u = 0, v = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let x;
        p.type === 2 ? x = new se(l, l.nextSibling, this, e) : p.type === 1 ? x = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (x = new cr(l, this, e)), this._$AV.push(x), p = n[++v];
      }
      u !== (p == null ? void 0 : p.index) && (l = V.nextNode(), u++);
    }
    return V.currentNode = G, i;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, i) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
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
    e = X(this, e, t), ie(e) ? e === M || e == null || e === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : e !== this._$AH && e !== Y && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== M && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(G.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, i = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ae.createElement(dt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === i) this._$AH.p(t);
    else {
      const u = new sr(i, this), v = u.u(this.options);
      u.p(t), this.T(v), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = nt.get(e.strings);
    return t === void 0 && nt.set(e.strings, t = new ae(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, i = 0;
    for (const l of e) i === t.length ? t.push(n = new se(this.O(ne()), this.O(ne()), this, this.options)) : n = t[i], n._$AI(l), i++;
    i < t.length && (this._$AR(n && n._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const i = Xe(e).nextSibling;
      Xe(e).remove(), e = i;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class pe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, i, l) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = M;
  }
  _$AI(e, t = this, n, i) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = X(this, e, t, 0), u = !ie(e) || e !== this._$AH && e !== Y, u && (this._$AH = e);
    else {
      const v = e;
      let p, x;
      for (e = l[0], p = 0; p < l.length - 1; p++) x = X(this, v[n + p], t, p), x === Y && (x = this._$AH[p]), u || (u = !ie(x) || x !== this._$AH[p]), x === M ? e = M : e !== M && (e += (x ?? "") + l[p + 1]), this._$AH[p] = x;
    }
    u && !i && this.j(e);
  }
  j(e) {
    e === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends pe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === M ? void 0 : e;
  }
}
class lr extends pe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== M);
  }
}
class ur extends pe {
  constructor(e, t, n, i, l) {
    super(e, t, n, i, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = X(this, e, t, 0) ?? M) === Y) return;
    const n = this._$AH, i = e === M && n !== M || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== M && (n === M || i);
    i && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class cr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    X(this, e);
  }
}
const _e = te.litHtmlPolyfillSupport;
_e == null || _e(ae, se), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
const dr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let i = n._$litPart$;
  if (i === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = i = new se(e.insertBefore(ne(), l), l, void 0, t ?? {});
  }
  return i._$AI(r), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis;
class re extends Z {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = dr(t, this.renderRoot, this.renderOptions);
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
    return Y;
  }
}
var st;
re._$litElement$ = !0, re.finalized = !0, (st = q.litElementHydrateSupport) == null || st.call(q, { LitElement: re });
const we = q.litElementPolyfillSupport;
we == null || we({ LitElement: re });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ee }, pr = (r = hr, e, t) => {
  const { kind: n, metadata: i } = t;
  let l = globalThis.litPropertyMetadata.get(i);
  if (l === void 0 && globalThis.litPropertyMetadata.set(i, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(v) {
      const p = e.get.call(this);
      e.set.call(this, v), this.requestUpdate(u, p, r, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(u, void 0, r, v), v;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(v) {
      const p = this[u];
      e.call(this, v), this.requestUpdate(u, p, r, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function N(r) {
  return (e, t) => typeof t == "object" ? pr(r, e, t) : ((n, i, l) => {
    const u = i.hasOwnProperty(l);
    return i.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(i, l) : void 0;
  })(r, e, t);
}
var fr = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, P = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? gr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (i = (n ? u(e, t, i) : u(i)) || i);
  return n && i && fr(e, t, i), i;
};
const it = () => window.zeroThemeManager, at = {
  kind: "generic",
  templateHtml: [
    "<div style='display:grid;gap:0;border:1px solid rgba(30,41,59,0.22);border-radius:14px;overflow:hidden;background:#0f172a;color:#e2e8f0;'>",
    "<div style='display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#1e293b;font-size:0.74rem;'>",
    "<strong>{{display:language}}</strong><span>{{display:theme}}</span>",
    "</div>",
    "<div style='display:grid;grid-template-columns:50px 1fr;min-height:180px;'>",
    "<div style='padding:12px 8px;background:#111827;color:#64748b;font-size:0.72rem;line-height:1.6;text-align:right;'>1<br/>2<br/>3<br/>4</div>",
    "<div style='padding:12px 14px;font-family:monospace;font-size:0.78rem;line-height:1.6;white-space:pre;color:#cbd5e1;'>{{display:code}}</div>",
    "</div>",
    "</div>"
  ].join(""),
  badges: ["Editor", "Code"]
};
let k = class extends re {
  constructor() {
    super(...arguments), this.code = `function helloWorld() {
    console.log("Hello, World!");
    return "Welcome to the code editor!";
}

// This is a comment
const message = "Monaco-like editor";
let count = 0;

class CodeEditor {
    constructor() {
        this.initialized = true;
    }
    
    run() {
        helloWorld();
    }
}`, this._languages = this.getDefaultLanguages(), this._language = "javascript", this.theme = "dark", this.showLineNumbers = !0, this.showMinimap = !0, this.wordWrap = !1, this.cursorLine = 1, this.cursorColumn = 1, this.searchVisible = !1, this.searchTerm = "";
  }
  static getStudioTemplate(r) {
    if (!r) return at;
    const e = $e(r.studio.display.language || "javascript"), t = $e(r.studio.display.theme || "dark"), n = $e(r.studio.display.code || "function example() {}"), i = t === "light", l = i ? "#ffffff" : "#1e1e1e", u = i ? "#f3f3f3" : "#252526", v = i ? "#333" : "#d4d4d4", p = "var(--uiv-border-color, #d1d5db)";
    return {
      ...at,
      templateHtml: [
        `<div style='display:grid;grid-template-rows:auto 1fr;border:1px solid ${p};border-radius:8px;overflow:hidden;background:${l};color:${v};font-family:monospace;'>`,
        `<div style='display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:${u};border-bottom:1px solid ${p};font-size:12px;'>`,
        `<strong>${e}</strong><span>${t}</span>`,
        "</div>",
        "<div style='display:grid;grid-template-columns:40px 1fr;min-height:150px;'>",
        `<div style='padding:12px 8px;background:${u};color:#858585;font-size:12px;text-align:right;border-right:1px solid ${p};'>1<br/>2<br/>3</div>`,
        `<div style='padding:12px;font-size:13px;line-height:1.4;white-space:pre-wrap;'>${n}</div>`,
        "</div>",
        "</div>"
      ].join("")
    };
  }
  get languages() {
    return this._languages;
  }
  set languages(r) {
    let e;
    if (typeof r == "string")
      try {
        let n = r;
        if (n.includes("'") && (n = n.replace(/'/g, '"')), e = JSON.parse(n), !Array.isArray(e))
          throw new Error("Parsed value is not an array");
      } catch (n) {
        console.warn("Failed to parse languages string, using default languages:", n), console.warn("Original value:", r), e = this.getDefaultLanguages();
      }
    else Array.isArray(r) ? e = r : e = this.getDefaultLanguages();
    const t = e.filter(
      (n) => n && typeof n == "object" && typeof n.value == "string" && typeof n.label == "string"
    );
    this._languages = t.length > 0 ? t : this.getDefaultLanguages(), this.validateCurrentLanguage(), this.requestUpdate();
  }
  getDefaultLanguages() {
    return [
      { value: "javascript", label: "JavaScript" },
      { value: "typescript", label: "TypeScript" },
      { value: "python", label: "Python" },
      { value: "java", label: "Java" },
      { value: "csharp", label: "C#" },
      { value: "html", label: "HTML" },
      { value: "css", label: "CSS" },
      { value: "json", label: "JSON" }
    ];
  }
  validateCurrentLanguage() {
    if (!this._languages.some((e) => e.value === this._language) && this._languages.length > 0) {
      const e = this._language;
      this._language = this._languages[0].value, console.warn(`Current language "${e}" is not available in the updated languages list. Defaulting to "${this._language}".`);
    }
  }
  get language() {
    return this._language;
  }
  set language(r) {
    this.languages.some((t) => t.value === r) ? this._language = r : this.languages.length > 0 ? (this._language = this.languages[0].value, console.warn(`Language "${r}" is not available in the filtered languages list. Defaulting to "${this._language}".`)) : console.warn(`Language "${r}" is not available and no languages are configured. Keeping current language.`), this.requestUpdate();
  }
  onCodeChanged() {
    this.fireChangeEvent();
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = it()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  firstUpdated() {
    this.updateLineNumbers(), this.setupKeyboardShortcuts();
  }
  updated(r) {
    r.has("code") && (this.updateLineNumbers(), this.updateCursorPosition()), r.has("showLineNumbers") && this.updateLineNumbers();
  }
  updateLineNumbers() {
    var t;
    const r = this.code.split(`
`), e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".line-numbers");
    if (e && this.showLineNumbers) {
      const n = r.map((i, l) => `${l + 1}`);
      e.textContent = n.join(`
`);
    }
  }
  updateCursorPosition() {
    var e;
    const r = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".code-input");
    if (r) {
      const t = r.selectionStart, i = this.code.substring(0, t).split(`
`);
      this.cursorLine = i.length, this.cursorColumn = i[i.length - 1].length + 1;
    }
  }
  setupKeyboardShortcuts() {
    var e;
    const r = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".code-input");
    r && (r.addEventListener("keydown", (t) => {
      if (t.ctrlKey && t.key === "f" && (t.preventDefault(), this.toggleSearch()), t.key === "Tab") {
        t.preventDefault();
        const n = r.selectionStart, i = r.selectionEnd;
        t.shiftKey ? this.unindentSelection(r, n, i) : this.indentSelection(r, n, i);
      }
      ["(", "[", "{", '"', "'"].includes(t.key) && this.handleAutoClosing(t, r);
    }), r.addEventListener("input", (t) => {
      this.handleCodeInput(t), this.requestUpdate();
    }), r.addEventListener("click", () => {
      this.updateCursorPosition();
    }), r.addEventListener("scroll", () => {
      var n;
      const t = (n = this.shadowRoot) == null ? void 0 : n.querySelector(".line-numbers");
      t && (t.scrollTop = r.scrollTop);
    }));
  }
  indentSelection(r, e, t) {
    const n = r.value, i = n.substring(e, t);
    if (i.includes(`
`)) {
      const u = i.split(`
`).map((v) => "    " + v).join(`
`);
      r.value = n.substring(0, e) + u + n.substring(t), r.selectionStart = e, r.selectionEnd = e + u.length;
    } else
      r.value = n.substring(0, e) + "    " + n.substring(t), r.selectionStart = r.selectionEnd = e + 4;
    this.code = r.value;
  }
  unindentSelection(r, e, t) {
    const n = r.value, i = n.substring(0, e), l = n.substring(e, t), u = n.substring(t), x = l.split(`
`).map((b) => b.startsWith("    ") ? b.substring(4) : b.startsWith("	") ? b.substring(1) : b).join(`
`);
    r.value = i + x + u, r.selectionStart = e, r.selectionEnd = e + x.length, this.code = r.value;
  }
  handleAutoClosing(r, e) {
    const n = {
      "(": ")",
      "[": "]",
      "{": "}",
      '"': '"',
      "'": "'"
    }[r.key];
    if (n) {
      r.preventDefault();
      const i = e.selectionStart, l = e.selectionEnd, u = e.value;
      e.value = u.substring(0, i) + r.key + n + u.substring(l), e.selectionStart = e.selectionEnd = i + 1, this.code = e.value;
    }
  }
  toggleSearch() {
    this.searchVisible = !this.searchVisible, this.searchVisible && setTimeout(() => {
      var e;
      const r = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".search-input");
      r == null || r.focus();
    }, 0);
  }
  highlightSyntax(r) {
    if (!r) return "";
    let e = r;
    return (this.language === "javascript" || this.language === "typescript") && (e = e.replace(
      /\b(function|const|let|var|if|else|for|while|return|class|constructor|import|export|from|default|async|await|try|catch|finally|throw|new|this|super|extends|implements|interface|type|enum|namespace|public|private|protected|static|readonly|abstract)\b/g,
      '<span class="keyword">$1</span>'
    ), e = e.replace(
      /(["'])((?:\\.|(?!\1)[^\\])*?)\1/g,
      '<span class="string">$1$2$1</span>'
    ), e = e.replace(
      /\/\/.*$/gm,
      '<span class="comment">$&</span>'
    ), e = e.replace(
      /\/\*[\s\S]*?\*\//g,
      '<span class="comment">$&</span>'
    ), e = e.replace(
      /\b\d+\.?\d*\b/g,
      '<span class="number">$&</span>'
    ), e = e.replace(
      /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g,
      '<span class="function">$1</span>'
    )), e;
  }
  handleCodeInput(r) {
    const e = r.target;
    this.code = e.value, this.updateCursorPosition(), this.onCodeChanged();
  }
  fireChangeEvent() {
    this.dispatchEvent(new CustomEvent("code-changed", {
      detail: {
        code: this.code,
        language: this.language
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleLanguageChange(r) {
    const e = r.target;
    this.language = e.value;
  }
  handleThemeChange(r) {
    const e = r.target;
    this.theme = e.value;
  }
  handleSearch(r) {
    const e = r.target;
    this.searchTerm = e.value;
  }
  /**
  * Test method to validate the languages property setter works with JSON strings
  * and that language validation works correctly
  * This can be called from the browser console to test the functionality
  */
  testLanguagesSetter() {
    console.log("Testing languages setter and language validation...");
    const r = '[{"value":"javascript","label":"JavaScript"},{"value":"python","label":"Python"}]';
    console.log("Setting languages with valid JSON string:", r), this.languages = r, console.log("Current languages after valid JSON string:", this.languages);
    const e = "[{'value':'javascript','label':'JavaScript'}]";
    console.log("Setting languages with single quotes JSON:", e), this.languages = e, console.log("Current languages after single quotes JSON:", this.languages);
    const t = [{ value: "typescript", label: "TypeScript" }, { value: "html", label: "HTML" }];
    console.log("Setting languages with array:", t), this.languages = t, console.log("Current languages after array:", this.languages), console.log('Testing language validation - trying to set "python" when not available...'), this.language = "python", console.log("Current language after invalid selection:", this.language);
    const n = '[{"value":"test"';
    console.log("Setting languages with invalid JSON:", n), this.languages = n, console.log("Current languages after invalid JSON (should fallback to defaults):", this.languages), console.log('Testing setting valid language "javascript"...'), this.language = "javascript", console.log("Current language after valid selection:", this.language);
  }
  render() {
    var e;
    const r = (e = it()) == null ? void 0 : e.getActiveTheme("zero-standard-themes");
    return ue`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getComponentStyles("input") : ""}
            </style>
            <div class="editor-container uiv-${r == null ? void 0 : r.id}-theme uiv-${r == null ? void 0 : r.id}-card">
                <div class="editor-header uiv-${r == null ? void 0 : r.id}-scan">
                    <div class="editor-tabs">
                        <button class="editor-tab active">
                            ${this.language === "javascript" ? "script.js" : this.language === "typescript" ? "script.ts" : this.language === "python" ? "script.py" : this.language === "html" ? "index.html" : this.language === "css" ? "styles.css" : "file." + this.language}
                        </button>
                    </div>
                    <div class="editor-controls">
                        <div class="toolbar">
                            <button class="icon-button" @click="${this.toggleSearch}" title="Search (Ctrl+F)">🔍</button>                            <select class="language-selector" .value="${this.language}" @change="${this.handleLanguageChange}">
                                ${this.languages.map((t) => ue`
                                    <option value="${t.value}">${t.label}</option>
                                `)}
                            </select>
                            <select class="language-selector" .value="${this.theme}" @change="${this.handleThemeChange}">
                                <option value="dark">Dark</option>
                                <option value="light">Light</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="search-box ${this.searchVisible ? "visible" : ""}">
                    <input 
                        type="text" 
                        class="search-input" 
                        placeholder="Find..."
                        .value="${this.searchTerm}"
                        @input="${this.handleSearch}"
                    />
                </div>

                <div class="editor-main">
                    ${this.showLineNumbers ? ue`
                        <div class="line-numbers"></div>
                    ` : ""}
                    
                    <div class="editor-content">
                        <textarea
                            class="code-input"
                            .value="${this.code}"
                            @input="${this.handleCodeInput}"
                            placeholder="Start typing your code..."
                            spellcheck="false"
                            style="${this.wordWrap ? "white-space: pre-wrap;" : ""}"
                        ></textarea>
                    </div>

                    ${this.showMinimap ? ue`
                        <div class="minimap">
                            <div class="minimap-content">${this.code}</div>
                        </div>
                    ` : ""}
                </div>

                <div class="editor-footer">
                    <div class="status-info">
                        <span>Ln ${this.cursorLine}, Col ${this.cursorColumn}</span>
                        <span>${this.language.toUpperCase()}</span>
                        <span>UTF-8</span>
                    </div>
                    <div class="cursor-position">
                        <span>Lines: ${this.code.split(`
`).length}</span>
                        <span>Characters: ${this.code.length}</span>
                    </div>
                </div>
            </div>
        `;
  }
};
k.styles = Jt`
        :host {
            display: block;
            width: 100%;
            height: 400px;
            border: 1px solid var(--uiv-border-color, #d1d5db);
            border-radius: var(--uiv-border-radius, 8px);
            overflow: hidden;
            font-family: var(--uiv-font-mono, 'Courier New', monospace);
            background: var(--uiv-bg-surface, #1e1e1e);
            position: relative;
        }

        .editor-container {
            display: flex;
            flex-direction: column;
            height: 100%;
        }        .editor-header {
            background: var(--uiv-bg-overlay, #2d2d30);
            border-bottom: 1px solid var(--uiv-border-color, #3e3e42);
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--uiv-text-muted, #cccccc);
            font-size: var(--font-size-xs, 12px);
        }

        .editor-tabs {
            display: flex;
            gap: 1px;
        }        .editor-tab {
            background: var(--uiv-bg-overlay, #2d2d30);
            border: none;
            color: var(--uiv-text-muted, #cccccc);
            padding: var(--spacing-xs, 6px) var(--spacing-md, 12px);
            cursor: pointer;
            border-radius: var(--uiv-border-radius, 4px) var(--uiv-border-radius, 4px) 0 0;
            font-size: var(--font-size-xs, 12px);
            position: relative;
        }

        .editor-tab.active {
            background: var(--editor-background, #1e1e1e);
            color: var(--editor-text-primary, #ffffff);
        }

        .editor-tab:hover {
            background: var(--editor-hover-background, #3e3e42);
        }

        .editor-controls {
            display: flex;
            gap: 8px;
            align-items: center;
        }        .language-selector {
            background: var(--uiv-bg-surface, #3c3c3c);
            border: 1px solid var(--uiv-border-color, #464647);
            color: var(--uiv-text-color, #cccccc);
            padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px);
            border-radius: var(--uiv-border-radius, 4px);
            font-size: var(--font-size-xs, 11px);
        }

        .editor-main {
            display: flex;
            flex: 1;
            overflow: hidden;
        }        .line-numbers {
            background: var(--uiv-bg-surface, #252526);
            color: var(--uiv-text-muted, #6e7681);
            padding: var(--spacing-md, 12px) var(--spacing-sm, 8px);
            font-size: var(--font-size-sm, 13px);
            line-height: 1.4;
            text-align: right;
            min-width: 50px;
            border-right: 1px solid var(--uiv-border-color, #3e3e42);
            user-select: none;
            overflow: hidden;
            white-space: pre-line;
            font-family: var(--uiv-font-mono, 'Consolas', 'Courier New', monospace);
        }

        .editor-content {
            flex: 1;
            position: relative;
            overflow: auto;
        }        .code-input {
            width: 100%;
            height: 100%;
            background: transparent;
            color: var(--editor-text-primary, #d4d4d4);
            border: none;
            outline: none;
            font-family: var(--font-family-mono, 'Consolas', 'Courier New', monospace);
            font-size: var(--font-size-sm, 13px);
            line-height: 1.4;
            padding: var(--spacing-md, 12px);
            resize: none;
            white-space: pre;
            overflow-wrap: normal;
            overflow-x: auto;
            tab-size: 4;
        }        .code-highlight {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            font-family: var(--font-family-mono, 'Consolas', 'Courier New', monospace);
            font-size: var(--font-size-sm, 13px);
            line-height: 1.4;
            padding: var(--spacing-md, 12px);
            white-space: pre;
            overflow: hidden;
            color: transparent;
        }

        .keyword { color: var(--uiv-accent-primary, #569cd6); }
        .string { color: var(--uiv-accent-secondary, #ce9178); }
        .comment { color: var(--uiv-text-muted, #6a9955); font-style: italic; }
        .number { color: var(--uiv-primary-color, #b5cea8); }
        .operator { color: var(--uiv-text-color, #d4d4d4); }
        .function { color: var(--uiv-primary-light, #dcdcaa); }
        .variable { color: var(--uiv-text-muted, #9cdcfe); }
        .type { color: var(--uiv-primary-color, #4ec9b0); }
        .editor-footer {
            background: var(--primary-color, #007acc);
            color: white;
            padding: var(--spacing-xs, 4px) var(--spacing-md, 12px);
            font-size: var(--font-size-xs, 11px);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .status-info {
            display: flex;
            gap: 16px;
        }

        .cursor-position {
            display: flex;
            gap: 8px;
        }        .minimap {
            width: 100px;
            background: var(--editor-minimap-background, #252526);
            border-left: 1px solid var(--editor-border, #3e3e42);
            overflow: hidden;
            position: relative;
        }

        .minimap-content {
            font-size: var(--editor-minimap-font-size, 2px);
            line-height: 2px;
            color: var(--editor-text, #d4d4d4);
            padding: var(--spacing-xs, 2px);
            white-space: pre;
        }

        .search-box {
            position: absolute;
            top: 50px;
            right: 20px;            background: var(--editor-search-background, #2d2d30);
            border: 1px solid var(--editor-border, #3e3e42);
            border-radius: var(--border-radius-sm, 4px);
            padding: var(--spacing-sm, 8px);
            color: var(--editor-text-secondary, #cccccc);
            z-index: 10;
            display: none;
        }

        .search-box.visible {
            display: block;
        }        .search-input {
            background: var(--editor-select-background, #3c3c3c);
            border: 1px solid var(--editor-select-border, #464647);
            color: var(--editor-text-secondary, #cccccc);
            padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px);
            border-radius: var(--border-radius-xs, 2px);
            font-size: var(--font-size-xs, 11px);
            width: 200px;
        }

        .icon-button {
            background: none;
            border: none;
            color: var(--editor-text-secondary, #cccccc);
            cursor: pointer;
            padding: var(--spacing-xs, 4px);
            border-radius: var(--border-radius-xs, 2px);
            font-size: var(--font-size-xs, 12px);
        }        .icon-button:hover {
            background: var(--editor-button-hover, #3e3e42);
        }

        .toolbar {
            display: flex;
            gap: 4px;
            align-items: center;
        }        .theme-dark {
            background: var(--editor-background-dark, #1e1e1e);
        }

        .theme-light {
            background: var(--editor-background-light, #ffffff);
        }

        .theme-light .editor-header {            background: var(--editor-light-background, #f3f3f3);
            color: var(--editor-light-text, #333333);
            border-bottom-color: var(--editor-light-border, #e1e4e8);
        }        .theme-light .code-input {
            color: var(--editor-light-text-primary, #24292e);
        }

        .theme-light .line-numbers {
            background: var(--editor-light-line-background, #fafbfc);
            color: var(--editor-light-line-text, #6a737d);
            border-right-color: var(--editor-light-border, #e1e4e8);
        }

        .line-numbers-container {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    `;
P([
  N({ type: String }),
  W({
    attributeType: D.PROPERTY,
    uiComponentType: U.TEXTAREA,
    displayLabel: "Code Content",
    placeholderText: "Enter your code here...",
    fieldMappings: "code"
  })
], k.prototype, "code", 2);
P([
  N({ type: Array }),
  W({
    attributeType: D.PROPERTY,
    uiComponentType: U.TEXTAREA,
    displayLabel: "Available Languages",
    placeholderText: "JSON array of language options or actual array",
    fieldMappings: "languages",
    optionItems: {
      type: "Object"
    }
  })
], k.prototype, "languages", 1);
P([
  N({ type: String }),
  W({
    attributeType: D.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Language",
    optionItems: [
      { value: "javascript", label: "JavaScript" },
      { value: "typescript", label: "TypeScript" },
      { value: "python", label: "Python" },
      { value: "java", label: "Java" },
      { value: "csharp", label: "C#" },
      { value: "html", label: "HTML" },
      { value: "css", label: "CSS" },
      { value: "json", label: "JSON" }
    ],
    fieldMappings: "language"
  })
], k.prototype, "language", 1);
P([
  N({ type: String }),
  W({
    attributeType: D.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Theme",
    optionItems: [
      { value: "dark", label: "Dark" },
      { value: "light", label: "Light" }
    ],
    fieldMappings: "theme"
  })
], k.prototype, "theme", 2);
P([
  N({ type: Boolean }),
  W({
    attributeType: D.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Show Line Numbers",
    fieldMappings: "showLineNumbers"
  })
], k.prototype, "showLineNumbers", 2);
P([
  N({ type: Boolean }),
  W({
    attributeType: D.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Show Minimap",
    fieldMappings: "showMinimap"
  })
], k.prototype, "showMinimap", 2);
P([
  N({ type: Boolean }),
  W({
    attributeType: D.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Word Wrap",
    fieldMappings: "wordWrap"
  })
], k.prototype, "wordWrap", 2);
P([
  N({ type: Number })
], k.prototype, "cursorLine", 2);
P([
  N({ type: Number })
], k.prototype, "cursorColumn", 2);
P([
  N({ type: Boolean })
], k.prototype, "searchVisible", 2);
P([
  N({ type: String })
], k.prototype, "searchTerm", 2);
P([
  W({
    attributeType: D.EVENT,
    displayLabel: "On Code Changed",
    eventTrigger: "code-changed"
  })
], k.prototype, "onCodeChanged", 1);
k = P([
  Wt({
    name: "code-editor",
    version: "1.0.0",
    title: "Code Editor",
    elementSelector: "zero-code-editor",
    group: "Editors",
    iconName: "code-icon.png"
  }),
  Bt()
], k);
function $e(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  k as CodeEditor,
  at as studioTemplate
};
