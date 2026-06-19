# Zero UIV Cyber Input

A highly customizable, Uiverse-inspired Cyberpunk input component for Lit.

## Features

- ✅ Glitchy double-border effect
- ✅ Angular polygon clip-path design
- ✅ Subtle grid background on focus
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via CSS variables and RendererAttributes
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-input-cyber.js" type="module"></script>
```

## Usage

```html
<zero-uiv-input-cyber 
    label="Authorization Code" 
    placeholder="000-000-000"
    primary-color="#00fbff">
</zero-uiv-input-cyber>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | `'Access Key'` | Label text shown above the input |
| `placeholder` | string | `'ENTER KEY...'` | Placeholder text |
| `value` | string | `''` | Current value |
| `primaryColor` | string | `'#ff003c'` | Primary accent and border color |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `input` | `{ value: string }` | Fired on every keystroke |

## CSS Variables

- `--uiv-cyber-primary`: Primary accent color
- `--uiv-cyber-bg`: Inner background color
- `--uiv-cyber-text`: Main text color
