import { h, Component } from 'preact';
import { Role } from '../Role/component';
import styles from './styles.scss';

class Experience extends Component {
  selectExperience(experience) {
    this.props.experienceSelected(experience);
  }

  render() {
    const { experience } = this.props;

    return (
      <ul className={styles.experience} click={this.selectExperience}>
        {experience.map((role, i) => (
          <Role key={i} {...role} />
        ))}
      </ul>
    );
  }
}

export { Experience };
