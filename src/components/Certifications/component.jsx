import { h } from 'preact';

const Certifications = ({ certifications }) => (
  <section>
    <h3>Certifications</h3>
    <ul>
      {certifications.map(({ name, provider, date }, i) => (
        <li key={i}>
          <strong>{name}</strong> - {provider} ({date})
        </li>
      ))}
    </ul>
  </section>
);

export { Certifications };
