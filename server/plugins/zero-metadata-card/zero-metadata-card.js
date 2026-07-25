var Vt = Object.defineProperty;
var Nt = (t, e, r) => e in t ? Vt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var ut = (t, e, r) => Nt(t, typeof e != "symbol" ? e + "" : e, r);
var ht = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var dt;
(function(t) {
  (function(e) {
    var r = typeof globalThis == "object" ? globalThis : typeof ht == "object" ? ht : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(t);
    typeof r.Reflect < "u" && (n = s(r.Reflect, n)), e(n, r), typeof r.Reflect > "u" && (r.Reflect = t);
    function s(f, E) {
      return function(A, b) {
        Object.defineProperty(f, A, { configurable: !0, writable: !0, value: b }), E && E(A, b);
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
  })(function(e, r) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, E = !_ && !f, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return Ke(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return Ke({ __proto__: null });
      } : function() {
        return Ke({});
      },
      has: E ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: E ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, b = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : qe(), V = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ze(), H = typeof WeakMap == "function" ? WeakMap : Rt(), j = s ? Symbol.for("@reflect-metadata:registry") : void 0, J = Be(), re = Fe(J);
    function Oe(i, a, o, h) {
      if (y(o)) {
        if (!de(i))
          throw new TypeError();
        if (!pe(a))
          throw new TypeError();
        return Ne(i, a);
      } else {
        if (!de(i))
          throw new TypeError();
        if (!M(a))
          throw new TypeError();
        if (!M(h) && !y(h) && !U(h))
          throw new TypeError();
        return U(h) && (h = void 0), o = N(o), De(i, a, o, h);
      }
    }
    e("decorate", Oe);
    function Pe(i, a) {
      function o(h, v) {
        if (!M(h))
          throw new TypeError();
        if (!y(v) && !ze(v))
          throw new TypeError();
        ae(i, a, h, v);
      }
      return o;
    }
    e("metadata", Pe);
    function Ce(i, a, o, h) {
      if (!M(o))
        throw new TypeError();
      return y(h) || (h = N(h)), ae(i, a, o, h);
    }
    e("defineMetadata", Ce);
    function xe(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return y(o) || (o = N(o)), ie(i, a, o);
    }
    e("hasMetadata", xe);
    function ge(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return y(o) || (o = N(o)), X(i, a, o);
    }
    e("hasOwnMetadata", ge);
    function ke(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return y(o) || (o = N(o)), ne(i, a, o);
    }
    e("getMetadata", ke);
    function Re(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return y(o) || (o = N(o)), se(i, a, o);
    }
    e("getOwnMetadata", Re);
    function Te(i, a) {
      if (!M(i))
        throw new TypeError();
      return y(a) || (a = N(a)), oe(i, a);
    }
    e("getMetadataKeys", Te);
    function Le(i, a) {
      if (!M(i))
        throw new TypeError();
      return y(a) || (a = N(a)), le(i, a);
    }
    e("getOwnMetadataKeys", Le);
    function Ve(i, a, o) {
      if (!M(a))
        throw new TypeError();
      if (y(o) || (o = N(o)), !M(a))
        throw new TypeError();
      y(o) || (o = N(o));
      var h = I(
        a,
        o,
        /*Create*/
        !1
      );
      return y(h) ? !1 : h.OrdinaryDeleteMetadata(i, a, o);
    }
    e("deleteMetadata", Ve);
    function Ne(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var h = i[o], v = h(a);
        if (!y(v) && !U(v)) {
          if (!pe(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function De(i, a, o, h) {
      for (var v = i.length - 1; v >= 0; --v) {
        var g = i[v], C = g(a, o, h);
        if (!y(C) && !U(C)) {
          if (!M(C))
            throw new TypeError();
          h = C;
        }
      }
      return h;
    }
    function ie(i, a, o) {
      var h = X(i, a, o);
      if (h)
        return !0;
      var v = Q(a);
      return U(v) ? !1 : ie(i, v, o);
    }
    function X(i, a, o) {
      var h = I(
        a,
        o,
        /*Create*/
        !1
      );
      return y(h) ? !1 : he(h.OrdinaryHasOwnMetadata(i, a, o));
    }
    function ne(i, a, o) {
      var h = X(i, a, o);
      if (h)
        return se(i, a, o);
      var v = Q(a);
      if (!U(v))
        return ne(i, v, o);
    }
    function se(i, a, o) {
      var h = I(
        a,
        o,
        /*Create*/
        !1
      );
      if (!y(h))
        return h.OrdinaryGetOwnMetadata(i, a, o);
    }
    function ae(i, a, o, h) {
      var v = I(
        o,
        h,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, o, h);
    }
    function oe(i, a) {
      var o = le(i, a), h = Q(i);
      if (h === null)
        return o;
      var v = oe(h, a);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var g = new V(), C = [], $ = 0, d = o; $ < d.length; $++) {
        var p = d[$], c = g.has(p);
        c || (g.add(p), C.push(p));
      }
      for (var m = 0, w = v; m < w.length; m++) {
        var p = w[m], c = g.has(p);
        c || (g.add(p), C.push(p));
      }
      return C;
    }
    function le(i, a) {
      var o = I(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function ue(i) {
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
    function y(i) {
      return i === void 0;
    }
    function U(i) {
      return i === null;
    }
    function He(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ue(i, a) {
      switch (ue(i)) {
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
      var o = "string", h = ce(i, l);
      if (h !== void 0) {
        var v = h.call(i, o);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return je(i);
    }
    function je(i, a) {
      var o, h;
      {
        var v = i.toString;
        if (B(v)) {
          var h = v.call(i);
          if (!M(h))
            return h;
        }
        var o = i.valueOf;
        if (B(o)) {
          var h = o.call(i);
          if (!M(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function he(i) {
      return !!i;
    }
    function Ie(i) {
      return "" + i;
    }
    function N(i) {
      var a = Ue(i);
      return He(a) ? a : Ie(a);
    }
    function de(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function B(i) {
      return typeof i == "function";
    }
    function pe(i) {
      return typeof i == "function";
    }
    function ze(i) {
      switch (ue(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Y(i, a) {
      return i === a || i !== i && a !== a;
    }
    function ce(i, a) {
      var o = i[a];
      if (o != null) {
        if (!B(o))
          throw new TypeError();
        return o;
      }
    }
    function fe(i) {
      var a = ce(i, u);
      if (!B(a))
        throw new TypeError();
      var o = a.call(i);
      if (!M(o))
        throw new TypeError();
      return o;
    }
    function me(i) {
      return i.value;
    }
    function ve(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function ye(i) {
      var a = i.return;
      a && a.call(i);
    }
    function Q(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || a !== b)
        return a;
      var o = i.prototype, h = o && Object.getPrototypeOf(o);
      if (h == null || h === Object.prototype)
        return a;
      var v = h.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function Ge() {
      var i;
      !y(j) && typeof r.Reflect < "u" && !(j in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (i = We(r.Reflect));
      var a, o, h, v = new H(), g = {
        registerProvider: C,
        getProvider: d,
        setProvider: c
      };
      return g;
      function C(m) {
        if (!Object.isExtensible(g))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === m:
            break;
          case y(a):
            a = m;
            break;
          case a === m:
            break;
          case y(o):
            o = m;
            break;
          case o === m:
            break;
          default:
            h === void 0 && (h = new V()), h.add(m);
            break;
        }
      }
      function $(m, w) {
        if (!y(a)) {
          if (a.isProviderFor(m, w))
            return a;
          if (!y(o)) {
            if (o.isProviderFor(m, w))
              return a;
            if (!y(h))
              for (var S = fe(h); ; ) {
                var O = ve(S);
                if (!O)
                  return;
                var D = me(O);
                if (D.isProviderFor(m, w))
                  return ye(S), D;
              }
          }
        }
        if (!y(i) && i.isProviderFor(m, w))
          return i;
      }
      function d(m, w) {
        var S = v.get(m), O;
        return y(S) || (O = S.get(w)), y(O) && (O = $(m, w), y(O) || (y(S) && (S = new P(), v.set(m, S)), S.set(w, O))), O;
      }
      function p(m) {
        if (y(m))
          throw new TypeError();
        return a === m || o === m || !y(h) && h.has(m);
      }
      function c(m, w, S) {
        if (!p(S))
          throw new Error("Metadata provider not registered.");
        var O = d(m, w);
        if (O !== S) {
          if (!y(O))
            return !1;
          var D = v.get(m);
          y(D) && (D = new P(), v.set(m, D)), D.set(w, S);
        }
        return !0;
      }
    }
    function Be() {
      var i;
      return !y(j) && M(r.Reflect) && Object.isExtensible(r.Reflect) && (i = r.Reflect[j]), y(i) && (i = Ge()), !y(j) && M(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, j, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Fe(i) {
      var a = new H(), o = {
        isProviderFor: function(p, c) {
          var m = a.get(p);
          return y(m) ? !1 : m.has(c);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: g,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: d
      };
      return J.registerProvider(o), o;
      function h(p, c, m) {
        var w = a.get(p), S = !1;
        if (y(w)) {
          if (!m)
            return;
          w = new P(), a.set(p, w), S = !0;
        }
        var O = w.get(c);
        if (y(O)) {
          if (!m)
            return;
          if (O = new P(), w.set(c, O), !i.setProvider(p, c, o))
            throw w.delete(c), S && a.delete(p), new Error("Wrong provider for target.");
        }
        return O;
      }
      function v(p, c, m) {
        var w = h(
          c,
          m,
          /*Create*/
          !1
        );
        return y(w) ? !1 : he(w.has(p));
      }
      function g(p, c, m) {
        var w = h(
          c,
          m,
          /*Create*/
          !1
        );
        if (!y(w))
          return w.get(p);
      }
      function C(p, c, m, w) {
        var S = h(
          m,
          w,
          /*Create*/
          !0
        );
        S.set(p, c);
      }
      function $(p, c) {
        var m = [], w = h(
          p,
          c,
          /*Create*/
          !1
        );
        if (y(w))
          return m;
        for (var S = w.keys(), O = fe(S), D = 0; ; ) {
          var lt = ve(O);
          if (!lt)
            return m.length = D, m;
          var Tt = me(lt);
          try {
            m[D] = Tt;
          } catch (Lt) {
            try {
              ye(O);
            } finally {
              throw Lt;
            }
          }
          D++;
        }
      }
      function d(p, c, m) {
        var w = h(
          c,
          m,
          /*Create*/
          !1
        );
        if (y(w) || !w.delete(p))
          return !1;
        if (w.size === 0) {
          var S = a.get(c);
          y(S) || (S.delete(m), S.size === 0 && a.delete(S));
        }
        return !0;
      }
    }
    function We(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, h = i.getOwnMetadata, v = i.getOwnMetadataKeys, g = i.deleteMetadata, C = new H(), $ = {
        isProviderFor: function(d, p) {
          var c = C.get(d);
          return !y(c) && c.has(p) ? !0 : v(d, p).length ? (y(c) && (c = new V(), C.set(d, c)), c.add(p), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: g
      };
      return $;
    }
    function I(i, a, o) {
      var h = J.getProvider(i, a);
      if (!y(h))
        return h;
      if (o) {
        if (J.setProvider(i, a, re))
          return re;
        throw new Error("Illegal state.");
      }
    }
    function qe() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function $(d, p, c) {
            this._index = 0, this._keys = d, this._values = p, this._selector = c;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[u] = function() {
            return this;
          }, $.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var p = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: p, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), d;
          }, $.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: d, done: !0 };
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
            var p = this._find(
              d,
              /*insert*/
              !1
            );
            return p >= 0 ? this._values[p] : void 0;
          }, $.prototype.set = function(d, p) {
            var c = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[c] = p, this;
          }, $.prototype.delete = function(d) {
            var p = this._find(
              d,
              /*insert*/
              !1
            );
            if (p >= 0) {
              for (var c = this._keys.length, m = p + 1; m < c; m++)
                this._keys[m - 1] = this._keys[m], this._values[m - 1] = this._values[m];
              return this._keys.length--, this._values.length--, Y(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, $.prototype.values = function() {
            return new o(this._keys, this._values, g);
          }, $.prototype.entries = function() {
            return new o(this._keys, this._values, C);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[u] = function() {
            return this.entries();
          }, $.prototype._find = function(d, p) {
            if (!Y(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var c = 0; c < this._keys.length; c++)
                if (Y(this._keys[c], d)) {
                  this._cacheIndex = c;
                  break;
                }
            }
            return this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return h;
      function v($, d) {
        return $;
      }
      function g($, d) {
        return d;
      }
      function C($, d) {
        return [$, d];
      }
    }
    function Ze() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new P();
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
      var i = 16, a = A.create(), o = h();
      return (
        /** @class */
        function() {
          function d() {
            this._key = h();
          }
          return d.prototype.has = function(p) {
            var c = v(
              p,
              /*create*/
              !1
            );
            return c !== void 0 ? A.has(c, this._key) : !1;
          }, d.prototype.get = function(p) {
            var c = v(
              p,
              /*create*/
              !1
            );
            return c !== void 0 ? A.get(c, this._key) : void 0;
          }, d.prototype.set = function(p, c) {
            var m = v(
              p,
              /*create*/
              !0
            );
            return m[this._key] = c, this;
          }, d.prototype.delete = function(p) {
            var c = v(
              p,
              /*create*/
              !1
            );
            return c !== void 0 ? delete c[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = h();
          }, d;
        }()
      );
      function h() {
        var d;
        do
          d = "@@WeakMap@@" + $();
        while (A.has(a, d));
        return a[d] = !0, d;
      }
      function v(d, p) {
        if (!n.call(d, o)) {
          if (!p)
            return;
          Object.defineProperty(d, o, { value: A.create() });
        }
        return d[o];
      }
      function g(d, p) {
        for (var c = 0; c < p; ++c)
          d[c] = Math.random() * 255 | 0;
        return d;
      }
      function C(d) {
        if (typeof Uint8Array == "function") {
          var p = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(p) : typeof msCrypto < "u" ? msCrypto.getRandomValues(p) : g(p, d), p;
        }
        return g(new Array(d), d);
      }
      function $() {
        var d = C(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var p = "", c = 0; c < i; ++c) {
          var m = d[c];
          (c === 4 || c === 6 || c === 8) && (p += "-"), m < 16 && (p += "0"), p += m.toString(16).toLowerCase();
        }
        return p;
      }
    }
    function Ke(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(dt || (dt = {}));
function Dt(t) {
  return typeof t.name == "string" && typeof t.version == "string" && typeof t.title == "string" && typeof t.elementSelector == "string" && typeof t.group == "string" && typeof t.iconName == "string";
}
function Ht(t) {
  return function(e) {
    if (Dt(t)) {
      const r = {
        version: t.version,
        name: t.name,
        title: t.title,
        selector: t.elementSelector,
        category: t.group,
        icon: t.iconName,
        layoutKind: t.layoutKind,
        environment: t.environment
      };
      if (Reflect.defineMetadata("ZeroComponent", r, e.prototype), globalThis.customElements) {
        const n = `${t.elementSelector}-${t.version}`;
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
          element: r
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Ut(t) {
  return Ht(t);
}
function jt(t) {
  return function(e) {
    class r extends e {
      constructor() {
        super(...arguments);
        ut(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const A = new CSSStyleSheet(), b = (E = l.sheet) == null ? void 0 : E.cssRules;
          b && (Array.from(b).forEach((P) => A.insertRule(P.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, A]);
        } else if (l) {
          const A = l.cloneNode(!0);
          f.appendChild(A);
        }
        u.forEach((A) => {
          const b = A.cloneNode(!0);
          f.appendChild(b);
        });
      }
    }
    return r;
  };
}
var pt;
(function(t) {
  t.TEXT_INPUT = "text-input", t.PASSWORD_INPUT = "password-input", t.DROPDOWN = "dropdown", t.CHECKBOX = "checkbox", t.RADIO_BUTTON = "radio-button", t.RANGE_SLIDER = "range-slider", t.FILE_INPUT = "file-input", t.DATE_PICKER = "date-picker", t.COLOR_PICKER = "color-picker", t.NUMBER_INPUT = "number-input", t.TEXTAREA = "textarea", t.MULTI_SELECT = "multi-select", t.POPUP_DROPDOWN = "popup-dropdown", t.LAYOUT_PICKER = "layout-picker", t.RESPONSIVE_OVERRIDE = "responsive-override", t.IMAGE_PICKER = "image-picker", t.CHIPS = "chips";
})(pt || (pt = {}));
var ct;
(function(t) {
  t.PROPERTY = "property", t.EVENT = "event", t.ACTION = "action";
})(ct || (ct = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Je = globalThis, nt = Je.ShadowRoot && (Je.ShadyCSS === void 0 || Je.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, st = Symbol(), ft = /* @__PURE__ */ new WeakMap();
let Pt = class {
  constructor(e, r, n) {
    if (this._$cssResult$ = !0, n !== st) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (nt && e === void 0) {
      const n = r !== void 0 && r.length === 1;
      n && (e = ft.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && ft.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const It = (t) => new Pt(typeof t == "string" ? t : t + "", void 0, st), zt = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + t[l + 1], t[0]);
  return new Pt(r, t, st);
}, Gt = (t, e) => {
  if (nt) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const n = document.createElement("style"), s = Je.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = r.cssText, t.appendChild(n);
  }
}, mt = nt ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const n of e.cssRules) r += n.cssText;
  return It(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Bt, defineProperty: Ft, getOwnPropertyDescriptor: Wt, getOwnPropertyNames: qt, getOwnPropertySymbols: Zt, getPrototypeOf: Jt } = Object, G = globalThis, vt = G.trustedTypes, Xt = vt ? vt.emptyScript : "", et = G.reactiveElementPolyfillSupport, be = (t, e) => t, Xe = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Xt : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let r = t;
  switch (e) {
    case Boolean:
      r = t !== null;
      break;
    case Number:
      r = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(t);
      } catch {
        r = null;
      }
  }
  return r;
} }, at = (t, e) => !Bt(t, e), yt = { attribute: !0, type: String, converter: Xe, reflect: !1, useDefault: !1, hasChanged: at };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), G.litPropertyMetadata ?? (G.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let K = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = yt) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, r);
      s !== void 0 && Ft(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, r, n) {
    const { get: s, set: l } = Wt(this.prototype, e) ?? { get() {
      return this[r];
    }, set(u) {
      this[r] = u;
    } };
    return { get: s, set(u) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? yt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(be("elementProperties"))) return;
    const e = Jt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(be("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(be("properties"))) {
      const r = this.properties, n = [...qt(r), ...Zt(r)];
      for (const s of n) this.createProperty(s, r[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [n, s] of r) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, n] of this.elementProperties) {
      const s = this._$Eu(r, n);
      s !== void 0 && this._$Eh.set(s, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const s of n) r.unshift(mt(s));
    } else e !== void 0 && r.push(mt(e));
    return r;
  }
  static _$Eu(e, r) {
    const n = r.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((r) => r(this));
  }
  addController(e) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((r = e.hostConnected) == null || r.call(e));
  }
  removeController(e) {
    var r;
    (r = this._$EO) == null || r.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const n of r.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Gt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((r) => {
      var n;
      return (n = r.hostConnected) == null ? void 0 : n.call(r);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var n;
      return (n = r.hostDisconnected) == null ? void 0 : n.call(r);
    });
  }
  attributeChangedCallback(e, r, n) {
    this._$AK(e, n);
  }
  _$ET(e, r) {
    var l;
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : Xe).toAttribute(r, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), f = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : Xe;
      this._$Em = s;
      const E = f.fromAttribute(r, _.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, r, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = _.getPropertyOptions(e)), !((n.hasChanged ?? at)(l, r) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, n)))) return;
      this.C(e, r, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? r ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (r = void 0), this._$AL.set(e, r)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
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
        const { wrapped: _ } = u, f = this[l];
        _ !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, u, f);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (n = this._$EO) == null || n.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(r)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$EO) == null || r.forEach((n) => {
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
K.elementStyles = [], K.shadowRootOptions = { mode: "open" }, K[be("elementProperties")] = /* @__PURE__ */ new Map(), K[be("finalized")] = /* @__PURE__ */ new Map(), et == null || et({ ReactiveElement: K }), (G.reactiveElementVersions ?? (G.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $e = globalThis, _t = (t) => t, Ye = $e.trustedTypes, bt = Ye ? Ye.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Ct = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, xt = "?" + z, Yt = `<${xt}>`, Z = document, Ae = () => Z.createComment(""), Ee = (t) => t === null || typeof t != "object" && typeof t != "function", ot = Array.isArray, Qt = (t) => ot(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", tt = `[ 	
\f\r]`, _e = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $t = /-->/g, wt = />/g, F = RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), At = /'/g, Et = /"/g, gt = /^(?:script|style|textarea|title)$/i, Kt = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), St = Kt(1), ee = Symbol.for("lit-noChange"), k = Symbol.for("lit-nothing"), Mt = /* @__PURE__ */ new WeakMap(), W = Z.createTreeWalker(Z, 129);
function kt(t, e) {
  if (!ot(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return bt !== void 0 ? bt.createHTML(e) : e;
}
const er = (t, e) => {
  const r = t.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = _e;
  for (let _ = 0; _ < r; _++) {
    const f = t[_];
    let E, A, b = -1, P = 0;
    for (; P < f.length && (u.lastIndex = P, A = u.exec(f), A !== null); ) P = u.lastIndex, u === _e ? A[1] === "!--" ? u = $t : A[1] !== void 0 ? u = wt : A[2] !== void 0 ? (gt.test(A[2]) && (s = RegExp("</" + A[2], "g")), u = F) : A[3] !== void 0 && (u = F) : u === F ? A[0] === ">" ? (u = s ?? _e, b = -1) : A[1] === void 0 ? b = -2 : (b = u.lastIndex - A[2].length, E = A[1], u = A[3] === void 0 ? F : A[3] === '"' ? Et : At) : u === Et || u === At ? u = F : u === $t || u === wt ? u = _e : (u = F, s = void 0);
    const V = u === F && t[_ + 1].startsWith("/>") ? " " : "";
    l += u === _e ? f + Yt : b >= 0 ? (n.push(E), f.slice(0, b) + Ct + f.slice(b) + z + V) : f + z + (b === -2 ? _ : V);
  }
  return [kt(t, l + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class Se {
  constructor({ strings: e, _$litType$: r }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, f = this.parts, [E, A] = er(e, r);
    if (this.el = Se.createElement(E, n), W.currentNode = this.el.content, r === 2 || r === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (s = W.nextNode()) !== null && f.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const b of s.getAttributeNames()) if (b.endsWith(Ct)) {
          const P = A[u++], V = s.getAttribute(b).split(z), H = /([.?@])?(.*)/.exec(P);
          f.push({ type: 1, index: l, name: H[2], strings: V, ctor: H[1] === "." ? rr : H[1] === "?" ? ir : H[1] === "@" ? nr : Qe }), s.removeAttribute(b);
        } else b.startsWith(z) && (f.push({ type: 6, index: l }), s.removeAttribute(b));
        if (gt.test(s.tagName)) {
          const b = s.textContent.split(z), P = b.length - 1;
          if (P > 0) {
            s.textContent = Ye ? Ye.emptyScript : "";
            for (let V = 0; V < P; V++) s.append(b[V], Ae()), W.nextNode(), f.push({ type: 2, index: ++l });
            s.append(b[P], Ae());
          }
        }
      } else if (s.nodeType === 8) if (s.data === xt) f.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = s.data.indexOf(z, b + 1)) !== -1; ) f.push({ type: 7, index: l }), b += z.length - 1;
      }
      l++;
    }
  }
  static createElement(e, r) {
    const n = Z.createElement("template");
    return n.innerHTML = e, n;
  }
}
function te(t, e, r = t, n) {
  var u, _;
  if (e === ee) return e;
  let s = n !== void 0 ? (u = r._$Co) == null ? void 0 : u[n] : r._$Cl;
  const l = Ee(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(t), s._$AT(t, r, n)), n !== void 0 ? (r._$Co ?? (r._$Co = []))[n] = s : r._$Cl = s), s !== void 0 && (e = te(t, s._$AS(t, e.values), s, n)), e;
}
class tr {
  constructor(e, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: r }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? Z).importNode(r, !0);
    W.currentNode = s;
    let l = W.nextNode(), u = 0, _ = 0, f = n[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let E;
        f.type === 2 ? E = new Me(l, l.nextSibling, this, e) : f.type === 1 ? E = new f.ctor(l, f.name, f.strings, this, e) : f.type === 6 && (E = new sr(l, this, e)), this._$AV.push(E), f = n[++_];
      }
      u !== (f == null ? void 0 : f.index) && (l = W.nextNode(), u++);
    }
    return W.currentNode = Z, s;
  }
  p(e) {
    let r = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, r), r += n.strings.length - 2) : n._$AI(e[r])), r++;
  }
}
class Me {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, n, s) {
    this.type = 2, this._$AH = k, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = r.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, r = this) {
    e = te(this, e, r), Ee(e) ? e === k || e == null || e === "" ? (this._$AH !== k && this._$AR(), this._$AH = k) : e !== this._$AH && e !== ee && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== k && Ee(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: r, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Se.createElement(kt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(r);
    else {
      const u = new tr(s, this), _ = u.u(this.options);
      u.p(r), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let r = Mt.get(e.strings);
    return r === void 0 && Mt.set(e.strings, r = new Se(e)), r;
  }
  k(e) {
    ot(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let n, s = 0;
    for (const l of e) s === r.length ? r.push(n = new Me(this.O(Ae()), this.O(Ae()), this, this.options)) : n = r[s], n._$AI(l), s++;
    s < r.length && (this._$AR(n && n._$AB.nextSibling, s), r.length = s);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, r); e !== this._$AB; ) {
      const s = _t(e).nextSibling;
      _t(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cv = e, (r = this._$AP) == null || r.call(this, e));
  }
}
class Qe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, n, s, l) {
    this.type = 1, this._$AH = k, this._$AN = void 0, this.element = e, this.name = r, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = k;
  }
  _$AI(e, r = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = te(this, e, r, 0), u = !Ee(e) || e !== this._$AH && e !== ee, u && (this._$AH = e);
    else {
      const _ = e;
      let f, E;
      for (e = l[0], f = 0; f < l.length - 1; f++) E = te(this, _[n + f], r, f), E === ee && (E = this._$AH[f]), u || (u = !Ee(E) || E !== this._$AH[f]), E === k ? e = k : e !== k && (e += (E ?? "") + l[f + 1]), this._$AH[f] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === k ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends Qe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === k ? void 0 : e;
  }
}
class ir extends Qe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== k);
  }
}
class nr extends Qe {
  constructor(e, r, n, s, l) {
    super(e, r, n, s, l), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = te(this, e, r, 0) ?? k) === ee) return;
    const n = this._$AH, s = e === k && n !== k || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== k && (n === k || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class sr {
  constructor(e, r, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    te(this, e);
  }
}
const rt = $e.litHtmlPolyfillSupport;
rt == null || rt(Se, Me), ($e.litHtmlVersions ?? ($e.litHtmlVersions = [])).push("3.3.3");
const ar = (t, e, r) => {
  const n = (r == null ? void 0 : r.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (r == null ? void 0 : r.renderBefore) ?? null;
    n._$litPart$ = s = new Me(e.insertBefore(Ae(), l), l, void 0, r ?? {});
  }
  return s._$AI(t), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis;
class we extends K {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const e = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = e.firstChild), e;
  }
  update(e) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ar(r, this.renderRoot, this.renderOptions);
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
    return ee;
  }
}
var Ot;
we._$litElement$ = !0, we.finalized = !0, (Ot = q.litElementHydrateSupport) == null || Ot.call(q, { LitElement: we });
const it = q.litElementPolyfillSupport;
it == null || it({ LitElement: we });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const or = { attribute: !0, type: String, converter: Xe, reflect: !1, hasChanged: at }, lr = (t = or, e, r) => {
  const { kind: n, metadata: s } = r;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((t = Object.create(t)).wrapped = !0), l.set(r.name, t), n === "accessor") {
    const { name: u } = r;
    return { set(_) {
      const f = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(u, f, t, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, t, _), _;
    } };
  }
  if (n === "setter") {
    const { name: u } = r;
    return function(_) {
      const f = this[u];
      e.call(this, _), this.requestUpdate(u, f, t, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function L(t) {
  return (e, r) => typeof r == "object" ? lr(t, e, r) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(t, e, r);
}
var ur = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, R = (t, e, r, n) => {
  for (var s = n > 1 ? void 0 : n ? hr(e, r) : e, l = t.length - 1, u; l >= 0; l--)
    (u = t[l]) && (s = (n ? u(e, r, s) : u(s)) || s);
  return n && s && ur(e, r, s), s;
};
function T(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let x = class extends we {
  constructor() {
    super(...arguments), this.item1Label = "Gender", this.item1Value = "Female", this.item2Label = "Birthday", this.item2Value = "Feb 24th, 1997", this.item3Label = "Phone Number", this.item3Value = "(239) 555-0108", this.item4Label = "Street Address", this.item4Value = "Jl. Diponegoro No. 21", this.item5Label = "City", this.item5Value = "Cilacap", this.item6Label = "ZIP Code", this.item6Value = "655849", this.item7Label = "Member Status", this.item7Value = "Active Member", this.item8Label = "Registered Date", this.item8Value = "Feb 24th, 1997";
  }
  static getStudioTemplate(t) {
    var re, Oe, Pe, Ce, xe, ge, ke, Re, Te, Le, Ve, Ne, De, ie, X, ne, se, ae, oe, le, ue, y, U, He, M, Ue, je, he, Ie, N, de, B, pe, ze, Y, ce, fe, me, ve, ye, Q, Ge, Be, Fe, We, I, qe, Ze;
    if (!t)
      return {
        kind: "generic",
        templateHtml: "<zero-metadata-card-1.0.0></zero-metadata-card-1.0.0>"
      };
    const e = T(((re = t == null ? void 0 : t.props) == null ? void 0 : re.item1Label) ?? ((Pe = (Oe = t == null ? void 0 : t.studio) == null ? void 0 : Oe.props) == null ? void 0 : Pe.item1Label) ?? "Gender"), r = T(((Ce = t == null ? void 0 : t.props) == null ? void 0 : Ce.item1Value) ?? ((ge = (xe = t == null ? void 0 : t.studio) == null ? void 0 : xe.props) == null ? void 0 : ge.item1Value) ?? "Female"), n = T(((ke = t == null ? void 0 : t.props) == null ? void 0 : ke.item2Label) ?? ((Te = (Re = t == null ? void 0 : t.studio) == null ? void 0 : Re.props) == null ? void 0 : Te.item2Label) ?? "Birthday"), s = T(((Le = t == null ? void 0 : t.props) == null ? void 0 : Le.item2Value) ?? ((Ne = (Ve = t == null ? void 0 : t.studio) == null ? void 0 : Ve.props) == null ? void 0 : Ne.item2Value) ?? "Feb 24th, 1997"), l = T(((De = t == null ? void 0 : t.props) == null ? void 0 : De.item3Label) ?? ((X = (ie = t == null ? void 0 : t.studio) == null ? void 0 : ie.props) == null ? void 0 : X.item3Label) ?? "Phone Number"), u = T(((ne = t == null ? void 0 : t.props) == null ? void 0 : ne.item3Value) ?? ((ae = (se = t == null ? void 0 : t.studio) == null ? void 0 : se.props) == null ? void 0 : ae.item3Value) ?? "(239) 555-0108"), _ = T(((oe = t == null ? void 0 : t.props) == null ? void 0 : oe.item4Label) ?? ((ue = (le = t == null ? void 0 : t.studio) == null ? void 0 : le.props) == null ? void 0 : ue.item4Label) ?? "Street Address"), f = T(((y = t == null ? void 0 : t.props) == null ? void 0 : y.item4Value) ?? ((He = (U = t == null ? void 0 : t.studio) == null ? void 0 : U.props) == null ? void 0 : He.item4Value) ?? "Jl. Diponegoro No. 21"), E = T(((M = t == null ? void 0 : t.props) == null ? void 0 : M.item5Label) ?? ((je = (Ue = t == null ? void 0 : t.studio) == null ? void 0 : Ue.props) == null ? void 0 : je.item5Label) ?? "City"), A = T(((he = t == null ? void 0 : t.props) == null ? void 0 : he.item5Value) ?? ((N = (Ie = t == null ? void 0 : t.studio) == null ? void 0 : Ie.props) == null ? void 0 : N.item5Value) ?? "Cilacap"), b = T(((de = t == null ? void 0 : t.props) == null ? void 0 : de.item6Label) ?? ((pe = (B = t == null ? void 0 : t.studio) == null ? void 0 : B.props) == null ? void 0 : pe.item6Label) ?? "ZIP Code"), P = T(((ze = t == null ? void 0 : t.props) == null ? void 0 : ze.item6Value) ?? ((ce = (Y = t == null ? void 0 : t.studio) == null ? void 0 : Y.props) == null ? void 0 : ce.item6Value) ?? "655849"), V = T(((fe = t == null ? void 0 : t.props) == null ? void 0 : fe.item7Label) ?? ((ve = (me = t == null ? void 0 : t.studio) == null ? void 0 : me.props) == null ? void 0 : ve.item7Label) ?? "Member Status"), H = T(((ye = t == null ? void 0 : t.props) == null ? void 0 : ye.item7Value) ?? ((Ge = (Q = t == null ? void 0 : t.studio) == null ? void 0 : Q.props) == null ? void 0 : Ge.item7Value) ?? "Active Member"), j = T(((Be = t == null ? void 0 : t.props) == null ? void 0 : Be.item8Label) ?? ((We = (Fe = t == null ? void 0 : t.studio) == null ? void 0 : Fe.props) == null ? void 0 : We.item8Label) ?? "Registered Date"), J = T(((I = t == null ? void 0 : t.props) == null ? void 0 : I.item8Value) ?? ((Ze = (qe = t == null ? void 0 : t.studio) == null ? void 0 : qe.props) == null ? void 0 : Ze.item8Value) ?? "Feb 24th, 1997");
    return {
      kind: "generic",
      templateHtml: `
        <zero-metadata-card-1.0.0
          item1-label="${e}"
          item1-value="${r}"
          item2-label="${n}"
          item2-value="${s}"
          item3-label="${l}"
          item3-value="${u}"
          item4-label="${_}"
          item4-value="${f}"
          item5-label="${E}"
          item5-value="${A}"
          item6-label="${b}"
          item6-value="${P}"
          item7-label="${V}"
          item7-value="${H}"
          item8-label="${j}"
          item8-value="${J}"
        ></zero-metadata-card-1.0.0>
      `
    };
  }
  render() {
    const t = [
      { label: this.item1Label, value: this.item1Value },
      { label: this.item2Label, value: this.item2Value },
      { label: this.item3Label, value: this.item3Value },
      { label: this.item4Label, value: this.item4Value },
      { label: this.item5Label, value: this.item5Value },
      { label: this.item6Label, value: this.item6Value },
      { label: this.item7Label, value: this.item7Value },
      { label: this.item8Label, value: this.item8Value }
    ];
    return St`
      <div class="card">
        <div class="grid">
          ${t.map((e) => St`
            <div class="item">
              <div class="label">${e.label}</div>
              <div class="val">${e.value}</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
};
x.styles = zt`
    :host {
      display: block;
      width: 100%;
    }
    .card {
      padding: 24px;
      border-radius: 16px;
      background: var(--uiv-surface-color, #ffffff);
      border: 1px solid var(--uiv-border-color, rgba(0, 0, 0, 0.05));
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      font-family: inherit;
      box-sizing: border-box;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px 20px;
    }
    @media (max-width: 600px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 400px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
    .item {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .label {
      font-size: 0.75rem;
      color: var(--uiv-text-muted, #94a3b8);
      font-weight: 500;
      text-transform: capitalize;
    }
    .val {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--uiv-text-color, #1e293b);
      word-break: break-word;
    }

    @media (max-width: 768px) {
      .card {
        padding: 16px;
      }
      .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px 12px;
      }
      .label {
        font-size: 0.7rem;
      }
      .val {
        font-size: 0.8rem;
      }
    }
  `;
R([
  L({ type: String, attribute: "item1-label" })
], x.prototype, "item1Label", 2);
R([
  L({ type: String, attribute: "item1-value" })
], x.prototype, "item1Value", 2);
R([
  L({ type: String, attribute: "item2-label" })
], x.prototype, "item2Label", 2);
R([
  L({ type: String, attribute: "item2-value" })
], x.prototype, "item2Value", 2);
R([
  L({ type: String, attribute: "item3-label" })
], x.prototype, "item3Label", 2);
R([
  L({ type: String, attribute: "item3-value" })
], x.prototype, "item3Value", 2);
R([
  L({ type: String, attribute: "item4-label" })
], x.prototype, "item4Label", 2);
R([
  L({ type: String, attribute: "item4-value" })
], x.prototype, "item4Value", 2);
R([
  L({ type: String, attribute: "item5-label" })
], x.prototype, "item5Label", 2);
R([
  L({ type: String, attribute: "item5-value" })
], x.prototype, "item5Value", 2);
R([
  L({ type: String, attribute: "item6-label" })
], x.prototype, "item6Label", 2);
R([
  L({ type: String, attribute: "item6-value" })
], x.prototype, "item6Value", 2);
R([
  L({ type: String, attribute: "item7-label" })
], x.prototype, "item7Label", 2);
R([
  L({ type: String, attribute: "item7-value" })
], x.prototype, "item7Value", 2);
R([
  L({ type: String, attribute: "item8-label" })
], x.prototype, "item8Label", 2);
R([
  L({ type: String, attribute: "item8-value" })
], x.prototype, "item8Value", 2);
x = R([
  Ut({
    name: "zero-metadata-card",
    version: "1.0.0",
    title: "Metadata Card",
    elementSelector: "zero-metadata-card",
    group: "Dashboard",
    iconName: "card-icon.png"
  }),
  jt()
], x);
export {
  x as ZeroMetadataCard
};
