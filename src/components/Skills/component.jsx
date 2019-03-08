import { h } from 'preact';

const Skills = skillsProps => (
  <section>
    <h3>Skills</h3>
    <ul>
      {skillsProps.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

export { Skills };
