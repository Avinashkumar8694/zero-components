# zero-welcome-banner

Able Pro style rounded gradient welcome banner.

Left side shows a title, subtitle and a white rounded call-to-action button.
Right side shows an optional illustration image (falls back to an empty tinted
area). Text is white; the gradient runs between `gradient-from` and
`gradient-to`.

## Attributes

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | text | `Explore Redesigned Able Pro` | Heading |
| `subtitle` | text | `Ready-made components...` | Supporting line |
| `button-text` | text | `CodedThemes` | Button label |
| `button-href` | text | `#` | Button link |
| `gradient-from` | color | `#4680ff` | Gradient start color |
| `gradient-to` | color | `#1e3a8a` | Gradient end color |
| `image-url` | text | `` | Optional illustration URL |

## Usage

```html
<zero-welcome-banner
  title="Explore Redesigned Able Pro"
  subtitle="Ready-made components to build your dashboard faster."
  button-text="CodedThemes"
  button-href="#"
  gradient-from="#4680ff"
  gradient-to="#1e3a8a">
</zero-welcome-banner>
```
