var Ie = Object.defineProperty;
var je = (r, t, e) => t in r ? Ie(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Gt = (r, t, e) => je(r, typeof t != "symbol" ? t + "" : t, e);
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Vt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Wt == "object" ? Wt : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(y, E) {
      return function(w, m) {
        Object.defineProperty(y, w, { configurable: !0, writable: !0, value: m }), E && E(w, m);
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
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !_ && !y, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return vt(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return vt({ __proto__: null });
      } : function() {
        return vt({});
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
    }, m = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Te(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Re(), I = typeof WeakMap == "function" ? WeakMap : ke(), G = s ? Symbol.for("@reflect-metadata:registry") : void 0, st = Ce(), Mt = Pe(st);
    function de(i, o, a, d) {
      if (g(a)) {
        if (!Ut(i))
          throw new TypeError();
        if (!It(o))
          throw new TypeError();
        return $e(i, o);
      } else {
        if (!Ut(i))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(d) && !g(d) && !W(d))
          throw new TypeError();
        return W(d) && (d = void 0), a = N(a), be(i, o, a, d);
      }
    }
    t("decorate", de);
    function ce(i, o) {
      function a(d, v) {
        if (!O(d))
          throw new TypeError();
        if (!g(v) && !Me(v))
          throw new TypeError();
        xt(i, o, d, v);
      }
      return a;
    }
    t("metadata", ce);
    function he(i, o, a, d) {
      if (!O(a))
        throw new TypeError();
      return g(d) || (d = N(d)), xt(i, o, a, d);
    }
    t("defineMetadata", he);
    function fe(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Ot(i, o, a);
    }
    t("hasMetadata", fe);
    function pe(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = N(a)), ft(i, o, a);
    }
    t("hasOwnMetadata", pe);
    function ye(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Ct(i, o, a);
    }
    t("getMetadata", ye);
    function ve(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Pt(i, o, a);
    }
    t("getOwnMetadata", ve);
    function _e(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = N(o)), Tt(i, o);
    }
    t("getMetadataKeys", _e);
    function ge(i, o) {
      if (!O(i))
        throw new TypeError();
      return g(o) || (o = N(o)), Rt(i, o);
    }
    t("getOwnMetadataKeys", ge);
    function me(i, o, a) {
      if (!O(o))
        throw new TypeError();
      if (g(a) || (a = N(a)), !O(o))
        throw new TypeError();
      g(a) || (a = N(a));
      var d = Y(
        o,
        a,
        /*Create*/
        !1
      );
      return g(d) ? !1 : d.OrdinaryDeleteMetadata(i, o, a);
    }
    t("deleteMetadata", me);
    function $e(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var d = i[a], v = d(o);
        if (!g(v) && !W(v)) {
          if (!It(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function be(i, o, a, d) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], C = P(o, a, d);
        if (!g(C) && !W(C)) {
          if (!O(C))
            throw new TypeError();
          d = C;
        }
      }
      return d;
    }
    function Ot(i, o, a) {
      var d = ft(i, o, a);
      if (d)
        return !0;
      var v = yt(o);
      return W(v) ? !1 : Ot(i, v, a);
    }
    function ft(i, o, a) {
      var d = Y(
        o,
        a,
        /*Create*/
        !1
      );
      return g(d) ? !1 : Nt(d.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Ct(i, o, a) {
      var d = ft(i, o, a);
      if (d)
        return Pt(i, o, a);
      var v = yt(o);
      if (!W(v))
        return Ct(i, v, a);
    }
    function Pt(i, o, a) {
      var d = Y(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(d))
        return d.OrdinaryGetOwnMetadata(i, o, a);
    }
    function xt(i, o, a, d) {
      var v = Y(
        a,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, d);
    }
    function Tt(i, o) {
      var a = Rt(i, o), d = yt(i);
      if (d === null)
        return a;
      var v = Tt(d, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new T(), C = [], $ = 0, c = a; $ < c.length; $++) {
        var h = c[$], f = P.has(h);
        f || (P.add(h), C.push(h));
      }
      for (var p = 0, b = v; p < b.length; p++) {
        var h = b[p], f = P.has(h);
        f || (P.add(h), C.push(h));
      }
      return C;
    }
    function Rt(i, o) {
      var a = Y(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function kt(i) {
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
    function we(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ee(i, o) {
      switch (kt(i)) {
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
      var a = "string", d = jt(i, l);
      if (d !== void 0) {
        var v = d.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return Ae(i);
    }
    function Ae(i, o) {
      var a, d;
      {
        var v = i.toString;
        if (ot(v)) {
          var d = v.call(i);
          if (!O(d))
            return d;
        }
        var a = i.valueOf;
        if (ot(a)) {
          var d = a.call(i);
          if (!O(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Nt(i) {
      return !!i;
    }
    function Se(i) {
      return "" + i;
    }
    function N(i) {
      var o = Ee(i);
      return we(o) ? o : Se(o);
    }
    function Ut(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ot(i) {
      return typeof i == "function";
    }
    function It(i) {
      return typeof i == "function";
    }
    function Me(i) {
      switch (kt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function pt(i, o) {
      return i === o || i !== i && o !== o;
    }
    function jt(i, o) {
      var a = i[o];
      if (a != null) {
        if (!ot(a))
          throw new TypeError();
        return a;
      }
    }
    function Dt(i) {
      var o = jt(i, u);
      if (!ot(o))
        throw new TypeError();
      var a = o.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function Ht(i) {
      return i.value;
    }
    function zt(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Lt(i) {
      var o = i.return;
      o && o.call(i);
    }
    function yt(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === m || o !== m)
        return o;
      var a = i.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return o;
      var v = d.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Oe() {
      var i;
      !g(G) && typeof e.Reflect < "u" && !(G in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = xe(e.Reflect));
      var o, a, d, v = new I(), P = {
        registerProvider: C,
        getProvider: c,
        setProvider: f
      };
      return P;
      function C(p) {
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
            d === void 0 && (d = new T()), d.add(p);
            break;
        }
      }
      function $(p, b) {
        if (!g(o)) {
          if (o.isProviderFor(p, b))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(p, b))
              return o;
            if (!g(d))
              for (var A = Dt(d); ; ) {
                var S = zt(A);
                if (!S)
                  return;
                var R = Ht(S);
                if (R.isProviderFor(p, b))
                  return Lt(A), R;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, b))
          return i;
      }
      function c(p, b) {
        var A = v.get(p), S;
        return g(A) || (S = A.get(b)), g(S) && (S = $(p, b), g(S) || (g(A) && (A = new M(), v.set(p, A)), A.set(b, S))), S;
      }
      function h(p) {
        if (g(p))
          throw new TypeError();
        return o === p || a === p || !g(d) && d.has(p);
      }
      function f(p, b, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = c(p, b);
        if (S !== A) {
          if (!g(S))
            return !1;
          var R = v.get(p);
          g(R) && (R = new M(), v.set(p, R)), R.set(b, A);
        }
        return !0;
      }
    }
    function Ce() {
      var i;
      return !g(G) && O(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[G]), g(i) && (i = Oe()), !g(G) && O(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, G, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pe(i) {
      var o = new I(), a = {
        isProviderFor: function(h, f) {
          var p = o.get(h);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: c
      };
      return st.registerProvider(a), a;
      function d(h, f, p) {
        var b = o.get(h), A = !1;
        if (g(b)) {
          if (!p)
            return;
          b = new M(), o.set(h, b), A = !0;
        }
        var S = b.get(f);
        if (g(S)) {
          if (!p)
            return;
          if (S = new M(), b.set(f, S), !i.setProvider(h, f, a))
            throw b.delete(f), A && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, p) {
        var b = d(
          f,
          p,
          /*Create*/
          !1
        );
        return g(b) ? !1 : Nt(b.has(h));
      }
      function P(h, f, p) {
        var b = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g(b))
          return b.get(h);
      }
      function C(h, f, p, b) {
        var A = d(
          p,
          b,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function $(h, f) {
        var p = [], b = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(b))
          return p;
        for (var A = b.keys(), S = Dt(A), R = 0; ; ) {
          var Bt = zt(S);
          if (!Bt)
            return p.length = R, p;
          var Ne = Ht(Bt);
          try {
            p[R] = Ne;
          } catch (Ue) {
            try {
              Lt(S);
            } finally {
              throw Ue;
            }
          }
          R++;
        }
      }
      function c(h, f, p) {
        var b = d(
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
    function xe(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, d = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, C = new I(), $ = {
        isProviderFor: function(c, h) {
          var f = C.get(c);
          return !g(f) && f.has(h) ? !0 : v(c, h).length ? (g(f) && (f = new T(), C.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return $;
    }
    function Y(i, o, a) {
      var d = st.getProvider(i, o);
      if (!g(d))
        return d;
      if (a) {
        if (st.setProvider(i, o, Mt))
          return Mt;
        throw new Error("Illegal state.");
      }
    }
    function Te() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function $(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[u] = function() {
            return this;
          }, $.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), c;
          }, $.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: c, done: !0 };
          }, $;
        }()
      ), d = (
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
          }), $.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, $.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, $.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, $.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, pt(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, $.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, $.prototype.entries = function() {
            return new a(this._keys, this._values, C);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[u] = function() {
            return this.entries();
          }, $.prototype._find = function(c, h) {
            if (!pt(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pt(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return d;
      function v($, c) {
        return $;
      }
      function P($, c) {
        return c;
      }
      function C($, c) {
        return [$, c];
      }
    }
    function Re() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new M();
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
    function ke() {
      var i = 16, o = w.create(), a = d();
      return (
        /** @class */
        function() {
          function c() {
            this._key = d();
          }
          return c.prototype.has = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var p = v(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, c.prototype.delete = function(h) {
            var f = v(
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
          c = "@@WeakMap@@" + $();
        while (w.has(o, c));
        return o[c] = !0, c;
      }
      function v(c, h) {
        if (!n.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: w.create() });
        }
        return c[a];
      }
      function P(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function C(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, c), h;
        }
        return P(new Array(c), c);
      }
      function $() {
        var c = C(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function vt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Vt || (Vt = {}));
function De(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function He(r) {
  return function(t) {
    if (De(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const n = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, t);
          } catch {
            try {
              customElements.define(n, class extends t {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, l);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: e
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function ze(r) {
  return He(r);
}
function Le(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Gt(this, "_stylesApplied", !1);
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
          const w = new CSSStyleSheet(), m = (E = l.sheet) == null ? void 0 : E.cssRules;
          m && (Array.from(m).forEach((M) => w.insertRule(M.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          y.appendChild(w);
        }
        u.forEach((w) => {
          const m = w.cloneNode(!0);
          y.appendChild(m);
        });
      }
    }
    return e;
  };
}
function Be(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ge(r) {
  return function(t, e) {
    try {
      Be(r);
      const n = Reflect.getMetadata("ZeroAttribute", t) || [];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function dt(r) {
  return Ge(r);
}
var F;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(F || (F = {}));
var q;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(q || (q = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = globalThis, wt = at.ShadowRoot && (at.ShadyCSS === void 0 || at.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Et = Symbol(), Ft = /* @__PURE__ */ new WeakMap();
let se = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== Et) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (wt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Ft.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Ft.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const We = (r) => new se(typeof r == "string" ? r : r + "", void 0, Et), Ve = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new se(e, r, Et);
}, Fe = (r, t) => {
  if (wt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = at.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, qt = wt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return We(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qe, defineProperty: Ze, getOwnPropertyDescriptor: Xe, getOwnPropertyNames: Ye, getOwnPropertySymbols: Je, getPrototypeOf: Qe } = Object, D = globalThis, Zt = D.trustedTypes, Ke = Zt ? Zt.emptyScript : "", _t = D.reactiveElementPolyfillSupport, Q = (r, t) => r, lt = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Ke : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, At = (r, t) => !qe(r, t), Xt = { attribute: !0, type: String, converter: lt, reflect: !1, useDefault: !1, hasChanged: At };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let V = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Xt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Ze(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: l } = Xe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Xt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Q("elementProperties"))) return;
    const t = Qe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Q("properties"))) {
      const e = this.properties, n = [...Ye(e), ...Je(e)];
      for (const s of n) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, s] of e) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const s = this._$Eu(e, n);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const s of n) e.unshift(qt(s));
    } else t !== void 0 && e.push(qt(t));
    return e;
  }
  static _$Eu(t, e) {
    const n = e.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const n of e.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Fe(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostConnected) == null ? void 0 : n.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostDisconnected) == null ? void 0 : n.call(e);
    });
  }
  attributeChangedCallback(t, e, n) {
    this._$AK(t, n);
  }
  _$ET(t, e) {
    var l;
    const n = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : lt).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const _ = n.getPropertyOptions(s), y = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : lt;
      this._$Em = s;
      const E = y.fromAttribute(e, _.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = _.getPropertyOptions(t)), !((n.hasChanged ?? At)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(_._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
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
        const { wrapped: _ } = u, y = this[l];
        _ !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[Q("elementProperties")] = /* @__PURE__ */ new Map(), V[Q("finalized")] = /* @__PURE__ */ new Map(), _t == null || _t({ ReactiveElement: V }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const K = globalThis, Yt = (r) => r, ut = K.trustedTypes, Jt = ut ? ut.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, oe = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, ae = "?" + j, tr = `<${ae}>`, B = document, et = () => B.createComment(""), rt = (r) => r === null || typeof r != "object" && typeof r != "function", St = Array.isArray, er = (r) => St(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", gt = `[ 	
\f\r]`, J = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qt = /-->/g, Kt = />/g, H = RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), te = /'/g, ee = /"/g, le = /^(?:script|style|textarea|title)$/i, rr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), mt = rr(1), Z = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), re = /* @__PURE__ */ new WeakMap(), z = B.createTreeWalker(B, 129);
function ue(r, t) {
  if (!St(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Jt !== void 0 ? Jt.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = J;
  for (let _ = 0; _ < e; _++) {
    const y = r[_];
    let E, w, m = -1, M = 0;
    for (; M < y.length && (u.lastIndex = M, w = u.exec(y), w !== null); ) M = u.lastIndex, u === J ? w[1] === "!--" ? u = Qt : w[1] !== void 0 ? u = Kt : w[2] !== void 0 ? (le.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = H) : w[3] !== void 0 && (u = H) : u === H ? w[0] === ">" ? (u = s ?? J, m = -1) : w[1] === void 0 ? m = -2 : (m = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? H : w[3] === '"' ? ee : te) : u === ee || u === te ? u = H : u === Qt || u === Kt ? u = J : (u = H, s = void 0);
    const T = u === H && r[_ + 1].startsWith("/>") ? " " : "";
    l += u === J ? y + tr : m >= 0 ? (n.push(E), y.slice(0, m) + oe + y.slice(m) + j + T) : y + j + (m === -2 ? _ : T);
  }
  return [ue(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class nt {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const _ = t.length - 1, y = this.parts, [E, w] = nr(t, e);
    if (this.el = nt.createElement(E, n), z.currentNode = this.el.content, e === 2 || e === 3) {
      const m = this.el.content.firstChild;
      m.replaceWith(...m.childNodes);
    }
    for (; (s = z.nextNode()) !== null && y.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const m of s.getAttributeNames()) if (m.endsWith(oe)) {
          const M = w[u++], T = s.getAttribute(m).split(j), I = /([.?@])?(.*)/.exec(M);
          y.push({ type: 1, index: l, name: I[2], strings: T, ctor: I[1] === "." ? sr : I[1] === "?" ? or : I[1] === "@" ? ar : ct }), s.removeAttribute(m);
        } else m.startsWith(j) && (y.push({ type: 6, index: l }), s.removeAttribute(m));
        if (le.test(s.tagName)) {
          const m = s.textContent.split(j), M = m.length - 1;
          if (M > 0) {
            s.textContent = ut ? ut.emptyScript : "";
            for (let T = 0; T < M; T++) s.append(m[T], et()), z.nextNode(), y.push({ type: 2, index: ++l });
            s.append(m[M], et());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ae) y.push({ type: 2, index: l });
      else {
        let m = -1;
        for (; (m = s.data.indexOf(j, m + 1)) !== -1; ) y.push({ type: 7, index: l }), m += j.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = B.createElement("template");
    return n.innerHTML = t, n;
  }
}
function X(r, t, e = r, n) {
  var u, _;
  if (t === Z) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = rt(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = X(r, s._$AS(r, t.values), s, n)), t;
}
class ir {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? B).importNode(e, !0);
    z.currentNode = s;
    let l = z.nextNode(), u = 0, _ = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new it(l, l.nextSibling, this, t) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, t) : y.type === 6 && (E = new lr(l, this, t)), this._$AV.push(E), y = n[++_];
      }
      u !== (y == null ? void 0 : y.index) && (l = z.nextNode(), u++);
    }
    return z.currentNode = B, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class it {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = X(this, t, e), rt(t) ? t === x || t == null || t === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : t !== this._$AH && t !== Z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : er(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== x && rt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(B.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = nt.createElement(ue(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new ir(s, this), _ = u.u(this.options);
      u.p(e), this.T(_), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = re.get(t.strings);
    return e === void 0 && re.set(t.strings, e = new nt(t)), e;
  }
  k(t) {
    St(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new it(this.O(et()), this.O(et()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Yt(t).nextSibling;
      Yt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class ct {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, l) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = x;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = X(this, t, e, 0), u = !rt(t) || t !== this._$AH && t !== Z, u && (this._$AH = t);
    else {
      const _ = t;
      let y, E;
      for (t = l[0], y = 0; y < l.length - 1; y++) E = X(this, _[n + y], e, y), E === Z && (E = this._$AH[y]), u || (u = !rt(E) || E !== this._$AH[y]), E === x ? t = x : t !== x && (t += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sr extends ct {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === x ? void 0 : t;
  }
}
class or extends ct {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== x);
  }
}
class ar extends ct {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = X(this, t, e, 0) ?? x) === Z) return;
    const n = this._$AH, s = t === x && n !== x || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== x && (n === x || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class lr {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    X(this, t);
  }
}
const $t = K.litHtmlPolyfillSupport;
$t == null || $t(nt, it), (K.litHtmlVersions ?? (K.litHtmlVersions = [])).push("3.3.3");
const ur = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new it(t.insertBefore(et(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis;
class tt extends V {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ur(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return Z;
  }
}
var ie;
tt._$litElement$ = !0, tt.finalized = !0, (ie = L.litElementHydrateSupport) == null || ie.call(L, { LitElement: tt });
const bt = L.litElementPolyfillSupport;
bt == null || bt({ LitElement: tt });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: lt, reflect: !1, hasChanged: At }, cr = (r = dr, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(_) {
      const y = t.get.call(this);
      t.set.call(this, _), this.requestUpdate(u, y, r, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(u, void 0, r, _), _;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(_) {
      const y = this[u];
      t.call(this, _), this.requestUpdate(u, y, r, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function ht(r) {
  return (t, e) => typeof e == "object" ? cr(r, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, U = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && hr(t, e, s), s;
};
function ne(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let k = class extends tt {
  constructor() {
    super(...arguments), this.title = "Card", this.subtitle = "", this.padding = 20, this.elevated = !0;
  }
  static getStudioTemplate(r) {
    var E, w, m, M;
    if (!r) return {
      kind: "card",
      templateHtml: "<div style='padding:20px;border-radius:18px;background:var(--uiv-surface-color,#fff);border:1px solid rgba(0,0,0,0.1);box-shadow:var(--uiv-shadow-depth,none);'><strong style='color:var(--uiv-text-color,#132238);'>{{display:title}}</strong><div style='margin-top:14px;'><zero-studio-slot name='default'></zero-studio-slot></div></div>",
      slots: [{ id: "default", label: "Card Body", dropzone: !0, accepts: [] }],
      titleProp: "title"
    };
    const t = ne(r.studio.display.title || "Card"), e = ne(r.studio.display.subtitle || ""), n = ((E = r.props) == null ? void 0 : E.padding) ?? ((w = r.studio.props) == null ? void 0 : w.padding) ?? 20, s = !!(((m = r.props) == null ? void 0 : m.elevated) ?? ((M = r.studio.props) == null ? void 0 : M.elevated));
    return {
      kind: "card",
      slots: [{ id: "default", label: "Card Body", dropzone: !0, accepts: [] }],
      templateHtml: [
        `<div style='padding:${n}px;border-radius:18px;background:var(--uiv-surface-color, #fff);border:1px solid rgba(0,0,0,0.1);box-shadow:${s ? "var(--uiv-shadow-depth, 0 12px 28px rgba(19, 34, 56, 0.08))" : "none"};font-family:inherit;'>`,
        t ? `<h3 style='margin:0;font-size:1.1rem;color:var(--uiv-text-color, #132238);'>${t}</h3>` : "",
        e ? `<p style='margin:6px 0 0;color:var(--uiv-text-muted, #64748b);font-size:0.92rem;'>${e}</p>` : "",
        "<div style='margin-top:14px;min-height:40px;border:1px dashed rgba(0,0,0,0.05);border-radius:8px;'>",
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(r) {
    this.title = r;
  }
  get subtitleConfig() {
    return this.subtitle;
  }
  set subtitleConfig(r) {
    this.subtitle = r;
  }
  get paddingConfig() {
    return this.padding;
  }
  set paddingConfig(r) {
    this.padding = Number(r) || 20;
  }
  get elevatedConfig() {
    return this.elevated;
  }
  set elevatedConfig(r) {
    this.elevated = !!r;
  }
  render() {
    const r = [
      `--zero-card-padding:${Math.max(0, Number(this.padding) || 0)}px`,
      `--zero-card-shadow:${this.elevated ? "0 12px 28px rgba(19, 34, 56, 0.08)" : "none"}`
    ].join(";");
    return mt`
      <article class="card" style=${r}>
        ${this.title ? mt`<h3 class="title">${this.title}</h3>` : null}
        ${this.subtitle ? mt`<p class="subtitle">${this.subtitle}</p>` : null}
        <div class="body">
          <slot></slot>
        </div>
      </article>
    `;
  }
};
k.styles = Ve`
    :host {
      display: block;
    }

    .card {
      border-radius: var(--zero-card-radius, 18px);
      padding: var(--zero-card-padding, 20px);
      background: var(--zero-card-bg, #fffdf9);
      border: 1px solid rgba(19, 34, 56, 0.08);
      box-shadow: var(--zero-card-shadow, 0 12px 28px rgba(19, 34, 56, 0.08));
    }

    .title {
      margin: 0;
      font-size: 1.1rem;
      color: #132238;
    }

    .subtitle {
      margin: 6px 0 0;
      color: #5b6470;
      font-size: 0.92rem;
    }

    .body {
      margin-top: 14px;
    }
  `;
U([
  ht({ type: String })
], k.prototype, "title", 2);
U([
  ht({ type: String })
], k.prototype, "subtitle", 2);
U([
  ht({ type: Number })
], k.prototype, "padding", 2);
U([
  ht({ type: Boolean })
], k.prototype, "elevated", 2);
U([
  dt({
    attributeType: q.PROPERTY,
    uiComponentType: F.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title"
  })
], k.prototype, "titleConfig", 1);
U([
  dt({
    attributeType: q.PROPERTY,
    uiComponentType: F.TEXT_INPUT,
    displayLabel: "Subtitle",
    fieldMappings: "subtitle"
  })
], k.prototype, "subtitleConfig", 1);
U([
  dt({
    attributeType: q.PROPERTY,
    uiComponentType: F.NUMBER_INPUT,
    displayLabel: "Padding (px)",
    fieldMappings: "padding"
  })
], k.prototype, "paddingConfig", 1);
U([
  dt({
    attributeType: q.PROPERTY,
    uiComponentType: F.CHECKBOX,
    displayLabel: "Elevated",
    fieldMappings: "elevated"
  })
], k.prototype, "elevatedConfig", 1);
k = U([
  ze({
    name: "zero-card",
    version: "1.0.0",
    title: "Card",
    elementSelector: "zero-card",
    group: "Surfaces",
    iconName: "card-icon.png"
  }),
  Le()
], k);
export {
  k as ZeroCard
};
