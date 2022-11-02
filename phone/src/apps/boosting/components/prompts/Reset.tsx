import {Box} from '@mui/material';
import {PromptState} from '@ui/state/PromptState';
import {forwardRef} from 'react';
import {useRecoilValue} from 'recoil';
import Button from '../../common/Button';

import {useContracts} from '../../hooks/useContracts';

interface Props {}

const Reset = forwardRef((props: Props, ref) => {
	const prompt = useRecoilValue(PromptState.prompt);
	const {resetAppHandler, closePrompt} = useContracts();

	return (
		<Box>
			<Box style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
				{prompt.message}
			</Box>
			<Box style={{display: 'flex', justifyContent: 'space-evenly', paddingTop: '10px'}}>
				<Button clickHandler={resetAppHandler} text={'YES'} />
				<Button clickHandler={closePrompt} text={'NO'} />
			</Box>
		</Box>
	);
});

export default Reset;
