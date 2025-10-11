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

  async connectedCallback() {
    super.connectedCallback();
    await this._loadAreas();
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
    
    // Debug logging to see what's happening
    console.log('Value changed:', {
      type: ev.type,
      tagName: target.tagName,
      configValue: configValue,
      value: value,
      detail: ev.detail
    });
    
    // Handle different event types and components
    if (value === undefined || value === null) {
      // For input events (textfields)
      if (ev.type === 'input' && target.value !== undefined) {
        value = target.value;
      }
      // For select events
      else if (ev.type === 'selected' && target.value !== undefined) {
        value = target.value;
      }
      // For other cases, try target.value
      else if (target.value !== undefined) {
        value = target.value;
      }
    }
    
    // Handle specific components
    if (target.tagName === 'HA-AREA-PICKER') {
      configValue = 'area';
    } else if (target.tagName === 'HA-ENTITY-PICKER') {
      configValue = target.configValue || 'exclude_entities';
    }
    
    // Handle multiple selections (arrays)
    if (target.multiple && Array.isArray(value)) {
      // For multiple selects, value should already be an array
    } else if (target.multiple && typeof value === 'string') {
      // Sometimes single values come as strings for multi-select
      value = [value];
    }
    
    if (configValue && value !== undefined) {
      console.log('Setting config:', configValue, '=', value);
      
      this._config = {
        ...this._config,
        [configValue]: value
      };
      
      fireEvent(this, "config-changed", { config: this._config });
      
      // Force re-render to update UI
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
    return classes.map((cls: string) => ({
      value: cls,
      label: this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.${domain}.${cls}`) || cls
    }));
  }

  protected render() {
    if (!this.hass || !this._config) {
      return nothing;
    }

    const alertOptions = this._buildSelectOptions('binary_sensor');
    const coverOptions = this._buildSelectOptions('cover');
    const sensorOptions = DEVICE_CLASSES.sensor.map((cls: string) => ({
      value: cls,
      label: this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.sensor.${cls}`) || cls
    }));

    return html`
      <div class="card-config">
        <!-- Basic Configuration -->
        <div class="option">
          <ha-area-picker
            .hass=${this.hass}
            .value=${this._config.area}
            .configValue=${"area"}
            label="Area"
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-area-picker>
        </div>

        <div class="option">
          <ha-textfield
            label="Name"
            .configValue=${"name"}
            .value=${this._config.name || ""}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <!-- Display Options -->
        <ha-expansion-panel header="Appearance" outlined>
          <div class="content">
            <div class="option">
              <ha-select
                naturalMenuWidth
                fixedMenuPosition
                label="Display Type"
                .configValue=${"display_type"}
                .value=${this._config.display_type || "compact"}
                @selected=${this._valueChanged}
                @closed=${(ev: Event) => ev.stopPropagation()}
              >
                <mwc-list-item value="compact">Compact</mwc-list-item>
                <mwc-list-item value="icon">Icon</mwc-list-item>
                <mwc-list-item value="picture">Picture</mwc-list-item>
                <mwc-list-item value="camera">Camera</mwc-list-item>
              </ha-select>
            </div>

            <div class="option">
              <ha-textfield
                label="Color"
                type="color"
                .configValue=${"color"}
                .value=${this._config.color || ""}
                @input=${this._valueChanged}
              ></ha-textfield>
            </div>

            <div class="option">
              <ha-textfield
                label="Aspect Ratio"
                .configValue=${"aspect_ratio"}
                .value=${this._config.aspect_ratio || "16:9"}
                @input=${this._valueChanged}
              ></ha-textfield>
            </div>

            ${this._config.display_type === "camera" ? html`
              <div class="option">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${this._config.camera_entity}
                  .configValue=${"camera_entity"}
                  .includeDomains=${["camera"]}
                  .entityFilter=${(entity: any) => entity.attributes?.area_id === this._config?.area}
                  label="Camera Entity"
                  @value-changed=${this._valueChanged}
                ></ha-entity-picker>
              </div>
              <div class="option">
                <ha-select
                  naturalMenuWidth
                  fixedMenuPosition
                  label="Camera View"
                  .configValue=${"camera_view"}
                  .value=${this._config.camera_view || "auto"}
                  @selected=${this._valueChanged}
                  @closed=${(ev: Event) => ev.stopPropagation()}
                >
                  <mwc-list-item value="auto">Auto</mwc-list-item>
                  <mwc-list-item value="live">Live</mwc-list-item>
                </ha-select>
              </div>
            ` : ''}
            
            ${this._config.display_type === "picture" ? html`
              <div class="option">
                <ha-textfield
                  label="Background Image URL"
                  .configValue=${"background_image"}
                  .value=${this._config.background_image || ""}
                  @input=${this._valueChanged}
                  helper="Enter image URL or /local/image.jpg for local files"
                ></ha-textfield>
              </div>
            ` : ''}
          </div>
        </ha-expansion-panel>

        <!-- Alert Classes -->
        <ha-expansion-panel header="Alert Classes" outlined>
          <div class="content">
            <div class="option">
              <ha-select
                multiple
                naturalMenuWidth
                fixedMenuPosition
                label="Alert Classes"
                .configValue=${"alert_classes"}
                .value=${this._config.alert_classes || []}
                @selected=${this._valueChanged}
                @closed=${(ev: Event) => ev.stopPropagation()}
              >
                ${alertOptions.map((option: {value: string, label: string}) => html`
                  <mwc-list-item .value=${option.value}>${option.label}</mwc-list-item>
                `)}
              </ha-select>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Sensor Classes -->
        <ha-expansion-panel header="Sensor Classes" outlined>
          <div class="content">
            <div class="option">
              <ha-select
                multiple
                naturalMenuWidth
                fixedMenuPosition
                label="Sensor Classes"
                .configValue=${"sensor_classes"}
                .value=${this._config.sensor_classes || []}
                @selected=${this._valueChanged}
                @closed=${(ev: Event) => ev.stopPropagation()}
              >
                ${sensorOptions.map((option: {value: string, label: string}) => html`
                  <mwc-list-item .value=${option.value}>${option.label}</mwc-list-item>
                `)}
              </ha-select>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Features -->
        <ha-expansion-panel header="Features" outlined>
          <div class="content">
            <div class="option">
              <ha-select
                multiple
                naturalMenuWidth
                fixedMenuPosition
                label="Features"
                .configValue=${"features"}
                .value=${this._config.features || []}
                @selected=${this._valueChanged}
                @closed=${(ev: Event) => ev.stopPropagation()}
              >
                <mwc-list-item value="area-controls">Area Controls</mwc-list-item>
                <mwc-list-item value="more-info">More Info</mwc-list-item>
                <mwc-list-item value="toggle-all">Toggle All</mwc-list-item>
              </ha-select>
            </div>

            <div class="option">
              <ha-select
                naturalMenuWidth
                fixedMenuPosition
                label="Features Position"
                .configValue=${"features_position"}
                .value=${this._config.features_position || "bottom"}
                @selected=${this._valueChanged}
                @closed=${(ev: Event) => ev.stopPropagation()}
              >
                <mwc-list-item value="bottom">Bottom</mwc-list-item>
                <mwc-list-item value="inline">Inline</mwc-list-item>
              </ha-select>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Advanced -->
        <ha-expansion-panel header="Advanced" outlined>
          <div class="content">
            <div class="option">
              <ha-textfield
                label="Navigation Path"
                .configValue=${"navigation_path"}
                .value=${this._config.navigation_path || ""}
                @input=${this._valueChanged}
              ></ha-textfield>
            </div>

            <div class="option">
              <ha-entity-picker
                .hass=${this.hass}
                .configValue=${"exclude_entities"}
                .value=${this._config.exclude_entities || []}
                .includeDomains=${["light", "switch", "sensor", "binary_sensor"]}
                multiple
                @value-changed=${this._valueChanged}
              ></ha-entity-picker>
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
      ha-select, ha-textfield, ha-entity-picker {
        width: 100%;
      }
    `;
  }
}
