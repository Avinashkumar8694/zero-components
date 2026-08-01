// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import {
  RendererComponent,
  RendererAttribute,
  applyGlobalStyles,
  AttributeType,
  UserInterfaceType,
} from "zero-annotation";
import { LitElement, css, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

// ─── Types ──────────────────────────────────────────────────────────────────

/**
 * A single top-nav item. FLAT list rows (label/href/icon) are what the studio's
 * `list` control edits; extra fields are honored if present.
 */
export interface TopNavItem {
  /** Display text. */
  label?: string;
  /** If set, clicking navigates (SPA route-change when it begins with "/", else window.open). */
  href?: string;
  /** Emoji or character icon. */
  icon?: string;
}

// ─── Defaults ────────────────────────────────────────────────────────────────

/** Flat starter rows for the studio `list` control (label/href/icon). */
export const DEFAULT_NAV_ITEMS_LIST: TopNavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "🏠" },
  { label: "Reports", href: "/reports", icon: "📊" },
  { label: "Team", href: "/team", icon: "👥" },
  { label: "Settings", href: "/settings", icon: "⚙️" },
];

export const DEFAULT_NAV_ITEMS_JSON = JSON.stringify(DEFAULT_NAV_ITEMS_LIST, null, 2);

// ─── Parse helper ─────────────────────────────────────────────────────────────

/**
 * Accept nav items as a JSON string (runtime attribute) OR an already-parsed
 * array (studio `list` control value passed as a property) — mirroring the
 * sidenav's `parseNavItems` tolerance.
 */
function parseNavItems(raw: unknown): TopNavItem[] {
  if (Array.isArray(raw)) return raw as TopNavItem[];
  if (typeof raw === "string") {
    try {
      const p = JSON.parse(raw);
      if (Array.isArray(p)) return p as TopNavItem[];
    } catch {
      /* ignore */
    }
  }
  return DEFAULT_NAV_ITEMS_LIST;
}

/** Detect image-ish logos (URL / path / inline SVG / has extension) vs emoji. */
function isImgLogo(l: string): boolean {
  return !!l && (l.startsWith("<") || l.startsWith("http") || l.startsWith("/") || l.includes("."));
}

function escapeStudio(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ─── Studio template (static fallback) ────────────────────────────────────────

export const studioTemplate: ZeroStudioTemplate = {
  kind: "panel",
  slots: [
    { id: "outlet", label: "Page Content", dropzone: true, accepts: ["zero-router-outlet", "page-root", "zero-section"] },
    { id: "main", label: "Main Content", dropzone: true, accepts: ["zero-section"] },
  ],
  templateHtml:
    "<div style='display:flex;flex-direction:column;width:100%;height:600px;border:1px solid #e5e9ef;border-radius:12px;overflow:hidden;font-family:system-ui,sans-serif;'>" +
    "<div style='display:flex;align-items:center;gap:16px;height:60px;padding:0 20px;background:#ffffff;border-bottom:1px solid #e5e9ef;'>" +
    "<strong style='color:#4680ff;'>My App</strong>" +
    "<span style='flex:1;'></span>" +
    "</div>" +
    "<div style='flex:1;padding:24px;background:#f4f7fa;'>" +
    "<zero-studio-slot name='outlet'></zero-studio-slot>" +
    "<zero-studio-slot name='main'></zero-studio-slot>" +
    "</div>" +
    "</div>",
  badges: ["Top Nav Layout"],
  emptyText: "Nested pages render in the outlet below the top bar",
};

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * zero-topnav-layout — a TOP-NAVBAR base layout (app shell).
 *
 * A horizontal top bar (brand/logo + horizontal nav links + header controls:
 * search / notifications / theme toggle / user profile) sits above a full-width
 * content area that hosts a `<zero-router-outlet>` (the content region), so
 * nested pages render below the bar exactly the way the sidenav hosts its
 * outlet.
 *
 * CONTRACT (identical to zero-sidenav-layout):
 * - exposes a static `getSettingsSchema()` (structured, DEFAULTED
 *   PropertyDescriptor[]) the studio reads live via `resolveLiveSettingsSchema`;
 * - every settings field name equals a FLAT `@RendererAttribute` prop name, so
 *   the studio's generic flat passthrough (`deriveShellProps`, non-sidenav
 *   branch) maps each setting → same-named prop with NO bespoke composition;
 * - declares chrome events via `@RendererAttribute EVENT`
 *   (`notification-click` / `profile-click` / `header-action`) plus a working
 *   theme toggle (`themechange`);
 * - contains a `zero-router-outlet` region (the `outlet` slot).
 */
