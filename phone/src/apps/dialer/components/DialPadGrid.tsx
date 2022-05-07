import React, { useContext } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { DialInputCtx, IDialInputCtx } from '../context/InputContext';

const useStyles = makeStyles((theme: Theme) => ({
  gridItem: {
    fontSize: theme.typography.h5.fontSize,
    padding: theme.spacing(2),
  },
}));

interface ButtonItemProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string | number;
}

const ButtonItem: React.FC<ButtonItemProps> = ({ label, onClick }) => {
  const classes = useStyles();
  return (
    <Grid key={label} item xs={4}>
      <Button fullWidth size="large" className={classes.gridItem} onClick={onClick}>
        {label}
      </Button>
    </Grid>
  );
};

export const DialGrid = () => {
  const { add, removeOne, clear } = useContext(DialInputCtx);
  const { inputVal, set } = useContext<IDialInputCtx>(DialInputCtx);

  const dialHandler = (e: any) => {
    let copyInputVal = JSON.parse(JSON.stringify(inputVal));
    copyInputVal += e.target.textContent;
    var result = [];
    let text = copyInputVal.replace(/[^\d]/g, '');
    while (text.length >= 6) {
      result.push(text.substring(0, 3));
      text = text.substring(3);
    }
    if (text.length > 0) result.push(text);
    set(result.join('-'));
  };

  return (
    <Box height="100%">
      <Grid container justifyContent="space-around">
        <ButtonItem label={1} onClick={(e) => dialHandler(e)} />
        <ButtonItem label={2} onClick={(e) => dialHandler(e)} />
        <ButtonItem label={3} onClick={(e) => dialHandler(e)} />
        <ButtonItem label={4} onClick={(e) => dialHandler(e)} />
        <ButtonItem label={5} onClick={(e) => dialHandler(e)} />
        <ButtonItem label={6} onClick={(e) => dialHandler(e)} />
        <ButtonItem label={7} onClick={(e) => dialHandler(e)} />
        <ButtonItem label={8} onClick={(e) => dialHandler(e)} />
        <ButtonItem label={9} onClick={(e) => dialHandler(e)} />
        <ButtonItem label="*" onClick={clear} />
        <ButtonItem label={0} onClick={(e) => dialHandler(e)} />
        <ButtonItem label="#" onClick={removeOne} />
        <ButtonItem label="-" onClick={(e) => dialHandler(e)} />
      </Grid>
    </Box>
  );
};

export default DialGrid;
