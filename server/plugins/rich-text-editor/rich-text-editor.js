var Te = Object.defineProperty;
var ke = (r, t, e) => t in r ? Te(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Lt = (r, t, e) => ke(r, typeof t != "symbol" ? t + "" : t, e);
var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var e = typeof globalThis == "object" ? globalThis : typeof Bt == "object" ? Bt : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = o(r);
    typeof e.Reflect < "u" && (n = o(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function o(v, A) {
      return function(m, b) {
        Object.defineProperty(v, m, { configurable: !0, writable: !0, value: b }), A && A(m, b);
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
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, A = !_ && !v, m = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ft(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ft({ __proto__: null });
      } : function() {
        return ft({});
      },
      has: A ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: A ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, b = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ce(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : xe(), I = typeof WeakMap == "function" ? WeakMap : Pe(), L = o ? Symbol.for("@reflect-metadata:registry") : void 0, nt = Ee(), Et = Me(nt);
    function se(i, s, a, c) {
      if (g(a)) {
        if (!kt(i))
          throw new TypeError();
        if (!It(s))
          throw new TypeError();
        return ye(i, s);
      } else {
        if (!kt(i))
          throw new TypeError();
        if (!x(s))
          throw new TypeError();
        if (!x(c) && !g(c) && !B(c))
          throw new TypeError();
        return B(c) && (c = void 0), a = k(a), ge(i, s, a, c);
      }
    }
    t("decorate", se);
    function ae(i, s) {
      function a(c, y) {
        if (!x(c))
          throw new TypeError();
        if (!g(y) && !$e(y))
          throw new TypeError();
        xt(i, s, c, y);
      }
      return a;
    }
    t("metadata", ae);
    function le(i, s, a, c) {
      if (!x(a))
        throw new TypeError();
      return g(c) || (c = k(c)), xt(i, s, a, c);
    }
    t("defineMetadata", le);
    function ue(i, s, a) {
      if (!x(s))
        throw new TypeError();
      return g(a) || (a = k(a)), Mt(i, s, a);
    }
    t("hasMetadata", ue);
    function ce(i, s, a) {
      if (!x(s))
        throw new TypeError();
      return g(a) || (a = k(a)), ct(i, s, a);
    }
    t("hasOwnMetadata", ce);
    function de(i, s, a) {
      if (!x(s))
        throw new TypeError();
      return g(a) || (a = k(a)), St(i, s, a);
    }
    t("getMetadata", de);
    function he(i, s, a) {
      if (!x(s))
        throw new TypeError();
      return g(a) || (a = k(a)), Ct(i, s, a);
    }
    t("getOwnMetadata", he);
    function fe(i, s) {
      if (!x(i))
        throw new TypeError();
      return g(s) || (s = k(s)), Pt(i, s);
    }
    t("getMetadataKeys", fe);
    function pe(i, s) {
      if (!x(i))
        throw new TypeError();
      return g(s) || (s = k(s)), Ot(i, s);
    }
    t("getOwnMetadataKeys", pe);
    function ve(i, s, a) {
      if (!x(s))
        throw new TypeError();
      if (g(a) || (a = k(a)), !x(s))
        throw new TypeError();
      g(a) || (a = k(a));
      var c = W(
        s,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, a);
    }
    t("deleteMetadata", ve);
    function ye(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], y = c(s);
        if (!g(y) && !B(y)) {
          if (!It(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function ge(i, s, a, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var M = i[y], P = M(s, a, c);
        if (!g(P) && !B(P)) {
          if (!x(P))
            throw new TypeError();
          c = P;
        }
      }
      return c;
    }
    function Mt(i, s, a) {
      var c = ct(i, s, a);
      if (c)
        return !0;
      var y = ht(s);
      return B(y) ? !1 : Mt(i, y, a);
    }
    function ct(i, s, a) {
      var c = W(
        s,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Tt(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function St(i, s, a) {
      var c = ct(i, s, a);
      if (c)
        return Ct(i, s, a);
      var y = ht(s);
      if (!B(y))
        return St(i, y, a);
    }
    function Ct(i, s, a) {
      var c = W(
        s,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function xt(i, s, a, c) {
      var y = W(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function Pt(i, s) {
      var a = Ot(i, s), c = ht(i);
      if (c === null)
        return a;
      var y = Pt(c, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var M = new R(), P = [], w = 0, d = a; w < d.length; w++) {
        var h = d[w], f = M.has(h);
        f || (M.add(h), P.push(h));
      }
      for (var p = 0, $ = y; p < $.length; p++) {
        var h = $[p], f = M.has(h);
        f || (M.add(h), P.push(h));
      }
      return P;
    }
    function Ot(i, s) {
      var a = W(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Rt(i) {
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
    function g(i) {
      return i === void 0;
    }
    function B(i) {
      return i === null;
    }
    function me(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function be(i, s) {
      switch (Rt(i)) {
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
      var a = "string", c = Nt(i, u);
      if (c !== void 0) {
        var y = c.call(i, a);
        if (x(y))
          throw new TypeError();
        return y;
      }
      return _e(i);
    }
    function _e(i, s) {
      var a, c, y;
      {
        var M = i.toString;
        if (it(M)) {
          var c = M.call(i);
          if (!x(c))
            return c;
        }
        var a = i.valueOf;
        if (it(a)) {
          var c = a.call(i);
          if (!x(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Tt(i) {
      return !!i;
    }
    function we(i) {
      return "" + i;
    }
    function k(i) {
      var s = be(i);
      return me(s) ? s : we(s);
    }
    function kt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function it(i) {
      return typeof i == "function";
    }
    function It(i) {
      return typeof i == "function";
    }
    function $e(i) {
      switch (Rt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function dt(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Nt(i, s) {
      var a = i[s];
      if (a != null) {
        if (!it(a))
          throw new TypeError();
        return a;
      }
    }
    function zt(i) {
      var s = Nt(i, l);
      if (!it(s))
        throw new TypeError();
      var a = s.call(i);
      if (!x(a))
        throw new TypeError();
      return a;
    }
    function Ut(i) {
      return i.value;
    }
    function jt(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Ht(i) {
      var s = i.return;
      s && s.call(i);
    }
    function ht(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || s !== b)
        return s;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function Ae() {
      var i;
      !g(L) && typeof e.Reflect < "u" && !(L in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Se(e.Reflect));
      var s, a, c, y = new I(), M = {
        registerProvider: P,
        getProvider: d,
        setProvider: f
      };
      return M;
      function P(p) {
        if (!Object.isExtensible(M))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case g(s):
            s = p;
            break;
          case s === p:
            break;
          case g(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new R()), c.add(p);
            break;
        }
      }
      function w(p, $) {
        if (!g(s)) {
          if (s.isProviderFor(p, $))
            return s;
          if (!g(a)) {
            if (a.isProviderFor(p, $))
              return s;
            if (!g(c))
              for (var E = zt(c); ; ) {
                var S = jt(E);
                if (!S)
                  return;
                var T = Ut(S);
                if (T.isProviderFor(p, $))
                  return Ht(E), T;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, $))
          return i;
      }
      function d(p, $) {
        var E = y.get(p), S;
        return g(E) || (S = E.get($)), g(S) && (S = w(p, $), g(S) || (g(E) && (E = new C(), y.set(p, E)), E.set($, S))), S;
      }
      function h(p) {
        if (g(p))
          throw new TypeError();
        return s === p || a === p || !g(c) && c.has(p);
      }
      function f(p, $, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = d(p, $);
        if (S !== E) {
          if (!g(S))
            return !1;
          var T = y.get(p);
          g(T) && (T = new C(), y.set(p, T)), T.set($, E);
        }
        return !0;
      }
    }
    function Ee() {
      var i;
      return !g(L) && x(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[L]), g(i) && (i = Ae()), !g(L) && x(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Me(i) {
      var s = new I(), a = {
        isProviderFor: function(h, f) {
          var p = s.get(h);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: P,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: d
      };
      return nt.registerProvider(a), a;
      function c(h, f, p) {
        var $ = s.get(h), E = !1;
        if (g($)) {
          if (!p)
            return;
          $ = new C(), s.set(h, $), E = !0;
        }
        var S = $.get(f);
        if (g(S)) {
          if (!p)
            return;
          if (S = new C(), $.set(f, S), !i.setProvider(h, f, a))
            throw $.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        return g($) ? !1 : Tt($.has(h));
      }
      function M(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g($))
          return $.get(h);
      }
      function P(h, f, p, $) {
        var E = c(
          p,
          $,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function w(h, f) {
        var p = [], $ = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (g($))
          return p;
        for (var E = $.keys(), S = zt(E), T = 0; ; ) {
          var Dt = jt(S);
          if (!Dt)
            return p.length = T, p;
          var Oe = Ut(Dt);
          try {
            p[T] = Oe;
          } catch (Re) {
            try {
              Ht(S);
            } finally {
              throw Re;
            }
          }
          T++;
        }
      }
      function d(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (g($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var E = s.get(f);
          g(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Se(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, M = i.deleteMetadata, P = new I(), w = {
        isProviderFor: function(d, h) {
          var f = P.get(d);
          return !g(f) && f.has(h) ? !0 : y(d, h).length ? (g(f) && (f = new R(), P.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: M
      };
      return w;
    }
    function W(i, s, a) {
      var c = nt.getProvider(i, s);
      if (!g(c))
        return c;
      if (a) {
        if (nt.setProvider(i, s, Et))
          return Et;
        throw new Error("Illegal state.");
      }
    }
    function Ce() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function w(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[l] = function() {
            return this;
          }, w.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, w.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, w;
        }()
      ), c = (
        /** @class */
        function() {
          function w() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(w.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), w.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, w.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, w.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, w.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, dt(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, w.prototype.values = function() {
            return new a(this._keys, this._values, M);
          }, w.prototype.entries = function() {
            return new a(this._keys, this._values, P);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[l] = function() {
            return this.entries();
          }, w.prototype._find = function(d, h) {
            if (!dt(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (dt(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return c;
      function y(w, d) {
        return w;
      }
      function M(w, d) {
        return d;
      }
      function P(w, d) {
        return [w, d];
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
      return i;
    }
    function Pe() {
      var i = 16, s = m.create(), a = c();
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
            return f !== void 0 ? m.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? m.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var p = y(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
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
          d = "@@WeakMap@@" + w();
        while (m.has(s, d));
        return s[d] = !0, d;
      }
      function y(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: m.create() });
        }
        return d[a];
      }
      function M(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function P(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : M(h, d), h;
        }
        return M(new Array(d), d);
      }
      function w() {
        var d = P(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ft(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Vt || (Vt = {}));
function Ie(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ne(r) {
  return function(t) {
    if (Ie(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements ? customElements.define(`${r.elementSelector}-${r.version}`, t) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: e
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function ze(r) {
  return Ne(r);
}
function Ue(r) {
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
      update(u) {
        try {
          super.update(u);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var v;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && _) {
          const A = new CSSStyleSheet(), m = (v = u.sheet) == null ? void 0 : v.cssRules;
          m && (Array.from(m).forEach((b) => A.insertRule(b.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, A]);
        } else if (u) {
          const A = u.cloneNode(!0);
          this.shadowRoot.appendChild(A);
        }
        l.forEach((A) => {
          const m = A.cloneNode(!0);
          this.shadowRoot.appendChild(m);
        });
      }
    }
    return e;
  };
}
function je(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function He(r) {
  return function(t, e) {
    try {
      je(r);
      const n = Reflect.getMetadata("ZeroAttribute", t) || [];
      typeof e == "string" && typeof t[e] != "function" && (r.fieldMappings = r.fieldMappings ?? e), n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function mt(r) {
  return He(r);
}
var st;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown";
})(st || (st = {}));
var J;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(J || (J = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot = globalThis, bt = ot.ShadowRoot && (ot.ShadyCSS === void 0 || ot.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, _t = Symbol(), Gt = /* @__PURE__ */ new WeakMap();
let ee = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== _t) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (bt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Gt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Gt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const De = (r) => new ee(typeof r == "string" ? r : r + "", void 0, _t), Le = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, o, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[u + 1], r[0]);
  return new ee(e, r, _t);
}, Be = (r, t) => {
  if (bt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), o = ot.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = e.cssText, r.appendChild(n);
  }
}, Ft = bt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return De(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ve, defineProperty: Ge, getOwnPropertyDescriptor: Fe, getOwnPropertyNames: We, getOwnPropertySymbols: qe, getPrototypeOf: Ze } = Object, z = globalThis, Wt = z.trustedTypes, Xe = Wt ? Wt.emptyScript : "", pt = z.reactiveElementPolyfillSupport, Z = (r, t) => r, at = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Xe : null;
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
} }, wt = (r, t) => !Ve(r, t), qt = { attribute: !0, type: String, converter: at, reflect: !1, hasChanged: wt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class V extends HTMLElement {
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
    const { get: o, set: u } = Fe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(l) {
      this[e] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const _ = o == null ? void 0 : o.call(this);
      u.call(this, l), this.requestUpdate(t, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? qt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Z("elementProperties"))) return;
    const t = Ze(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Z("properties"))) {
      const e = this.properties, n = [...We(e), ...qe(e)];
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
      const l = n.getPropertyOptions(o), _ = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : at;
      this._$Em = o, this[o] = _.fromAttribute(e, l.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, n) {
    if (t !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(t)), !(n.hasChanged ?? wt)(this[t], e)) return;
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[Z("elementProperties")] = /* @__PURE__ */ new Map(), V[Z("finalized")] = /* @__PURE__ */ new Map(), pt == null || pt({ ReactiveElement: V }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, lt = X.trustedTypes, Zt = lt ? lt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, re = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, ne = "?" + N, Ye = `<${ne}>`, H = document, Q = () => H.createComment(""), K = (r) => r === null || typeof r != "object" && typeof r != "function", $t = Array.isArray, Je = (r) => $t(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", vt = `[ 	
\f\r]`, q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Xt = /-->/g, Yt = />/g, U = RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Jt = /'/g, Qt = /"/g, ie = /^(?:script|style|textarea|title)$/i, Qe = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), Ke = Qe(1), G = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), Kt = /* @__PURE__ */ new WeakMap(), j = H.createTreeWalker(H, 129);
function oe(r, t) {
  if (!$t(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Zt !== void 0 ? Zt.createHTML(t) : t;
}
const tr = (r, t) => {
  const e = r.length - 1, n = [];
  let o, u = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", l = q;
  for (let _ = 0; _ < e; _++) {
    const v = r[_];
    let A, m, b = -1, C = 0;
    for (; C < v.length && (l.lastIndex = C, m = l.exec(v), m !== null); ) C = l.lastIndex, l === q ? m[1] === "!--" ? l = Xt : m[1] !== void 0 ? l = Yt : m[2] !== void 0 ? (ie.test(m[2]) && (o = RegExp("</" + m[2], "g")), l = U) : m[3] !== void 0 && (l = U) : l === U ? m[0] === ">" ? (l = o ?? q, b = -1) : m[1] === void 0 ? b = -2 : (b = l.lastIndex - m[2].length, A = m[1], l = m[3] === void 0 ? U : m[3] === '"' ? Qt : Jt) : l === Qt || l === Jt ? l = U : l === Xt || l === Yt ? l = q : (l = U, o = void 0);
    const R = l === U && r[_ + 1].startsWith("/>") ? " " : "";
    u += l === q ? v + Ye : b >= 0 ? (n.push(A), v.slice(0, b) + re + v.slice(b) + N + R) : v + N + (b === -2 ? _ : R);
  }
  return [oe(r, u + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class tt {
  constructor({ strings: t, _$litType$: e }, n) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const _ = t.length - 1, v = this.parts, [A, m] = tr(t, e);
    if (this.el = tt.createElement(A, n), j.currentNode = this.el.content, e === 2 || e === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = j.nextNode()) !== null && v.length < _; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith(re)) {
          const C = m[l++], R = o.getAttribute(b).split(N), I = /([.?@])?(.*)/.exec(C);
          v.push({ type: 1, index: u, name: I[2], strings: R, ctor: I[1] === "." ? rr : I[1] === "?" ? nr : I[1] === "@" ? ir : ut }), o.removeAttribute(b);
        } else b.startsWith(N) && (v.push({ type: 6, index: u }), o.removeAttribute(b));
        if (ie.test(o.tagName)) {
          const b = o.textContent.split(N), C = b.length - 1;
          if (C > 0) {
            o.textContent = lt ? lt.emptyScript : "";
            for (let R = 0; R < C; R++) o.append(b[R], Q()), j.nextNode(), v.push({ type: 2, index: ++u });
            o.append(b[C], Q());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ne) v.push({ type: 2, index: u });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(N, b + 1)) !== -1; ) v.push({ type: 7, index: u }), b += N.length - 1;
      }
      u++;
    }
  }
  static createElement(t, e) {
    const n = H.createElement("template");
    return n.innerHTML = t, n;
  }
}
function F(r, t, e = r, n) {
  var l, _;
  if (t === G) return t;
  let o = n !== void 0 ? (l = e.o) == null ? void 0 : l[n] : e.l;
  const u = K(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((_ = o == null ? void 0 : o._$AO) == null || _.call(o, !1), u === void 0 ? o = void 0 : (o = new u(r), o._$AT(r, e, n)), n !== void 0 ? (e.o ?? (e.o = []))[n] = o : e.l = o), o !== void 0 && (t = F(r, o._$AS(r, t.values), o, n)), t;
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
    const { el: { content: e }, parts: n } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? H).importNode(e, !0);
    j.currentNode = o;
    let u = j.nextNode(), l = 0, _ = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let A;
        v.type === 2 ? A = new et(u, u.nextSibling, this, t) : v.type === 1 ? A = new v.ctor(u, v.name, v.strings, this, t) : v.type === 6 && (A = new or(u, this, t)), this._$AV.push(A), v = n[++_];
      }
      l !== (v == null ? void 0 : v.index) && (u = j.nextNode(), l++);
    }
    return j.currentNode = H, o;
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
  constructor(t, e, n, o) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    t = F(this, t, e), K(t) ? t === O || t == null || t === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : t !== this._$AH && t !== G && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Je(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== O && K(this._$AH) ? this._$AA.nextSibling.data = t : this.T(H.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var u;
    const { values: e, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = tt.createElement(oe(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(e);
    else {
      const l = new er(o, this), _ = l.u(this.options);
      l.p(e), this.T(_), this._$AH = l;
    }
  }
  _$AC(t) {
    let e = Kt.get(t.strings);
    return e === void 0 && Kt.set(t.strings, e = new tt(t)), e;
  }
  k(t) {
    $t(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, o = 0;
    for (const u of t) o === e.length ? e.push(n = new et(this.O(Q()), this.O(Q()), this, this.options)) : n = e[o], n._$AI(u), o++;
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
class ut {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, o, u) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = O;
  }
  _$AI(t, e = this, n, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) t = F(this, t, e, 0), l = !K(t) || t !== this._$AH && t !== G, l && (this._$AH = t);
    else {
      const _ = t;
      let v, A;
      for (t = u[0], v = 0; v < u.length - 1; v++) A = F(this, _[n + v], e, v), A === G && (A = this._$AH[v]), l || (l = !K(A) || A !== this._$AH[v]), A === O ? t = O : t !== O && (t += (A ?? "") + u[v + 1]), this._$AH[v] = A;
    }
    l && !o && this.j(t);
  }
  j(t) {
    t === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class rr extends ut {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === O ? void 0 : t;
  }
}
class nr extends ut {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== O);
  }
}
class ir extends ut {
  constructor(t, e, n, o, u) {
    super(t, e, n, o, u), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = F(this, t, e, 0) ?? O) === G) return;
    const n = this._$AH, o = t === O && n !== O || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, u = t !== O && (n === O || o);
    o && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class or {
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
const yt = X.litHtmlPolyfillSupport;
yt == null || yt(tt, et), (X.litHtmlVersions ?? (X.litHtmlVersions = [])).push("3.2.0");
const sr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = n._$litPart$;
  if (o === void 0) {
    const u = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = o = new et(t.insertBefore(Q(), u), u, void 0, e ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Y extends V {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this.o = sr(e, this.renderRoot, this.renderOptions);
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
    return G;
  }
}
var te;
Y._$litElement$ = !0, Y.finalized = !0, (te = globalThis.litElementHydrateSupport) == null || te.call(globalThis, { LitElement: Y });
const gt = globalThis.litElementPolyfillSupport;
gt == null || gt({ LitElement: Y });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: at, reflect: !1, hasChanged: wt }, lr = (r = ar, t, e) => {
  const { kind: n, metadata: o } = e;
  let u = globalThis.litPropertyMetadata.get(o);
  if (u === void 0 && globalThis.litPropertyMetadata.set(o, u = /* @__PURE__ */ new Map()), u.set(e.name, r), n === "accessor") {
    const { name: l } = e;
    return { set(_) {
      const v = t.get.call(this);
      t.set.call(this, _), this.requestUpdate(l, v, r);
    }, init(_) {
      return _ !== void 0 && this.P(l, void 0, r), _;
    } };
  }
  if (n === "setter") {
    const { name: l } = e;
    return function(_) {
      const v = this[l];
      t.call(this, _), this.requestUpdate(l, v, r);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function At(r) {
  return (t, e) => typeof e == "object" ? lr(r, t, e) : ((n, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(r, t, e);
}
var ur = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, rt = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? cr(t, e) : t, u = r.length - 1, l; u >= 0; u--)
    (l = r[u]) && (o = (n ? l(t, e, o) : l(o)) || o);
  return n && o && ur(t, e, o), o;
};
let D = class extends Y {
  constructor() {
    super(...arguments), this.content = "", this.toolbarVisible = !1, this.editorMode = !0, this.isWrapped = !1, this.selectionRange = null;
  }
  set htmldata(r) {
    this.content = r, this.updateEditorContent();
  }
  firstUpdated() {
    this.updateEditorContent();
  }
  updated(r) {
    super.updated(r), r.has("content") && this.editorMode && this.restoreCursor(), this.updateContent();
  }
  storeCursor() {
    const r = window.getSelection();
    r && r.rangeCount > 0 && (this.selectionRange = r.getRangeAt(0).cloneRange());
  }
  restoreCursor() {
    var r;
    if (this.selectionRange) {
      const t = window.getSelection();
      t && ((r = this.selectionRange) != null && r.collapsed || t.removeAllRanges(), t.addRange(this.selectionRange), this.selectionRange.collapse(!1));
    }
  }
  toggleToolbar(r) {
    r.stopPropagation(), this.toolbarVisible = !this.toolbarVisible;
  }
  execCommand(r, t) {
    this.storeCursor(), document.execCommand(r, !0, t), this.updateContent();
  }
  updateContent() {
    var t;
    const r = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".editor");
    r && (this.content = r.innerHTML, this.dispatchEvent(new CustomEvent("content-changed", {
      detail: { content: this.content },
      bubbles: !0,
      composed: !0
    })), console.log(this.content));
  }
  updateEditorContent() {
    var t;
    const r = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".editor");
    r && (r.innerHTML = this.content || "", this.editorMode || r.querySelectorAll("img").forEach((e) => {
      this.unwrapImage(e);
    }));
  }
  onPaste() {
    setTimeout(() => {
      var t;
      const r = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".editor");
      this.editorMode && r.querySelectorAll("img").forEach((e) => {
        e.classList.contains("resize-icon") || (e.addEventListener("mouseenter", (n) => {
          this.editorMode && (n.stopPropagation(), this.wrapImage(e));
        }), e.addEventListener("mouseleave", (n) => {
          var u;
          if (!this.editorMode)
            return;
          n.stopPropagation();
          const o = n.relatedTarget;
          (!o || !((u = o == null ? void 0 : o.classList) != null && u.contains("resize-icon"))) && this.unwrapImage(e);
        }));
      });
    }, 400);
  }
  wrapImage(r) {
    var t;
    if (!r.hasAttribute("data-wrapped")) {
      const e = document.createElement("div");
      e.className = "image-container", (t = r.parentNode) == null || t.insertBefore(e, r), e.appendChild(r);
      const n = document.createElement("img");
      n.className = "resize-icon", n.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTEwIDIwTDIwIDIwTDIwIDEwIiBzdHJva2U9IiMyMjIyMjIiLz4NCjxwYXRoIGQ9Ik0xMiAxN0wxNyAxN0wxNyAxMiIgc3Ryb2tlPSIjMjIyMjIyIi8+DQo8L3N2Zz4=", n.alt = "Resize Icon", e.appendChild(n), r.setAttribute("data-wrapped", "true"), this.addResizeFunctionality(e);
    }
  }
  unwrapImage(r) {
    var t;
    if (r.hasAttribute("data-wrapped")) {
      const e = r.parentNode;
      if (e.classList.contains("image-container")) {
        const n = e.querySelector(".resize-icon");
        n && n.remove(), (t = e.parentNode) == null || t.insertBefore(r, e), e.remove(), r.removeAttribute("data-wrapped");
      }
    }
  }
  addResizeFunctionality(r) {
    const t = r.querySelector("img"), e = r.querySelector(".resize-icon");
    let n, o, u, l;
    const _ = (m) => {
      const b = u + (m.clientX - n), C = l + (m.clientY - o);
      t.style.width = `${b}px`, t.style.height = `${C}px`;
    }, v = () => {
      document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", v);
    }, A = (m) => {
      n = m.clientX, o = m.clientY, u = t.offsetWidth, l = t.offsetHeight, document.addEventListener("mousemove", _), document.addEventListener("mouseup", v);
    };
    e.addEventListener("mousedown", A), e.addEventListener("mouseleave", (m) => {
      var C;
      m.stopPropagation();
      const b = m.relatedTarget;
      b && ((C = b == null ? void 0 : b.classList) != null && C.contains("editor")) && this.unwrapImage(t);
    });
  }
  handleInput(r) {
    r.stopPropagation(), this.updateContent();
  }
  handleColorChange(r) {
    r.stopPropagation();
    const t = r.target;
    this.execCommand("foreColor", t.value);
  }
  handleBgColorChange(r) {
    r.stopPropagation();
    const t = r.target;
    this.execCommand("backColor", t.value);
  }
  handleFontSizeChange(r) {
    r.stopPropagation();
    const t = r.target;
    this.execCommand("fontSize", t.value);
  }
  handleAlignChange(r) {
    r.stopPropagation();
    const t = r.target;
    this.execCommand("justifyLeft", t.value === "left" ? "" : null), this.execCommand("justifyCenter", t.value === "center" ? "" : null), this.execCommand("justifyRight", t.value === "right" ? "" : null), this.execCommand("justifyFull", t.value === "justify" ? "" : null);
  }
  toggleEditorMode() {
    var t;
    this.editorMode = !this.editorMode;
    const r = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".editor");
    this.editorMode || r.querySelectorAll("img").forEach((e) => {
      this.unwrapImage(e);
    });
  }
  handleFontFamilyChange(r) {
    r.stopPropagation();
    const t = r.target;
    this.execCommand("fontName", t.value);
  }
  handleContentChanged(r) {
    this.updateContent();
  }
  render() {
    return Ke`
      <div class="toolbar ${this.toolbarVisible ? "visible" : ""}">
        <button @click="${() => this.execCommand("bold")}" title="Bold">B</button>
        <button @click="${() => this.execCommand("italic")}" title="Italic">I</button>
        <button @click="${() => this.execCommand("underline")}" title="Underline">U</button>
        <button @click="${() => this.execCommand("strikethrough")}" title="Strikethrough">S</button>
        <input type="color" @input="${this.handleColorChange}" title="Text Color">
        <input type="color" @input="${this.handleBgColorChange}" title="Background Color">
        <select @change="${this.handleFontFamilyChange}" title="Font Family">
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
        <select @change="${this.handleFontSizeChange}">
          <option value="1">Small</option>
          <option value="3">Normal</option>
          <option value="5">Large</option>
          <option value="7">Huge</option>
        </select>
        <select @change="${this.handleAlignChange}">
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
          <option value="justify">Justify</option>
        </select>
        <!-- <button @click="${this.toggleEditorMode}" title="Toggle Mode">
          ${this.editorMode ? "Preview" : "Edit"}
        </button> -->
      </div>
      <button class="toolbar-toggle" @click="${this.toggleToolbar}" ?hidden="${!this.editorMode}" title="Toggle Toolbar">🛠️</button>
      <div class="editor" contenteditable="${this.editorMode}" @input="${this.handleInput}" @paste="${this.onPaste}"></div>
      <!-- <div class="preview" ?hidden="${this.editorMode}"></div> -->
    `;
  }
};
D.styles = Le`
    :host {
      display: block;
      width: 100%;
      margin: auto;
      /* border: 1px solid var(--border-color, #ddd); */
      border-radius: var(--border-radius-lg, 8px);
      overflow: visible;
      position: relative;
    }

    :host([editorMode]) .editor {
      position: relative;
    }
    :host([editorMode]) .editor:hover {
      border: 1px solid var(--border-color, #ddd); /* Change this to your desired border color */
      box-sizing: border-box;
    }
    .toolbar {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: var(--spacing-sm, 8px);
      color: var(--text-secondary, #5b5f61);
      background-color: var(--background-secondary, #f5f5f5);
      border-bottom: 1px solid var(--border-color, #ddd);
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      z-index: 10;
      box-shadow: var(--shadow-md, 0 2px 5px rgba(0, 0, 0, 0.1));
      border-radius: var(--border-radius-lg, 8px);
      transition: var(--transition-normal, opacity 0.3s ease, transform 0.3s ease);
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
    }
    .toolbar.visible {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }    .toolbar button, .toolbar select, .toolbar input[type="color"] {
      background: none;
      border: none;
      cursor: pointer;
      font-size: var(--font-size-md, 16px);
      padding: var(--spacing-xs, 6px);
      transition: var(--transition-fast, background-color 0.3s ease);
      position: relative;
    }
    .toolbar button:hover, .toolbar select:hover, .toolbar input[type="color"]:hover {
      background-color: var(--background-hover, #e0e0e0);
      border-radius: var(--border-radius-sm, 4px);
    }
    .toolbar button::after {
      content: attr(title);
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--tooltip-background, #333);
      color: var(--tooltip-text, #fff);
      padding: var(--spacing-xs, 4px);
      border-radius: var(--border-radius-sm, 4px);
      white-space: nowrap;
      font-size: var(--font-size-xs, 12px);
      opacity: 0;
      transition: var(--transition-fast, opacity 0.3s ease);
    }
    .toolbar button:hover::after {
      opacity: 1;
    }    .editor, .preview {
      height: 100%;
      padding: var(--spacing-sm, 10px);
      outline: none;
      position: relative;
      z-index: 1;
    }
    .toolbar-toggle {
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      top: var(--spacing-sm, 10px);
      right: var(--spacing-sm, 10px);
      font-size: var(--font-size-lg, 18px);
      transition: var(--transition-fast, background-color 0.3s ease);
      z-index: 20;
    }
    .toolbar-toggle:hover {
      background-color: var(--background-hover, #e0e0e0);
      border-radius: 50%;
    }
    .toolbar input[type="color"] {
      width: var(--icon-size-sm, 24px);
      height: var(--icon-size-sm, 24px);
      padding: 0;
      border-radius: 50%;
    }
    .toolbar .align-left::before { content: '←'; }
    .toolbar .align-center::before { content: '↔'; }
    .toolbar .align-right::before { content: '→'; }
    .toolbar .align-justify::before { content: '≡'; }
    .toolbar .bold::before { content: 'B'; font-weight: bold; }
    .toolbar .italic::before { content: 'I'; font-style: italic; }
    .toolbar .underline::before { content: 'U'; text-decoration: underline; }
    .toolbar .strikethrough::before { content: 'S'; text-decoration: line-through; }    .toolbar select {
      font-size: var(--font-size-base, 14px);
    }
    .image-container {
      position: relative;
      display: inline-block;
      /* border: 1px solid var(--border-color, #ddd); */
    }
    .resize-icon {
      position: absolute;
      right: 0;
      bottom: 0;
      width: var(--icon-size-sm, 24px);
      height: var(--icon-size-sm, 24px);
      /* background: url('resize-icon.png') no-repeat center center; */
      /* background-color: red; */
      background-size: contain;
      cursor: nwse-resize;
      visibility: visible
    }
    /* .image-container:hover .resize-icon {
      visibility: visible;
    } */
  `;
rt([
  At({ type: String }),
  mt({
    attributeType: J.PROPERTY,
    uiComponentType: st.TEXTAREA,
    displayLabel: "",
    placeholderText: "",
    fieldMappings: "htmldata"
  })
], D.prototype, "htmldata", 1);
rt([
  At({ type: Boolean, reflect: !0 })
], D.prototype, "toolbarVisible", 2);
rt([
  At({ type: Boolean, reflect: !0 }),
  mt({
    attributeType: J.PROPERTY,
    uiComponentType: st.CHECKBOX,
    displayLabel: "",
    placeholderText: "",
    initialValue: !0,
    fieldMappings: "editorMode"
  })
], D.prototype, "editorMode", 2);
rt([
  mt({
    attributeType: J.EVENT,
    displayLabel: "On Content Changed",
    eventTrigger: "content-changed"
  })
], D.prototype, "handleContentChanged", 1);
D = rt([
  ze({
    name: "rich-text-editor",
    version: "1.0.0",
    title: "Rich text editor",
    elementSelector: "zero-rich-text-editor",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  Ue()
], D);
export {
  D as RichTextEditor
};
