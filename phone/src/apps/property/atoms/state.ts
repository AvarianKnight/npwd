import { Player } from './../../../../../resources/server/players/player.class';
import { OwnedProperty } from './../../../../../typings/property';
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
};
