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

  // Add method to get area-filtered entities for selectors
  private _getAreaFilteredEntities(domain: string, deviceClass?: string): string[] {
    if (!this._config?.area) return [];

    return Object.entries(this.hass.states || {})
      .filter(([entityId, entity]) => {
        const [entityDomain] = entityId.split(".");
        if (entityDomain !== domain) return false;
        if (deviceClass && entity.attributes.device_class !== deviceClass) return false;
        return entity.attributes?.area_id === this._config?.area;
      })
      .map(([entityId]) => entityId);
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
    
    // Determine layout classes - FIX THE LOGIC
    const layout = this._config.layout || 'compact';
    const featuresPosition = this._config.features_position || 'bottom';
    const showAreaControls = this._config.features?.includes("area-controls");

    // Get main entity for large background icon
    const mainEntity = this._config.main_entity ? this.hass.states[this._config.main_entity] : null;
    const mainEntityIcon = mainEntity ? this._getDomainIcon(
      mainEntity.entity_id.split('.')[0], 
      mainEntity.state, 
      mainEntity.attributes.device_class
    ) : null;
    
    // Fix color logic - red when unlocked/off, primary color when locked/on
    let mainEntityColor = 'rgba(var(--rgb-primary-text-color), 0.1)'; // Default gray
    if (mainEntity && !UNAVAILABLE_STATES.includes(mainEntity.state)) {
      if (STATES_OFF.includes(mainEntity.state) || mainEntity.state === 'unlocked') {
        mainEntityColor = '#f44336'; // Red when off/unlocked
      } else {
        mainEntityColor = 'var(--primary-color)'; // Primary color when on/locked
      }
    }

    return html`
      <ha-card class="${this._config.display_type || 'compact'} layout-${layout} features-${featuresPosition}">
        <div class="content">
          <!-- Large background entity icon - ONLY for icon display type -->
          ${this._config.display_type === "icon" && mainEntityIcon ? html`
            <div class="main-entity-background ${mainEntity && mainEntity.state === 'locked' ? 'active' : ''} 
              ${mainEntity && mainEntity.state === 'unlocked' ? 'unlocked' : ''}">
              <ha-icon 
                icon="${mainEntityIcon}" 
                @click=${() => this._config?.main_entity && this._handleEntityClick(this._config.main_entity)}
              ></ha-icon>
            </div>
          ` : nothing}

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

          <div class="area-info">
            ${layout === "vertical" || this._config.display_type !== "compact" ? html`
              <div class="area-icon" style="${areaIconColor}">
                <ha-icon icon="${areaIcon}"></ha-icon>
              </div>
            ` : ''}
            
            <div class="area-details">
              <div class="area-name" style="${areaNameColor}">
                ${layout !== "vertical" && this._config.display_type === "compact" ? html`
                  <ha-icon icon="${areaIcon}" style="${areaIconColor}"></ha-icon>
                ` : ''}
                ${areaName}
              </div>
              
              <!-- For vertical layout, show sensors under the name -->
              ${layout === "vertical" ? html`
                <div class="area-sensors">
                  ${this._renderSensors()}
                </div>
              ` : ''}
            </div>
          </div>

          <!-- For non-vertical layouts, show sensors in separate section -->
          ${layout !== "vertical" ? html`
            <div class="sensors-section">
              ${this._renderSensors()}
            </div>
          ` : nothing}

          ${showAreaControls ? html`
            <div class="controls-section">
              ${this._renderAreaControls()}
            </div>
          ` : nothing}

          ${this._renderAlerts()}
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
    }

    /* Main content layout */
    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 120px;
    }

    /* Area info at top */
    .area-info {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .area-name {
      font-size: 1.2em;
      font-weight: bold;
      color: var(--primary-text-color);
    }

    /* Sensors directly under area name - SIMPLE */
    .area-sensors {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 4px;
    }

    .sensors {
      display: flex;
      flex-direction: row;
      gap: 16px;
      flex-wrap: wrap;
    }

    .sensor {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.9em;
      color: var(--secondary-text-color);
    }

    .sensor ha-icon {
      --mdc-icon-size: 16px;
    }

    .sensor-value {
      font-weight: 500;
    }

    /* Large background entity icon - positioned based on features position */
    .main-entity-background {
      position: absolute;
      width: 80px;
      height: 80px;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      /* Add circular border like your dashboard */
      border-radius: 50%;
      background: rgba(var(--rgb-primary-text-color), 0.08);
      border: 2px solid rgba(var(--rgb-primary-text-color), 0.15);
      transition: background-color 0.2s ease, border-color 0.2s ease;
    }

    /* Position based on features position */
    .features-right .main-entity-background {
      bottom: 16px;
      left: 16px;
    }

    .features-left .main-entity-background {
      bottom: 16px;
      right: 16px;
    }

    .features-top .main-entity-background,
    .features-bottom .main-entity-background {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .main-entity-background ha-icon {
      --mdc-icon-size: 40px;
      opacity: 0.8;
      transition: opacity 0.2s ease;
    }

    .main-entity-background:hover {
      background: rgba(var(--rgb-primary-text-color), 0.12);
      border-color: rgba(var(--rgb-primary-text-color), 0.2);
    }

    .main-entity-background:hover ha-icon {
      opacity: 1;
    }

    /* FIXED STATE COLORS - Green when locked/on, red when unlocked/off */
    .main-entity-background.active {
      background: rgba(76, 175, 80, 0.15);
      border-color: #4caf50;
    }

    .main-entity-background.active ha-icon {
      color: #4caf50;
    }

    .main-entity-background.unlocked {
      background: rgba(244, 67, 54, 0.15);
      border-color: #f44336;
    }

    .main-entity-background.unlocked ha-icon {
      color: #f44336;
    }

    /* LAYOUT SUPPORT - Different layouts from editor */
    
    /* Compact layout */
    .layout-compact .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .layout-compact .area-info {
      flex-direction: row;
      align-items: center;
      gap: 12px;
    }

    .layout-compact .area-sensors {
      margin-top: 0;
      margin-left: 16px;
    }

    /* Horizontal layout */
    .layout-horizontal .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }

    .layout-horizontal .area-info {
      flex-direction: row;
      align-items: center;
    }

    /* Vertical layout - your dashboard style */
    .layout-vertical .content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    /* Hide area icon in icon display mode */
    .icon .area-icon {
      display: none;
    }

    .icon .area-name ha-icon {
      display: none;
    }

    /* FEATURES POSITION SUPPORT - All positions from editor */
    
    /* Controls on the right side - closer to edge */
    .features-right .controls-section {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }

    /* Controls on the left side - closer to edge */
    .features-left .controls-section {
      position: absolute;
      left: 8px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }

    /* Controls at the top */
    .features-top .content {
      flex-direction: column;
    }

    .features-top .controls-section {
      order: 1;
      align-self: center;
      margin-bottom: 16px;
      position: relative;
    }

    /* Controls at the bottom */
    .features-bottom .content {
      flex-direction: column;
    }

    .features-bottom .controls-section {
      order: 3;
      align-self: center;
      margin-top: auto;
      position: relative;
    }

    /* Inline controls */
    .features-inline .controls-section {
      display: inline-flex;
      margin-left: auto;
      position: relative;
    }

    /* Area controls styling */
    .area-controls {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* Horizontal controls for top/bottom positions */
    .features-top .area-controls,
    .features-bottom .area-controls,
    .features-inline .area-controls {
      flex-direction: row;
      gap: 8px;
    }

    .control-button {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(var(--rgb-primary-text-color), 0.1);
      border: 1px solid rgba(var(--rgb-primary-text-color), 0.2);
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .control-button:hover {
      background: rgba(var(--rgb-primary-text-color), 0.15);
    }

    .control-button.active {
      background: rgba(var(--rgb-primary-color), 0.2);
      border-color: var(--primary-color);
    }

    .control-button ha-icon {
      --mdc-icon-size: 24px;
    }

    /* DISPLAY TYPE SUPPORT - All display types from editor */
    
    /* Picture display type */
    .picture .content {
      position: relative;
      color: white;
    }

    .background-image {
      position: absolute;
      top: -16px;
      left: -16px;
      right: -16px;
      bottom: -16px;
      background-size: cover;
      background-position: center;
      border-radius: inherit;
      z-index: 0;
    }

    .picture .area-info,
    .picture .controls-section {
      position: relative;
      z-index: 2;
    }

    .picture .area-name,
    .picture .sensor-value {
      color: white;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    }

    /* Camera display type */
    .camera .content {
      position: relative;
      color: white;
    }

    .camera-view {
      position: absolute;
      top: -16px;
      left: -16px;
      right: -16px;
      bottom: -16px;
      z-index: 0;
    }

    .camera .area-info,
    .camera .controls-section {
      position: relative;
      z-index: 2;
    }

    .camera .area-name,
    .camera .sensor-value {
      color: white;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    }

    /* Icon display type - shows large background icon */
    .icon .main-entity-background {
      display: flex;
    }

    /* Compact display type - hide background icon */
    .compact .main-entity-background {
      display: none;
    }

    /* Alerts in top-right */
    .alerts {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 2;
      display: flex;
      gap: 6px;
    }

    .icon-with-count {
      display: flex;
      align-items: center;
      gap: 4px;
      background: rgba(var(--error-color), 0.15);
      border: 1px solid rgba(var(--error-color), 0.3);
      color: var(--error-color);
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.8em;
      cursor: pointer;
    }

    .alert-label {
      font-size: 11px;
      font-weight: 500;
    }

    /* Features buttons */
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

    /* Make sure everything appears above background */
    .area-info,
    .controls-section,
    .alerts,
    .features {
      position: relative;
      z-index: 2;
    }

    /* Responsive design */
    @media (max-width: 600px) {
      .area-name {
        font-size: 1em;
      }
      
      .control-button {
        width: 40px;
        height: 40px;
      }
      
      .control-button ha-icon {
        --mdc-icon-size: 20px;
      }
    }
  `;
}
