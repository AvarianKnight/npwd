import {
	BOOSTING_APP,
	BoostingEvents,
	Contract,
	BoostingProfile,
	PurchaseContract,
	BoostProfile,
} from '@typings/boosting';
import {PromptState} from '@ui/state/PromptState';
import {useNuiEvent} from 'fivem-nui-react-lib';
import {useSetRecoilState} from 'recoil';
import {BoostProfileState, ContractsState} from '../state/atoms';
import InjectDebugData from '@os/debug/InjectDebugData';
import {useBoostingNotification} from './useBoostingNotification';

export const useContractsService = () => {
	const setBoostProfile = useSetRecoilState(BoostProfileState.profile);
	const setContracts = useSetRecoilState(ContractsState.contracts);
	const setPrompt = useSetRecoilState(PromptState.prompt);
	const {setNotification} = useBoostingNotification();

	const closePrompt = () => {
		setPrompt({
			message: '',
			open: false,
			component: undefined,
		});
	};

	const rewardContractHandler = (newContract: Contract) => {
		setContracts((contractList: Contract[]) => [...contractList, newContract]);
	};

	const setProfileHandler = (data: BoostingProfile) => {
		setBoostProfile(data.profile);
		setContracts(data.contracts);
	};

	const purchaseHandler = (purchaseContract: PurchaseContract) => {
		setContracts(purchaseContract.contracts);
		setBoostProfile((prevState: BoostProfile) => ({
			...prevState,
			small_coin: purchaseContract.small_coin,
		}));
	};

	useNuiEvent(BOOSTING_APP, BoostingEvents.LOAD_BOOSTING_PROFILE, setProfileHandler);
	useNuiEvent(BOOSTING_APP, BoostingEvents.FETCH_CONTRACTS, setContracts);
	useNuiEvent(BOOSTING_APP, BoostingEvents.PURCHASE_CONTRACT, purchaseHandler);
	useNuiEvent(BOOSTING_APP, BoostingEvents.DELETE_CONTRACT, closePrompt);
	useNuiEvent(BOOSTING_APP, BoostingEvents.TRADE_CONTRACT, closePrompt);
	useNuiEvent(BOOSTING_APP, BoostingEvents.REWARD_CONTRACT, rewardContractHandler);
	useNuiEvent(BOOSTING_APP, BoostingEvents.SEND_NOTIFICATION, setNotification);
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
