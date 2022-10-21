import {Box, IconButton as MuiButton} from '@mui/material';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components';
import {ButtonOption, Contract} from '@typings/boosting';
import ButtonImg from '../../../assets/boosting/button.png';
import CarImg from '../../../assets/boosting/car.png';
import DeclineImg from '../../../assets/boosting/decline.png';
import StartImg from '../../../assets/boosting/start.png';
import TradeImg from '../../../assets/boosting/trade.png';
import Text from '../common/Text';
import {useContracts} from '../hooks/useContracts';
import {ContractsState} from '../state/atoms';
import {useFlyOver} from '../hooks/useFlyOver';
import {phoneState} from '../../../os/phone/hooks/state';
import FlyOver from './FlyOver';

const Container = styled(Box)`
	width: 355px;
	height: 295px;
	top: 400px;
	left: 25px;
	border-radius: 34px;
	background: rgba(7, 15, 3, 0.77);
	position: absolute;
`;

const TextWrapper = styled(Box)`
	display: flex;
	width: 100%;
	justify-content: center;
`;

const ContractContainer = styled(Box)`
	display: flex;
	width: 100%;
	height: 56px;
	left: 0px;
	top: -9px;
	background: #010300;
	border-radius: 71px;
	margin-bottom: 15px;
`;

const Wrapper = styled(Box)`
	display: flex;
`;

const Car = styled(Box)`
	background: url(${CarImg}) no-repeat;
	width: 50px;
	height: 26px;
	top: 10px;
	left: 10px;
	position: relative;
`;

const ButtonWrapper = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

const Button = styled(MuiButton)`
	position: relative;
	width: 28px;
	height: 25px;
	display: flex;
	border-radius: 0px;
	padding: 0px;
	justify-content: center;
	align-items: center;
	background: url(${ButtonImg}) #01b963 no-repeat;
`;

const Start = styled(Box)`
	background: url(${StartImg}) no-repeat;
	background-size: contain;
	width: 16px;
	height: 16px;
`;

const Trade = styled(Box)`
	background: url(${TradeImg}) no-repeat;
	background-size: contain;
	width: 21px;
	height: 20px;
`;

const Decline = styled(Box)`
	background: url(${DeclineImg}) no-repeat;
	background-size: contain;
	width: 15px;
	height: 16px;
`;

const ContractsWrapper = styled(Box)`
	overflow: auto;
	width: 355px;
	height: 270px;
`;

//interface Props {
//	startPrompt: (index: number) => any;
//	tradePrompt: (index: number) => any;
//	declinePrompt: (index: number) => any;
//}

//const Contracts = ({startPrompt, tradePrompt, declinePrompt}: Props) => {

const Contracts = () => {
	const {startPrompt, tradePrompt, declinePrompt} = useContracts();
	const contracts = useRecoilValue(ContractsState.contracts);
	const {flyOverOpenHandler, flyOverCloseHandler} = useFlyOver();
	const visibility = useRecoilValue(phoneState.visibility);

	const buttonOptions: ButtonOption[] = [
		{
			component: <Start />,
			text: 'START',
			action: (index: number) => startPrompt(index),
		},
		{
			component: <Trade />,
			text: 'TRADE',
			action: (index: number) => tradePrompt(index),
		},
		{
			component: <Decline />,
			text: 'DECLINE',
			action: (index: number) => declinePrompt(index),
		},
	];

	return (
		<Container>
			<TextWrapper style={{paddingBottom: '5px'}}>
				<Text fontSize={'24px'}>AVAILABLE CONTRACTS</Text>
			</TextWrapper>
			{visibility ? <FlyOver /> : <></>}
			<ContractsWrapper>
				{contracts?.map((contract: Contract, contactIndex: number) => {
					return (
						<ContractContainer
							key={contactIndex}
							onMouseEnter={(e) => flyOverOpenHandler(e, contactIndex)}
							onMouseLeave={() => flyOverCloseHandler()}
						>
							<Wrapper style={{width: '125px'}}>
								<Car />
								<Wrapper style={{flexWrap: 'wrap', justifyContent: 'center'}}>
									<Text position={'relative'} top={'5px'}>
										{contract.vehicle}
									</Text>
									<Text position={'relative'} bottom={'5px'} color={'#42FFA7'}>
										CLASS {contract.contract_type}
									</Text>
								</Wrapper>
							</Wrapper>
							<Wrapper style={{alignItems: 'center'}}>
								{buttonOptions.map((buttonOption: ButtonOption, index: number) => {
									return (
										<ButtonWrapper key={index}>
											<Button
												onClick={() => buttonOption.action(contactIndex)}
											>
												{buttonOption.component}
											</Button>
											<TextWrapper>
												<Text
													color={'#42FFA7'}
													fontSize={'11px'}
													lineHeight={'13px'}
													textAlign={'center'}
												>
													{buttonOption.text}
												</Text>
											</TextWrapper>
										</ButtonWrapper>
									);
								})}
							</Wrapper>
						</ContractContainer>
					);
				})}
			</ContractsWrapper>
		</Container>
	);
};

export default Contracts;
