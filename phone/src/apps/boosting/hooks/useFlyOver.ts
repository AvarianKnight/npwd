import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {ContractsState, HoverStateContracts} from '../state/atoms';

export const useFlyOver = () => {
	const setAnchorItem = useSetRecoilState(HoverStateContracts.anchorItem);
	const [hoveredItem, setHoveredItem] = useRecoilState(HoverStateContracts.hoverItem);
	const contracts = useRecoilValue(ContractsState.contracts);

	const flyOverOpenHandler = (event: React.MouseEvent<HTMLElement>, index: number) => {
		setAnchorItem(event.currentTarget);
		setHoveredItem(contracts[index]);
	};

	const flyOverCloseHandler = () => {
		if (hoveredItem) {
			setAnchorItem(undefined);
			setHoveredItem(undefined);
		}
	};

	return {flyOverOpenHandler, flyOverCloseHandler};
};
