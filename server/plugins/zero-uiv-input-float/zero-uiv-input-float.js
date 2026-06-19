var Ut = Object.defineProperty;
var jt = (n, e, t) => e in n ? Ut(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ge = (n, e, t) => jt(n, typeof e != "symbol" ? e + "" : e, t);
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
(function(n) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ve == "object" ? Ve : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = s(n);
    typeof t.Reflect < "u" && (r = s(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = n);
    function s(p, E) {
      return function(w, $) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: $ }), E && E(w, $);
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
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, E = !_ && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ve(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return ve({ __proto__: null });
      } : function() {
        return ve({});
      },
      has: E ? function(i, o) {
        return r.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: E ? function(i, o) {
        return r.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, $ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : xt(), x = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Rt(), N = typeof WeakMap == "function" ? WeakMap : kt(), G = s ? Symbol.for("@reflect-metadata:registry") : void 0, se = Pt(), Se = Ct(se);
    function ct(i, o, a, c) {
      if (m(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!Ie(o))
          throw new TypeError();
        return bt(i, o);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(c) && !m(c) && !V(c))
          throw new TypeError();
        return V(c) && (c = void 0), a = k(a), $t(i, o, a, c);
      }
    }
    e("decorate", ct);
    function dt(i, o) {
      function a(c, y) {
        if (!M(c))
          throw new TypeError();
        if (!m(y) && !Mt(y))
          throw new TypeError();
        Ce(i, o, c, y);
      }
      return a;
    }
    e("metadata", dt);
    function ht(i, o, a, c) {
      if (!M(a))
        throw new TypeError();
      return m(c) || (c = k(c)), Ce(i, o, a, c);
    }
    e("defineMetadata", ht);
    function ft(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Me(i, o, a);
    }
    e("hasMetadata", ft);
    function pt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = k(a)), he(i, o, a);
    }
    e("hasOwnMetadata", pt);
    function vt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Oe(i, o, a);
    }
    e("getMetadata", vt);
    function yt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Pe(i, o, a);
    }
    e("getOwnMetadata", yt);
    function _t(i, o) {
      if (!M(i))
        throw new TypeError();
      return m(o) || (o = k(o)), Te(i, o);
    }
    e("getMetadataKeys", _t);
    function mt(i, o) {
      if (!M(i))
        throw new TypeError();
      return m(o) || (o = k(o)), xe(i, o);
    }
    e("getOwnMetadataKeys", mt);
    function gt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      if (m(a) || (a = k(a)), !M(o))
        throw new TypeError();
      m(a) || (a = k(a));
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", gt);
    function bt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], y = c(o);
        if (!m(y) && !V(y)) {
          if (!Ie(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function $t(i, o, a, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var P = i[y], O = P(o, a, c);
        if (!m(O) && !V(O)) {
          if (!M(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Me(i, o, a) {
      var c = he(i, o, a);
      if (c)
        return !0;
      var y = pe(o);
      return V(y) ? !1 : Me(i, y, a);
    }
    function he(i, o, a) {
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : ke(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Oe(i, o, a) {
      var c = he(i, o, a);
      if (c)
        return Pe(i, o, a);
      var y = pe(o);
      if (!V(y))
        return Oe(i, y, a);
    }
    function Pe(i, o, a) {
      var c = Z(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
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
    function Te(i, o) {
      var a = xe(i, o), c = pe(i);
      if (c === null)
        return a;
      var y = Te(c, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var P = new x(), O = [], g = 0, d = a; g < d.length; g++) {
        var h = d[g], f = P.has(h);
        f || (P.add(h), O.push(h));
      }
      for (var v = 0, b = y; v < b.length; v++) {
        var h = b[v], f = P.has(h);
        f || (P.add(h), O.push(h));
      }
      return O;
    }
    function xe(i, o) {
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
    function m(i) {
      return i === void 0;
    }
    function V(i) {
      return i === null;
    }
    function wt(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Et(i, o) {
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
        if (M(y))
          throw new TypeError();
        return y;
      }
      return At(i);
    }
    function At(i, o) {
      var a, c;
      {
        var y = i.toString;
        if (oe(y)) {
          var c = y.call(i);
          if (!M(c))
            return c;
        }
        var a = i.valueOf;
        if (oe(a)) {
          var c = a.call(i);
          if (!M(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function ke(i) {
      return !!i;
    }
    function St(i) {
      return "" + i;
    }
    function k(i) {
      var o = Et(i);
      return wt(o) ? o : St(o);
    }
    function Ne(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function oe(i) {
      return typeof i == "function";
    }
    function Ie(i) {
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
    function je(i) {
      var o = Ue(i, u);
      if (!oe(o))
        throw new TypeError();
      var a = o.call(i);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function De(i) {
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
      if (typeof i != "function" || i === $ || o !== $)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var y = c.constructor;
      return typeof y != "function" || y === i ? o : y;
    }
    function Ot() {
      var i;
      !m(G) && typeof t.Reflect < "u" && !(G in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Tt(t.Reflect));
      var o, a, c, y = new N(), P = {
        registerProvider: O,
        getProvider: d,
        setProvider: f
      };
      return P;
      function O(v) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case m(o):
            o = v;
            break;
          case o === v:
            break;
          case m(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            c === void 0 && (c = new x()), c.add(v);
            break;
        }
      }
      function g(v, b) {
        if (!m(o)) {
          if (o.isProviderFor(v, b))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(v, b))
              return o;
            if (!m(c))
              for (var A = je(c); ; ) {
                var S = He(A);
                if (!S)
                  return;
                var R = De(S);
                if (R.isProviderFor(v, b))
                  return Le(A), R;
              }
          }
        }
        if (!m(i) && i.isProviderFor(v, b))
          return i;
      }
      function d(v, b) {
        var A = y.get(v), S;
        return m(A) || (S = A.get(b)), m(S) && (S = g(v, b), m(S) || (m(A) && (A = new T(), y.set(v, A)), A.set(b, S))), S;
      }
      function h(v) {
        if (m(v))
          throw new TypeError();
        return o === v || a === v || !m(c) && c.has(v);
      }
      function f(v, b, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = d(v, b);
        if (S !== A) {
          if (!m(S))
            return !1;
          var R = y.get(v);
          m(R) && (R = new T(), y.set(v, R)), R.set(b, A);
        }
        return !0;
      }
    }
    function Pt() {
      var i;
      return !m(G) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[G]), m(i) && (i = Ot()), !m(G) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ct(i) {
      var o = new N(), a = {
        isProviderFor: function(h, f) {
          var v = o.get(h);
          return m(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: d
      };
      return se.registerProvider(a), a;
      function c(h, f, v) {
        var b = o.get(h), A = !1;
        if (m(b)) {
          if (!v)
            return;
          b = new T(), o.set(h, b), A = !0;
        }
        var S = b.get(f);
        if (m(S)) {
          if (!v)
            return;
          if (S = new T(), b.set(f, S), !i.setProvider(h, f, a))
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
        return m(b) ? !1 : ke(b.has(h));
      }
      function P(h, f, v) {
        var b = c(
          f,
          v,
          /*Create*/
          !1
        );
        if (!m(b))
          return b.get(h);
      }
      function O(h, f, v, b) {
        var A = c(
          v,
          b,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function g(h, f) {
        var v = [], b = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(b))
          return v;
        for (var A = b.keys(), S = je(A), R = 0; ; ) {
          var ze = He(S);
          if (!ze)
            return v.length = R, v;
          var Nt = De(ze);
          try {
            v[R] = Nt;
          } catch (It) {
            try {
              Le(S);
            } finally {
              throw It;
            }
          }
          R++;
        }
      }
      function d(h, f, v) {
        var b = c(
          f,
          v,
          /*Create*/
          !1
        );
        if (m(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var A = o.get(f);
          m(A) || (A.delete(v), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Tt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, P = i.deleteMetadata, O = new N(), g = {
        isProviderFor: function(d, h) {
          var f = O.get(d);
          return !m(f) && f.has(h) ? !0 : y(d, h).length ? (m(f) && (f = new x(), O.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: P
      };
      return g;
    }
    function Z(i, o, a) {
      var c = se.getProvider(i, o);
      if (!m(c))
        return c;
      if (a) {
        if (se.setProvider(i, o, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function xt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function g(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, g.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, g;
        }()
      ), c = (
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
          }), g.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, g.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, g.prototype.delete = function(d) {
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
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(d, h) {
            if (!fe(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (fe(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function y(g, d) {
        return g;
      }
      function P(g, d) {
        return d;
      }
      function O(g, d) {
        return [g, d];
      }
    }
    function Rt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new T();
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
    function kt() {
      var i = 16, o = w.create(), a = c();
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
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
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
          d = "@@WeakMap@@" + g();
        while (w.has(o, d));
        return o[d] = !0, d;
      }
      function y(d, h) {
        if (!r.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: w.create() });
        }
        return d[a];
      }
      function P(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, d), h;
        }
        return P(new Array(d), d);
      }
      function g() {
        var d = O(i);
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
})(Be || (Be = {}));
function Dt(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function Ht(n) {
  return function(e) {
    if (Dt(n)) {
      const t = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const r = `${n.elementSelector}-${n.version}`;
        if (!customElements.get(r))
          try {
            customElements.define(r, e);
          } catch {
            try {
              customElements.define(r, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, l);
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
function Lt(n) {
  return Ht(n);
}
function zt(n) {
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const w = new CSSStyleSheet(), $ = (E = l.sheet) == null ? void 0 : E.cssRules;
          $ && (Array.from($).forEach((T) => w.insertRule(T.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          p.appendChild(w);
        }
        u.forEach((w) => {
          const $ = w.cloneNode(!0);
          p.appendChild($);
        });
      }
    }
    return t;
  };
}
function Gt(n) {
  var t;
  if (((t = n == null ? void 0 : n.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Vt(n) {
  return function(e, t) {
    try {
      Gt(n);
      const r = Reflect.getMetadata("ZeroAttribute", e) || [];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (n.fieldMappings = n.fieldMappings ?? t);
      }
      r.push(n), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function ce(n) {
  return Vt(n);
}
var K;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker";
})(K || (K = {}));
var F;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(F || (F = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis, be = ae.ShadowRoot && (ae.ShadyCSS === void 0 || ae.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let st = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (be && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Bt = (n) => new st(typeof n == "string" ? n : n + "", void 0, $e), Ft = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((r, s, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[l + 1], n[0]);
  return new st(t, n, $e);
}, Wt = (n, e) => {
  if (be) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), s = ae.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = t.cssText, n.appendChild(r);
  }
}, We = be ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Bt(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qt, defineProperty: Zt, getOwnPropertyDescriptor: Xt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Jt, getPrototypeOf: Qt } = Object, U = globalThis, qe = U.trustedTypes, Kt = qe ? qe.emptyScript : "", ye = U.reactiveElementPolyfillSupport, Y = (n, e) => n, le = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? Kt : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, e) {
  let t = n;
  switch (e) {
    case Boolean:
      t = n !== null;
      break;
    case Number:
      t = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(n);
      } catch {
        t = null;
      }
  }
  return t;
} }, we = (n, e) => !qt(n, e), Ze = { attribute: !0, type: String, converter: le, reflect: !1, useDefault: !1, hasChanged: we };
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
      const r = Symbol(), s = this.getPropertyDescriptor(e, r, t);
      s !== void 0 && Zt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: s, set: l } = Xt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, _, r);
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
      const t = this.properties, r = [...Yt(t), ...Jt(t)];
      for (const s of r) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, s] of t) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const s = this._$Eu(t, r);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const s of r) t.unshift(We(s));
    } else e !== void 0 && t.push(We(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Wt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostConnected) == null ? void 0 : r.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostDisconnected) == null ? void 0 : r.call(t);
    });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$ET(e, t) {
    var l;
    const r = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, r);
    if (s !== void 0 && r.reflect === !0) {
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : le).toAttribute(t, r.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const r = this.constructor, s = r._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = r.getPropertyOptions(s), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : le;
      this._$Em = s;
      const E = p.fromAttribute(t, _.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), r ?? (r = _.getPropertyOptions(e)), !((r.hasChanged ?? we)(l, t) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: s, wrapped: l }, u) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    var r;
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
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((s) => {
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
    (t = this._$EO) == null || t.forEach((r) => {
      var s;
      return (s = r.hostUpdated) == null ? void 0 : s.call(r);
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
const J = globalThis, Xe = (n) => n, ue = J.trustedTypes, Ye = ue ? ue.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, ot = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, at = "?" + I, er = `<${at}>`, L = document, ee = () => L.createComment(""), te = (n) => n === null || typeof n != "object" && typeof n != "function", Ee = Array.isArray, tr = (n) => Ee(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, j = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, lt = /^(?:script|style|textarea|title)$/i, rr = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), nr = rr(1), W = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), tt = /* @__PURE__ */ new WeakMap(), D = L.createTreeWalker(L, 129);
function ut(n, e) {
  if (!Ee(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const ir = (n, e) => {
  const t = n.length - 1, r = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = X;
  for (let _ = 0; _ < t; _++) {
    const p = n[_];
    let E, w, $ = -1, T = 0;
    for (; T < p.length && (u.lastIndex = T, w = u.exec(p), w !== null); ) T = u.lastIndex, u === X ? w[1] === "!--" ? u = Je : w[1] !== void 0 ? u = Qe : w[2] !== void 0 ? (lt.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = j) : w[3] !== void 0 && (u = j) : u === j ? w[0] === ">" ? (u = s ?? X, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? j : w[3] === '"' ? et : Ke) : u === et || u === Ke ? u = j : u === Je || u === Qe ? u = X : (u = j, s = void 0);
    const x = u === j && n[_ + 1].startsWith("/>") ? " " : "";
    l += u === X ? p + er : $ >= 0 ? (r.push(E), p.slice(0, $) + ot + p.slice($) + I + x) : p + I + ($ === -2 ? _ : x);
  }
  return [ut(n, l + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class re {
  constructor({ strings: e, _$litType$: t }, r) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, p = this.parts, [E, w] = ir(e, t);
    if (this.el = re.createElement(E, r), D.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = D.nextNode()) !== null && p.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(ot)) {
          const T = w[u++], x = s.getAttribute($).split(I), N = /([.?@])?(.*)/.exec(T);
          p.push({ type: 1, index: l, name: N[2], strings: x, ctor: N[1] === "." ? or : N[1] === "?" ? ar : N[1] === "@" ? lr : de }), s.removeAttribute($);
        } else $.startsWith(I) && (p.push({ type: 6, index: l }), s.removeAttribute($));
        if (lt.test(s.tagName)) {
          const $ = s.textContent.split(I), T = $.length - 1;
          if (T > 0) {
            s.textContent = ue ? ue.emptyScript : "";
            for (let x = 0; x < T; x++) s.append($[x], ee()), D.nextNode(), p.push({ type: 2, index: ++l });
            s.append($[T], ee());
          }
        }
      } else if (s.nodeType === 8) if (s.data === at) p.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(I, $ + 1)) !== -1; ) p.push({ type: 7, index: l }), $ += I.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const r = L.createElement("template");
    return r.innerHTML = e, r;
  }
}
function q(n, e, t = n, r) {
  var u, _;
  if (e === W) return e;
  let s = r !== void 0 ? (u = t._$Co) == null ? void 0 : u[r] : t._$Cl;
  const l = te(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(n), s._$AT(n, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = s : t._$Cl = s), s !== void 0 && (e = q(n, s._$AS(n, e.values), s, r)), e;
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
    const { el: { content: t }, parts: r } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? L).importNode(t, !0);
    D.currentNode = s;
    let l = D.nextNode(), u = 0, _ = 0, p = r[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let E;
        p.type === 2 ? E = new ne(l, l.nextSibling, this, e) : p.type === 1 ? E = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (E = new ur(l, this, e)), this._$AV.push(E), p = r[++_];
      }
      u !== (p == null ? void 0 : p.index) && (l = D.nextNode(), u++);
    }
    return D.currentNode = L, s;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class ne {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = q(this, e, t), te(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== W && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
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
    const { values: t, _$litType$: r } = e, s = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = re.createElement(ut(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new sr(s, this), _ = u.u(this.options);
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
    let r, s = 0;
    for (const l of e) s === t.length ? t.push(r = new ne(this.O(ee()), this.O(ee()), this, this.options)) : r = t[s], r._$AI(l), s++;
    s < t.length && (this._$AR(r && r._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
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
  constructor(e, t, r, s, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = C;
  }
  _$AI(e, t = this, r, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = q(this, e, t, 0), u = !te(e) || e !== this._$AH && e !== W, u && (this._$AH = e);
    else {
      const _ = e;
      let p, E;
      for (e = l[0], p = 0; p < l.length - 1; p++) E = q(this, _[r + p], t, p), E === W && (E = this._$AH[p]), u || (u = !te(E) || E !== this._$AH[p]), E === C ? e = C : e !== C && (e += (E ?? "") + l[p + 1]), this._$AH[p] = E;
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
  constructor(e, t, r, s, l) {
    super(e, t, r, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = q(this, e, t, 0) ?? C) === W) return;
    const r = this._$AH, s = e === C && r !== C || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, l = e !== C && (r === C || s);
    s && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ur {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    q(this, e);
  }
}
const me = J.litHtmlPolyfillSupport;
me == null || me(re, ne), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.3.3");
const cr = (n, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = r._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = s = new ne(e.insertBefore(ee(), l), l, void 0, t ?? {});
  }
  return s._$AI(n), s;
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
    return W;
  }
}
var it;
Q._$litElement$ = !0, Q.finalized = !0, (it = H.litElementHydrateSupport) == null || it.call(H, { LitElement: Q });
const ge = H.litElementPolyfillSupport;
ge == null || ge({ LitElement: Q });
(H.litElementVersions ?? (H.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: we }, hr = (n = dr, e, t) => {
  const { kind: r, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), l.set(t.name, n), r === "accessor") {
    const { name: u } = t;
    return { set(_) {
      const p = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(u, p, n, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, n, _), _;
    } };
  }
  if (r === "setter") {
    const { name: u } = t;
    return function(_) {
      const p = this[u];
      e.call(this, _), this.requestUpdate(u, p, n, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function Ae(n) {
  return (e, t) => typeof t == "object" ? hr(n, e, t) : ((r, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(n, e, t);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, ie = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? pr(e, t) : e, l = n.length - 1, u; l >= 0; l--)
    (u = n[l]) && (s = (r ? u(e, t, s) : u(s)) || s);
  return r && s && fr(e, t, s), s;
};
const rt = () => window.zeroThemeManager, nt = {
  kind: "generic",
  templateHtml: [
    "<div style='position:relative;width:100%;padding-top:16px;'>",
    "<div style='position:absolute;top:0;left:0;font-size:0.65rem;color:var(--uiv-primary-color,#6366f1);font-weight:600;'>{{display:label}}</div>",
    "<div style='padding:8px 0;border-bottom:2px solid var(--uiv-primary-color,#6366f1);font-size:0.85rem;color:var(--uiv-text-color,#1e293b);'>{{display:placeholder}}</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Float", "Material"]
};
function vr(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let z = class extends Q {
  constructor() {
    super(...arguments), this.label = "Floating Label", this.value = "", this.disabled = !1, this.onInputEvent = "input";
  }
  static getStudioTemplate(n) {
    var _, p;
    if (!n) return nt;
    const e = vr(n.studio.display.label || "Float Label"), t = !!(((_ = n.props) == null ? void 0 : _.value) ?? ((p = n.studio.props) == null ? void 0 : p.value)), r = "var(--uiv-primary-color, #6366f1)";
    return {
      ...nt,
      templateHtml: [
        "<div style='position:relative;padding-top:20px;width:100%;'>",
        `<div style='width:100%;padding:10px 0;font-size:1rem;color:var(--uiv-text-color, #333);border-bottom:2px solid ${t ? r : "var(--uiv-border-color, rgba(128,128,128,0.2))"};'>&nbsp;</div>`,
        `<label style='position:absolute;left:0;transition:all 0.3s;pointer-events:none;color:${t ? r : "var(--uiv-text-muted, #999)"}; top:${t ? "0" : "25px"}; font-size:${t ? "0.75rem" : "1rem"};'>${e}</label>`,
        `<span style='position:absolute;bottom:0;left:0;right:0;height:2px;background:${r};width:${t ? "100%" : "0"};transition:0.4s; z-index:1;'></span>`,
        "</div>"
      ].join("")
    };
  }
  handleInput(n) {
    if (this.disabled) return;
    const e = n.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  connectedCallback() {
    var n;
    super.connectedCallback(), (n = rt()) == null || n.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const n = (e = rt()) == null ? void 0 : e.getActiveTheme();
    return nr`
            <style>
                ${n ? n.getGlobalStyles() : ""}
            </style>
            <div class="floating-group">
                <input 
                    type="text" 
                    .value="${this.value}" 
                    placeholder=" "
                    ?disabled="${this.disabled}"
                    @input="${this.handleInput}"
                >
                <label>${this.label}</label>
                <span class="bar"></span>
            </div>
        `;
  }
};
z.styles = Ft`
        :host {
            display: block;
            margin-bottom: 20px;
            --inp-p: var(--uiv-primary-color, var(--uiv-status-primary));
            --inp-t: var(--uiv-text-color, var(--uiv-text-primary-themed));
            --inp-b: var(--uiv-border-color, var(--uiv-app-border-color, rgba(128,128,128,0.2)));
        }

        .floating-group {
            position: relative;
            padding-top: 20px;
        }

        input {
            width: 100%;
            padding: 10px 0;
            font-size: 1rem;
            color: var(--inp-t);
            border: none;
            border-bottom: 2px solid var(--inp-b);
            outline: none;
            background: transparent;
            transition: border-color 0.3s;
        }

        input:focus {
            border-bottom-color: var(--inp-p);
        }

        label {
            position: absolute;
            top: 25px;
            left: 0;
            color: var(--uiv-text-muted, #999);
            pointer-events: none;
            transition: all 0.3s;
        }

        input:focus ~ label,
        input:not(:placeholder-shown) ~ label {
            top: 0;
            font-size: 0.75rem;
            color: var(--inp-p);
        }

        .bar {
            position: relative;
            display: block;
            width: 100%;
        }

        .bar:before, .bar:after {
            content: '';
            height: 2px;
            width: 0;
            bottom: 0;
            position: absolute;
            background: var(--inp-p);
            transition: 0.4s ease all;
        }

        .bar:before { left: 50%; }
        .bar:after { right: 50%; }

        input:focus ~ .bar:before,
        input:focus ~ .bar:after {
            width: 50%;
        }
    `;
ie([
  Ae({ type: String }),
  ce({
    attributeType: F.PROPERTY,
    uiComponentType: K.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], z.prototype, "label", 2);
ie([
  Ae({ type: String }),
  ce({
    attributeType: F.PROPERTY,
    uiComponentType: K.TEXT_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], z.prototype, "value", 2);
ie([
  Ae({ type: Boolean }),
  ce({
    attributeType: F.PROPERTY,
    uiComponentType: K.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], z.prototype, "disabled", 2);
ie([
  ce({
    attributeType: F.EVENT,
    eventTrigger: "input",
    displayLabel: "On Input"
  })
], z.prototype, "onInputEvent", 2);
z = ie([
  Lt({
    name: "zero-uiv-input-float",
    version: "1.0.0",
    title: "Floating Label Input",
    elementSelector: "zero-uiv-input-float",
    group: "Uiverse Inputs",
    iconName: "input-icon.png"
  }),
  zt()
], z);
export {
  z as ZeroUivInputFloat,
  nt as floatTemplate
};
