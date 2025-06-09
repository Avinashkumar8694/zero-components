# Dynamic JS Injector

A utility package for dynamically loading and injecting JavaScript modules into web applications. This package provides a clean and efficient way to load external JavaScript resources at runtime.

## Features

- **Dynamic Script Loading**: Load JavaScript files at runtime
- **Module Support**: Native ES6 module loading support
- **Asynchronous Loading**: Non-blocking script injection
- **Load Status Tracking**: Success and error handling for each script
- **Multiple Script Support**: Load multiple scripts in parallel
- **Error Handling**: Comprehensive error reporting
- **Zero Component Integration**: Seamless integration with Zero framework

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/dynamic-js-injector/1.0.0/js" type="module"></script>
```

## Basic Usage

### JavaScript
```javascript
import { DynamicJsInjector } from '@zero-components/dynamic-js-injector';

// Define scripts to load
const scripts = [
    'https://example.com/module1.js',
    'https://example.com/module2.js'
];

// Initialize injector
const injector = new DynamicJsInjector(scripts);

// Register with Zero framework
zero.registerPlugins('dynamicJsInjector', injector);

// Or use standalone
injector.loadScripts();
```

### With Zero Framework
```javascript
// Auto-initialization
const scriptsToLoad = [
    '/plugins/component1.js',
    '/plugins/component2.js'
];

zero.registerPlugins('dynamicJsInjector', new DynamicJsInjector(scriptsToLoad));
```

## Class Reference

### DynamicJsInjector

#### Constructor
```javascript
constructor(scripts: string[])
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `scripts` | `string[]` | Array of script URLs to load |

#### Methods

| Method | Description |
|--------|-------------|
| `onInit()` | Initialize plugin and load scripts if Zero client is available |
| `loadScripts()` | Load all configured scripts |

## Script Loading Options

Each script is loaded with the following attributes:
- `type="module"`: Loaded as ES6 module
- `async=true`: Asynchronous loading
- `src`: Source URL for the script

## Events

Scripts emit the following events:
- `load`: When script loads successfully
- `error`: When script fails to load

## Error Handling

The injector includes error handling for:
- Invalid script URLs
- Loading failures
- Missing dependencies
- Framework initialization issues

## Best Practices

1. **Script Management**
   - Group related scripts together
   - Consider loading order dependencies
   - Use absolute URLs when possible

2. **Performance**
   - Load scripts only when needed
   - Use async loading for non-critical scripts
   - Monitor loading performance

3. **Error Recovery**
   - Implement fallback behavior
   - Log loading failures
   - Retry failed loads if appropriate

4. **Security**
   - Validate script sources
   - Use HTTPS URLs
   - Implement CSP headers
