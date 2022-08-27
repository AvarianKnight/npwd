import { Box } from '@mui/material';
import PlayerAutoComplete from './PlayerAutoComplete';
import Title from './Title';

const PropertyInfo = () => {
  return (
    <Box>
      <Title />
      <Box>
        <PlayerAutoComplete />
      </Box>
    </Box>
  );
};

export default PropertyInfo;
