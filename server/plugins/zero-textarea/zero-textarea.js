var Lt = Object.defineProperty;
var jt = (r, e, t) => e in r ? Lt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var We = (r, e, t) => jt(r, typeof e != "symbol" ? e + "" : e, t);
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
    function s(v, E) {
      return function($, w) {
        Object.defineProperty(v, $, { configurable: !0, writable: !0, value: w }), E && E($, w);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, E = !g && !v, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return ge(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ge({ __proto__: null });
      } : function() {
        return ge({});
      },
      has: E ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: E ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, w = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : kt(), I = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Nt(), D = typeof WeakMap == "function" ? WeakMap : Ut(), F = s ? Symbol.for("@reflect-metadata:registry") : void 0, le = Mt(), xe = Pt(le);
    function dt(i, a, o, h) {
      if (m(o)) {
        if (!Ue(i))
          throw new TypeError();
        if (!Ie(a))
          throw new TypeError();
        return $t(i, a);
      } else {
        if (!Ue(i))
          throw new TypeError();
        if (!x(a))
          throw new TypeError();
        if (!x(h) && !m(h) && !Y(h))
          throw new TypeError();
        return Y(h) && (h = void 0), o = j(o), Et(i, a, o, h);
      }
    }
    e("decorate", dt);
    function ft(i, a) {
      function o(h, y) {
        if (!x(h))
          throw new TypeError();
        if (!m(y) && !St(y))
          throw new TypeError();
        Me(i, a, h, y);
      }
      return o;
    }
    e("metadata", ft);
    function pt(i, a, o, h) {
      if (!x(o))
        throw new TypeError();
      return m(h) || (h = j(h)), Me(i, a, o, h);
    }
    e("defineMetadata", pt);
    function vt(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return m(o) || (o = j(o)), Te(i, a, o);
    }
    e("hasMetadata", vt);
    function yt(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return m(o) || (o = j(o)), pe(i, a, o);
    }
    e("hasOwnMetadata", yt);
    function gt(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return m(o) || (o = j(o)), Se(i, a, o);
    }
    e("getMetadata", gt);
    function mt(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return m(o) || (o = j(o)), Oe(i, a, o);
    }
    e("getOwnMetadata", mt);
    function _t(i, a) {
      if (!x(i))
        throw new TypeError();
      return m(a) || (a = j(a)), Pe(i, a);
    }
    e("getMetadataKeys", _t);
    function bt(i, a) {
      if (!x(i))
        throw new TypeError();
      return m(a) || (a = j(a)), Re(i, a);
    }
    e("getOwnMetadataKeys", bt);
    function wt(i, a, o) {
      if (!x(a))
        throw new TypeError();
      if (m(o) || (o = j(o)), !x(a))
        throw new TypeError();
      m(o) || (o = j(o));
      var h = Q(
        a,
        o,
        /*Create*/
        !1
      );
      return m(h) ? !1 : h.OrdinaryDeleteMetadata(i, a, o);
    }
    e("deleteMetadata", wt);
    function $t(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var h = i[o], y = h(a);
        if (!m(y) && !Y(y)) {
          if (!Ie(y))
            throw new TypeError();
          a = y;
        }
      }
      return a;
    }
    function Et(i, a, o, h) {
      for (var y = i.length - 1; y >= 0; --y) {
        var S = i[y], T = S(a, o, h);
        if (!m(T) && !Y(T)) {
          if (!x(T))
            throw new TypeError();
          h = T;
        }
      }
      return h;
    }
    function Te(i, a, o) {
      var h = pe(i, a, o);
      if (h)
        return !0;
      var y = ye(a);
      return Y(y) ? !1 : Te(i, y, o);
    }
    function pe(i, a, o) {
      var h = Q(
        a,
        o,
        /*Create*/
        !1
      );
      return m(h) ? !1 : Ne(h.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Se(i, a, o) {
      var h = pe(i, a, o);
      if (h)
        return Oe(i, a, o);
      var y = ye(a);
      if (!Y(y))
        return Se(i, y, o);
    }
    function Oe(i, a, o) {
      var h = Q(
        a,
        o,
        /*Create*/
        !1
      );
      if (!m(h))
        return h.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Me(i, a, o, h) {
      var y = Q(
        o,
        h,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, a, o, h);
    }
    function Pe(i, a) {
      var o = Re(i, a), h = ye(i);
      if (h === null)
        return o;
      var y = Pe(h, a);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var S = new I(), T = [], _ = 0, c = o; _ < c.length; _++) {
        var d = c[_], f = S.has(d);
        f || (S.add(d), T.push(d));
      }
      for (var p = 0, b = y; p < b.length; p++) {
        var d = b[p], f = S.has(d);
        f || (S.add(d), T.push(d));
      }
      return T;
    }
    function Re(i, a) {
      var o = Q(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
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
    function m(i) {
      return i === void 0;
    }
    function Y(i) {
      return i === null;
    }
    function At(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ct(i, a) {
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
      var o = "string", h = He(i, l);
      if (h !== void 0) {
        var y = h.call(i, o);
        if (x(y))
          throw new TypeError();
        return y;
      }
      return xt(i);
    }
    function xt(i, a) {
      var o, h;
      {
        var y = i.toString;
        if (ue(y)) {
          var h = y.call(i);
          if (!x(h))
            return h;
        }
        var o = i.valueOf;
        if (ue(o)) {
          var h = o.call(i);
          if (!x(h))
            return h;
        }
      }
      throw new TypeError();
    }
    function Ne(i) {
      return !!i;
    }
    function Tt(i) {
      return "" + i;
    }
    function j(i) {
      var a = Ct(i);
      return At(a) ? a : Tt(a);
    }
    function Ue(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ue(i) {
      return typeof i == "function";
    }
    function Ie(i) {
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
    function ve(i, a) {
      return i === a || i !== i && a !== a;
    }
    function He(i, a) {
      var o = i[a];
      if (o != null) {
        if (!ue(o))
          throw new TypeError();
        return o;
      }
    }
    function Le(i) {
      var a = He(i, u);
      if (!ue(a))
        throw new TypeError();
      var o = a.call(i);
      if (!x(o))
        throw new TypeError();
      return o;
    }
    function je(i) {
      return i.value;
    }
    function De(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function ze(i) {
      var a = i.return;
      a && a.call(i);
    }
    function ye(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || a !== w)
        return a;
      var o = i.prototype, h = o && Object.getPrototypeOf(o);
      if (h == null || h === Object.prototype)
        return a;
      var y = h.constructor;
      return typeof y != "function" || y === i ? a : y;
    }
    function Ot() {
      var i;
      !m(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Rt(t.Reflect));
      var a, o, h, y = new D(), S = {
        registerProvider: T,
        getProvider: c,
        setProvider: f
      };
      return S;
      function T(p) {
        if (!Object.isExtensible(S))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case m(a):
            a = p;
            break;
          case a === p:
            break;
          case m(o):
            o = p;
            break;
          case o === p:
            break;
          default:
            h === void 0 && (h = new I()), h.add(p);
            break;
        }
      }
      function _(p, b) {
        if (!m(a)) {
          if (a.isProviderFor(p, b))
            return a;
          if (!m(o)) {
            if (o.isProviderFor(p, b))
              return a;
            if (!m(h))
              for (var A = Le(h); ; ) {
                var C = De(A);
                if (!C)
                  return;
                var L = je(C);
                if (L.isProviderFor(p, b))
                  return ze(A), L;
              }
          }
        }
        if (!m(i) && i.isProviderFor(p, b))
          return i;
      }
      function c(p, b) {
        var A = y.get(p), C;
        return m(A) || (C = A.get(b)), m(C) && (C = _(p, b), m(C) || (m(A) && (A = new M(), y.set(p, A)), A.set(b, C))), C;
      }
      function d(p) {
        if (m(p))
          throw new TypeError();
        return a === p || o === p || !m(h) && h.has(p);
      }
      function f(p, b, A) {
        if (!d(A))
          throw new Error("Metadata provider not registered.");
        var C = c(p, b);
        if (C !== A) {
          if (!m(C))
            return !1;
          var L = y.get(p);
          m(L) && (L = new M(), y.set(p, L)), L.set(b, A);
        }
        return !0;
      }
    }
    function Mt() {
      var i;
      return !m(F) && x(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[F]), m(i) && (i = Ot()), !m(F) && x(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
      var a = new D(), o = {
        isProviderFor: function(d, f) {
          var p = a.get(d);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: T,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: S,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: c
      };
      return le.registerProvider(o), o;
      function h(d, f, p) {
        var b = a.get(d), A = !1;
        if (m(b)) {
          if (!p)
            return;
          b = new M(), a.set(d, b), A = !0;
        }
        var C = b.get(f);
        if (m(C)) {
          if (!p)
            return;
          if (C = new M(), b.set(f, C), !i.setProvider(d, f, o))
            throw b.delete(f), A && a.delete(d), new Error("Wrong provider for target.");
        }
        return C;
      }
      function y(d, f, p) {
        var b = h(
          f,
          p,
          /*Create*/
          !1
        );
        return m(b) ? !1 : Ne(b.has(d));
      }
      function S(d, f, p) {
        var b = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m(b))
          return b.get(d);
      }
      function T(d, f, p, b) {
        var A = h(
          p,
          b,
          /*Create*/
          !0
        );
        A.set(d, f);
      }
      function _(d, f) {
        var p = [], b = h(
          d,
          f,
          /*Create*/
          !1
        );
        if (m(b))
          return p;
        for (var A = b.keys(), C = Le(A), L = 0; ; ) {
          var Be = De(C);
          if (!Be)
            return p.length = L, p;
          var It = je(Be);
          try {
            p[L] = It;
          } catch (Ht) {
            try {
              ze(C);
            } finally {
              throw Ht;
            }
          }
          L++;
        }
      }
      function c(d, f, p) {
        var b = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (m(b) || !b.delete(d))
          return !1;
        if (b.size === 0) {
          var A = a.get(f);
          m(A) || (A.delete(p), A.size === 0 && a.delete(A));
        }
        return !0;
      }
    }
    function Rt(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, h = i.getOwnMetadata, y = i.getOwnMetadataKeys, S = i.deleteMetadata, T = new D(), _ = {
        isProviderFor: function(c, d) {
          var f = T.get(c);
          return !m(f) && f.has(d) ? !0 : y(c, d).length ? (m(f) && (f = new I(), T.set(c, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: S
      };
      return _;
    }
    function Q(i, a, o) {
      var h = le.getProvider(i, a);
      if (!m(h))
        return h;
      if (o) {
        if (le.setProvider(i, a, xe))
          return xe;
        throw new Error("Illegal state.");
      }
    }
    function kt() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function _(c, d, f) {
            this._index = 0, this._keys = c, this._values = d, this._selector = f;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[u] = function() {
            return this;
          }, _.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var d = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), c;
          }, _.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: c, done: !0 };
          }, _;
        }()
      ), h = (
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
          }), _.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, _.prototype.set = function(c, d) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, _.prototype.delete = function(c) {
            var d = this._find(
              c,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ve(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new o(this._keys, this._values, y);
          }, _.prototype.values = function() {
            return new o(this._keys, this._values, S);
          }, _.prototype.entries = function() {
            return new o(this._keys, this._values, T);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(c, d) {
            if (!ve(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ve(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return h;
      function y(_, c) {
        return _;
      }
      function S(_, c) {
        return c;
      }
      function T(_, c) {
        return [_, c];
      }
    }
    function Nt() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new M();
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
    function Ut() {
      var i = 16, a = $.create(), o = h();
      return (
        /** @class */
        function() {
          function c() {
            this._key = h();
          }
          return c.prototype.has = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, c.prototype.get = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, c.prototype.set = function(d, f) {
            var p = y(
              d,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, c.prototype.delete = function(d) {
            var f = y(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = h();
          }, c;
        }()
      );
      function h() {
        var c;
        do
          c = "@@WeakMap@@" + _();
        while ($.has(a, c));
        return a[c] = !0, c;
      }
      function y(c, d) {
        if (!n.call(c, o)) {
          if (!d)
            return;
          Object.defineProperty(c, o, { value: $.create() });
        }
        return c[o];
      }
      function S(c, d) {
        for (var f = 0; f < d; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function T(c) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : S(d, c), d;
        }
        return S(new Array(c), c);
      }
      function _() {
        var c = T(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function ge(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(qe || (qe = {}));
function Dt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function zt(r) {
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
function Bt(r) {
  return zt(r);
}
function Wt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        We(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const $ = new CSSStyleSheet(), w = (E = l.sheet) == null ? void 0 : E.cssRules;
          w && (Array.from(w).forEach((M) => $.insertRule(M.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          v.appendChild($);
        }
        u.forEach(($) => {
          const w = $.cloneNode(!0);
          v.appendChild(w);
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
function qt(r) {
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
function U(r) {
  return qt(r);
}
var N;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(N || (N = {}));
var R;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(R || (R = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, $e = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if ($e && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Vt = (r) => new ot(typeof r == "string" ? r : r + "", void 0, Ee), Ft = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ot(t, r, Ee);
}, Yt = (r, e) => {
  if ($e) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = he.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = $e ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Vt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Zt, getOwnPropertyDescriptor: Jt, getOwnPropertyNames: Qt, getOwnPropertySymbols: Kt, getPrototypeOf: er } = Object, B = globalThis, Ye = B.trustedTypes, tr = Ye ? Ye.emptyScript : "", me = B.reactiveElementPolyfillSupport, te = (r, e) => r, ce = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? tr : null;
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
} }, Ae = (r, e) => !Xt(r, e), Xe = { attribute: !0, type: String, converter: ce, reflect: !1, useDefault: !1, hasChanged: Ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Xe) {
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
      const g = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Xe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(te("elementProperties"))) return;
    const e = er(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(te("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(te("properties"))) {
      const t = this.properties, n = [...Qt(t), ...Kt(t)];
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
      for (const s of n) t.unshift(Fe(s));
    } else e !== void 0 && t.push(Fe(e));
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
    return Yt(e, this.constructor.elementStyles), e;
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
      const g = n.getPropertyOptions(s), v = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : ce;
      this._$Em = s;
      const E = v.fromAttribute(t, g.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const g = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = g.getPropertyOptions(e)), !((n.hasChanged ?? Ae)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(g._$Eu(e, n)))) return;
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
        const { wrapped: g } = u, v = this[l];
        g !== !0 || this._$AL.has(l) || v === void 0 || this.C(l, void 0, u, v);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[te("elementProperties")] = /* @__PURE__ */ new Map(), X[te("finalized")] = /* @__PURE__ */ new Map(), me == null || me({ ReactiveElement: X }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re = globalThis, Ze = (r) => r, de = re.trustedTypes, Je = de ? de.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, lt = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + z, rr = `<${ut}>`, V = document, ie = () => V.createComment(""), se = (r) => r === null || typeof r != "object" && typeof r != "function", Ce = Array.isArray, nr = (r) => Ce(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, W = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, ht = /^(?:script|style|textarea|title)$/i, ir = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ee = ir(1), Z = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), G = V.createTreeWalker(V, 129);
function ct(r, e) {
  if (!Ce(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let g = 0; g < t; g++) {
    const v = r[g];
    let E, $, w = -1, M = 0;
    for (; M < v.length && (u.lastIndex = M, $ = u.exec(v), $ !== null); ) M = u.lastIndex, u === K ? $[1] === "!--" ? u = Qe : $[1] !== void 0 ? u = Ke : $[2] !== void 0 ? (ht.test($[2]) && (s = RegExp("</" + $[2], "g")), u = W) : $[3] !== void 0 && (u = W) : u === W ? $[0] === ">" ? (u = s ?? K, w = -1) : $[1] === void 0 ? w = -2 : (w = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? W : $[3] === '"' ? tt : et) : u === tt || u === et ? u = W : u === Qe || u === Ke ? u = K : (u = W, s = void 0);
    const I = u === W && r[g + 1].startsWith("/>") ? " " : "";
    l += u === K ? v + rr : w >= 0 ? (n.push(E), v.slice(0, w) + lt + v.slice(w) + z + I) : v + z + (w === -2 ? g : I);
  }
  return [ct(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ae {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const g = e.length - 1, v = this.parts, [E, $] = sr(e, t);
    if (this.el = ae.createElement(E, n), G.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = G.nextNode()) !== null && v.length < g; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(lt)) {
          const M = $[u++], I = s.getAttribute(w).split(z), D = /([.?@])?(.*)/.exec(M);
          v.push({ type: 1, index: l, name: D[2], strings: I, ctor: D[1] === "." ? or : D[1] === "?" ? lr : D[1] === "@" ? ur : fe }), s.removeAttribute(w);
        } else w.startsWith(z) && (v.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ht.test(s.tagName)) {
          const w = s.textContent.split(z), M = w.length - 1;
          if (M > 0) {
            s.textContent = de ? de.emptyScript : "";
            for (let I = 0; I < M; I++) s.append(w[I], ie()), G.nextNode(), v.push({ type: 2, index: ++l });
            s.append(w[M], ie());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ut) v.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(z, w + 1)) !== -1; ) v.push({ type: 7, index: l }), w += z.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = V.createElement("template");
    return n.innerHTML = e, n;
  }
}
function J(r, e, t = r, n) {
  var u, g;
  if (e === Z) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = se(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((g = s == null ? void 0 : s._$AO) == null || g.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = J(r, s._$AS(r, e.values), s, n)), e;
}
class ar {
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? V).importNode(t, !0);
    G.currentNode = s;
    let l = G.nextNode(), u = 0, g = 0, v = n[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let E;
        v.type === 2 ? E = new oe(l, l.nextSibling, this, e) : v.type === 1 ? E = new v.ctor(l, v.name, v.strings, this, e) : v.type === 6 && (E = new hr(l, this, e)), this._$AV.push(E), v = n[++g];
      }
      u !== (v == null ? void 0 : v.index) && (l = G.nextNode(), u++);
    }
    return G.currentNode = V, s;
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
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = J(this, e, t), se(e) ? e === O || e == null || e === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== O && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(V.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ae.createElement(ct(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ar(s, this), g = u.u(this.options);
      u.p(t), this.T(g), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new ae(e)), t;
  }
  k(e) {
    Ce(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new oe(this.O(ie()), this.O(ie()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Ze(e).nextSibling;
      Ze(e).remove(), e = s;
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
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = O;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = J(this, e, t, 0), u = !se(e) || e !== this._$AH && e !== Z, u && (this._$AH = e);
    else {
      const g = e;
      let v, E;
      for (e = l[0], v = 0; v < l.length - 1; v++) E = J(this, g[n + v], t, v), E === Z && (E = this._$AH[v]), u || (u = !se(E) || E !== this._$AH[v]), E === O ? e = O : e !== O && (e += (E ?? "") + l[v + 1]), this._$AH[v] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === O ? void 0 : e;
  }
}
class lr extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== O);
  }
}
class ur extends fe {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? O) === Z) return;
    const n = this._$AH, s = e === O && n !== O || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== O && (n === O || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class hr {
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
const be = re.litHtmlPolyfillSupport;
be == null || be(ae, oe), (re.litHtmlVersions ?? (re.litHtmlVersions = [])).push("3.3.3");
const cr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new oe(e.insertBefore(ie(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis;
class ne extends X {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = cr(t, this.renderRoot, this.renderOptions);
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
var at;
ne._$litElement$ = !0, ne.finalized = !0, (at = q.litElementHydrateSupport) == null || at.call(q, { LitElement: ne });
const we = q.litElementPolyfillSupport;
we == null || we({ LitElement: ne });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ae }, fr = (r = dr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(g) {
      const v = e.get.call(this);
      e.set.call(this, g), this.requestUpdate(u, v, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(u, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(g) {
      const v = this[u];
      e.call(this, g), this.requestUpdate(u, v, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function H(r) {
  return (e, t) => typeof t == "object" ? fr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var pr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, k = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? vr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && pr(e, t, s), s;
};
const nt = () => window.zeroThemeManager, it = {
  kind: "generic",
  templateHtml: [
    "<div style='padding:10px 14px;border-radius:8px;border:1px solid rgba(148,163,184,0.2);background:rgba(255,255,255,0.95);min-height:60px;'>",
    "<div style='font-size:0.7rem;color:var(--uiv-text-muted,#94a3b8);margin-bottom:4px;font-weight:600;'>{{display:label}}</div>",
    "<div style='font-size:0.8rem;color:var(--uiv-text-color,#64748b);opacity:0.6;'>{{display:placeholder}}</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Textarea"]
};
function st(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let P = class extends ne {
  constructor() {
    super(...arguments), this.value = "", this.label = "Textarea", this.placeholder = "Enter your text here...", this.rows = 4, this.maxLength = 0, this.required = !1, this.disabled = !1, this.autoResize = !1, this.showCharacterCount = !0, this.showWordCount = !1, this.errorMessage = "", this.showError = !1;
  }
  static getStudioTemplate(r) {
    if (!r) return it;
    const e = st(r.studio.display.label || "Textarea"), t = st(r.studio.display.placeholder || "Enter text...");
    return {
      ...it,
      templateHtml: [
        "<div style='display:block;width:100%;font-family:inherit;'>",
        `<label style='display:block;margin-bottom:8px;font-size:14px;font-weight:500;color:var(--uiv-text-color, #333);'>${e}</label>`,
        `<div style='width:100%;padding:12px;border:1px solid var(--uiv-border-color, #ddd);border-radius:12px;font-size:14px;background:var(--uiv-surface-color, #fff);color:var(--uiv-text-muted,#94a3b8);min-height:100px;box-shadow:var(--uiv-shadow-depth,none);'>${t}</div>`,
        "</div>"
      ].join("")
    };
  }
  getCharacterCountClass() {
    if (!this.maxLength) return "";
    const e = this.value.length / this.maxLength * 100;
    return e >= 100 ? "over-limit" : e >= 80 ? "near-limit" : "";
  }
  getWordCount() {
    return this.value.trim() ? this.value.trim().split(/\s+/).length : 0;
  }
  autoResizeTextarea(r) {
    this.autoResize && (r.style.height = "auto", r.style.height = r.scrollHeight + "px");
  }
  handleInput(r) {
    const e = r.target;
    this.value = e.value, this.autoResizeTextarea(e), this.dispatchEvent(new CustomEvent("input", {
      detail: {
        value: this.value,
        characterCount: this.value.length,
        wordCount: this.getWordCount()
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(r) {
    const e = r.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("change", {
      detail: {
        value: this.value,
        characterCount: this.value.length,
        wordCount: this.getWordCount()
      },
      bubbles: !0,
      composed: !0
    }));
  }
  updated(r) {
    var e;
    if (super.updated(r), r.has("value") && this.autoResize) {
      const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("textarea");
      t && this.autoResizeTextarea(t);
    }
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = nt()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var n;
    const r = (n = nt()) == null ? void 0 : n.getActiveTheme("zero-standard-themes"), e = this.getCharacterCountClass(), t = this.getWordCount();
    return ee`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getComponentStyles("input") : ""}
            </style>
            <div class="form-field uiv-${r == null ? void 0 : r.id}-theme">
                <label for="textarea-input" class="uiv-${r == null ? void 0 : r.id}-text">${this.label}</label>
                <textarea 
                    id="textarea-input"
                    class="mat-mdc-input-element uiv-${r == null ? void 0 : r.id}-card uiv-${r == null ? void 0 : r.id}-scan ${this.autoResize ? "auto-resize" : ""} ${this.showError ? "error" : ""}"
                    .value="${this.value}" 
                    placeholder="${this.placeholder}"
                    rows="${this.rows}"
                    maxlength="${this.maxLength > 0 ? this.maxLength : ""}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    @input="${this.handleInput}"
                    @change="${this.handleChange}"
                ></textarea>
                
                ${this.showCharacterCount || this.showWordCount ? ee`
                    <div class="textarea-footer uiv-${r == null ? void 0 : r.id}-text">
                        <div class="error-message uiv-${r == null ? void 0 : r.id}-text ${this.showError ? "show" : ""}" style="color: var(--uiv-status-danger)">
                            ${this.errorMessage}
                        </div>
                        <div>
                            ${this.showCharacterCount ? ee`
                                <span class="character-count ${e}">
                                    ${this.value.length}${this.maxLength ? `/${this.maxLength}` : ""} characters
                                </span>
                            ` : ""}
                            ${this.showWordCount ? ee`
                                <span class="word-count">
                                    ${t} words
                                </span>
                            ` : ""}
                        </div>
                    </div>
                ` : ee`
                    <div class="error-message uiv-${r == null ? void 0 : r.id}-text ${this.showError ? "show" : ""}" style="color: var(--uiv-error-color, #f44336)">
                        ${this.errorMessage}
                    </div>
                `}
            </div>
        `;
  }
};
P.styles = Ft`
        :host {
            display: block;
            width: 100%;
            --uiv-primary: var(--uiv-primary-color, var(--uiv-status-primary));
            --uiv-bg: var(--uiv-surface-color, var(--uiv-app-input-bg, #fff));
            --uiv-text: var(--uiv-text-color, var(--uiv-text-primary-themed));
            --uiv-border: var(--uiv-border-color, var(--uiv-app-border-color, rgba(128,128,128,0.2)));
        }

        .form-field {
            margin-bottom: 20px;
        }

        .form-field label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--uiv-text);
            font-weight: 500;
        }

        textarea.mat-mdc-input-element {
            width: 100%;
            padding: 12px;
            border: 1px solid var(--uiv-border);
            border-radius: 12px;
            font-size: 14px;
            background-color: var(--uiv-bg);
            color: var(--uiv-text);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            min-height: 100px;
            resize: vertical;
            box-sizing: border-box;
            line-height: 1.6;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        textarea.mat-mdc-input-element:hover {
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
        }

        textarea.mat-mdc-input-element:focus {
            outline: none;
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
            transform: translateY(-1px);
        }

        .textarea-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 8px;
            font-size: 12px;
            color: var(--uiv-text);
            opacity: 0.7;
        }

        .character-count.near-limit { color: var(--uiv-color-warning, var(--uiv-status-warning)); }
        .character-count.over-limit { color: var(--uiv-color-danger, var(--uiv-status-danger)); font-weight: bold; }
    `;
k([
  H({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.TEXTAREA,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], P.prototype, "value", 2);
k([
  H({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], P.prototype, "label", 2);
k([
  H({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], P.prototype, "placeholder", 2);
k([
  H({ type: Number }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Rows",
    fieldMappings: "rows"
  })
], P.prototype, "rows", 2);
k([
  H({ type: Number }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Max Length",
    fieldMappings: "maxLength"
  })
], P.prototype, "maxLength", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], P.prototype, "required", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], P.prototype, "disabled", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Auto Resize",
    fieldMappings: "autoResize"
  })
], P.prototype, "autoResize", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Character Count",
    fieldMappings: "showCharacterCount"
  })
], P.prototype, "showCharacterCount", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Word Count",
    fieldMappings: "showWordCount"
  })
], P.prototype, "showWordCount", 2);
k([
  H({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], P.prototype, "errorMessage", 2);
k([
  H({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], P.prototype, "showError", 2);
k([
  U({
    attributeType: R.EVENT,
    displayLabel: "On Input",
    eventTrigger: "input"
  })
], P.prototype, "handleInput", 1);
k([
  U({
    attributeType: R.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], P.prototype, "handleChange", 1);
P = k([
  Bt({
    name: "zero-textarea",
    version: "1.0.0",
    title: "Textarea",
    elementSelector: "zero-textarea",
    group: "Form Controls",
    iconName: "textarea-icon.png"
  }),
  Wt()
], P);
export {
  P as ZeroTextarea,
  it as studioTemplate
};
