import { h, Fragment } from 'preact';
import { Section } from '@ui/Section/Section';
import { withSlidePanel, WithSlidePanelProps } from '@ui/SlidePanel/withSlidePanel';
import type { CVData } from '@types';
import { Profile } from '../Profile/Profile';
import { Skills } from '../Skills/Skills';
import { Experience } from '../Experience/Experience';
import { Certifications } from '../Certifications/Certifications';
import { Education } from '../Education/Education';
import { Languages } from '../Languages/Languages';
import { IconDefs } from '../../ui/Icons/Icons';
import { useAppMain } from './useAppMain';
import { Footer } from '../Footer/Footer';

type AppMainComponentProps = WithSlidePanelProps<{
  cvData: CVData;
}>;

/**
 * @param {Object} props cvData + slidePanel (from HOC withSlidePanel)
 */
const AppMainComponent = ({ cvData, slidePanel }: AppMainComponentProps) => {
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
      <Section title="Disclaimer">
        <Footer />
      </Section>
      <IconDefs />
    </Fragment>
  );
};

const AppMain = withSlidePanel(AppMainComponent);

export { AppMain };
