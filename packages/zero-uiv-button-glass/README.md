# Zero UIV Glass Button

A highly customizable, Uiverse-inspired Glassmorphism button component for Lit.

## Features

- ✅ Backdrop blur effects
- ✅ Glossy hover animation
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via CSS variables and RendererAttributes
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-button-glass.js" type="module"></script>
```

## Usage

```html
<zero-uiv-button-glass 
    label="Explore" 
    bg-color="rgba(255, 255, 255, 0.2)"
    text-color="#fff">
</zero-uiv-button-glass>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | `'Button'` | The text displayed on the button |
| `disabled` | boolean | `false` | Whether the button is disabled |
| `bgColor` | string | `'rgba(255, 255, 255, 0.1)'` | Glass background color |
| `textColor` | string | `'#fff'` | Button text color |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `click` | `Event` | Standard click event |

## CSS Variables

- `--uiv-glass-bg`: Glass background color
- `--uiv-glass-text`: Text color
- `--uiv-glass-blur`: Backdrop blur amount (default 10px)
- `--uiv-glass-border`: Border color
