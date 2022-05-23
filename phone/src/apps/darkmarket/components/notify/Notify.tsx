import { Box, styled, Typography } from '@mui/material';
import { Button } from '../../../../ui/components/Button';
import Modal from '../../../../ui/components/Modal';

const CheckoutContainer = styled(Box)`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 15px;
  flex-wrap: wrap;
`;

type Props = {
  acceptHandler: any;
  notifyDisplay: any;
  setNotifyDisplay: any;
  text: string;
};

export const Notify = ({ acceptHandler, notifyDisplay, setNotifyDisplay, text }: Props) => {
  return (
    <Modal visible={notifyDisplay} handleClose={() => setNotifyDisplay(false)}>
      <CheckoutContainer>
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography>{text}</Typography>
        </Box>
        <Button onClick={() => acceptHandler()}>Yes</Button>
        <Button onClick={() => setNotifyDisplay(false)}>No</Button>
      </CheckoutContainer>
    </Modal>
  );
};
