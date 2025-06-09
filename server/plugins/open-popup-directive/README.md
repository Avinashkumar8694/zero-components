# Open Popup Directive

A Lit directive that provides declarative popup management capabilities. This directive allows you to easily attach popup functionality to any element in your web application.

## Features

- **Declarative Syntax**: Simple attribute-based popup configuration
- **Dynamic Popup Creation**: Automatically creates and manages popup instances
- **Configurable Positioning**: Multiple positioning options
- **Backdrop Support**: Optional backdrop with customizable settings
- **Flexible Dimensions**: Configurable width and height
- **Singleton Management**: Prevents duplicate popup instances
- **Event Integration**: Easy integration with click events

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/open-popup-directive/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML
```html
<!-- Basic Usage -->
<button 
    zero-open-popup-directive='{"webComponentSelector": "my-form", "position": "center"}'>
    Open Popup
</button>

<!-- Full Configuration -->
<button 
    zero-open-popup-directive='{
        "webComponentSelector": "settings-panel",
        "position": "right",
        "width": "400px",
        "height": "600px",
        "hasBackdrop": true
    }'>
    Open Settings
</button>
```

### JavaScript
```javascript
import { openPopupDirective } from '@zero-components/open-popup-directive';

// Register directive if needed
customElements.define('my-element', class extends LitElement {
    render() {
        return html`
            <div ${openPopupDirective({
                webComponentSelector: 'my-form',
                position: 'center',
                width: '300px',
                height: 'auto',
                hasBackdrop: true
            })}>
                Click to open
            </div>
        `;
    }
});
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `webComponentSelector` | `string` | Required | The web component to show in popup |
| `position` | `string` | `'center'` | Popup position ('center', 'top', 'right', etc.) |
| `width` | `string` | `'auto'` | Popup width (CSS value) |
| `height` | `string` | `'auto'` | Popup height (CSS value) |
| `hasBackdrop` | `boolean` | `true` | Whether to show backdrop |

## Events

| Event Phase | Event Type | Description |
|-------------|------------|-------------|
| Trigger | `click` | Opens the popup when element is clicked |
| Popup | `popup-open` | Fired when popup opens |
| Popup | `popup-close` | Fired when popup closes |

## Error Handling

The directive includes comprehensive error checking for:
- Invalid attribute usage
- Missing target elements
- Popup creation failures
- Invalid configurations

## Best Practices

1. Use unique selectors for different popup types
2. Consider cleanup when removing elements
3. Handle mobile responsiveness through configurations
4. Manage popup stacking order when using multiple popups
