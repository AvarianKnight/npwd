import { DarkMarketEvents, Item } from '@typings/darkmarket';
import { allowedWeapons, Weapon } from './darkmarket.config';
import { onNetPromise } from '../lib/PromiseNetEvents/onNetPromise';
import { Vector3 } from '@nativewrappers/client';

export const exp = (global as any).exports;
export const PMA: any = exp['pma-framework'].getData();
export const ox = exp.oxmysql;

onNet(DarkMarketEvents.FETCH_CRYPTO, () => {
  const ply = PMA.getPlayerFromId(source);

  ox.scalar(`SELECT amount FROM cryptocurrency WHERE ssn = ?`, [ply.uniqueId], (amount: number) => {
    emitNet(DarkMarketEvents.SHOW_CRYPTO_UI, ply.source, amount);
  });
});

onNetPromise<Item[]>(DarkMarketEvents.MAKE_PURCHASE, async (reqObj, resp) => {
  try {
    const checkoutItems = reqObj.data;
    const ply = PMA.getPlayerFromId(source);
    let totalCoins = 0;
    console.log(checkoutItems);
    checkoutItems.forEach((item: Item) => {
      totalCoins += item.price;
    });
    console.log(totalCoins);
    const currentCurrentAmount = await ox.scalar_async(
      `SELECT amount FROM cryptocurrency WHERE ssn = ?`,
      [ply.uniqueId],
    );
    console.log(currentCurrentAmount);
    const newCoinTotal = currentCurrentAmount - totalCoins;

    if (newCoinTotal < 0)
      return resp({
        status: 'error',
        errorMsg: "You don't have enough money for this transaction",
      });

    await ox.update(`UPDATE cryptocurrency SET amount = ? WHERE ssn = ?`, [
      newCoinTotal,
      ply.uniqueId,
    ]);
    weaponDrops(ply, checkoutItems);

    resp({ status: 'ok', data: newCoinTotal });
  } catch (err) {
    console.error(err);
    resp({ status: 'error', errorMsg: 'INTERNAL_ERROR' });
  }
});

const weaponDrops = (ply: any, items: Item[]) => {
  for (const item of items) {
    const [weapon] = PMA.getWeapon(item.name);
    if (!weapon || !allowedWeapons.has(item.name)) {
      return; // TODO: Anticheat trigger
    }

    PMA.createWeaponPickup(weapon.label, weapon.name, 1, Weapon.add(new Vector3(0, 0, 0.5)));
  }
};
