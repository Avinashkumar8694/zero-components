# Zero UIV Neon Radio

A highly customizable, Uiverse-inspired Neon radio button component for Lit.

## Features

- ✅ Glowing circular radio button
- ✅ Smooth scaling animation on selection
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via RendererAttributes (Neon Color, Value, Name)
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-radio-neon.js" type="module"></script>
```

## Usage

```html
<zero-uiv-radio-neon 
    label="Option A" 
    name="group1"
    value="a"
    neon-color="#ff00c1">
</zero-uiv-radio-neon>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | `'Option'` | Label text shown next to the radio button |
| `value` | string | `''` | Value of this radio option |
| `name` | string | `'radio-group'` | Name attribute for grouping |
| `neonColor` | string | `'#ff00c1'` | Color of the radio button and glow |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `change` | `{ checked: boolean, value: string }` | Fired when selection changes |

## CSS Variables

- `--uiv-neon-color`: Main accent color
