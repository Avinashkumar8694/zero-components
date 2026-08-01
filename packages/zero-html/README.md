# zero-html

A first-class **HTML** node for Zero Studio. Write raw HTML and get the studio's
full runtime for free: `{{ }}` variable bindings in every scope, loops, and
`data-action` buttons that call flows or services. It reuses the **existing**
renderer-core evaluator/scope and trigger pipeline — there is no parallel engine.

Registers as the versioned custom element `zero-html-1.0.0` (group **Advanced**).

## Props (inspector)

| Prop       | Control   | Default | Description |
|------------|-----------|---------|-------------|
| `html`     | Textarea  | example | The raw HTML source. This is the main prop. |
| `sanitize` | Checkbox  | `true`  | Best-effort strip of `<script>`, inline `on*=` handlers and `javascript:` URLs before injecting. |

Because `html` is an ordinary string prop, the runtime's binding pipeline
resolves it: every `{{ … }}` token is interpolated against the current binding
scope, and inline `[data-repeat]` elements are expanded — all **before** the
resolved string reaches the element, which then injects it.

## Variables

Use any binding scope inside the HTML, exactly as elsewhere in the studio:

```html
<h2>{{ $page.vars.title }}</h2>
<p>Signed in as {{ $auth.user.name }} ({{ $locale.greeting }})</p>
<img src="{{ $env.cdnBase }}/logo.png" alt="{{ $route.params.id }}" />
```

Mixed text + multiple tokens in one string is supported (e.g.
`Total: {{ $page.vars.count }} items`). A single full-expression string
(`{{ $page.vars.n }}`) keeps its native type elsewhere in the studio; inside the
HTML source everything is rendered as text/markup.

## Loops

Two ways, both reusing the studio's repeat machinery:

1. **Node repeat (primary).** Like any node, enable **Loop / Repeat** in the
   inspector to render the whole HTML block once per array item. Inside, use the
   canonical `{{ $repeat.item }}` / `{{ $repeat.index }}` (or `{{ $item }}` /
   `{{ $index }}`, or your custom alias).

2. **Inline `data-repeat`.** Repeat a single element within the HTML source:

   ```html
   <ul>
     <li data-repeat="{{ $page.vars.users }}">
       #{{ $index }} — {{ $repeat.item.name }} ({{ $item.email }})
     </li>
   </ul>
   ```

   The bound value must be an array; the element is cloned once per item with the
   item exposed as `$repeat.item` / `$item` and the position as `$repeat.index` /
   `$index`. An optional `data-repeat-as="user"` sets the item scope key. Nested
   `data-repeat` is supported. A non-array binding removes the element.

   Note: `data-repeat` expansion parses the HTML, so wrap table rows in a
   `<table>`/`<tbody>` (the parser fosters stray `<tr>`), and prefer standard
   flow elements.

## Actions → call a flow or service

Add `data-action` to any element. Clicking it fires the wireable **On Action**
event carrying `{ action, dataset }`:

```html
<button data-action="save">Save</button>
<button data-action="delete" data-id="{{ $repeat.item.id }}">Delete</button>
```

In the Studio **Triggers** panel, wire **On Action** → a **Flow** or **Service**.
Map inputs from the event, e.g. source `event.detail.action` → target `action`,
or `event.detail.dataset.id` → the flow/service input field. Input mappings
themselves use the same `{{ }}` bindings. Because every `data-action` element
routes through the one "action" event, one trigger can drive many buttons and
branch on `event.detail.action`.

## Standard capabilities

zero-html is a normal node, so it also supports styles, responsive overrides,
custom attributes, visibility conditions, node-level repeat, and triggers.

## ⚠️ XSS caveat

`sanitize` is a convenience guard, not a complete XSS sanitizer, and it injects
resolved HTML via `innerHTML`. Only render HTML (and interpolate variables) you
trust. Do not disable sanitize for untrusted or user-supplied content.
