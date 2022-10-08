import { useSetRecoilState } from 'recoil';
import { BoostingEvents, BOOSTING_APP } from '@typings/boosting';
import { useNuiEvent } from 'fivem-nui-react-lib';
import { ContractsState } from '../state/atoms';

export const useContracts = () => {
	const setContracts = useSetRecoilState(ContractsState.contracts);

	useNuiEvent(BOOSTING_APP, BoostingEvents.FETCH_CONTRACTS, setContracts);
};
