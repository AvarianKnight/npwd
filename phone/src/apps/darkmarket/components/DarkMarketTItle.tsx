import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { darkMarketState } from '../atoms/state';
import { Categories } from './categories/Categories';

const HeaderWrapper = styled(Paper)`
  width: 100%;
  display: flex;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  background: #424242;
  z-index: 1;
`;

const DarkMarketTitle = () => {
  const cryptoAmount = useRecoilValue(darkMarketState.crypto);

  return (
    <HeaderWrapper square variant="outlined">
      <Categories />
      <div
        id="darkmarket-title"
        style={{ color: '#32CD32', fontSize: 15, fontWeight: 600, margin: 2, marginRight: 10 }}
      >
        Balance: {cryptoAmount}
      </div>
    </HeaderWrapper>
  );
};

export default DarkMarketTitle;
