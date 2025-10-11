import { LitElement, html, css, PropertyValues, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { repeat } from "lit/directives/repeat.js";
import { HomeAssistantExtended, AreaCardEliteConfig } from "./common";
import { actionHandler } from "./ha/helpers/action_handler";
import { handleAction } from "./ha/helpers/handle_action";
import { computeDomain } from "./ha/helpers/compute_domain";
import { UNAVAILABLE, UNKNOWN, STATES_OFF as HA_STATES_OFF } from "./ha";
import { 
  SENSOR_DOMAINS,
  ALERT_DOMAINS,
  COVER_DOMAINS,
  CLIMATE_DOMAINS,
  TOGGLE_DOMAINS,
  OTHER_DOMAINS,
  DOMAIN_ICONS,
  DEVICE_CLASSES
} from "./helpers";

const UNAVAILABLE_STATES = ["unavailable", "unknown"];
const STATES_OFF = ["off", "closed", "idle"];

@customElement("area-card-elite")
export class AreaCardElite extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistantExtended;
  @state() private _config?: AreaCardEliteConfig;

  setConfig(config: AreaCardEliteConfig): void {
    if (!config.area) {
      throw new Error("Please define an area");
    }
    this._config = {
      display_type: "compact",
      features_position: "bottom",
      features: [],
      alert_classes: DEVICE_CLASSES.binary_sensor,
      sensor_classes: DEVICE_CLASSES.sensor,
      exclude_entities: [],
      ...config
    };
  }

  private _getAreaEntities() {
    if (!this._config?.area || !this.hass?.areas?.[this._config.area]) return [];

    return Object.entries(this.hass.states || {})
      .filter(([entityId, entity]) => {
        if (!entity.attributes?.area_id || this._config?.exclude_entities?.includes(entityId)) return false;
        const [domain] = entityId.split(".");
        return entity.attributes.area_id === this._config?.area && 
               (TOGGLE_DOMAINS.includes(domain) || 
                SENSOR_DOMAINS.includes(domain) || 
                ALERT_DOMAINS.includes(domain) ||
                COVER_DOMAINS.includes(domain) ||
                CLIMATE_DOMAINS.includes(domain) ||
                OTHER_DOMAINS.includes(domain));
      })
      .map(([entityId, entity]) => ({
        entityId,
        state: entity.state,
        attributes: entity.attributes,
        domain: entityId.split(".")[0],
        name: entity.attributes.friendly_name || entityId.split(".")[1],
        deviceClass: entity.attributes.device_class || ""
      }));
  }

  private _getDomainIcon(domain: string, state: string, deviceClass?: string): string {
    if (!(domain in DOMAIN_ICONS)) {
      return "mdi:help-circle";
    }
    
    const icons = DOMAIN_ICONS[domain as keyof typeof DOMAIN_ICONS];
    if (!icons) return "mdi:help-circle";

    const isOn = !STATES_OFF.includes(state) && !UNAVAILABLE_STATES.includes(state);
    
    // Handle device class specific icons
    if (deviceClass && typeof icons === 'object' && deviceClass in icons) {
      const deviceIcons = (icons as any)[deviceClass];
      if (deviceIcons && typeof deviceIcons === 'object' && 'on' in deviceIcons && 'off' in deviceIcons) {
        return isOn ? deviceIcons.on : deviceIcons.off;
      }
    }
    
    // Fallback to default on/off icons
    if (typeof icons === 'object' && 'on' in icons && 'off' in icons) {
      return isOn ? (icons as any).on : (icons as any).off;
    }

    return "mdi:help-circle";
  }

  private _getEntitiesByDomain() {
    const entities = this._getAreaEntities();
    const entitiesByDomain: Record<string, any[]> = {};

    entities.forEach(entity => {
      if (!entitiesByDomain[entity.domain]) {
        entitiesByDomain[entity.domain] = [];
      }
      entitiesByDomain[entity.domain].push(entity);
    });

    return entitiesByDomain;
  }

  private _getActiveEntities(domain: string, deviceClass?: string) {
    const entitiesByDomain = this._getEntitiesByDomain();
    const domainEntities = entitiesByDomain[domain] || [];
    
    return domainEntities.filter(entity => {
      if (deviceClass && entity.deviceClass !== deviceClass) return false;
      return !UNAVAILABLE_STATES.includes(entity.state) && 
             !STATES_OFF.includes(entity.state);
    });
  }

  private _renderButtons() {
    const entitiesByDomain = this._getEntitiesByDomain();
    const toggleDomains = TOGGLE_DOMAINS.filter((domain: string) => 
      domain in entitiesByDomain && entitiesByDomain[domain].length > 0
    );

    return html`
      <div class="buttons">
        ${repeat(
          toggleDomains,
          (domain: string) => domain,
          (domain: string) => {
            const activeEntities = this._getActiveEntities(domain);
            const activeCount = activeEntities.length;
            const isActive = activeCount > 0;
            
            return html`
              <div class="icon-with-count">
                <ha-icon
                  .icon=${this._getDomainIcon(domain, isActive ? "on" : "off")}
                  class=${isActive ? "toggle-on" : "toggle-off"}
                ></ha-icon>
                <span class="active-count ${isActive ? "on" : "off"}">
                  ${activeCount}
                </span>
              </div>
            `;
          }
        )}
      </div>
    `;
  }

  private _renderAlerts() {
    const entitiesByDomain = this._getEntitiesByDomain();
    const alertClasses = this._config?.alert_classes || DEVICE_CLASSES.binary_sensor;
    
    if (!entitiesByDomain.binary_sensor?.length) return nothing;

    return html`
      <div class="alerts">
        ${alertClasses.map((deviceClass: string) => {
          const activeEntities = this._getActiveEntities("binary_sensor", deviceClass);
          const activeCount = activeEntities.length;
          
          if (activeCount === 0) return nothing;
          
          return html`
            <div class="icon-with-count">
              <ha-icon
                .icon=${this._getDomainIcon("binary_sensor", "on", deviceClass)}
                class="alert"
              ></ha-icon>
              <span class="active-count on">${activeCount}</span>
            </div>
          `;
        })}
      </div>
    `;
  }

  private _renderSensors() {
    const entitiesByDomain = this._getEntitiesByDomain();
    const sensorClasses = this._config?.sensor_classes || DEVICE_CLASSES.sensor;
    const area = this.hass?.areas?.[this._config?.area || ""];
    
    if (!entitiesByDomain.sensor?.length) return nothing;

    return html`
      <div class="sensors">
        ${sensorClasses.map((deviceClass: string) => {
          const sensorEntities = entitiesByDomain.sensor.filter((e: any) => 
            e.deviceClass === deviceClass && 
            !UNAVAILABLE_STATES.includes(e.state)
          );
          
          if (sensorEntities.length === 0) return nothing;

          // Check for area-specific sensor
          let value = "";
          if (deviceClass === "temperature" && area?.temperature_entity_id) {
            const areaEntity = this.hass.states[area.temperature_entity_id];
            value = areaEntity ? this.hass.formatEntityState(areaEntity) : "";
          } else if (deviceClass === "humidity" && area?.humidity_entity_id) {
            const areaEntity = this.hass.states[area.humidity_entity_id];
            value = areaEntity ? this.hass.formatEntityState(areaEntity) : "";
          } else {
            // Calculate average
            const validEntities = sensorEntities.filter((e: any) => !isNaN(Number(e.state)));
            if (validEntities.length > 0) {
              const sum = validEntities.reduce((acc: number, e: any) => acc + Number(e.state), 0);
              const avg = sum / validEntities.length;
              const unit = validEntities[0]?.attributes?.unit_of_measurement || "";
              value = `${avg.toFixed(1)}${unit ? ` ${unit}` : ""}`;
            }
          }

          if (!value) return nothing;

          return html`
            <div class="sensor">
              <span class="sensor-value">${value}</span>
            </div>
          `;
        })}
      </div>
    `;
  }

  render() {
    if (!this.hass || !this._config?.area || !this.hass.areas) {
      return html`<ha-card>Loading...</ha-card>`;
    }

    const area = this.hass.areas[this._config.area];
    if (!area) {
      return html`<ha-card>Area not found</ha-card>`;
    }

    const name = this._config.name || area.name;

    return html`
      <ha-card>
        <div class="icon-container">
          ${area.icon ? html`<ha-icon .icon=${area.icon}></ha-icon>` : ''}
        </div>

        <div class="content">
          <div class="right">
            ${this._renderAlerts()}
            ${this._renderButtons()}
          </div>

          <div class="bottom">
            <div class="name">${name}</div>
            ${this._renderSensors()}
          </div>
        </div>
      </ha-card>
    `;
  }

  static getConfigElement() {
    return document.createElement("area-card-elite-editor");
  }

  static getStubConfig(): Partial<AreaCardEliteConfig> {
    return { area: "" };
  }

  static styles = css`
    ha-card {
      overflow: hidden;
      position: relative;
      height: 100%;
      padding: 16px;
    }

    .icon-container {
      position: absolute;
      top: 16px;
      left: 16px;
      color: var(--primary-color);
      z-index: 1;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      min-height: 120px;
    }

    .right {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: auto;
    }

    .buttons, .alerts {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .icon-with-count {
      display: flex;
      align-items: center;
      gap: 4px;
      background: rgba(var(--rgb-primary-text-color), 0.1);
      border: solid 0.025rem rgba(var(--rgb-primary-text-color), 0.15);
      padding: 4px 6px;
      border-radius: 4px;
      min-width: 40px;
    }

    .icon-with-count:hover {
      background-color: rgba(var(--rgb-primary-text-color), 0.15);
    }

    .toggle-on {
      color: var(--primary-text-color);
    }

    .toggle-off {
      color: var(--secondary-text-color);
    }

    .alert {
      color: var(--error-color);
    }

    .active-count.on {
      color: var(--primary-text-color);
      font-weight: bold;
    }

    .active-count.off {
      color: var(--secondary-text-color);
    }

    .bottom {
      margin-top: auto;
    }

    .name {
      font-weight: bold;
      font-size: 1.2em;
      margin-bottom: 8px;
      color: var(--primary-text-color);
    }

    .sensors {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .sensor-value {
      color: var(--secondary-text-color);
      font-size: 0.9em;
    }
  `;
}
