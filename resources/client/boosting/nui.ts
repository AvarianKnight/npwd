import {BoostingEvents, Contract, PurchaseContract, TradeContract} from '../../../typings/boosting';
import {PropertyEvents} from '../../../typings/property';
import {highTierHandler} from './boost-tiers/high';
import {lowTierHandler} from './boost-tiers/low';
import {BPlayer} from './boost-tiers/main';
import {mediumTierHandler} from './boost-tiers/medium';

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

on(`__cfx_nui:${BoostingEvents.START_CONTRACT}`, (purchaseContract: PurchaseContract, cb: any) => {
	//if boosting player is already in another mission, do not allow another.
	if (!BPlayer.active) {
		if (
			purchaseContract.contract.contract_type === 'B' ||
			purchaseContract.contract.contract_type === 'A'
		) {
			lowTierHandler(purchaseContract.contract, purchaseContract.small_coin);
		} else if (purchaseContract.contract.contract_type === 'S') {
			mediumTierHandler(purchaseContract.contract, purchaseContract.small_coin);
		} else if (purchaseContract.contract.contract_type === 'S+') {
			highTierHandler(purchaseContract.contract, purchaseContract.small_coin);
		}
		cb({data: true});
	} else {
		cb({data: false});
	}
});

on(`__cfx_nui:${BoostingEvents.DELETE_CONTRACT}`, (contract: Contract, cb: any) => {
	emitNet(BoostingEvents.DELETE_CONTRACT, contract.id);
	cb({});
});

on(`__cfx_nui:${BoostingEvents.GET_PLAYERS}`, (data: any, cb: any) => {
	emitNet(PropertyEvents.GET_PLAYERS, 'boosting');
	cb({});
});

on(`__cfx_nui:${BoostingEvents.TRADE_CONTRACT}`, (tradeContract: TradeContract, cb: any) => {
	emitNet(BoostingEvents.TRADE_CONTRACT, tradeContract);
	cb({});
});
