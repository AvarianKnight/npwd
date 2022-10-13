import {BoostingEvents, BoostingProfile} from './../../typings/boosting';

RegisterNuiCallbackType(BoostingEvents.LOAD_BOOSTING_PROFILE);

on(`__cfx_nui:${BoostingEvents.LOAD_BOOSTING_PROFILE}`, (data: any, cb: any) => {
	emitNet(BoostingEvents.LOAD_BOOSTING_PROFILE);
	cb({});
});

onNet(BoostingEvents.LOAD_BOOSTING_PROFILE, (boostingProfile: BoostingProfile) => {
	SendNUIMessage({
		app: 'BOOSTING',
		method: BoostingEvents.LOAD_BOOSTING_PROFILE,
		data: boostingProfile,
	});
});
