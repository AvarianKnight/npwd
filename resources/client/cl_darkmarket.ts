import { DarkMarketEvents } from '@typings/darkmarket';

RegisterNuiCallbackType(DarkMarketEvents.FETCH_CRYPTO);
RegisterNuiCallbackType(DarkMarketEvents.MAKE_PURCHASE);

on(`__cfx_nui:${DarkMarketEvents.FETCH_CRYPTO}`, (data: any, cb: any) => {
  emitNet(DarkMarketEvents.FETCH_CRYPTO);
  cb({});
});

on(`__cfx_nui:${DarkMarketEvents.MAKE_PURCHASE}`, (data: any, cb: any) => {
  emitNet(DarkMarketEvents.MAKE_PURCHASE, data.cart);
  cb({});
});

onNet(DarkMarketEvents.SHOW_CRYPTO_UI, (amount: number) => {
  console.log(amount);
  SendNUIMessage({
    app: 'DARKMARKET',
    method: DarkMarketEvents.SHOW_CRYPTO_UI,
    data: amount,
  });
});
