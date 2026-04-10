import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, DropdownOptionItem, RangeSliderConfig, FileInputConfig, DatePickerConfig, NumberInputConfig, TextAreaConfig } from 'zero-annotation';

import { LitElement, html, css, CSSResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

/**
 * Represents a user profile form with various input fields.
 * 
 * @export
 * @class UserProfileForm
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'zero-input-widgets',
    version: '1.0.0',
    title: 'Zero input widgets',
    elementSelector: 'zero-zero-input-widgets',
    group: 'Forms',
    iconName: 'profile-icon.png', // Replace with your icon path
})
@applyGlobalStyles()
export class ZeroInputWidgets extends LitElement {    static styles = css`
        :host {
            display: block;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: var(--spacing-lg, 20px);
            font-family: var(--uiv-font-family, sans-serif);
        }

        .form-container {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-lg, 20px);
        }

        .form-field {
            margin-bottom: var(--spacing-lg, 20px);
        }

        .form-field label {
            display: block;
            margin-bottom: var(--spacing-xs, 6px);
            font-size: var(--font-size-base, 14px);
            color: var(--uiv-text-color, #333);
            font-weight: 500;
        }

        input.mat-mdc-input-element,
        textarea.mat-mdc-input-element,
        select.mat-mdc-input-element {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            border: 1px solid var(--uiv-border-color, #ddd);
            border-radius: var(--uiv-border-radius, 4px);
            font-size: var(--font-size-base, 14px);
            background-color: var(--uiv-bg-surface, #fff);
            color: var(--uiv-text-color, #333);
            transition: all 0.2s;
            min-height: var(--input-height, 42px);
            box-sizing: border-box;
        }

        input.mat-mdc-input-element:focus,
        textarea.mat-mdc-input-element:focus,
        select.mat-mdc-input-element:focus {
            outline: none;
            border-color: var(--uiv-primary-color, #6c63ff);
            box-shadow: var(--uiv-shadow-depth);
        }

        .checkbox-field {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm, 8px);
        }

        .submit-button {
            padding: 12px 24px;
            background-color: var(--uiv-primary-color, #6c63ff);
            color: #fff;
            border: none;
            border-radius: var(--uiv-border-radius, 4px);
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .submit-button:hover {
            opacity: 0.9;
            transform: translateY(-2px);
        }
    `;

    userRoleOptions: DropdownOptionItem[] = [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
        { value: 'guest', label: 'Guest' }
    ]

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Username',
        placeholderText: 'Enter your username',
        fieldMappings: 'username',
    })
    username = '';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.PASSWORD_INPUT,
        displayLabel: 'Password',
        placeholderText: 'Enter your password',
        fieldMappings: 'password',
    })
    password = '';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'User Role',
        optionItems: [
            { value: 'admin', label: 'Admin' },
            { value: 'user', label: 'User' },
            { value: 'guest', label: 'Guest' }
        ],
        fieldMappings: 'userRole',
    })
    userRole = '';

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Accept Terms',
        fieldMappings: 'termsAccepted',
    })
    termsAccepted = false;

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.RANGE_SLIDER,
        displayLabel: 'Age',
        optionItems: {
            minValue: 18,
            maxValue: 100,
            stepValue: 1,
            defaultValue: 25,
            displayTooltip: true,
            unit: 'years',
        } as RangeSliderConfig,
        fieldMappings: 'age',
    })
    age = 25;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.FILE_INPUT,
        displayLabel: 'Profile Picture',
        optionItems: {
            accept: '.jpg,.png',
            multiple: false,
            maxFileSize: 5000000 // 5MB
        } as FileInputConfig,
        fieldMappings: 'profilePicture',
    })
    profilePicture = '';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DATE_PICKER,
        displayLabel: 'Birth Date',
        optionItems: {
            minDate: '1900-01-01',
            maxDate: '2024-12-31'
        } as DatePickerConfig,
        fieldMappings: 'birthDate',
    })
    birthDate = '';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.COLOR_PICKER,
        displayLabel: 'Favorite Color',
        fieldMappings: 'favoriteColor',
    })
    favoriteColor = '#000000';

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Height',
        optionItems: {
            min: 50,
            max: 250,
            step: 1,
            defaultValue: 170
        } as NumberInputConfig,
        fieldMappings: 'height',
    })
    height = 170;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXTAREA,
        displayLabel: 'Bio',
        placeholderText: 'Tell us about yourself',
        optionItems: {
            rows: 5,
            cols: 50,
        } as TextAreaConfig,
        fieldMappings: 'bio',
    })
    bio = '';

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Newsletter Subscription',
        fieldMappings: 'newsletterSubscribed',
    })
    newsletterSubscribed = false;

    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        displayLabel: 'On Submit',
        eventTrigger: 'onSubmit',
    })
    handleSubmit(event: Event) {
        if (event) event.preventDefault();
        const formData = {
            username: this.username,
            password: this.password,
            userRole: this.userRole,
            termsAccepted: this.termsAccepted,
            age: this.age,
            profilePicture: this.profilePicture,
            birthDate: this.birthDate,
            favoriteColor: this.favoriteColor,
            height: this.height,
            bio: this.bio,
            newsletterSubscribed: this.newsletterSubscribed,
        };
        this.dispatchEvent(new CustomEvent('onSubmit', {
            detail: { formData },
            bubbles: true,
            composed: true,
        }));
    }

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                ${themeModule ? themeModule.getComponentStyles('input') : ''}
            </style>
            <div class="form-container uiv-${themeModule?.id}-theme">
                <!-- Text Input -->
                <div class="form-field">
                    <label for="username" class="uiv-${themeModule?.id}-text">User Name</label>
                    <input 
                        id="username" 
                        type="text" 
                        class="mat-mdc-input-element uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan"
                        .value="${this.username}" 
                        placeholder="Enter your username"
                        @input="${(e: Event) => this.username = (e.target as HTMLInputElement).value}" 
                    />
                </div>

                <!-- Password Input -->
                <div class="form-field">
                    <label for="password" class="uiv-${themeModule?.id}-text">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        class="mat-mdc-input-element uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan"
                        .value="${this.password}" 
                        placeholder="Enter your password"
                        @input="${(e: Event) => this.password = (e.target as HTMLInputElement).value}" 
                    />
                </div>

                <!-- Dropdown -->
                <div class="form-field">
                    <label for="role" class="uiv-${themeModule?.id}-text">User Role</label>
                    <select 
                        id="role" 
                        class="mat-mdc-input-element uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan"
                        .value="${this.userRole}" 
                        @change="${(e: Event) => this.userRole = (e.target as HTMLSelectElement).value}"
                    >
                        <option value="">Select a role</option>
                        ${this.userRoleOptions.map(option => html`
                            <option value="${option.value}">${option.label}</option>
                        `)}
                    </select>
                </div>

                <!-- Checkbox -->
                <div class="form-field">
                    <label class="uiv-${themeModule?.id}-text">Accept Terms</label>
                    <div class="checkbox-field">
                        <input 
                            id="termsAccepted" 
                            type="checkbox" 
                            .checked="${this.termsAccepted}" 
                            @change="${(e: Event) => this.termsAccepted = (e.target as HTMLInputElement).checked}" 
                        />
                        <span class="uiv-${themeModule?.id}-text" @click="${() => this.termsAccepted = !this.termsAccepted}">
                            I accept the terms and conditions
                        </span>
                    </div>
                </div>

                <!-- Range Slider -->
                <div class="form-field">
                    <label for="age" class="uiv-${themeModule?.id}-text">Age</label>
                    <div class="range-field">
                        <div class="range-display uiv-${themeModule?.id}-text">
                            <span>18 years</span>
                            <span class="range-value uiv-${themeModule?.id}-text">${this.age} years</span>
                            <span>100 years</span>
                        </div>
                        <input 
                            id="age" 
                            type="range" 
                            min="18" 
                            max="100" 
                            step="1" 
                            .value="${this.age}" 
                            @input="${(e: Event) => this.age = Number((e.target as HTMLInputElement).value)}" 
                        />
                    </div>
                </div>

                <!-- File Input -->
                <div class="form-field">
                    <label for="profilePicture" class="uiv-${themeModule?.id}-text">Profile Picture</label>
                    <input 
                        id="profilePicture" 
                        type="file" 
                        accept=".jpg,.png,.jpeg"
                        class="uiv-${themeModule?.id}-text"
                        @change="${(e: Event) => this.profilePicture = (e.target as HTMLInputElement).files?.[0]?.name || ''}" 
                    />
                </div>

                <!-- Date Input -->
                <div class="form-field">
                    <label for="birthDate" class="uiv-${themeModule?.id}-text">Birth Date</label>
                    <input 
                        id="birthDate" 
                        type="date" 
                        class="mat-mdc-input-element uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan"
                        .value="${this.birthDate}" 
                        @change="${(e: Event) => this.birthDate = (e.target as HTMLInputElement).value}" 
                    />
                </div>

                <!-- Color Picker -->
                <div class="form-field">
                    <label for="favoriteColor" class="uiv-${themeModule?.id}-text">Favorite Color</label>
                    <input 
                        id="favoriteColor" 
                        type="color" 
                        class="uiv-${themeModule?.id}-bg"
                        .value="${this.favoriteColor}" 
                        @input="${(e: Event) => this.favoriteColor = (e.target as HTMLInputElement).value}" 
                    />
                </div>

                <!-- Number Input -->
                <div class="form-field">
                    <label for="height" class="uiv-${themeModule?.id}-text">Height (cm)</label>
                    <input 
                        id="height" 
                        type="number" 
                        class="mat-mdc-input-element uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan"
                        min="50" 
                        max="250" 
                        step="1" 
                        .value="${this.height}" 
                        placeholder="Enter height in cm"
                        @input="${(e: Event) => this.height = Number((e.target as HTMLInputElement).value)}" 
                    />
                </div>

                <!-- Textarea -->
                <div class="form-field">
                    <label for="bio" class="uiv-${themeModule?.id}-text">Bio</label>
                    <textarea 
                        id="bio" 
                        class="mat-mdc-input-element uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan"
                        rows="4" 
                        .value="${this.bio}" 
                        placeholder="Tell us about yourself"
                        @input="${(e: Event) => this.bio = (e.target as HTMLTextAreaElement).value}"
                    ></textarea>
                </div>

                <!-- Newsletter Checkbox -->
                <div class="form-field">
                    <label class="uiv-${themeModule?.id}-text">Newsletter Subscription</label>
                    <div class="checkbox-field">
                        <input 
                            id="newsletterSubscribed" 
                            type="checkbox" 
                            .checked="${this.newsletterSubscribed}" 
                            @change="${(e: Event) => this.newsletterSubscribed = (e.target as HTMLInputElement).checked}" 
                        />
                        <span class="uiv-${themeModule?.id}-text" @click="${() => this.newsletterSubscribed = !this.newsletterSubscribed}">
                            Subscribe to our newsletter
                        </span>
                    </div>
                </div>

                <!-- Submit Button -->
                <button type="button" class="submit-button uiv-${themeModule?.id}-pulse" @click="${this.handleSubmit}">
                    <span>💾</span> Submit Form
                </button>

                <!-- Form Result Display -->
                ${this.getFormDataDisplay(themeModule)}
            </div>
        `;
    }

    private getFormDataDisplay(themeModule: any) {
        const formData = {
            username: this.username,
            userRole: this.userRole,
            termsAccepted: this.termsAccepted,
            age: this.age,
            profilePicture: this.profilePicture,
            birthDate: this.birthDate,
            favoriteColor: this.favoriteColor,
            height: this.height,
            bio: this.bio,
            newsletterSubscribed: this.newsletterSubscribed,
        };

        if (Object.values(formData).some(value => value !== '' && value !== false && value !== 0 && value !== 25)) {
            return html`
                <div class="form-result uiv-${themeModule?.id}-card">
                    <pre class="uiv-${themeModule?.id}-text">${JSON.stringify(formData, null, 2)}</pre>
                </div>
            `;
        }
        return html``;
    }
}
