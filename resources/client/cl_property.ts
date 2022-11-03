import {Delay} from '../utils/fivem';
import {GiveKey, PropertyEvents} from './../../typings/property';
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

onNet(PropertyEvents.RELOAD_APP, async () => {
	emitNet(PropertyEvents.ADD_PLAYER);
});

onNet('pma:playerLoaded', () => {
	emitNet(PropertyEvents.ADD_PLAYER);
});

// setImmediate(async () => {
//   emitNet(PropertyEvents.ADD_PLAYER);
// });

RegisterNuiCallbackType(PropertyEvents.FETCH_OWNED_PROPERTIES);
RegisterNuiCallbackType(PropertyEvents.GET_PLAYERS);
RegisterNuiCallbackType(PropertyEvents.GIVE_PLAYER_KEY);
RegisterNuiCallbackType(PropertyEvents.FETCH_KEY_HOLDERS);
RegisterNuiCallbackType(PropertyEvents.REMOVE_PLAYER_KEY);

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

on(`__cfx_nui:${PropertyEvents.GIVE_PLAYER_KEY}`, (KeyData: GiveKey, cb: any) => {
	emitNet('pma-property-manager:givePlayerKey', KeyData);
	cb({});
});

onNet(PropertyEvents.GET_PLAYERS, (players: any, source: number) => {
	const playersCopy = {...players};
	delete playersCopy[source];

	SendNUIMessage({
		app: 'PROPERTY',
		method: `${PropertyEvents.GET_PLAYERS}`,
		data: playersCopy,
	});
});

let iterator = 0;
onNet('npwd:property:alert', (alertMsg: string) => {
	SendNUIMessage({
		app: 'PROPERTY',
		method: 'npwd:property:alert',
		data: {
			title: 'Property Alert',
			propertyNotify: (iterator = iterator + 1),
			message: alertMsg,
		},
	});
});

onNet('npwd:property:clearGiveKey', () => {
	SendNUIMessage({
		app: 'PROPERTY',
		method: 'npwd:property:clearGiveKey',
	});
});

on(`__cfx_nui:${PropertyEvents.FETCH_KEY_HOLDERS}`, (property: OwnedProperty, cb: any) => {
	emitNet('pma-property-manager:fetchKeyHolders', property);
	cb({});
});

onNet('npwd:property:returnKeyHolders', (sharedKeys: OwnedProperty) => {
	SendNUIMessage({
		app: 'PROPERTY',
		method: 'npwd:property:returnKeyHolders',
		data: sharedKeys,
	});
});

on(`__cfx_nui:${PropertyEvents.REMOVE_PLAYER_KEY}`, (data: any, cb: any) => {
	emitNet('pma-property-manager:removePlayerKey', data);
	cb({});
});
