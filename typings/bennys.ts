export enum BennysEvents {
  GET_VEHICLE_LIST = 'npwd:getVehicleList',
  FREE_VEHICLE = 'npwd:freeVehicle',
  FAIL_IMPOUND = 'npwd:failImpound',
  ABANDON_VEHICLE = 'npwd:abandonVehicle',
  ABANDON_SUCCESS = 'npwd:abandonSuccess',
  ABANDON_FAIL = 'npwd:abandonFail',
}

export interface Vehicle {
  id: number;
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
