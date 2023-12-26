import { LovelaceCardConfig } from "custom-card-helpers";

export const CUSTOM_CARD_ID: string = "my-lit-card";

export interface CardConfig extends LovelaceCardConfig {
  title: string;
  element_id: string;
}
