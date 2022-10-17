import {BoostingEvents} from '@typings/boosting';
import {useNuiEvent, useNuiRequest} from 'fivem-nui-react-lib';
import {SyntheticEvent} from 'react';
import {useSetRecoilState} from 'recoil';
import {Player} from '../../../../../resources/server/players/player.class';
import {BOOSTING_APP} from '@typings/boosting';
import {PlayerState, TradeState} from '../state/atoms';

export const usePlayer = () => {
	const {send} = useNuiRequest();
	const setPlayersBoosting = useSetRecoilState(PlayerState.playersBoosting);
	const setSelectedPlayer = useSetRecoilState(TradeState.selectedPlayerBoosting);

	const playerHandler = (players: Player[]) => {
		setPlayersBoosting(Object.values(players));
	};

	const selectedPlayerHandler = (
		event: SyntheticEvent<Element, Event>,
		value: string | Player,
	) => {
		setSelectedPlayer(value);
	};

	const clearSelectHandler = () => {
		setSelectedPlayer(undefined);
	};

	useNuiEvent(BOOSTING_APP, BoostingEvents.GET_PLAYERS, playerHandler);

	return {selectedPlayerHandler};
};
