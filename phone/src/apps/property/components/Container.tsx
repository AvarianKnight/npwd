import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import DynastyBG from '../../../assets/property/dynasty8_bg.png';
import BottomBar from './BottomBar';

type Props = {
  children: React.ReactNode;
  rootRef: any;
};

const Wrapper = styled(Box)`
  position: absolute;
  width: 100%;
  height: 638px;
  padding: 15px;
  background-color: rgb(248, 248, 248);
`;

const Background = styled(Box)`
  position: relative;
  width: 100%;
  height: 88%;
  background-image: url(${DynastyBG});
  background-size: cover;
  border-radius: 11px;
  background-repeat: no-repeat;
`;

const Container = ({ children, rootRef }: Props) => {
  return (
    <Wrapper ref={rootRef}>
      <Background>{children}</Background>
      <BottomBar />
    </Wrapper>
  );
};

export default Container;
