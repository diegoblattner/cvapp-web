import { h } from 'preact';
import { Icon, iconsEnum } from '../Icons/Icons';
import styles from './styles.module.scss';

type BaseProps = {
  className?: string;
  text: string;
  icon?: iconsEnum;
};

type ButtonProps = BaseProps & {
  onClick: () => void;
  icon: string;
};

const Button = ({ className = '', text, icon, onClick }: ButtonProps) => (
  <button className={`${styles.button} ${className}`} onClick={onClick}>
    <Icon className={styles.button__icon} src={icon} />
    {text}
  </button>
);

type LinkProps = BaseProps & {
  href: string;
  icon: string;
};

const Link = ({ className = '', text, icon, href }: LinkProps) => (
  <a className={`${styles.button} ${className} ${!icon ? styles.noIcon : ''}`} href={href} target="_blank" rel="noopener">
    {icon && <Icon className={styles.button__icon} src={icon} />}
    {text}
  </a>
);

export { Button, Link };
