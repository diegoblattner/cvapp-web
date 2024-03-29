import { h } from 'preact';
import type { CVData } from '@types';
import { getCompany } from '@services/cv';
import { List } from '@ui/List/List';
import { ListItem } from '@ui/ListItem/ListItem';

const Education = ({ education }: Pick<CVData, "education">) => (
  <List>
    {education.map(({ course, institution, period }, i) => {
      const { avatar, name } = getCompany(institution)!;
      return (
        <li key={i}>
          <ListItem
            avatar={avatar}
            name={name}
            title={course}
            subtitle={period}
            showCompanyName
          />
        </li>
      );
    })}
  </List>
);

export { Education };
