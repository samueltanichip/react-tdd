import './message.css';

interface MessageProps {
  type?: 'warn' | 'error' | 'info' | 'default';
  title: string;
}

export const Message = ({ type='default', title }: MessageProps) => {
  return (
    <span className={`error-message error-message--${type}`} role="alert">
      {title}
    </span>
  );
};