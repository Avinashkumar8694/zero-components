var Ie = Object.defineProperty;
var Le = (r, t, e) => t in r ? Ie(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Vt = (r, t, e) => Le(r, typeof t != "symbol" ? t + "" : t, e);
var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var qt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Ft == "object" ? Ft : typeof self == "object" ? self : typeof this == "object" ? this : v(), i = s(r);
    typeof e.Reflect < "u" && (i = s(e.Reflect, i)), t(i, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(p, E) {
      return function($, m) {
        Object.defineProperty(p, $, { configurable: !0, writable: !0, value: m }), E && E($, m);
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
  })(function(t, e) {
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", d = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, E = !v && !p, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return mt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return mt({ __proto__: null });
      } : function() {
        return mt({});
      },
      has: E ? function(n, o) {
        return i.call(n, o);
      } : function(n, o) {
        return o in n;
      },
      get: E ? function(n, o) {
        return i.call(n, o) ? n[o] : void 0;
      } : function(n, o) {
        return n[o];
      }
    }, m = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : ke(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Re(), N = typeof WeakMap == "function" ? WeakMap : Ne(), I = s ? Symbol.for("@reflect-metadata:registry") : void 0, G = Oe(), tt = Pe(G);
    function ut(n, o, a, u) {
      if (b(a)) {
        if (!It(n))
          throw new TypeError();
        if (!Lt(o))
          throw new TypeError();
        return we(n, o);
      } else {
        if (!It(n))
          throw new TypeError();
        if (!C(o))
          throw new TypeError();
        if (!C(u) && !b(u) && !Y(u))
          throw new TypeError();
        return Y(u) && (u = void 0), a = U(a), $e(n, o, a, u);
      }
    }
    t("decorate", ut);
    function fe(n, o) {
      function a(u, g) {
        if (!C(u))
          throw new TypeError();
        if (!b(g) && !Ce(g))
          throw new TypeError();
        kt(n, o, u, g);
      }
      return a;
    }
    t("metadata", fe);
    function he(n, o, a, u) {
      if (!C(a))
        throw new TypeError();
      return b(u) || (u = U(u)), kt(n, o, a, u);
    }
    t("defineMetadata", he);
    function pe(n, o, a) {
      if (!C(o))
        throw new TypeError();
      return b(a) || (a = U(a)), Ot(n, o, a);
    }
    t("hasMetadata", pe);
    function ye(n, o, a) {
      if (!C(o))
        throw new TypeError();
      return b(a) || (a = U(a)), gt(n, o, a);
    }
    t("hasOwnMetadata", ye);
    function ge(n, o, a) {
      if (!C(o))
        throw new TypeError();
      return b(a) || (a = U(a)), Pt(n, o, a);
    }
    t("getMetadata", ge);
    function ve(n, o, a) {
      if (!C(o))
        throw new TypeError();
      return b(a) || (a = U(a)), Tt(n, o, a);
    }
    t("getOwnMetadata", ve);
    function be(n, o) {
      if (!C(n))
        throw new TypeError();
      return b(o) || (o = U(o)), Rt(n, o);
    }
    t("getMetadataKeys", be);
    function me(n, o) {
      if (!C(n))
        throw new TypeError();
      return b(o) || (o = U(o)), Nt(n, o);
    }
    t("getOwnMetadataKeys", me);
    function _e(n, o, a) {
      if (!C(o))
        throw new TypeError();
      if (b(a) || (a = U(a)), !C(o))
        throw new TypeError();
      b(a) || (a = U(a));
      var u = et(
        o,
        a,
        /*Create*/
        !1
      );
      return b(u) ? !1 : u.OrdinaryDeleteMetadata(n, o, a);
    }
    t("deleteMetadata", _e);
    function we(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var u = n[a], g = u(o);
        if (!b(g) && !Y(g)) {
          if (!Lt(g))
            throw new TypeError();
          o = g;
        }
      }
      return o;
    }
    function $e(n, o, a, u) {
      for (var g = n.length - 1; g >= 0; --g) {
        var O = n[g], M = O(o, a, u);
        if (!b(M) && !Y(M)) {
          if (!C(M))
            throw new TypeError();
          u = M;
        }
      }
      return u;
    }
    function Ot(n, o, a) {
      var u = gt(n, o, a);
      if (u)
        return !0;
      var g = bt(o);
      return Y(g) ? !1 : Ot(n, g, a);
    }
    function gt(n, o, a) {
      var u = et(
        o,
        a,
        /*Create*/
        !1
      );
      return b(u) ? !1 : Ut(u.OrdinaryHasOwnMetadata(n, o, a));
    }
    function Pt(n, o, a) {
      var u = gt(n, o, a);
      if (u)
        return Tt(n, o, a);
      var g = bt(o);
      if (!Y(g))
        return Pt(n, g, a);
    }
    function Tt(n, o, a) {
      var u = et(
        o,
        a,
        /*Create*/
        !1
      );
      if (!b(u))
        return u.OrdinaryGetOwnMetadata(n, o, a);
    }
    function kt(n, o, a, u) {
      var g = et(
        a,
        u,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(n, o, a, u);
    }
    function Rt(n, o) {
      var a = Nt(n, o), u = bt(n);
      if (u === null)
        return a;
      var g = Rt(u, o);
      if (g.length <= 0)
        return a;
      if (a.length <= 0)
        return g;
      for (var O = new R(), M = [], _ = 0, c = a; _ < c.length; _++) {
        var f = c[_], h = O.has(f);
        h || (O.add(f), M.push(f));
      }
      for (var y = 0, w = g; y < w.length; y++) {
        var f = w[y], h = O.has(f);
        h || (O.add(f), M.push(f));
      }
      return M;
    }
    function Nt(n, o) {
      var a = et(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function jt(n) {
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
    function b(n) {
      return n === void 0;
    }
    function Y(n) {
      return n === null;
    }
    function Ee(n) {
      return typeof n == "symbol";
    }
    function C(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function xe(n, o) {
      switch (jt(n)) {
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
      var a = "string", u = Ht(n, l);
      if (u !== void 0) {
        var g = u.call(n, a);
        if (C(g))
          throw new TypeError();
        return g;
      }
      return Ae(n);
    }
    function Ae(n, o) {
      var a, u;
      {
        var g = n.toString;
        if (ct(g)) {
          var u = g.call(n);
          if (!C(u))
            return u;
        }
        var a = n.valueOf;
        if (ct(a)) {
          var u = a.call(n);
          if (!C(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Ut(n) {
      return !!n;
    }
    function Se(n) {
      return "" + n;
    }
    function U(n) {
      var o = xe(n);
      return Ee(o) ? o : Se(o);
    }
    function It(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function ct(n) {
      return typeof n == "function";
    }
    function Lt(n) {
      return typeof n == "function";
    }
    function Ce(n) {
      switch (jt(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function vt(n, o) {
      return n === o || n !== n && o !== o;
    }
    function Ht(n, o) {
      var a = n[o];
      if (a != null) {
        if (!ct(a))
          throw new TypeError();
        return a;
      }
    }
    function Dt(n) {
      var o = Ht(n, d);
      if (!ct(o))
        throw new TypeError();
      var a = o.call(n);
      if (!C(a))
        throw new TypeError();
      return a;
    }
    function zt(n) {
      return n.value;
    }
    function Bt(n) {
      var o = n.next();
      return o.done ? !1 : o;
    }
    function Gt(n) {
      var o = n.return;
      o && o.call(n);
    }
    function bt(n) {
      var o = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === m || o !== m)
        return o;
      var a = n.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return o;
      var g = u.constructor;
      return typeof g != "function" || g === n ? o : g;
    }
    function Me() {
      var n;
      !b(I) && typeof e.Reflect < "u" && !(I in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (n = Te(e.Reflect));
      var o, a, u, g = new N(), O = {
        registerProvider: M,
        getProvider: c,
        setProvider: h
      };
      return O;
      function M(y) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === y:
            break;
          case b(o):
            o = y;
            break;
          case o === y:
            break;
          case b(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            u === void 0 && (u = new R()), u.add(y);
            break;
        }
      }
      function _(y, w) {
        if (!b(o)) {
          if (o.isProviderFor(y, w))
            return o;
          if (!b(a)) {
            if (a.isProviderFor(y, w))
              return o;
            if (!b(u))
              for (var x = Dt(u); ; ) {
                var A = Bt(x);
                if (!A)
                  return;
                var j = zt(A);
                if (j.isProviderFor(y, w))
                  return Gt(x), j;
              }
          }
        }
        if (!b(n) && n.isProviderFor(y, w))
          return n;
      }
      function c(y, w) {
        var x = g.get(y), A;
        return b(x) || (A = x.get(w)), b(A) && (A = _(y, w), b(A) || (b(x) && (x = new S(), g.set(y, x)), x.set(w, A))), A;
      }
      function f(y) {
        if (b(y))
          throw new TypeError();
        return o === y || a === y || !b(u) && u.has(y);
      }
      function h(y, w, x) {
        if (!f(x))
          throw new Error("Metadata provider not registered.");
        var A = c(y, w);
        if (A !== x) {
          if (!b(A))
            return !1;
          var j = g.get(y);
          b(j) && (j = new S(), g.set(y, j)), j.set(w, x);
        }
        return !0;
      }
    }
    function Oe() {
      var n;
      return !b(I) && C(e.Reflect) && Object.isExtensible(e.Reflect) && (n = e.Reflect[I]), b(n) && (n = Me()), !b(I) && C(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, I, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Pe(n) {
      var o = new N(), a = {
        isProviderFor: function(f, h) {
          var y = o.get(f);
          return b(y) ? !1 : y.has(h);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: c
      };
      return G.registerProvider(a), a;
      function u(f, h, y) {
        var w = o.get(f), x = !1;
        if (b(w)) {
          if (!y)
            return;
          w = new S(), o.set(f, w), x = !0;
        }
        var A = w.get(h);
        if (b(A)) {
          if (!y)
            return;
          if (A = new S(), w.set(h, A), !n.setProvider(f, h, a))
            throw w.delete(h), x && o.delete(f), new Error("Wrong provider for target.");
        }
        return A;
      }
      function g(f, h, y) {
        var w = u(
          h,
          y,
          /*Create*/
          !1
        );
        return b(w) ? !1 : Ut(w.has(f));
      }
      function O(f, h, y) {
        var w = u(
          h,
          y,
          /*Create*/
          !1
        );
        if (!b(w))
          return w.get(f);
      }
      function M(f, h, y, w) {
        var x = u(
          y,
          w,
          /*Create*/
          !0
        );
        x.set(f, h);
      }
      function _(f, h) {
        var y = [], w = u(
          f,
          h,
          /*Create*/
          !1
        );
        if (b(w))
          return y;
        for (var x = w.keys(), A = Dt(x), j = 0; ; ) {
          var Wt = Bt(A);
          if (!Wt)
            return y.length = j, y;
          var je = zt(Wt);
          try {
            y[j] = je;
          } catch (Ue) {
            try {
              Gt(A);
            } finally {
              throw Ue;
            }
          }
          j++;
        }
      }
      function c(f, h, y) {
        var w = u(
          h,
          y,
          /*Create*/
          !1
        );
        if (b(w) || !w.delete(f))
          return !1;
        if (w.size === 0) {
          var x = o.get(h);
          b(x) || (x.delete(y), x.size === 0 && o.delete(x));
        }
        return !0;
      }
    }
    function Te(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, u = n.getOwnMetadata, g = n.getOwnMetadataKeys, O = n.deleteMetadata, M = new N(), _ = {
        isProviderFor: function(c, f) {
          var h = M.get(c);
          return !b(h) && h.has(f) ? !0 : g(c, f).length ? (b(h) && (h = new R(), M.set(c, h)), h.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: O
      };
      return _;
    }
    function et(n, o, a) {
      var u = G.getProvider(n, o);
      if (!b(u))
        return u;
      if (a) {
        if (G.setProvider(n, o, tt))
          return tt;
        throw new Error("Illegal state.");
      }
    }
    function ke() {
      var n = {}, o = [], a = (
        /** @class */
        function() {
          function _(c, f, h) {
            this._index = 0, this._keys = c, this._values = f, this._selector = h;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[d] = function() {
            return this;
          }, _.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var f = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), c;
          }, _.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: c, done: !0 };
          }, _;
        }()
      ), u = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
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
            var f = this._find(
              c,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, _.prototype.set = function(c, f) {
            var h = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[h] = f, this;
          }, _.prototype.delete = function(c) {
            var f = this._find(
              c,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var h = this._keys.length, y = f + 1; y < h; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, vt(c, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, g);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[d] = function() {
            return this.entries();
          }, _.prototype._find = function(c, f) {
            if (!vt(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var h = 0; h < this._keys.length; h++)
                if (vt(this._keys[h], c)) {
                  this._cacheIndex = h;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return u;
      function g(_, c) {
        return _;
      }
      function O(_, c) {
        return c;
      }
      function M(_, c) {
        return [_, c];
      }
    }
    function Re() {
      var n = (
        /** @class */
        function() {
          function o() {
            this._map = new S();
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
          }, o.prototype[d] = function() {
            return this.keys();
          }, o;
        }()
      );
      return n;
    }
    function Ne() {
      var n = 16, o = $.create(), a = u();
      return (
        /** @class */
        function() {
          function c() {
            this._key = u();
          }
          return c.prototype.has = function(f) {
            var h = g(
              f,
              /*create*/
              !1
            );
            return h !== void 0 ? $.has(h, this._key) : !1;
          }, c.prototype.get = function(f) {
            var h = g(
              f,
              /*create*/
              !1
            );
            return h !== void 0 ? $.get(h, this._key) : void 0;
          }, c.prototype.set = function(f, h) {
            var y = g(
              f,
              /*create*/
              !0
            );
            return y[this._key] = h, this;
          }, c.prototype.delete = function(f) {
            var h = g(
              f,
              /*create*/
              !1
            );
            return h !== void 0 ? delete h[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = u();
          }, c;
        }()
      );
      function u() {
        var c;
        do
          c = "@@WeakMap@@" + _();
        while ($.has(o, c));
        return o[c] = !0, c;
      }
      function g(c, f) {
        if (!i.call(c, a)) {
          if (!f)
            return;
          Object.defineProperty(c, a, { value: $.create() });
        }
        return c[a];
      }
      function O(c, f) {
        for (var h = 0; h < f; ++h)
          c[h] = Math.random() * 255 | 0;
        return c;
      }
      function M(c) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : O(f, c), f;
        }
        return O(new Array(c), c);
      }
      function _() {
        var c = M(n);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var f = "", h = 0; h < n; ++h) {
          var y = c[h];
          (h === 4 || h === 6 || h === 8) && (f += "-"), y < 16 && (f += "0"), f += y.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function mt(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(qt || (qt = {}));
function He(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function De(r) {
  return function(t) {
    if (He(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const i = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(i))
          try {
            customElements.define(i, t);
          } catch {
            try {
              customElements.define(i, class extends t {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, l);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: e
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function ze(r) {
  return De(r);
}
function Be(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Vt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), d = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), v = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && v) {
          const $ = new CSSStyleSheet(), m = (E = l.sheet) == null ? void 0 : E.cssRules;
          m && (Array.from(m).forEach((S) => $.insertRule(S.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          p.appendChild($);
        }
        d.forEach(($) => {
          const m = $.cloneNode(!0);
          p.appendChild(m);
        });
      }
    }
    return e;
  };
}
function Ge(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function We(r) {
  return function(t, e) {
    try {
      Ge(r);
      const i = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? e);
      }
      i.push(r), Reflect.defineMetadata("ZeroAttribute", i, t);
    } catch (i) {
      console.log(i);
    }
  };
}
function X(r) {
  return We(r);
}
var L;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(L || (L = {}));
var H;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(H || (H = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft = globalThis, At = ft.ShadowRoot && (ft.ShadyCSS === void 0 || ft.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, St = Symbol(), Xt = /* @__PURE__ */ new WeakMap();
let ae = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== St) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (At && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = Xt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && Xt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ve = (r) => new ae(typeof r == "string" ? r : r + "", void 0, St), Fe = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((i, s, l) => i + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ae(e, r, St);
}, qe = (r, t) => {
  if (At) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), s = ft.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = e.cssText, r.appendChild(i);
  }
}, Yt = At ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return Ve(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xe, defineProperty: Ye, getOwnPropertyDescriptor: Ze, getOwnPropertyNames: Je, getOwnPropertySymbols: Qe, getPrototypeOf: Ke } = Object, z = globalThis, Zt = z.trustedTypes, tr = Zt ? Zt.emptyScript : "", _t = z.reactiveElementPolyfillSupport, it = (r, t) => r, ht = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? tr : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, Ct = (r, t) => !Xe(r, t), Jt = { attribute: !0, type: String, converter: ht, reflect: !1, useDefault: !1, hasChanged: Ct };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Jt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && Ye(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: s, set: l } = Ze(this.prototype, t) ?? { get() {
      return this[e];
    }, set(d) {
      this[e] = d;
    } };
    return { get: s, set(d) {
      const v = s == null ? void 0 : s.call(this);
      l == null || l.call(this, d), this.requestUpdate(t, v, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Jt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(it("elementProperties"))) return;
    const t = Ke(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(it("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(it("properties"))) {
      const e = this.properties, i = [...Je(e), ...Qe(e)];
      for (const s of i) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, s] of e) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const s = this._$Eu(e, i);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i) e.unshift(Yt(s));
    } else t !== void 0 && e.push(Yt(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return qe(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) == null ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) == null ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$ET(t, e) {
    var l;
    const i = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, i);
    if (s !== void 0 && i.reflect === !0) {
      const d = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : ht).toAttribute(e, i.type);
      this._$Em = t, d == null ? this.removeAttribute(s) : this.setAttribute(s, d), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, d;
    const i = this.constructor, s = i._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const v = i.getPropertyOptions(s), p = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : ht;
      this._$Em = s;
      const E = p.fromAttribute(e, v.type);
      this[s] = E ?? ((d = this._$Ej) == null ? void 0 : d.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, s = !1, l) {
    var d;
    if (t !== void 0) {
      const v = this.constructor;
      if (s === !1 && (l = this[t]), i ?? (i = v.getPropertyOptions(t)), !((i.hasChanged ?? Ct)(l, e) || i.useDefault && i.reflect && l === ((d = this._$Ej) == null ? void 0 : d.get(t)) && !this.hasAttribute(v._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: s, wrapped: l }, d) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, d ?? e ?? this[t]), l !== !0 || d !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, d] of s) {
        const { wrapped: v } = d, p = this[l];
        v !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, d, p);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (i = this._$EO) == null || i.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[it("elementProperties")] = /* @__PURE__ */ new Map(), J[it("finalized")] = /* @__PURE__ */ new Map(), _t == null || _t({ ReactiveElement: J }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt = globalThis, Qt = (r) => r, pt = nt.trustedTypes, Kt = pt ? pt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, le = "$lit$", D = `lit$${Math.random().toFixed(9).slice(2)}$`, de = "?" + D, er = `<${de}>`, q = document, ot = () => q.createComment(""), at = (r) => r === null || typeof r != "object" && typeof r != "function", Mt = Array.isArray, rr = (r) => Mt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", wt = `[ 	
\f\r]`, rt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, te = /-->/g, ee = />/g, W = RegExp(`>|${wt}(?:([^\\s"'>=/]+)(${wt}*=${wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), re = /'/g, ie = /"/g, ue = /^(?:script|style|textarea|title)$/i, ir = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), $t = ir(1), Q = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), ne = /* @__PURE__ */ new WeakMap(), V = q.createTreeWalker(q, 129);
function ce(r, t) {
  if (!Mt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Kt !== void 0 ? Kt.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, i = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", d = rt;
  for (let v = 0; v < e; v++) {
    const p = r[v];
    let E, $, m = -1, S = 0;
    for (; S < p.length && (d.lastIndex = S, $ = d.exec(p), $ !== null); ) S = d.lastIndex, d === rt ? $[1] === "!--" ? d = te : $[1] !== void 0 ? d = ee : $[2] !== void 0 ? (ue.test($[2]) && (s = RegExp("</" + $[2], "g")), d = W) : $[3] !== void 0 && (d = W) : d === W ? $[0] === ">" ? (d = s ?? rt, m = -1) : $[1] === void 0 ? m = -2 : (m = d.lastIndex - $[2].length, E = $[1], d = $[3] === void 0 ? W : $[3] === '"' ? ie : re) : d === ie || d === re ? d = W : d === te || d === ee ? d = rt : (d = W, s = void 0);
    const R = d === W && r[v + 1].startsWith("/>") ? " " : "";
    l += d === rt ? p + er : m >= 0 ? (i.push(E), p.slice(0, m) + le + p.slice(m) + D + R) : p + D + (m === -2 ? v : R);
  }
  return [ce(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class lt {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let l = 0, d = 0;
    const v = t.length - 1, p = this.parts, [E, $] = nr(t, e);
    if (this.el = lt.createElement(E, i), V.currentNode = this.el.content, e === 2 || e === 3) {
      const m = this.el.content.firstChild;
      m.replaceWith(...m.childNodes);
    }
    for (; (s = V.nextNode()) !== null && p.length < v; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const m of s.getAttributeNames()) if (m.endsWith(le)) {
          const S = $[d++], R = s.getAttribute(m).split(D), N = /([.?@])?(.*)/.exec(S);
          p.push({ type: 1, index: l, name: N[2], strings: R, ctor: N[1] === "." ? or : N[1] === "?" ? ar : N[1] === "@" ? lr : yt }), s.removeAttribute(m);
        } else m.startsWith(D) && (p.push({ type: 6, index: l }), s.removeAttribute(m));
        if (ue.test(s.tagName)) {
          const m = s.textContent.split(D), S = m.length - 1;
          if (S > 0) {
            s.textContent = pt ? pt.emptyScript : "";
            for (let R = 0; R < S; R++) s.append(m[R], ot()), V.nextNode(), p.push({ type: 2, index: ++l });
            s.append(m[S], ot());
          }
        }
      } else if (s.nodeType === 8) if (s.data === de) p.push({ type: 2, index: l });
      else {
        let m = -1;
        for (; (m = s.data.indexOf(D, m + 1)) !== -1; ) p.push({ type: 7, index: l }), m += D.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const i = q.createElement("template");
    return i.innerHTML = t, i;
  }
}
function K(r, t, e = r, i) {
  var d, v;
  if (t === Q) return t;
  let s = i !== void 0 ? (d = e._$Co) == null ? void 0 : d[i] : e._$Cl;
  const l = at(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((v = s == null ? void 0 : s._$AO) == null || v.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, i)), i !== void 0 ? (e._$Co ?? (e._$Co = []))[i] = s : e._$Cl = s), s !== void 0 && (t = K(r, s._$AS(r, t.values), s, i)), t;
}
class sr {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: i } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? q).importNode(e, !0);
    V.currentNode = s;
    let l = V.nextNode(), d = 0, v = 0, p = i[0];
    for (; p !== void 0; ) {
      if (d === p.index) {
        let E;
        p.type === 2 ? E = new dt(l, l.nextSibling, this, t) : p.type === 1 ? E = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (E = new dr(l, this, t)), this._$AV.push(E), p = i[++v];
      }
      d !== (p == null ? void 0 : p.index) && (l = V.nextNode(), d++);
    }
    return V.currentNode = q, s;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class dt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, i, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = K(this, t, e), at(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== Q && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : rr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && at(this._$AH) ? this._$AA.nextSibling.data = t : this.T(q.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: i } = t, s = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = lt.createElement(ce(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const d = new sr(s, this), v = d.u(this.options);
      d.p(e), this.T(v), this._$AH = d;
    }
  }
  _$AC(t) {
    let e = ne.get(t.strings);
    return e === void 0 && ne.set(t.strings, e = new lt(t)), e;
  }
  k(t) {
    Mt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const l of t) s === e.length ? e.push(i = new dt(this.O(ot()), this.O(ot()), this, this.options)) : i = e[s], i._$AI(l), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Qt(t).nextSibling;
      Qt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class yt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, s, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = P;
  }
  _$AI(t, e = this, i, s) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) t = K(this, t, e, 0), d = !at(t) || t !== this._$AH && t !== Q, d && (this._$AH = t);
    else {
      const v = t;
      let p, E;
      for (t = l[0], p = 0; p < l.length - 1; p++) E = K(this, v[i + p], e, p), E === Q && (E = this._$AH[p]), d || (d = !at(E) || E !== this._$AH[p]), E === P ? t = P : t !== P && (t += (E ?? "") + l[p + 1]), this._$AH[p] = E;
    }
    d && !s && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class or extends yt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class ar extends yt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class lr extends yt {
  constructor(t, e, i, s, l) {
    super(t, e, i, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = K(this, t, e, 0) ?? P) === Q) return;
    const i = this._$AH, s = t === P && i !== P || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, l = t !== P && (i === P || s);
    s && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class dr {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    K(this, t);
  }
}
const Et = nt.litHtmlPolyfillSupport;
Et == null || Et(lt, dt), (nt.litHtmlVersions ?? (nt.litHtmlVersions = [])).push("3.3.3");
const ur = (r, t, e) => {
  const i = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = i._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    i._$litPart$ = s = new dt(t.insertBefore(ot(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F = globalThis;
class st extends J {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ur(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return Q;
  }
}
var oe;
st._$litElement$ = !0, st.finalized = !0, (oe = F.litElementHydrateSupport) == null || oe.call(F, { LitElement: st });
const xt = F.litElementPolyfillSupport;
xt == null || xt({ LitElement: st });
(F.litElementVersions ?? (F.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: ht, reflect: !1, hasChanged: Ct }, fr = (r = cr, t, e) => {
  const { kind: i, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), i === "accessor") {
    const { name: d } = e;
    return { set(v) {
      const p = t.get.call(this);
      t.set.call(this, v), this.requestUpdate(d, p, r, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(d, void 0, r, v), v;
    } };
  }
  if (i === "setter") {
    const { name: d } = e;
    return function(v) {
      const p = this[d];
      t.call(this, v), this.requestUpdate(d, p, r, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function B(r) {
  return (t, e) => typeof e == "object" ? fr(r, t, e) : ((i, s, l) => {
    const d = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, i), d ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var hr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, k = (r, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? pr(t, e) : t, l = r.length - 1, d; l >= 0; l--)
    (d = r[l]) && (s = (i ? d(t, e, s) : d(s)) || s);
  return i && s && hr(t, e, s), s;
};
function Z(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const se = {
  kind: "generic",
  templateHtml: [
    "<div style='padding:16px;border-radius:18px;background:#ffffff;border:1px solid rgba(0,0,0,0.08);box-shadow:0 10px 30px rgba(0,0,0,0.03);position:relative;font-family:sans-serif;'>",
    "<div style='position:absolute;top:12px;right:12px;background:#132238;color:#ffffff;font-size:0.7rem;padding:3px 8px;border-radius:4px;font-weight:700;'>{{display:badge}}</div>",
    "<div style='aspect-ratio:4/3;background:#f9f8f6;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden;'>",
    "<span style='font-size:1.8rem;'>🚲</span>",
    "</div>",
    "<div style='margin-top:12px;display:flex;justify-content:space-between;align-items:baseline;'>",
    "<strong style='font-size:1rem;color:#132238;'>{{display:title}}</strong>",
    "<span style='font-size:0.95rem;color:#132238;font-weight:700;'>{{display:price}}</span>",
    "</div>",
    "<div style='font-size:0.75rem;color:#64748b;margin-top:4px;'>{{display:description}}</div>",
    "<div style='margin-top:12px;display:flex;gap:6px;'><span style='display:inline-block;width:12px;height:12px;border-radius:50%;background:#000;'></span><span style='display:inline-block;width:12px;height:12px;border-radius:50%;background:#e67e22;'></span></div>",
    "<button type='button' style='margin-top:16px;width:100%;border:1px solid rgba(19,34,56,0.12);background:#ffffff;color:#132238;padding:8px 12px;border-radius:999px;font-size:0.82rem;font-weight:700;'>{{display:buttonLabel}}</button>",
    "</div>"
  ].join(""),
  badges: ["Ecommerce", "Product"]
};
let T = class extends st {
  constructor() {
    super(...arguments), this.image = "/featured_bike_1.png", this.badge = "", this.title = "Product Title", this.price = "$0.00", this.colors = "black,#e67e22,#cccccc", this.description = "Category / Spec", this.buttonLabel = "Configure Bike", this.variant = "secondary", this.imageConfig = "/featured_bike_1.png", this.badgeConfig = "", this.titleConfig = "Product Title", this.priceConfig = "$0.00", this.colorsConfig = "black,#e67e22,#cccccc", this.descriptionConfig = "Category / Spec", this.buttonLabelConfig = "Configure Bike";
  }
  static getStudioTemplate(r) {
    var v, p, E, $, m, S, R, N, I, G, tt, ut;
    if (!r) return se;
    const t = Z(((v = r.props) == null ? void 0 : v.badge) ?? ((p = r.studio.props) == null ? void 0 : p.badge) ?? ""), e = Z(((E = r.props) == null ? void 0 : E.image) ?? (($ = r.studio.props) == null ? void 0 : $.image) ?? "/featured_bike_1.png"), i = Z(((m = r.props) == null ? void 0 : m.title) ?? ((S = r.studio.props) == null ? void 0 : S.title) ?? "Product Title"), s = Z(((R = r.props) == null ? void 0 : R.price) ?? ((N = r.studio.props) == null ? void 0 : N.price) ?? "$0.00"), l = Z(((I = r.props) == null ? void 0 : I.description) ?? ((G = r.studio.props) == null ? void 0 : G.description) ?? "Category / Spec"), d = Z(((tt = r.props) == null ? void 0 : tt.buttonLabel) ?? ((ut = r.studio.props) == null ? void 0 : ut.buttonLabel) ?? "Configure Bike");
    return {
      ...se,
      templateHtml: [
        "<div style='padding:16px;border-radius:18px;background:#ffffff;border:1px solid rgba(19, 34, 56, 0.08);box-shadow:0 10px 30px rgba(19, 34, 56, 0.03);position:relative;font-family:inherit;'>",
        t ? `<div style='position:absolute;top:12px;right:12px;background:#e2e8f0;color:#132238;font-size:0.7rem;padding:3px 8px;border-radius:4px;font-weight:700;'>${t}</div>` : "",
        "<div style='aspect-ratio:4/3;background:#f9f8f6;border-radius:12px;overflow:hidden;display:flex;align-items:center;justify-content:center;'>",
        `<img src='${e}' style='width:100%;height:100%;object-fit:contain;' />`,
        "</div>",
        "<div style='margin-top:12px;display:flex;justify-content:space-between;align-items:baseline;'>",
        `<h4 style='margin:0;font-size:16px;color:#132238;font-family:Georgia,serif;font-weight:700;'>${i}</h4>`,
        `<span style='font-size:15px;color:#132238;font-weight:700;'>${s}</span>`,
        "</div>",
        `<div style='font-size:12px;color:#64748b;margin-top:4px;font-style:italic;'>${l}</div>`,
        "<div style='margin-top:12px;display:flex;gap:8px;'>",
        "<span style='display:inline-block;width:12px;height:12px;border-radius:50%;background:#000000;border:1px solid rgba(0,0,0,0.1);'></span>",
        "<span style='display:inline-block;width:12px;height:12px;border-radius:50%;background:#e67e22;border:1px solid rgba(0,0,0,0.1);'></span>",
        "<span style='display:inline-block;width:12px;height:12px;border-radius:50%;background:#cccccc;border:1px solid rgba(0,0,0,0.1);'></span>",
        "</div>",
        `<button type='button' style='margin-top:16px;width:100%;border:1px solid rgba(19, 34, 56, 0.12);background:#ffffff;color:#132238;padding:10px 14px;border-radius:999px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;'>${d}</button>`,
        "</div>"
      ].join("")
    };
  }
  updated(r) {
    r.has("imageConfig") && (this.image = this.imageConfig), r.has("badgeConfig") && (this.badge = this.badgeConfig), r.has("titleConfig") && (this.title = this.titleConfig), r.has("priceConfig") && (this.price = this.priceConfig), r.has("colorsConfig") && (this.colors = this.colorsConfig), r.has("descriptionConfig") && (this.description = this.descriptionConfig), r.has("buttonLabelConfig") && (this.buttonLabel = this.buttonLabelConfig);
  }
  render() {
    const r = (this.colors || "").split(",").map((t) => t.trim()).filter(Boolean);
    return $t`
      <div class="product-card">
        ${this.badge ? $t`<div class="badge">${this.badge}</div>` : null}
        <div class="image-container">
          <img src=${this.image} alt=${this.title} loading="lazy" />
        </div>
        <div class="details-row">
          <h4 class="title">${this.title}</h4>
          <span class="price">${this.price}</span>
        </div>
        <div class="description">${this.description}</div>
        <div class="swatches">
          ${r.map(
      (t) => $t`
              <span
                class="swatch"
                style="background: ${t};"
                title=${t}
              ></span>
            `
    )}
        </div>
        <button type="button">${this.buttonLabel}</button>
      </div>
    `;
  }
};
T.styles = Fe`
    :host {
      display: block;
      width: 100%;
    }

    .product-card {
      padding: 16px;
      border-radius: 18px;
      background: #ffffff;
      border: 1px solid rgba(19, 34, 56, 0.08);
      box-shadow: 0 10px 30px rgba(19, 34, 56, 0.03);
      position: relative;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 36px rgba(19, 34, 56, 0.06);
    }

    .badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background: #e2e8f0;
      color: #132238;
      font-size: 11px;
      padding: 3px 8px;
      border-radius: 4px;
      font-weight: 700;
      z-index: 2;
    }

    .image-container {
      aspect-ratio: 4 / 3;
      background: #f9f8f6;
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.4s ease;
    }

    .product-card:hover img {
      transform: scale(1.05);
    }

    .details-row {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    .title {
      margin: 0;
      font-size: 16px;
      color: #132238;
      font-family: Georgia, serif;
      font-weight: 700;
    }

    .price {
      font-size: 15px;
      color: #132238;
      font-weight: 700;
    }

    .description {
      font-size: 12px;
      color: #64748b;
      margin-top: 4px;
      font-style: italic;
    }

    .swatches {
      margin-top: 12px;
      display: flex;
      gap: 8px;
    }

    .swatch {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.15);
      cursor: pointer;
      transition: transform 0.15s ease;
    }

    .swatch:hover {
      transform: scale(1.2);
    }

    button {
      margin-top: 16px;
      width: 100%;
      border: 1px solid rgba(19, 34, 56, 0.12);
      background: #ffffff;
      color: #132238;
      padding: 10px 14px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;
      transition: background 0.15s ease, color 0.15s ease;
    }

    button:hover {
      background: #132238;
      color: #ffffff;
      border-color: #132238;
    }
  `;
k([
  B({ type: String })
], T.prototype, "image", 2);
k([
  B({ type: String })
], T.prototype, "badge", 2);
k([
  B({ type: String })
], T.prototype, "title", 2);
k([
  B({ type: String })
], T.prototype, "price", 2);
k([
  B({ type: String })
], T.prototype, "colors", 2);
k([
  B({ type: String })
], T.prototype, "description", 2);
k([
  B({ type: String, attribute: "button-label" })
], T.prototype, "buttonLabel", 2);
k([
  B({ type: String })
], T.prototype, "variant", 2);
k([
  X({
    attributeType: H.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Image Source",
    fieldMappings: "image"
  })
], T.prototype, "imageConfig", 2);
k([
  X({
    attributeType: H.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Promo Badge",
    fieldMappings: "badge"
  })
], T.prototype, "badgeConfig", 2);
k([
  X({
    attributeType: H.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title"
  })
], T.prototype, "titleConfig", 2);
k([
  X({
    attributeType: H.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Price",
    fieldMappings: "price"
  })
], T.prototype, "priceConfig", 2);
k([
  X({
    attributeType: H.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Colors (CSV)",
    fieldMappings: "colors"
  })
], T.prototype, "colorsConfig", 2);
k([
  X({
    attributeType: H.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Description",
    fieldMappings: "description"
  })
], T.prototype, "descriptionConfig", 2);
k([
  X({
    attributeType: H.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Button Label",
    fieldMappings: "buttonLabel"
  })
], T.prototype, "buttonLabelConfig", 2);
T = k([
  ze({
    name: "zero-product-card",
    version: "1.0.0",
    title: "Product Card",
    elementSelector: "zero-product-card",
    group: "Ecommerce",
    iconName: "card-icon.png"
  }),
  Be()
], T);
export {
  T as ZeroProductCard,
  se as studioTemplate
};
