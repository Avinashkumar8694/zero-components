var Dt = Object.defineProperty;
var Ht = (r, e, t) => e in r ? Dt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var We = (r, e, t) => Ht(r, typeof e != "symbol" ? e + "" : e, t);
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Fe;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ve == "object" ? Ve : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(p, x) {
      return function(g, _) {
        Object.defineProperty(p, g, { configurable: !0, writable: !0, value: _ }), x && x(g, _);
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
    function m() {
      return l() || d();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", d = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, x = !m && !p, g = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return _e(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return _e({ __proto__: null });
      } : function() {
        return _e({});
      },
      has: x ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: x ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, _ = Object.getPrototypeOf(Function), S = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), C = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ct(), k = typeof WeakMap == "function" ? WeakMap : kt(), D = s ? Symbol.for("@reflect-metadata:registry") : void 0, I = Ot(), X = Mt(I);
    function le(i, a, o, u) {
      if (b(o)) {
        if (!He(i))
          throw new TypeError();
        if (!je(a))
          throw new TypeError();
        return _t(i, a);
      } else {
        if (!He(i))
          throw new TypeError();
        if (!O(a))
          throw new TypeError();
        if (!O(u) && !b(u) && !W(u))
          throw new TypeError();
        return W(u) && (u = void 0), o = N(o), wt(i, a, o, u);
      }
    }
    e("decorate", le);
    function de(i, a) {
      function o(u, y) {
        if (!O(u))
          throw new TypeError();
        if (!b(y) && !Et(y))
          throw new TypeError();
        Ce(i, a, u, y);
      }
      return o;
    }
    e("metadata", de);
    function ue(i, a, o, u) {
      if (!O(o))
        throw new TypeError();
      return b(u) || (u = N(u)), Ce(i, a, o, u);
    }
    e("defineMetadata", ue);
    function ht(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return b(o) || (o = N(o)), Me(i, a, o);
    }
    e("hasMetadata", ht);
    function ft(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return b(o) || (o = N(o)), ye(i, a, o);
    }
    e("hasOwnMetadata", ft);
    function pt(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return b(o) || (o = N(o)), Pe(i, a, o);
    }
    e("getMetadata", pt);
    function vt(i, a, o) {
      if (!O(a))
        throw new TypeError();
      return b(o) || (o = N(o)), Te(i, a, o);
    }
    e("getOwnMetadata", vt);
    function yt(i, a) {
      if (!O(i))
        throw new TypeError();
      return b(a) || (a = N(a)), ke(i, a);
    }
    e("getMetadataKeys", yt);
    function mt(i, a) {
      if (!O(i))
        throw new TypeError();
      return b(a) || (a = N(a)), Re(i, a);
    }
    e("getOwnMetadataKeys", mt);
    function bt(i, a, o) {
      if (!O(a))
        throw new TypeError();
      if (b(o) || (o = N(o)), !O(a))
        throw new TypeError();
      b(o) || (o = N(o));
      var u = Y(
        a,
        o,
        /*Create*/
        !1
      );
      return b(u) ? !1 : u.OrdinaryDeleteMetadata(i, a, o);
    }
    e("deleteMetadata", bt);
    function _t(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var u = i[o], y = u(a);
        if (!b(y) && !W(y)) {
          if (!je(y))
            throw new TypeError();
          a = y;
        }
      }
      return a;
    }
    function wt(i, a, o, u) {
      for (var y = i.length - 1; y >= 0; --y) {
        var T = i[y], M = T(a, o, u);
        if (!b(M) && !W(M)) {
          if (!O(M))
            throw new TypeError();
          u = M;
        }
      }
      return u;
    }
    function Me(i, a, o) {
      var u = ye(i, a, o);
      if (u)
        return !0;
      var y = be(a);
      return W(y) ? !1 : Me(i, y, o);
    }
    function ye(i, a, o) {
      var u = Y(
        a,
        o,
        /*Create*/
        !1
      );
      return b(u) ? !1 : De(u.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Pe(i, a, o) {
      var u = ye(i, a, o);
      if (u)
        return Te(i, a, o);
      var y = be(a);
      if (!W(y))
        return Pe(i, y, o);
    }
    function Te(i, a, o) {
      var u = Y(
        a,
        o,
        /*Create*/
        !1
      );
      if (!b(u))
        return u.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Ce(i, a, o, u) {
      var y = Y(
        o,
        u,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, a, o, u);
    }
    function ke(i, a) {
      var o = Re(i, a), u = be(i);
      if (u === null)
        return o;
      var y = ke(u, a);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var T = new C(), M = [], w = 0, c = o; w < c.length; w++) {
        var h = c[w], f = T.has(h);
        f || (T.add(h), M.push(h));
      }
      for (var v = 0, $ = y; v < $.length; v++) {
        var h = $[v], f = T.has(h);
        f || (T.add(h), M.push(h));
      }
      return M;
    }
    function Re(i, a) {
      var o = Y(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Ne(i) {
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
    function b(i) {
      return i === void 0;
    }
    function W(i) {
      return i === null;
    }
    function $t(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function gt(i, a) {
      switch (Ne(i)) {
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
      var o = "string", u = Ue(i, l);
      if (u !== void 0) {
        var y = u.call(i, o);
        if (O(y))
          throw new TypeError();
        return y;
      }
      return xt(i);
    }
    function xt(i, a) {
      var o, u;
      {
        var y = i.toString;
        if (ce(y)) {
          var u = y.call(i);
          if (!O(u))
            return u;
        }
        var o = i.valueOf;
        if (ce(o)) {
          var u = o.call(i);
          if (!O(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function De(i) {
      return !!i;
    }
    function At(i) {
      return "" + i;
    }
    function N(i) {
      var a = gt(i);
      return $t(a) ? a : At(a);
    }
    function He(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ce(i) {
      return typeof i == "function";
    }
    function je(i) {
      return typeof i == "function";
    }
    function Et(i) {
      switch (Ne(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function me(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Ue(i, a) {
      var o = i[a];
      if (o != null) {
        if (!ce(o))
          throw new TypeError();
        return o;
      }
    }
    function Ie(i) {
      var a = Ue(i, d);
      if (!ce(a))
        throw new TypeError();
      var o = a.call(i);
      if (!O(o))
        throw new TypeError();
      return o;
    }
    function Le(i) {
      return i.value;
    }
    function ze(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Ge(i) {
      var a = i.return;
      a && a.call(i);
    }
    function be(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || a !== _)
        return a;
      var o = i.prototype, u = o && Object.getPrototypeOf(o);
      if (u == null || u === Object.prototype)
        return a;
      var y = u.constructor;
      return typeof y != "function" || y === i ? a : y;
    }
    function St() {
      var i;
      !b(D) && typeof t.Reflect < "u" && !(D in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Pt(t.Reflect));
      var a, o, u, y = new k(), T = {
        registerProvider: M,
        getProvider: c,
        setProvider: f
      };
      return T;
      function M(v) {
        if (!Object.isExtensible(T))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case b(a):
            a = v;
            break;
          case a === v:
            break;
          case b(o):
            o = v;
            break;
          case o === v:
            break;
          default:
            u === void 0 && (u = new C()), u.add(v);
            break;
        }
      }
      function w(v, $) {
        if (!b(a)) {
          if (a.isProviderFor(v, $))
            return a;
          if (!b(o)) {
            if (o.isProviderFor(v, $))
              return a;
            if (!b(u))
              for (var A = Ie(u); ; ) {
                var E = ze(A);
                if (!E)
                  return;
                var R = Le(E);
                if (R.isProviderFor(v, $))
                  return Ge(A), R;
              }
          }
        }
        if (!b(i) && i.isProviderFor(v, $))
          return i;
      }
      function c(v, $) {
        var A = y.get(v), E;
        return b(A) || (E = A.get($)), b(E) && (E = w(v, $), b(E) || (b(A) && (A = new S(), y.set(v, A)), A.set($, E))), E;
      }
      function h(v) {
        if (b(v))
          throw new TypeError();
        return a === v || o === v || !b(u) && u.has(v);
      }
      function f(v, $, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var E = c(v, $);
        if (E !== A) {
          if (!b(E))
            return !1;
          var R = y.get(v);
          b(R) && (R = new S(), y.set(v, R)), R.set($, A);
        }
        return !0;
      }
    }
    function Ot() {
      var i;
      return !b(D) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[D]), b(i) && (i = St()), !b(D) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, D, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Mt(i) {
      var a = new k(), o = {
        isProviderFor: function(h, f) {
          var v = a.get(h);
          return b(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: T,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: c
      };
      return I.registerProvider(o), o;
      function u(h, f, v) {
        var $ = a.get(h), A = !1;
        if (b($)) {
          if (!v)
            return;
          $ = new S(), a.set(h, $), A = !0;
        }
        var E = $.get(f);
        if (b(E)) {
          if (!v)
            return;
          if (E = new S(), $.set(f, E), !i.setProvider(h, f, o))
            throw $.delete(f), A && a.delete(h), new Error("Wrong provider for target.");
        }
        return E;
      }
      function y(h, f, v) {
        var $ = u(
          f,
          v,
          /*Create*/
          !1
        );
        return b($) ? !1 : De($.has(h));
      }
      function T(h, f, v) {
        var $ = u(
          f,
          v,
          /*Create*/
          !1
        );
        if (!b($))
          return $.get(h);
      }
      function M(h, f, v, $) {
        var A = u(
          v,
          $,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function w(h, f) {
        var v = [], $ = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (b($))
          return v;
        for (var A = $.keys(), E = Ie(A), R = 0; ; ) {
          var Be = ze(E);
          if (!Be)
            return v.length = R, v;
          var Rt = Le(Be);
          try {
            v[R] = Rt;
          } catch (Nt) {
            try {
              Ge(E);
            } finally {
              throw Nt;
            }
          }
          R++;
        }
      }
      function c(h, f, v) {
        var $ = u(
          f,
          v,
          /*Create*/
          !1
        );
        if (b($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var A = a.get(f);
          b(A) || (A.delete(v), A.size === 0 && a.delete(A));
        }
        return !0;
      }
    }
    function Pt(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, u = i.getOwnMetadata, y = i.getOwnMetadataKeys, T = i.deleteMetadata, M = new k(), w = {
        isProviderFor: function(c, h) {
          var f = M.get(c);
          return !b(f) && f.has(h) ? !0 : y(c, h).length ? (b(f) && (f = new C(), M.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: T
      };
      return w;
    }
    function Y(i, a, o) {
      var u = I.getProvider(i, a);
      if (!b(u))
        return u;
      if (o) {
        if (I.setProvider(i, a, X))
          return X;
        throw new Error("Illegal state.");
      }
    }
    function Tt() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function w(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[d] = function() {
            return this;
          }, w.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), c;
          }, w.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: c, done: !0 };
          }, w;
        }()
      ), u = (
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
              for (var f = this._keys.length, v = h + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, me(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new o(this._keys, this._values, y);
          }, w.prototype.values = function() {
            return new o(this._keys, this._values, T);
          }, w.prototype.entries = function() {
            return new o(this._keys, this._values, M);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[d] = function() {
            return this.entries();
          }, w.prototype._find = function(c, h) {
            if (!me(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (me(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return u;
      function y(w, c) {
        return w;
      }
      function T(w, c) {
        return c;
      }
      function M(w, c) {
        return [w, c];
      }
    }
    function Ct() {
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
          }, a.prototype[d] = function() {
            return this.keys();
          }, a;
        }()
      );
      return i;
    }
    function kt() {
      var i = 16, a = g.create(), o = u();
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
            return f !== void 0 ? g.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? g.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var v = y(
              h,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
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
          c = "@@WeakMap@@" + w();
        while (g.has(a, c));
        return a[c] = !0, c;
      }
      function y(c, h) {
        if (!n.call(c, o)) {
          if (!h)
            return;
          Object.defineProperty(c, o, { value: g.create() });
        }
        return c[o];
      }
      function T(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function M(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : T(h, c), h;
        }
        return T(new Array(c), c);
      }
      function w() {
        var c = M(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var v = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function _e(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Fe || (Fe = {}));
function jt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ut(r) {
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
function It(r) {
  return Ut(r);
}
function Lt(r) {
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
        var x;
        const l = document.querySelector('style.global-style[type="text/css"]'), d = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const g = new CSSStyleSheet(), _ = (x = l.sheet) == null ? void 0 : x.cssRules;
          _ && (Array.from(_).forEach((S) => g.insertRule(S.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, g]);
        } else if (l) {
          const g = l.cloneNode(!0);
          p.appendChild(g);
        }
        d.forEach((g) => {
          const _ = g.cloneNode(!0);
          p.appendChild(_);
        });
      }
    }
    return t;
  };
}
var Je;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(Je || (Je = {}));
var qe;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(qe || (qe = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, Ae = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), Ze = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Ae && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ze.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ze.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (r) => new ot(typeof r == "string" ? r : r + "", void 0, Ee), Gt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ot(t, r, Ee);
}, Bt = (r, e) => {
  if (Ae) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = he.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Xe = Ae ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return zt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Wt, defineProperty: Vt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: Jt, getOwnPropertySymbols: qt, getPrototypeOf: Zt } = Object, j = globalThis, Ye = j.trustedTypes, Xt = Ye ? Ye.emptyScript : "", we = j.reactiveElementPolyfillSupport, ee = (r, e) => r, fe = { toAttribute(r, e) {
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
} }, Se = (r, e) => !Wt(r, e), Qe = { attribute: !0, type: String, converter: fe, reflect: !1, useDefault: !1, hasChanged: Se };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let F = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Vt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Ft(this.prototype, e) ?? { get() {
      return this[t];
    }, set(d) {
      this[t] = d;
    } };
    return { get: s, set(d) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, d), this.requestUpdate(e, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Qe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Zt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, n = [...Jt(t), ...qt(t)];
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
      for (const s of n) t.unshift(Xe(s));
    } else e !== void 0 && t.push(Xe(e));
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
    return Bt(e, this.constructor.elementStyles), e;
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
      const d = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : fe).toAttribute(t, n.type);
      this._$Em = e, d == null ? this.removeAttribute(s) : this.setAttribute(s, d), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, d;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const m = n.getPropertyOptions(s), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : fe;
      this._$Em = s;
      const x = p.fromAttribute(t, m.type);
      this[s] = x ?? ((d = this._$Ej) == null ? void 0 : d.get(s)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var d;
    if (e !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? Se)(l, t) || n.useDefault && n.reflect && l === ((d = this._$Ej) == null ? void 0 : d.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
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
        const { wrapped: m } = d, p = this[l];
        m !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, d, p);
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
F.elementStyles = [], F.shadowRootOptions = { mode: "open" }, F[ee("elementProperties")] = /* @__PURE__ */ new Map(), F[ee("finalized")] = /* @__PURE__ */ new Map(), we == null || we({ ReactiveElement: F }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Ke = (r) => r, pe = te.trustedTypes, et = pe ? pe.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, lt = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, dt = "?" + H, Yt = `<${dt}>`, B = document, ne = () => B.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Oe = Array.isArray, Qt = (r) => Oe(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", $e = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, tt = /-->/g, rt = />/g, L = RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), nt = /'/g, it = /"/g, ut = /^(?:script|style|textarea|title)$/i, Kt = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), V = Kt(1), J = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), st = /* @__PURE__ */ new WeakMap(), z = B.createTreeWalker(B, 129);
function ct(r, e) {
  if (!Oe(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return et !== void 0 ? et.createHTML(e) : e;
}
const er = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", d = Q;
  for (let m = 0; m < t; m++) {
    const p = r[m];
    let x, g, _ = -1, S = 0;
    for (; S < p.length && (d.lastIndex = S, g = d.exec(p), g !== null); ) S = d.lastIndex, d === Q ? g[1] === "!--" ? d = tt : g[1] !== void 0 ? d = rt : g[2] !== void 0 ? (ut.test(g[2]) && (s = RegExp("</" + g[2], "g")), d = L) : g[3] !== void 0 && (d = L) : d === L ? g[0] === ">" ? (d = s ?? Q, _ = -1) : g[1] === void 0 ? _ = -2 : (_ = d.lastIndex - g[2].length, x = g[1], d = g[3] === void 0 ? L : g[3] === '"' ? it : nt) : d === it || d === nt ? d = L : d === tt || d === rt ? d = Q : (d = L, s = void 0);
    const C = d === L && r[m + 1].startsWith("/>") ? " " : "";
    l += d === Q ? p + Yt : _ >= 0 ? (n.push(x), p.slice(0, _) + lt + p.slice(_) + H + C) : p + H + (_ === -2 ? m : C);
  }
  return [ct(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class se {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, d = 0;
    const m = e.length - 1, p = this.parts, [x, g] = er(e, t);
    if (this.el = se.createElement(x, n), z.currentNode = this.el.content, t === 2 || t === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (s = z.nextNode()) !== null && p.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const _ of s.getAttributeNames()) if (_.endsWith(lt)) {
          const S = g[d++], C = s.getAttribute(_).split(H), k = /([.?@])?(.*)/.exec(S);
          p.push({ type: 1, index: l, name: k[2], strings: C, ctor: k[1] === "." ? rr : k[1] === "?" ? nr : k[1] === "@" ? ir : ve }), s.removeAttribute(_);
        } else _.startsWith(H) && (p.push({ type: 6, index: l }), s.removeAttribute(_));
        if (ut.test(s.tagName)) {
          const _ = s.textContent.split(H), S = _.length - 1;
          if (S > 0) {
            s.textContent = pe ? pe.emptyScript : "";
            for (let C = 0; C < S; C++) s.append(_[C], ne()), z.nextNode(), p.push({ type: 2, index: ++l });
            s.append(_[S], ne());
          }
        }
      } else if (s.nodeType === 8) if (s.data === dt) p.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = s.data.indexOf(H, _ + 1)) !== -1; ) p.push({ type: 7, index: l }), _ += H.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = B.createElement("template");
    return n.innerHTML = e, n;
  }
}
function q(r, e, t = r, n) {
  var d, m;
  if (e === J) return e;
  let s = n !== void 0 ? (d = t._$Co) == null ? void 0 : d[n] : t._$Cl;
  const l = ie(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = q(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? B).importNode(t, !0);
    z.currentNode = s;
    let l = z.nextNode(), d = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (d === p.index) {
        let x;
        p.type === 2 ? x = new ae(l, l.nextSibling, this, e) : p.type === 1 ? x = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (x = new sr(l, this, e)), this._$AV.push(x), p = n[++m];
      }
      d !== (p == null ? void 0 : p.index) && (l = z.nextNode(), d++);
    }
    return z.currentNode = B, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ae {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = q(this, e, t), ie(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== J && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(B.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = se.createElement(ct(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const d = new tr(s, this), m = d.u(this.options);
      d.p(t), this.T(m), this._$AH = d;
    }
  }
  _$AC(e) {
    let t = st.get(e.strings);
    return t === void 0 && st.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    Oe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new ae(this.O(ne()), this.O(ne()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Ke(e).nextSibling;
      Ke(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ve {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) e = q(this, e, t, 0), d = !ie(e) || e !== this._$AH && e !== J, d && (this._$AH = e);
    else {
      const m = e;
      let p, x;
      for (e = l[0], p = 0; p < l.length - 1; p++) x = q(this, m[n + p], t, p), x === J && (x = this._$AH[p]), d || (d = !ie(x) || x !== this._$AH[p]), x === P ? e = P : e !== P && (e += (x ?? "") + l[p + 1]), this._$AH[p] = x;
    }
    d && !s && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends ve {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class nr extends ve {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class ir extends ve {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = q(this, e, t, 0) ?? P) === J) return;
    const n = this._$AH, s = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== P && (n === P || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class sr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    q(this, e);
  }
}
const ge = te.litHtmlPolyfillSupport;
ge == null || ge(se, ae), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
const ar = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new ae(e.insertBefore(ne(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class re extends F {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ar(t, this.renderRoot, this.renderOptions);
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
    return J;
  }
}
var at;
re._$litElement$ = !0, re.finalized = !0, (at = G.litElementHydrateSupport) == null || at.call(G, { LitElement: re });
const xe = G.litElementPolyfillSupport;
xe == null || xe({ LitElement: re });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const or = { attribute: !0, type: String, converter: fe, reflect: !1, hasChanged: Se }, lr = (r = or, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: d } = t;
    return { set(m) {
      const p = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(d, p, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(d, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: d } = t;
    return function(m) {
      const p = this[d];
      e.call(this, m), this.requestUpdate(d, p, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function oe(r) {
  return (e, t) => typeof t == "object" ? lr(r, e, t) : ((n, s, l) => {
    const d = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), d ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var dr = Object.defineProperty, ur = Object.getOwnPropertyDescriptor, Z = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? ur(e, t) : e, l = r.length - 1, d; l >= 0; l--)
    (d = r[l]) && (s = (n ? d(e, t, s) : d(s)) || s);
  return n && s && dr(e, t, s), s;
};
const cr = JSON.stringify([
  {
    tabIndex: 0,
    title: "Root Canal Treatment",
    actionText: "Show Previous Treatment",
    badgeText: "Next Appointment",
    events: [
      {
        date: "26 Nov '19",
        time: "09.00 - 10.00",
        fields: [
          { label: "Treatment", value: "Open Access" },
          { label: "Dentist", value: "Drg. Adam H." },
          { label: "Nurse", value: "Jessicamila" }
        ]
      },
      {
        date: "12 Dec '19",
        time: "09.00 - 10.00",
        fields: [
          { label: "Treatment", value: "Root Canal prep" },
          { label: "Dentist", value: "Drg. Adam H." },
          { label: "Nurse", value: "Jessicamila" }
        ]
      }
    ]
  },
  {
    tabIndex: 1,
    title: "Teeth Cleaning & Polish",
    actionText: "Show Previous Treatment",
    badgeText: "Completed",
    events: [
      {
        date: "15 Oct '19",
        time: "14.00 - 15.00",
        fields: [
          { label: "Treatment", value: "Routine prophylaxis" },
          { label: "Dentist", value: "Drg. Adam H." },
          { label: "Nurse", value: "Jessicamila" }
        ]
      }
    ]
  },
  {
    tabIndex: 2,
    title: "Medical History Intake",
    actionText: "Show Previous Treatment",
    badgeText: "Intake",
    events: [
      {
        date: "24 Feb '17",
        time: "10.00 - 11:00",
        fields: [
          { label: "Treatment", value: "Allergy profile: Penicillin" },
          { label: "Dentist", value: "Drg. Adam H." },
          { label: "Nurse", value: "Jessicamila" }
        ]
      }
    ]
  }
]);
function K(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let U = class extends re {
  constructor() {
    super(...arguments), this.tab1Label = "Upcoming Appointments", this.tab2Label = "Past Appointments", this.tab3Label = "Medical Records", this.activeTab = 0, this.timelineJson = cr;
  }
  static getStudioTemplate(r) {
    var d, m, p, x, g, _, S, C, k, D, I, X, le, de, ue;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-timeline-card-1.0.0></zero-timeline-card-1.0.0>"
      };
    const e = K(((d = r == null ? void 0 : r.props) == null ? void 0 : d.tab1Label) ?? ((p = (m = r == null ? void 0 : r.studio) == null ? void 0 : m.props) == null ? void 0 : p.tab1Label) ?? "Upcoming Appointments"), t = K(((x = r == null ? void 0 : r.props) == null ? void 0 : x.tab2Label) ?? ((_ = (g = r == null ? void 0 : r.studio) == null ? void 0 : g.props) == null ? void 0 : _.tab2Label) ?? "Past Appointments"), n = K(((S = r == null ? void 0 : r.props) == null ? void 0 : S.tab3Label) ?? ((k = (C = r == null ? void 0 : r.studio) == null ? void 0 : C.props) == null ? void 0 : k.tab3Label) ?? "Medical Records"), s = K(((D = r == null ? void 0 : r.props) == null ? void 0 : D.activeTab) ?? ((X = (I = r == null ? void 0 : r.studio) == null ? void 0 : I.props) == null ? void 0 : X.activeTab) ?? "0"), l = K(((le = r == null ? void 0 : r.props) == null ? void 0 : le.timelineJson) ?? ((ue = (de = r == null ? void 0 : r.studio) == null ? void 0 : de.props) == null ? void 0 : ue.timelineJson) ?? "[]");
    return {
      kind: "generic",
      templateHtml: `
        <zero-timeline-card-1.0.0
          tab1-label="${e}"
          tab2-label="${t}"
          tab3-label="${n}"
          active-tab="${s}"
          timeline-json="${l}"
        ></zero-timeline-card-1.0.0>
      `
    };
  }
  render() {
    let r = [];
    try {
      r = JSON.parse(this.timelineJson);
    } catch {
      r = [];
    }
    const e = r.find((t) => t.tabIndex === this.activeTab) || r[0] || { events: [], title: "", actionText: "" };
    return V`
      <div class="card">
        <div class="tabs-header">
          <div class="tab ${this.activeTab === 0 ? "active" : ""}" @click=${() => this.activeTab = 0}>${this.tab1Label}</div>
          <div class="tab ${this.activeTab === 1 ? "active" : ""}" @click=${() => this.activeTab = 1}>${this.tab2Label}</div>
          <div class="tab ${this.activeTab === 2 ? "active" : ""}" @click=${() => this.activeTab = 2}>${this.tab3Label}</div>
        </div>
        <div class="content-box">
          <div class="content-header">
            <span class="content-title">${e.title}</span>
            ${e.actionText ? V`
              <button class="action-btn">
                ${e.actionText}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            ` : P}
          </div>
          
          <div class="timeline-container">
            ${e.events && e.events.length > 1 ? V`<div class="timeline-line"></div>` : ""}
            ${(e.events || []).map((t, n) => V`
              <div class="timeline-item">
                <div class="time-col">
                  <span class="date">${t.date}</span>
                  <span class="time">${t.time}</span>
                </div>
                <div class="node-col">
                  <div class="circle ${n === 0 ? "green" : ""}"></div>
                </div>
                <div class="detail-card">
                  <div class="card-grid">
                    ${(t.fields || []).map((s, l) => V`
                      ${l > 0 ? V`<div style="width: 1px; background: #e2e8f0; height: 24px; flex-shrink: 0;"></div>` : ""}
                      <div class="field" style="${l === 0 ? "flex: 1.2; min-width: 120px;" : "flex: 1; min-width: 80px;"}">
                        <span class="field-lbl">${s.label}</span>
                        <span class="field-val" style="${l === 0 ? "color: #1e293b;" : ""}">${s.value}</span>
                      </div>
                    `)}
                  </div>
                  <button class="note-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Note
                  </button>
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }
};
U.styles = Gt`
    :host {
      display: block;
      width: 100%;
    }
    .card {
      padding: 24px;
      border-radius: 16px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      font-family: inherit;
      display: flex;
      flex-direction: column;
      gap: 20px;
      box-sizing: border-box;
    }
    .tabs-header {
      display: flex;
      border-bottom: 1.5px solid #f1f5f9;
      gap: 24px;
    }
    .tab {
      padding: 12px 0;
      font-size: 0.85rem;
      font-weight: 600;
      color: #94a3b8;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
    }
    .tab:hover {
      color: #4b5563;
    }
    .tab.active {
      color: #0ea5e9;
      border-bottom-color: #0ea5e9;
    }
    .content-box {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .content-title {
      font-weight: 700;
      color: #1e293b;
      font-size: 0.95rem;
    }
    .action-btn {
      border: 1px solid #e2e8f0;
      background: #ffffff;
      color: #64748b;
      font-size: 0.78rem;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .action-btn:hover {
      background: #f8fafc;
      color: #334155;
    }
    .timeline-container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 8px 0;
    }
    .timeline-line {
      position: absolute;
      left: 135px;
      top: 24px;
      bottom: 24px;
      width: 2px;
      background: #e2e8f0;
      z-index: 1;
    }
    .timeline-item {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 2;
    }
    .time-col {
      width: 120px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
    }
    .date {
      font-size: 0.85rem;
      font-weight: 700;
      color: #1e293b;
    }
    .time {
      font-size: 0.72rem;
      color: #94a3b8;
      margin-top: 3px;
      font-weight: 500;
    }
    .node-col {
      width: 32px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ffffff;
      border: 2.5px solid #0ea5e9;
      box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);
      z-index: 3;
    }
    .circle.green {
      border-color: #22c55e;
      box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
    }
    .detail-card {
      flex: 1;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 14px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.01);
    }
    .card-grid {
      display: flex;
      flex: 1;
      gap: 16px;
      align-items: center;
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }
    .field-lbl {
      font-size: 0.7rem;
      color: #94a3b8;
      font-weight: 500;
    }
    .field-val {
      font-size: 0.82rem;
      font-weight: 600;
      color: #334155;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .note-btn {
      background: none;
      border: none;
      color: #0ea5e9;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0;
      transition: opacity 0.2s;
      flex-shrink: 0;
      margin-left: 12px;
    }
    .note-btn:hover {
      opacity: 0.85;
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .tabs-header {
        overflow-x: auto;
        scrollbar-width: none;
        gap: 16px;
      }
      .tabs-header::-webkit-scrollbar {
        display: none;
      }
      .tab {
        font-size: 0.8rem;
        padding: 8px 4px;
      }
      .timeline-line {
        left: 16px !important;
        top: 16px !important;
        bottom: 16px !important;
      }
      .timeline-item {
        align-items: flex-start !important;
        gap: 12px;
      }
      .time-col {
        width: auto !important;
        min-width: 0;
        margin-left: 36px;
        margin-bottom: -8px;
        flex-direction: row !important;
        gap: 8px;
        align-items: center;
      }
      .time {
        margin-top: 0 !important;
      }
      .node-col {
        position: absolute;
        left: 0;
        top: 18px;
        width: 32px !important;
      }
      .detail-card {
        margin-left: 36px;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 12px;
        width: calc(100% - 36px) !important;
        box-sizing: border-box;
      }
      .card-grid {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 12px !important;
      }
      .field {
        width: 100% !important;
      }
      .field-val {
        white-space: normal !important;
      }
    }
  `;
Z([
  oe({ type: String, attribute: "tab1-label" })
], U.prototype, "tab1Label", 2);
Z([
  oe({ type: String, attribute: "tab2-label" })
], U.prototype, "tab2Label", 2);
Z([
  oe({ type: String, attribute: "tab3-label" })
], U.prototype, "tab3Label", 2);
Z([
  oe({ type: Number, attribute: "active-tab" })
], U.prototype, "activeTab", 2);
Z([
  oe({ type: String, attribute: "timeline-json" })
], U.prototype, "timelineJson", 2);
U = Z([
  It({
    name: "zero-timeline-card",
    version: "1.0.0",
    title: "Timeline Card",
    elementSelector: "zero-timeline-card",
    group: "Dashboard",
    iconName: "card-icon.png"
  }),
  Lt()
], U);
export {
  U as ZeroTimelineCard
};
