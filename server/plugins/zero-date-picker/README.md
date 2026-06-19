# Zero Date Picker

A comprehensive date picker component with calendar interface, range selection, and advanced formatting options built with Lit Element.

## Features

- **Single & Range Selection**: Support for both single date and date range selection
- **Calendar Navigation**: Month/year navigation with intuitive controls
- **Multiple Date Formats**: Customizable input and display formats
- **Date Validation**: Min/max date constraints with disabled date support
- **Week Numbers**: Optional week number display
- **Today/Clear Buttons**: Quick actions for common operations
- **Responsive Design**: Mobile-friendly dropdown positioning
- **Keyboard Navigation**: Full keyboard accessibility support
- **Custom Styling**: Extensive theming and color customization
- **Time Selection**: Optional time picker integration

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-date-picker/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML (Hardcoded Values)
```html
<!-- Basic Date Picker -->
<zero-date-picker-1.0.0 
    label="Birth Date" 
    placeholder="Select your birth date"
    value="1990-05-15"
    date-format="yyyy-MM-dd"
    display-format="MMM d, yyyy">
</zero-date-picker-1.0.0>

<!-- Date Range Picker -->
<zero-date-picker-1.0.0 
    label="Vacation Dates" 
    range-selection="true"
    placeholder="Select date range"
    show-today-button="true"
    show-clear-button="true">
</zero-date-picker-1.0.0>

<!-- With Validation -->
<zero-date-picker-1.0.0 
    label="Event Date" 
    required="true"
    min-date="2024-01-01"
    max-date="2024-12-31"
    help-text="Select a date within 2024"
    show-week-numbers="true">
</zero-date-picker-1.0.0>
```

