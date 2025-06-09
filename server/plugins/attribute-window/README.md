# Attribute Window

A dynamic form generator component that creates interactive attribute panels based on configuration data. Automatically generates appropriate input controls for different data types and provides real-time updates to target components. Perfect for property panels, configuration dialogs, and dynamic form creation.

## Features

- **Dynamic Form Generation**: Creates forms based on configuration arrays
- **Multi-Input Support**: Supports all major input types (text, password, dropdown, checkbox, range, color, file, date)
- **Real-time Updates**: Changes immediately update target component properties
- **Dark Theme Design**: Modern dark UI with smooth transitions and hover effects
- **Type Safety**: Full TypeScript support with proper type checking
- **Event Integration**: Automatic event binding and handling
- **Responsive Layout**: Adapts to different container sizes
- **Validation Support**: Built-in validation for different input types

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/attribute-window/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML (Configuration-based)

```html
<zero-attribute-window id="attributePanel"></zero-attribute-window>

<script>
// Configure the attribute window
const attributePanel = document.getElementById('attributePanel');
attributePanel.AttributeWindowAttributes = [
    {
        fieldMappings: 'title',
        uiComponentType: 'TEXT_INPUT',
        displayLabel: 'Title',
        placeholderText: 'Enter title',
        initialValue: 'Default Title'
    },
    {
        fieldMappings: 'isEnabled',
        uiComponentType: 'CHECKBOX',
        displayLabel: 'Enable Feature',
        initialValue: true
    },
    {
        fieldMappings: 'color',
        uiComponentType: 'COLOR_PICKER',
        displayLabel: 'Primary Color',
        initialValue: '#6c63ff'
    }
];
</script>
```

### JavaScript (Dynamic Configuration)

```javascript
// Create and configure the attribute window
const attributeWindow = document.createElement('zero-attribute-window');

// Define attribute configuration
const attributeConfig = [
    {
        fieldMappings: 'username',
        uiComponentType: 'TEXT_INPUT',
        displayLabel: 'Username',
        placeholderText: 'Enter username',
        initialValue: ''
    },
    {
        fieldMappings: 'password',
        uiComponentType: 'PASSWORD_INPUT',
        displayLabel: 'Password',
        placeholderText: 'Enter password',
        initialValue: ''
    },
    {
        fieldMappings: 'userRole',
        uiComponentType: 'DROPDOWN',
        displayLabel: 'User Role',
        optionItems: [
            { value: 'admin', label: 'Administrator' },
            { value: 'user', label: 'Standard User' },
            { value: 'guest', label: 'Guest User' }
        ],
        initialValue: 'user'
    },
    {
        fieldMappings: 'age',
        uiComponentType: 'RANGE_SLIDER',
        displayLabel: 'Age',
        optionItems: { min: 18, max: 100 },
        initialValue: 25
    },
    {
        fieldMappings: 'newsletter',
        uiComponentType: 'CHECKBOX',
        displayLabel: 'Subscribe to Newsletter',
        initialValue: false
    }
];

// Set the configuration
attributeWindow.AttributeWindowAttributes = attributeConfig;

// Append to DOM
document.body.appendChild(attributeWindow);
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `AttributeWindowAttributes` | `AttributeConfig[]` | `[]` | Array of attribute configurations for form generation |
| `attr` | `AttributeConfig[]` | `[]` | Internal property storing the attribute configuration |

### AttributeConfig Interface

```typescript
interface AttributeConfig {
    fieldMappings: string;                    // Property name to bind to
    uiComponentType: UserInterfaceType;       // Type of input control
    displayLabel: string;                     // Label text for the input
    placeholderText?: string;                 // Placeholder text (for text inputs)
    initialValue?: any;                       // Default value
    optionItems?: DropdownOptionItem[] | RangeSettings; // Options for dropdowns/ranges
    eventTrigger?: string;                    // Event name for event handlers
}

interface DropdownOptionItem {
    value: string | number;
    label: string;
}

