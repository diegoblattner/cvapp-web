import { h } from 'preact';

const Skills = ({ skills }) => (
  <ul>
    {skills.map((skill, i) => (
      <li key={i}>{skill}</li>
    ))}
  </ul>
);

export { Skills };
