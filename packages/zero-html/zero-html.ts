// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

/**
 * Default example source. Demonstrates every capability the component supports:
 *  - `{{ }}` variable bindings (any scope: $page/$route/$env/$auth/$locale/…)
 *  - an inline `data-repeat` loop with per-item `{{ $repeat.item }}` / `{{ $index }}`
 *  - a `data-action` button that fires the wireable "On Action" event
 */
const DEFAULT_HTML = [
  '<div style="padding:16px;border:1px dashed #cbd5e1;border-radius:10px;font-family:system-ui,sans-serif;color:#334155;">',
  '  <h3 style="margin:0 0 8px;">Hello {{ $page.vars.name }}</h3>',
  '  <p style="margin:0 0 12px;">Write any HTML here — use {{ }} for variables.</p>',
  '  <ul style="margin:0 0 12px;padding-left:18px;">',
  '    <li data-repeat="{{ $page.vars.items }}">#{{ $index }} — {{ $repeat.item }}</li>',
  '  </ul>',
  '  <button data-action="save" style="padding:8px 16px;border:0;border-radius:8px;background:#6366f1;color:#fff;cursor:pointer;">Save</button>',
  '</div>',
].join("\n");

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='padding:12px;border:1px dashed #94a3b8;border-radius:10px;background:#f8fafc;color:#475569;font-family:system-ui,sans-serif;'>",
    "<div style='display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;color:#334155;'>",
    "<span style='display:inline-flex;width:22px;height:22px;align-items:center;justify-content:center;border-radius:6px;background:#6366f1;color:#fff;font-size:10px;font-weight:700;'>&lt;/&gt;</span>",
    "HTML",
    "</div>",
    "<div style='margin-top:8px;font-size:12px;line-height:1.5;'>Raw HTML with {{variables}}, loops &amp; actions</div>",
    "</div>",
  ].join(""),
  badges: ["Advanced", "Raw HTML"],
  dynamicHints: ["{{ }} bindings", "data-repeat loops", "data-action events"],
};

/** HTML-escape for the studio canvas source preview. */
function escapeStudio(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Best-effort, power-user sanitize. Strips `<script>` blocks, inline `on*=`
 * handlers and `javascript:` URLs. This is a convenience guard, NOT a complete
 * XSS defense — see the README caveat. Toggle off (`sanitize=false`) only when the
 * HTML source is fully trusted.
 */
function basicSanitize(input: string): string {
  return input
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<script[\s\S]*?>/gi, "")
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, "")
    .replace(/\son\w+\s*=\s*'[^']*'/gi, "")
    .replace(/\son\w+\s*=\s*[^\s>]+/gi, "")
    .replace(/javascript:/gi, "");
}

@RendererComponent({
  name: "zero-html",
  version: "1.0.0",
  title: "HTML",
  elementSelector: "zero-html",
  group: "Advanced",
  iconName: "profile-icon.png",
})
@applyGlobalStyles()
export class ZeroHtml extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const raw = String(config.props?.html ?? config.studio?.props?.html ?? config.studio?.value?.html ?? "");
    const preview = raw.trim()
      ? escapeStudio(raw.trim()).slice(0, 240)
      : "Raw HTML with {{variables}}, loops &amp; actions";

    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='padding:12px;border:1px dashed #94a3b8;border-radius:10px;background:#f8fafc;color:#475569;font-family:system-ui,sans-serif;'>",
        "<div style='display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;color:#334155;'>",
        "<span style='display:inline-flex;width:22px;height:22px;align-items:center;justify-content:center;border-radius:6px;background:#6366f1;color:#fff;font-size:10px;font-weight:700;'>&lt;/&gt;</span>",
        "HTML",
        "</div>",
        `<pre style='margin:8px 0 0;white-space:pre-wrap;word-break:break-word;font-size:11px;line-height:1.5;color:#64748b;max-height:132px;overflow:hidden;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;'>${preview}</pre>`,
        "</div>",
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
  `;

  /**
   * Raw HTML source. A normal string prop, so the runtime interpolates its
   * `{{ }}` tokens (all binding scopes) and expands inline `[data-repeat]`
   * elements BEFORE the resolved string reaches this property (see renderer-core
   * `resolveHtmlTemplate`). The element simply injects the resolved string.
   */
  @property({ type: String }) html = DEFAULT_HTML;

  /** When true (default), apply best-effort sanitize before injecting. */
  @property({ type: Boolean }) sanitize = true;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "HTML Source",
    placeholderText: "<div>Hello {{ $page.vars.name }}</div>",
    fieldMappings: "html",
    optionItems: { rows: 12, placeholderText: "<div>Hello {{ $page.vars.name }}</div>" },
  })
  get htmlConfig() { return this.html; }
  set htmlConfig(val: string) { this.html = val ?? ""; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Basic Sanitize (strip scripts / handlers)",
    fieldMappings: "sanitize",
  })
  get sanitizeConfig() { return this.sanitize; }
  set sanitizeConfig(val: boolean) { this.sanitize = Boolean(val); }

  /**
   * Wireable event. The Studio Triggers panel surfaces this as "On Action" and
   * lets it invoke a FLOW or a SERVICE (reusing the standard trigger path). The
   * clicked element's action name + dataset ride along as `event.detail.action`
   * and `event.detail.dataset`, so flow/service input mappings can read them
   * (e.g. source `event.detail.action`, or `event.detail.dataset.id`).
   */
  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Action",
    eventTrigger: "action",
  })
  emitAction(detail: { action: string; dataset: Record<string, string> }) {
    this.dispatchEvent(new CustomEvent("action", {
      detail,
      bubbles: true,
      composed: true,
    }));
  }

  // Delegated click handler: any descendant carrying `[data-action]` fires the
  // "action" event. Native click is composed, so a listener on the host receives
  // clicks that originate inside the shadow root. `composedPath()` lets us find
  // the nearest `[data-action]` ancestor of the real target.
  private readonly handleDelegatedClick = (event: Event) => {
    for (const target of event.composedPath()) {
      if (target === this) break;
      if (target instanceof HTMLElement && target.hasAttribute("data-action")) {
        const action = target.getAttribute("data-action") || "";
        const dataset: Record<string, string> = { ...(target.dataset as DOMStringMap) } as Record<string, string>;
        this.emitAction({ action, dataset });
        return;
      }
    }
  };

  override connectedCallback(): void {
    super.connectedCallback();
    // Adding the same bound listener twice is a no-op per the DOM spec, so this
    // stays single even across reconnects.
    this.addEventListener("click", this.handleDelegatedClick);
  }

  override disconnectedCallback(): void {
    this.removeEventListener("click", this.handleDelegatedClick);
    super.disconnectedCallback();
  }

  render() {
    const source = this.sanitize ? basicSanitize(this.html ?? "") : (this.html ?? "");
    return html`${unsafeHTML(source)}`;
  }
}
