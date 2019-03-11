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
import { withSlidePanel } from '../SlidePanel/withSlidePanel';

const AppMain = withSlidePanel(
  class AppMainBase extends Component {
    openSlidePanel(component) {
      const {
        slidePanel: { open, close },
      } = this.props;
      open(
        <div>
          Testing....<button onClick={close}>Close....</button>
        </div>,
      );
    }

    render() {
      const {
        profile,
        skills,
        experience,
        certifications,
        education,
        languages,
      } = this.props.cvData;
      const { slidePanel: open, close } = this.props;

      return (
        <main>
          <Profile {...profile} />
          <Links links={profile} />
          <Section title="Skills">
            <Skills skills={skills} />
          </Section>
          <Section title="Experience">
            <Experience experience={experience} onSelect={open} />
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
          <button onClick={this.openSlidePanel.bind(this)}>
            Open side panel
          </button>
        </main>
      );
    }
  },
);

export { AppMain };
