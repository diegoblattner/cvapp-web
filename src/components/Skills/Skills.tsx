import { h } from 'preact';
import type { CVData } from '@types';
import styles from './styles.module.scss';

type SkillsProp = {
  skills: CVData["skills"];
};

const Skills = ({ skills }: SkillsProp) => (
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
