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
    '--uiv-app-bg': '#021a11',
    '--uiv-app-sidebar-bg': '#022c22',
    '--uiv-app-header-bg': '#021a11',
    '--uiv-app-card-bg': 'rgba(6, 78, 59, 0.6)',
    '--uiv-app-input-bg': 'rgba(2, 44, 34, 0.4)',
    '--uiv-app-accent-color': '#10b981',
    '--uiv-app-text-color': '#ecfdf5',
    '--uiv-app-text-muted': '#6ee7b7',
    '--uiv-app-border-color': 'rgba(16, 185, 129, 0.25)',
    '--uiv-app-hover-shadow': '0 40px 80px -20px rgba(0,0,0,0.5), 0 0 20px #10b981',
    
    // Extended Reference Tokens
    '--uiv-color-primary': '#ff007c',
    '--uiv-color-success': '#00ffcc',
    '--uiv-color-warning': '#f59e0b',
    '--uiv-color-danger': '#ef4444',
    '--uiv-color-info': '#bc00ff',
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
