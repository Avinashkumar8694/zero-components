var Ue = Object.defineProperty;
var ze = (r, t, e) => t in r ? Ue(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Qt = (r, t, e) => ze(r, typeof t != "symbol" ? t + "" : t, e);
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
    function s(p, E) {
      return function($, _) {
        Object.defineProperty(p, $, { configurable: !0, writable: !0, value: _ }), E && E($, _);
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
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, E = !m && !p, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return Ct(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return Ct({ __proto__: null });
      } : function() {
        return Ct({});
      },
      has: E ? function(n, o) {
        return i.call(n, o);
      } : function(n, o) {
        return o in n;
      },
      get: E ? function(n, o) {
        return i.call(n, o) ? n[o] : void 0;
      } : function(n, o) {
        return n[o];
      }
    }, _ = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ne(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ie(), N = typeof WeakMap == "function" ? WeakMap : De(), j = s ? Symbol.for("@reflect-metadata:registry") : void 0, G = Te(), K = Re(G);
    function ut(n, o, a, c) {
      if (g(a)) {
        if (!Gt(n))
          throw new TypeError();
        if (!Vt(o))
          throw new TypeError();
        return Ee(n, o);
      } else {
        if (!Gt(n))
          throw new TypeError();
        if (!C(o))
          throw new TypeError();
        if (!C(c) && !g(c) && !Z(c))
          throw new TypeError();
        return Z(c) && (c = void 0), a = D(a), xe(n, o, a, c);
      }
    }
    t("decorate", ut);
    function ct(n, o) {
      function a(c, v) {
        if (!C(c))
          throw new TypeError();
        if (!g(v) && !Me(v))
          throw new TypeError();
        Ut(n, o, c, v);
      }
      return a;
    }
    t("metadata", ct);
    function dt(n, o, a, c) {
      if (!C(a))
        throw new TypeError();
      return g(c) || (c = D(c)), Ut(n, o, a, c);
    }
    t("defineMetadata", dt);
    function ht(n, o, a) {
      if (!C(o))
        throw new TypeError();
      return g(a) || (a = D(a)), Dt(n, o, a);
    }
    t("hasMetadata", ht);
    function ft(n, o, a) {
      if (!C(o))
        throw new TypeError();
      return g(a) || (a = D(a)), xt(n, o, a);
    }
    t("hasOwnMetadata", ft);
    function pt(n, o, a) {
      if (!C(o))
        throw new TypeError();
      return g(a) || (a = D(a)), Ht(n, o, a);
    }
    t("getMetadata", pt);
    function yt(n, o, a) {
      if (!C(o))
        throw new TypeError();
      return g(a) || (a = D(a)), jt(n, o, a);
    }
    t("getOwnMetadata", yt);
    function vt(n, o) {
      if (!C(n))
        throw new TypeError();
      return g(o) || (o = D(o)), zt(n, o);
    }
    t("getMetadataKeys", vt);
    function we(n, o) {
      if (!C(n))
        throw new TypeError();
      return g(o) || (o = D(o)), Lt(n, o);
    }
    t("getOwnMetadataKeys", we);
    function $e(n, o, a) {
      if (!C(o))
        throw new TypeError();
      if (g(a) || (a = D(a)), !C(o))
        throw new TypeError();
      g(a) || (a = D(a));
      var c = tt(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(n, o, a);
    }
    t("deleteMetadata", $e);
    function Ee(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var c = n[a], v = c(o);
        if (!g(v) && !Z(v)) {
          if (!Vt(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function xe(n, o, a, c) {
      for (var v = n.length - 1; v >= 0; --v) {
        var P = n[v], O = P(o, a, c);
        if (!g(O) && !Z(O)) {
          if (!C(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Dt(n, o, a) {
      var c = xt(n, o, a);
      if (c)
        return !0;
      var v = St(o);
      return Z(v) ? !1 : Dt(n, v, a);
    }
    function xt(n, o, a) {
      var c = tt(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Wt(c.OrdinaryHasOwnMetadata(n, o, a));
    }
    function Ht(n, o, a) {
      var c = xt(n, o, a);
      if (c)
        return jt(n, o, a);
      var v = St(o);
      if (!Z(v))
        return Ht(n, v, a);
    }
    function jt(n, o, a) {
      var c = tt(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(n, o, a);
    }
    function Ut(n, o, a, c) {
      var v = tt(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(n, o, a, c);
    }
    function zt(n, o) {
      var a = Lt(n, o), c = St(n);
      if (c === null)
        return a;
      var v = zt(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new k(), O = [], b = 0, d = a; b < d.length; b++) {
        var h = d[b], f = P.has(h);
        f || (P.add(h), O.push(h));
      }
      for (var y = 0, w = v; y < w.length; y++) {
        var h = w[y], f = P.has(h);
        f || (P.add(h), O.push(h));
      }
      return O;
    }
    function Lt(n, o) {
      var a = tt(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function Bt(n) {
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
    function g(n) {
      return n === void 0;
    }
    function Z(n) {
      return n === null;
    }
    function Ae(n) {
      return typeof n == "symbol";
    }
    function C(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function Se(n, o) {
      switch (Bt(n)) {
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
      var a = "string", c = Ft(n, l);
      if (c !== void 0) {
        var v = c.call(n, a);
        if (C(v))
          throw new TypeError();
        return v;
      }
      return Ce(n);
    }
    function Ce(n, o) {
      var a, c;
      {
        var v = n.toString;
        if (mt(v)) {
          var c = v.call(n);
          if (!C(c))
            return c;
        }
        var a = n.valueOf;
        if (mt(a)) {
          var c = a.call(n);
          if (!C(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Wt(n) {
      return !!n;
    }
    function Oe(n) {
      return "" + n;
    }
    function D(n) {
      var o = Se(n);
      return Ae(o) ? o : Oe(o);
    }
    function Gt(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function mt(n) {
      return typeof n == "function";
    }
    function Vt(n) {
      return typeof n == "function";
    }
    function Me(n) {
      switch (Bt(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function At(n, o) {
      return n === o || n !== n && o !== o;
    }
    function Ft(n, o) {
      var a = n[o];
      if (a != null) {
        if (!mt(a))
          throw new TypeError();
        return a;
      }
    }
    function Yt(n) {
      var o = Ft(n, u);
      if (!mt(o))
        throw new TypeError();
      var a = o.call(n);
      if (!C(a))
        throw new TypeError();
      return a;
    }
    function qt(n) {
      return n.value;
    }
    function Zt(n) {
      var o = n.next();
      return o.done ? !1 : o;
    }
    function Xt(n) {
      var o = n.return;
      o && o.call(n);
    }
    function St(n) {
      var o = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === _ || o !== _)
        return o;
      var a = n.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === n ? o : v;
    }
    function Pe() {
      var n;
      !g(j) && typeof e.Reflect < "u" && !(j in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (n = ke(e.Reflect));
      var o, a, c, v = new N(), P = {
        registerProvider: O,
        getProvider: d,
        setProvider: f
      };
      return P;
      function O(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === y:
            break;
          case g(o):
            o = y;
            break;
          case o === y:
            break;
          case g(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            c === void 0 && (c = new k()), c.add(y);
            break;
        }
      }
      function b(y, w) {
        if (!g(o)) {
          if (o.isProviderFor(y, w))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(y, w))
              return o;
            if (!g(c))
              for (var x = Yt(c); ; ) {
                var A = Zt(x);
                if (!A)
                  return;
                var I = qt(A);
                if (I.isProviderFor(y, w))
                  return Xt(x), I;
              }
          }
        }
        if (!g(n) && n.isProviderFor(y, w))
          return n;
      }
      function d(y, w) {
        var x = v.get(y), A;
        return g(x) || (A = x.get(w)), g(A) && (A = b(y, w), g(A) || (g(x) && (x = new S(), v.set(y, x)), x.set(w, A))), A;
      }
      function h(y) {
        if (g(y))
          throw new TypeError();
        return o === y || a === y || !g(c) && c.has(y);
      }
      function f(y, w, x) {
        if (!h(x))
          throw new Error("Metadata provider not registered.");
        var A = d(y, w);
        if (A !== x) {
          if (!g(A))
            return !1;
          var I = v.get(y);
          g(I) && (I = new S(), v.set(y, I)), I.set(w, x);
        }
        return !0;
      }
    }
    function Te() {
      var n;
      return !g(j) && C(e.Reflect) && Object.isExtensible(e.Reflect) && (n = e.Reflect[j]), g(n) && (n = Pe()), !g(j) && C(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, j, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Re(n) {
      var o = new N(), a = {
        isProviderFor: function(h, f) {
          var y = o.get(h);
          return g(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: d
      };
      return G.registerProvider(a), a;
      function c(h, f, y) {
        var w = o.get(h), x = !1;
        if (g(w)) {
          if (!y)
            return;
          w = new S(), o.set(h, w), x = !0;
        }
        var A = w.get(f);
        if (g(A)) {
          if (!y)
            return;
          if (A = new S(), w.set(f, A), !n.setProvider(h, f, a))
            throw w.delete(f), x && o.delete(h), new Error("Wrong provider for target.");
        }
        return A;
      }
      function v(h, f, y) {
        var w = c(
          f,
          y,
          /*Create*/
          !1
        );
        return g(w) ? !1 : Wt(w.has(h));
      }
      function P(h, f, y) {
        var w = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (!g(w))
          return w.get(h);
      }
      function O(h, f, y, w) {
        var x = c(
          y,
          w,
          /*Create*/
          !0
        );
        x.set(h, f);
      }
      function b(h, f) {
        var y = [], w = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(w))
          return y;
        for (var x = w.keys(), A = Yt(x), I = 0; ; ) {
          var Jt = Zt(A);
          if (!Jt)
            return y.length = I, y;
          var He = qt(Jt);
          try {
            y[I] = He;
          } catch (je) {
            try {
              Xt(A);
            } finally {
              throw je;
            }
          }
          I++;
        }
      }
      function d(h, f, y) {
        var w = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (g(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var x = o.get(f);
          g(x) || (x.delete(y), x.size === 0 && o.delete(x));
        }
        return !0;
      }
    }
    function ke(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, c = n.getOwnMetadata, v = n.getOwnMetadataKeys, P = n.deleteMetadata, O = new N(), b = {
        isProviderFor: function(d, h) {
          var f = O.get(d);
          return !g(f) && f.has(h) ? !0 : v(d, h).length ? (g(f) && (f = new k(), O.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return b;
    }
    function tt(n, o, a) {
      var c = G.getProvider(n, o);
      if (!g(c))
        return c;
      if (a) {
        if (G.setProvider(n, o, K))
          return K;
        throw new Error("Illegal state.");
      }
    }
    function Ne() {
      var n = {}, o = [], a = (
        /** @class */
        function() {
          function b(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, b.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, b;
        }()
      ), c = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, b.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, b.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, y = h + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, At(d, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(d, h) {
            if (!At(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (At(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return c;
      function v(b, d) {
        return b;
      }
      function P(b, d) {
        return d;
      }
      function O(b, d) {
        return [b, d];
      }
    }
    function Ie() {
      var n = (
        /** @class */
        function() {
          function o() {
            this._map = new S();
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
          }, o.prototype[u] = function() {
            return this.keys();
          }, o;
        }()
      );
      return n;
    }
    function De() {
      var n = 16, o = $.create(), a = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var y = v(
              h,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, d.prototype.delete = function(h) {
            var f = v(
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
          d = "@@WeakMap@@" + b();
        while ($.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, h) {
        if (!i.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: $.create() });
        }
        return d[a];
      }
      function P(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, d), h;
        }
        return P(new Array(d), d);
      }
      function b() {
        var d = O(n);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < n; ++f) {
          var y = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function Ct(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(te || (te = {}));
function Le(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Be(r) {
  return function(t) {
    if (Le(r)) {
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
function We(r) {
  return Be(r);
}
function Ge(r) {
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
        var E;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const $ = new CSSStyleSheet(), _ = (E = l.sheet) == null ? void 0 : E.cssRules;
          _ && (Array.from(_).forEach((S) => $.insertRule(S.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          p.appendChild($);
        }
        u.forEach(($) => {
          const _ = $.cloneNode(!0);
          p.appendChild(_);
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
function Fe(r) {
  return function(t, e) {
    try {
      Ve(r);
      const i = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? e);
      }
      i.push(r), Reflect.defineMetadata("ZeroAttribute", i, t);
    } catch (i) {
      console.log(i);
    }
  };
}
function B(r) {
  return Fe(r);
}
var U;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(U || (U = {}));
var H;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(H || (H = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt = globalThis, Rt = bt.ShadowRoot && (bt.ShadyCSS === void 0 || bt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, kt = Symbol(), ee = /* @__PURE__ */ new WeakMap();
let ve = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== kt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Rt && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = ee.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && ee.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ye = (r) => new ve(typeof r == "string" ? r : r + "", void 0, kt), qe = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((i, s, l) => i + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ve(e, r, kt);
}, Ze = (r, t) => {
  if (Rt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), s = bt.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = e.cssText, r.appendChild(i);
  }
}, re = Rt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return Ye(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xe, defineProperty: Je, getOwnPropertyDescriptor: Qe, getOwnPropertyNames: Ke, getOwnPropertySymbols: tr, getPrototypeOf: er } = Object, L = globalThis, ie = L.trustedTypes, rr = ie ? ie.emptyScript : "", Ot = L.reactiveElementPolyfillSupport, rt = (r, t) => r, wt = { toAttribute(r, t) {
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
} }, Nt = (r, t) => !Xe(r, t), ne = { attribute: !0, type: String, converter: wt, reflect: !1, useDefault: !1, hasChanged: Nt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = ne) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && Je(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: s, set: l } = Qe(this.prototype, t) ?? { get() {
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
    return this.elementProperties.get(t) ?? ne;
  }
  static _$Ei() {
    if (this.hasOwnProperty(rt("elementProperties"))) return;
    const t = er(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(rt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(rt("properties"))) {
      const e = this.properties, i = [...Ke(e), ...tr(e)];
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
      for (const s of i) e.unshift(re(s));
    } else t !== void 0 && e.push(re(t));
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
    return Ze(t, this.constructor.elementStyles), t;
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
      const u = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : wt).toAttribute(e, i.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const i = this.constructor, s = i._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const m = i.getPropertyOptions(s), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : wt;
      this._$Em = s;
      const E = p.fromAttribute(e, m.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, s = !1, l) {
    var u;
    if (t !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[t]), i ?? (i = m.getPropertyOptions(t)), !((i.hasChanged ?? Nt)(l, e) || i.useDefault && i.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(m._$Eu(t, i)))) return;
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[rt("elementProperties")] = /* @__PURE__ */ new Map(), X[rt("finalized")] = /* @__PURE__ */ new Map(), Ot == null || Ot({ ReactiveElement: X }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = globalThis, se = (r) => r, $t = it.trustedTypes, oe = $t ? $t.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, me = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, ge = "?" + z, ir = `<${ge}>`, q = document, st = () => q.createComment(""), ot = (r) => r === null || typeof r != "object" && typeof r != "function", It = Array.isArray, nr = (r) => It(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Mt = `[ 	
\f\r]`, et = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ae = /-->/g, le = />/g, V = RegExp(`>|${Mt}(?:([^\\s"'>=/]+)(${Mt}*=${Mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ue = /'/g, ce = /"/g, _e = /^(?:script|style|textarea|title)$/i, sr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), gt = sr(1), J = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), de = /* @__PURE__ */ new WeakMap(), F = q.createTreeWalker(q, 129);
function be(r, t) {
  if (!It(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return oe !== void 0 ? oe.createHTML(t) : t;
}
const or = (r, t) => {
  const e = r.length - 1, i = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = et;
  for (let m = 0; m < e; m++) {
    const p = r[m];
    let E, $, _ = -1, S = 0;
    for (; S < p.length && (u.lastIndex = S, $ = u.exec(p), $ !== null); ) S = u.lastIndex, u === et ? $[1] === "!--" ? u = ae : $[1] !== void 0 ? u = le : $[2] !== void 0 ? (_e.test($[2]) && (s = RegExp("</" + $[2], "g")), u = V) : $[3] !== void 0 && (u = V) : u === V ? $[0] === ">" ? (u = s ?? et, _ = -1) : $[1] === void 0 ? _ = -2 : (_ = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? V : $[3] === '"' ? ce : ue) : u === ce || u === ue ? u = V : u === ae || u === le ? u = et : (u = V, s = void 0);
    const k = u === V && r[m + 1].startsWith("/>") ? " " : "";
    l += u === et ? p + ir : _ >= 0 ? (i.push(E), p.slice(0, _) + me + p.slice(_) + z + k) : p + z + (_ === -2 ? m : k);
  }
  return [be(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class at {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = t.length - 1, p = this.parts, [E, $] = or(t, e);
    if (this.el = at.createElement(E, i), F.currentNode = this.el.content, e === 2 || e === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (s = F.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const _ of s.getAttributeNames()) if (_.endsWith(me)) {
          const S = $[u++], k = s.getAttribute(_).split(z), N = /([.?@])?(.*)/.exec(S);
          p.push({ type: 1, index: l, name: N[2], strings: k, ctor: N[1] === "." ? lr : N[1] === "?" ? ur : N[1] === "@" ? cr : Et }), s.removeAttribute(_);
        } else _.startsWith(z) && (p.push({ type: 6, index: l }), s.removeAttribute(_));
        if (_e.test(s.tagName)) {
          const _ = s.textContent.split(z), S = _.length - 1;
          if (S > 0) {
            s.textContent = $t ? $t.emptyScript : "";
            for (let k = 0; k < S; k++) s.append(_[k], st()), F.nextNode(), p.push({ type: 2, index: ++l });
            s.append(_[S], st());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ge) p.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = s.data.indexOf(z, _ + 1)) !== -1; ) p.push({ type: 7, index: l }), _ += z.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const i = q.createElement("template");
    return i.innerHTML = t, i;
  }
}
function Q(r, t, e = r, i) {
  var u, m;
  if (t === J) return t;
  let s = i !== void 0 ? (u = e._$Co) == null ? void 0 : u[i] : e._$Cl;
  const l = ot(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, i)), i !== void 0 ? (e._$Co ?? (e._$Co = []))[i] = s : e._$Cl = s), s !== void 0 && (t = Q(r, s._$AS(r, t.values), s, i)), t;
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
    const { el: { content: e }, parts: i } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? q).importNode(e, !0);
    F.currentNode = s;
    let l = F.nextNode(), u = 0, m = 0, p = i[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let E;
        p.type === 2 ? E = new lt(l, l.nextSibling, this, t) : p.type === 1 ? E = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (E = new dr(l, this, t)), this._$AV.push(E), p = i[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = F.nextNode(), u++);
    }
    return F.currentNode = q, s;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class lt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, i, s) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = Q(this, t, e), ot(t) ? t === T || t == null || t === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== J && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : nr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== T && ot(this._$AH) ? this._$AA.nextSibling.data = t : this.T(q.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: i } = t, s = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = at.createElement(be(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new ar(s, this), m = u.u(this.options);
      u.p(e), this.T(m), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = de.get(t.strings);
    return e === void 0 && de.set(t.strings, e = new at(t)), e;
  }
  k(t) {
    It(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const l of t) s === e.length ? e.push(i = new lt(this.O(st()), this.O(st()), this, this.options)) : i = e[s], i._$AI(l), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = se(t).nextSibling;
      se(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class Et {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, s, l) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = T;
  }
  _$AI(t, e = this, i, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = Q(this, t, e, 0), u = !ot(t) || t !== this._$AH && t !== J, u && (this._$AH = t);
    else {
      const m = t;
      let p, E;
      for (t = l[0], p = 0; p < l.length - 1; p++) E = Q(this, m[i + p], e, p), E === J && (E = this._$AH[p]), u || (u = !ot(E) || E !== this._$AH[p]), E === T ? t = T : t !== T && (t += (E ?? "") + l[p + 1]), this._$AH[p] = E;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class lr extends Et {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === T ? void 0 : t;
  }
}
class ur extends Et {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== T);
  }
}
class cr extends Et {
  constructor(t, e, i, s, l) {
    super(t, e, i, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Q(this, t, e, 0) ?? T) === J) return;
    const i = this._$AH, s = t === T && i !== T || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, l = t !== T && (i === T || s);
    s && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class dr {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Q(this, t);
  }
}
const Pt = it.litHtmlPolyfillSupport;
Pt == null || Pt(at, lt), (it.litHtmlVersions ?? (it.litHtmlVersions = [])).push("3.3.3");
const hr = (r, t, e) => {
  const i = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = i._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    i._$litPart$ = s = new lt(t.insertBefore(st(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis;
class nt extends X {
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
    return J;
  }
}
var ye;
nt._$litElement$ = !0, nt.finalized = !0, (ye = Y.litElementHydrateSupport) == null || ye.call(Y, { LitElement: nt });
const Tt = Y.litElementPolyfillSupport;
Tt == null || Tt({ LitElement: nt });
(Y.litElementVersions ?? (Y.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr = { attribute: !0, type: String, converter: wt, reflect: !1, hasChanged: Nt }, pr = (r = fr, t, e) => {
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
function W(r) {
  return (t, e) => typeof e == "object" ? pr(r, t, e) : ((i, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, i), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var yr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, R = (r, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? vr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (i ? u(t, e, s) : u(s)) || s);
  return i && s && yr(t, e, s), s;
};
const _t = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "✕"
}, he = {
  info: "var(--uiv-color-info, #0ea5e9)",
  success: "var(--uiv-color-success, #10b981)",
  warning: "var(--uiv-color-warning, #f59e0b)",
  error: "var(--uiv-color-danger, #ef4444)"
}, fe = {
  kind: "generic",
  templateHtml: [
    "<div style='display:inline-flex;align-items:flex-start;gap:12px;min-width:260px;max-width:340px;padding:14px 16px;border-radius:12px;background:#ffffff;border:1px solid rgba(0,0,0,0.06);border-left:4px solid #10b981;box-shadow:0 8px 24px rgba(0,0,0,0.12);font-family:inherit;box-sizing:border-box;'>",
    "<div style='flex:none;width:22px;height:22px;border-radius:50%;background:#10b981;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;'>✓</div>",
    "<div style='flex:1;'>",
    "<div style='font-weight:700;font-size:14px;color:#1f2937;margin-bottom:2px;'>{{display:title}}</div>",
    "<div style='font-size:13px;color:#4b5563;line-height:1.4;'>Your changes have been saved.</div>",
    "</div>",
    "<div style='flex:none;color:#9ca3af;font-size:15px;font-weight:700;cursor:pointer;'>✕</div>",
    "</div>"
  ].join(""),
  labelProp: "title",
  badges: ["Feedback", "Toast"]
};
function pe(r) {
  return String(r).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let M = class extends nt {
  constructor() {
    super(...arguments), this.title = "Notification", this.message = "This is a toast message.", this.type = "info", this.position = "top-right", this.duration = 4e3, this.showIcon = !0, this.dismissible = !0, this.hiddenState = !1, this._timer = null;
  }
  static getStudioTemplate(r) {
    var _, S, k, N, j, G, K, ut, ct, dt, ht, ft, pt, yt, vt;
    if (!r) return fe;
    const t = (((_ = r.props) == null ? void 0 : _.type) ?? ((k = (S = r.studio) == null ? void 0 : S.props) == null ? void 0 : k.type)) || "info", e = ((N = r.props) == null ? void 0 : N.showIcon) ?? ((G = (j = r.studio) == null ? void 0 : j.props) == null ? void 0 : G.showIcon) ?? !0, i = ((K = r.props) == null ? void 0 : K.dismissible) ?? ((ct = (ut = r.studio) == null ? void 0 : ut.props) == null ? void 0 : ct.dismissible) ?? !0, s = pe(((dt = r.props) == null ? void 0 : dt.title) ?? ((ft = (ht = r.studio) == null ? void 0 : ht.props) == null ? void 0 : ft.title) ?? "Notification"), l = pe(
      ((pt = r.props) == null ? void 0 : pt.message) ?? ((vt = (yt = r.studio) == null ? void 0 : yt.props) == null ? void 0 : vt.message) ?? "This is a toast message."
    ), u = he[t] || he.info, m = _t[t] || _t.info, p = e ? `<div style='flex:none;width:22px;height:22px;border-radius:50%;background:${u};color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;'>${m}</div>` : "", E = i ? "<div style='flex:none;color:var(--uiv-text-tertiary, #9ca3af);font-size:15px;font-weight:700;cursor:pointer;'>✕</div>" : "", $ = s ? `<div style='font-weight:700;font-size:14px;color:var(--uiv-text-color, #1f2937);margin-bottom:2px;'>${s}</div>` : "";
    return {
      ...fe,
      // Rendered INLINE (static position) so it is visible on the design canvas
      // rather than fixed/off-screen like the live overlay element.
      templateHtml: [
        `<div style='display:inline-flex;align-items:flex-start;gap:12px;min-width:260px;max-width:340px;padding:14px 16px;border-radius:12px;background:var(--uiv-surface-color, #ffffff);border:1px solid var(--uiv-border-color, rgba(0,0,0,0.06));border-left:4px solid ${u};box-shadow:var(--uiv-shadow-depth, 0 8px 24px rgba(0,0,0,0.12));font-family:inherit;box-sizing:border-box;'>`,
        p,
        `<div style='flex:1;'>${$}<div style='font-size:13px;color:var(--uiv-text-muted, #4b5563);line-height:1.4;'>${l}</div></div>`,
        E,
        "</div>"
      ].join("")
    };
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(r) {
    this.title = r;
  }
  get messageConfig() {
    return this.message;
  }
  set messageConfig(r) {
    this.message = r;
  }
  get typeConfig() {
    return this.type;
  }
  set typeConfig(r) {
    this.type = r || "info";
  }
  get positionConfig() {
    return this.position;
  }
  set positionConfig(r) {
    this.position = r || "top-right";
  }
  get durationConfig() {
    return this.duration;
  }
  set durationConfig(r) {
    this.duration = Math.max(0, Number(r) || 0);
  }
  get showIconConfig() {
    return this.showIcon;
  }
  set showIconConfig(r) {
    this.showIcon = !!r;
  }
  get dismissibleConfig() {
    return this.dismissible;
  }
  set dismissibleConfig(r) {
    this.dismissible = !!r;
  }
  handleDismiss() {
    this.clearTimer(), this.hiddenState = !0, this.dispatchEvent(
      new CustomEvent("on-dismiss", {
        detail: { type: this.type, title: this.title },
        bubbles: !0,
        composed: !0
      })
    );
  }
  clearTimer() {
    this._timer && (clearTimeout(this._timer), this._timer = null);
  }
  startTimer() {
    this.clearTimer();
    const r = Number(this.duration) || 0;
    r > 0 && (this._timer = setTimeout(() => this.handleDismiss(), r));
  }
  connectedCallback() {
    super.connectedCallback(), this.startTimer();
  }
  disconnectedCallback() {
    this.clearTimer(), super.disconnectedCallback();
  }
  render() {
    const r = _t[this.type] || _t.info;
    return gt`
      <div class="toast type-${this.type}" role="status" aria-live="polite">
        ${this.showIcon ? gt`<div class="icon">${r}</div>` : ""}
        <div class="body">
          ${this.title ? gt`<div class="title">${this.title}</div>` : ""}
          <div class="message">${this.message}</div>
        </div>
        ${this.dismissible ? gt`<button class="close" aria-label="Dismiss" @click=${this.handleDismiss}>&#10005;</button>` : ""}
      </div>
    `;
  }
};
M.styles = qe`
    :host {
      position: fixed;
      z-index: 9999;
      --ts-surface: var(--uiv-surface-color, #ffffff);
      --ts-text: var(--uiv-text-color, #1f2937);
      --ts-muted: var(--uiv-text-muted, #4b5563);
      --ts-tertiary: var(--uiv-text-tertiary, #9ca3af);
      --ts-border: var(--uiv-border-color, rgba(0, 0, 0, 0.06));
      --ts-radius: var(--uiv-border-radius, 12px);
      --ts-shadow: var(--uiv-shadow-depth, 0 8px 24px rgba(0, 0, 0, 0.12));
    }

    /* live overlay positions */
    :host([position="top-right"]) { top: 20px; right: 20px; }
    :host([position="top-left"]) { top: 20px; left: 20px; }
    :host([position="bottom-right"]) { bottom: 20px; right: 20px; }
    :host([position="bottom-left"]) { bottom: 20px; left: 20px; }
    :host([position="top-center"]) { top: 20px; left: 50%; transform: translateX(-50%); }
    :host([position="bottom-center"]) { bottom: 20px; left: 50%; transform: translateX(-50%); }

    :host([hidden-state]) { display: none; }

    .toast {
      display: inline-flex;
      align-items: flex-start;
      gap: 12px;
      min-width: 260px;
      max-width: 340px;
      padding: 14px 16px;
      border-radius: var(--ts-radius);
      background: var(--ts-surface);
      border: 1px solid var(--ts-border);
      border-left: 4px solid var(--ts-accent, var(--uiv-color-info, #0ea5e9));
      box-shadow: var(--ts-shadow);
      font-family: inherit;
      box-sizing: border-box;
      animation: toast-in 0.28s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes toast-in {
      from { opacity: 0; transform: translateY(-8px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* type accents */
    .type-info { --ts-accent: var(--uiv-color-info, #0ea5e9); }
    .type-success { --ts-accent: var(--uiv-color-success, #10b981); }
    .type-warning { --ts-accent: var(--uiv-color-warning, #f59e0b); }
    .type-error { --ts-accent: var(--uiv-color-danger, #ef4444); }

    .icon {
      flex: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--ts-accent);
      color: #ffffff;
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 1;
    }

    .body {
      flex: 1;
      min-width: 0;
    }
    .title {
      font-weight: 700;
      font-size: 0.875rem;
      color: var(--ts-text);
      margin-bottom: 2px;
    }
    .message {
      font-size: 0.82rem;
      line-height: 1.45;
      color: var(--ts-muted);
    }

    .close {
      flex: none;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 0.95rem;
      font-weight: 700;
      line-height: 1;
      color: var(--ts-tertiary);
      padding: 2px;
      transition: color 0.2s ease;
    }
    .close:hover { color: var(--ts-text); }
  `;
R([
  W({ type: String })
], M.prototype, "title", 2);
R([
  W({ type: String })
], M.prototype, "message", 2);
R([
  W({ type: String })
], M.prototype, "type", 2);
R([
  W({ type: String, reflect: !0 })
], M.prototype, "position", 2);
R([
  W({ type: Number })
], M.prototype, "duration", 2);
R([
  W({ type: Boolean, attribute: "show-icon" })
], M.prototype, "showIcon", 2);
R([
  W({ type: Boolean })
], M.prototype, "dismissible", 2);
R([
  W({ type: Boolean, reflect: !0, attribute: "hidden-state" })
], M.prototype, "hiddenState", 2);
R([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title"
  })
], M.prototype, "titleConfig", 1);
R([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: U.TEXTAREA,
    displayLabel: "Message",
    fieldMappings: "message"
  })
], M.prototype, "messageConfig", 1);
R([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Type",
    fieldMappings: "type",
    optionItems: [
      { label: "Info", value: "info" },
      { label: "Success", value: "success" },
      { label: "Warning", value: "warning" },
      { label: "Error", value: "error" }
    ]
  })
], M.prototype, "typeConfig", 1);
R([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Position",
    fieldMappings: "position",
    optionItems: [
      { label: "Top Right", value: "top-right" },
      { label: "Top Left", value: "top-left" },
      { label: "Bottom Right", value: "bottom-right" },
      { label: "Bottom Left", value: "bottom-left" },
      { label: "Top Center", value: "top-center" },
      { label: "Bottom Center", value: "bottom-center" }
    ]
  })
], M.prototype, "positionConfig", 1);
R([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: U.NUMBER_INPUT,
    displayLabel: "Duration (ms, 0 = persistent)",
    fieldMappings: "duration"
  })
], M.prototype, "durationConfig", 1);
R([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Show Icon",
    fieldMappings: "showIcon"
  })
], M.prototype, "showIconConfig", 1);
R([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: U.CHECKBOX,
    displayLabel: "Dismissible",
    fieldMappings: "dismissible"
  })
], M.prototype, "dismissibleConfig", 1);
R([
  B({
    attributeType: H.EVENT,
    displayLabel: "On Dismiss",
    eventTrigger: "on-dismiss"
  })
], M.prototype, "handleDismiss", 1);
M = R([
  We({
    name: "zero-toast",
    version: "1.0.0",
    title: "Toast",
    elementSelector: "zero-toast",
    group: "Feedback",
    iconName: "toast-icon.png"
  }),
  Ge()
], M);
export {
  M as ZeroToast,
  fe as studioTemplate
};
