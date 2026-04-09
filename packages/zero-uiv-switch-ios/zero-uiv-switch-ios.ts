import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivSwitch } from '../zero-uiv-switch/zero-uiv-switch';

@RendererComponent({
    name: 'zero-uiv-switch-ios',
    version: '1.0.0',
    title: 'IOS Switch (Legacy)',
    elementSelector: 'zero-uiv-switch-ios',
    group: 'Uiverse Switch',
    iconName: 'switch-icon.png',
})
@applyGlobalStyles()
export class ZeroUivSwitchIOS extends ZeroUivSwitch {
    constructor() {
        super();
        this.theme = 'ios';
    }
}
