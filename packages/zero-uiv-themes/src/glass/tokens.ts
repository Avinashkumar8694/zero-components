import { ThemeTokens } from '../base-theme';

export const glassGlobalTokens: ThemeTokens = {
    // Core Palette
    '--uiv-primary-color': 'rgba(255, 255, 255, 0.45)',
    '--uiv-secondary-color': '#0ea5e9',
    '--uiv-accent-color': '#f43f5e',
    '--uiv-bg-color': '#0f172a',
    '--uiv-surface-color': 'rgba(15, 23, 42, 0.6)',
    '--uiv-text-color': '#ffffff',
    '--uiv-text-muted': 'rgba(255, 255, 255, 0.5)',
    '--uiv-border-color': 'rgba(255, 255, 255, 0.15)',
    
    // Advanced Semantic Tokens
    '--uiv-bg-main': '#0f172a',
    '--uiv-bg-surface': 'rgba(255, 255, 255, 0.05)',
    '--uiv-bg-overlay': 'rgba(255, 255, 255, 0.1)',
    '--uiv-glass-blur': '25px',
    '--uiv-shimmer-intensity': '0.5',
    
    // App Dashboard Tokens
    '--uiv-app-bg': 'radial-gradient(circle at 0% 0%, #1e293b 0%, #0f172a 100%)',
    '--uiv-app-sidebar-bg': 'rgba(15, 23, 42, 0.7)',
    '--uiv-app-header-bg': 'rgba(15, 23, 42, 0.8)',
    '--uiv-app-card-bg': 'rgba(255, 255, 255, 0.03)',
    '--uiv-app-text-color': '#ffffff',
    '--uiv-app-text-muted': 'rgba(255, 255, 255, 0.6)',
    '--uiv-app-accent-color': '#0ea5e9',
    '--uiv-app-border-color': 'rgba(255, 255, 255, 0.1)',
    '--uiv-app-glass-blur': 'blur(30px)',
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
