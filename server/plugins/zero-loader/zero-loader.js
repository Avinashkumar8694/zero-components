var It = Object.defineProperty;
var jt = (i, e, t) => e in i ? It(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Ge = (i, e, t) => jt(i, typeof e != "symbol" ? e + "" : e, t);
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
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = s(i);
    typeof t.Reflect < "u" && (r = s(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function s(y, E) {
      return function(w, $) {
        Object.defineProperty(y, w, { configurable: !0, writable: !0, value: $ }), E && E(w, $);
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
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !_ && !y, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return _e(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return _e({ __proto__: null });
      } : function() {
        return _e({});
      },
      has: E ? function(n, o) {
        return r.call(n, o);
      } : function(n, o) {
        return o in n;
      },
      get: E ? function(n, o) {
        return r.call(n, o) ? n[o] : void 0;
      } : function(n, o) {
        return n[o];
      }
    }, $ = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Rt(), U = typeof WeakMap == "function" ? WeakMap : kt(), q = s ? Symbol.for("@reflect-metadata:registry") : void 0, le = Ct(), Oe = Mt(le);
    function ct(n, o, a, c) {
      if (m(a)) {
        if (!ze(n))
          throw new TypeError();
        if (!Ie(o))
          throw new TypeError();
        return bt(n, o);
      } else {
        if (!ze(n))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !m(c) && !Y(c))
          throw new TypeError();
        return Y(c) && (c = void 0), a = N(a), $t(n, o, a, c);
      }
    }
    e("decorate", ct);
    function dt(n, o) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!m(v) && !Ot(v))
          throw new TypeError();
        Pe(n, o, c, v);
      }
      return a;
    }
    e("metadata", dt);
    function ht(n, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return m(c) || (c = N(c)), Pe(n, o, a, c);
    }
    e("defineMetadata", ht);
    function ft(n, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = N(a)), xe(n, o, a);
    }
    e("hasMetadata", ft);
    function pt(n, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = N(a)), pe(n, o, a);
    }
    e("hasOwnMetadata", pt);
    function yt(n, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = N(a)), Ce(n, o, a);
    }
    e("getMetadata", yt);
    function vt(n, o, a) {
      if (!O(o))
        throw new TypeError();
      return m(a) || (a = N(a)), Me(n, o, a);
    }
    e("getOwnMetadata", vt);
    function _t(n, o) {
      if (!O(n))
        throw new TypeError();
      return m(o) || (o = N(o)), Te(n, o);
    }
    e("getMetadataKeys", _t);
    function mt(n, o) {
      if (!O(n))
        throw new TypeError();
      return m(o) || (o = N(o)), Re(n, o);
    }
    e("getOwnMetadataKeys", mt);
    function gt(n, o, a) {
      if (!O(o))
        throw new TypeError();
      if (m(a) || (a = N(a)), !O(o))
        throw new TypeError();
      m(a) || (a = N(a));
      var c = K(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(n, o, a);
    }
    e("deleteMetadata", gt);
    function bt(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var c = n[a], v = c(o);
        if (!m(v) && !Y(v)) {
          if (!Ie(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function $t(n, o, a, c) {
      for (var v = n.length - 1; v >= 0; --v) {
        var C = n[v], x = C(o, a, c);
        if (!m(x) && !Y(x)) {
          if (!O(x))
            throw new TypeError();
          c = x;
        }
      }
      return c;
    }
    function xe(n, o, a) {
      var c = pe(n, o, a);
      if (c)
        return !0;
      var v = ve(o);
      return Y(v) ? !1 : xe(n, v, a);
    }
    function pe(n, o, a) {
      var c = K(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : Ne(c.OrdinaryHasOwnMetadata(n, o, a));
    }
    function Ce(n, o, a) {
      var c = pe(n, o, a);
      if (c)
        return Me(n, o, a);
      var v = ve(o);
      if (!Y(v))
        return Ce(n, v, a);
    }
    function Me(n, o, a) {
      var c = K(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(n, o, a);
    }
    function Pe(n, o, a, c) {
      var v = K(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(n, o, a, c);
    }
    function Te(n, o) {
      var a = Re(n, o), c = ve(n);
      if (c === null)
        return a;
      var v = Te(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var C = new T(), x = [], g = 0, d = a; g < d.length; g++) {
        var h = d[g], f = C.has(h);
        f || (C.add(h), x.push(h));
      }
      for (var p = 0, b = v; p < b.length; p++) {
        var h = b[p], f = C.has(h);
        f || (C.add(h), x.push(h));
      }
      return x;
    }
    function Re(n, o) {
      var a = K(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function ke(n) {
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
    function m(n) {
      return n === void 0;
    }
    function Y(n) {
      return n === null;
    }
    function wt(n) {
      return typeof n == "symbol";
    }
    function O(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function Et(n, o) {
      switch (ke(n)) {
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
      var a = "string", c = je(n, l);
      if (c !== void 0) {
        var v = c.call(n, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return At(n);
    }
    function At(n, o) {
      var a, c;
      {
        var v = n.toString;
        if (ue(v)) {
          var c = v.call(n);
          if (!O(c))
            return c;
        }
        var a = n.valueOf;
        if (ue(a)) {
          var c = a.call(n);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ne(n) {
      return !!n;
    }
    function St(n) {
      return "" + n;
    }
    function N(n) {
      var o = Et(n);
      return wt(o) ? o : St(o);
    }
    function ze(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function ue(n) {
      return typeof n == "function";
    }
    function Ie(n) {
      return typeof n == "function";
    }
    function Ot(n) {
      switch (ke(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ye(n, o) {
      return n === o || n !== n && o !== o;
    }
    function je(n, o) {
      var a = n[o];
      if (a != null) {
        if (!ue(a))
          throw new TypeError();
        return a;
      }
    }
    function Ue(n) {
      var o = je(n, u);
      if (!ue(o))
        throw new TypeError();
      var a = o.call(n);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function He(n) {
      return n.value;
    }
    function De(n) {
      var o = n.next();
      return o.done ? !1 : o;
    }
    function Le(n) {
      var o = n.return;
      o && o.call(n);
    }
    function ve(n) {
      var o = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === $ || o !== $)
        return o;
      var a = n.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === n ? o : v;
    }
    function xt() {
      var n;
      !m(q) && typeof t.Reflect < "u" && !(q in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = Pt(t.Reflect));
      var o, a, c, v = new U(), C = {
        registerProvider: x,
        getProvider: d,
        setProvider: f
      };
      return C;
      function x(p) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === p:
            break;
          case m(o):
            o = p;
            break;
          case o === p:
            break;
          case m(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new T()), c.add(p);
            break;
        }
      }
      function g(p, b) {
        if (!m(o)) {
          if (o.isProviderFor(p, b))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(p, b))
              return o;
            if (!m(c))
              for (var A = Ue(c); ; ) {
                var S = De(A);
                if (!S)
                  return;
                var R = He(S);
                if (R.isProviderFor(p, b))
                  return Le(A), R;
              }
          }
        }
        if (!m(n) && n.isProviderFor(p, b))
          return n;
      }
      function d(p, b) {
        var A = v.get(p), S;
        return m(A) || (S = A.get(b)), m(S) && (S = g(p, b), m(S) || (m(A) && (A = new P(), v.set(p, A)), A.set(b, S))), S;
      }
      function h(p) {
        if (m(p))
          throw new TypeError();
        return o === p || a === p || !m(c) && c.has(p);
      }
      function f(p, b, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = d(p, b);
        if (S !== A) {
          if (!m(S))
            return !1;
          var R = v.get(p);
          m(R) && (R = new P(), v.set(p, R)), R.set(b, A);
        }
        return !0;
      }
    }
    function Ct() {
      var n;
      return !m(q) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[q]), m(n) && (n = xt()), !m(q) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, q, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Mt(n) {
      var o = new U(), a = {
        isProviderFor: function(h, f) {
          var p = o.get(h);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: d
      };
      return le.registerProvider(a), a;
      function c(h, f, p) {
        var b = o.get(h), A = !1;
        if (m(b)) {
          if (!p)
            return;
          b = new P(), o.set(h, b), A = !0;
        }
        var S = b.get(f);
        if (m(S)) {
          if (!p)
            return;
          if (S = new P(), b.set(f, S), !n.setProvider(h, f, a))
            throw b.delete(f), A && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        return m(b) ? !1 : Ne(b.has(h));
      }
      function C(h, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m(b))
          return b.get(h);
      }
      function x(h, f, p, b) {
        var A = c(
          p,
          b,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function g(h, f) {
        var p = [], b = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(b))
          return p;
        for (var A = b.keys(), S = Ue(A), R = 0; ; ) {
          var Be = De(S);
          if (!Be)
            return p.length = R, p;
          var Nt = He(Be);
          try {
            p[R] = Nt;
          } catch (zt) {
            try {
              Le(S);
            } finally {
              throw zt;
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
        if (m(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var A = o.get(f);
          m(A) || (A.delete(p), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Pt(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, c = n.getOwnMetadata, v = n.getOwnMetadataKeys, C = n.deleteMetadata, x = new U(), g = {
        isProviderFor: function(d, h) {
          var f = x.get(d);
          return !m(f) && f.has(h) ? !0 : v(d, h).length ? (m(f) && (f = new T(), x.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return g;
    }
    function K(n, o, a) {
      var c = le.getProvider(n, o);
      if (!m(c))
        return c;
      if (a) {
        if (le.setProvider(n, o, Oe))
          return Oe;
        throw new Error("Illegal state.");
      }
    }
    function Tt() {
      var n = {}, o = [], a = (
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
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
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
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ye(d, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, x);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(d, h) {
            if (!ye(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ye(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function v(g, d) {
        return g;
      }
      function C(g, d) {
        return d;
      }
      function x(g, d) {
        return [g, d];
      }
    }
    function Rt() {
      var n = (
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
      return n;
    }
    function kt() {
      var n = 16, o = w.create(), a = c();
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
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var p = v(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
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
          d = "@@WeakMap@@" + g();
        while (w.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, h) {
        if (!r.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: w.create() });
        }
        return d[a];
      }
      function C(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function x(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, d), h;
        }
        return C(new Array(d), d);
      }
      function g() {
        var d = x(n);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < n; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function _e(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Ve || (Ve = {}));
function Ut(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function Ht(i) {
  return function(e) {
    if (Ut(i)) {
      const t = {
        version: i.version,
        name: i.name,
        title: i.title,
        selector: i.elementSelector,
        category: i.group,
        icon: i.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const r = `${i.elementSelector}-${i.version}`;
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
function Dt(i) {
  return Ht(i);
}
function Lt(i) {
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const w = new CSSStyleSheet(), $ = (E = l.sheet) == null ? void 0 : E.cssRules;
          $ && (Array.from($).forEach((P) => w.insertRule(P.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          y.appendChild(w);
        }
        u.forEach((w) => {
          const $ = w.cloneNode(!0);
          y.appendChild($);
        });
      }
    }
    return t;
  };
}
function Bt(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Gt(i) {
  return function(e, t) {
    try {
      Bt(i);
      const r = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (i.fieldMappings = i.fieldMappings ?? t);
      }
      r.push(i), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function L(i) {
  return Gt(i);
}
var z;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select", i.POPUP_DROPDOWN = "popup-dropdown", i.LAYOUT_PICKER = "layout-picker", i.RESPONSIVE_OVERRIDE = "responsive-override", i.IMAGE_PICKER = "image-picker", i.CHIPS = "chips";
})(z || (z = {}));
var I;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(I || (I = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = globalThis, we = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let st = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (i) => new st(typeof i == "string" ? i : i + "", void 0, Ee), Vt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((r, s, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + i[l + 1], i[0]);
  return new st(t, i, Ee);
}, Ft = (i, e) => {
  if (we) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), s = ce.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = t.cssText, i.appendChild(r);
  }
}, qe = we ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Wt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qt, defineProperty: Yt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Xt, getOwnPropertySymbols: Jt, getPrototypeOf: Qt } = Object, D = globalThis, Ye = D.trustedTypes, Kt = Ye ? Ye.emptyScript : "", me = D.reactiveElementPolyfillSupport, te = (i, e) => i, de = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? Kt : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, e) {
  let t = i;
  switch (e) {
    case Boolean:
      t = i !== null;
      break;
    case Number:
      t = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(i);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ae = (i, e) => !qt(i, e), Ze = { attribute: !0, type: String, converter: de, reflect: !1, useDefault: !1, hasChanged: Ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(e, r, t);
      s !== void 0 && Yt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: s, set: l } = Zt(this.prototype, e) ?? { get() {
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
    if (this.hasOwnProperty(te("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(te("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(te("properties"))) {
      const t = this.properties, r = [...Xt(t), ...Jt(t)];
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
      for (const s of r) t.unshift(qe(s));
    } else e !== void 0 && t.push(qe(e));
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
    return Ft(e, this.constructor.elementStyles), e;
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
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : de).toAttribute(t, r.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const r = this.constructor, s = r._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = r.getPropertyOptions(s), y = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : de;
      this._$Em = s;
      const E = y.fromAttribute(t, _.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), r ?? (r = _.getPropertyOptions(e)), !((r.hasChanged ?? Ae)(l, t) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, r)))) return;
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
        const { wrapped: _ } = u, y = this[l];
        _ !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[te("elementProperties")] = /* @__PURE__ */ new Map(), X[te("finalized")] = /* @__PURE__ */ new Map(), me == null || me({ ReactiveElement: X }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re = globalThis, Xe = (i) => i, he = re.trustedTypes, Je = he ? he.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ot = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, at = "?" + H, er = `<${at}>`, F = document, ie = () => F.createComment(""), se = (i) => i === null || typeof i != "object" && typeof i != "function", Se = Array.isArray, tr = (i) => Se(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", ge = `[ 	
\f\r]`, ee = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, G = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, lt = /^(?:script|style|textarea|title)$/i, rr = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), Z = rr(1), J = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), W = F.createTreeWalker(F, 129);
function ut(i, e) {
  if (!Se(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const nr = (i, e) => {
  const t = i.length - 1, r = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = ee;
  for (let _ = 0; _ < t; _++) {
    const y = i[_];
    let E, w, $ = -1, P = 0;
    for (; P < y.length && (u.lastIndex = P, w = u.exec(y), w !== null); ) P = u.lastIndex, u === ee ? w[1] === "!--" ? u = Qe : w[1] !== void 0 ? u = Ke : w[2] !== void 0 ? (lt.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = G) : w[3] !== void 0 && (u = G) : u === G ? w[0] === ">" ? (u = s ?? ee, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? G : w[3] === '"' ? tt : et) : u === tt || u === et ? u = G : u === Qe || u === Ke ? u = ee : (u = G, s = void 0);
    const T = u === G && i[_ + 1].startsWith("/>") ? " " : "";
    l += u === ee ? y + er : $ >= 0 ? (r.push(E), y.slice(0, $) + ot + y.slice($) + H + T) : y + H + ($ === -2 ? _ : T);
  }
  return [ut(i, l + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class oe {
  constructor({ strings: e, _$litType$: t }, r) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, y = this.parts, [E, w] = nr(e, t);
    if (this.el = oe.createElement(E, r), W.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = W.nextNode()) !== null && y.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(ot)) {
          const P = w[u++], T = s.getAttribute($).split(H), U = /([.?@])?(.*)/.exec(P);
          y.push({ type: 1, index: l, name: U[2], strings: T, ctor: U[1] === "." ? sr : U[1] === "?" ? or : U[1] === "@" ? ar : fe }), s.removeAttribute($);
        } else $.startsWith(H) && (y.push({ type: 6, index: l }), s.removeAttribute($));
        if (lt.test(s.tagName)) {
          const $ = s.textContent.split(H), P = $.length - 1;
          if (P > 0) {
            s.textContent = he ? he.emptyScript : "";
            for (let T = 0; T < P; T++) s.append($[T], ie()), W.nextNode(), y.push({ type: 2, index: ++l });
            s.append($[P], ie());
          }
        }
      } else if (s.nodeType === 8) if (s.data === at) y.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(H, $ + 1)) !== -1; ) y.push({ type: 7, index: l }), $ += H.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const r = F.createElement("template");
    return r.innerHTML = e, r;
  }
}
function Q(i, e, t = i, r) {
  var u, _;
  if (e === J) return e;
  let s = r !== void 0 ? (u = t._$Co) == null ? void 0 : u[r] : t._$Cl;
  const l = se(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(i), s._$AT(i, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = s : t._$Cl = s), s !== void 0 && (e = Q(i, s._$AS(i, e.values), s, r)), e;
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
    const { el: { content: t }, parts: r } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? F).importNode(t, !0);
    W.currentNode = s;
    let l = W.nextNode(), u = 0, _ = 0, y = r[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new ae(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new lr(l, this, e)), this._$AV.push(E), y = r[++_];
      }
      u !== (y == null ? void 0 : y.index) && (l = W.nextNode(), u++);
    }
    return W.currentNode = F, s;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class ae {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, s) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = Q(this, e, t), se(e) ? e === M || e == null || e === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : e !== this._$AH && e !== J && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== M && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(F.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: r } = e, s = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = oe.createElement(ut(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ir(s, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new oe(e)), t;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, s = 0;
    for (const l of e) s === t.length ? t.push(r = new ae(this.O(ie()), this.O(ie()), this, this.options)) : r = t[s], r._$AI(l), s++;
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
class fe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, s, l) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = M;
  }
  _$AI(e, t = this, r, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = Q(this, e, t, 0), u = !se(e) || e !== this._$AH && e !== J, u && (this._$AH = e);
    else {
      const _ = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = Q(this, _[r + y], t, y), E === J && (E = this._$AH[y]), u || (u = !se(E) || E !== this._$AH[y]), E === M ? e = M : e !== M && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class sr extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === M ? void 0 : e;
  }
}
class or extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== M);
  }
}
class ar extends fe {
  constructor(e, t, r, s, l) {
    super(e, t, r, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Q(this, e, t, 0) ?? M) === J) return;
    const r = this._$AH, s = e === M && r !== M || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, l = e !== M && (r === M || s);
    s && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class lr {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Q(this, e);
  }
}
const be = re.litHtmlPolyfillSupport;
be == null || be(oe, ae), (re.litHtmlVersions ?? (re.litHtmlVersions = [])).push("3.3.3");
const ur = (i, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = r._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = s = new ae(e.insertBefore(ie(), l), l, void 0, t ?? {});
  }
  return s._$AI(i), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = globalThis;
class ne extends X {
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
    return J;
  }
}
var it;
ne._$litElement$ = !0, ne.finalized = !0, (it = V.litElementHydrateSupport) == null || it.call(V, { LitElement: ne });
const $e = V.litElementPolyfillSupport;
$e == null || $e({ LitElement: ne });
(V.litElementVersions ?? (V.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = (i) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(i, e);
  }) : customElements.define(i, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ae }, hr = (i = dr, e, t) => {
  const { kind: r, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), r === "setter" && ((i = Object.create(i)).wrapped = !0), l.set(t.name, i), r === "accessor") {
    const { name: u } = t;
    return { set(_) {
      const y = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(u, y, i, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, i, _), _;
    } };
  }
  if (r === "setter") {
    const { name: u } = t;
    return function(_) {
      const y = this[u];
      e.call(this, _), this.requestUpdate(u, y, i, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function B(i) {
  return (e, t) => typeof t == "object" ? hr(i, e, t) : ((r, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(i, e, t);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, j = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? pr(e, t) : e, l = i.length - 1, u; l >= 0; l--)
    (u = i[l]) && (s = (r ? u(e, t, s) : u(s)) || s);
  return r && s && fr(e, t, s), s;
};
const nt = {
  kind: "generic",
  slots: [
    { id: "content", label: "Custom Content", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='display:flex;flex-direction:column;align-items:center;gap:12px;padding:24px;border-radius:12px;border:1px solid rgba(148,163,184,0.15);background:rgba(255,255,255,0.95);'>",
    "<div style='width:36px;height:36px;border:3px solid rgba(0,0,0,0.1);border-top-color:var(--uiv-status-primary,#3b82f6);border-radius:50%;'></div>",
    "<span style='font-size:0.8rem;color:var(--uiv-text-muted,#64748b);'>{{display:text}}</span>",
    "<div style='width:100%;min-height:24px;border:1px dashed rgba(148,163,184,0.25);border-radius:6px;padding:4px;'>",
    "<zero-studio-slot name='content'></zero-studio-slot>",
    "</div>",
    "</div>"
  ].join(""),
  textProp: "text",
  badges: ["Feedback", "Loader"]
};
let k = class extends ne {
  constructor() {
    super(...arguments), this.text = "Loading...", this.icon = "", this.fullScreen = !1, this.image = "", this.backgroundColor = "transparent", this.spinnerColor = "#3b82f6", this.textColor = "#475569", this.size = 48;
  }
  static getStudioTemplate(i) {
    if (!i) return nt;
    const e = yr(i.studio.display.text || "Loading...");
    return {
      ...nt,
      templateHtml: [
        "<div style='display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:32px;font-family:inherit;'>",
        "<div style='width:36px;height:36px;border:3px solid rgba(0,0,0,0.1);border-top-color:var(--uiv-primary-color, #3b82f6);border-radius:50%;'></div>",
        `<div style='font-size:14px;color:var(--uiv-text-muted, #64748b);font-weight:500;margin-top:8px;'>${e}</div>`,
        "<div style='width:100%;min-height:30px;border:2px dashed rgba(148,163,184,0.3);border-radius:8px;padding:8px;margin-top:10px;'>",
        "<zero-studio-slot name='content'></zero-studio-slot>",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  render() {
    const i = [
      `--zero-spinner-color: ${this.spinnerColor}`,
      `--zero-text-color: ${this.textColor}`,
      `--zero-spinner-size: ${this.size}px`
    ].join(";"), e = this.fullScreen ? `background-color: ${this.backgroundColor || "var(--uiv-bg-surface, #ffffff)"}` : `background-color: ${this.backgroundColor}`;
    return Z`
      <div style=${i}>
        <div class="loader-container" style=${e}>
          <div class="spinner">
            ${this.image ? Z`<img src="${this.image}" style="width: 100%; height: 100%; object-fit: contain;" />` : this.icon ? Z`<span class="spinner-icon">${this.icon}</span>` : Z`<div class="spinner-circle"></div>`}
          </div>
          ${this.text ? Z`<p class="loader-text">${this.text}</p>` : Z``}
          <div class="custom-content" style="width: 100%;">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    `;
  }
};
k.styles = Vt`
    :host {
      display: inline-block;
      width: 100%;
    }

    :host([full-screen]) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .loader-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 32px;
      border-radius: var(--zero-radius-md, 12px);
      transition: background-color 0.3s ease;
    }

    :host([full-screen]) .loader-container {
      padding: 64px;
    }

    .spinner {
      display: inline-block;
      width: var(--zero-spinner-size, 48px);
      height: var(--zero-spinner-size, 48px);
    }
    
    .spinner-icon {
      font-size: var(--zero-spinner-size, 48px);
      line-height: 1;
      display: block;
      animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .spinner-circle {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 4px solid var(--zero-spinner-track, rgba(0, 0, 0, 0.1));
      border-top-color: var(--zero-spinner-color, var(--uiv-status-primary, #3b82f6));
      animation: spin 1s linear infinite;
    }

    .loader-text {
      font-family: var(--zero-font-family, system-ui, sans-serif);
      font-size: var(--zero-font-size, 16px);
      font-weight: 500;
      color: var(--zero-text-color, var(--uiv-text-muted, #475569));
      text-align: center;
      margin: 0;
    }

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: .7;
        transform: scale(0.9);
      }
    }
  `;
j([
  B({ type: String }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Loading Text",
    fieldMappings: "text"
  })
], k.prototype, "text", 2);
j([
  B({ type: String }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Icon (Emoji)",
    fieldMappings: "icon"
  })
], k.prototype, "icon", 2);
j([
  B({ type: Boolean, attribute: "full-screen", reflect: !0 }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.CHECKBOX,
    displayLabel: "Full Screen Overlay",
    fieldMappings: "fullScreen"
  })
], k.prototype, "fullScreen", 2);
j([
  B({ type: String, attribute: "image" }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Image URL",
    fieldMappings: "image"
  })
], k.prototype, "image", 2);
j([
  B({ type: String, attribute: "background-color" }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor"
  })
], k.prototype, "backgroundColor", 2);
j([
  B({ type: String, attribute: "spinner-color" }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.COLOR_PICKER,
    displayLabel: "Spinner Color",
    fieldMappings: "spinnerColor"
  })
], k.prototype, "spinnerColor", 2);
j([
  B({ type: String, attribute: "text-color" }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.COLOR_PICKER,
    displayLabel: "Text Color",
    fieldMappings: "textColor"
  })
], k.prototype, "textColor", 2);
j([
  B({ type: Number }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.NUMBER_INPUT,
    displayLabel: "Spinner Size (px)",
    fieldMappings: "size"
  })
], k.prototype, "size", 2);
k = j([
  Dt({
    name: "zero-loader",
    version: "1.0.0",
    title: "Loader",
    elementSelector: "zero-loader",
    group: "Feedback",
    iconName: "loader-icon.png"
  }),
  Lt(),
  cr("zero-loader")
], k);
function yr(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  k as ZeroLoader,
  nt as studioTemplate
};
