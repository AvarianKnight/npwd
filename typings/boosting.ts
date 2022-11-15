import {Player} from './property';

export const BOOSTING_APP = 'BOOSTING';

export enum BoostingEvents {
	LOAD_BOOSTING_PROFILE = 'npwd:boosting:loadBoostingProfile',
	JOIN_WAITLIST = 'npwd:boosting:joinWaitList',
	LEAVE_WAITLIST = 'npwd:boosting:leaveWaitList',
	FETCH_CONTRACTS = 'npwd:boosting:fetchContracts',
	TRANSFER_CONTRACT = 'npwd:boosting:transferContract',
	REWARD_CONTRACT = 'npwd:boosting:rewardContract',
	START_CONTRACT = 'npwd:boosting:startContract',
	DELETE_CONTRACT = 'npwd:boosting:deleteContract,',
	TRADE_CONTRACT = 'npwd:boosting:tradeContract',
	GET_PLAYERS = 'npwd:boosting:getPlayers',
	SEND_NOTIFICATION = 'SEND_NOTIFICATION',
	LOW_TIER_MISSION = 'LOW_TIER_MISSION',
	PURCHASE_CONTRACT = 'PURCHASE_CONTRACT',
	MISSING_EQUIPMENT = 'MISSING_EQUIPMENT',
	SEND_TEXT = 'SEND_TEXT',
	MID_TIER_MISSION = 'MID_TIER_MISSION',
}

export enum BoostMissionEvents {
	SPAWN_ATTACKER = 'npwd:boosting:spawnAttacker',
	REWARD_VEHICLE = 'npwd:boosting:rewardVehicle',
	FAIL_VEHICLE = 'npwd:boosting:failBoost',
	RESET_APP = 'npwd:boosting:resetApp',
}

export interface BoostList {
	car_model: string;
	type: string;
	id: number;
}

export interface BoostProfile {
	uid: number;
	level: number;
	experience: string;
	small_coin?: number;
}

export interface Contract {
	id: number;
	uid: number;
	contract_type: string;
	expires_in: number;
	cost: number;
	vehicle: string;
}

export interface PurchaseContract {
	contract: Contract;
	small_coin: number;
}

export interface ContractListAndCoins {
	contracts: Contract[];
	small_coin: number;
}

export interface BoostingProfile {
	profile: BoostProfile;
	contracts: Contract[];
}

export interface ButtonOption {
	component: React.ReactNode;
	text: string;
	action: (index: number) => any;
}

export interface QueuedPlayer {
	ssn: number;
	fullName: string;
	level: number;
	experience: string;
}

export interface TradeContract {
	contract: Contract;
	player: Player;
}
