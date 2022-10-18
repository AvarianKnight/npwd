import { Transfer } from '@typings/bank';
import { useRecoilValue } from 'recoil';
import { bankState } from '../../hooks/state';
import useStyles from '../bank.styles';

export const TransactionList = () => {
	const credentials = useRecoilValue(bankState.bankCredentials);
	const classes = useStyles();

	const TransactionTypes = {
		Deposit: classes.depositType,
		Withdraw: classes.withdrawType,
		Transfer: classes.depositType,
	};

	return (
		<div id="transaction-section">
			<div className={classes.header}>
				<h2 className={classes.title}>Transactions</h2>
			</div>

			<div className={classes.transcationDiv}>
				{credentials.transactions.map((transaction: Transfer, index: number) => (
					<div className={classes.transactions} key={index}>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								flexWrap: 'wrap',
								width: '100%',
							}}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									width: '100%',
								}}
							>
								<h1 className={classes.tranSource}>{transaction.name}</h1>
								<div className={TransactionTypes[transaction.type]}>
									{transaction.type === 'Withdraw' ? '- $' : '+ $'}
									{transaction.amount}
								</div>
							</div>
							<p className={classes.tranType}>{transaction.message}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
