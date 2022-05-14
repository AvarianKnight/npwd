import { Button, List, ListItem, Typography } from '@mui/material';
import { useRecoilState } from 'recoil';
import { TextField } from '../../../../ui/components/Input';
import { darkMarketState } from '../../atoms/state';
import { useTrade } from '../../hooks/useTrade';
import { Notify } from '../notify/Notify';

const Trade = () => {
  const { tradeHandler } = useTrade();
  const [tradeValue, setTradeValue] = useRecoilState(darkMarketState.tradeDM);
  const [notifyDisplay, setNotifyDisplay] = useRecoilState(darkMarketState.notifyDisplay);

  return (
    <div style={{ padding: 20 }}>
      <Notify
        setNotifyDisplay={setNotifyDisplay}
        notifyDisplay={notifyDisplay}
        acceptHandler={tradeHandler}
        text={'Are you sure?'}
      />
      <Typography>Trade</Typography>
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <List style={{ marginTop: 20 }}>
          <ListItem style={{ margin: 10 }}>
            <TextField
              type="number"
              placeholder="ID"
              value={tradeValue.playerId}
              onChange={(e) => setTradeValue((state) => ({ ...state, playerId: e.target.value }))}
            />
          </ListItem>
          <ListItem style={{ margin: 10 }}>
            <TextField
              placeholder="Amount"
              type="number"
              value={tradeValue.amount}
              onChange={(e) => setTradeValue((state) => ({ ...state, amount: e.target.value }))}
            />
          </ListItem>
        </List>
        <Button sx={{ width: '100%' }} onClick={() => setNotifyDisplay(true)}>
          Send
        </Button>
      </div>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        style={{ position: 'absolute', bottom: 0 }}
      >
        All trades are final, once a trade is sent it will be enforced by the tradees.
      </Typography>
    </div>
  );
};

export default Trade;
