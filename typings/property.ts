export enum PropertyEvents {
  GET_PLAYERS = 'npwd:property:getOnlinePlayers',
  ADD_PLAYER = 'npwd:property:addPlayerCache',
  REMOVE_PLAYER = 'npwd:property:removePlayerCache',
}
export interface OwnedProperty {
  id: number;
  name: string;
  rental: boolean;
  owned: boolean;
  pmaUniqueId: number;
  sharedUniqueIds: string;
  days_absent: number;
  last_logged: number;
  label: string;
}
