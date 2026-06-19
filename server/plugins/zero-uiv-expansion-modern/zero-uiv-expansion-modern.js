var Lt = Object.defineProperty;
var Gt = (r, e, t) => e in r ? Lt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => Gt(r, typeof e != "symbol" ? e + "" : e, t);
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var We;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Be == "object" ? Be : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(v, x) {
      return function(w, $) {
        Object.defineProperty(v, w, { configurable: !0, writable: !0, value: $ }), x && x(w, $);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function d() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function g() {
      return l() || d();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", d = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, x = !g && !v, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
      },
      has: x ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: x ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, $ = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ut(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Dt(), j = typeof WeakMap == "function" ? WeakMap : Ht(), W = s ? Symbol.for("@reflect-metadata:registry") : void 0, ae = kt(), Ae = Nt(ae);
    function vt(i, o, a, u) {
      if (m(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!je(o))
          throw new TypeError();
        return At(i, o);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!S(o))
          throw new TypeError();
        if (!S(u) && !m(u) && !V(u))
          throw new TypeError();
        return V(u) && (u = void 0), a = k(a), St(i, o, a, u);
      }
    }
    e("decorate", vt);
    function yt(i, o) {
      function a(u, y) {
        if (!S(u))
          throw new TypeError();
        if (!m(y) && !Tt(y))
          throw new TypeError();
        Ce(i, o, u, y);
      }
      return a;
    }
    e("metadata", yt);
    function gt(i, o, a, u) {
      if (!S(a))
        throw new TypeError();
      return m(u) || (u = k(u)), Ce(i, o, a, u);
    }
    e("defineMetadata", gt);
    function mt(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Se(i, o, a);
    }
    e("hasMetadata", mt);
    function _t(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return m(a) || (a = k(a)), fe(i, o, a);
    }
    e("hasOwnMetadata", _t);
    function bt(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Oe(i, o, a);
    }
    e("getMetadata", bt);
    function $t(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return m(a) || (a = k(a)), Me(i, o, a);
    }
    e("getOwnMetadata", $t);
    function wt(i, o) {
      if (!S(i))
        throw new TypeError();
      return m(o) || (o = k(o)), Pe(i, o);
    }
    e("getMetadataKeys", wt);
    function xt(i, o) {
      if (!S(i))
        throw new TypeError();
      return m(o) || (o = k(o)), Te(i, o);
    }
    e("getOwnMetadataKeys", xt);
    function Et(i, o, a) {
      if (!S(o))
        throw new TypeError();
      if (m(a) || (a = k(a)), !S(o))
        throw new TypeError();
      m(a) || (a = k(a));
      var u = X(
        o,
        a,
        /*Create*/
        !1
      );
      return m(u) ? !1 : u.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", Et);
    function At(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var u = i[a], y = u(o);
        if (!m(y) && !V(y)) {
          if (!je(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function St(i, o, a, u) {
      for (var y = i.length - 1; y >= 0; --y) {
        var M = i[y], O = M(o, a, u);
        if (!m(O) && !V(O)) {
          if (!S(O))
            throw new TypeError();
          u = O;
        }
      }
      return u;
    }
    function Se(i, o, a) {
      var u = fe(i, o, a);
      if (u)
        return !0;
      var y = ve(o);
      return V(y) ? !1 : Se(i, y, a);
    }
    function fe(i, o, a) {
      var u = X(
        o,
        a,
        /*Create*/
        !1
      );
      return m(u) ? !1 : ke(u.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Oe(i, o, a) {
      var u = fe(i, o, a);
      if (u)
        return Me(i, o, a);
      var y = ve(o);
      if (!V(y))
        return Oe(i, y, a);
    }
    function Me(i, o, a) {
      var u = X(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(u))
        return u.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ce(i, o, a, u) {
      var y = X(
        a,
        u,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, o, a, u);
    }
    function Pe(i, o) {
      var a = Te(i, o), u = ve(i);
      if (u === null)
        return a;
      var y = Pe(u, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var M = new T(), O = [], _ = 0, c = a; _ < c.length; _++) {
        var h = c[_], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      for (var p = 0, b = y; p < b.length; p++) {
        var h = b[p], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      return O;
    }
    function Te(i, o) {
      var a = X(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function Re(i) {
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
    function V(i) {
      return i === null;
    }
    function Ot(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Mt(i, o) {
      switch (Re(i)) {
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
      var a = "string", u = Ue(i, l);
      if (u !== void 0) {
        var y = u.call(i, a);
        if (S(y))
          throw new TypeError();
        return y;
      }
      return Ct(i);
    }
    function Ct(i, o) {
      var a, u;
      {
        var y = i.toString;
        if (le(y)) {
          var u = y.call(i);
          if (!S(u))
            return u;
        }
        var a = i.valueOf;
        if (le(a)) {
          var u = a.call(i);
          if (!S(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function ke(i) {
      return !!i;
    }
    function Pt(i) {
      return "" + i;
    }
    function k(i) {
      var o = Mt(i);
      return Ot(o) ? o : Pt(o);
    }
    function Ne(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function le(i) {
      return typeof i == "function";
    }
    function je(i) {
      return typeof i == "function";
    }
    function Tt(i) {
      switch (Re(i)) {
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
    function Ue(i, o) {
      var a = i[o];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function De(i) {
      var o = Ue(i, d);
      if (!le(o))
        throw new TypeError();
      var a = o.call(i);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function He(i) {
      return i.value;
    }
    function Ie(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function ze(i) {
      var o = i.return;
      o && o.call(i);
    }
    function ve(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || o !== $)
        return o;
      var a = i.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return o;
      var y = u.constructor;
      return typeof y != "function" || y === i ? o : y;
    }
    function Rt() {
      var i;
      !m(W) && typeof t.Reflect < "u" && !(W in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = jt(t.Reflect));
      var o, a, u, y = new j(), M = {
        registerProvider: O,
        getProvider: c,
        setProvider: f
      };
      return M;
      function O(p) {
        if (!Object.isExtensible(M))
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
            u === void 0 && (u = new T()), u.add(p);
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
            if (!m(u))
              for (var E = De(u); ; ) {
                var A = Ie(E);
                if (!A)
                  return;
                var R = He(A);
                if (R.isProviderFor(p, b))
                  return ze(E), R;
              }
          }
        }
        if (!m(i) && i.isProviderFor(p, b))
          return i;
      }
      function c(p, b) {
        var E = y.get(p), A;
        return m(E) || (A = E.get(b)), m(A) && (A = _(p, b), m(A) || (m(E) && (E = new P(), y.set(p, E)), E.set(b, A))), A;
      }
      function h(p) {
        if (m(p))
          throw new TypeError();
        return o === p || a === p || !m(u) && u.has(p);
      }
      function f(p, b, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var A = c(p, b);
        if (A !== E) {
          if (!m(A))
            return !1;
          var R = y.get(p);
          m(R) && (R = new P(), y.set(p, R)), R.set(b, E);
        }
        return !0;
      }
    }
    function kt() {
      var i;
      return !m(W) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[W]), m(i) && (i = Rt()), !m(W) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, W, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Nt(i) {
      var o = new j(), a = {
        isProviderFor: function(h, f) {
          var p = o.get(h);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: c
      };
      return ae.registerProvider(a), a;
      function u(h, f, p) {
        var b = o.get(h), E = !1;
        if (m(b)) {
          if (!p)
            return;
          b = new P(), o.set(h, b), E = !0;
        }
        var A = b.get(f);
        if (m(A)) {
          if (!p)
            return;
          if (A = new P(), b.set(f, A), !i.setProvider(h, f, a))
            throw b.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return A;
      }
      function y(h, f, p) {
        var b = u(
          f,
          p,
          /*Create*/
          !1
        );
        return m(b) ? !1 : ke(b.has(h));
      }
      function M(h, f, p) {
        var b = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m(b))
          return b.get(h);
      }
      function O(h, f, p, b) {
        var E = u(
          p,
          b,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function _(h, f) {
        var p = [], b = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(b))
          return p;
        for (var E = b.keys(), A = De(E), R = 0; ; ) {
          var Le = Ie(A);
          if (!Le)
            return p.length = R, p;
          var It = He(Le);
          try {
            p[R] = It;
          } catch (zt) {
            try {
              ze(A);
            } finally {
              throw zt;
            }
          }
          R++;
        }
      }
      function c(h, f, p) {
        var b = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (m(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var E = o.get(f);
          m(E) || (E.delete(p), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function jt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, u = i.getOwnMetadata, y = i.getOwnMetadataKeys, M = i.deleteMetadata, O = new j(), _ = {
        isProviderFor: function(c, h) {
          var f = O.get(c);
          return !m(f) && f.has(h) ? !0 : y(c, h).length ? (m(f) && (f = new T(), O.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: M
      };
      return _;
    }
    function X(i, o, a) {
      var u = ae.getProvider(i, o);
      if (!m(u))
        return u;
      if (a) {
        if (ae.setProvider(i, o, Ae))
          return Ae;
        throw new Error("Illegal state.");
      }
    }
    function Ut() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function _(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[d] = function() {
            return this;
          }, _.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), c;
          }, _.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: c, done: !0 };
          }, _;
        }()
      ), u = (
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
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, _.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, _.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, pe(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, M);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[d] = function() {
            return this.entries();
          }, _.prototype._find = function(c, h) {
            if (!pe(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pe(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return u;
      function y(_, c) {
        return _;
      }
      function M(_, c) {
        return c;
      }
      function O(_, c) {
        return [_, c];
      }
    }
    function Dt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new P();
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
          }, o.prototype[d] = function() {
            return this.keys();
          }, o;
        }()
      );
      return i;
    }
    function Ht() {
      var i = 16, o = w.create(), a = u();
      return (
        /** @class */
        function() {
          function c() {
            this._key = u();
          }
          return c.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
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
            this._key = u();
          }, c;
        }()
      );
      function u() {
        var c;
        do
          c = "@@WeakMap@@" + _();
        while (w.has(o, c));
        return o[c] = !0, c;
      }
      function y(c, h) {
        if (!n.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: w.create() });
        }
        return c[a];
      }
      function M(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function O(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : M(h, c), h;
        }
        return M(new Array(c), c);
      }
      function _() {
        var c = O(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ye(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(We || (We = {}));
function Bt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Wt(r) {
  return function(e) {
    if (Bt(r)) {
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
function lt(r) {
  return Wt(r);
}
function dt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ge(this, "_stylesApplied", !1);
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
        var x;
        const l = document.querySelector('style.global-style[type="text/css"]'), d = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const w = new CSSStyleSheet(), $ = (x = l.sheet) == null ? void 0 : x.cssRules;
          $ && (Array.from($).forEach((P) => w.insertRule(P.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          v.appendChild(w);
        }
        d.forEach((w) => {
          const $ = w.cloneNode(!0);
          v.appendChild($);
        });
      }
    }
    return t;
  };
}
function Vt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function qt(r) {
  return function(e, t) {
    try {
      Vt(r);
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
function ie(r) {
  return qt(r);
}
var L;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(L || (L = {}));
var G;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(G || (G = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de = globalThis, $e = de.ShadowRoot && (de.ShadyCSS === void 0 || de.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, we = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let ut = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== we) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
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
const Ft = (r) => new ut(typeof r == "string" ? r : r + "", void 0, we), Zt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ut(t, r, we);
}, Yt = (r, e) => {
  if ($e) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = de.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, qe = $e ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Ft(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Jt, getOwnPropertyDescriptor: Qt, getOwnPropertyNames: Kt, getOwnPropertySymbols: er, getPrototypeOf: tr } = Object, D = globalThis, Fe = D.trustedTypes, rr = Fe ? Fe.emptyScript : "", ge = D.reactiveElementPolyfillSupport, Q = (r, e) => r, ue = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? rr : null;
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
} }, xe = (r, e) => !Xt(r, e), Ze = { attribute: !0, type: String, converter: ue, reflect: !1, useDefault: !1, hasChanged: xe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let q = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Jt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(d) {
      this[t] = d;
    } };
    return { get: s, set(d) {
      const g = s == null ? void 0 : s.call(this);
      l == null || l.call(this, d), this.requestUpdate(e, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Q("elementProperties"))) return;
    const e = tr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Q("properties"))) {
      const t = this.properties, n = [...Kt(t), ...er(t)];
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
      const d = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ue).toAttribute(t, n.type);
      this._$Em = e, d == null ? this.removeAttribute(s) : this.setAttribute(s, d), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, d;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const g = n.getPropertyOptions(s), v = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : ue;
      this._$Em = s;
      const x = v.fromAttribute(t, g.type);
      this[s] = x ?? ((d = this._$Ej) == null ? void 0 : d.get(s)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var d;
    if (e !== void 0) {
      const g = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = g.getPropertyOptions(e)), !((n.hasChanged ?? xe)(l, t) || n.useDefault && n.reflect && l === ((d = this._$Ej) == null ? void 0 : d.get(e)) && !this.hasAttribute(g._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: s, wrapped: l }, d) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, d ?? t ?? this[e]), l !== !0 || d !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, d] of this._$Ep) this[l] = d;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, d] of s) {
        const { wrapped: g } = d, v = this[l];
        g !== !0 || this._$AL.has(l) || v === void 0 || this.C(l, void 0, d, v);
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
q.elementStyles = [], q.shadowRootOptions = { mode: "open" }, q[Q("elementProperties")] = /* @__PURE__ */ new Map(), q[Q("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: q }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const K = globalThis, Ye = (r) => r, ce = K.trustedTypes, Xe = ce ? ce.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ct = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, ht = "?" + U, nr = `<${ht}>`, B = document, te = () => B.createComment(""), re = (r) => r === null || typeof r != "object" && typeof r != "function", Ee = Array.isArray, ir = (r) => Ee(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, J = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, H = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, ft = /^(?:script|style|textarea|title)$/i, sr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), tt = sr(1), F = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), I = B.createTreeWalker(B, 129);
function pt(r, e) {
  if (!Ee(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xe !== void 0 ? Xe.createHTML(e) : e;
}
const or = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", d = J;
  for (let g = 0; g < t; g++) {
    const v = r[g];
    let x, w, $ = -1, P = 0;
    for (; P < v.length && (d.lastIndex = P, w = d.exec(v), w !== null); ) P = d.lastIndex, d === J ? w[1] === "!--" ? d = Je : w[1] !== void 0 ? d = Qe : w[2] !== void 0 ? (ft.test(w[2]) && (s = RegExp("</" + w[2], "g")), d = H) : w[3] !== void 0 && (d = H) : d === H ? w[0] === ">" ? (d = s ?? J, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = d.lastIndex - w[2].length, x = w[1], d = w[3] === void 0 ? H : w[3] === '"' ? et : Ke) : d === et || d === Ke ? d = H : d === Je || d === Qe ? d = J : (d = H, s = void 0);
    const T = d === H && r[g + 1].startsWith("/>") ? " " : "";
    l += d === J ? v + nr : $ >= 0 ? (n.push(x), v.slice(0, $) + ct + v.slice($) + U + T) : v + U + ($ === -2 ? g : T);
  }
  return [pt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ne {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, d = 0;
    const g = e.length - 1, v = this.parts, [x, w] = or(e, t);
    if (this.el = ne.createElement(x, n), I.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = I.nextNode()) !== null && v.length < g; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(ct)) {
          const P = w[d++], T = s.getAttribute($).split(U), j = /([.?@])?(.*)/.exec(P);
          v.push({ type: 1, index: l, name: j[2], strings: T, ctor: j[1] === "." ? lr : j[1] === "?" ? dr : j[1] === "@" ? ur : he }), s.removeAttribute($);
        } else $.startsWith(U) && (v.push({ type: 6, index: l }), s.removeAttribute($));
        if (ft.test(s.tagName)) {
          const $ = s.textContent.split(U), P = $.length - 1;
          if (P > 0) {
            s.textContent = ce ? ce.emptyScript : "";
            for (let T = 0; T < P; T++) s.append($[T], te()), I.nextNode(), v.push({ type: 2, index: ++l });
            s.append($[P], te());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ht) v.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(U, $ + 1)) !== -1; ) v.push({ type: 7, index: l }), $ += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = B.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Z(r, e, t = r, n) {
  var d, g;
  if (e === F) return e;
  let s = n !== void 0 ? (d = t._$Co) == null ? void 0 : d[n] : t._$Cl;
  const l = re(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((g = s == null ? void 0 : s._$AO) == null || g.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = Z(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? B).importNode(t, !0);
    I.currentNode = s;
    let l = I.nextNode(), d = 0, g = 0, v = n[0];
    for (; v !== void 0; ) {
      if (d === v.index) {
        let x;
        v.type === 2 ? x = new se(l, l.nextSibling, this, e) : v.type === 1 ? x = new v.ctor(l, v.name, v.strings, this, e) : v.type === 6 && (x = new cr(l, this, e)), this._$AV.push(x), v = n[++g];
      }
      d !== (v == null ? void 0 : v.index) && (l = I.nextNode(), d++);
    }
    return I.currentNode = B, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = Z(this, e, t), re(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== F && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : ir(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && re(this._$AH) ? this._$AA.nextSibling.data = e : this.T(B.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ne.createElement(pt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const d = new ar(s, this), g = d.u(this.options);
      d.p(t), this.T(g), this._$AH = d;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new ne(e)), t;
  }
  k(e) {
    Ee(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new se(this.O(te()), this.O(te()), this, this.options)) : n = t[s], n._$AI(l), s++;
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
class he {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) e = Z(this, e, t, 0), d = !re(e) || e !== this._$AH && e !== F, d && (this._$AH = e);
    else {
      const g = e;
      let v, x;
      for (e = l[0], v = 0; v < l.length - 1; v++) x = Z(this, g[n + v], t, v), x === F && (x = this._$AH[v]), d || (d = !re(x) || x !== this._$AH[v]), x === C ? e = C : e !== C && (e += (x ?? "") + l[v + 1]), this._$AH[v] = x;
    }
    d && !s && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class lr extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class dr extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class ur extends he {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Z(this, e, t, 0) ?? C) === F) return;
    const n = this._$AH, s = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== C && (n === C || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class cr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Z(this, e);
  }
}
const _e = K.litHtmlPolyfillSupport;
_e == null || _e(ne, se), (K.litHtmlVersions ?? (K.litHtmlVersions = [])).push("3.3.3");
const hr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new se(e.insertBefore(te(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = globalThis;
class ee extends q {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = hr(t, this.renderRoot, this.renderOptions);
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
var at;
ee._$litElement$ = !0, ee.finalized = !0, (at = z.litElementHydrateSupport) == null || at.call(z, { LitElement: ee });
const be = z.litElementPolyfillSupport;
be == null || be({ LitElement: ee });
(z.litElementVersions ?? (z.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: xe }, pr = (r = fr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: d } = t;
    return { set(g) {
      const v = e.get.call(this);
      e.set.call(this, g), this.requestUpdate(d, v, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(d, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: d } = t;
    return function(g) {
      const v = this[d];
      e.call(this, g), this.requestUpdate(d, v, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function oe(r) {
  return (e, t) => typeof t == "object" ? pr(r, e, t) : ((n, s, l) => {
    const d = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), d ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var vr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, Y = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? yr(e, t) : e, l = r.length - 1, d; l >= 0; l--)
    (d = r[l]) && (s = (n ? d(e, t, s) : d(s)) || s);
  return n && s && vr(e, t, s), s;
};
const nt = () => window.zeroThemeManager, it = {
  kind: "generic",
  slots: [
    { id: "default", label: "Expansion Content", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='width:100%;border-radius:12px;border:1px solid var(--uiv-border-color, rgba(148,163,184,0.15));background:var(--uiv-surface-color, rgba(255,255,255,0.95));overflow:hidden;'>",
    "<div style='padding:14px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(148,163,184,0.1);'>",
    "<span style='font-size:0.85rem;font-weight:600;color:var(--uiv-text-color,#1e293b);'>{{display:headerText}}</span>",
    "<span style='color:var(--uiv-primary-color,#6366f1);font-size:0.8rem;transform:rotate(180deg);'>▼</span>",
    "</div>",
    "<div style='padding:16px;'>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "headerText",
  badges: ["Expansion", "Accordion"]
};
function gr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let N = class extends ee {
  constructor() {
    super(...arguments), this.theme = "modern", this.title = "Expansion Panel", this.expanded = !1, this.disabled = !1, this.accentColor = "";
  }
  static getStudioTemplate(r) {
    var n, s;
    if (!r) return it;
    const e = gr(r.studio.display.title || r.studio.display.headerText || "Expansion Header"), t = (((n = r.props) == null ? void 0 : n.accentColor) ?? ((s = r.studio.props) == null ? void 0 : s.accentColor)) || "var(--uiv-primary-color,#6366f1)";
    return {
      ...it,
      templateHtml: [
        "<div style='width:100%;border-radius:12px;border:1px solid var(--uiv-border-color, rgba(148,163,184,0.15));background:var(--uiv-surface-color, rgba(255,255,255,0.95));overflow:hidden;'>",
        "<div style='padding:14px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(148,163,184,0.1);'>",
        `<span style='font-size:0.85rem;font-weight:600;color:var(--uiv-text-color,#1e293b);'>${e}</span>`,
        `<span style='color:${t};font-size:0.8rem;transform:rotate(180deg);'>▼</span>`,
        "</div>",
        "<div style='padding:16px;'>",
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  toggle() {
    this.disabled || (this.expanded = !this.expanded, this.dispatchEvent(new CustomEvent("toggle", {
      detail: { expanded: this.expanded },
      bubbles: !0,
      composed: !0
    })));
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = nt()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const r = (e = nt()) == null ? void 0 : e.getActiveTheme();
    return r ? tt`
            <style>
                ${r.getGlobalStyles()}
                ${r.getComponentStyles("expansion")}
                :host {
                    --uiv-expansion-accent: ${this.accentColor || "var(--uiv-expansion-primary, #6c63ff)"};
                }
            </style>
            <div class="expansion-wrapper uiv-${r == null ? void 0 : r.id}-theme uiv-${r == null ? void 0 : r.id}-card ${this.theme} ${this.expanded ? "expanded" : ""}">
                <div class="header" @click="${this.toggle}">
                    <span class="uiv-${r == null ? void 0 : r.id}-text">${this.title}</span>
                    <span class="icon">▼</span>
                </div>
                <div class="content uiv-${r == null ? void 0 : r.id}-text-secondary">
                    <slot></slot>
                </div>
            </div>
        ` : tt`<div class="expansion-panel ${this.theme}"></div>`;
  }
};
N.styles = Zt`
        :host {
            display: block;
            width: 100%;
            margin-bottom: 12px;
            --exp-p: var(--uiv-primary-color, #6366f1);
            --exp-bg: var(--uiv-surface-color, #ffffff);
            --exp-border: var(--uiv-border-color, #e2e8f0);
            --exp-t: var(--uiv-text-color, #1e293b);
            --depth: var(--uiv-shadow-depth, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
        }

        .expansion-wrapper {
            width: 100%;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            background: var(--exp-bg);
            border: 1px solid var(--exp-border);
            border-radius: 12px;
            box-shadow: var(--depth);
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 24px;
            cursor: pointer;
            user-select: none;
            font-weight: 600;
            color: var(--exp-p);
            border-bottom: 1px solid transparent;
            transition: background 0.3s ease;
        }

        .expanded .header {
            border-bottom-color: var(--exp-border);
            background: rgba(var(--uiv-primary-color-rgb, 99, 102, 241), 0.03);
        }

        .content {
            padding: 0 24px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0, 1, 0, 1), padding 0.3s ease;
            color: var(--exp-t);
        }

        .expanded .content {
            padding: 20px 24px;
            max-height: 2000px; /* Large enough for most content */
            transition: max-height 0.6s cubic-bezier(1, 0, 1, 0), padding 0.3s ease;
        }

        .icon {
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            color: var(--exp-p);
        }

        .expanded .icon {
            transform: rotate(180deg);
        }
    `;
Y([
  oe({ type: String }),
  ie({
    attributeType: G.PROPERTY,
    uiComponentType: L.DROPDOWN,
    displayLabel: "Theme",
    fieldMappings: "theme",
    optionItems: [
      { label: "Modern", value: "modern" },
      { label: "Glass", value: "glass" },
      { label: "Retro", value: "retro" },
      { label: "Cyber", value: "cyber" },
      { label: "Neon", value: "neon" }
    ]
  })
], N.prototype, "theme", 2);
Y([
  oe({ type: String }),
  ie({
    attributeType: G.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title"
  })
], N.prototype, "title", 2);
Y([
  oe({ type: Boolean }),
  ie({
    attributeType: G.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded"
  })
], N.prototype, "expanded", 2);
Y([
  oe({ type: Boolean }),
  ie({
    attributeType: G.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], N.prototype, "disabled", 2);
Y([
  oe({ type: String }),
  ie({
    attributeType: G.PROPERTY,
    uiComponentType: L.COLOR_PICKER,
    displayLabel: "Accent Color",
    fieldMappings: "accentColor"
  })
], N.prototype, "accentColor", 2);
N = Y([
  lt({
    name: "zero-uiv-expansion",
    version: "1.0.0",
    title: "Unified Expansion Panel",
    elementSelector: "zero-uiv-expansion",
    group: "Uiverse Expansion",
    iconName: "expansion-icon.png"
  }),
  dt()
], N);
var mr = Object.getOwnPropertyDescriptor, _r = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? mr(e, t) : e, l = r.length - 1, d; l >= 0; l--)
    (d = r[l]) && (s = d(s) || s);
  return s;
};
const st = {
  kind: "generic",
  slots: [
    { id: "default", label: "Expansion Content", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='width:100%;background:var(--uiv-surface-color, #ffffff);border:1px solid var(--uiv-border-color, #e2e8f0);border-radius:12px;box-shadow:var(--uiv-shadow-depth, 0 4px 6px -1px rgba(0, 0, 0, 0.1));'>",
    "<div style='display:flex;align-items:center;justify-content:space-between;padding:16px 24px;font-weight:600;color:var(--uiv-primary-color, #6366f1);border-bottom:1px solid var(--uiv-border-color, #e2e8f0);background:rgba(99, 102, 241, 0.03);'>",
    "<span>{{display:label}}</span><span style='transform:rotate(180deg);'>▼</span>",
    "</div>",
    "<div style='padding:20px 24px;color:var(--uiv-text-color, #1e293b);'>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Modern", "Clean"]
};
function br(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let ot = class extends N {
  static getStudioTemplate(r) {
    if (!r) return st;
    const e = br(r.studio.display.label || "Modern Expansion"), t = "var(--uiv-surface-color, #ffffff)", n = "var(--uiv-border-color, #e2e8f0)";
    return {
      ...st,
      templateHtml: [
        `<div style='width:100%;background:${t};border:1px solid ${n};border-radius:12px;box-shadow:var(--uiv-shadow-depth, 0 4px 6px -1px rgba(0, 0, 0, 0.1)); overflow:hidden; font-family:inherit;'>`,
        `<div style='display:flex;align-items:center;justify-content:space-between;padding:16px 24px;font-weight:600;color:var(--uiv-primary-color, #6366f1);border-bottom:1px solid ${n};background:rgba(99, 102, 241, 0.03);'>`,
        `<span>${e}</span><span style='transform:rotate(180deg); opacity:0.7;'>▼</span>`,
        "</div>",
        "<div style='padding:20px 24px;color:var(--uiv-text-color, #1e293b);font-size:14px;'>",
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  constructor() {
    super(), this.theme = "modern";
  }
};
ot = _r([
  lt({
    name: "zero-uiv-expansion-modern",
    version: "1.0.0",
    title: "Modern Expansion Panel (Legacy)",
    elementSelector: "zero-uiv-expansion-modern",
    group: "Uiverse Expansion",
    iconName: "expansion-icon.png"
  }),
  dt()
], ot);
export {
  ot as ZeroUivExpansionModern,
  st as modernTemplate
};
