# Zero Range Slider

A configurable range slider component with dual handles and tooltips built with Lit Element.

## Features

- **Single & Dual Range**: Support for both single value and range selection
- **Step Controls**: Optional step increment/decrement buttons
- **Value Inputs**: Optional direct value input fields
- **Tooltips**: Hover tooltips showing current values
- **Unit Support**: Display values with custom units (px, %, $, etc.)
- **Visual Progress**: Visual indication of selected range
- **Validation**: Min/max value constraints with error states
- **Accessibility**: Full keyboard navigation support
- **Responsive**: Adapts to container width

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-range-slider/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML (Hardcoded Values)
```html
<!-- Basic Range Slider -->
<zero-range-slider-1.0.0 
    label="Volume" 
    value="75" 
    min="0" 
    max="100" 
    step="5">
</zero-range-slider-1.0.0>

<!-- Dual Range Slider -->
<zero-range-slider-1.0.0 
    label="Price Range" 
    dual-range="true"
    value="200" 
    second-value="800"
    min="0" 
    max="1000" 
    unit="$"
    show-value-inputs="true">
</zero-range-slider-1.0.0>

<!-- With Tooltips and Step Controls -->
<zero-range-slider-1.0.0 
    label="Font Size" 
    value="16"
    min="8" 
    max="72" 
    step="2"
    unit="px"
    show-tooltip="true"
    show-step-controls="true">
</zero-range-slider-1.0.0>
```

### JavaScript (Dynamic Configuration)
```javascript
// Basic setup
const slider = document.querySelector('zero-range-slider-1.0.0');
slider.label = 'Brightness';
slider.value = 80;
slider.min = 0;
slider.max = 100;
slider.step = 10;

// Dual range configuration
slider.dualRange = true;
slider.secondValue = 90;
slider.showValueInputs = true;

// Event handling
slider.addEventListener('change', (event) => {
    console.log('Slider changed:', event.detail);
    // Output: { value: 80, secondValue: 90, min: 80, max: 90, dualRange: true }
});

// Error handling
slider.showError = true;
slider.errorMessage = 'Value must be between 10 and 90';
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `number` | `50` | Primary slider value |
| `min` | `number` | `0` | Minimum allowed value |
| `max` | `number` | `100` | Maximum allowed value |
| `step` | `number` | `1` | Step increment for slider movement |
| `label` | `string` | `'Range Slider'` | Label text displayed above slider |
| `unit` | `string` | `''` | Unit suffix for values (e.g., 'px', '%', '$') |
| `dualRange` | `boolean` | `false` | Enable dual handle range selection |
| `secondValue` | `number` | `75` | Second handle value (dual range mode) |
| `showTooltip` | `boolean` | `false` | Show tooltip on hover |
| `showValueInputs` | `boolean` | `false` | Show direct value input fields |
| `showStepControls` | `boolean` | `false` | Show step increment/decrement buttons |
| `disabled` | `boolean` | `false` | Disable the slider |
| `errorMessage` | `string` | `''` | Error message text |
| `showError` | `boolean` | `false` | Display error state |

## Events

### `change`
Fired when the slider value changes through user interaction.

```javascript
slider.addEventListener('change', (event) => {
    const { value, secondValue, min, max, dualRange } = event.detail;
    console.log(`Range: ${min} - ${max}`);
});
```

**Event Detail:**
- `value`: Current primary value
- `secondValue`: Current secondary value (if dual range)
- `min`: Minimum of the selected range
- `max`: Maximum of the selected range
- `dualRange`: Whether dual range is enabled

## CSS Variables

### Layout & Spacing
- `--spacing-xs` (4px): Small spacing for internal elements
- `--spacing-sm` (8px): Small margins and gaps
- `--spacing-md` (12px): Medium spacing and padding
- `--spacing-lg` (20px): Large spacing for form field margins
- `--icon-size-md` (20px): Slider thumb/handle size

### Typography
- `--font-size-sm` (12px): Small text (labels, tooltips)
- `--font-size-base` (14px): Regular text and values
- `--font-weight-medium` (500): Label and value emphasis

### Colors
- `--primary-color` (#6c63ff): Slider track progress and thumbs
- `--text-primary` (#333): Main text and labels
- `--text-secondary` (#666): Secondary text and value labels
- `--text-disabled` (#ccc): Disabled state text
- `--background-secondary` (#f5f5f5): Track background and step buttons
- `--background-disabled` (#f5f5f5): Disabled element backgrounds
- `--border-color` (#ddd): Input borders and button outlines
- `--error-color` (#f44336): Error states and validation

### Borders & Effects
- `--border-radius-xs` (3px): Small border radius for elements
- `--transition-fast` (0.2s): Quick transitions for interactions

## Advanced Examples

### Price Range Filter
```javascript
const priceSlider = document.createElement('zero-range-slider-1.0.0');
priceSlider.label = 'Price Range';
priceSlider.dualRange = true;
priceSlider.min = 0;
priceSlider.max = 2000;
priceSlider.value = 100;
priceSlider.secondValue = 1500;
priceSlider.step = 50;
priceSlider.unit = '$';
priceSlider.showValueInputs = true;

