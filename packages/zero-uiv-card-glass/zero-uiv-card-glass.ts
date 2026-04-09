import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivCard } from '../zero-uiv-card/zero-uiv-card';

@RendererComponent({
    name: 'zero-uiv-card-glass',
    version: '1.0.0',
    title: 'Glassmorphism Card (Legacy)',
    elementSelector: 'zero-uiv-card-glass',
    group: 'Uiverse Cards',
    iconName: 'card-icon.png',
})
@applyGlobalStyles()
export class ZeroUivCardGlass extends ZeroUivCard {
    constructor() {
        super();
        this.theme = 'glass';
    }
}
