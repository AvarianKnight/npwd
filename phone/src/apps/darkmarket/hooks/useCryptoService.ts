import { darkMarketState } from './../atoms/state';
import { useRecoilState } from 'recoil';

export const useCryptoService = () => {
  const [crypto, setCrypto] = useRecoilState(darkMarketState.crypto);
  return { crypto, setCrypto };
};
