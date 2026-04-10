import { css, CSSResult, unsafeCSS } from 'lit';

export interface ThemeTokens {
    [key: string]: string;
}

export interface ThemeModule {
    id: string;
    name: string;
    globalTokens: ThemeTokens;
    componentTokens: Record<string, ThemeTokens>;
    baseStyles: CSSResult;
}

export function createThemeStyles(tokens: ThemeTokens): CSSResult {
    const serialized = Object.entries(tokens)
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n');
    return unsafeCSS(serialized);
}

export abstract class BaseTheme {
    public id: string;
    public name: string;
    public globalTokens: ThemeTokens;
    public componentTokens: Record<string, ThemeTokens>;
    public baseStyles: CSSResult;

    constructor(id: string, name: string, tokens: ThemeTokens) {
        this.id = id;
        this.name = name;
        this.globalTokens = tokens;
        this.componentTokens = {};
        this.baseStyles = css``;
    }

    getGlobalStyles(): CSSResult {
        return css`
            :host {
                ${createThemeStyles(this.globalTokens)}
                --uiv-status-primary: var(--uiv-primary-color, var(--uiv-color-primary, #3b82f6));
                --uiv-status-secondary: var(--uiv-secondary-color, var(--uiv-color-secondary, #64748b));
                --uiv-status-success: var(--uiv-color-success, #16a34a);
                --uiv-status-warning: var(--uiv-color-warning, #f59e0b);
                --uiv-status-danger: var(--uiv-color-danger, #dc2626);
                --uiv-status-info: var(--uiv-color-info, #0ea5e9);
            }

            /* Semantic Utility Classes */
            .uiv-text-primary { color: var(--uiv-status-primary) !important; }
            .uiv-text-secondary { color: var(--uiv-status-secondary) !important; }
            .uiv-text-success { color: var(--uiv-status-success) !important; }
            .uiv-text-warning { color: var(--uiv-status-warning) !important; }
            .uiv-text-danger { color: var(--uiv-status-danger) !important; }
            .uiv-text-info { color: var(--uiv-status-info) !important; }
            
            .uiv-bg-primary { background: var(--uiv-status-primary) !important; color: #ffffff !important; }
            .uiv-bg-secondary { background: var(--uiv-status-secondary) !important; color: #ffffff !important; }
            .uiv-bg-success { background: var(--uiv-status-success) !important; color: #ffffff !important; }
            .uiv-bg-warning { background: var(--uiv-status-warning) !important; color: #ffffff !important; }
            .uiv-bg-danger { background: var(--uiv-status-danger) !important; color: #ffffff !important; }
            .uiv-bg-info { background: var(--uiv-status-info) !important; color: #ffffff !important; }

            ${this.baseStyles}
            ${this.getBaseStyles()}
        `;
    }

    abstract getBaseStyles(): CSSResult;

    getComponentStyles(componentName: string): CSSResult {
        const tokens = this.getComponentTokens(componentName);
        return css`
            :host {
                ${createThemeStyles(tokens)}
            }
        `;
    }

    getComponentTokens(componentName: string): ThemeTokens {
        return this.componentTokens[componentName] || {};
    }

    /**
     * Returns actual CSS rules for common primitive elements.
     * Useful for components like AttributeWindow that use standard HTML tags.
     */
    getCoreComponentStyles(): CSSResult {
        return css`
            .uiv-input, .uiv-select, .uiv-textarea {
                background-color: var(--uiv-input-bg, var(--uiv-app-input-bg, #ffffff));
                color: var(--uiv-text-primary, var(--uiv-app-text-color, #1a1a1a));
                border: 1px solid var(--uiv-input-border, var(--uiv-app-border-color, #cbd5e1));
                border-radius: var(--uiv-border-radius, 8px);
                padding: 8px 12px;
                font-family: inherit;
                font-size: 14px;
                width: 100%;
                box-sizing: border-box;
                transition: border-color 0.2s ease, box-shadow 0.2s ease;
                display: block;
            }

            .uiv-input[type="checkbox"], .uiv-input[type="radio"] {
                width: auto;
                cursor: pointer;
                display: inline-block;
            }

            .uiv-input:focus, .uiv-select:focus, .uiv-textarea:focus {
                outline: none;
                border-color: var(--uiv-color-primary, #3b82f6);
                box-shadow: 0 0 0 2px var(--uiv-app-accent-transparent, rgba(59, 130, 246, 0.2));
            }

            .uiv-button {
                background-color: var(--uiv-btn-bg, var(--uiv-color-primary, #3b82f6));
                color: var(--uiv-btn-text, var(--uiv-text-inverse, #ffffff));
                border: none;
                border-radius: var(--uiv-border-radius, 8px);
                padding: 10px 20px;
                font-weight: 600;
                cursor: pointer;
                transition: transform 0.1s ease, filter 0.2s ease;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }

            .uiv-button:hover {
                filter: brightness(1.1);
            }

            .uiv-button:active {
                transform: scale(0.98);
            }

            .uiv-label {
                color: var(--uiv-text-primary, var(--uiv-app-text-color));
                font-weight: 500;
                margin-bottom: 6px;
                display: block;
            }
        `;
    }
}
