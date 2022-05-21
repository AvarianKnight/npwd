import React from 'react';
import Paper from '@mui/material/Paper';
import { Box, styled, Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import './BankApp.css';
import { flexbox } from '@mui/material/node_modules/@mui/system';
import { useCredentials } from '../hooks/useCredentials';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90px',
    width: '100%',
    display: 'flex',
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    background: '#424242',
  },
  icon: {
    color: '#f44336',
    fontSize: 40,
  },
}));

const HeaderContainer = styled(Paper)`
  height: 100px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #424242;
  border-radius: 0px;
`;

export const BankTitle = () => {
  const credentials = useCredentials();

  return (
    <HeaderContainer>
      <Box style={{ width: '100%', textAlign: 'center' }}>
        <Typography id="bank-title" style={{ margin: 0 }} variant="h5">
          Banking
        </Typography>
      </Box>
      <Box style={{ width: '100%', textAlign: 'center' }}>Bank ID: {credentials?.playerId}</Box>
    </HeaderContainer>
  );
};
