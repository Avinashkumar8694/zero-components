var Ut = Object.defineProperty;
var It = (r, e, t) => e in r ? Ut(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Fe = (r, e, t) => It(r, typeof e != "symbol" ? e + "" : e, t);
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
    var t = typeof globalThis == "object" ? globalThis : typeof qe == "object" ? qe : typeof self == "object" ? self : typeof this == "object" ? this : y(), n = a(r);
    typeof t.Reflect < "u" && (n = a(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function a(p, x) {
      return function($, _) {
        Object.defineProperty(p, $, { configurable: !0, writable: !0, value: _ }), x && x($, _);
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
    function y() {
      return l() || d();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", l = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", d = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", y = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, x = !y && !p, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: y ? function() {
        return $e(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return $e({ __proto__: null });
      } : function() {
        return $e({});
      },
      has: x ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: x ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, _ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : kt(), P = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Rt(), R = typeof WeakMap == "function" ? WeakMap : Lt(), U = a ? Symbol.for("@reflect-metadata:registry") : void 0, j = Ot(), Q = Ct(j);
    function ce(i, s, o, u) {
      if (m(o)) {
        if (!He(i))
          throw new TypeError();
        if (!je(s))
          throw new TypeError();
        return wt(i, s);
      } else {
        if (!He(i))
          throw new TypeError();
        if (!S(s))
          throw new TypeError();
        if (!S(u) && !m(u) && !F(u))
          throw new TypeError();
        return F(u) && (u = void 0), o = D(o), $t(i, s, o, u);
      }
    }
    e("decorate", ce);
    function he(i, s) {
      function o(u, b) {
        if (!S(u))
          throw new TypeError();
        if (!m(b) && !St(b))
          throw new TypeError();
        Le(i, s, u, b);
      }
      return o;
    }
    e("metadata", he);
    function fe(i, s, o, u) {
      if (!S(o))
        throw new TypeError();
      return m(u) || (u = D(u)), Le(i, s, o, u);
    }
    e("defineMetadata", fe);
    function pt(i, s, o) {
      if (!S(s))
        throw new TypeError();
      return m(o) || (o = D(o)), Pe(i, s, o);
    }
    e("hasMetadata", pt);
    function vt(i, s, o) {
      if (!S(s))
        throw new TypeError();
      return m(o) || (o = D(o)), _e(i, s, o);
    }
    e("hasOwnMetadata", vt);
    function bt(i, s, o) {
      if (!S(s))
        throw new TypeError();
      return m(o) || (o = D(o)), ke(i, s, o);
    }
    e("getMetadata", bt);
    function yt(i, s, o) {
      if (!S(s))
        throw new TypeError();
      return m(o) || (o = D(o)), Re(i, s, o);
    }
    e("getOwnMetadata", yt);
    function mt(i, s) {
      if (!S(i))
        throw new TypeError();
      return m(s) || (s = D(s)), Ne(i, s);
    }
    e("getMetadataKeys", mt);
    function _t(i, s) {
      if (!S(i))
        throw new TypeError();
      return m(s) || (s = D(s)), De(i, s);
    }
    e("getOwnMetadataKeys", _t);
    function gt(i, s, o) {
      if (!S(s))
        throw new TypeError();
      if (m(o) || (o = D(o)), !S(s))
        throw new TypeError();
      m(o) || (o = D(o));
      var u = K(
        s,
        o,
        /*Create*/
        !1
      );
      return m(u) ? !1 : u.OrdinaryDeleteMetadata(i, s, o);
    }
    e("deleteMetadata", gt);
    function wt(i, s) {
      for (var o = i.length - 1; o >= 0; --o) {
        var u = i[o], b = u(s);
        if (!m(b) && !F(b)) {
          if (!je(b))
            throw new TypeError();
          s = b;
        }
      }
      return s;
    }
    function $t(i, s, o, u) {
      for (var b = i.length - 1; b >= 0; --b) {
        var C = i[b], M = C(s, o, u);
        if (!m(M) && !F(M)) {
          if (!S(M))
            throw new TypeError();
          u = M;
        }
      }
      return u;
    }
    function Pe(i, s, o) {
      var u = _e(i, s, o);
      if (u)
        return !0;
      var b = we(s);
      return F(b) ? !1 : Pe(i, b, o);
    }
    function _e(i, s, o) {
      var u = K(
        s,
        o,
        /*Create*/
        !1
      );
      return m(u) ? !1 : Ie(u.OrdinaryHasOwnMetadata(i, s, o));
    }
    function ke(i, s, o) {
      var u = _e(i, s, o);
      if (u)
        return Re(i, s, o);
      var b = we(s);
      if (!F(b))
        return ke(i, b, o);
    }
    function Re(i, s, o) {
      var u = K(
        s,
        o,
        /*Create*/
        !1
      );
      if (!m(u))
        return u.OrdinaryGetOwnMetadata(i, s, o);
    }
    function Le(i, s, o, u) {
      var b = K(
        o,
        u,
        /*Create*/
        !0
      );
      b.OrdinaryDefineOwnMetadata(i, s, o, u);
    }
    function Ne(i, s) {
      var o = De(i, s), u = we(i);
      if (u === null)
        return o;
      var b = Ne(u, s);
      if (b.length <= 0)
        return o;
      if (o.length <= 0)
        return b;
      for (var C = new P(), M = [], g = 0, c = o; g < c.length; g++) {
        var h = c[g], f = C.has(h);
        f || (C.add(h), M.push(h));
      }
      for (var v = 0, w = b; v < w.length; v++) {
        var h = w[v], f = C.has(h);
        f || (C.add(h), M.push(h));
      }
      return M;
    }
    function De(i, s) {
      var o = K(
        i,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Ue(i) {
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
    function m(i) {
      return i === void 0;
    }
    function F(i) {
      return i === null;
    }
    function xt(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function At(i, s) {
      switch (Ue(i)) {
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
      var o = "string", u = ze(i, l);
      if (u !== void 0) {
        var b = u.call(i, o);
        if (S(b))
          throw new TypeError();
        return b;
      }
      return Et(i);
    }
    function Et(i, s) {
      var o, u;
      {
        var b = i.toString;
        if (pe(b)) {
          var u = b.call(i);
          if (!S(u))
            return u;
        }
        var o = i.valueOf;
        if (pe(o)) {
          var u = o.call(i);
          if (!S(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Ie(i) {
      return !!i;
    }
    function Tt(i) {
      return "" + i;
    }
    function D(i) {
      var s = At(i);
      return xt(s) ? s : Tt(s);
    }
    function He(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function pe(i) {
      return typeof i == "function";
    }
    function je(i) {
      return typeof i == "function";
    }
    function St(i) {
      switch (Ue(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ge(i, s) {
      return i === s || i !== i && s !== s;
    }
    function ze(i, s) {
      var o = i[s];
      if (o != null) {
        if (!pe(o))
          throw new TypeError();
        return o;
      }
    }
    function Ve(i) {
      var s = ze(i, d);
      if (!pe(s))
        throw new TypeError();
      var o = s.call(i);
      if (!S(o))
        throw new TypeError();
      return o;
    }
    function Je(i) {
      return i.value;
    }
    function Be(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Ge(i) {
      var s = i.return;
      s && s.call(i);
    }
    function we(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || s !== _)
        return s;
      var o = i.prototype, u = o && Object.getPrototypeOf(o);
      if (u == null || u === Object.prototype)
        return s;
      var b = u.constructor;
      return typeof b != "function" || b === i ? s : b;
    }
    function Mt() {
      var i;
      !m(U) && typeof t.Reflect < "u" && !(U in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Pt(t.Reflect));
      var s, o, u, b = new R(), C = {
        registerProvider: M,
        getProvider: c,
        setProvider: f
      };
      return C;
      function M(v) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case m(s):
            s = v;
            break;
          case s === v:
            break;
          case m(o):
            o = v;
            break;
          case o === v:
            break;
          default:
            u === void 0 && (u = new P()), u.add(v);
            break;
        }
      }
      function g(v, w) {
        if (!m(s)) {
          if (s.isProviderFor(v, w))
            return s;
          if (!m(o)) {
            if (o.isProviderFor(v, w))
              return s;
            if (!m(u))
              for (var A = Ve(u); ; ) {
                var E = Be(A);
                if (!E)
                  return;
                var L = Je(E);
                if (L.isProviderFor(v, w))
                  return Ge(A), L;
              }
          }
        }
        if (!m(i) && i.isProviderFor(v, w))
          return i;
      }
      function c(v, w) {
        var A = b.get(v), E;
        return m(A) || (E = A.get(w)), m(E) && (E = g(v, w), m(E) || (m(A) && (A = new T(), b.set(v, A)), A.set(w, E))), E;
      }
      function h(v) {
        if (m(v))
          throw new TypeError();
        return s === v || o === v || !m(u) && u.has(v);
      }
      function f(v, w, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var E = c(v, w);
        if (E !== A) {
          if (!m(E))
            return !1;
          var L = b.get(v);
          m(L) && (L = new T(), b.set(v, L)), L.set(w, A);
        }
        return !0;
      }
    }
    function Ot() {
      var i;
      return !m(U) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[U]), m(i) && (i = Mt()), !m(U) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, U, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ct(i) {
      var s = new R(), o = {
        isProviderFor: function(h, f) {
          var v = s.get(h);
          return m(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: b,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: c
      };
      return j.registerProvider(o), o;
      function u(h, f, v) {
        var w = s.get(h), A = !1;
        if (m(w)) {
          if (!v)
            return;
          w = new T(), s.set(h, w), A = !0;
        }
        var E = w.get(f);
        if (m(E)) {
          if (!v)
            return;
          if (E = new T(), w.set(f, E), !i.setProvider(h, f, o))
            throw w.delete(f), A && s.delete(h), new Error("Wrong provider for target.");
        }
        return E;
      }
      function b(h, f, v) {
        var w = u(
          f,
          v,
          /*Create*/
          !1
        );
        return m(w) ? !1 : Ie(w.has(h));
      }
      function C(h, f, v) {
        var w = u(
          f,
          v,
          /*Create*/
          !1
        );
        if (!m(w))
          return w.get(h);
      }
      function M(h, f, v, w) {
        var A = u(
          v,
          w,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function g(h, f) {
        var v = [], w = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(w))
          return v;
        for (var A = w.keys(), E = Ve(A), L = 0; ; ) {
          var We = Be(E);
          if (!We)
            return v.length = L, v;
          var Nt = Je(We);
          try {
            v[L] = Nt;
          } catch (Dt) {
            try {
              Ge(E);
            } finally {
              throw Dt;
            }
          }
          L++;
        }
      }
      function c(h, f, v) {
        var w = u(
          f,
          v,
          /*Create*/
          !1
        );
        if (m(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var A = s.get(f);
          m(A) || (A.delete(v), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function Pt(i) {
      var s = i.defineMetadata, o = i.hasOwnMetadata, u = i.getOwnMetadata, b = i.getOwnMetadataKeys, C = i.deleteMetadata, M = new R(), g = {
        isProviderFor: function(c, h) {
          var f = M.get(c);
          return !m(f) && f.has(h) ? !0 : b(c, h).length ? (m(f) && (f = new P(), M.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: C
      };
      return g;
    }
    function K(i, s, o) {
      var u = j.getProvider(i, s);
      if (!m(u))
        return u;
      if (o) {
        if (j.setProvider(i, s, Q))
          return Q;
        throw new Error("Illegal state.");
      }
    }
    function kt() {
      var i = {}, s = [], o = (
        /** @class */
        function() {
          function g(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[d] = function() {
            return this;
          }, g.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, g.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
          }, g;
        }()
      ), u = (
        /** @class */
        function() {
          function g() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(g.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), g.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, g.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, g.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, v = h + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, ge(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new o(this._keys, this._values, b);
          }, g.prototype.values = function() {
            return new o(this._keys, this._values, C);
          }, g.prototype.entries = function() {
            return new o(this._keys, this._values, M);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[d] = function() {
            return this.entries();
          }, g.prototype._find = function(c, h) {
            if (!ge(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ge(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return u;
      function b(g, c) {
        return g;
      }
      function C(g, c) {
        return c;
      }
      function M(g, c) {
        return [g, c];
      }
    }
    function Rt() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new T();
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
      return i;
    }
    function Lt() {
      var i = 16, s = $.create(), o = u();
      return (
        /** @class */
        function() {
          function c() {
            this._key = u();
          }
          return c.prototype.has = function(h) {
            var f = b(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = b(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var v = b(
              h,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
          }, c.prototype.delete = function(h) {
            var f = b(
              h,
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
          c = "@@WeakMap@@" + g();
        while ($.has(s, c));
        return s[c] = !0, c;
      }
      function b(c, h) {
        if (!n.call(c, o)) {
          if (!h)
            return;
          Object.defineProperty(c, o, { value: $.create() });
        }
        return c[o];
      }
      function C(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function M(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, c), h;
        }
        return C(new Array(c), c);
      }
      function g() {
        var c = M(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var v = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function $e(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ze || (Ze = {}));
function Ht(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function jt(r) {
  return function(e) {
    if (Ht(r)) {
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
function zt(r) {
  return jt(r);
}
function Vt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Fe(this, "_stylesApplied", !1);
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
        var x;
        const l = document.querySelector('style.global-style[type="text/css"]'), d = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), y = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && y) {
          const $ = new CSSStyleSheet(), _ = (x = l.sheet) == null ? void 0 : x.cssRules;
          _ && (Array.from(_).forEach((T) => $.insertRule(T.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          p.appendChild($);
        }
        d.forEach(($) => {
          const _ = $.cloneNode(!0);
          p.appendChild(_);
        });
      }
    }
    return t;
  };
}
function Jt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Bt(r) {
  return function(e, t) {
    try {
      Jt(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let a = !0;
      if (typeof t == "string") {
        try {
          a = typeof e[t] != "function";
        } catch {
          a = !0;
        }
        a && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function le(r) {
  return Bt(r);
}
var B;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(B || (B = {}));
var G;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(G || (G = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ve = globalThis, Se = ve.ShadowRoot && (ve.ShadyCSS === void 0 || ve.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Me = Symbol(), Xe = /* @__PURE__ */ new WeakMap();
let lt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Me) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Se && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Xe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Xe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Gt = (r) => new lt(typeof r == "string" ? r : r + "", void 0, Me), Wt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, a, l) => n + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + r[l + 1], r[0]);
  return new lt(t, r, Me);
}, Ft = (r, e) => {
  if (Se) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), a = ve.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = t.cssText, r.appendChild(n);
  }
}, Ye = Se ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Gt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qt, defineProperty: Zt, getOwnPropertyDescriptor: Xt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, H = globalThis, Qe = H.trustedTypes, er = Qe ? Qe.emptyScript : "", xe = H.reactiveElementPolyfillSupport, re = (r, e) => r, be = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? er : null;
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
} }, Oe = (r, e) => !qt(r, e), Ke = { attribute: !0, type: String, converter: be, reflect: !1, useDefault: !1, hasChanged: Oe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ke) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), a = this.getPropertyDescriptor(e, n, t);
      a !== void 0 && Zt(this.prototype, e, a);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: a, set: l } = Xt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(d) {
      this[t] = d;
    } };
    return { get: a, set(d) {
      const y = a == null ? void 0 : a.call(this);
      l == null || l.call(this, d), this.requestUpdate(e, y, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ke;
  }
  static _$Ei() {
    if (this.hasOwnProperty(re("elementProperties"))) return;
    const e = Kt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(re("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(re("properties"))) {
      const t = this.properties, n = [...Yt(t), ...Qt(t)];
      for (const a of n) this.createProperty(a, t[a]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, a] of t) this.elementProperties.set(n, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const a = this._$Eu(t, n);
      a !== void 0 && this._$Eh.set(a, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const a of n) t.unshift(Ye(a));
    } else e !== void 0 && t.push(Ye(e));
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
    return Ft(e, this.constructor.elementStyles), e;
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
    const n = this.constructor.elementProperties.get(e), a = this.constructor._$Eu(e, n);
    if (a !== void 0 && n.reflect === !0) {
      const d = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : be).toAttribute(t, n.type);
      this._$Em = e, d == null ? this.removeAttribute(a) : this.setAttribute(a, d), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, d;
    const n = this.constructor, a = n._$Eh.get(e);
    if (a !== void 0 && this._$Em !== a) {
      const y = n.getPropertyOptions(a), p = typeof y.converter == "function" ? { fromAttribute: y.converter } : ((l = y.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? y.converter : be;
      this._$Em = a;
      const x = p.fromAttribute(t, y.type);
      this[a] = x ?? ((d = this._$Ej) == null ? void 0 : d.get(a)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, a = !1, l) {
    var d;
    if (e !== void 0) {
      const y = this.constructor;
      if (a === !1 && (l = this[e]), n ?? (n = y.getPropertyOptions(e)), !((n.hasChanged ?? Oe)(l, t) || n.useDefault && n.reflect && l === ((d = this._$Ej) == null ? void 0 : d.get(e)) && !this.hasAttribute(y._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: a, wrapped: l }, d) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, d ?? t ?? this[e]), l !== !0 || d !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), a === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, d] of this._$Ep) this[l] = d;
        this._$Ep = void 0;
      }
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [l, d] of a) {
        const { wrapped: y } = d, p = this[l];
        y !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, d, p);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((a) => {
        var l;
        return (l = a.hostUpdate) == null ? void 0 : l.call(a);
      }), this.update(t)) : this._$EM();
    } catch (a) {
      throw e = !1, this._$EM(), a;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var a;
      return (a = n.hostUpdated) == null ? void 0 : a.call(n);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[re("elementProperties")] = /* @__PURE__ */ new Map(), Z[re("finalized")] = /* @__PURE__ */ new Map(), xe == null || xe({ ReactiveElement: Z }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = globalThis, et = (r) => r, ye = ne.trustedTypes, tt = ye ? ye.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, dt = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + I, tr = `<${ut}>`, W = document, ae = () => W.createComment(""), se = (r) => r === null || typeof r != "object" && typeof r != "function", Ce = Array.isArray, rr = (r) => Ce(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Ae = `[ 	
\f\r]`, ee = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, rt = /-->/g, nt = />/g, z = RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), it = /'/g, at = /"/g, ct = /^(?:script|style|textarea|title)$/i, nr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), q = nr(1), X = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), st = /* @__PURE__ */ new WeakMap(), V = W.createTreeWalker(W, 129);
function ht(r, e) {
  if (!Ce(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return tt !== void 0 ? tt.createHTML(e) : e;
}
const ir = (r, e) => {
  const t = r.length - 1, n = [];
  let a, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", d = ee;
  for (let y = 0; y < t; y++) {
    const p = r[y];
    let x, $, _ = -1, T = 0;
    for (; T < p.length && (d.lastIndex = T, $ = d.exec(p), $ !== null); ) T = d.lastIndex, d === ee ? $[1] === "!--" ? d = rt : $[1] !== void 0 ? d = nt : $[2] !== void 0 ? (ct.test($[2]) && (a = RegExp("</" + $[2], "g")), d = z) : $[3] !== void 0 && (d = z) : d === z ? $[0] === ">" ? (d = a ?? ee, _ = -1) : $[1] === void 0 ? _ = -2 : (_ = d.lastIndex - $[2].length, x = $[1], d = $[3] === void 0 ? z : $[3] === '"' ? at : it) : d === at || d === it ? d = z : d === rt || d === nt ? d = ee : (d = z, a = void 0);
    const P = d === z && r[y + 1].startsWith("/>") ? " " : "";
    l += d === ee ? p + tr : _ >= 0 ? (n.push(x), p.slice(0, _) + dt + p.slice(_) + I + P) : p + I + (_ === -2 ? y : P);
  }
  return [ht(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class oe {
  constructor({ strings: e, _$litType$: t }, n) {
    let a;
    this.parts = [];
    let l = 0, d = 0;
    const y = e.length - 1, p = this.parts, [x, $] = ir(e, t);
    if (this.el = oe.createElement(x, n), V.currentNode = this.el.content, t === 2 || t === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (a = V.nextNode()) !== null && p.length < y; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const _ of a.getAttributeNames()) if (_.endsWith(dt)) {
          const T = $[d++], P = a.getAttribute(_).split(I), R = /([.?@])?(.*)/.exec(T);
          p.push({ type: 1, index: l, name: R[2], strings: P, ctor: R[1] === "." ? sr : R[1] === "?" ? or : R[1] === "@" ? lr : me }), a.removeAttribute(_);
        } else _.startsWith(I) && (p.push({ type: 6, index: l }), a.removeAttribute(_));
        if (ct.test(a.tagName)) {
          const _ = a.textContent.split(I), T = _.length - 1;
          if (T > 0) {
            a.textContent = ye ? ye.emptyScript : "";
            for (let P = 0; P < T; P++) a.append(_[P], ae()), V.nextNode(), p.push({ type: 2, index: ++l });
            a.append(_[T], ae());
          }
        }
      } else if (a.nodeType === 8) if (a.data === ut) p.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = a.data.indexOf(I, _ + 1)) !== -1; ) p.push({ type: 7, index: l }), _ += I.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = W.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Y(r, e, t = r, n) {
  var d, y;
  if (e === X) return e;
  let a = n !== void 0 ? (d = t._$Co) == null ? void 0 : d[n] : t._$Cl;
  const l = se(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((y = a == null ? void 0 : a._$AO) == null || y.call(a, !1), l === void 0 ? a = void 0 : (a = new l(r), a._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = a : t._$Cl = a), a !== void 0 && (e = Y(r, a._$AS(r, e.values), a, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, a = ((e == null ? void 0 : e.creationScope) ?? W).importNode(t, !0);
    V.currentNode = a;
    let l = V.nextNode(), d = 0, y = 0, p = n[0];
    for (; p !== void 0; ) {
      if (d === p.index) {
        let x;
        p.type === 2 ? x = new de(l, l.nextSibling, this, e) : p.type === 1 ? x = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (x = new dr(l, this, e)), this._$AV.push(x), p = n[++y];
      }
      d !== (p == null ? void 0 : p.index) && (l = V.nextNode(), d++);
    }
    return V.currentNode = W, a;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class de {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, a) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = a, this._$Cv = (a == null ? void 0 : a.isConnected) ?? !0;
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
    e = Y(this, e, t), se(e) ? e === O || e == null || e === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : e !== this._$AH && e !== X && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : rr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== O && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, a = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = oe.createElement(ht(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === a) this._$AH.p(t);
    else {
      const d = new ar(a, this), y = d.u(this.options);
      d.p(t), this.T(y), this._$AH = d;
    }
  }
  _$AC(e) {
    let t = st.get(e.strings);
    return t === void 0 && st.set(e.strings, t = new oe(e)), t;
  }
  k(e) {
    Ce(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, a = 0;
    for (const l of e) a === t.length ? t.push(n = new de(this.O(ae()), this.O(ae()), this, this.options)) : n = t[a], n._$AI(l), a++;
    a < t.length && (this._$AR(n && n._$AB.nextSibling, a), t.length = a);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const a = et(e).nextSibling;
      et(e).remove(), e = a;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class me {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, a, l) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = e, this.name = t, this._$AM = a, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = O;
  }
  _$AI(e, t = this, n, a) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) e = Y(this, e, t, 0), d = !se(e) || e !== this._$AH && e !== X, d && (this._$AH = e);
    else {
      const y = e;
      let p, x;
      for (e = l[0], p = 0; p < l.length - 1; p++) x = Y(this, y[n + p], t, p), x === X && (x = this._$AH[p]), d || (d = !se(x) || x !== this._$AH[p]), x === O ? e = O : e !== O && (e += (x ?? "") + l[p + 1]), this._$AH[p] = x;
    }
    d && !a && this.j(e);
  }
  j(e) {
    e === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class sr extends me {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === O ? void 0 : e;
  }
}
class or extends me {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== O);
  }
}
class lr extends me {
  constructor(e, t, n, a, l) {
    super(e, t, n, a, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Y(this, e, t, 0) ?? O) === X) return;
    const n = this._$AH, a = e === O && n !== O || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== O && (n === O || a);
    a && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class dr {
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
const Ee = ne.litHtmlPolyfillSupport;
Ee == null || Ee(oe, de), (ne.litHtmlVersions ?? (ne.litHtmlVersions = [])).push("3.3.3");
const ur = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let a = n._$litPart$;
  if (a === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = a = new de(e.insertBefore(ae(), l), l, void 0, t ?? {});
  }
  return a._$AI(r), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis;
class ie extends Z {
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
    return X;
  }
}
var ot;
ie._$litElement$ = !0, ie.finalized = !0, (ot = J.litElementHydrateSupport) == null || ot.call(J, { LitElement: ie });
const Te = J.litElementPolyfillSupport;
Te == null || Te({ LitElement: ie });
(J.litElementVersions ?? (J.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: be, reflect: !1, hasChanged: Oe }, hr = (r = cr, e, t) => {
  const { kind: n, metadata: a } = t;
  let l = globalThis.litPropertyMetadata.get(a);
  if (l === void 0 && globalThis.litPropertyMetadata.set(a, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: d } = t;
    return { set(y) {
      const p = e.get.call(this);
      e.set.call(this, y), this.requestUpdate(d, p, r, !0, y);
    }, init(y) {
      return y !== void 0 && this.C(d, void 0, r, y), y;
    } };
  }
  if (n === "setter") {
    const { name: d } = t;
    return function(y) {
      const p = this[d];
      e.call(this, y), this.requestUpdate(d, p, r, !0, y);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function ue(r) {
  return (e, t) => typeof t == "object" ? hr(r, e, t) : ((n, a, l) => {
    const d = a.hasOwnProperty(l);
    return a.constructor.createProperty(l, n), d ? Object.getOwnPropertyDescriptor(a, l) : void 0;
  })(r, e, t);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, N = (r, e, t, n) => {
  for (var a = n > 1 ? void 0 : n ? pr(e, t) : e, l = r.length - 1, d; l >= 0; l--)
    (d = r[l]) && (a = (n ? d(e, t, a) : d(a)) || a);
  return n && a && fr(e, t, a), a;
};
const ft = JSON.stringify([
  {
    tabIndex: 0,
    title: "Root Canal Treatment",
    actionText: "Show Previous Treatment",
    badgeText: "Next Appointment",
    events: [
      {
        date: "26 Nov '19",
        time: "09.00 - 10.00",
        fields: [
          { label: "Treatment", value: "Open Access" },
          { label: "Dentist", value: "Drg. Adam H." },
          { label: "Nurse", value: "Jessicamila" }
        ]
      },
      {
        date: "12 Dec '19",
        time: "09.00 - 10.00",
        fields: [
          { label: "Treatment", value: "Root Canal prep" },
          { label: "Dentist", value: "Drg. Adam H." },
          { label: "Nurse", value: "Jessicamila" }
        ]
      }
    ]
  },
  {
    tabIndex: 1,
    title: "Teeth Cleaning & Polish",
    actionText: "Show Previous Treatment",
    badgeText: "Completed",
    events: [
      {
        date: "15 Oct '19",
        time: "14.00 - 15.00",
        fields: [
          { label: "Treatment", value: "Routine prophylaxis" },
          { label: "Dentist", value: "Drg. Adam H." },
          { label: "Nurse", value: "Jessicamila" }
        ]
      }
    ]
  },
  {
    tabIndex: 2,
    title: "Medical History Intake",
    actionText: "Show Previous Treatment",
    badgeText: "Intake",
    events: [
      {
        date: "24 Feb '17",
        time: "10.00 - 11:00",
        fields: [
          { label: "Treatment", value: "Allergy profile: Penicillin" },
          { label: "Dentist", value: "Drg. Adam H." },
          { label: "Nurse", value: "Jessicamila" }
        ]
      }
    ]
  }
]);
function te(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let k = class extends ie {
  constructor() {
    super(...arguments), this.tab1Label = "Upcoming Appointments", this.tab2Label = "Past Appointments", this.tab3Label = "Medical Records", this.activeTab = 0, this.timelineJson = ft;
  }
  static getStudioTemplate(r) {
    var d, y, p, x, $, _, T, P, R, U, j, Q, ce, he, fe;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-timeline-card-1.0.0></zero-timeline-card-1.0.0>"
      };
    const e = te(((d = r == null ? void 0 : r.props) == null ? void 0 : d.tab1Label) ?? ((p = (y = r == null ? void 0 : r.studio) == null ? void 0 : y.props) == null ? void 0 : p.tab1Label) ?? "Upcoming Appointments"), t = te(((x = r == null ? void 0 : r.props) == null ? void 0 : x.tab2Label) ?? ((_ = ($ = r == null ? void 0 : r.studio) == null ? void 0 : $.props) == null ? void 0 : _.tab2Label) ?? "Past Appointments"), n = te(((T = r == null ? void 0 : r.props) == null ? void 0 : T.tab3Label) ?? ((R = (P = r == null ? void 0 : r.studio) == null ? void 0 : P.props) == null ? void 0 : R.tab3Label) ?? "Medical Records"), a = te(((U = r == null ? void 0 : r.props) == null ? void 0 : U.activeTab) ?? ((Q = (j = r == null ? void 0 : r.studio) == null ? void 0 : j.props) == null ? void 0 : Q.activeTab) ?? "0"), l = te(((ce = r == null ? void 0 : r.props) == null ? void 0 : ce.timelineJson) ?? ((fe = (he = r == null ? void 0 : r.studio) == null ? void 0 : he.props) == null ? void 0 : fe.timelineJson) ?? "[]");
    return {
      kind: "generic",
      templateHtml: `
        <zero-timeline-card-1.0.0
          tab1-label="${e}"
          tab2-label="${t}"
          tab3-label="${n}"
          active-tab="${a}"
          timeline-json="${l}"
        ></zero-timeline-card-1.0.0>
      `
    };
  }
  get tab1LabelConfig() {
    return this.tab1Label;
  }
  set tab1LabelConfig(r) {
    this.tab1Label = r;
  }
  get tab2LabelConfig() {
    return this.tab2Label;
  }
  set tab2LabelConfig(r) {
    this.tab2Label = r;
  }
  get tab3LabelConfig() {
    return this.tab3Label;
  }
  set tab3LabelConfig(r) {
    this.tab3Label = r;
  }
  get activeTabConfig() {
    return this.activeTab;
  }
  set activeTabConfig(r) {
    this.activeTab = Number(r);
  }
  get timelineJsonConfig() {
    return this.timelineJson;
  }
  set timelineJsonConfig(r) {
    this.timelineJson = r;
  }
  render() {
    let r = [];
    try {
      r = JSON.parse(this.timelineJson);
    } catch {
      r = [];
    }
    const e = r.find((t) => t.tabIndex === this.activeTab) || r[0] || { events: [], title: "", actionText: "" };
    return q`
      <div class="card">
        <div class="tabs-header">
          <div class="tab ${this.activeTab === 0 ? "active" : ""}" @click=${() => this.activeTab = 0}>${this.tab1Label}</div>
          <div class="tab ${this.activeTab === 1 ? "active" : ""}" @click=${() => this.activeTab = 1}>${this.tab2Label}</div>
          <div class="tab ${this.activeTab === 2 ? "active" : ""}" @click=${() => this.activeTab = 2}>${this.tab3Label}</div>
        </div>
        <div class="content-box">
          <div class="content-header">
            <span class="content-title">${e.title}</span>
            ${e.actionText ? q`
              <button class="action-btn">
                ${e.actionText}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            ` : O}
          </div>
          
          <div class="timeline-container">
            ${e.events && e.events.length > 1 ? q`<div class="timeline-line"></div>` : ""}
            ${(e.events || []).map((t, n) => q`
              <div class="timeline-item">
                <div class="time-col">
                  <span class="date">${t.date}</span>
                  <span class="time">${t.time}</span>
                </div>
                <div class="node-col">
                  <div class="circle ${n === 0 ? "green" : ""}"></div>
                </div>
                <div class="detail-card">
                  <div class="card-grid">
                    ${(t.fields || []).map((a, l) => q`
                      ${l > 0 ? q`<div style="width: 1px; background: #e2e8f0; height: 24px; flex-shrink: 0;"></div>` : ""}
                      <div class="field" style="${l === 0 ? "flex: 1.2; min-width: 120px;" : "flex: 1; min-width: 80px;"}">
                        <span class="field-lbl">${a.label}</span>
                        <span class="field-val" style="${l === 0 ? "color: #1e293b;" : ""}">${a.value}</span>
                      </div>
                    `)}
                  </div>
                  <button class="note-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Note
                  </button>
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }
};
k.styles = Wt`
    :host {
      display: block;
      width: 100%;
    }
    .card {
      padding: 24px;
      border-radius: 16px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      font-family: inherit;
      display: flex;
      flex-direction: column;
      gap: 20px;
      box-sizing: border-box;
    }
    .tabs-header {
      display: flex;
      border-bottom: 1.5px solid #f1f5f9;
      gap: 24px;
    }
    .tab {
      padding: 12px 0;
      font-size: 0.85rem;
      font-weight: 600;
      color: #94a3b8;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
    }
    .tab:hover {
      color: #4b5563;
    }
    .tab.active {
      color: #0ea5e9;
      border-bottom-color: #0ea5e9;
    }
    .content-box {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .content-title {
      font-weight: 700;
      color: #1e293b;
      font-size: 0.95rem;
    }
    .action-btn {
      border: 1px solid #e2e8f0;
      background: #ffffff;
      color: #64748b;
      font-size: 0.78rem;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .action-btn:hover {
      background: #f8fafc;
      color: #334155;
    }
    .timeline-container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 8px 0;
    }
    .timeline-line {
      position: absolute;
      left: 135px;
      top: 24px;
      bottom: 24px;
      width: 2px;
      background: #e2e8f0;
      z-index: 1;
    }
    .timeline-item {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 2;
    }
    .time-col {
      width: 120px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
    }
    .date {
      font-size: 0.85rem;
      font-weight: 700;
      color: #1e293b;
    }
    .time {
      font-size: 0.72rem;
      color: #94a3b8;
      margin-top: 3px;
      font-weight: 500;
    }
    .node-col {
      width: 32px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ffffff;
      border: 2.5px solid #0ea5e9;
      box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);
      z-index: 3;
    }
    .circle.green {
      border-color: #22c55e;
      box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
    }
    .detail-card {
      flex: 1;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 14px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.01);
    }
    .card-grid {
      display: flex;
      flex: 1;
      gap: 16px;
      align-items: center;
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }
    .field-lbl {
      font-size: 0.7rem;
      color: #94a3b8;
      font-weight: 500;
    }
    .field-val {
      font-size: 0.82rem;
      font-weight: 600;
      color: #334155;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .note-btn {
      background: none;
      border: none;
      color: #0ea5e9;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0;
      transition: opacity 0.2s;
      flex-shrink: 0;
      margin-left: 12px;
    }
    .note-btn:hover {
      opacity: 0.85;
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .tabs-header {
        overflow-x: auto;
        scrollbar-width: none;
        gap: 16px;
      }
      .tabs-header::-webkit-scrollbar {
        display: none;
      }
      .tab {
        font-size: 0.8rem;
        padding: 8px 4px;
      }
      .timeline-line {
        left: 16px !important;
        top: 16px !important;
        bottom: 16px !important;
      }
      .timeline-item {
        align-items: flex-start !important;
        gap: 12px;
      }
      .time-col {
        width: auto !important;
        min-width: 0;
        margin-left: 36px;
        margin-bottom: -8px;
        flex-direction: row !important;
        gap: 8px;
        align-items: center;
      }
      .time {
        margin-top: 0 !important;
      }
      .node-col {
        position: absolute;
        left: 0;
        top: 18px;
        width: 32px !important;
      }
      .detail-card {
        margin-left: 36px;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 12px;
        width: calc(100% - 36px) !important;
        box-sizing: border-box;
      }
      .card-grid {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 12px !important;
      }
      .field {
        width: 100% !important;
      }
      .field-val {
        white-space: normal !important;
      }
    }
  `;
N([
  ue({ type: String, attribute: "tab1-label" })
], k.prototype, "tab1Label", 2);
N([
  ue({ type: String, attribute: "tab2-label" })
], k.prototype, "tab2Label", 2);
N([
  ue({ type: String, attribute: "tab3-label" })
], k.prototype, "tab3Label", 2);
N([
  ue({ type: Number, attribute: "active-tab" })
], k.prototype, "activeTab", 2);
N([
  ue({ type: String, attribute: "timeline-json" })
], k.prototype, "timelineJson", 2);
N([
  le({
    attributeType: G.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Tab 1 Label",
    fieldMappings: "tab1Label",
    categoryLabel: "Tabs",
    initialValue: "Upcoming Appointments"
  })
], k.prototype, "tab1LabelConfig", 1);
N([
  le({
    attributeType: G.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Tab 2 Label",
    fieldMappings: "tab2Label",
    categoryLabel: "Tabs",
    initialValue: "Past Appointments"
  })
], k.prototype, "tab2LabelConfig", 1);
N([
  le({
    attributeType: G.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Tab 3 Label",
    fieldMappings: "tab3Label",
    categoryLabel: "Tabs",
    initialValue: "Medical Records"
  })
], k.prototype, "tab3LabelConfig", 1);
N([
  le({
    attributeType: G.PROPERTY,
    uiComponentType: B.NUMBER_INPUT,
    displayLabel: "Active Tab (0-2)",
    fieldMappings: "activeTab",
    categoryLabel: "Tabs",
    initialValue: 0
  })
], k.prototype, "activeTabConfig", 1);
N([
  le({
    attributeType: G.PROPERTY,
    uiComponentType: B.TEXTAREA,
    displayLabel: "Timeline (JSON array of tabs with events)",
    fieldMappings: "timelineJson",
    categoryLabel: "Data",
    initialValue: ft
  })
], k.prototype, "timelineJsonConfig", 1);
k = N([
  zt({
    name: "zero-timeline-card",
    version: "1.0.0",
    title: "Timeline Card",
    elementSelector: "zero-timeline-card",
    group: "Dashboard",
    iconName: "card-icon.png"
  }),
  Vt()
], k);
export {
  k as ZeroTimelineCard
};
