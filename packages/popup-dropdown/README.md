# Popup Dropdown

A stylish dropdown component with popup-style appearance and smooth animations. Features a message box design with arrow indicators, hover effects, and customizable styling. Perfect for appearance selectors, configuration options, and any scenario requiring an elegant dropdown interface.

## Features

- **Popup Design**: Message box style with arrow pointers for visual appeal
- **Smooth Animations**: CSS transitions for opening/closing and hover effects
- **Custom Styling**: Extensive CSS variable support for theme customization
- **Keyboard Accessible**: Full keyboard navigation support
- **Responsive**: Adapts to different screen sizes and container widths
- **Event Handling**: Custom change events with selected option details
- **Overflow Handling**: Scrollable options list for large datasets
- **Visual Feedback**: Hover effects and selected state indicators

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/popup-dropdown/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML (Hardcoded Values)

```html
<zero-popup-dropdown-1.0.0
    selected-option="option2">
</zero-popup-dropdown-1.0.0>

<script>
// Set options after component initialization
const dropdown = document.querySelector('zero-popup-dropdown-1.0.0');
dropdown.OptionConfig = [
    { value: 'option1', label: 'Light Theme' },
    { value: 'option2', label: 'Dark Theme' },
    { value: 'option3', label: 'Auto Theme' }
];
</script>
```

### JavaScript (Dynamic Configuration)

```javascript
// Create and configure the popup dropdown
const popupDropdown = document.createElement('zero-popup-dropdown-1.0.0');

// Set dropdown options
popupDropdown.OptionConfig = [
    { value: 'modern', label: 'Modern Design' },
    { value: 'classic', label: 'Classic Design' },
    { value: 'minimal', label: 'Minimal Design' },
    { value: 'retro', label: 'Retro Design' }
];

// Set initial selection
popupDropdown.selectedOption = 'modern';

// Add event listener for selection changes
popupDropdown.addEventListener('change', (event) => {
    console.log('Selected option:', event.detail);
    // Handle selection change
});

// Append to DOM
document.body.appendChild(popupDropdown);
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `OptionConfig` | `DropdownOptionItem[]` | `[]` | Array of dropdown options with value/label pairs |
| `selectedOption` | `string` | `''` | Currently selected option value |
| `_isOpen` | `boolean` | `false` | Internal state for dropdown visibility (private) |

### DropdownOptionItem Interface

```typescript
interface DropdownOptionItem {
    value: string;   // The option value
    label: string;   // Display text for the option
}
```

## Events

### change

Triggered when a dropdown option is selected.

**Event Detail:**
```typescript
{
  value: string;  // Selected option value
  label: string;  // Selected option label
}
```

**Example:**
```javascript
dropdown.addEventListener('change', (event) => {
    const { value, label } = event.detail;
    console.log(`Selected: ${label} (${value})`);
});
```

## CSS Variables

### Layout & Spacing
- `--input-height`: Standard input height (36px) - dropdown container height
- `--spacing-xs`: Extra small spacing (4px-5px) - option padding, arrow positioning  
- `--spacing-sm`: Small spacing (8px-10px) - container padding, icon margins, dropdown gap
- `--spacing-md`: Medium spacing (12px) - option horizontal padding
- `--icon-size-sm`: Small icon size (12px) - dropdown arrow icon
- `--border-radius-sm`: Small border radius (4px) - option hover borders

### Typography
- `--dropdown-font-size`: Font size for options and selected text (12px)
- `--dropdown-label-color`: Label text color (#333)

### Colors
- `--dropdown-bg-color`: Background color for dropdown and options (#fff)
- `--dropdown-border-color`: Border color for container and options (#ddd)
- `--dropdown-hover-border-color`: Border color on hover (#ccc)
- `--dropdown-icon-color`: Color for dropdown arrow icon (#666)
- `--option-hover-bg-color`: Background color for hovered options (#f0f0f0)

### Effects & Transitions
- `--dropdown-border-radius`: Border radius for dropdown container (6px)
- `--transition-fast`: Fast transition timing for animations
- `--shadow-sm`: Small shadow for hover effects
- `--shadow-lg`: Large shadow for dropdown popup

## Public Methods

### toggleDropdown()

Toggles the dropdown open/closed state.

```javascript
const dropdown = document.querySelector('zero-popup-dropdown-1.0.0');
dropdown.toggleDropdown();
```

### selectOption(option)

Programmatically selects an option and triggers the change event.

```javascript
const dropdown = document.querySelector('zero-popup-dropdown-1.0.0');
dropdown.selectOption({ value: 'option1', label: 'Option 1' });
```

## Advanced Examples

### Dynamic Option Loading

```javascript
class DynamicDropdown {
    constructor() {
        this.dropdown = document.createElement('zero-popup-dropdown-1.0.0');
        this.loadOptions();
        this.setupEventHandlers();
    }
    
