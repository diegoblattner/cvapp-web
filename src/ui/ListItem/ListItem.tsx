import { h } from 'preact';
import { Avatar } from '../Avatar/Avatar';
import { Icon, iconsEnum } from '../Icons/Icons';
import styles from './styles.module.scss';

type ListItemProps = {
  className?: string;
  name: string;
  avatar: string;
  title: string;
  subtitle?: string;
  showCompanyName?: boolean;
  showSelectIcon?: boolean;
};

const ListItem = ({
  className = '',
  name,
  avatar,
  title,
  subtitle,
  showCompanyName,
  showSelectIcon,
}: ListItemProps) => (
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

type ListItemClickableProps = ListItemProps & {
  onSelectItem: () => void;
};

const ListItemClickable = ({ onSelectItem, ...rest }: ListItemClickableProps) => (
  <button className={`${styles.listItem} ${styles.clickable}`} onClick={onSelectItem}>
    <ListItem {...rest} showSelectIcon />
  </button>
);

export { ListItem, ListItemClickable };
