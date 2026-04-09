import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivTooltip } from '../zero-uiv-tooltip/zero-uiv-tooltip';

@RendererComponent({
    name: 'zero-uiv-tooltip-modern',
    version: '1.0.0',
    title: 'Modern Tooltip (Legacy)',
    elementSelector: 'zero-uiv-tooltip-modern',
    group: 'Uiverse Tooltip',
    iconName: 'tooltip-icon.png',
})
@applyGlobalStyles()
export class ZeroUivTooltipModern extends ZeroUivTooltip {
    constructor() {
        super();
        this.theme = 'modern';
    }
}
