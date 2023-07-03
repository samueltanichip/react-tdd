import { useNavigate } from 'react-router-dom';
import { useParticipant } from '../../hooks/useParticipant';
import { useDrawer } from '../../hooks/useDrawer';

export const DrawButton = () => {
  const navigate = useNavigate();
  const { participantList } = useParticipant();
  const { draw } = useDrawer();

  const handleClick = () => {
    draw();
    navigate('/sorteio');
  };

  return (
    <button 
      className="draw-button" 
      disabled={participantList.length < 3}
      onClick={handleClick}
    >
      Sortear!
    </button>
  );
};