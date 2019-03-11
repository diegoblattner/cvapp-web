import { h } from 'preact';

const Education = ({ education }) => (
  <ul>
    {education.map(({ course, institution, period }, i) => (
      <li key={i}>
        <strong>{course}</strong> - {institution} ({period})
      </li>
    ))}
  </ul>
);

export { Education };
