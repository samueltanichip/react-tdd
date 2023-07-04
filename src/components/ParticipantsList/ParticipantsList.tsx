import { useParticipant } from '../../hooks/useParticipant';
import './participantsList.css';

export const ParticipantsList = () => {
  const { participantList } = useParticipant();

  return (
    <ul className="participants__list">
      {participantList.map(name => 
        <li key={name}className="participants__list-item">
          {name}
        </li>
      )}
    </ul>
  );
};