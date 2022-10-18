import { h } from 'preact';
import { List } from '../../ui/List/List';
import * as styles from './styles.module.scss';

const Languages = ({ languages }) => (
  <List className={styles.languages}>
    {languages.map(({ name, level }, i) => (
      <li key={i}>
        <strong>{name}</strong>: {level}
      </li>
    ))}
  </List>
);

export { Languages };
