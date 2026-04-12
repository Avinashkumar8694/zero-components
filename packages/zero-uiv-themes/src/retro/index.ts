import { css, CSSResult } from 'lit';
import { BaseTheme, createThemeStyles } from '../base-theme';

export const retroGlobalTokens = {
    'id': 'retro',
    'name': 'Retro 3D',
    'tokens': {
        // Core Palette
        '--uiv-primary-color': '#39ff14',
        '--uiv-secondary-color': '#003300',
        '--uiv-accent-color': '#ffb000',
        '--uiv-bg-color': '#001100',
        '--uiv-surface-color': '#002200',
        '--uiv-text-color': '#39ff14',
        '--uiv-text-muted': '#008800',
        '--uiv-border-color': '#39ff14',
        
        // Advanced Semantic Tokens
        '--uiv-bg-main': '#000800',
        '--uiv-bg-surface': '#001100',
        '--uiv-bg-overlay': 'rgba(0, 255, 20, 0.1)',
        '--uiv-phosphor-glow': '0 0 8px rgba(57, 255, 20, 0.8)',
        
        // App Dashboard Tokens
        '--uiv-app-bg': '#000500',
        '--uiv-bg-primary': '#000500',
        '--uiv-app-sidebar-bg': '#001a00',
        '--uiv-app-sidebar-text': '#39ff14',
        '--uiv-app-header-bg': '#001a00',
        '--uiv-app-card-bg': '#001100',
        '--uiv-app-input-bg': 'rgba(57, 255, 20, 0.1)',
        '--uiv-app-text-color': '#39ff14',
        '--uiv-app-text-muted': '#00ff00',
        '--uiv-app-accent-color': '#39ff14',
        '--uiv-app-accent-transparent': 'rgba(57, 255, 20, 0.15)',
        '--uiv-app-border-color': '#003300',
        '--uiv-app-hover-shadow': '10px 10px 0px #000, 0 0 20px rgba(57, 255, 20, 0.4)',
        '--uiv-app-glass-blur': 'blur(0px)',
    }
};

export const retroComponentTokens = {
    'button': {
        '--uiv-button-primary': 'var(--uiv-primary-color)',
        '--uiv-button-border': 'var(--uiv-border-color)',
    },
    'table': {
        '--uiv-table-border': 'var(--uiv-border-color)',
        '--uiv-table-bg': 'var(--uiv-bg-color)',
        '--uiv-table-accent': 'var(--uiv-primary-color)',
        '--uiv-table-shadow': '4px 4px 0px #000',
    },
    'expansion': {
        '--uiv-expansion-bg': 'var(--uiv-bg-color)',
        '--uiv-expansion-border': 'var(--uiv-border-color)',
        '--uiv-expansion-accent': 'var(--uiv-primary-color)',
        '--uiv-expansion-shadow': '4px 4px 0px #000',
    },
    'radio': {
        '--uiv-radio-accent': 'var(--uiv-primary-color)',
    }
};

export class RetroTheme extends BaseTheme {
    constructor() {
        super(retroGlobalTokens.id, retroGlobalTokens.name, retroGlobalTokens.tokens);
        this.componentTokens = retroComponentTokens;
    }

    getBaseStyles(): CSSResult {
        return css`
            :host {
                font-family: 'Courier New', Courier, monospace;
                text-transform: uppercase;
                background: var(--uiv-bg-main);
                position: relative;
            }

            /* Screen Curvature & Scanlines Overlay */
            :host::before {
                content: " ";
                display: block;
                position: absolute;
                top: 0; left: 0; bottom: 0; right: 0;
                background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                z-index: 2;
                background-size: 100% 4px, 3px 100%;
                pointer-events: none;
                opacity: 0.3;
            }

            @keyframes flicker {
                0% { opacity: 0.97; }
                5% { opacity: 0.95; }
                10% { opacity: 0.9; }
                15% { opacity: 0.95; }
                30% { opacity: 0.98; }
                100% { opacity: 1; }
            }

            .uiv-retro-text {
                color: var(--uiv-primary-color);
                text-shadow: var(--uiv-phosphor-glow);
                animation: flicker 0.1s infinite;
            }

            .uiv-retro-text-secondary {
                color: var(--uiv-text-muted);
                text-shadow: 0 0 3px var(--uiv-text-muted);
            }

            /* Alias for blocky cards */
            .uiv-retro-card {
                background: var(--uiv-bg-surface);
                border: 2px solid var(--uiv-primary-color);
                box-shadow: inset 0 0 10px rgba(57, 255, 20, 0.5), 5px 5px 0px #000;
            }

            .uiv-retro-border {
                border: 2px solid var(--uiv-primary-color);
                box-shadow: inset 0 0 10px rgba(57, 255, 20, 0.5), 0 0 10px rgba(57, 255, 20, 0.5);
            }
        `;
    }
}

export const retroTheme = new RetroTheme();
