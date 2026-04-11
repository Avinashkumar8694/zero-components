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

// Plugin Builder State
let currentCompositionProperties: any[] = [];
let currentCompositionEvents: any[] = [];
let playgroundInstances: { el: HTMLElement, x: number, y: number, name: string }[] = [];

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
        .playground-item-wrapper {
            cursor: grab;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .playground-item-wrapper:active {
            cursor: grabbing;
        }
        .playground-item-wrapper[dragging] {
            opacity: 0.5;
            transform: scale(0.98);
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
        return (window as any).isPluginInstalled(id);
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
            const isVirtual = config?.componentMetadata?.isVirtual;
            const badge = isVirtual ? '<span style="background: var(--uiv-status-info); color: white; padding: 2px 6px; border-radius: 4px; font-size: 10px; margin-left: 8px; vertical-align: middle;">🪄 Builder</span>' : '';
            
            item.innerHTML = `
                <div style="display: flex; flex-direction: column; overflow: hidden; width: 100%;">
                    <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                        <span style="font-weight: 600; font-size: 0.9rem;">${displayName}</span>
                        ${badge}
                    </div>
                    <span style="opacity: 0.7; font-size: 0.7rem; font-family: monospace;">${displaySelector}</span>
                </div>
            `;
            item.href = '#';
            item.draggable = true;
            item.addEventListener('dragstart', (e: DragEvent) => {
                e.dataTransfer!.setData('componentName', key);
                e.dataTransfer!.effectAllowed = 'copy';
            });
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
            const isVirtual = config?.componentMetadata?.isVirtual;
            const badge = isVirtual ? '<div style="position: absolute; top: 0.75rem; left: 0.75rem; background: var(--uiv-status-info); color: white; padding: 2px 8px; border-radius: 20px; font-size: 10px; font-weight: 600; z-index: 10;">🪄 BUILDER</div>' : '';

            const card = document.createElement('div');
            card.className = 'component-card';
            card.style.position = 'relative';
            
            card.innerHTML = `
                ${badge}
                <div class="remove-plugin" title="Remove Plugin" style="position: absolute; top: 0.75rem; right: 0.75rem; color: var(--uiv-app-text-muted, #64748b); cursor: pointer; padding: 0.25rem; transition: color 0.2s; z-index: 10;">
                    <i class="fas fa-trash-alt"></i>
                </div>
                <div class="card-content">
                    <div style="font-size: 2rem; color: var(--accent-color); margin-bottom: 1rem;"><i class="fas fa-puzzle-piece"></i></div>
                    <h3 style="margin: 0; font-size: 1.1rem;">${displayName}</h3>
                    <div style="color: var(--text-muted); font-size: 0.75rem; font-family: monospace; margin-top: 0.25rem;">${displaySelector}</div>
                    <p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 0.75rem;">${config?.componentMetadata?.title || config?.componentMetadata?.description || 'Dynamic Lit component built with Zero Builder.'}</p>
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

            // Make card draggable for Playground
            card.draggable = true;
            card.addEventListener('dragstart', (e) => {
                e.dataTransfer!.setData('componentName', key);
                e.dataTransfer!.effectAllowed = 'copy';
                card.style.opacity = '0.5';
            });
            card.addEventListener('dragend', () => {
                card.style.opacity = '1';
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

const updateNavForComponent = (componentName: string, instanceId: string | null = null) => {
    const sidenavelist = document.getElementById('sidenav-list');
    const componentNav = document.getElementById('componentNav');
    const globalNav = document.getElementById('globalNav');
    
    // Show the property nav if we are in playground or preview
    if (componentNav) componentNav.style.display = 'flex';
    if (globalNav) globalNav.style.display = 'none';

    // Prioritize window.zero.components populated by register-plugins
    const config = (window as any).zero?.components?.[componentName] || 
                   (window as any).zeroLibrary?.[componentName] || 
                   (window as any).componentRegistry?.[componentName];
    
    if (sidenavelist && config) {
        sidenavelist.innerHTML = '';
        const inputs = config.inputs || {};
        
        // Find instance
        let customElement: any = null;
        if (instanceId) {
            const inst = playgroundInstances.find(i => (i as any).id === instanceId);
            if (inst) customElement = inst.el;
        } else {
            const instances = globalThis.zeroComponents[componentName];
            if (instances && instances.length > 0) customElement = instances[0];
        }

        if (!customElement) {
            sidenavelist.innerHTML = '<div style="color: var(--text-muted)">Waiting for component instance...</div>';
            return;
        }

        Object.entries(inputs).forEach(([key, inputConfig]) => {
            const inputElement = createInputElement(key, inputConfig, customElement);
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
    const playgroundView = document.getElementById('playgroundView');
    const codeView = document.getElementById('codeView');
    const pageTitle = document.getElementById('pageTitle');
    const globalNav = document.getElementById('globalNav');
    const componentNav = document.getElementById('componentNav');

    if (exploreView) exploreView.style.display = 'none';
    if (playgroundView) playgroundView.style.display = 'none';
    if (codeView) codeView.style.display = 'none';
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

const showPlayground = () => {
    const views = ['exploreView', 'previewView', 'playgroundView', 'codeView'];
    views.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === 'playgroundView') ? 'block' : 'none';
    });
    
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = 'Component Playground';
    
    // Reset nav
    const globalNav = document.getElementById('globalNav');
    const componentNav = document.getElementById('componentNav');
    if (globalNav) globalNav.style.display = 'block';
    if (componentNav) componentNav.style.display = 'none';
    
    updateActiveNavItem('Playground');
};

const showCode = () => {
    const views = ['exploreView', 'previewView', 'playgroundView', 'codeView'];
    views.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === 'codeView') ? 'flex' : 'none';
    });
    
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = 'Global Code Editor';
    
    // Reset nav
    const globalNav = document.getElementById('globalNav');
    const componentNav = document.getElementById('componentNav');
    if (globalNav) globalNav.style.display = 'block';
    if (componentNav) componentNav.style.display = 'none';
    
    updateActiveNavItem('Code');
};

const updateActiveNavItem = (label: string) => {
    const items = document.querySelectorAll('.nav-item');
    items.forEach(item => {
        if (item.textContent?.includes(label)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
};

(window as any).showExplore = showExplore;
(window as any).showPreview = showPreview;
(window as any).showPlayground = showPlayground;
(window as any).showCode = showCode;

// Playground Logic
const playgroundCanvas = document.getElementById('playgroundCanvas');
if (playgroundCanvas) {
    playgroundCanvas.style.display = 'flex';
    playgroundCanvas.style.flexDirection = 'column';
    playgroundCanvas.style.gap = '20px';
    playgroundCanvas.style.padding = '20px';
    playgroundCanvas.style.overflowY = 'auto';
    
    playgroundCanvas.addEventListener('dragover', (e) => {
        e.preventDefault();
        
        // Remove old hover effects
        document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
        
        const path = e.composedPath();
        const column = path.find(el => el instanceof HTMLElement && el.classList.contains('column')) as HTMLElement;
        const section = path.find(el => el instanceof HTMLElement && el.tagName.toLowerCase() === 'zero-uiv-section') as HTMLElement;
        
        if (section) {
            section.classList.add('drag-over');
        } else if (column) {
            column.classList.add('drag-over');
        }
    });

    playgroundCanvas.addEventListener('drop', (e) => {
        e.preventDefault();
        document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));

        const componentName = e.dataTransfer!.getData('componentName');
        const movingId = e.dataTransfer!.getData('movingInstanceId');
        
        const path = e.composedPath();
        const column = path.find(el => el instanceof HTMLElement && el.classList.contains('column')) as HTMLElement;
        const section = path.find(el => el instanceof HTMLElement && el.tagName.toLowerCase() === 'zero-uiv-section') as HTMLElement;
        const isCanvas = path.some(el => el instanceof HTMLElement && (el.id === 'playgroundCanvas' || el.classList.contains('playground-item-wrapper')));
        
        // Validation Logic
        const isPanelComp = componentName?.startsWith('zero-uiv-panel');
        const isSectionComp = componentName?.startsWith('zero-uiv-section');
        const isChildComp = componentName && !isPanelComp && !isSectionComp;

        if (componentName) {
            // New Component Drop
            if (isPanelComp && !isCanvas) {
                alert("Panels can only be dropped at the top level (Canvas).");
                return;
            }
            if (isSectionComp && !column) {
                alert("Sections can only be dropped inside a Panel Column.");
                return;
            }
            if (isChildComp && !section) {
                alert("Components can only be dropped inside a Section.");
                return;
            }

            const dropTarget = section || column || playgroundCanvas;
            const slotName = column && !section ? `col-${column.dataset.col}` : '';
            addPlaygroundComponent(componentName, 0, 0, dropTarget as HTMLElement, slotName);
        } else if (movingId) {
            const inst = playgroundInstances.find(i => (i as any).id === movingId);
            if (inst && isCanvas) {
                const wrapper = inst.el.parentElement;
                if (wrapper) {
                    // Vertical Reordering in Flex Stack
                    const children = Array.from(playgroundCanvas.children).filter(child => child !== wrapper);
                    const insertBefore = children.find(child => {
                        const crect = child.getBoundingClientRect();
                        return e.clientY < (crect.top + crect.height / 2);
                    });
                    
                    if (insertBefore) {
                        playgroundCanvas.insertBefore(wrapper, insertBefore);
                    } else {
                        playgroundCanvas.appendChild(wrapper);
                    }
                }
            }
        }
    });
}

const addPlaygroundComponent = (name: string, x: number, y: number, parent: HTMLElement | null = null, slot: string = '') => {
    const canvas = parent || document.getElementById('playgroundCanvas');
    if (!canvas) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'playground-item-wrapper';
    wrapper.style.position = 'static';
    wrapper.style.width = '100%';
    wrapper.style.boxSizing = 'border-box';
    if (slot) wrapper.setAttribute('slot', slot);
    wrapper.style.margin = '10px 0';
    wrapper.style.padding = '20px';
    wrapper.style.border = '1px solid var(--border-color)';
    wrapper.style.borderRadius = '12px';
    wrapper.style.background = 'var(--card-bg)';
    wrapper.style.cursor = 'move';
    wrapper.draggable = true;

    // Add remove button
    const removeBtn = document.createElement('div');
    removeBtn.innerHTML = '<i class="fas fa-times"></i>';
    removeBtn.style.position = 'absolute';
    removeBtn.style.top = '-10px';
    removeBtn.style.right = '-10px';
    removeBtn.style.background = 'var(--uiv-color-danger, #ef4444)';
    removeBtn.style.color = 'white';
    removeBtn.style.width = '24px';
    removeBtn.style.height = '24px';
    removeBtn.style.borderRadius = '50%';
    removeBtn.style.display = 'flex';
    removeBtn.style.alignItems = 'center';
    removeBtn.style.justifyContent = 'center';
    removeBtn.style.cursor = 'pointer';
    removeBtn.onclick = () => {
        if (globalScript?.onDestroy) globalScript.onDestroy(el);
        wrapper.remove();
    };
    wrapper.appendChild(removeBtn);

    const baseTagName = name.replace(/-\d+\.\d+\.\d+$/, '');
    const el = document.createElement(baseTagName);
    // Apply initial metadata values if available
    const config = (window as any).zeroLibrary?.[name];
    if (config?.inputs) {
        Object.entries(config.inputs).forEach(([key, input]: [string, any]) => {
            if (input.initialValue !== undefined) (el as any)[key] = input.initialValue;
        });
    }

    wrapper.appendChild(el);
    canvas.appendChild(wrapper);
    
    const instanceId = 'inst-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    const instance = { el, x, y, name, id: instanceId };
    playgroundInstances.push(instance as any);

    // Click to select/edit properties
    wrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.playground-item-wrapper').forEach(w => (w as HTMLElement).style.borderColor = 'var(--border-color)');
        wrapper.style.borderColor = 'var(--uiv-status-info, #38bdf8)';
        wrapper.style.boxShadow = '0 0 10px rgba(56, 189, 248, 0.2)';
        updateNavForComponent(name, instanceId);
    });

    // Lifecycle: onInit
    if (globalScript?.onInit) globalScript.onInit(el);

    // Simple drag for the wrapper itself
    wrapper.addEventListener('dragstart', (e: DragEvent) => {
        e.stopPropagation();
        const rect = wrapper.getBoundingClientRect();
        (window as any).dragOffset = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        e.dataTransfer!.setData('movingInstanceId', instanceId);
        e.dataTransfer!.effectAllowed = 'move';
        wrapper.setAttribute('dragging', '');
    });

    wrapper.addEventListener('dragend', () => {
        wrapper.removeAttribute('dragging');
    });

    // Handle output bindings if any
    if (config?.outputs) {
        Object.keys(config.outputs).forEach(event => {
            el.addEventListener(event, (e: any) => {
                const handlerName = `on${name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}${event.charAt(0).toUpperCase() + event.slice(1)}`;
                if (globalScript?.[handlerName]) {
                    globalScript[handlerName](e.detail);
                }
                // Also trigger generic onChange if script supports it
                if (globalScript?.onChange) globalScript.onChange(el, event, e.detail);
                
                logEvent(`Playground Component ${name}`, event, e.detail);
            });
        });
    }
};

// Global Script Management
let globalScript: any = null;

(window as any).applyGlobalCode = () => {
    const editor = document.getElementById('globalCodeEditor') as any;
    const code = editor.code;
    try {
        // Wrap user code to support exports or simple object definition
        const scriptFunc = new Function('lit', 'ZeroAnnotation', `
            const methods = {};
            ${code}
            return methods;
        `);
        globalScript = scriptFunc((window as any).lit, (window as any)['zero-annotation']);
        console.log('[ScriptManager] Global methods initialized:', globalScript);
        
        // Notify user
        const btn = document.querySelector('#codeView .btn-primary');
        if (btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Applied!';
            setTimeout(() => btn.innerHTML = originalText, 2000);
        }
    } catch (e: any) {
        console.error('[ScriptManager] Compilation error:', e);
    }
};

// --------------------------------------------------------------------------
// Plugin Builder Implementation
// --------------------------------------------------------------------------

(window as any).showBuilderSettings = () => {
    const panel = document.getElementById('builderSettingsPanel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    }
};

(window as any).showPropertyDefModal = () => {
    const panel = document.getElementById('propertyDefPanel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        renderPropertyList();
    }
};

(window as any).addPropertyFromUI = () => {
    const nameInput = document.getElementById('newPropName') as HTMLInputElement;
    const typeSelect = document.getElementById('newPropType') as HTMLSelectElement;
    
    if (!nameInput.value) return;
    
    currentCompositionProperties.push({
        name: nameInput.value,
        label: nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1),
        type: typeSelect.value
    });
    
    nameInput.value = '';
    renderPropertyList();
};

const renderPropertyList = () => {
    const list = document.getElementById('propertyList');
    if (!list) return;
    
    if (currentCompositionProperties.length === 0) {
        list.innerHTML = '<div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 20px;">No custom properties defined yet.</div>';
        return;
    }
    
    list.innerHTML = currentCompositionProperties.map((prop, index) => `
        <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-color); padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border-color);">
            <div>
                <span style="font-size: 0.8rem; font-weight: 500;">${prop.name}</span>
                <span style="font-size: 0.7rem; color: var(--text-muted); margin-left: 8px;">(${prop.type})</span>
            </div>
            <button onclick="removeProperty(${index})" style="background: none; border: none; color: var(--btn-danger); cursor: pointer; font-size: 0.8rem;"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
};