priceSlider.addEventListener('change', (event) => {
    const { min, max } = event.detail;
    filterProducts(min, max);
});
```

### Audio Volume Control
```javascript
const volumeSlider = document.createElement('zero-range-slider-1.0.0');
volumeSlider.label = 'Volume';
volumeSlider.min = 0;
volumeSlider.max = 100;
volumeSlider.value = 75;
volumeSlider.step = 5;
volumeSlider.unit = '%';
volumeSlider.showTooltip = true;
volumeSlider.showStepControls = true;

volumeSlider.addEventListener('change', (event) => {
    const volume = event.detail.value / 100;
    audioContext.gainNode.gain.value = volume;
});
```

### Form Validation with Range
```javascript
const ageRangeSlider = document.createElement('zero-range-slider-1.0.0');
ageRangeSlider.label = 'Age Range';
ageRangeSlider.dualRange = true;
ageRangeSlider.min = 18;
ageRangeSlider.max = 65;
ageRangeSlider.value = 25;
ageRangeSlider.secondValue = 45;
ageRangeSlider.showValueInputs = true;

function validateAgeRange() {
    const minAge = Math.min(ageRangeSlider.value, ageRangeSlider.secondValue);
    const maxAge = Math.max(ageRangeSlider.value, ageRangeSlider.secondValue);
    
    if (maxAge - minAge < 5) {
        ageRangeSlider.showError = true;
        ageRangeSlider.errorMessage = 'Age range must be at least 5 years';
        return false;
    }
    
    ageRangeSlider.showError = false;
    return true;
}

ageRangeSlider.addEventListener('change', validateAgeRange);
```

### Dynamic Range Updates
```javascript
const dynamicSlider = document.createElement('zero-range-slider-1.0.0');
dynamicSlider.label = 'Dynamic Range';

// Update range based on external data
function updateSliderRange(dataSet) {
    const values = dataSet.map(item => item.value);
    dynamicSlider.min = Math.min(...values);
    dynamicSlider.max = Math.max(...values);
    dynamicSlider.value = values[0];
    dynamicSlider.step = (dynamicSlider.max - dynamicSlider.min) / 100;
}

// Animate to target value
function animateToValue(targetValue, duration = 1000) {
    const startValue = dynamicSlider.value;
    const startTime = Date.now();
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        dynamicSlider.value = startValue + (targetValue - startValue) * progress;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}
```

## Styling Customization

```css
/* Custom slider theme */
zero-range-slider {
    --primary-color: #ff6b6b;
    --background-secondary: #f8f9fa;
    --border-radius-xs: 8px;
    --icon-size-md: 24px;
}

/* Custom track styling */
zero-range-slider::part(slider-track) {
    height: 8px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
}

/* Custom thumb styling */
zero-range-slider::part(slider-thumb) {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    border: 3px solid white;
}

/* Responsive sizing */
@media (max-width: 768px) {
    zero-range-slider {
        --icon-size-md: 18px;
        --font-size-base: 13px;
    }
}
```

## Accessibility

- Full keyboard navigation support (arrow keys, page up/down, home/end)
- ARIA labels and descriptions for screen readers
- High contrast mode compatibility
- Focus indicators for all interactive elements
- Semantic HTML structure with proper labeling

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## License

MIT License - see LICENSE file for details.
