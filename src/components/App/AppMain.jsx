import { h, Fragment } from 'preact';
import { Section } from '../../ui/Section/Section';
import { Profile } from '../Profile/Profile';
import { Skills } from '../Skills/Skills';
import { Experience } from '../Experience/Experience';
import { Certifications } from '../Certifications/Certifications';
import { Education } from '../Education/Education';
import { Languages } from '../Languages/Languages';
import { IconDefs } from '../../ui/Icons/Icons';
import { withSlidePanel } from '../../ui/SlidePanel/withSlidePanel';
import { useAppMain } from './useAppMain';

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

  const { selectRole } = useAppMain(experience, slidePanel);

  return (
    <Fragment>
      <Section>
        <Profile {...profile} />
      </Section>
      <Section title="Skills">
        <Skills skills={skills} />
      </Section>
      <Section title="Experience">
        <Experience
          experience={experience}
          onSelectRole={selectRole}
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
