import { h, Component } from 'preact';
import { SlidePanel } from './SlidePanel';
import styles from './styles.scss';

const openedClassName = styles['container--slidepanelon'];
const animationDuration = 500;

const initialState = () => ({
  opened: false,
  openedClass: null,
  component: null,
  scrollPosition: null,
  slidePanelProps: {},
});

/**
 * Adds a side panel to the received component
 * Exposes a 'slidePanel' prop with two methods: 'open' and 'close'
 * @param {Component} WrappedComponent
 */
const withSlidePanel = WrappedComponent => {
  class HOC extends Component {
    constructor(props) {
      super(props);
      this.state = initialState();
    }

    openSlidePanel(component, slidePanelProps = {}) {
      this.setState({
        scrollPosition: [window.scrollX, window.scrollY],
        opened: true,
        component,
        slidePanelProps,
      });

      // sets a timeout to add the auxiliar class after the animation has ocurred
      setTimeout(() => {
        this.setState(
          Object.assign({}, this.state, {
            openedClass: openedClassName,
          }),
        );
      }, animationDuration);
    }

    closeSlidePanel() {
      this.setState(
        Object.assign({}, this.state, {
          openedClass: null,
          opened: false,
        }),
      );

      // sets a timeout to remove the component after the transition has occurred
      setTimeout(() => {
        this.setState(initialState());
      }, animationDuration);
    }

    componentDidUpdate() {
      if (this.state.scrollPosition) {
        window.scroll(...this.state.scrollPosition);
      }
    }

    onBackButtonClick() {
      const {
        slidePanelProps: { onBackButtonClick },
      } = this.state;
      if (onBackButtonClick) {
        onBackButtonClick();
      } else {
        this.closeSlidePanel();
      }
    }

    render() {
      const { opened, component, openedClass, slidePanelProps } = this.state;

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
          <SlidePanel
            {...slidePanelProps}
            open={opened}
            component={component}
            onBackButtonClick={this.onBackButtonClick.bind(this)}
          />
        </div>
      );
    }
  }

  return HOC;
};

export { withSlidePanel };
