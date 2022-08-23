import { useNuiEvent, useNuiRequest } from 'fivem-nui-react-lib';
import { SyntheticEvent, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Player } from '../../../../../resources/server/players/player.class';
import { PlayerListState } from '../atoms/state';

export const usePlayer = () => {
  const { send } = useNuiRequest();
  const setPlayerList = useSetRecoilState(PlayerListState.playerList);
  const setSelectedPlayerList = useSetRecoilState(PlayerListState.selectedPlayerList);

  useEffect(() => {
    send('npwd:property:getOnlinePlayers');
  }, [send]);

  const playerHandler = (players: Player[]) => {
    setPlayerList(Object.values(players));
  };

  const selectedPlayerHandler = (
    event: SyntheticEvent<Element, Event>,
    value: (string | Player)[],
  ) => {
    setSelectedPlayerList(value);
  };

  useNuiEvent('PROPERTY', 'npwd:property:getOnlinePlayers', playerHandler);

  return { selectedPlayerHandler };
};
