var It = Object.defineProperty;
var Ut = (r, e, t) => e in r ? It(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ve = (r, e, t) => Ut(r, typeof e != "symbol" ? e + "" : e, t);
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
var qe;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(y, E) {
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
    function c() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function g() {
      return l() || c();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", c = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !g && !y, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return ge(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ge({ __proto__: null });
      } : function() {
        return ge({});
      },
      has: E ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: E ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, w = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Tt(), L = typeof WeakMap == "function" ? WeakMap : Rt(), F = o ? Symbol.for("@reflect-metadata:registry") : void 0, ae = kt(), Ce = St(ae);
    function ut(i, s, a, u) {
      if (b(a)) {
        if (!He(i))
          throw new TypeError();
        if (!Ie(s))
          throw new TypeError();
        return _t(i, s);
      } else {
        if (!He(i))
          throw new TypeError();
        if (!k(s))
          throw new TypeError();
        if (!k(u) && !b(u) && !X(u))
          throw new TypeError();
        return X(u) && (u = void 0), a = U(a), wt(i, s, a, u);
      }
    }
    e("decorate", ut);
    function dt(i, s) {
      function a(u, v) {
        if (!k(u))
          throw new TypeError();
        if (!b(v) && !Ct(v))
          throw new TypeError();
        Oe(i, s, u, v);
      }
      return a;
    }
    e("metadata", dt);
    function ht(i, s, a, u) {
      if (!k(a))
        throw new TypeError();
      return b(u) || (u = U(u)), Oe(i, s, a, u);
    }
    e("defineMetadata", ht);
    function ft(i, s, a) {
      if (!k(s))
        throw new TypeError();
      return b(a) || (a = U(a)), Me(i, s, a);
    }
    e("hasMetadata", ft);
    function pt(i, s, a) {
      if (!k(s))
        throw new TypeError();
      return b(a) || (a = U(a)), pe(i, s, a);
    }
    e("hasOwnMetadata", pt);
    function yt(i, s, a) {
      if (!k(s))
        throw new TypeError();
      return b(a) || (a = U(a)), ke(i, s, a);
    }
    e("getMetadata", yt);
    function vt(i, s, a) {
      if (!k(s))
        throw new TypeError();
      return b(a) || (a = U(a)), Se(i, s, a);
    }
    e("getOwnMetadata", vt);
    function gt(i, s) {
      if (!k(i))
        throw new TypeError();
      return b(s) || (s = U(s)), Pe(i, s);
    }
    e("getMetadataKeys", gt);
    function bt(i, s) {
      if (!k(i))
        throw new TypeError();
      return b(s) || (s = U(s)), Te(i, s);
    }
    e("getOwnMetadataKeys", bt);
    function mt(i, s, a) {
      if (!k(s))
        throw new TypeError();
      if (b(a) || (a = U(a)), !k(s))
        throw new TypeError();
      b(a) || (a = U(a));
      var u = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return b(u) ? !1 : u.OrdinaryDeleteMetadata(i, s, a);
    }
    e("deleteMetadata", mt);
    function _t(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var u = i[a], v = u(s);
        if (!b(v) && !X(v)) {
          if (!Ie(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function wt(i, s, a, u) {
      for (var v = i.length - 1; v >= 0; --v) {
        var O = i[v], S = O(s, a, u);
        if (!b(S) && !X(S)) {
          if (!k(S))
            throw new TypeError();
          u = S;
        }
      }
      return u;
    }
    function Me(i, s, a) {
      var u = pe(i, s, a);
      if (u)
        return !0;
      var v = ve(s);
      return X(v) ? !1 : Me(i, v, a);
    }
    function pe(i, s, a) {
      var u = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return b(u) ? !1 : Ne(u.OrdinaryHasOwnMetadata(i, s, a));
    }
    function ke(i, s, a) {
      var u = pe(i, s, a);
      if (u)
        return Se(i, s, a);
      var v = ve(s);
      if (!X(v))
        return ke(i, v, a);
    }
    function Se(i, s, a) {
      var u = Q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!b(u))
        return u.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Oe(i, s, a, u) {
      var v = Q(
        a,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, a, u);
    }
    function Pe(i, s) {
      var a = Te(i, s), u = ve(i);
      if (u === null)
        return a;
      var v = Pe(u, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var O = new R(), S = [], m = 0, d = a; m < d.length; m++) {
        var h = d[m], f = O.has(h);
        f || (O.add(h), S.push(h));
      }
      for (var p = 0, _ = v; p < _.length; p++) {
        var h = _[p], f = O.has(h);
        f || (O.add(h), S.push(h));
      }
      return S;
    }
    function Te(i, s) {
      var a = Q(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
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
    function b(i) {
      return i === void 0;
    }
    function X(i) {
      return i === null;
    }
    function $t(i) {
      return typeof i == "symbol";
    }
    function k(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Et(i, s) {
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
      var a = "string", u = Ue(i, l);
      if (u !== void 0) {
        var v = u.call(i, a);
        if (k(v))
          throw new TypeError();
        return v;
      }
      return xt(i);
    }
    function xt(i, s) {
      var a, u;
      {
        var v = i.toString;
        if (le(v)) {
          var u = v.call(i);
          if (!k(u))
            return u;
        }
        var a = i.valueOf;
        if (le(a)) {
          var u = a.call(i);
          if (!k(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Ne(i) {
      return !!i;
    }
    function At(i) {
      return "" + i;
    }
    function U(i) {
      var s = Et(i);
      return $t(s) ? s : At(s);
    }
    function He(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function le(i) {
      return typeof i == "function";
    }
    function Ie(i) {
      return typeof i == "function";
    }
    function Ct(i) {
      switch (Re(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ye(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Ue(i, s) {
      var a = i[s];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function je(i) {
      var s = Ue(i, c);
      if (!le(s))
        throw new TypeError();
      var a = s.call(i);
      if (!k(a))
        throw new TypeError();
      return a;
    }
    function De(i) {
      return i.value;
    }
    function Le(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Be(i) {
      var s = i.return;
      s && s.call(i);
    }
    function ve(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || s !== w)
        return s;
      var a = i.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return s;
      var v = u.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function Mt() {
      var i;
      !b(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Ot(t.Reflect));
      var s, a, u, v = new L(), O = {
        registerProvider: S,
        getProvider: d,
        setProvider: f
      };
      return O;
      function S(p) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case b(s):
            s = p;
            break;
          case s === p:
            break;
          case b(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            u === void 0 && (u = new R()), u.add(p);
            break;
        }
      }
      function m(p, _) {
        if (!b(s)) {
          if (s.isProviderFor(p, _))
            return s;
          if (!b(a)) {
            if (a.isProviderFor(p, _))
              return s;
            if (!b(u))
              for (var x = je(u); ; ) {
                var C = Le(x);
                if (!C)
                  return;
                var I = De(C);
                if (I.isProviderFor(p, _))
                  return Be(x), I;
              }
          }
        }
        if (!b(i) && i.isProviderFor(p, _))
          return i;
      }
      function d(p, _) {
        var x = v.get(p), C;
        return b(x) || (C = x.get(_)), b(C) && (C = m(p, _), b(C) || (b(x) && (x = new T(), v.set(p, x)), x.set(_, C))), C;
      }
      function h(p) {
        if (b(p))
          throw new TypeError();
        return s === p || a === p || !b(u) && u.has(p);
      }
      function f(p, _, x) {
        if (!h(x))
          throw new Error("Metadata provider not registered.");
        var C = d(p, _);
        if (C !== x) {
          if (!b(C))
            return !1;
          var I = v.get(p);
          b(I) && (I = new T(), v.set(p, I)), I.set(_, x);
        }
        return !0;
      }
    }
    function kt() {
      var i;
      return !b(F) && k(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[F]), b(i) && (i = Mt()), !b(F) && k(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function St(i) {
      var s = new L(), a = {
        isProviderFor: function(h, f) {
          var p = s.get(h);
          return b(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: S,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return ae.registerProvider(a), a;
      function u(h, f, p) {
        var _ = s.get(h), x = !1;
        if (b(_)) {
          if (!p)
            return;
          _ = new T(), s.set(h, _), x = !0;
        }
        var C = _.get(f);
        if (b(C)) {
          if (!p)
            return;
          if (C = new T(), _.set(f, C), !i.setProvider(h, f, a))
            throw _.delete(f), x && s.delete(h), new Error("Wrong provider for target.");
        }
        return C;
      }
      function v(h, f, p) {
        var _ = u(
          f,
          p,
          /*Create*/
          !1
        );
        return b(_) ? !1 : Ne(_.has(h));
      }
      function O(h, f, p) {
        var _ = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (!b(_))
          return _.get(h);
      }
      function S(h, f, p, _) {
        var x = u(
          p,
          _,
          /*Create*/
          !0
        );
        x.set(h, f);
      }
      function m(h, f) {
        var p = [], _ = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (b(_))
          return p;
        for (var x = _.keys(), C = je(x), I = 0; ; ) {
          var ze = Le(C);
          if (!ze)
            return p.length = I, p;
          var Nt = De(ze);
          try {
            p[I] = Nt;
          } catch (Ht) {
            try {
              Be(C);
            } finally {
              throw Ht;
            }
          }
          I++;
        }
      }
      function d(h, f, p) {
        var _ = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (b(_) || !_.delete(h))
          return !1;
        if (_.size === 0) {
          var x = s.get(f);
          b(x) || (x.delete(p), x.size === 0 && s.delete(x));
        }
        return !0;
      }
    }
    function Ot(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, u = i.getOwnMetadata, v = i.getOwnMetadataKeys, O = i.deleteMetadata, S = new L(), m = {
        isProviderFor: function(d, h) {
          var f = S.get(d);
          return !b(f) && f.has(h) ? !0 : v(d, h).length ? (b(f) && (f = new R(), S.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: O
      };
      return m;
    }
    function Q(i, s, a) {
      var u = ae.getProvider(i, s);
      if (!b(u))
        return u;
      if (a) {
        if (ae.setProvider(i, s, Ce))
          return Ce;
        throw new Error("Illegal state.");
      }
    }
    function Pt() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function m(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[c] = function() {
            return this;
          }, m.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, m.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
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
          }), m.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, m.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, m.prototype.delete = function(d) {
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
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, S);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[c] = function() {
            return this.entries();
          }, m.prototype._find = function(d, h) {
            if (!ye(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ye(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return u;
      function v(m, d) {
        return m;
      }
      function O(m, d) {
        return d;
      }
      function S(m, d) {
        return [m, d];
      }
    }
    function Tt() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new T();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(a) {
            return this._map.has(a);
          }, s.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, s.prototype.delete = function(a) {
            return this._map.delete(a);
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
          }, s.prototype[c] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function Rt() {
      var i = 16, s = $.create(), a = u();
      return (
        /** @class */
        function() {
          function d() {
            this._key = u();
          }
          return d.prototype.has = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
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
            this._key = u();
          }, d;
        }()
      );
      function u() {
        var d;
        do
          d = "@@WeakMap@@" + m();
        while ($.has(s, d));
        return s[d] = !0, d;
      }
      function v(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: $.create() });
        }
        return d[a];
      }
      function O(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function S(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : O(h, d), h;
        }
        return O(new Array(d), d);
      }
      function m() {
        var d = S(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ge(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(qe || (qe = {}));
function jt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Dt(r) {
  return function(e) {
    if (jt(r)) {
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
function Lt(r) {
  return Dt(r);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), c = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const $ = new CSSStyleSheet(), w = (E = l.sheet) == null ? void 0 : E.cssRules;
          w && (Array.from(w).forEach((T) => $.insertRule(T.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          y.appendChild($);
        }
        c.forEach(($) => {
          const w = $.cloneNode(!0);
          y.appendChild(w);
        });
      }
    }
    return t;
  };
}
function zt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Vt(r) {
  return function(e, t) {
    try {
      zt(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let o = !0;
      if (typeof t == "string") {
        try {
          o = typeof e[t] != "function";
        } catch {
          o = !0;
        }
        o && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function j(r) {
  return Vt(r);
}
var N;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(N || (N = {}));
var H;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(H || (H = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, $e = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), We = /* @__PURE__ */ new WeakMap();
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
      n && (e = We.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && We.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Gt = (r) => new ot(typeof r == "string" ? r : r + "", void 0, Ee), qt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new ot(t, r, Ee);
}, Wt = (r, e) => {
  if ($e) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ue.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = $e ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Gt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ft, defineProperty: Xt, getOwnPropertyDescriptor: Yt, getOwnPropertyNames: Zt, getOwnPropertySymbols: Jt, getPrototypeOf: Qt } = Object, z = globalThis, Xe = z.trustedTypes, Kt = Xe ? Xe.emptyScript : "", be = z.reactiveElementPolyfillSupport, ee = (r, e) => r, de = { toAttribute(r, e) {
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
} }, xe = (r, e) => !Ft(r, e), Ye = { attribute: !0, type: String, converter: de, reflect: !1, useDefault: !1, hasChanged: xe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Y = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ye) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Xt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = Yt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(c) {
      this[t] = c;
    } };
    return { get: o, set(c) {
      const g = o == null ? void 0 : o.call(this);
      l == null || l.call(this, c), this.requestUpdate(e, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ye;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, n = [...Zt(t), ...Jt(t)];
      for (const o of n) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, o] of t) this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const o = this._$Eu(t, n);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const o of n) t.unshift(Fe(o));
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
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const c = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : de).toAttribute(t, n.type);
      this._$Em = e, c == null ? this.removeAttribute(o) : this.setAttribute(o, c), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, c;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const g = n.getPropertyOptions(o), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : de;
      this._$Em = o;
      const E = y.fromAttribute(t, g.type);
      this[o] = E ?? ((c = this._$Ej) == null ? void 0 : c.get(o)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var c;
    if (e !== void 0) {
      const g = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = g.getPropertyOptions(e)), !((n.hasChanged ?? xe)(l, t) || n.useDefault && n.reflect && l === ((c = this._$Ej) == null ? void 0 : c.get(e)) && !this.hasAttribute(g._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: o, wrapped: l }, c) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, c ?? t ?? this[e]), l !== !0 || c !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, c] of this._$Ep) this[l] = c;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, c] of o) {
        const { wrapped: g } = c, y = this[l];
        g !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, c, y);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
      }), this.update(t)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
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
Y.elementStyles = [], Y.shadowRootOptions = { mode: "open" }, Y[ee("elementProperties")] = /* @__PURE__ */ new Map(), Y[ee("finalized")] = /* @__PURE__ */ new Map(), be == null || be({ ReactiveElement: Y }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Ze = (r) => r, he = te.trustedTypes, Je = he ? he.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, st = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, at = "?" + B, er = `<${at}>`, W = document, ne = () => W.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Ae = Array.isArray, tr = (r) => Ae(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, V = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, lt = /^(?:script|style|textarea|title)$/i, rr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ce = rr(1), Z = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), G = W.createTreeWalker(W, 129);
function ct(r, e) {
  if (!Ae(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const nr = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", c = K;
  for (let g = 0; g < t; g++) {
    const y = r[g];
    let E, $, w = -1, T = 0;
    for (; T < y.length && (c.lastIndex = T, $ = c.exec(y), $ !== null); ) T = c.lastIndex, c === K ? $[1] === "!--" ? c = Qe : $[1] !== void 0 ? c = Ke : $[2] !== void 0 ? (lt.test($[2]) && (o = RegExp("</" + $[2], "g")), c = V) : $[3] !== void 0 && (c = V) : c === V ? $[0] === ">" ? (c = o ?? K, w = -1) : $[1] === void 0 ? w = -2 : (w = c.lastIndex - $[2].length, E = $[1], c = $[3] === void 0 ? V : $[3] === '"' ? tt : et) : c === tt || c === et ? c = V : c === Qe || c === Ke ? c = K : (c = V, o = void 0);
    const R = c === V && r[g + 1].startsWith("/>") ? " " : "";
    l += c === K ? y + er : w >= 0 ? (n.push(E), y.slice(0, w) + st + y.slice(w) + B + R) : y + B + (w === -2 ? g : R);
  }
  return [ct(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class oe {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, c = 0;
    const g = e.length - 1, y = this.parts, [E, $] = nr(e, t);
    if (this.el = oe.createElement(E, n), G.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = G.nextNode()) !== null && y.length < g; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(st)) {
          const T = $[c++], R = o.getAttribute(w).split(B), L = /([.?@])?(.*)/.exec(T);
          y.push({ type: 1, index: l, name: L[2], strings: R, ctor: L[1] === "." ? or : L[1] === "?" ? sr : L[1] === "@" ? ar : fe }), o.removeAttribute(w);
        } else w.startsWith(B) && (y.push({ type: 6, index: l }), o.removeAttribute(w));
        if (lt.test(o.tagName)) {
          const w = o.textContent.split(B), T = w.length - 1;
          if (T > 0) {
            o.textContent = he ? he.emptyScript : "";
            for (let R = 0; R < T; R++) o.append(w[R], ne()), G.nextNode(), y.push({ type: 2, index: ++l });
            o.append(w[T], ne());
          }
        }
      } else if (o.nodeType === 8) if (o.data === at) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(B, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += B.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = W.createElement("template");
    return n.innerHTML = e, n;
  }
}
function J(r, e, t = r, n) {
  var c, g;
  if (e === Z) return e;
  let o = n !== void 0 ? (c = t._$Co) == null ? void 0 : c[n] : t._$Cl;
  const l = ie(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((g = o == null ? void 0 : o._$AO) == null || g.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = J(r, o._$AS(r, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? W).importNode(t, !0);
    G.currentNode = o;
    let l = G.nextNode(), c = 0, g = 0, y = n[0];
    for (; y !== void 0; ) {
      if (c === y.index) {
        let E;
        y.type === 2 ? E = new se(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new lr(l, this, e)), this._$AV.push(E), y = n[++g];
      }
      c !== (y == null ? void 0 : y.index) && (l = G.nextNode(), c++);
    }
    return G.currentNode = W, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = J(this, e, t), ie(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = oe.createElement(ct(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const c = new ir(o, this), g = c.u(this.options);
      c.p(t), this.T(g), this._$AH = c;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new oe(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new se(this.O(ne()), this.O(ne()), this, this.options)) : n = t[o], n._$AI(l), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = Ze(e).nextSibling;
      Ze(e).remove(), e = o;
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
  constructor(e, t, n, o, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(e, t = this, n, o) {
    const l = this.strings;
    let c = !1;
    if (l === void 0) e = J(this, e, t, 0), c = !ie(e) || e !== this._$AH && e !== Z, c && (this._$AH = e);
    else {
      const g = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = J(this, g[n + y], t, y), E === Z && (E = this._$AH[y]), c || (c = !ie(E) || E !== this._$AH[y]), E === P ? e = P : e !== P && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    c && !o && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class sr extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class ar extends fe {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? P) === Z) return;
    const n = this._$AH, o = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== P && (n === P || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
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
    J(this, e);
  }
}
const _e = te.litHtmlPolyfillSupport;
_e == null || _e(oe, se), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
const cr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new se(e.insertBefore(ne(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis;
class re extends Y {
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
    return Z;
  }
}
var it;
re._$litElement$ = !0, re.finalized = !0, (it = q.litElementHydrateSupport) == null || it.call(q, { LitElement: re });
const we = q.litElementPolyfillSupport;
we == null || we({ LitElement: re });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: xe }, dr = (r = ur, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: c } = t;
    return { set(g) {
      const y = e.get.call(this);
      e.set.call(this, g), this.requestUpdate(c, y, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(c, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: c } = t;
    return function(g) {
      const y = this[c];
      e.call(this, g), this.requestUpdate(c, y, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function D(r) {
  return (e, t) => typeof t == "object" ? dr(r, e, t) : ((n, o, l) => {
    const c = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), c ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, M = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? fr(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (o = (n ? c(e, t, o) : c(o)) || o);
  return n && o && hr(e, t, o), o;
};
const nt = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:10px;padding:8px 12px;'>",
    "<div style='width:18px;height:18px;border-radius:4px;border:2px solid var(--uiv-primary-color,#6366f1);'></div>",
    "<span style='font-size:14px;color:var(--uiv-text-color,#1e293b);'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Checkbox"]
};
function pr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let A = class extends re {
  constructor() {
    super(...arguments), this.checked = !1, this.label = "Checkbox Label", this.description = "", this.variant = "standard", this.disabled = !1, this.required = !1, this.indeterminate = !1, this.value = "", this.errorMessage = "", this.showError = !1;
  }
  static getStudioTemplate(r) {
    if (!r) return nt;
    const e = pr(r.studio.display.label || "Checkbox");
    return {
      ...nt,
      templateHtml: [
        "<div style='display:flex;align-items:center;gap:10px;padding:6px 0px;'>",
        "<div style='width:18px;height:18px;border-radius:4px;border:2px solid var(--uiv-primary-color,#6366f1);display:flex;align-items:center;justify-content:center;color:#6366f1;font-size:12px;font-weight:bold;'>✓</div>",
        `<span style='font-size:14px;color:var(--uiv-text-color,#1f2937);font-family:inherit;'>${e}</span>`,
        "</div>"
      ].join("")
    };
  }
  get checkedConfig() {
    return this.checked;
  }
  set checkedConfig(r) {
    this.checked = !!r;
  }
  get labelConfig() {
    return this.label;
  }
  set labelConfig(r) {
    this.label = r;
  }
  get descriptionConfig() {
    return this.description;
  }
  set descriptionConfig(r) {
    this.description = r;
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
  get indeterminateConfig() {
    return this.indeterminate;
  }
  set indeterminateConfig(r) {
    this.indeterminate = !!r;
  }
  get valueConfig() {
    return this.value;
  }
  set valueConfig(r) {
    this.value = r;
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
  handleToggle() {
    this.disabled || (this.indeterminate ? (this.indeterminate = !1, this.checked = !0) : this.checked = !this.checked, this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          checked: this.checked,
          value: this.value,
          indeterminate: this.indeterminate
        },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  render() {
    const r = [
      this.checked ? "checked" : "",
      this.indeterminate ? "indeterminate-active" : "",
      this.disabled ? "disabled" : "",
      this.showError ? "has-error" : "",
      `variant-${this.variant}`
    ].join(" ");
    return ce`
      <div class="checkbox-wrapper ${r}" @click=${this.handleToggle}>
        <div class="checkbox-box ${this.indeterminate ? "indeterminate" : ""}">
          ${this.variant === "heart" ? ce`
                <svg class="heart-icon" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              ` : ""}
        </div>
        <span class="checkbox-label">${this.label}</span>
      </div>
      ${this.description ? ce`<div class="description">${this.description}</div>` : ""}
      ${this.showError && this.errorMessage ? ce`<div class="error-text">${this.errorMessage}</div>` : ""}
    `;
  }
};
A.styles = qt`
    :host {
      display: block;
      margin-bottom: 12px;
      --cb-p: var(--uiv-primary-color, #6366f1);
      --cb-text: var(--uiv-text-color, #1f2937);
      --cb-bg: var(--uiv-surface-color, #ffffff);
      --cb-border: var(--uiv-border-color, #d1d5db);
    }

    .checkbox-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      user-select: none;
      position: relative;
      transition: all 0.2s ease;
      padding: 4px 0;
    }

    .checkbox-wrapper.disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    /* Base checkbox box */
    .checkbox-box {
      width: 20px;
      height: 20px;
      border: 2px solid var(--cb-border);
      border-radius: 4px;
      background: var(--cb-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      box-sizing: border-box;
    }

    .checkbox-box::after {
      content: "";
      width: 5px;
      height: 10px;
      border: solid #ffffff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg) scale(0);
      transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: absolute;
      top: 1px;
    }

    /* Indeterminate line */
    .checkbox-box.indeterminate::after {
      content: "";
      width: 10px;
      height: 2px;
      background: #ffffff;
      border: none;
      transform: scale(0);
      top: 7px;
      left: 3px;
    }

    .checked .checkbox-box.indeterminate::after,
    .indeterminate-active .checkbox-box::after {
      transform: scale(1) !important;
      border: none !important;
      width: 10px;
      height: 2px;
      background: #ffffff;
      top: 7px;
      left: 3px;
    }

    /* State mappings */
    .checked .checkbox-box,
    .indeterminate-active .checkbox-box {
      background: var(--cb-p);
      border-color: var(--cb-p);
    }

    .checked .checkbox-box::after {
      transform: rotate(45deg) scale(1);
    }

    .checkbox-label {
      font-size: 0.93rem;
      color: var(--cb-text);
      font-weight: 500;
    }

    /* ─── VARIANTS ─── */

    /* Glow Variant */
    .variant-glow .checkbox-box {
      border-radius: 6px;
    }
    .checked.variant-glow .checkbox-box,
    .indeterminate-active.variant-glow .checkbox-box {
      box-shadow: 0 0 12px var(--cb-p);
    }

    /* Heart Variant */
    .variant-heart .checkbox-box {
      border: none;
      background: transparent;
      width: 22px;
      height: 22px;
    }
    .variant-heart .checkbox-box::after {
      display: none;
    }
    .variant-heart .heart-icon {
      fill: none;
      stroke: var(--cb-border);
      stroke-width: 2.5;
      width: 100%;
      height: 100%;
      transition: all 0.25s ease;
    }
    .checked.variant-heart .heart-icon {
      fill: #ef4444;
      stroke: #ef4444;
      transform: scale(1.15);
      filter: drop-shadow(0 2px 6px rgba(239, 68, 68, 0.4));
    }

    /* Tick / Round Variant */
    .variant-tick .checkbox-box {
      border-radius: 50%;
    }
    .checked.variant-tick .checkbox-box {
      background: #10b981;
      border-color: #10b981;
    }

    /* Label description */
    .description {
      font-size: 0.78rem;
      color: var(--uiv-text-color-secondary, #6b7280);
      margin-left: 30px;
      margin-top: -2px;
    }

    .has-error .checkbox-box {
      border-color: #ef4444 !important;
    }
    .error-text {
      color: #ef4444;
      font-size: 0.78rem;
      margin-left: 30px;
      margin-top: 4px;
      font-weight: 500;
    }
  `;
M([
  D({ type: Boolean })
], A.prototype, "checked", 2);
M([
  D({ type: String })
], A.prototype, "label", 2);
M([
  D({ type: String })
], A.prototype, "description", 2);
M([
  D({ type: String })
], A.prototype, "variant", 2);
M([
  D({ type: Boolean })
], A.prototype, "disabled", 2);
M([
  D({ type: Boolean })
], A.prototype, "required", 2);
M([
  D({ type: Boolean })
], A.prototype, "indeterminate", 2);
M([
  D({ type: String })
], A.prototype, "value", 2);
M([
  D({ type: String, attribute: "error-message" })
], A.prototype, "errorMessage", 2);
M([
  D({ type: Boolean, attribute: "show-error" })
], A.prototype, "showError", 2);
M([
  j({
    attributeType: H.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Checked",
    fieldMappings: "checked"
  })
], A.prototype, "checkedConfig", 1);
M([
  j({
    attributeType: H.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], A.prototype, "labelConfig", 1);
M([
  j({
    attributeType: H.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Description",
    fieldMappings: "description"
  })
], A.prototype, "descriptionConfig", 1);
M([
  j({
    attributeType: H.PROPERTY,
    uiComponentType: N.DROPDOWN,
    displayLabel: "Checkbox Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard Box", value: "standard" },
      { label: "Glowing Box", value: "glow" },
      { label: "Heart Icon", value: "heart" },
      { label: "Round Tick", value: "tick" }
    ]
  })
], A.prototype, "variantConfig", 1);
M([
  j({
    attributeType: H.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], A.prototype, "disabledConfig", 1);
M([
  j({
    attributeType: H.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Required Field",
    fieldMappings: "required"
  })
], A.prototype, "requiredConfig", 1);
M([
  j({
    attributeType: H.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Indeterminate State",
    fieldMappings: "indeterminate"
  })
], A.prototype, "indeterminateConfig", 1);
M([
  j({
    attributeType: H.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Value Key",
    fieldMappings: "value"
  })
], A.prototype, "valueConfig", 1);
M([
  j({
    attributeType: H.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Error Message",
    fieldMappings: "errorMessage"
  })
], A.prototype, "errorMessageConfig", 1);
M([
  j({
    attributeType: H.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], A.prototype, "showErrorConfig", 1);
A = M([
  Lt({
    name: "zero-checkbox",
    version: "1.0.0",
    title: "Checkbox",
    elementSelector: "zero-checkbox",
    group: "Form Controls",
    iconName: "checkbox-icon.png"
  }),
  Bt()
], A);
export {
  A as ZeroCheckbox,
  nt as studioTemplate
};
