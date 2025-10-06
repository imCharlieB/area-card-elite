import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { AreaCardEliteConfig, CUSTOM_CARD_ID, HomeAssistantExtended } from "./common";

export class AreaCardElite extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistantExtended;
  @state() _area: string = "";
  @state() _name: string = "";

  setConfig(config: AreaCardEliteConfig) {
    this._area = config.area;
    this._name = config.name || "";
  }

  render() {
    if (!this.hass || !this._area || !this.hass.areas) {
      return html`<ha-card>Loading...</ha-card>`;
    }

    const area = this.hass.areas[this._area];
    if (!area) {
      return html`<ha-card>Area not found</ha-card>`;
    }

    const name = this._name || area.name;
    const entities = Object.keys(this.hass.states).filter(entityId => {
      const stateObj = this.hass.states[entityId];
      return stateObj.attributes.area_id === this._area;
    });

    return html`<ha-card .header=${name}>
      <div class="card-content">
        ${area.icon ? html`<ha-icon .icon=${area.icon}></ha-icon>` : ''}
        <div class="sensors">
          ${area.temperature_entity_id ? html`<div>Temperature: ${this.hass.states[area.temperature_entity_id]?.state}</div>` : ''}
          ${area.humidity_entity_id ? html`<div>Humidity: ${this.hass.states[area.humidity_entity_id]?.state}</div>` : ''}
        </div>
        <ul>
          ${entities.map(entityId => {
            const stateObj = this.hass.states[entityId];
            return html`<li>${stateObj.attributes.friendly_name || entityId}: ${stateObj.state}</li>`;
          })}
        </ul>
      </div>
    </ha-card>`;
  }

  static getConfigElement() {
    return document.createElement(CUSTOM_CARD_ID + "-editor");
  }

  static getStubConfig() {
    return { area: "" };
  }
}
