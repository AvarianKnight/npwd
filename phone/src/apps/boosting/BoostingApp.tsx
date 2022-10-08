import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { BoostingEvents, BOOSTING_APP } from '@typings/boosting';
import InjectDebugData from '../../os/debug/InjectDebugData';
import { useBoosting } from './hooks/useBoosting';
import backgroundImg from '../../assets/boosting/background.png';
import Level from './components/Level';
import Status from './components/Status';
import Queue from './components/Queue';

const Wrapper = styled(Box)`
	position: absolute;
	background: #000000 url(${backgroundImg}) no-repeat;
	background-size: contain;
	height: 100%;
	width: 100%;
`;

const Title = styled(Typography)`
	color: #02b864;
	font-weight: bolder;
	font-size: 24px;
`;

const TextWrapper = styled(Box)`
	top: 68px;
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: center;
`;

const BoostingApp = () => {
	useBoosting();

	return (
		<Wrapper>
			<TextWrapper>
				<Title>WELCOME</Title>
			</TextWrapper>
			<Level />
			<Status />
			<Queue />
		</Wrapper>
	);
};

export default BoostingApp;
