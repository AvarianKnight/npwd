import { atom } from 'recoil';
import { ImagePopout } from './../interface/InterfaceUI';

export const HoverState = {
  imagePopout: atom<ImagePopout | undefined>({
    key: 'imagePopout',
    default: undefined,
  }),
};
