import type { HomeAssistant, ActionConfig } from "../types";

export function handleAction(
  node: any,
  hass: HomeAssistant,
  config: { [key: string]: ActionConfig | string | undefined },
  action: string
): void {
  let actionConfig: ActionConfig | string | undefined;

  if (action === "tap") {
    actionConfig = config.tap_action;
  } else if (action === "hold") {
    actionConfig = config.hold_action;
  } else if (action === "double_tap") {
    actionConfig = config.double_tap_action;
  }

  if (!actionConfig) {
    actionConfig = { action: "more-info" };
  }

  if (typeof actionConfig === "string") {
    actionConfig = { action: actionConfig };
  }

  switch (actionConfig.action) {
    case "more-info":
      if (actionConfig.entity) {
        fireEvent(node, "hass-more-info", { entityId: actionConfig.entity });
      }
      break;
    case "navigate":
      if (actionConfig.navigation_path) {
        history.pushState(null, "", actionConfig.navigation_path);
        fireEvent(window, "location-changed", {});
      }
      break;
    case "call-service":
      if (actionConfig.service) {
        const [domain, service] = actionConfig.service.split(".");
        hass.callService(domain, service, actionConfig.service_data, actionConfig.target);
      }
      break;
    case "toggle":
      if (actionConfig.entity) {
        const [domain] = actionConfig.entity.split(".");
        hass.callService(domain, "toggle", undefined, { entity_id: actionConfig.entity });
      }
      break;
  }
}

function fireEvent(node: any, type: string, detail: any) {
  const event = new CustomEvent(type, {
    detail,
    bubbles: true,
    composed: true,
  });
  node.dispatchEvent(event);
}