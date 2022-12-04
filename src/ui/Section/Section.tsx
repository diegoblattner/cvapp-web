import { ComponentChildren } from 'preact';
import { useRef } from 'preact/hooks';
import styles from './styles.module.scss';
import { useAnimateInView } from './useAnimateInView';

type SectionProps = {
  title?: string;
  className?: string;
  children?: ComponentChildren;
  startVisible?: boolean;
}

const Section = ({
  title,
  className = '',
  children,
  startVisible,
}: SectionProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const inViewClass = useAnimateInView(containerRef, styles.section__in_view, startVisible);

  return (
    <section
      ref={containerRef}
      className={`${styles.section} ${className} ${inViewClass}`}
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
