import { useNuiEvent, useNuiRequest } from 'fivem-nui-react-lib';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Player } from '../../../../../resources/server/players/player.class';
import { PlayerListState } from '../atoms/state';

export const usePlayer = () => {
  const { send } = useNuiRequest();
  const setPlayerList = useSetRecoilState(PlayerListState.playerList);

  useEffect(() => {
    send('npwd:property:getOnlinePlayers');
    console.log(14);
  }, [send]);

  const playerHandler = (players: Player[]) => {
    setPlayerList(Object.values(players));
  };

  useNuiEvent('PROPERTY', 'npwd:property:getOnlinePlayers', playerHandler);

  return {};
};
