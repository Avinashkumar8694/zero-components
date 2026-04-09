import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivSlider } from '../zero-uiv-slider/zero-uiv-slider';

@RendererComponent({
    name: 'zero-uiv-slider-modern',
    version: '1.0.0',
    title: 'Modern Slider (Legacy)',
    elementSelector: 'zero-uiv-slider-modern',
    group: 'Uiverse Sliders',
    iconName: 'slider-icon.png',
})
@applyGlobalStyles()
export class ZeroUivSliderModern extends ZeroUivSlider {
    constructor() {
        super();
        this.theme = 'modern';
    }
}
