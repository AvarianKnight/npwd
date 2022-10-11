import { Box } from '@mui/material';
import { forwardRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { PromptState } from '../../../ui/state/PromptState';
import Button from '../common/Button';
import CarWreckImg from './CarWreckImg';

const Row = styled(Box)`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const QueuePrompt = forwardRef((props, ref) => {
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
			<Box style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
				<Row>{prompt.message}</Row>
				<Row>
					<CarWreckImg />
				</Row>
			</Box>
			<Box style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '10px' }}>
				<Button clickHandler={closePopupHandler} text={'OK'} />
			</Box>
		</Box>
	);
});

export default QueuePrompt;
