var Nt = Object.defineProperty;
var It = (i, e, t) => e in i ? Nt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Le = (i, e, t) => It(i, typeof e != "symbol" ? e + "" : e, t);
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
    }, w = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Tt(), N = typeof WeakMap == "function" ? WeakMap : Rt(), G = s ? Symbol.for("@reflect-metadata:registry") : void 0, ne = Mt(), Ae = Ot(ne);
    function ut(n, o, a, c) {
      if (m(a)) {
        if (!ke(n))
          throw new TypeError();
        if (!xe(o))
          throw new TypeError();
        return mt(n, o);
      } else {
        if (!ke(n))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(c) && !m(c) && !W(c))
          throw new TypeError();
        return W(c) && (c = void 0), a = x(a), gt(n, o, a, c);
      }
    }
    e("decorate", ut);
    function lt(n, o) {
      function a(c, v) {
        if (!M(c))
          throw new TypeError();
        if (!m(v) && !Et(v))
          throw new TypeError();
        Oe(n, o, c, v);
      }
      return a;
    }
    e("metadata", lt);
    function ct(n, o, a, c) {
      if (!M(a))
        throw new TypeError();
      return m(c) || (c = x(c)), Oe(n, o, a, c);
    }
    e("defineMetadata", ct);
    function dt(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = x(a)), Ee(n, o, a);
    }
    e("hasMetadata", dt);
    function ht(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = x(a)), de(n, o, a);
    }
    e("hasOwnMetadata", ht);
    function ft(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = x(a)), Se(n, o, a);
    }
    e("getMetadata", ft);
    function pt(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = x(a)), Me(n, o, a);
    }
    e("getOwnMetadata", pt);
    function yt(n, o) {
      if (!M(n))
        throw new TypeError();
      return m(o) || (o = x(o)), Ce(n, o);
    }
    e("getMetadataKeys", yt);
    function vt(n, o) {
      if (!M(n))
        throw new TypeError();
      return m(o) || (o = x(o)), Pe(n, o);
    }
    e("getOwnMetadataKeys", vt);
    function _t(n, o, a) {
      if (!M(o))
        throw new TypeError();
      if (m(a) || (a = x(a)), !M(o))
        throw new TypeError();
      m(a) || (a = x(a));
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(n, o, a);
    }
    e("deleteMetadata", _t);
    function mt(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var c = n[a], v = c(o);
        if (!m(v) && !W(v)) {
          if (!xe(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function gt(n, o, a, c) {
      for (var v = n.length - 1; v >= 0; --v) {
        var C = n[v], O = C(o, a, c);
        if (!m(O) && !W(O)) {
          if (!M(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Ee(n, o, a) {
      var c = de(n, o, a);
      if (c)
        return !0;
      var v = fe(o);
      return W(v) ? !1 : Ee(n, v, a);
    }
    function de(n, o, a) {
      var c = q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : Re(c.OrdinaryHasOwnMetadata(n, o, a));
    }
    function Se(n, o, a) {
      var c = de(n, o, a);
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
      if (!m(c))
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
    function Ce(n, o) {
      var a = Pe(n, o), c = fe(n);
      if (c === null)
        return a;
      var v = Ce(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var C = new R(), O = [], g = 0, d = a; g < d.length; g++) {
        var h = d[g], f = C.has(h);
        f || (C.add(h), O.push(h));
      }
      for (var p = 0, $ = v; p < $.length; p++) {
        var h = $[p], f = C.has(h);
        f || (C.add(h), O.push(h));
      }
      return O;
    }
    function Pe(n, o) {
      var a = q(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function Te(n) {
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
    function m(n) {
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
      switch (Te(n)) {
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
    function Re(n) {
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
      switch (Te(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function he(n, o) {
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
    function Ie(n) {
      var o = Ne(n, l);
      if (!ie(o))
        throw new TypeError();
      var a = o.call(n);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function Ue(n) {
      return n.value;
    }
    function je(n) {
      var o = n.next();
      return o.done ? !1 : o;
    }
    function De(n) {
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
      !m(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = Ct(t.Reflect));
      var o, a, c, v = new N(), C = {
        registerProvider: O,
        getProvider: d,
        setProvider: f
      };
      return C;
      function O(p) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === p:
            break;
          case m(o):
            o = p;
            break;
          case o === p:
            break;
          case m(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new R()), c.add(p);
            break;
        }
      }
      function g(p, $) {
        if (!m(o)) {
          if (o.isProviderFor(p, $))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(p, $))
              return o;
            if (!m(c))
              for (var E = Ie(c); ; ) {
                var S = je(E);
                if (!S)
                  return;
                var k = Ue(S);
                if (k.isProviderFor(p, $))
                  return De(E), k;
              }
          }
        }
        if (!m(n) && n.isProviderFor(p, $))
          return n;
      }
      function d(p, $) {
        var E = v.get(p), S;
        return m(E) || (S = E.get($)), m(S) && (S = g(p, $), m(S) || (m(E) && (E = new T(), v.set(p, E)), E.set($, S))), S;
      }
      function h(p) {
        if (m(p))
          throw new TypeError();
        return o === p || a === p || !m(c) && c.has(p);
      }
      function f(p, $, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = d(p, $);
        if (S !== E) {
          if (!m(S))
            return !1;
          var k = v.get(p);
          m(k) && (k = new T(), v.set(p, k)), k.set($, E);
        }
        return !0;
      }
    }
    function Mt() {
      var n;
      return !m(G) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[G]), m(n) && (n = St()), !m(G) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Ot(n) {
      var o = new N(), a = {
        isProviderFor: function(h, f) {
          var p = o.get(h);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: d
      };
      return ne.registerProvider(a), a;
      function c(h, f, p) {
        var $ = o.get(h), E = !1;
        if (m($)) {
          if (!p)
            return;
          $ = new T(), o.set(h, $), E = !0;
        }
        var S = $.get(f);
        if (m(S)) {
          if (!p)
            return;
          if (S = new T(), $.set(f, S), !n.setProvider(h, f, a))
            throw $.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        return m($) ? !1 : Re($.has(h));
      }
      function C(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(h);
      }
      function O(h, f, p, $) {
        var E = c(
          p,
          $,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function g(h, f) {
        var p = [], $ = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (m($))
          return p;
        for (var E = $.keys(), S = Ie(E), k = 0; ; ) {
          var He = je(S);
          if (!He)
            return p.length = k, p;
          var kt = Ue(He);
          try {
            p[k] = kt;
          } catch (xt) {
            try {
              De(S);
            } finally {
              throw xt;
            }
          }
          k++;
        }
      }
      function d(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var E = o.get(f);
          m(E) || (E.delete(p), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Ct(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, c = n.getOwnMetadata, v = n.getOwnMetadataKeys, C = n.deleteMetadata, O = new N(), g = {
        isProviderFor: function(d, h) {
          var f = O.get(d);
          return !m(f) && f.has(h) ? !0 : v(d, h).length ? (m(f) && (f = new R(), O.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return g;
    }
    function q(n, o, a) {
      var c = ne.getProvider(n, o);
      if (!m(c))
        return c;
      if (a) {
        if (ne.setProvider(n, o, Ae))
          return Ae;
        throw new Error("Illegal state.");
      }
    }
    function Pt() {
      var n = {}, o = [], a = (
        /** @class */
        function() {
          function g(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[l] = function() {
            return this;
          }, g.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, g.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, g;
        }()
      ), c = (
        /** @class */
        function() {
          function g() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(g.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), g.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, g.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, g.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, he(d, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[l] = function() {
            return this.entries();
          }, g.prototype._find = function(d, h) {
            if (!he(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (he(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function v(g, d) {
        return g;
      }
      function C(g, d) {
        return d;
      }
      function O(g, d) {
        return [g, d];
      }
    }
    function Tt() {
      var n = (
        /** @class */
        function() {
          function o() {
            this._map = new T();
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
    function Rt() {
      var n = 16, o = b.create(), a = c();
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
            var p = v(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
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
          d = "@@WeakMap@@" + g();
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
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, d), h;
        }
        return C(new Array(d), d);
      }
      function g() {
        var d = O(n);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < n; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function pe(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Ge || (Ge = {}));
function Ut(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function jt(i) {
  return function(e) {
    if (Ut(i)) {
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
function Dt(i) {
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
          w && (Array.from(w).forEach((T) => b.insertRule(T.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, b]);
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
      const r = [...Reflect.getMetadata("ZeroAttribute", e) || []];
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
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown", i.LAYOUT_PICKER = "layout-picker", i.RESPONSIVE_OVERRIDE = "responsive-override", i.IMAGE_PICKER = "image-picker", i.CHIPS = "chips";
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
const se = globalThis, ge = se.ShadowRoot && (se.ShadyCSS === void 0 || se.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), We = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ge && e === void 0) {
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
  if (ge) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), s = se.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = t.cssText, i.appendChild(r);
  }
}, Be = ge ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Gt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Ft, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Zt, getOwnPropertySymbols: Xt, getPrototypeOf: Yt } = Object, U = globalThis, Ve = U.trustedTypes, Jt = Ve ? Ve.emptyScript : "", ye = U.reactiveElementPolyfillSupport, X = (i, e) => i, ue = { toAttribute(i, e) {
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
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), U.litPropertyMetadata ?? (U.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
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
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[X("elementProperties")] = /* @__PURE__ */ new Map(), B[X("finalized")] = /* @__PURE__ */ new Map(), ye == null || ye({ ReactiveElement: B }), (U.reactiveElementVersions ?? (U.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, qe = (i) => i, le = Y.trustedTypes, Ze = le ? le.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, nt = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + I, Qt = `<${it}>`, L = document, Q = () => L.createComment(""), K = (i) => i === null || typeof i != "object" && typeof i != "function", be = Array.isArray, Kt = (i) => be(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", ve = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Xe = /-->/g, Ye = />/g, j = RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Je = /'/g, Qe = /"/g, st = /^(?:script|style|textarea|title)$/i, er = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), tr = er(1), V = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), Ke = /* @__PURE__ */ new WeakMap(), D = L.createTreeWalker(L, 129);
function ot(i, e) {
  if (!be(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const rr = (i, e) => {
  const t = i.length - 1, r = [];
  let s, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Z;
  for (let _ = 0; _ < t; _++) {
    const y = i[_];
    let A, b, w = -1, T = 0;
    for (; T < y.length && (l.lastIndex = T, b = l.exec(y), b !== null); ) T = l.lastIndex, l === Z ? b[1] === "!--" ? l = Xe : b[1] !== void 0 ? l = Ye : b[2] !== void 0 ? (st.test(b[2]) && (s = RegExp("</" + b[2], "g")), l = j) : b[3] !== void 0 && (l = j) : l === j ? b[0] === ">" ? (l = s ?? Z, w = -1) : b[1] === void 0 ? w = -2 : (w = l.lastIndex - b[2].length, A = b[1], l = b[3] === void 0 ? j : b[3] === '"' ? Qe : Je) : l === Qe || l === Je ? l = j : l === Xe || l === Ye ? l = Z : (l = j, s = void 0);
    const R = l === j && i[_ + 1].startsWith("/>") ? " " : "";
    u += l === Z ? y + Qt : w >= 0 ? (r.push(A), y.slice(0, w) + nt + y.slice(w) + I + R) : y + I + (w === -2 ? _ : R);
  }
  return [ot(i, u + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class ee {
  constructor({ strings: e, _$litType$: t }, r) {
    let s;
    this.parts = [];
    let u = 0, l = 0;
    const _ = e.length - 1, y = this.parts, [A, b] = rr(e, t);
    if (this.el = ee.createElement(A, r), D.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = D.nextNode()) !== null && y.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(nt)) {
          const T = b[l++], R = s.getAttribute(w).split(I), N = /([.?@])?(.*)/.exec(T);
          y.push({ type: 1, index: u, name: N[2], strings: R, ctor: N[1] === "." ? ir : N[1] === "?" ? sr : N[1] === "@" ? or : ce }), s.removeAttribute(w);
        } else w.startsWith(I) && (y.push({ type: 6, index: u }), s.removeAttribute(w));
        if (st.test(s.tagName)) {
          const w = s.textContent.split(I), T = w.length - 1;
          if (T > 0) {
            s.textContent = le ? le.emptyScript : "";
            for (let R = 0; R < T; R++) s.append(w[R], Q()), D.nextNode(), y.push({ type: 2, index: ++u });
            s.append(w[T], Q());
          }
        }
      } else if (s.nodeType === 8) if (s.data === it) y.push({ type: 2, index: u });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(I, w + 1)) !== -1; ) y.push({ type: 7, index: u }), w += I.length - 1;
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
    D.currentNode = s;
    let u = D.nextNode(), l = 0, _ = 0, y = r[0];
    for (; y !== void 0; ) {
      if (l === y.index) {
        let A;
        y.type === 2 ? A = new te(u, u.nextSibling, this, e) : y.type === 1 ? A = new y.ctor(u, y.name, y.strings, this, e) : y.type === 6 && (A = new ar(u, this, e)), this._$AV.push(A), y = r[++_];
      }
      l !== (y == null ? void 0 : y.index) && (u = D.nextNode(), l++);
    }
    return D.currentNode = L, s;
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
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = F(this, e, t), K(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== V && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Kt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && K(this._$AH) ? this._$AA.nextSibling.data = e : this.T(L.createTextNode(e)), this._$AH = e;
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
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = u, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = P;
  }
  _$AI(e, t = this, r, s) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = F(this, e, t, 0), l = !K(e) || e !== this._$AH && e !== V, l && (this._$AH = e);
    else {
      const _ = e;
      let y, A;
      for (e = u[0], y = 0; y < u.length - 1; y++) A = F(this, _[r + y], t, y), A === V && (A = this._$AH[y]), l || (l = !K(A) || A !== this._$AH[y]), A === P ? e = P : e !== P && (e += (A ?? "") + u[y + 1]), this._$AH[y] = A;
    }
    l && !s && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ir extends ce {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class sr extends ce {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class or extends ce {
  constructor(e, t, r, s, u) {
    super(e, t, r, s, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = F(this, e, t, 0) ?? P) === V) return;
    const r = this._$AH, s = e === P && r !== P || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, u = e !== P && (r === P || s);
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
const me = H.litElementPolyfillSupport;
me == null || me({ LitElement: J });
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
var dr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, re = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? hr(e, t) : e, u = i.length - 1, l; u >= 0; u--)
    (l = i[u]) && (s = (r ? l(e, t, s) : l(s)) || s);
  return r && s && dr(e, t, s), s;
};
let z = class extends J {
  constructor() {
    super(...arguments), this.serviceId = "", this.startNodeId = "";
  }
  get serviceIdConfig() {
    return this.serviceId;
  }
  set serviceIdConfig(i) {
    this.serviceId = i || "";
  }
  get startNodeIdConfig() {
    return this.startNodeId;
  }
  set startNodeIdConfig(i) {
    this.startNodeId = i || "";
  }
  render() {
    return tr`<div class="node"><div class="eyebrow">Call Service</div><strong>${this.serviceId || "Choose service"}</strong><div>${this.startNodeId || "Choose start node"}</div></div>`;
  }
};
z.styles = Wt`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(37,99,235,.22);background:#eff6ff;color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#1d4ed8;font-weight:700}`;
re([
  at({ type: String })
], z.prototype, "serviceId", 2);
re([
  at({ type: String })
], z.prototype, "startNodeId", 2);
re([
  tt({ attributeType: ae.PROPERTY, uiComponentType: oe.TEXT_INPUT, displayLabel: "Service Id", fieldMappings: "serviceId" })
], z.prototype, "serviceIdConfig", 1);
re([
  tt({ attributeType: ae.PROPERTY, uiComponentType: oe.TEXT_INPUT, displayLabel: "Start Node Id", fieldMappings: "startNodeId" })
], z.prototype, "startNodeIdConfig", 1);
z = re([
  Dt({ name: "zero-flow-node-call-service", version: "1.0.0", title: "Call Service Node", elementSelector: "zero-flow-node-call-service", group: "Flow Nodes", iconName: "flow-call-service-node.png" }),
  Ht()
], z);
export {
  z as ZeroFlowNodeCallService
};
