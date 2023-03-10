import { createSelector } from 'reselect';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const userSelector = () => {};

export const totalSelector = createSelector(userSelector, (value1) => value1);
