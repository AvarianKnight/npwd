import { DarkMarketEvents, Item } from '@typings/darkmarket';
import { allowedWeapons, WeaponCoords } from './darkmarket.config';
import { onNetPromise } from '../lib/PromiseNetEvents/onNetPromise';

export const exp = (global as any).exports;
export const PMA: any = exp['pma-framework'].getData();
export const ox = exp.oxmysql;
export const AC = exp['pma-anticheat'];

let alertId = 0;
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
    checkoutItems.forEach((item: Item) => {
      totalCoins += item.price;
    });
    const currentCurrentAmount = await ox.scalar_async(
      `SELECT amount FROM cryptocurrency WHERE ssn = ?`,
      [ply.uniqueId],
    );
    const newCoinTotal = currentCurrentAmount - totalCoins;

    if (newCoinTotal < 0) {
      return resp({
        status: 'error',
        errorMsg: 'You do not have enough money for this transaction',
      });
    }

    await ox.update(`UPDATE cryptocurrency SET amount = ? WHERE ssn = ?`, [
      newCoinTotal,
      ply.uniqueId,
    ]);
    weaponDrops(ply, checkoutItems, newCoinTotal);

    resp({ status: 'ok', data: newCoinTotal });
  } catch (err) {
    console.error(err);
    resp({ status: 'error', errorMsg: 'INTERNAL_ERROR' });
  }
});

const weaponDrops = (ply: any, items: Item[], newCoinTotal: number) => {
  const index = Math.floor(Math.random() * (WeaponCoords.length + 1));
  const coords = WeaponCoords[index];
  const jsonString = items.map((newItemString: Item) => {
    return {
      name: newItemString.name,
      price: newItemString.price,
    };
  });
  for (const item of items) {
    const [weapon] = PMA.getWeapon(item.name);
    if (!weapon || !allowedWeapons.has(item.name)) {
      AC.log(
        '*Black Market purchase!*',
        `Weapons delivered at: ${JSON.stringify(coords).replace(
          /\[|\]/g,
          '',
        )}\nOverhead: ${GetPlayerName(
          ply.source,
        )} \n Character Name: ${ply.getPlayerName()} \n Has ${newCoinTotal} coins after just purchasing... \n${JSON.stringify(
          jsonString,
        ).replace(/\[|\]/g, '')} which is an illegal purchase! Ban pwease @moderator.`,
        `blue`,
        `darkmarketLogs`,
      );
      return; // TODO: Anticheat trigger
    }

    if (item.quantity === 1) {
      PMA.createWeaponPickup(weapon.label, weapon.name, 1, coords);
    } else {
      for (let i = 0; i < item.quantity; i++) {
        PMA.createWeaponPickup(weapon.label, weapon.name, 1, coords);
      }
    }
  }

  emitNet(DarkMarketEvents.PICKUP_WEAPONS, ply.source, coords, (alertId += 1));

  AC.log(
    '*Black Market purchase!*',
    `Weapons delivered at: ${JSON.stringify(coords).replace(
      /\[|\]/g,
      '',
    )}\nOverhead: ${GetPlayerName(
      ply.source,
    )} \n Character Name: ${ply.getPlayerName()} \n Has ${newCoinTotal} coins after just purchasing... \n${JSON.stringify(
      jsonString,
    ).replace(/\[|\]/g, '')}`,
    `blue`,
    `darkmarketLogs`,
  );
};
