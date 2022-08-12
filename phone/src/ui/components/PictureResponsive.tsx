import React, { MouseEventHandler } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { useImagePopout } from '../hooks/useImagePopout';

interface PictureResponsiveProps {
  src: string;
  alt: string;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    objectFit: 'contain',
  },
});

export const PictureResponsive: React.FC<PictureResponsiveProps> = ({ src, alt }) => {
  const { mouseEnterHandler, mouseExitHandler } = useImagePopout();
  return (
    <img
      onMouseEnter={(event: any) =>
        mouseEnterHandler({ url: src, show: true, element: event.target as HTMLInputElement })
      }
      onMouseLeave={() => mouseExitHandler()}
      className={useStyles().root}
      src={src}
      alt={alt}
    />
  );
};
