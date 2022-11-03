import {Box, IconButton} from '@mui/material';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components';
import JoinQueueImg from '../../../assets/boosting/join-queue.png';
import LeaveQueueImg from '../../../assets/boosting/leave-queue.png';
import Text from '../common/Text';
import {QueState} from '../state/atoms';

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

interface QueueProps {
	joinQueueHandler: () => any;
	leaveQueueHandler: () => any;
}

const Queue = ({joinQueueHandler, leaveQueueHandler}: QueueProps) => {
	const inQueue = useRecoilValue(QueState.inQue);

	return (
		<Container>
			<JoinContainer>
				<IconButton disabled={inQueue} onClick={joinQueueHandler}>
					<JoinImg />
				</IconButton>
				<Text textAlign={'center'} width={'104px'}>
					JOIN QUEUE
				</Text>
			</JoinContainer>
			<LeaveContainer>
				<IconButton disabled={!inQueue} onClick={leaveQueueHandler}>
					<LeaveImg />
				</IconButton>
				<Text textAlign={'center'} width={'115px'}>
					LEAVE QUEUE
				</Text>
			</LeaveContainer>
		</Container>
	);
};

export default Queue;
