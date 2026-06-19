var Ue = Object.defineProperty;
var De = (n, t, e) => t in n ? Ue(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var Lt = (n, t, e) => De(n, typeof t != "symbol" ? t + "" : t, e);
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
var Gt;
(function(n) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Bt == "object" ? Bt : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = o(n);
    typeof e.Reflect < "u" && (r = o(e.Reflect, r)), t(r, e), typeof e.Reflect > "u" && (e.Reflect = n);
    function o(v, A) {
      return function(w, b) {
        Object.defineProperty(v, w, { configurable: !0, writable: !0, value: b }), A && A(w, b);
      };
    }
    function a() {
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
    function _() {
      return a() || u();
    }
  })(function(t, e) {
    var r = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", a = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, A = !_ && !v, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ht(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ht({ __proto__: null });
      } : function() {
        return ht({});
      },
      has: A ? function(i, s) {
        return r.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: A ? function(i, s) {
        return r.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, b = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : ke(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Te(), j = typeof WeakMap == "function" ? WeakMap : Re(), G = o ? Symbol.for("@reflect-metadata:registry") : void 0, nt = Pe(), Et = Me(nt);
    function ce(i, s, l, c) {
      if (g(l)) {
        if (!Rt(i))
          throw new TypeError();
        if (!jt(s))
          throw new TypeError();
        return $e(i, s);
      } else {
        if (!Rt(i))
          throw new TypeError();
        if (!x(s))
          throw new TypeError();
        if (!x(c) && !g(c) && !W(c))
          throw new TypeError();
        return W(c) && (c = void 0), l = R(l), be(i, s, l, c);
      }
    }
    t("decorate", ce);
    function de(i, s) {
      function l(c, y) {
        if (!x(c))
          throw new TypeError();
        if (!g(y) && !xe(y))
          throw new TypeError();
        Pt(i, s, c, y);
      }
      return l;
    }
    t("metadata", de);
    function he(i, s, l, c) {
      if (!x(l))
        throw new TypeError();
      return g(c) || (c = R(c)), Pt(i, s, l, c);
    }
    t("defineMetadata", he);
    function pe(i, s, l) {
      if (!x(s))
        throw new TypeError();
      return g(l) || (l = R(l)), St(i, s, l);
    }
    t("hasMetadata", pe);
    function fe(i, s, l) {
      if (!x(s))
        throw new TypeError();
      return g(l) || (l = R(l)), ut(i, s, l);
    }
    t("hasOwnMetadata", fe);
    function ve(i, s, l) {
      if (!x(s))
        throw new TypeError();
      return g(l) || (l = R(l)), xt(i, s, l);
    }
    t("getMetadata", ve);
    function ye(i, s, l) {
      if (!x(s))
        throw new TypeError();
      return g(l) || (l = R(l)), Ot(i, s, l);
    }
    t("getOwnMetadata", ye);
    function _e(i, s) {
      if (!x(i))
        throw new TypeError();
      return g(s) || (s = R(s)), Mt(i, s);
    }
    t("getMetadataKeys", _e);
    function ge(i, s) {
      if (!x(i))
        throw new TypeError();
      return g(s) || (s = R(s)), Ct(i, s);
    }
    t("getOwnMetadataKeys", ge);
    function me(i, s, l) {
      if (!x(s))
        throw new TypeError();
      if (g(l) || (l = R(l)), !x(s))
        throw new TypeError();
      g(l) || (l = R(l));
      var c = q(
        s,
        l,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, l);
    }
    t("deleteMetadata", me);
    function $e(i, s) {
      for (var l = i.length - 1; l >= 0; --l) {
        var c = i[l], y = c(s);
        if (!g(y) && !W(y)) {
          if (!jt(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function be(i, s, l, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var P = i[y], O = P(s, l, c);
        if (!g(O) && !W(O)) {
          if (!x(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function St(i, s, l) {
      var c = ut(i, s, l);
      if (c)
        return !0;
      var y = dt(s);
      return W(y) ? !1 : St(i, y, l);
    }
    function ut(i, s, l) {
      var c = q(
        s,
        l,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Tt(c.OrdinaryHasOwnMetadata(i, s, l));
    }
    function xt(i, s, l) {
      var c = ut(i, s, l);
      if (c)
        return Ot(i, s, l);
      var y = dt(s);
      if (!W(y))
        return xt(i, y, l);
    }
    function Ot(i, s, l) {
      var c = q(
        s,
        l,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, s, l);
    }
    function Pt(i, s, l, c) {
      var y = q(
        l,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, l, c);
    }
    function Mt(i, s) {
      var l = Ct(i, s), c = dt(i);
      if (c === null)
        return l;
      var y = Mt(c, s);
      if (y.length <= 0)
        return l;
      if (l.length <= 0)
        return y;
      for (var P = new k(), O = [], m = 0, d = l; m < d.length; m++) {
        var h = d[m], p = P.has(h);
        p || (P.add(h), O.push(h));
      }
      for (var f = 0, $ = y; f < $.length; f++) {
        var h = $[f], p = P.has(h);
        p || (P.add(h), O.push(h));
      }
      return O;
    }
    function Ct(i, s) {
      var l = q(
        i,
        s,
        /*create*/
        !1
      );
      return l ? l.OrdinaryOwnMetadataKeys(i, s) : [];
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
    function g(i) {
      return i === void 0;
    }
    function W(i) {
      return i === null;
    }
    function we(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ae(i, s) {
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
      var l = "string", c = Nt(i, a);
      if (c !== void 0) {
        var y = c.call(i, l);
        if (x(y))
          throw new TypeError();
        return y;
      }
      return Ee(i);
    }
    function Ee(i, s) {
      var l, c;
      {
        var y = i.toString;
        if (it(y)) {
          var c = y.call(i);
          if (!x(c))
            return c;
        }
        var l = i.valueOf;
        if (it(l)) {
          var c = l.call(i);
          if (!x(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Tt(i) {
      return !!i;
    }
    function Se(i) {
      return "" + i;
    }
    function R(i) {
      var s = Ae(i);
      return we(s) ? s : Se(s);
    }
    function Rt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function it(i) {
      return typeof i == "function";
    }
    function jt(i) {
      return typeof i == "function";
    }
    function xe(i) {
      switch (kt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ct(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Nt(i, s) {
      var l = i[s];
      if (l != null) {
        if (!it(l))
          throw new TypeError();
        return l;
      }
    }
    function Ut(i) {
      var s = Nt(i, u);
      if (!it(s))
        throw new TypeError();
      var l = s.call(i);
      if (!x(l))
        throw new TypeError();
      return l;
    }
    function Dt(i) {
      return i.value;
    }
    function It(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Ht(i) {
      var s = i.return;
      s && s.call(i);
    }
    function dt(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || s !== b)
        return s;
      var l = i.prototype, c = l && Object.getPrototypeOf(l);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function Oe() {
      var i;
      !g(G) && typeof e.Reflect < "u" && !(G in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Ce(e.Reflect));
      var s, l, c, y = new j(), P = {
        registerProvider: O,
        getProvider: d,
        setProvider: p
      };
      return P;
      function O(f) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === f:
            break;
          case g(s):
            s = f;
            break;
          case s === f:
            break;
          case g(l):
            l = f;
            break;
          case l === f:
            break;
          default:
            c === void 0 && (c = new k()), c.add(f);
            break;
        }
      }
      function m(f, $) {
        if (!g(s)) {
          if (s.isProviderFor(f, $))
            return s;
          if (!g(l)) {
            if (l.isProviderFor(f, $))
              return s;
            if (!g(c))
              for (var E = Ut(c); ; ) {
                var S = It(E);
                if (!S)
                  return;
                var T = Dt(S);
                if (T.isProviderFor(f, $))
                  return Ht(E), T;
              }
          }
        }
        if (!g(i) && i.isProviderFor(f, $))
          return i;
      }
      function d(f, $) {
        var E = y.get(f), S;
        return g(E) || (S = E.get($)), g(S) && (S = m(f, $), g(S) || (g(E) && (E = new C(), y.set(f, E)), E.set($, S))), S;
      }
      function h(f) {
        if (g(f))
          throw new TypeError();
        return s === f || l === f || !g(c) && c.has(f);
      }
      function p(f, $, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = d(f, $);
        if (S !== E) {
          if (!g(S))
            return !1;
          var T = y.get(f);
          g(T) && (T = new C(), y.set(f, T)), T.set($, E);
        }
        return !0;
      }
    }
    function Pe() {
      var i;
      return !g(G) && x(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[G]), g(i) && (i = Oe()), !g(G) && x(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Me(i) {
      var s = new j(), l = {
        isProviderFor: function(h, p) {
          var f = s.get(h);
          return g(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return nt.registerProvider(l), l;
      function c(h, p, f) {
        var $ = s.get(h), E = !1;
        if (g($)) {
          if (!f)
            return;
          $ = new C(), s.set(h, $), E = !0;
        }
        var S = $.get(p);
        if (g(S)) {
          if (!f)
            return;
          if (S = new C(), $.set(p, S), !i.setProvider(h, p, l))
            throw $.delete(p), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, p, f) {
        var $ = c(
          p,
          f,
          /*Create*/
          !1
        );
        return g($) ? !1 : Tt($.has(h));
      }
      function P(h, p, f) {
        var $ = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (!g($))
          return $.get(h);
      }
      function O(h, p, f, $) {
        var E = c(
          f,
          $,
          /*Create*/
          !0
        );
        E.set(h, p);
      }
      function m(h, p) {
        var f = [], $ = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (g($))
          return f;
        for (var E = $.keys(), S = Ut(E), T = 0; ; ) {
          var zt = It(S);
          if (!zt)
            return f.length = T, f;
          var je = Dt(zt);
          try {
            f[T] = je;
          } catch (Ne) {
            try {
              Ht(S);
            } finally {
              throw Ne;
            }
          }
          T++;
        }
      }
      function d(h, p, f) {
        var $ = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (g($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var E = s.get(p);
          g(E) || (E.delete(f), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Ce(i) {
      var s = i.defineMetadata, l = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, P = i.deleteMetadata, O = new j(), m = {
        isProviderFor: function(d, h) {
          var p = O.get(d);
          return !g(p) && p.has(h) ? !0 : y(d, h).length ? (g(p) && (p = new k(), O.set(d, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: l,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function q(i, s, l) {
      var c = nt.getProvider(i, s);
      if (!g(c))
        return c;
      if (l) {
        if (nt.setProvider(i, s, Et))
          return Et;
        throw new Error("Illegal state.");
      }
    }
    function ke() {
      var i = {}, s = [], l = (
        /** @class */
        function() {
          function m(d, h, p) {
            this._index = 0, this._keys = d, this._values = h, this._selector = p;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, m.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, m;
        }()
      ), c = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, m.prototype.set = function(d, h) {
            var p = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, m.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, f = h + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, ct(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new l(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new l(this._keys, this._values, P);
          }, m.prototype.entries = function() {
            return new l(this._keys, this._values, O);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(d, h) {
            if (!ct(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (ct(this._keys[p], d)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return c;
      function y(m, d) {
        return m;
      }
      function P(m, d) {
        return d;
      }
      function O(m, d) {
        return [m, d];
      }
    }
    function Te() {
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
          }), s.prototype.has = function(l) {
            return this._map.has(l);
          }, s.prototype.add = function(l) {
            return this._map.set(l, l), this;
          }, s.prototype.delete = function(l) {
            return this._map.delete(l);
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
      var i = 16, s = w.create(), l = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? w.has(p, this._key) : !1;
          }, d.prototype.get = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? w.get(p, this._key) : void 0;
          }, d.prototype.set = function(h, p) {
            var f = y(
              h,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
          }, d.prototype.delete = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + m();
        while (w.has(s, d));
        return s[d] = !0, d;
      }
      function y(d, h) {
        if (!r.call(d, l)) {
          if (!h)
            return;
          Object.defineProperty(d, l, { value: w.create() });
        }
        return d[l];
      }
      function P(d, h) {
        for (var p = 0; p < h; ++p)
          d[p] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, d), h;
        }
        return P(new Array(d), d);
      }
      function m() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var f = d[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), f < 16 && (h += "0"), h += f.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ht(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Gt || (Gt = {}));
function Ie(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function He(n) {
  return function(t) {
    if (Ie(n)) {
      const e = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const r = `${n.elementSelector}-${n.version}`;
        if (!customElements.get(r))
          try {
            customElements.define(r, t);
          } catch {
            try {
              customElements.define(r, class extends t {
              });
            } catch (a) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, a);
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
function ze(n) {
  return He(n);
}
function Le(n) {
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
      update(a) {
        try {
          super.update(a);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var A;
        const a = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (a && _) {
          const w = new CSSStyleSheet(), b = (A = a.sheet) == null ? void 0 : A.cssRules;
          b && (Array.from(b).forEach((C) => w.insertRule(C.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, w]);
        } else if (a) {
          const w = a.cloneNode(!0);
          v.appendChild(w);
        }
        u.forEach((w) => {
          const b = w.cloneNode(!0);
          v.appendChild(b);
        });
      }
    }
    return e;
  };
}
function Be(n) {
  var e;
  if (((e = n == null ? void 0 : n.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ge(n) {
  return function(t, e) {
    try {
      Be(n);
      const r = Reflect.getMetadata("ZeroAttribute", t) || [];
      let o = !0;
      if (typeof e == "string") {
        try {
          o = typeof t[e] != "function";
        } catch {
          o = !0;
        }
        o && (n.fieldMappings = n.fieldMappings ?? e);
      }
      r.push(n), Reflect.defineMetadata("ZeroAttribute", r, t);
    } catch (r) {
      console.log(r);
    }
  };
}
function We(n) {
  return Ge(n);
}
var Wt;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker";
})(Wt || (Wt = {}));
var gt;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(gt || (gt = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot = globalThis, mt = ot.ShadowRoot && (ot.ShadyCSS === void 0 || ot.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $t = Symbol(), Vt = /* @__PURE__ */ new WeakMap();
let ie = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== $t) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (mt && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = Vt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Vt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ve = (n) => new ie(typeof n == "string" ? n : n + "", void 0, $t), Fe = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((r, o, a) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[a + 1], n[0]);
  return new ie(e, n, $t);
}, qe = (n, t) => {
  if (mt) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), o = ot.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = e.cssText, n.appendChild(r);
  }
}, Ft = mt ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return Ve(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ze, defineProperty: Ye, getOwnPropertyDescriptor: Xe, getOwnPropertyNames: Je, getOwnPropertySymbols: Qe, getPrototypeOf: Ke } = Object, U = globalThis, qt = U.trustedTypes, tr = qt ? qt.emptyScript : "", pt = U.reactiveElementPolyfillSupport, Y = (n, t) => n, st = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? tr : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, bt = (n, t) => !Ze(n, t), Zt = { attribute: !0, type: String, converter: st, reflect: !1, useDefault: !1, hasChanged: bt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), U.litPropertyMetadata ?? (U.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let V = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Zt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(t, r, e);
      o !== void 0 && Ye(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: o, set: a } = Xe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: o, set(u) {
      const _ = o == null ? void 0 : o.call(this);
      a == null || a.call(this, u), this.requestUpdate(t, _, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const t = Ke(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const e = this.properties, r = [...Je(e), ...Qe(e)];
      for (const o of r) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, o] of e) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const o = this._$Eu(e, r);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const o of r) e.unshift(Ft(o));
    } else t !== void 0 && e.push(Ft(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return qe(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ET(t, e) {
    var a;
    const r = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, r);
    if (o !== void 0 && r.reflect === !0) {
      const u = (((a = r.converter) == null ? void 0 : a.toAttribute) !== void 0 ? r.converter : st).toAttribute(e, r.type);
      this._$Em = t, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var a, u;
    const r = this.constructor, o = r._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const _ = r.getPropertyOptions(o), v = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((a = _.converter) == null ? void 0 : a.fromAttribute) !== void 0 ? _.converter : st;
      this._$Em = o;
      const A = v.fromAttribute(e, _.type);
      this[o] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, r, o = !1, a) {
    var u;
    if (t !== void 0) {
      const _ = this.constructor;
      if (o === !1 && (a = this[t]), r ?? (r = _.getPropertyOptions(t)), !((r.hasChanged ?? bt)(a, e) || r.useDefault && r.reflect && a === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(_._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: o, wrapped: a }, u) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), a !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [a, u] of this._$Ep) this[a] = u;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [a, u] of o) {
        const { wrapped: _ } = u, v = this[a];
        _ !== !0 || this._$AL.has(a) || v === void 0 || this.C(a, void 0, u, v);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((o) => {
        var a;
        return (a = o.hostUpdate) == null ? void 0 : a.call(o);
      }), this.update(e)) : this._$EM();
    } catch (o) {
      throw t = !1, this._$EM(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var o;
      return (o = r.hostUpdated) == null ? void 0 : o.call(r);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[Y("elementProperties")] = /* @__PURE__ */ new Map(), V[Y("finalized")] = /* @__PURE__ */ new Map(), pt == null || pt({ ReactiveElement: V }), (U.reactiveElementVersions ?? (U.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, Yt = (n) => n, at = X.trustedTypes, Xt = at ? at.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, oe = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, se = "?" + N, er = `<${se}>`, z = document, Q = () => z.createComment(""), K = (n) => n === null || typeof n != "object" && typeof n != "function", wt = Array.isArray, rr = (n) => wt(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", ft = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jt = /-->/g, Qt = />/g, D = RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Kt = /'/g, te = /"/g, ae = /^(?:script|style|textarea|title)$/i, nr = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), vt = nr(1), L = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), ee = /* @__PURE__ */ new WeakMap(), I = z.createTreeWalker(z, 129);
function le(n, t) {
  if (!wt(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xt !== void 0 ? Xt.createHTML(t) : t;
}
const ir = (n, t) => {
  const e = n.length - 1, r = [];
  let o, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = Z;
  for (let _ = 0; _ < e; _++) {
    const v = n[_];
    let A, w, b = -1, C = 0;
    for (; C < v.length && (u.lastIndex = C, w = u.exec(v), w !== null); ) C = u.lastIndex, u === Z ? w[1] === "!--" ? u = Jt : w[1] !== void 0 ? u = Qt : w[2] !== void 0 ? (ae.test(w[2]) && (o = RegExp("</" + w[2], "g")), u = D) : w[3] !== void 0 && (u = D) : u === D ? w[0] === ">" ? (u = o ?? Z, b = -1) : w[1] === void 0 ? b = -2 : (b = u.lastIndex - w[2].length, A = w[1], u = w[3] === void 0 ? D : w[3] === '"' ? te : Kt) : u === te || u === Kt ? u = D : u === Jt || u === Qt ? u = Z : (u = D, o = void 0);
    const k = u === D && n[_ + 1].startsWith("/>") ? " " : "";
    a += u === Z ? v + er : b >= 0 ? (r.push(A), v.slice(0, b) + oe + v.slice(b) + N + k) : v + N + (b === -2 ? _ : k);
  }
  return [le(n, a + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class tt {
  constructor({ strings: t, _$litType$: e }, r) {
    let o;
    this.parts = [];
    let a = 0, u = 0;
    const _ = t.length - 1, v = this.parts, [A, w] = ir(t, e);
    if (this.el = tt.createElement(A, r), I.currentNode = this.el.content, e === 2 || e === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = I.nextNode()) !== null && v.length < _; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith(oe)) {
          const C = w[u++], k = o.getAttribute(b).split(N), j = /([.?@])?(.*)/.exec(C);
          v.push({ type: 1, index: a, name: j[2], strings: k, ctor: j[1] === "." ? sr : j[1] === "?" ? ar : j[1] === "@" ? lr : lt }), o.removeAttribute(b);
        } else b.startsWith(N) && (v.push({ type: 6, index: a }), o.removeAttribute(b));
        if (ae.test(o.tagName)) {
          const b = o.textContent.split(N), C = b.length - 1;
          if (C > 0) {
            o.textContent = at ? at.emptyScript : "";
            for (let k = 0; k < C; k++) o.append(b[k], Q()), I.nextNode(), v.push({ type: 2, index: ++a });
            o.append(b[C], Q());
          }
        }
      } else if (o.nodeType === 8) if (o.data === se) v.push({ type: 2, index: a });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(N, b + 1)) !== -1; ) v.push({ type: 7, index: a }), b += N.length - 1;
      }
      a++;
    }
  }
  static createElement(t, e) {
    const r = z.createElement("template");
    return r.innerHTML = t, r;
  }
}
function F(n, t, e = n, r) {
  var u, _;
  if (t === L) return t;
  let o = r !== void 0 ? (u = e._$Co) == null ? void 0 : u[r] : e._$Cl;
  const a = K(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== a && ((_ = o == null ? void 0 : o._$AO) == null || _.call(o, !1), a === void 0 ? o = void 0 : (o = new a(n), o._$AT(n, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = o : e._$Cl = o), o !== void 0 && (t = F(n, o._$AS(n, t.values), o, r)), t;
}
class or {
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
    const { el: { content: e }, parts: r } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? z).importNode(e, !0);
    I.currentNode = o;
    let a = I.nextNode(), u = 0, _ = 0, v = r[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let A;
        v.type === 2 ? A = new et(a, a.nextSibling, this, t) : v.type === 1 ? A = new v.ctor(a, v.name, v.strings, this, t) : v.type === 6 && (A = new ur(a, this, t)), this._$AV.push(A), v = r[++_];
      }
      u !== (v == null ? void 0 : v.index) && (a = I.nextNode(), u++);
    }
    return I.currentNode = z, o;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class et {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, r, o) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    t = F(this, t, e), K(t) ? t === M || t == null || t === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : t !== this._$AH && t !== L && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : rr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== M && K(this._$AH) ? this._$AA.nextSibling.data = t : this.T(z.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var a;
    const { values: e, _$litType$: r } = t, o = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = tt.createElement(le(r.h, r.h[0]), this.options)), r);
    if (((a = this._$AH) == null ? void 0 : a._$AD) === o) this._$AH.p(e);
    else {
      const u = new or(o, this), _ = u.u(this.options);
      u.p(e), this.T(_), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ee.get(t.strings);
    return e === void 0 && ee.set(t.strings, e = new tt(t)), e;
  }
  k(t) {
    wt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, o = 0;
    for (const a of t) o === e.length ? e.push(r = new et(this.O(Q()), this.O(Q()), this, this.options)) : r = e[o], r._$AI(a), o++;
    o < e.length && (this._$AR(r && r._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t !== this._$AB; ) {
      const o = Yt(t).nextSibling;
      Yt(t).remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class lt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, o, a) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = a, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = M;
  }
  _$AI(t, e = this, r, o) {
    const a = this.strings;
    let u = !1;
    if (a === void 0) t = F(this, t, e, 0), u = !K(t) || t !== this._$AH && t !== L, u && (this._$AH = t);
    else {
      const _ = t;
      let v, A;
      for (t = a[0], v = 0; v < a.length - 1; v++) A = F(this, _[r + v], e, v), A === L && (A = this._$AH[v]), u || (u = !K(A) || A !== this._$AH[v]), A === M ? t = M : t !== M && (t += (A ?? "") + a[v + 1]), this._$AH[v] = A;
    }
    u && !o && this.j(t);
  }
  j(t) {
    t === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sr extends lt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === M ? void 0 : t;
  }
}
class ar extends lt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== M);
  }
}
class lr extends lt {
  constructor(t, e, r, o, a) {
    super(t, e, r, o, a), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = F(this, t, e, 0) ?? M) === L) return;
    const r = this._$AH, o = t === M && r !== M || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, a = t !== M && (r === M || o);
    o && this.element.removeEventListener(this.name, this, r), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ur {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    F(this, t);
  }
}
const yt = X.litHtmlPolyfillSupport;
yt == null || yt(tt, et), (X.litHtmlVersions ?? (X.litHtmlVersions = [])).push("3.3.3");
const cr = (n, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = r._$litPart$;
  if (o === void 0) {
    const a = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = o = new et(t.insertBefore(Q(), a), a, void 0, e ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis;
let J = class extends V {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = cr(e, this.renderRoot, this.renderOptions);
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
    return L;
  }
};
var ne;
J._$litElement$ = !0, J.finalized = !0, (ne = H.litElementHydrateSupport) == null || ne.call(H, { LitElement: J });
const _t = H.litElementPolyfillSupport;
_t == null || _t({ LitElement: J });
(H.litElementVersions ?? (H.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: st, reflect: !1, hasChanged: bt }, hr = (n = dr, t, e) => {
  const { kind: r, metadata: o } = e;
  let a = globalThis.litPropertyMetadata.get(o);
  if (a === void 0 && globalThis.litPropertyMetadata.set(o, a = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), a.set(e.name, n), r === "accessor") {
    const { name: u } = e;
    return { set(_) {
      const v = t.get.call(this);
      t.set.call(this, _), this.requestUpdate(u, v, n, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, n, _), _;
    } };
  }
  if (r === "setter") {
    const { name: u } = e;
    return function(_) {
      const v = this[u];
      t.call(this, _), this.requestUpdate(u, v, n, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function At(n) {
  return (t, e) => typeof e == "object" ? hr(n, t, e) : ((r, o, a) => {
    const u = o.hasOwnProperty(a);
    return o.constructor.createProperty(a, r), u ? Object.getOwnPropertyDescriptor(o, a) : void 0;
  })(n, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pr = { ATTRIBUTE: 1 }, fr = (n) => (...t) => ({ _$litDirective$: n, values: t });
let vr = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, r) {
    this._$Ct = t, this._$AM = e, this._$Ci = r;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = "important", yr = " !" + ue, _r = fr(class extends vr {
  constructor(n) {
    var t;
    if (super(n), n.type !== pr.ATTRIBUTE || n.name !== "style" || ((t = n.strings) == null ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(n) {
    return Object.keys(n).reduce((t, e) => {
      const r = n[e];
      return r == null ? t : t + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
    }, "");
  }
  update(n, [t]) {
    const { style: e } = n.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const r of this.ft) t[r] == null && (this.ft.delete(r), r.includes("-") ? e.removeProperty(r) : e[r] = null);
    for (const r in t) {
      const o = t[r];
      if (o != null) {
        this.ft.add(r);
        const a = typeof o == "string" && o.endsWith(yr);
        r.includes("-") || a ? e.setProperty(r, a ? o.slice(0, -11) : o, a ? ue : "") : e[r] = o;
      }
    }
    return L;
  }
});
var gr = Object.defineProperty, mr = Object.getOwnPropertyDescriptor, rt = (n, t, e, r) => {
  for (var o = r > 1 ? void 0 : r ? mr(t, e) : t, a = n.length - 1, u; a >= 0; a--)
    (u = n[a]) && (o = (r ? u(t, e, o) : u(o)) || o);
  return r && o && gr(t, e, o), o;
};
const re = () => window.zeroThemeManager, $r = {
  kind: "generic",
  templateHtml: [
    "<div style='border:1px solid rgba(0,0,0,0.1);border-radius:12px;background:#ffffff;box-shadow:0 10px 25px rgba(0,0,0,0.1);min-width:250px;overflow:hidden;'>",
    "<div style='display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid rgba(0,0,0,0.05);background:#f8fafc;'>",
    "<span style='font-weight:600;color:#1e293b;font-size:0.9rem;'>Popup Dialog</span>",
    "<span style='color:#94a3b8;'>✖</span>",
    "</div>",
    "<div style='padding:20px;font-size:0.85rem;color:#64748b;display:flex;align-items:center;justify-content:center;min-height:80px;'>",
    "[ Dynamic Content Placeholder ]",
    "</div>",
    "</div>"
  ].join(""),
  badges: ["Popup", "Dialog"]
};
let B = class extends J {
  constructor() {
    super(...arguments), this.open = !1, this.hasBackdrop = !0, this.config = {
      webComponentSelector: "",
      inputs: {},
      outputs: {},
      position: "center"
    };
  }
  static getStudioTemplate(n) {
    const t = "var(--uiv-surface-color, #fff)", e = "var(--uiv-border-color, #ddd)", r = "var(--uiv-text-color, #333)", o = "var(--uiv-text-muted, #666)";
    return {
      ...$r,
      templateHtml: [
        `<div style='border:1px solid ${e};border-radius:12px;background:${t};box-shadow:var(--uiv-shadow-depth, 0 4px 12px rgba(0, 0, 0, 0.1));min-width:250px;overflow:hidden;font-family:inherit;'>`,
        `<div style='display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid ${e};background:rgba(0,0,0,0.02);'>`,
        `<span style='font-weight:600;color:${r};font-size:14px;'>Popup Dialog</span>`,
        `<span style='color:${o};cursor:pointer;'>✖</span>`,
        "</div>",
        `<div style='padding:24px;font-size:14px;color:${o};display:flex;align-items:center;justify-content:center;min-height:100px;border:1px dashed rgba(0,0,0,0.05);margin:12px;border-radius:8px;'>`,
        "[ Dynamic Content Placeholder ]",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  connectedCallback() {
    var n;
    super.connectedCallback(), (n = re()) == null || n.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var u;
    const { webComponentSelector: n, inputs: t, outputs: e, position: r } = this.config, o = this._getPositionStyle(r), a = (u = re()) == null ? void 0 : u.getActiveTheme("zero-standard-themes");
    return vt`
        <style>
          ${a ? a.getGlobalStyles() : ""}
          ${a ? a.getComponentStyles("dialog") : ""}
        </style>
        <div class="uiv-${a == null ? void 0 : a.id}-theme">
          <div class="popup-backdrop ${this.hasBackdrop && this.open ? "open" : ""}" @click=${this._close}></div>
          <div class="popup-container ${this.open ? "open" : ""} uiv-${a == null ? void 0 : a.id}-card uiv-${a == null ? void 0 : a.id}-glass" style=${_r(o)}>
            <div class="popup-header uiv-${a == null ? void 0 : a.id}-text">
              <span class="uiv-${a == null ? void 0 : a.id}-text">Popup Title</span>
              <span class="close-button uiv-${a == null ? void 0 : a.id}-text" @click=${this._close}>✖</span>
            </div>
            <div class="popup-content uiv-${a == null ? void 0 : a.id}-text">
              ${this.open && n ? vt`<${n} .inputs=${t} .outputs=${e}></${n}>` : vt`<p>No component provided.</p>`}
            </div>
            <div class="popup-arrow"></div>
          </div>
        </div>
      `;
  }
  _getPositionStyle(n) {
    switch (n) {
      case "center":
        return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
      case "top-left":
        return { top: "10px", left: "10px" };
      case "top-right":
        return { top: "10px", right: "10px" };
      case "bottom-left":
        return { bottom: "10px", left: "10px" };
      case "bottom-right":
        return { bottom: "10px", right: "10px" };
      default:
        return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    }
  }
  handlePopupClosed(n) {
    this._close();
  }
  _close() {
    this.open = !1, this.dispatchEvent(new CustomEvent("popup-closed", { detail: { open: this.open } }));
  }
};
B.styles = Fe`
      :host {
        display: block;
        font-family: var(--uiv-font-family, Arial, sans-serif);
        --popup-bg-color: var(--uiv-surface-color, #fff);
        --popup-border-color: var(--uiv-border-color, #ddd);
        --popup-font-color: var(--uiv-text-color, #333);
        --popup-shadow-color: var(--uiv-shadow-depth, 0 4px 12px rgba(0, 0, 0, 0.1));
        --popup-border-radius: var(--uiv-border-radius, 12px);
        --popup-font-size: 14px;
        --popup-header-color: var(--uiv-text-muted, #666);
        --popup-icon-color: var(--uiv-primary-color, #666);
        --popup-padding: 16px;
        --popup-width: auto;
        min-width: 200px;
      }
  
      .popup-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 99;
      }
  
      .popup-backdrop.open {
        display: block;
      }
  
      .popup-container {
        position: absolute;
        background-color: var(--popup-bg-color);
        border: 1px solid var(--popup-border-color);
        border-radius: var(--popup-border-radius);
        box-shadow: 0 4px 12px var(--popup-shadow-color);
        padding: var(--popup-padding);
        font-size: var(--popup-font-size);
        z-index: 100;
        width: var(--popup-width);
        transition: opacity 0.2s ease, transform 0.2s ease;
        opacity: 0;
        transform: translateY(-10px);
      }
  
      .popup-container.open {
        opacity: 1;
        transform: translateY(0);
      }
  
      .popup-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: var(--popup-header-color);
        margin-bottom: 8px;
      }
  
      .popup-content {
        font-size: var(--popup-font-size);
        color: var(--popup-font-color);
      }
  
      .close-button {
        cursor: pointer;
        color: var(--popup-icon-color);
      }
  
      .popup-arrow {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -100%);
        width: 0;
        height: 0;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent var(--popup-border-color) transparent;
      }
  
      .popup-arrow-outline {
        position: absolute;
        top: -9px;
        left: 50%;
        transform: translate(-50%, -30%);
        width: 0;
        height: 0;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent var(--popup-bg-color) transparent;
        z-index: 101;
      }
    `;
rt([
  At({ type: Boolean })
], B.prototype, "open", 2);
rt([
  At({ type: Boolean })
], B.prototype, "hasBackdrop", 2);
rt([
  At({ type: Object })
], B.prototype, "config", 2);
rt([
  We({
    attributeType: gt.EVENT,
    displayLabel: "On Popup Closed",
    eventTrigger: "popup-closed"
  })
], B.prototype, "handlePopupClosed", 1);
B = rt([
  ze({
    name: "popup-dialog",
    version: "1.0.0",
    title: "Popup dialog",
    elementSelector: "zero-popup-dialog",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  Le()
], B);
export {
  B as PopupDialog,
  $r as dialogTemplate
};
