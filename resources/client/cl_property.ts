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

onNet('npwd:getOwnedProperties', (properties: OwnedProperty[]) => {
  emitNet(PropertyEvents.ADD_PLAYER);
  SendNUIMessage({
    app: 'PROPERTY',
    method: 'npwd:getOwnedProperties',
    data: properties,
  });
});

on('onPlayerDropped', () => {
  emitNet(PropertyEvents.REMOVE_PLAYER);
});

RegisterNuiCallbackType('npwd:sendOwnedPropertiesToPhone');
on('__cfx_nui:npwd:sendOwnedPropertiesToPhone', (data: any, cb: any) => {
  emitNet('pma-property-manager:getOwnedProperties');
  cb({});
});

RegisterNuiCallbackType('npwd:property:getOnlinePlayers');
on('__cfx_nui:npwd:property:getOnlinePlayers', (data: any, cb: any) => {
  emitNet(PropertyEvents.GET_PLAYERS);
  cb({});
});

onNet(PropertyEvents.GET_PLAYERS, (players: Map<number, any>) => {
  SendNUIMessage({
    app: 'PROPERTY',
    method: 'npwd:property:getOnlinePlayers',
    data: players,
  });
});
