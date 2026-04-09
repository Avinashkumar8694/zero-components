# Zero UIV Neon Button

A highly customizable, Uiverse-inspired Neon button component for Lit.

## Features

- ✅ Vibrant outer glow on hover
- ✅ Clean, minimalist border-only design (idle)
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via CSS variables and RendererAttributes
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-button-neon.js" type="module"></script>
```

## Usage

```html
<zero-uiv-button-neon 
    label="GLOW" 
    neon-color="#00fbff">
</zero-uiv-button-neon>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | `'Button'` | The text displayed on the button |
| `disabled` | boolean | `false` | Whether the button is disabled |
| `neonColor` | string | `'#00d2ff'` | The primary neon color used for border and glow |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `click` | `Event` | Standard click event |

## CSS Variables

- `--uiv-neon-color`: Main neon color
- `--uiv-neon-bg-hover`: Background color on hover (fills with neon color)
- `--uiv-neon-text-hover`: Text color on hover
