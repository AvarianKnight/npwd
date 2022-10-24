import {Box, Divider, List, ListItem, ListSubheader, Popover} from '@mui/material';
import {useRecoilValue} from 'recoil';
import {HoverStateContracts} from '../state/atoms';

type Props = {};

const FlyOver = (props: Props) => {
	const anchorItem = useRecoilValue(HoverStateContracts.anchorItem);
	const hoverItem = useRecoilValue(HoverStateContracts.hoverItem);

	if (hoverItem && hoverItem.cost) {
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
						<ListItem>Cost: {hoverItem.cost}</ListItem>
						{(hoverItem.expires_in / (1000 * 60 * 60)) % 24 >= 1 &&
						(hoverItem.expires_in / (1000 * 60 * 60)) % 24 < 7 ? (
							<ListItem>
								Expires in:{' '}
								{Math.floor((hoverItem.expires_in / (1000 * 60 * 60)) % 24)} hours
							</ListItem>
						) : (
							<ListItem style={{color: 'red'}}>
								Expires in:{' '}
								{Math.floor(
									((hoverItem.expires_in - Date.now()) / (1000 * 60)) % 60,
								)}{' '}
								minutes
							</ListItem>
						)}
					</Box>
				</List>
			</Popover>
		);
	} else {
		return <></>;
	}
};

export default FlyOver;
