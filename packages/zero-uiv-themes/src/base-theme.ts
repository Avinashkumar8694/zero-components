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
    abstract id: string;
    abstract name: string;
    abstract globalTokens: ThemeTokens;
    abstract componentTokens: Record<string, ThemeTokens>;
    abstract baseStyles: CSSResult;

    getGlobalStyles(): CSSResult {
        return css`
            :host {
                ${createThemeStyles(this.globalTokens)}
            }
            ${this.baseStyles}
        `;
    }

    getComponentTokens(componentName: string): ThemeTokens {
        return this.componentTokens[componentName] || {};
    }
}
