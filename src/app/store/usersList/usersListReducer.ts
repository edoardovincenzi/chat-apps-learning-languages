import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserPB } from 'types';

export interface UserInitialState {
  usersList: UserPB[] | [];
}
const initialState: UserInitialState = {
  usersList: [],
};

export const userListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<UserPB[]>) => {
      state.usersList = action.payload;
    },
    resetUsersList: (state) => {
      state.usersList = [];
    },
  },
});

export const { addUsers, resetUsersList } = userListSlice.actions;
export default userListSlice.reducer;
