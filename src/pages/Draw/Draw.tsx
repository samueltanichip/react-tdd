import { FormEvent, useState } from 'react';
import { useParticipant } from '../../hooks/useParticipant';
import { useDrawer } from '../../hooks/useDrawer';
import { Heading } from '../../components/Heading/Heading';
import './draw.css';

export const Draw = () => {
  const { participantList } = useParticipant();
  const { drawResult } = useDrawer();
  const [currentParticipant, setCurrentParticipant] = useState('');
  const [drawnFriend, setDrawnFriend] = useState<string|undefined>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setDrawnFriend(drawResult.get(currentParticipant));

    setTimeout(() => setDrawnFriend(''), 5000);
  };

  return (
    <section className="draw">
      <Heading title="Descubra quem você tirou!" />
      <form className="view-result__form" onSubmit={handleSubmit}>
        <select 
          name="currentParticipant" 
          id="current-participant"
          className="form__select"
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
        drawnFriend && 
        <p className="draw-result" role="alert">
          {drawnFriend}
        </p>
      }
    </section>
  );
};