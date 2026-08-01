// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

interface NavLink {
  label: string;
  href?: string;
  target?: string;
}

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<nav style='display:flex;align-items:center;justify-content:space-between;gap:24px;padding:14px 24px;background:#ffffff;border-bottom:1px solid #e5e7eb;font-family:inherit;box-sizing:border-box;'>",
    "<div style='font-weight:800;font-size:18px;color:#111827;'>{{display:brand}}</div>",
    "<div style='display:flex;gap:20px;font-size:14px;color:#4b5563;'>",
    "<span>Home</span><span>Features</span><span>Pricing</span>",
    "</div>",
    "<div style='background:#6366f1;color:#fff;padding:8px 16px;border-radius:8px;font-size:13px;font-weight:600;'>Get Started</div>",
    "</nav>"
  ].join(""),
  labelProp: "brand",
  badges: ["Navigation", "Layout"],
};

function escapeStudio(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeParseLinks(raw: string | undefined, fallback: NavLink[]): NavLink[] {
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.filter((l) => l && typeof l.label === "string");
    return fallback;
  } catch {
    return fallback;
  }
}

@RendererComponent({
  name: "zero-navbar",
  version: "1.0.0",
  title: "Navbar",
  elementSelector: "zero-navbar",
  group: "Navigation",
  iconName: "navbar-icon.png",
})
@applyGlobalStyles()
export class ZeroNavbar extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const brand = escapeStudio(config.props?.brand ?? config.studio?.props?.brand ?? "Brand");
    const variant = (config.props?.variant ?? config.studio?.props?.variant) || "solid";
    const alignment = (config.props?.alignment ?? config.studio?.props?.alignment) || "right";
    const showCta = config.props?.showCta ?? config.studio?.props?.showCta ?? true;
    const ctaLabel = escapeStudio(config.props?.ctaLabel ?? config.studio?.props?.ctaLabel ?? "Get Started");

    const links = safeParseLinks(
      config.props?.links ?? config.studio?.props?.links,
      [{ label: "Home" }, { label: "Features" }, { label: "Pricing" }]
    );

    let navBg = "var(--uiv-surface-color, #ffffff)";
    let navBorder = "1px solid var(--uiv-border-color, #e5e7eb)";
    let navShadow = "none";
    let extra = "";
    if (variant === "glass") {
      navBg = "rgba(255,255,255,0.6)";
      navBorder = "1px solid rgba(255,255,255,0.35)";
      extra = "backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);";
      navShadow = "0 4px 24px rgba(0,0,0,0.06)";
    } else if (variant === "transparent") {
      navBg = "transparent";
      navBorder = "1px solid transparent";
    } else if (variant === "elevated") {
      navShadow = "var(--uiv-shadow-depth, 0 8px 24px rgba(0,0,0,0.08))";
      navBorder = "1px solid transparent";
    }

    const justify =
      alignment === "left" ? "flex-start" : alignment === "center" ? "center" : "flex-end";

    const linksHtml = links
      .map(
        (l) =>
          `<span style='font-size:14px;color:var(--uiv-text-muted, #4b5563);cursor:pointer;'>${escapeStudio(l.label)}</span>`
      )
      .join("");

    const ctaHtml = showCta
      ? `<div style='background:var(--uiv-primary-color, #6366f1);color:#fff;padding:8px 16px;border-radius:var(--uiv-border-radius, 8px);font-size:13px;font-weight:600;white-space:nowrap;'>${ctaLabel}</div>`
      : "";

    return {
      ...studioTemplate,
      templateHtml: [
        `<nav style='display:flex;align-items:center;gap:24px;padding:14px 24px;background:${navBg};border-bottom:${navBorder};box-shadow:${navShadow};${extra}font-family:inherit;box-sizing:border-box;'>`,
        `<div style='font-weight:800;font-size:18px;color:var(--uiv-text-color, #111827);'>${brand}</div>`,
        `<div style='display:flex;flex:1;gap:20px;justify-content:${justify};'>${linksHtml}</div>`,
        ctaHtml,
        "</nav>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --nav-p: var(--uiv-primary-color, #6366f1);
      --nav-bg: var(--uiv-surface-color, #ffffff);
      --nav-text: var(--uiv-text-color, #111827);
      --nav-muted: var(--uiv-text-muted, #4b5563);
      --nav-border: var(--uiv-border-color, #e5e7eb);
      --nav-radius: var(--uiv-border-radius, 8px);
    }

    :host([sticky]) nav {
      position: sticky;
      top: 0;
      z-index: 50;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 14px 24px;
      background: var(--nav-bg);
      border-bottom: 1px solid var(--nav-border);
      box-sizing: border-box;
      font-family: inherit;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .brand {
      font-weight: 800;
      font-size: 1.15rem;
      letter-spacing: -0.02em;
      color: var(--nav-text);
      white-space: nowrap;
    }

    .links {
      display: flex;
      flex: 1;
      align-items: center;
      gap: 22px;
      flex-wrap: wrap;
    }
    .links.align-left { justify-content: flex-start; }
    .links.align-center { justify-content: center; }
    .links.align-right { justify-content: flex-end; }

    .nav-link {
      position: relative;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--nav-muted);
      text-decoration: none;
      cursor: pointer;
      transition: color 0.2s ease;
      background: none;
      border: none;
      font-family: inherit;
      padding: 4px 0;
    }
    .nav-link::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      background: var(--nav-p);
      border-radius: 2px;
      transition: width 0.25s ease;
    }
    .nav-link:hover {
      color: var(--nav-text);
    }
    .nav-link:hover::after {
      width: 100%;
    }

    .cta {
      background: var(--nav-p);
      color: #ffffff;
      border: none;
      padding: 9px 18px;
      border-radius: var(--nav-radius);
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      white-space: nowrap;
      transition: all 0.2s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    }
    .cta:hover {
      filter: brightness(1.1);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);
    }

    /* Variants */
    .variant-solid nav,
    nav.variant-solid {
      background: var(--nav-bg);
      border-bottom: 1px solid var(--nav-border);
    }
    nav.variant-glass {
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.35);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    }
    nav.variant-transparent {
      background: transparent;
      border-bottom: 1px solid transparent;
    }
    nav.variant-elevated {
      background: var(--nav-bg);
      border-bottom: 1px solid transparent;
      box-shadow: var(--uiv-shadow-depth, 0 8px 24px rgba(0, 0, 0, 0.08));
    }

    @media (max-width: 720px) {
      nav {
        flex-wrap: wrap;
        gap: 12px;
      }
      .links {
        order: 3;
        width: 100%;
        gap: 16px;
        justify-content: flex-start !important;
      }
    }
  `;

  @property({ type: String }) brand = "Brand";
  @property({ type: String }) links =
    '[{"label":"Home","href":"#"},{"label":"Features","href":"#features"},{"label":"Pricing","href":"#pricing"},{"label":"Docs","href":"#docs"}]';
  @property({ type: String }) alignment = "right";
  @property({ type: String }) variant = "solid";
  @property({ type: Boolean, reflect: true }) sticky = false;
  @property({ type: Boolean, attribute: "show-cta" }) showCta = true;
  @property({ type: String, attribute: "cta-label" }) ctaLabel = "Get Started";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Brand / Logo Text",
    fieldMappings: "brand"
  })
  get brandConfig() { return this.brand; }
  set brandConfig(val: string) { this.brand = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Links (JSON array of {label, href, target})",
    fieldMappings: "links"
  })
  get linksConfig() { return this.links; }
  set linksConfig(val: string) { this.links = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Links Alignment",
    fieldMappings: "alignment",
    optionItems: [
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" }
    ]
  })
  get alignmentConfig() { return this.alignment; }
  set alignmentConfig(val: string) { this.alignment = val || "right"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Solid", value: "solid" },
      { label: "Glassmorphism", value: "glass" },
      { label: "Transparent", value: "transparent" },
      { label: "Elevated", value: "elevated" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "solid"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Sticky (pin to top)",
    fieldMappings: "sticky"
  })
  get stickyConfig() { return this.sticky; }
  set stickyConfig(val: boolean) { this.sticky = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show CTA Button",
    fieldMappings: "showCta"
  })
  get showCtaConfig() { return this.showCta; }
  set showCtaConfig(val: boolean) { this.showCta = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "CTA Button Label",
    fieldMappings: "ctaLabel"
  })
  get ctaLabelConfig() { return this.ctaLabel; }
  set ctaLabelConfig(val: string) { this.ctaLabel = val; }

  private parseLinks(): NavLink[] {
    return safeParseLinks(this.links, []);
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Link Click",
    eventTrigger: "on-link-click"
  })
  handleLinkClick(link: NavLink, e: Event) {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent("on-link-click", {
        detail: { label: link.label, href: link.href ?? "", target: link.target ?? "" },
        bubbles: true,
        composed: true
      })
    );
  }

  private handleCtaClick() {
    this.dispatchEvent(
      new CustomEvent("on-link-click", {
        detail: { label: this.ctaLabel, href: "", target: "cta" },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    const links = this.parseLinks();
    return html`
      <nav class="variant-${this.variant}">
        <div class="brand">${this.brand}</div>
        <div class="links align-${this.alignment}">
          ${links.map(
            (l) => html`
              <a
                class="nav-link"
                href=${l.href ?? "#"}
                target=${l.target ?? "_self"}
                @click=${(e: Event) => this.handleLinkClick(l, e)}
                >${l.label}</a
              >
            `
          )}
        </div>
        ${this.showCta
          ? html`<button class="cta" @click=${this.handleCtaClick}>${this.ctaLabel}</button>`
          : ""}
      </nav>
    `;
  }
}
