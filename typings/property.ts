export enum PropertyEvents {
  RELOAD_APP = 'npwd:property:reload',
  GET_PLAYERS = 'npwd:property:getOnlinePlayers',
  ADD_PLAYER = 'npwd:property:addPlayerCache',
  REMOVE_PLAYER = 'npwd:property:removePlayerCache',
  FETCH_OWNED_PROPERTIES = 'npwd:property:fetchOwnedProperties',
  FETCH_KEY_HOLDERS = 'npwd:property:fetchKeyHolders',
  GIVE_PLAYER_KEY = 'npwd:property:givePlayerKey',
  REQUEST_REMOVE_PLAYER_KEY = 'npwd:property:requestRemovePlayerKey',
  REMOVE_PLAYER_KEY = 'npwd:property:removePlayerKey',
}
export interface OwnedProperty {
  id: number;
  name: string;
  rental: boolean;
  owned: boolean;
  pmaUniqueId: number;
  days_absent: number;
  last_logged: number;
  label: string;
  fullname?: string;
}

export interface Player {
  source: number;
  username: string;
  fullname: string;
  ssn: string;
}
export interface GiveKey {
  players: Player[];
  property: OwnedProperty;
}

export interface PromptType {
  message: string;
  type: string;
  open: boolean;
  data?: any;
}
