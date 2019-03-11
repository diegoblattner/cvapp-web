import { h } from 'preact';
import styles from './styles.scss';

const Skills = ({ skills }) => (
  <div className={styles.skills}>
    <ul className={styles.skills__list}>
      {skills.map((skill, i) => (
        <li className={styles.skills__name} key={i}>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export { Skills };
