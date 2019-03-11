import { h, Component } from 'preact';
import { Section } from '../Section/Section';
import { Profile } from '../Profile/Profile';
import { Links } from '../Links/Links';
import { Skills } from '../Skills/Skills';
import { Experience } from '../Experience/Experience';
import { Certifications } from '../Certifications/Certifications';
import { Education } from '../Education/Education';
import { Languages } from '../Languages/Languages';
import { IconDefs } from '../Icons/Icons';

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
