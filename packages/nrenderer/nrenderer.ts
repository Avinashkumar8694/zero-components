import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, DropdownOptionItem, RangeSliderConfig, FileInputConfig, DatePickerConfig, NumberInputConfig, TextAreaConfig } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Represents a user profile form with various input fields.
 * 
 * @export
 * @class UserProfileForm
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'nrenderer',
    version: '1.0.0',
    title: 'Nrenderer',
    elementSelector: 'zero-nrenderer',
    group: 'Forms',
    iconName: 'profile-icon.png', // Replace with your icon path
})
@applyGlobalStyles()
export class Nrenderer extends LitElement {

    static styles = css`
        /* Add styles here */
        form{
            display: flex;
            flex-direction: column;
        }
    `;



    render() {
        return html`
            <!-- Render form fields here -->

            <zero-popup-dropdown-directive-1.0.0 id="dropdown" enabled='true' config='[{"label": "Option 1", "value": "1"}, {"label": "Option 2", "value": "2"}]'>
            </zero-popup-dropdown-directive-1.0.0>
        `;
    }
}
