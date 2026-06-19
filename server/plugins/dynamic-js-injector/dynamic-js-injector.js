class e {
  constructor(o) {
    this.scripts = o;
  }
  onInit() {
    var o;
    console.log("Plugin DynamicRenderJs initialized"), (o = window == null ? void 0 : window.zero) != null && o.client && this.loadScripts();
  }
  loadScripts() {
    this.scripts.forEach((o) => {
      const t = document.createElement("script");
      t.src = o, t.type = "module", t.async = !0, t.onload = () => console.log(`${o} loaded successfully`), t.onerror = () => console.error(`Error loading ${o}`), document.body.appendChild(t);
    });
  }
}
const i = [
  "http://localhost:5555/service/plugins/attribute-window/attribute-window.js",
  "http://localhost:5555/service/plugins/open-popup-directive/open-popup-directive.js",
  "http://localhost:5555/service/plugins/popup-dialog/popup-dialog.js",
  "http://localhost:5555/service/plugins/popup-dropdown/popup-dropdown.js",
  "http://localhost:5555/service/plugins/popup-dropdown-directive/popup-dropdown-directive.js",
  "http://localhost:5555/service/plugins/rich-text-editor/rich-text-editor.js"
];
zero.registerPlugins("dynamicJsInjector", new e(i));
