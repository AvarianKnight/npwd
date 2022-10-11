import { Box, Button, Modal } from '@mui/material';
import { usePrompt } from '../../hooks/usePrompt';

type Props = {
	rootRef: any;
};

const Prompt = ({ rootRef }: Props) => {
	const { denyHandler, acceptHandler, prompt } = usePrompt();
	return (
		<Modal
			disablePortal
			disableEnforceFocus
			disableAutoFocus
			open={prompt.open}
			container={() => rootRef.current}
			sx={{
				display: 'flex',
				p: 1,
				alignItems: 'center',
				justifyContent: 'center',
				width: '290px',
				margin: 'auto',
				' .MuiBackdrop-root': {
					background: '#6B6A69',
					height: '100px',
					width: '350px',
					margin: 'auto',
					borderRadius: '5px',
				},
			}}
		>
			<Box>
				<Box>{prompt.message}</Box>
				<Box
					style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '10px' }}
				>
					<Button onClick={denyHandler}>Disagree</Button>
					<Button onClick={acceptHandler} autoFocus>
						Agree
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

export default Prompt;
