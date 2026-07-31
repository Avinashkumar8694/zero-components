var jt = Object.defineProperty;
var It = (r, e, t) => e in r ? jt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Be = (r, e, t) => It(r, typeof e != "symbol" ? e + "" : e, t);
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
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", c = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !g && !y, w = {
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
    }, $ = Object.getPrototypeOf(Function), k = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : kt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : xt(), D = typeof WeakMap == "function" ? WeakMap : Rt(), Z = s ? Symbol.for("@reflect-metadata:registry") : void 0, ae = Mt(), Ce = Pt(ae);
    function ut(i, o, a, u) {
      if (_(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!Ue(o))
          throw new TypeError();
        return bt(i, o);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!S(o))
          throw new TypeError();
        if (!S(u) && !_(u) && !Y(u))
          throw new TypeError();
        return Y(u) && (u = void 0), a = U(a), $t(i, o, a, u);
      }
    }
    e("decorate", ut);
    function dt(i, o) {
      function a(u, v) {
        if (!S(u))
          throw new TypeError();
        if (!_(v) && !St(v))
          throw new TypeError();
        Pe(i, o, u, v);
      }
      return a;
    }
    e("metadata", dt);
    function ht(i, o, a, u) {
      if (!S(a))
        throw new TypeError();
      return _(u) || (u = U(u)), Pe(i, o, a, u);
    }
    e("defineMetadata", ht);
    function ft(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return _(a) || (a = U(a)), Se(i, o, a);
    }
    e("hasMetadata", ft);
    function pt(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return _(a) || (a = U(a)), fe(i, o, a);
    }
    e("hasOwnMetadata", pt);
    function yt(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return _(a) || (a = U(a)), Oe(i, o, a);
    }
    e("getMetadata", yt);
    function vt(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return _(a) || (a = U(a)), Me(i, o, a);
    }
    e("getOwnMetadata", vt);
    function gt(i, o) {
      if (!S(i))
        throw new TypeError();
      return _(o) || (o = U(o)), Te(i, o);
    }
    e("getMetadataKeys", gt);
    function _t(i, o) {
      if (!S(i))
        throw new TypeError();
      return _(o) || (o = U(o)), ke(i, o);
    }
    e("getOwnMetadataKeys", _t);
    function mt(i, o, a) {
      if (!S(o))
        throw new TypeError();
      if (_(a) || (a = U(a)), !S(o))
        throw new TypeError();
      _(a) || (a = U(a));
      var u = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return _(u) ? !1 : u.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", mt);
    function bt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var u = i[a], v = u(o);
        if (!_(v) && !Y(v)) {
          if (!Ue(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function $t(i, o, a, u) {
      for (var v = i.length - 1; v >= 0; --v) {
        var M = i[v], O = M(o, a, u);
        if (!_(O) && !Y(O)) {
          if (!S(O))
            throw new TypeError();
          u = O;
        }
      }
      return u;
    }
    function Se(i, o, a) {
      var u = fe(i, o, a);
      if (u)
        return !0;
      var v = ye(o);
      return Y(v) ? !1 : Se(i, v, a);
    }
    function fe(i, o, a) {
      var u = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return _(u) ? !1 : Re(u.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Oe(i, o, a) {
      var u = fe(i, o, a);
      if (u)
        return Me(i, o, a);
      var v = ye(o);
      if (!Y(v))
        return Oe(i, v, a);
    }
    function Me(i, o, a) {
      var u = Q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!_(u))
        return u.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Pe(i, o, a, u) {
      var v = Q(
        a,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, u);
    }
    function Te(i, o) {
      var a = ke(i, o), u = ye(i);
      if (u === null)
        return a;
      var v = Te(u, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var M = new R(), O = [], m = 0, d = a; m < d.length; m++) {
        var h = d[m], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      for (var p = 0, b = v; p < b.length; p++) {
        var h = b[p], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      return O;
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
    function xe(i) {
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
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Et(i, o) {
      switch (xe(i)) {
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
        if (S(v))
          throw new TypeError();
        return v;
      }
      return At(i);
    }
    function At(i, o) {
      var a, u;
      {
        var v = i.toString;
        if (le(v)) {
          var u = v.call(i);
          if (!S(u))
            return u;
        }
        var a = i.valueOf;
        if (le(a)) {
          var u = a.call(i);
          if (!S(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Re(i) {
      return !!i;
    }
    function Ct(i) {
      return "" + i;
    }
    function U(i) {
      var o = Et(i);
      return wt(o) ? o : Ct(o);
    }
    function Ne(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function le(i) {
      return typeof i == "function";
    }
    function Ue(i) {
      return typeof i == "function";
    }
    function St(i) {
      switch (xe(i)) {
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
    function je(i, o) {
      var a = i[o];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function Ie(i) {
      var o = je(i, c);
      if (!le(o))
        throw new TypeError();
      var a = o.call(i);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function De(i) {
      return i.value;
    }
    function He(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Le(i) {
      var o = i.return;
      o && o.call(i);
    }
    function ye(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || o !== $)
        return o;
      var a = i.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return o;
      var v = u.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Ot() {
      var i;
      !_(Z) && typeof t.Reflect < "u" && !(Z in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Tt(t.Reflect));
      var o, a, u, v = new D(), M = {
        registerProvider: O,
        getProvider: d,
        setProvider: f
      };
      return M;
      function O(p) {
        if (!Object.isExtensible(M))
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
            u === void 0 && (u = new R()), u.add(p);
            break;
        }
      }
      function m(p, b) {
        if (!_(o)) {
          if (o.isProviderFor(p, b))
            return o;
          if (!_(a)) {
            if (a.isProviderFor(p, b))
              return o;
            if (!_(u))
              for (var A = Ie(u); ; ) {
                var C = He(A);
                if (!C)
                  return;
                var N = De(C);
                if (N.isProviderFor(p, b))
                  return Le(A), N;
              }
          }
        }
        if (!_(i) && i.isProviderFor(p, b))
          return i;
      }
      function d(p, b) {
        var A = v.get(p), C;
        return _(A) || (C = A.get(b)), _(C) && (C = m(p, b), _(C) || (_(A) && (A = new k(), v.set(p, A)), A.set(b, C))), C;
      }
      function h(p) {
        if (_(p))
          throw new TypeError();
        return o === p || a === p || !_(u) && u.has(p);
      }
      function f(p, b, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var C = d(p, b);
        if (C !== A) {
          if (!_(C))
            return !1;
          var N = v.get(p);
          _(N) && (N = new k(), v.set(p, N)), N.set(b, A);
        }
        return !0;
      }
    }
    function Mt() {
      var i;
      return !_(Z) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[Z]), _(i) && (i = Ot()), !_(Z) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, Z, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
      var o = new D(), a = {
        isProviderFor: function(h, f) {
          var p = o.get(h);
          return _(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return ae.registerProvider(a), a;
      function u(h, f, p) {
        var b = o.get(h), A = !1;
        if (_(b)) {
          if (!p)
            return;
          b = new k(), o.set(h, b), A = !0;
        }
        var C = b.get(f);
        if (_(C)) {
          if (!p)
            return;
          if (C = new k(), b.set(f, C), !i.setProvider(h, f, a))
            throw b.delete(f), A && o.delete(h), new Error("Wrong provider for target.");
        }
        return C;
      }
      function v(h, f, p) {
        var b = u(
          f,
          p,
          /*Create*/
          !1
        );
        return _(b) ? !1 : Re(b.has(h));
      }
      function M(h, f, p) {
        var b = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (!_(b))
          return b.get(h);
      }
      function O(h, f, p, b) {
        var A = u(
          p,
          b,
          /*Create*/
          !0
        );
        A.set(h, f);
      }
      function m(h, f) {
        var p = [], b = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (_(b))
          return p;
        for (var A = b.keys(), C = Ie(A), N = 0; ; ) {
          var ze = He(C);
          if (!ze)
            return p.length = N, p;
          var Nt = De(ze);
          try {
            p[N] = Nt;
          } catch (Ut) {
            try {
              Le(C);
            } finally {
              throw Ut;
            }
          }
          N++;
        }
      }
      function d(h, f, p) {
        var b = u(
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
    function Tt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, u = i.getOwnMetadata, v = i.getOwnMetadataKeys, M = i.deleteMetadata, O = new D(), m = {
        isProviderFor: function(d, h) {
          var f = O.get(d);
          return !_(f) && f.has(h) ? !0 : v(d, h).length ? (_(f) && (f = new R(), O.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: M
      };
      return m;
    }
    function Q(i, o, a) {
      var u = ae.getProvider(i, o);
      if (!_(u))
        return u;
      if (a) {
        if (ae.setProvider(i, o, Ce))
          return Ce;
        throw new Error("Illegal state.");
      }
    }
    function kt() {
      var i = {}, o = [], a = (
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
              return this._keys.length--, this._values.length--, pe(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, M);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, O);
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
      function M(m, d) {
        return d;
      }
      function O(m, d) {
        return [m, d];
      }
    }
    function xt() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new k();
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
    function Rt() {
      var i = 16, o = w.create(), a = u();
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
            this._key = u();
          }, d;
        }()
      );
      function u() {
        var d;
        do
          d = "@@WeakMap@@" + m();
        while (w.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: w.create() });
        }
        return d[a];
      }
      function M(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : M(h, d), h;
        }
        return M(new Array(d), d);
      }
      function m() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ve(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function Dt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ht(r) {
  return function(e) {
    if (Dt(r)) {
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
        const l = document.querySelector('style.global-style[type="text/css"]'), c = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const w = new CSSStyleSheet(), $ = (E = l.sheet) == null ? void 0 : E.cssRules;
          $ && (Array.from($).forEach((k) => w.insertRule(k.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          y.appendChild(w);
        }
        c.forEach((w) => {
          const $ = w.cloneNode(!0);
          y.appendChild($);
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
function z(r) {
  return Gt(r);
}
var I;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(I || (I = {}));
var j;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(j || (j = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = globalThis, $e = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, we = Symbol(), We = /* @__PURE__ */ new WeakMap();
let it = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== we) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
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
const Vt = (r) => new it(typeof r == "string" ? r : r + "", void 0, we), Wt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new it(t, r, we);
}, Ft = (r, e) => {
  if ($e) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ce.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
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
const { is: qt, defineProperty: Zt, getOwnPropertyDescriptor: Yt, getOwnPropertyNames: Xt, getOwnPropertySymbols: Jt, getPrototypeOf: Qt } = Object, L = globalThis, qe = L.trustedTypes, Kt = qe ? qe.emptyScript : "", ge = L.reactiveElementPolyfillSupport, ee = (r, e) => r, ue = { toAttribute(r, e) {
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
} }, Ee = (r, e) => !qt(r, e), Ze = { attribute: !0, type: String, converter: ue, reflect: !1, useDefault: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Zt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Yt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(c) {
      this[t] = c;
    } };
    return { get: s, set(c) {
      const g = s == null ? void 0 : s.call(this);
      l == null || l.call(this, c), this.requestUpdate(e, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
      const t = this.properties, n = [...Xt(t), ...Jt(t)];
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
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const c = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ue).toAttribute(t, n.type);
      this._$Em = e, c == null ? this.removeAttribute(s) : this.setAttribute(s, c), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, c;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const g = n.getPropertyOptions(s), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : ue;
      this._$Em = s;
      const E = y.fromAttribute(t, g.type);
      this[s] = E ?? ((c = this._$Ej) == null ? void 0 : c.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var c;
    if (e !== void 0) {
      const g = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = g.getPropertyOptions(e)), !((n.hasChanged ?? Ee)(l, t) || n.useDefault && n.reflect && l === ((c = this._$Ej) == null ? void 0 : c.get(e)) && !this.hasAttribute(g._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: s, wrapped: l }, c) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, c ?? t ?? this[e]), l !== !0 || c !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, c] of s) {
        const { wrapped: g } = c, y = this[l];
        g !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, c, y);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[ee("elementProperties")] = /* @__PURE__ */ new Map(), X[ee("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: X }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Ye = (r) => r, de = te.trustedTypes, Xe = de ? de.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, st = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, ot = "?" + H, er = `<${ot}>`, W = document, ne = () => W.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Ae = Array.isArray, tr = (r) => Ae(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Qe = />/g, B = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, et = /"/g, at = /^(?:script|style|textarea|title)$/i, rr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), nr = rr(1), F = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), tt = /* @__PURE__ */ new WeakMap(), G = W.createTreeWalker(W, 129);
function lt(r, e) {
  if (!Ae(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xe !== void 0 ? Xe.createHTML(e) : e;
}
const ir = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", c = K;
  for (let g = 0; g < t; g++) {
    const y = r[g];
    let E, w, $ = -1, k = 0;
    for (; k < y.length && (c.lastIndex = k, w = c.exec(y), w !== null); ) k = c.lastIndex, c === K ? w[1] === "!--" ? c = Je : w[1] !== void 0 ? c = Qe : w[2] !== void 0 ? (at.test(w[2]) && (s = RegExp("</" + w[2], "g")), c = B) : w[3] !== void 0 && (c = B) : c === B ? w[0] === ">" ? (c = s ?? K, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = c.lastIndex - w[2].length, E = w[1], c = w[3] === void 0 ? B : w[3] === '"' ? et : Ke) : c === et || c === Ke ? c = B : c === Je || c === Qe ? c = K : (c = B, s = void 0);
    const R = c === B && r[g + 1].startsWith("/>") ? " " : "";
    l += c === K ? y + er : $ >= 0 ? (n.push(E), y.slice(0, $) + st + y.slice($) + H + R) : y + H + ($ === -2 ? g : R);
  }
  return [lt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class se {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, c = 0;
    const g = e.length - 1, y = this.parts, [E, w] = ir(e, t);
    if (this.el = se.createElement(E, n), G.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = G.nextNode()) !== null && y.length < g; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(st)) {
          const k = w[c++], R = s.getAttribute($).split(H), D = /([.?@])?(.*)/.exec(k);
          y.push({ type: 1, index: l, name: D[2], strings: R, ctor: D[1] === "." ? or : D[1] === "?" ? ar : D[1] === "@" ? lr : he }), s.removeAttribute($);
        } else $.startsWith(H) && (y.push({ type: 6, index: l }), s.removeAttribute($));
        if (at.test(s.tagName)) {
          const $ = s.textContent.split(H), k = $.length - 1;
          if (k > 0) {
            s.textContent = de ? de.emptyScript : "";
            for (let R = 0; R < k; R++) s.append($[R], ne()), G.nextNode(), y.push({ type: 2, index: ++l });
            s.append($[k], ne());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ot) y.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(H, $ + 1)) !== -1; ) y.push({ type: 7, index: l }), $ += H.length - 1;
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
  if (e === F) return e;
  let s = n !== void 0 ? (c = t._$Co) == null ? void 0 : c[n] : t._$Cl;
  const l = ie(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((g = s == null ? void 0 : s._$AO) == null || g.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = J(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? W).importNode(t, !0);
    G.currentNode = s;
    let l = G.nextNode(), c = 0, g = 0, y = n[0];
    for (; y !== void 0; ) {
      if (c === y.index) {
        let E;
        y.type === 2 ? E = new oe(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new cr(l, this, e)), this._$AV.push(E), y = n[++g];
      }
      c !== (y == null ? void 0 : y.index) && (l = G.nextNode(), c++);
    }
    return G.currentNode = W, s;
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
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = J(this, e, t), ie(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== F && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tr(e) ? this.k(e) : this._(e);
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
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = se.createElement(lt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const c = new sr(s, this), g = c.u(this.options);
      c.p(t), this.T(g), this._$AH = c;
    }
  }
  _$AC(e) {
    let t = tt.get(e.strings);
    return t === void 0 && tt.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
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
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let c = !1;
    if (l === void 0) e = J(this, e, t, 0), c = !ie(e) || e !== this._$AH && e !== F, c && (this._$AH = e);
    else {
      const g = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = J(this, g[n + y], t, y), E === F && (E = this._$AH[y]), c || (c = !ie(E) || E !== this._$AH[y]), E === P ? e = P : e !== P && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    c && !s && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class or extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class ar extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class lr extends he {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? P) === F) return;
    const n = this._$AH, s = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== P && (n === P || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class cr {
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
const me = te.litHtmlPolyfillSupport;
me == null || me(se, oe), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
const ur = (r, e, t) => {
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
const V = globalThis;
let re = class extends X {
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
};
var nt;
re._$litElement$ = !0, re.finalized = !0, (nt = V.litElementHydrateSupport) == null || nt.call(V, { LitElement: re });
const be = V.litElementPolyfillSupport;
be == null || be({ LitElement: re });
(V.litElementVersions ?? (V.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: ue, reflect: !1, hasChanged: Ee }, hr = (r = dr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
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
function q(r) {
  return (e, t) => typeof t == "object" ? hr(r, e, t) : ((n, s, l) => {
    const c = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), c ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr = { ATTRIBUTE: 1 }, pr = (r) => (...e) => ({ _$litDirective$: r, values: e });
let yr = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, n) {
    this._$Ct = e, this._$AM = t, this._$Ci = n;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = "important", vr = " !" + ct, gr = pr(class extends yr {
  constructor(r) {
    var e;
    if (super(r), r.type !== fr.ATTRIBUTE || r.name !== "style" || ((e = r.strings) == null ? void 0 : e.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(r) {
    return Object.keys(r).reduce((e, t) => {
      const n = r[t];
      return n == null ? e : e + `${t = t.includes("-") ? t : t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${n};`;
    }, "");
  }
  update(r, [e]) {
    const { style: t } = r.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(e)), this.render(e);
    for (const n of this.ft) e[n] == null && (this.ft.delete(n), n.includes("-") ? t.removeProperty(n) : t[n] = null);
    for (const n in e) {
      const s = e[n];
      if (s != null) {
        this.ft.add(n);
        const l = typeof s == "string" && s.endsWith(vr);
        n.includes("-") || l ? t.setProperty(n, l ? s.slice(0, -11) : s, l ? ct : "") : t[n] = s;
      }
    }
    return F;
  }
});
var _r = Object.defineProperty, mr = Object.getOwnPropertyDescriptor, x = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? mr(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (s = (n ? c(e, t, s) : c(s)) || s);
  return n && s && _r(e, t, s), s;
};
const rt = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:10px;padding:6px 0;'>",
    "<div style='width:18px;height:18px;border-radius:50%;border:2px solid var(--uiv-primary-color,#6366f1);display:flex;align-items:center;justify-content:center;'>",
    "<div style='width:8px;height:8px;border-radius:50%;background:var(--uiv-primary-color,#6366f1);'></div>",
    "</div>",
    "<span style='font-size:14px;color:var(--uiv-text-color,#1f2937);'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Radio"]
};
function br(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let T = class extends re {
  constructor() {
    super(...arguments), this.checked = !1, this.label = "Option Label", this.value = "", this.name = "radio-group", this.variant = "standard", this.disabled = !1, this.accentColor = "", this._onGroupChange = (r) => {
      const e = r.detail;
      e && e.name === this.name && e.source !== this && this.checked && (this.checked = !1);
    };
  }
  static getStudioTemplate(r) {
    var s, l, c, g;
    if (!r) return rt;
    const e = br(r.studio.display.label || "Radio Option"), t = !!(((s = r.props) == null ? void 0 : s.checked) ?? ((l = r.studio.props) == null ? void 0 : l.checked)), n = (((c = r.props) == null ? void 0 : c.accentColor) ?? ((g = r.studio.props) == null ? void 0 : g.accentColor)) || "var(--uiv-primary-color,#6366f1)";
    return {
      ...rt,
      templateHtml: [
        "<div style='display:flex;align-items:center;gap:10px;padding:6px 0;font-family:inherit;'>",
        `<div style='width:18px;height:18px;border-radius:50%;border:2px solid ${t ? n : "var(--uiv-border-color,#d1d5db)"};display:flex;align-items:center;justify-content:center;'>`,
        t ? `<div style='width:8px;height:8px;border-radius:50%;background:${n};'></div>` : "",
        "</div>",
        `<span style='font-size:14px;color:var(--uiv-text-color,#1f2937);'>${e}</span>`,
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
  get valueConfig() {
    return this.value;
  }
  set valueConfig(r) {
    this.value = r;
  }
  get nameConfig() {
    return this.name;
  }
  set nameConfig(r) {
    this.name = r || "radio-group";
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
  get accentColorConfig() {
    return this.accentColor;
  }
  set accentColorConfig(r) {
    this.accentColor = r;
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("zero-radio-group-change", this._onGroupChange);
  }
  disconnectedCallback() {
    document.removeEventListener("zero-radio-group-change", this._onGroupChange), super.disconnectedCallback();
  }
  handleToggle() {
    this.disabled || (this.checked = !0, document.dispatchEvent(
      new CustomEvent("zero-radio-group-change", {
        detail: { name: this.name, source: this }
      })
    ), this.dispatchEvent(
      new CustomEvent("change", {
        detail: { checked: this.checked, value: this.value, name: this.name },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  render() {
    const r = [
      this.checked ? "checked" : "",
      this.disabled ? "disabled" : "",
      `variant-${this.variant}`
    ].join(" "), e = this.accentColor ? { "--rad-p": this.accentColor, "--glow": `0 0 10px ${this.accentColor}` } : {};
    return nr`
      <div class="radio-wrapper ${r}" @click=${this.handleToggle} style=${gr(e)}>
        <div class="radio-circle"></div>
        <span class="radio-label">${this.label}</span>
      </div>
    `;
  }
};
T.styles = Wt`
    :host {
      display: inline-block;
      margin-bottom: 8px;
      margin-right: 16px;
      --rad-p: var(--uiv-primary-color, #6366f1);
      --rad-bg: var(--uiv-surface-color, #ffffff);
      --rad-text: var(--uiv-text-color, #1f2937);
      --rad-border: var(--uiv-border-color, #d1d5db);
      --glow: var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.4));
    }

    .radio-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      user-select: none;
      padding: 4px 0;
      position: relative;
    }

    .radio-wrapper.disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .radio-circle {
      width: 20px;
      height: 20px;
      border: 2px solid var(--rad-border);
      border-radius: 50%;
      background: var(--rad-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      box-sizing: border-box;
    }

    .radio-circle::after {
      content: "";
      width: 10px;
      height: 10px;
      background: var(--rad-p);
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      position: absolute;
    }

    /* Active State */
    .checked .radio-circle {
      border-color: var(--rad-p);
    }

    .checked .radio-circle::after {
      transform: scale(1);
    }

    .radio-label {
      font-size: 0.93rem;
      color: var(--rad-text);
      font-weight: 500;
    }

    /* ─── VARIANTS ─── */

    /* Glow Variant */
    .checked.variant-glow .radio-circle {
      box-shadow: var(--glow);
    }
    .checked.variant-glow .radio-circle::after {
      box-shadow: 0 0 8px var(--rad-p);
    }
  `;
x([
  q({ type: Boolean })
], T.prototype, "checked", 2);
x([
  q({ type: String })
], T.prototype, "label", 2);
x([
  q({ type: String })
], T.prototype, "value", 2);
x([
  q({ type: String })
], T.prototype, "name", 2);
x([
  q({ type: String })
], T.prototype, "variant", 2);
x([
  q({ type: Boolean })
], T.prototype, "disabled", 2);
x([
  q({ type: String, attribute: "accent-color" })
], T.prototype, "accentColor", 2);
x([
  z({
    attributeType: j.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Checked",
    fieldMappings: "checked"
  })
], T.prototype, "checkedConfig", 1);
x([
  z({
    attributeType: j.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], T.prototype, "labelConfig", 1);
x([
  z({
    attributeType: j.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Value Key",
    fieldMappings: "value"
  })
], T.prototype, "valueConfig", 1);
x([
  z({
    attributeType: j.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Group Name",
    fieldMappings: "name"
  })
], T.prototype, "nameConfig", 1);
x([
  z({
    attributeType: j.PROPERTY,
    uiComponentType: I.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard Options", value: "standard" },
      { label: "Glowing Neon", value: "glow" }
    ]
  })
], T.prototype, "variantConfig", 1);
x([
  z({
    attributeType: j.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], T.prototype, "disabledConfig", 1);
x([
  z({
    attributeType: j.PROPERTY,
    uiComponentType: I.COLOR_PICKER,
    displayLabel: "Custom Accent Color",
    fieldMappings: "accentColor"
  })
], T.prototype, "accentColorConfig", 1);
x([
  z({
    attributeType: j.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], T.prototype, "handleToggle", 1);
T = x([
  Lt({
    name: "zero-radio",
    version: "1.0.0",
    title: "Radio Button",
    elementSelector: "zero-radio",
    group: "Form Controls",
    iconName: "radio-icon.png"
  }),
  zt()
], T);
export {
  T as ZeroRadio,
  rt as studioTemplate
};
