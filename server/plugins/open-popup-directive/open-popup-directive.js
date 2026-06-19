/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const p = { ATTRIBUTE: 1 }, c = (r) => (...e) => ({ _$litDirective$: r, values: e });
class s {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, n) {
    this._$Ct = e, this._$AM = t, this._$Ci = n;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}
class u extends s {
  constructor(e) {
    super(e), this.config = null;
  }
  render(e) {
    return this.config = e, (t) => {
      if (t.type !== p.ATTRIBUTE) {
        console.error("The directive can only be used on attributes.");
        return;
      }
      const n = t.element;
      if (!n) {
        console.error("Target element is null or undefined.");
        return;
      }
      if (!document.querySelector(`#popup-${this.config.webComponentSelector}`)) {
        const i = this.createPopup();
        if (!i) {
          console.error("Failed to create the popup element.");
          return;
        }
        document.body.appendChild(i);
      }
      n.addEventListener("click", () => {
        const i = `popup-${this.config.webComponentSelector}`;
        let o = document.querySelector(`#${i}`);
        o || (o = this.createPopup(), document.body.appendChild(o)), this.config.width && (o.style.width = this.config.width), this.config.height && (o.style.height = this.config.height), o.setAttribute("position", this.config.position || "center"), o.setAttribute("has-backdrop", String(this.config.hasBackdrop !== !1)), o.open = !0;
      });
    };
  }
  createPopup() {
    try {
      const e = document.createElement("zero-popup-dialog"), t = document.createElement(this.config.webComponentSelector);
      return e.setAttribute("id", `popup-${this.config.webComponentSelector}`), e.setAttribute("position", this.config.position || "center"), e.appendChild(t), e.addEventListener("closed", () => {
        console.log(`Popup for ${this.config.webComponentSelector} closed`);
      }), e.addEventListener("opened", () => {
        console.log(`Popup for ${this.config.webComponentSelector} opened`);
      }), e;
    } catch (e) {
      return console.error("Error creating popup element:", e), null;
    }
  }
}
const d = c(u);
export {
  d as openPopupDirective
};
