import { CVData } from '@types';
import { h } from 'preact';
import { getCompany } from '../../services/cv';
import { List } from '../../ui/List/List';
import { ListItem } from '../../ui/ListItem/ListItem';

const Certifications = ({ certifications }: Pick<CVData, "certifications">) => (
  <List>
    {certifications.map(({ name, provider, date }, i) => {
      const { avatar, name: providerName } = getCompany(provider)!;
      return (
      <li key={i}>
        <ListItem
          avatar={avatar}
          name={providerName}
          title={name}
          subtitle={date}
        />
      </li>
      );
    })}
  </List>
);

export { Certifications };
