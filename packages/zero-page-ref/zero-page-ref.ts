import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RendererComponent, RendererAttribute, AttributeType, UserInterfaceType } from "zero-annotation";

@RendererComponent({
  name: "zero-page-ref",
  version: "1.0.0",
  title: "Reuse Page",
  elementSelector: "zero-page-ref",
  group: "Content Block",
  iconName: "page-ref-icon.png",
})
@customElement("zero-page-ref")
export class ZeroPageRef extends LitElement {
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Page Reference ID",
    fieldMappings: "pageId",
    categoryLabel: "Configuration"
  })
  pageId = "";

  static getStudioTemplate() {
    return {
      kind: "generic",
      emptyText: "Displays a nested page reference",
      slots: [],
      badges: ["Page Reference"]
    };
  }
}
