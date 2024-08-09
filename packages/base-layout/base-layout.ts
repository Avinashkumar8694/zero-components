import { RendererComponent,applyGlobalStyles,LoadCSS, LoadJS,RendererAttribute, UserInterfaceType,AttributeType } from 'zero-annotation';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { componentStyles } from './base-layout.styles.ts';

@RendererComponent({
  name: 'base-layout',
  version: '1.0.0',
  title: 'Base layout',
  elementSelector: 'comp-base-layout',
  group: 'Input',
  iconName: 'sample.png',
})

@applyGlobalStyles()
// @LoadCSS('https://cdnjs.cloudflare.com/ajax/libs/primeicons/4.1.0/primeicons.min.css')
// @LoadCSS('https://cdnjs.cloudflare.com/ajax/libs/primeng/11.0.0/themes/saga-blue/theme.css')
// @LoadCSS('https://cdnjs.cloudflare.com/ajax/libs/primeng/11.0.0/primeng.min.css')
export class BaseLayout extends LitElement {
  static styles = componentStyles;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Header',
    placeholderText: 'Enter header text',
    initialValue: 'Header',
  })
  @property({ type: String }) header = 'Header';


  toggleSidebar() {
   
  }

  render() {
    return html`
          <button>Button</button>
        `;
  }
}