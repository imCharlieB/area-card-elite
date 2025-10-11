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
    const sensorOptions = DEVICE_CLASSES.sensor.map((cls: string) => ({
      value: cls,
      label: this.hass.localize(`ui.dialogs.entity_registry.editor.device_classes.sensor.${cls}`) || cls
    }));

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
            .selector=${{ text: {} }}
            .value=${this._config.name || ""}
            .configValue=${"name"}
            .label=${"Name"}
            @value-changed=${this._valueChanged}
          ></ha-selector>
        </div>

        <!-- Display Options -->
        <ha-expansion-panel header="Appearance" outlined>
          <div class="content">
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  select: {
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

            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{ color_rgb: {} }}
                .value=${this._config.color || ""}
                .configValue=${"color"}
                .label=${"Color"}
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
          </div>
        </ha-expansion-panel>

        <!-- Alert Classes -->
        <ha-expansion-panel header="Alert Classes" outlined>
          <div class="content">
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  select: {
                    multiple: true,
                    options: alertOptions.map((opt: any) => ({
                      value: opt.value,
                      label: opt.label
                    }))
                  }
                }}
                .value=${this._config.alert_classes || []}
                .configValue=${"alert_classes"}
                .label=${"Alert Classes"}
                @value-changed=${this._valueChanged}
              ></ha-selector>
            </div>
          </div>
        </ha-expansion-panel>

        <!-- Sensor Classes -->
        <ha-expansion-panel header="Sensor Classes" outlined>
          <div class="content">
            <div class="option">
              <ha-selector
                .hass=${this.hass}
                .selector=${{
                  select: {
                    multiple: true,
                    options: sensorOptions.map((opt: any) => ({
                      value: opt.value,
                      label: opt.label
                    }))
                  }
                }}
                .value=${this._config.sensor_classes || []}
                .configValue=${"sensor_classes"}
                .label=${"Sensor Classes"}
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
                      { value: "inline", label: "Inline" }
                    ]
                  }
                }}
                .value=${this._config.features_position || "bottom"}
                .configValue=${"features_position"}
                .label=${"Features Position"}
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
    `;
  }
}
