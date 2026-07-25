# zero-stat-card

Able Pro style dashboard statistic card.

Shows an icon + title with a "⋮" menu, a large value, a small inline SVG chart
(bars or line, ~40px tall, drawn from `chart-data`), and a colored percentage
change with an up/down arrow (green for up, red for down).

## Attributes

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | text | `Total Revenue` | Card label |
| `value` | text | `$3,020` | Large highlighted value |
| `icon` | text | `💰` | Emoji / character icon |
| `change-percent` | text | `30.6%` | Change label |
| `change-direction` | select (`up`/`down`) | `up` | Arrow + color of the change |
| `chart-data` | text | `4,8,6,10,7,12,9` | Comma separated numbers |
| `chart-color` | color | `#4680ff` | Chart stroke / fill color |
| `chart-type` | select (`bar`/`line`) | `bar` | Chart rendering style |

## Usage

```html
<zero-stat-card
  title="Total Revenue"
  value="$3,020"
  icon="💰"
  change-percent="30.6%"
  change-direction="up"
  chart-data="4,8,6,10,7,12,9"
  chart-color="#4680ff"
  chart-type="bar">
</zero-stat-card>
```
