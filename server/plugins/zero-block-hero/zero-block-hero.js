var Ie = Object.defineProperty;
var De = (e, t, r) => t in e ? Ie(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var re = (e, t, r) => De(e, typeof t != "symbol" ? t + "" : t, r);
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
(function(e) {
  (function(t) {
    var r = typeof globalThis == "object" ? globalThis : typeof ne == "object" ? ne : typeof self == "object" ? self : typeof this == "object" ? this : v(), n = a(e);
    typeof r.Reflect < "u" && (n = a(r.Reflect, n)), t(n, r), typeof r.Reflect > "u" && (r.Reflect = e);
    function a(f, S) {
      return function(w, g) {
        Object.defineProperty(f, w, { configurable: !0, writable: !0, value: g }), S && S(w, g);
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
    function v() {
      return l() || u();
    }
  })(function(t, r) {
    var n = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", l = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, S = !v && !f, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return Dt(/* @__PURE__ */ Object.create(null));
      } : f ? function() {
        return Dt({ __proto__: null });
      } : function() {
        return Dt({});
      },
      has: S ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: S ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, g = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Oe(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Re(), U = typeof WeakMap == "function" ? WeakMap : ke(), j = a ? Symbol.for("@reflect-metadata:registry") : void 0, V = Te(), rt = Ce(V);
    function _t(i, s, o, c) {
      if (_(o)) {
        if (!Yt(i))
          throw new TypeError();
        if (!Xt(s))
          throw new TypeError();
        return Tt(i, s);
      } else {
        if (!Yt(i))
          throw new TypeError();
        if (!T(s))
          throw new TypeError();
        if (!T(c) && !_(c) && !Q(c))
          throw new TypeError();
        return Q(c) && (c = void 0), o = H(o), Ct(i, s, o, c);
      }
    }
    t("decorate", _t);
    function gt(i, s) {
      function o(c, m) {
        if (!T(c))
          throw new TypeError();
        if (!_(m) && !xe(m))
          throw new TypeError();
        st(i, s, c, m);
      }
      return o;
    }
    t("metadata", gt);
    function bt(i, s, o, c) {
      if (!T(o))
        throw new TypeError();
      return _(c) || (c = H(c)), st(i, s, o, c);
    }
    t("defineMetadata", bt);
    function $t(i, s, o) {
      if (!T(s))
        throw new TypeError();
      return _(o) || (o = H(o)), nt(i, s, o);
    }
    t("hasMetadata", $t);
    function wt(i, s, o) {
      if (!T(s))
        throw new TypeError();
      return _(o) || (o = H(o)), J(i, s, o);
    }
    t("hasOwnMetadata", wt);
    function St(i, s, o) {
      if (!T(s))
        throw new TypeError();
      return _(o) || (o = H(o)), it(i, s, o);
    }
    t("getMetadata", St);
    function Et(i, s, o) {
      if (!T(s))
        throw new TypeError();
      return _(o) || (o = H(o)), at(i, s, o);
    }
    t("getOwnMetadata", Et);
    function At(i, s) {
      if (!T(i))
        throw new TypeError();
      return _(s) || (s = H(s)), ot(i, s);
    }
    t("getMetadataKeys", At);
    function xt(i, s) {
      if (!T(i))
        throw new TypeError();
      return _(s) || (s = H(s)), lt(i, s);
    }
    t("getOwnMetadataKeys", xt);
    function Pt(i, s, o) {
      if (!T(s))
        throw new TypeError();
      if (_(o) || (o = H(o)), !T(s))
        throw new TypeError();
      _(o) || (o = H(o));
      var c = ut(
        s,
        o,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, o);
    }
    t("deleteMetadata", Pt);
    function Tt(i, s) {
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o], m = c(s);
        if (!_(m) && !Q(m)) {
          if (!Xt(m))
            throw new TypeError();
          s = m;
        }
      }
      return s;
    }
    function Ct(i, s, o, c) {
      for (var m = i.length - 1; m >= 0; --m) {
        var O = i[m], C = O(s, o, c);
        if (!_(C) && !Q(C)) {
          if (!T(C))
            throw new TypeError();
          c = C;
        }
      }
      return c;
    }
    function nt(i, s, o) {
      var c = J(i, s, o);
      if (c)
        return !0;
      var m = It(s);
      return Q(m) ? !1 : nt(i, m, o);
    }
    function J(i, s, o) {
      var c = ut(
        s,
        o,
        /*Create*/
        !1
      );
      return _(c) ? !1 : qt(c.OrdinaryHasOwnMetadata(i, s, o));
    }
    function it(i, s, o) {
      var c = J(i, s, o);
      if (c)
        return at(i, s, o);
      var m = It(s);
      if (!Q(m))
        return it(i, m, o);
    }
    function at(i, s, o) {
      var c = ut(
        s,
        o,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(i, s, o);
    }
    function st(i, s, o, c) {
      var m = ut(
        o,
        c,
        /*Create*/
        !0
      );
      m.OrdinaryDefineOwnMetadata(i, s, o, c);
    }
    function ot(i, s) {
      var o = lt(i, s), c = It(i);
      if (c === null)
        return o;
      var m = ot(c, s);
      if (m.length <= 0)
        return o;
      if (o.length <= 0)
        return m;
      for (var O = new k(), C = [], b = 0, d = o; b < d.length; b++) {
        var h = d[b], p = O.has(h);
        p || (O.add(h), C.push(h));
      }
      for (var y = 0, $ = m; y < $.length; y++) {
        var h = $[y], p = O.has(h);
        p || (O.add(h), C.push(h));
      }
      return C;
    }
    function lt(i, s) {
      var o = ut(
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
    function _(i) {
      return i === void 0;
    }
    function Q(i) {
      return i === null;
    }
    function we(i) {
      return typeof i == "symbol";
    }
    function T(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Se(i, s) {
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
      var o = "string", c = Zt(i, l);
      if (c !== void 0) {
        var m = c.call(i, o);
        if (T(m))
          throw new TypeError();
        return m;
      }
      return Ee(i);
    }
    function Ee(i, s) {
      var o, c;
      {
        var m = i.toString;
        if (Mt(m)) {
          var c = m.call(i);
          if (!T(c))
            return c;
        }
        var o = i.valueOf;
        if (Mt(o)) {
          var c = o.call(i);
          if (!T(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function qt(i) {
      return !!i;
    }
    function Ae(i) {
      return "" + i;
    }
    function H(i) {
      var s = Se(i);
      return we(s) ? s : Ae(s);
    }
    function Yt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function Mt(i) {
      return typeof i == "function";
    }
    function Xt(i) {
      return typeof i == "function";
    }
    function xe(i) {
      switch (Ft(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Nt(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Zt(i, s) {
      var o = i[s];
      if (o != null) {
        if (!Mt(o))
          throw new TypeError();
        return o;
      }
    }
    function Jt(i) {
      var s = Zt(i, u);
      if (!Mt(s))
        throw new TypeError();
      var o = s.call(i);
      if (!T(o))
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
    function It(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === g || s !== g)
        return s;
      var o = i.prototype, c = o && Object.getPrototypeOf(o);
      if (c == null || c === Object.prototype)
        return s;
      var m = c.constructor;
      return typeof m != "function" || m === i ? s : m;
    }
    function Pe() {
      var i;
      !_(j) && typeof r.Reflect < "u" && !(j in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (i = Me(r.Reflect));
      var s, o, c, m = new U(), O = {
        registerProvider: C,
        getProvider: d,
        setProvider: p
      };
      return O;
      function C(y) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case _(s):
            s = y;
            break;
          case s === y:
            break;
          case _(o):
            o = y;
            break;
          case o === y:
            break;
          default:
            c === void 0 && (c = new k()), c.add(y);
            break;
        }
      }
      function b(y, $) {
        if (!_(s)) {
          if (s.isProviderFor(y, $))
            return s;
          if (!_(o)) {
            if (o.isProviderFor(y, $))
              return s;
            if (!_(c))
              for (var E = Jt(c); ; ) {
                var A = Kt(E);
                if (!A)
                  return;
                var N = Qt(A);
                if (N.isProviderFor(y, $))
                  return te(E), N;
              }
          }
        }
        if (!_(i) && i.isProviderFor(y, $))
          return i;
      }
      function d(y, $) {
        var E = m.get(y), A;
        return _(E) || (A = E.get($)), _(A) && (A = b(y, $), _(A) || (_(E) && (E = new P(), m.set(y, E)), E.set($, A))), A;
      }
      function h(y) {
        if (_(y))
          throw new TypeError();
        return s === y || o === y || !_(c) && c.has(y);
      }
      function p(y, $, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var A = d(y, $);
        if (A !== E) {
          if (!_(A))
            return !1;
          var N = m.get(y);
          _(N) && (N = new P(), m.set(y, N)), N.set($, E);
        }
        return !0;
      }
    }
    function Te() {
      var i;
      return !_(j) && T(r.Reflect) && Object.isExtensible(r.Reflect) && (i = r.Reflect[j]), _(i) && (i = Pe()), !_(j) && T(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, j, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ce(i) {
      var s = new U(), o = {
        isProviderFor: function(h, p) {
          var y = s.get(h);
          return _(y) ? !1 : y.has(p);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: m,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: d
      };
      return V.registerProvider(o), o;
      function c(h, p, y) {
        var $ = s.get(h), E = !1;
        if (_($)) {
          if (!y)
            return;
          $ = new P(), s.set(h, $), E = !0;
        }
        var A = $.get(p);
        if (_(A)) {
          if (!y)
            return;
          if (A = new P(), $.set(p, A), !i.setProvider(h, p, o))
            throw $.delete(p), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return A;
      }
      function m(h, p, y) {
        var $ = c(
          p,
          y,
          /*Create*/
          !1
        );
        return _($) ? !1 : qt($.has(h));
      }
      function O(h, p, y) {
        var $ = c(
          p,
          y,
          /*Create*/
          !1
        );
        if (!_($))
          return $.get(h);
      }
      function C(h, p, y, $) {
        var E = c(
          y,
          $,
          /*Create*/
          !0
        );
        E.set(h, p);
      }
      function b(h, p) {
        var y = [], $ = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (_($))
          return y;
        for (var E = $.keys(), A = Jt(E), N = 0; ; ) {
          var ee = Kt(A);
          if (!ee)
            return y.length = N, y;
          var Ue = Qt(ee);
          try {
            y[N] = Ue;
          } catch (Ne) {
            try {
              te(A);
            } finally {
              throw Ne;
            }
          }
          N++;
        }
      }
      function d(h, p, y) {
        var $ = c(
          p,
          y,
          /*Create*/
          !1
        );
        if (_($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var E = s.get(p);
          _(E) || (E.delete(y), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Me(i) {
      var s = i.defineMetadata, o = i.hasOwnMetadata, c = i.getOwnMetadata, m = i.getOwnMetadataKeys, O = i.deleteMetadata, C = new U(), b = {
        isProviderFor: function(d, h) {
          var p = C.get(d);
          return !_(p) && p.has(h) ? !0 : m(d, h).length ? (_(p) && (p = new k(), C.set(d, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: O
      };
      return b;
    }
    function ut(i, s, o) {
      var c = V.getProvider(i, s);
      if (!_(c))
        return c;
      if (o) {
        if (V.setProvider(i, s, rt))
          return rt;
        throw new Error("Illegal state.");
      }
    }
    function Oe() {
      var i = {}, s = [], o = (
        /** @class */
        function() {
          function b(d, h, p) {
            this._index = 0, this._keys = d, this._values = h, this._selector = p;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
            return this;
          }, b.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, b.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, b;
        }()
      ), c = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, b.prototype.set = function(d, h) {
            var p = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, b.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, y = h + 1; y < p; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, Nt(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new o(this._keys, this._values, m);
          }, b.prototype.values = function() {
            return new o(this._keys, this._values, O);
          }, b.prototype.entries = function() {
            return new o(this._keys, this._values, C);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(d, h) {
            if (!Nt(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (Nt(this._keys[p], d)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return c;
      function m(b, d) {
        return b;
      }
      function O(b, d) {
        return d;
      }
      function C(b, d) {
        return [b, d];
      }
    }
    function Re() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new P();
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
    function ke() {
      var i = 16, s = w.create(), o = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var p = m(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? w.has(p, this._key) : !1;
          }, d.prototype.get = function(h) {
            var p = m(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? w.get(p, this._key) : void 0;
          }, d.prototype.set = function(h, p) {
            var y = m(
              h,
              /*create*/
              !0
            );
            return y[this._key] = p, this;
          }, d.prototype.delete = function(h) {
            var p = m(
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
          d = "@@WeakMap@@" + b();
        while (w.has(s, d));
        return s[d] = !0, d;
      }
      function m(d, h) {
        if (!n.call(d, o)) {
          if (!h)
            return;
          Object.defineProperty(d, o, { value: w.create() });
        }
        return d[o];
      }
      function O(d, h) {
        for (var p = 0; p < h; ++p)
          d[p] = Math.random() * 255 | 0;
        return d;
      }
      function C(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : O(h, d), h;
        }
        return O(new Array(d), d);
      }
      function b() {
        var d = C(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var y = d[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function Dt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(ie || (ie = {}));
function He(e) {
  return typeof e.name == "string" && typeof e.version == "string" && typeof e.title == "string" && typeof e.elementSelector == "string" && typeof e.group == "string" && typeof e.iconName == "string";
}
function je(e) {
  return function(t) {
    if (He(e)) {
      const r = {
        version: e.version,
        name: e.name,
        title: e.title,
        selector: e.elementSelector,
        category: e.group,
        icon: e.iconName,
        layoutKind: e.layoutKind,
        environment: e.environment
      };
      if (Reflect.defineMetadata("ZeroComponent", r, t.prototype), globalThis.customElements) {
        const n = `${e.elementSelector}-${e.version}`;
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
          element: r
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Le(e) {
  return je(e);
}
function ze(e) {
  return function(t) {
    class r extends t {
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
        var S;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), v = "adoptedStyleSheets" in Document.prototype, f = this.shadowRoot;
        if (!f) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && v) {
          const w = new CSSStyleSheet(), g = (S = l.sheet) == null ? void 0 : S.cssRules;
          g && (Array.from(g).forEach((P) => w.insertRule(P.cssText)), f.adoptedStyleSheets = [...f.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          f.appendChild(w);
        }
        u.forEach((w) => {
          const g = w.cloneNode(!0);
          f.appendChild(g);
        });
      }
    }
    return r;
  };
}
function Ge(e) {
  var r;
  if (((r = e == null ? void 0 : e.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Be(e) {
  return function(t, r) {
    try {
      Ge(e);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let a = !0;
      if (typeof r == "string") {
        try {
          a = typeof t[r] != "function";
        } catch {
          a = !0;
        }
        a && (e.fieldMappings = e.fieldMappings ?? r);
      }
      n.push(e), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function z(e) {
  return Be(e);
}
var I;
(function(e) {
  e.TEXT_INPUT = "text-input", e.PASSWORD_INPUT = "password-input", e.DROPDOWN = "dropdown", e.CHECKBOX = "checkbox", e.RADIO_BUTTON = "radio-button", e.RANGE_SLIDER = "range-slider", e.FILE_INPUT = "file-input", e.DATE_PICKER = "date-picker", e.COLOR_PICKER = "color-picker", e.NUMBER_INPUT = "number-input", e.TEXTAREA = "textarea", e.MULTI_SELECT = "multi-select", e.POPUP_DROPDOWN = "popup-dropdown", e.LAYOUT_PICKER = "layout-picker", e.RESPONSIVE_OVERRIDE = "responsive-override", e.IMAGE_PICKER = "image-picker", e.CHIPS = "chips";
})(I || (I = {}));
var D;
(function(e) {
  e.PROPERTY = "property", e.EVENT = "event", e.ACTION = "action";
})(D || (D = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ot = globalThis, Gt = Ot.ShadowRoot && (Ot.ShadyCSS === void 0 || Ot.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Bt = Symbol(), ae = /* @__PURE__ */ new WeakMap();
let ve = class {
  constructor(t, r, n) {
    if (this._$cssResult$ = !0, n !== Bt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = r;
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (Gt && t === void 0) {
      const n = r !== void 0 && r.length === 1;
      n && (t = ae.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && ae.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const We = (e) => new ve(typeof e == "string" ? e : e + "", void 0, Bt), Ve = (e, ...t) => {
  const r = e.length === 1 ? e[0] : t.reduce((n, a, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + e[l + 1], e[0]);
  return new ve(r, e, Bt);
}, Fe = (e, t) => {
  if (Gt) e.adoptedStyleSheets = t.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of t) {
    const n = document.createElement("style"), a = Ot.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = r.cssText, e.appendChild(n);
  }
}, se = Gt ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let r = "";
  for (const n of t.cssRules) r += n.cssText;
  return We(r);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: qe, defineProperty: Ye, getOwnPropertyDescriptor: Xe, getOwnPropertyNames: Ze, getOwnPropertySymbols: Je, getPrototypeOf: Qe } = Object, W = globalThis, oe = W.trustedTypes, Ke = oe ? oe.emptyScript : "", Ht = W.reactiveElementPolyfillSupport, dt = (e, t) => e, Rt = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Ke : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let r = e;
  switch (t) {
    case Boolean:
      r = e !== null;
      break;
    case Number:
      r = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(e);
      } catch {
        r = null;
      }
  }
  return r;
} }, Wt = (e, t) => !qe(e, t), le = { attribute: !0, type: String, converter: Rt, reflect: !1, useDefault: !1, hasChanged: Wt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), W.litPropertyMetadata ?? (W.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let K = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = le) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(t, r), !r.noAccessor) {
      const n = Symbol(), a = this.getPropertyDescriptor(t, n, r);
      a !== void 0 && Ye(this.prototype, t, a);
    }
  }
  static getPropertyDescriptor(t, r, n) {
    const { get: a, set: l } = Xe(this.prototype, t) ?? { get() {
      return this[r];
    }, set(u) {
      this[r] = u;
    } };
    return { get: a, set(u) {
      const v = a == null ? void 0 : a.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, v, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? le;
  }
  static _$Ei() {
    if (this.hasOwnProperty(dt("elementProperties"))) return;
    const t = Qe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(dt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(dt("properties"))) {
      const r = this.properties, n = [...Ze(r), ...Je(r)];
      for (const a of n) this.createProperty(a, r[a]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0) for (const [n, a] of r) this.elementProperties.set(n, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, n] of this.elementProperties) {
      const a = this._$Eu(r, n);
      a !== void 0 && this._$Eh.set(a, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const a of n) r.unshift(se(a));
    } else t !== void 0 && r.push(se(t));
    return r;
  }
  static _$Eu(t, r) {
    const n = r.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((r) => r(this));
  }
  addController(t) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((r = t.hostConnected) == null || r.call(t));
  }
  removeController(t) {
    var r;
    (r = this._$EO) == null || r.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const n of r.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Fe(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((r) => {
      var n;
      return (n = r.hostConnected) == null ? void 0 : n.call(r);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var n;
      return (n = r.hostDisconnected) == null ? void 0 : n.call(r);
    });
  }
  attributeChangedCallback(t, r, n) {
    this._$AK(t, n);
  }
  _$ET(t, r) {
    var l;
    const n = this.constructor.elementProperties.get(t), a = this.constructor._$Eu(t, n);
    if (a !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : Rt).toAttribute(r, n.type);
      this._$Em = t, u == null ? this.removeAttribute(a) : this.setAttribute(a, u), this._$Em = null;
    }
  }
  _$AK(t, r) {
    var l, u;
    const n = this.constructor, a = n._$Eh.get(t);
    if (a !== void 0 && this._$Em !== a) {
      const v = n.getPropertyOptions(a), f = typeof v.converter == "function" ? { fromAttribute: v.converter } : ((l = v.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? v.converter : Rt;
      this._$Em = a;
      const S = f.fromAttribute(r, v.type);
      this[a] = S ?? ((u = this._$Ej) == null ? void 0 : u.get(a)) ?? S, this._$Em = null;
    }
  }
  requestUpdate(t, r, n, a = !1, l) {
    var u;
    if (t !== void 0) {
      const v = this.constructor;
      if (a === !1 && (l = this[t]), n ?? (n = v.getPropertyOptions(t)), !((n.hasChanged ?? Wt)(l, r) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(v._$Eu(t, n)))) return;
      this.C(t, r, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, r, { useDefault: n, reflect: a, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? r ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (r = void 0), this._$AL.set(t, r)), a === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
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
        const { wrapped: v } = u, f = this[l];
        v !== !0 || this._$AL.has(l) || f === void 0 || this.C(l, void 0, u, f);
      }
    }
    let t = !1;
    const r = this._$AL;
    try {
      t = this.shouldUpdate(r), t ? (this.willUpdate(r), (n = this._$EO) == null || n.forEach((a) => {
        var l;
        return (l = a.hostUpdate) == null ? void 0 : l.call(a);
      }), this.update(r)) : this._$EM();
    } catch (a) {
      throw t = !1, this._$EM(), a;
    }
    t && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var r;
    (r = this._$EO) == null || r.forEach((n) => {
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
K.elementStyles = [], K.shadowRootOptions = { mode: "open" }, K[dt("elementProperties")] = /* @__PURE__ */ new Map(), K[dt("finalized")] = /* @__PURE__ */ new Map(), Ht == null || Ht({ ReactiveElement: K }), (W.reactiveElementVersions ?? (W.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht = globalThis, ue = (e) => e, kt = ht.trustedTypes, ce = kt ? kt.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, _e = "$lit$", B = `lit$${Math.random().toFixed(9).slice(2)}$`, ge = "?" + B, tr = `<${ge}>`, Z = document, ft = () => Z.createComment(""), yt = (e) => e === null || typeof e != "object" && typeof e != "function", Vt = Array.isArray, er = (e) => Vt(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", jt = `[ 	
\f\r]`, ct = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, de = /-->/g, he = />/g, F = RegExp(`>|${jt}(?:([^\\s"'>=/]+)(${jt}*=${jt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), pe = /'/g, fe = /"/g, be = /^(?:script|style|textarea|title)$/i, rr = (e) => (t, ...r) => ({ _$litType$: e, strings: t, values: r }), q = rr(1), tt = Symbol.for("lit-noChange"), R = Symbol.for("lit-nothing"), ye = /* @__PURE__ */ new WeakMap(), Y = Z.createTreeWalker(Z, 129);
function $e(e, t) {
  if (!Vt(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ce !== void 0 ? ce.createHTML(t) : t;
}
const nr = (e, t) => {
  const r = e.length - 1, n = [];
  let a, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = ct;
  for (let v = 0; v < r; v++) {
    const f = e[v];
    let S, w, g = -1, P = 0;
    for (; P < f.length && (u.lastIndex = P, w = u.exec(f), w !== null); ) P = u.lastIndex, u === ct ? w[1] === "!--" ? u = de : w[1] !== void 0 ? u = he : w[2] !== void 0 ? (be.test(w[2]) && (a = RegExp("</" + w[2], "g")), u = F) : w[3] !== void 0 && (u = F) : u === F ? w[0] === ">" ? (u = a ?? ct, g = -1) : w[1] === void 0 ? g = -2 : (g = u.lastIndex - w[2].length, S = w[1], u = w[3] === void 0 ? F : w[3] === '"' ? fe : pe) : u === fe || u === pe ? u = F : u === de || u === he ? u = ct : (u = F, a = void 0);
    const k = u === F && e[v + 1].startsWith("/>") ? " " : "";
    l += u === ct ? f + tr : g >= 0 ? (n.push(S), f.slice(0, g) + _e + f.slice(g) + B + k) : f + B + (g === -2 ? v : k);
  }
  return [$e(e, l + (e[r] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class mt {
  constructor({ strings: t, _$litType$: r }, n) {
    let a;
    this.parts = [];
    let l = 0, u = 0;
    const v = t.length - 1, f = this.parts, [S, w] = nr(t, r);
    if (this.el = mt.createElement(S, n), Y.currentNode = this.el.content, r === 2 || r === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (a = Y.nextNode()) !== null && f.length < v; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const g of a.getAttributeNames()) if (g.endsWith(_e)) {
          const P = w[u++], k = a.getAttribute(g).split(B), U = /([.?@])?(.*)/.exec(P);
          f.push({ type: 1, index: l, name: U[2], strings: k, ctor: U[1] === "." ? ar : U[1] === "?" ? sr : U[1] === "@" ? or : Ut }), a.removeAttribute(g);
        } else g.startsWith(B) && (f.push({ type: 6, index: l }), a.removeAttribute(g));
        if (be.test(a.tagName)) {
          const g = a.textContent.split(B), P = g.length - 1;
          if (P > 0) {
            a.textContent = kt ? kt.emptyScript : "";
            for (let k = 0; k < P; k++) a.append(g[k], ft()), Y.nextNode(), f.push({ type: 2, index: ++l });
            a.append(g[P], ft());
          }
        }
      } else if (a.nodeType === 8) if (a.data === ge) f.push({ type: 2, index: l });
      else {
        let g = -1;
        for (; (g = a.data.indexOf(B, g + 1)) !== -1; ) f.push({ type: 7, index: l }), g += B.length - 1;
      }
      l++;
    }
  }
  static createElement(t, r) {
    const n = Z.createElement("template");
    return n.innerHTML = t, n;
  }
}
function et(e, t, r = e, n) {
  var u, v;
  if (t === tt) return t;
  let a = n !== void 0 ? (u = r._$Co) == null ? void 0 : u[n] : r._$Cl;
  const l = yt(t) ? void 0 : t._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((v = a == null ? void 0 : a._$AO) == null || v.call(a, !1), l === void 0 ? a = void 0 : (a = new l(e), a._$AT(e, r, n)), n !== void 0 ? (r._$Co ?? (r._$Co = []))[n] = a : r._$Cl = a), a !== void 0 && (t = et(e, a._$AS(e, t.values), a, n)), t;
}
class ir {
  constructor(t, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: r }, parts: n } = this._$AD, a = ((t == null ? void 0 : t.creationScope) ?? Z).importNode(r, !0);
    Y.currentNode = a;
    let l = Y.nextNode(), u = 0, v = 0, f = n[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let S;
        f.type === 2 ? S = new vt(l, l.nextSibling, this, t) : f.type === 1 ? S = new f.ctor(l, f.name, f.strings, this, t) : f.type === 6 && (S = new lr(l, this, t)), this._$AV.push(S), f = n[++v];
      }
      u !== (f == null ? void 0 : f.index) && (l = Y.nextNode(), u++);
    }
    return Y.currentNode = Z, a;
  }
  p(t) {
    let r = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, r), r += n.strings.length - 2) : n._$AI(t[r])), r++;
  }
}
class vt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, r, n, a) {
    this.type = 2, this._$AH = R, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = n, this.options = a, this._$Cv = (a == null ? void 0 : a.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = r.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, r = this) {
    t = et(this, t, r), yt(t) ? t === R || t == null || t === "" ? (this._$AH !== R && this._$AR(), this._$AH = R) : t !== this._$AH && t !== tt && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : er(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== R && yt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Z.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: r, _$litType$: n } = t, a = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = mt.createElement($e(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === a) this._$AH.p(r);
    else {
      const u = new ir(a, this), v = u.u(this.options);
      u.p(r), this.T(v), this._$AH = u;
    }
  }
  _$AC(t) {
    let r = ye.get(t.strings);
    return r === void 0 && ye.set(t.strings, r = new mt(t)), r;
  }
  k(t) {
    Vt(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let n, a = 0;
    for (const l of t) a === r.length ? r.push(n = new vt(this.O(ft()), this.O(ft()), this, this.options)) : n = r[a], n._$AI(l), a++;
    a < r.length && (this._$AR(n && n._$AB.nextSibling, a), r.length = a);
  }
  _$AR(t = this._$AA.nextSibling, r) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, r); t !== this._$AB; ) {
      const a = ue(t).nextSibling;
      ue(t).remove(), t = a;
    }
  }
  setConnected(t) {
    var r;
    this._$AM === void 0 && (this._$Cv = t, (r = this._$AP) == null || r.call(this, t));
  }
}
class Ut {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, r, n, a, l) {
    this.type = 1, this._$AH = R, this._$AN = void 0, this.element = t, this.name = r, this._$AM = a, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = R;
  }
  _$AI(t, r = this, n, a) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = et(this, t, r, 0), u = !yt(t) || t !== this._$AH && t !== tt, u && (this._$AH = t);
    else {
      const v = t;
      let f, S;
      for (t = l[0], f = 0; f < l.length - 1; f++) S = et(this, v[n + f], r, f), S === tt && (S = this._$AH[f]), u || (u = !yt(S) || S !== this._$AH[f]), S === R ? t = R : t !== R && (t += (S ?? "") + l[f + 1]), this._$AH[f] = S;
    }
    u && !a && this.j(t);
  }
  j(t) {
    t === R ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ar extends Ut {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === R ? void 0 : t;
  }
}
class sr extends Ut {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== R);
  }
}
class or extends Ut {
  constructor(t, r, n, a, l) {
    super(t, r, n, a, l), this.type = 5;
  }
  _$AI(t, r = this) {
    if ((t = et(this, t, r, 0) ?? R) === tt) return;
    const n = this._$AH, a = t === R && n !== R || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== R && (n === R || a);
    a && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class lr {
  constructor(t, r, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    et(this, t);
  }
}
const Lt = ht.litHtmlPolyfillSupport;
Lt == null || Lt(mt, vt), (ht.litHtmlVersions ?? (ht.litHtmlVersions = [])).push("3.3.3");
const ur = (e, t, r) => {
  const n = (r == null ? void 0 : r.renderBefore) ?? t;
  let a = n._$litPart$;
  if (a === void 0) {
    const l = (r == null ? void 0 : r.renderBefore) ?? null;
    n._$litPart$ = a = new vt(t.insertBefore(ft(), l), l, void 0, r ?? {});
  }
  return a._$AI(e), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis;
class pt extends K {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const t = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = t.firstChild), t;
  }
  update(t) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ur(r, this.renderRoot, this.renderOptions);
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
    return tt;
  }
}
var me;
pt._$litElement$ = !0, pt.finalized = !0, (me = X.litElementHydrateSupport) == null || me.call(X, { LitElement: pt });
const zt = X.litElementPolyfillSupport;
zt == null || zt({ LitElement: pt });
(X.litElementVersions ?? (X.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr = { attribute: !0, type: String, converter: Rt, reflect: !1, hasChanged: Wt }, dr = (e = cr, t, r) => {
  const { kind: n, metadata: a } = r;
  let l = globalThis.litPropertyMetadata.get(a);
  if (l === void 0 && globalThis.litPropertyMetadata.set(a, l = /* @__PURE__ */ new Map()), n === "setter" && ((e = Object.create(e)).wrapped = !0), l.set(r.name, e), n === "accessor") {
    const { name: u } = r;
    return { set(v) {
      const f = t.get.call(this);
      t.set.call(this, v), this.requestUpdate(u, f, e, !0, v);
    }, init(v) {
      return v !== void 0 && this.C(u, void 0, e, v), v;
    } };
  }
  if (n === "setter") {
    const { name: u } = r;
    return function(v) {
      const f = this[u];
      t.call(this, v), this.requestUpdate(u, f, e, !0, v);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function G(e) {
  return (t, r) => typeof r == "object" ? dr(e, t, r) : ((n, a, l) => {
    const u = a.hasOwnProperty(l);
    return a.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(a, l) : void 0;
  })(e, t, r);
}
var hr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, M = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? pr(t, r) : t, l = e.length - 1, u; l >= 0; l--)
    (u = e[l]) && (a = (n ? u(t, r, a) : u(a)) || a);
  return n && a && hr(t, r, a), a;
};
const vr = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:60px 24px;background:#f9fafb;text-align:center;border-radius:12px;font-family:inherit;'>",
    "<h1 style='font-size:32px;font-weight:800;color:#111827;margin-bottom:16px;'>{{props:title}}</h1>",
    "<p style='font-size:16px;color:#4b5563;max-width:600px;margin:0 auto 24px;'>{{props:lead}}</p>",
    "<div style='display:flex;justify-content:center;gap:12px;'>",
    "<span style='padding:10px 20px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-weight:600;font-size:14px;'>Get Started</span>",
    "<span style='padding:10px 20px;border:1px solid #d1d5db;color:#4b5563;border-radius:6px;font-weight:600;font-size:14px;'>Learn More</span>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Hero"]
};
function L(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let x = class extends pt {
  constructor() {
    super(...arguments), this.title = "Design blocks done right", this.lead = "Awesome UI sections for landing page builders. Beautiful, fast, and fully responsive templates.", this.image = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60", this.ctaPrimaryText = "Get Started", this.ctaPrimaryUrl = "#", this.ctaSecondaryText = "Learn More", this.ctaSecondaryUrl = "#", this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(e) {
    var w, g, P, k, U, j, V, rt, _t, gt, bt, $t, wt, St, Et, At, xt, Pt, Tt, Ct, nt, J, it, at, st, ot, lt;
    if (!e)
      return {
        kind: "generic",
        templateHtml: "<zero-block-hero-1.0.0></zero-block-hero-1.0.0>"
      };
    const t = L(((w = e == null ? void 0 : e.props) == null ? void 0 : w.title) ?? ((P = (g = e == null ? void 0 : e.studio) == null ? void 0 : g.props) == null ? void 0 : P.title) ?? "Design blocks done right"), r = L(((k = e == null ? void 0 : e.props) == null ? void 0 : k.lead) ?? ((j = (U = e == null ? void 0 : e.studio) == null ? void 0 : U.props) == null ? void 0 : j.lead) ?? ""), n = L(((V = e == null ? void 0 : e.props) == null ? void 0 : V.image) ?? ((_t = (rt = e == null ? void 0 : e.studio) == null ? void 0 : rt.props) == null ? void 0 : _t.image) ?? ""), a = L(((gt = e == null ? void 0 : e.props) == null ? void 0 : gt.ctaPrimaryText) ?? (($t = (bt = e == null ? void 0 : e.studio) == null ? void 0 : bt.props) == null ? void 0 : $t.ctaPrimaryText) ?? "Get Started"), l = L(((wt = e == null ? void 0 : e.props) == null ? void 0 : wt.ctaPrimaryUrl) ?? ((Et = (St = e == null ? void 0 : e.studio) == null ? void 0 : St.props) == null ? void 0 : Et.ctaPrimaryUrl) ?? "#"), u = L(((At = e == null ? void 0 : e.props) == null ? void 0 : At.ctaSecondaryText) ?? ((Pt = (xt = e == null ? void 0 : e.studio) == null ? void 0 : xt.props) == null ? void 0 : Pt.ctaSecondaryText) ?? "Learn More"), v = L(((Tt = e == null ? void 0 : e.props) == null ? void 0 : Tt.ctaSecondaryUrl) ?? ((nt = (Ct = e == null ? void 0 : e.studio) == null ? void 0 : Ct.props) == null ? void 0 : nt.ctaSecondaryUrl) ?? "#"), f = L(((J = e == null ? void 0 : e.props) == null ? void 0 : J.layout) ?? ((at = (it = e == null ? void 0 : e.studio) == null ? void 0 : it.props) == null ? void 0 : at.layout) ?? "layout-1"), S = L(((st = e == null ? void 0 : e.props) == null ? void 0 : st.themeStyle) ?? ((lt = (ot = e == null ? void 0 : e.studio) == null ? void 0 : ot.props) == null ? void 0 : lt.themeStyle) ?? "light");
    return {
      kind: "generic",
      templateHtml: `
        <zero-block-hero-1.0.0
          title="${t}"
          lead="${r}"
          image="${n}"
          cta-primary-text="${a}"
          cta-primary-url="${l}"
          cta-secondary-text="${u}"
          cta-secondary-url="${v}"
          layout="${f}"
          theme-style="${S}"
        ></zero-block-hero-1.0.0>
      `
    };
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(e) {
    this.title = e;
  }
  get leadConfig() {
    return this.lead;
  }
  set leadConfig(e) {
    this.lead = e;
  }
  get imageConfig() {
    return this.image;
  }
  set imageConfig(e) {
    this.image = e;
  }
  get ctaPrimaryTextConfig() {
    return this.ctaPrimaryText;
  }
  set ctaPrimaryTextConfig(e) {
    this.ctaPrimaryText = e;
  }
  get ctaPrimaryUrlConfig() {
    return this.ctaPrimaryUrl;
  }
  set ctaPrimaryUrlConfig(e) {
    this.ctaPrimaryUrl = e;
  }
  get ctaSecondaryTextConfig() {
    return this.ctaSecondaryText;
  }
  set ctaSecondaryTextConfig(e) {
    this.ctaSecondaryText = e;
  }
  get ctaSecondaryUrlConfig() {
    return this.ctaSecondaryUrl;
  }
  set ctaSecondaryUrlConfig(e) {
    this.ctaSecondaryUrl = e;
  }
  get layoutConfig() {
    return this.layout;
  }
  set layoutConfig(e) {
    this.layout = e || "layout-1";
  }
  get themeStyleConfig() {
    return this.themeStyle;
  }
  set themeStyleConfig(e) {
    this.themeStyle = e || "light";
  }
  render() {
    const e = this.layout === "layout-1" || !this.image, t = this.layout === "layout-2", r = q`
      <div class="text-column">
        <h1>${this.title}</h1>
        <p class="lead">${this.lead}</p>
        <div class="button-group">
          <a class="btn-primary" href="${this.ctaPrimaryUrl}">${this.ctaPrimaryText}</a>
          <a class="btn-secondary" href="${this.ctaSecondaryUrl}">${this.ctaSecondaryText}</a>
        </div>
      </div>
    `, n = q`
      <div class="image-column">
        <img class="hero-img" src="${this.image}" alt="hero graphic">
      </div>
    `;
    return q`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        ${e ? q`
          <div class="container-centered">
            <h1>${this.title}</h1>
            <p class="lead">${this.lead}</p>
            <div class="button-group">
              <a class="btn-primary" href="${this.ctaPrimaryUrl}">${this.ctaPrimaryText}</a>
              <a class="btn-secondary" href="${this.ctaSecondaryUrl}">${this.ctaSecondaryText}</a>
            </div>
          </div>
        ` : q`
          <div class="container-split">
            ${t ? q`${r}${n}` : q`${n}${r}`}
          </div>
        `}
      </section>
    `;
  }
};
x.styles = Ve`
    :host {
      display: block;
      width: 100%;
      --hero-bg: var(--uiv-surface-color, #ffffff);
      --hero-title-color: var(--uiv-text-color, #111827);
      --hero-lead-color: #4b5563;
      --hero-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 90px 6%;
      background: var(--hero-bg);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    /* Theme Variants */
    section.theme-dark {
      --hero-bg: #111827;
      --hero-title-color: #f9fafb;
      --hero-lead-color: #9ca3af;
    }

    section.theme-gradient {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%);
    }

    .container-centered {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }

    .container-split {
      display: flex;
      align-items: center;
      gap: 50px;
    }

    .text-column {
      flex: 1.2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
    }

    .image-column {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: var(--uiv-shadow-depth, 0 15px 35px rgba(0,0,0,0.07));
    }

    h1 {
      font-size: 3rem;
      font-weight: 800;
      color: var(--hero-title-color);
      line-height: 1.15;
      margin: 0 0 20px 0;
      letter-spacing: -0.02em;
    }

    p.lead {
      font-size: 1.15rem;
      line-height: 1.6;
      color: var(--hero-lead-color);
      margin: 0 0 35px 0;
    }

    .button-group {
      display: flex;
      gap: 16px;
    }

    .container-centered .button-group {
      justify-content: center;
    }

    .btn-primary {
      padding: 13px 28px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--hero-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s ease, transform 0.15s ease;
    }

    .btn-secondary {
      padding: 13px 28px;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--hero-title-color);
      background: transparent;
      border: 1px solid var(--uiv-border-color, #d1d5db);
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: background-color 0.2s ease;
    }

    .btn-primary:hover, .btn-secondary:hover {
      opacity: 0.95;
      transform: translateY(-1px);
    }

    .btn-secondary:hover {
      background: rgba(0,0,0,0.03);
    }

    /* Mobile Adaptability */
    @media (max-width: 768px) {
      .container-split {
        flex-direction: column !important;
        text-align: center;
      }
      .text-column {
        text-align: center;
      }
      .button-group {
        justify-content: center;
      }
      h1 {
        font-size: 2.25rem;
      }
    }
  `;
M([
  G({ type: String })
], x.prototype, "title", 2);
M([
  G({ type: String })
], x.prototype, "lead", 2);
M([
  G({ type: String })
], x.prototype, "image", 2);
M([
  G({ type: String, attribute: "cta-primary-text" })
], x.prototype, "ctaPrimaryText", 2);
M([
  G({ type: String, attribute: "cta-primary-url" })
], x.prototype, "ctaPrimaryUrl", 2);
M([
  G({ type: String, attribute: "cta-secondary-text" })
], x.prototype, "ctaSecondaryText", 2);
M([
  G({ type: String, attribute: "cta-secondary-url" })
], x.prototype, "ctaSecondaryUrl", 2);
M([
  G({ type: String })
], x.prototype, "layout", 2);
M([
  G({ type: String, attribute: "theme-style" })
], x.prototype, "themeStyle", 2);
M([
  z({
    attributeType: D.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Headline Title",
    fieldMappings: "title"
  })
], x.prototype, "titleConfig", 1);
M([
  z({
    attributeType: D.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Lead Copy Paragraph",
    fieldMappings: "lead"
  })
], x.prototype, "leadConfig", 1);
M([
  z({
    attributeType: D.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Visual Image URL",
    fieldMappings: "image"
  })
], x.prototype, "imageConfig", 1);
M([
  z({
    attributeType: D.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Primary CTA Label",
    fieldMappings: "ctaPrimaryText"
  })
], x.prototype, "ctaPrimaryTextConfig", 1);
M([
  z({
    attributeType: D.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Primary CTA URL",
    fieldMappings: "ctaPrimaryUrl"
  })
], x.prototype, "ctaPrimaryUrlConfig", 1);
M([
  z({
    attributeType: D.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Secondary CTA Label",
    fieldMappings: "ctaSecondaryText"
  })
], x.prototype, "ctaSecondaryTextConfig", 1);
M([
  z({
    attributeType: D.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Secondary CTA URL",
    fieldMappings: "ctaSecondaryUrl"
  })
], x.prototype, "ctaSecondaryUrlConfig", 1);
M([
  z({
    attributeType: D.PROPERTY,
    uiComponentType: I.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Centered Text Content", value: "layout-1" },
      { label: "Split Left-Text (Image Right)", value: "layout-2" },
      { label: "Split Right-Text (Image Left)", value: "layout-3" }
    ]
  })
], x.prototype, "layoutConfig", 1);
M([
  z({
    attributeType: D.PROPERTY,
    uiComponentType: I.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" },
      { label: "Gradient Overlay", value: "gradient" }
    ]
  })
], x.prototype, "themeStyleConfig", 1);
x = M([
  Le({
    name: "zero-block-hero",
    version: "1.0.0",
    title: "Hero Block",
    elementSelector: "zero-block-hero",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  ze()
], x);
export {
  x as ZeroBlockHero,
  vr as studioTemplate
};
