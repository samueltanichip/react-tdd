import { DrawButton } from '../../components/DrawButton/DrawButton';
import { Form } from '../../components/Form/Form';
import { Heading } from '../../components/Heading/Heading';
import { ParticipantsList } from '../../components/ParticipantsList/ParticipantsList';
import './home.css';

export const Home = () => {
  return (
    <section className="home">
      <Heading title="Liste os participantes do amigo secreto!" />
      <Form />
      <ParticipantsList />
      <DrawButton />
    </section>
  );
};