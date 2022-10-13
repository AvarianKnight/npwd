import {Box} from '@mui/material';
import styled from 'styled-components';
import WreckImg from '../../../assets/boosting/crash.png';

type Props = {};

const Img = styled(Box)`
	background: url(${WreckImg}) no-repeat;
	width: 87px;
	height: 68px;
	background-size: contain;
	margin: 15px;
`;

const CarWreckImg = (props: Props) => {
	return <Img />;
};

export default CarWreckImg;
