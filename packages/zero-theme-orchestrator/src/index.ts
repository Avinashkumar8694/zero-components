/**
 * Zero Theme Orchestrator
 * Provides a global registry for independent theme providers and components.
 */

export interface ThemeProvider {
    id: string;
    name: string;
    getThemeNames(): string[];
    getTheme(themeName: string): any;
}

export interface Theme {
    id: string;
    name: string;
    globalTokens: Record<string, string>;
}

export class ZeroStandardThemeProvider implements ThemeProvider {
    id = 'zero-standard-themes';
    name = 'Zero Standard Themes';

    getThemeNames() {
        return ['modern', 'cyber', 'glass', 'retro'];
    }

    getTheme(name: string): Theme {
        const themes: Record<string, Theme> = {
            modern: {
                id: 'modern',
                name: 'Modern Minimal',
                globalTokens: {
                    // Component tokens
                    '--uiv-primary-color': '#6366f1',
                    '--uiv-secondary-color': '#818cf8',
                    '--uiv-accent-color': '#10b981',
                    '--uiv-bg-color': '#020617',
                    '--uiv-surface-color': '#0f172a',
                    '--uiv-text-color': '#f8fafc',
                    '--uiv-text-muted': '#64748b',
                    '--uiv-border-color': '#1e293b',
                    // Studio shell tokens
                    '--zs-body-bg': 'linear-gradient(180deg, #020617 0%, #0f172a 100%)',
                    '--zs-bg': '#020617',
                    '--zs-surface': 'rgba(15, 23, 42, 0.92)',
                    '--zs-surface-strong': 'rgba(15, 23, 42, 0.98)',
                    '--zs-surface-soft': 'rgba(30, 41, 59, 0.90)',
                    '--zs-surface-panel': 'linear-gradient(180deg, rgba(15,23,42,0.96), rgba(30,41,59,0.96))',
                    '--zs-border': 'rgba(99, 102, 241, 0.2)',
                    '--zs-border-strong': 'rgba(99, 102, 241, 0.45)',
                    '--zs-border-soft': 'rgba(99, 102, 241, 0.12)',
                    '--zs-text': '#f8fafc',
                    '--zs-text-muted': '#64748b',
                    '--zs-heading': '#e2e8f0',
                    '--zs-brand': '#6366f1',
                    '--zs-brand-2': '#10b981',
                    '--zs-input-bg': 'rgba(30, 41, 59, 0.8)',
                    '--zs-accent-ring': 'rgba(99, 102, 241, 0.45)',
                    '--zs-accent-ring-strong': 'rgba(99, 102, 241, 0.7)',
                    '--zs-accent-shadow': '0 0 0 3px rgba(99,102,241,0.14), 0 18px 48px rgba(99,102,241,0.12)',
                    '--zs-shadow-sm': '0 12px 24px rgba(0, 0, 0, 0.3)',
                    '--zs-shadow-md': '0 18px 45px rgba(0, 0, 0, 0.4)',
                    '--zs-shadow-lg': '0 28px 70px rgba(0, 0, 0, 0.5)',
                    '--zs-panel-blur': 'blur(14px)',
                }
            },
            cyber: {
                id: 'cyber',
                name: 'Cyberpunk',
                globalTokens: {
                    '--uiv-primary-color': '#ff007c',
                    '--uiv-secondary-color': '#00ffcc',
                    '--uiv-accent-color': '#bc00ff',
                    '--uiv-bg-color': '#0a0a0c',
                    '--uiv-surface-color': '#1a1a1e',
                    '--uiv-text-color': '#ffffff',
                    '--uiv-text-muted': '#66666e',
                    '--uiv-border-color': 'rgba(255, 0, 124, 0.4)',
                    '--zs-body-bg': '#0a0a0c',
                    '--zs-bg': '#0a0a0c',
                    '--zs-surface': 'rgba(20, 20, 28, 0.92)',
                    '--zs-surface-strong': 'rgba(20, 20, 28, 0.98)',
                    '--zs-surface-soft': 'rgba(26, 26, 35, 0.90)',
                    '--zs-surface-panel': 'linear-gradient(180deg, rgba(20,20,28,0.96), rgba(26,26,35,0.96))',
                    '--zs-border': 'rgba(255, 0, 124, 0.25)',
                    '--zs-border-strong': 'rgba(255, 0, 124, 0.5)',
                    '--zs-border-soft': 'rgba(255, 0, 124, 0.14)',
                    '--zs-text': '#ffffff',
                    '--zs-text-muted': '#66666e',
                    '--zs-heading': '#ffffff',
                    '--zs-brand': '#ff007c',
                    '--zs-brand-2': '#00ffcc',
                    '--zs-input-bg': 'rgba(26, 26, 35, 0.9)',
                    '--zs-accent-ring': 'rgba(255, 0, 124, 0.45)',
                    '--zs-accent-ring-strong': 'rgba(255, 0, 124, 0.7)',
                    '--zs-accent-shadow': '0 0 0 3px rgba(255,0,124,0.14), 0 18px 48px rgba(255,0,124,0.12)',
                    '--zs-shadow-sm': '0 12px 24px rgba(0, 0, 0, 0.5)',
                    '--zs-shadow-md': '0 18px 45px rgba(0, 0, 0, 0.6)',
                    '--zs-shadow-lg': '0 28px 70px rgba(255, 0, 124, 0.15)',
                    '--zs-panel-blur': 'blur(0px)',
                }
            },
            glass: {
                id: 'glass',
                name: 'Glassmorphism',
                globalTokens: {
                    '--uiv-primary-color': '#38bdf8',
                    '--uiv-secondary-color': '#e0f2fe',
                    '--uiv-accent-color': '#38bdf8',
                    '--uiv-bg-color': '#02041a',
                    '--uiv-surface-color': 'rgba(10, 20, 50, 0.6)',
                    '--uiv-text-color': '#ffffff',
                    '--uiv-text-muted': 'rgba(255, 255, 255, 0.6)',
                    '--uiv-border-color': 'rgba(255, 255, 255, 0.15)',
                    '--zs-body-bg': 'linear-gradient(135deg, #02041a 0%, #060c2e 50%, #02041a 100%)',
                    '--zs-bg': '#02041a',
                    '--zs-surface': 'rgba(10, 20, 50, 0.82)',
                    '--zs-surface-strong': 'rgba(10, 20, 55, 0.95)',
                    '--zs-surface-soft': 'rgba(15, 25, 60, 0.78)',
                    '--zs-surface-panel': 'linear-gradient(180deg, rgba(10,20,50,0.9), rgba(15,25,60,0.92))',
                    '--zs-border': 'rgba(255, 255, 255, 0.1)',
                    '--zs-border-strong': 'rgba(56, 189, 248, 0.45)',
                    '--zs-border-soft': 'rgba(255, 255, 255, 0.06)',
                    '--zs-text': '#ffffff',
                    '--zs-text-muted': 'rgba(255, 255, 255, 0.55)',
                    '--zs-heading': '#e0f2fe',
                    '--zs-brand': '#38bdf8',
                    '--zs-brand-2': '#818cf8',
                    '--zs-input-bg': 'rgba(10, 20, 50, 0.7)',
                    '--zs-accent-ring': 'rgba(56, 189, 248, 0.45)',
                    '--zs-accent-ring-strong': 'rgba(56, 189, 248, 0.7)',
                    '--zs-accent-shadow': '0 0 0 3px rgba(56,189,248,0.14), 0 18px 48px rgba(56,189,248,0.12)',
                    '--zs-shadow-sm': '0 12px 24px rgba(0, 0, 0, 0.4)',
                    '--zs-shadow-md': '0 18px 45px rgba(0, 0, 0, 0.5)',
                    '--zs-shadow-lg': '0 28px 70px rgba(56, 189, 248, 0.08)',
                    '--zs-panel-blur': 'blur(20px) saturate(180%)',
                }
            },
            retro: {
                id: 'retro',
                name: 'Retro Terminal',
                globalTokens: {
                    '--uiv-primary-color': '#00ff00',
                    '--uiv-secondary-color': '#00ff00',
                    '--uiv-accent-color': '#00ff00',
                    '--uiv-bg-color': '#000000',
                    '--uiv-surface-color': '#0d0d0d',
                    '--uiv-text-color': '#00ff00',
                    '--uiv-text-muted': '#00aa00',
                    '--uiv-border-color': '#00ff00',
                    '--zs-body-bg': '#000000',
                    '--zs-bg': '#000000',
                    '--zs-surface': 'rgba(13, 13, 13, 0.95)',
                    '--zs-surface-strong': 'rgba(13, 13, 13, 0.99)',
                    '--zs-surface-soft': 'rgba(20, 20, 20, 0.92)',
                    '--zs-surface-panel': 'linear-gradient(180deg, rgba(13,13,13,0.96), rgba(20,20,20,0.96))',
                    '--zs-border': 'rgba(0, 255, 0, 0.3)',
                    '--zs-border-strong': 'rgba(0, 255, 0, 0.6)',
                    '--zs-border-soft': 'rgba(0, 255, 0, 0.15)',
                    '--zs-text': '#00ff00',
                    '--zs-text-muted': '#00aa00',
                    '--zs-heading': '#00ff00',
                    '--zs-brand': '#00ff00',
                    '--zs-brand-2': '#00cc00',
                    '--zs-input-bg': 'rgba(13, 13, 13, 0.95)',
                    '--zs-accent-ring': 'rgba(0, 255, 0, 0.45)',
                    '--zs-accent-ring-strong': 'rgba(0, 255, 0, 0.7)',
                    '--zs-accent-shadow': '0 0 0 3px rgba(0,255,0,0.14), 0 0 20px rgba(0,255,0,0.2)',
                    '--zs-shadow-sm': '0 0 10px rgba(0, 255, 0, 0.1)',
                    '--zs-shadow-md': '0 0 20px rgba(0, 255, 0, 0.15)',
                    '--zs-shadow-lg': '0 0 40px rgba(0, 255, 0, 0.2)',
                    '--zs-panel-blur': 'blur(0px)',
                }
            }
        };
        return themes[name] || themes.modern;
    }
}

