# Popup Dialog

A flexible and customizable popup dialog component built with Lit Element. This component provides a reusable overlay dialog that can be used to display any content or other web components.

## Features

- **Dynamic Content**: Can host any web component or HTML content
- **Backdrop Support**: Optional backdrop with customizable opacity
- **Positioning**: Multiple position options (center, top, bottom, etc.)
- **Customizable Styling**: Extensive theme customization options
- **Input/Output Configuration**: Support for dynamic input/output bindings
- **Responsive Design**: Adapts to different screen sizes
- **Keyboard Navigation**: Supports Escape key to close
- **Focus Management**: Manages focus trap within dialog

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/popup-dialog/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML
```html
<!-- Basic Dialog -->
<zero-popup-dialog-1.0.0 id="myDialog">
    <div slot="content">
        <h2>Dialog Title</h2>
        <p>Dialog content goes here...</p>
    </div>
</zero-popup-dialog-1.0.0>

<!-- Dialog with Custom Web Component -->
<zero-popup-dialog-1.0.0 
    id="componentDialog"
    .config="${{
        webComponentSelector: 'my-custom-component',
        inputs: {
            data: myData
        },
        position: 'center'
    }}">
</zero-popup-dialog-1.0.0>
```

### JavaScript
```javascript
// Basic usage
const dialog = document.querySelector('#myDialog');
dialog.open = true;

// Configuration
dialog.hasBackdrop = true;
dialog.config = {
    webComponentSelector: 'custom-form',
    inputs: {
        initialData: { /* ... */ }
    },
    outputs: {
        onSubmit: (data) => console.log('Form submitted:', data)
    },
    position: 'center'
};

// Event handling
dialog.addEventListener('close', () => {
    console.log('Dialog closed');
});
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls dialog visibility |
| `hasBackdrop` | `boolean` | `true` | Shows/hides backdrop overlay |
| `config` | `object` | `{}` | Configuration object for dialog |
| `config.webComponentSelector` | `string` | `''` | Web component to render in dialog |
| `config.inputs` | `object` | `{}` | Input properties for child component |
| `config.outputs` | `object` | `{}` | Output handlers for child component |
| `config.position` | `string` | `'center'` | Dialog position ('center', 'top', 'bottom') |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--popup-bg-color` | `#fff` | Background color |
| `--popup-border-color` | `#ddd` | Border color |
| `--popup-hover-border-color` | `#ccc` | Border color on hover |
| `--popup-font-color` | `#333` | Text color |
| `--popup-shadow-color` | `rgba(0,0,0,0.1)` | Shadow color |
| `--popup-border-radius` | `6px` | Border radius |
| `--popup-font-size` | `12px` | Base font size |
| `--popup-header-color` | `#666` | Header text color |
| `--popup-icon-color` | `#666` | Icon color |
| `--popup-width` | `180px` | Default width |
| `--popup-padding` | `8px` | Inner padding |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `open` | - | Fired when dialog opens |
| `close` | - | Fired when dialog closes |
| `backdrop-click` | - | Fired when backdrop is clicked |

## Accessibility

The dialog component implements the following accessibility features:
- ARIA roles and attributes for dialog semantics
- Focus management with focus trap
- Keyboard navigation support
- Screen reader announcements
