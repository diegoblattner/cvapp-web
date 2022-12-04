import { h } from 'preact';
import styles from './styles.module.scss';

type AvatarProps = {
  avatar: string;
}

const Avatar = ({ avatar }: AvatarProps) => (
  <div
    className={styles.avatar}
    style={{ backgroundImage: `url(${avatar})` }}
  />
);

export { Avatar };
