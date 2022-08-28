import { PropertyState } from './../atoms/state';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useNuiEvent, useNuiRequest } from 'fivem-nui-react-lib';
import { useHistory } from 'react-router-dom';
import { PlayerListState, PromptState } from '../atoms/state';
import { OwnedProperty, PropertyEvents } from '../../../../../typings/property';

export const useKey = () => {
  const { send } = useNuiRequest();
  const history = useHistory();
  const setPrompt = useSetRecoilState(PromptState.prompt);
  const selectedPlayers = useRecoilValue(PlayerListState.selectedPlayerList);
  const selectedProperty = useRecoilValue(PropertyState.selectedProperty);
  const [sharedKeyList, setSharedKeyList] = useRecoilState(PropertyState.sharedKeyList);

  /**
   * Sends data to client to be processed.
   */
  const giveKeyHandler = () => {
    if (selectedPlayers.length > 1) {
      setPrompt({
        type: 'add',
        open: true,
        message: 'Do you want to give access to these people?',
      });
    } else {
      setPrompt({
        type: 'add',
        open: true,
        //@ts-ignore
        message: `Do you want to give access to ${selectedPlayers[0].fullname}?`,
      });
    }
  };

  const deleteKeyHandler = (index: number, playerToDelete: any) => {
    setPrompt({
      open: true,
      type: 'remove',
      data: playerToDelete,
      //@ts-ignore
      message: `Do you want to remove access to ${sharedKeyList[index].fullname}?`,
    });
    // send(PropertyEvents.REQUEST_REMOVE_PLAYER_KEY, selectedProperty);
  };

  /**
   * KEYS button routing
   */
  const keyRoutingHandler = () => {
    history.push('/property/keylist');
  };

  const returnKeyHandler = (keyList: OwnedProperty[]) => {
    setSharedKeyList(keyList);
  };

  useNuiEvent('PROPERTY', 'npwd:property:returnKeyHolders', returnKeyHandler);

  return { giveKeyHandler, keyRoutingHandler, deleteKeyHandler };
};
