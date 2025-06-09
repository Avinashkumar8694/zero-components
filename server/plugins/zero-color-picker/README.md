# Zero Color Picker

A comprehensive color picker component with visual color selection, preset colors, multiple format support, and eye dropper functionality built with Lit Element.

## Features

- **Visual Color Selection**: Interactive saturation/value area with hue and alpha sliders
- **Multiple Formats**: Support for HEX, RGB, HSL, and HSV color formats
- **Alpha Channel**: Optional transparency/opacity control
- **Preset Colors**: Customizable color palette for quick selection
- **Eye Dropper**: Native browser eye dropper tool integration
- **Input Fields**: Direct color value input with real-time validation
- **Tabbed Interface**: Organized picker, presets, and values tabs
- **Mobile Responsive**: Touch-friendly interface with modal overlay on mobile
- **Keyboard Navigation**: Full accessibility support
- **Custom Styling**: Extensive theming and customization options

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-color-picker/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML (Hardcoded Values)
```html
<!-- Basic Color Picker -->
<zero-color-picker 
    label="Theme Color" 
    value="#6c63ff"
    placeholder="Select a color">
</zero-color-picker>

<!-- With Alpha Channel -->
<zero-color-picker 
    label="Background Color" 
    value="#ff6b6b"
    show-alpha="true"
    format="rgba">
</zero-color-picker>

<!-- Custom Presets -->
<zero-color-picker 
    label="Brand Colors" 
    preset-colors="#ff6b6b,#4ecdc4,#45b7d1,#96ceb4,#ffeaa7,#dda0dd"
    show-presets="true"
    show-input-fields="true">
</zero-color-picker>
```

