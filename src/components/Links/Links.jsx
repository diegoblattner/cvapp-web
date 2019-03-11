import { h, Component } from 'preact';
import { Section } from '../Section/Section';
import { Button } from '../Button/Button';
import { iconsEnum } from '../Icons/Icons';
import styles from './styles.scss';

const buttonProps = (text, icon) => ({ text, icon });

const buttons = [
  buttonProps('GitHub', iconsEnum.github),
  buttonProps('Linkedin', iconsEnum.linkedin),
  buttonProps('E-mail', iconsEnum.email),
  buttonProps('More', iconsEnum.plus),
];

class Links extends Component {
  render() {
    const { github, linkedin, email } = this.props.links;

    return (
      <Section className={styles.links}>
        {buttons.map((props, i) => (
          <Button className={styles.links__button} {...props} key={i} />
        ))}
      </Section>
    );
  }
}

export { Links };
