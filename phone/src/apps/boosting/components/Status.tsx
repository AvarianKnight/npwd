import { Box } from '@mui/material';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import NinjaImg from '../../../assets/boosting/ninja.png';
import Text from '../common/Text';
import { QueState } from '../state/atoms';

const Container = styled(Box)`
	display: flex;
	position: absolute;
	width: 252px;
	height: 45px;
	left: 60px;
	top: 165px;
`;
const Ninja = styled(Box)`
	background: url(${NinjaImg}) no-repeat;
	width: 45px;
	height: 45px;
`;
const StatusContainer = styled(Box)`
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	left: 55px;
`;

const StatusBar = styled(Box)`
	width: 200px;
	height: 25px;
	background: rgba(0, 187, 97, 0.17);
	border-radius: 71px;
	margin-top: 7px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Status = () => {
	const inQueue = useRecoilValue(QueState.inQue);

	return (
		<Container>
			<Ninja />
			<StatusContainer>
				<Text width={'71px'} height={'19px'}>
					STATUS...
				</Text>
				<StatusBar>
					{inQueue ? (
						<Text lineHeight={'14.75px'} textAlign={'center'}>
							IN QUEUE
						</Text>
					) : (
						<Text lineHeight={'25.75px'} textAlign={'center'}>
							NOT IN QUEUE
						</Text>
					)}
				</StatusBar>
			</StatusContainer>
		</Container>
	);
};

export default Status;
