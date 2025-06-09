# Popup Dropdown Directive

A directive-based dropdown component that can be applied to any HTML element to add dropdown functionality. Features automatic positioning, validation, smooth animations, and slot-based content integration. Perfect for adding dropdown menus to buttons, links, or any interactive elements.

## Features

- **Directive-Based**: Apply dropdown functionality to any HTML element using attributes
- **Automatic Positioning**: Smart positioning that adjusts based on viewport space
- **Slot Integration**: Content slots allow custom trigger elements
- **Input Validation**: Built-in validation for option arrays with detailed error messages
- **Event System**: Custom events for option selection with detailed data
- **Smooth Animations**: CSS transitions for opening/closing with transform effects
- **Responsive Design**: Adapts positioning based on available screen space
- **Visual Feedback**: Hover effects and selected state indicators

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/popup-dropdown-directive/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML Attribute (Directive Style)

```html
<!-- Basic dropdown directive -->
<div zero-popup-dropdown-directive='{"enabled": true, "options": [{"label": "Option 1", "value": "1"}, {"label": "Option 2", "value": "2"}]}'>
    Click here to open dropdown
</div>

<!-- Button with dropdown -->
<button zero-popup-dropdown-directive='{"enabled": true, "selectedValue": "theme1", "options": [{"label": "Light Theme", "value": "theme1"}, {"label": "Dark Theme", "value": "theme2"}, {"label": "Auto Theme", "value": "theme3"}]}'>
    Theme Settings
</button>

<!-- Link with dropdown -->
<a href="#" zero-popup-dropdown-directive='{"enabled": true, "options": [{"label": "Profile", "value": "profile"}, {"label": "Settings", "value": "settings"}, {"label": "Logout", "value": "logout"}]}'>
    Account Menu
</a>
```

### JavaScript (Programmatic)

```javascript
// Create and configure the directive component
const dropdownDirective = document.createElement('zero-popup-dropdown-directive-1.0.0');

// Configure dropdown options
dropdownDirective.enabled = true;
dropdownDirective.config = [
    { label: 'Edit Item', value: 'edit' },
    { label: 'Delete Item', value: 'delete' },
    { label: 'Share Item', value: 'share' }
];
dropdownDirective.selectedValue = 'edit';

// Add event listener for option selection
dropdownDirective.addEventListener('option-selected', (event) => {
    const { json_data } = event.detail;
    console.log('Selected option:', json_data);
    handleMenuAction(json_data.value);
});

// Append to trigger element
const triggerElement = document.getElementById('contextMenu');
triggerElement.appendChild(dropdownDirective);

function handleMenuAction(action) {
    switch(action) {
        case 'edit':
            console.log('Edit action triggered');
            break;
        case 'delete':
            console.log('Delete action triggered');
            break;
        case 'share':
            console.log('Share action triggered');
            break;
    }
}
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `boolean` | `false` | Whether the dropdown directive is active |
| `config` | `DropdownOption[]` | `[]` | Array of dropdown options (setter for options) |
| `options` | `DropdownOption[]` | `[]` | Internal options array |
| `open` | `boolean` | `false` | Current dropdown visibility state |
| `isValid` | `boolean` | `true` | Validation state of the options array |
| `errorMessage` | `string` | `''` | Current validation error message |
| `selectedValue` | `string` | `''` | Currently selected option value |

### DropdownOption Interface

```typescript
interface DropdownOption {
    label: string;   // Display text for the option
    value: string;   // Option value identifier
}
```

## Events

### option-selected

Triggered when a dropdown option is clicked.

**Event Detail:**
```typescript
{
  json_data: {
    label: string;  // Selected option label
    value: string;  // Selected option value
  }
}
```

**Example:**
```javascript
element.addEventListener('option-selected', (event) => {
    const { label, value } = event.detail.json_data;
    console.log(`Selected: ${label} (${value})`);
});
```

## CSS Variables

### Layout & Positioning
- `--dropdown-width`: Width of the dropdown menu (200px)
- `--dropdown-padding`: Internal padding of the dropdown (10px)
- `--dropdown-item-padding`: Padding for each dropdown item (10px)
- `--dropdown-z-index`: Z-index for dropdown positioning (1000)
- `--notch-left-offset`: Left offset for dropdown arrow (20px)
- `--notch-left-offset-before`: Arrow border adjustment (-10px)

### Colors & Styling
- `--dropdown-bg-color`: Background color of dropdown menu (#fff)
- `--dropdown-border-color`: Border color for dropdown and arrow (#ccc)
- `--dropdown-item-hover-bg`: Background color on item hover (#f0f0f0)
- `--selected-item-bg`: Background color for selected item (#e0e0e0)
- `--error-bg-color`: Background color for error state (#ffdddd)
- `--error-border-color`: Border color for error state (#ff5f5f)
- `--notch-border-color`: Arrow color (matches dropdown background)

### Effects
- `--dropdown-shadow`: Box shadow for dropdown menu
- `--dropdown-border-radius`: Border radius for dropdown container (6px)
- `--font-size-sm`: Font size for error messages

## Public Methods

### toggleDropdown()

Toggles the dropdown open/closed state and adjusts positioning.

```javascript
const directive = document.querySelector('zero-popup-dropdown-directive-1.0.0');
directive.toggleDropdown();
```

### validateInputs()

Validates the options array format and sets error states.

```javascript
const directive = document.querySelector('zero-popup-dropdown-directive-1.0.0');
directive.options = [/* invalid options */];
directive.validateInputs();
console.log(directive.isValid, directive.errorMessage);
```

### adjustPosition()

Automatically adjusts dropdown position based on viewport space.

```javascript
const directive = document.querySelector('zero-popup-dropdown-directive-1.0.0');
directive.adjustPosition();
```

### handleOptionClick(event)

Handles option selection and dispatches custom events.

## Advanced Examples

### Context Menu Implementation

```html
<div class="item-card" id="itemCard1">
    <h3>Product Item</h3>
    <p>Product description...</p>
    <button class="context-menu-trigger" zero-popup-dropdown-directive='{"enabled": true, "options": [{"label": "Edit", "value": "edit"}, {"label": "Duplicate", "value": "duplicate"}, {"label": "Delete", "value": "delete"}]}'>
        ⋮
    </button>
