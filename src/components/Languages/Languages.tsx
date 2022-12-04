import { h } from 'preact';
import type { CVData } from '@types';
import { List } from '../../ui/List/List';
import styles from './styles.module.scss';

const Languages = ({ languages }: Pick<CVData, "languages">) => (
  <List className={styles.languages}>
    {languages.map(({ name, level }, i) => (
      <li key={i}>
        <strong>{name}</strong>: {level}
      </li>
    ))}
  </List>
);

export { Languages };
