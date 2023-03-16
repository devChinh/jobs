import { Box, MenuItem, TextField } from '@mui/material';
import { AppDispatch, RootState } from 'app/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedGroupAction } from 'stores/recordPilot/slice';
import {
  TOptionsGroup,
  TOptionsUAV,
  optionSelected,
} from 'types/recordPilot/selectGroup';

function SelectGroup() {
  const dispatch = useDispatch<AppDispatch>();

  const record = useSelector((state: RootState) => state);
  console.log(record);

  const handleChangeGroup = (event: React.ChangeEvent<{ value: string }>) => {
    dispatch(selectedGroupAction(event.target.value));
  };

  const handleChangeUAV = (event: React.ChangeEvent<{ value: string }>) => {
    // dispatch(selectedGroup(event.target.value));
  };

  return (
    <>
      <Box sx={{ margin: 5 }}>
        <TextField
          select
          label="Select group"
          value={record?.selectedGroup?.label}
          onChange={handleChangeGroup}
          sx={{ width: 200 }}
        >
          {record.groups.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Select UAV"
          value={record.selectedUav.value}
          onChange={handleChangeUAV}
          sx={{ width: 200 }}
        >
          {record.uavs.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>
  );
}

export default SelectGroup;
