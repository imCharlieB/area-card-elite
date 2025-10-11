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

    console.log(`Looking for entities in area: ${this._config.area}`);

    const entities = Object.entries(this.hass.states || {})
      .filter(([entityId, entity]) => {
        if (this._config?.exclude_entities?.includes(entityId)) return false;
        
        const [domain] = entityId.split(".");
        const isRelevantDomain = TOGGLE_DOMAINS.includes(domain) || 
                                SENSOR_DOMAINS.includes(domain) || 
                                ALERT_DOMAINS.includes(domain) ||
                                COVER_DOMAINS.includes(domain) ||
                                CLIMATE_DOMAINS.includes(domain) ||
                                OTHER_DOMAINS.includes(domain);
        
        if (!isRelevantDomain) return false;

        // Check if entity belongs to the area
        const belongsToArea = entity.attributes?.area_id === this._config?.area;
        
        return belongsToArea;
      })
      .map(([entityId, entity]) => ({
        entityId,
        state: entity.state,
        attributes: entity.attributes,
        domain: entityId.split(".")[0],
        name: entity.attributes.friendly_name || entityId.split(".")[1],
        deviceClass: entity.attributes.device_class || ""
      }));

    console.log(`Found ${entities.length} entities in area ${this._config.area}:`, entities);
    
    // Log specifically binary_sensor and sensor entities
    const binarySensors = entities.filter(e => e.domain === 'binary_sensor');
    const sensors = entities.filter(e => e.domain === 'sensor');
    console.log(`Binary sensors: ${binarySensors.length}`, binarySensors);
    console.log(`Sensors: ${sensors.length}`, sensors);

    return entities;
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

  private _renderSensors() {
    if (!this._config) return nothing;

    const sensors = [];
    
    // Temperature sensor with colored icon
    if (this._config.temperature_entity && this.hass.states[this._config.temperature_entity]) {
      const entity = this.hass.states[this._config.temperature_entity];
      if (!UNAVAILABLE_STATES.includes(entity.state)) {
        const temp = parseFloat(entity.state);
        let tempColor = "#03a9f4"; // Default blue
        if (!isNaN(temp)) {
          if (temp >= 80) tempColor = "#f44336"; // Hot - red
          else if (temp >= 75) tempColor = "#ff9800"; // Warm - orange  
          else if (temp >= 70) tempColor = "#ffc107"; // Mild - yellow
          else if (temp >= 60) tempColor = "#4caf50"; // Cool - green
          else tempColor = "#03a9f4"; // Cold - blue
        }
        
        sensors.push({
          icon: "mdi:thermometer",
          value: this.hass.formatEntityState(entity),
          deviceClass: "temperature",
          color: tempColor
        });
      }
    }

    // Humidity sensor
    if (this._config.humidity_entity && this.hass.states[this._config.humidity_entity]) {
      const entity = this.hass.states[this._config.humidity_entity];
      if (!UNAVAILABLE_STATES.includes(entity.state)) {
        sensors.push({
          icon: "mdi:water-percent",
          value: this.hass.formatEntityState(entity),
          deviceClass: "humidity",
          color: "#2196f3"
        });
      }
    }

    // Other sensors with appropriate colors...
    if (this._config.illuminance_entity && this.hass.states[this._config.illuminance_entity]) {
      const entity = this.hass.states[this._config.illuminance_entity];
      if (!UNAVAILABLE_STATES.includes(entity.state)) {
        sensors.push({
          icon: "mdi:brightness-6",
          value: this.hass.formatEntityState(entity),
          deviceClass: "illuminance",
          color: "#ffeb3b"
        });
      }
    }

    if (this._config.power_entity && this.hass.states[this._config.power_entity]) {
      const entity = this.hass.states[this._config.power_entity];
      if (!UNAVAILABLE_STATES.includes(entity.state)) {
        sensors.push({
          icon: "mdi:flash",
          value: this.hass.formatEntityState(entity),
          deviceClass: "power",
          color: "#ff9800"
        });
      }
    }

    if (this._config.energy_entity && this.hass.states[this._config.energy_entity]) {
      const entity = this.hass.states[this._config.energy_entity];
      if (!UNAVAILABLE_STATES.includes(entity.state)) {
        sensors.push({
          icon: "mdi:lightning-bolt",
          value: this.hass.formatEntityState(entity),
          deviceClass: "energy",
          color: "#9c27b0"
        });
      }
    }

    if (this._config.battery_entity && this.hass.states[this._config.battery_entity]) {
      const entity = this.hass.states[this._config.battery_entity];
      if (!UNAVAILABLE_STATES.includes(entity.state)) {
        const batteryLevel = Number(entity.state);
        let icon = "mdi:battery";
        let color = "#4caf50"; // Default green
        
        if (!isNaN(batteryLevel)) {
          if (batteryLevel <= 10) {
            icon = "mdi:battery-outline";
            color = "#f44336"; // Red for critical
          } else if (batteryLevel <= 20) {
            icon = "mdi:battery-20";
            color = "#ff5722"; // Orange-red for low
          } else if (batteryLevel <= 50) {
            icon = "mdi:battery-50";
            color = "#ff9800"; // Orange for medium
          } else {
            icon = "mdi:battery";
            color = "#4caf50"; // Green for good
          }
        }
        
        sensors.push({
          icon: icon,
          value: this.hass.formatEntityState(entity),
          deviceClass: "battery",
          color: color
        });
      }
    }

    if (sensors.length === 0) return nothing;

    return html`
      <div class="sensors">
        ${sensors.map(sensor => html`
          <div class="sensor">
            <ha-icon icon="${sensor.icon}" style="color: ${sensor.color}"></ha-icon>
            <span class="sensor-value">${sensor.value}</span>
          </div>
        `)}
      </div>
    `;
  }

  private _renderAlerts() {
    if (!this._config) return nothing;

    const alerts = [];

    // Motion sensor
    if (this._config.motion_sensor && this.hass.states[this._config.motion_sensor]) {
      const entity = this.hass.states[this._config.motion_sensor];
      if (entity.state === "on") {
        alerts.push({
          icon: "mdi:motion-sensor",
          name: "Motion",
          entityId: this._config.motion_sensor
        });
      }
    }

    // Occupancy sensor
    if (this._config.occupancy_sensor && this.hass.states[this._config.occupancy_sensor]) {
      const entity = this.hass.states[this._config.occupancy_sensor];
      if (entity.state === "on") {
        alerts.push({
          icon: "mdi:account",
          name: "Occupied",
          entityId: this._config.occupancy_sensor
        });
      }
    }

    // Door sensor
    if (this._config.door_sensor && this.hass.states[this._config.door_sensor]) {
      const entity = this.hass.states[this._config.door_sensor];
      if (entity.state === "on") {
        alerts.push({
          icon: "mdi:door-open",
          name: "Door Open",
          entityId: this._config.door_sensor
        });
      }
    }

    // Window sensor
    if (this._config.window_sensor && this.hass.states[this._config.window_sensor]) {
      const entity = this.hass.states[this._config.window_sensor];
      if (entity.state === "on") {
        alerts.push({
          icon: "mdi:window-open-variant",
          name: "Window Open",
          entityId: this._config.window_sensor
        });
      }
    }

    // Additional alert sensors
    if (this._config.additional_alerts) {
      this._config.additional_alerts.forEach(entityId => {
        const entity = this.hass.states[entityId];
        if (entity && entity.state === "on") {
          alerts.push({
            icon: this._getDomainIcon("binary_sensor", "on", entity.attributes.device_class),
            name: entity.attributes.friendly_name || entityId.split(".")[1],
            entityId: entityId
          });
        }
      });
    }

    if (alerts.length === 0) return nothing;

    return html`
      <div class="alerts">
        ${alerts.map(alert => html`
          <div class="icon-with-count alert" @click=${() => this._handleEntityClick(alert.entityId)}>
            <ha-icon icon="${alert.icon}"></ha-icon>
            <span class="alert-label">${alert.name}</span>
          </div>
        `)}
      </div>
    `;
  }

  private _renderAreaControls() {
    if (!this._config) return nothing;

    const controls = [];

    // Main light
    if (this._config.light_entity && this.hass.states[this._config.light_entity]) {
      const entity = this.hass.states[this._config.light_entity];
      const isOn = entity.state === "on";
      controls.push({
        icon: isOn ? "mdi:lightbulb" : "mdi:lightbulb-outline",
        name: entity.attributes.friendly_name || "Light",
        entityId: this._config.light_entity,
        isOn: isOn,
        color: isOn ? "#ffc107" : "#757575"
      });
    }

    // Climate control
    if (this._config.climate_entity && this.hass.states[this._config.climate_entity]) {
      const entity = this.hass.states[this._config.climate_entity];
      const isOn = entity.state !== "off";
      const mode = entity.state;
      let icon = "mdi:thermostat";
      let color = "#757575";
      
      if (mode === "heat") {
        icon = "mdi:fire";
        color = "#f44336";
      } else if (mode === "cool") {
        icon = "mdi:snowflake";
        color = "#2196f3";
      } else if (mode === "auto") {
        icon = "mdi:thermostat-auto";
        color = "#4caf50";
      }

      controls.push({
        icon: icon,
        name: entity.attributes.friendly_name || "Climate",
        entityId: this._config.climate_entity,
        isOn: isOn,
        color: color
      });
    }

    // Main switch
    if (this._config.switch_entity && this.hass.states[this._config.switch_entity]) {
      const entity = this.hass.states[this._config.switch_entity];
      const isOn = entity.state === "on";
      controls.push({
        icon: isOn ? "mdi:toggle-switch" : "mdi:toggle-switch-off",
        name: entity.attributes.friendly_name || "Switch",
        entityId: this._config.switch_entity,
        isOn: isOn,
        color: isOn ? "#4caf50" : "#757575"
      });
    }

    // Fan control
    if (this._config.fan_entity && this.hass.states[this._config.fan_entity]) {
      const entity = this.hass.states[this._config.fan_entity];
      const isOn = entity.state === "on";
      controls.push({
        icon: isOn ? "mdi:fan" : "mdi:fan-off",
        name: entity.attributes.friendly_name || "Fan",
        entityId: this._config.fan_entity,
        isOn: isOn,
        color: isOn ? "#03a9f4" : "#757575"
      });
    }

    // Additional controls
    if (this._config.additional_controls) {
      this._config.additional_controls.forEach(entityId => {
        const entity = this.hass.states[entityId];
        if (entity) {
          const domain = entityId.split(".")[0];
          const isOn = !STATES_OFF.includes(entity.state) && !UNAVAILABLE_STATES.includes(entity.state);
          controls.push({
            icon: this._getDomainIcon(domain, entity.state),
            name: entity.attributes.friendly_name || entityId.split(".")[1],
            entityId: entityId,
            isOn: isOn,
            color: isOn ? "#2196f3" : "#757575"
          });
        }
      });
    }

    if (controls.length === 0) return nothing;

    return html`
      <div class="area-controls">
        ${controls.map(control => html`
          <div class="control-button ${control.isOn ? 'active' : ''}" 
               @click=${() => this._handleControlClick(control.entityId)}>
            <ha-icon icon="${control.icon}" style="color: ${control.color}"></ha-icon>
          </div>
        `)}
      </div>
    `;
  }

  private _handleControlClick(entityId: string) {
    const domain = entityId.split(".")[0];
    
    if (domain === "climate") {
      // Open climate more-info dialog
      this._handleEntityClick(entityId);
    } else {
      // Toggle the entity
      this.hass.callService(domain, "toggle", {}, { entity_id: entityId });
    }
  }

  private _handleEntityClick(entityId: string) {
    const event = new CustomEvent("hass-more-info", {
      detail: { entityId: entityId },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

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

  private _getAreaName(): string {
    if (this._config?.name) return this._config.name;
    
    const area = this._areas[this._config?.area || ""];
    return area?.name || this._config?.area || "Unknown Area";
  }

  private _getAreaIcon(): string {
    if (this._config?.icon) return this._config.icon;
    
    const area = this._areas[this._config?.area || ""];
    return area?.icon || "mdi:home";
  }

  render() {
    if (!this.hass || !this._config) {
      return nothing;
    }

    const areaName = this._getAreaName();
    const areaIcon = this._getAreaIcon();
    
    // Apply custom colors from config
    const areaNameColor = this._config.area_name_color ? `color: ${this._config.area_name_color};` : '';
    const areaIconColor = this._config.area_icon_color ? `color: ${this._config.area_icon_color};` : '';
    
    // Determine layout classes
    const layoutClass = this._config.mirror_card_layout ? 
      `mirror-layout mirror-${this._config.layout || 'vertical'}` : 
      '';

    const showAreaControls = this._config.features?.includes("area-controls");

    return html`
      <ha-card class="${this._config.display_type || 'compact'} ${layoutClass}">
        <div class="content">
          ${this._config.display_type === "picture" && this._config.background_image ? html`
            <div class="background-image" style="background-image: url('${this._config.background_image}')"></div>
          ` : ''}
          
          ${this._config.display_type === "camera" && this._config.camera_entity ? html`
            <hui-image 
              .hass=${this.hass}
              .entity=${this._config.camera_entity}
              .cameraImage=${this._config.camera_view}
              class="camera-view"
            ></hui-image>
          ` : ''}

          <div class="area-info ${this._config.mirror_card_layout ? 'mirror-info' : ''}">
            ${this._config.display_type !== "compact" ? html`
              <div class="area-icon" style="${areaIconColor}">
                <ha-icon icon="${areaIcon}"></ha-icon>
              </div>
            ` : ''}
            
            <div class="area-details">
              <div class="area-name" style="${areaNameColor}">
                ${this._config.display_type === "compact" ? html`
                  <ha-icon icon="${areaIcon}" style="${areaIconColor}"></ha-icon>
                ` : ''}
                ${areaName}
              </div>
              
              ${this._renderAlerts()}
              ${this._renderSensors()}
            </div>
          </div>

          ${showAreaControls ? this._renderAreaControls() : nothing}
          ${this._renderFeatures()}
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
      /* Remove hardcoded sizing to respect user's card size selection */
    }

    /* Mirror Card Layout Styles */
    .mirror-layout {
      display: flex;
      flex-direction: column;
    }

    .mirror-layout.mirror-horizontal {
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }

    .mirror-layout.mirror-vertical {
      flex-direction: column;
      justify-content: center;
    }

    .mirror-layout.mirror-v1 {
      flex-direction: column;
      justify-content: space-between;
    }

    .mirror-layout.mirror-v2 {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .mirror-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .mirror-layout.mirror-vertical .mirror-info {
      flex-direction: column;
      text-align: center;
    }

    .mirror-layout.mirror-horizontal .mirror-info {
      flex-direction: row;
      flex: 1;
    }

    .mirror-layout.mirror-v1 .mirror-info {
      flex-direction: row;
      align-items: flex-start;
    }

    .mirror-layout.mirror-v2 .mirror-info {
      flex-direction: column;
      align-items: flex-start;
    }

    /* Area Info Styles */
    .area-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
    }

    .area-icon {
      font-size: 2.5rem;
      color: var(--primary-color);
    }

    .mirror-layout .area-icon {
      font-size: 2rem;
    }

    .area-details {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .area-name {
      font-weight: bold;
      font-size: 1.2em;
      color: var(--primary-text-color);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .mirror-layout.mirror-vertical .area-name {
      justify-content: center;
    }

    /* Display Type Styles - Updated for better dashboard layout */
    .compact .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      min-height: 80px;
    }

    /* Vertical layout like in your dashboard image */
    .mirror-layout.mirror-vertical .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 16px;
    }

    /* Area info section - left side */
    .mirror-layout.mirror-vertical .area-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      flex: 0 0 auto;
    }

    .mirror-layout.mirror-vertical .area-icon {
      font-size: 2.5rem;
      flex-shrink: 0;
    }

    .mirror-layout.mirror-vertical .area-name {
      font-size: 1.3em;
      font-weight: bold;
      white-space: nowrap;
    }

    /* Sensors section - middle */
    .mirror-layout.mirror-vertical .sensors {
      display: flex;
      gap: 16px;
      align-items: center;
      justify-content: center;
      flex: 1;
      margin: 0 16px;
    }

    .mirror-layout.mirror-vertical .sensor {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      text-align: center;
    }

    .mirror-layout.mirror-vertical .sensor ha-icon {
      --mdc-icon-size: 24px;
      margin-bottom: 4px;
    }

    .mirror-layout.mirror-vertical .sensor-value {
      font-size: 0.9em;
      font-weight: 500;
      white-space: nowrap;
    }

    /* Area controls section - right side */
    .mirror-layout.mirror-vertical .area-controls {
      display: flex;
      gap: 8px;
      align-items: center;
      flex: 0 0 auto;
      margin: 0;
    }

    /* Alert positioning for vertical layout */
    .mirror-layout.mirror-vertical .alerts {
      position: absolute;
      top: 8px;
      right: 8px;
      gap: 4px;
    }

    .mirror-layout.mirror-vertical .alerts .icon-with-count {
      padding: 2px 4px;
      font-size: 0.8em;
      min-width: 24px;
    }

    /* Horizontal layout - keep existing */
    .mirror-layout.mirror-horizontal .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }

    .icon .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 16px;
    }

    .picture .content,
    .camera .content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    /* Background Images */
    .background-image,
    .camera-view {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
      background-position: center;
      border-radius: inherit;
    }

    .picture .area-info,
    .camera .area-info {
      position: relative;
      z-index: 2;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      padding: 16px;
      margin: -16px;
      margin-top: auto;
    }

    .picture .area-name,
    .camera .area-name,
    .picture .sensor-value,
    .camera .sensor-value {
      color: white;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    }

    /* Alert and Sensor Styles */
    .alerts,
    .sensors {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
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

    .picture .icon-with-count,
    .camera .icon-with-count {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(4px);
    }

    .sensor {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .sensor-value {
      color: var(--secondary-text-color);
      font-size: 0.9em;
      font-weight: 500;
    }

    /* Toggle States */
    .toggle-on {
      color: var(--primary-color);
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

    /* Features */
    .features {
      display: flex;
      gap: 8px;
      margin-top: 12px;
      flex-wrap: wrap;
    }

    .features.bottom {
      margin-top: auto;
      padding-top: 12px;
    }

    .features.inline {
      margin-top: 0;
      margin-left: auto;
    }

    .features ha-button {
      --mdc-theme-primary: var(--primary-color);
      font-size: 0.8em;
      min-width: auto;
      padding: 4px 8px;
    }

    /* Area Controls */
    .area-controls {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
    }

    .control-button {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(var(--rgb-primary-text-color), 0.05);
      border: 1px solid rgba(var(--rgb-primary-text-color), 0.12);
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
    }

    .control-button:hover {
      background: rgba(var(--rgb-primary-text-color), 0.1);
      transform: scale(1.05);
    }

    .control-button.active {
      background: rgba(var(--rgb-primary-color), 0.15);
      border-color: var(--primary-color);
    }

    .control-button ha-icon {
      --mdc-icon-size: 24px;
    }

    /* Compact layout - area controls on the right */
    .compact .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .compact .area-controls {
      margin-left: auto;
      margin-top: 0;
    }

    /* Alert label styling */
    .alert-label {
      font-size: 11px;
      font-weight: 500;
      color: var(--error-color);
      margin-left: 4px;
    }

    .alerts .icon-with-count {
      background: rgba(var(--error-color), 0.1);
      border-color: rgba(var(--error-color), 0.3);
      color: var(--error-color);
    }

    /* Responsive Design */
    @media (max-width: 600px) {
      .area-icon {
        font-size: 2rem;
      }
      
      .mirror-layout .area-icon {
        font-size: 1.5rem;
      }
      
      .area-name {
        font-size: 1em;
      }
      
      .icon-with-count {
        min-width: 32px;
        padding: 2px 4px;
      }
    }

    /* Ensure card respects container size */
    :host {
      display: block;
      height: 100%;
    }

    ha-card {
      height: 100%;
      box-sizing: border-box;
    }
  `;
}
