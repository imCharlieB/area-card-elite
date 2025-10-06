import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { AreaCardEliteConfig, HomeAssistantExtended } from "./common";

export class AreaCardEliteEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistantExtended;
  @state() _config: AreaCardEliteConfig = { type: "area-card-elite", area: "" };

  private _schema = [
    { name: "area", selector: { area: {} }, label: "Area" },
    { name: "name", selector: { text: {} }, label: "Custom Name" },
    { type: "grid", name: "content", label: "Content", schema: [
      { name: "display_type", selector: { select: { options: ["compact", "icon", "picture", "camera"] } }, label: "Display Type" },
      { name: "color", selector: { color: {} }, label: "Color" },
      { name: "aspect_ratio", selector: { text: {} }, label: "Aspect Ratio" },
      { name: "camera_view", selector: { select: { options: ["auto", "live"] } }, label: "Camera View" }
    ]},
    { type: "grid", name: "interactions", label: "Interactions", schema: [
      { name: "navigation_path", selector: { text: {} }, label: "Navigation Path" }
    ]},
    { type: "grid", name: "features", label: "Features", schema: [
      { name: "alert_classes", selector: { select: { multiple: true, mode: "chips", options: ["moisture", "motion"] } }, label: "Alert Classes" },
      { name: "sensor_classes", selector: { select: { multiple: true, mode: "chips", options: ["temperature", "humidity"] } }, label: "Sensor Classes" },
      { name: "features", selector: { object: {} }, label: "Additional Features" },
      { name: "features_position", selector: { select: { options: ["bottom", "inline"] } }, label: "Features Position" },
      { name: "exclude_entities", selector: { entity: { multiple: true } }, label: "Exclude Entities" }
    ]}
  ];

  setConfig(config: AreaCardEliteConfig): void {
    this._config = config;
  }

  private _valueChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    const config = ev.detail.value;
    this._config = { ...this._config, ...config };
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config }, bubbles: true, composed: true }));
  }

  render() {
    return html`<ha-form .hass=${this.hass} .data=${this._config} .schema=${this._schema} @value-changed=${this._valueChanged}></ha-form>`;
  }
}
