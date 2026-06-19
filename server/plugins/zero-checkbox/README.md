# Zero Checkbox Component

A configurable checkbox component with multiple styling options, indeterminate state support, and comprehensive validation.

## Features

- ✅ Global theme integration with CSS variables
- ✅ Multiple visual styles (default, rounded, switch)
- ✅ Indeterminate state support
- ✅ Built-in validation and error handling
- ✅ Accessible form labeling with descriptions
- ✅ Responsive design
- ✅ Custom value assignment
- ✅ Event handling for state changes

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-checkbox/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML with Hardcoded Values

```html
<zero-checkbox-1.0.0 
    checked="true"
    label="I agree to the terms and conditions"
    description="Please read our terms before continuing"
    required="true"
    checkbox-style="default"
    value="terms-agreed">
</zero-checkbox-1.0.0>
```

### JavaScript/TypeScript Dynamic Configuration

```javascript
// Get reference to the component
const checkbox = document.querySelector('zero-checkbox-1.0.0');

// Configure properties dynamically
checkbox.checked = false;
checkbox.label = 'Subscribe to newsletter';
checkbox.description = 'Get weekly updates about our products';
checkbox.required = false;
checkbox.checkboxStyle = 'switch';
checkbox.value = 'newsletter-subscription';

// Listen to events
checkbox.addEventListener('change', (event) => {
    const { checked, value, indeterminate } = event.detail;
    console.log('Checkbox changed:', { checked, value, indeterminate });
});
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `checked` | boolean | `false` | Whether the checkbox is checked |
| `label` | string | `'Checkbox Label'` | Label text displayed next to checkbox |
| `description` | string | `''` | Optional description text below the checkbox |
| `required` | boolean | `false` | Whether the checkbox is required |
| `disabled` | boolean | `false` | Whether the checkbox is disabled |
| `indeterminate` | boolean | `false` | Whether to show indeterminate state |
| `checkboxStyle` | string | `'default'` | Visual style: 'default', 'custom', 'switch' |
| `value` | string | `''` | Value associated with the checkbox |
| `errorMessage` | string | `''` | Error message to display |
| `showError` | boolean | `false` | Whether to show error state |

## Checkbox Styles

- **default**: Standard square checkbox with checkmark
- **custom**: Rounded circular checkbox
- **switch**: Toggle switch style

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `change` | `{ checked: boolean, value: string, indeterminate: boolean }` | Fired when checkbox state changes |

## CSS Variables

The component uses the following CSS variables from the global theme:

### Layout & Spacing
- `--spacing-xs: 3px` - Extra small spacing (margins, borders)
- `--spacing-sm: 8px` - Small spacing (gaps, padding)
- `--spacing-md: 16px` - Medium spacing (padding)
- `--spacing-lg: 24px` - Large spacing (field margin bottom)
- `--icon-size-sm: 18px` - Standard checkbox size
- `--icon-size-md: 20px` - Switch height
- `--icon-size-xl: 36px` - Switch width

### Typography
- `--font-family: 'Roboto', sans-serif` - Checkbox font family
- `--font-size-base: 14px` - Base font size for label
- `--font-size-sm: 12px` - Small font size for description and errors
- `--font-size-xs: 12px` - Extra small font size for checkmark

### Colors
- `--text-primary: #2a3b4d` - Label text color
- `--text-secondary: #86868b` - Description text color
- `--text-disabled: #999` - Disabled text color
- `--background-primary: #ffffff` - Checkbox background
- `--background-secondary: #f5f5f5` - Switch track background
- `--background-disabled: #f5f5f5` - Disabled background
- `--border-color: rgba(0, 0, 0, 0.1)` - Default border color
- `--border-disabled: #ccc` - Disabled border color
- `--primary-color: #6c63ff` - Checked state color
- `--primary-light: #6c63ff40` - Focus shadow color
- `--primary-background-hover: rgba(108, 99, 255, 0.05)` - Hover background
- `--error-color: #d93025` - Error state color
- `--error-light: #fce8e6` - Error focus shadow

### Borders & Effects
- `--border-radius-xs: 3px` - Checkbox border radius
- `--border-radius-sm: 4px` - Field border radius
- `--border-radius-xl: 10px` - Switch border radius

## Advanced Examples

### Terms and Conditions Checkbox

