import { useNuiEvent } from 'fivem-nui-react-lib';
import { DarkMarketEvents } from '@typings/darkmarket';
import { useCryptoService } from './useCryptoService';

export const useDarkMarketService = () => {
  const crypto = useCryptoService();

  // useNuiEvent('BANK', DarkMarketEvents.FETCH_CRYPTO, crypto.setCrypto);
  useNuiEvent('DARKMARKET', DarkMarketEvents.SHOW_CRYPTO_UI, crypto.setCrypto);
};
