# Zero Dropdown Component

A configurable dropdown/select component with search functionality, multiple selection support, and custom styling options.

## Features

- ✅ Global theme integration with CSS variables
- ✅ Single and multiple selection modes
- ✅ Searchable dropdown with filtering
- ✅ Custom styled dropdown or native select
- ✅ Tag-based multi-selection display
- ✅ Built-in validation and error handling
- ✅ Accessible form labeling
- ✅ Responsive design
- ✅ Event handling for selection changes

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-dropdown/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML with Hardcoded Values

```html
<zero-dropdown 
    value="option2"
    label="Choose Option"
    placeholder="Select an option..."
    required="true"
    searchable="true"
    custom-style="true">
</zero-dropdown>
```

### JavaScript/TypeScript Dynamic Configuration

```javascript
// Get reference to the component
const dropdown = document.querySelector('zero-dropdown');

// Configure properties dynamically
dropdown.value = 'option1';
dropdown.label = 'Country';
dropdown.placeholder = 'Select your country';
dropdown.options = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' }
];
dropdown.searchable = true;
dropdown.customStyle = true;

// Listen to events
dropdown.addEventListener('change', (event) => {
    const { value, selectedValues, multiple } = event.detail;
    console.log('Selection changed:', multiple ? selectedValues : value);
});
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | string | `''` | Selected value (single selection) |
| `selectedValues` | string[] | `[]` | Selected values (multiple selection) |
| `label` | string | `'Dropdown'` | Label text displayed above dropdown |
| `placeholder` | string | `'Select an option...'` | Placeholder text shown when no selection |
| `options` | DropdownOptionItem[] | `[{value: 'option1', label: 'Option 1'}, ...]` | Available options |
| `required` | boolean | `false` | Whether the field is required |
| `disabled` | boolean | `false` | Whether the dropdown is disabled |
| `multiple` | boolean | `false` | Enable multiple selection |
| `searchable` | boolean | `false` | Enable search functionality |
| `customStyle` | boolean | `false` | Use custom styled dropdown instead of native select |
| `errorMessage` | string | `''` | Error message to display |
| `showError` | boolean | `false` | Whether to show error state |

## DropdownOptionItem Interface

```typescript
interface DropdownOptionItem {
    value: string;    // The actual value
    label: string;    // Display text
}
```

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `change` | `{ value: string, selectedValues: string[], multiple: boolean }` | Fired when selection changes |

## CSS Variables

The component uses the following CSS variables from the global theme:

### Layout & Spacing
- `--spacing-xs: 3px` - Extra small spacing (margins, padding)
- `--spacing-sm: 8px` - Small spacing (padding)
- `--spacing-md: 16px` - Medium spacing (padding)
- `--spacing-lg: 24px` - Large spacing (field margin bottom)
- `--input-height: 36px` - Standard dropdown height
- `--border-radius-xs: 3px` - Tag border radius

### Typography
- `--font-family: 'Roboto', sans-serif` - Dropdown font family
- `--font-size-base: 14px` - Base font size for dropdown and label
- `--font-size-sm: 12px` - Small font size for tags and errors
- `--font-size-xs: 12px` - Extra small font size for dropdown arrow

### Colors
- `--text-primary: #2a3b4d` - Primary text color
- `--text-secondary: #86868b` - Placeholder and search text color
- `--text-disabled: #999` - Disabled text color
- `--background-primary: #ffffff` - Dropdown background
- `--background-hover: #f5f5f5` - Option hover background
- `--background-disabled: #f5f5f5` - Disabled background
- `--border-color: rgba(0, 0, 0, 0.1)` - Default border color
- `--border-light: #f0f0f0` - Option separator color
- `--primary-color: #6c63ff` - Focus border and selected option
- `--primary-light: #6c63ff40` - Focus shadow and hover border
- `--error-color: #d93025` - Error state color
- `--error-light: #fce8e6` - Error focus shadow

### Borders & Effects
- `--border-radius-sm: 4px` - Dropdown border radius
- `--primary-background-hover: rgba(108, 99, 255, 0.02)` - Hover background

