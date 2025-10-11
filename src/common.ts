import { LovelaceCardConfig } from "custom-card-helpers";

export const CUSTOM_CARD_ID: string = "area-card-elite";

export interface AreaCardEliteConfig extends LovelaceCardConfig {
  type: string;
  area?: string;
  name?: string;
  icon?: string;
  display_type?: "compact" | "icon" | "picture" | "camera";
  color?: string;
  aspect_ratio?: string;
  camera_entity?: string;
  camera_view?: "auto" | "live";
  background_image?: string;
  navigation_path?: string;
  alert_classes?: string[];
  sensor_classes?: string[];
  features?: string[];
  features_position?: "bottom" | "inline";
  exclude_entities?: string[];
  theme?: string;
  
  // New layout properties
  layout?: "vertical" | "horizontal" | "v1" | "v2";
  mirror_card_layout?: boolean;
  area_name_color?: string;
  area_icon_color?: string;
  
  // Specific sensor entity selectors
  temperature_entity?: string;
  humidity_entity?: string;
  illuminance_entity?: string;
  power_entity?: string;
  energy_entity?: string;
  battery_entity?: string;
}
