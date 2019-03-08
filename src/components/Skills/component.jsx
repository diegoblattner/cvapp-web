import { h } from 'preact';

const Skills = ({ skills }) => (
  <section>
    <h3>Skills</h3>
    <ul>
      {skills.map((skill, i) => (
        <li key={i}>{skill}</li>
      ))}
    </ul>
  </section>
);

export { Skills };