## Advanced Examples

### Country Selector with Flags

```html
<zero-dropdown 
    id="countrySelect"
    label="Country"
    placeholder="Select your country"
    searchable="true"
    custom-style="true">
</zero-dropdown>

<script>
const countrySelect = document.getElementById('countrySelect');

countrySelect.options = [
    { value: 'us', label: '🇺🇸 United States' },
    { value: 'ca', label: '🇨🇦 Canada' },
    { value: 'uk', label: '🇬🇧 United Kingdom' },
    { value: 'de', label: '🇩🇪 Germany' },
    { value: 'fr', label: '🇫🇷 France' },
    { value: 'jp', label: '🇯🇵 Japan' },
    { value: 'au', label: '🇦🇺 Australia' }
];

countrySelect.addEventListener('change', (event) => {
    const selectedCountry = event.detail.value;
    console.log('Selected country:', selectedCountry);
});
</script>
```

### Skills Multi-Selection

```html
<zero-dropdown 
    id="skillsSelect"
    label="Technical Skills"
    placeholder="Select your skills"
    multiple="true"
    searchable="true"
    custom-style="true">
</zero-dropdown>

<script>
const skillsSelect = document.getElementById('skillsSelect');

skillsSelect.options = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'docker', label: 'Docker' },
    { value: 'kubernetes', label: 'Kubernetes' }
];

skillsSelect.addEventListener('change', (event) => {
    const selectedSkills = event.detail.selectedValues;
    console.log('Selected skills:', selectedSkills);
    
    // Update a display element
    const skillsDisplay = document.getElementById('selectedSkills');
    if (skillsDisplay) {
        skillsDisplay.textContent = `Selected: ${selectedSkills.join(', ')}`;
    }
});
</script>
```

### Dependent Dropdowns (State/City)

```html
<div class="location-selector">
    <zero-dropdown 
        id="stateSelect"
        label="State"
        placeholder="Select state"
        searchable="true"
        custom-style="true">
    </zero-dropdown>
    
    <zero-dropdown 
        id="citySelect"
        label="City"
        placeholder="Select city"
        disabled="true"
        searchable="true"
        custom-style="true">
    </zero-dropdown>
</div>

<script>
const stateSelect = document.getElementById('stateSelect');
const citySelect = document.getElementById('citySelect');

const locationData = {
    ca: [
        { value: 'la', label: 'Los Angeles' },
        { value: 'sf', label: 'San Francisco' },
        { value: 'sd', label: 'San Diego' }
    ],
    ny: [
        { value: 'nyc', label: 'New York City' },
        { value: 'buf', label: 'Buffalo' },
        { value: 'roc', label: 'Rochester' }
    ],
    tx: [
        { value: 'hou', label: 'Houston' },
        { value: 'dal', label: 'Dallas' },
        { value: 'aus', label: 'Austin' }
    ]
};

stateSelect.options = [
    { value: 'ca', label: 'California' },
    { value: 'ny', label: 'New York' },
    { value: 'tx', label: 'Texas' }
];

stateSelect.addEventListener('change', (event) => {
    const selectedState = event.detail.value;
    
    if (selectedState && locationData[selectedState]) {
        citySelect.options = locationData[selectedState];
        citySelect.disabled = false;
        citySelect.value = '';
    } else {
        citySelect.options = [];
        citySelect.disabled = true;
        citySelect.value = '';
    }
});
</script>
```

### Form Validation Example

