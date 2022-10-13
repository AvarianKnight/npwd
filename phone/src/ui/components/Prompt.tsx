import {Modal} from '@mui/material';
import {useRecoilValue} from 'recoil';
import {PromptState} from '../state/PromptState';

type Props = {
	rootRef: any;
	background: string;
	color: string;
	border?: string;
	height?: string;
	width?: string;
	borderRadius?: string;
	fontWeight?: string;
	// img?: any;
	// button?: React.ReactNode;
};

const Prompt = ({
	rootRef,
	background,
	color,
	border,
	height,
	width,
	borderRadius,
	fontWeight,
}: // img,
// button,
Props) => {
	const prompt = useRecoilValue(PromptState.prompt);
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
				color: color,
				fontWeight: fontWeight,
				' .MuiBackdrop-root': {
					border: border,
					background: background,
					height: height,
					width: width,
					margin: 'auto',
					borderRadius: borderRadius,
				},
			}}
		>
			{prompt.component ? prompt.component : <></>}
		</Modal>
	);
};

export default Prompt;
