// Home Assistant utility exports
// Using explicit imports to avoid module resolution issues

// Types
import type { HomeAssistant, HassEntity, AreaRegistryEntry, ActionConfig } from "./types";
export type { HomeAssistant, HassEntity, AreaRegistryEntry, ActionConfig };

// Constants
export const UNAVAILABLE = "unavailable";
export const UNKNOWN = "unknown";  
export const STATES_OFF = ["off", "closed", "idle", "standby"];

// Helper functions
export function isNumericState(stateObj: any): boolean {
  return !isNaN(Number(stateObj.state));
}

export function blankBeforeUnit(unit: string, locale: any): string {
  return unit ? " " : "";
}