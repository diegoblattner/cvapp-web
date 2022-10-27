import { h } from 'preact';
import { RoleClickable } from '../Role/Role';
import { List } from '../../ui/List/List';

const Experience = ({ experience, onSelectRole }) => (
  <List>
    {experience.map((role, i) => (
      <RoleClickable key={i} {...role} onSelectRole={() => onSelectRole(role)} />
    ))}
  </List>
);

export { Experience };
