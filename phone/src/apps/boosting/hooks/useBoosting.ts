import { BoostProfileState } from './../state/atoms';
import { useSetRecoilState } from 'recoil';
import { BoostingEvents, BOOSTING_APP } from './../../../../../typings/boosting';
import { useNuiEvent, useNuiRequest } from 'fivem-nui-react-lib';
import { useEffect } from 'react';

export const useBoosting = () => {
  const { send } = useNuiRequest();
  const setBoostProfile = useSetRecoilState(BoostProfileState.profile);
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      send(BoostingEvents.LOAD_BOOSTING_PROFILE);
    }
  }, [send]);

  useNuiEvent(BOOSTING_APP, BoostingEvents.LOAD_BOOSTING_PROFILE, setBoostProfile);
};
