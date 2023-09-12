import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'types/types';

export interface UserInitialState {
  userInfo: User | null;
}
const initialState: UserInitialState = {
  userInfo: null,
};

export const chatSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { addUser, removeUser } = chatSlice.actions;
export default chatSlice.reducer;