export class ThemeOrchestrator extends EventTarget {
    private static instance: ThemeOrchestrator;
    private providers: Map<string, ThemeProvider> = new Map();
    private activeThemes: Record<string, string> = {};
    private rootProviderId: string = 'zero-standard-themes';
    private followPrimary: boolean = true;
    private rootThemeTokens: Record<string, string> = {};
    private manualOverrideTokens: Record<string, string> = {};
    private appliedTokenKeys: Set<string> = new Set();

    private constructor() {
        super();
        console.log('[ThemeOrchestrator] Initialized');
        
        // Restore active themes from localStorage
        try {
            const savedThemes = localStorage.getItem('zero-active-themes');
            if (savedThemes) {
                this.activeThemes = JSON.parse(savedThemes);
            }
            const savedRoot = localStorage.getItem('zero-root-provider-id');
            if (savedRoot) {
                this.rootProviderId = savedRoot;
            }
            const savedFollow = localStorage.getItem('zero-follow-primary');
            if (savedFollow) {
                this.followPrimary = savedFollow === 'true';
            }
        } catch (e) {
            console.warn('[ThemeOrchestrator] Failed to restore state', e);
        }

        // Pull in existing providers if another instance existed
        const existing = (window as any).zeroThemeManager;
        if (existing && existing.providers) {
            existing.providers.forEach((v: any, k: any) => this.providers.set(k, v));
        }

        // Auto-register built-in standard provider
        this.registerProvider(new ZeroStandardThemeProvider());

        // Notify late-binding themes
        window.dispatchEvent(new CustomEvent('zero-orchestrator-ready'));
    }

