import { h, createRef, ComponentChildren, RefObject } from 'preact';
import { useMemo } from 'preact/hooks';
import { forwardRef } from 'preact/compat';
import { Icon, iconsEnum } from '../Icons/Icons';
import styles from './styles.module.scss';
import { useInvisibleOnResize } from './useInvisibleOnResize';
import { useFocusTrap } from './useFocusTrap';

export type SlidePanelProps = {
  backButton?: boolean;
  onBackButtonClick: () => void;
  title?: string;
  open: boolean;
  className?: string;
  component: ComponentChildren;
}

const SlidePanel = forwardRef<HTMLElement, SlidePanelProps>(({
  backButton = true,
  onBackButtonClick,
  title,
  open,
  className = '',
  component,
}, ref) => {
  const contentRef = useMemo(() => ref ?? createRef(), []) as RefObject<HTMLElement>;
  useInvisibleOnResize(contentRef);
  useFocusTrap(contentRef, open, onBackButtonClick);

  return (
    <div ref={contentRef as RefObject<HTMLDivElement>} className={`${styles.slidepanel} ${className} ${open ? styles.slidepanel__open : ''}`}>
      {(backButton || title) && (
        <div className={styles.slidepanel__header}>
          {backButton && (
            <button
              className={styles.slidepanel__header__back}
              onClick={onBackButtonClick}
              aria-label="Back"
            >
              <Icon src={iconsEnum.arrow} />
            </button>
          )}
          {title && <h2 className={styles.slidepanel__header__title}>{title}</h2>}
        </div>
      )}
      {component}
    </div>
  );
});

export { SlidePanel };
