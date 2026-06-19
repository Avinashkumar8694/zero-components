var He = Object.defineProperty;
var je = (r, t, e) => t in r ? He(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var zt = (r, t, e) => je(r, typeof t != "symbol" ? t + "" : t, e);
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
var Gt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Wt == "object" ? Wt : typeof self == "object" ? self : typeof this == "object" ? this : b(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(p, m) {
      return function(g, $) {
        Object.defineProperty(p, g, { configurable: !0, writable: !0, value: $ }), m && m(g, $);
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
    function b() {
      return l() || u();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, m = !b && !p, g = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return vt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return vt({ __proto__: null });
      } : function() {
        return vt({});
      },
      has: m ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: m ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, $ = Object.getPrototypeOf(Function), O = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Te(), S = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ne(), R = typeof WeakMap == "function" ? WeakMap : De(), I = s ? Symbol.for("@reflect-metadata:registry") : void 0, W = Pe(), it = ke(W);
    function he(i, o, a, d) {
      if (_(a)) {
        if (!Nt(i))
          throw new TypeError();
        if (!Dt(o))
          throw new TypeError();
        return we(i, o);
      } else {
        if (!Nt(i))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(d) && !_(d) && !G(d))
          throw new TypeError();
        return G(d) && (d = void 0), a = N(a), Ae(i, o, a, d);
      }
    }
    t("decorate", he);
    function fe(i, o) {
      function a(d, v) {
        if (!M(d))
          throw new TypeError();
        if (!_(v) && !Me(v))
          throw new TypeError();
        Ct(i, o, d, v);
      }
      return a;
    }
    t("metadata", fe);
    function pe(i, o, a, d) {
      if (!M(a))
        throw new TypeError();
      return _(d) || (d = N(d)), Ct(i, o, a, d);
    }
    t("defineMetadata", pe);
    function ye(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = N(a)), Ot(i, o, a);
    }
    t("hasMetadata", ye);
    function ve(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = N(a)), ft(i, o, a);
    }
    t("hasOwnMetadata", ve);
    function be(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = N(a)), St(i, o, a);
    }
    t("getMetadata", be);
    function _e(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = N(a)), Mt(i, o, a);
    }
    t("getOwnMetadata", _e);
    function me(i, o) {
      if (!M(i))
        throw new TypeError();
      return _(o) || (o = N(o)), Pt(i, o);
    }
    t("getMetadataKeys", me);
    function ge(i, o) {
      if (!M(i))
        throw new TypeError();
      return _(o) || (o = N(o)), kt(i, o);
    }
    t("getOwnMetadataKeys", ge);
    function $e(i, o, a) {
      if (!M(o))
        throw new TypeError();
      if (_(a) || (a = N(a)), !M(o))
        throw new TypeError();
      _(a) || (a = N(a));
      var d = K(
        o,
        a,
        /*Create*/
        !1
      );
      return _(d) ? !1 : d.OrdinaryDeleteMetadata(i, o, a);
    }
    t("deleteMetadata", $e);
    function we(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var d = i[a], v = d(o);
        if (!_(v) && !G(v)) {
          if (!Dt(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function Ae(i, o, a, d) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], C = P(o, a, d);
        if (!_(C) && !G(C)) {
          if (!M(C))
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
      return G(v) ? !1 : Ot(i, v, a);
    }
    function ft(i, o, a) {
      var d = K(
        o,
        a,
        /*Create*/
        !1
      );
      return _(d) ? !1 : Tt(d.OrdinaryHasOwnMetadata(i, o, a));
    }
    function St(i, o, a) {
      var d = ft(i, o, a);
      if (d)
        return Mt(i, o, a);
      var v = yt(o);
      if (!G(v))
        return St(i, v, a);
    }
    function Mt(i, o, a) {
      var d = K(
        o,
        a,
        /*Create*/
        !1
      );
      if (!_(d))
        return d.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ct(i, o, a, d) {
      var v = K(
        a,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, d);
    }
    function Pt(i, o) {
      var a = kt(i, o), d = yt(i);
      if (d === null)
        return a;
      var v = Pt(d, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new S(), C = [], w = 0, c = a; w < c.length; w++) {
        var h = c[w], f = P.has(h);
        f || (P.add(h), C.push(h));
      }
      for (var y = 0, A = v; y < A.length; y++) {
        var h = A[y], f = P.has(h);
        f || (P.add(h), C.push(h));
      }
      return C;
    }
    function kt(i, o) {
      var a = K(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function Rt(i) {
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
    function _(i) {
      return i === void 0;
    }
    function G(i) {
      return i === null;
    }
    function Ee(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function xe(i, o) {
      switch (Rt(i)) {
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
      var a = "string", d = Ut(i, l);
      if (d !== void 0) {
        var v = d.call(i, a);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return Oe(i);
    }
    function Oe(i, o) {
      var a, d;
      {
        var v = i.toString;
        if (st(v)) {
          var d = v.call(i);
          if (!M(d))
            return d;
        }
        var a = i.valueOf;
        if (st(a)) {
          var d = a.call(i);
          if (!M(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Tt(i) {
      return !!i;
    }
    function Se(i) {
      return "" + i;
    }
    function N(i) {
      var o = xe(i);
      return Ee(o) ? o : Se(o);
    }
    function Nt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function st(i) {
      return typeof i == "function";
    }
    function Dt(i) {
      return typeof i == "function";
    }
    function Me(i) {
      switch (Rt(i)) {
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
    function Ut(i, o) {
      var a = i[o];
      if (a != null) {
        if (!st(a))
          throw new TypeError();
        return a;
      }
    }
    function It(i) {
      var o = Ut(i, u);
      if (!st(o))
        throw new TypeError();
      var a = o.call(i);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function Ht(i) {
      return i.value;
    }
    function jt(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Lt(i) {
      var o = i.return;
      o && o.call(i);
    }
    function yt(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || o !== $)
        return o;
      var a = i.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return o;
      var v = d.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Ce() {
      var i;
      !_(I) && typeof e.Reflect < "u" && !(I in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Re(e.Reflect));
      var o, a, d, v = new R(), P = {
        registerProvider: C,
        getProvider: c,
        setProvider: f
      };
      return P;
      function C(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case _(o):
            o = y;
            break;
          case o === y:
            break;
          case _(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            d === void 0 && (d = new S()), d.add(y);
            break;
        }
      }
      function w(y, A) {
        if (!_(o)) {
          if (o.isProviderFor(y, A))
            return o;
          if (!_(a)) {
            if (a.isProviderFor(y, A))
              return o;
            if (!_(d))
              for (var E = It(d); ; ) {
                var x = jt(E);
                if (!x)
                  return;
                var T = Ht(x);
                if (T.isProviderFor(y, A))
                  return Lt(E), T;
              }
          }
        }
        if (!_(i) && i.isProviderFor(y, A))
          return i;
      }
      function c(y, A) {
        var E = v.get(y), x;
        return _(E) || (x = E.get(A)), _(x) && (x = w(y, A), _(x) || (_(E) && (E = new O(), v.set(y, E)), E.set(A, x))), x;
      }
      function h(y) {
        if (_(y))
          throw new TypeError();
        return o === y || a === y || !_(d) && d.has(y);
      }
      function f(y, A, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var x = c(y, A);
        if (x !== E) {
          if (!_(x))
            return !1;
          var T = v.get(y);
          _(T) && (T = new O(), v.set(y, T)), T.set(A, E);
        }
        return !0;
      }
    }
    function Pe() {
      var i;
      return !_(I) && M(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[I]), _(i) && (i = Ce()), !_(I) && M(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, I, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function ke(i) {
      var o = new R(), a = {
        isProviderFor: function(h, f) {
          var y = o.get(h);
          return _(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: c
      };
      return W.registerProvider(a), a;
      function d(h, f, y) {
        var A = o.get(h), E = !1;
        if (_(A)) {
          if (!y)
            return;
          A = new O(), o.set(h, A), E = !0;
        }
        var x = A.get(f);
        if (_(x)) {
          if (!y)
            return;
          if (x = new O(), A.set(f, x), !i.setProvider(h, f, a))
            throw A.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return x;
      }
      function v(h, f, y) {
        var A = d(
          f,
          y,
          /*Create*/
          !1
        );
        return _(A) ? !1 : Tt(A.has(h));
      }
      function P(h, f, y) {
        var A = d(
          f,
          y,
          /*Create*/
          !1
        );
        if (!_(A))
          return A.get(h);
      }
      function C(h, f, y, A) {
        var E = d(
          y,
          A,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function w(h, f) {
        var y = [], A = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (_(A))
          return y;
        for (var E = A.keys(), x = It(E), T = 0; ; ) {
          var Bt = jt(x);
          if (!Bt)
            return y.length = T, y;
          var Ue = Ht(Bt);
          try {
            y[T] = Ue;
          } catch (Ie) {
            try {
              Lt(x);
            } finally {
              throw Ie;
            }
          }
          T++;
        }
      }
      function c(h, f, y) {
        var A = d(
          f,
          y,
          /*Create*/
          !1
        );
        if (_(A) || !A.delete(h))
          return !1;
        if (A.size === 0) {
          var E = o.get(f);
          _(E) || (E.delete(y), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Re(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, d = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, C = new R(), w = {
        isProviderFor: function(c, h) {
          var f = C.get(c);
          return !_(f) && f.has(h) ? !0 : v(c, h).length ? (_(f) && (f = new S(), C.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return w;
    }
    function K(i, o, a) {
      var d = W.getProvider(i, o);
      if (!_(d))
        return d;
      if (a) {
        if (W.setProvider(i, o, it))
          return it;
        throw new Error("Illegal state.");
      }
    }
    function Te() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function w(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[u] = function() {
            return this;
          }, w.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), c;
          }, w.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: c, done: !0 };
          }, w;
        }()
      ), d = (
        /** @class */
        function() {
          function w() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(w.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), w.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, w.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, w.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, w.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, y = h + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, pt(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, w.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, w.prototype.entries = function() {
            return new a(this._keys, this._values, C);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[u] = function() {
            return this.entries();
          }, w.prototype._find = function(c, h) {
            if (!pt(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pt(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return d;
      function v(w, c) {
        return w;
      }
      function P(w, c) {
        return c;
      }
      function C(w, c) {
        return [w, c];
      }
    }
    function Ne() {
      var i = (
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
      return i;
    }
    function De() {
      var i = 16, o = g.create(), a = d();
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
            return f !== void 0 ? g.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? g.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var y = v(
              h,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
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
          c = "@@WeakMap@@" + w();
        while (g.has(o, c));
        return o[c] = !0, c;
      }
      function v(c, h) {
        if (!n.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: g.create() });
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
      function w() {
        var c = C(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var y = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function vt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Gt || (Gt = {}));
function Le(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Be(r) {
  return function(t) {
    if (Le(r)) {
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
  return Be(r);
}
function We(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        zt(this, "_stylesApplied", !1);
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
        var m;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && b) {
          const g = new CSSStyleSheet(), $ = (m = l.sheet) == null ? void 0 : m.cssRules;
          $ && (Array.from($).forEach((O) => g.insertRule(O.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, g]);
        } else if (l) {
          const g = l.cloneNode(!0);
          p.appendChild(g);
        }
        u.forEach((g) => {
          const $ = g.cloneNode(!0);
          p.appendChild($);
        });
      }
    }
    return e;
  };
}
function Ge(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ve(r) {
  return function(t, e) {
    try {
      Ge(r);
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
function se(r) {
  return Ve(r);
}
var lt;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(lt || (lt = {}));
var ut;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(ut || (ut = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = globalThis, $t = at.ShadowRoot && (at.ShadyCSS === void 0 || at.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, wt = Symbol(), Vt = /* @__PURE__ */ new WeakMap();
let oe = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== wt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if ($t && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Vt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Vt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Fe = (r) => new oe(typeof r == "string" ? r : r + "", void 0, wt), qe = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new oe(e, r, wt);
}, Ke = (r, t) => {
  if ($t) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = at.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, Ft = $t ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Fe(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ze, defineProperty: Xe, getOwnPropertyDescriptor: Je, getOwnPropertyNames: Ye, getOwnPropertySymbols: Qe, getPrototypeOf: tr } = Object, U = globalThis, qt = U.trustedTypes, er = qt ? qt.emptyScript : "", bt = U.reactiveElementPolyfillSupport, X = (r, t) => r, dt = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? er : null;
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
} }, At = (r, t) => !Ze(r, t), Kt = { attribute: !0, type: String, converter: dt, reflect: !1, useDefault: !1, hasChanged: At };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), U.litPropertyMetadata ?? (U.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let V = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Kt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Xe(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: l } = Je(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const b = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, b, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Kt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const t = tr(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const e = this.properties, n = [...Ye(e), ...Qe(e)];
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
      for (const s of n) e.unshift(Ft(s));
    } else t !== void 0 && e.push(Ft(t));
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
    return Ke(t, this.constructor.elementStyles), t;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : dt).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const b = n.getPropertyOptions(s), p = typeof b.converter == "function" ? { fromAttribute: b.converter } : ((l = b.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? b.converter : dt;
      this._$Em = s;
      const m = p.fromAttribute(e, b.type);
      this[s] = m ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? m, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const b = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = b.getPropertyOptions(t)), !((n.hasChanged ?? At)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(b._$Eu(t, n)))) return;
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
        const { wrapped: b } = u, p = this[l];
        b !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[X("elementProperties")] = /* @__PURE__ */ new Map(), V[X("finalized")] = /* @__PURE__ */ new Map(), bt == null || bt({ ReactiveElement: V }), (U.reactiveElementVersions ?? (U.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, Zt = (r) => r, ct = J.trustedTypes, Xt = ct ? ct.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ae = "$lit$", D = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + D, rr = `<${le}>`, B = document, Q = () => B.createComment(""), tt = (r) => r === null || typeof r != "object" && typeof r != "function", Et = Array.isArray, nr = (r) => Et(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jt = /-->/g, Yt = />/g, H = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qt = /'/g, te = /"/g, ue = /^(?:script|style|textarea|title)$/i, ir = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), ot = ir(1), F = Symbol.for("lit-noChange"), k = Symbol.for("lit-nothing"), ee = /* @__PURE__ */ new WeakMap(), j = B.createTreeWalker(B, 129);
function de(r, t) {
  if (!Et(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xt !== void 0 ? Xt.createHTML(t) : t;
}
const sr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = Z;
  for (let b = 0; b < e; b++) {
    const p = r[b];
    let m, g, $ = -1, O = 0;
    for (; O < p.length && (u.lastIndex = O, g = u.exec(p), g !== null); ) O = u.lastIndex, u === Z ? g[1] === "!--" ? u = Jt : g[1] !== void 0 ? u = Yt : g[2] !== void 0 ? (ue.test(g[2]) && (s = RegExp("</" + g[2], "g")), u = H) : g[3] !== void 0 && (u = H) : u === H ? g[0] === ">" ? (u = s ?? Z, $ = -1) : g[1] === void 0 ? $ = -2 : ($ = u.lastIndex - g[2].length, m = g[1], u = g[3] === void 0 ? H : g[3] === '"' ? te : Qt) : u === te || u === Qt ? u = H : u === Jt || u === Yt ? u = Z : (u = H, s = void 0);
    const S = u === H && r[b + 1].startsWith("/>") ? " " : "";
    l += u === Z ? p + rr : $ >= 0 ? (n.push(m), p.slice(0, $) + ae + p.slice($) + D + S) : p + D + ($ === -2 ? b : S);
  }
  return [de(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class et {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const b = t.length - 1, p = this.parts, [m, g] = sr(t, e);
    if (this.el = et.createElement(m, n), j.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = j.nextNode()) !== null && p.length < b; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(ae)) {
          const O = g[u++], S = s.getAttribute($).split(D), R = /([.?@])?(.*)/.exec(O);
          p.push({ type: 1, index: l, name: R[2], strings: S, ctor: R[1] === "." ? ar : R[1] === "?" ? lr : R[1] === "@" ? ur : ht }), s.removeAttribute($);
        } else $.startsWith(D) && (p.push({ type: 6, index: l }), s.removeAttribute($));
        if (ue.test(s.tagName)) {
          const $ = s.textContent.split(D), O = $.length - 1;
          if (O > 0) {
            s.textContent = ct ? ct.emptyScript : "";
            for (let S = 0; S < O; S++) s.append($[S], Q()), j.nextNode(), p.push({ type: 2, index: ++l });
            s.append($[O], Q());
          }
        }
      } else if (s.nodeType === 8) if (s.data === le) p.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(D, $ + 1)) !== -1; ) p.push({ type: 7, index: l }), $ += D.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = B.createElement("template");
    return n.innerHTML = t, n;
  }
}
function q(r, t, e = r, n) {
  var u, b;
  if (t === F) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = tt(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((b = s == null ? void 0 : s._$AO) == null || b.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = q(r, s._$AS(r, t.values), s, n)), t;
}
class or {
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
    j.currentNode = s;
    let l = j.nextNode(), u = 0, b = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let m;
        p.type === 2 ? m = new rt(l, l.nextSibling, this, t) : p.type === 1 ? m = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (m = new dr(l, this, t)), this._$AV.push(m), p = n[++b];
      }
      u !== (p == null ? void 0 : p.index) && (l = j.nextNode(), u++);
    }
    return j.currentNode = B, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class rt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = k, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = q(this, t, e), tt(t) ? t === k || t == null || t === "" ? (this._$AH !== k && this._$AR(), this._$AH = k) : t !== this._$AH && t !== F && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : nr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== k && tt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(B.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = et.createElement(de(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new or(s, this), b = u.u(this.options);
      u.p(e), this.T(b), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ee.get(t.strings);
    return e === void 0 && ee.set(t.strings, e = new et(t)), e;
  }
  k(t) {
    Et(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new rt(this.O(Q()), this.O(Q()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Zt(t).nextSibling;
      Zt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class ht {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, l) {
    this.type = 1, this._$AH = k, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = k;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = q(this, t, e, 0), u = !tt(t) || t !== this._$AH && t !== F, u && (this._$AH = t);
    else {
      const b = t;
      let p, m;
      for (t = l[0], p = 0; p < l.length - 1; p++) m = q(this, b[n + p], e, p), m === F && (m = this._$AH[p]), u || (u = !tt(m) || m !== this._$AH[p]), m === k ? t = k : t !== k && (t += (m ?? "") + l[p + 1]), this._$AH[p] = m;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === k ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ar extends ht {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === k ? void 0 : t;
  }
}
class lr extends ht {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== k);
  }
}
class ur extends ht {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = q(this, t, e, 0) ?? k) === F) return;
    const n = this._$AH, s = t === k && n !== k || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== k && (n === k || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class dr {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    q(this, t);
  }
}
const mt = J.litHtmlPolyfillSupport;
mt == null || mt(et, rt), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.3.3");
const cr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new rt(t.insertBefore(Q(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis;
class Y extends V {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = cr(e, this.renderRoot, this.renderOptions);
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
    return F;
  }
}
var ie;
Y._$litElement$ = !0, Y.finalized = !0, (ie = L.litElementHydrateSupport) == null || ie.call(L, { LitElement: Y });
const gt = L.litElementPolyfillSupport;
gt == null || gt({ LitElement: Y });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: dt, reflect: !1, hasChanged: At }, fr = (r = hr, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(b) {
      const p = t.get.call(this);
      t.set.call(this, b), this.requestUpdate(u, p, r, !0, b);
    }, init(b) {
      return b !== void 0 && this.C(u, void 0, r, b), b;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(b) {
      const p = this[u];
      t.call(this, b), this.requestUpdate(u, p, r, !0, b);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function xt(r) {
  return (t, e) => typeof e == "object" ? fr(r, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ce(r) {
  return xt({ ...r, state: !0, attribute: !1 });
}
var pr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, nt = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? yr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && pr(t, e, s), s;
};
const re = () => window.zeroThemeManager, vr = {
  kind: "generic",
  templateHtml: [
    "<div style='width:100%;overflow-x:auto;padding:2px;'>",
    "<table style='width:100%;border-collapse:collapse;font-family:inherit;border:4px solid #1e293b;background:var(--uiv-surface-color,#ffffff);box-shadow:8px 8px 0 #1e293b;'>",
    "<thead><tr>",
    "<th style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;border-right:4px solid #1e293b;background:#f8fafc;font-weight:900;text-transform:uppercase;'>ID</th>",
    "<th style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;border-right:4px solid #1e293b;background:#f8fafc;font-weight:900;text-transform:uppercase;'>Name</th>",
    "<th style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;background:#f8fafc;font-weight:900;text-transform:uppercase;'>Status</th>",
    "</tr></thead>",
    "<tbody>",
    "<tr>",
    "<td style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;border-right:4px solid #1e293b;'>001</td>",
    "<td style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;border-right:4px solid #1e293b;'>BLOCK_A</td>",
    "<td style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;'>OK</td>",
    "</tr>",
    "<tr>",
    "<td style='padding:12px 15px;text-align:left;border-right:4px solid #1e293b;'>002</td>",
    "<td style='padding:12px 15px;text-align:left;border-right:4px solid #1e293b;'>BLOCK_B</td>",
    "<td style='padding:12px 15px;text-align:left;'>WARN</td>",
    "</tr>",
    "</tbody>",
    "</table>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Blocky", "NeoRutalism"]
};
function ne(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let z = class extends Y {
  constructor() {
    super(...arguments), this.columns = [
      { key: "id", label: "ID", sortable: !0 },
      { key: "name", label: "Name", sortable: !0 },
      { key: "status", label: "Status", sortable: !0 }
    ], this.data = [
      { id: "001", name: "BLOCK_A", status: "OK" },
      { id: "002", name: "BLOCK_B", status: "WARN" },
      { id: "003", name: "BLOCK_C", status: "FAIL" }
    ], this.sortKey = "", this.sortOrder = "asc";
  }
  static getStudioTemplate(r) {
    var l, u, b, p;
    const t = ((u = (l = r == null ? void 0 : r.studio) == null ? void 0 : l.props) == null ? void 0 : u.columns) || [
      { key: "id", label: "ID", sortable: !0 },
      { key: "name", label: "Name", sortable: !0 },
      { key: "status", label: "Status", sortable: !0 }
    ], e = ((p = (b = r == null ? void 0 : r.studio) == null ? void 0 : b.props) == null ? void 0 : p.data) || [
      { id: "001", name: "BLOCK_A", status: "OK" },
      { id: "002", name: "BLOCK_B", status: "WARN" }
    ];
    let n = "<thead><tr>";
    for (let m = 0; m < t.length; m++) {
      const g = t[m], $ = g.label || g.key || "", S = m === t.length - 1 ? "" : "border-right:4px solid #1e293b;";
      n += `<th style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;${S}background:#f8fafc;font-weight:900;text-transform:uppercase;'>${ne(String($))}</th>`;
    }
    n += "</tr></thead>";
    let s = "<tbody>";
    for (let m = 0; m < Math.min(e.length, 5); m++) {
      const g = e[m], O = m === Math.min(e.length, 5) - 1 ? "" : "border-bottom:4px solid #1e293b;";
      s += "<tr>";
      for (let S = 0; S < t.length; S++) {
        const R = t[S], W = S === t.length - 1 ? "" : "border-right:4px solid #1e293b;", it = g[R.key] !== void 0 ? String(g[R.key]) : "";
        s += `<td style='padding:12px 15px;text-align:left;${O}${W}'>${ne(it)}</td>`;
      }
      s += "</tr>";
    }
    return s += "</tbody>", {
      ...vr,
      templateHtml: [
        "<div style='width:100%;overflow-x:auto;padding:2px;'>",
        "<table style='width:100%;border-collapse:collapse;font-family:inherit;border:4px solid #1e293b;background:var(--uiv-surface-color,#ffffff);box-shadow:8px 8px 0 #1e293b;'>",
        n,
        s,
        "</table>",
        "</div>"
      ].join("")
    };
  }
  handleSort(r) {
    this.sortKey === r ? this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc" : (this.sortKey = r, this.sortOrder = "asc");
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = re()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const r = (e = re()) == null ? void 0 : e.getActiveTheme(), t = [...this.data].sort((n, s) => {
      if (!this.sortKey) return 0;
      const l = n[this.sortKey], u = s[this.sortKey];
      return this.sortOrder === "asc" ? l > u ? 1 : -1 : l < u ? 1 : -1;
    });
    return ot`
            <style>
                ${r ? r.getGlobalStyles() : ""}
            </style>
            <div class="uiv-${r == null ? void 0 : r.id}-theme">
                <table class="uiv-${r == null ? void 0 : r.id}-card">
                    <thead>
                        <tr>
                            ${this.columns.map((n) => ot`
                                <th class="uiv-${r == null ? void 0 : r.id}-text" @click="${() => this.handleSort(n.key)}">
                                    ${n.label} ${this.sortKey === n.key ? this.sortOrder === "asc" ? "▴" : "▾" : ""}
                                </th>
                            `)}
                        </tr>
                    </thead>
                    <tbody>
                        ${t.map((n) => ot`
                            <tr>
                                ${this.columns.map((s) => ot`
                                    <td class="uiv-${r == null ? void 0 : r.id}-text-secondary">${n[s.key]}</td>
                                `)}
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        `;
  }
};
z.styles = qe`
        :host {
            display: block;
            width: 100%;
            overflow-x: auto;
            --tbl-p: var(--uiv-primary-color, #6366f1);
            --tbl-s: var(--uiv-secondary-color, #8b5cf6);
            --tbl-bg: var(--uiv-surface-color, #ffffff);
            --tbl-border: var(--uiv-border-color, #e2e8f0);
            --tbl-t: var(--uiv-text-color, #1e293b);
            --tbl-muted: var(--uiv-text-muted, #64748b);
            --depth: var(--uiv-shadow-depth, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
        }

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            border: 1px solid var(--tbl-border);
            background: var(--tbl-bg);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--depth);
            margin-bottom: 20px;
        }

        th {
            background: rgba(99, 102, 241, 0.05);
            color: var(--tbl-p);
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.75rem;
            letter-spacing: 0.05em;
            padding: 14px 16px;
            text-align: left;
            border-bottom: 1px solid var(--tbl-border);
        }

        td {
            padding: 12px 16px;
            border-bottom: 1px solid var(--tbl-border);
            color: var(--tbl-t);
            font-size: 0.875rem;
        }

        tr:last-child td {
            border-bottom: none;
        }

        th:last-child, td:last-child {
            border-right: none;
        }

        tr:hover td {
            background: rgba(0,0,0,0.05);
        }
    `;
nt([
  xt({ type: Array }),
  se({
    attributeType: ut.PROPERTY,
    uiComponentType: lt.TEXTAREA,
    displayLabel: "Columns JSON",
    fieldMappings: "columns"
  })
], z.prototype, "columns", 2);
nt([
  xt({ type: Array }),
  se({
    attributeType: ut.PROPERTY,
    uiComponentType: lt.TEXTAREA,
    displayLabel: "Data JSON",
    fieldMappings: "data"
  })
], z.prototype, "data", 2);
nt([
  ce()
], z.prototype, "sortKey", 2);
nt([
  ce()
], z.prototype, "sortOrder", 2);
z = nt([
  ze({
    name: "zero-uiv-table-blocky",
    version: "1.0.0",
    title: "3D Blocky Table",
    elementSelector: "zero-uiv-table-blocky",
    group: "Uiverse Tables",
    iconName: "table-icon.png"
  }),
  We()
], z);
export {
  z as ZeroUivTableBlocky,
  vr as blockyTemplate
};
