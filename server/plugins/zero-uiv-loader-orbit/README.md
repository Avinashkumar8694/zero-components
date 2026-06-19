# Zero UIV Orbit Loader

A highly customizable, Uiverse-inspired Orbiting planet-style loader component for Lit.

## Features

- ✅ Smooth planetary orbit animation
- ✅ Central "sun" with glowing effects
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via RendererAttributes (Color, Size)
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-loader-orbit.js" type="module"></script>
```

## Usage

```html
<zero-uiv-loader-orbit 
    loader-color="#ffa502" 
    size="60">
</zero-uiv-loader-orbit>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `loaderColor` | string | `'#6c63ff'` | Theme color for the loader |
| `size` | number | `50` | Overall size of the loader in pixels |

## CSS Variables

- `--uiv-loader-color`: The primary color
- `--uiv-size`: The overall size
