import { BankEvents, ITransactions, Transfer } from '@typings/bank';
export const exp = (global as any).exports;
export const ox = exp.oxmysql;
export let PMA: any = null;
const AC = exp['pma-anticheat'];

emit('pma:getData', (obj: any) => {
  PMA = obj;
});

onNet(BankEvents.GET_CREDENTIALS, async () => {
  const ply = PMA.getPlayerFromId(source);
  const transactions: ITransactions[] = await ox.query_async(
    `SELECT type, amount FROM npwd_bank_transactions WHERE uniqueId = ? ORDER BY id DESC LIMIT 20`,
    [ply.uniqueId],
  );
  const credentials = {
    bank: ply.getAccount('bank').money,
    name: ply.firstname + ' ' + ply.lastname,
    transactions: transactions,
  };
  ply.triggerEvent(BankEvents.SEND_CREDENTIALS, credentials);
});

// data.transferID, data.transferAmount, data.message
type TransferData = {
  targetID: number;
  transferAmount: number;
  message: string;
};
onNet(BankEvents.ADD_TRANSFER, async (transferData: TransferData) => {
  const ply = PMA.getPlayerFromId(source);
  const tgtPly = PMA.getPlayerFromId(transferData.targetID);

  if (tgtPly) {
    processTransaction(ply, tgtPly, transferData);
  } else {
    ply.triggerEvent(BankEvents.SEND_ALERT, 'Individual is not around');
  }
});

const processTransaction = async (ply: any, tgtPly: any, transferData: TransferData) => {
  const plyMoney = ply.getAccount('bank').money;
  const tgtPlyMoney = tgtPly.getAccount('bank').money;
  if (plyMoney > transferData.transferAmount && transferData.transferAmount > 0) {
    ply.removeAccountMoney('bank', transferData.transferAmount);
    tgtPly.addAccountMoney('bank', transferData.transferAmount);

    let credentials = {};
    await ox.execute(
      `INSERT INTO npwd_bank_transfers (targetID, uniqueId, transferAmount, message) VALUES (?, ?, ?, ?)`,
      [tgtPly.uniqueId, ply.uniqueId, transferData.transferAmount, transferData.message],
    );

    AC.log(
      '*Bank Transfer*',
      `(${ply.source}) ${GetPlayerName(ply.source)} ${AC.getDiscordId(ply.source)} transfered ${
        transferData.transferAmount
      } to (${tgtPly.source})${GetPlayerName(ply.source)} ${AC.getDiscordId(
        ply.source,
      )} with the message of ${transferData.message}`,
      'red',
      'phoneBankTransfers',
    );
    await insertBankTransactions(ply.uniqueId, 'Withdraw', transferData.transferAmount);
    const transactionsPly: ITransactions[] = await ox.query_async(
      `SELECT type, amount FROM npwd_bank_transactions WHERE uniqueId = ? ORDER BY id DESC LIMIT 20`,
      [ply.uniqueId],
    );

    credentials = {
      bank: ply.getAccount('bank').money,
      name: ply.firstname + ' ' + ply.lastname,
      transactions: transactionsPly,
    };

    ply.triggerEvent(BankEvents.SEND_CREDENTIALS, credentials);
    ply.triggerEvent(
      BankEvents.SEND_NOTIFICATION,
      `Sent money to ${tgtPly.firstname} ${tgtPly.lastname}`,
    );

    await insertBankTransactions(tgtPly.uniqueId, 'Deposit', transferData.transferAmount);
    const transactionsTgt: ITransactions[] = await ox.query_async(
      `SELECT type, amount FROM npwd_bank_transactions WHERE uniqueId = ? ORDER BY id DESC LIMIT 20`,
      [tgtPly.uniqueId],
    );

    credentials = {
      bank: tgtPly.getAccount('bank').money,
      name: tgtPly.firstname + ' ' + tgtPly.lastname,
      transactions: transactionsTgt,
    };

    tgtPly.triggerEvent(BankEvents.SEND_CREDENTIALS, credentials);
    tgtPly.triggerEvent(
      BankEvents.SEND_NOTIFICATION,
      `Received money from ${ply.firstname} ${ply.lastname}`,
    );
  } else {
    ply.triggerEvent(BankEvents.SEND_NOTIFICATION, 'Insufficient funds');
  }
};

const insertBankTransactions = async (uniqueId: number, type: string, amount: number) => {
  await ox.insert_async(
    `INSERT INTO npwd_bank_transactions (uniqueId, type, amount) VALUES (?, ?, ?)`,
    [uniqueId, type, amount],
  );
};

exports('insertBankTransactions', insertBankTransactions);
