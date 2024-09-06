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
                const popup = document.querySelector(`#popup-${this.config.webComponentSelector}`) as HTMLElement;
                if (!popup) {
                    console.error('Popup element not found.');
                    return;
                }
                popup.style.width = this.config.width || 'auto';
                popup.style.height = this.config.height || 'auto';
                popup.setAttribute('position', this.config.position || 'center');
                popup.setAttribute('hasBackdrop', this.config?.hasBackdrop);
                popup['open'] = true;
            });
        };
    }
    

    createPopup() {
        try {
            const popup = document.createElement('my-popup');
            const webComponent = document.createElement(this.config.webComponentSelector);

            popup.setAttribute('id', `popup-${this.config.webComponentSelector}`);
            popup.setAttribute('position', this.config.position || 'center');
            popup.appendChild(webComponent);

            // Apply additional configurations
            if (this.config.width) popup.style.width = this.config.width;
            if (this.config.height) popup.style.height = this.config.height;
            popup['hasBackdrop'] = this.config.hasBackdrop !== false;

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
