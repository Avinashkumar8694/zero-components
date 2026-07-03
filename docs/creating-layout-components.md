# Creating Layout Components for Zero Studio

This guide explains how to build new droppable layout components — panels, sections, columns, and
leaf elements — that integrate automatically with the visual builder's drag-and-drop, layout
validation, and property inspector systems.

---

## 1. Architecture Overview

Every component fits into one of four structural roles. The drag-and-drop system enforces these
rules to prevent invalid nesting.

```
Page Root
└── Panel  (e.g. zero-expansion-panel, zero-tab-panel, zero-sidenav-layout)
    └── Section  (e.g. zero-section, zero-section-2col)
        └── Column  (e.g. zero-column)
            └── Leaf  (e.g. zero-button, zero-text, zero-image)
```

| Kind | `kind` value | Slots accept | Can be placed in |
|---|---|---|---|
| Panel | `"panel"` | `zero-section` | page root |
| Section | `"section"` | `zero-column` | panels, page root |
| Column | `"column"` | leaf components | sections |
| Leaf | `"leaf"` (default) | nothing | columns |

---

## 2. The Two Component Paths

### Path A — Extends `ZeroLayoutBase` (recommended for layout containers)

`ZeroLayoutBase` gives you flex layout, CSS variable responsive overrides, drop indicators, and
responsive style rendering for free. Use this for any structural container.

**Available from inside the monorepo:**
```typescript
import { ZeroLayoutBase } from "../zero-panel-layout/zero-layout-base";
import type { ZeroSlotDefinition } from "../zero-panel-layout/zero-layout-base";
```

**Available from an external / published package:**
```typescript
import { ZeroLayoutBase } from "zero-panel-layout";
import type { ZeroSlotDefinition } from "zero-panel-layout";
```

### Path B — Extends `LitElement` directly

Use this when you need full control of your shadow DOM (tab panels, sidebars, wizard layouts, etc.)
that manage their own visual chrome. You still implement `getStudioTemplate()` for the editor.

```typescript
import { LitElement, css, html } from "lit";
```

---

## 3. What You Always Need

Regardless of path, every component must:

1. Decorate the class with `@RendererComponent` and `@customElement`
2. Implement `static getStudioTemplate()` to define drop zones for the editor
3. Use `<zero-studio-slot name="...">` in the template HTML (editor representation)
4. Use `<slot name="...">` in `render()` (live/runtime representation)

```typescript
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import {
  RendererComponent,
  RendererAttribute,
  applyGlobalStyles,
  AttributeType,
  UserInterfaceType
} from "zero-annotation";
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
```

---

## 4. Minimal Panel Component (single drop zone)

A panel with one droppable content area — the simplest possible case.