interface RangeSettings {
    min: number;
    max: number;
}
```

## Supported Input Types

| UserInterfaceType | Input Element | Description |
|-------------------|---------------|-------------|
| `TEXT_INPUT` | `<input type="text">` | Standard text input field |
| `PASSWORD_INPUT` | `<input type="password">` | Password input with hidden text |
| `TEXTAREA` | `<textarea>` | Multi-line text input |
| `CHECKBOX` | `<input type="checkbox">` | Boolean toggle checkbox |
| `RADIO_BUTTON` | `<input type="radio">` | Radio button group |
| `DROPDOWN` | `<select>` | Single-selection dropdown |
| `MULTI_SELECT` | `<select multiple>` | Multi-selection dropdown |
| `RANGE_SLIDER` | `<input type="range">` | Numeric range slider |
| `COLOR_PICKER` | `<input type="color">` | Color selection input |
| `FILE_INPUT` | `<input type="file">` | File upload input |
| `DATE_PICKER` | `<input type="date">` | Date selection input |
| `POPUP_DROPDOWN` | `zero-popup-dropdown` | Custom popup dropdown component |

## CSS Variables

### Layout & Spacing
- `--header-height`: Header height for layout (50px)
- `--sidenav-width`: Sidebar width for navigation (250px)
- `--spacing-sm`: Small spacing (10px) - header padding
- `--spacing-md`: Medium spacing (15px) - navigation padding
- `--spacing-lg`: Large spacing (20px) - navigation padding
- `--spacing-xl`: Extra large spacing (30px) - hover indent

### Typography
- `--font-family`: Font family ('Roboto', sans-serif)
- `--font-size-lg`: Large font size (18px-22px) - navigation, buttons

### Colors & Theme
- `--primary-color`: Primary color (#333) - borders, highlights
- `--secondary-color`: Secondary color (#1C1C1C) - input backgrounds, containers
- `--text-color`: Text color (#E0E0E0) - primary text
- `--background-color`: Background color (#121212) - main background
- `--hover-color`: Hover color (#444) - hover states

### Effects & Transitions
- `--transition-speed`: Animation speed (0.3s) - all transitions
- `--shadow-md`: Medium shadow for depth effects

## Public Methods

### prepareAttributeWindow(componentName: string)

Generates the attribute window form based on the current configuration.

```javascript
const attributeWindow = document.querySelector('zero-attribute-window');
attributeWindow.prepareAttributeWindow('my-component');
```

### createInputElement(key: string, config: AttributeConfig, customElement: HTMLElement)

Creates an individual input element based on the configuration.

```javascript
const inputElement = attributeWindow.createInputElement(
    'username',
    {
        uiComponentType: 'TEXT_INPUT',
        displayLabel: 'Username',
        placeholderText: 'Enter username'
    },
    targetElement
);
```

## Advanced Examples

### Dynamic Property Panel

```html
<div class="property-editor">
    <div class="target-component" id="targetComponent">
        <!-- Target component that will be modified -->
    </div>
    <zero-attribute-window id="propertyPanel"></zero-attribute-window>
</div>

<script>
class PropertyEditor {
    constructor() {
        this.targetComponent = document.getElementById('targetComponent');
        this.propertyPanel = document.getElementById('propertyPanel');
        this.setupPropertyPanel();
    }
    
    setupPropertyPanel() {
        const componentProperties = [
            {
                fieldMappings: 'width',
                uiComponentType: 'RANGE_SLIDER',
                displayLabel: 'Width',
                optionItems: { min: 100, max: 800 },
                initialValue: 400
            },
            {
                fieldMappings: 'height',
                uiComponentType: 'RANGE_SLIDER',
                displayLabel: 'Height',
                optionItems: { min: 50, max: 400 },
                initialValue: 200
            },
            {
                fieldMappings: 'backgroundColor',
                uiComponentType: 'COLOR_PICKER',
                displayLabel: 'Background Color',
                initialValue: '#ffffff'
            },
            {
                fieldMappings: 'borderRadius',
                uiComponentType: 'RANGE_SLIDER',
                displayLabel: 'Border Radius',
                optionItems: { min: 0, max: 50 },
                initialValue: 8
            },
            {
                fieldMappings: 'visible',
                uiComponentType: 'CHECKBOX',
                displayLabel: 'Visible',
                initialValue: true
            }
        ];
        
        this.propertyPanel.AttributeWindowAttributes = componentProperties;
        
        // Listen for property changes
        this.propertyPanel.addEventListener('input', (event) => {
            this.updateTargetComponent(event);
        });
    }
    
