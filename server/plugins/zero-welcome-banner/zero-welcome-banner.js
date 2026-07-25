var Ne = Object.defineProperty;
var He = (r, t, e) => t in r ? Ne(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Vt = (r, t, e) => He(r, typeof t != "symbol" ? t + "" : t, e);
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
var Gt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Bt == "object" ? Bt : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(y, E) {
      return function($, w) {
        Object.defineProperty(y, $, { configurable: !0, writable: !0, value: w }), E && E($, w);
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
    function g() {
      return l() || u();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !g && !y, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return gt(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return gt({ __proto__: null });
      } : function() {
        return gt({});
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
    }, w = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Me(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pe(), j = typeof WeakMap == "function" ? WeakMap : Re(), q = s ? Symbol.for("@reflect-metadata:registry") : void 0, lt = Te(), St = Ce(lt);
    function ue(i, o, a, d) {
      if (m(a)) {
        if (!Nt(i))
          throw new TypeError();
        if (!Ht(o))
          throw new TypeError();
        return _e(i, o);
      } else {
        if (!Nt(i))
          throw new TypeError();
        if (!S(o))
          throw new TypeError();
        if (!S(d) && !m(d) && !Y(d))
          throw new TypeError();
        return Y(d) && (d = void 0), a = N(a), be(i, o, a, d);
      }
    }
    t("decorate", ue);
    function de(i, o) {
      function a(d, v) {
        if (!S(d))
          throw new TypeError();
        if (!m(v) && !xe(v))
          throw new TypeError();
        Mt(i, o, d, v);
      }
      return a;
    }
    t("metadata", de);
    function fe(i, o, a, d) {
      if (!S(a))
        throw new TypeError();
      return m(d) || (d = N(d)), Mt(i, o, a, d);
    }
    t("defineMetadata", fe);
    function he(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return m(a) || (a = N(a)), Tt(i, o, a);
    }
    t("hasMetadata", he);
    function ce(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return m(a) || (a = N(a)), pt(i, o, a);
    }
    t("hasOwnMetadata", ce);
    function pe(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return m(a) || (a = N(a)), Ct(i, o, a);
    }
    t("getMetadata", pe);
    function ye(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return m(a) || (a = N(a)), Ot(i, o, a);
    }
    t("getOwnMetadata", ye);
    function ve(i, o) {
      if (!S(i))
        throw new TypeError();
      return m(o) || (o = N(o)), Pt(i, o);
    }
    t("getMetadataKeys", ve);
    function ge(i, o) {
      if (!S(i))
        throw new TypeError();
      return m(o) || (o = N(o)), Rt(i, o);
    }
    t("getOwnMetadataKeys", ge);
    function me(i, o, a) {
      if (!S(o))
        throw new TypeError();
      if (m(a) || (a = N(a)), !S(o))
        throw new TypeError();
      m(a) || (a = N(a));
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : d.OrdinaryDeleteMetadata(i, o, a);
    }
    t("deleteMetadata", me);
    function _e(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var d = i[a], v = d(o);
        if (!m(v) && !Y(v)) {
          if (!Ht(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function be(i, o, a, d) {
      for (var v = i.length - 1; v >= 0; --v) {
        var C = i[v], T = C(o, a, d);
        if (!m(T) && !Y(T)) {
          if (!S(T))
            throw new TypeError();
          d = T;
        }
      }
      return d;
    }
    function Tt(i, o, a) {
      var d = pt(i, o, a);
      if (d)
        return !0;
      var v = vt(o);
      return Y(v) ? !1 : Tt(i, v, a);
    }
    function pt(i, o, a) {
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : Ut(d.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Ct(i, o, a) {
      var d = pt(i, o, a);
      if (d)
        return Ot(i, o, a);
      var v = vt(o);
      if (!Y(v))
        return Ct(i, v, a);
    }
    function Ot(i, o, a) {
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(d))
        return d.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Mt(i, o, a, d) {
      var v = Q(
        a,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, d);
    }
    function Pt(i, o) {
      var a = Rt(i, o), d = vt(i);
      if (d === null)
        return a;
      var v = Pt(d, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var C = new k(), T = [], _ = 0, f = a; _ < f.length; _++) {
        var h = f[_], c = C.has(h);
        c || (C.add(h), T.push(h));
      }
      for (var p = 0, b = v; p < b.length; p++) {
        var h = b[p], c = C.has(h);
        c || (C.add(h), T.push(h));
      }
      return T;
    }
    function Rt(i, o) {
      var a = Q(
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
    function m(i) {
      return i === void 0;
    }
    function Y(i) {
      return i === null;
    }
    function we(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function $e(i, o) {
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
      var a = "string", d = It(i, l);
      if (d !== void 0) {
        var v = d.call(i, a);
        if (S(v))
          throw new TypeError();
        return v;
      }
      return Ee(i);
    }
    function Ee(i, o) {
      var a, d;
      {
        var v = i.toString;
        if (ut(v)) {
          var d = v.call(i);
          if (!S(d))
            return d;
        }
        var a = i.valueOf;
        if (ut(a)) {
          var d = a.call(i);
          if (!S(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ut(i) {
      return !!i;
    }
    function Ae(i) {
      return "" + i;
    }
    function N(i) {
      var o = $e(i);
      return we(o) ? o : Ae(o);
    }
    function Nt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ut(i) {
      return typeof i == "function";
    }
    function Ht(i) {
      return typeof i == "function";
    }
    function xe(i) {
      switch (kt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function yt(i, o) {
      return i === o || i !== i && o !== o;
    }
    function It(i, o) {
      var a = i[o];
      if (a != null) {
        if (!ut(a))
          throw new TypeError();
        return a;
      }
    }
    function jt(i) {
      var o = It(i, u);
      if (!ut(o))
        throw new TypeError();
      var a = o.call(i);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function Dt(i) {
      return i.value;
    }
    function Lt(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function zt(i) {
      var o = i.return;
      o && o.call(i);
    }
    function vt(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var a = i.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return o;
      var v = d.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Se() {
      var i;
      !m(q) && typeof e.Reflect < "u" && !(q in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Oe(e.Reflect));
      var o, a, d, v = new j(), C = {
        registerProvider: T,
        getProvider: f,
        setProvider: c
      };
      return C;
      function T(p) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
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
            d === void 0 && (d = new k()), d.add(p);
            break;
        }
      }
      function _(p, b) {
        if (!m(o)) {
          if (o.isProviderFor(p, b))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(p, b))
              return o;
            if (!m(d))
              for (var A = jt(d); ; ) {
                var x = Lt(A);
                if (!x)
                  return;
                var U = Dt(x);
                if (U.isProviderFor(p, b))
                  return zt(A), U;
              }
          }
        }
        if (!m(i) && i.isProviderFor(p, b))
          return i;
      }
      function f(p, b) {
        var A = v.get(p), x;
        return m(A) || (x = A.get(b)), m(x) && (x = _(p, b), m(x) || (m(A) && (A = new M(), v.set(p, A)), A.set(b, x))), x;
      }
      function h(p) {
        if (m(p))
          throw new TypeError();
        return o === p || a === p || !m(d) && d.has(p);
      }
      function c(p, b, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var x = f(p, b);
        if (x !== A) {
          if (!m(x))
            return !1;
          var U = v.get(p);
          m(U) && (U = new M(), v.set(p, U)), U.set(b, A);
        }
        return !0;
      }
    }
    function Te() {
      var i;
      return !m(q) && S(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[q]), m(i) && (i = Se()), !m(q) && S(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, q, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ce(i) {
      var o = new j(), a = {
        isProviderFor: function(h, c) {
          var p = o.get(h);
          return m(p) ? !1 : p.has(c);
        },
        OrdinaryDefineOwnMetadata: T,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: f
      };
      return lt.registerProvider(a), a;
      function d(h, c, p) {
        var b = o.get(h), A = !1;
        if (m(b)) {
          if (!p)
            return;
          b = new M(), o.set(h, b), A = !0;
        }
        var x = b.get(c);
        if (m(x)) {
          if (!p)
            return;
          if (x = new M(), b.set(c, x), !i.setProvider(h, c, a))
            throw b.delete(c), A && o.delete(h), new Error("Wrong provider for target.");
        }
        return x;
      }
      function v(h, c, p) {
        var b = d(
          c,
          p,
          /*Create*/
          !1
        );
        return m(b) ? !1 : Ut(b.has(h));
      }
      function C(h, c, p) {
        var b = d(
          c,
          p,
          /*Create*/
          !1
        );
        if (!m(b))
          return b.get(h);
      }
      function T(h, c, p, b) {
        var A = d(
          p,
          b,
          /*Create*/
          !0
        );
        A.set(h, c);
      }
      function _(h, c) {
        var p = [], b = d(
          h,
          c,
          /*Create*/
          !1
        );
        if (m(b))
          return p;
        for (var A = b.keys(), x = jt(A), U = 0; ; ) {
          var Ft = Lt(x);
          if (!Ft)
            return p.length = U, p;
          var ke = Dt(Ft);
          try {
            p[U] = ke;
          } catch (Ue) {
            try {
              zt(x);
            } finally {
              throw Ue;
            }
          }
          U++;
        }
      }
      function f(h, c, p) {
        var b = d(
          c,
          p,
          /*Create*/
          !1
        );
        if (m(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var A = o.get(c);
          m(A) || (A.delete(p), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Oe(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, d = i.getOwnMetadata, v = i.getOwnMetadataKeys, C = i.deleteMetadata, T = new j(), _ = {
        isProviderFor: function(f, h) {
          var c = T.get(f);
          return !m(c) && c.has(h) ? !0 : v(f, h).length ? (m(c) && (c = new k(), T.set(f, c)), c.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return _;
    }
    function Q(i, o, a) {
      var d = lt.getProvider(i, o);
      if (!m(d))
        return d;
      if (a) {
        if (lt.setProvider(i, o, St))
          return St;
        throw new Error("Illegal state.");
      }
    }
    function Me() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function _(f, h, c) {
            this._index = 0, this._keys = f, this._values = h, this._selector = c;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[u] = function() {
            return this;
          }, _.prototype.next = function() {
            var f = this._index;
            if (f >= 0 && f < this._keys.length) {
              var h = this._selector(this._keys[f], this._values[f]);
              return f + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(f) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), f;
          }, _.prototype.return = function(f) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: f, done: !0 };
          }, _;
        }()
      ), d = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(f) {
            return this._find(
              f,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(f) {
            var h = this._find(
              f,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, _.prototype.set = function(f, h) {
            var c = this._find(
              f,
              /*insert*/
              !0
            );
            return this._values[c] = h, this;
          }, _.prototype.delete = function(f) {
            var h = this._find(
              f,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var c = this._keys.length, p = h + 1; p < c; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, yt(f, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, T);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(f, h) {
            if (!yt(this._cacheKey, f)) {
              this._cacheIndex = -1;
              for (var c = 0; c < this._keys.length; c++)
                if (yt(this._keys[c], f)) {
                  this._cacheIndex = c;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(f), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return d;
      function v(_, f) {
        return _;
      }
      function C(_, f) {
        return f;
      }
      function T(_, f) {
        return [_, f];
      }
    }
    function Pe() {
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
    function Re() {
      var i = 16, o = $.create(), a = d();
      return (
        /** @class */
        function() {
          function f() {
            this._key = d();
          }
          return f.prototype.has = function(h) {
            var c = v(
              h,
              /*create*/
              !1
            );
            return c !== void 0 ? $.has(c, this._key) : !1;
          }, f.prototype.get = function(h) {
            var c = v(
              h,
              /*create*/
              !1
            );
            return c !== void 0 ? $.get(c, this._key) : void 0;
          }, f.prototype.set = function(h, c) {
            var p = v(
              h,
              /*create*/
              !0
            );
            return p[this._key] = c, this;
          }, f.prototype.delete = function(h) {
            var c = v(
              h,
              /*create*/
              !1
            );
            return c !== void 0 ? delete c[this._key] : !1;
          }, f.prototype.clear = function() {
            this._key = d();
          }, f;
        }()
      );
      function d() {
        var f;
        do
          f = "@@WeakMap@@" + _();
        while ($.has(o, f));
        return o[f] = !0, f;
      }
      function v(f, h) {
        if (!n.call(f, a)) {
          if (!h)
            return;
          Object.defineProperty(f, a, { value: $.create() });
        }
        return f[a];
      }
      function C(f, h) {
        for (var c = 0; c < h; ++c)
          f[c] = Math.random() * 255 | 0;
        return f;
      }
      function T(f) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(f);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, f), h;
        }
        return C(new Array(f), f);
      }
      function _() {
        var f = T(i);
        f[6] = f[6] & 79 | 64, f[8] = f[8] & 191 | 128;
        for (var h = "", c = 0; c < i; ++c) {
          var p = f[c];
          (c === 4 || c === 6 || c === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function gt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Gt || (Gt = {}));
function Ie(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function je(r) {
  return function(t) {
    if (Ie(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName,
        layoutKind: r.layoutKind,
        environment: r.environment
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
function De(r) {
  return je(r);
}
function Le(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Vt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const $ = new CSSStyleSheet(), w = (E = l.sheet) == null ? void 0 : E.cssRules;
          w && (Array.from(w).forEach((M) => $.insertRule(M.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          y.appendChild($);
        }
        u.forEach(($) => {
          const w = $.cloneNode(!0);
          y.appendChild(w);
        });
      }
    }
    return e;
  };
}
function ze(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Fe(r) {
  return function(t, e) {
    try {
      ze(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
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
function G(r) {
  return Fe(r);
}
var H;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(H || (H = {}));
var I;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(I || (I = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt = globalThis, $t = dt.ShadowRoot && (dt.ShadyCSS === void 0 || dt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Et = Symbol(), Wt = /* @__PURE__ */ new WeakMap();
let ie = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== Et) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if ($t && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Wt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Wt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ve = (r) => new ie(typeof r == "string" ? r : r + "", void 0, Et), Be = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ie(e, r, Et);
}, Ge = (r, t) => {
  if ($t) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = dt.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, qt = $t ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Ve(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: We, defineProperty: qe, getOwnPropertyDescriptor: Ye, getOwnPropertyNames: Ze, getOwnPropertySymbols: Xe, getPrototypeOf: Je } = Object, L = globalThis, Yt = L.trustedTypes, Qe = Yt ? Yt.emptyScript : "", mt = L.reactiveElementPolyfillSupport, et = (r, t) => r, ft = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Qe : null;
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
} }, At = (r, t) => !We(r, t), Zt = { attribute: !0, type: String, converter: ft, reflect: !1, useDefault: !1, hasChanged: At };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Zt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && qe(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: l } = Ye(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const g = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(et("elementProperties"))) return;
    const t = Je(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(et("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(et("properties"))) {
      const e = this.properties, n = [...Ze(e), ...Xe(e)];
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
    return Ge(t, this.constructor.elementStyles), t;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ft).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const g = n.getPropertyOptions(s), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : ft;
      this._$Em = s;
      const E = y.fromAttribute(e, g.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const g = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = g.getPropertyOptions(t)), !((n.hasChanged ?? At)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(g._$Eu(t, n)))) return;
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
        const { wrapped: g } = u, y = this[l];
        g !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[et("elementProperties")] = /* @__PURE__ */ new Map(), Z[et("finalized")] = /* @__PURE__ */ new Map(), mt == null || mt({ ReactiveElement: Z }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt = globalThis, Xt = (r) => r, ht = rt.trustedTypes, Jt = ht ? ht.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, se = "$lit$", D = `lit$${Math.random().toFixed(9).slice(2)}$`, oe = "?" + D, Ke = `<${oe}>`, B = document, it = () => B.createComment(""), st = (r) => r === null || typeof r != "object" && typeof r != "function", xt = Array.isArray, tr = (r) => xt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qt = /-->/g, Kt = />/g, z = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), te = /'/g, ee = /"/g, ae = /^(?:script|style|textarea|title)$/i, er = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), tt = er(1), X = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), re = /* @__PURE__ */ new WeakMap(), F = B.createTreeWalker(B, 129);
function le(r, t) {
  if (!xt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Jt !== void 0 ? Jt.createHTML(t) : t;
}
const rr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = K;
  for (let g = 0; g < e; g++) {
    const y = r[g];
    let E, $, w = -1, M = 0;
    for (; M < y.length && (u.lastIndex = M, $ = u.exec(y), $ !== null); ) M = u.lastIndex, u === K ? $[1] === "!--" ? u = Qt : $[1] !== void 0 ? u = Kt : $[2] !== void 0 ? (ae.test($[2]) && (s = RegExp("</" + $[2], "g")), u = z) : $[3] !== void 0 && (u = z) : u === z ? $[0] === ">" ? (u = s ?? K, w = -1) : $[1] === void 0 ? w = -2 : (w = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? z : $[3] === '"' ? ee : te) : u === ee || u === te ? u = z : u === Qt || u === Kt ? u = K : (u = z, s = void 0);
    const k = u === z && r[g + 1].startsWith("/>") ? " " : "";
    l += u === K ? y + Ke : w >= 0 ? (n.push(E), y.slice(0, w) + se + y.slice(w) + D + k) : y + D + (w === -2 ? g : k);
  }
  return [le(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class ot {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const g = t.length - 1, y = this.parts, [E, $] = rr(t, e);
    if (this.el = ot.createElement(E, n), F.currentNode = this.el.content, e === 2 || e === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = F.nextNode()) !== null && y.length < g; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(se)) {
          const M = $[u++], k = s.getAttribute(w).split(D), j = /([.?@])?(.*)/.exec(M);
          y.push({ type: 1, index: l, name: j[2], strings: k, ctor: j[1] === "." ? ir : j[1] === "?" ? sr : j[1] === "@" ? or : ct }), s.removeAttribute(w);
        } else w.startsWith(D) && (y.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ae.test(s.tagName)) {
          const w = s.textContent.split(D), M = w.length - 1;
          if (M > 0) {
            s.textContent = ht ? ht.emptyScript : "";
            for (let k = 0; k < M; k++) s.append(w[k], it()), F.nextNode(), y.push({ type: 2, index: ++l });
            s.append(w[M], it());
          }
        }
      } else if (s.nodeType === 8) if (s.data === oe) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(D, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += D.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = B.createElement("template");
    return n.innerHTML = t, n;
  }
}
function J(r, t, e = r, n) {
  var u, g;
  if (t === X) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = st(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((g = s == null ? void 0 : s._$AO) == null || g.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = J(r, s._$AS(r, t.values), s, n)), t;
}
class nr {
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
    F.currentNode = s;
    let l = F.nextNode(), u = 0, g = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new at(l, l.nextSibling, this, t) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, t) : y.type === 6 && (E = new ar(l, this, t)), this._$AV.push(E), y = n[++g];
      }
      u !== (y == null ? void 0 : y.index) && (l = F.nextNode(), u++);
    }
    return F.currentNode = B, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class at {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = J(this, t, e), st(t) ? t === O || t == null || t === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : t !== this._$AH && t !== X && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : tr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== O && st(this._$AH) ? this._$AA.nextSibling.data = t : this.T(B.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = ot.createElement(le(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new nr(s, this), g = u.u(this.options);
      u.p(e), this.T(g), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = re.get(t.strings);
    return e === void 0 && re.set(t.strings, e = new ot(t)), e;
  }
  k(t) {
    xt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new at(this.O(it()), this.O(it()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
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
  constructor(t, e, n, s, l) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = O;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = J(this, t, e, 0), u = !st(t) || t !== this._$AH && t !== X, u && (this._$AH = t);
    else {
      const g = t;
      let y, E;
      for (t = l[0], y = 0; y < l.length - 1; y++) E = J(this, g[n + y], e, y), E === X && (E = this._$AH[y]), u || (u = !st(E) || E !== this._$AH[y]), E === O ? t = O : t !== O && (t += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ir extends ct {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === O ? void 0 : t;
  }
}
class sr extends ct {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== O);
  }
}
class or extends ct {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = J(this, t, e, 0) ?? O) === X) return;
    const n = this._$AH, s = t === O && n !== O || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== O && (n === O || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ar {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    J(this, t);
  }
}
const bt = rt.litHtmlPolyfillSupport;
bt == null || bt(ot, at), (rt.litHtmlVersions ?? (rt.litHtmlVersions = [])).push("3.3.3");
const lr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new at(t.insertBefore(it(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = globalThis;
class nt extends Z {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = lr(e, this.renderRoot, this.renderOptions);
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
var ne;
nt._$litElement$ = !0, nt.finalized = !0, (ne = V.litElementHydrateSupport) == null || ne.call(V, { LitElement: nt });
const wt = V.litElementPolyfillSupport;
wt == null || wt({ LitElement: nt });
(V.litElementVersions ?? (V.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: ft, reflect: !1, hasChanged: At }, dr = (r = ur, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(g) {
      const y = t.get.call(this);
      t.set.call(this, g), this.requestUpdate(u, y, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(u, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(g) {
      const y = this[u];
      t.call(this, g), this.requestUpdate(u, y, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function W(r) {
  return (t, e) => typeof e == "object" ? dr(r, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var fr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, R = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? hr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && fr(t, e, s), s;
};
let P = class extends nt {
  constructor() {
    super(...arguments), this.title = "Explore Redesigned Able Pro", this.subtitle = "Ready-made components to build your dashboard faster.", this.buttonText = "CodedThemes", this.buttonHref = "#", this.gradientFrom = "#4680ff", this.gradientTo = "#1e3a8a", this.imageUrl = "";
  }
  static getStudioTemplate(r) {
    return {
      kind: "generic",
      templateHtml: [
        "<div style='background:linear-gradient(120deg,#4680ff,#1e3a8a);border-radius:10px;padding:28px 32px;display:flex;align-items:center;justify-content:space-between;gap:24px;font-family:inherit;box-shadow:0 4px 14px rgba(70,128,255,0.28);'>",
        "<div style='min-width:0;'>",
        "<div style='font-size:20px;font-weight:700;color:#ffffff;'>{{display:title}}</div>",
        "<div style='font-size:13px;color:rgba(255,255,255,0.85);margin:6px 0 16px;'>Ready-made components to build your dashboard faster.</div>",
        "<span style='display:inline-block;background:#ffffff;color:#1d2630;font-size:13px;font-weight:600;padding:8px 18px;border-radius:8px;'>CodedThemes</span>",
        "</div>",
        "<div style='width:120px;height:80px;border-radius:8px;background:rgba(255,255,255,0.15);flex:0 0 auto;'></div>",
        "</div>"
      ].join(""),
      badges: ["Welcome Banner"],
      titleProp: "title",
      emptyText: ""
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
  get buttonTextConfig() {
    return this.buttonText;
  }
  set buttonTextConfig(r) {
    this.buttonText = r;
  }
  get buttonHrefConfig() {
    return this.buttonHref;
  }
  set buttonHrefConfig(r) {
    this.buttonHref = r;
  }
  get gradientFromConfig() {
    return this.gradientFrom;
  }
  set gradientFromConfig(r) {
    this.gradientFrom = r || "#4680ff";
  }
  get gradientToConfig() {
    return this.gradientTo;
  }
  set gradientToConfig(r) {
    this.gradientTo = r || "#1e3a8a";
  }
  get imageUrlConfig() {
    return this.imageUrl;
  }
  set imageUrlConfig(r) {
    this.imageUrl = r;
  }
  render() {
    const r = this.gradientFrom || "#4680ff", t = this.gradientTo || "#1e3a8a", e = `linear-gradient(120deg, ${r}, ${t})`;
    return tt`
      <div class="banner" style="background: ${e}">
        <div class="content">
          <h3 class="title">${this.title}</h3>
          ${this.subtitle ? tt`<p class="subtitle">${this.subtitle}</p>` : ""}
          ${this.buttonText ? tt`<a class="cta" href=${this.buttonHref || "#"}>${this.buttonText}</a>` : ""}
        </div>
        <div class="media">
          ${this.imageUrl ? tt`<img src=${this.imageUrl} alt=${this.title} />` : tt`<div class="placeholder"></div>`}
        </div>
      </div>
    `;
  }
};
P.styles = Be`
    :host {
      display: block;
      --wb-text: #ffffff;
      --wb-primary: var(--uiv-primary-color, #4680ff);
    }
    .banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      border-radius: 10px;
      padding: 28px 32px;
      box-sizing: border-box;
      color: var(--wb-text);
      font-family: inherit;
      box-shadow: 0 4px 14px rgba(70, 128, 255, 0.28);
    }
    .content {
      min-width: 0;
      flex: 1 1 auto;
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      margin: 0;
      color: #ffffff;
    }
    .subtitle {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.85);
      margin: 6px 0 18px;
      max-width: 460px;
    }
    .cta {
      display: inline-block;
      background: #ffffff;
      color: var(--uiv-text-color, #1d2630);
      font-size: 13px;
      font-weight: 600;
      padding: 9px 20px;
      border-radius: 8px;
      text-decoration: none;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .cta:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
    }
    .media {
      flex: 0 0 auto;
      width: 160px;
      max-width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .media img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    .media .placeholder {
      width: 140px;
      height: 90px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.15);
    }
    @media (max-width: 560px) {
      .banner { flex-direction: column; align-items: flex-start; }
      .media { width: 100%; max-width: 100%; }
    }
  `;
R([
  W({ type: String })
], P.prototype, "title", 2);
R([
  W({ type: String })
], P.prototype, "subtitle", 2);
R([
  W({ type: String, attribute: "button-text" })
], P.prototype, "buttonText", 2);
R([
  W({ type: String, attribute: "button-href" })
], P.prototype, "buttonHref", 2);
R([
  W({ type: String, attribute: "gradient-from" })
], P.prototype, "gradientFrom", 2);
R([
  W({ type: String, attribute: "gradient-to" })
], P.prototype, "gradientTo", 2);
R([
  W({ type: String, attribute: "image-url" })
], P.prototype, "imageUrl", 2);
R([
  G({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title",
    initialValue: "Explore Redesigned Able Pro"
  })
], P.prototype, "titleConfig", 1);
R([
  G({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Subtitle",
    fieldMappings: "subtitle",
    initialValue: "Ready-made components to build your dashboard faster."
  })
], P.prototype, "subtitleConfig", 1);
R([
  G({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Button Text",
    fieldMappings: "buttonText",
    initialValue: "CodedThemes"
  })
], P.prototype, "buttonTextConfig", 1);
R([
  G({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Button Link (href)",
    fieldMappings: "buttonHref",
    initialValue: "#"
  })
], P.prototype, "buttonHrefConfig", 1);
R([
  G({
    attributeType: I.PROPERTY,
    uiComponentType: H.COLOR_PICKER,
    displayLabel: "Gradient From",
    fieldMappings: "gradientFrom",
    initialValue: "#4680ff"
  })
], P.prototype, "gradientFromConfig", 1);
R([
  G({
    attributeType: I.PROPERTY,
    uiComponentType: H.COLOR_PICKER,
    displayLabel: "Gradient To",
    fieldMappings: "gradientTo",
    initialValue: "#1e3a8a"
  })
], P.prototype, "gradientToConfig", 1);
R([
  G({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Image URL (optional)",
    fieldMappings: "imageUrl",
    initialValue: ""
  })
], P.prototype, "imageUrlConfig", 1);
P = R([
  De({
    name: "zero-welcome-banner",
    version: "1.0.0",
    title: "Welcome Banner",
    elementSelector: "zero-welcome-banner",
    group: "Dashboard",
    iconName: "welcome-banner-icon.png",
    layoutKind: "leaf"
  }),
  Le()
], P);
export {
  P as ZeroWelcomeBanner
};