(window as any).removeProperty = (index: number) => {
    currentCompositionProperties.splice(index, 1);
    renderPropertyList();
};

(window as any).saveComposition = () => {
    const nameInput = document.getElementById('builderPluginName') as HTMLInputElement;
    const selectorInput = document.getElementById('builderPluginSelector') as HTMLInputElement;
    const descInput = document.getElementById('builderPluginDesc') as HTMLTextAreaElement;
    
    if (!selectorInput.value) {
        alert("Please enter a selector for your plugin.");
        return;
    }

    const canvas = document.getElementById('playgroundCanvas');
    const editor = document.getElementById('globalCodeEditor') as any;

    const buildTree = (container: HTMLElement): any[] => {
        const children: any[] = [];
        const items = Array.from(container.children).filter(el => el.classList.contains('playground-item-wrapper'));
        
        items.forEach(wrapper => {
            const el = wrapper.querySelector(':not(.fa-times):not(div)') as HTMLElement;
            if (!el) return;
            
            const name = el.tagName.toLowerCase();
            const inst = playgroundInstances.find(i => i.el === el);
            
            const node: any = {
                name: name,
                ref: el.id || `ref_${name.replace(/-/g, '_')}_${Math.floor(Math.random() * 1000)}`,
                slot: wrapper.getAttribute('slot') || '',
                config: getElementConfig(el)
            };

            // If it's a container, recurse
            if (name === 'zero-uiv-panel' || name === 'zero-uiv-section') {
                const contentArea = el.shadowRoot ? el.shadowRoot.querySelector('slot') || el : el;
                // Since slots are used, children are physically in the light DOM of the element
                node.children = buildTree(el);
            }
            
            children.push(node);
        });
        return children;
    };

    const composition = {
        metadata: {
            name: nameInput.value || "Untitled Plugin",
            selector: selectorInput.value,
            description: descInput.value,
            version: "1.0.0"
        },
        properties: [...currentCompositionProperties],
        events: [...currentCompositionEvents],
        children: buildTree(canvas!),
        script: editor.code
    };

    console.log("[PluginBuilder] BUILD_INIT:", JSON.stringify(composition));
    registerVirtualPlugin(composition);
    
    alert(`Plugin "${composition.metadata.name}" build initiated!`);
    (window as any).showExplore();
};

