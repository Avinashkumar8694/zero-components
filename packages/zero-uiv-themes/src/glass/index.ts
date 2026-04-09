import { css } from 'lit';
import { BaseTheme, createThemeStyles } from '../base-theme';
import { glassGlobalTokens, glassComponentTokens } from './tokens';

export class GlassTheme extends BaseTheme {
    id = 'glass';
    name = 'Glassmorphism';
    globalTokens = glassGlobalTokens;
    componentTokens = glassComponentTokens;
    baseStyles = css`
        :host {
            font-family: 'Inter', system-ui, sans-serif;
            --glass-grad: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        }

        .uiv-glass-card {
            background: var(--uiv-surface-color);
            backdrop-filter: blur(var(--uiv-glass-blur));
            -webkit-backdrop-filter: blur(var(--uiv-glass-blur));
            border: 1px solid var(--uiv-border-color);
            border-radius: 16px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .uiv-glass-text {
            color: var(--uiv-text-color);
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
        }

        .uiv-glass-text-secondary {
            color: var(--uiv-secondary-color);
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        .uiv-glass-shimmer::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
            animation: shimmer 3s infinite;
            pointer-events: none;
        }

        .uiv-glass-border-glow {
            box-shadow: inset 0 0 15px rgba(255, 255, 255, 0.05), 0 0 10px rgba(14, 165, 233, 0.2);
        }
    `;

    getComponentStyles(componentName: string) {
        const tokens = this.getComponentTokens(componentName);
        return css`
            :host {
                ${createThemeStyles(tokens)}
            }
        `;
    }
}

export const glassTheme = new GlassTheme();
