import type { ActionConfig } from "../types";

export function hasAction(actionConfig: ActionConfig | string | undefined): boolean {
  if (!actionConfig) return false;
  
  if (typeof actionConfig === "string") {
    return actionConfig !== "none";
  }
  
  return actionConfig.action !== "none";
}