import {Box, Divider, List, ListItem, ListSubheader, Popover} from '@mui/material';
import {useRecoilValue} from 'recoil';
import {DropdownState, hoverState, PromptState} from '../../atoms/state';

const FlyOver = () => {
	const hoverItem = useRecoilValue(hoverState.hoverItem);
	const anchorItem = useRecoilValue(hoverState.anchorItem);
	const dropdown = useRecoilValue(DropdownState.dropdown);
	const prompt = useRecoilValue(PromptState.prompt);
	if (hoverItem && !dropdown && !prompt.open) {
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
								Vehicle Data
							</ListSubheader>{' '}
							<Divider sx={{borderColor: 'gray'}} />
						</>
					}
				>
					<Box sx={{paddingTop: '5px'}}>
						<ListItem>
							Engine: {Math.floor((hoverItem.engine_health / 1000) * 100)}%
						</ListItem>
						<ListItem>
							Body: {Math.floor((hoverItem.body_health / 1000) * 100)}%
						</ListItem>
						<ListItem>Fuel: {Math.floor((hoverItem.fuel / 100) * 100)}%</ListItem>
					</Box>
				</List>
			</Popover>
		);
	} else {
		return <></>;
	}
};

export default FlyOver;
