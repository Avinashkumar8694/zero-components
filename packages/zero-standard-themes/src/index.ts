import { BaseTheme } from './base-theme';
import { css, CSSResult, unsafeCSS } from 'lit';

export class StandardTheme extends BaseTheme {
    getBaseStyles(): CSSResult {
        return css`
            .uiv-${unsafeCSS(this.id)}-card {
                background: var(--uiv-bg-surface);
                border: 1px solid var(--uiv-border-color);
                border-radius: var(--uiv-border-radius);
                box-shadow: var(--uiv-shadow-depth);
            }
            .uiv-${unsafeCSS(this.id)}-glass {
                backdrop-filter: blur(10px);
                background: rgba(255, 255, 255, 0.1);
            }
            .uiv-${unsafeCSS(this.id)}-text {
                color: var(--uiv-text-color);
            }
        `;
    }
}

const commonTokens = {
    '--uiv-font-family': "'Inter', sans-serif",
    '--uiv-border-radius': '8px',
};

export const cyberTheme = new StandardTheme('cyber', 'Standard Cyber', {
    ...commonTokens,
    '--uiv-primary-color': '#ff00ff',
    '--uiv-bg-surface': '#0f0524',
    '--uiv-text-color': '#ffffff',
    '--uiv-border-color': '#ff00ff',
    '--uiv-shadow-depth': '0 0 15px rgba(255, 0, 255, 0.5)',
});

export const glassTheme = new StandardTheme('glass', 'Standard Glass', {
    ...commonTokens,
    '--uiv-primary-color': '#00d2ff',
    '--uiv-bg-surface': 'rgba(255, 255, 255, 0.1)',
    '--uiv-text-color': '#333333',
    '--uiv-border-color': 'rgba(255, 255, 255, 0.2)',
    '--uiv-shadow-depth': '0 8px 32px rgba(31, 38, 135, 0.37)',
});

export const modernTheme = new StandardTheme('modern', 'Standard Modern', {
    ...commonTokens,
    '--uiv-primary-color': '#6366f1',
    '--uiv-bg-surface': '#ffffff',
    '--uiv-text-color': '#111827',
    '--uiv-border-color': '#e5e7eb',
    '--uiv-shadow-depth': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
});

// Adding more themes to reach 10
export const retroTheme = new StandardTheme('retro', 'Standard Retro', { ...commonTokens, '--uiv-primary-color': '#f87171', '--uiv-bg-surface': '#fefefe' });
export const neonTheme = new StandardTheme('neon', 'Standard Neon', { ...commonTokens, '--uiv-primary-color': '#39ff14', '--uiv-bg-surface': '#000000' });
export const corporateTheme = new StandardTheme('corporate', 'Standard Corporate', { ...commonTokens, '--uiv-primary-color': '#1e40af', '--uiv-bg-surface': '#f3f4f6' });
export const wealthTheme = new StandardTheme('wealth', 'Standard Wealth', { ...commonTokens, '--uiv-primary-color': '#b45309', '--uiv-bg-surface': '#fffbeb' });
export const natureTheme = new StandardTheme('nature', 'Standard Nature', { ...commonTokens, '--uiv-primary-color': '#15803d', '--uiv-bg-surface': '#f0fdf4' });
export const lightTheme = new StandardTheme('light', 'Standard Light', { ...commonTokens, '--uiv-primary-color': '#3b82f6', '--uiv-bg-surface': '#ffffff' });
export const darkTheme = new StandardTheme('dark', 'Standard Dark', { ...commonTokens, '--uiv-primary-color': '#60a5fa', '--uiv-bg-surface': '#1f2937' });

export const standardThemeRegistry: Record<string, any> = {
    cyber: cyberTheme,
    glass: glassTheme,
    modern: modernTheme,
    retro: retroTheme,
    neon: neonTheme,
    corporate: corporateTheme,
    wealth: wealthTheme,
    nature: natureTheme,
    light: lightTheme,
    dark: darkTheme
};

export class ZeroStandardThemeProvider {
    id = 'zero-standard-themes';
    name = 'Zero Standard Themes Provider';

    getThemeNames() {
        return Object.keys(standardThemeRegistry);
    }

    getTheme(name: string) {
        return standardThemeRegistry[name] || modernTheme;
    }
}

// Auto-register
if ((window as any).zeroThemeManager) {
    (window as any).zeroThemeManager.registerProvider(new ZeroStandardThemeProvider());
}
window.addEventListener('zero-orchestrator-ready', () => {
    (window as any).zeroThemeManager?.registerProvider(new ZeroStandardThemeProvider());
});
