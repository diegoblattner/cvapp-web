import { h } from 'preact';

const Languages = ({ languages }) => (
  <ul>
    {languages.map(({ name, level }, i) => (
      <li key={i}>
        <strong>{name}</strong>: {level}
      </li>
    ))}
  </ul>
);

export { Languages };
