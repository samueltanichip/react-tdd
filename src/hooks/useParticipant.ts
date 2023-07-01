import { useRecoilValue, useSetRecoilState } from 'recoil';
import { participantsListState } from '../recoil/atom';
import { useErrorMessage } from './useErrorMessage';

export const useParticipant = () => {
  const { setErrorMessage } = useErrorMessage();
  const participantList = useRecoilValue(participantsListState);
  const setParticipantList = useSetRecoilState(participantsListState);

  const addParticipant = (participantName: string) => {
    if (participantList.includes(participantName)) {
      setErrorMessage('Nomes duplicados não são permitidos');
      
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    return setParticipantList(currentList => 
      [...currentList, participantName]
    );
  };

  return {
    participantList,
    addParticipant
  };
};