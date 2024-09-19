var Rt = Object.defineProperty;
var Ut = (i, e, t) => e in i ? Rt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Le = (i, e, t) => Ut(i, typeof e != "symbol" ? e + "" : e, t);
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
var Be;
(function(i) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(i);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = i);
    function s(v, $) {
      return function(A, b) {
        Object.defineProperty(v, A, { configurable: !0, writable: !0, value: b }), $ && $(A, b);
      };
    }
    function d() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function l() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function m() {
      return d() || l();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", d = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, $ = !m && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return fe(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return fe({ __proto__: null });
      } : function() {
        return fe({});
      },
      has: $ ? function(r, o) {
        return n.call(r, o);
      } : function(r, o) {
        return o in r;
      },
      get: $ ? function(r, o) {
        return n.call(r, o) ? r[o] : void 0;
      } : function(r, o) {
        return r[o];
      }
    }, b = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : xt(), C = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pt(), U = typeof WeakMap == "function" ? WeakMap : Tt(), L = s ? Symbol.for("@reflect-metadata:registry") : void 0, ne = Ot(), Ee = St(ne);
    function at(r, o, a, c) {
      if (_(a)) {
        if (!Re(r))
          throw new TypeError();
        if (!Ue(o))
          throw new TypeError();
        return _t(r, o);
      } else {
        if (!Re(r))
          throw new TypeError();
        if (!S(o))
          throw new TypeError();
        if (!S(c) && !_(c) && !G(c))
          throw new TypeError();
        return G(c) && (c = void 0), a = R(a), wt(r, o, a, c);
      }
    }
    e("decorate", at);
    function lt(r, o) {
      function a(c, y) {
        if (!S(c))
          throw new TypeError();
        if (!_(y) && !At(y))
          throw new TypeError();
        xe(r, o, c, y);
      }
      return a;
    }
    e("metadata", lt);
    function dt(r, o, a, c) {
      if (!S(a))
        throw new TypeError();
      return _(c) || (c = R(c)), xe(r, o, a, c);
    }
    e("defineMetadata", dt);
    function ct(r, o, a) {
      if (!S(o))
        throw new TypeError();
      return _(a) || (a = R(a)), Oe(r, o, a);
    }
    e("hasMetadata", ct);
    function ut(r, o, a) {
      if (!S(o))
        throw new TypeError();
      return _(a) || (a = R(a)), ce(r, o, a);
    }
    e("hasOwnMetadata", ut);
    function ht(r, o, a) {
      if (!S(o))
        throw new TypeError();
      return _(a) || (a = R(a)), Se(r, o, a);
    }
    e("getMetadata", ht);
    function ft(r, o, a) {
      if (!S(o))
        throw new TypeError();
      return _(a) || (a = R(a)), Me(r, o, a);
    }
    e("getOwnMetadata", ft);
    function pt(r, o) {
      if (!S(r))
        throw new TypeError();
      return _(o) || (o = R(o)), Pe(r, o);
    }
    e("getMetadataKeys", pt);
    function yt(r, o) {
      if (!S(r))
        throw new TypeError();
      return _(o) || (o = R(o)), Te(r, o);
    }
    e("getOwnMetadataKeys", yt);
    function vt(r, o, a) {
      if (!S(o))
        throw new TypeError();
      if (_(a) || (a = R(a)), !S(o))
        throw new TypeError();
      _(a) || (a = R(a));
      var c = F(
        o,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(r, o, a);
    }
    e("deleteMetadata", vt);
    function _t(r, o) {
      for (var a = r.length - 1; a >= 0; --a) {
        var c = r[a], y = c(o);
        if (!_(y) && !G(y)) {
          if (!Ue(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function wt(r, o, a, c) {
      for (var y = r.length - 1; y >= 0; --y) {
        var x = r[y], M = x(o, a, c);
        if (!_(M) && !G(M)) {
          if (!S(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function Oe(r, o, a) {
      var c = ce(r, o, a);
      if (c)
        return !0;
      var y = he(o);
      return G(y) ? !1 : Oe(r, y, a);
    }
    function ce(r, o, a) {
      var c = F(
        o,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : ke(c.OrdinaryHasOwnMetadata(r, o, a));
    }
    function Se(r, o, a) {
      var c = ce(r, o, a);
      if (c)
        return Me(r, o, a);
      var y = he(o);
      if (!G(y))
        return Se(r, y, a);
    }
    function Me(r, o, a) {
      var c = F(
        o,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(r, o, a);
    }
    function xe(r, o, a, c) {
      var y = F(
        a,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, o, a, c);
    }
    function Pe(r, o) {
      var a = Te(r, o), c = he(r);
      if (c === null)
        return a;
      var y = Pe(c, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var x = new C(), M = [], w = 0, u = a; w < u.length; w++) {
        var h = u[w], f = x.has(h);
        f || (x.add(h), M.push(h));
      }
      for (var p = 0, g = y; p < g.length; p++) {
        var h = g[p], f = x.has(h);
        f || (x.add(h), M.push(h));
      }
      return M;
    }
    function Te(r, o) {
      var a = F(
        r,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(r, o) : [];
    }
    function Ce(r) {
      if (r === null)
        return 1;
      switch (typeof r) {
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
          return r === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function _(r) {
      return r === void 0;
    }
    function G(r) {
      return r === null;
    }
    function gt(r) {
      return typeof r == "symbol";
    }
    function S(r) {
      return typeof r == "object" ? r !== null : typeof r == "function";
    }
    function mt(r, o) {
      switch (Ce(r)) {
        case 0:
          return r;
        case 1:
          return r;
        case 2:
          return r;
        case 3:
          return r;
        case 4:
          return r;
        case 5:
          return r;
      }
      var a = "string", c = Ne(r, d);
      if (c !== void 0) {
        var y = c.call(r, a);
        if (S(y))
          throw new TypeError();
        return y;
      }
      return bt(r);
    }
    function bt(r, o) {
      var a, c;
      {
        var y = r.toString;
        if (ie(y)) {
          var c = y.call(r);
          if (!S(c))
            return c;
        }
        var a = r.valueOf;
        if (ie(a)) {
          var c = a.call(r);
          if (!S(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function ke(r) {
      return !!r;
    }
    function $t(r) {
      return "" + r;
    }
    function R(r) {
      var o = mt(r);
      return gt(o) ? o : $t(o);
    }
    function Re(r) {
      return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
    }
    function ie(r) {
      return typeof r == "function";
    }
    function Ue(r) {
      return typeof r == "function";
    }
    function At(r) {
      switch (Ce(r)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ue(r, o) {
      return r === o || r !== r && o !== o;
    }
    function Ne(r, o) {
      var a = r[o];
      if (a != null) {
        if (!ie(a))
          throw new TypeError();
        return a;
      }
    }
    function je(r) {
      var o = Ne(r, l);
      if (!ie(o))
        throw new TypeError();
      var a = o.call(r);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function Ie(r) {
      return r.value;
    }
    function He(r) {
      var o = r.next();
      return o.done ? !1 : o;
    }
    function De(r) {
      var o = r.return;
      o && o.call(r);
    }
    function he(r) {
      var o = Object.getPrototypeOf(r);
      if (typeof r != "function" || r === b || o !== b)
        return o;
      var a = r.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var y = c.constructor;
      return typeof y != "function" || y === r ? o : y;
    }
    function Et() {
      var r;
      !_(L) && typeof t.Reflect < "u" && !(L in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Mt(t.Reflect));
      var o, a, c, y = new U(), x = {
        registerProvider: M,
        getProvider: u,
        setProvider: f
      };
      return x;
      function M(p) {
        if (!Object.isExtensible(x))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case r === p:
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
            c === void 0 && (c = new C()), c.add(p);
            break;
        }
      }
      function w(p, g) {
        if (!_(o)) {
          if (o.isProviderFor(p, g))
            return o;
          if (!_(a)) {
            if (a.isProviderFor(p, g))
              return o;
            if (!_(c))
              for (var E = je(c); ; ) {
                var O = He(E);
                if (!O)
                  return;
                var k = Ie(O);
                if (k.isProviderFor(p, g))
                  return De(E), k;
              }
          }
        }
        if (!_(r) && r.isProviderFor(p, g))
          return r;
      }
      function u(p, g) {
        var E = y.get(p), O;
        return _(E) || (O = E.get(g)), _(O) && (O = w(p, g), _(O) || (_(E) && (E = new T(), y.set(p, E)), E.set(g, O))), O;
      }
      function h(p) {
        if (_(p))
          throw new TypeError();
        return o === p || a === p || !_(c) && c.has(p);
      }
      function f(p, g, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var O = u(p, g);
        if (O !== E) {
          if (!_(O))
            return !1;
          var k = y.get(p);
          _(k) && (k = new T(), y.set(p, k)), k.set(g, E);
        }
        return !0;
      }
    }
    function Ot() {
      var r;
      return !_(L) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[L]), _(r) && (r = Et()), !_(L) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, L, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: r
      }), r;
    }
    function St(r) {
      var o = new U(), a = {
        isProviderFor: function(h, f) {
          var p = o.get(h);
          return _(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: x,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: u
      };
      return ne.registerProvider(a), a;
      function c(h, f, p) {
        var g = o.get(h), E = !1;
        if (_(g)) {
          if (!p)
            return;
          g = new T(), o.set(h, g), E = !0;
        }
        var O = g.get(f);
        if (_(O)) {
          if (!p)
            return;
          if (O = new T(), g.set(f, O), !r.setProvider(h, f, a))
            throw g.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return O;
      }
      function y(h, f, p) {
        var g = c(
          f,
          p,
          /*Create*/
          !1
        );
        return _(g) ? !1 : ke(g.has(h));
      }
      function x(h, f, p) {
        var g = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!_(g))
          return g.get(h);
      }
      function M(h, f, p, g) {
        var E = c(
          p,
          g,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function w(h, f) {
        var p = [], g = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (_(g))
          return p;
        for (var E = g.keys(), O = je(E), k = 0; ; ) {
          var ze = He(O);
          if (!ze)
            return p.length = k, p;
          var Ct = Ie(ze);
          try {
            p[k] = Ct;
          } catch (kt) {
            try {
              De(O);
            } finally {
              throw kt;
            }
          }
          k++;
        }
      }
      function u(h, f, p) {
        var g = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (_(g) || !g.delete(h))
          return !1;
        if (g.size === 0) {
          var E = o.get(f);
          _(E) || (E.delete(p), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Mt(r) {
      var o = r.defineMetadata, a = r.hasOwnMetadata, c = r.getOwnMetadata, y = r.getOwnMetadataKeys, x = r.deleteMetadata, M = new U(), w = {
        isProviderFor: function(u, h) {
          var f = M.get(u);
          return !_(f) && f.has(h) ? !0 : y(u, h).length ? (_(f) && (f = new C(), M.set(u, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: x
      };
      return w;
    }
    function F(r, o, a) {
      var c = ne.getProvider(r, o);
      if (!_(c))
        return c;
      if (a) {
        if (ne.setProvider(r, o, Ee))
          return Ee;
        throw new Error("Illegal state.");
      }
    }
    function xt() {
      var r = {}, o = [], a = (
        /** @class */
        function() {
          function w(u, h, f) {
            this._index = 0, this._keys = u, this._values = h, this._selector = f;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[l] = function() {
            return this;
          }, w.prototype.next = function() {
            var u = this._index;
            if (u >= 0 && u < this._keys.length) {
              var h = this._selector(this._keys[u], this._values[u]);
              return u + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, w.prototype.throw = function(u) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), u;
          }, w.prototype.return = function(u) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: u, done: !0 };
          }, w;
        }()
      ), c = (
        /** @class */
        function() {
          function w() {
            this._keys = [], this._values = [], this._cacheKey = r, this._cacheIndex = -2;
          }
          return Object.defineProperty(w.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), w.prototype.has = function(u) {
            return this._find(
              u,
              /*insert*/
              !1
            ) >= 0;
          }, w.prototype.get = function(u) {
            var h = this._find(
              u,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, w.prototype.set = function(u, h) {
            var f = this._find(
              u,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, w.prototype.delete = function(u) {
            var h = this._find(
              u,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ue(u, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, w.prototype.values = function() {
            return new a(this._keys, this._values, x);
          }, w.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[l] = function() {
            return this.entries();
          }, w.prototype._find = function(u, h) {
            if (!ue(this._cacheKey, u)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ue(this._keys[f], u)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
          }, w;
        }()
      );
      return c;
      function y(w, u) {
        return w;
      }
      function x(w, u) {
        return u;
      }
      function M(w, u) {
        return [w, u];
      }
    }
    function Pt() {
      var r = (
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
          }, o.prototype[l] = function() {
            return this.keys();
          }, o;
        }()
      );
      return r;
    }
    function Tt() {
      var r = 16, o = A.create(), a = c();
      return (
        /** @class */
        function() {
          function u() {
            this._key = c();
          }
          return u.prototype.has = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? A.has(f, this._key) : !1;
          }, u.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? A.get(f, this._key) : void 0;
          }, u.prototype.set = function(h, f) {
            var p = y(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, u.prototype.delete = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, u.prototype.clear = function() {
            this._key = c();
          }, u;
        }()
      );
      function c() {
        var u;
        do
          u = "@@WeakMap@@" + w();
        while (A.has(o, u));
        return o[u] = !0, u;
      }
      function y(u, h) {
        if (!n.call(u, a)) {
          if (!h)
            return;
          Object.defineProperty(u, a, { value: A.create() });
        }
        return u[a];
      }
      function x(u, h) {
        for (var f = 0; f < h; ++f)
          u[f] = Math.random() * 255 | 0;
        return u;
      }
      function M(u) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(u);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : x(h, u), h;
        }
        return x(new Array(u), u);
      }
      function w() {
        var u = M(r);
        u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
        for (var h = "", f = 0; f < r; ++f) {
          var p = u[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function fe(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(Be || (Be = {}));
function Nt(i) {
  return typeof i.name == "string" && typeof i.version == "string" && typeof i.title == "string" && typeof i.elementSelector == "string" && typeof i.group == "string" && typeof i.iconName == "string";
}
function jt(i) {
  return function(e) {
    if (Nt(i)) {
      const t = {
        version: i.version,
        name: i.name,
        title: i.title,
        selector: i.elementSelector,
        category: i.group,
        icon: i.iconName
      };
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${i.elementSelector}-${i.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: this
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function It(i) {
  return jt(i);
}
function Ht(i) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Le(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(d) {
        try {
          super.update(d);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var v;
        const d = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (d && m) {
          const $ = new CSSStyleSheet(), A = (v = d.sheet) == null ? void 0 : v.cssRules;
          A && (Array.from(A).forEach((b) => $.insertRule(b.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
        } else if (d) {
          const $ = d.cloneNode(!0);
          this.shadowRoot.appendChild($);
        }
        l.forEach(($) => {
          const A = $.cloneNode(!0);
          this.shadowRoot.appendChild(A);
        });
      }
    }
    return t;
  };
}
function Dt(i) {
  var t;
  if (((t = i == null ? void 0 : i.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function zt(i) {
  return function(e, t) {
    try {
      Dt(i);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (i.fieldMappings = i.fieldMappings ?? t), n.push(i), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function we(i) {
  return zt(i);
}
var se;
(function(i) {
  i.TEXT_INPUT = "text-input", i.PASSWORD_INPUT = "password-input", i.DROPDOWN = "dropdown", i.CHECKBOX = "checkbox", i.RADIO_BUTTON = "radio-button", i.RANGE_SLIDER = "range-slider", i.FILE_INPUT = "file-input", i.DATE_PICKER = "date-picker", i.COLOR_PICKER = "color-picker", i.NUMBER_INPUT = "number-input", i.TEXTAREA = "textarea", i.MULTI_SELECT = "multi-select";
})(se || (se = {}));
var J;
(function(i) {
  i.PROPERTY = "property", i.EVENT = "event", i.ACTION = "action";
})(J || (J = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, ge = oe.ShadowRoot && (oe.ShadyCSS === void 0 || oe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, me = Symbol(), We = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== me) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ge && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = We.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && We.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Lt = (i) => new rt(typeof i == "string" ? i : i + "", void 0, me), Gt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((n, s, d) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + i[d + 1], i[0]);
  return new rt(t, i, me);
}, Bt = (i, e) => {
  if (ge) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = oe.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, i.appendChild(n);
  }
}, Ve = ge ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Lt(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Wt, defineProperty: Vt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: qt, getOwnPropertySymbols: Zt, getPrototypeOf: Yt } = Object, j = globalThis, Fe = j.trustedTypes, Xt = Fe ? Fe.emptyScript : "", pe = j.reactiveElementPolyfillSupport, Z = (i, e) => i, ae = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? Xt : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, e) {
  let t = i;
  switch (e) {
    case Boolean:
      t = i !== null;
      break;
    case Number:
      t = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(i);
      } catch {
        t = null;
      }
  }
  return t;
} }, be = (i, e) => !Wt(i, e), qe = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: be };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class B extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Vt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: d } = Ft(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(l) {
      const m = s == null ? void 0 : s.call(this);
      d.call(this, l), this.requestUpdate(e, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? qe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Z("elementProperties"))) return;
    const e = Yt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Z("properties"))) {
      const t = this.properties, n = [...qt(t), ...Zt(t)];
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
      for (const s of n) t.unshift(Ve(s));
    } else e !== void 0 && t.push(Ve(e));
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
  _$EC(e, t) {
    var d;
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const l = (((d = n.converter) == null ? void 0 : d.toAttribute) !== void 0 ? n.converter : ae).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var d;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const l = n.getPropertyOptions(s), m = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((d = l.converter) == null ? void 0 : d.fromAttribute) !== void 0 ? l.converter : ae;
      this._$Em = s, this[s] = m.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? be)(this[e], t)) return;
      this.P(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, n) {
    this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
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
        for (const [d, l] of this._$Ep) this[d] = l;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [d, l] of s) l.wrapped !== !0 || this._$AL.has(d) || this[d] === void 0 || this.P(d, this[d], l);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((s) => {
        var d;
        return (d = s.hostUpdate) == null ? void 0 : d.call(s);
      }), this.update(t)) : this._$EU();
    } catch (s) {
      throw e = !1, this._$EU(), s;
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
  _$EU() {
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
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[Z("elementProperties")] = /* @__PURE__ */ new Map(), B[Z("finalized")] = /* @__PURE__ */ new Map(), pe == null || pe({ ReactiveElement: B }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, le = Y.trustedTypes, Ze = le ? le.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, nt = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + N, Jt = `<${it}>`, D = document, Q = () => D.createComment(""), K = (i) => i === null || typeof i != "object" && typeof i != "function", $e = Array.isArray, Qt = (i) => $e(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", ye = `[ 	
\f\r]`, q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ye = /-->/g, Xe = />/g, I = RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Je = /'/g, Qe = /"/g, ot = /^(?:script|style|textarea|title)$/i, Kt = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), Ke = Kt(1), W = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), H = D.createTreeWalker(D, 129);
function st(i, e) {
  if (!$e(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const er = (i, e) => {
  const t = i.length - 1, n = [];
  let s, d = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = q;
  for (let m = 0; m < t; m++) {
    const v = i[m];
    let $, A, b = -1, T = 0;
    for (; T < v.length && (l.lastIndex = T, A = l.exec(v), A !== null); ) T = l.lastIndex, l === q ? A[1] === "!--" ? l = Ye : A[1] !== void 0 ? l = Xe : A[2] !== void 0 ? (ot.test(A[2]) && (s = RegExp("</" + A[2], "g")), l = I) : A[3] !== void 0 && (l = I) : l === I ? A[0] === ">" ? (l = s ?? q, b = -1) : A[1] === void 0 ? b = -2 : (b = l.lastIndex - A[2].length, $ = A[1], l = A[3] === void 0 ? I : A[3] === '"' ? Qe : Je) : l === Qe || l === Je ? l = I : l === Ye || l === Xe ? l = q : (l = I, s = void 0);
    const C = l === I && i[m + 1].startsWith("/>") ? " " : "";
    d += l === q ? v + Jt : b >= 0 ? (n.push($), v.slice(0, b) + nt + v.slice(b) + N + C) : v + N + (b === -2 ? m : C);
  }
  return [st(i, d + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ee {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let d = 0, l = 0;
    const m = e.length - 1, v = this.parts, [$, A] = er(e, t);
    if (this.el = ee.createElement($, n), H.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (s = H.nextNode()) !== null && v.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const b of s.getAttributeNames()) if (b.endsWith(nt)) {
          const T = A[l++], C = s.getAttribute(b).split(N), U = /([.?@])?(.*)/.exec(T);
          v.push({ type: 1, index: d, name: U[2], strings: C, ctor: U[1] === "." ? rr : U[1] === "?" ? nr : U[1] === "@" ? ir : de }), s.removeAttribute(b);
        } else b.startsWith(N) && (v.push({ type: 6, index: d }), s.removeAttribute(b));
        if (ot.test(s.tagName)) {
          const b = s.textContent.split(N), T = b.length - 1;
          if (T > 0) {
            s.textContent = le ? le.emptyScript : "";
            for (let C = 0; C < T; C++) s.append(b[C], Q()), H.nextNode(), v.push({ type: 2, index: ++d });
            s.append(b[T], Q());
          }
        }
      } else if (s.nodeType === 8) if (s.data === it) v.push({ type: 2, index: d });
      else {
        let b = -1;
        for (; (b = s.data.indexOf(N, b + 1)) !== -1; ) v.push({ type: 7, index: d }), b += N.length - 1;
      }
      d++;
    }
  }
  static createElement(e, t) {
    const n = D.createElement("template");
    return n.innerHTML = e, n;
  }
}
function V(i, e, t = i, n) {
  var l, m;
  if (e === W) return e;
  let s = n !== void 0 ? (l = t.o) == null ? void 0 : l[n] : t.l;
  const d = K(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== d && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), d === void 0 ? s = void 0 : (s = new d(i), s._$AT(i, t, n)), n !== void 0 ? (t.o ?? (t.o = []))[n] = s : t.l = s), s !== void 0 && (e = V(i, s._$AS(i, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? D).importNode(t, !0);
    H.currentNode = s;
    let d = H.nextNode(), l = 0, m = 0, v = n[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let $;
        v.type === 2 ? $ = new te(d, d.nextSibling, this, e) : v.type === 1 ? $ = new v.ctor(d, v.name, v.strings, this, e) : v.type === 6 && ($ = new or(d, this, e)), this._$AV.push($), v = n[++m];
      }
      l !== (v == null ? void 0 : v.index) && (d = H.nextNode(), l++);
    }
    return H.currentNode = D, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class te {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this.v = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = V(this, e, t), K(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== W && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && K(this._$AH) ? this._$AA.nextSibling.data = e : this.T(D.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var d;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ee.createElement(st(n.h, n.h[0]), this.options)), n);
    if (((d = this._$AH) == null ? void 0 : d._$AD) === s) this._$AH.p(t);
    else {
      const l = new tr(s, this), m = l.u(this.options);
      l.p(t), this.T(m), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new ee(e)), t;
  }
  k(e) {
    $e(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const d of e) s === t.length ? t.push(n = new te(this.O(Q()), this.O(Q()), this, this.options)) : n = t[s], n._$AI(d), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const s = e.nextSibling;
      e.remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class de {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, d) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = d, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(e, t = this, n, s) {
    const d = this.strings;
    let l = !1;
    if (d === void 0) e = V(this, e, t, 0), l = !K(e) || e !== this._$AH && e !== W, l && (this._$AH = e);
    else {
      const m = e;
      let v, $;
      for (e = d[0], v = 0; v < d.length - 1; v++) $ = V(this, m[n + v], t, v), $ === W && ($ = this._$AH[v]), l || (l = !K($) || $ !== this._$AH[v]), $ === P ? e = P : e !== P && (e += ($ ?? "") + d[v + 1]), this._$AH[v] = $;
    }
    l && !s && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends de {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class nr extends de {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class ir extends de {
  constructor(e, t, n, s, d) {
    super(e, t, n, s, d), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = V(this, e, t, 0) ?? P) === W) return;
    const n = this._$AH, s = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, d = e !== P && (n === P || s);
    s && this.element.removeEventListener(this.name, this, n), d && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class or {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    V(this, e);
  }
}
const ve = Y.litHtmlPolyfillSupport;
ve == null || ve(ee, te), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.2.0");
const sr = (i, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const d = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new te(e.insertBefore(Q(), d), d, void 0, t ?? {});
  }
  return s._$AI(i), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class X extends B {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = sr(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.o) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.o) == null || e.setConnected(!1);
  }
  render() {
    return W;
  }
}
var tt;
X._$litElement$ = !0, X.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: X });
const _e = globalThis.litElementPolyfillSupport;
_e == null || _e({ LitElement: X });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ar = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: be }, lr = (i = ar, e, t) => {
  const { kind: n, metadata: s } = t;
  let d = globalThis.litPropertyMetadata.get(s);
  if (d === void 0 && globalThis.litPropertyMetadata.set(s, d = /* @__PURE__ */ new Map()), d.set(t.name, i), n === "accessor") {
    const { name: l } = t;
    return { set(m) {
      const v = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(l, v, i);
    }, init(m) {
      return m !== void 0 && this.P(l, void 0, i), m;
    } };
  }
  if (n === "setter") {
    const { name: l } = t;
    return function(m) {
      const v = this[l];
      e.call(this, m), this.requestUpdate(l, v, i);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Ae(i) {
  return (e, t) => typeof t == "object" ? lr(i, e, t) : ((n, s, d) => {
    const l = s.hasOwnProperty(d);
    return s.constructor.createProperty(d, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(s, d) : void 0;
  })(i, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function dr(i) {
  return Ae({ ...i, state: !0, attribute: !1 });
}
var cr = Object.defineProperty, ur = Object.getOwnPropertyDescriptor, re = (i, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? ur(e, t) : e, d = i.length - 1, l; d >= 0; d--)
    (l = i[d]) && (s = (n ? l(e, t, s) : l(s)) || s);
  return n && s && cr(e, t, s), s;
};
let z = class extends X {
  constructor() {
    super(...arguments), this.options = [], this.selectedOption = "", this._isOpen = !1;
  }
  set OptionConfig(i) {
    this.options = i, this.requestUpdate();
  }
  toggleDropdown() {
    this._isOpen = !this._isOpen, this.requestUpdate();
  }
  selectOption(i) {
    this.selectedOption = i.value, this._isOpen = !1, this.dispatchEvent(new CustomEvent("change", { detail: i }));
  }
  render() {
    return Ke`
            <div class="dropdown-message-box">
                <label class="label">Appearance</label>
                <div class="dropdown-container" @click=${this.toggleDropdown}>
                    <div class="dropdown-header">
                        <span id="selected-option">${this.selectedOption || "Select an option"}</span>
                        <i class="fas fa-caret-down dropdown-icon"></i>
                    </div>
                </div>
                <div class="dropdown-options ${this._isOpen ? "open" : ""}">
                    <span class="message-arrow"></span>
                    <span class="message-arrow-outline"></span>
                    <div class="dropdown-options-list">
                        ${this.options.map((i) => Ke`
                            <div class="option ${this.selectedOption === i.value ? "selected" : ""}" @click=${() => this.selectOption(i)}>
                                ${i.label}
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        `;
  }
};
z.styles = Gt`
        :host {
            display: block;
            font-family: Arial, sans-serif;
            --dropdown-label-color: #333;
            --dropdown-border-color: #ddd;
            --dropdown-hover-border-color: #ccc;
            --dropdown-bg-color: #fff;
            --dropdown-icon-color: #666;
            --option-hover-bg-color: #f0f0f0;
            --dropdown-border-radius: 6px;
            --dropdown-height: 30px; /* Adjust height of dropdown box */
            --dropdown-font-size: 12px; /* Match font size of options */
        }
        
        .dropdown-message-box {
            position: relative;
            width: 180px; /* Adjusted width to match options */
            margin: 20px;
        }
        
        .label {
            font-size: 14px;
            color: var(--dropdown-label-color);
            margin-bottom: 8px;
            display: block;
        }
        
        .dropdown-container {
            position: relative;
            border: 1px solid var(--dropdown-border-color);
            border-radius: var(--dropdown-border-radius);
            background-color: var(--dropdown-bg-color);
            padding: 0 8px; /* Adjusted padding to fit the height */
            height: var(--dropdown-height);
            display: flex;
            align-items: center;
            font-size: var(--dropdown-font-size); /* Adjusted font size */
            cursor: pointer;
            transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        
        .dropdown-container:hover {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-color: var(--dropdown-hover-border-color);
        }
        
        .dropdown-header {
            display: flex;
            align-items: center;
            flex: 1;
        }
        
        .dropdown-icon {
            font-size: 12px; /* Reduced icon size */
            color: var(--dropdown-icon-color);
            transition: transform 0.2s ease;
            margin-left: 8px; /* Space between text and icon */
        }
        
        .dropdown-options {
            display: none;
            position: absolute;
            top: calc(100% + 10px);
            left: 0;
            width: 100%;
            border: 1px solid var(--dropdown-border-color);
            border-radius: var(--dropdown-border-radius);
            background-color: var(--dropdown-bg-color);
            padding: 8px 5px;
            z-index: 10;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: opacity 0.2s ease, transform 0.2s ease;
            opacity: 0;
            transform: translateY(-10px);
        }
        
        .dropdown-options.open {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }
        .dropdown-options-list{
            max-height: 10rem; 
            overflow-y: auto;
        }
        
        .option {
            padding: 4px 12px; /* Adjusted padding for options */
            cursor: pointer;
            font-size: var(--dropdown-font-size); /* Match font size */
            transition: background-color 0.2s ease, box-shadow 0.2s ease;
            border-radius: 4px;
        }
        
        .option:hover {
            border: 1px solid var(--dropdown-border-color);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }
        
        .option.selected {
            border: 1px solid var(--dropdown-border-color); /* Smooth thin border for selected option */
            /* background-color: var(--dropdown-bg-color); Ensure background color remains consistent */
            font-weight: bold; /* Optional: highlight selected option with bold text */
        }
        
        .message-arrow {
            position: absolute;
            left: 50%;
            transform: translate(-50%,-150%);
            width: 0;
            height: 0;
            border-width: 8px;
            border-style: solid;
            border-color: transparent transparent var(--dropdown-border-color) transparent;
        }
        
        .message-arrow-outline {
            position: absolute;
            top: -9px;
            left: 50%;
            transform: translate(-50%, -30%);
            width: 0;
            height: 0;
            border-width: 8px;
            border-style: solid;
            border-color: transparent transparent var(--dropdown-bg-color) transparent;
            z-index: 11;
        }
    `;
re([
  Ae({ type: Array }),
  we({
    attributeType: J.PROPERTY,
    uiComponentType: se.TEXTAREA,
    displayLabel: "Options",
    fieldMappings: "OptionConfig",
    optionItems: {
      type: "Object"
    }
  })
], z.prototype, "OptionConfig", 1);
re([
  Ae({ type: String }),
  we({
    attributeType: J.PROPERTY,
    uiComponentType: se.TEXT_INPUT,
    displayLabel: "Selected Option",
    placeholderText: "selectedOption",
    fieldMappings: "selectedOption"
  })
], z.prototype, "selectedOption", 2);
re([
  dr()
], z.prototype, "_isOpen", 2);
re([
  we({
    attributeType: J.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], z.prototype, "selectOption", 1);
z = re([
  It({
    name: "popup-dropdown",
    version: "1.0.0",
    title: "Popup dropdown",
    elementSelector: "zero-popup-dropdown",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  Ht()
], z);
export {
  z as PopupDropdown
};
