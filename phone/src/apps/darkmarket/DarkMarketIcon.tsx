import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const DarkMarketIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 56 56"
        version="1.1"
        viewBox="0 0 56 56"
        xmlSpace="preserve"
      >
        <g
          transform="translate(2.000000,62.000000) scale(0.160000,-0.160000)"
          fill="#FFFFFF"
          stroke="none"
        >
          <path
            d="M100 236 c0 -168 5 -176 105 -176 l65 0 0 30 c0 29 -1 30 -50 30
l-49 0 -3 123 -3 122 -32 3 -33 3 0 -135z"
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default DarkMarketIcon;
