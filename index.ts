import * as Lit from 'lit';
import * as LitDecorators from 'lit/decorators.js';
import * as ZeroAnnotation from 'zero-annotation';

(window as any).lit = Lit;
(window as any)['lit/decorators.js'] = LitDecorators;
(window as any)['zero-annotation'] = ZeroAnnotation;


import { UserInterfaceType, DropdownOptionItem,RangeSettings } from 'zero-annotation';
declare global {
    interface Window {
        zero: any;
    }
}

// Initialize global components object
globalThis.zeroComponents = {} as Record<string, any>;
let activeComponentName: string | null = null;

// 1. Move Listeners to top level so they catch early registration events
window.addEventListener('element-connected', (event: CustomEvent) => {
    const element = event.detail.element;
    console.log('Component Loaded:', element);
    updateComponentList(); 
});

window.addEventListener('zero-element:metadata-ready', (event: any) => {
    const componentName = event.detail.element;
    console.log(`[Registry] Metadata ready for ${componentName}, updating settings.`);
    updateNavForComponent(componentName);
    attachOutputListeners(componentName);
});

window.addEventListener('plugins-updated', () => {
    updateComponentList(); 
});

window.addEventListener('zero-element:component-load', (event: any) => {
    const metadata = event.detail.element;
    if (metadata && metadata.selector) {
        const fullSelector = `${metadata.selector}-${metadata.version}`;
        console.log('[Registry] Registering component:', fullSelector);
        // Ensure zeroLibrary or componentRegistry has this metadata
        (window as any).zeroLibrary = (window as any).zeroLibrary || {};
        (window as any).zeroLibrary[fullSelector] = metadata;
        
        registerComponent(fullSelector, {
            inputs: metadata.inputs,
            outputs: metadata.outputs
        });
    }
});

// Move bridge import down to ensure listeners are attached first
import './bridge.ts';

// Listen for Global Theme Changes for instant sync
window.addEventListener('theme-changed', (event: any) => {
    console.log('[Dashboard] Global theme change detected, syncing styles...');
    updateDashboardTheme();
});

