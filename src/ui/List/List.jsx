import { h } from 'preact';
import styles from './styles.module.scss';

const List = ({ children, className = "" }) => (
  <ul className={`${styles.list} ${className}`}>
    {children}
  </ul>
);

export { List };
