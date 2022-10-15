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
}

export interface Contract {
	id: number;
	uid: number;
	contract_type: string;
	expires_in: Date;
	cost: number;
	vehicle: string;
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
