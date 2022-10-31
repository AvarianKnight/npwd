import {
	BoostingEvents,
	BoostingProfile,
	BOOSTING_APP,
	BoostMissionEvents,
	Contract,
	ContractListAndCoins,
} from '@typings/boosting';
import './nui';

export const exp = (global as any).exports;

export let boosterProfile: BoostingProfile;

onNet(BoostingEvents.LOAD_BOOSTING_PROFILE, (boostingProfile: BoostingProfile) => {
	boosterProfile = boostingProfile;

	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostingEvents.LOAD_BOOSTING_PROFILE,
		data: boostingProfile,
	});
});

onNet(BoostingEvents.GET_PLAYERS, (players: any, source: number) => {
	const playersCopy = {...players};
	delete playersCopy[source];

	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostingEvents.GET_PLAYERS,
		data: playersCopy,
	});
});

onNet(BoostingEvents.FETCH_CONTRACTS, (contractList: Contract[]) => {
	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostingEvents.FETCH_CONTRACTS,
		data: contractList,
	});
});

onNet(BoostingEvents.DELETE_CONTRACT, () => {
	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostingEvents.DELETE_CONTRACT,
	});
});

let iterator = 0;
onNet(BoostingEvents.REWARD_CONTRACT, (boostContract: Contract) => {
	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostingEvents.REWARD_CONTRACT,
		data: boostContract,
	});

	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostingEvents.SEND_NOTIFICATION,
		data: {
			title: 'Bo0ST3Dz',
			boostNotify: (iterator += 1),
			message: 'New Contract available!',
		},
	});

	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostingEvents.LEAVE_WAITLIST,
		data: false,
	});

	emitNet(BoostingEvents.LEAVE_WAITLIST);
});

onNet(BoostingEvents.PURCHASE_CONTRACT, (purchaseContract: ContractListAndCoins) => {
	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostingEvents.PURCHASE_CONTRACT,
		data: purchaseContract,
	});
});

onNet(BoostingEvents.MISSING_EQUIPMENT, (msg: string) => {
	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostingEvents.MISSING_EQUIPMENT,
		data: msg,
	});
});

on(BoostMissionEvents.FAIL_VEHICLE, () => {
	ClearGpsPlayerWaypoint();
	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostingEvents.SEND_NOTIFICATION,
		data: {
			title: 'Bo0ST3Dz',
			boostNotify: (iterator += 1),
			message: 'Failed - contract has been destroyed!',
		},
	});
});
