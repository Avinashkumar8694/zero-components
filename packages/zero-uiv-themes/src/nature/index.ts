import { css, CSSResult, unsafeCSS } from 'lit';
import { BaseTheme } from '../base-theme';
import { natureTokens } from './tokens';

export class NatureTheme extends BaseTheme {
    constructor() {
        super(natureTokens.id, natureTokens.name, natureTokens.tokens);
    }

    getBaseStyles(): CSSResult {
        return css`
            .uiv-nature-theme {
                --uiv-primary-color: ${unsafeCSS(natureTokens.tokens['--uiv-primary-color'])};
            }

            .uiv-nature-card {
                background: var(--uiv-surface-color);
                border: 2px solid var(--uiv-border-color);
                border-radius: 24px;
                box-shadow: var(--uiv-shadow-depth);
                transition: transform 0.3s ease;
            }

            .uiv-nature-card:hover {
                transform: scale(1.02);
            }

            .uiv-nature-text {
                color: var(--uiv-primary-color);
                font-family: 'Outfit', sans-serif;
            }

            .uiv-nature-text-secondary {
                color: var(--uiv-secondary-color);
            }
        `;
    }
}

export const natureTheme = new NatureTheme();
