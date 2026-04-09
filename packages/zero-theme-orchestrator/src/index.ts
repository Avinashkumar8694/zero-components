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
    private activeProviderId: string = localStorage.getItem('zero-active-provider') || 'zero-uiv-themes';
    private activeThemeName: string = localStorage.getItem('zero-active-theme') || 'modern';

    private constructor() {
        super();
        console.log('[ThemeOrchestrator] Initialized');
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
        this.dispatchEvent(new CustomEvent('providers-changed'));
        
        // If this is the active provider, apply its theme immediately
        if (provider.id === this.activeProviderId) {
            this.refreshActiveTheme();
        }
    }

    getProviders(): ThemeProvider[] {
        return Array.from(this.providers.values());
    }

    setActiveProvider(id: string) {
        if (this.providers.has(id)) {
            this.activeProviderId = id;
            localStorage.setItem('zero-active-provider', id);
            this.refreshActiveTheme();
        }
    }

    setActiveTheme(name: string) {
        this.activeThemeName = name;
        localStorage.setItem('zero-active-theme', name);
        this.refreshActiveTheme();
    }

    getActiveTheme() {
        const provider = this.providers.get(this.activeProviderId);
        return provider ? provider.getTheme(this.activeThemeName) : null;
    }

    private refreshActiveTheme() {
        const theme = this.getActiveTheme();
        if (theme && theme.globalTokens) {
            this.applyRootTheme(theme.globalTokens);
        } else {
            // Ensure components are notified even if there are no global root tokens
            this.dispatchEvent(new CustomEvent('theme-changed'));
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

    getActiveProviderId() { return this.activeProviderId; }
    getActiveThemeName() { return this.activeThemeName; }
}

// Auto-initialize on window
export const themeOrchestrator = ThemeOrchestrator.getInstance();
