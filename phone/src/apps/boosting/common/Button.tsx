import {Button as MuiButton} from '@mui/material';
import styled from 'styled-components';
import Text from './Text';

const CSSButton = styled(MuiButton)`
	width: 105px;
	height: 45px;
	position: relative;
	background: #00bb60;
	border-radius: 71px;

	:hover {
		background: #087c44;
	}
`;

interface Props {
	clickHandler: () => any;
	text: string;
}

const Button = ({clickHandler, text}: Props) => {
	return (
		<CSSButton onClick={clickHandler}>
			<Text fontSize={'24px'} color={'#000000'}>
				{text}
			</Text>
		</CSSButton>
	);
};

export default Button;
