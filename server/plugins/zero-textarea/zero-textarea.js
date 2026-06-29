var Ht = Object.defineProperty;
var Ut = (r, e, t) => e in r ? Ht(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var We = (r, e, t) => Ut(r, typeof e != "symbol" ? e + "" : e, t);
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
var Ve;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof qe == "object" ? qe : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = o(r);
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
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !g && !y, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return ge(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ge({ __proto__: null });
      } : function() {
        return ge({});
      },
      has: E ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: E ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, w = Object.getPrototypeOf(Function), R = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Rt(), H = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), j = typeof WeakMap == "function" ? WeakMap : Nt(), F = o ? Symbol.for("@reflect-metadata:registry") : void 0, le = Ot(), Ae = Tt(le);
    function dt(i, a, s, h) {
      if (b(s)) {
        if (!Ie(i))
          throw new TypeError();
        if (!Le(a))
          throw new TypeError();
        return wt(i, a);
      } else {
        if (!Ie(i))
          throw new TypeError();
        if (!S(a))
          throw new TypeError();
        if (!S(h) && !b(h) && !Y(h))
          throw new TypeError();
        return Y(h) && (h = void 0), s = D(s), $t(i, a, s, h);
      }
    }
    e("decorate", dt);
    function ct(i, a) {
      function s(h, v) {
        if (!S(h))
          throw new TypeError();
        if (!b(v) && !Mt(v))
          throw new TypeError();
        Te(i, a, h, v);
      }
      return s;
    }
    e("metadata", ct);
    function ft(i, a, s, h) {
      if (!S(s))
        throw new TypeError();
      return b(h) || (h = D(h)), Te(i, a, s, h);
    }
    e("defineMetadata", ft);
    function pt(i, a, s) {
      if (!S(a))
        throw new TypeError();
      return b(s) || (s = D(s)), Me(i, a, s);
    }
    e("hasMetadata", pt);
    function yt(i, a, s) {
      if (!S(a))
        throw new TypeError();
      return b(s) || (s = D(s)), pe(i, a, s);
    }
    e("hasOwnMetadata", yt);
    function vt(i, a, s) {
      if (!S(a))
        throw new TypeError();
      return b(s) || (s = D(s)), Se(i, a, s);
    }
    e("getMetadata", vt);
    function gt(i, a, s) {
      if (!S(a))
        throw new TypeError();
      return b(s) || (s = D(s)), Oe(i, a, s);
    }
    e("getOwnMetadata", gt);
    function bt(i, a) {
      if (!S(i))
        throw new TypeError();
      return b(a) || (a = D(a)), Pe(i, a);
    }
    e("getMetadataKeys", bt);
    function mt(i, a) {
      if (!S(i))
        throw new TypeError();
      return b(a) || (a = D(a)), Re(i, a);
    }
    e("getOwnMetadataKeys", mt);
    function _t(i, a, s) {
      if (!S(a))
        throw new TypeError();
      if (b(s) || (s = D(s)), !S(a))
        throw new TypeError();
      b(s) || (s = D(s));
      var h = Q(
        a,
        s,
        /*Create*/
        !1
      );
      return b(h) ? !1 : h.OrdinaryDeleteMetadata(i, a, s);
    }
    e("deleteMetadata", _t);
    function wt(i, a) {
      for (var s = i.length - 1; s >= 0; --s) {
        var h = i[s], v = h(a);
        if (!b(v) && !Y(v)) {
          if (!Le(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function $t(i, a, s, h) {
      for (var v = i.length - 1; v >= 0; --v) {
        var T = i[v], O = T(a, s, h);
        if (!b(O) && !Y(O)) {
          if (!S(O))
            throw new TypeError();
          h = O;
        }
      }
      return h;
    }
    function Me(i, a, s) {
      var h = pe(i, a, s);
      if (h)
        return !0;
      var v = ve(a);
      return Y(v) ? !1 : Me(i, v, s);
    }
    function pe(i, a, s) {
      var h = Q(
        a,
        s,
        /*Create*/
        !1
      );
      return b(h) ? !1 : Ne(h.OrdinaryHasOwnMetadata(i, a, s));
    }
    function Se(i, a, s) {
      var h = pe(i, a, s);
      if (h)
        return Oe(i, a, s);
      var v = ve(a);
      if (!Y(v))
        return Se(i, v, s);
    }
    function Oe(i, a, s) {
      var h = Q(
        a,
        s,
        /*Create*/
        !1
      );
      if (!b(h))
        return h.OrdinaryGetOwnMetadata(i, a, s);
    }
    function Te(i, a, s, h) {
      var v = Q(
        s,
        h,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, s, h);
    }
    function Pe(i, a) {
      var s = Re(i, a), h = ve(i);
      if (h === null)
        return s;
      var v = Pe(h, a);
      if (v.length <= 0)
        return s;
      if (s.length <= 0)
        return v;
      for (var T = new H(), O = [], m = 0, d = s; m < d.length; m++) {
        var c = d[m], f = T.has(c);
        f || (T.add(c), O.push(c));
      }
      for (var p = 0, _ = v; p < _.length; p++) {
        var c = _[p], f = T.has(c);
        f || (T.add(c), O.push(c));
      }
      return O;
    }
    function Re(i, a) {
      var s = Q(
        i,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(i, a) : [];
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
    function Ct(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Et(i, a) {
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
      var s = "string", h = He(i, l);
      if (h !== void 0) {
        var v = h.call(i, s);
        if (S(v))
          throw new TypeError();
        return v;
      }
      return xt(i);
    }
    function xt(i, a) {
      var s, h;
      {
        var v = i.toString;
        if (ue(v)) {
          var h = v.call(i);
          if (!S(h))
            return h;
        }
        var s = i.valueOf;
        if (ue(s)) {
          var h = s.call(i);
          if (!S(h))
            return h;
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
    function D(i) {
      var a = Et(i);
      return Ct(a) ? a : At(a);
    }
    function Ie(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ue(i) {
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
    function ye(i, a) {
      return i === a || i !== i && a !== a;
    }
    function He(i, a) {
      var s = i[a];
      if (s != null) {
        if (!ue(s))
          throw new TypeError();
        return s;
      }
    }
    function Ue(i) {
      var a = He(i, u);
      if (!ue(a))
        throw new TypeError();
      var s = a.call(i);
      if (!S(s))
        throw new TypeError();
      return s;
    }
    function De(i) {
      return i.value;
    }
    function je(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function ze(i) {
      var a = i.return;
      a && a.call(i);
    }
    function ve(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || a !== w)
        return a;
      var s = i.prototype, h = s && Object.getPrototypeOf(s);
      if (h == null || h === Object.prototype)
        return a;
      var v = h.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function St() {
      var i;
      !b(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Pt(t.Reflect));
      var a, s, h, v = new j(), T = {
        registerProvider: O,
        getProvider: d,
        setProvider: f
      };
      return T;
      function O(p) {
        if (!Object.isExtensible(T))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case b(a):
            a = p;
            break;
          case a === p:
            break;
          case b(s):
            s = p;
            break;
          case s === p:
            break;
          default:
            h === void 0 && (h = new H()), h.add(p);
            break;
        }
      }
      function m(p, _) {
        if (!b(a)) {
          if (a.isProviderFor(p, _))
            return a;
          if (!b(s)) {
            if (s.isProviderFor(p, _))
              return a;
            if (!b(h))
              for (var A = Ue(h); ; ) {
                var M = je(A);
                if (!M)
                  return;
                var U = De(M);
                if (U.isProviderFor(p, _))
                  return ze(A), U;
              }
          }
        }
        if (!b(i) && i.isProviderFor(p, _))
          return i;
      }
      function d(p, _) {
        var A = v.get(p), M;
        return b(A) || (M = A.get(_)), b(M) && (M = m(p, _), b(M) || (b(A) && (A = new R(), v.set(p, A)), A.set(_, M))), M;
      }
      function c(p) {
        if (b(p))
          throw new TypeError();
        return a === p || s === p || !b(h) && h.has(p);
      }
      function f(p, _, A) {
        if (!c(A))
          throw new Error("Metadata provider not registered.");
        var M = d(p, _);
        if (M !== A) {
          if (!b(M))
            return !1;
          var U = v.get(p);
          b(U) && (U = new R(), v.set(p, U)), U.set(_, A);
        }
        return !0;
      }
    }
    function Ot() {
      var i;
      return !b(F) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[F]), b(i) && (i = St()), !b(F) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Tt(i) {
      var a = new j(), s = {
        isProviderFor: function(c, f) {
          var p = a.get(c);
          return b(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: T,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return le.registerProvider(s), s;
      function h(c, f, p) {
        var _ = a.get(c), A = !1;
        if (b(_)) {
          if (!p)
            return;
          _ = new R(), a.set(c, _), A = !0;
        }
        var M = _.get(f);
        if (b(M)) {
          if (!p)
            return;
          if (M = new R(), _.set(f, M), !i.setProvider(c, f, s))
            throw _.delete(f), A && a.delete(c), new Error("Wrong provider for target.");
        }
        return M;
      }
      function v(c, f, p) {
        var _ = h(
          f,
          p,
          /*Create*/
          !1
        );
        return b(_) ? !1 : Ne(_.has(c));
      }
      function T(c, f, p) {
        var _ = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (!b(_))
          return _.get(c);
      }
      function O(c, f, p, _) {
        var A = h(
          p,
          _,
          /*Create*/
          !0
        );
        A.set(c, f);
      }
      function m(c, f) {
        var p = [], _ = h(
          c,
          f,
          /*Create*/
          !1
        );
        if (b(_))
          return p;
        for (var A = _.keys(), M = Ue(A), U = 0; ; ) {
          var Be = je(M);
          if (!Be)
            return p.length = U, p;
          var It = De(Be);
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
      function d(c, f, p) {
        var _ = h(
          f,
          p,
          /*Create*/
          !1
        );
        if (b(_) || !_.delete(c))
          return !1;
        if (_.size === 0) {
          var A = a.get(f);
          b(A) || (A.delete(p), A.size === 0 && a.delete(A));
        }
        return !0;
      }
    }
    function Pt(i) {
      var a = i.defineMetadata, s = i.hasOwnMetadata, h = i.getOwnMetadata, v = i.getOwnMetadataKeys, T = i.deleteMetadata, O = new j(), m = {
        isProviderFor: function(d, c) {
          var f = O.get(d);
          return !b(f) && f.has(c) ? !0 : v(d, c).length ? (b(f) && (f = new H(), O.set(d, f)), f.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: h,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: T
      };
      return m;
    }
    function Q(i, a, s) {
      var h = le.getProvider(i, a);
      if (!b(h))
        return h;
      if (s) {
        if (le.setProvider(i, a, Ae))
          return Ae;
        throw new Error("Illegal state.");
      }
    }
    function Rt() {
      var i = {}, a = [], s = (
        /** @class */
        function() {
          function m(d, c, f) {
            this._index = 0, this._keys = d, this._values = c, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var c = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), d;
          }, m.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: d, done: !0 };
          }, m;
        }()
      ), h = (
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
            var c = this._find(
              d,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, m.prototype.set = function(d, c) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = c, this;
          }, m.prototype.delete = function(d) {
            var c = this._find(
              d,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var f = this._keys.length, p = c + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ye(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
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
          }, m.prototype._find = function(d, c) {
            if (!ye(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ye(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return h;
      function v(m, d) {
        return m;
      }
      function T(m, d) {
        return d;
      }
      function O(m, d) {
        return [m, d];
      }
    }
    function kt() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new R();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(s) {
            return this._map.has(s);
          }, a.prototype.add = function(s) {
            return this._map.set(s, s), this;
          }, a.prototype.delete = function(s) {
            return this._map.delete(s);
          }, a.prototype.clear = function() {
            this._map.clear();
          }, a.prototype.keys = function() {
            return this._map.keys();
          }, a.prototype.values = function() {
            return this._map.keys();
          }, a.prototype.entries = function() {
            return this._map.entries();
          }, a.prototype["@@iterator"] = function() {
            return this.keys();
          }, a.prototype[u] = function() {
            return this.keys();
          }, a;
        }()
      );
      return i;
    }
    function Nt() {
      var i = 16, a = $.create(), s = h();
      return (
        /** @class */
        function() {
          function d() {
            this._key = h();
          }
          return d.prototype.has = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? $.has(f, this._key) : !1;
          }, d.prototype.get = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? $.get(f, this._key) : void 0;
          }, d.prototype.set = function(c, f) {
            var p = v(
              c,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, d.prototype.delete = function(c) {
            var f = v(
              c,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = h();
          }, d;
        }()
      );
      function h() {
        var d;
        do
          d = "@@WeakMap@@" + m();
        while ($.has(a, d));
        return a[d] = !0, d;
      }
      function v(d, c) {
        if (!n.call(d, s)) {
          if (!c)
            return;
          Object.defineProperty(d, s, { value: $.create() });
        }
        return d[s];
      }
      function T(d, c) {
        for (var f = 0; f < c; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : T(c, d), c;
        }
        return T(new Array(d), d);
      }
      function m() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var c = "", f = 0; f < i; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (c += "-"), p < 16 && (c += "0"), c += p.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function ge(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function Dt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function jt(r) {
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
function Wt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function qt(r) {
  return function(e, t) {
    try {
      Wt(r);
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
function I(r) {
  return qt(r);
}
var N;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(N || (N = {}));
var k;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(k || (k = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, $e = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ce = Symbol(), Ge = /* @__PURE__ */ new WeakMap();
let at = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ce) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
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
const Vt = (r) => new at(typeof r == "string" ? r : r + "", void 0, Ce), Gt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new at(t, r, Ce);
}, Ft = (r, e) => {
  if ($e) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = he.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = $e ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Vt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Yt, defineProperty: Xt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Jt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, B = globalThis, Ye = B.trustedTypes, er = Ye ? Ye.emptyScript : "", be = B.reactiveElementPolyfillSupport, te = (r, e) => r, de = { toAttribute(r, e) {
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
} }, Ee = (r, e) => !Yt(r, e), Xe = { attribute: !0, type: String, converter: de, reflect: !1, useDefault: !1, hasChanged: Ee };
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
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Xt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = Zt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: o, set(u) {
      const g = o == null ? void 0 : o.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Xe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(te("elementProperties"))) return;
    const e = Kt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(te("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(te("properties"))) {
      const t = this.properties, n = [...Jt(t), ...Qt(t)];
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
  _$ET(e, t) {
    var l;
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : de).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const g = n.getPropertyOptions(o), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : de;
      this._$Em = o;
      const E = y.fromAttribute(t, g.type);
      this[o] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var u;
    if (e !== void 0) {
      const g = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = g.getPropertyOptions(e)), !((n.hasChanged ?? Ee)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(g._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: o, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) {
        const { wrapped: g } = u, y = this[l];
        g !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[te("elementProperties")] = /* @__PURE__ */ new Map(), X[te("finalized")] = /* @__PURE__ */ new Map(), be == null || be({ ReactiveElement: X }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re = globalThis, Ze = (r) => r, ce = re.trustedTypes, Je = ce ? ce.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, st = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, lt = "?" + z, tr = `<${lt}>`, G = document, ie = () => G.createComment(""), oe = (r) => r === null || typeof r != "object" && typeof r != "function", xe = Array.isArray, rr = (r) => xe(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, W = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, ut = /^(?:script|style|textarea|title)$/i, nr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ee = nr(1), Z = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), q = G.createTreeWalker(G, 129);
function ht(r, e) {
  if (!xe(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const ir = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let g = 0; g < t; g++) {
    const y = r[g];
    let E, $, w = -1, R = 0;
    for (; R < y.length && (u.lastIndex = R, $ = u.exec(y), $ !== null); ) R = u.lastIndex, u === K ? $[1] === "!--" ? u = Qe : $[1] !== void 0 ? u = Ke : $[2] !== void 0 ? (ut.test($[2]) && (o = RegExp("</" + $[2], "g")), u = W) : $[3] !== void 0 && (u = W) : u === W ? $[0] === ">" ? (u = o ?? K, w = -1) : $[1] === void 0 ? w = -2 : (w = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? W : $[3] === '"' ? tt : et) : u === tt || u === et ? u = W : u === Qe || u === Ke ? u = K : (u = W, o = void 0);
    const H = u === W && r[g + 1].startsWith("/>") ? " " : "";
    l += u === K ? y + tr : w >= 0 ? (n.push(E), y.slice(0, w) + st + y.slice(w) + z + H) : y + z + (w === -2 ? g : H);
  }
  return [ht(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ae {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const g = e.length - 1, y = this.parts, [E, $] = ir(e, t);
    if (this.el = ae.createElement(E, n), q.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = q.nextNode()) !== null && y.length < g; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(st)) {
          const R = $[u++], H = o.getAttribute(w).split(z), j = /([.?@])?(.*)/.exec(R);
          y.push({ type: 1, index: l, name: j[2], strings: H, ctor: j[1] === "." ? ar : j[1] === "?" ? sr : j[1] === "@" ? lr : fe }), o.removeAttribute(w);
        } else w.startsWith(z) && (y.push({ type: 6, index: l }), o.removeAttribute(w));
        if (ut.test(o.tagName)) {
          const w = o.textContent.split(z), R = w.length - 1;
          if (R > 0) {
            o.textContent = ce ? ce.emptyScript : "";
            for (let H = 0; H < R; H++) o.append(w[H], ie()), q.nextNode(), y.push({ type: 2, index: ++l });
            o.append(w[R], ie());
          }
        }
      } else if (o.nodeType === 8) if (o.data === lt) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(z, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += z.length - 1;
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
  let o = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = oe(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((g = o == null ? void 0 : o._$AO) == null || g.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = J(r, o._$AS(r, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? G).importNode(t, !0);
    q.currentNode = o;
    let l = q.nextNode(), u = 0, g = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new se(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new ur(l, this, e)), this._$AV.push(E), y = n[++g];
      }
      u !== (y == null ? void 0 : y.index) && (l = q.nextNode(), u++);
    }
    return q.currentNode = G, o;
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
    e = J(this, e, t), oe(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : rr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && oe(this._$AH) ? this._$AA.nextSibling.data = e : this.T(G.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ae.createElement(ht(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const u = new or(o, this), g = u.u(this.options);
      u.p(t), this.T(g), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new ae(e)), t;
  }
  k(e) {
    xe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new se(this.O(ie()), this.O(ie()), this, this.options)) : n = t[o], n._$AI(l), o++;
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
    let u = !1;
    if (l === void 0) e = J(this, e, t, 0), u = !oe(e) || e !== this._$AH && e !== Z, u && (this._$AH = e);
    else {
      const g = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = J(this, g[n + y], t, y), E === Z && (E = this._$AH[y]), u || (u = !oe(E) || E !== this._$AH[y]), E === P ? e = P : e !== P && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !o && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends fe {
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
class lr extends fe {
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
const _e = re.litHtmlPolyfillSupport;
_e == null || _e(ae, se), (re.litHtmlVersions ?? (re.litHtmlVersions = [])).push("3.3.3");
const hr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new se(e.insertBefore(ie(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = hr(t, this.renderRoot, this.renderOptions);
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
ne._$litElement$ = !0, ne.finalized = !0, (ot = V.litElementHydrateSupport) == null || ot.call(V, { LitElement: ne });
const we = V.litElementPolyfillSupport;
we == null || we({ LitElement: ne });
(V.litElementVersions ?? (V.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ee }, cr = (r = dr, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
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
function L(r) {
  return (e, t) => typeof t == "object" ? cr(r, e, t) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, x = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? pr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(e, t, o) : u(o)) || o);
  return n && o && fr(e, t, o), o;
};
const nt = {
  kind: "generic",
  templateHtml: [
    "<div style='display:grid;gap:6px;padding:8px 0px;'>",
    "<label style='font-size:12px;font-weight:600;color:#374151;'>{{display:label}}</label>",
    "<div style='border:1px solid #d1d5db;border-radius:6px;padding:10px 14px;background:#ffffff;color:#9ca3af;font-size:14px;min-height:80px;'>{{display:placeholder}}</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Textarea"]
};
function it(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let C = class extends ne {
  constructor() {
    super(...arguments), this.value = "", this.label = "Textarea", this.placeholder = "Enter your text here...", this.variant = "standard", this.rows = 4, this.disabled = !1, this.required = !1, this.maxLength = 0, this.autoResize = !1, this.showCharCount = !0, this.showWordCount = !1, this.errorMessage = "", this.showError = !1;
  }
  static getStudioTemplate(r) {
    if (!r) return nt;
    const e = it(r.studio.display.label || "Textarea"), t = it(r.studio.display.placeholder || "Enter text...");
    return {
      ...nt,
      templateHtml: [
        "<div style='display:block;width:100%;font-family:inherit;'>",
        `<label style='display:block;margin-bottom:6px;font-size:13px;font-weight:600;color:var(--uiv-text-color,#374151);'>${e}</label>`,
        `<div style='width:100%;padding:10px 12px;border:1px solid var(--uiv-border-color,#d1d5db);border-radius:6px;font-size:14px;background:var(--uiv-surface-color,#ffffff);color:#9ca3af;min-height:80px;'>${t}</div>`,
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
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "standard";
  }
  get rowsConfig() {
    return this.rows;
  }
  set rowsConfig(r) {
    this.rows = Number(r) || 4;
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
  get autoResizeConfig() {
    return this.autoResize;
  }
  set autoResizeConfig(r) {
    this.autoResize = !!r;
  }
  get showCharCountConfig() {
    return this.showCharCount;
  }
  set showCharCountConfig(r) {
    this.showCharCount = !!r;
  }
  get showWordCountConfig() {
    return this.showWordCount;
  }
  set showWordCountConfig(r) {
    this.showWordCount = !!r;
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
  getWordCount() {
    return this.value.trim() ? this.value.trim().split(/\s+/).length : 0;
  }
  autoResizeTextarea(r) {
    this.autoResize && (r.style.height = "auto", r.style.height = `${r.scrollHeight}px`);
  }
  handleInput(r) {
    const e = r.target;
    this.value = e.value, this.autoResizeTextarea(e), this.dispatchEvent(
      new CustomEvent("input", {
        detail: {
          value: this.value,
          characterCount: this.value.length,
          wordCount: this.getWordCount()
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  handleChange(r) {
    const e = r.target;
    this.value = e.value, this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          value: this.value,
          characterCount: this.value.length,
          wordCount: this.getWordCount()
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  updated(r) {
    var e;
    if (super.updated(r), r.has("value") && this.autoResize) {
      const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("textarea");
      t && this.autoResizeTextarea(t);
    }
  }
  render() {
    const r = [
      "textarea-wrapper",
      `variant-${this.variant}`,
      this.showError ? "has-error" : ""
    ].join(" ");
    return ee`
      <div class=${r}>
        ${this.label ? ee`<label>${this.label}</label>` : ""}
        <textarea
          .value=${this.value}
          placeholder=${this.placeholder}
          rows=${this.rows}
          maxlength=${this.maxLength > 0 ? this.maxLength : void 0}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange}
        ></textarea>
        
        ${this.showCharCount || this.showWordCount || this.showError ? ee`
              <div class="textarea-footer">
                <div class="error-text">
                  ${this.showError ? this.errorMessage : ""}
                </div>
                <div class="counts">
                  ${this.showCharCount ? ee`<span>${this.value.length}${this.maxLength > 0 ? `/${this.maxLength}` : ""} chars</span>` : ""}
                  ${this.showWordCount ? ee`<span>${this.getWordCount()} words</span>` : ""}
                </div>
              </div>
            ` : ""}
      </div>
    `;
  }
};
C.styles = Gt`
    :host {
      display: block;
      width: 100%;
      margin-bottom: 16px;
      --ta-p: var(--uiv-primary-color, #6366f1);
      --ta-text: var(--uiv-text-color, #1f2937);
      --ta-bg: var(--uiv-surface-color, #ffffff);
      --ta-border: var(--uiv-border-color, #d1d5db);
      --ta-muted: var(--uiv-text-color-secondary, #9ca3af);
    }

    .textarea-wrapper {
      display: flex;
      flex-direction: column;
      font-family: inherit;
    }

    label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--ta-text);
      margin-bottom: 6px;
    }

    textarea {
      width: 100%;
      padding: 10px 12px;
      font-size: 0.93rem;
      color: var(--ta-text);
      background: var(--ta-bg);
      border: 1px solid var(--ta-border);
      border-radius: 6px;
      outline: none;
      box-sizing: border-box;
      line-height: 1.5;
      resize: vertical;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    textarea:disabled {
      background: #f3f4f6;
      color: #9ca3af;
      cursor: not-allowed;
    }

    /* ─── VARIANTS ─── */

    /* Standard */
    .variant-standard textarea:focus:not(:disabled) {
      border-color: var(--ta-p);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    }

    /* Modern */
    .variant-modern textarea {
      background: #f9fafb;
      border-color: transparent;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04);
      border-radius: 8px;
    }
    .variant-modern textarea:focus:not(:disabled) {
      background: #ffffff;
      border-color: var(--ta-p);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);
    }

    /* Frosted */
    .variant-frosted textarea {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: var(--ta-text);
    }
    .variant-frosted textarea:focus:not(:disabled) {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.35);
    }

    .textarea-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 6px;
      font-size: 0.78rem;
      color: var(--ta-muted);
    }

    .counts {
      display: flex;
      gap: 12px;
    }

    .has-error textarea {
      border-color: #ef4444 !important;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
    }
    .error-text {
      color: #ef4444;
      font-weight: 500;
    }
  `;
x([
  L({ type: String })
], C.prototype, "value", 2);
x([
  L({ type: String })
], C.prototype, "label", 2);
x([
  L({ type: String })
], C.prototype, "placeholder", 2);
x([
  L({ type: String })
], C.prototype, "variant", 2);
x([
  L({ type: Number })
], C.prototype, "rows", 2);
x([
  L({ type: Boolean })
], C.prototype, "disabled", 2);
x([
  L({ type: Boolean })
], C.prototype, "required", 2);
x([
  L({ type: Number, attribute: "max-length" })
], C.prototype, "maxLength", 2);
x([
  L({ type: Boolean, attribute: "auto-resize" })
], C.prototype, "autoResize", 2);
x([
  L({ type: Boolean, attribute: "show-char-count" })
], C.prototype, "showCharCount", 2);
x([
  L({ type: Boolean, attribute: "show-word-count" })
], C.prototype, "showWordCount", 2);
x([
  L({ type: String, attribute: "error-message" })
], C.prototype, "errorMessage", 2);
x([
  L({ type: Boolean, attribute: "show-error" })
], C.prototype, "showError", 2);
x([
  I({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXTAREA,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], C.prototype, "valueConfig", 1);
x([
  I({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], C.prototype, "labelConfig", 1);
x([
  I({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Placeholder",
    fieldMappings: "placeholder"
  })
], C.prototype, "placeholderConfig", 1);
x([
  I({
    attributeType: k.PROPERTY,
    uiComponentType: N.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard Box", value: "standard" },
      { label: "Modern Soft", value: "modern" },
      { label: "Frosted Glass", value: "frosted" }
    ]
  })
], C.prototype, "variantConfig", 1);
x([
  I({
    attributeType: k.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Rows",
    fieldMappings: "rows"
  })
], C.prototype, "rowsConfig", 1);
x([
  I({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], C.prototype, "disabledConfig", 1);
x([
  I({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], C.prototype, "requiredConfig", 1);
x([
  I({
    attributeType: k.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Max Length",
    fieldMappings: "maxLength"
  })
], C.prototype, "maxLengthConfig", 1);
x([
  I({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Auto Resize",
    fieldMappings: "autoResize"
  })
], C.prototype, "autoResizeConfig", 1);
x([
  I({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Character Count",
    fieldMappings: "showCharCount"
  })
], C.prototype, "showCharCountConfig", 1);
x([
  I({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Word Count",
    fieldMappings: "showWordCount"
  })
], C.prototype, "showWordCountConfig", 1);
x([
  I({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Error Message",
    fieldMappings: "errorMessage"
  })
], C.prototype, "errorMessageConfig", 1);
x([
  I({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], C.prototype, "showErrorConfig", 1);
x([
  I({
    attributeType: k.EVENT,
    displayLabel: "On Input",
    eventTrigger: "input"
  })
], C.prototype, "handleInput", 1);
x([
  I({
    attributeType: k.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], C.prototype, "handleChange", 1);
C = x([
  zt({
    name: "zero-textarea",
    version: "1.0.0",
    title: "Textarea",
    elementSelector: "zero-textarea",
    group: "Form Controls",
    iconName: "textarea-icon.png"
  }),
  Bt()
], C);
export {
  C as ZeroTextarea,
  nt as studioTemplate
};
