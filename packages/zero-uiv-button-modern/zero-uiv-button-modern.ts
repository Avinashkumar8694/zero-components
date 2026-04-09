import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivButton } from '../zero-uiv-button/zero-uiv-button';

@RendererComponent({
    name: 'zero-uiv-button-modern',
    version: '1.0.0',
    title: 'Modern Button (Legacy)',
    elementSelector: 'zero-uiv-button-modern',
    group: 'Uiverse Buttons',
    iconName: 'button-icon.png',
})
@applyGlobalStyles()
export class ZeroUivButtonModern extends ZeroUivButton {
    constructor() {
        super();
        this.theme = 'modern';
    }
}
