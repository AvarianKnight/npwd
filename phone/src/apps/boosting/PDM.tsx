import backSplashImg from '../../assets/boosting/pdm/backsplash.png';
import logoImg from '../../assets/boosting/pdm/logo.png';
import carImg from '../../assets/boosting/pdm/car.png';
import homeImg from '../../assets/boosting/pdm/home.png';
import styled from 'styled-components';
import {Box, IconButton, Typography} from '@mui/material';
import {useHistory} from 'react-router-dom';
import Text from './common/Text';

type Props = {};

const Container = styled(Box)`
	position: absolute;
	background: #000000 url(${backSplashImg}) no-repeat;
	background-size: contain;
	height: 100%;
	width: 100%;
	user-select: none;
	display: flex;
	justify-content: center;
`;

const Logo = styled(Box)`
	background: url(${logoImg}) no-repeat;
	width: 328px;
	height: 100px;
	top: 28px;
	position: absolute;
`;

const Home = styled(Box)`
	background: url(${homeImg}) no-repeat;
	width: 48px;
	height: 36px;
`;

const Background = styled(Box)`
	position: absolute;
	width: 342px;
	height: 542px;
	top: 145px;
	background: rgba(29, 35, 56, 0.83);
	border-radius: 41px;
`;

const CarImg = styled(Box)`
	width: 339px;
	height: 212px;
	left: 4px;
	top: 233px;
	background: url(${carImg}) no-repeat;
`;

const TextWrapper = styled(Box)`
	display: flex;
	justify-content: center;
	padding: 20px;
	flex-wrap: wrap;
`;

const PDM = (props: Props) => {
	const history = useHistory();

	const boostHomeHandler = () => {
		history.push('/boosting/app');
	};

	return (
		<Container>
			<Logo />
			<Background>
				<TextWrapper>
					<Text fontSize="24px" lineHeight="29px" color="#fff" textAlign="center">
						GET THE CAR YOU'VE ALWAYS DREAMED OF
					</Text>
				</TextWrapper>
				<CarImg />
				<TextWrapper>
					<Text fontSize="16px" lineHeight="29px" color="#fff" textAlign="center">
						“Premium Deluxe Motorsport Showroom is the finest, most trustworthy, five
						star user review, completely legitimate car dealership in Los Santos.”
					</Text>
					<Text>-Anonymous Review</Text>
				</TextWrapper>
				<IconButton
					onClick={boostHomeHandler}
					style={{position: 'absolute', bottom: 0, right: 0}}
				>
					<Home />
				</IconButton>
			</Background>
		</Container>
	);
};

export default PDM;
