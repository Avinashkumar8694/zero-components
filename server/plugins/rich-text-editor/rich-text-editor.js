var Tt = Object.defineProperty;
var kt = (r, e, t) => e in r ? Tt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Le = (r, e, t) => kt(r, typeof e != "symbol" ? e + "" : e, t);
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ve;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Be == "object" ? Be : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(v, A) {
      return function(m, b) {
        Object.defineProperty(v, m, { configurable: !0, writable: !0, value: b }), A && A(m, b);
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
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", u = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, A = !_ && !v, m = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return fe(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return fe({ __proto__: null });
      } : function() {
        return fe({});
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
    }, b = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ct(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : xt(), I = typeof WeakMap == "function" ? WeakMap : Pt(), L = o ? Symbol.for("@reflect-metadata:registry") : void 0, ne = Et(), Ee = Mt(ne);
    function st(i, s, a, c) {
      if (g(a)) {
        if (!ke(i))
          throw new TypeError();
        if (!Ie(s))
          throw new TypeError();
        return yt(i, s);
      } else {
        if (!ke(i))
          throw new TypeError();
        if (!C(s))
          throw new TypeError();
        if (!C(c) && !g(c) && !B(c))
          throw new TypeError();
        return B(c) && (c = void 0), a = k(a), gt(i, s, a, c);
      }
    }
    e("decorate", st);
    function at(i, s) {
      function a(c, y) {
        if (!C(c))
          throw new TypeError();
        if (!g(y) && !$t(y))
          throw new TypeError();
        xe(i, s, c, y);
      }
      return a;
    }
    e("metadata", at);
    function lt(i, s, a, c) {
      if (!C(a))
        throw new TypeError();
      return g(c) || (c = k(c)), xe(i, s, a, c);
    }
    e("defineMetadata", lt);
    function ut(i, s, a) {
      if (!C(s))
        throw new TypeError();
      return g(a) || (a = k(a)), Me(i, s, a);
    }
    e("hasMetadata", ut);
    function ct(i, s, a) {
      if (!C(s))
        throw new TypeError();
      return g(a) || (a = k(a)), ce(i, s, a);
    }
    e("hasOwnMetadata", ct);
    function dt(i, s, a) {
      if (!C(s))
        throw new TypeError();
      return g(a) || (a = k(a)), Se(i, s, a);
    }
    e("getMetadata", dt);
    function ht(i, s, a) {
      if (!C(s))
        throw new TypeError();
      return g(a) || (a = k(a)), Ce(i, s, a);
    }
    e("getOwnMetadata", ht);
    function ft(i, s) {
      if (!C(i))
        throw new TypeError();
      return g(s) || (s = k(s)), Pe(i, s);
    }
    e("getMetadataKeys", ft);
    function pt(i, s) {
      if (!C(i))
        throw new TypeError();
      return g(s) || (s = k(s)), Oe(i, s);
    }
    e("getOwnMetadataKeys", pt);
    function vt(i, s, a) {
      if (!C(s))
        throw new TypeError();
      if (g(a) || (a = k(a)), !C(s))
        throw new TypeError();
      g(a) || (a = k(a));
      var c = W(
        s,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, a);
    }
    e("deleteMetadata", vt);
    function yt(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], y = c(s);
        if (!g(y) && !B(y)) {
          if (!Ie(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function gt(i, s, a, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var P = i[y], x = P(s, a, c);
        if (!g(x) && !B(x)) {
          if (!C(x))
            throw new TypeError();
          c = x;
        }
      }
      return c;
    }
    function Me(i, s, a) {
      var c = ce(i, s, a);
      if (c)
        return !0;
      var y = he(s);
      return B(y) ? !1 : Me(i, y, a);
    }
    function ce(i, s, a) {
      var c = W(
        s,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Te(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Se(i, s, a) {
      var c = ce(i, s, a);
      if (c)
        return Ce(i, s, a);
      var y = he(s);
      if (!B(y))
        return Se(i, y, a);
    }
    function Ce(i, s, a) {
      var c = W(
        s,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function xe(i, s, a, c) {
      var y = W(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function Pe(i, s) {
      var a = Oe(i, s), c = he(i);
      if (c === null)
        return a;
      var y = Pe(c, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new R(), x = [], w = 0, d = a; w < d.length; w++) {
        var h = d[w], f = P.has(h);
        f || (P.add(h), x.push(h));
      }
      for (var p = 0, $ = y; p < $.length; p++) {
        var h = $[p], f = P.has(h);
        f || (P.add(h), x.push(h));
      }
      return x;
    }
    function Oe(i, s) {
      var a = W(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Re(i) {
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
    function g(i) {
      return i === void 0;
    }
    function B(i) {
      return i === null;
    }
    function mt(i) {
      return typeof i == "symbol";
    }
    function C(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function bt(i, s) {
      switch (Re(i)) {
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
      var a = "string", c = Ne(i, u);
      if (c !== void 0) {
        var y = c.call(i, a);
        if (C(y))
          throw new TypeError();
        return y;
      }
      return _t(i);
    }
    function _t(i, s) {
      var a, c;
      {
        var y = i.toString;
        if (ie(y)) {
          var c = y.call(i);
          if (!C(c))
            return c;
        }
        var a = i.valueOf;
        if (ie(a)) {
          var c = a.call(i);
          if (!C(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Te(i) {
      return !!i;
    }
    function wt(i) {
      return "" + i;
    }
    function k(i) {
      var s = bt(i);
      return mt(s) ? s : wt(s);
    }
    function ke(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ie(i) {
      return typeof i == "function";
    }
    function Ie(i) {
      return typeof i == "function";
    }
    function $t(i) {
      switch (Re(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function de(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Ne(i, s) {
      var a = i[s];
      if (a != null) {
        if (!ie(a))
          throw new TypeError();
        return a;
      }
    }
    function ze(i) {
      var s = Ne(i, l);
      if (!ie(s))
        throw new TypeError();
      var a = s.call(i);
      if (!C(a))
        throw new TypeError();
      return a;
    }
    function Ue(i) {
      return i.value;
    }
    function je(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function He(i) {
      var s = i.return;
      s && s.call(i);
    }
    function he(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || s !== b)
        return s;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function At() {
      var i;
      !g(L) && typeof t.Reflect < "u" && !(L in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = St(t.Reflect));
      var s, a, c, y = new I(), P = {
        registerProvider: x,
        getProvider: d,
        setProvider: f
      };
      return P;
      function x(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
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
            c === void 0 && (c = new R()), c.add(p);
            break;
        }
      }
      function w(p, $) {
        if (!g(s)) {
          if (s.isProviderFor(p, $))
            return s;
          if (!g(a)) {
            if (a.isProviderFor(p, $))
              return s;
            if (!g(c))
              for (var E = ze(c); ; ) {
                var M = je(E);
                if (!M)
                  return;
                var T = Ue(M);
                if (T.isProviderFor(p, $))
                  return He(E), T;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, $))
          return i;
      }
      function d(p, $) {
        var E = y.get(p), M;
        return g(E) || (M = E.get($)), g(M) && (M = w(p, $), g(M) || (g(E) && (E = new S(), y.set(p, E)), E.set($, M))), M;
      }
      function h(p) {
        if (g(p))
          throw new TypeError();
        return s === p || a === p || !g(c) && c.has(p);
      }
      function f(p, $, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var M = d(p, $);
        if (M !== E) {
          if (!g(M))
            return !1;
          var T = y.get(p);
          g(T) && (T = new S(), y.set(p, T)), T.set($, E);
        }
        return !0;
      }
    }
    function Et() {
      var i;
      return !g(L) && C(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[L]), g(i) && (i = At()), !g(L) && C(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Mt(i) {
      var s = new I(), a = {
        isProviderFor: function(h, f) {
          var p = s.get(h);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: d
      };
      return ne.registerProvider(a), a;
      function c(h, f, p) {
        var $ = s.get(h), E = !1;
        if (g($)) {
          if (!p)
            return;
          $ = new S(), s.set(h, $), E = !0;
        }
        var M = $.get(f);
        if (g(M)) {
          if (!p)
            return;
          if (M = new S(), $.set(f, M), !i.setProvider(h, f, a))
            throw $.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return M;
      }
      function y(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        return g($) ? !1 : Te($.has(h));
      }
      function P(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g($))
          return $.get(h);
      }
      function x(h, f, p, $) {
        var E = c(
          p,
          $,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function w(h, f) {
        var p = [], $ = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (g($))
          return p;
        for (var E = $.keys(), M = ze(E), T = 0; ; ) {
          var De = je(M);
          if (!De)
            return p.length = T, p;
          var Ot = Ue(De);
          try {
            p[T] = Ot;
          } catch (Rt) {
            try {
              He(M);
            } finally {
              throw Rt;
            }
          }
          T++;
        }
      }
      function d(h, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (g($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var E = s.get(f);
          g(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function St(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, P = i.deleteMetadata, x = new I(), w = {
        isProviderFor: function(d, h) {
          var f = x.get(d);
          return !g(f) && f.has(h) ? !0 : y(d, h).length ? (g(f) && (f = new R(), x.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return w;
    }
    function W(i, s, a) {
      var c = ne.getProvider(i, s);
      if (!g(c))
        return c;
      if (a) {
        if (ne.setProvider(i, s, Ee))
          return Ee;
        throw new Error("Illegal state.");
      }
    }
    function Ct() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function w(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[l] = function() {
            return this;
          }, w.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, w.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, w;
        }()
      ), c = (
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
          }), w.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, w.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, w.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, w.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, de(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, w.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, w.prototype.entries = function() {
            return new a(this._keys, this._values, x);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[l] = function() {
            return this.entries();
          }, w.prototype._find = function(d, h) {
            if (!de(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (de(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return c;
      function y(w, d) {
        return w;
      }
      function P(w, d) {
        return d;
      }
      function x(w, d) {
        return [w, d];
      }
    }
    function xt() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new S();
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
      return i;
    }
    function Pt() {
      var i = 16, s = m.create(), a = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? m.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? m.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var p = y(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, d.prototype.delete = function(h) {
            var f = y(
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
          d = "@@WeakMap@@" + w();
        while (m.has(s, d));
        return s[d] = !0, d;
      }
      function y(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: m.create() });
        }
        return d[a];
      }
      function P(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function x(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, d), h;
        }
        return P(new Array(d), d);
      }
      function w() {
        var d = x(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function fe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function It(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Nt(r) {
  return function(e) {
    if (It(r)) {
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
function zt(r) {
  return Nt(r);
}
function Ut(r) {
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
        var v;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && _) {
          const A = new CSSStyleSheet(), m = (v = u.sheet) == null ? void 0 : v.cssRules;
          m && (Array.from(m).forEach((b) => A.insertRule(b.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, A]);
        } else if (u) {
          const A = u.cloneNode(!0);
          this.shadowRoot.appendChild(A);
        }
        l.forEach((A) => {
          const m = A.cloneNode(!0);
          this.shadowRoot.appendChild(m);
        });
      }
    }
    return t;
  };
}
function jt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ht(r) {
  return function(e, t) {
    try {
      jt(r);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (r.fieldMappings = r.fieldMappings ?? t), n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function me(r) {
  return Ht(r);
}
var se;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown";
})(se || (se = {}));
var J;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(J || (J = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, be = oe.ShadowRoot && (oe.ShadyCSS === void 0 || oe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, _e = Symbol(), Ge = /* @__PURE__ */ new WeakMap();
let tt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== _e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (be && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ge.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ge.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Dt = (r) => new tt(typeof r == "string" ? r : r + "", void 0, _e), Lt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[u + 1], r[0]);
  return new tt(t, r, _e);
}, Bt = (r, e) => {
  if (be) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = oe.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = be ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Dt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Gt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: Wt, getOwnPropertySymbols: qt, getPrototypeOf: Zt } = Object, z = globalThis, We = z.trustedTypes, Xt = We ? We.emptyScript : "", pe = z.reactiveElementPolyfillSupport, Z = (r, e) => r, ae = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Xt : null;
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
} }, we = (r, e) => !Vt(r, e), qe = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: we };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class V extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Gt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: u } = Ft(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(l) {
      const _ = o == null ? void 0 : o.call(this);
      u.call(this, l), this.requestUpdate(e, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? qe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Z("elementProperties"))) return;
    const e = Zt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Z("properties"))) {
      const t = this.properties, n = [...Wt(t), ...qt(t)];
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
      for (const o of n) t.unshift(Fe(o));
    } else e !== void 0 && t.push(Fe(e));
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
    return Bt(e, this.constructor.elementStyles), e;
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
  _$EC(e, t) {
    var u;
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : ae).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(o) : this.setAttribute(o, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = n.getPropertyOptions(o), _ = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : ae;
      this._$Em = o, this[o] = _.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? we)(this[e], t)) return;
      this.P(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, n) {
    this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
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
    var n;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [u, l] of this._$Ep) this[u] = l;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [u, l] of o) l.wrapped !== !0 || this._$AL.has(u) || this[u] === void 0 || this.P(u, this[u], l);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((o) => {
        var u;
        return (u = o.hostUpdate) == null ? void 0 : u.call(o);
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
    (t = this._$EO) == null || t.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[Z("elementProperties")] = /* @__PURE__ */ new Map(), V[Z("finalized")] = /* @__PURE__ */ new Map(), pe == null || pe({ ReactiveElement: V }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, le = X.trustedTypes, Ze = le ? le.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, rt = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, nt = "?" + N, Yt = `<${nt}>`, H = document, Q = () => H.createComment(""), K = (r) => r === null || typeof r != "object" && typeof r != "function", $e = Array.isArray, Jt = (r) => $e(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ve = `[ 	
\f\r]`, q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Xe = /-->/g, Ye = />/g, U = RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Je = /'/g, Qe = /"/g, it = /^(?:script|style|textarea|title)$/i, Qt = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), Kt = Qt(1), G = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), Ke = /* @__PURE__ */ new WeakMap(), j = H.createTreeWalker(H, 129);
function ot(r, e) {
  if (!$e(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const er = (r, e) => {
  const t = r.length - 1, n = [];
  let o, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = q;
  for (let _ = 0; _ < t; _++) {
    const v = r[_];
    let A, m, b = -1, S = 0;
    for (; S < v.length && (l.lastIndex = S, m = l.exec(v), m !== null); ) S = l.lastIndex, l === q ? m[1] === "!--" ? l = Xe : m[1] !== void 0 ? l = Ye : m[2] !== void 0 ? (it.test(m[2]) && (o = RegExp("</" + m[2], "g")), l = U) : m[3] !== void 0 && (l = U) : l === U ? m[0] === ">" ? (l = o ?? q, b = -1) : m[1] === void 0 ? b = -2 : (b = l.lastIndex - m[2].length, A = m[1], l = m[3] === void 0 ? U : m[3] === '"' ? Qe : Je) : l === Qe || l === Je ? l = U : l === Xe || l === Ye ? l = q : (l = U, o = void 0);
    const R = l === U && r[_ + 1].startsWith("/>") ? " " : "";
    u += l === q ? v + Yt : b >= 0 ? (n.push(A), v.slice(0, b) + rt + v.slice(b) + N + R) : v + N + (b === -2 ? _ : R);
  }
  return [ot(r, u + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ee {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let u = 0, l = 0;
    const _ = e.length - 1, v = this.parts, [A, m] = er(e, t);
    if (this.el = ee.createElement(A, n), j.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = j.nextNode()) !== null && v.length < _; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith(rt)) {
          const S = m[l++], R = o.getAttribute(b).split(N), I = /([.?@])?(.*)/.exec(S);
          v.push({ type: 1, index: u, name: I[2], strings: R, ctor: I[1] === "." ? rr : I[1] === "?" ? nr : I[1] === "@" ? ir : ue }), o.removeAttribute(b);
        } else b.startsWith(N) && (v.push({ type: 6, index: u }), o.removeAttribute(b));
        if (it.test(o.tagName)) {
          const b = o.textContent.split(N), S = b.length - 1;
          if (S > 0) {
            o.textContent = le ? le.emptyScript : "";
            for (let R = 0; R < S; R++) o.append(b[R], Q()), j.nextNode(), v.push({ type: 2, index: ++u });
            o.append(b[S], Q());
          }
        }
      } else if (o.nodeType === 8) if (o.data === nt) v.push({ type: 2, index: u });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(N, b + 1)) !== -1; ) v.push({ type: 7, index: u }), b += N.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const n = H.createElement("template");
    return n.innerHTML = e, n;
  }
}
function F(r, e, t = r, n) {
  var l, _;
  if (e === G) return e;
  let o = n !== void 0 ? (l = t.o) == null ? void 0 : l[n] : t.l;
  const u = K(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== u && ((_ = o == null ? void 0 : o._$AO) == null || _.call(o, !1), u === void 0 ? o = void 0 : (o = new u(r), o._$AT(r, t, n)), n !== void 0 ? (t.o ?? (t.o = []))[n] = o : t.l = o), o !== void 0 && (e = F(r, o._$AS(r, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? H).importNode(t, !0);
    j.currentNode = o;
    let u = j.nextNode(), l = 0, _ = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let A;
        v.type === 2 ? A = new te(u, u.nextSibling, this, e) : v.type === 1 ? A = new v.ctor(u, v.name, v.strings, this, e) : v.type === 6 && (A = new or(u, this, e)), this._$AV.push(A), v = n[++_];
      }
      l !== (v == null ? void 0 : v.index) && (u = j.nextNode(), l++);
    }
    return j.currentNode = H, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class te {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this.v = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = F(this, e, t), K(e) ? e === O || e == null || e === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : e !== this._$AH && e !== G && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Jt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== O && K(this._$AH) ? this._$AA.nextSibling.data = e : this.T(H.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ee.createElement(ot(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === o) this._$AH.p(t);
    else {
      const l = new tr(o, this), _ = l.u(this.options);
      l.p(t), this.T(_), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = Ke.get(e.strings);
    return t === void 0 && Ke.set(e.strings, t = new ee(e)), t;
  }
  k(e) {
    $e(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const u of e) o === t.length ? t.push(n = new te(this.O(Q()), this.O(Q()), this, this.options)) : n = t[o], n._$AI(u), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ue {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, o, u) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = O;
  }
  _$AI(e, t = this, n, o) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = F(this, e, t, 0), l = !K(e) || e !== this._$AH && e !== G, l && (this._$AH = e);
    else {
      const _ = e;
      let v, A;
      for (e = u[0], v = 0; v < u.length - 1; v++) A = F(this, _[n + v], t, v), A === G && (A = this._$AH[v]), l || (l = !K(A) || A !== this._$AH[v]), A === O ? e = O : e !== O && (e += (A ?? "") + u[v + 1]), this._$AH[v] = A;
    }
    l && !o && this.j(e);
  }
  j(e) {
    e === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends ue {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === O ? void 0 : e;
  }
}
class nr extends ue {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== O);
  }
}
class ir extends ue {
  constructor(e, t, n, o, u) {
    super(e, t, n, o, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = F(this, e, t, 0) ?? O) === G) return;
    const n = this._$AH, o = e === O && n !== O || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, u = e !== O && (n === O || o);
    o && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class or {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    F(this, e);
  }
}
const ye = X.litHtmlPolyfillSupport;
ye == null || ye(ee, te), (X.litHtmlVersions ?? (X.litHtmlVersions = [])).push("3.2.0");
const sr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new te(e.insertBefore(Q(), u), u, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Y extends V {
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
    return G;
  }
}
var et;
Y._$litElement$ = !0, Y.finalized = !0, (et = globalThis.litElementHydrateSupport) == null || et.call(globalThis, { LitElement: Y });
const ge = globalThis.litElementPolyfillSupport;
ge == null || ge({ LitElement: Y });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: we }, lr = (r = ar, e, t) => {
  const { kind: n, metadata: o } = t;
  let u = globalThis.litPropertyMetadata.get(o);
  if (u === void 0 && globalThis.litPropertyMetadata.set(o, u = /* @__PURE__ */ new Map()), u.set(t.name, r), n === "accessor") {
    const { name: l } = t;
    return { set(_) {
      const v = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(l, v, r);
    }, init(_) {
      return _ !== void 0 && this.P(l, void 0, r), _;
    } };
  }
  if (n === "setter") {
    const { name: l } = t;
    return function(_) {
      const v = this[l];
      e.call(this, _), this.requestUpdate(l, v, r);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Ae(r) {
  return (e, t) => typeof t == "object" ? lr(r, e, t) : ((n, o, u) => {
    const l = o.hasOwnProperty(u);
    return o.constructor.createProperty(u, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(o, u) : void 0;
  })(r, e, t);
}
var ur = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, re = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? cr(e, t) : e, u = r.length - 1, l; u >= 0; u--)
    (l = r[u]) && (o = (n ? l(e, t, o) : l(o)) || o);
  return n && o && ur(e, t, o), o;
};
let D = class extends Y {
  constructor() {
    super(...arguments), this.content = "", this.toolbarVisible = !1, this.editorMode = !0, this.isWrapped = !1, this.selectionRange = null;
  }
  set htmldata(r) {
    this.content = r, this.updateEditorContent();
  }
  firstUpdated() {
    this.updateEditorContent();
  }
  updated(r) {
    super.updated(r), r.has("content") && this.editorMode && this.restoreCursor(), this.updateContent();
  }
  storeCursor() {
    const r = window.getSelection();
    r && r.rangeCount > 0 && (this.selectionRange = r.getRangeAt(0).cloneRange());
  }
  restoreCursor() {
    var r;
    if (this.selectionRange) {
      const e = window.getSelection();
      e && ((r = this.selectionRange) != null && r.collapsed || e.removeAllRanges(), e.addRange(this.selectionRange), this.selectionRange.collapse(!1));
    }
  }
  toggleToolbar(r) {
    r.stopPropagation(), this.toolbarVisible = !this.toolbarVisible;
  }
  execCommand(r, e) {
    this.storeCursor(), document.execCommand(r, !0, e), this.updateContent();
  }
  updateContent() {
    var e;
    const r = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".editor");
    r && (this.content = r.innerHTML, this.dispatchEvent(new CustomEvent("content-changed", {
      detail: { content: this.content },
      bubbles: !0,
      composed: !0
    })), console.log(this.content));
  }
  updateEditorContent() {
    var e;
    const r = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".editor");
    r && (r.innerHTML = this.content || "", this.editorMode || r.querySelectorAll("img").forEach((t) => {
      this.unwrapImage(t);
    }));
  }
  onPaste() {
    setTimeout(() => {
      var e;
      const r = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".editor");
      this.editorMode && r.querySelectorAll("img").forEach((t) => {
        t.classList.contains("resize-icon") || (t.addEventListener("mouseenter", (n) => {
          this.editorMode && (n.stopPropagation(), this.wrapImage(t));
        }), t.addEventListener("mouseleave", (n) => {
          var u;
          if (!this.editorMode)
            return;
          n.stopPropagation();
          const o = n.relatedTarget;
          (!o || !((u = o == null ? void 0 : o.classList) != null && u.contains("resize-icon"))) && this.unwrapImage(t);
        }));
      });
    }, 400);
  }
  wrapImage(r) {
    var e;
    if (!r.hasAttribute("data-wrapped")) {
      const t = document.createElement("div");
      t.className = "image-container", (e = r.parentNode) == null || e.insertBefore(t, r), t.appendChild(r);
      const n = document.createElement("img");
      n.className = "resize-icon", n.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTEwIDIwTDIwIDIwTDIwIDEwIiBzdHJva2U9IiMyMjIyMjIiLz4NCjxwYXRoIGQ9Ik0xMiAxN0wxNyAxN0wxNyAxMiIgc3Ryb2tlPSIjMjIyMjIyIi8+DQo8L3N2Zz4=", n.alt = "Resize Icon", t.appendChild(n), r.setAttribute("data-wrapped", "true"), this.addResizeFunctionality(t);
    }
  }
  unwrapImage(r) {
    var e;
    if (r.hasAttribute("data-wrapped")) {
      const t = r.parentNode;
      if (t.classList.contains("image-container")) {
        const n = t.querySelector(".resize-icon");
        n && n.remove(), (e = t.parentNode) == null || e.insertBefore(r, t), t.remove(), r.removeAttribute("data-wrapped");
      }
    }
  }
  addResizeFunctionality(r) {
    const e = r.querySelector("img"), t = r.querySelector(".resize-icon");
    let n, o, u, l;
    const _ = (m) => {
      const b = u + (m.clientX - n), S = l + (m.clientY - o);
      e.style.width = `${b}px`, e.style.height = `${S}px`;
    }, v = () => {
      document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", v);
    }, A = (m) => {
      n = m.clientX, o = m.clientY, u = e.offsetWidth, l = e.offsetHeight, document.addEventListener("mousemove", _), document.addEventListener("mouseup", v);
    };
    t.addEventListener("mousedown", A), t.addEventListener("mouseleave", (m) => {
      var S;
      m.stopPropagation();
      const b = m.relatedTarget;
      b && ((S = b == null ? void 0 : b.classList) != null && S.contains("editor")) && this.unwrapImage(e);
    });
  }
  handleInput(r) {
    r.stopPropagation(), this.updateContent();
  }
  handleColorChange(r) {
    r.stopPropagation();
    const e = r.target;
    this.execCommand("foreColor", e.value);
  }
  handleBgColorChange(r) {
    r.stopPropagation();
    const e = r.target;
    this.execCommand("backColor", e.value);
  }
  handleFontSizeChange(r) {
    r.stopPropagation();
    const e = r.target;
    this.execCommand("fontSize", e.value);
  }
  handleAlignChange(r) {
    r.stopPropagation();
    const e = r.target;
    this.execCommand("justifyLeft", e.value === "left" ? "" : null), this.execCommand("justifyCenter", e.value === "center" ? "" : null), this.execCommand("justifyRight", e.value === "right" ? "" : null), this.execCommand("justifyFull", e.value === "justify" ? "" : null);
  }
  toggleEditorMode() {
    var e;
    this.editorMode = !this.editorMode;
    const r = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".editor");
    this.editorMode || r.querySelectorAll("img").forEach((t) => {
      this.unwrapImage(t);
    });
  }
  handleFontFamilyChange(r) {
    r.stopPropagation();
    const e = r.target;
    this.execCommand("fontName", e.value);
  }
  handleContentChanged(r) {
    this.updateContent();
  }
  render() {
    return Kt`
      <div class="toolbar ${this.toolbarVisible ? "visible" : ""}">
        <button @click="${() => this.execCommand("bold")}" title="Bold">B</button>
        <button @click="${() => this.execCommand("italic")}" title="Italic">I</button>
        <button @click="${() => this.execCommand("underline")}" title="Underline">U</button>
        <button @click="${() => this.execCommand("strikethrough")}" title="Strikethrough">S</button>
        <input type="color" @input="${this.handleColorChange}" title="Text Color">
        <input type="color" @input="${this.handleBgColorChange}" title="Background Color">
        <select @change="${this.handleFontFamilyChange}" title="Font Family">
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
        <select @change="${this.handleFontSizeChange}">
          <option value="1">Small</option>
          <option value="3">Normal</option>
          <option value="5">Large</option>
          <option value="7">Huge</option>
        </select>
        <select @change="${this.handleAlignChange}">
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
          <option value="justify">Justify</option>
        </select>
        <!-- <button @click="${this.toggleEditorMode}" title="Toggle Mode">
          ${this.editorMode ? "Preview" : "Edit"}
        </button> -->
      </div>
      <button class="toolbar-toggle" @click="${this.toggleToolbar}" ?hidden="${!this.editorMode}" title="Toggle Toolbar">🛠️</button>
      <div class="editor" contenteditable="${this.editorMode}" @input="${this.handleInput}" @paste="${this.onPaste}"></div>
      <!-- <div class="preview" ?hidden="${this.editorMode}"></div> -->
    `;
  }
};
D.styles = Lt`
    :host {
      display: block;
      width: 100%;
      margin: auto;
      /* border: 1px solid var(--border-color, #ddd); */
      border-radius: var(--border-radius-lg, 8px);
      overflow: visible;
      position: relative;
    }

    :host([editorMode]) .editor {
      position: relative;
    }
    :host([editorMode]) .editor:hover {
      border: 1px solid var(--border-color, #ddd); /* Change this to your desired border color */
      box-sizing: border-box;
    }
    .toolbar {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: var(--spacing-sm, 8px);
      color: var(--text-secondary, #5b5f61);
      background-color: var(--background-secondary, #f5f5f5);
      border-bottom: 1px solid var(--border-color, #ddd);
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      z-index: 10;
      box-shadow: var(--shadow-md, 0 2px 5px rgba(0, 0, 0, 0.1));
      border-radius: var(--border-radius-lg, 8px);
      transition: var(--transition-normal, opacity 0.3s ease, transform 0.3s ease);
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
    }
    .toolbar.visible {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }    .toolbar button, .toolbar select, .toolbar input[type="color"] {
      background: none;
      border: none;
      cursor: pointer;
      font-size: var(--font-size-md, 16px);
      padding: var(--spacing-xs, 6px);
      transition: var(--transition-fast, background-color 0.3s ease);
      position: relative;
    }
    .toolbar button:hover, .toolbar select:hover, .toolbar input[type="color"]:hover {
      background-color: var(--background-hover, #e0e0e0);
      border-radius: var(--border-radius-sm, 4px);
    }
    .toolbar button::after {
      content: attr(title);
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--tooltip-background, #333);
      color: var(--tooltip-text, #fff);
      padding: var(--spacing-xs, 4px);
      border-radius: var(--border-radius-sm, 4px);
      white-space: nowrap;
      font-size: var(--font-size-xs, 12px);
      opacity: 0;
      transition: var(--transition-fast, opacity 0.3s ease);
    }
    .toolbar button:hover::after {
      opacity: 1;
    }    .editor, .preview {
      height: 100%;
      padding: var(--spacing-sm, 10px);
      outline: none;
      position: relative;
      z-index: 1;
    }
    .toolbar-toggle {
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      top: var(--spacing-sm, 10px);
      right: var(--spacing-sm, 10px);
      font-size: var(--font-size-lg, 18px);
      transition: var(--transition-fast, background-color 0.3s ease);
      z-index: 20;
    }
    .toolbar-toggle:hover {
      background-color: var(--background-hover, #e0e0e0);
      border-radius: 50%;
    }
    .toolbar input[type="color"] {
      width: var(--icon-size-sm, 24px);
      height: var(--icon-size-sm, 24px);
      padding: 0;
      border-radius: 50%;
    }
    .toolbar .align-left::before { content: '←'; }
    .toolbar .align-center::before { content: '↔'; }
    .toolbar .align-right::before { content: '→'; }
    .toolbar .align-justify::before { content: '≡'; }
    .toolbar .bold::before { content: 'B'; font-weight: bold; }
    .toolbar .italic::before { content: 'I'; font-style: italic; }
    .toolbar .underline::before { content: 'U'; text-decoration: underline; }
    .toolbar .strikethrough::before { content: 'S'; text-decoration: line-through; }    .toolbar select {
      font-size: var(--font-size-base, 14px);
    }
    .image-container {
      position: relative;
      display: inline-block;
      /* border: 1px solid var(--border-color, #ddd); */
    }
    .resize-icon {
      position: absolute;
      right: 0;
      bottom: 0;
      width: var(--icon-size-sm, 24px);
      height: var(--icon-size-sm, 24px);
      /* background: url('resize-icon.png') no-repeat center center; */
      /* background-color: red; */
      background-size: contain;
      cursor: nwse-resize;
      visibility: visible
    }
    /* .image-container:hover .resize-icon {
      visibility: visible;
    } */
  `;
re([
  Ae({ type: String }),
  me({
    attributeType: J.PROPERTY,
    uiComponentType: se.TEXTAREA,
    displayLabel: "",
    placeholderText: "",
    fieldMappings: "htmldata"
  })
], D.prototype, "htmldata", 1);
re([
  Ae({ type: Boolean, reflect: !0 })
], D.prototype, "toolbarVisible", 2);
re([
  Ae({ type: Boolean, reflect: !0 }),
  me({
    attributeType: J.PROPERTY,
    uiComponentType: se.CHECKBOX,
    displayLabel: "",
    placeholderText: "",
    initialValue: !0,
    fieldMappings: "editorMode"
  })
], D.prototype, "editorMode", 2);
re([
  me({
    attributeType: J.EVENT,
    displayLabel: "On Content Changed",
    eventTrigger: "content-changed"
  })
], D.prototype, "handleContentChanged", 1);
D = re([
  zt({
    name: "rich-text-editor",
    version: "1.0.0",
    title: "Rich text editor",
    elementSelector: "zero-rich-text-editor",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  Ut()
], D);
export {
  D as RichTextEditor
};
