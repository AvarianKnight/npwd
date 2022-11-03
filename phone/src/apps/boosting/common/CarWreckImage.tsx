import {Box} from '@mui/material';
import styled from 'styled-components';
import WreckImg from '../../../assets/boosting/crash.png';

const Img = styled(Box)`
	background: url(${WreckImg}) no-repeat;
	width: 87px;
	height: 68px;
	background-size: contain;
	margin: 15px;
`;

const CarWreckImage = () => {
	return <Img />;
};

export default CarWreckImage;
