import { Box, MenuItem, TextField } from '@mui/material';
import { AppDispatch, RootState } from 'app/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totalSelector } from 'stores/recordPilot/selector';
import {
  selectedGroupAction,
  selectedUAVAction,
} from 'stores/recordPilot/slice';
import { TOptionGroup, TOptionUAV } from 'types/recordPilot/selectGroup';

function SelectGroup() {
  const dispatch = useDispatch<AppDispatch>();

  const record = useSelector(totalSelector);

  const handleChangeSelect = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    string: string,
  ) => {
    switch (string) {
      case 'input1': {
        dispatch(selectedGroupAction(+event.target.value));
        break;
      }
      case 'input2': {
        dispatch(selectedUAVAction(+event.target.value));
        break;
      }
    }
  };

  return (
    <>
      <Box sx={{ margin: 5 }}>
        <TextField
          select
          id="input1"
          label="Select group"
          value={record?.groupSelected?.label}
          onChange={(e) => handleChangeSelect(e, 'input1')}
          sx={{ width: 200 }}
        >
          {record.groups.map((option: TOptionGroup, index) => (
            <MenuItem key={index} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="input2"
          label="Select UAV"
          value={record?.uavSelected?.label}
          onChange={(e) => handleChangeSelect(e, 'input2')}
          sx={{ width: 200 }}
        >
          {record.uavs.map((option: TOptionUAV, index) => (
            <MenuItem key={index} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>
  );
}

export default SelectGroup;
