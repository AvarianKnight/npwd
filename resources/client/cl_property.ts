import { PropertyEvents } from './../../typings/property';
interface Character {
  uniqueId: number;
  characterName: string;
}
interface OwnedProperty {
  id: number;
  name: string;
  rental: boolean;
  owned: boolean;
  pmaUniqueId: number;
  sharedUniqueIds: string;
  days_absent: number;
  last_logged: number;
}

RegisterNuiCallbackType(PropertyEvents.FETCH_OWNED_PROPERTIES);
RegisterNuiCallbackType(PropertyEvents.GET_PLAYERS);
RegisterNuiCallbackType(PropertyEvents.GIVE_PLAYER_KEY);
RegisterNuiCallbackType(PropertyEvents.REMOVE_PLAYER_KEY);

onNet(`${PropertyEvents.RELOAD_APP}`, () => {
  emitNet('pma-property-manager:fetchAll');
  emitNet(PropertyEvents.ADD_PLAYER);
});

onNet('pma:playerLoaded', () => {
  emitNet('pma-property-manager:fetchAll');
  emitNet(PropertyEvents.ADD_PLAYER);
});

onNet('npwd:property:getOwnedProperties', (properties: OwnedProperty[]) => {
  SendNUIMessage({
    app: 'PROPERTY',
    method: 'npwd:property:getOwnedProperties',
    data: properties,
  });
});

on(`__cfx_nui:${PropertyEvents.FETCH_OWNED_PROPERTIES}`, (data: any, cb: any) => {
  emitNet('pma-property-manager:getOwnedProperties');
  cb({});
});

on(`__cfx_nui:${PropertyEvents.GET_PLAYERS}`, (data: any, cb: any) => {
  emitNet(PropertyEvents.GET_PLAYERS);
  cb({});
});

onNet(PropertyEvents.GET_PLAYERS, (players: any, source: number) => {
  const playersCopy = { ...players };
  // if (playersCopy[source]) {
  //   delete playersCopy[source];
  // }

  SendNUIMessage({
    app: 'PROPERTY',
    method: `${PropertyEvents.GET_PLAYERS}`,
    data: playersCopy,
  });
});
