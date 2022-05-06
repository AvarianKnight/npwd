import { Box, styled, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { Button } from '../../../../ui/components/Button';
import Modal from '../../../../ui/components/Modal';
import { darkMarketState } from '../../atoms/state';
import { useCart } from '../../hooks/useCart';

const CheckoutContainer = styled(Box)`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 15px;
  flex-wrap: wrap;
`;

export const Checkout = () => {
  const checkoutDisplay = useRecoilValue(darkMarketState.checkoutDisplay);
  const { renderCheckoutDisplay, initiateCheckout } = useCart();

  return (
    <Modal visible={checkoutDisplay} handleClose={() => renderCheckoutDisplay(false)}>
      <CheckoutContainer>
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography>Ready for purchase?</Typography>
        </Box>
        <Button onClick={() => renderCheckoutDisplay(false)}>No</Button>
        <Button onClick={() => initiateCheckout()}>Yes</Button>
      </CheckoutContainer>
    </Modal>
  );
};
