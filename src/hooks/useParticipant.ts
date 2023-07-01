import { useRecoilValue, useSetRecoilState } from 'recoil';
import { errorState, participantsListState } from '../recoil/atom';

export const useParticipant = () => {
  const list = useRecoilValue(participantsListState);
  const setList = useSetRecoilState(participantsListState);
  const setErrorMessage = useSetRecoilState(errorState);

  return (participantName: string) => {
    if (list.includes(participantName)) {
      setErrorMessage('Nomes duplicados não são permitidos');
      return;
    }

    return setList(currentList => [...currentList, participantName]);
  };
};