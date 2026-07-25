# zero-chart-card

Able Pro style dashboard chart card.

Shows a title (with optional value and a colored change badge) above a larger
inline SVG chart (~120px tall) drawn from `chart-data` over a light horizontal
grid. Supports `line`, `area` (filled) and `bar` rendering. No external chart
library.

## Attributes

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | text | `Repeat customer rate` | Card heading |
| `value` | text | `$3,020` | Optional value under the title |
| `change-percent` | text | `30.6%` | Optional badge label |
| `chart-data` | text | `30,45,35,55,40,65,50,70,60,80` | Comma separated numbers |
| `chart-color` | color | `#4680ff` | Stroke / fill color |
| `chart-type` | select (`line`/`area`/`bar`) | `area` | Chart rendering style |

## Usage

```html
<zero-chart-card
  title="Repeat customer rate"
  value="$3,020"
  change-percent="30.6%"
  chart-data="30,45,35,55,40,65,50,70,60,80"
  chart-color="#4680ff"
  chart-type="area">
</zero-chart-card>
```
