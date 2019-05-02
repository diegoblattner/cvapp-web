import { h } from 'preact';
import styles from './styles.scss';
import { Avatar } from '../Avatar/Avatar';
import { getCompany } from '../../services/cv';
import { Icon, iconsEnum } from '../Icons/Icons';

const Role = ({ role, startDate, endDate = 'Now', company, onSelectRole }) => {
  const { avatar } = getCompany(company);
  return (
    <li className={styles.role} onClick={onSelectRole}>
      <Avatar avatar={avatar} />
      <strong className={styles.role__name}>{role}</strong>
      <span className={styles.role__period}>
        {startDate} - {endDate}
      </span>
      {onSelectRole && (
        <Icon className={styles.role__select} src={iconsEnum.chevron} />
      )}
    </li>
  );
};

export { Role };
