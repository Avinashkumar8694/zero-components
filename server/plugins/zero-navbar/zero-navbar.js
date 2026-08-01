var De = Object.defineProperty;
var Ie = (r, t, e) => t in r ? De(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var re = (r, t, e) => Ie(r, typeof t != "symbol" ? t + "" : t, e);
var ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ie;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof ne == "object" ? ne : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = a(r);
    typeof e.Reflect < "u" && (n = a(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function a(f, E) {
      return function($, m) {
        Object.defineProperty(f, $, { configurable: !0, writable: !0, value: m }), E && E($, m);
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
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", l = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, E = !g && !f, $ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return Pt(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return Pt({ __proto__: null });
      } : function() {
        return Pt({});
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
    }, m = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Re(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ne(), N = typeof WeakMap == "function" ? WeakMap : Le(), D = a ? Symbol.for("@reflect-metadata:registry") : void 0, G = Me(), tt = Pe(G);
    function dt(i, s, o, c) {
      if (b(o)) {
        if (!Yt(i))
          throw new TypeError();
        if (!Zt(s))
          throw new TypeError();
        return wt(i, s);
      } else {
        if (!Yt(i))
          throw new TypeError();
        if (!S(s))
          throw new TypeError();
        if (!S(c) && !b(c) && !X(c))
          throw new TypeError();
        return X(c) && (c = void 0), o = j(o), $t(i, s, o, c);
      }
    }
    t("decorate", dt);
    function ht(i, s) {
      function o(c, y) {
        if (!S(c))
          throw new TypeError();
        if (!b(y) && !ke(y))
          throw new TypeError();
        Gt(i, s, c, y);
      }
      return o;
    }
    t("metadata", ht);
    function ft(i, s, o, c) {
      if (!S(o))
        throw new TypeError();
      return b(c) || (c = j(c)), Gt(i, s, o, c);
    }
    t("defineMetadata", ft);
    function pt(i, s, o) {
      if (!S(s))
        throw new TypeError();
      return b(o) || (o = j(o)), et(i, s, o);
    }
    t("hasMetadata", pt);
    function vt(i, s, o) {
      if (!S(s))
        throw new TypeError();
      return b(o) || (o = j(o)), Z(i, s, o);
    }
    t("hasOwnMetadata", vt);
    function yt(i, s, o) {
      if (!S(s))
        throw new TypeError();
      return b(o) || (o = j(o)), Et(i, s, o);
    }
    t("getMetadata", yt);
    function gt(i, s, o) {
      if (!S(s))
        throw new TypeError();
      return b(o) || (o = j(o)), Bt(i, s, o);
    }
    t("getOwnMetadata", gt);
    function bt(i, s) {
      if (!S(i))
        throw new TypeError();
      return b(s) || (s = j(s)), Wt(i, s);
    }
    t("getMetadataKeys", bt);
    function mt(i, s) {
      if (!S(i))
        throw new TypeError();
      return b(s) || (s = j(s)), Vt(i, s);
    }
    t("getOwnMetadataKeys", mt);
    function _t(i, s, o) {
      if (!S(s))
        throw new TypeError();
      if (b(o) || (o = j(o)), !S(s))
        throw new TypeError();
      b(o) || (o = j(o));
      var c = rt(
        s,
        o,
        /*Create*/
        !1
      );
      return b(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, o);
    }
    t("deleteMetadata", _t);
    function wt(i, s) {
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o], y = c(s);
        if (!b(y) && !X(y)) {
          if (!Zt(y))
            throw new TypeError();
          s = y;
        }
      }
      return s;
    }
    function $t(i, s, o, c) {
      for (var y = i.length - 1; y >= 0; --y) {
        var O = i[y], k = O(s, o, c);
        if (!b(k) && !X(k)) {
          if (!S(k))
            throw new TypeError();
          c = k;
        }
      }
      return c;
    }
    function et(i, s, o) {
      var c = Z(i, s, o);
      if (c)
        return !0;
      var y = Mt(s);
      return X(y) ? !1 : et(i, y, o);
    }
    function Z(i, s, o) {
      var c = rt(
        s,
        o,
        /*Create*/
        !1
      );
      return b(c) ? !1 : qt(c.OrdinaryHasOwnMetadata(i, s, o));
    }
    function Et(i, s, o) {
      var c = Z(i, s, o);
      if (c)
        return Bt(i, s, o);
      var y = Mt(s);
      if (!X(y))
        return Et(i, y, o);
    }
    function Bt(i, s, o) {
      var c = rt(
        s,
        o,
        /*Create*/
        !1
      );
      if (!b(c))
        return c.OrdinaryGetOwnMetadata(i, s, o);
    }
    function Gt(i, s, o, c) {
      var y = rt(
        o,
        c,
        /*Create*/
        !0
      );
      y.OrdinaryDefineOwnMetadata(i, s, o, c);
    }
    function Wt(i, s) {
      var o = Vt(i, s), c = Mt(i);
      if (c === null)
        return o;
      var y = Wt(c, s);
      if (y.length <= 0)
        return o;
      if (o.length <= 0)
        return y;
      for (var O = new R(), k = [], _ = 0, d = o; _ < d.length; _++) {
        var h = d[_], p = O.has(h);
        p || (O.add(h), k.push(h));
      }
      for (var v = 0, w = y; v < w.length; v++) {
        var h = w[v], p = O.has(h);
        p || (O.add(h), k.push(h));
      }
      return k;
    }
    function Vt(i, s) {
      var o = rt(
        i,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Ft(i) {
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
    function Ae(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function xe(i, s) {
      switch (Ft(i)) {
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
      var o = "string", c = Xt(i, l);
      if (c !== void 0) {
        var y = c.call(i, o);
        if (S(y))
          throw new TypeError();
        return y;
      }
      return Ce(i);
    }
    function Ce(i, s) {
      var o, c;
      {
        var y = i.toString;
        if (At(y)) {
          var c = y.call(i);
          if (!S(c))
            return c;
        }
        var o = i.valueOf;
        if (At(o)) {
          var c = o.call(i);
          if (!S(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function qt(i) {
      return !!i;
    }
    function Se(i) {
      return "" + i;
    }
    function j(i) {
      var s = xe(i);
      return Ae(s) ? s : Se(s);
    }
    function Yt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function At(i) {
      return typeof i == "function";
    }
    function Zt(i) {
      return typeof i == "function";
    }
    function ke(i) {
      switch (Ft(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ot(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Xt(i, s) {
      var o = i[s];
      if (o != null) {
        if (!At(o))
          throw new TypeError();
        return o;
      }
    }
    function Jt(i) {
      var s = Xt(i, u);
      if (!At(s))
        throw new TypeError();
      var o = s.call(i);
      if (!S(o))
        throw new TypeError();
      return o;
    }
    function Qt(i) {
      return i.value;
    }
    function Kt(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function te(i) {
      var s = i.return;
      s && s.call(i);
    }
    function Mt(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === m || s !== m)
        return s;
      var o = i.prototype, c = o && Object.getPrototypeOf(o);
      if (c == null || c === Object.prototype)
        return s;
      var y = c.constructor;
      return typeof y != "function" || y === i ? s : y;
    }
    function Oe() {
      var i;
      !b(D) && typeof e.Reflect < "u" && !(D in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Te(e.Reflect));
      var s, o, c, y = new N(), O = {
        registerProvider: k,
        getProvider: d,
        setProvider: p
      };
      return O;
      function k(v) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === v:
            break;
          case b(s):
            s = v;
            break;
          case s === v:
            break;
          case b(o):
            o = v;
            break;
          case o === v:
            break;
          default:
            c === void 0 && (c = new R()), c.add(v);
            break;
        }
      }
      function _(v, w) {
        if (!b(s)) {
          if (s.isProviderFor(v, w))
            return s;
          if (!b(o)) {
            if (o.isProviderFor(v, w))
              return s;
            if (!b(c))
              for (var A = Jt(c); ; ) {
                var x = Kt(A);
                if (!x)
                  return;
                var L = Qt(x);
                if (L.isProviderFor(v, w))
                  return te(A), L;
              }
          }
        }
        if (!b(i) && i.isProviderFor(v, w))
          return i;
      }
      function d(v, w) {
        var A = y.get(v), x;
        return b(A) || (x = A.get(w)), b(x) && (x = _(v, w), b(x) || (b(A) && (A = new C(), y.set(v, A)), A.set(w, x))), x;
      }
      function h(v) {
        if (b(v))
          throw new TypeError();
        return s === v || o === v || !b(c) && c.has(v);
      }
      function p(v, w, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var x = d(v, w);
        if (x !== A) {
          if (!b(x))
            return !1;
          var L = y.get(v);
          b(L) && (L = new C(), y.set(v, L)), L.set(w, A);
        }
        return !0;
      }
    }
    function Me() {
      var i;
      return !b(D) && S(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[D]), b(i) && (i = Oe()), !b(D) && S(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, D, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pe(i) {
      var s = new N(), o = {
        isProviderFor: function(h, p) {
          var v = s.get(h);
          return b(v) ? !1 : v.has(p);
        },
        OrdinaryDefineOwnMetadata: k,
        OrdinaryHasOwnMetadata: y,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: d
      };
      return G.registerProvider(o), o;
      function c(h, p, v) {
        var w = s.get(h), A = !1;
        if (b(w)) {
          if (!v)
            return;
          w = new C(), s.set(h, w), A = !0;
        }
        var x = w.get(p);
        if (b(x)) {
          if (!v)
            return;
          if (x = new C(), w.set(p, x), !i.setProvider(h, p, o))
            throw w.delete(p), A && s.delete(h), new Error("Wrong provider for target.");
        }
        return x;
      }
      function y(h, p, v) {
        var w = c(
          p,
          v,
          /*Create*/
          !1
        );
        return b(w) ? !1 : qt(w.has(h));
      }
      function O(h, p, v) {
        var w = c(
          p,
          v,
          /*Create*/
          !1
        );
        if (!b(w))
          return w.get(h);
      }
      function k(h, p, v, w) {
        var A = c(
          v,
          w,
          /*Create*/
          !0
        );
        A.set(h, p);
      }
      function _(h, p) {
        var v = [], w = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (b(w))
          return v;
        for (var A = w.keys(), x = Jt(A), L = 0; ; ) {
          var ee = Kt(x);
          if (!ee)
            return v.length = L, v;
          var je = Qt(ee);
          try {
            v[L] = je;
          } catch (He) {
            try {
              te(x);
            } finally {
              throw He;
            }
          }
          L++;
        }
      }
      function d(h, p, v) {
        var w = c(
          p,
          v,
          /*Create*/
          !1
        );
        if (b(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var A = s.get(p);
          b(A) || (A.delete(v), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function Te(i) {
      var s = i.defineMetadata, o = i.hasOwnMetadata, c = i.getOwnMetadata, y = i.getOwnMetadataKeys, O = i.deleteMetadata, k = new N(), _ = {
        isProviderFor: function(d, h) {
          var p = k.get(d);
          return !b(p) && p.has(h) ? !0 : y(d, h).length ? (b(p) && (p = new R(), k.set(d, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: y,
        OrdinaryDeleteMetadata: O
      };
      return _;
    }
    function rt(i, s, o) {
      var c = G.getProvider(i, s);
      if (!b(c))
        return c;
      if (o) {
        if (G.setProvider(i, s, tt))
          return tt;
        throw new Error("Illegal state.");
      }
    }
    function Re() {
      var i = {}, s = [], o = (
        /** @class */
        function() {
          function _(d, h, p) {
            this._index = 0, this._keys = d, this._values = h, this._selector = p;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[u] = function() {
            return this;
          }, _.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, _.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, _;
        }()
      ), c = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, _.prototype.set = function(d, h) {
            var p = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, _.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, v = h + 1; v < p; v++)
                this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
              return this._keys.length--, this._values.length--, Ot(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new o(this._keys, this._values, y);
          }, _.prototype.values = function() {
            return new o(this._keys, this._values, O);
          }, _.prototype.entries = function() {
            return new o(this._keys, this._values, k);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(d, h) {
            if (!Ot(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (Ot(this._keys[p], d)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return c;
      function y(_, d) {
        return _;
      }
      function O(_, d) {
        return d;
      }
      function k(_, d) {
        return [_, d];
      }
    }
    function Ne() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new C();
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
    function Le() {
      var i = 16, s = $.create(), o = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? $.has(p, this._key) : !1;
          }, d.prototype.get = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? $.get(p, this._key) : void 0;
          }, d.prototype.set = function(h, p) {
            var v = y(
              h,
              /*create*/
              !0
            );
            return v[this._key] = p, this;
          }, d.prototype.delete = function(h) {
            var p = y(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + _();
        while ($.has(s, d));
        return s[d] = !0, d;
      }
      function y(d, h) {
        if (!n.call(d, o)) {
          if (!h)
            return;
          Object.defineProperty(d, o, { value: $.create() });
        }
        return d[o];
      }
      function O(d, h) {
        for (var p = 0; p < h; ++p)
          d[p] = Math.random() * 255 | 0;
        return d;
      }
      function k(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : O(h, d), h;
        }
        return O(new Array(d), d);
      }
      function _() {
        var d = k(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var v = d[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), v < 16 && (h += "0"), h += v.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function Pt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(ie || (ie = {}));
function Ue(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function ze(r) {
  return function(t) {
    if (Ue(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName,
        layoutKind: r.layoutKind,
        environment: r.environment
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const n = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, t);
          } catch {
            try {
              customElements.define(n, class extends t {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, l);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: e
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Be(r) {
  return ze(r);
}
function Ge(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        re(this, "_stylesApplied", !1);
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
          const $ = new CSSStyleSheet(), m = (E = l.sheet) == null ? void 0 : E.cssRules;
          m && (Array.from(m).forEach((C) => $.insertRule(C.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, $]);
        } else if (l) {
          const $ = l.cloneNode(!0);
          f.appendChild($);
        }
        u.forEach(($) => {
          const m = $.cloneNode(!0);
          f.appendChild(m);
        });
      }
    }
    return e;
  };
}
function We(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ve(r) {
  return function(t, e) {
    try {
      We(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let a = !0;
      if (typeof e == "string") {
        try {
          a = typeof t[e] != "function";
        } catch {
          a = !0;
        }
        a && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function B(r) {
  return Ve(r);
}
var I;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(I || (I = {}));
var H;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(H || (H = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xt = globalThis, Dt = xt.ShadowRoot && (xt.ShadyCSS === void 0 || xt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, It = Symbol(), ae = /* @__PURE__ */ new WeakMap();
let me = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== It) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Dt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = ae.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && ae.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Fe = (r) => new me(typeof r == "string" ? r : r + "", void 0, It), qe = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, a, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + r[l + 1], r[0]);
  return new me(e, r, It);
}, Ye = (r, t) => {
  if (Dt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), a = xt.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = e.cssText, r.appendChild(n);
  }
}, se = Dt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Fe(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ze, defineProperty: Xe, getOwnPropertyDescriptor: Je, getOwnPropertyNames: Qe, getOwnPropertySymbols: Ke, getPrototypeOf: tr } = Object, z = globalThis, oe = z.trustedTypes, er = oe ? oe.emptyScript : "", Tt = z.reactiveElementPolyfillSupport, it = (r, t) => r, Ct = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? er : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, Ut = (r, t) => !Ze(r, t), le = { attribute: !0, type: String, converter: Ct, reflect: !1, useDefault: !1, hasChanged: Ut };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = le) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), a = this.getPropertyDescriptor(t, n, e);
      a !== void 0 && Xe(this.prototype, t, a);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: a, set: l } = Je(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: a, set(u) {
      const g = a == null ? void 0 : a.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? le;
  }
  static _$Ei() {
    if (this.hasOwnProperty(it("elementProperties"))) return;
    const t = tr(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(it("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(it("properties"))) {
      const e = this.properties, n = [...Qe(e), ...Ke(e)];
      for (const a of n) this.createProperty(a, e[a]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, a] of e) this.elementProperties.set(n, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const a = this._$Eu(e, n);
      a !== void 0 && this._$Eh.set(a, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const a of n) e.unshift(se(a));
    } else t !== void 0 && e.push(se(t));
    return e;
  }
  static _$Eu(t, e) {
    const n = e.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const n of e.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ye(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostConnected) == null ? void 0 : n.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostDisconnected) == null ? void 0 : n.call(e);
    });
  }
  attributeChangedCallback(t, e, n) {
    this._$AK(t, n);
  }
  _$ET(t, e) {
    var l;
    const n = this.constructor.elementProperties.get(t), a = this.constructor._$Eu(t, n);
    if (a !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : Ct).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(a) : this.setAttribute(a, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, a = n._$Eh.get(t);
    if (a !== void 0 && this._$Em !== a) {
      const g = n.getPropertyOptions(a), f = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : Ct;
      this._$Em = a;
      const E = f.fromAttribute(e, g.type);
      this[a] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(a)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, a = !1, l) {
    var u;
    if (t !== void 0) {
      const g = this.constructor;
      if (a === !1 && (l = this[t]), n ?? (n = g.getPropertyOptions(t)), !((n.hasChanged ?? Ut)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(g._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: a, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), a === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
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
        const { wrapped: g } = u, f = this[l];
        g !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, u, f);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((a) => {
        var l;
        return (l = a.hostUpdate) == null ? void 0 : l.call(a);
      }), this.update(e)) : this._$EM();
    } catch (a) {
      throw t = !1, this._$EM(), a;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var a;
      return (a = n.hostUpdated) == null ? void 0 : a.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[it("elementProperties")] = /* @__PURE__ */ new Map(), J[it("finalized")] = /* @__PURE__ */ new Map(), Tt == null || Tt({ ReactiveElement: J }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = globalThis, ue = (r) => r, St = at.trustedTypes, ce = St ? St.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, _e = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, we = "?" + U, rr = `<${we}>`, q = document, ot = () => q.createComment(""), lt = (r) => r === null || typeof r != "object" && typeof r != "function", zt = Array.isArray, nr = (r) => zt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Rt = `[ 	
\f\r]`, nt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, de = /-->/g, he = />/g, W = RegExp(`>|${Rt}(?:([^\\s"'>=/]+)(${Rt}*=${Rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), fe = /'/g, pe = /"/g, $e = /^(?:script|style|textarea|title)$/i, ir = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), Nt = ir(1), Q = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), ve = /* @__PURE__ */ new WeakMap(), V = q.createTreeWalker(q, 129);
function Ee(r, t) {
  if (!zt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ce !== void 0 ? ce.createHTML(t) : t;
}
const ar = (r, t) => {
  const e = r.length - 1, n = [];
  let a, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = nt;
  for (let g = 0; g < e; g++) {
    const f = r[g];
    let E, $, m = -1, C = 0;
    for (; C < f.length && (u.lastIndex = C, $ = u.exec(f), $ !== null); ) C = u.lastIndex, u === nt ? $[1] === "!--" ? u = de : $[1] !== void 0 ? u = he : $[2] !== void 0 ? ($e.test($[2]) && (a = RegExp("</" + $[2], "g")), u = W) : $[3] !== void 0 && (u = W) : u === W ? $[0] === ">" ? (u = a ?? nt, m = -1) : $[1] === void 0 ? m = -2 : (m = u.lastIndex - $[2].length, E = $[1], u = $[3] === void 0 ? W : $[3] === '"' ? pe : fe) : u === pe || u === fe ? u = W : u === de || u === he ? u = nt : (u = W, a = void 0);
    const R = u === W && r[g + 1].startsWith("/>") ? " " : "";
    l += u === nt ? f + rr : m >= 0 ? (n.push(E), f.slice(0, m) + _e + f.slice(m) + U + R) : f + U + (m === -2 ? g : R);
  }
  return [Ee(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class ut {
  constructor({ strings: t, _$litType$: e }, n) {
    let a;
    this.parts = [];
    let l = 0, u = 0;
    const g = t.length - 1, f = this.parts, [E, $] = ar(t, e);
    if (this.el = ut.createElement(E, n), V.currentNode = this.el.content, e === 2 || e === 3) {
      const m = this.el.content.firstChild;
      m.replaceWith(...m.childNodes);
    }
    for (; (a = V.nextNode()) !== null && f.length < g; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const m of a.getAttributeNames()) if (m.endsWith(_e)) {
          const C = $[u++], R = a.getAttribute(m).split(U), N = /([.?@])?(.*)/.exec(C);
          f.push({ type: 1, index: l, name: N[2], strings: R, ctor: N[1] === "." ? or : N[1] === "?" ? lr : N[1] === "@" ? ur : kt }), a.removeAttribute(m);
        } else m.startsWith(U) && (f.push({ type: 6, index: l }), a.removeAttribute(m));
        if ($e.test(a.tagName)) {
          const m = a.textContent.split(U), C = m.length - 1;
          if (C > 0) {
            a.textContent = St ? St.emptyScript : "";
            for (let R = 0; R < C; R++) a.append(m[R], ot()), V.nextNode(), f.push({ type: 2, index: ++l });
            a.append(m[C], ot());
          }
        }
      } else if (a.nodeType === 8) if (a.data === we) f.push({ type: 2, index: l });
      else {
        let m = -1;
        for (; (m = a.data.indexOf(U, m + 1)) !== -1; ) f.push({ type: 7, index: l }), m += U.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = q.createElement("template");
    return n.innerHTML = t, n;
  }
}
function K(r, t, e = r, n) {
  var u, g;
  if (t === Q) return t;
  let a = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = lt(t) ? void 0 : t._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((g = a == null ? void 0 : a._$AO) == null || g.call(a, !1), l === void 0 ? a = void 0 : (a = new l(r), a._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = a : e._$Cl = a), a !== void 0 && (t = K(r, a._$AS(r, t.values), a, n)), t;
}
class sr {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: n } = this._$AD, a = ((t == null ? void 0 : t.creationScope) ?? q).importNode(e, !0);
    V.currentNode = a;
    let l = V.nextNode(), u = 0, g = 0, f = n[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let E;
        f.type === 2 ? E = new ct(l, l.nextSibling, this, t) : f.type === 1 ? E = new f.ctor(l, f.name, f.strings, this, t) : f.type === 6 && (E = new cr(l, this, t)), this._$AV.push(E), f = n[++g];
      }
      u !== (f == null ? void 0 : f.index) && (l = V.nextNode(), u++);
    }
    return V.currentNode = q, a;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class ct {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, a) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = a, this._$Cv = (a == null ? void 0 : a.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = K(this, t, e), lt(t) ? t === M || t == null || t === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : t !== this._$AH && t !== Q && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : nr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== M && lt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(q.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, a = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = ut.createElement(Ee(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === a) this._$AH.p(e);
    else {
      const u = new sr(a, this), g = u.u(this.options);
      u.p(e), this.T(g), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ve.get(t.strings);
    return e === void 0 && ve.set(t.strings, e = new ut(t)), e;
  }
  k(t) {
    zt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, a = 0;
    for (const l of t) a === e.length ? e.push(n = new ct(this.O(ot()), this.O(ot()), this, this.options)) : n = e[a], n._$AI(l), a++;
    a < e.length && (this._$AR(n && n._$AB.nextSibling, a), e.length = a);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const a = ue(t).nextSibling;
      ue(t).remove(), t = a;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class kt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, a, l) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = t, this.name = e, this._$AM = a, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = M;
  }
  _$AI(t, e = this, n, a) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = K(this, t, e, 0), u = !lt(t) || t !== this._$AH && t !== Q, u && (this._$AH = t);
    else {
      const g = t;
      let f, E;
      for (t = l[0], f = 0; f < l.length - 1; f++) E = K(this, g[n + f], e, f), E === Q && (E = this._$AH[f]), u || (u = !lt(E) || E !== this._$AH[f]), E === M ? t = M : t !== M && (t += (E ?? "") + l[f + 1]), this._$AH[f] = E;
    }
    u && !a && this.j(t);
  }
  j(t) {
    t === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class or extends kt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === M ? void 0 : t;
  }
}
class lr extends kt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== M);
  }
}
class ur extends kt {
  constructor(t, e, n, a, l) {
    super(t, e, n, a, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = K(this, t, e, 0) ?? M) === Q) return;
    const n = this._$AH, a = t === M && n !== M || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== M && (n === M || a);
    a && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class cr {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    K(this, t);
  }
}
const Lt = at.litHtmlPolyfillSupport;
Lt == null || Lt(ut, ct), (at.litHtmlVersions ?? (at.litHtmlVersions = [])).push("3.3.3");
const dr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let a = n._$litPart$;
  if (a === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = a = new ct(t.insertBefore(ot(), l), l, void 0, e ?? {});
  }
  return a._$AI(r), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F = globalThis;
class st extends J {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = dr(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return Q;
  }
}
var be;
st._$litElement$ = !0, st.finalized = !0, (be = F.litElementHydrateSupport) == null || be.call(F, { LitElement: st });
const jt = F.litElementPolyfillSupport;
jt == null || jt({ LitElement: st });
(F.litElementVersions ?? (F.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: Ct, reflect: !1, hasChanged: Ut }, fr = (r = hr, t, e) => {
  const { kind: n, metadata: a } = e;
  let l = globalThis.litPropertyMetadata.get(a);
  if (l === void 0 && globalThis.litPropertyMetadata.set(a, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(g) {
      const f = t.get.call(this);
      t.set.call(this, g), this.requestUpdate(u, f, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(u, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(g) {
      const f = this[u];
      t.call(this, g), this.requestUpdate(u, f, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Y(r) {
  return (t, e) => typeof e == "object" ? fr(r, t, e) : ((n, a, l) => {
    const u = a.hasOwnProperty(l);
    return a.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(a, l) : void 0;
  })(r, t, e);
}
var pr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, T = (r, t, e, n) => {
  for (var a = n > 1 ? void 0 : n ? vr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (a = (n ? u(t, e, a) : u(a)) || a);
  return n && a && pr(t, e, a), a;
};
const ye = {
  kind: "generic",
  templateHtml: [
    "<nav style='display:flex;align-items:center;justify-content:space-between;gap:24px;padding:14px 24px;background:#ffffff;border-bottom:1px solid #e5e7eb;font-family:inherit;box-sizing:border-box;'>",
    "<div style='font-weight:800;font-size:18px;color:#111827;'>{{display:brand}}</div>",
    "<div style='display:flex;gap:20px;font-size:14px;color:#4b5563;'>",
    "<span>Home</span><span>Features</span><span>Pricing</span>",
    "</div>",
    "<div style='background:#6366f1;color:#fff;padding:8px 16px;border-radius:8px;font-size:13px;font-weight:600;'>Get Started</div>",
    "</nav>"
  ].join(""),
  labelProp: "brand",
  badges: ["Navigation", "Layout"]
};
function Ht(r) {
  return String(r).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function ge(r, t) {
  if (!r) return t;
  try {
    const e = JSON.parse(r);
    return Array.isArray(e) ? e.filter((n) => n && typeof n.label == "string") : t;
  } catch {
    return t;
  }
}
let P = class extends st {
  constructor() {
    super(...arguments), this.brand = "Brand", this.links = '[{"label":"Home","href":"#"},{"label":"Features","href":"#features"},{"label":"Pricing","href":"#pricing"},{"label":"Docs","href":"#docs"}]', this.alignment = "right", this.variant = "solid", this.sticky = !1, this.showCta = !0, this.ctaLabel = "Get Started";
  }
  static getStudioTemplate(r) {
    var N, D, G, tt, dt, ht, ft, pt, vt, yt, gt, bt, mt, _t, wt, $t, et, Z;
    if (!r) return ye;
    const t = Ht(((N = r.props) == null ? void 0 : N.brand) ?? ((G = (D = r.studio) == null ? void 0 : D.props) == null ? void 0 : G.brand) ?? "Brand"), e = (((tt = r.props) == null ? void 0 : tt.variant) ?? ((ht = (dt = r.studio) == null ? void 0 : dt.props) == null ? void 0 : ht.variant)) || "solid", n = (((ft = r.props) == null ? void 0 : ft.alignment) ?? ((vt = (pt = r.studio) == null ? void 0 : pt.props) == null ? void 0 : vt.alignment)) || "right", a = ((yt = r.props) == null ? void 0 : yt.showCta) ?? ((bt = (gt = r.studio) == null ? void 0 : gt.props) == null ? void 0 : bt.showCta) ?? !0, l = Ht(((mt = r.props) == null ? void 0 : mt.ctaLabel) ?? ((wt = (_t = r.studio) == null ? void 0 : _t.props) == null ? void 0 : wt.ctaLabel) ?? "Get Started"), u = ge(
      (($t = r.props) == null ? void 0 : $t.links) ?? ((Z = (et = r.studio) == null ? void 0 : et.props) == null ? void 0 : Z.links),
      [{ label: "Home" }, { label: "Features" }, { label: "Pricing" }]
    );
    let g = "var(--uiv-surface-color, #ffffff)", f = "1px solid var(--uiv-border-color, #e5e7eb)", E = "none", $ = "";
    e === "glass" ? (g = "rgba(255,255,255,0.6)", f = "1px solid rgba(255,255,255,0.35)", $ = "backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);", E = "0 4px 24px rgba(0,0,0,0.06)") : e === "transparent" ? (g = "transparent", f = "1px solid transparent") : e === "elevated" && (E = "var(--uiv-shadow-depth, 0 8px 24px rgba(0,0,0,0.08))", f = "1px solid transparent");
    const m = n === "left" ? "flex-start" : n === "center" ? "center" : "flex-end", C = u.map(
      (Et) => `<span style='font-size:14px;color:var(--uiv-text-muted, #4b5563);cursor:pointer;'>${Ht(Et.label)}</span>`
    ).join(""), R = a ? `<div style='background:var(--uiv-primary-color, #6366f1);color:#fff;padding:8px 16px;border-radius:var(--uiv-border-radius, 8px);font-size:13px;font-weight:600;white-space:nowrap;'>${l}</div>` : "";
    return {
      ...ye,
      templateHtml: [
        `<nav style='display:flex;align-items:center;gap:24px;padding:14px 24px;background:${g};border-bottom:${f};box-shadow:${E};${$}font-family:inherit;box-sizing:border-box;'>`,
        `<div style='font-weight:800;font-size:18px;color:var(--uiv-text-color, #111827);'>${t}</div>`,
        `<div style='display:flex;flex:1;gap:20px;justify-content:${m};'>${C}</div>`,
        R,
        "</nav>"
      ].join("")
    };
  }
  get brandConfig() {
    return this.brand;
  }
  set brandConfig(r) {
    this.brand = r;
  }
  get linksConfig() {
    return this.links;
  }
  set linksConfig(r) {
    this.links = r;
  }
  get alignmentConfig() {
    return this.alignment;
  }
  set alignmentConfig(r) {
    this.alignment = r || "right";
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(r) {
    this.variant = r || "solid";
  }
  get stickyConfig() {
    return this.sticky;
  }
  set stickyConfig(r) {
    this.sticky = !!r;
  }
  get showCtaConfig() {
    return this.showCta;
  }
  set showCtaConfig(r) {
    this.showCta = !!r;
  }
  get ctaLabelConfig() {
    return this.ctaLabel;
  }
  set ctaLabelConfig(r) {
    this.ctaLabel = r;
  }
  parseLinks() {
    return ge(this.links, []);
  }
  handleLinkClick(r, t) {
    t.preventDefault(), this.dispatchEvent(
      new CustomEvent("on-link-click", {
        detail: { label: r.label, href: r.href ?? "", target: r.target ?? "" },
        bubbles: !0,
        composed: !0
      })
    );
  }
  handleCtaClick() {
    this.dispatchEvent(
      new CustomEvent("on-link-click", {
        detail: { label: this.ctaLabel, href: "", target: "cta" },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const r = this.parseLinks();
    return Nt`
      <nav class="variant-${this.variant}">
        <div class="brand">${this.brand}</div>
        <div class="links align-${this.alignment}">
          ${r.map(
      (t) => Nt`
              <a
                class="nav-link"
                href=${t.href ?? "#"}
                target=${t.target ?? "_self"}
                @click=${(e) => this.handleLinkClick(t, e)}
                >${t.label}</a
              >
            `
    )}
        </div>
        ${this.showCta ? Nt`<button class="cta" @click=${this.handleCtaClick}>${this.ctaLabel}</button>` : ""}
      </nav>
    `;
  }
};
P.styles = qe`
    :host {
      display: block;
      width: 100%;
      --nav-p: var(--uiv-primary-color, #6366f1);
      --nav-bg: var(--uiv-surface-color, #ffffff);
      --nav-text: var(--uiv-text-color, #111827);
      --nav-muted: var(--uiv-text-muted, #4b5563);
      --nav-border: var(--uiv-border-color, #e5e7eb);
      --nav-radius: var(--uiv-border-radius, 8px);
    }

    :host([sticky]) nav {
      position: sticky;
      top: 0;
      z-index: 50;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 14px 24px;
      background: var(--nav-bg);
      border-bottom: 1px solid var(--nav-border);
      box-sizing: border-box;
      font-family: inherit;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .brand {
      font-weight: 800;
      font-size: 1.15rem;
      letter-spacing: -0.02em;
      color: var(--nav-text);
      white-space: nowrap;
    }

    .links {
      display: flex;
      flex: 1;
      align-items: center;
      gap: 22px;
      flex-wrap: wrap;
    }
    .links.align-left { justify-content: flex-start; }
    .links.align-center { justify-content: center; }
    .links.align-right { justify-content: flex-end; }

    .nav-link {
      position: relative;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--nav-muted);
      text-decoration: none;
      cursor: pointer;
      transition: color 0.2s ease;
      background: none;
      border: none;
      font-family: inherit;
      padding: 4px 0;
    }
    .nav-link::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      background: var(--nav-p);
      border-radius: 2px;
      transition: width 0.25s ease;
    }
    .nav-link:hover {
      color: var(--nav-text);
    }
    .nav-link:hover::after {
      width: 100%;
    }

    .cta {
      background: var(--nav-p);
      color: #ffffff;
      border: none;
      padding: 9px 18px;
      border-radius: var(--nav-radius);
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      white-space: nowrap;
      transition: all 0.2s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    }
    .cta:hover {
      filter: brightness(1.1);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);
    }

    /* Variants */
    .variant-solid nav,
    nav.variant-solid {
      background: var(--nav-bg);
      border-bottom: 1px solid var(--nav-border);
    }
    nav.variant-glass {
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.35);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    }
    nav.variant-transparent {
      background: transparent;
      border-bottom: 1px solid transparent;
    }
    nav.variant-elevated {
      background: var(--nav-bg);
      border-bottom: 1px solid transparent;
      box-shadow: var(--uiv-shadow-depth, 0 8px 24px rgba(0, 0, 0, 0.08));
    }

    @media (max-width: 720px) {
      nav {
        flex-wrap: wrap;
        gap: 12px;
      }
      .links {
        order: 3;
        width: 100%;
        gap: 16px;
        justify-content: flex-start !important;
      }
    }
  `;
T([
  Y({ type: String })
], P.prototype, "brand", 2);
T([
  Y({ type: String })
], P.prototype, "links", 2);
T([
  Y({ type: String })
], P.prototype, "alignment", 2);
T([
  Y({ type: String })
], P.prototype, "variant", 2);
T([
  Y({ type: Boolean, reflect: !0 })
], P.prototype, "sticky", 2);
T([
  Y({ type: Boolean, attribute: "show-cta" })
], P.prototype, "showCta", 2);
T([
  Y({ type: String, attribute: "cta-label" })
], P.prototype, "ctaLabel", 2);
T([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Brand / Logo Text",
    fieldMappings: "brand"
  })
], P.prototype, "brandConfig", 1);
T([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: I.TEXTAREA,
    displayLabel: "Links (JSON array of {label, href, target})",
    fieldMappings: "links"
  })
], P.prototype, "linksConfig", 1);
T([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: I.DROPDOWN,
    displayLabel: "Links Alignment",
    fieldMappings: "alignment",
    optionItems: [
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" }
    ]
  })
], P.prototype, "alignmentConfig", 1);
T([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: I.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Solid", value: "solid" },
      { label: "Glassmorphism", value: "glass" },
      { label: "Transparent", value: "transparent" },
      { label: "Elevated", value: "elevated" }
    ]
  })
], P.prototype, "variantConfig", 1);
T([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Sticky (pin to top)",
    fieldMappings: "sticky"
  })
], P.prototype, "stickyConfig", 1);
T([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: I.CHECKBOX,
    displayLabel: "Show CTA Button",
    fieldMappings: "showCta"
  })
], P.prototype, "showCtaConfig", 1);
T([
  B({
    attributeType: H.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "CTA Button Label",
    fieldMappings: "ctaLabel"
  })
], P.prototype, "ctaLabelConfig", 1);
T([
  B({
    attributeType: H.EVENT,
    displayLabel: "On Link Click",
    eventTrigger: "on-link-click"
  })
], P.prototype, "handleLinkClick", 1);
P = T([
  Be({
    name: "zero-navbar",
    version: "1.0.0",
    title: "Navbar",
    elementSelector: "zero-navbar",
    group: "Navigation",
    iconName: "navbar-icon.png"
  }),
  Ge()
], P);
export {
  P as ZeroNavbar,
  ye as studioTemplate
};