    updateTargetComponent(event) {
        const propertyName = event.target.id;
        const propertyValue = event.target.value || event.target.checked;
        
        // Apply styles to target component
        switch(propertyName) {
            case 'width':
                this.targetComponent.style.width = `${propertyValue}px`;
                break;
            case 'height':
                this.targetComponent.style.height = `${propertyValue}px`;
                break;
            case 'backgroundColor':
                this.targetComponent.style.backgroundColor = propertyValue;
                break;
            case 'borderRadius':
                this.targetComponent.style.borderRadius = `${propertyValue}px`;
                break;
            case 'visible':
                this.targetComponent.style.display = propertyValue ? 'block' : 'none';
                break;
        }
    }
}

new PropertyEditor();
</script>
```

### Form Configuration Builder

```javascript
class FormConfigurationBuilder {
    constructor() {
        this.attributeWindow = document.createElement('zero-attribute-window');
        this.formConfig = [];
        this.setupConfigBuilder();
    }
    
    setupConfigBuilder() {
        const builderConfig = [
            {
                fieldMappings: 'formTitle',
                uiComponentType: 'TEXT_INPUT',
                displayLabel: 'Form Title',
                placeholderText: 'Enter form title',
                initialValue: 'New Form'
            },
            {
                fieldMappings: 'submitAction',
                uiComponentType: 'DROPDOWN',
                displayLabel: 'Submit Action',
                optionItems: [
                    { value: 'email', label: 'Send Email' },
                    { value: 'database', label: 'Save to Database' },
                    { value: 'api', label: 'Send to API' }
                ],
                initialValue: 'email'
            },
            {
                fieldMappings: 'requireValidation',
                uiComponentType: 'CHECKBOX',
                displayLabel: 'Require Validation',
                initialValue: true
            },
            {
                fieldMappings: 'maxFileSize',
                uiComponentType: 'RANGE_SLIDER',
                displayLabel: 'Max File Size (MB)',
                optionItems: { min: 1, max: 100 },
                initialValue: 10
            }
        ];
        
        this.attributeWindow.AttributeWindowAttributes = builderConfig;
        document.body.appendChild(this.attributeWindow);
        
        // Generate form configuration
        this.attributeWindow.addEventListener('input', () => {
            this.generateFormConfig();
        });
    }
    
    generateFormConfig() {
        const config = {
            title: this.attributeWindow.shadowRoot?.querySelector('#formTitle')?.value || 'New Form',
            submitAction: this.attributeWindow.shadowRoot?.querySelector('#submitAction')?.value || 'email',
            requireValidation: this.attributeWindow.shadowRoot?.querySelector('#requireValidation')?.checked || false,
            maxFileSize: this.attributeWindow.shadowRoot?.querySelector('#maxFileSize')?.value || 10
        };
        
        console.log('Generated form configuration:', config);
        this.onConfigurationChange(config);
    }
    
    onConfigurationChange(config) {
        // Handle configuration changes
        this.formConfig = config;
        this.updatePreview();
    }
    
    updatePreview() {
        // Update form preview based on configuration
        console.log('Updating form preview with:', this.formConfig);
    }
}

new FormConfigurationBuilder();
```

### Component Inspector

```javascript
class ComponentInspector {
    constructor() {
        this.inspectedComponent = null;
        this.attributeWindow = document.createElement('zero-attribute-window');
        this.setupInspector();
    }
    
    setupInspector() {
        document.body.appendChild(this.attributeWindow);
        
        // Add click handler to inspect components
        document.addEventListener('click', (event) => {
            if (event.ctrlKey) { // Ctrl+click to inspect
                this.inspectComponent(event.target);
            }
        });
    }
    
