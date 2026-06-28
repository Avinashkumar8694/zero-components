var De = Object.defineProperty;
var He = (r, t, e) => t in r ? De(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Bt = (r, t, e) => He(r, typeof t != "symbol" ? t + "" : t, e);
var zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof zt == "object" ? zt : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(p, A) {
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
    function _() {
      return l() || u();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !_ && !p, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return vt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return vt({ __proto__: null });
      } : function() {
        return vt({});
      },
      has: A ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: A ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, w = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : xe(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ke(), H = typeof WeakMap == "function" ? WeakMap : Te(), z = s ? Symbol.for("@reflect-metadata:registry") : void 0, st = Me(), St = Ce(st);
    function ue(i, o, a, c) {
      if (g(a)) {
        if (!Nt(i))
          throw new TypeError();
        if (!Dt(o))
          throw new TypeError();
        return me(i, o);
      } else {
        if (!Nt(i))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !g(c) && !G(c))
          throw new TypeError();
        return G(c) && (c = void 0), a = N(a), be(i, o, a, c);
      }
    }
    t("decorate", ue);
    function ce(i, o) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!g(v) && !Se(v))
          throw new TypeError();
        Pt(i, o, c, v);
      }
      return a;
    }
    t("metadata", ce);
    function de(i, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return g(c) || (c = N(c)), Pt(i, o, a, c);
    }
    t("defineMetadata", de);
    function he(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Ot(i, o, a);
    }
    t("hasMetadata", he);
    function fe(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = N(a)), ft(i, o, a);
    }
    t("hasOwnMetadata", fe);
    function pe(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Mt(i, o, a);
    }
    t("getMetadata", pe);
    function ye(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Ct(i, o, a);
    }
    t("getOwnMetadata", ye);
    function ve(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = N(o)), xt(i, o);
    }
    t("getMetadataKeys", ve);
    function _e(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = N(o)), kt(i, o);
    }
    t("getOwnMetadataKeys", _e);
    function ge(i, o, a) {
      if (!O(o))
        throw new TypeError();
      if (g(a) || (a = N(a)), !O(o))
        throw new TypeError();
      g(a) || (a = N(a));
      var c = Y(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    t("deleteMetadata", ge);
    function me(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!g(v) && !G(v)) {
          if (!Dt(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function be(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var C = i[v], M = C(o, a, c);
        if (!g(M) && !G(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function Ot(i, o, a) {
      var c = ft(i, o, a);
      if (c)
        return !0;
      var v = yt(o);
      return G(v) ? !1 : Ot(i, v, a);
    }
    function ft(i, o, a) {
      var c = Y(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Rt(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Mt(i, o, a) {
      var c = ft(i, o, a);
      if (c)
        return Ct(i, o, a);
      var v = yt(o);
      if (!G(v))
        return Mt(i, v, a);
    }
    function Ct(i, o, a) {
      var c = Y(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Pt(i, o, a, c) {
      var v = Y(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function xt(i, o) {
      var a = kt(i, o), c = yt(i);
      if (c === null)
        return a;
      var v = xt(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var C = new k(), M = [], m = 0, d = a; m < d.length; m++) {
        var h = d[m], f = C.has(h);
        f || (C.add(h), M.push(h));
      }
      for (var y = 0, b = v; y < b.length; y++) {
        var h = b[y], f = C.has(h);
        f || (C.add(h), M.push(h));
      }
      return M;
    }
    function kt(i, o) {
      var a = Y(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function Tt(i) {
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
    function G(i) {
      return i === null;
    }
    function $e(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function we(i, o) {
      switch (Tt(i)) {
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
      var a = "string", c = Ht(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return Ae(i);
    }
    function Ae(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (ot(v)) {
          var c = v.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (ot(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Rt(i) {
      return !!i;
    }
    function Ee(i) {
      return "" + i;
    }
    function N(i) {
      var o = we(i);
      return $e(o) ? o : Ee(o);
    }
    function Nt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ot(i) {
      return typeof i == "function";
    }
    function Dt(i) {
      return typeof i == "function";
    }
    function Se(i) {
      switch (Tt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function pt(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Ht(i, o) {
      var a = i[o];
      if (a != null) {
        if (!ot(a))
          throw new TypeError();
        return a;
      }
    }
    function jt(i) {
      var o = Ht(i, u);
      if (!ot(o))
        throw new TypeError();
      var a = o.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Ut(i) {
      return i.value;
    }
    function It(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Lt(i) {
      var o = i.return;
      o && o.call(i);
    }
    function yt(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Oe() {
      var i;
      !g(z) && typeof e.Reflect < "u" && !(z in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Pe(e.Reflect));
      var o, a, c, v = new H(), C = {
        registerProvider: M,
        getProvider: d,
        setProvider: f
      };
      return C;
      function M(y) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
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
      function m(y, b) {
        if (!g(o)) {
          if (o.isProviderFor(y, b))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(y, b))
              return o;
            if (!g(c))
              for (var E = jt(c); ; ) {
                var S = It(E);
                if (!S)
                  return;
                var T = Ut(S);
                if (T.isProviderFor(y, b))
                  return Lt(E), T;
              }
          }
        }
        if (!g(i) && i.isProviderFor(y, b))
          return i;
      }
      function d(y, b) {
        var E = v.get(y), S;
        return g(E) || (S = E.get(b)), g(S) && (S = m(y, b), g(S) || (g(E) && (E = new x(), v.set(y, E)), E.set(b, S))), S;
      }
      function h(y) {
        if (g(y))
          throw new TypeError();
        return o === y || a === y || !g(c) && c.has(y);
      }
      function f(y, b, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = d(y, b);
        if (S !== E) {
          if (!g(S))
            return !1;
          var T = v.get(y);
          g(T) && (T = new x(), v.set(y, T)), T.set(b, E);
        }
        return !0;
      }
    }
    function Me() {
      var i;
      return !g(z) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[z]), g(i) && (i = Oe()), !g(z) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, z, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ce(i) {
      var o = new H(), a = {
        isProviderFor: function(h, f) {
          var y = o.get(h);
          return g(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return st.registerProvider(a), a;
      function c(h, f, y) {
        var b = o.get(h), E = !1;
        if (g(b)) {
          if (!y)
            return;
          b = new x(), o.set(h, b), E = !0;
        }
        var S = b.get(f);
        if (g(S)) {
          if (!y)
            return;
          if (S = new x(), b.set(f, S), !i.setProvider(h, f, a))
            throw b.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, y) {
        var b = c(
          f,
          y,
          /*Create*/
          !1
        );
        return g(b) ? !1 : Rt(b.has(h));
      }
      function C(h, f, y) {
        var b = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (!g(b))
          return b.get(h);
      }
      function M(h, f, y, b) {
        var E = c(
          y,
          b,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function m(h, f) {
        var y = [], b = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(b))
          return y;
        for (var E = b.keys(), S = jt(E), T = 0; ; ) {
          var Wt = It(S);
          if (!Wt)
            return y.length = T, y;
          var Re = Ut(Wt);
          try {
            y[T] = Re;
          } catch (Ne) {
            try {
              Lt(S);
            } finally {
              throw Ne;
            }
          }
          T++;
        }
      }
      function d(h, f, y) {
        var b = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (g(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var E = o.get(f);
          g(E) || (E.delete(y), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Pe(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, C = i.deleteMetadata, M = new H(), m = {
        isProviderFor: function(d, h) {
          var f = M.get(d);
          return !g(f) && f.has(h) ? !0 : v(d, h).length ? (g(f) && (f = new k(), M.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return m;
    }
    function Y(i, o, a) {
      var c = st.getProvider(i, o);
      if (!g(c))
        return c;
      if (a) {
        if (st.setProvider(i, o, St))
          return St;
        throw new Error("Illegal state.");
      }
    }
    function xe() {
      var i = {}, o = [], a = (
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
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, m.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
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
              for (var f = this._keys.length, y = h + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, pt(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(d, h) {
            if (!pt(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pt(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return c;
      function v(m, d) {
        return m;
      }
      function C(m, d) {
        return d;
      }
      function M(m, d) {
        return [m, d];
      }
    }
    function ke() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new x();
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
      return i;
    }
    function Te() {
      var i = 16, o = $.create(), a = c();
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
          d = "@@WeakMap@@" + m();
        while ($.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: $.create() });
        }
        return d[a];
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
          var y = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function vt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Gt || (Gt = {}));
function je(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ue(r) {
  return function(t) {
    if (je(r)) {
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
function Ie(r) {
  return Ue(r);
}
function Le(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Bt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const $ = new CSSStyleSheet(), w = (A = l.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((x) => $.insertRule(x.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, $]);
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
function We(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Be(r) {
  return function(t, e) {
    try {
      We(r);
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
function ct(r) {
  return Be(r);
}
var tt;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(tt || (tt = {}));
var F;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(F || (F = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = globalThis, $t = at.ShadowRoot && (at.ShadyCSS === void 0 || at.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, wt = Symbol(), Vt = /* @__PURE__ */ new WeakMap();
let ie = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== wt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if ($t && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Vt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Vt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ze = (r) => new ie(typeof r == "string" ? r : r + "", void 0, wt), Ge = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ie(e, r, wt);
}, Ve = (r, t) => {
  if ($t) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = at.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, Ft = $t ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return ze(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Fe, defineProperty: qe, getOwnPropertyDescriptor: Ze, getOwnPropertyNames: Ye, getOwnPropertySymbols: Xe, getPrototypeOf: Je } = Object, U = globalThis, qt = U.trustedTypes, Qe = qt ? qt.emptyScript : "", _t = U.reactiveElementPolyfillSupport, J = (r, t) => r, lt = { toAttribute(r, t) {
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
} }, At = (r, t) => !Fe(r, t), Zt = { attribute: !0, type: String, converter: lt, reflect: !1, useDefault: !1, hasChanged: At };
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
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(J("elementProperties"))) return;
    const t = Je(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(J("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(J("properties"))) {
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
      for (const s of n) e.unshift(Ft(s));
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : lt).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : lt;
      this._$Em = s;
      const A = p.fromAttribute(e, _.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = _.getPropertyOptions(t)), !((n.hasChanged ?? At)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(_._$Eu(t, n)))) return;
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
        const { wrapped: _ } = u, p = this[l];
        _ !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[J("elementProperties")] = /* @__PURE__ */ new Map(), V[J("finalized")] = /* @__PURE__ */ new Map(), _t == null || _t({ ReactiveElement: V }), (U.reactiveElementVersions ?? (U.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q = globalThis, Yt = (r) => r, ut = Q.trustedTypes, Xt = ut ? ut.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, se = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, oe = "?" + j, Ke = `<${oe}>`, B = document, et = () => B.createComment(""), rt = (r) => r === null || typeof r != "object" && typeof r != "function", Et = Array.isArray, tr = (r) => Et(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", gt = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jt = /-->/g, Qt = />/g, I = RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Kt = /'/g, te = /"/g, ae = /^(?:script|style|textarea|title)$/i, er = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), rr = er(1), q = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), ee = /* @__PURE__ */ new WeakMap(), L = B.createTreeWalker(B, 129);
function le(r, t) {
  if (!Et(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xt !== void 0 ? Xt.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = X;
  for (let _ = 0; _ < e; _++) {
    const p = r[_];
    let A, $, w = -1, x = 0;
    for (; x < p.length && (u.lastIndex = x, $ = u.exec(p), $ !== null); ) x = u.lastIndex, u === X ? $[1] === "!--" ? u = Jt : $[1] !== void 0 ? u = Qt : $[2] !== void 0 ? (ae.test($[2]) && (s = RegExp("</" + $[2], "g")), u = I) : $[3] !== void 0 && (u = I) : u === I ? $[0] === ">" ? (u = s ?? X, w = -1) : $[1] === void 0 ? w = -2 : (w = u.lastIndex - $[2].length, A = $[1], u = $[3] === void 0 ? I : $[3] === '"' ? te : Kt) : u === te || u === Kt ? u = I : u === Jt || u === Qt ? u = X : (u = I, s = void 0);
    const k = u === I && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === X ? p + Ke : w >= 0 ? (n.push(A), p.slice(0, w) + se + p.slice(w) + j + k) : p + j + (w === -2 ? _ : k);
  }
  return [le(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class nt {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = t.length - 1, p = this.parts, [A, $] = nr(t, e);
    if (this.el = nt.createElement(A, n), L.currentNode = this.el.content, e === 2 || e === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = L.nextNode()) !== null && p.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(se)) {
          const x = $[u++], k = s.getAttribute(w).split(j), H = /([.?@])?(.*)/.exec(x);
          p.push({ type: 1, index: l, name: H[2], strings: k, ctor: H[1] === "." ? sr : H[1] === "?" ? or : H[1] === "@" ? ar : dt }), s.removeAttribute(w);
        } else w.startsWith(j) && (p.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ae.test(s.tagName)) {
          const w = s.textContent.split(j), x = w.length - 1;
          if (x > 0) {
            s.textContent = ut ? ut.emptyScript : "";
            for (let k = 0; k < x; k++) s.append(w[k], et()), L.nextNode(), p.push({ type: 2, index: ++l });
            s.append(w[x], et());
          }
        }
      } else if (s.nodeType === 8) if (s.data === oe) p.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(j, w + 1)) !== -1; ) p.push({ type: 7, index: l }), w += j.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = B.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Z(r, t, e = r, n) {
  var u, _;
  if (t === q) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = rt(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = Z(r, s._$AS(r, t.values), s, n)), t;
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? B).importNode(e, !0);
    L.currentNode = s;
    let l = L.nextNode(), u = 0, _ = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new it(l, l.nextSibling, this, t) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (A = new lr(l, this, t)), this._$AV.push(A), p = n[++_];
      }
      u !== (p == null ? void 0 : p.index) && (l = L.nextNode(), u++);
    }
    return L.currentNode = B, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class it {
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
    t = Z(this, t, e), rt(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== q && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : tr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && rt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(B.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = nt.createElement(le(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new ir(s, this), _ = u.u(this.options);
      u.p(e), this.T(_), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ee.get(t.strings);
    return e === void 0 && ee.set(t.strings, e = new nt(t)), e;
  }
  k(t) {
    Et(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new it(this.O(et()), this.O(et()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Yt(t).nextSibling;
      Yt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class dt {
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
    if (l === void 0) t = Z(this, t, e, 0), u = !rt(t) || t !== this._$AH && t !== q, u && (this._$AH = t);
    else {
      const _ = t;
      let p, A;
      for (t = l[0], p = 0; p < l.length - 1; p++) A = Z(this, _[n + p], e, p), A === q && (A = this._$AH[p]), u || (u = !rt(A) || A !== this._$AH[p]), A === P ? t = P : t !== P && (t += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sr extends dt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class or extends dt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class ar extends dt {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Z(this, t, e, 0) ?? P) === q) return;
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
    Z(this, t);
  }
}
const mt = Q.litHtmlPolyfillSupport;
mt == null || mt(nt, it), (Q.litHtmlVersions ?? (Q.litHtmlVersions = [])).push("3.3.3");
const ur = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new it(t.insertBefore(et(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis;
class K extends V {
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
    return q;
  }
}
var ne;
K._$litElement$ = !0, K.finalized = !0, (ne = W.litElementHydrateSupport) == null || ne.call(W, { LitElement: K });
const bt = W.litElementPolyfillSupport;
bt == null || bt({ LitElement: K });
(W.litElementVersions ?? (W.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: lt, reflect: !1, hasChanged: At }, dr = (r = cr, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(_) {
      const p = t.get.call(this);
      t.set.call(this, _), this.requestUpdate(u, p, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, r, _), _;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(_) {
      const p = this[u];
      t.call(this, _), this.requestUpdate(u, p, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function ht(r) {
  return (t, e) => typeof e == "object" ? dr(r, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, D = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && hr(t, e, s), s;
};
const re = {
  kind: "button",
  templateHtml: [
    "<div style='display:grid;gap:8px;'>",
    "<button type='button' style='border:0;border-radius:999px;padding:12px 16px;background:#16324f;color:#f8fafc;font-weight:700;justify-self:start;'>{{display:label}}</button>",
    "<div style='display:flex;gap:8px;flex-wrap:wrap;'>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(219,234,254,0.85);color:#1d4ed8;font-size:0.72rem;font-weight:700;'>label: {{mode:label}}</span>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(254,242,242,0.9);color:#b91c1c;font-size:0.72rem;font-weight:700;'>variant: {{display:variant}}</span>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  dynamicHints: ["$.button_label", "$.cta_text"],
  badges: ["Action"]
};
let R = class extends K {
  constructor() {
    super(...arguments), this.label = "Button", this.variant = "primary", this.disabled = !1, this.fullWidth = !1;
  }
  static getStudioTemplate(r) {
    var _, p, A, $;
    if (!r) return re;
    const t = pr(r.studio.display.label || "Button"), e = (((_ = r.props) == null ? void 0 : _.variant) ?? ((p = r.studio.props) == null ? void 0 : p.variant)) || "primary", n = !!(((A = r.props) == null ? void 0 : A.fullWidth) ?? (($ = r.studio.props) == null ? void 0 : $.fullWidth));
    let s = "var(--uiv-primary-color, #16324f)", l = "#f8fafc", u = "none";
    return e === "secondary" ? (s = "var(--uiv-surface-color, #f5efe6)", l = "var(--uiv-text-color, #132238)", u = "1px solid rgba(19, 34, 56, 0.12)") : e === "ghost" && (s = "transparent", l = "var(--uiv-primary-color, #16324f)", u = "1px dashed var(--uiv-primary-color, rgba(22, 50, 79, 0.28))"), {
      ...re,
      templateHtml: [
        `<div style='display:inline-block; ${n ? "width:100%;" : ""}'>`,
        `<button type='button' style='width:100%; border:${u}; border-radius:999px; padding:12px 18px; background:${s}; color:${l}; font-weight:700; cursor:pointer; font-family:inherit; font-size:14px;'>${t}</button>`,
        "</div>"
      ].join("")
    };
  }
  get labelConfig() {
    return this.label;
  }
  set labelConfig(r) {
    this.label = r;
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "primary";
  }
  get disabledConfig() {
    return this.disabled;
  }
  set disabledConfig(r) {
    this.disabled = !!r;
  }
  handleClick() {
    this.dispatchEvent(new CustomEvent("click", { bubbles: !0, composed: !0 }));
  }
  render() {
    const r = ["primary", "secondary", "ghost"].includes(this.variant) ? this.variant : "primary";
    return rr`
      <button
        class=${`${r} ${this.fullWidth ? "full" : ""}`}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        ${this.label}
      </button>
    `;
  }
};
R.styles = Ge`
    :host {
      display: inline-block;
    }

    button {
      border: none;
      border-radius: 999px;
      padding: 12px 18px;
      font: inherit;
      cursor: pointer;
      transition: transform 140ms ease, opacity 140ms ease, background 140ms ease;
    }

    button:hover {
      transform: translateY(-1px);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
      transform: none;
    }

    .primary {
      background: #16324f;
      color: #f8fafc;
    }

    .secondary {
      background: #f5efe6;
      color: #132238;
      border: 1px solid rgba(19, 34, 56, 0.12);
    }

    .ghost {
      background: transparent;
      color: #16324f;
      border: 1px dashed rgba(22, 50, 79, 0.28);
    }

    .full {
      width: 100%;
    }
  `;
D([
  ht({ type: String })
], R.prototype, "label", 2);
D([
  ht({ type: String })
], R.prototype, "variant", 2);
D([
  ht({ type: Boolean })
], R.prototype, "disabled", 2);
D([
  ht({ type: Boolean, attribute: "full-width" })
], R.prototype, "fullWidth", 2);
D([
  ct({
    attributeType: F.PROPERTY,
    uiComponentType: tt.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], R.prototype, "labelConfig", 1);
D([
  ct({
    attributeType: F.PROPERTY,
    uiComponentType: tt.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Ghost", value: "ghost" }
    ]
  })
], R.prototype, "variantConfig", 1);
D([
  ct({
    attributeType: F.PROPERTY,
    uiComponentType: tt.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], R.prototype, "disabledConfig", 1);
D([
  ct({
    attributeType: F.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click"
  })
], R.prototype, "handleClick", 1);
R = D([
  Ie({
    name: "zero-button",
    version: "1.0.0",
    title: "Button",
    elementSelector: "zero-button",
    group: "Actions",
    iconName: "button-icon.png"
  }),
  Le()
], R);
function pr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  R as ZeroButton,
  re as studioTemplate
};
