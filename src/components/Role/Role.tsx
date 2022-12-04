import { h } from 'preact';
import { ListItem, ListItemClickable } from '@ui/ListItem/ListItem';
import { getCompany } from "../../services/cv";

type RoleProps = {
  className?: string;
  role: string;
  startDate: string;
  endDate?: string;
  company: string;
}

type RoleClickableProps = RoleProps & {
  onSelectRole: () => void;
};

const RoleClickable = ({ role, startDate, endDate = 'Now', company, onSelectRole }: RoleClickableProps) => {
  const { avatar, name } = getCompany(company)!;
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

const Role = ({ className, role, startDate, endDate = 'Now', company }: RoleProps) => {
  const { avatar, name } = getCompany(company)!;
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
