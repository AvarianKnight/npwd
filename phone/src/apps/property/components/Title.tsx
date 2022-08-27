import { Box, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { PropertyState } from '../atoms/state';

const HouseTitle = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  font-variant: small-caps;
  color: #536b5b;
`;

const HouseRow = styled(Box)`
  position: absolute;
  top: 5px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

const Title = () => {
  const property = useRecoilValue(PropertyState.selectedProperty);

  return (
    <HouseRow>
      <HouseTitle>{property?.label}</HouseTitle>
    </HouseRow>
  );
};

export default Title;
