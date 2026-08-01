var Dt = Object.defineProperty;
var jt = (r, e, t) => e in r ? Dt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Je = (r, e, t) => jt(r, typeof e != "symbol" ? e + "" : e, t);
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
var Ze;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof qe == "object" ? qe : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, S) {
      return function(w, _) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: _ }), S && S(w, _);
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
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, S = !m && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return we(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return we({ __proto__: null });
      } : function() {
        return we({});
      },
      has: S ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: S ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, _ = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : kt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Tt(), R = typeof WeakMap == "function" ? WeakMap : Rt(), j = s ? Symbol.for("@reflect-metadata:registry") : void 0, z = Mt(), Y = Pt(z);
    function ce(i, a, o, c) {
      if (g(o)) {
        if (!He(i))
          throw new TypeError();
        if (!ze(a))
          throw new TypeError();
        return bt(i, a);
      } else {
        if (!He(i))
          throw new TypeError();
        if (!O(a))
          throw new TypeError();
        if (!O(c) && !g(c) && !J(c))
          throw new TypeError();
        return J(c) && (c = void 0), o = D(o), $t(i, a, o, c);
      }
    }
    e("decorate", ce);
    function de(i, a) {
      function o(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!g(v) && !xt(v))
          throw new TypeError();
        Ne(i, a, c, v);
      }
      return o;
    }
    e("metadata", de);
    function he(i, a, o, c) {
      if (!O(o))
        throw new TypeError();
      return g(c) || (c = D(c)), Ne(i, a, o, c);
    }
    e("defineMetadata", he);
    function ft(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return g(o) || (o = D(o)), ke(i, a, o);
    }
    e("hasMetadata", ft);
    function pt(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return g(o) || (o = D(o)), _e(i, a, o);
    }
    e("hasOwnMetadata", pt);
    function yt(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return g(o) || (o = D(o)), Te(i, a, o);
    }
    e("getMetadata", yt);
    function vt(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return g(o) || (o = D(o)), Re(i, a, o);
    }
    e("getOwnMetadata", vt);
    function mt(i, a) {
      if (!O(i))
        throw new TypeError();
      return g(a) || (a = D(a)), Ue(i, a);
    }
    e("getMetadataKeys", mt);
    function gt(i, a) {
      if (!O(i))
        throw new TypeError();
      return g(a) || (a = D(a)), De(i, a);
    }
    e("getOwnMetadataKeys", gt);
    function _t(i, a, o) {
      if (!O(a))
        throw new TypeError();
      if (g(o) || (o = D(o)), !O(a))
        throw new TypeError();
      g(o) || (o = D(o));
      var c = Q(
        a,
        o,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, a, o);
    }
    e("deleteMetadata", _t);
    function bt(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o], v = c(a);
        if (!g(v) && !J(v)) {
          if (!ze(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function $t(i, a, o, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], M = P(a, o, c);
        if (!g(M) && !J(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function ke(i, a, o) {
      var c = _e(i, a, o);
      if (c)
        return !0;
      var v = $e(a);
      return J(v) ? !1 : ke(i, v, o);
    }
    function _e(i, a, o) {
      var c = Q(
        a,
        o,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Ie(c.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Te(i, a, o) {
      var c = _e(i, a, o);
      if (c)
        return Re(i, a, o);
      var v = $e(a);
      if (!J(v))
        return Te(i, v, o);
    }
    function Re(i, a, o) {
      var c = Q(
        a,
        o,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Ne(i, a, o, c) {
      var v = Q(
        o,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, o, c);
    }
    function Ue(i, a) {
      var o = De(i, a), c = $e(i);
      if (c === null)
        return o;
      var v = Ue(c, a);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var P = new k(), M = [], b = 0, d = o; b < d.length; b++) {
        var h = d[b], f = P.has(h);
        f || (P.add(h), M.push(h));
      }
      for (var y = 0, $ = v; y < $.length; y++) {
        var h = $[y], f = P.has(h);
        f || (P.add(h), M.push(h));
      }
      return M;
    }
    function De(i, a) {
      var o = Q(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function je(i) {
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
    function J(i) {
      return i === null;
    }
    function wt(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function St(i, a) {
      switch (je(i)) {
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
      var o = "string", c = Le(i, l);
      if (c !== void 0) {
        var v = c.call(i, o);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return At(i);
    }
    function At(i, a) {
      var o, c;
      {
        var v = i.toString;
        if (fe(v)) {
          var c = v.call(i);
          if (!O(c))
            return c;
        }
        var o = i.valueOf;
        if (fe(o)) {
          var c = o.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ie(i) {
      return !!i;
    }
    function Et(i) {
      return "" + i;
    }
    function D(i) {
      var a = St(i);
      return wt(a) ? a : Et(a);
    }
    function He(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function fe(i) {
      return typeof i == "function";
    }
    function ze(i) {
      return typeof i == "function";
    }
    function xt(i) {
      switch (je(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function be(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Le(i, a) {
      var o = i[a];
      if (o != null) {
        if (!fe(o))
          throw new TypeError();
        return o;
      }
    }
    function Be(i) {
      var a = Le(i, u);
      if (!fe(a))
        throw new TypeError();
      var o = a.call(i);
      if (!O(o))
        throw new TypeError();
      return o;
    }
    function Ge(i) {
      return i.value;
    }
    function We(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Fe(i) {
      var a = i.return;
      a && a.call(i);
    }
    function $e(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || a !== _)
        return a;
      var o = i.prototype, c = o && Object.getPrototypeOf(o);
      if (c == null || c === Object.prototype)
        return a;
      var v = c.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function Ot() {
      var i;
      !g(j) && typeof t.Reflect < "u" && !(j in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Ct(t.Reflect));
      var a, o, c, v = new R(), P = {
        registerProvider: M,
        getProvider: d,
        setProvider: f
      };
      return P;
      function M(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case g(a):
            a = y;
            break;
          case a === y:
            break;
          case g(o):
            o = y;
            break;
          case o === y:
            break;
          default:
            c === void 0 && (c = new k()), c.add(y);
            break;
        }
      }
      function b(y, $) {
        if (!g(a)) {
          if (a.isProviderFor(y, $))
            return a;
          if (!g(o)) {
            if (o.isProviderFor(y, $))
              return a;
            if (!g(c))
              for (var A = Be(c); ; ) {
                var E = We(A);
                if (!E)
                  return;
                var N = Ge(E);
                if (N.isProviderFor(y, $))
                  return Fe(A), N;
              }
          }
        }
        if (!g(i) && i.isProviderFor(y, $))
          return i;
      }
      function d(y, $) {
        var A = v.get(y), E;
        return g(A) || (E = A.get($)), g(E) && (E = b(y, $), g(E) || (g(A) && (A = new x(), v.set(y, A)), A.set($, E))), E;
      }
      function h(y) {
        if (g(y))
          throw new TypeError();
        return a === y || o === y || !g(c) && c.has(y);
      }
      function f(y, $, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var E = d(y, $);
        if (E !== A) {
          if (!g(E))
            return !1;
          var N = v.get(y);
          g(N) && (N = new x(), v.set(y, N)), N.set($, A);
        }
        return !0;
      }
    }
    function Mt() {
      var i;
      return !g(j) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[j]), g(i) && (i = Ot()), !g(j) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, j, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
      var a = new R(), o = {
        isProviderFor: function(h, f) {
          var y = a.get(h);
          return g(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: d
      };
      return z.registerProvider(o), o;
      function c(h, f, y) {
        var $ = a.get(h), A = !1;
        if (g($)) {
          if (!y)
            return;
          $ = new x(), a.set(h, $), A = !0;
        }
        var E = $.get(f);
        if (g(E)) {
          if (!y)
            return;
          if (E = new x(), $.set(f, E), !i.setProvider(h, f, o))
            throw $.delete(f), A && a.delete(h), new Error("Wrong provider for target.");
        }
        return E;
      }
      function v(h, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        return g($) ? !1 : Ie($.has(h));
      }
      function P(h, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (!g($))
          return $.get(h);
      }
      function M(h, f, y, $) {
        var A = c(
          y,
          $,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function b(h, f) {
        var y = [], $ = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (g($))
          return y;
        for (var A = $.keys(), E = Be(A), N = 0; ; ) {
          var Ve = We(E);
          if (!Ve)
            return y.length = N, y;
          var Nt = Ge(Ve);
          try {
            y[N] = Nt;
          } catch (Ut) {
            try {
              Fe(E);
            } finally {
              throw Ut;
            }
          }
          N++;
        }
      }
      function d(h, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (g($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var A = a.get(f);
          g(A) || (A.delete(y), A.size === 0 && a.delete(A));
        }
        return !0;
      }
    }
    function Ct(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, M = new R(), b = {
        isProviderFor: function(d, h) {
          var f = M.get(d);
          return !g(f) && f.has(h) ? !0 : v(d, h).length ? (g(f) && (f = new k(), M.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return b;
    }
    function Q(i, a, o) {
      var c = z.getProvider(i, a);
      if (!g(c))
        return c;
      if (o) {
        if (z.setProvider(i, a, Y))
          return Y;
        throw new Error("Illegal state.");
      }
    }
    function kt() {
      var i = {}, a = [], o = (
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
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), d;
          }, b.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: d, done: !0 };
          }, b;
        }()
      ), c = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
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
              return this._keys.length--, this._values.length--, be(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new o(this._keys, this._values, P);
          }, b.prototype.entries = function() {
            return new o(this._keys, this._values, M);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(d, h) {
            if (!be(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (be(this._keys[f], d)) {
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
      function M(b, d) {
        return [b, d];
      }
    }
    function Tt() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new x();
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
      return i;
    }
    function Rt() {
      var i = 16, a = w.create(), o = c();
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
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
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
        while (w.has(a, d));
        return a[d] = !0, d;
      }
      function v(d, h) {
        if (!n.call(d, o)) {
          if (!h)
            return;
          Object.defineProperty(d, o, { value: w.create() });
        }
        return d[o];
      }
      function P(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function M(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, d), h;
        }
        return P(new Array(d), d);
      }
      function b() {
        var d = M(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var y = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function we(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ze || (Ze = {}));
function It(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ht(r) {
  return function(e) {
    if (It(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName,
        layoutKind: r.layoutKind,
        environment: r.environment
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
function zt(r) {
  return Ht(r);
}
function Lt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Je(this, "_stylesApplied", !1);
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
        var S;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const w = new CSSStyleSheet(), _ = (S = l.sheet) == null ? void 0 : S.cssRules;
          _ && (Array.from(_).forEach((x) => w.insertRule(x.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
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
    return t;
  };
}
function Bt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Gt(r) {
  return function(e, t) {
    try {
      Bt(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function oe(r) {
  return Gt(r);
}
var W;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(W || (W = {}));
var F;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(F || (F = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ye = globalThis, Oe = ye.ShadowRoot && (ye.ShadyCSS === void 0 || ye.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Me = Symbol(), Xe = /* @__PURE__ */ new WeakMap();
let lt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Me) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Oe && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Xe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Xe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (r) => new lt(typeof r == "string" ? r : r + "", void 0, Me), Ft = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new lt(t, r, Me);
}, Vt = (r, e) => {
  if (Oe) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ye.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Ye = Oe ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Wt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Jt, defineProperty: qt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Xt, getOwnPropertySymbols: Yt, getPrototypeOf: Qt } = Object, H = globalThis, Qe = H.trustedTypes, Kt = Qe ? Qe.emptyScript : "", Se = H.reactiveElementPolyfillSupport, te = (r, e) => r, ve = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Kt : null;
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
} }, Pe = (r, e) => !Jt(r, e), Ke = { attribute: !0, type: String, converter: ve, reflect: !1, useDefault: !1, hasChanged: Pe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let q = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ke) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && qt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Zt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ke;
  }
  static _$Ei() {
    if (this.hasOwnProperty(te("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(te("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(te("properties"))) {
      const t = this.properties, n = [...Xt(t), ...Yt(t)];
      for (const s of n) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, s] of t) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const s = this._$Eu(t, n);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const s of n) t.unshift(Ye(s));
    } else e !== void 0 && t.push(Ye(e));
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
    return Vt(e, this.constructor.elementStyles), e;
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
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ve).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const m = n.getPropertyOptions(s), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : ve;
      this._$Em = s;
      const S = p.fromAttribute(t, m.type);
      this[s] = S ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? S, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? Pe)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: m } = u, p = this[l];
        m !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(t)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
q.elementStyles = [], q.shadowRootOptions = { mode: "open" }, q[te("elementProperties")] = /* @__PURE__ */ new Map(), q[te("finalized")] = /* @__PURE__ */ new Map(), Se == null || Se({ ReactiveElement: q }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re = globalThis, et = (r) => r, me = re.trustedTypes, tt = me ? me.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ut = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, ct = "?" + I, er = `<${ct}>`, V = document, ie = () => V.createComment(""), se = (r) => r === null || typeof r != "object" && typeof r != "function", Ce = Array.isArray, tr = (r) => Ce(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Ae = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, rt = /-->/g, nt = />/g, L = RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), it = /'/g, st = /"/g, dt = /^(?:script|style|textarea|title)$/i, rr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), pe = rr(1), Z = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), at = /* @__PURE__ */ new WeakMap(), B = V.createTreeWalker(V, 129);
function ht(r, e) {
  if (!Ce(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return tt !== void 0 ? tt.createHTML(e) : e;
}
const nr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let m = 0; m < t; m++) {
    const p = r[m];
    let S, w, _ = -1, x = 0;
    for (; x < p.length && (u.lastIndex = x, w = u.exec(p), w !== null); ) x = u.lastIndex, u === K ? w[1] === "!--" ? u = rt : w[1] !== void 0 ? u = nt : w[2] !== void 0 ? (dt.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = L) : w[3] !== void 0 && (u = L) : u === L ? w[0] === ">" ? (u = s ?? K, _ = -1) : w[1] === void 0 ? _ = -2 : (_ = u.lastIndex - w[2].length, S = w[1], u = w[3] === void 0 ? L : w[3] === '"' ? st : it) : u === st || u === it ? u = L : u === rt || u === nt ? u = K : (u = L, s = void 0);
    const k = u === L && r[m + 1].startsWith("/>") ? " " : "";
    l += u === K ? p + er : _ >= 0 ? (n.push(S), p.slice(0, _) + ut + p.slice(_) + I + k) : p + I + (_ === -2 ? m : k);
  }
  return [ht(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ae {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, p = this.parts, [S, w] = nr(e, t);
    if (this.el = ae.createElement(S, n), B.currentNode = this.el.content, t === 2 || t === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (s = B.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const _ of s.getAttributeNames()) if (_.endsWith(ut)) {
          const x = w[u++], k = s.getAttribute(_).split(I), R = /([.?@])?(.*)/.exec(x);
          p.push({ type: 1, index: l, name: R[2], strings: k, ctor: R[1] === "." ? sr : R[1] === "?" ? ar : R[1] === "@" ? or : ge }), s.removeAttribute(_);
        } else _.startsWith(I) && (p.push({ type: 6, index: l }), s.removeAttribute(_));
        if (dt.test(s.tagName)) {
          const _ = s.textContent.split(I), x = _.length - 1;
          if (x > 0) {
            s.textContent = me ? me.emptyScript : "";
            for (let k = 0; k < x; k++) s.append(_[k], ie()), B.nextNode(), p.push({ type: 2, index: ++l });
            s.append(_[x], ie());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ct) p.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = s.data.indexOf(I, _ + 1)) !== -1; ) p.push({ type: 7, index: l }), _ += I.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = V.createElement("template");
    return n.innerHTML = e, n;
  }
}
function X(r, e, t = r, n) {
  var u, m;
  if (e === Z) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = se(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = X(r, s._$AS(r, e.values), s, n)), e;
}
class ir {
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? V).importNode(t, !0);
    B.currentNode = s;
    let l = B.nextNode(), u = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let S;
        p.type === 2 ? S = new le(l, l.nextSibling, this, e) : p.type === 1 ? S = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (S = new lr(l, this, e)), this._$AV.push(S), p = n[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = B.nextNode(), u++);
    }
    return B.currentNode = V, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class le {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = X(this, e, t), se(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(V.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ae.createElement(ht(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ir(s, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = at.get(e.strings);
    return t === void 0 && at.set(e.strings, t = new ae(e)), t;
  }
  k(e) {
    Ce(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new le(this.O(ie()), this.O(ie()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = et(e).nextSibling;
      et(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ge {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = X(this, e, t, 0), u = !se(e) || e !== this._$AH && e !== Z, u && (this._$AH = e);
    else {
      const m = e;
      let p, S;
      for (e = l[0], p = 0; p < l.length - 1; p++) S = X(this, m[n + p], t, p), S === Z && (S = this._$AH[p]), u || (u = !se(S) || S !== this._$AH[p]), S === C ? e = C : e !== C && (e += (S ?? "") + l[p + 1]), this._$AH[p] = S;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class sr extends ge {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class ar extends ge {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class or extends ge {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = X(this, e, t, 0) ?? C) === Z) return;
    const n = this._$AH, s = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== C && (n === C || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class lr {
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
const Ee = re.litHtmlPolyfillSupport;
Ee == null || Ee(ae, le), (re.litHtmlVersions ?? (re.litHtmlVersions = [])).push("3.3.3");
const ur = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new le(e.insertBefore(ie(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class ne extends q {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ur(t, this.renderRoot, this.renderOptions);
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
    return Z;
  }
}
var ot;
ne._$litElement$ = !0, ne.finalized = !0, (ot = G.litElementHydrateSupport) == null || ot.call(G, { LitElement: ne });
const xe = G.litElementPolyfillSupport;
xe == null || xe({ LitElement: ne });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: ve, reflect: !1, hasChanged: Pe }, dr = (r = cr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(m) {
      const p = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(u, p, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(m) {
      const p = this[u];
      e.call(this, m), this.requestUpdate(u, p, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function ue(r) {
  return (e, t) => typeof t == "object" ? dr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, U = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && hr(e, t, s), s;
};
const mr = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#f9fafb;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:0 auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;padding:24px;border:1px solid #e5e7eb;border-radius:12px;background:#ffffff;text-align:center;'>",
    "<h3 style='font-size:16px;font-weight:600;margin-bottom:8px;'>Starter</h3>",
    "<div style='font-size:32px;font-weight:800;margin-bottom:16px;'>$9<span style='font-size:14px;color:#6b7280;'>/mo</span></div>",
    "<ul style='list-style:none;padding:0;font-size:13px;color:#4b5563;margin-bottom:20px;'><li>Basic features</li><li>Single member</li></ul>",
    "<span style='display:block;padding:8px 16px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-size:13px;font-weight:600;'>Get Started</span>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Pricing"]
};
function ee(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let T = class extends ne {
  constructor() {
    super(...arguments), this.title = "Flexible Subscriptions", this.lead = "Choose the ideal plan to scale your digital workflow.", this.pricingJson = '[{"title":"Basic","price":"$9","period":"mo","features":["1 User Workspace","Standard Operations","Community Support"],"ctaText":"Choose Basic","ctaUrl":"#"},{"title":"Professional","price":"$29","period":"mo","features":["10 User Workspaces","Priority Operations","24/7 Support"],"ctaText":"Choose Pro","ctaUrl":"#","featured":true},{"title":"Enterprise","price":"$99","period":"mo","features":["Unlimited Workspaces","Dedicated Clusters","SLA Guarantee"],"ctaText":"Choose Enterprise","ctaUrl":"#"}]', this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    var u, m, p, S, w, _, x, k, R, j, z, Y, ce, de, he;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-block-pricing-1.0.0></zero-block-pricing-1.0.0>"
      };
    const e = ee(((u = r == null ? void 0 : r.props) == null ? void 0 : u.title) ?? ((p = (m = r == null ? void 0 : r.studio) == null ? void 0 : m.props) == null ? void 0 : p.title) ?? "Flexible Subscriptions"), t = ee(((S = r == null ? void 0 : r.props) == null ? void 0 : S.lead) ?? ((_ = (w = r == null ? void 0 : r.studio) == null ? void 0 : w.props) == null ? void 0 : _.lead) ?? ""), n = ee(((x = r == null ? void 0 : r.props) == null ? void 0 : x.pricingJson) ?? ((R = (k = r == null ? void 0 : r.studio) == null ? void 0 : k.props) == null ? void 0 : R.pricingJson) ?? "[]"), s = ee(((j = r == null ? void 0 : r.props) == null ? void 0 : j.layout) ?? ((Y = (z = r == null ? void 0 : r.studio) == null ? void 0 : z.props) == null ? void 0 : Y.layout) ?? "layout-1"), l = ee(((ce = r == null ? void 0 : r.props) == null ? void 0 : ce.themeStyle) ?? ((he = (de = r == null ? void 0 : r.studio) == null ? void 0 : de.props) == null ? void 0 : he.themeStyle) ?? "light");
    return {
      kind: "generic",
      templateHtml: `
        <zero-block-pricing-1.0.0
          title="${e}"
          lead="${t}"
          pricing-json="${n}"
          layout="${s}"
          theme-style="${l}"
        ></zero-block-pricing-1.0.0>
      `
    };
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(r) {
    this.title = r;
  }
  get leadConfig() {
    return this.lead;
  }
  set leadConfig(r) {
    this.lead = r;
  }
  get pricingJsonConfig() {
    return this.pricingJson;
  }
  set pricingJsonConfig(r) {
    this.pricingJson = r;
  }
  get layoutConfig() {
    return this.layout;
  }
  set layoutConfig(r) {
    this.layout = r || "layout-1";
  }
  get themeStyleConfig() {
    return this.themeStyle;
  }
  set themeStyleConfig(r) {
    this.themeStyle = r || "light";
  }
  parsePricing() {
    try {
      return JSON.parse(this.pricingJson);
    } catch {
      return [];
    }
  }
  render() {
    let r = this.parsePricing();
    return this.layout === "layout-2" && r.length > 0 && (r = [r.find((t) => t.featured) || r[0]]), pe`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        <div class="pricing-grid">
          ${r.map((e) => pe`
            <div class="pricing-card ${e.featured ? "featured" : ""}">
              ${e.featured ? pe`<div class="featured-badge">Popular</div>` : ""}
              <h3>${e.title}</h3>
              <div class="price-value">
                ${e.price}
                <span class="price-period">/${e.period}</span>
              </div>
              <ul class="features-list">
                ${e.features.map((t) => pe`<li>${t}</li>`)}
              </ul>
              <a class="btn-buy" href="${e.ctaUrl}">${e.ctaText}</a>
            </div>
          `)}
        </div>
      </section>
    `;
  }
};
T.styles = Ft`
    :host {
      display: block;
      width: 100%;
      --price-bg: var(--uiv-surface-color, #ffffff);
      --price-text: var(--uiv-text-color, #111827);
      --price-lead: #4b5563;
      --price-card-bg: var(--uiv-surface-color, #ffffff);
      --price-card-border: var(--uiv-border-color, #e5e7eb);
      --price-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--price-bg);
      color: var(--price-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --price-bg: #111827;
      --price-text: #f9fafb;
      --price-lead: #9ca3af;
      --price-card-bg: #1f2937;
      --price-card-border: #374151;
    }

    .header-area {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 50px auto;
    }

    h2 {
      font-size: 2.25rem;
      font-weight: 800;
      margin: 0 0 12px 0;
      letter-spacing: -0.02em;
    }

    p.lead {
      font-size: 1.05rem;
      line-height: 1.6;
      color: var(--price-lead);
      margin: 0;
    }

    /* ─── Grid layout ─── */
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
      align-items: center;
    }

    .pricing-card {
      padding: 45px 30px;
      background: var(--price-card-bg);
      border: 1px solid var(--price-card-border);
      border-radius: 12px;
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
    }

    .pricing-card.featured {
      border-color: var(--price-accent);
      box-shadow: 0 15px 30px rgba(99, 102, 241, 0.08);
      transform: scale(1.03);
      z-index: 2;
    }

    .featured-badge {
      position: absolute;
      top: 15px;
      left: 50%;
      transform: translateX(-50%);
      padding: 4px 12px;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #ffffff;
      background: var(--price-accent);
      border-radius: 100px;
    }

    h3 {
      font-size: 1.4rem;
      font-weight: 700;
      margin: 0 0 15px 0;
    }

    .price-value {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 24px;
      letter-spacing: -0.03em;
    }

    .price-period {
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--price-lead);
    }

    ul.features-list {
      list-style: none;
      padding: 0;
      margin: 0 0 35px 0;
      text-align: left;
      display: inline-block;
    }

    ul.features-list li {
      font-size: 0.94rem;
      color: var(--price-lead);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    ul.features-list li::before {
      content: "✓";
      color: var(--price-accent);
      font-weight: bold;
    }

    .btn-buy {
      display: block;
      padding: 12px 24px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--price-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s ease;
    }

    .pricing-card:not(.featured) .btn-buy {
      background: transparent;
      border: 1px solid var(--price-accent);
      color: var(--price-accent);
    }

    .btn-buy:hover {
      opacity: 0.9;
    }

    /* Mobile */
    @media (max-width: 768px) {
      .pricing-grid {
        grid-template-columns: 1fr;
      }
      .pricing-card.featured {
        transform: scale(1);
      }
    }
  `;
U([
  ue({ type: String })
], T.prototype, "title", 2);
U([
  ue({ type: String })
], T.prototype, "lead", 2);
U([
  ue({ type: String, attribute: "pricing-json" })
], T.prototype, "pricingJson", 2);
U([
  ue({ type: String })
], T.prototype, "layout", 2);
U([
  ue({ type: String, attribute: "theme-style" })
], T.prototype, "themeStyle", 2);
U([
  oe({
    attributeType: F.PROPERTY,
    uiComponentType: W.TEXT_INPUT,
    displayLabel: "Section Title",
    fieldMappings: "title"
  })
], T.prototype, "titleConfig", 1);
U([
  oe({
    attributeType: F.PROPERTY,
    uiComponentType: W.TEXT_INPUT,
    displayLabel: "Section Subtitle Copy",
    fieldMappings: "lead"
  })
], T.prototype, "leadConfig", 1);
U([
  oe({
    attributeType: F.PROPERTY,
    uiComponentType: W.TEXTAREA,
    displayLabel: "Pricing Cards JSON",
    fieldMappings: "pricingJson"
  })
], T.prototype, "pricingJsonConfig", 1);
U([
  oe({
    attributeType: F.PROPERTY,
    uiComponentType: W.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Standard Columns Grid", value: "layout-1" },
      { label: "Focused Single Spotlight", value: "layout-2" }
    ]
  })
], T.prototype, "layoutConfig", 1);
U([
  oe({
    attributeType: F.PROPERTY,
    uiComponentType: W.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" }
    ]
  })
], T.prototype, "themeStyleConfig", 1);
T = U([
  zt({
    name: "zero-block-pricing",
    version: "1.0.0",
    title: "Pricing Block",
    elementSelector: "zero-block-pricing",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  Lt()
], T);
export {
  T as ZeroBlockPricing,
  mr as studioTemplate
};
