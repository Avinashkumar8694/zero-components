# Zero UIV iOS Switch

A highly customizable, Uiverse-inspired iOS-style toggle switch for Lit.

## Features

- ✅ Smooth sliding animation
- ✅ Authentic iOS look and feel
- ✅ Pure CSS (No Tailwind)
- ✅ Fully customizable via RendererAttributes (Active Color)
- ✅ ADA Compliant

## Installation

```html
<script src="path/to/zero-uiv-switch-ios.js" type="module"></script>
```

## Usage

```html
<zero-uiv-switch-ios 
    label="Dark Mode" 
    active-color="#34c759"
    checked="true">
</zero-uiv-switch-ios>
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | `'Enabled'` | Label text shown next to the switch |
| `checked` | boolean | `false` | Current state of the switch |
| `activeColor` | string | `'#4cd964'` | Background color when the switch is ON |
| `disabled` | boolean | `false` | Whether the switch is disabled |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `change` | `{ checked: boolean }` | Fired when the state changes |

## CSS Variables

- `--uiv-switch-on`: Background color ON
- `--uiv-switch-off`: Background color OFF
- `--uiv-knob-bg`: Color of the sliding knob
