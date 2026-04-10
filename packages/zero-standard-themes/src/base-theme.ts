import { css, CSSResult, unsafeCSS } from 'lit';

export interface ThemeTokens {
    [key: string]: string;
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
            }
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
}
