import { BaseTheme } from './base-theme';
import { css, CSSResult, unsafeCSS } from 'lit';

export class StandardTheme extends BaseTheme {
    getBaseStyles(): CSSResult {
        return css`
            :host {
                --uiv-transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .uiv-${unsafeCSS(this.id)}-card {
                background: var(--uiv-bg-surface);
                border: 1px solid var(--uiv-border-color);
                border-radius: var(--uiv-border-radius);
                box-shadow: var(--uiv-shadow-depth);
                backdrop-filter: var(--uiv-glass-blur, none);
                transition: var(--uiv-transition-smooth);
            }
            .uiv-${unsafeCSS(this.id)}-glass {
                backdrop-filter: blur(12px) saturate(180%);
                background: var(--uiv-glass-bg, rgba(255, 255, 255, 0.1));
                border: 1px solid var(--uiv-glass-border, rgba(255, 255, 255, 0.2));
            }
            .uiv-${unsafeCSS(this.id)}-gradient-text {
                background: var(--uiv-primary-gradient);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: 700;
            }
            .uiv-${unsafeCSS(this.id)}-glow {
                box-shadow: 0 0 20px var(--uiv-primary-color);
            }
        `;
    }
}

const commonTokens = {
    '--uiv-font-family': "'Outfit', 'Inter', sans-serif",
    '--uiv-border-radius': '12px',
};

export const cyberTheme = new StandardTheme('cyber', 'Standard Cyber', {
    ...commonTokens,
    '--uiv-primary-color': '#ff007c',
    '--uiv-primary-gradient': 'linear-gradient(135deg, #ff007c 0%, #00ffcc 100%)',
    '--uiv-bg-surface': 'rgba(10, 10, 12, 0.8)',
    '--uiv-text-color': '#ffffff',
    '--uiv-border-color': 'rgba(255, 0, 124, 0.4)',
    '--uiv-shadow-depth': '0 0 30px rgba(255, 0, 124, 0.25)',
    '--uiv-glass-blur': 'blur(12px)',
    '--uiv-app-bg': '#0a0a0c',
    '--uiv-bg-primary': '#0a0a0c',
    '--uiv-app-sidebar-bg': '#121216',
    '--uiv-app-sidebar-text': '#ffffff',
    '--uiv-app-header-bg': '#121216',
    '--uiv-app-card-bg': 'rgba(26, 26, 30, 0.7)',
    '--uiv-app-accent-color': '#ff007c',
    '--uiv-app-accent-transparent': 'rgba(255, 0, 124, 0.15)',
    '--uiv-app-text-color': '#ffffff',
    '--uiv-app-border-color': 'rgba(255, 0, 124, 0.2)',
    '--uiv-app-hover-shadow': '0 40px 80px -20px rgba(0,0,0,0.5), 0 0 20px #ff007c',
    '--uiv-app-glass-blur': 'blur(12px)',
});

export const glassTheme = new StandardTheme('glass', 'Standard Glass', {
    ...commonTokens,
    '--uiv-primary-color': '#e0f2fe',
    '--uiv-primary-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
    '--uiv-bg-surface': 'rgba(255, 255, 255, 0.02)',
    '--uiv-text-color': '#ffffff',
    '--uiv-border-color': 'rgba(255, 255, 255, 0.1)',
    '--uiv-shadow-depth': '0 25px 60px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(255,255,255,0.02)',
    '--uiv-glass-blur': 'blur(40px) saturate(200%)',
    '--uiv-app-bg': '#02041a',
    '--uiv-bg-primary': '#02041a',
    '--uiv-app-sidebar-bg': 'rgba(2, 4, 32, 0.4)',
    '--uiv-app-sidebar-text': '#ffffff',
    '--uiv-app-header-bg': 'rgba(2, 4, 32, 0.4)',
    '--uiv-app-card-bg': 'rgba(255, 255, 255, 0.01)',
    '--uiv-app-accent-color': '#38bdf8',
    '--uiv-app-accent-transparent': 'rgba(56, 189, 248, 0.15)',
    '--uiv-app-text-color': '#ffffff',
    '--uiv-app-border-color': 'rgba(255, 255, 255, 0.08)',
    '--uiv-app-hover-shadow': '0 40px 80px -20px rgba(0,0,0,0.5), 0 0 20px #38bdf8',
    '--uiv-app-glass-blur': 'blur(40px) saturate(200%)',
});

