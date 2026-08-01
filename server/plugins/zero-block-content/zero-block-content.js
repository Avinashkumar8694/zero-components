var De = Object.defineProperty;
var Ie = (r, t, e) => t in r ? De(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Jt = (r, t, e) => Ie(r, typeof t != "symbol" ? t + "" : t, e);
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
      return function(b, g) {
        Object.defineProperty(p, b, { configurable: !0, writable: !0, value: g }), A && A(b, g);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !m && !p, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return St(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return St({ __proto__: null });
      } : function() {
        return St({});
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
    }, g = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Te(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ke(), U = typeof WeakMap == "function" ? WeakMap : Re(), I = s ? Symbol.for("@reflect-metadata:registry") : void 0, B = Oe(), tt = Pe(B);
    function ht(i, o, a, h) {
      if (_(a)) {
        if (!Wt(i))
          throw new TypeError();
        if (!Gt(o))
          throw new TypeError();
        return $e(i, o);
      } else {
        if (!Wt(i))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(h) && !_(h) && !q(h))
          throw new TypeError();
        return q(h) && (h = void 0), a = D(a), we(i, o, a, h);
      }
    }
    t("decorate", ht);
    function dt(i, o) {
      function a(h, v) {
        if (!M(h))
          throw new TypeError();
        if (!_(v) && !Ce(v))
          throw new TypeError();
        Ht(i, o, h, v);
      }
      return a;
    }
    t("metadata", dt);
    function ct(i, o, a, h) {
      if (!M(a))
        throw new TypeError();
      return _(h) || (h = D(h)), Ht(i, o, a, h);
    }
    t("defineMetadata", ct);
    function ft(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = D(a)), Nt(i, o, a);
    }
    t("hasMetadata", ft);
    function pt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = D(a)), bt(i, o, a);
    }
    t("hasOwnMetadata", pt);
    function yt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = D(a)), Dt(i, o, a);
    }
    t("getMetadata", yt);
    function vt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = D(a)), It(i, o, a);
    }
    t("getOwnMetadata", vt);
    function me(i, o) {
      if (!M(i))
        throw new TypeError();
      return _(o) || (o = D(o)), jt(i, o);
    }
    t("getMetadataKeys", me);
    function _e(i, o) {
      if (!M(i))
        throw new TypeError();
      return _(o) || (o = D(o)), Lt(i, o);
    }
    t("getOwnMetadataKeys", _e);
    function ge(i, o, a) {
      if (!M(o))
        throw new TypeError();
      if (_(a) || (a = D(a)), !M(o))
        throw new TypeError();
      _(a) || (a = D(a));
      var h = et(
        o,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : h.OrdinaryDeleteMetadata(i, o, a);
    }
    t("deleteMetadata", ge);
    function $e(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var h = i[a], v = h(o);
        if (!_(v) && !q(v)) {
          if (!Gt(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function we(i, o, a, h) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], O = P(o, a, h);
        if (!_(O) && !q(O)) {
          if (!M(O))
            throw new TypeError();
          h = O;
        }
      }
      return h;
    }
    function Nt(i, o, a) {
      var h = bt(i, o, a);
      if (h)
        return !0;
      var v = Et(o);
      return q(v) ? !1 : Nt(i, v, a);
    }
    function bt(i, o, a) {
      var h = et(
        o,
        a,
        /*Create*/
        !1
      );
      return _(h) ? !1 : Bt(h.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Dt(i, o, a) {
      var h = bt(i, o, a);
      if (h)
        return It(i, o, a);
      var v = Et(o);
      if (!q(v))
        return Dt(i, v, a);
    }
    function It(i, o, a) {
      var h = et(
        o,
        a,
        /*Create*/
        !1
      );
      if (!_(h))
        return h.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ht(i, o, a, h) {
      var v = et(
        a,
        h,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, h);
    }
    function jt(i, o) {
      var a = Lt(i, o), h = Et(i);
      if (h === null)
        return a;
      var v = jt(h, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new T(), O = [], $ = 0, d = a; $ < d.length; $++) {
        var c = d[$], f = P.has(c);
        f || (P.add(c), O.push(c));
      }
      for (var y = 0, w = v; y < w.length; y++) {
        var c = w[y], f = P.has(c);
        f || (P.add(c), O.push(c));
      }
      return O;
    }
    function Lt(i, o) {
      var a = et(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
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
    function _(i) {
      return i === void 0;
    }
    function q(i) {
      return i === null;
    }
    function be(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ae(i, o) {
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
      var a = "string", h = Vt(i, l);
      if (h !== void 0) {
        var v = h.call(i, a);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return Ee(i);
    }
    function Ee(i, o) {
      var a, h;
      {
        var v = i.toString;
        if (mt(v)) {
          var h = v.call(i);
          if (!M(h))
            return h;
        }
        var a = i.valueOf;
        if (mt(a)) {
          var h = a.call(i);
          if (!M(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Bt(i) {
      return !!i;
    }
    function Se(i) {
      return "" + i;
    }
    function D(i) {
      var o = Ae(i);
      return be(o) ? o : Se(o);
    }
    function Wt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function mt(i) {
      return typeof i == "function";
    }
    function Gt(i) {
      return typeof i == "function";
    }
    function Ce(i) {
      switch (zt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function At(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Vt(i, o) {
      var a = i[o];
      if (a != null) {
        if (!mt(a))
          throw new TypeError();
        return a;
      }
    }
    function Ft(i) {
      var o = Vt(i, u);
      if (!mt(o))
        throw new TypeError();
      var a = o.call(i);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function qt(i) {
      return i.value;
    }
    function Zt(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Yt(i) {
      var o = i.return;
      o && o.call(i);
    }
    function Et(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === g || o !== g)
        return o;
      var a = i.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return o;
      var v = h.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Me() {
      var i;
      !_(I) && typeof e.Reflect < "u" && !(I in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = xe(e.Reflect));
      var o, a, h, v = new U(), P = {
        registerProvider: O,
        getProvider: d,
        setProvider: f
      };
      return P;
      function O(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case _(o):
            o = y;
            break;
          case o === y:
            break;
          case _(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            h === void 0 && (h = new T()), h.add(y);
            break;
        }
      }
      function $(y, w) {
        if (!_(o)) {
          if (o.isProviderFor(y, w))
            return o;
          if (!_(a)) {
            if (a.isProviderFor(y, w))
              return o;
            if (!_(h))
              for (var E = Ft(h); ; ) {
                var S = Zt(E);
                if (!S)
                  return;
                var N = qt(S);
                if (N.isProviderFor(y, w))
                  return Yt(E), N;
              }
          }
        }
        if (!_(i) && i.isProviderFor(y, w))
          return i;
      }
      function d(y, w) {
        var E = v.get(y), S;
        return _(E) || (S = E.get(w)), _(S) && (S = $(y, w), _(S) || (_(E) && (E = new C(), v.set(y, E)), E.set(w, S))), S;
      }
      function c(y) {
        if (_(y))
          throw new TypeError();
        return o === y || a === y || !_(h) && h.has(y);
      }
      function f(y, w, E) {
        if (!c(E))
          throw new Error("Metadata provider not registered.");
        var S = d(y, w);
        if (S !== E) {
          if (!_(S))
            return !1;
          var N = v.get(y);
          _(N) && (N = new C(), v.set(y, N)), N.set(w, E);
        }
        return !0;
      }
    }
    function Oe() {
      var i;
      return !_(I) && M(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[I]), _(i) && (i = Me()), !_(I) && M(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, I, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pe(i) {
      var o = new U(), a = {
        isProviderFor: function(c, f) {
          var y = o.get(c);
          return _(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: d
      };
      return B.registerProvider(a), a;
      function h(c, f, y) {
        var w = o.get(c), E = !1;
        if (_(w)) {
          if (!y)
            return;
          w = new C(), o.set(c, w), E = !0;
        }
        var S = w.get(f);
        if (_(S)) {
          if (!y)
            return;
          if (S = new C(), w.set(f, S), !i.setProvider(c, f, a))
            throw w.delete(f), E && o.delete(c), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(c, f, y) {
        var w = h(
          f,
          y,
          /*Create*/
          !1
        );
        return _(w) ? !1 : Bt(w.has(c));
      }
      function P(c, f, y) {
        var w = h(
          f,
          y,
          /*Create*/
          !1
        );
        if (!_(w))
          return w.get(c);
      }
      function O(c, f, y, w) {
        var E = h(
          y,
          w,
          /*Create*/
          !0
        );
        E.set(c, f);
      }
      function $(c, f) {
        var y = [], w = h(
          c,
          f,
          /*Create*/
          !1
        );
        if (_(w))
          return y;
        for (var E = w.keys(), S = Ft(E), N = 0; ; ) {
          var Xt = Zt(S);
          if (!Xt)
            return y.length = N, y;
          var Ue = qt(Xt);
          try {
            y[N] = Ue;
          } catch (Ne) {
            try {
              Yt(S);
            } finally {
              throw Ne;
            }
          }
          N++;
        }
      }
      function d(c, f, y) {
        var w = h(
          f,
          y,
          /*Create*/
          !1
        );
        if (_(w) || !w.delete(c))
          return !1;
        if (w.size === 0) {
          var E = o.get(f);
          _(E) || (E.delete(y), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function xe(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, h = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, O = new U(), $ = {
        isProviderFor: function(d, c) {
          var f = O.get(d);
          return !_(f) && f.has(c) ? !0 : v(d, c).length ? (_(f) && (f = new T(), O.set(d, f)), f.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return $;
    }
    function et(i, o, a) {
      var h = B.getProvider(i, o);
      if (!_(h))
        return h;
      if (a) {
        if (B.setProvider(i, o, tt))
          return tt;
        throw new Error("Illegal state.");
      }
    }
    function Te() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function $(d, c, f) {
            this._index = 0, this._keys = d, this._values = c, this._selector = f;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[u] = function() {
            return this;
          }, $.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var c = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, $.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, $;
        }()
      ), h = (
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
            var c = this._find(
              d,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, $.prototype.set = function(d, c) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = c, this;
          }, $.prototype.delete = function(d) {
            var c = this._find(
              d,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var f = this._keys.length, y = c + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, At(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, $.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, $.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[u] = function() {
            return this.entries();
          }, $.prototype._find = function(d, c) {
            if (!At(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (At(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return h;
      function v($, d) {
        return $;
      }
      function P($, d) {
        return d;
      }
      function O($, d) {
        return [$, d];
      }
    }
    function ke() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new C();
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
    function Re() {
      var i = 16, o = b.create(), a = h();
      return (
        /** @class */
        function() {
          function d() {
            this._key = h();
          }
          return d.prototype.has = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, d.prototype.get = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
          }, d.prototype.set = function(c, f) {
            var y = v(
              c,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, d.prototype.delete = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = h();
          }, d;
        }()
      );
      function h() {
        var d;
        do
          d = "@@WeakMap@@" + $();
        while (b.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, c) {
        if (!n.call(d, a)) {
          if (!c)
            return;
          Object.defineProperty(d, a, { value: b.create() });
        }
        return d[a];
      }
      function P(d, c) {
        for (var f = 0; f < c; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : P(c, d), c;
        }
        return P(new Array(d), d);
      }
      function $() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var c = "", f = 0; f < i; ++f) {
          var y = d[f];
          (f === 4 || f === 6 || f === 8) && (c += "-"), y < 16 && (c += "0"), c += y.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function St(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Kt || (Kt = {}));
function He(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function je(r) {
  return function(t) {
    if (He(r)) {
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
        Jt(this, "_stylesApplied", !1);
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
          const b = new CSSStyleSheet(), g = (A = l.sheet) == null ? void 0 : A.cssRules;
          g && (Array.from(g).forEach((C) => b.insertRule(C.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          p.appendChild(b);
        }
        u.forEach((b) => {
          const g = b.cloneNode(!0);
          p.appendChild(g);
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
function We(r) {
  return function(t, e) {
    try {
      Be(r);
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
function Q(r) {
  return We(r);
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
const _t = globalThis, Tt = _t.ShadowRoot && (_t.ShadyCSS === void 0 || _t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, kt = Symbol(), te = /* @__PURE__ */ new WeakMap();
let ce = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== kt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
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
const Ge = (r) => new ce(typeof r == "string" ? r : r + "", void 0, kt), Ve = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ce(e, r, kt);
}, Fe = (r, t) => {
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
const { is: qe, defineProperty: Ze, getOwnPropertyDescriptor: Ye, getOwnPropertyNames: Xe, getOwnPropertySymbols: Je, getPrototypeOf: Qe } = Object, j = globalThis, re = j.trustedTypes, Ke = re ? re.emptyScript : "", Ct = j.reactiveElementPolyfillSupport, nt = (r, t) => r, gt = { toAttribute(r, t) {
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
} }, Rt = (r, t) => !qe(r, t), ne = { attribute: !0, type: String, converter: gt, reflect: !1, useDefault: !1, hasChanged: Rt };
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
      s !== void 0 && Ze(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: l } = Ye(this.prototype, t) ?? { get() {
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
    if (this.hasOwnProperty(nt("elementProperties"))) return;
    const t = Qe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(nt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(nt("properties"))) {
      const e = this.properties, n = [...Xe(e), ...Je(e)];
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
    return Fe(t, this.constructor.elementStyles), t;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : gt).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const m = n.getPropertyOptions(s), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : gt;
      this._$Em = s;
      const A = p.fromAttribute(e, m.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = m.getPropertyOptions(t)), !((n.hasChanged ?? Rt)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(m._$Eu(t, n)))) return;
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
Y.elementStyles = [], Y.shadowRootOptions = { mode: "open" }, Y[nt("elementProperties")] = /* @__PURE__ */ new Map(), Y[nt("finalized")] = /* @__PURE__ */ new Map(), Ct == null || Ct({ ReactiveElement: Y }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = globalThis, ie = (r) => r, $t = it.trustedTypes, se = $t ? $t.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, fe = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, pe = "?" + H, tr = `<${pe}>`, F = document, ot = () => F.createComment(""), at = (r) => r === null || typeof r != "object" && typeof r != "function", Ut = Array.isArray, er = (r) => Ut(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Mt = `[ 	
\f\r]`, rt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, oe = /-->/g, ae = />/g, W = RegExp(`>|${Mt}(?:([^\\s"'>=/]+)(${Mt}*=${Mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), le = /'/g, ue = /"/g, ye = /^(?:script|style|textarea|title)$/i, rr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), Ot = rr(1), X = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), he = /* @__PURE__ */ new WeakMap(), G = F.createTreeWalker(F, 129);
function ve(r, t) {
  if (!Ut(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return se !== void 0 ? se.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = rt;
  for (let m = 0; m < e; m++) {
    const p = r[m];
    let A, b, g = -1, C = 0;
    for (; C < p.length && (u.lastIndex = C, b = u.exec(p), b !== null); ) C = u.lastIndex, u === rt ? b[1] === "!--" ? u = oe : b[1] !== void 0 ? u = ae : b[2] !== void 0 ? (ye.test(b[2]) && (s = RegExp("</" + b[2], "g")), u = W) : b[3] !== void 0 && (u = W) : u === W ? b[0] === ">" ? (u = s ?? rt, g = -1) : b[1] === void 0 ? g = -2 : (g = u.lastIndex - b[2].length, A = b[1], u = b[3] === void 0 ? W : b[3] === '"' ? ue : le) : u === ue || u === le ? u = W : u === oe || u === ae ? u = rt : (u = W, s = void 0);
    const T = u === W && r[m + 1].startsWith("/>") ? " " : "";
    l += u === rt ? p + tr : g >= 0 ? (n.push(A), p.slice(0, g) + fe + p.slice(g) + H + T) : p + H + (g === -2 ? m : T);
  }
  return [ve(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class lt {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = t.length - 1, p = this.parts, [A, b] = nr(t, e);
    if (this.el = lt.createElement(A, n), G.currentNode = this.el.content, e === 2 || e === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (s = G.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const g of s.getAttributeNames()) if (g.endsWith(fe)) {
          const C = b[u++], T = s.getAttribute(g).split(H), U = /([.?@])?(.*)/.exec(C);
          p.push({ type: 1, index: l, name: U[2], strings: T, ctor: U[1] === "." ? sr : U[1] === "?" ? or : U[1] === "@" ? ar : wt }), s.removeAttribute(g);
        } else g.startsWith(H) && (p.push({ type: 6, index: l }), s.removeAttribute(g));
        if (ye.test(s.tagName)) {
          const g = s.textContent.split(H), C = g.length - 1;
          if (C > 0) {
            s.textContent = $t ? $t.emptyScript : "";
            for (let T = 0; T < C; T++) s.append(g[T], ot()), G.nextNode(), p.push({ type: 2, index: ++l });
            s.append(g[C], ot());
          }
        }
      } else if (s.nodeType === 8) if (s.data === pe) p.push({ type: 2, index: l });
      else {
        let g = -1;
        for (; (g = s.data.indexOf(H, g + 1)) !== -1; ) p.push({ type: 7, index: l }), g += H.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = F.createElement("template");
    return n.innerHTML = t, n;
  }
}
function J(r, t, e = r, n) {
  var u, m;
  if (t === X) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = at(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = J(r, s._$AS(r, t.values), s, n)), t;
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? F).importNode(e, !0);
    G.currentNode = s;
    let l = G.nextNode(), u = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new ut(l, l.nextSibling, this, t) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (A = new lr(l, this, t)), this._$AV.push(A), p = n[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = G.nextNode(), u++);
    }
    return G.currentNode = F, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class ut {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = J(this, t, e), at(t) ? t === x || t == null || t === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : t !== this._$AH && t !== X && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : er(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== x && at(this._$AH) ? this._$AA.nextSibling.data = t : this.T(F.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = lt.createElement(ve(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new ir(s, this), m = u.u(this.options);
      u.p(e), this.T(m), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = he.get(t.strings);
    return e === void 0 && he.set(t.strings, e = new lt(t)), e;
  }
  k(t) {
    Ut(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new ut(this.O(ot()), this.O(ot()), this, this.options)) : n = e[s], n._$AI(l), s++;
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
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = x;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = J(this, t, e, 0), u = !at(t) || t !== this._$AH && t !== X, u && (this._$AH = t);
    else {
      const m = t;
      let p, A;
      for (t = l[0], p = 0; p < l.length - 1; p++) A = J(this, m[n + p], e, p), A === X && (A = this._$AH[p]), u || (u = !at(A) || A !== this._$AH[p]), A === x ? t = x : t !== x && (t += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sr extends wt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === x ? void 0 : t;
  }
}
class or extends wt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== x);
  }
}
class ar extends wt {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = J(this, t, e, 0) ?? x) === X) return;
    const n = this._$AH, s = t === x && n !== x || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== x && (n === x || s);
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
    J(this, t);
  }
}
const Pt = it.litHtmlPolyfillSupport;
Pt == null || Pt(lt, ut), (it.litHtmlVersions ?? (it.litHtmlVersions = [])).push("3.3.3");
const ur = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new ut(t.insertBefore(ot(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = globalThis;
class st extends Y {
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
var de;
st._$litElement$ = !0, st.finalized = !0, (de = V.litElementHydrateSupport) == null || de.call(V, { LitElement: st });
const xt = V.litElementPolyfillSupport;
xt == null || xt({ LitElement: st });
(V.litElementVersions ?? (V.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: gt, reflect: !1, hasChanged: Rt }, dr = (r = hr, t, e) => {
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
function K(r) {
  return (t, e) => typeof e == "object" ? dr(r, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var cr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, R = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && cr(t, e, s), s;
};
const mr = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:40px 24px;background:#ffffff;font-family:inherit;'>",
    "<div style='max-width:800px;margin:0 auto;'>",
    "<h2 style='font-size:24px;font-weight:700;color:#111827;margin-bottom:12px;'>{{props:title}}</h2>",
    "<p style='font-size:14px;color:#4b5563;line-height:1.6;'>{{props:content}}</p>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Content"]
};
function Z(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let k = class extends st {
  constructor() {
    super(...arguments), this.title = "Beautiful Content Block", this.content = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.", this.sideContent = "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.", this.mediaUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60", this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    var m, p, A, b, g, C, T, U, I, B, tt, ht, dt, ct, ft, pt, yt, vt;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-block-content-1.0.0></zero-block-content-1.0.0>"
      };
    const t = Z(((m = r == null ? void 0 : r.props) == null ? void 0 : m.title) ?? ((A = (p = r == null ? void 0 : r.studio) == null ? void 0 : p.props) == null ? void 0 : A.title) ?? "Beautiful Content Block"), e = Z(((b = r == null ? void 0 : r.props) == null ? void 0 : b.content) ?? ((C = (g = r == null ? void 0 : r.studio) == null ? void 0 : g.props) == null ? void 0 : C.content) ?? ""), n = Z(((T = r == null ? void 0 : r.props) == null ? void 0 : T.sideContent) ?? ((I = (U = r == null ? void 0 : r.studio) == null ? void 0 : U.props) == null ? void 0 : I.sideContent) ?? ""), s = Z(((B = r == null ? void 0 : r.props) == null ? void 0 : B.mediaUrl) ?? ((ht = (tt = r == null ? void 0 : r.studio) == null ? void 0 : tt.props) == null ? void 0 : ht.mediaUrl) ?? ""), l = Z(((dt = r == null ? void 0 : r.props) == null ? void 0 : dt.layout) ?? ((ft = (ct = r == null ? void 0 : r.studio) == null ? void 0 : ct.props) == null ? void 0 : ft.layout) ?? "layout-1"), u = Z(((pt = r == null ? void 0 : r.props) == null ? void 0 : pt.themeStyle) ?? ((vt = (yt = r == null ? void 0 : r.studio) == null ? void 0 : yt.props) == null ? void 0 : vt.themeStyle) ?? "light");
    return {
      kind: "generic",
      templateHtml: `
        <zero-block-content-1.0.0
          title="${t}"
          content="${e}"
          side-content="${n}"
          media-url="${s}"
          layout="${l}"
          theme-style="${u}"
        ></zero-block-content-1.0.0>
      `
    };
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(r) {
    this.title = r;
  }
  get contentConfig() {
    return this.content;
  }
  set contentConfig(r) {
    this.content = r;
  }
  get sideContentConfig() {
    return this.sideContent;
  }
  set sideContentConfig(r) {
    this.sideContent = r;
  }
  get mediaUrlConfig() {
    return this.mediaUrl;
  }
  set mediaUrlConfig(r) {
    this.mediaUrl = r;
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
  render() {
    return Ot`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="container">
          ${this.layout === "layout-1" ? Ot`
            <div class="split-text">
              <div class="split-col-left">
                <h2>${this.title}</h2>
              </div>
              <div class="split-col-right">
                <p>${this.content}</p>
                <p>${this.sideContent}</p>
              </div>
            </div>
          ` : ""}

          ${this.layout === "layout-2" ? Ot`
            <div class="split-media">
              <div class="media-col">
                <img class="media-img" src="${this.mediaUrl}" alt="content display graphic">
              </div>
              <div class="text-col">
                <h2>${this.title}</h2>
                <p>${this.content}</p>
                <p>${this.sideContent}</p>
              </div>
            </div>
          ` : ""}
        </div>
      </section>
    `;
  }
};
k.styles = Ve`
    :host {
      display: block;
      width: 100%;
      --content-bg: var(--uiv-surface-color, #ffffff);
      --content-text: var(--uiv-text-color, #1f2937);
      --content-lead: #4b5563;
      --content-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 70px 5%;
      background: var(--content-bg);
      color: var(--content-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --content-bg: #111827;
      --content-text: #f9fafb;
      --content-lead: #9ca3af;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    h2 {
      font-size: 2.1rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin: 0 0 20px 0;
      line-height: 1.25;
    }

    p {
      font-size: 1.05rem;
      line-height: 1.65;
      color: var(--content-lead);
      margin: 0 0 16px 0;
    }

    /* ─── Layout 1: Split Text Column ─── */
    .split-text {
      display: flex;
      gap: 50px;
      align-items: flex-start;
    }

    .split-col-left {
      flex: 1;
    }

    .split-col-right {
      flex: 1.3;
    }

    /* ─── Layout 2: Side-by-Side Image/Text ─── */
    .split-media {
      display: flex;
      gap: 50px;
      align-items: center;
    }

    .media-col {
      flex: 1;
      display: flex;
      justify-content: center;
    }

    .media-img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.06);
    }

    .text-col {
      flex: 1.2;
    }

    /* Mobile */
    @media (max-width: 768px) {
      .split-text, .split-media {
        flex-direction: column !important;
      }
    }
  `;
R([
  K({ type: String })
], k.prototype, "title", 2);
R([
  K({ type: String })
], k.prototype, "content", 2);
R([
  K({ type: String, attribute: "side-content" })
], k.prototype, "sideContent", 2);
R([
  K({ type: String, attribute: "media-url" })
], k.prototype, "mediaUrl", 2);
R([
  K({ type: String })
], k.prototype, "layout", 2);
R([
  K({ type: String, attribute: "theme-style" })
], k.prototype, "themeStyle", 2);
R([
  Q({
    attributeType: z.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Content Title",
    fieldMappings: "title"
  })
], k.prototype, "titleConfig", 1);
R([
  Q({
    attributeType: z.PROPERTY,
    uiComponentType: L.TEXTAREA,
    displayLabel: "Primary Paragraph Copy",
    fieldMappings: "content"
  })
], k.prototype, "contentConfig", 1);
R([
  Q({
    attributeType: z.PROPERTY,
    uiComponentType: L.TEXTAREA,
    displayLabel: "Secondary Copy",
    fieldMappings: "sideContent"
  })
], k.prototype, "sideContentConfig", 1);
R([
  Q({
    attributeType: z.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Media Image URL",
    fieldMappings: "mediaUrl"
  })
], k.prototype, "mediaUrlConfig", 1);
R([
  Q({
    attributeType: z.PROPERTY,
    uiComponentType: L.DROPDOWN,
    displayLabel: "Layout Alignment",
    fieldMappings: "layout",
    optionItems: [
      { label: "Split Text-Columns (Copy Side-by-Side)", value: "layout-1" },
      { label: "Dual Media (Image Left, Copy Right)", value: "layout-2" }
    ]
  })
], k.prototype, "layoutConfig", 1);
R([
  Q({
    attributeType: z.PROPERTY,
    uiComponentType: L.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" }
    ]
  })
], k.prototype, "themeStyleConfig", 1);
k = R([
  Le({
    name: "zero-block-content",
    version: "1.0.0",
    title: "Content Block",
    elementSelector: "zero-block-content",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  ze()
], k);
export {
  k as ZeroBlockContent,
  mr as studioTemplate
};