const initializeStyles = () => {
    window.addEventListener('register-plugins', (event: CustomEvent) => {
        console.log('Module Loaded:', event);
    });
    
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        .remove-plugin:hover {
            color: var(--uiv-color-danger, #ef4444) !important;
            transform: scale(1.1);
        }
        .component-card:hover .remove-plugin {
            opacity: 1;
        }
    `;
    document.head?.appendChild(styleElement);
};

const createInputElement = (key: string, config: any, customElement: HTMLElement) => {
    const inputElement = document.createElement('div');
    inputElement.className = 'setting-group';
    
    const label = document.createElement('label');
    label.className = 'setting-label';
    label.textContent = config.displayLabel || key;
    label.htmlFor = key;
    inputElement.appendChild(label);

    switch (config.uiComponentType) {
        case UserInterfaceType.TEXT_INPUT:
            const textInput = document.createElement('input');
            textInput.type = config?.optionItems?.type || 'text';
            textInput.id = key;
            textInput.value = config.initialValue?.toString() || '';
            textInput.placeholder = config.placeholderText || '';
            textInput.addEventListener('input', (e) => {
                customElement[key] = (e.target as HTMLInputElement).value;
            });
            inputElement.appendChild(textInput);
            break;

        case UserInterfaceType.PASSWORD_INPUT:
            const passwordInput = document.createElement('input');
            passwordInput.type = 'password';
            passwordInput.id = key;
            passwordInput.value = config.initialValue?.toString() || '';
            passwordInput.placeholder = config.placeholderText || '';
            passwordInput.addEventListener('input', (e) => {
                customElement[key] = (e.target as HTMLInputElement).value;
            });
            inputElement.appendChild(passwordInput);
            break;
            
        case UserInterfaceType.TEXTAREA:
            const textarea = document.createElement('textarea');
            textarea.id = key;
            textarea.value = config.initialValue?.toString() || '';
            textarea.placeholder = config.placeholderText || '';
            textarea.addEventListener('change', (e) => {
                let value = config?.optionItems?.type == 'Object' ? JSON.parse((e.target as HTMLTextAreaElement).value) : (e.target as HTMLTextAreaElement).value;
                customElement[key] = value;
            });
            inputElement.appendChild(textarea);
            break;

        case UserInterfaceType.CHECKBOX:
            const toggleSwitch = document.createElement('input');
            toggleSwitch.type = 'checkbox';
            toggleSwitch.id = key;
            toggleSwitch.checked = Boolean(config.initialValue);
            toggleSwitch.addEventListener('change', (e) => {
                customElement[key] = (e.target as HTMLInputElement).checked;
            });
            inputElement.appendChild(toggleSwitch);
            break;

        case UserInterfaceType.RADIO_BUTTON:
            const radioGroup = document.createElement('div');
            (config.optionItems as DropdownOptionItem[]).forEach(option => {
                const radioWrapper = document.createElement('div');
                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = key;
                radioInput.id = `${key}_${option.value}`;
                radioInput.value = option.value.toString();
                radioInput.checked = option.value.toString() === config.initialValue?.toString();
                radioInput.addEventListener('change', (e) => {
                    customElement[key] = (e.target as HTMLInputElement).value;
                });

                const radioLabel = document.createElement('label');
                radioLabel.htmlFor = radioInput.id;
                radioLabel.textContent = option.label.toString();
                
                radioWrapper.appendChild(radioInput);
                radioWrapper.appendChild(radioLabel);
                radioGroup.appendChild(radioWrapper);
            });
            inputElement.appendChild(radioGroup);
            break;

        case UserInterfaceType.DROPDOWN:
            const dropdown = document.createElement('select');
            dropdown.id = key;
            (config.optionItems as DropdownOptionItem[])?.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value.toString();
                optionElement.textContent = option.label.toString();
                dropdown.appendChild(optionElement);
            });
            dropdown.addEventListener('change', (e) => {
                customElement[key] = (e.target as HTMLSelectElement).value;
            });
            inputElement.appendChild(dropdown);
            break;

        case UserInterfaceType.MULTI_SELECT:
            const multiSelect = document.createElement('select');
            multiSelect.id = key;
            multiSelect.multiple = true;
            (config.optionItems as DropdownOptionItem[])?.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value.toString();
                optionElement.textContent = option.label.toString();
                multiSelect.appendChild(optionElement);
            });
            multiSelect.addEventListener('change', (e) => {
                customElement[key] = Array.from((e.target as HTMLSelectElement).selectedOptions).map(option => option.value);
            });
            inputElement.appendChild(multiSelect);
            break;
            
        case UserInterfaceType.RANGE_SLIDER:
            const rangeSlider = document.createElement('input');
            rangeSlider.type = 'range';
            rangeSlider.id = key;
            rangeSlider.min = (config.optionItems as RangeSettings).min?.toString() || '0';
            rangeSlider.max = (config.optionItems as RangeSettings).max?.toString() || '100';
            rangeSlider.value = config.initialValue?.toString() || '0';
            rangeSlider.addEventListener('input', (e) => {
                customElement[key] = (e.target as HTMLInputElement).value;
            });
            inputElement.appendChild(rangeSlider);
            break;
            
        case UserInterfaceType.COLOR_PICKER:
            const colorPicker = document.createElement('input');
            colorPicker.type = 'color';
            colorPicker.id = key;
            colorPicker.value = config.initialValue?.toString() || '#ffffff';
            colorPicker.addEventListener('input', (e) => {
                customElement[key] = (e.target as HTMLInputElement).value;
            });
            inputElement.appendChild(colorPicker);
            break;
        
        case UserInterfaceType.FILE_INPUT:
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.id = key;
            fileInput.addEventListener('change', (e) => {
                customElement[key] = (e.target as HTMLInputElement).files;
            });
            inputElement.appendChild(fileInput);
            break;

        case UserInterfaceType.DATE_PICKER:
            const datePicker = document.createElement('input');
            datePicker.type = 'date';
            datePicker.id = key;
            datePicker.value = config.initialValue?.toString() || '';
            datePicker.addEventListener('input', (e) => {
                customElement[key] = (e.target as HTMLInputElement).value;
            });
            inputElement.appendChild(datePicker);
            break;

        // Add cases for other UserInterfaceTypes as needed

        default:
            const defaultInput = document.createElement('input');
            defaultInput.type = 'text';
            defaultInput.id = key;
            defaultInput.value = config.initialValue?.toString() || '';
            defaultInput.placeholder = config.placeholderText || '';
            defaultInput.addEventListener('input', (e) => {
                customElement[key] = (e.target as HTMLInputElement).value;
            });
            inputElement.appendChild(defaultInput);
            break;
    }
    return inputElement;
};


const registerComponent = (name: string, config: { inputs?: any; outputs?: any }) => {
    const { inputs = {}, outputs = { events: [] } } = config;

    const customElement = document.createElement(name) as any;

    if (!globalThis.zeroComponents[name]) {
        globalThis.zeroComponents[name] = [];
    }
    globalThis.zeroComponents[name].push(customElement);

    // Update the UI to show the component in the list
    updateComponentList();

    // If this is the active component, refresh its nav
    if (activeComponentName === name) {
        updateNavForComponent(name);
    }

    // Try to attach output listeners immediately (if metadata is already there)
    attachOutputListeners(name);
};

const attachOutputListeners = (name: string) => {
    const config = (window as any).zero?.components?.[name];
    const instance = globalThis.zeroComponents[name]?.[0];
    
    if (config && config.outputs && instance) {
        (config.outputs.events || []).forEach((event: string) => {
            // Avoid duplicate listeners
            if (!instance[`__zero_listener_${event}`]) {
                console.log(`[Registry] Attaching output listener: ${event} for ${name}`);
                instance.addEventListener(event, (e: any) => {
                    console.log(`[${name}][event:${event}]`, e);
                    logEvent(name, event, e.detail || e);
                });
                instance[`__zero_listener_${event}`] = true;
            }
        });
    }
};

const logEvent = (componentName: string, eventName: string, detail: any) => {
    const logContainer = document.getElementById('event-log');
    if (logContainer) {
        // Remove "Waiting for events..." if it exists
        if (logContainer.innerHTML.includes('Waiting for events...')) {
            logContainer.innerHTML = '';
        }

        const entry = document.createElement('div');
        entry.style.marginBottom = '0.75rem';
        entry.style.paddingBottom = '0.75rem';
        entry.style.borderBottom = '1px solid var(--uiv-app-accent-transparent, rgba(255,255,255,0.05))';

        const timestamp = new Date().toLocaleTimeString();
        const detailStr = typeof detail === 'object' ? JSON.stringify(detail, null, 2) : detail;

        entry.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                <span style="color: var(--accent-color); font-weight: 600;">${eventName}</span>
                <span style="color: var(--text-muted); font-size: 0.7rem;">${timestamp}</span>
            </div>
            <pre style="margin: 0; overflow-x: auto; white-space: pre-wrap; font-size: 0.75rem;">${detailStr}</pre>
        `;
        
        logContainer.prepend(entry);
    }
};

