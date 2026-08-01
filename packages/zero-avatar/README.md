# zero-avatar

User identity avatar. Renders a profile image when `src` is set, otherwise initials derived from `name` (or an explicit `initials` override). Five sizes (xs / sm / md / lg / xl), three shapes (circle / rounded / square), an optional colored status dot (online / away / busy / offline) toggled by `showStatus`, and a `bgColor` tint fallback — all themed from `--uiv-*` tokens. Emits `on-click` when tapped.
