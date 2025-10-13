export const SENSOR_DOMAINS = ["sensor"];
export const ALERT_DOMAINS = ["binary_sensor"];
export const COVER_DOMAINS = ["cover"];
export const CLIMATE_DOMAINS = ["climate"];
export const OTHER_DOMAINS = ["camera"];
export const TOGGLE_DOMAINS = [
  "light",
  "switch",
  "fan",
  "media_player",
  "lock",
  "vacuum",
  "cover",
  "script",
  "scene",
];

export const DEVICE_CLASSES = {
  sensor: ["temperature", "humidity", "power", "energy", "battery", "illuminance"],
  binary_sensor: ["motion", "window", "door", "moisture", "smoke", "gas", "occupancy"],
  cover: ["garage", "door", "window", "blind", "curtain", "shutter"],
};

export const DOMAIN_ICONS = {
  alarm_control_panel: { on: "mdi:shield-alert", off: "mdi:shield-check" },
  siren: { on: "mdi:bell-ring", off: "mdi:bell-outline" },
  lock: { locked: "mdi:lock", unlocked: "mdi:lock-open-outline", on: "mdi:lock", off: "mdi:lock-open-outline" },
  light: { on: "mdi:lightbulb", off: "mdi:lightbulb-outline" },
  media_player: { on: "mdi:speaker-wireless", off: "mdi:speaker" },
  climate: { on: "mdi:thermostat", off: "mdi:thermostat" },
  humidifier: { on: "mdi:air-humidifier", off: "mdi:air-humidifier-outline" },
  switch: {
    on: "mdi:toggle-switch",
    off: "mdi:toggle-switch-outline",
    switch: { on: "mdi:toggle-switch", off: "mdi:toggle-switch-outline" },
    outlet: { on: "mdi:power-plug", off: "mdi:power-plug-outline" },
  },
  vacuum: { on: "mdi:robot-vacuum", off: "mdi:robot-vacuum-variant" },
  lawn_mower: { on: "mdi:robot-mower", off: "mdi:robot-mower-outline" },
  fan: { on: "mdi:fan", off: "mdi:fan-off" },
  cover: {
    on: "mdi:garage-open",
    off: "mdi:garage",
    garage: { on: "mdi:garage-open", off: "mdi:garage" },
    door: { on: "mdi:door-open", off: "mdi:door-closed" },
    gate: { on: "mdi:gate-open", off: "mdi:gate" },
    blind: { on: "mdi:blinds-open", off: "mdi:blinds" },
    curtain: { on: "mdi:curtains", off: "mdi:curtains-closed" },
    damper: { on: "mdi:valve-open", off: "mdi:valve-closed" },
    awning: { on: "mdi:awning-outline", off: "mdi:awning-outline" },
    shutter: { on: "mdi:window-shutter-open", off: "mdi:window-shutter" },
    shade: { on: "mdi:roller-shade", off: "mdi:roller-shade-closed" },
    window: { on: "mdi:window-open", off: "mdi:window-closed" },
  },
  binary_sensor: {
    on: "mdi:radiobox-marked",
    off: "mdi:radiobox-blank",
    motion: { on: "mdi:motion-sensor", off: "mdi:motion-sensor-outline" },
    moisture: { on: "mdi:water-alert", off: "mdi:water" },
    window: { on: "mdi:window-open-variant", off: "mdi:window-closed-variant" },
    door: { on: "mdi:door-open", off: "mdi:door-closed" },
    lock: { on: "mdi:lock-open-variant", off: "mdi:lock" },
    presence: { on: "mdi:home-account", off: "mdi:home-outline" },
    occupancy: { on: "mdi:account-check", off: "mdi:account-outline" },
    vibration: { on: "mdi:vibrate", off: "mdi:vibrate-off" },
    opening: { on: "mdi:shield-lock-open-outline", off: "mdi:shield-lock-outline" },
    garage_door: { on: "mdi:garage-open-variant", off: "mdi:garage-variant" },
    problem: {
      on: "mdi:alert-circle",
      off: "mdi:check-circle-outline",
    },
    smoke: {
      on: "mdi:smoke-detector-variant",
      off: "mdi:smoke-detector-variant-outline",
    },
    running: { on: "mdi:play-circle", off: "mdi:pause-circle-outline" },
    plug: { on: "mdi:power-plug", off: "mdi:power-plug-outline" },
    power: { on: "mdi:lightning-bolt", off: "mdi:lightning-bolt-outline" },
    battery: { on: "mdi:battery-alert", off: "mdi:battery" },
    battery_charging: { on: "mdi:battery-charging", off: "mdi:battery" },
    gas: { on: "mdi:gas-cylinder", off: "mdi:gas-cylinder" },
    carbon_monoxide: { on: "mdi:molecule-co", off: "mdi:molecule-co" },
    cold: { on: "mdi:snowflake-alert", off: "mdi:snowflake-variant" },
    heat: { on: "mdi:fire", off: "mdi:fire-circle" },
    connectivity: { on: "mdi:wifi", off: "mdi:wifi-strength-outline" },
    safety: { on: "mdi:shield-alert", off: "mdi:shield-check" },
    sound: { on: "mdi:volume-high", off: "mdi:volume-low" },
    update: { on: "mdi:update", off: "mdi:cloud-check" },
    tamper: { on: "mdi:shield-remove", off: "mdi:shield-check" },
    light: { on: "mdi:lightbulb-on", off: "mdi:lightbulb-outline" },
    moving: { on: "mdi:car", off: "mdi:car-outline" },
  },
  person: { on: "mdi:account", off: "mdi:account-outline" },
  device_tracker: { on: "mdi:map-marker", off: "mdi:map-marker-outline" },
  valve: { on: "mdi:valve-open", off: "mdi:valve-closed" },
  water_heater: { on: "mdi:water-boiler", off: "mdi:water-boiler-alert" },
  remote: { on: "mdi:remote", off: "mdi:remote-off" },
  update: { on: "mdi:package-up", off: "mdi:package-check" },
  air_quality: { on: "mdi:air-filter", off: "mdi:air-filter" },
  camera: { on: "mdi:camera", off: "mdi:camera-outline" },
  calendar: { on: "mdi:calendar-check", off: "mdi:calendar-blank" },
  scene: { on: "mdi:palette", off: "mdi:palette-outline" },
  sensor: { on: "mdi:gauge", off: "mdi:gauge" },
  script: { on: "mdi:script-text-play", off: "mdi:script-text-outline" },
};

/**
 * Color utility functions
 */
export function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result 
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '76, 175, 80'; // Default green fallback
}

export function getStateColors(config: any) {
  return {
    active: {
      color: config?.state_active_color || '#4caf50',
      rgb: hexToRgb(config?.state_active_color || '#4caf50')
    },
    inactive: {
      color: config?.state_inactive_color || '#f44336', 
      rgb: hexToRgb(config?.state_inactive_color || '#f44336')
    }
  };
}