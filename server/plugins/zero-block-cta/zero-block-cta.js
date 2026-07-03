var Ie = Object.defineProperty;
var De = (r, t, e) => t in r ? Ie(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var re = (r, t, e) => De(r, typeof t != "symbol" ? t + "" : t, e);
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
    var e = typeof globalThis == "object" ? globalThis : typeof ne == "object" ? ne : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(f, E) {
      return function(w, b) {
        Object.defineProperty(f, w, { configurable: !0, writable: !0, value: b }), E && E(w, b);
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
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, E = !m && !f, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return Rt(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return Rt({ __proto__: null });
      } : function() {
        return Rt({});
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
    }, b = Object.getPrototypeOf(Function), A = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pe(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Re(), U = typeof WeakMap == "function" ? WeakMap : ke(), j = s ? Symbol.for("@reflect-metadata:registry") : void 0, V = Ce(), et = Oe(V);
    function pt(i, a, o, d) {
      if (_(o)) {
        if (!Yt(i))
          throw new TypeError();
        if (!Zt(a))
          throw new TypeError();
        return Et(i, a);
      } else {
        if (!Yt(i))
          throw new TypeError();
        if (!C(a))
          throw new TypeError();
        if (!C(d) && !_(d) && !J(d))
          throw new TypeError();
        return J(d) && (d = void 0), o = D(o), xt(i, a, o, d);
      }
    }
    t("decorate", pt);
    function ft(i, a) {
      function o(d, v) {
        if (!C(d))
          throw new TypeError();
        if (!_(v) && !Ae(v))
          throw new TypeError();
        Gt(i, a, d, v);
      }
      return o;
    }
    t("metadata", ft);
    function yt(i, a, o, d) {
      if (!C(o))
        throw new TypeError();
      return _(d) || (d = D(d)), Gt(i, a, o, d);
    }
    t("defineMetadata", yt);
    function vt(i, a, o) {
      if (!C(a))
        throw new TypeError();
      return _(o) || (o = D(o)), rt(i, a, o);
    }
    t("hasMetadata", vt);
    function mt(i, a, o) {
      if (!C(a))
        throw new TypeError();
      return _(o) || (o = D(o)), X(i, a, o);
    }
    t("hasOwnMetadata", mt);
    function _t(i, a, o) {
      if (!C(a))
        throw new TypeError();
      return _(o) || (o = D(o)), nt(i, a, o);
    }
    t("getMetadata", _t);
    function bt(i, a, o) {
      if (!C(a))
        throw new TypeError();
      return _(o) || (o = D(o)), Bt(i, a, o);
    }
    t("getOwnMetadata", bt);
    function gt(i, a) {
      if (!C(i))
        throw new TypeError();
      return _(a) || (a = D(a)), Wt(i, a);
    }
    t("getMetadataKeys", gt);
    function $t(i, a) {
      if (!C(i))
        throw new TypeError();
      return _(a) || (a = D(a)), Vt(i, a);
    }
    t("getOwnMetadataKeys", $t);
    function wt(i, a, o) {
      if (!C(a))
        throw new TypeError();
      if (_(o) || (o = D(o)), !C(a))
        throw new TypeError();
      _(o) || (o = D(o));
      var d = it(
        a,
        o,
        /*Create*/
        !1
      );
      return _(d) ? !1 : d.OrdinaryDeleteMetadata(i, a, o);
    }
    t("deleteMetadata", wt);
    function Et(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var d = i[o], v = d(a);
        if (!_(v) && !J(v)) {
          if (!Zt(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function xt(i, a, o, d) {
      for (var v = i.length - 1; v >= 0; --v) {
        var M = i[v], O = M(a, o, d);
        if (!_(O) && !J(O)) {
          if (!C(O))
            throw new TypeError();
          d = O;
        }
      }
      return d;
    }
    function rt(i, a, o) {
      var d = X(i, a, o);
      if (d)
        return !0;
      var v = Pt(a);
      return J(v) ? !1 : rt(i, v, o);
    }
    function X(i, a, o) {
      var d = it(
        a,
        o,
        /*Create*/
        !1
      );
      return _(d) ? !1 : qt(d.OrdinaryHasOwnMetadata(i, a, o));
    }
    function nt(i, a, o) {
      var d = X(i, a, o);
      if (d)
        return Bt(i, a, o);
      var v = Pt(a);
      if (!J(v))
        return nt(i, v, o);
    }
    function Bt(i, a, o) {
      var d = it(
        a,
        o,
        /*Create*/
        !1
      );
      if (!_(d))
        return d.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Gt(i, a, o, d) {
      var v = it(
        o,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, o, d);
    }
    function Wt(i, a) {
      var o = Vt(i, a), d = Pt(i);
      if (d === null)
        return o;
      var v = Wt(d, a);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var M = new k(), O = [], g = 0, h = o; g < h.length; g++) {
        var c = h[g], p = M.has(c);
        p || (M.add(c), O.push(c));
      }
      for (var y = 0, $ = v; y < $.length; y++) {
        var c = $[y], p = M.has(c);
        p || (M.add(c), O.push(c));
      }
      return O;
    }
    function Vt(i, a) {
      var o = it(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
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
    function _(i) {
      return i === void 0;
    }
    function J(i) {
      return i === null;
    }
    function we(i) {
      return typeof i == "symbol";
    }
    function C(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ee(i, a) {
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
      var o = "string", d = Xt(i, l);
      if (d !== void 0) {
        var v = d.call(i, o);
        if (C(v))
          throw new TypeError();
        return v;
      }
      return xe(i);
    }
    function xe(i, a) {
      var o, d;
      {
        var v = i.toString;
        if (St(v)) {
          var d = v.call(i);
          if (!C(d))
            return d;
        }
        var o = i.valueOf;
        if (St(o)) {
          var d = o.call(i);
          if (!C(d))
            return d;
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
    function D(i) {
      var a = Ee(i);
      return we(a) ? a : Se(a);
    }
    function Yt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function St(i) {
      return typeof i == "function";
    }
    function Zt(i) {
      return typeof i == "function";
    }
    function Ae(i) {
      switch (Ft(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Mt(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Xt(i, a) {
      var o = i[a];
      if (o != null) {
        if (!St(o))
          throw new TypeError();
        return o;
      }
    }
    function Jt(i) {
      var a = Xt(i, u);
      if (!St(a))
        throw new TypeError();
      var o = a.call(i);
      if (!C(o))
        throw new TypeError();
      return o;
    }
    function Qt(i) {
      return i.value;
    }
    function Kt(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function te(i) {
      var a = i.return;
      a && a.call(i);
    }
    function Pt(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || a !== b)
        return a;
      var o = i.prototype, d = o && Object.getPrototypeOf(o);
      if (d == null || d === Object.prototype)
        return a;
      var v = d.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function Te() {
      var i;
      !_(j) && typeof e.Reflect < "u" && !(j in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Me(e.Reflect));
      var a, o, d, v = new U(), M = {
        registerProvider: O,
        getProvider: h,
        setProvider: p
      };
      return M;
      function O(y) {
        if (!Object.isExtensible(M))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case _(a):
            a = y;
            break;
          case a === y:
            break;
          case _(o):
            o = y;
            break;
          case o === y:
            break;
          default:
            d === void 0 && (d = new k()), d.add(y);
            break;
        }
      }
      function g(y, $) {
        if (!_(a)) {
          if (a.isProviderFor(y, $))
            return a;
          if (!_(o)) {
            if (o.isProviderFor(y, $))
              return a;
            if (!_(d))
              for (var x = Jt(d); ; ) {
                var S = Kt(x);
                if (!S)
                  return;
                var N = Qt(S);
                if (N.isProviderFor(y, $))
                  return te(x), N;
              }
          }
        }
        if (!_(i) && i.isProviderFor(y, $))
          return i;
      }
      function h(y, $) {
        var x = v.get(y), S;
        return _(x) || (S = x.get($)), _(S) && (S = g(y, $), _(S) || (_(x) && (x = new A(), v.set(y, x)), x.set($, S))), S;
      }
      function c(y) {
        if (_(y))
          throw new TypeError();
        return a === y || o === y || !_(d) && d.has(y);
      }
      function p(y, $, x) {
        if (!c(x))
          throw new Error("Metadata provider not registered.");
        var S = h(y, $);
        if (S !== x) {
          if (!_(S))
            return !1;
          var N = v.get(y);
          _(N) && (N = new A(), v.set(y, N)), N.set($, x);
        }
        return !0;
      }
    }
    function Ce() {
      var i;
      return !_(j) && C(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[j]), _(i) && (i = Te()), !_(j) && C(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, j, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Oe(i) {
      var a = new U(), o = {
        isProviderFor: function(c, p) {
          var y = a.get(c);
          return _(y) ? !1 : y.has(p);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: h
      };
      return V.registerProvider(o), o;
      function d(c, p, y) {
        var $ = a.get(c), x = !1;
        if (_($)) {
          if (!y)
            return;
          $ = new A(), a.set(c, $), x = !0;
        }
        var S = $.get(p);
        if (_(S)) {
          if (!y)
            return;
          if (S = new A(), $.set(p, S), !i.setProvider(c, p, o))
            throw $.delete(p), x && a.delete(c), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(c, p, y) {
        var $ = d(
          p,
          y,
          /*Create*/
          !1
        );
        return _($) ? !1 : qt($.has(c));
      }
      function M(c, p, y) {
        var $ = d(
          p,
          y,
          /*Create*/
          !1
        );
        if (!_($))
          return $.get(c);
      }
      function O(c, p, y, $) {
        var x = d(
          y,
          $,
          /*Create*/
          !0
        );
        x.set(c, p);
      }
      function g(c, p) {
        var y = [], $ = d(
          c,
          p,
          /*Create*/
          !1
        );
        if (_($))
          return y;
        for (var x = $.keys(), S = Jt(x), N = 0; ; ) {
          var ee = Kt(S);
          if (!ee)
            return y.length = N, y;
          var Ue = Qt(ee);
          try {
            y[N] = Ue;
          } catch (Ne) {
            try {
              te(S);
            } finally {
              throw Ne;
            }
          }
          N++;
        }
      }
      function h(c, p, y) {
        var $ = d(
          p,
          y,
          /*Create*/
          !1
        );
        if (_($) || !$.delete(c))
          return !1;
        if ($.size === 0) {
          var x = a.get(p);
          _(x) || (x.delete(y), x.size === 0 && a.delete(x));
        }
        return !0;
      }
    }
    function Me(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, d = i.getOwnMetadata, v = i.getOwnMetadataKeys, M = i.deleteMetadata, O = new U(), g = {
        isProviderFor: function(h, c) {
          var p = O.get(h);
          return !_(p) && p.has(c) ? !0 : v(h, c).length ? (_(p) && (p = new k(), O.set(h, p)), p.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: M
      };
      return g;
    }
    function it(i, a, o) {
      var d = V.getProvider(i, a);
      if (!_(d))
        return d;
      if (o) {
        if (V.setProvider(i, a, et))
          return et;
        throw new Error("Illegal state.");
      }
    }
    function Pe() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function g(h, c, p) {
            this._index = 0, this._keys = h, this._values = c, this._selector = p;
          }
          return g.prototype["@@iterator"] = function() {
            return this;
          }, g.prototype[u] = function() {
            return this;
          }, g.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var c = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: c, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, g.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), h;
          }, g.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: h, done: !0 };
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
          }), g.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, g.prototype.get = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            return c >= 0 ? this._values[c] : void 0;
          }, g.prototype.set = function(h, c) {
            var p = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[p] = c, this;
          }, g.prototype.delete = function(h) {
            var c = this._find(
              h,
              /*insert*/
              !1
            );
            if (c >= 0) {
              for (var p = this._keys.length, y = c + 1; y < p; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, Mt(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, g.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, g.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, g.prototype.values = function() {
            return new o(this._keys, this._values, M);
          }, g.prototype.entries = function() {
            return new o(this._keys, this._values, O);
          }, g.prototype["@@iterator"] = function() {
            return this.entries();
          }, g.prototype[u] = function() {
            return this.entries();
          }, g.prototype._find = function(h, c) {
            if (!Mt(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (Mt(this._keys[p], h)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, g;
        }()
      );
      return d;
      function v(g, h) {
        return g;
      }
      function M(g, h) {
        return h;
      }
      function O(g, h) {
        return [g, h];
      }
    }
    function Re() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new A();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(o) {
            return this._map.has(o);
          }, a.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, a.prototype.delete = function(o) {
            return this._map.delete(o);
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
    function ke() {
      var i = 16, a = w.create(), o = d();
      return (
        /** @class */
        function() {
          function h() {
            this._key = d();
          }
          return h.prototype.has = function(c) {
            var p = v(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? w.has(p, this._key) : !1;
          }, h.prototype.get = function(c) {
            var p = v(
              c,
              /*create*/
              !1
            );
            return p !== void 0 ? w.get(p, this._key) : void 0;
          }, h.prototype.set = function(c, p) {
            var y = v(
              c,
              /*create*/
              !0
            );
            return y[this._key] = p, this;
          }, h.prototype.delete = function(c) {
            var p = v(
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
          h = "@@WeakMap@@" + g();
        while (w.has(a, h));
        return a[h] = !0, h;
      }
      function v(h, c) {
        if (!n.call(h, o)) {
          if (!c)
            return;
          Object.defineProperty(h, o, { value: w.create() });
        }
        return h[o];
      }
      function M(h, c) {
        for (var p = 0; p < c; ++p)
          h[p] = Math.random() * 255 | 0;
        return h;
      }
      function O(h) {
        if (typeof Uint8Array == "function") {
          var c = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : M(c, h), c;
        }
        return M(new Array(h), h);
      }
      function g() {
        var h = O(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var c = "", p = 0; p < i; ++p) {
          var y = h[p];
          (p === 4 || p === 6 || p === 8) && (c += "-"), y < 16 && (c += "0"), c += y.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function Rt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(ie || (ie = {}));
function He(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function je(r) {
  return function(t) {
    if (He(r)) {
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
function Le(r) {
  return je(r);
}
function ze(r) {
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const w = new CSSStyleSheet(), b = (E = l.sheet) == null ? void 0 : E.cssRules;
          b && (Array.from(b).forEach((A) => w.insertRule(A.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          f.appendChild(w);
        }
        u.forEach((w) => {
          const b = w.cloneNode(!0);
          f.appendChild(b);
        });
      }
    }
    return e;
  };
}
function Be(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ge(r) {
  return function(t, e) {
    try {
      Be(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function L(r) {
  return Ge(r);
}
var H;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(H || (H = {}));
var I;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(I || (I = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const At = globalThis, Ht = At.ShadowRoot && (At.ShadyCSS === void 0 || At.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, jt = Symbol(), se = /* @__PURE__ */ new WeakMap();
let me = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== jt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Ht && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = se.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && se.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const We = (r) => new me(typeof r == "string" ? r : r + "", void 0, jt), Ve = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new me(e, r, jt);
}, Fe = (r, t) => {
  if (Ht) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = At.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, ae = Ht ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return We(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qe, defineProperty: Ye, getOwnPropertyDescriptor: Ze, getOwnPropertyNames: Xe, getOwnPropertySymbols: Je, getPrototypeOf: Qe } = Object, G = globalThis, oe = G.trustedTypes, Ke = oe ? oe.emptyScript : "", kt = G.reactiveElementPolyfillSupport, at = (r, t) => r, Tt = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Ke : null;
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
} }, Lt = (r, t) => !qe(r, t), le = { attribute: !0, type: String, converter: Tt, reflect: !1, useDefault: !1, hasChanged: Lt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), G.litPropertyMetadata ?? (G.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Q = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = le) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Ye(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: l } = Ze(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? le;
  }
  static _$Ei() {
    if (this.hasOwnProperty(at("elementProperties"))) return;
    const t = Qe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(at("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(at("properties"))) {
      const e = this.properties, n = [...Xe(e), ...Je(e)];
      for (const s of n) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, s] of e) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const s = this._$Eu(e, n);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const s of n) e.unshift(ae(s));
    } else t !== void 0 && e.push(ae(t));
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
    return Fe(t, this.constructor.elementStyles), t;
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
    const n = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : Tt).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const m = n.getPropertyOptions(s), f = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : Tt;
      this._$Em = s;
      const E = f.fromAttribute(e, m.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = m.getPropertyOptions(t)), !((n.hasChanged ?? Lt)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(m._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: m } = u, f = this[l];
        m !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, u, f);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
Q.elementStyles = [], Q.shadowRootOptions = { mode: "open" }, Q[at("elementProperties")] = /* @__PURE__ */ new Map(), Q[at("finalized")] = /* @__PURE__ */ new Map(), kt == null || kt({ ReactiveElement: Q }), (G.reactiveElementVersions ?? (G.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot = globalThis, ue = (r) => r, Ct = ot.trustedTypes, de = Ct ? Ct.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, _e = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, be = "?" + B, tr = `<${be}>`, Z = document, ut = () => Z.createComment(""), dt = (r) => r === null || typeof r != "object" && typeof r != "function", zt = Array.isArray, er = (r) => zt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Ut = `[ 	
\f\r]`, st = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, he = /-->/g, ce = />/g, F = RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), pe = /'/g, fe = /"/g, ge = /^(?:script|style|textarea|title)$/i, rr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), Nt = rr(1), K = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), ye = /* @__PURE__ */ new WeakMap(), q = Z.createTreeWalker(Z, 129);
function $e(r, t) {
  if (!zt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return de !== void 0 ? de.createHTML(t) : t;
}
const nr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = st;
  for (let m = 0; m < e; m++) {
    const f = r[m];
    let E, w, b = -1, A = 0;
    for (; A < f.length && (u.lastIndex = A, w = u.exec(f), w !== null); ) A = u.lastIndex, u === st ? w[1] === "!--" ? u = he : w[1] !== void 0 ? u = ce : w[2] !== void 0 ? (ge.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = F) : w[3] !== void 0 && (u = F) : u === F ? w[0] === ">" ? (u = s ?? st, b = -1) : w[1] === void 0 ? b = -2 : (b = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? F : w[3] === '"' ? fe : pe) : u === fe || u === pe ? u = F : u === he || u === ce ? u = st : (u = F, s = void 0);
    const k = u === F && r[m + 1].startsWith("/>") ? " " : "";
    l += u === st ? f + tr : b >= 0 ? (n.push(E), f.slice(0, b) + _e + f.slice(b) + B + k) : f + B + (b === -2 ? m : k);
  }
  return [$e(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class ht {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = t.length - 1, f = this.parts, [E, w] = nr(t, e);
    if (this.el = ht.createElement(E, n), q.currentNode = this.el.content, e === 2 || e === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (s = q.nextNode()) !== null && f.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const b of s.getAttributeNames()) if (b.endsWith(_e)) {
          const A = w[u++], k = s.getAttribute(b).split(B), U = /([.?@])?(.*)/.exec(A);
          f.push({ type: 1, index: l, name: U[2], strings: k, ctor: U[1] === "." ? sr : U[1] === "?" ? ar : U[1] === "@" ? or : Ot }), s.removeAttribute(b);
        } else b.startsWith(B) && (f.push({ type: 6, index: l }), s.removeAttribute(b));
        if (ge.test(s.tagName)) {
          const b = s.textContent.split(B), A = b.length - 1;
          if (A > 0) {
            s.textContent = Ct ? Ct.emptyScript : "";
            for (let k = 0; k < A; k++) s.append(b[k], ut()), q.nextNode(), f.push({ type: 2, index: ++l });
            s.append(b[A], ut());
          }
        }
      } else if (s.nodeType === 8) if (s.data === be) f.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = s.data.indexOf(B, b + 1)) !== -1; ) f.push({ type: 7, index: l }), b += B.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = Z.createElement("template");
    return n.innerHTML = t, n;
  }
}
function tt(r, t, e = r, n) {
  var u, m;
  if (t === K) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = dt(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = tt(r, s._$AS(r, t.values), s, n)), t;
}
class ir {
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? Z).importNode(e, !0);
    q.currentNode = s;
    let l = q.nextNode(), u = 0, m = 0, f = n[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let E;
        f.type === 2 ? E = new ct(l, l.nextSibling, this, t) : f.type === 1 ? E = new f.ctor(l, f.name, f.strings, this, t) : f.type === 6 && (E = new lr(l, this, t)), this._$AV.push(E), f = n[++m];
      }
      u !== (f == null ? void 0 : f.index) && (l = q.nextNode(), u++);
    }
    return q.currentNode = Z, s;
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
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = tt(this, t, e), dt(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== K && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : er(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && dt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Z.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = ht.createElement($e(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new ir(s, this), m = u.u(this.options);
      u.p(e), this.T(m), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ye.get(t.strings);
    return e === void 0 && ye.set(t.strings, e = new ht(t)), e;
  }
  k(t) {
    zt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new ct(this.O(ut()), this.O(ut()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = ue(t).nextSibling;
      ue(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class Ot {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = tt(this, t, e, 0), u = !dt(t) || t !== this._$AH && t !== K, u && (this._$AH = t);
    else {
      const m = t;
      let f, E;
      for (t = l[0], f = 0; f < l.length - 1; f++) E = tt(this, m[n + f], e, f), E === K && (E = this._$AH[f]), u || (u = !dt(E) || E !== this._$AH[f]), E === P ? t = P : t !== P && (t += (E ?? "") + l[f + 1]), this._$AH[f] = E;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sr extends Ot {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class ar extends Ot {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class or extends Ot {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = tt(this, t, e, 0) ?? P) === K) return;
    const n = this._$AH, s = t === P && n !== P || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== P && (n === P || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class lr {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    tt(this, t);
  }
}
const It = ot.litHtmlPolyfillSupport;
It == null || It(ht, ct), (ot.litHtmlVersions ?? (ot.litHtmlVersions = [])).push("3.3.3");
const ur = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new ct(t.insertBefore(ut(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis;
class lt extends Q {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ur(e, this.renderRoot, this.renderOptions);
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
    return K;
  }
}
var ve;
lt._$litElement$ = !0, lt.finalized = !0, (ve = Y.litElementHydrateSupport) == null || ve.call(Y, { LitElement: lt });
const Dt = Y.litElementPolyfillSupport;
Dt == null || Dt({ LitElement: lt });
(Y.litElementVersions ?? (Y.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: Tt, reflect: !1, hasChanged: Lt }, hr = (r = dr, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(m) {
      const f = t.get.call(this);
      t.set.call(this, m), this.requestUpdate(u, f, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(m) {
      const f = this[u];
      t.call(this, m), this.requestUpdate(u, f, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function W(r) {
  return (t, e) => typeof e == "object" ? hr(r, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var cr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, R = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? pr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && cr(t, e, s), s;
};
const mr = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#f3f4f6;text-align:center;border-radius:12px;font-family:inherit;'>",
    "<h2 style='font-size:24px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:14px;color:#4b5563;max-width:500px;margin:0 auto 20px;'>{{props:lead}}</p>",
    "<div style='display:flex;justify-content:center;gap:8px;'>",
    "<input type='text' placeholder='Enter your email' style='padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;outline:none;' disabled>",
    "<span style='padding:8px 16px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-size:13px;font-weight:600;'>Subscribe</span>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "CTA"]
};
function z(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let T = class extends lt {
  constructor() {
    super(...arguments), this.title = "Stay Updated with Us", this.lead = "Join our newsletter registry and get notifications about product drops.", this.ctaText = "Get Started", this.ctaUrl = "#", this.placeholder = "Enter your email address", this.buttonText = "Subscribe", this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    var E, w, b, A, k, U, j, V, et, pt, ft, yt, vt, mt, _t, bt, gt, $t, wt, Et, xt, rt, X, nt;
    if (!r)
      return {
        kind: "generic",
        templateHtml: "<zero-block-cta-1.0.0></zero-block-cta-1.0.0>"
      };
    const t = z(((E = r == null ? void 0 : r.props) == null ? void 0 : E.title) ?? ((b = (w = r == null ? void 0 : r.studio) == null ? void 0 : w.props) == null ? void 0 : b.title) ?? "Stay Updated with Us"), e = z(((A = r == null ? void 0 : r.props) == null ? void 0 : A.lead) ?? ((U = (k = r == null ? void 0 : r.studio) == null ? void 0 : k.props) == null ? void 0 : U.lead) ?? ""), n = z(((j = r == null ? void 0 : r.props) == null ? void 0 : j.ctaText) ?? ((et = (V = r == null ? void 0 : r.studio) == null ? void 0 : V.props) == null ? void 0 : et.ctaText) ?? "Get Started"), s = z(((pt = r == null ? void 0 : r.props) == null ? void 0 : pt.ctaUrl) ?? ((yt = (ft = r == null ? void 0 : r.studio) == null ? void 0 : ft.props) == null ? void 0 : yt.ctaUrl) ?? "#"), l = z(((vt = r == null ? void 0 : r.props) == null ? void 0 : vt.placeholder) ?? ((_t = (mt = r == null ? void 0 : r.studio) == null ? void 0 : mt.props) == null ? void 0 : _t.placeholder) ?? ""), u = z(((bt = r == null ? void 0 : r.props) == null ? void 0 : bt.buttonText) ?? (($t = (gt = r == null ? void 0 : r.studio) == null ? void 0 : gt.props) == null ? void 0 : $t.buttonText) ?? "Subscribe"), m = z(((wt = r == null ? void 0 : r.props) == null ? void 0 : wt.layout) ?? ((xt = (Et = r == null ? void 0 : r.studio) == null ? void 0 : Et.props) == null ? void 0 : xt.layout) ?? "layout-1"), f = z(((rt = r == null ? void 0 : r.props) == null ? void 0 : rt.themeStyle) ?? ((nt = (X = r == null ? void 0 : r.studio) == null ? void 0 : X.props) == null ? void 0 : nt.themeStyle) ?? "light");
    return {
      kind: "generic",
      templateHtml: `
        <zero-block-cta-1.0.0
          title="${t}"
          lead="${e}"
          cta-text="${n}"
          cta-url="${s}"
          placeholder="${l}"
          button-text="${u}"
          layout="${m}"
          theme-style="${f}"
        ></zero-block-cta-1.0.0>
      `
    };
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(r) {
    this.title = r;
  }
  get leadConfig() {
    return this.lead;
  }
  set leadConfig(r) {
    this.lead = r;
  }
  get ctaTextConfig() {
    return this.ctaText;
  }
  set ctaTextConfig(r) {
    this.ctaText = r;
  }
  get ctaUrlConfig() {
    return this.ctaUrl;
  }
  set ctaUrlConfig(r) {
    this.ctaUrl = r;
  }
  get placeholderConfig() {
    return this.placeholder;
  }
  set placeholderConfig(r) {
    this.placeholder = r;
  }
  get buttonTextConfig() {
    return this.buttonText;
  }
  set buttonTextConfig(r) {
    this.buttonText = r;
  }
  get layoutConfig() {
    return this.layout;
  }
  set layoutConfig(r) {
    this.layout = r || "layout-1";
  }
  get themeStyleConfig() {
    return this.themeStyle;
  }
  set themeStyleConfig(r) {
    this.themeStyle = r || "light";
  }
  handleSubmit(r) {
    var n;
    r.preventDefault();
    const t = (n = this.shadowRoot) == null ? void 0 : n.querySelector('input[type="email"]'), e = t ? t.value : "";
    this.dispatchEvent(new CustomEvent("submit", {
      detail: { email: e },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return Nt`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        ${this.layout === "layout-1" ? Nt`
          <div class="box-centered">
            <h2>${this.title}</h2>
            <p class="lead">${this.lead}</p>
            <form class="form-group" @submit=${this.handleSubmit}>
              <input type="email" placeholder="${this.placeholder}" required>
              <button type="submit" class="btn-submit">${this.buttonText}</button>
            </form>
          </div>
        ` : Nt`
          <div class="box-row">
            <div style="text-align: left;">
              <h2>${this.title}</h2>
              <p class="lead">${this.lead}</p>
            </div>
            <a class="btn-redirect" href="${this.ctaUrl}">${this.ctaText}</a>
          </div>
        `}
      </section>
    `;
  }
};
T.styles = Ve`
    :host {
      display: block;
      width: 100%;
      --cta-bg: var(--uiv-surface-color, #ffffff);
      --cta-text: var(--uiv-text-color, #111827);
      --cta-lead: #4b5563;
      --cta-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 70px 6%;
      background: var(--cta-bg);
      color: var(--cta-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --cta-bg: #111827;
      --cta-text: #f9fafb;
      --cta-lead: #9ca3af;
    }

    section.theme-gradient {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%);
    }

    .box-centered {
      text-align: center;
      max-width: 650px;
      margin: 0 auto;
    }

    .box-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    h2 {
      font-size: 2.1rem;
      font-weight: 800;
      margin: 0 0 12px 0;
      letter-spacing: -0.02em;
    }

    p.lead {
      font-size: 1.05rem;
      line-height: 1.5;
      color: var(--cta-lead);
      margin: 0 0 28px 0;
    }

    .box-row h2 {
      margin: 0 0 4px 0;
      font-size: 1.85rem;
    }

    .box-row p.lead {
      margin: 0;
    }

    /* Form Styles */
    .form-group {
      display: inline-flex;
      gap: 10px;
      width: 100%;
      max-width: 450px;
    }

    input[type="email"] {
      flex: 1;
      padding: 12px 16px;
      font-size: 0.95rem;
      border: 1px solid var(--uiv-border-color, #d1d5db);
      border-radius: 6px;
      outline: none;
      background: var(--uiv-surface-color, #ffffff);
      color: inherit;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
    }

    input[type="email"]:focus {
      border-color: var(--cta-accent);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    }

    .btn-submit {
      padding: 12px 24px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--cta-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: opacity 0.2s ease;
    }

    .btn-submit:hover {
      opacity: 0.95;
    }

    .btn-redirect {
      padding: 13px 28px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--cta-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s ease, transform 0.15s ease;
    }

    .btn-redirect:hover {
      opacity: 0.95;
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      .box-row {
        flex-direction: column !important;
        text-align: center !important;
      }
      .box-row .btn-redirect {
        width: 100%;
        box-sizing: border-box;
      }
    }
  `;
R([
  W({ type: String })
], T.prototype, "title", 2);
R([
  W({ type: String })
], T.prototype, "lead", 2);
R([
  W({ type: String, attribute: "cta-text" })
], T.prototype, "ctaText", 2);
R([
  W({ type: String, attribute: "cta-url" })
], T.prototype, "ctaUrl", 2);
R([
  W({ type: String })
], T.prototype, "placeholder", 2);
R([
  W({ type: String, attribute: "button-text" })
], T.prototype, "buttonText", 2);
R([
  W({ type: String })
], T.prototype, "layout", 2);
R([
  W({ type: String, attribute: "theme-style" })
], T.prototype, "themeStyle", 2);
R([
  L({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Headline Title",
    fieldMappings: "title"
  })
], T.prototype, "titleConfig", 1);
R([
  L({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Lead Copy Paragraph",
    fieldMappings: "lead"
  })
], T.prototype, "leadConfig", 1);
R([
  L({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Redirect Button Label",
    fieldMappings: "ctaText"
  })
], T.prototype, "ctaTextConfig", 1);
R([
  L({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Redirect Target URL",
    fieldMappings: "ctaUrl"
  })
], T.prototype, "ctaUrlConfig", 1);
R([
  L({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Input Field Placeholder",
    fieldMappings: "placeholder"
  })
], T.prototype, "placeholderConfig", 1);
R([
  L({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Form Button Text",
    fieldMappings: "buttonText"
  })
], T.prototype, "buttonTextConfig", 1);
R([
  L({
    attributeType: I.PROPERTY,
    uiComponentType: H.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Centered Newsletter Form", value: "layout-1" },
      { label: "Horizontal Conversion Banner", value: "layout-2" }
    ]
  })
], T.prototype, "layoutConfig", 1);
R([
  L({
    attributeType: I.PROPERTY,
    uiComponentType: H.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" },
      { label: "Gradient Vignette", value: "gradient" }
    ]
  })
], T.prototype, "themeStyleConfig", 1);
R([
  L({
    attributeType: I.EVENT,
    displayLabel: "On Submit",
    eventTrigger: "submit"
  })
], T.prototype, "handleSubmit", 1);
T = R([
  Le({
    name: "zero-block-cta",
    version: "1.0.0",
    title: "CTA Block",
    elementSelector: "zero-block-cta",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  ze()
], T);
export {
  T as ZeroBlockCta,
  mr as studioTemplate
};
