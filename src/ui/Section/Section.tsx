import { ComponentChildren, h } from 'preact';
import debounce from 'debounce';
import { useState, useEffect, useRef } from 'preact/hooks';
import styles from './styles.module.scss';

const uiGap = 30;
const elementIsInView = (element: HTMLElement) => {
  const top = element.offsetTop + uiGap;
  return top < window.pageYOffset + window.innerHeight;
};

type SectionProps = {
  title?: string;
  className?: string;
  children?: ComponentChildren;
}

type Callback = () => void;

const Section = ({ title, className = '', children }: SectionProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState('');
  const onScroll = useRef<Callback>();

  const setInViewState = () => {
    const isInview = elementIsInView(containerRef.current!);

    if (isInview) {
      setInView(styles.section__in_view);
    }

    return isInview;
  };

  useEffect(() => {
    if (!setInViewState()) {
      onScroll.current = debounce(
        () => {
          if (setInViewState()) {
            document.removeEventListener('scroll', onScroll.current!);
          }
        },
        100,
        200,
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

  return (
    <section
      ref={containerRef}
      className={`${styles.section} ${className} ${inView}`}
    >
      {title && (
        <div className={styles.section__ruler}>
          <h3 className={styles.section__title}>{title}</h3>
        </div>
      )}
      {children}
    </section>
  );
};

export { Section };
