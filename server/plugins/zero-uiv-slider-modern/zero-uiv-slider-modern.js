var Gt = Object.defineProperty;
var Wt = (r, e, t) => e in r ? Gt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var We = (r, e, t) => Wt(r, typeof e != "symbol" ? e + "" : e, t);
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
var Ve;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Be == "object" ? Be : typeof self == "object" ? self : typeof this == "object" ? this : y(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(h, w) {
      return function(_, g) {
        Object.defineProperty(h, _, { configurable: !0, writable: !0, value: g }), w && w(_, g);
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
    function y() {
      return l() || u();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", y = typeof Object.create == "function", h = { __proto__: [] } instanceof Array, w = !y && !h, _ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: y ? function() {
        return me(/* @__PURE__ */ Object.create(null));
      } : h ? function() {
        return me({ __proto__: null });
      } : function() {
        return me({});
      },
      has: w ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: w ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, g = Object.getPrototypeOf(Function), A = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : jt(), P = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Dt(), k = typeof WeakMap == "function" ? WeakMap : Ht(), R = s ? Symbol.for("@reflect-metadata:registry") : void 0, L = Nt(), z = Ut(L);
    function ee(i, o, a, d) {
      if (m(a)) {
        if (!Ue(i))
          throw new TypeError();
        if (!Ie(o))
          throw new TypeError();
        return St(i, o);
      } else {
        if (!Ue(i))
          throw new TypeError();
        if (!M(o))
          throw new TypeError();
        if (!M(d) && !m(d) && !X(d))
          throw new TypeError();
        return X(d) && (d = void 0), a = I(a), Mt(i, o, a, d);
      }
    }
    e("decorate", ee);
    function bt(i, o) {
      function a(d, b) {
        if (!M(d))
          throw new TypeError();
        if (!m(b) && !kt(b))
          throw new TypeError();
        Ce(i, o, d, b);
      }
      return a;
    }
    e("metadata", bt);
    function mt(i, o, a, d) {
      if (!M(a))
        throw new TypeError();
      return m(d) || (d = I(d)), Ce(i, o, a, d);
    }
    e("defineMetadata", mt);
    function gt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = I(a)), Me(i, o, a);
    }
    e("hasMetadata", gt);
    function _t(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = I(a)), ve(i, o, a);
    }
    e("hasOwnMetadata", _t);
    function $t(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = I(a)), Oe(i, o, a);
    }
    e("getMetadata", $t);
    function wt(i, o, a) {
      if (!M(o))
        throw new TypeError();
      return m(a) || (a = I(a)), Pe(i, o, a);
    }
    e("getOwnMetadata", wt);
    function xt(i, o) {
      if (!M(i))
        throw new TypeError();
      return m(o) || (o = I(o)), Te(i, o);
    }
    e("getMetadataKeys", xt);
    function Et(i, o) {
      if (!M(i))
        throw new TypeError();
      return m(o) || (o = I(o)), ke(i, o);
    }
    e("getOwnMetadataKeys", Et);
    function At(i, o, a) {
      if (!M(o))
        throw new TypeError();
      if (m(a) || (a = I(a)), !M(o))
        throw new TypeError();
      m(a) || (a = I(a));
      var d = te(
        o,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : d.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", At);
    function St(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var d = i[a], b = d(o);
        if (!m(b) && !X(b)) {
          if (!Ie(b))
            throw new TypeError();
          o = b;
        }
      }
      return o;
    }
    function Mt(i, o, a, d) {
      for (var b = i.length - 1; b >= 0; --b) {
        var C = i[b], O = C(o, a, d);
        if (!m(O) && !X(O)) {
          if (!M(O))
            throw new TypeError();
          d = O;
        }
      }
      return d;
    }
    function Me(i, o, a) {
      var d = ve(i, o, a);
      if (d)
        return !0;
      var b = be(o);
      return X(b) ? !1 : Me(i, b, a);
    }
    function ve(i, o, a) {
      var d = te(
        o,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : Ne(d.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Oe(i, o, a) {
      var d = ve(i, o, a);
      if (d)
        return Pe(i, o, a);
      var b = be(o);
      if (!X(b))
        return Oe(i, b, a);
    }
    function Pe(i, o, a) {
      var d = te(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(d))
        return d.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ce(i, o, a, d) {
      var b = te(
        a,
        d,
        /*Create*/
        !0
      );
      b.OrdinaryDefineOwnMetadata(i, o, a, d);
    }
    function Te(i, o) {
      var a = ke(i, o), d = be(i);
      if (d === null)
        return a;
      var b = Te(d, o);
      if (b.length <= 0)
        return a;
      if (a.length <= 0)
        return b;
      for (var C = new P(), O = [], $ = 0, c = a; $ < c.length; $++) {
        var p = c[$], f = C.has(p);
        f || (C.add(p), O.push(p));
      }
      for (var v = 0, x = b; v < x.length; v++) {
        var p = x[v], f = C.has(p);
        f || (C.add(p), O.push(p));
      }
      return O;
    }
    function ke(i, o) {
      var a = te(
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
    function X(i) {
      return i === null;
    }
    function Ot(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Pt(i, o) {
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
      var a = "string", d = je(i, l);
      if (d !== void 0) {
        var b = d.call(i, a);
        if (M(b))
          throw new TypeError();
        return b;
      }
      return Ct(i);
    }
    function Ct(i, o) {
      var a, d;
      {
        var b = i.toString;
        if (de(b)) {
          var d = b.call(i);
          if (!M(d))
            return d;
        }
        var a = i.valueOf;
        if (de(a)) {
          var d = a.call(i);
          if (!M(d))
            return d;
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
    function I(i) {
      var o = Pt(i);
      return Ot(o) ? o : Tt(o);
    }
    function Ue(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function de(i) {
      return typeof i == "function";
    }
    function Ie(i) {
      return typeof i == "function";
    }
    function kt(i) {
      switch (Re(i)) {
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
        if (!de(a))
          throw new TypeError();
        return a;
      }
    }
    function De(i) {
      var o = je(i, u);
      if (!de(o))
        throw new TypeError();
      var a = o.call(i);
      if (!M(a))
        throw new TypeError();
      return a;
    }
    function He(i) {
      return i.value;
    }
    function Le(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function ze(i) {
      var o = i.return;
      o && o.call(i);
    }
    function be(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === g || o !== g)
        return o;
      var a = i.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return o;
      var b = d.constructor;
      return typeof b != "function" || b === i ? o : b;
    }
    function Rt() {
      var i;
      !m(R) && typeof t.Reflect < "u" && !(R in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = It(t.Reflect));
      var o, a, d, b = new k(), C = {
        registerProvider: O,
        getProvider: c,
        setProvider: f
      };
      return C;
      function O(v) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case m(o):
            o = v;
            break;
          case o === v:
            break;
          case m(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            d === void 0 && (d = new P()), d.add(v);
            break;
        }
      }
      function $(v, x) {
        if (!m(o)) {
          if (o.isProviderFor(v, x))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(v, x))
              return o;
            if (!m(d))
              for (var E = De(d); ; ) {
                var S = Le(E);
                if (!S)
                  return;
                var U = He(S);
                if (U.isProviderFor(v, x))
                  return ze(E), U;
              }
          }
        }
        if (!m(i) && i.isProviderFor(v, x))
          return i;
      }
      function c(v, x) {
        var E = b.get(v), S;
        return m(E) || (S = E.get(x)), m(S) && (S = $(v, x), m(S) || (m(E) && (E = new A(), b.set(v, E)), E.set(x, S))), S;
      }
      function p(v) {
        if (m(v))
          throw new TypeError();
        return o === v || a === v || !m(d) && d.has(v);
      }
      function f(v, x, E) {
        if (!p(E))
          throw new Error("Metadata provider not registered.");
        var S = c(v, x);
        if (S !== E) {
          if (!m(S))
            return !1;
          var U = b.get(v);
          m(U) && (U = new A(), b.set(v, U)), U.set(x, E);
        }
        return !0;
      }
    }
    function Nt() {
      var i;
      return !m(R) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[R]), m(i) && (i = Rt()), !m(R) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, R, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ut(i) {
      var o = new k(), a = {
        isProviderFor: function(p, f) {
          var v = o.get(p);
          return m(v) ? !1 : v.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: b,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: c
      };
      return L.registerProvider(a), a;
      function d(p, f, v) {
        var x = o.get(p), E = !1;
        if (m(x)) {
          if (!v)
            return;
          x = new A(), o.set(p, x), E = !0;
        }
        var S = x.get(f);
        if (m(S)) {
          if (!v)
            return;
          if (S = new A(), x.set(f, S), !i.setProvider(p, f, a))
            throw x.delete(f), E && o.delete(p), new Error("Wrong provider for target.");
        }
        return S;
      }
      function b(p, f, v) {
        var x = d(
          f,
          v,
          /*Create*/
          !1
        );
        return m(x) ? !1 : Ne(x.has(p));
      }
      function C(p, f, v) {
        var x = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (!m(x))
          return x.get(p);
      }
      function O(p, f, v, x) {
        var E = d(
          v,
          x,
          /*Create*/
          !0
        );
        E.set(p, f);
      }
      function $(p, f) {
        var v = [], x = d(
          p,
          f,
          /*Create*/
          !1
        );
        if (m(x))
          return v;
        for (var E = x.keys(), S = De(E), U = 0; ; ) {
          var Ge = Le(S);
          if (!Ge)
            return v.length = U, v;
          var Lt = He(Ge);
          try {
            v[U] = Lt;
          } catch (zt) {
            try {
              ze(S);
            } finally {
              throw zt;
            }
          }
          U++;
        }
      }
      function c(p, f, v) {
        var x = d(
          f,
          v,
          /*Create*/
          !1
        );
        if (m(x) || !x.delete(p))
          return !1;
        if (x.size === 0) {
          var E = o.get(f);
          m(E) || (E.delete(v), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function It(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, d = i.getOwnMetadata, b = i.getOwnMetadataKeys, C = i.deleteMetadata, O = new k(), $ = {
        isProviderFor: function(c, p) {
          var f = O.get(c);
          return !m(f) && f.has(p) ? !0 : b(c, p).length ? (m(f) && (f = new P(), O.set(c, f)), f.add(p), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: C
      };
      return $;
    }
    function te(i, o, a) {
      var d = L.getProvider(i, o);
      if (!m(d))
        return d;
      if (a) {
        if (L.setProvider(i, o, z))
          return z;
        throw new Error("Illegal state.");
      }
    }
    function jt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function $(c, p, f) {
            this._index = 0, this._keys = c, this._values = p, this._selector = f;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[u] = function() {
            return this;
          }, $.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var p = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: p, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), c;
          }, $.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: c, done: !0 };
          }, $;
        }()
      ), d = (
        /** @class */
        function() {
          function $() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty($.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), $.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, $.prototype.get = function(c) {
            var p = this._find(
              c,
              /*insert*/
              !1
            );
            return p >= 0 ? this._values[p] : void 0;
          }, $.prototype.set = function(c, p) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = p, this;
          }, $.prototype.delete = function(c) {
            var p = this._find(
              c,
              /*insert*/
              !1
            );
            if (p >= 0) {
              for (var f = this._keys.length, v = p + 1; v < f; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, ye(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new a(this._keys, this._values, b);
          }, $.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, $.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[u] = function() {
            return this.entries();
          }, $.prototype._find = function(c, p) {
            if (!ye(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ye(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return d;
      function b($, c) {
        return $;
      }
      function C($, c) {
        return c;
      }
      function O($, c) {
        return [$, c];
      }
    }
    function Dt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new A();
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
    function Ht() {
      var i = 16, o = _.create(), a = d();
      return (
        /** @class */
        function() {
          function c() {
            this._key = d();
          }
          return c.prototype.has = function(p) {
            var f = b(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? _.has(f, this._key) : !1;
          }, c.prototype.get = function(p) {
            var f = b(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? _.get(f, this._key) : void 0;
          }, c.prototype.set = function(p, f) {
            var v = b(
              p,
              /*create*/
              !0
            );
            return v[this._key] = f, this;
          }, c.prototype.delete = function(p) {
            var f = b(
              p,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = d();
          }, c;
        }()
      );
      function d() {
        var c;
        do
          c = "@@WeakMap@@" + $();
        while (_.has(o, c));
        return o[c] = !0, c;
      }
      function b(c, p) {
        if (!n.call(c, a)) {
          if (!p)
            return;
          Object.defineProperty(c, a, { value: _.create() });
        }
        return c[a];
      }
      function C(c, p) {
        for (var f = 0; f < p; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function O(c) {
        if (typeof Uint8Array == "function") {
          var p = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(p) : typeof msCrypto < "u" ? msCrypto.getRandomValues(p) : C(p, c), p;
        }
        return C(new Array(c), c);
      }
      function $() {
        var c = O(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var p = "", f = 0; f < i; ++f) {
          var v = c[f];
          (f === 4 || f === 6 || f === 8) && (p += "-"), v < 16 && (p += "0"), p += v.toString(16).toLowerCase();
        }
        return p;
      }
    }
    function me(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function Bt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Vt(r) {
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
function dt(r) {
  return Vt(r);
}
function ct(r) {
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
        var w;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), y = "adoptedStyleSheets" in Document.prototype, h = this.shadowRoot;
        if (!h) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && y) {
          const _ = new CSSStyleSheet(), g = (w = l.sheet) == null ? void 0 : w.cssRules;
          g && (Array.from(g).forEach((A) => _.insertRule(A.cssText)), h.adoptedStyleSheets = [...h.adoptedStyleSheets, _]);
        } else if (l) {
          const _ = l.cloneNode(!0);
          h.appendChild(_);
        }
        u.forEach((_) => {
          const g = _.cloneNode(!0);
          h.appendChild(g);
        });
      }
    }
    return t;
  };
}
function qt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ft(r) {
  return function(e, t) {
    try {
      qt(r);
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
function B(r) {
  return Ft(r);
}
var D;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(D || (D = {}));
var j;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(j || (j = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = globalThis, xe = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), qe = /* @__PURE__ */ new WeakMap();
let pt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (xe && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = qe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && qe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Zt = (r) => new pt(typeof r == "string" ? r : r + "", void 0, Ee), Yt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new pt(t, r, Ee);
}, Xt = (r, e) => {
  if (xe) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ce.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = xe ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Zt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Jt, defineProperty: Qt, getOwnPropertyDescriptor: Kt, getOwnPropertyNames: er, getOwnPropertySymbols: tr, getPrototypeOf: rr } = Object, W = globalThis, Ze = W.trustedTypes, nr = Ze ? Ze.emptyScript : "", ge = W.reactiveElementPolyfillSupport, ne = (r, e) => r, pe = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? nr : null;
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
} }, Ae = (r, e) => !Jt(r, e), Ye = { attribute: !0, type: String, converter: pe, reflect: !1, useDefault: !1, hasChanged: Ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), W.litPropertyMetadata ?? (W.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ye) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Qt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Kt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const y = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, y, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ye;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ne("elementProperties"))) return;
    const e = rr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ne("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ne("properties"))) {
      const t = this.properties, n = [...er(t), ...tr(t)];
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
    return Xt(e, this.constructor.elementStyles), e;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : pe).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const y = n.getPropertyOptions(s), h = typeof y.converter == "function" ? { fromAttribute: y.converter } : ((l = y.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? y.converter : pe;
      this._$Em = s;
      const w = h.fromAttribute(t, y.type);
      this[s] = w ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? w, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const y = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = y.getPropertyOptions(e)), !((n.hasChanged ?? Ae)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(y._$Eu(e, n)))) return;
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
        const { wrapped: y } = u, h = this[l];
        y !== !0 || this._$AL.has(l) || h === void 0 || this.C(l, void 0, u, h);
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
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[ne("elementProperties")] = /* @__PURE__ */ new Map(), J[ne("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: J }), (W.reactiveElementVersions ?? (W.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = globalThis, Xe = (r) => r, he = ie.trustedTypes, Je = he ? he.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ht = "$lit$", G = `lit$${Math.random().toFixed(9).slice(2)}$`, ft = "?" + G, ir = `<${ft}>`, Z = document, oe = () => Z.createComment(""), ae = (r) => r === null || typeof r != "object" && typeof r != "function", Se = Array.isArray, sr = (r) => Se(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, re = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, V = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, vt = /^(?:script|style|textarea|title)$/i, or = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ar = or(1), Q = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), q = Z.createTreeWalker(Z, 129);
function yt(r, e) {
  if (!Se(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const lr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = re;
  for (let y = 0; y < t; y++) {
    const h = r[y];
    let w, _, g = -1, A = 0;
    for (; A < h.length && (u.lastIndex = A, _ = u.exec(h), _ !== null); ) A = u.lastIndex, u === re ? _[1] === "!--" ? u = Qe : _[1] !== void 0 ? u = Ke : _[2] !== void 0 ? (vt.test(_[2]) && (s = RegExp("</" + _[2], "g")), u = V) : _[3] !== void 0 && (u = V) : u === V ? _[0] === ">" ? (u = s ?? re, g = -1) : _[1] === void 0 ? g = -2 : (g = u.lastIndex - _[2].length, w = _[1], u = _[3] === void 0 ? V : _[3] === '"' ? tt : et) : u === tt || u === et ? u = V : u === Qe || u === Ke ? u = re : (u = V, s = void 0);
    const P = u === V && r[y + 1].startsWith("/>") ? " " : "";
    l += u === re ? h + ir : g >= 0 ? (n.push(w), h.slice(0, g) + ht + h.slice(g) + G + P) : h + G + (g === -2 ? y : P);
  }
  return [yt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class le {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const y = e.length - 1, h = this.parts, [w, _] = lr(e, t);
    if (this.el = le.createElement(w, n), q.currentNode = this.el.content, t === 2 || t === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (s = q.nextNode()) !== null && h.length < y; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const g of s.getAttributeNames()) if (g.endsWith(ht)) {
          const A = _[u++], P = s.getAttribute(g).split(G), k = /([.?@])?(.*)/.exec(A);
          h.push({ type: 1, index: l, name: k[2], strings: P, ctor: k[1] === "." ? dr : k[1] === "?" ? cr : k[1] === "@" ? pr : fe }), s.removeAttribute(g);
        } else g.startsWith(G) && (h.push({ type: 6, index: l }), s.removeAttribute(g));
        if (vt.test(s.tagName)) {
          const g = s.textContent.split(G), A = g.length - 1;
          if (A > 0) {
            s.textContent = he ? he.emptyScript : "";
            for (let P = 0; P < A; P++) s.append(g[P], oe()), q.nextNode(), h.push({ type: 2, index: ++l });
            s.append(g[A], oe());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ft) h.push({ type: 2, index: l });
      else {
        let g = -1;
        for (; (g = s.data.indexOf(G, g + 1)) !== -1; ) h.push({ type: 7, index: l }), g += G.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = Z.createElement("template");
    return n.innerHTML = e, n;
  }
}
function K(r, e, t = r, n) {
  var u, y;
  if (e === Q) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ae(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((y = s == null ? void 0 : s._$AO) == null || y.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = K(r, s._$AS(r, e.values), s, n)), e;
}
class ur {
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? Z).importNode(t, !0);
    q.currentNode = s;
    let l = q.nextNode(), u = 0, y = 0, h = n[0];
    for (; h !== void 0; ) {
      if (u === h.index) {
        let w;
        h.type === 2 ? w = new ue(l, l.nextSibling, this, e) : h.type === 1 ? w = new h.ctor(l, h.name, h.strings, this, e) : h.type === 6 && (w = new hr(l, this, e)), this._$AV.push(w), h = n[++y];
      }
      u !== (h == null ? void 0 : h.index) && (l = q.nextNode(), u++);
    }
    return q.currentNode = Z, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class ue {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = K(this, e, t), ae(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== Q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : sr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && ae(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = le.createElement(yt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new ur(s, this), y = u.u(this.options);
      u.p(t), this.T(y), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new le(e)), t;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new ue(this.O(oe()), this.O(oe()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
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
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = T;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = K(this, e, t, 0), u = !ae(e) || e !== this._$AH && e !== Q, u && (this._$AH = e);
    else {
      const y = e;
      let h, w;
      for (e = l[0], h = 0; h < l.length - 1; h++) w = K(this, y[n + h], t, h), w === Q && (w = this._$AH[h]), u || (u = !ae(w) || w !== this._$AH[h]), w === T ? e = T : e !== T && (e += (w ?? "") + l[h + 1]), this._$AH[h] = w;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class dr extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
class cr extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}
class pr extends fe {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = K(this, e, t, 0) ?? T) === Q) return;
    const n = this._$AH, s = e === T && n !== T || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== T && (n === T || s);
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
    K(this, e);
  }
}
const $e = ie.litHtmlPolyfillSupport;
$e == null || $e(le, ue), (ie.litHtmlVersions ?? (ie.litHtmlVersions = [])).push("3.3.3");
const fr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new ue(e.insertBefore(oe(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F = globalThis;
class se extends J {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = fr(t, this.renderRoot, this.renderOptions);
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
    return Q;
  }
}
var ut;
se._$litElement$ = !0, se.finalized = !0, (ut = F.litElementHydrateSupport) == null || ut.call(F, { LitElement: se });
const we = F.litElementPolyfillSupport;
we == null || we({ LitElement: se });
(F.litElementVersions ?? (F.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vr = { attribute: !0, type: String, converter: pe, reflect: !1, hasChanged: Ae }, yr = (r = vr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(y) {
      const h = e.get.call(this);
      e.set.call(this, y), this.requestUpdate(u, h, r, !0, y);
    }, init(y) {
      return y !== void 0 && this.C(u, void 0, r, y), y;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(y) {
      const h = this[u];
      e.call(this, y), this.requestUpdate(u, h, r, !0, y);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Y(r) {
  return (e, t) => typeof t == "object" ? yr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var br = Object.defineProperty, mr = Object.getOwnPropertyDescriptor, H = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? mr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && br(e, t, s), s;
};
const nt = () => window.zeroThemeManager, it = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:12px;background:rgba(255,255,255,0.95);border:1px solid rgba(148,163,184,0.15);'>",
    "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:600;color:var(--uiv-text-color,#1e293b);'>",
    "<span>{{display:label}}</span>",
    "<span style='color:var(--uiv-primary-color,#6366f1);'>{{display:value}}</span>",
    "</div>",
    "<div style='height:6px;border-radius:3px;background:rgba(148,163,184,0.2);position:relative;margin:8px 0;'>",
    "<div style='position:absolute;left:0;width:50%;height:100%;background:var(--uiv-primary-color,#6366f1);border-radius:3px;'></div>",
    "<div style='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:16px;height:16px;border-radius:50%;background:#ffffff;border:2px solid var(--uiv-primary-color,#6366f1);box-shadow:0 2px 4px rgba(0,0,0,0.1);'></div>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Slider", "Uiverse"]
};
function st(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let N = class extends se {
  constructor() {
    super(...arguments), this.theme = "modern", this.label = "Slider", this.value = 50, this.min = 0, this.max = 100, this.step = 1, this.accentColor = "", this.onInputEvent = "input";
  }
  static getStudioTemplate(r) {
    var l, u, y, h, w, _, g, A, P, k, R;
    if (!r) return it;
    const e = st(r.studio.display.label || "Value"), t = st(r.studio.display.value || ((y = ((l = r.props) == null ? void 0 : l.value) ?? ((u = r.studio.props) == null ? void 0 : u.value)) == null ? void 0 : y.toString()) || "50"), n = (((h = r.props) == null ? void 0 : h.accentColor) ?? ((w = r.studio.props) == null ? void 0 : w.accentColor)) || "var(--uiv-primary-color,#6366f1)";
    let s = 50;
    if (r.studio.props) {
      const L = Number(((_ = r.props) == null ? void 0 : _.value) ?? ((g = r.studio.props) == null ? void 0 : g.value)) || 50, z = Number(((A = r.props) == null ? void 0 : A.min) ?? ((P = r.studio.props) == null ? void 0 : P.min)) || 0, ee = Number(((k = r.props) == null ? void 0 : k.max) ?? ((R = r.studio.props) == null ? void 0 : R.max)) || 100;
      s = Math.max(0, Math.min(100, (L - z) / (ee - z) * 100));
    }
    return {
      ...it,
      templateHtml: [
        "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:12px;background:rgba(255,255,255,0.95);border:1px solid rgba(148,163,184,0.15);'>",
        "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:600;color:var(--uiv-text-color,#1e293b);'>",
        `<span>${e}</span>`,
        `<span style='color:${n};'>${t}</span>`,
        "</div>",
        "<div style='height:6px;border-radius:3px;background:rgba(148,163,184,0.2);position:relative;margin:8px 0;'>",
        `<div style='position:absolute;left:0;width:${s}%;height:100%;background:${n};border-radius:3px;'></div>`,
        `<div style='position:absolute;left:${s}%;top:50%;transform:translate(-50%,-50%);width:16px;height:16px;border-radius:50%;background:#ffffff;border:2px solid ${n};box-shadow:0 2px 4px rgba(0,0,0,0.1);'></div>`,
        "</div>",
        "</div>"
      ].join("")
    };
  }
  handleInput(r) {
    const e = r.target;
    this.value = Number(e.value), this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = nt()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var t;
    const r = (t = nt()) == null ? void 0 : t.getActiveTheme("zero-uiv-themes"), e = this.theme || (r == null ? void 0 : r.id) || "modern";
    return ar`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getComponentStyles("slider") : ""}
                :host {
                    ${this.accentColor ? `--uiv-slider-primary: ${this.accentColor};` : ""}
                }
            </style>
            <div class="slider-wrapper uiv-${r == null ? void 0 : r.id}-theme ${e}">
                <label class="label uiv-${r == null ? void 0 : r.id}-text">${this.label}: ${this.value}</label>
                <input 
                    type="range" 
                    class="uiv-${r == null ? void 0 : r.id}-card"
                    .min="${this.min}" 
                    .max="${this.max}" 
                    .step="${this.step}" 
                    .value="${this.value}"
                    @input="${this.handleInput}"
                    aria-label="${this.label}"
                >
            </div>
        `;
  }
};
N.styles = Yt`
        :host {
            display: block;
            width: 100%;
            margin-bottom: 25px;
            --sl-p: var(--uiv-primary-color, #6366f1);
            --sl-bg: var(--uiv-surface-color, #ffffff);
            --sl-border: var(--uiv-border-color, #e2e8f0);
            --sl-t: var(--uiv-text-color, #1e293b);
            --intensity: var(--uiv-glow-intensity, 1);
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            background: transparent;
            cursor: pointer;
        }

        input[type="range"]:focus {
            outline: none;
        }

        .label {
            display: block;
            margin-bottom: 12px;
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--sl-p);
            letter-spacing: 0.05em;
        }

        /* Webkit Thumb */
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 22px;
            width: 22px;
            border-radius: 50%;
            background: var(--sl-p);
            cursor: pointer;
            margin-top: -9px;
            box-shadow: 0 0 calc(10px * var(--intensity)) var(--sl-p);
            border: 2px solid #fff;
            transition: transform 0.2s ease;
        }

        input[type="range"]:active::-webkit-slider-thumb {
            transform: scale(1.2);
        }

        /* Webkit Track */
        input[type="range"]::-webkit-slider-runnable-track {
            width: 100%;
            height: 6px;
            cursor: pointer;
            background: var(--sl-border);
            border-radius: 3px;
        }

        /* Retro override */
        .retro input[type="range"]::-webkit-slider-thumb {
            border-radius: 0;
            border: 2px solid #000;
            box-shadow: 3px 3px 0px #000;
        }
        .retro input[type="range"]::-webkit-slider-runnable-track {
            border: 2px solid #000;
            background: #fff;
            height: 8px;
        }
    `;
H([
  Y({ type: String }),
  B({
    attributeType: j.PROPERTY,
    uiComponentType: D.DROPDOWN,
    displayLabel: "Theme",
    fieldMappings: "theme",
    optionItems: [
      { label: "Modern", value: "modern" },
      { label: "Cyber", value: "cyber" },
      { label: "Glass", value: "glass" },
      { label: "Retro", value: "retro" },
      { label: "Neon", value: "neon" }
    ]
  })
], N.prototype, "theme", 2);
H([
  Y({ type: String }),
  B({
    attributeType: j.PROPERTY,
    uiComponentType: D.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], N.prototype, "label", 2);
H([
  Y({ type: Number }),
  B({
    attributeType: j.PROPERTY,
    uiComponentType: D.NUMBER_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], N.prototype, "value", 2);
H([
  Y({ type: Number }),
  B({
    attributeType: j.PROPERTY,
    uiComponentType: D.NUMBER_INPUT,
    displayLabel: "Min",
    fieldMappings: "min"
  })
], N.prototype, "min", 2);
H([
  Y({ type: Number }),
  B({
    attributeType: j.PROPERTY,
    uiComponentType: D.NUMBER_INPUT,
    displayLabel: "Max",
    fieldMappings: "max"
  })
], N.prototype, "max", 2);
H([
  Y({ type: Number }),
  B({
    attributeType: j.PROPERTY,
    uiComponentType: D.NUMBER_INPUT,
    displayLabel: "Step",
    fieldMappings: "step"
  })
], N.prototype, "step", 2);
H([
  Y({ type: String }),
  B({
    attributeType: j.PROPERTY,
    uiComponentType: D.COLOR_PICKER,
    displayLabel: "Accent Color Overlay",
    fieldMappings: "accentColor"
  })
], N.prototype, "accentColor", 2);
H([
  B({
    attributeType: j.EVENT,
    eventTrigger: "input",
    displayLabel: "On Input"
  })
], N.prototype, "onInputEvent", 2);
N = H([
  dt({
    name: "zero-uiv-slider",
    version: "1.0.0",
    title: "Unified Slider",
    elementSelector: "zero-uiv-slider",
    group: "Uiverse Sliders",
    iconName: "slider-icon.png"
  }),
  ct()
], N);
var gr = Object.getOwnPropertyDescriptor, _r = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? gr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = u(s) || s);
  return s;
};
const ot = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:6px;background:#ffffff;border:1px solid #e2e8f0;box-shadow:0 1px 3px rgba(0,0,0,0.05);'>",
    "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:600;color:#0f172a;'>",
    "<span>{{display:label}}</span>",
    "<span style='color:#3b82f6;'>{{display:value}}</span>",
    "</div>",
    "<div style='height:4px;border-radius:2px;background:#e2e8f0;position:relative;margin:8px 0;'>",
    "<div style='position:absolute;left:0;width:50%;height:100%;background:#3b82f6;border-radius:2px;'></div>",
    "<div style='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:14px;height:14px;border-radius:50%;background:#ffffff;border:2px solid #3b82f6;box-shadow:0 1px 2px rgba(0,0,0,0.1);'></div>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Modern", "Clean"]
};
function at(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let lt = class extends N {
  static getStudioTemplate(r) {
    var y, h, w, _, g, A, P, k, R;
    if (!r) return ot;
    const e = at(r.studio.display.label || "Modern Slider"), t = at(r.studio.display.value || ((w = ((y = r.props) == null ? void 0 : y.value) ?? ((h = r.studio.props) == null ? void 0 : h.value)) == null ? void 0 : w.toString()) || "50"), n = "var(--uiv-primary-color, #3b82f6)", s = "var(--uiv-surface-color, #ffffff)", l = "var(--uiv-border-color, #e2e8f0)";
    let u = 50;
    if (r.studio.props) {
      const L = Number(((_ = r.props) == null ? void 0 : _.value) ?? ((g = r.studio.props) == null ? void 0 : g.value)) || 50, z = Number(((A = r.props) == null ? void 0 : A.min) ?? ((P = r.studio.props) == null ? void 0 : P.min)) || 0, ee = Number(((k = r.props) == null ? void 0 : k.max) ?? ((R = r.studio.props) == null ? void 0 : R.max)) || 100;
      u = Math.max(0, Math.min(100, (L - z) / (ee - z) * 100));
    }
    return {
      ...ot,
      templateHtml: [
        "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:8px;background:" + s + ";border:1px solid " + l + ";box-shadow:var(--uiv-shadow-depth, 0 1px 3px rgba(0,0,0,0.05));'>",
        "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:600;color:var(--uiv-text-color,#0f172a);'>",
        `<span>${e}</span>`,
        `<span style='color:${n};'>${t}</span>`,
        "</div>",
        "<div style='height:4px;border-radius:2px;background:" + l + ";position:relative;margin:8px 0;'>",
        `<div style='position:absolute;left:0;width:${u}%;height:100%;background:${n};border-radius:2px;'></div>`,
        `<div style='position:absolute;left:${u}%;top:50%;transform:translate(-50%,-50%);width:14px;height:14px;border-radius:50%;background:#ffffff;border:2px solid ${n};box-shadow:0 1px 2px rgba(0,0,0,0.1);'></div>`,
        "</div>",
        "</div>"
      ].join("")
    };
  }
  constructor() {
    super(), this.theme = "modern";
  }
};
lt = _r([
  dt({
    name: "zero-uiv-slider-modern",
    version: "1.0.0",
    title: "Modern Slider (Legacy)",
    elementSelector: "zero-uiv-slider-modern",
    group: "Uiverse Sliders",
    iconName: "slider-icon.png"
  }),
  ct()
], lt);
export {
  lt as ZeroUivSliderModern,
  ot as modernTemplate
};
