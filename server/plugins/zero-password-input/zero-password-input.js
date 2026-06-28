var jt = Object.defineProperty;
var Dt = (r, e, t) => e in r ? jt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ve = (r, e, t) => Dt(r, typeof e != "symbol" ? e + "" : e, t);
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
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(y, E) {
      return function($, _) {
        Object.defineProperty(y, $, { configurable: !0, writable: !0, value: _ }), E && E($, _);
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
    }, _ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Rt(), N = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Nt(), L = typeof WeakMap == "function" ? WeakMap : It(), F = s ? Symbol.for("@reflect-metadata:registry") : void 0, ae = Tt(), xe = Ct(ae);
    function ht(i, o, a, d) {
      if (m(a)) {
        if (!Ie(i))
          throw new TypeError();
        if (!He(o))
          throw new TypeError();
        return $t(i, o);
      } else {
        if (!Ie(i))
          throw new TypeError();
        if (!x(o))
          throw new TypeError();
        if (!x(d) && !m(d) && !Z(d))
          throw new TypeError();
        return Z(d) && (d = void 0), a = j(a), Et(i, o, a, d);
      }
    }
    e("decorate", ht);
    function ft(i, o) {
      function a(d, v) {
        if (!x(d))
          throw new TypeError();
        if (!m(v) && !Ot(v))
          throw new TypeError();
        Te(i, o, d, v);
      }
      return a;
    }
    e("metadata", ft);
    function pt(i, o, a, d) {
      if (!x(a))
        throw new TypeError();
      return m(d) || (d = j(d)), Te(i, o, a, d);
    }
    e("defineMetadata", pt);
    function yt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = j(a)), Pe(i, o, a);
    }
    e("hasMetadata", yt);
    function vt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = j(a)), fe(i, o, a);
    }
    e("hasOwnMetadata", vt);
    function gt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = j(a)), Oe(i, o, a);
    }
    e("getMetadata", gt);
    function mt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = j(a)), Me(i, o, a);
    }
    e("getOwnMetadata", mt);
    function bt(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = j(o)), Ce(i, o);
    }
    e("getMetadataKeys", bt);
    function wt(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = j(o)), ke(i, o);
    }
    e("getOwnMetadataKeys", wt);
    function _t(i, o, a) {
      if (!x(o))
        throw new TypeError();
      if (m(a) || (a = j(a)), !x(o))
        throw new TypeError();
      m(a) || (a = j(a));
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : d.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", _t);
    function $t(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var d = i[a], v = d(o);
        if (!m(v) && !Z(v)) {
          if (!He(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function Et(i, o, a, d) {
      for (var v = i.length - 1; v >= 0; --v) {
        var O = i[v], P = O(o, a, d);
        if (!m(P) && !Z(P)) {
          if (!x(P))
            throw new TypeError();
          d = P;
        }
      }
      return d;
    }
    function Pe(i, o, a) {
      var d = fe(i, o, a);
      if (d)
        return !0;
      var v = ye(o);
      return Z(v) ? !1 : Pe(i, v, a);
    }
    function fe(i, o, a) {
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : Ne(d.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Oe(i, o, a) {
      var d = fe(i, o, a);
      if (d)
        return Me(i, o, a);
      var v = ye(o);
      if (!Z(v))
        return Oe(i, v, a);
    }
    function Me(i, o, a) {
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(d))
        return d.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Te(i, o, a, d) {
      var v = Q(
        a,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, d);
    }
    function Ce(i, o) {
      var a = ke(i, o), d = ye(i);
      if (d === null)
        return a;
      var v = Ce(d, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var O = new N(), P = [], b = 0, c = a; b < c.length; b++) {
        var h = c[b], f = O.has(h);
        f || (O.add(h), P.push(h));
      }
      for (var p = 0, w = v; p < w.length; p++) {
        var h = w[p], f = O.has(h);
        f || (O.add(h), P.push(h));
      }
      return P;
    }
    function ke(i, o) {
      var a = Q(
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
    function Z(i) {
      return i === null;
    }
    function At(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function St(i, o) {
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
      var a = "string", d = Ue(i, l);
      if (d !== void 0) {
        var v = d.call(i, a);
        if (x(v))
          throw new TypeError();
        return v;
      }
      return xt(i);
    }
    function xt(i, o) {
      var a, d;
      {
        var v = i.toString;
        if (le(v)) {
          var d = v.call(i);
          if (!x(d))
            return d;
        }
        var a = i.valueOf;
        if (le(a)) {
          var d = a.call(i);
          if (!x(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ne(i) {
      return !!i;
    }
    function Pt(i) {
      return "" + i;
    }
    function j(i) {
      var o = St(i);
      return At(o) ? o : Pt(o);
    }
    function Ie(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function le(i) {
      return typeof i == "function";
    }
    function He(i) {
      return typeof i == "function";
    }
    function Ot(i) {
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
    function je(i) {
      var o = Ue(i, u);
      if (!le(o))
        throw new TypeError();
      var a = o.call(i);
      if (!x(a))
        throw new TypeError();
      return a;
    }
    function De(i) {
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
    function ye(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || o !== _)
        return o;
      var a = i.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return o;
      var v = d.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Mt() {
      var i;
      !m(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = kt(t.Reflect));
      var o, a, d, v = new L(), O = {
        registerProvider: P,
        getProvider: c,
        setProvider: f
      };
      return O;
      function P(p) {
        if (!Object.isExtensible(O))
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
            d === void 0 && (d = new N()), d.add(p);
            break;
        }
      }
      function b(p, w) {
        if (!m(o)) {
          if (o.isProviderFor(p, w))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(p, w))
              return o;
            if (!m(d))
              for (var A = je(d); ; ) {
                var S = Le(A);
                if (!S)
                  return;
                var I = De(S);
                if (I.isProviderFor(p, w))
                  return ze(A), I;
              }
          }
        }
        if (!m(i) && i.isProviderFor(p, w))
          return i;
      }
      function c(p, w) {
        var A = v.get(p), S;
        return m(A) || (S = A.get(w)), m(S) && (S = b(p, w), m(S) || (m(A) && (A = new T(), v.set(p, A)), A.set(w, S))), S;
      }
      function h(p) {
        if (m(p))
          throw new TypeError();
        return o === p || a === p || !m(d) && d.has(p);
      }
      function f(p, w, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = c(p, w);
        if (S !== A) {
          if (!m(S))
            return !1;
          var I = v.get(p);
          m(I) && (I = new T(), v.set(p, I)), I.set(w, A);
        }
        return !0;
      }
    }
    function Tt() {
      var i;
      return !m(F) && x(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[F]), m(i) && (i = Mt()), !m(F) && x(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ct(i) {
      var o = new L(), a = {
        isProviderFor: function(h, f) {
          var p = o.get(h);
          return m(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: P,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: c
      };
      return ae.registerProvider(a), a;
      function d(h, f, p) {
        var w = o.get(h), A = !1;
        if (m(w)) {
          if (!p)
            return;
          w = new T(), o.set(h, w), A = !0;
        }
        var S = w.get(f);
        if (m(S)) {
          if (!p)
            return;
          if (S = new T(), w.set(f, S), !i.setProvider(h, f, a))
            throw w.delete(f), A && o.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, p) {
        var w = d(
          f,
          p,
          /*Create*/
          !1
        );
        return m(w) ? !1 : Ne(w.has(h));
      }
      function O(h, f, p) {
        var w = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (!m(w))
          return w.get(h);
      }
      function P(h, f, p, w) {
        var A = d(
          p,
          w,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function b(h, f) {
        var p = [], w = d(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(w))
          return p;
        for (var A = w.keys(), S = je(A), I = 0; ; ) {
          var Be = Le(S);
          if (!Be)
            return p.length = I, p;
          var Ht = De(Be);
          try {
            p[I] = Ht;
          } catch (Ut) {
            try {
              ze(S);
            } finally {
              throw Ut;
            }
          }
          I++;
        }
      }
      function c(h, f, p) {
        var w = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (m(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var A = o.get(f);
          m(A) || (A.delete(p), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function kt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, d = i.getOwnMetadata, v = i.getOwnMetadataKeys, O = i.deleteMetadata, P = new L(), b = {
        isProviderFor: function(c, h) {
          var f = P.get(c);
          return !m(f) && f.has(h) ? !0 : v(c, h).length ? (m(f) && (f = new N(), P.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: O
      };
      return b;
    }
    function Q(i, o, a) {
      var d = ae.getProvider(i, o);
      if (!m(d))
        return d;
      if (a) {
        if (ae.setProvider(i, o, xe))
          return xe;
        throw new Error("Illegal state.");
      }
    }
    function Rt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function b(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), c;
          }, b.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: c, done: !0 };
          }, b;
        }()
      ), d = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, b.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, b.prototype.delete = function(c) {
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
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, P);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(c, h) {
            if (!pe(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pe(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return d;
      function v(b, c) {
        return b;
      }
      function O(b, c) {
        return c;
      }
      function P(b, c) {
        return [b, c];
      }
    }
    function Nt() {
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
    function It() {
      var i = 16, o = $.create(), a = d();
      return (
        /** @class */
        function() {
          function c() {
            this._key = d();
          }
          return c.prototype.has = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var p = v(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, c.prototype.delete = function(h) {
            var f = v(
              h,
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
          c = "@@WeakMap@@" + b();
        while ($.has(o, c));
        return o[c] = !0, c;
      }
      function v(c, h) {
        if (!n.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: $.create() });
        }
        return c[a];
      }
      function O(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function P(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : O(h, c), h;
        }
        return O(new Array(c), c);
      }
      function b() {
        var c = P(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ve(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(We || (We = {}));
function Lt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function zt(r) {
  return function(e) {
    if (Lt(r)) {
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
function Vt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ve(this, "_stylesApplied", !1);
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
          const $ = new CSSStyleSheet(), _ = (E = l.sheet) == null ? void 0 : E.cssRules;
          _ && (Array.from(_).forEach((T) => $.insertRule(T.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          y.appendChild($);
        }
        u.forEach(($) => {
          const _ = $.cloneNode(!0);
          y.appendChild(_);
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
function Wt(r) {
  return function(e, t) {
    try {
      Gt(r);
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
function U(r) {
  return Wt(r);
}
var H;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(H || (H = {}));
var k;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(k || (k = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, $e = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), qe = /* @__PURE__ */ new WeakMap();
let at = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if ($e && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = qe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && qe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const qt = (r) => new at(typeof r == "string" ? r : r + "", void 0, Ee), Ft = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new at(t, r, Ee);
}, Zt = (r, e) => {
  if ($e) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ue.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = $e ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return qt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Yt, getOwnPropertyDescriptor: Jt, getOwnPropertyNames: Qt, getOwnPropertySymbols: Kt, getPrototypeOf: er } = Object, B = globalThis, Ze = B.trustedTypes, tr = Ze ? Ze.emptyScript : "", ge = B.reactiveElementPolyfillSupport, ee = (r, e) => r, de = { toAttribute(r, e) {
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
} }, Ae = (r, e) => !Xt(r, e), Xe = { attribute: !0, type: String, converter: de, reflect: !1, useDefault: !1, hasChanged: Ae };
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
      s !== void 0 && Yt(this.prototype, e, s);
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
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = er(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
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
    return Zt(e, this.constructor.elementStyles), e;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : de).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const g = n.getPropertyOptions(s), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : de;
      this._$Em = s;
      const E = y.fromAttribute(t, g.type);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[ee("elementProperties")] = /* @__PURE__ */ new Map(), X[ee("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: X }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Ye = (r) => r, ce = te.trustedTypes, Je = ce ? ce.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, lt = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + z, rr = `<${ut}>`, q = document, ne = () => q.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Se = Array.isArray, nr = (r) => Se(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, V = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, dt = /^(?:script|style|textarea|title)$/i, ir = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), be = ir(1), Y = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), G = q.createTreeWalker(q, 129);
function ct(r, e) {
  if (!Se(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let g = 0; g < t; g++) {
    const y = r[g];
    let E, $, _ = -1, T = 0;
    for (; T < y.length && (u.lastIndex = T, $ = u.exec(y), $ !== null); ) T = u.lastIndex, u === K ? $[1] === "!--" ? u = Qe : $[1] !== void 0 ? u = Ke : $[2] !== void 0 ? (dt.test($[2]) && (s = RegExp("</" + $[2], "g")), u = V) : $[3] !== void 0 && (u = V) : u === V ? $[0] === ">" ? (u = s ?? K, _ = -1) : $[1] === void 0 ? _ = -2 : (_ = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? V : $[3] === '"' ? tt : et) : u === tt || u === et ? u = V : u === Qe || u === Ke ? u = K : (u = V, s = void 0);
    const N = u === V && r[g + 1].startsWith("/>") ? " " : "";
    l += u === K ? y + rr : _ >= 0 ? (n.push(E), y.slice(0, _) + lt + y.slice(_) + z + N) : y + z + (_ === -2 ? g : N);
  }
  return [ct(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class se {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const g = e.length - 1, y = this.parts, [E, $] = sr(e, t);
    if (this.el = se.createElement(E, n), G.currentNode = this.el.content, t === 2 || t === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (s = G.nextNode()) !== null && y.length < g; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const _ of s.getAttributeNames()) if (_.endsWith(lt)) {
          const T = $[u++], N = s.getAttribute(_).split(z), L = /([.?@])?(.*)/.exec(T);
          y.push({ type: 1, index: l, name: L[2], strings: N, ctor: L[1] === "." ? ar : L[1] === "?" ? lr : L[1] === "@" ? ur : he }), s.removeAttribute(_);
        } else _.startsWith(z) && (y.push({ type: 6, index: l }), s.removeAttribute(_));
        if (dt.test(s.tagName)) {
          const _ = s.textContent.split(z), T = _.length - 1;
          if (T > 0) {
            s.textContent = ce ? ce.emptyScript : "";
            for (let N = 0; N < T; N++) s.append(_[N], ne()), G.nextNode(), y.push({ type: 2, index: ++l });
            s.append(_[T], ne());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ut) y.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = s.data.indexOf(z, _ + 1)) !== -1; ) y.push({ type: 7, index: l }), _ += z.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = q.createElement("template");
    return n.innerHTML = e, n;
  }
}
function J(r, e, t = r, n) {
  var u, g;
  if (e === Y) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ie(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((g = s == null ? void 0 : s._$AO) == null || g.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = J(r, s._$AS(r, e.values), s, n)), e;
}
class or {
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? q).importNode(t, !0);
    G.currentNode = s;
    let l = G.nextNode(), u = 0, g = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new oe(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new dr(l, this, e)), this._$AV.push(E), y = n[++g];
      }
      u !== (y == null ? void 0 : y.index) && (l = G.nextNode(), u++);
    }
    return G.currentNode = q, s;
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
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = J(this, e, t), ie(e) ? e === M || e == null || e === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : e !== this._$AH && e !== Y && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== M && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(q.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = se.createElement(ct(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new or(s, this), g = u.u(this.options);
      u.p(t), this.T(g), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
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
class he {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = M;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = J(this, e, t, 0), u = !ie(e) || e !== this._$AH && e !== Y, u && (this._$AH = e);
    else {
      const g = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = J(this, g[n + y], t, y), E === Y && (E = this._$AH[y]), u || (u = !ie(E) || E !== this._$AH[y]), E === M ? e = M : e !== M && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === M ? void 0 : e;
  }
}
class lr extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== M);
  }
}
class ur extends he {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? M) === Y) return;
    const n = this._$AH, s = e === M && n !== M || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== M && (n === M || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class dr {
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
const we = te.litHtmlPolyfillSupport;
we == null || we(se, oe), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
const cr = (r, e, t) => {
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
const W = globalThis;
class re extends X {
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
    return Y;
  }
}
var ot;
re._$litElement$ = !0, re.finalized = !0, (ot = W.litElementHydrateSupport) == null || ot.call(W, { LitElement: re });
const _e = W.litElementPolyfillSupport;
_e == null || _e({ LitElement: re });
(W.litElementVersions ?? (W.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ae }, fr = (r = hr, e, t) => {
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
function D(r) {
  return (e, t) => typeof t == "object" ? fr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var pr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, R = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? yr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && pr(e, t, s), s;
};
const nt = () => window.zeroThemeManager, it = {
  kind: "generic",
  templateHtml: [
    "<div style='display:grid;gap:8px;padding:12px;border-radius:14px;border:1px solid rgba(148,163,184,0.18);background:rgba(255,255,255,0.96);'>",
    "<label style='font-size:0.78rem;font-weight:700;color:#334155;'>{{display:label}}</label>",
    "<div style='display:flex;align-items:center;border:1px solid rgba(148,163,184,0.28);border-radius:10px;padding:11px 14px;background:#fff;color:#94a3b8;'>{{display:placeholder}}<span style='margin-left:auto;color:#64748b;'>•••</span></div>",
    "<div style='display:flex;gap:8px;flex-wrap:wrap;'>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(219,234,254,0.85);color:#1d4ed8;font-size:0.72rem;font-weight:700;'>toggle: {{display:showToggle}}</span>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(255,247,237,0.95);color:#9a3412;font-size:0.72rem;font-weight:700;'>strength: {{display:showStrengthMeter}}</span>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Input", "Password"]
};
let C = class extends re {
  constructor() {
    super(...arguments), this.value = "", this.label = "Password", this.placeholder = "Enter password", this.required = !1, this.disabled = !1, this.showToggle = !0, this.showStrengthMeter = !1, this.errorMessage = "", this.showError = !1, this.showPassword = !1;
  }
  static getStudioTemplate(r) {
    var s, l;
    if (!r) return it;
    const e = st(r.studio.display.label || "Password"), t = st(r.studio.display.placeholder || "Enter password"), n = !!(((s = r.props) == null ? void 0 : s.showToggle) ?? ((l = r.studio.props) == null ? void 0 : l.showToggle));
    return {
      ...it,
      templateHtml: [
        "<div style='display:block;width:100%;font-family:inherit;'>",
        `<label style='display:block;margin-bottom:8px;font-size:14px;font-weight:500;color:var(--uiv-text-color,#333);'>${e}</label>`,
        "<div style='position:relative;display:flex;align-items:center;'>",
        `<div style='width:100%;padding:12px 16px;border:1px solid var(--uiv-border-color,#ddd);border-radius:8px;font-size:14px;background:var(--uiv-surface-color,#fff);color:var(--uiv-text-muted,#94a3b8);box-shadow:var(--uiv-shadow-depth,none);'>${t}</div>`,
        n ? "<span style='position:absolute;right:12px;opacity:0.6;'>👁️</span>" : "",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  getPasswordStrength() {
    const r = this.value;
    let e = 0;
    return r.length >= 8 && e++, /[a-z]/.test(r) && e++, /[A-Z]/.test(r) && e++, /[0-9]/.test(r) && e++, /[^A-Za-z0-9]/.test(r) && e++, e <= 2 ? { strength: "weak", width: 33 } : e <= 4 ? { strength: "medium", width: 66 } : { strength: "strong", width: 100 };
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  handleInput(r) {
    const e = r.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(r) {
    const e = r.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("change", {
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
    const r = (t = nt()) == null ? void 0 : t.getActiveTheme("zero-standard-themes"), e = this.getPasswordStrength();
    return be`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getComponentStyles("input") : ""}
            </style>
            <div class="form-field uiv-${r == null ? void 0 : r.id}-theme">
                <label for="password-input" class="uiv-${r == null ? void 0 : r.id}-text">${this.label}</label>
                <div class="password-container">
                    <input 
                        id="password-input"
                        type="${this.showPassword ? "text" : "password"}" 
                        class="mat-mdc-input-element uiv-${r == null ? void 0 : r.id}-card uiv-${r == null ? void 0 : r.id}-scan ${this.showError ? "error" : ""}"
                        .value="${this.value}" 
                        placeholder="${this.placeholder}"
                        ?required="${this.required}"
                        ?disabled="${this.disabled}"
                        @input="${this.handleInput}"
                        @change="${this.handleChange}"
                    />
                    ${this.showToggle ? be`
                        <button 
                            type="button"
                            class="toggle-button uiv-${r == null ? void 0 : r.id}-text"
                            ?disabled="${this.disabled}"
                            @click="${this.togglePasswordVisibility}"
                        >
                            ${this.showPassword ? "🙈" : "👁️"}
                        </button>
                    ` : ""}
                </div>
                ${this.showStrengthMeter && this.value ? be`
                    <div class="strength-meter">
                        <div class="strength-bar strength-${e.strength}" 
                             style="width: ${e.width}%; background-color: var(--uiv-${e.strength === "weak" ? "error" : e.strength === "medium" ? "warning" : "primary"}-color)"></div>
                    </div>
                ` : ""}
                <div class="error-message uiv-${r == null ? void 0 : r.id}-text ${this.showError ? "show" : ""}" style="color: var(--uiv-error-color, #f44336)">
                    ${this.errorMessage}
                </div>
            </div>
        `;
  }
};
C.styles = Ft`
        :host {
            display: block;
            width: 100%;
        }

        .form-field {
            margin-bottom: var(--spacing-lg, 20px);
        }

        .form-field label {
            display: block;
            margin-bottom: var(--spacing-xs, 6px);
            font-size: var(--font-size-base, 14px);
            color: var(--text-primary, #333);
            font-weight: 500;
        }

        .password-container {
            position: relative;
            display: flex;
            align-items: center;
        }

        input.mat-mdc-input-element {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            padding-right: 40px;
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);            font-size: var(--font-size-base, 14px);
            background-color: var(--background-primary, #fff);
            color: var(--text-primary, #333);
            transition: border-color 0.2s, box-shadow 0.2s;
            min-height: var(--input-height, 36px);
            box-sizing: border-box;
            font-family: var(--font-family, 'Roboto', sans-serif);
        }

        input.mat-mdc-input-element::placeholder {
            color: var(--text-secondary, #666);
        }        input.mat-mdc-input-element:hover {
            border-color: var(--primary-light, #6c63ff);
            background: var(--primary-background-hover, rgba(108, 99, 255, 0.02));
        }

        input.mat-mdc-input-element:focus {
            outline: none;
            background: var(--background-primary, #fff);
            border-color: var(--primary-color, #6c63ff);
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        input.mat-mdc-input-element:disabled {
            background-color: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #999);
            cursor: not-allowed;
        }

        .toggle-button {
            position: absolute;
            right: 8px;
            background: none;
            border: none;
            cursor: pointer;            color: var(--text-secondary, #666);
            font-size: var(--icon-size-sm, 16px);
            padding: var(--spacing-xs, 4px);
            border-radius: var(--border-radius-xs, 2px);
            transition: color 0.2s;
        }

        .toggle-button:hover {
            color: var(--primary-color, #6c63ff);
        }

        .toggle-button:disabled {
            cursor: not-allowed;
            color: var(--text-disabled, #ccc);
        }

        .error-message {
            color: var(--error-color, #f44336);
            font-size: var(--font-size-sm, 12px);
            margin-top: var(--spacing-xs, 4px);
            display: none;
        }

        .error-message.show {
            display: block;
        }

        input.mat-mdc-input-element.error {
            border-color: var(--error-color, #f44336);
        }

        input.mat-mdc-input-element.error:focus {
            box-shadow: 0 0 0 2px var(--error-light, rgba(244, 67, 54, 0.2));
        }        .strength-meter {
            margin-top: var(--spacing-xs, 4px);
            height: 4px;
            background-color: var(--background-secondary, #f5f5f5);
            border-radius: var(--border-radius-xs, 2px);
            overflow: hidden;
        }

        .strength-bar {
            height: 100%;
            transition: width 0.3s, background-color 0.3s;
            border-radius: var(--border-radius-xs, 2px);
        }

        .strength-weak { background-color: var(--error-color, #f44336); }
        .strength-medium { background-color: var(--warning-color, #ff9800); }
        .strength-strong { background-color: var(--success-color, #4caf50); }
    `;
R([
  D({ type: String }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: H.PASSWORD_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], C.prototype, "value", 2);
R([
  D({ type: String }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], C.prototype, "label", 2);
R([
  D({ type: String }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], C.prototype, "placeholder", 2);
R([
  D({ type: Boolean }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: H.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], C.prototype, "required", 2);
R([
  D({ type: Boolean }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: H.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], C.prototype, "disabled", 2);
R([
  D({ type: Boolean }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: H.CHECKBOX,
    displayLabel: "Show Toggle Button",
    fieldMappings: "showToggle"
  })
], C.prototype, "showToggle", 2);
R([
  D({ type: Boolean }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: H.CHECKBOX,
    displayLabel: "Show Strength Meter",
    fieldMappings: "showStrengthMeter"
  })
], C.prototype, "showStrengthMeter", 2);
R([
  D({ type: String }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], C.prototype, "errorMessage", 2);
R([
  D({ type: Boolean }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: H.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], C.prototype, "showError", 2);
R([
  D({ type: Boolean })
], C.prototype, "showPassword", 2);
R([
  U({
    attributeType: k.EVENT,
    displayLabel: "On Input",
    eventTrigger: "input"
  })
], C.prototype, "handleInput", 1);
R([
  U({
    attributeType: k.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], C.prototype, "handleChange", 1);
C = R([
  Bt({
    name: "zero-password-input",
    version: "1.0.0",
    title: "Password Input",
    elementSelector: "zero-password-input",
    group: "Form Controls",
    iconName: "password-input-icon.png"
  }),
  Vt()
], C);
function st(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
export {
  C as ZeroPasswordInput,
  it as studioTemplate
};
