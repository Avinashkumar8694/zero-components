var De = Object.defineProperty;
var He = (r, t, e) => t in r ? De(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Xt = (r, t, e) => He(r, typeof t != "symbol" ? t + "" : t, e);
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Kt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Qt == "object" ? Qt : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(r);
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
        return xt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return xt({ __proto__: null });
      } : function() {
        return xt({});
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
    }, _ = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Te(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Re(), I = typeof WeakMap == "function" ? WeakMap : ke(), H = s ? Symbol.for("@reflect-metadata:registry") : void 0, F = Oe(), et = Me(F);
    function ct(i, a, o, d) {
      if (g(o)) {
        if (!Bt(i))
          throw new TypeError();
        if (!Gt(a))
          throw new TypeError();
        return $e(i, a);
      } else {
        if (!Bt(i))
          throw new TypeError();
        if (!C(a))
          throw new TypeError();
        if (!C(d) && !g(d) && !q(d))
          throw new TypeError();
        return q(d) && (d = void 0), o = D(o), be(i, a, o, d);
      }
    }
    t("decorate", ct);
    function ht(i, a) {
      function o(d, v) {
        if (!C(d))
          throw new TypeError();
        if (!g(v) && !xe(v))
          throw new TypeError();
        Ut(i, a, d, v);
      }
      return o;
    }
    t("metadata", ht);
    function ft(i, a, o, d) {
      if (!C(o))
        throw new TypeError();
      return g(d) || (d = D(d)), Ut(i, a, o, d);
    }
    t("defineMetadata", ft);
    function pt(i, a, o) {
      if (!C(a))
        throw new TypeError();
      return g(o) || (o = D(o)), Nt(i, a, o);
    }
    t("hasMetadata", pt);
    function yt(i, a, o) {
      if (!C(a))
        throw new TypeError();
      return g(o) || (o = D(o)), At(i, a, o);
    }
    t("hasOwnMetadata", yt);
    function vt(i, a, o) {
      if (!C(a))
        throw new TypeError();
      return g(o) || (o = D(o)), Dt(i, a, o);
    }
    t("getMetadata", vt);
    function mt(i, a, o) {
      if (!C(a))
        throw new TypeError();
      return g(o) || (o = D(o)), Ht(i, a, o);
    }
    t("getOwnMetadata", mt);
    function me(i, a) {
      if (!C(i))
        throw new TypeError();
      return g(a) || (a = D(a)), jt(i, a);
    }
    t("getMetadataKeys", me);
    function ge(i, a) {
      if (!C(i))
        throw new TypeError();
      return g(a) || (a = D(a)), Lt(i, a);
    }
    t("getOwnMetadataKeys", ge);
    function _e(i, a, o) {
      if (!C(a))
        throw new TypeError();
      if (g(o) || (o = D(o)), !C(a))
        throw new TypeError();
      g(o) || (o = D(o));
      var d = rt(
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
        if (!g(v) && !q(v)) {
          if (!Gt(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function be(i, a, o, d) {
      for (var v = i.length - 1; v >= 0; --v) {
        var M = i[v], O = M(a, o, d);
        if (!g(O) && !q(O)) {
          if (!C(O))
            throw new TypeError();
          d = O;
        }
      }
      return d;
    }
    function Nt(i, a, o) {
      var d = At(i, a, o);
      if (d)
        return !0;
      var v = St(a);
      return q(v) ? !1 : Nt(i, v, o);
    }
    function At(i, a, o) {
      var d = rt(
        a,
        o,
        /*Create*/
        !1
      );
      return g(d) ? !1 : Ft(d.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Dt(i, a, o) {
      var d = At(i, a, o);
      if (d)
        return Ht(i, a, o);
      var v = St(a);
      if (!q(v))
        return Dt(i, v, o);
    }
    function Ht(i, a, o) {
      var d = rt(
        a,
        o,
        /*Create*/
        !1
      );
      if (!g(d))
        return d.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Ut(i, a, o, d) {
      var v = rt(
        o,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, o, d);
    }
    function jt(i, a) {
      var o = Lt(i, a), d = St(i);
      if (d === null)
        return o;
      var v = jt(d, a);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var M = new T(), O = [], $ = 0, c = o; $ < c.length; $++) {
        var h = c[$], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      for (var y = 0, b = v; y < b.length; y++) {
        var h = b[y], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      return O;
    }
    function Lt(i, a) {
      var o = rt(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function zt(i) {
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
    function q(i) {
      return i === null;
    }
    function we(i) {
      return typeof i == "symbol";
    }
    function C(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ae(i, a) {
      switch (zt(i)) {
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
      var o = "string", d = Wt(i, l);
      if (d !== void 0) {
        var v = d.call(i, o);
        if (C(v))
          throw new TypeError();
        return v;
      }
      return Ee(i);
    }
    function Ee(i, a) {
      var o, d;
      {
        var v = i.toString;
        if (gt(v)) {
          var d = v.call(i);
          if (!C(d))
            return d;
        }
        var o = i.valueOf;
        if (gt(o)) {
          var d = o.call(i);
          if (!C(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ft(i) {
      return !!i;
    }
    function Se(i) {
      return "" + i;
    }
    function D(i) {
      var a = Ae(i);
      return we(a) ? a : Se(a);
    }
    function Bt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function gt(i) {
      return typeof i == "function";
    }
    function Gt(i) {
      return typeof i == "function";
    }
    function xe(i) {
      switch (zt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Et(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Wt(i, a) {
      var o = i[a];
      if (o != null) {
        if (!gt(o))
          throw new TypeError();
        return o;
      }
    }
    function Vt(i) {
      var a = Wt(i, u);
      if (!gt(a))
        throw new TypeError();
      var o = a.call(i);
      if (!C(o))
        throw new TypeError();
      return o;
    }
    function Jt(i) {
      return i.value;
    }
    function qt(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Zt(i) {
      var a = i.return;
      a && a.call(i);
    }
    function St(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || a !== _)
        return a;
      var o = i.prototype, d = o && Object.getPrototypeOf(o);
      if (d == null || d === Object.prototype)
        return a;
      var v = d.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function Ce() {
      var i;
      !g(H) && typeof e.Reflect < "u" && !(H in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Pe(e.Reflect));
      var a, o, d, v = new I(), M = {
        registerProvider: O,
        getProvider: c,
        setProvider: f
      };
      return M;
      function O(y) {
        if (!Object.isExtensible(M))
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
              for (var E = Vt(d); ; ) {
                var S = qt(E);
                if (!S)
                  return;
                var N = Jt(S);
                if (N.isProviderFor(y, b))
                  return Zt(E), N;
              }
          }
        }
        if (!g(i) && i.isProviderFor(y, b))
          return i;
      }
      function c(y, b) {
        var E = v.get(y), S;
        return g(E) || (S = E.get(b)), g(S) && (S = $(y, b), g(S) || (g(E) && (E = new x(), v.set(y, E)), E.set(b, S))), S;
      }
      function h(y) {
        if (g(y))
          throw new TypeError();
        return a === y || o === y || !g(d) && d.has(y);
      }
      function f(y, b, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = c(y, b);
        if (S !== E) {
          if (!g(S))
            return !1;
          var N = v.get(y);
          g(N) && (N = new x(), v.set(y, N)), N.set(b, E);
        }
        return !0;
      }
    }
    function Oe() {
      var i;
      return !g(H) && C(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[H]), g(i) && (i = Ce()), !g(H) && C(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, H, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Me(i) {
      var a = new I(), o = {
        isProviderFor: function(h, f) {
          var y = a.get(h);
          return g(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: c
      };
      return F.registerProvider(o), o;
      function d(h, f, y) {
        var b = a.get(h), E = !1;
        if (g(b)) {
          if (!y)
            return;
          b = new x(), a.set(h, b), E = !0;
        }
        var S = b.get(f);
        if (g(S)) {
          if (!y)
            return;
          if (S = new x(), b.set(f, S), !i.setProvider(h, f, o))
            throw b.delete(f), E && a.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, y) {
        var b = d(
          f,
          y,
          /*Create*/
          !1
        );
        return g(b) ? !1 : Ft(b.has(h));
      }
      function M(h, f, y) {
        var b = d(
          f,
          y,
          /*Create*/
          !1
        );
        if (!g(b))
          return b.get(h);
      }
      function O(h, f, y, b) {
        var E = d(
          y,
          b,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function $(h, f) {
        var y = [], b = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(b))
          return y;
        for (var E = b.keys(), S = Vt(E), N = 0; ; ) {
          var Yt = qt(S);
          if (!Yt)
            return y.length = N, y;
          var Ie = Jt(Yt);
          try {
            y[N] = Ie;
          } catch (Ne) {
            try {
              Zt(S);
            } finally {
              throw Ne;
            }
          }
          N++;
        }
      }
      function c(h, f, y) {
        var b = d(
          f,
          y,
          /*Create*/
          !1
        );
        if (g(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var E = a.get(f);
          g(E) || (E.delete(y), E.size === 0 && a.delete(E));
        }
        return !0;
      }
    }
    function Pe(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, d = i.getOwnMetadata, v = i.getOwnMetadataKeys, M = i.deleteMetadata, O = new I(), $ = {
        isProviderFor: function(c, h) {
          var f = O.get(c);
          return !g(f) && f.has(h) ? !0 : v(c, h).length ? (g(f) && (f = new T(), O.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: M
      };
      return $;
    }
    function rt(i, a, o) {
      var d = F.getProvider(i, a);
      if (!g(d))
        return d;
      if (o) {
        if (F.setProvider(i, a, et))
          return et;
        throw new Error("Illegal state.");
      }
    }
    function Te() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function $(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[u] = function() {
            return this;
          }, $.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), c;
          }, $.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: c, done: !0 };
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
          }), $.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, $.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, $.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, $.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, y = h + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, Et(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, $.prototype.values = function() {
            return new o(this._keys, this._values, M);
          }, $.prototype.entries = function() {
            return new o(this._keys, this._values, O);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[u] = function() {
            return this.entries();
          }, $.prototype._find = function(c, h) {
            if (!Et(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (Et(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return d;
      function v($, c) {
        return $;
      }
      function M($, c) {
        return c;
      }
      function O($, c) {
        return [$, c];
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
          function c() {
            this._key = d();
          }
          return c.prototype.has = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var y = v(
              h,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, c.prototype.delete = function(h) {
            var f = v(
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
          c = "@@WeakMap@@" + $();
        while (w.has(a, c));
        return a[c] = !0, c;
      }
      function v(c, h) {
        if (!n.call(c, o)) {
          if (!h)
            return;
          Object.defineProperty(c, o, { value: w.create() });
        }
        return c[o];
      }
      function M(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function O(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : M(h, c), h;
        }
        return M(new Array(c), c);
      }
      function $() {
        var c = O(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var y = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function xt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Kt || (Kt = {}));
function Ue(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function je(r) {
  return function(t) {
    if (Ue(r)) {
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
function Le(r) {
  return je(r);
}
function ze(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Xt(this, "_stylesApplied", !1);
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
function Fe(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Be(r) {
  return function(t, e) {
    try {
      Fe(r);
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
function K(r) {
  return Be(r);
}
var L;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(L || (L = {}));
var z;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(z || (z = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _t = globalThis, Tt = _t.ShadowRoot && (_t.ShadyCSS === void 0 || _t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Rt = Symbol(), te = /* @__PURE__ */ new WeakMap();
let he = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== Rt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Tt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = te.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && te.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ge = (r) => new he(typeof r == "string" ? r : r + "", void 0, Rt), We = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new he(e, r, Rt);
}, Ve = (r, t) => {
  if (Tt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = _t.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, ee = Tt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Ge(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Je, defineProperty: qe, getOwnPropertyDescriptor: Ze, getOwnPropertyNames: Ye, getOwnPropertySymbols: Xe, getPrototypeOf: Qe } = Object, j = globalThis, re = j.trustedTypes, Ke = re ? re.emptyScript : "", Ct = j.reactiveElementPolyfillSupport, it = (r, t) => r, $t = { toAttribute(r, t) {
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
} }, kt = (r, t) => !Je(r, t), ne = { attribute: !0, type: String, converter: $t, reflect: !1, useDefault: !1, hasChanged: kt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Y = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = ne) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && qe(this.prototype, t, s);
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
    return this.elementProperties.get(t) ?? ne;
  }
  static _$Ei() {
    if (this.hasOwnProperty(it("elementProperties"))) return;
    const t = Qe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(it("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(it("properties"))) {
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
      for (const s of n) e.unshift(ee(s));
    } else t !== void 0 && e.push(ee(t));
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
    return Ve(t, this.constructor.elementStyles), t;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : $t).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const m = n.getPropertyOptions(s), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : $t;
      this._$Em = s;
      const A = p.fromAttribute(e, m.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = m.getPropertyOptions(t)), !((n.hasChanged ?? kt)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(m._$Eu(t, n)))) return;
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
Y.elementStyles = [], Y.shadowRootOptions = { mode: "open" }, Y[it("elementProperties")] = /* @__PURE__ */ new Map(), Y[it("finalized")] = /* @__PURE__ */ new Map(), Ct == null || Ct({ ReactiveElement: Y }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = globalThis, ie = (r) => r, bt = st.trustedTypes, se = bt ? bt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, fe = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, pe = "?" + U, tr = `<${pe}>`, J = document, ot = () => J.createComment(""), lt = (r) => r === null || typeof r != "object" && typeof r != "function", It = Array.isArray, er = (r) => It(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Ot = `[ 	
\f\r]`, nt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ae = /-->/g, oe = />/g, B = RegExp(`>|${Ot}(?:([^\\s"'>=/]+)(${Ot}*=${Ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), le = /'/g, ue = /"/g, ye = /^(?:script|style|textarea|title)$/i, rr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), G = rr(1), X = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), de = /* @__PURE__ */ new WeakMap(), W = J.createTreeWalker(J, 129);
function ve(r, t) {
  if (!It(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return se !== void 0 ? se.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = nt;
  for (let m = 0; m < e; m++) {
    const p = r[m];
    let A, w, _ = -1, x = 0;
    for (; x < p.length && (u.lastIndex = x, w = u.exec(p), w !== null); ) x = u.lastIndex, u === nt ? w[1] === "!--" ? u = ae : w[1] !== void 0 ? u = oe : w[2] !== void 0 ? (ye.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = B) : w[3] !== void 0 && (u = B) : u === B ? w[0] === ">" ? (u = s ?? nt, _ = -1) : w[1] === void 0 ? _ = -2 : (_ = u.lastIndex - w[2].length, A = w[1], u = w[3] === void 0 ? B : w[3] === '"' ? ue : le) : u === ue || u === le ? u = B : u === ae || u === oe ? u = nt : (u = B, s = void 0);
    const T = u === B && r[m + 1].startsWith("/>") ? " " : "";
    l += u === nt ? p + tr : _ >= 0 ? (n.push(A), p.slice(0, _) + fe + p.slice(_) + U + T) : p + U + (_ === -2 ? m : T);
  }
  return [ve(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class ut {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = t.length - 1, p = this.parts, [A, w] = nr(t, e);
    if (this.el = ut.createElement(A, n), W.currentNode = this.el.content, e === 2 || e === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (s = W.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const _ of s.getAttributeNames()) if (_.endsWith(fe)) {
          const x = w[u++], T = s.getAttribute(_).split(U), I = /([.?@])?(.*)/.exec(x);
          p.push({ type: 1, index: l, name: I[2], strings: T, ctor: I[1] === "." ? sr : I[1] === "?" ? ar : I[1] === "@" ? or : wt }), s.removeAttribute(_);
        } else _.startsWith(U) && (p.push({ type: 6, index: l }), s.removeAttribute(_));
        if (ye.test(s.tagName)) {
          const _ = s.textContent.split(U), x = _.length - 1;
          if (x > 0) {
            s.textContent = bt ? bt.emptyScript : "";
            for (let T = 0; T < x; T++) s.append(_[T], ot()), W.nextNode(), p.push({ type: 2, index: ++l });
            s.append(_[x], ot());
          }
        }
      } else if (s.nodeType === 8) if (s.data === pe) p.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = s.data.indexOf(U, _ + 1)) !== -1; ) p.push({ type: 7, index: l }), _ += U.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = J.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Q(r, t, e = r, n) {
  var u, m;
  if (t === X) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = lt(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = Q(r, s._$AS(r, t.values), s, n)), t;
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
    W.currentNode = s;
    let l = W.nextNode(), u = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new dt(l, l.nextSibling, this, t) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (A = new lr(l, this, t)), this._$AV.push(A), p = n[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = W.nextNode(), u++);
    }
    return W.currentNode = J, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class dt {
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
    t = Q(this, t, e), lt(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== X && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : er(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && lt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(J.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = ut.createElement(ve(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new ir(s, this), m = u.u(this.options);
      u.p(e), this.T(m), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = de.get(t.strings);
    return e === void 0 && de.set(t.strings, e = new ut(t)), e;
  }
  k(t) {
    It(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new dt(this.O(ot()), this.O(ot()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = ie(t).nextSibling;
      ie(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class wt {
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
    if (l === void 0) t = Q(this, t, e, 0), u = !lt(t) || t !== this._$AH && t !== X, u && (this._$AH = t);
    else {
      const m = t;
      let p, A;
      for (t = l[0], p = 0; p < l.length - 1; p++) A = Q(this, m[n + p], e, p), A === X && (A = this._$AH[p]), u || (u = !lt(A) || A !== this._$AH[p]), A === P ? t = P : t !== P && (t += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sr extends wt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class ar extends wt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class or extends wt {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Q(this, t, e, 0) ?? P) === X) return;
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
    Q(this, t);
  }
}
const Mt = st.litHtmlPolyfillSupport;
Mt == null || Mt(ut, dt), (st.litHtmlVersions ?? (st.litHtmlVersions = [])).push("3.3.3");
const ur = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new dt(t.insertBefore(ot(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = globalThis;
class at extends Y {
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
    return X;
  }
}
var ce;
at._$litElement$ = !0, at.finalized = !0, (ce = V.litElementHydrateSupport) == null || ce.call(V, { LitElement: at });
const Pt = V.litElementPolyfillSupport;
Pt == null || Pt({ LitElement: at });
(V.litElementVersions ?? (V.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: $t, reflect: !1, hasChanged: kt }, cr = (r = dr, t, e) => {
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
function tt(r) {
  return (t, e) => typeof e == "object" ? cr(r, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, k = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && hr(t, e, s), s;
};
const mr = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#ffffff;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:8px auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;padding:20px;border:1px solid #e5e7eb;border-radius:8px;'>",
    "<div style='font-size:24px;margin-bottom:8px;'>⚡</div>",
    "<h3 style='font-size:16px;font-weight:600;margin-bottom:4px;'>Feature 1</h3>",
    "<p style='font-size:13px;color:#6b7280;margin:0;'>Short feature description goes here.</p>",
    "</div>",
    "<div style='flex:1;padding:20px;border:1px solid #e5e7eb;border-radius:8px;'>",
    "<div style='font-size:24px;margin-bottom:8px;'>🛡️</div>",
    "<h3 style='font-size:16px;font-weight:600;margin-bottom:4px;'>Feature 2</h3>",
    "<p style='font-size:13px;color:#6b7280;margin:0;'>Short feature description goes here.</p>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Features"]
};
function Z(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let R = class extends at {
  constructor() {
    super(...arguments), this.title = "Core Highlights", this.lead = "Discover the main technical advantages and features of our platform.", this.featuresJson = '[{"icon":"⚡","title":"High Performance","desc":"Lightning fast speeds and response cycles."},{"icon":"🛡️","title":"Secure Vault","desc":"Bank-grade encryption by default."},{"icon":"⚙️","title":"Custom Flows","desc":"Automate anything with modular scripting."}]', this.splitImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60", this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    var m, p, A, w, _, x, T, I, H, F, et, ct, ht, ft, pt, yt, vt, mt;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-block-feature-1.0.0></zero-block-feature-1.0.0>"
      };
    const t = Z(((m = r == null ? void 0 : r.props) == null ? void 0 : m.title) ?? ((A = (p = r == null ? void 0 : r.studio) == null ? void 0 : p.props) == null ? void 0 : A.title) ?? "Core Highlights"), e = Z(((w = r == null ? void 0 : r.props) == null ? void 0 : w.lead) ?? ((x = (_ = r == null ? void 0 : r.studio) == null ? void 0 : _.props) == null ? void 0 : x.lead) ?? ""), n = Z(((T = r == null ? void 0 : r.props) == null ? void 0 : T.featuresJson) ?? ((H = (I = r == null ? void 0 : r.studio) == null ? void 0 : I.props) == null ? void 0 : H.featuresJson) ?? "[]"), s = Z(((F = r == null ? void 0 : r.props) == null ? void 0 : F.splitImage) ?? ((ct = (et = r == null ? void 0 : r.studio) == null ? void 0 : et.props) == null ? void 0 : ct.splitImage) ?? ""), l = Z(((ht = r == null ? void 0 : r.props) == null ? void 0 : ht.layout) ?? ((pt = (ft = r == null ? void 0 : r.studio) == null ? void 0 : ft.props) == null ? void 0 : pt.layout) ?? "layout-1"), u = Z(((yt = r == null ? void 0 : r.props) == null ? void 0 : yt.themeStyle) ?? ((mt = (vt = r == null ? void 0 : r.studio) == null ? void 0 : vt.props) == null ? void 0 : mt.themeStyle) ?? "light");
    return {
      kind: "generic",
      templateHtml: `
        <zero-block-feature-1.0.0
          title="${t}"
          lead="${e}"
          features-json="${n}"
          split-image="${s}"
          layout="${l}"
          theme-style="${u}"
        ></zero-block-feature-1.0.0>
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
  get featuresJsonConfig() {
    return this.featuresJson;
  }
  set featuresJsonConfig(r) {
    this.featuresJson = r;
  }
  get splitImageConfig() {
    return this.splitImage;
  }
  set splitImageConfig(r) {
    this.splitImage = r;
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
  parseFeatures() {
    try {
      return JSON.parse(this.featuresJson);
    } catch {
      return [];
    }
  }
  render() {
    const r = this.parseFeatures();
    return G`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        ${this.layout === "layout-1" ? G`
          <div class="grid-3col">
            ${r.map((t) => G`
              <div class="feat-card">
                <div class="feat-icon">${t.icon}</div>
                <h3>${t.title}</h3>
                <p class="feat-desc">${t.desc}</p>
              </div>
            `)}
          </div>
        ` : ""}

        ${this.layout === "layout-2" ? G`
          <div class="split-layout">
            <div class="split-col">
              <img class="split-img" src="${this.splitImage}" alt="featured graphics">
            </div>
            <div class="split-col">
              <div class="list-vertical">
                ${r.map((t) => G`
                  <div class="list-item">
                    <span class="list-icon">${t.icon}</span>
                    <div>
                      <h3>${t.title}</h3>
                      <p class="feat-desc">${t.desc}</p>
                    </div>
                  </div>
                `)}
              </div>
            </div>
          </div>
        ` : ""}

        ${this.layout === "layout-3" ? G`
          <div class="grid-4col">
            ${r.map((t) => G`
              <div class="flat-card">
                <h3>${t.icon} ${t.title}</h3>
                <p class="feat-desc">${t.desc}</p>
              </div>
            `)}
          </div>
        ` : ""}
      </section>
    `;
  }
};
R.styles = We`
    :host {
      display: block;
      width: 100%;
      --feat-bg: var(--uiv-surface-color, #ffffff);
      --feat-title-color: var(--uiv-text-color, #111827);
      --feat-lead-color: #4b5563;
      --feat-card-bg: var(--uiv-surface-color, #ffffff);
      --feat-card-border: var(--uiv-border-color, #e5e7eb);
      --feat-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--feat-bg);
      color: var(--feat-title-color);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --feat-bg: #111827;
      --feat-title-color: #f9fafb;
      --feat-lead-color: #9ca3af;
      --feat-card-bg: #1f2937;
      --feat-card-border: #374151;
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
      color: var(--feat-lead-color);
      margin: 0;
    }

    /* ─── Layout 1: 3-Column Card Grid ─── */
    .grid-3col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }

    .feat-card {
      padding: 35px 25px;
      background: var(--feat-card-bg);
      border: 1px solid var(--feat-card-border);
      border-radius: 8px;
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .feat-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--uiv-shadow-depth, 0 10px 20px rgba(0,0,0,0.05));
    }

    .feat-icon {
      font-size: 2rem;
      color: var(--feat-accent);
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0 0 8px 0;
    }

    .feat-desc {
      font-size: 0.94rem;
      line-height: 1.5;
      color: var(--feat-lead-color);
      margin: 0;
    }

    /* ─── Layout 2: Split Image-Left ─── */
    .split-layout {
      display: flex;
      align-items: center;
      gap: 50px;
    }

    .split-col {
      flex: 1;
    }

    .split-img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.06);
    }

    .list-vertical {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .list-item {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      text-align: left;
    }

    .list-icon {
      font-size: 1.5rem;
      margin-top: 2px;
    }

    /* ─── Layout 3: 4-Column List ─── */
    .grid-4col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 24px;
    }

    .flat-card {
      padding: 16px;
      text-align: left;
      border-left: 3px solid var(--feat-accent);
    }

    .flat-card h3 {
      font-size: 1.1rem;
      margin-bottom: 4px;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .split-layout {
        flex-direction: column !important;
      }
    }
  `;
k([
  tt({ type: String })
], R.prototype, "title", 2);
k([
  tt({ type: String })
], R.prototype, "lead", 2);
k([
  tt({ type: String, attribute: "features-json" })
], R.prototype, "featuresJson", 2);
k([
  tt({ type: String, attribute: "split-image" })
], R.prototype, "splitImage", 2);
k([
  tt({ type: String })
], R.prototype, "layout", 2);
k([
  tt({ type: String, attribute: "theme-style" })
], R.prototype, "themeStyle", 2);
k([
  K({
    attributeType: z.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Section Title",
    fieldMappings: "title"
  })
], R.prototype, "titleConfig", 1);
k([
  K({
    attributeType: z.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Section Lead Copy",
    fieldMappings: "lead"
  })
], R.prototype, "leadConfig", 1);
k([
  K({
    attributeType: z.PROPERTY,
    uiComponentType: L.TEXTAREA,
    displayLabel: "Features JSON",
    fieldMappings: "featuresJson"
  })
], R.prototype, "featuresJsonConfig", 1);
k([
  K({
    attributeType: z.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Split Layout Image URL",
    fieldMappings: "splitImage"
  })
], R.prototype, "splitImageConfig", 1);
k([
  K({
    attributeType: z.PROPERTY,
    uiComponentType: L.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "3-Column Card Grid", value: "layout-1" },
      { label: "Split Image-Left Feature List", value: "layout-2" },
      { label: "4-Column Accent Bullet Cards", value: "layout-3" }
    ]
  })
], R.prototype, "layoutConfig", 1);
k([
  K({
    attributeType: z.PROPERTY,
    uiComponentType: L.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" }
    ]
  })
], R.prototype, "themeStyleConfig", 1);
R = k([
  Le({
    name: "zero-block-feature",
    version: "1.0.0",
    title: "Feature Block",
    elementSelector: "zero-block-feature",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  ze()
], R);
export {
  R as ZeroBlockFeature,
  mr as studioTemplate
};
