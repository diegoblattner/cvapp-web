import { h, Component } from 'preact';
import { SlidePanel } from './SlidePanel';
import styles from './styles.scss';

const slidePanelOpenedClassName = styles['container--slidepanelon'];
const animationDuration = 500;

/**
 * Adds a side panel to the received component
 * Exposes a 'slidePanel' prop with two methods: 'open' and 'close'
 * @param {Component} WrappedComponent
 */
const withSlidePanel = WrappedComponent => {
  class HOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        slidePanelOpened: false,
        openedClass: null,
        slidePanelComponent: null,
        scrollPosition: null,
      };
    }

    openSlidePanel(component) {
      this.setState({
        scrollPosition: [window.scrollX, window.scrollY],
        slidePanelOpened: true,
        slidePanelComponent: component,
      });

      // sets a timeout to add the auxiliar class after the animation has ocurred
      setTimeout(() => {
        this.setState(
          Object.assign({}, this.state, {
            openedClass: slidePanelOpenedClassName,
          }),
        );
      }, animationDuration);
    }

    closeSlidePanel() {
      this.setState(
        Object.assign({}, this.state, {
          openedClass: null,
          slidePanelOpened: false,
        }),
      );

      // sets a timeout to remove the component after the transition has occurred
      setTimeout(() => {
        this.setState({
          slidePanelOpened: false,
          slidePanelComponent: null,
          scrollPosition: null,
          openedClass: null,
        });
      }, animationDuration);
    }

    componentDidUpdate() {
      if (this.state.scrollPosition) {
        window.scroll(...this.state.scrollPosition);
      }
    }

    render() {
      const { slidePanelOpened, slidePanelComponent, openedClass } = this.state;

      return (
        <div>
          <div className={openedClass}>
            <WrappedComponent
              {...this.props}
              slidePanel={{
                open: this.openSlidePanel.bind(this),
                close: this.closeSlidePanel.bind(this),
              }}
            />
          </div>
          <SlidePanel open={slidePanelOpened} component={slidePanelComponent} />
        </div>
      );
    }
  }

  return HOC;
};

export { withSlidePanel };
