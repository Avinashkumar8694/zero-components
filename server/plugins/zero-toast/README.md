# zero-toast

Transient toast notification. Title + message, four semantic types (info / success / warning / error) themed from theme tokens, six anchor positions (top/bottom × left/right/center), a configurable auto-dismiss duration (0 = persistent), optional leading icon and an optional dismiss button. The live element is fixed-positioned and clears its timer on disconnect; on the design canvas it renders inline so it stays visible. Emits `on-dismiss` when closed or when the timer elapses.
