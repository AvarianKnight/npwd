import {Box} from '@mui/material';
import {PromptState} from '@ui/state/PromptState';
import {forwardRef} from 'react';
import {useRecoilState} from 'recoil';
import Button from '../common/Button';
import CarWreckImage from '../common/CarWreckImage';
import Row from '../common/Row';

const StartPrompt = forwardRef((props, ref) => {
	const [prompt, setPrompt] = useRecoilState(PromptState.prompt);

	const closePopupHandler = () => {
		setPrompt({
			message: '',
			open: false,
			component: undefined,
		});
	};

	return (
		<Box>
			<Box style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
				<Row>{prompt.message}</Row>
				<Row>
					<CarWreckImage />
				</Row>
			</Box>
			<Box style={{display: 'flex', justifyContent: 'space-evenly', paddingTop: '10px'}}>
				<Button clickHandler={closePopupHandler} text={'YES'} />
				<Button clickHandler={closePopupHandler} text={'NO'} />
			</Box>
		</Box>
	);
});

export default StartPrompt;
