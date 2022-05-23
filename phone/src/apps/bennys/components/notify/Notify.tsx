import { Box, styled, Typography } from '@mui/material';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Vehicle } from '../../../../../../typings/bennys';
import { Button } from '../../../../ui/components/Button';
import Modal from '../../../../ui/components/Modal';
import { bennysState } from '../../atoms/state';
import { useBennys } from '../../hooks/useBennys';

const CheckoutContainer = styled(Box)`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 15px;
  flex-wrap: wrap;
`;

export const Notify = () => {
  const { acceptImpoundHandler } = useBennys();
  const vehicleSelected: Vehicle = useRecoilValue(bennysState.vehicleSelected);
  const [notifyDisplay, setNotifyDisplay] = useRecoilState(bennysState.showNotify);

  return (
    <Modal visible={notifyDisplay} handleClose={() => setNotifyDisplay(false)}>
      <CheckoutContainer>
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography>
            Impound Fee is: {vehicleSelected?.impoundFee}. Are you sure you want to pay?
          </Typography>
        </Box>
        <Button onClick={() => acceptImpoundHandler()}>Yes</Button>
        <Button onClick={() => setNotifyDisplay(false)}>No</Button>
      </CheckoutContainer>
    </Modal>
  );
};
