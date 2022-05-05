export enum DarkMarketEvents {
  FETCH_CRYPTO = 'npwd:fetchCrypto',
  SHOW_CRYPTO_UI = 'npwd:showCryptoUi',
  MAKE_PURCHASE = 'npwd:makePurchase',
}

export interface Category {
  title: string;
  list: Item[];
}

export interface Item {
  label: string;
  name: string;
  src: string;
  price: number;
  quantity: number;
}
