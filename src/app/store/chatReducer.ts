// Part 1
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Part 2
export interface IssueInitialState {
  chat: string[];
}
const initialState: IssueInitialState = {
  chat: [],
};

// Part 3
export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<string>) => {
      state.chat = [...state.chat, action.payload];
    },
  },
});

// Part 4
export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