    static getInstance(): ThemeOrchestrator {
        if (!ThemeOrchestrator.instance) {
            ThemeOrchestrator.instance = new ThemeOrchestrator();
            (window as any).zeroThemeManager = ThemeOrchestrator.instance;
        }
        return ThemeOrchestrator.instance;
    }

    registerProvider(provider: ThemeProvider) {
        this.providers.set(provider.id, provider);
        console.log(`[ThemeOrchestrator] Registered provider: ${provider.id}`);
        
        if (!this.activeThemes[provider.id]) {
            const savedThemes = localStorage.getItem('zero-active-themes');
            const parsed = savedThemes ? JSON.parse(savedThemes) : {};
            this.activeThemes[provider.id] = parsed[provider.id] || 'modern';
        }

        this.dispatchEvent(new CustomEvent('providers-changed'));
        this.refreshActiveTheme(provider.id);
    }

    unregisterProvider(providerId: string) {
        // Never allow unregistering the built-in standard provider
        if (providerId === 'zero-standard-themes') return;

        if (this.providers.has(providerId)) {
            this.providers.delete(providerId);
            delete this.activeThemes[providerId];
            
            if (this.rootProviderId === providerId) {
                // Fall back to built-in standard provider
                this.rootProviderId = 'zero-standard-themes';
                localStorage.setItem('zero-root-provider-id', this.rootProviderId);
                this.refreshActiveTheme(this.rootProviderId);
            }
            
            console.log(`[ThemeOrchestrator] Unregistered provider: ${providerId}`);
            this.dispatchEvent(new CustomEvent('providers-changed'));
        }
    }

    getProviders(): ThemeProvider[] {
        return Array.from(this.providers.values());
    }

    setRootProvider(id: string) {
        if (this.providers.has(id)) {
            this.rootProviderId = id;
            localStorage.setItem('zero-root-provider-id', id);
            console.log(`[ThemeOrchestrator] Set primary root provider: ${id}`);
            this.refreshActiveTheme(id);
            this.dispatchEvent(new CustomEvent('providers-changed'));
        }
    }

