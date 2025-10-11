import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { AreaCardEliteConfig, HomeAssistantExtended } from "./common";
import { fireEvent } from "custom-card-helpers";
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
  @property({ attribute: false }) public hass!: HomeAssistantExtended;
  @state() protected _config?: AreaCardEliteConfig;

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
    if (!this._config || !ev.detail?.value) {
      return;
    }
    
    const target = ev.target as any;
    const value = ev.detail.value;
    
    if (target.configValue) {
      this._config = {
        ...this._config,
        [target.configValue]: value
      };
    }
    
    fireEvent(this, "config-changed", { config: this._config });
  }

  private _getAreaEntities() {
    if (!this._config?.area || !this.hass?.areas[this._config.area]) return [];

    return Object.entries(this.hass.states)
      .filter(([entityId, entity]) => {
        if (!entity.attributes?.area_id) return false;
        const [domain] = entityId.split(".");
        return entity.attributes.area_id === this._config?.area && 
               (TOGGLE_DOMAINS.includes(domain) || 
                SENSOR_DOMAINS.includes(domain) || 
                ALERT_DOMAINS.includes(domain) ||
                COVER_DOMAINS.includes(domain) ||
                CLIMATE_DOMAINS.includes(domain));
      })
      .map(([entityId, entity]) => ({
        entityId,
        state: entity.state,
        attributes: entity.attributes,
        domain: entityId.split(".")[0],
        name: entity.attributes.friendly_name || entityId.split(".")[1]
      }));
  }

  private _getDeviceClasses(domain: string): string[] {
    if (!this._config?.area) return [];
    
    const entities = this._getAreaEntities().filter(e => e.domain === domain);
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
          <ha-select
            naturalMenuWidth
            fixedMenuPosition
            label="Area"
            .configValue=${"area"}
            .value=${this._config.area}
            @selected=${this._valueChanged}
            @closed=${(ev: Event) => ev.stopPropagation()}
          >
            ${Object.keys(this.hass.areas || {}).map((areaId) => html`
              <mwc-list-item .value=${areaId}>
                ${this.hass.areas[areaId].name}
              </mwc-list-item>
            `)}
          </ha-select>
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
