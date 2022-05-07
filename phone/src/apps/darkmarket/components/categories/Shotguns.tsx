import SAWNOFFSHOTGUN from '../../../../assets/WEAPON_SAWNOFFSHOTGUN.png';
import DBSHOTGUN from '../../../../assets/WEAPON_DBSHOTGUN.png';
import SPAS12 from '../../../../assets/WEAPON_SPAS12.png';

export const ShotgunCategory = {
  title: 'Shotguns',
  list: [
    {
      label: 'Sawnoff',
      name: 'WEAPON_SAWNOFFSHOTGUN',
      src: SAWNOFFSHOTGUN,
      price: 10,
      quantity: 1,
    },
    {
      label: 'Doublebarrel',
      name: 'WEAPON_DBSHOTGUN',
      src: DBSHOTGUN,
      price: 12,
      quantity: 1,
    },
    {
      label: 'SPAS12',
      name: 'WEAPON_SPAS12',
      src: SPAS12,
      price: 15,
      quantity: 1,
    },
  ],
};
