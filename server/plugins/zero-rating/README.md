# zero-rating

Interactive rating control. A value out of a configurable max, three symbol variants (star / heart / emoji), three sizes, a custom fill color (defaults to gold), optional half-value support and a read-only mode. Clicking a symbol sets the value (unless read only); with half values enabled the left/right side of a symbol picks .5 or a whole step. Empty symbols use the theme border token. Emits `on-change` with the new value.
