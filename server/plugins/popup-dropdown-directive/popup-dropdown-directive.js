var Dt = Object.defineProperty;
var It = (r, e, t) => e in r ? Dt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Le = (r, e, t) => It(r, typeof e != "symbol" ? e + "" : e, t);
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
var Be;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof ze == "object" ? ze : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(v, A) {
      return function(b, $) {
        Object.defineProperty(v, b, { configurable: !0, writable: !0, value: $ }), A && A(b, $);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, A = !_ && !v, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return fe(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return fe({ __proto__: null });
      } : function() {
        return fe({});
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
    }, $ = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : xt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), D = typeof WeakMap == "function" ? WeakMap : Rt(), B = s ? Symbol.for("@reflect-metadata:registry") : void 0, ie = Mt(), Ee = Ct(ie);
    function ut(i, o, a, d) {
      if (g(a)) {
        if (!Te(i))
          throw new TypeError();
        if (!Ne(o))
          throw new TypeError();
        return mt(i, o);
      } else {
        if (!Te(i))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(d) && !g(d) && !G(d))
          throw new TypeError();
        return G(d) && (d = void 0), a = N(a), wt(i, o, a, d);
      }
    }
    e("decorate", ut);
    function dt(i, o) {
      function a(d, y) {
        if (!O(d))
          throw new TypeError();
        if (!g(y) && !St(y))
          throw new TypeError();
        Ce(i, o, d, y);
      }
      return a;
    }
    e("metadata", dt);
    function ct(i, o, a, d) {
      if (!O(a))
        throw new TypeError();
      return g(d) || (d = N(d)), Ce(i, o, a, d);
    }
    e("defineMetadata", ct);
    function ht(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Se(i, o, a);
    }
    e("hasMetadata", ht);
    function ft(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = N(a)), de(i, o, a);
    }
    e("hasOwnMetadata", ft);
    function pt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Oe(i, o, a);
    }
    e("getMetadata", pt);
    function vt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Me(i, o, a);
    }
    e("getOwnMetadata", vt);
    function yt(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = N(o)), Pe(i, o);
    }
    e("getMetadataKeys", yt);
    function _t(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = N(o)), xe(i, o);
    }
    e("getOwnMetadataKeys", _t);
    function gt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      if (g(a) || (a = N(a)), !O(o))
        throw new TypeError();
      g(a) || (a = N(a));
      var d = J(
        o,
        a,
        /*Create*/
        !1
      );
      return g(d) ? !1 : d.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", gt);
    function mt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var d = i[a], y = d(o);
        if (!g(y) && !G(y)) {
          if (!Ne(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function wt(i, o, a, d) {
      for (var y = i.length - 1; y >= 0; --y) {
        var C = i[y], M = C(o, a, d);
        if (!g(M) && !G(M)) {
          if (!O(M))
            throw new TypeError();
          d = M;
        }
      }
      return d;
    }
    function Se(i, o, a) {
      var d = de(i, o, a);
      if (d)
        return !0;
      var y = he(o);
      return G(y) ? !1 : Se(i, y, a);
    }
    function de(i, o, a) {
      var d = J(
        o,
        a,
        /*Create*/
        !1
      );
      return g(d) ? !1 : Re(d.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Oe(i, o, a) {
      var d = de(i, o, a);
      if (d)
        return Me(i, o, a);
      var y = he(o);
      if (!G(y))
        return Oe(i, y, a);
    }
    function Me(i, o, a) {
      var d = J(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(d))
        return d.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ce(i, o, a, d) {
      var y = J(
        a,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, o, a, d);
    }
    function Pe(i, o) {
      var a = xe(i, o), d = he(i);
      if (d === null)
        return a;
      var y = Pe(d, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var C = new k(), M = [], m = 0, c = a; m < c.length; m++) {
        var h = c[m], f = C.has(h);
        f || (C.add(h), M.push(h));
      }
      for (var p = 0, w = y; p < w.length; p++) {
        var h = w[p], f = C.has(h);
        f || (C.add(h), M.push(h));
      }
      return M;
    }
    function xe(i, o) {
      var a = J(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
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
    function G(i) {
      return i === null;
    }
    function $t(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function bt(i, o) {
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
      var a = "string", d = De(i, l);
      if (d !== void 0) {
        var y = d.call(i, a);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return At(i);
    }
    function At(i, o) {
      var a, d;
      {
        var y = i.toString;
        if (se(y)) {
          var d = y.call(i);
          if (!O(d))
            return d;
        }
        var a = i.valueOf;
        if (se(a)) {
          var d = a.call(i);
          if (!O(d))
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
    function N(i) {
      var o = bt(i);
      return $t(o) ? o : Et(o);
    }
    function Te(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function se(i) {
      return typeof i == "function";
    }
    function Ne(i) {
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
    function ce(i, o) {
      return i === o || i !== i && o !== o;
    }
    function De(i, o) {
      var a = i[o];
      if (a != null) {
        if (!se(a))
          throw new TypeError();
        return a;
      }
    }
    function Ie(i) {
      var o = De(i, u);
      if (!se(o))
        throw new TypeError();
      var a = o.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function je(i) {
      return i.value;
    }
    function Ue(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function He(i) {
      var o = i.return;
      o && o.call(i);
    }
    function he(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || o !== $)
        return o;
      var a = i.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return o;
      var y = d.constructor;
      return typeof y != "function" || y === i ? o : y;
    }
    function Ot() {
      var i;
      !g(B) && typeof t.Reflect < "u" && !(B in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Pt(t.Reflect));
      var o, a, d, y = new D(), C = {
        registerProvider: M,
        getProvider: c,
        setProvider: f
      };
      return C;
      function M(p) {
        if (!Object.isExtensible(C))
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
            d === void 0 && (d = new k()), d.add(p);
            break;
        }
      }
      function m(p, w) {
        if (!g(o)) {
          if (o.isProviderFor(p, w))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(p, w))
              return o;
            if (!g(d))
              for (var E = Ie(d); ; ) {
                var S = Ue(E);
                if (!S)
                  return;
                var R = je(S);
                if (R.isProviderFor(p, w))
                  return He(E), R;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, w))
          return i;
      }
      function c(p, w) {
        var E = y.get(p), S;
        return g(E) || (S = E.get(w)), g(S) && (S = m(p, w), g(S) || (g(E) && (E = new x(), y.set(p, E)), E.set(w, S))), S;
      }
      function h(p) {
        if (g(p))
          throw new TypeError();
        return o === p || a === p || !g(d) && d.has(p);
      }
      function f(p, w, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = c(p, w);
        if (S !== E) {
          if (!g(S))
            return !1;
          var R = y.get(p);
          g(R) && (R = new x(), y.set(p, R)), R.set(w, E);
        }
        return !0;
      }
    }
    function Mt() {
      var i;
      return !g(B) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[B]), g(i) && (i = Ot()), !g(B) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, B, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ct(i) {
      var o = new D(), a = {
        isProviderFor: function(h, f) {
          var p = o.get(h);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: c
      };
      return ie.registerProvider(a), a;
      function d(h, f, p) {
        var w = o.get(h), E = !1;
        if (g(w)) {
          if (!p)
            return;
          w = new x(), o.set(h, w), E = !0;
        }
        var S = w.get(f);
        if (g(S)) {
          if (!p)
            return;
          if (S = new x(), w.set(f, S), !i.setProvider(h, f, a))
            throw w.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, f, p) {
        var w = d(
          f,
          p,
          /*Create*/
          !1
        );
        return g(w) ? !1 : Re(w.has(h));
      }
      function C(h, f, p) {
        var w = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g(w))
          return w.get(h);
      }
      function M(h, f, p, w) {
        var E = d(
          p,
          w,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function m(h, f) {
        var p = [], w = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(w))
          return p;
        for (var E = w.keys(), S = Ie(E), R = 0; ; ) {
          var Ve = Ue(S);
          if (!Ve)
            return p.length = R, p;
          var Tt = je(Ve);
          try {
            p[R] = Tt;
          } catch (Nt) {
            try {
              He(S);
            } finally {
              throw Nt;
            }
          }
          R++;
        }
      }
      function c(h, f, p) {
        var w = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (g(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var E = o.get(f);
          g(E) || (E.delete(p), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Pt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, d = i.getOwnMetadata, y = i.getOwnMetadataKeys, C = i.deleteMetadata, M = new D(), m = {
        isProviderFor: function(c, h) {
          var f = M.get(c);
          return !g(f) && f.has(h) ? !0 : y(c, h).length ? (g(f) && (f = new k(), M.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: C
      };
      return m;
    }
    function J(i, o, a) {
      var d = ie.getProvider(i, o);
      if (!g(d))
        return d;
      if (a) {
        if (ie.setProvider(i, o, Ee))
          return Ee;
        throw new Error("Illegal state.");
      }
    }
    function xt() {
      var i = {}, o = [], a = (
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
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), c;
          }, m.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: c, done: !0 };
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
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ce(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(c, h) {
            if (!ce(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ce(this._keys[f], c)) {
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
      function C(m, c) {
        return c;
      }
      function M(m, c) {
        return [m, c];
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
      var i = 16, o = b.create(), a = d();
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
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
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
            this._key = d();
          }, c;
        }()
      );
      function d() {
        var c;
        do
          c = "@@WeakMap@@" + m();
        while (b.has(o, c));
        return o[c] = !0, c;
      }
      function y(c, h) {
        if (!n.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: b.create() });
        }
        return c[a];
      }
      function C(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function M(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, c), h;
        }
        return C(new Array(c), c);
      }
      function m() {
        var c = M(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function fe(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Be || (Be = {}));
function jt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ut(r) {
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
function Ht(r) {
  return Ut(r);
}
function Vt(r) {
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
      update(l) {
        try {
          super.update(l);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var A;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const b = new CSSStyleSheet(), $ = (A = l.sheet) == null ? void 0 : A.cssRules;
          $ && (Array.from($).forEach((x) => b.insertRule(x.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          v.appendChild(b);
        }
        u.forEach((b) => {
          const $ = b.cloneNode(!0);
          v.appendChild($);
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
function Bt(r) {
  return zt(r);
}
var Ge;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(Ge || (Ge = {}));
var me;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(me || (me = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, we = oe.ShadowRoot && (oe.ShadyCSS === void 0 || oe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), We = /* @__PURE__ */ new WeakMap();
let it = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = We.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && We.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Gt = (r) => new it(typeof r == "string" ? r : r + "", void 0, $e), Wt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new it(t, r, $e);
}, qt = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = oe.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, qe = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Gt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ft, defineProperty: Zt, getOwnPropertyDescriptor: Jt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Xt, getPrototypeOf: Qt } = Object, j = globalThis, Fe = j.trustedTypes, Kt = Fe ? Fe.emptyScript : "", pe = j.reactiveElementPolyfillSupport, X = (r, e) => r, ae = { toAttribute(r, e) {
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
} }, be = (r, e) => !Ft(r, e), Ze = { attribute: !0, type: String, converter: ae, reflect: !1, useDefault: !1, hasChanged: be };
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
      s !== void 0 && Zt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Jt(this.prototype, e) ?? { get() {
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
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const t = this.properties, n = [...Yt(t), ...Xt(t)];
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ae).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), v = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : ae;
      this._$Em = s;
      const A = v.fromAttribute(t, _.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = _.getPropertyOptions(e)), !((n.hasChanged ?? be)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, n)))) return;
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
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[X("elementProperties")] = /* @__PURE__ */ new Map(), W[X("finalized")] = /* @__PURE__ */ new Map(), pe == null || pe({ ReactiveElement: W }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q = globalThis, Je = (r) => r, le = Q.trustedTypes, Ye = le ? le.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, st = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, ot = "?" + I, er = `<${ot}>`, z = document, ee = () => z.createComment(""), te = (r) => r === null || typeof r != "object" && typeof r != "function", Ae = Array.isArray, tr = (r) => Ae(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ve = `[ 	
\f\r]`, Y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Xe = /-->/g, Qe = />/g, H = RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, at = /^(?:script|style|textarea|title)$/i, rr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ye = rr(1), q = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), tt = /* @__PURE__ */ new WeakMap(), V = z.createTreeWalker(z, 129);
function lt(r, e) {
  if (!Ae(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const nr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = Y;
  for (let _ = 0; _ < t; _++) {
    const v = r[_];
    let A, b, $ = -1, x = 0;
    for (; x < v.length && (u.lastIndex = x, b = u.exec(v), b !== null); ) x = u.lastIndex, u === Y ? b[1] === "!--" ? u = Xe : b[1] !== void 0 ? u = Qe : b[2] !== void 0 ? (at.test(b[2]) && (s = RegExp("</" + b[2], "g")), u = H) : b[3] !== void 0 && (u = H) : u === H ? b[0] === ">" ? (u = s ?? Y, $ = -1) : b[1] === void 0 ? $ = -2 : ($ = u.lastIndex - b[2].length, A = b[1], u = b[3] === void 0 ? H : b[3] === '"' ? et : Ke) : u === et || u === Ke ? u = H : u === Xe || u === Qe ? u = Y : (u = H, s = void 0);
    const k = u === H && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === Y ? v + er : $ >= 0 ? (n.push(A), v.slice(0, $) + st + v.slice($) + I + k) : v + I + ($ === -2 ? _ : k);
  }
  return [lt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class re {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, v = this.parts, [A, b] = nr(e, t);
    if (this.el = re.createElement(A, n), V.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = V.nextNode()) !== null && v.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(st)) {
          const x = b[u++], k = s.getAttribute($).split(I), D = /([.?@])?(.*)/.exec(x);
          v.push({ type: 1, index: l, name: D[2], strings: k, ctor: D[1] === "." ? sr : D[1] === "?" ? or : D[1] === "@" ? ar : ue }), s.removeAttribute($);
        } else $.startsWith(I) && (v.push({ type: 6, index: l }), s.removeAttribute($));
        if (at.test(s.tagName)) {
          const $ = s.textContent.split(I), x = $.length - 1;
          if (x > 0) {
            s.textContent = le ? le.emptyScript : "";
            for (let k = 0; k < x; k++) s.append($[k], ee()), V.nextNode(), v.push({ type: 2, index: ++l });
            s.append($[x], ee());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ot) v.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(I, $ + 1)) !== -1; ) v.push({ type: 7, index: l }), $ += I.length - 1;
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
  var u, _;
  if (e === q) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = te(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = F(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? z).importNode(t, !0);
    V.currentNode = s;
    let l = V.nextNode(), u = 0, _ = 0, v = n[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let A;
        v.type === 2 ? A = new ne(l, l.nextSibling, this, e) : v.type === 1 ? A = new v.ctor(l, v.name, v.strings, this, e) : v.type === 6 && (A = new lr(l, this, e)), this._$AV.push(A), v = n[++_];
      }
      u !== (v == null ? void 0 : v.index) && (l = V.nextNode(), u++);
    }
    return V.currentNode = z, s;
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
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = F(this, e, t), te(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && te(this._$AH) ? this._$AA.nextSibling.data = e : this.T(z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = re.createElement(lt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ir(s, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = tt.get(e.strings);
    return t === void 0 && tt.set(e.strings, t = new re(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new ne(this.O(ee()), this.O(ee()), this, this.options)) : n = t[s], n._$AI(l), s++;
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
class ue {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = F(this, e, t, 0), u = !te(e) || e !== this._$AH && e !== q, u && (this._$AH = e);
    else {
      const _ = e;
      let v, A;
      for (e = l[0], v = 0; v < l.length - 1; v++) A = F(this, _[n + v], t, v), A === q && (A = this._$AH[v]), u || (u = !te(A) || A !== this._$AH[v]), A === P ? e = P : e !== P && (e += (A ?? "") + l[v + 1]), this._$AH[v] = A;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class sr extends ue {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class or extends ue {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class ar extends ue {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = F(this, e, t, 0) ?? P) === q) return;
    const n = this._$AH, s = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== P && (n === P || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
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
const _e = Q.litHtmlPolyfillSupport;
_e == null || _e(re, ne), (Q.litHtmlVersions ?? (Q.litHtmlVersions = [])).push("3.3.3");
const ur = (r, e, t) => {
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
const L = globalThis;
class K extends W {
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
    return q;
  }
}
var nt;
K._$litElement$ = !0, K.finalized = !0, (nt = L.litElementHydrateSupport) == null || nt.call(L, { LitElement: K });
const ge = L.litElementPolyfillSupport;
ge == null || ge({ LitElement: K });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: be }, cr = (r = dr, e, t) => {
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
function Z(r) {
  return (e, t) => typeof t == "object" ? cr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, U = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && hr(e, t, s), s;
};
const rt = () => window.zeroThemeManager;
let T = class extends K {
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
      const r = this.shadowRoot.querySelector(".dropdown-menu"), e = this.getBoundingClientRect(), t = r.getBoundingClientRect(), n = window.innerHeight > e.bottom + t.height, s = window.innerWidth > e.left + t.width;
      r.style.top = n ? `${e.height + 10}px` : "auto", r.style.bottom = n ? "auto" : `${e.height + 15}px`, r.style.left = s ? "0px" : `-${t.width - e.width}px`;
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
    var e;
    const r = (e = rt()) == null ? void 0 : e.getActiveTheme("zero-standard-themes");
    return ye`
      <style>
        ${r ? r.getGlobalStyles() : ""}
      </style>
      <div class="uiv-${r == null ? void 0 : r.id}-theme">
        <slot></slot>
        ${this.open ? ye`
              <div class="dropdown-menu open uiv-${r == null ? void 0 : r.id}-card uiv-${r == null ? void 0 : r.id}-glass">
                <div class="notch"></div>
                <ul>
                  ${this.options.map(
      (t) => ye`
                      <li 
                        data-value="${JSON.stringify(t)}" 
                        @click="${this.handleOptionClick}" 
                        class="${this.selectedValue === t.value ? "selected" : ""} uiv-${r == null ? void 0 : r.id}-text" 
                      >
                        ${t.label}
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
    var e;
    super.connectedCallback(), (e = rt()) == null || e.addEventListener("theme-changed", () => this.requestUpdate());
    const r = this.getAttribute("zero-popup-dropdown-directive");
    if (r)
      try {
        const t = JSON.parse(r);
        this.enabled = t.enabled, this.options = t.options || [], this.selectedValue = t.selectedValue || "";
      } catch (t) {
        console.error("Error parsing popup dropdown config", t);
      }
    this.validateInputs();
  }
};
T.properties = {
  enabled: { type: Boolean },
  options: { type: Array },
  open: { type: Boolean },
  isValid: { type: Boolean },
  errorMessage: { type: String },
  selectedValue: { type: String }
  // New property for the selected value
};
T.styles = Wt`
    :host {
      display: inline-block;
      position: relative;
      cursor: pointer;
      font-family: var(--uiv-font-family, sans-serif);
    }

    .dropdown-menu {
      position: absolute;
      background-color: var(--uiv-bg-surface, #fff);
      border: 1px solid var(--uiv-border-color, #ccc);
      box-shadow: var(--uiv-shadow-depth, 0 2px 10px rgba(0, 0, 0, 0.2));
      border-radius: var(--uiv-border-radius, 6px);
      padding: var(--spacing-sm, 10px);
      width: var(--uiv-input-width, 200px);
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
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
        top: -10px;
        left: 20px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid var(--uiv-border-color, #ddd);
        background-color: transparent;
    }

    .dropdown-menu ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .dropdown-menu li {
      padding: var(--spacing-sm, 10px);
      cursor: pointer;
      border-radius: var(--uiv-border-radius, 4px);
      color: var(--uiv-text-color);
      transition: background 0.2s;
    }

    .dropdown-menu li:hover {
      background-color: var(--uiv-bg-overlay, #f0f0f0);
    }

    .dropdown-menu li.selected {
      background-color: var(--uiv-primary-color, #e0e0e0);
      color: #fff;
    }

    .error-message {
      color: var(--uiv-error-color, #ff5f5f);
      font-size: var(--font-size-sm, 0.9em);
      margin-top: var(--spacing-xs, 5px);
    }
  `;
U([
  Z({ type: Boolean })
], T.prototype, "enabled", 2);
U([
  Z({ type: Array })
], T.prototype, "config", 1);
U([
  Z({ type: Boolean, reflect: !0 })
], T.prototype, "open", 2);
U([
  Z({ type: Boolean })
], T.prototype, "isValid", 2);
U([
  Z({ type: String })
], T.prototype, "errorMessage", 2);
U([
  Z({ type: String })
], T.prototype, "selectedValue", 2);
U([
  Bt({
    attributeType: me.EVENT,
    displayLabel: "On Option Selected",
    eventTrigger: "option-selected"
  })
], T.prototype, "handleOptionSelected", 1);
T = U([
  Ht({
    name: "popup-dropdown-directive",
    version: "1.0.0",
    title: "Popup dropdown directive",
    elementSelector: "zero-popup-dropdown-directive",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  Vt()
], T);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[zero-popup-dropdown-directive]").forEach((r) => {
    const e = JSON.parse(r.getAttribute("zero-popup-dropdown-directive")), t = document.createElement("zero-popup-dropdown-directive-1.0.0");
    for (t.enabled = e.enabled, t.options = e.options, t.selectedValue = e.selectedValue || "", r.appendChild(t); r.firstChild && r.firstChild !== t; )
      t.appendChild(r.firstChild);
  });
});
export {
  T as PopupDropdownDirective
};
