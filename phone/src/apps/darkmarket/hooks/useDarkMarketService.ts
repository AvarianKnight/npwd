import { useDarkMarketNotification } from './useDarkMarketNotification';
import { useNuiEvent } from 'fivem-nui-react-lib';
import { DarkMarketEvents } from '@typings/darkmarket';
import { useCryptoService } from './useCryptoService';
import { useSnackbar } from '../../../os/snackbar/hooks/useSnackbar';

export const useDarkMarketService = () => {
  const crypto = useCryptoService();
  const { setNotification } = useDarkMarketNotification();
  const { addAlert } = useSnackbar();

  const alertSuccessHandler = () => {
    addAlert({
      message: 'Trade Success!',
      type: 'success',
    });
  };

  const alertFailHandler = () => {
    addAlert({
      message: 'User is not around',
      type: 'error',
    });
  };

  useNuiEvent('DARKMARKET', DarkMarketEvents.SHOW_CRYPTO_UI, crypto.setCrypto);
  useNuiEvent('DARKMARKET', DarkMarketEvents.SEND_NOTIFICATION, setNotification);

  useNuiEvent('DARKMARKET', DarkMarketEvents.ALERT_SUCCESS, alertSuccessHandler);
  useNuiEvent('DARKMARKET', DarkMarketEvents.ALERT_FAILURE, alertFailHandler);
};
