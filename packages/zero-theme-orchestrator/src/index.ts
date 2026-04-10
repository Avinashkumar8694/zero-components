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

export class ThemeOrchestrator extends EventTarget {
    private static instance: ThemeOrchestrator;
    private providers: Map<string, ThemeProvider> = new Map();
    private activeThemes: Record<string, string> = {};

    private constructor() {
        super();
        console.log('[ThemeOrchestrator] Initialized');
        
        // Restore active themes from localStorage
        try {
            const saved = localStorage.getItem('zero-active-themes');
            if (saved) {
                this.activeThemes = JSON.parse(saved);
            }
        } catch (e) {
            console.warn('[ThemeOrchestrator] Failed to restore active themes', e);
        }

        // Pull in existing providers if another instance existed
        const existing = (window as any).zeroThemeManager;
        if (existing && existing.providers) {
            existing.providers.forEach((v: any, k: any) => this.providers.set(k, v));
        }
        // Notify late-binding themes
        window.dispatchEvent(new CustomEvent('zero-orchestrator-ready'));
    }

    static getInstance(): ThemeOrchestrator {
        if (!ThemeOrchestrator.instance) {
            ThemeOrchestrator.instance = new ThemeOrchestrator();
            // Expose globally for truly independent plugins
            (window as any).zeroThemeManager = ThemeOrchestrator.instance;
        }
        return ThemeOrchestrator.instance;
    }

    registerProvider(provider: ThemeProvider) {
        this.providers.set(provider.id, provider);
        console.log(`[ThemeOrchestrator] Registered provider: ${provider.id}`);
        
        // Set default theme for new provider if not set
        if (!this.activeThemes[provider.id]) {
            this.activeThemes[provider.id] = 'modern';
        }

        this.dispatchEvent(new CustomEvent('providers-changed'));
        
        // Refresh to apply if this provider defines global root tokens
        this.refreshActiveTheme(provider.id);
    }

    getProviders(): ThemeProvider[] {
        return Array.from(this.providers.values());
    }

    setActiveTheme(name: string, providerId: string) {
        if (this.providers.has(providerId)) {
            this.activeThemes[providerId] = name;
            localStorage.setItem('zero-active-themes', JSON.stringify(this.activeThemes));
            this.refreshActiveTheme(providerId);
        }
    }

    getActiveTheme(providerId?: string) {
        // Default to zero-standard-themes if no providerId specified
        const id = providerId || (this.providers.has('zero-standard-themes') ? 'zero-standard-themes' : 'zero-uiv-themes');
        const provider = this.providers.get(id);
        const themeName = this.activeThemes[id] || 'modern';
        return provider ? provider.getTheme(themeName) : null;
    }

    getActiveThemeName(providerId: string) {
        return this.activeThemes[providerId] || 'modern';
    }

    private refreshActiveTheme(providerId: string) {
        const theme = this.getActiveTheme(providerId);
        if (theme && theme.globalTokens) {
            this.applyRootTheme(theme.globalTokens);
        } else {
            // Ensure components are notified even if there are no global root tokens
            this.dispatchEvent(new CustomEvent('theme-changed', { detail: { providerId } }));
        }
    }

    private applyRootTheme(tokens: Record<string, string>) {
        if (!document || !document.documentElement) return;
        
        console.log('[ThemeOrchestrator] Applying root tokens:', Object.keys(tokens).length);
        const root = document.documentElement;
        
        Object.entries(tokens).forEach(([key, value]) => {
            if (key.startsWith('--uiv-app-') || key.startsWith('--uiv-primary-') || key.startsWith('--uiv-bg-')) {
                root.style.setProperty(key, value);
            }
        });

        // Trigger a global theme-changed event for non-Lit components
        this.dispatchEvent(new CustomEvent('theme-changed', { detail: { tokens } }));
    }
}

// Auto-initialize on window
export const themeOrchestrator = ThemeOrchestrator.getInstance();
