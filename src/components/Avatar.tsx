type Props = {
  src: string;
  alt: string;
  isNew: boolean;
};

export default function Avatar({ src, alt, isNew }: Props) {
  return (
    <div className='avatar'>
      <img className='photo' src={src} alt={alt} />
      {isNew && <span className='new'>New</span>}
    </div>
  );
}
