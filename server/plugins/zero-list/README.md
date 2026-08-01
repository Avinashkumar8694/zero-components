# zero-list

Styled data list. Items come from a JSON array of `{ title, subtitle?, icon?, meta? }`; the setter is tolerant and accepts either an already-parsed array or a JSON string. Three variants (default / bordered / divided), optional leading icons and an interactive mode that adds hover highlight and a pointer cursor. All colors come from theme tokens (surface / border / text / muted / tertiary). Emits `on-item-click` with `{ index, item }`.
