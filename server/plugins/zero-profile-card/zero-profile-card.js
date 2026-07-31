var Le = Object.defineProperty;
var Ne = (r, t, e) => t in r ? Le(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var ee = (r, t, e) => Ne(r, typeof t != "symbol" ? t + "" : t, e);
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ne;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof re == "object" ? re : typeof self == "object" ? self : typeof this == "object" ? this : b(), n = a(r);
    typeof e.Reflect < "u" && (n = a(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function a(f, E) {
      return function(w, _) {
        Object.defineProperty(f, w, { configurable: !0, writable: !0, value: _ }), E && E(w, _);
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
    function b() {
      return l() || u();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", l = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, E = !b && !f, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return Rt(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return Rt({ __proto__: null });
      } : function() {
        return Rt({});
      },
      has: E ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: E ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, _ = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Oe(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : xe(), U = typeof WeakMap == "function" ? WeakMap : Re(), D = a ? Symbol.for("@reflect-metadata:registry") : void 0, W = Me(), et = Pe(W);
    function pt(i, s, o, d) {
      if (m(o)) {
        if (!Ft(i))
          throw new TypeError();
        if (!Yt(s))
          throw new TypeError();
        return Et(i, s);
      } else {
        if (!Ft(i))
          throw new TypeError();
        if (!P(s))
          throw new TypeError();
        if (!P(d) && !m(d) && !J(d))
          throw new TypeError();
        return J(d) && (d = void 0), o = I(o), At(i, s, o, d);
      }
    }
    t("decorate", pt);
    function ft(i, s) {
      function o(d, y) {
        if (!P(d))
          throw new TypeError();
        if (!m(y) && !Se(y))
          throw new TypeError();
        zt(i, s, d, y);
      }
      return o;
    }
    t("metadata", ft);
    function vt(i, s, o, d) {
      if (!P(o))
        throw new TypeError();
      return m(d) || (d = I(d)), zt(i, s, o, d);
    }
    t("defineMetadata", vt);
    function yt(i, s, o) {
      if (!P(s))
        throw new TypeError();
      return m(o) || (o = I(o)), rt(i, s, o);
    }
    t("hasMetadata", yt);
    function bt(i, s, o) {
      if (!P(s))
        throw new TypeError();
      return m(o) || (o = I(o)), X(i, s, o);
    }
    t("hasOwnMetadata", bt);
    function mt(i, s, o) {
      if (!P(s))
        throw new TypeError();
      return m(o) || (o = I(o)), nt(i, s, o);
    }
    t("getMetadata", mt);
    function _t(i, s, o) {
      if (!P(s))
        throw new TypeError();
      return m(o) || (o = I(o)), Ht(i, s, o);
    }
    t("getOwnMetadata", _t);
    function gt(i, s) {
      if (!P(i))
        throw new TypeError();
      return m(s) || (s = I(s)), Bt(i, s);
    }
    t("getMetadataKeys", gt);
    function $t(i, s) {
      if (!P(i))
        throw new TypeError();
      return m(s) || (s = I(s)), Gt(i, s);
    }
    t("getOwnMetadataKeys", $t);
    function wt(i, s, o) {
      if (!P(s))
        throw new TypeError();
      if (m(o) || (o = I(o)), !P(s))
        throw new TypeError();
      m(o) || (o = I(o));
      var d = it(
        s,
        o,
        /*Create*/
        !1
      );
      return m(d) ? !1 : d.OrdinaryDeleteMetadata(i, s, o);
    }
    t("deleteMetadata", wt);
    function Et(i, s) {
      for (var o = i.length - 1; o >= 0; --o) {
        var d = i[o], y = d(s);
        if (!m(y) && !J(y)) {
          if (!Yt(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function At(i, s, o, d) {
      for (var y = i.length - 1; y >= 0; --y) {
        var O = i[y], T = O(s, o, d);
        if (!m(T) && !J(T)) {
          if (!P(T))
            throw new TypeError();
          d = T;
        }
      }
      return d;
    }
    function rt(i, s, o) {
      var d = X(i, s, o);
      if (d)
        return !0;
      var y = xt(s);
      return J(y) ? !1 : rt(i, y, o);
    }
    function X(i, s, o) {
      var d = it(
        s,
        o,
        /*Create*/
        !1
      );
      return m(d) ? !1 : qt(d.OrdinaryHasOwnMetadata(i, s, o));
    }
    function nt(i, s, o) {
      var d = X(i, s, o);
      if (d)
        return Ht(i, s, o);
      var y = xt(s);
      if (!J(y))
        return nt(i, y, o);
    }
    function Ht(i, s, o) {
      var d = it(
        s,
        o,
        /*Create*/
        !1
      );
      if (!m(d))
        return d.OrdinaryGetOwnMetadata(i, s, o);
    }
    function zt(i, s, o, d) {
      var y = it(
        o,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, o, d);
    }
    function Bt(i, s) {
      var o = Gt(i, s), d = xt(i);
      if (d === null)
        return o;
      var y = Bt(d, s);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var O = new k(), T = [], g = 0, h = o; g < h.length; g++) {
        var c = h[g], p = O.has(c);
        p || (O.add(c), T.push(c));
      }
      for (var v = 0, $ = y; v < $.length; v++) {
        var c = $[v], p = O.has(c);
        p || (O.add(c), T.push(c));
      }
      return T;
    }
    function Gt(i, s) {
      var o = it(
        i,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Wt(i) {
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
    function J(i) {
      return i === null;
    }
    function $e(i) {
      return typeof i == "symbol";
    }
    function P(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function we(i, s) {
      switch (Wt(i)) {
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
      var o = "string", d = Zt(i, l);
      if (d !== void 0) {
        var y = d.call(i, o);
        if (P(y))
          throw new TypeError();
        return y;
      }
      return Ee(i);
    }
    function Ee(i, s) {
      var o, d;
      {
        var y = i.toString;
        if (St(y)) {
          var d = y.call(i);
          if (!P(d))
            return d;
        }
        var o = i.valueOf;
        if (St(o)) {
          var d = o.call(i);
          if (!P(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function qt(i) {
      return !!i;
    }
    function Ae(i) {
      return "" + i;
    }
    function I(i) {
      var s = we(i);
      return $e(s) ? s : Ae(s);
    }
    function Ft(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function St(i) {
      return typeof i == "function";
    }
    function Yt(i) {
      return typeof i == "function";
    }
    function Se(i) {
      switch (Wt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ot(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Zt(i, s) {
      var o = i[s];
      if (o != null) {
        if (!St(o))
          throw new TypeError();
        return o;
      }
    }
    function Xt(i) {
      var s = Zt(i, u);
      if (!St(s))
        throw new TypeError();
      var o = s.call(i);
      if (!P(o))
        throw new TypeError();
      return o;
    }
    function Jt(i) {
      return i.value;
    }
    function Qt(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Kt(i) {
      var s = i.return;
      s && s.call(i);
    }
    function xt(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || s !== _)
        return s;
      var o = i.prototype, d = o && Object.getPrototypeOf(o);
      if (d == null || d === Object.prototype)
        return s;
      var y = d.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function Ce() {
      var i;
      !m(D) && typeof e.Reflect < "u" && !(D in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Te(e.Reflect));
      var s, o, d, y = new U(), O = {
        registerProvider: T,
        getProvider: h,
        setProvider: p
      };
      return O;
      function T(v) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case m(s):
            s = v;
            break;
          case s === v:
            break;
          case m(o):
            o = v;
            break;
          case o === v:
            break;
          default:
            d === void 0 && (d = new k()), d.add(v);
            break;
        }
      }
      function g(v, $) {
        if (!m(s)) {
          if (s.isProviderFor(v, $))
            return s;
          if (!m(o)) {
            if (o.isProviderFor(v, $))
              return s;
            if (!m(d))
              for (var A = Xt(d); ; ) {
                var S = Qt(A);
                if (!S)
                  return;
                var L = Jt(S);
                if (L.isProviderFor(v, $))
                  return Kt(A), L;
              }
          }
        }
        if (!m(i) && i.isProviderFor(v, $))
          return i;
      }
      function h(v, $) {
        var A = y.get(v), S;
        return m(A) || (S = A.get($)), m(S) && (S = g(v, $), m(S) || (m(A) && (A = new C(), y.set(v, A)), A.set($, S))), S;
      }
      function c(v) {
        if (m(v))
          throw new TypeError();
        return s === v || o === v || !m(d) && d.has(v);
      }
      function p(v, $, A) {
        if (!c(A))
          throw new Error("Metadata provider not registered.");
        var S = h(v, $);
        if (S !== A) {
          if (!m(S))
            return !1;
          var L = y.get(v);
          m(L) && (L = new C(), y.set(v, L)), L.set($, A);
        }
        return !0;
      }
    }
    function Me() {
      var i;
      return !m(D) && P(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[D]), m(i) && (i = Ce()), !m(D) && P(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, D, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pe(i) {
      var s = new U(), o = {
        isProviderFor: function(c, p) {
          var v = s.get(c);
          return m(v) ? !1 : v.has(p);
        },
        OrdinaryDefineOwnMetadata: T,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: h
      };
      return W.registerProvider(o), o;
      function d(c, p, v) {
        var $ = s.get(c), A = !1;
        if (m($)) {
          if (!v)
            return;
          $ = new C(), s.set(c, $), A = !0;
        }
        var S = $.get(p);
        if (m(S)) {
          if (!v)
            return;
          if (S = new C(), $.set(p, S), !i.setProvider(c, p, o))
            throw $.delete(p), A && s.delete(c), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(c, p, v) {
        var $ = d(
          p,
          v,
          /*Create*/
          !1
        );
        return m($) ? !1 : qt($.has(c));
      }
      function O(c, p, v) {
        var $ = d(
          p,
          v,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(c);
      }
      function T(c, p, v, $) {
        var A = d(
          v,
          $,
          /*Create*/
          !0
        );
        A.set(c, p);
      }
      function g(c, p) {
        var v = [], $ = d(
          c,
          p,
          /*Create*/
          !1
        );
        if (m($))
          return v;
        for (var A = $.keys(), S = Xt(A), L = 0; ; ) {
          var te = Qt(S);
          if (!te)
            return v.length = L, v;
          var ke = Jt(te);
          try {
            v[L] = ke;
          } catch (Ue) {
            try {
              Kt(S);
            } finally {
              throw Ue;
            }
          }
          L++;
        }
      }
      function h(c, p, v) {
        var $ = d(
          p,
          v,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(c))
          return !1;
        if ($.size === 0) {
          var A = s.get(p);
          m(A) || (A.delete(v), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function Te(i) {
      var s = i.defineMetadata, o = i.hasOwnMetadata, d = i.getOwnMetadata, y = i.getOwnMetadataKeys, O = i.deleteMetadata, T = new U(), g = {
        isProviderFor: function(h, c) {
          var p = T.get(h);
          return !m(p) && p.has(c) ? !0 : y(h, c).length ? (m(p) && (p = new k(), T.set(h, p)), p.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: O
      };
      return g;
    }
    function it(i, s, o) {
      var d = W.getProvider(i, s);
      if (!m(d))
        return d;
      if (o) {
        if (W.setProvider(i, s, et))
          return et;
        throw new Error("Illegal state.");
      }
    }
    function Oe() {
      var i = {}, s = [], o = (
        /** @class */
        function() {
          function g(h, c, p) {
            this._index = 0, this._keys = h, this._values = c, this._selector = p;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var c = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), h;
          }, g.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: h, done: !0 };
          }, g;
        }()
      ), d = (
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
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, g.prototype.set = function(h, c) {
            var p = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[p] = c, this;
          }, g.prototype.delete = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var p = this._keys.length, v = c + 1; v < p; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, Ot(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new o(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new o(this._keys, this._values, O);
          }, g.prototype.entries = function() {
            return new o(this._keys, this._values, T);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(h, c) {
            if (!Ot(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (Ot(this._keys[p], h)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return d;
      function y(g, h) {
        return g;
      }
      function O(g, h) {
        return h;
      }
      function T(g, h) {
        return [g, h];
      }
    }
    function xe() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new C();
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
      return i;
    }
    function Re() {
      var i = 16, s = w.create(), o = d();
      return (
        /** @class */
        function() {
          function h() {
            this._key = d();
          }
          return h.prototype.has = function(c) {
            var p = y(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? w.has(p, this._key) : !1;
          }, h.prototype.get = function(c) {
            var p = y(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? w.get(p, this._key) : void 0;
          }, h.prototype.set = function(c, p) {
            var v = y(
              c,
              /*create*/
              !0
            );
            return v[this._key] = p, this;
          }, h.prototype.delete = function(c) {
            var p = y(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = d();
          }, h;
        }()
      );
      function d() {
        var h;
        do
          h = "@@WeakMap@@" + g();
        while (w.has(s, h));
        return s[h] = !0, h;
      }
      function y(h, c) {
        if (!n.call(h, o)) {
          if (!c)
            return;
          Object.defineProperty(h, o, { value: w.create() });
        }
        return h[o];
      }
      function O(h, c) {
        for (var p = 0; p < c; ++p)
          h[p] = Math.random() * 255 | 0;
        return h;
      }
      function T(h) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : O(c, h), c;
        }
        return O(new Array(h), h);
      }
      function g() {
        var h = T(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var c = "", p = 0; p < i; ++p) {
          var v = h[p];
          (p === 4 || p === 6 || p === 8) && (c += "-"), v < 16 && (c += "0"), c += v.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function Rt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(ne || (ne = {}));
function Ie(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ve(r) {
  return function(t) {
    if (Ie(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName,
        layoutKind: r.layoutKind,
        environment: r.environment
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
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, l);
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
function De(r) {
  return Ve(r);
}
function je(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        ee(this, "_stylesApplied", !1);
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
        var E;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && b) {
          const w = new CSSStyleSheet(), _ = (E = l.sheet) == null ? void 0 : E.cssRules;
          _ && (Array.from(_).forEach((C) => w.insertRule(C.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          f.appendChild(w);
        }
        u.forEach((w) => {
          const _ = w.cloneNode(!0);
          f.appendChild(_);
        });
      }
    }
    return e;
  };
}
function He(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function ze(r) {
  return function(t, e) {
    try {
      He(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let a = !0;
      if (typeof e == "string") {
        try {
          a = typeof t[e] != "function";
        } catch {
          a = !0;
        }
        a && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function j(r) {
  return ze(r);
}
var V;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(V || (V = {}));
var N;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(N || (N = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ct = globalThis, It = Ct.ShadowRoot && (Ct.ShadyCSS === void 0 || Ct.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Vt = Symbol(), ie = /* @__PURE__ */ new WeakMap();
let ye = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== Vt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (It && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = ie.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && ie.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Be = (r) => new ye(typeof r == "string" ? r : r + "", void 0, Vt), Ge = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, a, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + r[l + 1], r[0]);
  return new ye(e, r, Vt);
}, We = (r, t) => {
  if (It) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), a = Ct.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = e.cssText, r.appendChild(n);
  }
}, ae = It ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Be(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qe, defineProperty: Fe, getOwnPropertyDescriptor: Ye, getOwnPropertyNames: Ze, getOwnPropertySymbols: Xe, getPrototypeOf: Je } = Object, B = globalThis, se = B.trustedTypes, Qe = se ? se.emptyScript : "", kt = B.reactiveElementPolyfillSupport, st = (r, t) => r, Mt = { toAttribute(r, t) {
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
} }, Dt = (r, t) => !qe(r, t), oe = { attribute: !0, type: String, converter: Mt, reflect: !1, useDefault: !1, hasChanged: Dt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Q = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = oe) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), a = this.getPropertyDescriptor(t, n, e);
      a !== void 0 && Fe(this.prototype, t, a);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: a, set: l } = Ye(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: a, set(u) {
      const b = a == null ? void 0 : a.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, b, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? oe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(st("elementProperties"))) return;
    const t = Je(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(st("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(st("properties"))) {
      const e = this.properties, n = [...Ze(e), ...Xe(e)];
      for (const a of n) this.createProperty(a, e[a]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, a] of e) this.elementProperties.set(n, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const a = this._$Eu(e, n);
      a !== void 0 && this._$Eh.set(a, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const a of n) e.unshift(ae(a));
    } else t !== void 0 && e.push(ae(t));
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
  _$ET(t, e) {
    var l;
    const n = this.constructor.elementProperties.get(t), a = this.constructor._$Eu(t, n);
    if (a !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : Mt).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(a) : this.setAttribute(a, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, a = n._$Eh.get(t);
    if (a !== void 0 && this._$Em !== a) {
      const b = n.getPropertyOptions(a), f = typeof b.converter == "function" ? { fromAttribute: b.converter } : ((l = b.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? b.converter : Mt;
      this._$Em = a;
      const E = f.fromAttribute(e, b.type);
      this[a] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(a)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, a = !1, l) {
    var u;
    if (t !== void 0) {
      const b = this.constructor;
      if (a === !1 && (l = this[t]), n ?? (n = b.getPropertyOptions(t)), !((n.hasChanged ?? Dt)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(b._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: a, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), a === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [l, u] of a) {
        const { wrapped: b } = u, f = this[l];
        b !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, u, f);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((a) => {
        var l;
        return (l = a.hostUpdate) == null ? void 0 : l.call(a);
      }), this.update(e)) : this._$EM();
    } catch (a) {
      throw t = !1, this._$EM(), a;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var a;
      return (a = n.hostUpdated) == null ? void 0 : a.call(n);
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
Q.elementStyles = [], Q.shadowRootOptions = { mode: "open" }, Q[st("elementProperties")] = /* @__PURE__ */ new Map(), Q[st("finalized")] = /* @__PURE__ */ new Map(), kt == null || kt({ ReactiveElement: Q }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot = globalThis, le = (r) => r, Pt = ot.trustedTypes, ue = Pt ? Pt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, be = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, me = "?" + z, Ke = `<${me}>`, Z = document, ut = () => Z.createComment(""), dt = (r) => r === null || typeof r != "object" && typeof r != "function", jt = Array.isArray, tr = (r) => jt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Ut = `[ 	
\f\r]`, at = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, de = /-->/g, he = />/g, q = RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ce = /'/g, pe = /"/g, _e = /^(?:script|style|textarea|title)$/i, er = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), rr = er(1), K = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), fe = /* @__PURE__ */ new WeakMap(), F = Z.createTreeWalker(Z, 129);
function ge(r, t) {
  if (!jt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ue !== void 0 ? ue.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, n = [];
  let a, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = at;
  for (let b = 0; b < e; b++) {
    const f = r[b];
    let E, w, _ = -1, C = 0;
    for (; C < f.length && (u.lastIndex = C, w = u.exec(f), w !== null); ) C = u.lastIndex, u === at ? w[1] === "!--" ? u = de : w[1] !== void 0 ? u = he : w[2] !== void 0 ? (_e.test(w[2]) && (a = RegExp("</" + w[2], "g")), u = q) : w[3] !== void 0 && (u = q) : u === q ? w[0] === ">" ? (u = a ?? at, _ = -1) : w[1] === void 0 ? _ = -2 : (_ = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? q : w[3] === '"' ? pe : ce) : u === pe || u === ce ? u = q : u === de || u === he ? u = at : (u = q, a = void 0);
    const k = u === q && r[b + 1].startsWith("/>") ? " " : "";
    l += u === at ? f + Ke : _ >= 0 ? (n.push(E), f.slice(0, _) + be + f.slice(_) + z + k) : f + z + (_ === -2 ? b : k);
  }
  return [ge(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class ht {
  constructor({ strings: t, _$litType$: e }, n) {
    let a;
    this.parts = [];
    let l = 0, u = 0;
    const b = t.length - 1, f = this.parts, [E, w] = nr(t, e);
    if (this.el = ht.createElement(E, n), F.currentNode = this.el.content, e === 2 || e === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (a = F.nextNode()) !== null && f.length < b; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const _ of a.getAttributeNames()) if (_.endsWith(be)) {
          const C = w[u++], k = a.getAttribute(_).split(z), U = /([.?@])?(.*)/.exec(C);
          f.push({ type: 1, index: l, name: U[2], strings: k, ctor: U[1] === "." ? ar : U[1] === "?" ? sr : U[1] === "@" ? or : Tt }), a.removeAttribute(_);
        } else _.startsWith(z) && (f.push({ type: 6, index: l }), a.removeAttribute(_));
        if (_e.test(a.tagName)) {
          const _ = a.textContent.split(z), C = _.length - 1;
          if (C > 0) {
            a.textContent = Pt ? Pt.emptyScript : "";
            for (let k = 0; k < C; k++) a.append(_[k], ut()), F.nextNode(), f.push({ type: 2, index: ++l });
            a.append(_[C], ut());
          }
        }
      } else if (a.nodeType === 8) if (a.data === me) f.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = a.data.indexOf(z, _ + 1)) !== -1; ) f.push({ type: 7, index: l }), _ += z.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = Z.createElement("template");
    return n.innerHTML = t, n;
  }
}
function tt(r, t, e = r, n) {
  var u, b;
  if (t === K) return t;
  let a = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = dt(t) ? void 0 : t._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((b = a == null ? void 0 : a._$AO) == null || b.call(a, !1), l === void 0 ? a = void 0 : (a = new l(r), a._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = a : e._$Cl = a), a !== void 0 && (t = tt(r, a._$AS(r, t.values), a, n)), t;
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
    const { el: { content: e }, parts: n } = this._$AD, a = ((t == null ? void 0 : t.creationScope) ?? Z).importNode(e, !0);
    F.currentNode = a;
    let l = F.nextNode(), u = 0, b = 0, f = n[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let E;
        f.type === 2 ? E = new ct(l, l.nextSibling, this, t) : f.type === 1 ? E = new f.ctor(l, f.name, f.strings, this, t) : f.type === 6 && (E = new lr(l, this, t)), this._$AV.push(E), f = n[++b];
      }
      u !== (f == null ? void 0 : f.index) && (l = F.nextNode(), u++);
    }
    return F.currentNode = Z, a;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class ct {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, a) {
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = a, this._$Cv = (a == null ? void 0 : a.isConnected) ?? !0;
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
    t = tt(this, t, e), dt(t) ? t === x || t == null || t === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : t !== this._$AH && t !== K && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : tr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== x && dt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Z.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, a = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = ht.createElement(ge(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === a) this._$AH.p(e);
    else {
      const u = new ir(a, this), b = u.u(this.options);
      u.p(e), this.T(b), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = fe.get(t.strings);
    return e === void 0 && fe.set(t.strings, e = new ht(t)), e;
  }
  k(t) {
    jt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, a = 0;
    for (const l of t) a === e.length ? e.push(n = new ct(this.O(ut()), this.O(ut()), this, this.options)) : n = e[a], n._$AI(l), a++;
    a < e.length && (this._$AR(n && n._$AB.nextSibling, a), e.length = a);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const a = le(t).nextSibling;
      le(t).remove(), t = a;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class Tt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, a, l) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = t, this.name = e, this._$AM = a, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = x;
  }
  _$AI(t, e = this, n, a) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = tt(this, t, e, 0), u = !dt(t) || t !== this._$AH && t !== K, u && (this._$AH = t);
    else {
      const b = t;
      let f, E;
      for (t = l[0], f = 0; f < l.length - 1; f++) E = tt(this, b[n + f], e, f), E === K && (E = this._$AH[f]), u || (u = !dt(E) || E !== this._$AH[f]), E === x ? t = x : t !== x && (t += (E ?? "") + l[f + 1]), this._$AH[f] = E;
    }
    u && !a && this.j(t);
  }
  j(t) {
    t === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ar extends Tt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === x ? void 0 : t;
  }
}
class sr extends Tt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== x);
  }
}
class or extends Tt {
  constructor(t, e, n, a, l) {
    super(t, e, n, a, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = tt(this, t, e, 0) ?? x) === K) return;
    const n = this._$AH, a = t === x && n !== x || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== x && (n === x || a);
    a && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class lr {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    tt(this, t);
  }
}
const Lt = ot.litHtmlPolyfillSupport;
Lt == null || Lt(ht, ct), (ot.litHtmlVersions ?? (ot.litHtmlVersions = [])).push("3.3.3");
const ur = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let a = n._$litPart$;
  if (a === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = a = new ct(t.insertBefore(ut(), l), l, void 0, e ?? {});
  }
  return a._$AI(r), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis;
class lt extends Q {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ur(e, this.renderRoot, this.renderOptions);
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
    return K;
  }
}
var ve;
lt._$litElement$ = !0, lt.finalized = !0, (ve = Y.litElementHydrateSupport) == null || ve.call(Y, { LitElement: lt });
const Nt = Y.litElementPolyfillSupport;
Nt == null || Nt({ LitElement: lt });
(Y.litElementVersions ?? (Y.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: Mt, reflect: !1, hasChanged: Dt }, hr = (r = dr, t, e) => {
  const { kind: n, metadata: a } = e;
  let l = globalThis.litPropertyMetadata.get(a);
  if (l === void 0 && globalThis.litPropertyMetadata.set(a, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(b) {
      const f = t.get.call(this);
      t.set.call(this, b), this.requestUpdate(u, f, r, !0, b);
    }, init(b) {
      return b !== void 0 && this.C(u, void 0, r, b), b;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(b) {
      const f = this[u];
      t.call(this, b), this.requestUpdate(u, f, r, !0, b);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function G(r) {
  return (t, e) => typeof e == "object" ? hr(r, t, e) : ((n, a, l) => {
    const u = a.hasOwnProperty(l);
    return a.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(a, l) : void 0;
  })(r, t, e);
}
var cr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, R = (r, t, e, n) => {
  for (var a = n > 1 ? void 0 : n ? pr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (a = (n ? u(t, e, a) : u(a)) || a);
  return n && a && cr(t, e, a), a;
};
function H(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let M = class extends lt {
  constructor() {
    super(...arguments), this.name = "Diane Cooper", this.subtitle = "diane.cooper@example.com", this.avatarUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150", this.stat1Value = 15, this.stat1Label = "Past", this.stat2Value = 2, this.stat2Label = "Upcoming", this.buttonText = "Send Message";
  }
  static getStudioTemplate(r) {
    var E, w, _, C, k, U, D, W, et, pt, ft, vt, yt, bt, mt, _t, gt, $t, wt, Et, At, rt, X, nt;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-profile-card-1.0.0></zero-profile-card-1.0.0>"
      };
    const t = H(((E = r == null ? void 0 : r.props) == null ? void 0 : E.name) ?? ((_ = (w = r == null ? void 0 : r.studio) == null ? void 0 : w.props) == null ? void 0 : _.name) ?? "Diane Cooper"), e = H(((C = r == null ? void 0 : r.props) == null ? void 0 : C.subtitle) ?? ((U = (k = r == null ? void 0 : r.studio) == null ? void 0 : k.props) == null ? void 0 : U.subtitle) ?? "diane.cooper@example.com"), n = H(((D = r == null ? void 0 : r.props) == null ? void 0 : D.avatarUrl) ?? ((et = (W = r == null ? void 0 : r.studio) == null ? void 0 : W.props) == null ? void 0 : et.avatarUrl) ?? "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=150"), a = H(((pt = r == null ? void 0 : r.props) == null ? void 0 : pt.stat1Value) ?? ((vt = (ft = r == null ? void 0 : r.studio) == null ? void 0 : ft.props) == null ? void 0 : vt.stat1Value) ?? "15"), l = H(((yt = r == null ? void 0 : r.props) == null ? void 0 : yt.stat1Label) ?? ((mt = (bt = r == null ? void 0 : r.studio) == null ? void 0 : bt.props) == null ? void 0 : mt.stat1Label) ?? "Past"), u = H(((_t = r == null ? void 0 : r.props) == null ? void 0 : _t.stat2Value) ?? (($t = (gt = r == null ? void 0 : r.studio) == null ? void 0 : gt.props) == null ? void 0 : $t.stat2Value) ?? "2"), b = H(((wt = r == null ? void 0 : r.props) == null ? void 0 : wt.stat2Label) ?? ((At = (Et = r == null ? void 0 : r.studio) == null ? void 0 : Et.props) == null ? void 0 : At.stat2Label) ?? "Upcoming"), f = H(((rt = r == null ? void 0 : r.props) == null ? void 0 : rt.buttonText) ?? ((nt = (X = r == null ? void 0 : r.studio) == null ? void 0 : X.props) == null ? void 0 : nt.buttonText) ?? "Send Message");
    return {
      kind: "generic",
      templateHtml: `
        <zero-profile-card-1.0.0
          name="${t}"
          subtitle="${e}"
          avatar-url="${n}"
          stat1-value="${a}"
          stat1-label="${l}"
          stat2-value="${u}"
          stat2-label="${b}"
          button-text="${f}"
        ></zero-profile-card-1.0.0>
      `
    };
  }
  get nameConfig() {
    return this.name;
  }
  set nameConfig(r) {
    this.name = r;
  }
  get subtitleConfig() {
    return this.subtitle;
  }
  set subtitleConfig(r) {
    this.subtitle = r;
  }
  get avatarUrlConfig() {
    return this.avatarUrl;
  }
  set avatarUrlConfig(r) {
    this.avatarUrl = r;
  }
  get stat1ValueConfig() {
    return this.stat1Value;
  }
  set stat1ValueConfig(r) {
    this.stat1Value = Number(r);
  }
  get stat1LabelConfig() {
    return this.stat1Label;
  }
  set stat1LabelConfig(r) {
    this.stat1Label = r;
  }
  get stat2ValueConfig() {
    return this.stat2Value;
  }
  set stat2ValueConfig(r) {
    this.stat2Value = Number(r);
  }
  get stat2LabelConfig() {
    return this.stat2Label;
  }
  set stat2LabelConfig(r) {
    this.stat2Label = r;
  }
  get buttonTextConfig() {
    return this.buttonText;
  }
  set buttonTextConfig(r) {
    this.buttonText = r;
  }
  handleMessageClick() {
    this.dispatchEvent(new CustomEvent("messageClick", { bubbles: !0, composed: !0 }));
  }
  render() {
    return rr`
      <div class="card">
        <img class="avatar" src="${this.avatarUrl}" alt="Avatar" />
        <div class="name">${this.name}</div>
        <div class="subtitle">${this.subtitle}</div>
        <div class="stats">
          <div>
            <div class="stat-val">${this.stat1Value}</div>
            <div class="stat-lbl">${this.stat1Label}</div>
          </div>
          <div class="divider"></div>
          <div>
            <div class="stat-val">${this.stat2Value}</div>
            <div class="stat-lbl">${this.stat2Label}</div>
          </div>
        </div>
        <button class="btn" @click=${this.handleMessageClick}>${this.buttonText}</button>
      </div>
    `;
  }
};
M.styles = Ge`
    :host {
      display: block;
      width: 100%;
    }
    .card {
      padding: 24px;
      border-radius: 16px;
      background: var(--uiv-surface-color, #ffffff);
      border: 1px solid var(--uiv-border-color, rgba(0, 0, 0, 0.05));
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      font-family: inherit;
      box-sizing: border-box;
    }
    .avatar {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 16px;
      border: 1px solid var(--uiv-border-color, #e2e8f0);
    }
    .name {
      margin: 0 0 4px 0;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--uiv-text-color, #1e293b);
    }
    .subtitle {
      margin: 0 0 20px 0;
      font-size: 0.8rem;
      color: var(--uiv-text-muted, #64748b);
      word-break: break-all;
    }
    .stats {
      display: flex;
      gap: 24px;
      width: 100%;
      border-top: 1px solid var(--uiv-border-color, #f1f5f9);
      border-bottom: 1px solid var(--uiv-border-color, #f1f5f9);
      padding: 16px 0;
      margin-bottom: 20px;
      justify-content: center;
    }
    .stat-val {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--uiv-text-color, #1e293b);
    }
    .stat-lbl {
      font-size: 0.75rem;
      color: var(--uiv-text-muted, #94a3b8);
      margin-top: 2px;
    }
    .divider {
      width: 1px;
      background: var(--uiv-border-color, #e2e8f0);
      height: 32px;
    }
    .btn {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid var(--uiv-border-color, #cbd5e1);
      background: var(--uiv-surface-color, #ffffff);
      color: var(--uiv-text-color, #334155);
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn:hover {
      background: var(--uiv-hover-bg, #f8fafc);
      border-color: var(--uiv-primary-color, #94a3b8);
      color: var(--uiv-text-color, #0f172a);
    }

    @media (max-width: 768px) {
      .card {
        padding: 16px;
      }
      .avatar {
        width: 80px;
        height: 80px;
        margin-bottom: 12px;
      }
      .name {
        font-size: 1.05rem;
      }
      .subtitle {
        font-size: 0.75rem;
        margin-bottom: 16px;
      }
      .stats {
        padding: 12px 0;
        margin-bottom: 16px;
        gap: 16px;
      }
      .stat-val {
        font-size: 1.05rem;
      }
      .stat-lbl {
        font-size: 0.7rem;
      }
      .btn {
        padding: 8px;
        font-size: 0.8rem;
      }
    }
  `;
R([
  G({ type: String })
], M.prototype, "name", 2);
R([
  G({ type: String })
], M.prototype, "subtitle", 2);
R([
  G({ type: String, attribute: "avatar-url" })
], M.prototype, "avatarUrl", 2);
R([
  G({ type: Number, attribute: "stat1-value" })
], M.prototype, "stat1Value", 2);
R([
  G({ type: String, attribute: "stat1-label" })
], M.prototype, "stat1Label", 2);
R([
  G({ type: Number, attribute: "stat2-value" })
], M.prototype, "stat2Value", 2);
R([
  G({ type: String, attribute: "stat2-label" })
], M.prototype, "stat2Label", 2);
R([
  G({ type: String, attribute: "button-text" })
], M.prototype, "buttonText", 2);
R([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: V.TEXT_INPUT,
    displayLabel: "Name",
    fieldMappings: "name",
    categoryLabel: "Profile",
    initialValue: "Diane Cooper"
  })
], M.prototype, "nameConfig", 1);
R([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: V.TEXT_INPUT,
    displayLabel: "Subtitle / Email",
    fieldMappings: "subtitle",
    categoryLabel: "Profile",
    initialValue: "diane.cooper@example.com"
  })
], M.prototype, "subtitleConfig", 1);
R([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: V.TEXT_INPUT,
    displayLabel: "Avatar Image URL",
    fieldMappings: "avatarUrl",
    categoryLabel: "Profile",
    initialValue: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  })
], M.prototype, "avatarUrlConfig", 1);
R([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: V.NUMBER_INPUT,
    displayLabel: "Stat 1 Value",
    fieldMappings: "stat1Value",
    categoryLabel: "Stats",
    initialValue: 15
  })
], M.prototype, "stat1ValueConfig", 1);
R([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: V.TEXT_INPUT,
    displayLabel: "Stat 1 Label",
    fieldMappings: "stat1Label",
    categoryLabel: "Stats",
    initialValue: "Past"
  })
], M.prototype, "stat1LabelConfig", 1);
R([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: V.NUMBER_INPUT,
    displayLabel: "Stat 2 Value",
    fieldMappings: "stat2Value",
    categoryLabel: "Stats",
    initialValue: 2
  })
], M.prototype, "stat2ValueConfig", 1);
R([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: V.TEXT_INPUT,
    displayLabel: "Stat 2 Label",
    fieldMappings: "stat2Label",
    categoryLabel: "Stats",
    initialValue: "Upcoming"
  })
], M.prototype, "stat2LabelConfig", 1);
R([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: V.TEXT_INPUT,
    displayLabel: "Button Text",
    fieldMappings: "buttonText",
    categoryLabel: "Action",
    initialValue: "Send Message"
  })
], M.prototype, "buttonTextConfig", 1);
R([
  j({
    attributeType: N.EVENT,
    displayLabel: "On Send Message",
    categoryLabel: "Action",
    eventTrigger: "messageClick"
  })
], M.prototype, "handleMessageClick", 1);
M = R([
  De({
    name: "zero-profile-card",
    version: "1.0.0",
    title: "Profile Card",
    elementSelector: "zero-profile-card",
    group: "Dashboard",
    iconName: "profile-icon.png"
  }),
  je()
], M);
export {
  M as ZeroProfileCard
};
