import { h } from 'preact';

const Profile = profileProps => {
  const { avatar, name, position, github, linkedin, email } = profileProps;

  return (
    <header>
      <div>
        <img src={avatar} alt={name} />
        <h1>{name}</h1>
        <h2>{position}</h2>
      </div>
      <div>
        <a href={github}>GitHub</a>
        <a href={linkedin}>Linkedin</a>
        <a href={`mailto:${email}`}>E-mail</a>
      </div>
    </header>
  );
};

export { Profile };
