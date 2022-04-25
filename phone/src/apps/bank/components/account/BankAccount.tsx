import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { BankCard } from './BankCard';
import { AccountTransactions } from './AccountTransactions';
import { useCredentials } from '../../hooks/useCredentials';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    fontFamily: 'Bahnschrift Regular',
  },
  title: {
    fontSize: '30px',
    marginLeft: '29px',
  },
}));

export const BankAccount = () => {
  const classes = useStyles();
  const credentials = useCredentials();
  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.title}>Account Summary</h1>
      </div>
      <BankCard
        name={credentials.name}
        account="Checking"
        balance={credentials.balance.toLocaleString('en-US')}
      />
      <AccountTransactions />
    </div>
  );
};
