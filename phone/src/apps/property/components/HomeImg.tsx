import { Box } from '@mui/material';
import styled from 'styled-components';
import Home from '../../../assets/property/dynasty_home.png';

type Props = {};

const Img = styled.img`
  content: url(${Home});
  width: 150px;
  height: 150px;
`;

const Row = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
`;

const HomeImg = (props: Props) => {
  return (
    <Row>
      <Img />
    </Row>
  );
};

export default HomeImg;