```html
<zero-checkbox-1.0.0 
    id="termsCheckbox"
    label="I agree to the Terms of Service and Privacy Policy"
    description="You must agree to our terms to continue with registration"
    required="true"
    value="terms-accepted"
    error-message="You must accept the terms to proceed"
    show-error="false">
</zero-checkbox-1.0.0>

<button id="submitBtn" disabled>Register</button>

<script>
const termsCheckbox = document.getElementById('termsCheckbox');
const submitBtn = document.getElementById('submitBtn');

termsCheckbox.addEventListener('change', (event) => {
    const { checked } = event.detail;
    
    if (checked) {
        termsCheckbox.showError = false;
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
});

submitBtn.addEventListener('click', () => {
    if (!termsCheckbox.checked) {
        termsCheckbox.showError = true;
        termsCheckbox.errorMessage = 'You must accept the terms to proceed';
    } else {
        console.log('Registration submitted');
    }
});
</script>
```

### Settings Panel with Multiple Checkboxes

```html
<div class="settings-panel">
    <h3>Notification Settings</h3>
    
    <zero-checkbox-1.0.0 
        id="emailNotifications"
        label="Email Notifications"
        description="Receive notifications via email"
        checkbox-style="switch"
        value="email-notifications">
    </zero-checkbox-1.0.0>
    
    <zero-checkbox-1.0.0 
        id="pushNotifications"
        label="Push Notifications"
        description="Receive push notifications in your browser"
        checkbox-style="switch"
        value="push-notifications">
    </zero-checkbox-1.0.0>
    
    <zero-checkbox-1.0.0 
        id="smsNotifications"
        label="SMS Notifications"
        description="Receive notifications via text message"
        checkbox-style="switch"
        value="sms-notifications">
    </zero-checkbox-1.0.0>
    
    <button id="saveSettings">Save Settings</button>
</div>

<script>
const checkboxes = document.querySelectorAll('zero-checkbox-1.0.0');
const saveBtn = document.getElementById('saveSettings');

function getSettings() {
    const settings = {};
    checkboxes.forEach(checkbox => {
        if (checkbox.value) {
            settings[checkbox.value] = checkbox.checked;
        }
    });
    return settings;
}

function loadSettings(settings) {
    checkboxes.forEach(checkbox => {
        if (checkbox.value && settings.hasOwnProperty(checkbox.value)) {
            checkbox.checked = settings[checkbox.value];
        }
    });
}

saveBtn.addEventListener('click', () => {
    const settings = getSettings();
    localStorage.setItem('notificationSettings', JSON.stringify(settings));
    console.log('Settings saved:', settings);
});

// Load saved settings on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedSettings = localStorage.getItem('notificationSettings');
    if (savedSettings) {
        loadSettings(JSON.parse(savedSettings));
    }
});
</script>
```

### Checkbox Group with Select All

```html
<div class="checkbox-group">
    <zero-checkbox-1.0.0 
        id="selectAll"
        label="Select All"
        description="Select or deselect all options"
        checkbox-style="custom"
        value="select-all">
    </zero-checkbox-1.0.0>
    
    <hr>
    
    <zero-checkbox-1.0.0 
        id="option1"
        label="Option 1"
        value="option-1">
    </zero-checkbox-1.0.0>
    
    <zero-checkbox-1.0.0 
        id="option2"
        label="Option 2"
        value="option-2">
    </zero-checkbox-1.0.0>
    
    <zero-checkbox-1.0.0 
        id="option3"
        label="Option 3"
        value="option-3">
    </zero-checkbox-1.0.0>
    
    <zero-checkbox-1.0.0 
        id="option4"
        label="Option 4"
        value="option-4">
    </zero-checkbox-1.0.0>
</div>

<script>
const selectAllCheckbox = document.getElementById('selectAll');
const optionCheckboxes = document.querySelectorAll('#option1, #option2, #option3, #option4');

function updateSelectAllState() {
    const checkedCount = Array.from(optionCheckboxes).filter(cb => cb.checked).length;
    const totalCount = optionCheckboxes.length;
    
    if (checkedCount === 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
    } else if (checkedCount === totalCount) {
        selectAllCheckbox.checked = true;
        selectAllCheckbox.indeterminate = false;
    } else {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = true;
    }
}

selectAllCheckbox.addEventListener('change', (event) => {
    const { checked, indeterminate } = event.detail;
    
    optionCheckboxes.forEach(checkbox => {
        checkbox.checked = checked && !indeterminate;
    });
});

optionCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectAllState);
});

// Initialize state
updateSelectAllState();
</script>
```

### Form Validation with Multiple Required Checkboxes

