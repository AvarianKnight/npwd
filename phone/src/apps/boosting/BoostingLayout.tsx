import {Box} from '@mui/material';
import {useNuiRequest} from 'fivem-nui-react-lib';
import {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {BoostingEvents} from '@typings/boosting';

import {useBoosting} from './hooks/useBoosting';
import {BoostProfileState} from './state/atoms';
import {useRecoilValue} from 'recoil';
import {useContracts} from './hooks/useContracts';
import {useBoostingNotification} from './hooks/useBoostingNotification';
import {AppWrapper} from '../../ui/components';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import PDM from './PDM';

const BoostingApp = () => {
	const rootRef = useRef<HTMLDivElement>(null);
	const {joinQueueHandler, leaveQueueHandler} = useBoosting();
	const {resetAppPrompt} = useContracts();
	const {send} = useNuiRequest();
	const profile = useRecoilValue(BoostProfileState.profile);
	const reset = useRecoilValue(BoostProfileState.reset);

	useBoosting();
	useBoostingNotification();

	useEffect(() => {
		send(BoostingEvents.LOAD_BOOSTING_PROFILE);
	}, []);

	return (
		<AppWrapper>
			<Switch>
				<Route path="/boosting/" exact component={PDM} />
				<Route path="/boosting/app" exact component={App} />
			</Switch>
		</AppWrapper>
	);
};

export default BoostingApp;
