import { OwnedProperty, Player } from './../../../../../typings/property';
import { atom } from 'recoil';

export const PropertyState = {
  ownedPropertyList: atom<OwnedProperty[]>({
    key: 'ownedPropertyList',
    default: [],
  }),
};

export const SelectedPropertyState = {
  selectedProperty: atom<OwnedProperty>({
    key: 'selected-property',
    default: undefined,
  }),
};

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
  prompt: atom({
    key: 'prompt',
    default: {
      message: '',
      open: false,
    },
  }),
};
