export enum DarkMarketEvents {
  FETCH_CRYPTO = 'npwd:fetchCrypto',
  SHOW_CRYPTO_UI = 'npwd:showCryptoUi',
  MAKE_PURCHASE = 'npwd:makePurchase',
  PICKUP_WEAPONS = 'npwd:pickupWeapons',
  SEND_NOTIFICATION = 'npwd:sendDarkMarketNotification',
  INIATE_TRADE = 'npwd:tradeCrypto',
  ALERT_SUCCESS = 'npwd:dmAlertSuccess',
  ALERT_FAILURE = 'npwd:dmAlertFailure',
  NOTIFY_OF_TRADE = 'npwd:dmNotifyOfTrade',
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
