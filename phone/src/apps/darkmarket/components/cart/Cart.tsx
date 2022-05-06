import ArrowBack from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';
import { Item } from '@typings/darkmarket';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { darkMarketState } from '../../atoms/state';
import { useCart } from '../../hooks/useCart';

const Container = styled(Box)`
  padding: 10px;
  display: block;
  justify-content: center;
`;

const Wrapper = styled(Box)`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const BackArrow = styled(ArrowBack)`
  cursor: pointer;
`;

const Cart = () => {
  const [cost, setCost] = useState(0);
  const { removeItem, clearCart, renderCheckoutDisplay } = useCart();
  const cartList = useRecoilValue(darkMarketState.cart);
  const crypto = useRecoilValue(darkMarketState.crypto);
  const history = useHistory();

  useEffect(() => {
    let currentCost = 0;
    cartList.map((item: Item) => (currentCost = currentCost + item.price));
    setCost(currentCost);
  }, [cartList]);

  return (
    <Container>
      <Wrapper>
        <BackArrow onClick={() => history.replace('/darkmarket')} />
        <List dense style={{ width: '350px' }}>
          <ListSubheader style={{ zIndex: 0 }}>Cart</ListSubheader>
          <Wrapper style={{ justifyContent: 'center', overflow: 'auto', maxHeight: 400 }}>
            {cartList.map((item: Item, index: number) => {
              return (
                <ListItem key={index} style={{ width: '250px', position: 'relative' }}>
                  <ListItemText style={{ width: '120px' }}>
                    {item.label} x {item.quantity}
                  </ListItemText>
                  <ListItemButton
                    style={{ width: '20px', display: 'flex', justifyContent: 'center' }}
                    onClick={() => removeItem(item)}
                  >
                    <DeleteIcon />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Wrapper>
        </List>
      </Wrapper>
      <Divider variant="middle" light />
      <Wrapper style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Typography>Total: {cost}</Typography>
      </Wrapper>
      <Divider variant="middle" light />
      <Wrapper style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => clearCart()}>Clear Cart</Button>
        <Button onClick={() => renderCheckoutDisplay(true)} disabled={cost > crypto || cost === 0}>
          Checkout
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Cart;