@RendererComponent({
  name: "zero-topnav-layout",
  version: "1.0.0",
  title: "Top Nav Layout",
  elementSelector: "zero-topnav-layout",
  group: "Layout",
  iconName: "topnav-layout-icon.png",
  layoutKind: "panel",
  environment: ["page"],
})
@customElement("zero-topnav-layout")
@applyGlobalStyles()
export class ZeroTopnavLayout extends LitElement {
  /**
   * Studio drop-zone metadata (read directly by the studio, no HTML parsing).
   * The `outlet` region hosts the `<zero-router-outlet>` / nested page content.
   */
  static slots = [
    { id: "outlet", label: "Page Content", dropzone: true, accepts: ["zero-router-outlet", "page-root", "zero-section"] },
    { id: "main", label: "Main Content", dropzone: true, accepts: ["zero-section"] },
  ];

  /**
   * Neutral, studio-ready default applied when the shell is first dropped onto a
   * page: a professional, brand-agnostic top-nav shell whose content area holds a
   * single `<zero-router-outlet>` so studio pages nest below the bar. No
   * domain-specific demo content is injected.
   */
  static getTransformOnDrop() {
    return {
      componentName: "zero-topnav-layout",
      props: {
        appName: "My App",
        appLogo: "🚀",
        navItems: DEFAULT_NAV_ITEMS_JSON,
        showSearch: true,
        showNotifications: true,
        notificationCount: 3,
        showThemeToggle: true,
        userName: "Jane Doe",
        userRole: "Administrator",
        avatarUrl: "",
        fixedHeader: true,
        maxWidth: "1280px",
        accentColor: "#4680ff",
      },
      children: [
        {
          componentName: "zero-router-outlet",
          version: "1.0.0",
          slot: "outlet",
          props: {},
          children: [],
        },
      ],
    };
  }

  /**
   * Plain settings schema the studio renders as a template-config form.
   * Returns only plain objects (no external imports). Because the topnav CONSUMES
   * flat props, each `name` here equals a same-named `@RendererAttribute` prop —
   * the studio's flat passthrough needs NO composition. Every field is defaulted.
   *
   * control ∈ "text" | "number" | "boolean" | "select" | "color" | "list"
   * (`list` edits an array of objects via typed `itemShape` sub-fields — no JSON).
   */
  static getSettingsSchema() {
    return [
      // ── Brand ──
      { name: "appName", label: "App / Brand Name", control: "text", group: "Brand", defaultValue: "My App" },
      { name: "appLogo", label: "Logo (emoji, image URL, or inline SVG)", control: "text", group: "Brand", defaultValue: "🚀" },

      // ── Navigation ──
      {
        name: "navItems", label: "Nav Items", control: "list", group: "Navigation",
        defaultValue: DEFAULT_NAV_ITEMS_LIST,
        itemShape: [
          { name: "label", label: "Label", control: "text", defaultValue: "" },
          { name: "href", label: "Link (href)", control: "text", defaultValue: "" },
          { name: "icon", label: "Icon (emoji)", control: "text", defaultValue: "" },
        ],
      },

      // ── Header ──
      { name: "showSearch", label: "Show Search", control: "boolean", group: "Header", defaultValue: true },
      { name: "showNotifications", label: "Show Notifications", control: "boolean", group: "Header", defaultValue: true },
      { name: "notificationCount", label: "Notification Count", control: "number", group: "Header", defaultValue: 3 },
      { name: "showThemeToggle", label: "Show Theme Toggle", control: "boolean", group: "Header", defaultValue: true },
      { name: "userName", label: "User Name", control: "text", group: "Header", defaultValue: "Jane Doe" },
      { name: "userRole", label: "User Role", control: "text", group: "Header", defaultValue: "Administrator" },
      { name: "avatarUrl", label: "Avatar URL", control: "text", group: "Header", defaultValue: "" },

      // ── Layout ──
      { name: "fixedHeader", label: "Fixed Header", control: "boolean", group: "Layout", defaultValue: true },
      { name: "maxWidth", label: "Content Max Width (e.g. 1280px or 100%)", control: "text", group: "Layout", defaultValue: "1280px" },

      // ── Theme ──
      { name: "accentColor", label: "Accent Color", control: "color", group: "Theme", defaultValue: "#4680ff" },
    ];
  }

