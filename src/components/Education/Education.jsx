import { h } from 'preact';
import { List } from '../../ui/List/List';
import { ListItem } from '../../ui/ListItem/ListItem';

const Education = ({ education }) => (
  <List>
    {education.map(({ course, institution, period }, i) => (
      <li key={i}>
        <ListItem
          title={course}
          subtitle={period}
          company={institution}
          showCompanyName
        />
      </li>
    ))}
  </List>
);

export { Education };
