import type { AreaRegistryEntry } from "../types";

export function subscribeAreaRegistry(
  connection: any,
  callback: (areas: AreaRegistryEntry[]) => void
) {
  return connection.subscribeMessage(callback, {
    type: "config/area_registry/list",
  });
}

export function subscribeOne(connection: any, subscribeFunc: any) {
  return new Promise((resolve) => {
    const unsub = subscribeFunc(connection, (data: any) => {
      unsub();
      resolve(data);
    });
  });
}