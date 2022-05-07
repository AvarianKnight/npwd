import { BlipColor, Game, Vector3, World } from '@nativewrappers/client';
import { DarkMarketEvents } from '@typings/darkmarket';
import { Delay } from '../utils/fivem';
import { RegisterNuiProxy } from './cl_utils';

RegisterNuiCallbackType(DarkMarketEvents.FETCH_CRYPTO);
RegisterNuiCallbackType(DarkMarketEvents.MAKE_PURCHASE);
RegisterNuiProxy(DarkMarketEvents.MAKE_PURCHASE);

on(`__cfx_nui:${DarkMarketEvents.FETCH_CRYPTO}`, (data: any, cb: any) => {
  emitNet(DarkMarketEvents.FETCH_CRYPTO);
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

onNet(DarkMarketEvents.PICKUP_WEAPONS, (coords: Vector3) => {
  const blip = World.createBlip(coords, 5.0);
  blip.Name = 'Drop Off';
  blip.ShowRoute = true;
  blip.Color = BlipColor.Yellow;
  SetBlipRouteColour(blip.Handle, BlipColor.Yellow);

  const weaponDropTick = setTick(async () => {
    if (Game.PlayerPed.Position.distance(coords) < 5) {
      await Delay(250);
      blip.delete();
      clearTick(weaponDropTick);
    }
  });
});
