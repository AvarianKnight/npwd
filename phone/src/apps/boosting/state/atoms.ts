import {atom} from 'recoil';
import {BoostProfile, Contract} from '@typings/boosting';

export const BoostProfileState = {
	profile: atom<BoostProfile>({
		key: 'boostProfile',
		default: undefined,
	}),
};

export const QueState = {
	inQue: atom<boolean>({
		key: 'boostingQueue',
		default: false,
	}),
};

export const ContractsState = {
	contracts: atom<Contract[]>({
		key: 'contracts',
		default: undefined,
	}),
};
