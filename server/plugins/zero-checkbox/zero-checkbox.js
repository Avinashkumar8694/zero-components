var Ht = Object.defineProperty;
var It = (r, e, t) => e in r ? Ht(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => It(r, typeof e != "symbol" ? e + "" : e, t);
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
var We;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof qe == "object" ? qe : typeof self == "object" ? self : typeof this == "object" ? this : b(), i = s(r);
    typeof t.Reflect < "u" && (i = s(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(y, x) {
      return function($, w) {
        Object.defineProperty(y, $, { configurable: !0, writable: !0, value: w }), x && x($, w);
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
    function b() {
      return l() || c();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", c = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, x = !b && !y, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return ve(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ve({ __proto__: null });
      } : function() {
        return ve({});
      },
      has: x ? function(n, o) {
        return i.call(n, o);
      } : function(n, o) {
        return o in n;
      },
      get: x ? function(n, o) {
        return i.call(n, o) ? n[o] : void 0;
      } : function(n, o) {
        return n[o];
      }
    }, w = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Tt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Rt(), L = typeof WeakMap == "function" ? WeakMap : Nt(), F = s ? Symbol.for("@reflect-metadata:registry") : void 0, ae = Ot(), ke = Mt(ae);
    function dt(n, o, a, u) {
      if (g(a)) {
        if (!Ue(n))
          throw new TypeError();
        if (!De(o))
          throw new TypeError();
        return wt(n, o);
      } else {
        if (!Ue(n))
          throw new TypeError();
        if (!k(o))
          throw new TypeError();
        if (!k(u) && !g(u) && !X(u))
          throw new TypeError();
        return X(u) && (u = void 0), a = I(a), $t(n, o, a, u);
      }
    }
    e("decorate", dt);
    function ht(n, o) {
      function a(u, v) {
        if (!k(u))
          throw new TypeError();
        if (!g(v) && !St(v))
          throw new TypeError();
        Me(n, o, u, v);
      }
      return a;
    }
    e("metadata", ht);
    function ft(n, o, a, u) {
      if (!k(a))
        throw new TypeError();
      return g(u) || (u = I(u)), Me(n, o, a, u);
    }
    e("defineMetadata", ft);
    function pt(n, o, a) {
      if (!k(o))
        throw new TypeError();
      return g(a) || (a = I(a)), Se(n, o, a);
    }
    e("hasMetadata", pt);
    function yt(n, o, a) {
      if (!k(o))
        throw new TypeError();
      return g(a) || (a = I(a)), fe(n, o, a);
    }
    e("hasOwnMetadata", yt);
    function vt(n, o, a) {
      if (!k(o))
        throw new TypeError();
      return g(a) || (a = I(a)), Ce(n, o, a);
    }
    e("getMetadata", vt);
    function bt(n, o, a) {
      if (!k(o))
        throw new TypeError();
      return g(a) || (a = I(a)), Oe(n, o, a);
    }
    e("getOwnMetadata", bt);
    function gt(n, o) {
      if (!k(n))
        throw new TypeError();
      return g(o) || (o = I(o)), Pe(n, o);
    }
    e("getMetadataKeys", gt);
    function mt(n, o) {
      if (!k(n))
        throw new TypeError();
      return g(o) || (o = I(o)), Te(n, o);
    }
    e("getOwnMetadataKeys", mt);
    function _t(n, o, a) {
      if (!k(o))
        throw new TypeError();
      if (g(a) || (a = I(a)), !k(o))
        throw new TypeError();
      g(a) || (a = I(a));
      var u = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : u.OrdinaryDeleteMetadata(n, o, a);
    }
    e("deleteMetadata", _t);
    function wt(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var u = n[a], v = u(o);
        if (!g(v) && !X(v)) {
          if (!De(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function $t(n, o, a, u) {
      for (var v = n.length - 1; v >= 0; --v) {
        var C = n[v], S = C(o, a, u);
        if (!g(S) && !X(S)) {
          if (!k(S))
            throw new TypeError();
          u = S;
        }
      }
      return u;
    }
    function Se(n, o, a) {
      var u = fe(n, o, a);
      if (u)
        return !0;
      var v = ye(o);
      return X(v) ? !1 : Se(n, v, a);
    }
    function fe(n, o, a) {
      var u = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : Ne(u.OrdinaryHasOwnMetadata(n, o, a));
    }
    function Ce(n, o, a) {
      var u = fe(n, o, a);
      if (u)
        return Oe(n, o, a);
      var v = ye(o);
      if (!X(v))
        return Ce(n, v, a);
    }
    function Oe(n, o, a) {
      var u = Q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(u))
        return u.OrdinaryGetOwnMetadata(n, o, a);
    }
    function Me(n, o, a, u) {
      var v = Q(
        a,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(n, o, a, u);
    }
    function Pe(n, o) {
      var a = Te(n, o), u = ye(n);
      if (u === null)
        return a;
      var v = Pe(u, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var C = new R(), S = [], m = 0, d = a; m < d.length; m++) {
        var h = d[m], f = C.has(h);
        f || (C.add(h), S.push(h));
      }
      for (var p = 0, _ = v; p < _.length; p++) {
        var h = _[p], f = C.has(h);
        f || (C.add(h), S.push(h));
      }
      return S;
    }
    function Te(n, o) {
      var a = Q(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function Re(n) {
      if (n === null)
        return 1;
      switch (typeof n) {
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
          return n === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function g(n) {
      return n === void 0;
    }
    function X(n) {
      return n === null;
    }
    function xt(n) {
      return typeof n == "symbol";
    }
    function k(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function Et(n, o) {
      switch (Re(n)) {
        case 0:
          return n;
        case 1:
          return n;
        case 2:
          return n;
        case 3:
          return n;
        case 4:
          return n;
        case 5:
          return n;
      }
      var a = "string", u = He(n, l);
      if (u !== void 0) {
        var v = u.call(n, a);
        if (k(v))
          throw new TypeError();
        return v;
      }
      return At(n);
    }
    function At(n, o) {
      var a, u;
      {
        var v = n.toString;
        if (le(v)) {
          var u = v.call(n);
          if (!k(u))
            return u;
        }
        var a = n.valueOf;
        if (le(a)) {
          var u = a.call(n);
          if (!k(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Ne(n) {
      return !!n;
    }
    function kt(n) {
      return "" + n;
    }
    function I(n) {
      var o = Et(n);
      return xt(o) ? o : kt(o);
    }
    function Ue(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function le(n) {
      return typeof n == "function";
    }
    function De(n) {
      return typeof n == "function";
    }
    function St(n) {
      switch (Re(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function pe(n, o) {
      return n === o || n !== n && o !== o;
    }
    function He(n, o) {
      var a = n[o];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function Ie(n) {
      var o = He(n, c);
      if (!le(o))
        throw new TypeError();
      var a = o.call(n);
      if (!k(a))
        throw new TypeError();
      return a;
    }
    function je(n) {
      return n.value;
    }
    function Le(n) {
      var o = n.next();
      return o.done ? !1 : o;
    }
    function ze(n) {
      var o = n.return;
      o && o.call(n);
    }
    function ye(n) {
      var o = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === w || o !== w)
        return o;
      var a = n.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return o;
      var v = u.constructor;
      return typeof v != "function" || v === n ? o : v;
    }
    function Ct() {
      var n;
      !g(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = Pt(t.Reflect));
      var o, a, u, v = new L(), C = {
        registerProvider: S,
        getProvider: d,
        setProvider: f
      };
      return C;
      function S(p) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === p:
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
            u === void 0 && (u = new R()), u.add(p);
            break;
        }
      }
      function m(p, _) {
        if (!g(o)) {
          if (o.isProviderFor(p, _))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(p, _))
              return o;
            if (!g(u))
              for (var E = Ie(u); ; ) {
                var A = Le(E);
                if (!A)
                  return;
                var D = je(A);
                if (D.isProviderFor(p, _))
                  return ze(E), D;
              }
          }
        }
        if (!g(n) && n.isProviderFor(p, _))
          return n;
      }
      function d(p, _) {
        var E = v.get(p), A;
        return g(E) || (A = E.get(_)), g(A) && (A = m(p, _), g(A) || (g(E) && (E = new M(), v.set(p, E)), E.set(_, A))), A;
      }
      function h(p) {
        if (g(p))
          throw new TypeError();
        return o === p || a === p || !g(u) && u.has(p);
      }
      function f(p, _, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var A = d(p, _);
        if (A !== E) {
          if (!g(A))
            return !1;
          var D = v.get(p);
          g(D) && (D = new M(), v.set(p, D)), D.set(_, E);
        }
        return !0;
      }
    }
    function Ot() {
      var n;
      return !g(F) && k(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[F]), g(n) && (n = Ct()), !g(F) && k(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Mt(n) {
      var o = new L(), a = {
        isProviderFor: function(h, f) {
          var p = o.get(h);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: S,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return ae.registerProvider(a), a;
      function u(h, f, p) {
        var _ = o.get(h), E = !1;
        if (g(_)) {
          if (!p)
            return;
          _ = new M(), o.set(h, _), E = !0;
        }
        var A = _.get(f);
        if (g(A)) {
          if (!p)
            return;
          if (A = new M(), _.set(f, A), !n.setProvider(h, f, a))
            throw _.delete(f), E && o.delete(h), new Error("Wrong provider for target.");
        }
        return A;
      }
      function v(h, f, p) {
        var _ = u(
          f,
          p,
          /*Create*/
          !1
        );
        return g(_) ? !1 : Ne(_.has(h));
      }
      function C(h, f, p) {
        var _ = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g(_))
          return _.get(h);
      }
      function S(h, f, p, _) {
        var E = u(
          p,
          _,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function m(h, f) {
        var p = [], _ = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(_))
          return p;
        for (var E = _.keys(), A = Ie(E), D = 0; ; ) {
          var Be = Le(A);
          if (!Be)
            return p.length = D, p;
          var Ut = je(Be);
          try {
            p[D] = Ut;
          } catch (Dt) {
            try {
              ze(A);
            } finally {
              throw Dt;
            }
          }
          D++;
        }
      }
      function d(h, f, p) {
        var _ = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (g(_) || !_.delete(h))
          return !1;
        if (_.size === 0) {
          var E = o.get(f);
          g(E) || (E.delete(p), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Pt(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, u = n.getOwnMetadata, v = n.getOwnMetadataKeys, C = n.deleteMetadata, S = new L(), m = {
        isProviderFor: function(d, h) {
          var f = S.get(d);
          return !g(f) && f.has(h) ? !0 : v(d, h).length ? (g(f) && (f = new R(), S.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return m;
    }
    function Q(n, o, a) {
      var u = ae.getProvider(n, o);
      if (!g(u))
        return u;
      if (a) {
        if (ae.setProvider(n, o, ke))
          return ke;
        throw new Error("Illegal state.");
      }
    }
    function Tt() {
      var n = {}, o = [], a = (
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
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, m.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
          }, m;
        }()
      ), u = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
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
              return this._keys.length--, this._values.length--, pe(d, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, S);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[c] = function() {
            return this.entries();
          }, m.prototype._find = function(d, h) {
            if (!pe(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pe(this._keys[f], d)) {
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
      function C(m, d) {
        return d;
      }
      function S(m, d) {
        return [m, d];
      }
    }
    function Rt() {
      var n = (
        /** @class */
        function() {
          function o() {
            this._map = new M();
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
      return n;
    }
    function Nt() {
      var n = 16, o = $.create(), a = u();
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
        while ($.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, h) {
        if (!i.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: $.create() });
        }
        return d[a];
      }
      function C(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function S(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, d), h;
        }
        return C(new Array(d), d);
      }
      function m() {
        var d = S(n);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < n; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ve(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(We || (We = {}));
function jt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Lt(r) {
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
        const i = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(i))
          try {
            customElements.define(i, e);
          } catch {
            try {
              customElements.define(i, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, l);
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
  return Lt(r);
}
function Bt(r) {
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
        var x;
        const l = document.querySelector('style.global-style[type="text/css"]'), c = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && b) {
          const $ = new CSSStyleSheet(), w = (x = l.sheet) == null ? void 0 : x.cssRules;
          w && (Array.from(w).forEach((M) => $.insertRule(M.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, $]);
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
function Gt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function qt(r) {
  return function(e, t) {
    try {
      Gt(r);
      const i = Reflect.getMetadata("ZeroAttribute", e) || [];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? t);
      }
      i.push(r), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function H(r) {
  return qt(r);
}
var N;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(N || (N = {}));
var T;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(T || (T = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = globalThis, $e = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, xe = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== xe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if ($e && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (r) => new ot(typeof r == "string" ? r : r + "", void 0, xe), Vt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, s, l) => i + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ot(t, r, xe);
}, Ft = (r, e) => {
  if ($e) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), s = ce.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = t.cssText, r.appendChild(i);
  }
}, Fe = $e ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Wt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Yt, getOwnPropertyDescriptor: Zt, getOwnPropertyNames: Jt, getOwnPropertySymbols: Qt, getPrototypeOf: Kt } = Object, B = globalThis, Xe = B.trustedTypes, er = Xe ? Xe.emptyScript : "", be = B.reactiveElementPolyfillSupport, ee = (r, e) => r, ue = { toAttribute(r, e) {
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
} }, Ee = (r, e) => !Xt(r, e), Ye = { attribute: !0, type: String, converter: ue, reflect: !1, useDefault: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Y = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ye) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, t);
      s !== void 0 && Yt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: s, set: l } = Zt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(c) {
      this[t] = c;
    } };
    return { get: s, set(c) {
      const b = s == null ? void 0 : s.call(this);
      l == null || l.call(this, c), this.requestUpdate(e, b, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ye;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Kt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, i = [...Jt(t), ...Qt(t)];
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
      for (const s of i) t.unshift(Fe(s));
    } else e !== void 0 && t.push(Fe(e));
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
    return Ft(e, this.constructor.elementStyles), e;
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
  _$ET(e, t) {
    var l;
    const i = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, i);
    if (s !== void 0 && i.reflect === !0) {
      const c = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : ue).toAttribute(t, i.type);
      this._$Em = e, c == null ? this.removeAttribute(s) : this.setAttribute(s, c), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, c;
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const b = i.getPropertyOptions(s), y = typeof b.converter == "function" ? { fromAttribute: b.converter } : ((l = b.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? b.converter : ue;
      this._$Em = s;
      const x = y.fromAttribute(t, b.type);
      this[s] = x ?? ((c = this._$Ej) == null ? void 0 : c.get(s)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(e, t, i, s = !1, l) {
    var c;
    if (e !== void 0) {
      const b = this.constructor;
      if (s === !1 && (l = this[e]), i ?? (i = b.getPropertyOptions(e)), !((i.hasChanged ?? Ee)(l, t) || i.useDefault && i.reflect && l === ((c = this._$Ej) == null ? void 0 : c.get(e)) && !this.hasAttribute(b._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: s, wrapped: l }, c) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, c ?? t ?? this[e]), l !== !0 || c !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, c] of this._$Ep) this[l] = c;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, c] of s) {
        const { wrapped: b } = c, y = this[l];
        b !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, c, y);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((s) => {
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
    (t = this._$EO) == null || t.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
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
Y.elementStyles = [], Y.shadowRootOptions = { mode: "open" }, Y[ee("elementProperties")] = /* @__PURE__ */ new Map(), Y[ee("finalized")] = /* @__PURE__ */ new Map(), be == null || be({ ReactiveElement: Y }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Ze = (r) => r, de = te.trustedTypes, Je = de ? de.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, at = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, lt = "?" + z, tr = `<${lt}>`, V = document, ie = () => V.createComment(""), ne = (r) => r === null || typeof r != "object" && typeof r != "function", Ae = Array.isArray, rr = (r) => Ae(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ge = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, G = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, ct = /^(?:script|style|textarea|title)$/i, ir = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), me = ir(1), Z = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), q = V.createTreeWalker(V, 129);
function ut(r, e) {
  if (!Ae(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const nr = (r, e) => {
  const t = r.length - 1, i = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", c = K;
  for (let b = 0; b < t; b++) {
    const y = r[b];
    let x, $, w = -1, M = 0;
    for (; M < y.length && (c.lastIndex = M, $ = c.exec(y), $ !== null); ) M = c.lastIndex, c === K ? $[1] === "!--" ? c = Qe : $[1] !== void 0 ? c = Ke : $[2] !== void 0 ? (ct.test($[2]) && (s = RegExp("</" + $[2], "g")), c = G) : $[3] !== void 0 && (c = G) : c === G ? $[0] === ">" ? (c = s ?? K, w = -1) : $[1] === void 0 ? w = -2 : (w = c.lastIndex - $[2].length, x = $[1], c = $[3] === void 0 ? G : $[3] === '"' ? tt : et) : c === tt || c === et ? c = G : c === Qe || c === Ke ? c = K : (c = G, s = void 0);
    const R = c === G && r[b + 1].startsWith("/>") ? " " : "";
    l += c === K ? y + tr : w >= 0 ? (i.push(x), y.slice(0, w) + at + y.slice(w) + z + R) : y + z + (w === -2 ? b : R);
  }
  return [ut(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class se {
  constructor({ strings: e, _$litType$: t }, i) {
    let s;
    this.parts = [];
    let l = 0, c = 0;
    const b = e.length - 1, y = this.parts, [x, $] = nr(e, t);
    if (this.el = se.createElement(x, i), q.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = q.nextNode()) !== null && y.length < b; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(at)) {
          const M = $[c++], R = s.getAttribute(w).split(z), L = /([.?@])?(.*)/.exec(M);
          y.push({ type: 1, index: l, name: L[2], strings: R, ctor: L[1] === "." ? or : L[1] === "?" ? ar : L[1] === "@" ? lr : he }), s.removeAttribute(w);
        } else w.startsWith(z) && (y.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ct.test(s.tagName)) {
          const w = s.textContent.split(z), M = w.length - 1;
          if (M > 0) {
            s.textContent = de ? de.emptyScript : "";
            for (let R = 0; R < M; R++) s.append(w[R], ie()), q.nextNode(), y.push({ type: 2, index: ++l });
            s.append(w[M], ie());
          }
        }
      } else if (s.nodeType === 8) if (s.data === lt) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(z, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += z.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const i = V.createElement("template");
    return i.innerHTML = e, i;
  }
}
function J(r, e, t = r, i) {
  var c, b;
  if (e === Z) return e;
  let s = i !== void 0 ? (c = t._$Co) == null ? void 0 : c[i] : t._$Cl;
  const l = ne(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((b = s == null ? void 0 : s._$AO) == null || b.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = s : t._$Cl = s), s !== void 0 && (e = J(r, s._$AS(r, e.values), s, i)), e;
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
    const { el: { content: t }, parts: i } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? V).importNode(t, !0);
    q.currentNode = s;
    let l = q.nextNode(), c = 0, b = 0, y = i[0];
    for (; y !== void 0; ) {
      if (c === y.index) {
        let x;
        y.type === 2 ? x = new oe(l, l.nextSibling, this, e) : y.type === 1 ? x = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (x = new cr(l, this, e)), this._$AV.push(x), y = i[++b];
      }
      c !== (y == null ? void 0 : y.index) && (l = q.nextNode(), c++);
    }
    return q.currentNode = V, s;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class oe {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, s) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = J(this, e, t), ne(e) ? e === O || e == null || e === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : rr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== O && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(V.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = se.createElement(ut(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const c = new sr(s, this), b = c.u(this.options);
      c.p(t), this.T(b), this._$AH = c;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, s = 0;
    for (const l of e) s === t.length ? t.push(i = new oe(this.O(ie()), this.O(ie()), this, this.options)) : i = t[s], i._$AI(l), s++;
    s < t.length && (this._$AR(i && i._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Ze(e).nextSibling;
      Ze(e).remove(), e = s;
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
  constructor(e, t, i, s, l) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = O;
  }
  _$AI(e, t = this, i, s) {
    const l = this.strings;
    let c = !1;
    if (l === void 0) e = J(this, e, t, 0), c = !ne(e) || e !== this._$AH && e !== Z, c && (this._$AH = e);
    else {
      const b = e;
      let y, x;
      for (e = l[0], y = 0; y < l.length - 1; y++) x = J(this, b[i + y], t, y), x === Z && (x = this._$AH[y]), c || (c = !ne(x) || x !== this._$AH[y]), x === O ? e = O : e !== O && (e += (x ?? "") + l[y + 1]), this._$AH[y] = x;
    }
    c && !s && this.j(e);
  }
  j(e) {
    e === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === O ? void 0 : e;
  }
}
class ar extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== O);
  }
}
class lr extends he {
  constructor(e, t, i, s, l) {
    super(e, t, i, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? O) === Z) return;
    const i = this._$AH, s = e === O && i !== O || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== O && (i === O || s);
    s && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class cr {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    J(this, e);
  }
}
const _e = te.litHtmlPolyfillSupport;
_e == null || _e(se, oe), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
const ur = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = s = new oe(e.insertBefore(ie(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis;
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
var st;
re._$litElement$ = !0, re.finalized = !0, (st = W.litElementHydrateSupport) == null || st.call(W, { LitElement: re });
const we = W.litElementPolyfillSupport;
we == null || we({ LitElement: re });
(W.litElementVersions ?? (W.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: Ee }, hr = (r = dr, e, t) => {
  const { kind: i, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), i === "accessor") {
    const { name: c } = t;
    return { set(b) {
      const y = e.get.call(this);
      e.set.call(this, b), this.requestUpdate(c, y, r, !0, b);
    }, init(b) {
      return b !== void 0 && this.C(c, void 0, r, b), b;
    } };
  }
  if (i === "setter") {
    const { name: c } = t;
    return function(b) {
      const y = this[c];
      e.call(this, b), this.requestUpdate(c, y, r, !0, b);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function j(r) {
  return (e, t) => typeof t == "object" ? hr(r, e, t) : ((i, s, l) => {
    const c = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, i), c ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, U = (r, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? pr(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (s = (i ? c(e, t, s) : c(s)) || s);
  return i && s && fr(e, t, s), s;
};
const it = () => window.zeroThemeManager, nt = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;border:1px solid rgba(148,163,184,0.15);background:rgba(255,255,255,0.95);'>",
    "<div style='width:18px;height:18px;border-radius:4px;border:2px solid var(--uiv-primary-color,#6c63ff);'></div>",
    "<span style='font-size:0.8rem;color:var(--uiv-text-color,#1e293b);'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Checkbox"]
};
function yr(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let P = class extends re {
  constructor() {
    super(...arguments), this.checked = !1, this.label = "Checkbox Label", this.description = "", this.required = !1, this.disabled = !1, this.indeterminate = !1, this.checkboxStyle = "default", this.value = "", this.errorMessage = "", this.showError = !1;
  }
  static getStudioTemplate(r) {
    if (!r) return nt;
    const e = yr(r.studio.display.label || "Checkbox");
    return {
      ...nt,
      templateHtml: [
        "<div style='display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;border:1px solid rgba(148,163,184,0.15);background:rgba(255,255,255,0.95);'>",
        "<div style='width:18px;height:18px;border-radius:4px;border:2px solid var(--uiv-primary-color,#6c63ff);'></div>",
        `<span style='font-size:0.8rem;color:var(--uiv-text-color,#1e293b);'>${e}</span>`,
        "</div>"
      ].join("")
    };
  }
  getCheckboxClass() {
    let r = "checkbox-field";
    return this.disabled && (r += " disabled"), this.checkboxStyle === "custom" && (r += " custom-style"), this.checkboxStyle === "switch" && (r += " switch-style"), r;
  }
  handleCheckboxClick() {
    this.disabled || (this.indeterminate ? (this.indeterminate = !1, this.checked = !0) : this.checked = !this.checked, this.dispatchChangeEvent());
  }
  dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent("change", {
      detail: {
        checked: this.checked,
        value: this.value,
        indeterminate: this.indeterminate
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(r) {
    const e = r.target;
    this.checked = e.checked, this.indeterminate = !1, this.dispatchChangeEvent();
  }
  updated(r) {
    var e;
    if (super.updated(r), r.has("indeterminate")) {
      const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector('input[type="checkbox"]');
      t && (t.indeterminate = this.indeterminate);
    }
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = it()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const r = (e = it()) == null ? void 0 : e.getActiveTheme("zero-standard-themes");
    return me`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getComponentStyles("checkbox") : ""}
            </style>
            <div class="form-field uiv-${r == null ? void 0 : r.id}-theme">
                ${this.label ? me`
                    <label class="main-label uiv-${r == null ? void 0 : r.id}-text">Choose Option</label>
                ` : ""}
                
                <div class="${this.getCheckboxClass()} uiv-${r == null ? void 0 : r.id}-card" @click="${this.handleCheckboxClick}">
                    <div class="checkbox-container">
                        <input 
                            type="checkbox"
                            .checked="${this.checked}"
                            .indeterminate="${this.indeterminate}"
                            ?required="${this.required}"
                            ?disabled="${this.disabled}"
                            value="${this.value}"
                            class="${this.showError ? "error" : ""}"
                            @change="${this.handleChange}"
                            @click="${(t) => t.stopPropagation()}"
                        />
                    </div>
                    <span class="checkbox-label uiv-${r == null ? void 0 : r.id}-text">${this.label}</span>
                </div>
                
                ${this.description ? me`
                    <div class="description uiv-${r == null ? void 0 : r.id}-text-secondary">${this.description}</div>
                ` : ""}
                
                <div class="error-message uiv-${r == null ? void 0 : r.id}-text ${this.showError ? "show" : ""}" style="color: var(--uiv-error-color, #f44336)">
                    ${this.errorMessage}
                </div>
            </div>
        `;
  }
};
P.styles = Vt`
        :host {
            display: block;
            width: 100%;
            --uiv-primary: var(--uiv-primary-color, #6c63ff);
            --uiv-bg: var(--uiv-surface-color, #fff);
            --uiv-text: var(--uiv-text-color, #333);
            --uiv-border: var(--uiv-border-color, #ddd);
        }

        .form-field {
            margin-bottom: 20px;
        }

        .form-field label.main-label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--uiv-text);
            font-weight: 500;
        }

        .checkbox-field {
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
            padding: 8px;
            border-radius: 8px;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .checkbox-field:hover:not(.disabled) {
            background-color: rgba(var(--uiv-primary-rgb, 108, 99, 255), 0.05);
            transform: translateX(2px);
        }

        .checkbox-field.disabled {
            cursor: not-allowed;
            opacity: 0.6;
        }

        .checkbox-container {
            position: relative;
            display: inline-block;
        }

        input[type="checkbox"] {
            width: 20px;
            height: 20px;
            margin: 0;
            cursor: pointer;
            appearance: none;
            -webkit-appearance: none;
            border: 2px solid var(--uiv-border);
            border-radius: 6px;
            background-color: var(--uiv-bg);
            transition: all 0.2s;
            position: relative;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        input[type="checkbox"]:hover:not(:disabled) {
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
        }

        input[type="checkbox"]:checked {
            background-color: var(--uiv-primary);
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
        }

        input[type="checkbox"]:checked::after {
            content: '✓';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        input[type="checkbox"]:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(var(--uiv-primary-rgb, 108, 99, 255), 0.2), var(--uiv-border-glow);
        }

        input[type="checkbox"]:disabled {
            background-color: #f5f5f5;
            border-color: #ccc;
            cursor: not-allowed;
        }

        .checkbox-label {
            font-size: var(--font-size-base, 14px);
            color: var(--text-primary, #333);
            cursor: pointer;
            user-select: none;
            line-height: 1.4;
        }

        .checkbox-field.disabled .checkbox-label {
            color: var(--text-disabled, #999);
            cursor: not-allowed;
        }

        .description {
            font-size: var(--font-size-sm, 12px);
            color: var(--text-secondary, #666);
            margin-top: var(--spacing-xs, 4px);
            margin-left: 26px; /* Align with checkbox label */
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

        input[type="checkbox"].error {
            border-color: var(--error-color, #f44336);
        }

        input[type="checkbox"].error:focus {
            box-shadow: 0 0 0 2px var(--error-light, rgba(244, 67, 54, 0.2));
        }

        /* Custom checkbox styles */
        .checkbox-field.custom-style input[type="checkbox"] {
            border-radius: 50%;
        }

        .checkbox-field.switch-style {
            gap: var(--spacing-md, 12px);
        }        .checkbox-field.switch-style input[type="checkbox"] {
            width: var(--icon-size-xl, 36px);
            height: var(--icon-size-md, 20px);
            border-radius: var(--border-radius-xl, 10px);
            background-color: var(--background-secondary, #f5f5f5);
            border: 1px solid var(--border-color, #ddd);
            position: relative;
            transition: all 0.3s;
        }

        .checkbox-field.switch-style input[type="checkbox"]::after {
            content: '';
            position: absolute;
            top: 1px;
            left: 1px;            width: var(--icon-size-sm, 16px);
            height: var(--icon-size-sm, 16px);
            background-color: white;
            border-radius: 50%;
            transition: all 0.3s;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }

        .checkbox-field.switch-style input[type="checkbox"]:checked::after {
            left: 17px;
        }
    `;
U([
  j({ type: Boolean }),
  H({
    attributeType: T.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Checked",
    fieldMappings: "checked"
  })
], P.prototype, "checked", 2);
U([
  j({ type: String }),
  H({
    attributeType: T.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter checkbox label",
    fieldMappings: "label"
  })
], P.prototype, "label", 2);
U([
  j({ type: String }),
  H({
    attributeType: T.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Description",
    placeholderText: "Enter description text",
    fieldMappings: "description"
  })
], P.prototype, "description", 2);
U([
  j({ type: Boolean }),
  H({
    attributeType: T.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], P.prototype, "required", 2);
U([
  j({ type: Boolean }),
  H({
    attributeType: T.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], P.prototype, "disabled", 2);
U([
  j({ type: Boolean }),
  H({
    attributeType: T.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Indeterminate",
    fieldMappings: "indeterminate"
  })
], P.prototype, "indeterminate", 2);
U([
  j({ type: String }),
  H({
    attributeType: T.PROPERTY,
    uiComponentType: N.DROPDOWN,
    displayLabel: "Style",
    optionItems: [
      { value: "default", label: "Default" },
      { value: "custom", label: "Rounded" },
      { value: "switch", label: "Switch" }
    ],
    fieldMappings: "checkboxStyle"
  })
], P.prototype, "checkboxStyle", 2);
U([
  j({ type: String }),
  H({
    attributeType: T.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Value",
    placeholderText: "Enter checkbox value",
    fieldMappings: "value"
  })
], P.prototype, "value", 2);
U([
  j({ type: String }),
  H({
    attributeType: T.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], P.prototype, "errorMessage", 2);
U([
  j({ type: Boolean }),
  H({
    attributeType: T.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], P.prototype, "showError", 2);
U([
  H({
    attributeType: T.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], P.prototype, "handleChange", 1);
P = U([
  zt({
    name: "zero-checkbox",
    version: "1.0.0",
    title: "Checkbox",
    elementSelector: "zero-checkbox",
    group: "Form Controls",
    iconName: "checkbox-icon.png"
  }),
  Bt()
], P);
export {
  P as ZeroCheckbox,
  nt as studioTemplate
};
