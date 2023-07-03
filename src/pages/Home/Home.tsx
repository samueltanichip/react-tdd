import { DrawButton } from '../../components/DrawButton/DrawButton';
import { Form } from '../../components/Form/Form';
import { ParticipantsList } from '../../components/ParticipantsList/ParticipantsList';

export const Home = () => {
  return (
    <>
      <Form />
      <ParticipantsList />
      <DrawButton />
    </>
  );
};