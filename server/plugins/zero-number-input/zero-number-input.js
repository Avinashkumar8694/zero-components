var Ht = Object.defineProperty;
var Lt = (r, e, t) => e in r ? Ht(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ve = (r, e, t) => Lt(r, typeof e != "symbol" ? e + "" : e, t);
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
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(f, E) {
      return function(w, $) {
        Object.defineProperty(f, w, { configurable: !0, writable: !0, value: $ }), E && E(w, $);
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
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, E = !m && !f, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
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
    }, $ = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : kt(), I = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Nt(), D = typeof WeakMap == "function" ? WeakMap : Ut(), F = s ? Symbol.for("@reflect-metadata:registry") : void 0, ae = Mt(), Se = Pt(ae);
    function ht(i, o, a, d) {
      if (b(a)) {
        if (!Ue(i))
          throw new TypeError();
        if (!Ie(o))
          throw new TypeError();
        return wt(i, o);
      } else {
        if (!Ue(i))
          throw new TypeError();
        if (!S(o))
          throw new TypeError();
        if (!S(d) && !b(d) && !Y(d))
          throw new TypeError();
        return Y(d) && (d = void 0), a = L(a), Et(i, o, a, d);
      }
    }
    e("decorate", ht);
    function pt(i, o) {
      function a(d, y) {
        if (!S(d))
          throw new TypeError();
        if (!b(y) && !Ct(y))
          throw new TypeError();
        Me(i, o, d, y);
      }
      return a;
    }
    e("metadata", pt);
    function ft(i, o, a, d) {
      if (!S(a))
        throw new TypeError();
      return b(d) || (d = L(d)), Me(i, o, a, d);
    }
    e("defineMetadata", ft);
    function vt(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return b(a) || (a = L(a)), Te(i, o, a);
    }
    e("hasMetadata", vt);
    function yt(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return b(a) || (a = L(a)), pe(i, o, a);
    }
    e("hasOwnMetadata", yt);
    function mt(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return b(a) || (a = L(a)), Ce(i, o, a);
    }
    e("getMetadata", mt);
    function bt(i, o, a) {
      if (!S(o))
        throw new TypeError();
      return b(a) || (a = L(a)), Oe(i, o, a);
    }
    e("getOwnMetadata", bt);
    function gt(i, o) {
      if (!S(i))
        throw new TypeError();
      return b(o) || (o = L(o)), Pe(i, o);
    }
    e("getMetadataKeys", gt);
    function _t(i, o) {
      if (!S(i))
        throw new TypeError();
      return b(o) || (o = L(o)), Re(i, o);
    }
    e("getOwnMetadataKeys", _t);
    function $t(i, o, a) {
      if (!S(o))
        throw new TypeError();
      if (b(a) || (a = L(a)), !S(o))
        throw new TypeError();
      b(a) || (a = L(a));
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return b(d) ? !1 : d.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", $t);
    function wt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var d = i[a], y = d(o);
        if (!b(y) && !Y(y)) {
          if (!Ie(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function Et(i, o, a, d) {
      for (var y = i.length - 1; y >= 0; --y) {
        var C = i[y], T = C(o, a, d);
        if (!b(T) && !Y(T)) {
          if (!S(T))
            throw new TypeError();
          d = T;
        }
      }
      return d;
    }
    function Te(i, o, a) {
      var d = pe(i, o, a);
      if (d)
        return !0;
      var y = ve(o);
      return Y(y) ? !1 : Te(i, y, a);
    }
    function pe(i, o, a) {
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return b(d) ? !1 : Ne(d.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Ce(i, o, a) {
      var d = pe(i, o, a);
      if (d)
        return Oe(i, o, a);
      var y = ve(o);
      if (!Y(y))
        return Ce(i, y, a);
    }
    function Oe(i, o, a) {
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!b(d))
        return d.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Me(i, o, a, d) {
      var y = Q(
        a,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, o, a, d);
    }
    function Pe(i, o) {
      var a = Re(i, o), d = ve(i);
      if (d === null)
        return a;
      var y = Pe(d, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var C = new I(), T = [], g = 0, c = a; g < c.length; g++) {
        var h = c[g], p = C.has(h);
        p || (C.add(h), T.push(h));
      }
      for (var v = 0, _ = y; v < _.length; v++) {
        var h = _[v], p = C.has(h);
        p || (C.add(h), T.push(h));
      }
      return T;
    }
    function Re(i, o) {
      var a = Q(
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
    function b(i) {
      return i === void 0;
    }
    function Y(i) {
      return i === null;
    }
    function At(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function xt(i, o) {
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
      var a = "string", d = je(i, l);
      if (d !== void 0) {
        var y = d.call(i, a);
        if (S(y))
          throw new TypeError();
        return y;
      }
      return St(i);
    }
    function St(i, o) {
      var a, d;
      {
        var y = i.toString;
        if (le(y)) {
          var d = y.call(i);
          if (!S(d))
            return d;
        }
        var a = i.valueOf;
        if (le(a)) {
          var d = a.call(i);
          if (!S(d))
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
    function L(i) {
      var o = xt(i);
      return At(o) ? o : Tt(o);
    }
    function Ue(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function le(i) {
      return typeof i == "function";
    }
    function Ie(i) {
      return typeof i == "function";
    }
    function Ct(i) {
      switch (ke(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function fe(i, o) {
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
    function He(i) {
      var o = je(i, u);
      if (!le(o))
        throw new TypeError();
      var a = o.call(i);
      if (!S(a))
        throw new TypeError();
      return a;
    }
    function Le(i) {
      return i.value;
    }
    function De(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function ze(i) {
      var o = i.return;
      o && o.call(i);
    }
    function ve(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || o !== $)
        return o;
      var a = i.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return o;
      var y = d.constructor;
      return typeof y != "function" || y === i ? o : y;
    }
    function Ot() {
      var i;
      !b(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Rt(t.Reflect));
      var o, a, d, y = new D(), C = {
        registerProvider: T,
        getProvider: c,
        setProvider: p
      };
      return C;
      function T(v) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case b(o):
            o = v;
            break;
          case o === v:
            break;
          case b(a):
            a = v;
            break;
          case a === v:
            break;
          default:
            d === void 0 && (d = new I()), d.add(v);
            break;
        }
      }
      function g(v, _) {
        if (!b(o)) {
          if (o.isProviderFor(v, _))
            return o;
          if (!b(a)) {
            if (a.isProviderFor(v, _))
              return o;
            if (!b(d))
              for (var A = He(d); ; ) {
                var x = De(A);
                if (!x)
                  return;
                var H = Le(x);
                if (H.isProviderFor(v, _))
                  return ze(A), H;
              }
          }
        }
        if (!b(i) && i.isProviderFor(v, _))
          return i;
      }
      function c(v, _) {
        var A = y.get(v), x;
        return b(A) || (x = A.get(_)), b(x) && (x = g(v, _), b(x) || (b(A) && (A = new M(), y.set(v, A)), A.set(_, x))), x;
      }
      function h(v) {
        if (b(v))
          throw new TypeError();
        return o === v || a === v || !b(d) && d.has(v);
      }
      function p(v, _, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var x = c(v, _);
        if (x !== A) {
          if (!b(x))
            return !1;
          var H = y.get(v);
          b(H) && (H = new M(), y.set(v, H)), H.set(_, A);
        }
        return !0;
      }
    }
    function Mt() {
      var i;
      return !b(F) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[F]), b(i) && (i = Ot()), !b(F) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
      var o = new D(), a = {
        isProviderFor: function(h, p) {
          var v = o.get(h);
          return b(v) ? !1 : v.has(p);
        },
        OrdinaryDefineOwnMetadata: T,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: c
      };
      return ae.registerProvider(a), a;
      function d(h, p, v) {
        var _ = o.get(h), A = !1;
        if (b(_)) {
          if (!v)
            return;
          _ = new M(), o.set(h, _), A = !0;
        }
        var x = _.get(p);
        if (b(x)) {
          if (!v)
            return;
          if (x = new M(), _.set(p, x), !i.setProvider(h, p, a))
            throw _.delete(p), A && o.delete(h), new Error("Wrong provider for target.");
        }
        return x;
      }
      function y(h, p, v) {
        var _ = d(
          p,
          v,
          /*Create*/
          !1
        );
        return b(_) ? !1 : Ne(_.has(h));
      }
      function C(h, p, v) {
        var _ = d(
          p,
          v,
          /*Create*/
          !1
        );
        if (!b(_))
          return _.get(h);
      }
      function T(h, p, v, _) {
        var A = d(
          v,
          _,
          /*Create*/
          !0
        );
        A.set(h, p);
      }
      function g(h, p) {
        var v = [], _ = d(
          h,
          p,
          /*Create*/
          !1
        );
        if (b(_))
          return v;
        for (var A = _.keys(), x = He(A), H = 0; ; ) {
          var Be = De(x);
          if (!Be)
            return v.length = H, v;
          var It = Le(Be);
          try {
            v[H] = It;
          } catch (jt) {
            try {
              ze(x);
            } finally {
              throw jt;
            }
          }
          H++;
        }
      }
      function c(h, p, v) {
        var _ = d(
          p,
          v,
          /*Create*/
          !1
        );
        if (b(_) || !_.delete(h))
          return !1;
        if (_.size === 0) {
          var A = o.get(p);
          b(A) || (A.delete(v), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Rt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, d = i.getOwnMetadata, y = i.getOwnMetadataKeys, C = i.deleteMetadata, T = new D(), g = {
        isProviderFor: function(c, h) {
          var p = T.get(c);
          return !b(p) && p.has(h) ? !0 : y(c, h).length ? (b(p) && (p = new I(), T.set(c, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: C
      };
      return g;
    }
    function Q(i, o, a) {
      var d = ae.getProvider(i, o);
      if (!b(d))
        return d;
      if (a) {
        if (ae.setProvider(i, o, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function kt() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function g(c, h, p) {
            this._index = 0, this._keys = c, this._values = h, this._selector = p;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), c;
          }, g.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: c, done: !0 };
          }, g;
        }()
      ), d = (
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
          }), g.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, g.prototype.set = function(c, h) {
            var p = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, g.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, v = h + 1; v < p; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, fe(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, g.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, g.prototype.entries = function() {
            return new a(this._keys, this._values, T);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(c, h) {
            if (!fe(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (fe(this._keys[p], c)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return d;
      function y(g, c) {
        return g;
      }
      function C(g, c) {
        return c;
      }
      function T(g, c) {
        return [g, c];
      }
    }
    function Nt() {
      var i = (
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
          }, o.prototype[u] = function() {
            return this.keys();
          }, o;
        }()
      );
      return i;
    }
    function Ut() {
      var i = 16, o = w.create(), a = d();
      return (
        /** @class */
        function() {
          function c() {
            this._key = d();
          }
          return c.prototype.has = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? w.has(p, this._key) : !1;
          }, c.prototype.get = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? w.get(p, this._key) : void 0;
          }, c.prototype.set = function(h, p) {
            var v = y(
              h,
              /*create*/
              !0
            );
            return v[this._key] = p, this;
          }, c.prototype.delete = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = d();
          }, c;
        }()
      );
      function d() {
        var c;
        do
          c = "@@WeakMap@@" + g();
        while (w.has(o, c));
        return o[c] = !0, c;
      }
      function y(c, h) {
        if (!n.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: w.create() });
        }
        return c[a];
      }
      function C(c, h) {
        for (var p = 0; p < h; ++p)
          c[p] = Math.random() * 255 | 0;
        return c;
      }
      function T(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, c), h;
        }
        return C(new Array(c), c);
      }
      function g() {
        var c = T(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var v = c[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ye(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(qe || (qe = {}));
function Dt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function zt(r) {
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const w = new CSSStyleSheet(), $ = (E = l.sheet) == null ? void 0 : E.cssRules;
          $ && (Array.from($).forEach((M) => w.insertRule(M.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          f.appendChild(w);
        }
        u.forEach((w) => {
          const $ = w.cloneNode(!0);
          f.appendChild($);
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
function U(r) {
  return qt(r);
}
var N;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
})(N || (N = {}));
var R;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(R || (R = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, we = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), We = /* @__PURE__ */ new WeakMap();
let at = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
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
const Wt = (r) => new at(typeof r == "string" ? r : r + "", void 0, Ee), Ft = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new at(t, r, Ee);
}, Yt = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ue.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Fe = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Wt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Zt, getOwnPropertyDescriptor: Jt, getOwnPropertyNames: Qt, getOwnPropertySymbols: Kt, getPrototypeOf: er } = Object, B = globalThis, Ye = B.trustedTypes, tr = Ye ? Ye.emptyScript : "", me = B.reactiveElementPolyfillSupport, ee = (r, e) => r, de = { toAttribute(r, e) {
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
      s !== void 0 && Zt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = Jt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, m, n);
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
    return Yt(e, this.constructor.elementStyles), e;
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
      const m = n.getPropertyOptions(s), f = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : de;
      this._$Em = s;
      const E = f.fromAttribute(t, m.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? Ae)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
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
        const { wrapped: m } = u, f = this[l];
        m !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, u, f);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[ee("elementProperties")] = /* @__PURE__ */ new Map(), X[ee("finalized")] = /* @__PURE__ */ new Map(), me == null || me({ ReactiveElement: X }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Ze = (r) => r, ce = te.trustedTypes, Je = ce ? ce.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, lt = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + z, rr = `<${ut}>`, W = document, ne = () => W.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", xe = Array.isArray, nr = (r) => xe(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", be = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, V = RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, dt = /^(?:script|style|textarea|title)$/i, ir = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ge = ir(1), Z = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), G = W.createTreeWalker(W, 129);
function ct(r, e) {
  if (!xe(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let m = 0; m < t; m++) {
    const f = r[m];
    let E, w, $ = -1, M = 0;
    for (; M < f.length && (u.lastIndex = M, w = u.exec(f), w !== null); ) M = u.lastIndex, u === K ? w[1] === "!--" ? u = Qe : w[1] !== void 0 ? u = Ke : w[2] !== void 0 ? (dt.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = V) : w[3] !== void 0 && (u = V) : u === V ? w[0] === ">" ? (u = s ?? K, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? V : w[3] === '"' ? tt : et) : u === tt || u === et ? u = V : u === Qe || u === Ke ? u = K : (u = V, s = void 0);
    const I = u === V && r[m + 1].startsWith("/>") ? " " : "";
    l += u === K ? f + rr : $ >= 0 ? (n.push(E), f.slice(0, $) + lt + f.slice($) + z + I) : f + z + ($ === -2 ? m : I);
  }
  return [ct(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class se {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, f = this.parts, [E, w] = sr(e, t);
    if (this.el = se.createElement(E, n), G.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = G.nextNode()) !== null && f.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(lt)) {
          const M = w[u++], I = s.getAttribute($).split(z), D = /([.?@])?(.*)/.exec(M);
          f.push({ type: 1, index: l, name: D[2], strings: I, ctor: D[1] === "." ? ar : D[1] === "?" ? lr : D[1] === "@" ? ur : he }), s.removeAttribute($);
        } else $.startsWith(z) && (f.push({ type: 6, index: l }), s.removeAttribute($));
        if (dt.test(s.tagName)) {
          const $ = s.textContent.split(z), M = $.length - 1;
          if (M > 0) {
            s.textContent = ce ? ce.emptyScript : "";
            for (let I = 0; I < M; I++) s.append($[I], ne()), G.nextNode(), f.push({ type: 2, index: ++l });
            s.append($[M], ne());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ut) f.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(z, $ + 1)) !== -1; ) f.push({ type: 7, index: l }), $ += z.length - 1;
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
  var u, m;
  if (e === Z) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ie(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = J(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? W).importNode(t, !0);
    G.currentNode = s;
    let l = G.nextNode(), u = 0, m = 0, f = n[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let E;
        f.type === 2 ? E = new oe(l, l.nextSibling, this, e) : f.type === 1 ? E = new f.ctor(l, f.name, f.strings, this, e) : f.type === 6 && (E = new dr(l, this, e)), this._$AV.push(E), f = n[++m];
      }
      u !== (f == null ? void 0 : f.index) && (l = G.nextNode(), u++);
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
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = J(this, e, t), ie(e) ? e === O || e == null || e === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== O && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = se.createElement(ct(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new or(s, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    xe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new oe(this.O(ne()), this.O(ne()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
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
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = O;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = J(this, e, t, 0), u = !ie(e) || e !== this._$AH && e !== Z, u && (this._$AH = e);
    else {
      const m = e;
      let f, E;
      for (e = l[0], f = 0; f < l.length - 1; f++) E = J(this, m[n + f], t, f), E === Z && (E = this._$AH[f]), u || (u = !ie(E) || E !== this._$AH[f]), E === O ? e = O : e !== O && (e += (E ?? "") + l[f + 1]), this._$AH[f] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === O ? void 0 : e;
  }
}
class lr extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== O);
  }
}
class ur extends he {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? O) === Z) return;
    const n = this._$AH, s = e === O && n !== O || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== O && (n === O || s);
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
const _e = te.litHtmlPolyfillSupport;
_e == null || _e(se, oe), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
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
const q = globalThis;
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
    return Z;
  }
}
var ot;
re._$litElement$ = !0, re.finalized = !0, (ot = q.litElementHydrateSupport) == null || ot.call(q, { LitElement: re });
const $e = q.litElementPolyfillSupport;
$e == null || $e({ LitElement: re });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ae }, pr = (r = hr, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(m) {
      const f = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(u, f, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(m) {
      const f = this[u];
      e.call(this, m), this.requestUpdate(u, f, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function j(r) {
  return (e, t) => typeof t == "object" ? pr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var fr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, k = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? vr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && fr(e, t, s), s;
};
const nt = () => window.zeroThemeManager, it = {
  kind: "generic",
  templateHtml: [
    "<div style='padding:8px 12px;border-radius:8px;border:1px solid rgba(148,163,184,0.2);background:rgba(255,255,255,0.95);display:flex;align-items:center;gap:8px;'>",
    "<div style='flex:1;'>",
    "<div style='font-size:0.65rem;color:var(--uiv-text-muted,#94a3b8);font-weight:600;margin-bottom:2px;'>{{display:label}}</div>",
    "<div style='font-size:0.85rem;color:var(--uiv-text-color,#1e293b);font-weight:500;'>{{display:value}}</div>",
    "</div>",
    "<div style='display:flex;flex-direction:column;gap:2px;'>",
    "<span style='font-size:0.6rem;color:#94a3b8;cursor:pointer;'>▲</span>",
    "<span style='font-size:0.6rem;color:#94a3b8;cursor:pointer;'>▼</span>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Number"]
};
function st(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let P = class extends re {
  constructor() {
    super(...arguments), this.value = 0, this.label = "Number Input", this.placeholder = "Enter number", this.min = 0, this.max = 100, this.step = 1, this.required = !1, this.disabled = !1, this.showStepControls = !0, this.unitLabel = "", this.errorMessage = "", this.showError = !1;
  }
  static getStudioTemplate(r) {
    var m, f;
    if (!r) return it;
    const e = st(r.studio.display.label || "Number"), t = st(r.studio.display.value || "0"), n = !!(((m = r.props) == null ? void 0 : m.showStepControls) ?? ((f = r.studio.props) == null ? void 0 : f.showStepControls)), s = "var(--uiv-text-color, #333)", l = "var(--uiv-border-color, #ddd)", u = "var(--uiv-surface-color, #fff)";
    return {
      ...it,
      templateHtml: [
        "<div style='display:block;width:100%;font-family:inherit;'>",
        `<label style='display:block;margin-bottom:8px;font-size:14px;font-weight:500;color:${s};'>${e}</label>`,
        "<div style='display:flex;align-items:center;'>",
        `<div style='flex:1;padding:8px 12px;border:1px solid ${l};border-radius:8px;font-size:14px;background:${u};color:${s};box-shadow:var(--uiv-shadow-depth,none);'>${t}</div>`,
        n ? [
          "<div style='display:flex;flex-direction:column;margin-left:8px;gap:4px;'>",
          `<div style='width:28px;height:18px;border:1px solid ${l};border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:10px;background:${u};color:${s};'>▲</div>`,
          `<div style='width:28px;height:18px;border:1px solid ${l};border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:10px;background:${u};color:${s};'>▼</div>`,
          "</div>"
        ].join("") : "",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  increment() {
    const r = this.value + this.step;
    r <= this.max && (this.value = Math.round(r * 100) / 100, this.dispatchChangeEvent());
  }
  decrement() {
    const r = this.value - this.step;
    r >= this.min && (this.value = Math.round(r * 100) / 100, this.dispatchChangeEvent());
  }
  dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent("change", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleInput(r) {
    const e = r.target;
    this.value = Number(e.value) || 0, this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(r) {
    const e = r.target;
    let t = Number(e.value) || 0;
    t = Math.max(this.min, Math.min(this.max, t)), this.value = t, e.value = String(t), this.dispatchChangeEvent();
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = nt()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const r = (e = nt()) == null ? void 0 : e.getActiveTheme("zero-standard-themes");
    return ge`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getComponentStyles("input") : ""}
            </style>
            <div class="form-field uiv-${r == null ? void 0 : r.id}-theme">
                <label for="number-input" class="uiv-${r == null ? void 0 : r.id}-text">${this.label}</label>
                <div class="number-container">
                    <input 
                        id="number-input"
                        type="number" 
                        class="mat-mdc-input-element uiv-${r == null ? void 0 : r.id}-card uiv-${r == null ? void 0 : r.id}-scan ${this.showError ? "error" : ""}"
                        .value="${String(this.value)}" 
                        placeholder="${this.placeholder}"
                        min="${this.min}"
                        max="${this.max}"
                        step="${this.step}"
                        ?required="${this.required}"
                        ?disabled="${this.disabled}"
                        @input="${this.handleInput}"
                        @change="${this.handleChange}"
                    />
                    ${this.showStepControls ? ge`
                        <div class="step-controls">
                            <button 
                                type="button"
                                class="step-button uiv-${r == null ? void 0 : r.id}-card"
                                ?disabled="${this.disabled || this.value >= this.max}"
                                @click="${this.increment}"
                            >▲</button>
                            <button 
                                type="button"
                                class="step-button uiv-${r == null ? void 0 : r.id}-card"
                                ?disabled="${this.disabled || this.value <= this.min}"
                                @click="${this.decrement}"
                            >▼</button>
                        </div>
                    ` : ""}
                </div>
                ${this.unitLabel ? ge`
                    <div class="value-display uiv-${r == null ? void 0 : r.id}-text-secondary">
                        Current: ${this.value} ${this.unitLabel}
                    </div>
                ` : ""}
                <div class="error-message uiv-${r == null ? void 0 : r.id}-text ${this.showError ? "show" : ""}" style="color: var(--uiv-error-color, #f44336)">
                    ${this.errorMessage}
                </div>
            </div>
        `;
  }
};
P.styles = Ft`
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

        .form-field label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--uiv-text);
            font-weight: 500;
        }

        .number-container {
            position: relative;
            display: flex;
            align-items: center;
        }

        input.mat-mdc-input-element {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid var(--uiv-border);
            border-radius: 8px;
            font-size: 14px;
            background-color: var(--uiv-bg);
            color: var(--uiv-text);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            min-height: 40px;
            box-sizing: border-box;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        input.mat-mdc-input-element:hover {
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
        }

        input.mat-mdc-input-element:focus {
            outline: none;
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
            transform: translateY(-1px);
        }

        .step-controls {
            display: flex;
            flex-direction: column;
            margin-left: 8px;
            gap: 4px;
        }

        .step-button {
            background: var(--uiv-bg);
            border: 1px solid var(--uiv-border);
            color: var(--uiv-text);
            cursor: pointer;
            width: 28px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            transition: all 0.2s;
            font-size: 10px;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        .step-button:hover:not(:disabled) {
            background: var(--uiv-primary);
            color: white;
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
            transform: scale(1.1);
        }
    `;
k([
  j({ type: Number }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], P.prototype, "value", 2);
k([
  j({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], P.prototype, "label", 2);
k([
  j({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], P.prototype, "placeholder", 2);
k([
  j({ type: Number }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Minimum Value",
    fieldMappings: "min"
  })
], P.prototype, "min", 2);
k([
  j({ type: Number }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Maximum Value",
    fieldMappings: "max"
  })
], P.prototype, "max", 2);
k([
  j({ type: Number }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.NUMBER_INPUT,
    displayLabel: "Step",
    fieldMappings: "step"
  })
], P.prototype, "step", 2);
k([
  j({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], P.prototype, "required", 2);
k([
  j({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], P.prototype, "disabled", 2);
k([
  j({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Step Controls",
    fieldMappings: "showStepControls"
  })
], P.prototype, "showStepControls", 2);
k([
  j({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Unit Label",
    placeholderText: "e.g., kg, cm, %",
    fieldMappings: "unitLabel"
  })
], P.prototype, "unitLabel", 2);
k([
  j({ type: String }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], P.prototype, "errorMessage", 2);
k([
  j({ type: Boolean }),
  U({
    attributeType: R.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], P.prototype, "showError", 2);
k([
  U({
    attributeType: R.EVENT,
    displayLabel: "On Input",
    eventTrigger: "input"
  })
], P.prototype, "handleInput", 1);
k([
  U({
    attributeType: R.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], P.prototype, "handleChange", 1);
P = k([
  Bt({
    name: "zero-number-input",
    version: "1.0.0",
    title: "Number Input",
    elementSelector: "zero-number-input",
    group: "Form Controls",
    iconName: "number-input-icon.png"
  }),
  Vt()
], P);
export {
  P as ZeroNumberInput,
  it as studioTemplate
};
