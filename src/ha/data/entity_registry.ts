import type { EntityRegistryEntry } from "../types";

export function subscribeEntityRegistry(
  connection: any,
  callback: (entities: EntityRegistryEntry[]) => void
) {
  return connection.subscribeMessage(callback, {
    type: "config/entity_registry/list",
  });
}