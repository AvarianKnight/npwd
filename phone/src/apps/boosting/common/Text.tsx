import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

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
}

const Text = ({ children, lineHeight, width, height, textAlign }: Props) => {
	return (
		<CSSText style={{ lineHeight: lineHeight, width: width, height: height }}>
			{children}
		</CSSText>
	);
};

export default Text;
