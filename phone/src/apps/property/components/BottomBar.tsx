import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HOME_BUTTON from '../../../assets/property/home_button.png';
import KEY from '../../../assets/property/key_button.png';
import { useKey } from '../hooks/useKey';
import { useProperty } from '../hooks/useProperty';
import { StyledButton, StyledText } from './styles';

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

const BottomBar = () => {
  const { pathname } = useLocation();
  const { homeButtonHandler } = useProperty();
  const { keyRoutingHandler } = useKey();
  return (
    <StyledBottom>
      {pathname !== '/property' ? (
        <>
          <StyledButton variant="contained" onClick={homeButtonHandler}>
            <img style={{ height: '30px' }} src={HOME_BUTTON} alt="home" />
            <StyledText style={{ marginLeft: '10px' }}>Home</StyledText>
          </StyledButton>
          <StyledButton variant="contained" onClick={keyRoutingHandler}>
            <img style={{ height: '35px' }} src={KEY} alt="key" />
            <StyledText style={{ marginLeft: '6px' }}>Keys</StyledText>
          </StyledButton>
        </>
      ) : (
        <></>
      )}
    </StyledBottom>
  );
};

export default BottomBar;
