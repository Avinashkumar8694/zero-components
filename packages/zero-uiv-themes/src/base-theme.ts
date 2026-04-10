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
                
                /* Semantic Text Fallbacks */
                --uiv-text-inverse: var(--uiv-text-inverse, #ffffff);
                --uiv-text-primary-themed: var(--uiv-text-primary, var(--uiv-text-color, #1a1a1a));
            }

            /* Semantic Utility Classes */
            .uiv-text-primary { color: var(--uiv-status-primary) !important; }
            .uiv-text-secondary { color: var(--uiv-status-secondary) !important; }
            .uiv-text-success { color: var(--uiv-status-success) !important; }
            .uiv-text-warning { color: var(--uiv-status-warning) !important; }
            .uiv-text-danger { color: var(--uiv-status-danger) !important; }
            .uiv-text-info { color: var(--uiv-status-info) !important; }
            
            .uiv-bg-primary { background: var(--uiv-status-primary) !important; color: var(--uiv-text-inverse) !important; }
            .uiv-bg-secondary { background: var(--uiv-status-secondary) !important; color: var(--uiv-text-inverse) !important; }
            .uiv-bg-success { background: var(--uiv-status-success) !important; color: var(--uiv-text-inverse) !important; }
            .uiv-bg-warning { background: var(--uiv-status-warning) !important; color: var(--uiv-text-inverse) !important; }
            .uiv-bg-danger { background: var(--uiv-status-danger) !important; color: var(--uiv-text-inverse) !important; }
            .uiv-bg-info { background: var(--uiv-status-info) !important; color: var(--uiv-text-inverse) !important; }

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
                background-color: var(--uiv-input-bg, var(--uiv-app-input-bg, var(--uiv-surface-color, #ffffff)));
                color: var(--uiv-text-primary-themed, var(--uiv-app-text-color, #1a1a1a));
                border: 1px solid var(--uiv-input-border, var(--uiv-app-border-color, rgba(128,128,128,0.2)));
                border-radius: var(--uiv-border-radius, 8px);
                padding: 10px 14px;
                font-family: inherit;
                font-size: 14px;
                width: 100%;
                box-sizing: border-box;
                transition: var(--uiv-transition-smooth, all 0.3s cubic-bezier(0.4, 0, 0.2, 1));
                display: block;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            }

            .uiv-input:hover, .uiv-select:hover, .uiv-textarea:hover {
                border-color: var(--uiv-status-primary);
            }

            .uiv-input[type="checkbox"], .uiv-input[type="radio"] {
                width: auto;
                cursor: pointer;
                display: inline-block;
                box-shadow: none;
            }

            .uiv-input:focus, .uiv-select:focus, .uiv-textarea:focus {
                outline: none;
                border-color: var(--uiv-status-primary);
                box-shadow: 0 0 0 3px var(--uiv-app-accent-transparent, rgba(59, 130, 246, 0.2));
            }

            .uiv-button {
                background-color: var(--uiv-btn-bg, var(--uiv-status-primary));
                color: var(--uiv-btn-text, var(--uiv-text-inverse));
                border: none;
                border-radius: var(--uiv-border-radius, 8px);
                padding: 12px 24px;
                font-weight: 600;
                cursor: pointer;
                transition: var(--uiv-transition-smooth, all 0.3s cubic-bezier(0.4, 0, 0.2, 1));
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }

            .uiv-button:hover {
                filter: brightness(1.15);
                transform: translateY(-1px);
                box-shadow: var(--uiv-shadow-depth, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
            }

            .uiv-button:active {
                transform: translateY(0);
                filter: brightness(0.95);
            }

            .uiv-label {
                color: inherit;
                font-weight: 600;
                margin-bottom: 8px;
                font-size: 0.85rem;
                letter-spacing: 0.025em;
                text-transform: uppercase;
                display: block;
                opacity: 0.8;
            }
        `;
    }
}
