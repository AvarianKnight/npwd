export const BOOSTING_APP = 'BOOSTING';

export enum BoostingEvents {
	LOAD_BOOSTING_PROFILE = 'npwd:boosting:loadBoostingProfile',
	JOIN_WAITLIST = 'npwd:boosting:joinWaitList',
	LEAVE_WAITLIST = 'npwd:boosting:leaveWaitList',
	FETCH_CONTRACTS = 'npwd:boosting:fetchContracts',
	START_CONTRACT = 'npwd:boosting:startContract',
	TRANSFER_CONTRACT = 'npwd:boosting:transferContract',
}

export interface BoostProfile {
	uid: number;
	level: number;
	experience: string;
}

export interface Contract {
	uid: number;
	contract_type: string;
	expires_in: Date;
	cost: number;
	vehicle: string;
}

export interface BoostingProfile {
	profile: BoostProfile;
	contract: Contract[];
}

export interface ButtonOption {
	component: React.ReactNode;
	text: string;
	action: () => any;
}
