# Zero Input Widgets

A comprehensive form demo component that showcases all available input widget types in the zero-components library. This component demonstrates a complete user profile form with various input controls including text inputs, dropdowns, checkboxes, sliders, file uploads, date pickers, and more.

## Features

- **Complete Form Demo**: Showcases all available input widget types
- **Real-time Form Preview**: Displays form data as JSON in real-time
- **Validation Support**: Integrates with form validation patterns
- **Responsive Design**: Mobile-friendly layout with consistent styling
- **Event Handling**: Custom submit event with complete form data
- **Theme Integration**: Uses standardized theme variables for consistent appearance
- **Accessibility**: Proper labeling and keyboard navigation support

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-input-widgets/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML (Hardcoded Values)

```html
<zero-input-widgets-1.0.0
    username="john_doe"
    password=""
    user-role="user"
    terms-accepted="true"
    age="25"
    profile-picture=""
    birth-date="1999-01-01"
    favorite-color="#6c63ff"
    height="175"
    bio="I'm a web developer passionate about creating great user experiences."
    newsletter-subscribed="true">
</zero-input-widgets-1.0.0>
```

### JavaScript (Dynamic Configuration)

```javascript
// Create and configure the input widgets component
const inputWidgets = document.createElement('zero-input-widgets-1.0.0');

// Set user data
inputWidgets.username = 'jane_smith';
inputWidgets.userRole = 'admin';
inputWidgets.termsAccepted = true;
inputWidgets.age = 28;
inputWidgets.birthDate = '1995-06-15';
inputWidgets.favoriteColor = '#ff6b6b';
inputWidgets.height = 165;
inputWidgets.bio = 'Product manager with 5 years of experience in tech.';
inputWidgets.newsletterSubscribed = false;

// Add event listener for form submission
inputWidgets.addEventListener('onSubmit', (event) => {
    console.log('Form submitted:', event.detail.formData);
    // Handle form submission logic here
});

// Append to DOM
document.body.appendChild(inputWidgets);
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `username` | `string` | `''` | User's username for login |
| `password` | `string` | `''` | User's password (hidden input) |
| `userRole` | `string` | `''` | Selected user role from dropdown |
| `termsAccepted` | `boolean` | `false` | Whether user accepted terms and conditions |
| `age` | `number` | `25` | User's age (18-100 range slider) |
| `profilePicture` | `string` | `''` | Selected profile picture filename |
| `birthDate` | `string` | `''` | User's birth date (ISO format) |
| `favoriteColor` | `string` | `'#000000'` | User's favorite color (hex format) |
| `height` | `number` | `170` | User's height in centimeters |
| `bio` | `string` | `''` | User's biography (textarea) |
| `newsletterSubscribed` | `boolean` | `false` | Newsletter subscription preference |

## Events

### onSubmit

Triggered when the form is submitted via the submit button.

**Event Detail:**
```typescript
{
  formData: {
    username: string;
    password: string;
    userRole: string;
    termsAccepted: boolean;
    age: number;
    profilePicture: string;
    birthDate: string;
    favoriteColor: string;
    height: number;
    bio: string;
    newsletterSubscribed: boolean;
  }
}
```

## CSS Variables

### Layout & Spacing
- `--spacing-xs`: Extra small spacing (6px) - field label margins
- `--spacing-sm`: Small spacing (8px) - input padding, button gaps
- `--spacing-md`: Medium spacing (12px) - input padding, result display
- `--spacing-lg`: Large spacing (20px) - container padding, field gaps
- `--input-height`: Standard input height (36px)
- `--icon-size-sm`: Small icon size (18px) - checkbox dimensions

### Typography
- `--font-family`: Primary font family
- `--font-size-base`: Base font size (14px) - labels, inputs
- `--font-size-sm`: Small font size (12px) - range display, result text
- `--text-primary`: Primary text color (#333)
- `--text-secondary`: Secondary text color (#666) - placeholders, descriptions

### Colors
- `--primary-color`: Primary brand color (#6c63ff) - focused borders, range values
- `--primary-light`: Light primary color - hover effects, focus shadows
- `--primary-dark`: Dark primary color (#5b52d9) - button hover states
- `--primary-background-hover`: Subtle hover background
- `--background-primary`: Primary background color (#fff)
- `--background-secondary`: Secondary background (#f5f5f5) - result display
- `--border-color`: Border color (#ddd)

### Borders & Effects
- `--border-radius-xs`: Extra small radius (3px) - range slider
- `--border-radius-sm`: Small radius (4px) - inputs, buttons
- `--transition-duration`: Animation duration for hover/focus states

## Public Methods

### handleSubmit(event: Event)

Handles form submission and dispatches the `onSubmit` event with complete form data.

```javascript
// Manually trigger form submission
const inputWidgets = document.querySelector('zero-input-widgets-1.0.0');
inputWidgets.handleSubmit(new Event('click'));
```

## Advanced Examples

### Form Validation Integration

```html
<zero-input-widgets-1.0.0 id="userForm"></zero-input-widgets-1.0.0>

