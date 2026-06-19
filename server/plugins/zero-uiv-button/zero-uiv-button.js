var Ie = Object.defineProperty;
var je = (n, t, e) => t in n ? Ie(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var Wt = (n, t, e) => je(n, typeof t != "symbol" ? t + "" : t, e);
var Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ft;
(function(n) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Vt == "object" ? Vt : typeof self == "object" ? self : typeof this == "object" ? this : b(), r = s(n);
    typeof e.Reflect < "u" && (r = s(e.Reflect, r)), t(r, e), typeof e.Reflect > "u" && (e.Reflect = n);
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
    function b() {
      return l() || u();
    }
  })(function(t, e) {
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !b && !y, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return bt(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return bt({ __proto__: null });
      } : function() {
        return bt({});
      },
      has: E ? function(i, a) {
        return r.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: E ? function(i, a) {
        return r.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, $ = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Re(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ke(), j = typeof WeakMap == "function" ? WeakMap : Ne(), q = s ? Symbol.for("@reflect-metadata:registry") : void 0, ot = Me(), Ot = Pe(ot);
    function de(i, a, o, c) {
      if (g(o)) {
        if (!Dt(i))
          throw new TypeError();
        if (!It(a))
          throw new TypeError();
        return $e(i, a);
      } else {
        if (!Dt(i))
          throw new TypeError();
        if (!S(a))
          throw new TypeError();
        if (!S(c) && !g(c) && !Y(c))
          throw new TypeError();
        return Y(c) && (c = void 0), o = N(o), we(i, a, o, c);
      }
    }
    t("decorate", de);
    function he(i, a) {
      function o(c, v) {
        if (!S(c))
          throw new TypeError();
        if (!g(v) && !Oe(v))
          throw new TypeError();
        Tt(i, a, c, v);
      }
      return o;
    }
    t("metadata", he);
    function fe(i, a, o, c) {
      if (!S(o))
        throw new TypeError();
      return g(c) || (c = N(c)), Tt(i, a, o, c);
    }
    t("defineMetadata", fe);
    function pe(i, a, o) {
      if (!S(a))
        throw new TypeError();
      return g(o) || (o = N(o)), Ct(i, a, o);
    }
    t("hasMetadata", pe);
    function ye(i, a, o) {
      if (!S(a))
        throw new TypeError();
      return g(o) || (o = N(o)), pt(i, a, o);
    }
    t("hasOwnMetadata", ye);
    function ve(i, a, o) {
      if (!S(a))
        throw new TypeError();
      return g(o) || (o = N(o)), Mt(i, a, o);
    }
    t("getMetadata", ve);
    function be(i, a, o) {
      if (!S(a))
        throw new TypeError();
      return g(o) || (o = N(o)), Pt(i, a, o);
    }
    t("getOwnMetadata", be);
    function ge(i, a) {
      if (!S(i))
        throw new TypeError();
      return g(a) || (a = N(a)), Rt(i, a);
    }
    t("getMetadataKeys", ge);
    function me(i, a) {
      if (!S(i))
        throw new TypeError();
      return g(a) || (a = N(a)), kt(i, a);
    }
    t("getOwnMetadataKeys", me);
    function _e(i, a, o) {
      if (!S(a))
        throw new TypeError();
      if (g(o) || (o = N(o)), !S(a))
        throw new TypeError();
      g(o) || (o = N(o));
      var c = Q(
        a,
        o,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, a, o);
    }
    t("deleteMetadata", _e);
    function $e(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o], v = c(a);
        if (!g(v) && !Y(v)) {
          if (!It(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function we(i, a, o, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var C = i[v], O = C(a, o, c);
        if (!g(O) && !Y(O)) {
          if (!S(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Ct(i, a, o) {
      var c = pt(i, a, o);
      if (c)
        return !0;
      var v = vt(a);
      return Y(v) ? !1 : Ct(i, v, o);
    }
    function pt(i, a, o) {
      var c = Q(
        a,
        o,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Ut(c.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Mt(i, a, o) {
      var c = pt(i, a, o);
      if (c)
        return Pt(i, a, o);
      var v = vt(a);
      if (!Y(v))
        return Mt(i, v, o);
    }
    function Pt(i, a, o) {
      var c = Q(
        a,
        o,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Tt(i, a, o, c) {
      var v = Q(
        o,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, o, c);
    }
    function Rt(i, a) {
      var o = kt(i, a), c = vt(i);
      if (c === null)
        return o;
      var v = Rt(c, a);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var C = new T(), O = [], m = 0, d = o; m < d.length; m++) {
        var h = d[m], f = C.has(h);
        f || (C.add(h), O.push(h));
      }
      for (var p = 0, _ = v; p < _.length; p++) {
        var h = _[p], f = C.has(h);
        f || (C.add(h), O.push(h));
      }
      return O;
    }
    function kt(i, a) {
      var o = Q(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Nt(i) {
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
    function Y(i) {
      return i === null;
    }
    function Ee(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function xe(i, a) {
      switch (Nt(i)) {
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
      var o = "string", c = jt(i, l);
      if (c !== void 0) {
        var v = c.call(i, o);
        if (S(v))
          throw new TypeError();
        return v;
      }
      return Ae(i);
    }
    function Ae(i, a) {
      var o, c;
      {
        var v = i.toString;
        if (lt(v)) {
          var c = v.call(i);
          if (!S(c))
            return c;
        }
        var o = i.valueOf;
        if (lt(o)) {
          var c = o.call(i);
          if (!S(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ut(i) {
      return !!i;
    }
    function Se(i) {
      return "" + i;
    }
    function N(i) {
      var a = xe(i);
      return Ee(a) ? a : Se(a);
    }
    function Dt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function lt(i) {
      return typeof i == "function";
    }
    function It(i) {
      return typeof i == "function";
    }
    function Oe(i) {
      switch (Nt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function yt(i, a) {
      return i === a || i !== i && a !== a;
    }
    function jt(i, a) {
      var o = i[a];
      if (o != null) {
        if (!lt(o))
          throw new TypeError();
        return o;
      }
    }
    function Ht(i) {
      var a = jt(i, u);
      if (!lt(a))
        throw new TypeError();
      var o = a.call(i);
      if (!S(o))
        throw new TypeError();
      return o;
    }
    function Lt(i) {
      return i.value;
    }
    function zt(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Bt(i) {
      var a = i.return;
      a && a.call(i);
    }
    function vt(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || a !== $)
        return a;
      var o = i.prototype, c = o && Object.getPrototypeOf(o);
      if (c == null || c === Object.prototype)
        return a;
      var v = c.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function Ce() {
      var i;
      !g(q) && typeof e.Reflect < "u" && !(q in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Te(e.Reflect));
      var a, o, c, v = new j(), C = {
        registerProvider: O,
        getProvider: d,
        setProvider: f
      };
      return C;
      function O(p) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case g(a):
            a = p;
            break;
          case a === p:
            break;
          case g(o):
            o = p;
            break;
          case o === p:
            break;
          default:
            c === void 0 && (c = new T()), c.add(p);
            break;
        }
      }
      function m(p, _) {
        if (!g(a)) {
          if (a.isProviderFor(p, _))
            return a;
          if (!g(o)) {
            if (o.isProviderFor(p, _))
              return a;
            if (!g(c))
              for (var x = Ht(c); ; ) {
                var A = zt(x);
                if (!A)
                  return;
                var R = Lt(A);
                if (R.isProviderFor(p, _))
                  return Bt(x), R;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, _))
          return i;
      }
      function d(p, _) {
        var x = v.get(p), A;
        return g(x) || (A = x.get(_)), g(A) && (A = m(p, _), g(A) || (g(x) && (x = new P(), v.set(p, x)), x.set(_, A))), A;
      }
      function h(p) {
        if (g(p))
          throw new TypeError();
        return a === p || o === p || !g(c) && c.has(p);
      }
      function f(p, _, x) {
        if (!h(x))
          throw new Error("Metadata provider not registered.");
        var A = d(p, _);
        if (A !== x) {
          if (!g(A))
            return !1;
          var R = v.get(p);
          g(R) && (R = new P(), v.set(p, R)), R.set(_, x);
        }
        return !0;
      }
    }
    function Me() {
      var i;
      return !g(q) && S(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[q]), g(i) && (i = Ce()), !g(q) && S(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, q, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pe(i) {
      var a = new j(), o = {
        isProviderFor: function(h, f) {
          var p = a.get(h);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return ot.registerProvider(o), o;
      function c(h, f, p) {
        var _ = a.get(h), x = !1;
        if (g(_)) {
          if (!p)
            return;
          _ = new P(), a.set(h, _), x = !0;
        }
        var A = _.get(f);
        if (g(A)) {
          if (!p)
            return;
          if (A = new P(), _.set(f, A), !i.setProvider(h, f, o))
            throw _.delete(f), x && a.delete(h), new Error("Wrong provider for target.");
        }
        return A;
      }
      function v(h, f, p) {
        var _ = c(
          f,
          p,
          /*Create*/
          !1
        );
        return g(_) ? !1 : Ut(_.has(h));
      }
      function C(h, f, p) {
        var _ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g(_))
          return _.get(h);
      }
      function O(h, f, p, _) {
        var x = c(
          p,
          _,
          /*Create*/
          !0
        );
        x.set(h, f);
      }
      function m(h, f) {
        var p = [], _ = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(_))
          return p;
        for (var x = _.keys(), A = Ht(x), R = 0; ; ) {
          var Gt = zt(A);
          if (!Gt)
            return p.length = R, p;
          var Ue = Lt(Gt);
          try {
            p[R] = Ue;
          } catch (De) {
            try {
              Bt(A);
            } finally {
              throw De;
            }
          }
          R++;
        }
      }
      function d(h, f, p) {
        var _ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (g(_) || !_.delete(h))
          return !1;
        if (_.size === 0) {
          var x = a.get(f);
          g(x) || (x.delete(p), x.size === 0 && a.delete(x));
        }
        return !0;
      }
    }
    function Te(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, C = i.deleteMetadata, O = new j(), m = {
        isProviderFor: function(d, h) {
          var f = O.get(d);
          return !g(f) && f.has(h) ? !0 : v(d, h).length ? (g(f) && (f = new T(), O.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return m;
    }
    function Q(i, a, o) {
      var c = ot.getProvider(i, a);
      if (!g(c))
        return c;
      if (o) {
        if (ot.setProvider(i, a, Ot))
          return Ot;
        throw new Error("Illegal state.");
      }
    }
    function Re() {
      var i = {}, a = [], o = (
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
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), d;
          }, m.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: d, done: !0 };
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
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, yt(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new o(this._keys, this._values, C);
          }, m.prototype.entries = function() {
            return new o(this._keys, this._values, O);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(d, h) {
            if (!yt(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (yt(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return c;
      function v(m, d) {
        return m;
      }
      function C(m, d) {
        return d;
      }
      function O(m, d) {
        return [m, d];
      }
    }
    function ke() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new P();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(o) {
            return this._map.has(o);
          }, a.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, a.prototype.delete = function(o) {
            return this._map.delete(o);
          }, a.prototype.clear = function() {
            this._map.clear();
          }, a.prototype.keys = function() {
            return this._map.keys();
          }, a.prototype.values = function() {
            return this._map.keys();
          }, a.prototype.entries = function() {
            return this._map.entries();
          }, a.prototype["@@iterator"] = function() {
            return this.keys();
          }, a.prototype[u] = function() {
            return this.keys();
          }, a;
        }()
      );
      return i;
    }
    function Ne() {
      var i = 16, a = w.create(), o = c();
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
          d = "@@WeakMap@@" + m();
        while (w.has(a, d));
        return a[d] = !0, d;
      }
      function v(d, h) {
        if (!r.call(d, o)) {
          if (!h)
            return;
          Object.defineProperty(d, o, { value: w.create() });
        }
        return d[o];
      }
      function C(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, d), h;
        }
        return C(new Array(d), d);
      }
      function m() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function bt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ft || (Ft = {}));
function He(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function Le(n) {
  return function(t) {
    if (He(n)) {
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
  return Le(n);
}
function Be(n) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Wt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && b) {
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
    return e;
  };
}
function Ge(n) {
  var e;
  if (((e = n == null ? void 0 : n.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function We(n) {
  return function(t, e) {
    try {
      Ge(n);
      const r = Reflect.getMetadata("ZeroAttribute", t) || [];
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
function z(n) {
  return We(n);
}
var D;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker";
})(D || (D = {}));
var U;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(U || (U = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = globalThis, Et = ct.ShadowRoot && (ct.ShadyCSS === void 0 || ct.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, xt = Symbol(), qt = /* @__PURE__ */ new WeakMap();
let ae = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== xt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Et && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = qt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && qt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ve = (n) => new ae(typeof n == "string" ? n : n + "", void 0, xt), Fe = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((r, s, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[l + 1], n[0]);
  return new ae(e, n, xt);
}, qe = (n, t) => {
  if (Et) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), s = ct.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = e.cssText, n.appendChild(r);
  }
}, Yt = Et ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return Ve(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ye, defineProperty: Ze, getOwnPropertyDescriptor: Xe, getOwnPropertyNames: Je, getOwnPropertySymbols: Qe, getPrototypeOf: Ke } = Object, L = globalThis, Zt = L.trustedTypes, tr = Zt ? Zt.emptyScript : "", gt = L.reactiveElementPolyfillSupport, tt = (n, t) => n, dt = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? tr : null;
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
} }, At = (n, t) => !Ye(n, t), Xt = { attribute: !0, type: String, converter: dt, reflect: !1, useDefault: !1, hasChanged: At };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Xt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(t, r, e);
      s !== void 0 && Ze(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: s, set: l } = Xe(this.prototype, t) ?? { get() {
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
    return this.elementProperties.get(t) ?? Xt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(tt("elementProperties"))) return;
    const t = Ke(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(tt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(tt("properties"))) {
      const e = this.properties, r = [...Je(e), ...Qe(e)];
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
      for (const s of r) e.unshift(Yt(s));
    } else t !== void 0 && e.push(Yt(t));
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
    return qe(t, this.constructor.elementStyles), t;
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
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : dt).toAttribute(e, r.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const r = this.constructor, s = r._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const b = r.getPropertyOptions(s), y = typeof b.converter == "function" ? { fromAttribute: b.converter } : ((l = b.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? b.converter : dt;
      this._$Em = s;
      const E = y.fromAttribute(e, b.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(t, e, r, s = !1, l) {
    var u;
    if (t !== void 0) {
      const b = this.constructor;
      if (s === !1 && (l = this[t]), r ?? (r = b.getPropertyOptions(t)), !((r.hasChanged ?? At)(l, e) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(b._$Eu(t, r)))) return;
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
        const { wrapped: b } = u, y = this[l];
        b !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[tt("elementProperties")] = /* @__PURE__ */ new Map(), Z[tt("finalized")] = /* @__PURE__ */ new Map(), gt == null || gt({ ReactiveElement: Z }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et = globalThis, Jt = (n) => n, ht = et.trustedTypes, Qt = ht ? ht.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, oe = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + H, er = `<${le}>`, V = document, nt = () => V.createComment(""), it = (n) => n === null || typeof n != "object" && typeof n != "function", St = Array.isArray, rr = (n) => St(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", mt = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Kt = /-->/g, te = />/g, B = RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ee = /'/g, re = /"/g, ue = /^(?:script|style|textarea|title)$/i, nr = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), ut = nr(1), X = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), ne = /* @__PURE__ */ new WeakMap(), G = V.createTreeWalker(V, 129);
function ce(n, t) {
  if (!St(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Qt !== void 0 ? Qt.createHTML(t) : t;
}
const ir = (n, t) => {
  const e = n.length - 1, r = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = K;
  for (let b = 0; b < e; b++) {
    const y = n[b];
    let E, w, $ = -1, P = 0;
    for (; P < y.length && (u.lastIndex = P, w = u.exec(y), w !== null); ) P = u.lastIndex, u === K ? w[1] === "!--" ? u = Kt : w[1] !== void 0 ? u = te : w[2] !== void 0 ? (ue.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = B) : w[3] !== void 0 && (u = B) : u === B ? w[0] === ">" ? (u = s ?? K, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? B : w[3] === '"' ? re : ee) : u === re || u === ee ? u = B : u === Kt || u === te ? u = K : (u = B, s = void 0);
    const T = u === B && n[b + 1].startsWith("/>") ? " " : "";
    l += u === K ? y + er : $ >= 0 ? (r.push(E), y.slice(0, $) + oe + y.slice($) + H + T) : y + H + ($ === -2 ? b : T);
  }
  return [ce(n, l + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class st {
  constructor({ strings: t, _$litType$: e }, r) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const b = t.length - 1, y = this.parts, [E, w] = ir(t, e);
    if (this.el = st.createElement(E, r), G.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = G.nextNode()) !== null && y.length < b; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(oe)) {
          const P = w[u++], T = s.getAttribute($).split(H), j = /([.?@])?(.*)/.exec(P);
          y.push({ type: 1, index: l, name: j[2], strings: T, ctor: j[1] === "." ? ar : j[1] === "?" ? or : j[1] === "@" ? lr : ft }), s.removeAttribute($);
        } else $.startsWith(H) && (y.push({ type: 6, index: l }), s.removeAttribute($));
        if (ue.test(s.tagName)) {
          const $ = s.textContent.split(H), P = $.length - 1;
          if (P > 0) {
            s.textContent = ht ? ht.emptyScript : "";
            for (let T = 0; T < P; T++) s.append($[T], nt()), G.nextNode(), y.push({ type: 2, index: ++l });
            s.append($[P], nt());
          }
        }
      } else if (s.nodeType === 8) if (s.data === le) y.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(H, $ + 1)) !== -1; ) y.push({ type: 7, index: l }), $ += H.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const r = V.createElement("template");
    return r.innerHTML = t, r;
  }
}
function J(n, t, e = n, r) {
  var u, b;
  if (t === X) return t;
  let s = r !== void 0 ? (u = e._$Co) == null ? void 0 : u[r] : e._$Cl;
  const l = it(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((b = s == null ? void 0 : s._$AO) == null || b.call(s, !1), l === void 0 ? s = void 0 : (s = new l(n), s._$AT(n, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = s : e._$Cl = s), s !== void 0 && (t = J(n, s._$AS(n, t.values), s, r)), t;
}
class sr {
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
    const { el: { content: e }, parts: r } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? V).importNode(e, !0);
    G.currentNode = s;
    let l = G.nextNode(), u = 0, b = 0, y = r[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new at(l, l.nextSibling, this, t) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, t) : y.type === 6 && (E = new ur(l, this, t)), this._$AV.push(E), y = r[++b];
      }
      u !== (y == null ? void 0 : y.index) && (l = G.nextNode(), u++);
    }
    return G.currentNode = V, s;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class at {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, r, s) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = J(this, t, e), it(t) ? t === M || t == null || t === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : t !== this._$AH && t !== X && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : rr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== M && it(this._$AH) ? this._$AA.nextSibling.data = t : this.T(V.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: r } = t, s = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = st.createElement(ce(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new sr(s, this), b = u.u(this.options);
      u.p(e), this.T(b), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ne.get(t.strings);
    return e === void 0 && ne.set(t.strings, e = new st(t)), e;
  }
  k(t) {
    St(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, s = 0;
    for (const l of t) s === e.length ? e.push(r = new at(this.O(nt()), this.O(nt()), this, this.options)) : r = e[s], r._$AI(l), s++;
    s < e.length && (this._$AR(r && r._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Jt(t).nextSibling;
      Jt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class ft {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, s, l) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = M;
  }
  _$AI(t, e = this, r, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = J(this, t, e, 0), u = !it(t) || t !== this._$AH && t !== X, u && (this._$AH = t);
    else {
      const b = t;
      let y, E;
      for (t = l[0], y = 0; y < l.length - 1; y++) E = J(this, b[r + y], e, y), E === X && (E = this._$AH[y]), u || (u = !it(E) || E !== this._$AH[y]), E === M ? t = M : t !== M && (t += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ar extends ft {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === M ? void 0 : t;
  }
}
class or extends ft {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== M);
  }
}
class lr extends ft {
  constructor(t, e, r, s, l) {
    super(t, e, r, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = J(this, t, e, 0) ?? M) === X) return;
    const r = this._$AH, s = t === M && r !== M || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, l = t !== M && (r === M || s);
    s && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ur {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    J(this, t);
  }
}
const _t = et.litHtmlPolyfillSupport;
_t == null || _t(st, at), (et.litHtmlVersions ?? (et.litHtmlVersions = [])).push("3.3.3");
const cr = (n, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = r._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = s = new at(t.insertBefore(nt(), l), l, void 0, e ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis;
class rt extends Z {
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
    return X;
  }
}
var se;
rt._$litElement$ = !0, rt.finalized = !0, (se = W.litElementHydrateSupport) == null || se.call(W, { LitElement: rt });
const $t = W.litElementPolyfillSupport;
$t == null || $t({ LitElement: rt });
(W.litElementVersions ?? (W.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: dt, reflect: !1, hasChanged: At }, hr = (n = dr, t, e) => {
  const { kind: r, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), l.set(e.name, n), r === "accessor") {
    const { name: u } = e;
    return { set(b) {
      const y = t.get.call(this);
      t.set.call(this, b), this.requestUpdate(u, y, n, !0, b);
    }, init(b) {
      return b !== void 0 && this.C(u, void 0, n, b), b;
    } };
  }
  if (r === "setter") {
    const { name: u } = e;
    return function(b) {
      const y = this[u];
      t.call(this, b), this.requestUpdate(u, y, n, !0, b);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function F(n) {
  return (t, e) => typeof e == "object" ? hr(n, t, e) : ((r, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(n, t, e);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, I = (n, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? pr(t, e) : t, l = n.length - 1, u; l >= 0; l--)
    (u = n[l]) && (s = (r ? u(t, e, s) : u(s)) || s);
  return r && s && fr(t, e, s), s;
};
const wt = () => window.zeroThemeManager, ie = {
  kind: "button",
  templateHtml: [
    "<div style='display:inline-flex;'>",
    "<button style='position:relative;padding:12px 24px;border-radius:8px;background:var(--uiv-primary-color,#6366f1);color:#fff;font-weight:600;font-size:0.85rem;box-shadow:0 2px 6px rgba(0,0,0,0.1);cursor:pointer;border:none;'>",
    "{{display:label}}",
    "</button>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Button", "Interactive"]
};
function yr(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let k = class extends rt {
  constructor() {
    super(...arguments), this.theme = "modern", this.label = "Button", this.variant = "primary", this.disabled = !1, this.loading = !1, this.tag = "R25", this.accentColor = "", this.onClickEvent = "click";
  }
  static getStudioTemplate(n) {
    var r, s;
    if (!n) return ie;
    const t = yr(n.studio.display.label || "Button"), e = (((r = n.props) == null ? void 0 : r.themeColor) ?? ((s = n.studio.props) == null ? void 0 : s.themeColor)) || "var(--uiv-primary-color,#6366f1)";
    return {
      ...ie,
      templateHtml: [
        "<div style='display:inline-flex;'>",
        `<button style='position:relative;padding:12px 24px;border-radius:8px;background:${e};color:#fff;font-weight:600;font-size:0.85rem;box-shadow:0 2px 6px rgba(0,0,0,0.1);cursor:pointer;border:none;'>`,
        `${t}`,
        "</button>",
        "</div>"
      ].join("")
    };
  }
  connectedCallback() {
    var n;
    super.connectedCallback(), (n = wt()) == null || n.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const n = (e = wt()) == null ? void 0 : e.getActiveTheme("zero-uiv-themes"), t = this.theme || (n == null ? void 0 : n.id) || "modern";
    return ut`
            <style>
                ${n ? n.getGlobalStyles() : ""}
                ${n ? n.getComponentStyles("button") : ""}
                :host {
                    ${this.accentColor ? `--uiv-primary-color: ${this.accentColor};` : ""}
                }
            </style>
            ${this.renderThemeTemplate(t)}
        `;
  }
  renderThemeTemplate(n) {
    var s;
    const t = n, e = this.disabled || this.loading, r = (s = wt()) == null ? void 0 : s.getActiveTheme("zero-uiv-themes");
    return ut`
            <button class="${t} uiv-${r == null ? void 0 : r.id}-theme uiv-${r == null ? void 0 : r.id}-card" ?disabled="${e}" data-label="${this.label}">
                <div class="btn-content uiv-${r == null ? void 0 : r.id}-text">
                    ${this.loading ? ut`<span class="spinner"></span>` : ""}
                    <slot name="prefix"></slot>
                    <span>${this.label}</span>
                    <slot name="suffix"></slot>
                </div>
                ${n === "cyber" ? ut`<span class="tag uiv-cyber-accent">${this.tag}</span>` : ""}
            </button>
        `;
  }
};
k.styles = Fe`
        :host {
            display: inline-block;
            cursor: pointer;
            --btn-p: var(--uiv-primary-color, #6366f1);
            --btn-s: var(--uiv-secondary-color, #8b5cf6);
            --btn-bg: var(--uiv-surface-color, #ffffff);
            --btn-t: var(--uiv-text-color, #fff);
            --btn-glow: var(--uiv-border-glow, 0 0 15px rgba(99, 102, 241, 0.3));
            --intensity: var(--uiv-glow-intensity, 1);
        }

        button {
            cursor: inherit;
            outline: none;
            border: none;
            background: none;
            font-family: inherit;
            position: relative;
            transition: all 0.3s ease;
        }

        .btn-content {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .spinner {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Cyber Styles */
        button.cyber {
            --slice-0: inset(50% 50% 50% 50%);
            --slice-1: inset(80% -6px 0 0);
            --slice-2: inset(50% -6px 30% 0);
            --slice-3: inset(10% -6px 85% 0);
            --slice-4: inset(40% -6px 43% 0);
            --slice-5: inset(80% -6px 5% 0);
            text-transform: uppercase;
            letter-spacing: 3px;
            padding: 10px 20px;
            background: linear-gradient(45deg, transparent 5%, var(--btn-p) 5%);
            color: var(--btn-t);
            min-width: 150px;
        }

        button.cyber::after {
            content: attr(data-label);
            display: block;
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(45deg, transparent 3%, var(--uiv-button-shadow, #00e6f6) 3%, var(--uiv-button-shadow, #00e6f6) 5%, var(--btn-p) 5%);
            text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px var(--uiv-button-shadow, #00e6f6);
            clip-path: var(--slice-0);
        }

        button.cyber:hover::after {
            animation: 1s glitch steps(2, end);
        }

        .tag {
            position: absolute;
            right: -8px;
            bottom: -8px;
            background: var(--uiv-button-accent, #f8f005);
            color: #000;
            padding: 0 4px;
            font-size: 0.65rem;
            font-weight: bold;
        }

        /* Neon Styles */
        button.neon {
            border: 2px solid var(--btn-p);
            color: var(--btn-p);
            padding: 10px 25px;
            border-radius: 5px;
            background: transparent;
            text-transform: uppercase;
            font-weight: bold;
            box-shadow: 0 0 10px var(--btn-p), inset 0 0 10px var(--btn-p);
        }

        button.neon:hover {
            background: var(--btn-p);
            color: #000;
            box-shadow: 0 0 30px var(--btn-p), inset 0 0 10px var(--btn-p);
        }

        /* Glass Styles */
        button.glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            padding: 12px 28px;
            border-radius: 12px;
        }

        button.glass:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        /* Retro Styles */
        button.retro {
            background: var(--btn-p);
            border: 3px solid #000;
            color: #000;
            padding: 10px 25px;
            font-weight: bold;
            box-shadow: 5px 5px 0px #000;
        }

        button.retro:active {
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0px #000;
        }

        /* Modern Styles */
        button.modern {
            background: var(--btn-p);
            color: var(--btn-t);
            padding: 12px 28px;
            border-radius: 8px;
            font-weight: 600;
            box-shadow: var(--uiv-shadow-depth, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
        }

        button.modern:hover {
            filter: brightness(1.1);
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        button.modern:active {
            transform: translateY(0);
        }

        @keyframes glitch {
            0% { clip-path: var(--slice-1); transform: translate(-10px, -5px); }
            10% { clip-path: var(--slice-3); transform: translate(10px, 5px); }
            20% { clip-path: var(--slice-1); transform: translate(-5px, 5px); }
            30% { clip-path: var(--slice-3); transform: translate(0px, 2px); }
            40% { clip-path: var(--slice-2); transform: translate(-2px, 0px); }
            50% { clip-path: var(--slice-3); transform: translate(2px, 0px); }
            60% { clip-path: var(--slice-4); transform: translate(2px, 5px); }
            70% { clip-path: var(--slice-2); transform: translate(-5px, 5px); }
            80% { clip-path: var(--slice-5); transform: translate(10px, -5px); }
            90% { clip-path: var(--slice-1); transform: translate(-5px, 0px); }
            100% { clip-path: var(--slice-1); transform: translate(0); }
        }
    `;
I([
  F({ type: String }),
  z({
    attributeType: U.PROPERTY,
    uiComponentType: D.DROPDOWN,
    displayLabel: "Theme",
    fieldMappings: "theme",
    optionItems: [
      { label: "Modern", value: "modern" },
      { label: "Cyber", value: "cyber" },
      { label: "Glass", value: "glass" },
      { label: "Retro", value: "retro" },
      { label: "Neon", value: "neon" }
    ]
  })
], k.prototype, "theme", 2);
I([
  F({ type: String }),
  z({
    attributeType: U.PROPERTY,
    uiComponentType: D.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], k.prototype, "label", 2);
I([
  F({ type: String }),
  z({
    attributeType: U.PROPERTY,
    uiComponentType: D.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Danger", value: "danger" }
    ]
  })
], k.prototype, "variant", 2);
I([
  F({ type: Boolean }),
  z({
    attributeType: U.PROPERTY,
    uiComponentType: D.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], k.prototype, "disabled", 2);
I([
  F({ type: Boolean }),
  z({
    attributeType: U.PROPERTY,
    uiComponentType: D.CHECKBOX,
    displayLabel: "Loading",
    fieldMappings: "loading"
  })
], k.prototype, "loading", 2);
I([
  F({ type: String }),
  z({
    attributeType: U.PROPERTY,
    uiComponentType: D.TEXT_INPUT,
    displayLabel: "Tag (Cyber-only)",
    fieldMappings: "tag"
  })
], k.prototype, "tag", 2);
I([
  F({ type: String }),
  z({
    attributeType: U.PROPERTY,
    uiComponentType: D.COLOR_PICKER,
    displayLabel: "Accent Color Overlay",
    fieldMappings: "accentColor"
  })
], k.prototype, "accentColor", 2);
I([
  z({
    attributeType: U.EVENT,
    eventTrigger: "click",
    displayLabel: "On Click"
  })
], k.prototype, "onClickEvent", 2);
k = I([
  ze({
    name: "zero-uiv-button",
    version: "1.0.0",
    title: "Unified Button",
    elementSelector: "zero-uiv-button",
    group: "Uiverse Buttons",
    iconName: "button-icon.png"
  }),
  Be()
], k);
export {
  k as ZeroUivButton,
  ie as studioTemplate
};
