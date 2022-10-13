import {Autocomplete, Box, Chip} from '@mui/material';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components';
import {Player} from '../../../../../typings/property';
import {TextField} from '../../../ui/components/Input';
import {PlayerListState} from '../atoms/state';
import {useKey} from '../hooks/useKey';
import {usePlayer} from '../hooks/usePlayer';
import {StyledButton, StyledText} from './styles';

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

const PlayerAutoComplete = () => {
	const {giveKeyHandler} = useKey();
	const {selectedPlayerHandler} = usePlayer();
	const playerList = useRecoilValue(PlayerListState.playerList);
	const selectedPlayer = useRecoilValue(PlayerListState.selectedPlayer);
	return (
		<Wrapper>
			<Autocomplete
				id="size-small-standard"
				size="small"
				options={playerList}
				value={selectedPlayer}
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
			<StyledButton style={{marginTop: 10}} onClick={giveKeyHandler}>
				<StyledText>Give Key</StyledText>
			</StyledButton>
		</Wrapper>
	);
};

export default PlayerAutoComplete;
