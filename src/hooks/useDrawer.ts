import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useParticipant } from './useParticipant';
import { drawResultState } from './recoil/atom';
import { drawParticipants } from '../helpers/drawParticipants/drawParticipants';

export const useDrawer = () => {
  const { participantList } = useParticipant();
  const drawResult = useRecoilValue(drawResultState);
  const setDrawResult = useSetRecoilState(drawResultState);

  const draw = () => {
    const result = drawParticipants(participantList);

    setDrawResult(result);
  };

  return {
    drawResult,
    draw
  };
};