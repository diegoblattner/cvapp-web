import { h } from 'preact';
import debounce from 'debounce';
import { useState, useEffect, useRef } from 'preact/hooks';
import styles from './styles.scss';

const inViewClass = styles['section--in-view'];

const uiGap = 30;
const elementIsInView = element => {
  const top = element.offsetTop + uiGap;
  return top < window.pageYOffset + window.innerHeight;
};

const Section = ({ title, className = '', children }) => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState('');
  const onScroll = useRef(null);

  const setInViewState = () => {
    const isInview = elementIsInView(containerRef.current);

    if (isInview) {
      setInView(inViewClass);
    }

    return isInview;
  };

  useEffect(() => {
    if (!setInViewState()) {
      onScroll.current = debounce(
        () => {
          if (setInViewState()) {
            document.removeEventListener('scroll', onScroll.current);
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
        <div class={styles.section__ruler}>
          <h3 className={styles.section__title}>{title}</h3>
        </div>
      )}
      {children}
    </section>
  );
};

export { Section };
