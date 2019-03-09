import { h } from 'preact';
import { Icon } from '../Icons/component';
import styles from './styles.scss';

const Button = ({ className = '', text, icon, onClick }) => (
  <button className={`${styles.button} ${className}`} onClick={onClick}>
    <Icon className={styles.button__icon} src={icon} />
    {text}
  </button>
);

export { Button };
