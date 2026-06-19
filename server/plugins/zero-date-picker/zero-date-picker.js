var Ht = Object.defineProperty;
var Bt = (t, e, r) => e in t ? Ht(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Ve = (t, e, r) => Bt(t, typeof e != "symbol" ? e + "" : e, r);
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
var Ye;
(function(t) {
  (function(e) {
    var r = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : v(), i = a(t);
    typeof r.Reflect < "u" && (i = a(r.Reflect, i)), e(i, r), typeof r.Reflect > "u" && (r.Reflect = t);
    function a(f, S) {
      return function(T, b) {
        Object.defineProperty(f, T, { configurable: !0, writable: !0, value: b }), S && S(T, b);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function d() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function v() {
      return l() || d();
    }
  })(function(e, r) {
    var i = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", l = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", d = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, S = !v && !f, T = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return me(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return me({ __proto__: null });
      } : function() {
        return me({});
      },
      has: S ? function(n, s) {
        return i.call(n, s);
      } : function(n, s) {
        return s in n;
      },
      get: S ? function(n, s) {
        return i.call(n, s) ? n[s] : void 0;
      } : function(n, s) {
        return n[s];
      }
    }, b = Object.getPrototypeOf(Function), A = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Rt(), L = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Nt(), B = typeof WeakMap == "function" ? WeakMap : It(), G = a ? Symbol.for("@reflect-metadata:registry") : void 0, de = Pt(), xe = At(de);
    function pt(n, s, o, u) {
      if (m(o)) {
        if (!Ie(n))
          throw new TypeError();
        if (!Le(s))
          throw new TypeError();
        return Et(n, s);
      } else {
        if (!Ie(n))
          throw new TypeError();
        if (!k(s))
          throw new TypeError();
        if (!k(u) && !m(u) && !Z(u))
          throw new TypeError();
        return Z(u) && (u = void 0), o = j(o), Tt(n, s, o, u);
      }
    }
    e("decorate", pt);
    function ft(n, s) {
      function o(u, g) {
        if (!k(u))
          throw new TypeError();
        if (!m(g) && !Ot(g))
          throw new TypeError();
        Pe(n, s, u, g);
      }
      return o;
    }
    e("metadata", ft);
    function yt(n, s, o, u) {
      if (!k(o))
        throw new TypeError();
      return m(u) || (u = j(u)), Pe(n, s, o, u);
    }
    e("defineMetadata", yt);
    function vt(n, s, o) {
      if (!k(s))
        throw new TypeError();
      return m(o) || (o = j(o)), Ce(n, s, o);
    }
    e("hasMetadata", vt);
    function gt(n, s, o) {
      if (!k(s))
        throw new TypeError();
      return m(o) || (o = j(o)), ye(n, s, o);
    }
    e("hasOwnMetadata", gt);
    function mt(n, s, o) {
      if (!k(s))
        throw new TypeError();
      return m(o) || (o = j(o)), Oe(n, s, o);
    }
    e("getMetadata", mt);
    function bt(n, s, o) {
      if (!k(s))
        throw new TypeError();
      return m(o) || (o = j(o)), Me(n, s, o);
    }
    e("getOwnMetadata", bt);
    function wt(n, s) {
      if (!k(n))
        throw new TypeError();
      return m(s) || (s = j(s)), Ae(n, s);
    }
    e("getMetadataKeys", wt);
    function _t(n, s) {
      if (!k(n))
        throw new TypeError();
      return m(s) || (s = j(s)), ke(n, s);
    }
    e("getOwnMetadataKeys", _t);
    function $t(n, s, o) {
      if (!k(s))
        throw new TypeError();
      if (m(o) || (o = j(o)), !k(s))
        throw new TypeError();
      m(o) || (o = j(o));
      var u = ee(
        s,
        o,
        /*Create*/
        !1
      );
      return m(u) ? !1 : u.OrdinaryDeleteMetadata(n, s, o);
    }
    e("deleteMetadata", $t);
    function Et(n, s) {
      for (var o = n.length - 1; o >= 0; --o) {
        var u = n[o], g = u(s);
        if (!m(g) && !Z(g)) {
          if (!Le(g))
            throw new TypeError();
          s = g;
        }
      }
      return s;
    }
    function Tt(n, s, o, u) {
      for (var g = n.length - 1; g >= 0; --g) {
        var N = n[g], R = N(s, o, u);
        if (!m(R) && !Z(R)) {
          if (!k(R))
            throw new TypeError();
          u = R;
        }
      }
      return u;
    }
    function Ce(n, s, o) {
      var u = ye(n, s, o);
      if (u)
        return !0;
      var g = ge(s);
      return Z(g) ? !1 : Ce(n, g, o);
    }
    function ye(n, s, o) {
      var u = ee(
        s,
        o,
        /*Create*/
        !1
      );
      return m(u) ? !1 : Ne(u.OrdinaryHasOwnMetadata(n, s, o));
    }
    function Oe(n, s, o) {
      var u = ye(n, s, o);
      if (u)
        return Me(n, s, o);
      var g = ge(s);
      if (!Z(g))
        return Oe(n, g, o);
    }
    function Me(n, s, o) {
      var u = ee(
        s,
        o,
        /*Create*/
        !1
      );
      if (!m(u))
        return u.OrdinaryGetOwnMetadata(n, s, o);
    }
    function Pe(n, s, o, u) {
      var g = ee(
        o,
        u,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(n, s, o, u);
    }
    function Ae(n, s) {
      var o = ke(n, s), u = ge(n);
      if (u === null)
        return o;
      var g = Ae(u, s);
      if (g.length <= 0)
        return o;
      if (o.length <= 0)
        return g;
      for (var N = new L(), R = [], w = 0, c = o; w < c.length; w++) {
        var h = c[w], p = N.has(h);
        p || (N.add(h), R.push(h));
      }
      for (var y = 0, $ = g; y < $.length; y++) {
        var h = $[y], p = N.has(h);
        p || (N.add(h), R.push(h));
      }
      return R;
    }
    function ke(n, s) {
      var o = ee(
        n,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(n, s) : [];
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
    function m(n) {
      return n === void 0;
    }
    function Z(n) {
      return n === null;
    }
    function St(n) {
      return typeof n == "symbol";
    }
    function k(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function Dt(n, s) {
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
      var o = "string", u = Ue(n, l);
      if (u !== void 0) {
        var g = u.call(n, o);
        if (k(g))
          throw new TypeError();
        return g;
      }
      return xt(n);
    }
    function xt(n, s) {
      var o, u;
      {
        var g = n.toString;
        if (ue(g)) {
          var u = g.call(n);
          if (!k(u))
            return u;
        }
        var o = n.valueOf;
        if (ue(o)) {
          var u = o.call(n);
          if (!k(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Ne(n) {
      return !!n;
    }
    function Ct(n) {
      return "" + n;
    }
    function j(n) {
      var s = Dt(n);
      return St(s) ? s : Ct(s);
    }
    function Ie(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function ue(n) {
      return typeof n == "function";
    }
    function Le(n) {
      return typeof n == "function";
    }
    function Ot(n) {
      switch (Re(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ve(n, s) {
      return n === s || n !== n && s !== s;
    }
    function Ue(n, s) {
      var o = n[s];
      if (o != null) {
        if (!ue(o))
          throw new TypeError();
        return o;
      }
    }
    function He(n) {
      var s = Ue(n, d);
      if (!ue(s))
        throw new TypeError();
      var o = s.call(n);
      if (!k(o))
        throw new TypeError();
      return o;
    }
    function Be(n) {
      return n.value;
    }
    function je(n) {
      var s = n.next();
      return s.done ? !1 : s;
    }
    function ze(n) {
      var s = n.return;
      s && s.call(n);
    }
    function ge(n) {
      var s = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === b || s !== b)
        return s;
      var o = n.prototype, u = o && Object.getPrototypeOf(o);
      if (u == null || u === Object.prototype)
        return s;
      var g = u.constructor;
      return typeof g != "function" || g === n ? s : g;
    }
    function Mt() {
      var n;
      !m(G) && typeof r.Reflect < "u" && !(G in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (n = kt(r.Reflect));
      var s, o, u, g = new B(), N = {
        registerProvider: R,
        getProvider: c,
        setProvider: p
      };
      return N;
      function R(y) {
        if (!Object.isExtensible(N))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === y:
            break;
          case m(s):
            s = y;
            break;
          case s === y:
            break;
          case m(o):
            o = y;
            break;
          case o === y:
            break;
          default:
            u === void 0 && (u = new L()), u.add(y);
            break;
        }
      }
      function w(y, $) {
        if (!m(s)) {
          if (s.isProviderFor(y, $))
            return s;
          if (!m(o)) {
            if (o.isProviderFor(y, $))
              return s;
            if (!m(u))
              for (var O = He(u); ; ) {
                var P = je(O);
                if (!P)
                  return;
                var H = Be(P);
                if (H.isProviderFor(y, $))
                  return ze(O), H;
              }
          }
        }
        if (!m(n) && n.isProviderFor(y, $))
          return n;
      }
      function c(y, $) {
        var O = g.get(y), P;
        return m(O) || (P = O.get($)), m(P) && (P = w(y, $), m(P) || (m(O) && (O = new A(), g.set(y, O)), O.set($, P))), P;
      }
      function h(y) {
        if (m(y))
          throw new TypeError();
        return s === y || o === y || !m(u) && u.has(y);
      }
      function p(y, $, O) {
        if (!h(O))
          throw new Error("Metadata provider not registered.");
        var P = c(y, $);
        if (P !== O) {
          if (!m(P))
            return !1;
          var H = g.get(y);
          m(H) && (H = new A(), g.set(y, H)), H.set($, O);
        }
        return !0;
      }
    }
    function Pt() {
      var n;
      return !m(G) && k(r.Reflect) && Object.isExtensible(r.Reflect) && (n = r.Reflect[G]), m(n) && (n = Mt()), !m(G) && k(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function At(n) {
      var s = new B(), o = {
        isProviderFor: function(h, p) {
          var y = s.get(h);
          return m(y) ? !1 : y.has(p);
        },
        OrdinaryDefineOwnMetadata: R,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: N,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: c
      };
      return de.registerProvider(o), o;
      function u(h, p, y) {
        var $ = s.get(h), O = !1;
        if (m($)) {
          if (!y)
            return;
          $ = new A(), s.set(h, $), O = !0;
        }
        var P = $.get(p);
        if (m(P)) {
          if (!y)
            return;
          if (P = new A(), $.set(p, P), !n.setProvider(h, p, o))
            throw $.delete(p), O && s.delete(h), new Error("Wrong provider for target.");
        }
        return P;
      }
      function g(h, p, y) {
        var $ = u(
          p,
          y,
          /*Create*/
          !1
        );
        return m($) ? !1 : Ne($.has(h));
      }
      function N(h, p, y) {
        var $ = u(
          p,
          y,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(h);
      }
      function R(h, p, y, $) {
        var O = u(
          y,
          $,
          /*Create*/
          !0
        );
        O.set(h, p);
      }
      function w(h, p) {
        var y = [], $ = u(
          h,
          p,
          /*Create*/
          !1
        );
        if (m($))
          return y;
        for (var O = $.keys(), P = He(O), H = 0; ; ) {
          var Fe = je(P);
          if (!Fe)
            return y.length = H, y;
          var Lt = Be(Fe);
          try {
            y[H] = Lt;
          } catch (Ut) {
            try {
              ze(P);
            } finally {
              throw Ut;
            }
          }
          H++;
        }
      }
      function c(h, p, y) {
        var $ = u(
          p,
          y,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var O = s.get(p);
          m(O) || (O.delete(y), O.size === 0 && s.delete(O));
        }
        return !0;
      }
    }
    function kt(n) {
      var s = n.defineMetadata, o = n.hasOwnMetadata, u = n.getOwnMetadata, g = n.getOwnMetadataKeys, N = n.deleteMetadata, R = new B(), w = {
        isProviderFor: function(c, h) {
          var p = R.get(c);
          return !m(p) && p.has(h) ? !0 : g(c, h).length ? (m(p) && (p = new L(), R.set(c, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: N
      };
      return w;
    }
    function ee(n, s, o) {
      var u = de.getProvider(n, s);
      if (!m(u))
        return u;
      if (o) {
        if (de.setProvider(n, s, xe))
          return xe;
        throw new Error("Illegal state.");
      }
    }
    function Rt() {
      var n = {}, s = [], o = (
        /** @class */
        function() {
          function w(c, h, p) {
            this._index = 0, this._keys = c, this._values = h, this._selector = p;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[d] = function() {
            return this;
          }, w.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, w.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
          }, w;
        }()
      ), u = (
        /** @class */
        function() {
          function w() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(w.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), w.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, w.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, w.prototype.set = function(c, h) {
            var p = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, w.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, y = h + 1; y < p; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, ve(c, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new o(this._keys, this._values, g);
          }, w.prototype.values = function() {
            return new o(this._keys, this._values, N);
          }, w.prototype.entries = function() {
            return new o(this._keys, this._values, R);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[d] = function() {
            return this.entries();
          }, w.prototype._find = function(c, h) {
            if (!ve(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (ve(this._keys[p], c)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return u;
      function g(w, c) {
        return w;
      }
      function N(w, c) {
        return c;
      }
      function R(w, c) {
        return [w, c];
      }
    }
    function Nt() {
      var n = (
        /** @class */
        function() {
          function s() {
            this._map = new A();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(o) {
            return this._map.has(o);
          }, s.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, s.prototype.delete = function(o) {
            return this._map.delete(o);
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
          }, s.prototype[d] = function() {
            return this.keys();
          }, s;
        }()
      );
      return n;
    }
    function It() {
      var n = 16, s = T.create(), o = u();
      return (
        /** @class */
        function() {
          function c() {
            this._key = u();
          }
          return c.prototype.has = function(h) {
            var p = g(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? T.has(p, this._key) : !1;
          }, c.prototype.get = function(h) {
            var p = g(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? T.get(p, this._key) : void 0;
          }, c.prototype.set = function(h, p) {
            var y = g(
              h,
              /*create*/
              !0
            );
            return y[this._key] = p, this;
          }, c.prototype.delete = function(h) {
            var p = g(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = u();
          }, c;
        }()
      );
      function u() {
        var c;
        do
          c = "@@WeakMap@@" + w();
        while (T.has(s, c));
        return s[c] = !0, c;
      }
      function g(c, h) {
        if (!i.call(c, o)) {
          if (!h)
            return;
          Object.defineProperty(c, o, { value: T.create() });
        }
        return c[o];
      }
      function N(c, h) {
        for (var p = 0; p < h; ++p)
          c[p] = Math.random() * 255 | 0;
        return c;
      }
      function R(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : N(h, c), h;
        }
        return N(new Array(c), c);
      }
      function w() {
        var c = R(n);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", p = 0; p < n; ++p) {
          var y = c[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function me(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Ye || (Ye = {}));
function jt(t) {
  return typeof t.name == "string" && typeof t.version == "string" && typeof t.title == "string" && typeof t.elementSelector == "string" && typeof t.group == "string" && typeof t.iconName == "string";
}
function zt(t) {
  return function(e) {
    if (jt(t)) {
      const r = {
        version: t.version,
        name: t.name,
        title: t.title,
        selector: t.elementSelector,
        category: t.group,
        icon: t.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", r, e.prototype), globalThis.customElements) {
        const i = `${t.elementSelector}-${t.version}`;
        if (!customElements.get(i))
          try {
            customElements.define(i, e);
          } catch {
            try {
              customElements.define(i, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, l);
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
function Ft(t) {
  return zt(t);
}
function Vt(t) {
  return function(e) {
    class r extends e {
      constructor() {
        super(...arguments);
        Ve(this, "_stylesApplied", !1);
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
        var S;
        const l = document.querySelector('style.global-style[type="text/css"]'), d = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), v = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && v) {
          const T = new CSSStyleSheet(), b = (S = l.sheet) == null ? void 0 : S.cssRules;
          b && (Array.from(b).forEach((A) => T.insertRule(A.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, T]);
        } else if (l) {
          const T = l.cloneNode(!0);
          f.appendChild(T);
        }
        d.forEach((T) => {
          const b = T.cloneNode(!0);
          f.appendChild(b);
        });
      }
    }
    return r;
  };
}
function Wt(t) {
  var r;
  if (((r = t == null ? void 0 : t.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Yt(t) {
  return function(e, r) {
    try {
      Wt(t);
      const i = Reflect.getMetadata("ZeroAttribute", e) || [];
      let a = !0;
      if (typeof r == "string") {
        try {
          a = typeof e[r] != "function";
        } catch {
          a = !0;
        }
        a && (t.fieldMappings = t.fieldMappings ?? r);
      }
      i.push(t), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function C(t) {
  return Yt(t);
}
var x;
(function(t) {
  t.TEXT_INPUT = "text-input", t.PASSWORD_INPUT = "password-input", t.DROPDOWN = "dropdown", t.CHECKBOX = "checkbox", t.RADIO_BUTTON = "radio-button", t.RANGE_SLIDER = "range-slider", t.FILE_INPUT = "file-input", t.DATE_PICKER = "date-picker", t.COLOR_PICKER = "color-picker", t.NUMBER_INPUT = "number-input", t.TEXTAREA = "textarea", t.MULTI_SELECT = "multi-select", t.POPUP_DROPDOWN = "popup-dropdown", t.LAYOUT_PICKER = "layout-picker", t.RESPONSIVE_OVERRIDE = "responsive-override", t.IMAGE_PICKER = "image-picker";
})(x || (x = {}));
var D;
(function(t) {
  t.PROPERTY = "property", t.EVENT = "event", t.ACTION = "action";
})(D || (D = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = globalThis, Ee = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Te = Symbol(), Xe = /* @__PURE__ */ new WeakMap();
let lt = class {
  constructor(e, r, i) {
    if (this._$cssResult$ = !0, i !== Te) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (Ee && e === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (e = Xe.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Xe.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Xt = (t) => new lt(typeof t == "string" ? t : t + "", void 0, Te), qt = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((i, a, l) => i + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + t[l + 1], t[0]);
  return new lt(r, t, Te);
}, Gt = (t, e) => {
  if (Ee) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const i = document.createElement("style"), a = ce.litNonce;
    a !== void 0 && i.setAttribute("nonce", a), i.textContent = r.cssText, t.appendChild(i);
  }
}, qe = Ee ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const i of e.cssRules) r += i.cssText;
  return Xt(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zt, defineProperty: Jt, getOwnPropertyDescriptor: Kt, getOwnPropertyNames: Qt, getOwnPropertySymbols: er, getPrototypeOf: tr } = Object, F = globalThis, Ge = F.trustedTypes, rr = Ge ? Ge.emptyScript : "", be = F.reactiveElementPolyfillSupport, re = (t, e) => t, he = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? rr : null;
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
} }, Se = (t, e) => !Zt(t, e), Ze = { attribute: !0, type: String, converter: he, reflect: !1, useDefault: !1, hasChanged: Se };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), F.litPropertyMetadata ?? (F.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = Ze) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const i = Symbol(), a = this.getPropertyDescriptor(e, i, r);
      a !== void 0 && Jt(this.prototype, e, a);
    }
  }
  static getPropertyDescriptor(e, r, i) {
    const { get: a, set: l } = Kt(this.prototype, e) ?? { get() {
      return this[r];
    }, set(d) {
      this[r] = d;
    } };
    return { get: a, set(d) {
      const v = a == null ? void 0 : a.call(this);
      l == null || l.call(this, d), this.requestUpdate(e, v, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(re("elementProperties"))) return;
    const e = tr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(re("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(re("properties"))) {
      const r = this.properties, i = [...Qt(r), ...er(r)];
      for (const a of i) this.createProperty(a, r[a]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [i, a] of r) this.elementProperties.set(i, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, i] of this.elementProperties) {
      const a = this._$Eu(r, i);
      a !== void 0 && this._$Eh.set(a, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const a of i) r.unshift(qe(a));
    } else e !== void 0 && r.push(qe(e));
    return r;
  }
  static _$Eu(e, r) {
    const i = r.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const i of r.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Gt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((r) => {
      var i;
      return (i = r.hostConnected) == null ? void 0 : i.call(r);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var i;
      return (i = r.hostDisconnected) == null ? void 0 : i.call(r);
    });
  }
  attributeChangedCallback(e, r, i) {
    this._$AK(e, i);
  }
  _$ET(e, r) {
    var l;
    const i = this.constructor.elementProperties.get(e), a = this.constructor._$Eu(e, i);
    if (a !== void 0 && i.reflect === !0) {
      const d = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : he).toAttribute(r, i.type);
      this._$Em = e, d == null ? this.removeAttribute(a) : this.setAttribute(a, d), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var l, d;
    const i = this.constructor, a = i._$Eh.get(e);
    if (a !== void 0 && this._$Em !== a) {
      const v = i.getPropertyOptions(a), f = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : he;
      this._$Em = a;
      const S = f.fromAttribute(r, v.type);
      this[a] = S ?? ((d = this._$Ej) == null ? void 0 : d.get(a)) ?? S, this._$Em = null;
    }
  }
  requestUpdate(e, r, i, a = !1, l) {
    var d;
    if (e !== void 0) {
      const v = this.constructor;
      if (a === !1 && (l = this[e]), i ?? (i = v.getPropertyOptions(e)), !((i.hasChanged ?? Se)(l, r) || i.useDefault && i.reflect && l === ((d = this._$Ej) == null ? void 0 : d.get(e)) && !this.hasAttribute(v._$Eu(e, i)))) return;
      this.C(e, r, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: i, reflect: a, wrapped: l }, d) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, d ?? r ?? this[e]), l !== !0 || d !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (r = void 0), this._$AL.set(e, r)), a === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, d] of this._$Ep) this[l] = d;
        this._$Ep = void 0;
      }
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [l, d] of a) {
        const { wrapped: v } = d, f = this[l];
        v !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, d, f);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (i = this._$EO) == null || i.forEach((a) => {
        var l;
        return (l = a.hostUpdate) == null ? void 0 : l.call(a);
      }), this.update(r)) : this._$EM();
    } catch (a) {
      throw e = !1, this._$EM(), a;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$EO) == null || r.forEach((i) => {
      var a;
      return (a = i.hostUpdated) == null ? void 0 : a.call(i);
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
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[re("elementProperties")] = /* @__PURE__ */ new Map(), J[re("finalized")] = /* @__PURE__ */ new Map(), be == null || be({ ReactiveElement: J }), (F.reactiveElementVersions ?? (F.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = globalThis, Je = (t) => t, pe = ie.trustedTypes, Ke = pe ? pe.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, dt = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + z, ir = `<${ut}>`, q = document, ae = () => q.createComment(""), se = (t) => t === null || typeof t != "object" && typeof t != "function", De = Array.isArray, nr = (t) => De(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", we = `[ 	
\f\r]`, te = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, et = />/g, W = RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), tt = /'/g, rt = /"/g, ct = /^(?:script|style|textarea|title)$/i, ar = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), U = ar(1), K = Symbol.for("lit-noChange"), I = Symbol.for("lit-nothing"), it = /* @__PURE__ */ new WeakMap(), Y = q.createTreeWalker(q, 129);
function ht(t, e) {
  if (!De(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ke !== void 0 ? Ke.createHTML(e) : e;
}
const sr = (t, e) => {
  const r = t.length - 1, i = [];
  let a, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", d = te;
  for (let v = 0; v < r; v++) {
    const f = t[v];
    let S, T, b = -1, A = 0;
    for (; A < f.length && (d.lastIndex = A, T = d.exec(f), T !== null); ) A = d.lastIndex, d === te ? T[1] === "!--" ? d = Qe : T[1] !== void 0 ? d = et : T[2] !== void 0 ? (ct.test(T[2]) && (a = RegExp("</" + T[2], "g")), d = W) : T[3] !== void 0 && (d = W) : d === W ? T[0] === ">" ? (d = a ?? te, b = -1) : T[1] === void 0 ? b = -2 : (b = d.lastIndex - T[2].length, S = T[1], d = T[3] === void 0 ? W : T[3] === '"' ? rt : tt) : d === rt || d === tt ? d = W : d === Qe || d === et ? d = te : (d = W, a = void 0);
    const L = d === W && t[v + 1].startsWith("/>") ? " " : "";
    l += d === te ? f + ir : b >= 0 ? (i.push(S), f.slice(0, b) + dt + f.slice(b) + z + L) : f + z + (b === -2 ? v : L);
  }
  return [ht(t, l + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class oe {
  constructor({ strings: e, _$litType$: r }, i) {
    let a;
    this.parts = [];
    let l = 0, d = 0;
    const v = e.length - 1, f = this.parts, [S, T] = sr(e, r);
    if (this.el = oe.createElement(S, i), Y.currentNode = this.el.content, r === 2 || r === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (a = Y.nextNode()) !== null && f.length < v; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const b of a.getAttributeNames()) if (b.endsWith(dt)) {
          const A = T[d++], L = a.getAttribute(b).split(z), B = /([.?@])?(.*)/.exec(A);
          f.push({ type: 1, index: l, name: B[2], strings: L, ctor: B[1] === "." ? lr : B[1] === "?" ? dr : B[1] === "@" ? ur : fe }), a.removeAttribute(b);
        } else b.startsWith(z) && (f.push({ type: 6, index: l }), a.removeAttribute(b));
        if (ct.test(a.tagName)) {
          const b = a.textContent.split(z), A = b.length - 1;
          if (A > 0) {
            a.textContent = pe ? pe.emptyScript : "";
            for (let L = 0; L < A; L++) a.append(b[L], ae()), Y.nextNode(), f.push({ type: 2, index: ++l });
            a.append(b[A], ae());
          }
        }
      } else if (a.nodeType === 8) if (a.data === ut) f.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = a.data.indexOf(z, b + 1)) !== -1; ) f.push({ type: 7, index: l }), b += z.length - 1;
      }
      l++;
    }
  }
  static createElement(e, r) {
    const i = q.createElement("template");
    return i.innerHTML = e, i;
  }
}
function Q(t, e, r = t, i) {
  var d, v;
  if (e === K) return e;
  let a = i !== void 0 ? (d = r._$Co) == null ? void 0 : d[i] : r._$Cl;
  const l = se(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((v = a == null ? void 0 : a._$AO) == null || v.call(a, !1), l === void 0 ? a = void 0 : (a = new l(t), a._$AT(t, r, i)), i !== void 0 ? (r._$Co ?? (r._$Co = []))[i] = a : r._$Cl = a), a !== void 0 && (e = Q(t, a._$AS(t, e.values), a, i)), e;
}
class or {
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
    const { el: { content: r }, parts: i } = this._$AD, a = ((e == null ? void 0 : e.creationScope) ?? q).importNode(r, !0);
    Y.currentNode = a;
    let l = Y.nextNode(), d = 0, v = 0, f = i[0];
    for (; f !== void 0; ) {
      if (d === f.index) {
        let S;
        f.type === 2 ? S = new le(l, l.nextSibling, this, e) : f.type === 1 ? S = new f.ctor(l, f.name, f.strings, this, e) : f.type === 6 && (S = new cr(l, this, e)), this._$AV.push(S), f = i[++v];
      }
      d !== (f == null ? void 0 : f.index) && (l = Y.nextNode(), d++);
    }
    return Y.currentNode = q, a;
  }
  p(e) {
    let r = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, r), r += i.strings.length - 2) : i._$AI(e[r])), r++;
  }
}
class le {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, i, a) {
    this.type = 2, this._$AH = I, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = i, this.options = a, this._$Cv = (a == null ? void 0 : a.isConnected) ?? !0;
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
    e = Q(this, e, r), se(e) ? e === I || e == null || e === "" ? (this._$AH !== I && this._$AR(), this._$AH = I) : e !== this._$AH && e !== K && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== I && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(q.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: r, _$litType$: i } = e, a = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = oe.createElement(ht(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === a) this._$AH.p(r);
    else {
      const d = new or(a, this), v = d.u(this.options);
      d.p(r), this.T(v), this._$AH = d;
    }
  }
  _$AC(e) {
    let r = it.get(e.strings);
    return r === void 0 && it.set(e.strings, r = new oe(e)), r;
  }
  k(e) {
    De(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let i, a = 0;
    for (const l of e) a === r.length ? r.push(i = new le(this.O(ae()), this.O(ae()), this, this.options)) : i = r[a], i._$AI(l), a++;
    a < r.length && (this._$AR(i && i._$AB.nextSibling, a), r.length = a);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); e !== this._$AB; ) {
      const a = Je(e).nextSibling;
      Je(e).remove(), e = a;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cv = e, (r = this._$AP) == null || r.call(this, e));
  }
}
class fe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, i, a, l) {
    this.type = 1, this._$AH = I, this._$AN = void 0, this.element = e, this.name = r, this._$AM = a, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = I;
  }
  _$AI(e, r = this, i, a) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) e = Q(this, e, r, 0), d = !se(e) || e !== this._$AH && e !== K, d && (this._$AH = e);
    else {
      const v = e;
      let f, S;
      for (e = l[0], f = 0; f < l.length - 1; f++) S = Q(this, v[i + f], r, f), S === K && (S = this._$AH[f]), d || (d = !se(S) || S !== this._$AH[f]), S === I ? e = I : e !== I && (e += (S ?? "") + l[f + 1]), this._$AH[f] = S;
    }
    d && !a && this.j(e);
  }
  j(e) {
    e === I ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class lr extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === I ? void 0 : e;
  }
}
class dr extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== I);
  }
}
class ur extends fe {
  constructor(e, r, i, a, l) {
    super(e, r, i, a, l), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = Q(this, e, r, 0) ?? I) === K) return;
    const i = this._$AH, a = e === I && i !== I || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== I && (i === I || a);
    a && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class cr {
  constructor(e, r, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Q(this, e);
  }
}
const _e = ie.litHtmlPolyfillSupport;
_e == null || _e(oe, le), (ie.litHtmlVersions ?? (ie.litHtmlVersions = [])).push("3.3.3");
const hr = (t, e, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? e;
  let a = i._$litPart$;
  if (a === void 0) {
    const l = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = a = new le(e.insertBefore(ae(), l), l, void 0, r ?? {});
  }
  return a._$AI(t), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis;
class ne extends J {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = hr(r, this.renderRoot, this.renderOptions);
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
    return K;
  }
}
var ot;
ne._$litElement$ = !0, ne.finalized = !0, (ot = X.litElementHydrateSupport) == null || ot.call(X, { LitElement: ne });
const $e = X.litElementPolyfillSupport;
$e == null || $e({ LitElement: ne });
(X.litElementVersions ?? (X.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pr = (t) => (e, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Se }, yr = (t = fr, e, r) => {
  const { kind: i, metadata: a } = r;
  let l = globalThis.litPropertyMetadata.get(a);
  if (l === void 0 && globalThis.litPropertyMetadata.set(a, l = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), l.set(r.name, t), i === "accessor") {
    const { name: d } = r;
    return { set(v) {
      const f = e.get.call(this);
      e.set.call(this, v), this.requestUpdate(d, f, t, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(d, void 0, t, v), v;
    } };
  }
  if (i === "setter") {
    const { name: d } = r;
    return function(v) {
      const f = this[d];
      e.call(this, v), this.requestUpdate(d, f, t, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function M(t) {
  return (e, r) => typeof r == "object" ? yr(t, e, r) : ((i, a, l) => {
    const d = a.hasOwnProperty(l);
    return a.constructor.createProperty(l, i), d ? Object.getOwnPropertyDescriptor(a, l) : void 0;
  })(t, e, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function V(t) {
  return M({ ...t, state: !0, attribute: !1 });
}
var vr = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, E = (t, e, r, i) => {
  for (var a = i > 1 ? void 0 : i ? gr(e, r) : e, l = t.length - 1, d; l >= 0; l--)
    (d = t[l]) && (a = (i ? d(e, r, a) : d(a)) || a);
  return i && a && vr(e, r, a), a;
};
const nt = () => window.zeroThemeManager, at = {
  kind: "generic",
  templateHtml: [
    "<div style='padding:10px 14px;border-radius:8px;border:1px solid rgba(148,163,184,0.2);background:rgba(255,255,255,0.95);display:flex;justify-content:space-between;align-items:center;'>",
    "<div>",
    "<div style='font-size:0.65rem;color:var(--uiv-text-muted,#94a3b8);font-weight:600;margin-bottom:2px;'>{{display:label}}</div>",
    "<div style='font-size:0.8rem;color:var(--uiv-text-color,#1e293b);'>{{display:placeholder}}</div>",
    "</div>",
    "<span style='font-size:1rem;'>📅</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Date"]
};
function st(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let _ = class extends ne {
  constructor() {
    super(...arguments), this.label = "", this.placeholder = "Select date", this.helpText = "", this.errorMessage = "", this.value = "", this.required = !1, this.disabled = !1, this.readonly = !1, this.showTodayButton = !0, this.showClearButton = !0, this.showWeekNumbers = !1, this.includeTime = !1, this.rangeSelection = !1, this.dateFormat = "yyyy-MM-dd", this.displayFormat = "MMM d, yyyy", this.minDate = "", this.maxDate = "", this.firstDayOfWeek = 0, this.width = "100%", this.height = "var(--input-height, 36px)", this.borderRadius = "4px", this.primaryColor = "#1976d2", this.errorColor = "#f44336", this.backgroundColor = "#ffffff", this.isOpen = !1, this.currentDate = /* @__PURE__ */ new Date(), this.selectedDate = null, this.selectedStartDate = null, this.selectedEndDate = null, this.hoverDate = null, this.hasError = !1, this.inputValue = "", this.monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ], this.dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }
  static getStudioTemplate(t) {
    if (!t) return at;
    const e = st(t.studio.display.label || "Date Picker"), r = st(t.studio.display.placeholder || "Select date..."), i = "var(--uiv-surface-color, #ffffff)", a = "var(--uiv-text-color, #1e293b)", l = "var(--uiv-text-muted, #94a3b8)";
    return {
      ...at,
      templateHtml: [
        "<div style='display:grid;gap:6px;'>",
        e ? `<div style='font-size:14px;font-weight:500;color:${a};'>${e}</div>` : "",
        `<div style='padding:10px 14px;border-radius:8px;border:1px solid var(--uiv-border-color, rgba(148,163,184,0.2));background:${i};display:flex;justify-content:space-between;align-items:center;min-height:40px;'>`,
        `<span style='font-size:16px;color:${l};'>${r}</span>`,
        `<span style='font-size:18px;color:${l};'>📅</span>`,
        "</div>",
        "</div>"
      ].join("")
    };
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = nt()) == null || t.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const t = (e = nt()) == null ? void 0 : e.getActiveTheme("zero-standard-themes");
    return U`
      <style>
        ${t ? t.getGlobalStyles() : ""}
        ${t ? t.getComponentStyles("date-picker") : ""}
      </style>
      <div class="form-field uiv-${t == null ? void 0 : t.id}-theme" style="width: ${this.width}">
        ${this.label ? U`
          <label class="form-field-label uiv-${t == null ? void 0 : t.id}-text ${this.required ? "required" : ""}">
            ${this.label}
          </label>
        ` : ""}
        
        <div class="input-container">
          <input
            class="mat-mdc-input-element uiv-${t == null ? void 0 : t.id}-card uiv-${t == null ? void 0 : t.id}-scan ${this.hasError ? "error" : ""}"
            type="text"
            .value=${this.inputValue}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            style="height: ${this.height}"
            @click=${this.handleInputClick}
            @keydown=${this.handleKeyDown}
            @blur=${this.handleInputBlur}
          />
          <svg class="calendar-icon uiv-${t == null ? void 0 : t.id}-text" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
          </svg>
        </div>

        ${this.isOpen ? U`
          <div class="dropdown uiv-${t == null ? void 0 : t.id}-card">
            <div class="calendar-header uiv-${t == null ? void 0 : t.id}-card">
              <button 
                type="button" 
                class="nav-button uiv-${t == null ? void 0 : t.id}-text" 
                @click=${this.previousMonth}
                aria-label="Previous month"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41,7.41L14,6L8,12L14,18L15.41,16.59L10.83,12L15.41,7.41Z" />
                </svg>
              </button>
              
              <div class="month-year uiv-${t == null ? void 0 : t.id}-text">
                ${this.monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}
              </div>
              
              <button 
                type="button" 
                class="nav-button" 
                @click=${this.nextMonth}
                aria-label="Next month"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59,16.58L10,18L16,12L10,6L8.59,7.41L13.17,12L8.59,16.58Z" />
                </svg>
              </button>
            </div>

            <div class="calendar-grid">
              <div class="weekdays ${this.showWeekNumbers ? "with-week-numbers" : ""}">
                ${this.showWeekNumbers ? U`<div class="week-number"></div>` : ""}
                ${this.getWeekdayNames().map((r) => U`
                  <div class="weekday uiv-${t == null ? void 0 : t.id}-text" style="opacity: 0.7">${r}</div>
                `)}
              </div>
              
              ${this.renderCalendarDays()}
            </div>

            ${this.showTodayButton || this.showClearButton ? U`
              <div class="calendar-footer">
                <div>
                  ${this.showTodayButton ? U`
                    <button type="button" class="action-button today-button" @click=${this.selectToday}>
                      Today
                    </button>
                  ` : ""}
                </div>
                <div>
                  ${this.showClearButton ? U`
                    <button type="button" class="action-button clear-button" @click=${this.clearSelection}>
                      Clear
                    </button>
                  ` : ""}
                </div>
              </div>
            ` : ""}
          </div>
        ` : ""}

        ${this.helpText && !this.hasError ? U`
          <div class="form-field-hint uiv-${t == null ? void 0 : t.id}-text" style="opacity: 0.7">${this.helpText}</div>
        ` : ""}
        
        ${this.errorMessage && this.hasError ? U`
          <div class="form-field-error uiv-${t == null ? void 0 : t.id}-text" style="color: var(--uiv-error-color, #f44336)">${this.errorMessage}</div>
        ` : ""}
      </div>
    `;
  }
  renderCalendarDays() {
    const t = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1), e = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0), r = new Date(t);
    r.setDate(r.getDate() - (t.getDay() - this.firstDayOfWeek + 7) % 7);
    const i = [];
    let a = new Date(r);
    for (; a <= e || a.getMonth() === this.currentDate.getMonth(); ) {
      const l = [];
      if (this.showWeekNumbers) {
        const d = this.getWeekNumber(a);
        l.push(U`<div class="week-number">${d}</div>`);
      }
      for (let d = 0; d < 7; d++) {
        const v = new Date(a);
        v.setDate(v.getDate() + d);
        const f = v.getMonth() === this.currentDate.getMonth(), S = this.isSameDay(v, /* @__PURE__ */ new Date()), T = this.isDateSelected(v), b = this.isDateDisabled(v), A = this.isDateInRange(v), L = this.rangeSelection && this.selectedStartDate && this.isSameDay(v, this.selectedStartDate), B = this.rangeSelection && this.selectedEndDate && this.isSameDay(v, this.selectedEndDate);
        l.push(U`
          <div 
            class="day ${f ? "" : "other-month"} ${S ? "today" : ""} ${T ? "selected" : ""} ${b ? "disabled" : ""} ${A ? "in-range" : ""} ${L ? "range-start" : ""} ${B ? "range-end" : ""}"
            @click=${() => this.selectDate(v)}
            @mouseenter=${() => this.hoverDate = v}
            @mouseleave=${() => this.hoverDate = null}
          >
            ${v.getDate()}
          </div>
        `);
      }
      i.push(U`
        <div class="days ${this.showWeekNumbers ? "with-week-numbers" : ""}">
          ${l}
        </div>
      `), a.setDate(a.getDate() + 7);
    }
    return U`${i}`;
  }
  handleInputClick() {
    !this.disabled && !this.readonly && (this.isOpen = !this.isOpen);
  }
  handleKeyDown(t) {
    t.key === "Escape" && this.isOpen ? this.isOpen = !1 : t.key === "Enter" && !this.isOpen && (this.isOpen = !0);
  }
  handleInputBlur() {
    setTimeout(() => {
      var t;
      (t = this.shadowRoot) != null && t.querySelector(".dropdown:hover") || (this.isOpen = !1);
    }, 150);
  }
  selectDate(t) {
    this.isDateDisabled(t) || (this.rangeSelection ? (!this.selectedStartDate || this.selectedStartDate && this.selectedEndDate ? (this.selectedStartDate = t, this.selectedEndDate = null) : (t < this.selectedStartDate ? (this.selectedEndDate = this.selectedStartDate, this.selectedStartDate = t) : this.selectedEndDate = t, this.isOpen = !1), this.updateRangeValue()) : (this.selectedDate = t, this.updateSingleValue(), this.isOpen = !1), this.dispatchChangeEvent());
  }
  selectToday() {
    this.selectDate(/* @__PURE__ */ new Date());
  }
  clearSelection() {
    this.rangeSelection ? (this.selectedStartDate = null, this.selectedEndDate = null) : this.selectedDate = null, this.inputValue = "", this.value = "", this.isOpen = !1, this.dispatchChangeEvent();
  }
  previousMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
  }
  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
  }
  getWeekdayNames() {
    const t = [...this.dayNames];
    return [...t.slice(this.firstDayOfWeek), ...t.slice(0, this.firstDayOfWeek)];
  }
  getWeekNumber(t) {
    const e = new Date(t.getFullYear(), 0, 1), r = Math.floor((t.getTime() - e.getTime()) / (24 * 60 * 60 * 1e3)) + 1;
    return Math.ceil(r / 7);
  }
  isSameDay(t, e) {
    return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
  }
  isDateSelected(t) {
    return this.rangeSelection ? this.selectedStartDate && this.isSameDay(t, this.selectedStartDate) || this.selectedEndDate && this.isSameDay(t, this.selectedEndDate) : this.selectedDate && this.isSameDay(t, this.selectedDate);
  }
  isDateDisabled(t) {
    return !!(this.minDate && t < new Date(this.minDate) || this.maxDate && t > new Date(this.maxDate));
  }
  isDateInRange(t) {
    if (!this.rangeSelection || !this.selectedStartDate) return !1;
    const e = this.selectedEndDate || this.hoverDate;
    if (!e) return !1;
    const r = this.selectedStartDate < e ? this.selectedStartDate : e, i = this.selectedStartDate < e ? e : this.selectedStartDate;
    return t > r && t < i;
  }
  updateSingleValue() {
    this.selectedDate && (this.value = this.formatDate(this.selectedDate, this.dateFormat), this.inputValue = this.formatDate(this.selectedDate, this.displayFormat));
  }
  updateRangeValue() {
    if (this.selectedStartDate && this.selectedEndDate) {
      const t = this.formatDate(this.selectedStartDate, this.dateFormat), e = this.formatDate(this.selectedEndDate, this.dateFormat);
      this.value = `${t} - ${e}`;
      const r = this.formatDate(this.selectedStartDate, this.displayFormat), i = this.formatDate(this.selectedEndDate, this.displayFormat);
      this.inputValue = `${r} - ${i}`;
    } else this.selectedStartDate && (this.value = this.formatDate(this.selectedStartDate, this.dateFormat), this.inputValue = this.formatDate(this.selectedStartDate, this.displayFormat));
  }
  formatDate(t, e) {
    const r = t.getFullYear(), i = String(t.getMonth() + 1).padStart(2, "0"), a = String(t.getDate()).padStart(2, "0"), d = this.monthNames[t.getMonth()].slice(0, 3);
    return e.replace(/yyyy/g, String(r)).replace(/MM/g, i).replace(/MMM/g, d).replace(/dd/g, a).replace(/d/g, String(t.getDate()));
  }
  dispatchChangeEvent() {
    const t = this.rangeSelection ? {
      value: this.value,
      startDate: this.selectedStartDate,
      endDate: this.selectedEndDate,
      isRange: !0
    } : {
      value: this.value,
      date: this.selectedDate,
      isRange: !1
    };
    this.dispatchEvent(new CustomEvent("change", {
      detail: t,
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("date-change", {
      detail: t,
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(t) {
    this.dispatchChangeEvent();
  }
  handleDateChange(t) {
    this.dispatchChangeEvent();
  }
  // Public API
  getSelectedDate() {
    return this.selectedDate;
  }
  getSelectedDateRange() {
    return {
      start: this.selectedStartDate,
      end: this.selectedEndDate
    };
  }
  setDate(t) {
    const e = typeof t == "string" ? new Date(t) : t;
    this.rangeSelection ? (this.selectedStartDate = e, this.selectedEndDate = null, this.updateRangeValue()) : (this.selectedDate = e, this.updateSingleValue()), this.currentDate = new Date(e.getFullYear(), e.getMonth(), 1);
  }
  setDateRange(t, e) {
    this.rangeSelection && (this.selectedStartDate = typeof t == "string" ? new Date(t) : t, this.selectedEndDate = typeof e == "string" ? new Date(e) : e, this.updateRangeValue(), this.currentDate = new Date(this.selectedStartDate.getFullYear(), this.selectedStartDate.getMonth(), 1));
  }
  open() {
    !this.disabled && !this.readonly && (this.isOpen = !0);
  }
  close() {
    this.isOpen = !1;
  }
  setError(t) {
    this.hasError = !0, this.errorMessage = t;
  }
  clearError() {
    this.hasError = !1, this.errorMessage = "";
  }
  firstUpdated() {
    if (this.value)
      if (this.rangeSelection && this.value.includes(" - ")) {
        const [t, e] = this.value.split(" - ");
        this.setDateRange(t, e);
      } else
        this.setDate(this.value);
    document.addEventListener("click", (t) => {
      this.contains(t.target) || (this.isOpen = !1);
    });
  }
};
_.styles = qt`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      position: relative;
    }

    .form-field {
      position: relative;
      margin-bottom: 16px;
    }    .form-field-label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--uiv-text-main);
      transition: color 0.3s ease;
    }

    .form-field-label.required::after {
      content: ' *';
      color: var(--uiv-error-color, #f44336);
    }

    .input-container {
      position: relative;
      display: flex;
      align-items: center;
    }

    .mat-mdc-input-element {
      width: 100%;
      min-height: 40px;
      border: 1px solid var(--uiv-border);
      border-radius: 8px;
      font-size: 16px;
      line-height: 1.5;
      background: var(--uiv-surface);
      color: var(--uiv-text-main);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
      padding: 0 40px 0 16px;
      box-shadow: var(--uiv-shadow-depth, none);
    }

    .mat-mdc-input-element:hover {
      border-color: var(--uiv-primary);
      box-shadow: var(--uiv-border-glow);
    }

    .mat-mdc-input-element:focus {
      outline: none;
      border-color: var(--uiv-primary);
      box-shadow: var(--uiv-border-glow);
      transform: translateY(-1px);
    }

    .mat-mdc-input-element:disabled {
      background: #f5f5f5;
      color: rgba(0, 0, 0, 0.38);
      cursor: not-allowed;
    }

    .mat-mdc-input-element.error {
      border-color: var(--error-color, #f44336);
    }    .calendar-icon {
      position: absolute;
      right: 12px;
      width: var(--icon-size-md, 20px);
      height: var(--icon-size-md, 20px);
      color: rgba(0, 0, 0, 0.6);
      pointer-events: none;
    }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--uiv-surface);
      border: 1px solid var(--uiv-border);
      border-radius: 8px;
      box-shadow: var(--uiv-shadow-depth, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
      z-index: 1000;
      margin-top: 8px;
      overflow: hidden;
      animation: dropdownSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes dropdownSlide {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .calendar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid #e0e0e0;
    }

    .nav-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      color: rgba(0, 0, 0, 0.6);
      transition: background 0.2s ease;
    }

    .nav-button:hover {
      background: #f5f5f5;
    }

    .month-year {      font-weight: 500;
      font-size: var(--font-size-lg, 16px);
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
    }

    .calendar-grid {
      padding: 16px;
    }

    .weekdays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 4px;
      margin-bottom: 8px;
    }

    .weekdays.with-week-numbers {
      grid-template-columns: 30px repeat(7, 1fr);
    }

    .weekday {      text-align: center;
      font-size: var(--font-size-xs, 12px);
      font-weight: 500;
      color: var(--text-secondary, rgba(0, 0, 0, 0.6));
      padding: 8px 4px;
    }

    .week-number {
      text-align: center;
      font-size: var(--font-size-xs, 12px);
      color: var(--text-muted, rgba(0, 0, 0, 0.4));
      padding: 8px 4px;
    }

    .days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 4px;
    }

    .days.with-week-numbers {
      grid-template-columns: 30px repeat(7, 1fr);
    }

    .day {
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;      font-size: var(--font-size-base, 14px);
      transition: all 0.2s ease;
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
    }

    .day:hover {
      background: #f5f5f5;
    }

    .day.other-month {
      color: rgba(0, 0, 0, 0.3);
    }

    .day.disabled {
      color: rgba(0, 0, 0, 0.3);
      cursor: not-allowed;
    }

    .day.disabled:hover {
      background: none;
    }

    .day.selected {
      background: var(--primary-color, #1976d2);
      color: white;
    }

    .day.today {
      border: 2px solid var(--primary-color, #1976d2);
    }

    .day.in-range {
      background: color-mix(in srgb, var(--primary-color, #1976d2) 20%, transparent);
      border-radius: 0;
    }

    .day.range-start {
      background: var(--primary-color, #1976d2);
      color: white;
      border-radius: 50% 0 0 50%;
    }

    .day.range-end {
      background: var(--primary-color, #1976d2);
      color: white;
      border-radius: 0 50% 50% 0;
    }

    .day.range-start.range-end {
      border-radius: 50%;
    }

    .calendar-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border-top: 1px solid #e0e0e0;
    }

    .action-button {
      padding: 8px 16px;      border: none;
      border-radius: 4px;
      font-size: var(--font-size-base, 14px);
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .today-button {
      background: #f5f5f5;
      color: var(--primary-color, #1976d2);
    }

    .today-button:hover {
      background: #e0e0e0;
    }

    .clear-button {
      background: #ffebee;
      color: var(--error-color, #f44336);
    }

    .clear-button:hover {
      background: #ffcdd2;
    }

    .form-field-hint {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
      margin-top: 4px;
    }    .form-field-error {
      font-size: var(--font-size-xs, 12px);
      color: var(--error-color, #f44336);
      margin-top: 4px;
    }

    @media (max-width: 768px) {
      .dropdown {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 320px;
        max-width: 90vw;
      }
    }
  `;
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], _.prototype, "label", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], _.prototype, "placeholder", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Help Text",
    placeholderText: "Enter help text",
    fieldMappings: "helpText"
  })
], _.prototype, "helpText", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], _.prototype, "errorMessage", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Value",
    placeholderText: "Enter date value",
    fieldMappings: "value"
  })
], _.prototype, "value", 2);
E([
  M({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], _.prototype, "required", 2);
E([
  M({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], _.prototype, "disabled", 2);
E([
  M({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Readonly",
    fieldMappings: "readonly"
  })
], _.prototype, "readonly", 2);
E([
  M({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Show Today Button",
    fieldMappings: "showTodayButton"
  })
], _.prototype, "showTodayButton", 2);
E([
  M({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Show Clear Button",
    fieldMappings: "showClearButton"
  })
], _.prototype, "showClearButton", 2);
E([
  M({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Show Week Numbers",
    fieldMappings: "showWeekNumbers"
  })
], _.prototype, "showWeekNumbers", 2);
E([
  M({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Allow Time Selection",
    fieldMappings: "includeTime"
  })
], _.prototype, "includeTime", 2);
E([
  M({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Range Selection",
    fieldMappings: "rangeSelection"
  })
], _.prototype, "rangeSelection", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Date Format",
    placeholderText: "Enter date format",
    fieldMappings: "dateFormat"
  })
], _.prototype, "dateFormat", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Display Format",
    placeholderText: "Enter display format",
    fieldMappings: "displayFormat"
  })
], _.prototype, "displayFormat", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Min Date",
    placeholderText: "Enter minimum date",
    fieldMappings: "minDate"
  })
], _.prototype, "minDate", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Max Date",
    placeholderText: "Enter maximum date",
    fieldMappings: "maxDate"
  })
], _.prototype, "maxDate", 2);
E([
  M({ type: Number }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.NUMBER_INPUT,
    displayLabel: "First Day of Week (0-6)",
    fieldMappings: "firstDayOfWeek"
  })
], _.prototype, "firstDayOfWeek", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Width",
    placeholderText: "Enter width",
    fieldMappings: "width"
  })
], _.prototype, "width", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Height",
    placeholderText: "Enter height",
    fieldMappings: "height"
  })
], _.prototype, "height", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Border Radius",
    placeholderText: "Enter border radius",
    fieldMappings: "borderRadius"
  })
], _.prototype, "borderRadius", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Primary Color",
    placeholderText: "Enter primary color",
    fieldMappings: "primaryColor"
  })
], _.prototype, "primaryColor", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Error Color",
    placeholderText: "Enter error color",
    fieldMappings: "errorColor"
  })
], _.prototype, "errorColor", 2);
E([
  M({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Background Color",
    placeholderText: "Enter background color",
    fieldMappings: "backgroundColor"
  })
], _.prototype, "backgroundColor", 2);
E([
  V()
], _.prototype, "isOpen", 2);
E([
  V()
], _.prototype, "currentDate", 2);
E([
  V()
], _.prototype, "selectedDate", 2);
E([
  V()
], _.prototype, "selectedStartDate", 2);
E([
  V()
], _.prototype, "selectedEndDate", 2);
E([
  V()
], _.prototype, "hoverDate", 2);
E([
  V()
], _.prototype, "hasError", 2);
E([
  V()
], _.prototype, "inputValue", 2);
E([
  C({
    attributeType: D.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], _.prototype, "handleChange", 1);
E([
  C({
    attributeType: D.EVENT,
    displayLabel: "On Date Change",
    eventTrigger: "date-change"
  })
], _.prototype, "handleDateChange", 1);
_ = E([
  Ft({
    name: "zero-date-picker",
    version: "1.0.0",
    title: "Date Picker",
    elementSelector: "zero-date-picker",
    group: "Form Controls",
    iconName: "date-picker-icon.png"
  }),
  Vt(),
  pr("zero-date-picker")
], _);
export {
  _ as ZeroDatePicker,
  at as studioTemplate
};
