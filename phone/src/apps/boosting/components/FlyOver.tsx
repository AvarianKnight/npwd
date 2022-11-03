import {Box, Divider, List, ListItem, ListSubheader, Popover} from '@mui/material';
import {useRecoilValue} from 'recoil';
import {HoverStateContracts} from '../state/atoms';

type Props = {};

const FlyOver = (props: Props) => {
	const anchorItem = useRecoilValue(HoverStateContracts.anchorItem);
	const hoverItem = useRecoilValue(HoverStateContracts.hoverItem);

	const hoursOrMinutes = () => {
		const currentTimeInMs = Date.now();
		const contractTime = hoverItem.expires_in;
		const cost = hoverItem.cost;

		const msDiff = contractTime - currentTimeInMs;
		const hoursRemaining = Math.floor(msDiff / 1000 / 60 / 60);
		const minutesRemaining = Math.floor(msDiff / 1000 / 60);

		if (hoursRemaining >= 1 && hoursRemaining < 7) {
			return (
				<>
					<ListItem>Expires in: {hoursRemaining} hours</ListItem>
					<ListItem>Cost: {cost} </ListItem>
				</>
			);
		} else {
			return (
				<>
					<ListItem style={{color: 'red'}}>
						Expires in: {minutesRemaining} minutes
					</ListItem>
					<ListItem>Cost: {cost} </ListItem>
				</>
			);
		}
	};

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
					<Box sx={{paddingTop: '5px'}}>{hoursOrMinutes()}</Box>
				</List>
			</Popover>
		);
	} else {
		return <></>;
	}
};

export default FlyOver;
