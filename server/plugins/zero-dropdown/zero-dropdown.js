var It = Object.defineProperty;
var jt = (r, e, t) => e in r ? It(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Be = (r, e, t) => jt(r, typeof e != "symbol" ? e + "" : e, t);
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
    var t = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : b(), i = s(r);
    typeof t.Reflect < "u" && (i = s(t.Reflect, i)), e(i, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(v, E) {
      return function($, w) {
        Object.defineProperty(v, $, { configurable: !0, writable: !0, value: w }), E && E($, w);
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
    function b() {
      return l() || u();
    }
  })(function(e, t) {
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, E = !b && !v, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return be(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return be({ __proto__: null });
      } : function() {
        return be({});
      },
      has: E ? function(n, o) {
        return i.call(n, o);
      } : function(n, o) {
        return o in n;
      },
      get: E ? function(n, o) {
        return i.call(n, o) ? n[o] : void 0;
      } : function(n, o) {
        return n[o];
      }
    }, w = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : kt(), H = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Nt(), V = typeof WeakMap == "function" ? WeakMap : Dt(), Y = s ? Symbol.for("@reflect-metadata:registry") : void 0, le = Pt(), Se = Mt(le);
    function ht(n, o, a, d) {
      if (g(a)) {
        if (!De(n))
          throw new TypeError();
        if (!Ue(o))
          throw new TypeError();
        return $t(n, o);
      } else {
        if (!De(n))
          throw new TypeError();
        if (!S(o))
          throw new TypeError();
        if (!S(d) && !g(d) && !X(d))
          throw new TypeError();
        return X(d) && (d = void 0), a = j(a), Et(n, o, a, d);
      }
    }
    e("decorate", ht);
    function pt(n, o) {
      function a(d, y) {
        if (!S(d))
          throw new TypeError();
        if (!g(y) && !Ct(y))
          throw new TypeError();
        Pe(n, o, d, y);
      }
      return a;
    }
    e("metadata", pt);
    function ft(n, o, a, d) {
      if (!S(a))
        throw new TypeError();
      return g(d) || (d = j(d)), Pe(n, o, a, d);
    }
    e("defineMetadata", ft);
    function vt(n, o, a) {
      if (!S(o))
        throw new TypeError();
      return g(a) || (a = j(a)), xe(n, o, a);
    }
    e("hasMetadata", vt);
    function yt(n, o, a) {
      if (!S(o))
        throw new TypeError();
      return g(a) || (a = j(a)), fe(n, o, a);
    }
    e("hasOwnMetadata", yt);
    function bt(n, o, a) {
      if (!S(o))
        throw new TypeError();
      return g(a) || (a = j(a)), Ce(n, o, a);
    }
    e("getMetadata", bt);
    function gt(n, o, a) {
      if (!S(o))
        throw new TypeError();
      return g(a) || (a = j(a)), Te(n, o, a);
    }
    e("getOwnMetadata", gt);
    function mt(n, o) {
      if (!S(n))
        throw new TypeError();
      return g(o) || (o = j(o)), Me(n, o);
    }
    e("getMetadataKeys", mt);
    function _t(n, o) {
      if (!S(n))
        throw new TypeError();
      return g(o) || (o = j(o)), Re(n, o);
    }
    e("getOwnMetadataKeys", _t);
    function wt(n, o, a) {
      if (!S(o))
        throw new TypeError();
      if (g(a) || (a = j(a)), !S(o))
        throw new TypeError();
      g(a) || (a = j(a));
      var d = K(
        o,
        a,
        /*Create*/
        !1
      );
      return g(d) ? !1 : d.OrdinaryDeleteMetadata(n, o, a);
    }
    e("deleteMetadata", wt);
    function $t(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var d = n[a], y = d(o);
        if (!g(y) && !X(y)) {
          if (!Ue(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function Et(n, o, a, d) {
      for (var y = n.length - 1; y >= 0; --y) {
        var C = n[y], x = C(o, a, d);
        if (!g(x) && !X(x)) {
          if (!S(x))
            throw new TypeError();
          d = x;
        }
      }
      return d;
    }
    function xe(n, o, a) {
      var d = fe(n, o, a);
      if (d)
        return !0;
      var y = ye(o);
      return X(y) ? !1 : xe(n, y, a);
    }
    function fe(n, o, a) {
      var d = K(
        o,
        a,
        /*Create*/
        !1
      );
      return g(d) ? !1 : Ne(d.OrdinaryHasOwnMetadata(n, o, a));
    }
    function Ce(n, o, a) {
      var d = fe(n, o, a);
      if (d)
        return Te(n, o, a);
      var y = ye(o);
      if (!X(y))
        return Ce(n, y, a);
    }
    function Te(n, o, a) {
      var d = K(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(d))
        return d.OrdinaryGetOwnMetadata(n, o, a);
    }
    function Pe(n, o, a, d) {
      var y = K(
        a,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(n, o, a, d);
    }
    function Me(n, o) {
      var a = Re(n, o), d = ye(n);
      if (d === null)
        return a;
      var y = Me(d, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var C = new H(), x = [], m = 0, c = a; m < c.length; m++) {
        var h = c[m], p = C.has(h);
        p || (C.add(h), x.push(h));
      }
      for (var f = 0, _ = y; f < _.length; f++) {
        var h = _[f], p = C.has(h);
        p || (C.add(h), x.push(h));
      }
      return x;
    }
    function Re(n, o) {
      var a = K(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function ke(n) {
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
    function At(n) {
      return typeof n == "symbol";
    }
    function S(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function Ot(n, o) {
      switch (ke(n)) {
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
      var a = "string", d = He(n, l);
      if (d !== void 0) {
        var y = d.call(n, a);
        if (S(y))
          throw new TypeError();
        return y;
      }
      return St(n);
    }
    function St(n, o) {
      var a, d;
      {
        var y = n.toString;
        if (ue(y)) {
          var d = y.call(n);
          if (!S(d))
            return d;
        }
        var a = n.valueOf;
        if (ue(a)) {
          var d = a.call(n);
          if (!S(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ne(n) {
      return !!n;
    }
    function xt(n) {
      return "" + n;
    }
    function j(n) {
      var o = Ot(n);
      return At(o) ? o : xt(o);
    }
    function De(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function ue(n) {
      return typeof n == "function";
    }
    function Ue(n) {
      return typeof n == "function";
    }
    function Ct(n) {
      switch (ke(n)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ve(n, o) {
      return n === o || n !== n && o !== o;
    }
    function He(n, o) {
      var a = n[o];
      if (a != null) {
        if (!ue(a))
          throw new TypeError();
        return a;
      }
    }
    function Ie(n) {
      var o = He(n, u);
      if (!ue(o))
        throw new TypeError();
      var a = o.call(n);
      if (!S(a))
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
    function Ve(n) {
      var o = n.return;
      o && o.call(n);
    }
    function ye(n) {
      var o = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === w || o !== w)
        return o;
      var a = n.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return o;
      var y = d.constructor;
      return typeof y != "function" || y === n ? o : y;
    }
    function Tt() {
      var n;
      !g(Y) && typeof t.Reflect < "u" && !(Y in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (n = Rt(t.Reflect));
      var o, a, d, y = new V(), C = {
        registerProvider: x,
        getProvider: c,
        setProvider: p
      };
      return C;
      function x(f) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === f:
            break;
          case g(o):
            o = f;
            break;
          case o === f:
            break;
          case g(a):
            a = f;
            break;
          case a === f:
            break;
          default:
            d === void 0 && (d = new H()), d.add(f);
            break;
        }
      }
      function m(f, _) {
        if (!g(o)) {
          if (o.isProviderFor(f, _))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(f, _))
              return o;
            if (!g(d))
              for (var A = Ie(d); ; ) {
                var O = Le(A);
                if (!O)
                  return;
                var I = je(O);
                if (I.isProviderFor(f, _))
                  return Ve(A), I;
              }
          }
        }
        if (!g(n) && n.isProviderFor(f, _))
          return n;
      }
      function c(f, _) {
        var A = y.get(f), O;
        return g(A) || (O = A.get(_)), g(O) && (O = m(f, _), g(O) || (g(A) && (A = new M(), y.set(f, A)), A.set(_, O))), O;
      }
      function h(f) {
        if (g(f))
          throw new TypeError();
        return o === f || a === f || !g(d) && d.has(f);
      }
      function p(f, _, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var O = c(f, _);
        if (O !== A) {
          if (!g(O))
            return !1;
          var I = y.get(f);
          g(I) && (I = new M(), y.set(f, I)), I.set(_, A);
        }
        return !0;
      }
    }
    function Pt() {
      var n;
      return !g(Y) && S(t.Reflect) && Object.isExtensible(t.Reflect) && (n = t.Reflect[Y]), g(n) && (n = Tt()), !g(Y) && S(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, Y, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Mt(n) {
      var o = new V(), a = {
        isProviderFor: function(h, p) {
          var f = o.get(h);
          return g(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: x,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: c
      };
      return le.registerProvider(a), a;
      function d(h, p, f) {
        var _ = o.get(h), A = !1;
        if (g(_)) {
          if (!f)
            return;
          _ = new M(), o.set(h, _), A = !0;
        }
        var O = _.get(p);
        if (g(O)) {
          if (!f)
            return;
          if (O = new M(), _.set(p, O), !n.setProvider(h, p, a))
            throw _.delete(p), A && o.delete(h), new Error("Wrong provider for target.");
        }
        return O;
      }
      function y(h, p, f) {
        var _ = d(
          p,
          f,
          /*Create*/
          !1
        );
        return g(_) ? !1 : Ne(_.has(h));
      }
      function C(h, p, f) {
        var _ = d(
          p,
          f,
          /*Create*/
          !1
        );
        if (!g(_))
          return _.get(h);
      }
      function x(h, p, f, _) {
        var A = d(
          f,
          _,
          /*Create*/
          !0
        );
        A.set(h, p);
      }
      function m(h, p) {
        var f = [], _ = d(
          h,
          p,
          /*Create*/
          !1
        );
        if (g(_))
          return f;
        for (var A = _.keys(), O = Ie(A), I = 0; ; ) {
          var ze = Le(O);
          if (!ze)
            return f.length = I, f;
          var Ut = je(ze);
          try {
            f[I] = Ut;
          } catch (Ht) {
            try {
              Ve(O);
            } finally {
              throw Ht;
            }
          }
          I++;
        }
      }
      function c(h, p, f) {
        var _ = d(
          p,
          f,
          /*Create*/
          !1
        );
        if (g(_) || !_.delete(h))
          return !1;
        if (_.size === 0) {
          var A = o.get(p);
          g(A) || (A.delete(f), A.size === 0 && o.delete(A));
        }
        return !0;
      }
    }
    function Rt(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, d = n.getOwnMetadata, y = n.getOwnMetadataKeys, C = n.deleteMetadata, x = new V(), m = {
        isProviderFor: function(c, h) {
          var p = x.get(c);
          return !g(p) && p.has(h) ? !0 : y(c, h).length ? (g(p) && (p = new H(), x.set(c, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: C
      };
      return m;
    }
    function K(n, o, a) {
      var d = le.getProvider(n, o);
      if (!g(d))
        return d;
      if (a) {
        if (le.setProvider(n, o, Se))
          return Se;
        throw new Error("Illegal state.");
      }
    }
    function kt() {
      var n = {}, o = [], a = (
        /** @class */
        function() {
          function m(c, h, p) {
            this._index = 0, this._keys = c, this._values = h, this._selector = p;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), c;
          }, m.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: c, done: !0 };
          }, m;
        }()
      ), d = (
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
          }), m.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, m.prototype.set = function(c, h) {
            var p = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, m.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, f = h + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, ve(c, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, C);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, x);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(c, h) {
            if (!ve(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (ve(this._keys[p], c)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return d;
      function y(m, c) {
        return m;
      }
      function C(m, c) {
        return c;
      }
      function x(m, c) {
        return [m, c];
      }
    }
    function Nt() {
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
          }, o.prototype[u] = function() {
            return this.keys();
          }, o;
        }()
      );
      return n;
    }
    function Dt() {
      var n = 16, o = $.create(), a = d();
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
            return p !== void 0 ? $.has(p, this._key) : !1;
          }, c.prototype.get = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? $.get(p, this._key) : void 0;
          }, c.prototype.set = function(h, p) {
            var f = y(
              h,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
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
          c = "@@WeakMap@@" + m();
        while ($.has(o, c));
        return o[c] = !0, c;
      }
      function y(c, h) {
        if (!i.call(c, a)) {
          if (!h)
            return;
          Object.defineProperty(c, a, { value: $.create() });
        }
        return c[a];
      }
      function C(c, h) {
        for (var p = 0; p < h; ++p)
          c[p] = Math.random() * 255 | 0;
        return c;
      }
      function x(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : C(h, c), h;
        }
        return C(new Array(c), c);
      }
      function m() {
        var c = x(n);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", p = 0; p < n; ++p) {
          var f = c[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), f < 16 && (h += "0"), h += f.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function be(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(We || (We = {}));
function Lt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Vt(r) {
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
  return Vt(r);
}
function Bt(r) {
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), b = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && b) {
          const $ = new CSSStyleSheet(), w = (E = l.sheet) == null ? void 0 : E.cssRules;
          w && (Array.from(w).forEach((M) => $.insertRule(M.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          v.appendChild($);
        }
        u.forEach(($) => {
          const w = $.cloneNode(!0);
          v.appendChild(w);
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
function U(r) {
  return Wt(r);
}
var N;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker";
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
const de = globalThis, $e = de.ShadowRoot && (de.ShadyCSS === void 0 || de.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), qe = /* @__PURE__ */ new WeakMap();
let at = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if ($e && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = qe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && qe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const qt = (r) => new at(typeof r == "string" ? r : r + "", void 0, Ee), Ft = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, s, l) => i + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new at(t, r, Ee);
}, Yt = (r, e) => {
  if ($e) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), s = de.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = t.cssText, r.appendChild(i);
  }
}, Fe = $e ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return qt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Zt, getOwnPropertyDescriptor: Qt, getOwnPropertyNames: Jt, getOwnPropertySymbols: Kt, getPrototypeOf: er } = Object, B = globalThis, Ye = B.trustedTypes, tr = Ye ? Ye.emptyScript : "", ge = B.reactiveElementPolyfillSupport, te = (r, e) => r, ce = { toAttribute(r, e) {
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
} }, Ae = (r, e) => !Xt(r, e), Xe = { attribute: !0, type: String, converter: ce, reflect: !1, useDefault: !1, hasChanged: Ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Xe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, t);
      s !== void 0 && Zt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: s, set: l } = Qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const b = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, b, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Xe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(te("elementProperties"))) return;
    const e = er(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(te("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(te("properties"))) {
      const t = this.properties, i = [...Jt(t), ...Kt(t)];
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
    return Yt(e, this.constructor.elementStyles), e;
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
      const u = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : ce).toAttribute(t, i.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const b = i.getPropertyOptions(s), v = typeof b.converter == "function" ? { fromAttribute: b.converter } : ((l = b.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? b.converter : ce;
      this._$Em = s;
      const E = v.fromAttribute(t, b.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, i, s = !1, l) {
    var u;
    if (e !== void 0) {
      const b = this.constructor;
      if (s === !1 && (l = this[e]), i ?? (i = b.getPropertyOptions(e)), !((i.hasChanged ?? Ae)(l, t) || i.useDefault && i.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(b._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: s, wrapped: l }, u) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: b } = u, v = this[l];
        b !== !0 || this._$AL.has(l) || v === void 0 || this.C(l, void 0, u, v);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[te("elementProperties")] = /* @__PURE__ */ new Map(), Z[te("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: Z }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re = globalThis, Ze = (r) => r, he = re.trustedTypes, Qe = he ? he.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, lt = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + z, rr = `<${ut}>`, F = document, ne = () => F.createComment(""), se = (r) => r === null || typeof r != "object" && typeof r != "function", Oe = Array.isArray, ir = (r) => Oe(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, ee = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Je = /-->/g, Ke = />/g, G = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, dt = /^(?:script|style|textarea|title)$/i, nr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), L = nr(1), Q = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), W = F.createTreeWalker(F, 129);
function ct(r, e) {
  if (!Oe(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Qe !== void 0 ? Qe.createHTML(e) : e;
}
const sr = (r, e) => {
  const t = r.length - 1, i = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = ee;
  for (let b = 0; b < t; b++) {
    const v = r[b];
    let E, $, w = -1, M = 0;
    for (; M < v.length && (u.lastIndex = M, $ = u.exec(v), $ !== null); ) M = u.lastIndex, u === ee ? $[1] === "!--" ? u = Je : $[1] !== void 0 ? u = Ke : $[2] !== void 0 ? (dt.test($[2]) && (s = RegExp("</" + $[2], "g")), u = G) : $[3] !== void 0 && (u = G) : u === G ? $[0] === ">" ? (u = s ?? ee, w = -1) : $[1] === void 0 ? w = -2 : (w = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? G : $[3] === '"' ? tt : et) : u === tt || u === et ? u = G : u === Je || u === Ke ? u = ee : (u = G, s = void 0);
    const H = u === G && r[b + 1].startsWith("/>") ? " " : "";
    l += u === ee ? v + rr : w >= 0 ? (i.push(E), v.slice(0, w) + lt + v.slice(w) + z + H) : v + z + (w === -2 ? b : H);
  }
  return [ct(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class oe {
  constructor({ strings: e, _$litType$: t }, i) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const b = e.length - 1, v = this.parts, [E, $] = sr(e, t);
    if (this.el = oe.createElement(E, i), W.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = W.nextNode()) !== null && v.length < b; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(lt)) {
          const M = $[u++], H = s.getAttribute(w).split(z), V = /([.?@])?(.*)/.exec(M);
          v.push({ type: 1, index: l, name: V[2], strings: H, ctor: V[1] === "." ? ar : V[1] === "?" ? lr : V[1] === "@" ? ur : pe }), s.removeAttribute(w);
        } else w.startsWith(z) && (v.push({ type: 6, index: l }), s.removeAttribute(w));
        if (dt.test(s.tagName)) {
          const w = s.textContent.split(z), M = w.length - 1;
          if (M > 0) {
            s.textContent = he ? he.emptyScript : "";
            for (let H = 0; H < M; H++) s.append(w[H], ne()), W.nextNode(), v.push({ type: 2, index: ++l });
            s.append(w[M], ne());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ut) v.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(z, w + 1)) !== -1; ) v.push({ type: 7, index: l }), w += z.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const i = F.createElement("template");
    return i.innerHTML = e, i;
  }
}
function J(r, e, t = r, i) {
  var u, b;
  if (e === Q) return e;
  let s = i !== void 0 ? (u = t._$Co) == null ? void 0 : u[i] : t._$Cl;
  const l = se(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((b = s == null ? void 0 : s._$AO) == null || b.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = s : t._$Cl = s), s !== void 0 && (e = J(r, s._$AS(r, e.values), s, i)), e;
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
    const { el: { content: t }, parts: i } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? F).importNode(t, !0);
    W.currentNode = s;
    let l = W.nextNode(), u = 0, b = 0, v = i[0];
    for (; v !== void 0; ) {
      if (u === v.index) {
        let E;
        v.type === 2 ? E = new ae(l, l.nextSibling, this, e) : v.type === 1 ? E = new v.ctor(l, v.name, v.strings, this, e) : v.type === 6 && (E = new dr(l, this, e)), this._$AV.push(E), v = i[++b];
      }
      u !== (v == null ? void 0 : v.index) && (l = W.nextNode(), u++);
    }
    return W.currentNode = F, s;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class ae {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, s) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = J(this, e, t), se(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== Q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : ir(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(F.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = oe.createElement(ct(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new or(s, this), b = u.u(this.options);
      u.p(t), this.T(b), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new oe(e)), t;
  }
  k(e) {
    Oe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, s = 0;
    for (const l of e) s === t.length ? t.push(i = new ae(this.O(ne()), this.O(ne()), this, this.options)) : i = t[s], i._$AI(l), s++;
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
class pe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, s, l) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = T;
  }
  _$AI(e, t = this, i, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = J(this, e, t, 0), u = !se(e) || e !== this._$AH && e !== Q, u && (this._$AH = e);
    else {
      const b = e;
      let v, E;
      for (e = l[0], v = 0; v < l.length - 1; v++) E = J(this, b[i + v], t, v), E === Q && (E = this._$AH[v]), u || (u = !se(E) || E !== this._$AH[v]), E === T ? e = T : e !== T && (e += (E ?? "") + l[v + 1]), this._$AH[v] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends pe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
class lr extends pe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}
class ur extends pe {
  constructor(e, t, i, s, l) {
    super(e, t, i, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? T) === Q) return;
    const i = this._$AH, s = e === T && i !== T || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== T && (i === T || s);
    s && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class dr {
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
const _e = re.litHtmlPolyfillSupport;
_e == null || _e(oe, ae), (re.litHtmlVersions ?? (re.litHtmlVersions = [])).push("3.3.3");
const cr = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = s = new ae(e.insertBefore(ne(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis;
class ie extends Z {
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
    return Q;
  }
}
var ot;
ie._$litElement$ = !0, ie.finalized = !0, (ot = q.litElementHydrateSupport) == null || ot.call(q, { LitElement: ie });
const we = q.litElementPolyfillSupport;
we == null || we({ LitElement: ie });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ae }, pr = (r = hr, e, t) => {
  const { kind: i, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), i === "accessor") {
    const { name: u } = t;
    return { set(b) {
      const v = e.get.call(this);
      e.set.call(this, b), this.requestUpdate(u, v, r, !0, b);
    }, init(b) {
      return b !== void 0 && this.C(u, void 0, r, b), b;
    } };
  }
  if (i === "setter") {
    const { name: u } = t;
    return function(b) {
      const v = this[u];
      e.call(this, b), this.requestUpdate(u, v, r, !0, b);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function D(r) {
  return (e, t) => typeof t == "object" ? pr(r, e, t) : ((i, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, i), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var fr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, R = (r, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? vr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (i ? u(e, t, s) : u(s)) || s);
  return i && s && fr(e, t, s), s;
};
const it = () => window.zeroThemeManager, nt = {
  kind: "generic",
  templateHtml: [
    "<div style='padding:10px 14px;border-radius:8px;border:1px solid rgba(148,163,184,0.2);background:rgba(255,255,255,0.95);display:flex;justify-content:space-between;align-items:center;'>",
    "<div>",
    "<div style='font-size:0.65rem;color:var(--uiv-text-muted,#94a3b8);font-weight:600;margin-bottom:2px;'>{{display:label}}</div>",
    "<div style='font-size:0.8rem;color:var(--uiv-text-color,#1e293b);'>{{display:placeholder}}</div>",
    "</div>",
    "<span style='font-size:0.7rem;color:#94a3b8;'>▼</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Dropdown"]
};
function st(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let P = class extends ie {
  constructor() {
    super(...arguments), this.value = "", this.selectedValues = [], this.label = "Dropdown", this.placeholder = "Select an option...", this.options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" }
    ], this.required = !1, this.disabled = !1, this.multiple = !1, this.searchable = !1, this.customStyle = !1, this.errorMessage = "", this.showError = !1, this.isOpen = !1, this.searchQuery = "";
  }
  static getStudioTemplate(r) {
    if (!r) return nt;
    const e = st(r.studio.display.label || "Dropdown"), t = st(r.studio.display.placeholder || "Select..."), i = "var(--uiv-text-color, #333)";
    return {
      ...nt,
      templateHtml: [
        "<div style='display:block;width:100%;font-family:inherit;'>",
        `<label style='display:block;margin-bottom:8px;font-size:14px;font-weight:500;color:${i};'>${e}</label>`,
        `<div style='width:100%;padding:8px 12px;border:1px solid var(--uiv-border-color, #ddd);border-radius:8px;font-size:14px;background:var(--uiv-surface-color, #fff);color:${i};display:flex;justify-content:space-between;align-items:center;box-shadow:var(--uiv-shadow-depth,none);'>`,
        `<span>${t}</span>`,
        "<span style='font-size:0.7rem;opacity:0.6;'>▼</span>",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  getFilteredOptions() {
    return this.searchQuery ? this.options.filter(
      (r) => r.label.toLowerCase().includes(this.searchQuery.toLowerCase()) || r.value.toLowerCase().includes(this.searchQuery.toLowerCase())
    ) : this.options;
  }
  getSelectedLabel() {
    if (this.multiple)
      return this.selectedValues.length > 0 ? `${this.selectedValues.length} selected` : this.placeholder;
    const r = this.options.find((e) => e.value === this.value);
    return r ? r.label : this.placeholder;
  }
  toggleDropdown() {
    this.disabled || (this.isOpen = !this.isOpen, this.searchQuery = "");
  }
  selectOption(r) {
    this.multiple ? this.selectedValues.indexOf(r.value) > -1 ? this.selectedValues = this.selectedValues.filter((t) => t !== r.value) : this.selectedValues = [...this.selectedValues, r.value] : (this.value = r.value, this.isOpen = !1), this.dispatchChangeEvent();
  }
  removeTag(r) {
    this.selectedValues = this.selectedValues.filter((e) => e !== r), this.dispatchChangeEvent();
  }
  handleSearch(r) {
    const e = r.target;
    this.searchQuery = e.value;
  }
  dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent("change", {
      detail: {
        value: this.value,
        selectedValues: this.selectedValues,
        multiple: this.multiple
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(r) {
    const e = r.target;
    this.multiple ? this.selectedValues = Array.from(e.selectedOptions).map((t) => t.value) : this.value = e.value, this.dispatchChangeEvent();
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = it()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const r = (e = it()) == null ? void 0 : e.getActiveTheme("zero-standard-themes");
    if (this.customStyle || this.searchable) {
      const t = this.getFilteredOptions();
      return L`
                <style>
                    ${r ? r.getGlobalStyles() : ""}
                    ${r ? r.getComponentStyles("dropdown") : ""}
                </style>
                <div class="form-field uiv-${r == null ? void 0 : r.id}-theme">
                    <label for="dropdown" class="uiv-${r == null ? void 0 : r.id}-text">${this.label}</label>
                    <div class="custom-dropdown">
                        <button 
                            type="button"
                            class="dropdown-button uiv-${r == null ? void 0 : r.id}-card uiv-${r == null ? void 0 : r.id}-scan ${this.showError ? "error" : ""}"
                            ?disabled="${this.disabled}"
                            @click="${this.toggleDropdown}"
                        >
                            <span class="uiv-${r == null ? void 0 : r.id}-text">${this.getSelectedLabel()}</span>
                            <span class="dropdown-arrow uiv-${r == null ? void 0 : r.id}-text ${this.isOpen ? "open" : ""}">▼</span>
                        </button>
                        
                        ${this.isOpen ? L`
                            <div class="dropdown-options uiv-${r == null ? void 0 : r.id}-card">
                                ${this.searchable ? L`
                                    <input 
                                        type="text"
                                        class="search-input uiv-${r == null ? void 0 : r.id}-text"
                                        style="background: transparent; border-bottom: 1px solid rgba(var(--uiv-primary-rgb), 0.2);"
                                        placeholder="Search options..."
                                        .value="${this.searchQuery}"
                                        @input="${this.handleSearch}"
                                        @click="${(i) => i.stopPropagation()}"
                                    />
                                ` : ""}
                                
                                ${t.length > 0 ? t.map((i) => L`
                                    <div 
                                        class="option-item ${this.multiple ? this.selectedValues.includes(i.value) ? "selected" : "" : this.value === i.value ? "selected" : ""}"
                                        @click="${() => this.selectOption(i)}"
                                    >
                                        ${i.label}
                                    </div>
                                `) : L`
                                    <div class="no-options uiv-${r == null ? void 0 : r.id}-text-secondary">No options found</div>
                                `}
                            </div>
                        ` : ""}
                    </div>
                    
                    ${this.multiple && this.selectedValues.length > 0 ? L`
                        <div class="multi-select-tags">
                            ${this.selectedValues.map((i) => {
        const s = this.options.find((l) => l.value === i);
        return L`
                                    <span class="tag">
                                        ${(s == null ? void 0 : s.label) || i}
                                        <span class="tag-remove" @click="${() => this.removeTag(i)}">×</span>
                                    </span>
                                `;
      })}
                        </div>
                    ` : ""}
                    
                    <div class="error-message ${this.showError ? "show" : ""}">
                        ${this.errorMessage}
                    </div>
                </div>
            `;
    }
    return L`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getComponentStyles("dropdown") : ""}
            </style>
            <div class="form-field uiv-${r == null ? void 0 : r.id}-theme">
                <label for="select-input" class="uiv-${r == null ? void 0 : r.id}-text">${this.label}</label>
                <select 
                    id="select-input"
                    class="mat-mdc-input-element uiv-${r == null ? void 0 : r.id}-card ${this.showError ? "error" : ""}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    ?multiple="${this.multiple}"
                    @change="${this.handleChange}"
                >
                    ${this.multiple ? "" : L`<option value="">${this.placeholder}</option>`}
                    ${this.options.map((t) => L`
                        <option 
                            value="${t.value}"
                            ?selected="${this.multiple ? this.selectedValues.includes(t.value) : this.value === t.value}"
                        >
                            ${t.label}
                        </option>
                    `)}
                </select>
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

        select.mat-mdc-input-element {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid var(--uiv-border);
            border-radius: 8px;
            font-size: 14px;
            background-color: var(--uiv-bg);
            color: var(--uiv-text);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            min-height: 40px;
            cursor: pointer;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        select.mat-mdc-input-element:hover {
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
        }

        select.mat-mdc-input-element:focus {
            outline: none;
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
            transform: translateY(-1px);
        }

        .custom-dropdown {
            position: relative;
        }

        .dropdown-button {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid var(--uiv-border);
            border-radius: 8px;
            font-size: 14px;
            background-color: var(--uiv-bg);
            color: var(--uiv-text);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            min-height: 40px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        .dropdown-button:hover:not(:disabled) {
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
        }

        .dropdown-button:focus {
            outline: none;
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
            transform: translateY(-1px);
        }

        .dropdown-options {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--uiv-bg);
            border: 1px solid var(--uiv-border);
            border-radius: 8px;
            margin-top: 8px;
            max-height: 250px;
            overflow-y: auto;
            z-index: 1000;
            box-shadow: var(--uiv-shadow-depth, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
            animation: dropdownSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes dropdownSlide {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .option-item {
            padding: 10px 16px;
            cursor: pointer;
            transition: all 0.2s;
            border-bottom: 1px solid rgba(var(--uiv-primary-rgb, 108, 99, 255), 0.05);
            color: var(--uiv-text);
        }

        .option-item:last-child {
            border-bottom: none;
        }

        .option-item:hover {
            background-color: rgba(var(--uiv-primary-rgb, 108, 99, 255), 0.05);
            color: var(--uiv-primary);
            padding-left: 20px;
        }

        .option-item.selected {
            background-color: var(--uiv-primary);
            color: white;
        }

        .tag {
            background: var(--uiv-primary);
            color: white;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 6px;
            box-shadow: var(--uiv-border-glow);
        }
        .tag-remove {
            cursor: pointer;
            font-weight: bold;
        }
    `;
R([
  D({ type: String }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Selected Value",
    fieldMappings: "value"
  })
], P.prototype, "value", 2);
R([
  D({ type: Array }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Selected Values (Multi)",
    fieldMappings: "selectedValues"
  })
], P.prototype, "selectedValues", 2);
R([
  D({ type: String }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], P.prototype, "label", 2);
R([
  D({ type: String }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], P.prototype, "placeholder", 2);
R([
  D({ type: Array }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: N.DROPDOWN,
    displayLabel: "Options",
    optionItems: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" }
    ],
    fieldMappings: "options"
  })
], P.prototype, "options", 2);
R([
  D({ type: Boolean }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], P.prototype, "required", 2);
R([
  D({ type: Boolean }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], P.prototype, "disabled", 2);
R([
  D({ type: Boolean }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Multiple Selection",
    fieldMappings: "multiple"
  })
], P.prototype, "multiple", 2);
R([
  D({ type: Boolean }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Searchable",
    fieldMappings: "searchable"
  })
], P.prototype, "searchable", 2);
R([
  D({ type: Boolean }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Custom Style",
    fieldMappings: "customStyle"
  })
], P.prototype, "customStyle", 2);
R([
  D({ type: String }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], P.prototype, "errorMessage", 2);
R([
  D({ type: Boolean }),
  U({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
], P.prototype, "showError", 2);
R([
  D({ type: Boolean })
], P.prototype, "isOpen", 2);
R([
  D({ type: String })
], P.prototype, "searchQuery", 2);
R([
  U({
    attributeType: k.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], P.prototype, "handleChange", 1);
P = R([
  zt({
    name: "zero-dropdown",
    version: "1.0.0",
    title: "Dropdown",
    elementSelector: "zero-dropdown",
    group: "Form Controls",
    iconName: "dropdown-icon.png"
  }),
  Bt()
], P);
export {
  P as ZeroDropdown,
  nt as studioTemplate
};