(window as any).clearEventLog = () => {
    const logContainer = document.getElementById('event-log');
    if (logContainer) {
        logContainer.innerHTML = '<div style="color: var(--text-muted)">Waiting for events...</div>';
    }
};

// Simplified component loading - Registry is populated by dynamically injected scripts
const loadComponents = async (): Promise<void> => {
    return new Promise((resolve) => {
        window.addEventListener('plugins-ready', () => {
            console.log('[Dashboard] Plugins ready signal received from bridge');
            window.dispatchEvent(new CustomEvent('library-ready'));
            resolve();
        });
        
        // Safety timeout in case bridge fails or plugins were already ready
        setTimeout(() => {
            window.dispatchEvent(new CustomEvent('library-ready'));
            resolve();
        }, 3000);
    });
};

const extractComponentsConfig = () => {
    return (window as any).componentRegistry || {};
};

// UI Update Logic
const updateComponentList = () => {
    const list = document.getElementById('quickNavList');
    const grid = document.getElementById('exploreView');
    
    // Filter out components that are no longer installed in localStorage
    const registeredComponents = Object.keys(globalThis.zeroComponents).filter(key => {
        // Deriving plugin ID from key (selector-version)
        const id = key.substring(0, key.lastIndexOf('-')) || key;
        const isInstalled = (window as any).isPluginInstalled(id);
        
        if (isInstalled) return true;
        
        // Fallback: Some plugins are named 'code-editor' in discovery but register as 'zero-code-editor'
        if (id.startsWith('zero-')) {
            const strippedId = id.substring(5);
            if ((window as any).isPluginInstalled(strippedId)) {
                console.log(`[Dashboard] Mapping component ${id} to installed plugin ${strippedId}`);
                return true;
            }
        }
        
        return false;
    });
    
    if (list) {
        list.innerHTML = '';
        registeredComponents.forEach(key => {
            const item = document.createElement('a');
            item.className = 'nav-item';
            
            // Fetch metadata for better display
            const config = (window as any).zero?.components?.[key] || 
                           (window as any).zeroLibrary?.[key] || 
                           (window as any).componentRegistry?.[key];
            
            const displayName = config?.componentMetadata?.name || key.substring(0, key.lastIndexOf('-') || key.length);
            const displaySelector = key;
            
            item.innerHTML = `
                <div style="display: flex; flex-direction: column; overflow: hidden;">
                    <span style="font-weight: 600; font-size: 0.9rem;">${displayName}</span>
                    <span style="opacity: 0.7; font-size: 0.7rem; font-family: monospace;">${displaySelector}</span>
                </div>
            `;
            item.href = '#';
            item.onclick = () => {
                activeComponentName = key;
                displayComponent(globalThis.zeroComponents[key][0]);
                showPreview(key);
                updateNavForComponent(key);
            };
            list.appendChild(item);
        });
    }

    if (grid && document.getElementById('exploreView')?.style.display !== 'none') {
        grid.innerHTML = '';
        if (registeredComponents.length === 0) {
            grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted);"><h3>No components added yet</h3><p>Go to the <a href="marketplace.html" style="color: var(--accent-color)">Marketplace</a> to browse and add components.</p></div>';
        }
        registeredComponents.forEach(key => {
            const config = (window as any).zero?.components?.[key] || 
                           (window as any).zeroLibrary?.[key] || 
                           (window as any).componentRegistry?.[key];
            
            const displayName = config?.componentMetadata?.name || key.substring(0, key.lastIndexOf('-') || key.length);
            const displaySelector = key;

            const card = document.createElement('div');
            card.className = 'component-card';
            card.style.position = 'relative';
            
            card.innerHTML = `
                <div class="remove-plugin" title="Remove Plugin" style="position: absolute; top: 0.75rem; right: 0.75rem; color: var(--uiv-app-text-muted, #64748b); cursor: pointer; padding: 0.25rem; transition: color 0.2s; z-index: 10;">
                    <i class="fas fa-trash-alt"></i>
                </div>
                <div class="card-content">
                    <div style="font-size: 2rem; color: var(--accent-color); margin-bottom: 1rem;"><i class="fas fa-puzzle-piece"></i></div>
                    <h3 style="margin: 0; font-size: 1.1rem;">${displayName}</h3>
                    <div style="color: var(--text-muted); font-size: 0.75rem; font-family: monospace; margin-top: 0.25rem;">${displaySelector}</div>
                    <p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 0.75rem;">${config?.componentMetadata?.title || 'Dynamic Lit component with active theme support.'}</p>
                </div>
            `;

            // Handle remove button click
            const removeBtn = card.querySelector('.remove-plugin');
            removeBtn?.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm(`Are you sure you want to remove the plugin "${displayName}"?`)) {
                    const pluginId = key.substring(0, key.lastIndexOf('-')) || key;
                    (window as any).uninstallPlugin(pluginId);
                    // UI refresh is handled by the Bridge's custom event below or immediate call
                    updateComponentList();
                }
            });

            // Handle card content click
            const cardContent = card.querySelector('.card-content');
            cardContent?.addEventListener('click', () => {
                activeComponentName = key;
                displayComponent(globalThis.zeroComponents[key][0]);
                showPreview(key);
                updateNavForComponent(key);
            });

            grid.appendChild(card);
        });
    }
};

