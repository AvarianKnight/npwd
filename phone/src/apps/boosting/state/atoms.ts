import { atom } from 'recoil';
import { BoostProfile } from '../../../../../typings/boosting';

export const BoostProfileState = {
  profile: atom<BoostProfile>({
    key: 'boostProfile',
    default: undefined,
  }),
};