### JavaScript (Dynamic Configuration)
```javascript
// Basic setup
const colorPicker = document.querySelector('zero-color-picker');
colorPicker.label = 'Theme Color';
colorPicker.value = '#6c63ff';
colorPicker.format = 'hex';

// Enable alpha channel
colorPicker.showAlpha = true;
colorPicker.format = 'rgba';

// Configure presets
colorPicker.presetColors = '#ff6b6b,#4ecdc4,#45b7d1,#96ceb4,#ffeaa7,#dda0dd';
colorPicker.showPresets = true;
colorPicker.showInputFields = true;
colorPicker.showEyeDropper = true;

// Event handling
colorPicker.addEventListener('change', (event) => {
    console.log('Color changed:', event.detail);
    // Output: { value: "#ff6b6b", hex: "#ff6b6b", rgb: {r: 255, g: 107, b: 107}, ... }
});

// Error handling
colorPicker.addEventListener('color-change', (event) => {
    const { rgb } = event.detail;
    if (rgb.r + rgb.g + rgb.b < 100) {
        colorPicker.setError('Color too dark');
    } else {
        colorPicker.clearError();
    }
});
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text displayed above the picker |
| `placeholder` | `string` | `'Select color'` | Placeholder text for the input field |
| `helpText` | `string` | `''` | Help text displayed below the input |
| `errorMessage` | `string` | `''` | Error message text |
| `value` | `string` | `'#000000'` | Current color value in specified format |
| `required` | `boolean` | `false` | Mark field as required |
| `disabled` | `boolean` | `false` | Disable the color picker |
| `readonly` | `boolean` | `false` | Make the input read-only |
| `showAlpha` | `boolean` | `false` | Enable alpha/opacity channel |
| `showPresets` | `boolean` | `true` | Show preset colors tab |
| `showInputFields` | `boolean` | `true` | Show color value inputs tab |
| `showEyeDropper` | `boolean` | `true` | Show eye dropper tool button |
| `format` | `'hex' \| 'rgb' \| 'hsl' \| 'hsv'` | `'hex'` | Output color format |
| `presetColors` | `string` | Material colors | Comma-separated list of preset colors |
| `width` | `string` | `'100%'` | Component width |
| `height` | `string` | `'36px'` | Input field height |
| `pickerWidth` | `string` | `'280px'` | Color picker dropdown width |
| `pickerHeight` | `string` | `'200px'` | Color selection area height |
| `borderRadius` | `string` | `'4px'` | Border radius for styling |
| `primaryColor` | `string` | `'#1976d2'` | Primary theme color |
| `errorColor` | `string` | `'#f44336'` | Error state color |
| `backgroundColor` | `string` | `'#ffffff'` | Background color |

## Events

### `change`
Fired when the color value changes through user interaction.

```javascript
colorPicker.addEventListener('change', (event) => {
    const { value, hex, rgb, hsl, hsv, alpha } = event.detail;
    console.log(`Color: ${value}`);
});
```

### `color-change`
Alternative event name for color changes (same as `change`).

```javascript
colorPicker.addEventListener('color-change', (event) => {
    // Handle color change
});
```

**Event Detail:**
- `value`: Formatted color string in selected format
- `hex`: Hexadecimal color value
- `rgb`: RGB object `{ r, g, b }`
- `hsl`: HSL object `{ h, s, l }`
- `hsv`: HSV object `{ h, s, v }`
- `alpha`: Alpha value (0-1)

## CSS Variables

### Layout & Spacing
- `--input-height` (36px): Input field height
- `--icon-size-sm` (16px): Slider handle sizes
- `--icon-size-md` (20px): Large slider handles
- `--icon-size-lg` (24px): Color preview height
- `--icon-size-xl` (32px): Color preview width
- `--font-size-xs` (12px): Small text (labels, help text)
- `--font-size-sm` (13px): Action buttons
- `--font-size-base` (14px): Regular text and inputs

### Typography
- `--font-weight-medium` (500): Label emphasis
- `--text-primary` (#333): Main text color
- `--text-secondary` (#666): Secondary text and labels

### Colors
- `--primary-color` (#1976d2): Selected states and accent color
- `--error-color` (#f44336): Error states and validation
- `--background-color` (#ffffff): Input and dropdown background
- `--border-color` (#e0e0e0): Borders and separators

### Borders & Effects
- `--border-radius` (4px): Component border radius
- `--transition-fast` (0.2s): Hover and focus transitions

## Public Methods

### `setColor(color: string): void`
Programmatically set the color value.

```javascript
colorPicker.setColor('#ff6b6b');
colorPicker.setColor('rgb(255, 107, 107)');
```

### `getColor(): ColorFormat`
Get the current color in all formats.

```javascript
const color = colorPicker.getColor();
console.log(color.hex);  // "#ff6b6b"
console.log(color.rgb);  // { r: 255, g: 107, b: 107 }
console.log(color.hsl);  // { h: 0, s: 100, l: 71 }
```

### `setAlpha(alpha: number): void` / `getAlpha(): number`
Control alpha/opacity value (0-1).

```javascript
colorPicker.setAlpha(0.5);
const alpha = colorPicker.getAlpha();
```

### `open(): void` / `close(): void`
Control picker visibility.

```javascript
colorPicker.open();
colorPicker.close();
```

### `setError(message: string): void` / `clearError(): void`
Control error state.

```javascript
colorPicker.setError('Invalid color selected');
colorPicker.clearError();
```

## Advanced Examples

### Theme Color Selector
```javascript
const themePicker = document.createElement('zero-color-picker');
themePicker.label = 'Primary Theme Color';
themePicker.showAlpha = false;
themePicker.format = 'hex';
themePicker.presetColors = '#1976d2,#388e3c,#f57c00,#d32f2f,#7b1fa2,#00796b';

themePicker.addEventListener('change', (event) => {
    document.documentElement.style.setProperty('--primary-color', event.detail.hex);
    updateTheme(event.detail.hex);
});
```

### Gradient Background Builder
```javascript
const startColorPicker = document.createElement('zero-color-picker');
const endColorPicker = document.createElement('zero-color-picker');

startColorPicker.label = 'Gradient Start';
endColorPicker.label = 'Gradient End';
startColorPicker.showAlpha = true;
endColorPicker.showAlpha = true;
startColorPicker.format = 'rgba';
endColorPicker.format = 'rgba';

function updateGradient() {
    const start = startColorPicker.value;
    const end = endColorPicker.value;
    const gradient = `linear-gradient(45deg, ${start}, ${end})`;
    document.getElementById('preview').style.background = gradient;
}

startColorPicker.addEventListener('change', updateGradient);
endColorPicker.addEventListener('change', updateGradient);
```

### Color Accessibility Checker
```javascript
const colorPicker = document.createElement('zero-color-picker');
colorPicker.label = 'Text Color';

function checkContrast() {
    const color = colorPicker.getColor();
    const backgroundColor = '#ffffff';
    const contrast = calculateContrast(color.rgb, { r: 255, g: 255, b: 255 });
    
    if (contrast < 4.5) {
        colorPicker.setError('Insufficient contrast for accessibility');
    } else {
        colorPicker.clearError();
    }
}

function calculateContrast(color1, color2) {
    const luminance1 = getLuminance(color1);
    const luminance2 = getLuminance(color2);
    const brightest = Math.max(luminance1, luminance2);
    const darkest = Math.min(luminance1, luminance2);
    return (brightest + 0.05) / (darkest + 0.05);
}

