import { h, Fragment } from 'preact';
import styles from './styles.module.scss';

export function About ({ text }: {text: string}) {
  return (
    <div className={styles.about}>{text}</div>
  );
}
