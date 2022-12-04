import { h } from 'preact';
import { List } from '@ui/List/List';
import type { Experience as ExperienceModel } from '@types';
import { RoleClickable } from '../Role/Role';

type ExperienceProps = {
  experience: ExperienceModel[];
  onSelectRole: (role: ExperienceModel) => void;
}

const Experience = ({ experience, onSelectRole }: ExperienceProps) => (
  <List>
    {experience.map((role, i) => (
      <RoleClickable key={i} {...role} onSelectRole={() => onSelectRole(role)} />
    ))}
  </List>
);

export { Experience };
