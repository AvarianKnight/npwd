import { useSetRecoilState } from 'recoil';
import { BoostingEvents, BOOSTING_APP, Contract } from '@typings/boosting';
import { useNuiEvent } from 'fivem-nui-react-lib';
import { ContractsState } from '../state/atoms';
import InjectDebugData from '../../../os/debug/InjectDebugData';
import { PromptState } from '../../../ui/state/PromptState';
import StartPrompt from '../components/StartPrompt';

export const useContracts = () => {
	const setContracts = useSetRecoilState(ContractsState.contracts);
	const setPrompt = useSetRecoilState(PromptState.prompt);

	useNuiEvent(BOOSTING_APP, BoostingEvents.FETCH_CONTRACTS, setContracts);

	const startHandler = () => {
		setPrompt({
			component: <StartPrompt />,
			message: 'ARE YOU READY TO START YOUR MISSION?',
			open: true,
		});
	};

	const tradeHandler = () => {
		console.log('trade');
	};

	const declineHandler = () => {
		console.log('decline');
	};

	return { startHandler, tradeHandler, declineHandler };
};

InjectDebugData(
	[
		{
			app: BOOSTING_APP,
			method: BoostingEvents.FETCH_CONTRACTS,
			data: [
				{
					uid: 2,
					contract_type: 'A',
					expires_in: new Date(),
					cost: 20,
					vehicle: 'tesla3',
				},
				{
					uid: 2,
					contract_type: 'S+',
					expires_in: new Date(),
					cost: 50,
					vehicle: 'teslas',
				},
				{
					uid: 2,
					contract_type: 'S',
					expires_in: new Date(),
					cost: 20,
					vehicle: 'teslay',
				},
				{
					uid: 2,
					contract_type: 'S',
					expires_in: new Date(),
					cost: 20,
					vehicle: 'teslay',
				},
				{
					uid: 2,
					contract_type: 'S',
					expires_in: new Date(),
					cost: 20,
					vehicle: 'teslay',
				},
			],
		},
	],
	500,
);
