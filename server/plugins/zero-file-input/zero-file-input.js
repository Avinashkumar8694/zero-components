var zt = Object.defineProperty;
var jt = (t, e, r) => e in t ? zt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var We = (t, e, r) => jt(t, typeof e != "symbol" ? e + "" : e, r);
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
    var r = typeof globalThis == "object" ? globalThis : typeof qe == "object" ? qe : typeof self == "object" ? self : typeof this == "object" ? this : g(), i = n(t);
    typeof r.Reflect < "u" && (i = n(r.Reflect, i)), e(i, r), typeof r.Reflect > "u" && (r.Reflect = t);
    function n(y, E) {
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
  })(function(e, r) {
    var i = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", l = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !g && !y, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return me(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return me({ __proto__: null });
      } : function() {
        return me({});
      },
      has: E ? function(s, o) {
        return i.call(s, o);
      } : function(s, o) {
        return o in s;
      },
      get: E ? function(s, o) {
        return i.call(s, o) ? s[o] : void 0;
      } : function(s, o) {
        return s[o];
      }
    }, $ = Object.getPrototypeOf(Function), N = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Nt(), F = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ft(), z = typeof WeakMap == "function" ? WeakMap : Ht(), X = n ? Symbol.for("@reflect-metadata:registry") : void 0, le = kt(), Ae = Dt(le);
    function yt(s, o, a, d) {
      if (m(a)) {
        if (!Fe(s))
          throw new TypeError();
        if (!He(o))
          throw new TypeError();
        return Ct(s, o);
      } else {
        if (!Fe(s))
          throw new TypeError();
        if (!R(o))
          throw new TypeError();
        if (!R(d) && !m(d) && !Z(d))
          throw new TypeError();
        return Z(d) && (d = void 0), a = I(a), Pt(s, o, a, d);
      }
    }
    e("decorate", yt);
    function vt(s, o) {
      function a(d, v) {
        if (!R(d))
          throw new TypeError();
        if (!m(v) && !Mt(v))
          throw new TypeError();
        Re(s, o, d, v);
      }
      return a;
    }
    e("metadata", vt);
    function gt(s, o, a, d) {
      if (!R(a))
        throw new TypeError();
      return m(d) || (d = I(d)), Re(s, o, a, d);
    }
    e("defineMetadata", gt);
    function mt(s, o, a) {
      if (!R(o))
        throw new TypeError();
      return m(a) || (a = I(a)), Se(s, o, a);
    }
    e("hasMetadata", mt);
    function bt(s, o, a) {
      if (!R(o))
        throw new TypeError();
      return m(a) || (a = I(a)), ye(s, o, a);
    }
    e("hasOwnMetadata", bt);
    function _t(s, o, a) {
      if (!R(o))
        throw new TypeError();
      return m(a) || (a = I(a)), Oe(s, o, a);
    }
    e("getMetadata", _t);
    function $t(s, o, a) {
      if (!R(o))
        throw new TypeError();
      return m(a) || (a = I(a)), Me(s, o, a);
    }
    e("getOwnMetadata", $t);
    function wt(s, o) {
      if (!R(s))
        throw new TypeError();
      return m(o) || (o = I(o)), ke(s, o);
    }
    e("getMetadataKeys", wt);
    function Et(s, o) {
      if (!R(s))
        throw new TypeError();
      return m(o) || (o = I(o)), De(s, o);
    }
    e("getOwnMetadataKeys", Et);
    function Tt(s, o, a) {
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
      return m(d) ? !1 : d.OrdinaryDeleteMetadata(s, o, a);
    }
    e("deleteMetadata", Tt);
    function Ct(s, o) {
      for (var a = s.length - 1; a >= 0; --a) {
        var d = s[a], v = d(o);
        if (!m(v) && !Z(v)) {
          if (!He(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function Pt(s, o, a, d) {
      for (var v = s.length - 1; v >= 0; --v) {
        var D = s[v], k = D(o, a, d);
        if (!m(k) && !Z(k)) {
          if (!R(k))
            throw new TypeError();
          d = k;
        }
      }
      return d;
    }
    function Se(s, o, a) {
      var d = ye(s, o, a);
      if (d)
        return !0;
      var v = ge(o);
      return Z(v) ? !1 : Se(s, v, a);
    }
    function ye(s, o, a) {
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return m(d) ? !1 : Ne(d.OrdinaryHasOwnMetadata(s, o, a));
    }
    function Oe(s, o, a) {
      var d = ye(s, o, a);
      if (d)
        return Me(s, o, a);
      var v = ge(o);
      if (!Z(v))
        return Oe(s, v, a);
    }
    function Me(s, o, a) {
      var d = Q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(d))
        return d.OrdinaryGetOwnMetadata(s, o, a);
    }
    function Re(s, o, a, d) {
      var v = Q(
        a,
        d,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(s, o, a, d);
    }
    function ke(s, o) {
      var a = De(s, o), d = ge(s);
      if (d === null)
        return a;
      var v = ke(d, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var D = new F(), k = [], b = 0, h = a; b < h.length; b++) {
        var c = h[b], p = D.has(c);
        p || (D.add(c), k.push(c));
      }
      for (var f = 0, _ = v; f < _.length; f++) {
        var c = _[f], p = D.has(c);
        p || (D.add(c), k.push(c));
      }
      return k;
    }
    function De(s, o) {
      var a = Q(
        s,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(s, o) : [];
    }
    function Ue(s) {
      if (s === null)
        return 1;
      switch (typeof s) {
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
          return s === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function m(s) {
      return s === void 0;
    }
    function Z(s) {
      return s === null;
    }
    function xt(s) {
      return typeof s == "symbol";
    }
    function R(s) {
      return typeof s == "object" ? s !== null : typeof s == "function";
    }
    function At(s, o) {
      switch (Ue(s)) {
        case 0:
          return s;
        case 1:
          return s;
        case 2:
          return s;
        case 3:
          return s;
        case 4:
          return s;
        case 5:
          return s;
      }
      var a = "string", d = Le(s, l);
      if (d !== void 0) {
        var v = d.call(s, a);
        if (R(v))
          throw new TypeError();
        return v;
      }
      return St(s);
    }
    function St(s, o) {
      var a, d;
      {
        var v = s.toString;
        if (ue(v)) {
          var d = v.call(s);
          if (!R(d))
            return d;
        }
        var a = s.valueOf;
        if (ue(a)) {
          var d = a.call(s);
          if (!R(d))
            return d;
        }
      }
      throw new TypeError();
    }
    function Ne(s) {
      return !!s;
    }
    function Ot(s) {
      return "" + s;
    }
    function I(s) {
      var o = At(s);
      return xt(o) ? o : Ot(o);
    }
    function Fe(s) {
      return Array.isArray ? Array.isArray(s) : s instanceof Object ? s instanceof Array : Object.prototype.toString.call(s) === "[object Array]";
    }
    function ue(s) {
      return typeof s == "function";
    }
    function He(s) {
      return typeof s == "function";
    }
    function Mt(s) {
      switch (Ue(s)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ve(s, o) {
      return s === o || s !== s && o !== o;
    }
    function Le(s, o) {
      var a = s[o];
      if (a != null) {
        if (!ue(a))
          throw new TypeError();
        return a;
      }
    }
    function Ie(s) {
      var o = Le(s, u);
      if (!ue(o))
        throw new TypeError();
      var a = o.call(s);
      if (!R(a))
        throw new TypeError();
      return a;
    }
    function ze(s) {
      return s.value;
    }
    function je(s) {
      var o = s.next();
      return o.done ? !1 : o;
    }
    function Be(s) {
      var o = s.return;
      o && o.call(s);
    }
    function ge(s) {
      var o = Object.getPrototypeOf(s);
      if (typeof s != "function" || s === $ || o !== $)
        return o;
      var a = s.prototype, d = a && Object.getPrototypeOf(a);
      if (d == null || d === Object.prototype)
        return o;
      var v = d.constructor;
      return typeof v != "function" || v === s ? o : v;
    }
    function Rt() {
      var s;
      !m(X) && typeof r.Reflect < "u" && !(X in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (s = Ut(r.Reflect));
      var o, a, d, v = new z(), D = {
        registerProvider: k,
        getProvider: h,
        setProvider: p
      };
      return D;
      function k(f) {
        if (!Object.isExtensible(D))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case s === f:
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
              for (var P = Ie(d); ; ) {
                var O = je(P);
                if (!O)
                  return;
                var H = ze(O);
                if (H.isProviderFor(f, _))
                  return Be(P), H;
              }
          }
        }
        if (!m(s) && s.isProviderFor(f, _))
          return s;
      }
      function h(f, _) {
        var P = v.get(f), O;
        return m(P) || (O = P.get(_)), m(O) && (O = b(f, _), m(O) || (m(P) && (P = new N(), v.set(f, P)), P.set(_, O))), O;
      }
      function c(f) {
        if (m(f))
          throw new TypeError();
        return o === f || a === f || !m(d) && d.has(f);
      }
      function p(f, _, P) {
        if (!c(P))
          throw new Error("Metadata provider not registered.");
        var O = h(f, _);
        if (O !== P) {
          if (!m(O))
            return !1;
          var H = v.get(f);
          m(H) && (H = new N(), v.set(f, H)), H.set(_, P);
        }
        return !0;
      }
    }
    function kt() {
      var s;
      return !m(X) && R(r.Reflect) && Object.isExtensible(r.Reflect) && (s = r.Reflect[X]), m(s) && (s = Rt()), !m(X) && R(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, X, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: s
      }), s;
    }
    function Dt(s) {
      var o = new z(), a = {
        isProviderFor: function(c, p) {
          var f = o.get(c);
          return m(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: k,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: D,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: h
      };
      return le.registerProvider(a), a;
      function d(c, p, f) {
        var _ = o.get(c), P = !1;
        if (m(_)) {
          if (!f)
            return;
          _ = new N(), o.set(c, _), P = !0;
        }
        var O = _.get(p);
        if (m(O)) {
          if (!f)
            return;
          if (O = new N(), _.set(p, O), !s.setProvider(c, p, a))
            throw _.delete(p), P && o.delete(c), new Error("Wrong provider for target.");
        }
        return O;
      }
      function v(c, p, f) {
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
        var P = d(
          f,
          _,
          /*Create*/
          !0
        );
        P.set(c, p);
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
        for (var P = _.keys(), O = Ie(P), H = 0; ; ) {
          var Ve = je(O);
          if (!Ve)
            return f.length = H, f;
          var Lt = ze(Ve);
          try {
            f[H] = Lt;
          } catch (It) {
            try {
              Be(O);
            } finally {
              throw It;
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
          var P = o.get(p);
          m(P) || (P.delete(f), P.size === 0 && o.delete(P));
        }
        return !0;
      }
    }
    function Ut(s) {
      var o = s.defineMetadata, a = s.hasOwnMetadata, d = s.getOwnMetadata, v = s.getOwnMetadataKeys, D = s.deleteMetadata, k = new z(), b = {
        isProviderFor: function(h, c) {
          var p = k.get(h);
          return !m(p) && p.has(c) ? !0 : v(h, c).length ? (m(p) && (p = new F(), k.set(h, p)), p.add(c), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: d,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: D
      };
      return b;
    }
    function Q(s, o, a) {
      var d = le.getProvider(s, o);
      if (!m(d))
        return d;
      if (a) {
        if (le.setProvider(s, o, Ae))
          return Ae;
        throw new Error("Illegal state.");
      }
    }
    function Nt() {
      var s = {}, o = [], a = (
        /** @class */
        function() {
          function b(h, c, p) {
            this._index = 0, this._keys = h, this._values = c, this._selector = p;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[u] = function() {
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
            this._keys = [], this._values = [], this._cacheKey = s, this._cacheIndex = -2;
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
              return this._keys.length--, this._values.length--, ve(h, this._cacheKey) && (this._cacheKey = s, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = s, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, D);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, k);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[u] = function() {
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
      function v(b, h) {
        return b;
      }
      function D(b, h) {
        return h;
      }
      function k(b, h) {
        return [b, h];
      }
    }
    function Ft() {
      var s = (
        /** @class */
        function() {
          function o() {
            this._map = new N();
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
      return s;
    }
    function Ht() {
      var s = 16, o = w.create(), a = d();
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
            var f = v(
              c,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
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
          h = "@@WeakMap@@" + b();
        while (w.has(o, h));
        return o[h] = !0, h;
      }
      function v(h, c) {
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
        var h = k(s);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var c = "", p = 0; p < s; ++p) {
          var f = h[p];
          (p === 4 || p === 6 || p === 8) && (c += "-"), f < 16 && (c += "0"), c += f.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function me(s) {
      return s.__ = void 0, delete s.__, s;
    }
  });
})(Ge || (Ge = {}));
function Bt(t) {
  return typeof t.name == "string" && typeof t.version == "string" && typeof t.title == "string" && typeof t.elementSelector == "string" && typeof t.group == "string" && typeof t.iconName == "string";
}
function Vt(t) {
  return function(e) {
    if (Bt(t)) {
      const r = {
        version: t.version,
        name: t.name,
        title: t.title,
        selector: t.elementSelector,
        category: t.group,
        icon: t.iconName,
        layoutKind: t.layoutKind,
        environment: t.environment
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
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${i}:`, l);
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
function Wt(t) {
  return Vt(t);
}
function qt(t) {
  return function(e) {
    class r extends e {
      constructor() {
        super(...arguments);
        We(this, "_stylesApplied", !1);
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
          $ && (Array.from($).forEach((N) => w.insertRule(N.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, w]);
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
    return r;
  };
}
function Gt(t) {
  var r;
  if (((r = t == null ? void 0 : t.categoryLabel) == null ? void 0 : r.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Yt(t) {
  return function(e, r) {
    try {
      Gt(t);
      const i = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let n = !0;
      if (typeof r == "string") {
        try {
          n = typeof e[r] != "function";
        } catch {
          n = !0;
        }
        n && (t.fieldMappings = t.fieldMappings ?? r);
      }
      i.push(t), Reflect.defineMetadata("ZeroAttribute", i, e);
    } catch (i) {
      console.log(i);
    }
  };
}
function S(t) {
  return Yt(t);
}
var A;
(function(t) {
  t.TEXT_INPUT = "text-input", t.PASSWORD_INPUT = "password-input", t.DROPDOWN = "dropdown", t.CHECKBOX = "checkbox", t.RADIO_BUTTON = "radio-button", t.RANGE_SLIDER = "range-slider", t.FILE_INPUT = "file-input", t.DATE_PICKER = "date-picker", t.COLOR_PICKER = "color-picker", t.NUMBER_INPUT = "number-input", t.TEXTAREA = "textarea", t.MULTI_SELECT = "multi-select", t.POPUP_DROPDOWN = "popup-dropdown", t.LAYOUT_PICKER = "layout-picker", t.RESPONSIVE_OVERRIDE = "responsive-override", t.IMAGE_PICKER = "image-picker", t.CHIPS = "chips";
})(A || (A = {}));
var x;
(function(t) {
  t.PROPERTY = "property", t.EVENT = "event", t.ACTION = "action";
})(x || (x = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he = globalThis, Ee = he.ShadowRoot && (he.ShadyCSS === void 0 || he.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Te = Symbol(), Ye = /* @__PURE__ */ new WeakMap();
let ut = class {
  constructor(e, r, i) {
    if (this._$cssResult$ = !0, i !== Te) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (Ee && e === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (e = Ye.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Ye.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Xt = (t) => new ut(typeof t == "string" ? t : t + "", void 0, Te), Zt = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((i, n, l) => i + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[l + 1], t[0]);
  return new ut(r, t, Te);
}, Kt = (t, e) => {
  if (Ee) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const i = document.createElement("style"), n = he.litNonce;
    n !== void 0 && i.setAttribute("nonce", n), i.textContent = r.cssText, t.appendChild(i);
  }
}, Xe = Ee ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const i of e.cssRules) r += i.cssText;
  return Xt(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Jt, defineProperty: Qt, getOwnPropertyDescriptor: er, getOwnPropertyNames: tr, getOwnPropertySymbols: rr, getPrototypeOf: ir } = Object, B = globalThis, Ze = B.trustedTypes, nr = Ze ? Ze.emptyScript : "", be = B.reactiveElementPolyfillSupport, te = (t, e) => t, ce = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? nr : null;
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
} }, Ce = (t, e) => !Jt(t, e), Ke = { attribute: !0, type: String, converter: ce, reflect: !1, useDefault: !1, hasChanged: Ce };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let K = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = Ke) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const i = Symbol(), n = this.getPropertyDescriptor(e, i, r);
      n !== void 0 && Qt(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, r, i) {
    const { get: n, set: l } = er(this.prototype, e) ?? { get() {
      return this[r];
    }, set(u) {
      this[r] = u;
    } };
    return { get: n, set(u) {
      const g = n == null ? void 0 : n.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, g, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ke;
  }
  static _$Ei() {
    if (this.hasOwnProperty(te("elementProperties"))) return;
    const e = ir(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(te("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(te("properties"))) {
      const r = this.properties, i = [...tr(r), ...rr(r)];
      for (const n of i) this.createProperty(n, r[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [i, n] of r) this.elementProperties.set(i, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, i] of this.elementProperties) {
      const n = this._$Eu(r, i);
      n !== void 0 && this._$Eh.set(n, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const n of i) r.unshift(Xe(n));
    } else e !== void 0 && r.push(Xe(e));
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
    return Kt(e, this.constructor.elementStyles), e;
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
    var l;
    const i = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, i);
    if (n !== void 0 && i.reflect === !0) {
      const u = (((l = i.converter) == null ? void 0 : l.toAttribute) !== void 0 ? i.converter : ce).toAttribute(r, i.type);
      this._$Em = e, u == null ? this.removeAttribute(n) : this.setAttribute(n, u), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var l, u;
    const i = this.constructor, n = i._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const g = i.getPropertyOptions(n), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : ce;
      this._$Em = n;
      const E = y.fromAttribute(r, g.type);
      this[n] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(n)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, r, i, n = !1, l) {
    var u;
    if (e !== void 0) {
      const g = this.constructor;
      if (n === !1 && (l = this[e]), i ?? (i = g.getPropertyOptions(e)), !((i.hasChanged ?? Ce)(l, r) || i.useDefault && i.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(g._$Eu(e, i)))) return;
      this.C(e, r, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: i, reflect: n, wrapped: l }, u) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? r ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (r = void 0), this._$AL.set(e, r)), n === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [l, u] of n) {
        const { wrapped: g } = u, y = this[l];
        g !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (i = this._$EO) == null || i.forEach((n) => {
        var l;
        return (l = n.hostUpdate) == null ? void 0 : l.call(n);
      }), this.update(r)) : this._$EM();
    } catch (n) {
      throw e = !1, this._$EM(), n;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$EO) == null || r.forEach((i) => {
      var n;
      return (n = i.hostUpdated) == null ? void 0 : n.call(i);
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
K.elementStyles = [], K.shadowRootOptions = { mode: "open" }, K[te("elementProperties")] = /* @__PURE__ */ new Map(), K[te("finalized")] = /* @__PURE__ */ new Map(), be == null || be({ ReactiveElement: K }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re = globalThis, Je = (t) => t, pe = re.trustedTypes, Qe = pe ? pe.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, dt = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, ht = "?" + j, sr = `<${ht}>`, G = document, ne = () => G.createComment(""), se = (t) => t === null || typeof t != "object" && typeof t != "function", Pe = Array.isArray, or = (t) => Pe(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, ee = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, et = /-->/g, tt = />/g, V = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), rt = /'/g, it = /"/g, ct = /^(?:script|style|textarea|title)$/i, ar = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), L = ar(1), Y = Symbol.for("lit-noChange"), U = Symbol.for("lit-nothing"), nt = /* @__PURE__ */ new WeakMap(), W = G.createTreeWalker(G, 129);
function pt(t, e) {
  if (!Pe(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Qe !== void 0 ? Qe.createHTML(e) : e;
}
const lr = (t, e) => {
  const r = t.length - 1, i = [];
  let n, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = ee;
  for (let g = 0; g < r; g++) {
    const y = t[g];
    let E, w, $ = -1, N = 0;
    for (; N < y.length && (u.lastIndex = N, w = u.exec(y), w !== null); ) N = u.lastIndex, u === ee ? w[1] === "!--" ? u = et : w[1] !== void 0 ? u = tt : w[2] !== void 0 ? (ct.test(w[2]) && (n = RegExp("</" + w[2], "g")), u = V) : w[3] !== void 0 && (u = V) : u === V ? w[0] === ">" ? (u = n ?? ee, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? V : w[3] === '"' ? it : rt) : u === it || u === rt ? u = V : u === et || u === tt ? u = ee : (u = V, n = void 0);
    const F = u === V && t[g + 1].startsWith("/>") ? " " : "";
    l += u === ee ? y + sr : $ >= 0 ? (i.push(E), y.slice(0, $) + dt + y.slice($) + j + F) : y + j + ($ === -2 ? g : F);
  }
  return [pt(t, l + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class oe {
  constructor({ strings: e, _$litType$: r }, i) {
    let n;
    this.parts = [];
    let l = 0, u = 0;
    const g = e.length - 1, y = this.parts, [E, w] = lr(e, r);
    if (this.el = oe.createElement(E, i), W.currentNode = this.el.content, r === 2 || r === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (n = W.nextNode()) !== null && y.length < g; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const $ of n.getAttributeNames()) if ($.endsWith(dt)) {
          const N = w[u++], F = n.getAttribute($).split(j), z = /([.?@])?(.*)/.exec(N);
          y.push({ type: 1, index: l, name: z[2], strings: F, ctor: z[1] === "." ? dr : z[1] === "?" ? hr : z[1] === "@" ? cr : fe }), n.removeAttribute($);
        } else $.startsWith(j) && (y.push({ type: 6, index: l }), n.removeAttribute($));
        if (ct.test(n.tagName)) {
          const $ = n.textContent.split(j), N = $.length - 1;
          if (N > 0) {
            n.textContent = pe ? pe.emptyScript : "";
            for (let F = 0; F < N; F++) n.append($[F], ne()), W.nextNode(), y.push({ type: 2, index: ++l });
            n.append($[N], ne());
          }
        }
      } else if (n.nodeType === 8) if (n.data === ht) y.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = n.data.indexOf(j, $ + 1)) !== -1; ) y.push({ type: 7, index: l }), $ += j.length - 1;
      }
      l++;
    }
  }
  static createElement(e, r) {
    const i = G.createElement("template");
    return i.innerHTML = e, i;
  }
}
function J(t, e, r = t, i) {
  var u, g;
  if (e === Y) return e;
  let n = i !== void 0 ? (u = r._$Co) == null ? void 0 : u[i] : r._$Cl;
  const l = se(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== l && ((g = n == null ? void 0 : n._$AO) == null || g.call(n, !1), l === void 0 ? n = void 0 : (n = new l(t), n._$AT(t, r, i)), i !== void 0 ? (r._$Co ?? (r._$Co = []))[i] = n : r._$Cl = n), n !== void 0 && (e = J(t, n._$AS(t, e.values), n, i)), e;
}
class ur {
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
    const { el: { content: r }, parts: i } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? G).importNode(r, !0);
    W.currentNode = n;
    let l = W.nextNode(), u = 0, g = 0, y = i[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new ae(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new pr(l, this, e)), this._$AV.push(E), y = i[++g];
      }
      u !== (y == null ? void 0 : y.index) && (l = W.nextNode(), u++);
    }
    return W.currentNode = G, n;
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
  constructor(e, r, i, n) {
    this.type = 2, this._$AH = U, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = i, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
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
    e = J(this, e, r), se(e) ? e === U || e == null || e === "" ? (this._$AH !== U && this._$AR(), this._$AH = U) : e !== this._$AH && e !== Y && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : or(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== U && se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(G.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: r, _$litType$: i } = e, n = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = oe.createElement(pt(i.h, i.h[0]), this.options)), i);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === n) this._$AH.p(r);
    else {
      const u = new ur(n, this), g = u.u(this.options);
      u.p(r), this.T(g), this._$AH = u;
    }
  }
  _$AC(e) {
    let r = nt.get(e.strings);
    return r === void 0 && nt.set(e.strings, r = new oe(e)), r;
  }
  k(e) {
    Pe(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let i, n = 0;
    for (const l of e) n === r.length ? r.push(i = new ae(this.O(ne()), this.O(ne()), this, this.options)) : i = r[n], i._$AI(l), n++;
    n < r.length && (this._$AR(i && i._$AB.nextSibling, n), r.length = n);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r); e !== this._$AB; ) {
      const n = Je(e).nextSibling;
      Je(e).remove(), e = n;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cv = e, (r = this._$AP) == null || r.call(this, e));
  }
}
class fe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, i, n, l) {
    this.type = 1, this._$AH = U, this._$AN = void 0, this.element = e, this.name = r, this._$AM = n, this.options = l, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = U;
  }
  _$AI(e, r = this, i, n) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = J(this, e, r, 0), u = !se(e) || e !== this._$AH && e !== Y, u && (this._$AH = e);
    else {
      const g = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = J(this, g[i + y], r, y), E === Y && (E = this._$AH[y]), u || (u = !se(E) || E !== this._$AH[y]), E === U ? e = U : e !== U && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !n && this.j(e);
  }
  j(e) {
    e === U ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class dr extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === U ? void 0 : e;
  }
}
class hr extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== U);
  }
}
class cr extends fe {
  constructor(e, r, i, n, l) {
    super(e, r, i, n, l), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = J(this, e, r, 0) ?? U) === Y) return;
    const i = this._$AH, n = e === U && i !== U || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== U && (i === U || n);
    n && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class pr {
  constructor(e, r, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    J(this, e);
  }
}
const $e = re.litHtmlPolyfillSupport;
$e == null || $e(oe, ae), (re.litHtmlVersions ?? (re.litHtmlVersions = [])).push("3.3.3");
const fr = (t, e, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? e;
  let n = i._$litPart$;
  if (n === void 0) {
    const l = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = n = new ae(e.insertBefore(ne(), l), l, void 0, r ?? {});
  }
  return n._$AI(t), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis;
let ie = class extends K {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = fr(r, this.renderRoot, this.renderOptions);
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
    return Y;
  }
};
var lt;
ie._$litElement$ = !0, ie.finalized = !0, (lt = q.litElementHydrateSupport) == null || lt.call(q, { LitElement: ie });
const we = q.litElementPolyfillSupport;
we == null || we({ LitElement: ie });
(q.litElementVersions ?? (q.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yr = (t) => (e, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vr = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ce }, gr = (t = vr, e, r) => {
  const { kind: i, metadata: n } = r;
  let l = globalThis.litPropertyMetadata.get(n);
  if (l === void 0 && globalThis.litPropertyMetadata.set(n, l = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), l.set(r.name, t), i === "accessor") {
    const { name: u } = r;
    return { set(g) {
      const y = e.get.call(this);
      e.set.call(this, g), this.requestUpdate(u, y, t, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(u, void 0, t, g), g;
    } };
  }
  if (i === "setter") {
    const { name: u } = r;
    return function(g) {
      const y = this[u];
      e.call(this, g), this.requestUpdate(u, y, t, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function M(t) {
  return (e, r) => typeof r == "object" ? gr(t, e, r) : ((i, n, l) => {
    const u = n.hasOwnProperty(l);
    return n.constructor.createProperty(l, i), u ? Object.getOwnPropertyDescriptor(n, l) : void 0;
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
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mr = { ATTRIBUTE: 1 }, br = (t) => (...e) => ({ _$litDirective$: t, values: e });
let _r = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, r, i) {
    this._$Ct = e, this._$AM = r, this._$Ci = i;
  }
  _$AS(e, r) {
    return this.update(e, r);
  }
  update(e, r) {
    return this.render(...r);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft = "important", $r = " !" + ft, de = br(class extends _r {
  constructor(t) {
    var e;
    if (super(t), t.type !== mr.ATTRIBUTE || t.name !== "style" || ((e = t.strings) == null ? void 0 : e.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return Object.keys(t).reduce((e, r) => {
      const i = t[r];
      return i == null ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${i};`;
    }, "");
  }
  update(t, [e]) {
    const { style: r } = t.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(e)), this.render(e);
    for (const i of this.ft) e[i] == null && (this.ft.delete(i), i.includes("-") ? r.removeProperty(i) : r[i] = null);
    for (const i in e) {
      const n = e[i];
      if (n != null) {
        this.ft.add(i);
        const l = typeof n == "string" && n.endsWith($r);
        i.includes("-") || l ? r.setProperty(i, l ? n.slice(0, -11) : n, l ? ft : "") : r[i] = n;
      }
    }
    return Y;
  }
});
var wr = Object.defineProperty, Er = Object.getOwnPropertyDescriptor, C = (t, e, r, i) => {
  for (var n = i > 1 ? void 0 : i ? Er(e, r) : e, l = t.length - 1, u; l >= 0; l--)
    (u = t[l]) && (n = (i ? u(e, r, n) : u(n)) || n);
  return i && n && wr(e, r, n), n;
};
const st = () => window.zeroThemeManager, ot = {
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
function at(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let T = class extends ie {
  constructor() {
    super(...arguments), this.label = "", this.placeholder = "Choose files or drag and drop", this.helpText = "", this.errorMessage = "", this.required = !1, this.disabled = !1, this.multiple = !1, this.showPreview = !0, this.showProgress = !1, this.dragDrop = !0, this.accept = "", this.maxFileSize = 10, this.maxFiles = 10, this.width = "100%", this.height = "auto", this.dropZoneHeight = "120px", this.borderRadius = "12px", this.primaryColor = "#1976d2", this.errorColor = "#f44336", this.successColor = "#4caf50", this.files = [], this.isDragOver = !1, this.hasError = !1;
  }
  static getStudioTemplate(t) {
    if (!t) return ot;
    const e = at(t.studio.display.label || "File Input"), r = at(t.studio.display.placeholder || "Choose files or drag and drop");
    return {
      ...ot,
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
    super.connectedCallback(), (t = st()) == null || t.addEventListener("theme-changed", () => this.requestUpdate());
  }
  render() {
    var i;
    const t = (i = st()) == null ? void 0 : i.getActiveTheme("zero-standard-themes"), e = { width: this.width };
    this.primaryColor && (e["--uiv-primary"] = this.primaryColor, e["--uiv-primary-color"] = this.primaryColor), this.errorColor && (e["--uiv-error-color"] = this.errorColor), this.successColor && (e["--uiv-success-color"] = this.successColor);
    const r = { "border-radius": this.borderRadius };
    return this.height && this.height !== "auto" && (r.height = this.height), L`
      <style>
        ${t ? t.getGlobalStyles() : ""}
        ${t ? t.getComponentStyles("file-input") : ""}
      </style>
      <div class="form-field uiv-${t == null ? void 0 : t.id}-theme" style=${de(e)}>
        ${this.label ? L`
          <label class="form-field-label uiv-${t == null ? void 0 : t.id}-text ${this.required ? "required" : ""}">
            ${this.label}
          </label>
        ` : ""}
        <div
          class="file-input-container uiv-${t == null ? void 0 : t.id}-scan ${this.isDragOver ? "drag-over" : ""} ${this.disabled ? "disabled" : ""} ${this.hasError ? "error" : ""}"
          style=${de(r)}
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
          
          <div class="drop-zone" style=${de({ "min-height": this.dropZoneHeight })}>
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
            ${this.files.map((n) => L`
              <div class="file-item uiv-${t == null ? void 0 : t.id}-card">
                <div class="file-preview uiv-${t == null ? void 0 : t.id}-card">
                  ${this.isImageFile(n.file) ? L`
                    <img src=${URL.createObjectURL(n.file)} alt=${n.file.name} />
                  ` : L`
                    ${this.getFileExtension(n.file.name)}
                  `}
                </div>
                <div class="file-info">
                  <div class="file-name uiv-${t == null ? void 0 : t.id}-text">${n.file.name}</div>
                  <div class="file-size uiv-${t == null ? void 0 : t.id}-text" style="opacity: 0.7">${this.formatFileSize(n.file.size)}</div>
                  ${this.showProgress && n.progress !== void 0 ? L`
                    <div class="file-progress" style="background: rgba(var(--uiv-primary-rgb, 25, 118, 210), 0.1)">
                      <div class="file-progress-bar uiv-${t == null ? void 0 : t.id}-card" style=${de({ width: `${n.progress}%`, background: (n.progress ?? 0) >= 100 ? this.successColor : this.primaryColor })}></div>
                    </div>
                  ` : ""}
                  ${n.error ? L`
                    <div class="file-error" style="color: var(--uiv-error-color, #f44336)">${n.error}</div>
                  ` : ""}
                </div>
                <div class="file-actions">
                  <button 
                    type="button" 
                    class="file-action-btn remove-btn uiv-${t == null ? void 0 : t.id}-card"
                    style="border: 1px solid var(--uiv-error-color, #f44336); color: var(--uiv-error-color, #f44336); background: transparent"
                    @click=${() => this.removeFile(n.id)}
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
      const r = this.accept.split(",").map((u) => u.trim().toLowerCase()), i = t.type.toLowerCase(), n = "." + ((e = t.name.split(".").pop()) == null ? void 0 : e.toLowerCase());
      if (!r.some((u) => u.startsWith(".") ? u === n : i.match(u.replace("*", ".*"))))
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
T.styles = Zt`
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
C([
  M({ type: String }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Label",
    placeholderText: "Enter label text",
    fieldMappings: "label"
  })
], T.prototype, "label", 2);
C([
  M({ type: String }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Placeholder",
    placeholderText: "Enter placeholder text",
    fieldMappings: "placeholder"
  })
], T.prototype, "placeholder", 2);
C([
  M({ type: String }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Help Text",
    placeholderText: "Enter help text",
    fieldMappings: "helpText"
  })
], T.prototype, "helpText", 2);
C([
  M({ type: String }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Error Message",
    placeholderText: "Enter error message",
    fieldMappings: "errorMessage"
  })
], T.prototype, "errorMessage", 2);
C([
  M({ type: Boolean }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Required",
    fieldMappings: "required"
  })
], T.prototype, "required", 2);
C([
  M({ type: Boolean }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], T.prototype, "disabled", 2);
C([
  M({ type: Boolean }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Multiple Files",
    fieldMappings: "multiple"
  })
], T.prototype, "multiple", 2);
C([
  M({ type: Boolean }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Show Preview",
    fieldMappings: "showPreview"
  })
], T.prototype, "showPreview", 2);
C([
  M({ type: Boolean }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Show Progress",
    fieldMappings: "showProgress"
  })
], T.prototype, "showProgress", 2);
C([
  M({ type: Boolean }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.CHECKBOX,
    displayLabel: "Drag and Drop",
    fieldMappings: "dragDrop"
  })
], T.prototype, "dragDrop", 2);
C([
  M({ type: String }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Accept Types",
    placeholderText: "Enter file types (e.g., .pdf,.jpg,.png)",
    fieldMappings: "accept"
  })
], T.prototype, "accept", 2);
C([
  M({ type: Number }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.NUMBER_INPUT,
    displayLabel: "Max File Size (MB)",
    fieldMappings: "maxFileSize"
  })
], T.prototype, "maxFileSize", 2);
C([
  M({ type: Number }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.NUMBER_INPUT,
    displayLabel: "Max Files",
    fieldMappings: "maxFiles"
  })
], T.prototype, "maxFiles", 2);
C([
  M({ type: String }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Width",
    placeholderText: "Enter width (e.g., 100%, 300px)",
    fieldMappings: "width"
  })
], T.prototype, "width", 2);
C([
  M({ type: String }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Height",
    placeholderText: "Enter height (e.g., auto, 200px)",
    fieldMappings: "height"
  })
], T.prototype, "height", 2);
C([
  M({ type: String }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Drop Zone Height",
    placeholderText: "Enter drop zone height (e.g., 120px)",
    fieldMappings: "dropZoneHeight"
  })
], T.prototype, "dropZoneHeight", 2);
C([
  M({ type: String }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.TEXT_INPUT,
    displayLabel: "Border Radius",
    placeholderText: "Enter border radius (e.g., 12px)",
    fieldMappings: "borderRadius"
  })
], T.prototype, "borderRadius", 2);
C([
  M({ type: String }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Primary Color",
    fieldMappings: "primaryColor"
  })
], T.prototype, "primaryColor", 2);
C([
  M({ type: String }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Error Color",
    fieldMappings: "errorColor"
  })
], T.prototype, "errorColor", 2);
C([
  M({ type: String }),
  S({
    attributeType: x.PROPERTY,
    uiComponentType: A.COLOR_PICKER,
    displayLabel: "Success Color",
    fieldMappings: "successColor"
  })
], T.prototype, "successColor", 2);
C([
  xe()
], T.prototype, "files", 2);
C([
  xe()
], T.prototype, "isDragOver", 2);
C([
  xe()
], T.prototype, "hasError", 2);
C([
  S({
    attributeType: x.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
], T.prototype, "handleChange", 1);
C([
  S({
    attributeType: x.EVENT,
    displayLabel: "On File Change",
    eventTrigger: "file-change"
  })
], T.prototype, "handleFileChange", 1);
T = C([
  Wt({
    name: "zero-file-input",
    version: "1.0.0",
    title: "File Input",
    elementSelector: "zero-file-input",
    group: "Form Controls",
    iconName: "file-input-icon.png"
  }),
  qt(),
  yr("zero-file-input")
], T);
export {
  T as ZeroFileInput,
  ot as studioTemplate
};
