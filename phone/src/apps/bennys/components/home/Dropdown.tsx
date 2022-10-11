import { Menu, MenuItem } from '@mui/material';
import { useDropDown } from '../../hooks/useDropdown';

interface Props {
	anchor: HTMLElement;
}
const Dropdown = ({ anchor }: Props) => {
	const { handleClose, handleAbandon, dropdown } = useDropDown();
	return (
		<Menu
			id="basic-menu"
			anchorEl={anchor}
			open={dropdown}
			onClose={handleClose}
			MenuListProps={{
				'aria-labelledby': 'basic-button',
			}}
		>
			<MenuItem onClick={() => handleAbandon()}>Abandon Vehicle</MenuItem>
		</Menu>
	);
};

export default Dropdown;
