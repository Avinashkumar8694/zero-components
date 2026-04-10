import { ThemeTokens } from '../base-theme';

export const glassGlobalTokens: ThemeTokens = {
    // Core Palette
    '--uiv-primary-color': '#e0f2fe',
    '--uiv-secondary-color': '#0ea5e9',
    '--uiv-accent-color': '#38bdf8',
    '--uiv-bg-color': '#02041a',
    '--uiv-surface-color': 'rgba(2, 4, 32, 0.6)',
    '--uiv-text-color': '#ffffff',
    '--uiv-text-muted': 'rgba(255, 255, 255, 0.5)',
    '--uiv-border-color': 'rgba(255, 255, 255, 0.15)',
    
    // Advanced Semantic Tokens
    '--uiv-bg-main': '#02041a',
    '--uiv-bg-surface': 'rgba(255, 255, 255, 0.02)',
    '--uiv-bg-overlay': 'rgba(255, 255, 255, 0.1)',
    '--uiv-glass-blur': 'blur(40px) saturate(200%)',
    '--uiv-shimmer-intensity': '0.5',
    
    // App Dashboard Tokens
    '--uiv-app-bg': '#02041a',
    '--uiv-app-sidebar-bg': 'rgba(2, 4, 32, 0.4)',
    '--uiv-app-sidebar-text': '#ffffff',
    '--uiv-app-header-bg': 'rgba(2, 4, 32, 0.4)',
    '--uiv-app-card-bg': 'rgba(255, 255, 255, 0.01)',
    '--uiv-app-text-color': '#ffffff',
    '--uiv-app-text-muted': 'rgba(255, 255, 255, 0.6)',
    '--uiv-app-accent-color': '#38bdf8',
    '--uiv-app-accent-transparent': 'rgba(56, 189, 248, 0.15)',
    '--uiv-app-border-color': 'rgba(255, 255, 255, 0.08)',
    '--uiv-app-hover-shadow': '0 40px 80px -20px rgba(0,0,0,0.5), 0 0 25px rgba(56, 189, 248, 0.3)',
    '--uiv-app-glass-blur': 'blur(40px) saturate(200%)',
};

export const glassComponentTokens: Record<string, ThemeTokens> = {
    'button': {
        '--uiv-button-primary': 'var(--uiv-primary-color)',
        '--uiv-button-bg': 'var(--uiv-bg-color)',
        '--uiv-button-text': 'var(--uiv-text-color)',
        '--uiv-button-border': 'var(--uiv-border-color)',
    },
    'table': {
        '--uiv-table-bg': 'rgba(255, 255, 255, 0.05)',
        '--uiv-table-border': 'var(--uiv-border-color)',
        '--uiv-table-header-bg': 'rgba(255, 255, 255, 0.1)',
        '--uiv-table-row-hover': 'rgba(255, 255, 255, 0.15)',
    },
    'expansion': {
        '--uiv-expansion-bg': 'var(--uiv-bg-color)',
        '--uiv-expansion-blur': 'var(--uiv-glass-blur)',
        '--uiv-expansion-border': 'var(--uiv-border-color)',
    },
    'radio': {
        '--uiv-radio-accent': 'var(--uiv-primary-color)',
    }
};
