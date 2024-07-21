import { ATTRIBUTE_TYPE, AlphaAttribute, AlphaComponent, UI_TYPE, adoptAlphaCommonStyle } from '@jatahworx/alpha-annotations-lib';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { componentStyles } from './base-layout.styles.ts';
import {LoadCSS,RendererComponent} from 'zero-annotation';

@AlphaComponent({
    componentName: 'base-layout',
    componentVersion: '1.0.0',
    label: 'Base layout',
    selector: 'comp-base-layout',
    category: 'Input',
    icon: 'sample.png',
})
// @RendererComponent({
//     componentName: 'base-layout',
//     componentVersion: '1.0.0',
//     label: 'Base layout',
//     selector: 'comp-base-layout',
//     category: 'Input',
//     icon: 'sample.png',
// })

@adoptAlphaCommonStyle()
// @LoadCSS('https://cdnjs.cloudflare.com/ajax/libs/primeicons/4.1.0/primeicons.min.css')
// @LoadCSS('https://cdnjs.cloudflare.com/ajax/libs/primeng/11.0.0/themes/saga-blue/theme.css')
// @LoadCSS('https://cdnjs.cloudflare.com/ajax/libs/primeng/11.0.0/primeng.min.css')
export class BaseLayout extends LitElement {
    static styles = componentStyles;

    @AlphaAttribute({
        type: 'string',
        uiType: 'text',
        label: 'Header',
        placeholder: 'Enter header text',
        defaultValue: 'Header',
      })
      @property({ type: String }) header = 'Header';
    
      @AlphaAttribute({
        type: 'string',
        uiType: 'text',
        label: 'Footer',
        placeholder: 'Enter footer text',
        defaultValue: 'Footer',
      })
      @property({ type: String }) footer = 'Footer';
    
      @AlphaAttribute({
        type: 'boolean',
        uiType: 'checkbox',
        label: 'Show Sidebar',
        defaultValue: false,
      })
      @property({ type: Boolean }) showSidebar = false;
    
      toggleSidebar() {
        this.showSidebar = !this.showSidebar;
      }
    
      render() {
        return html`
          <header>
            ${this.header}
            <button @click="${this.toggleSidebar}">Toggle Sidebar</button>
          </header>
          <main>
            <p-sidebar [visible]="showSidebar" position="left" [showCloseIcon]="true" (onHide)="showSidebar=false">
              <div class="sidebar">
                <slot name="sidebar"></slot>
              </div>
            </p-sidebar>
            <div class="content">
              <slot></slot>
            </div>
          </main>
          <footer>${this.footer}</footer>
        `;
      }
}