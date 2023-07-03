import { useParticipant } from '../../hooks/useParticipant';

export const ParticipantsList = () => {
  const { participantList } = useParticipant();

  return (
    <ul>
      {participantList.map(name => <li key={name}>{name}</li>)}
    </ul>
  );
};