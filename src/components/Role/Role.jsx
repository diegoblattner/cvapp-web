import { h } from 'preact';
import * as styles from './styles.module.scss';
import { Avatar } from '../../ui/Avatar/Avatar';
import { getCompany } from '../../services/cv';
import { Icon, iconsEnum } from '../../ui/Icons/Icons';

const RoleClickable = ({ role, startDate, endDate = 'Now', company, onSelectRole }) => {
  const { avatar } = getCompany(company);
  return (
    <li className={`${styles.role} ${styles.clickable}`} onClick={onSelectRole}>
      <Avatar avatar={avatar} />
      <strong className={styles.role__name}>{role}</strong>
      <span className={styles.role__period}>
        {startDate} - {endDate}
      </span>
      <Icon className={styles.role__select} src={iconsEnum.chevron} />
    </li>
  );
};

const Role = ({ role, startDate, endDate = 'Now', company }) => {
  const { avatar } = getCompany(company);
  return (
    <div className={styles.role}>
      <Avatar avatar={avatar} />
      <strong className={styles.role__name}>{role}</strong>
      <span className={styles.role__period}>
        {startDate} - {endDate}
      </span>
    </div>
  );
};

export { RoleClickable, Role };
