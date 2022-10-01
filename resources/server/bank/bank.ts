import { BankEvents, IBankCredentials, ITransactions, TransferData } from '@typings/bank';
import { AC, ox, PMA } from '../server';

export const exp = (global as any).exports;

onNet(BankEvents.GET_CREDENTIALS, async () => {
  const ply = PMA.getPlayerFromId(source);
  const transactions: ITransactions[] = await ox.query_async(
    `SELECT type, amount FROM npwd_bank_transactions WHERE uniqueId = ? ORDER BY id DESC LIMIT 20`,
    [ply.uniqueId],
  );
  const credentials: IBankCredentials = {
    balance: ply.getAccount('bank').quantity as number,
    name: ply.firstname + ' ' + ply.lastname,
    transactions: transactions,
    playerId: ply.source,
  };
  ply.triggerEvent(BankEvents.SEND_CREDENTIALS, credentials);
});

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
  const plyMoney = ply.getAccount('bank').quantity;
  const tgtPlyMoney = tgtPly.getAccount('bank').quantity;
  if (plyMoney > transferData.transferAmount && transferData.transferAmount > 0) {
    ply.removeAccountMoney('bank', transferData.transferAmount);
    tgtPly.addAccountMoney('bank', transferData.transferAmount);

    let credentials: IBankCredentials;
    await ox.execute(
      `INSERT INTO npwd_bank_transfers (targetID, uniqueId, transferAmount, message) VALUES (?, ?, ?, ?)`,
      [tgtPly.uniqueId, ply.uniqueId, transferData.transferAmount, transferData.message],
    );

    AC.log(
      '*Bank Transfer*',
      `${GetPlayerName(ply.source)} ${AC.getDiscordId(ply.source)} transfered ${
        transferData.transferAmount
      } to ${GetPlayerName(tgtPly.source)} ${AC.getDiscordId(tgtPly.source)} with the message of ${
        transferData.message
      }`,
      'red',
      'phoneBankTransfers',
    );
    await insertBankTransactions(ply.uniqueId, 'Withdraw', transferData.transferAmount);
    const transactionsPly: ITransactions[] = await ox.query_async(
      `SELECT type, amount FROM npwd_bank_transactions WHERE uniqueId = ? ORDER BY id DESC LIMIT 20`,
      [ply.uniqueId],
    );

    credentials = {
      balance: ply.getAccount('bank').quantity,
      name: ply.firstname + ' ' + ply.lastname,
      transactions: transactionsPly,
      playerId: ply.source,
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
      balance: tgtPly.getAccount('bank').quantity,
      name: tgtPly.firstname + ' ' + tgtPly.lastname,
      transactions: transactionsTgt,
      playerId: tgtPly.source,
    };

    tgtPly.triggerEvent(BankEvents.SEND_CREDENTIALS, credentials);
    tgtPly.triggerEvent(
      BankEvents.SEND_NOTIFICATION,
      `Received money from ${ply.firstname} ${ply.lastname}. ${transferData.message}`,
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