### JavaScript (Dynamic Configuration)
```javascript
// Basic setup
const datePicker = document.querySelector('zero-date-picker-1.0.0');
datePicker.label = 'Appointment Date';
datePicker.placeholder = 'Choose appointment date';
datePicker.required = true;

// Configure date range
datePicker.rangeSelection = true;
datePicker.showTodayButton = true;
datePicker.showClearButton = true;

// Set date constraints
datePicker.minDate = '2024-01-01';
datePicker.maxDate = '2024-12-31';

// Event handling
datePicker.addEventListener('change', (event) => {
    console.log('Date changed:', event.detail);
    if (event.detail.isRange) {
        console.log(`Range: ${event.detail.startDate} to ${event.detail.endDate}`);
    } else {
        console.log(`Selected: ${event.detail.date}`);
    }
});

// Error handling
datePicker.addEventListener('date-change', (event) => {
    if (event.detail.date < new Date()) {
        datePicker.setError('Cannot select past dates');
    } else {
        datePicker.clearError();
    }
});
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text displayed above the input |
| `placeholder` | `string` | `'Select date'` | Placeholder text for the input field |
| `helpText` | `string` | `''` | Help text displayed below the input |
| `errorMessage` | `string` | `''` | Error message text |
| `value` | `string` | `''` | Current date value (ISO format or range) |
| `required` | `boolean` | `false` | Mark field as required |
| `disabled` | `boolean` | `false` | Disable the date picker |
| `readonly` | `boolean` | `false` | Make the input read-only |
| `showTodayButton` | `boolean` | `true` | Show "Today" button in calendar |
| `showClearButton` | `boolean` | `true` | Show "Clear" button in calendar |
| `showWeekNumbers` | `boolean` | `false` | Display week numbers in calendar |
| `includeTime` | `boolean` | `false` | Enable time selection (future feature) |
| `rangeSelection` | `boolean` | `false` | Enable date range selection |
| `dateFormat` | `string` | `'yyyy-MM-dd'` | Format for value output |
| `displayFormat` | `string` | `'MMM d, yyyy'` | Format for input display |
| `minDate` | `string` | `''` | Minimum selectable date |
| `maxDate` | `string` | `''` | Maximum selectable date |
| `firstDayOfWeek` | `number` | `0` | First day of week (0=Sunday, 1=Monday, etc.) |
| `width` | `string` | `'100%'` | Component width |
| `height` | `string` | `'var(--input-height, 36px)'` | Input height |
| `borderRadius` | `string` | `'4px'` | Border radius for styling |
| `primaryColor` | `string` | `'#1976d2'` | Primary theme color |
| `errorColor` | `string` | `'#f44336'` | Error state color |
| `backgroundColor` | `string` | `'#ffffff'` | Background color |

## Events

### `change`
Fired when the date selection changes through user interaction.

```javascript
datePicker.addEventListener('change', (event) => {
    const { value, date, startDate, endDate, isRange } = event.detail;
    console.log(`Date changed: ${value}`);
});
```

### `date-change`
Alternative event name for date changes (same as `change`).

```javascript
datePicker.addEventListener('date-change', (event) => {
    // Handle date change
});
```

**Event Detail (Single Date):**
- `value`: Formatted date string
- `date`: Date object
- `isRange`: false

**Event Detail (Date Range):**
- `value`: Formatted range string ("start - end")
- `startDate`: Start date object
- `endDate`: End date object
- `isRange`: true

## CSS Variables

### Layout & Spacing
- `--input-height` (36px): Input field height
- `--icon-size-md` (20px): Calendar icon size
- `--font-size-xs` (12px): Small text (help, error messages)
- `--font-size-base` (14px): Regular text and input content
- `--font-size-lg` (16px): Large text (month/year header)

### Typography
- `--font-weight-medium` (500): Label emphasis
- `--text-primary` (#333): Main text color
- `--text-secondary` (#666): Secondary text
- `--text-muted` (#999): Muted text (week numbers)

### Colors
- `--primary-color` (#1976d2): Selected dates and accent color
- `--error-color` (#f44336): Error states and validation
- `--background-color` (#ffffff): Input and calendar background
- `--border-color` (#e0e0e0): Borders and separators

### Borders & Effects
- `--border-radius` (4px): Component border radius
- `--transition-fast` (0.2s): Hover and focus transitions

## Public Methods

### `getSelectedDate(): Date | null`
Returns the currently selected date (single selection mode).

```javascript
const selectedDate = datePicker.getSelectedDate();
console.log('Selected:', selectedDate);
```

### `getSelectedDateRange(): { start: Date | null; end: Date | null }`
Returns the selected date range (range selection mode).

```javascript
const { start, end } = datePicker.getSelectedDateRange();
console.log(`Range: ${start} to ${end}`);
```

### `setDate(date: Date | string): void`
Programmatically set the selected date.

```javascript
datePicker.setDate('2024-06-15');
datePicker.setDate(new Date());
```

### `setDateRange(startDate: Date | string, endDate: Date | string): void`
Set a date range (only works in range selection mode).

```javascript
datePicker.setDateRange('2024-06-01', '2024-06-15');
```

### `open(): void` / `close(): void`
Control calendar visibility.

```javascript
datePicker.open();
datePicker.close();
```

### `setError(message: string): void` / `clearError(): void`
Control error state.

```javascript
datePicker.setError('Invalid date selected');
datePicker.clearError();
```

## Advanced Examples

### Booking System Date Range
```javascript
const bookingPicker = document.createElement('zero-date-picker-1.0.0');
bookingPicker.label = 'Booking Period';
bookingPicker.rangeSelection = true;
bookingPicker.minDate = new Date().toISOString().split('T')[0]; // Today onwards
bookingPicker.showWeekNumbers = true;