(window as any).generateFullPluginSource = (comp: any) => {
    const className = comp.metadata.name.replace(/\s+/g, '') + 'Plugin';
    const propertiesTS = comp.properties.map((p: any) => `
    @property({ type: ${p.type.charAt(0).toUpperCase() + p.type.slice(1)} })
    ${p.name}: ${p.type} = ${p.type === 'string' ? "''" : (p.type === 'number' ? "0" : "false")};`).join('\n');

    const renderChildren = (children: any[]): string => {
        return children.map((child: any) => {
            const attributes = Object.entries(child.config)
                .map(([key, val]) => {
                    if (typeof val === 'string' && val.startsWith('{{') && val.endsWith('}}')) {
                        const propName = val.substring(2, val.length - 2).trim();
                        return ` .${key}="\${this.${propName}}"`;
                    }
                    return ` .${key}="\${${JSON.stringify(val)}}"`;
                })
                .join('');

            const innerHTML = child.children ? renderChildren(child.children) : '';
            const slotAttr = child.slot ? ` slot="${child.slot}"` : '';
            
            return `
            <${child.name}${attributes}${slotAttr} id="${child.ref}">
                ${innerHTML}
            </${child.name}>`;
        }).join('');
    };

    const childrenHTML = renderChildren(comp.children);

    return `
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { RendererComponent, applyGlobalStyles } from 'zero-annotation';

@RendererComponent({
  elementSelector: '${comp.metadata.selector}',
  title: '${comp.metadata.name}',
  description: '${comp.metadata.description}',
  version: '${comp.metadata.version}',
  name: '${comp.metadata.name}'
})
@applyGlobalStyles()
export class ${className} extends LitElement {
    static styles = css\`
        :host { display: block; position: relative; min-height: 400px; width: 100%; overflow: hidden; }
        .composition-container { position: relative; width: 100%; height: 100%; }
    \`;

    ${propertiesTS}

    render() {
        return html\`
            <div class="composition-container">
                ${childrenHTML}
            </div>
        \`;
    }

    ${comp.script}
}
    `.trim();
};

