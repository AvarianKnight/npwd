import { Box, LinearProgress, linearProgressClasses } from '@mui/material';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { BoostProfileState } from '../state/atoms';
import Text from '../common/Text';

const Wrapper = styled(Box)`
	display: flex;
	position: relative;
`;

const LevelContainer = styled(Box)`
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	width: 273px;
	height: 31px;
	left: 45px;
	top: 105px;
`;

const BorderLinearProgress = styled(LinearProgress)`
	&.${linearProgressClasses.root} {
		height: 12px;
		width: 264px;
		left: 10px;
		background: #010300;
		border-radius: 71px;
	}

	& .${linearProgressClasses.bar} {
		background: #00ba5f;
	}
`;

const Level = () => {
	const profile = useRecoilValue(BoostProfileState.profile);

	return (
		<Wrapper>
			<LevelContainer>
				<Box style={{ width: '75px', textAlign: 'center' }}>
					<Text>Level {profile?.level}</Text>
				</Box>
				<BorderLinearProgress variant="determinate" value={Number(profile?.experience)} />
			</LevelContainer>
		</Wrapper>
	);
};

export default Level;
