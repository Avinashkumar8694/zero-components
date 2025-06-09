# Zero Text Input Component

A configurable text input component with global styling and comprehensive form validation support.

## Features

- ✅ Global theme integration with CSS variables
- ✅ Built-in validation and error handling
- ✅ Accessible form labeling
- ✅ Responsive design
- ✅ Customizable placeholder and validation
- ✅ Event handling for input, change, focus, and blur

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-text-input/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML with Hardcoded Values

```html
<zero-text-input 
    value="Sample text"
    label="Full Name"
    placeholder="Enter your full name"
    required="true">
</zero-text-input>
```

### JavaScript/TypeScript Dynamic Configuration

```javascript
// Get reference to the component
const textInput = document.querySelector('zero-text-input');

// Configure properties dynamically
textInput.value = 'Dynamic value';
textInput.label = 'Email Address';
textInput.placeholder = 'user@example.com';
textInput.required = true;
textInput.maxLength = 50;

// Listen to events
textInput.addEventListener('input', (event) => {
    console.log('Input value:', event.detail.value);
});

textInput.addEventListener('change', (event) => {
    console.log('Value changed:', event.detail.value);
});
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | string | `''` | Current input value |
| `label` | string | `'Text Input'` | Label text displayed above input |
| `placeholder` | string | `''` | Placeholder text shown when input is empty |
| `required` | boolean | `false` | Whether the field is required |
| `disabled` | boolean | `false` | Whether the input is disabled |
| `maxLength` | number | `0` | Maximum character length (0 = no limit) |
| `errorMessage` | string | `''` | Error message to display |
| `showError` | boolean | `false` | Whether to show error state |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `input` | `{ value: string }` | Fired on every keystroke |
| `change` | `{ value: string }` | Fired when input loses focus and value changed |
| `focus` | `{ value: string }` | Fired when input gains focus |
| `blur` | `{ value: string }` | Fired when input loses focus |

## CSS Variables

The component uses the following CSS variables from the global theme:

### Layout & Spacing
- `--spacing-xs: 3px` - Extra small spacing (error message margin)
- `--spacing-sm: 8px` - Small spacing (input padding)
- `--spacing-md: 16px` - Medium spacing (input padding)
- `--spacing-lg: 24px` - Large spacing (field margin bottom)
- `--input-height: 36px` - Standard input height

### Typography
- `--font-family: 'Roboto', sans-serif` - Input font family
- `--font-size-base: 14px` - Base font size for input and label
- `--font-size-sm: 12px` - Small font size for error messages

### Colors
- `--text-primary: #2a3b4d` - Primary text color
- `--text-secondary: #86868b` - Placeholder text color
- `--background-primary: #ffffff` - Input background
- `--border-color: rgba(0, 0, 0, 0.1)` - Default border color
- `--primary-color: #6c63ff` - Focus border color
- `--primary-light: #6c63ff40` - Focus shadow and hover border
- `--error-color: #d93025` - Error state color
- `--error-light: #fce8e6` - Error focus shadow

### Borders & Effects
- `--border-radius-sm: 4px` - Input border radius
- `--primary-background-hover: rgba(108, 99, 255, 0.02)` - Hover background

## Advanced Examples

### With Validation

```html
<zero-text-input 
    value=""
    label="Email"
    placeholder="Enter your email"
    required="true"
    max-length="100"
    error-message="Please enter a valid email address"
    show-error="false">
</zero-text-input>

<script>
const emailInput = document.querySelector('zero-text-input');

emailInput.addEventListener('blur', (event) => {
    const email = event.detail.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    emailInput.showError = !isValid && email.length > 0;
    emailInput.errorMessage = !isValid ? 'Please enter a valid email address' : '';
});
</script>
```

### Form Integration

```html
<form id="user-form">
    <zero-text-input 
        id="firstName"
        label="First Name"
        placeholder="Enter first name"
        required="true"
        max-length="50">
    </zero-text-input>
    
    <zero-text-input 
        id="lastName"
        label="Last Name" 
        placeholder="Enter last name"
        required="true"
        max-length="50">
    </zero-text-input>
    
    <button type="submit">Submit</button>
</form>

<script>
document.getElementById('user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    
    console.log('Form data:', { firstName, lastName });
});
</script>
```

### Real-time Character Counter

```html
<zero-text-input 
    id="bio"
    label="Bio"
    placeholder="Tell us about yourself"
    max-length="200">
</zero-text-input>
<div id="counter">0 / 200 characters</div>

<script>
const bioInput = document.getElementById('bio');
const counter = document.getElementById('counter');

bioInput.addEventListener('input', (event) => {
    const length = event.detail.value.length;
    const maxLength = bioInput.maxLength;
    counter.textContent = `${length} / ${maxLength} characters`;
    
    // Change color when approaching limit
    if (length > maxLength * 0.8) {
        counter.style.color = 'var(--warning-color, #ffc107)';
    } else {
        counter.style.color = 'var(--text-secondary, #86868b)';
    }
});
</script>
```

## Styling Customization

### Custom CSS Variables

```css
zero-text-input {
    --input-height: 40px;
    --border-radius-sm: 8px;
    --primary-color: #007bff;
    --font-size-base: 16px;
}
```

### Custom Error Styling

```css
zero-text-input .error-message.show {
    color: var(--danger-color, #dc3545);
    font-weight: 500;
    animation: slideDown 0.3s ease;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## Accessibility

The component follows accessibility best practices:

- Proper label association with `for` attribute
- ARIA attributes for error states
- Keyboard navigation support
- Screen reader compatible
- High contrast support through CSS variables

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

MIT License