const displayComponent = (component: HTMLElement) => {
    const preview = document.getElementById('mainPreview');
    if (preview) {
        preview.innerHTML = '';
        preview.appendChild(component);
    }
};

const updateNavForComponent = (componentName: string) => {
    const sidenavelist = document.getElementById('sidenav-list');
    // Prioritize window.zero.components populated by register-plugins
    const config = (window as any).zero?.components?.[componentName] || 
                   (window as any).zeroLibrary?.[componentName] || 
                   (window as any).componentRegistry?.[componentName];
    
    if (sidenavelist && config) {
        sidenavelist.innerHTML = '';
        const inputs = config.inputs || {};
        const instances = globalThis.zeroComponents[componentName];
        
        if (!instances || instances.length === 0) {
            sidenavelist.innerHTML = '<div style="color: var(--text-muted)">Waiting for component instance...</div>';
            return;
        }

        Object.entries(inputs).forEach(([key, inputConfig]) => {
            const inputElement = createInputElement(key, inputConfig, instances[0]);
            sidenavelist.appendChild(inputElement);
        });
    } else if (sidenavelist) {
        sidenavelist.innerHTML = '<div style="color: var(--text-muted)">No configurable properties found.</div>';
    }
};

// View Management
const showExplore = () => {
    const exploreView = document.getElementById('exploreView');
    const previewView = document.getElementById('previewView');
    const pageTitle = document.getElementById('pageTitle');
    const globalNav = document.getElementById('globalNav');
    const componentNav = document.getElementById('componentNav');

    if (exploreView) exploreView.style.display = 'grid';
    if (previewView) previewView.style.display = 'none';
    if (pageTitle) pageTitle.textContent = 'Component Explorer';
    if (globalNav) globalNav.style.display = 'block';
    if (componentNav) componentNav.style.display = 'none';
    
    activeComponentName = null;
};