```typescript
// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererComponent, RendererAttribute, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@RendererComponent({
  name: "my-card-panel",
  version: "1.0.0",
  title: "Card Panel",
  elementSelector: "my-card-panel",
  group: "Layout",
})
@customElement("my-card-panel")
@applyGlobalStyles()
export class MyCardPanel extends LitElement {

  static styles = css`
    :host { display: block; width: 100%; }
    slot { display: contents; }       /* ← critical: children join your flex layout */
    .card { border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
    .card-header { padding: 16px 20px; font-weight: 700; background: #f8fafc; border-bottom: 1px solid #e2e8f0; }
    .card-body { padding: 20px; min-height: 80px; }
  `;

  @property({ type: String }) title = "My Card";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Card Title",
    fieldMappings: "title"
  })
  get titleConfig() { return this.title; }
  set titleConfig(v: string) { this.title = v; }

  // ─── Studio Template ──────────────────────────────────────────────
  // This is what the visual editor renders. Use <zero-studio-slot> for drop zones.
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    const title = config?.props?.title || "My Card";

    return {
      kind: "panel",                    // ← validates drop rules
      slots: [
        {
          id: "content",               // ← matches <zero-studio-slot name="content">
          label: "Card Body",
          dropzone: true,
          accepts: ["zero-section"]    // ← only sections can be dropped here
        }
      ],
      templateHtml: `
        <div style="border:1px solid #e2e8f0; border-radius:12px; overflow:hidden;">
          <div style="padding:16px 20px; font-weight:700; background:#f8fafc; border-bottom:1px solid #e2e8f0;">
            ${title}
          </div>
          <div style="padding:20px; min-height:80px;">
            <zero-studio-slot name="content"></zero-studio-slot>
          </div>
        </div>
      `,
      badges: ["Card"],
      emptyText: "Drop sections here"
    };
  }

  // ─── Runtime Render ───────────────────────────────────────────────
  // This is what renders in the live preview and published page.
  // Use <slot name="..."> to receive dropped children.
  render() {
    return html`
      <div class="card">
        <div class="card-header">${this.title}</div>
        <div class="card-body">
          <slot name="content"></slot>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
```

---

## 5. Panel with Multiple Drop Zones

Use named slots for each independent drop area. This is how you build sidebars, headers, and
multi-region layouts. Each slot is independently droppable in the visual editor.

```typescript
static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
  return {
    kind: "panel",
    slots: [
      { id: "header",  label: "Header Area",   dropzone: true, accepts: ["zero-section"] },
      { id: "sidebar", label: "Sidebar",        dropzone: true, accepts: ["zero-section"] },
      { id: "main",    label: "Main Content",   dropzone: true, accepts: ["zero-section"] },
      { id: "footer",  label: "Footer",         dropzone: true, accepts: ["zero-section"] },
    ],
    templateHtml: `
      <div style="display:flex; flex-direction:column; height:600px;">
        <div style="border-bottom:1px solid #e2e8f0; padding:12px 20px;">
          <zero-studio-slot name="header"></zero-studio-slot>
        </div>
        <div style="display:flex; flex:1; overflow:hidden;">
          <div style="width:240px; background:#1e293b;">
            <zero-studio-slot name="sidebar"></zero-studio-slot>
          </div>
          <div style="flex:1; padding:24px; background:#f8fafc;">
            <zero-studio-slot name="main"></zero-studio-slot>
          </div>
        </div>
        <div style="border-top:1px solid #e2e8f0; padding:12px 20px;">
          <zero-studio-slot name="footer"></zero-studio-slot>
        </div>
      </div>
    `,
    badges: ["App Shell"],
    emptyText: "Drop sections into any zone"
  };
}

render() {
  return html`
    <div class="shell">
      <header><slot name="header"></slot></header>
      <div class="body">
        <aside><slot name="sidebar"></slot></aside>
        <main><slot name="main"></slot></main>
      </div>
      <footer><slot name="footer"></slot></footer>
    </div>
  `;
}
```

---

## 6. Dynamic Slots (Tab / Stepper Panels)

When the number of slots changes based on a property (e.g. tabs), declare `static slots = []`
to opt out of static slot metadata, and generate slots dynamically in `getStudioTemplate()`.
The `data-tab-index` attribute lets the Studio capture clicks and update `activeIndex`.

```typescript
@customElement("my-tab-panel")
export class MyTabPanel extends ZeroLayoutBase {
  protected get overridePrefix() { return "my-tab-panel"; }

  static slots: ZeroSlotDefinition[] = [];   // ← empty = use getStudioTemplate()

  @property({ type: String }) tabs = "Tab 1, Tab 2";
  @property({ type: Number, reflect: true, attribute: "active-index" }) activeIndex = 0;

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    const tabsVal = config?.props?.tabs || "Tab 1, Tab 2";
    const activeIndex = Number(config?.props?.activeIndex ?? 0);
    const tabList = tabsVal.split(",").map((t: string) => t.trim()).filter(Boolean);

    // Slots are generated from current tab configuration
    const slots = tabList.map((tab: string, i: number) => ({
      id: `tab-${i + 1}`,
      label: tab,
      dropzone: true,
      accepts: ["zero-section"]
    }));

    const templateHtml = `
      <div style="border:1px solid #e2e8f0; border-radius:12px; overflow:hidden;">
        <div style="display:flex; border-bottom:1px solid #e2e8f0;">
          ${tabList.map((tab: string, i: number) => `
            <div data-tab-index="${i}" style="padding:12px 20px; cursor:pointer; font-weight:600;
              border-bottom:3px solid ${activeIndex === i ? '#6366f1' : 'transparent'};
              color:${activeIndex === i ? '#6366f1' : '#64748b'};">
              ${tab}
            </div>
          `).join("")}
        </div>
        <div style="padding:20px; min-height:80px;">
          ${tabList.map((tab: string, i: number) => `
            <div style="display:${activeIndex === i ? 'block' : 'none'};">
              <zero-studio-slot name="tab-${i + 1}"></zero-studio-slot>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    return { kind: "panel", slots, templateHtml, badges: ["Tabs"] };
  }

  render() {
    const tabList = this.tabs.split(",").map(t => t.trim()).filter(Boolean);
    return html`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" style=${this.computeInternalStyles()}>
          <div class="tab-bar">
            ${tabList.map((tab, i) => html`
              <button @click=${() => { this.activeIndex = i; }}>${tab}</button>
            `)}
          </div>
          ${tabList.map((_, i) => html`
            <div class="tab-pane" style="display:${this.activeIndex === i ? 'flex' : 'none'}">
              <slot name="tab-${i + 1}"></slot>
            </div>
          `)}
          ${this.renderDropIndicators()}
        </div>
      </div>
    `;
  }
}
```

---

## 7. Creating a New Package

### Step 1 — Create the folder

```
zero-components/packages/my-component/
├── package.json
└── my-component.ts
```

### Step 2 — `package.json`

```json
{
  "name": "my-component",
  "version": "1.0.0",
  "description": "My custom layout component",
  "main": "my-component.ts",
  "type": "module",
  "keywords": ["lit", "web-component"],
  "author": "Your Team",
  "license": "MIT"
}
```

### Step 3 — Build

```bash
# Build only your new component
node build-actions.js my-component

