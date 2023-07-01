import { useRecoilValue } from 'recoil';
import { errorState } from '../recoil/atom';

export const useErrorMessage = () => {
  const message = useRecoilValue(errorState);

  return message;
};