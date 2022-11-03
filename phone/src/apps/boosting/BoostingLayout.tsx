import {BoostingEvents} from '@typings/boosting';
import {useNuiRequest} from 'fivem-nui-react-lib';
import {useEffect} from 'react';

import {Route, Switch} from 'react-router-dom';
import {AppWrapper} from '../../ui/components';
import App from './App';
import {useBoosting} from './hooks/useBoosting';
import {useBoostingNotification} from './hooks/useBoostingNotification';
import PDM from './PDM';

const BoostingApp = () => {
	const {send} = useNuiRequest();

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
