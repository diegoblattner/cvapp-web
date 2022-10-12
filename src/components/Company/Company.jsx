import { h } from 'preact';
import { Role } from '../Role/Role';
import * as styles from './styles.module.scss';

const Company = ({ company, avatar, roles }) => (
    <li className={styles.company}>
      <div
        className={styles.company__avatar}
        style={{ backgroundImage: `url(${avatar})` }}
      />
      <strong className={styles.company__name}>{company}</strong>
      <ul className={styles.company__roles}>
        {roles.map((role, i) => (
          <Role key={i} {...role} />
        ))}
      </ul>
      <button className={styles.company__details}>View details</button>
    </li>
  );

export { Company };
