import { Typography } from '@mui/material';
import styled from 'styled-components';

const CSSText = styled(Typography)`
	font-weight: bolder;
	font-size: 16px;
	color: #09b565;
	padding-left: 5px;
`;

interface Props {
	children: any;
	lineHeight?: string;
	width?: string;
	height?: string;
	textAlign?: string;
	fontSize?: string;
}

const Text = ({ children, lineHeight, width, height, textAlign, fontSize }: Props) => {
	return (
		<CSSText
			style={{ lineHeight: lineHeight, width: width, height: height, fontSize: fontSize }}
		>
			{children}
		</CSSText>
	);
};

export default Text;
