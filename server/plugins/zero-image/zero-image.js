var je = Object.defineProperty;
var Ie = (r, t, e) => t in r ? je(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Gt = (r, t, e) => Ie(r, typeof t != "symbol" ? t + "" : t, e);
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
var Vt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Wt == "object" ? Wt : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(p, A) {
      return function(w, b) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: b }), A && A(w, b);
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
    function _() {
      return u() || l();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", u = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !_ && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return yt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return yt({ __proto__: null });
      } : function() {
        return yt({});
      },
      has: A ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: A ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, b = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Te(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Re(), I = typeof WeakMap == "function" ? WeakMap : ke(), W = s ? Symbol.for("@reflect-metadata:registry") : void 0, ot = Oe(), St = Pe(ot);
    function le(i, o, a, c) {
      if (m(a)) {
        if (!Nt(i))
          throw new TypeError();
        if (!jt(o))
          throw new TypeError();
        return ge(i, o);
      } else {
        if (!Nt(i))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(c) && !m(c) && !V(c))
          throw new TypeError();
        return V(c) && (c = void 0), a = N(a), $e(i, o, a, c);
      }
    }
    t("decorate", le);
    function ce(i, o) {
      function a(c, v) {
        if (!M(c))
          throw new TypeError();
        if (!m(v) && !Se(v))
          throw new TypeError();
        Ct(i, o, c, v);
      }
      return a;
    }
    t("metadata", ce);
    function he(i, o, a, c) {
      if (!M(a))
        throw new TypeError();
      return m(c) || (c = N(c)), Ct(i, o, a, c);
    }
    t("defineMetadata", he);
    function de(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = N(a)), Mt(i, o, a);
    }
    t("hasMetadata", de);
    function fe(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = N(a)), dt(i, o, a);
    }
    t("hasOwnMetadata", fe);
    function pe(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = N(a)), Ot(i, o, a);
    }
    t("getMetadata", pe);
    function ye(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = N(a)), Pt(i, o, a);
    }
    t("getOwnMetadata", ye);
    function ve(i, o) {
      if (!M(i))
        throw new TypeError();
      return m(o) || (o = N(o)), Tt(i, o);
    }
    t("getMetadataKeys", ve);
    function _e(i, o) {
      if (!M(i))
        throw new TypeError();
      return m(o) || (o = N(o)), Rt(i, o);
    }
    t("getOwnMetadataKeys", _e);
    function me(i, o, a) {
      if (!M(o))
        throw new TypeError();
      if (m(a) || (a = N(a)), !M(o))
        throw new TypeError();
      m(a) || (a = N(a));
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    t("deleteMetadata", me);
    function ge(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!m(v) && !V(v)) {
          if (!jt(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function $e(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], O = P(o, a, c);
        if (!m(O) && !V(O)) {
          if (!M(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Mt(i, o, a) {
      var c = dt(i, o, a);
      if (c)
        return !0;
      var v = pt(o);
      return V(v) ? !1 : Mt(i, v, a);
    }
    function dt(i, o, a) {
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : xt(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Ot(i, o, a) {
      var c = dt(i, o, a);
      if (c)
        return Pt(i, o, a);
      var v = pt(o);
      if (!V(v))
        return Ot(i, v, a);
    }
    function Pt(i, o, a) {
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ct(i, o, a, c) {
      var v = Z(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function Tt(i, o) {
      var a = Rt(i, o), c = pt(i);
      if (c === null)
        return a;
      var v = Tt(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new R(), O = [], g = 0, h = a; g < h.length; g++) {
        var d = h[g], f = P.has(d);
        f || (P.add(d), O.push(d));
      }
      for (var y = 0, $ = v; y < $.length; y++) {
        var d = $[y], f = P.has(d);
        f || (P.add(d), O.push(d));
      }
      return O;
    }
    function Rt(i, o) {
      var a = Z(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function kt(i) {
      if (i === null)
        return 1;
      switch (typeof i) {
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
          return i === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function m(i) {
      return i === void 0;
    }
    function V(i) {
      return i === null;
    }
    function we(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function be(i, o) {
      switch (kt(i)) {
        case 0:
          return i;
        case 1:
          return i;
        case 2:
          return i;
        case 3:
          return i;
        case 4:
          return i;
        case 5:
          return i;
      }
      var a = "string", c = It(i, u);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return Ae(i);
    }
    function Ae(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (at(v)) {
          var c = v.call(i);
          if (!M(c))
            return c;
        }
        var a = i.valueOf;
        if (at(a)) {
          var c = a.call(i);
          if (!M(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function xt(i) {
      return !!i;
    }
    function Ee(i) {
      return "" + i;
    }
    function N(i) {
      var o = be(i);
      return we(o) ? o : Ee(o);
    }
    function Nt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function at(i) {
      return typeof i == "function";
    }
    function jt(i) {
      return typeof i == "function";
    }
    function Se(i) {
      switch (kt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ft(i, o) {
      return i === o || i !== i && o !== o;
    }
    function It(i, o) {
      var a = i[o];
      if (a != null) {
        if (!at(a))
          throw new TypeError();
        return a;
      }
    }
    function Ut(i) {
      var o = It(i, l);
      if (!at(o))
        throw new TypeError();
      var a = o.call(i);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function Dt(i) {
      return i.value;
    }
    function Ht(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function zt(i) {
      var o = i.return;
      o && o.call(i);
    }
    function pt(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || o !== b)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Me() {
      var i;
      !m(W) && typeof e.Reflect < "u" && !(W in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Ce(e.Reflect));
      var o, a, c, v = new I(), P = {
        registerProvider: O,
        getProvider: h,
        setProvider: f
      };
      return P;
      function O(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case m(o):
            o = y;
            break;
          case o === y:
            break;
          case m(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            c === void 0 && (c = new R()), c.add(y);
            break;
        }
      }
      function g(y, $) {
        if (!m(o)) {
          if (o.isProviderFor(y, $))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(y, $))
              return o;
            if (!m(c))
              for (var E = Ut(c); ; ) {
                var S = Ht(E);
                if (!S)
                  return;
                var k = Dt(S);
                if (k.isProviderFor(y, $))
                  return zt(E), k;
              }
          }
        }
        if (!m(i) && i.isProviderFor(y, $))
          return i;
      }
      function h(y, $) {
        var E = v.get(y), S;
        return m(E) || (S = E.get($)), m(S) && (S = g(y, $), m(S) || (m(E) && (E = new T(), v.set(y, E)), E.set($, S))), S;
      }
      function d(y) {
        if (m(y))
          throw new TypeError();
        return o === y || a === y || !m(c) && c.has(y);
      }
      function f(y, $, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = h(y, $);
        if (S !== E) {
          if (!m(S))
            return !1;
          var k = v.get(y);
          m(k) && (k = new T(), v.set(y, k)), k.set($, E);
        }
        return !0;
      }
    }
    function Oe() {
      var i;
      return !m(W) && M(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[W]), m(i) && (i = Me()), !m(W) && M(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, W, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pe(i) {
      var o = new I(), a = {
        isProviderFor: function(d, f) {
          var y = o.get(d);
          return m(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: h
      };
      return ot.registerProvider(a), a;
      function c(d, f, y) {
        var $ = o.get(d), E = !1;
        if (m($)) {
          if (!y)
            return;
          $ = new T(), o.set(d, $), E = !0;
        }
        var S = $.get(f);
        if (m(S)) {
          if (!y)
            return;
          if (S = new T(), $.set(f, S), !i.setProvider(d, f, a))
            throw $.delete(f), E && o.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(d, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        return m($) ? !1 : xt($.has(d));
      }
      function P(d, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(d);
      }
      function O(d, f, y, $) {
        var E = c(
          y,
          $,
          /*Create*/
          !0
        );
        E.set(d, f);
      }
      function g(d, f) {
        var y = [], $ = c(
          d,
          f,
          /*Create*/
          !1
        );
        if (m($))
          return y;
        for (var E = $.keys(), S = Ut(E), k = 0; ; ) {
          var Lt = Ht(S);
          if (!Lt)
            return y.length = k, y;
          var xe = Dt(Lt);
          try {
            y[k] = xe;
          } catch (Ne) {
            try {
              zt(S);
            } finally {
              throw Ne;
            }
          }
          k++;
        }
      }
      function h(d, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(d))
          return !1;
        if ($.size === 0) {
          var E = o.get(f);
          m(E) || (E.delete(y), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Ce(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, O = new I(), g = {
        isProviderFor: function(h, d) {
          var f = O.get(h);
          return !m(f) && f.has(d) ? !0 : v(h, d).length ? (m(f) && (f = new R(), O.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return g;
    }
    function Z(i, o, a) {
      var c = ot.getProvider(i, o);
      if (!m(c))
        return c;
      if (a) {
        if (ot.setProvider(i, o, St))
          return St;
        throw new Error("Illegal state.");
      }
    }
    function Te() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function g(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[l] = function() {
            return this;
          }, g.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, g.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
          }, g;
        }()
      ), c = (
        /** @class */
        function() {
          function g() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(g.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), g.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, g.prototype.set = function(h, d) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, g.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, y = d + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, ft(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[l] = function() {
            return this.entries();
          }, g.prototype._find = function(h, d) {
            if (!ft(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ft(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function v(g, h) {
        return g;
      }
      function P(g, h) {
        return h;
      }
      function O(g, h) {
        return [g, h];
      }
    }
    function Re() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new T();
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
          }, o.prototype[l] = function() {
            return this.keys();
          }, o;
        }()
      );
      return i;
    }
    function ke() {
      var i = 16, o = w.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, h.prototype.set = function(d, f) {
            var y = v(
              d,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, h.prototype.delete = function(d) {
            var f = v(
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
          h = "@@WeakMap@@" + g();
        while (w.has(o, h));
        return o[h] = !0, h;
      }
      function v(h, d) {
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: w.create() });
        }
        return h[a];
      }
      function P(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function O(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : P(d, h), d;
        }
        return P(new Array(h), h);
      }
      function g() {
        var h = O(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var y = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), y < 16 && (d += "0"), d += y.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function yt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Vt || (Vt = {}));
function Ue(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function De(r) {
  return function(t) {
    if (Ue(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const n = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, t);
          } catch {
            try {
              customElements.define(n, class extends t {
              });
            } catch (u) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, u);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: e
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function He(r) {
  return De(r);
}
function ze(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Gt(this, "_stylesApplied", !1);
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
        var A;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && _) {
          const w = new CSSStyleSheet(), b = (A = u.sheet) == null ? void 0 : A.cssRules;
          b && (Array.from(b).forEach((T) => w.insertRule(T.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
        } else if (u) {
          const w = u.cloneNode(!0);
          p.appendChild(w);
        }
        l.forEach((w) => {
          const b = w.cloneNode(!0);
          p.appendChild(b);
        });
      }
    }
    return e;
  };
}
function Le(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ge(r) {
  return function(t, e) {
    try {
      Le(r);
      const n = Reflect.getMetadata("ZeroAttribute", t) || [];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function $t(r) {
  return Ge(r);
}
var K;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(K || (K = {}));
var tt;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(tt || (tt = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = globalThis, wt = ut.ShadowRoot && (ut.ShadyCSS === void 0 || ut.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, bt = Symbol(), Bt = /* @__PURE__ */ new WeakMap();
let ie = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== bt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
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
const We = (r) => new ie(typeof r == "string" ? r : r + "", void 0, bt), Ve = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[u + 1], r[0]);
  return new ie(e, r, bt);
}, Be = (r, t) => {
  if (wt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = ut.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, Ft = wt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return We(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Fe, defineProperty: qe, getOwnPropertyDescriptor: Ze, getOwnPropertyNames: Xe, getOwnPropertySymbols: Ye, getPrototypeOf: Je } = Object, D = globalThis, qt = D.trustedTypes, Qe = qt ? qt.emptyScript : "", vt = D.reactiveElementPolyfillSupport, Y = (r, t) => r, lt = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Qe : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, At = (r, t) => !Fe(r, t), Zt = { attribute: !0, type: String, converter: lt, reflect: !1, useDefault: !1, hasChanged: At };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let B = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Zt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && qe(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: u } = Ze(this.prototype, t) ?? { get() {
      return this[e];
    }, set(l) {
      this[e] = l;
    } };
    return { get: s, set(l) {
      const _ = s == null ? void 0 : s.call(this);
      u == null || u.call(this, l), this.requestUpdate(t, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const t = Je(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const e = this.properties, n = [...Xe(e), ...Ye(e)];
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
      for (const s of n) e.unshift(Ft(s));
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
  _$ET(t, e) {
    var u;
    const n = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, n);
    if (s !== void 0 && n.reflect === !0) {
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : lt).toAttribute(e, n.type);
      this._$Em = t, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var u, l;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((u = _.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? _.converter : lt;
      this._$Em = s;
      const A = p.fromAttribute(e, _.type);
      this[s] = A ?? ((l = this._$Ej) == null ? void 0 : l.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, u) {
    var l;
    if (t !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (u = this[t]), n ?? (n = _.getPropertyOptions(t)), !((n.hasChanged ?? At)(u, e) || n.useDefault && n.reflect && u === ((l = this._$Ej) == null ? void 0 : l.get(t)) && !this.hasAttribute(_._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: s, wrapped: u }, l) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, l ?? e ?? this[t]), u !== !0 || l !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [u, l] of s) {
        const { wrapped: _ } = l, p = this[u];
        _ !== !0 || this._$AL.has(u) || p === void 0 || this.C(u, void 0, l, p);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((s) => {
        var u;
        return (u = s.hostUpdate) == null ? void 0 : u.call(s);
      }), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
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
  _$EM() {
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[Y("elementProperties")] = /* @__PURE__ */ new Map(), B[Y("finalized")] = /* @__PURE__ */ new Map(), vt == null || vt({ ReactiveElement: B }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, Xt = (r) => r, ct = J.trustedTypes, Yt = ct ? ct.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, se = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, oe = "?" + U, Ke = `<${oe}>`, G = document, et = () => G.createComment(""), rt = (r) => r === null || typeof r != "object" && typeof r != "function", Et = Array.isArray, tr = (r) => Et(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jt = /-->/g, Qt = />/g, H = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Kt = /'/g, te = /"/g, ae = /^(?:script|style|textarea|title)$/i, er = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), rr = er(1), F = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), ee = /* @__PURE__ */ new WeakMap(), z = G.createTreeWalker(G, 129);
function ue(r, t) {
  if (!Et(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Yt !== void 0 ? Yt.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, u = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", l = X;
  for (let _ = 0; _ < e; _++) {
    const p = r[_];
    let A, w, b = -1, T = 0;
    for (; T < p.length && (l.lastIndex = T, w = l.exec(p), w !== null); ) T = l.lastIndex, l === X ? w[1] === "!--" ? l = Jt : w[1] !== void 0 ? l = Qt : w[2] !== void 0 ? (ae.test(w[2]) && (s = RegExp("</" + w[2], "g")), l = H) : w[3] !== void 0 && (l = H) : l === H ? w[0] === ">" ? (l = s ?? X, b = -1) : w[1] === void 0 ? b = -2 : (b = l.lastIndex - w[2].length, A = w[1], l = w[3] === void 0 ? H : w[3] === '"' ? te : Kt) : l === te || l === Kt ? l = H : l === Jt || l === Qt ? l = X : (l = H, s = void 0);
    const R = l === H && r[_ + 1].startsWith("/>") ? " " : "";
    u += l === X ? p + Ke : b >= 0 ? (n.push(A), p.slice(0, b) + se + p.slice(b) + U + R) : p + U + (b === -2 ? _ : R);
  }
  return [ue(r, u + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class nt {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let u = 0, l = 0;
    const _ = t.length - 1, p = this.parts, [A, w] = nr(t, e);
    if (this.el = nt.createElement(A, n), z.currentNode = this.el.content, e === 2 || e === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (s = z.nextNode()) !== null && p.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const b of s.getAttributeNames()) if (b.endsWith(se)) {
          const T = w[l++], R = s.getAttribute(b).split(U), I = /([.?@])?(.*)/.exec(T);
          p.push({ type: 1, index: u, name: I[2], strings: R, ctor: I[1] === "." ? sr : I[1] === "?" ? or : I[1] === "@" ? ar : ht }), s.removeAttribute(b);
        } else b.startsWith(U) && (p.push({ type: 6, index: u }), s.removeAttribute(b));
        if (ae.test(s.tagName)) {
          const b = s.textContent.split(U), T = b.length - 1;
          if (T > 0) {
            s.textContent = ct ? ct.emptyScript : "";
            for (let R = 0; R < T; R++) s.append(b[R], et()), z.nextNode(), p.push({ type: 2, index: ++u });
            s.append(b[T], et());
          }
        }
      } else if (s.nodeType === 8) if (s.data === oe) p.push({ type: 2, index: u });
      else {
        let b = -1;
        for (; (b = s.data.indexOf(U, b + 1)) !== -1; ) p.push({ type: 7, index: u }), b += U.length - 1;
      }
      u++;
    }
  }
  static createElement(t, e) {
    const n = G.createElement("template");
    return n.innerHTML = t, n;
  }
}
function q(r, t, e = r, n) {
  var l, _;
  if (t === F) return t;
  let s = n !== void 0 ? (l = e._$Co) == null ? void 0 : l[n] : e._$Cl;
  const u = rt(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== u && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), u === void 0 ? s = void 0 : (s = new u(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = q(r, s._$AS(r, t.values), s, n)), t;
}
class ir {
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? G).importNode(e, !0);
    z.currentNode = s;
    let u = z.nextNode(), l = 0, _ = 0, p = n[0];
    for (; p !== void 0; ) {
      if (l === p.index) {
        let A;
        p.type === 2 ? A = new it(u, u.nextSibling, this, t) : p.type === 1 ? A = new p.ctor(u, p.name, p.strings, this, t) : p.type === 6 && (A = new ur(u, this, t)), this._$AV.push(A), p = n[++_];
      }
      l !== (p == null ? void 0 : p.index) && (u = z.nextNode(), l++);
    }
    return z.currentNode = G, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class it {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = q(this, t, e), rt(t) ? t === C || t == null || t === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : t !== this._$AH && t !== F && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : tr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== C && rt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(G.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var u;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = nt.createElement(ue(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === s) this._$AH.p(e);
    else {
      const l = new ir(s, this), _ = l.u(this.options);
      l.p(e), this.T(_), this._$AH = l;
    }
  }
  _$AC(t) {
    let e = ee.get(t.strings);
    return e === void 0 && ee.set(t.strings, e = new nt(t)), e;
  }
  k(t) {
    Et(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const u of t) s === e.length ? e.push(n = new it(this.O(et()), this.O(et()), this, this.options)) : n = e[s], n._$AI(u), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Xt(t).nextSibling;
      Xt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class ht {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, u) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(t, e = this, n, s) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) t = q(this, t, e, 0), l = !rt(t) || t !== this._$AH && t !== F, l && (this._$AH = t);
    else {
      const _ = t;
      let p, A;
      for (t = u[0], p = 0; p < u.length - 1; p++) A = q(this, _[n + p], e, p), A === F && (A = this._$AH[p]), l || (l = !rt(A) || A !== this._$AH[p]), A === C ? t = C : t !== C && (t += (A ?? "") + u[p + 1]), this._$AH[p] = A;
    }
    l && !s && this.j(t);
  }
  j(t) {
    t === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sr extends ht {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === C ? void 0 : t;
  }
}
class or extends ht {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== C);
  }
}
class ar extends ht {
  constructor(t, e, n, s, u) {
    super(t, e, n, s, u), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = q(this, t, e, 0) ?? C) === F) return;
    const n = this._$AH, s = t === C && n !== C || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, u = t !== C && (n === C || s);
    s && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ur {
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
const mt = J.litHtmlPolyfillSupport;
mt == null || mt(nt, it), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.3.3");
const lr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const u = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new it(t.insertBefore(et(), u), u, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis;
class Q extends B {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = lr(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return F;
  }
}
var ne;
Q._$litElement$ = !0, Q.finalized = !0, (ne = L.litElementHydrateSupport) == null || ne.call(L, { LitElement: Q });
const gt = L.litElementPolyfillSupport;
gt == null || gt({ LitElement: Q });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: lt, reflect: !1, hasChanged: At }, hr = (r = cr, t, e) => {
  const { kind: n, metadata: s } = e;
  let u = globalThis.litPropertyMetadata.get(s);
  if (u === void 0 && globalThis.litPropertyMetadata.set(s, u = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), u.set(e.name, r), n === "accessor") {
    const { name: l } = e;
    return { set(_) {
      const p = t.get.call(this);
      t.set.call(this, _), this.requestUpdate(l, p, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(l, void 0, r, _), _;
    } };
  }
  if (n === "setter") {
    const { name: l } = e;
    return function(_) {
      const p = this[l];
      t.call(this, _), this.requestUpdate(l, p, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function st(r) {
  return (t, e) => typeof e == "object" ? hr(r, t, e) : ((n, s, u) => {
    const l = s.hasOwnProperty(u);
    return s.constructor.createProperty(u, n), l ? Object.getOwnPropertyDescriptor(s, u) : void 0;
  })(r, t, e);
}
var dr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, j = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(t, e) : t, u = r.length - 1, l; u >= 0; u--)
    (l = r[u]) && (s = (n ? l(t, e, s) : l(s)) || s);
  return n && s && dr(t, e, s), s;
};
const re = {
  kind: "generic",
  templateHtml: [
    "<div style='border-radius:12px;overflow:hidden;border:1px solid rgba(148,163,184,0.15);background:rgba(241,245,249,0.5);'>",
    "<div style='aspect-ratio:16/9;background:#e2e8f0;display:flex;align-items:center;justify-content:center;'>",
    "<span style='font-size:2rem;'>🖼️</span>",
    "</div>",
    "<div style='padding:6px 10px;display:flex;justify-content:space-between;align-items:center;'>",
    "<span style='font-size:0.72rem;color:var(--uiv-text-muted,#94a3b8);'>{{display:alt}}</span>",
    "<span style='font-size:0.65rem;padding:2px 6px;border-radius:999px;background:rgba(219,234,254,0.7);color:#1d4ed8;font-weight:700;'>{{display:fit}}</span>",
    "</div>",
    "</div>"
  ].join(""),
  badges: ["Media", "Image"]
};
let x = class extends Q {
  constructor() {
    super(...arguments), this.src = "https://picsum.photos/1200/800", this.alt = "Image", this.fit = "cover", this.aspectRatio = "16 / 9", this.radius = 18;
  }
  static getStudioTemplate(r) {
    var u, l, _, p, A, w;
    if (!r) return re;
    const t = pr(r.studio.display.src || "https://picsum.photos/1200/800"), e = (((u = r.props) == null ? void 0 : u.fit) ?? ((l = r.studio.props) == null ? void 0 : l.fit)) || "cover", n = (((_ = r.props) == null ? void 0 : _.aspectRatio) ?? ((p = r.studio.props) == null ? void 0 : p.aspectRatio)) || "16 / 9", s = (((A = r.props) == null ? void 0 : A.radius) ?? ((w = r.studio.props) == null ? void 0 : w.radius)) || 18;
    return {
      ...re,
      templateHtml: [
        `<div style='width:100%;overflow:hidden;border-radius:${s}px;aspect-ratio:${n};background:rgba(19, 34, 56, 0.05);'>`,
        `<img src='${t}' style='width:100%;height:100%;display:block;object-fit:${e};' />`,
        "</div>"
      ].join("")
    };
  }
  get srcConfig() {
    return this.src;
  }
  set srcConfig(r) {
    this.src = r;
  }
  get altConfig() {
    return this.alt;
  }
  set altConfig(r) {
    this.alt = r;
  }
  get fitConfig() {
    return this.fit;
  }
  set fitConfig(r) {
    this.fit = r || "cover";
  }
  render() {
    const r = [
      `--zero-image-fit:${this.fit || "cover"}`,
      `--zero-image-ratio:${this.aspectRatio || "auto"}`,
      `--zero-image-radius:${Math.max(0, Number(this.radius) || 0)}px`
    ].join(";"), t = this.src || "https://picsum.photos/1200/800";
    return rr`
      <div class="frame" style=${r}>
        <img src=${t} alt=${this.alt} loading="lazy" />
      </div>
    `;
  }
};
x.styles = Ve`
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
j([
  st({ type: String })
], x.prototype, "src", 2);
j([
  st({ type: String })
], x.prototype, "alt", 2);
j([
  st({ type: String })
], x.prototype, "fit", 2);
j([
  st({ type: String, attribute: "aspect-ratio" })
], x.prototype, "aspectRatio", 2);
j([
  st({ type: Number })
], x.prototype, "radius", 2);
j([
  $t({
    attributeType: tt.PROPERTY,
    uiComponentType: K.TEXT_INPUT,
    displayLabel: "Source",
    fieldMappings: "src"
  })
], x.prototype, "srcConfig", 1);
j([
  $t({
    attributeType: tt.PROPERTY,
    uiComponentType: K.TEXT_INPUT,
    displayLabel: "Alt",
    fieldMappings: "alt"
  })
], x.prototype, "altConfig", 1);
j([
  $t({
    attributeType: tt.PROPERTY,
    uiComponentType: K.DROPDOWN,
    displayLabel: "Fit",
    fieldMappings: "fit",
    optionItems: [
      { label: "Cover", value: "cover" },
      { label: "Contain", value: "contain" },
      { label: "Fill", value: "fill" }
    ]
  })
], x.prototype, "fitConfig", 1);
x = j([
  He({
    name: "zero-image",
    version: "1.0.0",
    title: "Image",
    elementSelector: "zero-image",
    group: "Media",
    iconName: "image-icon.png"
  }),
  ze()
], x);
function pr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  x as ZeroImage,
  re as studioTemplate
};
