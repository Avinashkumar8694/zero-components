# Zero Number Input Component

A configurable number input component with step controls, range validation, and unit display support.

## Features

- ✅ Global theme integration with CSS variables
- ✅ Step increment/decrement controls
- ✅ Min/max range validation
- ✅ Unit label display
- ✅ Built-in validation and error handling
- ✅ Accessible form labeling
- ✅ Responsive design
- ✅ Floating-point precision handling
- ✅ Event handling for input and change

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-number-input/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML with Hardcoded Values

```html
<zero-number-input 
    value="25"
    label="Age"
    placeholder="Enter your age"
    min="0"
    max="120"
    step="1"
    show-step-controls="true"
    unit-label="years">
</zero-number-input>
```

### JavaScript/TypeScript Dynamic Configuration

```javascript
// Get reference to the component
const numberInput = document.querySelector('zero-number-input');

// Configure properties dynamically
numberInput.value = 50;
numberInput.label = 'Weight';
numberInput.placeholder = 'Enter weight';
numberInput.min = 0;
numberInput.max = 500;
numberInput.step = 0.5;
numberInput.unitLabel = 'kg';
numberInput.showStepControls = true;

// Listen to events
numberInput.addEventListener('input', (event) => {
    console.log('Input value:', event.detail.value);
});

numberInput.addEventListener('change', (event) => {
    console.log('Value changed:', event.detail.value);
});
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | number | `0` | Current numeric value |
| `label` | string | `'Number Input'` | Label text displayed above input |
| `placeholder` | string | `'Enter number'` | Placeholder text shown when empty |
| `min` | number | `0` | Minimum allowed value |
| `max` | number | `100` | Maximum allowed value |
| `step` | number | `1` | Step increment/decrement value |
| `required` | boolean | `false` | Whether the field is required |
| `disabled` | boolean | `false` | Whether the input is disabled |
| `showStepControls` | boolean | `true` | Show increment/decrement buttons |
| `unitLabel` | string | `''` | Unit label to display (e.g., 'kg', '%', 'cm') |
| `errorMessage` | string | `''` | Error message to display |
| `showError` | boolean | `false` | Whether to show error state |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `input` | `{ value: number }` | Fired on every keystroke |
| `change` | `{ value: number }` | Fired when input loses focus and value changed |

## CSS Variables

The component uses the following CSS variables from the global theme:

### Layout & Spacing
- `--spacing-xs: 3px` - Extra small spacing (margins, padding)
- `--spacing-sm: 8px` - Small spacing (input padding)
- `--spacing-md: 16px` - Medium spacing (input padding)
- `--spacing-lg: 24px` - Large spacing (field margin bottom)
- `--input-height: 36px` - Standard input height
- `--input-step-height: 18px` - Height of step control buttons
- `--icon-size-sm: 24px` - Minimum width of step buttons

### Typography
- `--font-family: 'Roboto', sans-serif` - Input font family
- `--font-size-base: 14px` - Base font size for input and label
- `--font-size-sm: 12px` - Small font size for unit display and errors
- `--font-size-xs: 12px` - Extra small font size for step buttons

### Colors
- `--text-primary: #2a3b4d` - Primary text color
- `--text-secondary: #86868b` - Placeholder and unit text color
- `--text-disabled: #999` - Disabled text color
- `--background-primary: #ffffff` - Input background
- `--background-secondary: #f5f5f5` - Step button background
- `--background-disabled: #f5f5f5` - Disabled background
- `--border-color: rgba(0, 0, 0, 0.1)` - Default border color
- `--primary-color: #6c63ff` - Focus border and step button hover
- `--primary-light: #6c63ff40` - Focus shadow and hover border
- `--error-color: #d93025` - Error state color
- `--error-light: #fce8e6` - Error focus shadow

### Borders & Effects
- `--border-radius-sm: 4px` - Input and button border radius
- `--transition-fast: 0.2s ease` - Button transition effects
- `--primary-background-hover: rgba(108, 99, 255, 0.02)` - Hover background

## Advanced Examples

### Price Input with Currency

```html
<zero-number-input 
    id="price"
    label="Product Price"
    placeholder="0.00"
    min="0"
    max="10000"
    step="0.01"
    unit-label="USD"
    show-step-controls="true">
</zero-number-input>

<script>
const priceInput = document.getElementById('price');

priceInput.addEventListener('change', (event) => {
    const price = event.detail.value;
    // Format as currency
    const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
    
    console.log('Formatted price:', formatted);
});
</script>
```

### Temperature Converter

