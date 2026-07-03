import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import {
  RendererComponent,
  RendererAttribute,
  applyGlobalStyles,
  AttributeType,
  UserInterfaceType
} from "zero-annotation";
import { ZeroLayoutBase } from "../zero-panel-layout/zero-layout-base";
import type { ZeroSlotDefinition } from "../zero-panel-layout/zero-layout-base";
import { html, css, nothing, PropertyValues } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { customElement, property } from "lit/decorators.js";

// ─── Types ────────────────────────────────────────────────────────────────────

/**
 * Controls how a region (header / sidebar-nav / footer) is rendered.
 * - "config"  → built-in chrome from JSON property
 * - "slot"    → the region becomes a drag-and-drop drop zone
 * - "hidden"  → region is not rendered
 */
export type RegionMode = "config" | "slot" | "hidden";

// ─── NavItem ─────────────────────────────────────────────────────────────────

/**
 * A single navigation item.
 *
 * JSON example (stored in navItems property):
 * [
 *   { "icon": "🏠", "label": "Home",      "id": "home" },
 *   { "icon": "📊", "label": "Dashboard", "id": "dashboard", "badge": "3", "badgeColor": "#ef4444" },
 *   { "separator": true },
 *   { "section": "Config" },
 *   { "icon": "⚙️", "label": "Settings",  "id": "settings", "disabled": true,
 *     "children": [
 *       { "icon": "🔑", "label": "Security", "id": "security" }
 *     ]
 *   }
 * ]
 */
export interface NavItem {
  /** Unique id used in navchange event payload. */
  id?: string;
  /** Display text. */
  label?: string;
  /** Emoji or character icon. */
  icon?: string;
  /** If set, clicking navigates to this URL. */
  href?: string;
  /** Link target. Default: "_self". */
  target?: "_self" | "_blank";
  /** Short badge (e.g. "3", "New"). */
  badge?: string;
  /** Badge background color. Default: accentColor. */
  badgeColor?: string;
  /** Grayed-out, non-clickable. */
  disabled?: boolean;
  /** Render a horizontal divider instead of a nav row. */
  separator?: boolean;
  /** Render a section heading label above this row. */
  section?: string;
  /** Nested children (rendered as an expandable sub-menu). */
  children?: NavItem[];
  /** Push this item and all subsequent items to the bottom of the sidebar. */
  bottom?: boolean;
}

// ─── HeaderConfig ─────────────────────────────────────────────────────────────

/**
 * Built-in header bar chrome (used when headerMode = "config").
 *
 * JSON example (stored in headerConfig property):
 * {
 *   "showSearch": true,
 *   "searchPlaceholder": "Search…",
 *   "showNotificationBell": true,
 *   "notificationCount": 5,
 *   "showUserAvatar": true,
 *   "userAvatarUrl": "",
 *   "userName": "Avinash Kumar",
 *   "userRole": "Admin",
 *   "showBreadcrumb": false,
 *   "breadcrumbs": ["Home", "Dashboard"]
 * }
 */
export interface HeaderConfig {
  showSearch?: boolean;
  searchPlaceholder?: string;
  showNotificationBell?: boolean;
  notificationCount?: number;
  showUserAvatar?: boolean;
  userAvatarUrl?: string;
  userName?: string;
  userRole?: string;
  showBreadcrumb?: boolean;
  breadcrumbs?: string[];
}

// ─── SidebarFooterConfig ──────────────────────────────────────────────────────

/**
 * Built-in sidebar footer user-profile (used when footerMode = "config").
 *
 * JSON example (stored in sidebarFooterConfig property):
 * {
 *   "show": true,
 *   "avatarUrl": "",
 *   "userName": "Avinash Kumar",
 *   "userRole": "Admin",
 *   "showLogout": true,
 *   "showSettings": true
 * }
 */
export interface SidebarFooterConfig {
  show?: boolean;
  avatarUrl?: string;
  userName?: string;
  userRole?: string;
  showLogout?: boolean;
  showSettings?: boolean;
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { icon: "🏠", label: "Home",      id: "home" },
  { icon: "📊", label: "Dashboard", id: "dashboard" },
  { icon: "📁", label: "Projects",  id: "projects" },
  { icon: "👥", label: "Team",      id: "team" },
  { separator: true },
  { section: "System" },
  { icon: "⚙️", label: "Settings",  id: "settings" },
];

const DEFAULT_HEADER_CONFIG: HeaderConfig = {
  showSearch: false,
  searchPlaceholder: "Search…",
  showNotificationBell: false,
  notificationCount: 0,
  showUserAvatar: false,
  userAvatarUrl: "",
  userName: "User Name",
  userRole: "Member",
  showBreadcrumb: false,
  breadcrumbs: [],
};

const DEFAULT_SIDEBAR_FOOTER_CONFIG: SidebarFooterConfig = {
  show: false,
  avatarUrl: "",
  userName: "User Name",
  userRole: "Member",
  showLogout: false,
  showSettings: false,
};

export const DEFAULT_NAV_ITEMS_JSON = JSON.stringify(DEFAULT_NAV_ITEMS, null, 2);
export const DEFAULT_HEADER_CONFIG_JSON = JSON.stringify(DEFAULT_HEADER_CONFIG, null, 2);
export const DEFAULT_SIDEBAR_FOOTER_CONFIG_JSON = JSON.stringify(DEFAULT_SIDEBAR_FOOTER_CONFIG, null, 2);

// ─── Parse helpers ────────────────────────────────────────────────────────────

function parseNavItems(raw: string): NavItem[] {
  try {
    const p = JSON.parse(raw);
    if (Array.isArray(p)) return p as NavItem[];
  } catch { /* ignore */ }
  return DEFAULT_NAV_ITEMS;
}

function parseHeaderConfig(raw: string): HeaderConfig {
  try {
    const p = JSON.parse(raw);
    if (p && typeof p === "object") return { ...DEFAULT_HEADER_CONFIG, ...p };
  } catch { /* ignore */ }
  return DEFAULT_HEADER_CONFIG;
}

function parseSidebarFooterConfig(raw: string): SidebarFooterConfig {
  try {
    const p = JSON.parse(raw);
    if (p && typeof p === "object") return { ...DEFAULT_SIDEBAR_FOOTER_CONFIG, ...p };
  } catch { /* ignore */ }
  return DEFAULT_SIDEBAR_FOOTER_CONFIG;
}

