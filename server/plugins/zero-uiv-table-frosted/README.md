# Zero UIV Glass Table

A highly customizable, Uiverse-inspired Glassmorphism table component for Lit.

## Features

- ✅ Backdrop blur and semi-transparent backgrounds
- ✅ Border-radius on the main container for a soft look
- ✅ Table rows with subtle transparency and spacing
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via RendererAttributes (Text Color, Caption)
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-table-glass.js" type="module"></script>
```

## Usage

```html
<zero-uiv-table-glass 
    caption="Inventory"
    text-color="#ffffff"
    .columns="${[{key: 'item', label: 'Item'}, {key: 'qty', label: 'Quantity'}]}"
    .data="${[{item: 'Lens', qty: 12}, {item: 'Prism', qty: 5}]}">
</zero-uiv-table-glass>
```

## CSS Variables

- `--uiv-glass-bg`: Container background
- `--uiv-glass-border`: Container border
- `--uiv-glass-text`: Primary text color
- `--uiv-glass-blur`: Backdrop blur amount
