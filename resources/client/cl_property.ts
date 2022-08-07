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

const ClientCachedPlayers = new Map<string, Character>();
onNet('npwd:handleCachedPlayerAdd', (playerCache: Map<string, Character>) => {
  const ssn = Object.keys(playerCache)[0];
  const values: Character = Object.values(playerCache)[0];
  ClientCachedPlayers.set(ssn, values);
  console.log(
    '🚀 ~ file: cl_property.ts ~ line 22 ~ onNet ~ ClientCachedPlayers',
    ClientCachedPlayers,
  );
});

onNet('npwd:handleCachedPlayerRemoval', (playerToRemove: number) => {
  ClientCachedPlayers.delete(playerToRemove.toString());
  console.log(
    '🚀 ~ file: cl_property.ts ~ line 26 ~ onNet ~ ClientCachedPlayers',
    ClientCachedPlayers,
  );
});

onNet('npwd:getOwnedProperties', (properties: OwnedProperty[]) => {
  console.log('🚀 ~ file: cl_property.ts ~ line 18 ~ onNet ~ properties', properties);
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
