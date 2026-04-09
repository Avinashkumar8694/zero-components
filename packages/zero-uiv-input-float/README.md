# Zero UIV Floating Input

A highly customizable, Uiverse-inspired Floating Label input component for Lit.

## Features

- ✅ Minimalist design with animated floating labels
- ✅ Smooth bottom-border transition on focus
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via CSS variables and RendererAttributes
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-input-floating.js" type="module"></script>
```

## Usage

```html
<zero-uiv-input-floating 
    label="Email Address" 
    type="email"
    focus-color="#00d2ff">
</zero-uiv-input-floating>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | `'Username'` | Label text that floats up on focus/value |
| `value` | string | `''` | Current value of the input |
| `type` | string | `'text'` | Input type (text, password, email, etc.) |
| `disabled` | boolean | `false` | Whether the input is disabled |
| `focusColor` | string | `'#6c63ff'` | The color of the label and border when focused |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `input` | `{ value: string }` | Fired on every keystroke |

## CSS Variables

- `--uiv-input-bg`: Background color
- `--uiv-input-border`: Default border color
- `--uiv-input-focus`: Focus highlight color
- `--uiv-input-text`: Main text color
- `--uiv-label-text`: Label color (idle)
