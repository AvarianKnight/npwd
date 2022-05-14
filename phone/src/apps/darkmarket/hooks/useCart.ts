import { DarkMarketEvents, Item } from '@typings/darkmarket';
import { darkMarketState } from './../atoms/state';
import { useRecoilState, useSetRecoilState } from 'recoil';
import fetchNui from '@utils/fetchNui';
import { ServerPromiseResp } from '@typings/common';
import { useSnackbar } from '@os/snackbar/hooks/useSnackbar';
import { useHistory } from 'react-router-dom';

export const useCart = () => {
  const { addAlert } = useSnackbar();
  const [cart, setCart] = useRecoilState(darkMarketState.cart);
  const setCrypto = useSetRecoilState(darkMarketState.crypto);
  const setNotifyDisplay = useSetRecoilState(darkMarketState.notifyDisplay);
  const history = useHistory();

  const addItem = (item: Item) => {
    console.log(cart);
    setCart((cart) => [...cart, item]);
  };

  const removeItem = (item: Item) => {
    let isFirst = true;
    setCart((cart) =>
      cart.filter((cartItem) => {
        if (isFirst && cartItem.name === item.name) {
          isFirst = false;
          return false;
        }
        return true;
      }),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const renderNotifyDisplay = (show: boolean) => {
    setNotifyDisplay(show);
  };

  const initiateCheckout = () => {
    fetchNui<ServerPromiseResp<number>>(DarkMarketEvents.MAKE_PURCHASE, cart).then((serverResp) => {
      if (serverResp.status !== 'ok') {
        addAlert({ message: serverResp.errorMsg, type: 'error' });
      } else {
        setCrypto(serverResp.data);
        addAlert({ message: 'Purchase successful!', type: 'info' });
      }

      history.replace('/darkmarket');
      clearCart();
      renderNotifyDisplay(false);
    });
  };

  return { addItem, removeItem, clearCart, renderNotifyDisplay, initiateCheckout };
};
