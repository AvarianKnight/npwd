import { Box, styled, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { SelectedPropertyState } from '../atoms/state';

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
  top: 0px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

const PropertyInfo = () => {
  const property = useRecoilValue(SelectedPropertyState.selectedProperty);

  return (
    <Box>
      <HouseRow>
        <HouseTitle>{property.label}</HouseTitle>
      </HouseRow>
      <Box>Property</Box>
    </Box>
  );
};

export default PropertyInfo;
