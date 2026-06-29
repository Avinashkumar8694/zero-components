var De = Object.defineProperty;
var Ie = (r, t, e) => t in r ? De(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Wt = (r, t, e) => Ie(r, typeof t != "symbol" ? t + "" : t, e);
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
var Vt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Bt == "object" ? Bt : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(f, A) {
      return function(w, b) {
        Object.defineProperty(f, w, { configurable: !0, writable: !0, value: b }), A && A(w, b);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, A = !g && !f, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return yt(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return yt({ __proto__: null });
      } : function() {
        return yt({});
      },
      has: A ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: A ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, b = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Te(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ke(), D = typeof WeakMap == "function" ? WeakMap : Re(), W = s ? Symbol.for("@reflect-metadata:registry") : void 0, st = Oe(), St = Ce(st);
    function de(i, a, o, d) {
      if (_(o)) {
        if (!Ut(i))
          throw new TypeError();
        if (!Dt(a))
          throw new TypeError();
        return me(i, a);
      } else {
        if (!Ut(i))
          throw new TypeError();
        if (!M(a))
          throw new TypeError();
        if (!M(d) && !_(d) && !B(d))
          throw new TypeError();
        return B(d) && (d = void 0), o = N(o), $e(i, a, o, d);
      }
    }
    t("decorate", de);
    function ce(i, a) {
      function o(d, y) {
        if (!M(d))
          throw new TypeError();
        if (!_(y) && !Se(y))
          throw new TypeError();
        Pt(i, a, d, y);
      }
      return o;
    }
    t("metadata", ce);
    function he(i, a, o, d) {
      if (!M(o))
        throw new TypeError();
      return _(d) || (d = N(d)), Pt(i, a, o, d);
    }
    t("defineMetadata", he);
    function fe(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = N(o)), Mt(i, a, o);
    }
    t("hasMetadata", fe);
    function pe(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = N(o)), ft(i, a, o);
    }
    t("hasOwnMetadata", pe);
    function ve(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = N(o)), Ot(i, a, o);
    }
    t("getMetadata", ve);
    function ye(i, a, o) {
      if (!M(a))
        throw new TypeError();
      return _(o) || (o = N(o)), Ct(i, a, o);
    }
    t("getOwnMetadata", ye);
    function ge(i, a) {
      if (!M(i))
        throw new TypeError();
      return _(a) || (a = N(a)), Tt(i, a);
    }
    t("getMetadataKeys", ge);
    function _e(i, a) {
      if (!M(i))
        throw new TypeError();
      return _(a) || (a = N(a)), kt(i, a);
    }
    t("getOwnMetadataKeys", _e);
    function be(i, a, o) {
      if (!M(a))
        throw new TypeError();
      if (_(o) || (o = N(o)), !M(a))
        throw new TypeError();
      _(o) || (o = N(o));
      var d = X(
        a,
        o,
        /*Create*/
        !1
      );
      return _(d) ? !1 : d.OrdinaryDeleteMetadata(i, a, o);
    }
    t("deleteMetadata", be);
    function me(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var d = i[o], y = d(a);
        if (!_(y) && !B(y)) {
          if (!Dt(y))
            throw new TypeError();
          a = y;
        }
      }
      return a;
    }
    function $e(i, a, o, d) {
      for (var y = i.length - 1; y >= 0; --y) {
        var C = i[y], O = C(a, o, d);
        if (!_(O) && !B(O)) {
          if (!M(O))
            throw new TypeError();
          d = O;
        }
      }
      return d;
    }
    function Mt(i, a, o) {
      var d = ft(i, a, o);
      if (d)
        return !0;
      var y = vt(a);
      return B(y) ? !1 : Mt(i, y, o);
    }
    function ft(i, a, o) {
      var d = X(
        a,
        o,
        /*Create*/
        !1
      );
      return _(d) ? !1 : Nt(d.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Ot(i, a, o) {
      var d = ft(i, a, o);
      if (d)
        return Ct(i, a, o);
      var y = vt(a);
      if (!B(y))
        return Ot(i, y, o);
    }
    function Ct(i, a, o) {
      var d = X(
        a,
        o,
        /*Create*/
        !1
      );
      if (!_(d))
        return d.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Pt(i, a, o, d) {
      var y = X(
        o,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, a, o, d);
    }
    function Tt(i, a) {
      var o = kt(i, a), d = vt(i);
      if (d === null)
        return o;
      var y = Tt(d, a);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var C = new T(), O = [], m = 0, c = o; m < c.length; m++) {
        var h = c[m], p = C.has(h);
        p || (C.add(h), O.push(h));
      }
      for (var v = 0, $ = y; v < $.length; v++) {
        var h = $[v], p = C.has(h);
        p || (C.add(h), O.push(h));
      }
      return O;
    }
    function kt(i, a) {
      var o = X(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
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
    function B(i) {
      return i === null;
    }
    function we(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ae(i, a) {
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
      var o = "string", d = It(i, l);
      if (d !== void 0) {
        var y = d.call(i, o);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return Ee(i);
    }
    function Ee(i, a) {
      var o, d;
      {
        var y = i.toString;
        if (at(y)) {
          var d = y.call(i);
          if (!M(d))
            return d;
        }
        var o = i.valueOf;
        if (at(o)) {
          var d = o.call(i);
          if (!M(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Nt(i) {
      return !!i;
    }
    function xe(i) {
      return "" + i;
    }
    function N(i) {
      var a = Ae(i);
      return we(a) ? a : xe(a);
    }
    function Ut(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function at(i) {
      return typeof i == "function";
    }
    function Dt(i) {
      return typeof i == "function";
    }
    function Se(i) {
      switch (Rt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function pt(i, a) {
      return i === a || i !== i && a !== a;
    }
    function It(i, a) {
      var o = i[a];
      if (o != null) {
        if (!at(o))
          throw new TypeError();
        return o;
      }
    }
    function jt(i) {
      var a = It(i, u);
      if (!at(a))
        throw new TypeError();
      var o = a.call(i);
      if (!M(o))
        throw new TypeError();
      return o;
    }
    function Ht(i) {
      return i.value;
    }
    function zt(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Lt(i) {
      var a = i.return;
      a && a.call(i);
    }
    function vt(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || a !== b)
        return a;
      var o = i.prototype, d = o && Object.getPrototypeOf(o);
      if (d == null || d === Object.prototype)
        return a;
      var y = d.constructor;
      return typeof y != "function" || y === i ? a : y;
    }
    function Me() {
      var i;
      !_(W) && typeof e.Reflect < "u" && !(W in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Pe(e.Reflect));
      var a, o, d, y = new D(), C = {
        registerProvider: O,
        getProvider: c,
        setProvider: p
      };
      return C;
      function O(v) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case _(a):
            a = v;
            break;
          case a === v:
            break;
          case _(o):
            o = v;
            break;
          case o === v:
            break;
          default:
            d === void 0 && (d = new T()), d.add(v);
            break;
        }
      }
      function m(v, $) {
        if (!_(a)) {
          if (a.isProviderFor(v, $))
            return a;
          if (!_(o)) {
            if (o.isProviderFor(v, $))
              return a;
            if (!_(d))
              for (var E = jt(d); ; ) {
                var x = zt(E);
                if (!x)
                  return;
                var k = Ht(x);
                if (k.isProviderFor(v, $))
                  return Lt(E), k;
              }
          }
        }
        if (!_(i) && i.isProviderFor(v, $))
          return i;
      }
      function c(v, $) {
        var E = y.get(v), x;
        return _(E) || (x = E.get($)), _(x) && (x = m(v, $), _(x) || (_(E) && (E = new S(), y.set(v, E)), E.set($, x))), x;
      }
      function h(v) {
        if (_(v))
          throw new TypeError();
        return a === v || o === v || !_(d) && d.has(v);
      }
      function p(v, $, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var x = c(v, $);
        if (x !== E) {
          if (!_(x))
            return !1;
          var k = y.get(v);
          _(k) && (k = new S(), y.set(v, k)), k.set($, E);
        }
        return !0;
      }
    }
    function Oe() {
      var i;
      return !_(W) && M(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[W]), _(i) && (i = Me()), !_(W) && M(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, W, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ce(i) {
      var a = new D(), o = {
        isProviderFor: function(h, p) {
          var v = a.get(h);
          return _(v) ? !1 : v.has(p);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: c
      };
      return st.registerProvider(o), o;
      function d(h, p, v) {
        var $ = a.get(h), E = !1;
        if (_($)) {
          if (!v)
            return;
          $ = new S(), a.set(h, $), E = !0;
        }
        var x = $.get(p);
        if (_(x)) {
          if (!v)
            return;
          if (x = new S(), $.set(p, x), !i.setProvider(h, p, o))
            throw $.delete(p), E && a.delete(h), new Error("Wrong provider for target.");
        }
        return x;
      }
      function y(h, p, v) {
        var $ = d(
          p,
          v,
          /*Create*/
          !1
        );
        return _($) ? !1 : Nt($.has(h));
      }
      function C(h, p, v) {
        var $ = d(
          p,
          v,
          /*Create*/
          !1
        );
        if (!_($))
          return $.get(h);
      }
      function O(h, p, v, $) {
        var E = d(
          v,
          $,
          /*Create*/
          !0
        );
        E.set(h, p);
      }
      function m(h, p) {
        var v = [], $ = d(
          h,
          p,
          /*Create*/
          !1
        );
        if (_($))
          return v;
        for (var E = $.keys(), x = jt(E), k = 0; ; ) {
          var Gt = zt(x);
          if (!Gt)
            return v.length = k, v;
          var Ne = Ht(Gt);
          try {
            v[k] = Ne;
          } catch (Ue) {
            try {
              Lt(x);
            } finally {
              throw Ue;
            }
          }
          k++;
        }
      }
      function c(h, p, v) {
        var $ = d(
          p,
          v,
          /*Create*/
          !1
        );
        if (_($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var E = a.get(p);
          _(E) || (E.delete(v), E.size === 0 && a.delete(E));
        }
        return !0;
      }
    }
    function Pe(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, d = i.getOwnMetadata, y = i.getOwnMetadataKeys, C = i.deleteMetadata, O = new D(), m = {
        isProviderFor: function(c, h) {
          var p = O.get(c);
          return !_(p) && p.has(h) ? !0 : y(c, h).length ? (_(p) && (p = new T(), O.set(c, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: C
      };
      return m;
    }
    function X(i, a, o) {
      var d = st.getProvider(i, a);
      if (!_(d))
        return d;
      if (o) {
        if (st.setProvider(i, a, St))
          return St;
        throw new Error("Illegal state.");
      }
    }
    function Te() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function m(c, h, p) {
            this._index = 0, this._keys = c, this._values = h, this._selector = p;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), c;
          }, m.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: c, done: !0 };
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
            var p = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, m.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, v = h + 1; v < p; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, pt(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new o(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new o(this._keys, this._values, C);
          }, m.prototype.entries = function() {
            return new o(this._keys, this._values, O);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(c, h) {
            if (!pt(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (pt(this._keys[p], c)) {
                  this._cacheIndex = p;
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
      function O(m, c) {
        return [m, c];
      }
    }
    function ke() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new S();
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
    function Re() {
      var i = 16, a = w.create(), o = d();
      return (
        /** @class */
        function() {
          function c() {
            this._key = d();
          }
          return c.prototype.has = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? w.has(p, this._key) : !1;
          }, c.prototype.get = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? w.get(p, this._key) : void 0;
          }, c.prototype.set = function(h, p) {
            var v = y(
              h,
              /*create*/
              !0
            );
            return v[this._key] = p, this;
          }, c.prototype.delete = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = d();
          }, c;
        }()
      );
      function d() {
        var c;
        do
          c = "@@WeakMap@@" + m();
        while (w.has(a, c));
        return a[c] = !0, c;
      }
      function y(c, h) {
        if (!n.call(c, o)) {
          if (!h)
            return;
          Object.defineProperty(c, o, { value: w.create() });
        }
        return c[o];
      }
      function C(c, h) {
        for (var p = 0; p < h; ++p)
          c[p] = Math.random() * 255 | 0;
        return c;
      }
      function O(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, c), h;
        }
        return C(new Array(c), c);
      }
      function m() {
        var c = O(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var v = c[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function yt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Vt || (Vt = {}));
function je(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function He(r) {
  return function(t) {
    if (je(r)) {
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
        var A;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const w = new CSSStyleSheet(), b = (A = l.sheet) == null ? void 0 : A.cssRules;
          b && (Array.from(b).forEach((S) => w.insertRule(S.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          f.appendChild(w);
        }
        u.forEach((w) => {
          const b = w.cloneNode(!0);
          f.appendChild(b);
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
function We(r) {
  return function(t, e) {
    try {
      Ge(r);
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
function dt(r) {
  return We(r);
}
var F;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
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
const ot = globalThis, wt = ot.ShadowRoot && (ot.ShadyCSS === void 0 || ot.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, At = Symbol(), Ft = /* @__PURE__ */ new WeakMap();
let se = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== At) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
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
const Be = (r) => new se(typeof r == "string" ? r : r + "", void 0, At), Ve = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new se(e, r, At);
}, Fe = (r, t) => {
  if (wt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = ot.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, qt = wt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Be(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qe, defineProperty: Ze, getOwnPropertyDescriptor: Ye, getOwnPropertyNames: Xe, getOwnPropertySymbols: Je, getPrototypeOf: Qe } = Object, j = globalThis, Zt = j.trustedTypes, Ke = Zt ? Zt.emptyScript : "", gt = j.reactiveElementPolyfillSupport, Q = (r, t) => r, lt = { toAttribute(r, t) {
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
} }, Et = (r, t) => !qe(r, t), Yt = { attribute: !0, type: String, converter: lt, reflect: !1, useDefault: !1, hasChanged: Et };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let V = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Yt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Ze(this.prototype, t, s);
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
    return this.elementProperties.get(t) ?? Yt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Q("elementProperties"))) return;
    const t = Qe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Q("properties"))) {
      const e = this.properties, n = [...Xe(e), ...Je(e)];
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
      const g = n.getPropertyOptions(s), f = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : lt;
      this._$Em = s;
      const A = f.fromAttribute(e, g.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const g = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = g.getPropertyOptions(t)), !((n.hasChanged ?? Et)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(g._$Eu(t, n)))) return;
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
        const { wrapped: g } = u, f = this[l];
        g !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, u, f);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[Q("elementProperties")] = /* @__PURE__ */ new Map(), V[Q("finalized")] = /* @__PURE__ */ new Map(), gt == null || gt({ ReactiveElement: V }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const K = globalThis, Xt = (r) => r, ut = K.trustedTypes, Jt = ut ? ut.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ae = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, oe = "?" + I, tr = `<${oe}>`, G = document, et = () => G.createComment(""), rt = (r) => r === null || typeof r != "object" && typeof r != "function", xt = Array.isArray, er = (r) => xt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, J = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qt = /-->/g, Kt = />/g, H = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), te = /'/g, ee = /"/g, le = /^(?:script|style|textarea|title)$/i, rr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), bt = rr(1), Z = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), re = /* @__PURE__ */ new WeakMap(), z = G.createTreeWalker(G, 129);
function ue(r, t) {
  if (!xt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Jt !== void 0 ? Jt.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = J;
  for (let g = 0; g < e; g++) {
    const f = r[g];
    let A, w, b = -1, S = 0;
    for (; S < f.length && (u.lastIndex = S, w = u.exec(f), w !== null); ) S = u.lastIndex, u === J ? w[1] === "!--" ? u = Qt : w[1] !== void 0 ? u = Kt : w[2] !== void 0 ? (le.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = H) : w[3] !== void 0 && (u = H) : u === H ? w[0] === ">" ? (u = s ?? J, b = -1) : w[1] === void 0 ? b = -2 : (b = u.lastIndex - w[2].length, A = w[1], u = w[3] === void 0 ? H : w[3] === '"' ? ee : te) : u === ee || u === te ? u = H : u === Qt || u === Kt ? u = J : (u = H, s = void 0);
    const T = u === H && r[g + 1].startsWith("/>") ? " " : "";
    l += u === J ? f + tr : b >= 0 ? (n.push(A), f.slice(0, b) + ae + f.slice(b) + I + T) : f + I + (b === -2 ? g : T);
  }
  return [ue(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class nt {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const g = t.length - 1, f = this.parts, [A, w] = nr(t, e);
    if (this.el = nt.createElement(A, n), z.currentNode = this.el.content, e === 2 || e === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (s = z.nextNode()) !== null && f.length < g; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const b of s.getAttributeNames()) if (b.endsWith(ae)) {
          const S = w[u++], T = s.getAttribute(b).split(I), D = /([.?@])?(.*)/.exec(S);
          f.push({ type: 1, index: l, name: D[2], strings: T, ctor: D[1] === "." ? sr : D[1] === "?" ? ar : D[1] === "@" ? or : ct }), s.removeAttribute(b);
        } else b.startsWith(I) && (f.push({ type: 6, index: l }), s.removeAttribute(b));
        if (le.test(s.tagName)) {
          const b = s.textContent.split(I), S = b.length - 1;
          if (S > 0) {
            s.textContent = ut ? ut.emptyScript : "";
            for (let T = 0; T < S; T++) s.append(b[T], et()), z.nextNode(), f.push({ type: 2, index: ++l });
            s.append(b[S], et());
          }
        }
      } else if (s.nodeType === 8) if (s.data === oe) f.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = s.data.indexOf(I, b + 1)) !== -1; ) f.push({ type: 7, index: l }), b += I.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = G.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Y(r, t, e = r, n) {
  var u, g;
  if (t === Z) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = rt(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((g = s == null ? void 0 : s._$AO) == null || g.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = Y(r, s._$AS(r, t.values), s, n)), t;
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? G).importNode(e, !0);
    z.currentNode = s;
    let l = z.nextNode(), u = 0, g = 0, f = n[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let A;
        f.type === 2 ? A = new it(l, l.nextSibling, this, t) : f.type === 1 ? A = new f.ctor(l, f.name, f.strings, this, t) : f.type === 6 && (A = new lr(l, this, t)), this._$AV.push(A), f = n[++g];
      }
      u !== (f == null ? void 0 : f.index) && (l = z.nextNode(), u++);
    }
    return z.currentNode = G, s;
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
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = Y(this, t, e), rt(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== Z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : er(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && rt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(G.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = nt.createElement(ue(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new ir(s, this), g = u.u(this.options);
      u.p(e), this.T(g), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = re.get(t.strings);
    return e === void 0 && re.set(t.strings, e = new nt(t)), e;
  }
  k(t) {
    xt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new it(this.O(et()), this.O(et()), this, this.options)) : n = e[s], n._$AI(l), s++;
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
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = Y(this, t, e, 0), u = !rt(t) || t !== this._$AH && t !== Z, u && (this._$AH = t);
    else {
      const g = t;
      let f, A;
      for (t = l[0], f = 0; f < l.length - 1; f++) A = Y(this, g[n + f], e, f), A === Z && (A = this._$AH[f]), u || (u = !rt(A) || A !== this._$AH[f]), A === P ? t = P : t !== P && (t += (A ?? "") + l[f + 1]), this._$AH[f] = A;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sr extends ct {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class ar extends ct {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class or extends ct {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Y(this, t, e, 0) ?? P) === Z) return;
    const n = this._$AH, s = t === P && n !== P || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== P && (n === P || s);
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
    Y(this, t);
  }
}
const mt = K.litHtmlPolyfillSupport;
mt == null || mt(nt, it), (K.litHtmlVersions ?? (K.litHtmlVersions = [])).push("3.3.3");
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
const $t = L.litElementPolyfillSupport;
$t == null || $t({ LitElement: tt });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: lt, reflect: !1, hasChanged: Et }, cr = (r = dr, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(g) {
      const f = t.get.call(this);
      t.set.call(this, g), this.requestUpdate(u, f, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(u, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(g) {
      const f = this[u];
      t.call(this, g), this.requestUpdate(u, f, r, !0, g);
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
let R = class extends tt {
  constructor() {
    super(...arguments), this.title = "Card Title", this.subtitle = "", this.variant = "standard", this.padding = 20;
  }
  static getStudioTemplate(r) {
    var A, w, b, S;
    if (!r)
      return {
        kind: "card",
        templateHtml: [
          "<div style='padding:20px;border-radius:12px;background:var(--uiv-surface-color,#ffffff);border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 6px rgba(0,0,0,0.05);'>",
          "<strong style='color:var(--uiv-text-color,#111827);font-size:16px;'>{{display:title}}</strong>",
          "<div style='margin-top:12px;'><zero-studio-slot name='default'></zero-studio-slot></div>",
          "</div>"
        ].join(""),
        slots: [{ id: "default", label: "Card Content", dropzone: !0, accepts: [] }],
        titleProp: "title"
      };
    const t = ne(r.studio.display.title || "Card Title"), e = ne(r.studio.display.subtitle || ""), n = (((A = r.props) == null ? void 0 : A.variant) ?? ((w = r.studio.props) == null ? void 0 : w.variant)) || "standard";
    let l = `padding: ${((b = r.props) == null ? void 0 : b.padding) ?? ((S = r.studio.props) == null ? void 0 : S.padding) ?? 20}px; font-family: inherit; font-weight: 500; border-radius: 12px; transition: all 0.25s ease;`, u = "var(--uiv-surface-color, #ffffff)", g = "1px solid rgba(0,0,0,0.08)", f = "0 4px 6px rgba(0, 0, 0, 0.05)";
    return n === "glass" ? (u = "rgba(255, 255, 255, 0.12)", g = "1px solid rgba(255, 255, 255, 0.2)", f = "0 8px 32px rgba(0, 0, 0, 0.05)", l += " backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);") : n === "shadow" ? f = "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" : n === "outlined" ? (g = "1.5px solid var(--uiv-border-color, #e5e7eb)", f = "none") : n === "product" && (u = "linear-gradient(to bottom, var(--uiv-surface-color, #ffffff), #f9fafb)", f = "0 2px 5px rgba(0,0,0,0.03)"), l += ` background: ${u}; border: ${g}; box-shadow: ${f};`, {
      kind: "card",
      slots: [{ id: "default", label: "Card Content", dropzone: !0, accepts: [] }],
      templateHtml: [
        `<div style='${l}'>`,
        t ? `<h4 style='margin:0 0 4px;font-size:16px;color:var(--uiv-text-color,#111827);font-weight:700;'>${t}</h4>` : "",
        e ? `<p style='margin:0 0 12px;color:var(--uiv-text-color-secondary,#6b7280);font-size:13px;'>${e}</p>` : "",
        "<div style='min-height:40px;border:1px dashed rgba(0,0,0,0.05);border-radius:6px;'>",
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
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "standard";
  }
  get paddingConfig() {
    return this.padding;
  }
  set paddingConfig(r) {
    this.padding = Number(r) || 20;
  }
  render() {
    const r = [
      "card",
      `variant-${this.variant}`
    ].join(" "), t = Math.max(0, Number(this.padding) || 0);
    return bt`
      <div class=${r} style="--card-padding: ${t}px">
        ${this.title ? bt`<h4 class="title">${this.title}</h4>` : ""}
        ${this.subtitle ? bt`<p class="subtitle">${this.subtitle}</p>` : ""}
        <div class="card-body">
          <slot></slot>
        </div>
      </div>
    `;
  }
};
R.styles = Ve`
    :host {
      display: block;
      --card-bg: var(--uiv-surface-color, #ffffff);
      --card-text: var(--uiv-text-color, #111827);
      --card-muted: var(--uiv-text-color-secondary, #6b7280);
      --card-border: var(--uiv-border-color, #e5e7eb);
    }

    .card {
      border-radius: 12px;
      padding: var(--card-padding, 20px);
      box-sizing: border-box;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Variants */
    .variant-standard {
      background: var(--card-bg);
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    }

    .variant-glass {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: var(--card-text);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.04);
    }

    .variant-shadow {
      background: var(--card-bg);
      border: 1px solid rgba(0, 0, 0, 0.03);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    .variant-shadow:hover {
      transform: translateY(-2px);
      box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.12), 0 15px 15px -5px rgba(0, 0, 0, 0.06);
    }

    .variant-outlined {
      background: var(--card-bg);
      border: 1.5px solid var(--card-border);
    }

    .variant-product {
      background: linear-gradient(to bottom, var(--card-bg), #f9fafb);
      border: 1px solid rgba(0, 0, 0, 0.06);
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }
    .variant-product:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.06);
    }

    h4.title {
      margin: 0 0 4px;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--card-text);
    }

    p.subtitle {
      margin: 0 0 14px;
      font-size: 0.85rem;
      color: var(--card-muted);
    }

    .card-body {
      display: block;
    }
  `;
U([
  ht({ type: String })
], R.prototype, "title", 2);
U([
  ht({ type: String })
], R.prototype, "subtitle", 2);
U([
  ht({ type: String })
], R.prototype, "variant", 2);
U([
  ht({ type: Number })
], R.prototype, "padding", 2);
U([
  dt({
    attributeType: q.PROPERTY,
    uiComponentType: F.TEXT_INPUT,
    displayLabel: "Card Title",
    fieldMappings: "title"
  })
], R.prototype, "titleConfig", 1);
U([
  dt({
    attributeType: q.PROPERTY,
    uiComponentType: F.TEXT_INPUT,
    displayLabel: "Subtitle / Description",
    fieldMappings: "subtitle"
  })
], R.prototype, "subtitleConfig", 1);
U([
  dt({
    attributeType: q.PROPERTY,
    uiComponentType: F.DROPDOWN,
    displayLabel: "Card Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard", value: "standard" },
      { label: "Glassmorphism", value: "glass" },
      { label: "Soft Shadow (Floating)", value: "shadow" },
      { label: "Outlined Border", value: "outlined" },
      { label: "Product Grid Item", value: "product" }
    ]
  })
], R.prototype, "variantConfig", 1);
U([
  dt({
    attributeType: q.PROPERTY,
    uiComponentType: F.NUMBER_INPUT,
    displayLabel: "Padding (px)",
    fieldMappings: "padding"
  })
], R.prototype, "paddingConfig", 1);
R = U([
  ze({
    name: "zero-card",
    version: "1.0.0",
    title: "Card Container",
    elementSelector: "zero-card",
    group: "Layout",
    iconName: "card-icon.png"
  }),
  Le()
], R);
export {
  R as ZeroCard
};
