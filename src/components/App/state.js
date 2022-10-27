import { signal, computed } from '@preact/signals';

export const rolesLength = signal(0);
export const selectedRoleIndex = signal(-1);
export const isRoleSelected = computed(
  () => selectedRoleIndex.value >= 0 && selectedRoleIndex.value < rolesLength,
);

export const setSelectedRoleIndex = (index) => {
  if (selectedRoleIndex.value !== index) {
    selectedRoleIndex.value = index;
  }
}

export const setRolesLength = (value) => {
  if (rolesLength !== value) {
    rolesLength.value = value;
  }
}
