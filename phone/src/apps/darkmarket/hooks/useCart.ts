import { DarkMarketEvents, Item } from '@typings/darkmarket';
import { darkMarketState } from './../atoms/state';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useNuiRequest } from 'fivem-nui-react-lib';

export const useCart = () => {
  const { send } = useNuiRequest();
  const [cart, setCart] = useRecoilState(darkMarketState.cart);
  const setCheckoutDisplay = useSetRecoilState(darkMarketState.checkoutDisplay);

  const addItem = (item: Item) => {
    let copyCart = JSON.parse(JSON.stringify(cart));
    copyCart.push(item);
    setCart(copyCart);
  };

  const removeItem = (item: Item) => {
    let copyCart = [...cart];
    const index = copyCart.findIndex((cartItem: Item) => cartItem.name === item.name);
    if (index >= 0) {
      copyCart.splice(index, 1);
    }
    setCart(copyCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const renderCheckoutDisplay = (trueFalse: boolean) => {
    setCheckoutDisplay(trueFalse);
  };

  const initiateCheckout = () => {
    send(DarkMarketEvents.MAKE_PURCHASE, {
      cart,
    }).then(() => {
      setCart([]);
      setCheckoutDisplay(false);
    });
  };

  return { addItem, removeItem, clearCart, renderCheckoutDisplay, initiateCheckout };
};
