import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { AreaCardEliteConfig } from "./common";
import { fireEvent } from "custom-card-helpers";
import type { HomeAssistant } from "./ha/types";
import { 
  SENSOR_DOMAINS,
  ALERT_DOMAINS,
  COVER_DOMAINS,
  CLIMATE_DOMAINS,
  TOGGLE_DOMAINS,
  DOMAIN_ICONS,
  DEVICE_CLASSES
} from "./helpers";

export type DisplayType = "compact" | "icon" | "picture" | "camera";

@customElement("area-card-elite-editor")
export class AreaCardEliteEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() protected _config?: AreaCardEliteConfig;
  @state() private _areas: Array<{area_id: string, name: string}> = [];
  @state() private _localImages: string[] = [];

  async connectedCallback() {
    super.connectedCallback();
    await this._loadAreas();
    await this._loadLocalImages();
  }

  private async _loadAreas() {
    try {
      if (this.hass?.connection) {
        const areas = await this.hass.connection.sendMessagePromise({
          type: "config/area_registry/list",
        });
        this._areas = areas || [];
      }
    } catch (error) {
      console.error("Failed to load areas:", error);
      this._areas = [];
    }
  }

  private async _loadLocalImages() {
    try {
      // Get list of local images from Home Assistant
      const images = await this.hass.connection.sendMessagePromise({
        type: "media_player/browse_media",
        media_content_id: "media-source://media_source/local",
        media_content_type: "app"
      });
      
      this._localImages = this._extractImagePaths(images);
    } catch (error) {
      console.error("Failed to load local images:", error);
      this._localImages = [];
    }
  }

  private _extractImagePaths(mediaData: any): string[] {
    const images: string[] = [];
    
    if (mediaData?.children) {
      mediaData.children.forEach((item: any) => {
        if (item.media_content_type?.startsWith('image/')) {
          // Convert media source URL to local path
          const path = item.media_content_id?.replace('media-source://media_source/local/', '/local/');
          if (path) {
            images.push(path);
          }
        }
      });
    }
    
    return images;
  }

  setConfig(config: AreaCardEliteConfig): void {
    this._config = {
      features: [],
      display_type: "compact",
      color: "",
      aspect_ratio: "16:9",
      camera_view: "auto",
      navigation_path: "",
      alert_classes: [],
      sensor_classes: [],
      features_position: "bottom",
      exclude_entities: [],
      layout: "vertical", // Add layout option
      ...config
    };
  }

  protected _valueChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config) {
      return;
    }
    
    const target = ev.target as any;
    let value = ev.detail?.value;
    let configValue = target.configValue;
    
    console.log('Value changed:', {
      type: ev.type,
      tagName: target.tagName,
      configValue: configValue,
      value: value,
      detail: ev.detail
    });
    
    // Handle different event types and components
    if (value === undefined || value === null) {
      if (ev.type === 'input' && target.value !== undefined) {
        value = target.value;
      } else if (target.value !== undefined) {
        value = target.value;
      }
    }
    
    // Handle specific components
    if (target.tagName === 'HA-AREA-PICKER') {
      configValue = 'area';
    } else if (target.tagName === 'HA-ENTITY-PICKER') {
      configValue = target.configValue || 'exclude_entities';
    }
    
    if (configValue && value !== undefined) {
      console.log('Setting config:', configValue, '=', value);
      
      this._config = {
        ...this._config,
        [configValue]: value
      };
      
      fireEvent(this, "config-changed", { config: this._config });
      this.requestUpdate();
    }
  }

  private _getDeviceClasses(domain: string): string[] {
    if (!this._config?.area) return [];
    
    // Get entities from the selected area using entity registry
    const entities = Object.entries(this.hass.states || {})
      .filter(([entityId, entity]) => {
        if (!entity.attributes?.area_id) return false;
        return entity.attributes.area_id === this._config?.area && 
               entityId.split(".")[0] === domain;
      })
      .map(([entityId, entity]) => entity);

    const classes = entities
      .map(e => e.attributes.device_class || "")
      .filter(c => c);
    
    return [...new Set(classes)];
  }

  private _buildSelectOptions(domain: string): Array<{value: string, label: string}> {
    const classes = this._getDeviceClasses(domain);
    
    // Always show common device classes even if none found in area yet
    let allClasses: string[] = [];
    
    if (domain === 'binary_sensor') {
      // Combine found classes with common ones, removing duplicates
      allClasses = [...new Set([...classes, ...DEVICE_CLASSES.binary_sensor])];
    } else if (domain === 'sensor') {
      allClasses = [...new Set([...classes, ...DEVICE_CLASSES.sensor])];
    } else {
      allClasses = classes;
    }
    
    return allClasses.map((cls: string) => ({
      value: cls,
      label: this.hass.localize(`component.${domain}.device_class.${cls}`) || 
             this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.${domain}.${cls}`) || 
             cls.charAt(0).toUpperCase() + cls.slice(1).replace(/_/g, ' ')
    }));
  }

  protected render() {
    if (!this.hass || !this._config) {
      return nothing;
    }

    const alertOptions = this._buildSelectOptions('binary_sensor');

    return html`
      <div class="card-config">
        <!-- Basic Configuration -->
        <div class="option">
          <ha-selector
            .hass=${this.hass}
            .selector=${{ area: {} }}
            .value=${this._config.area}
            .configValue=${"area"}
            .label=${"Area"}
            @value-changed=${this._valueChanged}
          ></ha-selector>
        </div>

        <div class="option">
          <ha-selector
            .hass=${this.hass}
            .selector=${{ entity: {} }}
            .value=${this._config.main_entity || ""}
            .configValue=${"main_entity"}
            .label=${"Main Entity (Large Background Icon)"}
            .helper=${"Choose the main entity whose icon will appear large in the background"}
            @value-changed=${this._valueChanged}
          ></ha-selector>
        </div>

        <!-- Appearance Section -->
        <ha-expansion-panel header="Appearance" outlined>
          <div class="content">
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{ icon: {} }}
                .value=${this._config.icon || ""}
                .configValue=${"icon"}
                .label=${"Area Icon"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{ ui_color: { mode: "hex" } }}
                .value=${this._config.area_name_color || ""}
                .configValue=${"area_name_color"}
                .label=${"Area Name Color"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{ ui_color: { mode: "hex" } }}
                .value=${this._config.area_icon_color || ""}
                .configValue=${"area_icon_color"}
                .label=${"Area Icon Color"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  select: {
                    mode: "dropdown",
                    options: [
                      { value: "compact", label: "Compact" },
                      { value: "icon", label: "Icon" },
                      { value: "picture", label: "Picture" },
                      { value: "camera", label: "Camera" }
                    ]
                  }
                }}
                .value=${this._config.display_type || "compact"}
                .configValue=${"display_type"}
                .label=${"Display Type"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <!-- Layout Options -->
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  select: {
                    options: [
                      { value: "horizontal", label: "Horizontal (Icon | Name | Sensors | Controls)" },
                      { value: "vertical", label: "Vertical (Name/Icon on left, Sensors center, Controls right)" },
                      { value: "compact", label: "Compact (Everything inline)" }
                    ]
                  }
                }}
                .value=${this._config.layout || "compact"}
                .configValue=${"layout"}
                .label=${"Card Layout"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{ ui_color: { mode: "hex" } }}
                .value=${this._config.color || ""}
                .configValue=${"color"}
                .label=${"Card Background Color"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  select: {
                    options: [
                      { value: "16:9", label: "16:9 (Widescreen)" },
                      { value: "4:3", label: "4:3 (Standard)" },
                      { value: "1:1", label: "1:1 (Square)" },
                      { value: "3:2", label: "3:2 (Photo)" }
                    ]
                  }
                }}
                .value=${this._config.aspect_ratio || "16:9"}
                .configValue=${"aspect_ratio"}
                .label=${"Aspect Ratio"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            ${this._config.display_type === "camera" ? html`
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{
                    entity: {
                      domain: "camera"
                    }
                  }}
                  .value=${this._config.camera_entity || ""}
                  .configValue=${"camera_entity"}
                  .label=${"Camera Entity"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{
                    select: {
                      options: [
                        { value: "auto", label: "Auto" },
                        { value: "live", label: "Live" }
                      ]
                    }
                  }}
                  .value=${this._config.camera_view || "auto"}
                  .configValue=${"camera_view"}
                  .label=${"Camera View"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
            ` : ''}
            
            ${this._config.display_type === "picture" ? html`
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{ text: {} }}
                  .value=${this._config.background_image || ""}
                  .configValue=${"background_image"}
                  .label=${"Background Image URL"}
                  .helper=${"Enter image URL or /local/image.jpg for local files"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
            ` : ''}

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{ text: {} }}
                .value=${this._config.theme || ""}
                .configValue=${"theme"}
                .label=${"Theme (optional)"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Sensor Display -->
        <ha-expansion-panel header="Sensor Display" outlined>
          <div class="content">
            <div class="helper-text">Select specific sensors to display on the card</div>
            
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "sensor",
                    device_class: "temperature"
                  }
                }}
                .value=${this._config.temperature_entity || ""}
                .configValue=${"temperature_entity"}
                .label=${"Temperature Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "sensor",
                    device_class: "humidity"
                  }
                }}
                .value=${this._config.humidity_entity || ""}
                .configValue=${"humidity_entity"}
                .label=${"Humidity Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "sensor",
                    device_class: "illuminance"
                  }
                }}
                .value=${this._config.illuminance_entity || ""}
                .configValue=${"illuminance_entity"}
                .label=${"Light Level Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "sensor",
                    device_class: "power"
                  }
                }}
                .value=${this._config.power_entity || ""}
                .configValue=${"power_entity"}
                .label=${"Power Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "sensor",
                    device_class: "energy"
                  }
                }}
                .value=${this._config.energy_entity || ""}
                .configValue=${"energy_entity"}
                .label=${"Energy Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "sensor",
                    device_class: "battery"
                  }
                }}
                .value=${this._config.battery_entity || ""}
                .configValue=${"battery_entity"}
                .label=${"Battery Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Area Controls -->
        <ha-expansion-panel header="Area Controls" outlined>
          <div class="content">
            <div class="helper-text">Select entities to show as clickable control buttons</div>
            
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "light"
                  }
                }}
                .value=${this._config.light_entity || ""}
                .configValue=${"light_entity"}
                .label=${"Main Light"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "climate"
                  }
                }}
                .value=${this._config.climate_entity || ""}
                .configValue=${"climate_entity"}
                .label=${"Climate Control"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "switch"
                  }
                }}
                .value=${this._config.switch_entity || ""}
                .configValue=${"switch_entity"}
                .label=${"Main Switch"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "fan"
                  }
                }}
                .value=${this._config.fan_entity || ""}
                .configValue=${"fan_entity"}
                .label=${"Fan Control"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    multiple: true,
                    domain: ["light", "switch", "fan", "climate", "cover", "media_player"]
                  }
                }}
                .value=${this._config.additional_controls || []}
                .configValue=${"additional_controls"}
                .label=${"Additional Controls"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Alert Sensors -->
        <ha-expansion-panel header="Alert Sensors" outlined>
          <div class="content">
            <div class="helper-text">Select specific binary sensors to show as alerts</div>
            
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "binary_sensor",
                    device_class: "motion"
                  }
                }}
                .value=${this._config.motion_sensor || ""}
                .configValue=${"motion_sensor"}
                .label=${"Motion Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "binary_sensor",
                    device_class: "occupancy"
                  }
                }}
                .value=${this._config.occupancy_sensor || ""}
                .configValue=${"occupancy_sensor"}
                .label=${"Occupancy Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "binary_sensor",
                    device_class: "door"
                  }
                }}
                .value=${this._config.door_sensor || ""}
                .configValue=${"door_sensor"}
                .label=${"Door Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    domain: "binary_sensor",
                    device_class: "window"
                  }
                }}
                .value=${this._config.window_sensor || ""}
                .configValue=${"window_sensor"}
                .label=${"Window Sensor"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    multiple: true,
                    domain: "binary_sensor"
                  }
                }}
                .value=${this._config.additional_alerts || []}
                .configValue=${"additional_alerts"}
                .label=${"Additional Alert Sensors"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Features -->
        <ha-expansion-panel header="Features" outlined>
          <div class="content">
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  select: {
                    multiple: true,
                    options: [
                      { value: "area-controls", label: "Area Controls" },
                      { value: "more-info", label: "More Info" }, 
                      { value: "toggle-all", label: "Toggle All" }
                    ]
                  }
                }}
                .value=${this._config.features || []}
                .configValue=${"features"}
                .label=${"Features"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  select: {
                    options: [
                      { value: "bottom", label: "Bottom" },
                      { value: "inline", label: "Inline" },
                      { value: "top", label: "Top" },
                      { value: "left", label: "Left" },
                      { value: "right", label: "Right" }
                    ]
                  }
                }}
                .value=${this._config.features_position || "bottom"}
                .configValue=${"features_position"}
                .label=${"Features Position (includes controls)"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Advanced -->
        <ha-expansion-panel header="Advanced" outlined>
          <div class="content">
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{ text: {} }}
                .value=${this._config.navigation_path || ""}
                .configValue=${"navigation_path"}
                .label=${"Navigation Path"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  entity: {
                    multiple: true,
                    domain: ["light", "switch", "sensor", "binary_sensor"]
                  }
                }}
                .value=${this._config.exclude_entities || []}
                .configValue=${"exclude_entities"}
                .label=${"Exclude Entities"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>
      </div>
    `;
  }

  private _setLayout(layout: string) {
    if (this._config) {
      this._config = {
        ...this._config,
        mirror_card_layout: true,
        layout: layout as "vertical" | "horizontal" | "v1" | "v2"
      };
      
      fireEvent(this, "config-changed", { config: this._config });
      this.requestUpdate();
    }
  }

  private _layoutChanged(ev: CustomEvent): void {
    if (this._config && ev.detail) {
      const layout = ev.detail.value as "vertical" | "horizontal" | "v1" | "v2";
      
      this._config = {
        ...this._config,
        mirror_card_layout: true,
        layout: layout
      };
      
      fireEvent(this, "config-changed", { config: this._config });
      this.requestUpdate();
    }
  }

  private _configChanged(): void {
    const event = new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .option {
        padding: 4px 0px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .content {
        padding: 12px 4px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      ha-expansion-panel {
        --ha-card-border-radius: 6px;
        border-radius: 6px;
        margin-top: 8px;
      }
      ha-selector {
        width: 100%;
      }
      
      .switch-label {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
      
      .layout-options {
        margin-top: 12px;
      }
      
      .layout-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      
      .layout-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12px;
        border: 2px solid var(--divider-color);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .layout-item:hover {
        border-color: var(--primary-color);
        background-color: var(--primary-color-light);
      }
      
      .layout-item.selected {
        border-color: var(--primary-color);
        background-color: var(--primary-color-light);
      }
      
      .layout-preview {
        width: 40px;
        height: 30px;
        border: 1px solid var(--secondary-text-color);
        border-radius: 4px;
        position: relative;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--card-background-color);
      }
      
      .layout-preview.vertical {
        flex-direction: column;
        gap: 2px;
      }
      
      .layout-preview.horizontal {
        flex-direction: row;
        gap: 2px;
      }
      
      .layout-preview.v1 {
        flex-direction: column;
        gap: 1px;
      }
      
      .layout-preview.v2 {
        flex-direction: row;
        gap: 1px;
      }
      
      .layout-icon {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--primary-text-color);
      }
      
      .layout-text {
        width: 12px;
        height: 2px;
        background-color: var(--secondary-text-color);
        border-radius: 1px;
      }
      
      .layout-preview.vertical .layout-text {
        width: 16px;
      }
      
      .layout-preview.horizontal .layout-text {
        height: 8px;
        width: 16px;
      }
      
      .layout-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        text-align: center;
      }
      
      .layout-item.selected .layout-label {
        color: var(--primary-color);
        font-weight: 500;
      }
      
      .helper-text {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
        font-style: italic;
      }
    `;
  }
}
