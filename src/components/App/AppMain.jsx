import { h, Fragment } from 'preact';
import { Section } from '../../ui/Section/Section';
import { Profile } from '../Profile/Profile';
import { Links } from '../Links/Links';
import { Skills } from '../Skills/Skills';
import { Experience } from '../Experience/Experience';
import { ExperienceDetails } from '../Experience/ExperienceDetails';
import { Certifications } from '../Certifications/Certifications';
import { Education } from '../Education/Education';
import { Languages } from '../Languages/Languages';
import { IconDefs } from '../../ui/Icons/Icons';
import { withSlidePanel } from '../../ui/SlidePanel/withSlidePanel';

/**
 * @param {Object} props cvData + slidePanel (from HOC withSlidePanel)
 */
const AppMainComponent = ({ cvData, slidePanel }) => {
  const {
    profile,
    skills,
    experience,
    certifications,
    education,
    languages,
  } = cvData;

  const openExperiencePanel = (role) => {
    const { open } = slidePanel;
    open(<ExperienceDetails experience={experience} selected={role} />, { title: 'Experience' });
  };

  return (
    <Fragment>
      <Profile {...profile} />
      <Links links={profile} />
      <Section title="Skills">
        <Skills skills={skills} />
      </Section>
      <Section title="Experience">
        <Experience
          experience={experience}
          onSelectRole={openExperiencePanel}
        />
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
    </Fragment>
  );
};

const AppMain = withSlidePanel(AppMainComponent);

export { AppMain };
