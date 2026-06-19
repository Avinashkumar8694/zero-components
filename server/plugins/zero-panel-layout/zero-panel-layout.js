var Nt = Object.defineProperty;
var Ht = (r, e, t) => e in r ? Nt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ze = (r, e, t) => Ht(r, typeof e != "symbol" ? e + "" : e, t);
var Je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Qe;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Je == "object" ? Je : typeof self == "object" ? self : typeof this == "object" ? this : v(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(f, E) {
      return function(b, _) {
        Object.defineProperty(f, b, { configurable: !0, writable: !0, value: _ }), E && E(b, _);
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
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", d = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, E = !v && !f, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return xe(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return xe({ __proto__: null });
      } : function() {
        return xe({});
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
    }, _ = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), N = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : zt(), L = typeof WeakMap == "function" ? WeakMap : kt(), B = o ? Symbol.for("@reflect-metadata:registry") : void 0, Y = Ct(), ce = Rt(Y);
    function be(i, a, s, u) {
      if (m(s)) {
        if (!Ve(i))
          throw new TypeError();
        if (!Be(a))
          throw new TypeError();
        return wt(i, a);
      } else {
        if (!Ve(i))
          throw new TypeError();
        if (!R(a))
          throw new TypeError();
        if (!R(u) && !m(u) && !K(u))
          throw new TypeError();
        return K(u) && (u = void 0), s = U(s), $t(i, a, s, u);
      }
    }
    e("decorate", be);
    function J(i, a) {
      function s(u, g) {
        if (!R(u))
          throw new TypeError();
        if (!m(g) && !Ot(g))
          throw new TypeError();
        Ne(i, a, u, g);
      }
      return s;
    }
    e("metadata", J);
    function Q(i, a, s, u) {
      if (!R(s))
        throw new TypeError();
      return m(u) || (u = U(u)), Ne(i, a, s, u);
    }
    e("defineMetadata", Q);
    function _e(i, a, s) {
      if (!R(a))
        throw new TypeError();
      return m(s) || (s = U(s)), ke(i, a, s);
    }
    e("hasMetadata", _e);
    function we(i, a, s) {
      if (!R(a))
        throw new TypeError();
      return m(s) || (s = U(s)), $e(i, a, s);
    }
    e("hasOwnMetadata", we);
    function he(i, a, s) {
      if (!R(a))
        throw new TypeError();
      return m(s) || (s = U(s)), je(i, a, s);
    }
    e("getMetadata", he);
    function gt(i, a, s) {
      if (!R(a))
        throw new TypeError();
      return m(s) || (s = U(s)), Ie(i, a, s);
    }
    e("getOwnMetadata", gt);
    function mt(i, a) {
      if (!R(i))
        throw new TypeError();
      return m(a) || (a = U(a)), He(i, a);
    }
    e("getMetadataKeys", mt);
    function bt(i, a) {
      if (!R(i))
        throw new TypeError();
      return m(a) || (a = U(a)), De(i, a);
    }
    e("getOwnMetadataKeys", bt);
    function _t(i, a, s) {
      if (!R(a))
        throw new TypeError();
      if (m(s) || (s = U(s)), !R(a))
        throw new TypeError();
      m(s) || (s = U(s));
      var u = ne(
        a,
        s,
        /*Create*/
        !1
      );
      return m(u) ? !1 : u.OrdinaryDeleteMetadata(i, a, s);
    }
    e("deleteMetadata", _t);
    function wt(i, a) {
      for (var s = i.length - 1; s >= 0; --s) {
        var u = i[s], g = u(a);
        if (!m(g) && !K(g)) {
          if (!Be(g))
            throw new TypeError();
          a = g;
        }
      }
      return a;
    }
    function $t(i, a, s, u) {
      for (var g = i.length - 1; g >= 0; --g) {
        var k = i[g], M = k(a, s, u);
        if (!m(M) && !K(M)) {
          if (!R(M))
            throw new TypeError();
          u = M;
        }
      }
      return u;
    }
    function ke(i, a, s) {
      var u = $e(i, a, s);
      if (u)
        return !0;
      var g = Pe(a);
      return K(g) ? !1 : ke(i, g, s);
    }
    function $e(i, a, s) {
      var u = ne(
        a,
        s,
        /*Create*/
        !1
      );
      return m(u) ? !1 : Ue(u.OrdinaryHasOwnMetadata(i, a, s));
    }
    function je(i, a, s) {
      var u = $e(i, a, s);
      if (u)
        return Ie(i, a, s);
      var g = Pe(a);
      if (!K(g))
        return je(i, g, s);
    }
    function Ie(i, a, s) {
      var u = ne(
        a,
        s,
        /*Create*/
        !1
      );
      if (!m(u))
        return u.OrdinaryGetOwnMetadata(i, a, s);
    }
    function Ne(i, a, s, u) {
      var g = ne(
        s,
        u,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(i, a, s, u);
    }
    function He(i, a) {
      var s = De(i, a), u = Pe(i);
      if (u === null)
        return s;
      var g = He(u, a);
      if (g.length <= 0)
        return s;
      if (s.length <= 0)
        return g;
      for (var k = new N(), M = [], w = 0, p = s; w < p.length; w++) {
        var c = p[w], h = k.has(c);
        h || (k.add(c), M.push(c));
      }
      for (var y = 0, $ = g; y < $.length; y++) {
        var c = $[y], h = k.has(c);
        h || (k.add(c), M.push(c));
      }
      return M;
    }
    function De(i, a) {
      var s = ne(
        i,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Le(i) {
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
    function K(i) {
      return i === null;
    }
    function Et(i) {
      return typeof i == "symbol";
    }
    function R(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Pt(i, a) {
      switch (Le(i)) {
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
      var s = "string", u = Ge(i, l);
      if (u !== void 0) {
        var g = u.call(i, s);
        if (R(g))
          throw new TypeError();
        return g;
      }
      return xt(i);
    }
    function xt(i, a) {
      var s, u;
      {
        var g = i.toString;
        if (fe(g)) {
          var u = g.call(i);
          if (!R(u))
            return u;
        }
        var s = i.valueOf;
        if (fe(s)) {
          var u = s.call(i);
          if (!R(u))
            return u;
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
    function U(i) {
      var a = Pt(i);
      return Et(a) ? a : St(a);
    }
    function Ve(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function fe(i) {
      return typeof i == "function";
    }
    function Be(i) {
      return typeof i == "function";
    }
    function Ot(i) {
      switch (Le(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ee(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Ge(i, a) {
      var s = i[a];
      if (s != null) {
        if (!fe(s))
          throw new TypeError();
        return s;
      }
    }
    function We(i) {
      var a = Ge(i, d);
      if (!fe(a))
        throw new TypeError();
      var s = a.call(i);
      if (!R(s))
        throw new TypeError();
      return s;
    }
    function Ye(i) {
      return i.value;
    }
    function Fe(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function qe(i) {
      var a = i.return;
      a && a.call(i);
    }
    function Pe(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || a !== _)
        return a;
      var s = i.prototype, u = s && Object.getPrototypeOf(s);
      if (u == null || u === Object.prototype)
        return a;
      var g = u.constructor;
      return typeof g != "function" || g === i ? a : g;
    }
    function At() {
      var i;
      !m(B) && typeof t.Reflect < "u" && !(B in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Mt(t.Reflect));
      var a, s, u, g = new L(), k = {
        registerProvider: M,
        getProvider: p,
        setProvider: h
      };
      return k;
      function M(y) {
        if (!Object.isExtensible(k))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
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
            u === void 0 && (u = new N()), u.add(y);
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
              for (var P = We(u); ; ) {
                var S = Fe(P);
                if (!S)
                  return;
                var D = Ye(S);
                if (D.isProviderFor(y, $))
                  return qe(P), D;
              }
          }
        }
        if (!m(i) && i.isProviderFor(y, $))
          return i;
      }
      function p(y, $) {
        var P = g.get(y), S;
        return m(P) || (S = P.get($)), m(S) && (S = w(y, $), m(S) || (m(P) && (P = new C(), g.set(y, P)), P.set($, S))), S;
      }
      function c(y) {
        if (m(y))
          throw new TypeError();
        return a === y || s === y || !m(u) && u.has(y);
      }
      function h(y, $, P) {
        if (!c(P))
          throw new Error("Metadata provider not registered.");
        var S = p(y, $);
        if (S !== P) {
          if (!m(S))
            return !1;
          var D = g.get(y);
          m(D) && (D = new C(), g.set(y, D)), D.set($, P);
        }
        return !0;
      }
    }
    function Ct() {
      var i;
      return !m(B) && R(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[B]), m(i) && (i = At()), !m(B) && R(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, B, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Rt(i) {
      var a = new L(), s = {
        isProviderFor: function(c, h) {
          var y = a.get(c);
          return m(y) ? !1 : y.has(h);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: k,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: p
      };
      return Y.registerProvider(s), s;
      function u(c, h, y) {
        var $ = a.get(c), P = !1;
        if (m($)) {
          if (!y)
            return;
          $ = new C(), a.set(c, $), P = !0;
        }
        var S = $.get(h);
        if (m(S)) {
          if (!y)
            return;
          if (S = new C(), $.set(h, S), !i.setProvider(c, h, s))
            throw $.delete(h), P && a.delete(c), new Error("Wrong provider for target.");
        }
        return S;
      }
      function g(c, h, y) {
        var $ = u(
          h,
          y,
          /*Create*/
          !1
        );
        return m($) ? !1 : Ue($.has(c));
      }
      function k(c, h, y) {
        var $ = u(
          h,
          y,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(c);
      }
      function M(c, h, y, $) {
        var P = u(
          y,
          $,
          /*Create*/
          !0
        );
        P.set(c, h);
      }
      function w(c, h) {
        var y = [], $ = u(
          c,
          h,
          /*Create*/
          !1
        );
        if (m($))
          return y;
        for (var P = $.keys(), S = We(P), D = 0; ; ) {
          var Xe = Fe(S);
          if (!Xe)
            return y.length = D, y;
          var jt = Ye(Xe);
          try {
            y[D] = jt;
          } catch (It) {
            try {
              qe(S);
            } finally {
              throw It;
            }
          }
          D++;
        }
      }
      function p(c, h, y) {
        var $ = u(
          h,
          y,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(c))
          return !1;
        if ($.size === 0) {
          var P = a.get(h);
          m(P) || (P.delete(y), P.size === 0 && a.delete(P));
        }
        return !0;
      }
    }
    function Mt(i) {
      var a = i.defineMetadata, s = i.hasOwnMetadata, u = i.getOwnMetadata, g = i.getOwnMetadataKeys, k = i.deleteMetadata, M = new L(), w = {
        isProviderFor: function(p, c) {
          var h = M.get(p);
          return !m(h) && h.has(c) ? !0 : g(p, c).length ? (m(h) && (h = new N(), M.set(p, h)), h.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: k
      };
      return w;
    }
    function ne(i, a, s) {
      var u = Y.getProvider(i, a);
      if (!m(u))
        return u;
      if (s) {
        if (Y.setProvider(i, a, ce))
          return ce;
        throw new Error("Illegal state.");
      }
    }
    function Tt() {
      var i = {}, a = [], s = (
        /** @class */
        function() {
          function w(p, c, h) {
            this._index = 0, this._keys = p, this._values = c, this._selector = h;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[d] = function() {
            return this;
          }, w.prototype.next = function() {
            var p = this._index;
            if (p >= 0 && p < this._keys.length) {
              var c = this._selector(this._keys[p], this._values[p]);
              return p + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(p) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), p;
          }, w.prototype.return = function(p) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: p, done: !0 };
          }, w;
        }()
      ), u = (
        /** @class */
        function() {
          function w() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(w.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), w.prototype.has = function(p) {
            return this._find(
              p,
              /*insert*/
              !1
            ) >= 0;
          }, w.prototype.get = function(p) {
            var c = this._find(
              p,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, w.prototype.set = function(p, c) {
            var h = this._find(
              p,
              /*insert*/
              !0
            );
            return this._values[h] = c, this;
          }, w.prototype.delete = function(p) {
            var c = this._find(
              p,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var h = this._keys.length, y = c + 1; y < h; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, Ee(p, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new s(this._keys, this._values, g);
          }, w.prototype.values = function() {
            return new s(this._keys, this._values, k);
          }, w.prototype.entries = function() {
            return new s(this._keys, this._values, M);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[d] = function() {
            return this.entries();
          }, w.prototype._find = function(p, c) {
            if (!Ee(this._cacheKey, p)) {
              this._cacheIndex = -1;
              for (var h = 0; h < this._keys.length; h++)
                if (Ee(this._keys[h], p)) {
                  this._cacheIndex = h;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(p), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return u;
      function g(w, p) {
        return w;
      }
      function k(w, p) {
        return p;
      }
      function M(w, p) {
        return [w, p];
      }
    }
    function zt() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new C();
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
      return i;
    }
    function kt() {
      var i = 16, a = b.create(), s = u();
      return (
        /** @class */
        function() {
          function p() {
            this._key = u();
          }
          return p.prototype.has = function(c) {
            var h = g(
              c,
              /*create*/
              !1
            );
            return h !== void 0 ? b.has(h, this._key) : !1;
          }, p.prototype.get = function(c) {
            var h = g(
              c,
              /*create*/
              !1
            );
            return h !== void 0 ? b.get(h, this._key) : void 0;
          }, p.prototype.set = function(c, h) {
            var y = g(
              c,
              /*create*/
              !0
            );
            return y[this._key] = h, this;
          }, p.prototype.delete = function(c) {
            var h = g(
              c,
              /*create*/
              !1
            );
            return h !== void 0 ? delete h[this._key] : !1;
          }, p.prototype.clear = function() {
            this._key = u();
          }, p;
        }()
      );
      function u() {
        var p;
        do
          p = "@@WeakMap@@" + w();
        while (b.has(a, p));
        return a[p] = !0, p;
      }
      function g(p, c) {
        if (!n.call(p, s)) {
          if (!c)
            return;
          Object.defineProperty(p, s, { value: b.create() });
        }
        return p[s];
      }
      function k(p, c) {
        for (var h = 0; h < c; ++h)
          p[h] = Math.random() * 255 | 0;
        return p;
      }
      function M(p) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(p);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : k(c, p), c;
        }
        return k(new Array(p), p);
      }
      function w() {
        var p = M(i);
        p[6] = p[6] & 79 | 64, p[8] = p[8] & 191 | 128;
        for (var c = "", h = 0; h < i; ++h) {
          var y = p[h];
          (h === 4 || h === 6 || h === 8) && (c += "-"), y < 16 && (c += "0"), c += y.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function xe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Qe || (Qe = {}));
function Dt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Lt(r) {
  return function(e) {
    if (Dt(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
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
function Ut(r) {
  return Lt(r);
}
function Vt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ze(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), d = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), v = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && v) {
          const b = new CSSStyleSheet(), _ = (E = l.sheet) == null ? void 0 : E.cssRules;
          _ && (Array.from(_).forEach((C) => b.insertRule(C.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          f.appendChild(b);
        }
        d.forEach((b) => {
          const _ = b.cloneNode(!0);
          f.appendChild(_);
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
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
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
function z(r) {
  return Gt(r);
}
var T;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(T || (T = {}));
var O;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(O || (O = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ye = globalThis, Re = ye.ShadowRoot && (ye.ShadyCSS === void 0 || ye.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Me = Symbol(), Ke = /* @__PURE__ */ new WeakMap();
let ct = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Me) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Re && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ke.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ke.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (r) => new ct(typeof r == "string" ? r : r + "", void 0, Me), Yt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new ct(t, r, Me);
}, Ft = (r, e) => {
  if (Re) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ye.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, et = Re ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Wt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qt, defineProperty: Xt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Jt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, W = globalThis, tt = W.trustedTypes, er = tt ? tt.emptyScript : "", Se = W.reactiveElementPolyfillSupport, oe = (r, e) => r, ve = { toAttribute(r, e) {
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
} }, Te = (r, e) => !qt(r, e), rt = { attribute: !0, type: String, converter: ve, reflect: !1, useDefault: !1, hasChanged: Te };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), W.litPropertyMetadata ?? (W.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let ee = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = rt) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Xt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = Zt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(d) {
      this[t] = d;
    } };
    return { get: o, set(d) {
      const v = o == null ? void 0 : o.call(this);
      l == null || l.call(this, d), this.requestUpdate(e, v, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? rt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(oe("elementProperties"))) return;
    const e = Kt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(oe("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(oe("properties"))) {
      const t = this.properties, n = [...Jt(t), ...Qt(t)];
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
      for (const o of n) t.unshift(et(o));
    } else e !== void 0 && t.push(et(e));
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
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const d = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ve).toAttribute(t, n.type);
      this._$Em = e, d == null ? this.removeAttribute(o) : this.setAttribute(o, d), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, d;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const v = n.getPropertyOptions(o), f = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : ve;
      this._$Em = o;
      const E = f.fromAttribute(t, v.type);
      this[o] = E ?? ((d = this._$Ej) == null ? void 0 : d.get(o)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var d;
    if (e !== void 0) {
      const v = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = v.getPropertyOptions(e)), !((n.hasChanged ?? Te)(l, t) || n.useDefault && n.reflect && l === ((d = this._$Ej) == null ? void 0 : d.get(e)) && !this.hasAttribute(v._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: o, wrapped: l }, d) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, d ?? t ?? this[e]), l !== !0 || d !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, d] of o) {
        const { wrapped: v } = d, f = this[l];
        v !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, d, f);
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
ee.elementStyles = [], ee.shadowRootOptions = { mode: "open" }, ee[oe("elementProperties")] = /* @__PURE__ */ new Map(), ee[oe("finalized")] = /* @__PURE__ */ new Map(), Se == null || Se({ ReactiveElement: ee }), (W.reactiveElementVersions ?? (W.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis, nt = (r) => r, ge = ae.trustedTypes, it = ge ? ge.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ht = "$lit$", G = `lit$${Math.random().toFixed(9).slice(2)}$`, ft = "?" + G, tr = `<${ft}>`, Z = document, le = () => Z.createComment(""), de = (r) => r === null || typeof r != "object" && typeof r != "function", ze = Array.isArray, rr = (r) => ze(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Oe = `[ 	
\f\r]`, ie = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ot = /-->/g, at = />/g, F = RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), st = /'/g, lt = /"/g, yt = /^(?:script|style|textarea|title)$/i, nr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), V = nr(1), te = Symbol.for("lit-noChange"), j = Symbol.for("lit-nothing"), dt = /* @__PURE__ */ new WeakMap(), q = Z.createTreeWalker(Z, 129);
function vt(r, e) {
  if (!ze(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return it !== void 0 ? it.createHTML(e) : e;
}
const ir = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", d = ie;
  for (let v = 0; v < t; v++) {
    const f = r[v];
    let E, b, _ = -1, C = 0;
    for (; C < f.length && (d.lastIndex = C, b = d.exec(f), b !== null); ) C = d.lastIndex, d === ie ? b[1] === "!--" ? d = ot : b[1] !== void 0 ? d = at : b[2] !== void 0 ? (yt.test(b[2]) && (o = RegExp("</" + b[2], "g")), d = F) : b[3] !== void 0 && (d = F) : d === F ? b[0] === ">" ? (d = o ?? ie, _ = -1) : b[1] === void 0 ? _ = -2 : (_ = d.lastIndex - b[2].length, E = b[1], d = b[3] === void 0 ? F : b[3] === '"' ? lt : st) : d === lt || d === st ? d = F : d === ot || d === at ? d = ie : (d = F, o = void 0);
    const N = d === F && r[v + 1].startsWith("/>") ? " " : "";
    l += d === ie ? f + tr : _ >= 0 ? (n.push(E), f.slice(0, _) + ht + f.slice(_) + G + N) : f + G + (_ === -2 ? v : N);
  }
  return [vt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ue {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, d = 0;
    const v = e.length - 1, f = this.parts, [E, b] = ir(e, t);
    if (this.el = ue.createElement(E, n), q.currentNode = this.el.content, t === 2 || t === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (o = q.nextNode()) !== null && f.length < v; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const _ of o.getAttributeNames()) if (_.endsWith(ht)) {
          const C = b[d++], N = o.getAttribute(_).split(G), L = /([.?@])?(.*)/.exec(C);
          f.push({ type: 1, index: l, name: L[2], strings: N, ctor: L[1] === "." ? ar : L[1] === "?" ? sr : L[1] === "@" ? lr : me }), o.removeAttribute(_);
        } else _.startsWith(G) && (f.push({ type: 6, index: l }), o.removeAttribute(_));
        if (yt.test(o.tagName)) {
          const _ = o.textContent.split(G), C = _.length - 1;
          if (C > 0) {
            o.textContent = ge ? ge.emptyScript : "";
            for (let N = 0; N < C; N++) o.append(_[N], le()), q.nextNode(), f.push({ type: 2, index: ++l });
            o.append(_[C], le());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ft) f.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = o.data.indexOf(G, _ + 1)) !== -1; ) f.push({ type: 7, index: l }), _ += G.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = Z.createElement("template");
    return n.innerHTML = e, n;
  }
}
function re(r, e, t = r, n) {
  var d, v;
  if (e === te) return e;
  let o = n !== void 0 ? (d = t._$Co) == null ? void 0 : d[n] : t._$Cl;
  const l = de(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((v = o == null ? void 0 : o._$AO) == null || v.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = re(r, o._$AS(r, e.values), o, n)), e;
}
class or {
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? Z).importNode(t, !0);
    q.currentNode = o;
    let l = q.nextNode(), d = 0, v = 0, f = n[0];
    for (; f !== void 0; ) {
      if (d === f.index) {
        let E;
        f.type === 2 ? E = new pe(l, l.nextSibling, this, e) : f.type === 1 ? E = new f.ctor(l, f.name, f.strings, this, e) : f.type === 6 && (E = new dr(l, this, e)), this._$AV.push(E), f = n[++v];
      }
      d !== (f == null ? void 0 : f.index) && (l = q.nextNode(), d++);
    }
    return q.currentNode = Z, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class pe {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = j, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = re(this, e, t), de(e) ? e === j || e == null || e === "" ? (this._$AH !== j && this._$AR(), this._$AH = j) : e !== this._$AH && e !== te && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : rr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== j && de(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ue.createElement(vt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const d = new or(o, this), v = d.u(this.options);
      d.p(t), this.T(v), this._$AH = d;
    }
  }
  _$AC(e) {
    let t = dt.get(e.strings);
    return t === void 0 && dt.set(e.strings, t = new ue(e)), t;
  }
  k(e) {
    ze(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new pe(this.O(le()), this.O(le()), this, this.options)) : n = t[o], n._$AI(l), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = nt(e).nextSibling;
      nt(e).remove(), e = o;
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
  constructor(e, t, n, o, l) {
    this.type = 1, this._$AH = j, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = j;
  }
  _$AI(e, t = this, n, o) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) e = re(this, e, t, 0), d = !de(e) || e !== this._$AH && e !== te, d && (this._$AH = e);
    else {
      const v = e;
      let f, E;
      for (e = l[0], f = 0; f < l.length - 1; f++) E = re(this, v[n + f], t, f), E === te && (E = this._$AH[f]), d || (d = !de(E) || E !== this._$AH[f]), E === j ? e = j : e !== j && (e += (E ?? "") + l[f + 1]), this._$AH[f] = E;
    }
    d && !o && this.j(e);
  }
  j(e) {
    e === j ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends me {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === j ? void 0 : e;
  }
}
class sr extends me {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== j);
  }
}
class lr extends me {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = re(this, e, t, 0) ?? j) === te) return;
    const n = this._$AH, o = e === j && n !== j || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== j && (n === j || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
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
    re(this, e);
  }
}
const Ae = ae.litHtmlPolyfillSupport;
Ae == null || Ae(ue, pe), (ae.litHtmlVersions ?? (ae.litHtmlVersions = [])).push("3.3.3");
const ur = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new pe(e.insertBefore(le(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis;
class se extends ee {
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
    return te;
  }
}
var pt;
se._$litElement$ = !0, se.finalized = !0, (pt = X.litElementHydrateSupport) == null || pt.call(X, { LitElement: se });
const Ce = X.litElementPolyfillSupport;
Ce == null || Ce({ LitElement: se });
(X.litElementVersions ?? (X.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pr = (r) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(r, e);
  }) : customElements.define(r, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: ve, reflect: !1, hasChanged: Te }, hr = (r = cr, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: d } = t;
    return { set(v) {
      const f = e.get.call(this);
      e.set.call(this, v), this.requestUpdate(d, f, r, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(d, void 0, r, v), v;
    } };
  }
  if (n === "setter") {
    const { name: d } = t;
    return function(v) {
      const f = this[d];
      e.call(this, v), this.requestUpdate(d, f, r, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function I(r) {
  return (e, t) => typeof t == "object" ? hr(r, e, t) : ((n, o, l) => {
    const d = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), d ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
var fr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, A = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? yr(e, t) : e, l = r.length - 1, d; l >= 0; l--)
    (d = r[l]) && (o = (n ? d(e, t, o) : d(o)) || o);
  return n && o && fr(e, t, o), o;
};
const ut = {
  kind: "panel",
  generatedSlots: [
    {
      pattern: "col-{index}",
      anchor: "columns",
      countProp: "columns",
      labelPrefix: "Column",
      min: 1,
      dropzone: !0,
      accepts: ["zero-section"],
      direction: "row"
    }
  ],
  templateHtml: [
    "<div style='display:grid;gap:10px;padding:12px;border-radius:18px;border:1px solid rgba(14,165,233,0.22);background:linear-gradient(180deg,rgba(240,249,255,0.96),rgba(255,255,255,0.96));'>",
    "<div style='display:flex;justify-content:space-between;align-items:center;gap:8px;'>",
    "<strong style='font-size:0.92rem;color:var(--zs-text);'>{{display:label}}</strong>",
    "<span style='font-size:0.78rem;color:var(--zs-text-muted);'>{{totalColumns}} areas · {{itemsPerRow}} cols</span>",
    "</div>",
    "<div style='display:flex;gap:8px;flex-wrap:wrap;'>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(219,234,254,0.85);color:#1d4ed8;font-size:0.72rem;font-weight:700;'>label: {{mode:label}}</span>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(240,253,250,0.9);color:#0f766e;font-size:0.72rem;font-weight:700;'>justify: {{display:justify}}</span>",
    "</div>",
    "<zero-studio-slot-group name='columns'></zero-studio-slot-group>",
    "</div>"
  ].join(""),
  labelProp: "label",
  columnsProp: "totalColumns",
  emptyText: "Drag and Drop Elements here",
  dynamicHints: ["$.label", "$.section_title"],
  badges: ["Layout", "Columns"],
  metrics: [
    { label: "Flow", value: "$.panel.layout" },
    { label: "Items", value: "{{section.count}}" }
  ]
};
let x = class extends se {
  constructor() {
    super(...arguments), this.responsiveProps = {}, this.totalColumns = 2, this.itemsPerRow = 2, this.direction = "row", this.justify = "flex-start", this.align = "stretch", this.gap = "16px", this.padding = "16px", this.backgroundColor = "#ffffff", this.borderColor = "#e2e8f0", this.borderRadius = "16px", this.visible = !0, this.enableHeader = !1, this.expanded = !0, this.expandable = !0, this.label = "Panel Header", this.icon = "📄", this.iconPosition = "start";
  }
  static getStudioTemplate(r) {
    var Y;
    if (!r)
      return ut;
    const e = H(r.studio.display.label || "Panel");
    H(r.studio.mode.label || "static");
    const t = H(r.studio.display.direction || "row");
    H(r.studio.display.justify || "start");
    const n = H(r.studio.display.itemsPerRow || "2"), o = r.props.responsiveProps || ((Y = r.studio.props) == null ? void 0 : Y.responsiveProps) || {}, l = H(r.props.gap || "16px"), d = H(r.props.padding || "16px"), v = H(r.props.justify || "flex-start"), f = H(r.props.align || "stretch"), E = H(r.props.backgroundColor || "var(--uiv-surface-color, #ffffff)"), b = H(r.props.borderColor || "var(--uiv-border-color, #e2e8f0)"), _ = H(r.props.borderRadius || "8px"), C = String(r.props.enableHeader) === "true";
    let N = "";
    const L = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, B = {
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      columns: "items-per-row"
    };
    return Object.entries(L).forEach(([ce, be]) => {
      const J = o[ce];
      if (!J) return;
      let Q = "";
      Object.entries(J).forEach(([_e, we]) => {
        const he = B[_e];
        he && (Q += `--zero-panel-${he}-override: ${we};
`);
      }), J.columns && (Q += `zero-studio-slot-group[name='columns'] { grid-template-columns: repeat(${J.columns}, 1fr) !important; flex-direction: unset !important; }
`), Q && (N += `${be} { .studio-panel-container { ${Q} } }
`);
    }), {
      ...ut,
      generatedSlots: [
        {
          pattern: "col-{index}",
          anchor: "columns",
          countProp: "totalColumns",
          labelPrefix: t === "column" ? "Row" : "Column",
          min: 1,
          dropzone: !0,
          accepts: ["zero-section", "zero-stack", "zero-text", "zero-heading", "zero-image", "zero-button"],
          direction: "row"
          // Force default direction
        }
      ],
      templateHtml: [
        `<div class="studio-panel-container" style="
          --zero-items-per-row: var(--zero-panel-items-per-row-override, ${n});
          --zero-gap: var(--zero-panel-gap-override, ${l});
          --zero-panel-padding: var(--zero-panel-padding-override, ${d});
          --zero-justify: var(--zero-panel-justify-override, ${v});
          --zero-align: var(--zero-panel-align-override, ${f});
          --zero-panel-bg: ${E};
          --zero-panel-border-color: ${b};
          --zero-panel-radius: ${_};
          
          border: 1px solid var(--zero-panel-border-color);
          border-radius: var(--zero-panel-radius);
          background: var(--zero-panel-bg);
          overflow: hidden;
          width: 100%;
        ">`,
        C ? `<div style="display:flex;align-items:center;padding:12px 16px;border-bottom:1px solid var(--zero-panel-border-color);"><span style="flex:1;font-weight:600;font-size:0.94rem;color:var(--zero-text,#1e293b);">${e}</span></div>` : "",
        `<div style="padding: var(--zero-panel-padding); min-height: 120px;">
          <style>
            .studio-panel-container zero-studio-slot-group[name='columns'] {
              display: grid !important;
              grid-template-columns: repeat(var(--zero-items-per-row), 1fr) !important;
              gap: var(--zero-gap) !important;
              justify-content: var(--zero-justify) !important;
              align-items: var(--zero-align) !important;
            }
            ${N}
          </style>
          <zero-studio-slot-group name='columns'></zero-studio-slot-group>
        </div>`,
        "</div>"
      ].join("")
    };
  }
  handleSlotChange() {
    this.dispatchEvent(
      new CustomEvent("slotchange", {
        detail: { columns: this.totalColumns },
        bubbles: !0,
        composed: !0
      })
    );
  }
  toggleExpanded() {
    this.expandable && (this.expanded = !this.expanded, this.dispatchEvent(new CustomEvent("expansionchange", { detail: { expanded: this.expanded } })));
  }
  renderIcon() {
    return this.icon ? V`<span class="icon">${this.icon}</span>` : V``;
  }
  renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return V``;
    const r = "zero-panel", e = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    }, t = {
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
    return Object.entries(e).forEach(([o, l]) => {
      const d = this.responsiveProps[o];
      if (!d) return;
      let v = "";
      Object.entries(d).forEach(([f, E]) => {
        const b = t[f];
        b && (v += `--${r}-${b}-override: ${E};
`);
      }), v && (n += `${l} {
  :host {
    ${v}  }
}
`);
    }), n ? V`<style>${n}</style>` : V``;
  }
  render() {
    if (!this.visible) return V``;
    const r = Math.max(1, Math.min(12, Number(this.totalColumns) || 1)), e = [
      `--zero-items-per-row:var(--zero-panel-items-per-row-override, ${this.itemsPerRow || 1})`,
      `--zero-gap:var(--zero-panel-gap-override, ${this.gap || "16px"})`,
      `--zero-panel-padding:var(--zero-panel-padding-override, ${this.padding || "16px"})`,
      `--zero-justify:var(--zero-panel-justify-override, ${this.justify || "flex-start"})`,
      `--zero-align:var(--zero-panel-align-override, ${this.align || "stretch"})`,
      `--zero-panel-bg:${this.backgroundColor || "#ffffff"}`,
      `--zero-panel-border-color:${this.borderColor || "#e2e8f0"}`,
      `--zero-panel-radius:${this.borderRadius || "16px"}`
    ].join(";");
    return V`
      ${this.renderResponsiveStyles()}
      <div class="panel-container">
        ${this.enableHeader ? V`
          <div class="header" @click=${this.toggleExpanded}>
            ${this.iconPosition === "start" ? this.renderIcon() : ""}
            <span class="label">${this.label}</span>
            ${this.iconPosition === "end" ? this.renderIcon() : ""}
            ${this.expandable ? V`<span class="toggle-chevron">▼</span>` : ""}
          </div>
        ` : ""}
        <div class="content-wrapper">
          <div class="content-inner">
            <div class="layout" data-direction=${this.direction || "row"} style=${e}>
              <style>
                .layout {
                  flex-direction: var(--zero-panel-direction-override, ${this.direction || "row"});
                }
              </style>
              ${Array.from({ length: r }).map(
      (t, n) => V`
                  <div class="column">
                    <slot name="col-${n + 1}" @slotchange=${n === 0 ? this.handleSlotChange : null}></slot>
                  </div>
                `
    )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
x.styles = Yt`
    :host {
      display: block;
      width: var(--zero-width, 100%);
      padding: var(--zero-padding, 0);
      box-sizing: border-box;
      --zero-panel-header-bg: transparent;
      --zero-panel-header-padding: 12px 16px;
      --zero-panel-transition: 240ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .panel-container {
      border: 1px solid var(--zero-panel-border-color, var(--zero-border-soft, #e2e8f0));
      border-radius: var(--zero-panel-radius, 8px);
      overflow: hidden;
      background: var(--zero-panel-bg, var(--zero-surface, #ffffff));
    }

    .header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: var(--zero-panel-header-padding);
      background: var(--zero-panel-header-bg);
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid var(--zero-border-soft, #e2e8f0);
    }

    .header:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .label {
      flex: 1;
      font-weight: 600;
      font-size: 0.94rem;
      color: var(--zero-text, #1e293b);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }

    .toggle-chevron {
      transition: transform var(--zero-panel-transition);
      font-size: 0.8rem;
      opacity: 0.6;
    }

    :host([expanded]) .toggle-chevron {
      transform: rotate(180deg);
    }

    .content-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--zero-panel-transition);
    }

    :host([expanded]) .content-wrapper {
      grid-template-rows: 1fr;
    }

    .content-inner {
      overflow: hidden;
    }

    .layout {
      display: flex;
      flex-wrap: wrap;
      gap: var(--zero-gap, 16px);
      width: 100%;
      box-sizing: border-box;
      padding: var(--zero-panel-padding, 16px);
      min-height: 120px;
      justify-content: var(--zero-justify, flex-start);
      align-items: var(--zero-align, stretch);
    }

    .layout[data-direction="column"] {
      flex-direction: column;
    }

    .column {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      /* Calculate width based on items per row, minus the gap share */
      flex: 0 0 calc((100% / var(--zero-items-per-row, 1)) - ((var(--zero-gap, 16px) * (var(--zero-items-per-row, 1) - 1)) / var(--zero-items-per-row, 1)));
      min-height: 120px;
      min-width: 0;
      border: 1px solid transparent;
      border-radius: calc(var(--zero-panel-radius, 8px) - 2px);
      background: linear-gradient(180deg, rgba(248, 250, 252, 0.75), rgba(255, 255, 255, 0.92));
      box-sizing: border-box;
      transition: flex var(--zero-panel-transition), border-color var(--zero-panel-transition), background var(--zero-panel-transition);
    }

    .layout[data-direction="column"] .column {
      flex: 0 0 100%;
    }

    .column > slot {
      display: block;
      min-height: 120px;
  `;
A([
  I({ type: Object, attribute: "responsive-props" }),
  z({
    attributeType: O.PROPERTY,
    displayLabel: "Responsive Overrides",
    fieldMappings: "responsiveProps"
  })
], x.prototype, "responsiveProps", 2);
A([
  I({ type: Number, reflect: !0, attribute: "total-columns" }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.NUMBER_INPUT,
    displayLabel: "Total Slots (Areas)",
    fieldMappings: "totalColumns"
  })
], x.prototype, "totalColumns", 2);
A([
  I({ type: Number, reflect: !0, attribute: "items-per-row" }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Items per Row",
    fieldMappings: "itemsPerRow"
  })
], x.prototype, "itemsPerRow", 2);
A([
  I({ type: String, reflect: !0 }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Direction",
    fieldMappings: "direction",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
], x.prototype, "direction", 2);
A([
  I({ type: String, reflect: !0 }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Justify",
    fieldMappings: "justify",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" },
      { label: "Space Evenly", value: "space-evenly" }
    ]
  })
], x.prototype, "justify", 2);
A([
  I({ type: String, reflect: !0 }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Align",
    fieldMappings: "align",
    optionItems: [
      { label: "Stretch", value: "stretch" },
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" }
    ]
  })
], x.prototype, "align", 2);
A([
  I({ type: String, reflect: !0 }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap"
  })
], x.prototype, "gap", 2);
A([
  I({ type: String, reflect: !0 }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding"
  })
], x.prototype, "padding", 2);
A([
  I({ type: String, attribute: "background-color", reflect: !0 }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.COLOR_PICKER,
    displayLabel: "Background",
    fieldMappings: "backgroundColor"
  })
], x.prototype, "backgroundColor", 2);
A([
  I({ type: String, attribute: "border-color", reflect: !0 }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor"
  })
], x.prototype, "borderColor", 2);
A([
  I({ type: String, attribute: "border-radius", reflect: !0 }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.TEXT_INPUT,
    displayLabel: "Radius",
    fieldMappings: "borderRadius"
  })
], x.prototype, "borderRadius", 2);
A([
  I({ type: Boolean }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible"
  })
], x.prototype, "visible", 2);
A([
  I({ type: Boolean, attribute: "enable-header" }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader"
  })
], x.prototype, "enableHeader", 2);
A([
  I({ type: Boolean, reflect: !0 }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded"
  })
], x.prototype, "expanded", 2);
A([
  I({ type: Boolean }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable"
  })
], x.prototype, "expandable", 2);
A([
  I({ type: String }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label"
  })
], x.prototype, "label", 2);
A([
  I({ type: String }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.TEXT_INPUT,
    displayLabel: "Icon (Emoji/HTML)",
    fieldMappings: "icon"
  })
], x.prototype, "icon", 2);
A([
  I({ type: String, attribute: "icon-position" }),
  z({
    attributeType: O.PROPERTY,
    uiComponentType: T.DROPDOWN,
    displayLabel: "Icon Position",
    fieldMappings: "iconPosition",
    optionItems: [
      { label: "Start", value: "start" },
      { label: "End", value: "end" }
    ]
  })
], x.prototype, "iconPosition", 2);
A([
  z({
    attributeType: O.EVENT,
    displayLabel: "On Slot Change",
    eventTrigger: "slotchange"
  })
], x.prototype, "handleSlotChange", 1);
x = A([
  Ut({
    name: "zero-panel-layout",
    version: "1.0.0",
    title: "Panel Layout",
    elementSelector: "zero-panel-layout",
    group: "Layout",
    iconName: "panel-layout-icon.png"
  }),
  Vt(),
  pr("zero-panel-layout")
], x);
function H(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  x as ZeroPanelLayout,
  ut as studioTemplate
};