export const modernTheme = new StandardTheme('modern', 'Standard Modern', {
    ...commonTokens,
    '--uiv-primary-color': '#6366f1',
    '--uiv-primary-gradient': 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    '--uiv-bg-surface': 'rgba(30, 41, 59, 0.7)',
    '--uiv-text-color': '#f8fafc',
    '--uiv-border-color': 'rgba(99, 102, 241, 0.3)',
    '--uiv-shadow-depth': '0 25px 50px rgba(0, 0, 0, 0.5)',
    '--uiv-app-bg': '#020617',
    '--uiv-bg-primary': '#020617',
    '--uiv-app-sidebar-bg': 'rgba(15, 23, 42, 0.9)',
    '--uiv-app-sidebar-text': '#f8fafc',
    '--uiv-app-header-bg': '#0f172a',
    '--uiv-app-card-bg': 'rgba(30, 41, 59, 0.6)',
    '--uiv-app-accent-color': '#6366f1',
    '--uiv-app-accent-transparent': 'rgba(99, 102, 241, 0.15)',
    '--uiv-app-text-color': '#f8fafc',
    '--uiv-app-border-color': 'rgba(255, 255, 255, 0.05)',
    '--uiv-app-hover-shadow': '0 40px 80px -20px rgba(0,0,0,0.5), 0 0 20px #818cf8',
    '--uiv-app-glass-blur': 'blur(12px)',
});

export const wealthTheme = new StandardTheme('wealth', 'Standard Wealth', {
    ...commonTokens,
    '--uiv-primary-color': '#d4af37',
    '--uiv-primary-gradient': 'linear-gradient(135deg, #d4af37 0%, #f1d27b 50%, #d4af37 100%)',
    '--uiv-bg-surface': 'rgba(30, 41, 59, 0.4)',
    '--uiv-text-color': '#f8fafc',
    '--uiv-border-color': 'rgba(212, 175, 55, 0.4)',
    '--uiv-shadow-depth': '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 15px rgba(212, 175, 55, 0.1)',
    '--uiv-glass-blur': 'blur(10px)',
    '--uiv-app-bg': '#020617',
    '--uiv-bg-primary': '#020617',
    '--uiv-app-sidebar-bg': '#070a1a',
    '--uiv-app-sidebar-text': '#ffffff',
    '--uiv-app-header-bg': '#070a1a',
    '--uiv-app-card-bg': 'rgba(15, 23, 42, 0.6)',
    '--uiv-app-input-bg': 'rgba(15, 23, 42, 0.4)',
    '--uiv-app-accent-color': '#d4af37',
    '--uiv-app-accent-transparent': 'rgba(212, 175, 55, 0.15)',
    '--uiv-app-text-color': '#f8fafc',
    '--uiv-app-text-muted': '#d4af37',
    '--uiv-app-border-color': 'rgba(212, 175, 55, 0.2)',
    '--uiv-app-hover-shadow': '0 40px 80px -20px rgba(212, 175, 55, 0.2), 0 0 20px rgba(212, 175, 55, 0.1)',
    '--uiv-app-glass-blur': 'blur(10px)',
});

