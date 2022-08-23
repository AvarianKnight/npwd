export enum PropertyEvents {
  RELOAD_APP = 'npwd:property:reload',
  GET_PLAYERS = 'npwd:property:getOnlinePlayers',
  ADD_PLAYER = 'npwd:property:addPlayerCache',
  REMOVE_PLAYER = 'npwd:property:removePlayerCache',
  FETCH_OWNED_PROPERTIES = 'npwd:property:fetchOwnedProperties',
  GIVE_PLAYER_KEY = 'npwd:property:givePlayerKey',
  REMOVE_PLAYER_KEY = 'npwd:property:removePlayerKey',
}
export interface OwnedProperty {
  id: number;
  name: string;
  rental: boolean;
  owned: boolean;
  pmaUniqueId: number;
  sharedUniqueIds: number[];
  days_absent: number;
  last_logged: number;
  label: string;
}

export interface Player {
  source: number;
  username: string;
  fullname: string;
  ssn: string;
}
