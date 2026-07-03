var Dt = Object.defineProperty;
var jt = (r, e, t) => e in r ? Dt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var He = (r, e, t) => jt(r, typeof e != "symbol" ? e + "" : e, t);
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ze;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ie == "object" ? Ie : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, A) {
      return function(b, g) {
        Object.defineProperty(p, b, { configurable: !0, writable: !0, value: g }), A && A(b, g);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !_ && !p, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return de(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return de({ __proto__: null });
      } : function() {
        return de({});
      },
      has: A ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: A ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, g = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : xt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), N = typeof WeakMap == "function" ? WeakMap : Rt(), L = s ? Symbol.for("@reflect-metadata:registry") : void 0, re = Mt(), ge = Pt(re);
    function ut(i, o, a, c) {
      if (m(a)) {
        if (!xe(i))
          throw new TypeError();
        if (!ke(o))
          throw new TypeError();
        return $t(i, o);
      } else {
        if (!xe(i))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !m(c) && !F(c))
          throw new TypeError();
        return F(c) && (c = void 0), a = T(a), wt(i, o, a, c);
      }
    }
    e("decorate", ut);
    function ct(i, o) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!m(v) && !St(v))
          throw new TypeError();
        Se(i, o, c, v);
      }
      return a;
    }
    e("metadata", ct);
    function dt(i, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return m(c) || (c = T(c)), Se(i, o, a, c);
    }
    e("defineMetadata", dt);
    function ht(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = T(a)), be(i, o, a);
    }
    e("hasMetadata", ht);
    function ft(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = T(a)), le(i, o, a);
    }
    e("hasOwnMetadata", ft);
    function pt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = T(a)), Ae(i, o, a);
    }
    e("getMetadata", pt);
    function yt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = T(a)), Ee(i, o, a);
    }
    e("getOwnMetadata", yt);
    function vt(i, o) {
      if (!O(i))
        throw new TypeError();
      return m(o) || (o = T(o)), Oe(i, o);
    }
    e("getMetadataKeys", vt);
    function _t(i, o) {
      if (!O(i))
        throw new TypeError();
      return m(o) || (o = T(o)), Me(i, o);
    }
    e("getOwnMetadataKeys", _t);
    function mt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      if (m(a) || (a = T(a)), !O(o))
        throw new TypeError();
      m(a) || (a = T(a));
      var c = V(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", mt);
    function $t(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!m(v) && !F(v)) {
          if (!ke(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function wt(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], M = P(o, a, c);
        if (!m(M) && !F(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function be(i, o, a) {
      var c = le(i, o, a);
      if (c)
        return !0;
      var v = ce(o);
      return F(v) ? !1 : be(i, v, a);
    }
    function le(i, o, a) {
      var c = V(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : Ce(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Ae(i, o, a) {
      var c = le(i, o, a);
      if (c)
        return Ee(i, o, a);
      var v = ce(o);
      if (!F(v))
        return Ae(i, v, a);
    }
    function Ee(i, o, a) {
      var c = V(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Se(i, o, a, c) {
      var v = V(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function Oe(i, o) {
      var a = Me(i, o), c = ce(i);
      if (c === null)
        return a;
      var v = Oe(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new k(), M = [], $ = 0, d = a; $ < d.length; $++) {
        var h = d[$], f = P.has(h);
        f || (P.add(h), M.push(h));
      }
      for (var y = 0, w = v; y < w.length; y++) {
        var h = w[y], f = P.has(h);
        f || (P.add(h), M.push(h));
      }
      return M;
    }
    function Me(i, o) {
      var a = V(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function Pe(i) {
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
    function gt(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function bt(i, o) {
      switch (Pe(i)) {
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
      var a = "string", c = Re(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return At(i);
    }
    function At(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (ne(v)) {
          var c = v.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (ne(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ce(i) {
      return !!i;
    }
    function Et(i) {
      return "" + i;
    }
    function T(i) {
      var o = bt(i);
      return gt(o) ? o : Et(o);
    }
    function xe(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ne(i) {
      return typeof i == "function";
    }
    function ke(i) {
      return typeof i == "function";
    }
    function St(i) {
      switch (Pe(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ue(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Re(i, o) {
      var a = i[o];
      if (a != null) {
        if (!ne(a))
          throw new TypeError();
        return a;
      }
    }
    function Te(i) {
      var o = Re(i, u);
      if (!ne(o))
        throw new TypeError();
      var a = o.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Ne(i) {
      return i.value;
    }
    function De(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function je(i) {
      var o = i.return;
      o && o.call(i);
    }
    function ce(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === g || o !== g)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Ot() {
      var i;
      !m(L) && typeof t.Reflect < "u" && !(L in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Ct(t.Reflect));
      var o, a, c, v = new N(), P = {
        registerProvider: M,
        getProvider: d,
        setProvider: f
      };
      return P;
      function M(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case m(o):
            o = y;
            break;
          case o === y:
            break;
          case m(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            c === void 0 && (c = new k()), c.add(y);
            break;
        }
      }
      function $(y, w) {
        if (!m(o)) {
          if (o.isProviderFor(y, w))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(y, w))
              return o;
            if (!m(c))
              for (var E = Te(c); ; ) {
                var S = De(E);
                if (!S)
                  return;
                var R = Ne(S);
                if (R.isProviderFor(y, w))
                  return je(E), R;
              }
          }
        }
        if (!m(i) && i.isProviderFor(y, w))
          return i;
      }
      function d(y, w) {
        var E = v.get(y), S;
        return m(E) || (S = E.get(w)), m(S) && (S = $(y, w), m(S) || (m(E) && (E = new x(), v.set(y, E)), E.set(w, S))), S;
      }
      function h(y) {
        if (m(y))
          throw new TypeError();
        return o === y || a === y || !m(c) && c.has(y);
      }
      function f(y, w, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = d(y, w);
        if (S !== E) {
          if (!m(S))
            return !1;
          var R = v.get(y);
          m(R) && (R = new x(), v.set(y, R)), R.set(w, E);
        }
        return !0;
      }
    }
    function Mt() {
      var i;
      return !m(L) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[L]), m(i) && (i = Ot()), !m(L) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
      var o = new N(), a = {
        isProviderFor: function(h, f) {
          var y = o.get(h);
          return m(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: d
      };
      return re.registerProvider(a), a;
      function c(h, f, y) {
        var w = o.get(h), E = !1;
        if (m(w)) {
          if (!y)
            return;
          w = new x(), o.set(h, w), E = !0;
        }
        var S = w.get(f);
        if (m(S)) {
          if (!y)
            return;
          if (S = new x(), w.set(f, S), !i.setProvider(h, f, a))
            throw w.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, y) {
        var w = c(
          f,
          y,
          /*Create*/
          !1
        );
        return m(w) ? !1 : Ce(w.has(h));
      }
      function P(h, f, y) {
        var w = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (!m(w))
          return w.get(h);
      }
      function M(h, f, y, w) {
        var E = c(
          y,
          w,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function $(h, f) {
        var y = [], w = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(w))
          return y;
        for (var E = w.keys(), S = Te(E), R = 0; ; ) {
          var Ue = De(S);
          if (!Ue)
            return y.length = R, y;
          var Tt = Ne(Ue);
          try {
            y[R] = Tt;
          } catch (Nt) {
            try {
              je(S);
            } finally {
              throw Nt;
            }
          }
          R++;
        }
      }
      function d(h, f, y) {
        var w = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (m(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var E = o.get(f);
          m(E) || (E.delete(y), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Ct(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, M = new N(), $ = {
        isProviderFor: function(d, h) {
          var f = M.get(d);
          return !m(f) && f.has(h) ? !0 : v(d, h).length ? (m(f) && (f = new k(), M.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return $;
    }
    function V(i, o, a) {
      var c = re.getProvider(i, o);
      if (!m(c))
        return c;
      if (a) {
        if (re.setProvider(i, o, ge))
          return ge;
        throw new Error("Illegal state.");
      }
    }
    function xt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function $(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[u] = function() {
            return this;
          }, $.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, $.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, $;
        }()
      ), c = (
        /** @class */
        function() {
          function $() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty($.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), $.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, $.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, $.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, $.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, y = h + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, ue(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, $.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, $.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[u] = function() {
            return this.entries();
          }, $.prototype._find = function(d, h) {
            if (!ue(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ue(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return c;
      function v($, d) {
        return $;
      }
      function P($, d) {
        return d;
      }
      function M($, d) {
        return [$, d];
      }
    }
    function kt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new x();
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
    function Rt() {
      var i = 16, o = b.create(), a = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var y = v(
              h,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, d.prototype.delete = function(h) {
            var f = v(
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
          d = "@@WeakMap@@" + $();
        while (b.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: b.create() });
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
      function $() {
        var d = M(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var y = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function de(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(ze || (ze = {}));
function Ut(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ht(r) {
  return function(e) {
    if (Ut(r)) {
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
function It(r) {
  return Ht(r);
}
function zt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        He(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const b = new CSSStyleSheet(), g = (A = l.sheet) == null ? void 0 : A.cssRules;
          g && (Array.from(g).forEach((x) => b.insertRule(x.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          p.appendChild(b);
        }
        u.forEach((b) => {
          const g = b.cloneNode(!0);
          p.appendChild(g);
        });
      }
    }
    return t;
  };
}
var Le;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(Le || (Le = {}));
var Fe;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(Fe || (Fe = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = globalThis, ve = ie.ShadowRoot && (ie.ShadyCSS === void 0 || ie.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, _e = Symbol(), Be = /* @__PURE__ */ new WeakMap();
let nt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== _e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ve && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Be.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Be.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Lt = (r) => new nt(typeof r == "string" ? r : r + "", void 0, _e), Ft = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new nt(t, r, _e);
}, Bt = (r, e) => {
  if (ve) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ie.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Ge = ve ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Lt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gt, defineProperty: Wt, getOwnPropertyDescriptor: Vt, getOwnPropertyNames: Jt, getOwnPropertySymbols: qt, getPrototypeOf: Zt } = Object, j = globalThis, We = j.trustedTypes, Xt = We ? We.emptyScript : "", he = j.reactiveElementPolyfillSupport, q = (r, e) => r, se = { toAttribute(r, e) {
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
} }, me = (r, e) => !Gt(r, e), Ve = { attribute: !0, type: String, converter: se, reflect: !1, useDefault: !1, hasChanged: me };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let B = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ve) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Wt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Vt(this.prototype, e) ?? { get() {
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
    return this.elementProperties.get(e) ?? Ve;
  }
  static _$Ei() {
    if (this.hasOwnProperty(q("elementProperties"))) return;
    const e = Zt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(q("properties"))) {
      const t = this.properties, n = [...Jt(t), ...qt(t)];
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
      for (const s of n) t.unshift(Ge(s));
    } else e !== void 0 && t.push(Ge(e));
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
  _$ET(e, t) {
    var l;
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : se).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : se;
      this._$Em = s;
      const A = p.fromAttribute(t, _.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = _.getPropertyOptions(e)), !((n.hasChanged ?? me)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, n)))) return;
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
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[q("elementProperties")] = /* @__PURE__ */ new Map(), B[q("finalized")] = /* @__PURE__ */ new Map(), he == null || he({ ReactiveElement: B }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z = globalThis, Je = (r) => r, oe = Z.trustedTypes, qe = oe ? oe.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, it = "$lit$", D = `lit$${Math.random().toFixed(9).slice(2)}$`, st = "?" + D, Yt = `<${st}>`, z = document, Y = () => z.createComment(""), Q = (r) => r === null || typeof r != "object" && typeof r != "function", $e = Array.isArray, Qt = (r) => $e(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", fe = `[ 	
\f\r]`, J = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ze = /-->/g, Xe = />/g, U = RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ye = /'/g, Qe = /"/g, ot = /^(?:script|style|textarea|title)$/i, Kt = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), Ke = Kt(1), G = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), H = z.createTreeWalker(z, 129);
function at(r, e) {
  if (!$e(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return qe !== void 0 ? qe.createHTML(e) : e;
}
const er = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = J;
  for (let _ = 0; _ < t; _++) {
    const p = r[_];
    let A, b, g = -1, x = 0;
    for (; x < p.length && (u.lastIndex = x, b = u.exec(p), b !== null); ) x = u.lastIndex, u === J ? b[1] === "!--" ? u = Ze : b[1] !== void 0 ? u = Xe : b[2] !== void 0 ? (ot.test(b[2]) && (s = RegExp("</" + b[2], "g")), u = U) : b[3] !== void 0 && (u = U) : u === U ? b[0] === ">" ? (u = s ?? J, g = -1) : b[1] === void 0 ? g = -2 : (g = u.lastIndex - b[2].length, A = b[1], u = b[3] === void 0 ? U : b[3] === '"' ? Qe : Ye) : u === Qe || u === Ye ? u = U : u === Ze || u === Xe ? u = J : (u = U, s = void 0);
    const k = u === U && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === J ? p + Yt : g >= 0 ? (n.push(A), p.slice(0, g) + it + p.slice(g) + D + k) : p + D + (g === -2 ? _ : k);
  }
  return [at(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class K {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, p = this.parts, [A, b] = er(e, t);
    if (this.el = K.createElement(A, n), H.currentNode = this.el.content, t === 2 || t === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (s = H.nextNode()) !== null && p.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const g of s.getAttributeNames()) if (g.endsWith(it)) {
          const x = b[u++], k = s.getAttribute(g).split(D), N = /([.?@])?(.*)/.exec(x);
          p.push({ type: 1, index: l, name: N[2], strings: k, ctor: N[1] === "." ? rr : N[1] === "?" ? nr : N[1] === "@" ? ir : ae }), s.removeAttribute(g);
        } else g.startsWith(D) && (p.push({ type: 6, index: l }), s.removeAttribute(g));
        if (ot.test(s.tagName)) {
          const g = s.textContent.split(D), x = g.length - 1;
          if (x > 0) {
            s.textContent = oe ? oe.emptyScript : "";
            for (let k = 0; k < x; k++) s.append(g[k], Y()), H.nextNode(), p.push({ type: 2, index: ++l });
            s.append(g[x], Y());
          }
        }
      } else if (s.nodeType === 8) if (s.data === st) p.push({ type: 2, index: l });
      else {
        let g = -1;
        for (; (g = s.data.indexOf(D, g + 1)) !== -1; ) p.push({ type: 7, index: l }), g += D.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = z.createElement("template");
    return n.innerHTML = e, n;
  }
}
function W(r, e, t = r, n) {
  var u, _;
  if (e === G) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = Q(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = W(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? z).importNode(t, !0);
    H.currentNode = s;
    let l = H.nextNode(), u = 0, _ = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new te(l, l.nextSibling, this, e) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (A = new sr(l, this, e)), this._$AV.push(A), p = n[++_];
      }
      u !== (p == null ? void 0 : p.index) && (l = H.nextNode(), u++);
    }
    return H.currentNode = z, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class te {
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
    e = W(this, e, t), Q(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== G && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && Q(this._$AH) ? this._$AA.nextSibling.data = e : this.T(z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = K.createElement(at(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new tr(s, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new K(e)), t;
  }
  k(e) {
    $e(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new te(this.O(Y()), this.O(Y()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Je(e).nextSibling;
      Je(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ae {
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
    if (l === void 0) e = W(this, e, t, 0), u = !Q(e) || e !== this._$AH && e !== G, u && (this._$AH = e);
    else {
      const _ = e;
      let p, A;
      for (e = l[0], p = 0; p < l.length - 1; p++) A = W(this, _[n + p], t, p), A === G && (A = this._$AH[p]), u || (u = !Q(A) || A !== this._$AH[p]), A === C ? e = C : e !== C && (e += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends ae {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class nr extends ae {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class ir extends ae {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = W(this, e, t, 0) ?? C) === G) return;
    const n = this._$AH, s = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== C && (n === C || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class sr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    W(this, e);
  }
}
const pe = Z.litHtmlPolyfillSupport;
pe == null || pe(K, te), (Z.litHtmlVersions ?? (Z.litHtmlVersions = [])).push("3.3.3");
const or = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new te(e.insertBefore(Y(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = globalThis;
class X extends B {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = or(t, this.renderRoot, this.renderOptions);
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
    return G;
  }
}
var rt;
X._$litElement$ = !0, X.finalized = !0, (rt = I.litElementHydrateSupport) == null || rt.call(I, { LitElement: X });
const ye = I.litElementPolyfillSupport;
ye == null || ye({ LitElement: X });
(I.litElementVersions ?? (I.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: se, reflect: !1, hasChanged: me }, lr = (r = ar, e, t) => {
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
function lt(r) {
  return (e, t) => typeof t == "object" ? lr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var ur = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, we = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? cr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && ur(e, t, s), s;
};
const dr = JSON.stringify([
  { name: "Check Up Result.pdf", size: "123 KB" },
  { name: "Dental X-Ray Result 2.pdf", size: "1.2 MB" },
  { name: "Medical Prescriptions.pdf", size: "87 KB" },
  { name: "Dental X-Ray Result.pdf", size: "950 KB" }
]);
function tt(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let ee = class extends X {
  constructor() {
    super(...arguments), this.title = "Files / Documents", this.filesJson = dr;
  }
  static getStudioTemplate(r) {
    var n, s, l, u, _, p;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-files-card-1.0.0></zero-files-card-1.0.0>"
      };
    const e = tt(((n = r == null ? void 0 : r.props) == null ? void 0 : n.title) ?? ((l = (s = r == null ? void 0 : r.studio) == null ? void 0 : s.props) == null ? void 0 : l.title) ?? "Files / Documents"), t = tt(((u = r == null ? void 0 : r.props) == null ? void 0 : u.filesJson) ?? ((p = (_ = r == null ? void 0 : r.studio) == null ? void 0 : _.props) == null ? void 0 : p.filesJson) ?? "[]");
    return {
      kind: "generic",
      templateHtml: `
        <zero-files-card-1.0.0
          title="${e}"
          files-json="${t}"
        ></zero-files-card-1.0.0>
      `
    };
  }
  render() {
    let r = [];
    try {
      r = JSON.parse(this.filesJson);
    } catch {
      r = [];
    }
    return Ke`
      <div class="card">
        <div class="header">
          <h4 class="title">${this.title}</h4>
          <span class="action">Add File</span>
        </div>
        <div class="list">
          ${r.map((e, t) => Ke`
            <div class="item">
              <div class="file-info">
                <span class="icon">📄</span>
                <div class="details">
                  <div class="name">${e.name}</div>
                  <div class="size">${e.size}</div>
                </div>
              </div>
              <div class="actions">
                <span class="btn-icon" title="Download">⬇️</span>
                <span class="btn-icon delete" title="Delete" @click=${() => this._deleteFile(t)}>🗑️</span>
              </div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
  _deleteFile(r) {
    try {
      const t = JSON.parse(this.filesJson).filter((n, s) => s !== r);
      this.filesJson = JSON.stringify(t);
    } catch {
    }
  }
};
ee.styles = Ft`
    :host {
      display: block;
      width: 100%;
    }
    .card {
      padding: 24px;
      border-radius: 16px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
      font-family: inherit;
      display: flex;
      flex-direction: column;
      gap: 16px;
      box-sizing: border-box;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .title {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 700;
      color: #0f172a;
    }
    .action {
      font-size: 0.82rem;
      color: #0ea5e9;
      font-weight: 600;
      cursor: pointer;
    }
    .action:hover {
      text-decoration: underline;
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      transition: all 0.2s;
    }
    .item:hover {
      border-color: #cbd5e1;
      background: #f1f5f9;
    }
    .file-info {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }
    .icon {
      font-size: 1.25rem;
    }
    .details {
      min-width: 0;
    }
    .name {
      font-size: 0.82rem;
      font-weight: 600;
      color: #0f172a;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .size {
      font-size: 0.72rem;
      color: #64748b;
      margin-top: 2px;
    }
    .actions {
      display: flex;
      gap: 8px;
    }
    .btn-icon {
      cursor: pointer;
      color: #64748b;
      font-size: 0.875rem;
      user-select: none;
      transition: color 0.2s;
    }
    .btn-icon:hover {
      color: #0f172a;
    }
    .btn-icon.delete:hover {
      color: #ef4444;
    }
  `;
we([
  lt({ type: String })
], ee.prototype, "title", 2);
we([
  lt({ type: String, attribute: "files-json" })
], ee.prototype, "filesJson", 2);
ee = we([
  It({
    name: "zero-files-card",
    version: "1.0.0",
    title: "Files Card",
    elementSelector: "zero-files-card",
    group: "Dashboard",
    iconName: "card-icon.png"
  }),
  zt()
], ee);
export {
  ee as ZeroFilesCard
};
