import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { optionSelected } from 'types/recordPilot/selectGroup';

interface StateType {
  groups: {
    id: number;
    value: string;
    label: string;
  }[];
  uavs: {
    id: number;
    value: string;
    label: string;
  }[];
  selectedGroup:
    | {
        id: number;
        value: string;
        label: string;
      }
    | undefined;
  selectedUav: {
    id: number;
    value: string;
    label: string;
  };
}

const initialState: StateType = {
  groups: [
    { id: 0, value: 'group1', label: 'Group 1' },
    { id: 1, value: 'group2', label: 'Group 2' },
    { id: 2, value: 'group3', label: 'Group 3' },
  ],
  uavs: [
    { id: 0, value: 'UAV1', label: 'UAV 1' },
    { id: 1, value: 'UAV2', label: 'UAV 2' },
    { id: 2, value: 'UAV3', label: 'UAV 3' },
  ],
  selectedGroup: {
    id: 0,
    value: '',
    label: '',
  },
  selectedUav: {
    id: 0,
    value: '',
    label: '',
  },
};

const recordPilotSlice = createSlice({
  name: 'recordPilotSlice',
  initialState,
  reducers: {
    selectedGroupAction: (state, action: PayloadAction<string>) => {
      const optionSelected: optionSelected = current(state).groups.find(
        (option) => option.value === action.payload,
      );
      const optionUAVMatching = current(state).uavs.find(
        (option) => option.id === optionSelected?.id,
      );
      console.log(current(state).selectedGroup);
      current(state).selectedGroup = optionSelected;
      // console.log(optionSelected);
      // console.log(optionUAVMatching);
    },
  },
});

export const { selectedGroupAction } = recordPilotSlice.actions;

export default recordPilotSlice.reducer;
