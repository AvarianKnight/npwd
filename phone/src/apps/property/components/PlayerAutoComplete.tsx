import { Autocomplete, Chip } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { Player } from '../../../../../resources/server/players/player.class';
import { TextField } from '../../../ui/components/Input';
import { PlayerListState } from '../atoms/state';
import { usePlayer } from '../hooks/usePlayer';

const PlayerAutoComplete = () => {
  usePlayer();
  const playerList = useRecoilValue(PlayerListState.playerList);

  return (
    <Autocomplete
      id="size-small-standard"
      size="small"
      multiple
      options={playerList}
      getOptionLabel={(option: any) => option.fullname}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} variant="standard" label="Add People" />}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            style={{ backgroundColor: '#5090D3' }}
            variant="outlined"
            label={option.fullname}
            size="small"
            {...getTagProps({ index })}
          />
        ))
      }
    />
  );
};

export default PlayerAutoComplete;
