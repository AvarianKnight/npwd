import { DarkMarketEvents } from '@typings/darkmarket';
import { darkMarketState } from './../atoms/state';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useNuiRequest } from 'fivem-nui-react-lib';
import { useSnackbar } from '../../../os/snackbar/hooks/useSnackbar';

export const useTrade = () => {
  const crypto = useRecoilValue(darkMarketState.crypto);
  const [trade, setTrade] = useRecoilState(darkMarketState.tradeDM);
  const setNotifyDisplay = useSetRecoilState(darkMarketState.notifyDisplay);
  const { send } = useNuiRequest();
  const { addAlert } = useSnackbar();

  const tradeHandler = () => {
    if (crypto >= Number(trade.amount) && Number(trade.amount) > 0) {
      send(DarkMarketEvents.INIATE_TRADE, trade).then(() => {
        setNotifyDisplay(false);
        setTrade((state) => ({ ...state, playerId: '', amount: '' }));
      });
    } else if (crypto < Number(trade.amount)) {
      setNotifyDisplay(false);
      addAlert({
        message: 'Invalid trade',
        type: 'error',
      });
    } else if (Number(trade.amount) <= 0) {
      setNotifyDisplay(false);
      addAlert({
        message: 'Invalid trade',
        type: 'error',
      });
    }
  };

  return { tradeHandler };
};
