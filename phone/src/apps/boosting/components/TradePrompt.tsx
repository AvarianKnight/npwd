import {Autocomplete, Box, TextField} from '@mui/material';
import {useRecoilState, useRecoilValue} from 'recoil';
import {PromptState} from '../../../ui/state/PromptState';
import Row from '../common/Row';
import Button from '../common/Button';
import CarImage from '../common/CarImage';
import ArrowsImg from '../../../assets/boosting/arrows.png';
import styled from 'styled-components';
import {PlayerListState} from '../../property/atoms/state';
import {TradeState} from '../state/atoms';
import {SyntheticEvent} from 'react';
import {Player} from '../../../../../typings/property';
import {useContracts} from '../hooks/useContracts';

const ArrowsImage = styled(Box)`
	background: url(${ArrowsImg}) no-repeat;
	width: 50px;
	height: 50px;
	background-size: contain;
	margin: 15px;
`;

const Wrapper = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const MuiTextField = styled(TextField)({
	label: {
		color: '#536B5B',
		fontWeight: 'bolder',
	},
	'& label.Mui-focused': {
		color: '#536B5B',
	},
	'& .MuiInput-root': {
		borderBottomColor: '#536B5B',
		paddingBottom: '5px',
		color: '#536B5B',
	},
	'& .MuiInput-underline:before': {
		borderBottomColor: '#536B5B',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: '#536B5B',
	},
	'& .MuiInput-underline:hover:before': {
		borderBottomColor: '#536B5B',
	},
	'& .MuiSvgIcon-root': {
		color: '#536B5B',
	},
	'& .MuiChip-deleteIcon': {
		color: '#fff',
	},
	'& .MuiInputBase-input': {
		height: '1.5rem',
	},
});

interface Props {
	index: number;
}

const TradePrompt = (props: Props) => {
	const playerList = useRecoilValue(PlayerListState.playerList);
	const prompt = useRecoilValue(PromptState.prompt);
	const [selectedTradePlayer, setSelectedTradePlayer] = useRecoilState(TradeState.selectedPlayer);
	const {tradeHandler, closePrompt} = useContracts();

	const selectedPlayerHandler = (
		event: SyntheticEvent<Element, Event>,
		value: string | Player,
	) => {
		setSelectedTradePlayer(value);
	};

	return (
		<Box>
			<Box style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
				<Row>{prompt.message}</Row>
				<Row alignItems={'center'}>
					<CarImage width={50} height={50} />
					<ArrowsImage />
				</Row>
				<Row>
					<Autocomplete
						id="size-small-standard"
						size="small"
						options={playerList}
						value={selectedTradePlayer}
						//@ts-ignore
						isOptionEqualToValue={(option: Player, value: Player) =>
							option.source === value.source
						}
						//@ts-ignore
						onChange={selectedPlayerHandler}
						style={{width: 280}}
						getOptionLabel={(option: any) => option.fullname}
						filterSelectedOptions
						renderInput={(params) => (
							<MuiTextField
								style={{
									color: '#576F62',
									padding: 5,
								}}
								{...params}
								variant="standard"
								label="Add People"
							/>
						)}
					/>
				</Row>
			</Box>
			<Box style={{display: 'flex', justifyContent: 'space-evenly', paddingTop: '10px'}}>
				<Button clickHandler={tradeHandler} index={props.index} text={'TRADE'} />
				<Button clickHandler={closePrompt} text={'CANCEL'} />
			</Box>
		</Box>
	);
};

export default TradePrompt;
