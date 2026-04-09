# Zero UIV Cyber Table

A highly customizable, Uiverse-inspired Cyberpunk table component for Lit.

## Features

- ✅ Neon accent borders and header highlights
- ✅ Polygon clip-path container for techy aesthetic
- ✅ Row hover "scanning" effect
- ✅ Corner tag and structural decorations
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via RendererAttributes (Primary Color)
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-table-cyber.js" type="module"></script>
```

## Usage

```html
<zero-uiv-table-cyber 
    primary-color="#00fbff"
    .columns="${[{key: 'user', label: 'User'}, {key: 'role', label: 'Role'}]}"
    .data="${[{user: 'Admin', role: 'Superuser'}, {user: 'Guest', role: 'ReadOnly'}]}">
</zero-uiv-table-cyber>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `columns` | Array | `[...]` | Array of `{key, label}` objects |
| `data` | Array | `[...]` | Data rows matching column keys |
| `primaryColor` | string | `'#6c63ff'` | Main accent color |

## CSS Variables

- `--uiv-cyber-primary`: Primary accent color
- `--uiv-cyber-accent`: Secondary accent color (hover/lines)
- `--uiv-cyber-bg`: Table background
- `--uiv-cyber-text`: Text color
