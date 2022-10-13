import {Box} from '@mui/material';
import React from 'react';

type Props = {
	children: React.ReactNode;
};

const Row = ({children}: Props) => {
	return <Box style={{display: 'flex', justifyContent: 'center', width: '100%'}}>{children}</Box>;
};

export default Row;
