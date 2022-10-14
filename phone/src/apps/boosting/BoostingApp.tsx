import {Box} from '@mui/material';
import {useNuiRequest} from 'fivem-nui-react-lib';
import {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {BoostingEvents} from '../../../../typings/boosting';
import backgroundImg from '../../assets/boosting/background.png';
import Prompt from '../../ui/components/Prompt';
import Text from './common/Text';
import Contracts from './components/Contracts';
import Level from './components/Level';
import Queue from './components/Queue';
import Status from './components/Status';
import {useBoosting} from './hooks/useBoosting';
import {useContracts} from './hooks/useContracts';

const Wrapper = styled(Box)`
	position: absolute;
	background: #000000 url(${backgroundImg}) no-repeat;
	background-size: contain;
	height: 100%;
	width: 100%;
`;

const TextWrapper = styled(Box)`
	top: 68px;
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: center;
`;

const BoostingApp = () => {
	const rootRef = useRef<HTMLDivElement>(null);
	const {joinQueueHandler, leaveQueueHandler} = useBoosting();
	const {startHandler, tradeHandler, declineHandler} = useContracts();
	const {send} = useNuiRequest();

	useBoosting();
	useContracts();

	useEffect(() => {
		send(BoostingEvents.LOAD_BOOSTING_PROFILE);
	}, []);

	return (
		<Wrapper ref={rootRef}>
			<Prompt
				rootRef={rootRef}
				background={'#000000'}
				color={'#01B963'}
				border={'1px solid #01B963'}
				height={'278px'}
				width={'335px'}
				borderRadius={'34px'}
				fontWeight={'bolder'}
			/>
			<TextWrapper>
				<Text fontSize={'24px'}>WELCOME</Text>
			</TextWrapper>
			<Level />
			<Status />
			<Queue joinQueueHandler={joinQueueHandler} leaveQueueHandler={leaveQueueHandler} />
			<Contracts
				startHandler={startHandler}
				tradeHandler={tradeHandler}
				declineHandler={declineHandler}
			/>
		</Wrapper>
	);
};

export default BoostingApp;
