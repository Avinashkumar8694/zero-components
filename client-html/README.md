# Client HTML Examples - Loading Lit Components

This folder demonstrates how to load and use Lit components from the zero-components library in standard HTML pages.

## 📁 Files

- **`index.html`** - Comprehensive example with multiple use cases
- **`simple-example.html`** - Basic example focusing on component loading
- **`README.md`** - This documentation file

## 🚀 How to Run

1. **Start the server** (from the root directory):
   ```bash
   cd server
   node index.js
   ```
   The server will run on `http://localhost:5555/service`

2. **Open the HTML files** in your browser:
   - Open the files directly in your browser (file:// protocol)
   - Or serve this folder through a web server

## 🧩 How Lit Components are Loaded

### 1. Script Import
The components are loaded as ES modules from the server:

```html
<script type="module" src="http://localhost:5555/service/plugins/zero-checkbox/zero-checkbox.js"></script>
```

### 2. Component Usage
Once loaded, you can use them like any HTML element:

```html
<zero-checkbox 
    label="Accept Terms" 
    description="I agree to the terms and conditions"
    value="terms-accepted">
</zero-checkbox>
```

### 3. JavaScript Interaction
You can interact with the components using JavaScript:

```javascript
// Get component reference
const checkbox = document.querySelector('zero-checkbox');

// Set properties
checkbox.checked = true;
checkbox.label = "New label";
checkbox.checkboxStyle = "switch";

// Listen to events
checkbox.addEventListener('change', (event) => {
    console.log('Checked:', event.detail.checked);
    console.log('Value:', event.detail.value);
});
```

## 🎨 Component Features Demonstrated

### Zero Checkbox Component
- **Multiple Styles**: Default, Custom (rounded), Switch
- **Properties**: 
  - `label` - Checkbox label text
  - `description` - Helper text below the checkbox
  - `value` - Value associated with the checkbox
  - `checked` - Checked state (boolean)
  - `disabled` - Disabled state (boolean)
  - `required` - Required for forms (boolean)
  - `checkbox-style` - Visual style ("default", "custom", "switch")
  - `error-message` - Error message text
  - `show-error` - Show error state (boolean)

- **Events**:
  - `change` - Fired when checkbox state changes
    - `event.detail.checked` - Boolean checked state
    - `event.detail.value` - String value
    - `event.detail.indeterminate` - Boolean indeterminate state

## 🎯 Key Learning Points

### 1. **Module Loading**
Lit components are loaded as ES modules, enabling modern JavaScript features and proper encapsulation.

### 2. **Web Components Standards**
The components follow Web Components standards:
- Custom Elements
- Shadow DOM
- HTML Templates
- ES Modules

### 3. **CSS Custom Properties**
Components use CSS custom properties (variables) for theming:
```css
:root {
    --primary-color: #6c63ff;
    --text-primary: #333;
    --border-color: #ddd;
    /* ... more variables */
}
```

### 4. **Event Handling**
Components dispatch custom events with detailed information in the `event.detail` object.

### 5. **Dynamic Properties**
All component properties can be set and changed dynamically via JavaScript.

## 🔧 Customization

### Styling
You can customize the appearance using CSS custom properties:

```css
:root {
    --primary-color: #your-color;
    --text-primary: #your-text-color;
    --border-radius-sm: 8px;
}
```

### JavaScript API
```javascript
// Property access
checkbox.checked = true;
checkbox.label = "New label";

// Method calls (if available)
checkbox.focus();

// Event listeners
checkbox.addEventListener('change', handleChange);
```

## 🌐 Server Configuration

The components are served from the server's `/plugins` endpoint:
- Base URL: `http://localhost:3000`
- Plugin path: `/plugins/zero-checkbox/zero-checkbox.js`
- Static file serving enabled in `server/index.js`

## 📝 Notes

1. **CORS**: The server is configured with CORS to allow cross-origin requests
2. **ES Modules**: Use `type="module"` in script tags
3. **Custom Elements**: Components are registered with versioned names (e.g., `zero-checkbox-1.0.0`)
4. **Browser Support**: Modern browsers that support Web Components and ES modules

## 🚀 Next Steps

1. Try modifying the component properties in the browser console
2. Create your own HTML page using different zero components
3. Explore other components in the `/server/plugins/` directory
4. Check the browser developer tools to see how the Shadow DOM works
