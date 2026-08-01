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
import { customElement, property, state } from "lit/decorators.js";

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
  /** If set, SPA routes to this path. */
  path?: string;
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
  searchPlaceholder: "Search (Ctrl + K)",
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

/**
 * Flat row-list default for the studio `list` control (label/href/icon rows).
 * Derived from DEFAULT_NAV_ITEMS by dropping section/separator rows and
 * projecting only the fields the list editor exposes, so the structured form
 * ships with sensible starter items instead of an empty list.
 */
export const DEFAULT_NAV_ITEMS_LIST: Array<{ label: string; href: string; icon: string }> =
  DEFAULT_NAV_ITEMS
    .filter((item) => !!item.label && !item.separator && !item.section)
    .map((item) => ({ label: item.label ?? "", href: item.href ?? "", icon: item.icon ?? "" }));

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
    return `<div style="height:1px; background:var(--snl-separator-color, #e5e9ef); margin:8px 12px;"></div>`;
  }
  if (item.section) {
    return collapsed ? "" : `
      <div style="padding:14px 12px 6px; font-size:0.68rem; font-weight:700;
        letter-spacing:0.06em; text-transform:uppercase;
        color:#8996a4; white-space:nowrap;">
        ${item.section}
      </div>
    `;
  }

  const isActive = activeItem === index;
  const hasChildren = !!item.children?.length;

  const badge = (!collapsed && item.badge) ? `
    <span style="margin-left:auto; background:${item.badgeColor || accentColor};
      color:#fff; font-size:0.65rem; font-weight:700; padding:1px 7px;
      border-radius:999px; flex-shrink:0;">
      ${item.badge}
    </span>
  ` : "";

  const chevron = (!collapsed && hasChildren) ? `
    <span style="margin-left:${item.badge ? "8px" : "auto"}; color:${isActive ? sidebarActiveText : "#8996a4"}; display:flex; flex-shrink:0;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="${isActive ? "6 9 12 15 18 9" : "9 18 15 12 9 6"}"></polyline>
      </svg>
    </span>
  ` : "";

  const row = `
    <div data-tab-index="${index}" style="
      display:flex; align-items:center; gap:10px;
      padding:9px 12px; border-radius:8px; margin-bottom:2px;
      border-left:3px solid ${isActive ? accentColor : "transparent"};
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
        ${badge}${chevron}
      `}
    </div>
  `;

  // Expanded children — dotted sub-items shown under the active parent.
  let childrenHtml = "";
  if (hasChildren && isActive && !collapsed) {
    childrenHtml =
      `<div style="display:flex; flex-direction:column; margin:2px 0 6px;">` +
      item.children!.map((child, ci) => {
        const childActive = ci === 0; // first child shown active in preview
        const color = childActive ? accentColor : sidebarText;
        return `
          <div style="display:flex; align-items:center; gap:12px; padding:6px 12px 6px 30px;
            border-radius:8px; font-size:0.83rem; font-weight:${childActive ? "600" : "500"};
            color:${color}; cursor:pointer;">
            <span style="width:6px; height:6px; border-radius:50%; background:${color};
              opacity:${childActive ? "1" : "0.45"}; flex-shrink:0;"></span>
            <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${child.label ?? ""}</span>
          </div>
        `;
      }).join("") +
      `</div>`;
  }

  return row + childrenHtml;
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
        background:#f0f2f5; border-radius:10px; padding:8px 14px;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8996a4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
          <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span style="color:#8996a4; font-size:0.83rem;">${cfg.searchPlaceholder ?? "Search (Ctrl + K)"}</span>
      </div>
    `);
  }

  parts.push(`<div style="flex:1;"></div>`);

  // Theme toggle (moon) — part of the default header cluster.
  parts.push(`
    <div style="cursor:pointer; padding:8px; border-radius:8px; color:${headerText}; display:flex; align-items:center;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </div>
  `);

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

/**
 * Studio-time top profile card (bordered, sits under the brand / above the nav).
 * Mirrors the runtime `.snl-profile-card`.
 */
