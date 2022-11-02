import {BlipColor, Game, Vector3, World} from '@nativewrappers/client';
import {DarkMarketEvents} from '@typings/darkmarket';
import {Delay} from '../utils/fivem';
import {RegisterNuiProxy} from './cl_utils';

RegisterNuiCallbackType(DarkMarketEvents.FETCH_CRYPTO);
RegisterNuiCallbackType(DarkMarketEvents.MAKE_PURCHASE);
RegisterNuiProxy(DarkMarketEvents.MAKE_PURCHASE);
RegisterNuiCallbackType(DarkMarketEvents.INIATE_TRADE);

on(`__cfx_nui:${DarkMarketEvents.FETCH_CRYPTO}`, (data: any, cb: any) => {
	emitNet(DarkMarketEvents.FETCH_CRYPTO);
	cb({});
});

onNet(DarkMarketEvents.SHOW_CRYPTO_UI, (amount: number) => {
	SendNUIMessage({
		app: 'DARKMARKET',
		method: DarkMarketEvents.SHOW_CRYPTO_UI,
		data: amount,
	});
});

onNet(DarkMarketEvents.PICKUP_WEAPONS, async (coords: Vector3, alertId: number) => {
	const blip = World.createBlip(coords, 5.0);
	blip.Name = 'Drop Off';
	blip.ShowRoute = true;
	blip.Sprite = 175;
	blip.Color = BlipColor.Yellow;
	SetBlipRouteColour(blip.Handle, BlipColor.Yellow);

	const weaponDropTick = setTick(async () => {
		if (Game.PlayerPed.Position.distance(coords) < 5) {
			await Delay(250);
			blip.delete();
			clearTick(weaponDropTick);
		}
	});

	await Delay(10000);
	SendNUIMessage({
		app: 'DARKMARKET',
		method: DarkMarketEvents.SEND_NOTIFICATION,
		data: {
			title: 'Darkmarket Alert',
			bankNotify: alertId,
			message: 'Get to a car, you have 15 minutes.',
		},
	});
});

on(`__cfx_nui:${DarkMarketEvents.INIATE_TRADE}`, (data: any, cb: any) => {
	emitNet(DarkMarketEvents.INIATE_TRADE, data);
	cb({});
});

onNet(DarkMarketEvents.ALERT_SUCCESS, () => {
	SendNUIMessage({
		app: 'DARKMARKET',
		method: DarkMarketEvents.ALERT_SUCCESS,
	});
});

onNet(DarkMarketEvents.ALERT_FAILURE, () => {
	SendNUIMessage({
		app: 'DARKMARKET',
		method: DarkMarketEvents.ALERT_FAILURE,
	});
});

onNet(DarkMarketEvents.NOTIFY_OF_TRADE, (alertId: number) => {
	SendNUIMessage({
		app: 'DARKMARKET',
		method: DarkMarketEvents.SEND_NOTIFICATION,
		data: {
			title: 'Darkmarket Alert',
			bankNotify: alertId,
			message: 'Coins received!',
		},
	});
});

onNet('npwd:spawnWeapons', (coords: any, weaponList: any) => {
	emitNet('pma-inv:world:openInventory', [coords.x, coords.y, coords.z], weaponList);
});
