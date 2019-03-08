import { h } from 'preact';

const Education = ({ education }) => (
  <section>
    <h3>Education</h3>
    <ul>
      {education.map(({ course, institution, period }, i) => (
        <li key={i}>
          <strong>{course}</strong> - {institution} ({period})
        </li>
      ))}
    </ul>
  </section>
);

export { Education };
