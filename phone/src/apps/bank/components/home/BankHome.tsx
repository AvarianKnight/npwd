import React from 'react';
import { Typography } from '@mui/material';
import { Button } from '@ui/components/Button';
import { useBankModal } from '../../hooks/useBankModal';
import { useCredentials } from '../../hooks/useCredentials';
import { NavLink } from 'react-router-dom';

import useStyles from './home.styles';
import { useBankService } from '../../hooks/useBankService';
import { useNotifications } from '../../../../os/notifications/hooks/useNotifications';

export const BankHome = () => {
  const classes = useStyles();
  const { setShowBankModal } = useBankModal();
  const credentials = useCredentials();

  const openTransactionsModal = () => {
    setShowBankModal(true);
  };

  if (!credentials) return <p>Could not load credentials</p>;

  return (
    <div className={classes.root}>
      <Typography className={classes.headTitle}>
        <span style={{ fontWeight: 'bold' }}>Welcome</span>, {credentials.name}
      </Typography>
      <div className={classes.accounts}>
        <h2 className={classes.accountsType}>Checking:</h2>
        <p className={classes.accountBalance}>${credentials.balance.toLocaleString('en-US')}</p>
      </div>
      <div className={classes.actions}>
        <Button id="actionButton" className={classes.actionButton}>
          <NavLink to="/bank/account">Account</NavLink>
        </Button>
        <Button onClick={openTransactionsModal} className={classes.actionButton}>
          Bank Transfer
        </Button>
      </div>
    </div>
  );
};
