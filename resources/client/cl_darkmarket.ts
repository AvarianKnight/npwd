import { DarkMarketEvents } from '@typings/darkmarket';
import { RegisterNuiProxy } from './cl_utils';

RegisterNuiCallbackType(DarkMarketEvents.FETCH_CRYPTO);
RegisterNuiCallbackType(DarkMarketEvents.MAKE_PURCHASE);

on(`__cfx_nui:${DarkMarketEvents.FETCH_CRYPTO}`, (data: any, cb: any) => {
  emitNet(DarkMarketEvents.FETCH_CRYPTO);
  cb({});
});

RegisterNuiProxy(DarkMarketEvents.MAKE_PURCHASE);

onNet(DarkMarketEvents.SHOW_CRYPTO_UI, (amount: number) => {
  console.log(amount);
  SendNUIMessage({
    app: 'DARKMARKET',
    method: DarkMarketEvents.SHOW_CRYPTO_UI,
    data: amount,
  });
});
