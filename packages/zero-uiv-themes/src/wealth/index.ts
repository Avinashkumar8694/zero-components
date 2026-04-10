import { css, CSSResult, unsafeCSS } from 'lit';
import { BaseTheme } from '../base-theme';
import { wealthTokens } from './tokens';

export class WealthTheme extends BaseTheme {
    constructor() {
        super(wealthTokens.id, wealthTokens.name, wealthTokens.tokens);
    }

    getBaseStyles(): CSSResult {
        return css`
            .uiv-wealth-theme {
                --uiv-primary-color: ${unsafeCSS(wealthTokens.tokens['--uiv-primary-color'])};
                background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            }

            .uiv-wealth-card {
                background: linear-gradient(145deg, #111827, #1f2937);
                border: 1px solid var(--uiv-primary-color);
                border-radius: 0px;
                box-shadow: var(--uiv-shadow-depth);
                position: relative;
            }

            .uiv-wealth-card::after {
                content: '';
                position: absolute;
                inset: 1px;
                border: 1px solid rgba(212, 175, 55, 0.1);
                pointer-events: none;
            }

            .uiv-wealth-text {
                color: var(--uiv-primary-color);
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: 300;
            }

            .uiv-wealth-text-secondary {
                color: #ffffff;
                opacity: 0.8;
            }
        `;
    }
}

export const wealthTheme = new WealthTheme();
