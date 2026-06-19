var Ht = Object.defineProperty;
var jt = (r, e, t) => e in r ? Ht(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Be = (r, e, t) => jt(r, typeof e != "symbol" ? e + "" : e, t);
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(y, E) {
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
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !g && !y, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return ge(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ge({ __proto__: null });
      } : function() {
        return ge({});
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
    }, $ = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : kt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : It(), L = typeof WeakMap == "function" ? WeakMap : Nt(), q = o ? Symbol.for("@reflect-metadata:registry") : void 0, ae = Ct(), Te = xt(ae);
    function ht(i, s, a, c) {
      if (_(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!Ue(s))
          throw new TypeError();
        return wt(i, s);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!T(s))
          throw new TypeError();
        if (!T(c) && !_(c) && !Y(c))
          throw new TypeError();
        return Y(c) && (c = void 0), a = D(a), Et(i, s, a, c);
      }
    }
    e("decorate", ht);
    function pt(i, s) {
      function a(c, v) {
        if (!T(c))
          throw new TypeError();
        if (!_(v) && !Mt(v))
          throw new TypeError();
        Ce(i, s, c, v);
      }
      return a;
    }
    e("metadata", pt);
    function ft(i, s, a, c) {
      if (!T(a))
        throw new TypeError();
      return _(c) || (c = D(c)), Ce(i, s, a, c);
    }
    e("defineMetadata", ft);
    function yt(i, s, a) {
      if (!T(s))
        throw new TypeError();
      return _(a) || (a = D(a)), Oe(i, s, a);
    }
    e("hasMetadata", yt);
    function vt(i, s, a) {
      if (!T(s))
        throw new TypeError();
      return _(a) || (a = D(a)), fe(i, s, a);
    }
    e("hasOwnMetadata", vt);
    function gt(i, s, a) {
      if (!T(s))
        throw new TypeError();
      return _(a) || (a = D(a)), Me(i, s, a);
    }
    e("getMetadata", gt);
    function _t(i, s, a) {
      if (!T(s))
        throw new TypeError();
      return _(a) || (a = D(a)), Pe(i, s, a);
    }
    e("getOwnMetadata", _t);
    function bt(i, s) {
      if (!T(i))
        throw new TypeError();
      return _(s) || (s = D(s)), xe(i, s);
    }
    e("getMetadataKeys", bt);
    function mt(i, s) {
      if (!T(i))
        throw new TypeError();
      return _(s) || (s = D(s)), Re(i, s);
    }
    e("getOwnMetadataKeys", mt);
    function $t(i, s, a) {
      if (!T(s))
        throw new TypeError();
      if (_(a) || (a = D(a)), !T(s))
        throw new TypeError();
      _(a) || (a = D(a));
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, a);
    }
    e("deleteMetadata", $t);
    function wt(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(s);
        if (!_(v) && !Y(v)) {
          if (!Ue(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function Et(i, s, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var M = i[v], O = M(s, a, c);
        if (!_(O) && !Y(O)) {
          if (!T(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Oe(i, s, a) {
      var c = fe(i, s, a);
      if (c)
        return !0;
      var v = ve(s);
      return Y(v) ? !1 : Oe(i, v, a);
    }
    function fe(i, s, a) {
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : Ie(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Me(i, s, a) {
      var c = fe(i, s, a);
      if (c)
        return Pe(i, s, a);
      var v = ve(s);
      if (!Y(v))
        return Me(i, v, a);
    }
    function Pe(i, s, a) {
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Ce(i, s, a, c) {
      var v = Q(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function xe(i, s) {
      var a = Re(i, s), c = ve(i);
      if (c === null)
        return a;
      var v = xe(c, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var M = new R(), O = [], b = 0, d = a; b < d.length; b++) {
        var h = d[b], p = M.has(h);
        p || (M.add(h), O.push(h));
      }
      for (var f = 0, m = v; f < m.length; f++) {
        var h = m[f], p = M.has(h);
        p || (M.add(h), O.push(h));
      }
      return O;
    }
    function Re(i, s) {
      var a = Q(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
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
    function _(i) {
      return i === void 0;
    }
    function Y(i) {
      return i === null;
    }
    function At(i) {
      return typeof i == "symbol";
    }
    function T(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function St(i, s) {
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
      var a = "string", c = De(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (T(v))
          throw new TypeError();
        return v;
      }
      return Tt(i);
    }
    function Tt(i, s) {
      var a, c;
      {
        var v = i.toString;
        if (le(v)) {
          var c = v.call(i);
          if (!T(c))
            return c;
        }
        var a = i.valueOf;
        if (le(a)) {
          var c = a.call(i);
          if (!T(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ie(i) {
      return !!i;
    }
    function Ot(i) {
      return "" + i;
    }
    function D(i) {
      var s = St(i);
      return At(s) ? s : Ot(s);
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
    function Mt(i) {
      switch (ke(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ye(i, s) {
      return i === s || i !== i && s !== s;
    }
    function De(i, s) {
      var a = i[s];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function He(i) {
      var s = De(i, u);
      if (!le(s))
        throw new TypeError();
      var a = s.call(i);
      if (!T(a))
        throw new TypeError();
      return a;
    }
    function je(i) {
      return i.value;
    }
    function Le(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function ze(i) {
      var s = i.return;
      s && s.call(i);
    }
    function ve(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || s !== $)
        return s;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var v = c.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function Pt() {
      var i;
      !_(q) && typeof t.Reflect < "u" && !(q in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Rt(t.Reflect));
      var s, a, c, v = new L(), M = {
        registerProvider: O,
        getProvider: d,
        setProvider: p
      };
      return M;
      function O(f) {
        if (!Object.isExtensible(M))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === f:
            break;
          case _(s):
            s = f;
            break;
          case s === f:
            break;
          case _(a):
            a = f;
            break;
          case a === f:
            break;
          default:
            c === void 0 && (c = new R()), c.add(f);
            break;
        }
      }
      function b(f, m) {
        if (!_(s)) {
          if (s.isProviderFor(f, m))
            return s;
          if (!_(a)) {
            if (a.isProviderFor(f, m))
              return s;
            if (!_(c))
              for (var A = He(c); ; ) {
                var S = Le(A);
                if (!S)
                  return;
                var I = je(S);
                if (I.isProviderFor(f, m))
                  return ze(A), I;
              }
          }
        }
        if (!_(i) && i.isProviderFor(f, m))
          return i;
      }
      function d(f, m) {
        var A = v.get(f), S;
        return _(A) || (S = A.get(m)), _(S) && (S = b(f, m), _(S) || (_(A) && (A = new C(), v.set(f, A)), A.set(m, S))), S;
      }
      function h(f) {
        if (_(f))
          throw new TypeError();
        return s === f || a === f || !_(c) && c.has(f);
      }
      function p(f, m, A) {
        if (!h(A))
          throw new Error("Metadata provider not registered.");
        var S = d(f, m);
        if (S !== A) {
          if (!_(S))
            return !1;
          var I = v.get(f);
          _(I) && (I = new C(), v.set(f, I)), I.set(m, A);
        }
        return !0;
      }
    }
    function Ct() {
      var i;
      return !_(q) && T(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[q]), _(i) && (i = Pt()), !_(q) && T(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, q, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function xt(i) {
      var s = new L(), a = {
        isProviderFor: function(h, p) {
          var f = s.get(h);
          return _(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: d
      };
      return ae.registerProvider(a), a;
      function c(h, p, f) {
        var m = s.get(h), A = !1;
        if (_(m)) {
          if (!f)
            return;
          m = new C(), s.set(h, m), A = !0;
        }
        var S = m.get(p);
        if (_(S)) {
          if (!f)
            return;
          if (S = new C(), m.set(p, S), !i.setProvider(h, p, a))
            throw m.delete(p), A && s.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, p, f) {
        var m = c(
          p,
          f,
          /*Create*/
          !1
        );
        return _(m) ? !1 : Ie(m.has(h));
      }
      function M(h, p, f) {
        var m = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (!_(m))
          return m.get(h);
      }
      function O(h, p, f, m) {
        var A = c(
          f,
          m,
          /*Create*/
          !0
        );
        A.set(h, p);
      }
      function b(h, p) {
        var f = [], m = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (_(m))
          return f;
        for (var A = m.keys(), S = He(A), I = 0; ; ) {
          var Ge = Le(S);
          if (!Ge)
            return f.length = I, f;
          var Ut = je(Ge);
          try {
            f[I] = Ut;
          } catch (Dt) {
            try {
              ze(S);
            } finally {
              throw Dt;
            }
          }
          I++;
        }
      }
      function d(h, p, f) {
        var m = c(
          p,
          f,
          /*Create*/
          !1
        );
        if (_(m) || !m.delete(h))
          return !1;
        if (m.size === 0) {
          var A = s.get(p);
          _(A) || (A.delete(f), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function Rt(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, M = i.deleteMetadata, O = new L(), b = {
        isProviderFor: function(d, h) {
          var p = O.get(d);
          return !_(p) && p.has(h) ? !0 : v(d, h).length ? (_(p) && (p = new R(), O.set(d, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: M
      };
      return b;
    }
    function Q(i, s, a) {
      var c = ae.getProvider(i, s);
      if (!_(c))
        return c;
      if (a) {
        if (ae.setProvider(i, s, Te))
          return Te;
        throw new Error("Illegal state.");
      }
    }
    function kt() {
      var i = {}, s = [], a = (
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
              for (var p = this._keys.length, f = h + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, ye(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, M);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
            return this.entries();
          }, b.prototype._find = function(d, h) {
            if (!ye(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (ye(this._keys[p], d)) {
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
      function M(b, d) {
        return d;
      }
      function O(b, d) {
        return [b, d];
      }
    }
    function It() {
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
          }), s.prototype.has = function(a) {
            return this._map.has(a);
          }, s.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, s.prototype.delete = function(a) {
            return this._map.delete(a);
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
    function Nt() {
      var i = 16, s = w.create(), a = c();
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
            return p !== void 0 ? w.has(p, this._key) : !1;
          }, d.prototype.get = function(h) {
            var p = v(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? w.get(p, this._key) : void 0;
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
        while (w.has(s, d));
        return s[d] = !0, d;
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
        for (var p = 0; p < h; ++p)
          d[p] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : M(h, d), h;
        }
        return M(new Array(d), d);
      }
      function b() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var f = d[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), f < 16 && (h += "0"), h += f.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ge(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function Lt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function zt(r) {
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
function Gt(r) {
  return zt(r);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const w = new CSSStyleSheet(), $ = (E = l.sheet) == null ? void 0 : E.cssRules;
          $ && (Array.from($).forEach((C) => w.insertRule(C.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          y.appendChild(w);
        }
        u.forEach((w) => {
          const $ = w.cloneNode(!0);
          y.appendChild($);
        });
      }
    }
    return t;
  };
}
function Wt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Vt(r) {
  return function(e, t) {
    try {
      Wt(r);
      const n = Reflect.getMetadata("ZeroAttribute", e) || [];
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
function H(r) {
  return Vt(r);
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
const ce = globalThis, we = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
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
      n && (e = Fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (r) => new at(typeof r == "string" ? r : r + "", void 0, Ee), qt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new at(t, r, Ee);
}, Yt = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ce.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, qe = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Ft(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Xt, defineProperty: Zt, getOwnPropertyDescriptor: Jt, getOwnPropertyNames: Qt, getOwnPropertySymbols: Kt, getPrototypeOf: er } = Object, G = globalThis, Ye = G.trustedTypes, tr = Ye ? Ye.emptyScript : "", _e = G.reactiveElementPolyfillSupport, ee = (r, e) => r, de = { toAttribute(r, e) {
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
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), G.litPropertyMetadata ?? (G.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let X = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Xe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Zt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = Jt(this.prototype, e) ?? { get() {
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
      for (const o of n) t.unshift(qe(o));
    } else e !== void 0 && t.push(qe(e));
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
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : de).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const g = n.getPropertyOptions(o), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : de;
      this._$Em = o;
      const E = y.fromAttribute(t, g.type);
      this[o] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var u;
    if (e !== void 0) {
      const g = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = g.getPropertyOptions(e)), !((n.hasChanged ?? Ae)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(g._$Eu(e, n)))) return;
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
        const { wrapped: g } = u, y = this[l];
        g !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
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
X.elementStyles = [], X.shadowRootOptions = { mode: "open" }, X[ee("elementProperties")] = /* @__PURE__ */ new Map(), X[ee("finalized")] = /* @__PURE__ */ new Map(), _e == null || _e({ ReactiveElement: X }), (G.reactiveElementVersions ?? (G.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Ze = (r) => r, he = te.trustedTypes, Je = he ? he.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, lt = "$lit$", z = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + z, rr = `<${ut}>`, F = document, ne = () => F.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Se = Array.isArray, nr = (r) => Se(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", be = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, B = RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, ct = /^(?:script|style|textarea|title)$/i, ir = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ue = ir(1), Z = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), W = F.createTreeWalker(F, 129);
function dt(r, e) {
  if (!Se(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const or = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let g = 0; g < t; g++) {
    const y = r[g];
    let E, w, $ = -1, C = 0;
    for (; C < y.length && (u.lastIndex = C, w = u.exec(y), w !== null); ) C = u.lastIndex, u === K ? w[1] === "!--" ? u = Qe : w[1] !== void 0 ? u = Ke : w[2] !== void 0 ? (ct.test(w[2]) && (o = RegExp("</" + w[2], "g")), u = B) : w[3] !== void 0 && (u = B) : u === B ? w[0] === ">" ? (u = o ?? K, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? B : w[3] === '"' ? tt : et) : u === tt || u === et ? u = B : u === Qe || u === Ke ? u = K : (u = B, o = void 0);
    const R = u === B && r[g + 1].startsWith("/>") ? " " : "";
    l += u === K ? y + rr : $ >= 0 ? (n.push(E), y.slice(0, $) + lt + y.slice($) + z + R) : y + z + ($ === -2 ? g : R);
  }
  return [dt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class oe {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const g = e.length - 1, y = this.parts, [E, w] = or(e, t);
    if (this.el = oe.createElement(E, n), W.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = W.nextNode()) !== null && y.length < g; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(lt)) {
          const C = w[u++], R = o.getAttribute($).split(z), L = /([.?@])?(.*)/.exec(C);
          y.push({ type: 1, index: l, name: L[2], strings: R, ctor: L[1] === "." ? ar : L[1] === "?" ? lr : L[1] === "@" ? ur : pe }), o.removeAttribute($);
        } else $.startsWith(z) && (y.push({ type: 6, index: l }), o.removeAttribute($));
        if (ct.test(o.tagName)) {
          const $ = o.textContent.split(z), C = $.length - 1;
          if (C > 0) {
            o.textContent = he ? he.emptyScript : "";
            for (let R = 0; R < C; R++) o.append($[R], ne()), W.nextNode(), y.push({ type: 2, index: ++l });
            o.append($[C], ne());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ut) y.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(z, $ + 1)) !== -1; ) y.push({ type: 7, index: l }), $ += z.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = F.createElement("template");
    return n.innerHTML = e, n;
  }
}
function J(r, e, t = r, n) {
  var u, g;
  if (e === Z) return e;
  let o = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ie(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((g = o == null ? void 0 : o._$AO) == null || g.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = J(r, o._$AS(r, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? F).importNode(t, !0);
    W.currentNode = o;
    let l = W.nextNode(), u = 0, g = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new se(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new cr(l, this, e)), this._$AV.push(E), y = n[++g];
      }
      u !== (y == null ? void 0 : y.index) && (l = W.nextNode(), u++);
    }
    return W.currentNode = F, o;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = J(this, e, t), ie(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : nr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== P && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(F.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = oe.createElement(dt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const u = new sr(o, this), g = u.u(this.options);
      u.p(t), this.T(g), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new oe(e)), t;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new se(this.O(ne()), this.O(ne()), this, this.options)) : n = t[o], n._$AI(l), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = Ze(e).nextSibling;
      Ze(e).remove(), e = o;
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
  constructor(e, t, n, o, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = P;
  }
  _$AI(e, t = this, n, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = J(this, e, t, 0), u = !ie(e) || e !== this._$AH && e !== Z, u && (this._$AH = e);
    else {
      const g = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = J(this, g[n + y], t, y), E === Z && (E = this._$AH[y]), u || (u = !ie(E) || E !== this._$AH[y]), E === P ? e = P : e !== P && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !o && this.j(e);
  }
  j(e) {
    e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ar extends pe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === P ? void 0 : e;
  }
}
class lr extends pe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== P);
  }
}
class ur extends pe {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = J(this, e, t, 0) ?? P) === Z) return;
    const n = this._$AH, o = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== P && (n === P || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
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
me == null || me(oe, se), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
const dr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new se(e.insertBefore(ne(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = globalThis;
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = dr(t, this.renderRoot, this.renderOptions);
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
re._$litElement$ = !0, re.finalized = !0, (st = V.litElementHydrateSupport) == null || st.call(V, { LitElement: re });
const $e = V.litElementPolyfillSupport;
$e == null || $e({ LitElement: re });
(V.litElementVersions ?? (V.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hr = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ae }, pr = (r = hr, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(g) {
      const y = e.get.call(this);
      e.set.call(this, g), this.requestUpdate(u, y, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(u, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(g) {
      const y = this[u];
      e.call(this, g), this.requestUpdate(u, y, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function j(r) {
  return (e, t) => typeof t == "object" ? pr(r, e, t) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
var fr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, U = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? yr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(e, t, o) : u(o)) || o);
  return n && o && fr(e, t, o), o;
};
const nt = () => window.zeroThemeManager, it = {
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
function ot(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let x = class extends re {
  constructor() {
    super(...arguments), this.theme = "modern", this.label = "Label", this.placeholder = "Type something...", this.value = "", this.error = !1, this.errorText = "", this.disabled = !1, this.cornerTag = "SEC-v2", this.accentColor = "", this.onInputEvent = "input";
  }
  static getStudioTemplate(r) {
    if (!r) return it;
    const e = ot(r.studio.display.label || "Input Label"), t = ot(r.studio.display.placeholder || "Enter text...");
    return {
      ...it,
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
    super.connectedCallback(), (r = nt()) == null || r.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var t;
    const r = (t = nt()) == null ? void 0 : t.getActiveTheme("zero-uiv-themes"), e = this.theme || (r == null ? void 0 : r.id) || "modern";
    return ue`
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
                ${this.error ? ue`<div class="error-msg">${this.errorText}</div>` : ""}
            </div>
        `;
  }
  renderTemplate(r) {
    return r === "cyber" ? ue`
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
            ` : ue`
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
x.styles = qt`
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
U([
  j({ type: String }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.DROPDOWN,
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
], x.prototype, "theme", 2);
U([
  j({ type: String }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], x.prototype, "label", 2);
U([
  j({ type: String }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Placeholder",
    fieldMappings: "placeholder"
  })
], x.prototype, "placeholder", 2);
U([
  j({ type: String }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
], x.prototype, "value", 2);
U([
  j({ type: Boolean }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Error State",
    fieldMappings: "error"
  })
], x.prototype, "error", 2);
U([
  j({ type: String }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Error Message",
    fieldMappings: "errorText"
  })
], x.prototype, "errorText", 2);
U([
  j({ type: Boolean }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], x.prototype, "disabled", 2);
U([
  j({ type: String }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.TEXT_INPUT,
    displayLabel: "Corner Tag (Cyber-only)",
    fieldMappings: "cornerTag"
  })
], x.prototype, "cornerTag", 2);
U([
  j({ type: String }),
  H({
    attributeType: k.PROPERTY,
    uiComponentType: N.COLOR_PICKER,
    displayLabel: "Accent Color Overlay",
    fieldMappings: "accentColor"
  })
], x.prototype, "accentColor", 2);
U([
  H({
    attributeType: k.EVENT,
    eventTrigger: "input",
    displayLabel: "On Input"
  })
], x.prototype, "onInputEvent", 2);
x = U([
  Gt({
    name: "zero-uiv-input",
    version: "1.0.0",
    title: "Unified Input",
    elementSelector: "zero-uiv-input",
    group: "Uiverse Inputs",
    iconName: "input-icon.png"
  }),
  Bt()
], x);
export {
  x as ZeroUivInput,
  it as studioTemplate
};
