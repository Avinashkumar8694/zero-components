var Yt = Object.defineProperty;
var qt = (r, e, t) => e in r ? Yt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ye = (r, e, t) => qt(r, typeof e != "symbol" ? e + "" : e, t);
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
var Xe;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof qe == "object" ? qe : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(f, E) {
      return function($, w) {
        Object.defineProperty(f, $, { configurable: !0, writable: !0, value: w }), E && E($, w);
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
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, E = !g && !f, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return me(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return me({ __proto__: null });
      } : function() {
        return me({});
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
    }, w = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : zt(), U = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Gt(), z = typeof WeakMap == "function" ? WeakMap : Bt(), F = o ? Symbol.for("@reflect-metadata:registry") : void 0, ce = Ht(), Oe = jt(ce);
    function _t(i, a, s, c) {
      if (b(s)) {
        if (!He(i))
          throw new TypeError();
        if (!je(a))
          throw new TypeError();
        return Ct(i, a);
      } else {
        if (!He(i))
          throw new TypeError();
        if (!x(a))
          throw new TypeError();
        if (!x(c) && !b(c) && !Z(c))
          throw new TypeError();
        return Z(c) && (c = void 0), s = j(s), Mt(i, a, s, c);
      }
    }
    e("decorate", _t);
    function $t(i, a) {
      function s(c, v) {
        if (!x(c))
          throw new TypeError();
        if (!b(v) && !Ut(v))
          throw new TypeError();
        ke(i, a, c, v);
      }
      return s;
    }
    e("metadata", $t);
    function wt(i, a, s, c) {
      if (!x(s))
        throw new TypeError();
      return b(c) || (c = j(c)), ke(i, a, s, c);
    }
    e("defineMetadata", wt);
    function Et(i, a, s) {
      if (!x(a))
        throw new TypeError();
      return b(s) || (s = j(s)), Ce(i, a, s);
    }
    e("hasMetadata", Et);
    function Tt(i, a, s) {
      if (!x(a))
        throw new TypeError();
      return b(s) || (s = j(s)), ve(i, a, s);
    }
    e("hasOwnMetadata", Tt);
    function At(i, a, s) {
      if (!x(a))
        throw new TypeError();
      return b(s) || (s = j(s)), Me(i, a, s);
    }
    e("getMetadata", At);
    function xt(i, a, s) {
      if (!x(a))
        throw new TypeError();
      return b(s) || (s = j(s)), Re(i, a, s);
    }
    e("getOwnMetadata", xt);
    function St(i, a) {
      if (!x(i))
        throw new TypeError();
      return b(a) || (a = j(a)), Ie(i, a);
    }
    e("getMetadataKeys", St);
    function Pt(i, a) {
      if (!x(i))
        throw new TypeError();
      return b(a) || (a = j(a)), Ne(i, a);
    }
    e("getOwnMetadataKeys", Pt);
    function Ot(i, a, s) {
      if (!x(a))
        throw new TypeError();
      if (b(s) || (s = j(s)), !x(a))
        throw new TypeError();
      b(s) || (s = j(s));
      var c = ee(
        a,
        s,
        /*Create*/
        !1
      );
      return b(c) ? !1 : c.OrdinaryDeleteMetadata(i, a, s);
    }
    e("deleteMetadata", Ot);
    function Ct(i, a) {
      for (var s = i.length - 1; s >= 0; --s) {
        var c = i[s], v = c(a);
        if (!b(v) && !Z(v)) {
          if (!je(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function Mt(i, a, s, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], S = P(a, s, c);
        if (!b(S) && !Z(S)) {
          if (!x(S))
            throw new TypeError();
          c = S;
        }
      }
      return c;
    }
    function Ce(i, a, s) {
      var c = ve(i, a, s);
      if (c)
        return !0;
      var v = be(a);
      return Z(v) ? !1 : Ce(i, v, s);
    }
    function ve(i, a, s) {
      var c = ee(
        a,
        s,
        /*Create*/
        !1
      );
      return b(c) ? !1 : De(c.OrdinaryHasOwnMetadata(i, a, s));
    }
    function Me(i, a, s) {
      var c = ve(i, a, s);
      if (c)
        return Re(i, a, s);
      var v = be(a);
      if (!Z(v))
        return Me(i, v, s);
    }
    function Re(i, a, s) {
      var c = ee(
        a,
        s,
        /*Create*/
        !1
      );
      if (!b(c))
        return c.OrdinaryGetOwnMetadata(i, a, s);
    }
    function ke(i, a, s, c) {
      var v = ee(
        s,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, s, c);
    }
    function Ie(i, a) {
      var s = Ne(i, a), c = be(i);
      if (c === null)
        return s;
      var v = Ie(c, a);
      if (v.length <= 0)
        return s;
      if (s.length <= 0)
        return v;
      for (var P = new U(), S = [], m = 0, d = s; m < d.length; m++) {
        var p = d[m], h = P.has(p);
        h || (P.add(p), S.push(p));
      }
      for (var y = 0, _ = v; y < _.length; y++) {
        var p = _[y], h = P.has(p);
        h || (P.add(p), S.push(p));
      }
      return S;
    }
    function Ne(i, a) {
      var s = ee(
        i,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Ue(i) {
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
    function Z(i) {
      return i === null;
    }
    function Rt(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function kt(i, a) {
      switch (Ue(i)) {
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
      var s = "string", c = Le(i, l);
      if (c !== void 0) {
        var v = c.call(i, s);
        if (x(v))
          throw new TypeError();
        return v;
      }
      return It(i);
    }
    function It(i, a) {
      var s, c;
      {
        var v = i.toString;
        if (de(v)) {
          var c = v.call(i);
          if (!x(c))
            return c;
        }
        var s = i.valueOf;
        if (de(s)) {
          var c = s.call(i);
          if (!x(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function De(i) {
      return !!i;
    }
    function Nt(i) {
      return "" + i;
    }
    function j(i) {
      var a = kt(i);
      return Rt(a) ? a : Nt(a);
    }
    function He(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function de(i) {
      return typeof i == "function";
    }
    function je(i) {
      return typeof i == "function";
    }
    function Ut(i) {
      switch (Ue(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ge(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Le(i, a) {
      var s = i[a];
      if (s != null) {
        if (!de(s))
          throw new TypeError();
        return s;
      }
    }
    function ze(i) {
      var a = Le(i, u);
      if (!de(a))
        throw new TypeError();
      var s = a.call(i);
      if (!x(s))
        throw new TypeError();
      return s;
    }
    function Ge(i) {
      return i.value;
    }
    function Be(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Ve(i) {
      var a = i.return;
      a && a.call(i);
    }
    function be(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || a !== w)
        return a;
      var s = i.prototype, c = s && Object.getPrototypeOf(s);
      if (c == null || c === Object.prototype)
        return a;
      var v = c.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function Dt() {
      var i;
      !b(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Lt(t.Reflect));
      var a, s, c, v = new z(), P = {
        registerProvider: S,
        getProvider: d,
        setProvider: h
      };
      return P;
      function S(y) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case b(a):
            a = y;
            break;
          case a === y:
            break;
          case b(s):
            s = y;
            break;
          case s === y:
            break;
          default:
            c === void 0 && (c = new U()), c.add(y);
            break;
        }
      }
      function m(y, _) {
        if (!b(a)) {
          if (a.isProviderFor(y, _))
            return a;
          if (!b(s)) {
            if (s.isProviderFor(y, _))
              return a;
            if (!b(c))
              for (var T = ze(c); ; ) {
                var A = Be(T);
                if (!A)
                  return;
                var D = Ge(A);
                if (D.isProviderFor(y, _))
                  return Ve(T), D;
              }
          }
        }
        if (!b(i) && i.isProviderFor(y, _))
          return i;
      }
      function d(y, _) {
        var T = v.get(y), A;
        return b(T) || (A = T.get(_)), b(A) && (A = m(y, _), b(A) || (b(T) && (T = new M(), v.set(y, T)), T.set(_, A))), A;
      }
      function p(y) {
        if (b(y))
          throw new TypeError();
        return a === y || s === y || !b(c) && c.has(y);
      }
      function h(y, _, T) {
        if (!p(T))
          throw new Error("Metadata provider not registered.");
        var A = d(y, _);
        if (A !== T) {
          if (!b(A))
            return !1;
          var D = v.get(y);
          b(D) && (D = new M(), v.set(y, D)), D.set(_, T);
        }
        return !0;
      }
    }
    function Ht() {
      var i;
      return !b(F) && x(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[F]), b(i) && (i = Dt()), !b(F) && x(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function jt(i) {
      var a = new z(), s = {
        isProviderFor: function(p, h) {
          var y = a.get(p);
          return b(y) ? !1 : y.has(h);
        },
        OrdinaryDefineOwnMetadata: S,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: d
      };
      return ce.registerProvider(s), s;
      function c(p, h, y) {
        var _ = a.get(p), T = !1;
        if (b(_)) {
          if (!y)
            return;
          _ = new M(), a.set(p, _), T = !0;
        }
        var A = _.get(h);
        if (b(A)) {
          if (!y)
            return;
          if (A = new M(), _.set(h, A), !i.setProvider(p, h, s))
            throw _.delete(h), T && a.delete(p), new Error("Wrong provider for target.");
        }
        return A;
      }
      function v(p, h, y) {
        var _ = c(
          h,
          y,
          /*Create*/
          !1
        );
        return b(_) ? !1 : De(_.has(p));
      }
      function P(p, h, y) {
        var _ = c(
          h,
          y,
          /*Create*/
          !1
        );
        if (!b(_))
          return _.get(p);
      }
      function S(p, h, y, _) {
        var T = c(
          y,
          _,
          /*Create*/
          !0
        );
        T.set(p, h);
      }
      function m(p, h) {
        var y = [], _ = c(
          p,
          h,
          /*Create*/
          !1
        );
        if (b(_))
          return y;
        for (var T = _.keys(), A = ze(T), D = 0; ; ) {
          var We = Be(A);
          if (!We)
            return y.length = D, y;
          var Vt = Ge(We);
          try {
            y[D] = Vt;
          } catch (Wt) {
            try {
              Ve(A);
            } finally {
              throw Wt;
            }
          }
          D++;
        }
      }
      function d(p, h, y) {
        var _ = c(
          h,
          y,
          /*Create*/
          !1
        );
        if (b(_) || !_.delete(p))
          return !1;
        if (_.size === 0) {
          var T = a.get(h);
          b(T) || (T.delete(y), T.size === 0 && a.delete(T));
        }
        return !0;
      }
    }
    function Lt(i) {
      var a = i.defineMetadata, s = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, S = new z(), m = {
        isProviderFor: function(d, p) {
          var h = S.get(d);
          return !b(h) && h.has(p) ? !0 : v(d, p).length ? (b(h) && (h = new U(), S.set(d, h)), h.add(p), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return m;
    }
    function ee(i, a, s) {
      var c = ce.getProvider(i, a);
      if (!b(c))
        return c;
      if (s) {
        if (ce.setProvider(i, a, Oe))
          return Oe;
        throw new Error("Illegal state.");
      }
    }
    function zt() {
      var i = {}, a = [], s = (
        /** @class */
        function() {
          function m(d, p, h) {
            this._index = 0, this._keys = d, this._values = p, this._selector = h;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var p = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: p, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), d;
          }, m.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: d, done: !0 };
          }, m;
        }()
      ), c = (
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
            var p = this._find(
              d,
              /*insert*/
              !1
            );
            return p >= 0 ? this._values[p] : void 0;
          }, m.prototype.set = function(d, p) {
            var h = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[h] = p, this;
          }, m.prototype.delete = function(d) {
            var p = this._find(
              d,
              /*insert*/
              !1
            );
            if (p >= 0) {
              for (var h = this._keys.length, y = p + 1; y < h; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, ge(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new s(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new s(this._keys, this._values, P);
          }, m.prototype.entries = function() {
            return new s(this._keys, this._values, S);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(d, p) {
            if (!ge(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var h = 0; h < this._keys.length; h++)
                if (ge(this._keys[h], d)) {
                  this._cacheIndex = h;
                  break;
                }
            }
            return this._cacheIndex < 0 && p && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return c;
      function v(m, d) {
        return m;
      }
      function P(m, d) {
        return d;
      }
      function S(m, d) {
        return [m, d];
      }
    }
    function Gt() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new M();
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
    function Bt() {
      var i = 16, a = $.create(), s = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(p) {
            var h = v(
              p,
              /*create*/
              !1
            );
            return h !== void 0 ? $.has(h, this._key) : !1;
          }, d.prototype.get = function(p) {
            var h = v(
              p,
              /*create*/
              !1
            );
            return h !== void 0 ? $.get(h, this._key) : void 0;
          }, d.prototype.set = function(p, h) {
            var y = v(
              p,
              /*create*/
              !0
            );
            return y[this._key] = h, this;
          }, d.prototype.delete = function(p) {
            var h = v(
              p,
              /*create*/
              !1
            );
            return h !== void 0 ? delete h[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + m();
        while ($.has(a, d));
        return a[d] = !0, d;
      }
      function v(d, p) {
        if (!n.call(d, s)) {
          if (!p)
            return;
          Object.defineProperty(d, s, { value: $.create() });
        }
        return d[s];
      }
      function P(d, p) {
        for (var h = 0; h < p; ++h)
          d[h] = Math.random() * 255 | 0;
        return d;
      }
      function S(d) {
        if (typeof Uint8Array == "function") {
          var p = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(p) : typeof msCrypto < "u" ? msCrypto.getRandomValues(p) : P(p, d), p;
        }
        return P(new Array(d), d);
      }
      function m() {
        var d = S(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var p = "", h = 0; h < i; ++h) {
          var y = d[h];
          (h === 4 || h === 6 || h === 8) && (p += "-"), y < 16 && (p += "0"), p += y.toString(16).toLowerCase();
        }
        return p;
      }
    }
    function me(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Xe || (Xe = {}));
function Xt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ft(r) {
  return function(e) {
    if (Xt(r)) {
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
function pt(r) {
  return Ft(r);
}
function ht(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ye(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const $ = new CSSStyleSheet(), w = (E = l.sheet) == null ? void 0 : E.cssRules;
          w && (Array.from(w).forEach((M) => $.insertRule(M.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          f.appendChild($);
        }
        u.forEach(($) => {
          const w = $.cloneNode(!0);
          f.appendChild(w);
        });
      }
    }
    return t;
  };
}
function Zt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Jt(r) {
  return function(e, t) {
    try {
      Zt(r);
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
function k(r) {
  return Jt(r);
}
var R;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(R || (R = {}));
var C;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(C || (C = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pe = globalThis, Ae = pe.ShadowRoot && (pe.ShadyCSS === void 0 || pe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, xe = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let ft = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== xe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Ae && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Qt = (r) => new ft(typeof r == "string" ? r : r + "", void 0, xe), yt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new ft(t, r, xe);
}, Kt = (r, e) => {
  if (Ae) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = pe.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, Ze = Ae ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Qt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: er, defineProperty: tr, getOwnPropertyDescriptor: rr, getOwnPropertyNames: nr, getOwnPropertySymbols: ir, getPrototypeOf: or } = Object, B = globalThis, Je = B.trustedTypes, ar = Je ? Je.emptyScript : "", _e = B.reactiveElementPolyfillSupport, ne = (r, e) => r, he = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? ar : null;
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
} }, Se = (r, e) => !er(r, e), Qe = { attribute: !0, type: String, converter: he, reflect: !1, useDefault: !1, hasChanged: Se };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Qe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && tr(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = rr(this.prototype, e) ?? { get() {
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
    return this.elementProperties.get(e) ?? Qe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ne("elementProperties"))) return;
    const e = or(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ne("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ne("properties"))) {
      const t = this.properties, n = [...nr(t), ...ir(t)];
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
      for (const o of n) t.unshift(Ze(o));
    } else e !== void 0 && t.push(Ze(e));
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
    return Kt(e, this.constructor.elementStyles), e;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : he).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const g = n.getPropertyOptions(o), f = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : he;
      this._$Em = o;
      const E = f.fromAttribute(t, g.type);
      this[o] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var u;
    if (e !== void 0) {
      const g = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = g.getPropertyOptions(e)), !((n.hasChanged ?? Se)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(g._$Eu(e, n)))) return;
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
        const { wrapped: g } = u, f = this[l];
        g !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, u, f);
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
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[ne("elementProperties")] = /* @__PURE__ */ new Map(), J[ne("finalized")] = /* @__PURE__ */ new Map(), _e == null || _e({ ReactiveElement: J }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = globalThis, Ke = (r) => r, fe = ie.trustedTypes, et = fe ? fe.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, vt = "$lit$", G = `lit$${Math.random().toFixed(9).slice(2)}$`, gt = "?" + G, sr = `<${gt}>`, q = document, ae = () => q.createComment(""), se = (r) => r === null || typeof r != "object" && typeof r != "function", Pe = Array.isArray, lr = (r) => Pe(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", $e = `[ 	
\f\r]`, te = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, tt = /-->/g, rt = />/g, V = RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), nt = /'/g, it = /"/g, bt = /^(?:script|style|textarea|title)$/i, ur = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), re = ur(1), Q = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), ot = /* @__PURE__ */ new WeakMap(), W = q.createTreeWalker(q, 129);
function mt(r, e) {
  if (!Pe(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return et !== void 0 ? et.createHTML(e) : e;
}
const cr = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = te;
  for (let g = 0; g < t; g++) {
    const f = r[g];
    let E, $, w = -1, M = 0;
    for (; M < f.length && (u.lastIndex = M, $ = u.exec(f), $ !== null); ) M = u.lastIndex, u === te ? $[1] === "!--" ? u = tt : $[1] !== void 0 ? u = rt : $[2] !== void 0 ? (bt.test($[2]) && (o = RegExp("</" + $[2], "g")), u = V) : $[3] !== void 0 && (u = V) : u === V ? $[0] === ">" ? (u = o ?? te, w = -1) : $[1] === void 0 ? w = -2 : (w = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? V : $[3] === '"' ? it : nt) : u === it || u === nt ? u = V : u === tt || u === rt ? u = te : (u = V, o = void 0);
    const U = u === V && r[g + 1].startsWith("/>") ? " " : "";
    l += u === te ? f + sr : w >= 0 ? (n.push(E), f.slice(0, w) + vt + f.slice(w) + G + U) : f + G + (w === -2 ? g : U);
  }
  return [mt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class le {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const g = e.length - 1, f = this.parts, [E, $] = cr(e, t);
    if (this.el = le.createElement(E, n), W.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = W.nextNode()) !== null && f.length < g; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(vt)) {
          const M = $[u++], U = o.getAttribute(w).split(G), z = /([.?@])?(.*)/.exec(M);
          f.push({ type: 1, index: l, name: z[2], strings: U, ctor: z[1] === "." ? pr : z[1] === "?" ? hr : z[1] === "@" ? fr : ye }), o.removeAttribute(w);
        } else w.startsWith(G) && (f.push({ type: 6, index: l }), o.removeAttribute(w));
        if (bt.test(o.tagName)) {
          const w = o.textContent.split(G), M = w.length - 1;
          if (M > 0) {
            o.textContent = fe ? fe.emptyScript : "";
            for (let U = 0; U < M; U++) o.append(w[U], ae()), W.nextNode(), f.push({ type: 2, index: ++l });
            o.append(w[M], ae());
          }
        }
      } else if (o.nodeType === 8) if (o.data === gt) f.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(G, w + 1)) !== -1; ) f.push({ type: 7, index: l }), w += G.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = q.createElement("template");
    return n.innerHTML = e, n;
  }
}
function K(r, e, t = r, n) {
  var u, g;
  if (e === Q) return e;
  let o = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = se(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((g = o == null ? void 0 : o._$AO) == null || g.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = K(r, o._$AS(r, e.values), o, n)), e;
}
class dr {
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? q).importNode(t, !0);
    W.currentNode = o;
    let l = W.nextNode(), u = 0, g = 0, f = n[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let E;
        f.type === 2 ? E = new ue(l, l.nextSibling, this, e) : f.type === 1 ? E = new f.ctor(l, f.name, f.strings, this, e) : f.type === 6 && (E = new yr(l, this, e)), this._$AV.push(E), f = n[++g];
      }
      u !== (f == null ? void 0 : f.index) && (l = W.nextNode(), u++);
    }
    return W.currentNode = q, o;
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
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = K(this, e, t), se(e) ? e === O || e == null || e === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : e !== this._$AH && e !== Q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : lr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== O && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(q.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = le.createElement(mt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const u = new dr(o, this), g = u.u(this.options);
      u.p(t), this.T(g), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = ot.get(e.strings);
    return t === void 0 && ot.set(e.strings, t = new le(e)), t;
  }
  k(e) {
    Pe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new ue(this.O(ae()), this.O(ae()), this, this.options)) : n = t[o], n._$AI(l), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = Ke(e).nextSibling;
      Ke(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ye {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, o, l) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = O;
  }
  _$AI(e, t = this, n, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = K(this, e, t, 0), u = !se(e) || e !== this._$AH && e !== Q, u && (this._$AH = e);
    else {
      const g = e;
      let f, E;
      for (e = l[0], f = 0; f < l.length - 1; f++) E = K(this, g[n + f], t, f), E === Q && (E = this._$AH[f]), u || (u = !se(E) || E !== this._$AH[f]), E === O ? e = O : e !== O && (e += (E ?? "") + l[f + 1]), this._$AH[f] = E;
    }
    u && !o && this.j(e);
  }
  j(e) {
    e === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class pr extends ye {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === O ? void 0 : e;
  }
}
class hr extends ye {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== O);
  }
}
class fr extends ye {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = K(this, e, t, 0) ?? O) === Q) return;
    const n = this._$AH, o = e === O && n !== O || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== O && (n === O || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class yr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    K(this, e);
  }
}
const we = ie.litHtmlPolyfillSupport;
we == null || we(le, ue), (ie.litHtmlVersions ?? (ie.litHtmlVersions = [])).push("3.3.3");
const vr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new ue(e.insertBefore(ae(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis;
class oe extends J {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = vr(t, this.renderRoot, this.renderOptions);
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
var dt;
oe._$litElement$ = !0, oe.finalized = !0, (dt = Y.litElementHydrateSupport) == null || dt.call(Y, { LitElement: oe });
const Ee = Y.litElementPolyfillSupport;
Ee == null || Ee({ LitElement: oe });
(Y.litElementVersions ?? (Y.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gr = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Se }, br = (r = gr, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(g) {
      const f = e.get.call(this);
      e.set.call(this, g), this.requestUpdate(u, f, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(u, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(g) {
      const f = this[u];
      e.call(this, g), this.requestUpdate(u, f, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function N(r) {
  return (e, t) => typeof t == "object" ? br(r, e, t) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
var mr = Object.defineProperty, _r = Object.getOwnPropertyDescriptor, H = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? _r(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(e, t, o) : u(o)) || o);
  return n && o && mr(e, t, o), o;
};
const at = () => window.zeroThemeManager, st = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;flex-direction:column;gap:4px;width:100%;'>",
    "<div style='font-size:0.75rem;font-weight:600;color:var(--uiv-text-color,#1e293b);'>{{display:label}}</div>",
    "<div style='padding:10px 14px;border-radius:8px;border:1px solid rgba(148,163,184,0.3);background:rgba(255,255,255,0.95);font-size:0.85rem;color:var(--uiv-text-muted,#94a3b8);'>{{display:placeholder}}</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Input", "Uiverse"]
};
function lt(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let I = class extends oe {
  constructor() {
    super(...arguments), this.theme = "modern", this.label = "Label", this.placeholder = "Type something...", this.value = "", this.error = !1, this.errorText = "", this.disabled = !1, this.cornerTag = "SEC-v2", this.accentColor = "", this.onInputEvent = "input";
  }
  static getStudioTemplate(r) {
    if (!r) return st;
    const e = lt(r.studio.display.label || "Input Label"), t = lt(r.studio.display.placeholder || "Enter text...");
    return {
      ...st,
      templateHtml: [
        "<div style='display:flex;flex-direction:column;gap:4px;width:100%;'>",
        `<div style='font-size:0.75rem;font-weight:600;color:var(--uiv-text-color,#1e293b);'>${e}</div>`,
        `<div style='padding:10px 14px;border-radius:8px;border:1px solid rgba(148,163,184,0.3);background:rgba(255,255,255,0.95);font-size:0.85rem;color:var(--uiv-text-muted,#94a3b8);'>${t}</div>`,
        "</div>"
      ].join("")
    };
  }
  handleInput(r) {
    if (this.disabled) return;
    const e = r.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = at()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var t;
    const r = (t = at()) == null ? void 0 : t.getActiveTheme("zero-uiv-themes"), e = this.theme || (r == null ? void 0 : r.id) || "modern";
    return re`
            <style>
                ${r ? r.getGlobalStyles() : ""}
                ${r ? r.getComponentStyles("input") : ""}
                :host {
                    ${this.accentColor ? `--uiv-input-primary: ${this.accentColor};` : ""}
                }
            </style>
            <div class="input-wrapper ${e}">
                <label class="label">${this.label}</label>
                ${this.renderTemplate(e)}
                ${this.error ? re`<div class="error-msg">${this.errorText}</div>` : ""}
            </div>
        `;
  }
  renderTemplate(r) {
    return r === "cyber" ? re`
                <div class="input-group-cyber ${this.error ? "error" : ""}">
                    <div class="input-inner-cyber">
                        <span class="corner-tag">${this.cornerTag}</span>
                        <input 
                            type="text" 
                            .value="${this.value}" 
                            .placeholder="${this.placeholder}"
                            ?disabled="${this.disabled}"
                            @input="${this.handleInput}"
                        >
                    </div>
                </div>
            ` : re`
            <input 
                type="text" 
                .value="${this.value}" 
                .placeholder="${this.placeholder}"
                ?disabled="${this.disabled}"
                @input="${this.handleInput}"
            >
        `;
  }
};
I.styles = yt`
        :host {
            display: block;
            margin-bottom: 20px;
            --inp-p: var(--uiv-input-primary, var(--uiv-primary-color, #6c63ff));
            --inp-b: var(--uiv-input-border, var(--uiv-border-color, #eee));
            --inp-t: var(--uiv-input-text, var(--uiv-text-color, #333));
            --inp-bg: var(--uiv-input-bg, var(--uiv-bg-color, #fff));
        }

        .input-wrapper {
            position: relative;
            width: 100%;
        }

        input {
            width: 100%;
            outline: none;
            border: 1px solid var(--inp-b);
            background: var(--inp-bg);
            color: var(--inp-t);
            font-family: inherit;
            padding: 10px 15px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        input:focus {
            border-color: var(--inp-p);
            box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
        }

        .label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            font-size: 0.85rem;
            color: var(--uiv-text-color, inherit);
        }

        .error-msg {
            color: #ff3d00;
            font-size: 0.75rem;
            margin-top: 4px;
        }

        /* Cyber Specifics */
        .cyber .input-group-cyber {
            position: relative;
            padding: 2px;
            background: linear-gradient(135deg, var(--inp-p) 0%, var(--uiv-secondary-color, #00e6f6) 100%);
            clip-path: polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%);
        }

        .cyber .input-inner-cyber {
            background: var(--inp-bg);
            padding: 10px 15px;
            clip-path: polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%);
        }

        .cyber input {
            border: none;
            background: transparent;
            color: #fff;
        }

        .corner-tag {
            position: absolute;
            right: 0;
            top: -10px;
            background: var(--uiv-accent-color, #f8f005);
            color: #000;
            padding: 0 5px;
            font-size: 0.6rem;
            font-weight: 800;
        }

        /* Neon Specifics */
        .neon input {
            border: 2px solid var(--inp-p);
            background: transparent;
            color: var(--inp-p);
            box-shadow: 0 0 5px var(--inp-p);
        }

        .neon input:focus {
            box-shadow: 0 0 15px var(--inp-p);
        }

        /* Glass Specifics */
        .glass input {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
        }

        /* Retro Specifics */
        .retro input {
            border: 3px solid #000;
            background: #fff;
            color: #000;
            border-radius: 0;
            box-shadow: 5px 5px 0px #000;
        }

        .retro input:focus {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px #000;
        }
    `;
H([
  N({ type: String }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.DROPDOWN,
    displayLabel: "Theme",
    fieldMappings: "theme",
    optionItems: [
      { label: "Modern", value: "modern" },
      { label: "Cyber", value: "cyber" },
      { label: "Neon", value: "neon" },
      { label: "Glass", value: "glass" },
      { label: "Retro", value: "retro" }
    ]
  })
], I.prototype, "theme", 2);
H([
  N({ type: String }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], I.prototype, "label", 2);
H([
  N({ type: String }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Placeholder",
    fieldMappings: "placeholder"
  })
], I.prototype, "placeholder", 2);
H([
  N({ type: String }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], I.prototype, "value", 2);
H([
  N({ type: Boolean }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.CHECKBOX,
    displayLabel: "Error State",
    fieldMappings: "error"
  })
], I.prototype, "error", 2);
H([
  N({ type: String }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Error Message",
    fieldMappings: "errorText"
  })
], I.prototype, "errorText", 2);
H([
  N({ type: Boolean }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], I.prototype, "disabled", 2);
H([
  N({ type: String }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Corner Tag (Cyber-only)",
    fieldMappings: "cornerTag"
  })
], I.prototype, "cornerTag", 2);
H([
  N({ type: String }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.COLOR_PICKER,
    displayLabel: "Accent Color Overlay",
    fieldMappings: "accentColor"
  })
], I.prototype, "accentColor", 2);
H([
  k({
    attributeType: C.EVENT,
    eventTrigger: "input",
    displayLabel: "On Input"
  })
], I.prototype, "onInputEvent", 2);
I = H([
  pt({
    name: "zero-uiv-input",
    version: "1.0.0",
    title: "Unified Input",
    elementSelector: "zero-uiv-input",
    group: "Uiverse Inputs",
    iconName: "input-icon.png"
  }),
  ht()
], I);
var $r = Object.defineProperty, wr = Object.getOwnPropertyDescriptor, X = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? wr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(e, t, o) : u(o)) || o);
  return n && o && $r(e, t, o), o;
};
const ut = () => window.zeroThemeManager, ct = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;flex-direction:column;gap:4px;width:100%;'>",
    "<div style='font-size:0.75rem;font-weight:700;color:#00ffff;font-family:monospace;letter-spacing:1px;'>{{display:label}}</div>",
    "<div style='padding:10px 14px;background:#111;color:#0f0;font-family:monospace;border:1px solid #333;box-shadow:2px 2px 0 #f0f,-2px -2px 0 #0ff;font-size:0.85rem;'>{{display:placeholder}}</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Glitch", "Cyberpunk"]
};
function Te(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let L = class extends I {
  constructor() {
    super(), this.label = "Label", this.placeholder = "Search...", this.value = "", this.cornerTag = "SEC-v2", this.disabled = !1, this.onInputEvent = "input", this.theme = "glitch";
  }
  static getStudioTemplate(r) {
    var E, $;
    if (!r) return ct;
    const e = Te(r.studio.display.label || "Glitch Input"), t = Te(r.studio.display.placeholder || "Enter text..."), n = Te((((E = r.props) == null ? void 0 : E.cornerTag) ?? (($ = r.studio.props) == null ? void 0 : $.cornerTag)) || "SEC-v2"), o = "var(--uiv-primary-color, #ff003c)", l = "var(--uiv-secondary-color, #00e6f6)", u = "var(--uiv-bg-color, #1a1a1a)", g = "var(--uiv-accent-color, #f8f005)", f = "var(--uiv-text-color, #ffffff)";
    return {
      ...ct,
      templateHtml: [
        "<div style='display:block;margin-bottom:20px;font-family:inherit;'>",
        `<div style='display:block;margin-bottom:5px;font-weight:bold;font-size:0.85rem;color:${f};'>${e}</div>`,
        `<div style='position:relative;padding:2px;background:linear-gradient(135deg, ${o} 0%, ${l} 100%);clip-path:polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%);'>`,
        `<div style='background:${u};padding:10px 15px;clip-path:polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%);display:flex;align-items:center;'>`,
        `<span style='position:absolute;right:0;top:-10px;background:${g};color:#000;padding:0 5px;font-size:0.6rem;font-weight:800;'>${n}</span>`,
        `<div style='width:100%;color:${f};opacity:0.6;font-size:1rem;'>${t}</div>`,
        "</div>",
        "</div>",
        "</div>"
      ].join("")
    };
  }
  handleInput(r) {
    if (this.disabled) return;
    const e = r.target;
    this.value = e.value, this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  connectedCallback() {
    var r;
    super.connectedCallback(), (r = ut()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var e;
    const r = (e = ut()) == null ? void 0 : e.getActiveTheme();
    return re`
            <style>
                ${r ? r.getGlobalStyles() : ""}
            </style>
            <div class="label">${this.label}</div>
            <div class="input-wrapper">
                <div class="input-inner">
                    <span class="corner-tag">${this.cornerTag}</span>
                    <input 
                        type="text" 
                        .value="${this.value}" 
                        .placeholder="${this.placeholder}"
                        ?disabled="${this.disabled}"
                        @input="${this.handleInput}"
                    >
                </div>
            </div>
        `;
  }
};
L.styles = yt`
        :host {
            display: block;
            margin-bottom: 20px;
            --inp-p: var(--uiv-primary-color, #ff003c);
            --inp-s: var(--uiv-secondary-color, #00e6f6);
            --inp-bg: var(--uiv-bg-color, #1a1a1a);
            --inp-t: var(--uiv-text-color, #ffffff);
            --inp-a: var(--uiv-accent-color, #f8f005);
        }

        .input-wrapper {
            position: relative;
            padding: 2px;
            background: linear-gradient(135deg, var(--inp-p) 0%, var(--inp-s) 100%);
            clip-path: polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%);
        }

        .input-inner {
            background: var(--inp-bg);
            padding: 10px 15px;
            clip-path: polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%);
            display: flex;
            align-items: center;
        }

        input {
            width: 100%;
            border: none;
            background: transparent;
            color: var(--inp-t);
            outline: none;
            font-family: inherit;
        }

        .label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            font-size: 0.85rem;
            color: var(--uiv-text-color, inherit);
        }

        .corner-tag {
            position: absolute;
            right: 0;
            top: -10px;
            background: var(--inp-a);
            color: #000;
            padding: 0 5px;
            font-size: 0.6rem;
            font-weight: 800;
        }
    `;
X([
  N({ type: String }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], L.prototype, "label", 2);
X([
  N({ type: String }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Placeholder",
    fieldMappings: "placeholder"
  })
], L.prototype, "placeholder", 2);
X([
  N({ type: String }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], L.prototype, "value", 2);
X([
  N({ type: String }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.TEXT_INPUT,
    displayLabel: "Corner Tag",
    fieldMappings: "cornerTag"
  })
], L.prototype, "cornerTag", 2);
X([
  N({ type: Boolean }),
  k({
    attributeType: C.PROPERTY,
    uiComponentType: R.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], L.prototype, "disabled", 2);
X([
  k({
    attributeType: C.EVENT,
    eventTrigger: "input",
    displayLabel: "On Input"
  })
], L.prototype, "onInputEvent", 2);
L = X([
  pt({
    name: "zero-uiv-input-glitch",
    version: "1.0.0",
    title: "Glitch Style Input",
    elementSelector: "zero-uiv-input-glitch",
    group: "Uiverse Inputs",
    iconName: "input-icon.png"
  }),
  ht()
], L);
export {
  L as ZeroUivInputGlitch,
  ct as glitchTemplate
};
