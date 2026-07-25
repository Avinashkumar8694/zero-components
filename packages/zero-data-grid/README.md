# zero-data-grid

A professional, enterprise-styled data grid Lit web component. It is the shared list/table used across the Neutrinos app (Prediction, Tokens/Sandbox, Assistant, Users list pages). Clean light surface, `--uiv-*` theming, and fully client-side interactions (search, filter chips, sort, pagination, selection) with no external dependencies.

Tag: `zero-data-grid`

## Usage

```html
<zero-data-grid
  title="All Tokens"
  .rows='[{"name":"Payments API Key","created":"24 Jul 2026, 10:24 AM","status":"Completed"}]'
></zero-data-grid>
```

In the Neutrinos app, bind `rows` to a page variable that holds the fetched list; `columns`, `filters` and `rowActions` may be static JSON or bound too.

## Properties

| Property            | Type              | Default              | Description |
|---------------------|-------------------|----------------------|-------------|
| `columns`           | JSON array        | Name / Created / Status | Column defs: `{ key, label?, sortable?, align? }`. |
| `rows`              | JSON array        | 4 sample rows        | The data. Each row is an object keyed by column `key`. Bind to a page variable. |
| `title`             | text              | `All Tokens`         | Card title. |
| `searchable`        | boolean           | `true`               | Show the search input. |
| `searchPlaceholder` | text              | `Search`             | Search input placeholder. |
| `filters`           | JSON array        | Draft / In Progress / Completed / Failed | Filter chip labels. |
| `showFilters`       | boolean           | `true`               | Show the filter chips. |
| `pageSize`          | number            | `10`                 | Rows per page. |
| `showPagination`    | boolean           | `true`               | Show the "Show by N Rows" + range + prev/next controls. |
| `selectable`        | boolean           | `false`              | Leading checkbox column with select-all. |
| `rowActions`        | JSON array        | Edit / Delete(danger) | Trailing action buttons: `{ label, danger? }`. |
| `addButtonText`     | text              | `+ Add`              | Primary add-button label. |
| `showAddButton`     | boolean           | `true`               | Show the primary add button (top-right). |
| `emptyText`         | text              | `No records found`   | Empty-state message. |
| `emptyIcon`         | text / emoji      | `📭`                 | Empty-state icon. |

`columns`, `rows`, `filters` and `rowActions` accept either a JSON string (studio editor / attribute) or a live array (property binding).

## Events

All are `CustomEvent`, `bubbles: true`, `composed: true`.

| Event             | Detail                | Fired when |
|-------------------|-----------------------|------------|
| `add`             | –                     | Add button clicked. |
| `rowaction`       | `{ action, row }`     | A row action button clicked. |
| `rowclick`        | `{ row }`             | A row is clicked (ignores checkbox/action clicks). |
| `selectionchange` | `{ rows }`            | Selection changes. |
| `search`          | `{ query }`           | Search text changes. |
| `filterchange`    | `{ filters }`         | A filter chip toggles. |
| `sortchange`      | `{ key, dir }`        | A sortable header is clicked. |
| `pagechange`      | `{ page }`            | Page changes. |

## Behaviour

- **Search** filters rows across all string-coercible column cells (case-insensitive).
- **Filter chips** toggle; an active set keeps rows whose any cell value matches a selected label (e.g. a `status` value). No chips selected = all rows.
- **Sort** toggles asc/desc per sortable column; numeric-aware, otherwise locale string compare.
- **Pagination** slices the filtered/sorted rows; range shows `start-end of total`.
- **Selection** tracks row identity; header checkbox selects/deselects the current page.
- **Empty state** shows a centered icon + message when no rows match.
- Missing cell values render as `-`; `status` values render as colored pills.

## Theming

Uses `--uiv-*` variables with light enterprise fallbacks: surface `#ffffff`, border `#e5e9ef`, text `#1d2630`, muted `#8996a4`, primary `#4680ff`.
