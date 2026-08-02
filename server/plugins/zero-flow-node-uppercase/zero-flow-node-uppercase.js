// Auto-generated palette element for published node "zero-flow-node-uppercase".
class ZeroPublishedNode_zero_flow_node_uppercase extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.innerHTML = '<div style="padding:12px 14px;border:1px solid rgba(15,23,42,.16);border-radius:14px;background:#fff;color:#0f172a;font:600 13px system-ui"><span style="text-transform:uppercase;letter-spacing:.1em;font-size:11px;color:#059669">Node</span><br>Uppercase</div>';
  }
}
for (const tag of ["zero-flow-node-uppercase", "zero-flow-node-uppercase-1.0.0"]) {
  if (!customElements.get(tag)) { try { customElements.define(tag, ZeroPublishedNode_zero_flow_node_uppercase); } catch (_) {} }
}
