import { h } from 'preact';
import { Links } from '../Links/component';

const Profile = profileProps => {
  const { avatar, name, position } = profileProps;

  return (
    <header>
      <div>
        <img src={avatar} alt={name} />
        <h1>{name}</h1>
        <h2>{position}</h2>
      </div>
      <Links links={profileProps} />
    </header>
  );
};

export { Profile };
