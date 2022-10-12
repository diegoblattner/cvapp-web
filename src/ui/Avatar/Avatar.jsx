import { h } from 'preact';
import * as styles from './styles.module.scss';

const Avatar = ({ avatar }) => (
  <div
    className={styles.avatar}
    style={{ backgroundImage: `url(${avatar})` }}
  />
);

export { Avatar };
