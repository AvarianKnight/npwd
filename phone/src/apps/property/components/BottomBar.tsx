import { Box, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useProperty } from '../hooks/useProperty';

const StyledBottom = styled(Box)`
  background: #dde3d9;
  bottom: 0;
  height: 70px;
  position: absolute;
  width: 100%;
  left: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledButton = styled(Button)`
  height: 80%;
`;

const BottomBar = () => {
  const { pathname } = useLocation();
  const { homeButtonHandler } = useProperty();
  return (
    <StyledBottom>
      {pathname !== '/property' ? (
        <>
          <StyledButton variant="contained" onClick={homeButtonHandler}>
            Home
          </StyledButton>
          <StyledButton variant="contained">Keys</StyledButton>
        </>
      ) : (
        <></>
      )}
    </StyledBottom>
  );
};

export default BottomBar;
