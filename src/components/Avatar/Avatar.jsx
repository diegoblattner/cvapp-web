import { h } from 'preact';
import styles from './styles';

const Avatar = ({ avatar }) => (
  <div
    className={styles.avatar}
    style={{ backgroundImage: `url(${avatar})` }}
  />
);

export { Avatar };
