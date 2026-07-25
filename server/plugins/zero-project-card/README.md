# zero-project-card

Able Pro style project progress card.

Shows a title followed by a list of items. Each item shows its label with the
percent on the right and a rounded progress bar filled to `percent` in its own
`color`. Items are supplied as a JSON array string.

## Attributes

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | text | `Project - Able Pro` | Card heading |
| `items` | textarea (JSON array) | see below | List of progress rows |

Each item: `{ "label": string, "percent": number (0-100), "color": string }`.

Default items:

```json
[
  {"label":"Release v1.2.0","percent":70,"color":"#4680ff"},
  {"label":"Design system","percent":45,"color":"#12b76a"},
  {"label":"API integration","percent":88,"color":"#7c4dff"},
  {"label":"QA & testing","percent":30,"color":"#f5a623"}
]
```

## Usage

```html
<zero-project-card
  title="Project - Able Pro"
  items='[{"label":"Release v1.2.0","percent":70,"color":"#4680ff"}]'>
</zero-project-card>
```
