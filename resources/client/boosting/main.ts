import {
	BoostingEvents,
	BoostingProfile,
	BOOSTING_APP,
	Contract,
	PurchaseContract,
} from '../../../typings/boosting';
import './nui';

export const exp = (global as any).exports;

onNet(BoostingEvents.LOAD_BOOSTING_PROFILE, (boostingProfile: BoostingProfile) => {
	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostingEvents.LOAD_BOOSTING_PROFILE,
		data: boostingProfile,
	});
});

//TODO: uncomment playersCopy when done with app.
onNet(BoostingEvents.GET_PLAYERS, (players: any, source: number) => {
	const playersCopy = {...players};
	// delete playersCopy[source];

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

onNet(BoostingEvents.PURCHASE_CONTRACT, (purchaseContract: PurchaseContract) => {
	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostingEvents.PURCHASE_CONTRACT,
		data: purchaseContract,
	});
});
