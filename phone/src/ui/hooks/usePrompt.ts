// import { BennysEvents } from './../../../../../typings/bennys';
import {useNuiEvent, useNuiRequest} from 'fivem-nui-react-lib';
import {useRecoilState} from 'recoil';
import {PromptState} from '../state/PromptState';
// import { useSnackbar } from '../../../os/snackbar/hooks/useSnackbar';
// import { PromptState, VehicleState } from '../atoms/state';

export const usePrompt = () => {
	const [prompt, setPrompt] = useRecoilState(PromptState.prompt);
	// const [vehicle, setVehicle] = useRecoilState(VehicleState.vehicle);
	// const { send } = useNuiRequest();
	// const { addAlert } = useSnackbar();

	const denyHandler = () => {
		// setPrompt({ message: '', open: false });
		// setVehicle(undefined);
	};

	const acceptHandler = async () => {
		// await send(BennysEvents.ABANDON_VEHICLE, vehicle);
		// setPrompt({ message: '', open: false });
	};

	// const abandonPass = () => {
	// 	addAlert({ message: 'Removal successful!', type: 'success' });
	// 	setVehicle(undefined);
	// };

	// const abandonFail = () => {
	// 	addAlert({ message: 'Call an admin bro', type: 'error' });
	// 	setVehicle(undefined);
	// };

	// useNuiEvent('BENNYS', BennysEvents.ABANDON_SUCCESS, abandonPass);
	// useNuiEvent('BENNYS', BennysEvents.ABANDON_FAIL, abandonFail);

	return {prompt, setPrompt, denyHandler, acceptHandler};
};
