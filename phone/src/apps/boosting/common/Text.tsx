import {Typography} from '@mui/material';
import styled from 'styled-components';

const CSSText = styled(Typography)`
	font-weight: bolder;
	font-size: 16px;
	color: #09b565;
`;

type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
type TextAlign = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';

interface Props {
	children: any;
	lineHeight?: string;
	width?: string;
	height?: string;
	textAlign?: TextAlign;
	fontSize?: string;
	position?: Position;
	top?: string;
	bottom?: string;
	color?: string;
	display?: string;
	justifyContent?: string;
}

const Text = ({
	children,
	lineHeight,
	width,
	height,
	textAlign,
	fontSize,
	position,
	top,
	bottom,
	color,
	display,
	justifyContent,
}: Props) => {
	return (
		<CSSText
			style={{
				lineHeight: lineHeight,
				width: width,
				height: height,
				fontSize: fontSize,
				position: position,
				top: top,
				bottom: bottom,
				color: color,
				textAlign: textAlign,
				display: display,
				justifyContent: justifyContent,
			}}
		>
			{children}
		</CSSText>
	);
};

export default Text;
