var Dt = Object.defineProperty;
var Ht = (r, e, t) => e in r ? Dt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Be = (r, e, t) => Ht(r, typeof e != "symbol" ? e + "" : e, t);
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Fe;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ve == "object" ? Ve : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, A) {
      return function(g, _) {
        Object.defineProperty(p, g, { configurable: !0, writable: !0, value: _ }), A && A(g, _);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !m && !p, g = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return be(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return be({ __proto__: null });
      } : function() {
        return be({});
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
    }, _ = Object.getPrototypeOf(Function), O = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), C = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ct(), k = typeof WeakMap == "function" ? WeakMap : kt(), D = s ? Symbol.for("@reflect-metadata:registry") : void 0, L = Mt(), Z = xt(L);
    function oe(i, a, o, d) {
      if (b(o)) {
        if (!He(i))
          throw new TypeError();
        if (!Ie(a))
          throw new TypeError();
        return _t(i, a);
      } else {
        if (!He(i))
          throw new TypeError();
        if (!M(a))
          throw new TypeError();
        if (!M(d) && !b(d) && !B(d))
          throw new TypeError();
        return B(d) && (d = void 0), o = N(o), $t(i, a, o, d);
      }
    }
    e("decorate", oe);
    function le(i, a) {
      function o(d, y) {
        if (!M(d))
          throw new TypeError();
        if (!b(y) && !St(y))
          throw new TypeError();
        Ce(i, a, d, y);
      }
      return o;
    }
    e("metadata", le);
    function ue(i, a, o, d) {
      if (!M(o))
        throw new TypeError();
      return b(d) || (d = N(d)), Ce(i, a, o, d);
    }
    e("defineMetadata", ue);
    function ht(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return b(o) || (o = N(o)), xe(i, a, o);
    }
    e("hasMetadata", ht);
    function ft(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return b(o) || (o = N(o)), ve(i, a, o);
    }
    e("hasOwnMetadata", ft);
    function pt(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return b(o) || (o = N(o)), Pe(i, a, o);
    }
    e("getMetadata", pt);
    function vt(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return b(o) || (o = N(o)), Te(i, a, o);
    }
    e("getOwnMetadata", vt);
    function yt(i, a) {
      if (!M(i))
        throw new TypeError();
      return b(a) || (a = N(a)), ke(i, a);
    }
    e("getMetadataKeys", yt);
    function mt(i, a) {
      if (!M(i))
        throw new TypeError();
      return b(a) || (a = N(a)), Re(i, a);
    }
    e("getOwnMetadataKeys", mt);
    function bt(i, a, o) {
      if (!M(a))
        throw new TypeError();
      if (b(o) || (o = N(o)), !M(a))
        throw new TypeError();
      b(o) || (o = N(o));
      var d = X(
        a,
        o,
        /*Create*/
        !1
      );
      return b(d) ? !1 : d.OrdinaryDeleteMetadata(i, a, o);
    }
    e("deleteMetadata", bt);
    function _t(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var d = i[o], y = d(a);
        if (!b(y) && !B(y)) {
          if (!Ie(y))
            throw new TypeError();
          a = y;
        }
      }
      return a;
    }
    function $t(i, a, o, d) {
      for (var y = i.length - 1; y >= 0; --y) {
        var P = i[y], x = P(a, o, d);
        if (!b(x) && !B(x)) {
          if (!M(x))
            throw new TypeError();
          d = x;
        }
      }
      return d;
    }
    function xe(i, a, o) {
      var d = ve(i, a, o);
      if (d)
        return !0;
      var y = me(a);
      return B(y) ? !1 : xe(i, y, o);
    }
    function ve(i, a, o) {
      var d = X(
        a,
        o,
        /*Create*/
        !1
      );
      return b(d) ? !1 : De(d.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Pe(i, a, o) {
      var d = ve(i, a, o);
      if (d)
        return Te(i, a, o);
      var y = me(a);
      if (!B(y))
        return Pe(i, y, o);
    }
    function Te(i, a, o) {
      var d = X(
        a,
        o,
        /*Create*/
        !1
      );
      if (!b(d))
        return d.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Ce(i, a, o, d) {
      var y = X(
        o,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, a, o, d);
    }
    function ke(i, a) {
      var o = Re(i, a), d = me(i);
      if (d === null)
        return o;
      var y = ke(d, a);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var P = new C(), x = [], $ = 0, c = o; $ < c.length; $++) {
        var h = c[$], f = P.has(h);
        f || (P.add(h), x.push(h));
      }
      for (var v = 0, w = y; v < w.length; v++) {
        var h = w[v], f = P.has(h);
        f || (P.add(h), x.push(h));
      }
      return x;
    }
    function Re(i, a) {
      var o = X(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Ne(i) {
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
    function b(i) {
      return i === void 0;
    }
    function B(i) {
      return i === null;
    }
    function wt(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function gt(i, a) {
      switch (Ne(i)) {
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
      var o = "string", d = Ue(i, l);
      if (d !== void 0) {
        var y = d.call(i, o);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return At(i);
    }
    function At(i, a) {
      var o, d;
      {
        var y = i.toString;
        if (de(y)) {
          var d = y.call(i);
          if (!M(d))
            return d;
        }
        var o = i.valueOf;
        if (de(o)) {
          var d = o.call(i);
          if (!M(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function De(i) {
      return !!i;
    }
    function Et(i) {
      return "" + i;
    }
    function N(i) {
      var a = gt(i);
      return wt(a) ? a : Et(a);
    }
    function He(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function de(i) {
      return typeof i == "function";
    }
    function Ie(i) {
      return typeof i == "function";
    }
    function St(i) {
      switch (Ne(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ye(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Ue(i, a) {
      var o = i[a];
      if (o != null) {
        if (!de(o))
          throw new TypeError();
        return o;
      }
    }
    function Le(i) {
      var a = Ue(i, u);
      if (!de(a))
        throw new TypeError();
      var o = a.call(i);
      if (!M(o))
        throw new TypeError();
      return o;
    }
    function je(i) {
      return i.value;
    }
    function ze(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Ge(i) {
      var a = i.return;
      a && a.call(i);
    }
    function me(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || a !== _)
        return a;
      var o = i.prototype, d = o && Object.getPrototypeOf(o);
      if (d == null || d === Object.prototype)
        return a;
      var y = d.constructor;
      return typeof y != "function" || y === i ? a : y;
    }
    function Ot() {
      var i;
      !b(D) && typeof t.Reflect < "u" && !(D in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Pt(t.Reflect));
      var a, o, d, y = new k(), P = {
        registerProvider: x,
        getProvider: c,
        setProvider: f
      };
      return P;
      function x(v) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case b(a):
            a = v;
            break;
          case a === v:
            break;
          case b(o):
            o = v;
            break;
          case o === v:
            break;
          default:
            d === void 0 && (d = new C()), d.add(v);
            break;
        }
      }
      function $(v, w) {
        if (!b(a)) {
          if (a.isProviderFor(v, w))
            return a;
          if (!b(o)) {
            if (o.isProviderFor(v, w))
              return a;
            if (!b(d))
              for (var E = Le(d); ; ) {
                var S = ze(E);
                if (!S)
                  return;
                var R = je(S);
                if (R.isProviderFor(v, w))
                  return Ge(E), R;
              }
          }
        }
        if (!b(i) && i.isProviderFor(v, w))
          return i;
      }
      function c(v, w) {
        var E = y.get(v), S;
        return b(E) || (S = E.get(w)), b(S) && (S = $(v, w), b(S) || (b(E) && (E = new O(), y.set(v, E)), E.set(w, S))), S;
      }
      function h(v) {
        if (b(v))
          throw new TypeError();
        return a === v || o === v || !b(d) && d.has(v);
      }
      function f(v, w, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = c(v, w);
        if (S !== E) {
          if (!b(S))
            return !1;
          var R = y.get(v);
          b(R) && (R = new O(), y.set(v, R)), R.set(w, E);
        }
        return !0;
      }
    }
    function Mt() {
      var i;
      return !b(D) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[D]), b(i) && (i = Ot()), !b(D) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, D, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function xt(i) {
      var a = new k(), o = {
        isProviderFor: function(h, f) {
          var v = a.get(h);
          return b(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: c
      };
      return L.registerProvider(o), o;
      function d(h, f, v) {
        var w = a.get(h), E = !1;
        if (b(w)) {
          if (!v)
            return;
          w = new O(), a.set(h, w), E = !0;
        }
        var S = w.get(f);
        if (b(S)) {
          if (!v)
            return;
          if (S = new O(), w.set(f, S), !i.setProvider(h, f, o))
            throw w.delete(f), E && a.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, f, v) {
        var w = d(
          f,
          v,
          /*Create*/
          !1
        );
        return b(w) ? !1 : De(w.has(h));
      }
      function P(h, f, v) {
        var w = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (!b(w))
          return w.get(h);
      }
      function x(h, f, v, w) {
        var E = d(
          v,
          w,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function $(h, f) {
        var v = [], w = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (b(w))
          return v;
        for (var E = w.keys(), S = Le(E), R = 0; ; ) {
          var We = ze(S);
          if (!We)
            return v.length = R, v;
          var Rt = je(We);
          try {
            v[R] = Rt;
          } catch (Nt) {
            try {
              Ge(S);
            } finally {
              throw Nt;
            }
          }
          R++;
        }
      }
      function c(h, f, v) {
        var w = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (b(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var E = a.get(f);
          b(E) || (E.delete(v), E.size === 0 && a.delete(E));
        }
        return !0;
      }
    }
    function Pt(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, d = i.getOwnMetadata, y = i.getOwnMetadataKeys, P = i.deleteMetadata, x = new k(), $ = {
        isProviderFor: function(c, h) {
          var f = x.get(c);
          return !b(f) && f.has(h) ? !0 : y(c, h).length ? (b(f) && (f = new C(), x.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return $;
    }
    function X(i, a, o) {
      var d = L.getProvider(i, a);
      if (!b(d))
        return d;
      if (o) {
        if (L.setProvider(i, a, Z))
          return Z;
        throw new Error("Illegal state.");
      }
    }
    function Tt() {
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
              for (var f = this._keys.length, v = h + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, ye(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
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
          }, $.prototype._find = function(c, h) {
            if (!ye(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ye(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return d;
      function y($, c) {
        return $;
      }
      function P($, c) {
        return c;
      }
      function x($, c) {
        return [$, c];
      }
    }
    function Ct() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new O();
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
    function kt() {
      var i = 16, a = g.create(), o = d();
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
            return f !== void 0 ? g.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? g.get(f, this._key) : void 0;
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
          c = "@@WeakMap@@" + $();
        while (g.has(a, c));
        return a[c] = !0, c;
      }
      function y(c, h) {
        if (!n.call(c, o)) {
          if (!h)
            return;
          Object.defineProperty(c, o, { value: g.create() });
        }
        return c[o];
      }
      function P(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function x(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, c), h;
        }
        return P(new Array(c), c);
      }
      function $() {
        var c = x(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var v = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function be(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Fe || (Fe = {}));
function It(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ut(r) {
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
function Lt(r) {
  return Ut(r);
}
function jt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Be(this, "_stylesApplied", !1);
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
          const g = new CSSStyleSheet(), _ = (A = l.sheet) == null ? void 0 : A.cssRules;
          _ && (Array.from(_).forEach((O) => g.insertRule(O.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, g]);
        } else if (l) {
          const g = l.cloneNode(!0);
          p.appendChild(g);
        }
        u.forEach((g) => {
          const _ = g.cloneNode(!0);
          p.appendChild(_);
        });
      }
    }
    return t;
  };
}
var qe;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(qe || (qe = {}));
var Je;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(Je || (Je = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = globalThis, Ee = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Se = Symbol(), Ze = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Se) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Ee && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ze.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ze.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (r) => new ot(typeof r == "string" ? r : r + "", void 0, Se), Gt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ot(t, r, Se);
}, Wt = (r, e) => {
  if (Ee) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ce.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Xe = Ee ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return zt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Bt, defineProperty: Vt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: qt, getOwnPropertySymbols: Jt, getPrototypeOf: Zt } = Object, I = globalThis, Ye = I.trustedTypes, Xt = Ye ? Ye.emptyScript : "", _e = I.reactiveElementPolyfillSupport, K = (r, e) => r, he = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Xt : null;
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
} }, Oe = (r, e) => !Bt(r, e), Qe = { attribute: !0, type: String, converter: he, reflect: !1, useDefault: !1, hasChanged: Oe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), I.litPropertyMetadata ?? (I.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let V = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Vt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Ft(this.prototype, e) ?? { get() {
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
    return this.elementProperties.get(e) ?? Qe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(K("elementProperties"))) return;
    const e = Zt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(K("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(K("properties"))) {
      const t = this.properties, n = [...qt(t), ...Jt(t)];
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
      for (const s of n) t.unshift(Xe(s));
    } else e !== void 0 && t.push(Xe(e));
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
    return Wt(e, this.constructor.elementStyles), e;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : he).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const m = n.getPropertyOptions(s), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : he;
      this._$Em = s;
      const A = p.fromAttribute(t, m.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? Oe)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[K("elementProperties")] = /* @__PURE__ */ new Map(), V[K("finalized")] = /* @__PURE__ */ new Map(), _e == null || _e({ ReactiveElement: V }), (I.reactiveElementVersions ?? (I.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, Ke = (r) => r, fe = ee.trustedTypes, et = fe ? fe.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, lt = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + H, Yt = `<${ut}>`, W = document, re = () => W.createComment(""), ne = (r) => r === null || typeof r != "object" && typeof r != "function", Me = Array.isArray, Qt = (r) => Me(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", $e = `[ 	
\f\r]`, Y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, tt = /-->/g, rt = />/g, j = RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), nt = /'/g, it = /"/g, dt = /^(?:script|style|textarea|title)$/i, Kt = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), we = Kt(1), F = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), st = /* @__PURE__ */ new WeakMap(), z = W.createTreeWalker(W, 129);
function ct(r, e) {
  if (!Me(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return et !== void 0 ? et.createHTML(e) : e;
}
const er = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = Y;
  for (let m = 0; m < t; m++) {
    const p = r[m];
    let A, g, _ = -1, O = 0;
    for (; O < p.length && (u.lastIndex = O, g = u.exec(p), g !== null); ) O = u.lastIndex, u === Y ? g[1] === "!--" ? u = tt : g[1] !== void 0 ? u = rt : g[2] !== void 0 ? (dt.test(g[2]) && (s = RegExp("</" + g[2], "g")), u = j) : g[3] !== void 0 && (u = j) : u === j ? g[0] === ">" ? (u = s ?? Y, _ = -1) : g[1] === void 0 ? _ = -2 : (_ = u.lastIndex - g[2].length, A = g[1], u = g[3] === void 0 ? j : g[3] === '"' ? it : nt) : u === it || u === nt ? u = j : u === tt || u === rt ? u = Y : (u = j, s = void 0);
    const C = u === j && r[m + 1].startsWith("/>") ? " " : "";
    l += u === Y ? p + Yt : _ >= 0 ? (n.push(A), p.slice(0, _) + lt + p.slice(_) + H + C) : p + H + (_ === -2 ? m : C);
  }
  return [ct(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ie {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, p = this.parts, [A, g] = er(e, t);
    if (this.el = ie.createElement(A, n), z.currentNode = this.el.content, t === 2 || t === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (s = z.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const _ of s.getAttributeNames()) if (_.endsWith(lt)) {
          const O = g[u++], C = s.getAttribute(_).split(H), k = /([.?@])?(.*)/.exec(O);
          p.push({ type: 1, index: l, name: k[2], strings: C, ctor: k[1] === "." ? rr : k[1] === "?" ? nr : k[1] === "@" ? ir : pe }), s.removeAttribute(_);
        } else _.startsWith(H) && (p.push({ type: 6, index: l }), s.removeAttribute(_));
        if (dt.test(s.tagName)) {
          const _ = s.textContent.split(H), O = _.length - 1;
          if (O > 0) {
            s.textContent = fe ? fe.emptyScript : "";
            for (let C = 0; C < O; C++) s.append(_[C], re()), z.nextNode(), p.push({ type: 2, index: ++l });
            s.append(_[O], re());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ut) p.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = s.data.indexOf(H, _ + 1)) !== -1; ) p.push({ type: 7, index: l }), _ += H.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = W.createElement("template");
    return n.innerHTML = e, n;
  }
}
function q(r, e, t = r, n) {
  var u, m;
  if (e === F) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ne(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = q(r, s._$AS(r, e.values), s, n)), e;
}
class tr {
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? W).importNode(t, !0);
    z.currentNode = s;
    let l = z.nextNode(), u = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new se(l, l.nextSibling, this, e) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (A = new sr(l, this, e)), this._$AV.push(A), p = n[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = z.nextNode(), u++);
    }
    return z.currentNode = W, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = q(this, e, t), ne(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== F && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ie.createElement(ct(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new tr(s, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = st.get(e.strings);
    return t === void 0 && st.set(e.strings, t = new ie(e)), t;
  }
  k(e) {
    Me(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new se(this.O(re()), this.O(re()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Ke(e).nextSibling;
      Ke(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class pe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = T;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = q(this, e, t, 0), u = !ne(e) || e !== this._$AH && e !== F, u && (this._$AH = e);
    else {
      const m = e;
      let p, A;
      for (e = l[0], p = 0; p < l.length - 1; p++) A = q(this, m[n + p], t, p), A === F && (A = this._$AH[p]), u || (u = !ne(A) || A !== this._$AH[p]), A === T ? e = T : e !== T && (e += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends pe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
class nr extends pe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}
class ir extends pe {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = q(this, e, t, 0) ?? T) === F) return;
    const n = this._$AH, s = e === T && n !== T || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== T && (n === T || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class sr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    q(this, e);
  }
}
const ge = ee.litHtmlPolyfillSupport;
ge == null || ge(ie, se), (ee.litHtmlVersions ?? (ee.litHtmlVersions = [])).push("3.3.3");
const ar = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new se(e.insertBefore(re(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class te extends V {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ar(t, this.renderRoot, this.renderOptions);
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
    return F;
  }
}
var at;
te._$litElement$ = !0, te.finalized = !0, (at = G.litElementHydrateSupport) == null || at.call(G, { LitElement: te });
const Ae = G.litElementPolyfillSupport;
Ae == null || Ae({ LitElement: te });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const or = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Oe }, lr = (r = or, e, t) => {
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
function ae(r) {
  return (e, t) => typeof t == "object" ? lr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var ur = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, J = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? dr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && ur(e, t, s), s;
};
const cr = JSON.stringify([
  {
    tabIndex: 0,
    badgeText: "Next Appointment",
    events: [
      { date: "26 Nov '19 09:00 - 10:00", title: "Root Canal Treatment", desc: "Drg. Adam H. | Treatment: Open Access" },
      { date: "12 Dec '19 09:00 - 10:00", title: "Root Canal Treatment", desc: "Drg. Adam H. | Treatment: Root Canal prep" }
    ]
  },
  {
    tabIndex: 1,
    badgeText: "Completed",
    events: [
      { date: "15 Oct '19 14:00 - 15:00", title: "Teeth Cleaning & Polish", desc: "Drg. Adam H. | Routine prophylaxis" }
    ]
  },
  {
    tabIndex: 2,
    badgeText: "Intake",
    events: [
      { date: "24 Feb '17 10:00 - 11:00", title: "Medical History Intake", desc: "Drg. Adam H. | Allergy profile: Penicillin" }
    ]
  }
]);
function Q(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let U = class extends te {
  constructor() {
    super(...arguments), this.tab1Label = "Upcoming Appointments", this.tab2Label = "Past Appointments", this.tab3Label = "Medical Records", this.activeTab = 0, this.timelineJson = cr;
  }
  static getStudioTemplate(r) {
    var u, m, p, A, g, _, O, C, k, D, L, Z, oe, le, ue;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-timeline-card-1.0.0></zero-timeline-card-1.0.0>"
      };
    const e = Q(((u = r == null ? void 0 : r.props) == null ? void 0 : u.tab1Label) ?? ((p = (m = r == null ? void 0 : r.studio) == null ? void 0 : m.props) == null ? void 0 : p.tab1Label) ?? "Upcoming Appointments"), t = Q(((A = r == null ? void 0 : r.props) == null ? void 0 : A.tab2Label) ?? ((_ = (g = r == null ? void 0 : r.studio) == null ? void 0 : g.props) == null ? void 0 : _.tab2Label) ?? "Past Appointments"), n = Q(((O = r == null ? void 0 : r.props) == null ? void 0 : O.tab3Label) ?? ((k = (C = r == null ? void 0 : r.studio) == null ? void 0 : C.props) == null ? void 0 : k.tab3Label) ?? "Medical Records"), s = Q(((D = r == null ? void 0 : r.props) == null ? void 0 : D.activeTab) ?? ((Z = (L = r == null ? void 0 : r.studio) == null ? void 0 : L.props) == null ? void 0 : Z.activeTab) ?? "0"), l = Q(((oe = r == null ? void 0 : r.props) == null ? void 0 : oe.timelineJson) ?? ((ue = (le = r == null ? void 0 : r.studio) == null ? void 0 : le.props) == null ? void 0 : ue.timelineJson) ?? "[]");
    return {
      kind: "generic",
      templateHtml: `
        <zero-timeline-card-1.0.0
          tab1-label="${e}"
          tab2-label="${t}"
          tab3-label="${n}"
          active-tab="${s}"
          timeline-json="${l}"
        ></zero-timeline-card-1.0.0>
      `
    };
  }
  render() {
    let r = [];
    try {
      r = JSON.parse(this.timelineJson);
    } catch {
      r = [];
    }
    const e = r.find((n) => n.tabIndex === this.activeTab) || r[0] || { events: [], badgeText: "" }, t = this.activeTab === 0 ? this.tab1Label : this.activeTab === 1 ? this.tab2Label : this.tab3Label;
    return we`
      <div class="card">
        <div class="tabs-header">
          <div class="tab ${this.activeTab === 0 ? "active" : ""}" @click=${() => this.activeTab = 0}>${this.tab1Label}</div>
          <div class="tab ${this.activeTab === 1 ? "active" : ""}" @click=${() => this.activeTab = 1}>${this.tab2Label}</div>
          <div class="tab ${this.activeTab === 2 ? "active" : ""}" @click=${() => this.activeTab = 2}>${this.tab3Label}</div>
        </div>
        <div class="content-box">
          <div class="content-header">
            <span class="content-title">${t}</span>
            <span class="badge">${e.badgeText || "Active"}</span>
          </div>
          ${(e.events || []).map((n, s) => we`
            <div class="item-row">
              <div class="item-date">${n.date}</div>
              <div class="item-body">
                <div class="item-title">${n.title}</div>
                <div class="item-desc">${n.desc}</div>
              </div>
              <button class="item-btn">📄 Action</button>
            </div>
            ${s < e.events.length - 1 ? we`<div class="item-divider"></div>` : ""}
          `)}
        </div>
      </div>
    `;
  }
};
U.styles = Gt`
    :host {
      display: block;
      width: 100%;
    }
    .card {
      padding: 24px;
      border-radius: 16px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
      font-family: inherit;
      display: flex;
      flex-direction: column;
      gap: 20px;
      box-sizing: border-box;
    }
    .tabs-header {
      display: flex;
      border-bottom: 1px solid #e2e8f0;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .tabs-header::-webkit-scrollbar {
      display: none;
    }
    .tab {
      padding: 12px 16px;
      font-size: 0.875rem;
      font-weight: 600;
      color: #64748b;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
    }
    .tab:hover {
      color: #0f172a;
    }
    .tab.active {
      color: #0ea5e9;
      border-bottom-color: #0ea5e9;
    }
    .content-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
      background: #f8fafc;
      border-radius: 12px;
      padding: 20px;
      border: 1px solid #e2e8f0;
    }
    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 12px;
    }
    .content-title {
      font-weight: 700;
      color: #0f172a;
      font-size: 0.9rem;
    }
    .badge {
      font-size: 0.75rem;
      color: #64748b;
      background: #e2e8f0;
      padding: 4px 8px;
      border-radius: 6px;
      font-weight: 600;
    }
    .item-row {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      padding: 4px 0;
    }
    .item-date {
      font-size: 0.82rem;
      font-weight: 700;
      color: #0f172a;
      white-space: nowrap;
      width: 140px;
    }
    .item-body {
      flex: 1;
    }
    .item-title {
      font-size: 0.875rem;
      font-weight: 700;
      color: #0f172a;
    }
    .item-desc {
      font-size: 0.75rem;
      color: #64748b;
      margin-top: 4px;
    }
    .item-btn {
      border: none;
      background: none;
      color: #0ea5e9;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0;
    }
    .item-btn:hover {
      text-decoration: underline;
    }
    .item-divider {
      height: 1px;
      background: #e2e8f0;
      margin: 4px 0;
    }
  `;
J([
  ae({ type: String, attribute: "tab1-label" })
], U.prototype, "tab1Label", 2);
J([
  ae({ type: String, attribute: "tab2-label" })
], U.prototype, "tab2Label", 2);
J([
  ae({ type: String, attribute: "tab3-label" })
], U.prototype, "tab3Label", 2);
J([
  ae({ type: Number, attribute: "active-tab" })
], U.prototype, "activeTab", 2);
J([
  ae({ type: String, attribute: "timeline-json" })
], U.prototype, "timelineJson", 2);
U = J([
  Lt({
    name: "zero-timeline-card",
    version: "1.0.0",
    title: "Timeline Card",
    elementSelector: "zero-timeline-card",
    group: "Dashboard",
    iconName: "card-icon.png"
  }),
  jt()
], U);
export {
  U as ZeroTimelineCard
};
