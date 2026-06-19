# Zero UIV Heart Checkbox

A highly customizable, Uiverse-inspired Heart-shaped checkbox component for Lit.

## Features

- ✅ Smooth "heart-beat" animation on check
- ✅ SVG-based heart design
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via CSS variables and RendererAttributes
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-checkbox-heart.js" type="module"></script>
```

## Usage

```html
<zero-uiv-checkbox-heart 
    label="Add to Favorites" 
    heart-color="#ff4757"
    checked="true">
</zero-uiv-checkbox-heart>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | `'Like'` | Label text shown next to the heart |
| `checked` | boolean | `false` | Current state of the checkbox |
| `disabled` | boolean | `false` | Whether the checkbox is disabled |
| `heartColor` | string | `'#ff0000'` | Color of the heart when checked/hovered |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `change` | `{ checked: boolean }` | Fired when the state changes |

## CSS Variables

- `--uiv-heart-color`: Color of the heart
- `--uiv-heart-size`: Size of the heart (default 30px)
