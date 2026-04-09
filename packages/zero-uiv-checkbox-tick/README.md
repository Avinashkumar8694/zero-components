# Zero UIV Tick Checkbox

A highly customizable, Uiverse-inspired Classic Tick checkbox component for Lit.

## Features

- ✅ Classic square design with animated checkmark
- ✅ Fully customizable via CSS variables and RendererAttributes
- ✅ Pure CSS (No Tailwind)
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-checkbox-tick.js" type="module"></script>
```

## Usage

```html
<zero-uiv-checkbox-tick 
    label="I Agree" 
    primary-color="#2ed573"
    checked="true">
</zero-uiv-checkbox-tick>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | `'Standard Check'` | Label text shown next to the checkbox |
| `checked` | boolean | `false` | Current state of the checkbox |
| `disabled` | boolean | `false` | Whether the checkbox is disabled |
| `primaryColor` | string | `'#6c63ff'` | The primary color for the checked state |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `change` | `{ checked: boolean }` | Fired when the state changes |

## CSS Variables

- `--uiv-tick-color`: Main color when checked
- `--uiv-size`: Size of the checkbox (default 20px)
