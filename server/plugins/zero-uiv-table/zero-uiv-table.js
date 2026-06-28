var It = Object.defineProperty;
var jt = (n, e, t) => e in n ? It(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Be = (n, e, t) => jt(n, typeof e != "symbol" ? e + "" : e, t);
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ve;
(function(n) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : m(), r = s(n);
    typeof t.Reflect < "u" && (r = s(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = n);
    function s(p, b) {
      return function(g, w) {
        Object.defineProperty(p, g, { configurable: !0, writable: !0, value: w }), b && b(g, w);
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
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, b = !m && !p, g = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return me(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return me({ __proto__: null });
      } : function() {
        return me({});
      },
      has: b ? function(i, a) {
        return r.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: b ? function(i, a) {
        return r.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, w = Object.getPrototypeOf(Function), O = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : xt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Nt(), x = typeof WeakMap == "function" ? WeakMap : Dt(), B = s ? Symbol.for("@reflect-metadata:registry") : void 0, oe = Tt(), Oe = kt(oe);
    function ht(i, a, o, c) {
      if (_(o)) {
        if (!De(i))
          throw new TypeError();
        if (!He(a))
          throw new TypeError();
        return wt(i, a);
      } else {
        if (!De(i))
          throw new TypeError();
        if (!M(a))
          throw new TypeError();
        if (!M(c) && !_(c) && !W(c))
          throw new TypeError();
        return W(c) && (c = void 0), o = N(o), At(i, a, o, c);
      }
    }
    e("decorate", ht);
    function ft(i, a) {
      function o(c, v) {
        if (!M(c))
          throw new TypeError();
        if (!_(v) && !Pt(v))
          throw new TypeError();
        Te(i, a, c, v);
      }
      return o;
    }
    e("metadata", ft);
    function pt(i, a, o, c) {
      if (!M(o))
        throw new TypeError();
      return _(c) || (c = N(c)), Te(i, a, o, c);
    }
    e("defineMetadata", pt);
    function yt(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = N(o)), Me(i, a, o);
    }
    e("hasMetadata", yt);
    function vt(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = N(o)), pe(i, a, o);
    }
    e("hasOwnMetadata", vt);
    function mt(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = N(o)), Pe(i, a, o);
    }
    e("getMetadata", mt);
    function _t(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = N(o)), Ce(i, a, o);
    }
    e("getOwnMetadata", _t);
    function bt(i, a) {
      if (!M(i))
        throw new TypeError();
      return _(a) || (a = N(a)), ke(i, a);
    }
    e("getMetadataKeys", bt);
    function gt(i, a) {
      if (!M(i))
        throw new TypeError();
      return _(a) || (a = N(a)), Re(i, a);
    }
    e("getOwnMetadataKeys", gt);
    function $t(i, a, o) {
      if (!M(a))
        throw new TypeError();
      if (_(o) || (o = N(o)), !M(a))
        throw new TypeError();
      _(o) || (o = N(o));
      var c = Y(
        a,
        o,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(i, a, o);
    }
    e("deleteMetadata", $t);
    function wt(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o], v = c(a);
        if (!_(v) && !W(v)) {
          if (!He(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function At(i, a, o, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var C = i[v], P = C(a, o, c);
        if (!_(P) && !W(P)) {
          if (!M(P))
            throw new TypeError();
          c = P;
        }
      }
      return c;
    }
    function Me(i, a, o) {
      var c = pe(i, a, o);
      if (c)
        return !0;
      var v = ve(a);
      return W(v) ? !1 : Me(i, v, o);
    }
    function pe(i, a, o) {
      var c = Y(
        a,
        o,
        /*Create*/
        !1
      );
      return _(c) ? !1 : Ne(c.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Pe(i, a, o) {
      var c = pe(i, a, o);
      if (c)
        return Ce(i, a, o);
      var v = ve(a);
      if (!W(v))
        return Pe(i, v, o);
    }
    function Ce(i, a, o) {
      var c = Y(
        a,
        o,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Te(i, a, o, c) {
      var v = Y(
        o,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, o, c);
    }
    function ke(i, a) {
      var o = Re(i, a), c = ve(i);
      if (c === null)
        return o;
      var v = ke(c, a);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var C = new k(), P = [], $ = 0, d = o; $ < d.length; $++) {
        var h = d[$], f = C.has(h);
        f || (C.add(h), P.push(h));
      }
      for (var y = 0, A = v; y < A.length; y++) {
        var h = A[y], f = C.has(h);
        f || (C.add(h), P.push(h));
      }
      return P;
    }
    function Re(i, a) {
      var o = Y(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function xe(i) {
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
    function W(i) {
      return i === null;
    }
    function Et(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function St(i, a) {
      switch (xe(i)) {
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
      var o = "string", c = Ue(i, l);
      if (c !== void 0) {
        var v = c.call(i, o);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return Ot(i);
    }
    function Ot(i, a) {
      var o, c;
      {
        var v = i.toString;
        if (le(v)) {
          var c = v.call(i);
          if (!M(c))
            return c;
        }
        var o = i.valueOf;
        if (le(o)) {
          var c = o.call(i);
          if (!M(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ne(i) {
      return !!i;
    }
    function Mt(i) {
      return "" + i;
    }
    function N(i) {
      var a = St(i);
      return Et(a) ? a : Mt(a);
    }
    function De(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function le(i) {
      return typeof i == "function";
    }
    function He(i) {
      return typeof i == "function";
    }
    function Pt(i) {
      switch (xe(i)) {
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
        if (!le(o))
          throw new TypeError();
        return o;
      }
    }
    function Ie(i) {
      var a = Ue(i, u);
      if (!le(a))
        throw new TypeError();
      var o = a.call(i);
      if (!M(o))
        throw new TypeError();
      return o;
    }
    function je(i) {
      return i.value;
    }
    function Le(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Ge(i) {
      var a = i.return;
      a && a.call(i);
    }
    function ve(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || a !== w)
        return a;
      var o = i.prototype, c = o && Object.getPrototypeOf(o);
      if (c == null || c === Object.prototype)
        return a;
      var v = c.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function Ct() {
      var i;
      !_(B) && typeof t.Reflect < "u" && !(B in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Rt(t.Reflect));
      var a, o, c, v = new x(), C = {
        registerProvider: P,
        getProvider: d,
        setProvider: f
      };
      return C;
      function P(y) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case _(a):
            a = y;
            break;
          case a === y:
            break;
          case _(o):
            o = y;
            break;
          case o === y:
            break;
          default:
            c === void 0 && (c = new k()), c.add(y);
            break;
        }
      }
      function $(y, A) {
        if (!_(a)) {
          if (a.isProviderFor(y, A))
            return a;
          if (!_(o)) {
            if (o.isProviderFor(y, A))
              return a;
            if (!_(c))
              for (var E = Ie(c); ; ) {
                var S = Le(E);
                if (!S)
                  return;
                var R = je(S);
                if (R.isProviderFor(y, A))
                  return Ge(E), R;
              }
          }
        }
        if (!_(i) && i.isProviderFor(y, A))
          return i;
      }
      function d(y, A) {
        var E = v.get(y), S;
        return _(E) || (S = E.get(A)), _(S) && (S = $(y, A), _(S) || (_(E) && (E = new O(), v.set(y, E)), E.set(A, S))), S;
      }
      function h(y) {
        if (_(y))
          throw new TypeError();
        return a === y || o === y || !_(c) && c.has(y);
      }
      function f(y, A, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = d(y, A);
        if (S !== E) {
          if (!_(S))
            return !1;
          var R = v.get(y);
          _(R) && (R = new O(), v.set(y, R)), R.set(A, E);
        }
        return !0;
      }
    }
    function Tt() {
      var i;
      return !_(B) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[B]), _(i) && (i = Ct()), !_(B) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, B, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function kt(i) {
      var a = new x(), o = {
        isProviderFor: function(h, f) {
          var y = a.get(h);
          return _(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: P,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: d
      };
      return oe.registerProvider(o), o;
      function c(h, f, y) {
        var A = a.get(h), E = !1;
        if (_(A)) {
          if (!y)
            return;
          A = new O(), a.set(h, A), E = !0;
        }
        var S = A.get(f);
        if (_(S)) {
          if (!y)
            return;
          if (S = new O(), A.set(f, S), !i.setProvider(h, f, o))
            throw A.delete(f), E && a.delete(h), new Error("Wrong provider for target.");
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
        return _(A) ? !1 : Ne(A.has(h));
      }
      function C(h, f, y) {
        var A = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (!_(A))
          return A.get(h);
      }
      function P(h, f, y, A) {
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
        if (_(A))
          return y;
        for (var E = A.keys(), S = Ie(E), R = 0; ; ) {
          var ze = Le(S);
          if (!ze)
            return y.length = R, y;
          var Ht = je(ze);
          try {
            y[R] = Ht;
          } catch (Ut) {
            try {
              Ge(S);
            } finally {
              throw Ut;
            }
          }
          R++;
        }
      }
      function d(h, f, y) {
        var A = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (_(A) || !A.delete(h))
          return !1;
        if (A.size === 0) {
          var E = a.get(f);
          _(E) || (E.delete(y), E.size === 0 && a.delete(E));
        }
        return !0;
      }
    }
    function Rt(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, C = i.deleteMetadata, P = new x(), $ = {
        isProviderFor: function(d, h) {
          var f = P.get(d);
          return !_(f) && f.has(h) ? !0 : v(d, h).length ? (_(f) && (f = new k(), P.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return $;
    }
    function Y(i, a, o) {
      var c = oe.getProvider(i, a);
      if (!_(c))
        return c;
      if (o) {
        if (oe.setProvider(i, a, Oe))
          return Oe;
        throw new Error("Illegal state.");
      }
    }
    function xt() {
      var i = {}, a = [], o = (
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
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), d;
          }, $.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: d, done: !0 };
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
              return this._keys.length--, this._values.length--, ye(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, $.prototype.values = function() {
            return new o(this._keys, this._values, C);
          }, $.prototype.entries = function() {
            return new o(this._keys, this._values, P);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[u] = function() {
            return this.entries();
          }, $.prototype._find = function(d, h) {
            if (!ye(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ye(this._keys[f], d)) {
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
      function P($, d) {
        return [$, d];
      }
    }
    function Nt() {
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
    function Dt() {
      var i = 16, a = g.create(), o = c();
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
            return f !== void 0 ? g.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? g.get(f, this._key) : void 0;
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
        while (g.has(a, d));
        return a[d] = !0, d;
      }
      function v(d, h) {
        if (!r.call(d, o)) {
          if (!h)
            return;
          Object.defineProperty(d, o, { value: g.create() });
        }
        return d[o];
      }
      function C(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function P(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, d), h;
        }
        return C(new Array(d), d);
      }
      function $() {
        var d = P(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var y = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function me(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function Lt(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function Gt(n) {
  return function(e) {
    if (Lt(n)) {
      const t = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const r = `${n.elementSelector}-${n.version}`;
        if (!customElements.get(r))
          try {
            customElements.define(r, e);
          } catch {
            try {
              customElements.define(r, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, l);
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
function zt(n) {
  return Gt(n);
}
function Bt(n) {
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
        var b;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const g = new CSSStyleSheet(), w = (b = l.sheet) == null ? void 0 : b.cssRules;
          w && (Array.from(w).forEach((O) => g.insertRule(O.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, g]);
        } else if (l) {
          const g = l.cloneNode(!0);
          p.appendChild(g);
        }
        u.forEach((g) => {
          const w = g.cloneNode(!0);
          p.appendChild(w);
        });
      }
    }
    return t;
  };
}
function Wt(n) {
  var t;
  if (((t = n == null ? void 0 : n.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Vt(n) {
  return function(e, t) {
    try {
      Wt(n);
      const r = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (n.fieldMappings = n.fieldMappings ?? t);
      }
      r.push(n), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function he(n) {
  return Vt(n);
}
var F;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker", n.CHIPS = "chips";
})(F || (F = {}));
var q;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(q || (q = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, we = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ae = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let at = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== Ae) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (n) => new at(typeof n == "string" ? n : n + "", void 0, Ae), qt = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((r, s, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[l + 1], n[0]);
  return new at(t, n, Ae);
}, Zt = (n, e) => {
  if (we) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), s = ue.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = t.cssText, n.appendChild(r);
  }
}, qe = we ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Ft(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Yt, getOwnPropertyDescriptor: Jt, getOwnPropertyNames: Kt, getOwnPropertySymbols: Qt, getPrototypeOf: er } = Object, U = globalThis, Ze = U.trustedTypes, tr = Ze ? Ze.emptyScript : "", _e = U.reactiveElementPolyfillSupport, Q = (n, e) => n, ce = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? tr : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, e) {
  let t = n;
  switch (e) {
    case Boolean:
      t = n !== null;
      break;
    case Number:
      t = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(n);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ee = (n, e) => !Xt(n, e), Xe = { attribute: !0, type: String, converter: ce, reflect: !1, useDefault: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), U.litPropertyMetadata ?? (U.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let V = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Xe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(e, r, t);
      s !== void 0 && Yt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: s, set: l } = Jt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, m, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Xe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Q("elementProperties"))) return;
    const e = er(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Q("properties"))) {
      const t = this.properties, r = [...Kt(t), ...Qt(t)];
      for (const s of r) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, s] of t) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const s = this._$Eu(t, r);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const s of r) t.unshift(qe(s));
    } else e !== void 0 && t.push(qe(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Zt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostConnected) == null ? void 0 : r.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostDisconnected) == null ? void 0 : r.call(t);
    });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$ET(e, t) {
    var l;
    const r = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, r);
    if (s !== void 0 && r.reflect === !0) {
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : ce).toAttribute(t, r.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const r = this.constructor, s = r._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const m = r.getPropertyOptions(s), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : ce;
      this._$Em = s;
      const b = p.fromAttribute(t, m.type);
      this[s] = b ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? b, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, s = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[e]), r ?? (r = m.getPropertyOptions(e)), !((r.hasChanged ?? Ee)(l, t) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: s, wrapped: l }, u) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    var r;
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
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((s) => {
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
    (t = this._$EO) == null || t.forEach((r) => {
      var s;
      return (s = r.hostUpdated) == null ? void 0 : s.call(r);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[Q("elementProperties")] = /* @__PURE__ */ new Map(), V[Q("finalized")] = /* @__PURE__ */ new Map(), _e == null || _e({ ReactiveElement: V }), (U.reactiveElementVersions ?? (U.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, Ye = (n) => n, de = ee.trustedTypes, Je = de ? de.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, ot = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, lt = "?" + H, rr = `<${lt}>`, G = document, re = () => G.createComment(""), ne = (n) => n === null || typeof n != "object" && typeof n != "function", Se = Array.isArray, nr = (n) => Se(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", be = `[ 	
\f\r]`, J = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ke = /-->/g, Qe = />/g, I = RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, ut = /^(?:script|style|textarea|title)$/i, ir = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), K = ir(1), Z = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), j = G.createTreeWalker(G, 129);
function ct(n, e) {
  if (!Se(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const sr = (n, e) => {
  const t = n.length - 1, r = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = J;
  for (let m = 0; m < t; m++) {
    const p = n[m];
    let b, g, w = -1, O = 0;
    for (; O < p.length && (u.lastIndex = O, g = u.exec(p), g !== null); ) O = u.lastIndex, u === J ? g[1] === "!--" ? u = Ke : g[1] !== void 0 ? u = Qe : g[2] !== void 0 ? (ut.test(g[2]) && (s = RegExp("</" + g[2], "g")), u = I) : g[3] !== void 0 && (u = I) : u === I ? g[0] === ">" ? (u = s ?? J, w = -1) : g[1] === void 0 ? w = -2 : (w = u.lastIndex - g[2].length, b = g[1], u = g[3] === void 0 ? I : g[3] === '"' ? tt : et) : u === tt || u === et ? u = I : u === Ke || u === Qe ? u = J : (u = I, s = void 0);
    const k = u === I && n[m + 1].startsWith("/>") ? " " : "";
    l += u === J ? p + rr : w >= 0 ? (r.push(b), p.slice(0, w) + ot + p.slice(w) + H + k) : p + H + (w === -2 ? m : k);
  }
  return [ct(n, l + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class ie {
  constructor({ strings: e, _$litType$: t }, r) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, p = this.parts, [b, g] = sr(e, t);
    if (this.el = ie.createElement(b, r), j.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = j.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(ot)) {
          const O = g[u++], k = s.getAttribute(w).split(H), x = /([.?@])?(.*)/.exec(O);
          p.push({ type: 1, index: l, name: x[2], strings: k, ctor: x[1] === "." ? or : x[1] === "?" ? lr : x[1] === "@" ? ur : fe }), s.removeAttribute(w);
        } else w.startsWith(H) && (p.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ut.test(s.tagName)) {
          const w = s.textContent.split(H), O = w.length - 1;
          if (O > 0) {
            s.textContent = de ? de.emptyScript : "";
            for (let k = 0; k < O; k++) s.append(w[k], re()), j.nextNode(), p.push({ type: 2, index: ++l });
            s.append(w[O], re());
          }
        }
      } else if (s.nodeType === 8) if (s.data === lt) p.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(H, w + 1)) !== -1; ) p.push({ type: 7, index: l }), w += H.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const r = G.createElement("template");
    return r.innerHTML = e, r;
  }
}
function X(n, e, t = n, r) {
  var u, m;
  if (e === Z) return e;
  let s = r !== void 0 ? (u = t._$Co) == null ? void 0 : u[r] : t._$Cl;
  const l = ne(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(n), s._$AT(n, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = s : t._$Cl = s), s !== void 0 && (e = X(n, s._$AS(n, e.values), s, r)), e;
}
class ar {
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
    const { el: { content: t }, parts: r } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? G).importNode(t, !0);
    j.currentNode = s;
    let l = j.nextNode(), u = 0, m = 0, p = r[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let b;
        p.type === 2 ? b = new se(l, l.nextSibling, this, e) : p.type === 1 ? b = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (b = new cr(l, this, e)), this._$AV.push(b), p = r[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = j.nextNode(), u++);
    }
    return j.currentNode = G, s;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, s) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = X(this, e, t), ne(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(G.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: r } = e, s = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = ie.createElement(ct(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ar(s, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new ie(e)), t;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, s = 0;
    for (const l of e) s === t.length ? t.push(r = new se(this.O(re()), this.O(re()), this, this.options)) : r = t[s], r._$AI(l), s++;
    s < t.length && (this._$AR(r && r._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Ye(e).nextSibling;
      Ye(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class fe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, s, l) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = T;
  }
  _$AI(e, t = this, r, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = X(this, e, t, 0), u = !ne(e) || e !== this._$AH && e !== Z, u && (this._$AH = e);
    else {
      const m = e;
      let p, b;
      for (e = l[0], p = 0; p < l.length - 1; p++) b = X(this, m[r + p], t, p), b === Z && (b = this._$AH[p]), u || (u = !ne(b) || b !== this._$AH[p]), b === T ? e = T : e !== T && (e += (b ?? "") + l[p + 1]), this._$AH[p] = b;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
class lr extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}
class ur extends fe {
  constructor(e, t, r, s, l) {
    super(e, t, r, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = X(this, e, t, 0) ?? T) === Z) return;
    const r = this._$AH, s = e === T && r !== T || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, l = e !== T && (r === T || s);
    s && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class cr {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    X(this, e);
  }
}
const ge = ee.litHtmlPolyfillSupport;
ge == null || ge(ie, se), (ee.litHtmlVersions ?? (ee.litHtmlVersions = [])).push("3.3.3");
const dr = (n, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = r._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = s = new se(e.insertBefore(re(), l), l, void 0, t ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis;
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = dr(t, this.renderRoot, this.renderOptions);
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
var st;
te._$litElement$ = !0, te.finalized = !0, (st = L.litElementHydrateSupport) == null || st.call(L, { LitElement: te });
const $e = L.litElementPolyfillSupport;
$e == null || $e({ LitElement: te });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ee }, fr = (n = hr, e, t) => {
  const { kind: r, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), l.set(t.name, n), r === "accessor") {
    const { name: u } = t;
    return { set(m) {
      const p = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(u, p, n, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, n, m), m;
    } };
  }
  if (r === "setter") {
    const { name: u } = t;
    return function(m) {
      const p = this[u];
      e.call(this, m), this.requestUpdate(u, p, n, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function ae(n) {
  return (e, t) => typeof t == "object" ? fr(n, e, t) : ((r, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(n, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function dt(n) {
  return ae({ ...n, state: !0, attribute: !1 });
}
var pr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, z = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? yr(e, t) : e, l = n.length - 1, u; l >= 0; l--)
    (u = n[l]) && (s = (r ? u(e, t, s) : u(s)) || s);
  return r && s && pr(e, t, s), s;
};
const nt = () => window.zeroThemeManager;
function it(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let D = class extends te {
  constructor() {
    super(...arguments), this.theme = "modern", this.columns = [
      { key: "id", label: "ID", sortable: !0 },
      { key: "name", label: "Name", sortable: !0 },
      { key: "status", label: "Status", sortable: !0 }
    ], this.data = [
      { id: "1", name: "System Core", status: "Active" },
      { id: "2", name: "Neural Link", status: "Standby" },
      { id: "3", name: "Optic Mesh", status: "Offline" }
    ], this.loading = !1, this.sortKey = "", this.sortOrder = "asc";
  }
  static getStudioTemplate(n) {
    var l, u, m, p;
    const e = ((u = (l = n == null ? void 0 : n.studio) == null ? void 0 : l.props) == null ? void 0 : u.columns) || [
      { key: "id", label: "ID", sortable: !0 },
      { key: "name", label: "Name", sortable: !0 },
      { key: "status", label: "Status", sortable: !0 }
    ], t = ((p = (m = n == null ? void 0 : n.studio) == null ? void 0 : m.props) == null ? void 0 : p.data) || [
      { id: "1", name: "System Core", status: "Active" },
      { id: "2", name: "Neural Link", status: "Offline" }
    ];
    let r = "<thead><tr>";
    for (const b of e) {
      const g = b.label || b.key || "";
      r += `<th style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-weight:600;'>${it(String(g))}</th>`;
    }
    r += "</tr></thead>";
    let s = "<tbody>";
    for (let b = 0; b < Math.min(t.length, 5); b++) {
      const g = t[b], O = b === Math.min(t.length, 5) - 1 ? "" : "border-bottom:1px solid rgba(0,0,0,0.05);";
      s += "<tr>";
      for (const k of e) {
        const x = g[k.key] !== void 0 ? String(g[k.key]) : "";
        s += `<td style='padding:12px 15px;text-align:left;${O}'>${it(x)}</td>`;
      }
      s += "</tr>";
    }
    return s += "</tbody>", {
      kind: "table",
      templateHtml: [
        "<div style='width:100%;overflow-x:auto;'>",
        "<table style='width:100%;border-collapse:collapse;font-family:inherit;'>",
        r,
        s,
        "</table>",
        "</div>"
      ].join(""),
      titleProp: "theme",
      columnsProp: "columns",
      dataProp: "data",
      emptyText: "Configure static columns, dynamic columns, and row mapping",
      dynamicHints: ["$.table.columns", "$.table.rows", "{{row.id}}", "{{row.name}}"],
      badges: ["Static Columns", "Dynamic Rows"],
      sampleHeaders: ["label_1", "label_2", "label_3"],
      sampleRows: [
        ["{{row.id}}", "{{row.name}}", "{{row.status}}"],
        ["$.row_var.id", "$.row_var.name", "$.row_var.status"]
      ]
    };
  }
  handleSort(n) {
    this.sortKey === n ? this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc" : (this.sortKey = n, this.sortOrder = "asc");
  }
  connectedCallback() {
    var n;
    super.connectedCallback(), (n = nt()) == null || n.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var t;
    const n = (t = nt()) == null ? void 0 : t.getActiveTheme();
    if (!n) return K`<table></table>`;
    const e = [...this.data].sort((r, s) => {
      if (!this.sortKey) return 0;
      const l = r[this.sortKey], u = s[this.sortKey];
      return this.sortOrder === "asc" ? l > u ? 1 : -1 : l < u ? 1 : -1;
    });
    return K`
            <style>
                ${n.getGlobalStyles()}
                ${n.getComponentStyles("table")}
            </style>
            <div class="table-container ${this.theme}">
                <table>
                    <thead>
                        <tr>
                            ${this.columns.map((r) => K`
                                <th @click="${() => r.sortable && this.handleSort(r.key)}">
                                    ${r.label} ${this.sortKey === r.key ? this.sortOrder === "asc" ? "▴" : "▾" : ""}
                                </th>
                            `)}
                        </tr>
                    </thead>
                    <tbody>
                        ${e.map((r) => K`
                            <tr>
                                ${this.columns.map((s) => K`<td>${r[s.key]}</td>`)}
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        `;
  }
};
D.styles = qt`
        :host {
            display: block;
            width: 100%;
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-family: inherit;
        }

        th, td {
            padding: 12px 15px;
            text-align: left;
        }

        th {
            cursor: pointer;
            user-select: none;
        }

        /* Cyber Specifics */
        .cyber table {
            border: 2px solid var(--uiv-table-border, var(--uiv-status-primary));
        }

        .cyber th {
            background: var(--uiv-table-header-bg, var(--uiv-app-accent-transparent, rgba(255, 0, 60, 0.1)));
            color: var(--uiv-table-border, var(--uiv-status-primary));
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        /* Glass Specifics */
        .glass table {
            background: var(--uiv-table-bg, var(--uiv-app-card-bg, rgba(255, 255, 255, 0.05)));
            border: 1px solid var(--uiv-table-border, var(--uiv-app-border-color, rgba(255, 255, 255, 0.2)));
            backdrop-filter: var(--uiv-app-glass-blur, blur(10px));
        }

        /* Retro Specifics */
        .retro table {
            border: 3px solid var(--uiv-text-primary-themed, #000);
            box-shadow: 6px 6px 0 var(--uiv-text-primary-themed, #000);
        }
    `;
z([
  ae({ type: String }),
  he({
    attributeType: q.PROPERTY,
    uiComponentType: F.DROPDOWN,
    displayLabel: "Theme",
    fieldMappings: "theme",
    optionItems: [
      { label: "Modern", value: "modern" },
      { label: "Cyber", value: "cyber" },
      { label: "Glass", value: "glass" },
      { label: "Retro", value: "retro" }
    ]
  })
], D.prototype, "theme", 2);
z([
  ae({ type: Array }),
  he({
    attributeType: q.PROPERTY,
    uiComponentType: F.TEXTAREA,
    displayLabel: "Columns JSON",
    fieldMappings: "columns"
  })
], D.prototype, "columns", 2);
z([
  ae({ type: Array }),
  he({
    attributeType: q.PROPERTY,
    uiComponentType: F.TEXTAREA,
    displayLabel: "Data JSON",
    fieldMappings: "data"
  })
], D.prototype, "data", 2);
z([
  ae({ type: Boolean }),
  he({
    attributeType: q.PROPERTY,
    uiComponentType: F.CHECKBOX,
    displayLabel: "Loading",
    fieldMappings: "loading"
  })
], D.prototype, "loading", 2);
z([
  dt()
], D.prototype, "sortKey", 2);
z([
  dt()
], D.prototype, "sortOrder", 2);
D = z([
  zt({
    name: "zero-uiv-table",
    version: "1.0.0",
    title: "Unified Table",
    elementSelector: "zero-uiv-table",
    group: "Uiverse Tables",
    iconName: "table-icon.png"
  }),
  Bt()
], D);
export {
  D as ZeroUivTable
};
