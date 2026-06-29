// @environment server
import { Directive, directive, PartType } from 'lit/directive.js';

class OpenPopupDirective extends Directive {
    config: any;
    constructor(partInfo) {
        super(partInfo);
        this.config = null;
    }

    render(config) {
        this.config = config;

        return (part) => {
            if (part.type !== PartType.ATTRIBUTE) {
                console.error('The directive can only be used on attributes.');
                return;
            }

            const element = part.element;
            if (!element) {
                console.error('Target element is null or undefined.');
                return;
            }

            const existingPopup = document.querySelector(`#popup-${this.config.webComponentSelector}`);

            // Create a new popup only if it does not already exist
            if (!existingPopup) {
                const popup = this.createPopup();
                if (!popup) {
                    console.error('Failed to create the popup element.');
                    return;
                }
                document.body.appendChild(popup);
            }

            element.addEventListener('click', () => {
                const popupId = `popup-${this.config.webComponentSelector}`;
                let popup = document.querySelector(`#${popupId}`) as any;
                
                if (!popup) {
                    popup = this.createPopup();
                    document.body.appendChild(popup);
                }

                if (this.config.width) popup.style.width = this.config.width;
                if (this.config.height) popup.style.height = this.config.height;
                popup.setAttribute('position', this.config.position || 'center');
                popup.setAttribute('has-backdrop', String(this.config.hasBackdrop !== false));
                popup.open = true;
            });
        };
    }
    

    createPopup() {
        try {
            const popup = document.createElement('zero-popup-dialog');
            const webComponent = document.createElement(this.config.webComponentSelector);

            popup.setAttribute('id', `popup-${this.config.webComponentSelector}`);
            popup.setAttribute('position', this.config.position || 'center');
            popup.appendChild(webComponent);

            // Forward theme classes if needed, though zero-popup-dialog handles common theming
            // The internal webComponent will be themed by itself if it's a LitElement with ThemeOrchestrator

            // Handle outputs (events)
            popup.addEventListener('closed', () => {
                console.log(`Popup for ${this.config.webComponentSelector} closed`);
            });

            popup.addEventListener('opened', () => {
                console.log(`Popup for ${this.config.webComponentSelector} opened`);
            });

            return popup;
        } catch (error) {
            console.error('Error creating popup element:', error);
            return null;
        }
    }
}

export const openPopupDirective = directive(OpenPopupDirective);
