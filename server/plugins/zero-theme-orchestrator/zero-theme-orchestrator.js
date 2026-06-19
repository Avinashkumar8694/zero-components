class c {
  constructor() {
    this.id = "zero-standard-themes", this.name = "Zero Standard Themes";
  }
  getThemeNames() {
    return ["modern", "cyber", "glass", "retro"];
  }
  getTheme(e) {
    const r = {
      modern: {
        id: "modern",
        name: "Modern Minimal",
        globalTokens: {
          // Component tokens
          "--uiv-primary-color": "#6366f1",
          "--uiv-secondary-color": "#818cf8",
          "--uiv-accent-color": "#10b981",
          "--uiv-bg-color": "#020617",
          "--uiv-surface-color": "#0f172a",
          "--uiv-text-color": "#f8fafc",
          "--uiv-text-muted": "#64748b",
          "--uiv-border-color": "#1e293b",
          // Studio shell tokens
          "--zs-body-bg": "linear-gradient(180deg, #020617 0%, #0f172a 100%)",
          "--zs-bg": "#020617",
          "--zs-surface": "rgba(15, 23, 42, 0.92)",
          "--zs-surface-strong": "rgba(15, 23, 42, 0.98)",
          "--zs-surface-soft": "rgba(30, 41, 59, 0.90)",
          "--zs-surface-panel": "linear-gradient(180deg, rgba(15,23,42,0.96), rgba(30,41,59,0.96))",
          "--zs-border": "rgba(99, 102, 241, 0.2)",
          "--zs-border-strong": "rgba(99, 102, 241, 0.45)",
          "--zs-border-soft": "rgba(99, 102, 241, 0.12)",
          "--zs-text": "#f8fafc",
          "--zs-text-muted": "#64748b",
          "--zs-heading": "#e2e8f0",
          "--zs-brand": "#6366f1",
          "--zs-brand-2": "#10b981",
          "--zs-input-bg": "rgba(30, 41, 59, 0.8)",
          "--zs-accent-ring": "rgba(99, 102, 241, 0.45)",
          "--zs-accent-ring-strong": "rgba(99, 102, 241, 0.7)",
          "--zs-accent-shadow": "0 0 0 3px rgba(99,102,241,0.14), 0 18px 48px rgba(99,102,241,0.12)",
          "--zs-shadow-sm": "0 12px 24px rgba(0, 0, 0, 0.3)",
          "--zs-shadow-md": "0 18px 45px rgba(0, 0, 0, 0.4)",
          "--zs-shadow-lg": "0 28px 70px rgba(0, 0, 0, 0.5)",
          "--zs-panel-blur": "blur(14px)"
        }
      },
      cyber: {
        id: "cyber",
        name: "Cyberpunk",
        globalTokens: {
          "--uiv-primary-color": "#ff007c",
          "--uiv-secondary-color": "#00ffcc",
          "--uiv-accent-color": "#bc00ff",
          "--uiv-bg-color": "#0a0a0c",
          "--uiv-surface-color": "#1a1a1e",
          "--uiv-text-color": "#ffffff",
          "--uiv-text-muted": "#66666e",
          "--uiv-border-color": "rgba(255, 0, 124, 0.4)",
          "--zs-body-bg": "#0a0a0c",
          "--zs-bg": "#0a0a0c",
          "--zs-surface": "rgba(20, 20, 28, 0.92)",
          "--zs-surface-strong": "rgba(20, 20, 28, 0.98)",
          "--zs-surface-soft": "rgba(26, 26, 35, 0.90)",
          "--zs-surface-panel": "linear-gradient(180deg, rgba(20,20,28,0.96), rgba(26,26,35,0.96))",
          "--zs-border": "rgba(255, 0, 124, 0.25)",
          "--zs-border-strong": "rgba(255, 0, 124, 0.5)",
          "--zs-border-soft": "rgba(255, 0, 124, 0.14)",
          "--zs-text": "#ffffff",
          "--zs-text-muted": "#66666e",
          "--zs-heading": "#ffffff",
          "--zs-brand": "#ff007c",
          "--zs-brand-2": "#00ffcc",
          "--zs-input-bg": "rgba(26, 26, 35, 0.9)",
          "--zs-accent-ring": "rgba(255, 0, 124, 0.45)",
          "--zs-accent-ring-strong": "rgba(255, 0, 124, 0.7)",
          "--zs-accent-shadow": "0 0 0 3px rgba(255,0,124,0.14), 0 18px 48px rgba(255,0,124,0.12)",
          "--zs-shadow-sm": "0 12px 24px rgba(0, 0, 0, 0.5)",
          "--zs-shadow-md": "0 18px 45px rgba(0, 0, 0, 0.6)",
          "--zs-shadow-lg": "0 28px 70px rgba(255, 0, 124, 0.15)",
          "--zs-panel-blur": "blur(0px)"
        }
      },
      glass: {
        id: "glass",
        name: "Glassmorphism",
        globalTokens: {
          "--uiv-primary-color": "#38bdf8",
          "--uiv-secondary-color": "#e0f2fe",
          "--uiv-accent-color": "#38bdf8",
          "--uiv-bg-color": "#02041a",
          "--uiv-surface-color": "rgba(10, 20, 50, 0.6)",
          "--uiv-text-color": "#ffffff",
          "--uiv-text-muted": "rgba(255, 255, 255, 0.6)",
          "--uiv-border-color": "rgba(255, 255, 255, 0.15)",
          "--zs-body-bg": "linear-gradient(135deg, #02041a 0%, #060c2e 50%, #02041a 100%)",
          "--zs-bg": "#02041a",
          "--zs-surface": "rgba(10, 20, 50, 0.82)",
          "--zs-surface-strong": "rgba(10, 20, 55, 0.95)",
          "--zs-surface-soft": "rgba(15, 25, 60, 0.78)",
          "--zs-surface-panel": "linear-gradient(180deg, rgba(10,20,50,0.9), rgba(15,25,60,0.92))",
          "--zs-border": "rgba(255, 255, 255, 0.1)",
          "--zs-border-strong": "rgba(56, 189, 248, 0.45)",
          "--zs-border-soft": "rgba(255, 255, 255, 0.06)",
          "--zs-text": "#ffffff",
          "--zs-text-muted": "rgba(255, 255, 255, 0.55)",
          "--zs-heading": "#e0f2fe",
          "--zs-brand": "#38bdf8",
          "--zs-brand-2": "#818cf8",
          "--zs-input-bg": "rgba(10, 20, 50, 0.7)",
          "--zs-accent-ring": "rgba(56, 189, 248, 0.45)",
          "--zs-accent-ring-strong": "rgba(56, 189, 248, 0.7)",
          "--zs-accent-shadow": "0 0 0 3px rgba(56,189,248,0.14), 0 18px 48px rgba(56,189,248,0.12)",
          "--zs-shadow-sm": "0 12px 24px rgba(0, 0, 0, 0.4)",
          "--zs-shadow-md": "0 18px 45px rgba(0, 0, 0, 0.5)",
          "--zs-shadow-lg": "0 28px 70px rgba(56, 189, 248, 0.08)",
          "--zs-panel-blur": "blur(20px) saturate(180%)"
        }
      },
      retro: {
        id: "retro",
        name: "Retro Terminal",
        globalTokens: {
          "--uiv-primary-color": "#00ff00",
          "--uiv-secondary-color": "#00ff00",
          "--uiv-accent-color": "#00ff00",
          "--uiv-bg-color": "#000000",
          "--uiv-surface-color": "#0d0d0d",
          "--uiv-text-color": "#00ff00",
          "--uiv-text-muted": "#00aa00",
          "--uiv-border-color": "#00ff00",
          "--zs-body-bg": "#000000",
          "--zs-bg": "#000000",
          "--zs-surface": "rgba(13, 13, 13, 0.95)",
          "--zs-surface-strong": "rgba(13, 13, 13, 0.99)",
          "--zs-surface-soft": "rgba(20, 20, 20, 0.92)",
          "--zs-surface-panel": "linear-gradient(180deg, rgba(13,13,13,0.96), rgba(20,20,20,0.96))",
          "--zs-border": "rgba(0, 255, 0, 0.3)",
          "--zs-border-strong": "rgba(0, 255, 0, 0.6)",
          "--zs-border-soft": "rgba(0, 255, 0, 0.15)",
          "--zs-text": "#00ff00",
          "--zs-text-muted": "#00aa00",
          "--zs-heading": "#00ff00",
          "--zs-brand": "#00ff00",
          "--zs-brand-2": "#00cc00",
          "--zs-input-bg": "rgba(13, 13, 13, 0.95)",
          "--zs-accent-ring": "rgba(0, 255, 0, 0.45)",
          "--zs-accent-ring-strong": "rgba(0, 255, 0, 0.7)",
          "--zs-accent-shadow": "0 0 0 3px rgba(0,255,0,0.14), 0 0 20px rgba(0,255,0,0.2)",
          "--zs-shadow-sm": "0 0 10px rgba(0, 255, 0, 0.1)",
          "--zs-shadow-md": "0 0 20px rgba(0, 255, 0, 0.15)",
          "--zs-shadow-lg": "0 0 40px rgba(0, 255, 0, 0.2)",
          "--zs-panel-blur": "blur(0px)"
        }
      }
    };
    return r[e] || r.modern;
  }
}
class a extends EventTarget {
  constructor() {
    super(), this.providers = /* @__PURE__ */ new Map(), this.activeThemes = {}, this.rootProviderId = "zero-standard-themes", this.followPrimary = !0, this.rootThemeTokens = {}, this.manualOverrideTokens = {}, this.appliedTokenKeys = /* @__PURE__ */ new Set(), console.log("[ThemeOrchestrator] Initialized");
    try {
      const r = localStorage.getItem("zero-active-themes");
      r && (this.activeThemes = JSON.parse(r));
      const t = localStorage.getItem("zero-root-provider-id");
      t && (this.rootProviderId = t);
      const s = localStorage.getItem("zero-follow-primary");
      s && (this.followPrimary = s === "true");
    } catch (r) {
      console.warn("[ThemeOrchestrator] Failed to restore state", r);
    }
    const e = window.zeroThemeManager;
    e && e.providers && e.providers.forEach((r, t) => this.providers.set(t, r)), this.registerProvider(new c()), window.dispatchEvent(new CustomEvent("zero-orchestrator-ready"));
  }
  static getInstance() {
    return a.instance || (a.instance = new a(), window.zeroThemeManager = a.instance), a.instance;
  }
  registerProvider(e) {
    if (this.providers.set(e.id, e), console.log(`[ThemeOrchestrator] Registered provider: ${e.id}`), !this.activeThemes[e.id]) {
      const r = localStorage.getItem("zero-active-themes"), t = r ? JSON.parse(r) : {};
      this.activeThemes[e.id] = t[e.id] || "modern";
    }
    this.dispatchEvent(new CustomEvent("providers-changed")), this.refreshActiveTheme(e.id);
  }
  unregisterProvider(e) {
    e !== "zero-standard-themes" && this.providers.has(e) && (this.providers.delete(e), delete this.activeThemes[e], this.rootProviderId === e && (this.rootProviderId = "zero-standard-themes", localStorage.setItem("zero-root-provider-id", this.rootProviderId), this.refreshActiveTheme(this.rootProviderId)), console.log(`[ThemeOrchestrator] Unregistered provider: ${e}`), this.dispatchEvent(new CustomEvent("providers-changed")));
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
  setRootProvider(e) {
    this.providers.has(e) && (this.rootProviderId = e, localStorage.setItem("zero-root-provider-id", e), console.log(`[ThemeOrchestrator] Set primary root provider: ${e}`), this.refreshActiveTheme(e), this.dispatchEvent(new CustomEvent("providers-changed")));
  }
  getRootProviderId() {
    return this.rootProviderId;
  }
  setActiveTheme(e, r) {
    this.providers.has(r) && (this.activeThemes[r] = e, localStorage.setItem("zero-active-themes", JSON.stringify(this.activeThemes)), this.refreshActiveTheme(r));
  }
  setFollowPrimary(e) {
    this.followPrimary = e, localStorage.setItem("zero-follow-primary", String(e)), this.dispatchEvent(new CustomEvent("theme-changed", { detail: { followPrimary: e } }));
  }
  getFollowPrimary() {
    return this.followPrimary;
  }
  getActiveTheme(e) {
    const r = this.followPrimary || !e ? this.rootProviderId : e, t = this.providers.get(r), s = this.activeThemes[this.followPrimary ? this.rootProviderId : r] || "modern";
    return t ? t.getTheme(s) : null;
  }
  getActiveThemeName(e) {
    const r = this.followPrimary ? this.rootProviderId : e;
    return this.activeThemes[r] || "modern";
  }
  reset() {
    localStorage.removeItem("zero-active-themes"), localStorage.removeItem("zero-root-provider-id"), localStorage.removeItem("zero-follow-primary"), this.activeThemes = { "zero-standard-themes": "modern" }, this.rootProviderId = "zero-standard-themes", this.followPrimary = !0, this.manualOverrideTokens = {}, this.refreshActiveTheme("zero-standard-themes"), this.dispatchEvent(new CustomEvent("providers-changed")), console.log("[ThemeOrchestrator] Reset to default theme");
  }
  refreshActiveTheme(e) {
    const r = this.getActiveTheme(e);
    e === this.rootProviderId && r && r.globalTokens ? (this.rootThemeTokens = r.globalTokens, this.applyResolvedTokens()) : this.dispatchEvent(new CustomEvent("theme-changed", { detail: { providerId: e } }));
  }
  applyManualTokens(e, r) {
    this.manualOverrideTokens = e, this.applyResolvedTokens(r);
  }
  /**
   * Returns all CSS variable tokens from the currently active theme,
   * merged with any user overrides passed in.
   */
  getActiveThemeTokens(e = {}) {
    const r = this.getActiveTheme();
    return { ...(r == null ? void 0 : r.globalTokens) ?? {}, ...e };
  }
  applyResolvedTokens(e) {
    const r = {
      ...this.rootThemeTokens,
      ...this.manualOverrideTokens
    };
    this.applyRootTheme(r, e);
  }
  applyRootTheme(e, r) {
    if (!document || !document.documentElement) return;
    console.log("[ThemeOrchestrator] Applying tokens:", Object.keys(e).length);
    const t = document.documentElement.style, s = r || document.querySelector(".zs-canvas-shell"), n = new Set(Object.keys(e).filter((o) => o.startsWith("--")));
    this.appliedTokenKeys.forEach((o) => {
      n.has(o) || (t.removeProperty(o), s && s !== document.documentElement && s.style.removeProperty(o));
    }), Object.entries(e).forEach(([o, i]) => {
      o.startsWith("--") && t.setProperty(o, i);
    }), this.appliedTokenKeys = n, e["--zs-body-bg"] ? document.body.style.background = e["--zs-body-bg"] : document.body.style.removeProperty("background"), s && s !== document.documentElement && Object.entries(e).forEach(([o, i]) => {
      o.startsWith("--") && s.style.setProperty(o, i);
    }), this.dispatchEvent(new CustomEvent("theme-changed", { detail: { tokens: e } }));
  }
}
const g = a.getInstance();
export {
  a as ThemeOrchestrator,
  c as ZeroStandardThemeProvider,
  g as themeOrchestrator
};
