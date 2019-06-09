import { h } from 'preact';
import { Section } from '../../ui/Section/Section';
import { Button, Link } from '../../ui/Button/Button';
import { iconsEnum } from '../../ui/Icons/Icons';
import styles from './styles.scss';

const Links = ({ links }) => {
  const { github, linkedin, email } = links;

  return (
    <Section className={styles.links}>
      <Link
        className={styles.links__button}
        text={'GitHub'}
        icon={iconsEnum.github}
        href={github}
      />
      <Link
        className={styles.links__button}
        text={'Linkedin'}
        icon={iconsEnum.linkedin}
        href={linkedin}
      />
      <Link
        className={styles.links__button}
        text={'E-mail'}
        icon={iconsEnum.email}
        href={`mailto:${email}`}
      />
      <Button
        className={styles.links__button}
        text={'More'}
        icon={iconsEnum.plus}
      />
    </Section>
  );
};

export { Links };
