import { PlayerListState, PropertyState } from './../atoms/state';
import { useNuiRequest } from 'fivem-nui-react-lib';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { PropertyEvents } from '../../../../../typings/property';
import { PromptState } from '../atoms/state';

export const usePrompt = () => {
  const { send } = useNuiRequest();
  const [prompt, setPrompt] = useRecoilState(PromptState.prompt);
  const selectedPlayerList = useRecoilValue(PlayerListState.selectedPlayerList);
  const selectedProperty = useRecoilValue(PropertyState.selectedProperty);

  const denyHandler = () => {
    setPrompt({ message: '', type: '', open: false });
  };

  const acceptHandler = () => {
    if (prompt.type === 'add') {
      send(PropertyEvents.GIVE_PLAYER_KEY, {
        players: selectedPlayerList,
        property: selectedProperty,
      }).then(() => {
        setPrompt({ message: '', type: '', open: false });
      });
    } else if (prompt.type === 'remove') {
      send(PropertyEvents.REMOVE_PLAYER_KEY, { deletedPlayer: prompt.data }).then(() => {
        setPrompt({ message: '', type: '', open: false });
      });
    }
  };

  return { denyHandler, acceptHandler };
};
