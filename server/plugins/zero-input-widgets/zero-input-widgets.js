var kt = Object.defineProperty;
var Nt = (r, e, t) => e in r ? kt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Be = (r, e, t) => Nt(r, typeof e != "symbol" ? e + "" : e, t);
var Fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ge;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Fe == "object" ? Fe : typeof self == "object" ? self : typeof this == "object" ? this : _(), n = a(r);
    typeof t.Reflect < "u" && (n = a(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function a(m, $) {
      return function(A, w) {
        Object.defineProperty(m, A, { configurable: !0, writable: !0, value: w }), $ && $(A, w);
      };
    }
    function u() {
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
    function _() {
      return u() || l();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", u = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", _ = typeof Object.create == "function", m = { __proto__: [] } instanceof Array, $ = !_ && !m, A = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: _ ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : m ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
      },
      has: $ ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: $ ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, w = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ot(), D = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Tt(), L = typeof WeakMap == "function" ? WeakMap : Mt(), V = a ? Symbol.for("@reflect-metadata:registry") : void 0, ae = St(), Se = xt(ae);
    function ot(i, s, o, c) {
      if (v(o)) {
        if (!Ne(i))
          throw new TypeError();
        if (!De(s))
          throw new TypeError();
        return vt(i, s);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!P(s))
          throw new TypeError();
        if (!P(c) && !v(c) && !Y(c))
          throw new TypeError();
        return Y(c) && (c = void 0), o = H(o), gt(i, s, o, c);
      }
    }
    e("decorate", ot);
    function lt(i, s) {
      function o(c, y) {
        if (!P(c))
          throw new TypeError();
        if (!v(y) && !At(y))
          throw new TypeError();
        Te(i, s, c, y);
      }
      return o;
    }
    e("metadata", lt);
    function ut(i, s, o, c) {
      if (!P(o))
        throw new TypeError();
      return v(c) || (c = H(c)), Te(i, s, o, c);
    }
    e("defineMetadata", ut);
    function ct(i, s, o) {
      if (!P(s))
        throw new TypeError();
      return v(o) || (o = H(o)), xe(i, s, o);
    }
    e("hasMetadata", ct);
    function dt(i, s, o) {
      if (!P(s))
        throw new TypeError();
      return v(o) || (o = H(o)), pe(i, s, o);
    }
    e("hasOwnMetadata", dt);
    function ht(i, s, o) {
      if (!P(s))
        throw new TypeError();
      return v(o) || (o = H(o)), Pe(i, s, o);
    }
    e("getMetadata", ht);
    function pt(i, s, o) {
      if (!P(s))
        throw new TypeError();
      return v(o) || (o = H(o)), Oe(i, s, o);
    }
    e("getOwnMetadata", pt);
    function ft(i, s) {
      if (!P(i))
        throw new TypeError();
      return v(s) || (s = H(s)), Me(i, s);
    }
    e("getMetadataKeys", ft);
    function mt(i, s) {
      if (!P(i))
        throw new TypeError();
      return v(s) || (s = H(s)), Re(i, s);
    }
    e("getOwnMetadataKeys", mt);
    function yt(i, s, o) {
      if (!P(s))
        throw new TypeError();
      if (v(o) || (o = H(o)), !P(s))
        throw new TypeError();
      v(o) || (o = H(o));
      var c = J(
        s,
        o,
        /*Create*/
        !1
      );
      return v(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, o);
    }
    e("deleteMetadata", yt);
    function vt(i, s) {
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o], y = c(s);
        if (!v(y) && !Y(y)) {
          if (!De(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function gt(i, s, o, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var S = i[y], O = S(s, o, c);
        if (!v(O) && !Y(O)) {
          if (!P(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function xe(i, s, o) {
      var c = pe(i, s, o);
      if (c)
        return !0;
      var y = me(s);
      return Y(y) ? !1 : xe(i, y, o);
    }
    function pe(i, s, o) {
      var c = J(
        s,
        o,
        /*Create*/
        !1
      );
      return v(c) ? !1 : ke(c.OrdinaryHasOwnMetadata(i, s, o));
    }
    function Pe(i, s, o) {
      var c = pe(i, s, o);
      if (c)
        return Oe(i, s, o);
      var y = me(s);
      if (!Y(y))
        return Pe(i, y, o);
    }
    function Oe(i, s, o) {
      var c = J(
        s,
        o,
        /*Create*/
        !1
      );
      if (!v(c))
        return c.OrdinaryGetOwnMetadata(i, s, o);
    }
    function Te(i, s, o, c) {
      var y = J(
        o,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, o, c);
    }
    function Me(i, s) {
      var o = Re(i, s), c = me(i);
      if (c === null)
        return o;
      var y = Me(c, s);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var S = new D(), O = [], g = 0, d = o; g < d.length; g++) {
        var h = d[g], p = S.has(h);
        p || (S.add(h), O.push(h));
      }
      for (var f = 0, b = y; f < b.length; f++) {
        var h = b[f], p = S.has(h);
        p || (S.add(h), O.push(h));
      }
      return O;
    }
    function Re(i, s) {
      var o = J(
        i,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Ce(i) {
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
    function v(i) {
      return i === void 0;
    }
    function Y(i) {
      return i === null;
    }
    function bt(i) {
      return typeof i == "symbol";
    }
    function P(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function _t(i, s) {
      switch (Ce(i)) {
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
      var o = "string", c = Ie(i, u);
      if (c !== void 0) {
        var y = c.call(i, o);
        if (P(y))
          throw new TypeError();
        return y;
      }
      return wt(i);
    }
    function wt(i, s) {
      var o, c, y;
      {
        var S = i.toString;
        if (oe(S)) {
          var c = S.call(i);
          if (!P(c))
            return c;
        }
        var o = i.valueOf;
        if (oe(o)) {
          var c = o.call(i);
          if (!P(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function ke(i) {
      return !!i;
    }
    function $t(i) {
      return "" + i;
    }
    function H(i) {
      var s = _t(i);
      return bt(s) ? s : $t(s);
    }
    function Ne(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function oe(i) {
      return typeof i == "function";
    }
    function De(i) {
      return typeof i == "function";
    }
    function At(i) {
      switch (Ce(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function fe(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Ie(i, s) {
      var o = i[s];
      if (o != null) {
        if (!oe(o))
          throw new TypeError();
        return o;
      }
    }
    function Ue(i) {
      var s = Ie(i, l);
      if (!oe(s))
        throw new TypeError();
      var o = s.call(i);
      if (!P(o))
        throw new TypeError();
      return o;
    }
    function je(i) {
      return i.value;
    }
    function He(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Le(i) {
      var s = i.return;
      s && s.call(i);
    }
    function me(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || s !== w)
        return s;
      var o = i.prototype, c = o && Object.getPrototypeOf(o);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function Et() {
      var i;
      !v(V) && typeof t.Reflect < "u" && !(V in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Pt(t.Reflect));
      var s, o, c, y = new L(), S = {
        registerProvider: O,
        getProvider: d,
        setProvider: p
      };
      return S;
      function O(f) {
        if (!Object.isExtensible(S))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === f:
            break;
          case v(s):
            s = f;
            break;
          case s === f:
            break;
          case v(o):
            o = f;
            break;
          case o === f:
            break;
          default:
            c === void 0 && (c = new D()), c.add(f);
            break;
        }
      }
      function g(f, b) {
        if (!v(s)) {
          if (s.isProviderFor(f, b))
            return s;
          if (!v(o)) {
            if (o.isProviderFor(f, b))
              return s;
            if (!v(c))
              for (var E = Ue(c); ; ) {
                var x = He(E);
                if (!x)
                  return;
                var U = je(x);
                if (U.isProviderFor(f, b))
                  return Le(E), U;
              }
          }
        }
        if (!v(i) && i.isProviderFor(f, b))
          return i;
      }
      function d(f, b) {
        var E = y.get(f), x;
        return v(E) || (x = E.get(b)), v(x) && (x = g(f, b), v(x) || (v(E) && (E = new M(), y.set(f, E)), E.set(b, x))), x;
      }
      function h(f) {
        if (v(f))
          throw new TypeError();
        return s === f || o === f || !v(c) && c.has(f);
      }
      function p(f, b, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var x = d(f, b);
        if (x !== E) {
          if (!v(x))
            return !1;
          var U = y.get(f);
          v(U) && (U = new M(), y.set(f, U)), U.set(b, E);
        }
        return !0;
      }
    }
    function St() {
      var i;
      return !v(V) && P(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[V]), v(i) && (i = Et()), !v(V) && P(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, V, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function xt(i) {
      var s = new L(), o = {
        isProviderFor: function(h, p) {
          var f = s.get(h);
          return v(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: S,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: d
      };
      return ae.registerProvider(o), o;
      function c(h, p, f) {
        var b = s.get(h), E = !1;
        if (v(b)) {
          if (!f)
            return;
          b = new M(), s.set(h, b), E = !0;
        }
        var x = b.get(p);
        if (v(x)) {
          if (!f)
            return;
          if (x = new M(), b.set(p, x), !i.setProvider(h, p, o))
            throw b.delete(p), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return x;
      }
      function y(h, p, f) {
        var b = c(
          p,
          f,
          /*Create*/
          !1
        );
        return v(b) ? !1 : ke(b.has(h));
      }
      function S(h, p, f) {
        var b = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (!v(b))
          return b.get(h);
      }
      function O(h, p, f, b) {
        var E = c(
          f,
          b,
          /*Create*/
          !0
        );
        E.set(h, p);
      }
      function g(h, p) {
        var f = [], b = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (v(b))
          return f;
        for (var E = b.keys(), x = Ue(E), U = 0; ; ) {
          var ze = He(x);
          if (!ze)
            return f.length = U, f;
          var Rt = je(ze);
          try {
            f[U] = Rt;
          } catch (Ct) {
            try {
              Le(x);
            } finally {
              throw Ct;
            }
          }
          U++;
        }
      }
      function d(h, p, f) {
        var b = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (v(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var E = s.get(p);
          v(E) || (E.delete(f), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Pt(i) {
      var s = i.defineMetadata, o = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, S = i.deleteMetadata, O = new L(), g = {
        isProviderFor: function(d, h) {
          var p = O.get(d);
          return !v(p) && p.has(h) ? !0 : y(d, h).length ? (v(p) && (p = new D(), O.set(d, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: S
      };
      return g;
    }
    function J(i, s, o) {
      var c = ae.getProvider(i, s);
      if (!v(c))
        return c;
      if (o) {
        if (ae.setProvider(i, s, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function Ot() {
      var i = {}, s = [], o = (
        /** @class */
        function() {
          function g(d, h, p) {
            this._index = 0, this._keys = d, this._values = h, this._selector = p;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[l] = function() {
            return this;
          }, g.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, g.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
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
            var p = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, g.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, f = h + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, fe(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new o(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new o(this._keys, this._values, S);
          }, g.prototype.entries = function() {
            return new o(this._keys, this._values, O);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[l] = function() {
            return this.entries();
          }, g.prototype._find = function(d, h) {
            if (!fe(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (fe(this._keys[p], d)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return c;
      function y(g, d) {
        return g;
      }
      function S(g, d) {
        return d;
      }
      function O(g, d) {
        return [g, d];
      }
    }
    function Tt() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new M();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(o) {
            return this._map.has(o);
          }, s.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, s.prototype.delete = function(o) {
            return this._map.delete(o);
          }, s.prototype.clear = function() {
            this._map.clear();
          }, s.prototype.keys = function() {
            return this._map.keys();
          }, s.prototype.values = function() {
            return this._map.keys();
          }, s.prototype.entries = function() {
            return this._map.entries();
          }, s.prototype["@@iterator"] = function() {
            return this.keys();
          }, s.prototype[l] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function Mt() {
      var i = 16, s = A.create(), o = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? A.has(p, this._key) : !1;
          }, d.prototype.get = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? A.get(p, this._key) : void 0;
          }, d.prototype.set = function(h, p) {
            var f = y(
              h,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
          }, d.prototype.delete = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + g();
        while (A.has(s, d));
        return s[d] = !0, d;
      }
      function y(d, h) {
        if (!n.call(d, o)) {
          if (!h)
            return;
          Object.defineProperty(d, o, { value: A.create() });
        }
        return d[o];
      }
      function S(d, h) {
        for (var p = 0; p < h; ++p)
          d[p] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : S(h, d), h;
        }
        return S(new Array(d), d);
      }
      function g() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var f = d[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), f < 16 && (h += "0"), h += f.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ye(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ge || (Ge = {}));
function Dt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function It(r) {
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
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${r.elementSelector}-${r.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Ut(r) {
  return It(r);
}
function jt(r) {
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
      update(u) {
        try {
          super.update(u);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var m;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), _ = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && _) {
          const $ = new CSSStyleSheet(), A = (m = u.sheet) == null ? void 0 : m.cssRules;
          A && (Array.from(A).forEach((w) => $.insertRule(w.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
        } else if (u) {
          const $ = u.cloneNode(!0);
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
function Ht(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Lt(r) {
  return function(e, t) {
    try {
      Ht(r);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (r.fieldMappings = r.fieldMappings ?? t), n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function I(r) {
  return Lt(r);
}
var k;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown";
})(k || (k = {}));
var C;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(C || (C = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, we = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), We = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = We.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && We.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (r) => new rt(typeof r == "string" ? r : r + "", void 0, $e), Bt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, a, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + r[u + 1], r[0]);
  return new rt(t, r, $e);
}, Ft = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), a = ue.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = t.cssText, r.appendChild(n);
  }
}, Ve = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return zt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gt, defineProperty: Wt, getOwnPropertyDescriptor: Vt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Zt, getPrototypeOf: qt } = Object, B = globalThis, Ye = B.trustedTypes, Xt = Ye ? Ye.emptyScript : "", ve = B.reactiveElementPolyfillSupport, K = (r, e) => r, ce = { toAttribute(r, e) {
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
} }, Ae = (r, e) => !Gt(r, e), Ze = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class Z extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), a = this.getPropertyDescriptor(e, n, t);
      a !== void 0 && Wt(this.prototype, e, a);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: a, set: u } = Vt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return a == null ? void 0 : a.call(this);
    }, set(l) {
      const _ = a == null ? void 0 : a.call(this);
      u.call(this, l), this.requestUpdate(e, _, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(K("elementProperties"))) return;
    const e = qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(K("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(K("properties"))) {
      const t = this.properties, n = [...Yt(t), ...Zt(t)];
      for (const a of n) this.createProperty(a, t[a]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, a] of t) this.elementProperties.set(n, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const a = this._$Eu(t, n);
      a !== void 0 && this._$Eh.set(a, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const a of n) t.unshift(Ve(a));
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
    return Ft(e, this.constructor.elementStyles), e;
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
    var u;
    const n = this.constructor.elementProperties.get(e), a = this.constructor._$Eu(e, n);
    if (a !== void 0 && n.reflect === !0) {
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : ce).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(a) : this.setAttribute(a, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const n = this.constructor, a = n._$Eh.get(e);
    if (a !== void 0 && this._$Em !== a) {
      const l = n.getPropertyOptions(a), _ = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : ce;
      this._$Em = a, this[a] = _.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? Ae)(this[e], t)) return;
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
        for (const [u, l] of this._$Ep) this[u] = l;
        this._$Ep = void 0;
      }
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [u, l] of a) l.wrapped !== !0 || this._$AL.has(u) || this[u] === void 0 || this.P(u, this[u], l);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((a) => {
        var u;
        return (u = a.hostUpdate) == null ? void 0 : u.call(a);
      }), this.update(t)) : this._$EU();
    } catch (a) {
      throw e = !1, this._$EU(), a;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var a;
      return (a = n.hostUpdated) == null ? void 0 : a.call(n);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[K("elementProperties")] = /* @__PURE__ */ new Map(), Z[K("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: Z }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, de = ee.trustedTypes, qe = de ? de.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, it = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, nt = "?" + z, Jt = `<${nt}>`, W = document, re = () => W.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Ee = Array.isArray, Qt = (r) => Ee(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ge = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Xe = /-->/g, Je = />/g, F = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, Ke = /"/g, st = /^(?:script|style|textarea|title)$/i, Kt = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), le = Kt(1), q = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), G = W.createTreeWalker(W, 129);
function at(r, e) {
  if (!Ee(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return qe !== void 0 ? qe.createHTML(e) : e;
}
const er = (r, e) => {
  const t = r.length - 1, n = [];
  let a, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Q;
  for (let _ = 0; _ < t; _++) {
    const m = r[_];
    let $, A, w = -1, M = 0;
    for (; M < m.length && (l.lastIndex = M, A = l.exec(m), A !== null); ) M = l.lastIndex, l === Q ? A[1] === "!--" ? l = Xe : A[1] !== void 0 ? l = Je : A[2] !== void 0 ? (st.test(A[2]) && (a = RegExp("</" + A[2], "g")), l = F) : A[3] !== void 0 && (l = F) : l === F ? A[0] === ">" ? (l = a ?? Q, w = -1) : A[1] === void 0 ? w = -2 : (w = l.lastIndex - A[2].length, $ = A[1], l = A[3] === void 0 ? F : A[3] === '"' ? Ke : Qe) : l === Ke || l === Qe ? l = F : l === Xe || l === Je ? l = Q : (l = F, a = void 0);
    const D = l === F && r[_ + 1].startsWith("/>") ? " " : "";
    u += l === Q ? m + Jt : w >= 0 ? (n.push($), m.slice(0, w) + it + m.slice(w) + z + D) : m + z + (w === -2 ? _ : D);
  }
  return [at(r, u + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ne {
  constructor({ strings: e, _$litType$: t }, n) {
    let a;
    this.parts = [];
    let u = 0, l = 0;
    const _ = e.length - 1, m = this.parts, [$, A] = er(e, t);
    if (this.el = ne.createElement($, n), G.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (a = G.nextNode()) !== null && m.length < _; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const w of a.getAttributeNames()) if (w.endsWith(it)) {
          const M = A[l++], D = a.getAttribute(w).split(z), L = /([.?@])?(.*)/.exec(M);
          m.push({ type: 1, index: u, name: L[2], strings: D, ctor: L[1] === "." ? rr : L[1] === "?" ? ir : L[1] === "@" ? nr : he }), a.removeAttribute(w);
        } else w.startsWith(z) && (m.push({ type: 6, index: u }), a.removeAttribute(w));
        if (st.test(a.tagName)) {
          const w = a.textContent.split(z), M = w.length - 1;
          if (M > 0) {
            a.textContent = de ? de.emptyScript : "";
            for (let D = 0; D < M; D++) a.append(w[D], re()), G.nextNode(), m.push({ type: 2, index: ++u });
            a.append(w[M], re());
          }
        }
      } else if (a.nodeType === 8) if (a.data === nt) m.push({ type: 2, index: u });
      else {
        let w = -1;
        for (; (w = a.data.indexOf(z, w + 1)) !== -1; ) m.push({ type: 7, index: u }), w += z.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const n = W.createElement("template");
    return n.innerHTML = e, n;
  }
}
function X(r, e, t = r, n) {
  var l, _;
  if (e === q) return e;
  let a = n !== void 0 ? (l = t.o) == null ? void 0 : l[n] : t.l;
  const u = ie(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== u && ((_ = a == null ? void 0 : a._$AO) == null || _.call(a, !1), u === void 0 ? a = void 0 : (a = new u(r), a._$AT(r, t, n)), n !== void 0 ? (t.o ?? (t.o = []))[n] = a : t.l = a), a !== void 0 && (e = X(r, a._$AS(r, e.values), a, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, a = ((e == null ? void 0 : e.creationScope) ?? W).importNode(t, !0);
    G.currentNode = a;
    let u = G.nextNode(), l = 0, _ = 0, m = n[0];
    for (; m !== void 0; ) {
      if (l === m.index) {
        let $;
        m.type === 2 ? $ = new se(u, u.nextSibling, this, e) : m.type === 1 ? $ = new m.ctor(u, m.name, m.strings, this, e) : m.type === 6 && ($ = new sr(u, this, e)), this._$AV.push($), m = n[++_];
      }
      l !== (m == null ? void 0 : m.index) && (u = G.nextNode(), l++);
    }
    return G.currentNode = W, a;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, n, a) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = a, this.v = (a == null ? void 0 : a.isConnected) ?? !0;
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
    e = X(this, e, t), ie(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: n } = e, a = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ne.createElement(at(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === a) this._$AH.p(t);
    else {
      const l = new tr(a, this), _ = l.u(this.options);
      l.p(t), this.T(_), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new ne(e)), t;
  }
  k(e) {
    Ee(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, a = 0;
    for (const u of e) a === t.length ? t.push(n = new se(this.O(re()), this.O(re()), this, this.options)) : n = t[a], n._$AI(u), a++;
    a < t.length && (this._$AR(n && n._$AB.nextSibling, a), t.length = a);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const a = e.nextSibling;
      e.remove(), e = a;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class he {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, a, u) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = a, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = T;
  }
  _$AI(e, t = this, n, a) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = X(this, e, t, 0), l = !ie(e) || e !== this._$AH && e !== q, l && (this._$AH = e);
    else {
      const _ = e;
      let m, $;
      for (e = u[0], m = 0; m < u.length - 1; m++) $ = X(this, _[n + m], t, m), $ === q && ($ = this._$AH[m]), l || (l = !ie($) || $ !== this._$AH[m]), $ === T ? e = T : e !== T && (e += ($ ?? "") + u[m + 1]), this._$AH[m] = $;
    }
    l && !a && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
class ir extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}
class nr extends he {
  constructor(e, t, n, a, u) {
    super(e, t, n, a, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = X(this, e, t, 0) ?? T) === q) return;
    const n = this._$AH, a = e === T && n !== T || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, u = e !== T && (n === T || a);
    a && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
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
    X(this, e);
  }
}
const be = ee.litHtmlPolyfillSupport;
be == null || be(ne, se), (ee.litHtmlVersions ?? (ee.litHtmlVersions = [])).push("3.2.0");
const ar = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let a = n._$litPart$;
  if (a === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = a = new se(e.insertBefore(re(), u), u, void 0, t ?? {});
  }
  return a._$AI(r), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class te extends Z {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = ar(t, this.renderRoot, this.renderOptions);
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
    return q;
  }
}
var tt;
te._$litElement$ = !0, te.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: te });
const _e = globalThis.litElementPolyfillSupport;
_e == null || _e({ LitElement: te });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const or = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ae }, lr = (r = or, e, t) => {
  const { kind: n, metadata: a } = t;
  let u = globalThis.litPropertyMetadata.get(a);
  if (u === void 0 && globalThis.litPropertyMetadata.set(a, u = /* @__PURE__ */ new Map()), u.set(t.name, r), n === "accessor") {
    const { name: l } = t;
    return { set(_) {
      const m = e.get.call(this);
      e.set.call(this, _), this.requestUpdate(l, m, r);
    }, init(_) {
      return _ !== void 0 && this.P(l, void 0, r), _;
    } };
  }
  if (n === "setter") {
    const { name: l } = t;
    return function(_) {
      const m = this[l];
      e.call(this, _), this.requestUpdate(l, m, r);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function j(r) {
  return (e, t) => typeof t == "object" ? lr(r, e, t) : ((n, a, u) => {
    const l = a.hasOwnProperty(u);
    return a.constructor.createProperty(u, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(a, u) : void 0;
  })(r, e, t);
}
var ur = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, N = (r, e, t, n) => {
  for (var a = n > 1 ? void 0 : n ? cr(e, t) : e, u = r.length - 1, l; u >= 0; u--)
    (l = r[u]) && (a = (n ? l(e, t, a) : l(a)) || a);
  return n && a && ur(e, t, a), a;
};
let R = class extends te {
  constructor() {
    super(...arguments), this.userRoleOptions = [
      { value: "admin", label: "Admin" },
      { value: "user", label: "User" },
      { value: "guest", label: "Guest" }
    ], this.username = "", this.password = "", this.userRole = "", this.termsAccepted = !1, this.age = 25, this.profilePicture = "", this.birthDate = "", this.favoriteColor = "#000000", this.height = 170, this.bio = "", this.newsletterSubscribed = !1;
  }
  handleSubmit(r) {
    r.preventDefault();
    const e = {
      username: this.username,
      password: this.password,
      userRole: this.userRole,
      termsAccepted: this.termsAccepted,
      age: this.age,
      profilePicture: this.profilePicture,
      birthDate: this.birthDate,
      favoriteColor: this.favoriteColor,
      height: this.height,
      bio: this.bio,
      newsletterSubscribed: this.newsletterSubscribed
    };
    this.dispatchEvent(new CustomEvent("onSubmit", {
      detail: { formData: e },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return le`
            <div class="form-container">
                <!-- Text Input -->
                <div class="form-field">
                    <label for="username">User Name</label>
                    <input 
                        id="username" 
                        type="text" 
                        class="mat-mdc-input-element"
                        .value="${this.username}" 
                        placeholder="Enter your username"
                        @input="${(r) => this.username = r.target.value}" 
                    />
                </div>

                <!-- Password Input -->
                <div class="form-field">
                    <label for="password">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        class="mat-mdc-input-element"
                        .value="${this.password}" 
                        placeholder="Enter your password"
                        @input="${(r) => this.password = r.target.value}" 
                    />
                </div>

                <!-- Dropdown -->
                <div class="form-field">
                    <label for="role">User Role</label>
                    <select 
                        id="role" 
                        class="mat-mdc-input-element"
                        .value="${this.userRole}" 
                        @change="${(r) => this.userRole = r.target.value}"
                    >
                        <option value="">Select a role</option>
                        ${this.userRoleOptions.map((r) => le`
                            <option value="${r.value}">${r.label}</option>
                        `)}
                    </select>
                </div>

                <!-- Checkbox -->
                <div class="form-field">
                    <label>Accept Terms</label>
                    <div class="checkbox-field">
                        <input 
                            id="termsAccepted" 
                            type="checkbox" 
                            .checked="${this.termsAccepted}" 
                            @change="${(r) => this.termsAccepted = r.target.checked}" 
                        />
                        <span @click="${() => this.termsAccepted = !this.termsAccepted}">
                            I accept the terms and conditions
                        </span>
                    </div>
                </div>

                <!-- Range Slider -->
                <div class="form-field">
                    <label for="age">Age</label>
                    <div class="range-field">
                        <div class="range-display">
                            <span>18 years</span>
                            <span class="range-value">${this.age} years</span>
                            <span>100 years</span>
                        </div>
                        <input 
                            id="age" 
                            type="range" 
                            min="18" 
                            max="100" 
                            step="1" 
                            .value="${this.age}" 
                            @input="${(r) => this.age = Number(r.target.value)}" 
                        />
                    </div>
                </div>

                <!-- File Input -->
                <div class="form-field">
                    <label for="profilePicture">Profile Picture</label>
                    <input 
                        id="profilePicture" 
                        type="file" 
                        accept=".jpg,.png,.jpeg"
                        @change="${(r) => {
      var e, t;
      return this.profilePicture = ((t = (e = r.target.files) == null ? void 0 : e[0]) == null ? void 0 : t.name) || "";
    }}" 
                    />
                </div>

                <!-- Date Input -->
                <div class="form-field">
                    <label for="birthDate">Birth Date</label>
                    <input 
                        id="birthDate" 
                        type="date" 
                        class="mat-mdc-input-element"
                        .value="${this.birthDate}" 
                        @change="${(r) => this.birthDate = r.target.value}" 
                    />
                </div>

                <!-- Color Picker -->
                <div class="form-field">
                    <label for="favoriteColor">Favorite Color</label>
                    <input 
                        id="favoriteColor" 
                        type="color" 
                        .value="${this.favoriteColor}" 
                        @input="${(r) => this.favoriteColor = r.target.value}" 
                    />
                </div>

                <!-- Number Input -->
                <div class="form-field">
                    <label for="height">Height (cm)</label>
                    <input 
                        id="height" 
                        type="number" 
                        class="mat-mdc-input-element"
                        min="50" 
                        max="250" 
                        step="1" 
                        .value="${this.height}" 
                        placeholder="Enter height in cm"
                        @input="${(r) => this.height = Number(r.target.value)}" 
                    />
                </div>

                <!-- Textarea -->
                <div class="form-field">
                    <label for="bio">Bio</label>
                    <textarea 
                        id="bio" 
                        class="mat-mdc-input-element"
                        rows="4" 
                        .value="${this.bio}" 
                        placeholder="Tell us about yourself"
                        @input="${(r) => this.bio = r.target.value}"
                    ></textarea>
                </div>

                <!-- Newsletter Checkbox -->
                <div class="form-field">
                    <label>Newsletter Subscription</label>
                    <div class="checkbox-field">
                        <input 
                            id="newsletterSubscribed" 
                            type="checkbox" 
                            .checked="${this.newsletterSubscribed}" 
                            @change="${(r) => this.newsletterSubscribed = r.target.checked}" 
                        />
                        <span @click="${() => this.newsletterSubscribed = !this.newsletterSubscribed}">
                            Subscribe to our newsletter
                        </span>
                    </div>
                </div>

                <!-- Submit Button -->
                <button type="button" class="submit-button" @click="${this.handleSubmit}">
                    <span>💾</span> Submit Form
                </button>

                <!-- Form Result Display -->
                ${this.getFormDataDisplay()}
            </div>
        `;
  }
  getFormDataDisplay() {
    const r = {
      username: this.username,
      userRole: this.userRole,
      termsAccepted: this.termsAccepted,
      age: this.age,
      profilePicture: this.profilePicture,
      birthDate: this.birthDate,
      favoriteColor: this.favoriteColor,
      height: this.height,
      bio: this.bio,
      newsletterSubscribed: this.newsletterSubscribed
    };
    return Object.values(r).some((e) => e !== "" && e !== !1 && e !== 0 && e !== 25) ? le`
                <div class="form-result">
                    <pre>${JSON.stringify(r, null, 2)}</pre>
                </div>
            ` : le``;
  }
};
R.styles = Bt`
        :host {
            display: block;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: var(--spacing-lg, 20px);
        }

        .form-container {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-lg, 20px);
        }

        /* Form field styling matching global styles */
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

        /* Input styling matching mat-mdc-input-element */
        input.mat-mdc-input-element,
        textarea.mat-mdc-input-element,
        select.mat-mdc-input-element {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);
            font-size: var(--font-size-base, 14px);
            background-color: var(--background-primary, #fff);            color: var(--text-primary, #333);
            transition: border-color 0.2s, box-shadow 0.2s;
            min-height: var(--input-height, 36px);
            box-sizing: border-box;
            font-family: var(--font-family, 'Roboto', sans-serif);
        }

        input.mat-mdc-input-element::placeholder,
        textarea.mat-mdc-input-element::placeholder {
            color: var(--text-secondary, #666);
        }        input.mat-mdc-input-element:hover,
        textarea.mat-mdc-input-element:hover,
        select.mat-mdc-input-element:hover {
            border-color: var(--primary-light, #6c63ff);
            background: var(--primary-background-hover, rgba(108, 99, 255, 0.02));
        }

        input.mat-mdc-input-element:focus,
        textarea.mat-mdc-input-element:focus,
        select.mat-mdc-input-element:focus {
            outline: none;
            background: var(--background-primary, #fff);
            border-color: var(--primary-color, #6c63ff);
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        textarea.mat-mdc-input-element {
            min-height: 80px;
            resize: vertical;
        }

        /* Checkbox field styling */
        .checkbox-field {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm, 8px);
        }        .checkbox-field input[type="checkbox"] {
            width: var(--icon-size-sm, 18px);
            height: var(--icon-size-sm, 18px);
            margin: 0;
            cursor: pointer;
        }

        .checkbox-field span {
            font-size: var(--font-size-base, 14px);
            color: var(--text-primary, #333);
            cursor: pointer;
        }

        /* Range slider styling */
        .range-field {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-xs, 6px);
        }

        .range-display {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: var(--font-size-sm, 12px);
            color: var(--text-secondary, #666);
        }

        .range-value {
            font-weight: 500;
            color: var(--primary-color, #6c63ff);
        }        input[type="range"] {
            width: 100%;
            height: 6px;
            border-radius: var(--border-radius-xs, 3px);
            background: var(--background-secondary, #f5f5f5);
            outline: none;
            cursor: pointer;
        }

        /* File input styling */
        .file-field {
            position: relative;
        }

        input[type="file"] {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);
            background-color: var(--background-primary, #fff);
            cursor: pointer;
        }

        /* Color picker styling */
        input[type="color"] {            width: 50px;
            height: var(--input-height, 36px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);
            cursor: pointer;
            padding: 0;
        }

        /* Submit button styling */
        .submit-button {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm, 8px);
            padding: var(--spacing-sm, 8px) var(--spacing-lg, 20px);
            background-color: var(--primary-color, #6c63ff);
            color: white;
            border: none;
            border-radius: var(--border-radius-sm, 4px);
            font-size: var(--font-size-base, 14px);
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s, transform 0.1s;
            align-self: flex-start;
            margin-top: var(--spacing-md, 12px);
        }

        .submit-button:hover {
            background-color: var(--primary-dark, #5b52d9);
            transform: translateY(-1px);
        }

        .submit-button:active {
            transform: translateY(0);
        }

        /* Form result display */
        .form-result {
            margin-top: var(--spacing-md, 12px);
            padding: var(--spacing-md, 12px);
            background: var(--background-secondary, #f5f5f5);
            border-radius: var(--border-radius-sm, 4px);
            border: 1px solid var(--border-color, #ddd);
        }

        .form-result pre {
            margin: 0;
            font-family: 'Courier New', monospace;
            font-size: var(--font-size-sm, 12px);
            color: var(--text-primary, #333);
            white-space: pre-wrap;
        }
    `;
N([
  j({ type: String }),
  I({
    attributeType: C.PROPERTY,
    uiComponentType: k.TEXT_INPUT,
    displayLabel: "Username",
    placeholderText: "Enter your username",
    fieldMappings: "username"
  })
], R.prototype, "username", 2);
N([
  j({ type: String }),
  I({
    attributeType: C.PROPERTY,
    uiComponentType: k.PASSWORD_INPUT,
    displayLabel: "Password",
    placeholderText: "Enter your password",
    fieldMappings: "password"
  })
], R.prototype, "password", 2);
N([
  j({ type: String }),
  I({
    attributeType: C.PROPERTY,
    uiComponentType: k.DROPDOWN,
    displayLabel: "User Role",
    optionItems: [
      { value: "admin", label: "Admin" },
      { value: "user", label: "User" },
      { value: "guest", label: "Guest" }
    ],
    fieldMappings: "userRole"
  })
], R.prototype, "userRole", 2);
N([
  j({ type: Boolean }),
  I({
    attributeType: C.PROPERTY,
    uiComponentType: k.CHECKBOX,
    displayLabel: "Accept Terms",
    fieldMappings: "termsAccepted"
  })
], R.prototype, "termsAccepted", 2);
N([
  j({ type: Number }),
  I({
    attributeType: C.PROPERTY,
    uiComponentType: k.RANGE_SLIDER,
    displayLabel: "Age",
    optionItems: {
      minValue: 18,
      maxValue: 100,
      stepValue: 1,
      defaultValue: 25,
      displayTooltip: !0,
      unit: "years"
    },
    fieldMappings: "age"
  })
], R.prototype, "age", 2);
N([
  j({ type: String }),
  I({
    attributeType: C.PROPERTY,
    uiComponentType: k.FILE_INPUT,
    displayLabel: "Profile Picture",
    optionItems: {
      accept: ".jpg,.png",
      multiple: !1,
      maxFileSize: 5e6
      // 5MB
    },
    fieldMappings: "profilePicture"
  })
], R.prototype, "profilePicture", 2);
N([
  j({ type: String }),
  I({
    attributeType: C.PROPERTY,
    uiComponentType: k.DATE_PICKER,
    displayLabel: "Birth Date",
    optionItems: {
      minDate: "1900-01-01",
      maxDate: "2024-12-31"
    },
    fieldMappings: "birthDate"
  })
], R.prototype, "birthDate", 2);
N([
  j({ type: String }),
  I({
    attributeType: C.PROPERTY,
    uiComponentType: k.COLOR_PICKER,
    displayLabel: "Favorite Color",
    fieldMappings: "favoriteColor"
  })
], R.prototype, "favoriteColor", 2);
N([
  j({ type: Number }),
  I({
    attributeType: C.PROPERTY,
    uiComponentType: k.NUMBER_INPUT,
    displayLabel: "Height",
    optionItems: {
      min: 50,
      max: 250,
      step: 1,
      defaultValue: 170
    },
    fieldMappings: "height"
  })
], R.prototype, "height", 2);
N([
  j({ type: String }),
  I({
    attributeType: C.PROPERTY,
    uiComponentType: k.TEXTAREA,
    displayLabel: "Bio",
    placeholderText: "Tell us about yourself",
    optionItems: {
      rows: 5,
      cols: 50
    },
    fieldMappings: "bio"
  })
], R.prototype, "bio", 2);
N([
  j({ type: Boolean }),
  I({
    attributeType: C.PROPERTY,
    uiComponentType: k.CHECKBOX,
    displayLabel: "Newsletter Subscription",
    fieldMappings: "newsletterSubscribed"
  })
], R.prototype, "newsletterSubscribed", 2);
N([
  I({
    attributeType: C.EVENT,
    displayLabel: "On Submit",
    eventTrigger: "onSubmit"
  })
], R.prototype, "handleSubmit", 1);
R = N([
  Ut({
    name: "zero-input-widgets",
    version: "1.0.0",
    title: "Zero input widgets",
    elementSelector: "zero-zero-input-widgets",
    group: "Forms",
    iconName: "profile-icon.png"
    // Replace with your icon path
  }),
  jt()
], R);
export {
  R as ZeroInputWidgets
};
