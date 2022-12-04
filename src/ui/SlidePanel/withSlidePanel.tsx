import { ComponentChild, ComponentChildren, ComponentType, h, RefObject } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { SlidePanel, SlidePanelProps } from './SlidePanel';
import styles from './styles.module.scss';

const animationDuration = 500;

export type InnerSlidePanelProps = {
  open: (component: ComponentChildren, slidePanelProps: Partial<SlidePanelProps>) => void;
  close: () => void;
  element?: HTMLElement;
  isOpen: boolean;
};

export type WithSlidePanelProps<P> = P &{
  slidePanel: InnerSlidePanelProps;
};

type State = {
  className?: string;
  opened: boolean;
  component: ComponentChildren,
  scrollPosition: [number, number] | null,
  slidePanelProps: Partial<SlidePanelProps>,
};

const initialState = (): State => ({
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
const withSlidePanel = <P extends Record<string, unknown>>(WrappedComponent: ComponentType<WithSlidePanelProps<P>>) => {
  const ComponentWithSlidePanel = (props: P) => {
    const [state, setState] = useState(initialState());
    const [openedClass, setOpenedClass] = useState<string | null>(null);
    const slidePanelRef = useRef<HTMLElement>();

    const openSlidePanel = (component: ComponentChild, slidePanelProps = {}) => {
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
          } ${openedClass ?? ''}`}
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
          ref={slidePanelRef as RefObject<HTMLElement>}
        />
      </div>
    );
  };

  return ComponentWithSlidePanel;
};

export { withSlidePanel };
