var It = Object.defineProperty;
var jt = (r, e, t) => e in r ? It(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
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
    var t = typeof globalThis == "object" ? globalThis : typeof qe == "object" ? qe : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(p, A) {
      return function(w, g) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: g }), A && A(w, g);
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
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !m && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return we(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return we({ __proto__: null });
      } : function() {
        return we({});
      },
      has: A ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: A ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, g = Object.getPrototypeOf(Function), O = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : kt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Tt(), R = typeof WeakMap == "function" ? WeakMap : Rt(), j = o ? Symbol.for("@reflect-metadata:registry") : void 0, L = Ct(), X = Pt(L);
    function he(i, s, a, c) {
      if (_(a)) {
        if (!He(i))
          throw new TypeError();
        if (!Le(s))
          throw new TypeError();
        return bt(i, s);
      } else {
        if (!He(i))
          throw new TypeError();
        if (!M(s))
          throw new TypeError();
        if (!M(c) && !_(c) && !J(c))
          throw new TypeError();
        return J(c) && (c = void 0), a = I(a), $t(i, s, a, c);
      }
    }
    e("decorate", he);
    function de(i, s) {
      function a(c, v) {
        if (!M(c))
          throw new TypeError();
        if (!_(v) && !Ot(v))
          throw new TypeError();
        Ne(i, s, c, v);
      }
      return a;
    }
    e("metadata", de);
    function fe(i, s, a, c) {
      if (!M(a))
        throw new TypeError();
      return _(c) || (c = I(c)), Ne(i, s, a, c);
    }
    e("defineMetadata", fe);
    function ft(i, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = I(a)), ke(i, s, a);
    }
    e("hasMetadata", ft);
    function pt(i, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = I(a)), ge(i, s, a);
    }
    e("hasOwnMetadata", pt);
    function yt(i, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = I(a)), Te(i, s, a);
    }
    e("getMetadata", yt);
    function vt(i, s, a) {
      if (!M(s))
        throw new TypeError();
      return _(a) || (a = I(a)), Re(i, s, a);
    }
    e("getOwnMetadata", vt);
    function mt(i, s) {
      if (!M(i))
        throw new TypeError();
      return _(s) || (s = I(s)), De(i, s);
    }
    e("getMetadataKeys", mt);
    function _t(i, s) {
      if (!M(i))
        throw new TypeError();
      return _(s) || (s = I(s)), Ie(i, s);
    }
    e("getOwnMetadataKeys", _t);
    function gt(i, s, a) {
      if (!M(s))
        throw new TypeError();
      if (_(a) || (a = I(a)), !M(s))
        throw new TypeError();
      _(a) || (a = I(a));
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, a);
    }
    e("deleteMetadata", gt);
    function bt(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(s);
        if (!_(v) && !J(v)) {
          if (!Le(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function $t(i, s, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], C = P(s, a, c);
        if (!_(C) && !J(C)) {
          if (!M(C))
            throw new TypeError();
          c = C;
        }
      }
      return c;
    }
    function ke(i, s, a) {
      var c = ge(i, s, a);
      if (c)
        return !0;
      var v = $e(s);
      return J(v) ? !1 : ke(i, v, a);
    }
    function ge(i, s, a) {
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : Ue(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Te(i, s, a) {
      var c = ge(i, s, a);
      if (c)
        return Re(i, s, a);
      var v = $e(s);
      if (!J(v))
        return Te(i, v, a);
    }
    function Re(i, s, a) {
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Ne(i, s, a, c) {
      var v = Q(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function De(i, s) {
      var a = Ie(i, s), c = $e(i);
      if (c === null)
        return a;
      var v = De(c, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new k(), C = [], b = 0, h = a; b < h.length; b++) {
        var d = h[b], f = P.has(d);
        f || (P.add(d), C.push(d));
      }
      for (var y = 0, $ = v; y < $.length; y++) {
        var d = $[y], f = P.has(d);
        f || (P.add(d), C.push(d));
      }
      return C;
    }
    function Ie(i, s) {
      var a = Q(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
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
    function _(i) {
      return i === void 0;
    }
    function J(i) {
      return i === null;
    }
    function wt(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function At(i, s) {
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
      var a = "string", c = ze(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return Et(i);
    }
    function Et(i, s) {
      var a, c;
      {
        var v = i.toString;
        if (pe(v)) {
          var c = v.call(i);
          if (!M(c))
            return c;
        }
        var a = i.valueOf;
        if (pe(a)) {
          var c = a.call(i);
          if (!M(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ue(i) {
      return !!i;
    }
    function St(i) {
      return "" + i;
    }
    function I(i) {
      var s = At(i);
      return wt(s) ? s : St(s);
    }
    function He(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function pe(i) {
      return typeof i == "function";
    }
    function Le(i) {
      return typeof i == "function";
    }
    function Ot(i) {
      switch (je(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function be(i, s) {
      return i === s || i !== i && s !== s;
    }
    function ze(i, s) {
      var a = i[s];
      if (a != null) {
        if (!pe(a))
          throw new TypeError();
        return a;
      }
    }
    function Be(i) {
      var s = ze(i, u);
      if (!pe(s))
        throw new TypeError();
      var a = s.call(i);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function Ge(i) {
      return i.value;
    }
    function We(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Fe(i) {
      var s = i.return;
      s && s.call(i);
    }
    function $e(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === g || s !== g)
        return s;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var v = c.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function Mt() {
      var i;
      !_(j) && typeof t.Reflect < "u" && !(j in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = xt(t.Reflect));
      var s, a, c, v = new R(), P = {
        registerProvider: C,
        getProvider: h,
        setProvider: f
      };
      return P;
      function C(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case _(s):
            s = y;
            break;
          case s === y:
            break;
          case _(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            c === void 0 && (c = new k()), c.add(y);
            break;
        }
      }
      function b(y, $) {
        if (!_(s)) {
          if (s.isProviderFor(y, $))
            return s;
          if (!_(a)) {
            if (a.isProviderFor(y, $))
              return s;
            if (!_(c))
              for (var E = Be(c); ; ) {
                var S = We(E);
                if (!S)
                  return;
                var N = Ge(S);
                if (N.isProviderFor(y, $))
                  return Fe(E), N;
              }
          }
        }
        if (!_(i) && i.isProviderFor(y, $))
          return i;
      }
      function h(y, $) {
        var E = v.get(y), S;
        return _(E) || (S = E.get($)), _(S) && (S = b(y, $), _(S) || (_(E) && (E = new O(), v.set(y, E)), E.set($, S))), S;
      }
      function d(y) {
        if (_(y))
          throw new TypeError();
        return s === y || a === y || !_(c) && c.has(y);
      }
      function f(y, $, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = h(y, $);
        if (S !== E) {
          if (!_(S))
            return !1;
          var N = v.get(y);
          _(N) && (N = new O(), v.set(y, N)), N.set($, E);
        }
        return !0;
      }
    }
    function Ct() {
      var i;
      return !_(j) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[j]), _(i) && (i = Mt()), !_(j) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, j, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
      var s = new R(), a = {
        isProviderFor: function(d, f) {
          var y = s.get(d);
          return _(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: h
      };
      return L.registerProvider(a), a;
      function c(d, f, y) {
        var $ = s.get(d), E = !1;
        if (_($)) {
          if (!y)
            return;
          $ = new O(), s.set(d, $), E = !0;
        }
        var S = $.get(f);
        if (_(S)) {
          if (!y)
            return;
          if (S = new O(), $.set(f, S), !i.setProvider(d, f, a))
            throw $.delete(f), E && s.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(d, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        return _($) ? !1 : Ue($.has(d));
      }
      function P(d, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (!_($))
          return $.get(d);
      }
      function C(d, f, y, $) {
        var E = c(
          y,
          $,
          /*Create*/
          !0
        );
        E.set(d, f);
      }
      function b(d, f) {
        var y = [], $ = c(
          d,
          f,
          /*Create*/
          !1
        );
        if (_($))
          return y;
        for (var E = $.keys(), S = Be(E), N = 0; ; ) {
          var Ve = We(S);
          if (!Ve)
            return y.length = N, y;
          var Nt = Ge(Ve);
          try {
            y[N] = Nt;
          } catch (Dt) {
            try {
              Fe(S);
            } finally {
              throw Dt;
            }
          }
          N++;
        }
      }
      function h(d, f, y) {
        var $ = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (_($) || !$.delete(d))
          return !1;
        if ($.size === 0) {
          var E = s.get(f);
          _(E) || (E.delete(y), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function xt(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, C = new R(), b = {
        isProviderFor: function(h, d) {
          var f = C.get(h);
          return !_(f) && f.has(d) ? !0 : v(h, d).length ? (_(f) && (f = new k(), C.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return b;
    }
    function Q(i, s, a) {
      var c = L.getProvider(i, s);
      if (!_(c))
        return c;
      if (a) {
        if (L.setProvider(i, s, X))
          return X;
        throw new Error("Illegal state.");
      }
    }
    function kt() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function b(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), h;
          }, b.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: h, done: !0 };
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
          }), b.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, b.prototype.set = function(h, d) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, b.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, y = d + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, be(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, C);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(h, d) {
            if (!be(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (be(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return c;
      function v(b, h) {
        return b;
      }
      function P(b, h) {
        return h;
      }
      function C(b, h) {
        return [b, h];
      }
    }
    function Tt() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new O();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(a) {
            return this._map.has(a);
          }, s.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, s.prototype.delete = function(a) {
            return this._map.delete(a);
          }, s.prototype.clear = function() {
            this._map.clear();
          }, s.prototype.keys = function() {
            return this._map.keys();
          }, s.prototype.values = function() {
            return this._map.keys();
          }, s.prototype.entries = function() {
            return this._map.entries();
          }, s.prototype["@@iterator"] = function() {
            return this.keys();
          }, s.prototype[u] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function Rt() {
      var i = 16, s = w.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, h.prototype.set = function(d, f) {
            var y = v(
              d,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, h.prototype.delete = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = c();
          }, h;
        }()
      );
      function c() {
        var h;
        do
          h = "@@WeakMap@@" + b();
        while (w.has(s, h));
        return s[h] = !0, h;
      }
      function v(h, d) {
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: w.create() });
        }
        return h[a];
      }
      function P(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function C(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : P(d, h), d;
        }
        return P(new Array(h), h);
      }
      function b() {
        var h = C(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var y = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), y < 16 && (d += "0"), d += y.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function we(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ze || (Ze = {}));
function Ut(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ht(r) {
  return function(e) {
    if (Ut(r)) {
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
  return Ht(r);
}
function zt(r) {
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
        var A;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const w = new CSSStyleSheet(), g = (A = l.sheet) == null ? void 0 : A.cssRules;
          g && (Array.from(g).forEach((O) => w.insertRule(O.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          p.appendChild(w);
        }
        u.forEach((w) => {
          const g = w.cloneNode(!0);
          p.appendChild(g);
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
      let o = !0;
      if (typeof t == "string") {
        try {
          o = typeof e[t] != "function";
        } catch {
          o = !0;
        }
        o && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function le(r) {
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
const ye = globalThis, Me = ye.ShadowRoot && (ye.ShadyCSS === void 0 || ye.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ce = Symbol(), Ye = /* @__PURE__ */ new WeakMap();
let lt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ce) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Me && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ye.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ye.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (r) => new lt(typeof r == "string" ? r : r + "", void 0, Ce), Ft = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new lt(t, r, Ce);
}, Vt = (r, e) => {
  if (Me) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ye.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, Xe = Me ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Wt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Jt, defineProperty: qt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Xt, getPrototypeOf: Qt } = Object, H = globalThis, Qe = H.trustedTypes, Kt = Qe ? Qe.emptyScript : "", Ae = H.reactiveElementPolyfillSupport, re = (r, e) => r, ve = { toAttribute(r, e) {
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
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && qt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = Zt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: o, set(u) {
      const m = o == null ? void 0 : o.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ke;
  }
  static _$Ei() {
    if (this.hasOwnProperty(re("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(re("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(re("properties"))) {
      const t = this.properties, n = [...Yt(t), ...Xt(t)];
      for (const o of n) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, o] of t) this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const o = this._$Eu(t, n);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const o of n) t.unshift(Xe(o));
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
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ve).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const m = n.getPropertyOptions(o), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : ve;
      this._$Em = o;
      const A = p.fromAttribute(t, m.type);
      this[o] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? Pe)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: o, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) {
        const { wrapped: m } = u, p = this[l];
        m !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
      }), this.update(t)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
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
q.elementStyles = [], q.shadowRootOptions = { mode: "open" }, q[re("elementProperties")] = /* @__PURE__ */ new Map(), q[re("finalized")] = /* @__PURE__ */ new Map(), Ae == null || Ae({ ReactiveElement: q }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = globalThis, et = (r) => r, me = ne.trustedTypes, tt = me ? me.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ut = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, ct = "?" + U, er = `<${ct}>`, V = document, oe = () => V.createComment(""), se = (r) => r === null || typeof r != "object" && typeof r != "function", xe = Array.isArray, tr = (r) => xe(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Ee = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, rt = /-->/g, nt = />/g, z = RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), it = /'/g, ot = /"/g, ht = /^(?:script|style|textarea|title)$/i, rr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ee = rr(1), Z = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), st = /* @__PURE__ */ new WeakMap(), B = V.createTreeWalker(V, 129);
function dt(r, e) {
  if (!xe(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return tt !== void 0 ? tt.createHTML(e) : e;
}
const nr = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let m = 0; m < t; m++) {
    const p = r[m];
    let A, w, g = -1, O = 0;
    for (; O < p.length && (u.lastIndex = O, w = u.exec(p), w !== null); ) O = u.lastIndex, u === K ? w[1] === "!--" ? u = rt : w[1] !== void 0 ? u = nt : w[2] !== void 0 ? (ht.test(w[2]) && (o = RegExp("</" + w[2], "g")), u = z) : w[3] !== void 0 && (u = z) : u === z ? w[0] === ">" ? (u = o ?? K, g = -1) : w[1] === void 0 ? g = -2 : (g = u.lastIndex - w[2].length, A = w[1], u = w[3] === void 0 ? z : w[3] === '"' ? ot : it) : u === ot || u === it ? u = z : u === rt || u === nt ? u = K : (u = z, o = void 0);
    const k = u === z && r[m + 1].startsWith("/>") ? " " : "";
    l += u === K ? p + er : g >= 0 ? (n.push(A), p.slice(0, g) + ut + p.slice(g) + U + k) : p + U + (g === -2 ? m : k);
  }
  return [dt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ae {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, p = this.parts, [A, w] = nr(e, t);
    if (this.el = ae.createElement(A, n), B.currentNode = this.el.content, t === 2 || t === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (o = B.nextNode()) !== null && p.length < m; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const g of o.getAttributeNames()) if (g.endsWith(ut)) {
          const O = w[u++], k = o.getAttribute(g).split(U), R = /([.?@])?(.*)/.exec(O);
          p.push({ type: 1, index: l, name: R[2], strings: k, ctor: R[1] === "." ? or : R[1] === "?" ? sr : R[1] === "@" ? ar : _e }), o.removeAttribute(g);
        } else g.startsWith(U) && (p.push({ type: 6, index: l }), o.removeAttribute(g));
        if (ht.test(o.tagName)) {
          const g = o.textContent.split(U), O = g.length - 1;
          if (O > 0) {
            o.textContent = me ? me.emptyScript : "";
            for (let k = 0; k < O; k++) o.append(g[k], oe()), B.nextNode(), p.push({ type: 2, index: ++l });
            o.append(g[O], oe());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ct) p.push({ type: 2, index: l });
      else {
        let g = -1;
        for (; (g = o.data.indexOf(U, g + 1)) !== -1; ) p.push({ type: 7, index: l }), g += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = V.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Y(r, e, t = r, n) {
  var u, m;
  if (e === Z) return e;
  let o = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = se(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((m = o == null ? void 0 : o._$AO) == null || m.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = Y(r, o._$AS(r, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? V).importNode(t, !0);
    B.currentNode = o;
    let l = B.nextNode(), u = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new ue(l, l.nextSibling, this, e) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (A = new lr(l, this, e)), this._$AV.push(A), p = n[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = B.nextNode(), u++);
    }
    return B.currentNode = V, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ue {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = Y(this, e, t), se(e) ? e === x || e == null || e === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== x && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(V.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ae.createElement(dt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const u = new ir(o, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = st.get(e.strings);
    return t === void 0 && st.set(e.strings, t = new ae(e)), t;
  }
  k(e) {
    xe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new ue(this.O(oe()), this.O(oe()), this, this.options)) : n = t[o], n._$AI(l), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = et(e).nextSibling;
      et(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class _e {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, o, l) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = x;
  }
  _$AI(e, t = this, n, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = Y(this, e, t, 0), u = !se(e) || e !== this._$AH && e !== Z, u && (this._$AH = e);
    else {
      const m = e;
      let p, A;
      for (e = l[0], p = 0; p < l.length - 1; p++) A = Y(this, m[n + p], t, p), A === Z && (A = this._$AH[p]), u || (u = !se(A) || A !== this._$AH[p]), A === x ? e = x : e !== x && (e += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !o && this.j(e);
  }
  j(e) {
    e === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends _e {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === x ? void 0 : e;
  }
}
class sr extends _e {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== x);
  }
}
class ar extends _e {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Y(this, e, t, 0) ?? x) === Z) return;
    const n = this._$AH, o = e === x && n !== x || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== x && (n === x || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
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
    Y(this, e);
  }
}
const Se = ne.litHtmlPolyfillSupport;
Se == null || Se(ae, ue), (ne.litHtmlVersions ?? (ne.litHtmlVersions = [])).push("3.3.3");
const ur = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new ue(e.insertBefore(oe(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class ie extends q {
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
var at;
ie._$litElement$ = !0, ie.finalized = !0, (at = G.litElementHydrateSupport) == null || at.call(G, { LitElement: ie });
const Oe = G.litElementPolyfillSupport;
Oe == null || Oe({ LitElement: ie });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: ve, reflect: !1, hasChanged: Pe }, hr = (r = cr, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
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
function ce(r) {
  return (e, t) => typeof t == "object" ? hr(r, e, t) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
var dr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, D = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? fr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(e, t, o) : u(o)) || o);
  return n && o && dr(e, t, o), o;
};
const mr = {
  kind: "generic",
  templateHtml: [
    "<footer style='padding:32px 24px;background:#ffffff;border-top:1px solid #e5e7eb;font-family:inherit;box-sizing:border-box;'>",
    "<div style='display:flex;justify-content:space-between;align-items:center;'>",
    "<div style='font-size:14px;color:#9ca3af;'>© 2026 {{props:logo}} Inc. All rights reserved.</div>",
    "<div style='display:flex;gap:12px;font-size:14px;color:#4b5563;'>",
    "<span>Privacy</span><span>Terms</span>",
    "</div>",
    "</div>",
    "</footer>"
  ].join(""),
  labelProp: "logo",
  badges: ["Block", "Footer"]
};
function te(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let T = class extends ie {
  constructor() {
    super(...arguments), this.logo = "BrandName", this.copyright = "© 2026 BrandName Inc. All rights reserved.", this.columnsJson = '[{"title":"Product","links":[{"label":"Features","href":"#"},{"label":"Pricing","href":"#"},{"label":"Releases","href":"#"}]},{"title":"Resources","links":[{"label":"Blog","href":"#"},{"label":"Support","href":"#"},{"label":"Docs","href":"#"}]},{"title":"Legal","links":[{"label":"Privacy","href":"#"},{"label":"Terms","href":"#"},{"label":"Cookies","href":"#"}]}]', this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    var u, m, p, A, w, g, O, k, R, j, L, X, he, de, fe;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-block-footer-1.0.0></zero-block-footer-1.0.0>"
      };
    const e = te(((u = r == null ? void 0 : r.props) == null ? void 0 : u.logo) ?? ((p = (m = r == null ? void 0 : r.studio) == null ? void 0 : m.props) == null ? void 0 : p.logo) ?? "BrandName"), t = te(((A = r == null ? void 0 : r.props) == null ? void 0 : A.copyright) ?? ((g = (w = r == null ? void 0 : r.studio) == null ? void 0 : w.props) == null ? void 0 : g.copyright) ?? ""), n = te(((O = r == null ? void 0 : r.props) == null ? void 0 : O.columnsJson) ?? ((R = (k = r == null ? void 0 : r.studio) == null ? void 0 : k.props) == null ? void 0 : R.columnsJson) ?? "[]"), o = te(((j = r == null ? void 0 : r.props) == null ? void 0 : j.layout) ?? ((X = (L = r == null ? void 0 : r.studio) == null ? void 0 : L.props) == null ? void 0 : X.layout) ?? "layout-1"), l = te(((he = r == null ? void 0 : r.props) == null ? void 0 : he.themeStyle) ?? ((fe = (de = r == null ? void 0 : r.studio) == null ? void 0 : de.props) == null ? void 0 : fe.themeStyle) ?? "light");
    return {
      kind: "generic",
      templateHtml: `
        <zero-block-footer-1.0.0
          logo="${e}"
          copyright="${t}"
          columns-json="${n}"
          layout="${o}"
          theme-style="${l}"
        ></zero-block-footer-1.0.0>
      `
    };
  }
  get logoConfig() {
    return this.logo;
  }
  set logoConfig(r) {
    this.logo = r;
  }
  get copyrightConfig() {
    return this.copyright;
  }
  set copyrightConfig(r) {
    this.copyright = r;
  }
  get columnsJsonConfig() {
    return this.columnsJson;
  }
  set columnsJsonConfig(r) {
    this.columnsJson = r;
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
  parseColumns() {
    try {
      return JSON.parse(this.columnsJson);
    } catch {
      return [];
    }
  }
  render() {
    const r = this.parseColumns();
    return ee`
      <footer class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="container">
          ${this.layout === "layout-1" ? ee`
            <div class="columns-row">
              <div class="brand-section">
                <div class="brand-title">${this.logo}</div>
                <div class="brand-desc">Constructing beautiful web component layout systems dynamically with visual studio interface integrations.</div>
              </div>
              <div class="links-section">
                ${r.map((e) => ee`
                  <div>
                    <h4>${e.title}</h4>
                    <ul class="link-list">
                      ${e.links.map((t) => ee`
                        <li><a href="${t.href}">${t.label}</a></li>
                      `)}
                    </ul>
                  </div>
                `)}
              </div>
            </div>
            <div class="bottom-row">
              <div>${this.copyright}</div>
              <div class="social-links">
                <a class="social-link" href="#">Twitter</a>
                <a class="social-link" href="#">GitHub</a>
                <a class="social-link" href="#">Discord</a>
              </div>
            </div>
          ` : ee`
            <div class="inline-row">
              <div>${this.copyright}</div>
              <div class="social-links">
                <a class="social-link" href="#">Privacy Policy</a>
                <a class="social-link" href="#">Terms of Use</a>
                <a class="social-link" href="#">Socials</a>
              </div>
            </div>
          `}
        </div>
      </footer>
    `;
  }
};
T.styles = Ft`
    :host {
      display: block;
      width: 100%;
      --footer-bg: var(--uiv-surface-color, #ffffff);
      --footer-text: var(--uiv-text-color, #1f2937);
      --footer-lead: #4b5563;
      --footer-border: var(--uiv-border-color, #e5e7eb);
      --footer-accent: var(--uiv-primary-color, #6366f1);
    }

    footer {
      padding: 60px 5% 40px 5%;
      background: var(--footer-bg);
      color: var(--footer-text);
      border-top: 1px solid var(--footer-border);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    footer.theme-dark {
      --footer-bg: #111827;
      --footer-text: #f9fafb;
      --footer-border: #374151;
      --footer-lead: #9ca3af;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    /* ─── Layout 1: Multi-Column ─── */
    .columns-row {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      margin-bottom: 50px;
    }

    .brand-section {
      flex: 1.5;
      max-width: 320px;
    }

    .brand-title {
      font-size: 1.35rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
    }

    .brand-desc {
      font-size: 0.9rem;
      line-height: 1.5;
      color: var(--footer-lead);
    }

    .links-section {
      flex: 2.5;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 30px;
    }

    h4 {
      font-size: 0.88rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0 0 16px 0;
      color: var(--footer-accent);
    }

    .link-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .link-list a {
      font-size: 0.9rem;
      color: var(--footer-lead);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .link-list a:hover {
      color: var(--footer-text);
    }

    .bottom-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 30px;
      border-top: 1px solid var(--footer-border);
      font-size: 0.88rem;
      color: var(--footer-lead);
    }

    /* ─── Layout 2: Simple Inline ─── */
    .inline-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }

    .social-links {
      display: flex;
      gap: 16px;
    }

    .social-link {
      font-size: 0.94rem;
      font-weight: 600;
      color: var(--footer-lead);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .social-link:hover {
      color: var(--footer-accent);
    }

    @media (max-width: 768px) {
      .columns-row {
        flex-direction: column;
        gap: 30px;
      }
      .inline-row, .bottom-row {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }
    }
  `;
D([
  ce({ type: String })
], T.prototype, "logo", 2);
D([
  ce({ type: String })
], T.prototype, "copyright", 2);
D([
  ce({ type: String, attribute: "columns-json" })
], T.prototype, "columnsJson", 2);
D([
  ce({ type: String })
], T.prototype, "layout", 2);
D([
  ce({ type: String, attribute: "theme-style" })
], T.prototype, "themeStyle", 2);
D([
  le({
    attributeType: F.PROPERTY,
    uiComponentType: W.TEXT_INPUT,
    displayLabel: "Brand Text",
    fieldMappings: "logo"
  })
], T.prototype, "logoConfig", 1);
D([
  le({
    attributeType: F.PROPERTY,
    uiComponentType: W.TEXT_INPUT,
    displayLabel: "Copyright Statement",
    fieldMappings: "copyright"
  })
], T.prototype, "copyrightConfig", 1);
D([
  le({
    attributeType: F.PROPERTY,
    uiComponentType: W.TEXTAREA,
    displayLabel: "Footer Directory JSON",
    fieldMappings: "columnsJson"
  })
], T.prototype, "columnsJsonConfig", 1);
D([
  le({
    attributeType: F.PROPERTY,
    uiComponentType: W.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Multi-Column Links Directory", value: "layout-1" },
      { label: "Minimalist Inline Banner", value: "layout-2" }
    ]
  })
], T.prototype, "layoutConfig", 1);
D([
  le({
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
T = D([
  Lt({
    name: "zero-block-footer",
    version: "1.0.0",
    title: "Footer Block",
    elementSelector: "zero-block-footer",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  zt()
], T);
export {
  T as ZeroBlockFooter,
  mr as studioTemplate
};
