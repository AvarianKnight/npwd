import {Box} from '@mui/material';
import {PromptState} from '@ui/state/PromptState';
import {forwardRef} from 'react';
import {useRecoilValue} from 'recoil';
import Button from '../common/Button';
import DeclineImage from '../common/DeclineImage';
import Row from '../common/Row';
import {useContracts} from '../hooks/useContracts';

interface Props {
	index: number;
}

const DeclinePrompt = forwardRef((props: Props, ref) => {
	const prompt = useRecoilValue(PromptState.prompt);
	const {declineHandler, closePrompt} = useContracts();

	return (
		<Box>
			<Box style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
				<Row>{prompt.message}</Row>
				<Row>
					<DeclineImage />
				</Row>
			</Box>
			<Box style={{display: 'flex', justifyContent: 'space-evenly', paddingTop: '10px'}}>
				<Button clickHandler={declineHandler} index={props.index} text={'YES'} />
				<Button clickHandler={closePrompt} text={'NO'} />
			</Box>
		</Box>
	);
});

export default DeclinePrompt;
