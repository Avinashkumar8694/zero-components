var It = Object.defineProperty;
var Ut = (r, e, t) => e in r ? It(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var ze = (r, e, t) => Ut(r, typeof e != "symbol" ? e + "" : e, t);
var Ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var qe;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
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
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !g && !y, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return ve(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ve({ __proto__: null });
      } : function() {
        return ve({});
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
    }, w = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), D = typeof WeakMap == "function" ? WeakMap : Rt(), F = s ? Symbol.for("@reflect-metadata:registry") : void 0, ae = Ot(), Se = Pt(ae);
    function ct(i, o, a, c) {
      if (_(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!He(o))
          throw new TypeError();
        return bt(i, o);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!C(o))
          throw new TypeError();
        if (!C(c) && !_(c) && !X(c))
          throw new TypeError();
        return X(c) && (c = void 0), a = H(a), wt(i, o, a, c);
      }
    }
    e("decorate", ct);
    function ht(i, o) {
      function a(c, v) {
        if (!C(c))
          throw new TypeError();
        if (!_(v) && !Ct(v))
          throw new TypeError();
        Pe(i, o, c, v);
      }
      return a;
    }
    e("metadata", ht);
    function dt(i, o, a, c) {
      if (!C(a))
        throw new TypeError();
      return _(c) || (c = H(c)), Pe(i, o, a, c);
    }
    e("defineMetadata", dt);
    function ft(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return _(a) || (a = H(a)), Ce(i, o, a);
    }
    e("hasMetadata", ft);
    function pt(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return _(a) || (a = H(a)), fe(i, o, a);
    }
    e("hasOwnMetadata", pt);
    function yt(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return _(a) || (a = H(a)), Me(i, o, a);
    }
    e("getMetadata", yt);
    function vt(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return _(a) || (a = H(a)), Oe(i, o, a);
    }
    e("getOwnMetadata", vt);
    function gt(i, o) {
      if (!C(i))
        throw new TypeError();
      return _(o) || (o = H(o)), xe(i, o);
    }
    e("getMetadataKeys", gt);
    function _t(i, o) {
      if (!C(i))
        throw new TypeError();
      return _(o) || (o = H(o)), Te(i, o);
    }
    e("getOwnMetadataKeys", _t);
    function mt(i, o, a) {
      if (!C(o))
        throw new TypeError();
      if (_(a) || (a = H(a)), !C(o))
        throw new TypeError();
      _(a) || (a = H(a));
      var c = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", mt);
    function bt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!_(v) && !X(v)) {
          if (!He(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function wt(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], M = P(o, a, c);
        if (!_(M) && !X(M)) {
          if (!C(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function Ce(i, o, a) {
      var c = fe(i, o, a);
      if (c)
        return !0;
      var v = ye(o);
      return X(v) ? !1 : Ce(i, v, a);
    }
    function fe(i, o, a) {
      var c = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : Re(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Me(i, o, a) {
      var c = fe(i, o, a);
      if (c)
        return Oe(i, o, a);
      var v = ye(o);
      if (!X(v))
        return Me(i, v, a);
    }
    function Oe(i, o, a) {
      var c = Q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Pe(i, o, a, c) {
      var v = Q(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function xe(i, o) {
      var a = Te(i, o), c = ye(i);
      if (c === null)
        return a;
      var v = xe(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new R(), M = [], m = 0, h = a; m < h.length; m++) {
        var d = h[m], f = P.has(d);
        f || (P.add(d), M.push(d));
      }
      for (var p = 0, b = v; p < b.length; p++) {
        var d = b[p], f = P.has(d);
        f || (P.add(d), M.push(d));
      }
      return M;
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
    function _(i) {
      return i === void 0;
    }
    function X(i) {
      return i === null;
    }
    function $t(i) {
      return typeof i == "symbol";
    }
    function C(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Et(i, o) {
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
      var a = "string", c = Ie(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (C(v))
          throw new TypeError();
        return v;
      }
      return At(i);
    }
    function At(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (le(v)) {
          var c = v.call(i);
          if (!C(c))
            return c;
        }
        var a = i.valueOf;
        if (le(a)) {
          var c = a.call(i);
          if (!C(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Re(i) {
      return !!i;
    }
    function St(i) {
      return "" + i;
    }
    function H(i) {
      var o = Et(i);
      return $t(o) ? o : St(o);
    }
    function Ne(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function le(i) {
      return typeof i == "function";
    }
    function He(i) {
      return typeof i == "function";
    }
    function Ct(i) {
      switch (ke(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function pe(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Ie(i, o) {
      var a = i[o];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function Ue(i) {
      var o = Ie(i, u);
      if (!le(o))
        throw new TypeError();
      var a = o.call(i);
      if (!C(a))
        throw new TypeError();
      return a;
    }
    function De(i) {
      return i.value;
    }
    function je(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Le(i) {
      var o = i.return;
      o && o.call(i);
    }
    function ye(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Mt() {
      var i;
      !_(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = xt(t.Reflect));
      var o, a, c, v = new D(), P = {
        registerProvider: M,
        getProvider: h,
        setProvider: f
      };
      return P;
      function M(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case _(o):
            o = p;
            break;
          case o === p:
            break;
          case _(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new R()), c.add(p);
            break;
        }
      }
      function m(p, b) {
        if (!_(o)) {
          if (o.isProviderFor(p, b))
            return o;
          if (!_(a)) {
            if (a.isProviderFor(p, b))
              return o;
            if (!_(c))
              for (var A = Ue(c); ; ) {
                var S = je(A);
                if (!S)
                  return;
                var N = De(S);
                if (N.isProviderFor(p, b))
                  return Le(A), N;
              }
          }
        }
        if (!_(i) && i.isProviderFor(p, b))
          return i;
      }
      function h(p, b) {
        var A = v.get(p), S;
        return _(A) || (S = A.get(b)), _(S) && (S = m(p, b), _(S) || (_(A) && (A = new T(), v.set(p, A)), A.set(b, S))), S;
      }
      function d(p) {
        if (_(p))
          throw new TypeError();
        return o === p || a === p || !_(c) && c.has(p);
      }
      function f(p, b, A) {
        if (!d(A))
          throw new Error("Metadata provider not registered.");
        var S = h(p, b);
        if (S !== A) {
          if (!_(S))
            return !1;
          var N = v.get(p);
          _(N) && (N = new T(), v.set(p, N)), N.set(b, A);
        }
        return !0;
      }
    }
    function Ot() {
      var i;
      return !_(F) && C(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[F]), _(i) && (i = Mt()), !_(F) && C(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
      var o = new D(), a = {
        isProviderFor: function(d, f) {
          var p = o.get(d);
          return _(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: h
      };
      return ae.registerProvider(a), a;
      function c(d, f, p) {
        var b = o.get(d), A = !1;
        if (_(b)) {
          if (!p)
            return;
          b = new T(), o.set(d, b), A = !0;
        }
        var S = b.get(f);
        if (_(S)) {
          if (!p)
            return;
          if (S = new T(), b.set(f, S), !i.setProvider(d, f, a))
            throw b.delete(f), A && o.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(d, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        return _(b) ? !1 : Re(b.has(d));
      }
      function P(d, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!_(b))
          return b.get(d);
      }
      function M(d, f, p, b) {
        var A = c(
          p,
          b,
          /*Create*/
          !0
        );
        A.set(d, f);
      }
      function m(d, f) {
        var p = [], b = c(
          d,
          f,
          /*Create*/
          !1
        );
        if (_(b))
          return p;
        for (var A = b.keys(), S = Ue(A), N = 0; ; ) {
          var Be = je(S);
          if (!Be)
            return p.length = N, p;
          var Nt = De(Be);
          try {
            p[N] = Nt;
          } catch (Ht) {
            try {
              Le(S);
            } finally {
              throw Ht;
            }
          }
          N++;
        }
      }
      function h(d, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (_(b) || !b.delete(d))
          return !1;
        if (b.size === 0) {
          var A = o.get(f);
          _(A) || (A.delete(p), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function xt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, M = new D(), m = {
        isProviderFor: function(h, d) {
          var f = M.get(h);
          return !_(f) && f.has(d) ? !0 : v(h, d).length ? (_(f) && (f = new R(), M.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function Q(i, o, a) {
      var c = ae.getProvider(i, o);
      if (!_(c))
        return c;
      if (a) {
        if (ae.setProvider(i, o, Se))
          return Se;
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
          }, m.prototype[u] = function() {
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
              return this._keys.length--, this._values.length--, pe(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(h, d) {
            if (!pe(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pe(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return c;
      function v(m, h) {
        return m;
      }
      function P(m, h) {
        return h;
      }
      function M(m, h) {
        return [m, h];
      }
    }
    function kt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new T();
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
      var i = 16, o = $.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, h.prototype.set = function(d, f) {
            var p = v(
              d,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, h.prototype.delete = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = c();
          }, h;
        }()
      );
      function c() {
        var h;
        do
          h = "@@WeakMap@@" + m();
        while ($.has(o, h));
        return o[h] = !0, h;
      }
      function v(h, d) {
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: $.create() });
        }
        return h[a];
      }
      function P(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function M(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : P(d, h), d;
        }
        return P(new Array(h), h);
      }
      function m() {
        var h = M(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var p = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function ve(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(qe || (qe = {}));
function Dt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function jt(r) {
  return function(e) {
    if (Dt(r)) {
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
function Lt(r) {
  return jt(r);
}
function Bt(r) {
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
        var E;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const $ = new CSSStyleSheet(), w = (E = l.sheet) == null ? void 0 : E.cssRules;
          w && (Array.from(w).forEach((T) => $.insertRule(T.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, $]);
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
    return t;
  };
}
function zt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Gt(r) {
  return function(e, t) {
    try {
      zt(r);
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
function B(r) {
  return Gt(r);
}
var I;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(I || (I = {}));
var U;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(U || (U = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, we = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let st = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const qt = (r) => new st(typeof r == "string" ? r : r + "", void 0, $e), Vt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new st(t, r, $e);
}, Wt = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ue.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, We = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return qt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ft, defineProperty: Xt, getOwnPropertyDescriptor: Yt, getOwnPropertyNames: Zt, getOwnPropertySymbols: Jt, getPrototypeOf: Qt } = Object, L = globalThis, Fe = L.trustedTypes, Kt = Fe ? Fe.emptyScript : "", ge = L.reactiveElementPolyfillSupport, ee = (r, e) => r, ce = { toAttribute(r, e) {
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
} }, Ee = (r, e) => !Ft(r, e), Xe = { attribute: !0, type: String, converter: ce, reflect: !1, useDefault: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Y = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Xe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Xt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Yt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const g = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Xe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, n = [...Zt(t), ...Jt(t)];
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
      for (const s of n) t.unshift(We(s));
    } else e !== void 0 && t.push(We(e));
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
    return Wt(e, this.constructor.elementStyles), e;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ce).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const g = n.getPropertyOptions(s), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : ce;
      this._$Em = s;
      const E = y.fromAttribute(t, g.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const g = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = g.getPropertyOptions(e)), !((n.hasChanged ?? Ee)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(g._$Eu(e, n)))) return;
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
        const { wrapped: g } = u, y = this[l];
        g !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
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
Y.elementStyles = [], Y.shadowRootOptions = { mode: "open" }, Y[ee("elementProperties")] = /* @__PURE__ */ new Map(), Y[ee("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: Y }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Ye = (r) => r, he = te.trustedTypes, Ze = he ? he.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ot = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, at = "?" + j, er = `<${at}>`, W = document, ne = () => W.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Ae = Array.isArray, tr = (r) => Ae(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, G = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, lt = /^(?:script|style|textarea|title)$/i, rr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), tt = rr(1), Z = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), q = W.createTreeWalker(W, 129);
function ut(r, e) {
  if (!Ae(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const nr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let g = 0; g < t; g++) {
    const y = r[g];
    let E, $, w = -1, T = 0;
    for (; T < y.length && (u.lastIndex = T, $ = u.exec(y), $ !== null); ) T = u.lastIndex, u === K ? $[1] === "!--" ? u = Je : $[1] !== void 0 ? u = Qe : $[2] !== void 0 ? (lt.test($[2]) && (s = RegExp("</" + $[2], "g")), u = G) : $[3] !== void 0 && (u = G) : u === G ? $[0] === ">" ? (u = s ?? K, w = -1) : $[1] === void 0 ? w = -2 : (w = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? G : $[3] === '"' ? et : Ke) : u === et || u === Ke ? u = G : u === Je || u === Qe ? u = K : (u = G, s = void 0);
    const R = u === G && r[g + 1].startsWith("/>") ? " " : "";
    l += u === K ? y + er : w >= 0 ? (n.push(E), y.slice(0, w) + ot + y.slice(w) + j + R) : y + j + (w === -2 ? g : R);
  }
  return [ut(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class se {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const g = e.length - 1, y = this.parts, [E, $] = nr(e, t);
    if (this.el = se.createElement(E, n), q.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = q.nextNode()) !== null && y.length < g; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(ot)) {
          const T = $[u++], R = s.getAttribute(w).split(j), D = /([.?@])?(.*)/.exec(T);
          y.push({ type: 1, index: l, name: D[2], strings: R, ctor: D[1] === "." ? sr : D[1] === "?" ? or : D[1] === "@" ? ar : de }), s.removeAttribute(w);
        } else w.startsWith(j) && (y.push({ type: 6, index: l }), s.removeAttribute(w));
        if (lt.test(s.tagName)) {
          const w = s.textContent.split(j), T = w.length - 1;
          if (T > 0) {
            s.textContent = he ? he.emptyScript : "";
            for (let R = 0; R < T; R++) s.append(w[R], ne()), q.nextNode(), y.push({ type: 2, index: ++l });
            s.append(w[T], ne());
          }
        }
      } else if (s.nodeType === 8) if (s.data === at) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(j, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += j.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = W.createElement("template");
    return n.innerHTML = e, n;
  }
}
function J(r, e, t = r, n) {
  var u, g;
  if (e === Z) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ie(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((g = s == null ? void 0 : s._$AO) == null || g.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = J(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? W).importNode(t, !0);
    q.currentNode = s;
    let l = q.nextNode(), u = 0, g = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new oe(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new lr(l, this, e)), this._$AV.push(E), y = n[++g];
      }
      u !== (y == null ? void 0 : y.index) && (l = q.nextNode(), u++);
    }
    return q.currentNode = W, s;
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
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = J(this, e, t), ie(e) ? e === x || e == null || e === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== x && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = se.createElement(ut(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ir(s, this), g = u.u(this.options);
      u.p(t), this.T(g), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new oe(this.O(ne()), this.O(ne()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Ye(e).nextSibling;
      Ye(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class de {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = x;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = J(this, e, t, 0), u = !ie(e) || e !== this._$AH && e !== Z, u && (this._$AH = e);
    else {
      const g = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = J(this, g[n + y], t, y), E === Z && (E = this._$AH[y]), u || (u = !ie(E) || E !== this._$AH[y]), E === x ? e = x : e !== x && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class sr extends de {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === x ? void 0 : e;
  }
}
class or extends de {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== x);
  }
}
class ar extends de {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? x) === Z) return;
    const n = this._$AH, s = e === x && n !== x || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== x && (n === x || s);
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
    J(this, e);
  }
}
const me = te.litHtmlPolyfillSupport;
me == null || me(se, oe), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
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
const V = globalThis;
class re extends Y {
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
    return Z;
  }
}
var it;
re._$litElement$ = !0, re.finalized = !0, (it = V.litElementHydrateSupport) == null || it.call(V, { LitElement: re });
const be = V.litElementPolyfillSupport;
be == null || be({ LitElement: re });
(V.litElementVersions ?? (V.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ee }, hr = (r = cr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(g) {
      const y = e.get.call(this);
      e.set.call(this, g), this.requestUpdate(u, y, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(u, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(g) {
      const y = this[u];
      e.call(this, g), this.requestUpdate(u, y, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function z(r) {
  return (e, t) => typeof t == "object" ? hr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var dr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, k = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && dr(e, t, s), s;
};
const nt = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:10px;padding:6px 0;'>",
    "<div style='width:36px;height:20px;border-radius:10px;background:#e5e7eb;position:relative;cursor:pointer;'>",
    "<div style='width:16px;height:16px;border-radius:50%;background:#ffffff;position:absolute;top:2px;left:2px;'></div>",
    "</div>",
    "<span style='font-size:14px;color:var(--uiv-text-color,#1f2937);'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Switch"]
};
function pr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let O = class extends re {
  constructor() {
    super(...arguments), this.checked = !1, this.label = "Toggle Label", this.variant = "standard", this.disabled = !1, this.required = !1, this.value = "", this.errorMessage = "", this.showError = !1;
  }
  static getStudioTemplate(r) {
    if (!r) return nt;
    const e = pr(r.studio.display.label || "Toggle Switch");
    return {
      ...nt,
      templateHtml: [
        "<div style='display:flex;align-items:center;gap:10px;padding:6px 0;font-family:inherit;'>",
        "<div style='width:36px;height:20px;border-radius:10px;background:#6366f1;position:relative;cursor:pointer;'>",
        "<div style='width:16px;height:16px;border-radius:50%;background:#ffffff;position:absolute;top:2px;right:2px;'></div>",
        "</div>",
        `<span style='font-size:14px;color:var(--uiv-text-color,#1f2937);'>${e}</span>`,
        "</div>"
      ].join("")
    };
  }
  get checkedConfig() {
    return this.checked;
  }
  set checkedConfig(r) {
    this.checked = !!r;
  }
  get labelConfig() {
    return this.label;
  }
  set labelConfig(r) {
    this.label = r;
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "standard";
  }
  get disabledConfig() {
    return this.disabled;
  }
  set disabledConfig(r) {
    this.disabled = !!r;
  }
  get requiredConfig() {
    return this.required;
  }
  set requiredConfig(r) {
    this.required = !!r;
  }
  get valueConfig() {
    return this.value;
  }
  set valueConfig(r) {
    this.value = r;
  }
  get errorMessageConfig() {
    return this.errorMessage;
  }
  set errorMessageConfig(r) {
    this.errorMessage = r;
  }
  get showErrorConfig() {
    return this.showError;
  }
  set showErrorConfig(r) {
    this.showError = !!r;
  }
  handleToggle() {
    this.disabled || (this.checked = !this.checked, this.dispatchEvent(
      new CustomEvent("change", {
        detail: { checked: this.checked, value: this.value },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  render() {
    const r = [
      this.checked ? "checked" : "",
      this.disabled ? "disabled" : "",
      this.showError ? "has-error" : "",
      `variant-${this.variant}`
    ].join(" ");
    return tt`
      <div class="switch-wrapper ${r}" @click=${this.handleToggle}>
        <div class="track">
          <div class="thumb"></div>
        </div>
        <span class="switch-label">${this.label}</span>
      </div>
      ${this.showError && this.errorMessage ? tt`<div class="error-text">${this.errorMessage}</div>` : ""}
    `;
  }
};
O.styles = Vt`
    :host {
      display: block;
      margin-bottom: 12px;
      --sw-p: var(--uiv-primary-color, #6366f1);
      --sw-bg: var(--uiv-surface-color, #e5e7eb);
      --sw-text: var(--uiv-text-color, #1f2937);
    }

    .switch-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      user-select: none;
      padding: 4px 0;
    }

    .switch-wrapper.disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .track {
      width: 40px;
      height: 22px;
      border-radius: 11px;
      background: var(--sw-bg);
      position: relative;
      transition: background 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #ffffff;
      position: absolute;
      top: 2px;
      left: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.15);
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Active State */
    .checked .track {
      background: var(--sw-p);
    }

    .checked .thumb {
      transform: translateX(18px);
    }

    .switch-label {
      font-size: 0.93rem;
      color: var(--sw-text);
      font-weight: 500;
    }

    /* ─── VARIANTS ─── */

    /* iOS Style */
    .variant-ios .track {
      background: #e9e9ea;
      border: 1px solid rgba(0, 0, 0, 0.05);
    }
    .checked.variant-ios .track {
      background: #34c759;
    }
    .variant-ios .thumb {
      box-shadow: 0 3px 8px rgba(0,0,0,0.15), 0 3px 1px rgba(0,0,0,0.06);
    }

    /* Glow Style */
    .checked.variant-glow .track {
      box-shadow: 0 0 12px var(--sw-p);
    }
    .checked.variant-glow .thumb {
      box-shadow: 0 0 8px #ffffff;
    }

    .has-error .track {
      border: 1.5px solid #ef4444 !important;
    }
    .error-text {
      color: #ef4444;
      font-size: 0.78rem;
      margin-left: 50px;
      margin-top: 2px;
      font-weight: 500;
    }
  `;
k([
  z({ type: Boolean })
], O.prototype, "checked", 2);
k([
  z({ type: String })
], O.prototype, "label", 2);
k([
  z({ type: String })
], O.prototype, "variant", 2);
k([
  z({ type: Boolean })
], O.prototype, "disabled", 2);
k([
  z({ type: Boolean })
], O.prototype, "required", 2);
k([
  z({ type: String })
], O.prototype, "value", 2);
k([
  z({ type: String, attribute: "error-message" })
], O.prototype, "errorMessage", 2);
k([
  z({ type: Boolean, attribute: "show-error" })
], O.prototype, "showError", 2);
k([
  B({
    attributeType: U.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Checked",
    fieldMappings: "checked"
  })
], O.prototype, "checkedConfig", 1);
k([
  B({
    attributeType: U.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], O.prototype, "labelConfig", 1);
k([
  B({
    attributeType: U.PROPERTY,
    uiComponentType: I.DROPDOWN,
    displayLabel: "Switch Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard Switch", value: "standard" },
      { label: "iOS Apple Style", value: "ios" },
      { label: "Glowing Neon", value: "glow" }
    ]
  })
], O.prototype, "variantConfig", 1);
k([
  B({
    attributeType: U.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], O.prototype, "disabledConfig", 1);
k([
  B({
    attributeType: U.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Required Field",
    fieldMappings: "required"
  })
], O.prototype, "requiredConfig", 1);
k([
  B({
    attributeType: U.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Value Key",
    fieldMappings: "value"
  })
], O.prototype, "valueConfig", 1);
k([
  B({
    attributeType: U.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Error Message",
    fieldMappings: "errorMessage"
  })
], O.prototype, "errorMessageConfig", 1);
k([
  B({
    attributeType: U.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], O.prototype, "showErrorConfig", 1);
O = k([
  Lt({
    name: "zero-switch",
    version: "1.0.0",
    title: "Switch / Toggle",
    elementSelector: "zero-switch",
    group: "Form Controls",
    iconName: "switch-icon.png"
  }),
  Bt()
], O);
export {
  O as ZeroSwitch,
  nt as studioTemplate
};
