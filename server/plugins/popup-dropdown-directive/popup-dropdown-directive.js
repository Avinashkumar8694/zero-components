var Tt = Object.defineProperty;
var Rt = (r, e, t) => e in r ? Tt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ve = (r, e, t) => Rt(r, typeof e != "symbol" ? e + "" : e, t);
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
var Le;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof ze == "object" ? ze : typeof self == "object" ? self : typeof this == "object" ? this : m(), i = o(r);
    typeof t.Reflect < "u" && (i = o(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(v, $) {
      return function(A, b) {
        Object.defineProperty(v, A, { configurable: !0, writable: !0, value: b }), $ && $(A, b);
      };
    }
    function d() {
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
    function m() {
      return d() || l();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", d = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, $ = !m && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return he(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return he({ __proto__: null });
      } : function() {
        return he({});
      },
      has: $ ? function(n, s) {
        return i.call(n, s);
      } : function(n, s) {
        return s in n;
      },
      get: $ ? function(n, s) {
        return i.call(n, s) ? n[s] : void 0;
      } : function(n, s) {
        return n[s];
      }
    }, b = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Mt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pt(), U = typeof WeakMap == "function" ? WeakMap : Ct(), L = o ? Symbol.for("@reflect-metadata:registry") : void 0, ne = Et(), Ae = St(ne);
    function st(n, s, a, u) {
      if (g(a)) {
        if (!Te(n))
          throw new TypeError();
        if (!Re(s))
          throw new TypeError();
        return yt(n, s);
      } else {
        if (!Te(n))
          throw new TypeError();
        if (!M(s))
          throw new TypeError();
        if (!M(u) && !g(u) && !B(u))
          throw new TypeError();
        return B(u) && (u = void 0), a = N(a), gt(n, s, a, u);
      }
    }
    e("decorate", st);
    function at(n, s) {
      function a(u, y) {
        if (!M(u))
          throw new TypeError();
        if (!g(y) && !$t(y))
          throw new TypeError();
        Me(n, s, u, y);
      }
      return a;
    }
    e("metadata", at);
    function lt(n, s, a, u) {
      if (!M(a))
        throw new TypeError();
      return g(u) || (u = N(u)), Me(n, s, a, u);
    }
    e("defineMetadata", lt);
    function dt(n, s, a) {
      if (!M(s))
        throw new TypeError();
      return g(a) || (a = N(a)), Ee(n, s, a);
    }
    e("hasMetadata", dt);
    function ut(n, s, a) {
      if (!M(s))
        throw new TypeError();
      return g(a) || (a = N(a)), de(n, s, a);
    }
    e("hasOwnMetadata", ut);
    function ct(n, s, a) {
      if (!M(s))
        throw new TypeError();
      return g(a) || (a = N(a)), Se(n, s, a);
    }
    e("getMetadata", ct);
    function ht(n, s, a) {
      if (!M(s))
        throw new TypeError();
      return g(a) || (a = N(a)), Oe(n, s, a);
    }
    e("getOwnMetadata", ht);
    function ft(n, s) {
      if (!M(n))
        throw new TypeError();
      return g(s) || (s = N(s)), Pe(n, s);
    }
    e("getMetadataKeys", ft);
    function pt(n, s) {
      if (!M(n))
        throw new TypeError();
      return g(s) || (s = N(s)), Ce(n, s);
    }
    e("getOwnMetadataKeys", pt);
    function vt(n, s, a) {
      if (!M(s))
        throw new TypeError();
      if (g(a) || (a = N(a)), !M(s))
        throw new TypeError();
      g(a) || (a = N(a));
      var u = Z(
        s,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : u.OrdinaryDeleteMetadata(n, s, a);
    }
    e("deleteMetadata", vt);
    function yt(n, s) {
      for (var a = n.length - 1; a >= 0; --a) {
        var u = n[a], y = u(s);
        if (!g(y) && !B(y)) {
          if (!Re(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function gt(n, s, a, u) {
      for (var y = n.length - 1; y >= 0; --y) {
        var S = n[y], P = S(s, a, u);
        if (!g(P) && !B(P)) {
          if (!M(P))
            throw new TypeError();
          u = P;
        }
      }
      return u;
    }
    function Ee(n, s, a) {
      var u = de(n, s, a);
      if (u)
        return !0;
      var y = ce(s);
      return B(y) ? !1 : Ee(n, y, a);
    }
    function de(n, s, a) {
      var u = Z(
        s,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : ke(u.OrdinaryHasOwnMetadata(n, s, a));
    }
    function Se(n, s, a) {
      var u = de(n, s, a);
      if (u)
        return Oe(n, s, a);
      var y = ce(s);
      if (!B(y))
        return Se(n, y, a);
    }
    function Oe(n, s, a) {
      var u = Z(
        s,
        a,
        /*Create*/
        !1
      );
      if (!g(u))
        return u.OrdinaryGetOwnMetadata(n, s, a);
    }
    function Me(n, s, a, u) {
      var y = Z(
        a,
        u,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(n, s, a, u);
    }
    function Pe(n, s) {
      var a = Ce(n, s), u = ce(n);
      if (u === null)
        return a;
      var y = Pe(u, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var S = new k(), P = [], _ = 0, c = a; _ < c.length; _++) {
        var h = c[_], f = S.has(h);
        f || (S.add(h), P.push(h));
      }
      for (var p = 0, w = y; p < w.length; p++) {
        var h = w[p], f = S.has(h);
        f || (S.add(h), P.push(h));
      }
      return P;
    }
    function Ce(n, s) {
      var a = Z(
        n,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, s) : [];
    }
    function xe(n) {
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
    function B(n) {
      return n === null;
    }
    function _t(n) {
      return typeof n == "symbol";
    }
    function M(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function wt(n, s) {
      switch (xe(n)) {
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
      var a = "string", u = Ne(n, d);
      if (u !== void 0) {
        var y = u.call(n, a);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return mt(n);
    }
    function mt(n, s) {
      var a, u, y;
      {
        var S = n.toString;
        if (ie(S)) {
          var u = S.call(n);
          if (!M(u))
            return u;
        }
        var a = n.valueOf;
        if (ie(a)) {
          var u = a.call(n);
          if (!M(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function ke(n) {
      return !!n;
    }
    function bt(n) {
      return "" + n;
    }
    function N(n) {
      var s = wt(n);
      return _t(s) ? s : bt(s);
    }
    function Te(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function ie(n) {
      return typeof n == "function";
    }
    function Re(n) {
      return typeof n == "function";
    }
    function $t(n) {
      switch (xe(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ue(n, s) {
      return n === s || n !== n && s !== s;
    }
    function Ne(n, s) {
      var a = n[s];
      if (a != null) {
        if (!ie(a))
          throw new TypeError();
        return a;
      }
    }
    function Ue(n) {
      var s = Ne(n, l);
      if (!ie(s))
        throw new TypeError();
      var a = s.call(n);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function je(n) {
      return n.value;
    }
    function Ie(n) {
      var s = n.next();
      return s.done ? !1 : s;
    }
    function He(n) {
      var s = n.return;
      s && s.call(n);
    }
    function ce(n) {
      var s = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === b || s !== b)
        return s;
      var a = n.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return s;
      var y = u.constructor;
      return typeof y != "function" || y === n ? s : y;
    }
    function At() {
      var n;
      !g(L) && typeof t.Reflect < "u" && !(L in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = Ot(t.Reflect));
      var s, a, u, y = new U(), S = {
        registerProvider: P,
        getProvider: c,
        setProvider: f
      };
      return S;
      function P(p) {
        if (!Object.isExtensible(S))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === p:
            break;
          case g(s):
            s = p;
            break;
          case s === p:
            break;
          case g(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            u === void 0 && (u = new k()), u.add(p);
            break;
        }
      }
      function _(p, w) {
        if (!g(s)) {
          if (s.isProviderFor(p, w))
            return s;
          if (!g(a)) {
            if (a.isProviderFor(p, w))
              return s;
            if (!g(u))
              for (var E = Ue(u); ; ) {
                var O = Ie(E);
                if (!O)
                  return;
                var T = je(O);
                if (T.isProviderFor(p, w))
                  return He(E), T;
              }
          }
        }
        if (!g(n) && n.isProviderFor(p, w))
          return n;
      }
      function c(p, w) {
        var E = y.get(p), O;
        return g(E) || (O = E.get(w)), g(O) && (O = _(p, w), g(O) || (g(E) && (E = new x(), y.set(p, E)), E.set(w, O))), O;
      }
      function h(p) {
        if (g(p))
          throw new TypeError();
        return s === p || a === p || !g(u) && u.has(p);
      }
      function f(p, w, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var O = c(p, w);
        if (O !== E) {
          if (!g(O))
            return !1;
          var T = y.get(p);
          g(T) && (T = new x(), y.set(p, T)), T.set(w, E);
        }
        return !0;
      }
    }
    function Et() {
      var n;
      return !g(L) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[L]), g(n) && (n = At()), !g(L) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function St(n) {
      var s = new U(), a = {
        isProviderFor: function(h, f) {
          var p = s.get(h);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: P,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: S,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: c
      };
      return ne.registerProvider(a), a;
      function u(h, f, p) {
        var w = s.get(h), E = !1;
        if (g(w)) {
          if (!p)
            return;
          w = new x(), s.set(h, w), E = !0;
        }
        var O = w.get(f);
        if (g(O)) {
          if (!p)
            return;
          if (O = new x(), w.set(f, O), !n.setProvider(h, f, a))
            throw w.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return O;
      }
      function y(h, f, p) {
        var w = u(
          f,
          p,
          /*Create*/
          !1
        );
        return g(w) ? !1 : ke(w.has(h));
      }
      function S(h, f, p) {
        var w = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g(w))
          return w.get(h);
      }
      function P(h, f, p, w) {
        var E = u(
          p,
          w,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function _(h, f) {
        var p = [], w = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(w))
          return p;
        for (var E = w.keys(), O = Ue(E), T = 0; ; ) {
          var De = Ie(O);
          if (!De)
            return p.length = T, p;
          var xt = je(De);
          try {
            p[T] = xt;
          } catch (kt) {
            try {
              He(O);
            } finally {
              throw kt;
            }
          }
          T++;
        }
      }
      function c(h, f, p) {
        var w = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (g(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var E = s.get(f);
          g(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Ot(n) {
      var s = n.defineMetadata, a = n.hasOwnMetadata, u = n.getOwnMetadata, y = n.getOwnMetadataKeys, S = n.deleteMetadata, P = new U(), _ = {
        isProviderFor: function(c, h) {
          var f = P.get(c);
          return !g(f) && f.has(h) ? !0 : y(c, h).length ? (g(f) && (f = new k(), P.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: S
      };
      return _;
    }
    function Z(n, s, a) {
      var u = ne.getProvider(n, s);
      if (!g(u))
        return u;
      if (a) {
        if (ne.setProvider(n, s, Ae))
          return Ae;
        throw new Error("Illegal state.");
      }
    }
    function Mt() {
      var n = {}, s = [], a = (
        /** @class */
        function() {
          function _(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[l] = function() {
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
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, _.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, _.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ue(c, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, S);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, P);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[l] = function() {
            return this.entries();
          }, _.prototype._find = function(c, h) {
            if (!ue(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ue(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return u;
      function y(_, c) {
        return _;
      }
      function S(_, c) {
        return c;
      }
      function P(_, c) {
        return [_, c];
      }
    }
    function Pt() {
      var n = (
        /** @class */
        function() {
          function s() {
            this._map = new x();
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
          }, s.prototype[l] = function() {
            return this.keys();
          }, s;
        }()
      );
      return n;
    }
    function Ct() {
      var n = 16, s = A.create(), a = u();
      return (
        /** @class */
        function() {
          function c() {
            this._key = u();
          }
          return c.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? A.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? A.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var p = y(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, c.prototype.delete = function(h) {
            var f = y(
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
          c = "@@WeakMap@@" + _();
        while (A.has(s, c));
        return s[c] = !0, c;
      }
      function y(c, h) {
        if (!i.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: A.create() });
        }
        return c[a];
      }
      function S(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function P(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : S(h, c), h;
        }
        return S(new Array(c), c);
      }
      function _() {
        var c = P(n);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < n; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function he(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Le || (Le = {}));
function Nt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ut(r) {
  return function(e) {
    if (Nt(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${r.elementSelector}-${r.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function jt(r) {
  return Ut(r);
}
function It(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ve(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(d) {
        try {
          super.update(d);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var v;
        const d = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (d && m) {
          const $ = new CSSStyleSheet(), A = (v = d.sheet) == null ? void 0 : v.cssRules;
          A && (Array.from(A).forEach((b) => $.insertRule(b.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
        } else if (d) {
          const $ = d.cloneNode(!0);
          this.shadowRoot.appendChild($);
        }
        l.forEach(($) => {
          const A = $.cloneNode(!0);
          this.shadowRoot.appendChild(A);
        });
      }
    }
    return t;
  };
}
function Ht(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Dt(r) {
  return function(e, t) {
    try {
      Ht(r);
      const i = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (r.fieldMappings = r.fieldMappings ?? t), i.push(r), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function Vt(r) {
  return Dt(r);
}
var Be;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown";
})(Be || (Be = {}));
var _e;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(_e || (_e = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, we = oe.ShadowRoot && (oe.ShadyCSS === void 0 || oe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, me = Symbol(), Ge = /* @__PURE__ */ new WeakMap();
let tt = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== me) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Ge.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Ge.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (r) => new tt(typeof r == "string" ? r : r + "", void 0, me), Lt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, o, d) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[d + 1], r[0]);
  return new tt(t, r, me);
}, Bt = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = oe.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, r.appendChild(i);
  }
}, We = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return zt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gt, defineProperty: Wt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: qt, getOwnPropertySymbols: Zt, getPrototypeOf: Jt } = Object, I = globalThis, Fe = I.trustedTypes, Yt = Fe ? Fe.emptyScript : "", fe = I.reactiveElementPolyfillSupport, Y = (r, e) => r, se = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Yt : null;
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
} }, be = (r, e) => !Gt(r, e), qe = { attribute: !0, type: String, converter: se, reflect: !1, hasChanged: be };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), I.litPropertyMetadata ?? (I.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class G extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && Wt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: o, set: d } = Ft(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const m = o == null ? void 0 : o.call(this);
      d.call(this, l), this.requestUpdate(e, m, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? qe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const e = Jt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const t = this.properties, i = [...qt(t), ...Zt(t)];
      for (const o of i) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, o] of t) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const o = this._$Eu(t, i);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const o of i) t.unshift(We(o));
    } else e !== void 0 && t.push(We(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Bt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$EC(e, t) {
    var d;
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const l = (((d = i.converter) == null ? void 0 : d.toAttribute) !== void 0 ? i.converter : se).toAttribute(t, i.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var d;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = i.getPropertyOptions(o), m = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((d = l.converter) == null ? void 0 : d.fromAttribute) !== void 0 ? l.converter : se;
      this._$Em = o, this[o] = m.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(e)), !(i.hasChanged ?? be)(this[e], t)) return;
      this.P(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, i) {
    this._$AL.has(e) || this._$AL.set(e, t), i.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
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
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [d, l] of this._$Ep) this[d] = l;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [d, l] of o) l.wrapped !== !0 || this._$AL.has(d) || this[d] === void 0 || this.P(d, this[d], l);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((o) => {
        var d;
        return (d = o.hostUpdate) == null ? void 0 : d.call(o);
      }), this.update(t)) : this._$EU();
    } catch (o) {
      throw e = !1, this._$EU(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var o;
      return (o = i.hostUpdated) == null ? void 0 : o.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EU() {
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
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
G.elementStyles = [], G.shadowRootOptions = { mode: "open" }, G[Y("elementProperties")] = /* @__PURE__ */ new Map(), G[Y("finalized")] = /* @__PURE__ */ new Map(), fe == null || fe({ ReactiveElement: G }), (I.reactiveElementVersions ?? (I.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, ae = X.trustedTypes, Ze = ae ? ae.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, rt = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, nt = "?" + j, Xt = `<${nt}>`, z = document, K = () => z.createComment(""), ee = (r) => r === null || typeof r != "object" && typeof r != "function", $e = Array.isArray, Qt = (r) => $e(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", pe = `[ 	
\f\r]`, J = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Ye = />/g, D = RegExp(`>|${pe}(?:([^\\s"'>=/]+)(${pe}*=${pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Xe = /'/g, Qe = /"/g, it = /^(?:script|style|textarea|title)$/i, Kt = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ve = Kt(1), W = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Ke = /* @__PURE__ */ new WeakMap(), V = z.createTreeWalker(z, 129);
function ot(r, e) {
  if (!$e(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const er = (r, e) => {
  const t = r.length - 1, i = [];
  let o, d = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = J;
  for (let m = 0; m < t; m++) {
    const v = r[m];
    let $, A, b = -1, x = 0;
    for (; x < v.length && (l.lastIndex = x, A = l.exec(v), A !== null); ) x = l.lastIndex, l === J ? A[1] === "!--" ? l = Je : A[1] !== void 0 ? l = Ye : A[2] !== void 0 ? (it.test(A[2]) && (o = RegExp("</" + A[2], "g")), l = D) : A[3] !== void 0 && (l = D) : l === D ? A[0] === ">" ? (l = o ?? J, b = -1) : A[1] === void 0 ? b = -2 : (b = l.lastIndex - A[2].length, $ = A[1], l = A[3] === void 0 ? D : A[3] === '"' ? Qe : Xe) : l === Qe || l === Xe ? l = D : l === Je || l === Ye ? l = J : (l = D, o = void 0);
    const k = l === D && r[m + 1].startsWith("/>") ? " " : "";
    d += l === J ? v + Xt : b >= 0 ? (i.push($), v.slice(0, b) + rt + v.slice(b) + j + k) : v + j + (b === -2 ? m : k);
  }
  return [ot(r, d + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class te {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let d = 0, l = 0;
    const m = e.length - 1, v = this.parts, [$, A] = er(e, t);
    if (this.el = te.createElement($, i), V.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = V.nextNode()) !== null && v.length < m; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith(rt)) {
          const x = A[l++], k = o.getAttribute(b).split(j), U = /([.?@])?(.*)/.exec(x);
          v.push({ type: 1, index: d, name: U[2], strings: k, ctor: U[1] === "." ? rr : U[1] === "?" ? nr : U[1] === "@" ? ir : le }), o.removeAttribute(b);
        } else b.startsWith(j) && (v.push({ type: 6, index: d }), o.removeAttribute(b));
        if (it.test(o.tagName)) {
          const b = o.textContent.split(j), x = b.length - 1;
          if (x > 0) {
            o.textContent = ae ? ae.emptyScript : "";
            for (let k = 0; k < x; k++) o.append(b[k], K()), V.nextNode(), v.push({ type: 2, index: ++d });
            o.append(b[x], K());
          }
        }
      } else if (o.nodeType === 8) if (o.data === nt) v.push({ type: 2, index: d });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(j, b + 1)) !== -1; ) v.push({ type: 7, index: d }), b += j.length - 1;
      }
      d++;
    }
  }
  static createElement(e, t) {
    const i = z.createElement("template");
    return i.innerHTML = e, i;
  }
}
function F(r, e, t = r, i) {
  var l, m;
  if (e === W) return e;
  let o = i !== void 0 ? (l = t.o) == null ? void 0 : l[i] : t.l;
  const d = ee(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== d && ((m = o == null ? void 0 : o._$AO) == null || m.call(o, !1), d === void 0 ? o = void 0 : (o = new d(r), o._$AT(r, t, i)), i !== void 0 ? (t.o ?? (t.o = []))[i] = o : t.l = o), o !== void 0 && (e = F(r, o._$AS(r, e.values), o, i)), e;
}
class tr {
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
    const { el: { content: t }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? z).importNode(t, !0);
    V.currentNode = o;
    let d = V.nextNode(), l = 0, m = 0, v = i[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let $;
        v.type === 2 ? $ = new re(d, d.nextSibling, this, e) : v.type === 1 ? $ = new v.ctor(d, v.name, v.strings, this, e) : v.type === 6 && ($ = new or(d, this, e)), this._$AV.push($), v = i[++m];
      }
      l !== (v == null ? void 0 : v.index) && (d = V.nextNode(), l++);
    }
    return V.currentNode = z, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class re {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, i, o) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = F(this, e, t), ee(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== W && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && ee(this._$AH) ? this._$AA.nextSibling.data = e : this.T(z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var d;
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = te.createElement(ot(i.h, i.h[0]), this.options)), i);
    if (((d = this._$AH) == null ? void 0 : d._$AD) === o) this._$AH.p(t);
    else {
      const l = new tr(o, this), m = l.u(this.options);
      l.p(t), this.T(m), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = Ke.get(e.strings);
    return t === void 0 && Ke.set(e.strings, t = new te(e)), t;
  }
  k(e) {
    $e(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const d of e) o === t.length ? t.push(i = new re(this.O(K()), this.O(K()), this, this.options)) : i = t[o], i._$AI(d), o++;
    o < t.length && (this._$AR(i && i._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class le {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, o, d) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = d, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = C;
  }
  _$AI(e, t = this, i, o) {
    const d = this.strings;
    let l = !1;
    if (d === void 0) e = F(this, e, t, 0), l = !ee(e) || e !== this._$AH && e !== W, l && (this._$AH = e);
    else {
      const m = e;
      let v, $;
      for (e = d[0], v = 0; v < d.length - 1; v++) $ = F(this, m[i + v], t, v), $ === W && ($ = this._$AH[v]), l || (l = !ee($) || $ !== this._$AH[v]), $ === C ? e = C : e !== C && (e += ($ ?? "") + d[v + 1]), this._$AH[v] = $;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends le {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class nr extends le {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class ir extends le {
  constructor(e, t, i, o, d) {
    super(e, t, i, o, d), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = F(this, e, t, 0) ?? C) === W) return;
    const i = this._$AH, o = e === C && i !== C || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, d = e !== C && (i === C || o);
    o && this.element.removeEventListener(this.name, this, i), d && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class or {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    F(this, e);
  }
}
const ye = X.litHtmlPolyfillSupport;
ye == null || ye(te, re), (X.litHtmlVersions ?? (X.litHtmlVersions = [])).push("3.2.0");
const sr = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const d = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = o = new re(e.insertBefore(K(), d), d, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Q extends G {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = sr(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.o) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.o) == null || e.setConnected(!1);
  }
  render() {
    return W;
  }
}
var et;
Q._$litElement$ = !0, Q.finalized = !0, (et = globalThis.litElementHydrateSupport) == null || et.call(globalThis, { LitElement: Q });
const ge = globalThis.litElementPolyfillSupport;
ge == null || ge({ LitElement: Q });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: se, reflect: !1, hasChanged: be }, lr = (r = ar, e, t) => {
  const { kind: i, metadata: o } = t;
  let d = globalThis.litPropertyMetadata.get(o);
  if (d === void 0 && globalThis.litPropertyMetadata.set(o, d = /* @__PURE__ */ new Map()), d.set(t.name, r), i === "accessor") {
    const { name: l } = t;
    return { set(m) {
      const v = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(l, v, r);
    }, init(m) {
      return m !== void 0 && this.P(l, void 0, r), m;
    } };
  }
  if (i === "setter") {
    const { name: l } = t;
    return function(m) {
      const v = this[l];
      e.call(this, m), this.requestUpdate(l, v, r);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function q(r) {
  return (e, t) => typeof t == "object" ? lr(r, e, t) : ((i, o, d) => {
    const l = o.hasOwnProperty(d);
    return o.constructor.createProperty(d, l ? { ...i, wrapped: !0 } : i), l ? Object.getOwnPropertyDescriptor(o, d) : void 0;
  })(r, e, t);
}
var dr = Object.defineProperty, ur = Object.getOwnPropertyDescriptor, H = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? ur(e, t) : e, d = r.length - 1, l; d >= 0; d--)
    (l = r[d]) && (o = (i ? l(e, t, o) : l(o)) || o);
  return i && o && dr(e, t, o), o;
};
let R = class extends Q {
  // Initialize selected value
  constructor() {
    super(), this.enabled = !1, this.open = !1, this.isValid = !0, this.errorMessage = "", this.selectedValue = "", this.enabled = !1, this.options = [], this.open = !1, this.isValid = !0, this.errorMessage = "", this.selectedValue = "";
  }
  set config(r) {
    this.options = r;
  }
  // Validate inputs
  validateInputs() {
    if (!Array.isArray(this.options)) {
      this.isValid = !1, this.errorMessage = "Invalid options: options should be an array";
      return;
    }
    for (const r of this.options)
      if (typeof r != "object" || !("value" in r) || !("label" in r) || typeof r.value != "string" || typeof r.label != "string" || r.value.trim() === "" || r.label.trim() === "") {
        this.isValid = !1, this.errorMessage = "Invalid option format: each option must have non-empty label and value properties";
        return;
      }
    this.isValid = !0, this.errorMessage = "";
  }
  // Toggle dropdown and adjust position if valid
  toggleDropdown() {
    this.isValid && (this.open = !this.open, this.open && (this.requestUpdate(), this.adjustPosition()));
  }
  // Adjust position of the dropdown
  adjustPosition() {
    setTimeout(() => {
      const r = this.shadowRoot.querySelector(".dropdown-menu"), e = this.getBoundingClientRect(), t = r.getBoundingClientRect(), i = window.innerHeight > e.bottom + t.height, o = window.innerWidth > e.left + t.width;
      r.style.top = i ? `${e.height + 10}px` : "auto", r.style.bottom = i ? "auto" : `${e.height + 15}px`, r.style.left = o ? "0px" : `-${t.width - e.width}px`;
    }, 0);
  }
  // Handle option click
  handleOptionClick(r) {
    const e = r.target.getAttribute("data-value"), t = JSON.parse(e);
    this.selectedValue = t.value, this.dispatchEvent(
      new CustomEvent("option-selected", {
        detail: { json_data: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  handleOptionSelected(r) {
  }
  // Render the template
  render() {
    return ve`
        
      <div>
        <slot></slot>
        ${this.open ? ve`
              <div class="dropdown-menu open">
                <div class="notch"></div>
                <ul>
                  ${this.options.map(
      (r) => ve`
                      <li 
                        data-value="${JSON.stringify(r)}" 
                        @click="${this.handleOptionClick}" 
                        class="${this.selectedValue === r.value ? "selected" : ""}" 
                      >
                        ${r.label}
                      </li>
                    `
    )}
                </ul>
              </div>
            ` : null}
      </div>
    `;
  }
  updated(r) {
    r.has("options") && this.validateInputs(), r.has("enabled") && this.enabled && this.addEventListener("click", this.toggleDropdown);
  }
  // Lifecycle method: Initialize the directive when connected
  connectedCallback() {
    super.connectedCallback();
    const r = this.getAttribute("zero-popup-dropdown-directive");
    if (r) {
      const e = JSON.parse(r);
      this.enabled = e.enabled, this.options = e.options, this.selectedValue = e.selectedValue || "";
    }
    this.validateInputs();
  }
};
R.properties = {
  enabled: { type: Boolean },
  options: { type: Array },
  open: { type: Boolean },
  isValid: { type: Boolean },
  errorMessage: { type: String },
  selectedValue: { type: String }
  // New property for the selected value
};
R.styles = Lt`
    :host {
      --dropdown-bg-color: #fff;
      --dropdown-border-color: #ccc;
      --dropdown-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      --dropdown-border-radius: 6px;
      --dropdown-padding: 10px;
      --dropdown-width: 200px;
      --dropdown-item-hover-bg: #f0f0f0;
      --selected-item-bg: #e0e0e0; /* Background color for selected item */
      --notch-border-color: var(--dropdown-bg-color);
      --notch-left-offset: 20px;
      --notch-left-offset-before: -10px;
      --dropdown-item-padding: 10px;
      --dropdown-z-index: 1000;
      --error-bg-color: #ffdddd;
      --error-border-color: #ff5f5f;

      display: inline-block;
      position: relative;
      cursor: pointer;
    }

    .dropdown-menu {
      position: absolute;
      background-color: var(--dropdown-bg-color);
      border: 1px solid var(--dropdown-border-color);
      box-shadow: var(--dropdown-shadow);
      border-radius: var(--dropdown-border-radius);
      padding: var(--dropdown-padding);
      width: var(--dropdown-width);
      z-index: var(--dropdown-z-index);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
      transform: translateY(10px);
    }

    .dropdown-menu.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .dropdown-menu.error {
      background-color: var(--error-bg-color);
      border-color: var(--error-border-color);
    }

    .notch {
        position: absolute;
        top: -10px; /* Adjust this value as needed */
        left: var(--notch-left-offset);
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid var(--dropdown-border-color);
        background-color: transparent;
        &::after{
            position: absolute;
            top: 2px; /* Adjust this value as needed */
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid var(--dropdown-bg-color); /* Keep this for the border */
            background-color: transparent; /* Ensure the background is transparent */
            content: '';
            left: var(--notch-left-offset-before);
        }
    }

    .dropdown-menu ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .dropdown-menu li {
      padding: var(--dropdown-item-padding);
      cursor: pointer;
      border-radius: 4px;
    }

    .dropdown-menu li:hover {
      background-color: var(--dropdown-item-hover-bg);
    }

    .dropdown-menu li.selected {
      background-color: var(--selected-item-bg); /* Highlight selected item */
    }    .error-message {
      color: var(--error-border-color);
      font-size: var(--font-size-sm, 0.9em);
      margin-top: var(--spacing-xs, 5px);
    }
  `;
H([
  q({ type: Boolean })
], R.prototype, "enabled", 2);
H([
  q({ type: Array })
], R.prototype, "config", 1);
H([
  q({ type: Boolean, reflect: !0 })
], R.prototype, "open", 2);
H([
  q({ type: Boolean })
], R.prototype, "isValid", 2);
H([
  q({ type: String })
], R.prototype, "errorMessage", 2);
H([
  q({ type: String })
], R.prototype, "selectedValue", 2);
H([
  Vt({
    attributeType: _e.EVENT,
    displayLabel: "On Option Selected",
    eventTrigger: "option-selected"
  })
], R.prototype, "handleOptionSelected", 1);
R = H([
  jt({
    name: "popup-dropdown-directive",
    version: "1.0.0",
    title: "Popup dropdown directive",
    elementSelector: "zero-popup-dropdown-directive",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  It()
], R);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[zero-popup-dropdown-directive]").forEach((r) => {
    const e = JSON.parse(r.getAttribute("zero-popup-dropdown-directive")), t = document.createElement("zero-popup-dropdown-directive-1.0.0");
    for (t.enabled = e.enabled, t.options = e.options, t.selectedValue = e.selectedValue || "", r.appendChild(t); r.firstChild && r.firstChild !== t; )
      t.appendChild(r.firstChild);
  });
});
export {
  R as PopupDropdownDirective
};
