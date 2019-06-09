import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { SlidePanel } from './SlidePanel';
import styles from './styles.scss';

const transitioningClassName =
  styles['withslidepanel__container--transitioning'];
const openedClassName = styles['withslidepanel__container--slidepanelon'];
const animationDuration = 500;

const initialState = () => ({
  opened: false,
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
  const ComponentWithSlidePanel = props => {
    const [state, setState] = useState(initialState());
    const [openedClass, setOpenedClass] = useState(null);

    const openSlidePanel = (component, slidePanelProps = {}) => {
      setState({
        scrollPosition: [window.scrollX, window.scrollY],
        opened: true,
        component,
        slidePanelProps,
      });

      // sets a timeout to add the auxiliar class after the animation has ocurred
      setTimeout(() => {
        setOpenedClass(openedClassName);
      }, animationDuration);
    };

    const closeSlidePanel = () => {
      setOpenedClass(null);
      setState({
        ...state,
        opened: false,
      });

      // sets a timeout to remove the component after the transition has occurred
      setTimeout(() => {
        setState(initialState());
      }, animationDuration);
    };

    useEffect(() => {
      // Goes back to the previous container scroll position
      if (!openedClass && state.scrollPosition) {
        window.scroll(...state.scrollPosition);
      }
    }, [openedClass]);

    const handleBackButtonClick = () => {
      const {
        slidePanelProps: { onBackButtonClick },
      } = state;
      if (onBackButtonClick) {
        onBackButtonClick();
      } else {
        closeSlidePanel();
      }
    };

    const { className = '', opened, component, slidePanelProps } = state;

    return (
      <div className={`${styles.withslidepanel} ${className}`}>
        <div
          className={`${styles.withslidepanel__container} ${
            opened ? transitioningClassName : ''
          } ${openedClass}`}
        >
          <WrappedComponent
            {...props}
            slidePanel={{
              open: openSlidePanel,
              close: closeSlidePanel,
            }}
          />
        </div>
        <SlidePanel
          {...slidePanelProps}
          open={opened}
          component={component}
          onBackButtonClick={handleBackButtonClick}
        />
      </div>
    );
  };

  return ComponentWithSlidePanel;
};

export { withSlidePanel };