```html
<form id="userForm">
    <zero-dropdown 
        id="roleSelect"
        label="User Role"
        placeholder="Select user role"
        required="true"
        custom-style="true"
        error-message="Please select a user role"
        show-error="false">
    </zero-dropdown>
    
    <zero-dropdown 
        id="departmentSelect"
        label="Department"
        placeholder="Select department"
        multiple="true"
        searchable="true"
        custom-style="true"
        error-message="Please select at least one department"
        show-error="false">
    </zero-dropdown>
    
    <button type="submit">Create User</button>
</form>

<script>
const roleSelect = document.getElementById('roleSelect');
const departmentSelect = document.getElementById('departmentSelect');
const userForm = document.getElementById('userForm');

roleSelect.options = [
    { value: 'admin', label: 'Administrator' },
    { value: 'manager', label: 'Manager' },
    { value: 'employee', label: 'Employee' },
    { value: 'contractor', label: 'Contractor' }
];

departmentSelect.options = [
    { value: 'engineering', label: 'Engineering' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'hr', label: 'Human Resources' },
    { value: 'finance', label: 'Finance' },
    { value: 'operations', label: 'Operations' }
];

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate role selection
    if (!roleSelect.value) {
        roleSelect.showError = true;
        isValid = false;
    } else {
        roleSelect.showError = false;
    }
    
    // Validate department selection
    if (departmentSelect.selectedValues.length === 0) {
        departmentSelect.showError = true;
        isValid = false;
    } else {
        departmentSelect.showError = false;
    }
    
    if (isValid) {
        console.log('Form valid:', {
            role: roleSelect.value,
            departments: departmentSelect.selectedValues
        });
    }
});
</script>
```

### Dynamic Options Loading

```html
<zero-dropdown 
    id="dynamicSelect"
    label="Products"
    placeholder="Loading products..."
    searchable="true"
    custom-style="true"
    disabled="true">
</zero-dropdown>

<button id="loadBtn">Load Products</button>

<script>
const dynamicSelect = document.getElementById('dynamicSelect');
const loadBtn = document.getElementById('loadBtn');

async function loadProducts() {
    dynamicSelect.disabled = true;
    dynamicSelect.placeholder = 'Loading products...';
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const products = [
            { value: 'laptop', label: 'Laptop Computer' },
            { value: 'mouse', label: 'Wireless Mouse' },
            { value: 'keyboard', label: 'Mechanical Keyboard' },
            { value: 'monitor', label: '4K Monitor' },
            { value: 'headphones', label: 'Noise-Canceling Headphones' }
        ];
        
        dynamicSelect.options = products;
        dynamicSelect.placeholder = 'Select a product';
        dynamicSelect.disabled = false;
        
    } catch (error) {
        dynamicSelect.placeholder = 'Failed to load products';
        console.error('Failed to load products:', error);
    }
}

loadBtn.addEventListener('click', loadProducts);

// Auto-load on component ready
document.addEventListener('DOMContentLoaded', loadProducts);
</script>
```

## Styling Customization

### Custom Option Styling

```css
zero-dropdown .option-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm, 8px);
}

zero-dropdown .option-item:hover {
    background: linear-gradient(90deg, 
        var(--primary-light, #6c63ff40), 
        transparent);
}

zero-dropdown .option-item.selected {
    background: var(--primary-color, #6c63ff);
    font-weight: 600;
    position: relative;
}

zero-dropdown .option-item.selected::after {
    content: '✓';
    margin-left: auto;
}
```

### Custom Tag Styling

```css
zero-dropdown .tag {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: var(--border-radius-md, 8px);
    padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px);
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-10px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

zero-dropdown .tag-remove:hover {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
}
```

### Large Dropdown Variant

```css
.large-dropdown {
    --input-height: 48px;
    --font-size-base: 16px;
}

.large-dropdown .dropdown-options {
    max-height: 300px;
}
```

### Compact Dropdown Variant

```css
.compact-dropdown {
    --input-height: 28px;
    --font-size-base: 12px;
    --spacing-sm: 4px;
    --spacing-md: 8px;
}

.compact-dropdown .form-field {
    margin-bottom: var(--spacing-sm, 8px);
}
```

## Accessibility

The component follows accessibility best practices:

- Proper label association with `for` attribute
- ARIA attributes for dropdown state and multi-selection
- Keyboard navigation support (arrow keys, Enter, Escape)
- Screen reader compatible option announcements
- Focus management for custom dropdown
- High contrast support through CSS variables

## Performance Considerations

- Options are filtered client-side for search functionality
- Large option lists (>100 items) should implement virtual scrolling
- Search queries are not debounced by default (can be added externally)
- Custom dropdown uses event delegation for option clicks

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

MIT License
