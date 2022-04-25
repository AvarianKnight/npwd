import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTransactions } from '../../hooks/useTransactions';
import useStyles from './account.styles';

export const AccountTransactions = (): any => {
  const classes = useStyles();

  const TransactionTypes = {
    Deposit: classes.depositType,
    Withdraw: classes.withdrawType,
    Transfer: classes.depositType,
  };

  const transactionList = useTransactions();
  return (
    <div id="account-section">
      <div className={classes.header}>
        <h2 className={classes.title}>Transactions</h2>
        <Button id="actionButton" className={classes.seeAll}>
          <NavLink to="/bank/transactions">View Transactions</NavLink>
        </Button>
      </div>

      <div className={classes.transcationDiv}>
        {transactionList.slice(0, 3).map((transaction: any, index: number) => (
          <div className={classes.transactions} key={index}>
            <div>
              <h1 className={classes.tranSource}>{transaction.source}</h1>
              <p className={classes.tranType}>{transaction.type}</p>
            </div>
            <div>
              <p className={TransactionTypes[transaction.type]}>
                {transaction.type === 'Withdraw' ? '-' : '+'}
                {transaction.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
