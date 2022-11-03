import {Box} from '@mui/material';
import {useNuiRequest} from 'fivem-nui-react-lib';
import {useRef} from 'react';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components';
import backgroundImg from '../../assets/boosting/background.png';
import Prompt from '../../ui/components/Prompt';
import Button from './common/Button';
import Text from './common/Text';
import Contracts from './components/Contracts';
import Level from './components/Level';
import Queue from './components/Queue';
import Status from './components/Status';
import {useBoosting} from './hooks/useBoosting';
import {useContracts} from './hooks/useContracts';
import {BoostProfileState} from './state/atoms';

type Props = {};

const Wrapper = styled(Box)`
	position: absolute;
	background: #000000 url(${backgroundImg}) no-repeat;
	background-size: contain;
	height: 100%;
	width: 100%;
	user-select: none;
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

const App = (props: Props) => {
	const rootRef = useRef<HTMLDivElement>(null);
	const profile = useRecoilValue(BoostProfileState.profile);
	const reset = useRecoilValue(BoostProfileState.reset);
	const {joinQueueHandler, leaveQueueHandler} = useBoosting();
	const {resetAppPrompt} = useContracts();
	const {send} = useNuiRequest();

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
				{!reset ? (
					<Text fontSize={'24px'}>WELCOME</Text>
				) : (
					<Button clickHandler={resetAppPrompt} text={'RESET'} />
				)}
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

export default App;
