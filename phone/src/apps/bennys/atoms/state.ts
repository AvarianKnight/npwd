import { atom } from 'recoil';
import { Vehicle } from '../../../../../typings/bennys';

export const bennysState = {
  vehicleSelected: atom<Vehicle>({
    key: 'vehicleSelected',
    default: null,
  }),
  vehicles: atom({
    key: 'vehicles',
    default: [],
  }),
  showNotify: atom({
    key: 'showNotify',
    default: false,
  }),
  impound: atom({
    key: 'impound',
    default: {
      regularFee: 0,
      policeFee: 0,
    },
  }),
};

export const hoverState = {
  hoverItem: atom<Vehicle>({
    key: 'hover',
    default: undefined,
  }),
  anchorItem: atom({
    key: 'anchor',
    default: undefined,
  }),
};
