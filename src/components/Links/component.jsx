import { h, Component } from 'preact';
import { iconsEnum } from '../Icons/component';

const Icon = ({ src }) => (
  <svg class={`icon icon-${src}`}>
    <use xlinkHref={`#icon-${src}`} />
  </svg>
);

class Button extends Component {
  render() {
    const { text, icon, onClick } = this.props;

    return (
      <button onClick={onClick}>
        <Icon src={icon} />
        {text}
      </button>
    );
  }
}

class Links extends Component {
  render() {
    const { github, linkedin, email } = this.props.links;

    return (
      <div>
        <Button text="GitHub" icon={iconsEnum.github} />
        <Button text="Linkedin" icon={iconsEnum.linkedin} />
        <Button text="E-mail" icon={iconsEnum.email} />
        <Button text="More" icon={iconsEnum.newTab} />
      </div>
    );
  }
}

export { Links };