const showPreview = (name: string) => {
    const exploreView = document.getElementById('exploreView');
    const previewView = document.getElementById('previewView');
    const pageTitle = document.getElementById('pageTitle');
    const globalNav = document.getElementById('globalNav');
    const componentNav = document.getElementById('componentNav');

    if (exploreView) exploreView.style.display = 'none';
    if (previewView) previewView.style.display = 'block';
    
    // Format name and version for title
    const config = (window as any).zero?.components?.[name] || 
                   (window as any).zeroLibrary?.[name] || 
                   (window as any).componentRegistry?.[name];
                   
    const displayName = config?.componentMetadata?.name || name;
    const displaySelector = name;
    
    if (pageTitle) pageTitle.innerHTML = `
        <div style="display: flex; flex-direction: column;">
            <span>${displayName}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-family: monospace;">${displaySelector}</span>
        </div>
    `;
    if (globalNav) globalNav.style.display = 'none';
    if (componentNav) componentNav.style.display = 'flex';
};

(window as any).showExplore = showExplore;
(window as any).showPreview = showPreview;

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
    initializeStyles();
    await loadComponents();
    updateComponentList();
    showExplore(); // Ensure explorer is shown initially
});

window.addEventListener('plugins-updated', () => {
    updateComponentList();
    updateDashboardTheme();
});

