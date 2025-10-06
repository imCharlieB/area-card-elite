import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { AreaCardEliteConfig, HomeAssistantExtended } from "./common";

export class AreaCardEliteEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistantExtended;
  @state() _config: AreaCardEliteConfig = { type: "area-card-elite", area: "" };

  private _schema = [
    { name: "area", selector: { area: {} } },
    { name: "name", selector: { text: {} } },
    { name: "color", selector: { text: {} } },
    { name: "display_type", selector: { select: { options: ["compact", "icon", "picture", "camera"] } } },
    { name: "camera_view", selector: { select: { options: ["auto", "live"] } } },
    { name: "aspect_ratio", selector: { text: {} } },
    { name: "navigation_path", selector: { text: {} } },
    { name: "alert_classes", selector: { object: {} } },
    { name: "sensor_classes", selector: { object: {} } },
    { name: "features", selector: { object: {} } },
    { name: "features_position", selector: { select: { options: ["bottom", "inline"] } } },
    { name: "exclude_entities", selector: { object: {} } }
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
