import { useNuiRequest } from 'fivem-nui-react-lib';
import { useSetRecoilState } from 'recoil';
import { PromptState } from '../atoms/state';

export const usePrompt = () => {
  const { send } = useNuiRequest();
  const setPrompt = useSetRecoilState(PromptState.prompt);

  const denyHandler = () => {
    setPrompt({ message: '', open: false });
  };

  const acceptHandler = () => {
    // send(() => )
    setPrompt({ message: '', open: false });
  };

  return { denyHandler, acceptHandler };
};