export const natureTheme = new StandardTheme('nature', 'Standard Nature', {
    ...commonTokens,
    '--uiv-primary-color': '#10b981',
    '--uiv-primary-gradient': 'linear-gradient(135deg, #022c22 0%, #064e3b 100%)',
    '--uiv-bg-surface': 'rgba(6, 78, 59, 0.4)',
    '--uiv-text-color': '#ecfdf5',
    '--uiv-border-color': 'rgba(16, 185, 129, 0.4)',
    '--uiv-shadow-depth': '0 25px 50px rgba(0, 0, 0, 0.6)',
    '--uiv-glass-blur': 'blur(16px)',
    '--uiv-app-bg': '#021a11',
    '--uiv-bg-primary': '#021a11',
    '--uiv-app-sidebar-bg': '#022c22',
    '--uiv-app-sidebar-text': '#ecfdf5',
    '--uiv-app-header-bg': '#022c22',
    '--uiv-app-card-bg': 'rgba(6, 78, 59, 0.6)',
    '--uiv-app-input-bg': 'rgba(2, 44, 34, 0.4)',
    '--uiv-app-accent-color': '#10b981',
    '--uiv-app-accent-transparent': 'rgba(16, 185, 129, 0.15)',
    '--uiv-app-text-color': '#ecfdf5',
    '--uiv-app-text-muted': '#6ee7b7',
    '--uiv-app-border-color': 'rgba(16, 185, 129, 0.25)',
    '--uiv-app-hover-shadow': '0 40px 80px -20px rgba(0,0,0,0.5), 0 0 20px #10b981',
    '--uiv-app-glass-blur': 'blur(16px)',
    
    // Status Overrides
    '--uiv-color-primary': '#10b981',
    '--uiv-color-success': '#059669',
});

export const corporateTheme = new StandardTheme('corporate', 'Standard Corporate', {
    ...commonTokens,
    // Backgrounds & Surfaces
    '--uiv-bg-primary': '#f4f6f9',
    '--uiv-bg-secondary': '#e6ebf1',
    '--uiv-bg-tertiary': '#d1d9e6',
    '--uiv-bg-inverse': '#1f2937',
    '--uiv-surface-primary': '#ffffff',
    '--uiv-surface-secondary': '#f9fafb',
    '--uiv-surface-elevated': '#ffffff',
    '--uiv-bg-surface': '#ffffff',
    
    // Text
    '--uiv-text-primary': '#1f2937',
    '--uiv-text-secondary': '#4b5563',
    '--uiv-text-tertiary': '#6b7280',
    '--uiv-text-inverse': '#ffffff',
    '--uiv-text-disabled': '#9ca3af',
    '--uiv-text-color': '#1f2937',

    // Branding & States
    '--uiv-color-primary': '#0047ab',
    '--uiv-color-primary-hover': '#003a8c',
    '--uiv-color-primary-active': '#002f6c',
    '--uiv-color-secondary': '#6b7280',
    '--uiv-color-success': '#2e7d32',
    '--uiv-color-warning': '#ed6c02',
    '--uiv-color-danger': '#d32f2f',
    '--uiv-color-info': '#0288d1',
    '--uiv-primary-color': '#0047ab',

    // Component Tokens
    '--uiv-border-color': '#d1d5db',
    '--uiv-input-bg': '#ffffff',
    '--uiv-input-border': '#9ca3af',
    '--uiv-btn-bg': 'var(--uiv-color-primary)',
    '--uiv-btn-text': '#ffffff',
    '--uiv-shadow-depth': '0 4px 8px rgba(0,0,0,0.08)',
    
    // App Dashboard Tokens
    '--uiv-app-bg': '#f4f6f9',
    '--uiv-app-header-bg': '#e6ebf1',
    '--uiv-app-sidebar-bg': '#1f2937',
    '--uiv-app-sidebar-text': '#ffffff',
    '--uiv-app-card-bg': '#ffffff',
    '--uiv-app-input-bg': '#ffffff',
    '--uiv-app-accent-color': '#0047ab',
    '--uiv-app-accent-transparent': 'rgba(0, 71, 171, 0.15)',
    '--uiv-app-text-color': '#1f2937',
    '--uiv-app-text-muted': '#6b7280',
    '--uiv-app-border-color': '#d1d5db',
    '--uiv-app-hover-shadow': '0 20px 40px -10px rgba(0, 47, 171, 0.25)',
    '--uiv-app-glass-blur': 'blur(0px)',
});

