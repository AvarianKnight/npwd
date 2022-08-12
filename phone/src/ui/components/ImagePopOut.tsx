import { Box, Popover, styled } from '@mui/material';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useImagePopout } from '../hooks/useImagePopout';
import { HoverState } from '../state/HoverState';

const ImgContainer = styled(Popover)`
  /* margin: 0;
    position: absolute;
    top: 50%;
    left: 50%; */
  width: 500px;
  height: 200px;
`;

// const ImgBox = styled(Box)`

// `;

const ImagePopOut = () => {
  const imagePopout = useRecoilValue(HoverState.imagePopout);
  const { mouseExitHandler } = useImagePopout();
  if (imagePopout) {
    return (
      <ImgContainer
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
          '& .MuiPaper-root': {
            borderRadius: 0,
            overflow: 'hidden',
            height: 336,
            maxHeight: 336,
            width: 524,
            maxWidth: 524,
          },
          zIndex: 1,
        }}
        open={imagePopout.show}
        anchorEl={imagePopout.element}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        onClose={mouseExitHandler}
        disableRestoreFocus
      >
        <img
          src={imagePopout.url}
          style={{
            height: '100%',
            width: '100%',
          }}
          alt="img"
        />
      </ImgContainer>
    );
  } else {
    return <></>;
  }
};

export default ImagePopOut;
