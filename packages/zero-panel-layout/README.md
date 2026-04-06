# zero-panel-layout

A responsive panel/grid container for the studio canvas.

## Features
- 1, 2, 3, and 4 column desktop options
- Responsive by default:
  - Mobile: 1 column
  - Tablet: up to 2 columns
  - Desktop: selected column count
- Configurable gap and minimum item width
- Uses default slot so any Zero component can be dropped inside

## Usage

```html
<zero-panel-layout
  columns="3"
  gap="16"
  min-column-width="220"
></zero-panel-layout>
```
