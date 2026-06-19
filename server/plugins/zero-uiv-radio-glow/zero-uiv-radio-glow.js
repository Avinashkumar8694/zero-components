var Ht = Object.defineProperty;
var Dt = (r, e, t) => e in r ? Ht(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => Dt(r, typeof e != "symbol" ? e + "" : e, t);
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
var We;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Be == "object" ? Be : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, $) {
      return function(E, w) {
        Object.defineProperty(p, E, { configurable: !0, writable: !0, value: w }), $ && $(E, w);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, $ = !_ && !p, E = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ve(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return ve({ __proto__: null });
      } : function() {
        return ve({});
      },
      has: $ ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: $ ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, w = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Rt(), N = typeof WeakMap == "function" ? WeakMap : Nt(), G = s ? Symbol.for("@reflect-metadata:registry") : void 0, se = Ct(), Se = Pt(se);
    function dt(i, o, a, c) {
      if (g(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!Ue(o))
          throw new TypeError();
        return wt(i, o);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !g(c) && !B(c))
          throw new TypeError();
        return B(c) && (c = void 0), a = R(a), $t(i, o, a, c);
      }
    }
    e("decorate", dt);
    function ht(i, o) {
      function a(c, y) {
        if (!O(c))
          throw new TypeError();
        if (!g(y) && !Mt(y))
          throw new TypeError();
        Ce(i, o, c, y);
      }
      return a;
    }
    e("metadata", ht);
    function ft(i, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return g(c) || (c = R(c)), Ce(i, o, a, c);
    }
    e("defineMetadata", ft);
    function pt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = R(a)), Oe(i, o, a);
    }
    e("hasMetadata", pt);
    function vt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = R(a)), he(i, o, a);
    }
    e("hasOwnMetadata", vt);
    function yt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = R(a)), Me(i, o, a);
    }
    e("getMetadata", yt);
    function _t(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = R(a)), xe(i, o, a);
    }
    e("getOwnMetadata", _t);
    function gt(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = R(o)), Pe(i, o);
    }
    e("getMetadataKeys", gt);
    function mt(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = R(o)), ke(i, o);
    }
    e("getOwnMetadataKeys", mt);
    function bt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      if (g(a) || (a = R(a)), !O(o))
        throw new TypeError();
      g(a) || (a = R(a));
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
        if (!g(y) && !B(y)) {
          if (!Ue(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function $t(i, o, a, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var x = i[y], M = x(o, a, c);
        if (!g(M) && !B(M)) {
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
      return B(y) ? !1 : Oe(i, y, a);
    }
    function he(i, o, a) {
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Re(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Me(i, o, a) {
      var c = he(i, o, a);
      if (c)
        return xe(i, o, a);
      var y = pe(o);
      if (!B(y))
        return Me(i, y, a);
    }
    function xe(i, o, a) {
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ce(i, o, a, c) {
      var y = Z(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function Pe(i, o) {
      var a = ke(i, o), c = pe(i);
      if (c === null)
        return a;
      var y = Pe(c, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var x = new k(), M = [], m = 0, d = a; m < d.length; m++) {
        var h = d[m], f = x.has(h);
        f || (x.add(h), M.push(h));
      }
      for (var v = 0, b = y; v < b.length; v++) {
        var h = b[v], f = x.has(h);
        f || (x.add(h), M.push(h));
      }
      return M;
    }
    function ke(i, o) {
      var a = Z(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
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
    function B(i) {
      return i === null;
    }
    function Et(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function At(i, o) {
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
      var a = "string", c = je(i, l);
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
    function Re(i) {
      return !!i;
    }
    function Ot(i) {
      return "" + i;
    }
    function R(i) {
      var o = At(i);
      return Et(o) ? o : Ot(o);
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
    function Mt(i) {
      switch (Te(i)) {
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
    function je(i, o) {
      var a = i[o];
      if (a != null) {
        if (!oe(a))
          throw new TypeError();
        return a;
      }
    }
    function He(i) {
      var o = je(i, u);
      if (!oe(o))
        throw new TypeError();
      var a = o.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function De(i) {
      return i.value;
    }
    function Ie(i) {
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
    function xt() {
      var i;
      !g(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = kt(t.Reflect));
      var o, a, c, y = new N(), x = {
        registerProvider: M,
        getProvider: d,
        setProvider: f
      };
      return x;
      function M(v) {
        if (!Object.isExtensible(x))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case g(o):
            o = v;
            break;
          case o === v:
            break;
          case g(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            c === void 0 && (c = new k()), c.add(v);
            break;
        }
      }
      function m(v, b) {
        if (!g(o)) {
          if (o.isProviderFor(v, b))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(v, b))
              return o;
            if (!g(c))
              for (var A = He(c); ; ) {
                var S = Ie(A);
                if (!S)
                  return;
                var T = De(S);
                if (T.isProviderFor(v, b))
                  return Le(A), T;
              }
          }
        }
        if (!g(i) && i.isProviderFor(v, b))
          return i;
      }
      function d(v, b) {
        var A = y.get(v), S;
        return g(A) || (S = A.get(b)), g(S) && (S = m(v, b), g(S) || (g(A) && (A = new P(), y.set(v, A)), A.set(b, S))), S;
      }
      function h(v) {
        if (g(v))
          throw new TypeError();
        return o === v || a === v || !g(c) && c.has(v);
      }
      function f(v, b, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = d(v, b);
        if (S !== A) {
          if (!g(S))
            return !1;
          var T = y.get(v);
          g(T) && (T = new P(), y.set(v, T)), T.set(b, A);
        }
        return !0;
      }
    }
    function Ct() {
      var i;
      return !g(G) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[G]), g(i) && (i = xt()), !g(G) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
      var o = new N(), a = {
        isProviderFor: function(h, f) {
          var v = o.get(h);
          return g(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: x,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return se.registerProvider(a), a;
      function c(h, f, v) {
        var b = o.get(h), A = !1;
        if (g(b)) {
          if (!v)
            return;
          b = new P(), o.set(h, b), A = !0;
        }
        var S = b.get(f);
        if (g(S)) {
          if (!v)
            return;
          if (S = new P(), b.set(f, S), !i.setProvider(h, f, a))
            throw b.delete(f), A && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, f, v) {
        var b = c(
          f,
          v,
          /*Create*/
          !1
        );
        return g(b) ? !1 : Re(b.has(h));
      }
      function x(h, f, v) {
        var b = c(
          f,
          v,
          /*Create*/
          !1
        );
        if (!g(b))
          return b.get(h);
      }
      function M(h, f, v, b) {
        var A = c(
          v,
          b,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function m(h, f) {
        var v = [], b = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(b))
          return v;
        for (var A = b.keys(), S = He(A), T = 0; ; ) {
          var ze = Ie(S);
          if (!ze)
            return v.length = T, v;
          var Ut = De(ze);
          try {
            v[T] = Ut;
          } catch (jt) {
            try {
              Le(S);
            } finally {
              throw jt;
            }
          }
          T++;
        }
      }
      function d(h, f, v) {
        var b = c(
          f,
          v,
          /*Create*/
          !1
        );
        if (g(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var A = o.get(f);
          g(A) || (A.delete(v), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function kt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, x = i.deleteMetadata, M = new N(), m = {
        isProviderFor: function(d, h) {
          var f = M.get(d);
          return !g(f) && f.has(h) ? !0 : y(d, h).length ? (g(f) && (f = new k(), M.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: x
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
    function Tt() {
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
              for (var f = this._keys.length, v = h + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, fe(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, x);
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
      function x(m, d) {
        return d;
      }
      function M(m, d) {
        return [m, d];
      }
    }
    function Rt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new P();
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
    function Nt() {
      var i = 16, o = E.create(), a = c();
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
            return f !== void 0 ? E.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? E.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var v = y(
              h,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
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
        while (E.has(o, d));
        return o[d] = !0, d;
      }
      function y(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: E.create() });
        }
        return d[a];
      }
      function x(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function M(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : x(h, d), h;
        }
        return x(new Array(d), d);
      }
      function m() {
        var d = M(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var v = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ve(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(We || (We = {}));
function It(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Lt(r) {
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
        var $;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const E = new CSSStyleSheet(), w = ($ = l.sheet) == null ? void 0 : $.cssRules;
          w && (Array.from(w).forEach((P) => E.insertRule(P.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, E]);
        } else if (l) {
          const E = l.cloneNode(!0);
          p.appendChild(E);
        }
        u.forEach((E) => {
          const w = E.cloneNode(!0);
          p.appendChild(w);
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
function Wt(r) {
  return function(e, t) {
    try {
      Bt(r);
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
  return Wt(r);
}
var K;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(K || (K = {}));
var V;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(V || (V = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis, be = ae.ShadowRoot && (ae.ShadyCSS === void 0 || ae.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, we = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
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
      n && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Vt = (r) => new ot(typeof r == "string" ? r : r + "", void 0, we), Ft = (r, ...e) => {
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
  return Vt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zt, defineProperty: Xt, getOwnPropertyDescriptor: Yt, getOwnPropertyNames: Jt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, j = globalThis, qe = j.trustedTypes, er = qe ? qe.emptyScript : "", ye = j.reactiveElementPolyfillSupport, Y = (r, e) => r, le = { toAttribute(r, e) {
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
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let W = class extends HTMLElement {
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
      const _ = n.getPropertyOptions(s), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : le;
      this._$Em = s;
      const $ = p.fromAttribute(t, _.type);
      this[s] = $ ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? $, this._$Em = null;
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
        const { wrapped: _ } = u, p = this[l];
        _ !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
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
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[Y("elementProperties")] = /* @__PURE__ */ new Map(), W[Y("finalized")] = /* @__PURE__ */ new Map(), ye == null || ye({ ReactiveElement: W }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, Xe = (r) => r, ue = J.trustedTypes, Ye = ue ? ue.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, at = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, lt = "?" + U, tr = `<${lt}>`, L = document, ee = () => L.createComment(""), te = (r) => r === null || typeof r != "object" && typeof r != "function", Ee = Array.isArray, rr = (r) => Ee(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, H = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, ut = /^(?:script|style|textarea|title)$/i, nr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), tt = nr(1), F = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), D = L.createTreeWalker(L, 129);
function ct(r, e) {
  if (!Ee(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const ir = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = X;
  for (let _ = 0; _ < t; _++) {
    const p = r[_];
    let $, E, w = -1, P = 0;
    for (; P < p.length && (u.lastIndex = P, E = u.exec(p), E !== null); ) P = u.lastIndex, u === X ? E[1] === "!--" ? u = Je : E[1] !== void 0 ? u = Qe : E[2] !== void 0 ? (ut.test(E[2]) && (s = RegExp("</" + E[2], "g")), u = H) : E[3] !== void 0 && (u = H) : u === H ? E[0] === ">" ? (u = s ?? X, w = -1) : E[1] === void 0 ? w = -2 : (w = u.lastIndex - E[2].length, $ = E[1], u = E[3] === void 0 ? H : E[3] === '"' ? et : Ke) : u === et || u === Ke ? u = H : u === Je || u === Qe ? u = X : (u = H, s = void 0);
    const k = u === H && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === X ? p + tr : w >= 0 ? (n.push($), p.slice(0, w) + at + p.slice(w) + U + k) : p + U + (w === -2 ? _ : k);
  }
  return [ct(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class re {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, p = this.parts, [$, E] = ir(e, t);
    if (this.el = re.createElement($, n), D.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = D.nextNode()) !== null && p.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(at)) {
          const P = E[u++], k = s.getAttribute(w).split(U), N = /([.?@])?(.*)/.exec(P);
          p.push({ type: 1, index: l, name: N[2], strings: k, ctor: N[1] === "." ? or : N[1] === "?" ? ar : N[1] === "@" ? lr : de }), s.removeAttribute(w);
        } else w.startsWith(U) && (p.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ut.test(s.tagName)) {
          const w = s.textContent.split(U), P = w.length - 1;
          if (P > 0) {
            s.textContent = ue ? ue.emptyScript : "";
            for (let k = 0; k < P; k++) s.append(w[k], ee()), D.nextNode(), p.push({ type: 2, index: ++l });
            s.append(w[P], ee());
          }
        }
      } else if (s.nodeType === 8) if (s.data === lt) p.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(U, w + 1)) !== -1; ) p.push({ type: 7, index: l }), w += U.length - 1;
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
class sr {
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
    D.currentNode = s;
    let l = D.nextNode(), u = 0, _ = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let $;
        p.type === 2 ? $ = new ne(l, l.nextSibling, this, e) : p.type === 1 ? $ = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && ($ = new ur(l, this, e)), this._$AV.push($), p = n[++_];
      }
      u !== (p == null ? void 0 : p.index) && (l = D.nextNode(), u++);
    }
    return D.currentNode = L, s;
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
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = q(this, e, t), te(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== F && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : rr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && te(this._$AH) ? this._$AA.nextSibling.data = e : this.T(L.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = re.createElement(ct(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new sr(s, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new re(e)), t;
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
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = q(this, e, t, 0), u = !te(e) || e !== this._$AH && e !== F, u && (this._$AH = e);
    else {
      const _ = e;
      let p, $;
      for (e = l[0], p = 0; p < l.length - 1; p++) $ = q(this, _[n + p], t, p), $ === F && ($ = this._$AH[p]), u || (u = !te($) || $ !== this._$AH[p]), $ === C ? e = C : e !== C && (e += ($ ?? "") + l[p + 1]), this._$AH[p] = $;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends de {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class ar extends de {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class lr extends de {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = q(this, e, t, 0) ?? C) === F) return;
    const n = this._$AH, s = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== C && (n === C || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ur {
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
const cr = (r, e, t) => {
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
const I = globalThis;
class Q extends W {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = cr(t, this.renderRoot, this.renderOptions);
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
Q._$litElement$ = !0, Q.finalized = !0, (st = I.litElementHydrateSupport) == null || st.call(I, { LitElement: Q });
const me = I.litElementPolyfillSupport;
me == null || me({ LitElement: Q });
(I.litElementVersions ?? (I.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: $e }, hr = (r = dr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
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
  return (e, t) => typeof t == "object" ? hr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, ie = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? pr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && fr(e, t, s), s;
};
const nt = () => window.zeroThemeManager, it = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
    "<div style='width:20px;height:20px;border-radius:50%;border:2px solid #00d2ff;box-shadow:0 0 10px rgba(0,210,255,0.7);background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;'>",
    "<div style='width:10px;height:10px;border-radius:50%;background:#00d2ff;box-shadow:0 0 8px #00d2ff;'></div>",
    "</div>",
    "<span style='font-size:0.85rem;color:var(--uiv-text-color,#1e293b);font-weight:500;'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Glow", "Special"]
};
function vr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let z = class extends Q {
  constructor() {
    super(...arguments), this.label = "Glow Radio", this.checked = !1, this.disabled = !1, this.onChangeEvent = "change";
  }
  static getStudioTemplate(r) {
    var p, $;
    if (!r) return it;
    const e = vr(r.studio.display.label || "Glow Radio"), t = !!(((p = r.props) == null ? void 0 : p.checked) ?? (($ = r.studio.props) == null ? void 0 : $.checked)), n = "var(--uiv-primary-color, #6366f1)";
    return {
      ...it,
      templateHtml: [
        "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
        `<div style='position:relative;width:22px;height:22px;background:var(--uiv-surface-color, #ffffff);border:2px solid ${t ? n : "var(--uiv-border-color, #e2e8f0)"};border-radius:50%;transition:all 0.3s;${t ? "box-shadow:" + "var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.2))" + "; transform:scale(1.05);" : ""}'>`,
        t ? `<div style='position:absolute;left:5px;top:5px;width:8px;height:8px;background:${n};border-radius:50%;box-shadow:0 0 10px ${n};'></div>` : "",
        "</div>",
        `<span style='font-size:0.95rem;color:var(--uiv-text-color, #1e293b);text-transform:uppercase;letter-spacing:1px;'>${e}</span>`,
        "</div>"
      ].join("")
    };
  }
  handleToggle() {
    this.disabled || (this.checked = !0, this.dispatchEvent(new CustomEvent("change", {
      detail: { checked: this.checked },
      bubbles: !0,
      composed: !0
    })));
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = nt()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const r = (e = nt()) == null ? void 0 : e.getActiveTheme();
    return tt`
            <style>
                ${r ? r.getGlobalStyles() : ""}
            </style>
            <div class="radio-wrapper uiv-${r == null ? void 0 : r.id}-theme ${this.checked ? "checked" : ""} ${this.disabled ? "disabled" : ""}" @click="${this.handleToggle}">
                <div class="radio-circle uiv-${r == null ? void 0 : r.id}-card"></div>
                ${this.label ? tt`<span class="label uiv-${r == null ? void 0 : r.id}-text">${this.label}</span>` : ""}
            </div>
        `;
  }
};
z.styles = Ft`
        :host {
            display: inline-block;
            margin-right: 15px;
            --rad-p: var(--uiv-primary-color, #6366f1);
            --rad-s: var(--uiv-secondary-color, #8b5cf6);
            --rad-bg: var(--uiv-surface-color, #ffffff);
            --rad-t: var(--uiv-text-color, #1e293b);
            --rad-border: var(--uiv-border-color, #e2e8f0);
            --glow: var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.2));
        }

        .radio-wrapper {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
        }

        .radio-circle {
            position: relative;
            width: 22px;
            height: 22px;
            background: var(--rad-bg);
            border: 2px solid var(--rad-border);
            border-radius: 50%;
            margin-right: 12px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
        }

        .checked .radio-circle {
            border-color: var(--rad-p);
            box-shadow: var(--glow);
            transform: scale(1.05);
        }

        .radio-circle::after {
            content: '';
            position: absolute;
            display: none;
            left: 5px;
            top: 5px;
            width: 8px;
            height: 8px;
            background: var(--rad-p);
            border-radius: 50%;
            box-shadow: 0 0 10px var(--rad-p);
        }

        .checked .radio-circle::after {
            display: block;
        }

        .label {
            color: var(--rad-t);
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `;
ie([
  Ae({ type: String }),
  ce({
    attributeType: V.PROPERTY,
    uiComponentType: K.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], z.prototype, "label", 2);
ie([
  Ae({ type: Boolean }),
  ce({
    attributeType: V.PROPERTY,
    uiComponentType: K.CHECKBOX,
    displayLabel: "Checked",
    fieldMappings: "checked"
  })
], z.prototype, "checked", 2);
ie([
  Ae({ type: Boolean }),
  ce({
    attributeType: V.PROPERTY,
    uiComponentType: K.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], z.prototype, "disabled", 2);
ie([
  ce({
    attributeType: V.EVENT,
    eventTrigger: "change",
    displayLabel: "On Change"
  })
], z.prototype, "onChangeEvent", 2);
z = ie([
  zt({
    name: "zero-uiv-radio-glow",
    version: "1.0.0",
    title: "Radiant Glow Radio",
    elementSelector: "zero-uiv-radio-glow",
    group: "Uiverse Radio",
    iconName: "radio-icon.png"
  }),
  Gt()
], z);
export {
  z as ZeroUivRadioGlow,
  it as glowTemplate
};
