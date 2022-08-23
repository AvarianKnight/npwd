import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNuiRequest } from 'fivem-nui-react-lib';
import { useHistory } from 'react-router-dom';
import { PlayerListState, PromptState } from '../atoms/state';

export const useKey = () => {
  const { send } = useNuiRequest();
  const history = useHistory();
  const setPrompt = useSetRecoilState(PromptState.prompt);
  const selectedPlayers = useRecoilValue(PlayerListState.selectedPlayerList);
  /**
   * Sends data to client to be processed.
   */
  const giveKeyHandler = () => {
    console.log('🚀 ~ file: useKey.ts ~ line 11 ~ useKey ~ selectedPlayers', selectedPlayers);
    if (selectedPlayers.length > 1) {
      setPrompt({ open: true, message: 'Do you want to give access to these people?' });
    } else {
      //@ts-ignore
      setPrompt({
        open: true,
        message: `Do you want to give access to ${selectedPlayers[0].fullname}?`,
      });
    }
  };

  /**
   * KEYS button routing
   */
  const keyRoutingHandler = () => {
    history.push('/property/keylist');
  };

  return { giveKeyHandler, keyRoutingHandler };
};
