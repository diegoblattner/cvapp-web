import { ComponentChildren, h } from 'preact';
import styles from './styles.module.scss';

type ListProps = {
  children: ComponentChildren;
  className?: string;
};

const List = ({ children, className = "" }: ListProps) => (
  <ul className={`${styles.list} ${className}`}>
    {children}
  </ul>
);

export { List };
