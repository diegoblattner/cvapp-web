import { h } from 'preact';
import * as styles from './styles.module.scss';
import { Avatar } from '../../ui/Avatar/Avatar';
import { getCompany } from '../../services/cv';
import { Icon, iconsEnum } from '../../ui/Icons/Icons';
import { ListItem, ListItemClickable } from '../../ui/ListItem/ListItem';

const RoleClickable = ({ role, startDate, endDate = 'Now', company, onSelectRole }) => (
  <li>
    <ListItemClickable
      title={role}
      subtitle={`${startDate} - ${endDate}`}
      company={company}
      showCompanyName
      onSelectItem={onSelectRole}
    />
  </li>
);

const Role = ({ role, startDate, endDate = 'Now', company }) => (
  <ListItem
    title={role}
    subtitle={`${startDate} - ${endDate}`}
    company={company}
    showCompanyName
  />
);

export { RoleClickable, Role };
