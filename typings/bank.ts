export interface IBankCredentials {
  name: string;
  balance: number;
}

export interface ITransactions {
  uniqueId: number;
  type: string;
  amount: number;
}

export interface Transfer {
  id: number;
  targetID: number;
  uniqueId: string;
  transferAmount: number;
  message: string;
}

export enum BankEvents {
  ADD_TRANSFER = 'npwd:addTransfer',
  ADD_TRANSFER_SUCCESS = 'npwd:addTransferSuccess',
  FETCH_TRANSACTIONS = 'npwd:fetchAllTransactions',
  SEND_TRANSFERS = 'npwd:sendTransfers',
  TRANSACTION_ALERT = 'npwd:bankTransactionAlert',
  TRANSACTION_NOTIFICATION = 'npwd:bankTransactionNotification',
  SEND_CREDENTIALS = 'npwd:sendBankCredentials',
  GET_CREDENTIALS = 'npwd:getBankCredentials',
  SEND_ALERT = 'npwd:sendBankAlert',
  SEND_NOTIFICATION = 'npwd:sendBankNotification',
}