  // ─── Styles ──────────────────────────────────────────────────────────────
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
      --tnl-accent: var(--uiv-primary-color, #4680ff);
      --tnl-header-bg: var(--uiv-surface-color, #ffffff);
      --tnl-header-text: var(--uiv-text-color, #1d2630);
      --tnl-header-border: var(--uiv-border-color, #e5e9ef);
      --tnl-main-bg: var(--uiv-bg-color, #f4f7fa);
      --tnl-muted: var(--uiv-text-muted, #8996a4);
      --tnl-hover-bg: var(--uiv-hover-bg, rgba(0, 0, 0, 0.04));
      font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
    }

    :host([data-theme="dark"]) {
      --tnl-header-bg: var(--uiv-surface-color, #1b2431);
      --tnl-header-text: var(--uiv-text-color, #e6ebf1);
      --tnl-header-border: var(--uiv-border-color, #2a3647);
      --tnl-main-bg: var(--uiv-bg-color, #131a24);
      --tnl-muted: var(--uiv-text-muted, #9aa7b5);
      --tnl-hover-bg: var(--uiv-hover-bg, rgba(255, 255, 255, 0.07));
    }

    .tnl-shell {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 480px;
      background: var(--tnl-main-bg);
      color: var(--tnl-header-text);
    }

    .tnl-header {
      display: flex;
      align-items: center;
      gap: 16px;
      height: 60px;
      padding: 0 20px;
      background: var(--tnl-header-bg);
      border-bottom: 1px solid var(--tnl-header-border);
      box-sizing: border-box;
      z-index: 10;
    }
    .tnl-header.fixed {
      position: sticky;
      top: 0;
    }

    .tnl-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 800;
      font-size: 1.2rem;
      color: var(--tnl-accent);
      white-space: nowrap;
      flex-shrink: 0;
      cursor: pointer;
      background: none;
      border: 0;
      font-family: inherit;
    }
    .tnl-brand img { width: 26px; height: 26px; object-fit: contain; border-radius: 6px; }

    .tnl-nav {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 0;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .tnl-nav::-webkit-scrollbar { display: none; }

    .tnl-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 8px;
      color: var(--tnl-header-text);
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
      background: none;
      border: 0;
      font-family: inherit;
      transition: background 0.15s ease, color 0.15s ease;
    }
    .tnl-link:hover { background: var(--tnl-hover-bg); }
    .tnl-link.active { background: color-mix(in srgb, var(--tnl-accent) 14%, transparent); color: var(--tnl-accent); }

    .tnl-controls { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

    .tnl-icon-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border-radius: 10px;
      border: 0;
      background: transparent;
      color: var(--tnl-header-text);
      cursor: pointer;
      transition: background 0.15s ease;
    }
    .tnl-icon-btn:hover { background: var(--tnl-hover-bg); }
    .tnl-icon-btn svg { width: 18px; height: 18px; display: block; }

    .tnl-badge {
      position: absolute;
      top: 4px;
      right: 4px;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      border-radius: 999px;
      background: var(--tnl-accent);
      color: #fff;
      font-size: 0.62rem;
      font-weight: 700;
      line-height: 16px;
      text-align: center;
      box-sizing: border-box;
    }

    .tnl-profile {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 4px 8px 4px 4px;
      border-radius: 999px;
      border: 0;
      background: transparent;
      cursor: pointer;
      font-family: inherit;
      transition: background 0.15s ease;
    }
    .tnl-profile:hover { background: var(--tnl-hover-bg); }
    .tnl-avatar {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: var(--tnl-accent);
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.85rem;
      overflow: hidden;
      flex-shrink: 0;
    }
    .tnl-avatar img { width: 100%; height: 100%; object-fit: cover; }
    .tnl-user { display: flex; flex-direction: column; line-height: 1.1; text-align: left; }
    .tnl-user .name { font-size: 0.82rem; font-weight: 700; color: var(--tnl-header-text); }
    .tnl-user .role { font-size: 0.68rem; color: var(--tnl-muted); }

    .tnl-main {
      flex: 1;
      display: flex;
      justify-content: center;
      overflow-y: auto;
      background: var(--tnl-main-bg);
    }
    .tnl-content {
      width: 100%;
      box-sizing: border-box;
      padding: 24px;
    }

    @media (max-width: 720px) {
      .tnl-user { display: none; }
      .tnl-nav { gap: 0; }
    }
  `;

  // ─── FLAT props (each = one getSettingsSchema field) ─────────────────────────

  @property({ type: String })
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "App / Brand Name", fieldMappings: "appName", categoryLabel: "Brand" })
  appName = "My App";

  @property({ type: String })
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "Logo (emoji, image URL, or inline SVG)", fieldMappings: "appLogo", categoryLabel: "Brand" })
  appLogo = "🚀";

  @property({ type: String, attribute: "nav-items" })
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "Nav Items (JSON)", fieldMappings: "navItems", categoryLabel: "Navigation" })
  navItems: string | TopNavItem[] = DEFAULT_NAV_ITEMS_JSON;

  @property({ type: Boolean, attribute: "show-search" })
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.CHECKBOX, displayLabel: "Show Search", fieldMappings: "showSearch", categoryLabel: "Header" })
  showSearch = true;

  @property({ type: Boolean, attribute: "show-notifications" })
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.CHECKBOX, displayLabel: "Show Notifications", fieldMappings: "showNotifications", categoryLabel: "Header" })
  showNotifications = true;

  @property({ type: Number, attribute: "notification-count" })
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.NUMBER_INPUT, displayLabel: "Notification Count", fieldMappings: "notificationCount", categoryLabel: "Header" })
  notificationCount = 3;

  @property({ type: Boolean, attribute: "show-theme-toggle" })
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.CHECKBOX, displayLabel: "Show Theme Toggle", fieldMappings: "showThemeToggle", categoryLabel: "Header" })
  showThemeToggle = true;

  @property({ type: String, attribute: "user-name" })
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "User Name", fieldMappings: "userName", categoryLabel: "Header" })
  userName = "Jane Doe";

  @property({ type: String, attribute: "user-role" })
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "User Role", fieldMappings: "userRole", categoryLabel: "Header" })
  userRole = "Administrator";

  @property({ type: String, attribute: "avatar-url" })
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "Avatar URL", fieldMappings: "avatarUrl", categoryLabel: "Header" })
  avatarUrl = "";

  @property({ type: Boolean, attribute: "fixed-header" })
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.CHECKBOX, displayLabel: "Fixed Header", fieldMappings: "fixedHeader", categoryLabel: "Layout" })
  fixedHeader = true;

  @property({ type: String, attribute: "max-width" })
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "Content Max Width (e.g. 1280px or 100%)", fieldMappings: "maxWidth", categoryLabel: "Layout" })
  maxWidth = "1280px";

  @property({ type: String, attribute: "accent-color" })
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.COLOR_PICKER, displayLabel: "Accent Color", fieldMappings: "accentColor", categoryLabel: "Theme" })
  accentColor = "#4680ff";

  /** Active top-nav index (updated on click; also drives the active pill). */
  @property({ type: Number, attribute: "active-item" }) activeItem = 0;

  /** Local light/dark mode, reflected to `data-theme` so the token overrides apply. */
  @state() private themeMode: "light" | "dark" = "light";

  // ─── Events (wireable studio triggers — same contract as sidenav) ────────────

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Nav Item Click", eventTrigger: "navchange", categoryLabel: "Triggers" })
  get onNavChange() { return "navchange"; }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Theme Change", eventTrigger: "themechange", categoryLabel: "Triggers" })
  get onThemeChange() { return "themechange"; }

  /** Notification bell → wireable `notification-click`; detail carries `count`. */
  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Notification Click", eventTrigger: "notification-click", categoryLabel: "Triggers" })
  handleBellClick(count: number = this.notificationCount) {
    this.dispatchEvent(new CustomEvent("notification-click", {
      detail: { count },
      bubbles: true,
      composed: true,
    }));
  }

  /** User profile cluster → wireable `profile-click`; detail echoes user name/role. */
  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Profile Click", eventTrigger: "profile-click", categoryLabel: "Triggers" })
  handleProfileClick(origin: "header" = "header", info: { userName?: string; userRole?: string } = { userName: this.userName, userRole: this.userRole }) {
    this.dispatchEvent(new CustomEvent("profile-click", {
      detail: { origin, ...info },
      bubbles: true,
      composed: true,
    }));
  }

  /** Header control (e.g. search) → wireable `header-action`; detail carries `action`. */
  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Header Action", eventTrigger: "header-action", categoryLabel: "Triggers" })
  handleHeaderAction(action: string = "search") {
    this.dispatchEvent(new CustomEvent("header-action", {
      detail: { action },
      bubbles: true,
      composed: true,
    }));
  }

  // ─── Actions ─────────────────────────────────────────────────────────────────

  @RendererAttribute({ attributeType: AttributeType.ACTION, displayLabel: "Toggle Theme (Dark/Light)", categoryLabel: "Actions" })
  public toggleTheme() {
    this.themeMode = this.themeMode === "dark" ? "light" : "dark";
    // themeMode reflects to `data-theme`, which drives the --uiv-* dark overrides.
    this.setAttribute("data-theme", this.themeMode);
    this.dispatchEvent(new CustomEvent("themechange", { detail: { theme: this.themeMode }, bubbles: true, composed: true }));
  }

  @RendererAttribute({ attributeType: AttributeType.ACTION, displayLabel: "Navigate To Item (by index)", categoryLabel: "Actions" })
  public navigateTo(index: number) {
    const item = parseNavItems(this.navItems)[index];
    this.activeItem = index;
    this.dispatchEvent(new CustomEvent("navchange", { detail: { activeItem: index, item }, bubbles: true, composed: true }));
  }

  // ─── Internal handlers ─────────────────────────────────────────────────────

  private handleNavClick(index: number, item: TopNavItem, e: Event) {
    e.preventDefault();
    this.navigateTo(index);
    const href = item.href ?? "";
    if (!href) return;
    if (href.startsWith("/")) {
      // SPA route — same event the sidenav dispatches for path-based nav.
      this.dispatchEvent(new CustomEvent("route-change", { detail: { path: href }, bubbles: true, composed: true }));
    } else {
      window.open(href, "_self");
    }
  }

  // ─── getStudioTemplate ───────────────────────────────────────────────────────

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const props = config.props ?? {};
    const appName = String(props.appName ?? config.studio?.props?.appName ?? "My App");
    const appLogo = String(props.appLogo ?? config.studio?.props?.appLogo ?? "🚀");
    const accentColor = String(props.accentColor ?? "#4680ff");
    const maxWidth = String(props.maxWidth ?? "1280px");
    const showSearch = props.showSearch !== false;
    const showNotifications = props.showNotifications !== false;
    const notificationCount = Number(props.notificationCount ?? 3);
    const showThemeToggle = props.showThemeToggle !== false;
    const userName = String(props.userName ?? "Jane Doe");
    const userRole = String(props.userRole ?? "Administrator");
    const avatarUrl = String(props.avatarUrl ?? "");
    const activeItem = Number(props.activeItem ?? 0);
    const navList = parseNavItems(props.navItems ?? DEFAULT_NAV_ITEMS_JSON);

    const logoHtml = isImgLogo(appLogo)
      ? (appLogo.startsWith("<") ? appLogo : `<img src="${escapeStudio(appLogo)}" style="width:26px;height:26px;object-fit:contain;border-radius:6px;" />`)
      : `<span style="font-size:1.3rem;">${escapeStudio(appLogo)}</span>`;

    const navHtml = navList
      .filter((n) => !!n.label)
      .map((n, i) => {
        const active = i === activeItem;
        return `<span style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:8px;font-size:0.9rem;font-weight:600;white-space:nowrap;${active ? `background:${accentColor}22;color:${accentColor};` : "color:#1d2630;"}">${n.icon ? `${escapeStudio(n.icon)} ` : ""}${escapeStudio(n.label ?? "")}</span>`;
      })
      .join("");

    const searchHtml = showSearch
      ? `<div style="display:flex;align-items:center;gap:8px;height:38px;padding:0 12px;border-radius:10px;background:#f1f4f8;color:#8996a4;font-size:0.85rem;min-width:160px;">🔍 <span>Search</span></div>`
      : "";
    const bellHtml = showNotifications
      ? `<div style="position:relative;width:38px;height:38px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;color:#1d2630;">🔔${notificationCount > 0 ? `<span style="position:absolute;top:2px;right:2px;min-width:16px;height:16px;padding:0 4px;border-radius:999px;background:${accentColor};color:#fff;font-size:0.6rem;font-weight:700;line-height:16px;text-align:center;box-sizing:border-box;">${notificationCount}</span>` : ""}</div>`
      : "";
    const themeHtml = showThemeToggle
      ? `<div style="width:38px;height:38px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;color:#1d2630;">🌗</div>`
      : "";
    const initials = (userName || "U").trim().split(/\s+/).map((p) => p[0]).slice(0, 2).join("").toUpperCase();
    const avatarInner = avatarUrl
      ? `<img src="${escapeStudio(avatarUrl)}" style="width:100%;height:100%;object-fit:cover;" />`
      : escapeStudio(initials);
    const profileHtml = `<div style="display:flex;align-items:center;gap:10px;padding:4px 8px 4px 4px;border-radius:999px;">
        <span style="width:34px;height:34px;border-radius:50%;background:${accentColor};color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;overflow:hidden;">${avatarInner}</span>
        <span style="display:flex;flex-direction:column;line-height:1.1;">
          <span style="font-size:0.82rem;font-weight:700;color:#1d2630;">${escapeStudio(userName)}</span>
          <span style="font-size:0.68rem;color:#8996a4;">${escapeStudio(userRole)}</span>
        </span>
      </div>`;

    const templateHtml = `
      <div style="display:flex;flex-direction:column;width:100%;height:600px;overflow:hidden;border:1px solid #e5e9ef;border-radius:12px;font-family:system-ui,sans-serif;background:#f4f7fa;">
        <div style="display:flex;align-items:center;gap:16px;height:60px;padding:0 20px;background:#ffffff;border-bottom:1px solid #e5e9ef;flex-shrink:0;box-sizing:border-box;">
          <div style="display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.2rem;color:${accentColor};white-space:nowrap;flex-shrink:0;">${logoHtml}<span>${escapeStudio(appName)}</span></div>
          <div style="display:flex;align-items:center;gap:4px;flex:1;min-width:0;overflow:hidden;">${navHtml}</div>
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">${searchHtml}${bellHtml}${themeHtml}${profileHtml}</div>
        </div>
        <div style="flex:1;overflow-y:auto;display:flex;justify-content:center;">
          <div style="width:100%;max-width:${maxWidth};box-sizing:border-box;padding:24px;">
            <zero-studio-slot name="outlet"></zero-studio-slot>
            <zero-studio-slot name="main"></zero-studio-slot>
          </div>
        </div>
      </div>
    `;

    return {
      kind: "panel",
      slots: [
        { id: "outlet", label: "Page Content", dropzone: true, accepts: ["zero-router-outlet", "page-root", "zero-section"] },
        { id: "main", label: "Main Content", dropzone: true, accepts: ["zero-section"] },
      ],
      templateHtml,
      badges: ["Top Nav Layout"],
      emptyText: "Nested pages render in the outlet below the top bar",
    };
  }

  // ─── Runtime render ──────────────────────────────────────────────────────────

  render() {
    const navList = parseNavItems(this.navItems).filter((n) => !!n.label);
    const initials = (this.userName || "U").trim().split(/\s+/).map((p) => p[0]).slice(0, 2).join("").toUpperCase();

    const brandLogo = isImgLogo(this.appLogo)
      ? (this.appLogo.startsWith("<")
          ? html`${unsafeHTML(this.appLogo)}`
          : html`<img src=${this.appLogo} alt="" />`)
      : html`<span style="font-size:1.3rem;">${this.appLogo}</span>`;

    return html`
      <div class="tnl-shell" style="--tnl-accent: ${this.accentColor};">
        <header class="tnl-header ${this.fixedHeader ? "fixed" : ""}">
          <button
            class="tnl-brand"
            @click=${() => this.handleProfileClick("header")}
            title=${this.appName}
          >
            ${brandLogo}<span>${this.appName}</span>
          </button>

          <nav class="tnl-nav">
            ${navList.map((item, i) => html`
              <a
                class="tnl-link ${i === this.activeItem ? "active" : ""}"
                href=${item.href ?? "#"}
                @click=${(e: Event) => this.handleNavClick(i, item, e)}
              >
                ${item.icon ? html`<span>${item.icon}</span>` : nothing}
                <span>${item.label}</span>
              </a>
            `)}
          </nav>

          <div class="tnl-controls">
            ${this.showSearch ? html`
              <button
                class="tnl-icon-btn"
                title="Search"
                @click=${() => this.handleHeaderAction("search")}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
            ` : nothing}

            ${this.showNotifications ? html`
              <button
                class="tnl-icon-btn"
                title="Notifications"
                @click=${() => this.handleBellClick(this.notificationCount)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                ${this.notificationCount > 0 ? html`<span class="tnl-badge">${this.notificationCount}</span>` : nothing}
              </button>
            ` : nothing}

            ${this.showThemeToggle ? html`
              <button
                class="tnl-icon-btn"
                title="Toggle theme"
                @click=${() => this.toggleTheme()}
              >
                ${this.themeMode === "dark"
                  ? html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
                  : html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`}
              </button>
            ` : nothing}

            <button class="tnl-profile" @click=${() => this.handleProfileClick("header")}>
              <span class="tnl-avatar">
                ${this.avatarUrl ? html`<img src=${this.avatarUrl} alt="" />` : html`${initials}`}
              </span>
              <span class="tnl-user">
                <span class="name">${this.userName}</span>
                <span class="role">${this.userRole}</span>
              </span>
            </button>
          </div>
        </header>

        <main class="tnl-main">
          <div class="tnl-content" style="max-width: ${this.maxWidth};">
            <slot name="outlet"></slot>
            <slot name="main"></slot>
            <slot></slot>
          </div>
        </main>
      </div>
    `;
  }
}
