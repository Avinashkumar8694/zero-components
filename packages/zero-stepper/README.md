# zero-stepper

Multi-step indicator for wizards and flows. `steps` is a JSON array of `{label, description?}`; `activeStep` (index) splits them into completed / active / upcoming states, each themed from theme tokens with connecting lines. Supports `horizontal` or `vertical` orientation and `numbered` or `dotted` variants. Emits `on-step-click` with the step index. Built on `--uiv-*` tokens.
