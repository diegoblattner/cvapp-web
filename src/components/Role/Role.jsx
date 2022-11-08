import { h } from 'preact';
import { getCompany } from "../../services/cv";
import { ListItem, ListItemClickable } from '../../ui/ListItem/ListItem';

const RoleClickable = ({ role, startDate, endDate = 'Now', company, onSelectRole }) => {
  const { avatar, name } = getCompany(company);
  return (
    <li>
      <ListItemClickable
        avatar={avatar}
        name={name}
        title={role}
        subtitle={`${startDate} - ${endDate}`}
        showCompanyName
        onSelectItem={onSelectRole}
      />
    </li>
  );
};

const Role = ({ className, role, startDate, endDate = 'Now', company }) => {
  const { avatar, name } = getCompany(company);
  return (
    <ListItem
      className={className}
      avatar={avatar}
      name={name}
      title={role}
      subtitle={`${startDate} - ${endDate}`}
      showCompanyName
    />
  );
};

export { RoleClickable, Role };