function studioProfileCard(
  cfg: SidebarFooterConfig, collapsed: boolean, accentColor: string,
  nameColor = "#1d2630", roleColor = "#8996a4", borderColor = "#e5e9ef"
) {
  if (!cfg.show) return "";
  const ini = initials(cfg.userName);
  const avatar = cfg.avatarUrl
    ? `<img src="${cfg.avatarUrl}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; flex-shrink:0;" />`
    : `<div style="width:40px; height:40px; border-radius:50%; background:${accentColor};
         color:#fff; display:flex; align-items:center; justify-content:center;
         font-size:0.85rem; font-weight:700; flex-shrink:0;">${ini}</div>`;
  return `
    <div style="margin:14px 12px 6px; padding:${collapsed ? "8px" : "10px 12px"};
      background:#ffffff; border:1px solid ${borderColor}; border-radius:10px;
      display:flex; align-items:center; gap:12px; flex-shrink:0; cursor:pointer;
      ${collapsed ? "justify-content:center;" : ""}">
      ${avatar}
      ${collapsed ? "" : `
        <div style="flex:1; min-width:0;">
          <div style="font-size:0.85rem; font-weight:700; color:${nameColor};
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${cfg.userName ?? ""}</div>
          ${cfg.userRole ? `<div style="font-size:0.72rem; color:${roleColor};
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${cfg.userRole}</div>` : ""}
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${roleColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
          <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
      `}
    </div>
  `;
}

function studioSidebarFooter(
  cfg: SidebarFooterConfig, collapsed: boolean, accentColor: string,
  footerActionType = "buttons", sidebarText = "#94a3b8"
) {
  if (!cfg.show) return "";
  const ini = initials(cfg.userName);
  const avatar = cfg.avatarUrl
    ? `<img src="${cfg.avatarUrl}" style="width:34px; height:34px; border-radius:50%; object-fit:cover; flex-shrink:0;" />`
    : `<div style="width:34px; height:34px; border-radius:50%; background:${accentColor};
         color:#fff; display:flex; align-items:center; justify-content:center;
         font-size:0.75rem; font-weight:700; flex-shrink:0;">${ini}</div>`;
  return `
    <div style="padding:12px 14px; border-top:1px solid var(--snl-separator-color, #e5e9ef);
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
  version: "1.2.0",
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

  /**
   * Neutral, studio-ready default applied when the shell is first dropped onto a
   * page. Produces a professional, brand-agnostic app-shell (generic dashboard
   * chrome) with an EMPTY content area so studio pages can be nested inside the
   * `outlet` / `main` region. No domain-specific demo content is injected.
   */
  static getTransformOnDrop() {
    return {
      componentName: "zero-sidenav-layout",
      props: {
        appName: "Able Pro",
        appSubtitle: "v9.6.1",
        appLogo: "",
        accentColor: "#4680ff",
        sidebarBg: "#ffffff",
        sidebarText: "#5b6b79",
        sidebarActiveBg: "#e6f0ff",
        sidebarActiveText: "#4680ff",
        headerBg: "#ffffff",
        headerText: "#1d2630",
        headerBorder: "#e5e9ef",
        mainBg: "#f4f7fa",
        footerActionType: "buttons",
        profilePosition: "top",
        collapseBtnPosition: "header-left",
        collapseBtnIcon: "hamburger",
        showThemeToggle: true,
        navItems: JSON.stringify([
          { section: "Navigation" },
          { icon: "🏠", label: "Dashboard", id: "dashboard", badge: "3", children: [
            { label: "Default",   id: "default",   href: "/dashboard/default" },
            { label: "Analytics", id: "analytics", href: "/dashboard/analytics" },
            { label: "Finance",   id: "finance",   href: "/dashboard/finance" },
          ]},
          { icon: "🧩", label: "Widgets",  id: "widgets" },
          { section: "Widget" },
          { icon: "📈", label: "Statistics", id: "statistics" },
          { icon: "📊", label: "Data",       id: "data" },
          { icon: "📉", label: "Chart",      id: "chart" },
          { section: "Admin Panel" },
          { icon: "👥", label: "Users",    id: "users" },
          { icon: "⚙️", label: "Settings", id: "settings" },
        ], null, 2),
        headerConfig: JSON.stringify({
          showSearch: true,
          searchPlaceholder: "Search (Ctrl + K)",
          showNotificationBell: true,
          notificationCount: 3,
          showUserAvatar: true,
          userName: "Able Pro",
          userRole: "Administrator",
          showBreadcrumb: false
        }),
        sidebarFooterConfig: JSON.stringify({
          show: true,
          userName: "JWT User",
          userRole: "Administrator",
          showSettings: true,
          showLogout: true
        }),
        activeItem: 1,
        fixedHeader: true,
        fixedFooter: true
      },
      // Empty by design — the shell is a container. Studio pages drop into the
      // "outlet" / "main" region rather than a pre-baked domain demo.
      children: []
    };
  }

  /**
   * Plain settings schema the studio can render as a template-config form.
   * Returns only plain objects (no external imports). Each `name` maps to a flat
   * key on the studio-side settings object; `deriveShellProps` (studio) composes
   * these discrete fields back into the navItems / headerConfig / sidebarFooterConfig
   * props this element still consumes at runtime. Every field carries a default.
   *
   * control ∈ "text" | "number" | "boolean" | "select" | "color" | "list"
   * (`list` edits an array of objects via typed `itemShape` sub-fields — no JSON).
   *
   * NOTE: header and footer both expose a user name / role / avatar. Because the
   * settings object is flat, those keys are disambiguated (`headerUserName` vs
   * `profileName`, etc.); the human labels stay "User Name"/"User Role"/"Avatar URL".
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
          { name: "icon", label: "Icon (emoji)", control: "text", defaultValue: "" }
        ]
      },

      // ── Header ──
      { name: "showSearch", label: "Show Search", control: "boolean", group: "Header", defaultValue: DEFAULT_HEADER_CONFIG.showSearch ?? false },
      { name: "showNotifications", label: "Show Notifications", control: "boolean", group: "Header", defaultValue: DEFAULT_HEADER_CONFIG.showNotificationBell ?? false },
      { name: "notificationCount", label: "Notification Count", control: "number", group: "Header", defaultValue: DEFAULT_HEADER_CONFIG.notificationCount ?? 0 },
      { name: "showThemeToggle", label: "Show Theme Toggle", control: "boolean", group: "Header", defaultValue: true },
      { name: "headerUserName", label: "User Name", control: "text", group: "Header", defaultValue: DEFAULT_HEADER_CONFIG.userName ?? "" },
      { name: "headerUserRole", label: "User Role", control: "text", group: "Header", defaultValue: DEFAULT_HEADER_CONFIG.userRole ?? "" },
      { name: "headerAvatarUrl", label: "Avatar URL", control: "text", group: "Header", defaultValue: DEFAULT_HEADER_CONFIG.userAvatarUrl ?? "" },

      // ── Sidebar ──
      { name: "showProfile", label: "Show Profile Footer", control: "boolean", group: "Sidebar", defaultValue: DEFAULT_SIDEBAR_FOOTER_CONFIG.show ?? false },
      { name: "profileName", label: "User Name", control: "text", group: "Sidebar", defaultValue: DEFAULT_SIDEBAR_FOOTER_CONFIG.userName ?? "" },
      { name: "profileRole", label: "User Role", control: "text", group: "Sidebar", defaultValue: DEFAULT_SIDEBAR_FOOTER_CONFIG.userRole ?? "" },
      { name: "profileAvatarUrl", label: "Avatar URL", control: "text", group: "Sidebar", defaultValue: DEFAULT_SIDEBAR_FOOTER_CONFIG.avatarUrl ?? "" },

      // ── Layout ──
      { name: "collapsed", label: "Sidebar Collapsed", control: "boolean", group: "Layout", defaultValue: false },
      { name: "fixedHeader", label: "Fixed Header", control: "boolean", group: "Layout", defaultValue: true },
      {
        name: "sidenavType", label: "Sidenav Layout Mode", control: "select", group: "Layout",
        options: [
          { label: "Side (Standard)", value: "side" },
          { label: "Over (Overlay/Drawer)", value: "over" }
        ],
        defaultValue: "side"
      },
      { name: "sidebarWidth", label: "Sidebar Width (px)", control: "number", group: "Layout", defaultValue: 260 },

      // ── Theme ──
      { name: "accentColor", label: "Accent Color", control: "color", group: "Theme", defaultValue: "#4680ff" }
    ];
  }

  // Always dynamic — getStudioTemplate builds slots from current mode config
  static slots: ZeroSlotDefinition[] = [];

  @property({ type: String, reflect: true })
  override height = "100vh";

  @property({ type: String, attribute: "active-path" })
  activePath = "";

  /** True when the viewport is at/under the mobile breakpoint (max-width:768px).
   *  Driven reactively by a matchMedia listener (see _setupResponsive) so the
   *  drawer/overlay + backdrop switch without a re-render-time innerWidth read. */
  @state()
  private _isMobile = false;

  private _mql: MediaQueryList | null = null;

  override connectedCallback() {
    super.connectedCallback();
    // Route-sync listeners. The runtime navigates by dispatching a window
    // "route-change" event AND by setting location.hash (which fires
    // "hashchange"); classic pushState navigations fire "popstate". We listen to
    // all three so the active highlight follows programmatic/deep-link nav.
    // NOTE: every one of these only SYNCS the highlight — none of them navigate.
    window.addEventListener("popstate", this._handleUrlChange);
    window.addEventListener("hashchange", this._handleUrlChange);
    window.addEventListener("route-change", this._handleUrlChange as EventListener);
    this._setupResponsive();
    this._matchActiveItemWithUrl();
  }

  override disconnectedCallback() {
    window.removeEventListener("popstate", this._handleUrlChange);
    window.removeEventListener("hashchange", this._handleUrlChange);
    window.removeEventListener("route-change", this._handleUrlChange as EventListener);
    this._teardownResponsive();
    super.disconnectedCallback();
  }

  /** Sync-ONLY handler. Re-matches the active highlight to the current route.
   *  It must NEVER dispatch route-change / navchange — otherwise syncing the
   *  highlight after a deep-link would bounce the URL back to the item's path. */
  private _handleUrlChange = () => {
    this._matchActiveItemWithUrl();
  };

  // ─── Responsive (matchMedia) ────────────────────────────────────────────────

  private _handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
    this._isMobile = e.matches;
  };

  private _setupResponsive() {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    this._mql = window.matchMedia("(max-width: 768px)");
    this._isMobile = this._mql.matches;
    if (this._mql.addEventListener) {
      this._mql.addEventListener("change", this._handleMediaChange);
    } else {
      // Safari < 14 fallback
      this._mql.addListener(this._handleMediaChange as (e: MediaQueryListEvent) => void);
    }
  }

  private _teardownResponsive() {
    if (!this._mql) return;
    if (this._mql.removeEventListener) {
      this._mql.removeEventListener("change", this._handleMediaChange);
    } else {
      this._mql.removeListener(this._handleMediaChange as (e: MediaQueryListEvent) => void);
    }
    this._mql = null;
  }

  override willUpdate(changedProperties: PropertyValues) {
    super.willUpdate(changedProperties);
    this._matchActiveItemWithUrl();
  }

  protected override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    this.style.setProperty("--zero-height", this.height);
  }

  /**
   * Resolve the host runtime-app / renderer by walking UP through shadow
   * boundaries. `closest()` cannot cross shadow roots, and the sidenav is
   * rendered inside the runtime app's shadow root, so a plain closest() misses
   * it and we'd fall back to a stale path source.
   */
  private _resolveCurrentPath(): string {
    let node: Node | null = this;
    // Guard against cycles / very deep trees.
    for (let i = 0; node && i < 20; i++) {
      const root = node.getRootNode() as ShadowRoot | Document;
      const host = (root as ShadowRoot).host as any;
      if (!host) break;
      const tag = host.tagName ? host.tagName.toLowerCase() : "";
      if (tag.startsWith("zero-runtime-app")) {
        return host.pathName || host.currentPath || "";
      }
      if (tag.startsWith("zero-renderer")) {
        return host.path || host.pathName || "";
      }
      node = host;
    }
    return "";
  }

  private _matchActiveItemWithUrl() {
    if (typeof window === "undefined") return;

    // 1. Resolve current active path from the parent runtime / renderer (its
    //    reactive path is authoritative). Falls back to the URL — hash FIRST,
    //    because the runtime routes via `location.hash` (so `pathname` is stale
    //    after an in-app navigation), then pathname for a hard deep-link land.
    let activePath = this._resolveCurrentPath();
    if (!activePath) {
      activePath = window.location.hash.replace(/^#/, "") || window.location.pathname || "/";
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

    // 3. Match the active nav item against the current route.
    //    - Keyed on BOTH item.path and item.href (runtime nav uses `path`).
    //    - Runs in every mode (the old `sidenavMode === "config"` gate is
    //      relaxed) so the highlight follows programmatic nav in normal runtime.
    //    - Supports section prefixes: /tokens/:id highlights the /tokens item.
    //    - This is SYNC ONLY — it sets `activeItem` (highlight) and never
    //      dispatches route-change/navchange, so it cannot navigate/bounce.
    if (this.sidenavMode !== "slot") {
      const navList = parseNavItems(this.navItems);

      const normalize = (p: string): string => {
        let out = p;
        try {
          out = new URL(p, window.location.origin).pathname;
        } catch { /* p is already a bare path */ }
        if (out.startsWith("/")) {
          const parts = out.split("/").filter(Boolean);
          if (parts.length > 1 && parts[0].startsWith("project-")) {
            out = "/" + parts.slice(1).join("/");
          }
        }
        out = out.replace(/\/+$/, "");
        return out === "" ? "/" : out;
      };

      const current = normalize(cleanPath);
      let bestIndex = -1;
      let bestLen = -1;

      navList.forEach((item, i) => {
        const raw = item.path ?? item.href;
        if (!raw) return;
        const itemPath = normalize(raw);

        // Exact match always wins; a non-root item also matches when it is a
        // path-segment prefix of the current route (detail routes). Root "/"
        // only matches the exact root so it never swallows other routes.
        const isMatch =
          itemPath === current ||
          (itemPath !== "/" && current.startsWith(itemPath + "/"));

        if (isMatch && itemPath.length > bestLen) {
          bestLen = itemPath.length;
          bestIndex = i;
        }
      });

      if (bestIndex !== -1 && bestIndex !== this.activeItem) {
        this.activeItem = bestIndex; // highlight only — NO navigation
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
        --snl-accent: var(--uiv-primary-color, #4680ff);
        --snl-border: var(--uiv-border-color, #e5e9ef);
        --snl-section-color: var(--uiv-text-muted, #8996a4);
        --snl-ease: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: var(--zero-theme-typography-fontFamily, var(--uiv-font-family, system-ui, -apple-system, sans-serif));
        font-size: var(--zero-theme-typography-bodySize, var(--uiv-font-size-base, 14px));
      }

      :host > div {
        height: var(--zero-height, 100%);
        width: 100%;
        display: block; /* override base class flex — snl-shell handles its own layout */
      }

      /* Dark mode — flips the shared --uiv-* tokens the shell reads from.
         Toggled via the header theme button (see showThemeToggle). */
      :host([data-theme="dark"]) {
        --uiv-surface-color: #1e293b;
        --uiv-bg-color: #0f172a;
        --uiv-text-color: #f1f5f9;
        --uiv-text-muted: #94a3b8;
        --uiv-border-color: #334155;
        --uiv-hover-bg: rgba(255, 255, 255, 0.07);
      }

      .snl-theme-toggle svg { display: block; }

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
        border-radius: 10px; padding: 8px 14px;
        background: var(--snl-search-bg, #f0f2f5);
      }

      .snl-header-search-input {
        flex: 1; min-width: 0;
        border: none; outline: none; background: transparent;
        color: inherit; font: inherit; font-size: 0.83rem;
        padding: 0; margin: 0;
      }
      .snl-header-search-input::placeholder { opacity: 0.5; }
      .snl-header-search-input::-webkit-search-cancel-button { cursor: pointer; }

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
        border-right: 1px solid var(--snl-border, #e5e9ef);
      }

      :host([collapsed]) .snl-sidebar { width: var(--snl-collapsed-w, 64px) !important; }
      :host([collapsed]) .snl-brand-text,
      :host([collapsed]) .snl-brand-name,
      :host([collapsed]) .snl-brand-pill,
      :host([collapsed]) .nav-label,
      :host([collapsed]) .snl-nav-badge,
      :host([collapsed]) .snl-nav-section,
      :host([collapsed]) .snl-profile-info,
      :host([collapsed]) .snl-profile-caret,
      :host([collapsed]) .snl-footer-info,
      :host([collapsed]) .snl-footer-actions,
      :host([collapsed]) .snl-sidebar-extra { display: none; }

      .snl-sidebar-brand {
        display: flex; align-items: center; gap: 10px;
        padding: 18px 16px; flex-shrink: 0;
        border-bottom: 1px solid var(--snl-border, #e5e9ef);
      }

      .snl-brand-logo {
        font-size: 1.1rem; line-height: 1; flex-shrink: 0;
        width: 32px; height: 32px; border-radius: 8px;
        display: inline-flex; align-items: center; justify-content: center;
        background: var(--snl-logo-bg, var(--snl-accent));
      }
      .snl-brand-text {
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--snl-brand-text-color, #1d2630);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Text wordmark brand (e.g. "Able" + superscript + version pill) */
      .snl-brand-wordmark {
        display: flex; align-items: center; gap: 8px; min-width: 0;
      }
      .snl-brand-name {
        font-weight: 800; font-size: 1.35rem; line-height: 1;
        color: var(--snl-accent); letter-spacing: -0.01em;
        white-space: nowrap;
      }
      .snl-brand-name-sup {
        font-size: 0.5em; font-weight: 700;
        vertical-align: super; margin-left: 1px;
      }
      .snl-brand-pill {
        font-size: 0.6rem; font-weight: 700; line-height: 1;
        padding: 3px 7px; border-radius: 999px;
        background: var(--snl-version-bg, #d5f5e3);
        color: var(--snl-version-color, #17a862);
        white-space: nowrap; flex-shrink: 0;
      }

      /* Top profile card (bordered, sits under brand / above nav) */
      .snl-profile-card {
        display: flex; align-items: center; gap: 12px;
        margin: 14px 12px 6px; padding: 10px 12px;
        background: var(--snl-profile-bg, #ffffff);
        border: 1px solid var(--snl-border, #e5e9ef);
        border-radius: 10px; flex-shrink: 0; cursor: pointer;
        transition: border-color var(--snl-ease), box-shadow var(--snl-ease);
      }
      .snl-profile-card:hover { box-shadow: 0 2px 8px rgba(70,128,255,0.12); }
      :host([collapsed]) .snl-profile-card { justify-content: center; padding: 8px; }
      .snl-profile-avatar {
        width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
      }
      .snl-profile-avatar-img { object-fit: cover; }
      .snl-profile-avatar-init {
        background: var(--snl-accent); color: #fff;
        display: flex; align-items: center; justify-content: center;
        font-size: 0.85rem; font-weight: 700;
      }
      .snl-profile-info { flex: 1; min-width: 0; }
      .snl-profile-name {
        font-size: 0.85rem; font-weight: 700;
        color: var(--snl-profile-name-color, #1d2630);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-profile-role {
        font-size: 0.72rem;
        color: var(--snl-profile-role-color, #8996a4);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-profile-caret {
        color: var(--snl-profile-role-color, #8996a4);
        flex-shrink: 0; display: flex;
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
        padding: 14px 12px 6px; font-size: 0.68rem;
        font-weight: 700; letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--snl-section-color, #8996a4);
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

      /* ── Sub-menu (dotted sub-items) ── */
      .snl-sub-menu { display: flex; flex-direction: column; margin: 2px 0 6px; overflow: hidden; }
      .snl-sub-menu.open { display: flex; }
      .snl-sub-menu:not(.open) { display: none; }

      .snl-sub-item {
        display: flex; align-items: center; gap: 12px;
        padding: 6px 12px 6px 30px; margin-bottom: 1px;
        border: none; background: transparent; width: 100%;
        text-align: left; box-sizing: border-box; cursor: pointer;
        border-radius: 8px; font-size: 0.83rem; font-weight: 500;
        color: var(--snl-sidebar-text, #5b6b79);
        transition: background var(--snl-ease), color var(--snl-ease);
      }
      .snl-sub-item:hover { background: var(--snl-hover-bg, rgba(0,0,0,0.04)); }
      .snl-sub-item.is-active { color: var(--snl-accent); font-weight: 600; }
      .snl-sub-dot {
        width: 6px; height: 6px; border-radius: 50%;
        background: currentColor; opacity: 0.45; flex-shrink: 0;
      }
      .snl-sub-item.is-active .snl-sub-dot { opacity: 1; background: var(--snl-accent); }

      /* ── Sidebar Extra (slot drop zone) ── */
      .snl-sidebar-extra { padding: 8px; border-top: 1px solid var(--snl-border, #e5e9ef); flex-shrink: 0; }

      /* ── Sidebar Slot (full nav area as drop zone) ── */
      .snl-sidebar-slot {
        flex: 1; padding: 8px;
        display: flex; flex-direction: column;
      }

      /* ── Sidebar Footer (config) ── */
      .snl-sidebar-footer {
        display: flex; align-items: center; gap: 10px;
        padding: 12px 14px; flex-shrink: 0;
        border-top: 1px solid var(--snl-border, #e5e9ef);
      }

      .snl-footer-avatar {
        width: 34px; height: 34px; border-radius: 50%;
        object-fit: cover; flex-shrink: 0;
      }

      .snl-footer-initials {
        width: 34px; height: 34px; border-radius: 50%;
        background: var(--snl-accent); color: #fff;
        display: flex; align-items: center; justify-content: center;
        font-size: 0.75rem; font-weight: 700; flex-shrink: 0;
      }

      .snl-footer-info { flex: 1; overflow: hidden; }
      .snl-footer-name {
        font-size: 0.82rem; font-weight: 600;
        color: var(--snl-footer-name-color, #1d2630);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-footer-role {
        font-size: 0.7rem;
        color: var(--snl-footer-role-color, #8996a4);
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .snl-footer-actions { display: flex; gap: 4px; }
      .snl-footer-btn {
        cursor: pointer;
        color: var(--snl-footer-btn-color, #8996a4);
        font-size: 0.9rem; padding: 4px; border-radius: 4px; border: none; background: transparent;
      }
      .snl-footer-btn:hover { background: var(--snl-hover-bg, rgba(0,0,0,0.04)); }

      /* ── Sidebar Footer (slot) ── */
      .snl-footer-slot { padding: 8px; border-top: 1px solid var(--snl-border, #e5e9ef); flex-shrink: 0; }

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
      .snl-collapse-btn:hover { background: var(--snl-hover-bg, rgba(0,0,0,0.04)); }

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
        border: 2px dashed var(--snl-accent, #4680ff);
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

      .snl-header-toggle-mobile {
        display: none;
      }

      @media (max-width: 768px) {
        .snl-header-toggle-mobile {
          display: flex !important;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 1.25rem;
          padding: 8px;
          color: inherit;
        }

        /* Force overlay mode on mobile */
        .snl-sidebar {
          position: absolute !important;
          left: 0 !important;
          top: 0 !important;
          bottom: 0 !important;
          z-index: 30 !important;
          height: 100% !important;
          box-shadow: 4px 0 12px rgba(0, 0, 0, 0.15) !important;
          transform: translateX(-100%) !important;
          transition: transform var(--snl-ease) !important;
          width: 260px !important;
        }

        :host([opened]) .snl-sidebar {
          transform: translateX(0) !important;
        }

        /* Ensure main content is not indented/pushed on mobile */
        .snl-main {
          margin-left: 0 !important;
        }

        /* Make header components fit on narrow screen */
        .snl-header-brand {
          font-size: 0.85rem !important;
          gap: 6px !important;
        }
        .snl-header-search {
          max-width: 140px !important;
          padding: 5px 8px !important;
        }
        .snl-header-user {
          padding: 2px 4px !important;
        }
        .snl-user-info {
          display: none !important;
        }
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

  @property({ type: String, attribute: "header-logo" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Header Logo (overrides app logo in header bar)",
    fieldMappings: "headerLogo",
    categoryLabel: "Branding"
  })
  headerLogo = "";

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

  @property({ type: Boolean, attribute: "show-theme-toggle", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Theme Toggle (Dark/Light)",
    fieldMappings: "showThemeToggle",
    categoryLabel: "Header"
  })
  showThemeToggle = false;

  /** Current header theme mode. Reflected to `data-theme` on the host so the
   *  dark-mode token overrides in `static styles` take effect. */
  @property({ type: String, attribute: "data-theme", reflect: true })
  themeMode: "light" | "dark" = "light";

  // ─── Appearance ────────────────────────────────────────────────────────────

  @property({ type: String, attribute: "sidebar-bg" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Sidebar Background",
    fieldMappings: "sidebarBg",
    categoryLabel: "Appearance"
  })
  sidebarBg = "#ffffff";

  @property({ type: String, attribute: "sidebar-text" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Sidebar Text Color",
    fieldMappings: "sidebarText",
    categoryLabel: "Appearance"
  })
  sidebarText = "#5b6b79";

  @property({ type: String, attribute: "sidebar-active-bg" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Active Item Background",
    fieldMappings: "sidebarActiveBg",
    categoryLabel: "Appearance"
  })
  sidebarActiveBg = "#e6f0ff";

  @property({ type: String, attribute: "sidebar-active-text" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Active Item Text Color",
    fieldMappings: "sidebarActiveText",
    categoryLabel: "Appearance"
  })
  sidebarActiveText = "#4680ff";

  @property({ type: String, attribute: "accent-color" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Accent Color (badges, avatar bg, drop-zone ring)",
    fieldMappings: "accentColor",
    categoryLabel: "Appearance"
  })
  accentColor = "#4680ff";

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
  headerText = "#1d2630";

  @property({ type: String, attribute: "header-border" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Header Border Color",
    fieldMappings: "headerBorder",
    categoryLabel: "Appearance"
  })
  headerBorder = "#e5e9ef";

  @property({ type: String, attribute: "main-bg" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Main Area Background",
    fieldMappings: "mainBg",
    categoryLabel: "Appearance"
  })
  mainBg = "#f4f7fa";

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

  @property({ type: String, attribute: "profile-position", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Profile Card Position",
    fieldMappings: "profilePosition",
    categoryLabel: "Sidebar Footer",
    optionItems: [
      { label: "Top (below brand)", value: "top" },
      { label: "Bottom (footer)",   value: "bottom" },
    ]
  })
  profilePosition: "top" | "bottom" = "top";

  // ─── Events ────────────────────────────────────────────────────────────────

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Opened Change", eventTrigger: "openedchange", categoryLabel: "Triggers" })
  get onOpenedChange() { return "openedchange"; }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Nav Item Click", eventTrigger: "navchange", categoryLabel: "Triggers" })
  get onNavChange() { return "navchange"; }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Sidebar Toggle", eventTrigger: "sidebarToggle", categoryLabel: "Triggers" })
  get onSidebarToggle() { return "sidebarToggle"; }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Logout Click", eventTrigger: "logout", categoryLabel: "Triggers" })
  get onLogout() { return "logout"; }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Settings Click", eventTrigger: "settingsClick", categoryLabel: "Triggers" })
  get onSettingsClick() { return "settingsClick"; }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Search", eventTrigger: "search", categoryLabel: "Triggers" })
  get onSearch() { return "search"; }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Theme Change", eventTrigger: "themechange", categoryLabel: "Triggers" })
  get onThemeChange() { return "themechange"; }

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

  @RendererAttribute({ attributeType: AttributeType.ACTION, displayLabel: "Toggle Theme (Dark/Light)", categoryLabel: "Actions" })
  public toggleTheme() {
    this.themeMode = this.themeMode === "dark" ? "light" : "dark";
    // themeMode reflects to the `data-theme` attribute, which drives the
    // --uiv-* dark-mode token overrides in `static styles`.
    this.dispatchEvent(new CustomEvent("themechange", { detail: { theme: this.themeMode }, bubbles: true, composed: true }));
  }

  // ─── Internal handlers ──────────────────────────────────────────────────────

  private handleNavClick(index: number, item: NavItem) {
    if (item.disabled || item.separator || item.section) return;
    this.navigateTo(index);
    if (item.path) {
      this.dispatchEvent(new CustomEvent("route-change", { detail: { path: item.path }, bubbles: true, composed: true }));
    } else if (item.href) {
      window.open(item.href, item.target ?? "_self");
    }
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

  /** Notification bell click → dispatch a wireable `notification-click` event
   *  (bubbles + composed) so it can drive a shell-node trigger via the studio's
   *  Triggers panel. Detail carries the current unread `count`.
   *  Declared as a first-class studio EVENT (mirrors zero-button's handleClick). */
  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Notification Click", eventTrigger: "notification-click", categoryLabel: "Triggers" })
  handleBellClick(count: number) {
    this.dispatchEvent(new CustomEvent("notification-click", {
      detail: { count },
      bubbles: true,
      composed: true,
    }));
  }

  /** Any user-profile element (header user cluster, top sidebar profile card, or
   *  sidebar-footer profile row) → dispatch a single wireable `profile-click`
   *  event. `origin` distinguishes which element fired it ("header" | "sidebar"
   *  | "footer"); `info` echoes the shown user name / role for the handler. */
  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Profile Click", eventTrigger: "profile-click", categoryLabel: "Triggers" })
  handleProfileClick(origin: "header" | "sidebar" | "footer" = "header", info: { userName?: string; userRole?: string } = {}) {
    this.dispatchEvent(new CustomEvent("profile-click", {
      detail: { origin, ...info },
      bubbles: true,
      composed: true,
    }));
  }

  /** Generic header action control (e.g. the search icon button) → dispatch a
   *  wireable `header-action` event. Detail carries which `action` was invoked
   *  (defaults to "search") so a single trigger can fan out per action. */
  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Header Action", eventTrigger: "header-action", categoryLabel: "Triggers" })
  handleHeaderAction(action: string = "search") {
    this.dispatchEvent(new CustomEvent("header-action", {
      detail: { action },
      bubbles: true,
      composed: true,
    }));
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

    const appName     = config?.props?.appName     ?? "My App";
    const appSubtitle = config?.props?.appSubtitle ?? "";
    const appLogo     = config?.props?.appLogo     ?? "";
    const headerTitle = config?.props?.headerTitle || "";
    const headerLogo  = config?.props?.headerLogo  || "";
    const activeItem  = Number(config?.props?.activeItem ?? 0);
    const collapsed   = !!config?.props?.collapsed;
    const profilePosition = (config?.props?.profilePosition || "top") as string;

    const sidebarWidth      = config?.props?.sidebarWidth      || "260px";
    const sidebarBg         = config?.props?.sidebarBg         || "#ffffff";
    const sidebarText       = config?.props?.sidebarText       || "#5b6b79";
    const sidebarActiveBg   = config?.props?.sidebarActiveBg   || "#e6f0ff";
    const sidebarActiveText = config?.props?.sidebarActiveText || "#4680ff";
    const accentColor       = config?.props?.accentColor       || "#4680ff";
    const headerBg          = config?.props?.headerBg          || "#ffffff";
    const headerText        = config?.props?.headerText        || "#1d2630";
    const headerBorder      = config?.props?.headerBorder      || "#e5e9ef";
    const mainBg            = config?.props?.mainBg            || "#f4f7fa";
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

    // Text wordmark: first word bold + rest as superscript (e.g. "Able" + "Pro").
    const wordmarkHtml = (name: string, color: string) => {
      const parts = (name || "").trim().split(/\s+/).filter(Boolean);
      const first = parts[0] || "";
      const rest = parts.slice(1).join(" ");
      return `<span style="font-weight:800; font-size:1.35rem; line-height:1; color:${color}; letter-spacing:-0.01em; white-space:nowrap;">${first}${rest ? `<sup style="font-size:0.5em; font-weight:700; vertical-align:super; margin-left:1px;">${rest}</sup>` : ""}</span>`;
    };
    const isImgLogo = (l: string) => !!l && (l.startsWith('<') || l.startsWith('http') || l.startsWith('/') || l.includes('.'));

    // ── Build slot list dynamically based on modes ──
    // "outlet" is the real page OUTLET — studio pages (page-root) nest here.
    // "main" is kept for back-compat with existing pages that target it.
    const slots: ZeroSlotDefinition[] = [
      { id: "outlet", label: "Page Content", dropzone: true, accepts: ["page-root", "zero-section"] },
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
        ${(headerTitle || headerLogo) ? `
          <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:0.95rem; color:${headerText}; white-space:nowrap; flex-shrink:0;">
            ${(() => {
              const finalLogo = headerLogo || appLogo;
              return finalLogo.startsWith('<') ? finalLogo :
                (finalLogo.startsWith('http') || finalLogo.startsWith('/') || finalLogo.includes('.')) ? `<img src="${finalLogo}" style="width: 24px; height: 24px; object-fit: contain;" />` :
                `<span style="font-size:1.3rem;">${finalLogo}</span>`;
            })()}
            ${brandLabel}
          </div>
        ` : ""}
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
        <div style="padding:8px; border-top:1px solid #e5e9ef; flex-shrink:0;">
          ${studioDropZone("sidebar-extra", "Sidebar Extra", "40px", accentColor)}
        </div>
      `;

    // ── Top profile card (default position) ──
    const showProfile = footerMode === "config" && footerCfg.show;
    const profileTopHtml = (showProfile && profilePosition === "top")
      ? studioProfileCard(footerCfg, isCurrentlyCollapsed, accentColor, headerText, "#8996a4", headerBorder)
      : "";

    // ── Sidebar footer HTML (bottom profile only when profilePosition = bottom) ──
    const sidebarFooterHtml = footerMode === "hidden" ? "" :
      footerMode === "slot"
        ? `<div style="padding:8px; border-top:1px solid #e5e9ef; flex-shrink:0;">
             ${studioDropZone("footer", "Drop Footer Sections", "50px", accentColor)}
           </div>`
        : (profilePosition === "bottom"
            ? studioSidebarFooter(footerCfg, isCurrentlyCollapsed, accentColor, footerActionType, sidebarText)
            : "");

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
        border-right:${effectiveSidebarWidth === "0px" ? "none" : `1px solid ${headerBorder}`};
        ${sidenavType === "over" ? `position:absolute; left:0; top:0; bottom:0; z-index:30; height:100%; box-shadow:4px 0 12px rgba(0,0,0,0.15); transform:${opened ? "none" : "translateX(-100%)"};` : ""}
        ${sidebarStyles}
      ">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 18px 16px; border-bottom: 1px solid ${headerBorder}; flex-shrink: 0;">
          <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
            ${isImgLogo(appLogo)
              ? (appLogo.startsWith('<') ? appLogo : `<img src="${appLogo}" style="width: 28px; height: 28px; object-fit: contain; border-radius:8px;" />`)
              : ""}
            ${isCurrentlyCollapsed ? "" : `
              <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
                ${wordmarkHtml(appName, accentColor)}
                ${appSubtitle ? `<span style="font-size:0.6rem; font-weight:700; line-height:1; padding:3px 7px; border-radius:999px; background:#d5f5e3; color:#17a862; white-space:nowrap; flex-shrink:0;">${appSubtitle}</span>` : ""}
              </div>
            `}
          </div>
          ${sidebarTopBtn}
        </div>
        ${profileTopHtml}
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
        --snl-border: ${headerBorder};
        --snl-section-color: #8996a4;
        --snl-brand-text-color: ${headerText};
        --snl-separator-color: ${headerBorder};
        --snl-footer-name-color: ${headerText};
        --snl-footer-role-color: #8996a4;
        --snl-footer-btn-color: #8996a4;
        --snl-profile-name-color: ${headerText};
        --snl-profile-role-color: #8996a4;
        --snl-hover-bg: rgba(0,0,0,0.04);
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
                <zero-studio-slot name="outlet"></zero-studio-slot>
                <zero-studio-slot name="main"></zero-studio-slot>
              </div>
            ` : `
              <div style="flex:1; ${mainPaddingStyle} box-sizing:border-box;">
                <zero-studio-slot name="outlet"></zero-studio-slot>
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
    const showHeaderBrand = !!(this.headerTitle || this.headerLogo);
    const isImgLogo = (l: string) => !!l && (l.startsWith('<') || l.startsWith('http') || l.startsWith('/') || l.includes('.'));

    // Text wordmark: first word bold + rest as superscript (e.g. "Able" + "Pro").
    const brandWordmark = () => {
      const parts = (this.appName || "").trim().split(/\s+/).filter(Boolean);
      const first = parts[0] || "";
      const rest = parts.slice(1).join(" ");
      return html`<span class="snl-brand-name">${first}${rest ? html`<sup class="snl-brand-name-sup">${rest}</sup>` : nothing}</span>`;
    };

    // Theme toggle button — shared between config & slot header layouts so it
    // sits in the right-hand cluster (before the bell) in the default look.
    const themeToggleEl = this.showThemeToggle ? html`
      <button class="snl-header-btn snl-theme-toggle"
        style="color:${this.headerText}; margin-right:0;"
        @click=${(e: Event) => { e.stopPropagation(); this.toggleTheme(); }}
        title=${this.themeMode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        aria-label="Toggle theme">
        ${this.themeMode === "dark" ? html`
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ` : html`
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        `}
      </button>
    ` : nothing;

    // Profile card (top-of-sidebar by default). Bordered, rounded, avatar + name/role.
    const showProfile = this.footerMode === "config" && footerCfg.show;
    const profileCardEl = html`
      <div class="snl-profile-card" role="button" tabindex="0"
        @click=${() => this.handleProfileClick("sidebar", { userName: footerCfg.userName, userRole: footerCfg.userRole })}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.handleProfileClick("sidebar", { userName: footerCfg.userName, userRole: footerCfg.userRole });
          }
        }}>
        ${footerCfg.avatarUrl
          ? html`<img class="snl-profile-avatar snl-profile-avatar-img" src=${footerCfg.avatarUrl} />`
          : html`<div class="snl-profile-avatar snl-profile-avatar-init">${initials(footerCfg.userName)}</div>`}
        <div class="snl-profile-info">
          <div class="snl-profile-name">${footerCfg.userName ?? ""}</div>
          ${footerCfg.userRole ? html`<div class="snl-profile-role">${footerCfg.userRole}</div>` : nothing}
        </div>
        <span class="snl-profile-caret">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
        </span>
      </div>
    `;

    // ─ Header bar ─
    const headerEl = this.headerMode === "hidden" ? nothing : html`
      <header class="snl-header"
        style="
          height:${this.headerHeight}; background:var(--uiv-surface-color, ${this.headerBg});
          color:var(--uiv-text-color, ${this.headerText});
          border-bottom:1px solid var(--uiv-border-color, ${this.headerBorder});
        ">

        <button class="snl-header-toggle-mobile" @click=${(e: Event) => { e.stopPropagation(); this.toggle(); }} title="Toggle sidebar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>

        ${this.collapseBtnPosition === "header-left" && this.showCollapseBtn ? this.renderToggleButton("header-left") : nothing}

        ${showHeaderBrand ? html`
          <div class="snl-header-brand" style="color:${this.headerText};">
            ${(() => {
              const finalLogo = this.headerLogo || this.appLogo;
              return finalLogo && finalLogo.startsWith('<') ? html`${unsafeHTML(finalLogo)}` :
                finalLogo && (finalLogo.startsWith('http') || finalLogo.startsWith('/') || finalLogo.includes('.')) ? html`<img src="${finalLogo}" style="width: 24px; height: 24px; object-fit: contain;" />` :
                finalLogo ? html`<span class="snl-brand-logo">${finalLogo}</span>` : nothing;
            })()}
            <span>${this.headerTitle || this.appName}</span>
          </div>
        ` : nothing}

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
            <div class="snl-header-search">
              <span class="snl-header-search-icon" role="button" tabindex="0" title="Search"
                aria-label="Search"
                style="display:flex; align-items:center; cursor:pointer; flex-shrink:0;"
                @click=${(e: Event) => { e.stopPropagation(); this.handleHeaderAction("search"); }}
                @keydown=${(e: KeyboardEvent) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    this.handleHeaderAction("search");
                  }
                }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8996a4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
                  <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                class="snl-header-search-input"
                type="search"
                placeholder=${headerCfg.searchPlaceholder ?? "Search (Ctrl + K)"}
                @input=${(e: Event) => this.dispatchEvent(new CustomEvent("search", {
                  detail: { query: (e.target as HTMLInputElement).value },
                  bubbles: true, composed: true
                }))}
                @keydown=${(e: KeyboardEvent) => {
                  if (e.key === "Enter") {
                    this.dispatchEvent(new CustomEvent("search", {
                      detail: { query: (e.target as HTMLInputElement).value, submit: true },
                      bubbles: true, composed: true
                    }));
                  }
                }}
              />
            </div>
          ` : nothing}

          <div class="snl-header-spacer"></div>

          ${themeToggleEl}

          ${headerCfg.showNotificationBell ? html`
            <div class="snl-header-bell" role="button" tabindex="0" title="Notifications"
              aria-label="Notifications"
              @click=${(e: Event) => { e.stopPropagation(); this.handleBellClick(headerCfg.notificationCount ?? 0); }}
              @keydown=${(e: KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  this.handleBellClick(headerCfg.notificationCount ?? 0);
                }
              }}>
              <span>🔔</span>
              ${(headerCfg.notificationCount ?? 0) > 0 ? html`
                <span class="snl-bell-count" style="background:${this.accentColor};">
                  ${headerCfg.notificationCount}
                </span>
              ` : nothing}
            </div>
          ` : nothing}

          ${headerCfg.showUserAvatar ? html`
            <div class="snl-header-user" role="button" tabindex="0"
              title=${headerCfg.userName ?? "Profile"}
              @click=${(e: Event) => { e.stopPropagation(); this.handleProfileClick("header", { userName: headerCfg.userName, userRole: headerCfg.userRole }); }}
              @keydown=${(e: KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  this.handleProfileClick("header", { userName: headerCfg.userName, userRole: headerCfg.userRole });
                }
              }}>
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
          ${themeToggleEl}
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
        style="width:${this.sidebarWidth}; background:var(--uiv-surface-color, ${this.sidebarBg});
          --snl-collapsed-w:${this.collapsedWidth};
          ${sidebarStyles}">

        <div class="snl-sidebar-brand" style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
          <slot name="brand">
            <div class="snl-brand-wordmark" style="flex: 1;">
              ${isImgLogo(this.appLogo)
                ? (this.appLogo.startsWith('<')
                    ? html`${unsafeHTML(this.appLogo)}`
                    : html`<img src="${this.appLogo}" style="width: 28px; height: 28px; object-fit: contain; border-radius:8px;" />`)
                : nothing}
              ${brandWordmark()}
              ${this.appSubtitle ? html`<span class="snl-brand-pill">${this.appSubtitle}</span>` : nothing}
            </div>
          </slot>
          ${this.collapseBtnPosition === "sidebar-top" && this.showCollapseBtn ? this.renderToggleButton("sidebar-top") : nothing}
        </div>

        <!-- Profile card at TOP (default) -->
        ${showProfile && this.profilePosition === "top" ? profileCardEl : nothing}

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
                  <div class="snl-nav-section">${item.section}</div>
                `;
                const isActive = this.activeItem === index;
                const hasChildren = !!item.children?.length;
                // Active parent auto-expands (matches the reference look).
                const isExpanded = hasChildren && (this._expandedItems.has(index) || isActive);

                // Which child is active: match by path/href, else first child of active parent.
                const activeChildIndex = hasChildren
                  ? (() => {
                      const byPath = item.children!.findIndex(c =>
                        (c.path && c.path === this.activePath) ||
                        (c.href && c.href === this.activePath));
                      if (byPath !== -1) return byPath;
                      return isActive ? 0 : -1;
                    })()
                  : -1;

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
                      <span class="nav-child-indicator" style="display:flex; margin-left:${item.badge ? "8px" : "auto"};">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="${isExpanded ? "6 9 12 15 18 9" : "9 18 15 12 9 6"}"></polyline>
                        </svg>
                      </span>` : nothing}
                  </button>
                  ${hasChildren && isExpanded ? html`
                    <div class="snl-sub-menu open">
                      ${item.children!.map((child, ci) => html`
                        <button
                          class="snl-sub-item ${ci === activeChildIndex ? "is-active" : ""} ${child.disabled ? "is-disabled" : ""}"
                          @click=${() => this.handleNavClick(index, child)}
                        >
                          <span class="snl-sub-dot"></span>
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
          ` : (footerCfg.show && this.profilePosition === "bottom") ? html`
            <div class="snl-sidebar-footer" style="cursor:pointer;"
              @click=${() => this.handleProfileClick("footer", { userName: footerCfg.userName, userRole: footerCfg.userRole })}>
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
                    @click=${(e: Event) => { e.stopPropagation(); this.dispatchEvent(new CustomEvent("settingsClick", { bubbles: true, composed: true })); }}
                    title="Settings">⚙️</button>
                ` : nothing}
                ${this.footerActionType === "buttons" && footerCfg.showLogout ? html`
                  <button class="snl-footer-btn"
                    @click=${(e: Event) => { e.stopPropagation(); this.dispatchEvent(new CustomEvent("logout", { bubbles: true, composed: true })); }}
                    title="Logout">↪</button>
                ` : nothing}
                ${this.footerActionType === "dropdown" ? html`
                  <button class="snl-footer-btn"
                    @click=${(e: Event) => { e.stopPropagation(); this.handleProfileClick("footer", { userName: footerCfg.userName, userRole: footerCfg.userRole }); }}
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
      <div>
        <div class="snl-shell" style="
          --snl-accent: var(--uiv-primary-color, ${this.accentColor});
          --snl-sidebar-width: ${this.sidebarWidth};
          --snl-collapsed-w: ${this.collapsedWidth};
          --snl-sidebar-text: ${this.sidebarText};
          --snl-border: var(--uiv-border-color, ${this.headerBorder});
          --snl-section-color: var(--uiv-text-muted, #8996a4);
          --snl-brand-text-color: var(--uiv-text-color, ${this.headerText});
          --snl-separator-color: var(--uiv-border-color, ${this.headerBorder});
          --snl-profile-name-color: var(--uiv-text-color, ${this.headerText});
          --snl-profile-role-color: var(--uiv-text-muted, #8996a4);
          --snl-footer-name-color: var(--uiv-text-color, ${this.headerText});
          --snl-footer-role-color: var(--uiv-text-muted, #8996a4);
          --snl-footer-btn-color: var(--uiv-text-muted, #8996a4);
          --snl-hover-bg: var(--uiv-hover-bg, ${this.sidebarText === '#94a3b8' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.04)'});
          ${this.computeInternalStyles()}
        ">
          ${headerElAtShell}
          <div class="snl-body">
            ${this.opened && (this.sidenavType === "over" || this._isMobile) && this.hasBackdrop ? html`
              <div class="snl-backdrop" @click=${this.close}></div>
            ` : nothing}
            ${sidebarEl}
            ${this.collapseBtnPosition === "floating" && this.showCollapseBtn ? this.renderToggleButton("floating") : nothing}
            <main class="snl-main" style="background:var(--uiv-bg-color, ${this.mainBg}); ${mainOverflowStyle} ${mainPaddingStyle} display: flex; flex-direction: column;">
              ${headerElInMain}
              ${!this.fixedHeader ? html`
                <div style="flex: 1; padding:${this.mainPadding}; box-sizing: border-box;">
                  <slot name="outlet"></slot>
                  <slot name="main"></slot>
                  <slot></slot>
                </div>
              ` : html`
                <slot name="outlet"></slot>
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
