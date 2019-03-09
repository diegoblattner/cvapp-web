import { h } from 'preact';

const Certifications = ({ certifications }) => (
  <ul>
    {certifications.map(({ name, provider, date }, i) => (
      <li key={i}>
        <strong>{name}</strong> - {provider} ({date})
      </li>
    ))}
  </ul>
);

export { Certifications };
