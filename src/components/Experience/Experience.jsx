import { h } from 'preact';
import { RoleClickable } from '../Role/Role';
import * as styles from './styles.module.scss';

const Experience = ({ experience, onSelectRole }) => (
  <ul className={styles.experience}>
    {experience.map((role, i) => (
      <RoleClickable key={i} {...role} onSelectRole={() => onSelectRole(i)} />
    ))}
  </ul>
);

export { Experience };
