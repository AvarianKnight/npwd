import {useRecoilState, useSetRecoilState} from 'recoil';
import {BOOSTING_APP, BoostingEvents, Contract} from '@typings/boosting';
import {useNuiEvent, useNuiRequest} from 'fivem-nui-react-lib';
import {ContractsState} from '../state/atoms';
import InjectDebugData from '../../../os/debug/InjectDebugData';
import {PromptState} from '@ui/state/PromptState';
import StartPrompt from '../components/StartPrompt';
import TradePrompt from '../components/TradePrompt';
import DeclinePrompt from '../components/DeclinePrompt';
import {useSnackbar} from '../../../os/snackbar/hooks/useSnackbar';

export const useContracts = () => {
	const [contracts, setContracts] = useRecoilState(ContractsState.contracts);
	const setPrompt = useSetRecoilState(PromptState.prompt);
	const {send} = useNuiRequest();
	const {addAlert} = useSnackbar();

	const startPrompt = (index: number) => {
		setPrompt({
			component: <StartPrompt index={index} />,
			message: 'ARE YOU READY TO START YOUR MISSION?',
			open: true,
		});
	};

	const tradePrompt = (index: number) => {
		send(BoostingEvents.GET_PLAYERS).then(() => {
			setPrompt({
				component: <TradePrompt index={index} />,
				message: 'TRADE CONTRACT',
				open: true,
			});
		});
	};

	const declinePrompt = (index: number) => {
		setPrompt({
			component: <DeclinePrompt index={index} />,
			message: 'ARE YOU SURE YOU WANT TO TRASH THIS CONTRACT?',
			open: true,
		});
	};

	const closePrompt = () => {
		setPrompt({
			message: '',
			open: false,
			component: undefined,
		});
	};

	//TODO: write UI -> Client -> Service code ::: declineHandler first
	const startHandler = (index: number) => {
		console.log(contracts[index]);
	};

	//TODO error check for what happens when a player logs out?
	const tradeHandler = (index: number) => {
		send(BoostingEvents.TRADE_CONTRACT, contracts[index])
			.then(() => {
				setContracts((prevState) =>
					prevState.filter((contract: Contract) => contract.id !== contracts[index].id),
				);
				addAlert({
					message: 'Contract traded!',
					type: 'success',
				});
			})
			.catch((err: any) => addAlert({message: err, type: 'error'}));
	};

	const declineHandler = (index: number) => {
		send(BoostingEvents.DELETE_CONTRACT, contracts[index])
			.then(() => {
				setContracts((prevState) =>
					prevState.filter((contract: Contract) => contract.id !== contracts[index].id),
				);
				addAlert({
					message: 'Contract deleted.',
					type: 'success',
				});
			})
			.catch((err: any) => addAlert({message: err, type: 'error'}));
	};

	useNuiEvent(BOOSTING_APP, BoostingEvents.FETCH_CONTRACTS, setContracts);
	useNuiEvent(BOOSTING_APP, BoostingEvents.DELETE_CONTRACT, closePrompt);
	useNuiEvent(BOOSTING_APP, BoostingEvents.TRADE_CONTRACT, closePrompt);

	return {
		startPrompt,
		startHandler,
		tradePrompt,
		closePrompt,
		tradeHandler,
		declinePrompt,
		declineHandler,
	};
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
