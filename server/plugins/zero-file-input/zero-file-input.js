var Lt = Object.defineProperty;
var It = (t, e, r) => e in t ? Lt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Ve = (t, e, r) => It(t, typeof e != "symbol" ? e + "" : e, r);
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
var Ge;
(function(t) {
  (function(e) {
    var r = typeof globalThis == "object" ? globalThis : typeof qe == "object" ? qe : typeof self == "object" ? self : typeof this == "object" ? this : g(), i = s(t);
    typeof r.Reflect < "u" && (i = s(r.Reflect, i)), e(i, r), typeof r.Reflect > "u" && (r.Reflect = t);
    function s(v, E) {
      return function(w, $) {
        Object.defineProperty(v, w, { configurable: !0, writable: !0, value: $ }), E && E(w, $);
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
    function g() {
      return u() || l();
    }
  })(function(e, r) {
    var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", u = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, E = !g && !v, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return ge(/* @__PURE__ */ Object.create(null));
      } : v ? function() {
        return ge({ __proto__: null });
      } : function() {
        return ge({});
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
    }, $ = Object.getPrototypeOf(Function), U = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Dt(), F = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Nt(), z = typeof WeakMap == "function" ? WeakMap : Ut(), Y = s ? Symbol.for("@reflect-metadata:registry") : void 0, le = Mt(), Ce = Rt(le);
    function pt(n, o, a, d) {
      if (m(a)) {
        if (!Ue(n))
          throw new TypeError();
        if (!Fe(o))
          throw new TypeError();
        return Et(n, o);
      } else {
        if (!Ue(n))
          throw new TypeError();
        if (!R(o))
          throw new TypeError();
        if (!R(d) && !m(d) && !X(d))
          throw new TypeError();
        return X(d) && (d = void 0), a = I(a), Tt(n, o, a, d);
      }
    }
    e("decorate", pt);
    function ft(n, o) {
      function a(d, y) {
        if (!R(d))
          throw new TypeError();
        if (!m(y) && !St(y))
          throw new TypeError();
        Me(n, o, d, y);
      }
      return a;
    }
    e("metadata", ft);
    function vt(n, o, a, d) {
      if (!R(a))
        throw new TypeError();
      return m(d) || (d = I(d)), Me(n, o, a, d);
    }
    e("defineMetadata", vt);
    function yt(n, o, a) {
      if (!R(o))
        throw new TypeError();
      return m(a) || (a = I(a)), Ae(n, o, a);
    }
    e("hasMetadata", yt);
    function gt(n, o, a) {
      if (!R(o))
        throw new TypeError();
      return m(a) || (a = I(a)), fe(n, o, a);
    }
    e("hasOwnMetadata", gt);
    function mt(n, o, a) {
      if (!R(o))
        throw new TypeError();
      return m(a) || (a = I(a)), Se(n, o, a);
    }
    e("getMetadata", mt);
    function bt(n, o, a) {
      if (!R(o))
        throw new TypeError();
      return m(a) || (a = I(a)), Oe(n, o, a);
    }
    e("getOwnMetadata", bt);
    function _t(n, o) {
      if (!R(n))
        throw new TypeError();
      return m(o) || (o = I(o)), Re(n, o);
    }
    e("getMetadataKeys", _t);
    function $t(n, o) {
      if (!R(n))
        throw new TypeError();
      return m(o) || (o = I(o)), ke(n, o);
    }
    e("getOwnMetadataKeys", $t);
    function wt(n, o, a) {
      if (!R(o))
        throw new TypeError();
      if (m(a) || (a = I(a)), !R(o))
        throw new TypeError();
      m(a) || (a = I(a));
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : d.OrdinaryDeleteMetadata(n, o, a);
    }
    e("deleteMetadata", wt);
    function Et(n, o) {
      for (var a = n.length - 1; a >= 0; --a) {
        var d = n[a], y = d(o);
        if (!m(y) && !X(y)) {
          if (!Fe(y))
            throw new TypeError();
          o = y;
        }
      }
      return o;
    }
    function Tt(n, o, a, d) {
      for (var y = n.length - 1; y >= 0; --y) {
        var D = n[y], k = D(o, a, d);
        if (!m(k) && !X(k)) {
          if (!R(k))
            throw new TypeError();
          d = k;
        }
      }
      return d;
    }
    function Ae(n, o, a) {
      var d = fe(n, o, a);
      if (d)
        return !0;
      var y = ye(o);
      return X(y) ? !1 : Ae(n, y, a);
    }
    function fe(n, o, a) {
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : Ne(d.OrdinaryHasOwnMetadata(n, o, a));
    }
    function Se(n, o, a) {
      var d = fe(n, o, a);
      if (d)
        return Oe(n, o, a);
      var y = ye(o);
      if (!X(y))
        return Se(n, y, a);
    }
    function Oe(n, o, a) {
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(d))
        return d.OrdinaryGetOwnMetadata(n, o, a);
    }
    function Me(n, o, a, d) {
      var y = Q(
        a,
        d,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(n, o, a, d);
    }
    function Re(n, o) {
      var a = ke(n, o), d = ye(n);
      if (d === null)
        return a;
      var y = Re(d, o);
      if (y.length <= 0)
        return a;
      if (a.length <= 0)
        return y;
      for (var D = new F(), k = [], b = 0, h = a; b < h.length; b++) {
        var c = h[b], p = D.has(c);
        p || (D.add(c), k.push(c));
      }
      for (var f = 0, _ = y; f < _.length; f++) {
        var c = _[f], p = D.has(c);
        p || (D.add(c), k.push(c));
      }
      return k;
    }
    function ke(n, o) {
      var a = Q(
        n,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(n, o) : [];
    }
    function De(n) {
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
    function m(n) {
      return n === void 0;
    }
    function X(n) {
      return n === null;
    }
    function Pt(n) {
      return typeof n == "symbol";
    }
    function R(n) {
      return typeof n == "object" ? n !== null : typeof n == "function";
    }
    function xt(n, o) {
      switch (De(n)) {
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
      var a = "string", d = He(n, u);
      if (d !== void 0) {
        var y = d.call(n, a);
        if (R(y))
          throw new TypeError();
        return y;
      }
      return Ct(n);
    }
    function Ct(n, o) {
      var a, d;
      {
        var y = n.toString;
        if (ue(y)) {
          var d = y.call(n);
          if (!R(d))
            return d;
        }
        var a = n.valueOf;
        if (ue(a)) {
          var d = a.call(n);
          if (!R(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ne(n) {
      return !!n;
    }
    function At(n) {
      return "" + n;
    }
    function I(n) {
      var o = xt(n);
      return Pt(o) ? o : At(o);
    }
    function Ue(n) {
      return Array.isArray ? Array.isArray(n) : n instanceof Object ? n instanceof Array : Object.prototype.toString.call(n) === "[object Array]";
    }
    function ue(n) {
      return typeof n == "function";
    }
    function Fe(n) {
      return typeof n == "function";
    }
    function St(n) {
      switch (De(n)) {
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
    function Le(n) {
      var o = He(n, l);
      if (!ue(o))
        throw new TypeError();
      var a = o.call(n);
      if (!R(a))
        throw new TypeError();
      return a;
    }
    function Ie(n) {
      return n.value;
    }
    function ze(n) {
      var o = n.next();
      return o.done ? !1 : o;
    }
    function je(n) {
      var o = n.return;
      o && o.call(n);
    }
    function ye(n) {
      var o = Object.getPrototypeOf(n);
      if (typeof n != "function" || n === $ || o !== $)
        return o;
      var a = n.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return o;
      var y = d.constructor;
      return typeof y != "function" || y === n ? o : y;
    }
    function Ot() {
      var n;
      !m(Y) && typeof r.Reflect < "u" && !(Y in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (n = kt(r.Reflect));
      var o, a, d, y = new z(), D = {
        registerProvider: k,
        getProvider: h,
        setProvider: p
      };
      return D;
      function k(f) {
        if (!Object.isExtensible(D))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case n === f:
            break;
          case m(o):
            o = f;
            break;
          case o === f:
            break;
          case m(a):
            a = f;
            break;
          case a === f:
            break;
          default:
            d === void 0 && (d = new F()), d.add(f);
            break;
        }
      }
      function b(f, _) {
        if (!m(o)) {
          if (o.isProviderFor(f, _))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(f, _))
              return o;
            if (!m(d))
              for (var x = Le(d); ; ) {
                var O = ze(x);
                if (!O)
                  return;
                var H = Ie(O);
                if (H.isProviderFor(f, _))
                  return je(x), H;
              }
          }
        }
        if (!m(n) && n.isProviderFor(f, _))
          return n;
      }
      function h(f, _) {
        var x = y.get(f), O;
        return m(x) || (O = x.get(_)), m(O) && (O = b(f, _), m(O) || (m(x) && (x = new U(), y.set(f, x)), x.set(_, O))), O;
      }
      function c(f) {
        if (m(f))
          throw new TypeError();
        return o === f || a === f || !m(d) && d.has(f);
      }
      function p(f, _, x) {
        if (!c(x))
          throw new Error("Metadata provider not registered.");
        var O = h(f, _);
        if (O !== x) {
          if (!m(O))
            return !1;
          var H = y.get(f);
          m(H) && (H = new U(), y.set(f, H)), H.set(_, x);
        }
        return !0;
      }
    }
    function Mt() {
      var n;
      return !m(Y) && R(r.Reflect) && Object.isExtensible(r.Reflect) && (n = r.Reflect[Y]), m(n) && (n = Ot()), !m(Y) && R(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, Y, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: n
      }), n;
    }
    function Rt(n) {
      var o = new z(), a = {
        isProviderFor: function(c, p) {
          var f = o.get(c);
          return m(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: k,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: D,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: h
      };
      return le.registerProvider(a), a;
      function d(c, p, f) {
        var _ = o.get(c), x = !1;
        if (m(_)) {
          if (!f)
            return;
          _ = new U(), o.set(c, _), x = !0;
        }
        var O = _.get(p);
        if (m(O)) {
          if (!f)
            return;
          if (O = new U(), _.set(p, O), !n.setProvider(c, p, a))
            throw _.delete(p), x && o.delete(c), new Error("Wrong provider for target.");
        }
        return O;
      }
      function y(c, p, f) {
        var _ = d(
          p,
          f,
          /*Create*/
          !1
        );
        return m(_) ? !1 : Ne(_.has(c));
      }
      function D(c, p, f) {
        var _ = d(
          p,
          f,
          /*Create*/
          !1
        );
        if (!m(_))
          return _.get(c);
      }
      function k(c, p, f, _) {
        var x = d(
          f,
          _,
          /*Create*/
          !0
        );
        x.set(c, p);
      }
      function b(c, p) {
        var f = [], _ = d(
          c,
          p,
          /*Create*/
          !1
        );
        if (m(_))
          return f;
        for (var x = _.keys(), O = Le(x), H = 0; ; ) {
          var Be = ze(O);
          if (!Be)
            return f.length = H, f;
          var Ft = Ie(Be);
          try {
            f[H] = Ft;
          } catch (Ht) {
            try {
              je(O);
            } finally {
              throw Ht;
            }
          }
          H++;
        }
      }
      function h(c, p, f) {
        var _ = d(
          p,
          f,
          /*Create*/
          !1
        );
        if (m(_) || !_.delete(c))
          return !1;
        if (_.size === 0) {
          var x = o.get(p);
          m(x) || (x.delete(f), x.size === 0 && o.delete(x));
        }
        return !0;
      }
    }
    function kt(n) {
      var o = n.defineMetadata, a = n.hasOwnMetadata, d = n.getOwnMetadata, y = n.getOwnMetadataKeys, D = n.deleteMetadata, k = new z(), b = {
        isProviderFor: function(h, c) {
          var p = k.get(h);
          return !m(p) && p.has(c) ? !0 : y(h, c).length ? (m(p) && (p = new F(), k.set(h, p)), p.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: D
      };
      return b;
    }
    function Q(n, o, a) {
      var d = le.getProvider(n, o);
      if (!m(d))
        return d;
      if (a) {
        if (le.setProvider(n, o, Ce))
          return Ce;
        throw new Error("Illegal state.");
      }
    }
    function Dt() {
      var n = {}, o = [], a = (
        /** @class */
        function() {
          function b(h, c, p) {
            this._index = 0, this._keys = h, this._values = c, this._selector = p;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[l] = function() {
            return this;
          }, b.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var c = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, b.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
          }, b;
        }()
      ), d = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = n, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, b.prototype.set = function(h, c) {
            var p = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[p] = c, this;
          }, b.prototype.delete = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var p = this._keys.length, f = c + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, ve(h, this._cacheKey) && (this._cacheKey = n, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = n, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, y);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, D);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, k);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[l] = function() {
            return this.entries();
          }, b.prototype._find = function(h, c) {
            if (!ve(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (ve(this._keys[p], h)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return d;
      function y(b, h) {
        return b;
      }
      function D(b, h) {
        return h;
      }
      function k(b, h) {
        return [b, h];
      }
    }
    function Nt() {
      var n = (
        /** @class */
        function() {
          function o() {
            this._map = new U();
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
          }, o.prototype[l] = function() {
            return this.keys();
          }, o;
        }()
      );
      return n;
    }
    function Ut() {
      var n = 16, o = w.create(), a = d();
      return (
        /** @class */
        function() {
          function h() {
            this._key = d();
          }
          return h.prototype.has = function(c) {
            var p = y(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? w.has(p, this._key) : !1;
          }, h.prototype.get = function(c) {
            var p = y(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? w.get(p, this._key) : void 0;
          }, h.prototype.set = function(c, p) {
            var f = y(
              c,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
          }, h.prototype.delete = function(c) {
            var p = y(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = d();
          }, h;
        }()
      );
      function d() {
        var h;
        do
          h = "@@WeakMap@@" + b();
        while (w.has(o, h));
        return o[h] = !0, h;
      }
      function y(h, c) {
        if (!i.call(h, a)) {
          if (!c)
            return;
          Object.defineProperty(h, a, { value: w.create() });
        }
        return h[a];
      }
      function D(h, c) {
        for (var p = 0; p < c; ++p)
          h[p] = Math.random() * 255 | 0;
        return h;
      }
      function k(h) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : D(c, h), c;
        }
        return D(new Array(h), h);
      }
      function b() {
        var h = k(n);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var c = "", p = 0; p < n; ++p) {
          var f = h[p];
          (p === 4 || p === 6 || p === 8) && (c += "-"), f < 16 && (c += "0"), c += f.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function ge(n) {
      return n.__ = void 0, delete n.__, n;
    }
  });
})(Ge || (Ge = {}));
function zt(t) {
  return typeof t.name == "string" && typeof t.version == "string" && typeof t.title == "string" && typeof t.elementSelector == "string" && typeof t.group == "string" && typeof t.iconName == "string";
}
function jt(t) {
  return function(e) {
    if (zt(t)) {
      const r = {
        version: t.version,
        name: t.name,
        title: t.title,
        selector: t.elementSelector,
        category: t.group,
        icon: t.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", r, e.prototype), globalThis.customElements) {
        const i = `${t.elementSelector}-${t.version}`;
        if (!customElements.get(i))
          try {
            customElements.define(i, e);
          } catch {
            try {
              customElements.define(i, class extends e {
              });
            } catch (u) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, u);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: r
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Bt(t) {
  return jt(t);
}
function Vt(t) {
  return function(e) {
    class r extends e {
      constructor() {
        super(...arguments);
        Ve(this, "_stylesApplied", !1);
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
        var E;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, v = this.shadowRoot;
        if (!v) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && g) {
          const w = new CSSStyleSheet(), $ = (E = u.sheet) == null ? void 0 : E.cssRules;
          $ && (Array.from($).forEach((U) => w.insertRule(U.cssText)), v.adoptedStyleSheets = [...v.adoptedStyleSheets, w]);
        } else if (u) {
          const w = u.cloneNode(!0);
          v.appendChild(w);
        }
        l.forEach((w) => {
          const $ = w.cloneNode(!0);
          v.appendChild($);
        });
      }
    }
    return r;
  };
}
function qt(t) {
  var r;
  if (((r = t == null ? void 0 : t.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Gt(t) {
  return function(e, r) {
    try {
      qt(t);
      const i = Reflect.getMetadata("ZeroAttribute", e) || [];
      let s = !0;
      if (typeof r == "string") {
        try {
          s = typeof e[r] != "function";
        } catch {
          s = !0;
        }
        s && (t.fieldMappings = t.fieldMappings ?? r);
      }
      i.push(t), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function S(t) {
  return Gt(t);
}
var A;
(function(t) {
  t.TEXT_INPUT = "text-input", t.PASSWORD_INPUT = "password-input", t.DROPDOWN = "dropdown", t.CHECKBOX = "checkbox", t.RADIO_BUTTON = "radio-button", t.RANGE_SLIDER = "range-slider", t.FILE_INPUT = "file-input", t.DATE_PICKER = "date-picker", t.COLOR_PICKER = "color-picker", t.NUMBER_INPUT = "number-input", t.TEXTAREA = "textarea", t.MULTI_SELECT = "multi-select", t.POPUP_DROPDOWN = "popup-dropdown", t.LAYOUT_PICKER = "layout-picker", t.RESPONSIVE_OVERRIDE = "responsive-override", t.IMAGE_PICKER = "image-picker";
})(A || (A = {}));
var C;
(function(t) {
  t.PROPERTY = "property", t.EVENT = "event", t.ACTION = "action";
})(C || (C = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de = globalThis, we = de.ShadowRoot && (de.ShadyCSS === void 0 || de.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), We = /* @__PURE__ */ new WeakMap();
let lt = class {
  constructor(e, r, i) {
    if (this._$cssResult$ = !0, i !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (we && e === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (e = We.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && We.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Wt = (t) => new lt(typeof t == "string" ? t : t + "", void 0, Ee), Yt = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((i, s, u) => i + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + t[u + 1], t[0]);
  return new lt(r, t, Ee);
}, Xt = (t, e) => {
  if (we) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const i = document.createElement("style"), s = de.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = r.cssText, t.appendChild(i);
  }
}, Ye = we ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const i of e.cssRules) r += i.cssText;
  return Wt(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zt, defineProperty: Jt, getOwnPropertyDescriptor: Kt, getOwnPropertyNames: Qt, getOwnPropertySymbols: er, getPrototypeOf: tr } = Object, B = globalThis, Xe = B.trustedTypes, rr = Xe ? Xe.emptyScript : "", me = B.reactiveElementPolyfillSupport, te = (t, e) => t, he = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? rr : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let r = t;
  switch (e) {
    case Boolean:
      r = t !== null;
      break;
    case Number:
      r = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(t);
      } catch {
        r = null;
      }
  }
  return r;
} }, Te = (t, e) => !Zt(t, e), Ze = { attribute: !0, type: String, converter: he, reflect: !1, useDefault: !1, hasChanged: Te };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = Ze) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, r);
      s !== void 0 && Jt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, r, i) {
    const { get: s, set: u } = Kt(this.prototype, e) ?? { get() {
      return this[r];
    }, set(l) {
      this[r] = l;
    } };
    return { get: s, set(l) {
      const g = s == null ? void 0 : s.call(this);
      u == null || u.call(this, l), this.requestUpdate(e, g, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(te("elementProperties"))) return;
    const e = tr(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(te("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(te("properties"))) {
      const r = this.properties, i = [...Qt(r), ...er(r)];
      for (const s of i) this.createProperty(s, r[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [i, s] of r) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, i] of this.elementProperties) {
      const s = this._$Eu(r, i);
      s !== void 0 && this._$Eh.set(s, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const s of i) r.unshift(Ye(s));
    } else e !== void 0 && r.push(Ye(e));
    return r;
  }
  static _$Eu(e, r) {
    const i = r.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((r) => r(this));
  }
  addController(e) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((r = e.hostConnected) == null || r.call(e));
  }
  removeController(e) {
    var r;
    (r = this._$EO) == null || r.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const i of r.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Xt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((r) => {
      var i;
      return (i = r.hostConnected) == null ? void 0 : i.call(r);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var i;
      return (i = r.hostDisconnected) == null ? void 0 : i.call(r);
    });
  }
  attributeChangedCallback(e, r, i) {
    this._$AK(e, i);
  }
  _$ET(e, r) {
    var u;
    const i = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, i);
    if (s !== void 0 && i.reflect === !0) {
      const l = (((u = i.converter) == null ? void 0 : u.toAttribute) !== void 0 ? i.converter : he).toAttribute(r, i.type);
      this._$Em = e, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var u, l;
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const g = i.getPropertyOptions(s), v = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((u = g.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? g.converter : he;
      this._$Em = s;
      const E = v.fromAttribute(r, g.type);
      this[s] = E ?? ((l = this._$Ej) == null ? void 0 : l.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, r, i, s = !1, u) {
    var l;
    if (e !== void 0) {
      const g = this.constructor;
      if (s === !1 && (u = this[e]), i ?? (i = g.getPropertyOptions(e)), !((i.hasChanged ?? Te)(u, r) || i.useDefault && i.reflect && u === ((l = this._$Ej) == null ? void 0 : l.get(e)) && !this.hasAttribute(g._$Eu(e, i)))) return;
      this.C(e, r, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: i, reflect: s, wrapped: u }, l) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, l ?? r ?? this[e]), u !== !0 || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (r = void 0), this._$AL.set(e, r)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
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
        for (const [u, l] of this._$Ep) this[u] = l;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [u, l] of s) {
        const { wrapped: g } = l, v = this[u];
        g !== !0 || this._$AL.has(u) || v === void 0 || this.C(u, void 0, l, v);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (i = this._$EO) == null || i.forEach((s) => {
        var u;
        return (u = s.hostUpdate) == null ? void 0 : u.call(s);
      }), this.update(r)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$EO) == null || r.forEach((i) => {
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[te("elementProperties")] = /* @__PURE__ */ new Map(), Z[te("finalized")] = /* @__PURE__ */ new Map(), me == null || me({ ReactiveElement: Z }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re = globalThis, Je = (t) => t, ce = re.trustedTypes, Ke = ce ? ce.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, ut = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, dt = "?" + j, ir = `<${dt}>`, W = document, ne = () => W.createComment(""), se = (t) => t === null || typeof t != "object" && typeof t != "function", Pe = Array.isArray, nr = (t) => Pe(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", be = `[ 	
\f\r]`, ee = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, et = />/g, V = RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), tt = /'/g, rt = /"/g, ht = /^(?:script|style|textarea|title)$/i, sr = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), L = sr(1), J = Symbol.for("lit-noChange"), N = Symbol.for("lit-nothing"), it = /* @__PURE__ */ new WeakMap(), q = W.createTreeWalker(W, 129);
function ct(t, e) {
  if (!Pe(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ke !== void 0 ? Ke.createHTML(e) : e;
}
const or = (t, e) => {
  const r = t.length - 1, i = [];
  let s, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = ee;
  for (let g = 0; g < r; g++) {
    const v = t[g];
    let E, w, $ = -1, U = 0;
    for (; U < v.length && (l.lastIndex = U, w = l.exec(v), w !== null); ) U = l.lastIndex, l === ee ? w[1] === "!--" ? l = Qe : w[1] !== void 0 ? l = et : w[2] !== void 0 ? (ht.test(w[2]) && (s = RegExp("</" + w[2], "g")), l = V) : w[3] !== void 0 && (l = V) : l === V ? w[0] === ">" ? (l = s ?? ee, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = l.lastIndex - w[2].length, E = w[1], l = w[3] === void 0 ? V : w[3] === '"' ? rt : tt) : l === rt || l === tt ? l = V : l === Qe || l === et ? l = ee : (l = V, s = void 0);
    const F = l === V && t[g + 1].startsWith("/>") ? " " : "";
    u += l === ee ? v + ir : $ >= 0 ? (i.push(E), v.slice(0, $) + ut + v.slice($) + j + F) : v + j + ($ === -2 ? g : F);
  }
  return [ct(t, u + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class oe {
  constructor({ strings: e, _$litType$: r }, i) {
    let s;
    this.parts = [];
    let u = 0, l = 0;
    const g = e.length - 1, v = this.parts, [E, w] = or(e, r);
    if (this.el = oe.createElement(E, i), q.currentNode = this.el.content, r === 2 || r === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = q.nextNode()) !== null && v.length < g; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(ut)) {
          const U = w[l++], F = s.getAttribute($).split(j), z = /([.?@])?(.*)/.exec(U);
          v.push({ type: 1, index: u, name: z[2], strings: F, ctor: z[1] === "." ? lr : z[1] === "?" ? ur : z[1] === "@" ? dr : pe }), s.removeAttribute($);
        } else $.startsWith(j) && (v.push({ type: 6, index: u }), s.removeAttribute($));
        if (ht.test(s.tagName)) {
          const $ = s.textContent.split(j), U = $.length - 1;
          if (U > 0) {
            s.textContent = ce ? ce.emptyScript : "";
            for (let F = 0; F < U; F++) s.append($[F], ne()), q.nextNode(), v.push({ type: 2, index: ++u });
            s.append($[U], ne());
          }
        }
      } else if (s.nodeType === 8) if (s.data === dt) v.push({ type: 2, index: u });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(j, $ + 1)) !== -1; ) v.push({ type: 7, index: u }), $ += j.length - 1;
      }
      u++;
    }
  }
  static createElement(e, r) {
    const i = W.createElement("template");
    return i.innerHTML = e, i;
  }
}
function K(t, e, r = t, i) {
  var l, g;
  if (e === J) return e;
  let s = i !== void 0 ? (l = r._$Co) == null ? void 0 : l[i] : r._$Cl;
  const u = se(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== u && ((g = s == null ? void 0 : s._$AO) == null || g.call(s, !1), u === void 0 ? s = void 0 : (s = new u(t), s._$AT(t, r, i)), i !== void 0 ? (r._$Co ?? (r._$Co = []))[i] = s : r._$Cl = s), s !== void 0 && (e = K(t, s._$AS(t, e.values), s, i)), e;
}
class ar {
  constructor(e, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: r }, parts: i } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? W).importNode(r, !0);
    q.currentNode = s;
    let u = q.nextNode(), l = 0, g = 0, v = i[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let E;
        v.type === 2 ? E = new ae(u, u.nextSibling, this, e) : v.type === 1 ? E = new v.ctor(u, v.name, v.strings, this, e) : v.type === 6 && (E = new hr(u, this, e)), this._$AV.push(E), v = i[++g];
      }
      l !== (v == null ? void 0 : v.index) && (u = q.nextNode(), l++);
    }
    return q.currentNode = W, s;
  }
  p(e) {
    let r = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, r), r += i.strings.length - 2) : i._$AI(e[r])), r++;
  }
}
class ae {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, i, s) {
    this.type = 2, this._$AH = N, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = r.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, r = this) {
    e = K(this, e, r), se(e) ? e === N || e == null || e === "" ? (this._$AH !== N && this._$AR(), this._$AH = N) : e !== this._$AH && e !== J && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== N && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: r, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = oe.createElement(ct(i.h, i.h[0]), this.options)), i);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === s) this._$AH.p(r);
    else {
      const l = new ar(s, this), g = l.u(this.options);
      l.p(r), this.T(g), this._$AH = l;
    }
  }
  _$AC(e) {
    let r = it.get(e.strings);
    return r === void 0 && it.set(e.strings, r = new oe(e)), r;
  }
  k(e) {
    Pe(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let i, s = 0;
    for (const u of e) s === r.length ? r.push(i = new ae(this.O(ne()), this.O(ne()), this, this.options)) : i = r[s], i._$AI(u), s++;
    s < r.length && (this._$AR(i && i._$AB.nextSibling, s), r.length = s);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); e !== this._$AB; ) {
      const s = Je(e).nextSibling;
      Je(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cv = e, (r = this._$AP) == null || r.call(this, e));
  }
}
class pe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, i, s, u) {
    this.type = 1, this._$AH = N, this._$AN = void 0, this.element = e, this.name = r, this._$AM = s, this.options = u, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = N;
  }
  _$AI(e, r = this, i, s) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = K(this, e, r, 0), l = !se(e) || e !== this._$AH && e !== J, l && (this._$AH = e);
    else {
      const g = e;
      let v, E;
      for (e = u[0], v = 0; v < u.length - 1; v++) E = K(this, g[i + v], r, v), E === J && (E = this._$AH[v]), l || (l = !se(E) || E !== this._$AH[v]), E === N ? e = N : e !== N && (e += (E ?? "") + u[v + 1]), this._$AH[v] = E;
    }
    l && !s && this.j(e);
  }
  j(e) {
    e === N ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class lr extends pe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === N ? void 0 : e;
  }
}
class ur extends pe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== N);
  }
}
class dr extends pe {
  constructor(e, r, i, s, u) {
    super(e, r, i, s, u), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = K(this, e, r, 0) ?? N) === J) return;
    const i = this._$AH, s = e === N && i !== N || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, u = e !== N && (i === N || s);
    s && this.element.removeEventListener(this.name, this, i), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class hr {
  constructor(e, r, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    K(this, e);
  }
}
const _e = re.litHtmlPolyfillSupport;
_e == null || _e(oe, ae), (re.litHtmlVersions ?? (re.litHtmlVersions = [])).push("3.3.3");
const cr = (t, e, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const u = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = s = new ae(e.insertBefore(ne(), u), u, void 0, r ?? {});
  }
  return s._$AI(t), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class ie extends Z {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const e = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = e.firstChild), e;
  }
  update(e) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = cr(r, this.renderRoot, this.renderOptions);
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
    return J;
  }
}
var at;
ie._$litElement$ = !0, ie.finalized = !0, (at = G.litElementHydrateSupport) == null || at.call(G, { LitElement: ie });
const $e = G.litElementPolyfillSupport;
$e == null || $e({ LitElement: ie });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pr = (t) => (e, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fr = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Te }, vr = (t = fr, e, r) => {
  const { kind: i, metadata: s } = r;
  let u = globalThis.litPropertyMetadata.get(s);
  if (u === void 0 && globalThis.litPropertyMetadata.set(s, u = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), u.set(r.name, t), i === "accessor") {
    const { name: l } = r;
    return { set(g) {
      const v = e.get.call(this);
      e.set.call(this, g), this.requestUpdate(l, v, t, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(l, void 0, t, g), g;
    } };
  }
  if (i === "setter") {
    const { name: l } = r;
    return function(g) {
      const v = this[l];
      e.call(this, g), this.requestUpdate(l, v, t, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function M(t) {
  return (e, r) => typeof r == "object" ? vr(t, e, r) : ((i, s, u) => {
    const l = s.hasOwnProperty(u);
    return s.constructor.createProperty(u, i), l ? Object.getOwnPropertyDescriptor(s, u) : void 0;
  })(t, e, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function xe(t) {
  return M({ ...t, state: !0, attribute: !1 });
}
var yr = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, P = (t, e, r, i) => {
  for (var s = i > 1 ? void 0 : i ? gr(e, r) : e, u = t.length - 1, l; u >= 0; u--)
    (l = t[u]) && (s = (i ? l(e, r, s) : l(s)) || s);
  return i && s && yr(e, r, s), s;
};
const nt = () => window.zeroThemeManager, st = {
  kind: "generic",
  templateHtml: [
    "<div style='padding:20px;border-radius:12px;border:2px dashed rgba(148,163,184,0.3);background:rgba(255,255,255,0.95);text-align:center;'>",
    "<div style='font-size:0.7rem;color:var(--uiv-text-muted,#94a3b8);font-weight:600;margin-bottom:8px;'>{{display:label}}</div>",
    "<div style='font-size:1.5rem;margin-bottom:6px;'>📁</div>",
    "<div style='font-size:0.75rem;color:var(--uiv-text-color,#64748b);'>{{display:placeholder}}</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "File Upload"]
};
function ot(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let T = class extends ie {
  constructor() {
    super(...arguments), this.label = "", this.placeholder = "Choose files or drag and drop", this.helpText = "", this.errorMessage = "", this.required = !1, this.disabled = !1, this.multiple = !1, this.showPreview = !0, this.showProgress = !1, this.dragDrop = !0, this.accept = "", this.maxFileSize = 10, this.maxFiles = 10, this.width = "100%", this.height = "auto", this.dropZoneHeight = "120px", this.borderRadius = "4px", this.primaryColor = "#1976d2", this.errorColor = "#f44336", this.successColor = "#4caf50", this.files = [], this.isDragOver = !1, this.hasError = !1;
  }
  static getStudioTemplate(t) {
    if (!t) return st;
    const e = ot(t.studio.display.label || "File Input"), r = ot(t.studio.display.placeholder || "Choose files or drag and drop");
    return {
      ...st,
      templateHtml: [
        "<div style='padding:20px;border-radius:12px;border:2px dashed var(--uiv-border-color, rgba(148,163,184,0.3));background:var(--uiv-surface-color, #fff);text-align:center;'>",
        `<div style='font-size:0.7rem;color:var(--uiv-text-muted, #94a3b8);font-weight:600;margin-bottom:8px;'>${e}</div>`,
        "<div style='font-size:1.5rem;margin-bottom:6px;'>📁</div>",
        `<div style='font-size:0.75rem;color:var(--uiv-text-color, #1e293b);'>${r}</div>`,
        "</div>"
      ].join("")
    };
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = nt()) == null || t.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const t = (e = nt()) == null ? void 0 : e.getActiveTheme("zero-standard-themes");
    return L`
      <style>
        ${t ? t.getGlobalStyles() : ""}
        ${t ? t.getComponentStyles("file-input") : ""}
      </style>
      <div class="form-field uiv-${t == null ? void 0 : t.id}-theme" style="width: ${this.width}">
        ${this.label ? L`
          <label class="form-field-label uiv-${t == null ? void 0 : t.id}-text ${this.required ? "required" : ""}">
            ${this.label}
          </label>
        ` : ""}
        <div 
          class="file-input-container uiv-${t == null ? void 0 : t.id}-scan ${this.isDragOver ? "drag-over" : ""} ${this.disabled ? "disabled" : ""} ${this.hasError ? "error" : ""}"
          @dragover=${this.handleDragOver}
          @dragleave=${this.handleDragLeave}
          @drop=${this.handleDrop}
          @click=${this.handleClick}
        >
          <input
            class="file-input"
            type="file"
            ?multiple=${this.multiple}
            ?disabled=${this.disabled}
            accept=${this.accept}
            @change=${this.handleFileSelect}
            @click=${this.handleInputStopPropagation}
          />
          
          <div class="drop-zone">
            <svg class="upload-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            <div class="upload-text uiv-${t == null ? void 0 : t.id}-text">${this.placeholder}</div>
            <div class="upload-subtext uiv-${t == null ? void 0 : t.id}-text">
              ${this.accept ? `Supported: ${this.accept}` : "All file types supported"} 
              ${this.maxFileSize ? `• Max ${this.maxFileSize}MB` : ""}
            </div>
            ${this.dragDrop ? "" : L`
              <button type="button" class="browse-button uiv-${t == null ? void 0 : t.id}-card" @click=${this.handleBrowseClick}>
                Browse Files
              </button>
            `}
          </div>
        </div>

        ${this.files.length > 0 && this.showPreview ? L`
          <div class="file-list">
            ${this.files.map((r) => L`
              <div class="file-item uiv-${t == null ? void 0 : t.id}-card">
                <div class="file-preview uiv-${t == null ? void 0 : t.id}-card">
                  ${this.isImageFile(r.file) ? L`
                    <img src=${URL.createObjectURL(r.file)} alt=${r.file.name} />
                  ` : L`
                    ${this.getFileExtension(r.file.name)}
                  `}
                </div>
                <div class="file-info">
                  <div class="file-name uiv-${t == null ? void 0 : t.id}-text">${r.file.name}</div>
                  <div class="file-size uiv-${t == null ? void 0 : t.id}-text" style="opacity: 0.7">${this.formatFileSize(r.file.size)}</div>
                  ${this.showProgress && r.progress !== void 0 ? L`
                    <div class="file-progress" style="background: rgba(var(--uiv-primary-rgb, 25, 118, 210), 0.1)">
                      <div class="file-progress-bar uiv-${t == null ? void 0 : t.id}-card" style="width: ${r.progress}%; background: var(--uiv-primary-color)"></div>
                    </div>
                  ` : ""}
                  ${r.error ? L`
                    <div class="file-error" style="color: var(--uiv-error-color, #f44336)">${r.error}</div>
                  ` : ""}
                </div>
                <div class="file-actions">
                  <button 
                    type="button" 
                    class="file-action-btn remove-btn uiv-${t == null ? void 0 : t.id}-card"
                    style="border: 1px solid var(--uiv-error-color, #f44336); color: var(--uiv-error-color, #f44336); background: transparent"
                    @click=${() => this.removeFile(r.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            `)}
          </div>
        ` : ""}

        ${this.helpText && !this.hasError ? L`
          <div class="form-field-hint uiv-${t == null ? void 0 : t.id}-text" style="opacity: 0.7">${this.helpText}</div>
        ` : ""}
        
        ${this.errorMessage && this.hasError ? L`
          <div class="form-field-error uiv-${t == null ? void 0 : t.id}-text" style="color: var(--uiv-error-color, #f44336)">${this.errorMessage}</div>
        ` : ""}
      </div>
    `;
  }
  handleDragOver(t) {
    this.disabled || !this.dragDrop || (t.preventDefault(), t.stopPropagation(), this.isDragOver = !0);
  }
  handleDragLeave(t) {
    this.disabled || !this.dragDrop || (t.preventDefault(), t.stopPropagation(), this.isDragOver = !1);
  }
  handleDrop(t) {
    var r;
    if (this.disabled || !this.dragDrop) return;
    t.preventDefault(), t.stopPropagation(), this.isDragOver = !1;
    const e = Array.from(((r = t.dataTransfer) == null ? void 0 : r.files) || []);
    this.processFiles(e);
  }
  handleClick(t) {
    var r;
    if (this.disabled) return;
    t.preventDefault(), t.stopPropagation();
    const e = (r = this.shadowRoot) == null ? void 0 : r.querySelector(".file-input");
    e && e.click();
  }
  handleBrowseClick(t) {
    t.preventDefault(), t.stopPropagation(), this.handleClick(t);
  }
  handleInputStopPropagation(t) {
    t.stopPropagation();
  }
  handleFileSelect(t) {
    t.preventDefault(), t.stopPropagation();
    const e = t.target, r = Array.from(e.files || []);
    this.processFiles(r), e.value = "";
  }
  processFiles(t) {
    let e = t.filter((i) => this.validateFile(i));
    this.multiple || (e = e.slice(0, 1), this.files = []), this.maxFiles && this.files.length + e.length > this.maxFiles && (e = e.slice(0, this.maxFiles - this.files.length), this.hasError = !0, this.errorMessage = `Maximum ${this.maxFiles} files allowed`);
    const r = e.map((i) => ({
      file: i,
      id: this.generateId(),
      progress: this.showProgress ? 0 : void 0
    }));
    this.files = [...this.files, ...r], this.showProgress && r.forEach((i) => {
      this.simulateUpload(i);
    }), this.dispatchChangeEvent();
  }
  validateFile(t) {
    var e;
    if (this.maxFileSize && t.size > this.maxFileSize * 1024 * 1024)
      return this.hasError = !0, this.errorMessage = `File size must be less than ${this.maxFileSize}MB`, !1;
    if (this.accept) {
      const r = this.accept.split(",").map((l) => l.trim().toLowerCase()), i = t.type.toLowerCase(), s = "." + ((e = t.name.split(".").pop()) == null ? void 0 : e.toLowerCase());
      if (!r.some((l) => l.startsWith(".") ? l === s : i.match(l.replace("*", ".*"))))
        return this.hasError = !0, this.errorMessage = `File type not supported. Accepted: ${this.accept}`, !1;
    }
    return this.hasError = !1, this.errorMessage = "", !0;
  }
  removeFile(t) {
    this.files = this.files.filter((e) => e.id !== t), this.dispatchChangeEvent(), this.files.length === 0 && (this.hasError = !1, this.errorMessage = "");
  }
  simulateUpload(t) {
    const e = setInterval(() => {
      t.progress !== void 0 && t.progress < 100 && (t.progress += Math.random() * 20, t.progress >= 100 && (t.progress = 100, clearInterval(e)), this.requestUpdate());
    }, 200);
  }
  isImageFile(t) {
    return t.type.startsWith("image/");
  }
  getFileExtension(t) {
    var r;
    return ((r = t.split(".").pop()) == null ? void 0 : r.toLowerCase()) || "file";
  }
  formatFileSize(t) {
    if (t === 0) return "0 Bytes";
    const e = 1024, r = ["Bytes", "KB", "MB", "GB"], i = Math.floor(Math.log(t) / Math.log(e));
    return parseFloat((t / Math.pow(e, i)).toFixed(2)) + " " + r[i];
  }
  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  dispatchChangeEvent() {
    const t = this.files.map((e) => e.file);
    this.dispatchEvent(new CustomEvent("change", {
      detail: { files: t, value: t },
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("file-change", {
      detail: {
        files: t,
        fileItems: this.files,
        count: t.length
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(t) {
    this.dispatchChangeEvent();
  }
  handleFileChange(t) {
    this.dispatchChangeEvent();
  }
  // Public API
  clearFiles() {
    this.files = [], this.hasError = !1, this.errorMessage = "", this.dispatchChangeEvent();
  }
  getFiles() {
    return this.files.map((t) => t.file);
  }
  setError(t) {
    this.hasError = !0, this.errorMessage = t;
  }
  clearError() {
    this.hasError = !1, this.errorMessage = "";
  }
};
T.styles = Yt`
    :host {
      display: block;
      font-family: var(--uiv-font-family, inherit);
      --uiv-primary: var(--uiv-primary-color, #1976d2);
      --uiv-bg: var(--uiv-surface-color, #ffffff);
      --uiv-text: var(--uiv-text-color, #333);
      --uiv-border: var(--uiv-border-color, #e0e0e0);
    }

    .form-field {
      position: relative;
      margin-bottom: 16px;
    }

    .form-field-label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--uiv-text);
    }

    .form-field-label.required::after {
      content: ' *';
      color: var(--uiv-error-color, #f44336);
    }

    .file-input-container {
      position: relative;
      border: 2px dashed var(--uiv-border);
      border-radius: 12px;
      background: var(--uiv-bg);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      box-shadow: var(--uiv-shadow-depth, none);
      overflow: hidden;
    }

    .file-input-container:hover {
      border-color: var(--uiv-primary);
      box-shadow: var(--uiv-border-glow);
    }

    .drop-zone {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 32px;
      min-height: 140px;
      text-align: center;
    }

    .upload-icon {
      width: 48px;
      height: 48px;
      margin-bottom: 16px;
      color: var(--uiv-primary);
      opacity: 0.8;
    }

    .upload-text {
      font-size: 16px;
      font-weight: 600;
      color: var(--uiv-text);
      margin-bottom: 4px;
    }

    .upload-subtext {
      font-size: 12px;
      color: var(--uiv-text);
      opacity: 0.6;
    }

    .file-item {
      display: flex;
      align-items: center;
      padding: 12px;
      border: 1px solid var(--uiv-border);
      border-radius: 8px;
      margin-top: 8px;
      background: var(--uiv-bg);
      box-shadow: var(--uiv-shadow-depth, none);
    }

    .file-name {
      font-weight: 600;
      color: var(--uiv-text);
    }

    .browse-button {
      background: var(--uiv-primary);
      color: white;
      padding: 8px 24px;
      border-radius: 8px;
      border: none;
      font-weight: 600;
      margin-top: 16px;
      cursor: pointer;
      box-shadow: var(--uiv-border-glow);
    }
  `;
P([
  M({ type: String }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], T.prototype, "label", 2);
P([
  M({ type: String }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], T.prototype, "placeholder", 2);
P([
  M({ type: String }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Help Text",
    placeholderText: "Enter help text",
    fieldMappings: "helpText"
  })
], T.prototype, "helpText", 2);
P([
  M({ type: String }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], T.prototype, "errorMessage", 2);
P([
  M({ type: Boolean }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], T.prototype, "required", 2);
P([
  M({ type: Boolean }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], T.prototype, "disabled", 2);
P([
  M({ type: Boolean }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Multiple Files",
    fieldMappings: "multiple"
  })
], T.prototype, "multiple", 2);
P([
  M({ type: Boolean }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Show Preview",
    fieldMappings: "showPreview"
  })
], T.prototype, "showPreview", 2);
P([
  M({ type: Boolean }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Show Progress",
    fieldMappings: "showProgress"
  })
], T.prototype, "showProgress", 2);
P([
  M({ type: Boolean }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Drag and Drop",
    fieldMappings: "dragDrop"
  })
], T.prototype, "dragDrop", 2);
P([
  M({ type: String }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Accept Types",
    placeholderText: "Enter file types (e.g., .pdf,.jpg,.png)",
    fieldMappings: "accept"
  })
], T.prototype, "accept", 2);
P([
  M({ type: Number }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.NUMBER_INPUT,
    displayLabel: "Max File Size (MB)",
    fieldMappings: "maxFileSize"
  })
], T.prototype, "maxFileSize", 2);
P([
  M({ type: Number }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.NUMBER_INPUT,
    displayLabel: "Max Files",
    fieldMappings: "maxFiles"
  })
], T.prototype, "maxFiles", 2);
P([
  M({ type: String }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Width",
    placeholderText: "Enter width (e.g., 100%, 300px)",
    fieldMappings: "width"
  })
], T.prototype, "width", 2);
P([
  M({ type: String }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Height",
    placeholderText: "Enter height (e.g., auto, 200px)",
    fieldMappings: "height"
  })
], T.prototype, "height", 2);
P([
  M({ type: String }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Drop Zone Height",
    placeholderText: "Enter drop zone height (e.g., 120px)",
    fieldMappings: "dropZoneHeight"
  })
], T.prototype, "dropZoneHeight", 2);
P([
  M({ type: String }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Border Radius",
    placeholderText: "Enter border radius (e.g., 4px)",
    fieldMappings: "borderRadius"
  })
], T.prototype, "borderRadius", 2);
P([
  M({ type: String }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Primary Color",
    fieldMappings: "primaryColor"
  })
], T.prototype, "primaryColor", 2);
P([
  M({ type: String }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Error Color",
    fieldMappings: "errorColor"
  })
], T.prototype, "errorColor", 2);
P([
  M({ type: String }),
  S({
    attributeType: C.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Success Color",
    fieldMappings: "successColor"
  })
], T.prototype, "successColor", 2);
P([
  xe()
], T.prototype, "files", 2);
P([
  xe()
], T.prototype, "isDragOver", 2);
P([
  xe()
], T.prototype, "hasError", 2);
P([
  S({
    attributeType: C.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], T.prototype, "handleChange", 1);
P([
  S({
    attributeType: C.EVENT,
    displayLabel: "On File Change",
    eventTrigger: "file-change"
  })
], T.prototype, "handleFileChange", 1);
T = P([
  Bt({
    name: "zero-file-input",
    version: "1.0.0",
    title: "File Input",
    elementSelector: "zero-file-input",
    group: "Form Controls",
    iconName: "file-input-icon.png"
  }),
  Vt(),
  pr("zero-file-input")
], T);
export {
  T as ZeroFileInput,
  st as studioTemplate
};
