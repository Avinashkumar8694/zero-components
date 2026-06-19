# @zero/renderer-core

The core rendering engine for the Zero Platform, packaged as a reusable, route-agnostic Lit Web Component (`<zero-renderer>`). It compiles schema definitions into interactive DOM components, provides unified data binding scopes, and dynamically processes responsive configurations.

---

## Features

- **Route-Agnostic / Sub-tree Rendering**: Render full schema routes (pages) or target any sub-tree/widget node directly.
- **$O(1)$ Node Indexing**: Rapid element lookup by ID using flat-mapped indices, avoiding recursive tree walking.
- **Unified Reactive Binding Scope**: Integrated proxy-based state synchronization with support for global and local variables.
- **Performance Optimized Event Wiring**: Pre-filtered trigger indexing targets and binds event listeners only on elements that declare actions.
- **Responsive Layout & Theme Orchestration**: Seamless conversion of responsive design styles to layout-scoped CSS variables.

---

## Installation

Install the package via npm:

```bash
npm install @zero/renderer-core
```

Or load the component directly in your browser:

```html
<script src="https://plugins.zero.org.in/marketplace/components/renderer-core/1.0.0/js" type="module"></script>
```

---

## API & Attributes

| Property / Attribute | Type | Description |
| :--- | :--- | :--- |
| `schema` | `StudioSchema` | The full project schema configuration containing routes, variables, theme tokens, and the component tree. |
| `path` | `string` | The active route path to match (e.g., `/home`). Defaults to `/`. |
| `node` | `UIComponentNode` | Direct subtree node. If provided, overrides route-based schema lookup and renders this node directly. |
| `node-id` / `nodeId` | `string` | Specific node ID to lookup in the schema and render directly in $O(1)$ time. |
| `state` | `any` | Bindings state model object. If not provided, it initializes reactive variables from the schema. |
| `api` | `any` | Optional custom event handlers, actions, navigation delegate, or event emitter. |

---

## Binding Scopes & Reactivity

The `<zero-renderer>` resolves dynamic expressions (e.g., `{{$page.username}}` or `{{$system.layout.device}}`) by compiling them against an isolated proxy scope. 

The following scopes are fully supported:

| Scope | Prefix | Description |
| :--- | :--- | :--- |
| **Page Variables** | `$page` / `$` | Reactive variables local to the active route page. |
| **System Context** | `$system` | Read-only context information including `route` paths and layout parameters. |
| **Locale / Translation** | `$locale` | Active translation messages and locale-specific variables. |
| **Environment** | `$env` | Client environment flags and constants. |
| **Static Settings** | `$static` | Settings variables defined globally in the project schema. |
| **Repeat / Loops** | `$repeat` | Loop item and index reference (available within repeated layout components). |

### Auto-Reactivity
If you do not pass a custom `state` object, the component initializes its own proxy-wrapped state container from the schema. Modifying any properties on this state (e.g., `renderer.state.username = "Jane"`) automatically triggers a fast re-render.

---

## Integration Guides

### 1. Plain HTML / JavaScript
```html
<!-- Load the web component -->
<script type="module" src="https://plugins.zero.org.in/marketplace/components/renderer-core/1.0.0/js"></script>

<!-- Add the element -->
<zero-renderer id="my-renderer"></zero-renderer>

<script type="module">
  const renderer = document.getElementById('my-renderer');

  // Set properties
  renderer.schema = myProjectSchema;
  renderer.path = '/home';

  // Listen to routing or trigger events
  renderer.addEventListener('route-change', (e) => {
    console.log('Navigated to:', e.detail.path);
  });

  renderer.addEventListener('zero-trigger', (e) => {
    console.log('Action triggered:', e.detail.trigger);
  });
</script>
```

### 2. Lit Component
```typescript
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@zero/renderer-core';

@customElement('my-app-view')
export class MyAppView extends LitElement {
  @state() private schema = mySchema;

  render() {
    return html`
      <zero-renderer 
        .schema=${this.schema} 
        path="/profile"
        .api=${{
          navigate: (path) => console.log('Navigate to:', path),
          emit: (event, payload) => console.log('Emit:', event, payload)
        }}
      ></zero-renderer>
    `;
  }
}
```

### 3. React
```jsx
import React, { useEffect, useRef } from 'react';
import '@zero/renderer-core';

export function PageRenderer({ schema, path }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.schema = schema;
      ref.current.path = path;
    }
  }, [schema, path]);

  return <zero-renderer ref={ref} />;
}
```

### 4. Vue
```html
<template>
  <zero-renderer :schema="schema" :path="path" />
</template>

<script>
import '@zero/renderer-core';

export default {
  data() {
    return {
      schema: mySchema,
      path: '/dashboard'
    };
  }
};
</script>
```
