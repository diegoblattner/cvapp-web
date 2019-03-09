import { h, Component } from 'preact';
import { Profile } from '../Profile/component';
import { Links } from '../Links/component';
import { Skills } from '../Skills/component';
import { Experience } from '../Experience/component';
import { Certifications } from '../Certifications/component';
import { Education } from '../Education/component';
import { Languages } from '../Languages/component';
import { IconDefs } from '../Icons/component';

class AppMain extends Component {
  render() {
    const {
      profile,
      skills,
      experience,
      certifications,
      education,
      languages,
    } = this.props.cvData;

    return (
      <div>
        <Profile {...profile} />
        <Links links={profile} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Certifications certifications={certifications} />
        <Education education={education} />
        <Languages languages={languages} />
        <IconDefs />
      </div>
    );
  }
}

export { AppMain };