    inspectComponent(element) {
        this.inspectedComponent = element;
        const computedStyle = window.getComputedStyle(element);
        
        const inspectorConfig = [
            {
                fieldMappings: 'tagName',
                uiComponentType: 'TEXT_INPUT',
                displayLabel: 'Tag Name',
                initialValue: element.tagName.toLowerCase(),
                optionItems: { type: 'text', readonly: true }
            },
            {
                fieldMappings: 'className',
                uiComponentType: 'TEXT_INPUT',
                displayLabel: 'CSS Classes',
                initialValue: element.className
            },
            {
                fieldMappings: 'textContent',
                uiComponentType: 'TEXTAREA',
                displayLabel: 'Text Content',
                initialValue: element.textContent?.trim() || ''
            },
            {
                fieldMappings: 'fontSize',
                uiComponentType: 'RANGE_SLIDER',
                displayLabel: 'Font Size',
                optionItems: { min: 8, max: 72 },
                initialValue: parseInt(computedStyle.fontSize) || 16
            },
            {
                fieldMappings: 'opacity',
                uiComponentType: 'RANGE_SLIDER',
                displayLabel: 'Opacity',
                optionItems: { min: 0, max: 100 },
                initialValue: Math.round(parseFloat(computedStyle.opacity) * 100)
            }
        ];
        
        this.attributeWindow.AttributeWindowAttributes = inspectorConfig;
        
        // Update element when properties change
        this.attributeWindow.addEventListener('input', (event) => {
            this.updateInspectedElement(event);
        });
    }
    
    updateInspectedElement(event) {
        if (!this.inspectedComponent) return;
        
        const propertyName = event.target.id;
        const propertyValue = event.target.value;
        
        switch(propertyName) {
            case 'className':
                this.inspectedComponent.className = propertyValue;
                break;
            case 'textContent':
                this.inspectedComponent.textContent = propertyValue;
                break;
            case 'fontSize':
                this.inspectedComponent.style.fontSize = `${propertyValue}px`;
                break;
            case 'opacity':
                this.inspectedComponent.style.opacity = (propertyValue / 100).toString();
                break;
        }
    }
}

new ComponentInspector();
```

## Styling Customization

### Light Theme Override

```css
zero-attribute-window {
    --primary-color: #007bff;
    --secondary-color: #f8f9fa;
    --text-color: #333333;
    --background-color: #ffffff;
    --hover-color: #e9ecef;
    --transition-speed: 0.2s;
}

/* Light theme input styling */
zero-attribute-window input,
zero-attribute-window select,
zero-attribute-window textarea {
    background-color: #ffffff;
    color: #333333;
    border: 1px solid #ced4da;
}

zero-attribute-window input:focus,
zero-attribute-window select:focus,
zero-attribute-window textarea:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
```

### Compact Layout

```css
.compact-attribute-window {
    --spacing-sm: 6px;
    --spacing-md: 8px;
    --spacing-lg: 12px;
    --font-size-lg: 14px;
}

.compact-attribute-window input,
.compact-attribute-window select,
.compact-attribute-window textarea {
    padding: 4px 6px;
    font-size: 12px;
}
```

### Custom Input Styling

```css
zero-attribute-window {
    --border-radius: 8px;
}

/* Custom checkbox styling */
zero-attribute-window input[type="checkbox"] {
    border-radius: 50%;
    width: 24px;
    height: 24px;
}

/* Custom range slider styling */
zero-attribute-window input[type="range"] {
    height: 8px;
    background: linear-gradient(90deg, #007bff 0%, #6c757d 100%);
}
```

## Accessibility

The component follows accessibility best practices:

- **Semantic HTML**: Proper form structure with labels and fieldsets
- **Keyboard Navigation**: Full keyboard support for all input types
- **Screen Reader Support**: ARIA labels and proper form associations
- **Focus Management**: Clear focus indicators and logical tab order
- **High Contrast**: Sufficient color contrast for text and backgrounds

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: Uses CSS custom properties, modern form inputs, and ES6+ features

## Related Components

- `zero-input-widgets` - Comprehensive form demo with various inputs
- `popup-dropdown` - Custom dropdown component used in attribute windows
- `zero-text-input` - Individual text input component
- `zero-dropdown` - Standard dropdown component

## License

MIT License - see LICENSE file for details.
