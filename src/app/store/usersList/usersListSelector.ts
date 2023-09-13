import { RootState } from 'app/store/store';

export const selectorGetUsersList = (state: RootState) =>
  state.usersList.usersList;
