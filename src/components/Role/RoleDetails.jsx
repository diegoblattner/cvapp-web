import { h } from 'preact';
import * as styles from './styles.module.scss';
import { List } from '../../ui/List/List';
import { Role } from './Role';

const Project = ({ name, description, tasks }) => (
  <li>
    {name && <h4 className={styles.heading}>{name}</h4>}
    {description && <p className={styles.paragraph}>{description}</p>}
    {tasks?.length > 0 && (
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

const RoleDetails = (props) => {
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
};

export { RoleDetails };
