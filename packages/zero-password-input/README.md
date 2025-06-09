# Zero Password Input Component

A configurable password input component with show/hide functionality, strength meter, and comprehensive validation support.

## Features

- ✅ Global theme integration with CSS variables
- ✅ Password visibility toggle
- ✅ Password strength meter with visual indicators
- ✅ Built-in validation and error handling
- ✅ Accessible form labeling
- ✅ Responsive design
- ✅ Secure input masking
- ✅ Event handling for input and change

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-password-input/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML with Hardcoded Values

```html
<zero-password-input 
    value=""
    label="Password"
    placeholder="Enter your password"
    required="true"
    show-toggle="true"
    show-strength-meter="true">
</zero-password-input>
```

### JavaScript/TypeScript Dynamic Configuration

```javascript
// Get reference to the component
const passwordInput = document.querySelector('zero-password-input');

// Configure properties dynamically
passwordInput.value = '';
passwordInput.label = 'Create Password';
passwordInput.placeholder = 'Choose a strong password';
passwordInput.required = true;
passwordInput.showToggle = true;
passwordInput.showStrengthMeter = true;

// Listen to events
passwordInput.addEventListener('input', (event) => {
    console.log('Password input:', event.detail.value.length + ' characters');
});

passwordInput.addEventListener('change', (event) => {
    console.log('Password changed');
});
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | string | `''` | Current password value |
| `label` | string | `'Password'` | Label text displayed above input |
| `placeholder` | string | `'Enter password'` | Placeholder text shown when empty |
| `required` | boolean | `false` | Whether the field is required |
| `disabled` | boolean | `false` | Whether the input is disabled |
| `showToggle` | boolean | `true` | Show password visibility toggle button |
| `showStrengthMeter` | boolean | `false` | Show password strength meter |
| `errorMessage` | string | `''` | Error message to display |
| `showError` | boolean | `false` | Whether to show error state |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `input` | `{ value: string }` | Fired on every keystroke |
| `change` | `{ value: string }` | Fired when input loses focus and value changed |

## Password Strength Calculation

The strength meter evaluates passwords based on:

- **Length**: 8+ characters (1 point)
- **Lowercase**: Contains a-z (1 point)
- **Uppercase**: Contains A-Z (1 point) 
- **Numbers**: Contains 0-9 (1 point)
- **Special Characters**: Contains symbols (1 point)

**Strength Levels:**
- **Weak**: 0-2 points (red, 33% width)
- **Medium**: 3-4 points (orange, 66% width)
- **Strong**: 5 points (green, 100% width)

## CSS Variables

The component uses the following CSS variables from the global theme:

### Layout & Spacing
- `--spacing-xs: 3px` - Extra small spacing (margins, padding)
- `--spacing-sm: 8px` - Small spacing (input padding)
- `--spacing-md: 16px` - Medium spacing (input padding)
- `--spacing-lg: 24px` - Large spacing (field margin bottom)
- `--input-height: 36px` - Standard input height
- `--icon-size-sm: 16px` - Toggle button icon size

### Typography
- `--font-family: 'Roboto', sans-serif` - Input font family
- `--font-size-base: 14px` - Base font size for input and label
- `--font-size-sm: 12px` - Small font size for error messages

### Colors
- `--text-primary: #2a3b4d` - Primary text color
- `--text-secondary: #86868b` - Placeholder and toggle button color
- `--text-disabled: #999` - Disabled text color
- `--background-primary: #ffffff` - Input background
- `--background-secondary: #f5f5f5` - Strength meter background
- `--background-disabled: #f5f5f5` - Disabled background
- `--border-color: rgba(0, 0, 0, 0.1)` - Default border color
- `--primary-color: #6c63ff` - Focus border and toggle hover
- `--primary-light: #6c63ff40` - Focus shadow and hover border
- `--error-color: #d93025` - Error state and weak strength color
- `--error-light: #fce8e6` - Error focus shadow
- `--warning-color: #ff9800` - Medium strength color
- `--success-color: #4caf50` - Strong strength color

### Borders & Effects
- `--border-radius-sm: 4px` - Input border radius
- `--border-radius-xs: 2px` - Toggle button and strength bar radius
- `--primary-background-hover: rgba(108, 99, 255, 0.02)` - Hover background

## Advanced Examples

### Password Confirmation

```html
<div class="password-form">
    <zero-password-input 
        id="password"
        label="Password"
        placeholder="Enter password"
        required="true"
        show-strength-meter="true">
    </zero-password-input>
    
    <zero-password-input 
        id="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your password"
        required="true"
        show-toggle="false"
        error-message="Passwords do not match"
        show-error="false">
    </zero-password-input>
</div>

<script>
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');

function validatePasswordMatch() {
    const password = passwordInput.value;
    const confirm = confirmInput.value;
    
    if (confirm && password !== confirm) {
        confirmInput.showError = true;
        confirmInput.errorMessage = 'Passwords do not match';
    } else {
        confirmInput.showError = false;
    }
}

passwordInput.addEventListener('input', validatePasswordMatch);
confirmInput.addEventListener('input', validatePasswordMatch);
</script>
```

### Registration Form with Requirements