    async loadOptions() {
        try {
            const response = await fetch('/api/dropdown-options');
            const options = await response.json();
            this.dropdown.OptionConfig = options;
        } catch (error) {
            console.error('Failed to load options:', error);
            this.dropdown.OptionConfig = [
                { value: 'default', label: 'Default Option' }
            ];
        }
    }
    
    setupEventHandlers() {
        this.dropdown.addEventListener('change', (event) => {
            this.handleSelectionChange(event.detail);
        });
    }
    
    handleSelectionChange(selectedOption) {
        // Save selection to localStorage
        localStorage.setItem('userPreference', selectedOption.value);
        
        // Update UI based on selection
        this.applyTheme(selectedOption.value);
    }
    
    applyTheme(themeValue) {
        document.body.className = `theme-${themeValue}`;
    }
}
```

### Cascading Dropdowns

```html
<zero-popup-dropdown-1.0.0 id="categoryDropdown"></zero-popup-dropdown-1.0.0>
<zero-popup-dropdown-1.0.0 id="subcategoryDropdown"></zero-popup-dropdown-1.0.0>

<script>
const categoryDropdown = document.getElementById('categoryDropdown');
const subcategoryDropdown = document.getElementById('subcategoryDropdown');

// Set initial categories
categoryDropdown.OptionConfig = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'books', label: 'Books' }
];

// Handle category selection
categoryDropdown.addEventListener('change', (event) => {
    const category = event.detail.value;
    updateSubcategories(category);
});

function updateSubcategories(category) {
    const subcategoryOptions = {
        electronics: [
            { value: 'phones', label: 'Phones' },
            { value: 'laptops', label: 'Laptops' },
            { value: 'tablets', label: 'Tablets' }
        ],
        clothing: [
            { value: 'shirts', label: 'Shirts' },
            { value: 'pants', label: 'Pants' },
            { value: 'shoes', label: 'Shoes' }
        ],
        books: [
            { value: 'fiction', label: 'Fiction' },
            { value: 'nonfiction', label: 'Non-Fiction' },
            { value: 'textbooks', label: 'Textbooks' }
        ]
    };
    
    subcategoryDropdown.OptionConfig = subcategoryOptions[category] || [];
    subcategoryDropdown.selectedOption = ''; // Reset selection
}
</script>
```

### Search and Filter Integration

```javascript
class SearchableDropdown {
    constructor(containerId, options) {
        this.container = document.getElementById(containerId);
        this.allOptions = options;
        this.filteredOptions = options;
        this.setupDropdown();
        this.setupSearch();
    }
    
    setupDropdown() {
        this.dropdown = document.createElement('zero-popup-dropdown-1.0.0');
        this.dropdown.OptionConfig = this.filteredOptions;
        this.container.appendChild(this.dropdown);
    }
    
    setupSearch() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search options...';
        searchInput.addEventListener('input', (e) => {
            this.filterOptions(e.target.value);
        });
        
        this.container.insertBefore(searchInput, this.dropdown);
    }
    
    filterOptions(searchTerm) {
        const term = searchTerm.toLowerCase();
        this.filteredOptions = this.allOptions.filter(option => 
            option.label.toLowerCase().includes(term) ||
            option.value.toLowerCase().includes(term)
        );
        
        this.dropdown.OptionConfig = this.filteredOptions;
    }
}

