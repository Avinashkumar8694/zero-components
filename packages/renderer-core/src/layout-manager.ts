export type LayoutType = "mobile" | "tablet" | "desktop";

export class LayoutManager {
  private static _instance: LayoutManager;
  private _layout: LayoutType = "desktop";
  private _initialized = false;

  private constructor() {
    if (typeof window === "undefined") {
      return;
    }
    this.init();
  }

  private init() {
    if (this._initialized) return;

    const mqlMobile = window.matchMedia("(max-width: 767px)");
    const mqlTablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
    const mqlDesktop = window.matchMedia("(min-width: 1024px)");

    const handler = () => this.updateLayout();

    mqlMobile.addEventListener("change", handler);
    mqlTablet.addEventListener("change", handler);
    mqlDesktop.addEventListener("change", handler);

    this.updateLayout();
    this._initialized = true;
  }

  static get instance(): LayoutManager {
    if (!this._instance) {
      this._instance = new LayoutManager();
    }
    return this._instance;
  }

  get layout(): LayoutType {
    if (typeof window === "undefined") {
      return "desktop";
    }
    return this._layout;
  }

  private updateLayout() {
    const prev = this._layout;
    const width = window.innerWidth;

    if (width < 768) {
      this._layout = "mobile";
    } else if (width < 1024) {
      this._layout = "tablet";
    } else {
      this._layout = "desktop";
    }

    if (prev !== this._layout) {
      window.dispatchEvent(
        new CustomEvent("zero-layout-change", {
          detail: { layout: this._layout, previous: prev },
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}
