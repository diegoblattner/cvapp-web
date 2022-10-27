import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { useSignalEffect } from '@preact/signals';
import { ExperienceDetails } from '../Experience/ExperienceDetails';
import {
  selectedRoleIndex,
  isRoleSelected,
  setSelectedRoleIndex,
  setRolesLength,
} from './state';
import { onSwipe } from '../../services/swipe';

export const useAppMain = (experience, slidePanel) => {
  const { open, isOpen, close, element } = slidePanel;

  setRolesLength(experience?.length ?? 0);

  useSignalEffect(() => {
    if (isRoleSelected.value) {
      if (!isOpen) {
        open(<ExperienceDetails roles={experience} />, { title: 'Experience' });
      }
    } else if (isOpen) {
      close();
    }
  });

  useEffect(() => {
    if (isOpen && element) {
      const cleanup = onSwipe(element, {
        left: () => setSelectedRoleIndex(selectedRoleIndex.value + 1),
        right: () => setSelectedRoleIndex(selectedRoleIndex.value - 1),
      });
      return cleanup;
    } if (selectedRoleIndex.value !== -1) {
      setSelectedRoleIndex(-1)
    }

    return undefined;
  }, [isOpen, element]);

  const selectRole = (role) => {
    setSelectedRoleIndex(experience.indexOf(role));
  };

  return { selectRole };
};
