import { h } from 'preact';
import { memo } from 'preact/compat';
import { List } from '@ui/List/List';
import { Role } from './Role';
import { Experience } from '../../types';
import styles from './styles.module.scss';

type Unarray<T> = T extends Array<infer U> ? U : T;
type RoleDetailsProps = Experience;

const Project = ({ name, description, tasks }: Unarray<RoleDetailsProps["projects"]>) => (
  <li>
    {name && <h4 className={styles.heading}>{name}</h4>}
    {description && <p className={styles.paragraph}>{description}</p>}
    {tasks && tasks.length > 0 && (
      <>
        <h4 className={styles.heading}>Tasks</h4>
        <List>
          {tasks.map((task, index) => (
            <li key={index} className={styles.paragraph}>{task}</li>
          ))}
        </List>
      </>
    )}
  </li>
);

const RoleDetails = memo((props: RoleDetailsProps) => {
  const { projects } = props;

  return (
    <div className={styles.container}>
      <Role className={styles.role} {...props} />
      <List>
        {projects.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </List>
    </div>
  );
});

export { RoleDetails };