const getElementConfig = (el: HTMLElement) => {
    const config: any = {};
    const tagName = el.tagName.toLowerCase();
    const litConfig = (window as any).zeroLibrary?.[tagName];
    if (litConfig?.inputs) {
        Object.keys(litConfig.inputs).forEach(key => {
            config[key] = (el as any)[key];
        });
    }
    return config;
};

const registerVirtualPlugin = (comp: any) => {
    const selector = comp.metadata.selector;
    const version = comp.metadata.version;
    const fullKey = `${selector}-${version}`;

    // 1. Add to Registry
    (window as any).componentRegistry = (window as any).componentRegistry || {};
    (window as any).componentRegistry[fullKey] = {
        componentMetadata: {
            name: comp.metadata.name,
            title: comp.metadata.description,
            selector: selector,
            version: version,
            isVirtual: true // Mark as virtual for UI badging
        },
        inputs: comp.properties.reduce((acc: any, prop: any) => {
            acc[prop.name] = { 
                attributeType: "PROPERTY", 
                displayLabel: prop.label, 
                uiComponentType: "TEXT_INPUT" 
            };
            return acc;
        }, {}),
        outputs: comp.events.reduce((acc: any, ev: any) => {
            acc[ev.name] = { displayLabel: ev.label };
            return acc;
        }, {})
    };

    // 2. Define the Virtual Class
    if (!customElements.get(selector)) {
        class VirtualPlugin extends (window as any).lit.LitElement {
            static properties = comp.properties.reduce((acc: any, prop: any) => {
                acc[prop.name] = { type: prop.type === 'number' ? Number : (prop.type === 'boolean' ? Boolean : String) };
                return acc;
            }, {});

            render() {
                const renderTree = (nodes: any[]): any => {
                    return nodes.map((node: any) => (window as any).lit.html`
                        <\${(window as any).lit.unsafeStatic(node.name)} .config=\${node.config} slot="\${node.slot}" id="\${node.ref}">
                            ${node.children ? renderTree(node.children) : ''}
                        </\${(window as any).lit.unsafeStatic(node.name)}>
                    `);
                };

                return (window as any).lit.html`
                    <div style="position: relative; width: 100%; height: 100%; min-height: 400px; background: var(--uiv-app-bg); border-radius: 20px; border: 1px solid var(--uiv-app-border-color); overflow: hidden;">
                        ${renderTree(comp.children)}
                    </div>
                `;
            }
            
            private _getRefs(): any {
                const refs: any = {};
                this.shadowRoot?.querySelectorAll('[id]').forEach((el: any) => {
                    refs[el.id] = el;
                });
                return refs;
            }

            connectedCallback() {
                super.connectedCallback();
                const scriptFunc = new Function('el', 'methods', comp.script);
                const methods: any = {};
                scriptFunc(this, methods);
                (this as any)._methods = methods;
                if (methods.connectedCallback) methods.connectedCallback.call(this, this._getRefs());
            }

            firstUpdated() {
                const methods = (this as any)._methods;
                if (methods?.firstUpdated) methods.firstUpdated.call(this, this._getRefs());
                if (methods?.onInit) methods.onInit.call(this, this._getRefs());
            }

            updated(changedProperties: any) {
                super.updated(changedProperties);
                const methods = (this as any)._methods;
                if (methods?.updated) methods.updated.call(this, changedProperties, this._getRefs());
            }
        }
        customElements.define(selector, VirtualPlugin as any);
    }

    // 3. Update Bridge state & Perspectives
    (window as any).zeroLibrary = (window as any).zeroLibrary || {};
    (window as any).zeroLibrary[fullKey] = (window as any).componentRegistry[fullKey];
    globalThis.zeroComponents[fullKey] = [null]; 

    // Auto-install so it appears in "Added Plugins"
    if ((window as any).installPlugin) {
        (window as any).installPlugin(selector);
    }

    updateComponentList();
};

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
    initializeStyles();
    
    // Manually register structural components
    const structuralComponents = [
        {
            selector: 'zero-uiv-panel',
            name: 'UI Panel',
            description: 'Top-level UI container',
            version: '1.0.0',
            inputs: {
                headerTitle: { attributeType: 'PROPERTY', displayLabel: 'Header Title', uiComponentType: 'TEXT_INPUT' },
                accentColor: { attributeType: 'PROPERTY', displayLabel: 'Accent Color', uiComponentType: 'COLOR_PICKER' }
            }
        },
        {
            selector: 'zero-uiv-section',
            name: 'UI Section',
            description: 'Layout-aware grouping container',
            version: '1.0.0',
            inputs: {
                sectionName: { attributeType: 'PROPERTY', displayLabel: 'Section Name', uiComponentType: 'TEXT_INPUT' },
                layout: { 
                    attributeType: 'PROPERTY', 
                    displayLabel: 'Layout', 
                    uiComponentType: 'DROPDOWN',
                    optionItems: [
                        { label: 'Stack', value: 'stack' },
                        { label: 'Inline', value: 'inline' },
                        { label: 'Grid', value: 'grid' }
                    ]
                }
            }
        }
    ];

    structuralComponents.forEach(comp => {
        const fullKey = comp.selector + (comp.version ? `-${comp.version}` : '-1.0.0');
        const metadata = { ...comp, version: comp.version || '1.0.0' };
        
        (window as any).componentRegistry = (window as any).componentRegistry || {};
        (window as any).componentRegistry[fullKey] = {
            componentMetadata: metadata,
            inputs: comp.inputs
        };
        (window as any).zeroLibrary = (window as any).zeroLibrary || {};
        (window as any).zeroLibrary[fullKey] = (window as any).componentRegistry[fullKey];
        globalThis.zeroComponents[fullKey] = [null];
        if ((window as any).installPlugin) (window as any).installPlugin(comp.selector);
    });

    await loadComponents();
    updateComponentList();
    showExplore(); 
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
