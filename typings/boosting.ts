export const BOOSTING_APP = 'BOOSTING';

export enum BoostingEvents {
  LOAD_BOOSTING_PROFILE = 'npwd:boosting:loadBoostingProfile',
  JOIN_WAITLIST = 'npwd:boosting:joinWaitList',
  LEAVE_WAITLIST = 'npwd:boosting:leaveWaitList',
  VIEW_CONTRACTS = 'npwd:boosting:viewContracts',
  START_CONTRACT = 'npwd:boosting:startContract',
  TRANSFER_CONTRACT = 'npwd:boosting:transferContract',
}

export interface BoostProfile {
  uid: number;
  level: number;
  experience: string;
}
