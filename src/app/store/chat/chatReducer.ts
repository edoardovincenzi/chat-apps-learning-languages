// Part 1
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatPB } from 'types';

// Part 2
export interface IssueInitialState {
  chat: ChatPB[];
}
const initialState: IssueInitialState = {
  chat: [],
};

// Part 3
export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<ChatPB>) => {
      state.chat = [...state.chat, action.payload];
    },
    addHistoryChat: (state, action: PayloadAction<ChatPB[]>) => {
      state.chat = action.payload;
    },
    resetChat: (state) => {
      state.chat = [];
    },
  },
});

// Part 4
export const { addChat, addHistoryChat, resetChat } = chatSlice.actions;
export default chatSlice.reducer;
