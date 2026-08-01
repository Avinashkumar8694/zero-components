# zero-topnav-layout

Top-navbar Layout Template component for visual builder pages.

A base-layout (app shell) with a horizontal top bar — brand/logo, horizontal nav
links, and header controls (search / notifications / theme toggle / user
profile) — above a full-width content area that hosts a `<zero-router-outlet>`.

It configures through the **same** studio contract as `zero-sidenav-layout`:

- `static getSettingsSchema()` — structured, defaulted `PropertyDescriptor[]`
  the studio reads live (`resolveLiveSettingsSchema`).
- Every schema field name equals a FLAT `@RendererAttribute` prop, so the
  studio's generic flat passthrough maps each setting → same-named prop with no
  bespoke composition.
- Chrome events via `@RendererAttribute EVENT`: `notification-click`,
  `profile-click`, `header-action`, plus a working theme toggle (`themechange`)
  and nav `navchange` / `route-change`.
- Contains a `zero-router-outlet` region (the `outlet` slot) where nested pages
  render.
