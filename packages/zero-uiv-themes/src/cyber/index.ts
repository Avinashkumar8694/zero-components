import { css, CSSResult } from 'lit';
import { BaseTheme } from '../base-theme';
import { cyberGlobalTokens, cyberComponentTokens } from './tokens';

export class CyberTheme extends BaseTheme {
    constructor() {
        super('cyber', 'Cyberpunk', cyberGlobalTokens);
        this.componentTokens = cyberComponentTokens;
    }

    getBaseStyles(): CSSResult {
        return css`
            :host {
                font-family: 'Inter', system-ui, sans-serif;
                text-transform: uppercase;
                letter-spacing: 0.1em;
            }

            .uiv-cyber-card {
                background: var(--uiv-bg-surface);
                border: 1px solid var(--uiv-border-color);
                position: relative;
                clip-path: polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%);
                box-shadow: 0 0 20px rgba(255, 0, 124, 0.1);
                transition: all 0.3s ease;
            }

            .uiv-cyber-card:hover {
                box-shadow: 0 0 30px rgba(0, 255, 204, 0.2);
                border-color: var(--uiv-secondary-color);
            }

            .uiv-cyber-text {
                color: var(--uiv-primary-color);
                text-shadow: 0 0 10px var(--uiv-primary-color);
                font-weight: bold;
            }

            .uiv-cyber-text-secondary {
                color: var(--uiv-secondary-color);
                text-shadow: 0 0 5px var(--uiv-secondary-color);
            }

            @keyframes cyber-scan {
                0% { top: -100%; }
                100% { top: 100%; }
            }

            .uiv-cyber-scan::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: var(--uiv-secondary-color);
                opacity: 0.2;
                box-shadow: 0 0 10px var(--uiv-secondary-color);
                animation: cyber-scan 3s linear infinite;
                pointer-events: none;
            }
        `;
    }
}

export const cyberTheme = new CyberTheme();
