import {BoostingEvents, BOOSTING_APP} from '@typings/boosting';
import {useNuiEvent, useNuiRequest} from 'fivem-nui-react-lib';
import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import InjectDebugData from '../../../os/debug/InjectDebugData';
import {PromptState} from '@ui/state/PromptState';
import QueuePrompt from '../components/QueuePrompt';
import {BoostProfileState, QueState} from '../state/atoms';

export const useBoosting = () => {
	const {send} = useNuiRequest();
	const setBoostProfile = useSetRecoilState(BoostProfileState.profile);
	const setPrompt = useSetRecoilState(PromptState.prompt);
	const setQueue = useSetRecoilState(QueState.inQue);

	useEffect(() => {
		if (process.env.NODE_ENV !== 'development') {
			send(BoostingEvents.LOAD_BOOSTING_PROFILE);
		}
	}, [send]);

	const joinQueueHandler = () => {
		setPrompt({
			component: <QueuePrompt />,
			message: 'You have joined the queue.',
			open: true,
		});
		setQueue(true);
	};

	const leaveQueueHandler = () => {
		setPrompt({
			component: <QueuePrompt />,
			message: 'You have left the queue.',
			open: true,
		});
		setQueue(false);
	};

	useNuiEvent(BOOSTING_APP, BoostingEvents.LOAD_BOOSTING_PROFILE, setBoostProfile);

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