</div>

<script>
class ContextMenuManager {
    constructor() {
        this.setupContextMenus();
    }
    
    setupContextMenus() {
        document.querySelectorAll('[zero-popup-dropdown-directive]').forEach(element => {
            element.addEventListener('option-selected', (event) => {
                this.handleContextAction(event);
            });
        });
    }
    
    handleContextAction(event) {
        const { json_data } = event.detail;
        const action = json_data.value;
        const itemElement = event.target.closest('.item-card');
        const itemId = itemElement.id;
        
        switch(action) {
            case 'edit':
                this.editItem(itemId);
                break;
            case 'duplicate':
                this.duplicateItem(itemId);
                break;
            case 'delete':
                this.deleteItem(itemId);
                break;
        }
    }
    
    editItem(itemId) {
        console.log(`Editing item: ${itemId}`);
        // Implement edit logic
    }
    
    duplicateItem(itemId) {
        console.log(`Duplicating item: ${itemId}`);
        // Implement duplicate logic
    }
    
    deleteItem(itemId) {
        if (confirm('Are you sure you want to delete this item?')) {
            console.log(`Deleting item: ${itemId}`);
            // Implement delete logic
        }
    }
}

new ContextMenuManager();
</script>
```

### Dynamic Option Updates

```javascript
class DynamicDropdownDirective {
    constructor(element, initialOptions) {
        this.element = element;
        this.directive = this.createDirective(initialOptions);
        this.setupEventHandlers();
    }
      createDirective(options) {
        const directive = document.createElement('zero-popup-dropdown-directive-1.0.0');
        directive.enabled = true;
        directive.config = options;
        
        this.element.appendChild(directive);
        return directive;
    }
    
    setupEventHandlers() {
        this.directive.addEventListener('option-selected', (event) => {
            const selectedOption = event.detail.json_data;
            this.handleSelection(selectedOption);
        });
    }
    
    updateOptions(newOptions) {
        this.directive.config = newOptions;
        this.directive.validateInputs();
        
        if (!this.directive.isValid) {
            console.error('Invalid options:', this.directive.errorMessage);
        }
    }
    
    async loadOptionsFromAPI(endpoint) {
        try {
            const response = await fetch(endpoint);
            const options = await response.json();
            this.updateOptions(options);
        } catch (error) {
            console.error('Failed to load options:', error);
            this.updateOptions([
                { label: 'Error loading options', value: 'error' }
            ]);
        }
    }
    
    handleSelection(option) {
        console.log('Option selected:', option);
        this.directive.selectedValue = option.value;
    }
}

// Usage
const triggerElement = document.getElementById('dynamicTrigger');
const dynamicDropdown = new DynamicDropdownDirective(triggerElement, [
    { label: 'Loading...', value: 'loading' }
]);

// Load options from API
dynamicDropdown.loadOptionsFromAPI('/api/dropdown-options');
```

### Multi-level Dropdown Menu

```html
<nav class="navigation">
    <ul class="nav-list">
        <li class="nav-item">
            <a href="#" zero-popup-dropdown-directive='{"enabled": true, "options": [{"label": "Dashboard", "value": "dashboard"}, {"label": "Analytics", "value": "analytics"}, {"label": "Reports", "value": "reports"}]}'>
                Products
            </a>
        </li>
        <li class="nav-item">
            <a href="#" zero-popup-dropdown-directive='{"enabled": true, "options": [{"label": "User Management", "value": "users"}, {"label": "Role Settings", "value": "roles"}, {"label": "Permissions", "value": "permissions"}]}'>
                Settings
            </a>
        </li>
    </ul>
