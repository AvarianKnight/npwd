import {Box} from '@mui/material';
import styled from 'styled-components';
import CancelImg from '../../../assets/boosting/cancel.png';

const Img = styled(Box)`
	background: url(${CancelImg}) no-repeat;
	width: 50px;
	height: 50px;
	background-size: contain;
	margin: 15px;
`;

const DeclineImage = () => {
	return <Img />;
};

export default DeclineImage;
