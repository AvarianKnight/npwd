import { BoostingEvents, BOOSTING_APP } from '@typings/boosting';
import { useNuiEvent, useNuiRequest } from 'fivem-nui-react-lib';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import InjectDebugData from '../../../os/debug/InjectDebugData';
import { BoostProfileState } from '../state/atoms';

export const useBoosting = () => {
	const { send } = useNuiRequest();
	const setBoostProfile = useSetRecoilState(BoostProfileState.profile);

	useEffect(() => {
		if (process.env.NODE_ENV !== 'development') {
			send(BoostingEvents.LOAD_BOOSTING_PROFILE);
		}
	}, [send]);

	useNuiEvent(BOOSTING_APP, BoostingEvents.LOAD_BOOSTING_PROFILE, setBoostProfile);
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
