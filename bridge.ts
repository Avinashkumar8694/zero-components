// Bridge to translate zero-annotation events to legacy library events
// Also hosts the global decoupled Theme Manager
(function() {
    console.log('[Bridge] Initializing global library bridge...');
    
    // 1. Component Registration Bridge
    const componentRegistry: any = {};
    window.addEventListener('zero-element:component-load', (event: any) => {
        const metadata = event.detail.element;
        if (metadata && metadata.selector) {
            const fullSelector = `${metadata.selector}-${metadata.version}`;
            console.log('[Bridge] Bridging component load:', fullSelector);
            componentRegistry[fullSelector] = metadata;
            window.dispatchEvent(new CustomEvent('element-connected', {
                detail: { element: { localName: fullSelector } }
            }));
        }
    });

    (window as any).componentRegistry = componentRegistry;
    (window as any).getZeroMetadata = (tagName: string) => componentRegistry[tagName];

    const CONFIG_URL = 'http://localhost:5555/config';

    async function pushConfig() {
        try {
            const config = {
                installedPlugins: JSON.parse(localStorage.getItem('zero-installed-plugins') || '[]'),
                activeProvider: localStorage.getItem('zero-active-provider') || '',
                activeTheme: localStorage.getItem('zero-active-theme') || ''
            };
            await fetch(CONFIG_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config)
            });
        } catch (e) { console.error('Failed to sync config to server', e); }
    }

    // 2. Global Theme Manager (Accessing unified orchestrator)
    const getThemeManager = () => (window as any).zeroThemeManager;

    // 3. Plugin Installation & Discovery
    const libraryMetadata: any = {};
    (window as any).zeroLibrary = libraryMetadata;

    (window as any).installPlugin = (id: string) => {
        const installed = JSON.parse(localStorage.getItem('zero-installed-plugins') || '[]');
        if (!installed.includes(id)) {
            installed.push(id);
            localStorage.setItem('zero-installed-plugins', JSON.stringify(installed));
            pushConfig();
            window.dispatchEvent(new CustomEvent('plugins-updated'));
        }
    };

    (window as any).uninstallPlugin = (id: string) => {
        let installed = JSON.parse(localStorage.getItem('zero-installed-plugins') || '[]');
        installed = installed.filter((i: string) => i !== id);
        localStorage.setItem('zero-installed-plugins', JSON.stringify(installed));
        
        // Hard unregistration: Remove from all memory registries
        console.log(`[Bridge] Deep unregistering plugin: ${id}`);
        
        const registries = [
            (window as any).componentRegistry,
            (globalThis as any).zeroComponents,
            (window as any).zeroLibrary,
            (window as any).zero?.components
        ];

        registries.forEach(registry => {
            if (!registry) return;
            Object.keys(registry).forEach(key => {
                // Remove if the key matches the plugin ID (exact or as a prefix of selector-version)
                if (key === id || key.startsWith(id + '-')) {
                    console.log(`[Bridge] Purging from memory: ${key}`);
                    delete registry[key];
                }
            });
        });

        // Clear from script cache to allow re-loading a fresh version later
        loadedScripts.delete(id);

        // Also unregister theme provider if applicable
        const manager = (window as any).zeroThemeManager;
        if (manager) {
            manager.unregisterProvider(id);
        }

        pushConfig();
        window.dispatchEvent(new CustomEvent('plugins-updated'));
    };

    (window as any).isPluginInstalled = (id: string) => {
        const installed = JSON.parse(localStorage.getItem('zero-installed-plugins') || '[]');
        return installed.includes(id);
    };

    const loadedScripts = new Set();
    (window as any).loadPlugin = (id: string, customMainPath?: string) => {
        if (loadedScripts.has(id)) return Promise.resolve();
        console.log(`[Bridge] Dynamically loading plugin (LIVE): ${id}`);
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = customMainPath || `/packages/${id}/src/index.ts`;
            
            script.onload = () => {

                loadedScripts.add(id);
                resolve(true);
            };
            script.onerror = () => {
                console.error(`Failed to load plugin script: ${id}`);
                reject();
            };
            document.head.appendChild(script);
        });
    };

    // Ensure theme manager is available and listen for changes
    const setupManagerListeners = () => {
        const manager = getThemeManager();
        if (manager) {
            console.log('[Bridge] Manager found, attaching sync listeners');
            manager.addEventListener('theme-changed', pushConfig);
            manager.addEventListener('providers-changed', pushConfig);
            
            // Initial sync to server in case manager had state before bridge loaded
            pushConfig();
        } else {
            console.warn('[Bridge] zeroThemeManager not found, retrying...');
            setTimeout(setupManagerListeners, 100);
        }
    }

    // Export pushConfig for manual syncs if needed
    (window as any).pushZeroConfig = pushConfig;

    // 4. Initial Sync from Server
    async function initSync() {
        try {
            // ... discovery logic ...
            const discRes = await fetch(`http://localhost:5555/discovery`);
            const discoveryInfo = await discRes.json();
            const allPlugins = [...(discoveryInfo.components || []), ...(discoveryInfo.themes || [])];

            const res = await fetch(CONFIG_URL);
            const config = await res.json();
            if (config) {
                const installed = config.installedPlugins || [];
                localStorage.setItem('zero-installed-plugins', JSON.stringify(installed));
                
                // Only sync from server if server has a value, otherwise use current local
                if (config.activeProvider) localStorage.setItem('zero-active-provider', config.activeProvider);
                if (config.activeTheme) localStorage.setItem('zero-active-theme', config.activeTheme);
                
                // Inject all installed plugins
                for (const id of installed) {
                    const plugin = allPlugins.find(p => p.id === id);
                    await (window as any).loadPlugin(id, plugin?.main);
                }

                // Update manager state
                const manager = getThemeManager();
                if (manager) {
                    if (config.activeProvider) manager.setActiveProvider(config.activeProvider);
                    if (config.activeTheme) manager.setActiveTheme(config.activeTheme);
                }
                
                window.dispatchEvent(new CustomEvent('plugins-ready'));
            }

            // After initial sync, start listening for changes to push back to server
            setupManagerListeners();
        } catch (e) { 
            console.error('Failed to fetch config from server', e);
            // Even if server sync fails, we should still listen for local changes
            setupManagerListeners();
        }
    }

    initSync();
})();
