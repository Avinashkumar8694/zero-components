/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, c = (i) => (...e) => ({ _$litDirective$: i, values: e });
class p {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, n) {
    this.t = e, this._$AM = t, this.i = n;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}
class u extends p {
  constructor(e) {
    super(e), this.config = null;
  }
  render(e) {
    return this.config = e, (t) => {
      if (t.type !== s.ATTRIBUTE) {
        console.error("The directive can only be used on attributes.");
        return;
      }
      const n = t.element;
      if (!n) {
        console.error("Target element is null or undefined.");
        return;
      }
      if (!document.querySelector(`#popup-${this.config.webComponentSelector}`)) {
        const o = this.createPopup();
        if (!o) {
          console.error("Failed to create the popup element.");
          return;
        }
        document.body.appendChild(o);
      }
      n.addEventListener("click", () => {
        var r;
        const o = document.querySelector(`#popup-${this.config.webComponentSelector}`);
        if (!o) {
          console.error("Popup element not found.");
          return;
        }
        o.style.width = this.config.width || "auto", o.style.height = this.config.height || "auto", o.setAttribute("position", this.config.position || "center"), o.setAttribute("hasBackdrop", (r = this.config) == null ? void 0 : r.hasBackdrop), o.open = !0;
      });
    };
  }
  createPopup() {
    try {
      const e = document.createElement("my-popup"), t = document.createElement(this.config.webComponentSelector);
      return e.setAttribute("id", `popup-${this.config.webComponentSelector}`), e.setAttribute("position", this.config.position || "center"), e.appendChild(t), this.config.width && (e.style.width = this.config.width), this.config.height && (e.style.height = this.config.height), e.hasBackdrop = this.config.hasBackdrop !== !1, e.addEventListener("closed", () => {
        console.log(`Popup for ${this.config.webComponentSelector} closed`);
      }), e.addEventListener("opened", () => {
        console.log(`Popup for ${this.config.webComponentSelector} opened`);
      }), e;
    } catch (e) {
      return console.error("Error creating popup element:", e), null;
    }
  }
}
const l = c(u);
export {
  l as openPopupDirective
};
