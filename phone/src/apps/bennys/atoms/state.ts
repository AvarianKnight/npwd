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

export const PromptState = {
  prompt: atom({
    key: 'promptBennys',
    default: {
      message: '',
      open: false,
    },
  }),
};

export const VehicleState = {
  vehicle: atom({
    key: 'vehicleBennys',
    default: undefined,
  }),
};

export const DropdownState = {
  dropdown: atom({
    key: 'dropdownBennys',
    default: false,
  }),
};

export const AnchorState = {
  anchor: atom({
    key: 'anchorBennys',
    default: undefined,
  }),
};
