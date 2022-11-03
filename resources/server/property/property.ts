import {PropertyEvents} from './../../../typings/property';
import PlayerService from '../players/player.service';
import {Player} from '../players/player.class';
import {BoostingEvents} from '../../../typings/boosting';

const OnlinePlayersCache = new Map<number, Player>();

onNet(PropertyEvents.ADD_PLAYER, () => {
	const player: Player = PlayerService.getPlayer(source);
	if (player.getName()) {
		player.fullname = player.getName();
		player.ssn = player.getIdentifier();
		OnlinePlayersCache.set(source, player);
	}
});

on('playerDropped', () => {
	OnlinePlayersCache.delete(source);
});

onNet(PropertyEvents.GET_PLAYERS, (app: string) => {
	console.log(
		'🚀 ~ file: property.ts ~ line 24 ~ onNet ~ Object.fromEntries(OnlinePlayersCache)',
		Object.fromEntries(OnlinePlayersCache),
	);
	if (app === 'boosting') {
		emitNet(BoostingEvents.GET_PLAYERS, source, Object.fromEntries(OnlinePlayersCache), source);
	} else {
		emitNet(PropertyEvents.GET_PLAYERS, source, Object.fromEntries(OnlinePlayersCache), source);
	}
});
