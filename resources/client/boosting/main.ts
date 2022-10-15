import {BoostingEvents, BoostingProfile, BOOSTING_APP} from '../../../typings/boosting';
import './nui';

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

onNet(BoostingEvents.DELETE_CONTRACT, () => {
	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostingEvents.DELETE_CONTRACT,
	});
});

onNet(BoostingEvents.REWARD_CONTRACT, () => {
	console.log('Contract rewarded!');
	// SendNUIMessage({
	// 	app: 'BOOSTING',
	// 	method: BoostingEvents.LOAD_BOOSTING_PROFILE,
	// 	data: boostingProfile,
	// });
});
