var Nt = Object.defineProperty;
var Dt = (r, e, t) => e in r ? Nt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Be = (r, e, t) => Dt(r, typeof e != "symbol" ? e + "" : e, t);
var Ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var We;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(p, E) {
      return function($, b) {
        Object.defineProperty(p, $, { configurable: !0, writable: !0, value: b }), E && E($, b);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function u() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function _() {
      return l() || u();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, E = !_ && !p, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return pe(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return pe({ __proto__: null });
      } : function() {
        return pe({});
      },
      has: E ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: E ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, b = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ct(), D = typeof WeakMap == "function" ? WeakMap : kt(), G = o ? Symbol.for("@reflect-metadata:registry") : void 0, oe = St(), xe = Mt(oe);
    function lt(i, s, a, d) {
      if (g(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!De(s))
          throw new TypeError();
        return gt(i, s);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!S(s))
          throw new TypeError();
        if (!S(d) && !g(d) && !W(d))
          throw new TypeError();
        return W(d) && (d = void 0), a = R(a), bt(i, s, a, d);
      }
    }
    e("decorate", lt);
    function ut(i, s) {
      function a(d, y) {
        if (!S(d))
          throw new TypeError();
        if (!g(y) && !At(y))
          throw new TypeError();
        Pe(i, s, d, y);
      }
      return a;
    }
    e("metadata", ut);
    function dt(i, s, a, d) {
      if (!S(a))
        throw new TypeError();
      return g(d) || (d = R(d)), Pe(i, s, a, d);
    }
    e("defineMetadata", dt);
    function ct(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return g(a) || (a = R(a)), Se(i, s, a);
    }
    e("hasMetadata", ct);
    function ht(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return g(a) || (a = R(a)), ce(i, s, a);
    }
    e("hasOwnMetadata", ht);
    function ft(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return g(a) || (a = R(a)), Me(i, s, a);
    }
    e("getMetadata", ft);
    function pt(i, s, a) {
      if (!S(s))
        throw new TypeError();
      return g(a) || (a = R(a)), Oe(i, s, a);
    }
    e("getOwnMetadata", pt);
    function vt(i, s) {
      if (!S(i))
        throw new TypeError();
      return g(s) || (s = R(s)), Ce(i, s);
    }
    e("getMetadataKeys", vt);
    function yt(i, s) {
      if (!S(i))
        throw new TypeError();
      return g(s) || (s = R(s)), ke(i, s);
    }
    e("getOwnMetadataKeys", yt);
    function _t(i, s, a) {
      if (!S(s))
        throw new TypeError();
      if (g(a) || (a = R(a)), !S(s))
        throw new TypeError();
      g(a) || (a = R(a));
      var d = Z(
        s,
        a,
        /*Create*/
        !1
      );
      return g(d) ? !1 : d.OrdinaryDeleteMetadata(i, s, a);
    }
    e("deleteMetadata", _t);
    function gt(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var d = i[a], y = d(s);
        if (!g(y) && !W(y)) {
          if (!De(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function bt(i, s, a, d) {
      for (var y = i.length - 1; y >= 0; --y) {
        var O = i[y], M = O(s, a, d);
        if (!g(M) && !W(M)) {
          if (!S(M))
            throw new TypeError();
          d = M;
        }
      }
      return d;
    }
    function Se(i, s, a) {
      var d = ce(i, s, a);
      if (d)
        return !0;
      var y = fe(s);
      return W(y) ? !1 : Se(i, y, a);
    }
    function ce(i, s, a) {
      var d = Z(
        s,
        a,
        /*Create*/
        !1
      );
      return g(d) ? !1 : Re(d.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Me(i, s, a) {
      var d = ce(i, s, a);
      if (d)
        return Oe(i, s, a);
      var y = fe(s);
      if (!W(y))
        return Me(i, y, a);
    }
    function Oe(i, s, a) {
      var d = Z(
        s,
        a,
        /*Create*/
        !1
      );
      if (!g(d))
        return d.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Pe(i, s, a, d) {
      var y = Z(
        a,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, a, d);
    }
    function Ce(i, s) {
      var a = ke(i, s), d = fe(i);
      if (d === null)
        return a;
      var y = Ce(d, s);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var O = new k(), M = [], m = 0, c = a; m < c.length; m++) {
        var h = c[m], f = O.has(h);
        f || (O.add(h), M.push(h));
      }
      for (var v = 0, w = y; v < w.length; v++) {
        var h = w[v], f = O.has(h);
        f || (O.add(h), M.push(h));
      }
      return M;
    }
    function ke(i, s) {
      var a = Z(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Te(i) {
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
    function mt(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function wt(i, s) {
      switch (Te(i)) {
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
      var a = "string", d = je(i, l);
      if (d !== void 0) {
        var y = d.call(i, a);
        if (S(y))
          throw new TypeError();
        return y;
      }
      return $t(i);
    }
    function $t(i, s) {
      var a, d;
      {
        var y = i.toString;
        if (se(y)) {
          var d = y.call(i);
          if (!S(d))
            return d;
        }
        var a = i.valueOf;
        if (se(a)) {
          var d = a.call(i);
          if (!S(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Re(i) {
      return !!i;
    }
    function Et(i) {
      return "" + i;
    }
    function R(i) {
      var s = wt(i);
      return mt(s) ? s : Et(s);
    }
    function Ne(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function se(i) {
      return typeof i == "function";
    }
    function De(i) {
      return typeof i == "function";
    }
    function At(i) {
      switch (Te(i)) {
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
        if (!se(a))
          throw new TypeError();
        return a;
      }
    }
    function Ie(i) {
      var s = je(i, u);
      if (!se(s))
        throw new TypeError();
      var a = s.call(i);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function Ue(i) {
      return i.value;
    }
    function He(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Le(i) {
      var s = i.return;
      s && s.call(i);
    }
    function fe(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || s !== b)
        return s;
      var a = i.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return s;
      var y = d.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function xt() {
      var i;
      !g(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Ot(t.Reflect));
      var s, a, d, y = new D(), O = {
        registerProvider: M,
        getProvider: c,
        setProvider: f
      };
      return O;
      function M(v) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case g(s):
            s = v;
            break;
          case s === v:
            break;
          case g(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            d === void 0 && (d = new k()), d.add(v);
            break;
        }
      }
      function m(v, w) {
        if (!g(s)) {
          if (s.isProviderFor(v, w))
            return s;
          if (!g(a)) {
            if (a.isProviderFor(v, w))
              return s;
            if (!g(d))
              for (var A = Ie(d); ; ) {
                var x = He(A);
                if (!x)
                  return;
                var T = Ue(x);
                if (T.isProviderFor(v, w))
                  return Le(A), T;
              }
          }
        }
        if (!g(i) && i.isProviderFor(v, w))
          return i;
      }
      function c(v, w) {
        var A = y.get(v), x;
        return g(A) || (x = A.get(w)), g(x) && (x = m(v, w), g(x) || (g(A) && (A = new C(), y.set(v, A)), A.set(w, x))), x;
      }
      function h(v) {
        if (g(v))
          throw new TypeError();
        return s === v || a === v || !g(d) && d.has(v);
      }
      function f(v, w, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var x = c(v, w);
        if (x !== A) {
          if (!g(x))
            return !1;
          var T = y.get(v);
          g(T) && (T = new C(), y.set(v, T)), T.set(w, A);
        }
        return !0;
      }
    }
    function St() {
      var i;
      return !g(G) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[G]), g(i) && (i = xt()), !g(G) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Mt(i) {
      var s = new D(), a = {
        isProviderFor: function(h, f) {
          var v = s.get(h);
          return g(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: c
      };
      return oe.registerProvider(a), a;
      function d(h, f, v) {
        var w = s.get(h), A = !1;
        if (g(w)) {
          if (!v)
            return;
          w = new C(), s.set(h, w), A = !0;
        }
        var x = w.get(f);
        if (g(x)) {
          if (!v)
            return;
          if (x = new C(), w.set(f, x), !i.setProvider(h, f, a))
            throw w.delete(f), A && s.delete(h), new Error("Wrong provider for target.");
        }
        return x;
      }
      function y(h, f, v) {
        var w = d(
          f,
          v,
          /*Create*/
          !1
        );
        return g(w) ? !1 : Re(w.has(h));
      }
      function O(h, f, v) {
        var w = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (!g(w))
          return w.get(h);
      }
      function M(h, f, v, w) {
        var A = d(
          v,
          w,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function m(h, f) {
        var v = [], w = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(w))
          return v;
        for (var A = w.keys(), x = Ie(A), T = 0; ; ) {
          var ze = He(x);
          if (!ze)
            return v.length = T, v;
          var Tt = Ue(ze);
          try {
            v[T] = Tt;
          } catch (Rt) {
            try {
              Le(x);
            } finally {
              throw Rt;
            }
          }
          T++;
        }
      }
      function c(h, f, v) {
        var w = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (g(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var A = s.get(f);
          g(A) || (A.delete(v), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function Ot(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, d = i.getOwnMetadata, y = i.getOwnMetadataKeys, O = i.deleteMetadata, M = new D(), m = {
        isProviderFor: function(c, h) {
          var f = M.get(c);
          return !g(f) && f.has(h) ? !0 : y(c, h).length ? (g(f) && (f = new k(), M.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: O
      };
      return m;
    }
    function Z(i, s, a) {
      var d = oe.getProvider(i, s);
      if (!g(d))
        return d;
      if (a) {
        if (oe.setProvider(i, s, xe))
          return xe;
        throw new Error("Illegal state.");
      }
    }
    function Pt() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function m(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, m.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
          }, m;
        }()
      ), d = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, m.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, m.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, v = h + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, he(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(c, h) {
            if (!he(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (he(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return d;
      function y(m, c) {
        return m;
      }
      function O(m, c) {
        return c;
      }
      function M(m, c) {
        return [m, c];
      }
    }
    function Ct() {
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
          }, s.prototype[u] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function kt() {
      var i = 16, s = $.create(), a = d();
      return (
        /** @class */
        function() {
          function c() {
            this._key = d();
          }
          return c.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var v = y(
              h,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
          }, c.prototype.delete = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = d();
          }, c;
        }()
      );
      function d() {
        var c;
        do
          c = "@@WeakMap@@" + m();
        while ($.has(s, c));
        return s[c] = !0, c;
      }
      function y(c, h) {
        if (!n.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: $.create() });
        }
        return c[a];
      }
      function O(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function M(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : O(h, c), h;
        }
        return O(new Array(c), c);
      }
      function m() {
        var c = M(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var v = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function pe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(We || (We = {}));
function jt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function It(r) {
  return function(e) {
    if (jt(r)) {
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
  return It(r);
}
function Ht(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Be(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const $ = new CSSStyleSheet(), b = (E = l.sheet) == null ? void 0 : E.cssRules;
          b && (Array.from(b).forEach((C) => $.insertRule(C.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          p.appendChild($);
        }
        u.forEach(($) => {
          const b = $.cloneNode(!0);
          p.appendChild(b);
        });
      }
    }
    return t;
  };
}
function Lt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function zt(r) {
  return function(e, t) {
    try {
      Lt(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
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
function be(r) {
  return zt(r);
}
var K;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(K || (K = {}));
var ee;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(ee || (ee = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis, me = ae.ShadowRoot && (ae.ShadyCSS === void 0 || ae.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, we = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let nt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== we) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (me && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Bt = (r) => new nt(typeof r == "string" ? r : r + "", void 0, we), Gt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new nt(t, r, we);
}, Wt = (r, e) => {
  if (me) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ae.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = me ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Bt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Ft, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Zt, getOwnPropertySymbols: Xt, getPrototypeOf: Yt } = Object, I = globalThis, qe = I.trustedTypes, Jt = qe ? qe.emptyScript : "", ve = I.reactiveElementPolyfillSupport, Y = (r, e) => r, le = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Jt : null;
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
} }, $e = (r, e) => !Vt(r, e), Ze = { attribute: !0, type: String, converter: le, reflect: !1, useDefault: !1, hasChanged: $e };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), I.litPropertyMetadata ?? (I.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
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
      o !== void 0 && Ft(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: o, set(u) {
      const _ = o == null ? void 0 : o.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const e = Yt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const t = this.properties, n = [...Zt(t), ...Xt(t)];
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
    return Wt(e, this.constructor.elementStyles), e;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : le).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const _ = n.getPropertyOptions(o), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : le;
      this._$Em = o;
      const E = p.fromAttribute(t, _.type);
      this[o] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = _.getPropertyOptions(e)), !((n.hasChanged ?? $e)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: o, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) {
        const { wrapped: _ } = u, p = this[l];
        _ !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[Y("elementProperties")] = /* @__PURE__ */ new Map(), V[Y("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: V }), (I.reactiveElementVersions ?? (I.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, Xe = (r) => r, ue = J.trustedTypes, Ye = ue ? ue.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, it = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, ot = "?" + j, Qt = `<${ot}>`, z = document, te = () => z.createComment(""), re = (r) => r === null || typeof r != "object" && typeof r != "function", Ee = Array.isArray, Kt = (r) => Ee(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ye = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, U = RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, st = /^(?:script|style|textarea|title)$/i, er = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), tr = er(1), F = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), tt = /* @__PURE__ */ new WeakMap(), H = z.createTreeWalker(z, 129);
function at(r, e) {
  if (!Ee(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const rr = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = X;
  for (let _ = 0; _ < t; _++) {
    const p = r[_];
    let E, $, b = -1, C = 0;
    for (; C < p.length && (u.lastIndex = C, $ = u.exec(p), $ !== null); ) C = u.lastIndex, u === X ? $[1] === "!--" ? u = Je : $[1] !== void 0 ? u = Qe : $[2] !== void 0 ? (st.test($[2]) && (o = RegExp("</" + $[2], "g")), u = U) : $[3] !== void 0 && (u = U) : u === U ? $[0] === ">" ? (u = o ?? X, b = -1) : $[1] === void 0 ? b = -2 : (b = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? U : $[3] === '"' ? et : Ke) : u === et || u === Ke ? u = U : u === Je || u === Qe ? u = X : (u = U, o = void 0);
    const k = u === U && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === X ? p + Qt : b >= 0 ? (n.push(E), p.slice(0, b) + it + p.slice(b) + j + k) : p + j + (b === -2 ? _ : k);
  }
  return [at(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ne {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, p = this.parts, [E, $] = rr(e, t);
    if (this.el = ne.createElement(E, n), H.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = H.nextNode()) !== null && p.length < _; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith(it)) {
          const C = $[u++], k = o.getAttribute(b).split(j), D = /([.?@])?(.*)/.exec(C);
          p.push({ type: 1, index: l, name: D[2], strings: k, ctor: D[1] === "." ? ir : D[1] === "?" ? or : D[1] === "@" ? sr : de }), o.removeAttribute(b);
        } else b.startsWith(j) && (p.push({ type: 6, index: l }), o.removeAttribute(b));
        if (st.test(o.tagName)) {
          const b = o.textContent.split(j), C = b.length - 1;
          if (C > 0) {
            o.textContent = ue ? ue.emptyScript : "";
            for (let k = 0; k < C; k++) o.append(b[k], te()), H.nextNode(), p.push({ type: 2, index: ++l });
            o.append(b[C], te());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ot) p.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(j, b + 1)) !== -1; ) p.push({ type: 7, index: l }), b += j.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = z.createElement("template");
    return n.innerHTML = e, n;
  }
}
function q(r, e, t = r, n) {
  var u, _;
  if (e === F) return e;
  let o = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = re(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((_ = o == null ? void 0 : o._$AO) == null || _.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = q(r, o._$AS(r, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? z).importNode(t, !0);
    H.currentNode = o;
    let l = H.nextNode(), u = 0, _ = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let E;
        p.type === 2 ? E = new ie(l, l.nextSibling, this, e) : p.type === 1 ? E = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (E = new ar(l, this, e)), this._$AV.push(E), p = n[++_];
      }
      u !== (p == null ? void 0 : p.index) && (l = H.nextNode(), u++);
    }
    return H.currentNode = z, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ie {
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
    e = q(this, e, t), re(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== F && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Kt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && re(this._$AH) ? this._$AA.nextSibling.data = e : this.T(z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ne.createElement(at(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const u = new nr(o, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = tt.get(e.strings);
    return t === void 0 && tt.set(e.strings, t = new ne(e)), t;
  }
  k(e) {
    Ee(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new ie(this.O(te()), this.O(te()), this, this.options)) : n = t[o], n._$AI(l), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = Xe(e).nextSibling;
      Xe(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class de {
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
    let u = !1;
    if (l === void 0) e = q(this, e, t, 0), u = !re(e) || e !== this._$AH && e !== F, u && (this._$AH = e);
    else {
      const _ = e;
      let p, E;
      for (e = l[0], p = 0; p < l.length - 1; p++) E = q(this, _[n + p], t, p), E === F && (E = this._$AH[p]), u || (u = !re(E) || E !== this._$AH[p]), E === P ? e = P : e !== P && (e += (E ?? "") + l[p + 1]), this._$AH[p] = E;
    }
    u && !o && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ir extends de {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class or extends de {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class sr extends de {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = q(this, e, t, 0) ?? P) === F) return;
    const n = this._$AH, o = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== P && (n === P || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ar {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    q(this, e);
  }
}
const _e = J.litHtmlPolyfillSupport;
_e == null || _e(ne, ie), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.3.3");
const lr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new ie(e.insertBefore(te(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis;
class Q extends V {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = lr(t, this.renderRoot, this.renderOptions);
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
    return F;
  }
}
var rt;
Q._$litElement$ = !0, Q.finalized = !0, (rt = L.litElementHydrateSupport) == null || rt.call(L, { LitElement: Q });
const ge = L.litElementPolyfillSupport;
ge == null || ge({ LitElement: Q });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: $e }, dr = (r = ur, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(_) {
      const p = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(u, p, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, r, _), _;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(_) {
      const p = this[u];
      e.call(this, _), this.requestUpdate(u, p, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Ae(r) {
  return (e, t) => typeof t == "object" ? dr(r, e, t) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
var cr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, B = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? hr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(e, t, o) : u(o)) || o);
  return n && o && cr(e, t, o), o;
};
function fr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let N = class extends Q {
  constructor() {
    super(...arguments), this.title = "Expansion Panel Title", this.expanded = !1, this.variant = "standard";
  }
  static getStudioTemplate(r) {
    var E, $, b;
    const e = ((E = r == null ? void 0 : r.props) == null ? void 0 : E.title) || "Expansion Panel Title", t = fr(e), n = (($ = r == null ? void 0 : r.props) == null ? void 0 : $.variant) || "standard", o = !!((b = r == null ? void 0 : r.props) != null && b.expanded), l = [
      {
        id: "content",
        label: "Panel Content",
        dropzone: !0,
        accepts: ["zero-section"]
      }
    ];
    let u = "padding: 14px 20px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: space-between; border-radius: 8px 8px 0 0; background: var(--uiv-surface-color,#ffffff); border-bottom: 1px solid rgba(0,0,0,0.06);", _ = "border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; overflow: hidden; background: var(--uiv-surface-color,#ffffff); box-shadow: 0 2px 4px rgba(0,0,0,0.03);";
    n === "blocky" ? (_ = "border: 3px solid #000000; border-radius: 0px; box-shadow: 5px 5px 0px #000000; overflow: hidden; background: #ffffff;", u = "padding: 14px 20px; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: var(--uiv-primary-color,#6366f1); border-bottom: 3px solid #000000; color:#000;") : n === "frosted" && (_ = "border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 12px; background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); overflow: hidden;", u = "padding: 14px 20px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: rgba(255, 255, 255, 0.05); border-bottom: 1px solid rgba(255, 255, 255, 0.1); color: var(--uiv-text-color,#111827);");
    const p = `
      <div style="${_}">
        <div style="${u}">
          <span>${t}</span>
          <span style="transition: transform 0.2s; ${o ? "transform: rotate(180deg);" : ""}">▼</span>
        </div>
        <div style="padding: 20px; display: ${o ? "block" : "none"}; min-height: 48px;">
          <zero-studio-slot name="content"></zero-studio-slot>
        </div>
      </div>
    `;
    return {
      kind: "panel",
      slots: l,
      templateHtml: p,
      badges: ["Panel"],
      emptyText: "Drag and Drop Sections inside the content slot"
    };
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(r) {
    this.title = r;
  }
  get expandedConfig() {
    return this.expanded;
  }
  set expandedConfig(r) {
    this.expanded = !!r;
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "standard";
  }
  handleToggle() {
    this.expanded = !this.expanded, this.dispatchEvent(
      new CustomEvent("toggle", {
        detail: { expanded: this.expanded },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const r = [
      "panel-container",
      this.expanded ? "checked" : "",
      `variant-${this.variant}`
    ].join(" ");
    return tr`
      <div class=${r}>
        <div class="header" @click=${this.handleToggle}>
          <span>${this.title}</span>
          <span class="icon-arrow">▼</span>
        </div>
        <div class="content-area">
          <slot name="content"></slot>
          <slot></slot>
        </div>
      </div>
    `;
  }
};
N.styles = Gt`
    :host {
      display: block;
      margin-bottom: 16px;
      --ep-p: var(--uiv-primary-color, #6366f1);
      --ep-bg: var(--uiv-surface-color, #ffffff);
      --ep-text: var(--uiv-text-color, #111827);
      --ep-border: var(--uiv-border-color, #e5e7eb);
    }

    .panel-container {
      border: 1px solid var(--ep-border);
      border-radius: 8px;
      overflow: hidden;
      background: var(--ep-bg);
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .header {
      padding: 14px 20px;
      font-weight: 700;
      color: var(--ep-text);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      user-select: none;
      transition: background 0.2s ease;
    }

    .header:hover {
      background: rgba(0, 0, 0, 0.015);
    }

    .icon-arrow {
      font-size: 0.72rem;
      transition: transform 0.25s ease;
      color: var(--ep-p);
    }

    .checked .icon-arrow {
      transform: rotate(180deg);
    }

    .content-area {
      display: none;
      padding: 20px;
      border-top: 1px solid var(--ep-border);
      box-sizing: border-box;
      transition: all 0.25s ease;
    }

    .checked .content-area {
      display: block;
    }

    /* ─── VARIANTS ─── */

    /* Blocky (Retro) */
    .variant-blocky {
      border: 3px solid #000000;
      border-radius: 0px;
      box-shadow: 5px 5px 0px #000000;
    }
    .variant-blocky .header {
      background: var(--ep-p);
      color: #000000;
      border-bottom: 3px solid #000000;
      font-weight: 900;
    }
    .variant-blocky .icon-arrow {
      color: #000000;
      font-weight: bold;
    }
    .variant-blocky .content-area {
      border-top: none;
      background: #ffffff;
    }

    /* Frosted */
    .variant-frosted {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .variant-frosted .header {
      background: rgba(255, 255, 255, 0.05);
      border-bottom-color: rgba(255, 255, 255, 0.15);
    }
    .variant-frosted .content-area {
      border-top-color: rgba(255, 255, 255, 0.15);
    }

    /* Modern */
    .variant-modern {
      border-color: transparent;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
      border-radius: 12px;
    }
    .variant-modern .header {
      padding: 16px 24px;
    }
    .variant-modern .icon-arrow {
      background: rgba(99, 102, 241, 0.08);
      padding: 6px;
      border-radius: 50%;
    }
  `;
B([
  Ae({ type: String })
], N.prototype, "title", 2);
B([
  Ae({ type: Boolean })
], N.prototype, "expanded", 2);
B([
  Ae({ type: String })
], N.prototype, "variant", 2);
B([
  be({
    attributeType: ee.PROPERTY,
    uiComponentType: K.TEXT_INPUT,
    displayLabel: "Panel Title",
    fieldMappings: "title"
  })
], N.prototype, "titleConfig", 1);
B([
  be({
    attributeType: ee.PROPERTY,
    uiComponentType: K.CHECKBOX,
    displayLabel: "Expanded by Default",
    fieldMappings: "expanded"
  })
], N.prototype, "expandedConfig", 1);
B([
  be({
    attributeType: ee.PROPERTY,
    uiComponentType: K.DROPDOWN,
    displayLabel: "Panel Style Theme",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard", value: "standard" },
      { label: "Retro Blocky", value: "blocky" },
      { label: "Frosted Glass", value: "frosted" },
      { label: "Modern Soft", value: "modern" }
    ]
  })
], N.prototype, "variantConfig", 1);
N = B([
  Ut({
    name: "zero-expansion-panel",
    version: "1.0.0",
    title: "Expansion Panel",
    elementSelector: "zero-expansion-panel",
    group: "Layout",
    iconName: "panel-icon.png"
  }),
  Ht()
], N);
export {
  N as ZeroExpansionPanel
};
