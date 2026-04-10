import { css, CSSResult, unsafeCSS } from 'lit';
import { BaseTheme } from '../base-theme';
import { corporateTokens } from './tokens';

export class CorporateTheme extends BaseTheme {
    constructor() {
        super(corporateTokens.id, corporateTokens.name, corporateTokens.tokens);
    }

    getBaseStyles(): CSSResult {
        return css`
            .uiv-corporate-theme {
                --uiv-primary-color: ${unsafeCSS(corporateTokens.tokens['--uiv-primary-color'])};
                font-family: 'Inter', 'Segoe UI', sans-serif;
            }

            .uiv-corporate-card {
                background: #ffffff;
                border: 1px solid var(--uiv-border-color);
                border-radius: 4px;
                box-shadow: var(--uiv-shadow-depth);
            }

            .uiv-corporate-text {
                color: var(--uiv-text-color);
                font-weight: 500;
            }

            .uiv-corporate-text-secondary {
                color: var(--uiv-text-muted);
            }
        `;
    }
}

export const corporateTheme = new CorporateTheme();
