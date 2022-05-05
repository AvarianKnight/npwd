import { useState } from 'react';
import { Typography } from '@mui/material';
import { Button } from '@ui/components/Button';
import { useBankModal } from '../../hooks/useBankModal';
import { useCredentials } from '../../hooks/useCredentials';
import { NavLink } from 'react-router-dom';

import useStyles from './home.styles';
import { useNuiRequest } from 'fivem-nui-react-lib';
import { BankEvents } from '@typings/bank';

export const BankHome = () => {
  const { send } = useNuiRequest();
  const classes = useStyles();
  const { setShowBankModal } = useBankModal();
  const credentials = useCredentials();
  const [refreshDisabled, setRefreshDisabled] = useState(false);

  const openTransactionsModal = () => {
    setShowBankModal(true);
  };

  const handleCredRefresh = () => {
    setRefreshDisabled(true);
    send(BankEvents.GET_CREDENTIALS);
    setTimeout(() => {
      setRefreshDisabled(false);
    }, 500);
  };

  if (!credentials)
    return (
      <div className={classes.root}>
        <p>Could not load credentials</p>
        <Button
          id="refresh-creds"
          className={classes.actionButton}
          disabled={refreshDisabled}
          onClick={() => handleCredRefresh()}
        >
          Refresh Credentials
        </Button>
      </div>
    );

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
