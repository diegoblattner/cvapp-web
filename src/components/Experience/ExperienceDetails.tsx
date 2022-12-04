import { h } from 'preact';
import { memo } from 'preact/compat';
import { Carousel } from '@ui/Carousel/Carousel';
import { Experience } from '@types';
import { RoleDetails } from '../Role/RoleDetails';
import { selectedRoleIndex, setSelectedRoleIndex } from '../App/state';

type ExperienceDetailsProps = {
  roles: Experience[];
};

const ExperienceDetails = memo(({ roles }: ExperienceDetailsProps) => (
  <Carousel currentIndex={selectedRoleIndex.value} onChange={setSelectedRoleIndex}>
    {roles.map((role, index) => (
      <RoleDetails {...role} key={index} />
    ))}
  </Carousel>
));

export { ExperienceDetails };
