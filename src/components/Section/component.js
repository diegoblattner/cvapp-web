import { h, Component } from 'preact';
import debounce from 'debounce';
import styles from './styles.scss';

const inViewClass = styles['section--in-view'];

const elementIsInView = element => {
  const top = element.offsetTop;
  return top < window.pageYOffset + window.innerHeight;
};

class Section extends Component {
  constructor(props) {
    super(props);
    this.state.inView = '';
  }

  componentDidMount() {
    const setInViewState = () => {
      const isInview = elementIsInView(this.base);

      if (isInview) {
        this.setState({
          inView: inViewClass,
        });
      }

      return isInview;
    };

    if (!setInViewState()) {
      this.onScroll = debounce(
        () => {
          if (setInViewState()) {
            document.removeEventListener('scroll', this.onScroll);
          }
        },
        100,
        200,
      );
      document.addEventListener('scroll', this.onScroll);
    }
  }

  componentWillUnmount() {
    if (this.onScroll) {
      document.removeEventListener('scroll', this.onScroll);
    }
  }

  render() {
    const { title, className = '', children } = this.props;
    const { inView } = this.state;

    return (
      <section className={`${styles.section} ${className} ${inView}`}>
        {title && (
          <div class={styles.section__ruler}>
            <h3 className={styles.section__title}>{title}</h3>
          </div>
        )}
        <div className={styles.section__content}>{children}</div>
      </section>
    );
  }
}

export { Section };
