# Zero UIV Modern Tooltip

A highly customizable, Uiverse-inspired Modern tooltip component for Lit.

## Features

- ✅ Smooth fade and slide animation
- ✅ Multiple position support (top, bottom, left, right)
- ✅ Adaptive width
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via RendererAttributes (Text, Position, Color)
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-tooltip-modern.js" type="module"></script>
```

## Usage

```html
<zero-uiv-tooltip-modern 
    text="This is a tooltip" 
    position="bottom"
    bg-color="#6c63ff">
    <button>Hover Me</button>
</zero-uiv-tooltip-modern>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | string | `'Tooltip text'` | The text to display inside the tooltip |
| `position` | string | `'top'` | Position relative to content: 'top', 'bottom', 'left', 'right' |
| `bgColor` | string | `'#333'` | Background color of the tooltip bubble |

## CSS Variables

- `--uiv-tooltip-bg`: Background color
- `--uiv-tooltip-text`: Text color