bookingPicker.addEventListener('change', (event) => {
    if (event.detail.isRange && event.detail.endDate) {
        const nights = Math.ceil((event.detail.endDate - event.detail.startDate) / (1000 * 60 * 60 * 24));
        console.log(`Booking for ${nights} nights`);
        updatePricing(nights);
    }
});
```

### Meeting Scheduler
```javascript
const meetingPicker = document.createElement('zero-date-picker-1.0.0');
meetingPicker.label = 'Meeting Date';
meetingPicker.firstDayOfWeek = 1; // Monday first
meetingPicker.dateFormat = 'yyyy-MM-dd';
meetingPicker.displayFormat = 'EEEE, MMM d, yyyy';

// Disable weekends
function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
}

meetingPicker.addEventListener('change', (event) => {
    if (isWeekend(event.detail.date)) {
        meetingPicker.setError('Please select a weekday for meetings');
        meetingPicker.value = '';
    } else {
        meetingPicker.clearError();
        scheduleMeeting(event.detail.date);
    }
});
```

### Multi-Format Date Display
```javascript
const formatPicker = document.createElement('zero-date-picker-1.0.0');
formatPicker.label = 'Event Date';

// Dynamic format switching
const formatSelect = document.getElementById('format-select');
formatSelect.addEventListener('change', (event) => {
    const formats = {
        'iso': { date: 'yyyy-MM-dd', display: 'yyyy-MM-dd' },
        'us': { date: 'MM/dd/yyyy', display: 'MM/dd/yyyy' },
        'eu': { date: 'dd/MM/yyyy', display: 'dd/MM/yyyy' },
        'readable': { date: 'yyyy-MM-dd', display: 'EEEE, MMMM d, yyyy' }
    };
    
    const format = formats[event.target.value];
    formatPicker.dateFormat = format.date;
    formatPicker.displayFormat = format.display;
});
```

### Form Validation Integration
```javascript
const birthDatePicker = document.createElement('zero-date-picker-1.0.0');
birthDatePicker.label = 'Date of Birth';
birthDatePicker.required = true;
birthDatePicker.maxDate = new Date().toISOString().split('T')[0]; // No future dates

function validateAge() {
    const selectedDate = birthDatePicker.getSelectedDate();
    if (!selectedDate) return false;
    
    const age = new Date().getFullYear() - selectedDate.getFullYear();
    
    if (age < 18) {
        birthDatePicker.setError('Must be 18 or older');
        return false;
    }
    
    if (age > 100) {
        birthDatePicker.setError('Please verify your birth date');
        return false;
    }
    
    birthDatePicker.clearError();
    return true;
}

birthDatePicker.addEventListener('change', validateAge);
```

## Styling Customization

```css
/* Custom date picker theme */
zero-date-picker {
    --primary-color: #2e7d32;
    --error-color: #c62828;
    --background-color: #f8f9fa;
    --border-radius: 8px;
    --input-height: 40px;
}

/* Custom calendar styling */
zero-date-picker::part(calendar-header) {
    background: var(--primary-color);
    color: white;
}

zero-date-picker::part(today-button) {
    background: var(--primary-color);
    color: white;
}

/* Mobile responsive */
@media (max-width: 768px) {
    zero-date-picker {
        --input-height: 44px;
        --font-size-base: 16px;
    }
}

/* Dark theme */
zero-date-picker.dark-theme {
    --background-color: #2d2d2d;
    --text-primary: #ffffff;
    --border-color: #444444;
}
```

## Date Format Tokens

| Token | Description | Example |
|-------|-------------|---------|
| `yyyy` | 4-digit year | 2024 |
| `MM` | 2-digit month | 06 |
| `MMM` | Short month name | Jun |
| `MMMM` | Full month name | June |
| `dd` | 2-digit day | 08 |
| `d` | Day without leading zero | 8 |
| `EEEE` | Full day name | Saturday |
| `EEE` | Short day name | Sat |

## Accessibility

- Full keyboard navigation (arrow keys, Enter, Escape)
- ARIA labels and descriptions for screen readers
- High contrast mode support
- Focus management and visual indicators
- Semantic HTML structure with proper roles

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## License

MIT License - see LICENSE file for details.
