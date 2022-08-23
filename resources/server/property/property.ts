import { PropertyEvents } from './../../../typings/property';
import PlayerService from '../players/player.service';
import { Player } from '../players/player.class';

const OnlinePlayersCache = new Map<number, Player>();

onNet(PropertyEvents.ADD_PLAYER, () => {
  const player: Player = PlayerService.getPlayer(source);
  if (player.getName()) {
    player.fullname = player.getName();
    player.ssn = player.getIdentifier();
    OnlinePlayersCache.set(source, player);
    // console.log("🚀 ~ file: property.ts ~ line 13 ~ onNet ~ OnlinePlayersCache", OnlinePlayersCache);
  }
});

on('playerDropped', () => {
  OnlinePlayersCache.delete(source);
  // console.log("🚀 ~ file: property.ts ~ line 19 ~ on ~ OnlinePlayersCache", OnlinePlayersCache)
});

onNet(PropertyEvents.GET_PLAYERS, () => {
  emitNet(PropertyEvents.GET_PLAYERS, source, Object.fromEntries(OnlinePlayersCache), source);
});
