import { h } from 'preact';
import { Button, Link } from '../../ui/Button/Button';
import { iconsEnum } from '../../ui/Icons/Icons';
import * as styles from './styles.module.scss';

const Links = ({ links }) => {
  const { github, linkedin, email } = links;

  return (
    <nav className={styles.links}>
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
    </nav>
  );
};

export { Links };
