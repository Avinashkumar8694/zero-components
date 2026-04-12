// Define the registerPluginClass with the registerPlugins method
import 'reflect-metadata';

class RegisterPluginClass {
    constructor() {
        // Safe access to existing window.zero data
        const existingData = window.zero || window.ZeroRegistry || {};
        this.modules = existingData.modules || {};
        this.components = existingData.components || {};
        this.isReady = true;
        
        // Attach the element-connected event listener for late-binding or manual definition
        this.attachListeners();
    }

    // satisfy @ZeroModule decorator from zero-annotation
    registerModule(id, constructor) {
        if (!id || !constructor) return;
        console.log(`[Registry] Module registered: ${id}`);
        this.modules[id] = constructor;
        
        // If the module has an onInit, call it
        try {
            if (constructor.onInit) constructor.onInit();
            else if (constructor.prototype?.onInit) {
                const instance = new constructor();
                instance.onInit();
            }
        } catch (e) { console.error(`[Registry] Error initializing module ${id}`, e); }

        window.dispatchEvent(new CustomEvent('zero-module:registered', { detail: { id } }));
    }

    // Method to register components (satisfy @RendererComponent and manual calls)
    registerComponent(id, metadata) {
        if (!id || !metadata) return;
        console.log(`[Registry] Component registered: ${id}`);
        
        const _class = metadata.class || (metadata.selector ? customElements.get(`${metadata.selector}-${metadata.version || '1.0.0'}`) : null);
        
        this.components[id] = {
            class: _class,
            inputs: metadata.inputs || {},
            outputs: metadata.outputs || { events: [] },
            metadata: metadata
        };

        window.dispatchEvent(new CustomEvent('zero-element:metadata-ready', {
            detail: { element: id }
        }));
    }

    // Legacy method to register plugins dynamically
    registerPlugins(key, value) {
        this.registerModule(key, value);
    }

    // Method to attach listeners
    attachListeners() {
        console.log('[Registry] Component connection listener activated');
        window.addEventListener('element-connected', (event) => {
            console.log('[Registry] Received element-connected event:', event.detail);
            
            if(!event?.detail?.element?.localName){
                console.warn('[Registry] Received element-connected event with missing localName', event.detail);
                return;
            }
            const tagName = event.detail.element.localName;
            const _class = customElements.get(tagName);
            
            if (!_class || !_class.prototype) {
                console.warn(`[Registry] Could not find class prototype for ${tagName}. If this is a dynamic component, ensure it is defined before dispatching connected event.`);
                return;
            }

            // Hydrate metadata from Reflect
            const componentMetadata = Reflect.getMetadata('ZeroComponent', _class.prototype);
            const inputsMetadata = Reflect.getMetadata('ZeroAttribute', _class.prototype) || [];
            
            // SCHEMA ALIGNMENT: Studio Platform expects 'metadata' property, matching it here
            this.components[tagName] = {
                class: _class,
                inputs: inputsMetadata.filter(input => !input.eventTrigger).reduce((acc, { fieldMappings, ...rest }) => {
                    acc[fieldMappings] = { ...rest };
                    return acc;
                }, {}),
                outputs: { events: inputsMetadata.filter(input => input.eventTrigger).map(input => input.eventTrigger) },
                metadata: componentMetadata || { selector: tagName.split('-').slice(0,-1).join('-'), version: tagName.split('-').pop() }
            };

            console.log('[Registry] Component Hydrated successfully:', tagName, this.components[tagName]);
            window.dispatchEvent(new CustomEvent('zero-element:metadata-ready', {
                detail: { element: tagName }
            }));
        });
    }
}

// Unify and expose
const instance = new RegisterPluginClass();
window.zero = instance;
window.ZeroRegistry = instance;
globalThis.zero = instance;

// Dispatch ready event for @ZeroRegistryReady decorators
window.dispatchEvent(new CustomEvent('zero-registry-ready'));

