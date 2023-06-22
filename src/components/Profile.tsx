import { User } from "../models/users";
import Avatar from "./Avatar";

type Props = {
  user: User;
};

export default function Profile({ user: { image, name, job, isNew } }: Props) {
  return (
    <div className='profile'>
      <Avatar src={image} alt={`${name}'s avatar`} isNew={isNew} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
