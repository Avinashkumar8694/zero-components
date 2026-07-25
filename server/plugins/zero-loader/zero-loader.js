var It = Object.defineProperty;
var jt = (n, e, t) => e in n ? It(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ge = (n, e, t) => jt(n, typeof e != "symbol" ? e + "" : e, t);
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : m(), r = s(n);
    typeof t.Reflect < "u" && (r = s(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = n);
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
    function m() {
      return l() || u();
    }
  })(function(e, t) {
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !m && !y, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return me(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return me({ __proto__: null });
      } : function() {
        return me({});
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
    }, $ = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Rt(), U = typeof WeakMap == "function" ? WeakMap : kt(), q = s ? Symbol.for("@reflect-metadata:registry") : void 0, le = Ct(), Oe = Mt(le);
    function ct(i, o, a, c) {
      if (_(a)) {
        if (!ze(i))
          throw new TypeError();
        if (!Ie(o))
          throw new TypeError();
        return bt(i, o);
      } else {
        if (!ze(i))
          throw new TypeError();
        if (!O(o))
          throw new TypeError();
        if (!O(c) && !_(c) && !Y(c))
          throw new TypeError();
        return Y(c) && (c = void 0), a = N(a), $t(i, o, a, c);
      }
    }
    e("decorate", ct);
    function dt(i, o) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!_(v) && !Ot(v))
          throw new TypeError();
        Pe(i, o, c, v);
      }
      return a;
    }
    e("metadata", dt);
    function ht(i, o, a, c) {
      if (!O(a))
        throw new TypeError();
      return _(c) || (c = N(c)), Pe(i, o, a, c);
    }
    e("defineMetadata", ht);
    function ft(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = N(a)), xe(i, o, a);
    }
    e("hasMetadata", ft);
    function pt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = N(a)), pe(i, o, a);
    }
    e("hasOwnMetadata", pt);
    function yt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = N(a)), Ce(i, o, a);
    }
    e("getMetadata", yt);
    function vt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      return _(a) || (a = N(a)), Me(i, o, a);
    }
    e("getOwnMetadata", vt);
    function mt(i, o) {
      if (!O(i))
        throw new TypeError();
      return _(o) || (o = N(o)), Te(i, o);
    }
    e("getMetadataKeys", mt);
    function _t(i, o) {
      if (!O(i))
        throw new TypeError();
      return _(o) || (o = N(o)), Re(i, o);
    }
    e("getOwnMetadataKeys", _t);
    function gt(i, o, a) {
      if (!O(o))
        throw new TypeError();
      if (_(a) || (a = N(a)), !O(o))
        throw new TypeError();
      _(a) || (a = N(a));
      var c = K(
        o,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", gt);
    function bt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!_(v) && !Y(v)) {
          if (!Ie(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function $t(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var C = i[v], x = C(o, a, c);
        if (!_(x) && !Y(x)) {
          if (!O(x))
            throw new TypeError();
          c = x;
        }
      }
      return c;
    }
    function xe(i, o, a) {
      var c = pe(i, o, a);
      if (c)
        return !0;
      var v = ve(o);
      return Y(v) ? !1 : xe(i, v, a);
    }
    function pe(i, o, a) {
      var c = K(
        o,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : Ne(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Ce(i, o, a) {
      var c = pe(i, o, a);
      if (c)
        return Me(i, o, a);
      var v = ve(o);
      if (!Y(v))
        return Ce(i, v, a);
    }
    function Me(i, o, a) {
      var c = K(
        o,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Pe(i, o, a, c) {
      var v = K(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function Te(i, o) {
      var a = Re(i, o), c = ve(i);
      if (c === null)
        return a;
      var v = Te(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var C = new T(), x = [], g = 0, d = a; g < d.length; g++) {
        var h = d[g], f = C.has(h);
        f || (C.add(h), x.push(h));
      }
      for (var p = 0, b = v; p < b.length; p++) {
        var h = b[p], f = C.has(h);
        f || (C.add(h), x.push(h));
      }
      return x;
    }
    function Re(i, o) {
      var a = K(
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
    function Y(i) {
      return i === null;
    }
    function wt(i) {
      return typeof i == "symbol";
    }
    function O(i) {
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
      var a = "string", c = je(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return At(i);
    }
    function At(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (ue(v)) {
          var c = v.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (ue(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ne(i) {
      return !!i;
    }
    function St(i) {
      return "" + i;
    }
    function N(i) {
      var o = Et(i);
      return wt(o) ? o : St(o);
    }
    function ze(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ue(i) {
      return typeof i == "function";
    }
    function Ie(i) {
      return typeof i == "function";
    }
    function Ot(i) {
      switch (ke(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ye(i, o) {
      return i === o || i !== i && o !== o;
    }
    function je(i, o) {
      var a = i[o];
      if (a != null) {
        if (!ue(a))
          throw new TypeError();
        return a;
      }
    }
    function Ue(i) {
      var o = je(i, u);
      if (!ue(o))
        throw new TypeError();
      var a = o.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function He(i) {
      return i.value;
    }
    function De(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Le(i) {
      var o = i.return;
      o && o.call(i);
    }
    function ve(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || o !== $)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function xt() {
      var i;
      !_(q) && typeof t.Reflect < "u" && !(q in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Pt(t.Reflect));
      var o, a, c, v = new U(), C = {
        registerProvider: x,
        getProvider: d,
        setProvider: f
      };
      return C;
      function x(p) {
        if (!Object.isExtensible(C))
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
            c === void 0 && (c = new T()), c.add(p);
            break;
        }
      }
      function g(p, b) {
        if (!_(o)) {
          if (o.isProviderFor(p, b))
            return o;
          if (!_(a)) {
            if (a.isProviderFor(p, b))
              return o;
            if (!_(c))
              for (var A = Ue(c); ; ) {
                var S = De(A);
                if (!S)
                  return;
                var R = He(S);
                if (R.isProviderFor(p, b))
                  return Le(A), R;
              }
          }
        }
        if (!_(i) && i.isProviderFor(p, b))
          return i;
      }
      function d(p, b) {
        var A = v.get(p), S;
        return _(A) || (S = A.get(b)), _(S) && (S = g(p, b), _(S) || (_(A) && (A = new P(), v.set(p, A)), A.set(b, S))), S;
      }
      function h(p) {
        if (_(p))
          throw new TypeError();
        return o === p || a === p || !_(c) && c.has(p);
      }
      function f(p, b, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = d(p, b);
        if (S !== A) {
          if (!_(S))
            return !1;
          var R = v.get(p);
          _(R) && (R = new P(), v.set(p, R)), R.set(b, A);
        }
        return !0;
      }
    }
    function Ct() {
      var i;
      return !_(q) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[q]), _(i) && (i = xt()), !_(q) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, q, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Mt(i) {
      var o = new U(), a = {
        isProviderFor: function(h, f) {
          var p = o.get(h);
          return _(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: d
      };
      return le.registerProvider(a), a;
      function c(h, f, p) {
        var b = o.get(h), A = !1;
        if (_(b)) {
          if (!p)
            return;
          b = new P(), o.set(h, b), A = !0;
        }
        var S = b.get(f);
        if (_(S)) {
          if (!p)
            return;
          if (S = new P(), b.set(f, S), !i.setProvider(h, f, a))
            throw b.delete(f), A && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        return _(b) ? !1 : Ne(b.has(h));
      }
      function C(h, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!_(b))
          return b.get(h);
      }
      function x(h, f, p, b) {
        var A = c(
          p,
          b,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function g(h, f) {
        var p = [], b = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (_(b))
          return p;
        for (var A = b.keys(), S = Ue(A), R = 0; ; ) {
          var Be = De(S);
          if (!Be)
            return p.length = R, p;
          var Nt = He(Be);
          try {
            p[R] = Nt;
          } catch (zt) {
            try {
              Le(S);
            } finally {
              throw zt;
            }
          }
          R++;
        }
      }
      function d(h, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (_(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var A = o.get(f);
          _(A) || (A.delete(p), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Pt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, C = i.deleteMetadata, x = new U(), g = {
        isProviderFor: function(d, h) {
          var f = x.get(d);
          return !_(f) && f.has(h) ? !0 : v(d, h).length ? (_(f) && (f = new T(), x.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return g;
    }
    function K(i, o, a) {
      var c = le.getProvider(i, o);
      if (!_(c))
        return c;
      if (a) {
        if (le.setProvider(i, o, Oe))
          return Oe;
        throw new Error("Illegal state.");
      }
    }
    function Tt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function g(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, g.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, g;
        }()
      ), c = (
        /** @class */
        function() {
          function g() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(g.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), g.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, g.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, g.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ye(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, x);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(d, h) {
            if (!ye(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ye(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function v(g, d) {
        return g;
      }
      function C(g, d) {
        return d;
      }
      function x(g, d) {
        return [g, d];
      }
    }
    function Rt() {
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
          }, o.prototype[u] = function() {
            return this.keys();
          }, o;
        }()
      );
      return i;
    }
    function kt() {
      var i = 16, o = w.create(), a = c();
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
          d = "@@WeakMap@@" + g();
        while (w.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, h) {
        if (!r.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: w.create() });
        }
        return d[a];
      }
      function C(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function x(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, d), h;
        }
        return C(new Array(d), d);
      }
      function g() {
        var d = x(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function me(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function Ut(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function Ht(n) {
  return function(e) {
    if (Ut(n)) {
      const t = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName,
        layoutKind: n.layoutKind,
        environment: n.environment
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
function Dt(n) {
  return Ht(n);
}
function Lt(n) {
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
        var E;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
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
    return t;
  };
}
function Bt(n) {
  var t;
  if (((t = n == null ? void 0 : n.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Gt(n) {
  return function(e, t) {
    try {
      Bt(n);
      const r = [...Reflect.getMetadata("ZeroAttribute", e) || []];
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
function L(n) {
  return Gt(n);
}
var z;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker", n.CHIPS = "chips";
})(z || (z = {}));
var I;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(I || (I = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = globalThis, we = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let st = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (n) => new st(typeof n == "string" ? n : n + "", void 0, Ee), Vt = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((r, s, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[l + 1], n[0]);
  return new st(t, n, Ee);
}, Ft = (n, e) => {
  if (we) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), s = ce.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = t.cssText, n.appendChild(r);
  }
}, qe = we ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return Wt(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qt, defineProperty: Yt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Xt, getOwnPropertySymbols: Jt, getPrototypeOf: Qt } = Object, D = globalThis, Ye = D.trustedTypes, Kt = Ye ? Ye.emptyScript : "", _e = D.reactiveElementPolyfillSupport, te = (n, e) => n, de = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? Kt : null;
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
} }, Ae = (n, e) => !qt(n, e), Ze = { attribute: !0, type: String, converter: de, reflect: !1, useDefault: !1, hasChanged: Ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(e, r, t);
      s !== void 0 && Yt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: s, set: l } = Zt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, m, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(te("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(te("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(te("properties"))) {
      const t = this.properties, r = [...Xt(t), ...Jt(t)];
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
      for (const s of r) t.unshift(qe(s));
    } else e !== void 0 && t.push(qe(e));
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
    return Ft(e, this.constructor.elementStyles), e;
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
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : de).toAttribute(t, r.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const r = this.constructor, s = r._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const m = r.getPropertyOptions(s), y = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : de;
      this._$Em = s;
      const E = y.fromAttribute(t, m.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, s = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[e]), r ?? (r = m.getPropertyOptions(e)), !((r.hasChanged ?? Ae)(l, t) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: s, wrapped: l }, u) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: m } = u, y = this[l];
        m !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[te("elementProperties")] = /* @__PURE__ */ new Map(), X[te("finalized")] = /* @__PURE__ */ new Map(), _e == null || _e({ ReactiveElement: X }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re = globalThis, Xe = (n) => n, he = re.trustedTypes, Je = he ? he.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, ot = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, at = "?" + H, er = `<${at}>`, F = document, ie = () => F.createComment(""), se = (n) => n === null || typeof n != "object" && typeof n != "function", Se = Array.isArray, tr = (n) => Se(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", ge = `[ 	
\f\r]`, ee = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, G = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, lt = /^(?:script|style|textarea|title)$/i, rr = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), Z = rr(1), J = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), W = F.createTreeWalker(F, 129);
function ut(n, e) {
  if (!Se(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const nr = (n, e) => {
  const t = n.length - 1, r = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = ee;
  for (let m = 0; m < t; m++) {
    const y = n[m];
    let E, w, $ = -1, P = 0;
    for (; P < y.length && (u.lastIndex = P, w = u.exec(y), w !== null); ) P = u.lastIndex, u === ee ? w[1] === "!--" ? u = Qe : w[1] !== void 0 ? u = Ke : w[2] !== void 0 ? (lt.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = G) : w[3] !== void 0 && (u = G) : u === G ? w[0] === ">" ? (u = s ?? ee, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? G : w[3] === '"' ? tt : et) : u === tt || u === et ? u = G : u === Qe || u === Ke ? u = ee : (u = G, s = void 0);
    const T = u === G && n[m + 1].startsWith("/>") ? " " : "";
    l += u === ee ? y + er : $ >= 0 ? (r.push(E), y.slice(0, $) + ot + y.slice($) + H + T) : y + H + ($ === -2 ? m : T);
  }
  return [ut(n, l + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class oe {
  constructor({ strings: e, _$litType$: t }, r) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, y = this.parts, [E, w] = nr(e, t);
    if (this.el = oe.createElement(E, r), W.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = W.nextNode()) !== null && y.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(ot)) {
          const P = w[u++], T = s.getAttribute($).split(H), U = /([.?@])?(.*)/.exec(P);
          y.push({ type: 1, index: l, name: U[2], strings: T, ctor: U[1] === "." ? sr : U[1] === "?" ? or : U[1] === "@" ? ar : fe }), s.removeAttribute($);
        } else $.startsWith(H) && (y.push({ type: 6, index: l }), s.removeAttribute($));
        if (lt.test(s.tagName)) {
          const $ = s.textContent.split(H), P = $.length - 1;
          if (P > 0) {
            s.textContent = he ? he.emptyScript : "";
            for (let T = 0; T < P; T++) s.append($[T], ie()), W.nextNode(), y.push({ type: 2, index: ++l });
            s.append($[P], ie());
          }
        }
      } else if (s.nodeType === 8) if (s.data === at) y.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(H, $ + 1)) !== -1; ) y.push({ type: 7, index: l }), $ += H.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const r = F.createElement("template");
    return r.innerHTML = e, r;
  }
}
function Q(n, e, t = n, r) {
  var u, m;
  if (e === J) return e;
  let s = r !== void 0 ? (u = t._$Co) == null ? void 0 : u[r] : t._$Cl;
  const l = se(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(n), s._$AT(n, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = s : t._$Cl = s), s !== void 0 && (e = Q(n, s._$AS(n, e.values), s, r)), e;
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
    const { el: { content: t }, parts: r } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? F).importNode(t, !0);
    W.currentNode = s;
    let l = W.nextNode(), u = 0, m = 0, y = r[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new ae(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new lr(l, this, e)), this._$AV.push(E), y = r[++m];
      }
      u !== (y == null ? void 0 : y.index) && (l = W.nextNode(), u++);
    }
    return W.currentNode = F, s;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class ae {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, s) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = Q(this, e, t), se(e) ? e === M || e == null || e === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : e !== this._$AH && e !== J && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== M && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(F.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: r } = e, s = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = oe.createElement(ut(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ir(s, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new oe(e)), t;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, s = 0;
    for (const l of e) s === t.length ? t.push(r = new ae(this.O(ie()), this.O(ie()), this, this.options)) : r = t[s], r._$AI(l), s++;
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
class fe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, s, l) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = M;
  }
  _$AI(e, t = this, r, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = Q(this, e, t, 0), u = !se(e) || e !== this._$AH && e !== J, u && (this._$AH = e);
    else {
      const m = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = Q(this, m[r + y], t, y), E === J && (E = this._$AH[y]), u || (u = !se(E) || E !== this._$AH[y]), E === M ? e = M : e !== M && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class sr extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === M ? void 0 : e;
  }
}
class or extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== M);
  }
}
class ar extends fe {
  constructor(e, t, r, s, l) {
    super(e, t, r, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Q(this, e, t, 0) ?? M) === J) return;
    const r = this._$AH, s = e === M && r !== M || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, l = e !== M && (r === M || s);
    s && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class lr {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Q(this, e);
  }
}
const be = re.litHtmlPolyfillSupport;
be == null || be(oe, ae), (re.litHtmlVersions ?? (re.litHtmlVersions = [])).push("3.3.3");
const ur = (n, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = r._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = s = new ae(e.insertBefore(ie(), l), l, void 0, t ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = globalThis;
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
    return J;
  }
}
var it;
ne._$litElement$ = !0, ne.finalized = !0, (it = V.litElementHydrateSupport) == null || it.call(V, { LitElement: ne });
const $e = V.litElementPolyfillSupport;
$e == null || $e({ LitElement: ne });
(V.litElementVersions ?? (V.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = (n) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(n, e);
  }) : customElements.define(n, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ae }, hr = (n = dr, e, t) => {
  const { kind: r, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), l.set(t.name, n), r === "accessor") {
    const { name: u } = t;
    return { set(m) {
      const y = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(u, y, n, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, n, m), m;
    } };
  }
  if (r === "setter") {
    const { name: u } = t;
    return function(m) {
      const y = this[u];
      e.call(this, m), this.requestUpdate(u, y, n, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function B(n) {
  return (e, t) => typeof t == "object" ? hr(n, e, t) : ((r, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(n, e, t);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, j = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? pr(e, t) : e, l = n.length - 1, u; l >= 0; l--)
    (u = n[l]) && (s = (r ? u(e, t, s) : u(s)) || s);
  return r && s && fr(e, t, s), s;
};
const nt = {
  kind: "generic",
  slots: [
    { id: "content", label: "Custom Content", dropzone: !0, accepts: [] }
  ],
  templateHtml: [
    "<div style='display:flex;flex-direction:column;align-items:center;gap:12px;padding:24px;border-radius:12px;border:1px solid rgba(148,163,184,0.15);background:rgba(255,255,255,0.95);'>",
    "<div style='width:36px;height:36px;border:3px solid rgba(0,0,0,0.1);border-top-color:var(--uiv-status-primary,#3b82f6);border-radius:50%;'></div>",
    "<span style='font-size:0.8rem;color:var(--uiv-text-muted,#64748b);'>{{display:text}}</span>",
    "<div style='width:100%;min-height:24px;border:1px dashed rgba(148,163,184,0.25);border-radius:6px;padding:4px;'>",
    "<zero-studio-slot name='content'></zero-studio-slot>",
    "</div>",
    "</div>"
  ].join(""),
  textProp: "text",
  badges: ["Feedback", "Loader"]
};
let k = class extends ne {
  constructor() {
    super(...arguments), this.text = "Loading...", this.icon = "", this.fullScreen = !1, this.image = "", this.backgroundColor = "transparent", this.spinnerColor = "#3b82f6", this.textColor = "#475569", this.size = 48;
  }
  static getStudioTemplate(n) {
    if (!n) return nt;
    const e = yr(n.studio.display.text || "Loading...");
    return {
      ...nt,
      templateHtml: [
        "<div style='display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:32px;font-family:inherit;'>",
        "<div style='width:36px;height:36px;border:3px solid rgba(0,0,0,0.1);border-top-color:var(--uiv-primary-color, #3b82f6);border-radius:50%;'></div>",
        `<div style='font-size:14px;color:var(--uiv-text-muted, #64748b);font-weight:500;margin-top:8px;'>${e}</div>`,
        "<div style='width:100%;min-height:30px;border:2px dashed rgba(148,163,184,0.3);border-radius:8px;padding:8px;margin-top:10px;'>",
        "<zero-studio-slot name='content'></zero-studio-slot>",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  render() {
    const n = [
      `--zero-spinner-color: ${this.spinnerColor}`,
      `--zero-text-color: ${this.textColor}`,
      `--zero-spinner-size: ${this.size}px`
    ].join(";"), e = this.fullScreen ? `background-color: ${this.backgroundColor || "var(--uiv-bg-surface, #ffffff)"}` : `background-color: ${this.backgroundColor}`;
    return Z`
      <div style=${n}>
        <div class="loader-container" style=${e}>
          <div class="spinner">
            ${this.image ? Z`<img src="${this.image}" style="width: 100%; height: 100%; object-fit: contain;" />` : this.icon ? Z`<span class="spinner-icon">${this.icon}</span>` : Z`<div class="spinner-circle"></div>`}
          </div>
          ${this.text ? Z`<p class="loader-text">${this.text}</p>` : Z``}
          <div class="custom-content" style="width: 100%;">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    `;
  }
};
k.styles = Vt`
    :host {
      display: inline-block;
      width: 100%;
    }

    :host([full-screen]) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .loader-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 32px;
      border-radius: var(--zero-radius-md, 12px);
      transition: background-color 0.3s ease;
    }

    :host([full-screen]) .loader-container {
      padding: 64px;
    }

    .spinner {
      display: inline-block;
      width: var(--zero-spinner-size, 48px);
      height: var(--zero-spinner-size, 48px);
    }
    
    .spinner-icon {
      font-size: var(--zero-spinner-size, 48px);
      line-height: 1;
      display: block;
      animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .spinner-circle {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 4px solid var(--zero-spinner-track, rgba(0, 0, 0, 0.1));
      border-top-color: var(--zero-spinner-color, var(--uiv-status-primary, #3b82f6));
      animation: spin 1s linear infinite;
    }

    .loader-text {
      font-family: var(--zero-font-family, system-ui, sans-serif);
      font-size: var(--zero-font-size, 16px);
      font-weight: 500;
      color: var(--zero-text-color, var(--uiv-text-muted, #475569));
      text-align: center;
      margin: 0;
    }

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: .7;
        transform: scale(0.9);
      }
    }
  `;
j([
  B({ type: String }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Loading Text",
    fieldMappings: "text"
  })
], k.prototype, "text", 2);
j([
  B({ type: String }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Icon (Emoji)",
    fieldMappings: "icon"
  })
], k.prototype, "icon", 2);
j([
  B({ type: Boolean, attribute: "full-screen", reflect: !0 }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.CHECKBOX,
    displayLabel: "Full Screen Overlay",
    fieldMappings: "fullScreen"
  })
], k.prototype, "fullScreen", 2);
j([
  B({ type: String, attribute: "image" }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.TEXT_INPUT,
    displayLabel: "Image URL",
    fieldMappings: "image"
  })
], k.prototype, "image", 2);
j([
  B({ type: String, attribute: "background-color" }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor"
  })
], k.prototype, "backgroundColor", 2);
j([
  B({ type: String, attribute: "spinner-color" }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.COLOR_PICKER,
    displayLabel: "Spinner Color",
    fieldMappings: "spinnerColor"
  })
], k.prototype, "spinnerColor", 2);
j([
  B({ type: String, attribute: "text-color" }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.COLOR_PICKER,
    displayLabel: "Text Color",
    fieldMappings: "textColor"
  })
], k.prototype, "textColor", 2);
j([
  B({ type: Number }),
  L({
    attributeType: I.PROPERTY,
    uiComponentType: z.NUMBER_INPUT,
    displayLabel: "Spinner Size (px)",
    fieldMappings: "size"
  })
], k.prototype, "size", 2);
k = j([
  Dt({
    name: "zero-loader",
    version: "1.0.0",
    title: "Loader",
    elementSelector: "zero-loader",
    group: "Feedback",
    iconName: "loader-icon.png"
  }),
  Lt(),
  cr("zero-loader")
], k);
function yr(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  k as ZeroLoader,
  nt as studioTemplate
};
