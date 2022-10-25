import {Box} from '@mui/material';
import {useNuiRequest} from 'fivem-nui-react-lib';
import {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {BoostingEvents} from '@typings/boosting';
import backgroundImg from '../../assets/boosting/background.png';
import Prompt from '../../ui/components/Prompt';
import Text from './common/Text';
import Contracts from './components/Contracts';
import Level from './components/Level';
import Queue from './components/Queue';
import Status from './components/Status';
import {useBoosting} from './hooks/useBoosting';
import {BoostProfileState} from './state/atoms';
import {useRecoilValue} from 'recoil';

const Wrapper = styled(Box)`
	position: absolute;
	background: #000000 url(${backgroundImg}) no-repeat;
	background-size: contain;
	height: 100%;
	width: 100%;
`;

const WelcomeWrapper = styled(Box)`
	top: 68px;
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: center;
`;

const CoinWrapper = styled(Box)`
	position: absolute;
	width: 70px;
	height: 22px;
	left: 290px;
	top: 75px;
	background: #00bb60;
	border-radius: 13px;
`;

const BoostingApp = () => {
	const rootRef = useRef<HTMLDivElement>(null);
	const {joinQueueHandler, leaveQueueHandler} = useBoosting();
	const {send} = useNuiRequest();
	const profile = useRecoilValue(BoostProfileState.profile);
	useBoosting();

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
			<WelcomeWrapper>
				<Text fontSize={'24px'}>WELCOME</Text>
			</WelcomeWrapper>
			<CoinWrapper>
				<Text
					fontSize={'20px'}
					color={'#000000'}
					lineHeight={'23px'}
					display={'flex'}
					justifyContent={'center'}
				>
					{profile?.small_coin ?? 0}
				</Text>
			</CoinWrapper>
			<Level />
			<Status />
			<Queue joinQueueHandler={joinQueueHandler} leaveQueueHandler={leaveQueueHandler} />
			<Contracts />
		</Wrapper>
	);
};

export default BoostingApp;