// Usage
const searchableDropdown = new SearchableDropdown('dropdown-container', [
    { value: 'red', label: 'Red Color' },
    { value: 'blue', label: 'Blue Color' },
    { value: 'green', label: 'Green Color' },
    { value: 'yellow', label: 'Yellow Color' }
]);
```

### Form Integration with Validation

```html
<form id="settingsForm">    <div class="form-group">
        <label>Theme Preference:</label>
        <zero-popup-dropdown-1.0.0 id="themeDropdown" required></zero-popup-dropdown-1.0.0>
        <span class="error-message" id="themeError"></span>
    </div>
    
    <div class="form-group">
        <label>Language:</label>
        <zero-popup-dropdown-1.0.0 id="languageDropdown" required></zero-popup-dropdown-1.0.0>
        <span class="error-message" id="languageError"></span>
    </div>
    
    <button type="submit">Save Settings</button>
</form>

<script>
// Setup dropdowns
const themeDropdown = document.getElementById('themeDropdown');
const languageDropdown = document.getElementById('languageDropdown');

themeDropdown.OptionConfig = [
    { value: 'light', label: 'Light Theme' },
    { value: 'dark', label: 'Dark Theme' },
    { value: 'auto', label: 'Auto Theme' }
];

languageDropdown.OptionConfig = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' }
];

// Form validation
document.getElementById('settingsForm').addEventListener('submit', (event) => {
    event.preventDefault();
    
    let isValid = true;
    
    // Validate theme selection
    if (!themeDropdown.selectedOption) {
        document.getElementById('themeError').textContent = 'Please select a theme';
        isValid = false;
    } else {
        document.getElementById('themeError').textContent = '';
    }
    
    // Validate language selection
    if (!languageDropdown.selectedOption) {
        document.getElementById('languageError').textContent = 'Please select a language';
        isValid = false;
    } else {
        document.getElementById('languageError').textContent = '';
    }
    
    if (isValid) {
        // Submit form
        const formData = {
            theme: themeDropdown.selectedOption,
            language: languageDropdown.selectedOption
        };
        console.log('Form submitted:', formData);
    }
});
</script>
```

## Styling Customization

### Custom Appearance Theme

```css
zero-popup-dropdown {
    --dropdown-bg-color: #2d3748;
    --dropdown-border-color: #4a5568;
    --dropdown-hover-border-color: #63b3ed;
    --dropdown-label-color: #e2e8f0;
    --dropdown-icon-color: #a0aec0;
    --option-hover-bg-color: #4a5568;
    --dropdown-border-radius: 8px;
    --dropdown-font-size: 14px;
}

/* Custom arrow styling */
zero-popup-dropdown::part(arrow) {
    border-color: transparent transparent #4a5568 transparent;
}
```

### Compact Size Variant

```css
.compact-dropdown {
    --input-height: 28px;
    --dropdown-font-size: 11px;
    --spacing-sm: 6px;
    --spacing-xs: 3px;
    --icon-size-sm: 10px;
}
```

### Large Size Variant

```css
.large-dropdown {
    --input-height: 44px;
    --dropdown-font-size: 16px;
    --spacing-sm: 12px;
    --spacing-md: 16px;
    --icon-size-sm: 16px;
}
```

## Accessibility

The component follows accessibility best practices:

- **Keyboard Navigation**: Arrow keys to navigate options, Enter to select, Escape to close
- **ARIA Labels**: Proper labeling for screen readers
- **Focus Management**: Clear focus indicators and logical tab order
- **Screen Reader Support**: Announces selection changes and dropdown state

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: Uses CSS Grid, Flexbox, and modern CSS variables

## Related Components

- `zero-dropdown` - Standard dropdown component with more features
- `popup-dropdown-directive` - Directive version for framework integration
- `zero-input-widgets` - Comprehensive form demo including dropdowns

## License

MIT License - see LICENSE file for details.
