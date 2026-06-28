var He = Object.defineProperty;
var je = (n, t, e) => t in n ? He(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var Vt = (n, t, e) => je(n, typeof t != "symbol" ? t + "" : t, e);
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
var Bt;
(function(n) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof zt == "object" ? zt : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = s(n);
    typeof e.Reflect < "u" && (r = s(e.Reflect, r)), t(r, e), typeof e.Reflect > "u" && (e.Reflect = n);
    function s(p, m) {
      return function(b, w) {
        Object.defineProperty(p, b, { configurable: !0, writable: !0, value: w }), m && m(b, w);
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
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, m = !_ && !p, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return yt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return yt({ __proto__: null });
      } : function() {
        return yt({});
      },
      has: m ? function(i, o) {
        return r.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: m ? function(i, o) {
        return r.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, w = Object.getPrototypeOf(Function), O = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Re(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ne(), R = typeof WeakMap == "function" ? WeakMap : Ie(), V = s ? Symbol.for("@reflect-metadata:registry") : void 0, nt = Pe(), St = Te(nt);
    function he(i, o, a, c) {
      if (g(a)) {
        if (!Nt(i))
          throw new TypeError();
        if (!It(o))
          throw new TypeError();
        return we(i, o);
      } else {
        if (!Nt(i))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(c) && !g(c) && !z(c))
          throw new TypeError();
        return z(c) && (c = void 0), a = N(a), Ae(i, o, a, c);
      }
    }
    t("decorate", he);
    function fe(i, o) {
      function a(c, v) {
        if (!M(c))
          throw new TypeError();
        if (!g(v) && !xe(v))
          throw new TypeError();
        Ct(i, o, c, v);
      }
      return a;
    }
    t("metadata", fe);
    function pe(i, o, a, c) {
      if (!M(a))
        throw new TypeError();
      return g(c) || (c = N(c)), Ct(i, o, a, c);
    }
    t("defineMetadata", pe);
    function ye(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Ot(i, o, a);
    }
    t("hasMetadata", ye);
    function ve(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return g(a) || (a = N(a)), ht(i, o, a);
    }
    t("hasOwnMetadata", ve);
    function _e(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Mt(i, o, a);
    }
    t("getMetadata", _e);
    function ge(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return g(a) || (a = N(a)), xt(i, o, a);
    }
    t("getOwnMetadata", ge);
    function me(i, o) {
      if (!M(i))
        throw new TypeError();
      return g(o) || (o = N(o)), Pt(i, o);
    }
    t("getMetadataKeys", me);
    function be(i, o) {
      if (!M(i))
        throw new TypeError();
      return g(o) || (o = N(o)), Tt(i, o);
    }
    t("getOwnMetadataKeys", be);
    function $e(i, o, a) {
      if (!M(o))
        throw new TypeError();
      if (g(a) || (a = N(a)), !M(o))
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
    t("deleteMetadata", $e);
    function we(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!g(v) && !z(v)) {
          if (!It(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function Ae(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var C = i[v], x = C(o, a, c);
        if (!g(x) && !z(x)) {
          if (!M(x))
            throw new TypeError();
          c = x;
        }
      }
      return c;
    }
    function Ot(i, o, a) {
      var c = ht(i, o, a);
      if (c)
        return !0;
      var v = pt(o);
      return z(v) ? !1 : Ot(i, v, a);
    }
    function ht(i, o, a) {
      var c = Y(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Rt(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Mt(i, o, a) {
      var c = ht(i, o, a);
      if (c)
        return xt(i, o, a);
      var v = pt(o);
      if (!z(v))
        return Mt(i, v, a);
    }
    function xt(i, o, a) {
      var c = Y(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ct(i, o, a, c) {
      var v = Y(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function Pt(i, o) {
      var a = Tt(i, o), c = pt(i);
      if (c === null)
        return a;
      var v = Pt(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var C = new T(), x = [], $ = 0, d = a; $ < d.length; $++) {
        var h = d[$], f = C.has(h);
        f || (C.add(h), x.push(h));
      }
      for (var y = 0, A = v; y < A.length; y++) {
        var h = A[y], f = C.has(h);
        f || (C.add(h), x.push(h));
      }
      return x;
    }
    function Tt(i, o) {
      var a = Y(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
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
    function z(i) {
      return i === null;
    }
    function Ee(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Se(i, o) {
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
      var a = "string", c = Dt(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return Oe(i);
    }
    function Oe(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (it(v)) {
          var c = v.call(i);
          if (!M(c))
            return c;
        }
        var a = i.valueOf;
        if (it(a)) {
          var c = a.call(i);
          if (!M(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Rt(i) {
      return !!i;
    }
    function Me(i) {
      return "" + i;
    }
    function N(i) {
      var o = Se(i);
      return Ee(o) ? o : Me(o);
    }
    function Nt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function it(i) {
      return typeof i == "function";
    }
    function It(i) {
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
    function ft(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Dt(i, o) {
      var a = i[o];
      if (a != null) {
        if (!it(a))
          throw new TypeError();
        return a;
      }
    }
    function Ut(i) {
      var o = Dt(i, u);
      if (!it(o))
        throw new TypeError();
      var a = o.call(i);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function Ht(i) {
      return i.value;
    }
    function jt(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Lt(i) {
      var o = i.return;
      o && o.call(i);
    }
    function pt(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Ce() {
      var i;
      !g(V) && typeof e.Reflect < "u" && !(V in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = ke(e.Reflect));
      var o, a, c, v = new R(), C = {
        registerProvider: x,
        getProvider: d,
        setProvider: f
      };
      return C;
      function x(y) {
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
            c === void 0 && (c = new T()), c.add(y);
            break;
        }
      }
      function $(y, A) {
        if (!g(o)) {
          if (o.isProviderFor(y, A))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(y, A))
              return o;
            if (!g(c))
              for (var E = Ut(c); ; ) {
                var S = jt(E);
                if (!S)
                  return;
                var k = Ht(S);
                if (k.isProviderFor(y, A))
                  return Lt(E), k;
              }
          }
        }
        if (!g(i) && i.isProviderFor(y, A))
          return i;
      }
      function d(y, A) {
        var E = v.get(y), S;
        return g(E) || (S = E.get(A)), g(S) && (S = $(y, A), g(S) || (g(E) && (E = new O(), v.set(y, E)), E.set(A, S))), S;
      }
      function h(y) {
        if (g(y))
          throw new TypeError();
        return o === y || a === y || !g(c) && c.has(y);
      }
      function f(y, A, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = d(y, A);
        if (S !== E) {
          if (!g(S))
            return !1;
          var k = v.get(y);
          g(k) && (k = new O(), v.set(y, k)), k.set(A, E);
        }
        return !0;
      }
    }
    function Pe() {
      var i;
      return !g(V) && M(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[V]), g(i) && (i = Ce()), !g(V) && M(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, V, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Te(i) {
      var o = new R(), a = {
        isProviderFor: function(h, f) {
          var y = o.get(h);
          return g(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: d
      };
      return nt.registerProvider(a), a;
      function c(h, f, y) {
        var A = o.get(h), E = !1;
        if (g(A)) {
          if (!y)
            return;
          A = new O(), o.set(h, A), E = !0;
        }
        var S = A.get(f);
        if (g(S)) {
          if (!y)
            return;
          if (S = new O(), A.set(f, S), !i.setProvider(h, f, a))
            throw A.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, y) {
        var A = c(
          f,
          y,
          /*Create*/
          !1
        );
        return g(A) ? !1 : Rt(A.has(h));
      }
      function C(h, f, y) {
        var A = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (!g(A))
          return A.get(h);
      }
      function x(h, f, y, A) {
        var E = c(
          y,
          A,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function $(h, f) {
        var y = [], A = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(A))
          return y;
        for (var E = A.keys(), S = Ut(E), k = 0; ; ) {
          var Gt = jt(S);
          if (!Gt)
            return y.length = k, y;
          var De = Ht(Gt);
          try {
            y[k] = De;
          } catch (Ue) {
            try {
              Lt(S);
            } finally {
              throw Ue;
            }
          }
          k++;
        }
      }
      function d(h, f, y) {
        var A = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (g(A) || !A.delete(h))
          return !1;
        if (A.size === 0) {
          var E = o.get(f);
          g(E) || (E.delete(y), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function ke(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, C = i.deleteMetadata, x = new R(), $ = {
        isProviderFor: function(d, h) {
          var f = x.get(d);
          return !g(f) && f.has(h) ? !0 : v(d, h).length ? (g(f) && (f = new T(), x.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return $;
    }
    function Y(i, o, a) {
      var c = nt.getProvider(i, o);
      if (!g(c))
        return c;
      if (a) {
        if (nt.setProvider(i, o, St))
          return St;
        throw new Error("Illegal state.");
      }
    }
    function Re() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function $(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[u] = function() {
            return this;
          }, $.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, $.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, $;
        }()
      ), c = (
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
          }), $.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, $.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, $.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, $.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, y = h + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, ft(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, $.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, $.prototype.entries = function() {
            return new a(this._keys, this._values, x);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[u] = function() {
            return this.entries();
          }, $.prototype._find = function(d, h) {
            if (!ft(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ft(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return c;
      function v($, d) {
        return $;
      }
      function C($, d) {
        return d;
      }
      function x($, d) {
        return [$, d];
      }
    }
    function Ne() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new O();
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
    function Ie() {
      var i = 16, o = b.create(), a = c();
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
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
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
          d = "@@WeakMap@@" + $();
        while (b.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, h) {
        if (!r.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: b.create() });
        }
        return d[a];
      }
      function C(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function x(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, d), h;
        }
        return C(new Array(d), d);
      }
      function $() {
        var d = x(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var y = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function yt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Bt || (Bt = {}));
function Le(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function Ge(n) {
  return function(t) {
    if (Le(n)) {
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
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, l);
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
function Ve(n) {
  return Ge(n);
}
function ze(n) {
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
        var m;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const b = new CSSStyleSheet(), w = (m = l.sheet) == null ? void 0 : m.cssRules;
          w && (Array.from(w).forEach((O) => b.insertRule(O.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          p.appendChild(b);
        }
        u.forEach((b) => {
          const w = b.cloneNode(!0);
          p.appendChild(w);
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
function We(n) {
  return function(t, e) {
    try {
      Be(n);
      const r = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (n.fieldMappings = n.fieldMappings ?? e);
      }
      r.push(n), Reflect.defineMetadata("ZeroAttribute", r, t);
    } catch (r) {
      console.log(r);
    }
  };
}
function se(n) {
  return We(n);
}
var at;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker", n.CHIPS = "chips";
})(at || (at = {}));
var lt;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(lt || (lt = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot = globalThis, bt = ot.ShadowRoot && (ot.ShadyCSS === void 0 || ot.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $t = Symbol(), Wt = /* @__PURE__ */ new WeakMap();
let oe = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== $t) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (bt && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = Wt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Wt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Fe = (n) => new oe(typeof n == "string" ? n : n + "", void 0, $t), Ye = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((r, s, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[l + 1], n[0]);
  return new oe(e, n, $t);
}, qe = (n, t) => {
  if (bt) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), s = ot.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = e.cssText, n.appendChild(r);
  }
}, Ft = bt ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return Fe(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ze, defineProperty: Xe, getOwnPropertyDescriptor: Je, getOwnPropertyNames: Ke, getOwnPropertySymbols: Qe, getPrototypeOf: tr } = Object, D = globalThis, Yt = D.trustedTypes, er = Yt ? Yt.emptyScript : "", vt = D.reactiveElementPolyfillSupport, Z = (n, t) => n, ut = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? er : null;
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
} }, wt = (n, t) => !Ze(n, t), qt = { attribute: !0, type: String, converter: ut, reflect: !1, useDefault: !1, hasChanged: wt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let B = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = qt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(t, r, e);
      s !== void 0 && Xe(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: s, set: l } = Je(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, _, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? qt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Z("elementProperties"))) return;
    const t = tr(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Z("properties"))) {
      const e = this.properties, r = [...Ke(e), ...Qe(e)];
      for (const s of r) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, s] of e) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const s = this._$Eu(e, r);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const s of r) e.unshift(Ft(s));
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
    var l;
    const r = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, r);
    if (s !== void 0 && r.reflect === !0) {
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : ut).toAttribute(e, r.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const r = this.constructor, s = r._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const _ = r.getPropertyOptions(s), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : ut;
      this._$Em = s;
      const m = p.fromAttribute(e, _.type);
      this[s] = m ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? m, this._$Em = null;
    }
  }
  requestUpdate(t, e, r, s = !1, l) {
    var u;
    if (t !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[t]), r ?? (r = _.getPropertyOptions(t)), !((r.hasChanged ?? wt)(l, e) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(_._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: s, wrapped: l }, u) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((s) => {
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
    (e = this._$EO) == null || e.forEach((r) => {
      var s;
      return (s = r.hostUpdated) == null ? void 0 : s.call(r);
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
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[Z("elementProperties")] = /* @__PURE__ */ new Map(), B[Z("finalized")] = /* @__PURE__ */ new Map(), vt == null || vt({ ReactiveElement: B }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, Zt = (n) => n, ct = X.trustedTypes, Xt = ct ? ct.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, ae = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + I, rr = `<${le}>`, L = document, K = () => L.createComment(""), Q = (n) => n === null || typeof n != "object" && typeof n != "function", At = Array.isArray, nr = (n) => At(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jt = /-->/g, Kt = />/g, U = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qt = /'/g, te = /"/g, ue = /^(?:script|style|textarea|title)$/i, ir = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), st = ir(1), W = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), ee = /* @__PURE__ */ new WeakMap(), H = L.createTreeWalker(L, 129);
function ce(n, t) {
  if (!At(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xt !== void 0 ? Xt.createHTML(t) : t;
}
const sr = (n, t) => {
  const e = n.length - 1, r = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = q;
  for (let _ = 0; _ < e; _++) {
    const p = n[_];
    let m, b, w = -1, O = 0;
    for (; O < p.length && (u.lastIndex = O, b = u.exec(p), b !== null); ) O = u.lastIndex, u === q ? b[1] === "!--" ? u = Jt : b[1] !== void 0 ? u = Kt : b[2] !== void 0 ? (ue.test(b[2]) && (s = RegExp("</" + b[2], "g")), u = U) : b[3] !== void 0 && (u = U) : u === U ? b[0] === ">" ? (u = s ?? q, w = -1) : b[1] === void 0 ? w = -2 : (w = u.lastIndex - b[2].length, m = b[1], u = b[3] === void 0 ? U : b[3] === '"' ? te : Qt) : u === te || u === Qt ? u = U : u === Jt || u === Kt ? u = q : (u = U, s = void 0);
    const T = u === U && n[_ + 1].startsWith("/>") ? " " : "";
    l += u === q ? p + rr : w >= 0 ? (r.push(m), p.slice(0, w) + ae + p.slice(w) + I + T) : p + I + (w === -2 ? _ : T);
  }
  return [ce(n, l + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class tt {
  constructor({ strings: t, _$litType$: e }, r) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = t.length - 1, p = this.parts, [m, b] = sr(t, e);
    if (this.el = tt.createElement(m, r), H.currentNode = this.el.content, e === 2 || e === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = H.nextNode()) !== null && p.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(ae)) {
          const O = b[u++], T = s.getAttribute(w).split(I), R = /([.?@])?(.*)/.exec(O);
          p.push({ type: 1, index: l, name: R[2], strings: T, ctor: R[1] === "." ? ar : R[1] === "?" ? lr : R[1] === "@" ? ur : dt }), s.removeAttribute(w);
        } else w.startsWith(I) && (p.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ue.test(s.tagName)) {
          const w = s.textContent.split(I), O = w.length - 1;
          if (O > 0) {
            s.textContent = ct ? ct.emptyScript : "";
            for (let T = 0; T < O; T++) s.append(w[T], K()), H.nextNode(), p.push({ type: 2, index: ++l });
            s.append(w[O], K());
          }
        }
      } else if (s.nodeType === 8) if (s.data === le) p.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(I, w + 1)) !== -1; ) p.push({ type: 7, index: l }), w += I.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const r = L.createElement("template");
    return r.innerHTML = t, r;
  }
}
function F(n, t, e = n, r) {
  var u, _;
  if (t === W) return t;
  let s = r !== void 0 ? (u = e._$Co) == null ? void 0 : u[r] : e._$Cl;
  const l = Q(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(n), s._$AT(n, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = s : e._$Cl = s), s !== void 0 && (t = F(n, s._$AS(n, t.values), s, r)), t;
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
    const { el: { content: e }, parts: r } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? L).importNode(e, !0);
    H.currentNode = s;
    let l = H.nextNode(), u = 0, _ = 0, p = r[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let m;
        p.type === 2 ? m = new et(l, l.nextSibling, this, t) : p.type === 1 ? m = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (m = new cr(l, this, t)), this._$AV.push(m), p = r[++_];
      }
      u !== (p == null ? void 0 : p.index) && (l = H.nextNode(), u++);
    }
    return H.currentNode = L, s;
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
  constructor(t, e, r, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = F(this, t, e), Q(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== W && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : nr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && Q(this._$AH) ? this._$AA.nextSibling.data = t : this.T(L.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: r } = t, s = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = tt.createElement(ce(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new or(s, this), _ = u.u(this.options);
      u.p(e), this.T(_), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ee.get(t.strings);
    return e === void 0 && ee.set(t.strings, e = new tt(t)), e;
  }
  k(t) {
    At(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, s = 0;
    for (const l of t) s === e.length ? e.push(r = new et(this.O(K()), this.O(K()), this, this.options)) : r = e[s], r._$AI(l), s++;
    s < e.length && (this._$AR(r && r._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Zt(t).nextSibling;
      Zt(t).remove(), t = s;
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
  constructor(t, e, r, s, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = P;
  }
  _$AI(t, e = this, r, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = F(this, t, e, 0), u = !Q(t) || t !== this._$AH && t !== W, u && (this._$AH = t);
    else {
      const _ = t;
      let p, m;
      for (t = l[0], p = 0; p < l.length - 1; p++) m = F(this, _[r + p], e, p), m === W && (m = this._$AH[p]), u || (u = !Q(m) || m !== this._$AH[p]), m === P ? t = P : t !== P && (t += (m ?? "") + l[p + 1]), this._$AH[p] = m;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ar extends dt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class lr extends dt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class ur extends dt {
  constructor(t, e, r, s, l) {
    super(t, e, r, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = F(this, t, e, 0) ?? P) === W) return;
    const r = this._$AH, s = t === P && r !== P || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, l = t !== P && (r === P || s);
    s && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class cr {
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
const gt = X.litHtmlPolyfillSupport;
gt == null || gt(tt, et), (X.litHtmlVersions ?? (X.litHtmlVersions = [])).push("3.3.3");
const dr = (n, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = r._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = s = new et(t.insertBefore(K(), l), l, void 0, e ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = globalThis;
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
    return W;
  }
}
var ie;
J._$litElement$ = !0, J.finalized = !0, (ie = j.litElementHydrateSupport) == null || ie.call(j, { LitElement: J });
const mt = j.litElementPolyfillSupport;
mt == null || mt({ LitElement: J });
(j.litElementVersions ?? (j.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: ut, reflect: !1, hasChanged: wt }, fr = (n = hr, t, e) => {
  const { kind: r, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), l.set(e.name, n), r === "accessor") {
    const { name: u } = e;
    return { set(_) {
      const p = t.get.call(this);
      t.set.call(this, _), this.requestUpdate(u, p, n, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, n, _), _;
    } };
  }
  if (r === "setter") {
    const { name: u } = e;
    return function(_) {
      const p = this[u];
      t.call(this, _), this.requestUpdate(u, p, n, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function Et(n) {
  return (t, e) => typeof e == "object" ? fr(n, t, e) : ((r, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(n, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function de(n) {
  return Et({ ...n, state: !0, attribute: !1 });
}
var pr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, rt = (n, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? yr(t, e) : t, l = n.length - 1, u; l >= 0; l--)
    (u = n[l]) && (s = (r ? u(t, e, s) : u(s)) || s);
  return r && s && pr(t, e, s), s;
};
const re = () => window.zeroThemeManager, vr = {
  kind: "generic",
  templateHtml: [
    "<div style='width:100%;overflow-x:auto;padding:2px;'>",
    "<table style='width:100%;border-collapse:collapse;font-family:monospace;background:rgba(0, 0, 0, 0.8);border:2px solid #ff003c;'>",
    "<thead><tr>",
    "<th style='padding:15px;text-align:left;border-bottom:2px solid #ff003c;background:rgba(255, 0, 60, 0.1);color:#ff003c;font-weight:700;text-transform:uppercase;letter-spacing:2px;'>ID</th>",
    "<th style='padding:15px;text-align:left;border-bottom:2px solid #ff003c;background:rgba(255, 0, 60, 0.1);color:#ff003c;font-weight:700;text-transform:uppercase;letter-spacing:2px;'>NAME</th>",
    "<th style='padding:15px;text-align:left;border-bottom:2px solid #ff003c;background:rgba(255, 0, 60, 0.1);color:#ff003c;font-weight:700;text-transform:uppercase;letter-spacing:2px;'>STATUS</th>",
    "</tr></thead>",
    "<tbody>",
    "<tr>",
    "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 0, 60, 0.2);color:#fff;'>SYS-01</td>",
    "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 0, 60, 0.2);color:#fff;'>CORE_DRIVE</td>",
    "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 0, 60, 0.2);color:#fff;'>ACTIVE</td>",
    "</tr>",
    "<tr>",
    "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 0, 60, 0.2);color:#fff;'>SYS-02</td>",
    "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 0, 60, 0.2);color:#fff;'>NEURAL_LINK</td>",
    "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 0, 60, 0.2);color:#fff;'>STANDBY</td>",
    "</tr>",
    "</tbody>",
    "</table>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Glitch", "Cyberpunk"]
};
function ne(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let G = class extends J {
  constructor() {
    super(...arguments), this.columns = [
      { key: "id", label: "ID", sortable: !0 },
      { key: "name", label: "NAME", sortable: !0 },
      { key: "status", label: "STATUS", sortable: !0 }
    ], this.data = [
      { id: "SYS-01", name: "CORE_DRIVE", status: "ACTIVE" },
      { id: "SYS-02", name: "NEURAL_LINK", status: "STANDBY" },
      { id: "SYS-03", name: "OPTIC_MESH", status: "OFFLINE" }
    ], this.sortKey = "", this.sortOrder = "asc";
  }
  static getStudioTemplate(n) {
    var l, u, _, p;
    const t = ((u = (l = n == null ? void 0 : n.studio) == null ? void 0 : l.props) == null ? void 0 : u.columns) || [
      { key: "id", label: "ID", sortable: !0 },
      { key: "name", label: "NAME", sortable: !0 },
      { key: "status", label: "STATUS", sortable: !0 }
    ], e = ((p = (_ = n == null ? void 0 : n.studio) == null ? void 0 : _.props) == null ? void 0 : p.data) || [
      { id: "SYS-01", name: "CORE_DRIVE", status: "ACTIVE" },
      { id: "SYS-02", name: "NEURAL_LINK", status: "STANDBY" }
    ];
    let r = "<thead><tr>";
    for (const m of t) {
      const b = m.label || m.key || "";
      r += `<th style='padding:15px;text-align:left;border-bottom:2px solid #ff003c;background:rgba(255, 0, 60, 0.1);color:#ff003c;font-weight:700;text-transform:uppercase;letter-spacing:2px;'>${ne(String(b))}</th>`;
    }
    r += "</tr></thead>";
    let s = "<tbody>";
    for (let m = 0; m < Math.min(e.length, 5); m++) {
      const b = e[m], O = m === Math.min(e.length, 5) - 1 ? "" : "border-bottom:1px solid rgba(255, 0, 60, 0.2);";
      s += "<tr>";
      for (const T of t) {
        const R = b[T.key] !== void 0 ? String(b[T.key]) : "";
        s += `<td style='padding:12px 15px;text-align:left;${O}color:#fff;'>${ne(R)}</td>`;
      }
      s += "</tr>";
    }
    return s += "</tbody>", {
      ...vr,
      templateHtml: [
        "<div style='width:100%;overflow-x:auto;padding:2px;'>",
        "<table style='width:100%;border-collapse:collapse;font-family:monospace;background:rgba(0, 0, 0, 0.8);border:2px solid #ff003c;'>",
        r,
        s,
        "</table>",
        "</div>"
      ].join("")
    };
  }
  handleSort(n) {
    this.sortKey === n ? this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc" : (this.sortKey = n, this.sortOrder = "asc");
  }
  connectedCallback() {
    var n;
    super.connectedCallback(), (n = re()) == null || n.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const n = (e = re()) == null ? void 0 : e.getActiveTheme(), t = [...this.data].sort((r, s) => {
      if (!this.sortKey) return 0;
      const l = r[this.sortKey], u = s[this.sortKey];
      return this.sortOrder === "asc" ? l > u ? 1 : -1 : l < u ? 1 : -1;
    });
    return st`
            <style>
                ${n ? n.getGlobalStyles() : ""}
            </style>
            <table>
                <thead>
                    <tr>
                        ${this.columns.map((r) => st`
                            <th @click="${() => this.handleSort(r.key)}">
                                ${r.label} ${this.sortKey === r.key ? this.sortOrder === "asc" ? "▴" : "▾" : ""}
                            </th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${t.map((r) => st`
                        <tr>
                            ${this.columns.map((s) => st`<td>${r[s.key]}</td>`)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `;
  }
};
G.styles = Ye`
        :host {
            display: block;
            width: 100%;
            overflow-x: auto;
            --tbl-p: var(--uiv-primary-color, #ff003c);
            --tbl-bg: var(--uiv-bg-color, rgba(15, 23, 42, 0.9));
        }

        table {
            width: 100%;
            border-collapse: collapse;
            border: 2px solid var(--tbl-p);
            background: var(--tbl-bg);
            font-family: inherit;
        }

        th {
            background: rgba(255, 0, 60, 0.1);
            color: var(--tbl-p);
            text-transform: uppercase;
            letter-spacing: 2px;
            padding: 15px;
            text-align: left;
            border-bottom: 2px solid var(--tbl-p);
            cursor: pointer;
        }

        td {
            padding: 12px 15px;
            border-bottom: 1px solid rgba(255, 0, 60, 0.2);
            color: var(--uiv-text-color, #fff);
        }

        tr:hover td {
            background: rgba(255, 0, 60, 0.05);
        }
    `;
rt([
  Et({ type: Array }),
  se({
    attributeType: lt.PROPERTY,
    uiComponentType: at.TEXTAREA,
    displayLabel: "Columns JSON",
    fieldMappings: "columns"
  })
], G.prototype, "columns", 2);
rt([
  Et({ type: Array }),
  se({
    attributeType: lt.PROPERTY,
    uiComponentType: at.TEXTAREA,
    displayLabel: "Data JSON",
    fieldMappings: "data"
  })
], G.prototype, "data", 2);
rt([
  de()
], G.prototype, "sortKey", 2);
rt([
  de()
], G.prototype, "sortOrder", 2);
G = rt([
  Ve({
    name: "zero-uiv-table-glitch",
    version: "1.0.0",
    title: "Glitch Style Table",
    elementSelector: "zero-uiv-table-glitch",
    group: "Uiverse Tables",
    iconName: "table-icon.png"
  }),
  ze()
], G);
export {
  G as ZeroUivTableGlitch,
  vr as glitchTemplate
};
