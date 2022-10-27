import {useSnackbar} from '@os/snackbar/hooks/useSnackbar';
import {BoostingEvents, Contract, PurchaseContract} from '@typings/boosting';
import {PromptState} from '@ui/state/PromptState';
import {useNuiRequest} from 'fivem-nui-react-lib';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import DeclinePrompt from '../components/DeclinePrompt';
import StartPrompt from '../components/StartPrompt';
import TradePrompt from '../components/TradePrompt';
import {BoostProfileState, ContractsState, TradeState} from '../state/atoms';

export const useContracts = () => {
	const [contracts, setContracts] = useRecoilState(ContractsState.contracts);
	const setPrompt = useSetRecoilState(PromptState.prompt);
	const profile = useRecoilValue(BoostProfileState.profile);
	const {send} = useNuiRequest();
	const {addAlert} = useSnackbar();
	const selectedPlayerBoosting = useRecoilValue(TradeState.selectedPlayerBoosting);

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
		const transferData: PurchaseContract = {
			contract: contracts[index],
			small_coin: profile.small_coin,
		};

		send(BoostingEvents.START_CONTRACT, transferData).then(() => {
			closePrompt();
			addAlert({
				message: 'Contract started!',
				type: 'success',
			});
		});
	};

	//TODO error check for what happens when a player logs out?
	const tradeHandler = (index: number) => {
		send(BoostingEvents.TRADE_CONTRACT, {
			contract: contracts[index],
			player: selectedPlayerBoosting,
		})
			.then(() => {
				setContracts((prevState) =>
					prevState.filter((contract: Contract) => contract.id !== contracts[index].id),
				);
				closePrompt();
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
