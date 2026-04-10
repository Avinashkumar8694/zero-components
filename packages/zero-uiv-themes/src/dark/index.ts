import { css, CSSResult, unsafeCSS } from 'lit';
import { BaseTheme } from '../base-theme';
import { darkTokens } from './tokens';

export class DarkTheme extends BaseTheme {
    constructor() {
        super(darkTokens.id, darkTokens.name, darkTokens.tokens);
    }

    getBaseStyles(): CSSResult {
        return css`
            .uiv-dark-theme {
                --uiv-primary-color: ${unsafeCSS(darkTokens.tokens['--uiv-primary-color'])};
            }

            .uiv-dark-card {
                background: var(--uiv-surface-color);
                border: 1px solid var(--uiv-border-color);
                border-radius: 8px;
                box-shadow: var(--uiv-shadow-depth);
            }

            .uiv-dark-text {
                color: var(--uiv-text-color);
            }

            .uiv-dark-text-secondary {
                color: var(--uiv-text-muted);
            }
        `;
    }
}

export const darkTheme = new DarkTheme();
