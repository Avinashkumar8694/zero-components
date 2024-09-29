// Define the registerPluginClass with the registerPlugins method
// if (!window.zero) {
//     window.zero = {
//         modules: {},   // Initialize modules to store plugins
//         components: {} // Initialize components to store elements
//     };
// }
import 'reflect-metadata';
class RegisterPluginClass {
    constructor() {
        // Initialize window.zero if it doesn't already exist
        this.modules = {};
        this.components = {}
        // Attach the element-connected event listener
        this.attachListeners();
    }

    // Method to register plugins dynamically
    registerPlugins(key, value) {
        if (!key || !value) {
            throw new Error('Key and value are required to register a plugin.');
        }

        // Store the value under window.zero.modules[key]
        this.modules[key] = value;
        this.modules[key]?.onInit();
        console.log(`Plugin registered and available as zero.modules['${key}']`);
    }

    // Method to attach listeners
    attachListeners() {
        console.log('component listener activated')
        window.addEventListener('element-connected', (event) => {
            if(!event?.detail?.element?.localName){
                return;
            }
            const _class = customElements.get(event.detail.element.localName);
            const inputsMetadata = Reflect.getMetadata('ZeroAttribute', _class.prototype) || [];
            const componentMetadata = Reflect.getMetadata('ZeroComponent', _class.prototype);
            // Store the element under window.zero.components[element.selector]
            this.components[event.detail.element.localName] = {
                class: _class,
                inputs: inputsMetadata.filter(input => !input.eventTrigger).reduce((acc, { fieldMappings, ...rest }) => {
                    acc[fieldMappings] = { ...rest };
                    return acc;
                }, {}),
                outputs: { events: inputsMetadata.filter(input => input.eventTrigger).map(input => input.eventTrigger) },
                componentMetadata
            };
            console.log('Component Loaded:', event.detail.element.localName);

            // You can perform any additional actions here, such as updating component properties or state
        });
    }
}

// Ensure the class is available globally on window.zero
if (!window.zero) {
    window.zero = new RegisterPluginClass();
} else {
    window.zero = Object.assign(window.zero, new RegisterPluginClass());
}

// // Example usage: Define a class with an onInit method
// class DynamicRenderJs {
//     onInit() {
//         console.log('Plugin DynamicRenderJs initialized');
//     }
// }

// // Register the plugin with the key 'register-js'
// window.zero.registerPlugins('register-js', new DynamicRenderJs());
