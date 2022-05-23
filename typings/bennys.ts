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
}

export interface Impound {
  regularFee: number;
  policeFee: number;
}
