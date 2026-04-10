import { css, CSSResult, unsafeCSS } from 'lit';
import { BaseTheme } from '../base-theme';
import { lightTokens } from './tokens';

export class LightTheme extends BaseTheme {
    constructor() {
        super(lightTokens.id, lightTokens.name, lightTokens.tokens);
    }

    getBaseStyles(): CSSResult {
        return css`
            .uiv-light-theme {
                --uiv-primary-color: ${unsafeCSS(this.globalTokens['--uiv-primary-color'])};
            }

            .uiv-light-card {
                background: var(--uiv-surface-color);
                border: 1px solid var(--uiv-border-color);
                border-radius: 8px;
                box-shadow: var(--uiv-shadow-depth);
                transition: all 0.3s ease;
            }

            .uiv-light-card:hover {
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            }

            .uiv-light-text {
                color: var(--uiv-text-color);
            }

            .uiv-light-text-secondary {
                color: var(--uiv-text-muted);
            }
        `;
    }
}

function variant(val: string) { return val; }

export const lightTheme = new LightTheme();
