import {BoostingEvents, BOOSTING_APP} from '@typings/boosting';
import {PromptState} from '@ui/state/PromptState';
import {useNuiEvent, useNuiRequest} from 'fivem-nui-react-lib';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import InjectDebugData from '../../../os/debug/InjectDebugData';
import QueuePrompt from '../components/prompts/Queue';
import {BoostProfileState, QueState} from '../state/atoms';

export const useBoosting = () => {
	const {send} = useNuiRequest();
	const boostProfile = useRecoilValue(BoostProfileState.profile);
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

	useNuiEvent(BOOSTING_APP, BoostingEvents.LEAVE_WAITLIST, setQueue);

	return {joinQueueHandler, leaveQueueHandler, boostProfile};
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