```html
<div class="temperature-converter">
    <zero-number-input 
        id="celsius"
        label="Celsius"
        value="0"
        min="-273.15"
        max="1000"
        step="0.1"
        unit-label="°C">
    </zero-number-input>
    
    <zero-number-input 
        id="fahrenheit"
        label="Fahrenheit"
        value="32"
        min="-459.67"
        max="1832"
        step="0.1"
        unit-label="°F">
    </zero-number-input>
</div>

<script>
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

celsiusInput.addEventListener('input', (event) => {
    const celsius = event.detail.value;
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = Math.round(fahrenheit * 10) / 10;
});

fahrenheitInput.addEventListener('input', (event) => {
    const fahrenheit = event.detail.value;
    const celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = Math.round(celsius * 10) / 10;
});
</script>
```

### Quantity Selector with Stock Validation

```html
<zero-number-input 
    id="quantity"
    label="Quantity"
    value="1"
    min="1"
    max="50"
    step="1"
    unit-label="items"
    show-step-controls="true"
    error-message="Insufficient stock available"
    show-error="false">
</zero-number-input>

<div id="stockInfo">Stock available: 50 items</div>

<script>
const quantityInput = document.getElementById('quantity');
const stockInfo = document.getElementById('stockInfo');
let availableStock = 50;

quantityInput.addEventListener('change', (event) => {
    const quantity = event.detail.value;
    
    if (quantity > availableStock) {
        quantityInput.showError = true;
        quantityInput.errorMessage = `Only ${availableStock} items available`;
        quantityInput.value = availableStock;
    } else {
        quantityInput.showError = false;
    }
    
    stockInfo.textContent = `Stock available: ${availableStock - quantity} items`;
});
</script>
```

### Percentage Input with Visual Indicator

```html
<div class="percentage-input">
    <zero-number-input 
        id="percentage"
        label="Completion Percentage"
        value="0"
        min="0"
        max="100"
        step="5"
        unit-label="%"
        show-step-controls="true">
    </zero-number-input>
    
    <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
    </div>
</div>

<style>
.percentage-input {
    max-width: 300px;
}

.progress-bar {
    width: 100%;
    height: 20px;
    background-color: var(--background-secondary, #f5f5f5);
    border-radius: var(--border-radius-sm, 4px);
    margin-top: var(--spacing-sm, 8px);
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, 
        var(--primary-color, #6c63ff), 
        var(--accent-color, #ff6584));
    transition: width 0.3s ease;
    width: 0%;
}
</style>

<script>
const percentageInput = document.getElementById('percentage');
const progressFill = document.getElementById('progressFill');

percentageInput.addEventListener('input', (event) => {
    const percentage = event.detail.value;
    progressFill.style.width = `${percentage}%`;
});
</script>
```

### Range Validator with Dynamic Limits

```html
<zero-number-input 
    id="dynamicRange"
    label="Value"
    value="50"
    min="0"
    max="100"
    step="1"
    show-step-controls="true">
</zero-number-input>

<div class="range-controls">
    <label>
        Min: <input type="number" id="minControl" value="0" min="0" max="100">
    </label>
    <label>
        Max: <input type="number" id="maxControl" value="100" min="0" max="100">
    </label>
</div>

<script>
const dynamicInput = document.getElementById('dynamicRange');
const minControl = document.getElementById('minControl');
const maxControl = document.getElementById('maxControl');

function updateLimits() {
    const newMin = parseInt(minControl.value);
    const newMax = parseInt(maxControl.value);
    
    if (newMin < newMax) {
        dynamicInput.min = newMin;
        dynamicInput.max = newMax;
        
        // Clamp current value to new range
        if (dynamicInput.value < newMin) {
            dynamicInput.value = newMin;
        } else if (dynamicInput.value > newMax) {
            dynamicInput.value = newMax;
        }
    }
}

minControl.addEventListener('change', updateLimits);
maxControl.addEventListener('change', updateLimits);
</script>
```

## Styling Customization

### Custom Step Controls

```css
zero-number-input .step-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    font-weight: bold;
}

zero-number-input .step-button:hover:not(:disabled) {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    transform: scale(1.05);
}
```

### Large Number Input

```css
.large-number-input {
    --input-height: 48px;
    --font-size-base: 18px;
    --icon-size-sm: 32px;
    --input-step-height: 24px;
}
```

### Compact Style

```css
.compact-number-input {
    --input-height: 28px;
    --font-size-base: 12px;
    --spacing-sm: 4px;
    --spacing-md: 8px;
    --input-step-height: 14px;
}

.compact-number-input .form-field {
    margin-bottom: var(--spacing-sm, 8px);
}
```

## Accessibility

The component follows accessibility best practices:

- Proper label association with `for` attribute
- ARIA attributes for min/max ranges
- Keyboard navigation support (arrow keys for increment/decrement)
- Screen reader compatible button labels
- High contrast support through CSS variables
- Focus management for step controls

## Performance Notes

- Floating-point precision is handled to avoid JavaScript arithmetic errors
- Step controls are optimized to prevent rapid-fire events
- Value clamping is performed on change to ensure valid ranges

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

MIT License
