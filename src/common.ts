import { LovelaceCardConfig } from "custom-card-helpers";

export const CUSTOM_CARD_ID: string = "area-card-elite";

export interface AreaCardEliteConfig extends LovelaceCardConfig {
  area: string;
  name?: string;
  display_type?: "compact" | "icon" | "picture" | "camera";
  color?: string;
  aspect_ratio?: string;
  camera_view?: "auto" | "live";
  navigation_path?: string;
  alert_classes?: string[];
  sensor_classes?: string[];
  features?: string[];
  features_position?: "bottom" | "inline";
  exclude_entities?: string[];
}
