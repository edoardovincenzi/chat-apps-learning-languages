import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserPB } from 'types';

export interface UserInitialState {
  userInfo: UserPB | null;
}
const initialState: UserInitialState = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserPB>) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
