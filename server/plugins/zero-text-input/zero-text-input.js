var Ut = Object.defineProperty;
var Dt = (r, e, t) => e in r ? Ut(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ve = (r, e, t) => Dt(r, typeof e != "symbol" ? e + "" : e, t);
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
var Fe;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof qe == "object" ? qe : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = a(r);
    typeof t.Reflect < "u" && (n = a(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function a(y, E) {
      return function($, w) {
        Object.defineProperty(y, $, { configurable: !0, writable: !0, value: w }), E && E($, w);
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
    var n = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", l = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !g && !y, $ = {
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
    }, w = Object.getPrototypeOf(Function), R = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Rt(), I = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), j = typeof WeakMap == "function" ? WeakMap : Nt(), W = a ? Symbol.for("@reflect-metadata:registry") : void 0, se = Ot(), xe = Tt(se);
    function ht(i, o, s, d) {
      if (b(s)) {
        if (!Ie(i))
          throw new TypeError();
        if (!Le(o))
          throw new TypeError();
        return wt(i, o);
      } else {
        if (!Ie(i))
          throw new TypeError();
        if (!S(o))
          throw new TypeError();
        if (!S(d) && !b(d) && !Y(d))
          throw new TypeError();
        return Y(d) && (d = void 0), s = H(s), $t(i, o, s, d);
      }
    }
    e("decorate", ht);
    function ct(i, o) {
      function s(d, v) {
        if (!S(d))
          throw new TypeError();
        if (!b(v) && !Mt(v))
          throw new TypeError();
        Te(i, o, d, v);
      }
      return s;
    }
    e("metadata", ct);
    function ft(i, o, s, d) {
      if (!S(s))
        throw new TypeError();
      return b(d) || (d = H(d)), Te(i, o, s, d);
    }
    e("defineMetadata", ft);
    function pt(i, o, s) {
      if (!S(o))
        throw new TypeError();
      return b(s) || (s = H(s)), Me(i, o, s);
    }
    e("hasMetadata", pt);
    function yt(i, o, s) {
      if (!S(o))
        throw new TypeError();
      return b(s) || (s = H(s)), fe(i, o, s);
    }
    e("hasOwnMetadata", yt);
    function vt(i, o, s) {
      if (!S(o))
        throw new TypeError();
      return b(s) || (s = H(s)), Se(i, o, s);
    }
    e("getMetadata", vt);
    function gt(i, o, s) {
      if (!S(o))
        throw new TypeError();
      return b(s) || (s = H(s)), Oe(i, o, s);
    }
    e("getOwnMetadata", gt);
    function bt(i, o) {
      if (!S(i))
        throw new TypeError();
      return b(o) || (o = H(o)), Pe(i, o);
    }
    e("getMetadataKeys", bt);
    function mt(i, o) {
      if (!S(i))
        throw new TypeError();
      return b(o) || (o = H(o)), Re(i, o);
    }
    e("getOwnMetadataKeys", mt);
    function _t(i, o, s) {
      if (!S(o))
        throw new TypeError();
      if (b(s) || (s = H(s)), !S(o))
        throw new TypeError();
      b(s) || (s = H(s));
      var d = Q(
        o,
        s,
        /*Create*/
        !1
      );
      return b(d) ? !1 : d.OrdinaryDeleteMetadata(i, o, s);
    }
    e("deleteMetadata", _t);
    function wt(i, o) {
      for (var s = i.length - 1; s >= 0; --s) {
        var d = i[s], v = d(o);
        if (!b(v) && !Y(v)) {
          if (!Le(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function $t(i, o, s, d) {
      for (var v = i.length - 1; v >= 0; --v) {
        var T = i[v], O = T(o, s, d);
        if (!b(O) && !Y(O)) {
          if (!S(O))
            throw new TypeError();
          d = O;
        }
      }
      return d;
    }
    function Me(i, o, s) {
      var d = fe(i, o, s);
      if (d)
        return !0;
      var v = ye(o);
      return Y(v) ? !1 : Me(i, v, s);
    }
    function fe(i, o, s) {
      var d = Q(
        o,
        s,
        /*Create*/
        !1
      );
      return b(d) ? !1 : Ne(d.OrdinaryHasOwnMetadata(i, o, s));
    }
    function Se(i, o, s) {
      var d = fe(i, o, s);
      if (d)
        return Oe(i, o, s);
      var v = ye(o);
      if (!Y(v))
        return Se(i, v, s);
    }
    function Oe(i, o, s) {
      var d = Q(
        o,
        s,
        /*Create*/
        !1
      );
      if (!b(d))
        return d.OrdinaryGetOwnMetadata(i, o, s);
    }
    function Te(i, o, s, d) {
      var v = Q(
        s,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, s, d);
    }
    function Pe(i, o) {
      var s = Re(i, o), d = ye(i);
      if (d === null)
        return s;
      var v = Pe(d, o);
      if (v.length <= 0)
        return s;
      if (s.length <= 0)
        return v;
      for (var T = new I(), O = [], m = 0, h = s; m < h.length; m++) {
        var c = h[m], f = T.has(c);
        f || (T.add(c), O.push(c));
      }
      for (var p = 0, _ = v; p < _.length; p++) {
        var c = _[p], f = T.has(c);
        f || (T.add(c), O.push(c));
      }
      return O;
    }
    function Re(i, o) {
      var s = Q(
        i,
        o,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(i, o) : [];
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
    function b(i) {
      return i === void 0;
    }
    function Y(i) {
      return i === null;
    }
    function Et(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function At(i, o) {
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
      var s = "string", d = Ue(i, l);
      if (d !== void 0) {
        var v = d.call(i, s);
        if (S(v))
          throw new TypeError();
        return v;
      }
      return Ct(i);
    }
    function Ct(i, o) {
      var s, d;
      {
        var v = i.toString;
        if (le(v)) {
          var d = v.call(i);
          if (!S(d))
            return d;
        }
        var s = i.valueOf;
        if (le(s)) {
          var d = s.call(i);
          if (!S(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ne(i) {
      return !!i;
    }
    function xt(i) {
      return "" + i;
    }
    function H(i) {
      var o = At(i);
      return Et(o) ? o : xt(o);
    }
    function Ie(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function le(i) {
      return typeof i == "function";
    }
    function Le(i) {
      return typeof i == "function";
    }
    function Mt(i) {
      switch (ke(i)) {
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
      var s = i[o];
      if (s != null) {
        if (!le(s))
          throw new TypeError();
        return s;
      }
    }
    function De(i) {
      var o = Ue(i, u);
      if (!le(o))
        throw new TypeError();
      var s = o.call(i);
      if (!S(s))
        throw new TypeError();
      return s;
    }
    function He(i) {
      return i.value;
    }
    function je(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function ze(i) {
      var o = i.return;
      o && o.call(i);
    }
    function ye(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var s = i.prototype, d = s && Object.getPrototypeOf(s);
      if (d == null || d === Object.prototype)
        return o;
      var v = d.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function St() {
      var i;
      !b(W) && typeof t.Reflect < "u" && !(W in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Pt(t.Reflect));
      var o, s, d, v = new j(), T = {
        registerProvider: O,
        getProvider: h,
        setProvider: f
      };
      return T;
      function O(p) {
        if (!Object.isExtensible(T))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case b(o):
            o = p;
            break;
          case o === p:
            break;
          case b(s):
            s = p;
            break;
          case s === p:
            break;
          default:
            d === void 0 && (d = new I()), d.add(p);
            break;
        }
      }
      function m(p, _) {
        if (!b(o)) {
          if (o.isProviderFor(p, _))
            return o;
          if (!b(s)) {
            if (s.isProviderFor(p, _))
              return o;
            if (!b(d))
              for (var x = De(d); ; ) {
                var M = je(x);
                if (!M)
                  return;
                var U = He(M);
                if (U.isProviderFor(p, _))
                  return ze(x), U;
              }
          }
        }
        if (!b(i) && i.isProviderFor(p, _))
          return i;
      }
      function h(p, _) {
        var x = v.get(p), M;
        return b(x) || (M = x.get(_)), b(M) && (M = m(p, _), b(M) || (b(x) && (x = new R(), v.set(p, x)), x.set(_, M))), M;
      }
      function c(p) {
        if (b(p))
          throw new TypeError();
        return o === p || s === p || !b(d) && d.has(p);
      }
      function f(p, _, x) {
        if (!c(x))
          throw new Error("Metadata provider not registered.");
        var M = h(p, _);
        if (M !== x) {
          if (!b(M))
            return !1;
          var U = v.get(p);
          b(U) && (U = new R(), v.set(p, U)), U.set(_, x);
        }
        return !0;
      }
    }
    function Ot() {
      var i;
      return !b(W) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[W]), b(i) && (i = St()), !b(W) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, W, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Tt(i) {
      var o = new j(), s = {
        isProviderFor: function(c, f) {
          var p = o.get(c);
          return b(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: T,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: h
      };
      return se.registerProvider(s), s;
      function d(c, f, p) {
        var _ = o.get(c), x = !1;
        if (b(_)) {
          if (!p)
            return;
          _ = new R(), o.set(c, _), x = !0;
        }
        var M = _.get(f);
        if (b(M)) {
          if (!p)
            return;
          if (M = new R(), _.set(f, M), !i.setProvider(c, f, s))
            throw _.delete(f), x && o.delete(c), new Error("Wrong provider for target.");
        }
        return M;
      }
      function v(c, f, p) {
        var _ = d(
          f,
          p,
          /*Create*/
          !1
        );
        return b(_) ? !1 : Ne(_.has(c));
      }
      function T(c, f, p) {
        var _ = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (!b(_))
          return _.get(c);
      }
      function O(c, f, p, _) {
        var x = d(
          p,
          _,
          /*Create*/
          !0
        );
        x.set(c, f);
      }
      function m(c, f) {
        var p = [], _ = d(
          c,
          f,
          /*Create*/
          !1
        );
        if (b(_))
          return p;
        for (var x = _.keys(), M = De(x), U = 0; ; ) {
          var Be = je(M);
          if (!Be)
            return p.length = U, p;
          var It = He(Be);
          try {
            p[U] = It;
          } catch (Lt) {
            try {
              ze(M);
            } finally {
              throw Lt;
            }
          }
          U++;
        }
      }
      function h(c, f, p) {
        var _ = d(
          f,
          p,
          /*Create*/
          !1
        );
        if (b(_) || !_.delete(c))
          return !1;
        if (_.size === 0) {
          var x = o.get(f);
          b(x) || (x.delete(p), x.size === 0 && o.delete(x));
        }
        return !0;
      }
    }
    function Pt(i) {
      var o = i.defineMetadata, s = i.hasOwnMetadata, d = i.getOwnMetadata, v = i.getOwnMetadataKeys, T = i.deleteMetadata, O = new j(), m = {
        isProviderFor: function(h, c) {
          var f = O.get(h);
          return !b(f) && f.has(c) ? !0 : v(h, c).length ? (b(f) && (f = new I(), O.set(h, f)), f.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: T
      };
      return m;
    }
    function Q(i, o, s) {
      var d = se.getProvider(i, o);
      if (!b(d))
        return d;
      if (s) {
        if (se.setProvider(i, o, xe))
          return xe;
        throw new Error("Illegal state.");
      }
    }
    function Rt() {
      var i = {}, o = [], s = (
        /** @class */
        function() {
          function m(h, c, f) {
            this._index = 0, this._keys = h, this._values = c, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var c = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, m.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
          }, m;
        }()
      ), d = (
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
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, m.prototype.set = function(h, c) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = c, this;
          }, m.prototype.delete = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var f = this._keys.length, p = c + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, pe(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new s(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new s(this._keys, this._values, T);
          }, m.prototype.entries = function() {
            return new s(this._keys, this._values, O);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(h, c) {
            if (!pe(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pe(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return d;
      function v(m, h) {
        return m;
      }
      function T(m, h) {
        return h;
      }
      function O(m, h) {
        return [m, h];
      }
    }
    function kt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new R();
          }
          return Object.defineProperty(o.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), o.prototype.has = function(s) {
            return this._map.has(s);
          }, o.prototype.add = function(s) {
            return this._map.set(s, s), this;
          }, o.prototype.delete = function(s) {
            return this._map.delete(s);
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
    function Nt() {
      var i = 16, o = $.create(), s = d();
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
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, h.prototype.get = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, h.prototype.set = function(c, f) {
            var p = v(
              c,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
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
          h = "@@WeakMap@@" + m();
        while ($.has(o, h));
        return o[h] = !0, h;
      }
      function v(h, c) {
        if (!n.call(h, s)) {
          if (!c)
            return;
          Object.defineProperty(h, s, { value: $.create() });
        }
        return h[s];
      }
      function T(h, c) {
        for (var f = 0; f < c; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function O(h) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : T(c, h), c;
        }
        return T(new Array(h), h);
      }
      function m() {
        var h = O(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var c = "", f = 0; f < i; ++f) {
          var p = h[f];
          (f === 4 || f === 6 || f === 8) && (c += "-"), p < 16 && (c += "0"), c += p.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function ve(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Fe || (Fe = {}));
function Ht(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function jt(r) {
  return function(e) {
    if (Ht(r)) {
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
function zt(r) {
  return jt(r);
}
function Bt(r) {
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
          const $ = new CSSStyleSheet(), w = (E = l.sheet) == null ? void 0 : E.cssRules;
          w && (Array.from(w).forEach((R) => $.insertRule(R.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          y.appendChild($);
        }
        u.forEach(($) => {
          const w = $.cloneNode(!0);
          y.appendChild(w);
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
function N(r) {
  return qt(r);
}
var L;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(L || (L = {}));
var k;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(k || (k = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, $e = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), Ge = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if ($e && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ge.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ge.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (r) => new ot(typeof r == "string" ? r : r + "", void 0, Ee), Gt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, a, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + r[l + 1], r[0]);
  return new ot(t, r, Ee);
}, Wt = (r, e) => {
  if ($e) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), a = ue.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = t.cssText, r.appendChild(n);
  }
}, We = $e ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Ft(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Yt, defineProperty: Xt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Jt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, B = globalThis, Ye = B.trustedTypes, er = Ye ? Ye.emptyScript : "", ge = B.reactiveElementPolyfillSupport, ee = (r, e) => r, de = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? er : null;
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
} }, Ae = (r, e) => !Yt(r, e), Xe = { attribute: !0, type: String, converter: de, reflect: !1, useDefault: !1, hasChanged: Ae };
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
      const n = Symbol(), a = this.getPropertyDescriptor(e, n, t);
      a !== void 0 && Xt(this.prototype, e, a);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: a, set: l } = Zt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: a, set(u) {
      const g = a == null ? void 0 : a.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Xe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Kt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, n = [...Jt(t), ...Qt(t)];
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
      for (const a of n) t.unshift(We(a));
    } else e !== void 0 && t.push(We(e));
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
    return Wt(e, this.constructor.elementStyles), e;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : de).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(a) : this.setAttribute(a, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, a = n._$Eh.get(e);
    if (a !== void 0 && this._$Em !== a) {
      const g = n.getPropertyOptions(a), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : de;
      this._$Em = a;
      const E = y.fromAttribute(t, g.type);
      this[a] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(a)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, a = !1, l) {
    var u;
    if (e !== void 0) {
      const g = this.constructor;
      if (a === !1 && (l = this[e]), n ?? (n = g.getPropertyOptions(e)), !((n.hasChanged ?? Ae)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(g._$Eu(e, n)))) return;
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
        const { wrapped: g } = u, y = this[l];
        g !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[ee("elementProperties")] = /* @__PURE__ */ new Map(), X[ee("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: X }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Ze = (r) => r, he = te.trustedTypes, Je = he ? he.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, st = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, lt = "?" + z, tr = `<${lt}>`, G = document, ne = () => G.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Ce = Array.isArray, rr = (r) => Ce(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", be = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, V = RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, ut = /^(?:script|style|textarea|title)$/i, nr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), me = nr(1), Z = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), q = G.createTreeWalker(G, 129);
function dt(r, e) {
  if (!Ce(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const ir = (r, e) => {
  const t = r.length - 1, n = [];
  let a, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let g = 0; g < t; g++) {
    const y = r[g];
    let E, $, w = -1, R = 0;
    for (; R < y.length && (u.lastIndex = R, $ = u.exec(y), $ !== null); ) R = u.lastIndex, u === K ? $[1] === "!--" ? u = Qe : $[1] !== void 0 ? u = Ke : $[2] !== void 0 ? (ut.test($[2]) && (a = RegExp("</" + $[2], "g")), u = V) : $[3] !== void 0 && (u = V) : u === V ? $[0] === ">" ? (u = a ?? K, w = -1) : $[1] === void 0 ? w = -2 : (w = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? V : $[3] === '"' ? tt : et) : u === tt || u === et ? u = V : u === Qe || u === Ke ? u = K : (u = V, a = void 0);
    const I = u === V && r[g + 1].startsWith("/>") ? " " : "";
    l += u === K ? y + tr : w >= 0 ? (n.push(E), y.slice(0, w) + st + y.slice(w) + z + I) : y + z + (w === -2 ? g : I);
  }
  return [dt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ae {
  constructor({ strings: e, _$litType$: t }, n) {
    let a;
    this.parts = [];
    let l = 0, u = 0;
    const g = e.length - 1, y = this.parts, [E, $] = ir(e, t);
    if (this.el = ae.createElement(E, n), q.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (a = q.nextNode()) !== null && y.length < g; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const w of a.getAttributeNames()) if (w.endsWith(st)) {
          const R = $[u++], I = a.getAttribute(w).split(z), j = /([.?@])?(.*)/.exec(R);
          y.push({ type: 1, index: l, name: j[2], strings: I, ctor: j[1] === "." ? or : j[1] === "?" ? sr : j[1] === "@" ? lr : ce }), a.removeAttribute(w);
        } else w.startsWith(z) && (y.push({ type: 6, index: l }), a.removeAttribute(w));
        if (ut.test(a.tagName)) {
          const w = a.textContent.split(z), R = w.length - 1;
          if (R > 0) {
            a.textContent = he ? he.emptyScript : "";
            for (let I = 0; I < R; I++) a.append(w[I], ne()), q.nextNode(), y.push({ type: 2, index: ++l });
            a.append(w[R], ne());
          }
        }
      } else if (a.nodeType === 8) if (a.data === lt) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = a.data.indexOf(z, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += z.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = G.createElement("template");
    return n.innerHTML = e, n;
  }
}
function J(r, e, t = r, n) {
  var u, g;
  if (e === Z) return e;
  let a = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ie(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((g = a == null ? void 0 : a._$AO) == null || g.call(a, !1), l === void 0 ? a = void 0 : (a = new l(r), a._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = a : t._$Cl = a), a !== void 0 && (e = J(r, a._$AS(r, e.values), a, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, a = ((e == null ? void 0 : e.creationScope) ?? G).importNode(t, !0);
    q.currentNode = a;
    let l = q.nextNode(), u = 0, g = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new oe(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new ur(l, this, e)), this._$AV.push(E), y = n[++g];
      }
      u !== (y == null ? void 0 : y.index) && (l = q.nextNode(), u++);
    }
    return q.currentNode = G, a;
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
    e = J(this, e, t), ie(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : rr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(G.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, a = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ae.createElement(dt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === a) this._$AH.p(t);
    else {
      const u = new ar(a, this), g = u.u(this.options);
      u.p(t), this.T(g), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new ae(e)), t;
  }
  k(e) {
    Ce(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, a = 0;
    for (const l of e) a === t.length ? t.push(n = new oe(this.O(ne()), this.O(ne()), this, this.options)) : n = t[a], n._$AI(l), a++;
    a < t.length && (this._$AR(n && n._$AB.nextSibling, a), t.length = a);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const a = Ze(e).nextSibling;
      Ze(e).remove(), e = a;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ce {
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
    if (l === void 0) e = J(this, e, t, 0), u = !ie(e) || e !== this._$AH && e !== Z, u && (this._$AH = e);
    else {
      const g = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = J(this, g[n + y], t, y), E === Z && (E = this._$AH[y]), u || (u = !ie(E) || E !== this._$AH[y]), E === P ? e = P : e !== P && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !a && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends ce {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class sr extends ce {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class lr extends ce {
  constructor(e, t, n, a, l) {
    super(e, t, n, a, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? P) === Z) return;
    const n = this._$AH, a = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== P && (n === P || a);
    a && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ur {
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
const _e = te.litHtmlPolyfillSupport;
_e == null || _e(ae, oe), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
const dr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let a = n._$litPart$;
  if (a === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = a = new oe(e.insertBefore(ne(), l), l, void 0, t ?? {});
  }
  return a._$AI(r), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F = globalThis;
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = dr(t, this.renderRoot, this.renderOptions);
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
var at;
re._$litElement$ = !0, re.finalized = !0, (at = F.litElementHydrateSupport) == null || at.call(F, { LitElement: re });
const we = F.litElementPolyfillSupport;
we == null || we({ LitElement: re });
(F.litElementVersions ?? (F.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ae }, cr = (r = hr, e, t) => {
  const { kind: n, metadata: a } = t;
  let l = globalThis.litPropertyMetadata.get(a);
  if (l === void 0 && globalThis.litPropertyMetadata.set(a, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
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
  return (e, t) => typeof t == "object" ? cr(r, e, t) : ((n, a, l) => {
    const u = a.hasOwnProperty(l);
    return a.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(a, l) : void 0;
  })(r, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function fr(r) {
  return D({ ...r, state: !0, attribute: !1 });
}
var pr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, C = (r, e, t, n) => {
  for (var a = n > 1 ? void 0 : n ? yr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (a = (n ? u(e, t, a) : u(a)) || a);
  return n && a && pr(e, t, a), a;
};
const nt = {
  kind: "generic",
  templateHtml: [
    "<div style='display:grid;gap:6px;padding:8px 0px;'>",
    "<label style='font-size:12px;font-weight:600;color:#374151;'>{{display:label}}</label>",
    "<div style='border:1px solid #d1d5db;border-radius:6px;padding:10px 14px;background:#ffffff;color:#9ca3af;font-size:14px;'>{{display:placeholder}}</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Input"]
};
function it(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let A = class extends re {
  constructor() {
    super(...arguments), this.value = "", this.label = "Text Input", this.placeholder = "", this.type = "text", this.variant = "standard", this.disabled = !1, this.required = !1, this.maxLength = 0, this.errorMessage = "", this.showError = !1, this.focused = !1;
  }
  static getStudioTemplate(r) {
    if (!r) return nt;
    const e = it(r.studio.display.label || "Text Input"), t = it(r.studio.display.placeholder || "Enter value...");
    return {
      ...nt,
      templateHtml: [
        "<div style='display:block;width:100%;font-family:inherit;'>",
        `<label style='display:block;margin-bottom:6px;font-size:13px;font-weight:600;color:var(--uiv-text-color,#374151);'>${e}</label>`,
        `<div style='width:100%;padding:10px 14px;border:1px solid var(--uiv-border-color,#d1d5db);border-radius:6px;font-size:14px;background:var(--uiv-surface-color,#ffffff);color:#9ca3af;'>${t}</div>`,
        "</div>"
      ].join("")
    };
  }
  get valueConfig() {
    return this.value;
  }
  set valueConfig(r) {
    this.value = r || "";
  }
  get labelConfig() {
    return this.label;
  }
  set labelConfig(r) {
    this.label = r;
  }
  get placeholderConfig() {
    return this.placeholder;
  }
  set placeholderConfig(r) {
    this.placeholder = r;
  }
  get typeConfig() {
    return this.type;
  }
  set typeConfig(r) {
    this.type = r || "text";
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "standard";
  }
  get disabledConfig() {
    return this.disabled;
  }
  set disabledConfig(r) {
    this.disabled = !!r;
  }
  get requiredConfig() {
    return this.required;
  }
  set requiredConfig(r) {
    this.required = !!r;
  }
  get maxLengthConfig() {
    return this.maxLength;
  }
  set maxLengthConfig(r) {
    this.maxLength = Number(r) || 0;
  }
  get errorMessageConfig() {
    return this.errorMessage;
  }
  set errorMessageConfig(r) {
    this.errorMessage = r;
  }
  get showErrorConfig() {
    return this.showError;
  }
  set showErrorConfig(r) {
    this.showError = !!r;
  }
  handleInput(r) {
    const e = r.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("input", { detail: { value: this.value }, bubbles: !0, composed: !0 }));
  }
  handleChange(r) {
    const e = r.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("change", { detail: { value: this.value }, bubbles: !0, composed: !0 }));
  }
  handleFocus() {
    this.focused = !0, this.dispatchEvent(new CustomEvent("focus", { bubbles: !0, composed: !0 }));
  }
  handleBlur() {
    this.focused = !1, this.dispatchEvent(new CustomEvent("blur", { bubbles: !0, composed: !0 }));
  }
  render() {
    const r = this.value && this.value.length > 0, e = [
      "input-wrapper",
      `variant-${this.variant}`,
      this.focused ? "focused" : "",
      r ? "has-value" : "",
      this.showError ? "has-error" : ""
    ].join(" ");
    return me`
      <div class=${e}>
        ${this.label ? me`<label class="main-label">${this.label}</label>` : ""}
        <div class="input-container">
          <input
            type=${this.type}
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?required=${this.required}
            maxlength=${this.maxLength > 0 ? this.maxLength : void 0}
            @input=${this.handleInput}
            @change=${this.handleChange}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />
        </div>
        ${this.showError && this.errorMessage ? me`<span class="error-text">${this.errorMessage}</span>` : ""}
      </div>
    `;
  }
};
A.styles = Gt`
    :host {
      display: block;
      width: 100%;
      margin-bottom: 16px;
      --in-p: var(--uiv-primary-color, #6366f1);
      --in-text: var(--uiv-text-color, #1f2937);
      --in-bg: var(--uiv-surface-color, #ffffff);
      --in-border: var(--uiv-border-color, #d1d5db);
      --in-muted: var(--uiv-text-color-secondary, #9ca3af);
    }

    .input-wrapper {
      display: flex;
      flex-direction: column;
      position: relative;
      font-family: inherit;
    }

    label.main-label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--in-text);
      margin-bottom: 6px;
      transition: all 0.2s ease;
    }

    .input-container {
      position: relative;
      width: 100%;
    }

    input {
      width: 100%;
      padding: 10px 14px;
      font-size: 0.93rem;
      color: var(--in-text);
      background: var(--in-bg);
      border: 1px solid var(--in-border);
      border-radius: 6px;
      outline: none;
      box-sizing: border-box;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    input::placeholder {
      color: var(--in-muted);
      transition: opacity 0.2s ease;
    }

    input:disabled {
      background: #f3f4f6;
      color: #9ca3af;
      cursor: not-allowed;
    }

    /* ─── VARIANTS ─── */

    /* 1. Standard Focus state */
    .variant-standard input:focus:not(:disabled) {
      border-color: var(--in-p);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    }

    /* 2. Floating Label */
    .variant-float {
      padding-top: 14px;
    }
    .variant-float label.main-label {
      position: absolute;
      left: 14px;
      top: 25px;
      margin: 0;
      pointer-events: none;
      transform: translateY(-50%);
      font-size: 0.93rem;
      color: var(--in-muted);
      background: transparent;
      padding: 0;
    }
    .variant-float.focused label.main-label,
    .variant-float.has-value label.main-label {
      top: 0px;
      font-size: 0.75rem;
      color: var(--in-p);
      background: var(--in-bg);
      padding: 0 4px;
      transform: translateY(-50%);
    }
    .variant-float input::placeholder {
      opacity: 0;
    }
    .variant-float.focused input::placeholder {
      opacity: 1;
    }
    .variant-float input:focus:not(:disabled) {
      border-color: var(--in-p);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    }

    /* 3. Glow */
    .variant-glow input:focus:not(:disabled) {
      border-color: var(--in-p);
      box-shadow: 0 0 12px var(--in-p);
    }

    /* 4. Glitch / Cyber */
    .variant-glitch input {
      border: 2px solid var(--in-border);
      border-radius: 0;
      clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%);
    }
    .variant-glitch input:focus:not(:disabled) {
      border-color: var(--in-p);
      box-shadow: 4px 4px 0px #000000;
    }

    /* 5. Modern */
    .variant-modern input {
      background: #f9fafb;
      border-color: transparent;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04);
      border-radius: 8px;
    }
    .variant-modern input:focus:not(:disabled) {
      background: #ffffff;
      border-color: var(--in-p);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);
    }

    /* Error States */
    .has-error input {
      border-color: #ef4444 !important;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
    }
    .error-text {
      color: #ef4444;
      font-size: 0.78rem;
      margin-top: 5px;
      font-weight: 500;
    }
  `;
C([
  D({ type: String })
], A.prototype, "value", 2);
C([
  D({ type: String })
], A.prototype, "label", 2);
C([
  D({ type: String })
], A.prototype, "placeholder", 2);
C([
  D({ type: String })
], A.prototype, "type", 2);
C([
  D({ type: String })
], A.prototype, "variant", 2);
C([
  D({ type: Boolean })
], A.prototype, "disabled", 2);
C([
  D({ type: Boolean })
], A.prototype, "required", 2);
C([
  D({ type: Number, attribute: "max-length" })
], A.prototype, "maxLength", 2);
C([
  D({ type: String, attribute: "error-message" })
], A.prototype, "errorMessage", 2);
C([
  D({ type: Boolean, attribute: "show-error" })
], A.prototype, "showError", 2);
C([
  fr()
], A.prototype, "focused", 2);
C([
  N({
    attributeType: k.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], A.prototype, "valueConfig", 1);
C([
  N({
    attributeType: k.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], A.prototype, "labelConfig", 1);
C([
  N({
    attributeType: k.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Placeholder",
    fieldMappings: "placeholder"
  })
], A.prototype, "placeholderConfig", 1);
C([
  N({
    attributeType: k.PROPERTY,
    uiComponentType: L.DROPDOWN,
    displayLabel: "Input Type",
    fieldMappings: "type",
    optionItems: [
      { label: "Text", value: "text" },
      { label: "Password", value: "password" },
      { label: "Number", value: "number" },
      { label: "Email", value: "email" },
      { label: "Telephone", value: "tel" }
    ]
  })
], A.prototype, "typeConfig", 1);
C([
  N({
    attributeType: k.PROPERTY,
    uiComponentType: L.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard Input", value: "standard" },
      { label: "Floating Label", value: "float" },
      { label: "Glowing Outline", value: "glow" },
      { label: "Cyberpunk", value: "glitch" },
      { label: "Modern Soft", value: "modern" }
    ]
  })
], A.prototype, "variantConfig", 1);
C([
  N({
    attributeType: k.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], A.prototype, "disabledConfig", 1);
C([
  N({
    attributeType: k.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], A.prototype, "requiredConfig", 1);
C([
  N({
    attributeType: k.PROPERTY,
    uiComponentType: L.NUMBER_INPUT,
    displayLabel: "Max Length",
    fieldMappings: "maxLength"
  })
], A.prototype, "maxLengthConfig", 1);
C([
  N({
    attributeType: k.PROPERTY,
    uiComponentType: L.TEXT_INPUT,
    displayLabel: "Error Message",
    fieldMappings: "errorMessage"
  })
], A.prototype, "errorMessageConfig", 1);
C([
  N({
    attributeType: k.PROPERTY,
    uiComponentType: L.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], A.prototype, "showErrorConfig", 1);
C([
  N({
    attributeType: k.EVENT,
    displayLabel: "On Input",
    eventTrigger: "input"
  })
], A.prototype, "handleInput", 1);
C([
  N({
    attributeType: k.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], A.prototype, "handleChange", 1);
C([
  N({
    attributeType: k.EVENT,
    displayLabel: "On Focus",
    eventTrigger: "focus"
  })
], A.prototype, "handleFocus", 1);
C([
  N({
    attributeType: k.EVENT,
    displayLabel: "On Blur",
    eventTrigger: "blur"
  })
], A.prototype, "handleBlur", 1);
A = C([
  zt({
    name: "zero-text-input",
    version: "1.0.0",
    title: "Text Input",
    elementSelector: "zero-text-input",
    group: "Form Controls",
    iconName: "text-input-icon.png"
  }),
  Bt()
], A);
export {
  A as ZeroTextInput,
  nt as studioTemplate
};
