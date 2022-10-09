import { Box } from '@mui/material';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Contract } from '../../../../../typings/boosting';
import Text from '../common/Text';
import { ContractsState } from '../state/atoms';

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
`;

const Contracts = () => {
	const contracts = useRecoilValue(ContractsState.contracts);

	return (
		<Container>
			<TextWrapper>
				<Text fontSize={'24px'}>AVAILABLE CONTRACTS</Text>
			</TextWrapper>
			{contracts.map((contract: Contract) => {
				return <ContractContainer></ContractContainer>;
			})}
		</Container>
	);
};

export default Contracts;
