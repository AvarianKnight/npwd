import { useNuiRequest } from 'fivem-nui-react-lib';
import { useHistory } from 'react-router-dom';

export const useKey = () => {
  const { send } = useNuiRequest();
  const history = useHistory();

  /**
   * Sends data to client to be processed.
   */
  const giveKeyHandler = () => {};

  /**
   * KEYS button routing
   */
  const keyRoutingHandler = () => {
    history.push('/property/keylist');
  };

  return { giveKeyHandler, keyRoutingHandler };
};
