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
  DEVICE_CLASSES,
  getStateColors,
  getAlertColor,
  getTemperatureColor,
  getHumidityIntensity,
  getTemperatureIcon
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

    // Get all entities from the area helper if available
    const areaEntity = this.hass.states[`area.${this._config.area}`];
    let areaEntityIds: string[] = [];

    if (areaEntity?.attributes?.entity_id) {
      areaEntityIds = Array.isArray(areaEntity.attributes.entity_id)
        ? areaEntity.attributes.entity_id
        : [areaEntity.attributes.entity_id];
    }

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

        // Check if entity belongs to the area via area_id attribute
        const hasAreaId = entity.attributes?.area_id === this._config?.area;

        // Check if entity is in the area's entity list
        const inAreaEntityList = areaEntityIds.includes(entityId);

        return hasAreaId || inAreaEntityList;
      })
      .map(([entityId, entity]) => ({
        entityId,
        state: entity.state,
        attributes: entity.attributes,
        domain: entityId.split(".")[0],
        name: entity.attributes.friendly_name || entityId.split(".")[1],
        deviceClass: entity.attributes.device_class || ""
      }));

    return entities;
  }

  private _getDomainIcon(domain: string, state: string, deviceClass?: string): string {
    if (!(domain in DOMAIN_ICONS)) {
      return "mdi:help-circle";
    }

    const icons = DOMAIN_ICONS[domain as keyof typeof DOMAIN_ICONS];
    if (!icons) return "mdi:help-circle";

    // Special handling for locks - check for "locked"/"unlocked" states first
    if (domain === 'lock' && typeof icons === 'object') {
      if (state === 'locked' && 'locked' in icons) {
        return (icons as any).locked;
      }
      if (state === 'unlocked' && 'unlocked' in icons) {
        return (icons as any).unlocked;
      }
    }

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
    
    // Temperature sensor with dynamic icon and colored icon
    if (this._config.temperature_entity && this.hass.states[this._config.temperature_entity]) {
      const entity = this.hass.states[this._config.temperature_entity];
      if (!UNAVAILABLE_STATES.includes(entity.state)) {
        const temp = parseFloat(entity.state);
        const tempColor = getTemperatureColor(temp);
        const tempIcon = getTemperatureIcon(temp);

        sensors.push({
          icon: tempIcon.icon,
          value: this.hass.formatEntityState(entity),
          deviceClass: "temperature",
          color: tempColor.color,
          animate: tempIcon.animate
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
            <ha-icon icon="${sensor.icon}" class="${sensor.animate ? 'temp-icon-animate' : ''}" style="color: ${sensor.color}"></ha-icon>
            <span class="sensor-value">${sensor.value}</span>
          </div>
        `)}
      </div>
    `;
  }

  private _areAnyLightsOn(): boolean {
    if (!this._config?.area) return false;

    // Check all light entities in area
    const entities = this._getAreaEntities();
    const lightEntities = entities.filter(e => e.domain === "light");

    return lightEntities.some(entity => {
      const state = this.hass.states[entity.entityId];
      return state && state.state === "on";
    });
  }

  private _getActiveAlertInfo(): { hasAlert: boolean, color: string, rgb: string, deviceClass?: string } {
    if (!this._config) return { hasAlert: false, color: '#f44336', rgb: '244, 67, 54' };

    let firstAlertDeviceClass: string | undefined;

    // Check motion sensor
    if (this._config.motion_sensor && this.hass.states[this._config.motion_sensor]) {
      const entity = this.hass.states[this._config.motion_sensor];
      if (entity.state === "on") {
        firstAlertDeviceClass = entity.attributes.device_class || 'motion';
        const alertColor = getAlertColor(firstAlertDeviceClass, this._config);
        return { hasAlert: true, ...alertColor, deviceClass: firstAlertDeviceClass };
      }
    }

    // Check occupancy sensor
    // Check occupancy sensor (only treat as alert when explicitly included in alerts)
    if (this._config.occupancy_include_in_alerts === true && this._config.occupancy_sensor && this.hass.states[this._config.occupancy_sensor]) {
      const entity = this.hass.states[this._config.occupancy_sensor];
      if (entity.state === "on") {
        firstAlertDeviceClass = entity.attributes.device_class || 'occupancy';
        const alertColor = getAlertColor(firstAlertDeviceClass, this._config);
        return { hasAlert: true, ...alertColor, deviceClass: firstAlertDeviceClass };
      }
    }

    // Check door sensor
    if (this._config.door_sensor && this.hass.states[this._config.door_sensor]) {
      const entity = this.hass.states[this._config.door_sensor];
      if (entity.state === "on") {
        firstAlertDeviceClass = entity.attributes.device_class || 'door';
        const alertColor = getAlertColor(firstAlertDeviceClass, this._config);
        return { hasAlert: true, ...alertColor, deviceClass: firstAlertDeviceClass };
      }
    }

    // Check window sensor
    if (this._config.window_sensor && this.hass.states[this._config.window_sensor]) {
      const entity = this.hass.states[this._config.window_sensor];
      if (entity.state === "on") {
        firstAlertDeviceClass = entity.attributes.device_class || 'window';
        const alertColor = getAlertColor(firstAlertDeviceClass, this._config);
        return { hasAlert: true, ...alertColor, deviceClass: firstAlertDeviceClass };
      }
    }

    // Check moisture sensor
    if (this._config.moisture_sensor && this.hass.states[this._config.moisture_sensor]) {
      const entity = this.hass.states[this._config.moisture_sensor];
      if (entity.state === "on") {
        firstAlertDeviceClass = entity.attributes.device_class || 'moisture';
        const alertColor = getAlertColor(firstAlertDeviceClass, this._config);
        return { hasAlert: true, ...alertColor, deviceClass: firstAlertDeviceClass };
      }
    }

    // Check additional alert sensors
    if (this._config.additional_alerts) {
      for (const entityId of this._config.additional_alerts) {
        const entity = this.hass.states[entityId];
        if (entity && entity.state === "on") {
          firstAlertDeviceClass = entity.attributes.device_class;
          const alertColor = getAlertColor(firstAlertDeviceClass, this._config);
          return { hasAlert: true, ...alertColor, deviceClass: firstAlertDeviceClass };
        }
      }
    }

    return { hasAlert: false, color: '#f44336', rgb: '244, 67, 54' };
  }

  private _hasActiveAlerts(): boolean {
    return this._getActiveAlertInfo().hasAlert;
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
    // Occupancy sensor - only include as an alert if configured to do so
    if (this._config.occupancy_include_in_alerts === true && this._config.occupancy_sensor && this.hass.states[this._config.occupancy_sensor]) {
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

    // Moisture sensor
    if (this._config.moisture_sensor && this.hass.states[this._config.moisture_sensor]) {
      const entity = this.hass.states[this._config.moisture_sensor];
      if (entity.state === "on") {
        alerts.push({
          icon: "mdi:water-alert",
          name: "Moisture",
          entityId: this._config.moisture_sensor
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

    // Media Player control
    if (this._config.media_player_entity && this.hass.states[this._config.media_player_entity]) {
      const entity = this.hass.states[this._config.media_player_entity];
      const isPlaying = entity.state === "playing";
      const isOn = !STATES_OFF.includes(entity.state) && !UNAVAILABLE_STATES.includes(entity.state);

      let icon = "mdi:speaker-off";
      let color = "#757575";

      if (isPlaying) {
        icon = "mdi:speaker-play";
        color = "#4caf50";
      } else if (isOn) {
        icon = "mdi:speaker";
        color = "#2196f3";
      }

      controls.push({
        icon: icon,
        name: entity.attributes.friendly_name || "Media",
        entityId: this._config.media_player_entity,
        isOn: isOn,
        color: color
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

    // Show lights-off button if configured (defaults to true)
    // The button will work via websocket API when clicked
    const showLightsOffButton = this._config.show_lights_off_button !== false;

    // Check if any lights are on for dynamic icon/color
    const anyLightsOn = this._areAnyLightsOn();
    const lightsIcon = anyLightsOn ? "mdi:lightbulb-group" : "mdi:lightbulb-group-off-outline";
    const lightsColor = anyLightsOn ? "#ffc107" : "#757575";

    // Don't render if no controls AND no lights-off button
    if (controls.length === 0 && !showLightsOffButton) return nothing;

    return html`
      <div class="area-controls">
        ${controls.map(control => html`
          <div class="control-button ${control.isOn ? 'active' : ''}"
               @click=${() => this._handleControlClick(control.entityId)}>
            <ha-icon icon="${control.icon}" style="color: ${control.color}"></ha-icon>
          </div>
        `)}
        ${showLightsOffButton ? html`
          <div class="control-button ${anyLightsOn ? 'active' : ''}"
               title="Toggle all lights"
               @click=${() => this._handleTurnOffAllLights()}>
            <ha-icon icon="${lightsIcon}" style="color: ${lightsColor}"></ha-icon>
          </div>
        ` : nothing}
      </div>
    `;
  }

  private _handleControlClick(entityId: string) {
    // Always open more-info dialog for ALL controls
    this._handleEntityClick(entityId);
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

  private _isEntityActive(entity: any): boolean {
    if (!entity) return false;

    const domain = entity.entity_id.split('.')[0];

    // Unavailable entities are never active
    if (UNAVAILABLE_STATES.includes(entity.state)) {
      return false;
    }

    // For locks: "locked" = active (green), "unlocked" = inactive (red)
    if (domain === 'lock') {
      return entity.state === 'locked';
    }

    // For binary sensors with door/window class: "off" or "closed" = active (good), "on" or "open" = inactive (bad)
    if (domain === 'binary_sensor') {
      const deviceClass = entity.attributes?.device_class;
      if (deviceClass === 'door' || deviceClass === 'window' || deviceClass === 'opening') {
        return entity.state === 'off' || entity.state === 'closed';
      }
    }

    // For covers: "closed" = active, "open" = inactive
    if (domain === 'cover') {
      return entity.state === 'closed';
    }

    // For everything else: use standard logic (on/open = active, off/closed = inactive)
    return !STATES_OFF.includes(entity.state);
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
    
    // Set CSS custom properties for state colors
    const stateColors = getStateColors(this._config);
    const alertInfo = this._getActiveAlertInfo();

    // Get temperature and humidity for weather gradient
    let temperature: number | undefined;
    let humidity: number | undefined;

    if (this._config.temperature_entity && this.hass.states[this._config.temperature_entity]) {
      const tempState = this.hass.states[this._config.temperature_entity].state;
      temperature = parseFloat(tempState);
      if (isNaN(temperature)) temperature = undefined;
    }

    if (this._config.humidity_entity && this.hass.states[this._config.humidity_entity]) {
      const humidityState = this.hass.states[this._config.humidity_entity].state;
      humidity = parseFloat(humidityState);
      if (isNaN(humidity)) humidity = undefined;
    }

    const tempColor = getTemperatureColor(temperature);
    const humidityIntensity = getHumidityIntensity(humidity);

    // Occupancy state and display decisions
    const occupancyEntity = this._config?.occupancy_sensor && this.hass.states[this._config.occupancy_sensor]
      ? this.hass.states[this._config.occupancy_sensor]
      : null;
    const occupancyState = occupancyEntity ? occupancyEntity.state : undefined;
    const isOccupied = occupancyState === "on";
    const occDisplay = this._config?.occupancy_display || "auto";
    const showOccupancyNextToName = occDisplay === "count" || occDisplay === "auto";
    const occColor = this._config?.occupancy_color || "#ffffff";

    const cardStyle = styleMap({
      '--state-active-color': stateColors.active.color,
      '--state-active-rgb': stateColors.active.rgb,
      '--state-inactive-color': stateColors.inactive.color,
      '--state-inactive-rgb': stateColors.inactive.rgb,
      '--alert-color': alertInfo.color,
      '--alert-rgb': alertInfo.rgb,
      '--temp-color': tempColor.color,
      '--temp-rgb': tempColor.rgb,
      '--humidity-intensity': humidityIntensity.toString(),
      // Apply card background color if set
      ...(this._config.color && { backgroundColor: this._config.color })
    });
    
    // Determine layout classes - FIX THE LOGIC
    const layout = this._config.layout || 'compact';
    const featuresPosition = this._config.features_position || 'bottom';
    const showAreaControls = this._config.features?.includes("area-controls");

    // Get main entity for large background icon
    const mainEntity = this._config.main_entity ? this.hass.states[this._config.main_entity] : null;

    return html`
      <ha-card class="${this._config.display_type || 'compact'} layout-${layout} features-${featuresPosition} ${isOccupied ? 'occupied' : ''}" style=${cardStyle}>
        <div class="content">
          <!-- Large background entity icon - ONLY for icon display type -->
          ${this._config.display_type === "icon" && mainEntity ? html`
            <!-- Separate circle background -->
            <div class="main-entity-circle ${this._isEntityActive(mainEntity) ? 'active' : 'inactive'} ${this._hasActiveAlerts() ? 'has-alert' : ''}">
            </div>
            <!-- Separate entity icon - uses proper domain icon -->
            <div class="main-entity-icon"
                 @click=${() => this._config?.main_entity && this._handleEntityClick(this._config.main_entity)}>
              <ha-icon
                icon="${this._getDomainIcon(mainEntity.entity_id.split('.')[0], mainEntity.state, mainEntity.attributes.device_class)}">
              </ha-icon>
            </div>
          ` : nothing}

          ${this._config.display_type === "picture" && this._config.background_image ? html`
            <div class="background-image" style="background-image: url('${this._config.background_image}')"></div>
          ` : ''}

          ${this._config.display_type === "camera" && this._config.camera_entity ? (() => {
            const cameraEntity = this.hass.states[this._config.camera_entity];
            const cameraView = this._config.camera_view || "live";

            // For live view, use hui-image which handles streaming
            // For auto/snapshot, use img with entity_picture
            if (cameraView === "live") {
              return html`
                <hui-image
                  class="camera-view"
                  .hass=${this.hass}
                  .entity=${this._config.camera_entity}
                  .cameraImage=${"live"}
                  .cameraView=${"live"}
                ></hui-image>
              `;
            } else {
              const cameraUrl = cameraEntity?.attributes?.entity_picture || `/api/camera_proxy/${this._config.camera_entity}`;
              return html`
                <img
                  class="camera-view"
                  src="${cameraUrl}"
                  @error=${() => console.error(`Failed to load camera: ${this._config?.camera_entity}`)}
                />
              `;
            }
          })() : ''}

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

                ${showOccupancyNextToName && occupancyEntity ? html`
                  <span class="occupancy-indicator" title="${isOccupied ? 'Occupied' : 'Not occupied'}">
                    <ha-icon icon="mdi:account" style="color: ${occColor}; --mdc-icon-size: 14px"></ha-icon>
                    ${isOccupied ? html`<span class="occupancy-count">1</span>` : nothing}
                  </span>
                ` : ''}
              </div>
              
              <!-- For vertical layout, show sensors under the name -->
              ${layout === "vertical" ? html`
                <div class="area-sensors">
                  ${this._renderSensors()}
                  ${this._renderAlerts()}
                </div>
              ` : ''}
            </div>
          </div>

          <!-- For non-vertical layouts, show sensors in separate section -->
          ${layout !== "vertical" ? html`
            <div class="sensors-section">
              ${this._renderSensors()}
              ${this._renderAlerts()}
            </div>
          ` : nothing}

          ${showAreaControls ? html`
            <div class="controls-section">
              ${this._renderAreaControls()}
            </div>
          ` : nothing}

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

  private async _handleTurnOffAllLights() {
    if (!this._config?.area) return;

    try {
      const conn = (this.hass as any).connection;
      if (!conn) {
        console.error('No websocket connection available');
        return;
      }

      // Get both entity registry and device registry
      const [entities, devices]: [any[], any[]] = await Promise.all([
        conn.sendMessagePromise({ type: "config/entity_registry/list" }),
        conn.sendMessagePromise({ type: "config/device_registry/list" })
      ]);

      // Create a map of device_id -> area_id from device registry
      const deviceAreaMap = new Map();
      devices.forEach((device: any) => {
        if (device.area_id) {
          deviceAreaMap.set(device.id, device.area_id);
        }
      });

      // Filter for light entities in this area
      // Check BOTH entity area_id AND device area_id
      const areaLightIds = entities
        .filter((entity: any) => {
          if (!entity.entity_id.startsWith("light.")) return false;

          // Check if entity has area_id directly
          if (entity.area_id === this._config?.area) return true;

          // Check if entity's device is in this area
          if (entity.device_id && deviceAreaMap.get(entity.device_id) === this._config?.area) {
            return true;
          }

          return false;
        })
        .map((entity: any) => entity.entity_id);

      if (areaLightIds.length === 0) {
        console.log(`No lights found in ${this._config.area}`);
        return;
      }

      // Check if any lights are currently on
      const anyLightsOn = areaLightIds.some(entityId => {
        const state = this.hass.states[entityId];
        return state && state.state === "on";
      });

      // Toggle: if any are on, turn all off; if all off, turn all on
      const action = anyLightsOn ? "turn_off" : "turn_on";
      console.log(`${action === "turn_off" ? "Turning off" : "Turning on"} ${areaLightIds.length} lights in ${this._config.area}:`, areaLightIds);

      await this.hass.callService("light", action, { entity_id: areaLightIds });
    } catch (error) {
      console.error('Error toggling lights:', error);
    }
  }

  // Helper method to convert hex to RGB values
  private _hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result 
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '76, 175, 80'; // Default green fallback
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
      background: var(--ha-card-background, var(--card-background-color));
      container-type: inline-size;
    }

    /* Temperature weather gradient overlay - subtle colored glow based on temp */
    ha-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      pointer-events: none;
      z-index: 0;
      opacity: var(--humidity-intensity, 0.15);
      background: radial-gradient(
        circle at top right,
        rgba(var(--temp-rgb, 76, 175, 80), 0.3) 0%,
        rgba(var(--temp-rgb, 76, 175, 80), 0.15) 40%,
        transparent 70%
      );
      transition: opacity 0.5s ease, background 0.5s ease;
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
      line-height: 1.2;
      margin-bottom: 0px;
    }

    /* Sensors directly under area name - SIMPLE */
    .area-sensors {
      display: flex;
      flex-direction: column;
      gap: 0px;
      margin-top: 2px;
    }

    .sensors {
      display: flex;
      flex-direction: row;
      gap: 12px;
      flex-wrap: wrap;
      align-items: center;
    }

    .sensor {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.85em;
      color: var(--secondary-text-color);
      line-height: 1;
    }

    .sensor ha-icon {
      --mdc-icon-size: 16px;
    }

    .sensor-value {
      font-weight: 500;
    }

    /* Large background circle - separate from icon */
    .main-entity-circle {
      position: absolute;
      width: 320px;  /* Reduced from 400px */
      height: 320px; /* Reduced from 400px */
      z-index: 1;
      border-radius: 50%;
      background: rgba(var(--rgb-primary-text-color), 0.08);
      border: 3px solid rgba(var(--rgb-primary-text-color), 0.15);
      transition: background-color 0.2s ease, border-color 0.2s ease;
    }

    /* Separate icon element - REMOVE SQUARE STYLING */
    .main-entity-icon {
      position: absolute;
      z-index: 2;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      /* Removed width, height, background, border - no more square! */
    }

    .main-entity-icon ha-icon {
      --mdc-icon-size: 80px;
      opacity: 1;
      transition: opacity 0.2s ease, color 0.2s ease;
      /* Remove any default styling that creates squares */
      background: none !important;
      border: none !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      outline: none !important;
    }

    /* Remove old conflicting styles - icon should have NO background or border */
    .main-entity-icon {
      background: none !important;
      border: none !important;
    }
    /* Position based on features position - ADJUSTED FOR LARGER CIRCLE */
    .features-right .main-entity-circle {
      bottom: -200px;  /* Adjusted for 320px circle */
      left: -200px;    /* Adjusted for 320px circle */
    }

    .features-left .main-entity-circle {
      bottom: -200px;  /* Adjusted for 320px circle */
      right: -200px;   /* Adjusted for 320px circle */
    }

    .features-top .main-entity-circle,
    .features-bottom .main-entity-circle {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    /* Position the separate icon element - very close to card corner */
    .features-right .main-entity-icon {
      bottom: 3px;   /* 3px from bottom edge - very close to corner */
      left: 3px;     /* 3px from left edge - very close to corner */
    }

    .features-left .main-entity-icon {
      bottom: 3px;   /* 3px from bottom edge - very close to corner */
      right: 3px;    /* 3px from right edge - very close to corner */
    }

    .features-top .main-entity-icon,
    .features-bottom .main-entity-icon {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    /* Icon color based on state */
    .main-entity-circle.active + .main-entity-icon ha-icon {
      color: #4caf50;
    }

    .main-entity-circle.inactive + .main-entity-icon ha-icon {
      color: #f44336;
    }

    /* Hide unnecessary elements in icon mode */
    .icon .area-icon {
      display: none;
    }

    .icon .area-name ha-icon {
      display: none;
    }

    /* In icon mode, simplify the layout */
    .icon .content {
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
    }

    /* Minimize area info in icon mode - FIXED POSITIONING */
    .icon .area-info {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 3;
      right: auto;
    }

    .icon .area-name {
      font-size: 1.2em;
      font-weight: 600;
      margin-bottom: 2px;
      line-height: 1.2;
      color: var(--primary-text-color);
    }

    .icon .area-sensors {
      margin-top: 0px;
    }

    /* In icon mode, sensors should stack vertically under area name */
    .icon .sensors-section {
      position: absolute;
      top: 40px;
      left: 0px;
      z-index: 3;
    }

    /* Make sure area info stays at top in all icon modes */
    .icon .area-details {
      display: flex;
      flex-direction: column;
      gap: 0px;
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
      position: relative;
      min-height: 200px;
    }

    .layout-vertical .area-info {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
    }

    .layout-vertical .area-details {
      display: flex;
      flex-direction: column;
      gap: 0px;
    }

    .layout-vertical .sensors-section {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: 60px;
      z-index: 3;
    }

    /* Hide area icon in icon display mode */
    .icon .area-icon {
      display: none;
    }

    .icon .area-name ha-icon {
      display: none;
    }

    /* FEATURES POSITION SUPPORT - All positions from editor */
    
    /* Controls on the right side - better aligned */
    .features-right .controls-section {
      position: absolute;
      right: 12px;
      bottom: 12px;
      z-index: 3;
    }

    /* Controls on the left side - better aligned */
    .features-left .controls-section {
      position: absolute;
      left: 12px;
      bottom: 12px;
      z-index: 3;
    }

    /* When controls on left, move area info to right to prevent overlap - applies to ALL display types */
    .features-left .area-info {
      left: auto !important;
      right: 8px;
      text-align: right;
    }

    .features-left .sensors-section {
      left: auto !important;
      right: 8px;
      text-align: right;
    }

    .features-left .sensors {
      justify-content: flex-end;
    }

    .features-left .alerts {
      justify-content: flex-end;
    }

    .features-left .area-details {
      align-items: flex-end;
    }

    /* For vertical layout specifically - controls at bottom right */
    .layout-vertical.features-right .controls-section {
      position: absolute;
      right: 8px;
      bottom: 8px;
      z-index: 3;
    }

    /* Controls at the top */
    .features-top .content {
      flex-direction: column;
    }

    .features-top .controls-section {
      order: 1;
      position: absolute;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
    }

    /* When controls at top, move area info to bottom */
    .features-top .area-info {
      top: auto !important;
      bottom: 8px;
    }

    .features-top .sensors-section {
      top: auto !important;
      bottom: 40px;
    }

    /* Controls at the bottom */
    .features-bottom .content {
      flex-direction: column;
    }

    .features-bottom .controls-section {
      order: 3;
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
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
      width: 40px;
      height: 40px;
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
      --mdc-icon-size: 20px;
    }

    /* Animated icons */
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    /* Spinning fan icon when active */
    .control-button.active ha-icon[icon*="fan"]:not([icon*="off"]) {
      animation: spin 2s linear infinite;
    }

    /* Temperature icon animations for extremes */
    @keyframes fire-flicker {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      25% {
        transform: scale(1.05) rotate(-2deg);
        opacity: 0.9;
      }
      50% {
        transform: scale(0.98) rotate(1deg);
        opacity: 1;
      }
      75% {
        transform: scale(1.03) rotate(-1deg);
        opacity: 0.95;
      }
    }

    @keyframes snowflake-pulse {
      0%, 100% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
      }
      50% {
        transform: scale(1.1) rotate(10deg);
        opacity: 0.85;
      }
    }

    /* Apply animations to temperature icons */
    .sensor ha-icon.temp-icon-animate[icon="mdi:fire"] {
      animation: fire-flicker 1.5s ease-in-out infinite;
    }

    .sensor ha-icon.temp-icon-animate[icon="mdi:snowflake"] {
      animation: snowflake-pulse 2s ease-in-out infinite;
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
      width: calc(100% + 32px);
      height: calc(100% + 32px);
      object-fit: cover;
      z-index: 0;
      border-radius: inherit;
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
    .icon .main-entity-circle {
      display: flex;
    }

    /* Compact display type - hide background icon */
    .compact .main-entity-circle {
      display: none;
    }

    /* Alerts inline with sensors - improved with glow */
    .alerts {
      display: flex;
      flex-direction: row;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 6px;
    }

    .icon-with-count {
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(244, 67, 54, 0.15);
      border: 2px solid rgba(244, 67, 54, 0.6);
      color: #f44336;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 0.85em;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 0 8px rgba(244, 67, 54, 0.3);
      animation: alert-pulse 2s ease-in-out infinite;
    }

    @keyframes alert-pulse {
      0%, 100% {
        box-shadow: 0 0 8px rgba(244, 67, 54, 0.3);
      }
      50% {
        box-shadow: 0 0 16px rgba(244, 67, 54, 0.6), 0 0 24px rgba(244, 67, 54, 0.3);
      }
    }

    .icon-with-count:hover {
      background: rgba(244, 67, 54, 0.25);
      border-color: rgba(244, 67, 54, 0.8);
      box-shadow: 0 0 12px rgba(244, 67, 54, 0.5);
      transform: translateY(-1px);
    }

    .icon-with-count ha-icon {
      --mdc-icon-size: 16px;
      filter: drop-shadow(0 0 2px rgba(244, 67, 54, 0.8));
    }

    .alert-label {
      font-size: 13px;
      font-weight: 600;
      text-shadow: 0 0 4px rgba(244, 67, 54, 0.5);
    }

    /* Position alerts under humidity sensor */
    .icon .area-sensors .alerts {
      margin-top: 8px;
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
        width: 36px;
        height: 36px;
      }

      .control-button ha-icon {
        --mdc-icon-size: 18px;
      }

      .area-controls {
        gap: 8px;
      }
    }

    /* Occupancy indicator next to area name */
    .occupancy-indicator {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: 8px;
      font-size: 0.85em;
      color: var(--secondary-text-color);
      vertical-align: middle;
    }

    .occupancy-indicator ha-icon {
      --mdc-icon-size: 14px;
      filter: drop-shadow(0 0 2px rgba(255,255,255,0.5));
    }

    .occupancy-count {
      font-weight: 600;
      font-size: 0.85em;
      color: var(--primary-text-color);
    }

    /* Soft white whole-card glow when occupied */
    ha-card.occupied {
      transition: box-shadow 0.25s ease, transform 0.25s ease;
      box-shadow: 0 0 18px rgba(255,255,255,0.08) !important;
    }

    ha-card.occupied::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      pointer-events: none;
      z-index: 0;
      background: rgba(255,255,255,0.03);
    }

    /* Make controls scale down for smaller cards */
    @container (max-width: 250px) {
      .control-button {
        width: 36px;
        height: 36px;
      }

      .control-button ha-icon {
        --mdc-icon-size: 18px;
      }

      .area-controls {
        gap: 8px;
      }
    }

    @container (max-width: 200px) {
      .control-button {
        width: 32px;
        height: 32px;
      }

      .control-button ha-icon {
        --mdc-icon-size: 16px;
      }

      .area-controls {
        gap: 6px;
      }
    }

    /* Position based on features position - circle positioning */
    .features-right .main-entity-circle {
      bottom: -190px;  /* Adjusted for 320px circle */
      left: -190px;    /* Adjusted for 320px circle */
    }

    .features-left .main-entity-circle {
      bottom: -190px;  /* Adjusted for 320px circle */
      right: -190px;   /* Adjusted for 320px circle */
    }

    .features-top .main-entity-circle,
    .features-bottom .main-entity-circle {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    /* Circle state colors - both background AND border change with state */
    .main-entity-circle.active {
      background: rgba(var(--state-active-rgb, 76, 175, 80), 0.15);
      border-color: var(--state-active-color, #4caf50);
    }

    .main-entity-circle.inactive {
      background: rgba(var(--state-inactive-rgb, 244, 67, 54), 0.15);
      border-color: var(--state-inactive-color, #f44336);
    }

    /* Icon state colors - icon color also changes with state */
    .main-entity-circle.active + .main-entity-icon ha-icon {
      color: var(--state-active-color, #4caf50);
    }

    .main-entity-circle.inactive + .main-entity-icon ha-icon {
      color: var(--state-inactive-color, #f44336);
    }

    /* Alert glow on circle - uses dynamic alert color based on device class */
    .main-entity-circle.has-alert {
      background: rgba(var(--alert-rgb, 244, 67, 54), 0.25) !important;
      border-color: var(--alert-color, #f44336) !important;
      box-shadow: 0 0 20px rgba(var(--alert-rgb, 244, 67, 54), 0.6), 0 0 40px rgba(var(--alert-rgb, 244, 67, 54), 0.3);
      animation: alert-pulse-circle 2s ease-in-out infinite;
    }

    /* Pulsing grow/shrink animation for circle when alert active */
    @keyframes alert-pulse-circle {
      0%, 100% {
        transform: scale(1);
        background: rgba(var(--alert-rgb, 244, 67, 54), 0.25);
        box-shadow: 0 0 20px rgba(var(--alert-rgb, 244, 67, 54), 0.6), 0 0 40px rgba(var(--alert-rgb, 244, 67, 54), 0.3);
      }
      50% {
        transform: scale(1.05);
        background: rgba(var(--alert-rgb, 244, 67, 54), 0.35);
        box-shadow: 0 0 30px rgba(var(--alert-rgb, 244, 67, 54), 0.8), 0 0 60px rgba(var(--alert-rgb, 244, 67, 54), 0.5);
      }
    }

    /* Alert glow positioning adjustments for different positions */
    .features-right .main-entity-circle.has-alert,
    .features-left .main-entity-circle.has-alert {
      transform-origin: center center;
    }

    .features-top .main-entity-circle.has-alert,
    .features-bottom .main-entity-circle.has-alert {
      animation: alert-pulse-circle-centered 2s ease-in-out infinite;
    }

    @keyframes alert-pulse-circle-centered {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        background: rgba(var(--alert-rgb, 244, 67, 54), 0.25);
        box-shadow: 0 0 20px rgba(var(--alert-rgb, 244, 67, 54), 0.6), 0 0 40px rgba(var(--alert-rgb, 244, 67, 54), 0.3);
      }
      50% {
        transform: translate(-50%, -50%) scale(1.05);
        background: rgba(var(--alert-rgb, 244, 67, 54), 0.35);
        box-shadow: 0 0 30px rgba(var(--alert-rgb, 244, 67, 54), 0.8), 0 0 60px rgba(var(--alert-rgb, 244, 67, 54), 0.5);
      }
    }

    /* Fix area name/temp positioning - closer to top */
    .icon .area-info {
      position: absolute;
      top: 8px;    /* Moved from 16px to 8px - closer to top */
      left: 8px;   /* Moved from 16px to 8px - closer to edge */
      z-index: 3;
    }

    .icon .area-name {
      font-size: 1.3em;  /* Slightly larger */
      font-weight: bold;
      margin-bottom: 4px;  /* Reduced margin */
      color: var(--primary-text-color);
    }

    .icon .area-sensors {
      margin-top: 2px;  /* Reduced from 4px */
    }
  `;
}
