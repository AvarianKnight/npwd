import { OwnedProperty } from './../../../../../typings/property';
import { atom } from 'recoil';

export const PropertyState = {
  property: atom<OwnedProperty[]>({
    key: 'property',
    default: [],
  }),
};
