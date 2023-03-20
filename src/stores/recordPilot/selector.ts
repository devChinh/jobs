import { RootState } from 'app/store';
import { createSelector } from 'reselect';

export const userSelectorGroups = (state: RootState) => state.groups;
export const userSelectorUavs = (state: RootState) => state.uavs;
export const userselectedGroupId = (state: RootState) => state.selectedGroupId;
export const userSelectorUavsId = (state: RootState) => state.selectedUavId;

export const totalSelector = createSelector(
  userSelectorGroups,
  userSelectorUavs,
  userselectedGroupId,
  userSelectorUavsId,
  (groups, uavs, groupId, uavId) => {
    const groupSelected = groups.find((option) => option.id === groupId);
    const uavSelected = uavs.find((option) => option.id === groupSelected?.id);
    return {
      groups,
      uavs,
      groupSelected,
      uavSelected,
    };
  },
);
