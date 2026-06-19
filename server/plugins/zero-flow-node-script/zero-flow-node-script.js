var Nt = Object.defineProperty;
var Ut = (i, e, t) => e in i ? Nt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Le = (i, e, t) => Ut(i, typeof e != "symbol" ? e + "" : e, t);
var ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ge;
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof ze == "object" ? ze : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = s(i);
    typeof t.Reflect < "u" && (r = s(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function s(y, A) {
      return function(b, w) {
        Object.defineProperty(y, b, { configurable: !0, writable: !0, value: w }), A && A(b, w);
      };
    }
    function u() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function l() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function _() {
      return u() || l();
    }
  })(function(e, t) {
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", u = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, A = !_ && !y, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return pe(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return pe({ __proto__: null });
      } : function() {
        return pe({});
      },
      has: A ? function(n, o) {
        return r.call(n, o);
      } : function(n, o) {
        return o in n;
      },
      get: A ? function(n, o) {
        return r.call(n, o) ? n[o] : void 0;
      } : function(n, o) {
        return n[o];
      }
    }, w = Object.getPrototypeOf(Function), R = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ct(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Rt(), N = typeof WeakMap == "function" ? WeakMap : Tt(), G = s ? Symbol.for("@reflect-metadata:registry") : void 0, ne = Mt(), Ae = Ot(ne);
    function ut(n, o, a, c) {
      if (g(a)) {
        if (!ke(n))
          throw new TypeError();
        if (!xe(o))
          throw new TypeError();
        return gt(n, o);
      } else {
        if (!ke(n))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(c) && !g(c) && !W(c))
          throw new TypeError();
        return W(c) && (c = void 0), a = x(a), mt(n, o, a, c);
      }
    }
    e("decorate", ut);
    function lt(n, o) {
      function a(c, v) {
        if (!M(c))
          throw new TypeError();
        if (!g(v) && !Et(v))
          throw new TypeError();
        Oe(n, o, c, v);
      }
      return a;
    }
    e("metadata", lt);
    function ct(n, o, a, c) {
      if (!M(a))
        throw new TypeError();
      return g(c) || (c = x(c)), Oe(n, o, a, c);
    }
    e("defineMetadata", ct);
    function ht(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return g(a) || (a = x(a)), Ee(n, o, a);
    }
    e("hasMetadata", ht);
    function dt(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return g(a) || (a = x(a)), he(n, o, a);
    }
    e("hasOwnMetadata", dt);
    function ft(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return g(a) || (a = x(a)), Se(n, o, a);
    }
    e("getMetadata", ft);
    function pt(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return g(a) || (a = x(a)), Me(n, o, a);
    }
    e("getOwnMetadata", pt);
    function yt(n, o) {
      if (!M(n))
        throw new TypeError();
      return g(o) || (o = x(o)), Pe(n, o);
    }
    e("getMetadataKeys", yt);
    function vt(n, o) {
      if (!M(n))
        throw new TypeError();
      return g(o) || (o = x(o)), Ce(n, o);
    }
    e("getOwnMetadataKeys", vt);
    function _t(n, o, a) {
      if (!M(o))
        throw new TypeError();
      if (g(a) || (a = x(a)), !M(o))
        throw new TypeError();
      g(a) || (a = x(a));
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(n, o, a);
    }
    e("deleteMetadata", _t);
    function gt(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var c = n[a], v = c(o);
        if (!g(v) && !W(v)) {
          if (!xe(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function mt(n, o, a, c) {
      for (var v = n.length - 1; v >= 0; --v) {
        var P = n[v], O = P(o, a, c);
        if (!g(O) && !W(O)) {
          if (!M(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Ee(n, o, a) {
      var c = he(n, o, a);
      if (c)
        return !0;
      var v = fe(o);
      return W(v) ? !1 : Ee(n, v, a);
    }
    function he(n, o, a) {
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Te(c.OrdinaryHasOwnMetadata(n, o, a));
    }
    function Se(n, o, a) {
      var c = he(n, o, a);
      if (c)
        return Me(n, o, a);
      var v = fe(o);
      if (!W(v))
        return Se(n, v, a);
    }
    function Me(n, o, a) {
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(n, o, a);
    }
    function Oe(n, o, a, c) {
      var v = q(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(n, o, a, c);
    }
    function Pe(n, o) {
      var a = Ce(n, o), c = fe(n);
      if (c === null)
        return a;
      var v = Pe(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new T(), O = [], m = 0, h = a; m < h.length; m++) {
        var d = h[m], f = P.has(d);
        f || (P.add(d), O.push(d));
      }
      for (var p = 0, $ = v; p < $.length; p++) {
        var d = $[p], f = P.has(d);
        f || (P.add(d), O.push(d));
      }
      return O;
    }
    function Ce(n, o) {
      var a = q(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function Re(n) {
      if (n === null)
        return 1;
      switch (typeof n) {
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
          return n === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function g(n) {
      return n === void 0;
    }
    function W(n) {
      return n === null;
    }
    function $t(n) {
      return typeof n == "symbol";
    }
    function M(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function wt(n, o) {
      switch (Re(n)) {
        case 0:
          return n;
        case 1:
          return n;
        case 2:
          return n;
        case 3:
          return n;
        case 4:
          return n;
        case 5:
          return n;
      }
      var a = "string", c = Ne(n, u);
      if (c !== void 0) {
        var v = c.call(n, a);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return bt(n);
    }
    function bt(n, o) {
      var a, c;
      {
        var v = n.toString;
        if (ie(v)) {
          var c = v.call(n);
          if (!M(c))
            return c;
        }
        var a = n.valueOf;
        if (ie(a)) {
          var c = a.call(n);
          if (!M(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Te(n) {
      return !!n;
    }
    function At(n) {
      return "" + n;
    }
    function x(n) {
      var o = wt(n);
      return $t(o) ? o : At(o);
    }
    function ke(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function ie(n) {
      return typeof n == "function";
    }
    function xe(n) {
      return typeof n == "function";
    }
    function Et(n) {
      switch (Re(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function de(n, o) {
      return n === o || n !== n && o !== o;
    }
    function Ne(n, o) {
      var a = n[o];
      if (a != null) {
        if (!ie(a))
          throw new TypeError();
        return a;
      }
    }
    function Ue(n) {
      var o = Ne(n, l);
      if (!ie(o))
        throw new TypeError();
      var a = o.call(n);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function De(n) {
      return n.value;
    }
    function je(n) {
      var o = n.next();
      return o.done ? !1 : o;
    }
    function Ie(n) {
      var o = n.return;
      o && o.call(n);
    }
    function fe(n) {
      var o = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === w || o !== w)
        return o;
      var a = n.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === n ? o : v;
    }
    function St() {
      var n;
      !g(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = Pt(t.Reflect));
      var o, a, c, v = new N(), P = {
        registerProvider: O,
        getProvider: h,
        setProvider: f
      };
      return P;
      function O(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === p:
            break;
          case g(o):
            o = p;
            break;
          case o === p:
            break;
          case g(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new T()), c.add(p);
            break;
        }
      }
      function m(p, $) {
        if (!g(o)) {
          if (o.isProviderFor(p, $))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(p, $))
              return o;
            if (!g(c))
              for (var E = Ue(c); ; ) {
                var S = je(E);
                if (!S)
                  return;
                var k = De(S);
                if (k.isProviderFor(p, $))
                  return Ie(E), k;
              }
          }
        }
        if (!g(n) && n.isProviderFor(p, $))
          return n;
      }
      function h(p, $) {
        var E = v.get(p), S;
        return g(E) || (S = E.get($)), g(S) && (S = m(p, $), g(S) || (g(E) && (E = new R(), v.set(p, E)), E.set($, S))), S;
      }
      function d(p) {
        if (g(p))
          throw new TypeError();
        return o === p || a === p || !g(c) && c.has(p);
      }
      function f(p, $, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = h(p, $);
        if (S !== E) {
          if (!g(S))
            return !1;
          var k = v.get(p);
          g(k) && (k = new R(), v.set(p, k)), k.set($, E);
        }
        return !0;
      }
    }
    function Mt() {
      var n;
      return !g(G) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[G]), g(n) && (n = St()), !g(G) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Ot(n) {
      var o = new N(), a = {
        isProviderFor: function(d, f) {
          var p = o.get(d);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: h
      };
      return ne.registerProvider(a), a;
      function c(d, f, p) {
        var $ = o.get(d), E = !1;
        if (g($)) {
          if (!p)
            return;
          $ = new R(), o.set(d, $), E = !0;
        }
        var S = $.get(f);
        if (g(S)) {
          if (!p)
            return;
          if (S = new R(), $.set(f, S), !n.setProvider(d, f, a))
            throw $.delete(f), E && o.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(d, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        return g($) ? !1 : Te($.has(d));
      }
      function P(d, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g($))
          return $.get(d);
      }
      function O(d, f, p, $) {
        var E = c(
          p,
          $,
          /*Create*/
          !0
        );
        E.set(d, f);
      }
      function m(d, f) {
        var p = [], $ = c(
          d,
          f,
          /*Create*/
          !1
        );
        if (g($))
          return p;
        for (var E = $.keys(), S = Ue(E), k = 0; ; ) {
          var He = je(S);
          if (!He)
            return p.length = k, p;
          var kt = De(He);
          try {
            p[k] = kt;
          } catch (xt) {
            try {
              Ie(S);
            } finally {
              throw xt;
            }
          }
          k++;
        }
      }
      function h(d, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (g($) || !$.delete(d))
          return !1;
        if ($.size === 0) {
          var E = o.get(f);
          g(E) || (E.delete(p), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Pt(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, c = n.getOwnMetadata, v = n.getOwnMetadataKeys, P = n.deleteMetadata, O = new N(), m = {
        isProviderFor: function(h, d) {
          var f = O.get(h);
          return !g(f) && f.has(d) ? !0 : v(h, d).length ? (g(f) && (f = new T(), O.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function q(n, o, a) {
      var c = ne.getProvider(n, o);
      if (!g(c))
        return c;
      if (a) {
        if (ne.setProvider(n, o, Ae))
          return Ae;
        throw new Error("Illegal state.");
      }
    }
    function Ct() {
      var n = {}, o = [], a = (
        /** @class */
        function() {
          function m(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[l] = function() {
            return this;
          }, m.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, m.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
          }, m;
        }()
      ), c = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, m.prototype.set = function(h, d) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, m.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, de(h, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[l] = function() {
            return this.entries();
          }, m.prototype._find = function(h, d) {
            if (!de(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (de(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return c;
      function v(m, h) {
        return m;
      }
      function P(m, h) {
        return h;
      }
      function O(m, h) {
        return [m, h];
      }
    }
    function Rt() {
      var n = (
        /** @class */
        function() {
          function o() {
            this._map = new R();
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
          }, o.prototype[l] = function() {
            return this.keys();
          }, o;
        }()
      );
      return n;
    }
    function Tt() {
      var n = 16, o = b.create(), a = c();
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
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
          }, h.prototype.set = function(d, f) {
            var p = v(
              d,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
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
          h = "@@WeakMap@@" + m();
        while (b.has(o, h));
        return o[h] = !0, h;
      }
      function v(h, d) {
        if (!r.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: b.create() });
        }
        return h[a];
      }
      function P(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function O(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : P(d, h), d;
        }
        return P(new Array(h), h);
      }
      function m() {
        var h = O(n);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < n; ++f) {
          var p = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function pe(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Ge || (Ge = {}));
function Dt(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function jt(i) {
  return function(e) {
    if (Dt(i)) {
      const t = {
        version: i.version,
        name: i.name,
        title: i.title,
        selector: i.elementSelector,
        category: i.group,
        icon: i.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const r = `${i.elementSelector}-${i.version}`;
        if (!customElements.get(r))
          try {
            customElements.define(r, e);
          } catch {
            try {
              customElements.define(r, class extends e {
              });
            } catch (u) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, u);
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
function It(i) {
  return jt(i);
}
function Ht(i) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Le(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(u) {
        try {
          super.update(u);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var A;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && _) {
          const b = new CSSStyleSheet(), w = (A = u.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((R) => b.insertRule(R.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, b]);
        } else if (u) {
          const b = u.cloneNode(!0);
          y.appendChild(b);
        }
        l.forEach((b) => {
          const w = b.cloneNode(!0);
          y.appendChild(w);
        });
      }
    }
    return t;
  };
}
function Lt(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function zt(i) {
  return function(e, t) {
    try {
      Lt(i);
      const r = Reflect.getMetadata("ZeroAttribute", e) || [];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (i.fieldMappings = i.fieldMappings ?? t);
      }
      r.push(i), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function tt(i) {
  return zt(i);
}
var oe;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown", i.LAYOUT_PICKER = "layout-picker", i.RESPONSIVE_OVERRIDE = "responsive-override", i.IMAGE_PICKER = "image-picker";
})(oe || (oe = {}));
var ae;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(ae || (ae = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const se = globalThis, me = se.ShadowRoot && (se.ShadyCSS === void 0 || se.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), We = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (me && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = We.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && We.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Gt = (i) => new rt(typeof i == "string" ? i : i + "", void 0, $e), Wt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((r, s, u) => r + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + i[u + 1], i[0]);
  return new rt(t, i, $e);
}, Bt = (i, e) => {
  if (me) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), s = se.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = t.cssText, i.appendChild(r);
  }
}, Be = me ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Gt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Ft, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Zt, getOwnPropertySymbols: Xt, getPrototypeOf: Yt } = Object, D = globalThis, Ve = D.trustedTypes, Jt = Ve ? Ve.emptyScript : "", ye = D.reactiveElementPolyfillSupport, X = (i, e) => i, ue = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? Jt : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, e) {
  let t = i;
  switch (e) {
    case Boolean:
      t = i !== null;
      break;
    case Number:
      t = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(i);
      } catch {
        t = null;
      }
  }
  return t;
} }, we = (i, e) => !Vt(i, e), Fe = { attribute: !0, type: String, converter: ue, reflect: !1, useDefault: !1, hasChanged: we };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let B = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Fe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(e, r, t);
      s !== void 0 && Ft(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: s, set: u } = qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get: s, set(l) {
      const _ = s == null ? void 0 : s.call(this);
      u == null || u.call(this, l), this.requestUpdate(e, _, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Fe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const e = Yt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const t = this.properties, r = [...Zt(t), ...Xt(t)];
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
      for (const s of r) t.unshift(Be(s));
    } else e !== void 0 && t.push(Be(e));
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
    return Bt(e, this.constructor.elementStyles), e;
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
    var u;
    const r = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, r);
    if (s !== void 0 && r.reflect === !0) {
      const l = (((u = r.converter) == null ? void 0 : u.toAttribute) !== void 0 ? r.converter : ue).toAttribute(t, r.type);
      this._$Em = e, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u, l;
    const r = this.constructor, s = r._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = r.getPropertyOptions(s), y = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((u = _.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? _.converter : ue;
      this._$Em = s;
      const A = y.fromAttribute(t, _.type);
      this[s] = A ?? ((l = this._$Ej) == null ? void 0 : l.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, s = !1, u) {
    var l;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (u = this[e]), r ?? (r = _.getPropertyOptions(e)), !((r.hasChanged ?? we)(u, t) || r.useDefault && r.reflect && u === ((l = this._$Ej) == null ? void 0 : l.get(e)) && !this.hasAttribute(_._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: s, wrapped: u }, l) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, l ?? t ?? this[e]), u !== !0 || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [u, l] of this._$Ep) this[u] = l;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [u, l] of s) {
        const { wrapped: _ } = l, y = this[u];
        _ !== !0 || this._$AL.has(u) || y === void 0 || this.C(u, void 0, l, y);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((s) => {
        var u;
        return (u = s.hostUpdate) == null ? void 0 : u.call(s);
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
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[X("elementProperties")] = /* @__PURE__ */ new Map(), B[X("finalized")] = /* @__PURE__ */ new Map(), ye == null || ye({ ReactiveElement: B }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, qe = (i) => i, le = Y.trustedTypes, Ze = le ? le.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, nt = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + U, Qt = `<${it}>`, L = document, Q = () => L.createComment(""), K = (i) => i === null || typeof i != "object" && typeof i != "function", be = Array.isArray, Kt = (i) => be(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", ve = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Xe = /-->/g, Ye = />/g, j = RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Je = /'/g, Qe = /"/g, st = /^(?:script|style|textarea|title)$/i, er = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), tr = er(1), V = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Ke = /* @__PURE__ */ new WeakMap(), I = L.createTreeWalker(L, 129);
function ot(i, e) {
  if (!be(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const rr = (i, e) => {
  const t = i.length - 1, r = [];
  let s, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Z;
  for (let _ = 0; _ < t; _++) {
    const y = i[_];
    let A, b, w = -1, R = 0;
    for (; R < y.length && (l.lastIndex = R, b = l.exec(y), b !== null); ) R = l.lastIndex, l === Z ? b[1] === "!--" ? l = Xe : b[1] !== void 0 ? l = Ye : b[2] !== void 0 ? (st.test(b[2]) && (s = RegExp("</" + b[2], "g")), l = j) : b[3] !== void 0 && (l = j) : l === j ? b[0] === ">" ? (l = s ?? Z, w = -1) : b[1] === void 0 ? w = -2 : (w = l.lastIndex - b[2].length, A = b[1], l = b[3] === void 0 ? j : b[3] === '"' ? Qe : Je) : l === Qe || l === Je ? l = j : l === Xe || l === Ye ? l = Z : (l = j, s = void 0);
    const T = l === j && i[_ + 1].startsWith("/>") ? " " : "";
    u += l === Z ? y + Qt : w >= 0 ? (r.push(A), y.slice(0, w) + nt + y.slice(w) + U + T) : y + U + (w === -2 ? _ : T);
  }
  return [ot(i, u + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class ee {
  constructor({ strings: e, _$litType$: t }, r) {
    let s;
    this.parts = [];
    let u = 0, l = 0;
    const _ = e.length - 1, y = this.parts, [A, b] = rr(e, t);
    if (this.el = ee.createElement(A, r), I.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = I.nextNode()) !== null && y.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(nt)) {
          const R = b[l++], T = s.getAttribute(w).split(U), N = /([.?@])?(.*)/.exec(R);
          y.push({ type: 1, index: u, name: N[2], strings: T, ctor: N[1] === "." ? ir : N[1] === "?" ? sr : N[1] === "@" ? or : ce }), s.removeAttribute(w);
        } else w.startsWith(U) && (y.push({ type: 6, index: u }), s.removeAttribute(w));
        if (st.test(s.tagName)) {
          const w = s.textContent.split(U), R = w.length - 1;
          if (R > 0) {
            s.textContent = le ? le.emptyScript : "";
            for (let T = 0; T < R; T++) s.append(w[T], Q()), I.nextNode(), y.push({ type: 2, index: ++u });
            s.append(w[R], Q());
          }
        }
      } else if (s.nodeType === 8) if (s.data === it) y.push({ type: 2, index: u });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(U, w + 1)) !== -1; ) y.push({ type: 7, index: u }), w += U.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const r = L.createElement("template");
    return r.innerHTML = e, r;
  }
}
function F(i, e, t = i, r) {
  var l, _;
  if (e === V) return e;
  let s = r !== void 0 ? (l = t._$Co) == null ? void 0 : l[r] : t._$Cl;
  const u = K(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== u && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), u === void 0 ? s = void 0 : (s = new u(i), s._$AT(i, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = s : t._$Cl = s), s !== void 0 && (e = F(i, s._$AS(i, e.values), s, r)), e;
}
class nr {
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
    const { el: { content: t }, parts: r } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? L).importNode(t, !0);
    I.currentNode = s;
    let u = I.nextNode(), l = 0, _ = 0, y = r[0];
    for (; y !== void 0; ) {
      if (l === y.index) {
        let A;
        y.type === 2 ? A = new te(u, u.nextSibling, this, e) : y.type === 1 ? A = new y.ctor(u, y.name, y.strings, this, e) : y.type === 6 && (A = new ar(u, this, e)), this._$AV.push(A), y = r[++_];
      }
      l !== (y == null ? void 0 : y.index) && (u = I.nextNode(), l++);
    }
    return I.currentNode = L, s;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class te {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = F(this, e, t), K(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== V && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Kt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && K(this._$AH) ? this._$AA.nextSibling.data = e : this.T(L.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: r } = e, s = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = ee.createElement(ot(r.h, r.h[0]), this.options)), r);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === s) this._$AH.p(t);
    else {
      const l = new nr(s, this), _ = l.u(this.options);
      l.p(t), this.T(_), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = Ke.get(e.strings);
    return t === void 0 && Ke.set(e.strings, t = new ee(e)), t;
  }
  k(e) {
    be(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, s = 0;
    for (const u of e) s === t.length ? t.push(r = new te(this.O(Q()), this.O(Q()), this, this.options)) : r = t[s], r._$AI(u), s++;
    s < t.length && (this._$AR(r && r._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = qe(e).nextSibling;
      qe(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ce {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, s, u) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = u, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = C;
  }
  _$AI(e, t = this, r, s) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = F(this, e, t, 0), l = !K(e) || e !== this._$AH && e !== V, l && (this._$AH = e);
    else {
      const _ = e;
      let y, A;
      for (e = u[0], y = 0; y < u.length - 1; y++) A = F(this, _[r + y], t, y), A === V && (A = this._$AH[y]), l || (l = !K(A) || A !== this._$AH[y]), A === C ? e = C : e !== C && (e += (A ?? "") + u[y + 1]), this._$AH[y] = A;
    }
    l && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ir extends ce {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class sr extends ce {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class or extends ce {
  constructor(e, t, r, s, u) {
    super(e, t, r, s, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = F(this, e, t, 0) ?? C) === V) return;
    const r = this._$AH, s = e === C && r !== C || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, u = e !== C && (r === C || s);
    s && this.element.removeEventListener(this.name, this, r), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ar {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    F(this, e);
  }
}
const _e = Y.litHtmlPolyfillSupport;
_e == null || _e(ee, te), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.3.3");
const ur = (i, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = r._$litPart$;
  if (s === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = s = new te(e.insertBefore(Q(), u), u, void 0, t ?? {});
  }
  return s._$AI(i), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis;
class J extends B {
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
    return V;
  }
}
var et;
J._$litElement$ = !0, J.finalized = !0, (et = H.litElementHydrateSupport) == null || et.call(H, { LitElement: J });
const ge = H.litElementPolyfillSupport;
ge == null || ge({ LitElement: J });
(H.litElementVersions ?? (H.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lr = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: we }, cr = (i = lr, e, t) => {
  const { kind: r, metadata: s } = t;
  let u = globalThis.litPropertyMetadata.get(s);
  if (u === void 0 && globalThis.litPropertyMetadata.set(s, u = /* @__PURE__ */ new Map()), r === "setter" && ((i = Object.create(i)).wrapped = !0), u.set(t.name, i), r === "accessor") {
    const { name: l } = t;
    return { set(_) {
      const y = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(l, y, i, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(l, void 0, i, _), _;
    } };
  }
  if (r === "setter") {
    const { name: l } = t;
    return function(_) {
      const y = this[l];
      e.call(this, _), this.requestUpdate(l, y, i, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function at(i) {
  return (e, t) => typeof t == "object" ? cr(i, e, t) : ((r, s, u) => {
    const l = s.hasOwnProperty(u);
    return s.constructor.createProperty(u, r), l ? Object.getOwnPropertyDescriptor(s, u) : void 0;
  })(i, e, t);
}
var hr = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, re = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? dr(e, t) : e, u = i.length - 1, l; u >= 0; u--)
    (l = i[u]) && (s = (r ? l(e, t, s) : l(s)) || s);
  return r && s && hr(e, t, s), s;
};
let z = class extends J {
  constructor() {
    super(...arguments), this.language = "typescript", this.code = "return input;";
  }
  get languageConfig() {
    return this.language;
  }
  set languageConfig(i) {
    this.language = i || "typescript";
  }
  get codeConfig() {
    return this.code;
  }
  set codeConfig(i) {
    this.code = i || "return input;";
  }
  render() {
    return tr`<div class="node"><div class="eyebrow">Script</div><strong>${this.language}</strong><pre>${this.code}</pre></div>`;
  }
};
z.styles = Wt`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(15,23,42,.16);background:#fff;color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#334155;font-weight:700}pre{margin:8px 0 0;background:#0f172a;color:#e2e8f0;border-radius:12px;padding:10px;white-space:pre-wrap}`;
re([
  at({ type: String })
], z.prototype, "language", 2);
re([
  at({ type: String })
], z.prototype, "code", 2);
re([
  tt({ attributeType: ae.PROPERTY, uiComponentType: oe.DROPDOWN, displayLabel: "Language", fieldMappings: "language", optionItems: [{ label: "TypeScript", value: "typescript" }, { label: "JavaScript", value: "javascript" }] })
], z.prototype, "languageConfig", 1);
re([
  tt({ attributeType: ae.PROPERTY, uiComponentType: oe.TEXTAREA, displayLabel: "Code", fieldMappings: "code" })
], z.prototype, "codeConfig", 1);
z = re([
  It({ name: "zero-flow-node-script", version: "1.0.0", title: "Script Node", elementSelector: "zero-flow-node-script", group: "Flow Nodes", iconName: "flow-script-node.png" }),
  Ht()
], z);
export {
  z as ZeroFlowNodeScript
};