export const retroTheme = new StandardTheme('retro', 'Standard Retro', {
    ...commonTokens,
    '--uiv-primary-color': '#00ff00',
    '--uiv-primary-gradient': 'linear-gradient(0deg, #0a0a0a 0%, #1a1a1a 100%)',
    '--uiv-bg-surface': '#111111',
    '--uiv-text-color': '#00ff00',
    '--uiv-border-color': '#00ff00',
    '--uiv-shadow-depth': '0 0 20px rgba(0, 255, 0, 0.2), inset 0 0 10px rgba(0, 255, 0, 0.1)',
    '--uiv-app-bg': '#000000',
    '--uiv-bg-primary': '#000000',
    '--uiv-app-sidebar-bg': '#0a0a0a',
    '--uiv-app-sidebar-text': '#00ff00',
    '--uiv-app-header-bg': '#0a0a0a',
    '--uiv-app-card-bg': '#111111',
    '--uiv-app-accent-color': '#00ff00',
    '--uiv-app-accent-transparent': 'rgba(0, 255, 0, 0.15)',
    '--uiv-app-text-color': '#00ff00',
    '--uiv-app-border-color': '#333333',
    '--uiv-app-hover-shadow': '10px 10px 0px #000, 0 0 20px rgba(0, 255, 0, 0.4)',
    '--uiv-app-glass-blur': 'blur(0px)',
});

export const neonTheme = new StandardTheme('neon', 'Standard Neon', {
    ...commonTokens,
    '--uiv-primary-color': '#f0abfc',
    '--uiv-primary-gradient': 'linear-gradient(135deg, #f0abfc 0%, #a855f7 100%)',
    '--uiv-bg-surface': 'rgba(13, 10, 24, 0.9)',
    '--uiv-text-color': '#ffffff',
    '--uiv-border-color': 'rgba(240, 171, 252, 0.4)',
    '--uiv-shadow-depth': '0 0 40px rgba(168, 85, 247, 0.3)',
    '--uiv-app-bg': '#0d0a18',
    '--uiv-bg-primary': '#0d0a18',
    '--uiv-app-sidebar-bg': '#1a162e',
    '--uiv-app-sidebar-text': '#ffffff',
    '--uiv-app-header-bg': '#1a162e',
    '--uiv-app-card-bg': 'rgba(26, 22, 46, 0.7)',
    '--uiv-app-accent-color': '#f0abfc',
    '--uiv-app-accent-transparent': 'rgba(240, 171, 252, 0.15)',
    '--uiv-app-text-color': '#ffffff',
    '--uiv-app-border-color': 'rgba(240, 171, 252, 0.2)',
    '--uiv-app-hover-shadow': '0 30px 60px -12px rgba(168, 85, 247, 0.3), 0 0 20px rgba(168, 85, 247, 0.2)',
    '--uiv-app-glass-blur': 'blur(10px)',
});

export const lightTheme = new StandardTheme('light', 'Standard Light', {
    ...commonTokens,
    // Backgrounds & Surfaces
    '--uiv-bg-primary': '#f8fafc',
    '--uiv-bg-secondary': '#f1f5f9',
    '--uiv-bg-tertiary': '#e2e8f0',
    '--uiv-bg-inverse': '#1e293b',
    '--uiv-surface-primary': '#ffffff',
    '--uiv-surface-secondary': '#f9fafb',
    '--uiv-surface-elevated': '#ffffff',
    '--uiv-bg-surface': '#ffffff',

    // Text
    '--uiv-text-primary': '#1e293b',
    '--uiv-text-secondary': '#64748b',
    '--uiv-text-tertiary': '#94a3b8',
    '--uiv-text-inverse': '#ffffff',
    '--uiv-text-disabled': '#cbd5e1',
    '--uiv-text-color': '#1e293b',

    // Branding & States
    '--uiv-color-primary': '#8b5cf6',
    '--uiv-color-primary-hover': '#7c3aed',
    '--uiv-color-primary-active': '#6d28d9',
    '--uiv-color-secondary': '#64748b',
    '--uiv-color-success': '#10b981',
    '--uiv-color-warning': '#f59e0b',
    '--uiv-color-danger': '#ef4444',
    '--uiv-color-info': '#0ea5e9',
    '--uiv-primary-color': '#8b5cf6',

    // Component Tokens
    '--uiv-border-color': '#e2e8f0',
    '--uiv-input-bg': '#ffffff',
    '--uiv-input-border': '#e2e8f0',
    '--uiv-btn-bg': 'var(--uiv-color-primary)',
    '--uiv-btn-text': '#ffffff',
    '--uiv-shadow-depth': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',

    // App Dashboard Tokens
    '--uiv-app-bg': '#f8fafc',
    '--uiv-app-header-bg': 'rgba(255, 255, 255, 0.8)',
    '--uiv-app-sidebar-bg': '#f1f5f9',
    '--uiv-app-sidebar-text': '#1e293b',
    '--uiv-app-card-bg': '#ffffff',
    '--uiv-app-input-bg': '#ffffff',
    '--uiv-app-accent-color': '#8b5cf6',
    '--uiv-app-accent-transparent': 'rgba(139, 92, 246, 0.08)',
    '--uiv-app-text-color': '#1e293b',
    '--uiv-app-text-muted': '#64748b',
    '--uiv-app-border-color': 'rgba(226, 232, 240, 0.8)',
    '--uiv-app-hover-shadow': '0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 8px 10px -6px rgba(139, 92, 246, 0.1)',
    '--uiv-app-glass-blur': 'blur(12px)',
});

