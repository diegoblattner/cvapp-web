import { h, Component } from 'preact';
import { Role } from '../Role/Role';
import styles from './styles.scss';

class Experience extends Component {
  selectRole(role) {
    this.props.onSelectRole(role);
  }

  render() {
    const { experience } = this.props;

    return (
      <ul className={styles.experience}>
        {experience.map((role, i) => (
          <Role key={i} {...role} onSelectRole={() => this.selectRole(i)} />
        ))}
      </ul>
    );
  }
}

export { Experience };
