import { h } from 'preact';
import { Avatar } from '../Avatar/Avatar';
import { Icon, iconsEnum } from '../Icons/Icons';
import styles from './styles.module.scss';

const ListItem = ({
  className,
  name,
  avatar,
  title,
  subtitle,
  showCompanyName,
  showSelectIcon,
}) => (
    <div className={`${styles.listItem} ${className}`}>
      <Avatar avatar={avatar} />
      <span className={styles.listItem__name}>
        {title}
      </span>
      <span className={styles.listItem__subtitle}>
        {subtitle}
        {showCompanyName && (
          <span className={styles.listItem__company}>
            &nbsp;at {name}
          </span>
        )}
      </span>
      {showSelectIcon && <Icon className={styles.listItem__select} src={iconsEnum.chevron} />}
    </div>
);

const ListItemClickable = ({ onSelectItem, ...rest }) => (
  <button className={`${styles.listItem} ${styles.clickable}`} onClick={onSelectItem}>
    <ListItem {...rest} showSelectIcon />
  </button>
);

export { ListItem, ListItemClickable };
