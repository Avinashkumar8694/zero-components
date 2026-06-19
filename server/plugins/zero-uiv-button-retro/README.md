# Zero UIV Retro Button

A highly customizable, Uiverse-inspired Retro 3D button component for Lit.

## Features

- ✅ Chunky 3D "pressable" look
- ✅ Hard shadow and thick borders
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via CSS variables and RendererAttributes
- ✅ ADA Compliant

```html
<script src="path/to/zero-uiv-button-retro.js" type="module"></script>
```

## Dependencies

- `zero-annotation`: For renderer decorators and metadata.
- `zero-uiv-themes`: For shared retro styling tokens and base layouts.
- `lit`: Core component framework.

## Usage

```html
<zero-uiv-button-retro 
    label="PUNCH IT" 
    bg-color="#ffde00"
    border-color="#000">
</zero-uiv-button-retro>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | `'Button'` | The text displayed on the button |
| `disabled` | boolean | `false` | Whether the button is disabled |
| `bgColor` | string | `'#f3f3f3'` | Background color |
| `borderColor` | string | `'#000'` | Border and shadow color |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `click` | `Event` | Standard click event |

## CSS Variables

- `--uiv-retro-bg`: Background color
- `--uiv-retro-border`: Border color
- `--uiv-retro-shadow`: Shadow color
- `--uiv-retro-text`: Text color
