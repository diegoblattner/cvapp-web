import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { SlidePanel } from './SlidePanel';
import * as styles from './styles.module.scss';

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
const withSlidePanel = (WrappedComponent) => {
  const ComponentWithSlidePanel = (props) => {
    const [state, setState] = useState(initialState());
    const [openedClass, setOpenedClass] = useState(null);
    const slidePanelRef = useRef();

    const openSlidePanel = (component, slidePanelProps = {}) => {
      setState({
        scrollPosition: [window.scrollX, window.scrollY],
        opened: true,
        component,
        slidePanelProps,
      });

      // sets a timeout to add the auxiliar class after the animation has ocurred
      setTimeout(() => {
        setOpenedClass(styles.withslidepanel__container__slidepanelon);
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
      const {slidePanelProps: { onBackButtonClick }} = state;
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
            opened ? styles.withslidepanel__container__transitioning : ''
          } ${openedClass}`}
        >
          <WrappedComponent
            {...props}
            slidePanel={{
              open: openSlidePanel,
              close: closeSlidePanel,
              element: slidePanelRef.current,
              isOpen: opened,
            }}
          />
        </div>
        {opened && <div className={styles.slidepanel__overlay} />}
        <SlidePanel
          {...slidePanelProps}
          open={opened}
          component={component}
          onBackButtonClick={handleBackButtonClick}
          ref={slidePanelRef}
        />
      </div>
    );
  };

  return ComponentWithSlidePanel;
};

export { withSlidePanel };
