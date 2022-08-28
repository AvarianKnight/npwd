import { PlayerListState, PropertyState } from './../atoms/state';
import { useNuiRequest } from 'fivem-nui-react-lib';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { OwnedProperty, PropertyEvents } from '../../../../../typings/property';
import { PromptState } from '../atoms/state';
import { useSnackbar } from '../../../os/snackbar/hooks/useSnackbar';

export const usePrompt = () => {
  const { send } = useNuiRequest();
  const { addAlert } = useSnackbar();
  const [prompt, setPrompt] = useRecoilState(PromptState.prompt);
  const selectedPlayerList = useRecoilValue(PlayerListState.selectedPlayerList);
  const selectedProperty = useRecoilValue(PropertyState.selectedProperty);
  const setSharedKeyList = useSetRecoilState(PropertyState.sharedKeyList);

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
      send(PropertyEvents.REMOVE_PLAYER_KEY, prompt.data).then(() => {
        setSharedKeyList((val: OwnedProperty[]) =>
          val.filter((item: OwnedProperty) => item.pmaUniqueId !== prompt.data.pmaUniqueId),
        );
        setPrompt({ message: '', type: '', open: false });
        addAlert({ message: 'Removal successful!', type: 'success' });
      });
    }
  };

  return { denyHandler, acceptHandler };
};
