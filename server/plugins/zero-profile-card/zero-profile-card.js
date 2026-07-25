var Ue = Object.defineProperty;
var Ne = (r, t, e) => t in r ? Ue(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Qt = (r, t, e) => Ne(r, typeof t != "symbol" ? t + "" : t, e);
var Kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var te;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Kt == "object" ? Kt : typeof self == "object" ? self : typeof this == "object" ? this : m(), i = s(r);
    typeof e.Reflect < "u" && (i = s(e.Reflect, i)), t(i, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(p, A) {
      return function(g, b) {
        Object.defineProperty(p, g, { configurable: !0, writable: !0, value: b }), A && A(g, b);
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
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !m && !p, g = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return Pt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Pt({ __proto__: null });
      } : function() {
        return Pt({});
      },
      has: A ? function(n, a) {
        return i.call(n, a);
      } : function(n, a) {
        return a in n;
      },
      get: A ? function(n, a) {
        return i.call(n, a) ? n[a] : void 0;
      } : function(n, a) {
        return n[a];
      }
    }, b = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pe(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ce(), T = typeof WeakMap == "function" ? WeakMap : ke(), D = s ? Symbol.for("@reflect-metadata:registry") : void 0, V = Me(), Q = Oe(V);
    function dt(n, a, o, d) {
      if (_(o)) {
        if (!Wt(n))
          throw new TypeError();
        if (!Bt(a))
          throw new TypeError();
        return $t(n, a);
      } else {
        if (!Wt(n))
          throw new TypeError();
        if (!O(a))
          throw new TypeError();
        if (!O(d) && !_(d) && !Z(d))
          throw new TypeError();
        return Z(d) && (d = void 0), o = N(o), wt(n, a, o, d);
      }
    }
    t("decorate", dt);
    function ht(n, a) {
      function o(d, y) {
        if (!O(d))
          throw new TypeError();
        if (!_(y) && !Ee(y))
          throw new TypeError();
        It(n, a, d, y);
      }
      return o;
    }
    t("metadata", ht);
    function ct(n, a, o, d) {
      if (!O(o))
        throw new TypeError();
      return _(d) || (d = N(d)), It(n, a, o, d);
    }
    t("defineMetadata", ct);
    function ft(n, a, o) {
      if (!O(a))
        throw new TypeError();
      return _(o) || (o = N(o)), K(n, a, o);
    }
    t("hasMetadata", ft);
    function pt(n, a, o) {
      if (!O(a))
        throw new TypeError();
      return _(o) || (o = N(o)), F(n, a, o);
    }
    t("hasOwnMetadata", pt);
    function vt(n, a, o) {
      if (!O(a))
        throw new TypeError();
      return _(o) || (o = N(o)), tt(n, a, o);
    }
    t("getMetadata", vt);
    function yt(n, a, o) {
      if (!O(a))
        throw new TypeError();
      return _(o) || (o = N(o)), Ht(n, a, o);
    }
    t("getOwnMetadata", yt);
    function mt(n, a) {
      if (!O(n))
        throw new TypeError();
      return _(a) || (a = N(a)), Lt(n, a);
    }
    t("getMetadataKeys", mt);
    function _t(n, a) {
      if (!O(n))
        throw new TypeError();
      return _(a) || (a = N(a)), zt(n, a);
    }
    t("getOwnMetadataKeys", _t);
    function bt(n, a, o) {
      if (!O(a))
        throw new TypeError();
      if (_(o) || (o = N(o)), !O(a))
        throw new TypeError();
      _(o) || (o = N(o));
      var d = et(
        a,
        o,
        /*Create*/
        !1
      );
      return _(d) ? !1 : d.OrdinaryDeleteMetadata(n, a, o);
    }
    t("deleteMetadata", bt);
    function $t(n, a) {
      for (var o = n.length - 1; o >= 0; --o) {
        var d = n[o], y = d(a);
        if (!_(y) && !Z(y)) {
          if (!Bt(y))
            throw new TypeError();
          a = y;
        }
      }
      return a;
    }
    function wt(n, a, o, d) {
      for (var y = n.length - 1; y >= 0; --y) {
        var P = n[y], x = P(a, o, d);
        if (!_(x) && !Z(x)) {
          if (!O(x))
            throw new TypeError();
          d = x;
        }
      }
      return d;
    }
    function K(n, a, o) {
      var d = F(n, a, o);
      if (d)
        return !0;
      var y = xt(a);
      return Z(y) ? !1 : K(n, y, o);
    }
    function F(n, a, o) {
      var d = et(
        a,
        o,
        /*Create*/
        !1
      );
      return _(d) ? !1 : Gt(d.OrdinaryHasOwnMetadata(n, a, o));
    }
    function tt(n, a, o) {
      var d = F(n, a, o);
      if (d)
        return Ht(n, a, o);
      var y = xt(a);
      if (!Z(y))
        return tt(n, y, o);
    }
    function Ht(n, a, o) {
      var d = et(
        a,
        o,
        /*Create*/
        !1
      );
      if (!_(d))
        return d.OrdinaryGetOwnMetadata(n, a, o);
    }
    function It(n, a, o, d) {
      var y = et(
        o,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(n, a, o, d);
    }
    function Lt(n, a) {
      var o = zt(n, a), d = xt(n);
      if (d === null)
        return o;
      var y = Lt(d, a);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var P = new k(), x = [], $ = 0, h = o; $ < h.length; $++) {
        var c = h[$], f = P.has(c);
        f || (P.add(c), x.push(c));
      }
      for (var v = 0, w = y; v < w.length; v++) {
        var c = w[v], f = P.has(c);
        f || (P.add(c), x.push(c));
      }
      return x;
    }
    function zt(n, a) {
      var o = et(
        n,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(n, a) : [];
    }
    function Vt(n) {
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
    function _(n) {
      return n === void 0;
    }
    function Z(n) {
      return n === null;
    }
    function $e(n) {
      return typeof n == "symbol";
    }
    function O(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function we(n, a) {
      switch (Vt(n)) {
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
      var o = "string", d = qt(n, l);
      if (d !== void 0) {
        var y = d.call(n, o);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return ge(n);
    }
    function ge(n, a) {
      var o, d;
      {
        var y = n.toString;
        if (gt(y)) {
          var d = y.call(n);
          if (!O(d))
            return d;
        }
        var o = n.valueOf;
        if (gt(o)) {
          var d = o.call(n);
          if (!O(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Gt(n) {
      return !!n;
    }
    function Ae(n) {
      return "" + n;
    }
    function N(n) {
      var a = we(n);
      return $e(a) ? a : Ae(a);
    }
    function Wt(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function gt(n) {
      return typeof n == "function";
    }
    function Bt(n) {
      return typeof n == "function";
    }
    function Ee(n) {
      switch (Vt(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ot(n, a) {
      return n === a || n !== n && a !== a;
    }
    function qt(n, a) {
      var o = n[a];
      if (o != null) {
        if (!gt(o))
          throw new TypeError();
        return o;
      }
    }
    function Ft(n) {
      var a = qt(n, u);
      if (!gt(a))
        throw new TypeError();
      var o = a.call(n);
      if (!O(o))
        throw new TypeError();
      return o;
    }
    function Zt(n) {
      return n.value;
    }
    function Xt(n) {
      var a = n.next();
      return a.done ? !1 : a;
    }
    function Jt(n) {
      var a = n.return;
      a && a.call(n);
    }
    function xt(n) {
      var a = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === b || a !== b)
        return a;
      var o = n.prototype, d = o && Object.getPrototypeOf(o);
      if (d == null || d === Object.prototype)
        return a;
      var y = d.constructor;
      return typeof y != "function" || y === n ? a : y;
    }
    function Se() {
      var n;
      !_(D) && typeof e.Reflect < "u" && !(D in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (n = xe(e.Reflect));
      var a, o, d, y = new T(), P = {
        registerProvider: x,
        getProvider: h,
        setProvider: f
      };
      return P;
      function x(v) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === v:
            break;
          case _(a):
            a = v;
            break;
          case a === v:
            break;
          case _(o):
            o = v;
            break;
          case o === v:
            break;
          default:
            d === void 0 && (d = new k()), d.add(v);
            break;
        }
      }
      function $(v, w) {
        if (!_(a)) {
          if (a.isProviderFor(v, w))
            return a;
          if (!_(o)) {
            if (o.isProviderFor(v, w))
              return a;
            if (!_(d))
              for (var E = Ft(d); ; ) {
                var S = Xt(E);
                if (!S)
                  return;
                var R = Zt(S);
                if (R.isProviderFor(v, w))
                  return Jt(E), R;
              }
          }
        }
        if (!_(n) && n.isProviderFor(v, w))
          return n;
      }
      function h(v, w) {
        var E = y.get(v), S;
        return _(E) || (S = E.get(w)), _(S) && (S = $(v, w), _(S) || (_(E) && (E = new M(), y.set(v, E)), E.set(w, S))), S;
      }
      function c(v) {
        if (_(v))
          throw new TypeError();
        return a === v || o === v || !_(d) && d.has(v);
      }
      function f(v, w, E) {
        if (!c(E))
          throw new Error("Metadata provider not registered.");
        var S = h(v, w);
        if (S !== E) {
          if (!_(S))
            return !1;
          var R = y.get(v);
          _(R) && (R = new M(), y.set(v, R)), R.set(w, E);
        }
        return !0;
      }
    }
    function Me() {
      var n;
      return !_(D) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (n = e.Reflect[D]), _(n) && (n = Se()), !_(D) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, D, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Oe(n) {
      var a = new T(), o = {
        isProviderFor: function(c, f) {
          var v = a.get(c);
          return _(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: h
      };
      return V.registerProvider(o), o;
      function d(c, f, v) {
        var w = a.get(c), E = !1;
        if (_(w)) {
          if (!v)
            return;
          w = new M(), a.set(c, w), E = !0;
        }
        var S = w.get(f);
        if (_(S)) {
          if (!v)
            return;
          if (S = new M(), w.set(f, S), !n.setProvider(c, f, o))
            throw w.delete(f), E && a.delete(c), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(c, f, v) {
        var w = d(
          f,
          v,
          /*Create*/
          !1
        );
        return _(w) ? !1 : Gt(w.has(c));
      }
      function P(c, f, v) {
        var w = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (!_(w))
          return w.get(c);
      }
      function x(c, f, v, w) {
        var E = d(
          v,
          w,
          /*Create*/
          !0
        );
        E.set(c, f);
      }
      function $(c, f) {
        var v = [], w = d(
          c,
          f,
          /*Create*/
          !1
        );
        if (_(w))
          return v;
        for (var E = w.keys(), S = Ft(E), R = 0; ; ) {
          var Yt = Xt(S);
          if (!Yt)
            return v.length = R, v;
          var Te = Zt(Yt);
          try {
            v[R] = Te;
          } catch (Re) {
            try {
              Jt(S);
            } finally {
              throw Re;
            }
          }
          R++;
        }
      }
      function h(c, f, v) {
        var w = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (_(w) || !w.delete(c))
          return !1;
        if (w.size === 0) {
          var E = a.get(f);
          _(E) || (E.delete(v), E.size === 0 && a.delete(E));
        }
        return !0;
      }
    }
    function xe(n) {
      var a = n.defineMetadata, o = n.hasOwnMetadata, d = n.getOwnMetadata, y = n.getOwnMetadataKeys, P = n.deleteMetadata, x = new T(), $ = {
        isProviderFor: function(h, c) {
          var f = x.get(h);
          return !_(f) && f.has(c) ? !0 : y(h, c).length ? (_(f) && (f = new k(), x.set(h, f)), f.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return $;
    }
    function et(n, a, o) {
      var d = V.getProvider(n, a);
      if (!_(d))
        return d;
      if (o) {
        if (V.setProvider(n, a, Q))
          return Q;
        throw new Error("Illegal state.");
      }
    }
    function Pe() {
      var n = {}, a = [], o = (
        /** @class */
        function() {
          function $(h, c, f) {
            this._index = 0, this._keys = h, this._values = c, this._selector = f;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[u] = function() {
            return this;
          }, $.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var c = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), h;
          }, $.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: h, done: !0 };
          }, $;
        }()
      ), d = (
        /** @class */
        function() {
          function $() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty($.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), $.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, $.prototype.get = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, $.prototype.set = function(h, c) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = c, this;
          }, $.prototype.delete = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var f = this._keys.length, v = c + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, Ot(h, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new o(this._keys, this._values, y);
          }, $.prototype.values = function() {
            return new o(this._keys, this._values, P);
          }, $.prototype.entries = function() {
            return new o(this._keys, this._values, x);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[u] = function() {
            return this.entries();
          }, $.prototype._find = function(h, c) {
            if (!Ot(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (Ot(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return d;
      function y($, h) {
        return $;
      }
      function P($, h) {
        return h;
      }
      function x($, h) {
        return [$, h];
      }
    }
    function Ce() {
      var n = (
        /** @class */
        function() {
          function a() {
            this._map = new M();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(o) {
            return this._map.has(o);
          }, a.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, a.prototype.delete = function(o) {
            return this._map.delete(o);
          }, a.prototype.clear = function() {
            this._map.clear();
          }, a.prototype.keys = function() {
            return this._map.keys();
          }, a.prototype.values = function() {
            return this._map.keys();
          }, a.prototype.entries = function() {
            return this._map.entries();
          }, a.prototype["@@iterator"] = function() {
            return this.keys();
          }, a.prototype[u] = function() {
            return this.keys();
          }, a;
        }()
      );
      return n;
    }
    function ke() {
      var n = 16, a = g.create(), o = d();
      return (
        /** @class */
        function() {
          function h() {
            this._key = d();
          }
          return h.prototype.has = function(c) {
            var f = y(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? g.has(f, this._key) : !1;
          }, h.prototype.get = function(c) {
            var f = y(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? g.get(f, this._key) : void 0;
          }, h.prototype.set = function(c, f) {
            var v = y(
              c,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
          }, h.prototype.delete = function(c) {
            var f = y(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = d();
          }, h;
        }()
      );
      function d() {
        var h;
        do
          h = "@@WeakMap@@" + $();
        while (g.has(a, h));
        return a[h] = !0, h;
      }
      function y(h, c) {
        if (!i.call(h, o)) {
          if (!c)
            return;
          Object.defineProperty(h, o, { value: g.create() });
        }
        return h[o];
      }
      function P(h, c) {
        for (var f = 0; f < c; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function x(h) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : P(c, h), c;
        }
        return P(new Array(h), h);
      }
      function $() {
        var h = x(n);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var c = "", f = 0; f < n; ++f) {
          var v = h[f];
          (f === 4 || f === 6 || f === 8) && (c += "-"), v < 16 && (c += "0"), c += v.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function Pt(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(te || (te = {}));
function De(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function je(r) {
  return function(t) {
    if (De(r)) {
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
        const i = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(i))
          try {
            customElements.define(i, t);
          } catch {
            try {
              customElements.define(i, class extends t {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, l);
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
  return je(r);
}
function Ie(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Qt(this, "_stylesApplied", !1);
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
          const g = new CSSStyleSheet(), b = (A = l.sheet) == null ? void 0 : A.cssRules;
          b && (Array.from(b).forEach((M) => g.insertRule(M.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, g]);
        } else if (l) {
          const g = l.cloneNode(!0);
          p.appendChild(g);
        }
        u.forEach((g) => {
          const b = g.cloneNode(!0);
          p.appendChild(b);
        });
      }
    }
    return e;
  };
}
var ee;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(ee || (ee = {}));
var re;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(re || (re = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const At = globalThis, Ut = At.ShadowRoot && (At.ShadyCSS === void 0 || At.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Nt = Symbol(), ne = /* @__PURE__ */ new WeakMap();
let ve = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== Nt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Ut && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = ne.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && ne.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Le = (r) => new ve(typeof r == "string" ? r : r + "", void 0, Nt), ze = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((i, s, l) => i + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ve(e, r, Nt);
}, Ve = (r, t) => {
  if (Ut) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), s = At.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = e.cssText, r.appendChild(i);
  }
}, ie = Ut ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return Le(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ge, defineProperty: We, getOwnPropertyDescriptor: Be, getOwnPropertyNames: qe, getOwnPropertySymbols: Fe, getPrototypeOf: Ze } = Object, L = globalThis, se = L.trustedTypes, Xe = se ? se.emptyScript : "", Ct = L.reactiveElementPolyfillSupport, nt = (r, t) => r, Et = { toAttribute(r, t) {
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
} }, Dt = (r, t) => !Ge(r, t), ae = { attribute: !0, type: String, converter: Et, reflect: !1, useDefault: !1, hasChanged: Dt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = ae) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && We(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: s, set: l } = Be(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, m, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? ae;
  }
  static _$Ei() {
    if (this.hasOwnProperty(nt("elementProperties"))) return;
    const t = Ze(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(nt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(nt("properties"))) {
      const e = this.properties, i = [...qe(e), ...Fe(e)];
      for (const s of i) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, s] of e) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const s = this._$Eu(e, i);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i) e.unshift(ie(s));
    } else t !== void 0 && e.push(ie(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ve(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) == null ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) == null ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$ET(t, e) {
    var l;
    const i = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, i);
    if (s !== void 0 && i.reflect === !0) {
      const u = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : Et).toAttribute(e, i.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const i = this.constructor, s = i._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const m = i.getPropertyOptions(s), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : Et;
      this._$Em = s;
      const A = p.fromAttribute(e, m.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, s = !1, l) {
    var u;
    if (t !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[t]), i ?? (i = m.getPropertyOptions(t)), !((i.hasChanged ?? Dt)(l, e) || i.useDefault && i.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(m._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: s, wrapped: l }, u) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: m } = u, p = this[l];
        m !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (i = this._$EO) == null || i.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
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
    (e = this._$EO) == null || e.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[nt("elementProperties")] = /* @__PURE__ */ new Map(), X[nt("finalized")] = /* @__PURE__ */ new Map(), Ct == null || Ct({ ReactiveElement: X }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = globalThis, oe = (r) => r, St = it.trustedTypes, le = St ? St.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ye = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, me = "?" + I, Je = `<${me}>`, q = document, at = () => q.createComment(""), ot = (r) => r === null || typeof r != "object" && typeof r != "function", jt = Array.isArray, Ye = (r) => jt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", kt = `[ 	
\f\r]`, rt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ue = /-->/g, de = />/g, G = RegExp(`>|${kt}(?:([^\\s"'>=/]+)(${kt}*=${kt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), he = /'/g, ce = /"/g, _e = /^(?:script|style|textarea|title)$/i, Qe = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), Ke = Qe(1), J = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), fe = /* @__PURE__ */ new WeakMap(), W = q.createTreeWalker(q, 129);
function be(r, t) {
  if (!jt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return le !== void 0 ? le.createHTML(t) : t;
}
const tr = (r, t) => {
  const e = r.length - 1, i = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = rt;
  for (let m = 0; m < e; m++) {
    const p = r[m];
    let A, g, b = -1, M = 0;
    for (; M < p.length && (u.lastIndex = M, g = u.exec(p), g !== null); ) M = u.lastIndex, u === rt ? g[1] === "!--" ? u = ue : g[1] !== void 0 ? u = de : g[2] !== void 0 ? (_e.test(g[2]) && (s = RegExp("</" + g[2], "g")), u = G) : g[3] !== void 0 && (u = G) : u === G ? g[0] === ">" ? (u = s ?? rt, b = -1) : g[1] === void 0 ? b = -2 : (b = u.lastIndex - g[2].length, A = g[1], u = g[3] === void 0 ? G : g[3] === '"' ? ce : he) : u === ce || u === he ? u = G : u === ue || u === de ? u = rt : (u = G, s = void 0);
    const k = u === G && r[m + 1].startsWith("/>") ? " " : "";
    l += u === rt ? p + Je : b >= 0 ? (i.push(A), p.slice(0, b) + ye + p.slice(b) + I + k) : p + I + (b === -2 ? m : k);
  }
  return [be(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class lt {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = t.length - 1, p = this.parts, [A, g] = tr(t, e);
    if (this.el = lt.createElement(A, i), W.currentNode = this.el.content, e === 2 || e === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (s = W.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const b of s.getAttributeNames()) if (b.endsWith(ye)) {
          const M = g[u++], k = s.getAttribute(b).split(I), T = /([.?@])?(.*)/.exec(M);
          p.push({ type: 1, index: l, name: T[2], strings: k, ctor: T[1] === "." ? rr : T[1] === "?" ? nr : T[1] === "@" ? ir : Mt }), s.removeAttribute(b);
        } else b.startsWith(I) && (p.push({ type: 6, index: l }), s.removeAttribute(b));
        if (_e.test(s.tagName)) {
          const b = s.textContent.split(I), M = b.length - 1;
          if (M > 0) {
            s.textContent = St ? St.emptyScript : "";
            for (let k = 0; k < M; k++) s.append(b[k], at()), W.nextNode(), p.push({ type: 2, index: ++l });
            s.append(b[M], at());
          }
        }
      } else if (s.nodeType === 8) if (s.data === me) p.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = s.data.indexOf(I, b + 1)) !== -1; ) p.push({ type: 7, index: l }), b += I.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const i = q.createElement("template");
    return i.innerHTML = t, i;
  }
}
function Y(r, t, e = r, i) {
  var u, m;
  if (t === J) return t;
  let s = i !== void 0 ? (u = e._$Co) == null ? void 0 : u[i] : e._$Cl;
  const l = ot(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, i)), i !== void 0 ? (e._$Co ?? (e._$Co = []))[i] = s : e._$Cl = s), s !== void 0 && (t = Y(r, s._$AS(r, t.values), s, i)), t;
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
    const { el: { content: e }, parts: i } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? q).importNode(e, !0);
    W.currentNode = s;
    let l = W.nextNode(), u = 0, m = 0, p = i[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new ut(l, l.nextSibling, this, t) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (A = new sr(l, this, t)), this._$AV.push(A), p = i[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = W.nextNode(), u++);
    }
    return W.currentNode = q, s;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class ut {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, i, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = Y(this, t, e), ot(t) ? t === C || t == null || t === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : t !== this._$AH && t !== J && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ye(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== C && ot(this._$AH) ? this._$AA.nextSibling.data = t : this.T(q.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: i } = t, s = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = lt.createElement(be(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new er(s, this), m = u.u(this.options);
      u.p(e), this.T(m), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = fe.get(t.strings);
    return e === void 0 && fe.set(t.strings, e = new lt(t)), e;
  }
  k(t) {
    jt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const l of t) s === e.length ? e.push(i = new ut(this.O(at()), this.O(at()), this, this.options)) : i = e[s], i._$AI(l), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = oe(t).nextSibling;
      oe(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class Mt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, s, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = C;
  }
  _$AI(t, e = this, i, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = Y(this, t, e, 0), u = !ot(t) || t !== this._$AH && t !== J, u && (this._$AH = t);
    else {
      const m = t;
      let p, A;
      for (t = l[0], p = 0; p < l.length - 1; p++) A = Y(this, m[i + p], e, p), A === J && (A = this._$AH[p]), u || (u = !ot(A) || A !== this._$AH[p]), A === C ? t = C : t !== C && (t += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class rr extends Mt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === C ? void 0 : t;
  }
}
class nr extends Mt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== C);
  }
}
class ir extends Mt {
  constructor(t, e, i, s, l) {
    super(t, e, i, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Y(this, t, e, 0) ?? C) === J) return;
    const i = this._$AH, s = t === C && i !== C || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, l = t !== C && (i === C || s);
    s && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class sr {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Y(this, t);
  }
}
const Tt = it.litHtmlPolyfillSupport;
Tt == null || Tt(lt, ut), (it.litHtmlVersions ?? (it.litHtmlVersions = [])).push("3.3.3");
const ar = (r, t, e) => {
  const i = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = i._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    i._$litPart$ = s = new ut(t.insertBefore(at(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B = globalThis;
class st extends X {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ar(e, this.renderRoot, this.renderOptions);
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
    return J;
  }
}
var pe;
st._$litElement$ = !0, st.finalized = !0, (pe = B.litElementHydrateSupport) == null || pe.call(B, { LitElement: st });
const Rt = B.litElementPolyfillSupport;
Rt == null || Rt({ LitElement: st });
(B.litElementVersions ?? (B.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const or = { attribute: !0, type: String, converter: Et, reflect: !1, hasChanged: Dt }, lr = (r = or, t, e) => {
  const { kind: i, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), i === "accessor") {
    const { name: u } = e;
    return { set(m) {
      const p = t.get.call(this);
      t.set.call(this, m), this.requestUpdate(u, p, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (i === "setter") {
    const { name: u } = e;
    return function(m) {
      const p = this[u];
      t.call(this, m), this.requestUpdate(u, p, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function z(r) {
  return (t, e) => typeof e == "object" ? lr(r, t, e) : ((i, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, i), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var ur = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, j = (r, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? dr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (i ? u(t, e, s) : u(s)) || s);
  return i && s && ur(t, e, s), s;
};
function H(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let U = class extends st {
  constructor() {
    super(...arguments), this.name = "Diane Cooper", this.subtitle = "diane.cooper@example.com", this.avatarUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150", this.stat1Value = 15, this.stat1Label = "Past", this.stat2Value = 2, this.stat2Label = "Upcoming", this.buttonText = "Send Message";
  }
  static getStudioTemplate(r) {
    var A, g, b, M, k, T, D, V, Q, dt, ht, ct, ft, pt, vt, yt, mt, _t, bt, $t, wt, K, F, tt;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-profile-card-1.0.0></zero-profile-card-1.0.0>"
      };
    const t = H(((A = r == null ? void 0 : r.props) == null ? void 0 : A.name) ?? ((b = (g = r == null ? void 0 : r.studio) == null ? void 0 : g.props) == null ? void 0 : b.name) ?? "Diane Cooper"), e = H(((M = r == null ? void 0 : r.props) == null ? void 0 : M.subtitle) ?? ((T = (k = r == null ? void 0 : r.studio) == null ? void 0 : k.props) == null ? void 0 : T.subtitle) ?? "diane.cooper@example.com"), i = H(((D = r == null ? void 0 : r.props) == null ? void 0 : D.avatarUrl) ?? ((Q = (V = r == null ? void 0 : r.studio) == null ? void 0 : V.props) == null ? void 0 : Q.avatarUrl) ?? "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=150"), s = H(((dt = r == null ? void 0 : r.props) == null ? void 0 : dt.stat1Value) ?? ((ct = (ht = r == null ? void 0 : r.studio) == null ? void 0 : ht.props) == null ? void 0 : ct.stat1Value) ?? "15"), l = H(((ft = r == null ? void 0 : r.props) == null ? void 0 : ft.stat1Label) ?? ((vt = (pt = r == null ? void 0 : r.studio) == null ? void 0 : pt.props) == null ? void 0 : vt.stat1Label) ?? "Past"), u = H(((yt = r == null ? void 0 : r.props) == null ? void 0 : yt.stat2Value) ?? ((_t = (mt = r == null ? void 0 : r.studio) == null ? void 0 : mt.props) == null ? void 0 : _t.stat2Value) ?? "2"), m = H(((bt = r == null ? void 0 : r.props) == null ? void 0 : bt.stat2Label) ?? ((wt = ($t = r == null ? void 0 : r.studio) == null ? void 0 : $t.props) == null ? void 0 : wt.stat2Label) ?? "Upcoming"), p = H(((K = r == null ? void 0 : r.props) == null ? void 0 : K.buttonText) ?? ((tt = (F = r == null ? void 0 : r.studio) == null ? void 0 : F.props) == null ? void 0 : tt.buttonText) ?? "Send Message");
    return {
      kind: "generic",
      templateHtml: `
        <zero-profile-card-1.0.0
          name="${t}"
          subtitle="${e}"
          avatar-url="${i}"
          stat1-value="${s}"
          stat1-label="${l}"
          stat2-value="${u}"
          stat2-label="${m}"
          button-text="${p}"
        ></zero-profile-card-1.0.0>
      `
    };
  }
  render() {
    return Ke`
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
        <button class="btn">${this.buttonText}</button>
      </div>
    `;
  }
};
U.styles = ze`
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
j([
  z({ type: String })
], U.prototype, "name", 2);
j([
  z({ type: String })
], U.prototype, "subtitle", 2);
j([
  z({ type: String, attribute: "avatar-url" })
], U.prototype, "avatarUrl", 2);
j([
  z({ type: Number, attribute: "stat1-value" })
], U.prototype, "stat1Value", 2);
j([
  z({ type: String, attribute: "stat1-label" })
], U.prototype, "stat1Label", 2);
j([
  z({ type: Number, attribute: "stat2-value" })
], U.prototype, "stat2Value", 2);
j([
  z({ type: String, attribute: "stat2-label" })
], U.prototype, "stat2Label", 2);
j([
  z({ type: String, attribute: "button-text" })
], U.prototype, "buttonText", 2);
U = j([
  He({
    name: "zero-profile-card",
    version: "1.0.0",
    title: "Profile Card",
    elementSelector: "zero-profile-card",
    group: "Dashboard",
    iconName: "profile-icon.png"
  }),
  Ie()
], U);
export {
  U as ZeroProfileCard
};