</nav>

<script>
class NavigationManager {
    constructor() {
        this.setupNavigation();
    }
    
    setupNavigation() {
        document.querySelectorAll('.nav-item [zero-popup-dropdown-directive]').forEach(navItem => {
            navItem.addEventListener('option-selected', (event) => {
                this.navigateTo(event.detail.json_data.value);
            });
        });
    }
    
    navigateTo(route) {
        console.log(`Navigating to: ${route}`);
        // Implement navigation logic
        window.location.hash = route;
    }
}

new NavigationManager();
</script>
```

### Form Integration with Validation

```html
<form id="configurationForm">
    <div class="form-group">
        <label>Language Preference:</label>
        <div class="dropdown-wrapper" zero-popup-dropdown-directive='{"enabled": true, "options": [{"label": "English", "value": "en"}, {"label": "Spanish", "value": "es"}, {"label": "French", "value": "fr"}]}'>
            Select Language
        </div>
        <span class="error-message" id="languageError"></span>
    </div>
    
    <div class="form-group">
        <label>Theme Preference:</label>
        <div class="dropdown-wrapper" zero-popup-dropdown-directive='{"enabled": true, "options": [{"label": "Light", "value": "light"}, {"label": "Dark", "value": "dark"}, {"label": "System", "value": "system"}]}'>
            Select Theme
        </div>
        <span class="error-message" id="themeError"></span>
    </div>
    
    <button type="submit">Save Configuration</button>
</form>

<script>
class FormValidationManager {
    constructor() {
        this.formData = {};
        this.setupForm();
    }
    
    setupForm() {
        const form = document.getElementById('configurationForm');
        
        // Setup dropdown listeners
        document.querySelectorAll('[zero-popup-dropdown-directive]').forEach(dropdown => {
            dropdown.addEventListener('option-selected', (event) => {
                this.updateFormData(event);
            });
        });
        
        // Setup form submission
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.validateAndSubmit();
        });
    }
    
    updateFormData(event) {
        const { json_data } = event.detail;
        const fieldName = this.getFieldName(event.target);
        this.formData[fieldName] = json_data.value;
        
        // Clear any previous errors
        this.clearFieldError(fieldName);
    }
    
    getFieldName(element) {
        const wrapper = element.closest('.form-group');
        const label = wrapper.querySelector('label').textContent;
        return label.toLowerCase().replace(' preference:', '');
    }
    
    validateAndSubmit() {
        let isValid = true;
        
        if (!this.formData.language) {
            this.showFieldError('language', 'Please select a language');
            isValid = false;
        }
        
        if (!this.formData.theme) {
            this.showFieldError('theme', 'Please select a theme');
            isValid = false;
        }
        
        if (isValid) {
            this.submitForm();
        }
    }
    
    showFieldError(fieldName, message) {
        const errorElement = document.getElementById(`${fieldName}Error`);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    clearFieldError(fieldName) {
        const errorElement = document.getElementById(`${fieldName}Error`);
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    
    submitForm() {
        console.log('Form submitted:', this.formData);
        // Implement form submission logic
    }
}

new FormValidationManager();
</script>
```

## Styling Customization

### Custom Dropdown Appearance

```css
zero-popup-dropdown-directive {
    --dropdown-bg-color: #2d3748;
    --dropdown-border-color: #4a5568;
    --dropdown-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    --dropdown-item-hover-bg: #4a5568;
    --selected-item-bg: #63b3ed;
    --dropdown-border-radius: 8px;
    --dropdown-width: 250px;
}

/* Custom arrow styling */
zero-popup-dropdown-directive .notch {
    --notch-border-color: #4a5568;
}
```

### Compact Menu Style

```css
.compact-dropdown {
    --dropdown-padding: 5px;
    --dropdown-item-padding: 5px 10px;
    --dropdown-width: 150px;
    --dropdown-border-radius: 4px;
}
```

### Error State Styling

```css
zero-popup-dropdown-directive[isValid="false"] {
    --dropdown-bg-color: #ffdddd;
    --dropdown-border-color: #ff5f5f;
}

.error-message {
    color: var(--error-border-color);
    font-size: 0.8em;
    margin-top: 5px;
    display: none;
}
```

## Accessibility

The component follows accessibility best practices:

- **Keyboard Navigation**: Arrow keys to navigate options, Enter to select, Escape to close
- **ARIA Support**: Proper ARIA labels and role assignments
- **Focus Management**: Clear focus indicators and logical tab order
- **Screen Reader Friendly**: Announces dropdown state and selection changes

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: Uses CSS transforms, transitions, and modern JavaScript

## Related Components

- `popup-dropdown` - Standard popup dropdown component
- `zero-dropdown` - Full-featured dropdown with more options
- `zero-input-widgets` - Form demo including various dropdown types

## License

MIT License - see LICENSE file for details.
