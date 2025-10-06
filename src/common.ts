import { LovelaceCardConfig } from "custom-card-helpers";

export const CUSTOM_CARD_ID: string = "area-card-elite";

export interface AreaCardEliteConfig extends LovelaceCardConfig {
  area: string;
  name?: string;
}

export interface HomeAssistantExtended {
  areas: Record<string, any>;
  states: Record<string, any>;
  formatEntityState: (state: any) => string;
}
