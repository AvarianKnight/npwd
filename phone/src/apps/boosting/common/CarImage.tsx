import {Box} from '@mui/material';
import styled from 'styled-components';
import CarImg from '../../../assets/boosting/car.png';

const Img = styled(Box)<{width: number; height: number}>`
	background: url(${CarImg}) no-repeat;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background-size: contain;
	margin: 15px;
`;

interface Props {
	width: number;
	height: number;
}

const CarImage = ({width, height}: Props) => {
	return <Img width={width} height={height} />;
};

export default CarImage;
