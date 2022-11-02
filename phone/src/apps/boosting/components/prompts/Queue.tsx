import {Box} from '@mui/material';
import {PromptState} from '@ui/state/PromptState';
import {forwardRef} from 'react';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components';
import Button from '../../common/Button';
import CarWreckImage from '../../common/CarWreckImage';
import {useContracts} from '../../hooks/useContracts';

const Row = styled(Box)`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Queue = forwardRef((props, ref) => {
	const prompt = useRecoilValue(PromptState.prompt);
	const {closePrompt} = useContracts();

	return (
		<Box>
			<Box style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
				<Row>{prompt.message}</Row>
				<Row>
					<CarWreckImage />
				</Row>
			</Box>
			<Box style={{display: 'flex', justifyContent: 'space-evenly', paddingTop: '10px'}}>
				<Button clickHandler={closePrompt} text={'OK'} />
			</Box>
		</Box>
	);
});

export default Queue;
