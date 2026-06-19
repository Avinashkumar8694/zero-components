# Zero UIV Glass Card

A highly customizable, Uiverse-inspired Glassmorphism card component for Lit.

## Features

- ✅ Backdrop blur and semi-transparent background
- ✅ 3D hover tilt animation
- ✅ Glossy "light-sweep" effect on hover
- ✅ Pure CSS (No Tailwind)
- ✅ Slot support for header, content, and footer
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-card-glass.js" type="module"></script>
```

## Usage

```html
<zero-uiv-card-glass title="Featured Product">
    <div slot="header"><img src="thumb.jpg" /></div>
    <p>Explore the new collection with premium glass designs.</p>
    <button slot="footer">Buy Now</button>
</zero-uiv-card-glass>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | string | `'Card Title'` | The title displayed in the card |
| `content` | string | `'...'` | Default text content if no slot is used |

## CSS Variables

- `--uiv-card-bg`: Background color (RGBA)
- `--uiv-card-blur`: Backdrop blur amount
- `--uiv-card-text`: Primary text color
- `--uiv-card-border`: Border color
