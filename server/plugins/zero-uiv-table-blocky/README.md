# Zero UIV Retro Table

A highly customizable, Uiverse-inspired Retro table component for Lit.

## Features

- ✅ Boxy, chunky 3D look with hard shadows
- ✅ Mono-spaced font for a terminal/retro software feel
- ✅ Terminal-style header decoration with mock window controls
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via RendererAttributes (Header Label)
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-table-retro.js" type="module"></script>
```

## Usage

```html
<zero-uiv-table-retro 
    header-label="LOG_FILE_2024.txt"
    .columns="${[{key: 'time', label: 'Timestamp'}, {key: 'msg', label: 'Message'}]}"
    .data="${[{time: '12:00', msg: 'System Up'}, {time: '12:05', msg: 'Init Success'}]}">
</zero-uiv-table-retro>
```

## CSS Variables

- `--uiv-retro-border`: Primary border and shadow color
- `--uiv-retro-bg`: Background color
- `--uiv-retro-accent`: Header background color
- `--uiv-retro-text`: Primary text color
