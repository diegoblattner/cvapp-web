import { h, Component } from 'preact';
import { RoleDetails } from '../Role/RoleDetails';
import styles from './ExperienceDetails.scss';
import { Button } from '../Button/Button';
import { iconsEnum } from '../Icons/Icons';

function getScrollParent(node) {
  if (node === null) {
    return null;
  }

  if (node.scrollHeight > node.clientHeight) {
    return node;
  }
  return getScrollParent(node.parentNode);
}

class ExperienceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.selected,
    };
  }

  goTo(selectedIndex) {
    const scrollingParent = getScrollParent(this.base);
    if (scrollingParent) {
      scrollingParent.scroll(window.scrollX, 0);
    }
    this.setState({ selectedIndex });
  }

  componentDidUpdate() {
    const ul = this.base.querySelector('ul');
    const li = ul.getElementsByClassName(styles.experiencedetails__roles__role)[
      this.state.selectedIndex
    ];
    ul.style.height = `${li.clientHeight}px`;
  }

  render() {
    const { experience } = this.props;
    const { selectedIndex } = this.state;
    const showPrev = selectedIndex > 0;
    const showNext = selectedIndex < experience.length - 1;
    const liWidth = 100 / experience.length;

    return (
      <div className={styles.experiencedetails}>
        <ul
          className={styles.experiencedetails__roles}
          style={{
            transform: `translateX(-${liWidth * selectedIndex}%)`,
            width: `${experience.length * 100}%`,
          }}
        >
          {experience.map((role, index) => (
            <li
              className={styles.experiencedetails__roles__role}
              style={{
                width: `calc(${liWidth}% - 1rem)`,
              }}
            >
              <RoleDetails {...role} key={index} />
            </li>
          ))}
        </ul>
        <div>
          {showPrev && (
            <Button
              className={styles.experiencedetails__prev}
              text="Prev"
              icon={iconsEnum.arrow}
              onClick={() => this.goTo(selectedIndex - 1)}
            />
          )}
          {showNext && (
            <Button
              className={styles.experiencedetails__next}
              text="Next"
              icon={iconsEnum.arrow}
              onClick={() => this.goTo(selectedIndex + 1)}
            />
          )}
        </div>
      </div>
    );
  }
}

export { ExperienceDetails };
