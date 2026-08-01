var jt = Object.defineProperty;
var It = (r, e, t) => e in r ? jt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Fe = (r, e, t) => It(r, typeof e != "symbol" ? e + "" : e, t);
var qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Ze;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof qe == "object" ? qe : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = a(r);
    typeof t.Reflect < "u" && (n = a(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function a(p, A) {
      return function(w, g) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: g }), A && A(w, g);
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
    var n = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", l = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, A = !m && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return we(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return we({ __proto__: null });
      } : function() {
        return we({});
      },
      has: A ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: A ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, g = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), R = typeof WeakMap == "function" ? WeakMap : Rt(), I = a ? Symbol.for("@reflect-metadata:registry") : void 0, L = Ot(), X = Ct(L);
    function he(i, s, o, d) {
      if (_(o)) {
        if (!He(i))
          throw new TypeError();
        if (!Le(s))
          throw new TypeError();
        return $t(i, s);
      } else {
        if (!He(i))
          throw new TypeError();
        if (!M(s))
          throw new TypeError();
        if (!M(d) && !_(d) && !F(d))
          throw new TypeError();
        return F(d) && (d = void 0), o = j(o), bt(i, s, o, d);
      }
    }
    e("decorate", he);
    function ce(i, s) {
      function o(d, v) {
        if (!M(d))
          throw new TypeError();
        if (!_(v) && !xt(v))
          throw new TypeError();
        Ne(i, s, d, v);
      }
      return o;
    }
    e("metadata", ce);
    function fe(i, s, o, d) {
      if (!M(o))
        throw new TypeError();
      return _(d) || (d = j(d)), Ne(i, s, o, d);
    }
    e("defineMetadata", fe);
    function ft(i, s, o) {
      if (!M(s))
        throw new TypeError();
      return _(o) || (o = j(o)), Te(i, s, o);
    }
    e("hasMetadata", ft);
    function pt(i, s, o) {
      if (!M(s))
        throw new TypeError();
      return _(o) || (o = j(o)), ge(i, s, o);
    }
    e("hasOwnMetadata", pt);
    function yt(i, s, o) {
      if (!M(s))
        throw new TypeError();
      return _(o) || (o = j(o)), ke(i, s, o);
    }
    e("getMetadata", yt);
    function vt(i, s, o) {
      if (!M(s))
        throw new TypeError();
      return _(o) || (o = j(o)), Re(i, s, o);
    }
    e("getOwnMetadata", vt);
    function mt(i, s) {
      if (!M(i))
        throw new TypeError();
      return _(s) || (s = j(s)), De(i, s);
    }
    e("getMetadataKeys", mt);
    function _t(i, s) {
      if (!M(i))
        throw new TypeError();
      return _(s) || (s = j(s)), je(i, s);
    }
    e("getOwnMetadataKeys", _t);
    function gt(i, s, o) {
      if (!M(s))
        throw new TypeError();
      if (_(o) || (o = j(o)), !M(s))
        throw new TypeError();
      _(o) || (o = j(o));
      var d = Q(
        s,
        o,
        /*Create*/
        !1
      );
      return _(d) ? !1 : d.OrdinaryDeleteMetadata(i, s, o);
    }
    e("deleteMetadata", gt);
    function $t(i, s) {
      for (var o = i.length - 1; o >= 0; --o) {
        var d = i[o], v = d(s);
        if (!_(v) && !F(v)) {
          if (!Le(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function bt(i, s, o, d) {
      for (var v = i.length - 1; v >= 0; --v) {
        var C = i[v], O = C(s, o, d);
        if (!_(O) && !F(O)) {
          if (!M(O))
            throw new TypeError();
          d = O;
        }
      }
      return d;
    }
    function Te(i, s, o) {
      var d = ge(i, s, o);
      if (d)
        return !0;
      var v = be(s);
      return F(v) ? !1 : Te(i, v, o);
    }
    function ge(i, s, o) {
      var d = Q(
        s,
        o,
        /*Create*/
        !1
      );
      return _(d) ? !1 : Ue(d.OrdinaryHasOwnMetadata(i, s, o));
    }
    function ke(i, s, o) {
      var d = ge(i, s, o);
      if (d)
        return Re(i, s, o);
      var v = be(s);
      if (!F(v))
        return ke(i, v, o);
    }
    function Re(i, s, o) {
      var d = Q(
        s,
        o,
        /*Create*/
        !1
      );
      if (!_(d))
        return d.OrdinaryGetOwnMetadata(i, s, o);
    }
    function Ne(i, s, o, d) {
      var v = Q(
        o,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, o, d);
    }
    function De(i, s) {
      var o = je(i, s), d = be(i);
      if (d === null)
        return o;
      var v = De(d, s);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var C = new T(), O = [], $ = 0, h = o; $ < h.length; $++) {
        var c = h[$], f = C.has(c);
        f || (C.add(c), O.push(c));
      }
      for (var y = 0, b = v; y < b.length; y++) {
        var c = b[y], f = C.has(c);
        f || (C.add(c), O.push(c));
      }
      return O;
    }
    function je(i, s) {
      var o = Q(
        i,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Ie(i) {
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
    function F(i) {
      return i === null;
    }
    function wt(i) {
      return typeof i == "symbol";
    }
    function M(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function At(i, s) {
      switch (Ie(i)) {
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
      var o = "string", d = ze(i, l);
      if (d !== void 0) {
        var v = d.call(i, o);
        if (M(v))
          throw new TypeError();
        return v;
      }
      return Et(i);
    }
    function Et(i, s) {
      var o, d;
      {
        var v = i.toString;
        if (pe(v)) {
          var d = v.call(i);
          if (!M(d))
            return d;
        }
        var o = i.valueOf;
        if (pe(o)) {
          var d = o.call(i);
          if (!M(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ue(i) {
      return !!i;
    }
    function St(i) {
      return "" + i;
    }
    function j(i) {
      var s = At(i);
      return wt(s) ? s : St(s);
    }
    function He(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function pe(i) {
      return typeof i == "function";
    }
    function Le(i) {
      return typeof i == "function";
    }
    function xt(i) {
      switch (Ie(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function $e(i, s) {
      return i === s || i !== i && s !== s;
    }
    function ze(i, s) {
      var o = i[s];
      if (o != null) {
        if (!pe(o))
          throw new TypeError();
        return o;
      }
    }
    function Be(i) {
      var s = ze(i, u);
      if (!pe(s))
        throw new TypeError();
      var o = s.call(i);
      if (!M(o))
        throw new TypeError();
      return o;
    }
    function Ge(i) {
      return i.value;
    }
    function We(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Je(i) {
      var s = i.return;
      s && s.call(i);
    }
    function be(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === g || s !== g)
        return s;
      var o = i.prototype, d = o && Object.getPrototypeOf(o);
      if (d == null || d === Object.prototype)
        return s;
      var v = d.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function Mt() {
      var i;
      !_(I) && typeof t.Reflect < "u" && !(I in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Pt(t.Reflect));
      var s, o, d, v = new R(), C = {
        registerProvider: O,
        getProvider: h,
        setProvider: f
      };
      return C;
      function O(y) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case _(s):
            s = y;
            break;
          case s === y:
            break;
          case _(o):
            o = y;
            break;
          case o === y:
            break;
          default:
            d === void 0 && (d = new T()), d.add(y);
            break;
        }
      }
      function $(y, b) {
        if (!_(s)) {
          if (s.isProviderFor(y, b))
            return s;
          if (!_(o)) {
            if (o.isProviderFor(y, b))
              return s;
            if (!_(d))
              for (var E = Be(d); ; ) {
                var S = We(E);
                if (!S)
                  return;
                var N = Ge(S);
                if (N.isProviderFor(y, b))
                  return Je(E), N;
              }
          }
        }
        if (!_(i) && i.isProviderFor(y, b))
          return i;
      }
      function h(y, b) {
        var E = v.get(y), S;
        return _(E) || (S = E.get(b)), _(S) && (S = $(y, b), _(S) || (_(E) && (E = new x(), v.set(y, E)), E.set(b, S))), S;
      }
      function c(y) {
        if (_(y))
          throw new TypeError();
        return s === y || o === y || !_(d) && d.has(y);
      }
      function f(y, b, E) {
        if (!c(E))
          throw new Error("Metadata provider not registered.");
        var S = h(y, b);
        if (S !== E) {
          if (!_(S))
            return !1;
          var N = v.get(y);
          _(N) && (N = new x(), v.set(y, N)), N.set(b, E);
        }
        return !0;
      }
    }
    function Ot() {
      var i;
      return !_(I) && M(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[I]), _(i) && (i = Mt()), !_(I) && M(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, I, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ct(i) {
      var s = new R(), o = {
        isProviderFor: function(c, f) {
          var y = s.get(c);
          return _(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: $,
        OrdinaryDeleteMetadata: h
      };
      return L.registerProvider(o), o;
      function d(c, f, y) {
        var b = s.get(c), E = !1;
        if (_(b)) {
          if (!y)
            return;
          b = new x(), s.set(c, b), E = !0;
        }
        var S = b.get(f);
        if (_(S)) {
          if (!y)
            return;
          if (S = new x(), b.set(f, S), !i.setProvider(c, f, o))
            throw b.delete(f), E && s.delete(c), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(c, f, y) {
        var b = d(
          f,
          y,
          /*Create*/
          !1
        );
        return _(b) ? !1 : Ue(b.has(c));
      }
      function C(c, f, y) {
        var b = d(
          f,
          y,
          /*Create*/
          !1
        );
        if (!_(b))
          return b.get(c);
      }
      function O(c, f, y, b) {
        var E = d(
          y,
          b,
          /*Create*/
          !0
        );
        E.set(c, f);
      }
      function $(c, f) {
        var y = [], b = d(
          c,
          f,
          /*Create*/
          !1
        );
        if (_(b))
          return y;
        for (var E = b.keys(), S = Be(E), N = 0; ; ) {
          var Ve = We(S);
          if (!Ve)
            return y.length = N, y;
          var Nt = Ge(Ve);
          try {
            y[N] = Nt;
          } catch (Dt) {
            try {
              Je(S);
            } finally {
              throw Dt;
            }
          }
          N++;
        }
      }
      function h(c, f, y) {
        var b = d(
          f,
          y,
          /*Create*/
          !1
        );
        if (_(b) || !b.delete(c))
          return !1;
        if (b.size === 0) {
          var E = s.get(f);
          _(E) || (E.delete(y), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Pt(i) {
      var s = i.defineMetadata, o = i.hasOwnMetadata, d = i.getOwnMetadata, v = i.getOwnMetadataKeys, C = i.deleteMetadata, O = new R(), $ = {
        isProviderFor: function(h, c) {
          var f = O.get(h);
          return !_(f) && f.has(c) ? !0 : v(h, c).length ? (_(f) && (f = new T(), O.set(h, f)), f.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return $;
    }
    function Q(i, s, o) {
      var d = L.getProvider(i, s);
      if (!_(d))
        return d;
      if (o) {
        if (L.setProvider(i, s, X))
          return X;
        throw new Error("Illegal state.");
      }
    }
    function Tt() {
      var i = {}, s = [], o = (
        /** @class */
        function() {
          function $(h, c, f) {
            this._index = 0, this._keys = h, this._values = c, this._selector = f;
          }
          return $.prototype["@@iterator"] = function() {
            return this;
          }, $.prototype[u] = function() {
            return this;
          }, $.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var c = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, $.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), h;
          }, $.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: h, done: !0 };
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
          }), $.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, $.prototype.get = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, $.prototype.set = function(h, c) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = c, this;
          }, $.prototype.delete = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var f = this._keys.length, y = c + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, $e(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, $.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, $.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, $.prototype.values = function() {
            return new o(this._keys, this._values, C);
          }, $.prototype.entries = function() {
            return new o(this._keys, this._values, O);
          }, $.prototype["@@iterator"] = function() {
            return this.entries();
          }, $.prototype[u] = function() {
            return this.entries();
          }, $.prototype._find = function(h, c) {
            if (!$e(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if ($e(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, $;
        }()
      );
      return d;
      function v($, h) {
        return $;
      }
      function C($, h) {
        return h;
      }
      function O($, h) {
        return [$, h];
      }
    }
    function kt() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new x();
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
          }, s.prototype[u] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function Rt() {
      var i = 16, s = w.create(), o = d();
      return (
        /** @class */
        function() {
          function h() {
            this._key = d();
          }
          return h.prototype.has = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, h.prototype.get = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, h.prototype.set = function(c, f) {
            var y = v(
              c,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, h.prototype.delete = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = d();
          }, h;
        }()
      );
      function d() {
        var h;
        do
          h = "@@WeakMap@@" + $();
        while (w.has(s, h));
        return s[h] = !0, h;
      }
      function v(h, c) {
        if (!n.call(h, o)) {
          if (!c)
            return;
          Object.defineProperty(h, o, { value: w.create() });
        }
        return h[o];
      }
      function C(h, c) {
        for (var f = 0; f < c; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function O(h) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : C(c, h), c;
        }
        return C(new Array(h), h);
      }
      function $() {
        var h = O(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var c = "", f = 0; f < i; ++f) {
          var y = h[f];
          (f === 4 || f === 6 || f === 8) && (c += "-"), y < 16 && (c += "0"), c += y.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function we(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ze || (Ze = {}));
function Ut(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ht(r) {
  return function(e) {
    if (Ut(r)) {
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
function Lt(r) {
  return Ht(r);
}
function zt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Fe(this, "_stylesApplied", !1);
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
        var A;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const w = new CSSStyleSheet(), g = (A = l.sheet) == null ? void 0 : A.cssRules;
          g && (Array.from(g).forEach((x) => w.insertRule(x.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          p.appendChild(w);
        }
        u.forEach((w) => {
          const g = w.cloneNode(!0);
          p.appendChild(g);
        });
      }
    }
    return t;
  };
}
function Bt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Gt(r) {
  return function(e, t) {
    try {
      Bt(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let a = !0;
      if (typeof t == "string") {
        try {
          a = typeof e[t] != "function";
        } catch {
          a = !0;
        }
        a && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function le(r) {
  return Gt(r);
}
var W;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(W || (W = {}));
var J;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(J || (J = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ye = globalThis, Me = ye.ShadowRoot && (ye.ShadyCSS === void 0 || ye.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Oe = Symbol(), Ye = /* @__PURE__ */ new WeakMap();
let lt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Oe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Me && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ye.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ye.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (r) => new lt(typeof r == "string" ? r : r + "", void 0, Oe), Jt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, a, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + r[l + 1], r[0]);
  return new lt(t, r, Oe);
}, Vt = (r, e) => {
  if (Me) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), a = ye.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = t.cssText, r.appendChild(n);
  }
}, Xe = Me ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Wt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ft, defineProperty: qt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Xt, getPrototypeOf: Qt } = Object, H = globalThis, Qe = H.trustedTypes, Kt = Qe ? Qe.emptyScript : "", Ae = H.reactiveElementPolyfillSupport, re = (r, e) => r, ve = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Kt : null;
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
} }, Ce = (r, e) => !Ft(r, e), Ke = { attribute: !0, type: String, converter: ve, reflect: !1, useDefault: !1, hasChanged: Ce };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let q = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ke) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), a = this.getPropertyDescriptor(e, n, t);
      a !== void 0 && qt(this.prototype, e, a);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: a, set: l } = Zt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: a, set(u) {
      const m = a == null ? void 0 : a.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ke;
  }
  static _$Ei() {
    if (this.hasOwnProperty(re("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(re("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(re("properties"))) {
      const t = this.properties, n = [...Yt(t), ...Xt(t)];
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
      for (const a of n) t.unshift(Xe(a));
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
    return Vt(e, this.constructor.elementStyles), e;
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
    const n = this.constructor.elementProperties.get(e), a = this.constructor._$Eu(e, n);
    if (a !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ve).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(a) : this.setAttribute(a, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, a = n._$Eh.get(e);
    if (a !== void 0 && this._$Em !== a) {
      const m = n.getPropertyOptions(a), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : ve;
      this._$Em = a;
      const A = p.fromAttribute(t, m.type);
      this[a] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(a)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, a = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (a === !1 && (l = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? Ce)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: a, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), a === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [l, u] of a) {
        const { wrapped: m } = u, p = this[l];
        m !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((a) => {
        var l;
        return (l = a.hostUpdate) == null ? void 0 : l.call(a);
      }), this.update(t)) : this._$EM();
    } catch (a) {
      throw e = !1, this._$EM(), a;
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
q.elementStyles = [], q.shadowRootOptions = { mode: "open" }, q[re("elementProperties")] = /* @__PURE__ */ new Map(), q[re("finalized")] = /* @__PURE__ */ new Map(), Ae == null || Ae({ ReactiveElement: q }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = globalThis, et = (r) => r, me = ne.trustedTypes, tt = me ? me.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ut = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, dt = "?" + U, er = `<${dt}>`, V = document, ae = () => V.createComment(""), se = (r) => r === null || typeof r != "object" && typeof r != "function", Pe = Array.isArray, tr = (r) => Pe(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Ee = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, rt = /-->/g, nt = />/g, z = RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), it = /'/g, at = /"/g, ht = /^(?:script|style|textarea|title)$/i, rr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ee = rr(1), Z = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), st = /* @__PURE__ */ new WeakMap(), B = V.createTreeWalker(V, 129);
function ct(r, e) {
  if (!Pe(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return tt !== void 0 ? tt.createHTML(e) : e;
}
const nr = (r, e) => {
  const t = r.length - 1, n = [];
  let a, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let m = 0; m < t; m++) {
    const p = r[m];
    let A, w, g = -1, x = 0;
    for (; x < p.length && (u.lastIndex = x, w = u.exec(p), w !== null); ) x = u.lastIndex, u === K ? w[1] === "!--" ? u = rt : w[1] !== void 0 ? u = nt : w[2] !== void 0 ? (ht.test(w[2]) && (a = RegExp("</" + w[2], "g")), u = z) : w[3] !== void 0 && (u = z) : u === z ? w[0] === ">" ? (u = a ?? K, g = -1) : w[1] === void 0 ? g = -2 : (g = u.lastIndex - w[2].length, A = w[1], u = w[3] === void 0 ? z : w[3] === '"' ? at : it) : u === at || u === it ? u = z : u === rt || u === nt ? u = K : (u = z, a = void 0);
    const T = u === z && r[m + 1].startsWith("/>") ? " " : "";
    l += u === K ? p + er : g >= 0 ? (n.push(A), p.slice(0, g) + ut + p.slice(g) + U + T) : p + U + (g === -2 ? m : T);
  }
  return [ct(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class oe {
  constructor({ strings: e, _$litType$: t }, n) {
    let a;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, p = this.parts, [A, w] = nr(e, t);
    if (this.el = oe.createElement(A, n), B.currentNode = this.el.content, t === 2 || t === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (a = B.nextNode()) !== null && p.length < m; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const g of a.getAttributeNames()) if (g.endsWith(ut)) {
          const x = w[u++], T = a.getAttribute(g).split(U), R = /([.?@])?(.*)/.exec(x);
          p.push({ type: 1, index: l, name: R[2], strings: T, ctor: R[1] === "." ? ar : R[1] === "?" ? sr : R[1] === "@" ? or : _e }), a.removeAttribute(g);
        } else g.startsWith(U) && (p.push({ type: 6, index: l }), a.removeAttribute(g));
        if (ht.test(a.tagName)) {
          const g = a.textContent.split(U), x = g.length - 1;
          if (x > 0) {
            a.textContent = me ? me.emptyScript : "";
            for (let T = 0; T < x; T++) a.append(g[T], ae()), B.nextNode(), p.push({ type: 2, index: ++l });
            a.append(g[x], ae());
          }
        }
      } else if (a.nodeType === 8) if (a.data === dt) p.push({ type: 2, index: l });
      else {
        let g = -1;
        for (; (g = a.data.indexOf(U, g + 1)) !== -1; ) p.push({ type: 7, index: l }), g += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = V.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Y(r, e, t = r, n) {
  var u, m;
  if (e === Z) return e;
  let a = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = se(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((m = a == null ? void 0 : a._$AO) == null || m.call(a, !1), l === void 0 ? a = void 0 : (a = new l(r), a._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = a : t._$Cl = a), a !== void 0 && (e = Y(r, a._$AS(r, e.values), a, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, a = ((e == null ? void 0 : e.creationScope) ?? V).importNode(t, !0);
    B.currentNode = a;
    let l = B.nextNode(), u = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let A;
        p.type === 2 ? A = new ue(l, l.nextSibling, this, e) : p.type === 1 ? A = new p.ctor(l, p.name, p.strings, this, e) : p.type === 6 && (A = new lr(l, this, e)), this._$AV.push(A), p = n[++m];
      }
      u !== (p == null ? void 0 : p.index) && (l = B.nextNode(), u++);
    }
    return B.currentNode = V, a;
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
  constructor(e, t, n, a) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = a, this._$Cv = (a == null ? void 0 : a.isConnected) ?? !0;
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
    e = Y(this, e, t), se(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(V.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, a = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = oe.createElement(ct(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === a) this._$AH.p(t);
    else {
      const u = new ir(a, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = st.get(e.strings);
    return t === void 0 && st.set(e.strings, t = new oe(e)), t;
  }
  k(e) {
    Pe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, a = 0;
    for (const l of e) a === t.length ? t.push(n = new ue(this.O(ae()), this.O(ae()), this, this.options)) : n = t[a], n._$AI(l), a++;
    a < t.length && (this._$AR(n && n._$AB.nextSibling, a), t.length = a);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const a = et(e).nextSibling;
      et(e).remove(), e = a;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class _e {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, a, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = a, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(e, t = this, n, a) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = Y(this, e, t, 0), u = !se(e) || e !== this._$AH && e !== Z, u && (this._$AH = e);
    else {
      const m = e;
      let p, A;
      for (e = l[0], p = 0; p < l.length - 1; p++) A = Y(this, m[n + p], t, p), A === Z && (A = this._$AH[p]), u || (u = !se(A) || A !== this._$AH[p]), A === P ? e = P : e !== P && (e += (A ?? "") + l[p + 1]), this._$AH[p] = A;
    }
    u && !a && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends _e {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class sr extends _e {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class or extends _e {
  constructor(e, t, n, a, l) {
    super(e, t, n, a, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Y(this, e, t, 0) ?? P) === Z) return;
    const n = this._$AH, a = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== P && (n === P || a);
    a && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class lr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Y(this, e);
  }
}
const Se = ne.litHtmlPolyfillSupport;
Se == null || Se(oe, ue), (ne.litHtmlVersions ?? (ne.litHtmlVersions = [])).push("3.3.3");
const ur = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let a = n._$litPart$;
  if (a === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = a = new ue(e.insertBefore(ae(), l), l, void 0, t ?? {});
  }
  return a._$AI(r), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class ie extends q {
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
    return Z;
  }
}
var ot;
ie._$litElement$ = !0, ie.finalized = !0, (ot = G.litElementHydrateSupport) == null || ot.call(G, { LitElement: ie });
const xe = G.litElementPolyfillSupport;
xe == null || xe({ LitElement: ie });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: ve, reflect: !1, hasChanged: Ce }, hr = (r = dr, e, t) => {
  const { kind: n, metadata: a } = t;
  let l = globalThis.litPropertyMetadata.get(a);
  if (l === void 0 && globalThis.litPropertyMetadata.set(a, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(m) {
      const p = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(u, p, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(m) {
      const p = this[u];
      e.call(this, m), this.requestUpdate(u, p, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function de(r) {
  return (e, t) => typeof t == "object" ? hr(r, e, t) : ((n, a, l) => {
    const u = a.hasOwnProperty(l);
    return a.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(a, l) : void 0;
  })(r, e, t);
}
var cr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, D = (r, e, t, n) => {
  for (var a = n > 1 ? void 0 : n ? fr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (a = (n ? u(e, t, a) : u(a)) || a);
  return n && a && cr(e, t, a), a;
};
const mr = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#ffffff;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:0 auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;text-align:center;'>",
    "<div style='width:80px;height:80px;border-radius:50%;background:#e5e7eb;margin:0 auto 12px;'></div>",
    "<h3 style='font-size:15px;font-weight:600;margin-bottom:2px;'>John Doe</h3>",
    "<p style='font-size:13px;color:#6b7280;margin:0;'>Founder</p>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Team"]
};
function te(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let k = class extends ie {
  constructor() {
    super(...arguments), this.title = "Meet Our Creative Team", this.lead = "A collective of designers, thinkers, and technical developers working on advanced products.", this.teamJson = '[{"avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300","name":"Sarah Jenkins","role":"Lead Architect","bio":"Sarah designs scalable visual layouts."},{"avatar":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300","name":"Marcus Aurelius","role":"Backend Engineer","bio":"Marcus handles deep system pipeline setups."},{"avatar":"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300","name":"Elena Rostova","role":"Creative Director","bio":"Elena coordinates overall aesthetic tokens."}]', this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    var u, m, p, A, w, g, x, T, R, I, L, X, he, ce, fe;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-block-team-1.0.0></zero-block-team-1.0.0>"
      };
    const e = te(((u = r == null ? void 0 : r.props) == null ? void 0 : u.title) ?? ((p = (m = r == null ? void 0 : r.studio) == null ? void 0 : m.props) == null ? void 0 : p.title) ?? "Meet the Team"), t = te(((A = r == null ? void 0 : r.props) == null ? void 0 : A.lead) ?? ((g = (w = r == null ? void 0 : r.studio) == null ? void 0 : w.props) == null ? void 0 : g.lead) ?? ""), n = te(((x = r == null ? void 0 : r.props) == null ? void 0 : x.teamJson) ?? ((R = (T = r == null ? void 0 : r.studio) == null ? void 0 : T.props) == null ? void 0 : R.teamJson) ?? "[]"), a = te(((I = r == null ? void 0 : r.props) == null ? void 0 : I.layout) ?? ((X = (L = r == null ? void 0 : r.studio) == null ? void 0 : L.props) == null ? void 0 : X.layout) ?? "layout-1"), l = te(((he = r == null ? void 0 : r.props) == null ? void 0 : he.themeStyle) ?? ((fe = (ce = r == null ? void 0 : r.studio) == null ? void 0 : ce.props) == null ? void 0 : fe.themeStyle) ?? "light");
    return {
      kind: "generic",
      templateHtml: `
        <zero-block-team-1.0.0
          title="${e}"
          lead="${t}"
          team-json="${n}"
          layout="${a}"
          theme-style="${l}"
        ></zero-block-team-1.0.0>
      `
    };
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(r) {
    this.title = r;
  }
  get leadConfig() {
    return this.lead;
  }
  set leadConfig(r) {
    this.lead = r;
  }
  get teamJsonConfig() {
    return this.teamJson;
  }
  set teamJsonConfig(r) {
    this.teamJson = r;
  }
  get layoutConfig() {
    return this.layout;
  }
  set layoutConfig(r) {
    this.layout = r || "layout-1";
  }
  get themeStyleConfig() {
    return this.themeStyle;
  }
  set themeStyleConfig(r) {
    this.themeStyle = r || "light";
  }
  parseTeam() {
    try {
      return JSON.parse(this.teamJson);
    } catch {
      return [];
    }
  }
  render() {
    const r = this.parseTeam();
    return ee`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        ${this.layout === "layout-1" ? ee`
          <div class="grid-4col">
            ${r.map((e) => ee`
              <div class="team-card">
                <div class="avatar-wrapper">
                  <img class="avatar-img" src="${e.avatar}" alt="${e.name}">
                </div>
                <h3>${e.name}</h3>
                <span class="role-badge">${e.role}</span>
                <p class="bio-text">${e.bio}</p>
              </div>
            `)}
          </div>
        ` : ""}

        ${this.layout === "layout-2" ? ee`
          <div class="grid-2col">
            ${r.map((e) => ee`
              <div class="row-card">
                <div class="row-avatar">
                  <img class="avatar-img" src="${e.avatar}" alt="${e.name}">
                </div>
                <div class="row-info">
                  <h3>${e.name}</h3>
                  <span class="role-badge">${e.role}</span>
                  <p class="bio-text">${e.bio}</p>
                </div>
              </div>
            `)}
          </div>
        ` : ""}
      </section>
    `;
  }
};
k.styles = Jt`
    :host {
      display: block;
      width: 100%;
      --team-bg: var(--uiv-surface-color, #ffffff);
      --team-text: var(--uiv-text-color, #111827);
      --team-lead: #4b5563;
      --team-card-bg: var(--uiv-surface-color, #ffffff);
      --team-card-border: var(--uiv-border-color, #e5e7eb);
      --team-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--team-bg);
      color: var(--team-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --team-bg: #111827;
      --team-text: #f9fafb;
      --team-lead: #9ca3af;
      --team-card-bg: #1f2937;
      --team-card-border: #374151;
    }

    .header-area {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 50px auto;
    }

    h2 {
      font-size: 2.25rem;
      font-weight: 800;
      margin: 0 0 12px 0;
      letter-spacing: -0.02em;
    }

    p.lead {
      font-size: 1.05rem;
      line-height: 1.6;
      color: var(--team-lead);
      margin: 0;
    }

    /* ─── Layout 1: 4-Column Grid ─── */
    .grid-4col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .team-card {
      padding: 30px 20px;
      text-align: center;
      background: var(--team-card-bg);
      border: 1px solid var(--team-card-border);
      border-radius: 8px;
      transition: transform 0.2s ease;
    }

    .team-card:hover {
      transform: translateY(-2px);
    }

    .avatar-wrapper {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 20px auto;
      border: 3px solid var(--team-accent);
      box-shadow: 0 4px 10px rgba(0,0,0,0.06);
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0 0 4px 0;
    }

    .role-badge {
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--team-accent);
      margin-bottom: 12px;
      display: inline-block;
    }

    .bio-text {
      font-size: 0.88rem;
      line-height: 1.5;
      color: var(--team-lead);
      margin: 0;
    }

    /* ─── Layout 2: 2-Column Split Rows ─── */
    .grid-2col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .row-card {
      display: flex;
      gap: 24px;
      align-items: center;
      padding: 24px;
      background: var(--team-card-bg);
      border: 1px solid var(--team-card-border);
      border-radius: 12px;
      text-align: left;
    }

    .row-avatar {
      width: 130px;
      height: 130px;
      border-radius: 12px;
      overflow: hidden;
      flex-shrink: 0;
      border: 2px solid var(--team-card-border);
    }

    .row-info {
      flex: 1;
    }

    @media (max-width: 768px) {
      .grid-2col {
        grid-template-columns: 1fr;
      }
      .row-card {
        flex-direction: column;
        text-align: center;
      }
    }
  `;
D([
  de({ type: String })
], k.prototype, "title", 2);
D([
  de({ type: String })
], k.prototype, "lead", 2);
D([
  de({ type: String, attribute: "team-json" })
], k.prototype, "teamJson", 2);
D([
  de({ type: String })
], k.prototype, "layout", 2);
D([
  de({ type: String, attribute: "theme-style" })
], k.prototype, "themeStyle", 2);
D([
  le({
    attributeType: J.PROPERTY,
    uiComponentType: W.TEXT_INPUT,
    displayLabel: "Section Title",
    fieldMappings: "title"
  })
], k.prototype, "titleConfig", 1);
D([
  le({
    attributeType: J.PROPERTY,
    uiComponentType: W.TEXT_INPUT,
    displayLabel: "Section Subtitle Copy",
    fieldMappings: "lead"
  })
], k.prototype, "leadConfig", 1);
D([
  le({
    attributeType: J.PROPERTY,
    uiComponentType: W.TEXTAREA,
    displayLabel: "Team Members JSON",
    fieldMappings: "teamJson"
  })
], k.prototype, "teamJsonConfig", 1);
D([
  le({
    attributeType: J.PROPERTY,
    uiComponentType: W.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "4-Column Avatar Grid", value: "layout-1" },
      { label: "2-Column Split Row Cards", value: "layout-2" }
    ]
  })
], k.prototype, "layoutConfig", 1);
D([
  le({
    attributeType: J.PROPERTY,
    uiComponentType: W.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" }
    ]
  })
], k.prototype, "themeStyleConfig", 1);
k = D([
  Lt({
    name: "zero-block-team",
    version: "1.0.0",
    title: "Team Block",
    elementSelector: "zero-block-team",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  zt()
], k);
export {
  k as ZeroBlockTeam,
  mr as studioTemplate
};
