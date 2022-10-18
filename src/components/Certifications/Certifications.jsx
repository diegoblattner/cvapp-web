import { h } from 'preact';
import { List } from '../../ui/List/List';
import { ListItem } from '../../ui/ListItem/ListItem';

const Certifications = ({ certifications }) => (
  <List>
    {certifications.map(({ name, provider, date }, i) => (
      <li key={i}>
        <ListItem
          title={name}
          subtitle={date}
          company={provider}
        />
      </li>
    ))}
  </List>
);

export { Certifications };
