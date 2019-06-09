import { h } from 'preact';
import { Role } from '../Role/Role';
import styles from './styles.scss';

const Experience = ({ experience, onSelectRole }) => (
  <ul className={styles.experience}>
    {experience.map((role, i) => (
      <Role key={i} {...role} onSelectRole={() => onSelectRole(i)} />
    ))}
  </ul>
);

export { Experience };
