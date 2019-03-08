import { h } from 'preact';

const Languages = ({ languages }) => (
  <section>
    <h3>Languages</h3>
    <ul>
      {languages.map(({ name, level }, i) => (
        <li key={i}>
          <strong>{name}</strong>: {level}
        </li>
      ))}
    </ul>
  </section>
);

export { Languages };
