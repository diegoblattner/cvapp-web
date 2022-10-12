import { h } from 'preact';
import { Icon, iconsEnum } from '../Icons/Icons';
import * as styles from './styles.module.scss';

const openClass = styles['slidepanel--open'];

const SlidePanel = ({
  backButton = true,
  onBackButtonClick,
  title,
  open,
  className = '',
  component,
}) => (
  <div className={`${styles.slidepanel} ${className} ${open ? openClass : ''}`}>
    <div className={styles.slidepanel__content}>
      {(backButton || title) && (
        <div className={styles.slidepanel__header}>
          {backButton && (
            <button
              className={styles.slidepanel__header__back}
              onClick={onBackButtonClick}
            >
              <Icon src={iconsEnum.arrow} />
            </button>
          )}
          {title && <h2 className={styles.slidepanel__header__title}>{title}</h2>}
        </div>
      )}
      {component}
    </div>
  </div>
);

export { SlidePanel };
