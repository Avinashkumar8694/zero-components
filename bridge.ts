// Bridge to translate zero-annotation events to legacy library events
// Also hosts the global decoupled Theme Manager
(function() {
    console.log('[Bridge] Initializing global library bridge...');
    
    // 1. Component Registration Bridge (Source from unified ZeroRegistry)
    const getRegistry = () => (window as any).ZeroRegistry;
    
    window.addEventListener('zero-element:component-load', (event: any) => {
        // Support both new 'element' structure and legacy direct detail structure
        const metadata = event.detail.element || event.detail;
        
        if (metadata && (metadata.selector || metadata.elementSelector)) {
            const selector = metadata.selector || metadata.elementSelector;
            const fullSelector = `${selector}-${metadata.version || '1.0.0'}`;
            console.log('[Bridge] Bridging component load:', fullSelector);
            
            // Dispatch legacy event for backward compatibility
            window.dispatchEvent(new CustomEvent('element-connected', {
                detail: { element: { localName: fullSelector } }
            }));
        }
    });

    (window as any).componentRegistry = (window as any).zero?.components || {};
    (window as any).getZeroMetadata = (tagName: string) => (window as any).zero?.components?.[tagName];

    const CONFIG_URL = 'http://localhost:5555/service/config';

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
        if (loadedScripts.has(id)) {
            console.log(`[Bridge] Plugin ${id} already loaded, skipping.`);
            return Promise.resolve();
        }
        
        console.log(`[Bridge] Dynamically loading plugin: ${id}`);
        return new Promise((resolve, reject) => {
            const tryLoad = (path: string, isFallback: boolean = false) => {
                const script = document.createElement('script');
                script.type = 'module';
                script.src = path;
                
                console.log(`[Bridge] Injecting script for ${id} (${isFallback ? 'fallback' : 'primary'}): ${path}`);
                
                script.onload = () => {
                    console.log(`[Bridge] Script loaded successfully for: ${id}`);
                    loadedScripts.add(id);
                    resolve(true);
                };
                
                script.onerror = () => {
                    if (!isFallback) {
                        console.warn(`[Bridge] Primary path failed for ${id}, trying fallback...`);
                        // Use the alternative common path
                        const fallbackPath = path.includes('/src/') ? `/packages/${id}/${id}.ts` : `/packages/${id}/src/index.ts`;
                        tryLoad(fallbackPath, true);
                    } else {
                        console.error(`[Bridge] Failed to load plugin script for: ${id} from all paths`);
                        reject();
                    }
                };
                
                document.head.appendChild(script);
            };

            const initialPath = customMainPath || `/packages/${id}/${id}.ts`;
            tryLoad(initialPath);
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
        console.log('[Bridge] Starting sync with API server...');
        try {
            const discRes = await fetch(`http://localhost:5555/service/discovery`);
            const discoveryInfo = await discRes.json();
            const allPlugins = [...(discoveryInfo.components || []), ...(discoveryInfo.themes || [])];
            console.log(`[Bridge] Discovered ${allPlugins.length} potential plugins from server`);

            const res = await fetch(CONFIG_URL);
            const config = await res.json();
            if (config) {
                const installed = config.installedPlugins || [];
                console.log('[Bridge] Local config sync: Installed plugins =', installed);
                localStorage.setItem('zero-installed-plugins', JSON.stringify(installed));
                
                // Only sync from server if server has a value, otherwise use current local
                if (config.activeProvider) localStorage.setItem('zero-active-provider', config.activeProvider);
                if (config.activeTheme) localStorage.setItem('zero-active-theme', config.activeTheme);
                
                // Inject all installed plugins
                for (const id of installed) {
                    const plugin = allPlugins.find(p => p.id === id);
                    if (plugin) {
                        console.log(`[Bridge] Preparing to load installed plugin: ${id}`);
                        await (window as any).loadPlugin(id, plugin.main);
                    } else {
                        console.warn(`[Bridge] Plugin ${id} is installed but not found in discovery information.`);
                        // Try loading from fallback path anyway
                        await (window as any).loadPlugin(id);
                    }
                }

                // Update manager state
                const manager = getThemeManager();
                if (manager) {
                    if (config.activeProvider) manager.setActiveProvider(config.activeProvider);
                    if (config.activeTheme) manager.setActiveTheme(config.activeTheme);
                }
                
                console.log('[Bridge] Initial sync complete. Dispatching plugins-ready.');
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
