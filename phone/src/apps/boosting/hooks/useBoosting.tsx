import {BoostingEvents, BoostingProfile, BOOSTING_APP} from '@typings/boosting';
import {useNuiEvent, useNuiRequest} from 'fivem-nui-react-lib';
import {useEffect} from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';
import InjectDebugData from '../../../os/debug/InjectDebugData';
import {PromptState} from '@ui/state/PromptState';
import QueuePrompt from '../components/QueuePrompt';
import {BoostProfileState, ContractsState, QueState} from '../state/atoms';

export const useBoosting = () => {
	const {send} = useNuiRequest();
	const [boostProfile, setBoostProfile] = useRecoilState(BoostProfileState.profile);
	const setContracts = useSetRecoilState(ContractsState.contracts);
	const setPrompt = useSetRecoilState(PromptState.prompt);
	const setQueue = useSetRecoilState(QueState.inQue);

	const joinQueueHandler = async () => {
		await send(BoostingEvents.JOIN_WAITLIST, {boostProfile: boostProfile});
		setPrompt({
			component: <QueuePrompt />,
			message: 'You have joined the queue.',
			open: true,
		});
		setQueue(true);
	};

	const leaveQueueHandler = async () => {
		await send(BoostingEvents.LEAVE_WAITLIST);
		setPrompt({
			component: <QueuePrompt />,
			message: 'You have left the queue.',
			open: true,
		});
		setQueue(false);
	};

	const setProfileHandler = (data: BoostingProfile) => {
		setBoostProfile(data.profile);
		setContracts(data.contracts);
	};

	useNuiEvent(BOOSTING_APP, BoostingEvents.LOAD_BOOSTING_PROFILE, setProfileHandler);

	return {joinQueueHandler, leaveQueueHandler};
};

InjectDebugData(
	[
		{
			app: BOOSTING_APP,
			method: BoostingEvents.LOAD_BOOSTING_PROFILE,
			data: {
				uid: 2,
				level: 4,
				experience: '53.4',
			},
		},
	],
	500,
);
