# Register Plugins

A plugin registration and management system for Zero Components. This package provides the core functionality for registering, managing, and communicating between Zero components and plugins.

## Features

- **Dynamic Plugin Registration**: Register plugins at runtime
- **Component Metadata Management**: Store and retrieve component metadata
- **Event Handling**: Automatic event listener management
- **Dependency Injection**: Built-in dependency injection system
- **Reflection Support**: Uses Reflect metadata for component introspection
- **Component Discovery**: Automatic component discovery and registration
- **Input/Output Management**: Handles component input/output bindings

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/register-plugins/1.0.0/js" type="module"></script>
```

## Basic Usage

### JavaScript
```javascript
import { RegisterPluginClass } from '@zero-components/register-plugins';

// Initialize the plugin registry
const registry = new RegisterPluginClass();

// Register a plugin
registry.registerPlugins('myPlugin', {
    onInit() {
        console.log('Plugin initialized');
    },
    // Plugin methods and properties
    doSomething() {
        // Plugin functionality
    }
});

// Access registered plugin
const plugin = registry.modules['myPlugin'];
plugin.doSomething();
```

### Component Registration
```javascript
import { RendererComponent, RendererAttribute } from 'zero-annotation';

@RendererComponent({
    name: 'my-component',
    version: '1.0.0',
    elementSelector: 'zero-my-component'
})
class MyComponent extends HTMLElement {
    @RendererAttribute({
        type: 'string',
        fieldMappings: 'myInput'
    })
    myInput = '';
}

// Component will be automatically registered when connected
customElements.define('zero-my-component', MyComponent);
```

## API Reference

### RegisterPluginClass

#### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `registerPlugins` | `key: string, value: object` | Registers a new plugin |
| `attachListeners` | - | Sets up component event listeners |

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `modules` | `object` | Registered plugins |
| `components` | `object` | Registered components |

### Component Metadata

| Property | Type | Description |
|----------|------|-------------|
| `name` | `string` | Component name |
| `version` | `string` | Component version |
| `elementSelector` | `string` | Custom element selector |
| `inputs` | `object` | Component input metadata |
| `outputs` | `object` | Component output metadata |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `element-connected` | Element info | Fired when component connects |

## Best Practices

1. **Plugin Structure**
   - Implement `onInit` for initialization
   - Keep plugins modular and focused
   - Handle cleanup in plugin destruction

2. **Component Registration**
   - Use decorators for metadata
   - Follow naming conventions
   - Document input/output bindings

3. **Error Handling**
   - Validate plugin registration
   - Handle missing dependencies
   - Provide fallback behavior

4. **Performance**
   - Lazy load plugins when possible
   - Minimize component reconnections
   - Cache metadata lookups
