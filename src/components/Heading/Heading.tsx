import './heading.css';

interface HeadingProps {
  title: string
}

export const Heading = ({ title }: HeadingProps) => {
  return (
    <h1 className="heading">
      {title}
    </h1>
  );
};