function getLuminance({ r, g, b }) {
    const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

colorPicker.addEventListener('change', checkContrast);
```

### Dynamic Preset Management
```javascript
const colorPicker = document.createElement('zero-color-picker');
const savedColors = JSON.parse(localStorage.getItem('savedColors') || '[]');

colorPicker.label = 'Color Picker';
colorPicker.presetColors = savedColors.join(',') || colorPicker.presetColors;

// Save color to presets
function saveCurrentColor() {
    const currentColor = colorPicker.getColor().hex;
    if (!savedColors.includes(currentColor)) {
        savedColors.push(currentColor);
        localStorage.setItem('savedColors', JSON.stringify(savedColors));
        colorPicker.presetColors = savedColors.join(',');
    }
}

// Color history tracking
let colorHistory = [];
colorPicker.addEventListener('change', (event) => {
    const color = event.detail.hex;
    colorHistory.unshift(color);
    colorHistory = colorHistory.slice(0, 10); // Keep last 10 colors
    updateHistoryDisplay();
});

// Format conversion showcase
colorPicker.addEventListener('change', (event) => {
    const { hex, rgb, hsl, hsv } = event.detail;
    
    document.getElementById('hex-output').textContent = hex;
    document.getElementById('rgb-output').textContent = 
        `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    document.getElementById('hsl-output').textContent = 
        `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`;
    document.getElementById('hsv-output').textContent = 
        `hsv(${Math.round(hsv.h)}, ${Math.round(hsv.s * 100)}%, ${Math.round(hsv.v * 100)}%)`;
});
```

### Color Palette Generator
```javascript
const basePicker = document.createElement('zero-color-picker');
basePicker.label = 'Base Color';

basePicker.addEventListener('change', (event) => {
    const baseColor = event.detail.hsl;
    const palette = generateColorPalette(baseColor);
    displayPalette(palette);
});

function generateColorPalette(baseHsl) {
    const variations = [];
    
    // Analogous colors
    for (let i = -30; i <= 30; i += 15) {
        variations.push({
            h: (baseHsl.h + i + 360) % 360,
            s: baseHsl.s,
            l: baseHsl.l
        });
    }
    
    // Complementary color
    variations.push({
        h: (baseHsl.h + 180) % 360,
        s: baseHsl.s,
        l: baseHsl.l
    });
    
    // Triadic colors
    variations.push({
        h: (baseHsl.h + 120) % 360,
        s: baseHsl.s,
        l: baseHsl.l
    });
    
    variations.push({
        h: (baseHsl.h + 240) % 360,
        s: baseHsl.s,
        l: baseHsl.l
    });
    
    return variations;
}
```

## Styling Customization

```css
/* Custom color picker theme */
zero-color-picker {
    --primary-color: #2e7d32;
    --error-color: #c62828;
    --background-color: #f8f9fa;
    --border-radius: 8px;
    --input-height: 40px;
}

/* Custom picker dimensions */
zero-color-picker {
    --picker-width: 320px;
    --picker-height: 240px;
}

/* Mobile responsive */
@media (max-width: 768px) {
    zero-color-picker {
        --input-height: 44px;
        --picker-width: 300px;
    }
}

/* Dark theme */
zero-color-picker.dark-theme {
    --background-color: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --border-color: #444444;
}

/* Custom preset grid */
zero-color-picker::part(presets-grid) {
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;
}

/* Custom action buttons */
zero-color-picker::part(action-button) {
    border-radius: 8px;
    font-weight: 600;
}
```

## Color Format Support

| Format | Example | Alpha Support |
|--------|---------|---------------|
| HEX | `#ff6b6b` | ❌ |
| RGB | `rgb(255, 107, 107)` | ✅ `rgba(255, 107, 107, 0.8)` |
| HSL | `hsl(0, 100%, 71%)` | ✅ `hsla(0, 100%, 71%, 0.8)` |
| HSV | `hsv(0, 58%, 100%)` | ❌ |

## Browser Support

- Chrome 70+ (Eye Dropper requires Chrome 95+)
- Firefox 65+
- Safari 12+
- Edge 79+

## Accessibility

- Full keyboard navigation (Tab, Enter, Arrow keys, Escape)
- ARIA labels and descriptions for screen readers
- High contrast mode compatibility
- Focus management and visual indicators
- Color-blind friendly interface options

## License

MIT License - see LICENSE file for details.
