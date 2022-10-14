import {BoostingEvents, BoostingProfile} from './../../typings/boosting';

RegisterNuiCallbackType(BoostingEvents.LOAD_BOOSTING_PROFILE);
RegisterNuiCallbackType(BoostingEvents.JOIN_WAITLIST);
RegisterNuiCallbackType(BoostingEvents.LEAVE_WAITLIST);

on(`__cfx_nui:${BoostingEvents.LOAD_BOOSTING_PROFILE}`, (data: any, cb: any) => {
	emitNet(BoostingEvents.LOAD_BOOSTING_PROFILE);
	cb({});
});

on(`__cfx_nui:${BoostingEvents.JOIN_WAITLIST}`, (data: any, cb: any) => {
	emitNet(BoostingEvents.JOIN_WAITLIST, data.boostProfile);
	cb({});
});

on(`__cfx_nui:${BoostingEvents.LEAVE_WAITLIST}`, (data: any, cb: any) => {
	emitNet(BoostingEvents.LEAVE_WAITLIST);
	cb({});
});

onNet(BoostingEvents.LOAD_BOOSTING_PROFILE, (boostingProfile: BoostingProfile) => {
	SendNUIMessage({
		app: 'BOOSTING',
		method: BoostingEvents.LOAD_BOOSTING_PROFILE,
		data: boostingProfile,
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
