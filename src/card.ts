import { LitElement, html } from "lit";
import { state } from "lit/decorators.js";
import { CardConfig, CUSTOM_CARD_ID } from "./common";
import {
  HomeAssistant,
  LovelaceCardConfig,
  formatNumber,
} from "custom-card-helpers";

export class MyLitCard extends LitElement {
  @state() _title: string = "";
  private _element_id: string = "";
  @state() _element_value = "";

  private _hass: any | undefined;

  setConfig(config: CardConfig) {
    this._title = config.title;
    this._element_id = config.element_id;
    if (this._hass) {
      this.hass = this._hass;
    }
  }

  set hass(hass: any) {
    this._hass = hass;
    if (this._element_id)
      this._element_value = this._element_id
        ? this._hass.formatEntityState(hass.states[this._element_id])
        : "N/A";
  }

  render() {
    return html`<ha-card .header=${this._title}>
      <div class="card-content">
        <h3>Welcome to Lit!</h3>
        <span>${this._element_value}</span>
      </div></ha-card
    > `;
  }

  // card configuration
  static getConfigElement() {
    return document.createElement(CUSTOM_CARD_ID + "-editor");
  }
}
