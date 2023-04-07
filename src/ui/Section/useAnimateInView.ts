import { RefObject } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import debounce from "lodash.debounce";

const uiGap = 30;
const elementIsInView = (element: HTMLElement) => {
  const top = element.offsetTop + uiGap;
  return top < window.pageYOffset + window.innerHeight;
};

type Callback = () => void;

export const useAnimateInView = (containerRef: RefObject<HTMLElement>, inViewClass: string, startInView?: boolean) => {
  const [className, setClassName] = useState(startInView ? inViewClass : '');

  const onScroll = useRef<Callback>();

  const setInViewState = () => {
    const isInview = elementIsInView(containerRef.current!);

    if (isInview) {
      setClassName(inViewClass);
    }

    return isInview;
  };

  useEffect(() => {
    if (startInView) return undefined;
  
    if (!setInViewState()) {
      onScroll.current = debounce(
        () => {
          if (setInViewState()) {
            document.removeEventListener('scroll', onScroll.current!);
          }
        },
        100,
        {maxWait: 200},
      );
      document.addEventListener('scroll', onScroll.current);
    }

    // on unmount
    return () => {
      if (onScroll.current) {
        document.removeEventListener('scroll', onScroll.current);
      }
    };
  }, []);

  return className;
};
