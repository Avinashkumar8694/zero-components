var Dt = Object.defineProperty;
var jt = (r, e, t) => e in r ? Dt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => jt(r, typeof e != "symbol" ? e + "" : e, t);
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Be;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ve == "object" ? Ve : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(v, E) {
      return function($, w) {
        Object.defineProperty(v, $, { configurable: !0, writable: !0, value: w }), E && E($, w);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, E = !_ && !v, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ve(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ve({ __proto__: null });
      } : function() {
        return ve({});
      },
      has: E ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: E ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, w = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Rt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), I = typeof WeakMap == "function" ? WeakMap : It(), G = s ? Symbol.for("@reflect-metadata:registry") : void 0, se = xt(), Se = Ct(se);
    function dt(i, o, a, c) {
      if (g(a)) {
        if (!Ie(i))
          throw new TypeError();
        if (!Ne(o))
          throw new TypeError();
        return wt(i, o);
      } else {
        if (!Ie(i))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !g(c) && !V(c))
          throw new TypeError();
        return V(c) && (c = void 0), a = k(a), $t(i, o, a, c);
      }
    }
    e("decorate", dt);
    function ht(i, o) {
      function a(c, y) {
        if (!O(c))
          throw new TypeError();
        if (!g(y) && !Mt(y))
          throw new TypeError();
        xe(i, o, c, y);
      }
      return a;
    }
    e("metadata", ht);
    function ft(i, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return g(c) || (c = k(c)), xe(i, o, a, c);
    }
    e("defineMetadata", ft);
    function pt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = k(a)), Oe(i, o, a);
    }
    e("hasMetadata", pt);
    function vt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = k(a)), he(i, o, a);
    }
    e("hasOwnMetadata", vt);
    function yt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = k(a)), Me(i, o, a);
    }
    e("getMetadata", yt);
    function _t(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = k(a)), Pe(i, o, a);
    }
    e("getOwnMetadata", _t);
    function gt(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = k(o)), Ce(i, o);
    }
    e("getMetadataKeys", gt);
    function mt(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = k(o)), Te(i, o);
    }
    e("getOwnMetadataKeys", mt);
    function bt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      if (g(a) || (a = k(a)), !O(o))
        throw new TypeError();
      g(a) || (a = k(a));
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", bt);
    function wt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], y = c(o);
        if (!g(y) && !V(y)) {
          if (!Ne(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function $t(i, o, a, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var P = i[y], M = P(o, a, c);
        if (!g(M) && !V(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function Oe(i, o, a) {
      var c = he(i, o, a);
      if (c)
        return !0;
      var y = pe(o);
      return V(y) ? !1 : Oe(i, y, a);
    }
    function he(i, o, a) {
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : ke(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Me(i, o, a) {
      var c = he(i, o, a);
      if (c)
        return Pe(i, o, a);
      var y = pe(o);
      if (!V(y))
        return Me(i, y, a);
    }
    function Pe(i, o, a) {
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function xe(i, o, a, c) {
      var y = Z(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function Ce(i, o) {
      var a = Te(i, o), c = pe(i);
      if (c === null)
        return a;
      var y = Ce(c, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new T(), M = [], m = 0, d = a; m < d.length; m++) {
        var h = d[m], f = P.has(h);
        f || (P.add(h), M.push(h));
      }
      for (var p = 0, b = y; p < b.length; p++) {
        var h = b[p], f = P.has(h);
        f || (P.add(h), M.push(h));
      }
      return M;
    }
    function Te(i, o) {
      var a = Z(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
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
    function V(i) {
      return i === null;
    }
    function Et(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function At(i, o) {
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
      var a = "string", c = Ue(i, l);
      if (c !== void 0) {
        var y = c.call(i, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return St(i);
    }
    function St(i, o) {
      var a, c;
      {
        var y = i.toString;
        if (oe(y)) {
          var c = y.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (oe(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function ke(i) {
      return !!i;
    }
    function Ot(i) {
      return "" + i;
    }
    function k(i) {
      var o = At(i);
      return Et(o) ? o : Ot(o);
    }
    function Ie(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function oe(i) {
      return typeof i == "function";
    }
    function Ne(i) {
      return typeof i == "function";
    }
    function Mt(i) {
      switch (Re(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function fe(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Ue(i, o) {
      var a = i[o];
      if (a != null) {
        if (!oe(a))
          throw new TypeError();
        return a;
      }
    }
    function De(i) {
      var o = Ue(i, u);
      if (!oe(o))
        throw new TypeError();
      var a = o.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function je(i) {
      return i.value;
    }
    function He(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Le(i) {
      var o = i.return;
      o && o.call(i);
    }
    function pe(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var y = c.constructor;
      return typeof y != "function" || y === i ? o : y;
    }
    function Pt() {
      var i;
      !g(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Tt(t.Reflect));
      var o, a, c, y = new I(), P = {
        registerProvider: M,
        getProvider: d,
        setProvider: f
      };
      return P;
      function M(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case g(o):
            o = p;
            break;
          case o === p:
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
      function m(p, b) {
        if (!g(o)) {
          if (o.isProviderFor(p, b))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(p, b))
              return o;
            if (!g(c))
              for (var A = De(c); ; ) {
                var S = He(A);
                if (!S)
                  return;
                var R = je(S);
                if (R.isProviderFor(p, b))
                  return Le(A), R;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, b))
          return i;
      }
      function d(p, b) {
        var A = y.get(p), S;
        return g(A) || (S = A.get(b)), g(S) && (S = m(p, b), g(S) || (g(A) && (A = new C(), y.set(p, A)), A.set(b, S))), S;
      }
      function h(p) {
        if (g(p))
          throw new TypeError();
        return o === p || a === p || !g(c) && c.has(p);
      }
      function f(p, b, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = d(p, b);
        if (S !== A) {
          if (!g(S))
            return !1;
          var R = y.get(p);
          g(R) && (R = new C(), y.set(p, R)), R.set(b, A);
        }
        return !0;
      }
    }
    function xt() {
      var i;
      return !g(G) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[G]), g(i) && (i = Pt()), !g(G) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ct(i) {
      var o = new I(), a = {
        isProviderFor: function(h, f) {
          var p = o.get(h);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return se.registerProvider(a), a;
      function c(h, f, p) {
        var b = o.get(h), A = !1;
        if (g(b)) {
          if (!p)
            return;
          b = new C(), o.set(h, b), A = !0;
        }
        var S = b.get(f);
        if (g(S)) {
          if (!p)
            return;
          if (S = new C(), b.set(f, S), !i.setProvider(h, f, a))
            throw b.delete(f), A && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        return g(b) ? !1 : ke(b.has(h));
      }
      function P(h, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g(b))
          return b.get(h);
      }
      function M(h, f, p, b) {
        var A = c(
          p,
          b,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function m(h, f) {
        var p = [], b = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(b))
          return p;
        for (var A = b.keys(), S = De(A), R = 0; ; ) {
          var ze = He(S);
          if (!ze)
            return p.length = R, p;
          var Nt = je(ze);
          try {
            p[R] = Nt;
          } catch (Ut) {
            try {
              Le(S);
            } finally {
              throw Ut;
            }
          }
          R++;
        }
      }
      function d(h, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (g(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var A = o.get(f);
          g(A) || (A.delete(p), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Tt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, P = i.deleteMetadata, M = new I(), m = {
        isProviderFor: function(d, h) {
          var f = M.get(d);
          return !g(f) && f.has(h) ? !0 : y(d, h).length ? (g(f) && (f = new T(), M.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function Z(i, o, a) {
      var c = se.getProvider(i, o);
      if (!g(c))
        return c;
      if (a) {
        if (se.setProvider(i, o, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function Rt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function m(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, m.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, m;
        }()
      ), c = (
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
          }), m.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, m.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, m.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, fe(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(d, h) {
            if (!fe(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (fe(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return c;
      function y(m, d) {
        return m;
      }
      function P(m, d) {
        return d;
      }
      function M(m, d) {
        return [m, d];
      }
    }
    function kt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new C();
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
          }, o.prototype[u] = function() {
            return this.keys();
          }, o;
        }()
      );
      return i;
    }
    function It() {
      var i = 16, o = $.create(), a = c();
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
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
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
          d = "@@WeakMap@@" + m();
        while ($.has(o, d));
        return o[d] = !0, d;
      }
      function y(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: $.create() });
        }
        return d[a];
      }
      function P(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function M(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, d), h;
        }
        return P(new Array(d), d);
      }
      function m() {
        var d = M(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ve(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Be || (Be = {}));
function Ht(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Lt(r) {
  return function(e) {
    if (Ht(r)) {
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
  return Lt(r);
}
function Gt(r) {
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
        var E;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const $ = new CSSStyleSheet(), w = (E = l.sheet) == null ? void 0 : E.cssRules;
          w && (Array.from(w).forEach((C) => $.insertRule(C.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          v.appendChild($);
        }
        u.forEach(($) => {
          const w = $.cloneNode(!0);
          v.appendChild(w);
        });
      }
    }
    return t;
  };
}
function Vt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Bt(r) {
  return function(e, t) {
    try {
      Vt(r);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function ce(r) {
  return Bt(r);
}
var K;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(K || (K = {}));
var W;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(W || (W = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis, be = ae.ShadowRoot && (ae.ShadyCSS === void 0 || ae.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, we = Symbol(), We = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== we) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (be && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = We.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && We.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (r) => new ot(typeof r == "string" ? r : r + "", void 0, we), Ft = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ot(t, r, we);
}, qt = (r, e) => {
  if (be) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ae.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = be ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Wt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zt, defineProperty: Xt, getOwnPropertyDescriptor: Yt, getOwnPropertyNames: Jt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, U = globalThis, qe = U.trustedTypes, er = qe ? qe.emptyScript : "", ye = U.reactiveElementPolyfillSupport, Y = (r, e) => r, le = { toAttribute(r, e) {
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
} }, $e = (r, e) => !Zt(r, e), Ze = { attribute: !0, type: String, converter: le, reflect: !1, useDefault: !1, hasChanged: $e };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), U.litPropertyMetadata ?? (U.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let B = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Xt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Yt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const e = Kt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const t = this.properties, n = [...Jt(t), ...Qt(t)];
      for (const s of n) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, s] of t) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const s = this._$Eu(t, n);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const s of n) t.unshift(Fe(s));
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
    return qt(e, this.constructor.elementStyles), e;
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
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : le).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), v = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : le;
      this._$Em = s;
      const E = v.fromAttribute(t, _.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = _.getPropertyOptions(e)), !((n.hasChanged ?? $e)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: _ } = u, v = this[l];
        _ !== !0 || this._$AL.has(l) || v === void 0 || this.C(l, void 0, u, v);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(t)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[Y("elementProperties")] = /* @__PURE__ */ new Map(), B[Y("finalized")] = /* @__PURE__ */ new Map(), ye == null || ye({ ReactiveElement: B }), (U.reactiveElementVersions ?? (U.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, Xe = (r) => r, ue = J.trustedTypes, Ye = ue ? ue.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, at = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, lt = "?" + N, tr = `<${lt}>`, L = document, ee = () => L.createComment(""), te = (r) => r === null || typeof r != "object" && typeof r != "function", Ee = Array.isArray, rr = (r) => Ee(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, D = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, ut = /^(?:script|style|textarea|title)$/i, nr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ir = nr(1), F = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), tt = /* @__PURE__ */ new WeakMap(), j = L.createTreeWalker(L, 129);
function ct(r, e) {
  if (!Ee(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = X;
  for (let _ = 0; _ < t; _++) {
    const v = r[_];
    let E, $, w = -1, C = 0;
    for (; C < v.length && (u.lastIndex = C, $ = u.exec(v), $ !== null); ) C = u.lastIndex, u === X ? $[1] === "!--" ? u = Je : $[1] !== void 0 ? u = Qe : $[2] !== void 0 ? (ut.test($[2]) && (s = RegExp("</" + $[2], "g")), u = D) : $[3] !== void 0 && (u = D) : u === D ? $[0] === ">" ? (u = s ?? X, w = -1) : $[1] === void 0 ? w = -2 : (w = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? D : $[3] === '"' ? et : Ke) : u === et || u === Ke ? u = D : u === Je || u === Qe ? u = X : (u = D, s = void 0);
    const T = u === D && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === X ? v + tr : w >= 0 ? (n.push(E), v.slice(0, w) + at + v.slice(w) + N + T) : v + N + (w === -2 ? _ : T);
  }
  return [ct(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class re {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, v = this.parts, [E, $] = sr(e, t);
    if (this.el = re.createElement(E, n), j.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = j.nextNode()) !== null && v.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(at)) {
          const C = $[u++], T = s.getAttribute(w).split(N), I = /([.?@])?(.*)/.exec(C);
          v.push({ type: 1, index: l, name: I[2], strings: T, ctor: I[1] === "." ? ar : I[1] === "?" ? lr : I[1] === "@" ? ur : de }), s.removeAttribute(w);
        } else w.startsWith(N) && (v.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ut.test(s.tagName)) {
          const w = s.textContent.split(N), C = w.length - 1;
          if (C > 0) {
            s.textContent = ue ? ue.emptyScript : "";
            for (let T = 0; T < C; T++) s.append(w[T], ee()), j.nextNode(), v.push({ type: 2, index: ++l });
            s.append(w[C], ee());
          }
        }
      } else if (s.nodeType === 8) if (s.data === lt) v.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(N, w + 1)) !== -1; ) v.push({ type: 7, index: l }), w += N.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = L.createElement("template");
    return n.innerHTML = e, n;
  }
}
function q(r, e, t = r, n) {
  var u, _;
  if (e === F) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = te(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = q(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? L).importNode(t, !0);
    j.currentNode = s;
    let l = j.nextNode(), u = 0, _ = 0, v = n[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let E;
        v.type === 2 ? E = new ne(l, l.nextSibling, this, e) : v.type === 1 ? E = new v.ctor(l, v.name, v.strings, this, e) : v.type === 6 && (E = new cr(l, this, e)), this._$AV.push(E), v = n[++_];
      }
      u !== (v == null ? void 0 : v.index) && (l = j.nextNode(), u++);
    }
    return j.currentNode = L, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ne {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = q(this, e, t), te(e) ? e === x || e == null || e === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : e !== this._$AH && e !== F && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : rr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== x && te(this._$AH) ? this._$AA.nextSibling.data = e : this.T(L.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = re.createElement(ct(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new or(s, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = tt.get(e.strings);
    return t === void 0 && tt.set(e.strings, t = new re(e)), t;
  }
  k(e) {
    Ee(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new ne(this.O(ee()), this.O(ee()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Xe(e).nextSibling;
      Xe(e).remove(), e = s;
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
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = x;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = q(this, e, t, 0), u = !te(e) || e !== this._$AH && e !== F, u && (this._$AH = e);
    else {
      const _ = e;
      let v, E;
      for (e = l[0], v = 0; v < l.length - 1; v++) E = q(this, _[n + v], t, v), E === F && (E = this._$AH[v]), u || (u = !te(E) || E !== this._$AH[v]), E === x ? e = x : e !== x && (e += (E ?? "") + l[v + 1]), this._$AH[v] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends de {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === x ? void 0 : e;
  }
}
class lr extends de {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== x);
  }
}
class ur extends de {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = q(this, e, t, 0) ?? x) === F) return;
    const n = this._$AH, s = e === x && n !== x || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== x && (n === x || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class cr {
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
const ge = J.litHtmlPolyfillSupport;
ge == null || ge(re, ne), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.3.3");
const dr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new ne(e.insertBefore(ee(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis;
class Q extends B {
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
    return F;
  }
}
var st;
Q._$litElement$ = !0, Q.finalized = !0, (st = H.litElementHydrateSupport) == null || st.call(H, { LitElement: Q });
const me = H.litElementPolyfillSupport;
me == null || me({ LitElement: Q });
(H.litElementVersions ?? (H.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: $e }, fr = (r = hr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(_) {
      const v = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(u, v, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, r, _), _;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(_) {
      const v = this[u];
      e.call(this, _), this.requestUpdate(u, v, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Ae(r) {
  return (e, t) => typeof t == "object" ? fr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var pr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, ie = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? vr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && pr(e, t, s), s;
};
const rt = () => window.zeroThemeManager, nt = {
  kind: "generic",
  templateHtml: [
    "<div style='position:relative;width:100%;'>",
    "<div style='display:block;margin-bottom:8px;font-size:0.9rem;color:var(--uiv-primary-color, #6366f1);letter-spacing:2px;text-transform:uppercase;'>{{display:label}}</div>",
    "<div style='width:100%;padding:12px 16px;background:var(--uiv-surface-color, #ffffff);border:2px solid var(--uiv-border-color, rgba(128,128,128,0.2));border-radius:8px;color:var(--uiv-text-color, #1e293b);font-size:1rem;box-shadow:0 2px 4px rgba(0,0,0,0.05);box-sizing:border-box;'>{{display:placeholder}}</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Glow", "Effect"]
};
function it(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let z = class extends Q {
  constructor() {
    super(...arguments), this.label = "Glow Input", this.value = "", this.disabled = !1, this.onInputEvent = "input";
  }
  static getStudioTemplate(r) {
    var l, u;
    if (!r) return nt;
    const e = it(r.studio.display.label || "Glow Input"), t = it(r.studio.display.placeholder || "Enter text..."), n = ((l = r.props) == null ? void 0 : l.glowColor) ?? ((u = r.studio.props) == null ? void 0 : u.glowColor), s = n || "var(--uiv-primary-color, #6366f1)";
    return {
      ...nt,
      templateHtml: [
        "<div style='position:relative;width:100%;'>",
        `<div style='display:block;margin-bottom:8px;font-size:0.9rem;color:${s};letter-spacing:2px;text-transform:uppercase;'>${e}</div>`,
        `<div style='width:100%;padding:12px 16px;background:var(--uiv-surface-color, #ffffff);border:2px solid var(--uiv-border-color, rgba(128,128,128,0.2));border-radius:8px;color:var(--uiv-text-color, #1e293b);font-size:1rem;box-shadow:0 0 10px ${s};box-sizing:border-box;'>${t}</div>`,
        "</div>"
      ].join("")
    };
  }
  handleInput(r) {
    if (this.disabled) return;
    const e = r.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = rt()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const r = (e = rt()) == null ? void 0 : e.getActiveTheme();
    return ir`
            <style>
                ${r ? r.getGlobalStyles() : ""}
            </style>
            <div class="input-group ${r == null ? void 0 : r.id}-theme">
                <div class="label uiv-${r == null ? void 0 : r.id}-text">${this.label}</div>
                <input 
                    type="text" 
                    class="uiv-${r == null ? void 0 : r.id}-card uiv-${r == null ? void 0 : r.id}-scan"
                    .value="${this.value}" 
                    ?disabled="${this.disabled}"
                    @input="${this.handleInput}"
                >
            </div>
        `;
  }
};
z.styles = Ft`
        :host {
            display: block;
            margin-bottom: 20px;
            --inp-p: var(--uiv-primary-color, var(--uiv-status-primary));
            --inp-s: var(--uiv-secondary-color, var(--uiv-status-secondary));
            --inp-t: var(--uiv-text-color, var(--uiv-text-primary-themed));
            --inp-bg: var(--uiv-surface-color, var(--uiv-app-input-bg, #ffffff));
            --inp-border: var(--uiv-border-color, var(--uiv-app-border-color, rgba(128,128,128,0.2)));
            --glow: var(--uiv-border-glow, 0 0 10px var(--uiv-app-accent-transparent, rgba(99, 102, 241, 0.2)));
            --glow-intensity: var(--uiv-glow-intensity, 1);
        }

        .input-group {
            position: relative;
        }

        input {
            width: 100%;
            padding: 12px 16px;
            background: var(--inp-bg);
            border: 2px solid var(--inp-border);
            border-radius: 8px;
            color: var(--inp-t);
            font-size: 1rem;
            outline: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        input:focus {
            border-color: var(--inp-p);
            box-shadow: 0 0 0 calc(4px * var(--glow-intensity)) var(--uiv-app-accent-transparent, rgba(99, 102, 241, 0.1)),
                        var(--glow);
            transform: translateY(-2px);
        }

        .label {
            display: block;
            margin-bottom: 8px;
            font-size: 0.9rem;
            color: var(--inp-p);
            letter-spacing: 2px;
            text-transform: uppercase;
        }
    `;
ie([
  Ae({ type: String }),
  ce({
    attributeType: W.PROPERTY,
    uiComponentType: K.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], z.prototype, "label", 2);
ie([
  Ae({ type: String }),
  ce({
    attributeType: W.PROPERTY,
    uiComponentType: K.TEXT_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], z.prototype, "value", 2);
ie([
  Ae({ type: Boolean }),
  ce({
    attributeType: W.PROPERTY,
    uiComponentType: K.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], z.prototype, "disabled", 2);
ie([
  ce({
    attributeType: W.EVENT,
    eventTrigger: "input",
    displayLabel: "On Input"
  })
], z.prototype, "onInputEvent", 2);
z = ie([
  zt({
    name: "zero-uiv-input-glow",
    version: "1.0.0",
    title: "Radiant Glow Input",
    elementSelector: "zero-uiv-input-glow",
    group: "Uiverse Inputs",
    iconName: "input-icon.png"
  }),
  Gt()
], z);
export {
  z as ZeroUivInputGlow
};
