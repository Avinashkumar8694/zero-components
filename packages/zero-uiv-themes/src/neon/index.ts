import { css, CSSResult } from 'lit';
import { BaseTheme, createThemeStyles } from '../base-theme';

export const neonGlobalTokens = {
    'id': 'neon',
    'name': 'Neon Glow',
    'tokens': {
        // Core Palette
        '--uiv-primary-color': '#39ff14',
        '--uiv-secondary-color': '#fe019a',
        '--uiv-accent-color': '#00fbff',
        '--uiv-bg-color': '#050505',
        '--uiv-surface-color': '#0f0f0f',
        '--uiv-text-color': '#ffffff',
        '--uiv-text-muted': '#777777',
        '--uiv-border-color': 'rgba(57, 255, 20, 0.4)',
        
        // Advanced Semantic Tokens
        '--uiv-bg-main': '#000000',
        '--uiv-bg-surface': '#080808',
        '--uiv-bg-overlay': 'rgba(0, 251, 255, 0.05)',
        '--uiv-glow-intensity': '1.5',
        '--uiv-pulse-speed': '2s',
        
        // App Dashboard Tokens
        '--uiv-app-bg': '#000000',
        '--uiv-app-sidebar-bg': '#050505',
        '--uiv-app-header-bg': '#080808',
        '--uiv-app-card-bg': '#0f0f0f',
        '--uiv-app-text-color': '#ffffff',
        '--uiv-app-text-muted': '#666666',
        '--uiv-app-accent-color': '#39ff14',
        '--uiv-app-border-color': 'rgba(57, 255, 20, 0.2)',
        '--uiv-app-glass-blur': 'none',
    }
};

export const neonComponentTokens = {
    'button': {
        '--uiv-button-primary': 'var(--uiv-primary-color)',
        '--uiv-button-glow': 'rgba(0, 251, 255, 0.4)',
    },
    'input': {
        '--uiv-input-primary': 'var(--uiv-primary-color)',
        '--uiv-input-text': 'var(--uiv-text-color)',
    },
    'radio': {
        '--uiv-radio-accent': 'var(--uiv-secondary-color)',
    },
    'slider': {
        '--uiv-slider-primary': 'var(--uiv-primary-color)',
        '--uiv-slider-track': '#333',
    }
};

export class NeonTheme extends BaseTheme {
    constructor() {
        super(neonGlobalTokens.id, neonGlobalTokens.name, neonGlobalTokens.tokens);
        this.componentTokens = neonComponentTokens;
    }

    getBaseStyles(): CSSResult {
        return css`
            :host {
                font-family: 'Inter', system-ui, sans-serif;
                --neon-glow: 0 0 calc(5px * var(--uiv-glow-intensity)) var(--uiv-primary-color),
                             0 0 calc(100% * var(--uiv-glow-intensity)) var(--uiv-primary-color);
            }

            @keyframes neon-pulse {
                0%, 100% { filter: brightness(1); box-shadow: 0 0 10px var(--uiv-primary-color); }
                50% { filter: brightness(1.3); box-shadow: 0 0 25px var(--uiv-primary-color); }
            }

            .uiv-neon-card {
                background: var(--uiv-bg-surface);
                border: 1px solid var(--uiv-border-color);
                box-shadow: 0 0 15px rgba(57, 255, 20, 0.1);
                animation: neon-pulse var(--uiv-pulse-speed) ease-in-out infinite;
            }

            .uiv-neon-text {
                color: var(--uiv-primary-color);
                text-shadow: 0 0 10px var(--uiv-primary-color);
            }

            .uiv-neon-text-secondary {
                color: var(--uiv-secondary-color);
                text-shadow: 0 0 5px var(--uiv-secondary-color);
            }

            .uiv-neon-accent-pulse {
                animation: neon-pulse calc(var(--uiv-pulse-speed) * 0.8) ease-in-out infinite reverse;
                color: var(--uiv-secondary-color);
                text-shadow: 0 0 10px var(--uiv-secondary-color);
            }
        `;
    }
}

export const neonTheme = new NeonTheme();
