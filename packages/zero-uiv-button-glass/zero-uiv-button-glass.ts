import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivButton } from '../zero-uiv-button/zero-uiv-button';

@RendererComponent({
    name: 'zero-uiv-button-glass',
    version: '1.0.0',
    title: 'Glass Button (Legacy)',
    elementSelector: 'zero-uiv-button-glass',
    group: 'Uiverse Buttons',
    iconName: 'button-icon.png',
})
@applyGlobalStyles()
export class ZeroUivButtonGlass extends ZeroUivButton {
    constructor() {
        super();
        this.theme = 'glass';
    }
}
