import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const usersSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  extraReducers: () => {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = usersSlice.actions;

export default usersSlice.reducer;
