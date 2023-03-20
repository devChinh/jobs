import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import {
  StateRecordPilotType,
  TOptionSelected,
} from 'types/recordPilot/selectGroup';

const initialState: StateRecordPilotType = {
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
  selectedGroupId: null,
  selectedUavId: null,
};

const recordPilotSlice = createSlice({
  name: 'recordPilotSlice',
  initialState,
  reducers: {
    selectedGroupAction: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        selectedGroupId: action.payload,
      };
    },
    selectedUAVAction: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        selectedUavId: action.payload,
      };
    },
  },
});

export const { selectedGroupAction, selectedUAVAction } =
  recordPilotSlice.actions;

export default recordPilotSlice.reducer;
