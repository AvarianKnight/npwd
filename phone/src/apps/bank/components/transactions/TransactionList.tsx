import React, { useState } from 'react';
import useStyles from '../bank.styles';
import { useTransactions } from '../../hooks/useTransactions';

export const TransactionList = () => {
  const transactionList = useTransactions();
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const TransactionTypes = {
    Deposit: classes.depositType,
    Withdraw: classes.withdrawType,
    Transfer: classes.depositType,
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log(transactionList);
  return (
    <div id="transaction-section">
      <div className={classes.header}>
        <h2 className={classes.title}>Transactions</h2>
      </div>

      <div className={classes.transcationDiv}>
        {transactionList
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((transaction: any, index: number) => (
            <div className={classes.transactions} key={index}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
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