    getRootProviderId(): string {
        return this.rootProviderId;
    }

    setActiveTheme(name: string, providerId: string) {
        if (this.providers.has(providerId)) {
            this.activeThemes[providerId] = name;
            localStorage.setItem('zero-active-themes', JSON.stringify(this.activeThemes));
            this.refreshActiveTheme(providerId);
        }
    }

    setFollowPrimary(follow: boolean) {
        this.followPrimary = follow;
        localStorage.setItem('zero-follow-primary', String(follow));
        this.dispatchEvent(new CustomEvent('theme-changed', { detail: { followPrimary: follow } }));
    }

    getFollowPrimary(): boolean {
        return this.followPrimary;
    }

    getActiveTheme(providerId?: string) {
        const id = (this.followPrimary || !providerId) ? this.rootProviderId : providerId;
        const provider = this.providers.get(id);
        const themeName = this.activeThemes[this.followPrimary ? this.rootProviderId : id] || 'modern';
        return provider ? provider.getTheme(themeName) : null;
    }

    getActiveThemeName(providerId: string) {
        const id = this.followPrimary ? this.rootProviderId : providerId;
        return this.activeThemes[id] || 'modern';
    }

    reset() {
        // Clear persisted state
        localStorage.removeItem('zero-active-themes');
        localStorage.removeItem('zero-root-provider-id');
        localStorage.removeItem('zero-follow-primary');

        // Reset to defaults
        this.activeThemes = { 'zero-standard-themes': 'modern' };
        this.rootProviderId = 'zero-standard-themes';
        this.followPrimary = true;
        this.manualOverrideTokens = {};

        // Re-apply default theme tokens
        this.refreshActiveTheme('zero-standard-themes');
        this.dispatchEvent(new CustomEvent('providers-changed'));
        console.log('[ThemeOrchestrator] Reset to default theme');
    }

    private refreshActiveTheme(providerId: string) {
        const theme = this.getActiveTheme(providerId);
        if (providerId === this.rootProviderId && theme && theme.globalTokens) {
            this.rootThemeTokens = theme.globalTokens;
            this.applyResolvedTokens();
        } else {
            this.dispatchEvent(new CustomEvent('theme-changed', { detail: { providerId } }));
        }
    }

    applyManualTokens(tokens: Record<string, string>, target?: HTMLElement) {
        this.manualOverrideTokens = tokens;
        this.applyResolvedTokens(target);
    }

    /**
     * Returns all CSS variable tokens from the currently active theme,
     * merged with any user overrides passed in.
     */
    getActiveThemeTokens(userOverrides: Record<string, string> = {}): Record<string, string> {
        const theme = this.getActiveTheme();
        const base = theme?.globalTokens ?? {};
        return { ...base, ...userOverrides };
    }

    private applyResolvedTokens(target?: HTMLElement) {
        const mergedTokens = {
            ...this.rootThemeTokens,
            ...this.manualOverrideTokens,
        };
        this.applyRootTheme(mergedTokens, target);
    }

    public applyRootTheme(tokens: Record<string, string>, target?: HTMLElement) {
        if (!document || !document.documentElement) return;

        console.log('[ThemeOrchestrator] Applying tokens:', Object.keys(tokens).length);

        const rootStyle = document.documentElement.style;
        const canvasShell = target || document.querySelector('.zs-canvas-shell');
        const nextTokenKeys = new Set(Object.keys(tokens).filter((key) => key.startsWith('--')));

        this.appliedTokenKeys.forEach((key) => {
            if (nextTokenKeys.has(key)) {
                return;
            }
            rootStyle.removeProperty(key);
            if (canvasShell && canvasShell !== document.documentElement) {
                (canvasShell as HTMLElement).style.removeProperty(key);
            }
        });

        Object.entries(tokens).forEach(([key, value]) => {
            if (key.startsWith('--')) {
                rootStyle.setProperty(key, value);
            }
        });

        this.appliedTokenKeys = nextTokenKeys;

        if (tokens['--zs-body-bg']) {
            document.body.style.background = tokens['--zs-body-bg'];
        } else {
            document.body.style.removeProperty('background');
        }

        if (canvasShell && canvasShell !== document.documentElement) {
            Object.entries(tokens).forEach(([key, value]) => {
                if (key.startsWith('--')) {
                    (canvasShell as HTMLElement).style.setProperty(key, value);
                }
            });
        }

        this.dispatchEvent(new CustomEvent('theme-changed', { detail: { tokens } }));
    }
}

// Auto-initialize on window
export const themeOrchestrator = ThemeOrchestrator.getInstance();
