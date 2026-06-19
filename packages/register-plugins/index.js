import 'reflect-metadata';

// ─── Global Reflect Shim ─────────────────────────────────────────────────────
// individual plugin bundles often carry their own isolated reflect-metadata.
// this ensures they all converge on a single, global reflect-metadata store.
if (typeof window !== 'undefined' && !window.Reflect) {
    window.Reflect = Reflect;
} else if (typeof window !== 'undefined' && window.Reflect !== Reflect) {
    // If another instance exists, we merge or at least warn, but for now 
    // we prioritize the registry's instance as it loads first in index.html
    const existing = window.Reflect;
    Object.assign(Reflect, existing);
    window.Reflect = Reflect;
}

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

    registerElement(name, constructor, retryCount = 0) {
        if (!name || !constructor) {
            console.warn(`[Zero] Cannot register element: name or constructor missing (${name})`);
            return;
        }

        // Use the global Reflect (which we shimmed above)
        const proto = constructor.prototype;
        const inputsMetadata = Reflect.getMetadata('ZeroAttribute', proto) || [];
        const componentMetadata = Reflect.getMetadata('ZeroComponent', constructor) || Reflect.getMetadata('ZeroComponent', proto);

        console.log(`[Zero] Registry: Attempting registration for '${name}' (Retry: ${retryCount})`);
        console.log(`[Zero] Registry: Found ${inputsMetadata.length} attributes.`);
        
        if (!componentMetadata) {
            if (retryCount < 5) {
                console.log(`[Zero] Registry: Metadata not yet available for '${name}', retrying in 50ms...`);
                setTimeout(() => this.registerElement(name, constructor, retryCount + 1), 50);
                return;
            } else {
                console.warn(`[Zero] Registry: Failed to find component metadata for '${name}' after 5 retries.`);
            }
        }

        let instance = null;
        try {
            instance = new constructor();
        } catch (e) {
            console.info(`[Zero] Registry: Could not instantiate '${name}' to detect defaults:`, e);
        }

        this.components[name] = {
            class: constructor,
            inputs: inputsMetadata
                .filter(input => !input.eventTrigger)
                .reduce((acc, { fieldMappings, ...rest }) => {
                    const key = fieldMappings || rest.name;
                    if (key) {
                        let defaultValue = rest.initialValue;
                        if (defaultValue === undefined && instance && instance[key] !== undefined) {
                            defaultValue = instance[key];
                        }
                        acc[key] = { 
                            defaultValue,
                            ...rest 
                        };
                    }
                    return acc;
                }, {}),
            outputs: { 
                events: inputsMetadata
                    .filter(input => input.eventTrigger)
                    .map(input => input.eventTrigger) 
            },
            metadata: componentMetadata || { selector: name.split('-').slice(0,-1).join('-'), version: name.split('-').pop() }
        };

        console.log(`[Zero] Registry: SUCCESS. Registered '${name}'.`);
        
        window.dispatchEvent(new CustomEvent('zero-element:metadata-ready', {
            detail: { element: name }
        }));
    }

    // Method to attach listeners
    attachListeners() {
        console.log('[Zero] Registry: Event listeners activated');

        window.addEventListener('zero-element:component-load', (event) => {
            const metadata = event?.detail?.element;
            console.log('[Zero] Registry: RECEIVED zero-element:component-load event', metadata);
            
            if (!metadata || !metadata.selector) return;

            const name = `${metadata.selector}-${metadata.version || '1.0.0'}`;
            
            // Catchup Mechanism: The custom element might be defined just after the event fires
            let attempts = 0;
            const tryRegister = () => {
                const constructor = customElements.get(name);
                if (constructor) {
                    console.log(`[Zero] Registry: Custom element '${name}' found. Starting registration.`);
                    this.registerElement(name, constructor);
                } else if (attempts < 10) {
                    attempts++;
                    setTimeout(tryRegister, 100);
                } else {
                    console.error(`[Zero] Registry: TIMEOUT. Could not find custom element '${name}' in registry.`);
                }
            };
            tryRegister();
        });

        window.addEventListener('element-connected', (event) => {
            const element = event?.detail?.element;
            if (element?.localName) {
                const constructor = customElements.get(element.localName);
                if (constructor) this.registerElement(element.localName, constructor);
            }
        });
    }
}

// Unify and expose
const instance = new RegisterPluginClass();
window.zero = instance;
window.ZeroRegistry = instance;
globalThis.zero = instance;
window.ro = instance;

// Dispatch ready event for @ZeroRegistryReady decorators
window.dispatchEvent(new CustomEvent('zero-registry-ready'));
