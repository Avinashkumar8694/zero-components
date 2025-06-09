var Rt = Object.defineProperty;
var Ut = (n, e, t) => e in n ? Rt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Le = (n, e, t) => Ut(n, typeof e != "symbol" ? e + "" : e, t);
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
var We;
(function(n) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : m(), i = s(n);
    typeof t.Reflect < "u" && (i = s(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = n);
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
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", d = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, $ = !m && !v, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return fe(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return fe({ __proto__: null });
      } : function() {
        return fe({});
      },
      has: $ ? function(r, o) {
        return i.call(r, o);
      } : function(r, o) {
        return o in r;
      },
      get: $ ? function(r, o) {
        return i.call(r, o) ? r[o] : void 0;
      } : function(r, o) {
        return r[o];
      }
    }, b = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : xt(), C = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Pt(), U = typeof WeakMap == "function" ? WeakMap : Tt(), L = s ? Symbol.for("@reflect-metadata:registry") : void 0, ne = Ot(), Ee = St(ne);
    function at(r, o, a, u) {
      if (_(a)) {
        if (!Re(r))
          throw new TypeError();
        if (!Ue(o))
          throw new TypeError();
        return _t(r, o);
      } else {
        if (!Re(r))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(u) && !_(u) && !G(u))
          throw new TypeError();
        return G(u) && (u = void 0), a = R(a), wt(r, o, a, u);
      }
    }
    e("decorate", at);
    function lt(r, o) {
      function a(u, y) {
        if (!M(u))
          throw new TypeError();
        if (!_(y) && !At(y))
          throw new TypeError();
        xe(r, o, u, y);
      }
      return a;
    }
    e("metadata", lt);
    function dt(r, o, a, u) {
      if (!M(a))
        throw new TypeError();
      return _(u) || (u = R(u)), xe(r, o, a, u);
    }
    e("defineMetadata", dt);
    function ut(r, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = R(a)), Oe(r, o, a);
    }
    e("hasMetadata", ut);
    function ct(r, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = R(a)), ue(r, o, a);
    }
    e("hasOwnMetadata", ct);
    function ht(r, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = R(a)), Se(r, o, a);
    }
    e("getMetadata", ht);
    function ft(r, o, a) {
      if (!M(o))
        throw new TypeError();
      return _(a) || (a = R(a)), Me(r, o, a);
    }
    e("getOwnMetadata", ft);
    function pt(r, o) {
      if (!M(r))
        throw new TypeError();
      return _(o) || (o = R(o)), Pe(r, o);
    }
    e("getMetadataKeys", pt);
    function vt(r, o) {
      if (!M(r))
        throw new TypeError();
      return _(o) || (o = R(o)), Te(r, o);
    }
    e("getOwnMetadataKeys", vt);
    function yt(r, o, a) {
      if (!M(o))
        throw new TypeError();
      if (_(a) || (a = R(a)), !M(o))
        throw new TypeError();
      _(a) || (a = R(a));
      var u = F(
        o,
        a,
        /*Create*/
        !1
      );
      return _(u) ? !1 : u.OrdinaryDeleteMetadata(r, o, a);
    }
    e("deleteMetadata", yt);
    function _t(r, o) {
      for (var a = r.length - 1; a >= 0; --a) {
        var u = r[a], y = u(o);
        if (!_(y) && !G(y)) {
          if (!Ue(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function wt(r, o, a, u) {
      for (var y = r.length - 1; y >= 0; --y) {
        var O = r[y], x = O(o, a, u);
        if (!_(x) && !G(x)) {
          if (!M(x))
            throw new TypeError();
          u = x;
        }
      }
      return u;
    }
    function Oe(r, o, a) {
      var u = ue(r, o, a);
      if (u)
        return !0;
      var y = he(o);
      return G(y) ? !1 : Oe(r, y, a);
    }
    function ue(r, o, a) {
      var u = F(
        o,
        a,
        /*Create*/
        !1
      );
      return _(u) ? !1 : ke(u.OrdinaryHasOwnMetadata(r, o, a));
    }
    function Se(r, o, a) {
      var u = ue(r, o, a);
      if (u)
        return Me(r, o, a);
      var y = he(o);
      if (!G(y))
        return Se(r, y, a);
    }
    function Me(r, o, a) {
      var u = F(
        o,
        a,
        /*Create*/
        !1
      );
      if (!_(u))
        return u.OrdinaryGetOwnMetadata(r, o, a);
    }
    function xe(r, o, a, u) {
      var y = F(
        a,
        u,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(r, o, a, u);
    }
    function Pe(r, o) {
      var a = Te(r, o), u = he(r);
      if (u === null)
        return a;
      var y = Pe(u, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var O = new C(), x = [], w = 0, c = a; w < c.length; w++) {
        var h = c[w], f = O.has(h);
        f || (O.add(h), x.push(h));
      }
      for (var p = 0, g = y; p < g.length; p++) {
        var h = g[p], f = O.has(h);
        f || (O.add(h), x.push(h));
      }
      return x;
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
    function M(r) {
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
      var a = "string", u = Ne(r, d);
      if (u !== void 0) {
        var y = u.call(r, a);
        if (M(y))
          throw new TypeError();
        return y;
      }
      return bt(r);
    }
    function bt(r, o) {
      var a, u, y;
      {
        var O = r.toString;
        if (ie(O)) {
          var u = O.call(r);
          if (!M(u))
            return u;
        }
        var a = r.valueOf;
        if (ie(a)) {
          var u = a.call(r);
          if (!M(u))
            return u;
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
    function ce(r, o) {
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
      if (!M(a))
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
      var a = r.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return o;
      var y = u.constructor;
      return typeof y != "function" || y === r ? o : y;
    }
    function Et() {
      var r;
      !_(L) && typeof t.Reflect < "u" && !(L in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (r = Mt(t.Reflect));
      var o, a, u, y = new U(), O = {
        registerProvider: x,
        getProvider: c,
        setProvider: f
      };
      return O;
      function x(p) {
        if (!Object.isExtensible(O))
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
            u === void 0 && (u = new C()), u.add(p);
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
            if (!_(u))
              for (var E = je(u); ; ) {
                var S = He(E);
                if (!S)
                  return;
                var k = Ie(S);
                if (k.isProviderFor(p, g))
                  return De(E), k;
              }
          }
        }
        if (!_(r) && r.isProviderFor(p, g))
          return r;
      }
      function c(p, g) {
        var E = y.get(p), S;
        return _(E) || (S = E.get(g)), _(S) && (S = w(p, g), _(S) || (_(E) && (E = new T(), y.set(p, E)), E.set(g, S))), S;
      }
      function h(p) {
        if (_(p))
          throw new TypeError();
        return o === p || a === p || !_(u) && u.has(p);
      }
      function f(p, g, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = c(p, g);
        if (S !== E) {
          if (!_(S))
            return !1;
          var k = y.get(p);
          _(k) && (k = new T(), y.set(p, k)), k.set(g, E);
        }
        return !0;
      }
    }
    function Ot() {
      var r;
      return !_(L) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[L]), _(r) && (r = Et()), !_(L) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, L, {
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
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: w,
        OrdinaryDeleteMetadata: c
      };
      return ne.registerProvider(a), a;
      function u(h, f, p) {
        var g = o.get(h), E = !1;
        if (_(g)) {
          if (!p)
            return;
          g = new T(), o.set(h, g), E = !0;
        }
        var S = g.get(f);
        if (_(S)) {
          if (!p)
            return;
          if (S = new T(), g.set(f, S), !r.setProvider(h, f, a))
            throw g.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function y(h, f, p) {
        var g = u(
          f,
          p,
          /*Create*/
          !1
        );
        return _(g) ? !1 : ke(g.has(h));
      }
      function O(h, f, p) {
        var g = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (!_(g))
          return g.get(h);
      }
      function x(h, f, p, g) {
        var E = u(
          p,
          g,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function w(h, f) {
        var p = [], g = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (_(g))
          return p;
        for (var E = g.keys(), S = je(E), k = 0; ; ) {
          var ze = He(S);
          if (!ze)
            return p.length = k, p;
          var Ct = Ie(ze);
          try {
            p[k] = Ct;
          } catch (kt) {
            try {
              De(S);
            } finally {
              throw kt;
            }
          }
          k++;
        }
      }
      function c(h, f, p) {
        var g = u(
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
      var o = r.defineMetadata, a = r.hasOwnMetadata, u = r.getOwnMetadata, y = r.getOwnMetadataKeys, O = r.deleteMetadata, x = new U(), w = {
        isProviderFor: function(c, h) {
          var f = x.get(c);
          return !_(f) && f.has(h) ? !0 : y(c, h).length ? (_(f) && (f = new C(), x.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: O
      };
      return w;
    }
    function F(r, o, a) {
      var u = ne.getProvider(r, o);
      if (!_(u))
        return u;
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
          function w(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return w.prototype["@@iterator"] = function() {
            return this;
          }, w.prototype[l] = function() {
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
      ), u = (
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
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ce(c, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
            }
            return !1;
          }, w.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
          }, w.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, w.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, w.prototype.entries = function() {
            return new a(this._keys, this._values, x);
          }, w.prototype["@@iterator"] = function() {
            return this.entries();
          }, w.prototype[l] = function() {
            return this.entries();
          }, w.prototype._find = function(c, h) {
            if (!ce(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ce(this._keys[f], c)) {
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
      function O(w, c) {
        return c;
      }
      function x(w, c) {
        return [w, c];
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
      var r = 16, o = A.create(), a = u();
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
            return f !== void 0 ? A.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = y(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? A.get(f, this._key) : void 0;
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
          c = "@@WeakMap@@" + w();
        while (A.has(o, c));
        return o[c] = !0, c;
      }
      function y(c, h) {
        if (!i.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: A.create() });
        }
        return c[a];
      }
      function O(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function x(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : O(h, c), h;
        }
        return O(new Array(c), c);
      }
      function w() {
        var c = x(r);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < r; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function fe(r) {
      return r.__ = void 0, delete r.__, r;
    }
  });
})(We || (We = {}));
function Nt(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function jt(n) {
  return function(e) {
    if (Nt(n)) {
      const t = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName
      };
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${n.elementSelector}-${n.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function It(n) {
  return jt(n);
}
function Ht(n) {
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
function Dt(n) {
  var t;
  if (((t = n == null ? void 0 : n.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function zt(n) {
  return function(e, t) {
    try {
      Dt(n);
      const i = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (n.fieldMappings = n.fieldMappings ?? t), i.push(n), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function we(n) {
  return zt(n);
}
var se;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown";
})(se || (se = {}));
var J;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(J || (J = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, ge = oe.ShadowRoot && (oe.ShadyCSS === void 0 || oe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, me = Symbol(), Be = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== me) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ge && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Be.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Be.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Lt = (n) => new rt(typeof n == "string" ? n : n + "", void 0, me), Gt = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((i, s, d) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[d + 1], n[0]);
  return new rt(t, n, me);
}, Wt = (n, e) => {
  if (ge) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), s = oe.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = t.cssText, n.appendChild(i);
  }
}, Ve = ge ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Lt(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Bt, defineProperty: Vt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: qt, getOwnPropertySymbols: Zt, getPrototypeOf: Yt } = Object, j = globalThis, Fe = j.trustedTypes, Xt = Fe ? Fe.emptyScript : "", pe = j.reactiveElementPolyfillSupport, Z = (n, e) => n, ae = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? Xt : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, e) {
  let t = n;
  switch (e) {
    case Boolean:
      t = n !== null;
      break;
    case Number:
      t = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(n);
      } catch {
        t = null;
      }
  }
  return t;
} }, be = (n, e) => !Bt(n, e), qe = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: be };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class W extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, t);
      s !== void 0 && Vt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: s, set: d } = Ft(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(l) {
      const m = s == null ? void 0 : s.call(this);
      d.call(this, l), this.requestUpdate(e, m, i);
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
      const t = this.properties, i = [...qt(t), ...Zt(t)];
      for (const s of i) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, s] of t) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const s = this._$Eu(t, i);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const s of i) t.unshift(Ve(s));
    } else e !== void 0 && t.push(Ve(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Wt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$EC(e, t) {
    var d;
    const i = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, i);
    if (s !== void 0 && i.reflect === !0) {
      const l = (((d = i.converter) == null ? void 0 : d.toAttribute) !== void 0 ? i.converter : ae).toAttribute(t, i.type);
      this._$Em = e, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var d;
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const l = i.getPropertyOptions(s), m = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((d = l.converter) == null ? void 0 : d.fromAttribute) !== void 0 ? l.converter : ae;
      this._$Em = s, this[s] = m.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(e)), !(i.hasChanged ?? be)(this[e], t)) return;
      this.P(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, i) {
    this._$AL.has(e) || this._$AL.set(e, t), i.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
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
    var i;
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
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((s) => {
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
    (t = this._$EO) == null || t.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
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
W.elementStyles = [], W.shadowRootOptions = { mode: "open" }, W[Z("elementProperties")] = /* @__PURE__ */ new Map(), W[Z("finalized")] = /* @__PURE__ */ new Map(), pe == null || pe({ ReactiveElement: W }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, le = Y.trustedTypes, Ze = le ? le.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, nt = "$lit$", N = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + N, Jt = `<${it}>`, D = document, Q = () => D.createComment(""), K = (n) => n === null || typeof n != "object" && typeof n != "function", $e = Array.isArray, Qt = (n) => $e(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", ve = `[ 	
\f\r]`, q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ye = /-->/g, Xe = />/g, I = RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Je = /'/g, Qe = /"/g, ot = /^(?:script|style|textarea|title)$/i, Kt = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), Ke = Kt(1), B = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), H = D.createTreeWalker(D, 129);
function st(n, e) {
  if (!$e(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const er = (n, e) => {
  const t = n.length - 1, i = [];
  let s, d = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = q;
  for (let m = 0; m < t; m++) {
    const v = n[m];
    let $, A, b = -1, T = 0;
    for (; T < v.length && (l.lastIndex = T, A = l.exec(v), A !== null); ) T = l.lastIndex, l === q ? A[1] === "!--" ? l = Ye : A[1] !== void 0 ? l = Xe : A[2] !== void 0 ? (ot.test(A[2]) && (s = RegExp("</" + A[2], "g")), l = I) : A[3] !== void 0 && (l = I) : l === I ? A[0] === ">" ? (l = s ?? q, b = -1) : A[1] === void 0 ? b = -2 : (b = l.lastIndex - A[2].length, $ = A[1], l = A[3] === void 0 ? I : A[3] === '"' ? Qe : Je) : l === Qe || l === Je ? l = I : l === Ye || l === Xe ? l = q : (l = I, s = void 0);
    const C = l === I && n[m + 1].startsWith("/>") ? " " : "";
    d += l === q ? v + Jt : b >= 0 ? (i.push($), v.slice(0, b) + nt + v.slice(b) + N + C) : v + N + (b === -2 ? m : C);
  }
  return [st(n, d + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class ee {
  constructor({ strings: e, _$litType$: t }, i) {
    let s;
    this.parts = [];
    let d = 0, l = 0;
    const m = e.length - 1, v = this.parts, [$, A] = er(e, t);
    if (this.el = ee.createElement($, i), H.currentNode = this.el.content, t === 2 || t === 3) {
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
    const i = D.createElement("template");
    return i.innerHTML = e, i;
  }
}
function V(n, e, t = n, i) {
  var l, m;
  if (e === B) return e;
  let s = i !== void 0 ? (l = t.o) == null ? void 0 : l[i] : t.l;
  const d = K(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== d && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), d === void 0 ? s = void 0 : (s = new d(n), s._$AT(n, t, i)), i !== void 0 ? (t.o ?? (t.o = []))[i] = s : t.l = s), s !== void 0 && (e = V(n, s._$AS(n, e.values), s, i)), e;
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
    const { el: { content: t }, parts: i } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? D).importNode(t, !0);
    H.currentNode = s;
    let d = H.nextNode(), l = 0, m = 0, v = i[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let $;
        v.type === 2 ? $ = new te(d, d.nextSibling, this, e) : v.type === 1 ? $ = new v.ctor(d, v.name, v.strings, this, e) : v.type === 6 && ($ = new or(d, this, e)), this._$AV.push($), v = i[++m];
      }
      l !== (v == null ? void 0 : v.index) && (d = H.nextNode(), l++);
    }
    return H.currentNode = D, s;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class te {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, i, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = s, this.v = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = V(this, e, t), K(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== B && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
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
    const { values: t, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = ee.createElement(st(i.h, i.h[0]), this.options)), i);
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
    let i, s = 0;
    for (const d of e) s === t.length ? t.push(i = new te(this.O(Q()), this.O(Q()), this, this.options)) : i = t[s], i._$AI(d), s++;
    s < t.length && (this._$AR(i && i._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e && e !== this._$AB; ) {
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
  constructor(e, t, i, s, d) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = d, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = P;
  }
  _$AI(e, t = this, i, s) {
    const d = this.strings;
    let l = !1;
    if (d === void 0) e = V(this, e, t, 0), l = !K(e) || e !== this._$AH && e !== B, l && (this._$AH = e);
    else {
      const m = e;
      let v, $;
      for (e = d[0], v = 0; v < d.length - 1; v++) $ = V(this, m[i + v], t, v), $ === B && ($ = this._$AH[v]), l || (l = !K($) || $ !== this._$AH[v]), $ === P ? e = P : e !== P && (e += ($ ?? "") + d[v + 1]), this._$AH[v] = $;
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
  constructor(e, t, i, s, d) {
    super(e, t, i, s, d), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = V(this, e, t, 0) ?? P) === B) return;
    const i = this._$AH, s = e === P && i !== P || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, d = e !== P && (i === P || s);
    s && this.element.removeEventListener(this.name, this, i), d && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class or {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    V(this, e);
  }
}
const ye = Y.litHtmlPolyfillSupport;
ye == null || ye(ee, te), (Y.litHtmlVersions ?? (Y.litHtmlVersions = [])).push("3.2.0");
const sr = (n, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const d = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = s = new te(e.insertBefore(Q(), d), d, void 0, t ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class X extends W {
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
    return B;
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
const ar = { attribute: !0, type: String, converter: ae, reflect: !1, hasChanged: be }, lr = (n = ar, e, t) => {
  const { kind: i, metadata: s } = t;
  let d = globalThis.litPropertyMetadata.get(s);
  if (d === void 0 && globalThis.litPropertyMetadata.set(s, d = /* @__PURE__ */ new Map()), d.set(t.name, n), i === "accessor") {
    const { name: l } = t;
    return { set(m) {
      const v = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(l, v, n);
    }, init(m) {
      return m !== void 0 && this.P(l, void 0, n), m;
    } };
  }
  if (i === "setter") {
    const { name: l } = t;
    return function(m) {
      const v = this[l];
      e.call(this, m), this.requestUpdate(l, v, n);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function Ae(n) {
  return (e, t) => typeof t == "object" ? lr(n, e, t) : ((i, s, d) => {
    const l = s.hasOwnProperty(d);
    return s.constructor.createProperty(d, l ? { ...i, wrapped: !0 } : i), l ? Object.getOwnPropertyDescriptor(s, d) : void 0;
  })(n, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function dr(n) {
  return Ae({ ...n, state: !0, attribute: !1 });
}
var ur = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, re = (n, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? cr(e, t) : e, d = n.length - 1, l; d >= 0; d--)
    (l = n[d]) && (s = (i ? l(e, t, s) : l(s)) || s);
  return i && s && ur(e, t, s), s;
};
let z = class extends X {
  constructor() {
    super(...arguments), this.options = [], this.selectedOption = "", this._isOpen = !1;
  }
  set OptionConfig(n) {
    this.options = n, this.requestUpdate();
  }
  toggleDropdown() {
    this._isOpen = !this._isOpen, this.requestUpdate();
  }
  selectOption(n) {
    this.selectedOption = n.value, this._isOpen = !1, this.dispatchEvent(new CustomEvent("change", { detail: n }));
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
                        ${this.options.map((n) => Ke`
                            <div class="option ${this.selectedOption === n.value ? "selected" : ""}" @click=${() => this.selectOption(n)}>
                                ${n.label}
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
            --dropdown-height: var(--input-height, 36px); /* Use standardized input height */
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
            padding: 0 var(--spacing-sm, 8px); /* Adjusted padding to fit the height */
            height: var(--dropdown-height);
            display: flex;
            align-items: center;
            font-size: var(--dropdown-font-size); /* Adjusted font size */
            cursor: pointer;
            transition: var(--transition-fast, box-shadow 0.2s ease, border-color 0.2s ease);
        }
          .dropdown-container:hover {
            box-shadow: var(--shadow-sm, 0 2px 4px rgba(0, 0, 0, 0.1));
            border-color: var(--dropdown-hover-border-color);
        }
        
        .dropdown-header {
            display: flex;
            align-items: center;
            flex: 1;
        }
        
        .dropdown-icon {
            font-size: var(--icon-size-sm, 12px); /* Use standardized icon size */
            color: var(--dropdown-icon-color);
            transition: var(--transition-fast, transform 0.2s ease);
            margin-left: var(--spacing-sm, 8px); /* Space between text and icon */
        }
          .dropdown-options {
            display: none;
            position: absolute;
            top: calc(100% + var(--spacing-sm, 10px));
            left: 0;
            width: 100%;
            border: 1px solid var(--dropdown-border-color);
            border-radius: var(--dropdown-border-radius);
            background-color: var(--dropdown-bg-color);
            padding: var(--spacing-sm, 8px) var(--spacing-xs, 5px);
            z-index: 10;
            box-shadow: var(--shadow-lg, 0 4px 12px rgba(0, 0, 0, 0.1));
            transition: var(--transition-fast, opacity 0.2s ease, transform 0.2s ease);
            opacity: 0;
            transform: translateY(-var(--spacing-sm, 10px));
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
            padding: var(--spacing-xs, 4px) var(--spacing-md, 12px); /* Adjusted padding for options */
            cursor: pointer;
            font-size: var(--dropdown-font-size); /* Match font size */
            transition: var(--transition-fast, background-color 0.2s ease, box-shadow 0.2s ease);
            border-radius: var(--border-radius-sm, 4px);
        }
        
        .option:hover {
            border: 1px solid var(--dropdown-border-color);
            box-shadow: var(--shadow-sm, 0 2px 4px rgba(0, 0, 0, 0.15));
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
