import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import Dynasty8 from '../../../assets/property/dynasty8.png';

const HeaderWrapper = styled(Paper)`
  width: 100%;
  display: flex;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  background: #dde3d9;
  height: 79px;
  z-index: 1;
`;

const PropertyTitle = () => {
  return (
    <HeaderWrapper square variant="outlined">
      <div>
        <img style={{ height: '68px', width: '131px' }} src={Dynasty8} alt={'dynasty8'} />
      </div>
    </HeaderWrapper>
  );
};

export default PropertyTitle;
