import {useSnackbar} from '@os/snackbar/hooks/useSnackbar';
import {BoostingEvents, BoostMissionEvents, Contract, PurchaseContract} from '@typings/boosting';
import {PromptState} from '@ui/state/PromptState';
import {useNuiRequest} from 'fivem-nui-react-lib';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import Decline from '../components/prompts/Decline';
import Reset from '../components/prompts/Reset';
import Start from '../components/prompts/Start';
import Trade from '../components/prompts/Trade';
import {BoostProfileState, ContractsState, TradeState} from '../state/atoms';

export const useContracts = () => {
	const [contracts, setContracts] = useRecoilState(ContractsState.contracts);
	const setPrompt = useSetRecoilState(PromptState.prompt);
	const setReset = useSetRecoilState(BoostProfileState.reset);
	const profile = useRecoilValue(BoostProfileState.profile);
	const {send} = useNuiRequest();
	const {addAlert} = useSnackbar();
	const selectedPlayerBoosting = useRecoilValue(TradeState.selectedPlayerBoosting);

	const startPrompt = (index: number) => {
		setPrompt({
			component: <Start index={index} />,
			message: 'ARE YOU READY TO START YOUR MISSION?',
			open: true,
		});
	};

	const tradePrompt = (index: number) => {
		send(BoostingEvents.GET_PLAYERS).then(() => {
			setPrompt({
				component: <Trade index={index} />,
				message: 'TRADE CONTRACT',
				open: true,
			});
		});
	};

	const declinePrompt = (index: number) => {
		setPrompt({
			component: <Decline index={index} />,
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

	const startHandler = (index: number) => {
		const transferData: PurchaseContract = {
			contract: contracts[index],
			small_coin: profile.small_coin,
		};

		send(BoostingEvents.START_CONTRACT, transferData)
			.then((allowed) => allowed.json())
			.then((allowed) => {
				if (allowed.data) {
					closePrompt();
					setReset(true);
					addAlert({
						message: 'Contract started!',
						type: 'success',
					});
				} else {
					closePrompt();
					setReset(true);
					addAlert({
						message: 'You already have an active contract!',
						type: 'error',
					});
				}
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

	const resetAppPrompt = () => {
		setPrompt({
			component: <Reset />,
			message: 'ARE YOU SURE YOU WANT TO RESET?',
			open: true,
		});
	};

	const resetAppHandler = () => {
		setReset(false);
		closePrompt();
		send(BoostMissionEvents.RESET_APP);
	};

	return {
		startPrompt,
		startHandler,
		tradePrompt,
		closePrompt,
		tradeHandler,
		declinePrompt,
		declineHandler,
		resetAppPrompt,
		resetAppHandler,
	};
};
