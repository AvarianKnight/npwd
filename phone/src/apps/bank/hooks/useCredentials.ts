import { useRecoilValue } from 'recoil';
import { IBankCredentials } from '@typings/bank';
import { bankState } from './state';

export const useCredentials = () => {
  return useRecoilValue<IBankCredentials>(bankState.bankCredentials);
};
