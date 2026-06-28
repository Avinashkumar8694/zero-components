var Le = Object.defineProperty;
var Ge = (r, t, e) => t in r ? Le(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Gt = (r, t, e) => Ge(r, typeof t != "symbol" ? t + "" : t, e);
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
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Wt == "object" ? Wt : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = o(r);
    typeof e.Reflect < "u" && (n = o(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function o(p, A) {
      return function($, w) {
        Object.defineProperty(p, $, { configurable: !0, writable: !0, value: w }), A && A($, w);
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
    function m() {
      return l() || u();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !m && !p, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return pt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return pt({ __proto__: null });
      } : function() {
        return pt({});
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
    }, w = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : De(), C = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : je(), N = typeof WeakMap == "function" ? WeakMap : He(), G = o ? Symbol.for("@reflect-metadata:registry") : void 0, it = Re(), xt = Ne(it);
    function ve(i, s, a, d) {
      if (_(a)) {
        if (!Nt(i))
          throw new TypeError();
        if (!Ut(s))
          throw new TypeError();
        return xe(i, s);
      } else {
        if (!Nt(i))
          throw new TypeError();
        if (!S(s))
          throw new TypeError();
        if (!S(d) && !_(d) && !W(d))
          throw new TypeError();
        return W(d) && (d = void 0), a = R(a), Se(i, s, a, d);
      }
    }
    t("decorate", ve);
    function ye(i, s) {
      function a(d, y) {
        if (!S(d))
          throw new TypeError();
        if (!_(y) && !Ce(y))
          throw new TypeError();
        Pt(i, s, d, y);
      }
      return a;
    }
    t("metadata", ye);
    function me(i, s, a, d) {
      if (!S(a))
        throw new TypeError();
      return _(d) || (d = R(d)), Pt(i, s, a, d);
    }
    t("defineMetadata", me);
    function _e(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return _(a) || (a = R(a)), St(i, s, a);
    }
    t("hasMetadata", _e);
    function ge(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return _(a) || (a = R(a)), ct(i, s, a);
    }
    t("hasOwnMetadata", ge);
    function be(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return _(a) || (a = R(a)), Mt(i, s, a);
    }
    t("getMetadata", be);
    function $e(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return _(a) || (a = R(a)), Ot(i, s, a);
    }
    t("getOwnMetadata", $e);
    function we(i, s) {
      if (!S(i))
        throw new TypeError();
      return _(s) || (s = R(s)), Tt(i, s);
    }
    t("getMetadataKeys", we);
    function Ae(i, s) {
      if (!S(i))
        throw new TypeError();
      return _(s) || (s = R(s)), Ct(i, s);
    }
    t("getOwnMetadataKeys", Ae);
    function Ee(i, s, a) {
      if (!S(s))
        throw new TypeError();
      if (_(a) || (a = R(a)), !S(s))
        throw new TypeError();
      _(a) || (a = R(a));
      var d = F(
        s,
        a,
        /*Create*/
        !1
      );
      return _(d) ? !1 : d.OrdinaryDeleteMetadata(i, s, a);
    }
    t("deleteMetadata", Ee);
    function xe(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var d = i[a], y = d(s);
        if (!_(y) && !W(y)) {
          if (!Ut(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function Se(i, s, a, d) {
      for (var y = i.length - 1; y >= 0; --y) {
        var O = i[y], M = O(s, a, d);
        if (!_(M) && !W(M)) {
          if (!S(M))
            throw new TypeError();
          d = M;
        }
      }
      return d;
    }
    function St(i, s, a) {
      var d = ct(i, s, a);
      if (d)
        return !0;
      var y = ft(s);
      return W(y) ? !1 : St(i, y, a);
    }
    function ct(i, s, a) {
      var d = F(
        s,
        a,
        /*Create*/
        !1
      );
      return _(d) ? !1 : Rt(d.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Mt(i, s, a) {
      var d = ct(i, s, a);
      if (d)
        return Ot(i, s, a);
      var y = ft(s);
      if (!W(y))
        return Mt(i, y, a);
    }
    function Ot(i, s, a) {
      var d = F(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(d))
        return d.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Pt(i, s, a, d) {
      var y = F(
        a,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, a, d);
    }
    function Tt(i, s) {
      var a = Ct(i, s), d = ft(i);
      if (d === null)
        return a;
      var y = Tt(d, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var O = new C(), M = [], g = 0, c = a; g < c.length; g++) {
        var h = c[g], f = O.has(h);
        f || (O.add(h), M.push(h));
      }
      for (var v = 0, b = y; v < b.length; v++) {
        var h = b[v], f = O.has(h);
        f || (O.add(h), M.push(h));
      }
      return M;
    }
    function Ct(i, s) {
      var a = F(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
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
    function _(i) {
      return i === void 0;
    }
    function W(i) {
      return i === null;
    }
    function Me(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Oe(i, s) {
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
      var a = "string", d = Dt(i, l);
      if (d !== void 0) {
        var y = d.call(i, a);
        if (S(y))
          throw new TypeError();
        return y;
      }
      return Pe(i);
    }
    function Pe(i, s) {
      var a, d;
      {
        var y = i.toString;
        if (ot(y)) {
          var d = y.call(i);
          if (!S(d))
            return d;
        }
        var a = i.valueOf;
        if (ot(a)) {
          var d = a.call(i);
          if (!S(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Rt(i) {
      return !!i;
    }
    function Te(i) {
      return "" + i;
    }
    function R(i) {
      var s = Oe(i);
      return Me(s) ? s : Te(s);
    }
    function Nt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ot(i) {
      return typeof i == "function";
    }
    function Ut(i) {
      return typeof i == "function";
    }
    function Ce(i) {
      switch (kt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ht(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Dt(i, s) {
      var a = i[s];
      if (a != null) {
        if (!ot(a))
          throw new TypeError();
        return a;
      }
    }
    function jt(i) {
      var s = Dt(i, u);
      if (!ot(s))
        throw new TypeError();
      var a = s.call(i);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function Ht(i) {
      return i.value;
    }
    function It(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function zt(i) {
      var s = i.return;
      s && s.call(i);
    }
    function ft(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || s !== w)
        return s;
      var a = i.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return s;
      var y = d.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function ke() {
      var i;
      !_(G) && typeof e.Reflect < "u" && !(G in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Ue(e.Reflect));
      var s, a, d, y = new N(), O = {
        registerProvider: M,
        getProvider: c,
        setProvider: f
      };
      return O;
      function M(v) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case _(s):
            s = v;
            break;
          case s === v:
            break;
          case _(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            d === void 0 && (d = new C()), d.add(v);
            break;
        }
      }
      function g(v, b) {
        if (!_(s)) {
          if (s.isProviderFor(v, b))
            return s;
          if (!_(a)) {
            if (a.isProviderFor(v, b))
              return s;
            if (!_(d))
              for (var E = jt(d); ; ) {
                var x = It(E);
                if (!x)
                  return;
                var k = Ht(x);
                if (k.isProviderFor(v, b))
                  return zt(E), k;
              }
          }
        }
        if (!_(i) && i.isProviderFor(v, b))
          return i;
      }
      function c(v, b) {
        var E = y.get(v), x;
        return _(E) || (x = E.get(b)), _(x) && (x = g(v, b), _(x) || (_(E) && (E = new T(), y.set(v, E)), E.set(b, x))), x;
      }
      function h(v) {
        if (_(v))
          throw new TypeError();
        return s === v || a === v || !_(d) && d.has(v);
      }
      function f(v, b, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var x = c(v, b);
        if (x !== E) {
          if (!_(x))
            return !1;
          var k = y.get(v);
          _(k) && (k = new T(), y.set(v, k)), k.set(b, E);
        }
        return !0;
      }
    }
    function Re() {
      var i;
      return !_(G) && S(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[G]), _(i) && (i = ke()), !_(G) && S(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ne(i) {
      var s = new N(), a = {
        isProviderFor: function(h, f) {
          var v = s.get(h);
          return _(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: c
      };
      return it.registerProvider(a), a;
      function d(h, f, v) {
        var b = s.get(h), E = !1;
        if (_(b)) {
          if (!v)
            return;
          b = new T(), s.set(h, b), E = !0;
        }
        var x = b.get(f);
        if (_(x)) {
          if (!v)
            return;
          if (x = new T(), b.set(f, x), !i.setProvider(h, f, a))
            throw b.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return x;
      }
      function y(h, f, v) {
        var b = d(
          f,
          v,
          /*Create*/
          !1
        );
        return _(b) ? !1 : Rt(b.has(h));
      }
      function O(h, f, v) {
        var b = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (!_(b))
          return b.get(h);
      }
      function M(h, f, v, b) {
        var E = d(
          v,
          b,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function g(h, f) {
        var v = [], b = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (_(b))
          return v;
        for (var E = b.keys(), x = jt(E), k = 0; ; ) {
          var Lt = It(x);
          if (!Lt)
            return v.length = k, v;
          var Ie = Ht(Lt);
          try {
            v[k] = Ie;
          } catch (ze) {
            try {
              zt(x);
            } finally {
              throw ze;
            }
          }
          k++;
        }
      }
      function c(h, f, v) {
        var b = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (_(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var E = s.get(f);
          _(E) || (E.delete(v), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Ue(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, d = i.getOwnMetadata, y = i.getOwnMetadataKeys, O = i.deleteMetadata, M = new N(), g = {
        isProviderFor: function(c, h) {
          var f = M.get(c);
          return !_(f) && f.has(h) ? !0 : y(c, h).length ? (_(f) && (f = new C(), M.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: O
      };
      return g;
    }
    function F(i, s, a) {
      var d = it.getProvider(i, s);
      if (!_(d))
        return d;
      if (a) {
        if (it.setProvider(i, s, xt))
          return xt;
        throw new Error("Illegal state.");
      }
    }
    function De() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function g(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, g.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
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
          }), g.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, g.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, g.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, v = h + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, ht(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(c, h) {
            if (!ht(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ht(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return d;
      function y(g, c) {
        return g;
      }
      function O(g, c) {
        return c;
      }
      function M(g, c) {
        return [g, c];
      }
    }
    function je() {
      var i = (
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
      return i;
    }
    function He() {
      var i = 16, s = $.create(), a = d();
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
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var v = y(
              h,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
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
          c = "@@WeakMap@@" + g();
        while ($.has(s, c));
        return s[c] = !0, c;
      }
      function y(c, h) {
        if (!n.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: $.create() });
        }
        return c[a];
      }
      function O(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function M(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : O(h, c), h;
        }
        return O(new Array(c), c);
      }
      function g() {
        var c = M(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var v = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function pt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Bt || (Bt = {}));
function We(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Be(r) {
  return function(t) {
    if (We(r)) {
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
function le(r) {
  return Be(r);
}
function ue(r) {
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
      update(l) {
        try {
          super.update(l);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var A;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const $ = new CSSStyleSheet(), w = (A = l.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((T) => $.insertRule(T.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          p.appendChild($);
        }
        u.forEach(($) => {
          const w = $.cloneNode(!0);
          p.appendChild(w);
        });
      }
    }
    return e;
  };
}
function Ve(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function qe(r) {
  return function(t, e) {
    try {
      Ve(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let o = !0;
      if (typeof e == "string") {
        try {
          o = typeof t[e] != "function";
        } catch {
          o = !0;
        }
        o && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function gt(r) {
  return qe(r);
}
var Q;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(Q || (Q = {}));
var K;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(K || (K = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = globalThis, bt = st.ShadowRoot && (st.ShadyCSS === void 0 || st.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $t = Symbol(), Vt = /* @__PURE__ */ new WeakMap();
let de = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== $t) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (bt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Vt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Vt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Fe = (r) => new de(typeof r == "string" ? r : r + "", void 0, $t), Xe = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new de(e, r, $t);
}, Ye = (r, t) => {
  if (bt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), o = st.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = e.cssText, r.appendChild(n);
  }
}, qt = bt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Fe(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ze, defineProperty: Je, getOwnPropertyDescriptor: Qe, getOwnPropertyNames: Ke, getOwnPropertySymbols: tr, getPrototypeOf: er } = Object, D = globalThis, Ft = D.trustedTypes, rr = Ft ? Ft.emptyScript : "", vt = D.reactiveElementPolyfillSupport, Y = (r, t) => r, at = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? rr : null;
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
} }, wt = (r, t) => !Ze(r, t), Xt = { attribute: !0, type: String, converter: at, reflect: !1, useDefault: !1, hasChanged: wt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let B = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Xt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(t, n, e);
      o !== void 0 && Je(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: o, set: l } = Qe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: o, set(u) {
      const m = o == null ? void 0 : o.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Xt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const t = er(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const e = this.properties, n = [...Ke(e), ...tr(e)];
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
      for (const o of n) e.unshift(qt(o));
    } else t !== void 0 && e.push(qt(t));
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
    return Ye(t, this.constructor.elementStyles), t;
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
    const n = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, n);
    if (o !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : at).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, o = n._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const m = n.getPropertyOptions(o), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : at;
      this._$Em = o;
      const A = p.fromAttribute(e, m.type);
      this[o] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, o = !1, l) {
    var u;
    if (t !== void 0) {
      const m = this.constructor;
      if (o === !1 && (l = this[t]), n ?? (n = m.getPropertyOptions(t)), !((n.hasChanged ?? wt)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(m._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: o, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) {
        const { wrapped: m } = u, p = this[l];
        m !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
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
    (e = this._$EO) == null || e.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
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
const Z = globalThis, Yt = (r) => r, lt = Z.trustedTypes, Zt = lt ? lt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ce = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, he = "?" + U, nr = `<${he}>`, z = document, tt = () => z.createComment(""), et = (r) => r === null || typeof r != "object" && typeof r != "function", At = Array.isArray, ir = (r) => At(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", yt = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jt = /-->/g, Qt = />/g, j = RegExp(`>|${yt}(?:([^\\s"'>=/]+)(${yt}*=${yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Kt = /'/g, te = /"/g, fe = /^(?:script|style|textarea|title)$/i, or = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), ee = or(1), V = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), re = /* @__PURE__ */ new WeakMap(), H = z.createTreeWalker(z, 129);
function pe(r, t) {
  if (!At(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Zt !== void 0 ? Zt.createHTML(t) : t;
}
const sr = (r, t) => {
  const e = r.length - 1, n = [];
  let o, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = X;
  for (let m = 0; m < e; m++) {
    const p = r[m];
    let A, $, w = -1, T = 0;
    for (; T < p.length && (u.lastIndex = T, $ = u.exec(p), $ !== null); ) T = u.lastIndex, u === X ? $[1] === "!--" ? u = Jt : $[1] !== void 0 ? u = Qt : $[2] !== void 0 ? (fe.test($[2]) && (o = RegExp("</" + $[2], "g")), u = j) : $[3] !== void 0 && (u = j) : u === j ? $[0] === ">" ? (u = o ?? X, w = -1) : $[1] === void 0 ? w = -2 : (w = u.lastIndex - $[2].length, A = $[1], u = $[3] === void 0 ? j : $[3] === '"' ? te : Kt) : u === te || u === Kt ? u = j : u === Jt || u === Qt ? u = X : (u = j, o = void 0);
    const C = u === j && r[m + 1].startsWith("/>") ? " " : "";
    l += u === X ? p + nr : w >= 0 ? (n.push(A), p.slice(0, w) + ce + p.slice(w) + U + C) : p + U + (w === -2 ? m : C);
  }
  return [pe(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class rt {
  constructor({ strings: t, _$litType$: e }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const m = t.length - 1, p = this.parts, [A, $] = sr(t, e);
    if (this.el = rt.createElement(A, n), H.currentNode = this.el.content, e === 2 || e === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = H.nextNode()) !== null && p.length < m; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(ce)) {
          const T = $[u++], C = o.getAttribute(w).split(U), N = /([.?@])?(.*)/.exec(T);
          p.push({ type: 1, index: l, name: N[2], strings: C, ctor: N[1] === "." ? lr : N[1] === "?" ? ur : N[1] === "@" ? dr : ut }), o.removeAttribute(w);
        } else w.startsWith(U) && (p.push({ type: 6, index: l }), o.removeAttribute(w));
        if (fe.test(o.tagName)) {
          const w = o.textContent.split(U), T = w.length - 1;
          if (T > 0) {
            o.textContent = lt ? lt.emptyScript : "";
            for (let C = 0; C < T; C++) o.append(w[C], tt()), H.nextNode(), p.push({ type: 2, index: ++l });
            o.append(w[T], tt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === he) p.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(U, w + 1)) !== -1; ) p.push({ type: 7, index: l }), w += U.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = z.createElement("template");
    return n.innerHTML = t, n;
  }
}
function q(r, t, e = r, n) {
  var u, m;
  if (t === V) return t;
  let o = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = et(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((m = o == null ? void 0 : o._$AO) == null || m.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = o : e._$Cl = o), o !== void 0 && (t = q(r, o._$AS(r, t.values), o, n)), t;
}
class ar {
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
    H.currentNode = o;
    let l = H.nextNode(), u = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new nt(l, l.nextSibling, this, t) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (A = new cr(l, this, t)), this._$AV.push(A), p = n[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = H.nextNode(), u++);
    }
    return H.currentNode = z, o;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class nt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, o) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    t = q(this, t, e), et(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== V && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ir(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && et(this._$AH) ? this._$AA.nextSibling.data = t : this.T(z.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = rt.createElement(pe(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(e);
    else {
      const u = new ar(o, this), m = u.u(this.options);
      u.p(e), this.T(m), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = re.get(t.strings);
    return e === void 0 && re.set(t.strings, e = new rt(t)), e;
  }
  k(t) {
    At(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, o = 0;
    for (const l of t) o === e.length ? e.push(n = new nt(this.O(tt()), this.O(tt()), this, this.options)) : n = e[o], n._$AI(l), o++;
    o < e.length && (this._$AR(n && n._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const o = Yt(t).nextSibling;
      Yt(t).remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class ut {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, o, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(t, e = this, n, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = q(this, t, e, 0), u = !et(t) || t !== this._$AH && t !== V, u && (this._$AH = t);
    else {
      const m = t;
      let p, A;
      for (t = l[0], p = 0; p < l.length - 1; p++) A = q(this, m[n + p], e, p), A === V && (A = this._$AH[p]), u || (u = !et(A) || A !== this._$AH[p]), A === P ? t = P : t !== P && (t += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !o && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class lr extends ut {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class ur extends ut {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class dr extends ut {
  constructor(t, e, n, o, l) {
    super(t, e, n, o, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = q(this, t, e, 0) ?? P) === V) return;
    const n = this._$AH, o = t === P && n !== P || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== P && (n === P || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class cr {
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
const mt = Z.litHtmlPolyfillSupport;
mt == null || mt(rt, nt), (Z.litHtmlVersions ?? (Z.litHtmlVersions = [])).push("3.3.3");
const hr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = o = new nt(t.insertBefore(tt(), l), l, void 0, e ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = globalThis;
class J extends B {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = hr(e, this.renderRoot, this.renderOptions);
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
    return V;
  }
}
var ae;
J._$litElement$ = !0, J.finalized = !0, (ae = I.litElementHydrateSupport) == null || ae.call(I, { LitElement: J });
const _t = I.litElementPolyfillSupport;
_t == null || _t({ LitElement: J });
(I.litElementVersions ?? (I.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr = { attribute: !0, type: String, converter: at, reflect: !1, hasChanged: wt }, pr = (r = fr, t, e) => {
  const { kind: n, metadata: o } = e;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(m) {
      const p = t.get.call(this);
      t.set.call(this, m), this.requestUpdate(u, p, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(m) {
      const p = this[u];
      t.call(this, m), this.requestUpdate(u, p, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Et(r) {
  return (t, e) => typeof e == "object" ? pr(r, t, e) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, t, e);
}
var vr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, dt = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? yr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(t, e, o) : u(o)) || o);
  return n && o && vr(t, e, o), o;
};
const ne = () => window.zeroThemeManager, ie = {
  kind: "generic",
  slots: [
    { id: "default", label: "Tooltip Anchor Content", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='position:relative;display:inline-block;padding:16px;border:2px dashed rgba(148,163,184,0.3);border-radius:8px;background:rgba(255,255,255,0.5);'>",
    "<div style='position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:var(--uiv-primary-color,#1e293b);color:#fff;padding:4px 8px;border-radius:4px;font-size:0.7rem;white-space:nowrap;z-index:10;'>{{display:text}}</div>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>"
  ].join(""),
  textProp: "text",
  badges: ["Tooltip", "Overlay"]
};
function mr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let L = class extends J {
  constructor() {
    super(...arguments), this.theme = "modern", this.text = "Tooltip text", this.position = "top";
  }
  static getStudioTemplate(r) {
    var m, p, A, $;
    if (!r) return ie;
    const t = mr(r.studio.display.text || "Tooltip text"), e = (((m = r.props) == null ? void 0 : m.position) ?? ((p = r.studio.props) == null ? void 0 : p.position)) || "top", o = (((A = r.props) == null ? void 0 : A.theme) ?? (($ = r.studio.props) == null ? void 0 : $.theme)) === "glass" ? "rgba(0,0,0,0.8)" : "var(--uiv-surface-color, #1e293b)", l = "var(--uiv-text-color, #fff)";
    let u = "";
    return e === "top" ? u = "bottom:110%;left:50%;transform:translateX(-50%);" : e === "bottom" ? u = "top:110%;left:50%;transform:translateX(-50%);" : e === "left" ? u = "right:110%;top:50%;transform:translateY(-50%);" : e === "right" && (u = "left:110%;top:50%;transform:translateY(-50%);"), {
      ...ie,
      templateHtml: [
        "<div style='position:relative;display:inline-block;padding:20px;border:2px dashed rgba(148,163,184,0.3);border-radius:8px;'>",
        `<div style='position:absolute; ${u} background:${o}; color:${l}; padding:6px 12px; border-radius:8px; font-size:12px; white-space:nowrap; z-index:100; box-shadow:0 4px 12px rgba(0,0,0,0.2);'>${t}</div>`,
        "<div style='min-width:40px;min-height:40px;'>",
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = ne()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var t;
    const r = (t = ne()) == null ? void 0 : t.getActiveTheme();
    return r ? ee`
            <style>
                ${r.getGlobalStyles()}
                ${r.getComponentStyles("tooltip")}
                :host {
                    --uiv-tooltip-bg: ${this.theme === "glass" ? "rgba(0,0,0,0.8)" : "#333"};
                }
            </style>
            <div class="tooltip-container uiv-${r.id}-theme">
                <slot></slot>
                <span class="tooltip-text uiv-${r.id}-card uiv-${r.id}-text ${this.position}">${this.text}</span>
            </div>
        ` : ee`<div class="tooltip-container"><slot></slot></div>`;
  }
};
L.styles = Xe`
        :host {
            display: inline-block;
            position: relative;
        }

        .tooltip-container {
            position: relative;
            display: inline-block;
        }

        .tooltip-text {
            visibility: hidden;
            width: 140px;
            background-color: var(--uiv-surface-color, #1e293b);
            color: var(--uiv-primary-color, #fff);
            text-align: center;
            border-radius: 10px;
            padding: 10px 14px;
            position: absolute;
            z-index: 1000;
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            font-size: 0.85rem;
            font-weight: 600;
            border: 1px solid var(--uiv-border-color);
            box-shadow: var(--uiv-shadow-depth, 0 10px 15px -3px rgba(0, 0, 0, 0.2));
            transform: translateX(-50%) translateY(10px);
        }

        .tooltip-container:hover .tooltip-text {
            visibility: visible;
            opacity: 1;
        }

        /* Positions */
        .top { bottom: 130%; left: 50%; transform: translateX(-50%) translateY(0); }
        .bottom { top: 130%; left: 50%; transform: translateX(-50%) translateY(0); }
        .left { top: 50%; right: 115%; transform: translateY(-50%) translateX(0); }
        .right { top: 50%; left: 115%; transform: translateY(-50%) translateX(0); }

        .tooltip-text::after {
            content: "";
            position: absolute;
            border-width: 6px;
            border-style: solid;
        }

        .top::after { top: 100%; left: 50%; margin-left: -6px; border-color: var(--uiv-border-color) transparent transparent transparent; }
        .bottom::after { bottom: 100%; left: 50%; margin-left: -6px; border-color: transparent transparent var(--uiv-border-color) transparent; }
    `;
dt([
  Et({ type: String }),
  gt({
    attributeType: K.PROPERTY,
    uiComponentType: Q.DROPDOWN,
    displayLabel: "Theme",
    fieldMappings: "theme",
    optionItems: [
      { label: "Modern", value: "modern" },
      { label: "Glass", value: "glass" }
    ]
  })
], L.prototype, "theme", 2);
dt([
  Et({ type: String }),
  gt({
    attributeType: K.PROPERTY,
    uiComponentType: Q.TEXT_INPUT,
    displayLabel: "Text",
    fieldMappings: "text"
  })
], L.prototype, "text", 2);
dt([
  Et({ type: String }),
  gt({
    attributeType: K.PROPERTY,
    uiComponentType: Q.DROPDOWN,
    displayLabel: "Position",
    fieldMappings: "position",
    optionItems: [
      { label: "Top", value: "top" },
      { label: "Bottom", value: "bottom" },
      { label: "Left", value: "left" },
      { label: "Right", value: "right" }
    ]
  })
], L.prototype, "position", 2);
L = dt([
  le({
    name: "zero-uiv-tooltip",
    version: "1.0.0",
    title: "Unified Tooltip",
    elementSelector: "zero-uiv-tooltip",
    group: "Uiverse Tooltip",
    iconName: "tooltip-icon.png"
  }),
  ue()
], L);
var _r = Object.getOwnPropertyDescriptor, gr = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? _r(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = u(o) || o);
  return o;
};
const oe = {
  kind: "generic",
  slots: [
    { id: "default", label: "Tooltip Anchor", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='position:relative;display:inline-block;padding:16px;border:2px dashed rgba(148,163,184,0.3);border-radius:8px;background:rgba(255,255,255,0.8);'>",
    "<div style='position:absolute;top:-25px;left:50%;transform:translateX(-50%);background:#fff;border:1px solid #e2e8f0;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);color:#0f172a;padding:6px 12px;border-radius:6px;font-size:0.75rem;white-space:nowrap;z-index:10;font-weight:600;'>{{display:text}}</div>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>"
  ].join(""),
  textProp: "text",
  badges: ["Modern", "Tooltip"]
};
function br(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let se = class extends L {
  static getStudioTemplate(r) {
    if (!r) return oe;
    const t = br(r.studio.display.text || "Tooltip string");
    return {
      ...oe,
      templateHtml: [
        "<div style='position:relative;display:inline-block;padding:20px;border:2px dashed rgba(148,163,184,0.3);border-radius:12px;'>",
        `<div style='position:absolute;top:-30px;left:50%;transform:translateX(-50%);background:var(--uiv-surface-color, #fff);border:1px solid rgba(0,0,0,0.05);box-shadow:0 10px 15px -3px rgba(0,0,0,0.1);color:var(--uiv-text-color, #0f172a);padding:8px 14px;border-radius:10px;font-size:13px;white-space:nowrap;z-index:10;font-weight:600;'>${t}</div>`,
        "<div style='min-width:40px;min-height:40px;'>",
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  constructor() {
    super(), this.theme = "modern";
  }
};
se = gr([
  le({
    name: "zero-uiv-tooltip-modern",
    version: "1.0.0",
    title: "Modern Tooltip (Legacy)",
    elementSelector: "zero-uiv-tooltip-modern",
    group: "Uiverse Tooltip",
    iconName: "tooltip-icon.png"
  }),
  ue()
], se);
export {
  se as ZeroUivTooltipModern,
  oe as modernTemplate
};
