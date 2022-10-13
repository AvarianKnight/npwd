import {Box} from '@mui/material';
import React from 'react';

type Props = {
	children: React.ReactNode;
	alignItems?: string;
};

const Row = ({children, alignItems}: Props) => {
	return (
		<Box
			style={{
				display: 'flex',
				justifyContent: 'center',
				width: '100%',
				alignItems: alignItems,
			}}
		>
			{children}
		</Box>
	);
};

export default Row;
