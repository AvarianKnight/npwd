import { Autocomplete, Box, Button, Chip, Typography } from '@mui/material';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { TextField } from '../../../ui/components/Input';
import { PlayerListState } from '../atoms/state';
import { usePlayer } from '../hooks/usePlayer';
import { StyledButton, StyledText } from './styles';
import { useKey } from '../hooks/useKey';

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
  const { giveKeyHandler } = useKey();
  const { selectedPlayerHandler } = usePlayer();
  const playerList = useRecoilValue(PlayerListState.playerList);

  return (
    <Wrapper>
      <Autocomplete
        id="size-small-standard"
        size="small"
        multiple
        disableClearable={true}
        options={playerList}
        //@ts-ignore
        onChange={selectedPlayerHandler}
        style={{ width: 280 }}
        getOptionLabel={(option: any) => option.fullname}
        filterSelectedOptions
        renderInput={(params) => <MuiTextField {...params} variant="standard" label="Add People" />}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              style={{
                backgroundColor: '#576F62',
                padding: 5,
              }}
              variant="outlined"
              label={option.fullname}
              size="small"
              {...getTagProps({ index })}
            />
          ))
        }
      />
      <StyledButton style={{ marginTop: 10 }} onClick={giveKeyHandler}>
        <StyledText>Give Key</StyledText>
      </StyledButton>
    </Wrapper>
  );
};

export default PlayerAutoComplete;
