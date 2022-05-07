import BERETTA from '../../../../assets/WEAPON_BERETTA.png';
import FNX from '../../../../assets/WEAPON_FNX.png';
import LUGER from '../../../../assets/WEAPON_LUGER.png';
import PISTOL50 from '../../../../assets/WEAPON_PISTOL50.png';
import SNSPISTOL from '../../../../assets/WEAPON_SNSPISTOL_MK2.png';

export const PistolCategory = {
  title: 'Pistols',
  list: [
    {
      label: 'Beretta',
      name: 'WEAPON_BERETTA',
      src: BERETTA,
      price: 1,
      quantity: 2,
    },
    {
      label: 'FNX',
      name: 'WEAPON_FNX',
      src: FNX,
      price: 1,
      quantity: 3,
    },
    {
      label: 'Luger',
      name: 'WEAPON_LUGER',
      src: LUGER,
      price: 1,
      quantity: 2,
    },
    {
      label: 'Desert Eagle',
      name: 'WEAPON_PISTOL50',
      src: PISTOL50,
      price: 5,
      quantity: 1,
    },
    {
      label: 'SNS',
      name: 'WEAPON_SNSPISTOL_MK2',
      src: SNSPISTOL,
      price: 1,
      quantity: 3,
    },
  ],
};
