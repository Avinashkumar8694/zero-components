var He = Object.defineProperty;
var Ie = (r, t, e) => t in r ? He(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var ee = (r, t, e) => Ie(r, typeof t != "symbol" ? t + "" : t, e);
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
    function a(p, A) {
      return function(w, _) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: _ }), A && A(w, _);
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
    var n = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", l = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !b && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return Mt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Mt({ __proto__: null });
      } : function() {
        return Mt({});
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
    }, _ = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : ke(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ne(), k = typeof WeakMap == "function" ? WeakMap : De(), j = a ? Symbol.for("@reflect-metadata:registry") : void 0, W = Pe(), K = Te(W);
    function dt(i, s, o, c) {
      if (g(o)) {
        if (!qt(i))
          throw new TypeError();
        if (!Zt(s))
          throw new TypeError();
        return yt(i, s);
      } else {
        if (!qt(i))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(c) && !g(c) && !Z(c))
          throw new TypeError();
        return Z(c) && (c = void 0), o = D(o), Ht(i, s, o, c);
      }
    }
    t("decorate", dt);
    function ht(i, s) {
      function o(c, y) {
        if (!O(c))
          throw new TypeError();
        if (!g(y) && !Me(y))
          throw new TypeError();
        zt(i, s, c, y);
      }
      return o;
    }
    t("metadata", ht);
    function ft(i, s, o, c) {
      if (!O(o))
        throw new TypeError();
      return g(c) || (c = D(c)), zt(i, s, o, c);
    }
    t("defineMetadata", ft);
    function pt(i, s, o) {
      if (!O(s))
        throw new TypeError();
      return g(o) || (o = D(o)), It(i, s, o);
    }
    t("hasMetadata", pt);
    function q(i, s, o) {
      if (!O(s))
        throw new TypeError();
      return g(o) || (o = D(o)), xt(i, s, o);
    }
    t("hasOwnMetadata", q);
    function H(i, s, o) {
      if (!O(s))
        throw new TypeError();
      return g(o) || (o = D(o)), Vt(i, s, o);
    }
    t("getMetadata", H);
    function tt(i, s, o) {
      if (!O(s))
        throw new TypeError();
      return g(o) || (o = D(o)), Wt(i, s, o);
    }
    t("getOwnMetadata", tt);
    function At(i, s) {
      if (!O(i))
        throw new TypeError();
      return g(s) || (s = D(s)), Lt(i, s);
    }
    t("getMetadataKeys", At);
    function Et(i, s) {
      if (!O(i))
        throw new TypeError();
      return g(s) || (s = D(s)), Bt(i, s);
    }
    t("getOwnMetadataKeys", Et);
    function vt(i, s, o) {
      if (!O(s))
        throw new TypeError();
      if (g(o) || (o = D(o)), !O(s))
        throw new TypeError();
      g(o) || (o = D(o));
      var c = et(
        s,
        o,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, o);
    }
    t("deleteMetadata", vt);
    function yt(i, s) {
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o], y = c(s);
        if (!g(y) && !Z(y)) {
          if (!Zt(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function Ht(i, s, o, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var C = i[y], M = C(s, o, c);
        if (!g(M) && !Z(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function It(i, s, o) {
      var c = xt(i, s, o);
      if (c)
        return !0;
      var y = Ot(s);
      return Z(y) ? !1 : It(i, y, o);
    }
    function xt(i, s, o) {
      var c = et(
        s,
        o,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Ft(c.OrdinaryHasOwnMetadata(i, s, o));
    }
    function Vt(i, s, o) {
      var c = xt(i, s, o);
      if (c)
        return Wt(i, s, o);
      var y = Ot(s);
      if (!Z(y))
        return Vt(i, y, o);
    }
    function Wt(i, s, o) {
      var c = et(
        s,
        o,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, s, o);
    }
    function zt(i, s, o, c) {
      var y = et(
        o,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, o, c);
    }
    function Lt(i, s) {
      var o = Bt(i, s), c = Ot(i);
      if (c === null)
        return o;
      var y = Lt(c, s);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var C = new T(), M = [], m = 0, d = o; m < d.length; m++) {
        var h = d[m], f = C.has(h);
        f || (C.add(h), M.push(h));
      }
      for (var v = 0, $ = y; v < $.length; v++) {
        var h = $[v], f = C.has(h);
        f || (C.add(h), M.push(h));
      }
      return M;
    }
    function Bt(i, s) {
      var o = et(
        i,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Gt(i) {
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
    function Z(i) {
      return i === null;
    }
    function Ee(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function xe(i, s) {
      switch (Gt(i)) {
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
      var o = "string", c = Xt(i, l);
      if (c !== void 0) {
        var y = c.call(i, o);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return Se(i);
    }
    function Se(i, s) {
      var o, c;
      {
        var y = i.toString;
        if (bt(y)) {
          var c = y.call(i);
          if (!O(c))
            return c;
        }
        var o = i.valueOf;
        if (bt(o)) {
          var c = o.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ft(i) {
      return !!i;
    }
    function Oe(i) {
      return "" + i;
    }
    function D(i) {
      var s = xe(i);
      return Ee(s) ? s : Oe(s);
    }
    function qt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function bt(i) {
      return typeof i == "function";
    }
    function Zt(i) {
      return typeof i == "function";
    }
    function Me(i) {
      switch (Gt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function St(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Xt(i, s) {
      var o = i[s];
      if (o != null) {
        if (!bt(o))
          throw new TypeError();
        return o;
      }
    }
    function Yt(i) {
      var s = Xt(i, u);
      if (!bt(s))
        throw new TypeError();
      var o = s.call(i);
      if (!O(o))
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
    function Ot(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || s !== _)
        return s;
      var o = i.prototype, c = o && Object.getPrototypeOf(o);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function Ce() {
      var i;
      !g(j) && typeof e.Reflect < "u" && !(j in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Re(e.Reflect));
      var s, o, c, y = new k(), C = {
        registerProvider: M,
        getProvider: d,
        setProvider: f
      };
      return C;
      function M(v) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case g(s):
            s = v;
            break;
          case s === v:
            break;
          case g(o):
            o = v;
            break;
          case o === v:
            break;
          default:
            c === void 0 && (c = new T()), c.add(v);
            break;
        }
      }
      function m(v, $) {
        if (!g(s)) {
          if (s.isProviderFor(v, $))
            return s;
          if (!g(o)) {
            if (o.isProviderFor(v, $))
              return s;
            if (!g(c))
              for (var E = Yt(c); ; ) {
                var x = Qt(E);
                if (!x)
                  return;
                var N = Jt(x);
                if (N.isProviderFor(v, $))
                  return Kt(E), N;
              }
          }
        }
        if (!g(i) && i.isProviderFor(v, $))
          return i;
      }
      function d(v, $) {
        var E = y.get(v), x;
        return g(E) || (x = E.get($)), g(x) && (x = m(v, $), g(x) || (g(E) && (E = new S(), y.set(v, E)), E.set($, x))), x;
      }
      function h(v) {
        if (g(v))
          throw new TypeError();
        return s === v || o === v || !g(c) && c.has(v);
      }
      function f(v, $, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var x = d(v, $);
        if (x !== E) {
          if (!g(x))
            return !1;
          var N = y.get(v);
          g(N) && (N = new S(), y.set(v, N)), N.set($, E);
        }
        return !0;
      }
    }
    function Pe() {
      var i;
      return !g(j) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[j]), g(i) && (i = Ce()), !g(j) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, j, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Te(i) {
      var s = new k(), o = {
        isProviderFor: function(h, f) {
          var v = s.get(h);
          return g(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return W.registerProvider(o), o;
      function c(h, f, v) {
        var $ = s.get(h), E = !1;
        if (g($)) {
          if (!v)
            return;
          $ = new S(), s.set(h, $), E = !0;
        }
        var x = $.get(f);
        if (g(x)) {
          if (!v)
            return;
          if (x = new S(), $.set(f, x), !i.setProvider(h, f, o))
            throw $.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return x;
      }
      function y(h, f, v) {
        var $ = c(
          f,
          v,
          /*Create*/
          !1
        );
        return g($) ? !1 : Ft($.has(h));
      }
      function C(h, f, v) {
        var $ = c(
          f,
          v,
          /*Create*/
          !1
        );
        if (!g($))
          return $.get(h);
      }
      function M(h, f, v, $) {
        var E = c(
          v,
          $,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function m(h, f) {
        var v = [], $ = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (g($))
          return v;
        for (var E = $.keys(), x = Yt(E), N = 0; ; ) {
          var te = Qt(x);
          if (!te)
            return v.length = N, v;
          var Ue = Jt(te);
          try {
            v[N] = Ue;
          } catch (je) {
            try {
              Kt(x);
            } finally {
              throw je;
            }
          }
          N++;
        }
      }
      function d(h, f, v) {
        var $ = c(
          f,
          v,
          /*Create*/
          !1
        );
        if (g($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var E = s.get(f);
          g(E) || (E.delete(v), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Re(i) {
      var s = i.defineMetadata, o = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, C = i.deleteMetadata, M = new k(), m = {
        isProviderFor: function(d, h) {
          var f = M.get(d);
          return !g(f) && f.has(h) ? !0 : y(d, h).length ? (g(f) && (f = new T(), M.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: C
      };
      return m;
    }
    function et(i, s, o) {
      var c = W.getProvider(i, s);
      if (!g(c))
        return c;
      if (o) {
        if (W.setProvider(i, s, K))
          return K;
        throw new Error("Illegal state.");
      }
    }
    function ke() {
      var i = {}, s = [], o = (
        /** @class */
        function() {
          function m(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
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
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, m.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, v = h + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, St(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new o(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new o(this._keys, this._values, C);
          }, m.prototype.entries = function() {
            return new o(this._keys, this._values, M);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(d, h) {
            if (!St(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (St(this._keys[f], d)) {
                  this._cacheIndex = f;
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
      function C(m, d) {
        return d;
      }
      function M(m, d) {
        return [m, d];
      }
    }
    function Ne() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new S();
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
    function De() {
      var i = 16, s = w.create(), o = c();
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
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var v = y(
              h,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
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
          d = "@@WeakMap@@" + m();
        while (w.has(s, d));
        return s[d] = !0, d;
      }
      function y(d, h) {
        if (!n.call(d, o)) {
          if (!h)
            return;
          Object.defineProperty(d, o, { value: w.create() });
        }
        return d[o];
      }
      function C(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function M(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, d), h;
        }
        return C(new Array(d), d);
      }
      function m() {
        var d = M(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var v = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function Mt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(ne || (ne = {}));
function Ve(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function We(r) {
  return function(t) {
    if (Ve(r)) {
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
function ze(r) {
  return We(r);
}
function Le(r) {
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
        var A;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && b) {
          const w = new CSSStyleSheet(), _ = (A = l.sheet) == null ? void 0 : A.cssRules;
          _ && (Array.from(_).forEach((S) => w.insertRule(S.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          p.appendChild(w);
        }
        u.forEach((w) => {
          const _ = w.cloneNode(!0);
          p.appendChild(_);
        });
      }
    }
    return e;
  };
}
function Be(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ge(r) {
  return function(t, e) {
    try {
      Be(r);
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
function ut(r) {
  return Ge(r);
}
var Y;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(Y || (Y = {}));
var G;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(G || (G = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt = globalThis, Nt = gt.ShadowRoot && (gt.ShadyCSS === void 0 || gt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Dt = Symbol(), ie = /* @__PURE__ */ new WeakMap();
let _e = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== Dt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Nt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = ie.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && ie.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Fe = (r) => new _e(typeof r == "string" ? r : r + "", void 0, Dt), qe = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, a, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + r[l + 1], r[0]);
  return new _e(e, r, Dt);
}, Ze = (r, t) => {
  if (Nt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), a = gt.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = e.cssText, r.appendChild(n);
  }
}, ae = Nt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Fe(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xe, defineProperty: Ye, getOwnPropertyDescriptor: Je, getOwnPropertyNames: Qe, getOwnPropertySymbols: Ke, getPrototypeOf: tr } = Object, V = globalThis, se = V.trustedTypes, er = se ? se.emptyScript : "", Ct = V.reactiveElementPolyfillSupport, nt = (r, t) => r, _t = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? er : null;
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
} }, Ut = (r, t) => !Xe(r, t), oe = { attribute: !0, type: String, converter: _t, reflect: !1, useDefault: !1, hasChanged: Ut };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), V.litPropertyMetadata ?? (V.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = oe) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), a = this.getPropertyDescriptor(t, n, e);
      a !== void 0 && Ye(this.prototype, t, a);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: a, set: l } = Je(this.prototype, t) ?? { get() {
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
    if (this.hasOwnProperty(nt("elementProperties"))) return;
    const t = tr(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(nt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(nt("properties"))) {
      const e = this.properties, n = [...Qe(e), ...Ke(e)];
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
    return Ze(t, this.constructor.elementStyles), t;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : _t).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(a) : this.setAttribute(a, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, a = n._$Eh.get(t);
    if (a !== void 0 && this._$Em !== a) {
      const b = n.getPropertyOptions(a), p = typeof b.converter == "function" ? { fromAttribute: b.converter } : ((l = b.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? b.converter : _t;
      this._$Em = a;
      const A = p.fromAttribute(e, b.type);
      this[a] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(a)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, a = !1, l) {
    var u;
    if (t !== void 0) {
      const b = this.constructor;
      if (a === !1 && (l = this[t]), n ?? (n = b.getPropertyOptions(t)), !((n.hasChanged ?? Ut)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(b._$Eu(t, n)))) return;
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
        const { wrapped: b } = u, p = this[l];
        b !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[nt("elementProperties")] = /* @__PURE__ */ new Map(), X[nt("finalized")] = /* @__PURE__ */ new Map(), Ct == null || Ct({ ReactiveElement: X }), (V.reactiveElementVersions ?? (V.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = globalThis, le = (r) => r, mt = it.trustedTypes, ue = mt ? mt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, me = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, $e = "?" + I, rr = `<${$e}>`, F = document, st = () => F.createComment(""), ot = (r) => r === null || typeof r != "object" && typeof r != "function", jt = Array.isArray, nr = (r) => jt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Pt = `[ 	
\f\r]`, rt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ce = /-->/g, de = />/g, z = RegExp(`>|${Pt}(?:([^\\s"'>=/]+)(${Pt}*=${Pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), he = /'/g, fe = /"/g, we = /^(?:script|style|textarea|title)$/i, ir = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), pe = ir(1), J = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), ve = /* @__PURE__ */ new WeakMap(), L = F.createTreeWalker(F, 129);
function Ae(r, t) {
  if (!jt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ue !== void 0 ? ue.createHTML(t) : t;
}
const ar = (r, t) => {
  const e = r.length - 1, n = [];
  let a, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = rt;
  for (let b = 0; b < e; b++) {
    const p = r[b];
    let A, w, _ = -1, S = 0;
    for (; S < p.length && (u.lastIndex = S, w = u.exec(p), w !== null); ) S = u.lastIndex, u === rt ? w[1] === "!--" ? u = ce : w[1] !== void 0 ? u = de : w[2] !== void 0 ? (we.test(w[2]) && (a = RegExp("</" + w[2], "g")), u = z) : w[3] !== void 0 && (u = z) : u === z ? w[0] === ">" ? (u = a ?? rt, _ = -1) : w[1] === void 0 ? _ = -2 : (_ = u.lastIndex - w[2].length, A = w[1], u = w[3] === void 0 ? z : w[3] === '"' ? fe : he) : u === fe || u === he ? u = z : u === ce || u === de ? u = rt : (u = z, a = void 0);
    const T = u === z && r[b + 1].startsWith("/>") ? " " : "";
    l += u === rt ? p + rr : _ >= 0 ? (n.push(A), p.slice(0, _) + me + p.slice(_) + I + T) : p + I + (_ === -2 ? b : T);
  }
  return [Ae(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class lt {
  constructor({ strings: t, _$litType$: e }, n) {
    let a;
    this.parts = [];
    let l = 0, u = 0;
    const b = t.length - 1, p = this.parts, [A, w] = ar(t, e);
    if (this.el = lt.createElement(A, n), L.currentNode = this.el.content, e === 2 || e === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (a = L.nextNode()) !== null && p.length < b; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const _ of a.getAttributeNames()) if (_.endsWith(me)) {
          const S = w[u++], T = a.getAttribute(_).split(I), k = /([.?@])?(.*)/.exec(S);
          p.push({ type: 1, index: l, name: k[2], strings: T, ctor: k[1] === "." ? or : k[1] === "?" ? lr : k[1] === "@" ? ur : $t }), a.removeAttribute(_);
        } else _.startsWith(I) && (p.push({ type: 6, index: l }), a.removeAttribute(_));
        if (we.test(a.tagName)) {
          const _ = a.textContent.split(I), S = _.length - 1;
          if (S > 0) {
            a.textContent = mt ? mt.emptyScript : "";
            for (let T = 0; T < S; T++) a.append(_[T], st()), L.nextNode(), p.push({ type: 2, index: ++l });
            a.append(_[S], st());
          }
        }
      } else if (a.nodeType === 8) if (a.data === $e) p.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = a.data.indexOf(I, _ + 1)) !== -1; ) p.push({ type: 7, index: l }), _ += I.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = F.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Q(r, t, e = r, n) {
  var u, b;
  if (t === J) return t;
  let a = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = ot(t) ? void 0 : t._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((b = a == null ? void 0 : a._$AO) == null || b.call(a, !1), l === void 0 ? a = void 0 : (a = new l(r), a._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = a : e._$Cl = a), a !== void 0 && (t = Q(r, a._$AS(r, t.values), a, n)), t;
}
class sr {
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
    const { el: { content: e }, parts: n } = this._$AD, a = ((t == null ? void 0 : t.creationScope) ?? F).importNode(e, !0);
    L.currentNode = a;
    let l = L.nextNode(), u = 0, b = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new ct(l, l.nextSibling, this, t) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (A = new cr(l, this, t)), this._$AV.push(A), p = n[++b];
      }
      u !== (p == null ? void 0 : p.index) && (l = L.nextNode(), u++);
    }
    return L.currentNode = F, a;
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
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = a, this._$Cv = (a == null ? void 0 : a.isConnected) ?? !0;
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
    t = Q(this, t, e), ot(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== J && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : nr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && ot(this._$AH) ? this._$AA.nextSibling.data = t : this.T(F.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, a = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = lt.createElement(Ae(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === a) this._$AH.p(e);
    else {
      const u = new sr(a, this), b = u.u(this.options);
      u.p(e), this.T(b), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ve.get(t.strings);
    return e === void 0 && ve.set(t.strings, e = new lt(t)), e;
  }
  k(t) {
    jt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, a = 0;
    for (const l of t) a === e.length ? e.push(n = new ct(this.O(st()), this.O(st()), this, this.options)) : n = e[a], n._$AI(l), a++;
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
class $t {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, a, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = a, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(t, e = this, n, a) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = Q(this, t, e, 0), u = !ot(t) || t !== this._$AH && t !== J, u && (this._$AH = t);
    else {
      const b = t;
      let p, A;
      for (t = l[0], p = 0; p < l.length - 1; p++) A = Q(this, b[n + p], e, p), A === J && (A = this._$AH[p]), u || (u = !ot(A) || A !== this._$AH[p]), A === P ? t = P : t !== P && (t += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !a && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class or extends $t {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class lr extends $t {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class ur extends $t {
  constructor(t, e, n, a, l) {
    super(t, e, n, a, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Q(this, t, e, 0) ?? P) === J) return;
    const n = this._$AH, a = t === P && n !== P || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== P && (n === P || a);
    a && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
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
    Q(this, t);
  }
}
const Tt = it.litHtmlPolyfillSupport;
Tt == null || Tt(lt, ct), (it.litHtmlVersions ?? (it.litHtmlVersions = [])).push("3.3.3");
const dr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let a = n._$litPart$;
  if (a === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = a = new ct(t.insertBefore(st(), l), l, void 0, e ?? {});
  }
  return a._$AI(r), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B = globalThis;
class at extends X {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = dr(e, this.renderRoot, this.renderOptions);
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
var ge;
at._$litElement$ = !0, at.finalized = !0, (ge = B.litElementHydrateSupport) == null || ge.call(B, { LitElement: at });
const Rt = B.litElementPolyfillSupport;
Rt == null || Rt({ LitElement: at });
(B.litElementVersions ?? (B.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: _t, reflect: !1, hasChanged: Ut }, fr = (r = hr, t, e) => {
  const { kind: n, metadata: a } = e;
  let l = globalThis.litPropertyMetadata.get(a);
  if (l === void 0 && globalThis.litPropertyMetadata.set(a, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(b) {
      const p = t.get.call(this);
      t.set.call(this, b), this.requestUpdate(u, p, r, !0, b);
    }, init(b) {
      return b !== void 0 && this.C(u, void 0, r, b), b;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(b) {
      const p = this[u];
      t.call(this, b), this.requestUpdate(u, p, r, !0, b);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function wt(r) {
  return (t, e) => typeof e == "object" ? fr(r, t, e) : ((n, a, l) => {
    const u = a.hasOwnProperty(l);
    return a.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(a, l) : void 0;
  })(r, t, e);
}
var pr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, U = (r, t, e, n) => {
  for (var a = n > 1 ? void 0 : n ? vr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (a = (n ? u(t, e, a) : u(a)) || a);
  return n && a && pr(t, e, a), a;
};
const ye = {
  kind: "generic",
  templateHtml: [
    "<div style='font-family:inherit;box-sizing:border-box;'>",
    "<div style='display:flex;gap:24px;border-bottom:2px solid #e5e7eb;padding:0 4px;'>",
    "<span style='padding:10px 4px;font-size:14px;font-weight:600;color:#6366f1;border-bottom:2px solid #6366f1;margin-bottom:-2px;'>Overview</span>",
    "<span style='padding:10px 4px;font-size:14px;color:#6b7280;'>Details</span>",
    "<span style='padding:10px 4px;font-size:14px;color:#6b7280;'>Settings</span>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "activeValue",
  badges: ["Navigation", "Interactive"]
};
function kt(r) {
  return String(r).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function be(r, t) {
  if (!r) return t;
  try {
    const e = JSON.parse(r);
    return Array.isArray(e) ? e.map((n) => ({ label: String((n == null ? void 0 : n.label) ?? ""), value: String((n == null ? void 0 : n.value) ?? (n == null ? void 0 : n.label) ?? "") })).filter((n) => n.label !== "") : t;
  } catch {
    return t;
  }
}
let R = class extends at {
  constructor() {
    super(...arguments), this.tabs = '[{"label":"Overview","value":"overview"},{"label":"Details","value":"details"},{"label":"Settings","value":"settings"}]', this.activeValue = "", this.variant = "underline", this.fullWidth = !1;
  }
  static getStudioTemplate(r) {
    var w, _, S, T, k, j, W, K, dt, ht, ft, pt;
    if (!r) return ye;
    const t = (((w = r.props) == null ? void 0 : w.variant) ?? ((S = (_ = r.studio) == null ? void 0 : _.props) == null ? void 0 : S.variant)) || "underline", e = !!(((T = r.props) == null ? void 0 : T.fullWidth) ?? ((j = (k = r.studio) == null ? void 0 : k.props) == null ? void 0 : j.fullWidth)), n = be(((W = r.props) == null ? void 0 : W.tabs) ?? ((dt = (K = r.studio) == null ? void 0 : K.props) == null ? void 0 : dt.tabs), [
      { label: "Overview", value: "overview" },
      { label: "Details", value: "details" },
      { label: "Settings", value: "settings" }
    ]);
    let a = ((ht = r.props) == null ? void 0 : ht.activeValue) ?? ((pt = (ft = r.studio) == null ? void 0 : ft.props) == null ? void 0 : pt.activeValue);
    !a && n.length && (a = n[0].value);
    const l = "var(--uiv-primary-color, #6366f1)", u = "var(--uiv-text-muted, #6b7280)", b = "var(--uiv-border-color, #e5e7eb)", p = n.map((q) => {
      const H = q.value === a, tt = e ? "flex:1;text-align:center;" : "";
      if (t === "pills")
        return `<span style='${tt}padding:8px 16px;font-size:14px;font-weight:600;border-radius:999px;background:${H ? l : "transparent"};color:${H ? "#ffffff" : u};'>${kt(q.label)}</span>`;
      if (t === "enclosed") {
        const vt = H ? "var(--uiv-surface-color, #ffffff)" : "transparent", yt = H ? `1px solid ${b}` : "1px solid transparent";
        return `<span style='${tt}padding:9px 16px;font-size:14px;font-weight:600;border:${yt};border-bottom:none;border-radius:8px 8px 0 0;background:${vt};color:${H ? l : u};'>${kt(q.label)}</span>`;
      }
      const At = H ? l : u, Et = H ? `2px solid ${l}` : "2px solid transparent";
      return `<span style='${tt}padding:10px 4px;font-size:14px;font-weight:600;color:${At};border-bottom:${Et};margin-bottom:-2px;'>${kt(q.label)}</span>`;
    }).join(""), A = t === "underline" || t === "enclosed" ? `display:flex;gap:${t === "enclosed" ? "4px" : "24px"};border-bottom:2px solid ${b};padding:0 4px;` : "display:flex;gap:8px;padding:4px;background:var(--uiv-bg-secondary, #f1f5f9);border-radius:999px;";
    return {
      ...ye,
      templateHtml: [
        "<div style='font-family:inherit;box-sizing:border-box;'>",
        `<div style='${A}'>${p}</div>`,
        "</div>"
      ].join("")
    };
  }
  get tabsConfig() {
    return this.tabs;
  }
  set tabsConfig(r) {
    this.tabs = r;
  }
  get activeValueConfig() {
    return this.activeValue;
  }
  set activeValueConfig(r) {
    this.activeValue = r;
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "underline";
  }
  get fullWidthConfig() {
    return this.fullWidth;
  }
  set fullWidthConfig(r) {
    this.fullWidth = !!r;
  }
  parseTabs() {
    return be(this.tabs, []);
  }
  get resolvedActive() {
    const r = this.parseTabs();
    return this.activeValue && r.some((t) => t.value === this.activeValue) ? this.activeValue : r.length ? r[0].value : "";
  }
  handleTabChange(r) {
    this.activeValue = r.value, this.dispatchEvent(
      new CustomEvent("on-tab-change", {
        detail: { value: r.value, label: r.label },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const r = this.parseTabs(), t = this.resolvedActive;
    return pe`
      <div class="tablist variant-${this.variant} ${this.fullWidth ? "full-width" : ""}">
        ${r.map(
      (e) => pe`
            <button
              class="tab ${e.value === t ? "active" : ""}"
              @click=${() => this.handleTabChange(e)}
            >
              ${e.label}
            </button>
          `
    )}
      </div>
      <div class="panel"><slot>${t ? `Panel: ${t}` : ""}</slot></div>
    `;
  }
};
R.styles = qe`
    :host {
      display: block;
      width: 100%;
      --tab-p: var(--uiv-primary-color, #6366f1);
      --tab-muted: var(--uiv-text-muted, #6b7280);
      --tab-text: var(--uiv-text-color, #1f2937);
      --tab-border: var(--uiv-border-color, #e5e7eb);
      --tab-surface: var(--uiv-surface-color, #ffffff);
      --tab-track: var(--uiv-bg-secondary, #f1f5f9);
    }

    .tablist {
      display: flex;
      align-items: stretch;
      font-family: inherit;
      box-sizing: border-box;
    }
    .tablist.full-width .tab {
      flex: 1;
      justify-content: center;
    }

    .tab {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: none;
      border: none;
      font-family: inherit;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--tab-muted);
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    /* Underline variant */
    .tablist.variant-underline {
      gap: 24px;
      border-bottom: 2px solid var(--tab-border);
      padding: 0 4px;
    }
    .variant-underline .tab {
      padding: 10px 4px;
      border-bottom: 2px solid transparent;
      margin-bottom: -2px;
    }
    .variant-underline .tab:hover {
      color: var(--tab-text);
    }
    .variant-underline .tab.active {
      color: var(--tab-p);
      border-bottom-color: var(--tab-p);
    }

    /* Pills variant */
    .tablist.variant-pills {
      gap: 8px;
      padding: 4px;
      background: var(--tab-track);
      border-radius: 999px;
    }
    .variant-pills .tab {
      padding: 8px 16px;
      border-radius: 999px;
    }
    .variant-pills .tab:hover:not(.active) {
      color: var(--tab-text);
    }
    .variant-pills .tab.active {
      background: var(--tab-p);
      color: #ffffff;
      box-shadow: 0 2px 6px rgba(99, 102, 241, 0.25);
    }

    /* Enclosed variant */
    .tablist.variant-enclosed {
      gap: 4px;
      border-bottom: 2px solid var(--tab-border);
      padding: 0 4px;
    }
    .variant-enclosed .tab {
      padding: 9px 16px;
      border: 1px solid transparent;
      border-bottom: none;
      border-radius: 8px 8px 0 0;
      margin-bottom: -2px;
    }
    .variant-enclosed .tab:hover:not(.active) {
      color: var(--tab-text);
      background: var(--tab-track);
    }
    .variant-enclosed .tab.active {
      color: var(--tab-p);
      background: var(--tab-surface);
      border-color: var(--tab-border);
      border-bottom: 2px solid var(--tab-surface);
    }

    .panel {
      padding: 20px 4px;
      color: var(--tab-text);
      font-size: 0.9rem;
      line-height: 1.5;
    }
  `;
U([
  wt({ type: String })
], R.prototype, "tabs", 2);
U([
  wt({ type: String, attribute: "active-value" })
], R.prototype, "activeValue", 2);
U([
  wt({ type: String })
], R.prototype, "variant", 2);
U([
  wt({ type: Boolean, attribute: "full-width" })
], R.prototype, "fullWidth", 2);
U([
  ut({
    attributeType: G.PROPERTY,
    uiComponentType: Y.TEXTAREA,
    displayLabel: "Tabs (JSON array of {label, value})",
    fieldMappings: "tabs"
  })
], R.prototype, "tabsConfig", 1);
U([
  ut({
    attributeType: G.PROPERTY,
    uiComponentType: Y.TEXT_INPUT,
    displayLabel: "Active Tab Value",
    fieldMappings: "activeValue"
  })
], R.prototype, "activeValueConfig", 1);
U([
  ut({
    attributeType: G.PROPERTY,
    uiComponentType: Y.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Underline", value: "underline" },
      { label: "Pills", value: "pills" },
      { label: "Enclosed", value: "enclosed" }
    ]
  })
], R.prototype, "variantConfig", 1);
U([
  ut({
    attributeType: G.PROPERTY,
    uiComponentType: Y.CHECKBOX,
    displayLabel: "Full Width (stretch tabs)",
    fieldMappings: "fullWidth"
  })
], R.prototype, "fullWidthConfig", 1);
U([
  ut({
    attributeType: G.EVENT,
    displayLabel: "On Tab Change",
    eventTrigger: "on-tab-change"
  })
], R.prototype, "handleTabChange", 1);
R = U([
  ze({
    name: "zero-tabs",
    version: "1.0.0",
    title: "Tabs",
    elementSelector: "zero-tabs",
    group: "Navigation",
    iconName: "tabs-icon.png"
  }),
  Le()
], R);
export {
  R as ZeroTabs,
  ye as studioTemplate
};
