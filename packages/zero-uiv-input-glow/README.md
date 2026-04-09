# Zero UIV Neon Input

A highly customizable, Uiverse-inspired Neon underline input component for Lit.

## Features

- ✅ Smooth glowing underline transition on focus
- ✅ Vibrant neon accent colors
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via CSS variables and RendererAttributes
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-input-neon.js" type="module"></script>
```

## Usage

```html
<zero-uiv-input-neon 
    label="Search Query" 
    placeholder="Type something..."
    neon-color="#ff00ff">
</zero-uiv-input-neon>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | `'Email Address'` | Label text shown above the input |
| `placeholder` | string | `'you@example.com'` | Placeholder text |
| `value` | string | `''` | Current value |
| `neonColor` | string | `'#00d2ff'` | The color of the underline and focus highlight |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `input` | `{ value: string }` | Fired on every keystroke |

## CSS Variables

- `--uiv-neon-color`: Main neon color
- `--uiv-text-color`: Main text color
