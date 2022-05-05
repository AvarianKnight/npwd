import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Badge,
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListItemText,
  styled,
} from '@mui/material';
import { useNuiRequest } from 'fivem-nui-react-lib';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { DarkMarketEvents } from '../../../../../../typings/darkmarket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { darkMarketState } from '../../atoms/state';
import { useCart } from '../../hooks/useCart';
import { useHistory } from 'react-router-dom';

const CartIcon = styled(Box)`
  position: absolute;
  right: 15px;
`;

const Home = () => {
  const { send } = useNuiRequest();
  const cryptoAmount = useRecoilValue(darkMarketState.crypto);
  const selectedCategory = useRecoilValue(darkMarketState.selectedCategory);
  const { addItem, removeItem } = useCart();
  const cartCount = useRecoilValue(darkMarketState.cart);
  const history = useHistory();

  useEffect(() => {
    send(DarkMarketEvents.FETCH_CRYPTO);
  }, []);

  if (cryptoAmount <= 0) return <p>You do not have access.</p>;

  return (
    <div style={{ padding: 10, zIndex: 1 }}>
      <CartIcon>
        <IconButton
          size="medium"
          sx={{ color: 'rgba(255, 255, 255, 0.54)', zIndex: 1 }}
          onClick={() => history.replace('/darkmarket/cart')}
        >
          {' '}
          <Badge badgeContent={cartCount.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </CartIcon>
      <ImageList sx={{ width: '100%', height: 600, margin: '0 auto' }} cols={2} gap={8}>
        <ImageListItem
          key="Subheader"
          cols={2}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <ListItemText
            primary={selectedCategory.title}
            sx={{
              '.MuiImageListItemBar-title': {
                fontSize: '12px',
                fontWeight: 'bolder',
                lineHeight: '20px',
                mb: '2px',
              },
            }}
          />
        </ImageListItem>
        {selectedCategory.list.map((item, i) => (
          <ImageListItem
            key={i}
            style={{
              height: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              margin: '10px',
            }}
          >
            <img style={{ width: 135, objectFit: 'contain' }} src={item.src} alt={item.name} />
            <ImageListItemBar
              sx={{
                '.MuiImageListItemBar-titleWrap': {
                  paddingLeft: 5,
                  padding: 0,
                  '.MuiImageListItemBar-title': {
                    fontSize: 14,
                    fontWeight: 'bolder',
                  },
                },
              }}
              title={item.label}
              subtitle={`${item.price} x ${item.quantity}`}
              actionIcon={
                <>
                  <IconButton
                    size="small"
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.label}`}
                    onClick={() => addItem(item)}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.label}`}
                    onClick={() => removeItem(item)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </>
              }
            ></ImageListItemBar>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Home;
