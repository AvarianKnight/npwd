import { OwnedProperty, Player, PromptType } from './../../../../../typings/property';
import { atom } from 'recoil';

export const PropertyState = {
  ownedPropertyList: atom<OwnedProperty[]>({
    key: 'ownedPropertyList',
    default: [],
  }),
  selectedProperty: atom<OwnedProperty>({
    key: 'selectedProperty',
    default: undefined,
  }),
  sharedKeyList: atom<OwnedProperty[]>({
    key: 'sharedKeyList',
    default: [],
  }),
};

// export const SelectedPropertyState = {
//   selectedProperty: atom<OwnedProperty>({
//     key: 'selected-property',
//     default: undefined,
//   }),
// };

export const PlayerListState = {
  playerList: atom<Player[]>({
    key: 'playerList',
    default: [],
  }),
  selectedPlayerList: atom<(string | Player)[]>({
    key: 'selectedPlayerList',
    default: [],
  }),
};

export const PromptState = {
  prompt: atom<PromptType>({
    key: 'prompt',
    default: {
      type: '',
      message: '',
      open: false,
      data: undefined,
    },
  }),
};
