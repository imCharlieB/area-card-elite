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
  features_position?: "bottom" | "inline" | "left" | "right" | "top";
  exclude_entities?: string[];
  theme?: string;
  
  // New layout properties
  layout?: "vertical" | "horizontal" | "v1" | "v2" | "compact";
  mirror_card_layout?: boolean;
  area_name_color?: string;
  area_icon_color?: string;
  
  // Main entity for large background icon
  main_entity?: string;
  
  // Specific sensor entity selectors
  temperature_entity?: string;
  humidity_entity?: string;
  illuminance_entity?: string;
  power_entity?: string;
  energy_entity?: string;
  battery_entity?: string;
  
  // Area control entity selectors
  light_entity?: string;
  climate_entity?: string;
  switch_entity?: string;
  fan_entity?: string;
  media_player_entity?: string;
  additional_controls?: string[];
  
  // Alert sensor entity selectors
  motion_sensor?: string;
  occupancy_sensor?: string;
  door_sensor?: string;
  window_sensor?: string;
  moisture_sensor?: string;
  additional_alerts?: string[];

  // Feature toggles
  show_lights_off_button?: boolean;

  // State colors
  state_active_color?: string;
  state_inactive_color?: string;
}
