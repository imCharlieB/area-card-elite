export interface HomeAssistant {
  connection: any;
  states: { [entity_id: string]: HassEntity };
  config: HassConfig;
  themes: any;
  locale: any;
  callService: (domain: string, service: string, serviceData?: any, target?: any) => Promise<any>;
  formatEntityState: (stateObj: HassEntity) => string;
  localize: (key: string, ...args: any[]) => string;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: { [key: string]: any };
  context: any;
  last_changed: string;
  last_updated: string;
}

export interface HassConfig {
  unit_system: {
    temperature: string;
    length: string;
    mass: string;
    volume: string;
  };
}

export interface AreaRegistryEntry {
  area_id: string;
  name: string;
  picture?: string;
  icon?: string;
  temperature_entity_id?: string;
  humidity_entity_id?: string;
}

export interface DeviceRegistryEntry {
  id: string;
  area_id?: string;
  name?: string;
}

export interface EntityRegistryEntry {
  entity_id: string;
  device_id?: string;
  area_id?: string;
  hidden_by?: string;
  labels?: string[];
}

export interface LovelaceCardConfig {
  type: string;
  [key: string]: any;
}

export interface LovelaceCard {
  hass?: HomeAssistant;
  getCardSize(): number;
  setConfig(config: LovelaceCardConfig): void;
}

export interface LovelaceGridOptions {
  columns: number;
  rows: number;
  min_columns: number;
  min_rows: number;
}

export interface ActionConfig {
  action: string;
  [key: string]: any;
}

export interface ActionHandlerEvent {
  detail: {
    action: string;
  };
}