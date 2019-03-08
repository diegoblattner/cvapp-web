import { h } from 'preact';

const Role = ({ name, startDate, endDate = 'Now' }) => {
  return (
    <li>
      <strong>{name}</strong> ({startDate} - {endDate})
    </li>
  );
};

export { Role };
