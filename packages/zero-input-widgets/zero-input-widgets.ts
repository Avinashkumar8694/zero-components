// @environment page
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
            max-width: 600px;
            margin: 0 auto;
            padding: var(--spacing-lg, 20px);
        }

        .form-container {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-lg, 20px);
        }

        /* Form field styling matching global styles */
        .form-field {
            margin-bottom: var(--spacing-lg, 20px);
        }

        .form-field label {
            display: block;
            margin-bottom: var(--spacing-xs, 6px);
            font-size: var(--font-size-base, 14px);
            color: var(--text-primary, #333);
            font-weight: 500;
        }

        /* Input styling matching mat-mdc-input-element */
        input.mat-mdc-input-element,
        textarea.mat-mdc-input-element,
        select.mat-mdc-input-element {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);
            font-size: var(--font-size-base, 14px);
            background-color: var(--background-primary, #fff);            color: var(--text-primary, #333);
            transition: border-color 0.2s, box-shadow 0.2s;
            min-height: var(--input-height, 36px);
            box-sizing: border-box;
            font-family: var(--font-family, 'Roboto', sans-serif);
        }

        input.mat-mdc-input-element::placeholder,
        textarea.mat-mdc-input-element::placeholder {
            color: var(--text-secondary, #666);
        }        input.mat-mdc-input-element:hover,
        textarea.mat-mdc-input-element:hover,
        select.mat-mdc-input-element:hover {
            border-color: var(--primary-light, #6c63ff);
            background: var(--primary-background-hover, rgba(108, 99, 255, 0.02));
        }

        input.mat-mdc-input-element:focus,
        textarea.mat-mdc-input-element:focus,
        select.mat-mdc-input-element:focus {
            outline: none;
            background: var(--background-primary, #fff);
            border-color: var(--primary-color, #6c63ff);
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        textarea.mat-mdc-input-element {
            min-height: 80px;
            resize: vertical;
        }

        /* Checkbox field styling */
        .checkbox-field {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm, 8px);
        }        .checkbox-field input[type="checkbox"] {
            width: var(--icon-size-sm, 18px);
            height: var(--icon-size-sm, 18px);
            margin: 0;
            cursor: pointer;
        }

        .checkbox-field span {
            font-size: var(--font-size-base, 14px);
            color: var(--text-primary, #333);
            cursor: pointer;
        }

        /* Range slider styling */
        .range-field {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-xs, 6px);
        }

        .range-display {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: var(--font-size-sm, 12px);
            color: var(--text-secondary, #666);
        }

        .range-value {
            font-weight: 500;
            color: var(--primary-color, #6c63ff);
        }        input[type="range"] {
            width: 100%;
            height: 6px;
            border-radius: var(--border-radius-xs, 3px);
            background: var(--background-secondary, #f5f5f5);
            outline: none;
            cursor: pointer;
        }

        /* File input styling */
        .file-field {
            position: relative;
        }

        input[type="file"] {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);
            background-color: var(--background-primary, #fff);
            cursor: pointer;
        }

        /* Color picker styling */
        input[type="color"] {            width: 50px;
            height: var(--input-height, 36px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);
            cursor: pointer;
            padding: 0;
        }

        /* Submit button styling */
        .submit-button {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm, 8px);
            padding: var(--spacing-sm, 8px) var(--spacing-lg, 20px);
            background-color: var(--primary-color, #6c63ff);
            color: white;
            border: none;
            border-radius: var(--border-radius-sm, 4px);
            font-size: var(--font-size-base, 14px);
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s, transform 0.1s;
            align-self: flex-start;
            margin-top: var(--spacing-md, 12px);
        }

        .submit-button:hover {
            background-color: var(--primary-dark, #5b52d9);
            transform: translateY(-1px);
        }

        .submit-button:active {
            transform: translateY(0);
        }

        /* Form result display */
        .form-result {
            margin-top: var(--spacing-md, 12px);
            padding: var(--spacing-md, 12px);
            background: var(--background-secondary, #f5f5f5);
            border-radius: var(--border-radius-sm, 4px);
            border: 1px solid var(--border-color, #ddd);
        }

        .form-result pre {
            margin: 0;
            font-family: 'Courier New', monospace;
            font-size: var(--font-size-sm, 12px);
            color: var(--text-primary, #333);
            white-space: pre-wrap;
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
        event.preventDefault();
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
    }    render() {
        return html`
            <div class="form-container">
                <!-- Text Input -->
                <div class="form-field">
                    <label for="username">User Name</label>
                    <input 
                        id="username" 
                        type="text" 
                        class="mat-mdc-input-element"
                        .value="${this.username}" 
                        placeholder="Enter your username"
                        @input="${(e: Event) => this.username = (e.target as HTMLInputElement).value}" 
                    />
                </div>

                <!-- Password Input -->
                <div class="form-field">
                    <label for="password">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        class="mat-mdc-input-element"
                        .value="${this.password}" 
                        placeholder="Enter your password"
                        @input="${(e: Event) => this.password = (e.target as HTMLInputElement).value}" 
                    />
                </div>

                <!-- Dropdown -->
                <div class="form-field">
                    <label for="role">User Role</label>
                    <select 
                        id="role" 
                        class="mat-mdc-input-element"
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
                    <label>Accept Terms</label>
                    <div class="checkbox-field">
                        <input 
                            id="termsAccepted" 
                            type="checkbox" 
                            .checked="${this.termsAccepted}" 
                            @change="${(e: Event) => this.termsAccepted = (e.target as HTMLInputElement).checked}" 
                        />
                        <span @click="${() => this.termsAccepted = !this.termsAccepted}">
                            I accept the terms and conditions
                        </span>
                    </div>
                </div>

                <!-- Range Slider -->
                <div class="form-field">
                    <label for="age">Age</label>
                    <div class="range-field">
                        <div class="range-display">
                            <span>18 years</span>
                            <span class="range-value">${this.age} years</span>
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
                    <label for="profilePicture">Profile Picture</label>
                    <input 
                        id="profilePicture" 
                        type="file" 
                        accept=".jpg,.png,.jpeg"
                        @change="${(e: Event) => this.profilePicture = (e.target as HTMLInputElement).files?.[0]?.name || ''}" 
                    />
                </div>

                <!-- Date Input -->
                <div class="form-field">
                    <label for="birthDate">Birth Date</label>
                    <input 
                        id="birthDate" 
                        type="date" 
                        class="mat-mdc-input-element"
                        .value="${this.birthDate}" 
                        @change="${(e: Event) => this.birthDate = (e.target as HTMLInputElement).value}" 
                    />
                </div>

                <!-- Color Picker -->
                <div class="form-field">
                    <label for="favoriteColor">Favorite Color</label>
                    <input 
                        id="favoriteColor" 
                        type="color" 
                        .value="${this.favoriteColor}" 
                        @input="${(e: Event) => this.favoriteColor = (e.target as HTMLInputElement).value}" 
                    />
                </div>

                <!-- Number Input -->
                <div class="form-field">
                    <label for="height">Height (cm)</label>
                    <input 
                        id="height" 
                        type="number" 
                        class="mat-mdc-input-element"
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
                    <label for="bio">Bio</label>
                    <textarea 
                        id="bio" 
                        class="mat-mdc-input-element"
                        rows="4" 
                        .value="${this.bio}" 
                        placeholder="Tell us about yourself"
                        @input="${(e: Event) => this.bio = (e.target as HTMLTextAreaElement).value}"
                    ></textarea>
                </div>

                <!-- Newsletter Checkbox -->
                <div class="form-field">
                    <label>Newsletter Subscription</label>
                    <div class="checkbox-field">
                        <input 
                            id="newsletterSubscribed" 
                            type="checkbox" 
                            .checked="${this.newsletterSubscribed}" 
                            @change="${(e: Event) => this.newsletterSubscribed = (e.target as HTMLInputElement).checked}" 
                        />
                        <span @click="${() => this.newsletterSubscribed = !this.newsletterSubscribed}">
                            Subscribe to our newsletter
                        </span>
                    </div>
                </div>

                <!-- Submit Button -->
                <button type="button" class="submit-button" @click="${this.handleSubmit}">
                    <span>💾</span> Submit Form
                </button>

                <!-- Form Result Display -->
                ${this.getFormDataDisplay()}
            </div>
        `;
    }

    private getFormDataDisplay() {
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
                <div class="form-result">
                    <pre>${JSON.stringify(formData, null, 2)}</pre>
                </div>
            `;
        }
        return html``;
    }
}
