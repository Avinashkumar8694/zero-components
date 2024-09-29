class DynamicJsInjector {
    constructor(scripts) {
        this.scripts = scripts; // Array of script URLs
    }

    onInit() {
        console.log('Plugin DynamicRenderJs initialized');
        if(!window?.zero?.client){
            return;
        }
        this.loadScripts();
    }

    loadScripts() {
        this.scripts.forEach(scriptUrl => {
            const script = document.createElement('script');
            script.src = scriptUrl;
            script.type = 'module';
            script.async = true; // Load scripts asynchronously
            script.onload = () => console.log(`${scriptUrl} loaded successfully`);
            script.onerror = () => console.error(`Error loading ${scriptUrl}`);
            document.body.appendChild(script); // Append script to the body
        });
    }
}
const scriptsToLoad = [
    'http://localhost:5555/service/plugins/attribute-window/attribute-window.js',
    'http://localhost:5555/service/plugins/open-popup-directive/open-popup-directive.js',
    'http://localhost:5555/service/plugins/popup-dialog/popup-dialog.js',
    'http://localhost:5555/service/plugins/popup-dropdown/popup-dropdown.js',
    'http://localhost:5555/service/plugins/popup-dropdown-directive/popup-dropdown-directive.js',
    'http://localhost:5555/service/plugins/rich-text-editor/rich-text-editor.js',
];
zero.registerPlugins('dynamicJsInjector', new DynamicJsInjector(scriptsToLoad));
