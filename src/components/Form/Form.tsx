import { FormEvent, useRef, useState } from 'react';
import { useParticipant } from '../../hooks/useParticipant';
import { useErrorMessage } from '../../hooks/useErrorMessage';
import './form.css';

export const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const addParticipant = useParticipant();
  const errorMessage = useErrorMessage();
  const [name, setName] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    addParticipant(name);
    setName('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        ref={inputRef}
        type="text"
        value={name}
        onChange={event => setName(event.target.value)} 
        placeholder="New participant" 
      />
      <button disabled={!name}></button>

      {errorMessage && <span role="alert">{errorMessage}</span>}
    </form>
  );
};