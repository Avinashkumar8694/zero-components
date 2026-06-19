# Zero UIV Cyber Button

A highly customizable, Uiverse-inspired Cyberpunk button component for Lit.

## Features

- ✅ Neon/Cyberpunk glitch effects on hover
- ✅ Custom tag text (e.g., R25)
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via CSS variables and RendererAttributes
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-button-cyber.js" type="module"></script>
```

## Usage

```html
<zero-uiv-button-cyber 
    label="Start Mission" 
    tag="TOP SECRET"
    primary-color="#ff003c"
    shadow-color="#00e6f6">
</zero-uiv-button-cyber>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | `'Button'` | The text displayed on the button |
| `tag` | string | `'R25'` | Small tag text in the corner |
| `disabled` | boolean | `false` | Whether the button is disabled |
| `primaryColor` | string | `'#ff003c'` | Primary background and glitch color |
| `shadowColor` | string | `'#00e6f6'` | Glitch shadow color |
| `tagBgColor` | string | `'#f8f005'` | Background color for the corner tag |
| `tagTextColor` | string | `'#000'` | Text color for the corner tag |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `click` | `Event` | Standard click event |

## CSS Variables

You can also customize the component using these CSS variables:

- `--uiv-primary`: Primary color
- `--uiv-shadow`: Shadow/Glitch color
- `--uiv-tag-bg`: Tag background
- `--uiv-tag-color`: Tag text color
- `--uiv-text-color`: Main button text color
