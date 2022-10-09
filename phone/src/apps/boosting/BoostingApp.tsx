import { Box } from '@mui/material';
import styled from 'styled-components';
import backgroundImg from '../../assets/boosting/background.png';
import Title from './common/Text';
import Contracts from './components/Contracts';
import Level from './components/Level';
import Queue from './components/Queue';
import Status from './components/Status';
import { useBoosting } from './hooks/useBoosting';

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
	useBoosting();

	return (
		<Wrapper>
			<TextWrapper>
				<Title fontSize={'24px'}>WELCOME</Title>
			</TextWrapper>
			<Level />
			<Status />
			<Queue />
			<Contracts />
		</Wrapper>
	);
};

export default BoostingApp;
