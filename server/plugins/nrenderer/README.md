# Nrenderer

A dynamic form rendering component built with Lit Element. This component provides a flexible way to render form elements and other web components in a structured layout.

## Features

- **Dynamic Form Rendering**: Render form elements dynamically
- **Web Component Integration**: Seamless integration with other Zero components
- **Flexible Layout**: Column-based form layout system
- **Customizable Styling**: CSS customization options
- **Component Composition**: Support for nested components

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/nrenderer/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML
```html
<!-- Basic Renderer -->
<zero-nrenderer-1.0.0 id="myRenderer">
    <!-- Content will be rendered here -->
</zero-nrenderer-1.0.0>
```

### JavaScript
```javascript
// Basic setup
const renderer = document.querySelector('#myRenderer');

// Add components dynamically
renderer.addComponent('zero-popup-dropdown-directive', {
    enabled: true,
    config: [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" }
    ]
});

// Event handling
renderer.addEventListener('render-complete', (event) => {
    console.log('Rendering completed');
});
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `components` | `array` | `[]` | Array of components to render |
| `layout` | `object` | `{}` | Layout configuration |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--form-gap` | `16px` | Gap between form elements |
| `--form-padding` | `16px` | Form padding |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `render-complete` | - | Fired when rendering is complete |
| `component-added` | Component info | Fired when a component is added |

## Accessibility

The renderer implements standard form accessibility features:
- Proper form structure
- Label associations
- ARIA attributes for form elements
