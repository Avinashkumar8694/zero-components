var Rt = Object.defineProperty;
var Nt = (r, e, t) => e in r ? Rt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var We = (r, e, t) => Nt(r, typeof e != "symbol" ? e + "" : e, t);
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var t = typeof globalThis == "object" ? globalThis : typeof Be == "object" ? Be : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(g, $) {
      return function(_, S) {
        Object.defineProperty(g, _, { configurable: !0, writable: !0, value: S }), $ && $(_, S);
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
    function m() {
      return u() || l();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", u = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", g = { __proto__: [] } instanceof Array, $ = !m && !g, _ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return ve(/* @__PURE__ */ Object.create(null));
      } : g ? function() {
        return ve({ __proto__: null });
      } : function() {
        return ve({});
      },
      has: $ ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: $ ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, S = Object.getPrototypeOf(Function), M = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ot(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Tt(), H = typeof WeakMap == "function" ? WeakMap : Mt(), J = s ? Symbol.for("@reflect-metadata:registry") : void 0, ae = At(), Ae = xt(ae);
    function ot(i, a, o, c) {
      if (y(o)) {
        if (!Ne(i))
          throw new TypeError();
        if (!Le(a))
          throw new TypeError();
        return yt(i, a);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!x(a))
          throw new TypeError();
        if (!x(c) && !y(c) && !q(c))
          throw new TypeError();
        return q(c) && (c = void 0), o = j(o), mt(i, a, o, c);
      }
    }
    e("decorate", ot);
    function lt(i, a) {
      function o(c, v) {
        if (!x(c))
          throw new TypeError();
        if (!y(v) && !St(v))
          throw new TypeError();
        Te(i, a, c, v);
      }
      return o;
    }
    e("metadata", lt);
    function ut(i, a, o, c) {
      if (!x(o))
        throw new TypeError();
      return y(c) || (c = j(c)), Te(i, a, o, c);
    }
    e("defineMetadata", ut);
    function ct(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return y(o) || (o = j(o)), xe(i, a, o);
    }
    e("hasMetadata", ct);
    function dt(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return y(o) || (o = j(o)), pe(i, a, o);
    }
    e("hasOwnMetadata", dt);
    function ht(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return y(o) || (o = j(o)), Ce(i, a, o);
    }
    e("getMetadata", ht);
    function pt(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return y(o) || (o = j(o)), Oe(i, a, o);
    }
    e("getOwnMetadata", pt);
    function ft(i, a) {
      if (!x(i))
        throw new TypeError();
      return y(a) || (a = j(a)), Me(i, a);
    }
    e("getMetadataKeys", ft);
    function gt(i, a) {
      if (!x(i))
        throw new TypeError();
      return y(a) || (a = j(a)), ke(i, a);
    }
    e("getOwnMetadataKeys", gt);
    function vt(i, a, o) {
      if (!x(a))
        throw new TypeError();
      if (y(o) || (o = j(o)), !x(a))
        throw new TypeError();
      y(o) || (o = j(o));
      var c = X(
        a,
        o,
        /*Create*/
        !1
      );
      return y(c) ? !1 : c.OrdinaryDeleteMetadata(i, a, o);
    }
    e("deleteMetadata", vt);
    function yt(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o], v = c(a);
        if (!y(v) && !q(v)) {
          if (!Le(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function mt(i, a, o, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var O = i[v], C = O(a, o, c);
        if (!y(C) && !q(C)) {
          if (!x(C))
            throw new TypeError();
          c = C;
        }
      }
      return c;
    }
    function xe(i, a, o) {
      var c = pe(i, a, o);
      if (c)
        return !0;
      var v = ge(a);
      return q(v) ? !1 : xe(i, v, o);
    }
    function pe(i, a, o) {
      var c = X(
        a,
        o,
        /*Create*/
        !1
      );
      return y(c) ? !1 : Re(c.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Ce(i, a, o) {
      var c = pe(i, a, o);
      if (c)
        return Oe(i, a, o);
      var v = ge(a);
      if (!q(v))
        return Ce(i, v, o);
    }
    function Oe(i, a, o) {
      var c = X(
        a,
        o,
        /*Create*/
        !1
      );
      if (!y(c))
        return c.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Te(i, a, o, c) {
      var v = X(
        o,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, o, c);
    }
    function Me(i, a) {
      var o = ke(i, a), c = ge(i);
      if (c === null)
        return o;
      var v = Me(c, a);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var O = new R(), C = [], b = 0, d = o; b < d.length; b++) {
        var h = d[b], p = O.has(h);
        p || (O.add(h), C.push(h));
      }
      for (var f = 0, w = v; f < w.length; f++) {
        var h = w[f], p = O.has(h);
        p || (O.add(h), C.push(h));
      }
      return C;
    }
    function ke(i, a) {
      var o = X(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Pe(i) {
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
    function y(i) {
      return i === void 0;
    }
    function q(i) {
      return i === null;
    }
    function bt(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function _t(i, a) {
      switch (Pe(i)) {
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
      var o = "string", c = je(i, u);
      if (c !== void 0) {
        var v = c.call(i, o);
        if (x(v))
          throw new TypeError();
        return v;
      }
      return wt(i);
    }
    function wt(i, a) {
      var o, c;
      {
        var v = i.toString;
        if (oe(v)) {
          var c = v.call(i);
          if (!x(c))
            return c;
        }
        var o = i.valueOf;
        if (oe(o)) {
          var c = o.call(i);
          if (!x(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Re(i) {
      return !!i;
    }
    function $t(i) {
      return "" + i;
    }
    function j(i) {
      var a = _t(i);
      return bt(a) ? a : $t(a);
    }
    function Ne(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function oe(i) {
      return typeof i == "function";
    }
    function Le(i) {
      return typeof i == "function";
    }
    function St(i) {
      switch (Pe(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function fe(i, a) {
      return i === a || i !== i && a !== a;
    }
    function je(i, a) {
      var o = i[a];
      if (o != null) {
        if (!oe(o))
          throw new TypeError();
        return o;
      }
    }
    function Ue(i) {
      var a = je(i, l);
      if (!oe(a))
        throw new TypeError();
      var o = a.call(i);
      if (!x(o))
        throw new TypeError();
      return o;
    }
    function De(i) {
      return i.value;
    }
    function He(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Ie(i) {
      var a = i.return;
      a && a.call(i);
    }
    function ge(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === S || a !== S)
        return a;
      var o = i.prototype, c = o && Object.getPrototypeOf(o);
      if (c == null || c === Object.prototype)
        return a;
      var v = c.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function Et() {
      var i;
      !y(J) && typeof t.Reflect < "u" && !(J in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Ct(t.Reflect));
      var a, o, c, v = new H(), O = {
        registerProvider: C,
        getProvider: d,
        setProvider: p
      };
      return O;
      function C(f) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === f:
            break;
          case y(a):
            a = f;
            break;
          case a === f:
            break;
          case y(o):
            o = f;
            break;
          case o === f:
            break;
          default:
            c === void 0 && (c = new R()), c.add(f);
            break;
        }
      }
      function b(f, w) {
        if (!y(a)) {
          if (a.isProviderFor(f, w))
            return a;
          if (!y(o)) {
            if (o.isProviderFor(f, w))
              return a;
            if (!y(c))
              for (var E = Ue(c); ; ) {
                var A = He(E);
                if (!A)
                  return;
                var N = De(A);
                if (N.isProviderFor(f, w))
                  return Ie(E), N;
              }
          }
        }
        if (!y(i) && i.isProviderFor(f, w))
          return i;
      }
      function d(f, w) {
        var E = v.get(f), A;
        return y(E) || (A = E.get(w)), y(A) && (A = b(f, w), y(A) || (y(E) && (E = new M(), v.set(f, E)), E.set(w, A))), A;
      }
      function h(f) {
        if (y(f))
          throw new TypeError();
        return a === f || o === f || !y(c) && c.has(f);
      }
      function p(f, w, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var A = d(f, w);
        if (A !== E) {
          if (!y(A))
            return !1;
          var N = v.get(f);
          y(N) && (N = new M(), v.set(f, N)), N.set(w, E);
        }
        return !0;
      }
    }
    function At() {
      var i;
      return !y(J) && x(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[J]), y(i) && (i = Et()), !y(J) && x(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, J, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function xt(i) {
      var a = new H(), o = {
        isProviderFor: function(h, p) {
          var f = a.get(h);
          return y(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: d
      };
      return ae.registerProvider(o), o;
      function c(h, p, f) {
        var w = a.get(h), E = !1;
        if (y(w)) {
          if (!f)
            return;
          w = new M(), a.set(h, w), E = !0;
        }
        var A = w.get(p);
        if (y(A)) {
          if (!f)
            return;
          if (A = new M(), w.set(p, A), !i.setProvider(h, p, o))
            throw w.delete(p), E && a.delete(h), new Error("Wrong provider for target.");
        }
        return A;
      }
      function v(h, p, f) {
        var w = c(
          p,
          f,
          /*Create*/
          !1
        );
        return y(w) ? !1 : Re(w.has(h));
      }
      function O(h, p, f) {
        var w = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (!y(w))
          return w.get(h);
      }
      function C(h, p, f, w) {
        var E = c(
          f,
          w,
          /*Create*/
          !0
        );
        E.set(h, p);
      }
      function b(h, p) {
        var f = [], w = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (y(w))
          return f;
        for (var E = w.keys(), A = Ue(E), N = 0; ; ) {
          var ze = He(A);
          if (!ze)
            return f.length = N, f;
          var kt = De(ze);
          try {
            f[N] = kt;
          } catch (Pt) {
            try {
              Ie(A);
            } finally {
              throw Pt;
            }
          }
          N++;
        }
      }
      function d(h, p, f) {
        var w = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (y(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var E = a.get(p);
          y(E) || (E.delete(f), E.size === 0 && a.delete(E));
        }
        return !0;
      }
    }
    function Ct(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, O = i.deleteMetadata, C = new H(), b = {
        isProviderFor: function(d, h) {
          var p = C.get(d);
          return !y(p) && p.has(h) ? !0 : v(d, h).length ? (y(p) && (p = new R(), C.set(d, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: O
      };
      return b;
    }
    function X(i, a, o) {
      var c = ae.getProvider(i, a);
      if (!y(c))
        return c;
      if (o) {
        if (ae.setProvider(i, a, Ae))
          return Ae;
        throw new Error("Illegal state.");
      }
    }
    function Ot() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function b(d, h, p) {
            this._index = 0, this._keys = d, this._values = h, this._selector = p;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[l] = function() {
            return this;
          }, b.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), d;
          }, b.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: d, done: !0 };
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
              for (var p = this._keys.length, f = h + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, fe(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new o(this._keys, this._values, O);
          }, b.prototype.entries = function() {
            return new o(this._keys, this._values, C);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[l] = function() {
            return this.entries();
          }, b.prototype._find = function(d, h) {
            if (!fe(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (fe(this._keys[p], d)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return c;
      function v(b, d) {
        return b;
      }
      function O(b, d) {
        return d;
      }
      function C(b, d) {
        return [b, d];
      }
    }
    function Tt() {
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
          }, a.prototype[l] = function() {
            return this.keys();
          }, a;
        }()
      );
      return i;
    }
    function Mt() {
      var i = 16, a = _.create(), o = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var p = v(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? _.has(p, this._key) : !1;
          }, d.prototype.get = function(h) {
            var p = v(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? _.get(p, this._key) : void 0;
          }, d.prototype.set = function(h, p) {
            var f = v(
              h,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
          }, d.prototype.delete = function(h) {
            var p = v(
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
        while (_.has(a, d));
        return a[d] = !0, d;
      }
      function v(d, h) {
        if (!n.call(d, o)) {
          if (!h)
            return;
          Object.defineProperty(d, o, { value: _.create() });
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
          var f = d[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), f < 16 && (h += "0"), h += f.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ve(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function Lt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function jt(r) {
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
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${r.elementSelector}-${r.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Ut(r) {
  return jt(r);
}
function Dt(r) {
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
      update(u) {
        try {
          super.update(u);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var g;
        const u = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (u && m) {
          const $ = new CSSStyleSheet(), _ = (g = u.sheet) == null ? void 0 : g.cssRules;
          _ && (Array.from(_).forEach((S) => $.insertRule(S.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
        } else if (u) {
          const $ = u.cloneNode(!0);
          this.shadowRoot.appendChild($);
        }
        l.forEach(($) => {
          const _ = $.cloneNode(!0);
          this.shadowRoot.appendChild(_);
        });
      }
    }
    return t;
  };
}
function Ht(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function It(r) {
  return function(e, t) {
    try {
      Ht(r);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (r.fieldMappings = r.fieldMappings ?? t), n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function W(r) {
  return It(r);
}
var D;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown";
})(D || (D = {}));
var U;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(U || (U = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, we = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), Ge = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ge.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ge.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (r) => new rt(typeof r == "string" ? r : r + "", void 0, $e), Wt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, u) => n + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[u + 1], r[0]);
  return new rt(t, r, $e);
}, Bt = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ue.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
  }
}, Je = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return zt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Gt, getOwnPropertyDescriptor: Jt, getOwnPropertyNames: qt, getOwnPropertySymbols: Ft, getPrototypeOf: Zt } = Object, z = globalThis, qe = z.trustedTypes, Yt = qe ? qe.emptyScript : "", ye = z.reactiveElementPolyfillSupport, K = (r, e) => r, ce = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Yt : null;
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
} }, Se = (r, e) => !Vt(r, e), Fe = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Se };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class F extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Fe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Gt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: u } = Jt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(l) {
      const m = s == null ? void 0 : s.call(this);
      u.call(this, l), this.requestUpdate(e, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Fe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(K("elementProperties"))) return;
    const e = Zt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(K("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(K("properties"))) {
      const t = this.properties, n = [...qt(t), ...Ft(t)];
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
      for (const s of n) t.unshift(Je(s));
    } else e !== void 0 && t.push(Je(e));
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
    return Bt(e, this.constructor.elementStyles), e;
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
  _$EC(e, t) {
    var u;
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const l = (((u = n.converter) == null ? void 0 : u.toAttribute) !== void 0 ? n.converter : ce).toAttribute(t, n.type);
      this._$Em = e, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const l = n.getPropertyOptions(s), m = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((u = l.converter) == null ? void 0 : u.fromAttribute) !== void 0 ? l.converter : ce;
      this._$Em = s, this[s] = m.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? Se)(this[e], t)) return;
      this.P(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, n) {
    this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
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
        for (const [u, l] of this._$Ep) this[u] = l;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [u, l] of s) l.wrapped !== !0 || this._$AL.has(u) || this[u] === void 0 || this.P(u, this[u], l);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((s) => {
        var u;
        return (u = s.hostUpdate) == null ? void 0 : u.call(s);
      }), this.update(t)) : this._$EU();
    } catch (s) {
      throw e = !1, this._$EU(), s;
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
  _$EU() {
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
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
F.elementStyles = [], F.shadowRootOptions = { mode: "open" }, F[K("elementProperties")] = /* @__PURE__ */ new Map(), F[K("finalized")] = /* @__PURE__ */ new Map(), ye == null || ye({ ReactiveElement: F }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, de = ee.trustedTypes, Ze = de ? de.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, nt = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + I, Xt = `<${it}>`, G = document, re = () => G.createComment(""), ne = (r) => r === null || typeof r != "object" && typeof r != "function", Ee = Array.isArray, Qt = (r) => Ee(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ye = /-->/g, Xe = />/g, B = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, Ke = /"/g, st = /^(?:script|style|textarea|title)$/i, Kt = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), le = Kt(1), Z = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), V = G.createTreeWalker(G, 129);
function at(r, e) {
  if (!Ee(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ze !== void 0 ? Ze.createHTML(e) : e;
}
const er = (r, e) => {
  const t = r.length - 1, n = [];
  let s, u = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Q;
  for (let m = 0; m < t; m++) {
    const g = r[m];
    let $, _, S = -1, M = 0;
    for (; M < g.length && (l.lastIndex = M, _ = l.exec(g), _ !== null); ) M = l.lastIndex, l === Q ? _[1] === "!--" ? l = Ye : _[1] !== void 0 ? l = Xe : _[2] !== void 0 ? (st.test(_[2]) && (s = RegExp("</" + _[2], "g")), l = B) : _[3] !== void 0 && (l = B) : l === B ? _[0] === ">" ? (l = s ?? Q, S = -1) : _[1] === void 0 ? S = -2 : (S = l.lastIndex - _[2].length, $ = _[1], l = _[3] === void 0 ? B : _[3] === '"' ? Ke : Qe) : l === Ke || l === Qe ? l = B : l === Ye || l === Xe ? l = Q : (l = B, s = void 0);
    const R = l === B && r[m + 1].startsWith("/>") ? " " : "";
    u += l === Q ? g + Xt : S >= 0 ? (n.push($), g.slice(0, S) + nt + g.slice(S) + I + R) : g + I + (S === -2 ? m : R);
  }
  return [at(r, u + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ie {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let u = 0, l = 0;
    const m = e.length - 1, g = this.parts, [$, _] = er(e, t);
    if (this.el = ie.createElement($, n), V.currentNode = this.el.content, t === 2 || t === 3) {
      const S = this.el.content.firstChild;
      S.replaceWith(...S.childNodes);
    }
    for (; (s = V.nextNode()) !== null && g.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const S of s.getAttributeNames()) if (S.endsWith(nt)) {
          const M = _[l++], R = s.getAttribute(S).split(I), H = /([.?@])?(.*)/.exec(M);
          g.push({ type: 1, index: u, name: H[2], strings: R, ctor: H[1] === "." ? rr : H[1] === "?" ? nr : H[1] === "@" ? ir : he }), s.removeAttribute(S);
        } else S.startsWith(I) && (g.push({ type: 6, index: u }), s.removeAttribute(S));
        if (st.test(s.tagName)) {
          const S = s.textContent.split(I), M = S.length - 1;
          if (M > 0) {
            s.textContent = de ? de.emptyScript : "";
            for (let R = 0; R < M; R++) s.append(S[R], re()), V.nextNode(), g.push({ type: 2, index: ++u });
            s.append(S[M], re());
          }
        }
      } else if (s.nodeType === 8) if (s.data === it) g.push({ type: 2, index: u });
      else {
        let S = -1;
        for (; (S = s.data.indexOf(I, S + 1)) !== -1; ) g.push({ type: 7, index: u }), S += I.length - 1;
      }
      u++;
    }
  }
  static createElement(e, t) {
    const n = G.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Y(r, e, t = r, n) {
  var l, m;
  if (e === Z) return e;
  let s = n !== void 0 ? (l = t.o) == null ? void 0 : l[n] : t.l;
  const u = ne(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== u && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), u === void 0 ? s = void 0 : (s = new u(r), s._$AT(r, t, n)), n !== void 0 ? (t.o ?? (t.o = []))[n] = s : t.l = s), s !== void 0 && (e = Y(r, s._$AS(r, e.values), s, n)), e;
}
class tr {
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? G).importNode(t, !0);
    V.currentNode = s;
    let u = V.nextNode(), l = 0, m = 0, g = n[0];
    for (; g !== void 0; ) {
      if (l === g.index) {
        let $;
        g.type === 2 ? $ = new se(u, u.nextSibling, this, e) : g.type === 1 ? $ = new g.ctor(u, g.name, g.strings, this, e) : g.type === 6 && ($ = new sr(u, this, e)), this._$AV.push($), g = n[++m];
      }
      l !== (g == null ? void 0 : g.index) && (u = V.nextNode(), l++);
    }
    return V.currentNode = G, s;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this.v = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = Y(this, e, t), ne(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(G.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var u;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ie.createElement(at(n.h, n.h[0]), this.options)), n);
    if (((u = this._$AH) == null ? void 0 : u._$AD) === s) this._$AH.p(t);
    else {
      const l = new tr(s, this), m = l.u(this.options);
      l.p(t), this.T(m), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new ie(e)), t;
  }
  k(e) {
    Ee(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const u of e) s === t.length ? t.push(n = new se(this.O(re()), this.O(re()), this, this.options)) : n = t[s], n._$AI(u), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const s = e.nextSibling;
      e.remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class he {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, u) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = u, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = T;
  }
  _$AI(e, t = this, n, s) {
    const u = this.strings;
    let l = !1;
    if (u === void 0) e = Y(this, e, t, 0), l = !ne(e) || e !== this._$AH && e !== Z, l && (this._$AH = e);
    else {
      const m = e;
      let g, $;
      for (e = u[0], g = 0; g < u.length - 1; g++) $ = Y(this, m[n + g], t, g), $ === Z && ($ = this._$AH[g]), l || (l = !ne($) || $ !== this._$AH[g]), $ === T ? e = T : e !== T && (e += ($ ?? "") + u[g + 1]), this._$AH[g] = $;
    }
    l && !s && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rr extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
class nr extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}
class ir extends he {
  constructor(e, t, n, s, u) {
    super(e, t, n, s, u), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Y(this, e, t, 0) ?? T) === Z) return;
    const n = this._$AH, s = e === T && n !== T || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, u = e !== T && (n === T || s);
    s && this.element.removeEventListener(this.name, this, n), u && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class sr {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Y(this, e);
  }
}
const be = ee.litHtmlPolyfillSupport;
be == null || be(ie, se), (ee.litHtmlVersions ?? (ee.litHtmlVersions = [])).push("3.2.0");
const ar = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const u = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new se(e.insertBefore(re(), u), u, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class te extends F {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = ar(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.o) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.o) == null || e.setConnected(!1);
  }
  render() {
    return Z;
  }
}
var tt;
te._$litElement$ = !0, te.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: te });
const _e = globalThis.litElementPolyfillSupport;
_e == null || _e({ LitElement: te });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const or = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Se }, lr = (r = or, e, t) => {
  const { kind: n, metadata: s } = t;
  let u = globalThis.litPropertyMetadata.get(s);
  if (u === void 0 && globalThis.litPropertyMetadata.set(s, u = /* @__PURE__ */ new Map()), u.set(t.name, r), n === "accessor") {
    const { name: l } = t;
    return { set(m) {
      const g = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(l, g, r);
    }, init(m) {
      return m !== void 0 && this.P(l, void 0, r), m;
    } };
  }
  if (n === "setter") {
    const { name: l } = t;
    return function(m) {
      const g = this[l];
      e.call(this, m), this.requestUpdate(l, g, r);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function L(r) {
  return (e, t) => typeof t == "object" ? lr(r, e, t) : ((n, s, u) => {
    const l = s.hasOwnProperty(u);
    return s.constructor.createProperty(u, l ? { ...n, wrapped: !0 } : n), l ? Object.getOwnPropertyDescriptor(s, u) : void 0;
  })(r, e, t);
}
var ur = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, P = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? cr(e, t) : e, u = r.length - 1, l; u >= 0; u--)
    (l = r[u]) && (s = (n ? l(e, t, s) : l(s)) || s);
  return n && s && ur(e, t, s), s;
};
let k = class extends te {
  constructor() {
    super(...arguments), this.code = `function helloWorld() {
    console.log("Hello, World!");
    return "Welcome to the code editor!";
}

// This is a comment
const message = "Monaco-like editor";
let count = 0;

class CodeEditor {
    constructor() {
        this.initialized = true;
    }
    
    run() {
        helloWorld();
    }
}`, this._languages = this.getDefaultLanguages(), this._language = "javascript", this.theme = "dark", this.showLineNumbers = !0, this.showMinimap = !0, this.wordWrap = !1, this.cursorLine = 1, this.cursorColumn = 1, this.searchVisible = !1, this.searchTerm = "";
  }
  get languages() {
    return this._languages;
  }
  set languages(r) {
    let e;
    if (typeof r == "string")
      try {
        let n = r;
        if (n.includes("'") && (n = n.replace(/'/g, '"')), e = JSON.parse(n), !Array.isArray(e))
          throw new Error("Parsed value is not an array");
      } catch (n) {
        console.warn("Failed to parse languages string, using default languages:", n), console.warn("Original value:", r), e = this.getDefaultLanguages();
      }
    else Array.isArray(r) ? e = r : e = this.getDefaultLanguages();
    const t = e.filter(
      (n) => n && typeof n == "object" && typeof n.value == "string" && typeof n.label == "string"
    );
    this._languages = t.length > 0 ? t : this.getDefaultLanguages(), this.validateCurrentLanguage(), this.requestUpdate();
  }
  getDefaultLanguages() {
    return [
      { value: "javascript", label: "JavaScript" },
      { value: "typescript", label: "TypeScript" },
      { value: "python", label: "Python" },
      { value: "java", label: "Java" },
      { value: "csharp", label: "C#" },
      { value: "html", label: "HTML" },
      { value: "css", label: "CSS" },
      { value: "json", label: "JSON" }
    ];
  }
  validateCurrentLanguage() {
    if (!this._languages.some((e) => e.value === this._language) && this._languages.length > 0) {
      const e = this._language;
      this._language = this._languages[0].value, console.warn(`Current language "${e}" is not available in the updated languages list. Defaulting to "${this._language}".`);
    }
  }
  get language() {
    return this._language;
  }
  set language(r) {
    this.languages.some((t) => t.value === r) ? this._language = r : this.languages.length > 0 ? (this._language = this.languages[0].value, console.warn(`Language "${r}" is not available in the filtered languages list. Defaulting to "${this._language}".`)) : console.warn(`Language "${r}" is not available and no languages are configured. Keeping current language.`), this.requestUpdate();
  }
  onCodeChanged() {
    this.fireChangeEvent();
  }
  firstUpdated() {
    this.updateLineNumbers(), this.setupKeyboardShortcuts();
  }
  updated(r) {
    r.has("code") && (this.updateLineNumbers(), this.updateCursorPosition()), r.has("showLineNumbers") && this.updateLineNumbers();
  }
  updateLineNumbers() {
    var t;
    const r = this.code.split(`
`), e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".line-numbers");
    if (e && this.showLineNumbers) {
      const n = r.map((s, u) => `${u + 1}`);
      e.textContent = n.join(`
`);
    }
  }
  updateCursorPosition() {
    var e;
    const r = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".code-input");
    if (r) {
      const t = r.selectionStart, s = this.code.substring(0, t).split(`
`);
      this.cursorLine = s.length, this.cursorColumn = s[s.length - 1].length + 1;
    }
  }
  setupKeyboardShortcuts() {
    var e;
    const r = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".code-input");
    r && (r.addEventListener("keydown", (t) => {
      if (t.ctrlKey && t.key === "f" && (t.preventDefault(), this.toggleSearch()), t.key === "Tab") {
        t.preventDefault();
        const n = r.selectionStart, s = r.selectionEnd;
        t.shiftKey ? this.unindentSelection(r, n, s) : this.indentSelection(r, n, s);
      }
      ["(", "[", "{", '"', "'"].includes(t.key) && this.handleAutoClosing(t, r);
    }), r.addEventListener("input", (t) => {
      this.handleCodeInput(t), this.requestUpdate();
    }), r.addEventListener("click", () => {
      this.updateCursorPosition();
    }), r.addEventListener("scroll", () => {
      var n;
      const t = (n = this.shadowRoot) == null ? void 0 : n.querySelector(".line-numbers");
      t && (t.scrollTop = r.scrollTop);
    }));
  }
  indentSelection(r, e, t) {
    const n = r.value, s = n.substring(e, t);
    if (s.includes(`
`)) {
      const l = s.split(`
`).map((m) => "    " + m).join(`
`);
      r.value = n.substring(0, e) + l + n.substring(t), r.selectionStart = e, r.selectionEnd = e + l.length;
    } else
      r.value = n.substring(0, e) + "    " + n.substring(t), r.selectionStart = r.selectionEnd = e + 4;
    this.code = r.value;
  }
  unindentSelection(r, e, t) {
    const n = r.value, s = n.substring(0, e), u = n.substring(e, t), l = n.substring(t), $ = u.split(`
`).map((_) => _.startsWith("    ") ? _.substring(4) : _.startsWith("	") ? _.substring(1) : _).join(`
`);
    r.value = s + $ + l, r.selectionStart = e, r.selectionEnd = e + $.length, this.code = r.value;
  }
  handleAutoClosing(r, e) {
    const n = {
      "(": ")",
      "[": "]",
      "{": "}",
      '"': '"',
      "'": "'"
    }[r.key];
    if (n) {
      r.preventDefault();
      const s = e.selectionStart, u = e.selectionEnd, l = e.value;
      e.value = l.substring(0, s) + r.key + n + l.substring(u), e.selectionStart = e.selectionEnd = s + 1, this.code = e.value;
    }
  }
  toggleSearch() {
    this.searchVisible = !this.searchVisible, this.searchVisible && setTimeout(() => {
      var e;
      const r = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".search-input");
      r == null || r.focus();
    }, 0);
  }
  highlightSyntax(r) {
    if (!r) return "";
    let e = r;
    return (this.language === "javascript" || this.language === "typescript") && (e = e.replace(
      /\b(function|const|let|var|if|else|for|while|return|class|constructor|import|export|from|default|async|await|try|catch|finally|throw|new|this|super|extends|implements|interface|type|enum|namespace|public|private|protected|static|readonly|abstract)\b/g,
      '<span class="keyword">$1</span>'
    ), e = e.replace(
      /(["'])((?:\\.|(?!\1)[^\\])*?)\1/g,
      '<span class="string">$1$2$1</span>'
    ), e = e.replace(
      /\/\/.*$/gm,
      '<span class="comment">$&</span>'
    ), e = e.replace(
      /\/\*[\s\S]*?\*\//g,
      '<span class="comment">$&</span>'
    ), e = e.replace(
      /\b\d+\.?\d*\b/g,
      '<span class="number">$&</span>'
    ), e = e.replace(
      /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g,
      '<span class="function">$1</span>'
    )), e;
  }
  handleCodeInput(r) {
    const e = r.target;
    this.code = e.value, this.updateCursorPosition(), this.onCodeChanged();
  }
  fireChangeEvent() {
    this.dispatchEvent(new CustomEvent("code-changed", {
      detail: {
        code: this.code,
        language: this.language
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleLanguageChange(r) {
    const e = r.target;
    this.language = e.value;
  }
  handleThemeChange(r) {
    const e = r.target;
    this.theme = e.value;
  }
  handleSearch(r) {
    const e = r.target;
    this.searchTerm = e.value;
  }
  /**
  * Test method to validate the languages property setter works with JSON strings
  * and that language validation works correctly
  * This can be called from the browser console to test the functionality
  */
  testLanguagesSetter() {
    console.log("Testing languages setter and language validation...");
    const r = '[{"value":"javascript","label":"JavaScript"},{"value":"python","label":"Python"}]';
    console.log("Setting languages with valid JSON string:", r), this.languages = r, console.log("Current languages after valid JSON string:", this.languages);
    const e = "[{'value':'javascript','label':'JavaScript'}]";
    console.log("Setting languages with single quotes JSON:", e), this.languages = e, console.log("Current languages after single quotes JSON:", this.languages);
    const t = [{ value: "typescript", label: "TypeScript" }, { value: "html", label: "HTML" }];
    console.log("Setting languages with array:", t), this.languages = t, console.log("Current languages after array:", this.languages), console.log('Testing language validation - trying to set "python" when not available...'), this.language = "python", console.log("Current language after invalid selection:", this.language);
    const n = '[{"value":"test"';
    console.log("Setting languages with invalid JSON:", n), this.languages = n, console.log("Current languages after invalid JSON (should fallback to defaults):", this.languages), console.log('Testing setting valid language "javascript"...'), this.language = "javascript", console.log("Current language after valid selection:", this.language);
  }
  render() {
    return le`
            <div class="editor-container theme-${this.theme}">
                <div class="editor-header">
                    <div class="editor-tabs">
                        <button class="editor-tab active">
                            ${this.language === "javascript" ? "script.js" : this.language === "typescript" ? "script.ts" : this.language === "python" ? "script.py" : this.language === "html" ? "index.html" : this.language === "css" ? "styles.css" : "file." + this.language}
                        </button>
                    </div>
                    <div class="editor-controls">
                        <div class="toolbar">
                            <button class="icon-button" @click="${this.toggleSearch}" title="Search (Ctrl+F)">🔍</button>                            <select class="language-selector" .value="${this.language}" @change="${this.handleLanguageChange}">
                                ${this.languages.map((r) => le`
                                    <option value="${r.value}">${r.label}</option>
                                `)}
                            </select>
                            <select class="language-selector" .value="${this.theme}" @change="${this.handleThemeChange}">
                                <option value="dark">Dark</option>
                                <option value="light">Light</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="search-box ${this.searchVisible ? "visible" : ""}">
                    <input 
                        type="text" 
                        class="search-input" 
                        placeholder="Find..."
                        .value="${this.searchTerm}"
                        @input="${this.handleSearch}"
                    />
                </div>

                <div class="editor-main">
                    ${this.showLineNumbers ? le`
                        <div class="line-numbers"></div>
                    ` : ""}
                    
                    <div class="editor-content">
                        <textarea
                            class="code-input"
                            .value="${this.code}"
                            @input="${this.handleCodeInput}"
                            placeholder="Start typing your code..."
                            spellcheck="false"
                            style="${this.wordWrap ? "white-space: pre-wrap;" : ""}"
                        ></textarea>
                    </div>

                    ${this.showMinimap ? le`
                        <div class="minimap">
                            <div class="minimap-content">${this.code}</div>
                        </div>
                    ` : ""}
                </div>

                <div class="editor-footer">
                    <div class="status-info">
                        <span>Ln ${this.cursorLine}, Col ${this.cursorColumn}</span>
                        <span>${this.language.toUpperCase()}</span>
                        <span>UTF-8</span>
                    </div>
                    <div class="cursor-position">
                        <span>Lines: ${this.code.split(`
`).length}</span>
                        <span>Characters: ${this.code.length}</span>
                    </div>
                </div>
            </div>
        `;
  }
};
k.styles = Wt`
        :host {
            display: block;
            width: 100%;
            height: 400px;
            border: 1px solid var(--border-color, #d1d5db);
            border-radius: var(--border-radius-lg, 8px);
            overflow: hidden;
            font-family: var(--font-family-mono, 'Courier New', monospace);
            background: var(--editor-background, #1e1e1e);
            position: relative;
        }

        .editor-container {
            display: flex;
            flex-direction: column;
            height: 100%;
        }        .editor-header {
            background: var(--editor-header-background, #2d2d30);
            border-bottom: 1px solid var(--editor-border-color, #3e3e42);
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--editor-text-secondary, #cccccc);
            font-size: var(--font-size-xs, 12px);
        }

        .editor-tabs {
            display: flex;
            gap: 1px;
        }        .editor-tab {
            background: var(--editor-header-background, #2d2d30);
            border: none;
            color: var(--editor-text-secondary, #cccccc);
            padding: var(--spacing-xs, 6px) var(--spacing-md, 12px);
            cursor: pointer;
            border-radius: var(--border-radius-sm, 4px) var(--border-radius-sm, 4px) 0 0;
            font-size: var(--font-size-xs, 12px);
            position: relative;
        }

        .editor-tab.active {
            background: var(--editor-background, #1e1e1e);
            color: var(--editor-text-primary, #ffffff);
        }

        .editor-tab:hover {
            background: var(--editor-hover-background, #3e3e42);
        }

        .editor-controls {
            display: flex;
            gap: 8px;
            align-items: center;
        }        .language-selector {
            background: var(--editor-select-background, #3c3c3c);
            border: 1px solid var(--editor-select-border, #464647);
            color: var(--editor-text-secondary, #cccccc);
            padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px);
            border-radius: var(--border-radius-sm, 4px);
            font-size: var(--font-size-xs, 11px);
        }

        .editor-main {
            display: flex;
            flex: 1;
            overflow: hidden;
        }        .line-numbers {
            background: var(--editor-sidebar-background, #252526);
            color: var(--editor-text-muted, #6e7681);
            padding: var(--spacing-md, 12px) var(--spacing-sm, 8px);
            font-size: var(--font-size-sm, 13px);
            line-height: 1.4;
            text-align: right;
            min-width: 50px;
            border-right: 1px solid var(--editor-border-color, #3e3e42);
            user-select: none;
            overflow: hidden;
            white-space: pre-line;
            font-family: var(--font-family-mono, 'Consolas', 'Courier New', monospace);
        }

        .editor-content {
            flex: 1;
            position: relative;
            overflow: auto;
        }        .code-input {
            width: 100%;
            height: 100%;
            background: transparent;
            color: var(--editor-text-primary, #d4d4d4);
            border: none;
            outline: none;
            font-family: var(--font-family-mono, 'Consolas', 'Courier New', monospace);
            font-size: var(--font-size-sm, 13px);
            line-height: 1.4;
            padding: var(--spacing-md, 12px);
            resize: none;
            white-space: pre;
            overflow-wrap: normal;
            overflow-x: auto;
            tab-size: 4;
        }        .code-highlight {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            font-family: var(--font-family-mono, 'Consolas', 'Courier New', monospace);
            font-size: var(--font-size-sm, 13px);
            line-height: 1.4;
            padding: var(--spacing-md, 12px);
            white-space: pre;
            overflow: hidden;
            color: transparent;
        }

        .keyword { color: var(--syntax-keyword, #569cd6); }
        .string { color: var(--syntax-string, #ce9178); }
        .comment { color: var(--syntax-comment, #6a9955); font-style: italic; }
        .number { color: var(--syntax-number, #b5cea8); }
        .operator { color: var(--syntax-operator, #d4d4d4); }
        .function { color: var(--syntax-function, #dcdcaa); }
        .variable { color: var(--syntax-variable, #9cdcfe); }
        .type { color: var(--syntax-type, #4ec9b0); }        .editor-footer {
            background: var(--primary-color, #007acc);
            color: white;
            padding: var(--spacing-xs, 4px) var(--spacing-md, 12px);
            font-size: var(--font-size-xs, 11px);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .status-info {
            display: flex;
            gap: 16px;
        }

        .cursor-position {
            display: flex;
            gap: 8px;
        }        .minimap {
            width: 100px;
            background: var(--editor-minimap-background, #252526);
            border-left: 1px solid var(--editor-border, #3e3e42);
            overflow: hidden;
            position: relative;
        }

        .minimap-content {
            font-size: var(--editor-minimap-font-size, 2px);
            line-height: 2px;
            color: var(--editor-text, #d4d4d4);
            padding: var(--spacing-xs, 2px);
            white-space: pre;
        }

        .search-box {
            position: absolute;
            top: 50px;
            right: 20px;            background: var(--editor-search-background, #2d2d30);
            border: 1px solid var(--editor-border, #3e3e42);
            border-radius: var(--border-radius-sm, 4px);
            padding: var(--spacing-sm, 8px);
            color: var(--editor-text-secondary, #cccccc);
            z-index: 10;
            display: none;
        }

        .search-box.visible {
            display: block;
        }        .search-input {
            background: var(--editor-select-background, #3c3c3c);
            border: 1px solid var(--editor-select-border, #464647);
            color: var(--editor-text-secondary, #cccccc);
            padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px);
            border-radius: var(--border-radius-xs, 2px);
            font-size: var(--font-size-xs, 11px);
            width: 200px;
        }

        .icon-button {
            background: none;
            border: none;
            color: var(--editor-text-secondary, #cccccc);
            cursor: pointer;
            padding: var(--spacing-xs, 4px);
            border-radius: var(--border-radius-xs, 2px);
            font-size: var(--font-size-xs, 12px);
        }        .icon-button:hover {
            background: var(--editor-button-hover, #3e3e42);
        }

        .toolbar {
            display: flex;
            gap: 4px;
            align-items: center;
        }        .theme-dark {
            background: var(--editor-background-dark, #1e1e1e);
        }

        .theme-light {
            background: var(--editor-background-light, #ffffff);
        }

        .theme-light .editor-header {            background: var(--editor-light-background, #f3f3f3);
            color: var(--editor-light-text, #333333);
            border-bottom-color: var(--editor-light-border, #e1e4e8);
        }        .theme-light .code-input {
            color: var(--editor-light-text-primary, #24292e);
        }

        .theme-light .line-numbers {
            background: var(--editor-light-line-background, #fafbfc);
            color: var(--editor-light-line-text, #6a737d);
            border-right-color: var(--editor-light-border, #e1e4e8);
        }

        .line-numbers-container {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    `;
P([
  L({ type: String }),
  W({
    attributeType: U.PROPERTY,
    uiComponentType: D.TEXTAREA,
    displayLabel: "Code Content",
    placeholderText: "Enter your code here...",
    fieldMappings: "code"
  })
], k.prototype, "code", 2);
P([
  L({ type: Array }),
  W({
    attributeType: U.PROPERTY,
    uiComponentType: D.TEXTAREA,
    displayLabel: "Available Languages",
    placeholderText: "JSON array of language options or actual array",
    fieldMappings: "languages",
    optionItems: {
      type: "Object"
    }
  })
], k.prototype, "languages", 1);
P([
  L({ type: String }),
  W({
    attributeType: U.PROPERTY,
    uiComponentType: D.DROPDOWN,
    displayLabel: "Language",
    optionItems: [
      { value: "javascript", label: "JavaScript" },
      { value: "typescript", label: "TypeScript" },
      { value: "python", label: "Python" },
      { value: "java", label: "Java" },
      { value: "csharp", label: "C#" },
      { value: "html", label: "HTML" },
      { value: "css", label: "CSS" },
      { value: "json", label: "JSON" }
    ],
    fieldMappings: "language"
  })
], k.prototype, "language", 1);
P([
  L({ type: String }),
  W({
    attributeType: U.PROPERTY,
    uiComponentType: D.DROPDOWN,
    displayLabel: "Theme",
    optionItems: [
      { value: "dark", label: "Dark" },
      { value: "light", label: "Light" }
    ],
    fieldMappings: "theme"
  })
], k.prototype, "theme", 2);
P([
  L({ type: Boolean }),
  W({
    attributeType: U.PROPERTY,
    uiComponentType: D.CHECKBOX,
    displayLabel: "Show Line Numbers",
    fieldMappings: "showLineNumbers"
  })
], k.prototype, "showLineNumbers", 2);
P([
  L({ type: Boolean }),
  W({
    attributeType: U.PROPERTY,
    uiComponentType: D.CHECKBOX,
    displayLabel: "Show Minimap",
    fieldMappings: "showMinimap"
  })
], k.prototype, "showMinimap", 2);
P([
  L({ type: Boolean }),
  W({
    attributeType: U.PROPERTY,
    uiComponentType: D.CHECKBOX,
    displayLabel: "Word Wrap",
    fieldMappings: "wordWrap"
  })
], k.prototype, "wordWrap", 2);
P([
  L({ type: Number })
], k.prototype, "cursorLine", 2);
P([
  L({ type: Number })
], k.prototype, "cursorColumn", 2);
P([
  L({ type: Boolean })
], k.prototype, "searchVisible", 2);
P([
  L({ type: String })
], k.prototype, "searchTerm", 2);
P([
  W({
    attributeType: U.EVENT,
    displayLabel: "On Code Changed",
    eventTrigger: "code-changed"
  })
], k.prototype, "onCodeChanged", 1);
k = P([
  Ut({
    name: "code-editor",
    version: "1.0.0",
    title: "Code Editor",
    elementSelector: "zero-code-editor",
    group: "Editors",
    iconName: "code-icon.png"
  }),
  Dt()
], k);
export {
  k as CodeEditor
};
