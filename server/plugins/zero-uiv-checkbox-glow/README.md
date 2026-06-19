# Zero UIV Neon Checkbox

A highly customizable, Uiverse-inspired Neon circular checkbox component for Lit.

## Features

- ✅ Glowing circular design
- ✅ Smooth scaling animation for the inner dot
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via CSS variables and RendererAttributes
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-checkbox-neon.js" type="module"></script>
```

## Usage

```html
<zero-uiv-checkbox-neon 
    label="Enable Effects" 
    neon-color="#00fbff"
    checked="true">
</zero-uiv-checkbox-neon>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | `'Neon Toggle'` | Label text shown next to the circle |
| `checked` | boolean | `false` | Current state of the checkbox |
| `disabled` | boolean | `false` | Whether the checkbox is disabled |
| `neonColor` | string | `'#00d2ff'` | The primary neon color for the circle and glow |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `change` | `{ checked: boolean }` | Fired when the state changes |

## CSS Variables

- `--uiv-neon-color`: Main neon color
- `--uiv-size`: Size of the checkbox (default 24px)
