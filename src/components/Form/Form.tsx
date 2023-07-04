import { FormEvent, useRef, useState } from 'react';
import { useParticipant } from '../../hooks/useParticipant';
import { useErrorMessage } from '../../hooks/useErrorMessage';
import { Message } from '../Message/Message';
import './form.css';

export const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addParticipant } = useParticipant();
  const { errorMessage } = useErrorMessage();
  const [name, setName] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    addParticipant(name);
    setName('');
    inputRef.current?.focus();
  };

  return (
    <>
      {errorMessage && <Message type="error" title={errorMessage} />}
      
      <form className="add-participant__form" onSubmit={handleSubmit}>
        <input 
          ref={inputRef}
          type="text"
          className="form__input"
          value={name}
          onChange={event => setName(event.target.value)} 
          placeholder="Novo participante" 
        />
        <button disabled={!name}>Adicionar</button>
      </form>
    </>
  );
};