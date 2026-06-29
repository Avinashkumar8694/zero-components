# Zero Radio

A highly customizable, professional radio button component designed to integrate seamlessly with the Zero visual editor and runtime pages.

## Features

- **Styling Variants**: Supports multiple style configurations including `standard` (clean modern border) and `glow` (neon drop-shadow glowing effect).
- **Group Alignment**: Group options together using the `name` attribute to allow single-option selection.
- **State Properties**: Supports `checked`, `disabled`, and custom values.
- **Design Token Integration**: Natively inherits Indigo accent colors and standard font properties.

## Studio Usage

1. Drag the **Radio Button** from the **Form Controls** widget palette.
2. Select the component to open the **Properties Panel**:
   - **Label**: Text displayed next to the option.
   - **Value**: Underlying data key returned on selection.
   - **Group Name**: Key shared among multiple radio options to ensure mutual exclusion.
   - **Checked**: Default selected state.
   - **Disabled**: Block user interaction.
   - **Theme Style**: Choose between `Standard` and `Glowing Neon`.

## Runtime Integration

```html
<zero-radio-1.0.0 
  name="payment-method" 
  value="card" 
  label="Credit / Debit Card" 
  checked="true"
  variant="standard">
</zero-radio-1.0.0>

<zero-radio-1.0.0 
  name="payment-method" 
  value="paypal" 
  label="PayPal"
  variant="standard">
</zero-radio-1.0.0>
```

### Event Listeners

Listen to selection updates using the standard `change` event:

```javascript
document.querySelector('zero-radio-1.0.0').addEventListener('change', (event) => {
  console.log('Selected State:', event.detail.checked);
  console.log('Selected Value:', event.detail.value);
});
```
