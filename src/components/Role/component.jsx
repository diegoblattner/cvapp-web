import { h } from 'preact';
import styles from './styles.scss';

const Role = ({ name, startDate, endDate = 'Now' }) => {
  return (
    <li className={styles.role}>
      <strong className={styles.role__name}>{name}</strong>
      <span className={styles.role__period}>
        {startDate} - {endDate}
      </span>
    </li>
  );
};

export { Role };
