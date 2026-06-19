var Dt = Object.defineProperty;
var Ht = (r, e, t) => e in r ? Dt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => Ht(r, typeof e != "symbol" ? e + "" : e, t);
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
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(v, E) {
      return function(w, $) {
        Object.defineProperty(v, w, { configurable: !0, writable: !0, value: $ }), E && E(w, $);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function c() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function _() {
      return l() || c();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", c = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, E = !_ && !v, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return _e(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return _e({ __proto__: null });
      } : function() {
        return _e({});
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
    }, $ = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), P = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Rt(), U = typeof WeakMap == "function" ? WeakMap : Nt(), V = s ? Symbol.for("@reflect-metadata:registry") : void 0, le = Mt(), Ce = xt(le);
    function ht(i, o, a, u) {
      if (g(a)) {
        if (!Ue(i))
          throw new TypeError();
        if (!je(o))
          throw new TypeError();
        return $t(i, o);
      } else {
        if (!Ue(i))
          throw new TypeError();
        if (!C(o))
          throw new TypeError();
        if (!C(u) && !g(u) && !F(u))
          throw new TypeError();
        return F(u) && (u = void 0), a = R(a), wt(i, o, a, u);
      }
    }
    e("decorate", ht);
    function dt(i, o) {
      function a(u, y) {
        if (!C(u))
          throw new TypeError();
        if (!g(y) && !Ot(y))
          throw new TypeError();
        xe(i, o, u, y);
      }
      return a;
    }
    e("metadata", dt);
    function ft(i, o, a, u) {
      if (!C(a))
        throw new TypeError();
      return g(u) || (u = R(u)), xe(i, o, a, u);
    }
    e("defineMetadata", ft);
    function pt(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return g(a) || (a = R(a)), Oe(i, o, a);
    }
    e("hasMetadata", pt);
    function vt(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return g(a) || (a = R(a)), pe(i, o, a);
    }
    e("hasOwnMetadata", vt);
    function yt(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return g(a) || (a = R(a)), ke(i, o, a);
    }
    e("getMetadata", yt);
    function _t(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return g(a) || (a = R(a)), Me(i, o, a);
    }
    e("getOwnMetadata", _t);
    function gt(i, o) {
      if (!C(i))
        throw new TypeError();
      return g(o) || (o = R(o)), Pe(i, o);
    }
    e("getMetadataKeys", gt);
    function mt(i, o) {
      if (!C(i))
        throw new TypeError();
      return g(o) || (o = R(o)), Te(i, o);
    }
    e("getOwnMetadataKeys", mt);
    function bt(i, o, a) {
      if (!C(o))
        throw new TypeError();
      if (g(a) || (a = R(a)), !C(o))
        throw new TypeError();
      g(a) || (a = R(a));
      var u = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : u.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", bt);
    function $t(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var u = i[a], y = u(o);
        if (!g(y) && !F(y)) {
          if (!je(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function wt(i, o, a, u) {
      for (var y = i.length - 1; y >= 0; --y) {
        var k = i[y], O = k(o, a, u);
        if (!g(O) && !F(O)) {
          if (!C(O))
            throw new TypeError();
          u = O;
        }
      }
      return u;
    }
    function Oe(i, o, a) {
      var u = pe(i, o, a);
      if (u)
        return !0;
      var y = ye(o);
      return F(y) ? !1 : Oe(i, y, a);
    }
    function pe(i, o, a) {
      var u = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : Ne(u.OrdinaryHasOwnMetadata(i, o, a));
    }
    function ke(i, o, a) {
      var u = pe(i, o, a);
      if (u)
        return Me(i, o, a);
      var y = ye(o);
      if (!F(y))
        return ke(i, y, a);
    }
    function Me(i, o, a) {
      var u = Q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(u))
        return u.OrdinaryGetOwnMetadata(i, o, a);
    }
    function xe(i, o, a, u) {
      var y = Q(
        a,
        u,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, o, a, u);
    }
    function Pe(i, o) {
      var a = Te(i, o), u = ye(i);
      if (u === null)
        return a;
      var y = Pe(u, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var k = new P(), O = [], m = 0, h = a; m < h.length; m++) {
        var d = h[m], f = k.has(d);
        f || (k.add(d), O.push(d));
      }
      for (var p = 0, b = y; p < b.length; p++) {
        var d = b[p], f = k.has(d);
        f || (k.add(d), O.push(d));
      }
      return O;
    }
    function Te(i, o) {
      var a = Q(
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
    function F(i) {
      return i === null;
    }
    function Et(i) {
      return typeof i == "symbol";
    }
    function C(i) {
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
      var a = "string", u = De(i, l);
      if (u !== void 0) {
        var y = u.call(i, a);
        if (C(y))
          throw new TypeError();
        return y;
      }
      return St(i);
    }
    function St(i, o) {
      var a, u;
      {
        var y = i.toString;
        if (ce(y)) {
          var u = y.call(i);
          if (!C(u))
            return u;
        }
        var a = i.valueOf;
        if (ce(a)) {
          var u = a.call(i);
          if (!C(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Ne(i) {
      return !!i;
    }
    function Ct(i) {
      return "" + i;
    }
    function R(i) {
      var o = At(i);
      return Et(o) ? o : Ct(o);
    }
    function Ue(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ce(i) {
      return typeof i == "function";
    }
    function je(i) {
      return typeof i == "function";
    }
    function Ot(i) {
      switch (Re(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ve(i, o) {
      return i === o || i !== i && o !== o;
    }
    function De(i, o) {
      var a = i[o];
      if (a != null) {
        if (!ce(a))
          throw new TypeError();
        return a;
      }
    }
    function He(i) {
      var o = De(i, c);
      if (!ce(o))
        throw new TypeError();
      var a = o.call(i);
      if (!C(a))
        throw new TypeError();
      return a;
    }
    function Ie(i) {
      return i.value;
    }
    function Le(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function ze(i) {
      var o = i.return;
      o && o.call(i);
    }
    function ye(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || o !== $)
        return o;
      var a = i.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return o;
      var y = u.constructor;
      return typeof y != "function" || y === i ? o : y;
    }
    function kt() {
      var i;
      !g(V) && typeof t.Reflect < "u" && !(V in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Pt(t.Reflect));
      var o, a, u, y = new U(), k = {
        registerProvider: O,
        getProvider: h,
        setProvider: f
      };
      return k;
      function O(p) {
        if (!Object.isExtensible(k))
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
            u === void 0 && (u = new P()), u.add(p);
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
            if (!g(u))
              for (var A = He(u); ; ) {
                var S = Le(A);
                if (!S)
                  return;
                var T = Ie(S);
                if (T.isProviderFor(p, b))
                  return ze(A), T;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, b))
          return i;
      }
      function h(p, b) {
        var A = y.get(p), S;
        return g(A) || (S = A.get(b)), g(S) && (S = m(p, b), g(S) || (g(A) && (A = new x(), y.set(p, A)), A.set(b, S))), S;
      }
      function d(p) {
        if (g(p))
          throw new TypeError();
        return o === p || a === p || !g(u) && u.has(p);
      }
      function f(p, b, A) {
        if (!d(A))
          throw new Error("Metadata provider not registered.");
        var S = h(p, b);
        if (S !== A) {
          if (!g(S))
            return !1;
          var T = y.get(p);
          g(T) && (T = new x(), y.set(p, T)), T.set(b, A);
        }
        return !0;
      }
    }
    function Mt() {
      var i;
      return !g(V) && C(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[V]), g(i) && (i = kt()), !g(V) && C(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, V, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function xt(i) {
      var o = new U(), a = {
        isProviderFor: function(d, f) {
          var p = o.get(d);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: k,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: h
      };
      return le.registerProvider(a), a;
      function u(d, f, p) {
        var b = o.get(d), A = !1;
        if (g(b)) {
          if (!p)
            return;
          b = new x(), o.set(d, b), A = !0;
        }
        var S = b.get(f);
        if (g(S)) {
          if (!p)
            return;
          if (S = new x(), b.set(f, S), !i.setProvider(d, f, a))
            throw b.delete(f), A && o.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(d, f, p) {
        var b = u(
          f,
          p,
          /*Create*/
          !1
        );
        return g(b) ? !1 : Ne(b.has(d));
      }
      function k(d, f, p) {
        var b = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g(b))
          return b.get(d);
      }
      function O(d, f, p, b) {
        var A = u(
          p,
          b,
          /*Create*/
          !0
        );
        A.set(d, f);
      }
      function m(d, f) {
        var p = [], b = u(
          d,
          f,
          /*Create*/
          !1
        );
        if (g(b))
          return p;
        for (var A = b.keys(), S = He(A), T = 0; ; ) {
          var Be = Le(S);
          if (!Be)
            return p.length = T, p;
          var Ut = Ie(Be);
          try {
            p[T] = Ut;
          } catch (jt) {
            try {
              ze(S);
            } finally {
              throw jt;
            }
          }
          T++;
        }
      }
      function h(d, f, p) {
        var b = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (g(b) || !b.delete(d))
          return !1;
        if (b.size === 0) {
          var A = o.get(f);
          g(A) || (A.delete(p), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Pt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, u = i.getOwnMetadata, y = i.getOwnMetadataKeys, k = i.deleteMetadata, O = new U(), m = {
        isProviderFor: function(h, d) {
          var f = O.get(h);
          return !g(f) && f.has(d) ? !0 : y(h, d).length ? (g(f) && (f = new P(), O.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: k
      };
      return m;
    }
    function Q(i, o, a) {
      var u = le.getProvider(i, o);
      if (!g(u))
        return u;
      if (a) {
        if (le.setProvider(i, o, Ce))
          return Ce;
        throw new Error("Illegal state.");
      }
    }
    function Tt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function m(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[c] = function() {
            return this;
          }, m.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, m.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
          }, m;
        }()
      ), u = (
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
          }), m.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, m.prototype.set = function(h, d) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, m.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ve(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, k);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[c] = function() {
            return this.entries();
          }, m.prototype._find = function(h, d) {
            if (!ve(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ve(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return u;
      function y(m, h) {
        return m;
      }
      function k(m, h) {
        return h;
      }
      function O(m, h) {
        return [m, h];
      }
    }
    function Rt() {
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
          }, o.prototype[c] = function() {
            return this.keys();
          }, o;
        }()
      );
      return i;
    }
    function Nt() {
      var i = 16, o = w.create(), a = u();
      return (
        /** @class */
        function() {
          function h() {
            this._key = u();
          }
          return h.prototype.has = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, h.prototype.set = function(d, f) {
            var p = y(
              d,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, h.prototype.delete = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = u();
          }, h;
        }()
      );
      function u() {
        var h;
        do
          h = "@@WeakMap@@" + m();
        while (w.has(o, h));
        return o[h] = !0, h;
      }
      function y(h, d) {
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: w.create() });
        }
        return h[a];
      }
      function k(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function O(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : k(d, h), d;
        }
        return k(new Array(h), h);
      }
      function m() {
        var h = O(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var p = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function _e(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
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
function Bt(r) {
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
        const l = document.querySelector('style.global-style[type="text/css"]'), c = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const w = new CSSStyleSheet(), $ = (E = l.sheet) == null ? void 0 : E.cssRules;
          $ && (Array.from($).forEach((x) => w.insertRule(x.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          v.appendChild(w);
        }
        c.forEach((w) => {
          const $ = w.cloneNode(!0);
          v.appendChild($);
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
function J(r) {
  return Wt(r);
}
var B;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(B || (B = {}));
var H;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(H || (H = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, we = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Vt = (r) => new ot(typeof r == "string" ? r : r + "", void 0, Ee), Ft = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ot(t, r, Ee);
}, qt = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ue.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, qe = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Vt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zt, defineProperty: Yt, getOwnPropertyDescriptor: Xt, getOwnPropertyNames: Jt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, D = globalThis, Ze = D.trustedTypes, er = Ze ? Ze.emptyScript : "", ge = D.reactiveElementPolyfillSupport, ee = (r, e) => r, he = { toAttribute(r, e) {
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
} }, Ae = (r, e) => !Zt(r, e), Ye = { attribute: !0, type: String, converter: he, reflect: !1, useDefault: !1, hasChanged: Ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ye) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Yt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Xt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(c) {
      this[t] = c;
    } };
    return { get: s, set(c) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, c), this.requestUpdate(e, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ye;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Kt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
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
      for (const s of n) t.unshift(qe(s));
    } else e !== void 0 && t.push(qe(e));
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
      const c = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : he).toAttribute(t, n.type);
      this._$Em = e, c == null ? this.removeAttribute(s) : this.setAttribute(s, c), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, c;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), v = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : he;
      this._$Em = s;
      const E = v.fromAttribute(t, _.type);
      this[s] = E ?? ((c = this._$Ej) == null ? void 0 : c.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var c;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = _.getPropertyOptions(e)), !((n.hasChanged ?? Ae)(l, t) || n.useDefault && n.reflect && l === ((c = this._$Ej) == null ? void 0 : c.get(e)) && !this.hasAttribute(_._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: s, wrapped: l }, c) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, c ?? t ?? this[e]), l !== !0 || c !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, c] of this._$Ep) this[l] = c;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, c] of s) {
        const { wrapped: _ } = c, v = this[l];
        _ !== !0 || this._$AL.has(l) || v === void 0 || this.C(l, void 0, c, v);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[ee("elementProperties")] = /* @__PURE__ */ new Map(), Z[ee("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: Z }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Xe = (r) => r, de = te.trustedTypes, Je = de ? de.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, at = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, lt = "?" + j, tr = `<${lt}>`, G = document, ne = () => G.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Se = Array.isArray, rr = (r) => Se(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, I = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, ct = /^(?:script|style|textarea|title)$/i, nr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), q = nr(1), Y = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), L = G.createTreeWalker(G, 129);
function ut(r, e) {
  if (!Se(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const ir = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", c = K;
  for (let _ = 0; _ < t; _++) {
    const v = r[_];
    let E, w, $ = -1, x = 0;
    for (; x < v.length && (c.lastIndex = x, w = c.exec(v), w !== null); ) x = c.lastIndex, c === K ? w[1] === "!--" ? c = Qe : w[1] !== void 0 ? c = Ke : w[2] !== void 0 ? (ct.test(w[2]) && (s = RegExp("</" + w[2], "g")), c = I) : w[3] !== void 0 && (c = I) : c === I ? w[0] === ">" ? (c = s ?? K, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = c.lastIndex - w[2].length, E = w[1], c = w[3] === void 0 ? I : w[3] === '"' ? tt : et) : c === tt || c === et ? c = I : c === Qe || c === Ke ? c = K : (c = I, s = void 0);
    const P = c === I && r[_ + 1].startsWith("/>") ? " " : "";
    l += c === K ? v + tr : $ >= 0 ? (n.push(E), v.slice(0, $) + at + v.slice($) + j + P) : v + j + ($ === -2 ? _ : P);
  }
  return [ut(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class se {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, c = 0;
    const _ = e.length - 1, v = this.parts, [E, w] = ir(e, t);
    if (this.el = se.createElement(E, n), L.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = L.nextNode()) !== null && v.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(at)) {
          const x = w[c++], P = s.getAttribute($).split(j), U = /([.?@])?(.*)/.exec(x);
          v.push({ type: 1, index: l, name: U[2], strings: P, ctor: U[1] === "." ? or : U[1] === "?" ? ar : U[1] === "@" ? lr : fe }), s.removeAttribute($);
        } else $.startsWith(j) && (v.push({ type: 6, index: l }), s.removeAttribute($));
        if (ct.test(s.tagName)) {
          const $ = s.textContent.split(j), x = $.length - 1;
          if (x > 0) {
            s.textContent = de ? de.emptyScript : "";
            for (let P = 0; P < x; P++) s.append($[P], ne()), L.nextNode(), v.push({ type: 2, index: ++l });
            s.append($[x], ne());
          }
        }
      } else if (s.nodeType === 8) if (s.data === lt) v.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(j, $ + 1)) !== -1; ) v.push({ type: 7, index: l }), $ += j.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = G.createElement("template");
    return n.innerHTML = e, n;
  }
}
function X(r, e, t = r, n) {
  var c, _;
  if (e === Y) return e;
  let s = n !== void 0 ? (c = t._$Co) == null ? void 0 : c[n] : t._$Cl;
  const l = ie(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = X(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? G).importNode(t, !0);
    L.currentNode = s;
    let l = L.nextNode(), c = 0, _ = 0, v = n[0];
    for (; v !== void 0; ) {
      if (c === v.index) {
        let E;
        v.type === 2 ? E = new oe(l, l.nextSibling, this, e) : v.type === 1 ? E = new v.ctor(l, v.name, v.strings, this, e) : v.type === 6 && (E = new cr(l, this, e)), this._$AV.push(E), v = n[++_];
      }
      c !== (v == null ? void 0 : v.index) && (l = L.nextNode(), c++);
    }
    return L.currentNode = G, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class oe {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = X(this, e, t), ie(e) ? e === M || e == null || e === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : e !== this._$AH && e !== Y && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : rr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== M && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(G.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = se.createElement(ut(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const c = new sr(s, this), _ = c.u(this.options);
      c.p(t), this.T(_), this._$AH = c;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new oe(this.O(ne()), this.O(ne()), this, this.options)) : n = t[s], n._$AI(l), s++;
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
class fe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = M;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let c = !1;
    if (l === void 0) e = X(this, e, t, 0), c = !ie(e) || e !== this._$AH && e !== Y, c && (this._$AH = e);
    else {
      const _ = e;
      let v, E;
      for (e = l[0], v = 0; v < l.length - 1; v++) E = X(this, _[n + v], t, v), E === Y && (E = this._$AH[v]), c || (c = !ie(E) || E !== this._$AH[v]), E === M ? e = M : e !== M && (e += (E ?? "") + l[v + 1]), this._$AH[v] = E;
    }
    c && !s && this.j(e);
  }
  j(e) {
    e === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === M ? void 0 : e;
  }
}
class ar extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== M);
  }
}
class lr extends fe {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = X(this, e, t, 0) ?? M) === Y) return;
    const n = this._$AH, s = e === M && n !== M || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== M && (n === M || s);
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
    X(this, e);
  }
}
const be = te.litHtmlPolyfillSupport;
be == null || be(se, oe), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
const ur = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new oe(e.insertBefore(ne(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = globalThis;
class re extends Z {
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
    return Y;
  }
}
var st;
re._$litElement$ = !0, re.finalized = !0, (st = z.litElementHydrateSupport) == null || st.call(z, { LitElement: re });
const $e = z.litElementPolyfillSupport;
$e == null || $e({ LitElement: re });
(z.litElementVersions ?? (z.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Ae }, dr = (r = hr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: c } = t;
    return { set(_) {
      const v = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(c, v, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(c, void 0, r, _), _;
    } };
  }
  if (n === "setter") {
    const { name: c } = t;
    return function(_) {
      const v = this[c];
      e.call(this, _), this.requestUpdate(c, v, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function ae(r) {
  return (e, t) => typeof t == "object" ? dr(r, e, t) : ((n, s, l) => {
    const c = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), c ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, W = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? pr(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (s = (n ? c(e, t, s) : c(s)) || s);
  return n && s && fr(e, t, s), s;
};
const nt = () => window.zeroThemeManager, it = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
    "<div style='width:20px;height:20px;border-radius:6px;border:2px solid var(--uiv-primary-color,#6366f1);background:rgba(99,102,241,0.1);display:flex;align-items:center;justify-content:center;'>",
    "<span style='color:var(--uiv-primary-color,#6366f1);font-size:0.75rem;'>✓</span>",
    "</div>",
    "<span style='font-size:0.85rem;color:var(--uiv-text-color,#1e293b);font-weight:500;'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Checkbox", "Uiverse"]
};
function vr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let N = class extends re {
  constructor() {
    super(...arguments), this.theme = "modern", this.label = "Checkbox", this.checked = !1, this.disabled = !1, this.accentColor = "", this.onChangeEvent = "change";
  }
  static getStudioTemplate(r) {
    var n, s;
    if (!r) return it;
    const e = vr(r.studio.display.label || "Checkbox"), t = (((n = r.props) == null ? void 0 : n.accentColor) ?? ((s = r.studio.props) == null ? void 0 : s.accentColor)) || "var(--uiv-primary-color,#6366f1)";
    return {
      ...it,
      templateHtml: [
        "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
        `<div style='width:20px;height:20px;border-radius:6px;border:2px solid ${t};background:rgba(99,102,241,0.1);display:flex;align-items:center;justify-content:center;'>`,
        `<span style='color:${t};font-size:0.75rem;'>✓</span>`,
        "</div>",
        `<span style='font-size:0.85rem;color:var(--uiv-text-color,#1e293b);font-weight:500;'>${e}</span>`,
        "</div>"
      ].join("")
    };
  }
  handleChange(r) {
    if (this.disabled) return;
    const e = r.target;
    this.checked = e.checked, this.dispatchEvent(new CustomEvent("change", {
      detail: { checked: this.checked },
      bubbles: !0,
      composed: !0
    }));
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = nt()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var t;
    const r = (t = nt()) == null ? void 0 : t.getActiveTheme("zero-uiv-themes"), e = this.theme || (r == null ? void 0 : r.id) || "modern";
    return q`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getComponentStyles("checkbox") : ""}
                :host {
                    ${this.accentColor ? `--uiv-checkbox-accent: ${this.accentColor};` : ""}
                }
            </style>
            <label class="container uiv-${r == null ? void 0 : r.id}-theme ${e}">
                <input 
                    type="radio" 
                    class="uiv-${r == null ? void 0 : r.id}-scan"
                    .checked="${this.checked}" 
                    ?disabled="${this.disabled}" 
                    @change="${this.handleChange}"
                >
                <div class="uiv-checkbox-box uiv-${r == null ? void 0 : r.id}-card">
                    ${this.renderTemplate(e)}
                </div>
                <span class="label-text uiv-${r == null ? void 0 : r.id}-text">${this.label}</span>
            </label>
        `;
  }
  renderTemplate(r) {
    switch (r) {
      case "heart":
        return q`
                    <svg viewBox="0 0 24 24" class="heart-svg" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                `;
      case "tick":
        return q`<div class="checkmark"></div>`;
      case "retro":
        return q`<div class="box"></div>`;
      case "modern":
        return q`<div class="box"></div>`;
      case "neon":
      default:
        return q`<div class="circle"></div>`;
    }
  }
};
N.styles = Ft`
        :host {
            display: inline-block;
            cursor: pointer;
            --chk-p: var(--uiv-primary-color, #6366f1);
            --chk-bg: var(--uiv-surface-color, #ffffff);
            --chk-border: var(--uiv-border-color, #e2e8f0);
            --chk-t: var(--uiv-text-color, inherit);
            --chk-glow: var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.2));
            --chk-intensity: var(--uiv-glow-intensity, 1);
        }

        .container {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
            font-family: inherit;
        }

        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        .label-text {
            margin-left: 10px;
            font-size: 1rem;
            color: var(--uiv-text-color, inherit);
        }

        /* Theme-aware structural overrides */
        .uiv-checkbox-box {
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            background: var(--chk-bg);
            border: 2px solid var(--chk-border);
        }

        input:checked ~ .uiv-checkbox-box {
            border-color: var(--chk-p);
            box-shadow: var(--chk-glow);
            transform: scale(1.05);
        }

        input:checked ~ .uiv-checkbox-box::after {
            display: block;
            box-shadow: 0 0 calc(10px * var(--chk-intensity)) var(--chk-p);
        }
    `;
W([
  ae({ type: String }),
  J({
    attributeType: H.PROPERTY,
    uiComponentType: B.DROPDOWN,
    displayLabel: "Theme",
    fieldMappings: "theme",
    optionItems: [
      { label: "Modern", value: "modern" },
      { label: "Neon", value: "neon" },
      { label: "Cyber", value: "cyber" },
      { label: "Glass", value: "glass" },
      { label: "Retro", value: "retro" },
      { label: "Heart", value: "heart" },
      { label: "Tick", value: "tick" }
    ]
  })
], N.prototype, "theme", 2);
W([
  ae({ type: String }),
  J({
    attributeType: H.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], N.prototype, "label", 2);
W([
  ae({ type: Boolean }),
  J({
    attributeType: H.PROPERTY,
    uiComponentType: B.CHECKBOX,
    displayLabel: "Checked",
    fieldMappings: "checked"
  })
], N.prototype, "checked", 2);
W([
  ae({ type: Boolean }),
  J({
    attributeType: H.PROPERTY,
    uiComponentType: B.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], N.prototype, "disabled", 2);
W([
  ae({ type: String }),
  J({
    attributeType: H.PROPERTY,
    uiComponentType: B.COLOR_PICKER,
    displayLabel: "Accent Color Overlay",
    fieldMappings: "accentColor"
  })
], N.prototype, "accentColor", 2);
W([
  J({
    attributeType: H.EVENT,
    eventTrigger: "change",
    displayLabel: "On Change"
  })
], N.prototype, "onChangeEvent", 2);
N = W([
  zt({
    name: "zero-uiv-checkbox",
    version: "1.0.0",
    title: "Unified Checkbox",
    elementSelector: "zero-uiv-checkbox",
    group: "Uiverse Checkboxes",
    iconName: "checkbox-icon.png"
  }),
  Bt()
], N);
export {
  N as ZeroUivCheckbox,
  it as studioTemplate
};
