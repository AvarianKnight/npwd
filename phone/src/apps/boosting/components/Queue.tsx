import { Box } from '@mui/material';
import Text from '../common/Text';
import styled from 'styled-components';
import JoinQueueImg from '../../../assets/boosting/join-queue.png';
import LeaveQueueImg from '../../../assets/boosting/leave-queue.png';

const Container = styled(Box)`
	position: absolute;
	top: 261px;
	height: 55px;
	display: flex;
	left: 66px;
	width: 270px;
`;

const JoinContainer = styled(Box)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 104px;
	height: 55px;
`;

const JoinImg = styled(Box)`
	background: url(${JoinQueueImg}) no-repeat;
	width: 48px;
	height: 36px;
`;

const LeaveContainer = styled(Box)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 115px;
	height: 55px;
	position: absolute;
	left: 150px;
`;

const LeaveImg = styled(Box)`
	background: url(${LeaveQueueImg}) no-repeat;
	width: 48px;
	height: 36px;
`;

const Queue = () => {
	return (
		<Container>
			<JoinContainer>
				<JoinImg />
				<Text textAlign={'center'} width={'104px'}>
					JOIN QUEUE
				</Text>
			</JoinContainer>
			<LeaveContainer>
				<LeaveImg />
				<Text textAlign={'center'} width={'115px'}>
					LEAVE QUEUE
				</Text>
			</LeaveContainer>
		</Container>
	);
};

export default Queue;
