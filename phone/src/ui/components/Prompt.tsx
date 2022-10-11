import { Box, Modal } from '@mui/material';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { PromptState } from '../state/PromptState';

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

// interface ImgProps {
// 	imgUrl: string;
// }

// const BoxImg = styled(Box)`
// 	background: no-repeat ${(props: ImgProps) => `url(${props.imgUrl})`};
// 	width: 87px;
// 	height: 68px;
// 	background-size: contain;
// 	margin: 15px;
// `;

// const Row = styled(Box)`
// 	display: flex;
// 	justify-content: center;
// 	width: 100%;
// `;

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