```html
<div class="registration-form">
    <zero-password-input 
        id="newPassword"
        label="Create Password"
        placeholder="Choose a strong password"
        required="true"
        show-strength-meter="true">
    </zero-password-input>
    
    <div class="password-requirements">
        <div class="requirement" id="length">✗ At least 8 characters</div>
        <div class="requirement" id="lowercase">✗ One lowercase letter</div>
        <div class="requirement" id="uppercase">✗ One uppercase letter</div>
        <div class="requirement" id="number">✗ One number</div>
        <div class="requirement" id="special">✗ One special character</div>
    </div>
</div>

<style>
.password-requirements {
    margin-top: var(--spacing-sm, 8px);
    font-size: var(--font-size-sm, 12px);
}

.requirement {
    color: var(--error-color, #f44336);
    margin: var(--spacing-xs, 2px) 0;
}

.requirement.met {
    color: var(--success-color, #4caf50);
}
</style>

<script>
const newPasswordInput = document.getElementById('newPassword');

const requirements = {
    length: { element: document.getElementById('length'), test: (p) => p.length >= 8 },
    lowercase: { element: document.getElementById('lowercase'), test: (p) => /[a-z]/.test(p) },
    uppercase: { element: document.getElementById('uppercase'), test: (p) => /[A-Z]/.test(p) },
    number: { element: document.getElementById('number'), test: (p) => /[0-9]/.test(p) },
    special: { element: document.getElementById('special'), test: (p) => /[^A-Za-z0-9]/.test(p) }
};

newPasswordInput.addEventListener('input', (event) => {
    const password = event.detail.value;
    
    Object.values(requirements).forEach(req => {
        if (req.test(password)) {
            req.element.classList.add('met');
            req.element.textContent = req.element.textContent.replace('✗', '✓');
        } else {
            req.element.classList.remove('met');
            req.element.textContent = req.element.textContent.replace('✓', '✗');
        }
    });
});
</script>
```

### Login Form with Remember Password

```html
<form class="login-form" id="loginForm">
    <zero-text-input 
        id="username"
        label="Username"
        placeholder="Enter username"
        required="true">
    </zero-text-input>
    
    <zero-password-input 
        id="loginPassword"
        label="Password"
        placeholder="Enter password"
        required="true"
        show-strength-meter="false">
    </zero-password-input>
    
    <zero-checkbox 
        id="rememberMe"
        label="Remember me">
    </zero-checkbox>
    
    <button type="submit">Login</button>
</form>

<script>
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('loginPassword').value,
        remember: document.getElementById('rememberMe').checked
    };
    
    console.log('Login attempt:', { ...formData, password: '[HIDDEN]' });
});
</script>
```

### Password Generator Integration

```html
<div class="password-generator">
    <zero-password-input 
        id="generatedPassword"
        label="Generated Password"
        show-strength-meter="true"
        show-toggle="true">
    </zero-password-input>
    
    <div class="generator-controls">
        <button type="button" id="generateBtn">Generate Password</button>
        <label>
            Length: <input type="range" id="lengthSlider" min="8" max="32" value="12">
            <span id="lengthDisplay">12</span>
        </label>
        <label>
            <input type="checkbox" id="includeSymbols" checked> Include Symbols
        </label>
    </div>
</div>

<script>
const generatedPasswordInput = document.getElementById('generatedPassword');
const generateBtn = document.getElementById('generateBtn');
const lengthSlider = document.getElementById('lengthSlider');
const lengthDisplay = document.getElementById('lengthDisplay');
const includeSymbols = document.getElementById('includeSymbols');

function generatePassword(length, useSymbols) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let chars = lowercase + uppercase + numbers;
    if (useSymbols) chars += symbols;
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return password;
}

generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthSlider.value);
    const useSymbols = includeSymbols.checked;
    const password = generatePassword(length, useSymbols);
    generatedPasswordInput.value = password;
});

lengthSlider.addEventListener('input', (e) => {
    lengthDisplay.textContent = e.target.value;
});
</script>
```

## Styling Customization

### Custom Strength Meter Colors

```css
zero-password-input .strength-weak {
    background: linear-gradient(90deg, #ff4444, #ff6666);
}

zero-password-input .strength-medium {
    background: linear-gradient(90deg, #ffaa00, #ffcc44);
}

zero-password-input .strength-strong {
    background: linear-gradient(90deg, #00aa44, #44cc66);
}
```

### Custom Toggle Button

```css
zero-password-input .toggle-button {
    background: var(--background-secondary, #f5f5f5);
    border: 1px solid var(--border-color, #ddd);
    border-radius: 50%;
    width: 24px;
    height: 24px;
}

zero-password-input .toggle-button:hover {
    background: var(--primary-light, #6c63ff40);
    border-color: var(--primary-color, #6c63ff);
}
```

### Animated Strength Meter

```css
zero-password-input .strength-bar {
    position: relative;
    overflow: hidden;
}

zero-password-input .strength-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255,255,255,0.4), 
        transparent);
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}
```

## Security Considerations

- Password values are not logged or exposed in events
- Input type switches between 'password' and 'text' for visibility toggle
- Component doesn't store passwords in localStorage or any persistent storage
- Strength calculation is performed client-side only

## Accessibility

The component follows accessibility best practices:

- Proper label association with `for` attribute
- ARIA attributes for password visibility state
- Screen reader compatible toggle button
- Keyboard navigation support
- High contrast support through CSS variables
- Password strength communicated to screen readers

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

MIT License
