import { PropertyEvents } from './../../../typings/property';
import PlayerService from '../players/player.service';
import { Player } from '../players/player.class';

const OnlinePlayersCache = new Map<number, Player>();

onNet(PropertyEvents.ADD_PLAYER, () => {
  console.log('boobs');
  const player: Player = PlayerService.getPlayer(source);
  console.log('🚀 ~ file: property.ts ~ line 9 ~ onNet ~ player', player);
  player.fullname = player.getName();
  player.ssn = player.getIdentifier();
  OnlinePlayersCache.set(source, player);
});

onNet(PropertyEvents.REMOVE_PLAYER, () => {
  const player: Player = PlayerService.getPlayer(source);
  console.log('🚀 ~ file: property.ts ~ line 16 ~ onNet ~ player', player);
  player.fullname = player.getName();
  player.ssn = player.getIdentifier();
  OnlinePlayersCache.set(source, player);
});

onNet(PropertyEvents.GET_PLAYERS, () => {
  console.log(
    '🚀 ~ file: property.ts ~ line 26 ~ onNet ~ Object.fromEntries(OnlinePlayersCache)',
    Object.fromEntries(OnlinePlayersCache),
  );
  emitNet(PropertyEvents.GET_PLAYERS, source, Object.fromEntries(OnlinePlayersCache));
});
