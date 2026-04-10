import { css, CSSResult } from 'lit';
import { BaseTheme, createThemeStyles } from '../base-theme';

export const modernGlobalTokens = {
    'id': 'modern',
    'name': 'Modern Minimal',
    'tokens': {
        // Core Palette
        '--uiv-primary-color': '#f59e0b',
        '--uiv-secondary-color': '#6366f1',
        '--uiv-accent-color': '#10b981',
        '--uiv-bg-color': '#000000',
        '--uiv-surface-color': '#121212',
        '--uiv-text-color': '#f8fafc',
        '--uiv-text-muted': '#64748b',
        '--uiv-border-color': '#262626',
        
        // Advanced Semantic Tokens
        '--uiv-bg-main': '#000000',
        '--uiv-bg-surface': '#111111',
        '--uiv-bg-overlay': 'rgba(245, 158, 11, 0.05)',
        '--uiv-shadow-depth': '0 20px 50px rgba(0,0,0,0.5)',
        '--uiv-metallic-shine': 'linear-gradient(110deg, #121212 45%, #1ed4d6 50%, #121212 55%)',
        
        // App Dashboard Tokens
        '--uiv-app-bg': '#000000',
        '--uiv-app-sidebar-bg': '#0a0a0a',
        '--uiv-app-sidebar-text': '#f8fafc',
        '--uiv-app-header-bg': '#0f0f0f',
        '--uiv-app-card-bg': '#111111',
        '--uiv-app-input-bg': 'rgba(255, 255, 255, 0.05)',
        '--uiv-app-text-color': '#f8fafc',
        '--uiv-app-text-muted': 'rgba(255, 255, 255, 0.6)',
        '--uiv-app-accent-color': '#f59e0b',
        '--uiv-app-accent-transparent': 'rgba(245, 158, 11, 0.15)',
        '--uiv-app-border-color': '#262626',
        '--uiv-app-hover-shadow': '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(245, 158, 11, 0.2)',
        '--uiv-app-glass-blur': 'blur(0px)',
    }
};

export const modernComponentTokens = {
    'button': {
        '--uiv-button-bg': 'var(--uiv-modern-primary)',
        '--uiv-button-text': '#ffffff',
    },
    'input': {
        '--uiv-input-focus': 'var(--uiv-modern-primary)',
        '--uiv-input-border': 'var(--uiv-modern-border)',
        '--uiv-input-text': 'var(--uiv-modern-text)',
        '--uiv-input-label': 'var(--uiv-modern-label)',
    },
    'slider': {
        '--uiv-slider-accent': 'var(--uiv-modern-primary)',
        '--uiv-slider-track': '#eee',
    },
    'expansion': {
        '--uiv-expansion-bg': 'var(--uiv-modern-bg)',
        '--uiv-expansion-border': 'var(--uiv-modern-border)',
        '--uiv-expansion-accent': 'var(--uiv-modern-primary)',
    }
};

export class ModernTheme extends BaseTheme {
    constructor() {
        super(modernGlobalTokens.id, modernGlobalTokens.name, modernGlobalTokens.tokens);
        this.componentTokens = modernComponentTokens;
    }

    getBaseStyles(): CSSResult {
        return css`
            :host {
                font-family: 'Outfit', 'Inter', system-ui, sans-serif;
                color: var(--uiv-text-color);
            }

            .uiv-modern-surface {
                background: var(--uiv-bg-surface);
                border: 1px solid var(--uiv-border-color);
                border-radius: 12px;
                box-shadow: var(--uiv-shadow-depth);
                transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            }

            .uiv-modern-card {
                background: var(--uiv-bg-surface);
                border: 1px solid var(--uiv-border-color);
                border-radius: 12px;
                box-shadow: var(--uiv-shadow-depth);
            }

            .uiv-modern-text {
                color: var(--uiv-primary-color);
                font-weight: 500;
            }

            .uiv-modern-text-secondary {
                color: var(--uiv-text-muted);
            }

            .uiv-modern-surface:hover {
                transform: translateY(-4px) scale(1.01);
                border-color: var(--uiv-primary-color);
            }
        `;
    }
}

export const modernTheme = new ModernTheme();
