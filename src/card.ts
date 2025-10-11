import { LitElement, html, css, PropertyValues, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { repeat } from "lit/directives/repeat.js";
import { AreaCardEliteConfig } from "./common";
import type { HomeAssistant } from "./ha/types";
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
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: AreaCardEliteConfig;
  @state() private _areas: Record<string, any> = {};

  async connectedCallback() {
    super.connectedCallback();
    await this._loadAreas();
    // Force re-render after areas are loaded
    this.requestUpdate();
  }

  protected updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    
    // If hass changed and we don't have areas yet, load them
    if (changedProperties.has('hass') && this.hass && Object.keys(this._areas).length === 0) {
      this._loadAreas().then(() => this.requestUpdate());
    }
  }

  private async _loadAreas() {
    try {
      if (this.hass?.connection) {
        const areas = await this.hass.connection.sendMessagePromise({
          type: "config/area_registry/list",
        });
        this._areas = {};
        areas.forEach((area: any) => {
          this._areas[area.area_id] = area;
        });
      }
    } catch (error) {
      console.error("Failed to load areas:", error);
      this._areas = {};
    }
  }

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
    if (!this._config?.area) return [];

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
    const area = this._areas[this._config?.area || ""];
    
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

  // Add new method to get area cameras
  private _getAreaCameras() {
    if (!this._config?.area) return [];
    
    return Object.entries(this.hass.states || {})
      .filter(([entityId, entity]) => {
        const [domain] = entityId.split(".");
        return domain === "camera" && 
               entity.attributes?.area_id === this._config?.area;
      })
      .map(([entityId, entity]) => ({
        entityId,
        name: entity.attributes.friendly_name || entityId.split(".")[1]
      }));
  }

  // Update the render method to handle different display types
  render() {
    if (!this.hass || !this._config?.area) {
      return html`<ha-card>Loading...</ha-card>`;
    }

    const area = this._areas[this._config.area];
    if (!area) {
      return html`<ha-card>Area not found</ha-card>`;
    }

    const name = this._config.name || area.name;
    const displayType = this._config.display_type || "compact";
    
    // Get background styles based on display type
    const backgroundStyles = this._getBackgroundStyles();
    const cardClasses = {
      'display-compact': displayType === 'compact',
      'display-icon': displayType === 'icon', 
      'display-picture': displayType === 'picture',
      'display-camera': displayType === 'camera'
    };

    return html`
      <ha-card class=${classMap(cardClasses)} style=${styleMap(backgroundStyles)}>
        ${this._renderBackground()}
        
        <div class="icon-container">
          ${this._renderIcon(area)}
        </div>

        <div class="content">
          <div class="right">
            ${this._renderAlerts()}
            ${this._renderButtons()}
          </div>

          <div class="bottom">
            <div class="name">${name}</div>
            ${this._renderSensors()}
            ${this._renderFeatures()}
          </div>
        </div>
      </ha-card>
    `;
  }

  private _getBackgroundStyles() {
    const styles: any = {};
    
    if (this._config?.color) {
      styles['--card-background-color'] = this._config.color;
      styles.backgroundColor = this._config.color;
    }
    
    if (this._config?.aspect_ratio) {
      const ratio = this._config.aspect_ratio.split(':');
      if (ratio.length === 2) {
        const aspectRatio = parseInt(ratio[1]) / parseInt(ratio[0]) * 100;
        styles.aspectRatio = this._config.aspect_ratio;
        styles.paddingBottom = `${aspectRatio}%`;
      }
    }
    
    return styles;
  }

  private _renderBackground() {
    const displayType = this._config?.display_type || "compact";
    
    if (displayType === "camera") {
      const cameras = this._getAreaCameras();
      if (cameras.length > 0) {
        const camera = cameras[0]; // Use first camera found
        return html`
          <div class="camera-background">
            <hui-image
              .hass=${this.hass}
              .entity=${camera.entityId}
              .cameraView=${this._config?.camera_view || "auto"}
            ></hui-image>
          </div>
        `;
      }
    }
    
    if (displayType === "picture" && this._config?.background_image) {
      return html`
        <div class="picture-background" 
             style="background-image: url(${this._config.background_image})">
        </div>
      `;
    }
    
    return nothing;
  }

  private _renderIcon(area: any) {
    const displayType = this._config?.display_type || "compact";
    
    if (!area.icon) return nothing;
    
    if (displayType === "icon") {
      return html`<ha-icon .icon=${area.icon} class="large-icon"></ha-icon>`;
    }
    
    return html`<ha-icon .icon=${area.icon}></ha-icon>`;
  }

  private _renderFeatures() {
    const features = this._config?.features || [];
    const position = this._config?.features_position || "bottom";
    
    if (!features.length) return nothing;
    
    return html`
      <div class="features ${position}">
        ${features.map(feature => {
          switch (feature) {
            case "area-controls":
              return this._renderAreaControls();
            case "more-info":
              return this._renderMoreInfoButton();
            case "toggle-all":
              return this._renderToggleAllButton();
            default:
              return nothing;
          }
        })}
      </div>
    `;
  }

  private _renderAreaControls() {
    return html`
      <ha-button @click=${this._handleAreaControls}>
        <ha-icon icon="mdi:tune"></ha-icon>
        Controls
      </ha-button>
    `;
  }

  private _renderMoreInfoButton() {
    return html`
      <ha-button @click=${this._handleMoreInfo}>
        <ha-icon icon="mdi:information"></ha-icon>
        More Info
      </ha-button>
    `;
  }

  private _renderToggleAllButton() {
    return html`
      <ha-button @click=${this._handleToggleAll}>
        <ha-icon icon="mdi:power"></ha-icon>
        Toggle All
      </ha-button>
    `;
  }

  private _handleAreaControls() {
    if (this._config?.navigation_path) {
      history.pushState(null, "", this._config.navigation_path);
      const event = new CustomEvent("location-changed", {
        bubbles: true,
        composed: true
      });
      window.dispatchEvent(event);
    }
  }

  private _handleMoreInfo() {
    const event = new CustomEvent("hass-more-info", {
      detail: { entityId: `area.${this._config?.area}` },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  private _handleToggleAll() {
    const entities = this._getAreaEntities();
    const toggleEntities = entities.filter(e => TOGGLE_DOMAINS.includes(e.domain));
    
    toggleEntities.forEach(entity => {
      this.hass.callService(entity.domain, "toggle", {}, { entity_id: entity.entityId });
    });
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
      transition: all 0.3s ease;
    }

    /* Display Type Styles */
    .display-compact {
      min-height: 120px;
    }

    .display-icon {
      min-height: 200px;
      text-align: center;
    }

    .display-icon .icon-container {
      position: relative;
      top: auto;
      left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 16px;
    }

    .display-icon .large-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
    }

    .display-picture, .display-camera {
      position: relative;
      min-height: 200px;
    }

    .display-picture .picture-background,
    .display-camera .camera-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background-size: cover;
      background-position: center;
    }

    .display-picture .picture-background {
      opacity: 0.7;
    }

    .display-camera hui-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Overlay for picture/camera modes */
    .display-picture .content,
    .display-camera .content {
      position: relative;
      z-index: 2;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.8) 100%
      );
      height: 100%;
      padding: 16px;
      margin: -16px;
    }

    .display-picture .name,
    .display-camera .name {
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    }

    .display-picture .sensor-value,
    .display-camera .sensor-value {
      color: rgba(255, 255, 255, 0.8);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
    }

    /* Icon Container */
    .icon-container {
      position: absolute;
      top: 16px;
      left: 16px;
      color: var(--primary-color);
      z-index: 3;
    }

    .display-picture .icon-container,
    .display-camera .icon-container {
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    }

    /* Content Layout */
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
      transition: background-color 0.2s ease;
      cursor: pointer;
    }

    .icon-with-count:hover {
      background-color: rgba(var(--rgb-primary-text-color), 0.15);
    }

    .display-picture .icon-with-count,
    .display-camera .icon-with-count {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(4px);
    }

    .display-picture .icon-with-count:hover,
    .display-camera .icon-with-count:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .toggle-on {
      color: var(--primary-text-color);
    }

    .toggle-off {
      color: var(--secondary-text-color);
    }

    .display-picture .toggle-on,
    .display-camera .toggle-on {
      color: white;
    }

    .display-picture .toggle-off,
    .display-camera .toggle-off {
      color: rgba(255, 255, 255, 0.6);
    }

    .alert {
      color: var(--error-color);
    }

    .display-picture .alert,
    .display-camera .alert {
      color: #ff6b6b;
    }

    .active-count.on {
      color: var(--primary-text-color);
      font-weight: bold;
    }

    .active-count.off {
      color: var(--secondary-text-color);
    }

    .display-picture .active-count,
    .display-camera .active-count {
      color: white;
    }

    /* Bottom Section */
    .bottom {
      margin-top: auto;
    }

    .name {
      font-weight: bold;
      font-size: 1.2em;
      margin-bottom: 8px;
      color: var(--primary-text-color);
    }

    .display-icon .name {
      text-align: center;
      font-size: 1.4em;
    }

    .sensors {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .display-icon .sensors {
      text-align: center;
      justify-content: center;
    }

    .sensor-value {
      color: var(--secondary-text-color);
      font-size: 0.9em;
    }

    .display-icon .sensor-value {
      font-size: 1.1em;
      font-weight: 500;
    }

    /* Features */
    .features {
      display: flex;
      gap: 8px;
      margin-top: 8px;
      flex-wrap: wrap;
    }

    .features.inline {
      margin-top: 0;
      margin-left: 8px;
    }

    .features ha-button {
      --mdc-theme-primary: var(--primary-color);
      font-size: 0.8em;
      min-width: auto;
    }

    .display-picture .features ha-button,
    .display-camera .features ha-button {
      --mdc-theme-primary: white;
      --mdc-theme-on-primary: black;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(4px);
      border-radius: 8px;
    }

    /* Responsive adjustments */
    @media (max-width: 600px) {
      .display-icon .large-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
      }
      
      .name {
        font-size: 1em;
      }
      
      .display-icon .name {
        font-size: 1.2em;
      }
    }
  `;
}
