import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Home, List, Payment } from '@mui/icons-material';
import { useCredentials } from './../../hooks/useCredentials';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  icon: {
    color: '#f44336',
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();
  const [activePage, setActivePage] = useState(0);
  const credentials = useCredentials();
  return (
    <BottomNavigation
      style={{
        background: '#262525',
      }}
      value={activePage}
      onChange={(event, newPage) => {
        setActivePage(newPage);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} icon={<Home />} to="/bank" />
      {credentials && <BottomNavigationAction component={Link} icon={<Payment />} to="/bank/account" /> }
      {credentials && <BottomNavigationAction component={Link} icon={<List />} to="/bank/transactions" />}
    </BottomNavigation>
  );
};
