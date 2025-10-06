import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { AreaCardEliteConfig, HomeAssistantExtended } from "./common";

export class AreaCardEliteEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistantExtended;
  @state() _config: AreaCardEliteConfig = { type: "area-card-elite", area: "" };

  private _schema = [
    { name: "area", selector: { area: {} } },
    { name: "name", selector: { text: {} } }
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
