import { h, createRef } from 'preact';
import { forwardRef } from 'preact/compat';
import { useMemo } from 'preact/hooks';
import { Icon, iconsEnum } from '../Icons/Icons';
import * as styles from './styles.module.scss';
import { useInvisibleOnResize } from './useInvisibleOnResize';
import { useFocusTrap } from './useFocusTrap';

const SlidePanel = forwardRef(({
  backButton = true,
  onBackButtonClick,
  title,
  open,
  className = '',
  component,
}, ref) => {
  const contentRef = useMemo(() => ref ?? createRef(), []);
  useInvisibleOnResize(contentRef);
  useFocusTrap(ref, open, onBackButtonClick);

  return (
    <div ref={contentRef} className={`${styles.slidepanel} ${className} ${open ? styles.slidepanel__open : ''}`}>
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
