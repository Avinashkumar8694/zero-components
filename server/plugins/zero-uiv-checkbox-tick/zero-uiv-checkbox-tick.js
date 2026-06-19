var Ht = Object.defineProperty;
var Dt = (n, e, t) => e in n ? Ht(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Be = (n, e, t) => Dt(n, typeof e != "symbol" ? e + "" : e, t);
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
var Ve;
(function(n) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : _(), r = s(n);
    typeof t.Reflect < "u" && (r = s(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = n);
    function s(y, E) {
      return function(w, b) {
        Object.defineProperty(y, w, { configurable: !0, writable: !0, value: b }), E && E(w, b);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function c() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function _() {
      return l() || c();
    }
  })(function(e, t) {
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", c = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !_ && !y, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
      },
      has: E ? function(i, o) {
        return r.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: E ? function(i, o) {
        return r.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, b = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), P = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Rt(), N = typeof WeakMap == "function" ? WeakMap : Nt(), B = s ? Symbol.for("@reflect-metadata:registry") : void 0, se = xt(), Se = Ct(se);
    function ht(i, o, a, u) {
      if (g(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!Ue(o))
          throw new TypeError();
        return bt(i, o);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(u) && !g(u) && !G(u))
          throw new TypeError();
        return G(u) && (u = void 0), a = R(a), wt(i, o, a, u);
      }
    }
    e("decorate", ht);
    function dt(i, o) {
      function a(u, v) {
        if (!M(u))
          throw new TypeError();
        if (!g(v) && !Ot(v))
          throw new TypeError();
        xe(i, o, u, v);
      }
      return a;
    }
    e("metadata", dt);
    function ft(i, o, a, u) {
      if (!M(a))
        throw new TypeError();
      return g(u) || (u = R(u)), xe(i, o, a, u);
    }
    e("defineMetadata", ft);
    function pt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return g(a) || (a = R(a)), Me(i, o, a);
    }
    e("hasMetadata", pt);
    function yt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return g(a) || (a = R(a)), de(i, o, a);
    }
    e("hasOwnMetadata", yt);
    function vt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return g(a) || (a = R(a)), Oe(i, o, a);
    }
    e("getMetadata", vt);
    function _t(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return g(a) || (a = R(a)), ke(i, o, a);
    }
    e("getOwnMetadata", _t);
    function gt(i, o) {
      if (!M(i))
        throw new TypeError();
      return g(o) || (o = R(o)), Ce(i, o);
    }
    e("getMetadataKeys", gt);
    function mt(i, o) {
      if (!M(i))
        throw new TypeError();
      return g(o) || (o = R(o)), Pe(i, o);
    }
    e("getOwnMetadataKeys", mt);
    function $t(i, o, a) {
      if (!M(o))
        throw new TypeError();
      if (g(a) || (a = R(a)), !M(o))
        throw new TypeError();
      g(a) || (a = R(a));
      var u = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : u.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", $t);
    function bt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var u = i[a], v = u(o);
        if (!g(v) && !G(v)) {
          if (!Ue(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function wt(i, o, a, u) {
      for (var v = i.length - 1; v >= 0; --v) {
        var k = i[v], O = k(o, a, u);
        if (!g(O) && !G(O)) {
          if (!M(O))
            throw new TypeError();
          u = O;
        }
      }
      return u;
    }
    function Me(i, o, a) {
      var u = de(i, o, a);
      if (u)
        return !0;
      var v = pe(o);
      return G(v) ? !1 : Me(i, v, a);
    }
    function de(i, o, a) {
      var u = Z(
        o,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : Re(u.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Oe(i, o, a) {
      var u = de(i, o, a);
      if (u)
        return ke(i, o, a);
      var v = pe(o);
      if (!G(v))
        return Oe(i, v, a);
    }
    function ke(i, o, a) {
      var u = Z(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(u))
        return u.OrdinaryGetOwnMetadata(i, o, a);
    }
    function xe(i, o, a, u) {
      var v = Z(
        a,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, u);
    }
    function Ce(i, o) {
      var a = Pe(i, o), u = pe(i);
      if (u === null)
        return a;
      var v = Ce(u, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var k = new P(), O = [], m = 0, h = a; m < h.length; m++) {
        var d = h[m], f = k.has(d);
        f || (k.add(d), O.push(d));
      }
      for (var p = 0, $ = v; p < $.length; p++) {
        var d = $[p], f = k.has(d);
        f || (k.add(d), O.push(d));
      }
      return O;
    }
    function Pe(i, o) {
      var a = Z(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function Te(i) {
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
    function G(i) {
      return i === null;
    }
    function Et(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function At(i, o) {
      switch (Te(i)) {
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
      var a = "string", u = je(i, l);
      if (u !== void 0) {
        var v = u.call(i, a);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return St(i);
    }
    function St(i, o) {
      var a, u;
      {
        var v = i.toString;
        if (oe(v)) {
          var u = v.call(i);
          if (!M(u))
            return u;
        }
        var a = i.valueOf;
        if (oe(a)) {
          var u = a.call(i);
          if (!M(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Re(i) {
      return !!i;
    }
    function Mt(i) {
      return "" + i;
    }
    function R(i) {
      var o = At(i);
      return Et(o) ? o : Mt(o);
    }
    function Ne(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function oe(i) {
      return typeof i == "function";
    }
    function Ue(i) {
      return typeof i == "function";
    }
    function Ot(i) {
      switch (Te(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function fe(i, o) {
      return i === o || i !== i && o !== o;
    }
    function je(i, o) {
      var a = i[o];
      if (a != null) {
        if (!oe(a))
          throw new TypeError();
        return a;
      }
    }
    function He(i) {
      var o = je(i, c);
      if (!oe(o))
        throw new TypeError();
      var a = o.call(i);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function De(i) {
      return i.value;
    }
    function Ie(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Le(i) {
      var o = i.return;
      o && o.call(i);
    }
    function pe(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || o !== b)
        return o;
      var a = i.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return o;
      var v = u.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function kt() {
      var i;
      !g(B) && typeof t.Reflect < "u" && !(B in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Pt(t.Reflect));
      var o, a, u, v = new N(), k = {
        registerProvider: O,
        getProvider: h,
        setProvider: f
      };
      return k;
      function O(p) {
        if (!Object.isExtensible(k))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case g(o):
            o = p;
            break;
          case o === p:
            break;
          case g(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            u === void 0 && (u = new P()), u.add(p);
            break;
        }
      }
      function m(p, $) {
        if (!g(o)) {
          if (o.isProviderFor(p, $))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(p, $))
              return o;
            if (!g(u))
              for (var A = He(u); ; ) {
                var S = Ie(A);
                if (!S)
                  return;
                var T = De(S);
                if (T.isProviderFor(p, $))
                  return Le(A), T;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, $))
          return i;
      }
      function h(p, $) {
        var A = v.get(p), S;
        return g(A) || (S = A.get($)), g(S) && (S = m(p, $), g(S) || (g(A) && (A = new C(), v.set(p, A)), A.set($, S))), S;
      }
      function d(p) {
        if (g(p))
          throw new TypeError();
        return o === p || a === p || !g(u) && u.has(p);
      }
      function f(p, $, A) {
        if (!d(A))
          throw new Error("Metadata provider not registered.");
        var S = h(p, $);
        if (S !== A) {
          if (!g(S))
            return !1;
          var T = v.get(p);
          g(T) && (T = new C(), v.set(p, T)), T.set($, A);
        }
        return !0;
      }
    }
    function xt() {
      var i;
      return !g(B) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[B]), g(i) && (i = kt()), !g(B) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, B, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ct(i) {
      var o = new N(), a = {
        isProviderFor: function(d, f) {
          var p = o.get(d);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: k,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: h
      };
      return se.registerProvider(a), a;
      function u(d, f, p) {
        var $ = o.get(d), A = !1;
        if (g($)) {
          if (!p)
            return;
          $ = new C(), o.set(d, $), A = !0;
        }
        var S = $.get(f);
        if (g(S)) {
          if (!p)
            return;
          if (S = new C(), $.set(f, S), !i.setProvider(d, f, a))
            throw $.delete(f), A && o.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(d, f, p) {
        var $ = u(
          f,
          p,
          /*Create*/
          !1
        );
        return g($) ? !1 : Re($.has(d));
      }
      function k(d, f, p) {
        var $ = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g($))
          return $.get(d);
      }
      function O(d, f, p, $) {
        var A = u(
          p,
          $,
          /*Create*/
          !0
        );
        A.set(d, f);
      }
      function m(d, f) {
        var p = [], $ = u(
          d,
          f,
          /*Create*/
          !1
        );
        if (g($))
          return p;
        for (var A = $.keys(), S = He(A), T = 0; ; ) {
          var ze = Ie(S);
          if (!ze)
            return p.length = T, p;
          var Ut = De(ze);
          try {
            p[T] = Ut;
          } catch (jt) {
            try {
              Le(S);
            } finally {
              throw jt;
            }
          }
          T++;
        }
      }
      function h(d, f, p) {
        var $ = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (g($) || !$.delete(d))
          return !1;
        if ($.size === 0) {
          var A = o.get(f);
          g(A) || (A.delete(p), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Pt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, u = i.getOwnMetadata, v = i.getOwnMetadataKeys, k = i.deleteMetadata, O = new N(), m = {
        isProviderFor: function(h, d) {
          var f = O.get(h);
          return !g(f) && f.has(d) ? !0 : v(h, d).length ? (g(f) && (f = new P(), O.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: k
      };
      return m;
    }
    function Z(i, o, a) {
      var u = se.getProvider(i, o);
      if (!g(u))
        return u;
      if (a) {
        if (se.setProvider(i, o, Se))
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
          }, m.prototype[c] = function() {
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
      ), u = (
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
              return this._keys.length--, this._values.length--, fe(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, k);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[c] = function() {
            return this.entries();
          }, m.prototype._find = function(h, d) {
            if (!fe(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (fe(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return u;
      function v(m, h) {
        return m;
      }
      function k(m, h) {
        return h;
      }
      function O(m, h) {
        return [m, h];
      }
    }
    function Rt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new C();
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
          }, o.prototype[c] = function() {
            return this.keys();
          }, o;
        }()
      );
      return i;
    }
    function Nt() {
      var i = 16, o = w.create(), a = u();
      return (
        /** @class */
        function() {
          function h() {
            this._key = u();
          }
          return h.prototype.has = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
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
            this._key = u();
          }, h;
        }()
      );
      function u() {
        var h;
        do
          h = "@@WeakMap@@" + m();
        while (w.has(o, h));
        return o[h] = !0, h;
      }
      function v(h, d) {
        if (!r.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: w.create() });
        }
        return h[a];
      }
      function k(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function O(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : k(d, h), d;
        }
        return k(new Array(h), h);
      }
      function m() {
        var h = O(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var p = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function ye(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function It(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function Lt(n) {
  return function(e) {
    if (It(n)) {
      const t = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const r = `${n.elementSelector}-${n.version}`;
        if (!customElements.get(r))
          try {
            customElements.define(r, e);
          } catch {
            try {
              customElements.define(r, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, l);
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
function zt(n) {
  return Lt(n);
}
function Bt(n) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Be(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), c = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && _) {
          const w = new CSSStyleSheet(), b = (E = l.sheet) == null ? void 0 : E.cssRules;
          b && (Array.from(b).forEach((C) => w.insertRule(C.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          y.appendChild(w);
        }
        c.forEach((w) => {
          const b = w.cloneNode(!0);
          y.appendChild(b);
        });
      }
    }
    return t;
  };
}
function Gt(n) {
  var t;
  if (((t = n == null ? void 0 : n.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Vt(n) {
  return function(e, t) {
    try {
      Gt(n);
      const r = Reflect.getMetadata("ZeroAttribute", e) || [];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (n.fieldMappings = n.fieldMappings ?? t);
      }
      r.push(n), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function ue(n) {
  return Vt(n);
}
var K;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker";
})(K || (K = {}));
var W;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(W || (W = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis, $e = ae.ShadowRoot && (ae.ShadyCSS === void 0 || ae.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, be = Symbol(), We = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== be) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if ($e && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = We.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && We.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (n) => new ot(typeof n == "string" ? n : n + "", void 0, be), Ft = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((r, s, l) => r + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[l + 1], n[0]);
  return new ot(t, n, be);
}, qt = (n, e) => {
  if ($e) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), s = ae.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = t.cssText, n.appendChild(r);
  }
}, Fe = $e ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Wt(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zt, defineProperty: Xt, getOwnPropertyDescriptor: Yt, getOwnPropertyNames: Jt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, j = globalThis, qe = j.trustedTypes, er = qe ? qe.emptyScript : "", ve = j.reactiveElementPolyfillSupport, Y = (n, e) => n, le = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? er : null;
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
} }, we = (n, e) => !Zt(n, e), Ze = { attribute: !0, type: String, converter: le, reflect: !1, useDefault: !1, hasChanged: we };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let V = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(e, r, t);
      s !== void 0 && Xt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: s, set: l } = Yt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(c) {
      this[t] = c;
    } };
    return { get: s, set(c) {
      const _ = s == null ? void 0 : s.call(this);
      l == null || l.call(this, c), this.requestUpdate(e, _, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const e = Kt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const t = this.properties, r = [...Jt(t), ...Qt(t)];
      for (const s of r) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, s] of t) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const s = this._$Eu(t, r);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const s of r) t.unshift(Fe(s));
    } else e !== void 0 && t.push(Fe(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return qt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostConnected) == null ? void 0 : r.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostDisconnected) == null ? void 0 : r.call(t);
    });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$ET(e, t) {
    var l;
    const r = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, r);
    if (s !== void 0 && r.reflect === !0) {
      const c = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : le).toAttribute(t, r.type);
      this._$Em = e, c == null ? this.removeAttribute(s) : this.setAttribute(s, c), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, c;
    const r = this.constructor, s = r._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const _ = r.getPropertyOptions(s), y = typeof _.converter == "function" ? { fromAttribute: _.converter } : ((l = _.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? _.converter : le;
      this._$Em = s;
      const E = y.fromAttribute(t, _.type);
      this[s] = E ?? ((c = this._$Ej) == null ? void 0 : c.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, s = !1, l) {
    var c;
    if (e !== void 0) {
      const _ = this.constructor;
      if (s === !1 && (l = this[e]), r ?? (r = _.getPropertyOptions(e)), !((r.hasChanged ?? we)(l, t) || r.useDefault && r.reflect && l === ((c = this._$Ej) == null ? void 0 : c.get(e)) && !this.hasAttribute(_._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: s, wrapped: l }, c) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, c ?? t ?? this[e]), l !== !0 || c !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, c] of this._$Ep) this[l] = c;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, c] of s) {
        const { wrapped: _ } = c, y = this[l];
        _ !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, c, y);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((s) => {
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
    (t = this._$EO) == null || t.forEach((r) => {
      var s;
      return (s = r.hostUpdated) == null ? void 0 : s.call(r);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[Y("elementProperties")] = /* @__PURE__ */ new Map(), V[Y("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: V }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, Xe = (n) => n, ce = J.trustedTypes, Ye = ce ? ce.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, at = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, lt = "?" + U, tr = `<${lt}>`, L = document, ee = () => L.createComment(""), te = (n) => n === null || typeof n != "object" && typeof n != "function", Ee = Array.isArray, rr = (n) => Ee(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, H = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, ct = /^(?:script|style|textarea|title)$/i, nr = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), tt = nr(1), F = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), D = L.createTreeWalker(L, 129);
function ut(n, e) {
  if (!Ee(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const ir = (n, e) => {
  const t = n.length - 1, r = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", c = X;
  for (let _ = 0; _ < t; _++) {
    const y = n[_];
    let E, w, b = -1, C = 0;
    for (; C < y.length && (c.lastIndex = C, w = c.exec(y), w !== null); ) C = c.lastIndex, c === X ? w[1] === "!--" ? c = Je : w[1] !== void 0 ? c = Qe : w[2] !== void 0 ? (ct.test(w[2]) && (s = RegExp("</" + w[2], "g")), c = H) : w[3] !== void 0 && (c = H) : c === H ? w[0] === ">" ? (c = s ?? X, b = -1) : w[1] === void 0 ? b = -2 : (b = c.lastIndex - w[2].length, E = w[1], c = w[3] === void 0 ? H : w[3] === '"' ? et : Ke) : c === et || c === Ke ? c = H : c === Je || c === Qe ? c = X : (c = H, s = void 0);
    const P = c === H && n[_ + 1].startsWith("/>") ? " " : "";
    l += c === X ? y + tr : b >= 0 ? (r.push(E), y.slice(0, b) + at + y.slice(b) + U + P) : y + U + (b === -2 ? _ : P);
  }
  return [ut(n, l + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class re {
  constructor({ strings: e, _$litType$: t }, r) {
    let s;
    this.parts = [];
    let l = 0, c = 0;
    const _ = e.length - 1, y = this.parts, [E, w] = ir(e, t);
    if (this.el = re.createElement(E, r), D.currentNode = this.el.content, t === 2 || t === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (s = D.nextNode()) !== null && y.length < _; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const b of s.getAttributeNames()) if (b.endsWith(at)) {
          const C = w[c++], P = s.getAttribute(b).split(U), N = /([.?@])?(.*)/.exec(C);
          y.push({ type: 1, index: l, name: N[2], strings: P, ctor: N[1] === "." ? or : N[1] === "?" ? ar : N[1] === "@" ? lr : he }), s.removeAttribute(b);
        } else b.startsWith(U) && (y.push({ type: 6, index: l }), s.removeAttribute(b));
        if (ct.test(s.tagName)) {
          const b = s.textContent.split(U), C = b.length - 1;
          if (C > 0) {
            s.textContent = ce ? ce.emptyScript : "";
            for (let P = 0; P < C; P++) s.append(b[P], ee()), D.nextNode(), y.push({ type: 2, index: ++l });
            s.append(b[C], ee());
          }
        }
      } else if (s.nodeType === 8) if (s.data === lt) y.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = s.data.indexOf(U, b + 1)) !== -1; ) y.push({ type: 7, index: l }), b += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const r = L.createElement("template");
    return r.innerHTML = e, r;
  }
}
function q(n, e, t = n, r) {
  var c, _;
  if (e === F) return e;
  let s = r !== void 0 ? (c = t._$Co) == null ? void 0 : c[r] : t._$Cl;
  const l = te(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((_ = s == null ? void 0 : s._$AO) == null || _.call(s, !1), l === void 0 ? s = void 0 : (s = new l(n), s._$AT(n, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = s : t._$Cl = s), s !== void 0 && (e = q(n, s._$AS(n, e.values), s, r)), e;
}
class sr {
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
    const { el: { content: t }, parts: r } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? L).importNode(t, !0);
    D.currentNode = s;
    let l = D.nextNode(), c = 0, _ = 0, y = r[0];
    for (; y !== void 0; ) {
      if (c === y.index) {
        let E;
        y.type === 2 ? E = new ne(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new cr(l, this, e)), this._$AV.push(E), y = r[++_];
      }
      c !== (y == null ? void 0 : y.index) && (l = D.nextNode(), c++);
    }
    return D.currentNode = L, s;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class ne {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, s) {
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = q(this, e, t), te(e) ? e === x || e == null || e === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : e !== this._$AH && e !== F && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : rr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== x && te(this._$AH) ? this._$AA.nextSibling.data = e : this.T(L.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: r } = e, s = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = re.createElement(ut(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const c = new sr(s, this), _ = c.u(this.options);
      c.p(t), this.T(_), this._$AH = c;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new re(e)), t;
  }
  k(e) {
    Ee(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, s = 0;
    for (const l of e) s === t.length ? t.push(r = new ne(this.O(ee()), this.O(ee()), this, this.options)) : r = t[s], r._$AI(l), s++;
    s < t.length && (this._$AR(r && r._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Xe(e).nextSibling;
      Xe(e).remove(), e = s;
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
  constructor(e, t, r, s, l) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = x;
  }
  _$AI(e, t = this, r, s) {
    const l = this.strings;
    let c = !1;
    if (l === void 0) e = q(this, e, t, 0), c = !te(e) || e !== this._$AH && e !== F, c && (this._$AH = e);
    else {
      const _ = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = q(this, _[r + y], t, y), E === F && (E = this._$AH[y]), c || (c = !te(E) || E !== this._$AH[y]), E === x ? e = x : e !== x && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    c && !s && this.j(e);
  }
  j(e) {
    e === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === x ? void 0 : e;
  }
}
class ar extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== x);
  }
}
class lr extends he {
  constructor(e, t, r, s, l) {
    super(e, t, r, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = q(this, e, t, 0) ?? x) === F) return;
    const r = this._$AH, s = e === x && r !== x || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, l = e !== x && (r === x || s);
    s && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class cr {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    q(this, e);
  }
}
const ge = J.litHtmlPolyfillSupport;
ge == null || ge(re, ne), (J.litHtmlVersions ?? (J.litHtmlVersions = [])).push("3.3.3");
const ur = (n, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = r._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = s = new ne(e.insertBefore(ee(), l), l, void 0, t ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = globalThis;
class Q extends V {
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
    return F;
  }
}
var st;
Q._$litElement$ = !0, Q.finalized = !0, (st = I.litElementHydrateSupport) == null || st.call(I, { LitElement: Q });
const me = I.litElementPolyfillSupport;
me == null || me({ LitElement: Q });
(I.litElementVersions ?? (I.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: we }, dr = (n = hr, e, t) => {
  const { kind: r, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), l.set(t.name, n), r === "accessor") {
    const { name: c } = t;
    return { set(_) {
      const y = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(c, y, n, !0, _);
    }, init(_) {
      return _ !== void 0 && this.C(c, void 0, n, _), _;
    } };
  }
  if (r === "setter") {
    const { name: c } = t;
    return function(_) {
      const y = this[c];
      e.call(this, _), this.requestUpdate(c, y, n, !0, _);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function Ae(n) {
  return (e, t) => typeof t == "object" ? dr(n, e, t) : ((r, s, l) => {
    const c = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, r), c ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(n, e, t);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, ie = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? pr(e, t) : e, l = n.length - 1, c; l >= 0; l--)
    (c = n[l]) && (s = (r ? c(e, t, s) : c(s)) || s);
  return r && s && fr(e, t, s), s;
};
const nt = () => window.zeroThemeManager, it = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
    "<div style='width:24px;height:24px;border-radius:50%;background:#4ade80;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 4px rgba(74,222,128,0.3);'>",
    "<span style='color:white;font-size:1rem;font-weight:900;'>✓</span>",
    "</div>",
    "<span style='font-size:0.85rem;color:var(--uiv-text-color,#1e293b);font-weight:500;'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Tick", "Valid"]
};
function yr(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let z = class extends Q {
  constructor() {
    super(...arguments), this.label = "Standard Check", this.checked = !1, this.disabled = !1, this.onChangeEvent = "change";
  }
  static getStudioTemplate(n) {
    var l, c;
    if (!n) return it;
    const e = yr(n.studio.display.label || "Tick Checkbox"), t = !!(((l = n.props) == null ? void 0 : l.checked) ?? ((c = n.studio.props) == null ? void 0 : c.checked)), r = "var(--uiv-primary-color, #2ecc71)";
    return {
      ...it,
      templateHtml: [
        "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
        `<div style='width:20px;height:20px;border:2px solid ${r};border-radius:4px;display:flex;align-items:center;justify-content:center;background:${t ? r : "transparent"};transition:all 0.2s;'>`,
        t ? "<div style='width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg);'></div>" : "",
        "</div>",
        `<span style='font-size:1rem;color:var(--uiv-text-color, #333);'>${e}</span>`,
        "</div>"
      ].join("")
    };
  }
  handleToggle() {
    this.disabled || (this.checked = !this.checked, this.dispatchEvent(new CustomEvent("change", {
      detail: { checked: this.checked },
      bubbles: !0,
      composed: !0
    })));
  }
  connectedCallback() {
    var n;
    super.connectedCallback(), (n = nt()) == null || n.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const n = (e = nt()) == null ? void 0 : e.getActiveTheme();
    return tt`
            <style>
                ${n ? n.getGlobalStyles() : ""}
            </style>
            <div class="checkbox-wrapper ${this.checked ? "checked" : ""}" @click="${this.handleToggle}">
                <div class="tick-box">
                    <div class="tick"></div>
                </div>
                ${this.label ? tt`<span class="label">${this.label}</span>` : ""}
            </div>
        `;
  }
};
z.styles = Ft`
        :host {
            display: inline-block;
            margin-right: 15px;
            --chk-p: var(--uiv-primary-color, #2ecc71);
            --chk-bg: var(--uiv-bg-color, #fff);
            --chk-t: var(--uiv-text-color, #333);
        }

        .checkbox-wrapper {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
        }

        .tick-box {
            width: 20px;
            height: 20px;
            border: 2px solid var(--chk-p);
            border-radius: 4px;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
        }

        .checked .tick-box {
            background: var(--chk-p);
        }

        .tick {
            width: 5px;
            height: 10px;
            border: solid #fff;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            display: none;
        }

        .checked .tick {
            display: block;
        }

        .label {
            color: var(--chk-t);
            font-size: 1rem;
        }
    `;
ie([
  Ae({ type: String }),
  ue({
    attributeType: W.PROPERTY,
    uiComponentType: K.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], z.prototype, "label", 2);
ie([
  Ae({ type: Boolean }),
  ue({
    attributeType: W.PROPERTY,
    uiComponentType: K.CHECKBOX,
    displayLabel: "Checked",
    fieldMappings: "checked"
  })
], z.prototype, "checked", 2);
ie([
  Ae({ type: Boolean }),
  ue({
    attributeType: W.PROPERTY,
    uiComponentType: K.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], z.prototype, "disabled", 2);
ie([
  ue({
    attributeType: W.EVENT,
    eventTrigger: "change",
    displayLabel: "On Change"
  })
], z.prototype, "onChangeEvent", 2);
z = ie([
  zt({
    name: "zero-uiv-checkbox-tick",
    version: "1.0.0",
    title: "Modern Tick Checkbox",
    elementSelector: "zero-uiv-checkbox-tick",
    group: "Uiverse Checkboxes",
    iconName: "checkbox-icon.png"
  }),
  Bt()
], z);
export {
  z as ZeroUivCheckboxTick,
  it as tickTemplate
};