// Theme Status Sync & Global Variable Injection
const updateDashboardTheme = () => {
    const uivThemeSpan = document.getElementById('uivThemeName');
    const stdThemeSpan = document.getElementById('standardThemeName');
    const manager = (window as any).zeroThemeManager;
    if (!manager) return;
    
    // 1. Update Header Text for both providers
    if (uivThemeSpan) {
        uivThemeSpan.textContent = manager.getActiveThemeName('zero-uiv-themes');
    }
    if (stdThemeSpan) {
        stdThemeSpan.textContent = manager.getActiveThemeName('zero-standard-themes');
    }

    // 2. Inject Preview-Specific overrides if needed
    // The Orchestrator now handles :root variable injection.
    // We only need to ensure the preview pane uses the correct variables.
    let styleTag = document.getElementById('zero-preview-styles');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'zero-preview-styles';
        document.head.appendChild(styleTag);
    }
    
    styleTag.innerHTML = `
        :root {
            --bg-color: var(--uiv-app-bg, #0f172a);
            --sidebar-bg: var(--uiv-app-sidebar-bg, rgba(30, 41, 59, 0.7));
            --sidebar-text: var(--uiv-app-sidebar-text, var(--uiv-app-text-color, #f1f5f9));
            --header-bg: var(--uiv-app-header-bg, rgba(15, 23, 42, 0.8));
            --card-bg: var(--uiv-app-card-bg, rgba(30, 41, 59, 0.5));
            --text-color: var(--uiv-app-text-color, #f1f5f9);
            --accent-color: var(--uiv-app-accent-color, #38bdf8);
            --border-color: var(--uiv-app-border-color, rgba(51, 65, 85, 0.5));
            --glass-blur: var(--uiv-app-glass-blur, blur(12px));
            --btn-danger: var(--uiv-status-danger, #ef4444);
        }

        .component-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            padding: 1.5rem;
            backdrop-filter: var(--glass-blur);
            box-shadow: var(--uiv-shadow-depth, 0 8px 32px 0 rgba(0,0,0,0.3));
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            position: relative;
            overflow: hidden;
            z-index: 1;
        }

        .component-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border-radius: 20px;
            padding: 2px;
            background: linear-gradient(45deg, transparent, var(--accent-color), transparent, var(--accent-color), transparent);
            background-size: 400% 400%;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0.15; /* Reduced default to avoid clash with light themes */
            transition: opacity 0.5s ease;
            animation: borderRotate 4s linear infinite;
            pointer-events: none;
        }

        @keyframes borderRotate {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .component-card:hover {
            transform: translateY(-12px) scale(1.02);
            background: var(--accent-color);
            color: var(--uiv-text-inverse, #1a1a1a);
            border-color: var(--accent-color);
            box-shadow: var(--uiv-app-hover-shadow, 0 30px 60px -12px rgba(0,0,0,0.4));
        }

        .component-card:hover .remove-plugin,
        .component-card:hover span,
        .component-card:hover i {
             color: var(--uiv-text-inverse, #1a1a1a) !important;
        }

        .component-card:hover::before {
            opacity: 1;
        }

        .component-card::after {
            content: '';
            position: absolute;
            top: 0; left: -100%; width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: 0.5s;
            z-index: -1;
            pointer-events: none;
        }

        .component-card:hover::after {
            left: 100%;
        }

        .preview-pane {
            background-color: var(--uiv-app-bg, #0f172a);
            position: relative;
            border: 2px solid var(--border-color);
            border-radius: 28px;
            backdrop-filter: var(--glass-blur);
            box-shadow: 0 30px 60px -12px rgba(0,0,0,0.6);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            overflow: hidden;
        }

        .preview-pane::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: radial-gradient(var(--uiv-border-color) 1px, transparent 1px);
            background-size: 32px 32px;
            opacity: 0.1;
            pointer-events: none;
        }
        
        .preview-pane span, .preview-pane label {
            color: var(--uiv-text-primary);
            text-shadow: 0 1px 4px rgba(0,0,0,0.05);
            font-weight: 500;
        }

        .preview-pane .setting-label {
            color: var(--uiv-text-secondary);
            font-weight: 500;
            transition: color 0.4s ease;
        }
    `;
};

(window as any).zeroThemeManager?.addEventListener('theme-changed', updateDashboardTheme);
(window as any).zeroThemeManager?.addEventListener('providers-changed', updateDashboardTheme);
updateDashboardTheme();
