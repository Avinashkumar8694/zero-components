var Nt = Object.defineProperty;
var Ht = (r, e, t) => e in r ? Nt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var ze = (r, e, t) => Ht(r, typeof e != "symbol" ? e + "" : e, t);
var Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ge;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Le == "object" ? Le : typeof self == "object" ? self : typeof this == "object" ? this : _(), i = s(r);
    typeof t.Reflect < "u" && (i = s(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, A) {
      return function(b, $) {
        Object.defineProperty(p, b, { configurable: !0, writable: !0, value: $ }), A && A(b, $);
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
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !_ && !p, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return pe(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return pe({ __proto__: null });
      } : function() {
        return pe({});
      },
      has: A ? function(n, o) {
        return i.call(n, o);
      } : function(n, o) {
        return o in n;
      },
      get: A ? function(n, o) {
        return i.call(n, o) ? n[o] : void 0;
      } : function(n, o) {
        return n[o];
      }
    }, $ = Object.getPrototypeOf(Function), O = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ct(), T = typeof WeakMap == "function" ? WeakMap : kt(), H = s ? Symbol.for("@reflect-metadata:registry") : void 0, U = Ot(), Ae = Mt(U);
    function lt(n, o, a, h) {
      if (m(a)) {
        if (!Te(n))
          throw new TypeError();
        if (!Re(o))
          throw new TypeError();
        return mt(n, o);
      } else {
        if (!Te(n))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(h) && !m(h) && !B(h))
          throw new TypeError();
        return B(h) && (h = void 0), a = N(a), $t(n, o, a, h);
      }
    }
    e("decorate", lt);
    function ut(n, o) {
      function a(h, v) {
        if (!M(h))
          throw new TypeError();
        if (!m(v) && !Et(v))
          throw new TypeError();
        Me(n, o, h, v);
      }
      return a;
    }
    e("metadata", ut);
    function ht(n, o, a, h) {
      if (!M(a))
        throw new TypeError();
      return m(h) || (h = N(h)), Me(n, o, a, h);
    }
    e("defineMetadata", ht);
    function dt(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = N(a)), Ee(n, o, a);
    }
    e("hasMetadata", dt);
    function ct(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = N(a)), de(n, o, a);
    }
    e("hasOwnMetadata", ct);
    function ft(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = N(a)), Se(n, o, a);
    }
    e("getMetadata", ft);
    function pt(n, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = N(a)), Oe(n, o, a);
    }
    e("getOwnMetadata", pt);
    function yt(n, o) {
      if (!M(n))
        throw new TypeError();
      return m(o) || (o = N(o)), xe(n, o);
    }
    e("getMetadataKeys", yt);
    function vt(n, o) {
      if (!M(n))
        throw new TypeError();
      return m(o) || (o = N(o)), Pe(n, o);
    }
    e("getOwnMetadataKeys", vt);
    function _t(n, o, a) {
      if (!M(o))
        throw new TypeError();
      if (m(a) || (a = N(a)), !M(o))
        throw new TypeError();
      m(a) || (a = N(a));
      var h = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return m(h) ? !1 : h.OrdinaryDeleteMetadata(n, o, a);
    }
    e("deleteMetadata", _t);
    function mt(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var h = n[a], v = h(o);
        if (!m(v) && !B(v)) {
          if (!Re(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function $t(n, o, a, h) {
      for (var v = n.length - 1; v >= 0; --v) {
        var P = n[v], x = P(o, a, h);
        if (!m(x) && !B(x)) {
          if (!M(x))
            throw new TypeError();
          h = x;
        }
      }
      return h;
    }
    function Ee(n, o, a) {
      var h = de(n, o, a);
      if (h)
        return !0;
      var v = fe(o);
      return B(v) ? !1 : Ee(n, v, a);
    }
    function de(n, o, a) {
      var h = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return m(h) ? !1 : ke(h.OrdinaryHasOwnMetadata(n, o, a));
    }
    function Se(n, o, a) {
      var h = de(n, o, a);
      if (h)
        return Oe(n, o, a);
      var v = fe(o);
      if (!B(v))
        return Se(n, v, a);
    }
    function Oe(n, o, a) {
      var h = Z(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(h))
        return h.OrdinaryGetOwnMetadata(n, o, a);
    }
    function Me(n, o, a, h) {
      var v = Z(
        a,
        h,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(n, o, a, h);
    }
    function xe(n, o) {
      var a = Pe(n, o), h = fe(n);
      if (h === null)
        return a;
      var v = xe(h, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new k(), x = [], w = 0, d = a; w < d.length; w++) {
        var c = d[w], f = P.has(c);
        f || (P.add(c), x.push(c));
      }
      for (var y = 0, g = v; y < g.length; y++) {
        var c = g[y], f = P.has(c);
        f || (P.add(c), x.push(c));
      }
      return x;
    }
    function Pe(n, o) {
      var a = Z(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function Ce(n) {
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
    function B(n) {
      return n === null;
    }
    function wt(n) {
      return typeof n == "symbol";
    }
    function M(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function gt(n, o) {
      switch (Ce(n)) {
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
      var a = "string", h = Ne(n, l);
      if (h !== void 0) {
        var v = h.call(n, a);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return bt(n);
    }
    function bt(n, o) {
      var a, h;
      {
        var v = n.toString;
        if (ie(v)) {
          var h = v.call(n);
          if (!M(h))
            return h;
        }
        var a = n.valueOf;
        if (ie(a)) {
          var h = a.call(n);
          if (!M(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function ke(n) {
      return !!n;
    }
    function At(n) {
      return "" + n;
    }
    function N(n) {
      var o = gt(n);
      return wt(o) ? o : At(o);
    }
    function Te(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function ie(n) {
      return typeof n == "function";
    }
    function Re(n) {
      return typeof n == "function";
    }
    function Et(n) {
      switch (Ce(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ce(n, o) {
      return n === o || n !== n && o !== o;
    }
    function Ne(n, o) {
      var a = n[o];
      if (a != null) {
        if (!ie(a))
          throw new TypeError();
        return a;
      }
    }
    function He(n) {
      var o = Ne(n, u);
      if (!ie(o))
        throw new TypeError();
      var a = o.call(n);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function je(n) {
      return n.value;
    }
    function De(n) {
      var o = n.next();
      return o.done ? !1 : o;
    }
    function Ue(n) {
      var o = n.return;
      o && o.call(n);
    }
    function fe(n) {
      var o = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === $ || o !== $)
        return o;
      var a = n.prototype, h = a && Object.getPrototypeOf(a);
      if (h == null || h === Object.prototype)
        return o;
      var v = h.constructor;
      return typeof v != "function" || v === n ? o : v;
    }
    function St() {
      var n;
      !m(H) && typeof t.Reflect < "u" && !(H in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = xt(t.Reflect));
      var o, a, h, v = new T(), P = {
        registerProvider: x,
        getProvider: d,
        setProvider: f
      };
      return P;
      function x(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === y:
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
            h === void 0 && (h = new k()), h.add(y);
            break;
        }
      }
      function w(y, g) {
        if (!m(o)) {
          if (o.isProviderFor(y, g))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(y, g))
              return o;
            if (!m(h))
              for (var E = He(h); ; ) {
                var S = De(E);
                if (!S)
                  return;
                var R = je(S);
                if (R.isProviderFor(y, g))
                  return Ue(E), R;
              }
          }
        }
        if (!m(n) && n.isProviderFor(y, g))
          return n;
      }
      function d(y, g) {
        var E = v.get(y), S;
        return m(E) || (S = E.get(g)), m(S) && (S = w(y, g), m(S) || (m(E) && (E = new O(), v.set(y, E)), E.set(g, S))), S;
      }
      function c(y) {
        if (m(y))
          throw new TypeError();
        return o === y || a === y || !m(h) && h.has(y);
      }
      function f(y, g, E) {
        if (!c(E))
          throw new Error("Metadata provider not registered.");
        var S = d(y, g);
        if (S !== E) {
          if (!m(S))
            return !1;
          var R = v.get(y);
          m(R) && (R = new O(), v.set(y, R)), R.set(g, E);
        }
        return !0;
      }
    }
    function Ot() {
      var n;
      return !m(H) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[H]), m(n) && (n = St()), !m(H) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, H, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Mt(n) {
      var o = new T(), a = {
        isProviderFor: function(c, f) {
          var y = o.get(c);
          return m(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: d
      };
      return U.registerProvider(a), a;
      function h(c, f, y) {
        var g = o.get(c), E = !1;
        if (m(g)) {
          if (!y)
            return;
          g = new O(), o.set(c, g), E = !0;
        }
        var S = g.get(f);
        if (m(S)) {
          if (!y)
            return;
          if (S = new O(), g.set(f, S), !n.setProvider(c, f, a))
            throw g.delete(f), E && o.delete(c), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(c, f, y) {
        var g = h(
          f,
          y,
          /*Create*/
          !1
        );
        return m(g) ? !1 : ke(g.has(c));
      }
      function P(c, f, y) {
        var g = h(
          f,
          y,
          /*Create*/
          !1
        );
        if (!m(g))
          return g.get(c);
      }
      function x(c, f, y, g) {
        var E = h(
          y,
          g,
          /*Create*/
          !0
        );
        E.set(c, f);
      }
      function w(c, f) {
        var y = [], g = h(
          c,
          f,
          /*Create*/
          !1
        );
        if (m(g))
          return y;
        for (var E = g.keys(), S = He(E), R = 0; ; ) {
          var Ie = De(S);
          if (!Ie)
            return y.length = R, y;
          var Tt = je(Ie);
          try {
            y[R] = Tt;
          } catch (Rt) {
            try {
              Ue(S);
            } finally {
              throw Rt;
            }
          }
          R++;
        }
      }
      function d(c, f, y) {
        var g = h(
          f,
          y,
          /*Create*/
          !1
        );
        if (m(g) || !g.delete(c))
          return !1;
        if (g.size === 0) {
          var E = o.get(f);
          m(E) || (E.delete(y), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function xt(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, h = n.getOwnMetadata, v = n.getOwnMetadataKeys, P = n.deleteMetadata, x = new T(), w = {
        isProviderFor: function(d, c) {
          var f = x.get(d);
          return !m(f) && f.has(c) ? !0 : v(d, c).length ? (m(f) && (f = new k(), x.set(d, f)), f.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return w;
    }
    function Z(n, o, a) {
      var h = U.getProvider(n, o);
      if (!m(h))
        return h;
      if (a) {
        if (U.setProvider(n, o, Ae))
          return Ae;
        throw new Error("Illegal state.");
      }
    }
    function Pt() {
      var n = {}, o = [], a = (
        /** @class */
        function() {
          function w(d, c, f) {
            this._index = 0, this._keys = d, this._values = c, this._selector = f;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[u] = function() {
            return this;
          }, w.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var c = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, w.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, w;
        }()
      ), h = (
        /** @class */
        function() {
          function w() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
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
            var c = this._find(
              d,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, w.prototype.set = function(d, c) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = c, this;
          }, w.prototype.delete = function(d) {
            var c = this._find(
              d,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var f = this._keys.length, y = c + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, ce(d, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, w.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, w.prototype.entries = function() {
            return new a(this._keys, this._values, x);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[u] = function() {
            return this.entries();
          }, w.prototype._find = function(d, c) {
            if (!ce(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ce(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return h;
      function v(w, d) {
        return w;
      }
      function P(w, d) {
        return d;
      }
      function x(w, d) {
        return [w, d];
      }
    }
    function Ct() {
      var n = (
        /** @class */
        function() {
          function o() {
            this._map = new O();
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
      var n = 16, o = b.create(), a = h();
      return (
        /** @class */
        function() {
          function d() {
            this._key = h();
          }
          return d.prototype.has = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, d.prototype.get = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
          }, d.prototype.set = function(c, f) {
            var y = v(
              c,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, d.prototype.delete = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = h();
          }, d;
        }()
      );
      function h() {
        var d;
        do
          d = "@@WeakMap@@" + w();
        while (b.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, c) {
        if (!i.call(d, a)) {
          if (!c)
            return;
          Object.defineProperty(d, a, { value: b.create() });
        }
        return d[a];
      }
      function P(d, c) {
        for (var f = 0; f < c; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function x(d) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : P(c, d), c;
        }
        return P(new Array(d), d);
      }
      function w() {
        var d = x(n);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var c = "", f = 0; f < n; ++f) {
          var y = d[f];
          (f === 4 || f === 6 || f === 8) && (c += "-"), y < 16 && (c += "0"), c += y.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function pe(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Ge || (Ge = {}));
function jt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Dt(r) {
  return function(e) {
    if (jt(r)) {
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
        const i = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(i))
          try {
            customElements.define(i, e);
          } catch {
            try {
              customElements.define(i, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, l);
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
  return Dt(r);
}
function It(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        ze(this, "_stylesApplied", !1);
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
          const b = new CSSStyleSheet(), $ = (A = l.sheet) == null ? void 0 : A.cssRules;
          $ && (Array.from($).forEach((O) => b.insertRule(O.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          p.appendChild(b);
        }
        u.forEach((b) => {
          const $ = b.cloneNode(!0);
          p.appendChild($);
        });
      }
    }
    return t;
  };
}
var We;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(We || (We = {}));
var Be;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(Be || (Be = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, $e = oe.ShadowRoot && (oe.ShadyCSS === void 0 || oe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, we = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let nt = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== we) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if ($e && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (r) => new nt(typeof r == "string" ? r : r + "", void 0, we), Lt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, s, l) => i + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new nt(t, r, we);
}, Gt = (r, e) => {
  if ($e) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), s = oe.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = t.cssText, r.appendChild(i);
  }
}, Fe = $e ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return zt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Wt, defineProperty: Bt, getOwnPropertyDescriptor: Vt, getOwnPropertyNames: Ft, getOwnPropertySymbols: qt, getPrototypeOf: Zt } = Object, D = globalThis, qe = D.trustedTypes, Xt = qe ? qe.emptyScript : "", ye = D.reactiveElementPolyfillSupport, J = (r, e) => r, ae = { toAttribute(r, e) {
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
} }, ge = (r, e) => !Wt(r, e), Ze = { attribute: !0, type: String, converter: ae, reflect: !1, useDefault: !1, hasChanged: ge };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let V = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, t);
      s !== void 0 && Bt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: s, set: l } = Vt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, _, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(J("elementProperties"))) return;
    const e = Zt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(J("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(J("properties"))) {
      const t = this.properties, i = [...Ft(t), ...qt(t)];
      for (const s of i) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, s] of t) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const s = this._$Eu(t, i);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const s of i) t.unshift(Fe(s));
    } else e !== void 0 && t.push(Fe(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Gt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$ET(e, t) {
    var l;
    const i = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, i);
    if (s !== void 0 && i.reflect === !0) {
      const u = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : ae).toAttribute(t, i.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = i.getPropertyOptions(s), p = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : ae;
      this._$Em = s;
      const A = p.fromAttribute(t, _.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, i, s = !1, l) {
    var u;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), i ?? (i = _.getPropertyOptions(e)), !((i.hasChanged ?? ge)(l, t) || i.useDefault && i.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(_._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: s, wrapped: l }, u) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    var i;
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
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((s) => {
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
    (t = this._$EO) == null || t.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[J("elementProperties")] = /* @__PURE__ */ new Map(), V[J("finalized")] = /* @__PURE__ */ new Map(), ye == null || ye({ ReactiveElement: V }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, Xe = (r) => r, le = Y.trustedTypes, Je = le ? le.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, it = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, st = "?" + j, Jt = `<${st}>`, G = document, K = () => G.createComment(""), ee = (r) => r === null || typeof r != "object" && typeof r != "function", be = Array.isArray, Yt = (r) => be(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ve = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ye = /-->/g, Qe = />/g, I = RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, ot = /^(?:script|style|textarea|title)$/i, Qt = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), Kt = Qt(1), F = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), tt = /* @__PURE__ */ new WeakMap(), z = G.createTreeWalker(G, 129);
function at(r, e) {
  if (!be(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const er = (r, e) => {
  const t = r.length - 1, i = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = X;
  for (let _ = 0; _ < t; _++) {
    const p = r[_];
    let A, b, $ = -1, O = 0;
    for (; O < p.length && (u.lastIndex = O, b = u.exec(p), b !== null); ) O = u.lastIndex, u === X ? b[1] === "!--" ? u = Ye : b[1] !== void 0 ? u = Qe : b[2] !== void 0 ? (ot.test(b[2]) && (s = RegExp("</" + b[2], "g")), u = I) : b[3] !== void 0 && (u = I) : u === I ? b[0] === ">" ? (u = s ?? X, $ = -1) : b[1] === void 0 ? $ = -2 : ($ = u.lastIndex - b[2].length, A = b[1], u = b[3] === void 0 ? I : b[3] === '"' ? et : Ke) : u === et || u === Ke ? u = I : u === Ye || u === Qe ? u = X : (u = I, s = void 0);
    const k = u === I && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === X ? p + Jt : $ >= 0 ? (i.push(A), p.slice(0, $) + it + p.slice($) + j + k) : p + j + ($ === -2 ? _ : k);
  }
  return [at(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class te {
  constructor({ strings: e, _$litType$: t }, i) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = e.length - 1, p = this.parts, [A, b] = er(e, t);
    if (this.el = te.createElement(A, i), z.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = z.nextNode()) !== null && p.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(it)) {
          const O = b[u++], k = s.getAttribute($).split(j), T = /([.?@])?(.*)/.exec(O);
          p.push({ type: 1, index: l, name: T[2], strings: k, ctor: T[1] === "." ? rr : T[1] === "?" ? nr : T[1] === "@" ? ir : ue }), s.removeAttribute($);
        } else $.startsWith(j) && (p.push({ type: 6, index: l }), s.removeAttribute($));
        if (ot.test(s.tagName)) {
          const $ = s.textContent.split(j), O = $.length - 1;
          if (O > 0) {
            s.textContent = le ? le.emptyScript : "";
            for (let k = 0; k < O; k++) s.append($[k], K()), z.nextNode(), p.push({ type: 2, index: ++l });
            s.append($[O], K());
          }
        }
      } else if (s.nodeType === 8) if (s.data === st) p.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(j, $ + 1)) !== -1; ) p.push({ type: 7, index: l }), $ += j.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const i = G.createElement("template");
    return i.innerHTML = e, i;
  }
}
function q(r, e, t = r, i) {
  var u, _;
  if (e === F) return e;
  let s = i !== void 0 ? (u = t._$Co) == null ? void 0 : u[i] : t._$Cl;
  const l = ee(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = s : t._$Cl = s), s !== void 0 && (e = q(r, s._$AS(r, e.values), s, i)), e;
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
    const { el: { content: t }, parts: i } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? G).importNode(t, !0);
    z.currentNode = s;
    let l = z.nextNode(), u = 0, _ = 0, p = i[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new re(l, l.nextSibling, this, e) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (A = new sr(l, this, e)), this._$AV.push(A), p = i[++_];
      }
      u !== (p == null ? void 0 : p.index) && (l = z.nextNode(), u++);
    }
    return z.currentNode = G, s;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class re {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = q(this, e, t), ee(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== F && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Yt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && ee(this._$AH) ? this._$AA.nextSibling.data = e : this.T(G.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = te.createElement(at(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new tr(s, this), _ = u.u(this.options);
      u.p(t), this.T(_), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = tt.get(e.strings);
    return t === void 0 && tt.set(e.strings, t = new te(e)), t;
  }
  k(e) {
    be(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, s = 0;
    for (const l of e) s === t.length ? t.push(i = new re(this.O(K()), this.O(K()), this, this.options)) : i = t[s], i._$AI(l), s++;
    s < t.length && (this._$AR(i && i._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Xe(e).nextSibling;
      Xe(e).remove(), e = s;
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
  constructor(e, t, i, s, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = C;
  }
  _$AI(e, t = this, i, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = q(this, e, t, 0), u = !ee(e) || e !== this._$AH && e !== F, u && (this._$AH = e);
    else {
      const _ = e;
      let p, A;
      for (e = l[0], p = 0; p < l.length - 1; p++) A = q(this, _[i + p], t, p), A === F && (A = this._$AH[p]), u || (u = !ee(A) || A !== this._$AH[p]), A === C ? e = C : e !== C && (e += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends ue {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class nr extends ue {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class ir extends ue {
  constructor(e, t, i, s, l) {
    super(e, t, i, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = q(this, e, t, 0) ?? C) === F) return;
    const i = this._$AH, s = e === C && i !== C || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== C && (i === C || s);
    s && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class sr {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    q(this, e);
  }
}
const _e = Y.litHtmlPolyfillSupport;
_e == null || _e(te, re), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.3.3");
const or = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = s = new re(e.insertBefore(K(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
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
    return F;
  }
}
var rt;
Q._$litElement$ = !0, Q.finalized = !0, (rt = L.litElementHydrateSupport) == null || rt.call(L, { LitElement: Q });
const me = L.litElementPolyfillSupport;
me == null || me({ LitElement: Q });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: ge }, lr = (r = ar, e, t) => {
  const { kind: i, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), i === "accessor") {
    const { name: u } = t;
    return { set(_) {
      const p = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(u, p, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, r, _), _;
    } };
  }
  if (i === "setter") {
    const { name: u } = t;
    return function(_) {
      const p = this[u];
      e.call(this, _), this.requestUpdate(u, p, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function he(r) {
  return (e, t) => typeof t == "object" ? lr(r, e, t) : ((i, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, i), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var ur = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, ne = (r, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? hr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (i ? u(e, t, s) : u(s)) || s);
  return i && s && ur(e, t, s), s;
};
function se(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let W = class extends Q {
  constructor() {
    super(...arguments), this.title = "Notes", this.text = "This patient has history of penicillin allergy. Please verify medications. Prefers morning appointments.", this.author = "Drg. Adam H.", this.date = "26 Nov '19";
  }
  static getStudioTemplate(r) {
    var l, u, _, p, A, b, $, O, k, T, H, U;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-notes-card-1.0.0></zero-notes-card-1.0.0>"
      };
    const e = se(((l = r == null ? void 0 : r.props) == null ? void 0 : l.title) ?? ((_ = (u = r == null ? void 0 : r.studio) == null ? void 0 : u.props) == null ? void 0 : _.title) ?? "Notes"), t = se(((p = r == null ? void 0 : r.props) == null ? void 0 : p.text) ?? ((b = (A = r == null ? void 0 : r.studio) == null ? void 0 : A.props) == null ? void 0 : b.text) ?? "This patient has history of penicillin allergy..."), i = se((($ = r == null ? void 0 : r.props) == null ? void 0 : $.author) ?? ((k = (O = r == null ? void 0 : r.studio) == null ? void 0 : O.props) == null ? void 0 : k.author) ?? "Drg. Adam H."), s = se(((T = r == null ? void 0 : r.props) == null ? void 0 : T.date) ?? ((U = (H = r == null ? void 0 : r.studio) == null ? void 0 : H.props) == null ? void 0 : U.date) ?? "26 Nov &#39;19");
    return {
      kind: "generic",
      templateHtml: `
        <zero-notes-card-1.0.0
          title="${e}"
          text="${t}"
          author="${i}"
          date="${s}"
        ></zero-notes-card-1.0.0>
      `
    };
  }
  render() {
    return Kt`
      <div class="card">
        <div class="header">
          <h4 class="title">${this.title}</h4>
          <span class="action">See all</span>
        </div>
        <div class="textarea-box">
          <textarea class="textarea" rows="3" .value=${this.text} @input=${(r) => this.text = r.target.value}></textarea>
          <div class="meta">
            <span class="author">👤 ${this.author}</span>
            <span class="date">${this.date}</span>
          </div>
        </div>
        <button class="btn">Save Note</button>
      </div>
    `;
  }
};
W.styles = Lt`
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
    .textarea-box {
      background: #f8fafc;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      padding: 16px;
      min-height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .textarea {
      width: 100%;
      border: none;
      background: transparent;
      resize: none;
      font-size: 0.85rem;
      color: #334155;
      line-height: 1.5;
      font-family: inherit;
      outline: none;
      padding: 0;
      margin-bottom: 12px;
    }
    .meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #e2e8f0;
      padding-top: 8px;
    }
    .author {
      font-size: 0.75rem;
      color: #64748b;
      font-weight: 600;
    }
    .date {
      font-size: 0.75rem;
      color: #64748b;
    }
    .btn {
      align-self: flex-end;
      padding: 8px 16px;
      border-radius: 6px;
      border: none;
      background: #0ea5e9;
      color: #ffffff;
      font-weight: 600;
      font-size: 0.82rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn:hover {
      background: #0284c7;
    }
  `;
ne([
  he({ type: String })
], W.prototype, "title", 2);
ne([
  he({ type: String })
], W.prototype, "text", 2);
ne([
  he({ type: String })
], W.prototype, "author", 2);
ne([
  he({ type: String })
], W.prototype, "date", 2);
W = ne([
  Ut({
    name: "zero-notes-card",
    version: "1.0.0",
    title: "Notes Card",
    elementSelector: "zero-notes-card",
    group: "Dashboard",
    iconName: "card-icon.png"
  }),
  It()
], W);
export {
  W as ZeroNotesCard
};
