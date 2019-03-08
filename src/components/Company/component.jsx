import { h } from 'preact';
import { Role } from '../Role/component';

const Company = ({ company, avatar, site, roles }) => {
  return (
    <li>
      <strong>{company}</strong>
      <ul>
        {roles.map((role, i) => (
          <Role key={i} {...role} />
        ))}
      </ul>
    </li>
  );
};

export { Company };
