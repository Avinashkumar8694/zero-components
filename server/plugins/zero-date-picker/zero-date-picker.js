var jt = Object.defineProperty;
var zt = (t, e, r) => e in t ? jt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Ve = (t, e, r) => zt(t, typeof e != "symbol" ? e + "" : e, r);
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
    var r = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : v(), i = n(t);
    typeof r.Reflect < "u" && (i = n(r.Reflect, i)), e(i, r), typeof r.Reflect > "u" && (r.Reflect = t);
    function n(f, S) {
      return function(T, w) {
        Object.defineProperty(f, T, { configurable: !0, writable: !0, value: w }), S && S(T, w);
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
    var i = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", l = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", d = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, S = !v && !f, T = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return me(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return me({ __proto__: null });
      } : function() {
        return me({});
      },
      has: S ? function(a, s) {
        return i.call(a, s);
      } : function(a, s) {
        return s in a;
      },
      get: S ? function(a, s) {
        return i.call(a, s) ? a[s] : void 0;
      } : function(a, s) {
        return a[s];
      }
    }, w = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : It(), L = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ut(), B = typeof WeakMap == "function" ? WeakMap : Lt(), Z = n ? Symbol.for("@reflect-metadata:registry") : void 0, de = kt(), xe = Rt(de);
    function yt(a, s, o, u) {
      if (m(o)) {
        if (!Ie(a))
          throw new TypeError();
        if (!Ue(s))
          throw new TypeError();
        return St(a, s);
      } else {
        if (!Ie(a))
          throw new TypeError();
        if (!k(s))
          throw new TypeError();
        if (!k(u) && !m(u) && !J(u))
          throw new TypeError();
        return J(u) && (u = void 0), o = j(o), Dt(a, s, o, u);
      }
    }
    e("decorate", yt);
    function vt(a, s) {
      function o(u, g) {
        if (!k(u))
          throw new TypeError();
        if (!m(g) && !Mt(g))
          throw new TypeError();
        Me(a, s, u, g);
      }
      return o;
    }
    e("metadata", vt);
    function gt(a, s, o, u) {
      if (!k(o))
        throw new TypeError();
      return m(u) || (u = j(u)), Me(a, s, o, u);
    }
    e("defineMetadata", gt);
    function mt(a, s, o) {
      if (!k(s))
        throw new TypeError();
      return m(o) || (o = j(o)), Ce(a, s, o);
    }
    e("hasMetadata", mt);
    function bt(a, s, o) {
      if (!k(s))
        throw new TypeError();
      return m(o) || (o = j(o)), ye(a, s, o);
    }
    e("hasOwnMetadata", bt);
    function wt(a, s, o) {
      if (!k(s))
        throw new TypeError();
      return m(o) || (o = j(o)), Oe(a, s, o);
    }
    e("getMetadata", wt);
    function _t(a, s, o) {
      if (!k(s))
        throw new TypeError();
      return m(o) || (o = j(o)), Ae(a, s, o);
    }
    e("getOwnMetadata", _t);
    function $t(a, s) {
      if (!k(a))
        throw new TypeError();
      return m(s) || (s = j(s)), Pe(a, s);
    }
    e("getMetadataKeys", $t);
    function Et(a, s) {
      if (!k(a))
        throw new TypeError();
      return m(s) || (s = j(s)), ke(a, s);
    }
    e("getOwnMetadataKeys", Et);
    function Tt(a, s, o) {
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
      return m(u) ? !1 : u.OrdinaryDeleteMetadata(a, s, o);
    }
    e("deleteMetadata", Tt);
    function St(a, s) {
      for (var o = a.length - 1; o >= 0; --o) {
        var u = a[o], g = u(s);
        if (!m(g) && !J(g)) {
          if (!Ue(g))
            throw new TypeError();
          s = g;
        }
      }
      return s;
    }
    function Dt(a, s, o, u) {
      for (var g = a.length - 1; g >= 0; --g) {
        var N = a[g], R = N(s, o, u);
        if (!m(R) && !J(R)) {
          if (!k(R))
            throw new TypeError();
          u = R;
        }
      }
      return u;
    }
    function Ce(a, s, o) {
      var u = ye(a, s, o);
      if (u)
        return !0;
      var g = ge(s);
      return J(g) ? !1 : Ce(a, g, o);
    }
    function ye(a, s, o) {
      var u = ee(
        s,
        o,
        /*Create*/
        !1
      );
      return m(u) ? !1 : Ne(u.OrdinaryHasOwnMetadata(a, s, o));
    }
    function Oe(a, s, o) {
      var u = ye(a, s, o);
      if (u)
        return Ae(a, s, o);
      var g = ge(s);
      if (!J(g))
        return Oe(a, g, o);
    }
    function Ae(a, s, o) {
      var u = ee(
        s,
        o,
        /*Create*/
        !1
      );
      if (!m(u))
        return u.OrdinaryGetOwnMetadata(a, s, o);
    }
    function Me(a, s, o, u) {
      var g = ee(
        o,
        u,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(a, s, o, u);
    }
    function Pe(a, s) {
      var o = ke(a, s), u = ge(a);
      if (u === null)
        return o;
      var g = Pe(u, s);
      if (g.length <= 0)
        return o;
      if (o.length <= 0)
        return g;
      for (var N = new L(), R = [], _ = 0, c = o; _ < c.length; _++) {
        var h = c[_], p = N.has(h);
        p || (N.add(h), R.push(h));
      }
      for (var y = 0, $ = g; y < $.length; y++) {
        var h = $[y], p = N.has(h);
        p || (N.add(h), R.push(h));
      }
      return R;
    }
    function ke(a, s) {
      var o = ee(
        a,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(a, s) : [];
    }
    function Re(a) {
      if (a === null)
        return 1;
      switch (typeof a) {
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
          return a === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function m(a) {
      return a === void 0;
    }
    function J(a) {
      return a === null;
    }
    function xt(a) {
      return typeof a == "symbol";
    }
    function k(a) {
      return typeof a == "object" ? a !== null : typeof a == "function";
    }
    function Ct(a, s) {
      switch (Re(a)) {
        case 0:
          return a;
        case 1:
          return a;
        case 2:
          return a;
        case 3:
          return a;
        case 4:
          return a;
        case 5:
          return a;
      }
      var o = "string", u = Le(a, l);
      if (u !== void 0) {
        var g = u.call(a, o);
        if (k(g))
          throw new TypeError();
        return g;
      }
      return Ot(a);
    }
    function Ot(a, s) {
      var o, u;
      {
        var g = a.toString;
        if (ue(g)) {
          var u = g.call(a);
          if (!k(u))
            return u;
        }
        var o = a.valueOf;
        if (ue(o)) {
          var u = o.call(a);
          if (!k(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Ne(a) {
      return !!a;
    }
    function At(a) {
      return "" + a;
    }
    function j(a) {
      var s = Ct(a);
      return xt(s) ? s : At(s);
    }
    function Ie(a) {
      return Array.isArray ? Array.isArray(a) : a instanceof Object ? a instanceof Array : Object.prototype.toString.call(a) === "[object Array]";
    }
    function ue(a) {
      return typeof a == "function";
    }
    function Ue(a) {
      return typeof a == "function";
    }
    function Mt(a) {
      switch (Re(a)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ve(a, s) {
      return a === s || a !== a && s !== s;
    }
    function Le(a, s) {
      var o = a[s];
      if (o != null) {
        if (!ue(o))
          throw new TypeError();
        return o;
      }
    }
    function He(a) {
      var s = Le(a, d);
      if (!ue(s))
        throw new TypeError();
      var o = s.call(a);
      if (!k(o))
        throw new TypeError();
      return o;
    }
    function Be(a) {
      return a.value;
    }
    function je(a) {
      var s = a.next();
      return s.done ? !1 : s;
    }
    function ze(a) {
      var s = a.return;
      s && s.call(a);
    }
    function ge(a) {
      var s = Object.getPrototypeOf(a);
      if (typeof a != "function" || a === w || s !== w)
        return s;
      var o = a.prototype, u = o && Object.getPrototypeOf(o);
      if (u == null || u === Object.prototype)
        return s;
      var g = u.constructor;
      return typeof g != "function" || g === a ? s : g;
    }
    function Pt() {
      var a;
      !m(Z) && typeof r.Reflect < "u" && !(Z in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (a = Nt(r.Reflect));
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
          case a === y:
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
      function _(y, $) {
        if (!m(s)) {
          if (s.isProviderFor(y, $))
            return s;
          if (!m(o)) {
            if (o.isProviderFor(y, $))
              return s;
            if (!m(u))
              for (var O = He(u); ; ) {
                var M = je(O);
                if (!M)
                  return;
                var H = Be(M);
                if (H.isProviderFor(y, $))
                  return ze(O), H;
              }
          }
        }
        if (!m(a) && a.isProviderFor(y, $))
          return a;
      }
      function c(y, $) {
        var O = g.get(y), M;
        return m(O) || (M = O.get($)), m(M) && (M = _(y, $), m(M) || (m(O) && (O = new P(), g.set(y, O)), O.set($, M))), M;
      }
      function h(y) {
        if (m(y))
          throw new TypeError();
        return s === y || o === y || !m(u) && u.has(y);
      }
      function p(y, $, O) {
        if (!h(O))
          throw new Error("Metadata provider not registered.");
        var M = c(y, $);
        if (M !== O) {
          if (!m(M))
            return !1;
          var H = g.get(y);
          m(H) && (H = new P(), g.set(y, H)), H.set($, O);
        }
        return !0;
      }
    }
    function kt() {
      var a;
      return !m(Z) && k(r.Reflect) && Object.isExtensible(r.Reflect) && (a = r.Reflect[Z]), m(a) && (a = Pt()), !m(Z) && k(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, Z, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: a
      }), a;
    }
    function Rt(a) {
      var s = new B(), o = {
        isProviderFor: function(h, p) {
          var y = s.get(h);
          return m(y) ? !1 : y.has(p);
        },
        OrdinaryDefineOwnMetadata: R,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: N,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: c
      };
      return de.registerProvider(o), o;
      function u(h, p, y) {
        var $ = s.get(h), O = !1;
        if (m($)) {
          if (!y)
            return;
          $ = new P(), s.set(h, $), O = !0;
        }
        var M = $.get(p);
        if (m(M)) {
          if (!y)
            return;
          if (M = new P(), $.set(p, M), !a.setProvider(h, p, o))
            throw $.delete(p), O && s.delete(h), new Error("Wrong provider for target.");
        }
        return M;
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
      function _(h, p) {
        var y = [], $ = u(
          h,
          p,
          /*Create*/
          !1
        );
        if (m($))
          return y;
        for (var O = $.keys(), M = He(O), H = 0; ; ) {
          var Fe = je(M);
          if (!Fe)
            return y.length = H, y;
          var Ht = Be(Fe);
          try {
            y[H] = Ht;
          } catch (Bt) {
            try {
              ze(M);
            } finally {
              throw Bt;
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
    function Nt(a) {
      var s = a.defineMetadata, o = a.hasOwnMetadata, u = a.getOwnMetadata, g = a.getOwnMetadataKeys, N = a.deleteMetadata, R = new B(), _ = {
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
      return _;
    }
    function ee(a, s, o) {
      var u = de.getProvider(a, s);
      if (!m(u))
        return u;
      if (o) {
        if (de.setProvider(a, s, xe))
          return xe;
        throw new Error("Illegal state.");
      }
    }
    function It() {
      var a = {}, s = [], o = (
        /** @class */
        function() {
          function _(c, h, p) {
            this._index = 0, this._keys = c, this._values = h, this._selector = p;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[d] = function() {
            return this;
          }, _.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, _.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
          }, _;
        }()
      ), u = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = a, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, _.prototype.set = function(c, h) {
            var p = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, _.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, y = h + 1; y < p; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, ve(c, this._cacheKey) && (this._cacheKey = a, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = a, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new o(this._keys, this._values, g);
          }, _.prototype.values = function() {
            return new o(this._keys, this._values, N);
          }, _.prototype.entries = function() {
            return new o(this._keys, this._values, R);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[d] = function() {
            return this.entries();
          }, _.prototype._find = function(c, h) {
            if (!ve(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (ve(this._keys[p], c)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return u;
      function g(_, c) {
        return _;
      }
      function N(_, c) {
        return c;
      }
      function R(_, c) {
        return [_, c];
      }
    }
    function Ut() {
      var a = (
        /** @class */
        function() {
          function s() {
            this._map = new P();
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
      return a;
    }
    function Lt() {
      var a = 16, s = T.create(), o = u();
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
          c = "@@WeakMap@@" + _();
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
      function _() {
        var c = R(a);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", p = 0; p < a; ++p) {
          var y = c[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function me(a) {
      return a.__ = void 0, delete a.__, a;
    }
  });
})(Ye || (Ye = {}));
function Ft(t) {
  return typeof t.name == "string" && typeof t.version == "string" && typeof t.title == "string" && typeof t.elementSelector == "string" && typeof t.group == "string" && typeof t.iconName == "string";
}
function Vt(t) {
  return function(e) {
    if (Ft(t)) {
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
function Wt(t) {
  return Vt(t);
}
function Yt(t) {
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
          const T = new CSSStyleSheet(), w = (S = l.sheet) == null ? void 0 : S.cssRules;
          w && (Array.from(w).forEach((P) => T.insertRule(P.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, T]);
        } else if (l) {
          const T = l.cloneNode(!0);
          f.appendChild(T);
        }
        d.forEach((T) => {
          const w = T.cloneNode(!0);
          f.appendChild(w);
        });
      }
    }
    return r;
  };
}
function Xt(t) {
  var r;
  if (((r = t == null ? void 0 : t.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function qt(t) {
  return function(e, r) {
    try {
      Xt(t);
      const i = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let n = !0;
      if (typeof r == "string") {
        try {
          n = typeof e[r] != "function";
        } catch {
          n = !0;
        }
        n && (t.fieldMappings = t.fieldMappings ?? r);
      }
      i.push(t), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function C(t) {
  return qt(t);
}
var x;
(function(t) {
  t.TEXT_INPUT = "text-input", t.PASSWORD_INPUT = "password-input", t.DROPDOWN = "dropdown", t.CHECKBOX = "checkbox", t.RADIO_BUTTON = "radio-button", t.RANGE_SLIDER = "range-slider", t.FILE_INPUT = "file-input", t.DATE_PICKER = "date-picker", t.COLOR_PICKER = "color-picker", t.NUMBER_INPUT = "number-input", t.TEXTAREA = "textarea", t.MULTI_SELECT = "multi-select", t.POPUP_DROPDOWN = "popup-dropdown", t.LAYOUT_PICKER = "layout-picker", t.RESPONSIVE_OVERRIDE = "responsive-override", t.IMAGE_PICKER = "image-picker", t.CHIPS = "chips";
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
let dt = class {
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
const Gt = (t) => new dt(typeof t == "string" ? t : t + "", void 0, Te), Zt = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((i, n, l) => i + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[l + 1], t[0]);
  return new dt(r, t, Te);
}, Jt = (t, e) => {
  if (Ee) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const i = document.createElement("style"), n = ce.litNonce;
    n !== void 0 && i.setAttribute("nonce", n), i.textContent = r.cssText, t.appendChild(i);
  }
}, qe = Ee ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const i of e.cssRules) r += i.cssText;
  return Gt(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Kt, defineProperty: Qt, getOwnPropertyDescriptor: er, getOwnPropertyNames: tr, getOwnPropertySymbols: rr, getPrototypeOf: ir } = Object, V = globalThis, Ge = V.trustedTypes, nr = Ge ? Ge.emptyScript : "", be = V.reactiveElementPolyfillSupport, re = (t, e) => t, he = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? nr : null;
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
} }, Se = (t, e) => !Kt(t, e), Ze = { attribute: !0, type: String, converter: he, reflect: !1, useDefault: !1, hasChanged: Se };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), V.litPropertyMetadata ?? (V.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let K = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = Ze) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const i = Symbol(), n = this.getPropertyDescriptor(e, i, r);
      n !== void 0 && Qt(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, r, i) {
    const { get: n, set: l } = er(this.prototype, e) ?? { get() {
      return this[r];
    }, set(d) {
      this[r] = d;
    } };
    return { get: n, set(d) {
      const v = n == null ? void 0 : n.call(this);
      l == null || l.call(this, d), this.requestUpdate(e, v, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(re("elementProperties"))) return;
    const e = ir(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(re("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(re("properties"))) {
      const r = this.properties, i = [...tr(r), ...rr(r)];
      for (const n of i) this.createProperty(n, r[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [i, n] of r) this.elementProperties.set(i, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, i] of this.elementProperties) {
      const n = this._$Eu(r, i);
      n !== void 0 && this._$Eh.set(n, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const n of i) r.unshift(qe(n));
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
    return Jt(e, this.constructor.elementStyles), e;
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
    const i = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, i);
    if (n !== void 0 && i.reflect === !0) {
      const d = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : he).toAttribute(r, i.type);
      this._$Em = e, d == null ? this.removeAttribute(n) : this.setAttribute(n, d), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var l, d;
    const i = this.constructor, n = i._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const v = i.getPropertyOptions(n), f = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : he;
      this._$Em = n;
      const S = f.fromAttribute(r, v.type);
      this[n] = S ?? ((d = this._$Ej) == null ? void 0 : d.get(n)) ?? S, this._$Em = null;
    }
  }
  requestUpdate(e, r, i, n = !1, l) {
    var d;
    if (e !== void 0) {
      const v = this.constructor;
      if (n === !1 && (l = this[e]), i ?? (i = v.getPropertyOptions(e)), !((i.hasChanged ?? Se)(l, r) || i.useDefault && i.reflect && l === ((d = this._$Ej) == null ? void 0 : d.get(e)) && !this.hasAttribute(v._$Eu(e, i)))) return;
      this.C(e, r, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: i, reflect: n, wrapped: l }, d) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, d ?? r ?? this[e]), l !== !0 || d !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (r = void 0), this._$AL.set(e, r)), n === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [l, d] of n) {
        const { wrapped: v } = d, f = this[l];
        v !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, d, f);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (i = this._$EO) == null || i.forEach((n) => {
        var l;
        return (l = n.hostUpdate) == null ? void 0 : l.call(n);
      }), this.update(r)) : this._$EM();
    } catch (n) {
      throw e = !1, this._$EM(), n;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$EO) == null || r.forEach((i) => {
      var n;
      return (n = i.hostUpdated) == null ? void 0 : n.call(i);
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
K.elementStyles = [], K.shadowRootOptions = { mode: "open" }, K[re("elementProperties")] = /* @__PURE__ */ new Map(), K[re("finalized")] = /* @__PURE__ */ new Map(), be == null || be({ ReactiveElement: K }), (V.reactiveElementVersions ?? (V.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = globalThis, Je = (t) => t, pe = ie.trustedTypes, Ke = pe ? pe.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, ut = "$lit$", F = `lit$${Math.random().toFixed(9).slice(2)}$`, ct = "?" + F, ar = `<${ct}>`, q = document, ae = () => q.createComment(""), se = (t) => t === null || typeof t != "object" && typeof t != "function", De = Array.isArray, sr = (t) => De(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", we = `[ 	
\f\r]`, te = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, et = />/g, W = RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), tt = /'/g, rt = /"/g, ht = /^(?:script|style|textarea|title)$/i, or = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), U = or(1), G = Symbol.for("lit-noChange"), I = Symbol.for("lit-nothing"), it = /* @__PURE__ */ new WeakMap(), Y = q.createTreeWalker(q, 129);
function pt(t, e) {
  if (!De(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ke !== void 0 ? Ke.createHTML(e) : e;
}
const lr = (t, e) => {
  const r = t.length - 1, i = [];
  let n, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", d = te;
  for (let v = 0; v < r; v++) {
    const f = t[v];
    let S, T, w = -1, P = 0;
    for (; P < f.length && (d.lastIndex = P, T = d.exec(f), T !== null); ) P = d.lastIndex, d === te ? T[1] === "!--" ? d = Qe : T[1] !== void 0 ? d = et : T[2] !== void 0 ? (ht.test(T[2]) && (n = RegExp("</" + T[2], "g")), d = W) : T[3] !== void 0 && (d = W) : d === W ? T[0] === ">" ? (d = n ?? te, w = -1) : T[1] === void 0 ? w = -2 : (w = d.lastIndex - T[2].length, S = T[1], d = T[3] === void 0 ? W : T[3] === '"' ? rt : tt) : d === rt || d === tt ? d = W : d === Qe || d === et ? d = te : (d = W, n = void 0);
    const L = d === W && t[v + 1].startsWith("/>") ? " " : "";
    l += d === te ? f + ar : w >= 0 ? (i.push(S), f.slice(0, w) + ut + f.slice(w) + F + L) : f + F + (w === -2 ? v : L);
  }
  return [pt(t, l + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class oe {
  constructor({ strings: e, _$litType$: r }, i) {
    let n;
    this.parts = [];
    let l = 0, d = 0;
    const v = e.length - 1, f = this.parts, [S, T] = lr(e, r);
    if (this.el = oe.createElement(S, i), Y.currentNode = this.el.content, r === 2 || r === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (n = Y.nextNode()) !== null && f.length < v; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const w of n.getAttributeNames()) if (w.endsWith(ut)) {
          const P = T[d++], L = n.getAttribute(w).split(F), B = /([.?@])?(.*)/.exec(P);
          f.push({ type: 1, index: l, name: B[2], strings: L, ctor: B[1] === "." ? ur : B[1] === "?" ? cr : B[1] === "@" ? hr : fe }), n.removeAttribute(w);
        } else w.startsWith(F) && (f.push({ type: 6, index: l }), n.removeAttribute(w));
        if (ht.test(n.tagName)) {
          const w = n.textContent.split(F), P = w.length - 1;
          if (P > 0) {
            n.textContent = pe ? pe.emptyScript : "";
            for (let L = 0; L < P; L++) n.append(w[L], ae()), Y.nextNode(), f.push({ type: 2, index: ++l });
            n.append(w[P], ae());
          }
        }
      } else if (n.nodeType === 8) if (n.data === ct) f.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = n.data.indexOf(F, w + 1)) !== -1; ) f.push({ type: 7, index: l }), w += F.length - 1;
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
  if (e === G) return e;
  let n = i !== void 0 ? (d = r._$Co) == null ? void 0 : d[i] : r._$Cl;
  const l = se(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== l && ((v = n == null ? void 0 : n._$AO) == null || v.call(n, !1), l === void 0 ? n = void 0 : (n = new l(t), n._$AT(t, r, i)), i !== void 0 ? (r._$Co ?? (r._$Co = []))[i] = n : r._$Cl = n), n !== void 0 && (e = Q(t, n._$AS(t, e.values), n, i)), e;
}
class dr {
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
    const { el: { content: r }, parts: i } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? q).importNode(r, !0);
    Y.currentNode = n;
    let l = Y.nextNode(), d = 0, v = 0, f = i[0];
    for (; f !== void 0; ) {
      if (d === f.index) {
        let S;
        f.type === 2 ? S = new le(l, l.nextSibling, this, e) : f.type === 1 ? S = new f.ctor(l, f.name, f.strings, this, e) : f.type === 6 && (S = new pr(l, this, e)), this._$AV.push(S), f = i[++v];
      }
      d !== (f == null ? void 0 : f.index) && (l = Y.nextNode(), d++);
    }
    return Y.currentNode = q, n;
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
  constructor(e, r, i, n) {
    this.type = 2, this._$AH = I, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = i, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
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
    e = Q(this, e, r), se(e) ? e === I || e == null || e === "" ? (this._$AH !== I && this._$AR(), this._$AH = I) : e !== this._$AH && e !== G && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : sr(e) ? this.k(e) : this._(e);
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
    const { values: r, _$litType$: i } = e, n = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = oe.createElement(pt(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === n) this._$AH.p(r);
    else {
      const d = new dr(n, this), v = d.u(this.options);
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
    let i, n = 0;
    for (const l of e) n === r.length ? r.push(i = new le(this.O(ae()), this.O(ae()), this, this.options)) : i = r[n], i._$AI(l), n++;
    n < r.length && (this._$AR(i && i._$AB.nextSibling, n), r.length = n);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); e !== this._$AB; ) {
      const n = Je(e).nextSibling;
      Je(e).remove(), e = n;
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
  constructor(e, r, i, n, l) {
    this.type = 1, this._$AH = I, this._$AN = void 0, this.element = e, this.name = r, this._$AM = n, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = I;
  }
  _$AI(e, r = this, i, n) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) e = Q(this, e, r, 0), d = !se(e) || e !== this._$AH && e !== G, d && (this._$AH = e);
    else {
      const v = e;
      let f, S;
      for (e = l[0], f = 0; f < l.length - 1; f++) S = Q(this, v[i + f], r, f), S === G && (S = this._$AH[f]), d || (d = !se(S) || S !== this._$AH[f]), S === I ? e = I : e !== I && (e += (S ?? "") + l[f + 1]), this._$AH[f] = S;
    }
    d && !n && this.j(e);
  }
  j(e) {
    e === I ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ur extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === I ? void 0 : e;
  }
}
class cr extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== I);
  }
}
class hr extends fe {
  constructor(e, r, i, n, l) {
    super(e, r, i, n, l), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = Q(this, e, r, 0) ?? I) === G) return;
    const i = this._$AH, n = e === I && i !== I || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== I && (i === I || n);
    n && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class pr {
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
const fr = (t, e, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? e;
  let n = i._$litPart$;
  if (n === void 0) {
    const l = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = n = new le(e.insertBefore(ae(), l), l, void 0, r ?? {});
  }
  return n._$AI(t), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis;
let ne = class extends K {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = fr(r, this.renderRoot, this.renderOptions);
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
    return G;
  }
};
var lt;
ne._$litElement$ = !0, ne.finalized = !0, (lt = X.litElementHydrateSupport) == null || lt.call(X, { LitElement: ne });
const $e = X.litElementPolyfillSupport;
$e == null || $e({ LitElement: ne });
(X.litElementVersions ?? (X.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yr = (t) => (e, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vr = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Se }, gr = (t = vr, e, r) => {
  const { kind: i, metadata: n } = r;
  let l = globalThis.litPropertyMetadata.get(n);
  if (l === void 0 && globalThis.litPropertyMetadata.set(n, l = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), l.set(r.name, t), i === "accessor") {
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
function A(t) {
  return (e, r) => typeof r == "object" ? gr(t, e, r) : ((i, n, l) => {
    const d = n.hasOwnProperty(l);
    return n.constructor.createProperty(l, i), d ? Object.getOwnPropertyDescriptor(n, l) : void 0;
  })(t, e, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function z(t) {
  return A({ ...t, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mr = { ATTRIBUTE: 1 }, br = (t) => (...e) => ({ _$litDirective$: t, values: e });
let wr = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, r, i) {
    this._$Ct = e, this._$AM = r, this._$Ci = i;
  }
  _$AS(e, r) {
    return this.update(e, r);
  }
  update(e, r) {
    return this.render(...r);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft = "important", _r = " !" + ft, nt = br(class extends wr {
  constructor(t) {
    var e;
    if (super(t), t.type !== mr.ATTRIBUTE || t.name !== "style" || ((e = t.strings) == null ? void 0 : e.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return Object.keys(t).reduce((e, r) => {
      const i = t[r];
      return i == null ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${i};`;
    }, "");
  }
  update(t, [e]) {
    const { style: r } = t.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(e)), this.render(e);
    for (const i of this.ft) e[i] == null && (this.ft.delete(i), i.includes("-") ? r.removeProperty(i) : r[i] = null);
    for (const i in e) {
      const n = e[i];
      if (n != null) {
        this.ft.add(i);
        const l = typeof n == "string" && n.endsWith(_r);
        i.includes("-") || l ? r.setProperty(i, l ? n.slice(0, -11) : n, l ? ft : "") : r[i] = n;
      }
    }
    return G;
  }
});
var $r = Object.defineProperty, Er = Object.getOwnPropertyDescriptor, E = (t, e, r, i) => {
  for (var n = i > 1 ? void 0 : i ? Er(e, r) : e, l = t.length - 1, d; l >= 0; l--)
    (d = t[l]) && (n = (i ? d(e, r, n) : d(n)) || n);
  return i && n && $r(e, r, n), n;
};
const at = () => window.zeroThemeManager, st = {
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
function ot(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let b = class extends ne {
  constructor() {
    super(...arguments), this.label = "", this.placeholder = "Select date", this.helpText = "", this.errorMessage = "", this.value = "", this.required = !1, this.disabled = !1, this.readonly = !1, this.showTodayButton = !0, this.showClearButton = !0, this.showWeekNumbers = !1, this.includeTime = !1, this.rangeSelection = !1, this.dateFormat = "yyyy-MM-dd", this.displayFormat = "MMM d, yyyy", this.minDate = "", this.maxDate = "", this.firstDayOfWeek = 0, this.width = "100%", this.height = "var(--input-height, 36px)", this.borderRadius = "8px", this.primaryColor = "#1976d2", this.errorColor = "#f44336", this.backgroundColor = "#ffffff", this.isOpen = !1, this.currentDate = /* @__PURE__ */ new Date(), this.selectedDate = null, this.selectedStartDate = null, this.selectedEndDate = null, this.hoverDate = null, this.hasError = !1, this.inputValue = "", this.selectedTime = "00:00", this.monthNames = [
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
    if (!t) return st;
    const e = ot(t.studio.display.label || "Date Picker"), r = ot(t.studio.display.placeholder || "Select date..."), i = "var(--uiv-surface-color, #ffffff)", n = "var(--uiv-text-color, #1e293b)", l = "var(--uiv-text-muted, #94a3b8)";
    return {
      ...st,
      templateHtml: [
        "<div style='display:grid;gap:6px;'>",
        e ? `<div style='font-size:14px;font-weight:500;color:${n};'>${e}</div>` : "",
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
    super.connectedCallback(), (t = at()) == null || t.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var r;
    const t = (r = at()) == null ? void 0 : r.getActiveTheme("zero-standard-themes"), e = { width: this.width };
    return this.primaryColor && (e["--primary-color"] = this.primaryColor, e["--uiv-primary"] = this.primaryColor), this.errorColor && (e["--error-color"] = this.errorColor, e["--uiv-error-color"] = this.errorColor), this.backgroundColor && (e["--uiv-surface"] = this.backgroundColor, e["--uiv-bg"] = this.backgroundColor), U`
      <style>
        ${t ? t.getGlobalStyles() : ""}
        ${t ? t.getComponentStyles("date-picker") : ""}
      </style>
      <div class="form-field uiv-${t == null ? void 0 : t.id}-theme" style=${nt(e)}>
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
            style=${nt({ height: this.height, "border-radius": this.borderRadius })}
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
                ${this.getWeekdayNames().map((i) => U`
                  <div class="weekday uiv-${t == null ? void 0 : t.id}-text" style="opacity: 0.7">${i}</div>
                `)}
              </div>
              
              ${this.renderCalendarDays()}
            </div>

            ${this.includeTime ? U`
              <div class="time-row" style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-top:1px solid #e0e0e0;">
                <span class="uiv-${t == null ? void 0 : t.id}-text" style="font-size:13px;font-weight:500;">Time</span>
                <input
                  type="time"
                  class="uiv-${t == null ? void 0 : t.id}-card"
                  .value=${this.selectedTime}
                  @input=${this.handleTimeChange}
                  style="flex:1;padding:6px 8px;border:1px solid var(--uiv-border, #e0e0e0);border-radius:6px;background:var(--uiv-surface, #fff);color:var(--uiv-text-main, inherit);"
                />
              </div>
            ` : ""}

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
    let n = new Date(r);
    for (; n <= e || n.getMonth() === this.currentDate.getMonth(); ) {
      const l = [];
      if (this.showWeekNumbers) {
        const d = this.getWeekNumber(n);
        l.push(U`<div class="week-number">${d}</div>`);
      }
      for (let d = 0; d < 7; d++) {
        const v = new Date(n);
        v.setDate(v.getDate() + d);
        const f = v.getMonth() === this.currentDate.getMonth(), S = this.isSameDay(v, /* @__PURE__ */ new Date()), T = this.isDateSelected(v), w = this.isDateDisabled(v), P = this.isDateInRange(v), L = this.rangeSelection && this.selectedStartDate && this.isSameDay(v, this.selectedStartDate), B = this.rangeSelection && this.selectedEndDate && this.isSameDay(v, this.selectedEndDate);
        l.push(U`
          <div 
            class="day ${f ? "" : "other-month"} ${S ? "today" : ""} ${T ? "selected" : ""} ${w ? "disabled" : ""} ${P ? "in-range" : ""} ${L ? "range-start" : ""} ${B ? "range-end" : ""}"
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
      `), n.setDate(n.getDate() + 7);
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
  handleTimeChange(t) {
    const e = t.target;
    this.selectedTime = e.value || "00:00", this.rangeSelection ? this.updateRangeValue() : this.updateSingleValue(), this.dispatchChangeEvent();
  }
  updateSingleValue() {
    if (this.selectedDate) {
      const t = this.includeTime ? ` ${this.selectedTime}` : "";
      this.value = this.formatDate(this.selectedDate, this.dateFormat) + t, this.inputValue = this.formatDate(this.selectedDate, this.displayFormat) + t;
    }
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
    const r = t.getFullYear(), i = String(t.getMonth() + 1).padStart(2, "0"), n = String(t.getDate()).padStart(2, "0"), d = this.monthNames[t.getMonth()].slice(0, 3);
    return e.replace(/yyyy/g, String(r)).replace(/MM/g, i).replace(/MMM/g, d).replace(/dd/g, n).replace(/d/g, String(t.getDate()));
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
b.styles = Zt`
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
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], b.prototype, "label", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], b.prototype, "placeholder", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Help Text",
    placeholderText: "Enter help text",
    fieldMappings: "helpText"
  })
], b.prototype, "helpText", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], b.prototype, "errorMessage", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Value",
    placeholderText: "Enter date value",
    fieldMappings: "value"
  })
], b.prototype, "value", 2);
E([
  A({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], b.prototype, "required", 2);
E([
  A({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], b.prototype, "disabled", 2);
E([
  A({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Readonly",
    fieldMappings: "readonly"
  })
], b.prototype, "readonly", 2);
E([
  A({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Show Today Button",
    fieldMappings: "showTodayButton"
  })
], b.prototype, "showTodayButton", 2);
E([
  A({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Show Clear Button",
    fieldMappings: "showClearButton"
  })
], b.prototype, "showClearButton", 2);
E([
  A({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Show Week Numbers",
    fieldMappings: "showWeekNumbers"
  })
], b.prototype, "showWeekNumbers", 2);
E([
  A({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Allow Time Selection",
    fieldMappings: "includeTime"
  })
], b.prototype, "includeTime", 2);
E([
  A({ type: Boolean }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.CHECKBOX,
    displayLabel: "Range Selection",
    fieldMappings: "rangeSelection"
  })
], b.prototype, "rangeSelection", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Date Format",
    placeholderText: "Enter date format",
    fieldMappings: "dateFormat"
  })
], b.prototype, "dateFormat", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Display Format",
    placeholderText: "Enter display format",
    fieldMappings: "displayFormat"
  })
], b.prototype, "displayFormat", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Min Date",
    placeholderText: "Enter minimum date",
    fieldMappings: "minDate"
  })
], b.prototype, "minDate", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Max Date",
    placeholderText: "Enter maximum date",
    fieldMappings: "maxDate"
  })
], b.prototype, "maxDate", 2);
E([
  A({ type: Number }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.NUMBER_INPUT,
    displayLabel: "First Day of Week (0-6)",
    fieldMappings: "firstDayOfWeek"
  })
], b.prototype, "firstDayOfWeek", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Width",
    placeholderText: "Enter width",
    fieldMappings: "width"
  })
], b.prototype, "width", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Height",
    placeholderText: "Enter height",
    fieldMappings: "height"
  })
], b.prototype, "height", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Border Radius",
    placeholderText: "Enter border radius",
    fieldMappings: "borderRadius"
  })
], b.prototype, "borderRadius", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Primary Color",
    placeholderText: "Enter primary color",
    fieldMappings: "primaryColor"
  })
], b.prototype, "primaryColor", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Error Color",
    placeholderText: "Enter error color",
    fieldMappings: "errorColor"
  })
], b.prototype, "errorColor", 2);
E([
  A({ type: String }),
  C({
    attributeType: D.PROPERTY,
    uiComponentType: x.TEXT_INPUT,
    displayLabel: "Background Color",
    placeholderText: "Enter background color",
    fieldMappings: "backgroundColor"
  })
], b.prototype, "backgroundColor", 2);
E([
  z()
], b.prototype, "isOpen", 2);
E([
  z()
], b.prototype, "currentDate", 2);
E([
  z()
], b.prototype, "selectedDate", 2);
E([
  z()
], b.prototype, "selectedStartDate", 2);
E([
  z()
], b.prototype, "selectedEndDate", 2);
E([
  z()
], b.prototype, "hoverDate", 2);
E([
  z()
], b.prototype, "hasError", 2);
E([
  z()
], b.prototype, "inputValue", 2);
E([
  z()
], b.prototype, "selectedTime", 2);
E([
  C({
    attributeType: D.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], b.prototype, "handleChange", 1);
E([
  C({
    attributeType: D.EVENT,
    displayLabel: "On Date Change",
    eventTrigger: "date-change"
  })
], b.prototype, "handleDateChange", 1);
b = E([
  Wt({
    name: "zero-date-picker",
    version: "1.0.0",
    title: "Date Picker",
    elementSelector: "zero-date-picker",
    group: "Form Controls",
    iconName: "date-picker-icon.png"
  }),
  Yt(),
  yr("zero-date-picker")
], b);
export {
  b as ZeroDatePicker,
  st as studioTemplate
};
