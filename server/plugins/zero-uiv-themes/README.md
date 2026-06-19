# zero-uiv-themes

Modular theme system for the Zero UIV component library. Consolidates CSS tokens, base layouts, and structural styles across all theme types.

## 📦 Themes Included
- **Cyber**: High-contrast, glitch-inspired cyberpunk aesthetic.
- **Glass**: Modern glassmorphism with blur and transparency.
- **Modern**: Clean, minimal, and premium UI.
- **Retro**: 3D, high-border, and nostalgic retro style.
- **Neon**: Vibrant glowing effects and dark mode optimization.

## 🛠️ Usage
Each theme module provides `globalTokens`, `componentTokens`, and `baseStyles`.

```typescript
import { cyberTheme } from 'zero-uiv-themes/cyber';
// Use in Lit component static styles
static styles = [
    cyberTheme.getGlobalStyles(),
    cyberTheme.getComponentStyles('button'),
    css`...`
];
```

## 🔗 Dependent Components
The following components rely on this theme package:
- `zero-uiv-button-*`
- `zero-uiv-input-*`
- `zero-uiv-table-*`
- `zero-uiv-slider-*`
- `zero-uiv-expansion-*`
- `zero-uiv-card-glass`
- `zero-uiv-checkbox-*`
- `zero-uiv-radio-neon`
- `zero-uiv-switch-ios`
- `zero-uiv-loader-orbit`
- `zero-uiv-tooltip-modern`
