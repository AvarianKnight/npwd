import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { BoostingEvents, BOOSTING_APP } from '../../../../typings/boosting';
import InjectDebugData from '../../os/debug/InjectDebugData';
import { useBoosting } from './hooks/useBoosting';
import background from '../../assets/boosting/background.png';
import Header from './components/Level';
import Top from './components/Level';
import Level from './components/Level';

type Props = {};

const Wrapper = styled(Box)`
  position: absolute;
  background-color: #000000;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
`;

const Title = styled(Typography)`
  color: #02b864;
  font-weight: bolder;
  font-size: 24px;
`;

const TextWrapper = styled(Box)`
  top: 68px;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center; ;
`;

const BoostingApp = (props: Props) => {
  useBoosting();

  return (
    <Wrapper>
      <TextWrapper>
        <Title>WELCOME</Title>
      </TextWrapper>
      <Level />
    </Wrapper>
  );
};

export default BoostingApp;

InjectDebugData(
  [
    {
      app: BOOSTING_APP,
      method: BoostingEvents.LOAD_BOOSTING_PROFILE,
      data: {
        uid: 2,
        level: 4,
        experience: '53.4',
      },
    },
  ],
  1000,
);
