import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { RendererComponent } from "zero-annotation";

@RendererComponent({
  name: "zero-router-outlet",
  version: "1.0.0",
  title: "Router Outlet",
  elementSelector: "zero-router-outlet",
  group: "Layout",
  iconName: "router-outlet-icon.png",
})
@customElement("zero-router-outlet")
export class ZeroRouterOutlet extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      min-height: 50px;
    }
  `;

  static getStudioTemplate() {
    return {
      kind: "generic",
      emptyText: "Nested pages display here dynamically based on the active path",
      slots: [],
      badges: ["Router Outlet"]
    };
  }

  render() {
    return html`<slot></slot>`;
  }
}
