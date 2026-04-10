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
    private rootProviderId: string = 'zero-uiv-themes';
    private followPrimary: boolean = false;

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
        
        // Ensure default theme exists in state
        if (!this.activeThemes[provider.id]) {
            const savedThemes = localStorage.getItem('zero-active-themes');
            const parsed = savedThemes ? JSON.parse(savedThemes) : {};
            this.activeThemes[provider.id] = parsed[provider.id] || 'modern';
        }

        this.dispatchEvent(new CustomEvent('providers-changed'));
        
        // Refresh to apply if this provider defines global root tokens
        this.refreshActiveTheme(provider.id);
    }

    unregisterProvider(providerId: string) {
        if (this.providers.has(providerId)) {
            this.providers.delete(providerId);
            delete this.activeThemes[providerId];
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
            // Re-apply root theme from the new primary
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
        console.log(`[ThemeOrchestrator] Follow primary mode: ${follow}`);
        this.dispatchEvent(new CustomEvent('theme-changed', { detail: { followPrimary: follow } }));
    }

    getFollowPrimary(): boolean {
        return this.followPrimary;
    }

    getActiveTheme(providerId?: string) {
        // If followPrimary is on, everyone uses the root provider's selection
        const id = (this.followPrimary || !providerId) ? this.rootProviderId : providerId;
        const provider = this.providers.get(id);
        
        // If in follow mode, use the theme name from the root provider slot
        const themeName = this.activeThemes[this.followPrimary ? this.rootProviderId : id] || 'modern';
        return provider ? provider.getTheme(themeName) : null;
    }

    getActiveThemeName(providerId: string) {
        const id = this.followPrimary ? this.rootProviderId : providerId;
        return this.activeThemes[id] || 'modern';
    }

    private refreshActiveTheme(providerId: string) {
        const theme = this.getActiveTheme(providerId);
        
        // Only apply root variables if this is the designated root provider
        if (providerId === this.rootProviderId && theme && theme.globalTokens) {
            this.applyRootTheme(theme.globalTokens);
        } else {
            // Signal a theme change even for scoped providers so components can update
            this.dispatchEvent(new CustomEvent('theme-changed', { detail: { providerId } }));
        }
    }

    private applyRootTheme(tokens: Record<string, string>) {
        if (!document || !document.documentElement) return;
        
        console.log('[ThemeOrchestrator] Applying root tokens:', Object.keys(tokens).length);
        const root = document.documentElement;
        
        Object.entries(tokens).forEach(([key, value]) => {
            if (key.startsWith('--uiv-')) {
                root.style.setProperty(key, value);
            }
        });

        // Trigger a global theme-changed event for non-Lit components
        this.dispatchEvent(new CustomEvent('theme-changed', { detail: { tokens } }));
    }
}

// Auto-initialize on window
export const themeOrchestrator = ThemeOrchestrator.getInstance();
