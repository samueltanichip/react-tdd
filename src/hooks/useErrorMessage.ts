import { useRecoilValue, useSetRecoilState } from 'recoil';
import { errorState } from '../recoil/atom';

export const useErrorMessage = () => {
  const errorMessage = useRecoilValue(errorState);
  const setErrorMessage = useSetRecoilState(errorState);

  return {
    errorMessage,
    setErrorMessage
  };
};