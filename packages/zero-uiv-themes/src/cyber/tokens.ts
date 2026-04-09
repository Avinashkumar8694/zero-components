import { ThemeTokens } from '../base-theme';

export const cyberGlobalTokens: ThemeTokens = {
    // Core Palette
    '--uiv-primary-color': '#ff007c',
    '--uiv-secondary-color': '#00ffcc',
    '--uiv-accent-color': '#bc00ff',
    '--uiv-bg-color': '#0a0a0c',
    '--uiv-surface-color': '#1a1a1e',
    '--uiv-text-color': '#ffffff',
    '--uiv-text-muted': '#66666e',
    '--uiv-border-color': 'rgba(255, 0, 124, 0.4)',
    
    // Advanced Semantic Tokens
    '--uiv-bg-main': '#0a0a0c',
    '--uiv-bg-surface': '#1a1a1e',
    '--uiv-bg-overlay': 'rgba(255, 0, 124, 0.05)',
    '--uiv-border-glow': '0 0 10px rgba(255, 0, 124, 0.5)',
    '--uiv-glow-intensity': '1',
    
    // App Dashboard Tokens
    '--uiv-app-bg': '#050505',
    '--uiv-app-sidebar-bg': '#0a0a0c',
    '--uiv-app-header-bg': '#0f0f12',
    '--uiv-app-card-bg': '#141418',
    '--uiv-app-text-color': '#ffffff',
    '--uiv-app-text-muted': '#888899',
    '--uiv-app-accent-color': '#ff007c',
    '--uiv-app-border-color': 'rgba(0, 255, 204, 0.2)',
    '--uiv-app-glass-blur': 'none',
};

export const cyberComponentTokens: Record<string, ThemeTokens> = {
    'button': {
        '--uiv-button-primary': 'var(--uiv-primary-color)',
        '--uiv-button-shadow': 'var(--uiv-secondary-color)',
        '--uiv-button-accent': 'var(--uiv-accent-color)',
    },
    'input': {
        '--uiv-input-border': 'var(--uiv-primary-color)',
        '--uiv-input-bg': 'var(--uiv-bg-color)',
        '--uiv-input-text': 'var(--uiv-text-color)',
    },
    'radio': {
        '--uiv-radio-accent': 'var(--uiv-primary-color)',
    },
    'slider': {
        '--uiv-slider-primary': 'var(--uiv-primary-color)',
        '--uiv-slider-secondary': 'var(--uiv-secondary-color)',
    }
};
