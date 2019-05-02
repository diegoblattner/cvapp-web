import { h } from 'preact';
import styles from './styles.scss';
import { Avatar } from '../Avatar/Avatar';
import { getCompany } from '../../services/cv';
import { Role } from '../Role/Role';

const Project = ({ name, description, tasks }) => (
  <li>
    {name && <strong>{name}</strong>}
    {description && <p>{description}</p>}
    <strong>Tasks</strong>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </li>
);

const RoleDetails = props => {
  const { role, startDate, endDate = 'Now', company, projects } = props;
  const { avatar } = getCompany(company);
  return (
    <div className={styles.role}>
      <Role {...props} />
      <ul>
        {projects.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </ul>
    </div>
  );
};

export { RoleDetails };

const aaa = {
  role: 'Engineering Manager',
  startDate: 'April 2017',
  endDate: 'Aug 2018',
  company: 'CarTrawler',
  projects: [
    {
      name: 'CMS Project',
      description:
        'Migrated the legacy landing pages platform from Play Framework to Node.js. The new platform is a white label project built using React with Server-Side rendering, mobile first, following a microservices/​microfrontends approach where each site component is independent and can be deployed separately. The microsite is dynamically rendered according to the data received from the CMS API.',
      tasks: [
        'Managed a team of 3 (2 JavaScript developers and 1 QA)',
        'Held regular refinement sessions with commercial, PM, designers and backend developers to align requirements and create BDD scenarios',
        'Enhanced developer experience: A CLI tool was created to scaffold components with a standardized folder structure for them, with style, test and Storybook files ready',
        'Defined the CI and CD processes. 100% unit test code coverage. Applications with their own Docker container in a Kubernetes cluster hosted in AWS',
        'Held regular 1-2-1s, set team members objectives, held salary reviews and performance conversations',
      ],
    },
    {
      name: 'Car Mobile Web Project',
      description:
        'Developed and maintained an adaptive white label version of the car booking engine. The legacy application was built in AngularJS 1.6 and was re-designed to look and feel like a native app, which resulted in a 35% increase of the conversion rate when compared to the old mobile web app.',
      tasks: [
        'Managed a team of 5 (4 JavaScript developers and 1 QA)',
        'Wrote reusable, readable, maintainable and future proof code',
        'Held regular agile ceremonies',
        'Wrote BDD scenarios',
        'Held a regular Show & Tell session with the team members',
        'Talent acquisition: Analyse CVs, phone screens, code assessments and face to face interviews',
        'Held regular 1-2-1s, set team members objectives, hold salary reviews and performance conversations',
      ],
    },
  ],
  children: [],
};
