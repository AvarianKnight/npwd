import {BoostingEvents, Contract} from '../../../typings/boosting';
import {PropertyEvents} from '../../../typings/property';

RegisterNuiCallbackType(BoostingEvents.LOAD_BOOSTING_PROFILE);
RegisterNuiCallbackType(BoostingEvents.JOIN_WAITLIST);
RegisterNuiCallbackType(BoostingEvents.LEAVE_WAITLIST);
RegisterNuiCallbackType(BoostingEvents.START_CONTRACT);
RegisterNuiCallbackType(BoostingEvents.DELETE_CONTRACT);
RegisterNuiCallbackType(BoostingEvents.TRADE_CONTRACT);
RegisterNuiCallbackType(BoostingEvents.GET_PLAYERS);

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

on(`__cfx_nui:${BoostingEvents.START_CONTRACT}`, (data: any, cb: any) => {
	emitNet(BoostingEvents.START_CONTRACT);
	cb({});
});

on(`__cfx_nui:${BoostingEvents.DELETE_CONTRACT}`, (contract: Contract, cb: any) => {
	emitNet(BoostingEvents.DELETE_CONTRACT, contract.id);
	cb({});
});

on(`__cfx_nui:${BoostingEvents.GET_PLAYERS}`, (data: any, cb: any) => {
	emitNet(PropertyEvents.GET_PLAYERS, 'boosting');
	cb({});
});

on(`__cfx_nui:${BoostingEvents.TRADE_CONTRACT}`, (data: any, cb: any) => {
	emitNet(BoostingEvents.TRADE_CONTRACT);
	cb({});
});
