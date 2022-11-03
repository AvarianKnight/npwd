import {atom} from 'recoil';

export const PromptState = {
	prompt: atom({
		key: 'promptBoosting',
		default: {
			message: '',
			open: false,
			component: undefined,
		},
	}),
};