<script>
const form = document.getElementById('userForm');

form.addEventListener('onSubmit', (event) => {
    const { formData } = event.detail;
    
    // Validation logic
    const errors = [];
    
    if (!formData.username || formData.username.length < 3) {
        errors.push('Username must be at least 3 characters');
    }
    
    if (!formData.password || formData.password.length < 8) {
        errors.push('Password must be at least 8 characters');
    }
    
    if (!formData.termsAccepted) {
        errors.push('You must accept the terms and conditions');
    }
    
    if (errors.length > 0) {
        alert('Validation errors:\n' + errors.join('\n'));
        return;
    }
    
    // Submit to server
    fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
});
</script>
```

### Dynamic Form Population

```javascript
// Populate form from API data
async function loadUserProfile(userId) {
    const response = await fetch(`/api/users/${userId}`);
    const userData = await response.json();
    
    const form = document.querySelector('zero-input-widgets-1.0.0');
    
    form.username = userData.username;
    form.userRole = userData.role;
    form.age = userData.age;
    form.birthDate = userData.birthDate;
    form.favoriteColor = userData.preferences.color;
    form.height = userData.profile.height;
    form.bio = userData.profile.bio;
    form.newsletterSubscribed = userData.preferences.newsletter;
}
```

### Multi-step Form Integration

```javascript
class MultiStepFormManager {
    constructor() {
        this.currentStep = 1;
        this.formData = {};
        this.setupForm();
    }
    
    setupForm() {
        const form = document.querySelector('zero-input-widgets-1.0.0');
        
        form.addEventListener('onSubmit', (event) => {
            this.formData = { ...this.formData, ...event.detail.formData };
            
            if (this.currentStep < 3) {
                this.nextStep();
            } else {
                this.submitCompleteForm();
            }
        });
    }
    
    nextStep() {
        this.currentStep++;
        this.showStep(this.currentStep);
    }
    
    submitCompleteForm() {
        console.log('Complete form data:', this.formData);
        // Submit to server
    }
}
```

### Real-time Form Sync

```javascript
// Sync form data with localStorage
const form = document.querySelector('zero-input-widgets-1.0.0');
const STORAGE_KEY = 'userProfileDraft';

// Load saved data
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    const data = JSON.parse(savedData);
    Object.keys(data).forEach(key => {
        if (form.hasOwnProperty(key)) {
            form[key] = data[key];
        }
    });
}

// Save on changes
const saveFormData = () => {
    const currentData = {
        username: form.username,
        userRole: form.userRole,
        age: form.age,
        birthDate: form.birthDate,
        favoriteColor: form.favoriteColor,
        height: form.height,
        bio: form.bio,
        newsletterSubscribed: form.newsletterSubscribed
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
};

// Auto-save every 2 seconds
setInterval(saveFormData, 2000);
```

## Styling Customization

### Custom Form Layout

```css
zero-input-widgets-1.0.0 {
    --spacing-lg: 24px;
    --input-height: 40px;
    --border-radius-sm: 8px;
    max-width: 800px;
}

/* Two-column layout for larger screens */
@media (min-width: 768px) {
    zero-input-widgets-1.0.0 .form-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-lg);
    }
    
    zero-input-widgets-1.0.0 .submit-button {
        grid-column: 1 / -1;
        justify-self: center;
    }
}
```

### Custom Color Scheme

```css
zero-input-widgets-1.0.0 {
    --primary-color: #2563eb;
    --primary-light: #3b82f6;
    --primary-dark: #1d4ed8;
    --background-primary: #ffffff;
    --background-secondary: #f8fafc;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --border-color: #e2e8f0;
}
```

### Dark Theme Support

```css
@media (prefers-color-scheme: dark) {
    zero-input-widgets-1.0.0 {
        --background-primary: #1e293b;
        --background-secondary: #334155;
        --text-primary: #f1f5f9;
        --text-secondary: #cbd5e1;
        --border-color: #475569;
    }
}
```

## Accessibility

The component follows accessibility best practices:

- **Semantic HTML**: Proper form structure with labels and fieldsets
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: ARIA labels and descriptions where needed
- **Focus Management**: Clear focus indicators and logical tab order
- **Label Association**: All inputs properly associated with labels

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: Uses modern web APIs with graceful degradation

## Related Components

- `zero-text-input` - Individual text input component
- `zero-dropdown` - Standalone dropdown component
- `zero-checkbox` - Individual checkbox component
- `zero-range-slider` - Standalone range slider
- `zero-file-input` - Individual file input component
- `zero-date-picker` - Standalone date picker
- `zero-color-picker` - Individual color picker

## License

MIT License - see LICENSE file for details.