function slugify(s = "") {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function initials(name = "") {
  return name.split(" ").map(w => w[0] ?? "").join("").slice(0, 2).toUpperCase() || "U";
}

// ─── Studio-time HTML helpers (pure string functions) ─────────────────────────
// Used only inside getStudioTemplate — must return plain HTML strings.

function studioDropZone(slotId: string, label: string, minHeight = "60px", accent = "#6366f1") {
  return `
    <div style="
      min-height:${minHeight};
      border:2px dashed ${accent}40;
      border-radius:8px;
      display:flex; align-items:center; justify-content:center;
      color:${accent}; font-size:0.75rem; font-weight:600;
      background:${accent}08; padding:8px;
    ">
      <zero-studio-slot name="${slotId}"></zero-studio-slot>
    </div>
  `;
}

function studioToggleButtonHtml(
  position: string,
  iconType: string,
  collapsed: boolean,
  sidenavType: string,
  opened: boolean,
  color: string
): string {
  if (position === "hidden") return "";
  
  let icon = "☰";
  const isCurrentlyCollapsed = sidenavType === "over" ? !opened : collapsed;

  if (iconType === "hamburger") {
    icon = `
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" style="display:block;">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
    `;
  } else if (iconType === "dots") {
    icon = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display:block;">
        <circle cx="12" cy="5" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="12" cy="19" r="2"/>
      </svg>
    `;
  } else if (iconType === "chevron") {
    if (isCurrentlyCollapsed) {
      icon = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      `;
    } else {
      icon = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      `;
    }
  } else if (iconType === "arrow") {
    if (isCurrentlyCollapsed) {
      icon = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      `;
    } else {
      icon = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      `;
    }
  }

  if (position === "floating") {
    return `
      <div style="
        position:absolute; top:20px;
        left:calc(${sidenavType === "over" ? (opened ? "260px" : "0px") : (collapsed ? "64px" : "260px")} - 14px);
        z-index:35; width:28px; height:28px; border-radius:50%;
        background:#ffffff; border:1px solid rgba(0,0,0,0.1);
        display:flex; align-items:center; justify-content:center;
        cursor:pointer; box-shadow:0 2px 4px rgba(0,0,0,0.08);
        color:${color}; transition:left 0.25s;
      ">
        ${icon}
      </div>
    `;
  }

  if (position === "header-left" || position === "header-right") {
    return `
      <div style="
        display:flex; align-items:center; justify-content:center;
        width:36px; height:36px; border-radius:8px; cursor:pointer;
        background:transparent; border:none; color:${color}; flex-shrink:0;
        margin-right: 8px;
      ">
        ${icon}
      </div>
    `;
  }

  // Sidebar buttons (top / bottom)
  return `
    <div style="
      display:flex; align-items:center; justify-content:center;
      padding:10px; margin:4px 8px 8px; border-radius:6px; cursor:pointer;
      background:transparent; border:none; color:${color}; flex-shrink:0;
    ">
      ${icon}
    </div>
  `;
}

function studioNavRow(
  item: NavItem, index: number, activeItem: number,
  sidebarText: string, sidebarActiveBg: string, sidebarActiveText: string,
  accentColor: string, collapsed: boolean
): string {
  if (item.separator) {
    return `<div style="height:1px; background:rgba(255,255,255,0.1); margin:6px 12px;"></div>`;
  }
  if (item.section) {
    return collapsed ? "" : `
      <div style="padding:10px 12px 4px; font-size:0.68rem; font-weight:700;
        letter-spacing:0.08em; text-transform:uppercase;
        color:${sidebarText}; opacity:0.45; white-space:nowrap;">
        ${item.section}
      </div>
    `;
  }

  const isActive = activeItem === index;
  const badge = (!collapsed && item.badge) ? `
    <span style="margin-left:auto; background:${item.badgeColor || accentColor};
      color:#fff; font-size:0.65rem; font-weight:700; padding:1px 7px;
      border-radius:999px; flex-shrink:0;">
      ${item.badge}
    </span>
  ` : "";

  const childIndicator = (!collapsed && item.children?.length) ? `
    <span style="margin-left:auto; color:${sidebarText}; font-size:0.7rem;">›</span>
  ` : "";

  return `
    <div data-tab-index="${index}" style="
      display:flex; align-items:center; gap:10px;
      padding:9px 12px; border-radius:8px; margin-bottom:2px;
      cursor:${item.disabled ? "not-allowed" : "pointer"};
      opacity:${item.disabled ? "0.4" : "1"};
      font-size:0.875rem; font-weight:${isActive ? "600" : "500"};
      color:${isActive ? sidebarActiveText : sidebarText};
      background:${isActive ? sidebarActiveBg : "transparent"};
      transition:all 0.15s; user-select:none; overflow:hidden;
    ">
      <span style="font-size:1.05rem; flex-shrink:0; width:20px; text-align:center;">
        ${item.icon ?? "•"}
      </span>
      ${collapsed ? "" : `
        <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;">
          ${item.label ?? ""}
        </span>
        ${badge}${childIndicator}
      `}
    </div>
  `;
}

function studioHeaderExtras(cfg: HeaderConfig, accentColor: string, headerText: string) {
  const parts: string[] = [];

  if (cfg.showBreadcrumb && cfg.breadcrumbs?.length) {
    const crumbs = cfg.breadcrumbs.map((b, i) =>
      i < cfg.breadcrumbs!.length - 1
        ? `<span style="color:${headerText}80;">${b}</span><span style="color:${headerText}40; margin:0 4px;">›</span>`
        : `<span style="color:${headerText}; font-weight:600;">${b}</span>`
    ).join("");
    parts.push(`<div style="display:flex; align-items:center; font-size:0.8rem;">${crumbs}</div>`);
  }

  if (cfg.showSearch) {
    parts.push(`
      <div style="flex:1; max-width:280px; display:flex; align-items:center; gap:8px;
        background:rgba(0,0,0,0.04); border-radius:8px; padding:7px 12px;">
        <span style="color:${headerText}50; font-size:0.85rem;">🔍</span>
        <span style="color:${headerText}40; font-size:0.83rem;">${cfg.searchPlaceholder ?? "Search…"}</span>
      </div>
    `);
  }

  parts.push(`<div style="flex:1;"></div>`);

  if (cfg.showNotificationBell) {
    const count = cfg.notificationCount ?? 0;
    parts.push(`
      <div style="position:relative; cursor:pointer; padding:6px; border-radius:8px;">
        <span style="font-size:1.2rem; line-height:1;">🔔</span>
        ${count > 0 ? `
          <span style="position:absolute; top:2px; right:2px; background:${accentColor};
            color:#fff; font-size:0.6rem; font-weight:700; min-width:16px; height:16px;
            border-radius:999px; display:flex; align-items:center; justify-content:center; padding:0 3px;">
            ${count}
          </span>` : ""
        }
      </div>
    `);
  }

  if (cfg.showUserAvatar) {
    const ini = initials(cfg.userName);
    const avatar = cfg.userAvatarUrl
      ? `<img src="${cfg.userAvatarUrl}" style="width:32px; height:32px; border-radius:50%; object-fit:cover; flex-shrink:0;" />`
      : `<div style="width:32px; height:32px; border-radius:50%; background:${accentColor}; color:#fff;
           display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:700; flex-shrink:0;">
           ${ini}
         </div>`;
    parts.push(`
      <div style="display:flex; align-items:center; gap:8px; cursor:pointer;">
        ${avatar}
        <div style="display:flex; flex-direction:column; line-height:1.25;">
          <span style="font-size:0.8rem; font-weight:600; color:${headerText};">${cfg.userName ?? ""}</span>
          ${cfg.userRole ? `<span style="font-size:0.7rem; color:${headerText}60;">${cfg.userRole}</span>` : ""}
        </div>
        <span style="color:${headerText}40; font-size:0.75rem;">▾</span>
      </div>
    `);
  }

  return parts.join("");
}

function studioSidebarFooter(
  cfg: SidebarFooterConfig, collapsed: boolean, accentColor: string,
  footerActionType = "buttons", sidebarText = "#94a3b8"
) {
  if (!cfg.show) return "";
  const ini = initials(cfg.userName);
  const avatar = cfg.avatarUrl
    ? `<img src="${cfg.avatarUrl}" style="width:34px; height:34px; border-radius:50%; object-fit:cover; flex-shrink:0;" />`
    : `<div style="width:34px; height:34px; border-radius:50%; background:rgba(255,255,255,0.15);
         color:#fff; display:flex; align-items:center; justify-content:center;
         font-size:0.75rem; font-weight:700; flex-shrink:0;">${ini}</div>`;
  return `
    <div style="padding:12px 14px; border-top:1px solid rgba(255,255,255,0.07);
      display:flex; align-items:center; gap:10px; flex-shrink:0;">
      ${avatar}
      ${collapsed ? "" : `
        <div style="flex:1; overflow:hidden;">
          <div style="font-size:0.82rem; font-weight:600; color:var(--snl-footer-name-color, #fff);
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${cfg.userName ?? ""}</div>
          ${cfg.userRole ? `<div style="font-size:0.7rem; color:var(--snl-footer-role-color, #94a3b8);
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${cfg.userRole}</div>` : ""}
        </div>
        <div style="display:flex; gap:4px; align-items:center;">
          ${footerActionType === "buttons" && cfg.showSettings ? `<span style="cursor:pointer; color:var(--snl-footer-btn-color, #94a3b8); font-size:0.9rem;" title="Settings">⚙️</span>` : ""}
          ${footerActionType === "buttons" && cfg.showLogout ? `<span style="cursor:pointer; color:var(--snl-footer-btn-color, #94a3b8); font-size:0.9rem;" title="Logout">↪</span>` : ""}
          ${footerActionType === "dropdown" ? `
            <span style="cursor:pointer; color:var(--snl-footer-btn-color, #94a3b8); display:flex; align-items:center;" title="Profile Actions">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          ` : ""}
        </div>
      `}
    </div>
  `;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * zero-sidenav-layout — v3
 *
 * A highly configurable app-shell panel. Each structural region (header, sidebar-nav,
 * sidebar-footer) can operate in one of three independent modes:
 *
 *   "config"  → built-in chrome is rendered from the region's JSON property
 *   "slot"    → that region becomes a drag-and-drop drop zone in the visual editor
 *   "hidden"  → region is removed entirely
 *
 * The `main` content area is always a drop zone.
 *
 * Slots (conditional on mode):
 *   "main"          → always available
 *   "header"        → when headerMode  === "slot"
 *   "sidebar"       → when sidenavMode === "slot"  (replaces nav items area)
 *   "sidebar-extra" → when sidenavMode === "config" (extra area below nav items)
 *   "footer"        → when footerMode  === "slot"  (inside sidebar bottom area)
 *
 * Kind: "panel"
 */
@RendererComponent({
  name: "zero-sidenav-layout",
  version: "1.0.0",
  title: "Sidebar Layout",
  elementSelector: "zero-sidenav-layout",
  group: "Layout",
  iconName: "sidenav-layout-icon.png",
  layoutKind: "panel",
  environment: ["page"],
})
@customElement("zero-sidenav-layout")
@applyGlobalStyles()
export class ZeroSidenavLayout extends ZeroLayoutBase {

  protected get overridePrefix() { return "zero-sidenav-layout"; }

  static getTransformOnDrop() {
    return {
      componentName: "zero-sidenav-layout",
      props: {
        appName: "Zendenta",
        appSubtitle: "Cabut gigi tanpa sakit",
        appLogo: "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 16H11V14H13V16ZM13 12H11V7H13V12Z' fill='#0EA5E9'/></svg>",
        sidebarBg: "#ffffff",
        sidebarText: "#64748b",
        sidebarActiveBg: "#f1f5f9",
        sidebarActiveText: "#0ea5e9",
        accentColor: "#0ea5e9",
        headerBg: "#ffffff",
        headerText: "#0f172a",
        headerBorder: "#e2e8f0",
        mainBg: "#f8fafc",
        footerActionType: "dropdown",
        sidebarFooterConfig: JSON.stringify({
          show: true,
          userName: "Drg. Adam H.",
          userRole: "Dentist",
          avatarUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=120"
        }),
        navItems: JSON.stringify([
          { label: "Overview", icon: "⏱️" },
          { label: "Calendar", icon: "📅" },
          { label: "Patient List", icon: "👤" },
          { label: "Messages", icon: "💬" },
          { label: "Payment Information", icon: "💳" },
          { label: "Settings", icon: "⚙️" },
          { label: "Help ?", icon: "❓", bottom: true }
        ]),
        activeItem: 2,
        fixedHeader: true,
        fixedFooter: true
      },
      children: [
        // 1. Breadcrumbs Header Section (1 Column)
        {
          componentName: "zero-section",
          slot: "main",
          props: {
            gap: "16px",
            padding: "0px 0px 16px 0px"
          },
          children: [
            {
              componentName: "zero-column",
              props: { flex: "1" },
              children: [
                {
                  componentName: "zero-heading",
                  props: { text: "Patient List / Diane Cooper", level: 3, align: "left" }
                }
              ]
            }
          ]
        },
        // 2. Main content 3-column layout grid
        {
          componentName: "zero-section",
          slot: "main",
          props: {
            gap: "24px"
          },
          children: [
            // Column 1: Patient Profile Card (25%)
            {
              componentName: "zero-column",
              props: { width: "25%" },
              children: [
                {
                  componentName: "zero-profile-card",
                  props: {
                    name: "Diane Cooper",
                    subtitle: "diane.cooper@example.com",
                    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
                    stat1Value: 15,
                    stat1Label: "Past",
                    stat2Value: 2,
                    stat2Label: "Upcoming",
                    buttonText: "Send Message"
                  }
                }
              ]
            },
            // Column 2: Information & Timeline Cards (50%)
            {
              componentName: "zero-column",
              props: { width: "50%", gap: "24px" },
              children: [
                {
                  componentName: "zero-metadata-card",
                  props: {
                    item1Label: "Gender",
                    item1Value: "Female",
                    item2Label: "Birthday",
                    item2Value: "Feb 24th, 1997",
                    item3Label: "Phone Number",
                    item3Value: "(239) 555-0108",
                    item4Label: "Registered Date",
                    item4Value: "Feb 24th, 1997",
                    item5Label: "Street Address",
                    item5Value: "Jl. Diponegoro No. 21",
                    item6Label: "City",
                    item6Value: "Cilacap",
                    item7Label: "ZIP Code",
                    item7Value: "655849",
                    item8Label: "Member Status",
                    item8Value: "Active Member"
                  }
                },
                {
                  componentName: "zero-timeline-card",
                  props: { activeTab: 0 }
                }
              ]
            },
            // Column 3: Notes & Files Cards (25%)
            {
              componentName: "zero-column",
              props: { width: "25%", gap: "24px" },
              children: [
                {
                  componentName: "zero-notes-card",
                  props: {
                    title: "Notes",
                    text: "This patient has history of penicillin allergy. Please verify medications. Prefers morning appointments.",
                    author: "Drg. Adam H.",
                    date: "26 Nov '19"
                  }
                },
                {
                  componentName: "zero-files-card",
                  props: { title: "Files / Documents" }
                }
              ]
            }
          ]
        }
      ]
    };
  }

  // Always dynamic — getStudioTemplate builds slots from current mode config
  static slots: ZeroSlotDefinition[] = [];

  @property({ type: String, reflect: true })
  override height = "100vh";

  @property({ type: String, attribute: "active-path" })
  activePath = "";

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener("popstate", this._handleUrlChange);
    this._matchActiveItemWithUrl();
  }

  override disconnectedCallback() {
    window.removeEventListener("popstate", this._handleUrlChange);
    super.disconnectedCallback();
  }

  private _handleUrlChange = () => {
    this._matchActiveItemWithUrl();
  };

  override willUpdate(changedProperties: PropertyValues) {
    super.willUpdate(changedProperties);
    this._matchActiveItemWithUrl();
  }

  protected override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    this.style.setProperty("--zero-height", this.height);
  }

  private _matchActiveItemWithUrl() {
    if (typeof window === "undefined") return;

    // 1. Resolve current active path from parent runtime or renderer context
    let activePath = "";
    const runtimeApp = this.closest("zero-runtime-app") as any;
    if (runtimeApp) {
      activePath = runtimeApp.pathName || runtimeApp.currentPath || "";
    } else {
      const renderer = this.closest("zero-renderer") as any;
      if (renderer) {
        activePath = renderer.path || "";
      }
    }

    // Fallback to window path
    if (!activePath) {
      activePath = window.location.pathname;
    }

    // 2. Clean project ID prefix if present (e.g. /project-1781525772761/dashboard -> /dashboard)
    let cleanPath = activePath;
    if (cleanPath.startsWith("/")) {
      const parts = cleanPath.split("/").filter(Boolean);
      if (parts.length > 1 && parts[0].startsWith("project-")) {
        cleanPath = "/" + parts.slice(1).join("/");
      }
    }

    // Expose activePath property so other components or styling binds can use it
    this.activePath = cleanPath;

    // 3. Match item in navItems (only in config mode)
    if (this.sidenavMode === "config") {
      const navList = parseNavItems(this.navItems);
      const index = navList.findIndex((item) => {
        if (!item.href) return false;

        let itemPath = item.href;
        try {
          itemPath = new URL(item.href, window.location.origin).pathname;
        } catch (e) {}

        if (itemPath.startsWith("/")) {
          const parts = itemPath.split("/").filter(Boolean);
          if (parts.length > 1 && parts[0].startsWith("project-")) {
            itemPath = "/" + parts.slice(1).join("/");
          }
        }

        const cleanItemPath = itemPath.replace(/\/$/, "");
        const cleanCurrentPath = cleanPath.replace(/\/$/, "");

        return cleanItemPath === cleanCurrentPath ||
               cleanItemPath === "/" + cleanCurrentPath ||
               "/" + cleanItemPath === cleanCurrentPath;
      });

      if (index !== -1 && index !== this.activeItem) {
        this.activeItem = index;
      }
    }
  }

  // ─── Styles ───────────────────────────────────────────────────────────────
  static styles = [
    ZeroLayoutBase.styles,
    css`
      :host {
        display: block;
        width: 100%;
        height: var(--zero-height, 100%);
        min-height: var(--zero-height, 100vh);
        --snl-accent: var(--uiv-primary-color, #6366f1);
        --snl-ease: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      }

      :host > div {
        height: var(--zero-height, 100%);
        width: 100%;
      }

      /* ── Shell ── */
      .snl-shell {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      /* ── Header ── */
      .snl-header {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
        padding: 0 20px;
        box-sizing: border-box;
        z-index: 10;
        width: 100%;
      }

      .snl-header-brand {
        display: flex; align-items: center; gap: 10px;
        font-weight: 700; font-size: 0.95rem;
        white-space: nowrap; flex-shrink: 0;
      }

      .snl-header-breadcrumb {
        display: flex; align-items: center; gap: 4px; font-size: 0.8rem;
      }

      .snl-header-search {
        flex: 1; max-width: 280px;
        display: flex; align-items: center; gap: 8px;
        border-radius: 8px; padding: 7px 12px;
        background: rgba(0,0,0,0.04);
      }

      .snl-header-spacer { flex: 1; }

      .snl-header-bell {
        position: relative; cursor: pointer;
        padding: 6px; border-radius: 8px; font-size: 1.2rem;
        transition: background var(--snl-ease);
      }
      .snl-header-bell:hover { background: rgba(0,0,0,0.04); }

      .snl-bell-count {
        position: absolute; top: 2px; right: 2px;
        background: var(--snl-accent); color: #fff;
        font-size: 0.6rem; font-weight: 700;
        min-width: 16px; height: 16px;
        border-radius: 999px;
        display: flex; align-items: center; justify-content: center; padding: 0 3px;
      }

      .snl-header-user {
        display: flex; align-items: center; gap: 8px;
        cursor: pointer; border-radius: 8px; padding: 4px 8px;
        transition: background var(--snl-ease);
      }
      .snl-header-user:hover { background: rgba(0,0,0,0.04); }

      .snl-header-slot {
        display: flex; align-items: center;
        flex: 1; min-width: 0;
      }

      /* ── Body ── */
      .snl-body { display: flex; flex: 1; overflow: hidden; min-height: 0; position: relative; }

      /* ── Sidebar ── */
      .snl-sidebar {
        display: flex; flex-direction: column;
        flex-shrink: 0; overflow: hidden;
        transition: width var(--snl-ease), transform var(--snl-ease), left var(--snl-ease);
        border-right: 1px solid rgba(0,0,0,0.08);
      }

      :host([collapsed]) .snl-sidebar { width: var(--snl-collapsed-w, 64px) !important; }
      :host([collapsed]) .snl-brand-text,
      :host([collapsed]) .nav-label,
      :host([collapsed]) .snl-nav-badge,
      :host([collapsed]) .snl-nav-section,
      :host([collapsed]) .snl-footer-info,
      :host([collapsed]) .snl-footer-actions,
      :host([collapsed]) .snl-sidebar-extra { display: none; }

      .snl-sidebar-brand {
        display: flex; align-items: center; gap: 10px;
        padding: 18px 16px; flex-shrink: 0;
        border-bottom: 1px solid rgba(255,255,255,0.07);
      }

      .snl-brand-logo { font-size: 1.4rem; line-height: 1; flex-shrink: 0; }
      .snl-brand-text {
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--snl-brand-text-color, #fff);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* ── Nav ── */
      .snl-nav {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 10px 8px;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .nav-separator {
        height: 1px;
        background: var(--snl-separator-color, rgba(255,255,255,0.08));
        margin: 6px 12px;
      }

      .snl-nav-section {
        padding: 10px 12px 4px; font-size: 0.68rem;
        font-weight: 700; letter-spacing: 0.08em;
        text-transform: uppercase; opacity: 0.4;
        white-space: nowrap; overflow: hidden;
      }

      .nav-item {
        display: flex; align-items: center; gap: 10px;
        padding: 9px 12px; border-radius: 8px; margin-bottom: 2px;
        font-size: 0.875rem; font-weight: 500;
        transition: background var(--snl-ease), color var(--snl-ease), border-color var(--snl-ease);
        user-select: none; border: none; width: 100%;
        text-align: left; box-sizing: border-box; cursor: pointer;
        background: transparent; overflow: hidden;
        border-left: 4px solid transparent;
      }

      .nav-item:hover:not(.is-disabled) {
        background: var(--snl-hover-bg, rgba(255,255,255,0.07));
      }
      .nav-item.is-active {
        font-weight: 600;
        border-left-color: var(--snl-accent);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      .nav-item.is-disabled { cursor: not-allowed; opacity: 0.4; }

      .nav-icon { font-size: 1.05rem; line-height: 1; flex-shrink: 0; width: 20px; text-align: center; }
      .nav-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }

      .snl-nav-badge {
        margin-left: auto; font-size: 0.65rem; font-weight: 700;
        padding: 1px 7px; border-radius: 999px; color: #fff; flex-shrink: 0;
      }

      .nav-child-indicator { margin-left: auto; font-size: 0.8rem; opacity: 0.5; }

      /* ── Sub-menu ── */
      .snl-sub-menu { padding-left: 28px; overflow: hidden; }
      .snl-sub-menu.open { display: block; }
      .snl-sub-menu:not(.open) { display: none; }

      /* ── Sidebar Extra (slot drop zone) ── */
      .snl-sidebar-extra { padding: 8px; border-top: 1px solid rgba(255,255,255,0.07); flex-shrink: 0; }

      /* ── Sidebar Slot (full nav area as drop zone) ── */
      .snl-sidebar-slot {
        flex: 1; padding: 8px;
        display: flex; flex-direction: column;
      }

      /* ── Sidebar Footer (config) ── */
      .snl-sidebar-footer {
        display: flex; align-items: center; gap: 10px;
        padding: 12px 14px; flex-shrink: 0;
        border-top: 1px solid rgba(255,255,255,0.07);
      }

      .snl-footer-avatar {
        width: 34px; height: 34px; border-radius: 50%;
        object-fit: cover; flex-shrink: 0;
      }

      .snl-footer-initials {
        width: 34px; height: 34px; border-radius: 50%;
        background: rgba(255,255,255,0.15); color: #fff;
        display: flex; align-items: center; justify-content: center;
        font-size: 0.75rem; font-weight: 700; flex-shrink: 0;
      }

      .snl-footer-info { flex: 1; overflow: hidden; }
      .snl-footer-name {
        font-size: 0.82rem; font-weight: 600;
        color: var(--snl-footer-name-color, #fff);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-footer-role {
        font-size: 0.7rem;
        color: var(--snl-footer-role-color, #94a3b8);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-footer-actions { display: flex; gap: 4px; }
      .snl-footer-btn {
        cursor: pointer;
        color: var(--snl-footer-btn-color, #94a3b8);
        font-size: 0.9rem; padding: 4px; border-radius: 4px; border: none; background: transparent;
      }
      .snl-footer-btn:hover { background: rgba(255,255,255,0.07); }

      /* ── Sidebar Footer (slot) ── */
      .snl-footer-slot { padding: 8px; border-top: 1px solid rgba(255,255,255,0.07); flex-shrink: 0; }

      /* ── Header Slot drop zone ── */
      .snl-header-slot-zone { flex: 1; padding: 4px 0; display: flex; align-items: center; }

      /* ── Collapse button ── */
      .snl-collapse-btn {
        display: flex; align-items: center; justify-content: center;
        padding: 10px; margin: 4px 8px 8px;
        border-radius: 6px; cursor: pointer;
        background: transparent; border: none;
        font-size: 0.9rem;
        transition: background var(--snl-ease); flex-shrink: 0;
      }
      .snl-collapse-btn:hover { background: rgba(255,255,255,0.07); }

      /* ── Main ── */
      .snl-main {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
        min-width: 0;
        display: flex;
        flex-direction: column;
      }

      /* Avatar shared styles */
      .snl-avatar {
        width: 32px; height: 32px; border-radius: 50%;
        flex-shrink: 0;
      }
      .snl-avatar-img { object-fit: cover; }
      .snl-avatar-init {
        display: flex; align-items: center; justify-content: center;
        font-size: 0.75rem; font-weight: 700; color: #fff;
        background: var(--snl-accent);
      }

      /* Drop-zone hint ring (shown in slot mode) */
      .snl-drop-hint {
        flex: 1; min-height: 60px;
        border: 2px dashed var(--snl-accent, #6366f1);
        border-radius: 8px; opacity: 0.5;
        display: flex; align-items: center; justify-content: center;
        font-size: 0.75rem; font-weight: 600; color: var(--snl-accent);
        margin: 4px;
      }

      /* Sidenav Modes (Side vs Over) */
      :host([sidenav-type="over"]) .snl-sidebar {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 30;
        height: 100%;
        box-shadow: 4px 0 12px rgba(0, 0, 0, 0.15);
      }

      /* Closed states */
      :host([sidenav-type="side"]:not([opened])) .snl-sidebar {
        width: 0 !important;
        border-right: none !important;
      }

      :host([sidenav-type="over"]:not([opened])) .snl-sidebar {
        transform: translateX(-100%);
        border-right: none !important;
      }

      .snl-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(2px);
        z-index: 25;
        transition: opacity var(--snl-ease);
      }

      .snl-floating-toggle {
        position: absolute;
        top: 20px;
        left: calc(var(--snl-sidebar-width, 260px) - 14px);
        transition: left var(--snl-ease);
        z-index: 35;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #ffffff;
        border: 1px solid rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0,0,0,0.08);
        color: var(--snl-sidebar-text, #94a3b8);
      }
      :host([collapsed]) .snl-floating-toggle {
        left: calc(var(--snl-collapsed-w, 64px) - 14px);
      }
      :host(:not([opened])) .snl-floating-toggle {
        left: -14px;
      }
      :host([sidenav-type="over"]:not([opened])) .snl-floating-toggle {
        left: 10px;
      }

      .snl-header-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        cursor: pointer;
        background: transparent;
        border: none;
        transition: background var(--snl-ease);
        flex-shrink: 0;
        margin-right: 8px;
      }
      .snl-header-btn:hover {
        background: rgba(0, 0, 0, 0.05);
      }
      .snl-header-btn svg {
        display: block;
      }

      slot { display: contents; }
    `,
  ];

  // ─── Region Mode Properties ────────────────────────────────────────────────

  @property({ type: String, attribute: "header-mode", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Header Mode",
    fieldMappings: "headerMode",
    categoryLabel: "Regions",
    optionItems: [
      { label: "Built-in (Config)",  value: "config" },
      { label: "Drag & Drop (Slot)", value: "slot" },
      { label: "Hidden",             value: "hidden" },
    ]
  })
  headerMode: RegionMode = "config";

  @property({ type: String, attribute: "sidenav-mode", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Sidebar Nav Mode",
    fieldMappings: "sidenavMode",
    categoryLabel: "Regions",
    optionItems: [
      { label: "Built-in (Config)",  value: "config" },
      { label: "Drag & Drop (Slot)", value: "slot" },
      { label: "Hidden",             value: "hidden" },
    ]
  })
  sidenavMode: RegionMode = "config";

  @property({ type: String, attribute: "footer-mode", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Sidebar Footer Mode",
    fieldMappings: "footerMode",
    categoryLabel: "Regions",
    optionItems: [
      { label: "Built-in (Config)",  value: "config" },
      { label: "Drag & Drop (Slot)", value: "slot" },
      { label: "Hidden",             value: "hidden" },
    ]
  })
  footerMode: RegionMode = "config";

  @property({ type: Boolean, attribute: "fixed-header" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Fixed Header",
    fieldMappings: "fixedHeader",
    categoryLabel: "Layout",
    initialValue: true
  })
  fixedHeader = true;

  @property({ type: Boolean, attribute: "fixed-footer" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Fixed Sidebar Footer",
    fieldMappings: "fixedFooter",
    categoryLabel: "Layout",
    initialValue: true
  })
  fixedFooter = true;

  // ─── Sidenav Drawer Properties ──────────────────────────────────────────────

  @property({ type: String, attribute: "sidenav-type", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Sidenav Layout Mode",
    fieldMappings: "sidenavType",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Side (Standard)", value: "side" },
      { label: "Over (Overlay/Drawer)", value: "over" },
    ]
  })
  sidenavType: "side" | "over" = "side";

  @property({ type: Boolean, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Sidenav Opened",
    fieldMappings: "opened",
    categoryLabel: "Layout",
    initialValue: true
  })
  opened = true;

  @property({ type: Boolean, attribute: "has-backdrop", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Has Backdrop (Over mode)",
    fieldMappings: "hasBackdrop",
    categoryLabel: "Layout",
    initialValue: true
  })
  hasBackdrop = true;

  @property({ type: String, attribute: "collapse-btn-position", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Collapse Button Position",
    fieldMappings: "collapseBtnPosition",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Sidebar Bottom", value: "sidebar-bottom" },
      { label: "Sidebar Top", value: "sidebar-top" },
      { label: "Header Left (Hamburger)", value: "header-left" },
      { label: "Header Right (Hamburger)", value: "header-right" },
      { label: "Floating (Edge)", value: "floating" },
      { label: "Hidden", value: "hidden" },
    ]
  })
  collapseBtnPosition = "sidebar-bottom";

  @property({ type: String, attribute: "collapse-btn-icon", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Collapse Button Icon",
    fieldMappings: "collapseBtnIcon",
    categoryLabel: "Layout",
    optionItems: [
      { label: "Hamburger (☰)", value: "hamburger" },
      { label: "Chevron (◀ / ▶)", value: "chevron" },
      { label: "Arrow (← / →)", value: "arrow" },
      { label: "Menu Dots (⋮)", value: "dots" },
    ]
  })
  collapseBtnIcon = "chevron";

  // ─── Navigation Properties ─────────────────────────────────────────────────

  /**
   * JSON array of NavItem objects. See NavItem interface for full schema.
   * Only used when sidenavMode = "config".
   */
  @property({ type: String, attribute: "nav-items" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Nav Items (JSON)",
    fieldMappings: "navItems",
    categoryLabel: "Navigation",
    placeholderText: DEFAULT_NAV_ITEMS_JSON,
    initialValue: DEFAULT_NAV_ITEMS_JSON,
  })
  navItems: string = DEFAULT_NAV_ITEMS_JSON;

  @property({ type: Number, reflect: true, attribute: "active-item" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Active Item Index",
    fieldMappings: "activeItem",
    categoryLabel: "Navigation",
    initialValue: 0,
  })
  activeItem = 0;

  // ─── Header Config ─────────────────────────────────────────────────────────

  /**
   * JSON object controlling header chrome. Only used when headerMode = "config".
   * See HeaderConfig interface for full schema.
   */
  @property({ type: String, attribute: "header-config" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Header Config (JSON)",
    fieldMappings: "headerConfig",
    categoryLabel: "Header",
    placeholderText: DEFAULT_HEADER_CONFIG_JSON,
    initialValue: DEFAULT_HEADER_CONFIG_JSON,
  })
  headerConfig: string = DEFAULT_HEADER_CONFIG_JSON;

  // ─── Sidebar Footer Config ─────────────────────────────────────────────────

  /**
   * JSON object controlling sidebar footer user profile.
   * Only used when footerMode = "config".
   * See SidebarFooterConfig interface for full schema.
   */
  @property({ type: String, attribute: "sidebar-footer-config" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Sidebar Footer Config (JSON)",
    fieldMappings: "sidebarFooterConfig",
    categoryLabel: "Sidebar Footer",
    placeholderText: DEFAULT_SIDEBAR_FOOTER_CONFIG_JSON,
    initialValue: DEFAULT_SIDEBAR_FOOTER_CONFIG_JSON,
  })
  sidebarFooterConfig: string = DEFAULT_SIDEBAR_FOOTER_CONFIG_JSON;

  // ─── Branding ──────────────────────────────────────────────────────────────

  @property({ type: String, attribute: "app-name" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "App / Brand Name",
    fieldMappings: "appName",
    categoryLabel: "Branding"
  })
  appName = "My App";

  @property({ type: String, attribute: "app-subtitle" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "App Subtitle",
    fieldMappings: "appSubtitle",
    categoryLabel: "Branding"
  })
  appSubtitle = "";

  @property({ type: String, attribute: "app-logo" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Logo Emoji / Character",
    fieldMappings: "appLogo",
    categoryLabel: "Branding"
  })
  appLogo = "🚀";

  @property({ type: String, attribute: "header-title" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Header Title (overrides brand name in header bar)",
    fieldMappings: "headerTitle",
    categoryLabel: "Branding"
  })
  headerTitle = "";

  // ─── Layout ────────────────────────────────────────────────────────────────

  @property({ type: Boolean, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Sidebar Collapsed",
    fieldMappings: "collapsed",
    categoryLabel: "Layout"
  })
  collapsed = false;

  @property({ type: String, attribute: "sidebar-width" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Sidebar Width (e.g. 260px)",
    fieldMappings: "sidebarWidth",
    categoryLabel: "Layout"
  })
  sidebarWidth = "260px";

  @property({ type: String, attribute: "header-height" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Header Height (e.g. 60px)",
    fieldMappings: "headerHeight",
    categoryLabel: "Layout"
  })
  headerHeight = "60px";

  @property({ type: String, attribute: "collapsed-width" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Collapsed Sidebar Width (e.g. 64px)",
    fieldMappings: "collapsedWidth",
    categoryLabel: "Layout"
  })
  collapsedWidth = "64px";

  @property({ type: Boolean, attribute: "show-collapse-btn", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Collapse Button",
    fieldMappings: "showCollapseBtn",
    categoryLabel: "Layout"
  })
  showCollapseBtn = true;

  // ─── Appearance ────────────────────────────────────────────────────────────

  @property({ type: String, attribute: "sidebar-bg" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Sidebar Background",
    fieldMappings: "sidebarBg",
    categoryLabel: "Appearance"
  })
  sidebarBg = "#1e293b";

  @property({ type: String, attribute: "sidebar-text" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Sidebar Text Color",
    fieldMappings: "sidebarText",
    categoryLabel: "Appearance"
  })
  sidebarText = "#94a3b8";

  @property({ type: String, attribute: "sidebar-active-bg" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Active Item Background",
    fieldMappings: "sidebarActiveBg",
    categoryLabel: "Appearance"
  })
  sidebarActiveBg = "#334155";

  @property({ type: String, attribute: "sidebar-active-text" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Active Item Text Color",
    fieldMappings: "sidebarActiveText",
    categoryLabel: "Appearance"
  })
  sidebarActiveText = "#ffffff";

  @property({ type: String, attribute: "accent-color" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Accent Color (badges, avatar bg, drop-zone ring)",
    fieldMappings: "accentColor",
    categoryLabel: "Appearance"
  })
  accentColor = "#6366f1";

  @property({ type: String, attribute: "header-bg" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
  headerBg = "#ffffff";

  @property({ type: String, attribute: "header-text" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Header Text Color",
    fieldMappings: "headerText",
    categoryLabel: "Appearance"
  })
  headerText = "#1e293b";

  @property({ type: String, attribute: "header-border" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Header Border Color",
    fieldMappings: "headerBorder",
    categoryLabel: "Appearance"
  })
  headerBorder = "#e2e8f0";

  @property({ type: String, attribute: "main-bg" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Main Area Background",
    fieldMappings: "mainBg",
    categoryLabel: "Appearance"
  })
  mainBg = "#f8fafc";

  @property({ type: String, attribute: "main-padding" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Main Area Padding (e.g. 24px)",
    fieldMappings: "mainPadding",
    categoryLabel: "Appearance"
  })
  mainPadding = "24px";

  @property({ type: String, attribute: "footer-action-type" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Footer Action Type",
    fieldMappings: "footerActionType",
    categoryLabel: "Appearance",
    optionItems: [
      { label: "Settings/Logout Buttons", value: "buttons" },
      { label: "Chevron Dropdown",         value: "dropdown" },
      { label: "None",                      value: "none" }
    ]
  })
  footerActionType: "buttons" | "dropdown" | "none" = "buttons";

  // ─── Events ────────────────────────────────────────────────────────────────

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Opened Change", eventTrigger: "openedchange", categoryLabel: "Triggers" })
  get onOpenedChange() { return "openedchange"; }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Nav Item Click", eventTrigger: "navchange", categoryLabel: "Triggers" })
  get onNavChange() { return "navchange"; }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Sidebar Toggle", eventTrigger: "sidebarToggle", categoryLabel: "Triggers" })
  get onSidebarToggle() { return "sidebarToggle"; }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Logout Click", eventTrigger: "logout", categoryLabel: "Triggers" })
  get onLogout() { return "logout"; }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Profile Click", eventTrigger: "profileClick", categoryLabel: "Triggers" })
  get onProfileClick() { return "profileClick"; }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Settings Click", eventTrigger: "settingsClick", categoryLabel: "Triggers" })
  get onSettingsClick() { return "settingsClick"; }

  // ─── Actions ───────────────────────────────────────────────────────────────

  @RendererAttribute({ attributeType: AttributeType.ACTION, displayLabel: "Open Sidenav", categoryLabel: "Actions" })
  public open() {
    this.opened = true;
    this.dispatchEvent(new CustomEvent("openedchange", { detail: { opened: true }, bubbles: true, composed: true }));
  }

  @RendererAttribute({ attributeType: AttributeType.ACTION, displayLabel: "Close Sidenav", categoryLabel: "Actions" })
  public close() {
    this.opened = false;
    this.dispatchEvent(new CustomEvent("openedchange", { detail: { opened: false }, bubbles: true, composed: true }));
  }

  @RendererAttribute({ attributeType: AttributeType.ACTION, displayLabel: "Toggle Sidenav Opened", categoryLabel: "Actions" })
  public toggle() {
    this.opened = !this.opened;
    this.dispatchEvent(new CustomEvent("openedchange", { detail: { opened: this.opened }, bubbles: true, composed: true }));
  }

  @RendererAttribute({ attributeType: AttributeType.ACTION, displayLabel: "Toggle Sidebar Collapse", categoryLabel: "Actions" })
  public toggleSidebar() {
    this.collapsed = !this.collapsed;
    this.dispatchEvent(new CustomEvent("sidebarToggle", { detail: { collapsed: this.collapsed }, bubbles: true, composed: true }));
  }

  @RendererAttribute({ attributeType: AttributeType.ACTION, displayLabel: "Expand Sidebar", categoryLabel: "Actions" })
  public expandSidebar() { this.collapsed = false; }

  @RendererAttribute({ attributeType: AttributeType.ACTION, displayLabel: "Collapse Sidebar", categoryLabel: "Actions" })
  public collapseSidebar() { this.collapsed = true; }

  @RendererAttribute({ attributeType: AttributeType.ACTION, displayLabel: "Navigate To Item (by index)", categoryLabel: "Actions" })
  public navigateTo(index: number) {
    const item = parseNavItems(this.navItems)[index];
    this.activeItem = index;
    this.dispatchEvent(new CustomEvent("navchange", { detail: { activeItem: index, item }, bubbles: true, composed: true }));
  }

  // ─── Internal handlers ──────────────────────────────────────────────────────

  private handleNavClick(index: number, item: NavItem) {
    if (item.disabled || item.separator || item.section) return;
    this.navigateTo(index);
    if (item.href) window.open(item.href, item.target ?? "_self");
  }

  private _expandedItems = new Set<number>();

  private handleChildToggle(index: number) {
    if (this._expandedItems.has(index)) {
      this._expandedItems.delete(index);
    } else {
      this._expandedItems.add(index);
    }
    this.requestUpdate();
  }

  // ─── Toggle Button Helper ──────────────────────────────────────────────────

  private renderToggleButton(location: string) {
    const isFloating = location === "floating";
    const isHeader = location === "header-left" || location === "header-right";
    
    let iconTemplate = html`☰`;
    
    const isIconChevron = this.collapseBtnIcon === "chevron";
    const isIconArrow = this.collapseBtnIcon === "arrow";
    const isIconHamburger = this.collapseBtnIcon === "hamburger";
    const isIconDots = this.collapseBtnIcon === "dots";

    if (isIconHamburger) {
      iconTemplate = html`
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      `;
    } else if (isIconDots) {
      iconTemplate = html`
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="2"/>
          <circle cx="12" cy="12" r="2"/>
          <circle cx="12" cy="19" r="2"/>
        </svg>
      `;
    } else if (isIconChevron) {
      const isCurrentlyCollapsed = this.sidenavType === "over" ? !this.opened : this.collapsed;
      if (isCurrentlyCollapsed) {
        iconTemplate = html`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `;
      } else {
        iconTemplate = html`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        `;
      }
    } else if (isIconArrow) {
      const isCurrentlyCollapsed = this.sidenavType === "over" ? !this.opened : this.collapsed;
      if (isCurrentlyCollapsed) {
        iconTemplate = html`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        `;
      } else {
        iconTemplate = html`
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        `;
      }
    }

    const clickHandler = (e: Event) => {
      e.stopPropagation();
      if (this.sidenavType === "over") {
        this.toggle();
      } else {
        this.toggleSidebar();
      }
    };

    if (isFloating) {
      return html`
        <button class="snl-floating-toggle" @click=${clickHandler} title="Toggle sidebar">
          ${iconTemplate}
        </button>
      `;
    }

    if (isHeader) {
      return html`
        <button class="snl-header-btn" style="color: ${this.headerText};" @click=${clickHandler} title="Toggle sidebar">
          ${iconTemplate}
        </button>
      `;
    }

    return html`
      <button class="snl-collapse-btn" style="color: ${this.sidebarText};" @click=${clickHandler} title="Toggle sidebar">
        ${iconTemplate}
      </button>
    `;
  }

  // ─── getStudioTemplate ─────────────────────────────────────────────────────

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {

    // ── Read all props ──
    const headerMode  = (config?.props?.headerMode  || "config") as RegionMode;
    const sidenavMode = (config?.props?.sidenavMode || "config") as RegionMode;
    const footerMode  = (config?.props?.footerMode  || "config") as RegionMode;

    const navItemsRaw     = config?.props?.navItems           || DEFAULT_NAV_ITEMS_JSON;
    const headerConfigRaw = config?.props?.headerConfig        || DEFAULT_HEADER_CONFIG_JSON;
    const footerConfigRaw = config?.props?.sidebarFooterConfig || DEFAULT_SIDEBAR_FOOTER_CONFIG_JSON;

    const appName     = config?.props?.appName     || "My App";
    const appSubtitle = config?.props?.appSubtitle || "";
    const appLogo     = config?.props?.appLogo     || "🚀";
    const headerTitle = config?.props?.headerTitle || "";
    const activeItem  = Number(config?.props?.activeItem ?? 0);
    const collapsed   = !!config?.props?.collapsed;

    const sidebarWidth      = config?.props?.sidebarWidth      || "260px";
    const sidebarBg         = config?.props?.sidebarBg         || "#1e293b";
    const sidebarText       = config?.props?.sidebarText       || "#94a3b8";
    const sidebarActiveBg   = config?.props?.sidebarActiveBg   || "#334155";
    const sidebarActiveText = config?.props?.sidebarActiveText || "#ffffff";
    const accentColor       = config?.props?.accentColor       || "#6366f1";
    const headerBg          = config?.props?.headerBg          || "#ffffff";
    const headerText        = config?.props?.headerText        || "#1e293b";
    const headerBorder      = config?.props?.headerBorder      || "#e2e8f0";
    const mainBg            = config?.props?.mainBg            || "#f8fafc";
    const mainPadding       = config?.props?.mainPadding       || "24px";
    const headerHeight      = config?.props?.headerHeight      || "60px";
    const collapsedWidth    = config?.props?.collapsedWidth    || "64px";
    const showCollapseBtn   = config?.props?.showCollapseBtn   !== false;

    const sidenavType = (config?.props?.sidenavType || "side") as "side" | "over";
    const opened = config?.props?.opened !== false;
    const hasBackdrop = config?.props?.hasBackdrop !== false;
    const collapseBtnPosition = (config?.props?.collapseBtnPosition || "sidebar-bottom") as string;
    const collapseBtnIcon = (config?.props?.collapseBtnIcon || "chevron") as string;
    const footerActionType = (config?.props?.footerActionType || "buttons") as string;
    const fixedHeader = config?.props?.fixedHeader !== false;
    const fixedFooter = config?.props?.fixedFooter !== false;

    // ── Parse structured configs ──
    const navList   = parseNavItems(navItemsRaw);
    const headerCfg = parseHeaderConfig(headerConfigRaw);
    const footerCfg = parseSidebarFooterConfig(footerConfigRaw);

    const isCurrentlyCollapsed = sidenavType === "over" ? !opened : collapsed;
    const effectiveSidebarWidth = isCurrentlyCollapsed ? (sidenavType === "over" ? "0px" : collapsedWidth) : sidebarWidth;
    const brandLabel = headerTitle || appName;
    const sidebarVisible = sidenavMode !== "hidden";

    // ── Build slot list dynamically based on modes ──
    const slots: ZeroSlotDefinition[] = [
      { id: "main", label: "Main Content", dropzone: true, accepts: ["zero-section"] },
    ];
    if (headerMode === "slot") {
      slots.push({ id: "header", label: "Header Drop Zone", dropzone: true, accepts: ["zero-section"] });
    }
    if (sidenavMode === "slot") {
      slots.push({ id: "sidebar", label: "Sidebar Nav Drop Zone", dropzone: true, accepts: ["zero-section"] });
    } else if (sidenavMode === "config") {
      slots.push({ id: "sidebar-extra", label: "Sidebar Extra", dropzone: true, accepts: ["zero-section"] });
    }
    if (footerMode === "slot") {
      slots.push({ id: "footer", label: "Sidebar Footer Drop Zone", dropzone: true, accepts: ["zero-section"] });
    }

    // ── Build nav HTML ──
    let hasAddedBottomSpacer = false;
    const navItemsHtml = navList.map((item, i) => {
      const isBottomItem = item.bottom === true;
      const showSpacer = isBottomItem && !hasAddedBottomSpacer;
      if (showSpacer) {
        hasAddedBottomSpacer = true;
      }
      const rowHtml = studioNavRow(item, i, activeItem, sidebarText, sidebarActiveBg, sidebarActiveText, accentColor, isCurrentlyCollapsed);
      return showSpacer ? `<div style="flex: 1; min-height: 20px;"></div>${rowHtml}` : rowHtml;
    }).join("");

    // ── Header Left/Right Toggle Trigger buttons ──
    const headerLeftBtn = (collapseBtnPosition === "header-left" && showCollapseBtn)
      ? studioToggleButtonHtml("header-left", collapseBtnIcon, collapsed, sidenavType, opened, headerText)
      : "";
    const headerRightBtn = (collapseBtnPosition === "header-right" && showCollapseBtn)
      ? studioToggleButtonHtml("header-right", collapseBtnIcon, collapsed, sidenavType, opened, headerText)
      : "";

    // ── Header region HTML ──
    const headerHtml = headerMode === "hidden" ? "" : `
      <div style="
        display:flex; align-items:center; gap:12px;
        height:${headerHeight}; padding:0 20px;
        background:${headerBg}; border-bottom:1px solid ${headerBorder};
        flex-shrink:0; box-sizing:border-box; z-index:10;
        width:100%;
      ">
        ${headerLeftBtn}
        <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:0.95rem; color:${headerText}; white-space:nowrap; flex-shrink:0;">
          <span style="font-size:1.3rem;">${appLogo}</span>${brandLabel}
        </div>
        ${headerMode === "config"
          ? studioHeaderExtras(headerCfg, accentColor, headerText)
          : `<div style="flex:1; min-width:0;">${studioDropZone("header", "Drop Header Sections", "40px", accentColor)}</div>`
        }
        ${headerRightBtn}
      </div>
    `;

    // ── Sidebar nav area HTML ──
    const sidebarNavAreaHtml = sidenavMode === "slot"
      ? studioDropZone("sidebar", "Drop Sidebar Sections", "200px", accentColor)
      : `
        <nav style="display:flex; flex-direction:column; flex:1; padding:10px 8px; overflow-y:auto;">
          ${navItemsHtml}
        </nav>
        <div style="padding:8px; border-top:1px solid rgba(255,255,255,0.07); flex-shrink:0;">
          ${studioDropZone("sidebar-extra", "Sidebar Extra", "40px", accentColor)}
        </div>
      `;

    // ── Sidebar footer HTML ──
    const sidebarFooterHtml = footerMode === "hidden" ? "" :
      footerMode === "slot"
        ? `<div style="padding:8px; border-top:1px solid rgba(255,255,255,0.07); flex-shrink:0;">
             ${studioDropZone("footer", "Drop Footer Sections", "50px", accentColor)}
           </div>`
        : studioSidebarFooter(footerCfg, isCurrentlyCollapsed, accentColor, footerActionType, sidebarText);

    // ── Sidebar Top/Bottom Toggle triggers ──
    const sidebarTopBtn = (collapseBtnPosition === "sidebar-top" && showCollapseBtn)
      ? studioToggleButtonHtml("sidebar-top", collapseBtnIcon, collapsed, sidenavType, opened, "#fff")
      : "";
    const sidebarBottomBtn = (collapseBtnPosition === "sidebar-bottom" && showCollapseBtn)
      ? studioToggleButtonHtml("sidebar-bottom", collapseBtnIcon, collapsed, sidenavType, opened, sidebarText)
      : "";

    const sidebarStyles = fixedFooter
      ? ""
      : "overflow-y: auto; scrollbar-width: thin;";

    const navStyles = fixedFooter
      ? ""
      : "flex: none; overflow-y: visible;";

    // ── Sidebar panel HTML ──
    const sidebarHtml = !sidebarVisible ? "" : `
      <div style="
        width:${effectiveSidebarWidth}; background:${sidebarBg};
        display:flex; flex-direction:column; flex-shrink:0;
        overflow:hidden; transition:width 0.25s, transform 0.25s;
        border-right:${effectiveSidebarWidth === "0px" ? "none" : `1px solid rgba(0,0,0,0.08)`};
        ${sidenavType === "over" ? `position:absolute; left:0; top:0; bottom:0; z-index:30; height:100%; box-shadow:4px 0 12px rgba(0,0,0,0.15); transform:${opened ? "none" : "translateX(-100%)"};` : ""}
        ${sidebarStyles}
      ">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 18px 16px; border-bottom: 1px solid rgba(255,255,255,0.07); flex-shrink: 0;">
          <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
            ${appLogo.startsWith('<') ? appLogo : 
              (appLogo.startsWith('http') || appLogo.startsWith('/') || appLogo.includes('.')) ? `<img src="${appLogo}" style="width: 24px; height: 24px; object-fit: contain;" />` :
              `<span style="font-size:1.4rem; flex-shrink:0; color:var(--snl-brand-text-color, #fff);">${appLogo}</span>`
            }
            ${isCurrentlyCollapsed ? "" : `
              <div style="display: flex; flex-direction: column; min-width: 0;">
                <span style="font-weight:700; font-size:0.9rem; color:var(--snl-brand-text-color, #fff); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${appName}</span>
                ${appSubtitle ? `<span style="font-size: 0.7rem; color:var(--snl-footer-role-color, #94a3b8); opacity: 0.8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${appSubtitle}</span>` : ""}
              </div>
            `}
          </div>
          ${sidebarTopBtn}
        </div>
        <div style="display:flex; flex-direction:column; flex:1; overflow:hidden; ${navStyles}">
          ${sidebarNavAreaHtml}
        </div>
        ${sidebarFooterHtml}
        ${sidebarBottomBtn}
      </div>
    `;

    // ── Backdrop HTML for overlay mode ──
    const backdropHtml = (sidenavType === "over" && opened && hasBackdrop) ? `
      <div style="position:absolute; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.4); backdrop-filter:blur(2px); z-index:25; pointer-events:none;"></div>
    ` : "";

    // ── Floating Button HTML ──
    const floatingBtnHtml = (collapseBtnPosition === "floating" && showCollapseBtn)
      ? studioToggleButtonHtml("floating", collapseBtnIcon, collapsed, sidenavType, opened, sidebarText)
      : "";

    const headerElAtShell = fixedHeader ? headerHtml : "";
    const headerElInMain = !fixedHeader ? headerHtml : "";
    const mainPaddingStyle = fixedHeader ? `padding: ${mainPadding};` : "";
    const mainOverflowStyle = "overflow-y: auto;";

    const templateHtml = `
      <div style="
        display:flex; flex-direction:column; width:100%; height:600px;
        overflow:hidden; border:1px solid ${headerBorder}; border-radius:12px;
        font-family:system-ui,sans-serif;
        --snl-accent: ${accentColor};
        --snl-sidebar-width: ${sidebarWidth};
        --snl-collapsed-w: ${collapsedWidth};
        --snl-brand-text-color: ${sidebarActiveText || 'currentColor'};
        --snl-separator-color: ${sidebarText ? `${sidebarText}15` : 'rgba(255,255,255,0.08)'};
        --snl-footer-name-color: ${sidebarActiveText || 'currentColor'};
        --snl-footer-role-color: ${sidebarText || '#94a3b8'};
        --snl-footer-btn-color: ${sidebarText || '#94a3b8'};
        --snl-hover-bg: ${sidebarText === '#94a3b8' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.04)'};
      ">
        ${headerElAtShell}
        <div style="display:flex; flex:1; overflow:hidden; position:relative;">
          ${backdropHtml}
          ${sidebarHtml}
          ${floatingBtnHtml}
          <div style="flex:1; ${mainOverflowStyle} background:${mainBg}; display:flex; flex-direction:column; min-width:0;">
            ${headerElInMain}
            ${!fixedHeader ? `
              <div style="flex:1; padding:${mainPadding}; box-sizing:border-box;">
                <zero-studio-slot name="main"></zero-studio-slot>
              </div>
            ` : `
              <div style="flex:1; ${mainPaddingStyle} box-sizing:border-box;">
                <zero-studio-slot name="main"></zero-studio-slot>
              </div>
            `}
          </div>
        </div>
      </div>
    `;

    return {
      kind: "panel",
      slots,
      templateHtml,
      badges: ["Sidebar Layout"],
      emptyText: "Drop sections into main, or switch a region to 'slot' mode",
    };
  }

  // ─── Runtime Render ────────────────────────────────────────────────────────

  render() {
    const navList   = parseNavItems(this.navItems);
    const headerCfg = parseHeaderConfig(this.headerConfig);
    const footerCfg = parseSidebarFooterConfig(this.sidebarFooterConfig);

    const sidebarVisible = this.sidenavMode !== "hidden";

    // ─ Header bar ─
    const headerEl = this.headerMode === "hidden" ? nothing : html`
      <header class="snl-header"
        style="
          height:${this.headerHeight}; background:${this.headerBg};
          color:${this.headerText};
          border-bottom:1px solid ${this.headerBorder};
        ">

        ${this.collapseBtnPosition === "header-left" && this.showCollapseBtn ? this.renderToggleButton("header-left") : nothing}

        <div class="snl-header-brand" style="color:${this.headerText};">
          <span>${this.appLogo}</span>
          <span>${this.headerTitle || this.appName}</span>
        </div>

        ${this.headerMode === "config" ? html`

          ${headerCfg.showBreadcrumb && headerCfg.breadcrumbs?.length ? html`
            <nav class="snl-header-breadcrumb">
              ${headerCfg.breadcrumbs.map((b, i) => html`
                ${i > 0 ? html`<span style="opacity:0.3; margin:0 4px;">›</span>` : nothing}
                <span style="${i === headerCfg.breadcrumbs!.length - 1 ? "font-weight:600;" : "opacity:0.6;"}">${b}</span>
              `)}
            </nav>
          ` : nothing}

          ${headerCfg.showSearch ? html`
            <div class="snl-header-search" style="background:rgba(0,0,0,0.04);">
              <span style="opacity:0.4; font-size:0.85rem;">🔍</span>
              <span style="opacity:0.4; font-size:0.83rem;">${headerCfg.searchPlaceholder ?? "Search…"}</span>
            </div>
          ` : nothing}

          <div class="snl-header-spacer"></div>

          ${headerCfg.showNotificationBell ? html`
            <div class="snl-header-bell">
              <span>🔔</span>
              ${(headerCfg.notificationCount ?? 0) > 0 ? html`
                <span class="snl-bell-count" style="background:${this.accentColor};">
                  ${headerCfg.notificationCount}
                </span>
              ` : nothing}
            </div>
          ` : nothing}

          ${headerCfg.showUserAvatar ? html`
            <div class="snl-header-user">
              ${headerCfg.userAvatarUrl ? html`
                <img class="snl-avatar snl-avatar-img" src=${headerCfg.userAvatarUrl} />
              ` : html`
                <div class="snl-avatar snl-avatar-init" style="background:${this.accentColor};">
                  ${initials(headerCfg.userName)}
                </div>
              `}
              <div class="snl-user-info" style="display:flex; flex-direction:column; line-height:1.25;">
                <span style="font-size:0.8rem; font-weight:600; color:${this.headerText};">${headerCfg.userName ?? ""}</span>
                ${headerCfg.userRole ? html`<span style="font-size:0.7rem; opacity:0.5;">${headerCfg.userRole}</span>` : nothing}
              </div>
              <span style="opacity:0.3; font-size:0.75rem;">▾</span>
            </div>
          ` : nothing}

        ` : html`
          <div class="snl-header-slot-zone">
            <slot name="header"></slot>
          </div>
        `}

        ${this.collapseBtnPosition === "header-right" && this.showCollapseBtn ? this.renderToggleButton("header-right") : nothing}
      </header>
    `;

    const sidebarStyles = this.fixedFooter
      ? ""
      : "overflow-y: auto; scrollbar-width: thin;";

    const navStyles = this.fixedFooter
      ? ""
      : "flex: none; overflow-y: visible;";

    // ─ Sidebar ─
    const sidebarEl = !sidebarVisible ? nothing : html`
      <aside class="snl-sidebar"
        style="width:${this.sidebarWidth}; background:${this.sidebarBg};
          --snl-collapsed-w:${this.collapsedWidth};
          ${sidebarStyles}">

        <div class="snl-sidebar-brand" style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
          <slot name="brand">
            <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
              ${this.appLogo && this.appLogo.startsWith('<') ? html`${unsafeHTML(this.appLogo)}` : 
                this.appLogo && (this.appLogo.startsWith('http') || this.appLogo.startsWith('/') || this.appLogo.includes('.')) ? html`<img src="${this.appLogo}" style="width: 24px; height: 24px; object-fit: contain;" />` :
                html`<span class="snl-brand-logo">${this.appLogo}</span>`
              }
              <div style="display: flex; flex-direction: column; min-width: 0;">
                <span class="snl-brand-text">${this.appName}</span>
                ${this.appSubtitle ? html`
                  <span class="snl-brand-subtitle" style="font-size: 0.7rem; color: var(--snl-footer-role-color, #94a3b8); opacity: 0.8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    ${this.appSubtitle}
                  </span>
                ` : nothing}
              </div>
            </div>
          </slot>
          ${this.collapseBtnPosition === "sidebar-top" && this.showCollapseBtn ? this.renderToggleButton("sidebar-top") : nothing}
        </div>

        <!-- Nav area: config mode or slot mode -->
        ${this.sidenavMode === "slot" ? html`
          <div class="snl-sidebar-slot" style="${navStyles}">
            <slot name="sidebar"></slot>
          </div>
        ` : html`
          <nav class="snl-nav" style="${navStyles}">
            ${(() => {
              let hasAddedBottomSpacer = false;
              return navList.map((item, index) => {
                if (item.separator) return html`<div class="nav-separator"></div>`;
                if (item.section) return html`
                  <div class="snl-nav-section" style="color:${this.sidebarText};">${item.section}</div>
                `;
                const isActive = this.activeItem === index;
                const hasChildren = !!item.children?.length;
                const isExpanded = this._expandedItems.has(index);
                
                const isBottomItem = item.bottom === true;
                const showSpacer = isBottomItem && !hasAddedBottomSpacer;
                if (showSpacer) {
                  hasAddedBottomSpacer = true;
                }

                return html`
                  ${showSpacer ? html`<div style="flex: 1; min-height: 20px;"></div>` : nothing}
                  <button
                    class="nav-item ${isActive ? "is-active" : ""} ${item.disabled ? "is-disabled" : ""}"
                    style="
                      color:${isActive ? this.sidebarActiveText : this.sidebarText};
                      background:${isActive ? this.sidebarActiveBg : "transparent"};
                    "
                    @click=${() => hasChildren ? this.handleChildToggle(index) : this.handleNavClick(index, item)}
                  >
                    <span class="nav-icon">${item.icon ?? "•"}</span>
                    <span class="nav-label">${item.label ?? ""}</span>
                    ${item.badge ? html`
                      <span class="snl-nav-badge" style="background:${item.badgeColor || this.accentColor};">
                        ${item.badge}
                      </span>` : nothing}
                    ${hasChildren ? html`
                      <span class="nav-child-indicator">${isExpanded ? "∨" : "›"}</span>` : nothing}
                  </button>
                  ${hasChildren && isExpanded ? html`
                    <div class="snl-sub-menu open">
                      ${item.children!.map((child, ci) => html`
                        <button
                          class="nav-item ${item.disabled ? "is-disabled" : ""}"
                          style="color:${this.sidebarText}; background:transparent;"
                          @click=${() => this.handleNavClick(ci, child)}
                        >
                          <span class="nav-icon">${child.icon ?? "•"}</span>
                          <span class="nav-label">${child.label ?? ""}</span>
                        </button>
                      `)}
                    </div>
                  ` : nothing}
                `;
              });
            })()}
          </nav>

          <div class="snl-sidebar-extra">
            <slot name="sidebar-extra"></slot>
          </div>
        `}

        <!-- Footer area: config / slot / hidden -->
        ${this.footerMode === "hidden" ? nothing :
          this.footerMode === "slot" ? html`
            <div class="snl-footer-slot">
              <slot name="footer"></slot>
            </div>
          ` : footerCfg.show ? html`
            <div class="snl-sidebar-footer">
              ${footerCfg.avatarUrl ? html`
                <img class="snl-footer-avatar" src=${footerCfg.avatarUrl} />
              ` : html`
                <div class="snl-footer-initials">${initials(footerCfg.userName)}</div>
              `}
              <div class="snl-footer-info">
                <div class="snl-footer-name">${footerCfg.userName ?? ""}</div>
                ${footerCfg.userRole ? html`<div class="snl-footer-role">${footerCfg.userRole}</div>` : nothing}
              </div>
              <div class="snl-footer-actions">
                ${this.footerActionType === "buttons" && footerCfg.showSettings ? html`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("settingsClick", { bubbles: true, composed: true }))}
                    title="Settings">⚙️</button>
                ` : nothing}
                ${this.footerActionType === "buttons" && footerCfg.showLogout ? html`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("logout", { bubbles: true, composed: true }))}
                    title="Logout">↪</button>
                ` : nothing}
                ${this.footerActionType === "dropdown" ? html`
                  <button class="snl-footer-btn"
                    @click=${() => this.dispatchEvent(new CustomEvent("profileClick", { bubbles: true, composed: true }))}
                    title="Profile Actions">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                ` : nothing}
              </div>
            </div>
          ` : nothing
        }

        ${this.collapseBtnPosition === "sidebar-bottom" && this.showCollapseBtn ? this.renderToggleButton("sidebar-bottom") : nothing}
      </aside>
    `;

    const headerElAtShell = this.fixedHeader ? headerEl : nothing;
    const headerElInMain = !this.fixedHeader ? headerEl : nothing;
    const mainPaddingStyle = this.fixedHeader ? `padding: ${this.mainPadding};` : "";
    const mainOverflowStyle = "overflow-y: auto;";

    return html`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="snl-shell" style="
          --snl-accent: ${this.accentColor};
          --snl-sidebar-width: ${this.sidebarWidth};
          --snl-collapsed-w: ${this.collapsedWidth};
          --snl-brand-text-color: ${this.sidebarActiveText || 'currentColor'};
          --snl-separator-color: ${this.sidebarText ? `${this.sidebarText}15` : 'rgba(255,255,255,0.08)'};
          --snl-footer-name-color: ${this.sidebarActiveText || 'currentColor'};
          --snl-footer-role-color: ${this.sidebarText || '#94a3b8'};
          --snl-footer-btn-color: ${this.sidebarText || '#94a3b8'};
          --snl-hover-bg: ${this.sidebarText === '#94a3b8' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.04)'};
          ${this.computeInternalStyles()}
        ">
          ${headerElAtShell}
          <div class="snl-body">
            ${this.sidenavType === "over" && this.opened && this.hasBackdrop ? html`
              <div class="snl-backdrop" @click=${this.close}></div>
            ` : nothing}
            ${sidebarEl}
            ${this.collapseBtnPosition === "floating" && this.showCollapseBtn ? this.renderToggleButton("floating") : nothing}
            <main class="snl-main" style="background:${this.mainBg}; ${mainOverflowStyle} ${mainPaddingStyle} display: flex; flex-direction: column;">
              ${headerElInMain}
              ${!this.fixedHeader ? html`
                <div style="flex: 1; padding:${this.mainPadding}; box-sizing: border-box;">
                  <slot name="main"></slot>
                  <slot></slot>
                </div>
              ` : html`
                <slot name="main"></slot>
                <slot></slot>
              `}
              ${this.renderDropIndicators()}
            </main>
          </div>
        </div>
      </div>
    `;
  }
}
