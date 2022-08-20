import { Player } from './../server/players/player.class';
import { Delay } from '../utils/fivem';
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

onNet('npwd:property:reload', () => {
  emitNet('pma-property-manager:fetchAll');
  emitNet(PropertyEvents.ADD_PLAYER);
});

onNet('pma:playerLoaded', () => {
  emitNet('pma-property-manager:fetchAll');
  emitNet(PropertyEvents.ADD_PLAYER);
});

onNet('npwd:getOwnedProperties', (properties: OwnedProperty[]) => {
  SendNUIMessage({
    app: 'PROPERTY',
    method: 'npwd:getOwnedProperties',
    data: properties,
  });
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

onNet(PropertyEvents.GET_PLAYERS, (players: any, source: number) => {
  const playersCopy = { ...players };
  if (playersCopy[source]) {
    delete playersCopy[source];
  }

  SendNUIMessage({
    app: 'PROPERTY',
    method: 'npwd:property:getOnlinePlayers',
    data: playersCopy,
  });
});
