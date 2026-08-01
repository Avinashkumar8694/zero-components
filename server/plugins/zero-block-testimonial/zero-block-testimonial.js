var je = Object.defineProperty;
var He = (r, t, e) => t in r ? je(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Vt = (r, t, e) => He(r, typeof t != "symbol" ? t + "" : t, e);
var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Zt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Ft == "object" ? Ft : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(p, A) {
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
    function m() {
      return l() || u();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !m && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return wt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return wt({ __proto__: null });
      } : function() {
        return wt({});
      },
      has: A ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: A ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, _ = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Te(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Re(), k = typeof WeakMap == "function" ? WeakMap : ke(), H = s ? Symbol.for("@reflect-metadata:registry") : void 0, z = Me(), X = Ce(z);
    function dt(i, a, o, d) {
      if (g(o)) {
        if (!Ut(i))
          throw new TypeError();
        if (!zt(a))
          throw new TypeError();
        return $e(i, a);
      } else {
        if (!Ut(i))
          throw new TypeError();
        if (!O(a))
          throw new TypeError();
        if (!O(d) && !g(d) && !V(d))
          throw new TypeError();
        return V(d) && (d = void 0), o = j(o), be(i, a, o, d);
      }
    }
    t("decorate", dt);
    function ht(i, a) {
      function o(d, v) {
        if (!O(d))
          throw new TypeError();
        if (!g(v) && !xe(v))
          throw new TypeError();
        Nt(i, a, d, v);
      }
      return o;
    }
    t("metadata", ht);
    function ct(i, a, o, d) {
      if (!O(o))
        throw new TypeError();
      return g(d) || (d = j(d)), Nt(i, a, o, d);
    }
    t("defineMetadata", ct);
    function fe(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return g(o) || (o = j(o)), Tt(i, a, o);
    }
    t("hasMetadata", fe);
    function pe(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return g(o) || (o = j(o)), _t(i, a, o);
    }
    t("hasOwnMetadata", pe);
    function ye(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return g(o) || (o = j(o)), Rt(i, a, o);
    }
    t("getMetadata", ye);
    function ve(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return g(o) || (o = j(o)), kt(i, a, o);
    }
    t("getOwnMetadata", ve);
    function me(i, a) {
      if (!O(i))
        throw new TypeError();
      return g(a) || (a = j(a)), Dt(i, a);
    }
    t("getMetadataKeys", me);
    function ge(i, a) {
      if (!O(i))
        throw new TypeError();
      return g(a) || (a = j(a)), jt(i, a);
    }
    t("getOwnMetadataKeys", ge);
    function _e(i, a, o) {
      if (!O(a))
        throw new TypeError();
      if (g(o) || (o = j(o)), !O(a))
        throw new TypeError();
      g(o) || (o = j(o));
      var d = Q(
        a,
        o,
        /*Create*/
        !1
      );
      return g(d) ? !1 : d.OrdinaryDeleteMetadata(i, a, o);
    }
    t("deleteMetadata", _e);
    function $e(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var d = i[o], v = d(a);
        if (!g(v) && !V(v)) {
          if (!zt(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function be(i, a, o, d) {
      for (var v = i.length - 1; v >= 0; --v) {
        var C = i[v], M = C(a, o, d);
        if (!g(M) && !V(M)) {
          if (!O(M))
            throw new TypeError();
          d = M;
        }
      }
      return d;
    }
    function Tt(i, a, o) {
      var d = _t(i, a, o);
      if (d)
        return !0;
      var v = bt(a);
      return V(v) ? !1 : Tt(i, v, o);
    }
    function _t(i, a, o) {
      var d = Q(
        a,
        o,
        /*Create*/
        !1
      );
      return g(d) ? !1 : It(d.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Rt(i, a, o) {
      var d = _t(i, a, o);
      if (d)
        return kt(i, a, o);
      var v = bt(a);
      if (!V(v))
        return Rt(i, v, o);
    }
    function kt(i, a, o) {
      var d = Q(
        a,
        o,
        /*Create*/
        !1
      );
      if (!g(d))
        return d.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Nt(i, a, o, d) {
      var v = Q(
        o,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, o, d);
    }
    function Dt(i, a) {
      var o = jt(i, a), d = bt(i);
      if (d === null)
        return o;
      var v = Dt(d, a);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var C = new T(), M = [], $ = 0, h = o; $ < h.length; $++) {
        var c = h[$], f = C.has(c);
        f || (C.add(c), M.push(c));
      }
      for (var y = 0, b = v; y < b.length; y++) {
        var c = b[y], f = C.has(c);
        f || (C.add(c), M.push(c));
      }
      return M;
    }
    function jt(i, a) {
      var o = Q(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Ht(i) {
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
    function V(i) {
      return i === null;
    }
    function we(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ae(i, a) {
      switch (Ht(i)) {
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
      var o = "string", d = Lt(i, l);
      if (d !== void 0) {
        var v = d.call(i, o);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return Se(i);
    }
    function Se(i, a) {
      var o, d;
      {
        var v = i.toString;
        if (ft(v)) {
          var d = v.call(i);
          if (!O(d))
            return d;
        }
        var o = i.valueOf;
        if (ft(o)) {
          var d = o.call(i);
          if (!O(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function It(i) {
      return !!i;
    }
    function Ee(i) {
      return "" + i;
    }
    function j(i) {
      var a = Ae(i);
      return we(a) ? a : Ee(a);
    }
    function Ut(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ft(i) {
      return typeof i == "function";
    }
    function zt(i) {
      return typeof i == "function";
    }
    function xe(i) {
      switch (Ht(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function $t(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Lt(i, a) {
      var o = i[a];
      if (o != null) {
        if (!ft(o))
          throw new TypeError();
        return o;
      }
    }
    function qt(i) {
      var a = Lt(i, u);
      if (!ft(a))
        throw new TypeError();
      var o = a.call(i);
      if (!O(o))
        throw new TypeError();
      return o;
    }
    function Gt(i) {
      return i.value;
    }
    function Wt(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Bt(i) {
      var a = i.return;
      a && a.call(i);
    }
    function bt(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || a !== _)
        return a;
      var o = i.prototype, d = o && Object.getPrototypeOf(o);
      if (d == null || d === Object.prototype)
        return a;
      var v = d.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function Oe() {
      var i;
      !g(H) && typeof e.Reflect < "u" && !(H in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Pe(e.Reflect));
      var a, o, d, v = new k(), C = {
        registerProvider: M,
        getProvider: h,
        setProvider: f
      };
      return C;
      function M(y) {
        if (!Object.isExtensible(C))
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
            d === void 0 && (d = new T()), d.add(y);
            break;
        }
      }
      function $(y, b) {
        if (!g(a)) {
          if (a.isProviderFor(y, b))
            return a;
          if (!g(o)) {
            if (o.isProviderFor(y, b))
              return a;
            if (!g(d))
              for (var S = qt(d); ; ) {
                var E = Wt(S);
                if (!E)
                  return;
                var N = Gt(E);
                if (N.isProviderFor(y, b))
                  return Bt(S), N;
              }
          }
        }
        if (!g(i) && i.isProviderFor(y, b))
          return i;
      }
      function h(y, b) {
        var S = v.get(y), E;
        return g(S) || (E = S.get(b)), g(E) && (E = $(y, b), g(E) || (g(S) && (S = new x(), v.set(y, S)), S.set(b, E))), E;
      }
      function c(y) {
        if (g(y))
          throw new TypeError();
        return a === y || o === y || !g(d) && d.has(y);
      }
      function f(y, b, S) {
        if (!c(S))
          throw new Error("Metadata provider not registered.");
        var E = h(y, b);
        if (E !== S) {
          if (!g(E))
            return !1;
          var N = v.get(y);
          g(N) && (N = new x(), v.set(y, N)), N.set(b, S);
        }
        return !0;
      }
    }
    function Me() {
      var i;
      return !g(H) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[H]), g(i) && (i = Oe()), !g(H) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, H, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ce(i) {
      var a = new k(), o = {
        isProviderFor: function(c, f) {
          var y = a.get(c);
          return g(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: h
      };
      return z.registerProvider(o), o;
      function d(c, f, y) {
        var b = a.get(c), S = !1;
        if (g(b)) {
          if (!y)
            return;
          b = new x(), a.set(c, b), S = !0;
        }
        var E = b.get(f);
        if (g(E)) {
          if (!y)
            return;
          if (E = new x(), b.set(f, E), !i.setProvider(c, f, o))
            throw b.delete(f), S && a.delete(c), new Error("Wrong provider for target.");
        }
        return E;
      }
      function v(c, f, y) {
        var b = d(
          f,
          y,
          /*Create*/
          !1
        );
        return g(b) ? !1 : It(b.has(c));
      }
      function C(c, f, y) {
        var b = d(
          f,
          y,
          /*Create*/
          !1
        );
        if (!g(b))
          return b.get(c);
      }
      function M(c, f, y, b) {
        var S = d(
          y,
          b,
          /*Create*/
          !0
        );
        S.set(c, f);
      }
      function $(c, f) {
        var y = [], b = d(
          c,
          f,
          /*Create*/
          !1
        );
        if (g(b))
          return y;
        for (var S = b.keys(), E = qt(S), N = 0; ; ) {
          var Jt = Wt(E);
          if (!Jt)
            return y.length = N, y;
          var Ne = Gt(Jt);
          try {
            y[N] = Ne;
          } catch (De) {
            try {
              Bt(E);
            } finally {
              throw De;
            }
          }
          N++;
        }
      }
      function h(c, f, y) {
        var b = d(
          f,
          y,
          /*Create*/
          !1
        );
        if (g(b) || !b.delete(c))
          return !1;
        if (b.size === 0) {
          var S = a.get(f);
          g(S) || (S.delete(y), S.size === 0 && a.delete(S));
        }
        return !0;
      }
    }
    function Pe(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, d = i.getOwnMetadata, v = i.getOwnMetadataKeys, C = i.deleteMetadata, M = new k(), $ = {
        isProviderFor: function(h, c) {
          var f = M.get(h);
          return !g(f) && f.has(c) ? !0 : v(h, c).length ? (g(f) && (f = new T(), M.set(h, f)), f.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return $;
    }
    function Q(i, a, o) {
      var d = z.getProvider(i, a);
      if (!g(d))
        return d;
      if (o) {
        if (z.setProvider(i, a, X))
          return X;
        throw new Error("Illegal state.");
      }
    }
    function Te() {
      var i = {}, a = [], o = (
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
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
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
              for (var f = this._keys.length, y = c + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, $t(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, $.prototype.values = function() {
            return new o(this._keys, this._values, C);
          }, $.prototype.entries = function() {
            return new o(this._keys, this._values, M);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[u] = function() {
            return this.entries();
          }, $.prototype._find = function(h, c) {
            if (!$t(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if ($t(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return d;
      function v($, h) {
        return $;
      }
      function C($, h) {
        return h;
      }
      function M($, h) {
        return [$, h];
      }
    }
    function Re() {
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
    function ke() {
      var i = 16, a = w.create(), o = d();
      return (
        /** @class */
        function() {
          function h() {
            this._key = d();
          }
          return h.prototype.has = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, h.prototype.get = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, h.prototype.set = function(c, f) {
            var y = v(
              c,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, h.prototype.delete = function(c) {
            var f = v(
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
        while (w.has(a, h));
        return a[h] = !0, h;
      }
      function v(h, c) {
        if (!n.call(h, o)) {
          if (!c)
            return;
          Object.defineProperty(h, o, { value: w.create() });
        }
        return h[o];
      }
      function C(h, c) {
        for (var f = 0; f < c; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function M(h) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : C(c, h), c;
        }
        return C(new Array(h), h);
      }
      function $() {
        var h = M(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var c = "", f = 0; f < i; ++f) {
          var y = h[f];
          (f === 4 || f === 6 || f === 8) && (c += "-"), y < 16 && (c += "0"), c += y.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function wt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Zt || (Zt = {}));
function Ie(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ue(r) {
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
function ze(r) {
  return Ue(r);
}
function Le(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Vt(this, "_stylesApplied", !1);
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
          const w = new CSSStyleSheet(), _ = (A = l.sheet) == null ? void 0 : A.cssRules;
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
    return e;
  };
}
function qe(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ge(r) {
  return function(t, e) {
    try {
      qe(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
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
function ot(r) {
  return Ge(r);
}
var W;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(W || (W = {}));
var B;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(B || (B = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yt = globalThis, Ot = yt.ShadowRoot && (yt.ShadyCSS === void 0 || yt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Mt = Symbol(), Yt = /* @__PURE__ */ new WeakMap();
let le = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== Mt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Ot && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Yt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Yt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const We = (r) => new le(typeof r == "string" ? r : r + "", void 0, Mt), Be = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new le(e, r, Mt);
}, Je = (r, t) => {
  if (Ot) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = yt.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, Xt = Ot ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return We(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ve, defineProperty: Fe, getOwnPropertyDescriptor: Ze, getOwnPropertyNames: Ye, getOwnPropertySymbols: Xe, getPrototypeOf: Qe } = Object, U = globalThis, Qt = U.trustedTypes, Ke = Qt ? Qt.emptyScript : "", At = U.reactiveElementPolyfillSupport, et = (r, t) => r, vt = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Ke : null;
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
} }, Ct = (r, t) => !Ve(r, t), Kt = { attribute: !0, type: String, converter: vt, reflect: !1, useDefault: !1, hasChanged: Ct };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), U.litPropertyMetadata ?? (U.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let F = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Kt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Fe(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: l } = Ze(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Kt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(et("elementProperties"))) return;
    const t = Qe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(et("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(et("properties"))) {
      const e = this.properties, n = [...Ye(e), ...Xe(e)];
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
      for (const s of n) e.unshift(Xt(s));
    } else t !== void 0 && e.push(Xt(t));
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
    return Je(t, this.constructor.elementStyles), t;
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
    const n = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : vt).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const m = n.getPropertyOptions(s), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : vt;
      this._$Em = s;
      const A = p.fromAttribute(e, m.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = m.getPropertyOptions(t)), !((n.hasChanged ?? Ct)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(m._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: m } = u, p = this[l];
        m !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((s) => {
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
F.elementStyles = [], F.shadowRootOptions = { mode: "open" }, F[et("elementProperties")] = /* @__PURE__ */ new Map(), F[et("finalized")] = /* @__PURE__ */ new Map(), At == null || At({ ReactiveElement: F }), (U.reactiveElementVersions ?? (U.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt = globalThis, te = (r) => r, mt = rt.trustedTypes, ee = mt ? mt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ue = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, de = "?" + I, tr = `<${de}>`, J = document, it = () => J.createComment(""), st = (r) => r === null || typeof r != "object" && typeof r != "function", Pt = Array.isArray, er = (r) => Pt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", St = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, re = /-->/g, ne = />/g, L = RegExp(`>|${St}(?:([^\\s"'>=/]+)(${St}*=${St}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ie = /'/g, se = /"/g, he = /^(?:script|style|textarea|title)$/i, rr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), pt = rr(1), Z = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), ae = /* @__PURE__ */ new WeakMap(), q = J.createTreeWalker(J, 129);
function ce(r, t) {
  if (!Pt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ee !== void 0 ? ee.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = K;
  for (let m = 0; m < e; m++) {
    const p = r[m];
    let A, w, _ = -1, x = 0;
    for (; x < p.length && (u.lastIndex = x, w = u.exec(p), w !== null); ) x = u.lastIndex, u === K ? w[1] === "!--" ? u = re : w[1] !== void 0 ? u = ne : w[2] !== void 0 ? (he.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = L) : w[3] !== void 0 && (u = L) : u === L ? w[0] === ">" ? (u = s ?? K, _ = -1) : w[1] === void 0 ? _ = -2 : (_ = u.lastIndex - w[2].length, A = w[1], u = w[3] === void 0 ? L : w[3] === '"' ? se : ie) : u === se || u === ie ? u = L : u === re || u === ne ? u = K : (u = L, s = void 0);
    const T = u === L && r[m + 1].startsWith("/>") ? " " : "";
    l += u === K ? p + tr : _ >= 0 ? (n.push(A), p.slice(0, _) + ue + p.slice(_) + I + T) : p + I + (_ === -2 ? m : T);
  }
  return [ce(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class at {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = t.length - 1, p = this.parts, [A, w] = nr(t, e);
    if (this.el = at.createElement(A, n), q.currentNode = this.el.content, e === 2 || e === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (s = q.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const _ of s.getAttributeNames()) if (_.endsWith(ue)) {
          const x = w[u++], T = s.getAttribute(_).split(I), k = /([.?@])?(.*)/.exec(x);
          p.push({ type: 1, index: l, name: k[2], strings: T, ctor: k[1] === "." ? sr : k[1] === "?" ? ar : k[1] === "@" ? or : gt }), s.removeAttribute(_);
        } else _.startsWith(I) && (p.push({ type: 6, index: l }), s.removeAttribute(_));
        if (he.test(s.tagName)) {
          const _ = s.textContent.split(I), x = _.length - 1;
          if (x > 0) {
            s.textContent = mt ? mt.emptyScript : "";
            for (let T = 0; T < x; T++) s.append(_[T], it()), q.nextNode(), p.push({ type: 2, index: ++l });
            s.append(_[x], it());
          }
        }
      } else if (s.nodeType === 8) if (s.data === de) p.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = s.data.indexOf(I, _ + 1)) !== -1; ) p.push({ type: 7, index: l }), _ += I.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = J.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Y(r, t, e = r, n) {
  var u, m;
  if (t === Z) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = st(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = Y(r, s._$AS(r, t.values), s, n)), t;
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? J).importNode(e, !0);
    q.currentNode = s;
    let l = q.nextNode(), u = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new lt(l, l.nextSibling, this, t) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (A = new lr(l, this, t)), this._$AV.push(A), p = n[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = q.nextNode(), u++);
    }
    return q.currentNode = J, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class lt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = Y(this, t, e), st(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== Z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : er(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && st(this._$AH) ? this._$AA.nextSibling.data = t : this.T(J.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = at.createElement(ce(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new ir(s, this), m = u.u(this.options);
      u.p(e), this.T(m), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ae.get(t.strings);
    return e === void 0 && ae.set(t.strings, e = new at(t)), e;
  }
  k(t) {
    Pt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new lt(this.O(it()), this.O(it()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = te(t).nextSibling;
      te(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class gt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = Y(this, t, e, 0), u = !st(t) || t !== this._$AH && t !== Z, u && (this._$AH = t);
    else {
      const m = t;
      let p, A;
      for (t = l[0], p = 0; p < l.length - 1; p++) A = Y(this, m[n + p], e, p), A === Z && (A = this._$AH[p]), u || (u = !st(A) || A !== this._$AH[p]), A === P ? t = P : t !== P && (t += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sr extends gt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class ar extends gt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class or extends gt {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Y(this, t, e, 0) ?? P) === Z) return;
    const n = this._$AH, s = t === P && n !== P || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== P && (n === P || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
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
    Y(this, t);
  }
}
const Et = rt.litHtmlPolyfillSupport;
Et == null || Et(at, lt), (rt.litHtmlVersions ?? (rt.litHtmlVersions = [])).push("3.3.3");
const ur = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new lt(t.insertBefore(it(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class nt extends F {
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
    return Z;
  }
}
var oe;
nt._$litElement$ = !0, nt.finalized = !0, (oe = G.litElementHydrateSupport) == null || oe.call(G, { LitElement: nt });
const xt = G.litElementPolyfillSupport;
xt == null || xt({ LitElement: nt });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: vt, reflect: !1, hasChanged: Ct }, hr = (r = dr, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
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
function ut(r) {
  return (t, e) => typeof e == "object" ? hr(r, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var cr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, D = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && cr(t, e, s), s;
};
const mr = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#f9fafb;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:0 auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;padding:24px;border:1px solid #e5e7eb;border-radius:12px;background:#ffffff;text-align:left;'>",
    "<div style='color:#f59e0b;font-size:18px;margin-bottom:12px;'>★★★★★</div>",
    `<p style='font-size:14px;color:#4b5563;line-height:1.5;font-style:italic;margin-bottom:16px;'>"Outstanding quality and ease of integration."</p>`,
    "<div style='display:flex;align-items:center;gap:10px;'>",
    "<div style='width:40px;height:40px;border-radius:50%;background:#e5e7eb;'></div>",
    "<div>",
    "<h4 style='font-size:14px;font-weight:600;margin:0;'>Jane Miller</h4>",
    "<p style='font-size:12px;color:#6b7280;margin:0;'>Product Owner</p>",
    "</div>",
    "</div>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Testimonials"]
};
function tt(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let R = class extends nt {
  constructor() {
    super(...arguments), this.title = "What Customers Say", this.lead = "Read reviews from some of our active global product teams.", this.testimonialsJson = '[{"quote":"This component library completely speeds up our layout deployments. Highly customizable and professional.","rating":5,"avatar":"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150","name":"Sarah Jenkins","role":"Tech Lead, Acme Corp"},{"quote":"Outstanding design aesthetic natively supporting dark themes and variables. Fits our requirements perfectly.","rating":5,"avatar":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150","name":"Marcus Aurelius","role":"Lead Architect, Roma Labs"},{"quote":"Very lightweight components that load instantly without layout shifting. Highly recommended!","rating":4,"avatar":"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150","name":"Elena Rostova","role":"Creative Lead, Cybernetics Ltd"}]', this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    var u, m, p, A, w, _, x, T, k, H, z, X, dt, ht, ct;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-block-testimonial-1.0.0></zero-block-testimonial-1.0.0>"
      };
    const t = tt(((u = r == null ? void 0 : r.props) == null ? void 0 : u.title) ?? ((p = (m = r == null ? void 0 : r.studio) == null ? void 0 : m.props) == null ? void 0 : p.title) ?? "Customer Stories"), e = tt(((A = r == null ? void 0 : r.props) == null ? void 0 : A.lead) ?? ((_ = (w = r == null ? void 0 : r.studio) == null ? void 0 : w.props) == null ? void 0 : _.lead) ?? ""), n = tt(((x = r == null ? void 0 : r.props) == null ? void 0 : x.testimonialsJson) ?? ((k = (T = r == null ? void 0 : r.studio) == null ? void 0 : T.props) == null ? void 0 : k.testimonialsJson) ?? "[]"), s = tt(((H = r == null ? void 0 : r.props) == null ? void 0 : H.layout) ?? ((X = (z = r == null ? void 0 : r.studio) == null ? void 0 : z.props) == null ? void 0 : X.layout) ?? "layout-1"), l = tt(((dt = r == null ? void 0 : r.props) == null ? void 0 : dt.themeStyle) ?? ((ct = (ht = r == null ? void 0 : r.studio) == null ? void 0 : ht.props) == null ? void 0 : ct.themeStyle) ?? "light");
    return {
      kind: "generic",
      templateHtml: `
        <zero-block-testimonial-1.0.0
          title="${t}"
          lead="${e}"
          testimonials-json="${n}"
          layout="${s}"
          theme-style="${l}"
        ></zero-block-testimonial-1.0.0>
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
  get testimonialsJsonConfig() {
    return this.testimonialsJson;
  }
  set testimonialsJsonConfig(r) {
    this.testimonialsJson = r;
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
  parseReviews() {
    try {
      return JSON.parse(this.testimonialsJson);
    } catch {
      return [];
    }
  }
  renderStars(r) {
    const t = Math.max(1, Math.min(5, Math.floor(r)));
    return "★".repeat(t) + "☆".repeat(5 - t);
  }
  render() {
    let r = this.parseReviews();
    return this.layout === "layout-2" && r.length > 0 && (r = [r[0]]), pt`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        ${this.layout === "layout-1" ? pt`
          <div class="grid-3col">
            ${r.map((t) => pt`
              <div class="test-card">
                <div class="stars">${this.renderStars(t.rating)}</div>
                <p class="quote-text">"${t.quote}"</p>
                <div class="reviewer">
                  <div class="rev-avatar">
                    <img class="rev-img" src="${t.avatar}" alt="${t.name}">
                  </div>
                  <div>
                    <h4>${t.name}</h4>
                    <p class="rev-role">${t.role}</p>
                  </div>
                </div>
              </div>
            `)}
          </div>
        ` : ""}

        ${this.layout === "layout-2" && r.length > 0 ? pt`
          <div class="spotlight">
            <div class="stars" style="font-size: 1.5rem;">${this.renderStars(r[0].rating)}</div>
            <p class="quote-text">"${r[0].quote}"</p>
            <div class="reviewer">
              <div class="rev-avatar">
                <img class="rev-img" src="${r[0].avatar}" alt="${r[0].name}">
              </div>
              <h4 style="font-size: 1.15rem; margin-top: 8px;">${r[0].name}</h4>
              <p class="rev-role" style="font-size: 0.9rem;">${r[0].role}</p>
            </div>
          </div>
        ` : ""}
      </section>
    `;
  }
};
R.styles = Be`
    :host {
      display: block;
      width: 100%;
      --test-bg: var(--uiv-surface-color, #ffffff);
      --test-text: var(--uiv-text-color, #111827);
      --test-lead: #4b5563;
      --test-card-bg: var(--uiv-surface-color, #ffffff);
      --test-card-border: var(--uiv-border-color, #e5e7eb);
      --test-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--test-bg);
      color: var(--test-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --test-bg: #111827;
      --test-text: #f9fafb;
      --test-lead: #9ca3af;
      --test-card-bg: #1f2937;
      --test-card-border: #374151;
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
      color: var(--test-lead);
      margin: 0;
    }

    /* ─── Layout 1: 3-Column Reviews Grid ─── */
    .grid-3col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .test-card {
      padding: 30px;
      background: var(--test-card-bg);
      border: 1px solid var(--test-card-border);
      border-radius: 12px;
      text-align: left;
      transition: transform 0.2s ease;
    }

    .test-card:hover {
      transform: translateY(-2px);
    }

    .stars {
      color: #fbbf24;
      font-size: 1.15rem;
      margin-bottom: 15px;
    }

    .quote-text {
      font-size: 0.96rem;
      line-height: 1.6;
      color: var(--test-lead);
      font-style: italic;
      margin: 0 0 24px 0;
    }

    .reviewer {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .rev-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid var(--test-card-border);
    }

    .rev-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h4 {
      font-size: 0.95rem;
      font-weight: 700;
      margin: 0 0 2px 0;
    }

    .rev-role {
      font-size: 0.8rem;
      color: var(--test-lead);
      margin: 0;
    }

    /* ─── Layout 2: Spotlight Quote ─── */
    .spotlight {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .spotlight .quote-text {
      font-size: 1.45rem;
      line-height: 1.6;
      margin-bottom: 30px;
    }

    .spotlight .reviewer {
      justify-content: center;
      flex-direction: column;
      gap: 8px;
    }

    .spotlight .rev-avatar {
      width: 64px;
      height: 64px;
    }
  `;
D([
  ut({ type: String })
], R.prototype, "title", 2);
D([
  ut({ type: String })
], R.prototype, "lead", 2);
D([
  ut({ type: String, attribute: "testimonials-json" })
], R.prototype, "testimonialsJson", 2);
D([
  ut({ type: String })
], R.prototype, "layout", 2);
D([
  ut({ type: String, attribute: "theme-style" })
], R.prototype, "themeStyle", 2);
D([
  ot({
    attributeType: B.PROPERTY,
    uiComponentType: W.TEXT_INPUT,
    displayLabel: "Section Title",
    fieldMappings: "title"
  })
], R.prototype, "titleConfig", 1);
D([
  ot({
    attributeType: B.PROPERTY,
    uiComponentType: W.TEXT_INPUT,
    displayLabel: "Section Subtitle Copy",
    fieldMappings: "lead"
  })
], R.prototype, "leadConfig", 1);
D([
  ot({
    attributeType: B.PROPERTY,
    uiComponentType: W.TEXTAREA,
    displayLabel: "Reviews JSON List",
    fieldMappings: "testimonialsJson"
  })
], R.prototype, "testimonialsJsonConfig", 1);
D([
  ot({
    attributeType: B.PROPERTY,
    uiComponentType: W.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "3-Column Review Cards Grid", value: "layout-1" },
      { label: "Single Spotlight Review", value: "layout-2" }
    ]
  })
], R.prototype, "layoutConfig", 1);
D([
  ot({
    attributeType: B.PROPERTY,
    uiComponentType: W.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" }
    ]
  })
], R.prototype, "themeStyleConfig", 1);
R = D([
  ze({
    name: "zero-block-testimonial",
    version: "1.0.0",
    title: "Testimonial Block",
    elementSelector: "zero-block-testimonial",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  Le()
], R);
export {
  R as ZeroBlockTestimonial,
  mr as studioTemplate
};
