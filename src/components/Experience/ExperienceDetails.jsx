import { h } from 'preact';
import { RoleDetails } from '../Role/RoleDetails';
import { Carousel } from '../../ui/Carousel/Carousel';
import { selectedRoleIndex, setSelectedRoleIndex } from '../App/state';

const ExperienceDetails = ({ roles }) => (
  <Carousel currentIndex={selectedRoleIndex.value} onChange={setSelectedRoleIndex}>
    {roles.map((role, index) => (
      <RoleDetails {...role} key={index} />
    ))}
  </Carousel>
);

export { ExperienceDetails };
