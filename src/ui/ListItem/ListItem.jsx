import { h } from 'preact';
import { Avatar } from '../Avatar/Avatar';
import { Icon, iconsEnum } from '../Icons/Icons';
import { getCompany } from '../../services/cv';
import styles from './styles.module.scss';

const ListItem = ({ title, subtitle, company, showCompanyName, showSelectIcon }) => {
  const { avatar, name } = getCompany(company);
  return (
    <div className={styles.listItem}>
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
};

const ListItemClickable = ({ onSelectItem, ...rest }) => (
  <button className={`${styles.listItem} ${styles.clickable}`} onClick={onSelectItem}>
    <ListItem {...rest} showSelectIcon />
  </button>
);

export { ListItem, ListItemClickable };
