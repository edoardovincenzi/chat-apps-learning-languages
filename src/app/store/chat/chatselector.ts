import { RootState } from 'app/store/store';

export const selectorGetChat = (state: RootState) => state.chat.chat;
