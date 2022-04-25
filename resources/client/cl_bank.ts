import { BankEvents, Transfer, ITransactions } from '@typings/bank';

RegisterNuiCallbackType(BankEvents.GET_CREDENTIALS);
RegisterNuiCallbackType(BankEvents.ADD_TRANSFER);

on(`__cfx_nui:${BankEvents.GET_CREDENTIALS}`, (data: any, cb: any) => {
  emitNet(BankEvents.GET_CREDENTIALS);
  cb({});
});

/**
 * targetID
 * transferAmount
 * message
 */
on(`__cfx_nui:${BankEvents.ADD_TRANSFER}`, (data: any, cb: any) => {
  emitNet(BankEvents.ADD_TRANSFER, data);
  cb({});
});

type Credentials = {
  name: string;
  bank: number;
  transactions: ITransactions[];
};

onNet(BankEvents.SEND_CREDENTIALS, (credentials: Credentials) => {
  SendNUIMessage({
    app: 'BANK',
    method: BankEvents.SEND_CREDENTIALS,
    data: {
      name: credentials.name,
      balance: credentials.bank,
    },
  });

  SendNUIMessage({
    app: 'BANK',
    method: BankEvents.FETCH_TRANSACTIONS,
    data: credentials.transactions,
  });
});

let iterator = 0;
onNet(BankEvents.SEND_NOTIFICATION, (message: string) => {
  SendNUIMessage({
    app: 'BANK',
    method: BankEvents.SEND_NOTIFICATION,
    data: {
      title: 'Bank Alert',
      bankNotify: (iterator += 1),
      message: message,
    },
  });
});