```html
<form id="consentForm">
    <h3>User Consent</h3>
    
    <zero-checkbox-1.0.0 
        id="dataProcessing"
        label="Data Processing Consent"
        description="I consent to the processing of my personal data"
        required="true"
        value="data-processing"
        error-message="Data processing consent is required"
        show-error="false">
    </zero-checkbox-1.0.0>
    
    <zero-checkbox-1.0.0 
        id="ageVerification"
        label="Age Verification"
        description="I confirm that I am 18 years or older"
        required="true"
        value="age-verification"
        error-message="Age verification is required"
        show-error="false">
    </zero-checkbox-1.0.0>
    
    <zero-checkbox-1.0.0 
        id="marketingEmails"
        label="Marketing Communications"
        description="I would like to receive marketing emails (optional)"
        value="marketing-emails">
    </zero-checkbox-1.0.0>
    
    <button type="submit">Submit</button>
</form>

<script>
const consentForm = document.getElementById('consentForm');
const requiredCheckboxes = document.querySelectorAll('zero-checkbox[required="true"]');

consentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    requiredCheckboxes.forEach(checkbox => {
        if (!checkbox.checked) {
            checkbox.showError = true;
            isValid = false;
        } else {
            checkbox.showError = false;
        }
    });
    
    if (isValid) {
        const formData = {};
        document.querySelectorAll('zero-checkbox-1.0.0').forEach(checkbox => {
            if (checkbox.value) {
                formData[checkbox.value] = checkbox.checked;
            }
        });
        console.log('Form submitted:', formData);
    }
});
</script>
```

### Dynamic Checkbox List

```html
<div class="dynamic-list">
    <h3>Select Your Interests</h3>
    <div id="interestsList"></div>
    <button id="addInterest">Add Custom Interest</button>
</div>

<script>
const interestsList = document.getElementById('interestsList');
const addInterestBtn = document.getElementById('addInterest');

const defaultInterests = [
    { id: 'tech', label: 'Technology', description: 'Software, hardware, and gadgets' },
    { id: 'sports', label: 'Sports', description: 'Physical activities and competitions' },
    { id: 'music', label: 'Music', description: 'All genres and instruments' },
    { id: 'travel', label: 'Travel', description: 'Exploring new places and cultures' },
    { id: 'cooking', label: 'Cooking', description: 'Recipes and culinary arts' }
];

function createCheckbox(interest) {
    const checkbox = document.createElement('zero-checkbox-1.0.0');
    checkbox.label = interest.label;
    checkbox.description = interest.description;
    checkbox.value = interest.id;
    checkbox.checkboxStyle = 'custom';
    
    checkbox.addEventListener('change', (event) => {
        console.log(`Interest ${interest.label}:`, event.detail.checked);
    });
    
    return checkbox;
}

function renderInterests() {
    interestsList.innerHTML = '';
    defaultInterests.forEach(interest => {
        interestsList.appendChild(createCheckbox(interest));
    });
}

addInterestBtn.addEventListener('click', () => {
    const customLabel = prompt('Enter your custom interest:');
    if (customLabel) {
        const customInterest = {
            id: customLabel.toLowerCase().replace(/\s+/g, '-'),
            label: customLabel,
            description: 'Custom interest'
        };
        defaultInterests.push(customInterest);
        renderInterests();
    }
});

// Initialize
renderInterests();
</script>
```

## Styling Customization

### Custom Colors

```css
zero-checkbox {
    --primary-color: #007bff;
    --primary-light: rgba(0, 123, 255, 0.25);
    --border-color: #007bff;
}

/* Custom hover effects */
zero-checkbox .checkbox-field:hover {
    background: linear-gradient(90deg, 
        var(--primary-light), 
        transparent);
    border-radius: var(--border-radius-sm);
}
```

### Animation Effects

```css
zero-checkbox input[type="checkbox"] {
    transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}

zero-checkbox input[type="checkbox"]:checked {
    animation: checkboxPulse 0.3s ease;
}

@keyframes checkboxPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

zero-checkbox .checkbox-label {
    transition: color 0.2s ease;
}

zero-checkbox input[type="checkbox"]:checked + .checkbox-label {
    color: var(--primary-color);
    font-weight: 500;
}
```

### Custom Switch Style

```css
.custom-switch zero-checkbox.switch-style input[type="checkbox"] {
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
    border: none;
    width: 50px;
    height: 24px;
}

.custom-switch zero-checkbox.switch-style input[type="checkbox"]::after {
    width: 20px;
    height: 20px;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.custom-switch zero-checkbox.switch-style input[type="checkbox"]:checked::after {
    left: 26px;
}
```

## Accessibility

The component follows accessibility best practices:

- Proper label association for screen readers
- ARIA attributes for indeterminate state
- Keyboard navigation support (Space to toggle)
- Focus indicators with high contrast
- Semantic HTML structure
- Screen reader compatible descriptions

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

MIT License
