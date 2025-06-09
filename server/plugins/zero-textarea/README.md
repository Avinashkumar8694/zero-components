# Zero Textarea Component

A configurable textarea component with auto-resize, character/word counting, and comprehensive form validation support.

## Features

- ✅ Global theme integration with CSS variables
- ✅ Auto-resize functionality
- ✅ Character and word counting
- ✅ Built-in validation and error handling
- ✅ Accessible form labeling
- ✅ Responsive design
- ✅ Customizable rows and character limits
- ✅ Event handling for input and change

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-textarea/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML with Hardcoded Values

```html
<zero-textarea 
    value="Sample long text content..."
    label="Description"
    placeholder="Enter your description here"
    rows="6"
    max-length="500"
    show-character-count="true"
    show-word-count="true">
</zero-textarea>
```

### JavaScript/TypeScript Dynamic Configuration

```javascript
// Get reference to the component
const textarea = document.querySelector('zero-textarea');

// Configure properties dynamically
textarea.value = 'Dynamic content here...';
textarea.label = 'Product Description';
textarea.placeholder = 'Describe your product in detail';
textarea.rows = 8;
textarea.maxLength = 1000;
textarea.autoResize = true;
textarea.showCharacterCount = true;
textarea.showWordCount = true;

// Listen to events
textarea.addEventListener('input', (event) => {
    const { value, characterCount, wordCount } = event.detail;
    console.log(`Input: ${characterCount} chars, ${wordCount} words`);
});

textarea.addEventListener('change', (event) => {
    console.log('Content changed:', event.detail.value);
});
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | string | `''` | Current textarea value |
| `label` | string | `'Textarea'` | Label text displayed above textarea |
| `placeholder` | string | `'Enter your text here...'` | Placeholder text shown when empty |
| `rows` | number | `4` | Number of visible rows |
| `maxLength` | number | `0` | Maximum character length (0 = no limit) |
| `required` | boolean | `false` | Whether the field is required |
| `disabled` | boolean | `false` | Whether the textarea is disabled |
| `autoResize` | boolean | `false` | Auto-resize height based on content |
| `showCharacterCount` | boolean | `true` | Show character count |
| `showWordCount` | boolean | `false` | Show word count |
| `errorMessage` | string | `''` | Error message to display |
| `showError` | boolean | `false` | Whether to show error state |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `input` | `{ value: string, characterCount: number, wordCount: number }` | Fired on every keystroke |
| `change` | `{ value: string, characterCount: number, wordCount: number }` | Fired when textarea loses focus and value changed |

## CSS Variables

The component uses the following CSS variables from the global theme:

### Layout & Spacing
- `--spacing-xs: 3px` - Extra small spacing (margins)
- `--spacing-sm: 8px` - Small spacing (padding, margins)
- `--spacing-md: 16px` - Medium spacing (padding)
- `--spacing-lg: 24px` - Large spacing (field margin bottom)

### Typography
- `--font-family: 'Roboto', sans-serif` - Textarea font family
- `--font-size-base: 14px` - Base font size for textarea and label
- `--font-size-sm: 12px` - Small font size for counters and error messages

### Colors
- `--text-primary: #2a3b4d` - Primary text color
- `--text-secondary: #86868b` - Placeholder and counter text color
- `--background-primary: #ffffff` - Textarea background
- `--border-color: rgba(0, 0, 0, 0.1)` - Default border color
- `--primary-color: #6c63ff` - Focus border color
- `--primary-light: #6c63ff40` - Focus shadow and hover border
- `--error-color: #d93025` - Error state color
- `--error-light: #fce8e6` - Error focus shadow
- `--warning-color: #ffc107` - Near-limit character count color

### Borders & Effects
- `--border-radius-sm: 4px` - Textarea border radius
- `--primary-background-hover: rgba(108, 99, 255, 0.02)` - Hover background
- `--background-disabled: #f5f5f5` - Disabled background
- `--text-disabled: #999` - Disabled text color

## Advanced Examples

### Auto-resizing Textarea with Limits

