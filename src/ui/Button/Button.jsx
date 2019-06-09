import { h } from 'preact';
import { Icon } from '../Icons/Icons';
import styles from './styles.scss';

const Button = ({ className = '', text, icon, onClick }) => (
  <button className={`${styles.button} ${className}`} onClick={onClick}>
    <Icon className={styles.button__icon} src={icon} />
    {text}
  </button>
);

const Link = ({ className = '', text, icon, href }) => (
  <a className={`${styles.button} ${className}`} href={href} target="_blank">
    <Icon className={styles.button__icon} src={icon} />
    {text}
  </a>
);

export { Button, Link };
