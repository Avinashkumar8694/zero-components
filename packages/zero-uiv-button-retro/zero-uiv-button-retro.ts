import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivButton } from '../zero-uiv-button/zero-uiv-button';

@RendererComponent({
    name: 'zero-uiv-button-retro',
    version: '1.0.0',
    title: 'Retro Button (Legacy)',
    elementSelector: 'zero-uiv-button-retro',
    group: 'Uiverse Buttons',
    iconName: 'button-icon.png',
})
@applyGlobalStyles()
export class ZeroUivButtonRetro extends ZeroUivButton {
    constructor() {
        super();
        this.theme = 'retro';
    }
}
