import { h } from 'preact';
import { RoleClickable } from '../Role/Role';
import { List } from '../../ui/List/List';
import * as styles from './styles.module.scss';

const Experience = ({ experience, onSelectRole }) => (
  <List>
    {experience.map((role, i) => (
      <RoleClickable key={i} {...role} onSelectRole={() => onSelectRole(i)} />
    ))}
  </List>
);

export { Experience };
