type Props = {
  number: number;
  onClick: () => void;
};

export default function Counter({ number, onClick }: Props) {
  return (
    <div className='counter'>
      <span className='number'>{number}</span>
      <button className='button' onClick={onClick}>
        Add +
      </button>
    </div>
  );
}
