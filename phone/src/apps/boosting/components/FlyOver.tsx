import {Box, Divider, List, ListItem, ListSubheader, Popover} from '@mui/material';
import {useRecoilValue} from 'recoil';
import {HoverStateContracts} from '../state/atoms';

type Props = {};

const FlyOver = (props: Props) => {
	const anchorItem = useRecoilValue(HoverStateContracts.anchorItem);
	const hoverItem = useRecoilValue(HoverStateContracts.hoverItem);

	return (
		<Popover
			sx={{
				pointerEvents: 'none',
				'& .MuiPaper-root': {
					borderRadius: 0,
					border: '1px solid gray',
				},
				left: 14,
				zIndex: 1,
			}}
			anchorEl={anchorItem}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			disableRestoreFocus
			open={Boolean(hoverItem)}
		>
			<List
				dense
				style={{fontSize: 12}}
				subheader={
					<>
						<ListSubheader sx={{fontWeight: 'bolder', lineHeight: '30px'}}>
							Contract Details
						</ListSubheader>{' '}
						<Divider sx={{borderColor: 'gray'}} />
					</>
				}
			>
				<Box sx={{paddingTop: '5px'}}>
					<ListItem>Cost: </ListItem>
					<ListItem>Expires In:</ListItem>
				</Box>
			</List>
		</Popover>
	);
};

export default FlyOver;
