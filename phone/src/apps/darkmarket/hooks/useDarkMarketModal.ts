import { darkMarketState } from './../atoms/state';
import { useRecoilState } from 'recoil';

export const useDarkMarketModal = () => {
  const [showDarkMarketModal, setShowDarkMarketModal] = useRecoilState(
    darkMarketState.darkMarketModal,
  );
  return { showDarkMarketModal, setShowDarkMarketModal };
};
