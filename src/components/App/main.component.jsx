import { h, Component } from 'preact';
import { Section } from '../Section/component';
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
        <Section title="Skills">
          <Skills skills={skills} />
        </Section>
        <Section title="Experience">
          <Experience experience={experience} />
        </Section>
        <Section title="Certifications">
          <Certifications certifications={certifications} />
        </Section>
        <Section title="Education">
          <Education education={education} />
        </Section>
        <Section title="Languages">
          <Languages languages={languages} />
        </Section>
        <IconDefs />
      </div>
    );
  }
}

export { AppMain };