export const darkTheme = new StandardTheme('dark', 'Standard Obsidian', {
    ...commonTokens,
    // Backgrounds & Surfaces
    '--uiv-bg-primary': '#0f172a',
    '--uiv-bg-secondary': '#1e293b',
    '--uiv-bg-tertiary': '#334155',
    '--uiv-bg-inverse': '#ffffff',
    '--uiv-surface-primary': '#1e293b',
    '--uiv-surface-secondary': '#0f172a',
    '--uiv-surface-elevated': '#1e293b',
    '--uiv-bg-surface': '#1e293b',

    // Text
    '--uiv-text-primary': '#f1f5f9',
    '--uiv-text-secondary': '#cbd5e1',
    '--uiv-text-tertiary': '#94a3b8',
    '--uiv-text-inverse': '#0f172a',
    '--uiv-text-disabled': '#64748b',
    '--uiv-text-color': '#f8fafc',

    // Branding & States
    '--uiv-color-primary': '#3b82f6',
    '--uiv-color-primary-hover': '#2563eb',
    '--uiv-color-primary-active': '#1d4ed8',
    '--uiv-color-secondary': '#94a3b8',
    '--uiv-color-success': '#22c55e',
    '--uiv-color-warning': '#fbbf24',
    '--uiv-color-danger': '#ef4444',
    '--uiv-color-info': '#38bdf8',
    '--uiv-primary-color': '#3b82f6',

    // Component Tokens
    '--uiv-border-color': '#334155',
    '--uiv-input-bg': '#0f172a',
    '--uiv-input-border': '#475569',
    '--uiv-btn-bg': 'var(--uiv-color-primary)',
    '--uiv-btn-text': '#ffffff',
    '--uiv-shadow-depth': '0 25px 50px rgba(0, 0, 0, 0.6)',

    // App Dashboard Tokens
    '--uiv-app-bg': '#020617',
    '--uiv-app-header-bg': '#0f172a',
    '--uiv-app-sidebar-bg': 'rgba(15, 23, 42, 0.9)',
    '--uiv-app-sidebar-text': '#f8fafc',
    '--uiv-app-card-bg': 'rgba(30, 41, 59, 0.6)',
    '--uiv-app-accent-color': '#3b82f6',
    '--uiv-app-accent-transparent': 'rgba(59, 130, 246, 0.15)',
    '--uiv-app-text-color': '#f8fafc',
    '--uiv-app-text-muted': '#cbd5e1',
    '--uiv-app-border-color': 'rgba(255, 255, 255, 0.08)',
    '--uiv-app-hover-shadow': '0 40px 80px -20px rgba(0,0,0,0.5), 0 0 20px rgba(58, 130, 246, 0.3)',
    '--uiv-app-glass-blur': 'blur(12px)',
});

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
    dark: darkTheme,
};

export class ZeroStandardThemeProvider {
    // [x] Phase 7: Global Variable Standardization (User Reference)
    //     [x] Update Standard and UIV base themes with unified status logic
    //     [x] Map user reference variables to Light, Dark, Corporate tokens
    //     [x] Update Dashboard shell (index.html/ts) to consume new variables
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
