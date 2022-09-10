export enum BennysEvents {
  GET_VEHICLE_LIST = 'npwd:getVehicleList',
  FREE_VEHICLE = 'npwd:freeVehicle',
  FAIL_IMPOUND = 'npwd:failImpound',
}

export interface Vehicle {
  plate: string;
  state: number;
  model: string;
  impoundFee?: number;
  police_lock?: string;
  body_health?: number;
  engine_health?: number;
  fuel?: number;
  vehicle?: number;
}

export interface Impound {
  regularFee: number;
  policeFee: number;
}
