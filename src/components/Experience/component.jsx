import { h, Component } from 'preact';
import { Company } from '../Company/component';
import styles from './styles.scss';

class Experience extends Component {
  selectExperience(experience) {
    this.props.experienceSelected(experience);
  }

  render() {
    const { experience } = this.props;

    return (
      <ul className={styles.experience} click={this.selectExperience}>
        {experience.map((exp, i) => (
          <Company key={i} {...exp} />
        ))}
      </ul>
    );
  }
}

export { Experience };
