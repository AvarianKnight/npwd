import { BankEvents, IBankCredentials, ITransactions, Transfer } from '@typings/bank';
import { AC, ox, PMA } from '../server';

export const exp = (global as any).exports;

onNet(BankEvents.GET_CREDENTIALS, async () => {
	const ply = PMA.getPlayerFromId(source);
	const transactions: Transfer[] = await ox.query_async(
		`SELECT type, amount, message, name FROM npwd_bank_transactions WHERE uniqueId = ? ORDER BY id DESC LIMIT 20`,
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

onNet(BankEvents.ADD_TRANSFER, async (transferData: Transfer) => {
	const ply = PMA.getPlayerFromId(source);
	const tgtPly = PMA.getPlayerFromId(transferData.targetID);

	if (tgtPly) {
		processTransaction(ply, tgtPly, transferData);
	} else {
		ply.triggerEvent(BankEvents.SEND_ALERT, 'Individual is not around');
	}
});

const processTransaction = async (ply: any, tgtPly: any, transferData: Transfer) => {
	const plyMoney = ply.getAccount('bank').quantity;
	const tgtPlyMoney = tgtPly.getAccount('bank').quantity;
	if (ply.lockedStatus) {
		ply.showNotification('Your assets are currently frozen.');
		return;
	}
	if (plyMoney > transferData.transferAmount && transferData.transferAmount > 0) {
		ply.removeAccountMoney('bank', transferData.transferAmount);
		tgtPly.addAccountMoney('bank', transferData.transferAmount);

		let credentials: IBankCredentials;
		// await ox.execute(
		// 	`INSERT INTO npwd_bank_transfers (targetID, uniqueId, transferAmount, message, transfer_to, transfer_from ) VALUES (?, ?, ?, ?, ?, ?)`,
		// 	[
		// 		tgtPly.uniqueId,
		// 		ply.uniqueId,
		// 		transferData.transferAmount,
		// 		transferData.message,
		// 		ply.getPlayerName(),
		// 		tgtPly.getPlayerName(),
		// 	],
		// );

		AC.log(
			'*Bank Transfer*',
			`${GetPlayerName(ply.source)} ${AC.getDiscordId(ply.source)} transfered ${
				transferData.transferAmount
			} to ${GetPlayerName(tgtPly.source)} ${AC.getDiscordId(
				tgtPly.source,
			)} with the message of ${transferData.message}`,
			'red',
			'phoneBankTransfers',
		);
		await insertBankTransactions(
			ply.uniqueId,
			'Withdraw',
			transferData.transferAmount,
			transferData.message,
			tgtPly.getPlayerName(),
		);
		// const transactionsPly: ITransactions[] = await ox.query_async(
		// 	`SELECT type, amount FROM npwd_bank_transactions WHERE uniqueId = ? ORDER BY id DESC LIMIT 20`,
		// 	[ply.uniqueId],
		// );
		// const transactionsPly: Transfer[] = await ox.query_async(
		// 	`SELECT type, amount, name, message FROM npwd_bank_transfers WHERE uniqueId = ? ORDER BY id DESC LIMIT 20`,
		// 	[ply.uniqueId],
		// );
		const transactionsPly = await relistTransactions(ply.uniqueId);

		credentials = {
			balance: ply.getAccount('bank').quantity,
			name: ply.getPlayerName(),
			transactions: transactionsPly,
			playerId: ply.source,
		};

		ply.triggerEvent(BankEvents.SEND_CREDENTIALS, credentials);
		ply.triggerEvent(BankEvents.SEND_NOTIFICATION, `Sent money to ${tgtPly.getPlayerName()}`);

		await insertBankTransactions(
			tgtPly.uniqueId,
			'Deposit',
			transferData.transferAmount,
			transferData.message,
			ply.getPlayerName(),
		);
		// const transactionsTgt: ITransactions[] = await ox.query_async(
		// 	`SELECT type, amount, name, message FROM npwd_bank_transactions WHERE uniqueId = ? ORDER BY id DESC LIMIT 20`,
		// 	[tgtPly.uniqueId],
		// );
		const transactionsTgt = await relistTransactions(tgtPly.uniqueId);

		credentials = {
			balance: tgtPly.getAccount('bank').quantity,
			name: tgtPly.getPlayerName(),
			transactions: transactionsTgt,
			playerId: tgtPly.source,
		};

		tgtPly.triggerEvent(BankEvents.SEND_CREDENTIALS, credentials);
		let message;
		if (transferData.message) {
			message = transferData.message;
		} else {
			message = `Received money from ${ply.getPlayerName()}.`;
		}
		tgtPly.triggerEvent(BankEvents.SEND_NOTIFICATION, message);
	} else {
		ply.triggerEvent(BankEvents.SEND_NOTIFICATION, 'Insufficient funds');
	}
};

const relistTransactions = async (uniqueId: number) => {
	const transactions: Transfer[] = await ox.query_async(
		`SELECT type, amount, name, message FROM npwd_bank_transactions WHERE uniqueId = ? ORDER BY id DESC LIMIT 20`,
		[uniqueId],
	);

	return transactions;
};

const insertBankTransactions = async (
	uniqueId: number,
	type: string,
	amount: number,
	message: string,
	playerName: string,
) => {
	await ox.insert_async(
		`INSERT INTO npwd_bank_transactions (uniqueId, type, amount, message, name) VALUES (?, ?, ?, ?, ?)`,
		[uniqueId, type, amount, message, playerName],
	);
};

exports('insertBankTransactions', insertBankTransactions);
