import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import * as focusTrap from 'focus-trap';
import { Icon, iconsEnum } from '../Icons/Icons';
import * as styles from './styles.module.scss';

const SlidePanel = ({
  backButton = true,
  onBackButtonClick,
  title,
  open,
  className = '',
  component,
}) => {
  const contentRef = useRef();

  useEffect(() => {
    let trap;

    if (contentRef.current && open) {
      trap = focusTrap.createFocusTrap(contentRef.current, {
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
        onPostDeactivate: onBackButtonClick,
      });
      trap.activate();
    }

    return () => {
      if (trap?.active) {
        trap.deactivate();
      }
    };
  }, [open]);

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
};

export { SlidePanel };
