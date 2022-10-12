import { h } from 'preact';
import * as styles from './styles.module.scss';

const Profile = profileProps => {
  const { avatar, name, position } = profileProps;

  return (
    <header className={styles.profile}>
      <img className={styles.profile__avatar} src={avatar} alt={name} />
      <h1 className={styles.profile__name}>{name}</h1>
      <h2 className={styles.profile__position}>{position}</h2>
    </header>
  );
};

export { Profile };
