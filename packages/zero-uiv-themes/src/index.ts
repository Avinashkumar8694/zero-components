export * from './base-theme';

import { cyberTheme } from './cyber/index';
import { glassTheme } from './glass/index';
import { modernTheme } from './modern/index';
import { retroTheme } from './retro/index';
import { neonTheme } from './neon/index';
import { lightTheme } from './light/index';
import { darkTheme } from './dark/index';
import { corporateTheme } from './corporate/index';
import { wealthTheme } from './wealth/index';
import { natureTheme } from './nature/index';

export * from './cyber';
export * from './glass';
export * from './modern';
export * from './retro';
export * from './neon';
export * from './light';
export * from './dark';
export * from './corporate';
export * from './wealth';
export * from './nature';

export const themeRegistry: Record<string, any> = {
    cyber: cyberTheme,
    glass: glassTheme,
    modern: modernTheme,
    retro: retroTheme,
    neon: neonTheme,
    light: lightTheme,
    dark: darkTheme,
    corporate: corporateTheme,
    wealth: wealthTheme,
    nature: natureTheme
};

export class ZeroUivThemeProvider {
    id = 'zero-uiv-themes';
    name = 'Zero UIV Default Provider';

    getThemeNames() {
        return Object.keys(themeRegistry);
    }

    getTheme(name: string) {
        return themeRegistry[name] || modernTheme;
    }
}

// Logic to register with global orchestrator independently
// Centralized registration with global orchestrator
const initRegistration = () => {
    if ((window as any).zeroThemeManager) {
        (window as any).zeroThemeManager.registerProvider(new ZeroUivThemeProvider());
    }
    
    // Always listen for the ready event in case of late-binding or reload
    window.addEventListener('zero-orchestrator-ready', () => {
        console.log('[Theme] Orchestrator ready event received - Registering provider');
        (window as any).zeroThemeManager?.registerProvider(new ZeroUivThemeProvider());
    });
};

initRegistration();

export function getTheme(name: string) {
    return themeRegistry[name] || modernTheme;
}
