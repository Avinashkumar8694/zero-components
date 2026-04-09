import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivExpansion } from '../zero-uiv-expansion/zero-uiv-expansion';

@RendererComponent({
    name: 'zero-uiv-expansion-modern',
    version: '1.0.0',
    title: 'Modern Expansion Panel (Legacy)',
    elementSelector: 'zero-uiv-expansion-modern',
    group: 'Uiverse Expansion',
    iconName: 'expansion-icon.png',
})
@applyGlobalStyles()
export class ZeroUivExpansionModern extends ZeroUivExpansion {
    constructor() {
        super();
        this.theme = 'modern';
    }
}
