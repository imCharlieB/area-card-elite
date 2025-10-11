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

  setConfig(config: AreaCardEliteConfig): void {
    this._config = {
      features: [],
      display_type: "compact",
      aspect_ratio: "16:9",
      camera_view: "auto",
      navigation_path: "",
      alert_classes: [],
      sensor_classes: [],
      features_position: "bottom",
      exclude_entities: [],
      layout: "vertical",
      ...config
    };
  }

  protected _valueChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config) {
      return;
    }
    
    const target = ev.target as any;
    const configValue = target.configValue;
    const value = ev.detail?.value !== undefined ? ev.detail.value : target.value;
    
    if (configValue && value !== undefined) {
      this._config = {
        ...this._config,
        [configValue]: value
      };
      
      fireEvent(this, "config-changed", { config: this._config });
    }
  }

  private _getAreaEntities(domain: string): string[] {
    if (!this._config?.area) return [];
    
    return Object.keys(this.hass.states || {})
      .filter(entityId => {
        const entity = this.hass.states[entityId];
        return entity.attributes?.area_id === this._config?.area && 
               entityId.split(".")[0] === domain;
      });
  }

  private _getDeviceClasses(domain: string): string[] {
    const entities = this._getAreaEntities(domain);
    const classes = entities
      .map(entityId => this.hass.states[entityId]?.attributes?.device_class)
      .filter(Boolean);
    
    return [...new Set(classes)];
  }

  protected render() {
    if (!this.hass || !this._config) {
      return nothing;
    }

    const alertClasses = this._getDeviceClasses('binary_sensor');
    const sensorClasses = this._getDeviceClasses('sensor');

    return html`
      <div class="card-config">
        <!-- Basic Configuration -->
        <div class="option">
          <ha-area-picker
            .hass=${this.hass}
            .value=${this._config.area}
            .configValue=${"area"}
            .label=${"Area (Required)"}
            @value-changed=${this._valueChanged}
          ></ha-area-picker>
        </div>

        <div class="option">
          <paper-input
            .label=${"Custom Name (Optional)"}
            .value=${this._config.name || ""}
            .configValue=${"name"}
            @value-changed=${this._valueChanged}
          ></paper-input>
        </div>

        <!-- Appearance Section -->
        <ha-expansion-panel header="Appearance" outlined>
          <div class="content">
            <div class="option">
              <ha-icon-picker
                .hass=${this.hass}
                .value=${this._config.icon || ""}
                .configValue=${"icon"}
                .label=${"Custom Icon (Optional)"}
                @value-changed=${this._valueChanged}
              ></ha-icon-picker>
            </div>

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  select: {
                    options: [
                      { value: "compact", label: "Compact" },
                      { value: "icon", label: "Icon Only" },
                      { value: "picture", label: "Picture" },
                      { value: "camera", label: "Camera" }
                    ]
                  }
                }}
                .value=${this._config.display_type || "compact"}
                .configValue=${"display_type"}
                .label=${"Display Style"}
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
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${this._config.camera_entity || ""}
                  .configValue=${"camera_entity"}
                  .label=${"Camera Entity"}
                  .includeDomains=${["camera"]}
                  @value-changed=${this._valueChanged}
                ></ha-entity-picker>
              </div>
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{
                    select: {
                      options: [
                        { value: "auto", label: "Auto" },
                        { value: "live", label: "Live Stream" }
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
                <paper-input
                  .label=${"Background Image URL"}
                  .value=${this._config.background_image || ""}
                  .configValue=${"background_image"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <div class="helper-text">Enter image URL or /local/image.jpg for local files</div>
              </div>
            ` : ''}

            <div class="option">
              <paper-input
                .label=${"Theme (Optional)"}
                .value=${this._config.theme || ""}
                .configValue=${"theme"}
                @value-changed=${this._valueChanged}
              ></paper-input>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Alert Classes -->
        ${alertClasses.length > 0 ? html`
          <ha-expansion-panel header="Alert Sensors" outlined>
            <div class="content">
              <div class="helper-text">Select which binary sensor types to display as alerts</div>
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{
                    select: {
                      multiple: true,
                      options: alertClasses.map(cls => ({
                        value: cls,
                        label: this.hass.localize(`component.binary_sensor.device_class.${cls}`) || cls
                      }))
                    }
                  }}
                  .value=${this._config.alert_classes || []}
                  .configValue=${"alert_classes"}
                  .label=${"Alert Types"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
            </div>
          </ha-expansion-panel>
        ` : ''}

        <!-- Sensor Classes -->
        ${sensorClasses.length > 0 ? html`
          <ha-expansion-panel header="Sensor Display" outlined>
            <div class="content">
              <div class="helper-text">Select which sensor types to display</div>
              <div class="option">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{
                    select: {
                      multiple: true,
                      options: sensorClasses.map(cls => ({
                        value: cls,
                        label: this.hass.localize(`component.sensor.device_class.${cls}`) || cls
                      }))
                    }
                  }}
                  .value=${this._config.sensor_classes || []}
                  .configValue=${"sensor_classes"}
                  .label=${"Sensor Types"}
                  @value-changed=${this._valueChanged}
                ></ha-selector>
              </div>
            </div>
          </ha-expansion-panel>
        ` : ''}

        <!-- Advanced -->
        <ha-expansion-panel header="Advanced Options" outlined>
          <div class="content">
            <div class="option">
              <paper-input
                .label=${"Navigation Path (Optional)"}
                .value=${this._config.navigation_path || ""}
                .configValue=${"navigation_path"}
                @value-changed=${this._valueChanged}
              ></paper-input>
              <div class="helper-text">Path to navigate to when card is tapped</div>
            </div>

            <div class="option">
              <ha-entity-picker
                .hass=${this.hass}
                .value=${this._config.exclude_entities || []}
                .configValue=${"exclude_entities"}
                .label=${"Exclude Entities"}
                .includeEntities=${this._getAreaEntities('all')}
                .allowCustomEntity=${false}
                @value-changed=${this._valueChanged}
              ></ha-entity-picker>
              <div class="helper-text">Hide specific entities from this card</div>
            </div>
          </div>
        </ha-expansion-panel>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .option {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .helper-text {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
      ha-expansion-panel {
        --expansion-panel-summary-padding: 16px;
        --expansion-panel-content-padding: 0;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
      }
      ha-area-picker,
      ha-entity-picker,
      ha-icon-picker,
      ha-selector,
      paper-input {
        width: 100%;
      }
      paper-input {
        --paper-input-container-underline: {
          border-bottom: 1px solid var(--divider-color);
        };
        --paper-input-container-underline-focus: {
          border-bottom: 2px solid var(--primary-color);
        };
      }
    `;
  }
}
