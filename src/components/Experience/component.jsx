import { h, Component } from 'preact';
import { Company } from '../Company/component';

class Experience extends Component {
  selectExperience(experience) {
    this.props.experienceSelected(experience);
  }

  render() {
    const { experience } = this.props;

    return (
      <section>
        <h3>Experience</h3>
        <ul click={this.selectExperience}>
          {experience.map((exp, i) => (
            <Company key={i} {...exp} />
          ))}
        </ul>
      </section>
    );
  }
}

export { Experience };
