import type { DeviceRegistryEntry } from "../types";

export function subscribeDeviceRegistry(
  connection: any,
  callback: (devices: DeviceRegistryEntry[]) => void
) {
  return connection.subscribeMessage(callback, {
    type: "config/device_registry/list",
  });
}