```html
<zero-textarea 
    label="Comments"
    placeholder="Share your thoughts..."
    auto-resize="true"
    max-length="2000"
    show-character-count="true"
    show-word-count="true">
</zero-textarea>

<script>
const textarea = document.querySelector('zero-textarea');

// Warn user when approaching character limit
textarea.addEventListener('input', (event) => {
    const { characterCount } = event.detail;
    const maxLength = textarea.maxLength;
    
    if (characterCount > maxLength * 0.9) {
        console.log('Approaching character limit!');
    }
});
</script>
```

### Form Validation Example

```html
<zero-textarea 
    id="description"
    label="Product Description"
    placeholder="Describe your product..."
    required="true"
    max-length="500"
    rows="6"
    show-character-count="true"
    error-message="Description must be at least 50 characters"
    show-error="false">
</zero-textarea>

<script>
const descTextarea = document.getElementById('description');

descTextarea.addEventListener('change', (event) => {
    const { value, characterCount } = event.detail;
    const isValid = characterCount >= 50;
    
    descTextarea.showError = !isValid;
    descTextarea.errorMessage = !isValid ? 
        'Description must be at least 50 characters' : '';
});
</script>
```

### Blog Post Editor

```html
<div class="blog-editor">
    <zero-textarea 
        id="blogPost"
        label="Blog Post Content"
        placeholder="Start writing your blog post..."
        auto-resize="true"
        max-length="5000"
        rows="10"
        show-character-count="true"
        show-word-count="true">
    </zero-textarea>
    
    <div class="editor-stats">
        <span id="readingTime">Reading time: 0 min</span>
    </div>
</div>

<style>
.blog-editor {
    max-width: 800px;
    margin: 0 auto;
}

.editor-stats {
    margin-top: var(--spacing-sm, 8px);
    font-size: var(--font-size-sm, 12px);
    color: var(--text-secondary, #86868b);
}
</style>

<script>
const blogTextarea = document.getElementById('blogPost');
const readingTimeSpan = document.getElementById('readingTime');

blogTextarea.addEventListener('input', (event) => {
    const { wordCount } = event.detail;
    // Average reading speed: 200 words per minute
    const readingTime = Math.ceil(wordCount / 200);
    readingTimeSpan.textContent = `Reading time: ${readingTime} min`;
});
</script>
```

### Multi-language Support

```html
<zero-textarea 
    id="multilangText"
    label="Content"
    placeholder="Enter content..."
    rows="8"
    max-length="1000"
    show-character-count="true">
</zero-textarea>

<select id="langSelector">
    <option value="en">English</option>
    <option value="es">Español</option>
    <option value="fr">Français</option>
</select>

<script>
const textarea = document.getElementById('multilangText');
const langSelector = document.getElementById('langSelector');

const placeholders = {
    en: 'Enter content...',
    es: 'Ingrese contenido...',
    fr: 'Entrez le contenu...'
};

langSelector.addEventListener('change', (e) => {
    const lang = e.target.value;
    textarea.placeholder = placeholders[lang];
});
</script>
```

## Styling Customization

### Custom Theme

```css
zero-textarea {
    --font-size-base: 16px;
    --border-radius-sm: 8px;
    --primary-color: #007bff;
    --warning-color: #ff9800;
}

/* Custom character count styling */
zero-textarea .character-count.near-limit {
    color: #ff9800;
    font-weight: 600;
}

zero-textarea .character-count.over-limit {
    color: #f44336;
    font-weight: 700;
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
}
```

### Auto-resize Animation

```css
zero-textarea textarea.auto-resize {
    transition: height 0.2s ease;
}
```

## Accessibility

The component follows accessibility best practices:

- Proper label association with `for` attribute
- ARIA attributes for character limits and error states
- Keyboard navigation support
- Screen reader compatible announcements for counters
- High contrast support through CSS variables

## Performance Notes

- Auto-resize is optimized to prevent excessive reflows
- Character and word counting is debounced for better performance
- Event handlers use efficient DOM queries

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

MIT License
