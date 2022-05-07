import { atom } from 'recoil';
import { PistolCategory } from '../components/categories/Pistols';
import { RifleCategory } from '../components/categories/Rifles';
import { Category, Item } from '@typings/darkmarket';
import { ShotgunCategory } from '../components/categories/Shotguns';
import { AutomaticsCategory } from '../components/categories/Automatics';

export const darkMarketState = {
  darkMarketModal: atom<boolean>({
    key: 'darkMarketVisibility',
    default: false,
  }),
  crypto: atom<number>({
    key: 'crypto',
    default: 0,
  }),
  selectedCategory: atom<Category>({
    key: 'selectedCategory',
    default: RifleCategory,
  }),
  categories: atom<Category[]>({
    key: 'categories',
    default: []
      .concat(RifleCategory)
      .concat(PistolCategory)
      .concat(ShotgunCategory)
      .concat(AutomaticsCategory),
  }),
  cart: atom<Item[]>({
    key: 'cart',
    default: [],
  }),
  checkoutDisplay: atom({
    key: 'checkoutDisplay',
    default: false,
  }),
};
