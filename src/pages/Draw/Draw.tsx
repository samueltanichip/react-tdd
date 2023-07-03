import { FormEvent, useState } from 'react';
import { useParticipant } from '../../hooks/useParticipant';
import { useDrawer } from '../../hooks/useDrawer';

export const Draw = () => {
  const { participantList } = useParticipant();
  const { drawResult } = useDrawer();
  const [currentParticipant, setCurrentParticipant] = useState('');
  const [drawnFriend, setDrawnFriend] = useState<string|undefined>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setDrawnFriend(drawResult.get(currentParticipant));
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <select 
          name="currentParticipant" 
          id="current-participant"
          placeholder="Selecione seu nome"
          value={currentParticipant}
          onChange={event => setCurrentParticipant(event.target.value)}
          required
        >
          <option>Selecione seu nome</option>
          {participantList.map(participant => 
            <option key={participant} value={participant}>
              {participant}
            </option>
          )}
        </select>

        <button>Ver Resultado</button>
      </form>

      {
        drawnFriend ? 
          <p role="alert">{drawnFriend}</p> 
          : 
          <p role="alert">
            Sorteio não realizado
          </p>
      }
    </section>
  );
};