# Or rebuild everything
node build-actions.js
```

The build system auto-discovers any folder placed under `packages/`. No registration needed.

---

## 8. Responsive Props — Automatic, Zero Config

Any component that uses `ZeroLayoutBase` (or follows the `overridePrefix` convention) gets
responsive layout overrides automatically. The renderer maps props like `gap`, `direction`,
`wrap`, `padding`, `align`, `justify` to CSS variables using the component's prefix:

```
Component tag:     my-tab-panel
overridePrefix:    "my-tab-panel"   ← must match
CSS var emitted:   --my-tab-panel-gap-override: 16px
CSS var consumed:  var(--my-tab-panel-gap-override, 0px)   ← in computeInternalStyles()
```

**You never need to touch `schema-renderer.ts`** for standard layout props. The renderer resolves
the prefix from the component name automatically. The only exception: if your `overridePrefix`
differs from your element tag name, add one entry to `COMPONENT_OVERRIDE_PREFIX` in
`schema-renderer.ts`.

---

## 9. Property Inspector Integration

Expose properties to the visual editor's property panel using `@RendererAttribute`:

```typescript
@property({ type: String })
@RendererAttribute({
  attributeType: AttributeType.PROPERTY,          // PROPERTY | EVENT | ACTION
  uiComponentType: UserInterfaceType.TEXT_INPUT,  // TEXT_INPUT | DROPDOWN | CHECKBOX | COLOR_PICKER | CHIPS | NUMBER_INPUT
  displayLabel: "Title",
  fieldMappings: "myProp",           // ← the property name on the element
  categoryLabel: "Content"           // ← groups in the inspector panel
})
myProp = "default value";
```

Available `UserInterfaceType` values:
- `TEXT_INPUT` — single-line text
- `NUMBER_INPUT` — numeric
- `DROPDOWN` + `optionItems` — select menu
- `CHECKBOX` — boolean toggle
- `COLOR_PICKER` — hex color
- `CHIPS` — comma-separated tag list
- `RESPONSIVE_OVERRIDE` — shows mobile/tablet/desktop breakpoint controls

---

## 10. Real-World Example: `zero-sidenav-layout`

See [`../packages/zero-sidenav-layout/zero-sidenav-layout.ts`](../packages/zero-sidenav-layout/zero-sidenav-layout.ts)
for a complete template with:
- 3 independent drop zones (`header`, `sidebar-extra`, `main`)
- Built-in configurable sidebar navigation (via `navItems` prop)
- Configurable header bar, app branding, colors
- Studio interactivity via `data-tab-index` on nav items
- Collapsible sidebar

---

## 11. Checklist for a New Layout Component

- [ ] `@RendererComponent` decorator with `name`, `title`, `elementSelector`, `group`
- [ ] `@customElement("your-tag")` decorator
- [ ] `static getStudioTemplate()` returns `ZeroStudioTemplate` with `kind` + `slots` + `templateHtml`
- [ ] Each drop zone has a `<zero-studio-slot name="...">` in `templateHtml`
- [ ] Each slot has a matching `<slot name="...">` in `render()`
- [ ] `:host { display: block; }` in CSS
- [ ] `slot { display: contents; }` in CSS if children need to join your flex layout
- [ ] `@RendererAttribute` on every configurable property
- [ ] `package.json` with `"main": "your-component.ts"`
- [ ] Folder placed under `zero-components/packages/`
