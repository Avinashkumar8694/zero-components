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
        this.modules = window.zero?.modules || {};
        this.components = window.zero?.components || {};
        this.attachListeners();
    }

    registerPlugins(key, value) {
        if (!key || !value) return;
        this.modules[key] = value;
        if (typeof value.onInit === 'function') value.onInit();
        console.log(`[Zero] Plugin registered: modules['${key}']`);
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

        this.components[name] = {
            class: constructor,
            inputs: inputsMetadata
                .filter(input => !input.eventTrigger)
                .reduce((acc, { fieldMappings, ...rest }) => {
                    const key = fieldMappings || rest.name;
                    if (key) acc[key] = { ...rest };
                    return acc;
                }, {}),
            outputs: { 
                events: inputsMetadata
                    .filter(input => input.eventTrigger)
                    .map(input => input.eventTrigger) 
            },
            metadata: componentMetadata || {}
        };

        // Also register under base selector as a "latest/default" version fallback
        if (componentMetadata?.selector && componentMetadata.selector !== name) {
            this.components[componentMetadata.selector] = this.components[name];
        }
        
        console.log(`[Zero] Registry: SUCCESS. Registered '${name}' and '${componentMetadata?.selector || ""}' fallback.`);
    }

    attachListeners() {
        console.log('[Zero] Registry: Event listener initialized for (zero-element:component-load)');
        
        window.addEventListener('zero-element:component-load', (event) => {
            const metadata = event?.detail?.element;
            console.log('[Zero] Registry: RECEIVED zero-element:component-load event', metadata);
            
            if (!metadata || !metadata.selector) return;

            const name = `${metadata.selector}-${metadata.version}`;
            
            // Catchup Mechanism: The custom element might be defined just after the event fires
            let attempts = 0;
            const tryRegister = () => {
                const constructor = customElements.get(name);
                if (constructor) {
                    console.log(`[Zero] Registry: Custom element '${name}' found. Starting registration.`);
                    this.registerElement(name, constructor);
                } else if (attempts < 10) {
                    attempts++;
                    if (attempts === 1) console.log(`[Zero] Registry: Custom element '${name}' not found yet, starting catchup poll...`);
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

// Global Singleton Initialization
if (!window.zero || !(window.zero instanceof RegisterPluginClass)) {
    const existing = window.zero || {};
    const instance = new RegisterPluginClass();
    if (existing.modules) Object.assign(instance.modules, existing.modules);
    if (existing.components) Object.assign(instance.components, existing.components);
    
    window.zero = instance;
    window.ro = instance;
}
