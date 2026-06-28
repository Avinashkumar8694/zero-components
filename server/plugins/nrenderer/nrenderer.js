var Ut = Object.defineProperty;
var Vt = (i, e, t) => e in i ? Ut(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var qe = (i, e, t) => Vt(i, typeof e != "symbol" ? e + "" : e, t);
var Fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Xe;
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Fe == "object" ? Fe : typeof self == "object" ? self : typeof this == "object" ? this : v(), r = n(i);
    typeof t.Reflect < "u" && (r = n(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function n(h, E) {
      return function(_, b) {
        Object.defineProperty(h, _, { configurable: !0, writable: !0, value: b }), E && E(_, b);
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
  })(function(e, t) {
    var r = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", l = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", d = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", h = { __proto__: [] } instanceof Array, E = !v && !h, _ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return we(/* @__PURE__ */ Object.create(null));
      } : h ? function() {
        return we({ __proto__: null });
      } : function() {
        return we({});
      },
      has: E ? function(o, a) {
        return r.call(o, a);
      } : function(o, a) {
        return a in o;
      },
      get: E ? function(o, a) {
        return r.call(o, a) ? o[a] : void 0;
      } : function(o, a) {
        return o[a];
      }
    }, b = Object.getPrototypeOf(Function), I = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Nt(), j = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : jt(), U = typeof WeakMap == "function" ? WeakMap : Lt(), Z = n ? Symbol.for("@reflect-metadata:registry") : void 0, ce = zt(), Me = kt(ce);
    function yt(o, a, s, u) {
      if (m(s)) {
        if (!De(o))
          throw new TypeError();
        if (!He(a))
          throw new TypeError();
        return At(o, a);
      } else {
        if (!De(o))
          throw new TypeError();
        if (!M(a))
          throw new TypeError();
        if (!M(u) && !m(u) && !J(u))
          throw new TypeError();
        return J(u) && (u = void 0), s = D(s), xt(o, a, s, u);
      }
    }
    e("decorate", yt);
    function vt(o, a) {
      function s(u, g) {
        if (!M(u))
          throw new TypeError();
        if (!m(g) && !Ct(g))
          throw new TypeError();
        ke(o, a, u, g);
      }
      return s;
    }
    e("metadata", vt);
    function gt(o, a, s, u) {
      if (!M(s))
        throw new TypeError();
      return m(u) || (u = D(u)), ke(o, a, s, u);
    }
    e("defineMetadata", gt);
    function mt(o, a, s) {
      if (!M(a))
        throw new TypeError();
      return m(s) || (s = D(s)), Ce(o, a, s);
    }
    e("hasMetadata", mt);
    function bt(o, a, s) {
      if (!M(a))
        throw new TypeError();
      return m(s) || (s = D(s)), me(o, a, s);
    }
    e("hasOwnMetadata", bt);
    function _t(o, a, s) {
      if (!M(a))
        throw new TypeError();
      return m(s) || (s = D(s)), Te(o, a, s);
    }
    e("getMetadata", _t);
    function wt(o, a, s) {
      if (!M(a))
        throw new TypeError();
      return m(s) || (s = D(s)), ze(o, a, s);
    }
    e("getOwnMetadata", wt);
    function $t(o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = D(a)), Ie(o, a);
    }
    e("getMetadataKeys", $t);
    function Et(o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = D(a)), Ne(o, a);
    }
    e("getOwnMetadataKeys", Et);
    function St(o, a, s) {
      if (!M(a))
        throw new TypeError();
      if (m(s) || (s = D(s)), !M(a))
        throw new TypeError();
      m(s) || (s = D(s));
      var u = te(
        a,
        s,
        /*Create*/
        !1
      );
      return m(u) ? !1 : u.OrdinaryDeleteMetadata(o, a, s);
    }
    e("deleteMetadata", St);
    function At(o, a) {
      for (var s = o.length - 1; s >= 0; --s) {
        var u = o[s], g = u(a);
        if (!m(g) && !J(g)) {
          if (!He(g))
            throw new TypeError();
          a = g;
        }
      }
      return a;
    }
    function xt(o, a, s, u) {
      for (var g = o.length - 1; g >= 0; --g) {
        var T = o[g], C = T(a, s, u);
        if (!m(C) && !J(C)) {
          if (!M(C))
            throw new TypeError();
          u = C;
        }
      }
      return u;
    }
    function Ce(o, a, s) {
      var u = me(o, a, s);
      if (u)
        return !0;
      var g = _e(a);
      return J(g) ? !1 : Ce(o, g, s);
    }
    function me(o, a, s) {
      var u = te(
        a,
        s,
        /*Create*/
        !1
      );
      return m(u) ? !1 : Le(u.OrdinaryHasOwnMetadata(o, a, s));
    }
    function Te(o, a, s) {
      var u = me(o, a, s);
      if (u)
        return ze(o, a, s);
      var g = _e(a);
      if (!J(g))
        return Te(o, g, s);
    }
    function ze(o, a, s) {
      var u = te(
        a,
        s,
        /*Create*/
        !1
      );
      if (!m(u))
        return u.OrdinaryGetOwnMetadata(o, a, s);
    }
    function ke(o, a, s, u) {
      var g = te(
        s,
        u,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(o, a, s, u);
    }
    function Ie(o, a) {
      var s = Ne(o, a), u = _e(o);
      if (u === null)
        return s;
      var g = Ie(u, a);
      if (g.length <= 0)
        return s;
      if (s.length <= 0)
        return g;
      for (var T = new j(), C = [], w = 0, c = s; w < c.length; w++) {
        var p = c[w], f = T.has(p);
        f || (T.add(p), C.push(p));
      }
      for (var y = 0, $ = g; y < $.length; y++) {
        var p = $[y], f = T.has(p);
        f || (T.add(p), C.push(p));
      }
      return C;
    }
    function Ne(o, a) {
      var s = te(
        o,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(o, a) : [];
    }
    function je(o) {
      if (o === null)
        return 1;
      switch (typeof o) {
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
          return o === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function m(o) {
      return o === void 0;
    }
    function J(o) {
      return o === null;
    }
    function Ot(o) {
      return typeof o == "symbol";
    }
    function M(o) {
      return typeof o == "object" ? o !== null : typeof o == "function";
    }
    function Pt(o, a) {
      switch (je(o)) {
        case 0:
          return o;
        case 1:
          return o;
        case 2:
          return o;
        case 3:
          return o;
        case 4:
          return o;
        case 5:
          return o;
      }
      var s = "string", u = Ue(o, l);
      if (u !== void 0) {
        var g = u.call(o, s);
        if (M(g))
          throw new TypeError();
        return g;
      }
      return Rt(o);
    }
    function Rt(o, a) {
      var s, u;
      {
        var g = o.toString;
        if (pe(g)) {
          var u = g.call(o);
          if (!M(u))
            return u;
        }
        var s = o.valueOf;
        if (pe(s)) {
          var u = s.call(o);
          if (!M(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Le(o) {
      return !!o;
    }
    function Mt(o) {
      return "" + o;
    }
    function D(o) {
      var a = Pt(o);
      return Ot(a) ? a : Mt(a);
    }
    function De(o) {
      return Array.isArray ? Array.isArray(o) : o instanceof Object ? o instanceof Array : Object.prototype.toString.call(o) === "[object Array]";
    }
    function pe(o) {
      return typeof o == "function";
    }
    function He(o) {
      return typeof o == "function";
    }
    function Ct(o) {
      switch (je(o)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function be(o, a) {
      return o === a || o !== o && a !== a;
    }
    function Ue(o, a) {
      var s = o[a];
      if (s != null) {
        if (!pe(s))
          throw new TypeError();
        return s;
      }
    }
    function Ve(o) {
      var a = Ue(o, d);
      if (!pe(a))
        throw new TypeError();
      var s = a.call(o);
      if (!M(s))
        throw new TypeError();
      return s;
    }
    function Be(o) {
      return o.value;
    }
    function We(o) {
      var a = o.next();
      return a.done ? !1 : a;
    }
    function Ge(o) {
      var a = o.return;
      a && a.call(o);
    }
    function _e(o) {
      var a = Object.getPrototypeOf(o);
      if (typeof o != "function" || o === b || a !== b)
        return a;
      var s = o.prototype, u = s && Object.getPrototypeOf(s);
      if (u == null || u === Object.prototype)
        return a;
      var g = u.constructor;
      return typeof g != "function" || g === o ? a : g;
    }
    function Tt() {
      var o;
      !m(Z) && typeof t.Reflect < "u" && !(Z in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (o = It(t.Reflect));
      var a, s, u, g = new U(), T = {
        registerProvider: C,
        getProvider: c,
        setProvider: f
      };
      return T;
      function C(y) {
        if (!Object.isExtensible(T))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case o === y:
            break;
          case m(a):
            a = y;
            break;
          case a === y:
            break;
          case m(s):
            s = y;
            break;
          case s === y:
            break;
          default:
            u === void 0 && (u = new j()), u.add(y);
            break;
        }
      }
      function w(y, $) {
        if (!m(a)) {
          if (a.isProviderFor(y, $))
            return a;
          if (!m(s)) {
            if (s.isProviderFor(y, $))
              return a;
            if (!m(u))
              for (var S = Ve(u); ; ) {
                var O = We(S);
                if (!O)
                  return;
                var L = Be(O);
                if (L.isProviderFor(y, $))
                  return Ge(S), L;
              }
          }
        }
        if (!m(o) && o.isProviderFor(y, $))
          return o;
      }
      function c(y, $) {
        var S = g.get(y), O;
        return m(S) || (O = S.get($)), m(O) && (O = w(y, $), m(O) || (m(S) && (S = new I(), g.set(y, S)), S.set($, O))), O;
      }
      function p(y) {
        if (m(y))
          throw new TypeError();
        return a === y || s === y || !m(u) && u.has(y);
      }
      function f(y, $, S) {
        if (!p(S))
          throw new Error("Metadata provider not registered.");
        var O = c(y, $);
        if (O !== S) {
          if (!m(O))
            return !1;
          var L = g.get(y);
          m(L) && (L = new I(), g.set(y, L)), L.set($, S);
        }
        return !0;
      }
    }
    function zt() {
      var o;
      return !m(Z) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (o = t.Reflect[Z]), m(o) && (o = Tt()), !m(Z) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, Z, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: o
      }), o;
    }
    function kt(o) {
      var a = new U(), s = {
        isProviderFor: function(p, f) {
          var y = a.get(p);
          return m(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: T,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: c
      };
      return ce.registerProvider(s), s;
      function u(p, f, y) {
        var $ = a.get(p), S = !1;
        if (m($)) {
          if (!y)
            return;
          $ = new I(), a.set(p, $), S = !0;
        }
        var O = $.get(f);
        if (m(O)) {
          if (!y)
            return;
          if (O = new I(), $.set(f, O), !o.setProvider(p, f, s))
            throw $.delete(f), S && a.delete(p), new Error("Wrong provider for target.");
        }
        return O;
      }
      function g(p, f, y) {
        var $ = u(
          f,
          y,
          /*Create*/
          !1
        );
        return m($) ? !1 : Le($.has(p));
      }
      function T(p, f, y) {
        var $ = u(
          f,
          y,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(p);
      }
      function C(p, f, y, $) {
        var S = u(
          y,
          $,
          /*Create*/
          !0
        );
        S.set(p, f);
      }
      function w(p, f) {
        var y = [], $ = u(
          p,
          f,
          /*Create*/
          !1
        );
        if (m($))
          return y;
        for (var S = $.keys(), O = Ve(S), L = 0; ; ) {
          var Ye = We(O);
          if (!Ye)
            return y.length = L, y;
          var Dt = Be(Ye);
          try {
            y[L] = Dt;
          } catch (Ht) {
            try {
              Ge(O);
            } finally {
              throw Ht;
            }
          }
          L++;
        }
      }
      function c(p, f, y) {
        var $ = u(
          f,
          y,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(p))
          return !1;
        if ($.size === 0) {
          var S = a.get(f);
          m(S) || (S.delete(y), S.size === 0 && a.delete(S));
        }
        return !0;
      }
    }
    function It(o) {
      var a = o.defineMetadata, s = o.hasOwnMetadata, u = o.getOwnMetadata, g = o.getOwnMetadataKeys, T = o.deleteMetadata, C = new U(), w = {
        isProviderFor: function(c, p) {
          var f = C.get(c);
          return !m(f) && f.has(p) ? !0 : g(c, p).length ? (m(f) && (f = new j(), C.set(c, f)), f.add(p), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: T
      };
      return w;
    }
    function te(o, a, s) {
      var u = ce.getProvider(o, a);
      if (!m(u))
        return u;
      if (s) {
        if (ce.setProvider(o, a, Me))
          return Me;
        throw new Error("Illegal state.");
      }
    }
    function Nt() {
      var o = {}, a = [], s = (
        /** @class */
        function() {
          function w(c, p, f) {
            this._index = 0, this._keys = c, this._values = p, this._selector = f;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[d] = function() {
            return this;
          }, w.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var p = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: p, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), c;
          }, w.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: c, done: !0 };
          }, w;
        }()
      ), u = (
        /** @class */
        function() {
          function w() {
            this._keys = [], this._values = [], this._cacheKey = o, this._cacheIndex = -2;
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
            var p = this._find(
              c,
              /*insert*/
              !1
            );
            return p >= 0 ? this._values[p] : void 0;
          }, w.prototype.set = function(c, p) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = p, this;
          }, w.prototype.delete = function(c) {
            var p = this._find(
              c,
              /*insert*/
              !1
            );
            if (p >= 0) {
              for (var f = this._keys.length, y = p + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, be(c, this._cacheKey) && (this._cacheKey = o, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = o, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new s(this._keys, this._values, g);
          }, w.prototype.values = function() {
            return new s(this._keys, this._values, T);
          }, w.prototype.entries = function() {
            return new s(this._keys, this._values, C);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[d] = function() {
            return this.entries();
          }, w.prototype._find = function(c, p) {
            if (!be(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (be(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return u;
      function g(w, c) {
        return w;
      }
      function T(w, c) {
        return c;
      }
      function C(w, c) {
        return [w, c];
      }
    }
    function jt() {
      var o = (
        /** @class */
        function() {
          function a() {
            this._map = new I();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(s) {
            return this._map.has(s);
          }, a.prototype.add = function(s) {
            return this._map.set(s, s), this;
          }, a.prototype.delete = function(s) {
            return this._map.delete(s);
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
          }, a.prototype[d] = function() {
            return this.keys();
          }, a;
        }()
      );
      return o;
    }
    function Lt() {
      var o = 16, a = _.create(), s = u();
      return (
        /** @class */
        function() {
          function c() {
            this._key = u();
          }
          return c.prototype.has = function(p) {
            var f = g(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? _.has(f, this._key) : !1;
          }, c.prototype.get = function(p) {
            var f = g(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? _.get(f, this._key) : void 0;
          }, c.prototype.set = function(p, f) {
            var y = g(
              p,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, c.prototype.delete = function(p) {
            var f = g(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = u();
          }, c;
        }()
      );
      function u() {
        var c;
        do
          c = "@@WeakMap@@" + w();
        while (_.has(a, c));
        return a[c] = !0, c;
      }
      function g(c, p) {
        if (!r.call(c, s)) {
          if (!p)
            return;
          Object.defineProperty(c, s, { value: _.create() });
        }
        return c[s];
      }
      function T(c, p) {
        for (var f = 0; f < p; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function C(c) {
        if (typeof Uint8Array == "function") {
          var p = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(p) : typeof msCrypto < "u" ? msCrypto.getRandomValues(p) : T(p, c), p;
        }
        return T(new Array(c), c);
      }
      function w() {
        var c = C(o);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var p = "", f = 0; f < o; ++f) {
          var y = c[f];
          (f === 4 || f === 6 || f === 8) && (p += "-"), y < 16 && (p += "0"), p += y.toString(16).toLowerCase();
        }
        return p;
      }
    }
    function we(o) {
      return o.__ = void 0, delete o.__, o;
    }
  });
})(Xe || (Xe = {}));
function Bt(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Wt(i) {
  return function(e) {
    if (Bt(i)) {
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
function Gt(i) {
  return Wt(i);
}
function Yt(i) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        qe(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), d = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), v = "adoptedStyleSheets" in Document.prototype, h = this.shadowRoot;
        if (!h) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && v) {
          const _ = new CSSStyleSheet(), b = (E = l.sheet) == null ? void 0 : E.cssRules;
          b && (Array.from(b).forEach((I) => _.insertRule(I.cssText)), h.adoptedStyleSheets = [...h.adoptedStyleSheets, _]);
        } else if (l) {
          const _ = l.cloneNode(!0);
          h.appendChild(_);
        }
        d.forEach((_) => {
          const b = _.cloneNode(!0);
          h.appendChild(b);
        });
      }
    }
    return t;
  };
}
function qt(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ft(i) {
  return function(e, t) {
    try {
      qt(i);
      const r = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let n = !0;
      if (typeof t == "string") {
        try {
          n = typeof e[t] != "function";
        } catch {
          n = !0;
        }
        n && (i.fieldMappings = i.fieldMappings ?? t);
      }
      r.push(i), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function k(i) {
  return Ft(i);
}
var N;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown", i.LAYOUT_PICKER = "layout-picker", i.RESPONSIVE_OVERRIDE = "responsive-override", i.IMAGE_PICKER = "image-picker", i.CHIPS = "chips";
})(N || (N = {}));
var R;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(R || (R = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, xe = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Oe = Symbol(), Ze = /* @__PURE__ */ new WeakMap();
let dt = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== Oe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (xe && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Ze.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Ze.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Xt = (i) => new dt(typeof i == "string" ? i : i + "", void 0, Oe), ut = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((r, n, l) => r + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[l + 1], i[0]);
  return new dt(t, i, Oe);
}, Zt = (i, e) => {
  if (xe) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), n = he.litNonce;
    n !== void 0 && r.setAttribute("nonce", n), r.textContent = t.cssText, i.appendChild(r);
  }
}, Je = xe ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Xt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Jt, defineProperty: Qt, getOwnPropertyDescriptor: Kt, getOwnPropertyNames: er, getOwnPropertySymbols: tr, getPrototypeOf: rr } = Object, B = globalThis, Qe = B.trustedTypes, ir = Qe ? Qe.emptyScript : "", $e = B.reactiveElementPolyfillSupport, ie = (i, e) => i, fe = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? ir : null;
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
} }, Pe = (i, e) => !Jt(i, e), Ke = { attribute: !0, type: String, converter: fe, reflect: !1, useDefault: !1, hasChanged: Pe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Q = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ke) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), n = this.getPropertyDescriptor(e, r, t);
      n !== void 0 && Qt(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: n, set: l } = Kt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(d) {
      this[t] = d;
    } };
    return { get: n, set(d) {
      const v = n == null ? void 0 : n.call(this);
      l == null || l.call(this, d), this.requestUpdate(e, v, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ke;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ie("elementProperties"))) return;
    const e = rr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ie("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ie("properties"))) {
      const t = this.properties, r = [...er(t), ...tr(t)];
      for (const n of r) this.createProperty(n, t[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, n] of t) this.elementProperties.set(r, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const n = this._$Eu(t, r);
      n !== void 0 && this._$Eh.set(n, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const n of r) t.unshift(Je(n));
    } else e !== void 0 && t.push(Je(e));
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
    const r = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, r);
    if (n !== void 0 && r.reflect === !0) {
      const d = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : fe).toAttribute(t, r.type);
      this._$Em = e, d == null ? this.removeAttribute(n) : this.setAttribute(n, d), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, d;
    const r = this.constructor, n = r._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const v = r.getPropertyOptions(n), h = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : fe;
      this._$Em = n;
      const E = h.fromAttribute(t, v.type);
      this[n] = E ?? ((d = this._$Ej) == null ? void 0 : d.get(n)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, n = !1, l) {
    var d;
    if (e !== void 0) {
      const v = this.constructor;
      if (n === !1 && (l = this[e]), r ?? (r = v.getPropertyOptions(e)), !((r.hasChanged ?? Pe)(l, t) || r.useDefault && r.reflect && l === ((d = this._$Ej) == null ? void 0 : d.get(e)) && !this.hasAttribute(v._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: n, wrapped: l }, d) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, d ?? t ?? this[e]), l !== !0 || d !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), n === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, d] of this._$Ep) this[l] = d;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [l, d] of n) {
        const { wrapped: v } = d, h = this[l];
        v !== !0 || this._$AL.has(l) || h === void 0 || this.C(l, void 0, d, h);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((n) => {
        var l;
        return (l = n.hostUpdate) == null ? void 0 : l.call(n);
      }), this.update(t)) : this._$EM();
    } catch (n) {
      throw e = !1, this._$EM(), n;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var n;
      return (n = r.hostUpdated) == null ? void 0 : n.call(r);
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
Q.elementStyles = [], Q.shadowRootOptions = { mode: "open" }, Q[ie("elementProperties")] = /* @__PURE__ */ new Map(), Q[ie("finalized")] = /* @__PURE__ */ new Map(), $e == null || $e({ ReactiveElement: Q }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = globalThis, et = (i) => i, ye = ne.trustedTypes, tt = ye ? ye.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ct = "$lit$", V = `lit$${Math.random().toFixed(9).slice(2)}$`, pt = "?" + V, nr = `<${pt}>`, F = document, ae = () => F.createComment(""), se = (i) => i === null || typeof i != "object" && typeof i != "function", Re = Array.isArray, or = (i) => Re(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", Ee = `[ 	
\f\r]`, re = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, rt = /-->/g, it = />/g, W = RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), nt = /'/g, ot = /"/g, ht = /^(?:script|style|textarea|title)$/i, ar = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), G = ar(1), K = Symbol.for("lit-noChange"), z = Symbol.for("lit-nothing"), at = /* @__PURE__ */ new WeakMap(), Y = F.createTreeWalker(F, 129);
function ft(i, e) {
  if (!Re(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return tt !== void 0 ? tt.createHTML(e) : e;
}
const sr = (i, e) => {
  const t = i.length - 1, r = [];
  let n, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", d = re;
  for (let v = 0; v < t; v++) {
    const h = i[v];
    let E, _, b = -1, I = 0;
    for (; I < h.length && (d.lastIndex = I, _ = d.exec(h), _ !== null); ) I = d.lastIndex, d === re ? _[1] === "!--" ? d = rt : _[1] !== void 0 ? d = it : _[2] !== void 0 ? (ht.test(_[2]) && (n = RegExp("</" + _[2], "g")), d = W) : _[3] !== void 0 && (d = W) : d === W ? _[0] === ">" ? (d = n ?? re, b = -1) : _[1] === void 0 ? b = -2 : (b = d.lastIndex - _[2].length, E = _[1], d = _[3] === void 0 ? W : _[3] === '"' ? ot : nt) : d === ot || d === nt ? d = W : d === rt || d === it ? d = re : (d = W, n = void 0);
    const j = d === W && i[v + 1].startsWith("/>") ? " " : "";
    l += d === re ? h + nr : b >= 0 ? (r.push(E), h.slice(0, b) + ct + h.slice(b) + V + j) : h + V + (b === -2 ? v : j);
  }
  return [ft(i, l + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class le {
  constructor({ strings: e, _$litType$: t }, r) {
    let n;
    this.parts = [];
    let l = 0, d = 0;
    const v = e.length - 1, h = this.parts, [E, _] = sr(e, t);
    if (this.el = le.createElement(E, r), Y.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (n = Y.nextNode()) !== null && h.length < v; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const b of n.getAttributeNames()) if (b.endsWith(ct)) {
          const I = _[d++], j = n.getAttribute(b).split(V), U = /([.?@])?(.*)/.exec(I);
          h.push({ type: 1, index: l, name: U[2], strings: j, ctor: U[1] === "." ? dr : U[1] === "?" ? ur : U[1] === "@" ? cr : ge }), n.removeAttribute(b);
        } else b.startsWith(V) && (h.push({ type: 6, index: l }), n.removeAttribute(b));
        if (ht.test(n.tagName)) {
          const b = n.textContent.split(V), I = b.length - 1;
          if (I > 0) {
            n.textContent = ye ? ye.emptyScript : "";
            for (let j = 0; j < I; j++) n.append(b[j], ae()), Y.nextNode(), h.push({ type: 2, index: ++l });
            n.append(b[I], ae());
          }
        }
      } else if (n.nodeType === 8) if (n.data === pt) h.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = n.data.indexOf(V, b + 1)) !== -1; ) h.push({ type: 7, index: l }), b += V.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const r = F.createElement("template");
    return r.innerHTML = e, r;
  }
}
function ee(i, e, t = i, r) {
  var d, v;
  if (e === K) return e;
  let n = r !== void 0 ? (d = t._$Co) == null ? void 0 : d[r] : t._$Cl;
  const l = se(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== l && ((v = n == null ? void 0 : n._$AO) == null || v.call(n, !1), l === void 0 ? n = void 0 : (n = new l(i), n._$AT(i, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = n : t._$Cl = n), n !== void 0 && (e = ee(i, n._$AS(i, e.values), n, r)), e;
}
class lr {
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
    const { el: { content: t }, parts: r } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? F).importNode(t, !0);
    Y.currentNode = n;
    let l = Y.nextNode(), d = 0, v = 0, h = r[0];
    for (; h !== void 0; ) {
      if (d === h.index) {
        let E;
        h.type === 2 ? E = new de(l, l.nextSibling, this, e) : h.type === 1 ? E = new h.ctor(l, h.name, h.strings, this, e) : h.type === 6 && (E = new pr(l, this, e)), this._$AV.push(E), h = r[++v];
      }
      d !== (h == null ? void 0 : h.index) && (l = Y.nextNode(), d++);
    }
    return Y.currentNode = F, n;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class de {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, n) {
    this.type = 2, this._$AH = z, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
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
    e = ee(this, e, t), se(e) ? e === z || e == null || e === "" ? (this._$AH !== z && this._$AR(), this._$AH = z) : e !== this._$AH && e !== K && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : or(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== z && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(F.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: r } = e, n = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = le.createElement(ft(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === n) this._$AH.p(t);
    else {
      const d = new lr(n, this), v = d.u(this.options);
      d.p(t), this.T(v), this._$AH = d;
    }
  }
  _$AC(e) {
    let t = at.get(e.strings);
    return t === void 0 && at.set(e.strings, t = new le(e)), t;
  }
  k(e) {
    Re(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, n = 0;
    for (const l of e) n === t.length ? t.push(r = new de(this.O(ae()), this.O(ae()), this, this.options)) : r = t[n], r._$AI(l), n++;
    n < t.length && (this._$AR(r && r._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const n = et(e).nextSibling;
      et(e).remove(), e = n;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ge {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, n, l) {
    this.type = 1, this._$AH = z, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = z;
  }
  _$AI(e, t = this, r, n) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) e = ee(this, e, t, 0), d = !se(e) || e !== this._$AH && e !== K, d && (this._$AH = e);
    else {
      const v = e;
      let h, E;
      for (e = l[0], h = 0; h < l.length - 1; h++) E = ee(this, v[r + h], t, h), E === K && (E = this._$AH[h]), d || (d = !se(E) || E !== this._$AH[h]), E === z ? e = z : e !== z && (e += (E ?? "") + l[h + 1]), this._$AH[h] = E;
    }
    d && !n && this.j(e);
  }
  j(e) {
    e === z ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class dr extends ge {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === z ? void 0 : e;
  }
}
class ur extends ge {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== z);
  }
}
class cr extends ge {
  constructor(e, t, r, n, l) {
    super(e, t, r, n, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ee(this, e, t, 0) ?? z) === K) return;
    const r = this._$AH, n = e === z && r !== z || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, l = e !== z && (r === z || n);
    n && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class pr {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ee(this, e);
  }
}
const Se = ne.litHtmlPolyfillSupport;
Se == null || Se(le, de), (ne.litHtmlVersions ?? (ne.litHtmlVersions = [])).push("3.3.3");
const hr = (i, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let n = r._$litPart$;
  if (n === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = n = new de(e.insertBefore(ae(), l), l, void 0, t ?? {});
  }
  return n._$AI(i), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis;
class oe extends Q {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = hr(t, this.renderRoot, this.renderOptions);
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
var lt;
oe._$litElement$ = !0, oe.finalized = !0, (lt = q.litElementHydrateSupport) == null || lt.call(q, { LitElement: oe });
const Ae = q.litElementPolyfillSupport;
Ae == null || Ae({ LitElement: oe });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr = (i) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(i, e);
  }) : customElements.define(i, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yr = { attribute: !0, type: String, converter: fe, reflect: !1, hasChanged: Pe }, vr = (i = yr, e, t) => {
  const { kind: r, metadata: n } = t;
  let l = globalThis.litPropertyMetadata.get(n);
  if (l === void 0 && globalThis.litPropertyMetadata.set(n, l = /* @__PURE__ */ new Map()), r === "setter" && ((i = Object.create(i)).wrapped = !0), l.set(t.name, i), r === "accessor") {
    const { name: d } = t;
    return { set(v) {
      const h = e.get.call(this);
      e.set.call(this, v), this.requestUpdate(d, h, i, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(d, void 0, i, v), v;
    } };
  }
  if (r === "setter") {
    const { name: d } = t;
    return function(v) {
      const h = this[d];
      e.call(this, v), this.requestUpdate(d, h, i, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function x(i) {
  return (e, t) => typeof t == "object" ? vr(i, e, t) : ((r, n, l) => {
    const d = n.hasOwnProperty(l);
    return n.constructor.createProperty(l, r), d ? Object.getOwnPropertyDescriptor(n, l) : void 0;
  })(i, e, t);
}
var gr = Object.defineProperty, mr = Object.getOwnPropertyDescriptor, P = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? mr(e, t) : e, l = i.length - 1, d; l >= 0; l--)
    (d = i[l]) && (n = (r ? d(e, t, n) : d(n)) || n);
  return r && n && gr(e, t, n), n;
};
const ve = class ve extends oe {
  constructor() {
    super(...arguments), this.responsiveProps = {}, this.activeEdge = "none", this.visible = !0, this.zIndex = 1, this.opacity = 1, this.customClass = "", this.width = "100%", this.height = "auto", this.margin = "0px", this.padding = "0px", this.direction = "row", this.justify = "flex-start", this.align = "stretch", this.gap = "16px", this.itemsPerRow = 1, this.backgroundColor = "transparent", this.borderRadius = "0px", this.elevation = "none";
  }
  get onClick() {
    return "click";
  }
  show() {
    this.visible = !0, this.requestUpdate();
  }
  hide() {
    this.visible = !1, this.requestUpdate();
  }
  // --- Responsive Engine ---
  /**
   * Generates a <style> tag with media queries based on responsiveProps.
   * Ensures parity between Studio and Renderer for mobile/tablet/desktop overrides.
   */
  renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return G``;
    const e = this.overridePrefix, t = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, r = {
      width: "width",
      height: "height",
      margin: "margin",
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      itemsPerRow: "items-per-row",
      columns: "items-per-row",
      // Alias support
      totalColumns: "total-columns",
      opacity: "opacity",
      zIndex: "z-index",
      backgroundColor: "background-color",
      borderRadius: "border-radius",
      elevation: "elevation",
      wrap: "wrap"
    };
    let n = "";
    return Object.entries(t).forEach(([l, d]) => {
      const v = this.responsiveProps[l];
      if (!v) return;
      let h = "";
      Object.entries(v).forEach(([E, _]) => {
        const b = r[E];
        b && (h += `--${e}-${b}-override: ${_};
`);
      }), h && (n += `${d} {
  :host {
    ${h}  }
}
`);
    }), n ? G`<style>${n}</style>` : G``;
  }
  // --- Visual Logic ---
  get overridePrefix() {
    return "zero-panel";
  }
  computeBaseStyles() {
    const e = this.overridePrefix;
    return [
      `--zero-width: var(--${e}-width-override, ${this.width})`,
      `--zero-height: var(--${e}-height-override, ${this.height})`,
      `--zero-margin: var(--${e}-margin-override, ${this.margin})`,
      `--zero-opacity: var(--${e}-opacity-override, ${this.opacity})`,
      `--zero-z-index: var(--${e}-z-index-override, ${this.zIndex})`,
      `--zero-pointer-events: ${this.visible ? "auto" : "none"}`,
      `display: ${this.visible ? "block" : "none"}`
    ].join(";");
  }
  computeInternalStyles() {
    const e = this.overridePrefix;
    return [
      `--zero-p-gap: var(--${e}-gap-override, ${this.gap})`,
      `--zero-p-padding: var(--${e}-padding-override, ${this.padding})`,
      `--zero-p-bg: var(--${e}-background-color-override, ${this.backgroundColor})`,
      `--zero-p-justify: var(--${e}-justify-override, ${this.justify})`,
      `--zero-p-align: var(--${e}-align-override, ${this.align})`,
      `--zero-p-border-radius: var(--${e}-border-radius-override, ${this.borderRadius})`,
      `--zero-p-shadow: var(--${e}-elevation-override, ${this.elevation})`,
      `--zero-p-direction: var(--${e}-direction-override, ${this.direction})`
    ].join(";");
  }
  computeColumnBasis() {
    const e = this.overridePrefix, t = `var(--${e}-gap-override, ${this.gap || "0px"})`, r = `var(--${e}-items-per-row-override, ${Math.max(1, Number(this.itemsPerRow) || 1)})`;
    return `calc((100% / ${r}) - ((${t} * (${r} - 1)) / ${r}))`;
  }
  get isStudio() {
    if (typeof window > "u") return !1;
    const e = window.location.search || "";
    if (e.includes("mode=preview") || e.includes("mode=live"))
      return !1;
    try {
      if (window.parent && window.parent.zeroThemeManager && !e.includes("mode=preview"))
        return !0;
    } catch {
    }
    return !!(window.zeroThemeManager && !e.includes("mode=preview"));
  }
  // --- Interaction (Studio) ---
  handleMouseMove(e) {
    if (!this.isStudio) return;
    const t = e.currentTarget.getBoundingClientRect(), r = (e.clientX - t.left) / t.width, n = (e.clientY - t.top) / t.height;
    this.direction === "row" ? r < 0.3 ? this.activeEdge = "left" : r > 0.7 ? this.activeEdge = "right" : this.activeEdge = "none" : n < 0.3 ? this.activeEdge = "top" : n > 0.7 ? this.activeEdge = "bottom" : this.activeEdge = "none";
  }
  handleMouseLeave() {
    this.isStudio && (this.activeEdge = "none");
  }
  renderDropIndicators() {
    return this.isStudio ? G`
      <div class="drop-indicator left ${this.activeEdge === "left" ? "active" : ""}"></div>
      <div class="drop-indicator right ${this.activeEdge === "right" ? "active" : ""}"></div>
      <div class="drop-indicator top ${this.activeEdge === "top" ? "active" : ""}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === "bottom" ? "active" : ""}"></div>
    ` : G``;
  }
  renderHeader() {
    return G``;
  }
};
ve.slots = [], ve.styles = ut`
    :host {
      display: block;
      box-sizing: border-box;
      width: var(--zero-width, 100%);
      height: var(--zero-height, auto);
      margin: var(--zero-margin, 0);
      opacity: var(--zero-opacity, 1);
      z-index: var(--zero-z-index, auto);
      pointer-events: var(--zero-pointer-events, auto);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .zero-internal-container {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      gap: var(--zero-p-gap, 0px);
      row-gap: var(--zero-p-row-gap, var(--zero-p-gap, 0px));
      padding: var(--zero-p-padding, 0px);
      background: var(--zero-p-bg, transparent);
      border: var(--zero-p-border-width, 0px) solid var(--zero-p-border-color, transparent);
      border-radius: var(--zero-p-border-radius, 0px);
      box-shadow: var(--zero-p-shadow, none);
      justify-content: var(--zero-p-justify, flex-start);
      align-items: var(--zero-p-align, stretch);
      overflow: var(--zero-p-overflow, visible);
      flex-direction: var(--zero-p-direction, row);
    }

    .zero-internal-container[data-direction="column"] {
      flex-direction: column;
    }

    /* Header & Expansion */
    .zero-layout-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      background: rgba(0,0,0,0.02);
    }

    .zero-layout-header .label { flex: 1; font-weight: 600; font-size: 0.95rem; }
    .zero-layout-header .icon { font-size: 1.1rem; }
    .zero-layout-header .chevron { transition: transform 0.3s ease; font-size: 0.8rem; opacity: 0.5; }
    
    :host([expanded]) .zero-layout-header .chevron { transform: rotate(180deg); }

    .zero-layout-body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    }

    :host([expanded]) .zero-layout-body {
      grid-template-rows: 1fr;
    }

    .zero-layout-content,
    .tab-pane {
      min-height: 0;
      display: flex;
      flex-direction: var(--zero-p-direction, row);
      flex-wrap: wrap;
      gap: var(--zero-p-gap, 0px);
      row-gap: var(--zero-p-row-gap, var(--zero-p-gap, 0px));
      justify-content: var(--zero-p-justify, flex-start);
      align-items: var(--zero-p-align, stretch);
      width: 100%;
      box-sizing: border-box;
    }

    /* Spatial Drop Indicators (30/70 Rule) */
    .drop-indicator {
      position: absolute;
      pointer-events: none;
      background: var(--zs-primary, #0ea5e9);
      opacity: 0;
      transition: opacity 0.2s ease;
      z-index: 1000;
      display: block;
    }

    .drop-indicator.active { opacity: 0.3; }

    .drop-indicator.left { left: 0; top: 0; width: 30%; height: 100%; border-right: 3px solid var(--zs-primary); }
    .drop-indicator.right { right: 0; top: 0; width: 30%; height: 100%; border-left: 3px solid var(--zs-primary); }
    .drop-indicator.top { top: 0; left: 0; width: 100%; height: 30%; border-bottom: 3px solid var(--zs-primary); }
    .drop-indicator.bottom { bottom: 0; left: 0; width: 100%; height: 30%; border-top: 3px solid var(--zs-primary); }
  `;
let A = ve;
P([
  x({ type: Object, attribute: "responsive-props" })
], A.prototype, "responsiveProps", 2);
P([
  x({ type: String })
], A.prototype, "activeEdge", 2);
P([
  x({ type: Boolean, reflect: !0 }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
], A.prototype, "visible", 2);
P([
  x({ type: Number, reflect: !0, attribute: "z-index" }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
], A.prototype, "zIndex", 2);
P([
  x({ type: Number, reflect: !0 }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
], A.prototype, "opacity", 2);
P([
  x({ type: String, attribute: "custom-class" }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
], A.prototype, "customClass", 2);
P([
  x({ type: String, reflect: !0 }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
], A.prototype, "width", 2);
P([
  x({ type: String, reflect: !0 }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
], A.prototype, "height", 2);
P([
  x({ type: String, reflect: !0 }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
], A.prototype, "margin", 2);
P([
  x({ type: String, reflect: !0 }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
], A.prototype, "padding", 2);
P([
  k({
    attributeType: R.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
], A.prototype, "onClick", 1);
P([
  x({ type: String, reflect: !0 })
], A.prototype, "direction", 2);
P([
  x({ type: String, reflect: !0 })
], A.prototype, "justify", 2);
P([
  x({ type: String, reflect: !0 })
], A.prototype, "align", 2);
P([
  x({ type: String, reflect: !0 })
], A.prototype, "gap", 2);
P([
  x({ type: Number, reflect: !0, attribute: "items-per-row" })
], A.prototype, "itemsPerRow", 2);
P([
  x({ type: String, attribute: "background-color", reflect: !0 }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
], A.prototype, "backgroundColor", 2);
P([
  x({ type: String, attribute: "border-radius", reflect: !0 }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
], A.prototype, "borderRadius", 2);
P([
  x({ type: String, reflect: !0, attribute: "elevation" }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.DROPDOWN,
    displayLabel: "Elevation (Shadow)",
    fieldMappings: "elevation",
    categoryLabel: "Appearance",
    optionItems: [
      { label: "None", value: "none" },
      { label: "Low", value: "0 2px 4px rgba(0,0,0,0.1)" },
      { label: "Medium", value: "0 4px 12px rgba(0,0,0,0.12)" },
      { label: "High", value: "0 12px 24px rgba(0,0,0,0.16)" }
    ]
  })
], A.prototype, "elevation", 2);
P([
  k({
    attributeType: R.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
], A.prototype, "show", 1);
P([
  k({
    attributeType: R.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
], A.prototype, "hide", 1);
var br = Object.defineProperty, _r = Object.getOwnPropertyDescriptor, ue = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? _r(e, t) : e, l = i.length - 1, d; l >= 0; l--)
    (d = i[l]) && (n = (r ? d(e, t, n) : d(n)) || n);
  return r && n && br(e, t, n), n;
};
const st = {
  kind: "section",
  slots: [
    { id: "default", label: "Renderer Content", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='padding:24px;border:2px dashed rgba(16, 185, 129, 0.25);border-radius:12px;background:rgba(240, 253, 244, 0.45);min-height:160px;display:flex;flex-direction:column;gap:12px;width:100%;box-sizing:border-box;'>",
    "<span style='font-size:0.65rem;color:#10b981;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;'>{{display:label}}</span>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>"
  ].join(""),
  badges: ["Renderer", "Layout"],
  emptyText: "Drop components here to render"
};
let X = class extends A {
  constructor() {
    super(...arguments), this.direction = "column", this.justify = "flex-start", this.align = "stretch", this.gap = "16px";
  }
  get overridePrefix() {
    return "zero-nrenderer";
  }
  static getStudioTemplate(i) {
    var _;
    if (!i) return st;
    H(i.studio.display.label || "Nrenderer");
    const e = ((_ = i.studio.props) == null ? void 0 : _.direction) || "column", t = H(i.props.justify || "flex-start"), r = H(i.props.align || "stretch"), n = H(i.props.gap || "16px"), l = H(i.props.padding || "16px"), d = H(i.props.backgroundColor || "transparent"), v = H(i.props.borderColor || "transparent"), h = H(i.props.borderWidth || "0px"), E = H(i.props.borderRadius || "0px");
    return {
      ...st,
      templateHtml: [
        `<div class="studio-nrenderer-container" style="
          --zero-nrenderer-justify: ${t};
          --zero-nrenderer-align: ${r};
          --zero-nrenderer-gap: ${n};
          --zero-nrenderer-padding: ${l};
          --zero-nrenderer-bg: ${d};
          --zero-nrenderer-border-color: ${v};
          --zero-nrenderer-border-width: ${h};
          --zero-nrenderer-radius: ${E};

          display: flex;
          flex-direction: ${e};
          justify-content: var(--zero-nrenderer-justify);
          align-items: var(--zero-nrenderer-align);
          gap: var(--zero-nrenderer-gap);
          padding: var(--zero-nrenderer-padding);
          background-color: var(--zero-nrenderer-bg);
          border: var(--zero-nrenderer-border-width) solid var(--zero-nrenderer-border-color);
          border-radius: var(--zero-nrenderer-radius);
          box-sizing: border-box;
          min-height: 160px;
          width: 100%;
        ">`,
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>"
      ].join("")
    };
  }
  render() {
    return G`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          ${this.renderHeader()}
          <div class="zero-layout-body">
            <div class="zero-layout-content">
              <div class="nrenderer-content">
                <slot name="default"></slot>
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
X.styles = [
  A.styles,
  ut`
      .nrenderer-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: var(--zero-p-direction, column);
      }
    `
];
ue([
  x({ type: String, reflect: !0 }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.RESPONSIVE_OVERRIDE,
    displayLabel: "Direction",
    fieldMappings: "direction",
    categoryLabel: "Layout",
    initialValue: "column",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], X.prototype, "direction", 2);
ue([
  x({ type: String, reflect: !0 }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.RESPONSIVE_OVERRIDE,
    displayLabel: "Justify",
    fieldMappings: "justify",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" }
    ]
  })
], X.prototype, "justify", 2);
ue([
  x({ type: String, reflect: !0 }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.RESPONSIVE_OVERRIDE,
    displayLabel: "Align",
    fieldMappings: "align",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Stretch", value: "stretch" }
    ]
  })
], X.prototype, "align", 2);
ue([
  x({ type: String, reflect: !0 }),
  k({
    attributeType: R.PROPERTY,
    uiComponentType: N.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap",
    categoryLabel: "Layout"
  })
], X.prototype, "gap", 2);
X = ue([
  Gt({
    name: "nrenderer",
    version: "1.0.0",
    title: "Nrenderer",
    elementSelector: "zero-nrenderer",
    group: "Layout",
    iconName: "profile-icon.png"
  }),
  Yt(),
  fr("zero-nrenderer")
], X);
function H(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  X as Nrenderer,
  st as studioTemplate
};
