var jt = Object.defineProperty;
var Dt = (r, e, t) => e in r ? jt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => Dt(r, typeof e != "symbol" ? e + "" : e, t);
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
var Ve;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(v, A) {
      return function($, b) {
        Object.defineProperty(v, $, { configurable: !0, writable: !0, value: b }), A && A($, b);
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
    function _() {
      return l() || d();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", d = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, A = !_ && !v, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return pe(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return pe({ __proto__: null });
      } : function() {
        return pe({});
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
    }, b = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), N = typeof WeakMap == "function" ? WeakMap : Rt(), G = o ? Symbol.for("@reflect-metadata:registry") : void 0, ie = Mt(), Oe = Pt(ie);
    function ct(i, s, a, c) {
      if (g(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!Ue(s))
          throw new TypeError();
        return mt(i, s);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!S(s))
          throw new TypeError();
        if (!S(c) && !g(c) && !W(c))
          throw new TypeError();
        return W(c) && (c = void 0), a = R(a), bt(i, s, a, c);
      }
    }
    e("decorate", ct);
    function ut(i, s) {
      function a(c, y) {
        if (!S(c))
          throw new TypeError();
        if (!g(y) && !St(y))
          throw new TypeError();
        Pe(i, s, c, y);
      }
      return a;
    }
    e("metadata", ut);
    function ht(i, s, a, c) {
      if (!S(a))
        throw new TypeError();
      return g(c) || (c = R(c)), Pe(i, s, a, c);
    }
    e("defineMetadata", ht);
    function ft(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return g(a) || (a = R(a)), Se(i, s, a);
    }
    e("hasMetadata", ft);
    function pt(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return g(a) || (a = R(a)), ue(i, s, a);
    }
    e("hasOwnMetadata", pt);
    function vt(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return g(a) || (a = R(a)), xe(i, s, a);
    }
    e("getMetadata", vt);
    function yt(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return g(a) || (a = R(a)), Me(i, s, a);
    }
    e("getOwnMetadata", yt);
    function _t(i, s) {
      if (!S(i))
        throw new TypeError();
      return g(s) || (s = R(s)), Ce(i, s);
    }
    e("getMetadataKeys", _t);
    function gt(i, s) {
      if (!S(i))
        throw new TypeError();
      return g(s) || (s = R(s)), Te(i, s);
    }
    e("getOwnMetadataKeys", gt);
    function wt(i, s, a) {
      if (!S(s))
        throw new TypeError();
      if (g(a) || (a = R(a)), !S(s))
        throw new TypeError();
      g(a) || (a = R(a));
      var c = q(
        s,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, a);
    }
    e("deleteMetadata", wt);
    function mt(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], y = c(s);
        if (!g(y) && !W(y)) {
          if (!Ue(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function bt(i, s, a, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var M = i[y], x = M(s, a, c);
        if (!g(x) && !W(x)) {
          if (!S(x))
            throw new TypeError();
          c = x;
        }
      }
      return c;
    }
    function Se(i, s, a) {
      var c = ue(i, s, a);
      if (c)
        return !0;
      var y = fe(s);
      return W(y) ? !1 : Se(i, y, a);
    }
    function ue(i, s, a) {
      var c = q(
        s,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Re(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function xe(i, s, a) {
      var c = ue(i, s, a);
      if (c)
        return Me(i, s, a);
      var y = fe(s);
      if (!W(y))
        return xe(i, y, a);
    }
    function Me(i, s, a) {
      var c = q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Pe(i, s, a, c) {
      var y = q(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function Ce(i, s) {
      var a = Te(i, s), c = fe(i);
      if (c === null)
        return a;
      var y = Ce(c, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var M = new T(), x = [], w = 0, u = a; w < u.length; w++) {
        var h = u[w], f = M.has(h);
        f || (M.add(h), x.push(h));
      }
      for (var p = 0, m = y; p < m.length; p++) {
        var h = m[p], f = M.has(h);
        f || (M.add(h), x.push(h));
      }
      return x;
    }
    function Te(i, s) {
      var a = q(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function ke(i) {
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
    function W(i) {
      return i === null;
    }
    function $t(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function At(i, s) {
      switch (ke(i)) {
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
      var a = "string", c = je(i, l);
      if (c !== void 0) {
        var y = c.call(i, a);
        if (S(y))
          throw new TypeError();
        return y;
      }
      return Et(i);
    }
    function Et(i, s) {
      var a, c;
      {
        var y = i.toString;
        if (oe(y)) {
          var c = y.call(i);
          if (!S(c))
            return c;
        }
        var a = i.valueOf;
        if (oe(a)) {
          var c = a.call(i);
          if (!S(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Re(i) {
      return !!i;
    }
    function Ot(i) {
      return "" + i;
    }
    function R(i) {
      var s = At(i);
      return $t(s) ? s : Ot(s);
    }
    function Ne(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function oe(i) {
      return typeof i == "function";
    }
    function Ue(i) {
      return typeof i == "function";
    }
    function St(i) {
      switch (ke(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function he(i, s) {
      return i === s || i !== i && s !== s;
    }
    function je(i, s) {
      var a = i[s];
      if (a != null) {
        if (!oe(a))
          throw new TypeError();
        return a;
      }
    }
    function De(i) {
      var s = je(i, d);
      if (!oe(s))
        throw new TypeError();
      var a = s.call(i);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function Ie(i) {
      return i.value;
    }
    function He(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function ze(i) {
      var s = i.return;
      s && s.call(i);
    }
    function fe(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || s !== b)
        return s;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function xt() {
      var i;
      !g(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Ct(t.Reflect));
      var s, a, c, y = new N(), M = {
        registerProvider: x,
        getProvider: u,
        setProvider: f
      };
      return M;
      function x(p) {
        if (!Object.isExtensible(M))
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
            c === void 0 && (c = new T()), c.add(p);
            break;
        }
      }
      function w(p, m) {
        if (!g(s)) {
          if (s.isProviderFor(p, m))
            return s;
          if (!g(a)) {
            if (a.isProviderFor(p, m))
              return s;
            if (!g(c))
              for (var E = De(c); ; ) {
                var O = He(E);
                if (!O)
                  return;
                var k = Ie(O);
                if (k.isProviderFor(p, m))
                  return ze(E), k;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, m))
          return i;
      }
      function u(p, m) {
        var E = y.get(p), O;
        return g(E) || (O = E.get(m)), g(O) && (O = w(p, m), g(O) || (g(E) && (E = new C(), y.set(p, E)), E.set(m, O))), O;
      }
      function h(p) {
        if (g(p))
          throw new TypeError();
        return s === p || a === p || !g(c) && c.has(p);
      }
      function f(p, m, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var O = u(p, m);
        if (O !== E) {
          if (!g(O))
            return !1;
          var k = y.get(p);
          g(k) && (k = new C(), y.set(p, k)), k.set(m, E);
        }
        return !0;
      }
    }
    function Mt() {
      var i;
      return !g(G) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[G]), g(i) && (i = xt()), !g(G) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
      var s = new N(), a = {
        isProviderFor: function(h, f) {
          var p = s.get(h);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: u
      };
      return ie.registerProvider(a), a;
      function c(h, f, p) {
        var m = s.get(h), E = !1;
        if (g(m)) {
          if (!p)
            return;
          m = new C(), s.set(h, m), E = !0;
        }
        var O = m.get(f);
        if (g(O)) {
          if (!p)
            return;
          if (O = new C(), m.set(f, O), !i.setProvider(h, f, a))
            throw m.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return O;
      }
      function y(h, f, p) {
        var m = c(
          f,
          p,
          /*Create*/
          !1
        );
        return g(m) ? !1 : Re(m.has(h));
      }
      function M(h, f, p) {
        var m = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g(m))
          return m.get(h);
      }
      function x(h, f, p, m) {
        var E = c(
          p,
          m,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function w(h, f) {
        var p = [], m = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(m))
          return p;
        for (var E = m.keys(), O = De(E), k = 0; ; ) {
          var Le = He(O);
          if (!Le)
            return p.length = k, p;
          var Nt = Ie(Le);
          try {
            p[k] = Nt;
          } catch (Ut) {
            try {
              ze(O);
            } finally {
              throw Ut;
            }
          }
          k++;
        }
      }
      function u(h, f, p) {
        var m = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (g(m) || !m.delete(h))
          return !1;
        if (m.size === 0) {
          var E = s.get(f);
          g(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Ct(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, M = i.deleteMetadata, x = new N(), w = {
        isProviderFor: function(u, h) {
          var f = x.get(u);
          return !g(f) && f.has(h) ? !0 : y(u, h).length ? (g(f) && (f = new T(), x.set(u, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: M
      };
      return w;
    }
    function q(i, s, a) {
      var c = ie.getProvider(i, s);
      if (!g(c))
        return c;
      if (a) {
        if (ie.setProvider(i, s, Oe))
          return Oe;
        throw new Error("Illegal state.");
      }
    }
    function Tt() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function w(u, h, f) {
            this._index = 0, this._keys = u, this._values = h, this._selector = f;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[d] = function() {
            return this;
          }, w.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var h = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), u;
          }, w.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: u, done: !0 };
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
          }), w.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, w.prototype.get = function(u) {
            var h = this._find(
              u,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, w.prototype.set = function(u, h) {
            var f = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, w.prototype.delete = function(u) {
            var h = this._find(
              u,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, he(u, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, w.prototype.values = function() {
            return new a(this._keys, this._values, M);
          }, w.prototype.entries = function() {
            return new a(this._keys, this._values, x);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[d] = function() {
            return this.entries();
          }, w.prototype._find = function(u, h) {
            if (!he(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (he(this._keys[f], u)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return c;
      function y(w, u) {
        return w;
      }
      function M(w, u) {
        return u;
      }
      function x(w, u) {
        return [w, u];
      }
    }
    function kt() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new C();
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
          }, s.prototype[d] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function Rt() {
      var i = 16, s = $.create(), a = c();
      return (
        /** @class */
        function() {
          function u() {
            this._key = c();
          }
          return u.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, u.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, u.prototype.set = function(h, f) {
            var p = y(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, u.prototype.delete = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, u.prototype.clear = function() {
            this._key = c();
          }, u;
        }()
      );
      function c() {
        var u;
        do
          u = "@@WeakMap@@" + w();
        while ($.has(s, u));
        return s[u] = !0, u;
      }
      function y(u, h) {
        if (!n.call(u, a)) {
          if (!h)
            return;
          Object.defineProperty(u, a, { value: $.create() });
        }
        return u[a];
      }
      function M(u, h) {
        for (var f = 0; f < h; ++f)
          u[f] = Math.random() * 255 | 0;
        return u;
      }
      function x(u) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : M(h, u), h;
        }
        return M(new Array(u), u);
      }
      function w() {
        var u = x(i);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = u[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function pe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function It(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ht(r) {
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
  return Ht(r);
}
function Lt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ge(this, "_stylesApplied", !1);
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
        var A;
        const l = document.querySelector('style.global-style[type="text/css"]'), d = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const $ = new CSSStyleSheet(), b = (A = l.sheet) == null ? void 0 : A.cssRules;
          b && (Array.from(b).forEach((C) => $.insertRule(C.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          v.appendChild($);
        }
        d.forEach(($) => {
          const b = $.cloneNode(!0);
          v.appendChild(b);
        });
      }
    }
    return t;
  };
}
function Gt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Wt(r) {
  return function(e, t) {
    try {
      Gt(r);
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
function we(r) {
  return Wt(r);
}
var ae;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(ae || (ae = {}));
var Q;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(Q || (Q = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const se = globalThis, me = se.ShadowRoot && (se.ShadyCSS === void 0 || se.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, be = Symbol(), Be = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== be) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (me && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Be.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Be.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Vt = (r) => new ot(typeof r == "string" ? r : r + "", void 0, be), Bt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new ot(t, r, be);
}, Ft = (r, e) => {
  if (me) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = se.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = me ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Vt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qt, defineProperty: Zt, getOwnPropertyDescriptor: Yt, getOwnPropertyNames: Xt, getOwnPropertySymbols: Jt, getPrototypeOf: Qt } = Object, j = globalThis, qe = j.trustedTypes, Kt = qe ? qe.emptyScript : "", ve = j.reactiveElementPolyfillSupport, Y = (r, e) => r, le = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Kt : null;
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
} }, $e = (r, e) => !qt(r, e), Ze = { attribute: !0, type: String, converter: le, reflect: !1, useDefault: !1, hasChanged: $e };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let V = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Zt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = Yt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(d) {
      this[t] = d;
    } };
    return { get: o, set(d) {
      const _ = o == null ? void 0 : o.call(this);
      l == null || l.call(this, d), this.requestUpdate(e, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const t = this.properties, n = [...Xt(t), ...Jt(t)];
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
      const d = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : le).toAttribute(t, n.type);
      this._$Em = e, d == null ? this.removeAttribute(o) : this.setAttribute(o, d), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, d;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const _ = n.getPropertyOptions(o), v = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : le;
      this._$Em = o;
      const A = v.fromAttribute(t, _.type);
      this[o] = A ?? ((d = this._$Ej) == null ? void 0 : d.get(o)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var d;
    if (e !== void 0) {
      const _ = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = _.getPropertyOptions(e)), !((n.hasChanged ?? $e)(l, t) || n.useDefault && n.reflect && l === ((d = this._$Ej) == null ? void 0 : d.get(e)) && !this.hasAttribute(_._$Eu(e, n)))) return;
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
        const { wrapped: _ } = d, v = this[l];
        _ !== !0 || this._$AL.has(l) || v === void 0 || this.C(l, void 0, d, v);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[Y("elementProperties")] = /* @__PURE__ */ new Map(), V[Y("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: V }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, Ye = (r) => r, de = X.trustedTypes, Xe = de ? de.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, st = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, at = "?" + U, er = `<${at}>`, z = document, K = () => z.createComment(""), ee = (r) => r === null || typeof r != "object" && typeof r != "function", Ae = Array.isArray, tr = (r) => Ae(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ye = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, D = RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, lt = /^(?:script|style|textarea|title)$/i, rr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), tt = rr(1), B = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), I = z.createTreeWalker(z, 129);
function dt(r, e) {
  if (!Ae(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xe !== void 0 ? Xe.createHTML(e) : e;
}
const nr = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", d = Z;
  for (let _ = 0; _ < t; _++) {
    const v = r[_];
    let A, $, b = -1, C = 0;
    for (; C < v.length && (d.lastIndex = C, $ = d.exec(v), $ !== null); ) C = d.lastIndex, d === Z ? $[1] === "!--" ? d = Je : $[1] !== void 0 ? d = Qe : $[2] !== void 0 ? (lt.test($[2]) && (o = RegExp("</" + $[2], "g")), d = D) : $[3] !== void 0 && (d = D) : d === D ? $[0] === ">" ? (d = o ?? Z, b = -1) : $[1] === void 0 ? b = -2 : (b = d.lastIndex - $[2].length, A = $[1], d = $[3] === void 0 ? D : $[3] === '"' ? et : Ke) : d === et || d === Ke ? d = D : d === Je || d === Qe ? d = Z : (d = D, o = void 0);
    const T = d === D && r[_ + 1].startsWith("/>") ? " " : "";
    l += d === Z ? v + er : b >= 0 ? (n.push(A), v.slice(0, b) + st + v.slice(b) + U + T) : v + U + (b === -2 ? _ : T);
  }
  return [dt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class te {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, d = 0;
    const _ = e.length - 1, v = this.parts, [A, $] = nr(e, t);
    if (this.el = te.createElement(A, n), I.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = I.nextNode()) !== null && v.length < _; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith(st)) {
          const C = $[d++], T = o.getAttribute(b).split(U), N = /([.?@])?(.*)/.exec(C);
          v.push({ type: 1, index: l, name: N[2], strings: T, ctor: N[1] === "." ? or : N[1] === "?" ? sr : N[1] === "@" ? ar : ce }), o.removeAttribute(b);
        } else b.startsWith(U) && (v.push({ type: 6, index: l }), o.removeAttribute(b));
        if (lt.test(o.tagName)) {
          const b = o.textContent.split(U), C = b.length - 1;
          if (C > 0) {
            o.textContent = de ? de.emptyScript : "";
            for (let T = 0; T < C; T++) o.append(b[T], K()), I.nextNode(), v.push({ type: 2, index: ++l });
            o.append(b[C], K());
          }
        }
      } else if (o.nodeType === 8) if (o.data === at) v.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(U, b + 1)) !== -1; ) v.push({ type: 7, index: l }), b += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = z.createElement("template");
    return n.innerHTML = e, n;
  }
}
function F(r, e, t = r, n) {
  var d, _;
  if (e === B) return e;
  let o = n !== void 0 ? (d = t._$Co) == null ? void 0 : d[n] : t._$Cl;
  const l = ee(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((_ = o == null ? void 0 : o._$AO) == null || _.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = F(r, o._$AS(r, e.values), o, n)), e;
}
class ir {
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? z).importNode(t, !0);
    I.currentNode = o;
    let l = I.nextNode(), d = 0, _ = 0, v = n[0];
    for (; v !== void 0; ) {
      if (d === v.index) {
        let A;
        v.type === 2 ? A = new re(l, l.nextSibling, this, e) : v.type === 1 ? A = new v.ctor(l, v.name, v.strings, this, e) : v.type === 6 && (A = new lr(l, this, e)), this._$AV.push(A), v = n[++_];
      }
      d !== (v == null ? void 0 : v.index) && (l = I.nextNode(), d++);
    }
    return I.currentNode = z, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class re {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = F(this, e, t), ee(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== B && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && ee(this._$AH) ? this._$AA.nextSibling.data = e : this.T(z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = te.createElement(dt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const d = new ir(o, this), _ = d.u(this.options);
      d.p(t), this.T(_), this._$AH = d;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new te(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new re(this.O(K()), this.O(K()), this, this.options)) : n = t[o], n._$AI(l), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = Ye(e).nextSibling;
      Ye(e).remove(), e = o;
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
  constructor(e, t, n, o, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(e, t = this, n, o) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) e = F(this, e, t, 0), d = !ee(e) || e !== this._$AH && e !== B, d && (this._$AH = e);
    else {
      const _ = e;
      let v, A;
      for (e = l[0], v = 0; v < l.length - 1; v++) A = F(this, _[n + v], t, v), A === B && (A = this._$AH[v]), d || (d = !ee(A) || A !== this._$AH[v]), A === P ? e = P : e !== P && (e += (A ?? "") + l[v + 1]), this._$AH[v] = A;
    }
    d && !o && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends ce {
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
class ar extends ce {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = F(this, e, t, 0) ?? P) === B) return;
    const n = this._$AH, o = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== P && (n === P || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class lr {
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
const _e = X.litHtmlPolyfillSupport;
_e == null || _e(te, re), (X.litHtmlVersions ?? (X.litHtmlVersions = [])).push("3.3.3");
const dr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new re(e.insertBefore(K(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis;
class J extends V {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = dr(t, this.renderRoot, this.renderOptions);
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
    return B;
  }
}
var it;
J._$litElement$ = !0, J.finalized = !0, (it = H.litElementHydrateSupport) == null || it.call(H, { LitElement: J });
const ge = H.litElementPolyfillSupport;
ge == null || ge({ LitElement: J });
(H.litElementVersions ?? (H.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: $e }, ur = (r = cr, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: d } = t;
    return { set(_) {
      const v = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(d, v, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(d, void 0, r, _), _;
    } };
  }
  if (n === "setter") {
    const { name: d } = t;
    return function(_) {
      const v = this[d];
      e.call(this, _), this.requestUpdate(d, v, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Ee(r) {
  return (e, t) => typeof t == "object" ? ur(r, e, t) : ((n, o, l) => {
    const d = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), d ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function hr(r) {
  return Ee({ ...r, state: !0, attribute: !1 });
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, ne = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? pr(e, t) : e, l = r.length - 1, d; l >= 0; l--)
    (d = r[l]) && (o = (n ? d(e, t, o) : d(o)) || o);
  return n && o && fr(e, t, o), o;
};
const nt = () => window.zeroThemeManager;
let L = class extends J {
  constructor() {
    super(...arguments), this.options = [], this.selectedOption = "", this._isOpen = !1;
  }
  set OptionConfig(r) {
    this.options = r, this.requestUpdate();
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = nt()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  toggleDropdown() {
    this._isOpen = !this._isOpen;
  }
  selectOption(r) {
    this.selectedOption = r.value, this._isOpen = !1, this.dispatchEvent(new CustomEvent("change", { detail: r }));
  }
  render() {
    var e;
    const r = (e = nt()) == null ? void 0 : e.getActiveTheme("zero-standard-themes");
    return tt`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getComponentStyles("dropdown") : ""}
            </style>
            <div class="dropdown-message-box uiv-${r == null ? void 0 : r.id}-theme">
                <label class="label uiv-${r == null ? void 0 : r.id}-text">Appearance</label>
                <div class="dropdown-container uiv-${r == null ? void 0 : r.id}-card uiv-${r == null ? void 0 : r.id}-scan" @click=${this.toggleDropdown}>
                    <div class="dropdown-header">
                        <span id="selected-option" class="uiv-${r == null ? void 0 : r.id}-text">${this.selectedOption || "Select an option"}</span>
                        <i class="fas fa-caret-down dropdown-icon uiv-${r == null ? void 0 : r.id}-text"></i>
                    </div>
                </div>
                <div class="dropdown-options ${this._isOpen ? "open" : ""} uiv-${r == null ? void 0 : r.id}-card uiv-${r == null ? void 0 : r.id}-glass">
                    <span class="message-arrow"></span>
                    <div class="dropdown-options-list">
                        ${this.options.map((t) => tt`
                            <div class="option ${this.selectedOption === t.value ? "selected" : ""} uiv-${r == null ? void 0 : r.id}-text" @click=${() => this.selectOption(t)}>
                                ${t.label}
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        `;
  }
};
L.styles = Bt`
        :host {
            display: block;
            font-family: var(--uiv-font-family, Arial, sans-serif);
            --dropdown-label-color: var(--uiv-text-color, var(--uiv-text-primary-themed));
            --dropdown-border-color: var(--uiv-border-color, var(--uiv-app-border-color, rgba(128,128,128,0.2)));
            --dropdown-bg-color: var(--uiv-bg-surface, var(--uiv-surface-color, #fff));
            --dropdown-icon-color: var(--uiv-primary-color, var(--uiv-status-primary));
            --option-hover-bg-color: var(--uiv-bg-overlay, var(--uiv-app-accent-transparent, rgba(128,128,128,0.1)));
            --dropdown-border-radius: var(--uiv-border-radius, 8px);
            --dropdown-height: var(--input-height, 42px);
            --dropdown-font-size: 14px;
        }
        
        .dropdown-message-box {
            position: relative;
            width: 180px; /* Adjusted width to match options */
            margin: 20px;
        }
        
        .label {
            font-size: 14px;
            color: var(--dropdown-label-color);
            margin-bottom: 8px;
            display: block;
        }
          .dropdown-container {
            position: relative;
            border: 1px solid var(--dropdown-border-color);
            border-radius: var(--dropdown-border-radius);
            background-color: var(--dropdown-bg-color);
            padding: 0 var(--spacing-sm, 8px); /* Adjusted padding to fit the height */
            height: var(--dropdown-height);
            display: flex;
            align-items: center;
            font-size: var(--dropdown-font-size); /* Adjusted font size */
            cursor: pointer;
            transition: var(--transition-fast, box-shadow 0.2s ease, border-color 0.2s ease);
        }
          .dropdown-container:hover {
            box-shadow: var(--shadow-sm, 0 2px 4px rgba(0, 0, 0, 0.1));
            border-color: var(--dropdown-hover-border-color);
        }
        
        .dropdown-header {
            display: flex;
            align-items: center;
            flex: 1;
        }
        
        .dropdown-icon {
            font-size: var(--icon-size-sm, 12px); /* Use standardized icon size */
            color: var(--dropdown-icon-color);
            transition: var(--transition-fast, transform 0.2s ease);
            margin-left: var(--spacing-sm, 8px); /* Space between text and icon */
        }
          .dropdown-options {
            display: none;
            position: absolute;
            top: calc(100% + var(--spacing-sm, 10px));
            left: 0;
            width: 100%;
            border: 1px solid var(--dropdown-border-color);
            border-radius: var(--dropdown-border-radius);
            background-color: var(--dropdown-bg-color);
            padding: var(--spacing-sm, 8px) var(--spacing-xs, 5px);
            z-index: 10;
            box-shadow: var(--shadow-lg, 0 4px 12px rgba(0, 0, 0, 0.1));
            transition: var(--transition-fast, opacity 0.2s ease, transform 0.2s ease);
            opacity: 0;
            transform: translateY(-var(--spacing-sm, 10px));
        }
        
        .dropdown-options.open {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }
        .dropdown-options-list{
            max-height: 10rem; 
            overflow-y: auto;
        }
          .option {
            padding: var(--spacing-xs, 4px) var(--spacing-md, 12px); /* Adjusted padding for options */
            cursor: pointer;
            font-size: var(--dropdown-font-size); /* Match font size */
            transition: var(--transition-fast, background-color 0.2s ease, box-shadow 0.2s ease);
            border-radius: var(--border-radius-sm, 4px);
        }
        
        .option:hover {
            border: 1px solid var(--dropdown-border-color);
            box-shadow: var(--shadow-sm, 0 2px 4px rgba(0, 0, 0, 0.15));
        }
        
        .option.selected {
            border: 1px solid var(--dropdown-border-color); /* Smooth thin border for selected option */
            /* background-color: var(--dropdown-bg-color); Ensure background color remains consistent */
            font-weight: bold; /* Optional: highlight selected option with bold text */
        }
        
        .message-arrow {
            position: absolute;
            left: 50%;
            transform: translate(-50%,-150%);
            width: 0;
            height: 0;
            border-width: 8px;
            border-style: solid;
            border-color: transparent transparent var(--dropdown-border-color) transparent;
        }
        
        .message-arrow-outline {
            position: absolute;
            top: -9px;
            left: 50%;
            transform: translate(-50%, -30%);
            width: 0;
            height: 0;
            border-width: 8px;
            border-style: solid;
            border-color: transparent transparent var(--dropdown-bg-color) transparent;
            z-index: 11;
        }
    `;
ne([
  Ee({ type: Array }),
  we({
    attributeType: Q.PROPERTY,
    uiComponentType: ae.TEXTAREA,
    displayLabel: "Options",
    fieldMappings: "OptionConfig",
    optionItems: {
      type: "Object"
    }
  })
], L.prototype, "OptionConfig", 1);
ne([
  Ee({ type: String }),
  we({
    attributeType: Q.PROPERTY,
    uiComponentType: ae.TEXT_INPUT,
    displayLabel: "Selected Option",
    placeholderText: "selectedOption",
    fieldMappings: "selectedOption"
  })
], L.prototype, "selectedOption", 2);
ne([
  hr()
], L.prototype, "_isOpen", 2);
ne([
  we({
    attributeType: Q.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], L.prototype, "selectOption", 1);
L = ne([
  zt({
    name: "popup-dropdown",
    version: "1.0.0",
    title: "Popup dropdown",
    elementSelector: "zero-popup-dropdown",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  Lt()
], L);
export {
  L as PopupDropdown
};
