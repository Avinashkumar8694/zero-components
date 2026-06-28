var He = Object.defineProperty;
var je = (n, t, e) => t in n ? He(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var zt = (n, t, e) => je(n, typeof t != "symbol" ? t + "" : t, e);
var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Wt;
(function(n) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Bt == "object" ? Bt : typeof self == "object" ? self : typeof this == "object" ? this : b(), r = s(n);
    typeof e.Reflect < "u" && (r = s(e.Reflect, r)), t(r, e), typeof e.Reflect > "u" && (e.Reflect = n);
    function s(p, g) {
      return function(m, $) {
        Object.defineProperty(p, m, { configurable: !0, writable: !0, value: $ }), g && g(m, $);
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
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, g = !b && !p, m = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return yt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return yt({ __proto__: null });
      } : function() {
        return yt({});
      },
      has: g ? function(i, o) {
        return r.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: g ? function(i, o) {
        return r.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, $ = Object.getPrototypeOf(Function), O = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Re(), C = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ne(), R = typeof WeakMap == "function" ? WeakMap : Ie(), z = s ? Symbol.for("@reflect-metadata:registry") : void 0, nt = ke(), St = Ce(nt);
    function he(i, o, a, d) {
      if (_(a)) {
        if (!Nt(i))
          throw new TypeError();
        if (!It(o))
          throw new TypeError();
        return $e(i, o);
      } else {
        if (!Nt(i))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(d) && !_(d) && !B(d))
          throw new TypeError();
        return B(d) && (d = void 0), a = N(a), Ae(i, o, a, d);
      }
    }
    t("decorate", he);
    function fe(i, o) {
      function a(d, v) {
        if (!M(d))
          throw new TypeError();
        if (!_(v) && !xe(v))
          throw new TypeError();
        Pt(i, o, d, v);
      }
      return a;
    }
    t("metadata", fe);
    function pe(i, o, a, d) {
      if (!M(a))
        throw new TypeError();
      return _(d) || (d = N(d)), Pt(i, o, a, d);
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
      return _(a) || (a = N(a)), ht(i, o, a);
    }
    t("hasOwnMetadata", ve);
    function be(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = N(a)), Mt(i, o, a);
    }
    t("getMetadata", be);
    function _e(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = N(a)), xt(i, o, a);
    }
    t("getOwnMetadata", _e);
    function ge(i, o) {
      if (!M(i))
        throw new TypeError();
      return _(o) || (o = N(o)), kt(i, o);
    }
    t("getMetadataKeys", ge);
    function me(i, o) {
      if (!M(i))
        throw new TypeError();
      return _(o) || (o = N(o)), Ct(i, o);
    }
    t("getOwnMetadataKeys", me);
    function we(i, o, a) {
      if (!M(o))
        throw new TypeError();
      if (_(a) || (a = N(a)), !M(o))
        throw new TypeError();
      _(a) || (a = N(a));
      var d = q(
        o,
        a,
        /*Create*/
        !1
      );
      return _(d) ? !1 : d.OrdinaryDeleteMetadata(i, o, a);
    }
    t("deleteMetadata", we);
    function $e(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var d = i[a], v = d(o);
        if (!_(v) && !B(v)) {
          if (!It(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function Ae(i, o, a, d) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], x = P(o, a, d);
        if (!_(x) && !B(x)) {
          if (!M(x))
            throw new TypeError();
          d = x;
        }
      }
      return d;
    }
    function Ot(i, o, a) {
      var d = ht(i, o, a);
      if (d)
        return !0;
      var v = pt(o);
      return B(v) ? !1 : Ot(i, v, a);
    }
    function ht(i, o, a) {
      var d = q(
        o,
        a,
        /*Create*/
        !1
      );
      return _(d) ? !1 : Rt(d.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Mt(i, o, a) {
      var d = ht(i, o, a);
      if (d)
        return xt(i, o, a);
      var v = pt(o);
      if (!B(v))
        return Mt(i, v, a);
    }
    function xt(i, o, a) {
      var d = q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!_(d))
        return d.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Pt(i, o, a, d) {
      var v = q(
        a,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, d);
    }
    function kt(i, o) {
      var a = Ct(i, o), d = pt(i);
      if (d === null)
        return a;
      var v = kt(d, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new C(), x = [], w = 0, c = a; w < c.length; w++) {
        var h = c[w], f = P.has(h);
        f || (P.add(h), x.push(h));
      }
      for (var y = 0, A = v; y < A.length; y++) {
        var h = A[y], f = P.has(h);
        f || (P.add(h), x.push(h));
      }
      return x;
    }
    function Ct(i, o) {
      var a = q(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function Tt(i) {
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
    function B(i) {
      return i === null;
    }
    function Ee(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Se(i, o) {
      switch (Tt(i)) {
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
      var a = "string", d = Dt(i, l);
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
        if (it(v)) {
          var d = v.call(i);
          if (!M(d))
            return d;
        }
        var a = i.valueOf;
        if (it(a)) {
          var d = a.call(i);
          if (!M(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Rt(i) {
      return !!i;
    }
    function Me(i) {
      return "" + i;
    }
    function N(i) {
      var o = Se(i);
      return Ee(o) ? o : Me(o);
    }
    function Nt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function it(i) {
      return typeof i == "function";
    }
    function It(i) {
      return typeof i == "function";
    }
    function xe(i) {
      switch (Tt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ft(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Dt(i, o) {
      var a = i[o];
      if (a != null) {
        if (!it(a))
          throw new TypeError();
        return a;
      }
    }
    function Ut(i) {
      var o = Dt(i, u);
      if (!it(o))
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
    function pt(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || o !== $)
        return o;
      var a = i.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return o;
      var v = d.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Pe() {
      var i;
      !_(z) && typeof e.Reflect < "u" && !(z in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Te(e.Reflect));
      var o, a, d, v = new R(), P = {
        registerProvider: x,
        getProvider: c,
        setProvider: f
      };
      return P;
      function x(y) {
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
            d === void 0 && (d = new C()), d.add(y);
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
              for (var E = Ut(d); ; ) {
                var S = jt(E);
                if (!S)
                  return;
                var T = Ht(S);
                if (T.isProviderFor(y, A))
                  return Lt(E), T;
              }
          }
        }
        if (!_(i) && i.isProviderFor(y, A))
          return i;
      }
      function c(y, A) {
        var E = v.get(y), S;
        return _(E) || (S = E.get(A)), _(S) && (S = w(y, A), _(S) || (_(E) && (E = new O(), v.set(y, E)), E.set(A, S))), S;
      }
      function h(y) {
        if (_(y))
          throw new TypeError();
        return o === y || a === y || !_(d) && d.has(y);
      }
      function f(y, A, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = c(y, A);
        if (S !== E) {
          if (!_(S))
            return !1;
          var T = v.get(y);
          _(T) && (T = new O(), v.set(y, T)), T.set(A, E);
        }
        return !0;
      }
    }
    function ke() {
      var i;
      return !_(z) && M(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[z]), _(i) && (i = Pe()), !_(z) && M(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, z, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ce(i) {
      var o = new R(), a = {
        isProviderFor: function(h, f) {
          var y = o.get(h);
          return _(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: c
      };
      return nt.registerProvider(a), a;
      function d(h, f, y) {
        var A = o.get(h), E = !1;
        if (_(A)) {
          if (!y)
            return;
          A = new O(), o.set(h, A), E = !0;
        }
        var S = A.get(f);
        if (_(S)) {
          if (!y)
            return;
          if (S = new O(), A.set(f, S), !i.setProvider(h, f, a))
            throw A.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, y) {
        var A = d(
          f,
          y,
          /*Create*/
          !1
        );
        return _(A) ? !1 : Rt(A.has(h));
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
      function x(h, f, y, A) {
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
        for (var E = A.keys(), S = Ut(E), T = 0; ; ) {
          var Gt = jt(S);
          if (!Gt)
            return y.length = T, y;
          var De = Ht(Gt);
          try {
            y[T] = De;
          } catch (Ue) {
            try {
              Lt(S);
            } finally {
              throw Ue;
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
    function Te(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, d = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, x = new R(), w = {
        isProviderFor: function(c, h) {
          var f = x.get(c);
          return !_(f) && f.has(h) ? !0 : v(c, h).length ? (_(f) && (f = new C(), x.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return w;
    }
    function q(i, o, a) {
      var d = nt.getProvider(i, o);
      if (!_(d))
        return d;
      if (a) {
        if (nt.setProvider(i, o, St))
          return St;
        throw new Error("Illegal state.");
      }
    }
    function Re() {
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
              return this._keys.length--, this._values.length--, ft(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
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
          }, w.prototype._find = function(c, h) {
            if (!ft(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ft(this._keys[f], c)) {
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
      function x(w, c) {
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
    function Ie() {
      var i = 16, o = m.create(), a = d();
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
            return f !== void 0 ? m.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? m.get(f, this._key) : void 0;
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
        while (m.has(o, c));
        return o[c] = !0, c;
      }
      function v(c, h) {
        if (!r.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: m.create() });
        }
        return c[a];
      }
      function P(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function x(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : P(h, c), h;
        }
        return P(new Array(c), c);
      }
      function w() {
        var c = x(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var y = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function yt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Wt || (Wt = {}));
function Le(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function Ge(n) {
  return function(t) {
    if (Le(n)) {
      const e = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const r = `${n.elementSelector}-${n.version}`;
        if (!customElements.get(r))
          try {
            customElements.define(r, t);
          } catch {
            try {
              customElements.define(r, class extends t {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, l);
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
function ze(n) {
  return Ge(n);
}
function Be(n) {
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
        var g;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && b) {
          const m = new CSSStyleSheet(), $ = (g = l.sheet) == null ? void 0 : g.cssRules;
          $ && (Array.from($).forEach((O) => m.insertRule(O.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, m]);
        } else if (l) {
          const m = l.cloneNode(!0);
          p.appendChild(m);
        }
        u.forEach((m) => {
          const $ = m.cloneNode(!0);
          p.appendChild($);
        });
      }
    }
    return e;
  };
}
function We(n) {
  var e;
  if (((e = n == null ? void 0 : n.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Fe(n) {
  return function(t, e) {
    try {
      We(n);
      const r = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (n.fieldMappings = n.fieldMappings ?? e);
      }
      r.push(n), Reflect.defineMetadata("ZeroAttribute", r, t);
    } catch (r) {
      console.log(r);
    }
  };
}
function se(n) {
  return Fe(n);
}
var at;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker", n.CHIPS = "chips";
})(at || (at = {}));
var lt;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(lt || (lt = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot = globalThis, mt = ot.ShadowRoot && (ot.ShadyCSS === void 0 || ot.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, wt = Symbol(), Ft = /* @__PURE__ */ new WeakMap();
let oe = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== wt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (mt && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = Ft.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Ft.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ve = (n) => new oe(typeof n == "string" ? n : n + "", void 0, wt), qe = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((r, s, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[l + 1], n[0]);
  return new oe(e, n, wt);
}, Ze = (n, t) => {
  if (mt) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), s = ot.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = e.cssText, n.appendChild(r);
  }
}, Vt = mt ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return Ve(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xe, defineProperty: Je, getOwnPropertyDescriptor: Ye, getOwnPropertyNames: Ke, getOwnPropertySymbols: Qe, getPrototypeOf: tr } = Object, D = globalThis, qt = D.trustedTypes, er = qt ? qt.emptyScript : "", vt = D.reactiveElementPolyfillSupport, X = (n, t) => n, ut = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? er : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, $t = (n, t) => !Xe(n, t), Zt = { attribute: !0, type: String, converter: ut, reflect: !1, useDefault: !1, hasChanged: $t };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let W = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Zt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(t, r, e);
      s !== void 0 && Je(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: s, set: l } = Ye(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const b = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, b, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const t = tr(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const e = this.properties, r = [...Ke(e), ...Qe(e)];
      for (const s of r) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, s] of e) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const s = this._$Eu(e, r);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const s of r) e.unshift(Vt(s));
    } else t !== void 0 && e.push(Vt(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ze(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ET(t, e) {
    var l;
    const r = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, r);
    if (s !== void 0 && r.reflect === !0) {
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : ut).toAttribute(e, r.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const r = this.constructor, s = r._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const b = r.getPropertyOptions(s), p = typeof b.converter == "function" ? { fromAttribute: b.converter } : ((l = b.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? b.converter : ut;
      this._$Em = s;
      const g = p.fromAttribute(e, b.type);
      this[s] = g ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? g, this._$Em = null;
    }
  }
  requestUpdate(t, e, r, s = !1, l) {
    var u;
    if (t !== void 0) {
      const b = this.constructor;
      if (s === !1 && (l = this[t]), r ?? (r = b.getPropertyOptions(t)), !((r.hasChanged ?? $t)(l, e) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(b._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: s, wrapped: l }, u) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
    var r;
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
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((s) => {
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
    (e = this._$EO) == null || e.forEach((r) => {
      var s;
      return (s = r.hostUpdated) == null ? void 0 : s.call(r);
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
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[X("elementProperties")] = /* @__PURE__ */ new Map(), W[X("finalized")] = /* @__PURE__ */ new Map(), vt == null || vt({ ReactiveElement: W }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, Xt = (n) => n, dt = J.trustedTypes, Jt = dt ? dt.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, ae = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + I, rr = `<${le}>`, L = document, K = () => L.createComment(""), Q = (n) => n === null || typeof n != "object" && typeof n != "function", At = Array.isArray, nr = (n) => At(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", bt = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Yt = /-->/g, Kt = />/g, U = RegExp(`>|${bt}(?:([^\\s"'>=/]+)(${bt}*=${bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qt = /'/g, te = /"/g, ue = /^(?:script|style|textarea|title)$/i, ir = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), st = ir(1), F = Symbol.for("lit-noChange"), k = Symbol.for("lit-nothing"), ee = /* @__PURE__ */ new WeakMap(), H = L.createTreeWalker(L, 129);
function de(n, t) {
  if (!At(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Jt !== void 0 ? Jt.createHTML(t) : t;
}
const sr = (n, t) => {
  const e = n.length - 1, r = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = Z;
  for (let b = 0; b < e; b++) {
    const p = n[b];
    let g, m, $ = -1, O = 0;
    for (; O < p.length && (u.lastIndex = O, m = u.exec(p), m !== null); ) O = u.lastIndex, u === Z ? m[1] === "!--" ? u = Yt : m[1] !== void 0 ? u = Kt : m[2] !== void 0 ? (ue.test(m[2]) && (s = RegExp("</" + m[2], "g")), u = U) : m[3] !== void 0 && (u = U) : u === U ? m[0] === ">" ? (u = s ?? Z, $ = -1) : m[1] === void 0 ? $ = -2 : ($ = u.lastIndex - m[2].length, g = m[1], u = m[3] === void 0 ? U : m[3] === '"' ? te : Qt) : u === te || u === Qt ? u = U : u === Yt || u === Kt ? u = Z : (u = U, s = void 0);
    const C = u === U && n[b + 1].startsWith("/>") ? " " : "";
    l += u === Z ? p + rr : $ >= 0 ? (r.push(g), p.slice(0, $) + ae + p.slice($) + I + C) : p + I + ($ === -2 ? b : C);
  }
  return [de(n, l + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class tt {
  constructor({ strings: t, _$litType$: e }, r) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const b = t.length - 1, p = this.parts, [g, m] = sr(t, e);
    if (this.el = tt.createElement(g, r), H.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = H.nextNode()) !== null && p.length < b; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(ae)) {
          const O = m[u++], C = s.getAttribute($).split(I), R = /([.?@])?(.*)/.exec(O);
          p.push({ type: 1, index: l, name: R[2], strings: C, ctor: R[1] === "." ? ar : R[1] === "?" ? lr : R[1] === "@" ? ur : ct }), s.removeAttribute($);
        } else $.startsWith(I) && (p.push({ type: 6, index: l }), s.removeAttribute($));
        if (ue.test(s.tagName)) {
          const $ = s.textContent.split(I), O = $.length - 1;
          if (O > 0) {
            s.textContent = dt ? dt.emptyScript : "";
            for (let C = 0; C < O; C++) s.append($[C], K()), H.nextNode(), p.push({ type: 2, index: ++l });
            s.append($[O], K());
          }
        }
      } else if (s.nodeType === 8) if (s.data === le) p.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(I, $ + 1)) !== -1; ) p.push({ type: 7, index: l }), $ += I.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const r = L.createElement("template");
    return r.innerHTML = t, r;
  }
}
function V(n, t, e = n, r) {
  var u, b;
  if (t === F) return t;
  let s = r !== void 0 ? (u = e._$Co) == null ? void 0 : u[r] : e._$Cl;
  const l = Q(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((b = s == null ? void 0 : s._$AO) == null || b.call(s, !1), l === void 0 ? s = void 0 : (s = new l(n), s._$AT(n, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = s : e._$Cl = s), s !== void 0 && (t = V(n, s._$AS(n, t.values), s, r)), t;
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
    const { el: { content: e }, parts: r } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? L).importNode(e, !0);
    H.currentNode = s;
    let l = H.nextNode(), u = 0, b = 0, p = r[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let g;
        p.type === 2 ? g = new et(l, l.nextSibling, this, t) : p.type === 1 ? g = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (g = new dr(l, this, t)), this._$AV.push(g), p = r[++b];
      }
      u !== (p == null ? void 0 : p.index) && (l = H.nextNode(), u++);
    }
    return H.currentNode = L, s;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class et {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, r, s) {
    this.type = 2, this._$AH = k, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = V(this, t, e), Q(t) ? t === k || t == null || t === "" ? (this._$AH !== k && this._$AR(), this._$AH = k) : t !== this._$AH && t !== F && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : nr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== k && Q(this._$AH) ? this._$AA.nextSibling.data = t : this.T(L.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: r } = t, s = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = tt.createElement(de(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new or(s, this), b = u.u(this.options);
      u.p(e), this.T(b), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ee.get(t.strings);
    return e === void 0 && ee.set(t.strings, e = new tt(t)), e;
  }
  k(t) {
    At(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, s = 0;
    for (const l of t) s === e.length ? e.push(r = new et(this.O(K()), this.O(K()), this, this.options)) : r = e[s], r._$AI(l), s++;
    s < e.length && (this._$AR(r && r._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Xt(t).nextSibling;
      Xt(t).remove(), t = s;
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
  constructor(t, e, r, s, l) {
    this.type = 1, this._$AH = k, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = k;
  }
  _$AI(t, e = this, r, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = V(this, t, e, 0), u = !Q(t) || t !== this._$AH && t !== F, u && (this._$AH = t);
    else {
      const b = t;
      let p, g;
      for (t = l[0], p = 0; p < l.length - 1; p++) g = V(this, b[r + p], e, p), g === F && (g = this._$AH[p]), u || (u = !Q(g) || g !== this._$AH[p]), g === k ? t = k : t !== k && (t += (g ?? "") + l[p + 1]), this._$AH[p] = g;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === k ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ar extends ct {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === k ? void 0 : t;
  }
}
class lr extends ct {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== k);
  }
}
class ur extends ct {
  constructor(t, e, r, s, l) {
    super(t, e, r, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = V(this, t, e, 0) ?? k) === F) return;
    const r = this._$AH, s = t === k && r !== k || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, l = t !== k && (r === k || s);
    s && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class dr {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    V(this, t);
  }
}
const _t = J.litHtmlPolyfillSupport;
_t == null || _t(tt, et), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.3.3");
const cr = (n, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = r._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = s = new et(t.insertBefore(K(), l), l, void 0, e ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = globalThis;
class Y extends W {
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
Y._$litElement$ = !0, Y.finalized = !0, (ie = j.litElementHydrateSupport) == null || ie.call(j, { LitElement: Y });
const gt = j.litElementPolyfillSupport;
gt == null || gt({ LitElement: Y });
(j.litElementVersions ?? (j.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: ut, reflect: !1, hasChanged: $t }, fr = (n = hr, t, e) => {
  const { kind: r, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), l.set(e.name, n), r === "accessor") {
    const { name: u } = e;
    return { set(b) {
      const p = t.get.call(this);
      t.set.call(this, b), this.requestUpdate(u, p, n, !0, b);
    }, init(b) {
      return b !== void 0 && this.C(u, void 0, n, b), b;
    } };
  }
  if (r === "setter") {
    const { name: u } = e;
    return function(b) {
      const p = this[u];
      t.call(this, b), this.requestUpdate(u, p, n, !0, b);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function Et(n) {
  return (t, e) => typeof e == "object" ? fr(n, t, e) : ((r, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(n, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ce(n) {
  return Et({ ...n, state: !0, attribute: !1 });
}
var pr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, rt = (n, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? yr(t, e) : t, l = n.length - 1, u; l >= 0; l--)
    (u = n[l]) && (s = (r ? u(t, e, s) : u(s)) || s);
  return r && s && pr(t, e, s), s;
};
const re = () => window.zeroThemeManager, vr = {
  kind: "generic",
  templateHtml: [
    "<div style='width:100%;overflow-x:auto;padding:2px;'>",
    "<table style='width:100%;border-collapse:collapse;font-family:inherit;background:rgba(255,255,255,0.1);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.2);border-radius:12px;overflow:hidden;'>",
    "<thead><tr>",
    "<th style='padding:15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.2);color:#fff;font-weight:600;background:rgba(255, 255, 255, 0.1);'>ID</th>",
    "<th style='padding:15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.2);color:#fff;font-weight:600;background:rgba(255, 255, 255, 0.1);'>Name</th>",
    "<th style='padding:15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.2);color:#fff;font-weight:600;background:rgba(255, 255, 255, 0.1);'>Status</th>",
    "</tr></thead>",
    "<tbody>",
    "<tr>",
    "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.05);color:#fff;'>1</td>",
    "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.05);color:#fff;'>UI Kit</td>",
    "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.05);color:#fff;'>In Review</td>",
    "</tr>",
    "<tr>",
    "<td style='padding:12px 15px;text-align:left;color:#fff;'>2</td>",
    "<td style='padding:12px 15px;text-align:left;color:#fff;'>Design System</td>",
    "<td style='padding:12px 15px;text-align:left;color:#fff;'>Approved</td>",
    "</tr>",
    "</tbody>",
    "</table>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Frosted", "Glassmorphism"]
};
function ne(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let G = class extends Y {
  constructor() {
    super(...arguments), this.columns = [
      { key: "id", label: "ID", sortable: !0 },
      { key: "name", label: "Name", sortable: !0 },
      { key: "status", label: "Status", sortable: !0 }
    ], this.data = [
      { id: "1", name: "UI Kit", status: "In Review" },
      { id: "2", name: "Design System", status: "Approved" },
      { id: "3", name: "Asset Pack", status: "Pending" }
    ], this.sortKey = "", this.sortOrder = "asc";
  }
  static getStudioTemplate(n) {
    var l, u, b, p;
    const t = ((u = (l = n == null ? void 0 : n.studio) == null ? void 0 : l.props) == null ? void 0 : u.columns) || [
      { key: "id", label: "ID", sortable: !0 },
      { key: "name", label: "Name", sortable: !0 },
      { key: "status", label: "Status", sortable: !0 }
    ], e = ((p = (b = n == null ? void 0 : n.studio) == null ? void 0 : b.props) == null ? void 0 : p.data) || [
      { id: "1", name: "UI Kit", status: "In Review" },
      { id: "2", name: "Design System", status: "Approved" }
    ];
    let r = "<thead><tr>";
    for (const g of t) {
      const m = g.label || g.key || "";
      r += `<th style='padding:15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.2);color:#fff;font-weight:600;background:rgba(255, 255, 255, 0.1);'>${ne(String(m))}</th>`;
    }
    r += "</tr></thead>";
    let s = "<tbody>";
    for (let g = 0; g < Math.min(e.length, 5); g++) {
      const m = e[g], O = g === Math.min(e.length, 5) - 1 ? "" : "border-bottom:1px solid rgba(255, 255, 255, 0.05);";
      s += "<tr>";
      for (const C of t) {
        const R = m[C.key] !== void 0 ? String(m[C.key]) : "";
        s += `<td style='padding:12px 15px;text-align:left;${O}color:#fff;'>${ne(R)}</td>`;
      }
      s += "</tr>";
    }
    return s += "</tbody>", {
      ...vr,
      templateHtml: [
        "<div style='width:100%;overflow-x:auto;padding:2px;'>",
        "<table style='width:100%;border-collapse:collapse;font-family:inherit;background:rgba(255,255,255,0.1);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.2);border-radius:12px;overflow:hidden;'>",
        r,
        s,
        "</table>",
        "</div>"
      ].join("")
    };
  }
  handleSort(n) {
    this.sortKey === n ? this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc" : (this.sortKey = n, this.sortOrder = "asc");
  }
  connectedCallback() {
    var n;
    super.connectedCallback(), (n = re()) == null || n.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const n = (e = re()) == null ? void 0 : e.getActiveTheme(), t = [...this.data].sort((r, s) => {
      if (!this.sortKey) return 0;
      const l = r[this.sortKey], u = s[this.sortKey];
      return this.sortOrder === "asc" ? l > u ? 1 : -1 : l < u ? 1 : -1;
    });
    return st`
            <style>
                ${n ? n.getGlobalStyles() : ""}
            </style>
            <table>
                <thead>
                    <tr>
                        ${this.columns.map((r) => st`
                            <th @click="${() => this.handleSort(r.key)}">
                                ${r.label} ${this.sortKey === r.key ? this.sortOrder === "asc" ? "▴" : "▾" : ""}
                            </th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${t.map((r) => st`
                        <tr>
                            ${this.columns.map((s) => st`<td>${r[s.key]}</td>`)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `;
  }
};
G.styles = qe`
        :host {
            display: block;
            width: 100%;
            overflow-x: auto;
            --tbl-p: var(--uiv-primary-color, rgba(255, 255, 255, 0.5));
            --tbl-bg: var(--uiv-bg-color, rgba(255, 255, 255, 0.1));
            --tbl-b: var(--uiv-border-color, rgba(255, 255, 255, 0.2));
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: var(--tbl-bg);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border: 1px solid var(--tbl-b);
            border-radius: 12px;
            overflow: hidden;
            font-family: inherit;
        }

        th {
            background: rgba(255, 255, 255, 0.1);
            color: var(--uiv-text-color, #fff);
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid var(--tbl-b);
            cursor: pointer;
        }

        td {
            padding: 12px 15px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            color: var(--uiv-text-color, #fff);
        }

        tr:last-child td {
            border-bottom: none;
        }

        tr:hover td {
            background: rgba(255, 255, 255, 0.05);
        }
    `;
rt([
  Et({ type: Array }),
  se({
    attributeType: lt.PROPERTY,
    uiComponentType: at.TEXTAREA,
    displayLabel: "Columns JSON",
    fieldMappings: "columns"
  })
], G.prototype, "columns", 2);
rt([
  Et({ type: Array }),
  se({
    attributeType: lt.PROPERTY,
    uiComponentType: at.TEXTAREA,
    displayLabel: "Data JSON",
    fieldMappings: "data"
  })
], G.prototype, "data", 2);
rt([
  ce()
], G.prototype, "sortKey", 2);
rt([
  ce()
], G.prototype, "sortOrder", 2);
G = rt([
  ze({
    name: "zero-uiv-table-frosted",
    version: "1.0.0",
    title: "Frosted Glass Table",
    elementSelector: "zero-uiv-table-frosted",
    group: "Uiverse Tables",
    iconName: "table-icon.png"
  }),
  Be()
], G);
export {
  G as ZeroUivTableFrosted,
  vr as frostedTemplate
};
